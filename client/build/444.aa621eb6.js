(self.webpackChunkform_frontend=self.webpackChunkform_frontend||[]).push([[444],{2444:(r,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>p});var t=n(7294),a=n(2487),o=n(5513),s=n(9669),i=n.n(s);function l(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var n=[],t=!0,a=!1,o=void 0;try{for(var s,i=r[Symbol.iterator]();!(t=(s=i.next()).done)&&(n.push(s.value),!e||n.length!==e);t=!0);}catch(r){a=!0,o=r}finally{try{t||null==i.return||i.return()}finally{if(a)throw o}}return n}}(r,e)||function(r,e){if(r){if("string"==typeof r)return c(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(r,e):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}n(5948);const p=function(){var r=(0,a.TH)(),e=l((0,t.useState)(""),2),n=e[0],s=e[1],c=l((0,t.useState)(""),2),p=c[0],u=c[1],m=l((0,t.useState)(!1),2),d=m[0],f=m[1];return t.createElement("div",{className:" h-screen w-full flex flex-col items-center subpixel-antialiased text-2xl justify-center bg-gradient-to-r from-purple-500 to-pink-500"},t.createElement("h3",{className:"pb-6"},"Update your password"),d?t.createElement("div",{className:"flex  text-left my-6"},t.createElement("p",null,"Your password has been saved."),t.createElement(o.rU,{to:"/login",className:"p-6"},"Sign back in")):t.createElement("div",{className:"flex flex-col items-center justify-center"},t.createElement("form",{name:"form",className:"pb-4 flex flex-col items-center justify-center",onSubmit:function(e){e.preventDefault();var t=new URLSearchParams(r.search).get("userId"),a=new URLSearchParams(r.search).get("accessToken");if(console.log("userIdddd",t),console.log("accessssToken",a),n!==p)return s(""),u(""),alert("Please cross-check and ensure your password is same as confirmPassword");i().post("".concat("http://localhost:3000/users","/reset_password/receive_new_password/").concat(t,"/").concat(a),{password:n}).then((function(r){return r})).catch((function(r){return console.warn("ERROR FROM SERVER UPDATING PASSWORD:",r)})),f(!0)}},t.createElement("input",{onChange:function(r){return s(r.target.value)},value:n,placeholder:"New password",type:"password",className:"form-input border-0 border-b-4 py-2 my-3 border-purple-500 "}),t.createElement("input",{onChange:function(r){return u(r.target.value)},value:p,placeholder:"Confirm password",type:"password",className:"form-input border-0 border-b-4 py-3 my-3 border-purple-500 ",name:"confirm password"}),t.createElement("button",{type:"submit",className:"bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-xl my-5 py-3 tracking-widest text-white  "},"Update password"))))}},5938:(r,e,n)=>{"use strict";n.d(e,{Z:()=>o});var t=n(3645),a=n.n(t)()((function(r){return r[1]}));a.push([r.id,".recoverpasswordstyles,\r\n.updatepasswordstyles {\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: rgb(37, 7, 7);\r\n}\r\n\r\nform {\r\n  width: 300px;\r\n}\r\n\r\np,\r\ninput {\r\n  margin-bottom: 0.625rem;\r\n  font-size: 1.125rem;\r\n}\r\n\r\ninput,\r\nbutton {\r\n  width: 100%;\r\n}\r\n\r\np {\r\n  font-size: 1.125rem;\r\n}\r\n\r\na {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.reset-password-form-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  max-width: 430px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.reset-password-form-sent-wrapper {\r\n  max-width: 360px;\r\n  text-align: center;\r\n}\r\n\r\n.reset-password-form-sent-wrapper > p {\r\n    text-align: left;\r\n    margin-top: 1rem;\r\n    margin-bottom: 0.75rem;\r\n  }\r\n\r\n.password-reset-btn {\r\n  padding: 0.625rem 1.25rem;\r\n  font-size: 1.125rem;\r\n}\r\n\r\n.ghostInput {\r\n  /* padding: 0.5rem 1rem 0.43rem; */\r\n  padding: 1rem;\r\n  border-radius: 0.375rem;\r\n  border:1px solid greenyellow;\r\n  /* font-size: 1rem; */\r\n}\r\n\r\n.btn-primary {\r\ncolor: white;\r\nborder-radius: 5px;\r\nmargin-top: 8px;\r\npadding: 6px 12px;\r\nfont-weight: 500;\r\n}",""]);const o=a},5948:(r,e,n)=>{"use strict";var t=n(3379),a=n.n(t),o=n(5938);a()(o.Z,{insert:"head",singleton:!1}),o.Z.locals}}]);