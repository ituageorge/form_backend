/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 4213:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.css
var cjs_js_src = __webpack_require__(1383);
;// CONCATENATED MODULE: ./src/index.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(cjs_js_src/* default */.Z, options);



/* harmony default export */ const src = (cjs_js_src/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 1 modules
var react_router_dom = __webpack_require__(5513);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 3 modules
var react_router = __webpack_require__(2487);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/router/styles.css
var styles = __webpack_require__(4500);
;// CONCATENATED MODULE: ./src/router/styles.css

            

var styles_options = {};

styles_options.insert = "head";
styles_options.singleton = false;

var styles_update = injectStylesIntoStyleTag_default()(styles/* default */.Z, styles_options);



/* harmony default export */ const router_styles = (styles/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/router/AppRouter.js



var PrivateRoute = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 753).then(__webpack_require__.bind(__webpack_require__, 5753));
}); // import { PrivateRoute } from '../_helpers';

var HomePage = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(669), __webpack_require__.e(281), __webpack_require__.e(775)]).then(__webpack_require__.bind(__webpack_require__, 6775));
}); // import { HomePage } from '../component/home';

var UserManagement = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 530).then(__webpack_require__.bind(__webpack_require__, 7530));
}); // import { UserManagement } from '../component/home';

var LoginForm = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(669), __webpack_require__.e(738), __webpack_require__.e(566)]).then(__webpack_require__.bind(__webpack_require__, 9042));
}); // import { LoginForm } from '../component/login';

var RegistrationForm = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(669), __webpack_require__.e(738), __webpack_require__.e(739)]).then(__webpack_require__.bind(__webpack_require__, 1312));
}); // import { RegistrationForm } from '../component/registration';

var RecoverPassword = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(669), __webpack_require__.e(27)]).then(__webpack_require__.bind(__webpack_require__, 6027));
}); // import { RecoverPassword } from '../component/forgotPassword';

var UpdatePassword = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(669), __webpack_require__.e(444)]).then(__webpack_require__.bind(__webpack_require__, 2444));
}); // import { UpdatePassword } from '../component/forgotPassword';
// const Loader = lazy(() => import('../component/loader/loading'))

{
  /* <Suspense fallback={<Loader /> | <h1 className=''>Loading</h1>}> */
}
function App() {
  var userId = '';
  var token = '';
  return /*#__PURE__*/react.createElement("div", {
    className: "" //  style={{ backgroundImage: "url(dist\sincerely-media-DgQf1dUKUTM-unsplash.jpg)" }}

  }, /*#__PURE__*/react.createElement(react_router_dom/* HashRouter */.UT, null, /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement("h1", null, "Loading...")
  }, /*#__PURE__*/react.createElement(react_router/* Switch */.rs, null, /*#__PURE__*/react.createElement(PrivateRoute, {
    exact: true,
    path: "/",
    component: HomePage
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/user_management",
    component: UserManagement
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/login",
    component: LoginForm
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/recover/password",
    component: RecoverPassword
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/reset-password-link/".concat(userId, "/").concat(token),
    component: UpdatePassword
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/register",
    component: RegistrationForm
  }), /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
    from: "*",
    to: "/register"
  })))));
} // export default App;
;// CONCATENATED MODULE: ./src/index.js

 // import { HashRouter } from 'react-router-dom'



var wrapper = document.getElementById('container');
wrapper ? react_dom.render(
/*#__PURE__*/
// <HashRouter>
react.createElement(App, null), // </HashRouter>,
wrapper) : false;

/***/ }),

