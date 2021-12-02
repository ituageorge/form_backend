(self.webpackChunkform_frontend = self.webpackChunkform_frontend || []).push([
  [672],
  {
    672: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { default: () => i });
      var n = r(7294),
        o = r(2487),
        a = r(5513),
        s = r(9669),
        c = r.n(s);
      function l(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
              var r = [],
                n = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var s, c = e[Symbol.iterator]();
                  !(n = (s = c.next()).done) &&
                  (r.push(s.value), !t || r.length !== t);
                  n = !0
                );
              } catch (e) {
                (o = !0), (a = e);
              } finally {
                try {
                  n || null == c.return || c.return();
                } finally {
                  if (o) throw a;
                }
              }
              return r;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return u(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(e)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? u(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      r(5666);
      var m = 'https://form-exam.herokuapp.com/#/login';
      function i() {
        var e = l((0, n.useState)(''), 2),
          t = e[0],
          r = e[1],
          s = l((0, n.useState)(''), 2),
          u = s[0],
          i = s[1],
          f = l((0, n.useState)(!1), 2),
          p = f[0],
          h = f[1],
          d = (0, o.k6)();
        return n.createElement(
          'div',
          { className: 'row no-gutters' },
          n.createElement(
            'div',
            { className: 'col  pt-3' },
            n.createElement(
              'h1',
              { className: 'font-weight-bold' },
              'Exam Time Application',
            ),
            n.createElement('h4', null, 'Sign into your account'),
            n.createElement(
              'form',
              {
                name: 'form row',
                onSubmit: function (e) {
                  e.preventDefault(),
                    h(!0),
                    c()
                      .post(''.concat(m, '/login'), {
                        username: t,
                        password: u,
                      })
                      .then(
                        function (e) {
                          if ((console.log('response111111', e), e)) {
                            var t = e.data,
                              r = t.accessToken,
                              n = t.refreshToken,
                              o = t.findLoginUser;
                            localStorage.setItem('accessToken', r),
                              localStorage.setItem('refreshToken', n),
                              d.push({ pathname: '/', findLoginUser: o });
                          }
                          return e;
                        },
                        function (e) {
                          e.response
                            ? console.log('errorRes', e.response)
                            : e.request
                            ? console.log('errorReq', e.request)
                            : console.log('eeeror', e);
                        },
                      );
                },
              },
              n.createElement(
                'div',
                { className: ' col' + (p && !t ? ' has-error' : '') },
                n.createElement('label', { htmlFor: 'username' }, 'Username'),
                n.createElement('input', {
                  type: 'text',
                  placeholder: 'Username',
                  className: 'form-control my-3 p-4',
                  name: 'username',
                  value: t,
                  onChange: function (e) {
                    return r(e.target.value);
                  },
                }),
                p &&
                  !t &&
                  n.createElement(
                    'div',
                    { className: 'help-block' },
                    'Username is required',
                  ),
              ),
              n.createElement(
                'div',
                { className: 'form-group col' + (p && !t ? ' has-error' : '') },
                n.createElement('label', { htmlFor: 'username' }, 'Password'),
                n.createElement('input', {
                  type: 'password',
                  placeholder: 'Password',
                  className: 'form-control my-3 p-4',
                  name: 'password',
                  value: u,
                  onChange: function (e) {
                    return i(e.target.value);
                  },
                }),
                p &&
                  !u &&
                  n.createElement(
                    'div',
                    { className: 'help-block' },
                    'Password is required',
                  ),
              ),
              n.createElement(
                'div',
                { className: 'form-row col' },
                n.createElement(
                  'button',
                  { className: 'btn1 btn1 mt-3 mb-5' },
                  ' ',
                  n.createElement('span', { className: 'buttonText' }, 'Login'),
                  ' ',
                ),
              ),
              n.createElement(
                a.rU,
                { to: '/recover/password' },
                'Forgot password?',
              ),
              n.createElement(
                'p',
                null,
                "Don't have an account?",
                n.createElement(a.rU, { to: '/register' }, 'Register here'),
              ),
            ),
          ),
        );
      }
      c().interceptors.request.use(
        function (e) {
          var t = localStorage.getItem('accessToken');
          return t && (e.headers['x-auth-token'] = t), e;
        },
        function (e) {
          Promise.reject(e);
        },
      ),
        c().interceptors.response.use(
          function (e) {
            return e;
          },
          function (e) {
            var t = e.config,
              r = localStorage.getItem('refreshToken');
            return r && 401 === e.response.status && !t._retry
              ? ((t._retry = !0),
                c()
                  .post(''.concat(m, '/refresh_token'), { refreshToken: r })
                  .then(function (e) {
                    if (200 === e.status)
                      return (
                        localStorage.setItem('accessToken', e.data.accessToken),
                        console.log('Access token refreshed!'),
                        c()(t)
                      );
                  }))
              : Promise.reject(e);
          },
        );
    },
  },
]);
