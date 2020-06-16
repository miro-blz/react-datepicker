"use strict";
function e(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(exports, "__esModule", { value: !0 });
var t = e(require("react"));
require("prop-types");
var r = e(require("classnames")),
  n = e(require("date-fns/isDate")),
  o = e(require("date-fns/isValid")),
  a = e(require("date-fns/format")),
  s = e(require("date-fns/addMinutes")),
  i = e(require("date-fns/addHours")),
  p = e(require("date-fns/addDays")),
  c = e(require("date-fns/addWeeks")),
  l = e(require("date-fns/addMonths")),
  d = e(require("date-fns/addYears"));
require("date-fns/subMinutes"), require("date-fns/subHours");
var u = e(require("date-fns/subDays")),
  h = e(require("date-fns/subWeeks")),
  m = e(require("date-fns/subMonths")),
  f = e(require("date-fns/subYears")),
  v = e(require("date-fns/getSeconds")),
  y = e(require("date-fns/getMinutes")),
  D = e(require("date-fns/getHours")),
  w = e(require("date-fns/getDay")),
  k = e(require("date-fns/getDate")),
  g = e(require("date-fns/getWeek")),
  C = e(require("date-fns/getMonth")),
  b = e(require("date-fns/getQuarter")),
  _ = e(require("date-fns/getYear")),
  S = e(require("date-fns/getTime")),
  M = e(require("date-fns/setSeconds")),
  P = e(require("date-fns/setMinutes")),
  E = e(require("date-fns/setHours")),
  N = e(require("date-fns/setMonth")),
  x = e(require("date-fns/setQuarter")),
  O = e(require("date-fns/setYear")),
  Y = e(require("date-fns/min")),
  T = e(require("date-fns/max")),
  I = e(require("date-fns/differenceInCalendarDays")),
  L = e(require("date-fns/differenceInCalendarMonths"));
require("date-fns/differenceInCalendarWeeks");
var F = e(require("date-fns/differenceInCalendarYears")),
  q = e(require("date-fns/startOfDay")),
  R = e(require("date-fns/startOfWeek")),
  W = e(require("date-fns/startOfMonth")),
  A = e(require("date-fns/startOfQuarter")),
  B = e(require("date-fns/startOfYear")),
  j = e(require("date-fns/endOfDay"));
require("date-fns/endOfWeek"), require("date-fns/endOfMonth");
var K = e(require("date-fns/isEqual")),
  H = e(require("date-fns/isSameDay")),
  Q = e(require("date-fns/isSameMonth")),
  V = e(require("date-fns/isSameYear")),
  U = e(require("date-fns/isSameQuarter")),
  $ = e(require("date-fns/isAfter")),
  z = e(require("date-fns/isBefore")),
  G = e(require("date-fns/isWithinInterval")),
  J = e(require("date-fns/toDate")),
  X = e(require("date-fns/parse")),
  Z = e(require("date-fns/parseISO")),
  ee = e(require("react-onclickoutside")),
  te = require("react-popper"),
  re = e(require("react-dom"));
function ne(e) {
  return (ne =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function(e) {
          return typeof e;
        }
      : function(e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function oe(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ae(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function se(e, t, r) {
  return t && ae(e.prototype, t), r && ae(e, r), e;
}
function ie(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = r),
    e
  );
}
function pe() {
  return (pe =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
function ce(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ce(Object(r), !0).forEach(function(t) {
          ie(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ce(Object(r)).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
  }
  return e;
}
function de(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 }
  })),
    t && he(e, t);
}
function ue(e) {
  return (ue = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function he(e, t) {
  return (he =
    Object.setPrototypeOf ||
    function(e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function me(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function fe(e, t) {
  return !t || ("object" != typeof t && "function" != typeof t) ? me(e) : t;
}
function ve(e) {
  var t = (function() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function() {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  })();
  return function() {
    var r,
      n = ue(e);
    if (t) {
      var o = ue(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return fe(this, r);
  };
}
function ye(e, t) {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}
function De(e, t) {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}
var we = {
    p: De,
    P: function(e, t) {
      var r,
        n = e.match(/(P+)(p+)?/),
        o = n[1],
        a = n[2];
      if (!a) return ye(e, t);
      switch (o) {
        case "P":
          r = t.dateTime({ width: "short" });
          break;
        case "PP":
          r = t.dateTime({ width: "medium" });
          break;
        case "PPP":
          r = t.dateTime({ width: "long" });
          break;
        case "PPPP":
        default:
          r = t.dateTime({ width: "full" });
      }
      return r.replace("{{date}}", ye(o, t)).replace("{{time}}", De(a, t));
    }
  },
  ke = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function ge(e) {
  var t = e
    ? "string" == typeof e || e instanceof String
      ? Z(e)
      : J(e)
    : new Date();
  return be(t) ? t : null;
}
function Ce(e, t, r, n) {
  var o = null,
    s = We(r) || Re(),
    i = !0;
  return Array.isArray(t)
    ? (t.forEach(function(t) {
        var r = X(e, t, new Date(), { locale: s });
        n && (i = be(r) && e === a(r, t, { awareOfUnicodeTokens: !0 })),
          be(r) && i && (o = r);
      }),
      o)
    : ((o = X(e, t, new Date(), { locale: s })),
      n
        ? (i = be(o) && e === a(o, t, { awareOfUnicodeTokens: !0 }))
        : be(o) ||
          ((t = t
            .match(ke)
            .map(function(e) {
              var t = e[0];
              return "p" === t || "P" === t
                ? s
                  ? (0, we[t])(e, s.formatLong)
                  : t
                : e;
            })
            .join("")),
          e.length > 0 && (o = X(e, t.slice(0, e.length), new Date())),
          be(o) || (o = new Date(e))),
      be(o) && i ? o : null);
}
function be(e) {
  return o(e) && $(e, new Date("1/1/1000"));
}
function _e(e, t, r) {
  if ("en" === r) return a(e, t, { awareOfUnicodeTokens: !0 });
  var n = We(r);
  return (
    r &&
      !n &&
      console.warn(
        'A locale object was not found for the provided string ["'.concat(
          r,
          '"].'
        )
      ),
    !n && Re() && We(Re()) && (n = We(Re())),
    a(e, t, { locale: n || null, awareOfUnicodeTokens: !0 })
  );
}
function Se(e, t) {
  var r = t.hour,
    n = void 0 === r ? 0 : r,
    o = t.minute,
    a = void 0 === o ? 0 : o,
    s = t.second;
  return E(P(M(e, void 0 === s ? 0 : s), a), n);
}
function Me(e, t) {
  var r = (t && We(t)) || (Re() && We(Re()));
  return g(e, r ? { locale: r } : null);
}
function Pe(e, t) {
  return _e(e, "ddd", t);
}
function Ee(e) {
  return q(e);
}
function Ne(e, t) {
  var r = We(t || Re());
  return R(e, { locale: r });
}
function xe(e) {
  return W(e);
}
function Oe(e) {
  return A(e);
}
function Ye(e, t) {
  return e && t ? V(e, t) : !e && !t;
}
function Te(e, t) {
  return e && t ? Q(e, t) : !e && !t;
}
function Ie(e, t) {
  return e && t ? U(e, t) : !e && !t;
}
function Le(e, t) {
  return e && t ? H(e, t) : !e && !t;
}
function Fe(e, t) {
  return e && t ? K(e, t) : !e && !t;
}
function qe(e, t, r) {
  var n,
    o = q(t),
    a = j(r);
  try {
    n = G(e, { start: o, end: a });
  } catch (e) {
    n = !1;
  }
  return n;
}
function Re() {
  return ("undefined" != typeof window ? window : global).__localeId__;
}
function We(e) {
  if ("string" == typeof e) {
    var t = "undefined" != typeof window ? window : global;
    return t.__localeData__ ? t.__localeData__[e] : null;
  }
  return e;
}
function Ae(e, t) {
  return _e(N(ge(), e), "LLLL", t);
}
function Be(e, t) {
  return _e(N(ge(), e), "LLL", t);
}
function je(e, t) {
  return _e(x(ge(), e), "QQQ", t);
}
function Ke(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    o = t.excludeDates,
    a = t.includeDates,
    s = t.filterDate;
  return (
    ze(e, { minDate: r, maxDate: n }) ||
    (o &&
      o.some(function(t) {
        return Le(e, t);
      })) ||
    (a &&
      !a.some(function(t) {
        return Le(e, t);
      })) ||
    (s && !s(ge(e))) ||
    !1
  );
}
function He(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.excludeDates;
  return (
    (r &&
      r.some(function(t) {
        return Le(e, t);
      })) ||
    !1
  );
}
function Qe(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    o = t.excludeDates,
    a = t.includeDates,
    s = t.filterDate;
  return (
    ze(e, { minDate: r, maxDate: n }) ||
    (o &&
      o.some(function(t) {
        return Te(e, t);
      })) ||
    (a &&
      !a.some(function(t) {
        return Te(e, t);
      })) ||
    (s && !s(ge(e))) ||
    !1
  );
}
function Ve(e, t, r, n) {
  var o = _(e),
    a = C(e),
    s = _(t),
    i = C(t),
    p = _(n);
  return o === s && o === p
    ? a <= r && r <= i
    : o < s
    ? (p === o && a <= r) || (p === s && i >= r) || (p < s && p > o)
    : void 0;
}
function Ue(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    o = t.excludeDates,
    a = t.includeDates,
    s = t.filterDate;
  return (
    ze(e, { minDate: r, maxDate: n }) ||
    (o &&
      o.some(function(t) {
        return Ie(e, t);
      })) ||
    (a &&
      !a.some(function(t) {
        return Ie(e, t);
      })) ||
    (s && !s(ge(e))) ||
    !1
  );
}
function $e(e, t, r, n) {
  var o = _(e),
    a = b(e),
    s = _(t),
    i = b(t),
    p = _(n);
  return o === s && o === p
    ? a <= r && r <= i
    : o < s
    ? (p === o && a <= r) || (p === s && i >= r) || (p < s && p > o)
    : void 0;
}
function ze(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate;
  return (r && I(e, r) < 0) || (n && I(e, n) > 0);
}
function Ge(e, t) {
  for (var r = t.length, n = 0; n < r; n++)
    if (D(t[n]) === D(e) && y(t[n]) === y(e)) return !0;
  return !1;
}
function Je(e, t) {
  var r = t.minTime,
    n = t.maxTime;
  if (!r || !n) throw new Error("Both minTime and maxTime props required");
  var o,
    a = ge(),
    s = E(P(a, y(e)), D(e)),
    i = E(P(a, y(r)), D(r)),
    p = E(P(a, y(n)), D(n));
  try {
    o = !G(s, { start: i, end: p });
  } catch (e) {
    o = !1;
  }
  return o;
}
function Xe(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.includeDates,
    o = m(e, 1);
  return (
    (r && L(r, o) > 0) ||
    (n &&
      n.every(function(e) {
        return L(e, o) > 0;
      })) ||
    !1
  );
}
function Ze(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.maxDate,
    n = t.includeDates,
    o = l(e, 1);
  return (
    (r && L(o, r) > 0) ||
    (n &&
      n.every(function(e) {
        return L(o, e) > 0;
      })) ||
    !1
  );
}
function et(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.includeDates,
    o = f(e, 1);
  return (
    (r && F(r, o) > 0) ||
    (n &&
      n.every(function(e) {
        return F(e, o) > 0;
      })) ||
    !1
  );
}
function tt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.maxDate,
    n = t.includeDates,
    o = d(e, 1);
  return (
    (r && F(o, r) > 0) ||
    (n &&
      n.every(function(e) {
        return F(o, e) > 0;
      })) ||
    !1
  );
}
function rt(e) {
  var t = e.minDate,
    r = e.includeDates;
  if (r && t) {
    var n = r.filter(function(e) {
      return I(e, t) >= 0;
    });
    return Y(n);
  }
  return r ? Y(r) : t;
}
function nt(e) {
  var t = e.maxDate,
    r = e.includeDates;
  if (r && t) {
    var n = r.filter(function(e) {
      return I(e, t) <= 0;
    });
    return T(n);
  }
  return r ? T(r) : t;
}
function ot() {
  for (
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "react-datepicker__day--highlighted",
      r = new Map(),
      o = 0,
      a = e.length;
    o < a;
    o++
  ) {
    var s = e[o];
    if (n(s)) {
      var i = _e(s, "MM.dd.yyyy"),
        p = r.get(i) || [];
      p.includes(t) || (p.push(t), r.set(i, p));
    } else if ("object" === ne(s)) {
      var c = Object.keys(s),
        l = c[0],
        d = s[c[0]];
      if ("string" == typeof l && d.constructor === Array)
        for (var u = 0, h = d.length; u < h; u++) {
          var m = _e(d[u], "MM.dd.yyyy"),
            f = r.get(m) || [];
          f.includes(l) || (f.push(l), r.set(m, f));
        }
    }
  }
  return r;
}
function at(e, t, r, n, o) {
  for (var a = o.length, p = [], c = 0; c < a; c++) {
    var l = s(i(e, D(o[c])), y(o[c])),
      d = s(e, (r + 1) * n);
    ($(l, t) || Fe(l, t)) && z(l, d) && p.push(o[c]);
  }
  return p;
}
function st(e) {
  return e < 10 ? "0".concat(e) : "".concat(e);
}
function it(e, t, r, n) {
  for (var o = [], a = 0; a < 2 * t + 1; a++) {
    var s = e + t - a,
      i = !0;
    r && (i = _(r) <= s), n && i && (i = _(n) >= s), i && o.push(s);
  }
  return o;
}
var pt = ee(
    (function(e) {
      de(o, t.Component);
      var n = ve(o);
      function o(e) {
        var r;
        oe(this, o),
          ie(me((r = n.call(this, e))), "renderOptions", function() {
            var e = r.props.year,
              n = r.state.yearsList.map(function(n) {
                return t.createElement(
                  "div",
                  {
                    className:
                      e === n
                        ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                        : "react-datepicker__year-option",
                    key: n,
                    onClick: r.onChange.bind(me(r), n)
                  },
                  e === n
                    ? t.createElement(
                        "span",
                        {
                          className: "react-datepicker__year-option--selected"
                        },
                        "✓"
                      )
                    : "",
                  n
                );
              }),
              o = r.props.minDate ? _(r.props.minDate) : null,
              a = r.props.maxDate ? _(r.props.maxDate) : null;
            return (
              (a &&
                r.state.yearsList.find(function(e) {
                  return e === a;
                })) ||
                n.unshift(
                  t.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      key: "upcoming",
                      onClick: r.incrementYears
                    },
                    t.createElement("a", {
                      className:
                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"
                    })
                  )
                ),
              (o &&
                r.state.yearsList.find(function(e) {
                  return e === o;
                })) ||
                n.push(
                  t.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      key: "previous",
                      onClick: r.decrementYears
                    },
                    t.createElement("a", {
                      className:
                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"
                    })
                  )
                ),
              n
            );
          }),
          ie(me(r), "onChange", function(e) {
            r.props.onChange(e);
          }),
          ie(me(r), "handleClickOutside", function() {
            r.props.onCancel();
          }),
          ie(me(r), "shiftYears", function(e) {
            var t = r.state.yearsList.map(function(t) {
              return t + e;
            });
            r.setState({ yearsList: t });
          }),
          ie(me(r), "incrementYears", function() {
            return r.shiftYears(1);
          }),
          ie(me(r), "decrementYears", function() {
            return r.shiftYears(-1);
          });
        var a = e.yearDropdownItemNumber,
          s = e.scrollableYearDropdown,
          i = a || (s ? 10 : 5);
        return (
          (r.state = {
            yearsList: it(r.props.year, i, r.props.minDate, r.props.maxDate)
          }),
          r
        );
      }
      return (
        se(o, [
          {
            key: "render",
            value: function() {
              var e = r({
                "react-datepicker__year-dropdown": !0,
                "react-datepicker__year-dropdown--scrollable": this.props
                  .scrollableYearDropdown
              });
              return t.createElement(
                "div",
                { className: e },
                this.renderOptions()
              );
            }
          }
        ]),
        o
      );
    })()
  ),
  ct = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n() {
      var e;
      oe(this, n);
      for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s];
      return (
        ie(me((e = r.call.apply(r, [this].concat(a)))), "state", {
          dropdownVisible: !1
        }),
        ie(me(e), "renderSelectOptions", function() {
          for (
            var r = e.props.minDate ? _(e.props.minDate) : 1900,
              n = e.props.maxDate ? _(e.props.maxDate) : 2100,
              o = [],
              a = r;
            a <= n;
            a++
          )
            o.push(t.createElement("option", { key: a, value: a }, a));
          return o;
        }),
        ie(me(e), "onSelectChange", function(t) {
          e.onChange(t.target.value);
        }),
        ie(me(e), "renderSelectMode", function() {
          return t.createElement(
            "select",
            {
              value: e.props.year,
              className: "react-datepicker__year-select",
              onChange: e.onSelectChange
            },
            e.renderSelectOptions()
          );
        }),
        ie(me(e), "renderReadView", function(r) {
          return t.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
              className: "react-datepicker__year-read-view",
              onClick: function(t) {
                return e.toggleDropdown(t);
              }
            },
            t.createElement("span", {
              className: "react-datepicker__year-read-view--down-arrow"
            }),
            t.createElement(
              "span",
              { className: "react-datepicker__year-read-view--selected-year" },
              e.props.year
            )
          );
        }),
        ie(me(e), "renderDropdown", function() {
          return t.createElement(pt, {
            key: "dropdown",
            year: e.props.year,
            onChange: e.onChange,
            onCancel: e.toggleDropdown,
            minDate: e.props.minDate,
            maxDate: e.props.maxDate,
            scrollableYearDropdown: e.props.scrollableYearDropdown,
            yearDropdownItemNumber: e.props.yearDropdownItemNumber
          });
        }),
        ie(me(e), "renderScrollMode", function() {
          var t = e.state.dropdownVisible,
            r = [e.renderReadView(!t)];
          return t && r.unshift(e.renderDropdown()), r;
        }),
        ie(me(e), "onChange", function(t) {
          e.toggleDropdown(), t !== e.props.year && e.props.onChange(t);
        }),
        ie(me(e), "toggleDropdown", function(t) {
          e.setState({ dropdownVisible: !e.state.dropdownVisible }, function() {
            e.props.adjustDateOnChange && e.handleYearChange(e.props.date, t);
          });
        }),
        ie(me(e), "handleYearChange", function(t, r) {
          e.onSelect(t, r), e.setOpen();
        }),
        ie(me(e), "onSelect", function(t, r) {
          e.props.onSelect && e.props.onSelect(t, r);
        }),
        ie(me(e), "setOpen", function() {
          e.props.setOpen && e.props.setOpen(!0);
        }),
        e
      );
    }
    return (
      se(n, [
        {
          key: "render",
          value: function() {
            var e;
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode();
                break;
              case "select":
                e = this.renderSelectMode();
            }
            return t.createElement(
              "div",
              {
                className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                  this.props.dropdownMode
                )
              },
              e
            );
          }
        }
      ]),
      n
    );
  })(),
  lt = ee(
    (function(e) {
      de(n, t.Component);
      var r = ve(n);
      function n() {
        var e;
        oe(this, n);
        for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
          a[s] = arguments[s];
        return (
          ie(
            me((e = r.call.apply(r, [this].concat(a)))),
            "renderOptions",
            function() {
              return e.props.monthNames.map(function(r, n) {
                return t.createElement(
                  "div",
                  {
                    className:
                      e.props.month === n
                        ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                        : "react-datepicker__month-option",
                    key: r,
                    onClick: e.onChange.bind(me(e), n)
                  },
                  e.props.month === n
                    ? t.createElement(
                        "span",
                        {
                          className: "react-datepicker__month-option--selected"
                        },
                        "✓"
                      )
                    : "",
                  r
                );
              });
            }
          ),
          ie(me(e), "onChange", function(t) {
            return e.props.onChange(t);
          }),
          ie(me(e), "handleClickOutside", function() {
            return e.props.onCancel();
          }),
          e
        );
      }
      return (
        se(n, [
          {
            key: "render",
            value: function() {
              return t.createElement(
                "div",
                { className: "react-datepicker__month-dropdown" },
                this.renderOptions()
              );
            }
          }
        ]),
        n
      );
    })()
  ),
  dt = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n() {
      var e;
      oe(this, n);
      for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s];
      return (
        ie(me((e = r.call.apply(r, [this].concat(a)))), "state", {
          dropdownVisible: !1
        }),
        ie(me(e), "renderSelectOptions", function(e) {
          return e.map(function(e, r) {
            return t.createElement("option", { key: r, value: r }, e);
          });
        }),
        ie(me(e), "renderSelectMode", function(r) {
          return t.createElement(
            "select",
            {
              value: e.props.month,
              className: "react-datepicker__month-select",
              onChange: function(t) {
                return e.onChange(t.target.value);
              }
            },
            e.renderSelectOptions(r)
          );
        }),
        ie(me(e), "renderReadView", function(r, n) {
          return t.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
              className: "react-datepicker__month-read-view",
              onClick: e.toggleDropdown
            },
            t.createElement("span", {
              className: "react-datepicker__month-read-view--down-arrow"
            }),
            t.createElement(
              "span",
              {
                className: "react-datepicker__month-read-view--selected-month"
              },
              n[e.props.month]
            )
          );
        }),
        ie(me(e), "renderDropdown", function(r) {
          return t.createElement(lt, {
            key: "dropdown",
            month: e.props.month,
            monthNames: r,
            onChange: e.onChange,
            onCancel: e.toggleDropdown
          });
        }),
        ie(me(e), "renderScrollMode", function(t) {
          var r = e.state.dropdownVisible,
            n = [e.renderReadView(!r, t)];
          return r && n.unshift(e.renderDropdown(t)), n;
        }),
        ie(me(e), "onChange", function(t) {
          e.toggleDropdown(), t !== e.props.month && e.props.onChange(t);
        }),
        ie(me(e), "toggleDropdown", function() {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      se(n, [
        {
          key: "render",
          value: function() {
            var e,
              r = this,
              n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                this.props.useShortMonthInDropdown
                  ? function(e) {
                      return Be(e, r.props.locale);
                    }
                  : function(e) {
                      return Ae(e, r.props.locale);
                    }
              );
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode(n);
                break;
              case "select":
                e = this.renderSelectMode(n);
            }
            return t.createElement(
              "div",
              {
                className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                  this.props.dropdownMode
                )
              },
              e
            );
          }
        }
      ]),
      n
    );
  })();
