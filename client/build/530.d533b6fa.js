"use strict";(self.webpackChunkform_frontend=self.webpackChunkform_frontend||[]).push([[530],{7530:(e,r,t)=>{t.r(r),t.d(r,{default:()=>l});var n=t(7294);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r,t,n,o,a,c){try{var u=e[a](c),i=u.value}catch(e){return void t(e)}u.done?r(i):Promise.resolve(i).then(n,o)}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const l=function(){var e,r,t=(e=(0,n.useState)({isLoggedIn:!1,user:null}),r=2,function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(t.push(c.value),!r||t.length!==r);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return t}}(e,r)||function(e,r){if(e){if("string"==typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=t[0],c=t[1];return(0,n.useEffect)((function(){var e;(e=regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("accessToken")){e.next=13;break}return e.prev=2,e.next=5,axios.get("".concat("http://localhost:3000/users","/protected_user"));case 5:r=e.sent,console.log(r.data),c(a(a({},o),{},{isLoggedIn:!0,user:r.data.user})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})),function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function c(e){u(a,n,o,c,i,"next",e)}function i(e){u(a,n,o,c,i,"throw",e)}c(void 0)}))})()}),[]),n.createElement("div",null,n.createElement("p",null,"Here are the users"),":",n.createElement("h4",null,o.isLoggedIn&&o.user))}}}]);