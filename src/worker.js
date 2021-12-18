import { parse } from 'date-fns'


onmessage = function (e) {
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

        sessions.push({
            ipAddress: parsedLog.ipAddress,
            lastActive: parsedLog.date,
        });
    });





    postMessage({
        logs: parsedLogs,
        sessions,
    });
}
