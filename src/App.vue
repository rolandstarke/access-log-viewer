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
              <input
                @change="handleFileChange"
                type="file"
                multiple
                id="files"
                ref="files"
              />
            </div>
          </v-col>

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

          <v-col cols="6">
            <v-card>
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
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>chart</v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>chart2</v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>chart3</v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
#dropzone {
  border: 2px dotted black;
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
const pako = require("pako");
const prettyBytes = require('pretty-bytes');

export default {
  components: {
    IconTrash,
  },
  mounted: function () {
    /*
    this.parseLog(
      `188.103.4.49 - - [18/Dec/2021:00:00:04 +0100] "GET /de/search-autocomplete?q=red%20dead%20 HTTP/2.0" 200 317 "https://epicgames-db.info/de" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
188.103.4.49 - - [18/Dec/2021:00:00:06 +0100] "GET /de/search-autocomplete?q=red%20dead%20redemption%202 HTTP/2.0" 200 168 "https://epicgames-db.info/de" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
`
    ).then(console.log);*/
  },
  data: () => ({
    files: [],
    dropHovering: false,
    tab: 0,
  }),

  computed: {
    numberOfSessions: function () {
      let numberOfSessions = 0;
      for (let i = 0; i < this.files.length; i++) {
        if (this.files[i].parsed) {
          numberOfSessions += this.files[i].parsed.sessions.length;
        }
      }
      return numberOfSessions;
    },
    numberOfRequests: function () {
      let numberOfRequests = 0;
      for (let i = 0; i < this.files.length; i++) {
        if (this.files[i].parsed) {
          numberOfRequests += this.files[i].parsed.logs.length;
        }
      }
      return numberOfRequests;
    },

    transfere: function () {
      let transfere = 0;
      for (let i = 0; i < this.files.length; i++) {
        if (this.files[i].parsed) {
          this.files[i].parsed.logs.forEach((r) => {
            if (r.transfere) {
              transfere += r.transfere;
            }
          });
        }
      }
      return prettyBytes(transfere);
    },
  },
  methods: {
    readFile: function (file) {
      return new Promise((resolve) => {
        const reader = new FileReader();

        if (file.name.match(/\.gz$/)) {
          reader.addEventListener("load", function () {
            resolve(pako.inflate(this.result, { to: "string" }));
          });
          reader.readAsArrayBuffer(file);
        } else {
          reader.addEventListener("load", function () {
            resolve(this.result);
          });
          reader.readAsText(file);
        }
      });
    },
    parseLog: async function (log) {
      console.time("parse");
      const parsed = await new Promise((resolve) => {
        const worker = new Worker();
        worker.onmessage = function (e) {
          resolve(e.data);
          worker.terminate();
        };
        worker.postMessage(log);
      });

      console.timeEnd("parse");
      return parsed;
    },
    removeFile: function (id) {
      this.files = this.files.filter((f) => f.id !== id);
    },
    handleFileChange: function (e) {
      this.handleFiles(e.target.files);
    },
    handleDrop: function (e) {
      this.dropHovering = false;
      this.handleFiles(e.dataTransfer.files);
    },
    handleFiles: async function (files) {
      for (let i = 0; i < files.length; i++) {
        const file = {
          id: Math.random(),
          name: files[i].name,
          parsed: null,
        };
        this.files.push(file);
        file.parsed = await this.readFile(files[i]).then(this.parseLog);
      }
    },
  },
};
</script>
