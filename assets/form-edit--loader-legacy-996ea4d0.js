System.register(["./schema_loader-legacy-2d4238e4.js","./index-legacy-196a83eb.js","./db_calls-legacy-e7805a0c.js","./survey-edit--loader-legacy-b7930b74.js","./index-legacy-2cac3874.js","./tieu_hoc_child_oidp-legacy-8c5c0e37.js","./db-legacy-93e2ed40.js"],(function(e,a){"use strict";var s,t,r,l,n;return{setters:[e=>{s=e.i},e=>{t=e.f},e=>{r=e.l},e=>{l=e.loaderSurveyDataAndSchema},e=>{n=e.j},null,null],execute:function(){const a=e=>{const{survey:a}=e;let s={};return a.forEach((e=>{c(e,s)})),s};function c(e,a){switch(e.type){case"date":if(e.defaultValue){const s=e.defaultValue;if("now()"==s.value){const r=s.format||"dd-MM-yyyy";a[e.name]=t(new Date,r)}}break;case"group":e.fields.forEach((e=>{c(e,a)}));break;case"select_one":case"select_one_ref":case"matrix_select_one":case"select_many":a[e.name]=[];case"select_many_ref":a[e.name]=[]}}e("loader",(async({request:e,params:t})=>{s(t.formName);const{survey:c,surveySchema:o}=await l(t),u=o.forms.find((({form:e})=>e.name===t.formName));if(null==u)throw new Response(`Form ${t.formName} isn't available`,{status:400,statusText:"Unknown form name"});const m=await r(c.surveyId,t.formName),f=u.makeInitialValues?u.makeInitialValues():a(u.form);return n({formSchema:u,survey:c,formData:m||null,defaultValues:f})}))}}}));
