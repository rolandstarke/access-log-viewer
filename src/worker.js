import { parse } from 'date-fns';
const uaParser = require('ua-parser-js');
import Reader from 'mmdb-lib';
const Buffer = require('buffer/').Buffer

function domainFromUrl(url) {
    let result;
    let match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?=]+)/im);
    if (match) {
        result = match[1];
        match = result.match(/^[^.]+\.(.+\..+)$/);
        if (match) {
            result = match[1];
        }
    }
    return result
}

async function getGeoIpDatabase() {
    return fetch('../geolite2-country.mmdb.txt')
        .then((r) => r.blob())
        .then((b) => b.arrayBuffer())
        .then((a) => {
            const buffer = Buffer.from(a);
            const cacheData = {};
            const cache = {
                get: (key) => cacheData[key],
                set: (key, value) => cacheData[key] = value,
            }
            const reader = new Reader(buffer, { cache: cache });
            return reader;
        });
}

const geoIpDatabasePromise = getGeoIpDatabase();


onmessage = async function (e) {
    const log = e.data;



    const lines = log.split('\n').map(line => {
        line = line.trim() + ' ';
        let colums = line.match(/(\[[^\]]*\]|"[^"]*"|[^"[\s]\S*)\s/g);
        if (colums) {
            colums = colums.map(v => v.trim());
        }
        return colums;
    }).filter(line => {
        return line && line.length > 5;
    });

    const detectedColumns = {
        ipAddress: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        date: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        statusCode: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        userAgend: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        referrer: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        request: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }


    lines.forEach(line => {
        line.forEach((column, i) => {
            if (column.match(/^\d+\.\d+\.\d+\.\d+$/)) { // 188.103.4.49
                detectedColumns.ipAddress[i] = detectedColumns.ipAddress[i] + 1 || 1;
            }

            if (column.match(/\d+\/\w+\/\d+:\d+:\d+:\d+/)) { // [18/Dec/2021:00:00:04 +0100]
                detectedColumns.date[i] = detectedColumns.date[i] + 1 || 1;
            }

            if (['200', '404', '302', '303', '304', '500'].indexOf(column) !== -1) { // 200
                detectedColumns.statusCode[i] = detectedColumns.statusCode[i] + 1 || 1;
            }

            if (column.indexOf('Mozilla') !== -1 || column.indexOf('AppleWebKit') !== -1) {
                detectedColumns.userAgend[i] = detectedColumns.userAgend[i] + 1 || 1;
            }

            if (column.indexOf('http://') !== -1 || column.indexOf('https://') !== -1) {
                detectedColumns.referrer[i] = detectedColumns.referrer[i] + 1 || 1;
            }

            if (column.indexOf('GET /') !== -1 || column.indexOf('POST /') !== -1) {
                detectedColumns.request[i] = detectedColumns.request[i] + 1 || 1;
            }
        });
    });


    for (const key in detectedColumns) {
        detectedColumns[key] = detectedColumns[key].indexOf(Math.max.apply(Math, detectedColumns[key]));
    }
    detectedColumns.transfere = detectedColumns.statusCode + 1;

    const parsedLogs = [];

    lines.forEach(line => {
        const logLine = {};

        if (line[detectedColumns.ipAddress]) {
            logLine.ipAddress = line[detectedColumns.ipAddress];
        }

        if (line[detectedColumns.statusCode]) {
            logLine.statusCode = +line[detectedColumns.statusCode];
        }

        if (line[detectedColumns.transfere]) {
            logLine.transfere = +line[detectedColumns.transfere];
        }

        if (line[detectedColumns.userAgend]) {
            logLine.userAgend = line[detectedColumns.userAgend];
        }

        if (line[detectedColumns.request]) {
            const request = line[detectedColumns.request].replace(/"/g, '');
            logLine.method = request.split(' ')[0] || '';
            logLine.url = request.split(' ')[1] || '';
            logLine.protocol = request.split(' ')[2] || '';
        }


        if (line[detectedColumns.referrer]) {
            logLine.referrer = line[detectedColumns.referrer].replace(/"/g, '');
            logLine.referrerDomain = domainFromUrl(logLine.referrer);
        }

        if (line[detectedColumns.date]) {
            let dateString = line[detectedColumns.date];
            dateString = dateString.replace(/[[\]]/g, '');
            logLine.date = parse(dateString, 'dd/MMM/yyyy:HH:mm:ss xx', new Date());
        }

        if (!logLine.ipAddress || !logLine.statusCode || !logLine.date) {
            return;
        }

        parsedLogs.push(logLine);
    });

    const geoIpDatabase = await geoIpDatabasePromise;

    const sessions = [];
    parsedLogs.forEach(parsedLog => {
        if (parsedLog.statusCode !== 200) {
            return;
        }

        for (let i = sessions.length - 1; i >= 0; i--) {
            if (sessions[i].ipAddress === parsedLog.ipAddress) {
                if (parsedLog.date - sessions[i].lastActive < 1000 * 60 * 30) {
                    //last request is not long ago, this is not a new session
                    sessions[i].lastActive = parsedLog.date;
                    return;
                }
                break;
            }
        }

        const parsedUserAgend = uaParser(parsedLog.userAgend);
        let browser = parsedUserAgend.browser.name;
        if (browser === 'Mobile Safari') {
            browser = 'Safari';
        }
        const device = parsedUserAgend.device.type || 'desktop';

        let country;
        const ipLookup = geoIpDatabase.get(parsedLog.ipAddress);
        if (ipLookup && ipLookup.country && ipLookup.country.iso_code) {
            country = ipLookup.country.iso_code;
        }

        sessions.push({
            ipAddress: parsedLog.ipAddress,
            date: parsedLog.date,
            lastActive: parsedLog.date,
            browser: browser,
            device: device,
            referrerDomain: parsedLog.referrerDomain,
            country: country,
        });
    });





    postMessage({
        logs: parsedLogs,
        sessions,
    });
}