function ut(e, t) {
  for (var r = [], n = xe(e), o = xe(t); !$(n, o); )
    r.push(ge(n)), (n = l(n, 1));
  return r;
}
var ht = ee(
    (function(e) {
      de(o, t.Component);
      var n = ve(o);
      function o(e) {
        var r;
        return (
          oe(this, o),
          ie(me((r = n.call(this, e))), "renderOptions", function() {
            return r.state.monthYearsList.map(function(e) {
              var n = S(e),
                o = Ye(r.props.date, e) && Te(r.props.date, e);
              return t.createElement(
                "div",
                {
                  className: o
                    ? "react-datepicker__month-year-option --selected_month-year"
                    : "react-datepicker__month-year-option",
                  key: n,
                  onClick: r.onChange.bind(me(r), n)
                },
                o
                  ? t.createElement(
                      "span",
                      {
                        className:
                          "react-datepicker__month-year-option--selected"
                      },
                      "✓"
                    )
                  : "",
                _e(e, r.props.dateFormat)
              );
            });
          }),
          ie(me(r), "onChange", function(e) {
            return r.props.onChange(e);
          }),
          ie(me(r), "handleClickOutside", function() {
            r.props.onCancel();
          }),
          (r.state = { monthYearsList: ut(r.props.minDate, r.props.maxDate) }),
          r
        );
      }
      return (
        se(o, [
          {
            key: "render",
            value: function() {
              var e = r({
                "react-datepicker__month-year-dropdown": !0,
                "react-datepicker__month-year-dropdown--scrollable": this.props
                  .scrollableMonthYearDropdown
              });
              return t.createElement(
                "div",
                { className: e },
                this.renderOptions()
              );
            }
          }
        ]),
        o
      );
    })()
  ),
  mt = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n() {
      var e;
      oe(this, n);
      for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s];
      return (
        ie(me((e = r.call.apply(r, [this].concat(a)))), "state", {
          dropdownVisible: !1
        }),
        ie(me(e), "renderSelectOptions", function() {
          for (
            var r = xe(e.props.minDate), n = xe(e.props.maxDate), o = [];
            !$(r, n);

          ) {
            var a = S(r);
            o.push(
              t.createElement(
                "option",
                { key: a, value: a },
                _e(r, e.props.dateFormat, e.props.locale)
              )
            ),
              (r = l(r, 1));
          }
          return o;
        }),
        ie(me(e), "onSelectChange", function(t) {
          e.onChange(t.target.value);
        }),
        ie(me(e), "renderSelectMode", function() {
          return t.createElement(
            "select",
            {
              value: S(xe(e.props.date)),
              className: "react-datepicker__month-year-select",
              onChange: e.onSelectChange
            },
            e.renderSelectOptions()
          );
        }),
        ie(me(e), "renderReadView", function(r) {
          var n = _e(e.props.date, e.props.dateFormat, e.props.locale);
          return t.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
              className: "react-datepicker__month-year-read-view",
              onClick: function(t) {
                return e.toggleDropdown(t);
              }
            },
            t.createElement("span", {
              className: "react-datepicker__month-year-read-view--down-arrow"
            }),
            t.createElement(
              "span",
              {
                className:
                  "react-datepicker__month-year-read-view--selected-month-year"
              },
              n
            )
          );
        }),
        ie(me(e), "renderDropdown", function() {
          return t.createElement(ht, {
            key: "dropdown",
            date: e.props.date,
            dateFormat: e.props.dateFormat,
            onChange: e.onChange,
            onCancel: e.toggleDropdown,
            minDate: e.props.minDate,
            maxDate: e.props.maxDate,
            scrollableMonthYearDropdown: e.props.scrollableMonthYearDropdown
          });
        }),
        ie(me(e), "renderScrollMode", function() {
          var t = e.state.dropdownVisible,
            r = [e.renderReadView(!t)];
          return t && r.unshift(e.renderDropdown()), r;
        }),
        ie(me(e), "onChange", function(t) {
          e.toggleDropdown();
          var r = ge(parseInt(t));
          (Ye(e.props.date, r) && Te(e.props.date, r)) || e.props.onChange(r);
        }),
        ie(me(e), "toggleDropdown", function() {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      se(n, [
        {
          key: "render",
          value: function() {
            var e;
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode();
                break;
              case "select":
                e = this.renderSelectMode();
            }
            return t.createElement(
              "div",
              {
                className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                  this.props.dropdownMode
                )
              },
              e
            );
          }
        }
      ]),
      n
    );
  })(),
  ft = (function(e) {
    de(o, t.Component);
    var n = ve(o);
    function o() {
      var e;
      oe(this, o);
      for (var a = arguments.length, s = new Array(a), i = 0; i < a; i++)
        s[i] = arguments[i];
      return (
        ie(me((e = n.call.apply(n, [this].concat(s)))), "dayEl", t.createRef()),
        ie(me(e), "handleClick", function(t) {
          !e.isDisabled() && e.props.onClick && e.props.onClick(t);
        }),
        ie(me(e), "handleMouseEnter", function(t) {
          !e.isDisabled() && e.props.onMouseEnter && e.props.onMouseEnter(t);
        }),
        ie(me(e), "handleOnKeyDown", function(t) {
          " " === t.key && (t.preventDefault(), (t.key = "Enter")),
            e.props.handleOnKeyDown(t);
        }),
        ie(me(e), "isSameDay", function(t) {
          return Le(e.props.day, t);
        }),
        ie(me(e), "isKeyboardSelected", function() {
          return (
            !e.props.disabledKeyboardNavigation &&
            !e.props.inline &&
            !e.isSameDay(e.props.selected) &&
            e.isSameDay(e.props.preSelection)
          );
        }),
        ie(me(e), "isDisabled", function() {
          return Ke(e.props.day, e.props);
        }),
        ie(me(e), "isExcluded", function() {
          return He(e.props.day, e.props);
        }),
        ie(me(e), "getHighLightedClass", function(t) {
          var r = e.props,
            n = r.day,
            o = r.highlightDates;
          if (!o) return !1;
          var a = _e(n, "MM.dd.yyyy");
          return o.get(a);
        }),
        ie(me(e), "isInRange", function() {
          var t = e.props,
            r = t.day,
            n = t.startDate,
            o = t.endDate;
          return !(!n || !o) && qe(r, n, o);
        }),
        ie(me(e), "isInSelectingRange", function() {
          var t = e.props,
            r = t.day,
            n = t.selectsStart,
            o = t.selectsEnd,
            a = t.selectingDate,
            s = t.startDate,
            i = t.endDate;
          return (
            !((!n && !o) || !a || e.isDisabled()) &&
            (n && i && (z(a, i) || Fe(a, i))
              ? qe(r, a, i)
              : !(!o || !s || (!$(a, s) && !Fe(a, s))) && qe(r, s, a))
          );
        }),
        ie(me(e), "isSelectingRangeStart", function() {
          if (!e.isInSelectingRange()) return !1;
          var t = e.props,
            r = t.day,
            n = t.selectingDate,
            o = t.startDate;
          return Le(r, t.selectsStart ? n : o);
        }),
        ie(me(e), "isSelectingRangeEnd", function() {
          if (!e.isInSelectingRange()) return !1;
          var t = e.props,
            r = t.day,
            n = t.selectingDate,
            o = t.endDate;
          return Le(r, t.selectsEnd ? n : o);
        }),
        ie(me(e), "isRangeStart", function() {
          var t = e.props,
            r = t.day,
            n = t.startDate,
            o = t.endDate;
          return !(!n || !o) && Le(n, r);
        }),
        ie(me(e), "isRangeEnd", function() {
          var t = e.props,
            r = t.day,
            n = t.startDate,
            o = t.endDate;
          return !(!n || !o) && Le(o, r);
        }),
        ie(me(e), "isWeekend", function() {
          var t = w(e.props.day);
          return 0 === t || 6 === t;
        }),
        ie(me(e), "isOutsideMonth", function() {
          return void 0 !== e.props.month && e.props.month !== C(e.props.day);
        }),
        ie(me(e), "getClassNames", function(t) {
          var n = e.props.dayClassName ? e.props.dayClassName(t) : void 0;
          return r(
            "react-datepicker__day",
            n,
            "react-datepicker__day--" + Pe(e.props.day),
            {
              "react-datepicker__day--disabled": e.isDisabled(),
              "react-datepicker__day--excluded": e.isExcluded(),
              "react-datepicker__day--selected": e.isSameDay(e.props.selected),
              "react-datepicker__day--keyboard-selected": e.isKeyboardSelected(),
              "react-datepicker__day--range-start": e.isRangeStart(),
              "react-datepicker__day--range-end": e.isRangeEnd(),
              "react-datepicker__day--in-range": e.isInRange(),
              "react-datepicker__day--in-selecting-range": e.isInSelectingRange(),
              "react-datepicker__day--selecting-range-start": e.isSelectingRangeStart(),
              "react-datepicker__day--selecting-range-end": e.isSelectingRangeEnd(),
              "react-datepicker__day--today": e.isSameDay(ge()),
              "react-datepicker__day--weekend": e.isWeekend(),
              "react-datepicker__day--outside-month": e.isOutsideMonth()
            },
            e.getHighLightedClass("react-datepicker__day--highlighted")
          );
        }),
        ie(me(e), "getAriaLabel", function() {
          var t = e.props,
            r = t.day,
            n = t.ariaLabelPrefixWhenEnabled,
            o = void 0 === n ? "Choose" : n,
            a = t.ariaLabelPrefixWhenDisabled,
            s = void 0 === a ? "Not available" : a,
            i = e.isDisabled() || e.isExcluded() ? s : o;
          return "".concat(i, " ").concat(_e(r, "PPPP"));
        }),
        ie(me(e), "getTabIndex", function(t, r) {
          var n = t || e.props.selected,
            o = r || e.props.preSelection;
          return e.isKeyboardSelected() || (e.isSameDay(n) && Le(o, n))
            ? 0
            : -1;
        }),
        ie(me(e), "handleFocusDay", function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = !1;
          0 === e.getTabIndex() &&
            !t.isInputFocused &&
            e.isSameDay(e.props.preSelection) &&
            ((document.activeElement &&
              document.activeElement !== document.body) ||
              (r = !0),
            e.props.containerRef &&
              e.props.containerRef.current &&
              e.props.containerRef.current.contains(document.activeElement) &&
              document.activeElement.classList.contains(
                "react-datepicker__day"
              ) &&
              (r = !0)),
            r && e.dayEl.current.focus({ preventScroll: !0 });
        }),
        ie(me(e), "render", function() {
          return t.createElement(
            "div",
            {
              ref: e.dayEl,
              className: e.getClassNames(e.props.day),
              onKeyDown: e.handleOnKeyDown,
              onClick: e.handleClick,
              onMouseEnter: e.handleMouseEnter,
              tabIndex: e.getTabIndex(),
              "aria-label": e.getAriaLabel(),
              role: "button",
              "aria-disabled": e.isDisabled()
            },
            e.props.renderDayContents
              ? e.props.renderDayContents(k(e.props.day), e.props.day)
              : k(e.props.day)
          );
        }),
        e
      );
    }
    return (
      se(o, [
        {
          key: "componentDidMount",
          value: function() {
            this.handleFocusDay();
          }
        },
        {
          key: "componentDidUpdate",
          value: function(e) {
            this.handleFocusDay(e);
          }
        }
      ]),
      o
    );
  })(),
  vt = (function(e) {
    de(o, t.Component);
    var n = ve(o);
    function o() {
      var e;
      oe(this, o);
      for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
        r[a] = arguments[a];
      return (
        ie(me((e = n.call.apply(n, [this].concat(r)))), "handleClick", function(
          t
        ) {
          e.props.onClick && e.props.onClick(t);
        }),
        e
      );
    }
    return (
      se(o, [
        {
          key: "render",
          value: function() {
            var e = this.props,
              n = e.weekNumber,
              o = e.ariaLabelPrefix,
              a = void 0 === o ? "week " : o,
              s = {
                "react-datepicker__week-number": !0,
                "react-datepicker__week-number--clickable": !!e.onClick
              };
            return t.createElement(
              "div",
              {
                className: r(s),
                "aria-label": "".concat(a, " ").concat(this.props.weekNumber),
                onClick: this.handleClick
              },
              n
            );
          }
        }
      ]),
      o
    );
  })(),
  yt = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n() {
      var e;
      oe(this, n);
      for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s];
      return (
        ie(
          me((e = r.call.apply(r, [this].concat(a)))),
          "handleDayClick",
          function(t, r) {
            e.props.onDayClick && e.props.onDayClick(t, r);
          }
        ),
        ie(me(e), "handleDayMouseEnter", function(t) {
          e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
        }),
        ie(me(e), "handleWeekClick", function(t, r, n) {
          "function" == typeof e.props.onWeekSelect &&
            e.props.onWeekSelect(t, r, n),
            e.props.shouldCloseOnSelect && e.props.setOpen(!1);
        }),
        ie(me(e), "formatWeekNumber", function(t) {
          return e.props.formatWeekNumber
            ? e.props.formatWeekNumber(t)
            : Me(t, e.props.locale);
        }),
        ie(me(e), "renderDays", function() {
          var r = Ne(e.props.day, e.props.locale),
            n = [],
            o = e.formatWeekNumber(r);
          if (e.props.showWeekNumber) {
            var a = e.props.onWeekSelect
              ? e.handleWeekClick.bind(me(e), r, o)
              : void 0;
            n.push(
              t.createElement(vt, {
                key: "W",
                weekNumber: o,
                onClick: a,
                ariaLabelPrefix: e.props.ariaLabelPrefix
              })
            );
          }
          return n.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function(n) {
              var o = p(r, n);
              return t.createElement(ft, {
                ariaLabelPrefixWhenEnabled: e.props.chooseDayAriaLabelPrefix,
                ariaLabelPrefixWhenDisabled: e.props.disabledDayAriaLabelPrefix,
                key: o.valueOf(),
                day: o,
                month: e.props.month,
                onClick: e.handleDayClick.bind(me(e), o),
                onMouseEnter: e.handleDayMouseEnter.bind(me(e), o),
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                excludeDates: e.props.excludeDates,
                includeDates: e.props.includeDates,
                inline: e.props.inline,
                highlightDates: e.props.highlightDates,
                selectingDate: e.props.selectingDate,
                filterDate: e.props.filterDate,
                preSelection: e.props.preSelection,
                selected: e.props.selected,
                selectsStart: e.props.selectsStart,
                selectsEnd: e.props.selectsEnd,
                startDate: e.props.startDate,
                endDate: e.props.endDate,
                dayClassName: e.props.dayClassName,
                renderDayContents: e.props.renderDayContents,
                disabledKeyboardNavigation: e.props.disabledKeyboardNavigation,
                handleOnKeyDown: e.props.handleOnKeyDown,
                isInputFocused: e.props.isInputFocused,
                containerRef: e.props.containerRef
              });
            })
          );
        }),
        e
      );
    }
    return (
      se(
        n,
        [
          {
            key: "render",
            value: function() {
              return t.createElement(
                "div",
                { className: "react-datepicker__week" },
                this.renderDays()
              );
            }
          }
        ],
        [
          {
            key: "defaultProps",
            get: function() {
              return { shouldCloseOnSelect: !0 };
            }
          }
        ]
      ),
      n
    );
  })(),
  Dt = (function(e) {
    de(o, t.Component);
    var n = ve(o);
    function o() {
      var e;
      oe(this, o);
      for (var a = arguments.length, s = new Array(a), i = 0; i < a; i++)
        s[i] = arguments[i];
      return (
        ie(
          me((e = n.call.apply(n, [this].concat(s)))),
          "handleDayClick",
          function(t, r) {
            e.props.onDayClick &&
              e.props.onDayClick(t, r, e.props.orderInDisplay);
          }
        ),
        ie(me(e), "handleDayMouseEnter", function(t) {
          e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
        }),
        ie(me(e), "handleMouseLeave", function() {
          e.props.onMouseLeave && e.props.onMouseLeave();
        }),
        ie(me(e), "isRangeStartMonth", function(t) {
          var r = e.props,
            n = r.day,
            o = r.startDate,
            a = r.endDate;
          return !(!o || !a) && Te(N(n, t), o);
        }),
        ie(me(e), "isRangeStartQuarter", function(t) {
          var r = e.props,
            n = r.day,
            o = r.startDate,
            a = r.endDate;
          return !(!o || !a) && Ie(x(n, t), o);
        }),
        ie(me(e), "isRangeEndMonth", function(t) {
          var r = e.props,
            n = r.day,
            o = r.startDate,
            a = r.endDate;
          return !(!o || !a) && Te(N(n, t), a);
        }),
        ie(me(e), "isRangeEndQuarter", function(t) {
          var r = e.props,
            n = r.day,
            o = r.startDate,
            a = r.endDate;
          return !(!o || !a) && Ie(x(n, t), a);
        }),
        ie(me(e), "isWeekInMonth", function(t) {
          var r = e.props.day,
            n = p(t, 6);
          return Te(t, r) || Te(n, r);
        }),
        ie(me(e), "renderWeeks", function() {
          for (
            var r = [],
              n = e.props.fixedHeight,
              o = Ne(xe(e.props.day), e.props.locale),
              a = 0,
              s = !1;
            r.push(
              t.createElement(yt, {
                ariaLabelPrefix: e.props.weekAriaLabelPrefix,
                chooseDayAriaLabelPrefix: e.props.chooseDayAriaLabelPrefix,
                disabledDayAriaLabelPrefix: e.props.disabledDayAriaLabelPrefix,
                key: a,
                day: o,
                month: C(e.props.day),
                onDayClick: e.handleDayClick,
                onDayMouseEnter: e.handleDayMouseEnter,
                onWeekSelect: e.props.onWeekSelect,
                formatWeekNumber: e.props.formatWeekNumber,
                locale: e.props.locale,
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                excludeDates: e.props.excludeDates,
                includeDates: e.props.includeDates,
                inline: e.props.inline,
                highlightDates: e.props.highlightDates,
                selectingDate: e.props.selectingDate,
                filterDate: e.props.filterDate,
                preSelection: e.props.preSelection,
                selected: e.props.selected,
                selectsStart: e.props.selectsStart,
                selectsEnd: e.props.selectsEnd,
                showWeekNumber: e.props.showWeekNumbers,
                startDate: e.props.startDate,
                endDate: e.props.endDate,
                dayClassName: e.props.dayClassName,
                setOpen: e.props.setOpen,
                shouldCloseOnSelect: e.props.shouldCloseOnSelect,
                disabledKeyboardNavigation: e.props.disabledKeyboardNavigation,
                renderDayContents: e.props.renderDayContents,
                handleOnKeyDown: e.props.handleOnKeyDown,
                isInputFocused: e.props.isInputFocused,
                containerRef: e.props.containerRef
              })
            ),
              !s;

          ) {
            a++, (o = c(o, 1));
            var i = n && a >= 6,
              p = !n && !e.isWeekInMonth(o);
            if (i || p) {
              if (!e.props.peekNextMonth) break;
              s = !0;
            }
          }
          return r;
        }),
        ie(me(e), "onMonthClick", function(t, r) {
          e.handleDayClick(xe(N(e.props.day, r)), t);
        }),
        ie(me(e), "onQuarterClick", function(t, r) {
          e.handleDayClick(Oe(x(e.props.day, r)), t);
        }),
        ie(me(e), "getMonthClassNames", function(t) {
          var n = e.props,
            o = n.day,
            a = n.startDate,
            s = n.endDate,
            i = n.selected,
            p = n.minDate,
            c = n.maxDate;
          return r(
            "react-datepicker__month-text",
            "react-datepicker__month-".concat(t),
            {
              "react-datepicker__month--disabled":
                (p || c) && Qe(N(o, t), e.props),
              "react-datepicker__month--selected": C(o) === t && _(o) === _(i),
              "react-datepicker__month--in-range": Ve(a, s, t, o),
              "react-datepicker__month--range-start": e.isRangeStartMonth(t),
              "react-datepicker__month--range-end": e.isRangeEndMonth(t)
            }
          );
        }),
        ie(me(e), "getQuarterClassNames", function(t) {
          var n = e.props,
            o = n.day,
            a = n.startDate,
            s = n.endDate,
            i = n.selected,
            p = n.minDate,
            c = n.maxDate;
          return r(
            "react-datepicker__quarter-text",
            "react-datepicker__quarter-".concat(t),
            {
              "react-datepicker__quarter--disabled":
                (p || c) && Ue(x(o, t), e.props),
              "react-datepicker__quarter--selected":
                b(o) === t && _(o) === _(i),
              "react-datepicker__quarter--in-range": $e(a, s, t, o),
              "react-datepicker__quarter--range-start": e.isRangeStartQuarter(
                t
              ),
              "react-datepicker__quarter--range-end": e.isRangeEndQuarter(t)
            }
          );
        }),
        ie(me(e), "renderMonths", function() {
          var r = e.props,
            n = r.showFullMonthYearPicker,
            o = r.showTwoColumnMonthYearPicker,
            a = r.locale;
          return (o
            ? [
                [0, 1],
                [2, 3],
                [4, 5],
                [6, 7],
                [8, 9],
                [10, 11]
              ]
            : [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [9, 10, 11]
              ]
          ).map(function(r, o) {
            return t.createElement(
              "div",
              { className: "react-datepicker__month-wrapper", key: o },
              r.map(function(r, o) {
                return t.createElement(
                  "div",
                  {
                    key: o,
                    onClick: function(t) {
                      e.onMonthClick(t, r);
                    },
                    className: e.getMonthClassNames(r)
                  },
                  n ? Ae(r, a) : Be(r, a)
                );
              })
            );
          });
        }),
        ie(me(e), "renderQuarters", function() {
          return t.createElement(
            "div",
            { className: "react-datepicker__quarter-wrapper" },
            [1, 2, 3, 4].map(function(r, n) {
              return t.createElement(
                "div",
                {
                  key: n,
                  onClick: function(t) {
                    e.onQuarterClick(t, r);
                  },
                  className: e.getQuarterClassNames(r)
                },
                je(r, e.props.locale)
              );
            })
          );
        }),
        ie(me(e), "getClassNames", function() {
          var t = e.props,
            n = t.selectingDate,
            o = t.selectsStart,
            a = t.selectsEnd,
            s = t.showMonthYearPicker,
            i = t.showQuarterYearPicker;
          return r(
            "react-datepicker__month",
            { "react-datepicker__month--selecting-range": n && (o || a) },
            { "react-datepicker__monthPicker": s },
            { "react-datepicker__quarterPicker": i }
          );
        }),
        e
      );
    }
    return (
      se(o, [
        {
          key: "render",
          value: function() {
            var e = this.props,
              r = e.showMonthYearPicker,
              n = e.showQuarterYearPicker,
              o = e.day,
              a = e.ariaLabelPrefix,
              s = void 0 === a ? "month " : a;
            return t.createElement(
              "div",
              {
                className: this.getClassNames(),
                onMouseLeave: this.handleMouseLeave,
                "aria-label": "".concat(s, " ").concat(_e(o, "yyyy-MM"))
              },
              r
                ? this.renderMonths()
                : n
                ? this.renderQuarters()
                : this.renderWeeks()
            );
          }
        }
      ]),
      o
    );
  })(),
  wt = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n() {
      var e;
      oe(this, n);
      for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
        a[i] = arguments[i];
      return (
        ie(me((e = r.call.apply(r, [this].concat(a)))), "state", {
          height: null
        }),
        ie(me(e), "handleClick", function(t) {
          ((e.props.minTime || e.props.maxTime) && Je(t, e.props)) ||
            (e.props.excludeTimes && Ge(t, e.props.excludeTimes)) ||
            (e.props.includeTimes && !Ge(t, e.props.includeTimes)) ||
            e.props.onChange(t);
        }),
        ie(me(e), "liClasses", function(t, r, n) {
          var o = [
            "react-datepicker__time-list-item",
            e.props.timeClassName ? e.props.timeClassName(t, r, n) : void 0
          ];
          return (
            e.props.selected &&
              r === D(t) &&
              n === y(t) &&
              o.push("react-datepicker__time-list-item--selected"),
            (((e.props.minTime || e.props.maxTime) && Je(t, e.props)) ||
              (e.props.excludeTimes && Ge(t, e.props.excludeTimes)) ||
              (e.props.includeTimes && !Ge(t, e.props.includeTimes))) &&
              o.push("react-datepicker__time-list-item--disabled"),
            e.props.injectTimes &&
              (60 * D(t) + y(t)) % e.props.intervals != 0 &&
              o.push("react-datepicker__time-list-item--injected"),
            o.join(" ")
          );
        }),
        ie(me(e), "renderTimes", function() {
          for (
            var r = [],
              n = e.props.format ? e.props.format : "p",
              o = e.props.intervals,
              a = e.props.selected || e.props.openToDate || ge(),
              i = D(a),
              p = y(a),
              c = Ee(ge()),
              l = 1440 / o,
              d =
                e.props.injectTimes &&
                e.props.injectTimes.sort(function(e, t) {
                  return e - t;
                }),
              u = [],
              h = 0;
            h < l;
            h++
          ) {
            var m = s(c, h * o);
            if ((r.push(m), d)) {
              var f = at(c, m, h, o, d);
              r = r.concat(f);
            }
            i === D(m) && u.push(m);
          }
          return r.map(function(r, o) {
            return t.createElement(
              "li",
              {
                key: o,
                onClick: e.handleClick.bind(me(e), r),
                className: e.liClasses(r, i, p),
                ref: function(t) {
                  i === D(r) &&
                    (p >= y(r)
                      ? (e.centerLi = t)
                      : e.centerLi ||
                        u.indexOf(r) !== u.length - 1 ||
                        (e.centerLi = t));
                }
              },
              _e(r, n, e.props.locale)
            );
          });
        }),
        e
      );
    }
    return (
      se(
        n,
        [
          {
            key: "componentDidMount",
            value: function() {
              (this.list.scrollTop = n.calcCenterPosition(
                this.props.monthRef
                  ? this.props.monthRef.clientHeight - this.header.clientHeight
                  : this.list.clientHeight,
                this.centerLi
              )),
                this.props.monthRef &&
                  this.header &&
                  this.setState({
                    height:
                      this.props.monthRef.clientHeight -
                      this.header.clientHeight
                  });
            }
          },
          {
            key: "render",
            value: function() {
              var e = this,
                r = this.state.height;
              return t.createElement(
                "div",
                {
                  className: "react-datepicker__time-container ".concat(
                    this.props.todayButton
                      ? "react-datepicker__time-container--with-today-button"
                      : ""
                  )
                },
                t.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__header react-datepicker__header--time",
                    ref: function(t) {
                      e.header = t;
                    }
                  },
                  t.createElement(
                    "div",
                    { className: "react-datepicker-time__header" },
                    this.props.timeCaption
                  )
                ),
                t.createElement(
                  "div",
                  { className: "react-datepicker__time" },
                  t.createElement(
                    "div",
                    { className: "react-datepicker__time-box" },
                    t.createElement(
                      "ul",
                      {
                        className: "react-datepicker__time-list",
                        ref: function(t) {
                          e.list = t;
                        },
                        style: r ? { height: r } : {}
                      },
                      this.renderTimes()
                    )
                  )
                )
              );
            }
          }
        ],
        [
          {
            key: "defaultProps",
            get: function() {
              return {
                intervals: 30,
                onTimeChange: function() {},
                todayButton: null,
                timeCaption: "Time"
              };
            }
          }
        ]
      ),
      n
    );
  })();
