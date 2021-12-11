"use strict";(self.webpackChunkform_frontend=self.webpackChunkform_frontend||[]).push([[27],{6027:(r,e,n)=>{n.r(e),n.d(e,{default:()=>m});var t=n(7294),o=n(5513),a=n(9669),s=n.n(a);function l(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,o,a=[],s=!0,l=!1;try{for(n=n.call(r);!(s=(t=n.next()).done)&&(a.push(t.value),!e||a.length!==e);s=!0);}catch(r){l=!0,o=r}finally{try{s||null==n.return||n.return()}finally{if(l)throw o}}return a}}(r,e)||function(r,e){if(r){if("string"==typeof r)return i(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(r,e):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}n(1170);const m=function(r){var e=r.message,n=l((0,t.useState)(""),2),a=n[0],i=n[1],m=l((0,t.useState)(!1),2),c=m[0],u=m[1];return t.createElement("div",{className:"recoverpasswordstyles"},t.createElement("h3",null,"Reset your password"),c?t.createElement("div",{className:"reset-password-form-sent-wrapper"},t.createElement("p",null,"If that account is in our system, we emailed you a link to reset your password."),t.createElement(o.rU,{to:"/login",className:""},"Return to sign in")):t.createElement("div",{className:"reset-password-form-wrapper"},t.createElement("p",null,"It happens to the best of us. Enter your email and we'll send you reset instructions."),t.createElement("form",{className:"form row",onSubmit:function(r){r.preventDefault(),s().post("".concat("https://form-exam.herokuapp.com/users","/forgot_password/").concat(a)).then((function(r){return console.log("response111111",r.data),r&&(e=r.data.message,console.log("message",e)),e}),(function(r){r.response?console.log("errorRes",r.response):r.request?console.log("errorReq",r.request):console.log("eeeror",r)})),u(!0),i("")}},t.createElement("div",{className:c&&!a?" has-error":""},t.createElement("label",{htmlFor:"email"},"Email"),t.createElement("input",{type:"email",className:"form-control my-3 p-4",value:a,name:"email",onChange:function(r){return i(r.target.value)},placeholder:"Email address"}),c&&!a&&t.createElement("div",{className:"help-block"},"Email is required")),t.createElement("div",{className:"form-row col"},t.createElement("button",{className:"btn-primary password-reset-btn"}," ",t.createElement("span",{className:"buttonText"},"Send password reset link to email")))),t.createElement(o.rU,{to:"/login"},"I remember my password")))}},3564:(r,e,n)=>{n.d(e,{Z:()=>a});var t=n(3645),o=n.n(t)()((function(r){return r[1]}));o.push([r.id,".recoverpasswordstyles,\r\n.updatepasswordstyles {\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: rgb(37, 7, 7);\r\n}\r\n\r\nform {\r\n  width: 300px;\r\n}\r\n\r\np,\r\ninput {\r\n  margin-bottom: 0.625rem;\r\n  font-size: 1.125rem;\r\n}\r\n\r\ninput,\r\nbutton {\r\n  width: 100%;\r\n}\r\n\r\np {\r\n  font-size: 1.125rem;\r\n}\r\n\r\na {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.reset-password-form-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  max-width: 430px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.reset-password-form-sent-wrapper {\r\n  max-width: 360px;\r\n  text-align: center;\r\n}\r\n\r\n.reset-password-form-sent-wrapper > p {\r\n    text-align: left;\r\n    margin-top: 1rem;\r\n    margin-bottom: 0.75rem;\r\n  }\r\n\r\n.password-reset-btn {\r\n  padding: 0.625rem 1.25rem;\r\n  font-size: 1.125rem;\r\n}\r\n\r\n.ghostInput {\r\n  /* padding: 0.5rem 1rem 0.43rem; */\r\n  padding: 1rem;\r\n  border-radius: 0.375rem;\r\n  border:1px solid greenyellow;\r\n  /* font-size: 1rem; */\r\n}\r\n\r\n.btn-primary {\r\ncolor: white;\r\nborder-radius: 5px;\r\nmargin-top: 8px;\r\npadding: 6px 12px;\r\nfont-weight: 500;\r\n}",""]);const a=o},1170:(r,e,n)=>{var t=n(3379),o=n.n(t),a=n(3564);o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals}}]);