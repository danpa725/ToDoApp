parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"AdUc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../toDo"),n="flex flex-row items-center justify-between mt-3 py-3 w-full bg-white bg-opacity-90 rounded-md shadow transition duration-150 ease-in-out transform-gpu hover:-translate-y-1 hover:shdow-xl",t="w-6 h-6 rounded-full mr-2 img-setting del-img transition duration-150 ease-in-out transform-gpu hover:scale-125 focus:outline-none focus:scale-95 focus:ring-2 focus:ring-red-300",o="w-6 h-6 rounded-full img-setting fin-img transition duration-150 ease-in-out transform-gpu hover:scale-125 focus:outline-none focus:scale-95 focus:ring-2 focus:ring-blue-300",a="w-6 h-6 rounded-full img-setting append-img transition duration-150 ease-in-out transform-gpu hover:scale-125 focus:outline-none focus:scale-95 focus:ring-2 focus:ring-green-300",i="flex flex-row mr-3",r="ml-3",l=document.querySelector(".todo-list"),s=document.querySelector(".todo-fin"),d=function(d,c,u){if(!1===u){var m=document.createElement("span"),f=document.createElement("div"),p=document.createElement("li"),g=document.createElement("button"),h=document.createElement("button");p.innerHTML="".concat(d),h.innerHTML="",g.innerHTML="",m.appendChild(p),f.appendChild(h),f.appendChild(g),m.appendChild(f),l.appendChild(m),m.className=n,h.className=t,g.className=o,f.className=i,p.className=r,h.id=c,h.addEventListener("click",e.deleteFromToDo),g.addEventListener("click",e.finToDo)}else if(!0===u){var v=document.createElement("span"),E=document.createElement("div"),w=document.createElement("li"),C=document.createElement("button"),L=document.createElement("button");w.innerHTML="".concat(d),C.innerHTML="",L.innerHTML="",v.appendChild(w),E.appendChild(C),E.appendChild(L),v.appendChild(E),s.appendChild(v),v.className=n,C.className=t,L.className=a,E.className=i,w.className=r,C.id=c,C.addEventListener("click",e.deleteFromFin),L.addEventListener("click",e.returnToDo)}},c=d;exports.default=c;
},{"../toDo":"bmy6"}],"bmy6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.returnToDo=exports.finToDo=exports.deleteFromToDo=exports.deleteFromFin=void 0;var e=t(require("./export/render"));function t(e){return e&&e.__esModule?e:{default:e}}var r=document.querySelector(".todo-form"),o=document.querySelector("#todo-input"),n="toDos",a="toDosFin",i="deleteToDo",d="postponeToDo",u="returnToDo",s="deleteFin",l=[],c=[],f=function(t,r){var o=localStorage.getItem(t);null!==(o=JSON.parse(o))&&Object.values(o).forEach(function(t){r.push(t),(0,e.default)(t.text,t.id,t.fin)})},p=function(e){var t=e.value;return e.value="",t},v=function(t){t.preventDefault();var r={text:p(o),id:Date.now(),fin:!1};l.push(r),x(),(0,e.default)(r.text,r.id,r.fin)},x=function(){localStorage.setItem(n,JSON.stringify(l))},N=function(){localStorage.setItem(a,JSON.stringify(c))},g=function(e){var t=e.target.parentNode.querySelector("button").id;e.target.parentNode.parentNode.classList.add("hidden"),b(i,l,null,t)};exports.deleteFromToDo=g;var D=function(e){var t=e.target.parentNode.querySelector("button").id;console.log(t),e.target.parentNode.parentNode.classList.add("hidden"),b(s,c,null,t)};exports.deleteFromFin=D;var m=function(e){var t=e.target.parentNode.querySelector("button").id;e.target.parentNode.parentNode.classList.add("hidden"),b(d,l,c,t)};exports.finToDo=m;var S=function(e){var t=e.target.parentNode.querySelector("button").id;e.target.parentNode.parentNode.classList.add("hidden"),b(u,c,l,t)};exports.returnToDo=S;var b=function(t,r,o,n){var a=r.find(function(e){return e.id===Number(n)}),l=r.indexOf(a);switch(t){case i:l>-1&&r.splice(l,1),x();break;case s:l>-1&&r.splice(l,1),N();break;case d:if(l>-1){var c=r[l];c.fin=!0,o.push(c),r.splice(l,1);var f=c.text,p=c.id,v=c.fin;(0,e.default)(f,p,v)}x(),N();break;case u:if(l>-1){var g=r[l];g.fin=!1,o.push(g),r.splice(l,1);var D=g.text,m=g.id,S=g.fin;(0,e.default)(D,m,S)}x(),N()}},h=function(){f(n,l),f(a,c),r.addEventListener("submit",v)};h();
},{"./export/render":"AdUc"}]},{},["bmy6"], null)
//# sourceMappingURL=toDo.1732c4ed.js.map