ie(wt, "calcCenterPosition", function(e, t) {
  return t.offsetTop - (e / 2 - t.clientHeight / 2);
});
var kt = (function(e) {
    de(o, t.Component);
    var n = ve(o);
    function o(e) {
      var t;
      return (
        oe(this, o),
        ie(me((t = n.call(this, e))), "handleYearClick", function(e, r) {
          t.props.onDayClick && t.props.onDayClick(e, r);
        }),
        ie(me(t), "onYearClick", function(e, r) {
          var n;
          t.handleYearClick(((n = O(t.props.date, r)), B(n)), e);
        }),
        t
      );
    }
    return (
      se(o, [
        {
          key: "render",
          value: function() {
            for (
              var e = this,
                n = [],
                o = this.props.date,
                a = function(a, s) {
                  n.push(
                    t.createElement(
                      "div",
                      {
                        onClick: function(t) {
                          e.onYearClick(t, a);
                        },
                        className: r("react-datepicker__year-container-text", {
                          "react-datepicker__year-container-text--selected":
                            a === _(o)
                        }),
                        key: a
                      },
                      a
                    )
                  );
                },
                s = _(o) - 11,
                i = 0;
              s <= _(o);
              s++, i++
            )
              a(s);
            return t.createElement(
              "div",
              { className: "react-datepicker__year-container" },
              n
            );
          }
        }
      ]),
      o
    );
  })(),
  gt = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n(e) {
      var o;
      return (
        oe(this, n),
        ie(me((o = r.call(this, e))), "onTimeChange", function(e) {
          o.setState({ time: e });
          var t = new Date();
          t.setHours(e.split(":")[0]),
            t.setMinutes(e.split(":")[1]),
            o.props.onChange(t);
        }),
        ie(me(o), "renderTimeInput", function() {
          var e = o.state.time,
            r = o.props,
            n = r.timeString,
            a = r.customTimeInput;
          return a
            ? t.cloneElement(a, { value: e, onChange: o.onTimeChange })
            : t.createElement("input", {
                type: "time",
                className: "react-datepicker-time__input",
                placeholder: "Time",
                name: "time-input",
                required: !0,
                value: e,
                onChange: function(e) {
                  o.onTimeChange(e.target.value || n);
                }
              });
        }),
        (o.state = { time: o.props.timeString }),
        o
      );
    }
    return (
      se(n, [
        {
          key: "render",
          value: function() {
            return t.createElement(
              "div",
              { className: "react-datepicker__input-time-container" },
              t.createElement(
                "div",
                { className: "react-datepicker-time__caption" },
                this.props.timeInputLabel
              ),
              t.createElement(
                "div",
                { className: "react-datepicker-time__input-container" },
                t.createElement(
                  "div",
                  { className: "react-datepicker-time__input" },
                  this.renderTimeInput()
                )
              )
            );
          }
        }
      ]),
      n
    );
  })();
