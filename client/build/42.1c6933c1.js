(self.webpackChunkform_frontend=self.webpackChunkform_frontend||[]).push([[42],{9042:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>m});var a=o(7294),r=o(2487),t=o(5513),s=o(9669),_=o.n(s);function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],a=!0,r=!1,t=void 0;try{for(var s,_=e[Symbol.iterator]();!(a=(s=_.next()).done)&&(o.push(s.value),!n||o.length!==n);a=!0);}catch(e){r=!0,t=e}finally{try{a||null==_.return||_.return()}finally{if(r)throw t}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return i(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?i(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,a=new Array(n);o<n;o++)a[o]=e[o];return a}function p(e,n,o,a,r,t,s){try{var _=e[t](s),c=_.value}catch(e){return void o(e)}_.done?n(c):Promise.resolve(c).then(a,r)}function m(){var e=c((0,a.useState)(""),2),n=e[0],o=e[1],s=c((0,a.useState)(""),2),i=s[0],p=s[1],m=c((0,a.useState)(!1),2),l=m[0],g=m[1],d=(0,r.k6)();return console.log("bless","".concat("https://form-exam.herokuapp.com/#","/login")),a.createElement("div",{className:"w-full bg-gradient-to-r from-purple-500 to-pink-500 h-full  flex justify-center items-center py-12 px-20 font-sans"},a.createElement("div",{className:"h-full w-full border-transparent flex flex-col lg:flex-row"},a.createElement("div",{className:"lg:w-3/5 bg-purple-900  text-white flex flex-col font-bold content-around  md:rounded-l-xl py-6 p-16"},a.createElement("div",{className:" h-1/5 flex items-center  m-4"},a.createElement("div",{className:"w-24 h-24 border-8 border-white bg-transparent rounded-full -mx-6"}),a.createElement("div",{className:"w-20 h-20 border-8 border-white bg-transparent rounded-full -mx-6"}),a.createElement("span",{className:"font-extralight text-4xl m-8 p-6"},"LOGO")),a.createElement("div",{className:"flex flex-col h-2/3"},a.createElement("h1",{className:"font-bold text-6xl tracking-wider py-12 "},"Welcome Page"),a.createElement("div",{className:"flex font-sans font-light "},a.createElement("div",{className:"w-2/5 h-20"}),a.createElement("div",{className:" subpixel-antialiased w-3/5 h-20 text-2xl leading-3 tracking-tight"},a.createElement("span",{className:"flex justify-start"},"Sign in to"),a.createElement("br",null),a.createElement("span",{className:"flex justify-start"},"continue access")))),a.createElement("div",{className:" p-4 text-xl text-left m-5"},a.createElement("span",{className:""},"https://form-exam.herokuapp.com/#/login"))),a.createElement("form",{name:"form",onSubmit:function(e){e.preventDefault(),g(!0),console.log("SERVER_BASE_URL","https://form-exam.herokuapp.com/#"),_().post("".concat("https://form-exam.herokuapp.com/#","/login"),{username:n,password:i}).then((function(e){if(console.log("response111111223",e.data.findLoginUser),e){var n=e.data,o=n.accessToken,a=n.refreshToken,r=n.findLoginUser;localStorage.setItem("accessToken",o),localStorage.setItem("refreshToken",a),d.push({pathname:"/",findLoginUser:r})}return e}),(function(e){console.log({ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\GEORGE\\AppData\\Roaming",BASE_URL:"http://localhost:8080/#",ChocolateyInstall:"C:\\ProgramData\\chocolatey",ChocolateyLastPathUpdate:"132419603691365447",ChocolateyToolsLocation:"C:\\tools",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_9816_GSNZCMHDIKCAYWYW",COLORTERM:"truecolor",COMMONPROGRAMFILES:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"DESKTOP-UPSASPU",COMSPEC:"C:\\WINDOWS\\system32\\cmd.exe",DB_PASS:"george_12",DB_USER:"george_12",dp0:"C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin\\",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EMAIL_BASE_URL:"https://form-exam.herokuapp.com/#",EXEPATH:"C:\\Program Files\\Git\\bin",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GIT_ASKPASS:"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOME:"C:\\Users\\GEORGE",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\GEORGE",HOST:"smtp.gmail.com",INIT_CWD:"C:\\Users\\GEORGE\\Desktop\\form_backend\\client",LANG:"en_US.UTF-8",LOCALAPPDATA:"C:\\Users\\GEORGE\\AppData\\Local",LOGONSERVER:"\\\\DESKTOP-UPSASPU",MONGO_URL:"mongodb://localhost/formInMongoApp",MSYSTEM:"MINGW64",NODE:"C:\\Program Files\\nodejs\\node.exe",npm_config_access:"",npm_config_allow_same_version:"",npm_config_also:"",npm_config_always_auth:"",npm_config_argv:'{"remain":[],"cooked":["run","build"],"original":["run","build"]}',npm_config_audit:"true",npm_config_audit_level:"low",npm_config_auth_type:"legacy",npm_config_before:"",npm_config_bin_links:"true",npm_config_browser:"",npm_config_ca:"",npm_config_cache:"C:\\Users\\GEORGE\\AppData\\Roaming\\npm-cache",npm_config_cache_lock_retries:"10",npm_config_cache_lock_stale:"60000",npm_config_cache_lock_wait:"10000",npm_config_cache_max:"Infinity",npm_config_cache_min:"10",npm_config_cafile:"",npm_config_cert:"",npm_config_cidr:"",npm_config_color:"true",npm_config_commit_hooks:"true",npm_config_depth:"Infinity",npm_config_description:"true",npm_config_dev:"",npm_config_dry_run:"",npm_config_editor:"notepad.exe",npm_config_engine_strict:"",npm_config_fetch_retries:"2",npm_config_fetch_retry_factor:"10",npm_config_fetch_retry_maxtimeout:"60000",npm_config_fetch_retry_mintimeout:"10000",npm_config_force:"",npm_config_format_package_lock:"true",npm_config_fund:"true",npm_config_git:"git",npm_config_git_tag_version:"true",npm_config_global:"",npm_config_globalconfig:"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmrc",npm_config_globalignorefile:"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmignore",npm_config_global_style:"",npm_config_group:"",npm_config_ham_it_up:"",npm_config_heading:"npm",npm_config_https_proxy:"",npm_config_if_present:"",npm_config_ignore_prepublish:"",npm_config_ignore_scripts:"",npm_config_init_author_email:"",npm_config_init_author_name:"",npm_config_init_author_url:"",npm_config_init_license:"ISC",npm_config_init_module:"C:\\Users\\GEORGE\\.npm-init.js",npm_config_init_version:"1.0.0",npm_config_json:"",npm_config_key:"",npm_config_legacy_bundling:"",npm_config_link:"",npm_config_local_address:"",npm_config_loglevel:"notice",npm_config_logs_max:"10",npm_config_long:"",npm_config_maxsockets:"50",npm_config_message:"%s",npm_config_metrics_registry:"https://registry.npmjs.org/",npm_config_node_gyp:"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js",npm_config_node_options:"",npm_config_node_version:"12.14.1",npm_config_noproxy:"",npm_config_offline:"",npm_config_onload_script:"",npm_config_only:"",npm_config_optional:"true",npm_config_otp:"",npm_config_package_lock:"true",npm_config_package_lock_only:"",npm_config_parseable:"",npm_config_prefer_offline:"",npm_config_prefer_online:"",npm_config_prefix:"C:\\Users\\GEORGE\\AppData\\Roaming\\npm",npm_config_preid:"",npm_config_production:"",npm_config_progress:"true",npm_config_proxy:"",npm_config_read_only:"",npm_config_rebuild_bundle:"true",npm_config_registry:"https://registry.npmjs.org/",npm_config_rollback:"true",npm_config_save:"true",npm_config_save_bundle:"",npm_config_save_dev:"",npm_config_save_exact:"",npm_config_save_optional:"",npm_config_save_prefix:"^",npm_config_save_prod:"",npm_config_scope:"",npm_config_scripts_prepend_node_path:"warn-only",npm_config_script_shell:"",npm_config_searchexclude:"",npm_config_searchlimit:"20",npm_config_searchopts:"",npm_config_searchstaleness:"900",npm_config_send_metrics:"",npm_config_shell:"C:\\WINDOWS\\system32\\cmd.exe",npm_config_shrinkwrap:"true",npm_config_sign_git_commit:"",npm_config_sign_git_tag:"",npm_config_sso_poll_frequency:"500",npm_config_sso_type:"oauth",npm_config_strict_ssl:"true",npm_config_tag:"latest",npm_config_tag_version_prefix:"v",npm_config_timing:"",npm_config_tmp:"C:\\Users\\GEORGE\\AppData\\Local\\Temp",npm_config_umask:"0000",npm_config_unicode:"",npm_config_unsafe_perm:"true",npm_config_update_notifier:"true",npm_config_usage:"",npm_config_user:"",npm_config_userconfig:"C:\\Users\\GEORGE\\.npmrc",npm_config_user_agent:"npm/6.13.4 node/v12.14.1 win32 x64",npm_config_version:"",npm_config_versions:"",npm_config_viewer:"browser",npm_execpath:"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js",npm_lifecycle_event:"build",npm_lifecycle_script:"webpack --mode production",npm_node_execpath:"C:\\Program Files\\nodejs\\node.exe",npm_package_author_name:"Itua George Osagie",npm_package_bugs_url:"https://github.com/ituageorge/form_frontend/issues",npm_package_dependencies_axios:"^0.21.4",npm_package_dependencies_babel_polyfill:"^6.26.0",npm_package_dependencies_bootstrap:"^4.6.0",npm_package_dependencies_buffer:"^6.0.3",npm_package_dependencies_dotenv:"^10.0.0",npm_package_dependencies_history:"^5.0.0",npm_package_dependencies_moment:"^2.29.1",npm_package_dependencies_process:"^0.11.10",npm_package_dependencies_prop_types:"^15.7.2",npm_package_dependencies_react:"^16.14.0",npm_package_dependencies_react_dom:"^16.14.0",npm_package_dependencies_react_images_upload:"^1.2.8",npm_package_dependencies_react_router_dom:"^5.2.0",npm_package_dependencies_regenerator_runtime:"^0.13.9",npm_package_dependencies_util:"^0.12.3",npm_package_dependencies_uuidv4:"^6.2.6",npm_package_description:"",npm_package_devDependencies_3:"^2.1.0",npm_package_devDependencies_aspect_ratio:"^2.1.1",npm_package_devDependencies_autoprefixer:"^10.4.0",npm_package_devDependencies_babel_loader:"^8.2.2",npm_package_devDependencies_css_loader:"^5.1.2",npm_package_devDependencies_html_webpack_plugin:"^5.3.1",npm_package_devDependencies_jquery:"^1.9.1",npm_package_devDependencies_line_clamp:"^1.0.0",npm_package_devDependencies_popper_js:"^1.16.1",npm_package_devDependencies_postcss:"^8.4.5",npm_package_devDependencies_postcss_loader:"^6.2.1",npm_package_devDependencies_postcss_preset_env:"^7.0.1",npm_package_devDependencies_sass:"^1.32.8",npm_package_devDependencies_sass_loader:"^11.0.1",npm_package_devDependencies_style_loader:"^2.0.0",npm_package_devDependencies_tailwindcss:"^3.0.1",npm_package_devDependencies_webpack:"^5.25.1",npm_package_devDependencies_webpack_cli:"^4.5.0",npm_package_devDependencies_webpack_dev_server:"^3.11.2",npm_package_devDependencies__:"0.0.1",npm_package_devDependencies__babel_core:"^7.13.10",npm_package_devDependencies__babel_plugin_transform_runtime:"^7.13.10",npm_package_devDependencies__babel_preset_env:"^7.13.10",npm_package_devDependencies__babel_preset_react:"^7.12.13",npm_package_devDependencies__tailwindcss_forms:"^0.4.0",npm_package_devDependencies__tailwindcss_typography:"^0.5.0",npm_package_homepage:"https://github.com/ituageorge/form_frontend#readme",npm_package_license:"ISC",npm_package_main:"index.js",npm_package_name:"form_frontend",npm_package_proxy:"http://localhost:4000",npm_package_readmeFilename:"README.md",npm_package_repository_type:"git",npm_package_repository_url:"git+https://github.com/ituageorge/form_frontend.git",npm_package_scripts_build:"webpack --mode production",npm_package_scripts_dev:"webpack --mode development",npm_package_scripts_start:"webpack serve --open Chrome",npm_package_version:"1.0.0",NUMBER_OF_PROCESSORS:"4",OLDPWD:"C:/Users/GEORGE/Desktop/form_backend",OneDrive:"C:\\Users\\GEORGE\\OneDrive",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",PASS:"commana16_google",PATH:"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin",Path:"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC",PLINK_PROTOCOL:"ssh",PORT:"3000",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"Intel64 Family 6 Model 61 Stepping 4, GenuineIntel",PROCESSOR_LEVEL:"6",PROCESSOR_REVISION:"3d04",ProgramData:"C:\\ProgramData",PROGRAMFILES:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROMPT:"$P$G",PSModulePath:"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules",PUBLIC:"C:\\Users\\Public",PWD:"C:/Users/GEORGE/Desktop/form_backend/client",SECRET:"vhghfhgfhfgh8585hjfh4rhfhburhdbdudecf7rbshjb",SECRET_FOR_REFRESHTOKEN:"64ghfufy7rggfyfgfhfhfgfgfdgdffffdgfhhfhgjkgjgjgjj",SERVER_BASE_URL:"https://form-exam.herokuapp.com/#",SERVICE:"gmail",SESSIONNAME:"Console",SHLVL:"2",SYSTEMDRIVE:"C:",SYSTEMROOT:"C:\\WINDOWS",TEMP:"C:\\Users\\GEORGE\\AppData\\Local\\Temp",TERM:"cygwin",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.63.2",TMP:"C:\\Users\\GEORGE\\AppData\\Local\\Temp",TOKEN_SECRET:"hgfhfbgdvdjdkdfhdvskfhgkd75759674hjf74rfufbdjm75",USER:"ituaosagie100@gmail.com",USERDOMAIN:"DESKTOP-UPSASPU",USERDOMAIN_ROAMINGPROFILE:"DESKTOP-UPSASPU",USERNAME:"GEORGE",USERPROFILE:"C:\\Users\\GEORGE",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-abe99bdde0-sock",WINDIR:"C:\\WINDOWS",_:"C:/Program Files/nodejs/node.exe",_prog:"node"}),e.response?console.log("errorRes",e.response):e.request?console.log("errorReq",e.request):console.log("eeeror",e)}))},className:"h-full w-full lg:w-2/5 bg-white rounded-none md:rounded-r-xl p-10"},a.createElement("div",{className:"h-2/5 w-full flex flex-col "},a.createElement("div",{className:"flex my-6 py-2"},a.createElement("h1",{className:"text-4xl font-bold  py-3"},"Sign In")),a.createElement("div",{className:"form-group flex flex-col"+(l&&!n?" bg-red-100":"")},a.createElement("span",{className:"text-left -my-3"},"Username"),a.createElement("input",{type:"username",className:"form-input border-0 border-b-4 my-3 focus:border-none border-purple-500 w-full",name:"username",value:n,onChange:function(e){return o(e.target.value)}}),l&&!n&&a.createElement("div",{className:"text-red-600"},"Username is required")),a.createElement("div",{className:"form-group flex flex-col"+(l&&!i?" bg-red-100":"")},a.createElement("span",{className:"text-left -my-3"},"Password"),a.createElement("input",{type:"password",className:"form-input border-0 border-b-4 my-3 border-purple-500 ",name:"password",value:i,onChange:function(e){return p(e.target.value)}}),l&&!i&&a.createElement("div",{className:"text-red-600"},"Password is required")),a.createElement("button",{type:"submit",className:"bg-gradient-to-r from-purple-500 to-pink-500 font-bold my-5 py-3 tracking-widest text-white  "},"SUBMIT",a.createElement("i",{className:"fa fa-chevron-right mx-10 "})),a.createElement("p",{className:"inline"},a.createElement(t.rU,{to:"/recover/password"},"Forgot password?")),a.createElement("p",{className:"inline"},"Don't have an account?",a.createElement(t.rU,{to:"/register"},"Register here"))))))}o(5666),_().interceptors.request.use((function(e){var n=localStorage.getItem("accessToken");return n&&(e.headers["x-auth-token"]=n),e}),(function(e){Promise.reject(e)})),_().interceptors.response.use((function(e){return e}),function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var o,a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.config,!(a=localStorage.getItem("refreshToken"))||401!==n.response.status||o._retry){e.next=12;break}return o._retry=!0,e.next=6,_().post("".concat("https://form-exam.herokuapp.com/#","/refresh_token"),{refreshToken:a});case 6:if(200!==(r=e.sent).status){e.next=12;break}return localStorage.setItem("accessToken",r.data.accessToken),console.log("res.data.accessToken",r.data.accessToken),console.log("Access token refreshed!"),e.abrupt("return",_()(o));case 12:return e.abrupt("return",Promise.reject(n));case 13:case"end":return e.stop()}}),e)})),function(){var n=this,o=arguments;return new Promise((function(a,r){var t=e.apply(n,o);function s(e){p(t,a,r,s,_,"next",e)}function _(e){p(t,a,r,s,_,"throw",e)}s(void 0)}))});return function(e){return n.apply(this,arguments)}}())}}]);