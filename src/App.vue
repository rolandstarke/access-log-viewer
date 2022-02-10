<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">Access Log Viewer</div>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <div
              id="dropzone"
              v-bind:class="{ 'drag-hover': dropHovering }"
              @drop.prevent="handleDrop"
              @dragover.prevent="dropHovering = true"
              @dragleave="dropHovering = false"
            >
              Drag one or more access.log files here.

              <br /><br />

              <v-btn @click="$refs.files.click()">Browse Files</v-btn>
              <br class="d-sm-none" />
              or <br class="d-sm-none" />
              <v-btn @click="loadSampleFile">Load sample File</v-btn>
              <input
                @change="handleFileChange"
                type="file"
                multiple
                id="files"
                ref="files"
              />
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card>
              <v-list-item v-for="file in files" :key="file.id" two-line>
                <v-list-item-content>
                  <v-list-item-title>{{ file.name }}</v-list-item-title>
                  <v-list-item-subtitle v-if="file.parsed"
                    >Requests:
                    {{ file.parsed.logs.length }}</v-list-item-subtitle
                  >
                  <v-list-item-subtitle v-if="!file.parsed"
                    >Requests: loading...</v-list-item-subtitle
                  >
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon @click="removeFile(file.id)">
                    <icon-trash height="16" width="16" />
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" lg="6">
            <v-card height="100%">
              <v-tabs
                id="tabs"
                v-model="tab"
                background-color="white"
                center-active
              >
                <v-tabs-slider color="blue"></v-tabs-slider>
                <v-tab class="text-capitalize">
                  <div>Sessions</div>
                  <div class="text-h6">{{ numberOfSessions }}</div>
                </v-tab>
                <v-tab class="text-capitalize">
                  <div>Requests</div>
                  <div class="text-h6">{{ numberOfRequests }}</div>
                </v-tab>
                <v-tab class="text-capitalize">
                  <div>Transfere</div>
                  <div class="text-h6">{{ transfere }}</div>
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab">
                <v-tab-item :transition="false">
                  <v-card flat v-if="tab === 0 && logs.length > 0">
                    <v-card-text>
                      <GChart
                        type="LineChart"
                        :data="chartDataSessions"
                        :options="{
                          legend: 'none',
                          chartArea: { width: '90%', height: '80%' },
                          colors: ['#2196f3'],
                        }"
                      />
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item :transition="false">
                  <v-card flat v-if="tab === 1 && logs.length > 0">
                    <v-card-text>
                      <GChart
                        type="LineChart"
                        :data="chartDataRequests"
                        :options="{
                          legend: 'none',
                          chartArea: { width: '90%', height: '80%' },
                          colors: ['#2196f3'],
                        }"
                      />
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item :transition="false">
                  <v-card flat v-if="tab === 2 && logs.length > 0">
                    <v-card-text>
                      <GChart
                        type="LineChart"
                        :data="chartDataTransfere"
                        :options="{
                          legend: 'none',
                          chartArea: { width: '90%', height: '80%' },
                          colors: ['#2196f3'],
                          vAxis: { format: 'short' },
                        }"
                      />
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-col>

          <v-col cols="12" lg="3">
            <v-card height="100%">
              <v-card-title> Sessions by Country </v-card-title>
              <v-card-text>
                <GChart
                  :settings="{ packages: ['geochart'] }"
                  type="GeoChart"
                  :data="chartDataMap"
                  :options="{
                    legend: 'none',
                    colorAxis: { colors: ['#93d5ed', '#1a73e8'] },
                  }"
                />
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" lg="3">
            <v-card height="100%" style="display: flex; flex-direction: column">
              <v-card-title> Sessions by Device </v-card-title>
              <v-card-text
                style="
                  flex-grow: 1;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                "
              >
                <div style="display: flex; justify-content: center">
                  <div style="width: 80px; text-align: center">
                    <icon-desktop
                      height="32"
                      width="32"
                      style="color: #aaa"
                    /><br />
                    Desktop
                  </div>
                  <div class="text-h5" style="width: 80px">
                    {{ devices.desktop.percentage.toFixed(1) }} %
                  </div>
                </div>
                <div style="display: flex; justify-content: center">
                  <div style="width: 80px; text-align: center">
                    <icon-mobile
                      height="32"
                      width="32"
                      style="color: #aaa"
                    /><br />
                    Mobile
                  </div>
                  <div class="text-h5" style="width: 80px">
                    {{ devices.mobile.percentage.toFixed(1) }} %
                  </div>
                </div>
                <div style="display: flex; justify-content: center">
                  <div style="width: 80px; text-align: center">
                    <icon-tablet
                      height="32"
                      width="32"
                      style="color: #aaa"
                    /><br />
                    Tablet
                  </div>
                  <div class="text-h5" style="width: 80px">
                    {{ devices.tablet.percentage.toFixed(1) }} %
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" lg="4">
            <v-card height="100%">
              <v-card-title>
                <div style="display: flex; width: 100%">
                  <div>Most Requested Files</div>
                  <v-switch
                    style="margin-left: auto; margin-top: 0"
                    v-model="assetSwitch"
                    label="Show Assets"
                  ></v-switch>
                </div>
              </v-card-title>
              <v-card-text>
                <v-simple-table dense>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Page</th>
                        <th class="text-left">Hits</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="item in assetSwitch
                          ? mostUrls
                          : mostUrlsWithoutAssets"
                        :key="item.url"
                      >
                        <td>
                          <span :title="item.url">{{
                            item.url.substring(0, 50) +
                            (item.url.length > 50 ? "..." : "")
                          }}</span>
                        </td>
                        <td>{{ item.hits }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" lg="2">
            <v-card height="100%">
              <v-card-title> Status Codes </v-card-title>
              <v-card-text>
                <v-simple-table dense>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Status</th>
                        <th class="text-left">Hits</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="item in mostStatusCodes"
                        :key="item.statusCode"
                      >
                        <td>{{ item.statusCode }}</td>
                        <td>{{ item.hits }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" lg="3">
            <v-card height="100%">
              <v-card-title> Top Referrer </v-card-title>
              <v-card-text>
                <v-simple-table dense>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Referrer</th>
                        <th class="text-left">Hits</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in mostReferrers" :key="item.referrer">
                        <td>
                          <span
                            style="
                              display: inline-block;
                              height: 16px;
                              width: 16px;
                              vertical-align: text-bottom;
                            "
                          >
                            <img
                              :src="'https://' + item.referrer + '/favicon.ico'"
                              height="16"
                              width="16"
                              onerror="this.style.display='none'"
                            />
                          </span>
                          {{ item.referrer }}
                        </td>
                        <td>{{ item.hits }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" lg="3">
            <v-card height="100%">
              <v-card-title> Sessions by Browser </v-card-title>
              <v-card-text>
                <v-simple-table dense>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Browser</th>
                        <th class="text-left">Hits</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in mostBrowsers" :key="item.url">
                        <td>
                          <span
                            style="
                              display: inline-block;
                              height: 16px;
                              width: 16px;
                              vertical-align: text-bottom;
                            "
                          >
                            <img
                              v-if="browserLogos[item.browser]"
                              :src="browserLogos[item.browser]"
                              height="16"
                              width="16"
                            />
                          </span>
                          {{ item.browser }}
                        </td>
                        <td>{{ item.hits }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title> Logs </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="search"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>

                <v-data-table
                  dense
                  :headers="headers"
                  :items="logs"
                  :search="search"
                  :footer-props="{
                    'items-per-page-options': [10, 20, 30],
                  }"
                >
                  <template v-slot:item.transfere="{ item }">
                    {{ prettyBytes(item.transfere) }}
                  </template>
                  <template v-slot:item.url="{ item }">
                    <span :title="item.url">{{
                      item.url.substring(0, 50) +
                      (item.url.length > 50 ? "..." : "")
                    }}</span>
                  </template>
                  <template v-slot:item.date="{ item }">
                    {{
                      item.date.toLocaleDateString() +
                      "&nbsp;" +
                      item.date.toLocaleTimeString()
                    }}
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer padless>
      <v-card flat tile width="100%" class="primary lighten-1 text-center">
        <v-card-text>
          <v-btn class="mx-4" icon>
            <a href="https://github.com/rolandstarke/access-log-viewer"
              ><img
                src="images/GitHub-Mark-Light-32px.png"
                height="32"
                width="32"
            /></a>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          This product includes GeoLite2 data created by MaxMind, available from
          <a class="white--text" target="_blank" href="https://www.maxmind.com"
            >https://www.maxmind.com</a
          >.
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<style>
#dropzone {
  border: 2px dotted #aaa;
  padding: 20px;
  text-align: center;
}

#dropzone.drag-hover {
  border-color: #4caf50;
  background-color: #eee;
}

#files {
  display: none;
}