/***/ 1383:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.1 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse;  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;  /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;  /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;  /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n.border-0, .border-8, .border-b-8, .border-b-4 {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n\n.form-input,.form-textarea,.form-select,.form-multiselect {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  border-color: #6b7280;\n  border-width: 1px;\n  border-radius: 0px;\n  padding-top: 0.5rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  --tw-shadow: 0 0 #0000;\n}\n\n.form-input:focus, .form-textarea:focus, .form-select:focus, .form-multiselect:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: #2563eb;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  border-color: #2563eb;\n}\n\n.form-input::-moz-placeholder, .form-textarea::-moz-placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\n.form-input:-ms-input-placeholder, .form-textarea:-ms-input-placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\n.form-input::placeholder,.form-textarea::placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\n.form-input::-webkit-datetime-edit-fields-wrapper {\n  padding: 0;\n}\n\n.form-input::-webkit-date-and-time-value {\n  min-height: 1.5em;\n}\r\n.container {\n  width: 100%;\n}\r\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\r\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\r\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\r\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\r\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\r\n.m-3 {\n  margin: 0.75rem;\n}\r\n.m-auto {\n  margin: auto;\n}\r\n.m-4 {\n  margin: 1rem;\n}\r\n.m-8 {\n  margin: 2rem;\n}\r\n.m-5 {\n  margin: 1.25rem;\n}\r\n.my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\r\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\r\n.my-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\r\n.-my-3 {\n  margin-top: -0.75rem;\n  margin-bottom: -0.75rem;\n}\r\n.my-5 {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\r\n.my-6 {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\r\n.-mx-6 {\n  margin-left: -1.5rem;\n  margin-right: -1.5rem;\n}\r\n.mx-10 {\n  margin-left: 2.5rem;\n  margin-right: 2.5rem;\n}\r\n.mx-6 {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\r\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\r\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\r\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\r\n.mt-3 {\n  margin-top: 0.75rem;\n}\r\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\r\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\r\n.block {\n  display: block;\n}\r\n.inline {\n  display: inline;\n}\r\n.flex {\n  display: flex;\n}\r\n.h-screen {\n  height: 100vh;\n}\r\n.h-full {\n  height: 100%;\n}\r\n.h-24 {\n  height: 6rem;\n}\r\n.h-1\\/5 {\n  height: 20%;\n}\r\n.h-20 {\n  height: 5rem;\n}\r\n.h-2\\/3 {\n  height: 66.666667%;\n}\r\n.h-2\\/5 {\n  height: 40%;\n}\r\n.h-3\\/5 {\n  height: 60%;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.w-1\\/4 {\n  width: 25%;\n}\r\n.w-24 {\n  width: 6rem;\n}\r\n.w-20 {\n  width: 5rem;\n}\r\n.w-2\\/5 {\n  width: 40%;\n}\r\n.w-3\\/5 {\n  width: 60%;\n}\r\n.w-1\\/2 {\n  width: 50%;\n}\r\n.max-w-md {\n  max-width: 28rem;\n}\r\n@-webkit-keyframes bounce {\n\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n            animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n            animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\r\n@keyframes bounce {\n\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n            animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n            animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\r\n.animate-bounce {\n  -webkit-animation: bounce 1s infinite;\n          animation: bounce 1s infinite;\n}\r\n@-webkit-keyframes spin {\n\n  to {\n    transform: rotate(360deg);\n  }\n}\r\n@keyframes spin {\n\n  to {\n    transform: rotate(360deg);\n  }\n}\r\n.animate-spin {\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\r\n.flex-row {\n  flex-direction: row;\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.content-around {\n  align-content: space-around;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.justify-start {\n  justify-content: flex-start;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.justify-between {\n  justify-content: space-between;\n}\r\n.rounded-full {\n  border-radius: 9999px;\n}\r\n.rounded-none {\n  border-radius: 0px;\n}\r\n.rounded-lg {\n  border-radius: 0.5rem;\n}\r\n.border-0 {\n  border-width: 0px;\n}\r\n.border-8 {\n  border-width: 8px;\n}\r\n.border-b-8 {\n  border-bottom-width: 8px;\n}\r\n.border-b-4 {\n  border-bottom-width: 4px;\n}\r\n.border-purple-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(168 85 247 / var(--tw-border-opacity));\n}\r\n.border-transparent {\n  border-color: transparent;\n}\r\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\r\n.bg-green-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 252 231 / var(--tw-bg-opacity));\n}\r\n.bg-red-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 226 226 / var(--tw-bg-opacity));\n}\r\n.bg-purple-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(88 28 135 / var(--tw-bg-opacity));\n}\r\n.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\r\n.bg-pink-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(236 72 153 / var(--tw-bg-opacity));\n}\r\n.bg-yellow-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(253 224 71 / var(--tw-bg-opacity));\n}\r\n.bg-blue-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(96 165 250 / var(--tw-bg-opacity));\n}\r\n.bg-red-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 113 113 / var(--tw-bg-opacity));\n}\r\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\r\n.bg-green-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(74 222 128 / var(--tw-bg-opacity));\n}\r\n.bg-purple-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(192 132 252 / var(--tw-bg-opacity));\n}\r\n.bg-transparent {\n  background-color: transparent;\n}\r\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\r\n.from-purple-500 {\n  --tw-gradient-from: #a855f7;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(168 85 247 / 0));\n}\r\n.from-blue-500 {\n  --tw-gradient-from: #3b82f6;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(59 130 246 / 0));\n}\r\n.from-blue-600 {\n  --tw-gradient-from: #2563eb;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(37 99 235 / 0));\n}\r\n.to-pink-500 {\n  --tw-gradient-to: #ec4899;\n}\r\n.to-blue-300 {\n  --tw-gradient-to: #93c5fd;\n}\r\n.to-blue-400 {\n  --tw-gradient-to: #60a5fa;\n}\r\n.p-3 {\n  padding: 0.75rem;\n}\r\n.p-6 {\n  padding: 1.5rem;\n}\r\n.p-4 {\n  padding: 1rem;\n}\r\n.p-16 {\n  padding: 4rem;\n}\r\n.p-10 {\n  padding: 2.5rem;\n}\r\n.p-2 {\n  padding: 0.5rem;\n}\r\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\r\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\r\n.py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\r\n.px-20 {\n  padding-left: 5rem;\n  padding-right: 5rem;\n}\r\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\r\n.pb-4 {\n  padding-bottom: 1rem;\n}\r\n.pb-6 {\n  padding-bottom: 1.5rem;\n}\r\n.pt-3 {\n  padding-top: 0.75rem;\n}\r\n.text-left {\n  text-align: left;\n}\r\n.font-mono {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\r\n.font-sans {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\r\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\r\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\r\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\r\n.text-6xl {\n  font-size: 3.75rem;\n  line-height: 1;\n}\r\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\r\n.font-bold {\n  font-weight: 700;\n}\r\n.font-extralight {\n  font-weight: 200;\n}\r\n.font-light {\n  font-weight: 300;\n}\r\n.italic {\n  font-style: italic;\n}\r\n.leading-3 {\n  line-height: .75rem;\n}\r\n.leading-loose {\n  line-height: 2;\n}\r\n.tracking-widest {\n  letter-spacing: 0.1em;\n}\r\n.tracking-wider {\n  letter-spacing: 0.05em;\n}\r\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\r\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity));\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\r\n.subpixel-antialiased {\n  -webkit-font-smoothing: auto;\n  -moz-osx-font-smoothing: auto;\n}\r\n.focus\\:border-none:focus {\n  border-style: none;\n}\r\n@media (min-width: 768px) {\n\n  .md\\:rounded-l-xl {\n    border-top-left-radius: 0.75rem;\n    border-bottom-left-radius: 0.75rem;\n  }\n\n  .md\\:rounded-r-xl {\n    border-top-right-radius: 0.75rem;\n    border-bottom-right-radius: 0.75rem;\n  }\n}\r\n@media (min-width: 1024px) {\n\n  .lg\\:w-1\\/4 {\n    width: 25%;\n  }\n\n  .lg\\:w-3\\/4 {\n    width: 75%;\n  }\n\n  .lg\\:w-3\\/5 {\n    width: 60%;\n  }\n\n  .lg\\:w-2\\/5 {\n    width: 40%;\n  }\n\n  .lg\\:flex-row {\n    flex-direction: row;\n  }\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4500:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* body {\r\n    margin: 0;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\r\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\r\n      sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  } */\r\n\r\n  /* * {\r\n    font-family: \"Verdana\", cursive, sans-serif;\r\n    color:black ; \r\n  } */\r\n\r\n  \r\n  /* body {\r\n    background-color: #7cc6fe;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 100vh;\r\n    font-size: 1.3rem;\r\n    font-weight: 900;\r\n  } */\r\n\r\n  .buttonText {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    color: #ffffff;\r\n  }\r\n\r\n  .updatepasswordstyles {\r\n      width: 100%;\r\n  }\r\n  \r\n  .app {\r\n    background-color: #171f3a;\r\n    width: 40vw;\r\n    min-height: 200px;\r\n    height: -webkit-min-content;\r\n    height: -moz-min-content;\r\n    height: min-content;\r\n    border-radius: 15px;\r\n    padding: 20px;\r\n    box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    line-height: 2;\r\n  }\r\n  \r\n  .score-section {\r\n    display: flex;\r\n    font-size: 24px;\r\n    align-items: center;\r\n  }\r\n  \r\n  /* QUESTION/TIMER/LEFT SECTION */\r\n  .question-section {\r\n    width: 100%;\r\n    position: relative;\r\n  }\r\n  \r\n  .question-count {\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .question-count span {\r\n    font-size: 28px;\r\n  }\r\n  \r\n  .question-text {\r\n    margin-bottom: 12px;\r\n  }\r\n  \r\n  .timer-text {\r\n    background: rgb(230, 153, 12);\r\n    padding: 15px;\r\n    margin-top: 20px;\r\n    margin-right: 20px;\r\n    border: 5px solid rgb(255, 189, 67);\r\n    border-radius: 15px;\r\n    text-align: center;\r\n  }\r\n  \r\n  /* ANSWERS/RIGHT SECTION */\r\n  .answer-section {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  button {\r\n    width: 100%;\r\n    font-size: 16px;\r\n    color: #ffffff;\r\n    background-color: #252d4a;\r\n    border-radius: 15px;\r\n    display: flex;\r\n    padding: 5px;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    border: 5px solid #234668;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .correct {\r\n    background-color: #2f922f;\r\n  }\r\n  \r\n  .incorrect {\r\n    background-color: #ff3333;\r\n  }\r\n  \r\n  button:hover {\r\n    background-color: #555e7d;\r\n  }\r\n  \r\n  button:focus {\r\n    outline: none;\r\n  }\r\n  \r\n  button svg {\r\n    margin-right: 5px;\r\n  }\r\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"27":"1012aaf3","281":"6ddf0ef2","444":"1498c008","530":"2ec6eabc","566":"c2bd38db","669":"88cc25a7","738":"03fa4983","739":"7113deb1","753":"a9820382","775":"132bd1ae"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "form_frontend:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkform_frontend"] = self["webpackChunkform_frontend"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [228], () => (__webpack_require__(5666)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [228], () => (__webpack_require__(4213)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;