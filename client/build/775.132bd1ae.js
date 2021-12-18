"use strict";
(self["webpackChunkform_frontend"] = self["webpackChunkform_frontend"] || []).push([[775],{

/***/ 6775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ hometail)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 3 modules
var react_router = __webpack_require__(2487);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/uuidv4/build/lib/uuidv4.js
var uuidv4 = __webpack_require__(6281);
;// CONCATENATED MODULE: ./src/component/question/questions.js
 //creating an array and passing the number, questions, options, and answers

var questions = [{
  questionText: 'Who is the President of France?',
  answerOptions: [{
    answerText: 'Mohammadu Buhari',
    isCorrect: false
  }, {
    answerText: 'Donald Trump',
    isCorrect: false
  }, {
    answerText: 'Emmanuel Macron',
    isCorrect: true
  }, {
    answerText: 'Joe Biden',
    isCorrect: false
  }]
}, {
  questionText: 'What is the capital of turkey?',
  answerOptions: [{
    answerText: 'New Delhi',
    isCorrect: false
  }, {
    answerText: 'Ankara',
    isCorrect: true
  }, {
    answerText: 'Abuja',
    isCorrect: false
  }, {
    answerText: 'Aba',
    isCorrect: false
  }]
}, {
  questionText: 'What’s the chemical symbol for silver?',
  answerOptions: [{
    answerText: 'Ag',
    isCorrect: true
  }, {
    answerText: 'Na',
    isCorrect: false
  }, {
    answerText: 'Hg',
    isCorrect: false
  }, {
    answerText: 'Mg',
    isCorrect: false
  }]
}, {
  questionText: 'What is the capital city of Switzerland?',
  answerOptions: [{
    answerText: 'Kigali',
    isCorrect: false
  }, {
    answerText: 'NewYork City',
    isCorrect: false
  }, {
    answerText: 'Benin City',
    isCorrect: false
  }, {
    answerText: 'Bern',
    isCorrect: true
  }]
}, {
  questionText: 'What is the largest Continent in the planet?',
  answerOptions: [{
    answerText: 'Africa',
    isCorrect: false
  }, {
    answerText: 'Asia',
    isCorrect: true
  }, {
    answerText: 'North America',
    isCorrect: false
  }, {
    answerText: 'South America',
    isCorrect: false
  }]
}];
;// CONCATENATED MODULE: ./src/component/question/index.js
// export * from "./questionComponent"

;// CONCATENATED MODULE: ./src/component/question/questionComponent.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // import { uuid } from uuid4

 // import './styles.css';

var QuestionApp = function QuestionApp() {
  var _useState = (0,react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentQuestion = _useState2[0],
      setCurrentQuestion = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showScore = _useState4[0],
      setShowScore = _useState4[1];

  var _useState5 = (0,react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      score = _useState6[0],
      setScore = _useState6[1];

  var handleAnswerOptionClick = function handleAnswerOptionClick(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }

    var nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "w-full h-3/5 rounded-lg p-2 flex leading-loose"
  }, showScore ? /*#__PURE__*/react.createElement("div", {
    className: "items-center flex text-base"
  }, "You scored ", score, " out of ", questions.length) : /*#__PURE__*/react.createElement("div", {
    className: "flex flex-col lg:flex-row w-full"
  }, /*#__PURE__*/react.createElement("div", {
    className: "flex text-4xl italic w-full text-white"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mb-6 m-4"
  }, /*#__PURE__*/react.createElement("span", null, "Question ", currentQuestion + 1), "/", questions.length), /*#__PURE__*/react.createElement("div", {
    className: " w-full text-black p-4"
  }, questions[currentQuestion].questionText)), /*#__PURE__*/react.createElement("div", {
    className: "w-full flex flex-col justify-between"
  }, questions[currentQuestion].answerOptions.map(function (answerOption, index) {
    return /*#__PURE__*/react.createElement("button", {
      onClick: function onClick() {
        return handleAnswerOptionClick(answerOption.isCorrect);
      },
      key: index,
      className: "bg-gradient-to-r from-blue-500 to-blue-300 font-bold my-3 py-3 tracking-widest text-white text-left"
    }, answerOption.answerText);
  }))));
};

/* harmony default export */ const questionComponent = (QuestionApp);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/component/home/index.css
var home = __webpack_require__(5789);
;// CONCATENATED MODULE: ./src/component/home/index.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(home/* default */.Z, options);



/* harmony default export */ const component_home = (home/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/home/hometail.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function hometail_slicedToArray(arr, i) { return hometail_arrayWithHoles(arr) || hometail_iterableToArrayLimit(arr, i) || hometail_unsupportedIterableToArray(arr, i) || hometail_nonIterableRest(); }

function hometail_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function hometail_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return hometail_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return hometail_arrayLikeToArray(o, minLen); }

function hometail_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function hometail_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function hometail_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import React from 'react';
// import './App.css';




 // const {UserManagement} = React.lazy(() => import('./'));

 // const baseUrl = 'http://localhost:3000/users';
// request interceptor to add the auth token header to requests

axios_default().interceptors.request.use(function (config) {
  var accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    config.headers['x-auth-token'] = accessToken;
  }

  return config;
}, function (error) {
  Promise.reject(error);
}); //response interceptor to refresh token on receiving token expired error

