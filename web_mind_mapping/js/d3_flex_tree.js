!(function () {
  function n(n) {
    return n && (n.ownerDocument || n.document || n).documentElement;
  }
  function t(n) {
    return (
      n &&
      ((n.ownerDocument && n.ownerDocument.defaultView) ||
        (n.document && n) ||
        n.defaultView)
    );
  }
  function e(n, t) {
    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
  }
  function r(n) {
    return null === n ? NaN : +n;
  }
  function i(n) {
    return !isNaN(n);
  }
  function u(n) {
    return {
      left: function (t, e, r, i) {
        for (
          arguments.length < 3 && (r = 0),
            arguments.length < 4 && (i = t.length);
          r < i;

        ) {
          var u = (r + i) >>> 1;
          n(t[u], e) < 0 ? (r = u + 1) : (i = u);
        }
        return r;
      },
      right: function (t, e, r, i) {
        for (
          arguments.length < 3 && (r = 0),
            arguments.length < 4 && (i = t.length);
          r < i;

        ) {
          var u = (r + i) >>> 1;
          n(t[u], e) > 0 ? (i = u) : (r = u + 1);
        }
        return r;
      },
    };
  }
  function o(n) {
    return n.length;
  }
  function a(n) {
    for (var t = 1; (n * t) % 1; ) t *= 10;
    return t;
  }
  function l(n, t) {
    for (var e in t)
      Object.defineProperty(n.prototype, e, { value: t[e], enumerable: !1 });
  }
  function c() {
    this._ = Object.create(null);
  }
  function f(n) {
    return (n += "") === ao || n[0] === lo ? lo + n : n;
  }
  function s(n) {
    return (n += "")[0] === lo ? n.slice(1) : n;
  }
  function h(n) {
    return f(n) in this._;
  }
  function p(n) {
    return (n = f(n)) in this._ && delete this._[n];
  }
  function g() {
    var n = [];
    for (var t in this._) n.push(s(t));
    return n;
  }
  function d() {
    var n = 0;
    for (var t in this._) ++n;
    return n;
  }
  function v() {
    for (var n in this._) return !1;
    return !0;
  }
  function y() {
    this._ = Object.create(null);
  }
  function m(n) {
    return n;
  }
  function M(n, t, e) {
    return function () {
      var r = e.apply(t, arguments);
      return r === t ? n : r;
    };
  }
  function x(n, t) {
    if (t in n) return t;
    t = t.charAt(0).toUpperCase() + t.slice(1);
    for (var e = 0, r = co.length; e < r; ++e) {
      var i = co[e] + t;
      if (i in n) return i;
    }
  }
  function _() {}
  function b() {}
  function w(n) {
    function t() {
      for (var t, r = e, i = -1, u = r.length; ++i < u; )
        (t = r[i].on) && t.apply(this, arguments);
      return n;
    }
    var e = [],
      r = new c();
    return (
      (t.on = function (t, i) {
        var u,
          o = r.get(t);
        return arguments.length < 2
          ? o && o.on
          : (o &&
              ((o.on = null),
              (e = e.slice(0, (u = e.indexOf(o))).concat(e.slice(u + 1))),
              r.remove(t)),
            i && e.push(r.set(t, { on: i })),
            n);
      }),
      t
    );
  }
  function S() {
    Ju.event.preventDefault();
  }
  function k() {
    for (var n, t = Ju.event; (n = t.sourceEvent); ) t = n;
    return t;
  }
  function N(n) {
    for (var t = new b(), e = 0, r = arguments.length; ++e < r; )
      t[arguments[e]] = w(t);
    return (
      (t.of = function (e, r) {
        return function (i) {
          try {
            var u = (i.sourceEvent = Ju.event);
            (i.target = n), (Ju.event = i), t[i.type].apply(e, r);
          } finally {
            Ju.event = u;
          }
        };
      }),
      t
    );
  }
  function E(n) {
    return so(n, vo), n;
  }
  function A(n) {
    return "function" == typeof n
      ? n
      : function () {
          return ho(n, this);
        };
  }
  function C(n) {
    return "function" == typeof n
      ? n
      : function () {
          return po(n, this);
        };
  }
  function z(n, t) {
    function e() {
      this.removeAttribute(n);
    }
    function r() {
      this.removeAttributeNS(n.space, n.local);
    }
    function i() {
      this.setAttribute(n, t);
    }
    function u() {
      this.setAttributeNS(n.space, n.local, t);
    }
    function o() {
      var e = t.apply(this, arguments);
      null == e ? this.removeAttribute(n) : this.setAttribute(n, e);
    }
    function a() {
      var e = t.apply(this, arguments);
      null == e
        ? this.removeAttributeNS(n.space, n.local)
        : this.setAttributeNS(n.space, n.local, e);
    }
    return (
      (n = Ju.ns.qualify(n)),
      null == t
        ? n.local
          ? r
          : e
        : "function" == typeof t
        ? n.local
          ? a
          : o
        : n.local
        ? u
        : i
    );
  }
  function q(n) {
    return n.trim().replace(/\s+/g, " ");
  }
  function L(n) {
    return new RegExp("(?:^|\\s+)" + Ju.requote(n) + "(?:\\s+|$)", "g");
  }
  function T(n) {
    return (n + "").trim().split(/^|\s+/);
  }
  function R(n, t) {
    function e() {
      for (var e = -1; ++e < i; ) n[e](this, t);
    }
    function r() {
      for (var e = -1, r = t.apply(this, arguments); ++e < i; ) n[e](this, r);
    }
    n = T(n).map(D);
    var i = n.length;
    return "function" == typeof t ? r : e;
  }
  function D(n) {
    var t = L(n);
    return function (e, r) {
      if ((i = e.classList)) return r ? i.add(n) : i.remove(n);
      var i = e.getAttribute("class") || "";
      r
        ? ((t.lastIndex = 0),
          t.test(i) || e.setAttribute("class", q(i + " " + n)))
        : e.setAttribute("class", q(i.replace(t, " ")));
    };
  }
  function P(n, t, e) {
    function r() {
      this.style.removeProperty(n);
    }
    function i() {
      this.style.setProperty(n, t, e);
    }
    function u() {
      var r = t.apply(this, arguments);
      null == r
        ? this.style.removeProperty(n)
        : this.style.setProperty(n, r, e);
    }
    return null == t ? r : "function" == typeof t ? u : i;
  }
  function j(n, t) {
    function e() {
      delete this[n];
    }
    function r() {
      this[n] = t;
    }
    function i() {
      var e = t.apply(this, arguments);
      null == e ? delete this[n] : (this[n] = e);
    }
    return null == t ? e : "function" == typeof t ? i : r;
  }
  function U(n) {
    function t() {
      var t = this.ownerDocument,
        e = this.namespaceURI;
      return e ? t.createElementNS(e, n) : t.createElement(n);
    }
    function e() {
      return this.ownerDocument.createElementNS(n.space, n.local);
    }
    return "function" == typeof n ? n : (n = Ju.ns.qualify(n)).local ? e : t;
  }
  function F() {
    var n = this.parentNode;
    n && n.removeChild(this);
  }
  function H(n) {
    return { __data__: n };
  }
  function O(n) {
    return function () {
      return go(this, n);
    };
  }
  function Y(n) {
    return (
      arguments.length || (n = e),
      function (t, e) {
        return t && e ? n(t.__data__, e.__data__) : !t - !e;
      }
    );
  }
  function I(n, t) {
    for (var e = 0, r = n.length; e < r; e++)
      for (var i, u = n[e], o = 0, a = u.length; o < a; o++)
        (i = u[o]) && t(i, o, e);
    return n;
  }
  function Z(n) {
    return so(n, mo), n;
  }
  function V(n) {
    var t, e;
    return function (r, i, u) {
      var o,
        a = n[u].update,
        l = a.length;
      for (
        u != e && ((e = u), (t = 0)), i >= t && (t = i + 1);
        !(o = a[t]) && ++t < l;

      );
      return o;
    };
  }
  function X(n, t, e) {
    function r() {
      var t = this[o];
      t && (this.removeEventListener(n, t, t.$), delete this[o]);
    }
    function i() {
      var i = l(t, Ku(arguments));
      r.call(this),
        this.addEventListener(n, (this[o] = i), (i.$ = e)),
        (i._ = t);
    }
    function u() {
      var t,
        e = new RegExp("^__on([^.]+)" + Ju.requote(n) + "$");
      for (var r in this)
        if ((t = r.match(e))) {
          var i = this[r];
          this.removeEventListener(t[1], i, i.$), delete this[r];
        }
    }
    var o = "__on" + n,
      a = n.indexOf("."),
      l = $;
    a > 0 && (n = n.slice(0, a));
    var c = Mo.get(n);
    return c && ((n = c), (l = B)), a ? (t ? i : r) : t ? _ : u;
  }
  function $(n, t) {
    return function (e) {
      var r = Ju.event;
      (Ju.event = e), (t[0] = this.__data__);
      try {
        n.apply(this, t);
      } finally {
        Ju.event = r;
      }
    };
  }
  function B(n, t) {
    var e = $(n, t);
    return function (n) {
      var t = this,
        r = n.relatedTarget;
      (r && (r === t || 8 & r.compareDocumentPosition(t))) || e.call(t, n);
    };
  }
  function W(e) {
    var r = ".dragsuppress-" + ++_o,
      i = "click" + r,
      u = Ju.select(t(e))
        .on("touchmove" + r, S)
        .on("dragstart" + r, S)
        .on("selectstart" + r, S);
    if (
      (null == xo && (xo = !("onselectstart" in e) && x(e.style, "userSelect")),
      xo)
    ) {
      var o = n(e).style,
        a = o[xo];
      o[xo] = "none";
    }
    return function (n) {
      if ((u.on(r, null), xo && (o[xo] = a), n)) {
        var t = function () {
          u.on(i, null);
        };
        u.on(
          i,
          function () {
            S(), t();
          },
          !0
        ),
          setTimeout(t, 0);
      }
    };
  }
  function J(n, e) {
    e.changedTouches && (e = e.changedTouches[0]);
    var r = n.ownerSVGElement || n;
    if (r.createSVGPoint) {
      var i = r.createSVGPoint();
      if (bo < 0) {
        var u = t(n);
        if (u.scrollX || u.scrollY) {
          r = Ju.select("body")
            .append("svg")
            .style(
              {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                padding: 0,
                border: "none",
              },
              "important"
            );
          var o = r[0][0].getScreenCTM();
          (bo = !(o.f || o.e)), r.remove();
        }
      }
      return (
        bo
          ? ((i.x = e.pageX), (i.y = e.pageY))
          : ((i.x = e.clientX), (i.y = e.clientY)),
        (i = i.matrixTransform(n.getScreenCTM().inverse())),
        [i.x, i.y]
      );
    }
    var a = n.getBoundingClientRect();
    return [e.clientX - a.left - n.clientLeft, e.clientY - a.top - n.clientTop];
  }
  function G() {
    return Ju.event.changedTouches[0].identifier;
  }
  function K(n) {
    return n > 0 ? 1 : n < 0 ? -1 : 0;
  }
  function Q(n, t, e) {
    return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0]);
  }
  function nn(n) {
    return n > 1 ? 0 : n < -1 ? ko : Math.acos(n);
  }
  function tn(n) {
    return n > 1 ? Ao : n < -1 ? -Ao : Math.asin(n);
  }
  function en(n) {
    return ((n = Math.exp(n)) - 1 / n) / 2;
  }
  function rn(n) {
    return ((n = Math.exp(n)) + 1 / n) / 2;
  }
  function un(n) {
    return ((n = Math.exp(2 * n)) - 1) / (n + 1);
  }
  function on(n) {
    return (n = Math.sin(n / 2)) * n;
  }
  function an() {}
  function ln(n, t, e) {
    return this instanceof ln
      ? ((this.h = +n), (this.s = +t), void (this.l = +e))
      : arguments.length < 2
      ? n instanceof ln
        ? new ln(n.h, n.s, n.l)
        : bn("" + n, wn, ln)
      : new ln(n, t, e);
  }
  function cn(n, t, e) {
    function r(n) {
      return (
        n > 360 ? (n -= 360) : n < 0 && (n += 360),
        n < 60
          ? u + ((o - u) * n) / 60
          : n < 180
          ? o
          : n < 240
          ? u + ((o - u) * (240 - n)) / 60
          : u
      );
    }
    function i(n) {
      return Math.round(255 * r(n));
    }
    var u, o;
    return (
      (n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n),
      (t = isNaN(t) ? 0 : t < 0 ? 0 : t > 1 ? 1 : t),
      (e = e < 0 ? 0 : e > 1 ? 1 : e),
      (o = e <= 0.5 ? e * (1 + t) : e + t - e * t),
      (u = 2 * e - o),
      new mn(i(n + 120), i(n), i(n - 120))
    );
  }
  function fn(n, t, e) {
    return this instanceof fn
      ? ((this.h = +n), (this.c = +t), void (this.l = +e))
      : arguments.length < 2
      ? n instanceof fn
        ? new fn(n.h, n.c, n.l)
        : n instanceof hn
        ? gn(n.l, n.a, n.b)
        : gn((n = Sn((n = Ju.rgb(n)).r, n.g, n.b)).l, n.a, n.b)
      : new fn(n, t, e);
  }
  function sn(n, t, e) {
    return (
      isNaN(n) && (n = 0),
      isNaN(t) && (t = 0),
      new hn(e, Math.cos((n *= Co)) * t, Math.sin(n) * t)
    );
  }
  function hn(n, t, e) {
    return this instanceof hn
      ? ((this.l = +n), (this.a = +t), void (this.b = +e))
      : arguments.length < 2
      ? n instanceof hn
        ? new hn(n.l, n.a, n.b)
        : n instanceof fn
        ? sn(n.h, n.c, n.l)
        : Sn((n = mn(n)).r, n.g, n.b)
      : new hn(n, t, e);
  }
  function pn(n, t, e) {
    var r = (n + 16) / 116,
      i = r + t / 500,
      u = r - e / 200;
    return (
      (i = dn(i) * Ho),
      (r = dn(r) * Oo),
      (u = dn(u) * Yo),
      new mn(
        yn(3.2404542 * i - 1.5371385 * r - 0.4985314 * u),
        yn(-0.969266 * i + 1.8760108 * r + 0.041556 * u),
        yn(0.0556434 * i - 0.2040259 * r + 1.0572252 * u)
      )
    );
  }
  function gn(n, t, e) {
    return n > 0
      ? new fn(Math.atan2(e, t) * zo, Math.sqrt(t * t + e * e), n)
      : new fn(NaN, NaN, n);
  }
  function dn(n) {
    return n > 0.206893034 ? n * n * n : (n - 4 / 29) / 7.787037;
  }
  function vn(n) {
    return n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29;
  }
  function yn(n) {
    return Math.round(
      255 * (n <= 0.00304 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - 0.055)
    );
  }
  function mn(n, t, e) {
    return this instanceof mn
      ? ((this.r = ~~n), (this.g = ~~t), void (this.b = ~~e))
      : arguments.length < 2
      ? n instanceof mn
        ? new mn(n.r, n.g, n.b)
        : bn("" + n, mn, cn)
      : new mn(n, t, e);
  }
  function Mn(n) {
    return new mn(n >> 16, (n >> 8) & 255, 255 & n);
  }
  function xn(n) {
    return Mn(n) + "";
  }
  function _n(n) {
    return n < 16
      ? "0" + Math.max(0, n).toString(16)
      : Math.min(255, n).toString(16);
  }
  function bn(n, t, e) {
    var r,
      i,
      u,
      o = 0,
      a = 0,
      l = 0;
    if ((r = /([a-z]+)\((.*)\)/.exec((n = n.toLowerCase()))))
      switch (((i = r[2].split(",")), r[1])) {
        case "hsl":
          return e(
            parseFloat(i[0]),
            parseFloat(i[1]) / 100,
            parseFloat(i[2]) / 100
          );
        case "rgb":
          return t(Nn(i[0]), Nn(i[1]), Nn(i[2]));
      }
    return (u = Vo.get(n))
      ? t(u.r, u.g, u.b)
      : (null == n ||
          "#" !== n.charAt(0) ||
          isNaN((u = parseInt(n.slice(1), 16))) ||
          (4 === n.length
            ? ((o = (3840 & u) >> 4),
              (o = (o >> 4) | o),
              (a = 240 & u),
              (a = (a >> 4) | a),
              (l = 15 & u),
              (l = (l << 4) | l))
            : 7 === n.length &&
              ((o = (16711680 & u) >> 16),
              (a = (65280 & u) >> 8),
              (l = 255 & u))),
        t(o, a, l));
  }
  function wn(n, t, e) {
    var r,
      i,
      u = Math.min((n /= 255), (t /= 255), (e /= 255)),
      o = Math.max(n, t, e),
      a = o - u,
      l = (o + u) / 2;
    return (
      a
        ? ((i = l < 0.5 ? a / (o + u) : a / (2 - o - u)),
          (r =
            n == o
              ? (t - e) / a + (t < e ? 6 : 0)
              : t == o
              ? (e - n) / a + 2
              : (n - t) / a + 4),
          (r *= 60))
        : ((r = NaN), (i = l > 0 && l < 1 ? 0 : r)),
      new ln(r, i, l)
    );
  }
  function Sn(n, t, e) {
    (n = kn(n)), (t = kn(t)), (e = kn(e));
    var r = vn((0.4124564 * n + 0.3575761 * t + 0.1804375 * e) / Ho),
      i = vn((0.2126729 * n + 0.7151522 * t + 0.072175 * e) / Oo),
      u = vn((0.0193339 * n + 0.119192 * t + 0.9503041 * e) / Yo);
    return hn(116 * i - 16, 500 * (r - i), 200 * (i - u));
  }
  function kn(n) {
    return (n /= 255) <= 0.04045
      ? n / 12.92
      : Math.pow((n + 0.055) / 1.055, 2.4);
  }
  function Nn(n) {
    var t = parseFloat(n);
    return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t;
  }
  function En(n) {
    return "function" == typeof n
      ? n
      : function () {
          return n;
        };
  }
  function An(n) {
    return function (t, e, r) {
      return (
        2 === arguments.length &&
          "function" == typeof e &&
          ((r = e), (e = null)),
        Cn(t, e, n, r)
      );
    };
  }
  function Cn(n, t, e, r) {
    function i() {
      var n,
        t = l.status;
      if ((!t && qn(l)) || (t >= 200 && t < 300) || 304 === t) {
        try {
          n = e.call(u, l);
        } catch (n) {
          return void o.error.call(u, n);
        }
        o.load.call(u, n);
      } else o.error.call(u, l);
    }
    var u = {},
      o = Ju.dispatch("beforesend", "progress", "load", "error"),
      a = {},
      l = new XMLHttpRequest(),
      c = null;
    return (
      !this.XDomainRequest ||
        "withCredentials" in l ||
        !/^(http(s)?:)?\/\//.test(n) ||
        (l = new XDomainRequest()),
      "onload" in l
        ? (l.onload = l.onerror = i)
        : (l.onreadystatechange = function () {
            l.readyState > 3 && i();
          }),
      (l.onprogress = function (n) {
        var t = Ju.event;
        Ju.event = n;
        try {
          o.progress.call(u, l);
        } finally {
          Ju.event = t;
        }
      }),
      (u.header = function (n, t) {
        return (
          (n = (n + "").toLowerCase()),
          arguments.length < 2
            ? a[n]
            : (null == t ? delete a[n] : (a[n] = t + ""), u)
        );
      }),
      (u.mimeType = function (n) {
        return arguments.length ? ((t = null == n ? null : n + ""), u) : t;
      }),
      (u.responseType = function (n) {
        return arguments.length ? ((c = n), u) : c;
      }),
      (u.response = function (n) {
        return (e = n), u;
      }),
      ["get", "post"].forEach(function (n) {
        u[n] = function () {
          return u.send.apply(u, [n].concat(Ku(arguments)));
        };
      }),
      (u.send = function (e, r, i) {
        if (
          (2 === arguments.length &&
            "function" == typeof r &&
            ((i = r), (r = null)),
          l.open(e, n, !0),
          null == t || "accept" in a || (a.accept = t + ",*/*"),
          l.setRequestHeader)
        )
          for (var f in a) l.setRequestHeader(f, a[f]);
        return (
          null != t && l.overrideMimeType && l.overrideMimeType(t),
          null != c && (l.responseType = c),
          null != i &&
            u.on("error", i).on("load", function (n) {
              i(null, n);
            }),
          o.beforesend.call(u, l),
          l.send(null == r ? null : r),
          u
        );
      }),
      (u.abort = function () {
        return l.abort(), u;
      }),
      Ju.rebind(u, o, "on"),
      null == r ? u : u.get(zn(r))
    );
  }
  function zn(n) {
    return 1 === n.length
      ? function (t, e) {
          n(null == t ? e : null);
        }
      : n;
  }
  function qn(n) {
    var t = n.responseType;
    return t && "text" !== t ? n.response : n.responseText;
  }
  function Ln() {
    var n = Tn(),
      t = Rn() - n;
    t > 24
      ? (isFinite(t) && (clearTimeout(Wo), (Wo = setTimeout(Ln, t))), (Bo = 0))
      : ((Bo = 1), Go(Ln));
  }
  function Tn() {
    var n = Date.now();
    for (Jo = Xo; Jo; ) n >= Jo.t && (Jo.f = Jo.c(n - Jo.t)), (Jo = Jo.n);
    return n;
  }
  function Rn() {
    for (var n, t = Xo, e = 1 / 0; t; )
      t.f
        ? (t = n ? (n.n = t.n) : (Xo = t.n))
        : (t.t < e && (e = t.t), (t = (n = t).n));
    return ($o = n), e;
  }
  function Dn(n, t) {
    return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1);
  }
  function Pn(n, t) {
    var e = Math.pow(10, 3 * oo(8 - t));
    return {
      scale:
        t > 8
          ? function (n) {
              return n / e;
            }
          : function (n) {
              return n * e;
            },
      symbol: n,
    };
  }
  function jn(n) {
    var t = n.decimal,
      e = n.thousands,
      r = n.grouping,
      i = n.currency,
      u =
        r && e
          ? function (n, t) {
              for (
                var i = n.length, u = [], o = 0, a = r[0], l = 0;
                i > 0 &&
                a > 0 &&
                (l + a + 1 > t && (a = Math.max(1, t - l)),
                u.push(n.substring((i -= a), i + a)),
                !((l += a + 1) > t));

              )
                a = r[(o = (o + 1) % r.length)];
              return u.reverse().join(e);
            }
          : m;
    return function (n) {
      var e = Qo.exec(n),
        r = e[1] || " ",
        o = e[2] || ">",
        a = e[3] || "-",
        l = e[4] || "",
        c = e[5],
        f = +e[6],
        s = e[7],
        h = e[8],
        p = e[9],
        g = 1,
        d = "",
        v = "",
        y = !1,
        m = !0;
      switch (
        (h && (h = +h.substring(1)),
        (c || ("0" === r && "=" === o)) && ((c = r = "0"), (o = "=")),
        p)
      ) {
        case "n":
          (s = !0), (p = "g");
          break;
        case "%":
          (g = 100), (v = "%"), (p = "f");
          break;
        case "p":
          (g = 100), (v = "%"), (p = "r");
          break;
        case "b":
        case "o":
        case "x":
        case "X":
          "#" === l && (d = "0" + p.toLowerCase());
        case "c":
          m = !1;
        case "d":
          (y = !0), (h = 0);
          break;
        case "s":
          (g = -1), (p = "r");
      }
      "$" === l && ((d = i[0]), (v = i[1])),
        "r" != p || h || (p = "g"),
        null != h &&
          ("g" == p
            ? (h = Math.max(1, Math.min(21, h)))
            : ("e" != p && "f" != p) || (h = Math.max(0, Math.min(20, h)))),
        (p = na.get(p) || Un);
      var M = c && s;
      return function (n) {
        var e = v;
        if (y && n % 1) return "";
        var i =
          n < 0 || (0 === n && 1 / n < 0)
            ? ((n = -n), "-")
            : "-" === a
            ? ""
            : a;
        if (g < 0) {
          var l = Ju.formatPrefix(n, h);
          (n = l.scale(n)), (e = l.symbol + v);
        } else n *= g;
        n = p(n, h);
        var x,
          _,
          b = n.lastIndexOf(".");
        if (b < 0) {
          var w = m ? n.lastIndexOf("e") : -1;
          w < 0
            ? ((x = n), (_ = ""))
            : ((x = n.substring(0, w)), (_ = n.substring(w)));
        } else (x = n.substring(0, b)), (_ = t + n.substring(b + 1));
        !c && s && (x = u(x, 1 / 0));
        var S = d.length + x.length + _.length + (M ? 0 : i.length),
          k = S < f ? new Array((S = f - S + 1)).join(r) : "";
        return (
          M && (x = u(k + x, k.length ? f - _.length : 1 / 0)),
          (i += d),
          (n = x + _),
          ("<" === o
            ? i + n + k
            : ">" === o
            ? k + i + n
            : "^" === o
            ? k.substring(0, (S >>= 1)) + i + n + k.substring(S)
            : i + (M ? n : k + n)) + e
        );
      };
    };
  }
  function Un(n) {
    return n + "";
  }
  function Fn() {
    this._ = new Date(
      arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]
    );
  }
  function Hn(n, t, e) {
    function r(t) {
      var e = n(t),
        r = u(e, 1);
      return t - e < r - t ? e : r;
    }
    function i(e) {
      return t((e = n(new ea(e - 1))), 1), e;
    }
    function u(n, e) {
      return t((n = new ea(+n)), e), n;
    }
    function o(n, r, u) {
      var o = i(n),
        a = [];
      if (u > 1) for (; o < r; ) e(o) % u || a.push(new Date(+o)), t(o, 1);
      else for (; o < r; ) a.push(new Date(+o)), t(o, 1);
      return a;
    }
    function a(n, t, e) {
      try {
        ea = Fn;
        var r = new Fn();
        return (r._ = n), o(r, t, e);
      } finally {
        ea = Date;
      }
    }
    (n.floor = n), (n.round = r), (n.ceil = i), (n.offset = u), (n.range = o);
    var l = (n.utc = On(n));
    return (
      (l.floor = l),
      (l.round = On(r)),
      (l.ceil = On(i)),
      (l.offset = On(u)),
      (l.range = a),
      n
    );
  }
  function On(n) {
    return function (t, e) {
      try {
        ea = Fn;
        var r = new Fn();
        return (r._ = t), n(r, e)._;
      } finally {
        ea = Date;
      }
    };
  }
  function Yn(n) {
    function t(n) {
      function t(t) {
        for (var e, i, u, o = [], a = -1, l = 0; ++a < r; )
          37 === n.charCodeAt(a) &&
            (o.push(n.slice(l, a)),
            null != (i = ia[(e = n.charAt(++a))]) && (e = n.charAt(++a)),
            (u = A[e]) && (e = u(t, null == i ? ("e" === e ? " " : "0") : i)),
            o.push(e),
            (l = a + 1));
        return o.push(n.slice(l, a)), o.join("");
      }
      var r = n.length;
      return (
        (t.parse = function (t) {
          var r = { y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null },
            i = e(r, n, t, 0);
          if (i != t.length) return null;
          "p" in r && (r.H = (r.H % 12) + 12 * r.p);
          var u = null != r.Z && ea !== Fn,
            o = new (u ? Fn : ea)();
          return (
            "j" in r
              ? o.setFullYear(r.y, 0, r.j)
              : "w" in r && ("W" in r || "U" in r)
              ? (o.setFullYear(r.y, 0, 1),
                o.setFullYear(
                  r.y,
                  0,
                  "W" in r
                    ? ((r.w + 6) % 7) + 7 * r.W - ((o.getDay() + 5) % 7)
                    : r.w + 7 * r.U - ((o.getDay() + 6) % 7)
                ))
              : o.setFullYear(r.y, r.m, r.d),
            o.setHours(r.H + ((r.Z / 100) | 0), r.M + (r.Z % 100), r.S, r.L),
            u ? o._ : o
          );
        }),
        (t.toString = function () {
          return n;
        }),
        t
      );
    }
    function e(n, t, e, r) {
      for (var i, u, o, a = 0, l = t.length, c = e.length; a < l; ) {
        if (r >= c) return -1;
        if (((i = t.charCodeAt(a++)), 37 === i)) {
          if (
            ((o = t.charAt(a++)),
            (u = C[o in ia ? t.charAt(a++) : o]),
            !u || (r = u(n, e, r)) < 0)
          )
            return -1;
        } else if (i != e.charCodeAt(r++)) return -1;
      }
      return r;
    }
    function r(n, t, e) {
      b.lastIndex = 0;
      var r = b.exec(t.slice(e));
      return r ? ((n.w = w.get(r[0].toLowerCase())), e + r[0].length) : -1;
    }
    function i(n, t, e) {
      x.lastIndex = 0;
      var r = x.exec(t.slice(e));
      return r ? ((n.w = _.get(r[0].toLowerCase())), e + r[0].length) : -1;
    }
    function u(n, t, e) {
      N.lastIndex = 0;
      var r = N.exec(t.slice(e));
      return r ? ((n.m = E.get(r[0].toLowerCase())), e + r[0].length) : -1;
    }
    function o(n, t, e) {
      S.lastIndex = 0;
      var r = S.exec(t.slice(e));
      return r ? ((n.m = k.get(r[0].toLowerCase())), e + r[0].length) : -1;
    }
    function a(n, t, r) {
      return e(n, A.c.toString(), t, r);
    }
    function l(n, t, r) {
      return e(n, A.x.toString(), t, r);
    }
    function c(n, t, r) {
      return e(n, A.X.toString(), t, r);
    }
    function f(n, t, e) {
      var r = M.get(t.slice(e, (e += 2)).toLowerCase());
      return null == r ? -1 : ((n.p = r), e);
    }
    var s = n.dateTime,
      h = n.date,
      p = n.time,
      g = n.periods,
      d = n.days,
      v = n.shortDays,
      y = n.months,
      m = n.shortMonths;
    (t.utc = function (n) {
      function e(n) {
        try {
          ea = Fn;
          var t = new ea();
          return (t._ = n), r(t);
        } finally {
          ea = Date;
        }
      }
      var r = t(n);
      return (
        (e.parse = function (n) {
          try {
            ea = Fn;
            var t = r.parse(n);
            return t && t._;
          } finally {
            ea = Date;
          }
        }),
        (e.toString = r.toString),
        e
      );
    }),
      (t.multi = t.utc.multi = lt);
    var M = Ju.map(),
      x = Zn(d),
      _ = Vn(d),
      b = Zn(v),
      w = Vn(v),
      S = Zn(y),
      k = Vn(y),
      N = Zn(m),
      E = Vn(m);
    g.forEach(function (n, t) {
      M.set(n.toLowerCase(), t);
    });
    var A = {
        a: function (n) {
          return v[n.getDay()];
        },
        A: function (n) {
          return d[n.getDay()];
        },
        b: function (n) {
          return m[n.getMonth()];
        },
        B: function (n) {
          return y[n.getMonth()];
        },
        c: t(s),
        d: function (n, t) {
          return In(n.getDate(), t, 2);
        },
        e: function (n, t) {
          return In(n.getDate(), t, 2);
        },
        H: function (n, t) {
          return In(n.getHours(), t, 2);
        },
        I: function (n, t) {
          return In(n.getHours() % 12 || 12, t, 2);
        },
        j: function (n, t) {
          return In(1 + ta.dayOfYear(n), t, 3);
        },
        L: function (n, t) {
          return In(n.getMilliseconds(), t, 3);
        },
        m: function (n, t) {
          return In(n.getMonth() + 1, t, 2);
        },
        M: function (n, t) {
          return In(n.getMinutes(), t, 2);
        },
        p: function (n) {
          return g[+(n.getHours() >= 12)];
        },
        S: function (n, t) {
          return In(n.getSeconds(), t, 2);
        },
        U: function (n, t) {
          return In(ta.sundayOfYear(n), t, 2);
        },
        w: function (n) {
          return n.getDay();
        },
        W: function (n, t) {
          return In(ta.mondayOfYear(n), t, 2);
        },
        x: t(h),
        X: t(p),
        y: function (n, t) {
          return In(n.getFullYear() % 100, t, 2);
        },
        Y: function (n, t) {
          return In(n.getFullYear() % 1e4, t, 4);
        },
        Z: ot,
        "%": function () {
          return "%";
        },
      },
      C = {
        a: r,
        A: i,
        b: u,
        B: o,
        c: a,
        d: nt,
        e: nt,
        H: et,
        I: et,
        j: tt,
        L: ut,
        m: Qn,
        M: rt,
        p: f,
        S: it,
        U: $n,
        w: Xn,
        W: Bn,
        x: l,
        X: c,
        y: Jn,
        Y: Wn,
        Z: Gn,
        "%": at,
      };
    return t;
  }
  function In(n, t, e) {
    var r = n < 0 ? "-" : "",
      i = (r ? -n : n) + "",
      u = i.length;
    return r + (u < e ? new Array(e - u + 1).join(t) + i : i);
  }
  function Zn(n) {
    return new RegExp("^(?:" + n.map(Ju.requote).join("|") + ")", "i");
  }
  function Vn(n) {
    for (var t = new c(), e = -1, r = n.length; ++e < r; )
      t.set(n[e].toLowerCase(), e);
    return t;
  }
  function Xn(n, t, e) {
    ua.lastIndex = 0;
    var r = ua.exec(t.slice(e, e + 1));
    return r ? ((n.w = +r[0]), e + r[0].length) : -1;
  }
  function $n(n, t, e) {
    ua.lastIndex = 0;
    var r = ua.exec(t.slice(e));
    return r ? ((n.U = +r[0]), e + r[0].length) : -1;
  }
  function Bn(n, t, e) {
    ua.lastIndex = 0;
    var r = ua.exec(t.slice(e));
    return r ? ((n.W = +r[0]), e + r[0].length) : -1;
  }
  function Wn(n, t, e) {
    ua.lastIndex = 0;
    var r = ua.exec(t.slice(e, e + 4));
    return r ? ((n.y = +r[0]), e + r[0].length) : -1;
  }
  function Jn(n, t, e) {
    ua.lastIndex = 0;
    var r = ua.exec(t.slice(e, e + 2));
    return r ? ((n.y = Kn(+r[0])), e + r[0].length) : -1;
  }
  function Gn(n, t, e) {
    return /^[+-]\d{4}$/.test((t = t.slice(e, e + 5)))
      ? ((n.Z = -t), e + 5)
      : -1;
  }
  function Kn(n) {
    return n + (n > 68 ? 1900 : 2e3);
  }
  function Qn(n, t, e) {
    ua.lastIndex = 0;
    var r = ua.exec(t.slice(e, e + 2));
    return r ? ((n.m = r[0] - 1), e + r[0].length) : -1;
  }
  function nt(n, t, e) {
    ua.lastIndex = 0;
    var r = ua.exec(t.slice(e, e + 2));
    return r ? ((n.d = +r[0]), e + r[0].length) : -1;
  }
  function tt(n, t, e) {
    ua.lastIndex = 0;
    var r = ua.exec(t.slice(e, e + 3));
    return r ? ((n.j = +r[0]), e + r[0].length) : -1;
  }
  function et(n, t, e) {
    ua.lastIndex = 0;
    var r = ua.exec(t.slice(e, e + 2));
    return r ? ((n.H = +r[0]), e + r[0].length) : -1;
  }
  function rt(n, t, e) {
    ua.lastIndex = 0;
    var r = ua.exec(t.slice(e, e + 2));
    return r ? ((n.M = +r[0]), e + r[0].length) : -1;
  }
  function it(n, t, e) {
    ua.lastIndex = 0;
    var r = ua.exec(t.slice(e, e + 2));
    return r ? ((n.S = +r[0]), e + r[0].length) : -1;
  }
  function ut(n, t, e) {
    ua.lastIndex = 0;
    var r = ua.exec(t.slice(e, e + 3));
    return r ? ((n.L = +r[0]), e + r[0].length) : -1;
  }
  function ot(n) {
    var t = n.getTimezoneOffset(),
      e = t > 0 ? "-" : "+",
      r = (oo(t) / 60) | 0,
      i = oo(t) % 60;
    return e + In(r, "0", 2) + In(i, "0", 2);
  }
  function at(n, t, e) {
    oa.lastIndex = 0;
    var r = oa.exec(t.slice(e, e + 1));
    return r ? e + r[0].length : -1;
  }
  function lt(n) {
    for (var t = n.length, e = -1; ++e < t; ) n[e][0] = this(n[e][0]);
    return function (t) {
      for (var e = 0, r = n[e]; !r[1](t); ) r = n[++e];
      return r[0](t);
    };
  }
  function ct() {}
  function ft(n, t, e) {
    var r = (e.s = n + t),
      i = r - n,
      u = r - i;
    e.t = n - u + (t - i);
  }
  function st(n, t) {
    n && fa.hasOwnProperty(n.type) && fa[n.type](n, t);
  }
  function ht(n, t, e) {
    var r,
      i = -1,
      u = n.length - e;
    for (t.lineStart(); ++i < u; ) (r = n[i]), t.point(r[0], r[1], r[2]);
    t.lineEnd();
  }
  function pt(n, t) {
    var e = -1,
      r = n.length;
    for (t.polygonStart(); ++e < r; ) ht(n[e], t, 1);
    t.polygonEnd();
  }
  function gt() {
    function n(n, t) {
      (n *= Co), (t = (t * Co) / 2 + ko / 4);
      var e = n - r,
        o = e >= 0 ? 1 : -1,
        a = o * e,
        l = Math.cos(t),
        c = Math.sin(t),
        f = u * c,
        s = i * l + f * Math.cos(a),
        h = f * o * Math.sin(a);
      ha.add(Math.atan2(h, s)), (r = n), (i = l), (u = c);
    }
    var t, e, r, i, u;
    (pa.point = function (o, a) {
      (pa.point = n),
        (r = (t = o) * Co),
        (i = Math.cos((a = ((e = a) * Co) / 2 + ko / 4))),
        (u = Math.sin(a));
    }),
      (pa.lineEnd = function () {
        n(t, e);
      });
  }
  function dt(n) {
    var t = n[0],
      e = n[1],
      r = Math.cos(e);
    return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)];
  }
  function vt(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2];
  }
  function yt(n, t) {
    return [
      n[1] * t[2] - n[2] * t[1],
      n[2] * t[0] - n[0] * t[2],
      n[0] * t[1] - n[1] * t[0],
    ];
  }
  function mt(n, t) {
    (n[0] += t[0]), (n[1] += t[1]), (n[2] += t[2]);
  }
  function Mt(n, t) {
    return [n[0] * t, n[1] * t, n[2] * t];
  }
  function xt(n) {
    var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
    (n[0] /= t), (n[1] /= t), (n[2] /= t);
  }
  function _t(n) {
    return [Math.atan2(n[1], n[0]), tn(n[2])];
  }
  function bt(n, t) {
    return oo(n[0] - t[0]) < wo && oo(n[1] - t[1]) < wo;
  }
  function wt(n, t) {
    n *= Co;
    var e = Math.cos((t *= Co));
    St(e * Math.cos(n), e * Math.sin(n), Math.sin(t));
  }
  function St(n, t, e) {
    ++ga, (va += (n - va) / ga), (ya += (t - ya) / ga), (ma += (e - ma) / ga);
  }
  function kt() {
    function n(n, i) {
      n *= Co;
      var u = Math.cos((i *= Co)),
        o = u * Math.cos(n),
        a = u * Math.sin(n),
        l = Math.sin(i),
        c = Math.atan2(
          Math.sqrt(
            (c = e * l - r * a) * c +
              (c = r * o - t * l) * c +
              (c = t * a - e * o) * c
          ),
          t * o + e * a + r * l
        );
      (da += c),
        (Ma += c * (t + (t = o))),
        (xa += c * (e + (e = a))),
        (_a += c * (r + (r = l))),
        St(t, e, r);
    }
    var t, e, r;
    ka.point = function (i, u) {
      i *= Co;
      var o = Math.cos((u *= Co));
      (t = o * Math.cos(i)),
        (e = o * Math.sin(i)),
        (r = Math.sin(u)),
        (ka.point = n),
        St(t, e, r);
    };
  }
  function Nt() {
    ka.point = wt;
  }
  function Et() {
    function n(n, t) {
      n *= Co;
      var e = Math.cos((t *= Co)),
        o = e * Math.cos(n),
        a = e * Math.sin(n),
        l = Math.sin(t),
        c = i * l - u * a,
        f = u * o - r * l,
        s = r * a - i * o,
        h = Math.sqrt(c * c + f * f + s * s),
        p = r * o + i * a + u * l,
        g = h && -nn(p) / h,
        d = Math.atan2(h, p);
      (ba += g * c),
        (wa += g * f),
        (Sa += g * s),
        (da += d),
        (Ma += d * (r + (r = o))),
        (xa += d * (i + (i = a))),
        (_a += d * (u + (u = l))),
        St(r, i, u);
    }
    var t, e, r, i, u;
    (ka.point = function (o, a) {
      (t = o), (e = a), (ka.point = n), (o *= Co);
      var l = Math.cos((a *= Co));
      (r = l * Math.cos(o)),
        (i = l * Math.sin(o)),
        (u = Math.sin(a)),
        St(r, i, u);
    }),
      (ka.lineEnd = function () {
        n(t, e), (ka.lineEnd = Nt), (ka.point = wt);
      });
  }
  function At(n, t) {
    function e(e, r) {
      return (e = n(e, r)), t(e[0], e[1]);
    }
    return (
      n.invert &&
        t.invert &&
        (e.invert = function (e, r) {
          return (e = t.invert(e, r)), e && n.invert(e[0], e[1]);
        }),
      e
    );
  }
  function Ct() {
    return !0;
  }
  function zt(n, t, e, r, i) {
    var u = [],
      o = [];
    if (
      (n.forEach(function (n) {
        if (!((t = n.length - 1) <= 0)) {
          var t,
            e = n[0],
            r = n[t];
          if (bt(e, r)) {
            i.lineStart();
            for (var a = 0; a < t; ++a) i.point((e = n[a])[0], e[1]);
            return void i.lineEnd();
          }
          var l = new Lt(e, n, null, !0),
            c = new Lt(e, null, l, !1);
          (l.o = c),
            u.push(l),
            o.push(c),
            (l = new Lt(r, n, null, !1)),
            (c = new Lt(r, null, l, !0)),
            (l.o = c),
            u.push(l),
            o.push(c);
        }
      }),
      o.sort(t),
      qt(u),
      qt(o),
      u.length)
    ) {
      for (var a = 0, l = e, c = o.length; a < c; ++a) o[a].e = l = !l;
      for (var f, s, h = u[0]; ; ) {
        for (var p = h, g = !0; p.v; ) if ((p = p.n) === h) return;
        (f = p.z), i.lineStart();
        do {
          if (((p.v = p.o.v = !0), p.e)) {
            if (g)
              for (var a = 0, c = f.length; a < c; ++a)
                i.point((s = f[a])[0], s[1]);
            else r(p.x, p.n.x, 1, i);
            p = p.n;
          } else {
            if (g) {
              f = p.p.z;
              for (var a = f.length - 1; a >= 0; --a)
                i.point((s = f[a])[0], s[1]);
            } else r(p.x, p.p.x, -1, i);
            p = p.p;
          }
          (p = p.o), (f = p.z), (g = !g);
        } while (!p.v);
        i.lineEnd();
      }
    }
  }
  function qt(n) {
    if ((t = n.length)) {
      for (var t, e, r = 0, i = n[0]; ++r < t; )
        (i.n = e = n[r]), (e.p = i), (i = e);
      (i.n = e = n[0]), (e.p = i);
    }
  }
  function Lt(n, t, e, r) {
    (this.x = n),
      (this.z = t),
      (this.o = e),
      (this.e = r),
      (this.v = !1),
      (this.n = this.p = null);
  }
  function Tt(n, t, e, r) {
    return function (i, u) {
      function o(t, e) {
        var r = i(t, e);
        n((t = r[0]), (e = r[1])) && u.point(t, e);
      }
      function a(n, t) {
        var e = i(n, t);
        v.point(e[0], e[1]);
      }
      function l() {
        (m.point = a), v.lineStart();
      }
      function c() {
        (m.point = o), v.lineEnd();
      }
      function f(n, t) {
        d.push([n, t]);
        var e = i(n, t);
        x.point(e[0], e[1]);
      }
      function s() {
        x.lineStart(), (d = []);
      }
      function h() {
        f(d[0][0], d[0][1]), x.lineEnd();
        var n,
          t = x.clean(),
          e = M.buffer(),
          r = e.length;
        if ((d.pop(), g.push(d), (d = null), r))
          if (1 & t) {
            n = e[0];
            var i,
              r = n.length - 1,
              o = -1;
            if (r > 0) {
              for (_ || (u.polygonStart(), (_ = !0)), u.lineStart(); ++o < r; )
                u.point((i = n[o])[0], i[1]);
              u.lineEnd();
            }
          } else
            r > 1 && 2 & t && e.push(e.pop().concat(e.shift())),
              p.push(e.filter(Rt));
      }
      var p,
        g,
        d,
        v = t(u),
        y = i.invert(r[0], r[1]),
        m = {
          point: o,
          lineStart: l,
          lineEnd: c,
          polygonStart: function () {
            (m.point = f),
              (m.lineStart = s),
              (m.lineEnd = h),
              (p = []),
              (g = []);
          },
          polygonEnd: function () {
            (m.point = o),
              (m.lineStart = l),
              (m.lineEnd = c),
              (p = Ju.merge(p));
            var n = Ht(y, g);
            p.length
              ? (_ || (u.polygonStart(), (_ = !0)), zt(p, Pt, n, e, u))
              : n &&
                (_ || (u.polygonStart(), (_ = !0)),
                u.lineStart(),
                e(null, null, 1, u),
                u.lineEnd()),
              _ && (u.polygonEnd(), (_ = !1)),
              (p = g = null);
          },
          sphere: function () {
            u.polygonStart(),
              u.lineStart(),
              e(null, null, 1, u),
              u.lineEnd(),
              u.polygonEnd();
          },
        },
        M = Dt(),
        x = t(M),
        _ = !1;
      return m;
    };
  }
  function Rt(n) {
    return n.length > 1;
  }
  function Dt() {
    var n,
      t = [];
    return {
      lineStart: function () {
        t.push((n = []));
      },
      point: function (t, e) {
        n.push([t, e]);
      },
      lineEnd: _,
      buffer: function () {
        var e = t;
        return (t = []), (n = null), e;
      },
      rejoin: function () {
        t.length > 1 && t.push(t.pop().concat(t.shift()));
      },
    };
  }
  function Pt(n, t) {
    return (
      ((n = n.x)[0] < 0 ? n[1] - Ao - wo : Ao - n[1]) -
      ((t = t.x)[0] < 0 ? t[1] - Ao - wo : Ao - t[1])
    );
  }
  function jt(n) {
    var t,
      e = NaN,
      r = NaN,
      i = NaN;
    return {
      lineStart: function () {
        n.lineStart(), (t = 1);
      },
      point: function (u, o) {
        var a = u > 0 ? ko : -ko,
          l = oo(u - e);
        oo(l - ko) < wo
          ? (n.point(e, (r = (r + o) / 2 > 0 ? Ao : -Ao)),
            n.point(i, r),
            n.lineEnd(),
            n.lineStart(),
            n.point(a, r),
            n.point(u, r),
            (t = 0))
          : i !== a &&
            l >= ko &&
            (oo(e - i) < wo && (e -= i * wo),
            oo(u - a) < wo && (u -= a * wo),
            (r = Ut(e, r, u, o)),
            n.point(i, r),
            n.lineEnd(),
            n.lineStart(),
            n.point(a, r),
            (t = 0)),
          n.point((e = u), (r = o)),
          (i = a);
      },
      lineEnd: function () {
        n.lineEnd(), (e = r = NaN);
      },
      clean: function () {
        return 2 - t;
      },
    };
  }
  function Ut(n, t, e, r) {
    var i,
      u,
      o = Math.sin(n - e);
    return oo(o) > wo
      ? Math.atan(
          (Math.sin(t) * (u = Math.cos(r)) * Math.sin(e) -
            Math.sin(r) * (i = Math.cos(t)) * Math.sin(n)) /
            (i * u * o)
        )
      : (t + r) / 2;
  }
  function Ft(n, t, e, r) {
    var i;
    if (null == n)
      (i = e * Ao),
        r.point(-ko, i),
        r.point(0, i),
        r.point(ko, i),
        r.point(ko, 0),
        r.point(ko, -i),
        r.point(0, -i),
        r.point(-ko, -i),
        r.point(-ko, 0),
        r.point(-ko, i);
    else if (oo(n[0] - t[0]) > wo) {
      var u = n[0] < t[0] ? ko : -ko;
      (i = (e * u) / 2), r.point(-u, i), r.point(0, i), r.point(u, i);
    } else r.point(t[0], t[1]);
  }
  function Ht(n, t) {
    var e = n[0],
      r = n[1],
      i = [Math.sin(e), -Math.cos(e), 0],
      u = 0,
      o = 0;
    ha.reset();
    for (var a = 0, l = t.length; a < l; ++a) {
      var c = t[a],
        f = c.length;
      if (f)
        for (
          var s = c[0],
            h = s[0],
            p = s[1] / 2 + ko / 4,
            g = Math.sin(p),
            d = Math.cos(p),
            v = 1;
          ;

        ) {
          v === f && (v = 0), (n = c[v]);
          var y = n[0],
            m = n[1] / 2 + ko / 4,
            M = Math.sin(m),
            x = Math.cos(m),
            _ = y - h,
            b = _ >= 0 ? 1 : -1,
            w = b * _,
            S = w > ko,
            k = g * M;
          if (
            (ha.add(Math.atan2(k * b * Math.sin(w), d * x + k * Math.cos(w))),
            (u += S ? _ + b * No : _),
            S ^ (h >= e) ^ (y >= e))
          ) {
            var N = yt(dt(s), dt(n));
            xt(N);
            var E = yt(i, N);
            xt(E);
            var A = (S ^ (_ >= 0) ? -1 : 1) * tn(E[2]);
            (r > A || (r === A && (N[0] || N[1]))) &&
              (o += S ^ (_ >= 0) ? 1 : -1);
          }
          if (!v++) break;
          (h = y), (g = M), (d = x), (s = n);
        }
    }
    return (u < -wo || (u < wo && ha < 0)) ^ (1 & o);
  }
  function Ot(n) {
    function t(n, t) {
      return Math.cos(n) * Math.cos(t) > u;
    }
    function e(n) {
      var e, u, l, c, f;
      return {
        lineStart: function () {
          (c = l = !1), (f = 1);
        },
        point: function (s, h) {
          var p,
            g = [s, h],
            d = t(s, h),
            v = o ? (d ? 0 : i(s, h)) : d ? i(s + (s < 0 ? ko : -ko), h) : 0;
          if (
            (!e && (c = l = d) && n.lineStart(),
            d !== l &&
              ((p = r(e, g)),
              (bt(e, p) || bt(g, p)) &&
                ((g[0] += wo), (g[1] += wo), (d = t(g[0], g[1])))),
            d !== l)
          )
            (f = 0),
              d
                ? (n.lineStart(), (p = r(g, e)), n.point(p[0], p[1]))
                : ((p = r(e, g)), n.point(p[0], p[1]), n.lineEnd()),
              (e = p);
          else if (a && e && o ^ d) {
            var y;
            v & u ||
              !(y = r(g, e, !0)) ||
              ((f = 0),
              o
                ? (n.lineStart(),
                  n.point(y[0][0], y[0][1]),
                  n.point(y[1][0], y[1][1]),
                  n.lineEnd())
                : (n.point(y[1][0], y[1][1]),
                  n.lineEnd(),
                  n.lineStart(),
                  n.point(y[0][0], y[0][1])));
          }
          !d || (e && bt(e, g)) || n.point(g[0], g[1]),
            (e = g),
            (l = d),
            (u = v);
        },
        lineEnd: function () {
          l && n.lineEnd(), (e = null);
        },
        clean: function () {
          return f | ((c && l) << 1);
        },
      };
    }
    function r(n, t, e) {
      var r = dt(n),
        i = dt(t),
        o = [1, 0, 0],
        a = yt(r, i),
        l = vt(a, a),
        c = a[0],
        f = l - c * c;
      if (!f) return !e && n;
      var s = (u * l) / f,
        h = (-u * c) / f,
        p = yt(o, a),
        g = Mt(o, s),
        d = Mt(a, h);
      mt(g, d);
      var v = p,
        y = vt(g, v),
        m = vt(v, v),
        M = y * y - m * (vt(g, g) - 1);
      if (!(M < 0)) {
        var x = Math.sqrt(M),
          _ = Mt(v, (-y - x) / m);
        if ((mt(_, g), (_ = _t(_)), !e)) return _;
        var b,
          w = n[0],
          S = t[0],
          k = n[1],
          N = t[1];
        S < w && ((b = w), (w = S), (S = b));
        var E = S - w,
          A = oo(E - ko) < wo,
          C = A || E < wo;
        if (
          (!A && N < k && ((b = k), (k = N), (N = b)),
          C
            ? A
              ? (k + N > 0) ^ (_[1] < (oo(_[0] - w) < wo ? k : N))
              : k <= _[1] && _[1] <= N
            : (E > ko) ^ (w <= _[0] && _[0] <= S))
        ) {
          var z = Mt(v, (-y + x) / m);
          return mt(z, g), [_, _t(z)];
        }
      }
    }
    function i(t, e) {
      var r = o ? n : ko - n,
        i = 0;
      return (
        t < -r ? (i |= 1) : t > r && (i |= 2),
        e < -r ? (i |= 4) : e > r && (i |= 8),
        i
      );
    }
    var u = Math.cos(n),
      o = u > 0,
      a = oo(u) > wo,
      l = ge(n, 6 * Co);
    return Tt(t, e, l, o ? [0, -n] : [-ko, n - ko]);
  }
  function Yt(n, t, e, r) {
    return function (i) {
      var u,
        o = i.a,
        a = i.b,
        l = o.x,
        c = o.y,
        f = a.x,
        s = a.y,
        h = 0,
        p = 1,
        g = f - l,
        d = s - c;
      if (((u = n - l), g || !(u > 0))) {
        if (((u /= g), g < 0)) {
          if (u < h) return;
          u < p && (p = u);
        } else if (g > 0) {
          if (u > p) return;
          u > h && (h = u);
        }
        if (((u = e - l), g || !(u < 0))) {
          if (((u /= g), g < 0)) {
            if (u > p) return;
            u > h && (h = u);
          } else if (g > 0) {
            if (u < h) return;
            u < p && (p = u);
          }
          if (((u = t - c), d || !(u > 0))) {
            if (((u /= d), d < 0)) {
              if (u < h) return;
              u < p && (p = u);
            } else if (d > 0) {
              if (u > p) return;
              u > h && (h = u);
            }
            if (((u = r - c), d || !(u < 0))) {
              if (((u /= d), d < 0)) {
                if (u > p) return;
                u > h && (h = u);
              } else if (d > 0) {
                if (u < h) return;
                u < p && (p = u);
              }
              return (
                h > 0 && (i.a = { x: l + h * g, y: c + h * d }),
                p < 1 && (i.b = { x: l + p * g, y: c + p * d }),
                i
              );
            }
          }
        }
      }
    };
  }
  function It(n, t, e, r) {
    function i(r, i) {
      return oo(r[0] - n) < wo
        ? i > 0
          ? 0
          : 3
        : oo(r[0] - e) < wo
        ? i > 0
          ? 2
          : 1
        : oo(r[1] - t) < wo
        ? i > 0
          ? 1
          : 0
        : i > 0
        ? 3
        : 2;
    }
    function u(n, t) {
      return o(n.x, t.x);
    }
    function o(n, t) {
      var e = i(n, 1),
        r = i(t, 1);
      return e !== r
        ? e - r
        : 0 === e
        ? t[1] - n[1]
        : 1 === e
        ? n[0] - t[0]
        : 2 === e
        ? n[1] - t[1]
        : t[0] - n[0];
    }
    return function (a) {
      function l(n) {
        for (var t = 0, e = v.length, r = n[1], i = 0; i < e; ++i)
          for (var u, o = 1, a = v[i], l = a.length, c = a[0]; o < l; ++o)
            (u = a[o]),
              c[1] <= r
                ? u[1] > r && Q(c, u, n) > 0 && ++t
                : u[1] <= r && Q(c, u, n) < 0 && --t,
              (c = u);
        return 0 !== t;
      }
      function c(u, a, l, c) {
        var f = 0,
          s = 0;
        if (
          null == u ||
          (f = i(u, l)) !== (s = i(a, l)) ||
          (o(u, a) < 0) ^ (l > 0)
        ) {
          do c.point(0 === f || 3 === f ? n : e, f > 1 ? r : t);
          while ((f = (f + l + 4) % 4) !== s);
        } else c.point(a[0], a[1]);
      }
      function f(i, u) {
        return n <= i && i <= e && t <= u && u <= r;
      }
      function s(n, t) {
        f(n, t) && a.point(n, t);
      }
      function h() {
        (C.point = g), v && v.push((y = [])), (S = !0), (w = !1), (_ = b = NaN);
      }
      function p() {
        d && (g(m, M), x && w && E.rejoin(), d.push(E.buffer())),
          (C.point = s),
          w && a.lineEnd();
      }
      function g(n, t) {
        (n = Math.max(-Ea, Math.min(Ea, n))),
          (t = Math.max(-Ea, Math.min(Ea, t)));
        var e = f(n, t);
        if ((v && y.push([n, t]), S))
          (m = n),
            (M = t),
            (x = e),
            (S = !1),
            e && (a.lineStart(), a.point(n, t));
        else if (e && w) a.point(n, t);
        else {
          var r = { a: { x: _, y: b }, b: { x: n, y: t } };
          A(r)
            ? (w || (a.lineStart(), a.point(r.a.x, r.a.y)),
              a.point(r.b.x, r.b.y),
              e || a.lineEnd(),
              (k = !1))
            : e && (a.lineStart(), a.point(n, t), (k = !1));
        }
        (_ = n), (b = t), (w = e);
      }
      var d,
        v,
        y,
        m,
        M,
        x,
        _,
        b,
        w,
        S,
        k,
        N = a,
        E = Dt(),
        A = Yt(n, t, e, r),
        C = {
          point: s,
          lineStart: h,
          lineEnd: p,
          polygonStart: function () {
            (a = E), (d = []), (v = []), (k = !0);
          },
          polygonEnd: function () {
            (a = N), (d = Ju.merge(d));
            var t = l([n, r]),
              e = k && t,
              i = d.length;
            (e || i) &&
              (a.polygonStart(),
              e && (a.lineStart(), c(null, null, 1, a), a.lineEnd()),
              i && zt(d, u, t, c, a),
              a.polygonEnd()),
              (d = v = y = null);
          },
        };
      return C;
    };
  }
  function Zt(n) {
    var t = 0,
      e = ko / 3,
      r = oe(n),
      i = r(t, e);
    return (
      (i.parallels = function (n) {
        return arguments.length
          ? r((t = (n[0] * ko) / 180), (e = (n[1] * ko) / 180))
          : [(t / ko) * 180, (e / ko) * 180];
      }),
      i
    );
  }
  function Vt(n, t) {
    function e(n, t) {
      var e = Math.sqrt(u - 2 * i * Math.sin(t)) / i;
      return [e * Math.sin((n *= i)), o - e * Math.cos(n)];
    }
    var r = Math.sin(n),
      i = (r + Math.sin(t)) / 2,
      u = 1 + r * (2 * i - r),
      o = Math.sqrt(u) / i;
    return (
      (e.invert = function (n, t) {
        var e = o - t;
        return [
          Math.atan2(n, e) / i,
          tn((u - (n * n + e * e) * i * i) / (2 * i)),
        ];
      }),
      e
    );
  }
  function Xt() {
    function n(n, t) {
      (Ca += i * n - r * t), (r = n), (i = t);
    }
    var t, e, r, i;
    (Ra.point = function (u, o) {
      (Ra.point = n), (t = r = u), (e = i = o);
    }),
      (Ra.lineEnd = function () {
        n(t, e);
      });
  }
  function $t(n, t) {
    n < za && (za = n),
      n > La && (La = n),
      t < qa && (qa = t),
      t > Ta && (Ta = t);
  }
  function Bt() {
    function n(n, t) {
      o.push("M", n, ",", t, u);
    }
    function t(n, t) {
      o.push("M", n, ",", t), (a.point = e);
    }
    function e(n, t) {
      o.push("L", n, ",", t);
    }
    function r() {
      a.point = n;
    }
    function i() {
      o.push("Z");
    }
    var u = Wt(4.5),
      o = [],
      a = {
        point: n,
        lineStart: function () {
          a.point = t;
        },
        lineEnd: r,
        polygonStart: function () {
          a.lineEnd = i;
        },
        polygonEnd: function () {
          (a.lineEnd = r), (a.point = n);
        },
        pointRadius: function (n) {
          return (u = Wt(n)), a;
        },
        result: function () {
          if (o.length) {
            var n = o.join("");
            return (o = []), n;
          }
        },
      };
    return a;
  }
  function Wt(n) {
    return (
      "m0," +
      n +
      "a" +
      n +
      "," +
      n +
      " 0 1,1 0," +
      -2 * n +
      "a" +
      n +
      "," +
      n +
      " 0 1,1 0," +
      2 * n +
      "z"
    );
  }
  function Jt(n, t) {
    (va += n), (ya += t), ++ma;
  }
  function Gt() {
    function n(n, r) {
      var i = n - t,
        u = r - e,
        o = Math.sqrt(i * i + u * u);
      (Ma += (o * (t + n)) / 2),
        (xa += (o * (e + r)) / 2),
        (_a += o),
        Jt((t = n), (e = r));
    }
    var t, e;
    Pa.point = function (r, i) {
      (Pa.point = n), Jt((t = r), (e = i));
    };
  }
  function Kt() {
    Pa.point = Jt;
  }
  function Qt() {
    function n(n, t) {
      var e = n - r,
        u = t - i,
        o = Math.sqrt(e * e + u * u);
      (Ma += (o * (r + n)) / 2),
        (xa += (o * (i + t)) / 2),
        (_a += o),
        (o = i * n - r * t),
        (ba += o * (r + n)),
        (wa += o * (i + t)),
        (Sa += 3 * o),
        Jt((r = n), (i = t));
    }
    var t, e, r, i;
    (Pa.point = function (u, o) {
      (Pa.point = n), Jt((t = r = u), (e = i = o));
    }),
      (Pa.lineEnd = function () {
        n(t, e);
      });
  }
  function ne(n) {
    function t(t, e) {
      n.moveTo(t + o, e), n.arc(t, e, o, 0, No);
    }
    function e(t, e) {
      n.moveTo(t, e), (a.point = r);
    }
    function r(t, e) {
      n.lineTo(t, e);
    }
    function i() {
      a.point = t;
    }
    function u() {
      n.closePath();
    }
    var o = 4.5,
      a = {
        point: t,
        lineStart: function () {
          a.point = e;
        },
        lineEnd: i,
        polygonStart: function () {
          a.lineEnd = u;
        },
        polygonEnd: function () {
          (a.lineEnd = i), (a.point = t);
        },
        pointRadius: function (n) {
          return (o = n), a;
        },
        result: _,
      };
    return a;
  }
  function te(n) {
    function t(n) {
      return (a ? r : e)(n);
    }
    function e(t) {
      return ie(t, function (e, r) {
        (e = n(e, r)), t.point(e[0], e[1]);
      });
    }
    function r(t) {
      function e(e, r) {
        (e = n(e, r)), t.point(e[0], e[1]);
      }
      function r() {
        (M = NaN), (S.point = u), t.lineStart();
      }
      function u(e, r) {
        var u = dt([e, r]),
          o = n(e, r);
        i(
          M,
          x,
          m,
          _,
          b,
          w,
          (M = o[0]),
          (x = o[1]),
          (m = e),
          (_ = u[0]),
          (b = u[1]),
          (w = u[2]),
          a,
          t
        ),
          t.point(M, x);
      }
      function o() {
        (S.point = e), t.lineEnd();
      }
      function l() {
        r(), (S.point = c), (S.lineEnd = f);
      }
      function c(n, t) {
        u((s = n), (h = t)),
          (p = M),
          (g = x),
          (d = _),
          (v = b),
          (y = w),
          (S.point = u);
      }
      function f() {
        i(M, x, m, _, b, w, p, g, s, d, v, y, a, t), (S.lineEnd = o), o();
      }
      var s,
        h,
        p,
        g,
        d,
        v,
        y,
        m,
        M,
        x,
        _,
        b,
        w,
        S = {
          point: e,
          lineStart: r,
          lineEnd: o,
          polygonStart: function () {
            t.polygonStart(), (S.lineStart = l);
          },
          polygonEnd: function () {
            t.polygonEnd(), (S.lineStart = r);
          },
        };
      return S;
    }
    function i(t, e, r, a, l, c, f, s, h, p, g, d, v, y) {
      var m = f - t,
        M = s - e,
        x = m * m + M * M;
      if (x > 4 * u && v--) {
        var _ = a + p,
          b = l + g,
          w = c + d,
          S = Math.sqrt(_ * _ + b * b + w * w),
          k = Math.asin((w /= S)),
          N =
            oo(oo(w) - 1) < wo || oo(r - h) < wo
              ? (r + h) / 2
              : Math.atan2(b, _),
          E = n(N, k),
          A = E[0],
          C = E[1],
          z = A - t,
          q = C - e,
          L = M * z - m * q;
        ((L * L) / x > u ||
          oo((m * z + M * q) / x - 0.5) > 0.3 ||
          a * p + l * g + c * d < o) &&
          (i(t, e, r, a, l, c, A, C, N, (_ /= S), (b /= S), w, v, y),
          y.point(A, C),
          i(A, C, N, _, b, w, f, s, h, p, g, d, v, y));
      }
    }
    var u = 0.5,
      o = Math.cos(30 * Co),
      a = 16;
    return (
      (t.precision = function (n) {
        return arguments.length
          ? ((a = (u = n * n) > 0 && 16), t)
          : Math.sqrt(u);
      }),
      t
    );
  }
  function ee(n) {
    var t = te(function (t, e) {
      return n([t * zo, e * zo]);
    });
    return function (n) {
      return ae(t(n));
    };
  }
  function re(n) {
    this.stream = n;
  }
  function ie(n, t) {
    return {
      point: t,
      sphere: function () {
        n.sphere();
      },
      lineStart: function () {
        n.lineStart();
      },
      lineEnd: function () {
        n.lineEnd();
      },
      polygonStart: function () {
        n.polygonStart();
      },
      polygonEnd: function () {
        n.polygonEnd();
      },
    };
  }
  function ue(n) {
    return oe(function () {
      return n;
    })();
  }
  function oe(n) {
    function t(n) {
      return (n = a(n[0] * Co, n[1] * Co)), [n[0] * h + l, c - n[1] * h];
    }
    function e(n) {
      return (
        (n = a.invert((n[0] - l) / h, (c - n[1]) / h)),
        n && [n[0] * zo, n[1] * zo]
      );
    }
    function r() {
      a = At((o = fe(y, M, x)), u);
      var n = u(d, v);
      return (l = p - n[0] * h), (c = g + n[1] * h), i();
    }
    function i() {
      return f && ((f.valid = !1), (f = null)), t;
    }
    var u,
      o,
      a,
      l,
      c,
      f,
      s = te(function (n, t) {
        return (n = u(n, t)), [n[0] * h + l, c - n[1] * h];
      }),
      h = 150,
      p = 480,
      g = 250,
      d = 0,
      v = 0,
      y = 0,
      M = 0,
      x = 0,
      _ = Na,
      b = m,
      w = null,
      S = null;
    return (
      (t.stream = function (n) {
        return f && (f.valid = !1), (f = ae(_(o, s(b(n))))), (f.valid = !0), f;
      }),
      (t.clipAngle = function (n) {
        return arguments.length
          ? ((_ = null == n ? ((w = n), Na) : Ot((w = +n) * Co)), i())
          : w;
      }),
      (t.clipExtent = function (n) {
        return arguments.length
          ? ((S = n), (b = n ? It(n[0][0], n[0][1], n[1][0], n[1][1]) : m), i())
          : S;
      }),
      (t.scale = function (n) {
        return arguments.length ? ((h = +n), r()) : h;
      }),
      (t.translate = function (n) {
        return arguments.length ? ((p = +n[0]), (g = +n[1]), r()) : [p, g];
      }),
      (t.center = function (n) {
        return arguments.length
          ? ((d = (n[0] % 360) * Co), (v = (n[1] % 360) * Co), r())
          : [d * zo, v * zo];
      }),
      (t.rotate = function (n) {
        return arguments.length
          ? ((y = (n[0] % 360) * Co),
            (M = (n[1] % 360) * Co),
            (x = n.length > 2 ? (n[2] % 360) * Co : 0),
            r())
          : [y * zo, M * zo, x * zo];
      }),
      Ju.rebind(t, s, "precision"),
      function () {
        return (u = n.apply(this, arguments)), (t.invert = u.invert && e), r();
      }
    );
  }
  function ae(n) {
    return ie(n, function (t, e) {
      n.point(t * Co, e * Co);
    });
  }
  function le(n, t) {
    return [n, t];
  }
  function ce(n, t) {
    return [n > ko ? n - No : n < -ko ? n + No : n, t];
  }
  function fe(n, t, e) {
    return n ? (t || e ? At(he(n), pe(t, e)) : he(n)) : t || e ? pe(t, e) : ce;
  }
  function se(n) {
    return function (t, e) {
      return (t += n), [t > ko ? t - No : t < -ko ? t + No : t, e];
    };
  }
  function he(n) {
    var t = se(n);
    return (t.invert = se(-n)), t;
  }
  function pe(n, t) {
    function e(n, t) {
      var e = Math.cos(t),
        a = Math.cos(n) * e,
        l = Math.sin(n) * e,
        c = Math.sin(t),
        f = c * r + a * i;
      return [Math.atan2(l * u - f * o, a * r - c * i), tn(f * u + l * o)];
    }
    var r = Math.cos(n),
      i = Math.sin(n),
      u = Math.cos(t),
      o = Math.sin(t);
    return (
      (e.invert = function (n, t) {
        var e = Math.cos(t),
          a = Math.cos(n) * e,
          l = Math.sin(n) * e,
          c = Math.sin(t),
          f = c * u - l * o;
        return [Math.atan2(l * u + c * o, a * r + f * i), tn(f * r - a * i)];
      }),
      e
    );
  }
  function ge(n, t) {
    var e = Math.cos(n),
      r = Math.sin(n);
    return function (i, u, o, a) {
      var l = o * t;
      null != i
        ? ((i = de(e, i)),
          (u = de(e, u)),
          (o > 0 ? i < u : i > u) && (i += o * No))
        : ((i = n + o * No), (u = n - 0.5 * l));
      for (var c, f = i; o > 0 ? f > u : f < u; f -= l)
        a.point((c = _t([e, -r * Math.cos(f), -r * Math.sin(f)]))[0], c[1]);
    };
  }
  function de(n, t) {
    var e = dt(t);
    (e[0] -= n), xt(e);
    var r = nn(-e[1]);
    return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - wo) % (2 * Math.PI);
  }
  function ve(n, t, e) {
    var r = Ju.range(n, t - wo, e).concat(t);
    return function (n) {
      return r.map(function (t) {
        return [n, t];
      });
    };
  }
  function ye(n, t, e) {
    var r = Ju.range(n, t - wo, e).concat(t);
    return function (n) {
      return r.map(function (t) {
        return [t, n];
      });
    };
  }
  function me(n) {
    return n.source;
  }
  function Me(n) {
    return n.target;
  }
  function xe(n, t, e, r) {
    var i = Math.cos(t),
      u = Math.sin(t),
      o = Math.cos(r),
      a = Math.sin(r),
      l = i * Math.cos(n),
      c = i * Math.sin(n),
      f = o * Math.cos(e),
      s = o * Math.sin(e),
      h = 2 * Math.asin(Math.sqrt(on(r - t) + i * o * on(e - n))),
      p = 1 / Math.sin(h),
      g = h
        ? function (n) {
            var t = Math.sin((n *= h)) * p,
              e = Math.sin(h - n) * p,
              r = e * l + t * f,
              i = e * c + t * s,
              o = e * u + t * a;
            return [
              Math.atan2(i, r) * zo,
              Math.atan2(o, Math.sqrt(r * r + i * i)) * zo,
            ];
          }
        : function () {
            return [n * zo, t * zo];
          };
    return (g.distance = h), g;
  }
  function _e() {
    function n(n, i) {
      var u = Math.sin((i *= Co)),
        o = Math.cos(i),
        a = oo((n *= Co) - t),
        l = Math.cos(a);
      (ja += Math.atan2(
        Math.sqrt((a = o * Math.sin(a)) * a + (a = r * u - e * o * l) * a),
        e * u + r * o * l
      )),
        (t = n),
        (e = u),
        (r = o);
    }
    var t, e, r;
    (Ua.point = function (i, u) {
      (t = i * Co),
        (e = Math.sin((u *= Co))),
        (r = Math.cos(u)),
        (Ua.point = n);
    }),
      (Ua.lineEnd = function () {
        Ua.point = Ua.lineEnd = _;
      });
  }
  function be(n, t) {
    function e(t, e) {
      var r = Math.cos(t),
        i = Math.cos(e),
        u = n(r * i);
      return [u * i * Math.sin(t), u * Math.sin(e)];
    }
    return (
      (e.invert = function (n, e) {
        var r = Math.sqrt(n * n + e * e),
          i = t(r),
          u = Math.sin(i),
          o = Math.cos(i);
        return [Math.atan2(n * u, r * o), Math.asin(r && (e * u) / r)];
      }),
      e
    );
  }
  function we(n, t) {
    function e(n, t) {
      o > 0 ? t < -Ao + wo && (t = -Ao + wo) : t > Ao - wo && (t = Ao - wo);
      var e = o / Math.pow(i(t), u);
      return [e * Math.sin(u * n), o - e * Math.cos(u * n)];
    }
    var r = Math.cos(n),
      i = function (n) {
        return Math.tan(ko / 4 + n / 2);
      },
      u =
        n === t
          ? Math.sin(n)
          : Math.log(r / Math.cos(t)) / Math.log(i(t) / i(n)),
      o = (r * Math.pow(i(n), u)) / u;
    return u
      ? ((e.invert = function (n, t) {
          var e = o - t,
            r = K(u) * Math.sqrt(n * n + e * e);
          return [
            Math.atan2(n, e) / u,
            2 * Math.atan(Math.pow(o / r, 1 / u)) - Ao,
          ];
        }),
        e)
      : ke;
  }
  function Se(n, t) {
    function e(n, t) {
      var e = u - t;
      return [e * Math.sin(i * n), u - e * Math.cos(i * n)];
    }
    var r = Math.cos(n),
      i = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n),
      u = r / i + n;
    return oo(i) < wo
      ? le
      : ((e.invert = function (n, t) {
          var e = u - t;
          return [Math.atan2(n, e) / i, u - K(i) * Math.sqrt(n * n + e * e)];
        }),
        e);
  }
  function ke(n, t) {
    return [n, Math.log(Math.tan(ko / 4 + t / 2))];
  }
  function Ne(n) {
    var t,
      e = ue(n),
      r = e.scale,
      i = e.translate,
      u = e.clipExtent;
    return (
      (e.scale = function () {
        var n = r.apply(e, arguments);
        return n === e ? (t ? e.clipExtent(null) : e) : n;
      }),
      (e.translate = function () {
        var n = i.apply(e, arguments);
        return n === e ? (t ? e.clipExtent(null) : e) : n;
      }),
      (e.clipExtent = function (n) {
        var o = u.apply(e, arguments);
        if (o === e) {
          if ((t = null == n)) {
            var a = ko * r(),
              l = i();
            u([
              [l[0] - a, l[1] - a],
              [l[0] + a, l[1] + a],
            ]);
          }
        } else t && (o = null);
        return o;
      }),
      e.clipExtent(null)
    );
  }
  function Ee(n, t) {
    return [Math.log(Math.tan(ko / 4 + t / 2)), -n];
  }
  function Ae(n) {
    return n[0];
  }
  function Ce(n) {
    return n[1];
  }
  function ze(n) {
    for (var t = n.length, e = [0, 1], r = 2, i = 2; i < t; i++) {
      for (; r > 1 && Q(n[e[r - 2]], n[e[r - 1]], n[i]) <= 0; ) --r;
      e[r++] = i;
    }
    return e.slice(0, r);
  }
  function qe(n, t) {
    return n[0] - t[0] || n[1] - t[1];
  }
  function Le(n, t, e) {
    return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0]);
  }
  function Te(n, t, e, r) {
    var i = n[0],
      u = e[0],
      o = t[0] - i,
      a = r[0] - u,
      l = n[1],
      c = e[1],
      f = t[1] - l,
      s = r[1] - c,
      h = (a * (l - c) - s * (i - u)) / (s * o - a * f);
    return [i + h * o, l + h * f];
  }
  function Re(n) {
    var t = n[0],
      e = n[n.length - 1];
    return !(t[0] - e[0] || t[1] - e[1]);
  }
  function De() {
    er(this), (this.edge = this.site = this.circle = null);
  }
  function Pe(n) {
    var t = Ja.pop() || new De();
    return (t.site = n), t;
  }
  function je(n) {
    $e(n), $a.remove(n), Ja.push(n), er(n);
  }
  function Ue(n) {
    var t = n.circle,
      e = t.x,
      r = t.cy,
      i = { x: e, y: r },
      u = n.P,
      o = n.N,
      a = [n];
    je(n);
    for (
      var l = u;
      l.circle && oo(e - l.circle.x) < wo && oo(r - l.circle.cy) < wo;

    )
      (u = l.P), a.unshift(l), je(l), (l = u);
    a.unshift(l), $e(l);
    for (
      var c = o;
      c.circle && oo(e - c.circle.x) < wo && oo(r - c.circle.cy) < wo;

    )
      (o = c.N), a.push(c), je(c), (c = o);
    a.push(c), $e(c);
    var f,
      s = a.length;
    for (f = 1; f < s; ++f)
      (c = a[f]), (l = a[f - 1]), Qe(c.edge, l.site, c.site, i);
    (l = a[0]),
      (c = a[s - 1]),
      (c.edge = Ge(l.site, c.site, null, i)),
      Xe(l),
      Xe(c);
  }
  function Fe(n) {
    for (var t, e, r, i, u = n.x, o = n.y, a = $a._; a; )
      if (((r = He(a, o) - u), r > wo)) a = a.L;
      else {
        if (((i = u - Oe(a, o)), !(i > wo))) {
          r > -wo
            ? ((t = a.P), (e = a))
            : i > -wo
            ? ((t = a), (e = a.N))
            : (t = e = a);
          break;
        }
        if (!a.R) {
          t = a;
          break;
        }
        a = a.R;
      }
    var l = Pe(n);
    if (($a.insert(t, l), t || e)) {
      if (t === e)
        return (
          $e(t),
          (e = Pe(t.site)),
          $a.insert(l, e),
          (l.edge = e.edge = Ge(t.site, l.site)),
          Xe(t),
          void Xe(e)
        );
      if (!e) return void (l.edge = Ge(t.site, l.site));
      $e(t), $e(e);
      var c = t.site,
        f = c.x,
        s = c.y,
        h = n.x - f,
        p = n.y - s,
        g = e.site,
        d = g.x - f,
        v = g.y - s,
        y = 2 * (h * v - p * d),
        m = h * h + p * p,
        M = d * d + v * v,
        x = { x: (v * m - p * M) / y + f, y: (h * M - d * m) / y + s };
      Qe(e.edge, c, g, x),
        (l.edge = Ge(c, n, null, x)),
        (e.edge = Ge(n, g, null, x)),
        Xe(t),
        Xe(e);
    }
  }
  function He(n, t) {
    var e = n.site,
      r = e.x,
      i = e.y,
      u = i - t;
    if (!u) return r;
    var o = n.P;
    if (!o) return -(1 / 0);
    e = o.site;
    var a = e.x,
      l = e.y,
      c = l - t;
    if (!c) return a;
    var f = a - r,
      s = 1 / u - 1 / c,
      h = f / c;
    return s
      ? (-h +
          Math.sqrt(
            h * h - 2 * s * ((f * f) / (-2 * c) - l + c / 2 + i - u / 2)
          )) /
          s +
          r
      : (r + a) / 2;
  }
  function Oe(n, t) {
    var e = n.N;
    if (e) return He(e, t);
    var r = n.site;
    return r.y === t ? r.x : 1 / 0;
  }
  function Ye(n) {
    (this.site = n), (this.edges = []);
  }
  function Ie(n) {
    for (
      var t,
        e,
        r,
        i,
        u,
        o,
        a,
        l,
        c,
        f,
        s = n[0][0],
        h = n[1][0],
        p = n[0][1],
        g = n[1][1],
        d = Xa,
        v = d.length;
      v--;

    )
      if (((u = d[v]), u && u.prepare()))
        for (a = u.edges, l = a.length, o = 0; o < l; )
          (f = a[o].end()),
            (r = f.x),
            (i = f.y),
            (c = a[++o % l].start()),
            (t = c.x),
            (e = c.y),
            (oo(r - t) > wo || oo(i - e) > wo) &&
              (a.splice(
                o,
                0,
                new nr(
                  Ke(
                    u.site,
                    f,
                    oo(r - s) < wo && g - i > wo
                      ? { x: s, y: oo(t - s) < wo ? e : g }
                      : oo(i - g) < wo && h - r > wo
                      ? { x: oo(e - g) < wo ? t : h, y: g }
                      : oo(r - h) < wo && i - p > wo
                      ? { x: h, y: oo(t - h) < wo ? e : p }
                      : oo(i - p) < wo && r - s > wo
                      ? { x: oo(e - p) < wo ? t : s, y: p }
                      : null
                  ),
                  u.site,
                  null
                )
              ),
              ++l);
  }
  function Ze(n, t) {
    return t.angle - n.angle;
  }
  function Ve() {
    er(this), (this.x = this.y = this.arc = this.site = this.cy = null);
  }
  function Xe(n) {
    var t = n.P,
      e = n.N;
    if (t && e) {
      var r = t.site,
        i = n.site,
        u = e.site;
      if (r !== u) {
        var o = i.x,
          a = i.y,
          l = r.x - o,
          c = r.y - a,
          f = u.x - o,
          s = u.y - a,
          h = 2 * (l * s - c * f);
        if (!(h >= -So)) {
          var p = l * l + c * c,
            g = f * f + s * s,
            d = (s * p - c * g) / h,
            v = (l * g - f * p) / h,
            s = v + a,
            y = Ga.pop() || new Ve();
          (y.arc = n),
            (y.site = i),
            (y.x = d + o),
            (y.y = s + Math.sqrt(d * d + v * v)),
            (y.cy = s),
            (n.circle = y);
          for (var m = null, M = Wa._; M; )
            if (y.y < M.y || (y.y === M.y && y.x <= M.x)) {
              if (!M.L) {
                m = M.P;
                break;
              }
              M = M.L;
            } else {
              if (!M.R) {
                m = M;
                break;
              }
              M = M.R;
            }
          Wa.insert(m, y), m || (Ba = y);
        }
      }
    }
  }
  function $e(n) {
    var t = n.circle;
    t &&
      (t.P || (Ba = t.N), Wa.remove(t), Ga.push(t), er(t), (n.circle = null));
  }
  function Be(n) {
    for (
      var t, e = Va, r = Yt(n[0][0], n[0][1], n[1][0], n[1][1]), i = e.length;
      i--;

    )
      (t = e[i]),
        (!We(t, n) ||
          !r(t) ||
          (oo(t.a.x - t.b.x) < wo && oo(t.a.y - t.b.y) < wo)) &&
          ((t.a = t.b = null), e.splice(i, 1));
  }
  function We(n, t) {
    var e = n.b;
    if (e) return !0;
    var r,
      i,
      u = n.a,
      o = t[0][0],
      a = t[1][0],
      l = t[0][1],
      c = t[1][1],
      f = n.l,
      s = n.r,
      h = f.x,
      p = f.y,
      g = s.x,
      d = s.y,
      v = (h + g) / 2,
      y = (p + d) / 2;
    if (d === p) {
      if (v < o || v >= a) return;
      if (h > g) {
        if (u) {
          if (u.y >= c) return;
        } else u = { x: v, y: l };
        e = { x: v, y: c };
      } else {
        if (u) {
          if (u.y < l) return;
        } else u = { x: v, y: c };
        e = { x: v, y: l };
      }
    } else if (((r = (h - g) / (d - p)), (i = y - r * v), r < -1 || r > 1))
      if (h > g) {
        if (u) {
          if (u.y >= c) return;
        } else u = { x: (l - i) / r, y: l };
        e = { x: (c - i) / r, y: c };
      } else {
        if (u) {
          if (u.y < l) return;
        } else u = { x: (c - i) / r, y: c };
        e = { x: (l - i) / r, y: l };
      }
    else if (p < d) {
      if (u) {
        if (u.x >= a) return;
      } else u = { x: o, y: r * o + i };
      e = { x: a, y: r * a + i };
    } else {
      if (u) {
        if (u.x < o) return;
      } else u = { x: a, y: r * a + i };
      e = { x: o, y: r * o + i };
    }
    return (n.a = u), (n.b = e), !0;
  }
  function Je(n, t) {
    (this.l = n), (this.r = t), (this.a = this.b = null);
  }
  function Ge(n, t, e, r) {
    var i = new Je(n, t);
    return (
      Va.push(i),
      e && Qe(i, n, t, e),
      r && Qe(i, t, n, r),
      Xa[n.i].edges.push(new nr(i, n, t)),
      Xa[t.i].edges.push(new nr(i, t, n)),
      i
    );
  }
  function Ke(n, t, e) {
    var r = new Je(n, null);
    return (r.a = t), (r.b = e), Va.push(r), r;
  }
  function Qe(n, t, e, r) {
    n.a || n.b
      ? n.l === e
        ? (n.b = r)
        : (n.a = r)
      : ((n.a = r), (n.l = t), (n.r = e));
  }
  function nr(n, t, e) {
    var r = n.a,
      i = n.b;
    (this.edge = n),
      (this.site = t),
      (this.angle = e
        ? Math.atan2(e.y - t.y, e.x - t.x)
        : n.l === t
        ? Math.atan2(i.x - r.x, r.y - i.y)
        : Math.atan2(r.x - i.x, i.y - r.y));
  }
  function tr() {
    this._ = null;
  }
  function er(n) {
    n.U = n.C = n.L = n.R = n.P = n.N = null;
  }
  function rr(n, t) {
    var e = t,
      r = t.R,
      i = e.U;
    i ? (i.L === e ? (i.L = r) : (i.R = r)) : (n._ = r),
      (r.U = i),
      (e.U = r),
      (e.R = r.L),
      e.R && (e.R.U = e),
      (r.L = e);
  }
  function ir(n, t) {
    var e = t,
      r = t.L,
      i = e.U;
    i ? (i.L === e ? (i.L = r) : (i.R = r)) : (n._ = r),
      (r.U = i),
      (e.U = r),
      (e.L = r.R),
      e.L && (e.L.U = e),
      (r.R = e);
  }
  function ur(n) {
    for (; n.L; ) n = n.L;
    return n;
  }
  function or(n, t) {
    var e,
      r,
      i,
      u = n.sort(ar).pop();
    for (Va = [], Xa = new Array(n.length), $a = new tr(), Wa = new tr(); ; )
      if (((i = Ba), u && (!i || u.y < i.y || (u.y === i.y && u.x < i.x))))
        (u.x === e && u.y === r) ||
          ((Xa[u.i] = new Ye(u)), Fe(u), (e = u.x), (r = u.y)),
          (u = n.pop());
      else {
        if (!i) break;
        Ue(i.arc);
      }
    t && (Be(t), Ie(t));
    var o = { cells: Xa, edges: Va };
    return ($a = Wa = Va = Xa = null), o;
  }
  function ar(n, t) {
    return t.y - n.y || t.x - n.x;
  }
  function lr(n, t, e) {
    return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y);
  }
  function cr(n) {
    return n.x;
  }
  function fr(n) {
    return n.y;
  }
  function sr() {
    return { leaf: !0, nodes: [], point: null, x: null, y: null };
  }
  function hr(n, t, e, r, i, u) {
    if (!n(t, e, r, i, u)) {
      var o = 0.5 * (e + i),
        a = 0.5 * (r + u),
        l = t.nodes;
      l[0] && hr(n, l[0], e, r, o, a),
        l[1] && hr(n, l[1], o, r, i, a),
        l[2] && hr(n, l[2], e, a, o, u),
        l[3] && hr(n, l[3], o, a, i, u);
    }
  }
  function pr(n, t, e, r, i, u, o) {
    var a,
      l = 1 / 0;
    return (
      (function n(c, f, s, h, p) {
        if (!(f > u || s > o || h < r || p < i)) {
          if ((g = c.point)) {
            var g,
              d = t - c.x,
              v = e - c.y,
              y = d * d + v * v;
            if (y < l) {
              var m = Math.sqrt((l = y));
              (r = t - m), (i = e - m), (u = t + m), (o = e + m), (a = g);
            }
          }
          for (
            var M = c.nodes,
              x = 0.5 * (f + h),
              _ = 0.5 * (s + p),
              b = t >= x,
              w = e >= _,
              S = (w << 1) | b,
              k = S + 4;
            S < k;
            ++S
          )
            if ((c = M[3 & S]))
              switch (3 & S) {
                case 0:
                  n(c, f, s, x, _);
                  break;
                case 1:
                  n(c, x, s, h, _);
                  break;
                case 2:
                  n(c, f, _, x, p);
                  break;
                case 3:
                  n(c, x, _, h, p);
              }
        }
      })(n, r, i, u, o),
      a
    );
  }
  function gr(n, t) {
    (n = Ju.rgb(n)), (t = Ju.rgb(t));
    var e = n.r,
      r = n.g,
      i = n.b,
      u = t.r - e,
      o = t.g - r,
      a = t.b - i;
    return function (n) {
      return (
        "#" +
        _n(Math.round(e + u * n)) +
        _n(Math.round(r + o * n)) +
        _n(Math.round(i + a * n))
      );
    };
  }
  function dr(n, t) {
    var e,
      r = {},
      i = {};
    for (e in n) e in t ? (r[e] = mr(n[e], t[e])) : (i[e] = n[e]);
    for (e in t) e in n || (i[e] = t[e]);
    return function (n) {
      for (e in r) i[e] = r[e](n);
      return i;
    };
  }
  function vr(n, t) {
    return (
      (n = +n),
      (t = +t),
      function (e) {
        return n * (1 - e) + t * e;
      }
    );
  }
  function yr(n, t) {
    var e,
      r,
      i,
      u = (Qa.lastIndex = nl.lastIndex = 0),
      o = -1,
      a = [],
      l = [];
    for (n += "", t += ""; (e = Qa.exec(n)) && (r = nl.exec(t)); )
      (i = r.index) > u &&
        ((i = t.slice(u, i)), a[o] ? (a[o] += i) : (a[++o] = i)),
        (e = e[0]) === (r = r[0])
          ? a[o]
            ? (a[o] += r)
            : (a[++o] = r)
          : ((a[++o] = null), l.push({ i: o, x: vr(e, r) })),
        (u = nl.lastIndex);
    return (
      u < t.length && ((i = t.slice(u)), a[o] ? (a[o] += i) : (a[++o] = i)),
      a.length < 2
        ? l[0]
          ? ((t = l[0].x),
            function (n) {
              return t(n) + "";
            })
          : function () {
              return t;
            }
        : ((t = l.length),
          function (n) {
            for (var e, r = 0; r < t; ++r) a[(e = l[r]).i] = e.x(n);
            return a.join("");
          })
    );
  }
  function mr(n, t) {
    for (
      var e, r = Ju.interpolators.length;
      --r >= 0 && !(e = Ju.interpolators[r](n, t));

    );
    return e;
  }
  function Mr(n, t) {
    var e,
      r = [],
      i = [],
      u = n.length,
      o = t.length,
      a = Math.min(n.length, t.length);
    for (e = 0; e < a; ++e) r.push(mr(n[e], t[e]));
    for (; e < u; ++e) i[e] = n[e];
    for (; e < o; ++e) i[e] = t[e];
    return function (n) {
      for (e = 0; e < a; ++e) i[e] = r[e](n);
      return i;
    };
  }
  function xr(n) {
    return function (t) {
      return t <= 0 ? 0 : t >= 1 ? 1 : n(t);
    };
  }
  function _r(n) {
    return function (t) {
      return 1 - n(1 - t);
    };
  }
  function br(n) {
    return function (t) {
      return 0.5 * (t < 0.5 ? n(2 * t) : 2 - n(2 - 2 * t));
    };
  }
  function wr(n) {
    return n * n;
  }
  function Sr(n) {
    return n * n * n;
  }
  function kr(n) {
    if (n <= 0) return 0;
    if (n >= 1) return 1;
    var t = n * n,
      e = t * n;
    return 4 * (n < 0.5 ? e : 3 * (n - t) + e - 0.75);
  }
  function Nr(n) {
    return function (t) {
      return Math.pow(t, n);
    };
  }
  function Er(n) {
    return 1 - Math.cos(n * Ao);
  }
  function Ar(n) {
    return Math.pow(2, 10 * (n - 1));
  }
  function Cr(n) {
    return 1 - Math.sqrt(1 - n * n);
  }
  function zr(n, t) {
    var e;
    return (
      arguments.length < 2 && (t = 0.45),
      arguments.length
        ? (e = (t / No) * Math.asin(1 / n))
        : ((n = 1), (e = t / 4)),
      function (r) {
        return 1 + n * Math.pow(2, -10 * r) * Math.sin(((r - e) * No) / t);
      }
    );
  }
  function qr(n) {
    return (
      n || (n = 1.70158),
      function (t) {
        return t * t * ((n + 1) * t - n);
      }
    );
  }
  function Lr(n) {
    return n < 1 / 2.75
      ? 7.5625 * n * n
      : n < 2 / 2.75
      ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75
      : n < 2.5 / 2.75
      ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375
      : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
  }
  function Tr(n, t) {
    (n = Ju.hcl(n)), (t = Ju.hcl(t));
    var e = n.h,
      r = n.c,
      i = n.l,
      u = t.h - e,
      o = t.c - r,
      a = t.l - i;
    return (
      isNaN(o) && ((o = 0), (r = isNaN(r) ? t.c : r)),
      isNaN(u)
        ? ((u = 0), (e = isNaN(e) ? t.h : e))
        : u > 180
        ? (u -= 360)
        : u < -180 && (u += 360),
      function (n) {
        return sn(e + u * n, r + o * n, i + a * n) + "";
      }
    );
  }
  function Rr(n, t) {
    (n = Ju.hsl(n)), (t = Ju.hsl(t));
    var e = n.h,
      r = n.s,
      i = n.l,
      u = t.h - e,
      o = t.s - r,
      a = t.l - i;
    return (
      isNaN(o) && ((o = 0), (r = isNaN(r) ? t.s : r)),
      isNaN(u)
        ? ((u = 0), (e = isNaN(e) ? t.h : e))
        : u > 180
        ? (u -= 360)
        : u < -180 && (u += 360),
      function (n) {
        return cn(e + u * n, r + o * n, i + a * n) + "";
      }
    );
  }
  function Dr(n, t) {
    (n = Ju.lab(n)), (t = Ju.lab(t));
    var e = n.l,
      r = n.a,
      i = n.b,
      u = t.l - e,
      o = t.a - r,
      a = t.b - i;
    return function (n) {
      return pn(e + u * n, r + o * n, i + a * n) + "";
    };
  }
  function Pr(n, t) {
    return (
      (t -= n),
      function (e) {
        return Math.round(n + t * e);
      }
    );
  }
  function jr(n) {
    var t = [n.a, n.b],
      e = [n.c, n.d],
      r = Fr(t),
      i = Ur(t, e),
      u = Fr(Hr(e, t, -i)) || 0;
    t[0] * e[1] < e[0] * t[1] &&
      ((t[0] *= -1), (t[1] *= -1), (r *= -1), (i *= -1)),
      (this.rotate =
        (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * zo),
      (this.translate = [n.e, n.f]),
      (this.scale = [r, u]),
      (this.skew = u ? Math.atan2(i, u) * zo : 0);
  }
  function Ur(n, t) {
    return n[0] * t[0] + n[1] * t[1];
  }
  function Fr(n) {
    var t = Math.sqrt(Ur(n, n));
    return t && ((n[0] /= t), (n[1] /= t)), t;
  }
  function Hr(n, t, e) {
    return (n[0] += e * t[0]), (n[1] += e * t[1]), n;
  }
  function Or(n, t) {
    var e,
      r = [],
      i = [],
      u = Ju.transform(n),
      o = Ju.transform(t),
      a = u.translate,
      l = o.translate,
      c = u.rotate,
      f = o.rotate,
      s = u.skew,
      h = o.skew,
      p = u.scale,
      g = o.scale;
    return (
      a[0] != l[0] || a[1] != l[1]
        ? (r.push("translate(", null, ",", null, ")"),
          i.push({ i: 1, x: vr(a[0], l[0]) }, { i: 3, x: vr(a[1], l[1]) }))
        : l[0] || l[1]
        ? r.push("translate(" + l + ")")
        : r.push(""),
      c != f
        ? (c - f > 180 ? (f += 360) : f - c > 180 && (c += 360),
          i.push({
            i: r.push(r.pop() + "rotate(", null, ")") - 2,
            x: vr(c, f),
          }))
        : f && r.push(r.pop() + "rotate(" + f + ")"),
      s != h
        ? i.push({ i: r.push(r.pop() + "skewX(", null, ")") - 2, x: vr(s, h) })
        : h && r.push(r.pop() + "skewX(" + h + ")"),
      p[0] != g[0] || p[1] != g[1]
        ? ((e = r.push(r.pop() + "scale(", null, ",", null, ")")),
          i.push(
            { i: e - 4, x: vr(p[0], g[0]) },
            { i: e - 2, x: vr(p[1], g[1]) }
          ))
        : (1 == g[0] && 1 == g[1]) || r.push(r.pop() + "scale(" + g + ")"),
      (e = i.length),
      function (n) {
        for (var t, u = -1; ++u < e; ) r[(t = i[u]).i] = t.x(n);
        return r.join("");
      }
    );
  }
  function Yr(n, t) {
    return (
      (t = (t -= n = +n) || 1 / t),
      function (e) {
        return (e - n) / t;
      }
    );
  }
  function Ir(n, t) {
    return (
      (t = (t -= n = +n) || 1 / t),
      function (e) {
        return Math.max(0, Math.min(1, (e - n) / t));
      }
    );
  }
  function Zr(n) {
    for (var t = n.source, e = n.target, r = Xr(t, e), i = [t]; t !== r; )
      (t = t.parent), i.push(t);
    for (var u = i.length; e !== r; ) i.splice(u, 0, e), (e = e.parent);
    return i;
  }
  function Vr(n) {
    for (var t = [], e = n.parent; null != e; )
      t.push(n), (n = e), (e = e.parent);
    return t.push(n), t;
  }
  function Xr(n, t) {
    if (n === t) return n;
    for (
      var e = Vr(n), r = Vr(t), i = e.pop(), u = r.pop(), o = null;
      i === u;

    )
      (o = i), (i = e.pop()), (u = r.pop());
    return o;
  }
  function $r(n) {
    n.fixed |= 2;
  }
  function Br(n) {
    n.fixed &= -7;
  }
  function Wr(n) {
    (n.fixed |= 4), (n.px = n.x), (n.py = n.y);
  }
  function Jr(n) {
    n.fixed &= -5;
  }
  function Gr(n, t, e) {
    var r = 0,
      i = 0;
    if (((n.charge = 0), !n.leaf))
      for (var u, o = n.nodes, a = o.length, l = -1; ++l < a; )
        (u = o[l]),
          null != u &&
            (Gr(u, t, e),
            (n.charge += u.charge),
            (r += u.charge * u.cx),
            (i += u.charge * u.cy));
    if (n.point) {
      n.leaf ||
        ((n.point.x += Math.random() - 0.5),
        (n.point.y += Math.random() - 0.5));
      var c = t * e[n.point.index];
      (n.charge += n.pointCharge = c),
        (r += c * n.point.x),
        (i += c * n.point.y);
    }
    (n.cx = r / n.charge), (n.cy = i / n.charge);
  }
  function Kr(n, t) {
    return (
      Ju.rebind(n, t, "sort", "children", "value"),
      (n.nodes = n),
      (n.links = ii),
      n
    );
  }
  function Qr(n, t) {
    for (var e = [n]; null != (n = e.pop()); )
      if ((t(n), (i = n.children) && (r = i.length)))
        for (var r, i; --r >= 0; ) e.push(i[r]);
  }
  function ni(n, t) {
    for (var e = [n], r = []; null != (n = e.pop()); )
      if ((r.push(n), (u = n.children) && (i = u.length)))
        for (var i, u, o = -1; ++o < i; ) e.push(u[o]);
    for (; null != (n = r.pop()); ) t(n);
  }
  function ti(n) {
    return n.children;
  }
  function ei(n) {
    return n.value;
  }
  function ri(n, t) {
    return t.value - n.value;
  }
  function ii(n) {
    return Ju.merge(
      n.map(function (n) {
        return (n.children || []).map(function (t) {
          return { source: n, target: t };
        });
      })
    );
  }
  function ui(n) {
    return n.x;
  }
  function oi(n) {
    return n.y;
  }
  function ai(n, t, e) {
    (n.y0 = t), (n.y = e);
  }
  function li(n) {
    return Ju.range(n.length);
  }
  function ci(n) {
    for (var t = -1, e = n[0].length, r = []; ++t < e; ) r[t] = 0;
    return r;
  }
  function fi(n) {
    for (var t, e = 1, r = 0, i = n[0][1], u = n.length; e < u; ++e)
      (t = n[e][1]) > i && ((r = e), (i = t));
    return r;
  }
  function si(n) {
    return n.reduce(hi, 0);
  }
  function hi(n, t) {
    return n + t[1];
  }
  function pi(n, t) {
    return gi(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1));
  }
  function gi(n, t) {
    for (var e = -1, r = +n[0], i = (n[1] - r) / t, u = []; ++e <= t; )
      u[e] = i * e + r;
    return u;
  }
  function di(n) {
    return [Ju.min(n), Ju.max(n)];
  }
  function vi(n, t) {
    return n.value - t.value;
  }
  function yi(n, t) {
    var e = n._pack_next;
    (n._pack_next = t),
      (t._pack_prev = n),
      (t._pack_next = e),
      (e._pack_prev = t);
  }
  function mi(n, t) {
    (n._pack_next = t), (t._pack_prev = n);
  }
  function Mi(n, t) {
    var e = t.x - n.x,
      r = t.y - n.y,
      i = n.r + t.r;
    return 0.999 * i * i > e * e + r * r;
  }
  function xi(n) {
    function t(n) {
      (f = Math.min(n.x - n.r, f)),
        (s = Math.max(n.x + n.r, s)),
        (h = Math.min(n.y - n.r, h)),
        (p = Math.max(n.y + n.r, p));
    }
    if ((e = n.children) && (c = e.length)) {
      var e,
        r,
        i,
        u,
        o,
        a,
        l,
        c,
        f = 1 / 0,
        s = -(1 / 0),
        h = 1 / 0,
        p = -(1 / 0);
      if (
        (e.forEach(_i),
        (r = e[0]),
        (r.x = -r.r),
        (r.y = 0),
        t(r),
        c > 1 && ((i = e[1]), (i.x = i.r), (i.y = 0), t(i), c > 2))
      )
        for (
          u = e[2],
            Si(r, i, u),
            t(u),
            yi(r, u),
            r._pack_prev = u,
            yi(u, i),
            i = r._pack_next,
            o = 3;
          o < c;
          o++
        ) {
          Si(r, i, (u = e[o]));
          var g = 0,
            d = 1,
            v = 1;
          for (a = i._pack_next; a !== i; a = a._pack_next, d++)
            if (Mi(a, u)) {
              g = 1;
              break;
            }
          if (1 == g)
            for (
              l = r._pack_prev;
              l !== a._pack_prev && !Mi(l, u);
              l = l._pack_prev, v++
            );
          g
            ? (d < v || (d == v && i.r < r.r) ? mi(r, (i = a)) : mi((r = l), i),
              o--)
            : (yi(r, u), (i = u), t(u));
        }
      var y = (f + s) / 2,
        m = (h + p) / 2,
        M = 0;
      for (o = 0; o < c; o++)
        (u = e[o]),
          (u.x -= y),
          (u.y -= m),
          (M = Math.max(M, u.r + Math.sqrt(u.x * u.x + u.y * u.y)));
      (n.r = M), e.forEach(bi);
    }
  }
  function _i(n) {
    n._pack_next = n._pack_prev = n;
  }
  function bi(n) {
    delete n._pack_next, delete n._pack_prev;
  }
  function wi(n, t, e, r) {
    var i = n.children;
    if (((n.x = t += r * n.x), (n.y = e += r * n.y), (n.r *= r), i))
      for (var u = -1, o = i.length; ++u < o; ) wi(i[u], t, e, r);
  }
  function Si(n, t, e) {
    var r = n.r + e.r,
      i = t.x - n.x,
      u = t.y - n.y;
    if (r && (i || u)) {
      var o = t.r + e.r,
        a = i * i + u * u;
      (o *= o), (r *= r);
      var l = 0.5 + (r - o) / (2 * a),
        c =
          Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) /
          (2 * a);
      (e.x = n.x + l * i + c * u), (e.y = n.y + l * u - c * i);
    } else (e.x = n.x + r), (e.y = n.y);
  }
  function ki(n, t) {
    return n.parent == t.parent ? 1 : 2;
  }
  function Ni(n) {
    return (
      1 +
      Ju.max(n, function (n) {
        return n.y;
      })
    );
  }
  function Ei(n) {
    return (
      n.reduce(function (n, t) {
        return n + t.x;
      }, 0) / n.length
    );
  }
  function Ai(n) {
    var t = n.children;
    return t && t.length ? Ai(t[0]) : n;
  }
  function Ci(n) {
    var t,
      e = n.children;
    return e && (t = e.length) ? Ci(e[t - 1]) : n;
  }
  function zi(n) {
    return { x: n.x, y: n.y, dx: n.dx, dy: n.dy };
  }
  function qi(n, t) {
    var e = n.x + t[3],
      r = n.y + t[0],
      i = n.dx - t[1] - t[3],
      u = n.dy - t[0] - t[2];
    return (
      i < 0 && ((e += i / 2), (i = 0)),
      u < 0 && ((r += u / 2), (u = 0)),
      { x: e, y: r, dx: i, dy: u }
    );
  }
  function Li(n) {
    var t = n[0],
      e = n[n.length - 1];
    return t < e ? [t, e] : [e, t];
  }
  function Ti(n) {
    return n.rangeExtent ? n.rangeExtent() : Li(n.range());
  }
  function Ri(n, t, e, r) {
    var i = e(n[0], n[1]),
      u = r(t[0], t[1]);
    return function (n) {
      return u(i(n));
    };
  }
  function Di(n, t) {
    var e,
      r = 0,
      i = n.length - 1,
      u = n[r],
      o = n[i];
    return (
      o < u && ((e = r), (r = i), (i = e), (e = u), (u = o), (o = e)),
      (n[r] = t.floor(u)),
      (n[i] = t.ceil(o)),
      n
    );
  }
  function Pi(n) {
    return n
      ? {
          floor: function (t) {
            return Math.floor(t / n) * n;
          },
          ceil: function (t) {
            return Math.ceil(t / n) * n;
          },
        }
      : sl;
  }
  function ji(n, t, e, r) {
    var i = [],
      u = [],
      o = 0,
      a = Math.min(n.length, t.length) - 1;
    for (
      n[a] < n[0] && ((n = n.slice().reverse()), (t = t.slice().reverse()));
      ++o <= a;

    )
      i.push(e(n[o - 1], n[o])), u.push(r(t[o - 1], t[o]));
    return function (t) {
      var e = Ju.bisect(n, t, 1, a) - 1;
      return u[e](i[e](t));
    };
  }
  function Ui(n, t, e, r) {
    function i() {
      var i = Math.min(n.length, t.length) > 2 ? ji : Ri,
        l = r ? Ir : Yr;
      return (o = i(n, t, l, e)), (a = i(t, n, l, mr)), u;
    }
    function u(n) {
      return o(n);
    }
    var o, a;
    return (
      (u.invert = function (n) {
        return a(n);
      }),
      (u.domain = function (t) {
        return arguments.length ? ((n = t.map(Number)), i()) : n;
      }),
      (u.range = function (n) {
        return arguments.length ? ((t = n), i()) : t;
      }),
      (u.rangeRound = function (n) {
        return u.range(n).interpolate(Pr);
      }),
      (u.clamp = function (n) {
        return arguments.length ? ((r = n), i()) : r;
      }),
      (u.interpolate = function (n) {
        return arguments.length ? ((e = n), i()) : e;
      }),
      (u.ticks = function (t) {
        return Yi(n, t);
      }),
      (u.tickFormat = function (t, e) {
        return Ii(n, t, e);
      }),
      (u.nice = function (t) {
        return Hi(n, t), i();
      }),
      (u.copy = function () {
        return Ui(n, t, e, r);
      }),
      i()
    );
  }
  function Fi(n, t) {
    return Ju.rebind(n, t, "range", "rangeRound", "interpolate", "clamp");
  }
  function Hi(n, t) {
    return Di(n, Pi(Oi(n, t)[2]));
  }
  function Oi(n, t) {
    null == t && (t = 10);
    var e = Li(n),
      r = e[1] - e[0],
      i = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
      u = (t / r) * i;
    return (
      u <= 0.15 ? (i *= 10) : u <= 0.35 ? (i *= 5) : u <= 0.75 && (i *= 2),
      (e[0] = Math.ceil(e[0] / i) * i),
      (e[1] = Math.floor(e[1] / i) * i + 0.5 * i),
      (e[2] = i),
      e
    );
  }
  function Yi(n, t) {
    return Ju.range.apply(Ju, Oi(n, t));
  }
  function Ii(n, t, e) {
    var r = Oi(n, t);
    if (e) {
      var i = Qo.exec(e);
      if ((i.shift(), "s" === i[8])) {
        var u = Ju.formatPrefix(Math.max(oo(r[0]), oo(r[1])));
        return (
          i[7] || (i[7] = "." + Zi(u.scale(r[2]))),
          (i[8] = "f"),
          (e = Ju.format(i.join(""))),
          function (n) {
            return e(u.scale(n)) + u.symbol;
          }
        );
      }
      i[7] || (i[7] = "." + Vi(i[8], r)), (e = i.join(""));
    } else e = ",." + Zi(r[2]) + "f";
    return Ju.format(e);
  }
  function Zi(n) {
    return -Math.floor(Math.log(n) / Math.LN10 + 0.01);
  }
  function Vi(n, t) {
    var e = Zi(t[2]);
    return n in hl
      ? Math.abs(e - Zi(Math.max(oo(t[0]), oo(t[1])))) + +("e" !== n)
      : e - 2 * ("%" === n);
  }
  function Xi(n, t, e, r) {
    function i(n) {
      return (
        (e ? Math.log(n < 0 ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t)
      );
    }
    function u(n) {
      return e ? Math.pow(t, n) : -Math.pow(t, -n);
    }
    function o(t) {
      return n(i(t));
    }
    return (
      (o.invert = function (t) {
        return u(n.invert(t));
      }),
      (o.domain = function (t) {
        return arguments.length
          ? ((e = t[0] >= 0), n.domain((r = t.map(Number)).map(i)), o)
          : r;
      }),
      (o.base = function (e) {
        return arguments.length ? ((t = +e), n.domain(r.map(i)), o) : t;
      }),
      (o.nice = function () {
        var t = Di(r.map(i), e ? Math : gl);
        return n.domain(t), (r = t.map(u)), o;
      }),
      (o.ticks = function () {
        var n = Li(r),
          o = [],
          a = n[0],
          l = n[1],
          c = Math.floor(i(a)),
          f = Math.ceil(i(l)),
          s = t % 1 ? 2 : t;
        if (isFinite(f - c)) {
          if (e) {
            for (; c < f; c++) for (var h = 1; h < s; h++) o.push(u(c) * h);
            o.push(u(c));
          } else
            for (o.push(u(c)); c++ < f; )
              for (var h = s - 1; h > 0; h--) o.push(u(c) * h);
          for (c = 0; o[c] < a; c++);
          for (f = o.length; o[f - 1] > l; f--);
          o = o.slice(c, f);
        }
        return o;
      }),
      (o.tickFormat = function (n, t) {
        if (!arguments.length) return pl;
        arguments.length < 2
          ? (t = pl)
          : "function" != typeof t && (t = Ju.format(t));
        var r,
          a = Math.max(0.1, n / o.ticks().length),
          l = e ? ((r = 1e-12), Math.ceil) : ((r = -1e-12), Math.floor);
        return function (n) {
          return n / u(l(i(n) + r)) <= a ? t(n) : "";
        };
      }),
      (o.copy = function () {
        return Xi(n.copy(), t, e, r);
      }),
      Fi(o, n)
    );
  }
  function $i(n, t, e) {
    function r(t) {
      return n(i(t));
    }
    var i = Bi(t),
      u = Bi(1 / t);
    return (
      (r.invert = function (t) {
        return u(n.invert(t));
      }),
      (r.domain = function (t) {
        return arguments.length ? (n.domain((e = t.map(Number)).map(i)), r) : e;
      }),
      (r.ticks = function (n) {
        return Yi(e, n);
      }),
      (r.tickFormat = function (n, t) {
        return Ii(e, n, t);
      }),
      (r.nice = function (n) {
        return r.domain(Hi(e, n));
      }),
      (r.exponent = function (o) {
        return arguments.length
          ? ((i = Bi((t = o))), (u = Bi(1 / t)), n.domain(e.map(i)), r)
          : t;
      }),
      (r.copy = function () {
        return $i(n.copy(), t, e);
      }),
      Fi(r, n)
    );
  }
  function Bi(n) {
    return function (t) {
      return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n);
    };
  }
  function Wi(n, t) {
    function e(e) {
      return u[
        ((i.get(e) || ("range" === t.t ? i.set(e, n.push(e)) : NaN)) - 1) %
          u.length
      ];
    }
    function r(t, e) {
      return Ju.range(n.length).map(function (n) {
        return t + e * n;
      });
    }
    var i, u, o;
    return (
      (e.domain = function (r) {
        if (!arguments.length) return n;
        (n = []), (i = new c());
        for (var u, o = -1, a = r.length; ++o < a; )
          i.has((u = r[o])) || i.set(u, n.push(u));
        return e[t.t].apply(e, t.a);
      }),
      (e.range = function (n) {
        return arguments.length
          ? ((u = n), (o = 0), (t = { t: "range", a: arguments }), e)
          : u;
      }),
      (e.rangePoints = function (i, a) {
        arguments.length < 2 && (a = 0);
        var l = i[0],
          c = i[1],
          f =
            n.length < 2
              ? ((l = (l + c) / 2), 0)
              : (c - l) / (n.length - 1 + a);
        return (
          (u = r(l + (f * a) / 2, f)),
          (o = 0),
          (t = { t: "rangePoints", a: arguments }),
          e
        );
      }),
      (e.rangeRoundPoints = function (i, a) {
        arguments.length < 2 && (a = 0);
        var l = i[0],
          c = i[1],
          f =
            n.length < 2
              ? ((l = c = Math.round((l + c) / 2)), 0)
              : ((c - l) / (n.length - 1 + a)) | 0;
        return (
          (u = r(
            l + Math.round((f * a) / 2 + (c - l - (n.length - 1 + a) * f) / 2),
            f
          )),
          (o = 0),
          (t = { t: "rangeRoundPoints", a: arguments }),
          e
        );
      }),
      (e.rangeBands = function (i, a, l) {
        arguments.length < 2 && (a = 0), arguments.length < 3 && (l = a);
        var c = i[1] < i[0],
          f = i[c - 0],
          s = i[1 - c],
          h = (s - f) / (n.length - a + 2 * l);
        return (
          (u = r(f + h * l, h)),
          c && u.reverse(),
          (o = h * (1 - a)),
          (t = { t: "rangeBands", a: arguments }),
          e
        );
      }),
      (e.rangeRoundBands = function (i, a, l) {
        arguments.length < 2 && (a = 0), arguments.length < 3 && (l = a);
        var c = i[1] < i[0],
          f = i[c - 0],
          s = i[1 - c],
          h = Math.floor((s - f) / (n.length - a + 2 * l));
        return (
          (u = r(f + Math.round((s - f - (n.length - a) * h) / 2), h)),
          c && u.reverse(),
          (o = Math.round(h * (1 - a))),
          (t = { t: "rangeRoundBands", a: arguments }),
          e
        );
      }),
      (e.rangeBand = function () {
        return o;
      }),
      (e.rangeExtent = function () {
        return Li(t.a[0]);
      }),
      (e.copy = function () {
        return Wi(n, t);
      }),
      e.domain(n)
    );
  }
  function Ji(n, t) {
    function u() {
      var e = 0,
        r = t.length;
      for (a = []; ++e < r; ) a[e - 1] = Ju.quantile(n, e / r);
      return o;
    }
    function o(n) {
      if (!isNaN((n = +n))) return t[Ju.bisect(a, n)];
    }
    var a;
    return (
      (o.domain = function (t) {
        return arguments.length ? ((n = t.map(r).filter(i).sort(e)), u()) : n;
      }),
      (o.range = function (n) {
        return arguments.length ? ((t = n), u()) : t;
      }),
      (o.quantiles = function () {
        return a;
      }),
      (o.invertExtent = function (e) {
        return (
          (e = t.indexOf(e)),
          e < 0
            ? [NaN, NaN]
            : [e > 0 ? a[e - 1] : n[0], e < a.length ? a[e] : n[n.length - 1]]
        );
      }),
      (o.copy = function () {
        return Ji(n, t);
      }),
      u()
    );
  }
  function Gi(n, t, e) {
    function r(t) {
      return e[Math.max(0, Math.min(o, Math.floor(u * (t - n))))];
    }
    function i() {
      return (u = e.length / (t - n)), (o = e.length - 1), r;
    }
    var u, o;
    return (
      (r.domain = function (e) {
        return arguments.length
          ? ((n = +e[0]), (t = +e[e.length - 1]), i())
          : [n, t];
      }),
      (r.range = function (n) {
        return arguments.length ? ((e = n), i()) : e;
      }),
      (r.invertExtent = function (t) {
        return (
          (t = e.indexOf(t)), (t = t < 0 ? NaN : t / u + n), [t, t + 1 / u]
        );
      }),
      (r.copy = function () {
        return Gi(n, t, e);
      }),
      i()
    );
  }
  function Ki(n, t) {
    function e(e) {
      if (e <= e) return t[Ju.bisect(n, e)];
    }
    return (
      (e.domain = function (t) {
        return arguments.length ? ((n = t), e) : n;
      }),
      (e.range = function (n) {
        return arguments.length ? ((t = n), e) : t;
      }),
      (e.invertExtent = function (e) {
        return (e = t.indexOf(e)), [n[e - 1], n[e]];
      }),
      (e.copy = function () {
        return Ki(n, t);
      }),
      e
    );
  }
  function Qi(n) {
    function t(n) {
      return +n;
    }
    return (
      (t.invert = t),
      (t.domain = t.range =
        function (e) {
          return arguments.length ? ((n = e.map(t)), t) : n;
        }),
      (t.ticks = function (t) {
        return Yi(n, t);
      }),
      (t.tickFormat = function (t, e) {
        return Ii(n, t, e);
      }),
      (t.copy = function () {
        return Qi(n);
      }),
      t
    );
  }
  function nu() {
    return 0;
  }
  function tu(n) {
    return n.innerRadius;
  }
  function eu(n) {
    return n.outerRadius;
  }
  function ru(n) {
    return n.startAngle;
  }
  function iu(n) {
    return n.endAngle;
  }
  function uu(n) {
    return n && n.padAngle;
  }
  function ou(n, t, e, r) {
    return (n - e) * t - (t - r) * n > 0 ? 0 : 1;
  }
  function au(n, t, e, r, i) {
    var u = n[0] - t[0],
      o = n[1] - t[1],
      a = (i ? r : -r) / Math.sqrt(u * u + o * o),
      l = a * o,
      c = -a * u,
      f = n[0] + l,
      s = n[1] + c,
      h = t[0] + l,
      p = t[1] + c,
      g = (f + h) / 2,
      d = (s + p) / 2,
      v = h - f,
      y = p - s,
      m = v * v + y * y,
      M = e - r,
      x = f * p - h * s,
      _ = (y < 0 ? -1 : 1) * Math.sqrt(M * M * m - x * x),
      b = (x * y - v * _) / m,
      w = (-x * v - y * _) / m,
      S = (x * y + v * _) / m,
      k = (-x * v + y * _) / m,
      N = b - g,
      E = w - d,
      A = S - g,
      C = k - d;
    return (
      N * N + E * E > A * A + C * C && ((b = S), (w = k)),
      [
        [b - l, w - c],
        [(b * e) / M, (w * e) / M],
      ]
    );
  }
  function lu(n) {
    function t(t) {
      function o() {
        c.push("M", u(n(f), a));
      }
      for (
        var l, c = [], f = [], s = -1, h = t.length, p = En(e), g = En(r);
        ++s < h;

      )
        i.call(this, (l = t[s]), s)
          ? f.push([+p.call(this, l, s), +g.call(this, l, s)])
          : f.length && (o(), (f = []));
      return f.length && o(), c.length ? c.join("") : null;
    }
    var e = Ae,
      r = Ce,
      i = Ct,
      u = cu,
      o = u.key,
      a = 0.7;
    return (
      (t.x = function (n) {
        return arguments.length ? ((e = n), t) : e;
      }),
      (t.y = function (n) {
        return arguments.length ? ((r = n), t) : r;
      }),
      (t.defined = function (n) {
        return arguments.length ? ((i = n), t) : i;
      }),
      (t.interpolate = function (n) {
        return arguments.length
          ? ((o = "function" == typeof n ? (u = n) : (u = xl.get(n) || cu).key),
            t)
          : o;
      }),
      (t.tension = function (n) {
        return arguments.length ? ((a = n), t) : a;
      }),
      t
    );
  }
  function cu(n) {
    return n.join("L");
  }
  function fu(n) {
    return cu(n) + "Z";
  }
  function su(n) {
    for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e; )
      i.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
    return e > 1 && i.push("H", r[0]), i.join("");
  }
  function hu(n) {
    for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e; )
      i.push("V", (r = n[t])[1], "H", r[0]);
    return i.join("");
  }
  function pu(n) {
    for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e; )
      i.push("H", (r = n[t])[0], "V", r[1]);
    return i.join("");
  }
  function gu(n, t) {
    return n.length < 4 ? cu(n) : n[1] + yu(n.slice(1, -1), mu(n, t));
  }
  function du(n, t) {
    return n.length < 3
      ? cu(n)
      : n[0] +
          yu((n.push(n[0]), n), mu([n[n.length - 2]].concat(n, [n[1]]), t));
  }
  function vu(n, t) {
    return n.length < 3 ? cu(n) : n[0] + yu(n, mu(n, t));
  }
  function yu(n, t) {
    if (t.length < 1 || (n.length != t.length && n.length != t.length + 2))
      return cu(n);
    var e = n.length != t.length,
      r = "",
      i = n[0],
      u = n[1],
      o = t[0],
      a = o,
      l = 1;
    if (
      (e &&
        ((r +=
          "Q" +
          (u[0] - (2 * o[0]) / 3) +
          "," +
          (u[1] - (2 * o[1]) / 3) +
          "," +
          u[0] +
          "," +
          u[1]),
        (i = n[1]),
        (l = 2)),
      t.length > 1)
    ) {
      (a = t[1]),
        (u = n[l]),
        l++,
        (r +=
          "C" +
          (i[0] + o[0]) +
          "," +
          (i[1] + o[1]) +
          "," +
          (u[0] - a[0]) +
          "," +
          (u[1] - a[1]) +
          "," +
          u[0] +
          "," +
          u[1]);
      for (var c = 2; c < t.length; c++, l++)
        (u = n[l]),
          (a = t[c]),
          (r +=
            "S" +
            (u[0] - a[0]) +
            "," +
            (u[1] - a[1]) +
            "," +
            u[0] +
            "," +
            u[1]);
    }
    if (e) {
      var f = n[l];
      r +=
        "Q" +
        (u[0] + (2 * a[0]) / 3) +
        "," +
        (u[1] + (2 * a[1]) / 3) +
        "," +
        f[0] +
        "," +
        f[1];
    }
    return r;
  }
  function mu(n, t) {
    for (
      var e, r = [], i = (1 - t) / 2, u = n[0], o = n[1], a = 1, l = n.length;
      ++a < l;

    )
      (e = u),
        (u = o),
        (o = n[a]),
        r.push([i * (o[0] - e[0]), i * (o[1] - e[1])]);
    return r;
  }
  function Mu(n) {
    if (n.length < 3) return cu(n);
    var t = 1,
      e = n.length,
      r = n[0],
      i = r[0],
      u = r[1],
      o = [i, i, i, (r = n[1])[0]],
      a = [u, u, u, r[1]],
      l = [i, ",", u, "L", wu(wl, o), ",", wu(wl, a)];
    for (n.push(n[e - 1]); ++t <= e; )
      (r = n[t]), o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), Su(l, o, a);
    return n.pop(), l.push("L", r), l.join("");
  }
  function xu(n) {
    if (n.length < 4) return cu(n);
    for (var t, e = [], r = -1, i = n.length, u = [0], o = [0]; ++r < 3; )
      (t = n[r]), u.push(t[0]), o.push(t[1]);
    for (e.push(wu(wl, u) + "," + wu(wl, o)), --r; ++r < i; )
      (t = n[r]), u.shift(), u.push(t[0]), o.shift(), o.push(t[1]), Su(e, u, o);
    return e.join("");
  }
  function _u(n) {
    for (var t, e, r = -1, i = n.length, u = i + 4, o = [], a = []; ++r < 4; )
      (e = n[r % i]), o.push(e[0]), a.push(e[1]);
    for (t = [wu(wl, o), ",", wu(wl, a)], --r; ++r < u; )
      (e = n[r % i]),
        o.shift(),
        o.push(e[0]),
        a.shift(),
        a.push(e[1]),
        Su(t, o, a);
    return t.join("");
  }
  function bu(n, t) {
    var e = n.length - 1;
    if (e)
      for (
        var r,
          i,
          u = n[0][0],
          o = n[0][1],
          a = n[e][0] - u,
          l = n[e][1] - o,
          c = -1;
        ++c <= e;

      )
        (r = n[c]),
          (i = c / e),
          (r[0] = t * r[0] + (1 - t) * (u + i * a)),
          (r[1] = t * r[1] + (1 - t) * (o + i * l));
    return Mu(n);
  }
  function wu(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3];
  }
  function Su(n, t, e) {
    n.push(
      "C",
      wu(_l, t),
      ",",
      wu(_l, e),
      ",",
      wu(bl, t),
      ",",
      wu(bl, e),
      ",",
      wu(wl, t),
      ",",
      wu(wl, e)
    );
  }
  function ku(n, t) {
    return (t[1] - n[1]) / (t[0] - n[0]);
  }
  function Nu(n) {
    for (
      var t = 0,
        e = n.length - 1,
        r = [],
        i = n[0],
        u = n[1],
        o = (r[0] = ku(i, u));
      ++t < e;

    )
      r[t] = (o + (o = ku((i = u), (u = n[t + 1])))) / 2;
    return (r[t] = o), r;
  }
  function Eu(n) {
    for (var t, e, r, i, u = [], o = Nu(n), a = -1, l = n.length - 1; ++a < l; )
      (t = ku(n[a], n[a + 1])),
        oo(t) < wo
          ? (o[a] = o[a + 1] = 0)
          : ((e = o[a] / t),
            (r = o[a + 1] / t),
            (i = e * e + r * r),
            i > 9 &&
              ((i = (3 * t) / Math.sqrt(i)),
              (o[a] = i * e),
              (o[a + 1] = i * r)));
    for (a = -1; ++a <= l; )
      (i =
        (n[Math.min(l, a + 1)][0] - n[Math.max(0, a - 1)][0]) /
        (6 * (1 + o[a] * o[a]))),
        u.push([i || 0, o[a] * i || 0]);
    return u;
  }
  function Au(n) {
    return n.length < 3 ? cu(n) : n[0] + yu(n, Eu(n));
  }
  function Cu(n) {
    for (var t, e, r, i = -1, u = n.length; ++i < u; )
      (t = n[i]),
        (e = t[0]),
        (r = t[1] - Ao),
        (t[0] = e * Math.cos(r)),
        (t[1] = e * Math.sin(r));
    return n;
  }
  function zu(n) {
    function t(t) {
      function l() {
        d.push("M", a(n(y), s), f, c(n(v.reverse()), s), "Z");
      }
      for (
        var h,
          p,
          g,
          d = [],
          v = [],
          y = [],
          m = -1,
          M = t.length,
          x = En(e),
          _ = En(i),
          b =
            e === r
              ? function () {
                  return p;
                }
              : En(r),
          w =
            i === u
              ? function () {
                  return g;
                }
              : En(u);
        ++m < M;

      )
        o.call(this, (h = t[m]), m)
          ? (v.push([(p = +x.call(this, h, m)), (g = +_.call(this, h, m))]),
            y.push([+b.call(this, h, m), +w.call(this, h, m)]))
          : v.length && (l(), (v = []), (y = []));
      return v.length && l(), d.length ? d.join("") : null;
    }
    var e = Ae,
      r = Ae,
      i = 0,
      u = Ce,
      o = Ct,
      a = cu,
      l = a.key,
      c = a,
      f = "L",
      s = 0.7;
    return (
      (t.x = function (n) {
        return arguments.length ? ((e = r = n), t) : r;
      }),
      (t.x0 = function (n) {
        return arguments.length ? ((e = n), t) : e;
      }),
      (t.x1 = function (n) {
        return arguments.length ? ((r = n), t) : r;
      }),
      (t.y = function (n) {
        return arguments.length ? ((i = u = n), t) : u;
      }),
      (t.y0 = function (n) {
        return arguments.length ? ((i = n), t) : i;
      }),
      (t.y1 = function (n) {
        return arguments.length ? ((u = n), t) : u;
      }),
      (t.defined = function (n) {
        return arguments.length ? ((o = n), t) : o;
      }),
      (t.interpolate = function (n) {
        return arguments.length
          ? ((l = "function" == typeof n ? (a = n) : (a = xl.get(n) || cu).key),
            (c = a.reverse || a),
            (f = a.closed ? "M" : "L"),
            t)
          : l;
      }),
      (t.tension = function (n) {
        return arguments.length ? ((s = n), t) : s;
      }),
      t
    );
  }
  function qu(n) {
    return n.radius;
  }
  function Lu(n) {
    return [n.x, n.y];
  }
  function Tu(n) {
    return function () {
      var t = n.apply(this, arguments),
        e = t[0],
        r = t[1] - Ao;
      return [e * Math.cos(r), e * Math.sin(r)];
    };
  }
  function Ru() {
    return 64;
  }
  function Du() {
    return "circle";
  }
  function Pu(n) {
    var t = Math.sqrt(n / ko);
    return (
      "M0," +
      t +
      "A" +
      t +
      "," +
      t +
      " 0 1,1 0," +
      -t +
      "A" +
      t +
      "," +
      t +
      " 0 1,1 0," +
      t +
      "Z"
    );
  }
  function ju(n) {
    return function () {
      var t, e;
      (t = this[n]) &&
        (e = t[t.active]) &&
        (--t.count ? delete t[t.active] : delete this[n],
        (t.active += 0.5),
        e.event && e.event.interrupt.call(this, this.__data__, e.index));
    };
  }
  function Uu(n, t, e) {
    return so(n, zl), (n.namespace = t), (n.id = e), n;
  }
  function Fu(n, t, e, r) {
    var i = n.id,
      u = n.namespace;
    return I(
      n,
      "function" == typeof e
        ? function (n, o, a) {
            n[u][i].tween.set(t, r(e.call(n, n.__data__, o, a)));
          }
        : ((e = r(e)),
          function (n) {
            n[u][i].tween.set(t, e);
          })
    );
  }
  function Hu(n) {
    return (
      null == n && (n = ""),
      function () {
        this.textContent = n;
      }
    );
  }
  function Ou(n) {
    return null == n ? "__transition__" : "__transition_" + n + "__";
  }
  function Yu(n, t, e, r, i) {
    var u = n[e] || (n[e] = { active: 0, count: 0 }),
      o = u[r];
    if (!o) {
      var a = i.time;
      (o = u[r] =
        {
          tween: new c(),
          time: a,
          delay: i.delay,
          duration: i.duration,
          ease: i.ease,
          index: t,
        }),
        (i = null),
        ++u.count,
        Ju.timer(
          function (i) {
            function l(e) {
              if (u.active > r) return f();
              var i = u[u.active];
              i &&
                (--u.count,
                delete u[u.active],
                i.event && i.event.interrupt.call(n, n.__data__, i.index)),
                (u.active = r),
                o.event && o.event.start.call(n, n.__data__, t),
                o.tween.forEach(function (e, r) {
                  (r = r.call(n, n.__data__, t)) && d.push(r);
                }),
                (h = o.ease),
                (s = o.duration),
                Ju.timer(
                  function () {
                    return (g.c = c(e || 1) ? Ct : c), 1;
                  },
                  0,
                  a
                );
            }
            function c(e) {
              if (u.active !== r) return 1;
              for (var i = e / s, a = h(i), l = d.length; l > 0; )
                d[--l].call(n, a);
              return i >= 1
                ? (o.event && o.event.end.call(n, n.__data__, t), f())
                : void 0;
            }
            function f() {
              return --u.count ? delete u[r] : delete n[e], 1;
            }
            var s,
              h,
              p = o.delay,
              g = Jo,
              d = [];
            return (g.t = p + a), p <= i ? l(i - p) : void (g.c = l);
          },
          0,
          a
        );
    }
  }
  function Iu(n, t, e) {
    n.attr("transform", function (n) {
      var r = t(n);
      return "translate(" + (isFinite(r) ? r : e(n)) + ",0)";
    });
  }
  function Zu(n, t, e) {
    n.attr("transform", function (n) {
      var r = t(n);
      return "translate(0," + (isFinite(r) ? r : e(n)) + ")";
    });
  }
  function Vu(n) {
    return n.toISOString();
  }
  function Xu(n, t, e) {
    function r(t) {
      return n(t);
    }
    function i(n, e) {
      var r = n[1] - n[0],
        i = r / e,
        u = Ju.bisect(Fl, i);
      return u == Fl.length
        ? [
            t.year,
            Oi(
              n.map(function (n) {
                return n / 31536e6;
              }),
              e
            )[2],
          ]
        : u
        ? t[i / Fl[u - 1] < Fl[u] / i ? u - 1 : u]
        : [Yl, Oi(n, e)[2]];
    }
    return (
      (r.invert = function (t) {
        return $u(n.invert(t));
      }),
      (r.domain = function (t) {
        return arguments.length ? (n.domain(t), r) : n.domain().map($u);
      }),
      (r.nice = function (n, t) {
        function e(e) {
          return !isNaN(e) && !n.range(e, $u(+e + 1), t).length;
        }
        var u = r.domain(),
          o = Li(u),
          a = null == n ? i(o, 10) : "number" == typeof n && i(o, n);
        return (
          a && ((n = a[0]), (t = a[1])),
          r.domain(
            Di(
              u,
              t > 1
                ? {
                    floor: function (t) {
                      for (; e((t = n.floor(t))); ) t = $u(t - 1);
                      return t;
                    },
                    ceil: function (t) {
                      for (; e((t = n.ceil(t))); ) t = $u(+t + 1);
                      return t;
                    },
                  }
                : n
            )
          )
        );
      }),
      (r.ticks = function (n, t) {
        var e = Li(r.domain()),
          u =
            null == n
              ? i(e, 10)
              : "number" == typeof n
              ? i(e, n)
              : !n.range && [{ range: n }, t];
        return (
          u && ((n = u[0]), (t = u[1])),
          n.range(e[0], $u(+e[1] + 1), t < 1 ? 1 : t)
        );
      }),
      (r.tickFormat = function () {
        return e;
      }),
      (r.copy = function () {
        return Xu(n.copy(), t, e);
      }),
      Fi(r, n)
    );
  }
  function $u(n) {
    return new Date(n);
  }
  function Bu(n) {
    return JSON.parse(n.responseText);
  }
  function Wu(n) {
    var t = Qu.createRange();
    return t.selectNode(Qu.body), t.createContextualFragment(n.responseText);
  }
  var Ju = { version: "3.5.6" },
    Gu = [].slice,
    Ku = function (n) {
      return Gu.call(n);
    },
    Qu = this.document;
  if (Qu)
    try {
      Ku(Qu.documentElement.childNodes)[0].nodeType;
    } catch (n) {
      Ku = function (n) {
        for (var t = n.length, e = new Array(t); t--; ) e[t] = n[t];
        return e;
      };
    }
  if (
    (Date.now ||
      (Date.now = function () {
        return +new Date();
      }),
    Qu)
  )
    try {
      Qu.createElement("DIV").style.setProperty("opacity", 0, "");
    } catch (n) {
      var no = this.Element.prototype,
        to = no.setAttribute,
        eo = no.setAttributeNS,
        ro = this.CSSStyleDeclaration.prototype,
        io = ro.setProperty;
      (no.setAttribute = function (n, t) {
        to.call(this, n, t + "");
      }),
        (no.setAttributeNS = function (n, t, e) {
          eo.call(this, n, t, e + "");
        }),
        (ro.setProperty = function (n, t, e) {
          io.call(this, n, t + "", e);
        });
    }
  (Ju.ascending = e),
    (Ju.descending = function (n, t) {
      return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
    }),
    (Ju.min = function (n, t) {
      var e,
        r,
        i = -1,
        u = n.length;
      if (1 === arguments.length) {
        for (; ++i < u; )
          if (null != (r = n[i]) && r >= r) {
            e = r;
            break;
          }
        for (; ++i < u; ) null != (r = n[i]) && e > r && (e = r);
      } else {
        for (; ++i < u; )
          if (null != (r = t.call(n, n[i], i)) && r >= r) {
            e = r;
            break;
          }
        for (; ++i < u; ) null != (r = t.call(n, n[i], i)) && e > r && (e = r);
      }
      return e;
    }),
    (Ju.max = function (n, t) {
      var e,
        r,
        i = -1,
        u = n.length;
      if (1 === arguments.length) {
        for (; ++i < u; )
          if (null != (r = n[i]) && r >= r) {
            e = r;
            break;
          }
        for (; ++i < u; ) null != (r = n[i]) && r > e && (e = r);
      } else {
        for (; ++i < u; )
          if (null != (r = t.call(n, n[i], i)) && r >= r) {
            e = r;
            break;
          }
        for (; ++i < u; ) null != (r = t.call(n, n[i], i)) && r > e && (e = r);
      }
      return e;
    }),
    (Ju.extent = function (n, t) {
      var e,
        r,
        i,
        u = -1,
        o = n.length;
      if (1 === arguments.length) {
        for (; ++u < o; )
          if (null != (r = n[u]) && r >= r) {
            e = i = r;
            break;
          }
        for (; ++u < o; )
          null != (r = n[u]) && (e > r && (e = r), i < r && (i = r));
      } else {
        for (; ++u < o; )
          if (null != (r = t.call(n, n[u], u)) && r >= r) {
            e = i = r;
            break;
          }
        for (; ++u < o; )
          null != (r = t.call(n, n[u], u)) &&
            (e > r && (e = r), i < r && (i = r));
      }
      return [e, i];
    }),
    (Ju.sum = function (n, t) {
      var e,
        r = 0,
        u = n.length,
        o = -1;
      if (1 === arguments.length) for (; ++o < u; ) i((e = +n[o])) && (r += e);
      else for (; ++o < u; ) i((e = +t.call(n, n[o], o))) && (r += e);
      return r;
    }),
    (Ju.mean = function (n, t) {
      var e,
        u = 0,
        o = n.length,
        a = -1,
        l = o;
      if (1 === arguments.length)
        for (; ++a < o; ) i((e = r(n[a]))) ? (u += e) : --l;
      else for (; ++a < o; ) i((e = r(t.call(n, n[a], a)))) ? (u += e) : --l;
      if (l) return u / l;
    }),
    (Ju.quantile = function (n, t) {
      var e = (n.length - 1) * t + 1,
        r = Math.floor(e),
        i = +n[r - 1],
        u = e - r;
      return u ? i + u * (n[r] - i) : i;
    }),
    (Ju.median = function (n, t) {
      var u,
        o = [],
        a = n.length,
        l = -1;
      if (1 === arguments.length)
        for (; ++l < a; ) i((u = r(n[l]))) && o.push(u);
      else for (; ++l < a; ) i((u = r(t.call(n, n[l], l)))) && o.push(u);
      if (o.length) return Ju.quantile(o.sort(e), 0.5);
    }),
    (Ju.variance = function (n, t) {
      var e,
        u,
        o = n.length,
        a = 0,
        l = 0,
        c = -1,
        f = 0;
      if (1 === arguments.length)
        for (; ++c < o; )
          i((e = r(n[c]))) && ((u = e - a), (a += u / ++f), (l += u * (e - a)));
      else
        for (; ++c < o; )
          i((e = r(t.call(n, n[c], c)))) &&
            ((u = e - a), (a += u / ++f), (l += u * (e - a)));
      if (f > 1) return l / (f - 1);
    }),
    (Ju.deviation = function () {
      var n = Ju.variance.apply(this, arguments);
      return n ? Math.sqrt(n) : n;
    });
  var uo = u(e);
  (Ju.bisectLeft = uo.left),
    (Ju.bisect = Ju.bisectRight = uo.right),
    (Ju.bisector = function (n) {
      return u(
        1 === n.length
          ? function (t, r) {
              return e(n(t), r);
            }
          : n
      );
    }),
    (Ju.shuffle = function (n, t, e) {
      (u = arguments.length) < 3 && ((e = n.length), u < 2 && (t = 0));
      for (var r, i, u = e - t; u; )
        (i = (Math.random() * u--) | 0),
          (r = n[u + t]),
          (n[u + t] = n[i + t]),
          (n[i + t] = r);
      return n;
    }),
    (Ju.permute = function (n, t) {
      for (var e = t.length, r = new Array(e); e--; ) r[e] = n[t[e]];
      return r;
    }),
    (Ju.pairs = function (n) {
      for (
        var t, e = 0, r = n.length - 1, i = n[0], u = new Array(r < 0 ? 0 : r);
        e < r;

      )
        u[e] = [(t = i), (i = n[++e])];
      return u;
    }),
    (Ju.zip = function () {
      if (!(r = arguments.length)) return [];
      for (var n = -1, t = Ju.min(arguments, o), e = new Array(t); ++n < t; )
        for (var r, i = -1, u = (e[n] = new Array(r)); ++i < r; )
          u[i] = arguments[i][n];
      return e;
    }),
    (Ju.transpose = function (n) {
      return Ju.zip.apply(Ju, n);
    }),
    (Ju.keys = function (n) {
      var t = [];
      for (var e in n) t.push(e);
      return t;
    }),
    (Ju.values = function (n) {
      var t = [];
      for (var e in n) t.push(n[e]);
      return t;
    }),
    (Ju.entries = function (n) {
      var t = [];
      for (var e in n) t.push({ key: e, value: n[e] });
      return t;
    }),
    (Ju.merge = function (n) {
      for (var t, e, r, i = n.length, u = -1, o = 0; ++u < i; )
        o += n[u].length;
      for (e = new Array(o); --i >= 0; )
        for (r = n[i], t = r.length; --t >= 0; ) e[--o] = r[t];
      return e;
    });
  var oo = Math.abs;
  (Ju.range = function (n, t, e) {
    if (
      (arguments.length < 3 &&
        ((e = 1), arguments.length < 2 && ((t = n), (n = 0))),
      (t - n) / e === 1 / 0)
    )
      throw new Error("infinite range");
    var r,
      i = [],
      u = a(oo(e)),
      o = -1;
    if (((n *= u), (t *= u), (e *= u), e < 0))
      for (; (r = n + e * ++o) > t; ) i.push(r / u);
    else for (; (r = n + e * ++o) < t; ) i.push(r / u);
    return i;
  }),
    (Ju.map = function (n, t) {
      var e = new c();
      if (n instanceof c)
        n.forEach(function (n, t) {
          e.set(n, t);
        });
      else if (Array.isArray(n)) {
        var r,
          i = -1,
          u = n.length;
        if (1 === arguments.length) for (; ++i < u; ) e.set(i, n[i]);
        else for (; ++i < u; ) e.set(t.call(n, (r = n[i]), i), r);
      } else for (var o in n) e.set(o, n[o]);
      return e;
    });
  var ao = "__proto__",
    lo = "\0";
  l(c, {
    has: h,
    get: function (n) {
      return this._[f(n)];
    },
    set: function (n, t) {
      return (this._[f(n)] = t);
    },
    remove: p,
    keys: g,
    values: function () {
      var n = [];
      for (var t in this._) n.push(this._[t]);
      return n;
    },
    entries: function () {
      var n = [];
      for (var t in this._) n.push({ key: s(t), value: this._[t] });
      return n;
    },
    size: d,
    empty: v,
    forEach: function (n) {
      for (var t in this._) n.call(this, s(t), this._[t]);
    },
  }),
    (Ju.nest = function () {
      function n(t, o, a) {
        if (a >= u.length) return r ? r.call(i, o) : e ? o.sort(e) : o;
        for (
          var l, f, s, h, p = -1, g = o.length, d = u[a++], v = new c();
          ++p < g;

        )
          (h = v.get((l = d((f = o[p]))))) ? h.push(f) : v.set(l, [f]);
        return (
          t
            ? ((f = t()),
              (s = function (e, r) {
                f.set(e, n(t, r, a));
              }))
            : ((f = {}),
              (s = function (e, r) {
                f[e] = n(t, r, a);
              })),
          v.forEach(s),
          f
        );
      }
      function t(n, e) {
        if (e >= u.length) return n;
        var r = [],
          i = o[e++];
        return (
          n.forEach(function (n, i) {
            r.push({ key: n, values: t(i, e) });
          }),
          i
            ? r.sort(function (n, t) {
                return i(n.key, t.key);
              })
            : r
        );
      }
      var e,
        r,
        i = {},
        u = [],
        o = [];
      return (
        (i.map = function (t, e) {
          return n(e, t, 0);
        }),
        (i.entries = function (e) {
          return t(n(Ju.map, e, 0), 0);
        }),
        (i.key = function (n) {
          return u.push(n), i;
        }),
        (i.sortKeys = function (n) {
          return (o[u.length - 1] = n), i;
        }),
        (i.sortValues = function (n) {
          return (e = n), i;
        }),
        (i.rollup = function (n) {
          return (r = n), i;
        }),
        i
      );
    }),
    (Ju.set = function (n) {
      var t = new y();
      if (n) for (var e = 0, r = n.length; e < r; ++e) t.add(n[e]);
      return t;
    }),
    l(y, {
      has: h,
      add: function (n) {
        return (this._[f((n += ""))] = !0), n;
      },
      remove: p,
      values: g,
      size: d,
      empty: v,
      forEach: function (n) {
        for (var t in this._) n.call(this, s(t));
      },
    }),
    (Ju.behavior = {}),
    (Ju.rebind = function (n, t) {
      for (var e, r = 1, i = arguments.length; ++r < i; )
        n[(e = arguments[r])] = M(n, t, t[e]);
      return n;
    });
  var co = ["webkit", "ms", "moz", "Moz", "o", "O"];
  (Ju.dispatch = function () {
    for (var n = new b(), t = -1, e = arguments.length; ++t < e; )
      n[arguments[t]] = w(n);
    return n;
  }),
    (b.prototype.on = function (n, t) {
      var e = n.indexOf("."),
        r = "";
      if ((e >= 0 && ((r = n.slice(e + 1)), (n = n.slice(0, e))), n))
        return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
      if (2 === arguments.length) {
        if (null == t)
          for (n in this) this.hasOwnProperty(n) && this[n].on(r, null);
        return this;
      }
    }),
    (Ju.event = null),
    (Ju.requote = function (n) {
      return n.replace(fo, "\\$&");
    });
  var fo = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
    so = {}.__proto__
      ? function (n, t) {
          n.__proto__ = t;
        }
      : function (n, t) {
          for (var e in t) n[e] = t[e];
        },
    ho = function (n, t) {
      return t.querySelector(n);
    },
    po = function (n, t) {
      return t.querySelectorAll(n);
    },
    go = function (n, t) {
      var e = n.matches || n[x(n, "matchesSelector")];
      return (go = function (n, t) {
        return e.call(n, t);
      })(n, t);
    };
  "function" == typeof Sizzle &&
    ((ho = function (n, t) {
      return Sizzle(n, t)[0] || null;
    }),
    (po = Sizzle),
    (go = Sizzle.matchesSelector)),
    (Ju.selection = function () {
      return Ju.select(Qu.documentElement);
    });
  var vo = (Ju.selection.prototype = []);
  (vo.select = function (n) {
    var t,
      e,
      r,
      i,
      u = [];
    n = A(n);
    for (var o = -1, a = this.length; ++o < a; ) {
      u.push((t = [])), (t.parentNode = (r = this[o]).parentNode);
      for (var l = -1, c = r.length; ++l < c; )
        (i = r[l])
          ? (t.push((e = n.call(i, i.__data__, l, o))),
            e && "__data__" in i && (e.__data__ = i.__data__))
          : t.push(null);
    }
    return E(u);
  }),
    (vo.selectAll = function (n) {
      var t,
        e,
        r = [];
      n = C(n);
      for (var i = -1, u = this.length; ++i < u; )
        for (var o = this[i], a = -1, l = o.length; ++a < l; )
          (e = o[a]) &&
            (r.push((t = Ku(n.call(e, e.__data__, a, i)))), (t.parentNode = e));
      return E(r);
    });
  var yo = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
  };
  (Ju.ns = {
    prefix: yo,
    qualify: function (n) {
      var t = n.indexOf(":"),
        e = n;
      return (
        t >= 0 && ((e = n.slice(0, t)), (n = n.slice(t + 1))),
        yo.hasOwnProperty(e) ? { space: yo[e], local: n } : n
      );
    },
  }),
    (vo.attr = function (n, t) {
      if (arguments.length < 2) {
        if ("string" == typeof n) {
          var e = this.node();
          return (
            (n = Ju.ns.qualify(n)),
            n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n)
          );
        }
        for (t in n) this.each(z(t, n[t]));
        return this;
      }
      return this.each(z(n, t));
    }),
    (vo.classed = function (n, t) {
      if (arguments.length < 2) {
        if ("string" == typeof n) {
          var e = this.node(),
            r = (n = T(n)).length,
            i = -1;
          if ((t = e.classList)) {
            for (; ++i < r; ) if (!t.contains(n[i])) return !1;
          } else
            for (t = e.getAttribute("class"); ++i < r; )
              if (!L(n[i]).test(t)) return !1;
          return !0;
        }
        for (t in n) this.each(R(t, n[t]));
        return this;
      }
      return this.each(R(n, t));
    }),
    (vo.style = function (n, e, r) {
      var i = arguments.length;
      if (i < 3) {
        if ("string" != typeof n) {
          i < 2 && (e = "");
          for (r in n) this.each(P(r, n[r], e));
          return this;
        }
        if (i < 2) {
          var u = this.node();
          return t(u).getComputedStyle(u, null).getPropertyValue(n);
        }
        r = "";
      }
      return this.each(P(n, e, r));
    }),
    (vo.property = function (n, t) {
      if (arguments.length < 2) {
        if ("string" == typeof n) return this.node()[n];
        for (t in n) this.each(j(t, n[t]));
        return this;
      }
      return this.each(j(n, t));
    }),
    (vo.text = function (n) {
      return arguments.length
        ? this.each(
            "function" == typeof n
              ? function () {
                  var t = n.apply(this, arguments);
                  this.textContent = null == t ? "" : t;
                }
              : null == n
              ? function () {
                  this.textContent = "";
                }
              : function () {
                  this.textContent = n;
                }
          )
        : this.node().textContent;
    }),
    (vo.html = function (n) {
      return arguments.length
        ? this.each(
            "function" == typeof n
              ? function () {
                  var t = n.apply(this, arguments);
                  this.innerHTML = null == t ? "" : t;
                }
              : null == n
              ? function () {
                  this.innerHTML = "";
                }
              : function () {
                  this.innerHTML = n;
                }
          )
        : this.node().innerHTML;
    }),
    (vo.append = function (n) {
      return (
        (n = U(n)),
        this.select(function () {
          return this.appendChild(n.apply(this, arguments));
        })
      );
    }),
    (vo.insert = function (n, t) {
      return (
        (n = U(n)),
        (t = A(t)),
        this.select(function () {
          return this.insertBefore(
            n.apply(this, arguments),
            t.apply(this, arguments) || null
          );
        })
      );
    }),
    (vo.remove = function () {
      return this.each(F);
    }),
    (vo.data = function (n, t) {
      function e(n, e) {
        var r,
          i,
          u,
          o = n.length,
          s = e.length,
          h = Math.min(o, s),
          p = new Array(s),
          g = new Array(s),
          d = new Array(o);
        if (t) {
          var v,
            y = new c(),
            m = new Array(o);
          for (r = -1; ++r < o; )
            y.has((v = t.call((i = n[r]), i.__data__, r)))
              ? (d[r] = i)
              : y.set(v, i),
              (m[r] = v);
          for (r = -1; ++r < s; )
            (i = y.get((v = t.call(e, (u = e[r]), r))))
              ? i !== !0 && ((p[r] = i), (i.__data__ = u))
              : (g[r] = H(u)),
              y.set(v, !0);
          for (r = -1; ++r < o; ) y.get(m[r]) !== !0 && (d[r] = n[r]);
        } else {
          for (r = -1; ++r < h; )
            (i = n[r]),
              (u = e[r]),
              i ? ((i.__data__ = u), (p[r] = i)) : (g[r] = H(u));
          for (; r < s; ++r) g[r] = H(e[r]);
          for (; r < o; ++r) d[r] = n[r];
        }
        (g.update = p),
          (g.parentNode = p.parentNode = d.parentNode = n.parentNode),
          a.push(g),
          l.push(p),
          f.push(d);
      }
      var r,
        i,
        u = -1,
        o = this.length;
      if (!arguments.length) {
        for (n = new Array((o = (r = this[0]).length)); ++u < o; )
          (i = r[u]) && (n[u] = i.__data__);
        return n;
      }
      var a = Z([]),
        l = E([]),
        f = E([]);
      if ("function" == typeof n)
        for (; ++u < o; ) e((r = this[u]), n.call(r, r.parentNode.__data__, u));
      else for (; ++u < o; ) e((r = this[u]), n);
      return (
        (l.enter = function () {
          return a;
        }),
        (l.exit = function () {
          return f;
        }),
        l
      );
    }),
    (vo.datum = function (n) {
      return arguments.length
        ? this.property("__data__", n)
        : this.property("__data__");
    }),
    (vo.filter = function (n) {
      var t,
        e,
        r,
        i = [];
      "function" != typeof n && (n = O(n));
      for (var u = 0, o = this.length; u < o; u++) {
        i.push((t = [])), (t.parentNode = (e = this[u]).parentNode);
        for (var a = 0, l = e.length; a < l; a++)
          (r = e[a]) && n.call(r, r.__data__, a, u) && t.push(r);
      }
      return E(i);
    }),
    (vo.order = function () {
      for (var n = -1, t = this.length; ++n < t; )
        for (var e, r = this[n], i = r.length - 1, u = r[i]; --i >= 0; )
          (e = r[i]) &&
            (u && u !== e.nextSibling && u.parentNode.insertBefore(e, u),
            (u = e));
      return this;
    }),
    (vo.sort = function (n) {
      n = Y.apply(this, arguments);
      for (var t = -1, e = this.length; ++t < e; ) this[t].sort(n);
      return this.order();
    }),
    (vo.each = function (n) {
      return I(this, function (t, e, r) {
        n.call(t, t.__data__, e, r);
      });
    }),
    (vo.call = function (n) {
      var t = Ku(arguments);
      return n.apply((t[0] = this), t), this;
    }),
    (vo.empty = function () {
      return !this.node();
    }),
    (vo.node = function () {
      for (var n = 0, t = this.length; n < t; n++)
        for (var e = this[n], r = 0, i = e.length; r < i; r++) {
          var u = e[r];
          if (u) return u;
        }
      return null;
    }),
    (vo.size = function () {
      var n = 0;
      return (
        I(this, function () {
          ++n;
        }),
        n
      );
    });
  var mo = [];
  (Ju.selection.enter = Z),
    (Ju.selection.enter.prototype = mo),
    (mo.append = vo.append),
    (mo.empty = vo.empty),
    (mo.node = vo.node),
    (mo.call = vo.call),
    (mo.size = vo.size),
    (mo.select = function (n) {
      for (var t, e, r, i, u, o = [], a = -1, l = this.length; ++a < l; ) {
        (r = (i = this[a]).update),
          o.push((t = [])),
          (t.parentNode = i.parentNode);
        for (var c = -1, f = i.length; ++c < f; )
          (u = i[c])
            ? (t.push((r[c] = e = n.call(i.parentNode, u.__data__, c, a))),
              (e.__data__ = u.__data__))
            : t.push(null);
      }
      return E(o);
    }),
    (mo.insert = function (n, t) {
      return arguments.length < 2 && (t = V(this)), vo.insert.call(this, n, t);
    }),
    (Ju.select = function (t) {
      var e;
      return (
        "string" == typeof t
          ? ((e = [ho(t, Qu)]), (e.parentNode = Qu.documentElement))
          : ((e = [t]), (e.parentNode = n(t))),
        E([e])
      );
    }),
    (Ju.selectAll = function (n) {
      var t;
      return (
        "string" == typeof n
          ? ((t = Ku(po(n, Qu))), (t.parentNode = Qu.documentElement))
          : ((t = n), (t.parentNode = null)),
        E([t])
      );
    }),
    (vo.on = function (n, t, e) {
      var r = arguments.length;
      if (r < 3) {
        if ("string" != typeof n) {
          r < 2 && (t = !1);
          for (e in n) this.each(X(e, n[e], t));
          return this;
        }
        if (r < 2) return (r = this.node()["__on" + n]) && r._;
        e = !1;
      }
      return this.each(X(n, t, e));
    });
  var Mo = Ju.map({ mouseenter: "mouseover", mouseleave: "mouseout" });
  Qu &&
    Mo.forEach(function (n) {
      "on" + n in Qu && Mo.remove(n);
    });
  var xo,
    _o = 0;
  Ju.mouse = function (n) {
    return J(n, k());
  };
  var bo = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
  (Ju.touch = function (n, t, e) {
    if ((arguments.length < 3 && ((e = t), (t = k().changedTouches)), t))
      for (var r, i = 0, u = t.length; i < u; ++i)
        if ((r = t[i]).identifier === e) return J(n, r);
  }),
    (Ju.behavior.drag = function () {
      function n() {
        this.on("mousedown.drag", u).on("touchstart.drag", o);
      }
      function e(n, t, e, u, o) {
        return function () {
          function a() {
            var n,
              e,
              r = t(h, d);
            r &&
              ((n = r[0] - M[0]),
              (e = r[1] - M[1]),
              (g |= n | e),
              (M = r),
              p({
                type: "drag",
                x: r[0] + c[0],
                y: r[1] + c[1],
                dx: n,
                dy: e,
              }));
          }
          function l() {
            t(h, d) &&
              (y.on(u + v, null).on(o + v, null),
              m(g && Ju.event.target === s),
              p({ type: "dragend" }));
          }
          var c,
            f = this,
            s = Ju.event.target,
            h = f.parentNode,
            p = r.of(f, arguments),
            g = 0,
            d = n(),
            v = ".drag" + (null == d ? "" : "-" + d),
            y = Ju.select(e(s))
              .on(u + v, a)
              .on(o + v, l),
            m = W(s),
            M = t(h, d);
          i
            ? ((c = i.apply(f, arguments)), (c = [c.x - M[0], c.y - M[1]]))
            : (c = [0, 0]),
            p({ type: "dragstart" });
        };
      }
      var r = N(n, "drag", "dragstart", "dragend"),
        i = null,
        u = e(_, Ju.mouse, t, "mousemove", "mouseup"),
        o = e(G, Ju.touch, m, "touchmove", "touchend");
      return (
        (n.origin = function (t) {
          return arguments.length ? ((i = t), n) : i;
        }),
        Ju.rebind(n, r, "on")
      );
    }),
    (Ju.touches = function (n, t) {
      return (
        arguments.length < 2 && (t = k().touches),
        t
          ? Ku(t).map(function (t) {
              var e = J(n, t);
              return (e.identifier = t.identifier), e;
            })
          : []
      );
    });
  var wo = 1e-6,
    So = wo * wo,
    ko = Math.PI,
    No = 2 * ko,
    Eo = No - wo,
    Ao = ko / 2,
    Co = ko / 180,
    zo = 180 / ko,
    qo = Math.SQRT2,
    Lo = 2,
    To = 4;
  (Ju.interpolateZoom = function (n, t) {
    function e(n) {
      var t = n * m;
      if (y) {
        var e = rn(d),
          o = (u / (Lo * h)) * (e * un(qo * t + d) - en(d));
        return [r + o * c, i + o * f, (u * e) / rn(qo * t + d)];
      }
      return [r + n * c, i + n * f, u * Math.exp(qo * t)];
    }
    var r = n[0],
      i = n[1],
      u = n[2],
      o = t[0],
      a = t[1],
      l = t[2],
      c = o - r,
      f = a - i,
      s = c * c + f * f,
      h = Math.sqrt(s),
      p = (l * l - u * u + To * s) / (2 * u * Lo * h),
      g = (l * l - u * u - To * s) / (2 * l * Lo * h),
      d = Math.log(Math.sqrt(p * p + 1) - p),
      v = Math.log(Math.sqrt(g * g + 1) - g),
      y = v - d,
      m = (y || Math.log(l / u)) / qo;
    return (e.duration = 1e3 * m), e;
  }),
    (Ju.behavior.zoom = function () {
      function n(n) {
        n.on(q, s)
          .on(Do + ".zoom", p)
          .on("dblclick.zoom", g)
          .on(R, h);
      }
      function e(n) {
        return [(n[0] - k.x) / k.k, (n[1] - k.y) / k.k];
      }
      function r(n) {
        return [n[0] * k.k + k.x, n[1] * k.k + k.y];
      }
      function i(n) {
        k.k = Math.max(A[0], Math.min(A[1], n));
      }
      function u(n, t) {
        (t = r(t)), (k.x += n[0] - t[0]), (k.y += n[1] - t[1]);
      }
      function o(t, e, r, o) {
        (t.__chart__ = { x: k.x, y: k.y, k: k.k }),
          i(Math.pow(2, o)),
          u((v = e), r),
          (t = Ju.select(t)),
          C > 0 && (t = t.transition().duration(C)),
          t.call(n.event);
      }
      function a() {
        _ &&
          _.domain(
            x
              .range()
              .map(function (n) {
                return (n - k.x) / k.k;
              })
              .map(x.invert)
          ),
          w &&
            w.domain(
              b
                .range()
                .map(function (n) {
                  return (n - k.y) / k.k;
                })
                .map(b.invert)
            );
      }
      function l(n) {
        z++ || n({ type: "zoomstart" });
      }
      function c(n) {
        a(), n({ type: "zoom", scale: k.k, translate: [k.x, k.y] });
      }
      function f(n) {
        --z || (n({ type: "zoomend" }), (v = null));
      }
      function s() {
        function n() {
          (s = 1), u(Ju.mouse(i), p), c(a);
        }
        function r() {
          h.on(L, null).on(T, null), g(s && Ju.event.target === o), f(a);
        }
        var i = this,
          o = Ju.event.target,
          a = D.of(i, arguments),
          s = 0,
          h = Ju.select(t(i)).on(L, n).on(T, r),
          p = e(Ju.mouse(i)),
          g = W(i);
        Cl.call(i), l(a);
      }
      function h() {
        function n() {
          var n = Ju.touches(g);
          return (
            (p = k.k),
            n.forEach(function (n) {
              n.identifier in v && (v[n.identifier] = e(n));
            }),
            n
          );
        }
        function t() {
          var t = Ju.event.target;
          Ju.select(t).on(x, r).on(_, a), b.push(t);
          for (var e = Ju.event.changedTouches, i = 0, u = e.length; i < u; ++i)
            v[e[i].identifier] = null;
          var l = n(),
            c = Date.now();
          if (1 === l.length) {
            if (c - M < 500) {
              var f = l[0];
              o(
                g,
                f,
                v[f.identifier],
                Math.floor(Math.log(k.k) / Math.LN2) + 1
              ),
                S();
            }
            M = c;
          } else if (l.length > 1) {
            var f = l[0],
              s = l[1],
              h = f[0] - s[0],
              p = f[1] - s[1];
            y = h * h + p * p;
          }
        }
        function r() {
          var n,
            t,
            e,
            r,
            o = Ju.touches(g);
          Cl.call(g);
          for (var a = 0, l = o.length; a < l; ++a, r = null)
            if (((e = o[a]), (r = v[e.identifier]))) {
              if (t) break;
              (n = e), (t = r);
            }
          if (r) {
            var f = (f = e[0] - n[0]) * f + (f = e[1] - n[1]) * f,
              s = y && Math.sqrt(f / y);
            (n = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2]),
              (t = [(t[0] + r[0]) / 2, (t[1] + r[1]) / 2]),
              i(s * p);
          }
          (M = null), u(n, t), c(d);
        }
        function a() {
          if (Ju.event.touches.length) {
            for (
              var t = Ju.event.changedTouches, e = 0, r = t.length;
              e < r;
              ++e
            )
              delete v[t[e].identifier];
            for (var i in v) return void n();
          }
          Ju.selectAll(b).on(m, null), w.on(q, s).on(R, h), N(), f(d);
        }
        var p,
          g = this,
          d = D.of(g, arguments),
          v = {},
          y = 0,
          m = ".zoom-" + Ju.event.changedTouches[0].identifier,
          x = "touchmove" + m,
          _ = "touchend" + m,
          b = [],
          w = Ju.select(g),
          N = W(g);
        t(), l(d), w.on(q, null).on(R, t);
      }
      function p() {
        var n = D.of(this, arguments);
        m
          ? clearTimeout(m)
          : (Cl.call(this), (d = e((v = y || Ju.mouse(this)))), l(n)),
          (m = setTimeout(function () {
            (m = null), f(n);
          }, 50)),
          S(),
          i(Math.pow(2, 0.002 * Ro()) * k.k),
          u(v, d),
          c(n);
      }
      function g() {
        var n = Ju.mouse(this),
          t = Math.log(k.k) / Math.LN2;
        o(
          this,
          n,
          e(n),
          Ju.event.shiftKey ? Math.ceil(t) - 1 : Math.floor(t) + 1
        );
      }
      var d,
        v,
        y,
        m,
        M,
        x,
        _,
        b,
        w,
        k = { x: 0, y: 0, k: 1 },
        E = [960, 500],
        A = Po,
        C = 250,
        z = 0,
        q = "mousedown.zoom",
        L = "mousemove.zoom",
        T = "mouseup.zoom",
        R = "touchstart.zoom",
        D = N(n, "zoomstart", "zoom", "zoomend");
      return (
        Do ||
          (Do =
            "onwheel" in Qu
              ? ((Ro = function () {
                  return -Ju.event.deltaY * (Ju.event.deltaMode ? 120 : 1);
                }),
                "wheel")
              : "onmousewheel" in Qu
              ? ((Ro = function () {
                  return Ju.event.wheelDelta;
                }),
                "mousewheel")
              : ((Ro = function () {
                  return -Ju.event.detail;
                }),
                "MozMousePixelScroll")),
        (n.event = function (n) {
          n.each(function () {
            var n = D.of(this, arguments),
              t = k;
            El
              ? Ju.select(this)
                  .transition()
                  .each("start.zoom", function () {
                    (k = this.__chart__ || { x: 0, y: 0, k: 1 }), l(n);
                  })
                  .tween("zoom:zoom", function () {
                    var e = E[0],
                      r = E[1],
                      i = v ? v[0] : e / 2,
                      u = v ? v[1] : r / 2,
                      o = Ju.interpolateZoom(
                        [(i - k.x) / k.k, (u - k.y) / k.k, e / k.k],
                        [(i - t.x) / t.k, (u - t.y) / t.k, e / t.k]
                      );
                    return function (t) {
                      var r = o(t),
                        a = e / r[2];
                      (this.__chart__ = k =
                        { x: i - r[0] * a, y: u - r[1] * a, k: a }),
                        c(n);
                    };
                  })
                  .each("interrupt.zoom", function () {
                    f(n);
                  })
                  .each("end.zoom", function () {
                    f(n);
                  })
              : ((this.__chart__ = k), l(n), c(n), f(n));
          });
        }),
        (n.translate = function (t) {
          return arguments.length
            ? ((k = { x: +t[0], y: +t[1], k: k.k }), a(), n)
            : [k.x, k.y];
        }),
        (n.scale = function (t) {
          return arguments.length
            ? ((k = { x: k.x, y: k.y, k: +t }), a(), n)
            : k.k;
        }),
        (n.scaleExtent = function (t) {
          return arguments.length
            ? ((A = null == t ? Po : [+t[0], +t[1]]), n)
            : A;
        }),
        (n.center = function (t) {
          return arguments.length ? ((y = t && [+t[0], +t[1]]), n) : y;
        }),
        (n.size = function (t) {
          return arguments.length ? ((E = t && [+t[0], +t[1]]), n) : E;
        }),
        (n.duration = function (t) {
          return arguments.length ? ((C = +t), n) : C;
        }),
        (n.x = function (t) {
          return arguments.length
            ? ((_ = t), (x = t.copy()), (k = { x: 0, y: 0, k: 1 }), n)
            : _;
        }),
        (n.y = function (t) {
          return arguments.length
            ? ((w = t), (b = t.copy()), (k = { x: 0, y: 0, k: 1 }), n)
            : w;
        }),
        Ju.rebind(n, D, "on")
      );
    });
  var Ro,
    Do,
    Po = [0, 1 / 0];
  (Ju.color = an),
    (an.prototype.toString = function () {
      return this.rgb() + "";
    }),
    (Ju.hsl = ln);
  var jo = (ln.prototype = new an());
  (jo.brighter = function (n) {
    return (
      (n = Math.pow(0.7, arguments.length ? n : 1)),
      new ln(this.h, this.s, this.l / n)
    );
  }),
    (jo.darker = function (n) {
      return (
        (n = Math.pow(0.7, arguments.length ? n : 1)),
        new ln(this.h, this.s, n * this.l)
      );
    }),
    (jo.rgb = function () {
      return cn(this.h, this.s, this.l);
    }),
    (Ju.hcl = fn);
  var Uo = (fn.prototype = new an());
  (Uo.brighter = function (n) {
    return new fn(
      this.h,
      this.c,
      Math.min(100, this.l + Fo * (arguments.length ? n : 1))
    );
  }),
    (Uo.darker = function (n) {
      return new fn(
        this.h,
        this.c,
        Math.max(0, this.l - Fo * (arguments.length ? n : 1))
      );
    }),
    (Uo.rgb = function () {
      return sn(this.h, this.c, this.l).rgb();
    }),
    (Ju.lab = hn);
  var Fo = 18,
    Ho = 0.95047,
    Oo = 1,
    Yo = 1.08883,
    Io = (hn.prototype = new an());
  (Io.brighter = function (n) {
    return new hn(
      Math.min(100, this.l + Fo * (arguments.length ? n : 1)),
      this.a,
      this.b
    );
  }),
    (Io.darker = function (n) {
      return new hn(
        Math.max(0, this.l - Fo * (arguments.length ? n : 1)),
        this.a,
        this.b
      );
    }),
    (Io.rgb = function () {
      return pn(this.l, this.a, this.b);
    }),
    (Ju.rgb = mn);
  var Zo = (mn.prototype = new an());
  (Zo.brighter = function (n) {
    n = Math.pow(0.7, arguments.length ? n : 1);
    var t = this.r,
      e = this.g,
      r = this.b,
      i = 30;
    return t || e || r
      ? (t && t < i && (t = i),
        e && e < i && (e = i),
        r && r < i && (r = i),
        new mn(
          Math.min(255, t / n),
          Math.min(255, e / n),
          Math.min(255, r / n)
        ))
      : new mn(i, i, i);
  }),
    (Zo.darker = function (n) {
      return (
        (n = Math.pow(0.7, arguments.length ? n : 1)),
        new mn(n * this.r, n * this.g, n * this.b)
      );
    }),
    (Zo.hsl = function () {
      return wn(this.r, this.g, this.b);
    }),
    (Zo.toString = function () {
      return "#" + _n(this.r) + _n(this.g) + _n(this.b);
    });
  var Vo = Ju.map({
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  });
  Vo.forEach(function (n, t) {
    Vo.set(n, Mn(t));
  }),
    (Ju.functor = En),
    (Ju.xhr = An(m)),
    (Ju.dsv = function (n, t) {
      function e(n, e, u) {
        arguments.length < 3 && ((u = e), (e = null));
        var o = Cn(n, t, null == e ? r : i(e), u);
        return (
          (o.row = function (n) {
            return arguments.length
              ? o.response(null == (e = n) ? r : i(n))
              : e;
          }),
          o
        );
      }
      function r(n) {
        return e.parse(n.responseText);
      }
      function i(n) {
        return function (t) {
          return e.parse(t.responseText, n);
        };
      }
      function u(t) {
        return t.map(o).join(n);
      }
      function o(n) {
        return a.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n;
      }
      var a = new RegExp('["' + n + "\n]"),
        l = n.charCodeAt(0);
      return (
        (e.parse = function (n, t) {
          var r;
          return e.parseRows(n, function (n, e) {
            if (r) return r(n, e - 1);
            var i = new Function(
              "d",
              "return {" +
                n
                  .map(function (n, t) {
                    return JSON.stringify(n) + ": d[" + t + "]";
                  })
                  .join(",") +
                "}"
            );
            r = t
              ? function (n, e) {
                  return t(i(n), e);
                }
              : i;
          });
        }),
        (e.parseRows = function (n, t) {
          function e() {
            if (f >= c) return o;
            if (i) return (i = !1), u;
            var t = f;
            if (34 === n.charCodeAt(t)) {
              for (var e = t; e++ < c; )
                if (34 === n.charCodeAt(e)) {
                  if (34 !== n.charCodeAt(e + 1)) break;
                  ++e;
                }
              f = e + 2;
              var r = n.charCodeAt(e + 1);
              return (
                13 === r
                  ? ((i = !0), 10 === n.charCodeAt(e + 2) && ++f)
                  : 10 === r && (i = !0),
                n.slice(t + 1, e).replace(/""/g, '"')
              );
            }
            for (; f < c; ) {
              var r = n.charCodeAt(f++),
                a = 1;
              if (10 === r) i = !0;
              else if (13 === r) (i = !0), 10 === n.charCodeAt(f) && (++f, ++a);
              else if (r !== l) continue;
              return n.slice(t, f - a);
            }
            return n.slice(t);
          }
          for (
            var r, i, u = {}, o = {}, a = [], c = n.length, f = 0, s = 0;
            (r = e()) !== o;

          ) {
            for (var h = []; r !== u && r !== o; ) h.push(r), (r = e());
            (t && null == (h = t(h, s++))) || a.push(h);
          }
          return a;
        }),
        (e.format = function (t) {
          if (Array.isArray(t[0])) return e.formatRows(t);
          var r = new y(),
            i = [];
          return (
            t.forEach(function (n) {
              for (var t in n) r.has(t) || i.push(r.add(t));
            }),
            [i.map(o).join(n)]
              .concat(
                t.map(function (t) {
                  return i
                    .map(function (n) {
                      return o(t[n]);
                    })
                    .join(n);
                })
              )
              .join("\n")
          );
        }),
        (e.formatRows = function (n) {
          return n.map(u).join("\n");
        }),
        e
      );
    }),
    (Ju.csv = Ju.dsv(",", "text/csv")),
    (Ju.tsv = Ju.dsv("\t", "text/tab-separated-values"));
  var Xo,
    $o,
    Bo,
    Wo,
    Jo,
    Go =
      this[x(this, "requestAnimationFrame")] ||
      function (n) {
        setTimeout(n, 17);
      };
  (Ju.timer = function (n, t, e) {
    var r = arguments.length;
    r < 2 && (t = 0), r < 3 && (e = Date.now());
    var i = e + t,
      u = { c: n, t: i, f: !1, n: null };
    $o ? ($o.n = u) : (Xo = u),
      ($o = u),
      Bo || ((Wo = clearTimeout(Wo)), (Bo = 1), Go(Ln));
  }),
    (Ju.timer.flush = function () {
      Tn(), Rn();
    }),
    (Ju.round = function (n, t) {
      return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n);
    });
  var Ko = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ].map(Pn);
  Ju.formatPrefix = function (n, t) {
    var e = 0;
    return (
      n &&
        (n < 0 && (n *= -1),
        t && (n = Ju.round(n, Dn(n, t))),
        (e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10)),
        (e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3))))),
      Ko[8 + e / 3]
    );
  };
  var Qo =
      /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
    na = Ju.map({
      b: function (n) {
        return n.toString(2);
      },
      c: function (n) {
        return String.fromCharCode(n);
      },
      o: function (n) {
        return n.toString(8);
      },
      x: function (n) {
        return n.toString(16);
      },
      X: function (n) {
        return n.toString(16).toUpperCase();
      },
      g: function (n, t) {
        return n.toPrecision(t);
      },
      e: function (n, t) {
        return n.toExponential(t);
      },
      f: function (n, t) {
        return n.toFixed(t);
      },
      r: function (n, t) {
        return (n = Ju.round(n, Dn(n, t))).toFixed(
          Math.max(0, Math.min(20, Dn(n * (1 + 1e-15), t)))
        );
      },
    }),
    ta = (Ju.time = {}),
    ea = Date;
  Fn.prototype = {
    getDate: function () {
      return this._.getUTCDate();
    },
    getDay: function () {
      return this._.getUTCDay();
    },
    getFullYear: function () {
      return this._.getUTCFullYear();
    },
    getHours: function () {
      return this._.getUTCHours();
    },
    getMilliseconds: function () {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function () {
      return this._.getUTCMinutes();
    },
    getMonth: function () {
      return this._.getUTCMonth();
    },
    getSeconds: function () {
      return this._.getUTCSeconds();
    },
    getTime: function () {
      return this._.getTime();
    },
    getTimezoneOffset: function () {
      return 0;
    },
    valueOf: function () {
      return this._.valueOf();
    },
    setDate: function () {
      ra.setUTCDate.apply(this._, arguments);
    },
    setDay: function () {
      ra.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function () {
      ra.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function () {
      ra.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function () {
      ra.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function () {
      ra.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function () {
      ra.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function () {
      ra.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function () {
      ra.setTime.apply(this._, arguments);
    },
  };
  var ra = Date.prototype;
  (ta.year = Hn(
    function (n) {
      return (n = ta.day(n)), n.setMonth(0, 1), n;
    },
    function (n, t) {
      n.setFullYear(n.getFullYear() + t);
    },
    function (n) {
      return n.getFullYear();
    }
  )),
    (ta.years = ta.year.range),
    (ta.years.utc = ta.year.utc.range),
    (ta.day = Hn(
      function (n) {
        var t = new ea(2e3, 0);
        return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t;
      },
      function (n, t) {
        n.setDate(n.getDate() + t);
      },
      function (n) {
        return n.getDate() - 1;
      }
    )),
    (ta.days = ta.day.range),
    (ta.days.utc = ta.day.utc.range),
    (ta.dayOfYear = function (n) {
      var t = ta.year(n);
      return Math.floor(
        (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5
      );
    }),
    [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ].forEach(function (n, t) {
      t = 7 - t;
      var e = (ta[n] = Hn(
        function (n) {
          return (
            (n = ta.day(n)).setDate(n.getDate() - ((n.getDay() + t) % 7)), n
          );
        },
        function (n, t) {
          n.setDate(n.getDate() + 7 * Math.floor(t));
        },
        function (n) {
          var e = ta.year(n).getDay();
          return Math.floor((ta.dayOfYear(n) + ((e + t) % 7)) / 7) - (e !== t);
        }
      ));
      (ta[n + "s"] = e.range),
        (ta[n + "s"].utc = e.utc.range),
        (ta[n + "OfYear"] = function (n) {
          var e = ta.year(n).getDay();
          return Math.floor((ta.dayOfYear(n) + ((e + t) % 7)) / 7);
        });
    }),
    (ta.week = ta.sunday),
    (ta.weeks = ta.sunday.range),
    (ta.weeks.utc = ta.sunday.utc.range),
    (ta.weekOfYear = ta.sundayOfYear);
  var ia = { "-": "", _: " ", 0: "0" },
    ua = /^\s*\d+/,
    oa = /^%/;
  Ju.locale = function (n) {
    return { numberFormat: jn(n), timeFormat: Yn(n) };
  };
  var aa = Ju.locale({
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["$", ""],
    dateTime: "%a %b %e %X %Y",
    date: "%m/%d/%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"],
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    shortMonths: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  });
  (Ju.format = aa.numberFormat),
    (Ju.geo = {}),
    (ct.prototype = {
      s: 0,
      t: 0,
      add: function (n) {
        ft(n, this.t, la),
          ft(la.s, this.s, this),
          this.s ? (this.t += la.t) : (this.s = la.t);
      },
      reset: function () {
        this.s = this.t = 0;
      },
      valueOf: function () {
        return this.s;
      },
    });
  var la = new ct();
  Ju.geo.stream = function (n, t) {
    n && ca.hasOwnProperty(n.type) ? ca[n.type](n, t) : st(n, t);
  };
  var ca = {
      Feature: function (n, t) {
        st(n.geometry, t);
      },
      FeatureCollection: function (n, t) {
        for (var e = n.features, r = -1, i = e.length; ++r < i; )
          st(e[r].geometry, t);
      },
    },
    fa = {
      Sphere: function (n, t) {
        t.sphere();
      },
      Point: function (n, t) {
        (n = n.coordinates), t.point(n[0], n[1], n[2]);
      },
      MultiPoint: function (n, t) {
        for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
          (n = e[r]), t.point(n[0], n[1], n[2]);
      },
      LineString: function (n, t) {
        ht(n.coordinates, t, 0);
      },
      MultiLineString: function (n, t) {
        for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
          ht(e[r], t, 0);
      },
      Polygon: function (n, t) {
        pt(n.coordinates, t);
      },
      MultiPolygon: function (n, t) {
        for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
          pt(e[r], t);
      },
      GeometryCollection: function (n, t) {
        for (var e = n.geometries, r = -1, i = e.length; ++r < i; ) st(e[r], t);
      },
    };
  Ju.geo.area = function (n) {
    return (sa = 0), Ju.geo.stream(n, pa), sa;
  };
  var sa,
    ha = new ct(),
    pa = {
      sphere: function () {
        sa += 4 * ko;
      },
      point: _,
      lineStart: _,
      lineEnd: _,
      polygonStart: function () {
        ha.reset(), (pa.lineStart = gt);
      },
      polygonEnd: function () {
        var n = 2 * ha;
        (sa += n < 0 ? 4 * ko + n : n),
          (pa.lineStart = pa.lineEnd = pa.point = _);
      },
    };
  (Ju.geo.bounds = (function () {
    function n(n, t) {
      M.push((x = [(f = n), (h = n)])), t < s && (s = t), t > p && (p = t);
    }
    function t(t, e) {
      var r = dt([t * Co, e * Co]);
      if (y) {
        var i = yt(y, r),
          u = [i[1], -i[0], 0],
          o = yt(u, i);
        xt(o), (o = _t(o));
        var l = t - g,
          c = l > 0 ? 1 : -1,
          d = o[0] * zo * c,
          v = oo(l) > 180;
        if (v ^ (c * g < d && d < c * t)) {
          var m = o[1] * zo;
          m > p && (p = m);
        } else if (
          ((d = ((d + 360) % 360) - 180), v ^ (c * g < d && d < c * t))
        ) {
          var m = -o[1] * zo;
          m < s && (s = m);
        } else e < s && (s = e), e > p && (p = e);
        v
          ? t < g
            ? a(f, t) > a(f, h) && (h = t)
            : a(t, h) > a(f, h) && (f = t)
          : h >= f
          ? (t < f && (f = t), t > h && (h = t))
          : t > g
          ? a(f, t) > a(f, h) && (h = t)
          : a(t, h) > a(f, h) && (f = t);
      } else n(t, e);
      (y = r), (g = t);
    }
    function e() {
      _.point = t;
    }
    function r() {
      (x[0] = f), (x[1] = h), (_.point = n), (y = null);
    }
    function i(n, e) {
      if (y) {
        var r = n - g;
        m += oo(r) > 180 ? r + (r > 0 ? 360 : -360) : r;
      } else (d = n), (v = e);
      pa.point(n, e), t(n, e);
    }
    function u() {
      pa.lineStart();
    }
    function o() {
      i(d, v),
        pa.lineEnd(),
        oo(m) > wo && (f = -(h = 180)),
        (x[0] = f),
        (x[1] = h),
        (y = null);
    }
    function a(n, t) {
      return (t -= n) < 0 ? t + 360 : t;
    }
    function l(n, t) {
      return n[0] - t[0];
    }
    function c(n, t) {
      return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
    }
    var f,
      s,
      h,
      p,
      g,
      d,
      v,
      y,
      m,
      M,
      x,
      _ = {
        point: n,
        lineStart: e,
        lineEnd: r,
        polygonStart: function () {
          (_.point = i),
            (_.lineStart = u),
            (_.lineEnd = o),
            (m = 0),
            pa.polygonStart();
        },
        polygonEnd: function () {
          pa.polygonEnd(),
            (_.point = n),
            (_.lineStart = e),
            (_.lineEnd = r),
            ha < 0
              ? ((f = -(h = 180)), (s = -(p = 90)))
              : m > wo
              ? (p = 90)
              : m < -wo && (s = -90),
            (x[0] = f),
            (x[1] = h);
        },
      };
    return function (n) {
      (p = h = -(f = s = 1 / 0)), (M = []), Ju.geo.stream(n, _);
      var t = M.length;
      if (t) {
        M.sort(l);
        for (var e, r = 1, i = M[0], u = [i]; r < t; ++r)
          (e = M[r]),
            c(e[0], i) || c(e[1], i)
              ? (a(i[0], e[1]) > a(i[0], i[1]) && (i[1] = e[1]),
                a(e[0], i[1]) > a(i[0], i[1]) && (i[0] = e[0]))
              : u.push((i = e));
        for (
          var o, e, g = -(1 / 0), t = u.length - 1, r = 0, i = u[t];
          r <= t;
          i = e, ++r
        )
          (e = u[r]),
            (o = a(i[1], e[0])) > g && ((g = o), (f = e[0]), (h = i[1]));
      }
      return (
        (M = x = null),
        f === 1 / 0 || s === 1 / 0
          ? [
              [NaN, NaN],
              [NaN, NaN],
            ]
          : [
              [f, s],
              [h, p],
            ]
      );
    };
  })()),
    (Ju.geo.centroid = function (n) {
      (ga = da = va = ya = ma = Ma = xa = _a = ba = wa = Sa = 0),
        Ju.geo.stream(n, ka);
      var t = ba,
        e = wa,
        r = Sa,
        i = t * t + e * e + r * r;
      return i < So &&
        ((t = Ma),
        (e = xa),
        (r = _a),
        da < wo && ((t = va), (e = ya), (r = ma)),
        (i = t * t + e * e + r * r),
        i < So)
        ? [NaN, NaN]
        : [Math.atan2(e, t) * zo, tn(r / Math.sqrt(i)) * zo];
    });
  var ga,
    da,
    va,
    ya,
    ma,
    Ma,
    xa,
    _a,
    ba,
    wa,
    Sa,
    ka = {
      sphere: _,
      point: wt,
      lineStart: kt,
      lineEnd: Nt,
      polygonStart: function () {
        ka.lineStart = Et;
      },
      polygonEnd: function () {
        ka.lineStart = kt;
      },
    },
    Na = Tt(Ct, jt, Ft, [-ko, -ko / 2]),
    Ea = 1e9;
  (Ju.geo.clipExtent = function () {
    var n,
      t,
      e,
      r,
      i,
      u,
      o = {
        stream: function (n) {
          return i && (i.valid = !1), (i = u(n)), (i.valid = !0), i;
        },
        extent: function (a) {
          return arguments.length
            ? ((u = It(
                (n = +a[0][0]),
                (t = +a[0][1]),
                (e = +a[1][0]),
                (r = +a[1][1])
              )),
              i && ((i.valid = !1), (i = null)),
              o)
            : [
                [n, t],
                [e, r],
              ];
        },
      };
    return o.extent([
      [0, 0],
      [960, 500],
    ]);
  }),
    ((Ju.geo.conicEqualArea = function () {
      return Zt(Vt);
    }).raw = Vt),
    (Ju.geo.albers = function () {
      return Ju.geo
        .conicEqualArea()
        .rotate([96, 0])
        .center([-0.6, 38.7])
        .parallels([29.5, 45.5])
        .scale(1070);
    }),
    (Ju.geo.albersUsa = function () {
      function n(n) {
        var u = n[0],
          o = n[1];
        return (t = null), e(u, o), t || (r(u, o), t) || i(u, o), t;
      }
      var t,
        e,
        r,
        i,
        u = Ju.geo.albers(),
        o = Ju.geo
          .conicEqualArea()
          .rotate([154, 0])
          .center([-2, 58.5])
          .parallels([55, 65]),
        a = Ju.geo
          .conicEqualArea()
          .rotate([157, 0])
          .center([-3, 19.9])
          .parallels([8, 18]),
        l = {
          point: function (n, e) {
            t = [n, e];
          },
        };
      return (
        (n.invert = function (n) {
          var t = u.scale(),
            e = u.translate(),
            r = (n[0] - e[0]) / t,
            i = (n[1] - e[1]) / t;
          return (
            i >= 0.12 && i < 0.234 && r >= -0.425 && r < -0.214
              ? o
              : i >= 0.166 && i < 0.234 && r >= -0.214 && r < -0.115
              ? a
              : u
          ).invert(n);
        }),
        (n.stream = function (n) {
          var t = u.stream(n),
            e = o.stream(n),
            r = a.stream(n);
          return {
            point: function (n, i) {
              t.point(n, i), e.point(n, i), r.point(n, i);
            },
            sphere: function () {
              t.sphere(), e.sphere(), r.sphere();
            },
            lineStart: function () {
              t.lineStart(), e.lineStart(), r.lineStart();
            },
            lineEnd: function () {
              t.lineEnd(), e.lineEnd(), r.lineEnd();
            },
            polygonStart: function () {
              t.polygonStart(), e.polygonStart(), r.polygonStart();
            },
            polygonEnd: function () {
              t.polygonEnd(), e.polygonEnd(), r.polygonEnd();
            },
          };
        }),
        (n.precision = function (t) {
          return arguments.length
            ? (u.precision(t), o.precision(t), a.precision(t), n)
            : u.precision();
        }),
        (n.scale = function (t) {
          return arguments.length
            ? (u.scale(t),
              o.scale(0.35 * t),
              a.scale(t),
              n.translate(u.translate()))
            : u.scale();
        }),
        (n.translate = function (t) {
          if (!arguments.length) return u.translate();
          var c = u.scale(),
            f = +t[0],
            s = +t[1];
          return (
            (e = u
              .translate(t)
              .clipExtent([
                [f - 0.455 * c, s - 0.238 * c],
                [f + 0.455 * c, s + 0.238 * c],
              ])
              .stream(l).point),
            (r = o
              .translate([f - 0.307 * c, s + 0.201 * c])
              .clipExtent([
                [f - 0.425 * c + wo, s + 0.12 * c + wo],
                [f - 0.214 * c - wo, s + 0.234 * c - wo],
              ])
              .stream(l).point),
            (i = a
              .translate([f - 0.205 * c, s + 0.212 * c])
              .clipExtent([
                [f - 0.214 * c + wo, s + 0.166 * c + wo],
                [f - 0.115 * c - wo, s + 0.234 * c - wo],
              ])
              .stream(l).point),
            n
          );
        }),
        n.scale(1070)
      );
    });
  var Aa,
    Ca,
    za,
    qa,
    La,
    Ta,
    Ra = {
      point: _,
      lineStart: _,
      lineEnd: _,
      polygonStart: function () {
        (Ca = 0), (Ra.lineStart = Xt);
      },
      polygonEnd: function () {
        (Ra.lineStart = Ra.lineEnd = Ra.point = _), (Aa += oo(Ca / 2));
      },
    },
    Da = {
      point: $t,
      lineStart: _,
      lineEnd: _,
      polygonStart: _,
      polygonEnd: _,
    },
    Pa = {
      point: Jt,
      lineStart: Gt,
      lineEnd: Kt,
      polygonStart: function () {
        Pa.lineStart = Qt;
      },
      polygonEnd: function () {
        (Pa.point = Jt), (Pa.lineStart = Gt), (Pa.lineEnd = Kt);
      },
    };
  (Ju.geo.path = function () {
    function n(n) {
      return (
        n &&
          ("function" == typeof a && u.pointRadius(+a.apply(this, arguments)),
          (o && o.valid) || (o = i(u)),
          Ju.geo.stream(n, o)),
        u.result()
      );
    }
    function t() {
      return (o = null), n;
    }
    var e,
      r,
      i,
      u,
      o,
      a = 4.5;
    return (
      (n.area = function (n) {
        return (Aa = 0), Ju.geo.stream(n, i(Ra)), Aa;
      }),
      (n.centroid = function (n) {
        return (
          (va = ya = ma = Ma = xa = _a = ba = wa = Sa = 0),
          Ju.geo.stream(n, i(Pa)),
          Sa
            ? [ba / Sa, wa / Sa]
            : _a
            ? [Ma / _a, xa / _a]
            : ma
            ? [va / ma, ya / ma]
            : [NaN, NaN]
        );
      }),
      (n.bounds = function (n) {
        return (
          (La = Ta = -(za = qa = 1 / 0)),
          Ju.geo.stream(n, i(Da)),
          [
            [za, qa],
            [La, Ta],
          ]
        );
      }),
      (n.projection = function (n) {
        return arguments.length
          ? ((i = (e = n) ? n.stream || ee(n) : m), t())
          : e;
      }),
      (n.context = function (n) {
        return arguments.length
          ? ((u = null == (r = n) ? new Bt() : new ne(n)),
            "function" != typeof a && u.pointRadius(a),
            t())
          : r;
      }),
      (n.pointRadius = function (t) {
        return arguments.length
          ? ((a = "function" == typeof t ? t : (u.pointRadius(+t), +t)), n)
          : a;
      }),
      n.projection(Ju.geo.albersUsa()).context(null)
    );
  }),
    (Ju.geo.transform = function (n) {
      return {
        stream: function (t) {
          var e = new re(t);
          for (var r in n) e[r] = n[r];
          return e;
        },
      };
    }),
    (re.prototype = {
      point: function (n, t) {
        this.stream.point(n, t);
      },
      sphere: function () {
        this.stream.sphere();
      },
      lineStart: function () {
        this.stream.lineStart();
      },
      lineEnd: function () {
        this.stream.lineEnd();
      },
      polygonStart: function () {
        this.stream.polygonStart();
      },
      polygonEnd: function () {
        this.stream.polygonEnd();
      },
    }),
    (Ju.geo.projection = ue),
    (Ju.geo.projectionMutator = oe),
    ((Ju.geo.equirectangular = function () {
      return ue(le);
    }).raw = le.invert =
      le),
    (Ju.geo.rotation = function (n) {
      function t(t) {
        return (t = n(t[0] * Co, t[1] * Co)), (t[0] *= zo), (t[1] *= zo), t;
      }
      return (
        (n = fe((n[0] % 360) * Co, n[1] * Co, n.length > 2 ? n[2] * Co : 0)),
        (t.invert = function (t) {
          return (
            (t = n.invert(t[0] * Co, t[1] * Co)), (t[0] *= zo), (t[1] *= zo), t
          );
        }),
        t
      );
    }),
    (ce.invert = le),
    (Ju.geo.circle = function () {
      function n() {
        var n = "function" == typeof r ? r.apply(this, arguments) : r,
          t = fe(-n[0] * Co, -n[1] * Co, 0).invert,
          i = [];
        return (
          e(null, null, 1, {
            point: function (n, e) {
              i.push((n = t(n, e))), (n[0] *= zo), (n[1] *= zo);
            },
          }),
          { type: "Polygon", coordinates: [i] }
        );
      }
      var t,
        e,
        r = [0, 0],
        i = 6;
      return (
        (n.origin = function (t) {
          return arguments.length ? ((r = t), n) : r;
        }),
        (n.angle = function (r) {
          return arguments.length ? ((e = ge((t = +r) * Co, i * Co)), n) : t;
        }),
        (n.precision = function (r) {
          return arguments.length ? ((e = ge(t * Co, (i = +r) * Co)), n) : i;
        }),
        n.angle(90)
      );
    }),
    (Ju.geo.distance = function (n, t) {
      var e,
        r = (t[0] - n[0]) * Co,
        i = n[1] * Co,
        u = t[1] * Co,
        o = Math.sin(r),
        a = Math.cos(r),
        l = Math.sin(i),
        c = Math.cos(i),
        f = Math.sin(u),
        s = Math.cos(u);
      return Math.atan2(
        Math.sqrt((e = s * o) * e + (e = c * f - l * s * a) * e),
        l * f + c * s * a
      );
    }),
    (Ju.geo.graticule = function () {
      function n() {
        return { type: "MultiLineString", coordinates: t() };
      }
      function t() {
        return Ju.range(Math.ceil(u / v) * v, i, v)
          .map(h)
          .concat(Ju.range(Math.ceil(c / y) * y, l, y).map(p))
          .concat(
            Ju.range(Math.ceil(r / g) * g, e, g)
              .filter(function (n) {
                return oo(n % v) > wo;
              })
              .map(f)
          )
          .concat(
            Ju.range(Math.ceil(a / d) * d, o, d)
              .filter(function (n) {
                return oo(n % y) > wo;
              })
              .map(s)
          );
      }
      var e,
        r,
        i,
        u,
        o,
        a,
        l,
        c,
        f,
        s,
        h,
        p,
        g = 10,
        d = g,
        v = 90,
        y = 360,
        m = 2.5;
      return (
        (n.lines = function () {
          return t().map(function (n) {
            return { type: "LineString", coordinates: n };
          });
        }),
        (n.outline = function () {
          return {
            type: "Polygon",
            coordinates: [
              h(u).concat(
                p(l).slice(1),
                h(i).reverse().slice(1),
                p(c).reverse().slice(1)
              ),
            ],
          };
        }),
        (n.extent = function (t) {
          return arguments.length
            ? n.majorExtent(t).minorExtent(t)
            : n.minorExtent();
        }),
        (n.majorExtent = function (t) {
          return arguments.length
            ? ((u = +t[0][0]),
              (i = +t[1][0]),
              (c = +t[0][1]),
              (l = +t[1][1]),
              u > i && ((t = u), (u = i), (i = t)),
              c > l && ((t = c), (c = l), (l = t)),
              n.precision(m))
            : [
                [u, c],
                [i, l],
              ];
        }),
        (n.minorExtent = function (t) {
          return arguments.length
            ? ((r = +t[0][0]),
              (e = +t[1][0]),
              (a = +t[0][1]),
              (o = +t[1][1]),
              r > e && ((t = r), (r = e), (e = t)),
              a > o && ((t = a), (a = o), (o = t)),
              n.precision(m))
            : [
                [r, a],
                [e, o],
              ];
        }),
        (n.step = function (t) {
          return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep();
        }),
        (n.majorStep = function (t) {
          return arguments.length ? ((v = +t[0]), (y = +t[1]), n) : [v, y];
        }),
        (n.minorStep = function (t) {
          return arguments.length ? ((g = +t[0]), (d = +t[1]), n) : [g, d];
        }),
        (n.precision = function (t) {
          return arguments.length
            ? ((m = +t),
              (f = ve(a, o, 90)),
              (s = ye(r, e, m)),
              (h = ve(c, l, 90)),
              (p = ye(u, i, m)),
              n)
            : m;
        }),
        n
          .majorExtent([
            [-180, -90 + wo],
            [180, 90 - wo],
          ])
          .minorExtent([
            [-180, -80 - wo],
            [180, 80 + wo],
          ])
      );
    }),
    (Ju.geo.greatArc = function () {
      function n() {
        return {
          type: "LineString",
          coordinates: [
            t || r.apply(this, arguments),
            e || i.apply(this, arguments),
          ],
        };
      }
      var t,
        e,
        r = me,
        i = Me;
      return (
        (n.distance = function () {
          return Ju.geo.distance(
            t || r.apply(this, arguments),
            e || i.apply(this, arguments)
          );
        }),
        (n.source = function (e) {
          return arguments.length
            ? ((r = e), (t = "function" == typeof e ? null : e), n)
            : r;
        }),
        (n.target = function (t) {
          return arguments.length
            ? ((i = t), (e = "function" == typeof t ? null : t), n)
            : i;
        }),
        (n.precision = function () {
          return arguments.length ? n : 0;
        }),
        n
      );
    }),
    (Ju.geo.interpolate = function (n, t) {
      return xe(n[0] * Co, n[1] * Co, t[0] * Co, t[1] * Co);
    }),
    (Ju.geo.length = function (n) {
      return (ja = 0), Ju.geo.stream(n, Ua), ja;
    });
  var ja,
    Ua = {
      sphere: _,
      point: _,
      lineStart: _e,
      lineEnd: _,
      polygonStart: _,
      polygonEnd: _,
    },
    Fa = be(
      function (n) {
        return Math.sqrt(2 / (1 + n));
      },
      function (n) {
        return 2 * Math.asin(n / 2);
      }
    );
  (Ju.geo.azimuthalEqualArea = function () {
    return ue(Fa);
  }).raw = Fa;
  var Ha = be(function (n) {
    var t = Math.acos(n);
    return t && t / Math.sin(t);
  }, m);
  ((Ju.geo.azimuthalEquidistant = function () {
    return ue(Ha);
  }).raw = Ha),
    ((Ju.geo.conicConformal = function () {
      return Zt(we);
    }).raw = we),
    ((Ju.geo.conicEquidistant = function () {
      return Zt(Se);
    }).raw = Se);
  var Oa = be(function (n) {
    return 1 / n;
  }, Math.atan);
  ((Ju.geo.gnomonic = function () {
    return ue(Oa);
  }).raw = Oa),
    (ke.invert = function (n, t) {
      return [n, 2 * Math.atan(Math.exp(t)) - Ao];
    }),
    ((Ju.geo.mercator = function () {
      return Ne(ke);
    }).raw = ke);
  var Ya = be(function () {
    return 1;
  }, Math.asin);
  (Ju.geo.orthographic = function () {
    return ue(Ya);
  }).raw = Ya;
  var Ia = be(
    function (n) {
      return 1 / (1 + n);
    },
    function (n) {
      return 2 * Math.atan(n);
    }
  );
  ((Ju.geo.stereographic = function () {
    return ue(Ia);
  }).raw = Ia),
    (Ee.invert = function (n, t) {
      return [-t, 2 * Math.atan(Math.exp(n)) - Ao];
    }),
    ((Ju.geo.transverseMercator = function () {
      var n = Ne(Ee),
        t = n.center,
        e = n.rotate;
      return (
        (n.center = function (n) {
          return n ? t([-n[1], n[0]]) : ((n = t()), [n[1], -n[0]]);
        }),
        (n.rotate = function (n) {
          return n
            ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90])
            : ((n = e()), [n[0], n[1], n[2] - 90]);
        }),
        e([0, 0, 90])
      );
    }).raw = Ee),
    (Ju.geom = {}),
    (Ju.geom.hull = function (n) {
      function t(n) {
        if (n.length < 3) return [];
        var t,
          i = En(e),
          u = En(r),
          o = n.length,
          a = [],
          l = [];
        for (t = 0; t < o; t++)
          a.push([+i.call(this, n[t], t), +u.call(this, n[t], t), t]);
        for (a.sort(qe), t = 0; t < o; t++) l.push([a[t][0], -a[t][1]]);
        var c = ze(a),
          f = ze(l),
          s = f[0] === c[0],
          h = f[f.length - 1] === c[c.length - 1],
          p = [];
        for (t = c.length - 1; t >= 0; --t) p.push(n[a[c[t]][2]]);
        for (t = +s; t < f.length - h; ++t) p.push(n[a[f[t]][2]]);
        return p;
      }
      var e = Ae,
        r = Ce;
      return arguments.length
        ? t(n)
        : ((t.x = function (n) {
            return arguments.length ? ((e = n), t) : e;
          }),
          (t.y = function (n) {
            return arguments.length ? ((r = n), t) : r;
          }),
          t);
    }),
    (Ju.geom.polygon = function (n) {
      return so(n, Za), n;
    });
  var Za = (Ju.geom.polygon.prototype = []);
  (Za.area = function () {
    for (var n, t = -1, e = this.length, r = this[e - 1], i = 0; ++t < e; )
      (n = r), (r = this[t]), (i += n[1] * r[0] - n[0] * r[1]);
    return 0.5 * i;
  }),
    (Za.centroid = function (n) {
      var t,
        e,
        r = -1,
        i = this.length,
        u = 0,
        o = 0,
        a = this[i - 1];
      for (arguments.length || (n = -1 / (6 * this.area())); ++r < i; )
        (t = a),
          (a = this[r]),
          (e = t[0] * a[1] - a[0] * t[1]),
          (u += (t[0] + a[0]) * e),
          (o += (t[1] + a[1]) * e);
      return [u * n, o * n];
    }),
    (Za.clip = function (n) {
      for (
        var t,
          e,
          r,
          i,
          u,
          o,
          a = Re(n),
          l = -1,
          c = this.length - Re(this),
          f = this[c - 1];
        ++l < c;

      ) {
        for (
          t = n.slice(),
            n.length = 0,
            i = this[l],
            u = t[(r = t.length - a) - 1],
            e = -1;
          ++e < r;

        )
          (o = t[e]),
            Le(o, f, i)
              ? (Le(u, f, i) || n.push(Te(u, o, f, i)), n.push(o))
              : Le(u, f, i) && n.push(Te(u, o, f, i)),
            (u = o);
        a && n.push(n[0]), (f = i);
      }
      return n;
    });
  var Va,
    Xa,
    $a,
    Ba,
    Wa,
    Ja = [],
    Ga = [];
  (Ye.prototype.prepare = function () {
    for (var n, t = this.edges, e = t.length; e--; )
      (n = t[e].edge), (n.b && n.a) || t.splice(e, 1);
    return t.sort(Ze), t.length;
  }),
    (nr.prototype = {
      start: function () {
        return this.edge.l === this.site ? this.edge.a : this.edge.b;
      },
      end: function () {
        return this.edge.l === this.site ? this.edge.b : this.edge.a;
      },
    }),
    (tr.prototype = {
      insert: function (n, t) {
        var e, r, i;
        if (n) {
          if (((t.P = n), (t.N = n.N), n.N && (n.N.P = t), (n.N = t), n.R)) {
            for (n = n.R; n.L; ) n = n.L;
            n.L = t;
          } else n.R = t;
          e = n;
        } else
          this._
            ? ((n = ur(this._)),
              (t.P = null),
              (t.N = n),
              (n.P = n.L = t),
              (e = n))
            : ((t.P = t.N = null), (this._ = t), (e = null));
        for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C; )
          (r = e.U),
            e === r.L
              ? ((i = r.R),
                i && i.C
                  ? ((e.C = i.C = !1), (r.C = !0), (n = r))
                  : (n === e.R && (rr(this, e), (n = e), (e = n.U)),
                    (e.C = !1),
                    (r.C = !0),
                    ir(this, r)))
              : ((i = r.L),
                i && i.C
                  ? ((e.C = i.C = !1), (r.C = !0), (n = r))
                  : (n === e.L && (ir(this, e), (n = e), (e = n.U)),
                    (e.C = !1),
                    (r.C = !0),
                    rr(this, r))),
            (e = n.U);
        this._.C = !1;
      },
      remove: function (n) {
        n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), (n.N = n.P = null);
        var t,
          e,
          r,
          i = n.U,
          u = n.L,
          o = n.R;
        if (
          ((e = u ? (o ? ur(o) : u) : o),
          i ? (i.L === n ? (i.L = e) : (i.R = e)) : (this._ = e),
          u && o
            ? ((r = e.C),
              (e.C = n.C),
              (e.L = u),
              (u.U = e),
              e !== o
                ? ((i = e.U),
                  (e.U = n.U),
                  (n = e.R),
                  (i.L = n),
                  (e.R = o),
                  (o.U = e))
                : ((e.U = i), (i = e), (n = e.R)))
            : ((r = n.C), (n = e)),
          n && (n.U = i),
          !r)
        ) {
          if (n && n.C) return void (n.C = !1);
          do {
            if (n === this._) break;
            if (n === i.L) {
              if (
                ((t = i.R),
                t.C && ((t.C = !1), (i.C = !0), rr(this, i), (t = i.R)),
                (t.L && t.L.C) || (t.R && t.R.C))
              ) {
                (t.R && t.R.C) ||
                  ((t.L.C = !1), (t.C = !0), ir(this, t), (t = i.R)),
                  (t.C = i.C),
                  (i.C = t.R.C = !1),
                  rr(this, i),
                  (n = this._);
                break;
              }
            } else if (
              ((t = i.L),
              t.C && ((t.C = !1), (i.C = !0), ir(this, i), (t = i.L)),
              (t.L && t.L.C) || (t.R && t.R.C))
            ) {
              (t.L && t.L.C) ||
                ((t.R.C = !1), (t.C = !0), rr(this, t), (t = i.L)),
                (t.C = i.C),
                (i.C = t.L.C = !1),
                ir(this, i),
                (n = this._);
              break;
            }
            (t.C = !0), (n = i), (i = i.U);
          } while (!n.C);
          n && (n.C = !1);
        }
      },
    }),
    (Ju.geom.voronoi = function (n) {
      function t(n) {
        var t = new Array(n.length),
          r = a[0][0],
          i = a[0][1],
          u = a[1][0],
          o = a[1][1];
        return (
          or(e(n), a).cells.forEach(function (e, a) {
            var l = e.edges,
              c = e.site,
              f = (t[a] = l.length
                ? l.map(function (n) {
                    var t = n.start();
                    return [t.x, t.y];
                  })
                : c.x >= r && c.x <= u && c.y >= i && c.y <= o
                ? [
                    [r, o],
                    [u, o],
                    [u, i],
                    [r, i],
                  ]
                : []);
            f.point = n[a];
          }),
          t
        );
      }
      function e(n) {
        return n.map(function (n, t) {
          return {
            x: Math.round(u(n, t) / wo) * wo,
            y: Math.round(o(n, t) / wo) * wo,
            i: t,
          };
        });
      }
      var r = Ae,
        i = Ce,
        u = r,
        o = i,
        a = Ka;
      return n
        ? t(n)
        : ((t.links = function (n) {
            return or(e(n))
              .edges.filter(function (n) {
                return n.l && n.r;
              })
              .map(function (t) {
                return { source: n[t.l.i], target: n[t.r.i] };
              });
          }),
          (t.triangles = function (n) {
            var t = [];
            return (
              or(e(n)).cells.forEach(function (e, r) {
                for (
                  var i,
                    u,
                    o = e.site,
                    a = e.edges.sort(Ze),
                    l = -1,
                    c = a.length,
                    f = a[c - 1].edge,
                    s = f.l === o ? f.r : f.l;
                  ++l < c;

                )
                  (i = f),
                    (u = s),
                    (f = a[l].edge),
                    (s = f.l === o ? f.r : f.l),
                    r < u.i &&
                      r < s.i &&
                      lr(o, u, s) < 0 &&
                      t.push([n[r], n[u.i], n[s.i]]);
              }),
              t
            );
          }),
          (t.x = function (n) {
            return arguments.length ? ((u = En((r = n))), t) : r;
          }),
          (t.y = function (n) {
            return arguments.length ? ((o = En((i = n))), t) : i;
          }),
          (t.clipExtent = function (n) {
            return arguments.length
              ? ((a = null == n ? Ka : n), t)
              : a === Ka
              ? null
              : a;
          }),
          (t.size = function (n) {
            return arguments.length
              ? t.clipExtent(n && [[0, 0], n])
              : a === Ka
              ? null
              : a && a[1];
          }),
          t);
    });
  var Ka = [
    [-1e6, -1e6],
    [1e6, 1e6],
  ];
  (Ju.geom.delaunay = function (n) {
    return Ju.geom.voronoi().triangles(n);
  }),
    (Ju.geom.quadtree = function (n, t, e, r, i) {
      function u(n) {
        function u(n, t, e, r, i, u, o, a) {
          if (!isNaN(e) && !isNaN(r))
            if (n.leaf) {
              var l = n.x,
                f = n.y;
              if (null != l)
                if (oo(l - e) + oo(f - r) < 0.01) c(n, t, e, r, i, u, o, a);
                else {
                  var s = n.point;
                  (n.x = n.y = n.point = null),
                    c(n, s, l, f, i, u, o, a),
                    c(n, t, e, r, i, u, o, a);
                }
              else (n.x = e), (n.y = r), (n.point = t);
            } else c(n, t, e, r, i, u, o, a);
        }
        function c(n, t, e, r, i, o, a, l) {
          var c = 0.5 * (i + a),
            f = 0.5 * (o + l),
            s = e >= c,
            h = r >= f,
            p = (h << 1) | s;
          (n.leaf = !1),
            (n = n.nodes[p] || (n.nodes[p] = sr())),
            s ? (i = c) : (a = c),
            h ? (o = f) : (l = f),
            u(n, t, e, r, i, o, a, l);
        }
        var f,
          s,
          h,
          p,
          g,
          d,
          v,
          y,
          m,
          M = En(a),
          x = En(l);
        if (null != t) (d = t), (v = e), (y = r), (m = i);
        else if (
          ((y = m = -(d = v = 1 / 0)), (s = []), (h = []), (g = n.length), o)
        )
          for (p = 0; p < g; ++p)
            (f = n[p]),
              f.x < d && (d = f.x),
              f.y < v && (v = f.y),
              f.x > y && (y = f.x),
              f.y > m && (m = f.y),
              s.push(f.x),
              h.push(f.y);
        else
          for (p = 0; p < g; ++p) {
            var _ = +M((f = n[p]), p),
              b = +x(f, p);
            _ < d && (d = _),
              b < v && (v = b),
              _ > y && (y = _),
              b > m && (m = b),
              s.push(_),
              h.push(b);
          }
        var w = y - d,
          S = m - v;
        w > S ? (m = v + w) : (y = d + S);
        var k = sr();
        if (
          ((k.add = function (n) {
            u(k, n, +M(n, ++p), +x(n, p), d, v, y, m);
          }),
          (k.visit = function (n) {
            hr(n, k, d, v, y, m);
          }),
          (k.find = function (n) {
            return pr(k, n[0], n[1], d, v, y, m);
          }),
          (p = -1),
          null == t)
        ) {
          for (; ++p < g; ) u(k, n[p], s[p], h[p], d, v, y, m);
          --p;
        } else n.forEach(k.add);
        return (s = h = n = f = null), k;
      }
      var o,
        a = Ae,
        l = Ce;
      return (o = arguments.length)
        ? ((a = cr), (l = fr), 3 === o && ((i = e), (r = t), (e = t = 0)), u(n))
        : ((u.x = function (n) {
            return arguments.length ? ((a = n), u) : a;
          }),
          (u.y = function (n) {
            return arguments.length ? ((l = n), u) : l;
          }),
          (u.extent = function (n) {
            return arguments.length
              ? (null == n
                  ? (t = e = r = i = null)
                  : ((t = +n[0][0]),
                    (e = +n[0][1]),
                    (r = +n[1][0]),
                    (i = +n[1][1])),
                u)
              : null == t
              ? null
              : [
                  [t, e],
                  [r, i],
                ];
          }),
          (u.size = function (n) {
            return arguments.length
              ? (null == n
                  ? (t = e = r = i = null)
                  : ((t = e = 0), (r = +n[0]), (i = +n[1])),
                u)
              : null == t
              ? null
              : [r - t, i - e];
          }),
          u);
    }),
    (Ju.interpolateRgb = gr),
    (Ju.interpolateObject = dr),
    (Ju.interpolateNumber = vr),
    (Ju.interpolateString = yr);
  var Qa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    nl = new RegExp(Qa.source, "g");
  (Ju.interpolate = mr),
    (Ju.interpolators = [
      function (n, t) {
        var e = typeof t;
        return (
          "string" === e
            ? Vo.has(t.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(t)
              ? gr
              : yr
            : t instanceof an
            ? gr
            : Array.isArray(t)
            ? Mr
            : "object" === e && isNaN(t)
            ? dr
            : vr
        )(n, t);
      },
    ]),
    (Ju.interpolateArray = Mr);
  var tl = function () {
      return m;
    },
    el = Ju.map({
      linear: tl,
      poly: Nr,
      quad: function () {
        return wr;
      },
      cubic: function () {
        return Sr;
      },
      sin: function () {
        return Er;
      },
      exp: function () {
        return Ar;
      },
      circle: function () {
        return Cr;
      },
      elastic: zr,
      back: qr,
      bounce: function () {
        return Lr;
      },
    }),
    rl = Ju.map({
      in: m,
      out: _r,
      "in-out": br,
      "out-in": function (n) {
        return br(_r(n));
      },
    });
  (Ju.ease = function (n) {
    var t = n.indexOf("-"),
      e = t >= 0 ? n.slice(0, t) : n,
      r = t >= 0 ? n.slice(t + 1) : "in";
    return (
      (e = el.get(e) || tl),
      (r = rl.get(r) || m),
      xr(r(e.apply(null, Gu.call(arguments, 1))))
    );
  }),
    (Ju.interpolateHcl = Tr),
    (Ju.interpolateHsl = Rr),
    (Ju.interpolateLab = Dr),
    (Ju.interpolateRound = Pr),
    (Ju.transform = function (n) {
      var t = Qu.createElementNS(Ju.ns.prefix.svg, "g");
      return (Ju.transform = function (n) {
        if (null != n) {
          t.setAttribute("transform", n);
          var e = t.transform.baseVal.consolidate();
        }
        return new jr(e ? e.matrix : il);
      })(n);
    }),
    (jr.prototype.toString = function () {
      return (
        "translate(" +
        this.translate +
        ")rotate(" +
        this.rotate +
        ")skewX(" +
        this.skew +
        ")scale(" +
        this.scale +
        ")"
      );
    });
  var il = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
  (Ju.interpolateTransform = Or),
    (Ju.layout = {}),
    (Ju.layout.bundle = function () {
      return function (n) {
        for (var t = [], e = -1, r = n.length; ++e < r; ) t.push(Zr(n[e]));
        return t;
      };
    }),
    (Ju.layout.chord = function () {
      function n() {
        var n,
          c,
          s,
          h,
          p,
          g = {},
          d = [],
          v = Ju.range(u),
          y = [];
        for (e = [], r = [], n = 0, h = -1; ++h < u; ) {
          for (c = 0, p = -1; ++p < u; ) c += i[h][p];
          d.push(c), y.push(Ju.range(u)), (n += c);
        }
        for (
          o &&
            v.sort(function (n, t) {
              return o(d[n], d[t]);
            }),
            a &&
              y.forEach(function (n, t) {
                n.sort(function (n, e) {
                  return a(i[t][n], i[t][e]);
                });
              }),
            n = (No - f * u) / n,
            c = 0,
            h = -1;
          ++h < u;

        ) {
          for (s = c, p = -1; ++p < u; ) {
            var m = v[h],
              M = y[m][p],
              x = i[m][M],
              _ = c,
              b = (c += x * n);
            g[m + "-" + M] = {
              index: m,
              subindex: M,
              startAngle: _,
              endAngle: b,
              value: x,
            };
          }
          (r[m] = { index: m, startAngle: s, endAngle: c, value: (c - s) / n }),
            (c += f);
        }
        for (h = -1; ++h < u; )
          for (p = h - 1; ++p < u; ) {
            var w = g[h + "-" + p],
              S = g[p + "-" + h];
            (w.value || S.value) &&
              e.push(
                w.value < S.value
                  ? { source: S, target: w }
                  : { source: w, target: S }
              );
          }
        l && t();
      }
      function t() {
        e.sort(function (n, t) {
          return l(
            (n.source.value + n.target.value) / 2,
            (t.source.value + t.target.value) / 2
          );
        });
      }
      var e,
        r,
        i,
        u,
        o,
        a,
        l,
        c = {},
        f = 0;
      return (
        (c.matrix = function (n) {
          return arguments.length
            ? ((u = (i = n) && i.length), (e = r = null), c)
            : i;
        }),
        (c.padding = function (n) {
          return arguments.length ? ((f = n), (e = r = null), c) : f;
        }),
        (c.sortGroups = function (n) {
          return arguments.length ? ((o = n), (e = r = null), c) : o;
        }),
        (c.sortSubgroups = function (n) {
          return arguments.length ? ((a = n), (e = null), c) : a;
        }),
        (c.sortChords = function (n) {
          return arguments.length ? ((l = n), e && t(), c) : l;
        }),
        (c.chords = function () {
          return e || n(), e;
        }),
        (c.groups = function () {
          return r || n(), r;
        }),
        c
      );
    }),
    (Ju.layout.force = function () {
      function n(n) {
        return function (t, e, r, i) {
          if (t.point !== n) {
            var u = t.cx - n.x,
              o = t.cy - n.y,
              a = i - e,
              l = u * u + o * o;
            if ((a * a) / v < l) {
              if (l < g) {
                var c = t.charge / l;
                (n.px -= u * c), (n.py -= o * c);
              }
              return !0;
            }
            if (t.point && l && l < g) {
              var c = t.pointCharge / l;
              (n.px -= u * c), (n.py -= o * c);
            }
          }
          return !t.charge;
        };
      }
      function t(n) {
        (n.px = Ju.event.x), (n.py = Ju.event.y), a.resume();
      }
      var e,
        r,
        i,
        u,
        o,
        a = {},
        l = Ju.dispatch("start", "tick", "end"),
        c = [1, 1],
        f = 0.9,
        s = ul,
        h = ol,
        p = -30,
        g = al,
        d = 0.1,
        v = 0.64,
        y = [],
        M = [];
      return (
        (a.tick = function () {
          if ((r *= 0.99) < 0.005)
            return l.end({ type: "end", alpha: (r = 0) }), !0;
          var t,
            e,
            a,
            s,
            h,
            g,
            v,
            m,
            x,
            _ = y.length,
            b = M.length;
          for (e = 0; e < b; ++e)
            (a = M[e]),
              (s = a.source),
              (h = a.target),
              (m = h.x - s.x),
              (x = h.y - s.y),
              (g = m * m + x * x) &&
                ((g = (r * u[e] * ((g = Math.sqrt(g)) - i[e])) / g),
                (m *= g),
                (x *= g),
                (h.x -= m * (v = s.weight / (h.weight + s.weight))),
                (h.y -= x * v),
                (s.x += m * (v = 1 - v)),
                (s.y += x * v));
          if ((v = r * d) && ((m = c[0] / 2), (x = c[1] / 2), (e = -1), v))
            for (; ++e < _; )
              (a = y[e]), (a.x += (m - a.x) * v), (a.y += (x - a.y) * v);
          if (p)
            for (Gr((t = Ju.geom.quadtree(y)), r, o), e = -1; ++e < _; )
              (a = y[e]).fixed || t.visit(n(a));
          for (e = -1; ++e < _; )
            (a = y[e]),
              a.fixed
                ? ((a.x = a.px), (a.y = a.py))
                : ((a.x -= (a.px - (a.px = a.x)) * f),
                  (a.y -= (a.py - (a.py = a.y)) * f));
          l.tick({ type: "tick", alpha: r });
        }),
        (a.nodes = function (n) {
          return arguments.length ? ((y = n), a) : y;
        }),
        (a.links = function (n) {
          return arguments.length ? ((M = n), a) : M;
        }),
        (a.size = function (n) {
          return arguments.length ? ((c = n), a) : c;
        }),
        (a.linkDistance = function (n) {
          return arguments.length
            ? ((s = "function" == typeof n ? n : +n), a)
            : s;
        }),
        (a.distance = a.linkDistance),
        (a.linkStrength = function (n) {
          return arguments.length
            ? ((h = "function" == typeof n ? n : +n), a)
            : h;
        }),
        (a.friction = function (n) {
          return arguments.length ? ((f = +n), a) : f;
        }),
        (a.charge = function (n) {
          return arguments.length
            ? ((p = "function" == typeof n ? n : +n), a)
            : p;
        }),
        (a.chargeDistance = function (n) {
          return arguments.length ? ((g = n * n), a) : Math.sqrt(g);
        }),
        (a.gravity = function (n) {
          return arguments.length ? ((d = +n), a) : d;
        }),
        (a.theta = function (n) {
          return arguments.length ? ((v = n * n), a) : Math.sqrt(v);
        }),
        (a.alpha = function (n) {
          return arguments.length
            ? ((n = +n),
              r
                ? (r = n > 0 ? n : 0)
                : n > 0 &&
                  (l.start({ type: "start", alpha: (r = n) }),
                  Ju.timer(a.tick)),
              a)
            : r;
        }),
        (a.start = function () {
          function n(n, r) {
            if (!e) {
              for (e = new Array(l), a = 0; a < l; ++a) e[a] = [];
              for (a = 0; a < f; ++a) {
                var i = M[a];
                e[i.source.index].push(i.target),
                  e[i.target.index].push(i.source);
              }
            }
            for (var u, o = e[t], a = -1, c = o.length; ++a < c; )
              if (!isNaN((u = o[a][n]))) return u;
            return Math.random() * r;
          }
          var t,
            e,
            r,
            l = y.length,
            f = M.length,
            g = c[0],
            d = c[1];
          for (t = 0; t < l; ++t) ((r = y[t]).index = t), (r.weight = 0);
          for (t = 0; t < f; ++t)
            (r = M[t]),
              "number" == typeof r.source && (r.source = y[r.source]),
              "number" == typeof r.target && (r.target = y[r.target]),
              ++r.source.weight,
              ++r.target.weight;
          for (t = 0; t < l; ++t)
            (r = y[t]),
              isNaN(r.x) && (r.x = n("x", g)),
              isNaN(r.y) && (r.y = n("y", d)),
              isNaN(r.px) && (r.px = r.x),
              isNaN(r.py) && (r.py = r.y);
          if (((i = []), "function" == typeof s))
            for (t = 0; t < f; ++t) i[t] = +s.call(this, M[t], t);
          else for (t = 0; t < f; ++t) i[t] = s;
          if (((u = []), "function" == typeof h))
            for (t = 0; t < f; ++t) u[t] = +h.call(this, M[t], t);
          else for (t = 0; t < f; ++t) u[t] = h;
          if (((o = []), "function" == typeof p))
            for (t = 0; t < l; ++t) o[t] = +p.call(this, y[t], t);
          else for (t = 0; t < l; ++t) o[t] = p;
          return a.resume();
        }),
        (a.resume = function () {
          return a.alpha(0.1);
        }),
        (a.stop = function () {
          return a.alpha(0);
        }),
        (a.drag = function () {
          return (
            e ||
              (e = Ju.behavior
                .drag()
                .origin(m)
                .on("dragstart.force", $r)
                .on("drag.force", t)
                .on("dragend.force", Br)),
            arguments.length
              ? void this.on("mouseover.force", Wr)
                  .on("mouseout.force", Jr)
                  .call(e)
              : e
          );
        }),
        Ju.rebind(a, l, "on")
      );
    });
  var ul = 20,
    ol = 1,
    al = 1 / 0;
  (Ju.layout.hierarchy = function () {
    function n(i) {
      var u,
        o = [i],
        a = [];
      for (i.depth = 0; null != (u = o.pop()); )
        if ((a.push(u), (c = e.call(n, u, u.depth)) && (l = c.length))) {
          for (var l, c, f; --l >= 0; )
            o.push((f = c[l])), (f.parent = u), (f.depth = u.depth + 1);
          r && (u.value = 0), (u.children = c);
        } else r && (u.value = +r.call(n, u, u.depth) || 0), delete u.children;
      return (
        ni(i, function (n) {
          var e, i;
          t && (e = n.children) && e.sort(t),
            r && (i = n.parent) && (i.value += n.value);
        }),
        a
      );
    }
    var t = ri,
      e = ti,
      r = ei;
    return (
      (n.sort = function (e) {
        return arguments.length ? ((t = e), n) : t;
      }),
      (n.children = function (t) {
        return arguments.length ? ((e = t), n) : e;
      }),
      (n.value = function (t) {
        return arguments.length ? ((r = t), n) : r;
      }),
      (n.revalue = function (t) {
        return (
          r &&
            (Qr(t, function (n) {
              n.children && (n.value = 0);
            }),
            ni(t, function (t) {
              var e;
              t.children || (t.value = +r.call(n, t, t.depth) || 0),
                (e = t.parent) && (e.value += t.value);
            })),
          t
        );
      }),
      n
    );
  }),
    (Ju.layout.partition = function () {
      function n(t, e, r, i) {
        var u = t.children;
        if (
          ((t.x = e),
          (t.y = t.depth * i),
          (t.dx = r),
          (t.dy = i),
          u && (o = u.length))
        ) {
          var o,
            a,
            l,
            c = -1;
          for (r = t.value ? r / t.value : 0; ++c < o; )
            n((a = u[c]), e, (l = a.value * r), i), (e += l);
        }
      }
      function t(n) {
        var e = n.children,
          r = 0;
        if (e && (i = e.length))
          for (var i, u = -1; ++u < i; ) r = Math.max(r, t(e[u]));
        return 1 + r;
      }
      function e(e, u) {
        var o = r.call(this, e, u);
        return n(o[0], 0, i[0], i[1] / t(o[0])), o;
      }
      var r = Ju.layout.hierarchy(),
        i = [1, 1];
      return (
        (e.size = function (n) {
          return arguments.length ? ((i = n), e) : i;
        }),
        Kr(e, r)
      );
    }),
    (Ju.layout.pie = function () {
      function n(o) {
        var a,
          l = o.length,
          c = o.map(function (e, r) {
            return +t.call(n, e, r);
          }),
          f = +("function" == typeof r ? r.apply(this, arguments) : r),
          s = ("function" == typeof i ? i.apply(this, arguments) : i) - f,
          h = Math.min(
            Math.abs(s) / l,
            +("function" == typeof u ? u.apply(this, arguments) : u)
          ),
          p = h * (s < 0 ? -1 : 1),
          g = (s - l * p) / Ju.sum(c),
          d = Ju.range(l),
          v = [];
        return (
          null != e &&
            d.sort(
              e === ll
                ? function (n, t) {
                    return c[t] - c[n];
                  }
                : function (n, t) {
                    return e(o[n], o[t]);
                  }
            ),
          d.forEach(function (n) {
            v[n] = {
              data: o[n],
              value: (a = c[n]),
              startAngle: f,
              endAngle: (f += a * g + p),
              padAngle: h,
            };
          }),
          v
        );
      }
      var t = Number,
        e = ll,
        r = 0,
        i = No,
        u = 0;
      return (
        (n.value = function (e) {
          return arguments.length ? ((t = e), n) : t;
        }),
        (n.sort = function (t) {
          return arguments.length ? ((e = t), n) : e;
        }),
        (n.startAngle = function (t) {
          return arguments.length ? ((r = t), n) : r;
        }),
        (n.endAngle = function (t) {
          return arguments.length ? ((i = t), n) : i;
        }),
        (n.padAngle = function (t) {
          return arguments.length ? ((u = t), n) : u;
        }),
        n
      );
    });
  var ll = {};
  Ju.layout.stack = function () {
    function n(a, l) {
      if (!(h = a.length)) return a;
      var c = a.map(function (e, r) {
          return t.call(n, e, r);
        }),
        f = c.map(function (t) {
          return t.map(function (t, e) {
            return [u.call(n, t, e), o.call(n, t, e)];
          });
        }),
        s = e.call(n, f, l);
      (c = Ju.permute(c, s)), (f = Ju.permute(f, s));
      var h,
        p,
        g,
        d,
        v = r.call(n, f, l),
        y = c[0].length;
      for (g = 0; g < y; ++g)
        for (i.call(n, c[0][g], (d = v[g]), f[0][g][1]), p = 1; p < h; ++p)
          i.call(n, c[p][g], (d += f[p - 1][g][1]), f[p][g][1]);
      return a;
    }
    var t = m,
      e = li,
      r = ci,
      i = ai,
      u = ui,
      o = oi;
    return (
      (n.values = function (e) {
        return arguments.length ? ((t = e), n) : t;
      }),
      (n.order = function (t) {
        return arguments.length
          ? ((e = "function" == typeof t ? t : cl.get(t) || li), n)
          : e;
      }),
      (n.offset = function (t) {
        return arguments.length
          ? ((r = "function" == typeof t ? t : fl.get(t) || ci), n)
          : r;
      }),
      (n.x = function (t) {
        return arguments.length ? ((u = t), n) : u;
      }),
      (n.y = function (t) {
        return arguments.length ? ((o = t), n) : o;
      }),
      (n.out = function (t) {
        return arguments.length ? ((i = t), n) : i;
      }),
      n
    );
  };
  var cl = Ju.map({
      "inside-out": function (n) {
        var t,
          e,
          r = n.length,
          i = n.map(fi),
          u = n.map(si),
          o = Ju.range(r).sort(function (n, t) {
            return i[n] - i[t];
          }),
          a = 0,
          l = 0,
          c = [],
          f = [];
        for (t = 0; t < r; ++t)
          (e = o[t]),
            a < l ? ((a += u[e]), c.push(e)) : ((l += u[e]), f.push(e));
        return f.reverse().concat(c);
      },
      reverse: function (n) {
        return Ju.range(n.length).reverse();
      },
      default: li,
    }),
    fl = Ju.map({
      silhouette: function (n) {
        var t,
          e,
          r,
          i = n.length,
          u = n[0].length,
          o = [],
          a = 0,
          l = [];
        for (e = 0; e < u; ++e) {
          for (t = 0, r = 0; t < i; t++) r += n[t][e][1];
          r > a && (a = r), o.push(r);
        }
        for (e = 0; e < u; ++e) l[e] = (a - o[e]) / 2;
        return l;
      },
      wiggle: function (n) {
        var t,
          e,
          r,
          i,
          u,
          o,
          a,
          l,
          c,
          f = n.length,
          s = n[0],
          h = s.length,
          p = [];
        for (p[0] = l = c = 0, e = 1; e < h; ++e) {
          for (t = 0, i = 0; t < f; ++t) i += n[t][e][1];
          for (t = 0, u = 0, a = s[e][0] - s[e - 1][0]; t < f; ++t) {
            for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); r < t; ++r)
              o += (n[r][e][1] - n[r][e - 1][1]) / a;
            u += o * n[t][e][1];
          }
          (p[e] = l -= i ? (u / i) * a : 0), l < c && (c = l);
        }
        for (e = 0; e < h; ++e) p[e] -= c;
        return p;
      },
      expand: function (n) {
        var t,
          e,
          r,
          i = n.length,
          u = n[0].length,
          o = 1 / i,
          a = [];
        for (e = 0; e < u; ++e) {
          for (t = 0, r = 0; t < i; t++) r += n[t][e][1];
          if (r) for (t = 0; t < i; t++) n[t][e][1] /= r;
          else for (t = 0; t < i; t++) n[t][e][1] = o;
        }
        for (e = 0; e < u; ++e) a[e] = 0;
        return a;
      },
      zero: ci,
    });
  (Ju.layout.histogram = function () {
    function n(n, u) {
      for (
        var o,
          a,
          l = [],
          c = n.map(e, this),
          f = r.call(this, c, u),
          s = i.call(this, f, c, u),
          u = -1,
          h = c.length,
          p = s.length - 1,
          g = t ? 1 : 1 / h;
        ++u < p;

      )
        (o = l[u] = []), (o.dx = s[u + 1] - (o.x = s[u])), (o.y = 0);
      if (p > 0)
        for (u = -1; ++u < h; )
          (a = c[u]),
            a >= f[0] &&
              a <= f[1] &&
              ((o = l[Ju.bisect(s, a, 1, p) - 1]), (o.y += g), o.push(n[u]));
      return l;
    }
    var t = !0,
      e = Number,
      r = di,
      i = pi;
    return (
      (n.value = function (t) {
        return arguments.length ? ((e = t), n) : e;
      }),
      (n.range = function (t) {
        return arguments.length ? ((r = En(t)), n) : r;
      }),
      (n.bins = function (t) {
        return arguments.length
          ? ((i =
              "number" == typeof t
                ? function (n) {
                    return gi(n, t);
                  }
                : En(t)),
            n)
          : i;
      }),
      (n.frequency = function (e) {
        return arguments.length ? ((t = !!e), n) : t;
      }),
      n
    );
  }),
    (Ju.layout.pack = function () {
      function n(n, u) {
        var o = e.call(this, n, u),
          a = o[0],
          l = i[0],
          c = i[1],
          f =
            null == t
              ? Math.sqrt
              : "function" == typeof t
              ? t
              : function () {
                  return t;
                };
        if (
          ((a.x = a.y = 0),
          ni(a, function (n) {
            n.r = +f(n.value);
          }),
          ni(a, xi),
          r)
        ) {
          var s = (r * (t ? 1 : Math.max((2 * a.r) / l, (2 * a.r) / c))) / 2;
          ni(a, function (n) {
            n.r += s;
          }),
            ni(a, xi),
            ni(a, function (n) {
              n.r -= s;
            });
        }
        return (
          wi(
            a,
            l / 2,
            c / 2,
            t ? 1 : 1 / Math.max((2 * a.r) / l, (2 * a.r) / c)
          ),
          o
        );
      }
      var t,
        e = Ju.layout.hierarchy().sort(vi),
        r = 0,
        i = [1, 1];
      return (
        (n.size = function (t) {
          return arguments.length ? ((i = t), n) : i;
        }),
        (n.radius = function (e) {
          return arguments.length
            ? ((t = null == e || "function" == typeof e ? e : +e), n)
            : t;
        }),
        (n.padding = function (t) {
          return arguments.length ? ((r = +t), n) : r;
        }),
        Kr(n, e)
      );
    }),
    (Ju.layout.tree = function () {
      function n(n, r) {
        var u = x.call(this, n, r),
          o = u[0],
          a = t(o);
        return (N = a), e(a, 0), i(a), g(a, 0), m(a), u;
      }
      function t(n) {
        var e = {
          t: n,
          prelim: 0,
          mod: 0,
          shift: 0,
          change: 0,
          msel: 0,
          mser: 0,
        };
        if (((n.x = 0), (n.y = 0), w)) (e.x_size = 1), (e.y_size = 1);
        else if ("object" == typeof S) (e.x_size = S[0]), (e.y_size = S[1]);
        else {
          var r = S(n);
          (e.x_size = r[0]), (e.y_size = r[1]);
        }
        k && ((n.x_size = e.x_size), (n.y_size = e.y_size));
        for (
          var i = [], u = n.children ? n.children.length : 0, o = 0;
          o < u;
          ++o
        )
          i.push(t(n.children[o]));
        return (e.children = i), (e.num_children = u), e;
      }
      function e(n, t) {
        (n.t.y = t), (n.t.depth = 0), r(n);
      }
      function r(n) {
        var t,
          e = n.t.y + n.y_size,
          i = n.t.depth + 1;
        for (t = 0; t < n.children.length; ++t) {
          var u = n.children[t];
          (u.t.y = e), (u.t.parent = n.t), (u.t.depth = i), r(n.children[t]);
        }
      }
      function i(n) {
        if (0 == n.num_children) return void u(n);
        i(n.children[0]);
        for (
          var t = y(f(n.children[0].el), 0, null), e = 1;
          e < n.num_children;
          ++e
        ) {
          i(n.children[e]);
          var r = f(n.children[e].er);
          o(n, e, t), (t = y(r, e, t));
        }
        p(n), u(n);
      }
      function u(n) {
        0 == n.num_children
          ? ((n.el = n), (n.er = n), (n.msel = n.mser = 0))
          : ((n.el = n.children[0].el),
            (n.msel = n.children[0].msel),
            (n.er = n.children[n.num_children - 1].er),
            (n.mser = n.children[n.num_children - 1].mser));
      }
      function o(n, t, e) {
        for (
          var r = n.children[t - 1], i = r.mod, u = n.children[t], o = u.mod;
          null != r && null != u;

        ) {
          f(r) > e.lowY && (e = e.nxt);
          var p = i + r.prelim - (o + u.prelim);
          null != _
            ? (p += _(r.t, u.t) * N.x_size)
            : null != b && (p += r.x_size / 2 + u.x_size / 2 + b(r.t, u.t)),
            p > 0
              ? ((o += p), a(n, t, e.index, p))
              : 1 === t &&
                0 === o &&
                0 === r.num_children &&
                u.num_children > 1 &&
                p < 0 &&
                ((o += p), a(n, t, e.index, p));
          var g = f(r),
            d = f(u);
          g <= d && ((r = c(r)), null != r && (i += r.mod)),
            g >= d && ((u = l(u)), null != u && (o += u.mod));
        }
        null == r && null != u
          ? s(n, t, u, o)
          : null != r && null == u && h(n, t, r, i);
      }
      function a(n, t, e, r) {
        (n.children[t].mod += r),
          (n.children[t].msel += r),
          (n.children[t].mser += r),
          d(n, t, e, r);
      }
      function l(n) {
        return 0 == n.num_children ? n.tl : n.children[0];
      }
      function c(n) {
        return 0 == n.num_children ? n.tr : n.children[n.num_children - 1];
      }
      function f(n) {
        return n.t.y + n.y_size;
      }
      function s(n, t, e, r) {
        var i = n.children[0].el;
        i.tl = e;
        var u = r - e.mod - n.children[0].msel;
        (i.mod += u),
          (i.prelim -= u),
          (n.children[0].el = n.children[t].el),
          (n.children[0].msel = n.children[t].msel);
      }
      function h(n, t, e, r) {
        var i = n.children[t].er;
        i.tr = e;
        var u = r - e.mod - n.children[t].mser;
        (i.mod += u),
          (i.prelim -= u),
          (n.children[t].er = n.children[t - 1].er),
          (n.children[t].mser = n.children[t - 1].mser);
      }
      function p(n) {
        n.prelim =
          (n.children[0].prelim +
            n.children[0].mod -
            n.children[0].x_size / 2 +
            n.children[n.num_children - 1].mod +
            n.children[n.num_children - 1].prelim +
            n.children[n.num_children - 1].x_size / 2) /
          2;
      }
      function g(n, t) {
        (t += n.mod), (n.t.x = n.prelim + t), v(n);
        for (var e = 0; e < n.num_children; e++) g(n.children[e], t);
      }
      function d(n, t, e, r) {
        if (e != t - 1) {
          var i = t - e;
          (n.children[e + 1].shift += r / i),
            (n.children[t].shift -= r / i),
            (n.children[t].change -= r - r / i);
        }
      }
      function v(n) {
        for (var t = 0, e = 0, r = 0; r < n.num_children; r++)
          (t += n.children[r].shift),
            (e += t + n.children[r].change),
            (n.children[r].mod += e);
      }
      function y(n, t, e) {
        for (; null != e && n >= e.lowY; ) e = e.nxt;
        return { lowY: n, index: t, nxt: e };
      }
      function m(n) {
        if (null != w) {
          for (var t, e = n, r = n, i = n, u = [n]; (t = u.pop()); ) {
            var o = t.t;
            o.x < e.t.x && (e = t),
              o.x > r.t.x && (r = t),
              o.depth > i.t.depth && (i = t),
              t.children && (u = u.concat(t.children));
          }
          var a = null == _ ? 0.5 : _(e.t, r.t) / 2,
            l = a - e.t.x,
            c = w[0] / (r.t.x + a + l),
            f = w[1] / (i.t.depth > 0 ? i.t.depth : 1);
          for (u = [n]; (t = u.pop()); ) {
            var o = t.t;
            (o.x = (o.x + l) * c),
              (o.y = o.depth * f),
              k && ((o.x_size *= c), (o.y_size *= f)),
              t.children && (u = u.concat(t.children));
          }
        } else {
          var s = n.t.x;
          M(n, -s);
        }
      }
      function M(n, t) {
        n.t.x += t;
        for (var e = 0; e < n.num_children; ++e) M(n.children[e], t);
      }
      var x = Ju.layout.hierarchy().sort(null).value(null),
        _ = ki,
        b = null,
        w = [1, 1],
        S = null,
        k = !1,
        N = null;
      return (
        (n.separation = function (t) {
          return arguments.length ? ((_ = t), (b = null), n) : _;
        }),
        (n.spacing = function (t) {
          return arguments.length ? ((b = t), (_ = null), n) : b;
        }),
        (n.size = function (t) {
          return arguments.length ? ((w = t), (S = null), n) : w;
        }),
        (n.nodeSize = function (t) {
          return arguments.length ? ((S = t), (w = null), n) : S;
        }),
        (n.setNodeSizes = function (t) {
          return arguments.length ? ((k = t), n) : k;
        }),
        (n.rootXSize = function () {
          return N ? N.x_size : null;
        }),
        Kr(n, x)
      );
    }),
    (Ju.layout.cluster = function () {
      function n(n, u) {
        var o,
          a = t.call(this, n, u),
          l = a[0],
          c = 0;
        ni(l, function (n) {
          var t = n.children;
          t && t.length
            ? ((n.x = Ei(t)), (n.y = Ni(t)))
            : ((n.x = o ? (c += e(n, o)) : 0), (n.y = 0), (o = n));
        });
        var f = Ai(l),
          s = Ci(l),
          h = f.x - e(f, s) / 2,
          p = s.x + e(s, f) / 2;
        return (
          ni(
            l,
            i
              ? function (n) {
                  (n.x = (n.x - l.x) * r[0]), (n.y = (l.y - n.y) * r[1]);
                }
              : function (n) {
                  (n.x = ((n.x - h) / (p - h)) * r[0]),
                    (n.y = (1 - (l.y ? n.y / l.y : 1)) * r[1]);
                }
          ),
          a
        );
      }
      var t = Ju.layout.hierarchy().sort(null).value(null),
        e = ki,
        r = [1, 1],
        i = !1;
      return (
        (n.separation = function (t) {
          return arguments.length ? ((e = t), n) : e;
        }),
        (n.size = function (t) {
          return arguments.length ? ((i = null == (r = t)), n) : i ? null : r;
        }),
        (n.nodeSize = function (t) {
          return arguments.length ? ((i = null != (r = t)), n) : i ? r : null;
        }),
        Kr(n, t)
      );
    }),
    (Ju.layout.treemap = function () {
      function n(n, t) {
        for (var e, r, i = -1, u = n.length; ++i < u; )
          (r = (e = n[i]).value * (t < 0 ? 0 : t)),
            (e.area = isNaN(r) || r <= 0 ? 0 : r);
      }
      function t(e) {
        var u = e.children;
        if (u && u.length) {
          var o,
            a,
            l,
            c = s(e),
            f = [],
            h = u.slice(),
            g = 1 / 0,
            d =
              "slice" === p
                ? c.dx
                : "dice" === p
                ? c.dy
                : "slice-dice" === p
                ? 1 & e.depth
                  ? c.dy
                  : c.dx
                : Math.min(c.dx, c.dy);
          for (n(h, (c.dx * c.dy) / e.value), f.area = 0; (l = h.length) > 0; )
            f.push((o = h[l - 1])),
              (f.area += o.area),
              "squarify" !== p || (a = r(f, d)) <= g
                ? (h.pop(), (g = a))
                : ((f.area -= f.pop().area),
                  i(f, d, c, !1),
                  (d = Math.min(c.dx, c.dy)),
                  (f.length = f.area = 0),
                  (g = 1 / 0));
          f.length && (i(f, d, c, !0), (f.length = f.area = 0)), u.forEach(t);
        }
      }
      function e(t) {
        var r = t.children;
        if (r && r.length) {
          var u,
            o = s(t),
            a = r.slice(),
            l = [];
          for (n(a, (o.dx * o.dy) / t.value), l.area = 0; (u = a.pop()); )
            l.push(u),
              (l.area += u.area),
              null != u.z &&
                (i(l, u.z ? o.dx : o.dy, o, !a.length),
                (l.length = l.area = 0));
          r.forEach(e);
        }
      }
      function r(n, t) {
        for (
          var e, r = n.area, i = 0, u = 1 / 0, o = -1, a = n.length;
          ++o < a;

        )
          (e = n[o].area) && (e < u && (u = e), e > i && (i = e));
        return (
          (r *= r),
          (t *= t),
          r ? Math.max((t * i * g) / r, r / (t * u * g)) : 1 / 0
        );
      }
      function i(n, t, e, r) {
        var i,
          u = -1,
          o = n.length,
          a = e.x,
          c = e.y,
          f = t ? l(n.area / t) : 0;
        if (t == e.dx) {
          for ((r || f > e.dy) && (f = e.dy); ++u < o; )
            (i = n[u]),
              (i.x = a),
              (i.y = c),
              (i.dy = f),
              (a += i.dx = Math.min(e.x + e.dx - a, f ? l(i.area / f) : 0));
          (i.z = !0), (i.dx += e.x + e.dx - a), (e.y += f), (e.dy -= f);
        } else {
          for ((r || f > e.dx) && (f = e.dx); ++u < o; )
            (i = n[u]),
              (i.x = a),
              (i.y = c),
              (i.dx = f),
              (c += i.dy = Math.min(e.y + e.dy - c, f ? l(i.area / f) : 0));
          (i.z = !1), (i.dy += e.y + e.dy - c), (e.x += f), (e.dx -= f);
        }
      }
      function u(r) {
        var i = o || a(r),
          u = i[0];
        return (
          (u.x = 0),
          (u.y = 0),
          (u.dx = c[0]),
          (u.dy = c[1]),
          o && a.revalue(u),
          n([u], (u.dx * u.dy) / u.value),
          (o ? e : t)(u),
          h && (o = i),
          i
        );
      }
      var o,
        a = Ju.layout.hierarchy(),
        l = Math.round,
        c = [1, 1],
        f = null,
        s = zi,
        h = !1,
        p = "squarify",
        g = 0.5 * (1 + Math.sqrt(5));
      return (
        (u.size = function (n) {
          return arguments.length ? ((c = n), u) : c;
        }),
        (u.padding = function (n) {
          function t(t) {
            var e = n.call(u, t, t.depth);
            return null == e
              ? zi(t)
              : qi(t, "number" == typeof e ? [e, e, e, e] : e);
          }
          function e(t) {
            return qi(t, n);
          }
          if (!arguments.length) return f;
          var r;
          return (
            (s =
              null == (f = n)
                ? zi
                : "function" == (r = typeof n)
                ? t
                : "number" === r
                ? ((n = [n, n, n, n]), e)
                : e),
            u
          );
        }),
        (u.round = function (n) {
          return arguments.length
            ? ((l = n ? Math.round : Number), u)
            : l != Number;
        }),
        (u.sticky = function (n) {
          return arguments.length ? ((h = n), (o = null), u) : h;
        }),
        (u.ratio = function (n) {
          return arguments.length ? ((g = n), u) : g;
        }),
        (u.mode = function (n) {
          return arguments.length ? ((p = n + ""), u) : p;
        }),
        Kr(u, a)
      );
    }),
    (Ju.random = {
      normal: function (n, t) {
        var e = arguments.length;
        return (
          e < 2 && (t = 1),
          e < 1 && (n = 0),
          function () {
            var e, r, i;
            do
              (e = 2 * Math.random() - 1),
                (r = 2 * Math.random() - 1),
                (i = e * e + r * r);
            while (!i || i > 1);
            return n + t * e * Math.sqrt((-2 * Math.log(i)) / i);
          }
        );
      },
      logNormal: function () {
        var n = Ju.random.normal.apply(Ju, arguments);
        return function () {
          return Math.exp(n());
        };
      },
      bates: function (n) {
        var t = Ju.random.irwinHall(n);
        return function () {
          return t() / n;
        };
      },
      irwinHall: function (n) {
        return function () {
          for (var t = 0, e = 0; e < n; e++) t += Math.random();
          return t;
        };
      },
    }),
    (Ju.scale = {});
  var sl = { floor: m, ceil: m };
  Ju.scale.linear = function () {
    return Ui([0, 1], [0, 1], mr, !1);
  };
  var hl = { s: 1, g: 1, p: 1, r: 1, e: 1 };
  Ju.scale.log = function () {
    return Xi(Ju.scale.linear().domain([0, 1]), 10, !0, [1, 10]);
  };
  var pl = Ju.format(".0e"),
    gl = {
      floor: function (n) {
        return -Math.ceil(-n);
      },
      ceil: function (n) {
        return -Math.floor(-n);
      },
    };
  (Ju.scale.pow = function () {
    return $i(Ju.scale.linear(), 1, [0, 1]);
  }),
    (Ju.scale.sqrt = function () {
      return Ju.scale.pow().exponent(0.5);
    }),
    (Ju.scale.ordinal = function () {
      return Wi([], { t: "range", a: [[]] });
    }),
    (Ju.scale.category10 = function () {
      return Ju.scale.ordinal().range(dl);
    }),
    (Ju.scale.category20 = function () {
      return Ju.scale.ordinal().range(vl);
    }),
    (Ju.scale.category20b = function () {
      return Ju.scale.ordinal().range(yl);
    }),
    (Ju.scale.category20c = function () {
      return Ju.scale.ordinal().range(ml);
    });
  var dl = [
      2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711,
      12369186, 1556175,
    ].map(xn),
    vl = [
      2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728,
      16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194,
      8355711, 13092807, 12369186, 14408589, 1556175, 10410725,
    ].map(xn),
    yl = [
      3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636,
      9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643,
      15177372, 8077683, 10834324, 13528509, 14589654,
    ].map(xn),
    ml = [
      3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259,
      16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312,
      12369372, 14342891, 6513507, 9868950, 12434877, 14277081,
    ].map(xn);
  (Ju.scale.quantile = function () {
    return Ji([], []);
  }),
    (Ju.scale.quantize = function () {
      return Gi(0, 1, [0, 1]);
    }),
    (Ju.scale.threshold = function () {
      return Ki([0.5], [0, 1]);
    }),
    (Ju.scale.identity = function () {
      return Qi([0, 1]);
    }),
    (Ju.svg = {}),
    (Ju.svg.arc = function () {
      function n() {
        var n = Math.max(0, +e.apply(this, arguments)),
          c = Math.max(0, +r.apply(this, arguments)),
          f = o.apply(this, arguments) - Ao,
          s = a.apply(this, arguments) - Ao,
          h = Math.abs(s - f),
          p = f > s ? 0 : 1;
        if ((c < n && ((g = c), (c = n), (n = g)), h >= Eo))
          return t(c, p) + (n ? t(n, 1 - p) : "") + "Z";
        var g,
          d,
          v,
          y,
          m,
          M,
          x,
          _,
          b,
          w,
          S,
          k,
          N = 0,
          E = 0,
          A = [];
        if (
          ((y = (+l.apply(this, arguments) || 0) / 2) &&
            ((v =
              u === Ml ? Math.sqrt(n * n + c * c) : +u.apply(this, arguments)),
            p || (E *= -1),
            c && (E = tn((v / c) * Math.sin(y))),
            n && (N = tn((v / n) * Math.sin(y)))),
          c)
        ) {
          (m = c * Math.cos(f + E)),
            (M = c * Math.sin(f + E)),
            (x = c * Math.cos(s - E)),
            (_ = c * Math.sin(s - E));
          var C = Math.abs(s - f - 2 * E) <= ko ? 0 : 1;
          if (E && (ou(m, M, x, _) === p) ^ C) {
            var z = (f + s) / 2;
            (m = c * Math.cos(z)), (M = c * Math.sin(z)), (x = _ = null);
          }
        } else m = M = 0;
        if (n) {
          (b = n * Math.cos(s - N)),
            (w = n * Math.sin(s - N)),
            (S = n * Math.cos(f + N)),
            (k = n * Math.sin(f + N));
          var q = Math.abs(f - s + 2 * N) <= ko ? 0 : 1;
          if (N && (ou(b, w, S, k) === 1 - p) ^ q) {
            var L = (f + s) / 2;
            (b = n * Math.cos(L)), (w = n * Math.sin(L)), (S = k = null);
          }
        } else b = w = 0;
        if (
          (g = Math.min(Math.abs(c - n) / 2, +i.apply(this, arguments))) > 0.001
        ) {
          d = (n < c) ^ p ? 0 : 1;
          var T =
              null == S
                ? [b, w]
                : null == x
                ? [m, M]
                : Te([m, M], [S, k], [x, _], [b, w]),
            R = m - T[0],
            D = M - T[1],
            P = x - T[0],
            j = _ - T[1],
            U =
              1 /
              Math.sin(
                Math.acos(
                  (R * P + D * j) /
                    (Math.sqrt(R * R + D * D) * Math.sqrt(P * P + j * j))
                ) / 2
              ),
            F = Math.sqrt(T[0] * T[0] + T[1] * T[1]);
          if (null != x) {
            var H = Math.min(g, (c - F) / (U + 1)),
              O = au(null == S ? [b, w] : [S, k], [m, M], c, H, p),
              Y = au([x, _], [b, w], c, H, p);
            g === H
              ? A.push(
                  "M",
                  O[0],
                  "A",
                  H,
                  ",",
                  H,
                  " 0 0,",
                  d,
                  " ",
                  O[1],
                  "A",
                  c,
                  ",",
                  c,
                  " 0 ",
                  (1 - p) ^ ou(O[1][0], O[1][1], Y[1][0], Y[1][1]),
                  ",",
                  p,
                  " ",
                  Y[1],
                  "A",
                  H,
                  ",",
                  H,
                  " 0 0,",
                  d,
                  " ",
                  Y[0]
                )
              : A.push("M", O[0], "A", H, ",", H, " 0 1,", d, " ", Y[0]);
          } else A.push("M", m, ",", M);
          if (null != S) {
            var I = Math.min(g, (n - F) / (U - 1)),
              Z = au([m, M], [S, k], n, -I, p),
              V = au([b, w], null == x ? [m, M] : [x, _], n, -I, p);
            g === I
              ? A.push(
                  "L",
                  V[0],
                  "A",
                  I,
                  ",",
                  I,
                  " 0 0,",
                  d,
                  " ",
                  V[1],
                  "A",
                  n,
                  ",",
                  n,
                  " 0 ",
                  p ^ ou(V[1][0], V[1][1], Z[1][0], Z[1][1]),
                  ",",
                  1 - p,
                  " ",
                  Z[1],
                  "A",
                  I,
                  ",",
                  I,
                  " 0 0,",
                  d,
                  " ",
                  Z[0]
                )
              : A.push("L", V[0], "A", I, ",", I, " 0 0,", d, " ", Z[0]);
          } else A.push("L", b, ",", w);
        } else
          A.push("M", m, ",", M),
            null != x &&
              A.push("A", c, ",", c, " 0 ", C, ",", p, " ", x, ",", _),
            A.push("L", b, ",", w),
            null != S &&
              A.push("A", n, ",", n, " 0 ", q, ",", 1 - p, " ", S, ",", k);
        return A.push("Z"), A.join("");
      }
      function t(n, t) {
        return (
          "M0," +
          n +
          "A" +
          n +
          "," +
          n +
          " 0 1," +
          t +
          " 0," +
          -n +
          "A" +
          n +
          "," +
          n +
          " 0 1," +
          t +
          " 0," +
          n
        );
      }
      var e = tu,
        r = eu,
        i = nu,
        u = Ml,
        o = ru,
        a = iu,
        l = uu;
      return (
        (n.innerRadius = function (t) {
          return arguments.length ? ((e = En(t)), n) : e;
        }),
        (n.outerRadius = function (t) {
          return arguments.length ? ((r = En(t)), n) : r;
        }),
        (n.cornerRadius = function (t) {
          return arguments.length ? ((i = En(t)), n) : i;
        }),
        (n.padRadius = function (t) {
          return arguments.length ? ((u = t == Ml ? Ml : En(t)), n) : u;
        }),
        (n.startAngle = function (t) {
          return arguments.length ? ((o = En(t)), n) : o;
        }),
        (n.endAngle = function (t) {
          return arguments.length ? ((a = En(t)), n) : a;
        }),
        (n.padAngle = function (t) {
          return arguments.length ? ((l = En(t)), n) : l;
        }),
        (n.centroid = function () {
          var n = (+e.apply(this, arguments) + +r.apply(this, arguments)) / 2,
            t =
              (+o.apply(this, arguments) + +a.apply(this, arguments)) / 2 - Ao;
          return [Math.cos(t) * n, Math.sin(t) * n];
        }),
        n
      );
    });
  var Ml = "auto";
  Ju.svg.line = function () {
    return lu(m);
  };
  var xl = Ju.map({
    linear: cu,
    "linear-closed": fu,
    step: su,
    "step-before": hu,
    "step-after": pu,
    basis: Mu,
    "basis-open": xu,
    "basis-closed": _u,
    bundle: bu,
    cardinal: vu,
    "cardinal-open": gu,
    "cardinal-closed": du,
    monotone: Au,
  });
  xl.forEach(function (n, t) {
    (t.key = n), (t.closed = /-closed$/.test(n));
  });
  var _l = [0, 2 / 3, 1 / 3, 0],
    bl = [0, 1 / 3, 2 / 3, 0],
    wl = [0, 1 / 6, 2 / 3, 1 / 6];
  (Ju.svg.line.radial = function () {
    var n = lu(Cu);
    return (n.radius = n.x), delete n.x, (n.angle = n.y), delete n.y, n;
  }),
    (hu.reverse = pu),
    (pu.reverse = hu),
    (Ju.svg.area = function () {
      return zu(m);
    }),
    (Ju.svg.area.radial = function () {
      var n = zu(Cu);
      return (
        (n.radius = n.x),
        delete n.x,
        (n.innerRadius = n.x0),
        delete n.x0,
        (n.outerRadius = n.x1),
        delete n.x1,
        (n.angle = n.y),
        delete n.y,
        (n.startAngle = n.y0),
        delete n.y0,
        (n.endAngle = n.y1),
        delete n.y1,
        n
      );
    }),
    (Ju.svg.chord = function () {
      function n(n, a) {
        var l = t(this, u, n, a),
          c = t(this, o, n, a);
        return (
          "M" +
          l.p0 +
          r(l.r, l.p1, l.a1 - l.a0) +
          (e(l, c)
            ? i(l.r, l.p1, l.r, l.p0)
            : i(l.r, l.p1, c.r, c.p0) +
              r(c.r, c.p1, c.a1 - c.a0) +
              i(c.r, c.p1, l.r, l.p0)) +
          "Z"
        );
      }
      function t(n, t, e, r) {
        var i = t.call(n, e, r),
          u = a.call(n, i, r),
          o = l.call(n, i, r) - Ao,
          f = c.call(n, i, r) - Ao;
        return {
          r: u,
          a0: o,
          a1: f,
          p0: [u * Math.cos(o), u * Math.sin(o)],
          p1: [u * Math.cos(f), u * Math.sin(f)],
        };
      }
      function e(n, t) {
        return n.a0 == t.a0 && n.a1 == t.a1;
      }
      function r(n, t, e) {
        return "A" + n + "," + n + " 0 " + +(e > ko) + ",1 " + t;
      }
      function i(n, t, e, r) {
        return "Q 0,0 " + r;
      }
      var u = me,
        o = Me,
        a = qu,
        l = ru,
        c = iu;
      return (
        (n.radius = function (t) {
          return arguments.length ? ((a = En(t)), n) : a;
        }),
        (n.source = function (t) {
          return arguments.length ? ((u = En(t)), n) : u;
        }),
        (n.target = function (t) {
          return arguments.length ? ((o = En(t)), n) : o;
        }),
        (n.startAngle = function (t) {
          return arguments.length ? ((l = En(t)), n) : l;
        }),
        (n.endAngle = function (t) {
          return arguments.length ? ((c = En(t)), n) : c;
        }),
        n
      );
    }),
    (Ju.svg.diagonal = function () {
      function n(n, i) {
        var u = t.call(this, n, i),
          o = e.call(this, n, i),
          a = (u.y + o.y) / 2,
          l = [u, { x: u.x, y: a }, { x: o.x, y: a }, o];
        return (
          (l = l.map(r)), "M" + l[0] + "C" + l[1] + " " + l[2] + " " + l[3]
        );
      }
      var t = me,
        e = Me,
        r = Lu;
      return (
        (n.source = function (e) {
          return arguments.length ? ((t = En(e)), n) : t;
        }),
        (n.target = function (t) {
          return arguments.length ? ((e = En(t)), n) : e;
        }),
        (n.projection = function (t) {
          return arguments.length ? ((r = t), n) : r;
        }),
        n
      );
    }),
    (Ju.svg.diagonal.radial = function () {
      var n = Ju.svg.diagonal(),
        t = Lu,
        e = n.projection;
      return (
        (n.projection = function (n) {
          return arguments.length ? e(Tu((t = n))) : t;
        }),
        n
      );
    }),
    (Ju.svg.symbol = function () {
      function n(n, r) {
        return (Sl.get(t.call(this, n, r)) || Pu)(e.call(this, n, r));
      }
      var t = Du,
        e = Ru;
      return (
        (n.type = function (e) {
          return arguments.length ? ((t = En(e)), n) : t;
        }),
        (n.size = function (t) {
          return arguments.length ? ((e = En(t)), n) : e;
        }),
        n
      );
    });
  var Sl = Ju.map({
    circle: Pu,
    cross: function (n) {
      var t = Math.sqrt(n / 5) / 2;
      return (
        "M" +
        -3 * t +
        "," +
        -t +
        "H" +
        -t +
        "V" +
        -3 * t +
        "H" +
        t +
        "V" +
        -t +
        "H" +
        3 * t +
        "V" +
        t +
        "H" +
        t +
        "V" +
        3 * t +
        "H" +
        -t +
        "V" +
        t +
        "H" +
        -3 * t +
        "Z"
      );
    },
    diamond: function (n) {
      var t = Math.sqrt(n / (2 * Nl)),
        e = t * Nl;
      return "M0," + -t + "L" + e + ",0 0," + t + " " + -e + ",0Z";
    },
    square: function (n) {
      var t = Math.sqrt(n) / 2;
      return (
        "M" +
        -t +
        "," +
        -t +
        "L" +
        t +
        "," +
        -t +
        " " +
        t +
        "," +
        t +
        " " +
        -t +
        "," +
        t +
        "Z"
      );
    },
    "triangle-down": function (n) {
      var t = Math.sqrt(n / kl),
        e = (t * kl) / 2;
      return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z";
    },
    "triangle-up": function (n) {
      var t = Math.sqrt(n / kl),
        e = (t * kl) / 2;
      return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z";
    },
  });
  Ju.svg.symbolTypes = Sl.keys();
  var kl = Math.sqrt(3),
    Nl = Math.tan(30 * Co);
  (vo.transition = function (n) {
    for (
      var t,
        e,
        r = El || ++ql,
        i = Ou(n),
        u = [],
        o = Al || { time: Date.now(), ease: kr, delay: 0, duration: 250 },
        a = -1,
        l = this.length;
      ++a < l;

    ) {
      u.push((t = []));
      for (var c = this[a], f = -1, s = c.length; ++f < s; )
        (e = c[f]) && Yu(e, f, i, r, o), t.push(e);
    }
    return Uu(u, i, r);
  }),
    (vo.interrupt = function (n) {
      return this.each(null == n ? Cl : ju(Ou(n)));
    });
  var El,
    Al,
    Cl = ju(Ou()),
    zl = [],
    ql = 0;
  (zl.call = vo.call),
    (zl.empty = vo.empty),
    (zl.node = vo.node),
    (zl.size = vo.size),
    (Ju.transition = function (n, t) {
      return n && n.transition
        ? El
          ? n.transition(t)
          : n
        : Ju.selection().transition(n);
    }),
    (Ju.transition.prototype = zl),
    (zl.select = function (n) {
      var t,
        e,
        r,
        i = this.id,
        u = this.namespace,
        o = [];
      n = A(n);
      for (var a = -1, l = this.length; ++a < l; ) {
        o.push((t = []));
        for (var c = this[a], f = -1, s = c.length; ++f < s; )
          (r = c[f]) && (e = n.call(r, r.__data__, f, a))
            ? ("__data__" in r && (e.__data__ = r.__data__),
              Yu(e, f, u, i, r[u][i]),
              t.push(e))
            : t.push(null);
      }
      return Uu(o, u, i);
    }),
    (zl.selectAll = function (n) {
      var t,
        e,
        r,
        i,
        u,
        o = this.id,
        a = this.namespace,
        l = [];
      n = C(n);
      for (var c = -1, f = this.length; ++c < f; )
        for (var s = this[c], h = -1, p = s.length; ++h < p; )
          if ((r = s[h])) {
            (u = r[a][o]), (e = n.call(r, r.__data__, h, c)), l.push((t = []));
            for (var g = -1, d = e.length; ++g < d; )
              (i = e[g]) && Yu(i, g, a, o, u), t.push(i);
          }
      return Uu(l, a, o);
    }),
    (zl.filter = function (n) {
      var t,
        e,
        r,
        i = [];
      "function" != typeof n && (n = O(n));
      for (var u = 0, o = this.length; u < o; u++) {
        i.push((t = []));
        for (var e = this[u], a = 0, l = e.length; a < l; a++)
          (r = e[a]) && n.call(r, r.__data__, a, u) && t.push(r);
      }
      return Uu(i, this.namespace, this.id);
    }),
    (zl.tween = function (n, t) {
      var e = this.id,
        r = this.namespace;
      return arguments.length < 2
        ? this.node()[r][e].tween.get(n)
        : I(
            this,
            null == t
              ? function (t) {
                  t[r][e].tween.remove(n);
                }
              : function (i) {
                  i[r][e].tween.set(n, t);
                }
          );
    }),
    (zl.attr = function (n, t) {
      function e() {
        this.removeAttribute(a);
      }
      function r() {
        this.removeAttributeNS(a.space, a.local);
      }
      function i(n) {
        return null == n
          ? e
          : ((n += ""),
            function () {
              var t,
                e = this.getAttribute(a);
              return (
                e !== n &&
                ((t = o(e, n)),
                function (n) {
                  this.setAttribute(a, t(n));
                })
              );
            });
      }
      function u(n) {
        return null == n
          ? r
          : ((n += ""),
            function () {
              var t,
                e = this.getAttributeNS(a.space, a.local);
              return (
                e !== n &&
                ((t = o(e, n)),
                function (n) {
                  this.setAttributeNS(a.space, a.local, t(n));
                })
              );
            });
      }
      if (arguments.length < 2) {
        for (t in n) this.attr(t, n[t]);
        return this;
      }
      var o = "transform" == n ? Or : mr,
        a = Ju.ns.qualify(n);
      return Fu(this, "attr." + n, t, a.local ? u : i);
    }),
    (zl.attrTween = function (n, t) {
      function e(n, e) {
        var r = t.call(this, n, e, this.getAttribute(i));
        return (
          r &&
          function (n) {
            this.setAttribute(i, r(n));
          }
        );
      }
      function r(n, e) {
        var r = t.call(this, n, e, this.getAttributeNS(i.space, i.local));
        return (
          r &&
          function (n) {
            this.setAttributeNS(i.space, i.local, r(n));
          }
        );
      }
      var i = Ju.ns.qualify(n);
      return this.tween("attr." + n, i.local ? r : e);
    }),
    (zl.style = function (n, e, r) {
      function i() {
        this.style.removeProperty(n);
      }
      function u(e) {
        return null == e
          ? i
          : ((e += ""),
            function () {
              var i,
                u = t(this).getComputedStyle(this, null).getPropertyValue(n);
              return (
                u !== e &&
                ((i = mr(u, e)),
                function (t) {
                  this.style.setProperty(n, i(t), r);
                })
              );
            });
      }
      var o = arguments.length;
      if (o < 3) {
        if ("string" != typeof n) {
          o < 2 && (e = "");
          for (r in n) this.style(r, n[r], e);
          return this;
        }
        r = "";
      }
      return Fu(this, "style." + n, e, u);
    }),
    (zl.styleTween = function (n, e, r) {
      function i(i, u) {
        var o = e.call(
          this,
          i,
          u,
          t(this).getComputedStyle(this, null).getPropertyValue(n)
        );
        return (
          o &&
          function (t) {
            this.style.setProperty(n, o(t), r);
          }
        );
      }
      return arguments.length < 3 && (r = ""), this.tween("style." + n, i);
    }),
    (zl.text = function (n) {
      return Fu(this, "text", n, Hu);
    }),
    (zl.remove = function () {
      var n = this.namespace;
      return this.each("end.transition", function () {
        var t;
        this[n].count < 2 && (t = this.parentNode) && t.removeChild(this);
      });
    }),
    (zl.ease = function (n) {
      var t = this.id,
        e = this.namespace;
      return arguments.length < 1
        ? this.node()[e][t].ease
        : ("function" != typeof n && (n = Ju.ease.apply(Ju, arguments)),
          I(this, function (r) {
            r[e][t].ease = n;
          }));
    }),
    (zl.delay = function (n) {
      var t = this.id,
        e = this.namespace;
      return arguments.length < 1
        ? this.node()[e][t].delay
        : I(
            this,
            "function" == typeof n
              ? function (r, i, u) {
                  r[e][t].delay = +n.call(r, r.__data__, i, u);
                }
              : ((n = +n),
                function (r) {
                  r[e][t].delay = n;
                })
          );
    }),
    (zl.duration = function (n) {
      var t = this.id,
        e = this.namespace;
      return arguments.length < 1
        ? this.node()[e][t].duration
        : I(
            this,
            "function" == typeof n
              ? function (r, i, u) {
                  r[e][t].duration = Math.max(1, n.call(r, r.__data__, i, u));
                }
              : ((n = Math.max(1, n)),
                function (r) {
                  r[e][t].duration = n;
                })
          );
    }),
    (zl.each = function (n, t) {
      var e = this.id,
        r = this.namespace;
      if (arguments.length < 2) {
        var i = Al,
          u = El;
        try {
          (El = e),
            I(this, function (t, i, u) {
              (Al = t[r][e]), n.call(t, t.__data__, i, u);
            });
        } finally {
          (Al = i), (El = u);
        }
      } else
        I(this, function (i) {
          var u = i[r][e];
          (u.event || (u.event = Ju.dispatch("start", "end", "interrupt"))).on(
            n,
            t
          );
        });
      return this;
    }),
    (zl.transition = function () {
      for (
        var n,
          t,
          e,
          r,
          i = this.id,
          u = ++ql,
          o = this.namespace,
          a = [],
          l = 0,
          c = this.length;
        l < c;
        l++
      ) {
        a.push((n = []));
        for (var t = this[l], f = 0, s = t.length; f < s; f++)
          (e = t[f]) &&
            ((r = e[o][i]),
            Yu(e, f, o, u, {
              time: r.time,
              ease: r.ease,
              delay: r.delay + r.duration,
              duration: r.duration,
            })),
            n.push(e);
      }
      return Uu(a, o, u);
    }),
    (Ju.svg.axis = function () {
      function n(n) {
        n.each(function () {
          var n,
            c = Ju.select(this),
            f = this.__chart__ || e,
            s = (this.__chart__ = e.copy()),
            h = null == l ? (s.ticks ? s.ticks.apply(s, a) : s.domain()) : l,
            p = null == t ? (s.tickFormat ? s.tickFormat.apply(s, a) : m) : t,
            g = c.selectAll(".tick").data(h, s),
            d = g
              .enter()
              .insert("g", ".domain")
              .attr("class", "tick")
              .style("opacity", wo),
            v = Ju.transition(g.exit()).style("opacity", wo).remove(),
            y = Ju.transition(g.order()).style("opacity", 1),
            M = Math.max(i, 0) + o,
            x = Ti(s),
            _ = c.selectAll(".domain").data([0]),
            b =
              (_.enter().append("path").attr("class", "domain"),
              Ju.transition(_));
          d.append("line"), d.append("text");
          var w,
            S,
            k,
            N,
            E = d.select("line"),
            A = y.select("line"),
            C = g.select("text").text(p),
            z = d.select("text"),
            q = y.select("text"),
            L = "top" === r || "left" === r ? -1 : 1;
          if (
            ("bottom" === r || "top" === r
              ? ((n = Iu),
                (w = "x"),
                (k = "y"),
                (S = "x2"),
                (N = "y2"),
                C.attr("dy", L < 0 ? "0em" : ".71em").style(
                  "text-anchor",
                  "middle"
                ),
                b.attr(
                  "d",
                  "M" + x[0] + "," + L * u + "V0H" + x[1] + "V" + L * u
                ))
              : ((n = Zu),
                (w = "y"),
                (k = "x"),
                (S = "y2"),
                (N = "x2"),
                C.attr("dy", ".32em").style(
                  "text-anchor",
                  L < 0 ? "end" : "start"
                ),
                b.attr(
                  "d",
                  "M" + L * u + "," + x[0] + "H0V" + x[1] + "H" + L * u
                )),
            E.attr(N, L * i),
            z.attr(k, L * M),
            A.attr(S, 0).attr(N, L * i),
            q.attr(w, 0).attr(k, L * M),
            s.rangeBand)
          ) {
            var T = s,
              R = T.rangeBand() / 2;
            f = s = function (n) {
              return T(n) + R;
            };
          } else f.rangeBand ? (f = s) : v.call(n, s, f);
          d.call(n, f, s), y.call(n, s, s);
        });
      }
      var t,
        e = Ju.scale.linear(),
        r = Ll,
        i = 6,
        u = 6,
        o = 3,
        a = [10],
        l = null;
      return (
        (n.scale = function (t) {
          return arguments.length ? ((e = t), n) : e;
        }),
        (n.orient = function (t) {
          return arguments.length ? ((r = t in Tl ? t + "" : Ll), n) : r;
        }),
        (n.ticks = function () {
          return arguments.length ? ((a = arguments), n) : a;
        }),
        (n.tickValues = function (t) {
          return arguments.length ? ((l = t), n) : l;
        }),
        (n.tickFormat = function (e) {
          return arguments.length ? ((t = e), n) : t;
        }),
        (n.tickSize = function (t) {
          var e = arguments.length;
          return e ? ((i = +t), (u = +arguments[e - 1]), n) : i;
        }),
        (n.innerTickSize = function (t) {
          return arguments.length ? ((i = +t), n) : i;
        }),
        (n.outerTickSize = function (t) {
          return arguments.length ? ((u = +t), n) : u;
        }),
        (n.tickPadding = function (t) {
          return arguments.length ? ((o = +t), n) : o;
        }),
        (n.tickSubdivide = function () {
          return arguments.length && n;
        }),
        n
      );
    });
  var Ll = "bottom",
    Tl = { top: 1, right: 1, bottom: 1, left: 1 };
  Ju.svg.brush = function () {
    function n(t) {
      t.each(function () {
        var t = Ju.select(this)
            .style("pointer-events", "all")
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
            .on("mousedown.brush", u)
            .on("touchstart.brush", u),
          o = t.selectAll(".background").data([0]);
        o
          .enter()
          .append("rect")
          .attr("class", "background")
          .style("visibility", "hidden")
          .style("cursor", "crosshair"),
          t
            .selectAll(".extent")
            .data([0])
            .enter()
            .append("rect")
            .attr("class", "extent")
            .style("cursor", "move");
        var a = t.selectAll(".resize").data(d, m);
        a.exit().remove(),
          a
            .enter()
            .append("g")
            .attr("class", function (n) {
              return "resize " + n;
            })
            .style("cursor", function (n) {
              return Rl[n];
            })
            .append("rect")
            .attr("x", function (n) {
              return /[ew]$/.test(n) ? -3 : null;
            })
            .attr("y", function (n) {
              return /^[ns]/.test(n) ? -3 : null;
            })
            .attr("width", 6)
            .attr("height", 6)
            .style("visibility", "hidden"),
          a.style("display", n.empty() ? "none" : null);
        var l,
          s = Ju.transition(t),
          h = Ju.transition(o);
        c && ((l = Ti(c)), h.attr("x", l[0]).attr("width", l[1] - l[0]), r(s)),
          f &&
            ((l = Ti(f)), h.attr("y", l[0]).attr("height", l[1] - l[0]), i(s)),
          e(s);
      });
    }
    function e(n) {
      n.selectAll(".resize").attr("transform", function (n) {
        return "translate(" + s[+/e$/.test(n)] + "," + h[+/^s/.test(n)] + ")";
      });
    }
    function r(n) {
      n.select(".extent").attr("x", s[0]),
        n.selectAll(".extent,.n>rect,.s>rect").attr("width", s[1] - s[0]);
    }
    function i(n) {
      n.select(".extent").attr("y", h[0]),
        n.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0]);
    }
    function u() {
      function u() {
        32 == Ju.event.keyCode &&
          (C || ((M = null), (q[0] -= s[1]), (q[1] -= h[1]), (C = 2)), S());
      }
      function d() {
        32 == Ju.event.keyCode &&
          2 == C &&
          ((q[0] += s[1]), (q[1] += h[1]), (C = 0), S());
      }
      function v() {
        var n = Ju.mouse(_),
          t = !1;
        x && ((n[0] += x[0]), (n[1] += x[1])),
          C ||
            (Ju.event.altKey
              ? (M || (M = [(s[0] + s[1]) / 2, (h[0] + h[1]) / 2]),
                (q[0] = s[+(n[0] < M[0])]),
                (q[1] = h[+(n[1] < M[1])]))
              : (M = null)),
          E && y(n, c, 0) && (r(k), (t = !0)),
          A && y(n, f, 1) && (i(k), (t = !0)),
          t && (e(k), w({ type: "brush", mode: C ? "move" : "resize" }));
      }
      function y(n, t, e) {
        var r,
          i,
          u = Ti(t),
          l = u[0],
          c = u[1],
          f = q[e],
          d = e ? h : s,
          v = d[1] - d[0];
        if (
          (C && ((l -= f), (c -= v + f)),
          (r = (e ? g : p) ? Math.max(l, Math.min(c, n[e])) : n[e]),
          C
            ? (i = (r += f) + v)
            : (M && (f = Math.max(l, Math.min(c, 2 * M[e] - r))),
              f < r ? ((i = r), (r = f)) : (i = f)),
          d[0] != r || d[1] != i)
        )
          return e ? (a = null) : (o = null), (d[0] = r), (d[1] = i), !0;
      }
      function m() {
        v(),
          k
            .style("pointer-events", "all")
            .selectAll(".resize")
            .style("display", n.empty() ? "none" : null),
          Ju.select("body").style("cursor", null),
          L.on("mousemove.brush", null)
            .on("mouseup.brush", null)
            .on("touchmove.brush", null)
            .on("touchend.brush", null)
            .on("keydown.brush", null)
            .on("keyup.brush", null),
          z(),
          w({ type: "brushend" });
      }
      var M,
        x,
        _ = this,
        b = Ju.select(Ju.event.target),
        w = l.of(_, arguments),
        k = Ju.select(_),
        N = b.datum(),
        E = !/^(n|s)$/.test(N) && c,
        A = !/^(e|w)$/.test(N) && f,
        C = b.classed("extent"),
        z = W(_),
        q = Ju.mouse(_),
        L = Ju.select(t(_)).on("keydown.brush", u).on("keyup.brush", d);
      if (
        (Ju.event.changedTouches
          ? L.on("touchmove.brush", v).on("touchend.brush", m)
          : L.on("mousemove.brush", v).on("mouseup.brush", m),
        k.interrupt().selectAll("*").interrupt(),
        C)
      )
        (q[0] = s[0] - q[0]), (q[1] = h[0] - q[1]);
      else if (N) {
        var T = +/w$/.test(N),
          R = +/^n/.test(N);
        (x = [s[1 - T] - q[0], h[1 - R] - q[1]]), (q[0] = s[T]), (q[1] = h[R]);
      } else Ju.event.altKey && (M = q.slice());
      k
        .style("pointer-events", "none")
        .selectAll(".resize")
        .style("display", null),
        Ju.select("body").style("cursor", b.style("cursor")),
        w({ type: "brushstart" }),
        v();
    }
    var o,
      a,
      l = N(n, "brushstart", "brush", "brushend"),
      c = null,
      f = null,
      s = [0, 0],
      h = [0, 0],
      p = !0,
      g = !0,
      d = Dl[0];
    return (
      (n.event = function (n) {
        n.each(function () {
          var n = l.of(this, arguments),
            t = { x: s, y: h, i: o, j: a },
            e = this.__chart__ || t;
          (this.__chart__ = t),
            El
              ? Ju.select(this)
                  .transition()
                  .each("start.brush", function () {
                    (o = e.i),
                      (a = e.j),
                      (s = e.x),
                      (h = e.y),
                      n({ type: "brushstart" });
                  })
                  .tween("brush:brush", function () {
                    var e = Mr(s, t.x),
                      r = Mr(h, t.y);
                    return (
                      (o = a = null),
                      function (i) {
                        (s = t.x = e(i)),
                          (h = t.y = r(i)),
                          n({ type: "brush", mode: "resize" });
                      }
                    );
                  })
                  .each("end.brush", function () {
                    (o = t.i),
                      (a = t.j),
                      n({ type: "brush", mode: "resize" }),
                      n({ type: "brushend" });
                  })
              : (n({ type: "brushstart" }),
                n({ type: "brush", mode: "resize" }),
                n({ type: "brushend" }));
        });
      }),
      (n.x = function (t) {
        return arguments.length ? ((c = t), (d = Dl[(!c << 1) | !f]), n) : c;
      }),
      (n.y = function (t) {
        return arguments.length ? ((f = t), (d = Dl[(!c << 1) | !f]), n) : f;
      }),
      (n.clamp = function (t) {
        return arguments.length
          ? (c && f
              ? ((p = !!t[0]), (g = !!t[1]))
              : c
              ? (p = !!t)
              : f && (g = !!t),
            n)
          : c && f
          ? [p, g]
          : c
          ? p
          : f
          ? g
          : null;
      }),
      (n.extent = function (t) {
        var e, r, i, u, l;
        return arguments.length
          ? (c &&
              ((e = t[0]),
              (r = t[1]),
              f && ((e = e[0]), (r = r[0])),
              (o = [e, r]),
              c.invert && ((e = c(e)), (r = c(r))),
              r < e && ((l = e), (e = r), (r = l)),
              (e == s[0] && r == s[1]) || (s = [e, r])),
            f &&
              ((i = t[0]),
              (u = t[1]),
              c && ((i = i[1]), (u = u[1])),
              (a = [i, u]),
              f.invert && ((i = f(i)), (u = f(u))),
              u < i && ((l = i), (i = u), (u = l)),
              (i == h[0] && u == h[1]) || (h = [i, u])),
            n)
          : (c &&
              (o
                ? ((e = o[0]), (r = o[1]))
                : ((e = s[0]),
                  (r = s[1]),
                  c.invert && ((e = c.invert(e)), (r = c.invert(r))),
                  r < e && ((l = e), (e = r), (r = l)))),
            f &&
              (a
                ? ((i = a[0]), (u = a[1]))
                : ((i = h[0]),
                  (u = h[1]),
                  f.invert && ((i = f.invert(i)), (u = f.invert(u))),
                  u < i && ((l = i), (i = u), (u = l)))),
            c && f
              ? [
                  [e, i],
                  [r, u],
                ]
              : c
              ? [e, r]
              : f && [i, u]);
      }),
      (n.clear = function () {
        return n.empty() || ((s = [0, 0]), (h = [0, 0]), (o = a = null)), n;
      }),
      (n.empty = function () {
        return (!!c && s[0] == s[1]) || (!!f && h[0] == h[1]);
      }),
      Ju.rebind(n, l, "on")
    );
  };
  var Rl = {
      n: "ns-resize",
      e: "ew-resize",
      s: "ns-resize",
      w: "ew-resize",
      nw: "nwse-resize",
      ne: "nesw-resize",
      se: "nwse-resize",
      sw: "nesw-resize",
    },
    Dl = [
      ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
      ["e", "w"],
      ["n", "s"],
      [],
    ],
    Pl = (ta.format = aa.timeFormat),
    jl = Pl.utc,
    Ul = jl("%Y-%m-%dT%H:%M:%S.%LZ");
  (Pl.iso =
    Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z")
      ? Vu
      : Ul),
    (Vu.parse = function (n) {
      var t = new Date(n);
      return isNaN(t) ? null : t;
    }),
    (Vu.toString = Ul.toString),
    (ta.second = Hn(
      function (n) {
        return new ea(1e3 * Math.floor(n / 1e3));
      },
      function (n, t) {
        n.setTime(n.getTime() + 1e3 * Math.floor(t));
      },
      function (n) {
        return n.getSeconds();
      }
    )),
    (ta.seconds = ta.second.range),
    (ta.seconds.utc = ta.second.utc.range),
    (ta.minute = Hn(
      function (n) {
        return new ea(6e4 * Math.floor(n / 6e4));
      },
      function (n, t) {
        n.setTime(n.getTime() + 6e4 * Math.floor(t));
      },
      function (n) {
        return n.getMinutes();
      }
    )),
    (ta.minutes = ta.minute.range),
    (ta.minutes.utc = ta.minute.utc.range),
    (ta.hour = Hn(
      function (n) {
        var t = n.getTimezoneOffset() / 60;
        return new ea(36e5 * (Math.floor(n / 36e5 - t) + t));
      },
      function (n, t) {
        n.setTime(n.getTime() + 36e5 * Math.floor(t));
      },
      function (n) {
        return n.getHours();
      }
    )),
    (ta.hours = ta.hour.range),
    (ta.hours.utc = ta.hour.utc.range),
    (ta.month = Hn(
      function (n) {
        return (n = ta.day(n)), n.setDate(1), n;
      },
      function (n, t) {
        n.setMonth(n.getMonth() + t);
      },
      function (n) {
        return n.getMonth();
      }
    )),
    (ta.months = ta.month.range),
    (ta.months.utc = ta.month.utc.range);
  var Fl = [
      1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5,
      864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6,
    ],
    Hl = [
      [ta.second, 1],
      [ta.second, 5],
      [ta.second, 15],
      [ta.second, 30],
      [ta.minute, 1],
      [ta.minute, 5],
      [ta.minute, 15],
      [ta.minute, 30],
      [ta.hour, 1],
      [ta.hour, 3],
      [ta.hour, 6],
      [ta.hour, 12],
      [ta.day, 1],
      [ta.day, 2],
      [ta.week, 1],
      [ta.month, 1],
      [ta.month, 3],
      [ta.year, 1],
    ],
    Ol = Pl.multi([
      [
        ".%L",
        function (n) {
          return n.getMilliseconds();
        },
      ],
      [
        ":%S",
        function (n) {
          return n.getSeconds();
        },
      ],
      [
        "%I:%M",
        function (n) {
          return n.getMinutes();
        },
      ],
      [
        "%I %p",
        function (n) {
          return n.getHours();
        },
      ],
      [
        "%a %d",
        function (n) {
          return n.getDay() && 1 != n.getDate();
        },
      ],
      [
        "%b %d",
        function (n) {
          return 1 != n.getDate();
        },
      ],
      [
        "%B",
        function (n) {
          return n.getMonth();
        },
      ],
      ["%Y", Ct],
    ]),
    Yl = {
      range: function (n, t, e) {
        return Ju.range(Math.ceil(n / e) * e, +t, e).map($u);
      },
      floor: m,
      ceil: m,
    };
  (Hl.year = ta.year),
    (ta.scale = function () {
      return Xu(Ju.scale.linear(), Hl, Ol);
    });
  var Il = Hl.map(function (n) {
      return [n[0].utc, n[1]];
    }),
    Zl = jl.multi([
      [
        ".%L",
        function (n) {
          return n.getUTCMilliseconds();
        },
      ],
      [
        ":%S",
        function (n) {
          return n.getUTCSeconds();
        },
      ],
      [
        "%I:%M",
        function (n) {
          return n.getUTCMinutes();
        },
      ],
      [
        "%I %p",
        function (n) {
          return n.getUTCHours();
        },
      ],
      [
        "%a %d",
        function (n) {
          return n.getUTCDay() && 1 != n.getUTCDate();
        },
      ],
      [
        "%b %d",
        function (n) {
          return 1 != n.getUTCDate();
        },
      ],
      [
        "%B",
        function (n) {
          return n.getUTCMonth();
        },
      ],
      ["%Y", Ct],
    ]);
  (Il.year = ta.year.utc),
    (ta.scale.utc = function () {
      return Xu(Ju.scale.linear(), Il, Zl);
    }),
    (Ju.text = An(function (n) {
      return n.responseText;
    })),
    (Ju.json = function (n, t) {
      return Cn(n, "application/json", Bu, t);
    }),
    (Ju.html = function (n, t) {
      return Cn(n, "text/html", Wu, t);
    }),
    (Ju.xml = An(function (n) {
      return n.responseXML;
    })),
    "function" == typeof define && define.amd
      ? define(Ju)
      : "object" == typeof module && module.exports && (module.exports = Ju),
    (this.d3 = Ju);
})();
