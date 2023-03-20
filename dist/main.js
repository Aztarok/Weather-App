(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,"html {\r\n    background-color: rgb(17, 96, 170);\r\n    color: white\r\n}\r\n\r\ninput,\r\ninput:focus,\r\ninput:hover {\r\n    border-radius: 25px;\r\n    border: none;\r\n    outline: none;\r\n    padding-left: 10px;\r\n    height: 18px;\r\n}\r\n\r\n.temp {\r\n    display: flex;\r\n    width: 100vw;\r\n    height: 20vh;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(c[u]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var u=e[i],s=r.base?u[0]+r.base:u[0],l=a[s]||0,d="".concat(s," ").concat(l);a[s]=l+1;var p=t(d),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var v=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:d,updater:v,references:1})}c.push(d)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var u=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=u}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),u=t.n(i),s=t(216),l=t.n(s),d=t(589),p=t.n(d),f=t(28),v={};v.styleTagTransform=p(),v.setAttributes=u(),v.insert=c().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),n()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;let m=document.querySelector(".location"),h=document.querySelector(".temp-f"),y=document.querySelector(".temp-c"),g=document.querySelector(".area"),b=document.querySelector(".current"),x=document.querySelector(".wind");async function w(e){try{let n="https://api.weatherapi.com/v1/current.json?key=f94d47c54aad469bb4642005231803&q="+e+"&aqi=yes",t=await(await fetch(n,{mode:"cors"})).json();!function(e){let n=e.current.wind_mph;x.innerHTML=`Wind MPH: ${n}`}(t),function(e){let n=e.current.temp_f,t=e.current.temp_c;h.innerHTML=`F: ${n}° `,y.innerHTML=`C: ${t}° `}(t),function(e){let n=e.location.country,t=e.location.name;g.innerHTML=`${t.toUpperCase()}, ${n.toUpperCase()}`}(t),function(e){let n=e.current.condition.text;b.innerHTML=`Current Weather: ${n}`}(t)}catch(e){console.log(e)}}window.onload=()=>{w("london")},m.addEventListener("keyup",(({key:e})=>{"Enter"===e&&(w(document.querySelector(".location").value),m.value="")}))})()})();