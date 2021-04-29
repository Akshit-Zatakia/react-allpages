module.exports = (function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 4))
  );
})([
  function (e, t) {
    e.exports = require("react");
  },
  function (e, t, r) {
    e.exports = r(9)();
  },
  function (e, t, r) {
    var n = r(6),
      o = r(7);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[e.i, o, ""]]);
    var a = { insert: "head", singleton: !1 };
    n(o, a);
    e.exports = o.locals || {};
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = a(r(0)),
      o = a(r(1));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function i(e) {
      var t = e.color,
        r = e.bgColor,
        o = e.text,
        a = e.onBtnClick,
        i = e.elevation;
      return n.default.createElement(
        "button",
        {
          style: {
            color: t || "white",
            backgroundColor: r || "red",
            border: "none",
            padding: 10,
            borderRadius: 8,
            fontWeight: "bold",
            fontSize: "1em",
            margin: 10,
            cursor: "pointer",
            boxShadow: i
              ? "0 4px 8px 0 rgba(0,0,0," + i + ")"
              : "0 4px 8px 0 rgba(0,0,0,0.2)",
          },
          onClick: function (e) {
            return a(e);
          },
        },
        o
      );
    }
    (i.propTypes = {
      color: o.default.string,
      bgColor: o.default.string,
      text: o.default.string.isRequired,
      elevation: o.default.number,
      onBtnClick: o.default.func,
    }),
      (t.default = i);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Button = t.HomeOne = t.LoginPage = t.RegisterPage = void 0);
    var n = l(r(5)),
      o = l(r(11)),
      a = l(r(12)),
      i = l(r(3));
    l(r(0));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.RegisterPage = n.default),
      (t.LoginPage = o.default),
      (t.HomeOne = a.default),
      (t.Button = i.default);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), r(2);
    var n = a(r(1)),
      o = a(r(0));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function i(e) {
      var t = e.cardColor,
        r = e.headTextColor,
        n = e.borderColor,
        a = e.emailHolder,
        i = e.passwordHolder,
        l = e.fnmHolder,
        u = e.lnmHolder,
        d = e.fnmValue,
        c = e.lnmValue,
        s = e.fnmChange,
        f = e.lnmChange,
        p = e.buttonColor,
        g = e.emailValue,
        m = e.passwordValue,
        b = e.emailChange,
        h = e.passwordChange,
        v = e.onBtnClick,
        y = e.cardWidth,
        C = e.cardHeight,
        x = /\S+@\S+\.\S+/;
      return o.default.createElement(
        "div",
        {
          className: "card-container",
          style: {
            backgroundColor: t || "white",
            borderColor: t || "white",
            width: y || "60vh",
            height: C || "",
          },
        },
        o.default.createElement(
          "h3",
          { style: { margin: 10, color: r || "skyblue" } },
          "Register"
        ),
        o.default.createElement("input", {
          style: {
            margin: 10,
            borderRadius: 5,
            borderColor: n || "skyblue",
            borderWidth: 1,
            padding: 8,
          },
          placeholder: l || "Enter First Name",
          value: d,
          onChange: function (e) {
            s(e.target.value);
          },
          required: !0,
        }),
        o.default.createElement("input", {
          style: {
            margin: 10,
            borderRadius: 5,
            borderColor: n || "skyblue",
            borderWidth: 1,
            padding: 8,
          },
          placeholder: u || "Enter Last Name",
          value: c,
          onChange: function (e) {
            f(e.target.value);
          },
          required: !0,
        }),
        o.default.createElement("input", {
          style: {
            margin: 10,
            borderRadius: 5,
            borderColor: n || "skyblue",
            borderWidth: 1,
            padding: 8,
          },
          placeholder: a || "Enter the email",
          type: "email",
          value: g,
          onChange: function (e) {
            b(e.target.value), (g = e.target.value);
          },
          required: !0,
        }),
        o.default.createElement("input", {
          style: {
            margin: 10,
            borderRadius: 5,
            borderColor: n || "skyblue",
            borderWidth: 1,
            padding: 8,
          },
          type: "password",
          placeholder: i || "Enter the password",
          value: m,
          onChange: function (e) {
            return h(e.target.value);
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
                g && m && d && c
                  ? ((t = g),
                    x.test(t) ? v(e) : alert("Please enter valid email"))
                  : alert("Please fill all fields.");
            },
          },
          "Login"
        )
      );
    }
    (i.propTypes = {
      headTextColor: n.default.string,
      cardColor: n.default.string,
      borderColor: n.default.string,
      emailHolder: n.default.string,
      passwordHolder: n.default.string,
      buttonColor: n.default.string,
      cardWidth: n.default.number,
      fnmHolder: n.default.string,
      lnmHolder: n.default.string,
      fnmValue: n.default.string.isRequired,
      lnmValue: n.default.string.isRequired,
      fnmChange: n.default.func.isRequired,
      lnmChange: n.default.func.isRequired,
      emailChange: n.default.func.isRequired,
      emailValue: n.default.string.isRequired,
      passwordValue: n.default.string.isRequired,
      passwordChange: n.default.func.isRequired,
      onBtnClick: n.default.func.isRequired,
    }),
      (t.default = i);
  },
  function (e, t, r) {
    "use strict";
    var n,
      o = function () {
        return (
          void 0 === n &&
            (n = Boolean(window && document && document.all && !window.atob)),
          n
        );
      },
      a = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var r = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              r instanceof window.HTMLIFrameElement
            )
              try {
                r = r.contentDocument.head;
              } catch (e) {
                r = null;
              }
            e[t] = r;
          }
          return e[t];
        };
      })(),
      i = [];
    function l(e) {
      for (var t = -1, r = 0; r < i.length; r++)
        if (i[r].identifier === e) {
          t = r;
          break;
        }
      return t;
    }
    function u(e, t) {
      for (var r = {}, n = [], o = 0; o < e.length; o++) {
        var a = e[o],
          u = t.base ? a[0] + t.base : a[0],
          d = r[u] || 0,
          c = "".concat(u, " ").concat(d);
        r[u] = d + 1;
        var s = l(c),
          f = { css: a[1], media: a[2], sourceMap: a[3] };
        -1 !== s
          ? (i[s].references++, i[s].updater(f))
          : i.push({ identifier: c, updater: b(f, t), references: 1 }),
          n.push(c);
      }
      return n;
    }
    function d(e) {
      var t = document.createElement("style"),
        n = e.attributes || {};
      if (void 0 === n.nonce) {
        var o = r.nc;
        o && (n.nonce = o);
      }
      if (
        (Object.keys(n).forEach(function (e) {
          t.setAttribute(e, n[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var i = a(e.insert || "head");
        if (!i)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        i.appendChild(t);
      }
      return t;
    }
    var c,
      s =
        ((c = []),
        function (e, t) {
          return (c[e] = t), c.filter(Boolean).join("\n");
        });
    function f(e, t, r, n) {
      var o = r
        ? ""
        : n.media
        ? "@media ".concat(n.media, " {").concat(n.css, "}")
        : n.css;
      if (e.styleSheet) e.styleSheet.cssText = s(t, o);
      else {
        var a = document.createTextNode(o),
          i = e.childNodes;
        i[t] && e.removeChild(i[t]),
          i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
      }
    }
    function p(e, t, r) {
      var n = r.css,
        o = r.media,
        a = r.sourceMap;
      if (
        (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
        a &&
          "undefined" != typeof btoa &&
          (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = n;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n));
      }
    }
    var g = null,
      m = 0;
    function b(e, t) {
      var r, n, o;
      if (t.singleton) {
        var a = m++;
        (r = g || (g = d(t))),
          (n = f.bind(null, r, a, !1)),
          (o = f.bind(null, r, a, !0));
      } else
        (r = d(t)),
          (n = p.bind(null, r, t)),
          (o = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(r);
          });
      return (
        n(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            n((e = t));
          } else o();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = o());
      var r = u((e = e || []), t);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var n = 0; n < r.length; n++) {
            var o = l(r[n]);
            i[o].references--;
          }
          for (var a = u(e, t), d = 0; d < r.length; d++) {
            var c = l(r[d]);
            0 === i[c].references && (i[c].updater(), i.splice(c, 1));
          }
          r = a;
        }
      };
    };
  },
  function (e, t, r) {
    (t = r(8)(!1)).push([
      e.i,
      ".card-container {\r\n  display: flex;\r\n  border-radius: 20px;\r\n  transition: 40%;\r\n  border-width: 2;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  flex-direction: column;\r\n  padding: 20;\r\n  margin: 10;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n.overlay {\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  position: absolute;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.sub-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n",
      "",
    ]),
      (e.exports = t);
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var r = (function (e, t) {
              var r = e[1] || "",
                n = e[3];
              if (!n) return r;
              if (t && "function" == typeof btoa) {
                var o =
                    ((i = n),
                    (l = btoa(unescape(encodeURIComponent(JSON.stringify(i))))),
                    (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      l
                    )),
                    "/*# ".concat(u, " */")),
                  a = n.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(n.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [r].concat(a).concat([o]).join("\n");
              }
              var i, l, u;
              return [r].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r;
          }).join("");
        }),
        (t.i = function (e, r, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var o = {};
          if (n)
            for (var a = 0; a < this.length; a++) {
              var i = this[a][0];
              null != i && (o[i] = !0);
            }
          for (var l = 0; l < e.length; l++) {
            var u = [].concat(e[l]);
            (n && o[u[0]]) ||
              (r &&
                (u[2]
                  ? (u[2] = "".concat(r, " and ").concat(u[2]))
                  : (u[2] = r)),
              t.push(u));
          }
        }),
        t
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(10);
    function o() {}
    function a() {}
    (a.resetWarningCache = o),
      (e.exports = function () {
        function e(e, t, r, o, a, i) {
          if (i !== n) {
            var l = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((l.name = "Invariant Violation"), l);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var r = {
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
          checkPropTypes: a,
          resetWarningCache: o,
        };
        return (r.PropTypes = r), r;
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), r(2);
    var n = a(r(1)),
      o = a(r(0));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function i(e) {
      var t = e.cardColor,
        r = e.headTextColor,
        n = e.borderColor,
        a = e.emailHolder,
        i = e.passwordHolder,
        l = e.buttonColor,
        u = e.emailValue,
        d = e.passwordValue,
        c = e.emailChange,
        s = e.passwordChange,
        f = e.onBtnClick,
        p = e.cardWidth,
        g = e.cardHeight,
        m = /\S+@\S+\.\S+/;
      return o.default.createElement(
        "div",
        {
          className: "card-container",
          style: {
            backgroundColor: t || "white",
            borderColor: t || "white",
            width: p || "60vh",
            height: g || "",
          },
        },
        o.default.createElement(
          "h3",
          { style: { margin: 10, color: r || "skyblue" } },
          "Login"
        ),
        o.default.createElement("input", {
          style: {
            margin: 10,
            borderRadius: 5,
            borderColor: n || "skyblue",
            borderWidth: 1,
            padding: 8,
          },
          placeholder: a || "Enter the email",
          type: "email",
          value: u,
          onChange: function (e) {
            c(e.target.value), (u = e.target.value);
          },
          required: !0,
        }),
        o.default.createElement("input", {
          style: {
            margin: 10,
            borderRadius: 5,
            borderColor: n || "skyblue",
            borderWidth: 1,
            padding: 8,
          },
          type: "password",
          placeholder: i || "Enter the password",
          value: d,
          onChange: function (e) {
            return s(e.target.value);
          },
          required: !0,
        }),
        o.default.createElement(
          "button",
          {
            type: "submit",
            style: {
              backgroundColor: l || "skyblue",
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
                u && d
                  ? ((t = u),
                    m.test(t) ? f(e) : alert("Please enter valid email"))
                  : alert("Please fill all fields.");
            },
          },
          "Login"
        )
      );
    }
    (i.propTypes = {
      headTextColor: n.default.string,
      cardColor: n.default.string,
      borderColor: n.default.string,
      emailHolder: n.default.string,
      passwordHolder: n.default.string,
      buttonColor: n.default.string,
      cardWidth: n.default.number,
      emailChange: n.default.func.isRequired,
      emailValue: n.default.string.isRequired,
      passwordValue: n.default.string.isRequired,
      passwordChange: n.default.func.isRequired,
      onBtnClick: n.default.func.isRequired,
    }),
      (t.default = i);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = l(r(0)),
      o = r(13),
      a = l(r(3)),
      i = l(r(1));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function u(e) {
      var t = e.text,
        r = e.buttons,
        i = e.color,
        l = e.bgImage,
        u = e.bgColor;
      return n.default.createElement(
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
            backgroundImage: "url(" + l + ")",
            backgroundColor: u || l ? u : "black",
            backgroundRepeat: "no-repeat",
          },
        },
        n.default.createElement(
          "h1",
          {
            style: {
              color: i || "white",
              fontStyle: "italic",
              fontSize: "3em",
            },
          },
          t || "Welcome to react-allpages"
        ),
        n.default.createElement(
          "div",
          { style: { display: "flex", flexDirection: "row" } },
          r &&
            r.map(function (e) {
              return n.default.createElement(
                o.Link,
                { to: e.link ? e.link : "/" },
                n.default.createElement(a.default, {
                  text: e.name ? e.name : "Get Started",
                  color: e.color ? e.color : "white",
                  bgColor: e.backgroundColor ? e.backgroundColor : "red",
                })
              );
            })
        )
      );
    }
    (u.propTypes = {
      text: i.default.string,
      color: i.default.string,
      bgImage: i.default.string,
      bgColor: i.default.string,
      buttons: i.default.array,
    }),
      (t.default = u);
  },
  function (e, t) {
    e.exports = require("react-router-dom");
  },
]);
