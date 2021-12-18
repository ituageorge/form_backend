"use strict";
(self["webpackChunkform_frontend"] = self["webpackChunkform_frontend"] || []).push([[27],{

/***/ 6027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5513);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _recoverPassword_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5948);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // require('dotenv').config();

 // import {history} from '../../_helpers/history';
// const baseUrl = 'http://localhost:3000/users';

var RecoverPassword = function RecoverPassword(_ref) {
  var message = _ref.message;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      submitted = _useState4[0],
      setSubmitted = _useState4[1];

  var sendPasswordResetEmail = function sendPasswordResetEmail(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat({"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\GEORGE\\AppData\\Roaming","BASE_URL":"http://localhost:8080/#","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132419603691365447","ChocolateyToolsLocation":"C:\\tools","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_9816_GSNZCMHDIKCAYWYW","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"DESKTOP-UPSASPU","COMSPEC":"C:\\WINDOWS\\system32\\cmd.exe","DB_PASS":"george_12","DB_USER":"george_12","dp0":"C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin\\","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EMAIL_BASE_URL":"http://localhost:3000/#","EXEPATH":"C:\\Program Files\\Git\\bin","FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING":"Default","GIT_ASKPASS":"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\GEORGE","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\GEORGE","HOST":"smtp.gmail.com","INIT_CWD":"C:\\Users\\GEORGE\\Desktop\\form_backend\\client","LANG":"en_US.UTF-8","LOCALAPPDATA":"C:\\Users\\GEORGE\\AppData\\Local","LOGONSERVER":"\\\\DESKTOP-UPSASPU","MONGO_URL":"mongodb://localhost/formInMongoApp","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","npm_config_access":"","npm_config_allow_same_version":"","npm_config_also":"","npm_config_always_auth":"","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"run\",\"build\"]}","npm_config_audit":"true","npm_config_audit_level":"low","npm_config_auth_type":"legacy","npm_config_before":"","npm_config_bin_links":"true","npm_config_browser":"","npm_config_ca":"","npm_config_cache":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm-cache","npm_config_cache_lock_retries":"10","npm_config_cache_lock_stale":"60000","npm_config_cache_lock_wait":"10000","npm_config_cache_max":"Infinity","npm_config_cache_min":"10","npm_config_cafile":"","npm_config_cert":"","npm_config_cidr":"","npm_config_color":"true","npm_config_commit_hooks":"true","npm_config_depth":"Infinity","npm_config_description":"true","npm_config_dev":"","npm_config_dry_run":"","npm_config_editor":"notepad.exe","npm_config_engine_strict":"","npm_config_fetch_retries":"2","npm_config_fetch_retry_factor":"10","npm_config_fetch_retry_maxtimeout":"60000","npm_config_fetch_retry_mintimeout":"10000","npm_config_force":"","npm_config_format_package_lock":"true","npm_config_fund":"true","npm_config_git":"git","npm_config_git_tag_version":"true","npm_config_global":"","npm_config_globalconfig":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_globalignorefile":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmignore","npm_config_global_style":"","npm_config_group":"","npm_config_ham_it_up":"","npm_config_heading":"npm","npm_config_https_proxy":"","npm_config_if_present":"","npm_config_ignore_prepublish":"","npm_config_ignore_scripts":"","npm_config_init_author_email":"","npm_config_init_author_name":"","npm_config_init_author_url":"","npm_config_init_license":"ISC","npm_config_init_module":"C:\\Users\\GEORGE\\.npm-init.js","npm_config_init_version":"1.0.0","npm_config_json":"","npm_config_key":"","npm_config_legacy_bundling":"","npm_config_link":"","npm_config_local_address":"","npm_config_loglevel":"notice","npm_config_logs_max":"10","npm_config_long":"","npm_config_maxsockets":"50","npm_config_message":"%s","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_node_gyp":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_node_options":"","npm_config_node_version":"12.14.1","npm_config_noproxy":"","npm_config_offline":"","npm_config_onload_script":"","npm_config_only":"","npm_config_optional":"true","npm_config_otp":"","npm_config_package_lock":"true","npm_config_package_lock_only":"","npm_config_parseable":"","npm_config_prefer_offline":"","npm_config_prefer_online":"","npm_config_prefix":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm","npm_config_preid":"","npm_config_production":"","npm_config_progress":"true","npm_config_proxy":"","npm_config_read_only":"","npm_config_rebuild_bundle":"true","npm_config_registry":"https://registry.npmjs.org/","npm_config_rollback":"true","npm_config_save":"true","npm_config_save_bundle":"","npm_config_save_dev":"","npm_config_save_exact":"","npm_config_save_optional":"","npm_config_save_prefix":"^","npm_config_save_prod":"","npm_config_scope":"","npm_config_scripts_prepend_node_path":"warn-only","npm_config_script_shell":"","npm_config_searchexclude":"","npm_config_searchlimit":"20","npm_config_searchopts":"","npm_config_searchstaleness":"900","npm_config_send_metrics":"","npm_config_shell":"C:\\WINDOWS\\system32\\cmd.exe","npm_config_shrinkwrap":"true","npm_config_sign_git_commit":"","npm_config_sign_git_tag":"","npm_config_sso_poll_frequency":"500","npm_config_sso_type":"oauth","npm_config_strict_ssl":"true","npm_config_tag":"latest","npm_config_tag_version_prefix":"v","npm_config_timing":"","npm_config_tmp":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","npm_config_umask":"0000","npm_config_unicode":"","npm_config_unsafe_perm":"true","npm_config_update_notifier":"true","npm_config_usage":"","npm_config_user":"","npm_config_userconfig":"C:\\Users\\GEORGE\\.npmrc","npm_config_user_agent":"npm/6.13.4 node/v12.14.1 win32 x64","npm_config_version":"","npm_config_versions":"","npm_config_viewer":"browser","npm_execpath":"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"build","npm_lifecycle_script":"webpack --mode production","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_name":"Itua George Osagie","npm_package_bugs_url":"https://github.com/ituageorge/form_frontend/issues","npm_package_dependencies_axios":"^0.21.4","npm_package_dependencies_babel_polyfill":"^6.26.0","npm_package_dependencies_bootstrap":"^4.6.0","npm_package_dependencies_buffer":"^6.0.3","npm_package_dependencies_dotenv":"^10.0.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_moment":"^2.29.1","npm_package_dependencies_os_browserify":"^0.3.0","npm_package_dependencies_path_browserify":"^1.0.1","npm_package_dependencies_process":"^0.11.10","npm_package_dependencies_prop_types":"^15.7.2","npm_package_dependencies_react":"^16.14.0","npm_package_dependencies_react_dom":"^16.14.0","npm_package_dependencies_react_images_upload":"^1.2.8","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_regenerator_runtime":"^0.13.9","npm_package_dependencies_terser":"3.14.1","npm_package_dependencies_util":"^0.12.3","npm_package_dependencies_uuidv4":"^6.2.6","npm_package_description":"","npm_package_devDependencies_3":"^2.1.0","npm_package_devDependencies_aspect_ratio":"^2.1.1","npm_package_devDependencies_autoprefixer":"^10.4.0","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_css_loader":"^5.1.2","npm_package_devDependencies_html_webpack_plugin":"^5.3.1","npm_package_devDependencies_jquery":"^1.9.1","npm_package_devDependencies_line_clamp":"^1.0.0","npm_package_devDependencies_mini_css_extract_plugin":"^2.4.5","npm_package_devDependencies_popper_js":"^1.16.1","npm_package_devDependencies_postcss":"^8.4.5","npm_package_devDependencies_postcss_loader":"^6.2.1","npm_package_devDependencies_postcss_preset_env":"^7.0.1","npm_package_devDependencies_sass":"^1.32.8","npm_package_devDependencies_sass_loader":"^11.0.1","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_tailwindcss":"^3.0.1","npm_package_devDependencies_terser_webpack_plugin":"^5.3.0","npm_package_devDependencies_webpack":"^5.65.0","npm_package_devDependencies_webpack_cli":"^4.9.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__":"0.0.1","npm_package_devDependencies__babel_core":"^7.13.10","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.13.10","npm_package_devDependencies__babel_preset_env":"^7.13.10","npm_package_devDependencies__babel_preset_react":"^7.12.13","npm_package_devDependencies__tailwindcss_forms":"^0.4.0","npm_package_devDependencies__tailwindcss_typography":"^0.5.0","npm_package_homepage":"https://github.com/ituageorge/form_frontend#readme","npm_package_license":"ISC","npm_package_main":"index.js","npm_package_name":"form_frontend","npm_package_proxy":"http://localhost:4000","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"git+https://github.com/ituageorge/form_frontend.git","npm_package_scripts_build":"webpack --mode production","npm_package_scripts_dev":"webpack --mode development","npm_package_scripts_start":"webpack serve --open Chrome","npm_package_version":"1.0.0","NUMBER_OF_PROCESSORS":"4","OLDPWD":"C:/Users/GEORGE/Desktop/form_backend","OneDrive":"C:\\Users\\GEORGE\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PASS":"commana16_google","PATH":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin","Path":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC","PLINK_PROTOCOL":"ssh","PORT":"3000","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 61 Stepping 4, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"3d04","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PWD":"C:/Users/GEORGE/Desktop/form_backend/client","SECRET":"vhghfhgfhfgh8585hjfh4rhfhburhdbdudecf7rbshjb","SECRET_FOR_REFRESHTOKEN":"64ghfufy7rggfyfgfhfhfgfgfdgdffffdgfhhfhgjkgjgjgjj","SERVER_BASE_URL":"http://localhost:3000/users","SERVICE":"gmail","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\WINDOWS","TEMP":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","TERM":"cygwin","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.63.2","TMP":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","TOKEN_SECRET":"hgfhfbgdvdjdkdfhdvskfhgkd75759674hjf74rfufbdjm75","USER":"ituaosagie100@gmail.com","USERDOMAIN":"DESKTOP-UPSASPU","USERDOMAIN_ROAMINGPROFILE":"DESKTOP-UPSASPU","USERNAME":"GEORGE","USERPROFILE":"C:\\Users\\GEORGE","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-abe99bdde0-sock","WINDIR":"C:\\WINDOWS","_":"C:/Program Files/nodejs/node.exe","_prog":"node"}.SERVER_BASE_URL, "/forgot_password/").concat(email)).then(function (response) {
      console.log('response111111', response.data);

      if (response) {
        message = response.data.message;
        console.log('message', message);
      }

      return message;
    }, function (error) {
      if (error.response) {
        // client received an error response (5xx, 4xx)
        console.log('errorRes', error.response);
      } else if (error.request) {
        // client never received a response, or request never left
        console.log('errorReq', error.request);
      } else {
        // anything else
        console.log('eeeror', error);
      }
    })["catch"](function (err) {
      return console.warn("ERROR FROM SERVER RECOVER PASSWORD:", err);
    });
    setSubmitted(true);
    setEmail("");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "h-screen w-full flex flex-col items-center justify-center subpixel-antialiased text-2xl bg-gradient-to-r from-purple-500 to-pink-500 font-mono"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "my-3 text-4xl"
  }, "Reset your password"), submitted ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-left my-2 flex flex-col my-auto items-center justify-center max-w-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "If that account is in our system, we emailed you a link to reset your password."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .Link */ .rU, {
    to: "/login",
    className: ""
  }, "Return to sign in")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-left my-2 flex flex-col my-auto items-center justify-center bg-green-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "my-2 text-2xl"
  }, "It happens to the best of us. Enter your email and we'll send you reset instructions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    name: "form",
    className: "pb-4 flex flex-col items-center justify-center  + (submitted && !email ? ' bg-red-100' : '')",
    onSubmit: sendPasswordResetEmail
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-left -my-3",
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "email",
    className: "max-w-md form-input border-0 border-b-8 p-3 my-3 focus:border-none border-purple-500 " // ref={emailEl}
    ,
    value: email,
    name: "email",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    placeholder: "Email address"
  }), submitted && !email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-red-600"
  }, "Email is required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "bg-gradient-to-r from-purple-500 to-pink-500 font-bold my-5 tracking-widest text-white w-full block"
  }, "Send password reset link to email")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .Link */ .rU, {
    to: "/login"
  }, "I remember my password")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecoverPassword);

