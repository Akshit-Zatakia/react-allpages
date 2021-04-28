module.exports = (function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 10))
  );
})([
  function (e, t) {
    e.exports = require("react");
  },
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      return (r =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function o(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        r(e, t);
    }
    n.d(t, "a", function () {
      return o;
    });
  },
  function (e, t, n) {
    e.exports = n(15)();
  },
  ,
  function (e, t, n) {
    "use strict";
    (function (e) {
      var r = n(0),
        o = n.n(r),
        i = n(1),
        a = n(2),
        u = n.n(a),
        c =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== e
            ? e
            : {};
      function l(e) {
        var t = [];
        return {
          on: function (e) {
            t.push(e);
          },
          off: function (e) {
            t = t.filter(function (t) {
              return t !== e;
            });
          },
          get: function () {
            return e;
          },
          set: function (n, r) {
            (e = n),
              t.forEach(function (t) {
                return t(e, r);
              });
          },
        };
      }
      var s =
        o.a.createContext ||
        function (e, t) {
          var n,
            o,
            a,
            s =
              "__create-react-context-" +
              ((c[(a = "__global_unique_id__")] = (c[a] || 0) + 1) + "__"),
            f = (function (e) {
              function n() {
                var t;
                return (
                  ((t = e.apply(this, arguments) || this).emitter = l(
                    t.props.value
                  )),
                  t
                );
              }
              Object(i.a)(n, e);
              var r = n.prototype;
              return (
                (r.getChildContext = function () {
                  var e;
                  return ((e = {})[s] = this.emitter), e;
                }),
                (r.componentWillReceiveProps = function (e) {
                  if (this.props.value !== e.value) {
                    var n,
                      r = this.props.value,
                      o = e.value;
                    (
                      (i = r) === (a = o)
                        ? 0 !== i || 1 / i == 1 / a
                        : i != i && a != a
                    )
                      ? (n = 0)
                      : ((n = "function" == typeof t ? t(r, o) : 1073741823),
                        0 !== (n |= 0) && this.emitter.set(e.value, n));
                  }
                  var i, a;
                }),
                (r.render = function () {
                  return this.props.children;
                }),
                n
              );
            })(r.Component);
          f.childContextTypes = (((n = {})[s] = u.a.object.isRequired), n);
          var d = (function (t) {
            function n() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).state = {
                  value: e.getValue(),
                }),
                (e.onUpdate = function (t, n) {
                  0 != ((0 | e.observedBits) & n) &&
                    e.setState({ value: e.getValue() });
                }),
                e
              );
            }
            Object(i.a)(n, t);
            var r = n.prototype;
            return (
              (r.componentWillReceiveProps = function (e) {
                var t = e.observedBits;
                this.observedBits = null == t ? 1073741823 : t;
              }),
              (r.componentDidMount = function () {
                this.context[s] && this.context[s].on(this.onUpdate);
                var e = this.props.observedBits;
                this.observedBits = null == e ? 1073741823 : e;
              }),
              (r.componentWillUnmount = function () {
                this.context[s] && this.context[s].off(this.onUpdate);
              }),
              (r.getValue = function () {
                return this.context[s] ? this.context[s].get() : e;
              }),
              (r.render = function () {
                return ((e = this.props.children), Array.isArray(e) ? e[0] : e)(
                  this.state.value
                );
                var e;
              }),
              n
            );
          })(r.Component);
          return (
            (d.contextTypes = (((o = {})[s] = u.a.object), o)),
            { Provider: f, Consumer: d }
          );
        };
      t.a = s;
    }.call(this, n(19)));
  },
  function (e, t, n) {
    var r = n(20);
    (e.exports = p),
      (e.exports.parse = i),
      (e.exports.compile = function (e, t) {
        return u(i(e, t), t);
      }),
      (e.exports.tokensToFunction = u),
      (e.exports.tokensToRegExp = d);
    var o = new RegExp(
      [
        "(\\\\.)",
        "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
      ].join("|"),
      "g"
    );
    function i(e, t) {
      for (
        var n, r = [], i = 0, a = 0, u = "", s = (t && t.delimiter) || "/";
        null != (n = o.exec(e));

      ) {
        var f = n[0],
          d = n[1],
          p = n.index;
        if (((u += e.slice(a, p)), (a = p + f.length), d)) u += d[1];
        else {
          var h = e[a],
            v = n[2],
            m = n[3],
            y = n[4],
            g = n[5],
            b = n[6],
            w = n[7];
          u && (r.push(u), (u = ""));
          var x = null != v && null != h && h !== v,
            C = "+" === b || "*" === b,
            E = "?" === b || "*" === b,
            P = n[2] || s,
            O = y || g;
          r.push({
            name: m || i++,
            prefix: v || "",
            delimiter: P,
            optional: E,
            repeat: C,
            partial: x,
            asterisk: !!w,
            pattern: O ? l(O) : w ? ".*" : "[^" + c(P) + "]+?",
          });
        }
      }
      return a < e.length && (u += e.substr(a)), u && r.push(u), r;
    }
    function a(e) {
      return encodeURI(e).replace(/[\/?#]/g, function (e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function u(e, t) {
      for (var n = new Array(e.length), o = 0; o < e.length; o++)
        "object" == typeof e[o] &&
          (n[o] = new RegExp("^(?:" + e[o].pattern + ")$", f(t)));
      return function (t, o) {
        for (
          var i = "",
            u = t || {},
            c = (o || {}).pretty ? a : encodeURIComponent,
            l = 0;
          l < e.length;
          l++
        ) {
          var s = e[l];
          if ("string" != typeof s) {
            var f,
              d = u[s.name];
            if (null == d) {
              if (s.optional) {
                s.partial && (i += s.prefix);
                continue;
              }
              throw new TypeError('Expected "' + s.name + '" to be defined');
            }
            if (r(d)) {
              if (!s.repeat)
                throw new TypeError(
                  'Expected "' +
                    s.name +
                    '" to not repeat, but received `' +
                    JSON.stringify(d) +
                    "`"
                );
              if (0 === d.length) {
                if (s.optional) continue;
                throw new TypeError(
                  'Expected "' + s.name + '" to not be empty'
                );
              }
              for (var p = 0; p < d.length; p++) {
                if (((f = c(d[p])), !n[l].test(f)))
                  throw new TypeError(
                    'Expected all "' +
                      s.name +
                      '" to match "' +
                      s.pattern +
                      '", but received `' +
                      JSON.stringify(f) +
                      "`"
                  );
                i += (0 === p ? s.prefix : s.delimiter) + f;
              }
            } else {
              if (
                ((f = s.asterisk
                  ? encodeURI(d).replace(/[?#]/g, function (e) {
                      return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                    })
                  : c(d)),
                !n[l].test(f))
              )
                throw new TypeError(
                  'Expected "' +
                    s.name +
                    '" to match "' +
                    s.pattern +
                    '", but received "' +
                    f +
                    '"'
                );
              i += s.prefix + f;
            }
          } else i += s;
        }
        return i;
      };
    }
    function c(e) {
      return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
    }
    function l(e) {
      return e.replace(/([=!:$\/()])/g, "\\$1");
    }
    function s(e, t) {
      return (e.keys = t), e;
    }
    function f(e) {
      return e && e.sensitive ? "" : "i";
    }
    function d(e, t, n) {
      r(t) || ((n = t || n), (t = []));
      for (
        var o = (n = n || {}).strict, i = !1 !== n.end, a = "", u = 0;
        u < e.length;
        u++
      ) {
        var l = e[u];
        if ("string" == typeof l) a += c(l);
        else {
          var d = c(l.prefix),
            p = "(?:" + l.pattern + ")";
          t.push(l),
            l.repeat && (p += "(?:" + d + p + ")*"),
            (a += p = l.optional
              ? l.partial
                ? d + "(" + p + ")?"
                : "(?:" + d + "(" + p + "))?"
              : d + "(" + p + ")");
        }
      }
      var h = c(n.delimiter || "/"),
        v = a.slice(-h.length) === h;
      return (
        o || (a = (v ? a.slice(0, -h.length) : a) + "(?:" + h + "(?=$))?"),
        (a += i ? "$" : o && v ? "" : "(?=" + h + "|$)"),
        s(new RegExp("^" + a, f(n)), t)
      );
    }
    function p(e, t, n) {
      return (
        r(t) || ((n = t || n), (t = [])),
        (n = n || {}),
        e instanceof RegExp
          ? (function (e, t) {
              var n = e.source.match(/\((?!\?)/g);
              if (n)
                for (var r = 0; r < n.length; r++)
                  t.push({
                    name: r,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    asterisk: !1,
                    pattern: null,
                  });
              return s(e, t);
            })(e, t)
          : r(e)
          ? (function (e, t, n) {
              for (var r = [], o = 0; o < e.length; o++)
                r.push(p(e[o], t, n).source);
              return s(new RegExp("(?:" + r.join("|") + ")", f(n)), t);
            })(e, t, n)
          : (function (e, t, n) {
              return d(i(e, n), t, n);
            })(e, t, n)
      );
    }
  },
  function (e, t, n) {
    var r = n(12),
      o = n(13);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[e.i, o, ""]]);
    var i = { insert: "head", singleton: !1 };
    r(o, i);
    e.exports = o.locals || {};
  },
  function (e, t, n) {
    "use strict";
    e.exports = n(21);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(n(0)),
      o = i(n(2));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e) {
      var t = e.color,
        n = e.bgColor,
        o = e.text,
        i = e.onBtnClick,
        a = e.elevation;
      return r.default.createElement(
        "button",
        {
          style: {
            color: t || "white",
            backgroundColor: n || "red",
            border: "none",
            padding: 10,
            borderRadius: 8,
            fontWeight: "bold",
            fontSize: "1em",
            margin: 10,
            cursor: "pointer",
            boxShadow: a
              ? "0 4px 8px 0 rgba(0,0,0," + a + ")"
              : "0 4px 8px 0 rgba(0,0,0,0.2)",
          },
          onClick: function (e) {
            return i(e);
          },
        },
        o
      );
    }
    (a.propTypes = {
      color: o.default.string,
      bgColor: o.default.string,
      text: o.default.string.isRequired,
      elevation: o.default.number,
      onBtnClick: o.default.func,
    }),
      (t.default = a);
  },
  function (e, t, n) {
    "use strict";
    var r = n(7),
      o = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      i = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      a = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
      },
      u = {};
    function c(e) {
      return r.isMemo(e) ? a : u[e.$$typeof] || o;
    }
    (u[r.ForwardRef] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
      (u[r.Memo] = a);
    var l = Object.defineProperty,
      s = Object.getOwnPropertyNames,
      f = Object.getOwnPropertySymbols,
      d = Object.getOwnPropertyDescriptor,
      p = Object.getPrototypeOf,
      h = Object.prototype;
    e.exports = function e(t, n, r) {
      if ("string" != typeof n) {
        if (h) {
          var o = p(n);
          o && o !== h && e(t, o, r);
        }
        var a = s(n);
        f && (a = a.concat(f(n)));
        for (var u = c(t), v = c(n), m = 0; m < a.length; ++m) {
          var y = a[m];
          if (!(i[y] || (r && r[y]) || (v && v[y]) || (u && u[y]))) {
            var g = d(n, y);
            try {
              l(t, y, g);
            } catch (e) {}
          }
        }
      }
      return t;
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Button = t.HomeOne = t.LoginPage = t.RegisterPage = void 0);
    var r = u(n(11)),
      o = u(n(17)),
      i = u(n(18)),
      a = u(n(8));
    u(n(0));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.RegisterPage = r.default),
      (t.LoginPage = o.default),
      (t.HomeOne = i.default),
      (t.Button = a.default);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), n(6);
    var r = i(n(2)),
      o = i(n(0));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e) {
      var t = e.cardColor,
        n = e.headTextColor,
        r = e.borderColor,
        i = e.emailHolder,
        a = e.passwordHolder,
        u = e.fnmHolder,
        c = e.lnmHolder,
        l = e.fnmValue,
        s = e.lnmValue,
        f = e.fnmChange,
        d = e.lnmChange,
        p = e.buttonColor,
        h = e.emailValue,
        v = e.passwordValue,
        m = e.emailChange,
        y = e.passwordChange,
        g = e.onBtnClick,
        b = e.cardWidth,
        w = e.cardHeight,
        x = /\S+@\S+\.\S+/;
      return o.default.createElement(
        "div",
        {
          className: "card-container",
          style: {
            backgroundColor: t || "white",
            borderColor: t || "white",
            width: b || "60vh",
            height: w || "",
          },
        },
        o.default.createElement(
          "h3",
          { style: { margin: 10, color: n || "skyblue" } },
          "Register"
        ),
        o.default.createElement("input", {
          style: {
            margin: 10,
            borderRadius: 5,
            borderColor: r || "skyblue",
            borderWidth: 1,
            padding: 8,
          },
          placeholder: u || "Enter First Name",
          value: l,
          onChange: function (e) {
            f(e.target.value);
          },
          required: !0,
        }),
        o.default.createElement("input", {
          style: {
            margin: 10,
            borderRadius: 5,
            borderColor: r || "skyblue",
            borderWidth: 1,
            padding: 8,
          },
          placeholder: c || "Enter Last Name",
          value: s,
          onChange: function (e) {
            d(e.target.value);
          },
          required: !0,
        }),
        o.default.createElement("input", {
          style: {
            margin: 10,
            borderRadius: 5,
            borderColor: r || "skyblue",
            borderWidth: 1,
            padding: 8,
          },
          placeholder: i || "Enter the email",
          type: "email",
          value: h,
          onChange: function (e) {
            m(e.target.value), (h = e.target.value);
          },
          required: !0,
        }),
        o.default.createElement("input", {
          style: {
            margin: 10,
            borderRadius: 5,
            borderColor: r || "skyblue",
            borderWidth: 1,
            padding: 8,
          },
          type: "password",
          placeholder: a || "Enter the password",
          value: v,
          onChange: function (e) {
            return y(e.target.value);
          },
          required: !0,
        }),
        o.default.createElement(
          "button",
          {
            type: "submit",
            style: {
              backgroundColor: p || "skyblue",
              borderRadius: 10,
              border: "none",
              margin: 10,
              marginBottom: 16,
              padding: 8,
              color: "white",
              cursor: "pointer",
            },
            onClick: function (e) {
              var t;
              e.preventDefault(),
                h && v && l && s
                  ? ((t = h),
                    x.test(t) ? g(e) : alert("Please enter valid email"))
                  : alert("Please fill all fields.");
            },
          },
          "Login"
        )
      );
    }
    (a.propTypes = {
      headTextColor: r.default.string,
      cardColor: r.default.string,
      borderColor: r.default.string,
      emailHolder: r.default.string,
      passwordHolder: r.default.string,
      buttonColor: r.default.string,
      cardWidth: r.default.number,
      fnmHolder: r.default.string,
      lnmHolder: r.default.string,
      fnmValue: r.default.string.isRequired,
      lnmValue: r.default.string.isRequired,
      fnmChange: r.default.func.isRequired,
      lnmChange: r.default.func.isRequired,
      emailChange: r.default.func.isRequired,
      emailValue: r.default.string.isRequired,
      passwordValue: r.default.string.isRequired,
      passwordChange: r.default.func.isRequired,
      onBtnClick: r.default.func.isRequired,
    }),
      (t.default = a);
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      i = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      a = [];
    function u(e) {
      for (var t = -1, n = 0; n < a.length; n++)
        if (a[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function c(e, t) {
      for (var n = {}, r = [], o = 0; o < e.length; o++) {
        var i = e[o],
          c = t.base ? i[0] + t.base : i[0],
          l = n[c] || 0,
          s = "".concat(c, " ").concat(l);
        n[c] = l + 1;
        var f = u(s),
          d = { css: i[1], media: i[2], sourceMap: i[3] };
        -1 !== f
          ? (a[f].references++, a[f].updater(d))
          : a.push({ identifier: s, updater: m(d, t), references: 1 }),
          r.push(s);
      }
      return r;
    }
    function l(e) {
      var t = document.createElement("style"),
        r = e.attributes || {};
      if (void 0 === r.nonce) {
        var o = n.nc;
        o && (r.nonce = o);
      }
      if (
        (Object.keys(r).forEach(function (e) {
          t.setAttribute(e, r[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var a = i(e.insert || "head");
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(t);
      }
      return t;
    }
    var s,
      f =
        ((s = []),
        function (e, t) {
          return (s[e] = t), s.filter(Boolean).join("\n");
        });
    function d(e, t, n, r) {
      var o = n
        ? ""
        : r.media
        ? "@media ".concat(r.media, " {").concat(r.css, "}")
        : r.css;
      if (e.styleSheet) e.styleSheet.cssText = f(t, o);
      else {
        var i = document.createTextNode(o),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
    function p(e, t, n) {
      var r = n.css,
        o = n.media,
        i = n.sourceMap;
      if (
        (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
        i &&
          "undefined" != typeof btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var h = null,
      v = 0;
    function m(e, t) {
      var n, r, o;
      if (t.singleton) {
        var i = v++;
        (n = h || (h = l(t))),
          (r = d.bind(null, n, i, !1)),
          (o = d.bind(null, n, i, !0));
      } else
        (n = l(t)),
          (r = p.bind(null, n, t)),
          (o = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else o();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = o());
      var n = c((e = e || []), t);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var r = 0; r < n.length; r++) {
            var o = u(n[r]);
            a[o].references--;
          }
          for (var i = c(e, t), l = 0; l < n.length; l++) {
            var s = u(n[l]);
            0 === a[s].references && (a[s].updater(), a.splice(s, 1));
          }
          n = i;
        }
      };
    };
  },
  function (e, t, n) {
    (t = n(14)(!1)).push([
      e.i,
      ".card-container {\r\n  display: flex;\r\n  border-radius: 20px;\r\n  transition: 40%;\r\n  border-width: 2;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  flex-direction: column;\r\n  padding: 20;\r\n  margin: 10;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n.overlay {\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  position: absolute;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.sub-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n",
      "",
    ]),
      (e.exports = t);
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa) {
                var o =
                    ((a = r),
                    (u = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      u
                    )),
                    "/*# ".concat(c, " */")),
                  i = r.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [n].concat(i).concat([o]).join("\n");
              }
              var a, u, c;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function (e, n, r) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var o = {};
          if (r)
            for (var i = 0; i < this.length; i++) {
              var a = this[i][0];
              null != a && (o[a] = !0);
            }
          for (var u = 0; u < e.length; u++) {
            var c = [].concat(e[u]);
            (r && o[c[0]]) ||
              (n &&
                (c[2]
                  ? (c[2] = "".concat(n, " and ").concat(c[2]))
                  : (c[2] = n)),
              t.push(c));
          }
        }),
        t
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(16);
    function o() {}
    function i() {}
    (i.resetWarningCache = o),
      (e.exports = function () {
        function e(e, t, n, o, i, a) {
          if (a !== r) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((u.name = "Invariant Violation"), u);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: i,
          resetWarningCache: o,
        };
        return (n.PropTypes = n), n;
      });
  },
  function (e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), n(6);
    var r = i(n(2)),
      o = i(n(0));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e) {
      var t = e.cardColor,
        n = e.headTextColor,
        r = e.borderColor,
        i = e.emailHolder,
        a = e.passwordHolder,
        u = e.buttonColor,
        c = e.emailValue,
        l = e.passwordValue,
        s = e.emailChange,
        f = e.passwordChange,
        d = e.onBtnClick,
        p = e.cardWidth,
        h = e.cardHeight,
        v = /\S+@\S+\.\S+/;
      return o.default.createElement(
        "div",
        {
          className: "card-container",
          style: {
            backgroundColor: t || "white",
            borderColor: t || "white",
            width: p || "60vh",
            height: h || "",
          },
        },
        o.default.createElement(
          "h3",
          { style: { margin: 10, color: n || "skyblue" } },
          "Login"
        ),
        o.default.createElement("input", {
          style: {
            margin: 10,
            borderRadius: 5,
            borderColor: r || "skyblue",
            borderWidth: 1,
            padding: 8,
          },
          placeholder: i || "Enter the email",
          type: "email",
          value: c,
          onChange: function (e) {
            s(e.target.value), (c = e.target.value);
          },
          required: !0,
        }),
        o.default.createElement("input", {
          style: {
            margin: 10,
            borderRadius: 5,
            borderColor: r || "skyblue",
            borderWidth: 1,
            padding: 8,
          },
          type: "password",
          placeholder: a || "Enter the password",
          value: l,
          onChange: function (e) {
            return f(e.target.value);
          },
          required: !0,
        }),
        o.default.createElement(
          "button",
          {
            type: "submit",
            style: {
              backgroundColor: u || "skyblue",
              borderRadius: 10,
              border: "none",
              margin: 10,
              marginBottom: 16,
              padding: 8,
              color: "white",
              cursor: "pointer",
            },
            onClick: function (e) {
              var t;
              e.preventDefault(),
                c && l
                  ? ((t = c),
                    v.test(t) ? d(e) : alert("Please enter valid email"))
                  : alert("Please fill all fields.");
            },
          },
          "Login"
        )
      );
    }
    (a.propTypes = {
      headTextColor: r.default.string,
      cardColor: r.default.string,
      borderColor: r.default.string,
      emailHolder: r.default.string,
      passwordHolder: r.default.string,
      buttonColor: r.default.string,
      cardWidth: r.default.number,
      emailChange: r.default.func.isRequired,
      emailValue: r.default.string.isRequired,
      passwordValue: r.default.string.isRequired,
      passwordChange: r.default.func.isRequired,
      onBtnClick: r.default.func.isRequired,
    }),
      (t.default = a);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = u(n(0)),
      o = n(22),
      i = u(n(8)),
      a = u(n(2));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function c(e) {
      var t = e.text,
        n = e.buttons,
        a = e.color,
        u = e.bgImage,
        c = e.bgColor;
      return r.default.createElement(
        "div",
        {
          style: {
            maxHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            alignItems: "center",
            justifyContent: "center",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: "url(" + u + ")",
            backgroundColor: c || u ? c : "black",
            backgroundRepeat: "no-repeat",
          },
        },
        r.default.createElement(
          "h1",
          { style: { color: a, fontStyle: "italic", fontSize: "3em" } },
          t || "Welcome to react-allpages"
        ),
        r.default.createElement(
          "div",
          { style: { display: "flex", flexDirection: "row" } },
          n &&
            n.map(function (e) {
              return r.default.createElement(
                o.Link,
                { to: e.link },
                r.default.createElement(i.default, {
                  text: e.name,
                  color: e.color,
                  bgColor: e.backgroundColor,
                })
              );
            })
        )
      );
    }
    (c.propTypes = {
      text: a.default.string,
      color: a.default.string,
      bgImage: a.default.string,
      bgColor: a.default.string,
      buttons: a.default.array,
    }),
      (t.default = c);
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t) {
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == Object.prototype.toString.call(e);
      };
  },
  function (e, t, n) {
    "use strict";
    /** @license React v16.13.1
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = "function" == typeof Symbol && Symbol.for,
      o = r ? Symbol.for("react.element") : 60103,
      i = r ? Symbol.for("react.portal") : 60106,
      a = r ? Symbol.for("react.fragment") : 60107,
      u = r ? Symbol.for("react.strict_mode") : 60108,
      c = r ? Symbol.for("react.profiler") : 60114,
      l = r ? Symbol.for("react.provider") : 60109,
      s = r ? Symbol.for("react.context") : 60110,
      f = r ? Symbol.for("react.async_mode") : 60111,
      d = r ? Symbol.for("react.concurrent_mode") : 60111,
      p = r ? Symbol.for("react.forward_ref") : 60112,
      h = r ? Symbol.for("react.suspense") : 60113,
      v = r ? Symbol.for("react.suspense_list") : 60120,
      m = r ? Symbol.for("react.memo") : 60115,
      y = r ? Symbol.for("react.lazy") : 60116,
      g = r ? Symbol.for("react.block") : 60121,
      b = r ? Symbol.for("react.fundamental") : 60117,
      w = r ? Symbol.for("react.responder") : 60118,
      x = r ? Symbol.for("react.scope") : 60119;
    function C(e) {
      if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
          case o:
            switch ((e = e.type)) {
              case f:
              case d:
              case a:
              case c:
              case u:
              case h:
                return e;
              default:
                switch ((e = e && e.$$typeof)) {
                  case s:
                  case p:
                  case y:
                  case m:
                  case l:
                    return e;
                  default:
                    return t;
                }
            }
          case i:
            return t;
        }
      }
    }
    function E(e) {
      return C(e) === d;
    }
    (t.AsyncMode = f),
      (t.ConcurrentMode = d),
      (t.ContextConsumer = s),
      (t.ContextProvider = l),
      (t.Element = o),
      (t.ForwardRef = p),
      (t.Fragment = a),
      (t.Lazy = y),
      (t.Memo = m),
      (t.Portal = i),
      (t.Profiler = c),
      (t.StrictMode = u),
      (t.Suspense = h),
      (t.isAsyncMode = function (e) {
        return E(e) || C(e) === f;
      }),
      (t.isConcurrentMode = E),
      (t.isContextConsumer = function (e) {
        return C(e) === s;
      }),
      (t.isContextProvider = function (e) {
        return C(e) === l;
      }),
      (t.isElement = function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === o;
      }),
      (t.isForwardRef = function (e) {
        return C(e) === p;
      }),
      (t.isFragment = function (e) {
        return C(e) === a;
      }),
      (t.isLazy = function (e) {
        return C(e) === y;
      }),
      (t.isMemo = function (e) {
        return C(e) === m;
      }),
      (t.isPortal = function (e) {
        return C(e) === i;
      }),
      (t.isProfiler = function (e) {
        return C(e) === c;
      }),
      (t.isStrictMode = function (e) {
        return C(e) === u;
      }),
      (t.isSuspense = function (e) {
        return C(e) === h;
      }),
      (t.isValidElementType = function (e) {
        return (
          "string" == typeof e ||
          "function" == typeof e ||
          e === a ||
          e === d ||
          e === c ||
          e === u ||
          e === h ||
          e === v ||
          ("object" == typeof e &&
            null !== e &&
            (e.$$typeof === y ||
              e.$$typeof === m ||
              e.$$typeof === l ||
              e.$$typeof === s ||
              e.$$typeof === p ||
              e.$$typeof === b ||
              e.$$typeof === w ||
              e.$$typeof === x ||
              e.$$typeof === g))
        );
      }),
      (t.typeOf = C);
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "MemoryRouter", function () {
        return B;
      }),
      n.d(t, "Prompt", function () {
        return W;
      }),
      n.d(t, "Redirect", function () {
        return z;
      }),
      n.d(t, "Route", function () {
        return Y;
      }),
      n.d(t, "Router", function () {
        return q;
      }),
      n.d(t, "StaticRouter", function () {
        return ne;
      }),
      n.d(t, "Switch", function () {
        return re;
      }),
      n.d(t, "generatePath", function () {
        return D;
      }),
      n.d(t, "matchPath", function () {
        return G;
      }),
      n.d(t, "useHistory", function () {
        return ae;
      }),
      n.d(t, "useLocation", function () {
        return ue;
      }),
      n.d(t, "useParams", function () {
        return ce;
      }),
      n.d(t, "useRouteMatch", function () {
        return le;
      }),
      n.d(t, "withRouter", function () {
        return oe;
      }),
      n.d(t, "BrowserRouter", function () {
        return se;
      }),
      n.d(t, "HashRouter", function () {
        return fe;
      }),
      n.d(t, "Link", function () {
        return ye;
      }),
      n.d(t, "NavLink", function () {
        return we;
      });
    var r = n(1),
      o = n(0),
      i = n.n(o);
    n(2);
    function a() {
      return (a =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function u(e) {
      return "/" === e.charAt(0);
    }
    function c(e, t) {
      for (var n = t, r = n + 1, o = e.length; r < o; n += 1, r += 1)
        e[n] = e[r];
      e.pop();
    }
    var l = function (e, t) {
      void 0 === t && (t = "");
      var n,
        r = (e && e.split("/")) || [],
        o = (t && t.split("/")) || [],
        i = e && u(e),
        a = t && u(t),
        l = i || a;
      if (
        (e && u(e) ? (o = r) : r.length && (o.pop(), (o = o.concat(r))),
        !o.length)
      )
        return "/";
      if (o.length) {
        var s = o[o.length - 1];
        n = "." === s || ".." === s || "" === s;
      } else n = !1;
      for (var f = 0, d = o.length; d >= 0; d--) {
        var p = o[d];
        "." === p ? c(o, d) : ".." === p ? (c(o, d), f++) : f && (c(o, d), f--);
      }
      if (!l) for (; f--; f) o.unshift("..");
      !l || "" === o[0] || (o[0] && u(o[0])) || o.unshift("");
      var h = o.join("/");
      return n && "/" !== h.substr(-1) && (h += "/"), h;
    };
    function s(e) {
      return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
    }
    var f = function e(t, n) {
      if (t === n) return !0;
      if (null == t || null == n) return !1;
      if (Array.isArray(t))
        return (
          Array.isArray(n) &&
          t.length === n.length &&
          t.every(function (t, r) {
            return e(t, n[r]);
          })
        );
      if ("object" == typeof t || "object" == typeof n) {
        var r = s(t),
          o = s(n);
        return r !== t || o !== n
          ? e(r, o)
          : Object.keys(Object.assign({}, t, n)).every(function (r) {
              return e(t[r], n[r]);
            });
      }
      return !1;
    };
    var d = function (e, t) {
      if (!e) throw new Error("Invariant failed");
    };
    function p(e) {
      return "/" === e.charAt(0) ? e : "/" + e;
    }
    function h(e) {
      return "/" === e.charAt(0) ? e.substr(1) : e;
    }
    function v(e, t) {
      return (function (e, t) {
        return (
          0 === e.toLowerCase().indexOf(t.toLowerCase()) &&
          -1 !== "/?#".indexOf(e.charAt(t.length))
        );
      })(e, t)
        ? e.substr(t.length)
        : e;
    }
    function m(e) {
      return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
    }
    function y(e) {
      var t = e.pathname,
        n = e.search,
        r = e.hash,
        o = t || "/";
      return (
        n && "?" !== n && (o += "?" === n.charAt(0) ? n : "?" + n),
        r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r),
        o
      );
    }
    function g(e, t, n, r) {
      var o;
      "string" == typeof e
        ? ((o = (function (e) {
            var t = e || "/",
              n = "",
              r = "",
              o = t.indexOf("#");
            -1 !== o && ((r = t.substr(o)), (t = t.substr(0, o)));
            var i = t.indexOf("?");
            return (
              -1 !== i && ((n = t.substr(i)), (t = t.substr(0, i))),
              {
                pathname: t,
                search: "?" === n ? "" : n,
                hash: "#" === r ? "" : r,
              }
            );
          })(e)).state = t)
        : (void 0 === (o = a({}, e)).pathname && (o.pathname = ""),
          o.search
            ? "?" !== o.search.charAt(0) && (o.search = "?" + o.search)
            : (o.search = ""),
          o.hash
            ? "#" !== o.hash.charAt(0) && (o.hash = "#" + o.hash)
            : (o.hash = ""),
          void 0 !== t && void 0 === o.state && (o.state = t));
      try {
        o.pathname = decodeURI(o.pathname);
      } catch (e) {
        throw e instanceof URIError
          ? new URIError(
              'Pathname "' +
                o.pathname +
                '" could not be decoded. This is likely caused by an invalid percent-encoding.'
            )
          : e;
      }
      return (
        n && (o.key = n),
        r
          ? o.pathname
            ? "/" !== o.pathname.charAt(0) &&
              (o.pathname = l(o.pathname, r.pathname))
            : (o.pathname = r.pathname)
          : o.pathname || (o.pathname = "/"),
        o
      );
    }
    function b() {
      var e = null;
      var t = [];
      return {
        setPrompt: function (t) {
          return (
            (e = t),
            function () {
              e === t && (e = null);
            }
          );
        },
        confirmTransitionTo: function (t, n, r, o) {
          if (null != e) {
            var i = "function" == typeof e ? e(t, n) : e;
            "string" == typeof i
              ? "function" == typeof r
                ? r(i, o)
                : o(!0)
              : o(!1 !== i);
          } else o(!0);
        },
        appendListener: function (e) {
          var n = !0;
          function r() {
            n && e.apply(void 0, arguments);
          }
          return (
            t.push(r),
            function () {
              (n = !1),
                (t = t.filter(function (e) {
                  return e !== r;
                }));
            }
          );
        },
        notifyListeners: function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          t.forEach(function (e) {
            return e.apply(void 0, n);
          });
        },
      };
    }
    var w = !(
      "undefined" == typeof window ||
      !window.document ||
      !window.document.createElement
    );
    function x(e, t) {
      t(window.confirm(e));
    }
    function C() {
      try {
        return window.history.state || {};
      } catch (e) {
        return {};
      }
    }
    function E(e) {
      void 0 === e && (e = {}), w || d(!1);
      var t,
        n = window.history,
        r =
          ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") &&
            -1 === t.indexOf("Android 4.0")) ||
            -1 === t.indexOf("Mobile Safari") ||
            -1 !== t.indexOf("Chrome") ||
            -1 !== t.indexOf("Windows Phone")) &&
          window.history &&
          "pushState" in window.history,
        o = !(-1 === window.navigator.userAgent.indexOf("Trident")),
        i = e,
        u = i.forceRefresh,
        c = void 0 !== u && u,
        l = i.getUserConfirmation,
        s = void 0 === l ? x : l,
        f = i.keyLength,
        h = void 0 === f ? 6 : f,
        E = e.basename ? m(p(e.basename)) : "";
      function P(e) {
        var t = e || {},
          n = t.key,
          r = t.state,
          o = window.location,
          i = o.pathname + o.search + o.hash;
        return E && (i = v(i, E)), g(i, r, n);
      }
      function O() {
        return Math.random().toString(36).substr(2, h);
      }
      var R = b();
      function k(e) {
        a(q, e), (q.length = n.length), R.notifyListeners(q.location, q.action);
      }
      function S(e) {
        (function (e) {
          return (
            void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
          );
        })(e) || _(P(e.state));
      }
      function T() {
        _(P(C()));
      }
      var j = !1;
      function _(e) {
        if (j) (j = !1), k();
        else {
          R.confirmTransitionTo(e, "POP", s, function (t) {
            t
              ? k({ action: "POP", location: e })
              : (function (e) {
                  var t = q.location,
                    n = M.indexOf(t.key);
                  -1 === n && (n = 0);
                  var r = M.indexOf(e.key);
                  -1 === r && (r = 0);
                  var o = n - r;
                  o && ((j = !0), $(o));
                })(e);
          });
        }
      }
      var A = P(C()),
        M = [A.key];
      function L(e) {
        return E + y(e);
      }
      function $(e) {
        n.go(e);
      }
      var U = 0;
      function H(e) {
        1 === (U += e) && 1 === e
          ? (window.addEventListener("popstate", S),
            o && window.addEventListener("hashchange", T))
          : 0 === U &&
            (window.removeEventListener("popstate", S),
            o && window.removeEventListener("hashchange", T));
      }
      var N = !1;
      var q = {
        length: n.length,
        action: "POP",
        location: A,
        createHref: L,
        push: function (e, t) {
          var o = g(e, t, O(), q.location);
          R.confirmTransitionTo(o, "PUSH", s, function (e) {
            if (e) {
              var t = L(o),
                i = o.key,
                a = o.state;
              if (r)
                if ((n.pushState({ key: i, state: a }, null, t), c))
                  window.location.href = t;
                else {
                  var u = M.indexOf(q.location.key),
                    l = M.slice(0, u + 1);
                  l.push(o.key), (M = l), k({ action: "PUSH", location: o });
                }
              else window.location.href = t;
            }
          });
        },
        replace: function (e, t) {
          var o = g(e, t, O(), q.location);
          R.confirmTransitionTo(o, "REPLACE", s, function (e) {
            if (e) {
              var t = L(o),
                i = o.key,
                a = o.state;
              if (r)
                if ((n.replaceState({ key: i, state: a }, null, t), c))
                  window.location.replace(t);
                else {
                  var u = M.indexOf(q.location.key);
                  -1 !== u && (M[u] = o.key),
                    k({ action: "REPLACE", location: o });
                }
              else window.location.replace(t);
            }
          });
        },
        go: $,
        goBack: function () {
          $(-1);
        },
        goForward: function () {
          $(1);
        },
        block: function (e) {
          void 0 === e && (e = !1);
          var t = R.setPrompt(e);
          return (
            N || (H(1), (N = !0)),
            function () {
              return N && ((N = !1), H(-1)), t();
            }
          );
        },
        listen: function (e) {
          var t = R.appendListener(e);
          return (
            H(1),
            function () {
              H(-1), t();
            }
          );
        },
      };
      return q;
    }
    var P = {
      hashbang: {
        encodePath: function (e) {
          return "!" === e.charAt(0) ? e : "!/" + h(e);
        },
        decodePath: function (e) {
          return "!" === e.charAt(0) ? e.substr(1) : e;
        },
      },
      noslash: { encodePath: h, decodePath: p },
      slash: { encodePath: p, decodePath: p },
    };
    function O(e) {
      var t = e.indexOf("#");
      return -1 === t ? e : e.slice(0, t);
    }
    function R() {
      var e = window.location.href,
        t = e.indexOf("#");
      return -1 === t ? "" : e.substring(t + 1);
    }
    function k(e) {
      window.location.replace(O(window.location.href) + "#" + e);
    }
    function S(e) {
      void 0 === e && (e = {}), w || d(!1);
      var t = window.history,
        n = (window.navigator.userAgent.indexOf("Firefox"), e),
        r = n.getUserConfirmation,
        o = void 0 === r ? x : r,
        i = n.hashType,
        u = void 0 === i ? "slash" : i,
        c = e.basename ? m(p(e.basename)) : "",
        l = P[u],
        s = l.encodePath,
        f = l.decodePath;
      function h() {
        var e = f(R());
        return c && (e = v(e, c)), g(e);
      }
      var C = b();
      function E(e) {
        a(q, e), (q.length = t.length), C.notifyListeners(q.location, q.action);
      }
      var S = !1,
        T = null;
      function j() {
        var e,
          t,
          n = R(),
          r = s(n);
        if (n !== r) k(r);
        else {
          var i = h(),
            a = q.location;
          if (
            !S &&
            ((t = i),
            (e = a).pathname === t.pathname &&
              e.search === t.search &&
              e.hash === t.hash)
          )
            return;
          if (T === y(i)) return;
          (T = null),
            (function (e) {
              if (S) (S = !1), E();
              else {
                C.confirmTransitionTo(e, "POP", o, function (t) {
                  t
                    ? E({ action: "POP", location: e })
                    : (function (e) {
                        var t = q.location,
                          n = L.lastIndexOf(y(t));
                        -1 === n && (n = 0);
                        var r = L.lastIndexOf(y(e));
                        -1 === r && (r = 0);
                        var o = n - r;
                        o && ((S = !0), $(o));
                      })(e);
                });
              }
            })(i);
        }
      }
      var _ = R(),
        A = s(_);
      _ !== A && k(A);
      var M = h(),
        L = [y(M)];
      function $(e) {
        t.go(e);
      }
      var U = 0;
      function H(e) {
        1 === (U += e) && 1 === e
          ? window.addEventListener("hashchange", j)
          : 0 === U && window.removeEventListener("hashchange", j);
      }
      var N = !1;
      var q = {
        length: t.length,
        action: "POP",
        location: M,
        createHref: function (e) {
          var t = document.querySelector("base"),
            n = "";
          return (
            t && t.getAttribute("href") && (n = O(window.location.href)),
            n + "#" + s(c + y(e))
          );
        },
        push: function (e, t) {
          var n = g(e, void 0, void 0, q.location);
          C.confirmTransitionTo(n, "PUSH", o, function (e) {
            if (e) {
              var t = y(n),
                r = s(c + t);
              if (R() !== r) {
                (T = t),
                  (function (e) {
                    window.location.hash = e;
                  })(r);
                var o = L.lastIndexOf(y(q.location)),
                  i = L.slice(0, o + 1);
                i.push(t), (L = i), E({ action: "PUSH", location: n });
              } else E();
            }
          });
        },
        replace: function (e, t) {
          var n = g(e, void 0, void 0, q.location);
          C.confirmTransitionTo(n, "REPLACE", o, function (e) {
            if (e) {
              var t = y(n),
                r = s(c + t);
              R() !== r && ((T = t), k(r));
              var o = L.indexOf(y(q.location));
              -1 !== o && (L[o] = t), E({ action: "REPLACE", location: n });
            }
          });
        },
        go: $,
        goBack: function () {
          $(-1);
        },
        goForward: function () {
          $(1);
        },
        block: function (e) {
          void 0 === e && (e = !1);
          var t = C.setPrompt(e);
          return (
            N || (H(1), (N = !0)),
            function () {
              return N && ((N = !1), H(-1)), t();
            }
          );
        },
        listen: function (e) {
          var t = C.appendListener(e);
          return (
            H(1),
            function () {
              H(-1), t();
            }
          );
        },
      };
      return q;
    }
    function T(e, t, n) {
      return Math.min(Math.max(e, t), n);
    }
    function j(e) {
      void 0 === e && (e = {});
      var t = e,
        n = t.getUserConfirmation,
        r = t.initialEntries,
        o = void 0 === r ? ["/"] : r,
        i = t.initialIndex,
        u = void 0 === i ? 0 : i,
        c = t.keyLength,
        l = void 0 === c ? 6 : c,
        s = b();
      function f(e) {
        a(w, e),
          (w.length = w.entries.length),
          s.notifyListeners(w.location, w.action);
      }
      function d() {
        return Math.random().toString(36).substr(2, l);
      }
      var p = T(u, 0, o.length - 1),
        h = o.map(function (e) {
          return g(e, void 0, "string" == typeof e ? d() : e.key || d());
        }),
        v = y;
      function m(e) {
        var t = T(w.index + e, 0, w.entries.length - 1),
          r = w.entries[t];
        s.confirmTransitionTo(r, "POP", n, function (e) {
          e ? f({ action: "POP", location: r, index: t }) : f();
        });
      }
      var w = {
        length: h.length,
        action: "POP",
        location: h[p],
        index: p,
        entries: h,
        createHref: v,
        push: function (e, t) {
          var r = g(e, t, d(), w.location);
          s.confirmTransitionTo(r, "PUSH", n, function (e) {
            if (e) {
              var t = w.index + 1,
                n = w.entries.slice(0);
              n.length > t ? n.splice(t, n.length - t, r) : n.push(r),
                f({ action: "PUSH", location: r, index: t, entries: n });
            }
          });
        },
        replace: function (e, t) {
          var r = g(e, t, d(), w.location);
          s.confirmTransitionTo(r, "REPLACE", n, function (e) {
            e &&
              ((w.entries[w.index] = r), f({ action: "REPLACE", location: r }));
          });
        },
        go: m,
        goBack: function () {
          m(-1);
        },
        goForward: function () {
          m(1);
        },
        canGo: function (e) {
          var t = w.index + e;
          return t >= 0 && t < w.entries.length;
        },
        block: function (e) {
          return void 0 === e && (e = !1), s.setPrompt(e);
        },
        listen: function (e) {
          return s.appendListener(e);
        },
      };
      return w;
    }
    var _ = n(4),
      A = n(5),
      M = n.n(A);
    n(7);
    function L(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
    }
    var $ = n(9),
      U = n.n($),
      H = (function (e) {
        var t = Object(_.a)();
        return (t.displayName = e), t;
      })("Router-History"),
      N = (function (e) {
        var t = Object(_.a)();
        return (t.displayName = e), t;
      })("Router"),
      q = (function (e) {
        function t(t) {
          var n;
          return (
            ((n = e.call(this, t) || this).state = {
              location: t.history.location,
            }),
            (n._isMounted = !1),
            (n._pendingLocation = null),
            t.staticContext ||
              (n.unlisten = t.history.listen(function (e) {
                n._isMounted
                  ? n.setState({ location: e })
                  : (n._pendingLocation = e);
              })),
            n
          );
        }
        Object(r.a)(t, e),
          (t.computeRootMatch = function (e) {
            return { path: "/", url: "/", params: {}, isExact: "/" === e };
          });
        var n = t.prototype;
        return (
          (n.componentDidMount = function () {
            (this._isMounted = !0),
              this._pendingLocation &&
                this.setState({ location: this._pendingLocation });
          }),
          (n.componentWillUnmount = function () {
            this.unlisten && this.unlisten();
          }),
          (n.render = function () {
            return i.a.createElement(
              N.Provider,
              {
                value: {
                  history: this.props.history,
                  location: this.state.location,
                  match: t.computeRootMatch(this.state.location.pathname),
                  staticContext: this.props.staticContext,
                },
              },
              i.a.createElement(H.Provider, {
                children: this.props.children || null,
                value: this.props.history,
              })
            );
          }),
          t
        );
      })(i.a.Component);
    var B = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          ((t = e.call.apply(e, [this].concat(r)) || this).history = j(
            t.props
          )),
          t
        );
      }
      return (
        Object(r.a)(t, e),
        (t.prototype.render = function () {
          return i.a.createElement(q, {
            history: this.history,
            children: this.props.children,
          });
        }),
        t
      );
    })(i.a.Component);
    var I = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      Object(r.a)(t, e);
      var n = t.prototype;
      return (
        (n.componentDidMount = function () {
          this.props.onMount && this.props.onMount.call(this, this);
        }),
        (n.componentDidUpdate = function (e) {
          this.props.onUpdate && this.props.onUpdate.call(this, this, e);
        }),
        (n.componentWillUnmount = function () {
          this.props.onUnmount && this.props.onUnmount.call(this, this);
        }),
        (n.render = function () {
          return null;
        }),
        t
      );
    })(i.a.Component);
    function W(e) {
      var t = e.message,
        n = e.when,
        r = void 0 === n || n;
      return i.a.createElement(N.Consumer, null, function (e) {
        if ((e || d(!1), !r || e.staticContext)) return null;
        var n = e.history.block;
        return i.a.createElement(I, {
          onMount: function (e) {
            e.release = n(t);
          },
          onUpdate: function (e, r) {
            r.message !== t && (e.release(), (e.release = n(t)));
          },
          onUnmount: function (e) {
            e.release();
          },
          message: t,
        });
      });
    }
    var F = {},
      V = 0;
    function D(e, t) {
      return (
        void 0 === e && (e = "/"),
        void 0 === t && (t = {}),
        "/" === e
          ? e
          : (function (e) {
              if (F[e]) return F[e];
              var t = M.a.compile(e);
              return V < 1e4 && ((F[e] = t), V++), t;
            })(e)(t, { pretty: !0 })
      );
    }
    function z(e) {
      var t = e.computedMatch,
        n = e.to,
        r = e.push,
        o = void 0 !== r && r;
      return i.a.createElement(N.Consumer, null, function (e) {
        e || d(!1);
        var r = e.history,
          u = e.staticContext,
          c = o ? r.push : r.replace,
          l = g(
            t
              ? "string" == typeof n
                ? D(n, t.params)
                : a({}, n, { pathname: D(n.pathname, t.params) })
              : n
          );
        return u
          ? (c(l), null)
          : i.a.createElement(I, {
              onMount: function () {
                c(l);
              },
              onUpdate: function (e, t) {
                var n,
                  r,
                  o = g(t.to);
                (n = o),
                  (r = a({}, l, { key: o.key })),
                  (n.pathname === r.pathname &&
                    n.search === r.search &&
                    n.hash === r.hash &&
                    n.key === r.key &&
                    f(n.state, r.state)) ||
                    c(l);
              },
              to: n,
            });
      });
    }
    var J = {},
      K = 0;
    function G(e, t) {
      void 0 === t && (t = {}),
        ("string" == typeof t || Array.isArray(t)) && (t = { path: t });
      var n = t,
        r = n.path,
        o = n.exact,
        i = void 0 !== o && o,
        a = n.strict,
        u = void 0 !== a && a,
        c = n.sensitive,
        l = void 0 !== c && c;
      return [].concat(r).reduce(function (t, n) {
        if (!n && "" !== n) return null;
        if (t) return t;
        var r = (function (e, t) {
            var n = "" + t.end + t.strict + t.sensitive,
              r = J[n] || (J[n] = {});
            if (r[e]) return r[e];
            var o = [],
              i = { regexp: M()(e, o, t), keys: o };
            return K < 1e4 && ((r[e] = i), K++), i;
          })(n, { end: i, strict: u, sensitive: l }),
          o = r.regexp,
          a = r.keys,
          c = o.exec(e);
        if (!c) return null;
        var s = c[0],
          f = c.slice(1),
          d = e === s;
        return i && !d
          ? null
          : {
              path: n,
              url: "/" === n && "" === s ? "/" : s,
              isExact: d,
              params: a.reduce(function (e, t, n) {
                return (e[t.name] = f[n]), e;
              }, {}),
            };
      }, null);
    }
    var Y = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (
        Object(r.a)(t, e),
        (t.prototype.render = function () {
          var e = this;
          return i.a.createElement(N.Consumer, null, function (t) {
            t || d(!1);
            var n = e.props.location || t.location,
              r = a({}, t, {
                location: n,
                match: e.props.computedMatch
                  ? e.props.computedMatch
                  : e.props.path
                  ? G(n.pathname, e.props)
                  : t.match,
              }),
              o = e.props,
              u = o.children,
              c = o.component,
              l = o.render;
            return (
              Array.isArray(u) && 0 === u.length && (u = null),
              i.a.createElement(
                N.Provider,
                { value: r },
                r.match
                  ? u
                    ? "function" == typeof u
                      ? u(r)
                      : u
                    : c
                    ? i.a.createElement(c, r)
                    : l
                    ? l(r)
                    : null
                  : "function" == typeof u
                  ? u(r)
                  : null
              )
            );
          });
        }),
        t
      );
    })(i.a.Component);
    function Q(e) {
      return "/" === e.charAt(0) ? e : "/" + e;
    }
    function X(e, t) {
      if (!e) return t;
      var n = Q(e);
      return 0 !== t.pathname.indexOf(n)
        ? t
        : a({}, t, { pathname: t.pathname.substr(n.length) });
    }
    function Z(e) {
      return "string" == typeof e ? e : y(e);
    }
    function ee(e) {
      return function () {
        d(!1);
      };
    }
    function te() {}
    var ne = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          ((t =
            e.call.apply(e, [this].concat(r)) || this).handlePush = function (
            e
          ) {
            return t.navigateTo(e, "PUSH");
          }),
          (t.handleReplace = function (e) {
            return t.navigateTo(e, "REPLACE");
          }),
          (t.handleListen = function () {
            return te;
          }),
          (t.handleBlock = function () {
            return te;
          }),
          t
        );
      }
      Object(r.a)(t, e);
      var n = t.prototype;
      return (
        (n.navigateTo = function (e, t) {
          var n = this.props,
            r = n.basename,
            o = void 0 === r ? "" : r,
            i = n.context,
            u = void 0 === i ? {} : i;
          (u.action = t),
            (u.location = (function (e, t) {
              return e ? a({}, t, { pathname: Q(e) + t.pathname }) : t;
            })(o, g(e))),
            (u.url = Z(u.location));
        }),
        (n.render = function () {
          var e = this.props,
            t = e.basename,
            n = void 0 === t ? "" : t,
            r = e.context,
            o = void 0 === r ? {} : r,
            u = e.location,
            c = void 0 === u ? "/" : u,
            l = L(e, ["basename", "context", "location"]),
            s = {
              createHref: function (e) {
                return Q(n + Z(e));
              },
              action: "POP",
              location: X(n, g(c)),
              push: this.handlePush,
              replace: this.handleReplace,
              go: ee(),
              goBack: ee(),
              goForward: ee(),
              listen: this.handleListen,
              block: this.handleBlock,
            };
          return i.a.createElement(
            q,
            a({}, l, { history: s, staticContext: o })
          );
        }),
        t
      );
    })(i.a.Component);
    var re = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (
        Object(r.a)(t, e),
        (t.prototype.render = function () {
          var e = this;
          return i.a.createElement(N.Consumer, null, function (t) {
            t || d(!1);
            var n,
              r,
              o = e.props.location || t.location;
            return (
              i.a.Children.forEach(e.props.children, function (e) {
                if (null == r && i.a.isValidElement(e)) {
                  n = e;
                  var u = e.props.path || e.props.from;
                  r = u ? G(o.pathname, a({}, e.props, { path: u })) : t.match;
                }
              }),
              r ? i.a.cloneElement(n, { location: o, computedMatch: r }) : null
            );
          });
        }),
        t
      );
    })(i.a.Component);
    function oe(e) {
      var t = "withRouter(" + (e.displayName || e.name) + ")",
        n = function (t) {
          var n = t.wrappedComponentRef,
            r = L(t, ["wrappedComponentRef"]);
          return i.a.createElement(N.Consumer, null, function (t) {
            return t || d(!1), i.a.createElement(e, a({}, r, t, { ref: n }));
          });
        };
      return (n.displayName = t), (n.WrappedComponent = e), U()(n, e);
    }
    var ie = i.a.useContext;
    function ae() {
      return ie(H);
    }
    function ue() {
      return ie(N).location;
    }
    function ce() {
      var e = ie(N).match;
      return e ? e.params : {};
    }
    function le(e) {
      var t = ue(),
        n = ie(N).match;
      return e ? G(t.pathname, e) : n;
    }
    var se = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          ((t = e.call.apply(e, [this].concat(r)) || this).history = E(
            t.props
          )),
          t
        );
      }
      return (
        Object(r.a)(t, e),
        (t.prototype.render = function () {
          return i.a.createElement(q, {
            history: this.history,
            children: this.props.children,
          });
        }),
        t
      );
    })(i.a.Component);
    var fe = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          ((t = e.call.apply(e, [this].concat(r)) || this).history = S(
            t.props
          )),
          t
        );
      }
      return (
        Object(r.a)(t, e),
        (t.prototype.render = function () {
          return i.a.createElement(q, {
            history: this.history,
            children: this.props.children,
          });
        }),
        t
      );
    })(i.a.Component);
    var de = function (e, t) {
        return "function" == typeof e ? e(t) : e;
      },
      pe = function (e, t) {
        return "string" == typeof e ? g(e, null, null, t) : e;
      },
      he = function (e) {
        return e;
      },
      ve = i.a.forwardRef;
    void 0 === ve && (ve = he);
    var me = ve(function (e, t) {
      var n = e.innerRef,
        r = e.navigate,
        o = e.onClick,
        u = L(e, ["innerRef", "navigate", "onClick"]),
        c = u.target,
        l = a({}, u, {
          onClick: function (e) {
            try {
              o && o(e);
            } catch (t) {
              throw (e.preventDefault(), t);
            }
            e.defaultPrevented ||
              0 !== e.button ||
              (c && "_self" !== c) ||
              (function (e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
              })(e) ||
              (e.preventDefault(), r());
          },
        });
      return (l.ref = (he !== ve && t) || n), i.a.createElement("a", l);
    });
    var ye = ve(function (e, t) {
        var n = e.component,
          r = void 0 === n ? me : n,
          o = e.replace,
          u = e.to,
          c = e.innerRef,
          l = L(e, ["component", "replace", "to", "innerRef"]);
        return i.a.createElement(N.Consumer, null, function (e) {
          e || d(!1);
          var n = e.history,
            s = pe(de(u, e.location), e.location),
            f = s ? n.createHref(s) : "",
            p = a({}, l, {
              href: f,
              navigate: function () {
                var t = de(u, e.location);
                (o ? n.replace : n.push)(t);
              },
            });
          return (
            he !== ve ? (p.ref = t || c) : (p.innerRef = c),
            i.a.createElement(r, p)
          );
        });
      }),
      ge = function (e) {
        return e;
      },
      be = i.a.forwardRef;
    void 0 === be && (be = ge);
    var we = be(function (e, t) {
      var n = e["aria-current"],
        r = void 0 === n ? "page" : n,
        o = e.activeClassName,
        u = void 0 === o ? "active" : o,
        c = e.activeStyle,
        l = e.className,
        s = e.exact,
        f = e.isActive,
        p = e.location,
        h = e.sensitive,
        v = e.strict,
        m = e.style,
        y = e.to,
        g = e.innerRef,
        b = L(e, [
          "aria-current",
          "activeClassName",
          "activeStyle",
          "className",
          "exact",
          "isActive",
          "location",
          "sensitive",
          "strict",
          "style",
          "to",
          "innerRef",
        ]);
      return i.a.createElement(N.Consumer, null, function (e) {
        e || d(!1);
        var n = p || e.location,
          o = pe(de(y, n), n),
          w = o.pathname,
          x = w && w.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
          C = x
            ? G(n.pathname, { path: x, exact: s, sensitive: h, strict: v })
            : null,
          E = !!(f ? f(C, n) : C),
          P = E
            ? (function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                return t
                  .filter(function (e) {
                    return e;
                  })
                  .join(" ");
              })(l, u)
            : l,
          O = E ? a({}, m, {}, c) : m,
          R = a(
            { "aria-current": (E && r) || null, className: P, style: O, to: o },
            b
          );
        return (
          ge !== be ? (R.ref = t || g) : (R.innerRef = g),
          i.a.createElement(ye, R)
        );
      });
    });
  },
]);