function Ct(e) {
  var r = e.className,
    n = e.children,
    o = e.showPopperArrow,
    a = e.arrowProps,
    s = void 0 === a ? {} : a;
  return t.createElement(
    "div",
    { className: r },
    o &&
      t.createElement(
        "div",
        pe({ className: "react-datepicker__triangle" }, s)
      ),
    n
  );
}
var bt = [
    "react-datepicker__year-select",
    "react-datepicker__month-select",
    "react-datepicker__month-year-select"
  ],
  _t = (function(e) {
    de(o, t.Component);
    var n = ve(o);
    function o(e) {
      var a;
      return (
        oe(this, o),
        ie(me((a = n.call(this, e))), "handleClickOutside", function(e) {
          a.props.onClickOutside(e);
        }),
        ie(me(a), "setClickOutsideRef", function() {
          return a.containerRef.current;
        }),
        ie(me(a), "handleDropdownFocus", function(e) {
          (function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (e.className || "").split(/\s+/);
            return bt.some(function(e) {
              return t.indexOf(e) >= 0;
            });
          })(e.target) && a.props.onDropdownFocus();
        }),
        ie(me(a), "getDateInView", function() {
          var e = a.props,
            t = e.preSelection,
            r = e.selected,
            n = e.openToDate,
            o = rt(a.props),
            s = nt(a.props),
            i = ge(),
            p = n || r || t;
          return p || (o && z(i, o) ? o : s && $(i, s) ? s : i);
        }),
        ie(me(a), "increaseMonth", function() {
          a.setState(
            function(e) {
              var t = e.date;
              return { date: l(t, 1) };
            },
            function() {
              return a.handleMonthChange(a.state.date);
            }
          );
        }),
        ie(me(a), "decreaseMonth", function() {
          a.setState(
            function(e) {
              var t = e.date;
              return { date: m(t, 1) };
            },
            function() {
              return a.handleMonthChange(a.state.date);
            }
          );
        }),
        ie(me(a), "handleDayClick", function(e, t, r) {
          return a.props.onSelect(e, t, r);
        }),
        ie(me(a), "handleDayMouseEnter", function(e) {
          a.setState({ selectingDate: e }),
            a.props.onDayMouseEnter && a.props.onDayMouseEnter(e);
        }),
        ie(me(a), "handleMonthMouseLeave", function() {
          a.setState({ selectingDate: null }),
            a.props.onMonthMouseLeave && a.props.onMonthMouseLeave();
        }),
        ie(me(a), "handleYearChange", function(e) {
          a.props.onYearChange && a.props.onYearChange(e),
            a.props.setPreSelection && a.props.setPreSelection(e);
        }),
        ie(me(a), "handleMonthChange", function(e) {
          a.props.onMonthChange && a.props.onMonthChange(e),
            a.props.adjustDateOnChange &&
              (a.props.onSelect && a.props.onSelect(e),
              a.props.setOpen && a.props.setOpen(!0)),
            a.props.setPreSelection && a.props.setPreSelection(e);
        }),
        ie(me(a), "handleMonthYearChange", function(e) {
          a.handleYearChange(e), a.handleMonthChange(e);
        }),
        ie(me(a), "changeYear", function(e) {
          a.setState(
            function(t) {
              var r = t.date;
              return { date: O(r, e) };
            },
            function() {
              return a.handleYearChange(a.state.date);
            }
          );
        }),
        ie(me(a), "changeMonth", function(e) {
          a.setState(
            function(t) {
              var r = t.date;
              return { date: N(r, e) };
            },
            function() {
              return a.handleMonthChange(a.state.date);
            }
          );
        }),
        ie(me(a), "changeMonthYear", function(e) {
          a.setState(
            function(t) {
              var r = t.date;
              return { date: O(N(r, C(e)), _(e)) };
            },
            function() {
              return a.handleMonthYearChange(a.state.date);
            }
          );
        }),
        ie(me(a), "header", function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : a.state.date,
            n = Ne(e, a.props.locale),
            o = [];
          return (
            a.props.showWeekNumbers &&
              o.push(
                t.createElement(
                  "div",
                  { key: "W", className: "react-datepicker__day-name" },
                  a.props.weekLabel || "#"
                )
              ),
            o.concat(
              [0, 1, 2, 3, 4, 5, 6].map(function(e) {
                var o = p(n, e),
                  s = a.formatWeekday(o, a.props.locale),
                  i = a.props.weekDayClassName
                    ? a.props.weekDayClassName(o)
                    : void 0;
                return t.createElement(
                  "div",
                  { key: e, className: r("react-datepicker__day-name", i) },
                  s
                );
              })
            )
          );
        }),
        ie(me(a), "formatWeekday", function(e, t) {
          return a.props.formatWeekDay
            ? (function(e, t, r) {
                return t(_e(e, "EEEE", r));
              })(e, a.props.formatWeekDay, t)
            : a.props.useWeekdaysShort
            ? (function(e, t) {
                return _e(e, "EEE", t);
              })(e, t)
            : (function(e, t) {
                return _e(e, "EEEEEE", t);
              })(e, t);
        }),
        ie(me(a), "decreaseYear", function() {
          a.setState(
            function(e) {
              var t = e.date;
              return { date: f(t, a.props.showYearPicker ? 11 : 1) };
            },
            function() {
              return a.handleYearChange(a.state.date);
            }
          );
        }),
        ie(me(a), "renderPreviousButton", function() {
          if (!a.props.renderCustomHeader) {
            var e = a.props.showMonthYearPicker
              ? et(a.state.date, a.props)
              : Xe(a.state.date, a.props);
            if (
              (a.props.forceShowMonthNavigation ||
                a.props.showDisabledMonthNavigation ||
                !e) &&
              !a.props.showTimeSelectOnly
            ) {
              var r = [
                  "react-datepicker__navigation",
                  "react-datepicker__navigation--previous"
                ],
                n = a.decreaseMonth;
              (a.props.showMonthYearPicker ||
                a.props.showQuarterYearPicker ||
                a.props.showYearPicker) &&
                (n = a.decreaseYear),
                e &&
                  a.props.showDisabledMonthNavigation &&
                  (r.push("react-datepicker__navigation--previous--disabled"),
                  (n = null));
              var o =
                  a.props.showMonthYearPicker || a.props.showQuarterYearPicker,
                s = a.props,
                i = s.previousMonthAriaLabel,
                p = void 0 === i ? "Previous Month" : i,
                c = s.previousYearAriaLabel,
                l = void 0 === c ? "Previous Year" : c;
              return t.createElement(
                "button",
                {
                  type: "button",
                  className: r.join(" "),
                  onClick: n,
                  "aria-label": o ? l : p
                },
                o
                  ? a.props.previousYearButtonLabel
                  : a.props.previousMonthButtonLabel
              );
            }
          }
        }),
        ie(me(a), "increaseYear", function() {
          a.setState(
            function(e) {
              var t = e.date;
              return { date: d(t, a.props.showYearPicker ? 11 : 1) };
            },
            function() {
              return a.handleYearChange(a.state.date);
            }
          );
        }),
        ie(me(a), "renderNextButton", function() {
          if (!a.props.renderCustomHeader) {
            var e = a.props.showMonthYearPicker
              ? tt(a.state.date, a.props)
              : Ze(a.state.date, a.props);
            if (
              (a.props.forceShowMonthNavigation ||
                a.props.showDisabledMonthNavigation ||
                !e) &&
              !a.props.showTimeSelectOnly
            ) {
              var r = [
                "react-datepicker__navigation",
                "react-datepicker__navigation--next"
              ];
              a.props.showTimeSelect &&
                r.push("react-datepicker__navigation--next--with-time"),
                a.props.todayButton &&
                  r.push(
                    "react-datepicker__navigation--next--with-today-button"
                  );
              var n = a.increaseMonth;
              (a.props.showMonthYearPicker ||
                a.props.showQuarterYearPicker ||
                a.props.showYearPicker) &&
                (n = a.increaseYear),
                e &&
                  a.props.showDisabledMonthNavigation &&
                  (r.push("react-datepicker__navigation--next--disabled"),
                  (n = null));
              var o =
                  a.props.showMonthYearPicker || a.props.showQuarterYearPicker,
                s = a.props,
                i = s.nextMonthAriaLabel,
                p = void 0 === i ? "Next Month" : i,
                c = s.nextYearAriaLabel,
                l = void 0 === c ? "Next Year" : c;
              return t.createElement(
                "button",
                {
                  type: "button",
                  className: r.join(" "),
                  onClick: n,
                  "aria-label": o ? l : p
                },
                o ? a.props.nextYearButtonLabel : a.props.nextMonthButtonLabel
              );
            }
          }
        }),
        ie(me(a), "renderCurrentMonth", function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : a.state.date,
            r = ["react-datepicker__current-month"];
          return (
            a.props.showYearDropdown &&
              r.push("react-datepicker__current-month--hasYearDropdown"),
            a.props.showMonthDropdown &&
              r.push("react-datepicker__current-month--hasMonthDropdown"),
            a.props.showMonthYearDropdown &&
              r.push("react-datepicker__current-month--hasMonthYearDropdown"),
            t.createElement(
              "div",
              { className: r.join(" ") },
              _e(e, a.props.dateFormat, a.props.locale)
            )
          );
        }),
        ie(me(a), "renderYearDropdown", function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (a.props.showYearDropdown && !e)
            return t.createElement(ct, {
              adjustDateOnChange: a.props.adjustDateOnChange,
              date: a.state.date,
              onSelect: a.props.onSelect,
              setOpen: a.props.setOpen,
              dropdownMode: a.props.dropdownMode,
              onChange: a.changeYear,
              minDate: a.props.minDate,
              maxDate: a.props.maxDate,
              year: _(a.state.date),
              scrollableYearDropdown: a.props.scrollableYearDropdown,
              yearDropdownItemNumber: a.props.yearDropdownItemNumber
            });
        }),
        ie(me(a), "renderMonthDropdown", function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (a.props.showMonthDropdown && !e)
            return t.createElement(dt, {
              dropdownMode: a.props.dropdownMode,
              locale: a.props.locale,
              onChange: a.changeMonth,
              month: C(a.state.date),
              useShortMonthInDropdown: a.props.useShortMonthInDropdown
            });
        }),
        ie(me(a), "renderMonthYearDropdown", function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (a.props.showMonthYearDropdown && !e)
            return t.createElement(mt, {
              dropdownMode: a.props.dropdownMode,
              locale: a.props.locale,
              dateFormat: a.props.dateFormat,
              onChange: a.changeMonthYear,
              minDate: a.props.minDate,
              maxDate: a.props.maxDate,
              date: a.state.date,
              scrollableMonthYearDropdown: a.props.scrollableMonthYearDropdown
            });
        }),
        ie(me(a), "renderTodayButton", function() {
          if (a.props.todayButton && !a.props.showTimeSelectOnly)
            return t.createElement(
              "div",
              {
                className: "react-datepicker__today-button",
                onClick: function(e) {
                  return a.props.onSelect(q(ge()), e);
                }
              },
              a.props.todayButton
            );
        }),
        ie(me(a), "renderDefaultHeader", function(e) {
          var r = e.monthDate,
            n = e.i;
          return t.createElement(
            "div",
            { className: "react-datepicker__header" },
            a.renderCurrentMonth(r),
            t.createElement(
              "div",
              {
                className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                  a.props.dropdownMode
                ),
                onFocus: a.handleDropdownFocus
              },
              a.renderMonthDropdown(0 !== n),
              a.renderMonthYearDropdown(0 !== n),
              a.renderYearDropdown(0 !== n)
            ),
            t.createElement(
              "div",
              { className: "react-datepicker__day-names" },
              a.header(r)
            )
          );
        }),
        ie(me(a), "renderCustomHeader", function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = e.monthDate,
            n = e.i;
          if (0 !== n && void 0 !== n) return null;
          var o = Xe(a.state.date, a.props),
            s = Ze(a.state.date, a.props),
            i = et(a.state.date, a.props),
            p = tt(a.state.date, a.props),
            c =
              !a.props.showMonthYearPicker &&
              !a.props.showQuarterYearPicker &&
              !a.props.showYearPicker;
          return t.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker__header--custom",
              onFocus: a.props.onDropdownFocus
            },
            a.props.renderCustomHeader(
              le(
                le({}, a.state),
                {},
                {
                  changeMonth: a.changeMonth,
                  changeYear: a.changeYear,
                  decreaseMonth: a.decreaseMonth,
                  increaseMonth: a.increaseMonth,
                  decreaseYear: a.decreaseYear,
                  increaseYear: a.increaseYear,
                  prevMonthButtonDisabled: o,
                  nextMonthButtonDisabled: s,
                  prevYearButtonDisabled: i,
                  nextYearButtonDisabled: p
                }
              )
            ),
            c &&
              t.createElement(
                "div",
                { className: "react-datepicker__day-names" },
                a.header(r)
              )
          );
        }),
        ie(me(a), "renderYearHeader", function() {
          return t.createElement(
            "div",
            {
              className: "react-datepicker__header react-datepicker-year-header"
            },
            a.props.showYearPicker
              ? "".concat(_(a.state.date) - 11, " - ").concat(_(a.state.date))
              : _(a.state.date)
          );
        }),
        ie(me(a), "renderHeader", function(e) {
          switch (!0) {
            case void 0 !== a.props.renderCustomHeader:
              return a.renderCustomHeader(e);
            case a.props.showMonthYearPicker ||
              a.props.showQuarterYearPicker ||
              a.props.showYearPicker:
              return a.renderYearHeader(e);
            default:
              return a.renderDefaultHeader(e);
          }
        }),
        ie(me(a), "renderMonths", function() {
          if (!a.props.showTimeSelectOnly && !a.props.showYearPicker) {
            for (
              var e = [],
                r = a.props.showPreviousMonths ? a.props.monthsShown - 1 : 0,
                n = m(a.state.date, r),
                o = 0;
              o < a.props.monthsShown;
              ++o
            ) {
              var s = o - a.props.monthSelectedIn,
                i = l(n, s),
                p = "month-".concat(o);
              e.push(
                t.createElement(
                  "div",
                  {
                    key: p,
                    ref: function(e) {
                      a.monthContainer = e;
                    },
                    className: "react-datepicker__month-container"
                  },
                  a.renderHeader({ monthDate: i, i: o }),
                  t.createElement(Dt, {
                    chooseDayAriaLabelPrefix: a.props.chooseDayAriaLabelPrefix,
                    disabledDayAriaLabelPrefix:
                      a.props.disabledDayAriaLabelPrefix,
                    weekAriaLabelPrefix: a.props.weekAriaLabelPrefix,
                    onChange: a.changeMonthYear,
                    day: i,
                    dayClassName: a.props.dayClassName,
                    monthClassName: a.props.monthClassName,
                    onDayClick: a.handleDayClick,
                    handleOnKeyDown: a.props.handleOnKeyDown,
                    onDayMouseEnter: a.handleDayMouseEnter,
                    onMouseLeave: a.handleMonthMouseLeave,
                    onWeekSelect: a.props.onWeekSelect,
                    orderInDisplay: o,
                    formatWeekNumber: a.props.formatWeekNumber,
                    locale: a.props.locale,
                    minDate: a.props.minDate,
                    maxDate: a.props.maxDate,
                    excludeDates: a.props.excludeDates,
                    highlightDates: a.props.highlightDates,
                    selectingDate: a.state.selectingDate,
                    includeDates: a.props.includeDates,
                    inline: a.props.inline,
                    fixedHeight: a.props.fixedHeight,
                    filterDate: a.props.filterDate,
                    preSelection: a.props.preSelection,
                    selected: a.props.selected,
                    selectsStart: a.props.selectsStart,
                    selectsEnd: a.props.selectsEnd,
                    showWeekNumbers: a.props.showWeekNumbers,
                    startDate: a.props.startDate,
                    endDate: a.props.endDate,
                    peekNextMonth: a.props.peekNextMonth,
                    setOpen: a.props.setOpen,
                    shouldCloseOnSelect: a.props.shouldCloseOnSelect,
                    renderDayContents: a.props.renderDayContents,
                    disabledKeyboardNavigation:
                      a.props.disabledKeyboardNavigation,
                    showMonthYearPicker: a.props.showMonthYearPicker,
                    showFullMonthYearPicker: a.props.showFullMonthYearPicker,
                    showTwoColumnMonthYearPicker:
                      a.props.showTwoColumnMonthYearPicker,
                    showYearPicker: a.props.showYearPicker,
                    showQuarterYearPicker: a.props.showQuarterYearPicker,
                    isInputFocused: a.props.isInputFocused,
                    containerRef: a.containerRef
                  })
                )
              );
            }
            return e;
          }
        }),
        ie(me(a), "renderYears", function() {
          if (!a.props.showTimeSelectOnly)
            return a.props.showYearPicker
              ? t.createElement(
                  "div",
                  { className: "react-datepicker__year" },
                  a.renderHeader(),
                  t.createElement(kt, {
                    onDayClick: a.handleDayClick,
                    date: a.state.date
                  })
                )
              : void 0;
        }),
        ie(me(a), "renderTimeSection", function() {
          if (
            a.props.showTimeSelect &&
            (a.state.monthContainer || a.props.showTimeSelectOnly)
          )
            return t.createElement(wt, {
              selected: a.props.selected,
              openToDate: a.props.openToDate,
              onChange: a.props.onTimeChange,
              timeClassName: a.props.timeClassName,
              format: a.props.timeFormat,
              includeTimes: a.props.includeTimes,
              intervals: a.props.timeIntervals,
              minTime: a.props.minTime,
              maxTime: a.props.maxTime,
              excludeTimes: a.props.excludeTimes,
              timeCaption: a.props.timeCaption,
              todayButton: a.props.todayButton,
              showMonthDropdown: a.props.showMonthDropdown,
              showMonthYearDropdown: a.props.showMonthYearDropdown,
              showYearDropdown: a.props.showYearDropdown,
              withPortal: a.props.withPortal,
              monthRef: a.state.monthContainer,
              injectTimes: a.props.injectTimes,
              locale: a.props.locale
            });
        }),
        ie(me(a), "renderInputTimeSection", function() {
          var e = new Date(a.props.selected),
            r =
              be(e) && Boolean(a.props.selected)
                ? "".concat(st(e.getHours()), ":").concat(st(e.getMinutes()))
                : "";
          if (a.props.showTimeInput)
            return t.createElement(gt, {
              timeString: r,
              timeInputLabel: a.props.timeInputLabel,
              onChange: a.props.onTimeChange,
              customTimeInput: a.props.customTimeInput
            });
        }),
        (a.containerRef = t.createRef()),
        (a.state = {
          date: a.getDateInView(),
          selectingDate: null,
          monthContainer: null
        }),
        a
      );
    }
    return (
      se(o, null, [
        {
          key: "defaultProps",
          get: function() {
            return {
              onDropdownFocus: function() {},
              monthsShown: 1,
              monthSelectedIn: 0,
              forceShowMonthNavigation: !1,
              timeCaption: "Time",
              previousYearButtonLabel: "Previous Year",
              nextYearButtonLabel: "Next Year",
              previousMonthButtonLabel: "Previous Month",
              nextMonthButtonLabel: "Next Month",
              customTimeInput: null
            };
          }
        }
      ]),
      se(o, [
        {
          key: "componentDidMount",
          value: function() {
            var e = this;
            this.props.showTimeSelect &&
              (this.assignMonthContainer = void e.setState({
                monthContainer: e.monthContainer
              }));
          }
        },
        {
          key: "componentDidUpdate",
          value: function(e) {
            this.props.preSelection &&
            !Le(this.props.preSelection, e.preSelection)
              ? this.setState({ date: this.props.preSelection })
              : this.props.openToDate &&
                !Le(this.props.openToDate, e.openToDate) &&
                this.setState({ date: this.props.openToDate });
          }
        },
        {
          key: "render",
          value: function() {
            var e = this.props.container || Ct;
            return t.createElement(
              "div",
              { ref: this.containerRef },
              t.createElement(
                e,
                {
                  className: r("react-datepicker", this.props.className, {
                    "react-datepicker--time-only": this.props.showTimeSelectOnly
                  }),
                  showPopperArrow: this.props.showPopperArrow,
                  arrowProps: this.props.arrowProps
                },
                this.renderPreviousButton(),
                this.renderNextButton(),
                this.renderMonths(),
                this.renderYears(),
                this.renderTodayButton(),
                this.renderTimeSection(),
                this.renderInputTimeSection(),
                this.props.children
              )
            );
          }
        }
      ]),
      o
    );
  })(),
  St = function(e) {
    return !e.disabled && -1 !== e.tabIndex;
  },
  Mt = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n(e) {
      var o;
      return (
        oe(this, n),
        ie(me((o = r.call(this, e))), "getTabChildren", function() {
          return Array.prototype.slice
            .call(
              o.tabLoopRef.current.querySelectorAll(
                "[tabindex], a, button, input, select, textarea"
              ),
              1,
              -1
            )
            .filter(St);
        }),
        ie(me(o), "handleFocusStart", function(e) {
          var t = o.getTabChildren();
          t && t.length > 1 && t[t.length - 1].focus();
        }),
        ie(me(o), "handleFocusEnd", function(e) {
          var t = o.getTabChildren();
          t && t.length > 1 && t[0].focus();
        }),
        (o.tabLoopRef = t.createRef()),
        o
      );
    }
    return (
      se(n, null, [
        {
          key: "defaultProps",
          get: function() {
            return { enableTabLoop: !0 };
          }
        }
      ]),
      se(n, [
        {
          key: "render",
          value: function() {
            return this.props.enableTabLoop
              ? t.createElement(
                  "div",
                  {
                    className: "react-datepicker__tab-loop",
                    ref: this.tabLoopRef
                  },
                  t.createElement("div", {
                    className: "react-datepicker__tab-loop__start",
                    tabIndex: "0",
                    onFocus: this.handleFocusStart
                  }),
                  this.props.children,
                  t.createElement("div", {
                    className: "react-datepicker__tab-loop__end",
                    tabIndex: "0",
                    onFocus: this.handleFocusEnd
                  })
                )
              : this.props.children;
          }
        }
      ]),
      n
    );
  })(),
  Pt = (function(e) {
    de(n, t.Component);
    var r = ve(n);
    function n(e) {
      var t;
      return (
        oe(this, n),
        ((t = r.call(this, e)).el = document.createElement("div")),
        t
      );
    }
    return (
      se(n, [
        {
          key: "componentDidMount",
          value: function() {
            (this.portalRoot = document.getElementById(this.props.portalId)),
              this.portalRoot ||
                ((this.portalRoot = document.createElement("div")),
                this.portalRoot.setAttribute("id", this.props.portalId),
                document.body.appendChild(this.portalRoot)),
              this.portalRoot.appendChild(this.el);
          }
        },
        {
          key: "componentWillUnmount",
          value: function() {
            this.portalRoot.removeChild(this.el);
          }
        },
        {
          key: "render",
          value: function() {
            return re.createPortal(this.props.children, this.el);
          }
        }
      ]),
      n
    );
  })(),
  Et = (function(e) {
    de(o, t.Component);
    var n = ve(o);
    function o() {
      return oe(this, o), n.apply(this, arguments);
    }
    return (
      se(
        o,
        [
          {
            key: "render",
            value: function() {
              var e,
                n = this.props,
                o = n.className,
                a = n.wrapperClassName,
                s = n.hidePopper,
                i = n.popperComponent,
                p = n.popperModifiers,
                c = n.popperPlacement,
                l = n.popperProps,
                d = n.targetComponent,
                u = n.enableTabLoop,
                h = n.popperOnKeyDown,
                m = n.portalId;
              if (!s) {
                var f = r("react-datepicker-popper", o);
                e = t.createElement(
                  te.Popper,
                  pe({ modifiers: p, placement: c }, l),
                  function(e) {
                    var r = e.ref,
                      n = e.style,
                      o = e.placement,
                      a = e.arrowProps;
                    return t.createElement(
                      Mt,
                      { enableTabLoop: u },
                      t.createElement(
                        "div",
                        pe(
                          { ref: r, style: n },
                          { className: f, "data-placement": o, onKeyDown: h }
                        ),
                        t.cloneElement(i, { arrowProps: a })
                      )
                    );
                  }
                );
              }
              this.props.popperContainer &&
                (e = t.createElement(this.props.popperContainer, {}, e)),
                m && !s && (e = t.createElement(Pt, { portalId: m }, e));
              var v = r("react-datepicker-wrapper", a);
              return t.createElement(
                te.Manager,
                { className: "react-datepicker-manager" },
                t.createElement(te.Reference, null, function(e) {
                  var r = e.ref;
                  return t.createElement("div", { ref: r, className: v }, d);
                }),
                e
              );
            }
          }
        ],
        [
          {
            key: "defaultProps",
            get: function() {
              return {
                hidePopper: !0,
                popperModifiers: {
                  preventOverflow: {
                    enabled: !0,
                    escapeWithReference: !0,
                    boundariesElement: "viewport"
                  }
                },
                popperProps: {},
                popperPlacement: "bottom-start"
              };
            }
          }
        ]
      ),
      o
    );
  })(),
  Nt = ee(_t);
