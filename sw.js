if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,t,i)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const o={uri:location.origin+s.slice(1)};return Promise.all(t.map(s=>{switch(s){case"exports":return r;case"module":return o;default:return e(s)}})).then(e=>{const s=i(...e);return r.default||(r.default=s),r})}))}}define("./sw.js",["./workbox-8e63606b"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"assets/images/avatar.jpg",revision:"320966f55b3c6b42fb9be72398605976"},{url:"assets/stylesheets/base.css",revision:"e77d9436dd289bf5d1d13c134ea77113"},{url:"index.html",revision:"ee5678effc9ad518184a8382cbf44c12"}],{})}));
//# sourceMappingURL=sw.js.map
