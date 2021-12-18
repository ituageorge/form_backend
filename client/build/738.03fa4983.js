(self["webpackChunkform_frontend"] = self["webpackChunkform_frontend"] || []).push([[738],{

/***/ 9738:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(4155);
/* @flow */
/*::

type DotenvParseOptions = {
  debug?: boolean
}

// keys and values from src
type DotenvParseOutput = { [string]: string }

type DotenvConfigOptions = {
  path?: string, // path to .env file
  encoding?: string, // encoding of .env file
  debug?: string // turn on logging for debugging purposes
}

type DotenvConfigOutput = {
  parsed?: DotenvParseOutput,
  error?: Error
}

*/

const fs = __webpack_require__(6647)
const path = __webpack_require__(6470)
const os = __webpack_require__(7435)

function log (message /*: string */) {
  console.log(`[dotenv][DEBUG] ${message}`)
}

const NEWLINE = '\n'
const RE_INI_KEY_VAL = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/
const RE_NEWLINES = /\\n/g
const NEWLINES_MATCH = /\r\n|\n|\r/

// Parses src into an Object
function parse (src /*: string | Buffer */, options /*: ?DotenvParseOptions */) /*: DotenvParseOutput */ {
  const debug = Boolean(options && options.debug)
  const obj = {}

  // convert Buffers before splitting into lines and processing
  src.toString().split(NEWLINES_MATCH).forEach(function (line, idx) {
    // matching "KEY' and 'VAL' in 'KEY=VAL'
    const keyValueArr = line.match(RE_INI_KEY_VAL)
    // matched?
    if (keyValueArr != null) {
      const key = keyValueArr[1]
      // default undefined or missing values to empty string
      let val = (keyValueArr[2] || '')
      const end = val.length - 1
      const isDoubleQuoted = val[0] === '"' && val[end] === '"'
      const isSingleQuoted = val[0] === "'" && val[end] === "'"

      // if single or double quoted, remove quotes
      if (isSingleQuoted || isDoubleQuoted) {
        val = val.substring(1, end)

        // if double quoted, expand newlines
        if (isDoubleQuoted) {
          val = val.replace(RE_NEWLINES, NEWLINE)
        }
      } else {
        // remove surrounding whitespace
        val = val.trim()
      }

      obj[key] = val
    } else if (debug) {
      log(`did not match key and value when parsing line ${idx + 1}: ${line}`)
    }
  })

  return obj
}

function resolveHome (envPath) {
  return envPath[0] === '~' ? path.join(os.homedir(), envPath.slice(1)) : envPath
}

// Populates process.env from .env file
function config (options /*: ?DotenvConfigOptions */) /*: DotenvConfigOutput */ {
  let dotenvPath = path.resolve(process.cwd(), '.env')
  let encoding /*: string */ = 'utf8'
  let debug = false

  if (options) {
    if (options.path != null) {
      dotenvPath = resolveHome(options.path)
    }
    if (options.encoding != null) {
      encoding = options.encoding
    }
    if (options.debug != null) {
      debug = true
    }
  }

  try {
    // specifying an encoding returns a string instead of a buffer
    const parsed = parse(fs.readFileSync(dotenvPath, { encoding }), { debug })

    Object.keys(parsed).forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call({"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\GEORGE\\AppData\\Roaming","BASE_URL":"http://localhost:8080/#","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132419603691365447","ChocolateyToolsLocation":"C:\\tools","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_9816_GSNZCMHDIKCAYWYW","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"DESKTOP-UPSASPU","COMSPEC":"C:\\WINDOWS\\system32\\cmd.exe","DB_PASS":"george_12","DB_USER":"george_12","dp0":"C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin\\","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EMAIL_BASE_URL":"http://localhost:3000/#","EXEPATH":"C:\\Program Files\\Git\\bin","FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING":"Default","GIT_ASKPASS":"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\GEORGE","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\GEORGE","HOST":"smtp.gmail.com","INIT_CWD":"C:\\Users\\GEORGE\\Desktop\\form_backend\\client","LANG":"en_US.UTF-8","LOCALAPPDATA":"C:\\Users\\GEORGE\\AppData\\Local","LOGONSERVER":"\\\\DESKTOP-UPSASPU","MONGO_URL":"mongodb://localhost/formInMongoApp","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","npm_config_access":"","npm_config_allow_same_version":"","npm_config_also":"","npm_config_always_auth":"","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"run\",\"build\"]}","npm_config_audit":"true","npm_config_audit_level":"low","npm_config_auth_type":"legacy","npm_config_before":"","npm_config_bin_links":"true","npm_config_browser":"","npm_config_ca":"","npm_config_cache":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm-cache","npm_config_cache_lock_retries":"10","npm_config_cache_lock_stale":"60000","npm_config_cache_lock_wait":"10000","npm_config_cache_max":"Infinity","npm_config_cache_min":"10","npm_config_cafile":"","npm_config_cert":"","npm_config_cidr":"","npm_config_color":"true","npm_config_commit_hooks":"true","npm_config_depth":"Infinity","npm_config_description":"true","npm_config_dev":"","npm_config_dry_run":"","npm_config_editor":"notepad.exe","npm_config_engine_strict":"","npm_config_fetch_retries":"2","npm_config_fetch_retry_factor":"10","npm_config_fetch_retry_maxtimeout":"60000","npm_config_fetch_retry_mintimeout":"10000","npm_config_force":"","npm_config_format_package_lock":"true","npm_config_fund":"true","npm_config_git":"git","npm_config_git_tag_version":"true","npm_config_global":"","npm_config_globalconfig":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_globalignorefile":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmignore","npm_config_global_style":"","npm_config_group":"","npm_config_ham_it_up":"","npm_config_heading":"npm","npm_config_https_proxy":"","npm_config_if_present":"","npm_config_ignore_prepublish":"","npm_config_ignore_scripts":"","npm_config_init_author_email":"","npm_config_init_author_name":"","npm_config_init_author_url":"","npm_config_init_license":"ISC","npm_config_init_module":"C:\\Users\\GEORGE\\.npm-init.js","npm_config_init_version":"1.0.0","npm_config_json":"","npm_config_key":"","npm_config_legacy_bundling":"","npm_config_link":"","npm_config_local_address":"","npm_config_loglevel":"notice","npm_config_logs_max":"10","npm_config_long":"","npm_config_maxsockets":"50","npm_config_message":"%s","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_node_gyp":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_node_options":"","npm_config_node_version":"12.14.1","npm_config_noproxy":"","npm_config_offline":"","npm_config_onload_script":"","npm_config_only":"","npm_config_optional":"true","npm_config_otp":"","npm_config_package_lock":"true","npm_config_package_lock_only":"","npm_config_parseable":"","npm_config_prefer_offline":"","npm_config_prefer_online":"","npm_config_prefix":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm","npm_config_preid":"","npm_config_production":"","npm_config_progress":"true","npm_config_proxy":"","npm_config_read_only":"","npm_config_rebuild_bundle":"true","npm_config_registry":"https://registry.npmjs.org/","npm_config_rollback":"true","npm_config_save":"true","npm_config_save_bundle":"","npm_config_save_dev":"","npm_config_save_exact":"","npm_config_save_optional":"","npm_config_save_prefix":"^","npm_config_save_prod":"","npm_config_scope":"","npm_config_scripts_prepend_node_path":"warn-only","npm_config_script_shell":"","npm_config_searchexclude":"","npm_config_searchlimit":"20","npm_config_searchopts":"","npm_config_searchstaleness":"900","npm_config_send_metrics":"","npm_config_shell":"C:\\WINDOWS\\system32\\cmd.exe","npm_config_shrinkwrap":"true","npm_config_sign_git_commit":"","npm_config_sign_git_tag":"","npm_config_sso_poll_frequency":"500","npm_config_sso_type":"oauth","npm_config_strict_ssl":"true","npm_config_tag":"latest","npm_config_tag_version_prefix":"v","npm_config_timing":"","npm_config_tmp":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","npm_config_umask":"0000","npm_config_unicode":"","npm_config_unsafe_perm":"true","npm_config_update_notifier":"true","npm_config_usage":"","npm_config_user":"","npm_config_userconfig":"C:\\Users\\GEORGE\\.npmrc","npm_config_user_agent":"npm/6.13.4 node/v12.14.1 win32 x64","npm_config_version":"","npm_config_versions":"","npm_config_viewer":"browser","npm_execpath":"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"build","npm_lifecycle_script":"webpack --mode production","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_name":"Itua George Osagie","npm_package_bugs_url":"https://github.com/ituageorge/form_frontend/issues","npm_package_dependencies_axios":"^0.21.4","npm_package_dependencies_babel_polyfill":"^6.26.0","npm_package_dependencies_bootstrap":"^4.6.0","npm_package_dependencies_buffer":"^6.0.3","npm_package_dependencies_dotenv":"^10.0.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_moment":"^2.29.1","npm_package_dependencies_os_browserify":"^0.3.0","npm_package_dependencies_path_browserify":"^1.0.1","npm_package_dependencies_process":"^0.11.10","npm_package_dependencies_prop_types":"^15.7.2","npm_package_dependencies_react":"^16.14.0","npm_package_dependencies_react_dom":"^16.14.0","npm_package_dependencies_react_images_upload":"^1.2.8","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_regenerator_runtime":"^0.13.9","npm_package_dependencies_terser":"3.14.1","npm_package_dependencies_util":"^0.12.3","npm_package_dependencies_uuidv4":"^6.2.6","npm_package_description":"","npm_package_devDependencies_3":"^2.1.0","npm_package_devDependencies_aspect_ratio":"^2.1.1","npm_package_devDependencies_autoprefixer":"^10.4.0","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_css_loader":"^5.1.2","npm_package_devDependencies_html_webpack_plugin":"^5.3.1","npm_package_devDependencies_jquery":"^1.9.1","npm_package_devDependencies_line_clamp":"^1.0.0","npm_package_devDependencies_mini_css_extract_plugin":"^2.4.5","npm_package_devDependencies_popper_js":"^1.16.1","npm_package_devDependencies_postcss":"^8.4.5","npm_package_devDependencies_postcss_loader":"^6.2.1","npm_package_devDependencies_postcss_preset_env":"^7.0.1","npm_package_devDependencies_sass":"^1.32.8","npm_package_devDependencies_sass_loader":"^11.0.1","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_tailwindcss":"^3.0.1","npm_package_devDependencies_terser_webpack_plugin":"^5.3.0","npm_package_devDependencies_webpack":"^5.65.0","npm_package_devDependencies_webpack_cli":"^4.9.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__":"0.0.1","npm_package_devDependencies__babel_core":"^7.13.10","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.13.10","npm_package_devDependencies__babel_preset_env":"^7.13.10","npm_package_devDependencies__babel_preset_react":"^7.12.13","npm_package_devDependencies__tailwindcss_forms":"^0.4.0","npm_package_devDependencies__tailwindcss_typography":"^0.5.0","npm_package_homepage":"https://github.com/ituageorge/form_frontend#readme","npm_package_license":"ISC","npm_package_main":"index.js","npm_package_name":"form_frontend","npm_package_proxy":"http://localhost:4000","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"git+https://github.com/ituageorge/form_frontend.git","npm_package_scripts_build":"webpack --mode production","npm_package_scripts_dev":"webpack --mode development","npm_package_scripts_start":"webpack serve --open Chrome","npm_package_version":"1.0.0","NUMBER_OF_PROCESSORS":"4","OLDPWD":"C:/Users/GEORGE/Desktop/form_backend","OneDrive":"C:\\Users\\GEORGE\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PASS":"commana16_google","PATH":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin","Path":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC","PLINK_PROTOCOL":"ssh","PORT":"3000","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 61 Stepping 4, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"3d04","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PWD":"C:/Users/GEORGE/Desktop/form_backend/client","SECRET":"vhghfhgfhfgh8585hjfh4rhfhburhdbdudecf7rbshjb","SECRET_FOR_REFRESHTOKEN":"64ghfufy7rggfyfgfhfhfgfgfdgdffffdgfhhfhgjkgjgjgjj","SERVER_BASE_URL":"http://localhost:3000/users","SERVICE":"gmail","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\WINDOWS","TEMP":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","TERM":"cygwin","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.63.2","TMP":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","TOKEN_SECRET":"hgfhfbgdvdjdkdfhdvskfhgkd75759674hjf74rfufbdjm75","USER":"ituaosagie100@gmail.com","USERDOMAIN":"DESKTOP-UPSASPU","USERDOMAIN_ROAMINGPROFILE":"DESKTOP-UPSASPU","USERNAME":"GEORGE","USERPROFILE":"C:\\Users\\GEORGE","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-abe99bdde0-sock","WINDIR":"C:\\WINDOWS","_":"C:/Program Files/nodejs/node.exe","_prog":"node"}, key)) {
        {"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\GEORGE\\AppData\\Roaming","BASE_URL":"http://localhost:8080/#","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132419603691365447","ChocolateyToolsLocation":"C:\\tools","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_9816_GSNZCMHDIKCAYWYW","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"DESKTOP-UPSASPU","COMSPEC":"C:\\WINDOWS\\system32\\cmd.exe","DB_PASS":"george_12","DB_USER":"george_12","dp0":"C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin\\","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EMAIL_BASE_URL":"http://localhost:3000/#","EXEPATH":"C:\\Program Files\\Git\\bin","FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING":"Default","GIT_ASKPASS":"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\GEORGE","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\GEORGE","HOST":"smtp.gmail.com","INIT_CWD":"C:\\Users\\GEORGE\\Desktop\\form_backend\\client","LANG":"en_US.UTF-8","LOCALAPPDATA":"C:\\Users\\GEORGE\\AppData\\Local","LOGONSERVER":"\\\\DESKTOP-UPSASPU","MONGO_URL":"mongodb://localhost/formInMongoApp","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","npm_config_access":"","npm_config_allow_same_version":"","npm_config_also":"","npm_config_always_auth":"","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"run\",\"build\"]}","npm_config_audit":"true","npm_config_audit_level":"low","npm_config_auth_type":"legacy","npm_config_before":"","npm_config_bin_links":"true","npm_config_browser":"","npm_config_ca":"","npm_config_cache":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm-cache","npm_config_cache_lock_retries":"10","npm_config_cache_lock_stale":"60000","npm_config_cache_lock_wait":"10000","npm_config_cache_max":"Infinity","npm_config_cache_min":"10","npm_config_cafile":"","npm_config_cert":"","npm_config_cidr":"","npm_config_color":"true","npm_config_commit_hooks":"true","npm_config_depth":"Infinity","npm_config_description":"true","npm_config_dev":"","npm_config_dry_run":"","npm_config_editor":"notepad.exe","npm_config_engine_strict":"","npm_config_fetch_retries":"2","npm_config_fetch_retry_factor":"10","npm_config_fetch_retry_maxtimeout":"60000","npm_config_fetch_retry_mintimeout":"10000","npm_config_force":"","npm_config_format_package_lock":"true","npm_config_fund":"true","npm_config_git":"git","npm_config_git_tag_version":"true","npm_config_global":"","npm_config_globalconfig":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_globalignorefile":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm\\etc\\npmignore","npm_config_global_style":"","npm_config_group":"","npm_config_ham_it_up":"","npm_config_heading":"npm","npm_config_https_proxy":"","npm_config_if_present":"","npm_config_ignore_prepublish":"","npm_config_ignore_scripts":"","npm_config_init_author_email":"","npm_config_init_author_name":"","npm_config_init_author_url":"","npm_config_init_license":"ISC","npm_config_init_module":"C:\\Users\\GEORGE\\.npm-init.js","npm_config_init_version":"1.0.0","npm_config_json":"","npm_config_key":"","npm_config_legacy_bundling":"","npm_config_link":"","npm_config_local_address":"","npm_config_loglevel":"notice","npm_config_logs_max":"10","npm_config_long":"","npm_config_maxsockets":"50","npm_config_message":"%s","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_node_gyp":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_node_options":"","npm_config_node_version":"12.14.1","npm_config_noproxy":"","npm_config_offline":"","npm_config_onload_script":"","npm_config_only":"","npm_config_optional":"true","npm_config_otp":"","npm_config_package_lock":"true","npm_config_package_lock_only":"","npm_config_parseable":"","npm_config_prefer_offline":"","npm_config_prefer_online":"","npm_config_prefix":"C:\\Users\\GEORGE\\AppData\\Roaming\\npm","npm_config_preid":"","npm_config_production":"","npm_config_progress":"true","npm_config_proxy":"","npm_config_read_only":"","npm_config_rebuild_bundle":"true","npm_config_registry":"https://registry.npmjs.org/","npm_config_rollback":"true","npm_config_save":"true","npm_config_save_bundle":"","npm_config_save_dev":"","npm_config_save_exact":"","npm_config_save_optional":"","npm_config_save_prefix":"^","npm_config_save_prod":"","npm_config_scope":"","npm_config_scripts_prepend_node_path":"warn-only","npm_config_script_shell":"","npm_config_searchexclude":"","npm_config_searchlimit":"20","npm_config_searchopts":"","npm_config_searchstaleness":"900","npm_config_send_metrics":"","npm_config_shell":"C:\\WINDOWS\\system32\\cmd.exe","npm_config_shrinkwrap":"true","npm_config_sign_git_commit":"","npm_config_sign_git_tag":"","npm_config_sso_poll_frequency":"500","npm_config_sso_type":"oauth","npm_config_strict_ssl":"true","npm_config_tag":"latest","npm_config_tag_version_prefix":"v","npm_config_timing":"","npm_config_tmp":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","npm_config_umask":"0000","npm_config_unicode":"","npm_config_unsafe_perm":"true","npm_config_update_notifier":"true","npm_config_usage":"","npm_config_user":"","npm_config_userconfig":"C:\\Users\\GEORGE\\.npmrc","npm_config_user_agent":"npm/6.13.4 node/v12.14.1 win32 x64","npm_config_version":"","npm_config_versions":"","npm_config_viewer":"browser","npm_execpath":"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"build","npm_lifecycle_script":"webpack --mode production","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_name":"Itua George Osagie","npm_package_bugs_url":"https://github.com/ituageorge/form_frontend/issues","npm_package_dependencies_axios":"^0.21.4","npm_package_dependencies_babel_polyfill":"^6.26.0","npm_package_dependencies_bootstrap":"^4.6.0","npm_package_dependencies_buffer":"^6.0.3","npm_package_dependencies_dotenv":"^10.0.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_moment":"^2.29.1","npm_package_dependencies_os_browserify":"^0.3.0","npm_package_dependencies_path_browserify":"^1.0.1","npm_package_dependencies_process":"^0.11.10","npm_package_dependencies_prop_types":"^15.7.2","npm_package_dependencies_react":"^16.14.0","npm_package_dependencies_react_dom":"^16.14.0","npm_package_dependencies_react_images_upload":"^1.2.8","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_regenerator_runtime":"^0.13.9","npm_package_dependencies_terser":"3.14.1","npm_package_dependencies_util":"^0.12.3","npm_package_dependencies_uuidv4":"^6.2.6","npm_package_description":"","npm_package_devDependencies_3":"^2.1.0","npm_package_devDependencies_aspect_ratio":"^2.1.1","npm_package_devDependencies_autoprefixer":"^10.4.0","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_css_loader":"^5.1.2","npm_package_devDependencies_html_webpack_plugin":"^5.3.1","npm_package_devDependencies_jquery":"^1.9.1","npm_package_devDependencies_line_clamp":"^1.0.0","npm_package_devDependencies_mini_css_extract_plugin":"^2.4.5","npm_package_devDependencies_popper_js":"^1.16.1","npm_package_devDependencies_postcss":"^8.4.5","npm_package_devDependencies_postcss_loader":"^6.2.1","npm_package_devDependencies_postcss_preset_env":"^7.0.1","npm_package_devDependencies_sass":"^1.32.8","npm_package_devDependencies_sass_loader":"^11.0.1","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_tailwindcss":"^3.0.1","npm_package_devDependencies_terser_webpack_plugin":"^5.3.0","npm_package_devDependencies_webpack":"^5.65.0","npm_package_devDependencies_webpack_cli":"^4.9.1","npm_package_devDependencies_webpack_dev_server":"^3.11.2","npm_package_devDependencies__":"0.0.1","npm_package_devDependencies__babel_core":"^7.13.10","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.13.10","npm_package_devDependencies__babel_preset_env":"^7.13.10","npm_package_devDependencies__babel_preset_react":"^7.12.13","npm_package_devDependencies__tailwindcss_forms":"^0.4.0","npm_package_devDependencies__tailwindcss_typography":"^0.5.0","npm_package_homepage":"https://github.com/ituageorge/form_frontend#readme","npm_package_license":"ISC","npm_package_main":"index.js","npm_package_name":"form_frontend","npm_package_proxy":"http://localhost:4000","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"git+https://github.com/ituageorge/form_frontend.git","npm_package_scripts_build":"webpack --mode production","npm_package_scripts_dev":"webpack --mode development","npm_package_scripts_start":"webpack serve --open Chrome","npm_package_version":"1.0.0","NUMBER_OF_PROCESSORS":"4","OLDPWD":"C:/Users/GEORGE/Desktop/form_backend","OneDrive":"C:\\Users\\GEORGE\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PASS":"commana16_google","PATH":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin","Path":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;C:\\Users\\GEORGE\\Desktop\\form_backend\\client\\node_modules\\.bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\GEORGE\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python27;C:\\Python27\\Scripts;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\MongoDB\\Server\\4.2\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\heroku\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\npm;C:\\tools\\dart-sdk\\bin;C:\\Users\\GEORGE\\AppData\\Roaming\\Pub\\Cache\\bin;C:\\Users\\GEORGE\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\GEORGE\\AppData\\Local\\GitHubDesktop\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC","PLINK_PROTOCOL":"ssh","PORT":"3000","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 61 Stepping 4, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"3d04","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PWD":"C:/Users/GEORGE/Desktop/form_backend/client","SECRET":"vhghfhgfhfgh8585hjfh4rhfhburhdbdudecf7rbshjb","SECRET_FOR_REFRESHTOKEN":"64ghfufy7rggfyfgfhfhfgfgfdgdffffdgfhhfhgjkgjgjgjj","SERVER_BASE_URL":"http://localhost:3000/users","SERVICE":"gmail","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\WINDOWS","TEMP":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","TERM":"cygwin","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.63.2","TMP":"C:\\Users\\GEORGE\\AppData\\Local\\Temp","TOKEN_SECRET":"hgfhfbgdvdjdkdfhdvskfhgkd75759674hjf74rfufbdjm75","USER":"ituaosagie100@gmail.com","USERDOMAIN":"DESKTOP-UPSASPU","USERDOMAIN_ROAMINGPROFILE":"DESKTOP-UPSASPU","USERNAME":"GEORGE","USERPROFILE":"C:\\Users\\GEORGE","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\GEORGE\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-abe99bdde0-sock","WINDIR":"C:\\WINDOWS","_":"C:/Program Files/nodejs/node.exe","_prog":"node"}[key] = parsed[key]
      } else if (debug) {
        log(`"${key}" is already defined in \`process.env\` and will not be overwritten`)
      }
    })

    return { parsed }
  } catch (e) {
    return { error: e }
  }
}

module.exports.config = config
module.exports.parse = parse


/***/ }),

/***/ 7435:
/***/ ((__unused_webpack_module, exports) => {

exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};


/***/ }),

