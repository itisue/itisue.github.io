if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,c,s)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return r;case"module":return d;default:return e(i)}}))).then((e=>{const i=s(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/05/28/success/index.html",revision:"d8cfd42bcf201d0728cb7a681bf5be87"},{url:"2024/11/15/mdns/index.html",revision:"12b68808c7102afbe3ee712ec2fe2e35"},{url:"404.html",revision:"c1ae93dcb31c53b665746fcd9afe08e7"},{url:"archives/2021/05/index.html",revision:"cd96c74ba1d43255f59ecae0beab6f9a"},{url:"archives/2021/index.html",revision:"ca8d8168cbe3873a7ccae534e847ac5e"},{url:"archives/2024/11/index.html",revision:"6e0294629f5f4d6d022d89177c84e24b"},{url:"archives/2024/index.html",revision:"5dd13c366b3f378e377aeea009fa4995"},{url:"archives/index.html",revision:"6cfce532e685bd3d4fb30661d7cdb5ec"},{url:"categories/index.html",revision:"34aaf6f1dff97fd4de982916a0a8a383"},{url:"categories/记录/index.html",revision:"fa63df7ceac7047d487a734a573c5eac"},{url:"css/index.css",revision:"ad3ab01043a4e2210825eadcc9c93f0e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery-group/index.html",revision:"cc53b4d2e3b05325cb6433075026c759"},{url:"Gallery/cartoon/index.html",revision:"bd5178a0bb1302379561f4c1db45a627"},{url:"Gallery/mess/index.html",revision:"0b082cafa19749082082059681c8ddd5"},{url:"Gallery/mylife/index.html",revision:"292dac5539b69c4f7ea30e9a229106b6"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"index.html",revision:"b9baf98abe4053e44d48763c48fd1821"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"35370b528e8cdc6b7c7e215628de368a"},{url:"tags/DNS/index.html",revision:"d7994078a6bec766fc15ff366b3eae20"},{url:"tags/Docker/index.html",revision:"cc301a8ac43a8a7187f7d8315712d943"},{url:"tags/index.html",revision:"06eda9869431f445b8f0f3f42ed5886e"},{url:"tags/k8s/index.html",revision:"37b19257e42e3883958fdf5561e46c79"},{url:"tags/Kubernetes/index.html",revision:"58a403218dee5bda394c66bbb804fcfd"},{url:"tags/容器/index.html",revision:"985c9bee5734c8407282e108eb958e1c"},{url:"tags/部署/index.html",revision:"f488ddbde7822e5374997155d23afd86"},{url:"tags/随笔/index.html",revision:"14a121aca14cb5058c5c589742b5098c"},{url:"tags/集群/index.html",revision:"41e9f981e7cf335f9a7f989cdd1822c8"}],{})}));
//# sourceMappingURL=service-worker.js.map