var xt = (function(e) {
    de(a, t.Component);
    var o = ve(a);
    function a(e) {
      var s;
      return (
        oe(this, a),
        ie(me((s = o.call(this, e))), "getPreSelection", function() {
          return s.props.openToDate
            ? s.props.openToDate
            : s.props.selectsEnd && s.props.startDate
            ? s.props.startDate
            : s.props.selectsStart && s.props.endDate
            ? s.props.endDate
            : ge();
        }),
        ie(me(s), "calcInitialState", function() {
          var e = s.getPreSelection(),
            t = rt(s.props),
            r = nt(s.props),
            n = t && z(e, t) ? t : r && $(e, r) ? r : e;
          return {
            open: s.props.startOpen || !1,
            preventFocus: !1,
            preSelection: s.props.selected ? s.props.selected : n,
            highlightDates: ot(s.props.highlightDates),
            focused: !1
          };
        }),
        ie(me(s), "clearPreventFocusTimeout", function() {
          s.preventFocusTimeout && clearTimeout(s.preventFocusTimeout);
        }),
        ie(me(s), "setFocus", function() {
          s.input && s.input.focus && s.input.focus({ preventScroll: !0 });
        }),
        ie(me(s), "setBlur", function() {
          s.input && s.input.blur && s.input.blur(), s.cancelFocusInput();
        }),
        ie(me(s), "setOpen", function(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          s.setState(
            {
              open: e,
              preSelection:
                e && s.state.open
                  ? s.state.preSelection
                  : s.calcInitialState().preSelection,
              lastPreSelectChange: Yt
            },
            function() {
              e ||
                s.setState(
                  function(e) {
                    return { focused: !!t && e.focused };
                  },
                  function() {
                    !t && s.setBlur(), s.setState({ inputValue: null });
                  }
                );
            }
          );
        }),
        ie(me(s), "inputOk", function() {
          return n(s.state.preSelection);
        }),
        ie(me(s), "isCalendarOpen", function() {
          return void 0 === s.props.open
            ? s.state.open && !s.props.disabled && !s.props.readOnly
            : s.props.open;
        }),
        ie(me(s), "handleFocus", function(e) {
          s.state.preventFocus ||
            (s.props.onFocus(e),
            s.props.preventOpenOnFocus || s.props.readOnly || s.setOpen(!0)),
            s.setState({ focused: !0 });
        }),
        ie(me(s), "cancelFocusInput", function() {
          clearTimeout(s.inputFocusTimeout), (s.inputFocusTimeout = null);
        }),
        ie(me(s), "deferFocusInput", function() {
          s.cancelFocusInput(),
            (s.inputFocusTimeout = setTimeout(function() {
              return s.setFocus();
            }, 1));
        }),
        ie(me(s), "handleDropdownFocus", function() {
          s.cancelFocusInput();
        }),
        ie(me(s), "handleBlur", function(e) {
          (!s.state.open || s.props.withPortal || s.props.showTimeInput) &&
            s.props.onBlur(e),
            s.setState({ focused: !1 });
        }),
        ie(me(s), "handleCalendarClickOutside", function(e) {
          s.props.inline || s.setOpen(!1),
            s.props.onClickOutside(e),
            s.props.withPortal && e.preventDefault();
        }),
        ie(me(s), "handleChange", function() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          var n = t[0];
          if (
            !s.props.onChangeRaw ||
            (s.props.onChangeRaw.apply(me(s), t),
            "function" == typeof n.isDefaultPrevented &&
              !n.isDefaultPrevented())
          ) {
            s.setState({ inputValue: n.target.value, lastPreSelectChange: Ot });
            var o = Ce(
              n.target.value,
              s.props.dateFormat,
              s.props.locale,
              s.props.strictParsing
            );
            (!o && n.target.value) || s.setSelected(o, n, !0);
          }
        }),
        ie(me(s), "handleSelect", function(e, t, r) {
          s.setState({ preventFocus: !0 }, function() {
            return (
              (s.preventFocusTimeout = setTimeout(function() {
                return s.setState({ preventFocus: !1 });
              }, 50)),
              s.preventFocusTimeout
            );
          }),
            s.props.onChangeRaw && s.props.onChangeRaw(t),
            s.setSelected(e, t, !1, r),
            !s.props.shouldCloseOnSelect || s.props.showTimeSelect
              ? s.setPreSelection(e)
              : s.props.inline || s.setOpen(!1);
        }),
        ie(me(s), "setSelected", function(e, t, r, n) {
          var o = e;
          (null !== o && Ke(o, s.props)) ||
            ((Fe(s.props.selected, o) && !s.props.allowSameDay) ||
              (null !== o &&
                (!s.props.selected ||
                  (r &&
                    (s.props.showTimeSelect ||
                      s.props.showTimeSelectOnly ||
                      s.props.showTimeInput)) ||
                  (o = Se(o, {
                    hour: D(s.props.selected),
                    minute: y(s.props.selected),
                    second: v(s.props.selected)
                  })),
                s.props.inline || s.setState({ preSelection: o }),
                s.props.focusSelectedMonth ||
                  s.setState({ monthSelectedIn: n })),
              s.props.onChange(o, t)),
            r || (s.props.onSelect(o, t), s.setState({ inputValue: null })));
        }),
        ie(me(s), "setPreSelection", function(e) {
          var t = void 0 !== s.props.minDate,
            r = void 0 !== s.props.maxDate,
            n = !0;
          e &&
            (t && r
              ? (n = qe(e, s.props.minDate, s.props.maxDate))
              : t
              ? (n = $(e, s.props.minDate))
              : r && (n = z(e, s.props.maxDate))),
            n && s.setState({ preSelection: e });
        }),
        ie(me(s), "handleTimeChange", function(e) {
          var t = Se(
            s.props.selected ? s.props.selected : s.getPreSelection(),
            { hour: D(e), minute: y(e) }
          );
          s.setState({ preSelection: t }),
            s.props.onChange(t),
            s.props.shouldCloseOnSelect && s.setOpen(!1),
            s.props.showTimeInput && s.setOpen(!0),
            s.setState({ inputValue: null });
        }),
        ie(me(s), "onInputClick", function() {
          s.props.disabled || s.props.readOnly || s.setOpen(!0),
            s.props.onInputClick();
        }),
        ie(me(s), "onInputKeyDown", function(e) {
          s.props.onKeyDown(e);
          var t = e.key;
          if (s.state.open || s.props.inline || s.props.preventOpenOnFocus) {
            if (s.state.open) {
              if ("ArrowDown" === t || "ArrowUp" === t) {
                e.preventDefault();
                var r =
                  s.calendar.componentNode &&
                  s.calendar.componentNode.querySelector(
                    '.react-datepicker__day[tabindex="0"]'
                  );
                return void (r && r.focus({ preventScroll: !0 }));
              }
              var n = ge(s.state.preSelection);
              "Enter" === t
                ? (e.preventDefault(),
                  s.inputOk() && s.state.lastPreSelectChange === Yt
                    ? (s.handleSelect(n, e),
                      !s.props.shouldCloseOnSelect && s.setPreSelection(n))
                    : s.setOpen(!1))
                : "Escape" === t && (e.preventDefault(), s.setOpen(!1)),
                s.inputOk() ||
                  s.props.onInputError({
                    code: 1,
                    msg: "Date input not valid."
                  });
            }
          } else ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) || s.onInputClick();
        }),
        ie(me(s), "onDayKeyDown", function(e) {
          s.props.onKeyDown(e);
          var t = e.key,
            r = ge(s.state.preSelection);
          if ("Enter" === t)
            e.preventDefault(),
              s.handleSelect(r, e),
              !s.props.shouldCloseOnSelect && s.setPreSelection(r);
          else if ("Escape" === t)
            e.preventDefault(),
              s.setOpen(!1),
              s.inputOk() ||
                s.props.onInputError({ code: 1, msg: "Date input not valid." });
          else if (!s.props.disabledKeyboardNavigation) {
            var n;
            switch (t) {
              case "ArrowLeft":
                n = u(r, 1);
                break;
              case "ArrowRight":
                n = p(r, 1);
                break;
              case "ArrowUp":
                n = h(r, 1);
                break;
              case "ArrowDown":
                n = c(r, 1);
                break;
              case "PageUp":
                n = m(r, 1);
                break;
              case "PageDown":
                n = l(r, 1);
                break;
              case "Home":
                n = f(r, 1);
                break;
              case "End":
                n = d(r, 1);
            }
            if (!n)
              return void (
                s.props.onInputError &&
                s.props.onInputError({ code: 1, msg: "Date input not valid." })
              );
            e.preventDefault(),
              s.setState({ lastPreSelectChange: Yt }),
              s.props.adjustDateOnChange && s.setSelected(n),
              s.setPreSelection(n);
          }
        }),
        ie(me(s), "onPopperKeyDown", function(e) {
          "Escape" === e.key &&
            (e.preventDefault(),
            s.setState({ preventFocus: !0 }, function() {
              s.setOpen(!1),
                setTimeout(function() {
                  s.setFocus(), s.setState({ preventFocus: !1 });
                });
            }));
        }),
        ie(me(s), "onClearClick", function(e) {
          e && e.preventDefault && e.preventDefault(),
            s.props.onChange(null, e),
            s.setState({ inputValue: null });
        }),
        ie(me(s), "clear", function() {
          s.onClearClick();
        }),
        ie(me(s), "renderCalendar", function() {
          return s.props.inline || s.isCalendarOpen()
            ? t.createElement(
                Nt,
                {
                  ref: function(e) {
                    s.calendar = e;
                  },
                  locale: s.props.locale,
                  chooseDayAriaLabelPrefix: s.props.chooseDayAriaLabelPrefix,
                  disabledDayAriaLabelPrefix:
                    s.props.disabledDayAriaLabelPrefix,
                  weekAriaLabelPrefix: s.props.weekAriaLabelPrefix,
                  adjustDateOnChange: s.props.adjustDateOnChange,
                  setOpen: s.setOpen,
                  shouldCloseOnSelect: s.props.shouldCloseOnSelect,
                  dateFormat: s.props.dateFormatCalendar,
                  useWeekdaysShort: s.props.useWeekdaysShort,
                  formatWeekDay: s.props.formatWeekDay,
                  dropdownMode: s.props.dropdownMode,
                  selected: s.props.selected,
                  preSelection: s.state.preSelection,
                  onSelect: s.handleSelect,
                  onWeekSelect: s.props.onWeekSelect,
                  openToDate: s.props.openToDate,
                  minDate: s.props.minDate,
                  maxDate: s.props.maxDate,
                  selectsStart: s.props.selectsStart,
                  selectsEnd: s.props.selectsEnd,
                  startDate: s.props.startDate,
                  endDate: s.props.endDate,
                  excludeDates: s.props.excludeDates,
                  filterDate: s.props.filterDate,
                  onClickOutside: s.handleCalendarClickOutside,
                  formatWeekNumber: s.props.formatWeekNumber,
                  highlightDates: s.state.highlightDates,
                  includeDates: s.props.includeDates,
                  includeTimes: s.props.includeTimes,
                  injectTimes: s.props.injectTimes,
                  inline: s.props.inline,
                  peekNextMonth: s.props.peekNextMonth,
                  showMonthDropdown: s.props.showMonthDropdown,
                  showPreviousMonths: s.props.showPreviousMonths,
                  useShortMonthInDropdown: s.props.useShortMonthInDropdown,
                  showMonthYearDropdown: s.props.showMonthYearDropdown,
                  showWeekNumbers: s.props.showWeekNumbers,
                  showYearDropdown: s.props.showYearDropdown,
                  withPortal: s.props.withPortal,
                  forceShowMonthNavigation: s.props.forceShowMonthNavigation,
                  showDisabledMonthNavigation:
                    s.props.showDisabledMonthNavigation,
                  scrollableYearDropdown: s.props.scrollableYearDropdown,
                  scrollableMonthYearDropdown:
                    s.props.scrollableMonthYearDropdown,
                  todayButton: s.props.todayButton,
                  weekLabel: s.props.weekLabel,
                  outsideClickIgnoreClass:
                    "react-datepicker-ignore-onclickoutside",
                  fixedHeight: s.props.fixedHeight,
                  monthsShown: s.props.monthsShown,
                  monthSelectedIn: s.state.monthSelectedIn,
                  onDropdownFocus: s.handleDropdownFocus,
                  onMonthChange: s.props.onMonthChange,
                  onYearChange: s.props.onYearChange,
                  dayClassName: s.props.dayClassName,
                  weekDayClassName: s.props.weekDayClassName,
                  monthClassName: s.props.monthClassName,
                  timeClassName: s.props.timeClassName,
                  showTimeSelect: s.props.showTimeSelect,
                  showTimeSelectOnly: s.props.showTimeSelectOnly,
                  onTimeChange: s.handleTimeChange,
                  timeFormat: s.props.timeFormat,
                  timeIntervals: s.props.timeIntervals,
                  minTime: s.props.minTime,
                  maxTime: s.props.maxTime,
                  excludeTimes: s.props.excludeTimes,
                  timeCaption: s.props.timeCaption,
                  className: s.props.calendarClassName,
                  container: s.props.calendarContainer,
                  yearDropdownItemNumber: s.props.yearDropdownItemNumber,
                  previousMonthButtonLabel: s.props.previousMonthButtonLabel,
                  nextMonthButtonLabel: s.props.nextMonthButtonLabel,
                  previousYearButtonLabel: s.props.previousYearButtonLabel,
                  nextYearButtonLabel: s.props.nextYearButtonLabel,
                  timeInputLabel: s.props.timeInputLabel,
                  disabledKeyboardNavigation:
                    s.props.disabledKeyboardNavigation,
                  renderCustomHeader: s.props.renderCustomHeader,
                  popperProps: s.props.popperProps,
                  renderDayContents: s.props.renderDayContents,
                  onDayMouseEnter: s.props.onDayMouseEnter,
                  onMonthMouseLeave: s.props.onMonthMouseLeave,
                  showTimeInput: s.props.showTimeInput,
                  showMonthYearPicker: s.props.showMonthYearPicker,
                  showFullMonthYearPicker: s.props.showFullMonthYearPicker,
                  showTwoColumnMonthYearPicker:
                    s.props.showTwoColumnMonthYearPicker,
                  showYearPicker: s.props.showYearPicker,
                  showQuarterYearPicker: s.props.showQuarterYearPicker,
                  showPopperArrow: s.props.showPopperArrow,
                  excludeScrollbar: s.props.excludeScrollbar,
                  handleOnKeyDown: s.onDayKeyDown,
                  isInputFocused: s.state.focused,
                  customTimeInput: s.props.customTimeInput,
                  setPreSelection: s.setPreSelection
                },
                s.props.children
              )
            : null;
        }),
        ie(me(s), "renderDateInput", function() {
          var e,
            n,
            o,
            a,
            i,
            p = r(
              s.props.className,
              ie({}, "react-datepicker-ignore-onclickoutside", s.state.open)
            ),
            c =
              s.props.customInput || t.createElement("input", { type: "text" }),
            l = s.props.customInputRef || "ref",
            d =
              "string" == typeof s.props.value
                ? s.props.value
                : "string" == typeof s.state.inputValue
                ? s.state.inputValue
                : ((n = s.props.selected),
                  (o = s.props),
                  (a = o.dateFormat),
                  (i = o.locale),
                  (n && _e(n, Array.isArray(a) ? a[0] : a, i)) || "");
          return t.cloneElement(
            c,
            (ie((e = {}), l, function(e) {
              s.input = e;
            }),
            ie(e, "value", d),
            ie(e, "onBlur", s.handleBlur),
            ie(e, "onChange", s.handleChange),
            ie(e, "onClick", s.onInputClick),
            ie(e, "onFocus", s.handleFocus),
            ie(e, "onKeyDown", s.onInputKeyDown),
            ie(e, "id", s.props.id),
            ie(e, "name", s.props.name),
            ie(e, "autoFocus", s.props.autoFocus),
            ie(e, "placeholder", s.props.placeholderText),
            ie(e, "disabled", s.props.disabled),
            ie(e, "autoComplete", s.props.autoComplete),
            ie(e, "className", r(c.props.className, p)),
            ie(e, "title", s.props.title),
            ie(e, "readOnly", s.props.readOnly),
            ie(e, "required", s.props.required),
            ie(e, "tabIndex", s.props.tabIndex),
            ie(e, "aria-labelledby", s.props.ariaLabelledBy),
            e)
          );
        }),
        ie(me(s), "renderClearButton", function() {
          var e = s.props,
            r = e.isClearable,
            n = e.selected,
            o = e.clearButtonTitle,
            a = e.ariaLabelClose,
            i = void 0 === a ? "Close" : a;
          return r && null != n
            ? t.createElement("button", {
                type: "button",
                className: "react-datepicker__close-icon",
                "aria-label": i,
                onClick: s.onClearClick,
                title: o,
                tabIndex: -1
              })
            : null;
        }),
        (s.state = s.calcInitialState()),
        s
      );
    }
    return (
      se(a, null, [
        {
          key: "defaultProps",
          get: function() {
            return {
              allowSameDay: !1,
              dateFormat: "MM/dd/yyyy",
              dateFormatCalendar: "LLLL yyyy",
              onChange: function() {},
              disabled: !1,
              disabledKeyboardNavigation: !1,
              dropdownMode: "scroll",
              onFocus: function() {},
              onBlur: function() {},
              onKeyDown: function() {},
              onInputClick: function() {},
              onSelect: function() {},
              onClickOutside: function() {},
              onMonthChange: function() {},
              onCalendarOpen: function() {},
              onCalendarClose: function() {},
              preventOpenOnFocus: !1,
              onYearChange: function() {},
              onInputError: function() {},
              monthsShown: 1,
              readOnly: !1,
              withPortal: !1,
              shouldCloseOnSelect: !0,
              showTimeSelect: !1,
              showTimeInput: !1,
              showPreviousMonths: !1,
              showMonthYearPicker: !1,
              showFullMonthYearPicker: !1,
              showTwoColumnMonthYearPicker: !1,
              showYearPicker: !1,
              showQuarterYearPicker: !1,
              strictParsing: !1,
              timeIntervals: 30,
              timeCaption: "Time",
              previousMonthButtonLabel: "Previous Month",
              nextMonthButtonLabel: "Next Month",
              previousYearButtonLabel: "Previous Year",
              nextYearButtonLabel: "Next Year",
              timeInputLabel: "Time",
              enableTabLoop: !0,
              renderDayContents: function(e) {
                return e;
              },
              focusSelectedMonth: !1,
              showPopperArrow: !0,
              excludeScrollbar: !0,
              customTimeInput: null
            };
          }
        }
      ]),
      se(a, [
        {
          key: "componentDidUpdate",
          value: function(e, t) {
            var r, n;
            e.inline &&
              ((r = e.selected),
              (n = this.props.selected),
              r && n ? C(r) !== C(n) || _(r) !== _(n) : r !== n) &&
              this.setPreSelection(this.props.selected),
              void 0 !== this.state.monthSelectedIn &&
                e.monthsShown !== this.props.monthsShown &&
                this.setState({ monthSelectedIn: 0 }),
              e.highlightDates !== this.props.highlightDates &&
                this.setState({
                  highlightDates: ot(this.props.highlightDates)
                }),
              t.focused ||
                Fe(e.selected, this.props.selected) ||
                this.setState({ inputValue: null }),
              t.open !== this.state.open &&
                (!1 === t.open &&
                  !0 === this.state.open &&
                  this.props.onCalendarOpen(),
                !0 === t.open &&
                  !1 === this.state.open &&
                  this.props.onCalendarClose());
          }
        },
        {
          key: "componentWillUnmount",
          value: function() {
            this.clearPreventFocusTimeout();
          }
        },
        {
          key: "render",
          value: function() {
            var e = this.renderCalendar();
            return this.props.inline && !this.props.withPortal
              ? e
              : this.props.withPortal
              ? t.createElement(
                  "div",
                  null,
                  this.props.inline
                    ? null
                    : t.createElement(
                        "div",
                        { className: "react-datepicker__input-container" },
                        this.renderDateInput(),
                        this.renderClearButton()
                      ),
                  this.state.open || this.props.inline
                    ? t.createElement(
                        "div",
                        { className: "react-datepicker__portal" },
                        e
                      )
                    : null
                )
              : t.createElement(Et, {
                  className: this.props.popperClassName,
                  wrapperClassName: this.props.wrapperClassName,
                  hidePopper: !this.isCalendarOpen(),
                  portalId: this.props.portalId,
                  popperModifiers: this.props.popperModifiers,
                  targetComponent: t.createElement(
                    "div",
                    { className: "react-datepicker__input-container" },
                    this.renderDateInput(),
                    this.renderClearButton()
                  ),
                  popperContainer: this.props.popperContainer,
                  popperComponent: e,
                  popperPlacement: this.props.popperPlacement,
                  popperProps: this.props.popperProps,
                  popperOnKeyDown: this.onPopperKeyDown,
                  enableTabLoop: this.props.enableTabLoop
                });
          }
        }
      ]),
      a
    );
  })(),
  Ot = "input",
  Yt = "navigate";
(exports.CalendarContainer = Ct),
  (exports.default = xt),
  (exports.getDefaultLocale = Re),
  (exports.registerLocale = function(e, t) {
    var r = "undefined" != typeof window ? window : global;
    r.__localeData__ || (r.__localeData__ = {}), (r.__localeData__[e] = t);
  }),
  (exports.setDefaultLocale = function(e) {
    ("undefined" != typeof window ? window : global).__localeId__ = e;
  });
