System.register(["./index-legacy-2cac3874.js","./pocketbase-legacy-30e6144f.js"],(function(r,t){"use strict";var e,s,a,n;return{setters:[r=>{e=r.r,s=r.j,a=r.t},r=>{n=r.p}],execute:function(){r("action",(async({request:r})=>{const t=Object.fromEntries(await r.formData());try{return await n.collection("users").authWithPassword(String(t.username),String(t.password)),e("/")}catch(c){if(400===c?.status)return s({error:a("ui.error.username or password is incorrect")},400)}}))}}}));
