"use strict";(self["webpackChunknubankClone"]=self["webpackChunknubankClone"]||[]).push([[261],{261:function(t,n,e){e.r(n),e.d(n,{MENU_BACK_BUTTON_PRIORITY:function(){return u},OVERLAY_BACK_BUTTON_PRIORITY:function(){return i},blockHardwareBackButton:function(){return r},startHardwareBackButton:function(){return o}});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const r=()=>{document.addEventListener("backbutton",(()=>{}))},o=()=>{const t=document;let n=!1;t.addEventListener("backbutton",(()=>{if(n)return;let e=0,r=[];const o=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,n){r.push({priority:t,handler:n,id:e++})}}});t.dispatchEvent(o);const i=async t=>{try{if(t&&t.handler){const n=t.handler(u);null!=n&&await n}}catch(n){console.error(n)}},u=()=>{if(r.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};r.forEach((n=>{n.priority>=t.priority&&(t=n)})),n=!0,r=r.filter((n=>n.id!==t.id)),i(t).then((()=>n=!1))}};u()}))},i=100,u=99}}]);
//# sourceMappingURL=261.5b21abb1.js.map