/***/ }),

/***/ 5938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".recoverpasswordstyles,\r\n.updatepasswordstyles {\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: rgb(37, 7, 7);\r\n}\r\n\r\nform {\r\n  width: 300px;\r\n}\r\n\r\np,\r\ninput {\r\n  margin-bottom: 0.625rem;\r\n  font-size: 1.125rem;\r\n}\r\n\r\ninput,\r\nbutton {\r\n  width: 100%;\r\n}\r\n\r\np {\r\n  font-size: 1.125rem;\r\n}\r\n\r\na {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.reset-password-form-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  max-width: 430px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.reset-password-form-sent-wrapper {\r\n  max-width: 360px;\r\n  text-align: center;\r\n}\r\n\r\n.reset-password-form-sent-wrapper > p {\r\n    text-align: left;\r\n    margin-top: 1rem;\r\n    margin-bottom: 0.75rem;\r\n  }\r\n\r\n.password-reset-btn {\r\n  padding: 0.625rem 1.25rem;\r\n  font-size: 1.125rem;\r\n}\r\n\r\n.ghostInput {\r\n  /* padding: 0.5rem 1rem 0.43rem; */\r\n  padding: 1rem;\r\n  border-radius: 0.375rem;\r\n  border:1px solid greenyellow;\r\n  /* font-size: 1rem; */\r\n}\r\n\r\n.btn-primary {\r\ncolor: white;\r\nborder-radius: 5px;\r\nmargin-top: 8px;\r\npadding: 6px 12px;\r\nfont-weight: 500;\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5948:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_recoverPassword_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5938);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_recoverPassword_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_recoverPassword_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"].locals */ .Z.locals || {});

/***/ })

}]);