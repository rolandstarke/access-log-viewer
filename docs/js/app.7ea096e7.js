(function(t){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],d=0,h=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&h.push(a[n][0]),a[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],s=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=r[0]))}return t}var s={},a={app:0},i=[];function n(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=s,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"0be3":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACYUlEQVQ4ja3QW0jTYRjH8X91VyQkhmhFrOYhSspSEoNKkFAkjSysLjQYlYhG3URRiRpBkBCdLgINAjtIBB1EQ7Iyy2OZ4pp4aLUtp3PuqDv43//dtyuZMqWbXnhu3vf3fp73fSTpf6/054JzBjgzDIVaKOgV5HcJDrYJ/nm5zCgoNQiK9YLCQcGR74LcTkFOm+BAsyDjtSCtTlkc0vxUKBpWODmsUDSkcGJAIa9bIbtNIbNZYf+bAOnPAqTWyGy/5VuIJFz1cUyrkN+ncLhPYU32o1Dl1BF5qJ5NFQ5Sa2WSb/tIqp5eCOT1BMjpksn6IhOZW09kbn3YM6OON5J8x8u2G262XreTVDURymR+9JPR4mffWz9rCxqXHFZ08ScSq2wklk+w49p4KLenwUvaCy8pTz2sK+5YEog5/YH4y+PEXTQRf8EYyqU8mSa51k3SXReq0oGlAU0jcVdMbD7/G1WZPpRLuu9ky0078VU2VCX9YYDO6Njb+cNMS48R1Vk9G0tG2aAZmQdUT5FQaSXukoXkKiuae189c2ev2kezDBYXwSBM2L209o6xvnCQmKOGhY12VljYVWmh5PEULYMu8bBJ53/Xa8Di8OKcmQVADiho9VbefzOEf/PUAzPlL620DrqZdHqxOr1YbDOMW93MeGUAgoAiwO720dpvCkeaekyMjLmYdHlweWbx+GTkgIISDCIAAciBIFaHn8/95sWHDSzr1JkYMkxhnHRhtDgZ+WND98tGh85Mu9ZMQ7eBmibtosByKTZ2pRSVsHqu1OrdEZFqdUTUvD1Jil4lSdIKSZKkv3XIwAvCLBXnAAAAAElFTkSuQmCC"},"441a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACP0lEQVR4AYSQA6wcURSG72pm7mq69u7Utm07avxiG8XESWPXtm3beLatsHa7p+duzrP+7Jdv9kwOMqwlEBltbHsew/9FRs2F6Jg0SExKg4Ez58LarZxRHjvdRuEemkfrSBUOgb/hUdDkGwAlrigU9gtXonVGuet0GVubyS4kHQHBt9DwTy8cnv37jYbtB8zG+qMWC5yVFbjIrekHzSaX6Llot7dd0r45GRmV90z1hhmlJDJAuaKqdy6rKlxyOgGf0+lVh7MB+YP8RQaL+s/QCOm0oljE8/NYjN8PBBrvB4OAFugtzRypQYA4Iuo/QiMsjPIwFJKEX2naJgSImteaxsWAeS3byRtosIlR8kaMMArnDBs2EQEkSZ5nxvpARMRAriEDmVllGYRtnDehvosSvRpoZH2EBqRsU5QO2BFjEqACAJj4pcxYov1FtNlAA0J2zq0IIKJewb4GhvOP/mE1n/zDAS1IfcTG4LDWj5hcsUIS/rdixWYEiJp/y5dzJlLtGqQjUOMa9Af9t9Y9aLCoZ6ialFy5MjUIVq60Io0IEDprnxy7lp5tTwAachxa/tcZc8OMUjV2Cscr7sCqVSDA5vTWxnRb3Cj8VIm4nimR9MdyBJ4gb1TtU/PEGQdg/dodSD2sWQ1/li6DX4uXpuN/F11lFGavrTEjo9wwB/SrpkDVZYMPrluC8Mw7EDLiIyBbG1WZkxjZevaXuQuph4LbWwt7mMpPG7xzjzN32j72f9zx/QzM9sCIh2fnN5Z2cLUAfjkO1mkbI+wAAAAASUVORK5CYII="},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[t._v("Access Log Viewer")])]),r("v-main",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("div",{class:{"drag-hover":t.dropHovering},attrs:{id:"dropzone"},on:{drop:function(e){return e.preventDefault(),t.handleDrop.apply(null,arguments)},dragover:function(e){e.preventDefault(),t.dropHovering=!0},dragleave:function(e){t.dropHovering=!1}}},[t._v(" Drag one or more access.log files here. "),r("br"),r("br"),r("v-btn",{on:{click:function(e){return t.$refs.files.click()}}},[t._v("Browse Files")]),r("br",{staticClass:"d-sm-none"}),t._v(" or "),r("br",{staticClass:"d-sm-none"}),r("v-btn",{on:{click:t.loadSampleFile}},[t._v("Load sample File")]),r("input",{ref:"files",attrs:{type:"file",multiple:"",id:"files"},on:{change:t.handleFileChange}})],1)])],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",t._l(t.files,(function(e){return r("v-list-item",{key:e.id,attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.name))]),e.parsed?r("v-list-item-subtitle",[t._v("Requests: "+t._s(e.parsed.logs.length))]):t._e(),e.parsed?t._e():r("v-list-item-subtitle",[t._v("Requests: loading... "+t._s((100*e.progress).toFixed(0))+"%")])],1),r("v-list-item-action",[r("v-btn",{attrs:{icon:""},on:{click:function(r){return t.removeFile(e.id)}}},[r("icon-trash",{attrs:{height:"16",width:"16"}})],1)],1)],1)})),1)],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",lg:"6"}},[r("v-card",{attrs:{height:"100%"}},[r("v-tabs",{attrs:{id:"tabs","background-color":"white","center-active":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tabs-slider",{attrs:{color:"blue"}}),r("v-tab",{staticClass:"text-capitalize"},[r("div",[t._v("Sessions")]),r("div",{staticClass:"text-h6"},[t._v(t._s(t.numberOfSessions))])]),r("v-tab",{staticClass:"text-capitalize"},[r("div",[t._v("Requests")]),r("div",{staticClass:"text-h6"},[t._v(t._s(t.numberOfRequests))])]),r("v-tab",{staticClass:"text-capitalize"},[r("div",[t._v("Transfere")]),r("div",{staticClass:"text-h6"},[t._v(t._s(t.transfere))])])],1),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",{attrs:{transition:!1}},[0===t.tab&&t.logs.length>0?r("v-card",{attrs:{flat:""}},[r("v-card-text",[r("GChart",{attrs:{type:"LineChart",data:t.chartDataSessions,options:{legend:"none",chartArea:{width:"90%",height:"80%"},colors:["#2196f3"]}}})],1)],1):t._e()],1),r("v-tab-item",{attrs:{transition:!1}},[1===t.tab&&t.logs.length>0?r("v-card",{attrs:{flat:""}},[r("v-card-text",[r("GChart",{attrs:{type:"LineChart",data:t.chartDataRequests,options:{legend:"none",chartArea:{width:"90%",height:"80%"},colors:["#2196f3"]}}})],1)],1):t._e()],1),r("v-tab-item",{attrs:{transition:!1}},[2===t.tab&&t.logs.length>0?r("v-card",{attrs:{flat:""}},[r("v-card-text",[r("GChart",{attrs:{type:"LineChart",data:t.chartDataTransfere,options:{legend:"none",chartArea:{width:"90%",height:"80%"},colors:["#2196f3"],vAxis:{format:"short"}}}})],1)],1):t._e()],1)],1)],1)],1),r("v-col",{attrs:{cols:"12",lg:"3"}},[r("v-card",{attrs:{height:"100%"}},[r("v-card-title",[t._v(" Sessions by Country ")]),r("v-card-text",[r("GChart",{attrs:{settings:{packages:["geochart"]},type:"GeoChart",data:t.chartDataMap,options:{legend:"none",colorAxis:{colors:["#93d5ed","#1a73e8"]}}}})],1)],1)],1),r("v-col",{attrs:{cols:"12",lg:"3"}},[r("v-card",{staticStyle:{display:"flex","flex-direction":"column"},attrs:{height:"100%"}},[r("v-card-title",[t._v(" Sessions by Device ")]),r("v-card-text",{staticStyle:{"flex-grow":"1",display:"flex","flex-direction":"column","justify-content":"space-around"}},[r("div",{staticStyle:{display:"flex","justify-content":"center"}},[r("div",{staticStyle:{width:"80px","text-align":"center"}},[r("icon-desktop",{staticStyle:{color:"#aaa"},attrs:{height:"32",width:"32"}}),r("br"),t._v(" Desktop ")],1),r("div",{staticClass:"text-h5",staticStyle:{width:"80px"}},[t._v(" "+t._s(t.devices.desktop.percentage.toFixed(1))+" % ")])]),r("div",{staticStyle:{display:"flex","justify-content":"center"}},[r("div",{staticStyle:{width:"80px","text-align":"center"}},[r("icon-mobile",{staticStyle:{color:"#aaa"},attrs:{height:"32",width:"32"}}),r("br"),t._v(" Mobile ")],1),r("div",{staticClass:"text-h5",staticStyle:{width:"80px"}},[t._v(" "+t._s(t.devices.mobile.percentage.toFixed(1))+" % ")])]),r("div",{staticStyle:{display:"flex","justify-content":"center"}},[r("div",{staticStyle:{width:"80px","text-align":"center"}},[r("icon-tablet",{staticStyle:{color:"#aaa"},attrs:{height:"32",width:"32"}}),r("br"),t._v(" Tablet ")],1),r("div",{staticClass:"text-h5",staticStyle:{width:"80px"}},[t._v(" "+t._s(t.devices.tablet.percentage.toFixed(1))+" % ")])])])],1)],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",lg:"4"}},[r("v-card",{attrs:{height:"100%"}},[r("v-card-title",[r("div",{staticStyle:{display:"flex",width:"100%"}},[r("div",[t._v("Most Requested Files")]),r("v-switch",{staticStyle:{"margin-left":"auto","margin-top":"0"},attrs:{label:"Show Assets"},model:{value:t.assetSwitch,callback:function(e){t.assetSwitch=e},expression:"assetSwitch"}})],1)]),r("v-card-text",[r("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("Page")]),r("th",{staticClass:"text-left"},[t._v("Hits")])])]),r("tbody",t._l(t.assetSwitch?t.mostUrls:t.mostUrlsWithoutAssets,(function(e){return r("tr",{key:e.url},[r("td",[r("span",{attrs:{title:e.url}},[t._v(t._s(e.url.substring(0,50)+(e.url.length>50?"...":"")))])]),r("td",[t._v(t._s(e.hits))])])})),0)]},proxy:!0}])})],1)],1)],1),r("v-col",{attrs:{cols:"12",lg:"2"}},[r("v-card",{attrs:{height:"100%"}},[r("v-card-title",[t._v(" Status Codes ")]),r("v-card-text",[r("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("Status")]),r("th",{staticClass:"text-left"},[t._v("Hits")])])]),r("tbody",t._l(t.mostStatusCodes,(function(e){return r("tr",{key:e.statusCode},[r("td",[t._v(t._s(e.statusCode))]),r("td",[t._v(t._s(e.hits))])])})),0)]},proxy:!0}])})],1)],1)],1),r("v-col",{attrs:{cols:"12",lg:"3"}},[r("v-card",{attrs:{height:"100%"}},[r("v-card-title",[t._v(" Top Referrer ")]),r("v-card-text",[r("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("Referrer")]),r("th",{staticClass:"text-left"},[t._v("Hits")])])]),r("tbody",t._l(t.mostReferrers,(function(e){return r("tr",{key:e.referrer},[r("td",[r("span",{staticStyle:{display:"inline-block",height:"16px",width:"16px","vertical-align":"text-bottom"}},[r("img",{attrs:{src:"https://"+e.referrer+"/favicon.ico",height:"16",width:"16",onerror:"this.style.display='none'"}})]),t._v(" "+t._s(e.referrer)+" ")]),r("td",[t._v(t._s(e.hits))])])})),0)]},proxy:!0}])})],1)],1)],1),r("v-col",{attrs:{cols:"12",lg:"3"}},[r("v-card",{attrs:{height:"100%"}},[r("v-card-title",[t._v(" Sessions by Browser ")]),r("v-card-text",[r("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("Browser")]),r("th",{staticClass:"text-left"},[t._v("Hits")])])]),r("tbody",t._l(t.mostBrowsers,(function(e){return r("tr",{key:e.url},[r("td",[r("span",{staticStyle:{display:"inline-block",height:"16px",width:"16px","vertical-align":"text-bottom"}},[t.browserLogos[e.browser]?r("img",{attrs:{src:t.browserLogos[e.browser],height:"16",width:"16"}}):t._e()]),t._v(" "+t._s(e.browser)+" ")]),r("td",[t._v(t._s(e.hits))])])})),0)]},proxy:!0}])})],1)],1)],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-card-title",[t._v(" Logs ")]),r("v-card-text",[r("v-text-field",{attrs:{label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),r("v-data-table",{attrs:{dense:"",headers:t.headers,items:t.logs,search:t.search,"footer-props":{"items-per-page-options":[10,20,30]}},scopedSlots:t._u([{key:"item.transfere",fn:function(e){var r=e.item;return[t._v(" "+t._s(t.prettyBytes(r.transfere))+" ")]}},{key:"item.url",fn:function(e){var s=e.item;return[r("span",{attrs:{title:s.url}},[t._v(t._s(s.url.substring(0,50)+(s.url.length>50?"...":"")))])]}},{key:"item.date",fn:function(e){var r=e.item;return[t._v(" "+t._s(r.date.toLocaleDateString()+" "+r.date.toLocaleTimeString())+" ")]}}])})],1)],1)],1)],1)],1)],1),r("v-footer",{attrs:{padless:""}},[r("v-card",{staticClass:"primary lighten-1 text-center",attrs:{flat:"",tile:"",width:"100%"}},[r("v-card-text",[r("v-btn",{staticClass:"mx-4",attrs:{icon:""}},[r("a",{attrs:{href:"https://github.com/rolandstarke/access-log-viewer"}},[r("img",{attrs:{src:"images/GitHub-Mark-Light-32px.png",height:"32",width:"32"}})])])],1),r("v-divider"),r("v-card-text",{staticClass:"white--text"},[t._v(" This product includes GeoLite2 data created by MaxMind, available from "),r("a",{staticClass:"white--text",attrs:{target:"_blank",href:"https://www.maxmind.com"}},[t._v("https://www.maxmind.com")]),t._v(". ")])],1)],1)],1)},i=[],n=r("1da1");r("96cf"),r("d3b7"),r("3ca3"),r("ddb0"),r("b0c0"),r("4de4"),r("dca8"),r("99af"),r("4e827"),r("159b"),r("4d90"),r("25f0"),r("fb6a"),r("ac1f"),r("1276");function o(){return new Worker(r.p+"js/worker.cf0ab2ba.worker.js")}var l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g(t._b({attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},"svg",t.$attrs,!1),t.$listeners),[r("path",{attrs:{d:"M5.633 22.031c1.135 1.313 3.735 1.969 6.334 1.969 2.601 0 5.199-.656 6.335-1.969.081-.404 3.698-18.468 3.698-18.882 0-2.473-7.338-3.149-10-3.149-4.992 0-10 1.242-10 3.144 0 .406 3.556 18.488 3.633 18.887zm6.418-16.884c-4.211 0-7.625-.746-7.625-1.667s3.414-1.667 7.625-1.667 7.624.746 7.624 1.667-3.413 1.667-7.624 1.667z"}})])},c=[],u=r("2877"),d={},h=Object(u["a"])(d,l,c,!1,null,null,null),v=h.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g(t._b({attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},"svg",t.$attrs,!1),t.$listeners),[r("path",{attrs:{d:"M0 0v19h24v-19h-24zm22 14h-20v-12h20v12zm-6.599 7l2.599 3h-12l2.599-3h6.802z"}})])},A=[],p={},g=Object(u["a"])(p,f,A,!1,null,null,null),b=g.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g(t._b({attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},"svg",t.$attrs,!1),t.$listeners),[r("path",{attrs:{d:"M19 2c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-20zm-8.5 0h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm1.5 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-14.024h10v14.024z"}})])},x=[],w={},y=Object(u["a"])(w,m,x,!1,null,null,null),S=y.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g(t._b({attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},"svg",t.$attrs,!1),t.$listeners),[r("path",{attrs:{d:"M24 5c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-14zm-3 14h-18v-14h18v14zm1.5-6.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5z"}})])},D=[],k={},B=Object(u["a"])(k,C,D,!1,null,null,null),V=B.exports,R=r("cb43"),O=r("94df"),M={components:{IconTrash:v,IconDesktop:b,IconMobile:S,IconTablet:V,GChart:R["GChart"]},data:function(){return{files:[],dropHovering:!1,tab:0,search:"",logs:[],numberOfRequests:0,numberOfSessions:0,transfere:0,assetSwitch:0,browserLogos:{Firefox:r("ae3f"),IE:r("bbf7"),Edge:r("998e"),Chrome:r("7c04"),Safari:r("e6cb"),Opera:r("441a"),"Samsung Browser":r("ce27"),QQBrowser:r("0be3")},devices:{desktop:{percentage:0},tablet:{percentage:0},mobile:{percentage:0}},mostStatusCodes:[{statusCode:200,hits:0},{statusCode:404,hits:0},{statusCode:500,hits:0}],mostReferrers:[{referrer:"google.com",hits:0},{referrer:"bing.com",hits:0},{referrer:"facebook.com",hits:0}],mostBrowsers:[{browser:"Chrome",hits:0},{browser:"Firefox",hits:0},{browser:"Safari",hits:0},{browser:"Edge",hits:0}],mostUrls:[{url:"/",hits:0}],firstParse:null,mostUrlsWithoutAssets:[{url:"/",hits:0}],headers:[{text:"Date",value:"date",filterable:!1},{text:"IP Address",value:"ipAddress"},{text:"Method",value:"method"},{text:"Page",value:"url"},{text:"Status",value:"statusCode"},{text:"Transfere",value:"transfere",filterable:!1}],chartDataSessions:[["Year","Sessions"],["2021",0],["2022",0]],chartDataRequests:[["Year","Requests"],["2021",0],["2022",0]],chartDataTransfere:[["Year","Bytes"],["2021",0],["2022",0]],chartDataMap:[["Country","Sessions"]]}},methods:{prettyBytes:O,parseLog:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var s,a,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=function(t,e){setTimeout((function(){r.progress<t&&(r.progress=t)}),e)},s(.01,2e3),s(.02,7e3),s(.03,15e3),s(.04,3e4),t.next=7,this.firstParse;case 7:return a=new Promise((function(t){var s=new o;s.onmessage=function(e){void 0===e.data.progress?(t(e.data),s.terminate()):r&&e.data.progress>r.progress&&(r.progress=e.data.progress)},s.postMessage(e)})),this.firstParse||(i=new Promise((function(t){setTimeout(t,1e4)})),this.firstParse=Promise.race([a.catch((function(){})),i])),n="parse "+r.name,console.time(n),a.then((function(){console.timeEnd(n)})),t.abrupt("return",a);case 13:case"end":return t.stop()}}),t,this)})));function e(e,r){return t.apply(this,arguments)}return e}(),removeFile:function(t){this.files=this.files.filter((function(e){return e.id!==t})),this.calculateValues()},handleFileChange:function(t){this.handleFiles(t.target.files)},handleDrop:function(t){this.dropHovering=!1,this.handleFiles(t.dataTransfer.files)},handleFiles:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,s,a,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(r=[],s=function(t){var s={id:Math.random(),name:e[t].name,parsed:null,progress:0};i.files.push(s);var a=Promise.resolve(e[t]).then((function(t){return i.parseLog(t,s)})).then((function(t){s.parsed=Object.freeze(t)}));r.push(a)},a=0;a<e.length;a++)s(a);return console.time("total"),t.next=6,Promise.all(r);case 6:this.calculateValues(),console.timeEnd("total");case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),loadSampleFile:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={id:Math.random(),name:"sample.access.log.gz",parsed:null,progress:0},this.files.push(e),t.next=4,fetch("sample.access.log.gz").then((function(t){return t.blob()})).then((function(t){return r.parseLog(t,e)}));case 4:e.parsed=t.sent,this.calculateValues();case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),calculateValues:function(){for(var t=[],e=[],r=0;r<this.files.length;r++)this.files[r].parsed&&(t=t.concat(this.files[r].parsed.logs),e=e.concat(this.files[r].parsed.sessions));t.sort((function(t,e){return e.date-t.date})),e.sort((function(t,e){return e.date-t.date})),this.logs=Object.freeze(t),this.numberOfRequests=t.length,this.numberOfSessions=e.length;var s={200:0,404:0,500:0},a={},i={Chrome:0,Firefox:0,Edge:0},n={},o={},l={},c={},u={},d={},h=0,v="hour";t.length>0&&t[0].date-t[t.length-1].date>2592e5&&(v="day"),t.forEach((function(t){var e;h+=t.transfere,s[t.statusCode]=s[t.statusCode]+1||1,t.url&&(n[t.url]=n[t.url]+1||1),"hour"===v?(e=t.date.toLocaleDateString()+" "+t.date.getHours().toString().padStart(2,"0")+":00",d[e]=new Date(t.date.getFullYear(),t.date.getMonth(),t.date.getDate(),t.date.getHours())):"day"===v&&(e=t.date.toLocaleDateString(),d[e]=new Date(t.date.getFullYear(),t.date.getMonth(),t.date.getDate())),d[e]=t.date,l[e]=l[e]+1||1,c[e]=c[e]+t.transfere||t.transfere})),e.forEach((function(t){var e;t.referrerDomain&&"-"!==t.referrerDomain&&(a[t.referrerDomain]=a[t.referrerDomain]+1||1),t.browser&&(i[t.browser]=i[t.browser]+1||1),t.country&&(u[t.country]=u[t.country]+1||1),"hour"===v?(e=t.date.toLocaleDateString()+" "+t.date.getHours().toString().padStart(2,"0")+":00",d[e]=new Date(t.date.getFullYear(),t.date.getMonth(),t.date.getDate(),t.date.getHours())):"day"===v&&(e=t.date.toLocaleDateString(),d[e]=new Date(t.date.getFullYear(),t.date.getMonth(),t.date.getDate())),o[e]=o[e]+1||1})),this.transfere=O(h);var f=[];for(var A in o)f.push([d[A],o[A]]);0===f.length&&f.push(["2022",0]),f.push(["Time","Sessions"]),f.reverse(),this.chartDataSessions=Object.freeze(f);var p=[];for(var g in l)p.push([d[g],l[g]]);0===p.length&&p.push(["2022",0]),p.push(["Time","Requests"]),p.reverse(),this.chartDataRequests=Object.freeze(p);var b=[];for(var m in c)b.push([d[m],{v:c[m],f:O(c[m])}]);0===b.length&&b.push(["2022",0]),b.push(["Time","Bytes"]),b.reverse(),this.chartDataTransfere=Object.freeze(b);var x=[];for(var w in u)x.push([w,u[w]]);x.sort((function(t,e){return e[1]-t[1]})),x.unshift(["Country","Sessions"]),this.chartDataMap=Object.freeze(x);var y=[];for(var S in s)y.push({statusCode:S,hits:s[S]});y.sort((function(t,e){return e.hits-t.hits})),this.mostStatusCodes=y.slice(0,10);var C=[];for(var D in a)C.push({referrer:D,hits:a[D]});C.sort((function(t,e){return e.hits-t.hits})),this.mostReferrers=C.slice(0,10);var k=[];for(var B in i)k.push({browser:B,hits:i[B]});k.sort((function(t,e){return e.hits-t.hits})),this.mostBrowsers=k.slice(0,10);var V=[];for(var R in n)V.push({url:R,hits:n[R]});V.sort((function(t,e){return e.hits-t.hits})),this.mostUrlsWithoutAssets=V.filter((function(t){var e=t.url.split("?")[0].split("#")[0],r=e.split("."),s=r[r.length-1];return-1===["png","css","js","jpeg","jpg","ico","svg","webp","gif","cur"].indexOf(s)})).slice(0,10),this.mostUrls=V.slice(0,10);var M=e.filter((function(t){return"desktop"===t.device})).length,T=e.filter((function(t){return"mobile"===t.device})).length,P=e.filter((function(t){return"tablet"===t.device})).length,G=M+T+P;G>0?(this.devices.desktop.percentage=M/G*100,this.devices.mobile.percentage=T/G*100,this.devices.tablet.percentage=P/G*100):(this.devices.desktop.percentage=0,this.devices.mobile.percentage=0,this.devices.tablet.percentage=0)}}},T=M,P=(r("034f"),r("6544")),G=r.n(P),j=r("7496"),U=r("40dc"),z=r("8336"),E=r("b0af"),F=r("99d9"),I=r("62ad"),Q=r("a523"),L=r("8fea"),N=r("ce7e"),W=r("553a"),H=r("da13"),Y=r("1800"),q=r("5d23"),Z=r("f6c4"),_=r("0fd9"),J=r("1f4f"),X=r("b73d"),K=r("71a3"),$=r("c671"),tt=r("fe57"),et=r("aac8"),rt=r("9a96"),st=r("8654"),at=Object(u["a"])(T,a,i,!1,null,null,null),it=at.exports;G()(at,{VApp:j["a"],VAppBar:U["a"],VBtn:z["a"],VCard:E["a"],VCardText:F["a"],VCardTitle:F["b"],VCol:I["a"],VContainer:Q["a"],VDataTable:L["a"],VDivider:N["a"],VFooter:W["a"],VListItem:H["a"],VListItemAction:Y["a"],VListItemContent:q["a"],VListItemSubtitle:q["b"],VListItemTitle:q["c"],VMain:Z["a"],VRow:_["a"],VSimpleTable:J["a"],VSwitch:X["a"],VTab:K["a"],VTabItem:$["a"],VTabs:tt["a"],VTabsItems:et["a"],VTabsSlider:rt["a"],VTextField:st["a"]});var nt=r("f309");s["a"].use(nt["a"]);var ot=new nt["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:ot,render:function(t){return t(it)}}).$mount("#app")},"7c04":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADEElEQVR4AQXBS2hcdRTA4d859955ZCaZJM27RGuyaKymoaiLGIRiNxI1YKBuWrKoCOLKld1YFz4WLkRxI1JDFy5cuZHirpgKaSkUNESKj6bYpiFtdNJpMpN53Ps/x+8TAIDfT7+immUAVh4e67X9vVnPskl3R1Q2tFS+DtTS7S2VJAEwAAFYXXpdAXuyZ6Cc7lbPe5q+jdmwm4E7uAM8FI0uSk/lM6Due48VMLm5tKCA5YM8UUjTy5H7NGYOgOOOgwXBArgLqutRT+E14B6eqQDcmj9VymJbjVRnClGcqmoc2h2xZhPcEc2hGruHkLlb4iZrnWr/HNCIAG6eP/Xh1L3amyMHaWpJnMhBU4qDfXTPzlI8OoF0V0m7qhINx1E8HNLcsI31PNey0rHmz/LGV+f6rh3Or710qzp+4ep9dzUZenGO+4vvc2V7EICXn9rhWO1TqF2j0FXyKDbxIJseSjNRevaFk0ka3v1nsMvH7z6SZ3Iltt/5nI9WBvhzo8HGVodfbvcyM/08R+IVsJaI5FwSrWjeVjTzMGFuWCT+/XQFnTnO1QdDHNQaVLojKuWIVrvOT38MwKETSJwhucglEhCfiM0cBPLtjPXREle6++lqBzIRcHB3zAEAERAHABzcUXe7Y+4EMylGOb7RLWYmHnGoWGCnHvivHugudPHq01Wor4PkARPcMeNOTGY3PNbNID6eV/W/Hu/KxQfLvDf/Fr/d7iNWODy2S3fzC7CHoEWHIO5sdlK/IQCjl5Y+dpUPgFSRZC9tMlnp5+ToURotY3fzVy5N3aWnkMPdUnFPgvknwAUBOPz1mVJW0FVEZsBTFY1bWSpNa9Oqtvnh2ZTFI8FD27IIT8x8bb8R5oCGjnx7RkNCQ9Ow4GbrjieZBQpx5B4KtjiU2OJ4cG8HIjwx8/VW2xaSWBrFvGpU/3HdSwvH1UVq2sy+MxVDmOqYlcudtixP1WU4l0oIshOCf7lfz86F4P/mc6qACQDAyPJZtUgArDdNe/9uhNn5UnPy8ok6jZZvdDp+Haj1VCK1zAEM4H+k6qFWpz5e9gAAAABJRU5ErkJggg=="},"85ec":function(t,e,r){},"998e":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC8klEQVR4AQXBzWtcZRTA4d95P+7NZJo0xpiSgFSskCKiSIpFkoX/QaELN+6KCxduxVZw0YXVtVuhuHGjS0V0YbDQqo2KCKNSO0k1Ns1H8zWZmczMve97js8jAACLt/Y8kAFG7vEUZssmo3NwIo7ehtBbBR4CzE2vByABBIDFW/seyMqoALvutXHFJM2qgYlgAFh3rNj/plEcvj+oGvdOj3c9kOXC9wceyLnK865wK4gumGTUalNqU6kwKrw/cM1yk2a5Rxm7rwNfFCF798tr07nzoF/EZrniY1hAqSypOefEx+gE58A577DotY4hUcb684lGd6mMJzkATD8/eb2/c7hw0N6s6pOqEDFCKTp+ZlwaZyfAqQmVc66O3qVUxiqUsf4YWPSXzabWvrt38+Gv/zVHdemsnBQLTVMr3XC3L/XhsZRPZQmxZ0XoSBn7rggji76eB7vtVm/eXd7++3jWTs2Zm5wRiqZSnhKT0Irzc8udv1ga7Ry1jJ6ojjTlRJXMBpUwrOzFsHtfz1FM4Xy0XCWxsVJ0o026/dVbA7gDUF6+8Kal3k/J96VOI0aSVDU5SL2Qw2kTBOoEIUCvi7T/IMw8cwIAMDb5T9M0U6dBqtzAxIZFynXHO/0ymNFGDTWE4GB/W4OJZ/LJS8BvAKLrV5yMwIaxqitMLQXHG8B20Gw/OCc7iJ1RNXPDgRMXQPN7otW3wI/j8/++Pdwsv0byWVM9nLt49zOge//TS0EAuNa6IXBNyqIKO+tFubWmlE0nua4wfff459lPgD4AwMTTDy4WM0f7QFsAeKdV4O138f68r/rVWHs1SmyYqDo0I5aPhPwnaEdUX7a66tM/egU4EK62PJAx5hBbkRDPx901xrbbRmwoZllMCywjqqB5w/LoVeCRGN7x0QsZ8Ahb1PaSpfRhPfvsznB+QdR7b1gBBmZbYB+4NDznzR6JOI9zWQAAuNryQAaQVE3ZE7NLobP1XNzbIBw/bkv/6A5wBOBc8EAG+B8+DZx6VSHxWgAAAABJRU5ErkJggg=="},ae3f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADCklEQVR4AQXBS2hcVRjA8f93zrn3ziuZRyYmk4dIC6a1WENRoxAX2RSLGxfVjaXdWNGFUAVFKOpCFFwI7oQgFV2ruFDBjSBupLUuBKOtocWYpE0mjTOTmczj3nM+fz8BANAv5wVnABQAgKUFC3hy0WUyXwHeIA0RkAIACIBemTNAAMBPW8DzbN0CHuvO4LPvST3AEnCVTCIgBRBdnTVA4Fi+TDubBNY79fvdDy9/o4B/7tvn1xR7XDQD9B5BTwLb7G9ImHoYAQDQz6Z/Jy+r2np0IDPN/4CvOLFxilHjOmWUdMzjnUP5Lbj8i0R2DRhaAH17/n2ycBaVBUn6F3rt+tqnr/202L52+qOd609WuxtTjE9sW1dMPZmblaBPqbMB5arViyemgS/IyBFCjVxHiforGY2nWzuPV0fNeW1vPiBSaFGr/WskMkqQ+zCcJOFzw8it0M6VSVxgwanWaxLXD1h+5ZxfPP9e6NZF+lEBU1VMpYvuWGFglJDNMRg94bSVPy65FLZRLQ2MPDRkffcM63+etnvNRTqlPK7j+PXrZzjy2HfYQUbYzQUp9y2ZOerSOxMurrcIqcUcev7aO8bHv1yG+gxJ0VIp9iiNAsOWpX83UOgpwQax3RT1BXEHG42bVZMi5b6QBfJbGR1zG5EWQ1PEpxGtTo6Fwhql9C7p/jiusU/YSgB7217ont3PJ92XkmiYhGGi1awtpbjNtXtzdPoZvU6fyvAW55Y+oZoeYlKjpGJ8s9R0IXlTADbHXl2tzDQvFsYPRoqPTdJjy07yhzSIkiGnyjcoxwdoXEImwmjoyzGm8CHwlgDc4t1KVN5bK012GsXSYIT4KDKHghuADYADMUohSw9NIfZx6cbYojwCDOWf5HULeKP2wRAf/hiVBrP5sRQX+2BsUCMekVR8pmbQi1GT3CxM2BVgO1SGVgA28pcs4AtaGutJ5wN16Qsm8lVjPWICKIiaPSv2Sm239g4w7C9vWsALAMBm4ZIFPEAuFKcG9JeDhKMiGpzwd1HyPwP7AHrkjgU8wP+CmF7CaG8iWAAAAABJRU5ErkJggg=="},bbf7:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADG0lEQVR4AXTSA4DzSBgG4C9Z42zbtn/btm3btm3ba9u2badu0rTpe5Mzn2DsoX9qt9WP29+qONI/KIAHysf1FJN7rLHFd5hvT+z4OP3TiKsp3O/xdxZdf7JPkDB0W1btIrl+9yElc1SdLrJbPuLeWy3Hddgoh3+3E4GfOtHvRl5P5X+Pz0+s27y5SjKECAUwlyyGkDgCN/J9MTlNW/PCBXkgMXLwt9+bA775lFS9Dgb/MfKGgrbAszoras1BQHYvZGesxQmTiH12YLugYGaWBu1uVOzEeXq6Oajr86Q6bIWDGs5Lajh0Xm+F3nhVtCd2QFD4hvL5ldiwskS3bl+zruK4DGxttcnD47TofSJ4Jqk6XS7m1fD9vSnvbC3TQzDeUpTEdvAJ2RxHBJ7+0N9tT4sp/7AIzC0S8ePtunyWydP29CJHYob5Vi/Mag0FUr+x+GdfQrtI9CHm0+W3nvhyk/+TxMyJK593RFSwula2dPVrxgsbEn9yHPlamn0lK1z9RV77j1vOU7y9j0PRh2Mx1CDdGKSVOAbEjJknEe/AOzk58eTqDGdnF0dy9vT4kCPGqIR979F8PaCgwPTw7Q+v4pnHOM6kM5cQcRKxHzFgIccRFAWWVq0NGQVG95L8xjWUA/CKae0uIaE9FoSlYE0rbEdNFgy8mvIT/Yqn//GM2rkW5mdR2jMizat/7Fc+UtvKSjOOSsD2On3YP+o7ba4U7m+tN5VPThXKvrlUGsqOwJkUnHhRSuxcCH96/61zTTsmpumwS2MTj1vs2NlgyFiZ27BodX7T8l1NxoJjLG9bm4IR8Vp8eqpwAalsxYNeY1czE0nkSkxXr9rIOYUidulY11bghGxnH3CMfWrjKRl6tLtWeoKYOoAj2TrX1ZbYMV8M+q4XMbfmv/zYcK+cU9MzteZVlSI2NcnY2ChjWbkZk5LbGn+ey/KbuTA/yeRvZIS44qy73d/DtjO/77EO+7/fUBMkJlG0U9x//a3gqD2PiiJ3P8zzXHndnUG1jgskdxFos1j2Bqjm447wUP5/04UZzAA5DQcI3f8SJasDAGsm1cLok0C9AAAAAElFTkSuQmCC"},ce27:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB3klEQVR4AX2Tg68kQRDGJy/O3T91tm3btm3btm0reNjgbNua3e7fVaW3Z/r0Kvnaxa4vGjqeAkGURzdBseCngD+gZxlBj+B9gV+UEZwIFYZNCPC3sdOCsqrrDZzMX8RDx1szfAIMGgN9R0A/weCxMHwiem/cGxCc8ga6eWX1pg9VcfIcWLMZVm2EcdPlbDjovX+bn7urgRKBKpqBo7N0HfiW0xcMuRyJfP8B+49A/1GJESNAdSMtjh4OGPWN6s0usfvQQ7xY6+Bl72GNRJ2lhY2GjLOMmARdBrygZouTfPzkXMdZmyib/Pz1G4yd5mriCxqllTUSwVW6DrrG2/cxXoxo5xQ5qzvmLv3sU/EGdGMZOBoWrPxBt0FXKV//NBt23OfDx5g/ZeiEEqnTJ406NKAFsmLdeVy+/g4VG5yhSpMzDJ9cwra9Dzl/5RV7Dj+mTuuTaLpqQNOPfNdpYfoMs1y4AirvJI1t+57Qd2QRzbpcpFGH81RqdJ6W3W6IokmL6Fo3/ZqBY+DkOUso375btu/NMmisUc8asf/GzG+N5GbXSJNmw+pNVhrJMnEWDEgKZ8O3PXwrnwiMhK2s0HXYQHHAhygk08k/yTQ8INQfZDoVkulPOpeUQme96x7S+RdN1Ppi1VWKmwAAAABJRU5ErkJggg=="},e6cb:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACdklEQVR4AXWTQ7QsVxhGexZjct2Mk+vYHMeZxJ4Hz7Zt27Zt27Zdru46+/33NJ5rrb2O/v2VzgkBAvWBG4EidwXAlZRG97NXpsYAmiCuyDTMLOilkx60PgtfHIYPDmikr+dkTQEqVwu0DAHnM6nBhIuK0q2K57coyqUt0wSUbVO8uCnFyzsCxl0BQAUAcDUksu6PP6eIrkrx5oaAl9akKFmZomhFikIhtswjuhU+XnKOt0btZcwlsk8ShAB13FaULhNZpOjCJAULkhQLJUJsrssj6+CdITsY9N2/fDT/Gi+vUJywFIAKAbTaneLFOT4vz/UpnO5TMsMnLERm+jy8DH5oPptT+THe772N6DJ4eZZLS3EAdMCXi30qRAxP8CgRsu3Toz2a/9Jef+s/ao3jkbkQH2vrWnHQAVdcxYfTPCrGexQPdwmPcIkMs3h6AgzrMkPLXb+oxyNTITbU1DVSqx1xJcBRfDTepVLE4v4O8UEOj3a3abomCcCctqPJ73aZ8CCPSH+bEqmRWu2Im3mFCRIwwCHRy+ax9hY/THMB6LkxSf5gRbEERrpbhGvaHjaVAx3t5L5Bq6Uer3SzSHS0eG+Azanrir+nuDzazCTc5gaR9qZgUdTWolSCXupqaScboE5cVZS2M/msj82QdT4f9rB4rK5BoqVJtLnIQnFTk2dambwjARUdLMQBULmNNHajzzsS8kkXi2caGZpwPQ2xBgZlLUSWJ4lLf8JmH4Aa946tPH69T1n9G5TWvUGVBGSpFl6qc4OKhgaTNmpZZZyr9xymU5cD2k51+LqDycdNDY309dxJWQPuPEwPPM4BXDGURvoPPM43AQDPM3oaqbDPAAAAAElFTkSuQmCC"}});