axios_default().interceptors.response.use(function (response) {
  return response;
}, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(error) {
    var originalRequest, refreshToken, res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            originalRequest = error.config;
            refreshToken = localStorage.getItem('refreshToken');

            if (!(refreshToken && error.response.status === 401 && !originalRequest._retry)) {
              _context.next = 11;
              break;
            }

            originalRequest._retry = true;
            _context.next = 6;
            return axios_default().post("".concat({"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\GEORGE\\AppData\\Roaming","BASE_URL":"http://localhost:8080/#","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132419603691365447","ChocolateyToolsLocation":"C:\\tools","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_9816_GSNZCMHDIKCAYWYW","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"DESKTOP-UPSASPU","COMSPEC":"C:\\WINDOWS\\system32\\cmd.exe","DB_PASS":"george_12","DB_USER":"george_12","dp0":"C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin\\","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EMAIL_BASE_URL":"http://localhost:3000/#","EXEPATH":"C:\\Program Files\\Git\\bin","FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING":"Default","GIT_ASKPASS":"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\GEORGE","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\GEORGE","HOST":"smtp.gmail.com","INIT_CWD":"C:\\Users\\GEORGE\\Desktop\\form_backend\\client","LANG":"en_US.UTF-8","LOCALAPPDATA":"C:\\Users\\GEORGE\\AppData\\Local","LOGONSERVER":"\\\\DESKTOP-UPSASPU","MONGO_URL":"mongodb://localhost/formInMongoApp","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","npm_config_access":"","npm_config_allow_same_version":"","npm_config_also":"","npm_config_always_auth":"","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"run\",\"build\"]}","npm_config_audit":"true","npm_config_audit_level":"low","npm_config_auth_type":"legacy","npm_config_before":"","npm_config_bin_links":"true","npm_config_browser":"","npm_config_ca":"","npm_config_cache":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm-cache","npm_config_cache_lock_retries":"10","npm_config_cache_lock_stale":"60000","npm_config_cache_lock_wait":"10000","npm_config_cache_max":"Infinity","npm_config_cache_min":"10","npm_config_cafile":"","npm_config_cert":"","npm_config_cidr":"","npm_config_color":"true","npm_config_commit_hooks":"true","npm_config_depth":"Infinity","npm_config_description":"true","npm_config_dev":"","npm_config_dry_run":"","npm_config_editor":"notepad.exe","npm_config_engine_strict":"","npm_config_fetch_retries":"2","npm_config_fetch_retry_factor":"10","npm_config_fetch_retry_maxtimeout":"60000","npm_config_fetch_retry_mintimeout":"10000","npm_config_force":"","npm_config_format_package_lock":"true","npm_config_fund":"true","npm_config_git":"git","npm_config_git_tag_version":"true","npm_config_global":"","npm_config_globalconfig":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_globalignorefile":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmignore","npm_config_global_style":"","npm_config_group":"","npm_config_ham_it_up":"","npm_config_heading":"npm","npm_config_https_proxy":"","npm_config_if_present":"","npm_config_ignore_prepublish":"","npm_config_ignore_scripts":"","npm_config_init_author_email":"","npm_config_init_author_name":"","npm_config_init_author_url":"","npm_config_init_license":"ISC","npm_config_init_module":"C:\\Users\\GEORGE\\.npm-init.js","npm_config_init_version":"1.0.0","npm_config_json":"","npm_config_key":"","npm_config_legacy_bundling":"","npm_config_link":"","npm_config_local_address":"","npm_config_loglevel":"notice","npm_config_logs_max":"10","npm_config_long":"","npm_config_maxsockets":"50","npm_config_message":"%s","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_node_gyp":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_node_options":"","npm_config_node_version":"12.14.1","npm_config_noproxy":"","npm_config_offline":"","npm_config_onload_script":"","npm_config_only":"","npm_config_optional":"true","npm_config_otp":"","npm_config_package_lock":"true","npm_config_package_lock_only":"","npm_config_parseable":"","npm_config_prefer_offline":"","npm_config_prefer_online":"","npm_config_prefix":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm","npm_config_preid":"","npm_config_production":"","npm_config_progress":"true","npm_config_proxy":"","npm_config_read_only":"","npm_config_rebuild_bundle":"true","npm_config_registry":"https://registry.npmjs.org/","npm_config_rollback":"true","npm_config_save":"true","npm_config_save_bundle":"","npm_config_save_dev":"","npm_config_save_exact":"","npm_config_save_optional":"","npm_config_save_prefix":"^","npm_config_save_prod":"","npm_config_scope":"","npm_config_scripts_prepend_node_path":"warn-only","npm_config_script_shell":"","npm_config_searchexclude":"","npm_config_searchlimit":"20","npm_config_searchopts":"","npm_config_searchstaleness":"900","npm_config_send_metrics":"","npm_config_shell":"C:\\WINDOWS\\system32\\cmd.exe","npm_config_shrinkwrap":"true","npm_config_sign_git_commit":"","npm_config_sign_git_tag":"","npm_config_sso_poll_frequency":"500","npm_config_sso_type":"oauth","npm_config_strict_ssl":"true","npm_config_tag":"latest","npm_config_tag_version_prefix":"v","npm_config_timing":"","npm_config_tmp":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","npm_config_umask":"0000","npm_config_unicode":"","npm_config_unsafe_perm":"true","npm_config_update_notifier":"true","npm_config_usage":"","npm_config_user":"","npm_config_userconfig":"C:\\Users\\GEORGE\\.npmrc","npm_config_user_agent":"npm/6.13.4 node/v12.14.1 win32 x64","npm_config_version":"","npm_config_versions":"","npm_config_viewer":"browser","npm_execpath":"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"build","npm_lifecycle_script":"webpack --mode production","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_name":"Itua George Osagie","npm_package_bugs_url":"https://github.com/ituageorge/form_frontend/issues","npm_package_dependencies_axios":"^0.21.4","npm_package_dependencies_babel_polyfill":"^6.26.0","npm_package_dependencies_bootstrap":"^4.6.0","npm_package_dependencies_buffer":"^6.0.3","npm_package_dependencies_dotenv":"^10.0.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_moment":"^2.29.1","npm_package_dependencies_os_browserify":"^0.3.0","npm_package_dependencies_path_browserify":"^1.0.1","npm_package_dependencies_process":"^0.11.10","npm_package_dependencies_prop_types":"^15.7.2","npm_package_dependencies_react":"^16.14.0","npm_package_dependencies_react_dom":"^16.14.0","npm_package_dependencies_react_images_upload":"^1.2.8","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_regenerator_runtime":"^0.13.9","npm_package_dependencies_terser":"3.14.1","npm_package_dependencies_util":"^0.12.3","npm_package_dependencies_uuidv4":"^6.2.6","npm_package_description":"","npm_package_devDependencies_3":"^2.1.0","npm_package_devDependencies_aspect_ratio":"^2.1.1","npm_package_devDependencies_autoprefixer":"^10.4.0","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_css_loader":"^5.1.2","npm_package_devDependencies_html_webpack_plugin":"^5.3.1","npm_package_devDependencies_jquery":"^1.9.1","npm_package_devDependencies_line_clamp":"^1.0.0","npm_package_devDependencies_mini_css_extract_plugin":"^2.4.5","npm_package_devDependencies_popper_js":"^1.16.1","npm_package_devDependencies_postcss":"^8.4.5","npm_package_devDependencies_postcss_loader":"^6.2.1","npm_package_devDependencies_postcss_preset_env":"^7.0.1","npm_package_devDependencies_sass":"^1.32.8","npm_package_devDependencies_sass_loader":"^11.0.1","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_tailwindcss":"^3.0.1","npm_package_devDependencies_terser_webpack_plugin":"^5.3.0","npm_package_devDependencies_webpack":"^5.65.0","npm_package_devDependencies_webpack_cli":"^4.9.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__":"0.0.1","npm_package_devDependencies__babel_core":"^7.13.10","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.13.10","npm_package_devDependencies__babel_preset_env":"^7.13.10","npm_package_devDependencies__babel_preset_react":"^7.12.13","npm_package_devDependencies__tailwindcss_forms":"^0.4.0","npm_package_devDependencies__tailwindcss_typography":"^0.5.0","npm_package_homepage":"https://github.com/ituageorge/form_frontend#readme","npm_package_license":"ISC","npm_package_main":"index.js","npm_package_name":"form_frontend","npm_package_proxy":"http://localhost:4000","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"git+https://github.com/ituageorge/form_frontend.git","npm_package_scripts_build":"webpack --mode production","npm_package_scripts_dev":"webpack --mode development","npm_package_scripts_start":"webpack serve --open Chrome","npm_package_version":"1.0.0","NUMBER_OF_PROCESSORS":"4","OLDPWD":"C:/Users/GEORGE/Desktop/form_backend","OneDrive":"C:\\Users\\GEORGE\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PASS":"commana16_google","PATH":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin","Path":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC","PLINK_PROTOCOL":"ssh","PORT":"3000","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 61 Stepping 4, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"3d04","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PWD":"C:/Users/GEORGE/Desktop/form_backend/client","SECRET":"vhghfhgfhfgh8585hjfh4rhfhburhdbdudecf7rbshjb","SECRET_FOR_REFRESHTOKEN":"64ghfufy7rggfyfgfhfhfgfgfdgdffffdgfhhfhgjkgjgjgjj","SERVER_BASE_URL":"http://localhost:3000/users","SERVICE":"gmail","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\WINDOWS","TEMP":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","TERM":"cygwin","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.63.2","TMP":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","TOKEN_SECRET":"hgfhfbgdvdjdkdfhdvskfhgkd75759674hjf74rfufbdjm75","USER":"ituaosagie100@gmail.com","USERDOMAIN":"DESKTOP-UPSASPU","USERDOMAIN_ROAMINGPROFILE":"DESKTOP-UPSASPU","USERNAME":"GEORGE","USERPROFILE":"C:\\Users\\GEORGE","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-abe99bdde0-sock","WINDIR":"C:\\WINDOWS","_":"C:/Program Files/nodejs/node.exe","_prog":"node"}.SERVER_BASE_URL, "/refresh_token"), {
              refreshToken: refreshToken
            });

          case 6:
            res = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 11;
              break;
            }

            localStorage.setItem('accessToken', res.data.accessToken);
            console.log('Access token refreshed!');
            return _context.abrupt("return", axios_default()(originalRequest));

          case 11:
            return _context.abrupt("return", Promise.reject(error));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

var HomePage = function HomePage(findLoginUser) {
  var history = (0,react_router/* useHistory */.k6)();
  var location = (0,react_router/* useLocation */.TH)();

  var _useState = (0,react.useState)({
    display: 'hide',
    user: null,
    authUser: null,
    profileUserImg: null
  }),
      _useState2 = hometail_slicedToArray(_useState, 2),
      appState = _useState2[0],
      setAppState = _useState2[1];

  var getProtected = function getProtected() {
    return axios_default().get("".concat({"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\GEORGE\\AppData\\Roaming","BASE_URL":"http://localhost:8080/#","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132419603691365447","ChocolateyToolsLocation":"C:\\tools","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_9816_GSNZCMHDIKCAYWYW","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"DESKTOP-UPSASPU","COMSPEC":"C:\\WINDOWS\\system32\\cmd.exe","DB_PASS":"george_12","DB_USER":"george_12","dp0":"C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin\\","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EMAIL_BASE_URL":"http://localhost:3000/#","EXEPATH":"C:\\Program Files\\Git\\bin","FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING":"Default","GIT_ASKPASS":"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\GEORGE","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\GEORGE","HOST":"smtp.gmail.com","INIT_CWD":"C:\\Users\\GEORGE\\Desktop\\form_backend\\client","LANG":"en_US.UTF-8","LOCALAPPDATA":"C:\\Users\\GEORGE\\AppData\\Local","LOGONSERVER":"\\\\DESKTOP-UPSASPU","MONGO_URL":"mongodb://localhost/formInMongoApp","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","npm_config_access":"","npm_config_allow_same_version":"","npm_config_also":"","npm_config_always_auth":"","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"run\",\"build\"]}","npm_config_audit":"true","npm_config_audit_level":"low","npm_config_auth_type":"legacy","npm_config_before":"","npm_config_bin_links":"true","npm_config_browser":"","npm_config_ca":"","npm_config_cache":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm-cache","npm_config_cache_lock_retries":"10","npm_config_cache_lock_stale":"60000","npm_config_cache_lock_wait":"10000","npm_config_cache_max":"Infinity","npm_config_cache_min":"10","npm_config_cafile":"","npm_config_cert":"","npm_config_cidr":"","npm_config_color":"true","npm_config_commit_hooks":"true","npm_config_depth":"Infinity","npm_config_description":"true","npm_config_dev":"","npm_config_dry_run":"","npm_config_editor":"notepad.exe","npm_config_engine_strict":"","npm_config_fetch_retries":"2","npm_config_fetch_retry_factor":"10","npm_config_fetch_retry_maxtimeout":"60000","npm_config_fetch_retry_mintimeout":"10000","npm_config_force":"","npm_config_format_package_lock":"true","npm_config_fund":"true","npm_config_git":"git","npm_config_git_tag_version":"true","npm_config_global":"","npm_config_globalconfig":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_globalignorefile":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmignore","npm_config_global_style":"","npm_config_group":"","npm_config_ham_it_up":"","npm_config_heading":"npm","npm_config_https_proxy":"","npm_config_if_present":"","npm_config_ignore_prepublish":"","npm_config_ignore_scripts":"","npm_config_init_author_email":"","npm_config_init_author_name":"","npm_config_init_author_url":"","npm_config_init_license":"ISC","npm_config_init_module":"C:\\Users\\GEORGE\\.npm-init.js","npm_config_init_version":"1.0.0","npm_config_json":"","npm_config_key":"","npm_config_legacy_bundling":"","npm_config_link":"","npm_config_local_address":"","npm_config_loglevel":"notice","npm_config_logs_max":"10","npm_config_long":"","npm_config_maxsockets":"50","npm_config_message":"%s","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_node_gyp":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_node_options":"","npm_config_node_version":"12.14.1","npm_config_noproxy":"","npm_config_offline":"","npm_config_onload_script":"","npm_config_only":"","npm_config_optional":"true","npm_config_otp":"","npm_config_package_lock":"true","npm_config_package_lock_only":"","npm_config_parseable":"","npm_config_prefer_offline":"","npm_config_prefer_online":"","npm_config_prefix":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm","npm_config_preid":"","npm_config_production":"","npm_config_progress":"true","npm_config_proxy":"","npm_config_read_only":"","npm_config_rebuild_bundle":"true","npm_config_registry":"https://registry.npmjs.org/","npm_config_rollback":"true","npm_config_save":"true","npm_config_save_bundle":"","npm_config_save_dev":"","npm_config_save_exact":"","npm_config_save_optional":"","npm_config_save_prefix":"^","npm_config_save_prod":"","npm_config_scope":"","npm_config_scripts_prepend_node_path":"warn-only","npm_config_script_shell":"","npm_config_searchexclude":"","npm_config_searchlimit":"20","npm_config_searchopts":"","npm_config_searchstaleness":"900","npm_config_send_metrics":"","npm_config_shell":"C:\\WINDOWS\\system32\\cmd.exe","npm_config_shrinkwrap":"true","npm_config_sign_git_commit":"","npm_config_sign_git_tag":"","npm_config_sso_poll_frequency":"500","npm_config_sso_type":"oauth","npm_config_strict_ssl":"true","npm_config_tag":"latest","npm_config_tag_version_prefix":"v","npm_config_timing":"","npm_config_tmp":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","npm_config_umask":"0000","npm_config_unicode":"","npm_config_unsafe_perm":"true","npm_config_update_notifier":"true","npm_config_usage":"","npm_config_user":"","npm_config_userconfig":"C:\\Users\\GEORGE\\.npmrc","npm_config_user_agent":"npm/6.13.4 node/v12.14.1 win32 x64","npm_config_version":"","npm_config_versions":"","npm_config_viewer":"browser","npm_execpath":"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"build","npm_lifecycle_script":"webpack --mode production","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_name":"Itua George Osagie","npm_package_bugs_url":"https://github.com/ituageorge/form_frontend/issues","npm_package_dependencies_axios":"^0.21.4","npm_package_dependencies_babel_polyfill":"^6.26.0","npm_package_dependencies_bootstrap":"^4.6.0","npm_package_dependencies_buffer":"^6.0.3","npm_package_dependencies_dotenv":"^10.0.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_moment":"^2.29.1","npm_package_dependencies_os_browserify":"^0.3.0","npm_package_dependencies_path_browserify":"^1.0.1","npm_package_dependencies_process":"^0.11.10","npm_package_dependencies_prop_types":"^15.7.2","npm_package_dependencies_react":"^16.14.0","npm_package_dependencies_react_dom":"^16.14.0","npm_package_dependencies_react_images_upload":"^1.2.8","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_regenerator_runtime":"^0.13.9","npm_package_dependencies_terser":"3.14.1","npm_package_dependencies_util":"^0.12.3","npm_package_dependencies_uuidv4":"^6.2.6","npm_package_description":"","npm_package_devDependencies_3":"^2.1.0","npm_package_devDependencies_aspect_ratio":"^2.1.1","npm_package_devDependencies_autoprefixer":"^10.4.0","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_css_loader":"^5.1.2","npm_package_devDependencies_html_webpack_plugin":"^5.3.1","npm_package_devDependencies_jquery":"^1.9.1","npm_package_devDependencies_line_clamp":"^1.0.0","npm_package_devDependencies_mini_css_extract_plugin":"^2.4.5","npm_package_devDependencies_popper_js":"^1.16.1","npm_package_devDependencies_postcss":"^8.4.5","npm_package_devDependencies_postcss_loader":"^6.2.1","npm_package_devDependencies_postcss_preset_env":"^7.0.1","npm_package_devDependencies_sass":"^1.32.8","npm_package_devDependencies_sass_loader":"^11.0.1","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_tailwindcss":"^3.0.1","npm_package_devDependencies_terser_webpack_plugin":"^5.3.0","npm_package_devDependencies_webpack":"^5.65.0","npm_package_devDependencies_webpack_cli":"^4.9.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__":"0.0.1","npm_package_devDependencies__babel_core":"^7.13.10","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.13.10","npm_package_devDependencies__babel_preset_env":"^7.13.10","npm_package_devDependencies__babel_preset_react":"^7.12.13","npm_package_devDependencies__tailwindcss_forms":"^0.4.0","npm_package_devDependencies__tailwindcss_typography":"^0.5.0","npm_package_homepage":"https://github.com/ituageorge/form_frontend#readme","npm_package_license":"ISC","npm_package_main":"index.js","npm_package_name":"form_frontend","npm_package_proxy":"http://localhost:4000","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"git+https://github.com/ituageorge/form_frontend.git","npm_package_scripts_build":"webpack --mode production","npm_package_scripts_dev":"webpack --mode development","npm_package_scripts_start":"webpack serve --open Chrome","npm_package_version":"1.0.0","NUMBER_OF_PROCESSORS":"4","OLDPWD":"C:/Users/GEORGE/Desktop/form_backend","OneDrive":"C:\\Users\\GEORGE\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PASS":"commana16_google","PATH":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin","Path":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC","PLINK_PROTOCOL":"ssh","PORT":"3000","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 61 Stepping 4, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"3d04","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PWD":"C:/Users/GEORGE/Desktop/form_backend/client","SECRET":"vhghfhgfhfgh8585hjfh4rhfhburhdbdudecf7rbshjb","SECRET_FOR_REFRESHTOKEN":"64ghfufy7rggfyfgfhfhfgfgfdgdffffdgfhhfhgjkgjgjgjj","SERVER_BASE_URL":"http://localhost:3000/users","SERVICE":"gmail","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\WINDOWS","TEMP":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","TERM":"cygwin","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.63.2","TMP":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","TOKEN_SECRET":"hgfhfbgdvdjdkdfhdvskfhgkd75759674hjf74rfufbdjm75","USER":"ituaosagie100@gmail.com","USERDOMAIN":"DESKTOP-UPSASPU","USERDOMAIN_ROAMINGPROFILE":"DESKTOP-UPSASPU","USERNAME":"GEORGE","USERPROFILE":"C:\\Users\\GEORGE","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-abe99bdde0-sock","WINDIR":"C:\\WINDOWS","_":"C:/Program Files/nodejs/node.exe","_prog":"node"}.SERVER_BASE_URL, "/protected_user"));
  };

  (0,react.useEffect)(function () {
    _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var accessToken, res, img;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setAppState(_objectSpread(_objectSpread({}, appState), {}, {
                loading: true
              }));
              accessToken = localStorage.getItem('accessToken');

              if (!accessToken) {
                _context2.next = 19;
                break;
              }

              _context2.prev = 3;
              _context2.next = 6;
              return getProtected();

            case 6:
              res = _context2.sent;
              console.log('res.data', res.data);
              console.log('findLoginUser', findLoginUser);
              img = findLoginUser.location.findLoginUser.profileImg;
              console.log('img', img);
              setAppState(_objectSpread(_objectSpread({}, appState), {}, {
                display: 'show',
                // user: findLoginUser.firstName,
                user: res.data.user.username,
                authUser: findLoginUser.location.findLoginUser.username,
                // profileUserImg:authUserImg,
                profileUserImg: img // profileUserImg: base64String,

              }));
              _context2.next = 19;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](3);
              console.error(_context2.t0);
              alert(_context2.t0.response.data.error);
              setAppState(_objectSpread(_objectSpread({}, appState), {}, {
                loading: false
              }));

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 14]]);
    }))();
  }, []);

  var handleLogout = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var logout, refreshToken;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              logout = function logout(body) {
                return axios_default()["delete"]("".concat({"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\GEORGE\\AppData\\Roaming","BASE_URL":"http://localhost:8080/#","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132419603691365447","ChocolateyToolsLocation":"C:\\tools","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_9816_GSNZCMHDIKCAYWYW","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"DESKTOP-UPSASPU","COMSPEC":"C:\\WINDOWS\\system32\\cmd.exe","DB_PASS":"george_12","DB_USER":"george_12","dp0":"C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin\\","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EMAIL_BASE_URL":"http://localhost:3000/#","EXEPATH":"C:\\Program Files\\Git\\bin","FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING":"Default","GIT_ASKPASS":"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\GEORGE","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\GEORGE","HOST":"smtp.gmail.com","INIT_CWD":"C:\\Users\\GEORGE\\Desktop\\form_backend\\client","LANG":"en_US.UTF-8","LOCALAPPDATA":"C:\\Users\\GEORGE\\AppData\\Local","LOGONSERVER":"\\\\DESKTOP-UPSASPU","MONGO_URL":"mongodb://localhost/formInMongoApp","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","npm_config_access":"","npm_config_allow_same_version":"","npm_config_also":"","npm_config_always_auth":"","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"run\",\"build\"]}","npm_config_audit":"true","npm_config_audit_level":"low","npm_config_auth_type":"legacy","npm_config_before":"","npm_config_bin_links":"true","npm_config_browser":"","npm_config_ca":"","npm_config_cache":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm-cache","npm_config_cache_lock_retries":"10","npm_config_cache_lock_stale":"60000","npm_config_cache_lock_wait":"10000","npm_config_cache_max":"Infinity","npm_config_cache_min":"10","npm_config_cafile":"","npm_config_cert":"","npm_config_cidr":"","npm_config_color":"true","npm_config_commit_hooks":"true","npm_config_depth":"Infinity","npm_config_description":"true","npm_config_dev":"","npm_config_dry_run":"","npm_config_editor":"notepad.exe","npm_config_engine_strict":"","npm_config_fetch_retries":"2","npm_config_fetch_retry_factor":"10","npm_config_fetch_retry_maxtimeout":"60000","npm_config_fetch_retry_mintimeout":"10000","npm_config_force":"","npm_config_format_package_lock":"true","npm_config_fund":"true","npm_config_git":"git","npm_config_git_tag_version":"true","npm_config_global":"","npm_config_globalconfig":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_globalignorefile":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmignore","npm_config_global_style":"","npm_config_group":"","npm_config_ham_it_up":"","npm_config_heading":"npm","npm_config_https_proxy":"","npm_config_if_present":"","npm_config_ignore_prepublish":"","npm_config_ignore_scripts":"","npm_config_init_author_email":"","npm_config_init_author_name":"","npm_config_init_author_url":"","npm_config_init_license":"ISC","npm_config_init_module":"C:\\Users\\GEORGE\\.npm-init.js","npm_config_init_version":"1.0.0","npm_config_json":"","npm_config_key":"","npm_config_legacy_bundling":"","npm_config_link":"","npm_config_local_address":"","npm_config_loglevel":"notice","npm_config_logs_max":"10","npm_config_long":"","npm_config_maxsockets":"50","npm_config_message":"%s","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_node_gyp":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_node_options":"","npm_config_node_version":"12.14.1","npm_config_noproxy":"","npm_config_offline":"","npm_config_onload_script":"","npm_config_only":"","npm_config_optional":"true","npm_config_otp":"","npm_config_package_lock":"true","npm_config_package_lock_only":"","npm_config_parseable":"","npm_config_prefer_offline":"","npm_config_prefer_online":"","npm_config_prefix":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm","npm_config_preid":"","npm_config_production":"","npm_config_progress":"true","npm_config_proxy":"","npm_config_read_only":"","npm_config_rebuild_bundle":"true","npm_config_registry":"https://registry.npmjs.org/","npm_config_rollback":"true","npm_config_save":"true","npm_config_save_bundle":"","npm_config_save_dev":"","npm_config_save_exact":"","npm_config_save_optional":"","npm_config_save_prefix":"^","npm_config_save_prod":"","npm_config_scope":"","npm_config_scripts_prepend_node_path":"warn-only","npm_config_script_shell":"","npm_config_searchexclude":"","npm_config_searchlimit":"20","npm_config_searchopts":"","npm_config_searchstaleness":"900","npm_config_send_metrics":"","npm_config_shell":"C:\\WINDOWS\\system32\\cmd.exe","npm_config_shrinkwrap":"true","npm_config_sign_git_commit":"","npm_config_sign_git_tag":"","npm_config_sso_poll_frequency":"500","npm_config_sso_type":"oauth","npm_config_strict_ssl":"true","npm_config_tag":"latest","npm_config_tag_version_prefix":"v","npm_config_timing":"","npm_config_tmp":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","npm_config_umask":"0000","npm_config_unicode":"","npm_config_unsafe_perm":"true","npm_config_update_notifier":"true","npm_config_usage":"","npm_config_user":"","npm_config_userconfig":"C:\\Users\\GEORGE\\.npmrc","npm_config_user_agent":"npm/6.13.4 node/v12.14.1 win32 x64","npm_config_version":"","npm_config_versions":"","npm_config_viewer":"browser","npm_execpath":"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"build","npm_lifecycle_script":"webpack --mode production","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_name":"Itua George Osagie","npm_package_bugs_url":"https://github.com/ituageorge/form_frontend/issues","npm_package_dependencies_axios":"^0.21.4","npm_package_dependencies_babel_polyfill":"^6.26.0","npm_package_dependencies_bootstrap":"^4.6.0","npm_package_dependencies_buffer":"^6.0.3","npm_package_dependencies_dotenv":"^10.0.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_moment":"^2.29.1","npm_package_dependencies_os_browserify":"^0.3.0","npm_package_dependencies_path_browserify":"^1.0.1","npm_package_dependencies_process":"^0.11.10","npm_package_dependencies_prop_types":"^15.7.2","npm_package_dependencies_react":"^16.14.0","npm_package_dependencies_react_dom":"^16.14.0","npm_package_dependencies_react_images_upload":"^1.2.8","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_regenerator_runtime":"^0.13.9","npm_package_dependencies_terser":"3.14.1","npm_package_dependencies_util":"^0.12.3","npm_package_dependencies_uuidv4":"^6.2.6","npm_package_description":"","npm_package_devDependencies_3":"^2.1.0","npm_package_devDependencies_aspect_ratio":"^2.1.1","npm_package_devDependencies_autoprefixer":"^10.4.0","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_css_loader":"^5.1.2","npm_package_devDependencies_html_webpack_plugin":"^5.3.1","npm_package_devDependencies_jquery":"^1.9.1","npm_package_devDependencies_line_clamp":"^1.0.0","npm_package_devDependencies_mini_css_extract_plugin":"^2.4.5","npm_package_devDependencies_popper_js":"^1.16.1","npm_package_devDependencies_postcss":"^8.4.5","npm_package_devDependencies_postcss_loader":"^6.2.1","npm_package_devDependencies_postcss_preset_env":"^7.0.1","npm_package_devDependencies_sass":"^1.32.8","npm_package_devDependencies_sass_loader":"^11.0.1","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_tailwindcss":"^3.0.1","npm_package_devDependencies_terser_webpack_plugin":"^5.3.0","npm_package_devDependencies_webpack":"^5.65.0","npm_package_devDependencies_webpack_cli":"^4.9.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__":"0.0.1","npm_package_devDependencies__babel_core":"^7.13.10","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.13.10","npm_package_devDependencies__babel_preset_env":"^7.13.10","npm_package_devDependencies__babel_preset_react":"^7.12.13","npm_package_devDependencies__tailwindcss_forms":"^0.4.0","npm_package_devDependencies__tailwindcss_typography":"^0.5.0","npm_package_homepage":"https://github.com/ituageorge/form_frontend#readme","npm_package_license":"ISC","npm_package_main":"index.js","npm_package_name":"form_frontend","npm_package_proxy":"http://localhost:4000","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"git+https://github.com/ituageorge/form_frontend.git","npm_package_scripts_build":"webpack --mode production","npm_package_scripts_dev":"webpack --mode development","npm_package_scripts_start":"webpack serve --open Chrome","npm_package_version":"1.0.0","NUMBER_OF_PROCESSORS":"4","OLDPWD":"C:/Users/GEORGE/Desktop/form_backend","OneDrive":"C:\\Users\\GEORGE\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PASS":"commana16_google","PATH":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin","Path":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC","PLINK_PROTOCOL":"ssh","PORT":"3000","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 61 Stepping 4, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"3d04","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PWD":"C:/Users/GEORGE/Desktop/form_backend/client","SECRET":"vhghfhgfhfgh8585hjfh4rhfhburhdbdudecf7rbshjb","SECRET_FOR_REFRESHTOKEN":"64ghfufy7rggfyfgfhfhfgfgfdgdffffdgfhhfhgjkgjgjgjj","SERVER_BASE_URL":"http://localhost:3000/users","SERVICE":"gmail","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\WINDOWS","TEMP":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","TERM":"cygwin","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.63.2","TMP":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","TOKEN_SECRET":"hgfhfbgdvdjdkdfhdvskfhgkd75759674hjf74rfufbdjm75","USER":"ituaosagie100@gmail.com","USERDOMAIN":"DESKTOP-UPSASPU","USERDOMAIN_ROAMINGPROFILE":"DESKTOP-UPSASPU","USERNAME":"GEORGE","USERPROFILE":"C:\\Users\\GEORGE","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-abe99bdde0-sock","WINDIR":"C:\\WINDOWS","_":"C:/Program Files/nodejs/node.exe","_prog":"node"}.SERVER_BASE_URL, "/logout"), body);
              };

              _context3.prev = 1;
              // setAppState({ ...appState, loading: true });
              refreshToken = localStorage.getItem('refreshToken');
              localStorage.removeItem('accessToken'); // localStorage.removeItem("data");

              localStorage.removeItem('refreshToken');
              history.push('/login');
              window.location.reload();
              _context3.next = 9;
              return logout(refreshToken);

            case 9:
              _context3.next = 15;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](1);
              console.error(_context3.t0); // setAppState({ ...appState, loading: false });

              alert(_context3.t0.response.error);

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 11]]);
    }));

    return function handleLogout() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement("div", {
    className: "w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col lg:flex-row justify-center items-center py-12 px-20 font-sans"
  }, /*#__PURE__*/react.createElement("div", {
    className: "lg:w-1/4 w-full h-full flex flex-col bg-purple-900 p-4"
  }, /*#__PURE__*/react.createElement("div", {
    className: "p-4 w-full"
  }, /*#__PURE__*/react.createElement("img", {
    src: appState.profileUserImg,
    alt: "my passport"
  })), /*#__PURE__*/react.createElement("div", {
    className: "bg-gray-300 p-4 my-6"
  }, /*#__PURE__*/react.createElement("h1", null, "Hi ", "".concat(appState.user), "!"), /*#__PURE__*/react.createElement("p", null, "You are logged in ", "".concat(appState.authUser), " !")), /*#__PURE__*/react.createElement("div", {
    className: "w-full "
  }, /*#__PURE__*/react.createElement("button", {
    className: "w-1/4 bg-pink-500 mb-1",
    onClick: handleLogout
  }, "Log Out"))), /*#__PURE__*/react.createElement("div", {
    className: "w-full lg:w-3/4"
  }, /*#__PURE__*/react.createElement(questionComponent, null)));
};

/* harmony default export */ const hometail = (HomePage);

/***/ }),

/***/ 5789:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .show {\r\n    display: block;\r\n  }\r\n  \r\n  .hide {\r\n    display: none;\r\n  }\r\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);