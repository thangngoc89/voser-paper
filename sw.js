if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),o={module:{uri:n},exports:a,require:u};e[n]=Promise.all(r.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/create-survey-route-3dfd2a21.js",revision:null},{url:"assets/create-survey-route-legacy-cf7d5ac9.js",revision:null},{url:"assets/db_calls-7a24e399.js",revision:null},{url:"assets/db_calls-legacy-e7805a0c.js",revision:null},{url:"assets/db-e5ae38dc.js",revision:null},{url:"assets/db-legacy-93e2ed40.js",revision:null},{url:"assets/error-page-bbb02bcf.js",revision:null},{url:"assets/error-page-legacy-44e0403b.js",revision:null},{url:"assets/form-edit--loader-78e8e808.js",revision:null},{url:"assets/form-edit--loader-legacy-996ea4d0.js",revision:null},{url:"assets/form-edit-5ea97522.css",revision:null},{url:"assets/form-edit-cb1761f4.js",revision:null},{url:"assets/form-edit-legacy-87ce671d.js",revision:null},{url:"assets/Heading-569e83f0.js",revision:null},{url:"assets/Heading-legacy-e494ce23.js",revision:null},{url:"assets/home--loader-4a8ca2e1.js",revision:null},{url:"assets/home--loader-legacy-6ff41f2b.js",revision:null},{url:"assets/home-0cb62341.js",revision:null},{url:"assets/home-legacy-6ce0f198.js",revision:null},{url:"assets/index-6dd18cea.js",revision:null},{url:"assets/index-b0b07812.js",revision:null},{url:"assets/index-b40a53db.css",revision:null},{url:"assets/index-legacy-196a83eb.js",revision:null},{url:"assets/index-legacy-2cac3874.js",revision:null},{url:"assets/login--action-d81e7f4c.js",revision:null},{url:"assets/login--action-legacy-4d4e5955.js",revision:null},{url:"assets/logout--loader-3473ec91.js",revision:null},{url:"assets/logout--loader-legacy-21313067.js",revision:null},{url:"assets/manage--loader-42ee4a7e.js",revision:null},{url:"assets/manage--loader-legacy-1585ca2d.js",revision:null},{url:"assets/manage-8d3752ec.js",revision:null},{url:"assets/manage-legacy-73fb8f7b.js",revision:null},{url:"assets/pocketbase-7569c031.js",revision:null},{url:"assets/pocketbase-legacy-30e6144f.js",revision:null},{url:"assets/polyfills-legacy-92872abc.js",revision:null},{url:"assets/schema_loader-8b4c3283.js",revision:null},{url:"assets/schema_loader-legacy-2d4238e4.js",revision:null},{url:"assets/survey-edit--loader-8e15975e.js",revision:null},{url:"assets/survey-edit--loader-legacy-b7930b74.js",revision:null},{url:"assets/survey-edit-4174aebb.js",revision:null},{url:"assets/survey-edit-legacy-96e803a1.js",revision:null},{url:"assets/sync--action-ead614ff.js",revision:null},{url:"assets/sync--action-legacy-1dcaf09f.js",revision:null},{url:"assets/TextInput-92c148ed.js",revision:null},{url:"assets/TextInput-legacy-2fcb051e.js",revision:null},{url:"assets/tieu_hoc_child_oidp-3baf1c59.js",revision:null},{url:"assets/tieu_hoc_child_oidp-legacy-8c5c0e37.js",revision:null},{url:"assets/types-474546bd.js",revision:null},{url:"assets/types-legacy-03094d55.js",revision:null},{url:"assets/workbox-window.prod.es5-bd8efbfb.js",revision:null},{url:"assets/workbox-window.prod.es5-legacy-ab6aa431.js",revision:null},{url:"index.html",revision:"20414791ff76d96be0b7074ebc196c58"},{url:"manifest.webmanifest",revision:"9c39d93bf153112d079ab23627a29978"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
