(()=>{"use strict";var e={295:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".dessert-container {\n  flex-basis: 25%;\n  width: 100px;\n  height: 250px;\n  text-align: center;\n}\n.dessert-container .dessert-img {\n  height: 100px;\n}\n",""]);const i=a},357:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"#desserts-container {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 50px;\n}\n",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var o=0;o<e.length;o++){var c=[].concat(e[o]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],o=0;o<e.length;o++){var c=e[o],l=r.base?c[0]+r.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(t[u].references++,t[u].updater(m)):t.push({identifier:p,updater:a(m,r),references:1}),s.push(p)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var o=n(i[s]);t[o].references--}for(var c=r(e,a),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e={cookies:[{type:"chocolate chip",price:3,img:"/dist/images/ariana-suarez-W1Q6TAotxfY-unsplash.jpg"},{type:"sugar",price:3,img:"/dist/images/girl-with-red-hat-1gOnnifGlOI-unsplash.jpg"},{type:"oatmeal",price:4,img:"/dist/images/denisse-leon-oLq-OHHnEyQ-unsplash.jpg"}],cakes:[{type:"chocolate",price:3,img:"/dist/images/will-echols-P_l1bJQpQF0-unsplash.jpg"},{type:"german chocolate",price:5,img:"/dist/images/will-echols-P_l1bJQpQF0-unsplash.jpg"},{type:"red velvet",price:5,img:"/dist/images/estefania-escalante-fernandez-_7xYmQQ69ok-unsplash.jpg"}],pies:[{type:"cherry",price:3,img:"/dist/images/dilyara-garifullina-ftrv8LiVZso-unsplash.jpg"},{type:"strawberry",price:4,img:"/dist/images/dilyara-garifullina-8as4dlXh8Is-unsplash.jpg"},{type:"apple",price:3,img:"/dist/images/dilyara-garifullina-D7X-GMeTV7U-unsplash.jpg"}],brownies:[{type:"vanilla iced",price:5,img:"/dist/images/victoria-morgan-jKc9vm1DYgg-unsplash.jpg"},{type:"turtle",price:8,img:"/dist/images/victoria-morgan-jKc9vm1DYgg-unsplash.jpg"},{type:"candy topped",price:6,img:"/dist/images/aneta-voborilova-VluG0SpIlrM-unsplash.jpg"}]};var t=n(379),r=n.n(t),a=n(795),i=n.n(a),s=n(569),o=n.n(s),c=n(565),l=n.n(c),d=n(216),p=n.n(d),u=n(589),m=n.n(u),f=n(295),g={};g.styleTagTransform=m(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),r()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const h=e=>{const t=document.createElement("div"),n=document.createElement("img"),r=document.createElement("p"),a=document.createElement("p");return t.classList.add("dessert-container"),n.classList.add("dessert-img"),r.classList.add("dessert-name"),a.classList.add("dessert-price"),n.setAttribute("src",e.img),n.setAttribute("alt",`picture of a ${e.type} dessert`),r.textContent=e.type,a.textContent=`$${e.price}`,[n,r,a].forEach((e=>t.appendChild(e))),t};var v=n(357),y={};y.styleTagTransform=m(),y.setAttributes=l(),y.insert=o().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=p(),r()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;const b=()=>{const e=document.createElement("div");return e.id="desserts-container",e},x=()=>{const e=document.querySelector("#desserts-container");for(;e.firstChild;)e.removeChild(e.firstChild)},C=document.querySelector("body"),E=b(),j=()=>{for(let t in e)e[t].forEach((e=>{E.appendChild(h(e))}))};(()=>{const t=Object.keys(e);C.appendChild((e=>{const t=document.createElement("select"),n=["all",...e];return t.id="dessert-selector",n.forEach((e=>{const n=document.createElement("option");n.classList.add("dessert-option"),n.textContent=e[0].toUpperCase()+e.slice(1),n.setAttribute("value",e),t.appendChild(n)})),t})(t)),j(),C.appendChild(E)})(),document.querySelector("#dessert-selector").addEventListener("change",(t=>{x(),"all"===t.target.value?j():e[t.target.value].forEach((e=>{E.appendChild(h(e))}))}))})()})();