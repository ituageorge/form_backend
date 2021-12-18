(self["webpackChunkform_frontend"] = self["webpackChunkform_frontend"] || []).push([[739],{

/***/ 1312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2487);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5513);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5666);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





(__webpack_require__(9738).config)();

 //request interceptor to add the auth token header to requests

axios__WEBPACK_IMPORTED_MODULE_1___default().interceptors.request.use(function (config) {
  var accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    config.headers['x-auth-token'] = accessToken;
  }

  return config;
}, function (error) {
  Promise.reject(error);
}); //response interceptor to refresh token on receiving token expired error

axios__WEBPACK_IMPORTED_MODULE_1___default().interceptors.response.use(function (response) {
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
            return axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat({"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\GEORGE\\AppData\\Roaming","BASE_URL":"http://localhost:8080/#","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132419603691365447","ChocolateyToolsLocation":"C:\\tools","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_9816_GSNZCMHDIKCAYWYW","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"DESKTOP-UPSASPU","COMSPEC":"C:\\WINDOWS\\system32\\cmd.exe","DB_PASS":"george_12","DB_USER":"george_12","dp0":"C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin\\","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EMAIL_BASE_URL":"http://localhost:3000/#","EXEPATH":"C:\\Program Files\\Git\\bin","FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING":"Default","GIT_ASKPASS":"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\GEORGE","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\GEORGE","HOST":"smtp.gmail.com","INIT_CWD":"C:\\Users\\GEORGE\\Desktop\\form_backend\\client","LANG":"en_US.UTF-8","LOCALAPPDATA":"C:\\Users\\GEORGE\\AppData\\Local","LOGONSERVER":"\\\\DESKTOP-UPSASPU","MONGO_URL":"mongodb://localhost/formInMongoApp","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","npm_config_access":"","npm_config_allow_same_version":"","npm_config_also":"","npm_config_always_auth":"","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"run\",\"build\"]}","npm_config_audit":"true","npm_config_audit_level":"low","npm_config_auth_type":"legacy","npm_config_before":"","npm_config_bin_links":"true","npm_config_browser":"","npm_config_ca":"","npm_config_cache":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm-cache","npm_config_cache_lock_retries":"10","npm_config_cache_lock_stale":"60000","npm_config_cache_lock_wait":"10000","npm_config_cache_max":"Infinity","npm_config_cache_min":"10","npm_config_cafile":"","npm_config_cert":"","npm_config_cidr":"","npm_config_color":"true","npm_config_commit_hooks":"true","npm_config_depth":"Infinity","npm_config_description":"true","npm_config_dev":"","npm_config_dry_run":"","npm_config_editor":"notepad.exe","npm_config_engine_strict":"","npm_config_fetch_retries":"2","npm_config_fetch_retry_factor":"10","npm_config_fetch_retry_maxtimeout":"60000","npm_config_fetch_retry_mintimeout":"10000","npm_config_force":"","npm_config_format_package_lock":"true","npm_config_fund":"true","npm_config_git":"git","npm_config_git_tag_version":"true","npm_config_global":"","npm_config_globalconfig":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_globalignorefile":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmignore","npm_config_global_style":"","npm_config_group":"","npm_config_ham_it_up":"","npm_config_heading":"npm","npm_config_https_proxy":"","npm_config_if_present":"","npm_config_ignore_prepublish":"","npm_config_ignore_scripts":"","npm_config_init_author_email":"","npm_config_init_author_name":"","npm_config_init_author_url":"","npm_config_init_license":"ISC","npm_config_init_module":"C:\\Users\\GEORGE\\.npm-init.js","npm_config_init_version":"1.0.0","npm_config_json":"","npm_config_key":"","npm_config_legacy_bundling":"","npm_config_link":"","npm_config_local_address":"","npm_config_loglevel":"notice","npm_config_logs_max":"10","npm_config_long":"","npm_config_maxsockets":"50","npm_config_message":"%s","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_node_gyp":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_node_options":"","npm_config_node_version":"12.14.1","npm_config_noproxy":"","npm_config_offline":"","npm_config_onload_script":"","npm_config_only":"","npm_config_optional":"true","npm_config_otp":"","npm_config_package_lock":"true","npm_config_package_lock_only":"","npm_config_parseable":"","npm_config_prefer_offline":"","npm_config_prefer_online":"","npm_config_prefix":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm","npm_config_preid":"","npm_config_production":"","npm_config_progress":"true","npm_config_proxy":"","npm_config_read_only":"","npm_config_rebuild_bundle":"true","npm_config_registry":"https://registry.npmjs.org/","npm_config_rollback":"true","npm_config_save":"true","npm_config_save_bundle":"","npm_config_save_dev":"","npm_config_save_exact":"","npm_config_save_optional":"","npm_config_save_prefix":"^","npm_config_save_prod":"","npm_config_scope":"","npm_config_scripts_prepend_node_path":"warn-only","npm_config_script_shell":"","npm_config_searchexclude":"","npm_config_searchlimit":"20","npm_config_searchopts":"","npm_config_searchstaleness":"900","npm_config_send_metrics":"","npm_config_shell":"C:\\WINDOWS\\system32\\cmd.exe","npm_config_shrinkwrap":"true","npm_config_sign_git_commit":"","npm_config_sign_git_tag":"","npm_config_sso_poll_frequency":"500","npm_config_sso_type":"oauth","npm_config_strict_ssl":"true","npm_config_tag":"latest","npm_config_tag_version_prefix":"v","npm_config_timing":"","npm_config_tmp":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","npm_config_umask":"0000","npm_config_unicode":"","npm_config_unsafe_perm":"true","npm_config_update_notifier":"true","npm_config_usage":"","npm_config_user":"","npm_config_userconfig":"C:\\Users\\GEORGE\\.npmrc","npm_config_user_agent":"npm/6.13.4 node/v12.14.1 win32 x64","npm_config_version":"","npm_config_versions":"","npm_config_viewer":"browser","npm_execpath":"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"build","npm_lifecycle_script":"webpack --mode production","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_name":"Itua George Osagie","npm_package_bugs_url":"https://github.com/ituageorge/form_frontend/issues","npm_package_dependencies_axios":"^0.21.4","npm_package_dependencies_babel_polyfill":"^6.26.0","npm_package_dependencies_bootstrap":"^4.6.0","npm_package_dependencies_buffer":"^6.0.3","npm_package_dependencies_dotenv":"^10.0.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_moment":"^2.29.1","npm_package_dependencies_os_browserify":"^0.3.0","npm_package_dependencies_path_browserify":"^1.0.1","npm_package_dependencies_process":"^0.11.10","npm_package_dependencies_prop_types":"^15.7.2","npm_package_dependencies_react":"^16.14.0","npm_package_dependencies_react_dom":"^16.14.0","npm_package_dependencies_react_images_upload":"^1.2.8","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_regenerator_runtime":"^0.13.9","npm_package_dependencies_terser":"3.14.1","npm_package_dependencies_util":"^0.12.3","npm_package_dependencies_uuidv4":"^6.2.6","npm_package_description":"","npm_package_devDependencies_3":"^2.1.0","npm_package_devDependencies_aspect_ratio":"^2.1.1","npm_package_devDependencies_autoprefixer":"^10.4.0","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_css_loader":"^5.1.2","npm_package_devDependencies_html_webpack_plugin":"^5.3.1","npm_package_devDependencies_jquery":"^1.9.1","npm_package_devDependencies_line_clamp":"^1.0.0","npm_package_devDependencies_mini_css_extract_plugin":"^2.4.5","npm_package_devDependencies_popper_js":"^1.16.1","npm_package_devDependencies_postcss":"^8.4.5","npm_package_devDependencies_postcss_loader":"^6.2.1","npm_package_devDependencies_postcss_preset_env":"^7.0.1","npm_package_devDependencies_sass":"^1.32.8","npm_package_devDependencies_sass_loader":"^11.0.1","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_tailwindcss":"^3.0.1","npm_package_devDependencies_terser_webpack_plugin":"^5.3.0","npm_package_devDependencies_webpack":"^5.65.0","npm_package_devDependencies_webpack_cli":"^4.9.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__":"0.0.1","npm_package_devDependencies__babel_core":"^7.13.10","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.13.10","npm_package_devDependencies__babel_preset_env":"^7.13.10","npm_package_devDependencies__babel_preset_react":"^7.12.13","npm_package_devDependencies__tailwindcss_forms":"^0.4.0","npm_package_devDependencies__tailwindcss_typography":"^0.5.0","npm_package_homepage":"https://github.com/ituageorge/form_frontend#readme","npm_package_license":"ISC","npm_package_main":"index.js","npm_package_name":"form_frontend","npm_package_proxy":"http://localhost:4000","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"git+https://github.com/ituageorge/form_frontend.git","npm_package_scripts_build":"webpack --mode production","npm_package_scripts_dev":"webpack --mode development","npm_package_scripts_start":"webpack serve --open Chrome","npm_package_version":"1.0.0","NUMBER_OF_PROCESSORS":"4","OLDPWD":"C:/Users/GEORGE/Desktop/form_backend","OneDrive":"C:\\Users\\GEORGE\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PASS":"commana16_google","PATH":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin","Path":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC","PLINK_PROTOCOL":"ssh","PORT":"3000","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 61 Stepping 4, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"3d04","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PWD":"C:/Users/GEORGE/Desktop/form_backend/client","SECRET":"vhghfhgfhfgh8585hjfh4rhfhburhdbdudecf7rbshjb","SECRET_FOR_REFRESHTOKEN":"64ghfufy7rggfyfgfhfhfgfgfdgdffffdgfhhfhgjkgjgjgjj","SERVER_BASE_URL":"http://localhost:3000/users","SERVICE":"gmail","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\WINDOWS","TEMP":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","TERM":"cygwin","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.63.2","TMP":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","TOKEN_SECRET":"hgfhfbgdvdjdkdfhdvskfhgkd75759674hjf74rfufbdjm75","USER":"ituaosagie100@gmail.com","USERDOMAIN":"DESKTOP-UPSASPU","USERDOMAIN_ROAMINGPROFILE":"DESKTOP-UPSASPU","USERNAME":"GEORGE","USERPROFILE":"C:\\Users\\GEORGE","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-abe99bdde0-sock","WINDIR":"C:\\WINDOWS","_":"C:/Program Files/nodejs/node.exe","_prog":"node"}.SERVER_BASE_URL, "/refresh_token"), {
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
            return _context.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_1___default()(originalRequest));

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

var RegistrationForm = function RegistrationForm() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      firstName = _useState2[0],
      setFirstName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      lastName = _useState4[0],
      setLastName = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      username = _useState6[0],
      setUsername = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      email = _useState8[0],
      setEmail = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      password = _useState10[0],
      setPassword = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      profileImg = _useState12[0],
      setProfileImg = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      submitted = _useState14[0],
      setSubmitted = _useState14[1];

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .useHistory */ .k6)();

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
      var formData;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault(); // setSubmitted(true);

              formData = new FormData();
              formData.append('profileImg', profileImg);
              formData.append('firstName', firstName);
              formData.append('lastName', lastName);
              formData.append('username', username);
              formData.append('email', email);
              formData.append('password', password);

              if (firstName && lastName && username && email && password) {
                axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat({"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\GEORGE\\AppData\\Roaming","BASE_URL":"http://localhost:8080/#","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132419603691365447","ChocolateyToolsLocation":"C:\\tools","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_9816_GSNZCMHDIKCAYWYW","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"DESKTOP-UPSASPU","COMSPEC":"C:\\WINDOWS\\system32\\cmd.exe","DB_PASS":"george_12","DB_USER":"george_12","dp0":"C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin\\","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EMAIL_BASE_URL":"http://localhost:3000/#","EXEPATH":"C:\\Program Files\\Git\\bin","FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING":"Default","GIT_ASKPASS":"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\GEORGE","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\GEORGE","HOST":"smtp.gmail.com","INIT_CWD":"C:\\Users\\GEORGE\\Desktop\\form_backend\\client","LANG":"en_US.UTF-8","LOCALAPPDATA":"C:\\Users\\GEORGE\\AppData\\Local","LOGONSERVER":"\\\\DESKTOP-UPSASPU","MONGO_URL":"mongodb://localhost/formInMongoApp","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","npm_config_access":"","npm_config_allow_same_version":"","npm_config_also":"","npm_config_always_auth":"","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"run\",\"build\"]}","npm_config_audit":"true","npm_config_audit_level":"low","npm_config_auth_type":"legacy","npm_config_before":"","npm_config_bin_links":"true","npm_config_browser":"","npm_config_ca":"","npm_config_cache":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm-cache","npm_config_cache_lock_retries":"10","npm_config_cache_lock_stale":"60000","npm_config_cache_lock_wait":"10000","npm_config_cache_max":"Infinity","npm_config_cache_min":"10","npm_config_cafile":"","npm_config_cert":"","npm_config_cidr":"","npm_config_color":"true","npm_config_commit_hooks":"true","npm_config_depth":"Infinity","npm_config_description":"true","npm_config_dev":"","npm_config_dry_run":"","npm_config_editor":"notepad.exe","npm_config_engine_strict":"","npm_config_fetch_retries":"2","npm_config_fetch_retry_factor":"10","npm_config_fetch_retry_maxtimeout":"60000","npm_config_fetch_retry_mintimeout":"10000","npm_config_force":"","npm_config_format_package_lock":"true","npm_config_fund":"true","npm_config_git":"git","npm_config_git_tag_version":"true","npm_config_global":"","npm_config_globalconfig":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_globalignorefile":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmignore","npm_config_global_style":"","npm_config_group":"","npm_config_ham_it_up":"","npm_config_heading":"npm","npm_config_https_proxy":"","npm_config_if_present":"","npm_config_ignore_prepublish":"","npm_config_ignore_scripts":"","npm_config_init_author_email":"","npm_config_init_author_name":"","npm_config_init_author_url":"","npm_config_init_license":"ISC","npm_config_init_module":"C:\\Users\\GEORGE\\.npm-init.js","npm_config_init_version":"1.0.0","npm_config_json":"","npm_config_key":"","npm_config_legacy_bundling":"","npm_config_link":"","npm_config_local_address":"","npm_config_loglevel":"notice","npm_config_logs_max":"10","npm_config_long":"","npm_config_maxsockets":"50","npm_config_message":"%s","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_node_gyp":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_node_options":"","npm_config_node_version":"12.14.1","npm_config_noproxy":"","npm_config_offline":"","npm_config_onload_script":"","npm_config_only":"","npm_config_optional":"true","npm_config_otp":"","npm_config_package_lock":"true","npm_config_package_lock_only":"","npm_config_parseable":"","npm_config_prefer_offline":"","npm_config_prefer_online":"","npm_config_prefix":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm","npm_config_preid":"","npm_config_production":"","npm_config_progress":"true","npm_config_proxy":"","npm_config_read_only":"","npm_config_rebuild_bundle":"true","npm_config_registry":"https://registry.npmjs.org/","npm_config_rollback":"true","npm_config_save":"true","npm_config_save_bundle":"","npm_config_save_dev":"","npm_config_save_exact":"","npm_config_save_optional":"","npm_config_save_prefix":"^","npm_config_save_prod":"","npm_config_scope":"","npm_config_scripts_prepend_node_path":"warn-only","npm_config_script_shell":"","npm_config_searchexclude":"","npm_config_searchlimit":"20","npm_config_searchopts":"","npm_config_searchstaleness":"900","npm_config_send_metrics":"","npm_config_shell":"C:\\WINDOWS\\system32\\cmd.exe","npm_config_shrinkwrap":"true","npm_config_sign_git_commit":"","npm_config_sign_git_tag":"","npm_config_sso_poll_frequency":"500","npm_config_sso_type":"oauth","npm_config_strict_ssl":"true","npm_config_tag":"latest","npm_config_tag_version_prefix":"v","npm_config_timing":"","npm_config_tmp":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","npm_config_umask":"0000","npm_config_unicode":"","npm_config_unsafe_perm":"true","npm_config_update_notifier":"true","npm_config_usage":"","npm_config_user":"","npm_config_userconfig":"C:\\Users\\GEORGE\\.npmrc","npm_config_user_agent":"npm/6.13.4 node/v12.14.1 win32 x64","npm_config_version":"","npm_config_versions":"","npm_config_viewer":"browser","npm_execpath":"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"build","npm_lifecycle_script":"webpack --mode production","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_name":"Itua George Osagie","npm_package_bugs_url":"https://github.com/ituageorge/form_frontend/issues","npm_package_dependencies_axios":"^0.21.4","npm_package_dependencies_babel_polyfill":"^6.26.0","npm_package_dependencies_bootstrap":"^4.6.0","npm_package_dependencies_buffer":"^6.0.3","npm_package_dependencies_dotenv":"^10.0.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_moment":"^2.29.1","npm_package_dependencies_os_browserify":"^0.3.0","npm_package_dependencies_path_browserify":"^1.0.1","npm_package_dependencies_process":"^0.11.10","npm_package_dependencies_prop_types":"^15.7.2","npm_package_dependencies_react":"^16.14.0","npm_package_dependencies_react_dom":"^16.14.0","npm_package_dependencies_react_images_upload":"^1.2.8","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_regenerator_runtime":"^0.13.9","npm_package_dependencies_terser":"3.14.1","npm_package_dependencies_util":"^0.12.3","npm_package_dependencies_uuidv4":"^6.2.6","npm_package_description":"","npm_package_devDependencies_3":"^2.1.0","npm_package_devDependencies_aspect_ratio":"^2.1.1","npm_package_devDependencies_autoprefixer":"^10.4.0","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_css_loader":"^5.1.2","npm_package_devDependencies_html_webpack_plugin":"^5.3.1","npm_package_devDependencies_jquery":"^1.9.1","npm_package_devDependencies_line_clamp":"^1.0.0","npm_package_devDependencies_mini_css_extract_plugin":"^2.4.5","npm_package_devDependencies_popper_js":"^1.16.1","npm_package_devDependencies_postcss":"^8.4.5","npm_package_devDependencies_postcss_loader":"^6.2.1","npm_package_devDependencies_postcss_preset_env":"^7.0.1","npm_package_devDependencies_sass":"^1.32.8","npm_package_devDependencies_sass_loader":"^11.0.1","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_tailwindcss":"^3.0.1","npm_package_devDependencies_terser_webpack_plugin":"^5.3.0","npm_package_devDependencies_webpack":"^5.65.0","npm_package_devDependencies_webpack_cli":"^4.9.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__":"0.0.1","npm_package_devDependencies__babel_core":"^7.13.10","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.13.10","npm_package_devDependencies__babel_preset_env":"^7.13.10","npm_package_devDependencies__babel_preset_react":"^7.12.13","npm_package_devDependencies__tailwindcss_forms":"^0.4.0","npm_package_devDependencies__tailwindcss_typography":"^0.5.0","npm_package_homepage":"https://github.com/ituageorge/form_frontend#readme","npm_package_license":"ISC","npm_package_main":"index.js","npm_package_name":"form_frontend","npm_package_proxy":"http://localhost:4000","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"git+https://github.com/ituageorge/form_frontend.git","npm_package_scripts_build":"webpack --mode production","npm_package_scripts_dev":"webpack --mode development","npm_package_scripts_start":"webpack serve --open Chrome","npm_package_version":"1.0.0","NUMBER_OF_PROCESSORS":"4","OLDPWD":"C:/Users/GEORGE/Desktop/form_backend","OneDrive":"C:\\Users\\GEORGE\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PASS":"commana16_google","PATH":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin","Path":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC","PLINK_PROTOCOL":"ssh","PORT":"3000","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 61 Stepping 4, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"3d04","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PWD":"C:/Users/GEORGE/Desktop/form_backend/client","SECRET":"vhghfhgfhfgh8585hjfh4rhfhburhdbdudecf7rbshjb","SECRET_FOR_REFRESHTOKEN":"64ghfufy7rggfyfgfhfhfgfgfdgdffffdgfhhfhgjkgjgjgjj","SERVER_BASE_URL":"http://localhost:3000/users","SERVICE":"gmail","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\WINDOWS","TEMP":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","TERM":"cygwin","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.63.2","TMP":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","TOKEN_SECRET":"hgfhfbgdvdjdkdfhdvskfhgkd75759674hjf74rfufbdjm75","USER":"ituaosagie100@gmail.com","USERDOMAIN":"DESKTOP-UPSASPU","USERDOMAIN_ROAMINGPROFILE":"DESKTOP-UPSASPU","USERNAME":"GEORGE","USERPROFILE":"C:\\Users\\GEORGE","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-abe99bdde0-sock","WINDIR":"C:\\WINDOWS","_":"C:/Program Files/nodejs/node.exe","_prog":"node"}.SERVER_BASE_URL, "/upload"), formData).then(function (response) {
                  console.log('response', response);
                  var _response$data = response.data,
                      accessToken = _response$data.accessToken,
                      refreshToken = _response$data.refreshToken;
                  localStorage.setItem('accessToken', accessToken);
                  localStorage.setItem('refreshToken', refreshToken);
                })["catch"](function (error) {
                  console.log(error);
                });
              }

              history.push('/');

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "w-full bg-gradient-to-r from-purple-500 to-pink-500  h-full flex justify-center items-center py-12 px-20 font-sans"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "h-full w-full border-transparent flex flex-col lg:flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lg:w-2/5 bg-purple-900  text-white flex flex-col font-bold content-around  md:rounded-l-xl py-6 p-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: " h-1/5 flex items-center  m-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "w-24 h-24 border-8 border-white bg-transparent rounded-full -mx-6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "w-20 h-20 border-8 border-white bg-transparent rounded-full -mx-6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "font-extralight text-4xl m-8 p-6"
  }, "LOGO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex flex-col h-2/3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "font-bold text-6xl tracking-wider py-12 "
  }, "Welcome Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex font-sans font-light "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "w-2/5 h-20"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: " subpixel-antialiased w-3/5 h-20 text-2xl leading-3 tracking-tight"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "flex justify-start"
  }, "Register now"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "flex justify-start"
  }, "continue access")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: " p-4 text-xl text-left m-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: ""
  }, "https://form-exam.herokuapp.com/#/register"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    name: "form",
    onSubmit: handleSubmit,
    className: "h-full w-full lg:w-3/5 bg-white rounded-none md:rounded-r-xl p-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "h-2/5 w-full flex flex-col "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex my-4 py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "text-4xl font-bold  py-3"
  }, "Register now")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'form-group flex flex-col w-1/2 mx-2' + (submitted && !firstName ? ' bg-red-100' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-left -my-3"
  }, "First Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "firstName",
    className: "form-input border-0 border-b-4 my-3 focus:border-none border-purple-500 w-full",
    name: "firstName",
    value: firstName,
    onChange: function onChange(e) {
      return setFirstName(e.target.value);
    }
  }), submitted && !firstName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-red-600 mx-2"
  }, "First Name is required")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'form-group flex flex-col w-1/2 mx-2' + (submitted && !lastName ? ' bg-red-100' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-left -my-3"
  }, "Last Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "lastName",
    className: "form-input border-0 border-b-4 my-3 border-purple-500 w-full",
    value: lastName,
    name: "lastName",
    onChange: function onChange(e) {
      return setLastName(e.target.value);
    }
  }), submitted && !lastName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-red-600 mx-2"
  }, "Last Name is required"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'form-group flex flex-col w-1/2 mx-2' + (submitted && !username ? ' bg-red-100' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-left -my-3"
  }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "username",
    className: "form-input border-0 border-b-4 my-3 border-purple-500 ",
    value: username,
    name: "username",
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    }
  }), submitted && !username && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-red-600 mx-2"
  }, "Username is required")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'form-group flex flex-col w-1/2 mx-2' + (submitted && !email ? ' bg-red-100' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-left -my-3"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "email",
    className: "form-input border-0 border-b-4 my-3 border-purple-500 w-full",
    value: email,
    name: "email",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  }), submitted && !email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-red-600 mx-2"
  }, "Email is required"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'form-group flex flex-col w-1/2 mx-2' + (submitted && !password ? ' bg-red-100' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-left -my-3"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "password",
    className: "form-input border-0 border-b-4 my-3 border-purple-500 w-full",
    value: password,
    name: "password",
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  }), submitted && !password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-red-600 mx-2"
  }, "Password is required")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'form-group flex flex-col w-1/2 mx-2'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "text-left -my-3"
  }, "Passport"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "file",
    className: "form-input border-0 border-b-4 py-6 my-2 border-purple-500 ",
    accept: "image/*",
    filename: "profileImg",
    onChange: function onChange(e) {
      return setProfileImg(e.target.files[0]);
    },
    placeholder: "please upload your image"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "bg-gradient-to-r from-purple-500 to-pink-500 font-bold my-5 py-3 tracking-widest text-white  "
  }, "REGISTER", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa fa-chevron-right mx-10 "
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "inline"
  }, "Already a member?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU, {
    to: "/login"
  }, "Login here")))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistrationForm);

/***/ }),

/***/ 6647:
/***/ (() => {

/* (ignored) */

/***/ })

}]);