#tabs .v-tabs-bar {
  height: 70px !important;
}
#tabs .v-tab {
  flex-direction: column;
}
</style>
<script>
import Worker from "worker-loader!./worker.js";
import IconTrash from "./components/icons/IconTrash.vue";
import IconDesktop from "./components/icons/IconDesktop.vue";
import IconMobile from "./components/icons/IconMobile.vue";
import IconTablet from "./components/icons/IconTablet.vue";
import { GChart } from "vue-google-charts";
const { inflate } = require("pako/lib/inflate");
const prettyBytes = require("pretty-bytes");

export default {
  components: {
    IconTrash,
    IconDesktop,
    IconMobile,
    IconTablet,
    GChart,
  },
  data: () => ({
    files: [],
    dropHovering: false,
    tab: 0,
    search: "",
    logs: [],
    sessions: [],
    numberOfRequests: 0,
    numberOfSessions: 0,
    transfere: 0,
    assetSwitch: 0,
    browserLogos: {
      Firefox: require("./assets/browser-logos/firefox_16x16.png"),
      IE: require("./assets/browser-logos/internet-explorer_9-11_16x16.png"),
      Edge: require("./assets/browser-logos/edge_16x16.png"),
      Chrome: require("./assets/browser-logos/chrome_16x16.png"),
      Safari: require("./assets/browser-logos/safari-ios_16x16.png"),
      Opera: require("./assets/browser-logos/opera_16x16.png"),
      "Samsung Browser": require("./assets/browser-logos/samsung-internet_16x16.png"),
      QQBrowser: require("./assets/browser-logos/qq_16x16.png"),
    },
    devices: {
      desktop: { percentage: 0 },
      tablet: { percentage: 0 },
      mobile: { percentage: 0 },
    },
    mostStatusCodes: [
      { statusCode: 200, hits: 0 },
      { statusCode: 404, hits: 0 },
      { statusCode: 500, hits: 0 },
    ],
    mostReferrers: [
      { referrer: "google.com", hits: 0 },
      { referrer: "bing.com", hits: 0 },
      { referrer: "facebook.com", hits: 0 },
    ],
    mostBrowsers: [
      { browser: "Chrome", hits: 0 },
      { browser: "Firefox", hits: 0 },
      { browser: "Safari", hits: 0 },
      { browser: "Edge", hits: 0 },
    ],
    mostUrls: [{ url: "/", hits: 0 }],
    firstParse: null,
    mostUrlsWithoutAssets: [{ url: "/", hits: 0 }],
    headers: [
      { text: "Date", value: "date", filterable: false },
      { text: "IP Address", value: "ipAddress" },
      { text: "Method", value: "method" },
      { text: "Page", value: "url" },
      { text: "Status", value: "statusCode" },
      { text: "Transfere", value: "transfere", filterable: false },
    ],
    chartDataSessions: [
      ["Year", "Sessions"],
      ["2021", 0],
      ["2022", 0],
    ],
    chartDataRequests: [
      ["Year", "Requests"],
      ["2021", 0],
      ["2022", 0],
    ],
    chartDataTransfere: [
      ["Year", "Bytes"],
      ["2021", 0],
      ["2022", 0],
    ],
    chartDataMap: [["Country", "Sessions"]],
  }),
  methods: {
    prettyBytes: prettyBytes,
    readFile: async function (file) {
      if (file.name.match(/\.gz$/)) {
        return inflate(await file.arrayBuffer(), { to: "string" });
      } else {
        return file.text();
      }
    },
    parseLog: async function (log) {
      await this.firstParse; //wait for first parse to finish so that worker and geoipdb is in cache

      const parsed = new Promise((resolve) => {
        const worker = new Worker();
        worker.onmessage = function (e) {
          resolve(e.data);
          worker.terminate();
        };
        worker.postMessage(log);
      });

      if (!this.firstParse) {
        this.firstParse = parsed.catch(() => {});
      }

      
      const timer = "parse " + Math.random();
      console.time(timer);
      parsed.then(() => {
        console.timeEnd(timer);
      });

      return parsed;
    },
    removeFile: function (id) {
      this.files = this.files.filter((f) => f.id !== id);
      this.calculateValues();
    },
    handleFileChange: function (e) {
      this.handleFiles(e.target.files);
    },
    handleDrop: function (e) {
      this.dropHovering = false;
      this.handleFiles(e.dataTransfer.files);
    },
    handleFiles: async function (files) {
      const promises = [];
      for (let i = 0; i < files.length; i++) {
        const file = {
          id: Math.random(),
          name: files[i].name,
          parsed: null,
        };
        this.files.push(file);
        const promise = this.readFile(files[i])
          .then(this.parseLog)
          .then((parsed) => {
            file.parsed = parsed;
          });
        promises.push(promise);
      }
      await Promise.all(promises);
      this.calculateValues();
    },
    loadSampleFile: async function () {
      const file = {
        id: Math.random(),
        name: "sample.access.log",
        parsed: null,
      };
      this.files.push(file);

      file.parsed = await fetch("sample.access.log.gz")
        .then((r) => r.blob())
        .then((b) => b.arrayBuffer())
        .then((a) => inflate(a, { to: "string" }))
        .then(this.parseLog);
      this.calculateValues();
    },
    calculateValues: function () {
      let logs = [];
      let sessions = [];
      for (let i = 0; i < this.files.length; i++) {
        if (this.files[i].parsed) {
          logs = logs.concat(this.files[i].parsed.logs);
          sessions = sessions.concat(this.files[i].parsed.sessions);
        }
      }
      logs.sort((a, b) => b.date - a.date);
      sessions.sort((a, b) => b.date - a.date);

      this.logs = logs;
      this.sessions = sessions;
      this.numberOfRequests = logs.length;
      this.numberOfSessions = sessions.length;

      const statusCodesCounter = { 200: 0, 404: 0, 500: 0 };
      const referrerCounter = {};
      const browserCounter = { Chrome: 0, Firefox: 0, Edge: 0 };
      const urlCounter = {};
      const sessionCounter = {};
      const requestCounter = {};
      const transfereCounter = {};
      const countryCounter = {};
      const dates = {};
      let transfere = 0;

      let splitTime = "hour";
      if (logs.length > 0) {
        if (
          logs[0].date - logs[logs.length - 1].date >
          1000 * 60 * 60 * 24 * 3
        ) {
          splitTime = "day";
        }
      }

      logs.forEach((log) => {
        transfere += log.transfere;
        statusCodesCounter[log.statusCode] =
          statusCodesCounter[log.statusCode] + 1 || 1;
        if (log.url) {
          urlCounter[log.url] = urlCounter[log.url] + 1 || 1;
        }

        let time;
        if (splitTime === "hour") {
          time =
            log.date.toLocaleDateString() +
            " " +
            log.date.getHours().toString().padStart(2, "0") +
            ":00";
          dates[time] = new Date(
            log.date.getFullYear(),
            log.date.getMonth(),
            log.date.getDate(),
            log.date.getHours()
          );
        } else if (splitTime === "day") {
          time = log.date.toLocaleDateString();
          dates[time] = new Date(
            log.date.getFullYear(),
            log.date.getMonth(),
            log.date.getDate()
          );
        }
        dates[time] = log.date;
        requestCounter[time] = requestCounter[time] + 1 || 1;
        transfereCounter[time] =
          transfereCounter[time] + log.transfere || log.transfere;
      });

      sessions.forEach((log) => {
        if (log.referrerDomain && log.referrerDomain !== "-") {
          referrerCounter[log.referrerDomain] =
            referrerCounter[log.referrerDomain] + 1 || 1;
        }
        if (log.browser) {
          browserCounter[log.browser] = browserCounter[log.browser] + 1 || 1;
        }
        if (log.country) {
          countryCounter[log.country] = countryCounter[log.country] + 1 || 1;
        }
        let time;
        if (splitTime === "hour") {
          time =
            log.date.toLocaleDateString() +
            " " +
            log.date.getHours().toString().padStart(2, "0") +
            ":00";
          dates[time] = new Date(
            log.date.getFullYear(),
            log.date.getMonth(),
            log.date.getDate(),
            log.date.getHours()
          );
        } else if (splitTime === "day") {
          time = log.date.toLocaleDateString();
          dates[time] = new Date(
            log.date.getFullYear(),
            log.date.getMonth(),
            log.date.getDate()
          );
        }
        sessionCounter[time] = sessionCounter[time] + 1 || 1;
      });

      this.transfere = prettyBytes(transfere);

      const chartDataSessions = [];
      for (let date in sessionCounter) {
        chartDataSessions.push([dates[date], sessionCounter[date]]);
      }
      if (chartDataSessions.length === 0) {
        chartDataSessions.push(["2022", 0]);
      }
      chartDataSessions.push(["Time", "Sessions"]);
      chartDataSessions.reverse();
      this.chartDataSessions = chartDataSessions;

      const chartDataRequests = [];
      for (let date in requestCounter) {
        chartDataRequests.push([dates[date], requestCounter[date]]);
      }
      if (chartDataRequests.length === 0) {
        chartDataRequests.push(["2022", 0]);
      }
      chartDataRequests.push(["Time", "Requests"]);
      chartDataRequests.reverse();
      this.chartDataRequests = chartDataRequests;

      const chartDataTransfere = [];
      for (let date in transfereCounter) {
        chartDataTransfere.push([
          dates[date],
          { v: transfereCounter[date], f: prettyBytes(transfereCounter[date]) },
        ]);
      }
      if (chartDataTransfere.length === 0) {
        chartDataTransfere.push(["2022", 0]);
      }
      chartDataTransfere.push(["Time", "Bytes"]);
      chartDataTransfere.reverse();
      this.chartDataTransfere = chartDataTransfere;

      const chartDataMap = [];
      for (let country in countryCounter) {
        chartDataMap.push([country, countryCounter[country]]);
      }
      chartDataMap.sort((a, b) => b[1] - a[1]);
      chartDataMap.unshift(["Country", "Sessions"]);
      this.chartDataMap = chartDataMap;

      const mostStatusCodes = [];
      for (let statusCode in statusCodesCounter) {
        mostStatusCodes.push({
          statusCode: statusCode,
          hits: statusCodesCounter[statusCode],
        });
      }
      mostStatusCodes.sort((a, b) => b.hits - a.hits);
      this.mostStatusCodes = mostStatusCodes.slice(0, 10);

      const mostReferrers = [];
      for (let referrer in referrerCounter) {
        mostReferrers.push({
          referrer: referrer,
          hits: referrerCounter[referrer],
        });
      }
      mostReferrers.sort((a, b) => b.hits - a.hits);
      this.mostReferrers = mostReferrers.slice(0, 10);

      const mostBrowsers = [];
      for (let browser in browserCounter) {
        mostBrowsers.push({
          browser: browser,
          hits: browserCounter[browser],
        });
      }
      mostBrowsers.sort((a, b) => b.hits - a.hits);
      this.mostBrowsers = mostBrowsers.slice(0, 10);

      const mostUrls = [];
      for (let url in urlCounter) {
        mostUrls.push({
          url: url,
          hits: urlCounter[url],
        });
      }
      mostUrls.sort((a, b) => b.hits - a.hits);

      this.mostUrlsWithoutAssets = mostUrls
        .filter((a) => {
          let url = a.url.split("?")[0].split("#")[0];
          let parts = url.split(".");
          const fileending = parts[parts.length - 1];
          return (
            ["png", "css", "js", "jpeg", "jpg", "ico", "svg", "webp", "gif", "cur"].indexOf(
              fileending
            ) === -1
          );
        })
        .slice(0, 10);

      this.mostUrls = mostUrls.slice(0, 10);

      const desktopCount = sessions.filter(
        (s) => s.device === "desktop"
      ).length;
      const mobileCount = sessions.filter((s) => s.device === "mobile").length;
      const tabletCount = sessions.filter((s) => s.device === "tablet").length;
      const deviceSum = desktopCount + mobileCount + tabletCount;
      if (deviceSum > 0) {
        this.devices.desktop.percentage = (desktopCount / deviceSum) * 100;
        this.devices.mobile.percentage = (mobileCount / deviceSum) * 100;
        this.devices.tablet.percentage = (tabletCount / deviceSum) * 100;
      } else {
        this.devices.desktop.percentage = 0;
        this.devices.mobile.percentage = 0;
        this.devices.tablet.percentage = 0;
      }
    },
  },
};
</script>