/***/ 6470:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(4155);
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47 /*/*/)
      break;
    else
      code = 47 /*/*/;
    if (code === 47 /*/*/) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/');
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = '';
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += '/..';
          else
            res = '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += '/' + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 /*.*/ && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === undefined)
          cwd = process.cwd();
        path = cwd;
      }

      assertPath(path);

      // Skip empty entries
      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return '/' + resolvedPath;
      else
        return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },

  normalize: function normalize(path) {
    assertPath(path);

    if (path.length === 0) return '.';

    var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';

    if (isAbsolute) return '/' + path;
    return path;
  },

  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
  },

  join: function join() {
    if (arguments.length === 0)
      return '.';
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += '/' + arg;
      }
    }
    if (joined === undefined)
      return '.';
    return posix.normalize(joined);
  },

  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);

    if (from === to) return '';

    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) return '';

    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47 /*/*/)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;

    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47 /*/*/)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47 /*/*/) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47 /*/*/)
        lastCommonSep = i;
    }

    var out = '';
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
        if (out.length === 0)
          out += '..';
        else
          out += '/..';
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47 /*/*/)
        ++toStart;
      return to.slice(toStart);
    }
  },

  _makeLong: function _makeLong(path) {
    return path;
  },

  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47 /*/*/;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },

  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return '';
      return path.slice(start, end);
    }
  },

  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }
    return path.slice(startDot, end);
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format('/', pathObject);
  },

  parse: function parse(path) {
    assertPath(path);

    var ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47 /*/*/;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
    // We saw a non-dot character immediately before the dot
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

    return ret;
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};

posix.posix = posix;

module.exports = posix;


/***/ })

}]);