/*
vendor.js
this file was not originally obfuscated
no changes have been made
*/

function _mergeNamespaces(o, s) {
  for (var h = 0; h < s.length; h++) {
    const g = s[h];
    if (typeof g != "string" && !Array.isArray(g)) {
      for (const j in g) if (j !== "default" && !(j in o)) {
        const tt = Object.getOwnPropertyDescriptor(g, j);
        tt && Object.defineProperty(o, j, tt.get ? tt : { enumerable: !0, get: () => g[j] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var commonjsGlobal$1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs$1(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function getAugmentedNamespace(o) {
  if (o.__esModule) return o;
  var s = o.default;
  if (typeof s == "function") {
    var h = function g() {
      return this instanceof g ? Reflect.construct(s, arguments, this.constructor) : s.apply(this, arguments);
    };
    h.prototype = s.prototype;
  } else h = {};
  return Object.defineProperty(h, "__esModule", { value: !0 }), Object.keys(o).forEach(function(g) {
    var j = Object.getOwnPropertyDescriptor(o, g);
    Object.defineProperty(h, g, j.get ? j : { enumerable: !0, get: function() {
      return o[g];
    } });
  }), h;
}
var jsxRuntime = { exports: {} }, reactJsxRuntime_production_min = {}, react = { exports: {} }, react_production_min = {}, l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$3 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r$1 = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w$1 = Symbol.for("react.suspense"), x$1 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$2(o) {
  return o === null || typeof o != "object" ? null : typeof (o = z$1 && o[z$1] || o["@@iterator"]) == "function" ? o : null;
}
var B$1 = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$2 = Object.assign, D$2 = {};
function E$2(o, s, h) {
  this.props = o, this.context = s, this.refs = D$2, this.updater = h || B$1;
}
function F() {
}
function G$1(o, s, h) {
  this.props = o, this.context = s, this.refs = D$2, this.updater = h || B$1;
}
E$2.prototype.isReactComponent = {}, E$2.prototype.setState = function(o, s) {
  if (typeof o != "object" && typeof o != "function" && o != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, o, s, "setState");
}, E$2.prototype.forceUpdate = function(o) {
  this.updater.enqueueForceUpdate(this, o, "forceUpdate");
}, F.prototype = E$2.prototype;
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1, C$2(H$1, E$2.prototype), H$1.isPureReactComponent = !0;
var I$2 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function M$1(o, s, h) {
  var g, j = {}, tt = null, rt = null;
  if (s != null) for (g in s.ref !== void 0 && (rt = s.ref), s.key !== void 0 && (tt = "" + s.key), s) J$1.call(s, g) && !L$1.hasOwnProperty(g) && (j[g] = s[g]);
  var at = arguments.length - 2;
  if (at === 1) j.children = h;
  else if (1 < at) {
    for (var it = Array(at), st = 0; st < at; st++) it[st] = arguments[st + 2];
    j.children = it;
  }
  if (o && o.defaultProps) for (g in at = o.defaultProps) j[g] === void 0 && (j[g] = at[g]);
  return { $$typeof: l$1, type: o, key: tt, ref: rt, props: j, _owner: K$1.current };
}
function N$1(o, s) {
  return { $$typeof: l$1, type: o.type, key: s, ref: o.ref, props: o.props, _owner: o._owner };
}
function O$2(o) {
  return typeof o == "object" && o !== null && o.$$typeof === l$1;
}
function escape(o) {
  var s = { "=": "=0", ":": "=2" };
  return "$" + o.replace(/[=:]/g, function(h) {
    return s[h];
  });
}
var P$1 = /\/+/g;
function Q$1(o, s) {
  return typeof o == "object" && o !== null && o.key != null ? escape("" + o.key) : s.toString(36);
}
function R$2(o, s, h, g, j) {
  var tt = typeof o;
  tt !== "undefined" && tt !== "boolean" || (o = null);
  var rt = !1;
  if (o === null) rt = !0;
  else switch (tt) {
    case "string":
    case "number":
      rt = !0;
      break;
    case "object":
      switch (o.$$typeof) {
        case l$1:
        case n$1:
          rt = !0;
      }
  }
  if (rt) return j = j(rt = o), o = g === "" ? "." + Q$1(rt, 0) : g, I$2(j) ? (h = "", o != null && (h = o.replace(P$1, "$&/") + "/"), R$2(j, s, h, "", function(st) {
    return st;
  })) : j != null && (O$2(j) && (j = N$1(j, h + (!j.key || rt && rt.key === j.key ? "" : ("" + j.key).replace(P$1, "$&/") + "/") + o)), s.push(j)), 1;
  if (rt = 0, g = g === "" ? "." : g + ":", I$2(o)) for (var at = 0; at < o.length; at++) {
    var it = g + Q$1(tt = o[at], at);
    rt += R$2(tt, s, h, it, j);
  }
  else if (typeof (it = A$2(o)) == "function") for (o = it.call(o), at = 0; !(tt = o.next()).done; ) rt += R$2(tt = tt.value, s, h, it = g + Q$1(tt, at++), j);
  else if (tt === "object") throw s = String(o), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
  return rt;
}
function S$1(o, s, h) {
  if (o == null) return o;
  var g = [], j = 0;
  return R$2(o, g, "", "", function(tt) {
    return s.call(h, tt, j++);
  }), g;
}
function T$1(o) {
  if (o._status === -1) {
    var s = o._result;
    (s = s()).then(function(h) {
      o._status !== 0 && o._status !== -1 || (o._status = 1, o._result = h);
    }, function(h) {
      o._status !== 0 && o._status !== -1 || (o._status = 2, o._result = h);
    }), o._status === -1 && (o._status = 0, o._result = s);
  }
  if (o._status === 1) return o._result.default;
  throw o._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
function X$1() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S$1, forEach: function(o, s, h) {
  S$1(o, function() {
    s.apply(this, arguments);
  }, h);
}, count: function(o) {
  var s = 0;
  return S$1(o, function() {
    s++;
  }), s;
}, toArray: function(o) {
  return S$1(o, function(s) {
    return s;
  }) || [];
}, only: function(o) {
  if (!O$2(o)) throw Error("React.Children.only expected to receive a single React element child.");
  return o;
} }, react_production_min.Component = E$2, react_production_min.Fragment = p$3, react_production_min.Profiler = r$1, react_production_min.PureComponent = G$1, react_production_min.StrictMode = q$1, react_production_min.Suspense = w$1, react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1, react_production_min.act = X$1, react_production_min.cloneElement = function(o, s, h) {
  if (o == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + o + ".");
  var g = C$2({}, o.props), j = o.key, tt = o.ref, rt = o._owner;
  if (s != null) {
    if (s.ref !== void 0 && (tt = s.ref, rt = K$1.current), s.key !== void 0 && (j = "" + s.key), o.type && o.type.defaultProps) var at = o.type.defaultProps;
    for (it in s) J$1.call(s, it) && !L$1.hasOwnProperty(it) && (g[it] = s[it] === void 0 && at !== void 0 ? at[it] : s[it]);
  }
  var it = arguments.length - 2;
  if (it === 1) g.children = h;
  else if (1 < it) {
    at = Array(it);
    for (var st = 0; st < it; st++) at[st] = arguments[st + 2];
    g.children = at;
  }
  return { $$typeof: l$1, type: o.type, key: j, ref: tt, props: g, _owner: rt };
}, react_production_min.createContext = function(o) {
  return (o = { $$typeof: u, _currentValue: o, _currentValue2: o, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: t, _context: o }, o.Consumer = o;
}, react_production_min.createElement = M$1, react_production_min.createFactory = function(o) {
  var s = M$1.bind(null, o);
  return s.type = o, s;
}, react_production_min.createRef = function() {
  return { current: null };
}, react_production_min.forwardRef = function(o) {
  return { $$typeof: v$1, render: o };
}, react_production_min.isValidElement = O$2, react_production_min.lazy = function(o) {
  return { $$typeof: y$1, _payload: { _status: -1, _result: o }, _init: T$1 };
}, react_production_min.memo = function(o, s) {
  return { $$typeof: x$1, type: o, compare: s === void 0 ? null : s };
}, react_production_min.startTransition = function(o) {
  var s = V$1.transition;
  V$1.transition = {};
  try {
    o();
  } finally {
    V$1.transition = s;
  }
}, react_production_min.unstable_act = X$1, react_production_min.useCallback = function(o, s) {
  return U$1.current.useCallback(o, s);
}, react_production_min.useContext = function(o) {
  return U$1.current.useContext(o);
}, react_production_min.useDebugValue = function() {
}, react_production_min.useDeferredValue = function(o) {
  return U$1.current.useDeferredValue(o);
}, react_production_min.useEffect = function(o, s) {
  return U$1.current.useEffect(o, s);
}, react_production_min.useId = function() {
  return U$1.current.useId();
}, react_production_min.useImperativeHandle = function(o, s, h) {
  return U$1.current.useImperativeHandle(o, s, h);
}, react_production_min.useInsertionEffect = function(o, s) {
  return U$1.current.useInsertionEffect(o, s);
}, react_production_min.useLayoutEffect = function(o, s) {
  return U$1.current.useLayoutEffect(o, s);
}, react_production_min.useMemo = function(o, s) {
  return U$1.current.useMemo(o, s);
}, react_production_min.useReducer = function(o, s, h) {
  return U$1.current.useReducer(o, s, h);
}, react_production_min.useRef = function(o) {
  return U$1.current.useRef(o);
}, react_production_min.useState = function(o) {
  return U$1.current.useState(o);
}, react_production_min.useSyncExternalStore = function(o, s, h) {
  return U$1.current.useSyncExternalStore(o, s, h);
}, react_production_min.useTransition = function() {
  return U$1.current.useTransition();
}, react_production_min.version = "18.3.1", react.exports = react_production_min;
var reactExports = react.exports;
const React$1 = getDefaultExportFromCjs$1(reactExports), React$2 = _mergeNamespaces({ __proto__: null, default: React$1 }, [reactExports]);
var f$1 = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function q(o, s, h) {
  var g, j = {}, tt = null, rt = null;
  for (g in h !== void 0 && (tt = "" + h), s.key !== void 0 && (tt = "" + s.key), s.ref !== void 0 && (rt = s.ref), s) m$1.call(s, g) && !p$2.hasOwnProperty(g) && (j[g] = s[g]);
  if (o && o.defaultProps) for (g in s = o.defaultProps) j[g] === void 0 && (j[g] = s[g]);
  return { $$typeof: k, type: o, key: tt, ref: rt, props: j, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l, reactJsxRuntime_production_min.jsx = q, reactJsxRuntime_production_min.jsxs = q, jsxRuntime.exports = reactJsxRuntime_production_min;
var jsxRuntimeExports = jsxRuntime.exports, client = {}, reactDom = { exports: {} }, reactDom_production_min = {}, scheduler = { exports: {} }, scheduler_production_min = {};
(function(o) {
  function s(Rt, Ft) {
    var At = Rt.length;
    Rt.push(Ft);
    t: for (; 0 < At; ) {
      var Zt = At - 1 >>> 1, hr = Rt[Zt];
      if (!(0 < j(hr, Ft))) break t;
      Rt[Zt] = Ft, Rt[At] = hr, At = Zt;
    }
  }
  function h(Rt) {
    return Rt.length === 0 ? null : Rt[0];
  }
  function g(Rt) {
    if (Rt.length === 0) return null;
    var Ft = Rt[0], At = Rt.pop();
    if (At !== Ft) {
      Rt[0] = At;
      t: for (var Zt = 0, hr = Rt.length, Pr = hr >>> 1; Zt < Pr; ) {
        var dr = 2 * (Zt + 1) - 1, Er = Rt[dr], Sr = dr + 1, Kt = Rt[Sr];
        if (0 > j(Er, At)) Sr < hr && 0 > j(Kt, Er) ? (Rt[Zt] = Kt, Rt[Sr] = At, Zt = Sr) : (Rt[Zt] = Er, Rt[dr] = At, Zt = dr);
        else {
          if (!(Sr < hr && 0 > j(Kt, At))) break t;
          Rt[Zt] = Kt, Rt[Sr] = At, Zt = Sr;
        }
      }
    }
    return Ft;
  }
  function j(Rt, Ft) {
    var At = Rt.sortIndex - Ft.sortIndex;
    return At !== 0 ? At : Rt.id - Ft.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var tt = performance;
    o.unstable_now = function() {
      return tt.now();
    };
  } else {
    var rt = Date, at = rt.now();
    o.unstable_now = function() {
      return rt.now() - at;
    };
  }
  var it = [], st = [], lt = 1, ot = null, ft = 3, ht = !1, pt = !1, dt = !1, ct = typeof setTimeout == "function" ? setTimeout : null, mt = typeof clearTimeout == "function" ? clearTimeout : null, yt = typeof setImmediate < "u" ? setImmediate : null;
  function vt(Rt) {
    for (var Ft = h(st); Ft !== null; ) {
      if (Ft.callback === null) g(st);
      else {
        if (!(Ft.startTime <= Rt)) break;
        g(st), Ft.sortIndex = Ft.expirationTime, s(it, Ft);
      }
      Ft = h(st);
    }
  }
  function _t(Rt) {
    if (dt = !1, vt(Rt), !pt) if (h(it) !== null) pt = !0, sr(Pt);
    else {
      var Ft = h(st);
      Ft !== null && ur(_t, Ft.startTime - Rt);
    }
  }
  function Pt(Rt, Ft) {
    pt = !1, dt && (dt = !1, mt(xt), xt = -1), ht = !0;
    var At = ft;
    try {
      for (vt(Ft), ot = h(it); ot !== null && (!(ot.expirationTime > Ft) || Rt && !qt()); ) {
        var Zt = ot.callback;
        if (typeof Zt == "function") {
          ot.callback = null, ft = ot.priorityLevel;
          var hr = Zt(ot.expirationTime <= Ft);
          Ft = o.unstable_now(), typeof hr == "function" ? ot.callback = hr : ot === h(it) && g(it), vt(Ft);
        } else g(it);
        ot = h(it);
      }
      if (ot !== null) var Pr = !0;
      else {
        var dr = h(st);
        dr !== null && ur(_t, dr.startTime - Ft), Pr = !1;
      }
      return Pr;
    } finally {
      ot = null, ft = At, ht = !1;
    }
  }
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  var bt, kt = !1, wt = null, xt = -1, Tt = 5, It = -1;
  function qt() {
    return !(o.unstable_now() - It < Tt);
  }
  function Wt() {
    if (wt !== null) {
      var Rt = o.unstable_now();
      It = Rt;
      var Ft = !0;
      try {
        Ft = wt(!0, Rt);
      } finally {
        Ft ? bt() : (kt = !1, wt = null);
      }
    } else kt = !1;
  }
  if (typeof yt == "function") bt = function() {
    yt(Wt);
  };
  else if (typeof MessageChannel < "u") {
    var Nt = new MessageChannel(), Yt = Nt.port2;
    Nt.port1.onmessage = Wt, bt = function() {
      Yt.postMessage(null);
    };
  } else bt = function() {
    ct(Wt, 0);
  };
  function sr(Rt) {
    wt = Rt, kt || (kt = !0, bt());
  }
  function ur(Rt, Ft) {
    xt = ct(function() {
      Rt(o.unstable_now());
    }, Ft);
  }
  o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(Rt) {
    Rt.callback = null;
  }, o.unstable_continueExecution = function() {
    pt || ht || (pt = !0, sr(Pt));
  }, o.unstable_forceFrameRate = function(Rt) {
    0 > Rt || 125 < Rt ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Tt = 0 < Rt ? Math.floor(1e3 / Rt) : 5;
  }, o.unstable_getCurrentPriorityLevel = function() {
    return ft;
  }, o.unstable_getFirstCallbackNode = function() {
    return h(it);
  }, o.unstable_next = function(Rt) {
    switch (ft) {
      case 1:
      case 2:
      case 3:
        var Ft = 3;
        break;
      default:
        Ft = ft;
    }
    var At = ft;
    ft = Ft;
    try {
      return Rt();
    } finally {
      ft = At;
    }
  }, o.unstable_pauseExecution = function() {
  }, o.unstable_requestPaint = function() {
  }, o.unstable_runWithPriority = function(Rt, Ft) {
    switch (Rt) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        Rt = 3;
    }
    var At = ft;
    ft = Rt;
    try {
      return Ft();
    } finally {
      ft = At;
    }
  }, o.unstable_scheduleCallback = function(Rt, Ft, At) {
    var Zt = o.unstable_now();
    switch (typeof At == "object" && At !== null ? At = typeof (At = At.delay) == "number" && 0 < At ? Zt + At : Zt : At = Zt, Rt) {
      case 1:
        var hr = -1;
        break;
      case 2:
        hr = 250;
        break;
      case 5:
        hr = 1073741823;
        break;
      case 4:
        hr = 1e4;
        break;
      default:
        hr = 5e3;
    }
    return Rt = { id: lt++, callback: Ft, priorityLevel: Rt, startTime: At, expirationTime: hr = At + hr, sortIndex: -1 }, At > Zt ? (Rt.sortIndex = At, s(st, Rt), h(it) === null && Rt === h(st) && (dt ? (mt(xt), xt = -1) : dt = !0, ur(_t, At - Zt))) : (Rt.sortIndex = hr, s(it, Rt), pt || ht || (pt = !0, sr(Pt))), Rt;
  }, o.unstable_shouldYield = qt, o.unstable_wrapCallback = function(Rt) {
    var Ft = ft;
    return function() {
      var At = ft;
      ft = Ft;
      try {
        return Rt.apply(this, arguments);
      } finally {
        ft = At;
      }
    };
  };
})(scheduler_production_min), scheduler.exports = scheduler_production_min;
var schedulerExports = scheduler.exports, aa = reactExports, ca = schedulerExports;
function p$1(o) {
  for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, h = 1; h < arguments.length; h++) s += "&args[]=" + encodeURIComponent(arguments[h]);
  return "Minified React error #" + o + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(o, s) {
  ha(o, s), ha(o + "Capture", s);
}
function ha(o, s) {
  for (ea[o] = s, o = 0; o < s.length; o++) da.add(s[o]);
}
var ia = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(o) {
  return !!ja.call(ma, o) || !ja.call(la, o) && (ka.test(o) ? ma[o] = !0 : (la[o] = !0, !1));
}
function pa(o, s, h, g) {
  if (h !== null && h.type === 0) return !1;
  switch (typeof s) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return !g && (h !== null ? !h.acceptsBooleans : (o = o.toLowerCase().slice(0, 5)) !== "data-" && o !== "aria-");
    default:
      return !1;
  }
}
function qa(o, s, h, g) {
  if (s == null || pa(o, s, h, g)) return !0;
  if (g) return !1;
  if (h !== null) switch (h.type) {
    case 3:
      return !s;
    case 4:
      return s === !1;
    case 5:
      return isNaN(s);
    case 6:
      return isNaN(s) || 1 > s;
  }
  return !1;
}
function v(o, s, h, g, j, tt, rt) {
  this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = g, this.attributeNamespace = j, this.mustUseProperty = h, this.propertyName = o, this.type = s, this.sanitizeURL = tt, this.removeEmptyString = rt;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
  z[o] = new v(o, 0, !1, o, null, !1, !1);
}), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
  var s = o[0];
  z[s] = new v(s, 1, !1, o[1], null, !1, !1);
}), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
  z[o] = new v(o, 2, !1, o.toLowerCase(), null, !1, !1);
}), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
  z[o] = new v(o, 2, !1, o, null, !1, !1);
}), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
  z[o] = new v(o, 3, !1, o.toLowerCase(), null, !1, !1);
}), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
  z[o] = new v(o, 3, !0, o, null, !1, !1);
}), ["capture", "download"].forEach(function(o) {
  z[o] = new v(o, 4, !1, o, null, !1, !1);
}), ["cols", "rows", "size", "span"].forEach(function(o) {
  z[o] = new v(o, 6, !1, o, null, !1, !1);
}), ["rowSpan", "start"].forEach(function(o) {
  z[o] = new v(o, 5, !1, o.toLowerCase(), null, !1, !1);
});
var ra = /[\-:]([a-z])/g;
function sa(o) {
  return o[1].toUpperCase();
}
function ta(o, s, h, g) {
  var j = z.hasOwnProperty(s) ? z[s] : null;
  (j !== null ? j.type !== 0 : g || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (qa(s, h, j, g) && (h = null), g || j === null ? oa(s) && (h === null ? o.removeAttribute(s) : o.setAttribute(s, "" + h)) : j.mustUseProperty ? o[j.propertyName] = h === null ? j.type !== 3 && "" : h : (s = j.attributeName, g = j.attributeNamespace, h === null ? o.removeAttribute(s) : (h = (j = j.type) === 3 || j === 4 && h === !0 ? "" : "" + h, g ? o.setAttributeNS(g, s, h) : o.setAttribute(s, h))));
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
  var s = o.replace(ra, sa);
  z[s] = new v(s, 1, !1, o, null, !1, !1);
}), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
  var s = o.replace(ra, sa);
  z[s] = new v(s, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
}), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
  var s = o.replace(ra, sa);
  z[s] = new v(s, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
}), ["tabIndex", "crossOrigin"].forEach(function(o) {
  z[o] = new v(o, 1, !1, o.toLowerCase(), null, !1, !1);
}), z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
  z[o] = new v(o, 1, !1, o.toLowerCase(), null, !0, !0);
});
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy"), Ia = Symbol.for("react.offscreen"), Ja = Symbol.iterator;
function Ka(o) {
  return o === null || typeof o != "object" ? null : typeof (o = Ja && o[Ja] || o["@@iterator"]) == "function" ? o : null;
}
var A$1 = Object.assign, La;
function Ma(o) {
  if (La === void 0) try {
    throw Error();
  } catch (h) {
    var s = h.stack.trim().match(/\n( *(at )?)/);
    La = s && s[1] || "";
  }
  return `
` + La + o;
}
var Na = !1;
function Oa(o, s) {
  if (!o || Na) return "";
  Na = !0;
  var h = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (s) if (s = function() {
      throw Error();
    }, Object.defineProperty(s.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(s, []);
      } catch (st) {
        var g = st;
      }
      Reflect.construct(o, [], s);
    } else {
      try {
        s.call();
      } catch (st) {
        g = st;
      }
      o.call(s.prototype);
    }
    else {
      try {
        throw Error();
      } catch (st) {
        g = st;
      }
      o();
    }
  } catch (st) {
    if (st && g && typeof st.stack == "string") {
      for (var j = st.stack.split(`
`), tt = g.stack.split(`
`), rt = j.length - 1, at = tt.length - 1; 1 <= rt && 0 <= at && j[rt] !== tt[at]; ) at--;
      for (; 1 <= rt && 0 <= at; rt--, at--) if (j[rt] !== tt[at]) {
        if (rt !== 1 || at !== 1) do
          if (rt--, 0 > --at || j[rt] !== tt[at]) {
            var it = `
` + j[rt].replace(" at new ", " at ");
            return o.displayName && it.includes("<anonymous>") && (it = it.replace("<anonymous>", o.displayName)), it;
          }
        while (1 <= rt && 0 <= at);
        break;
      }
    }
  } finally {
    Na = !1, Error.prepareStackTrace = h;
  }
  return (o = o ? o.displayName || o.name : "") ? Ma(o) : "";
}
function Pa(o) {
  switch (o.tag) {
    case 5:
      return Ma(o.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return o = Oa(o.type, !1);
    case 11:
      return o = Oa(o.type.render, !1);
    case 1:
      return o = Oa(o.type, !0);
    default:
      return "";
  }
}
function Qa(o) {
  if (o == null) return null;
  if (typeof o == "function") return o.displayName || o.name || null;
  if (typeof o == "string") return o;
  switch (o) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if (typeof o == "object") switch (o.$$typeof) {
    case Ca:
      return (o.displayName || "Context") + ".Consumer";
    case Ba:
      return (o._context.displayName || "Context") + ".Provider";
    case Da:
      var s = o.render;
      return (o = o.displayName) || (o = (o = s.displayName || s.name || "") !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
    case Ga:
      return (s = o.displayName || null) !== null ? s : Qa(o.type) || "Memo";
    case Ha:
      s = o._payload, o = o._init;
      try {
        return Qa(o(s));
      } catch {
      }
  }
  return null;
}
function Ra(o) {
  var s = o.type;
  switch (o.tag) {
    case 24:
      return "Cache";
    case 9:
      return (s.displayName || "Context") + ".Consumer";
    case 10:
      return (s._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return o = (o = s.render).displayName || o.name || "", s.displayName || (o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return s;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(s);
    case 8:
      return s === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof s == "function") return s.displayName || s.name || null;
      if (typeof s == "string") return s;
  }
  return null;
}
function Sa(o) {
  switch (typeof o) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
    case "object":
      return o;
    default:
      return "";
  }
}
function Ta(o) {
  var s = o.type;
  return (o = o.nodeName) && o.toLowerCase() === "input" && (s === "checkbox" || s === "radio");
}
function Ua(o) {
  var s = Ta(o) ? "checked" : "value", h = Object.getOwnPropertyDescriptor(o.constructor.prototype, s), g = "" + o[s];
  if (!o.hasOwnProperty(s) && h !== void 0 && typeof h.get == "function" && typeof h.set == "function") {
    var j = h.get, tt = h.set;
    return Object.defineProperty(o, s, { configurable: !0, get: function() {
      return j.call(this);
    }, set: function(rt) {
      g = "" + rt, tt.call(this, rt);
    } }), Object.defineProperty(o, s, { enumerable: h.enumerable }), { getValue: function() {
      return g;
    }, setValue: function(rt) {
      g = "" + rt;
    }, stopTracking: function() {
      o._valueTracker = null, delete o[s];
    } };
  }
}
function Va(o) {
  o._valueTracker || (o._valueTracker = Ua(o));
}
function Wa(o) {
  if (!o) return !1;
  var s = o._valueTracker;
  if (!s) return !0;
  var h = s.getValue(), g = "";
  return o && (g = Ta(o) ? o.checked ? "true" : "false" : o.value), (o = g) !== h && (s.setValue(o), !0);
}
function Xa(o) {
  if ((o = o || (typeof document < "u" ? document : void 0)) === void 0) return null;
  try {
    return o.activeElement || o.body;
  } catch {
    return o.body;
  }
}
function Ya(o, s) {
  var h = s.checked;
  return A$1({}, s, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: h ?? o._wrapperState.initialChecked });
}
function Za(o, s) {
  var h = s.defaultValue == null ? "" : s.defaultValue, g = s.checked != null ? s.checked : s.defaultChecked;
  h = Sa(s.value != null ? s.value : h), o._wrapperState = { initialChecked: g, initialValue: h, controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null };
}
function ab(o, s) {
  (s = s.checked) != null && ta(o, "checked", s, !1);
}
function bb(o, s) {
  ab(o, s);
  var h = Sa(s.value), g = s.type;
  if (h != null) g === "number" ? (h === 0 && o.value === "" || o.value != h) && (o.value = "" + h) : o.value !== "" + h && (o.value = "" + h);
  else if (g === "submit" || g === "reset") return void o.removeAttribute("value");
  s.hasOwnProperty("value") ? cb(o, s.type, h) : s.hasOwnProperty("defaultValue") && cb(o, s.type, Sa(s.defaultValue)), s.checked == null && s.defaultChecked != null && (o.defaultChecked = !!s.defaultChecked);
}
function db(o, s, h) {
  if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
    var g = s.type;
    if (!(g !== "submit" && g !== "reset" || s.value !== void 0 && s.value !== null)) return;
    s = "" + o._wrapperState.initialValue, h || s === o.value || (o.value = s), o.defaultValue = s;
  }
  (h = o.name) !== "" && (o.name = ""), o.defaultChecked = !!o._wrapperState.initialChecked, h !== "" && (o.name = h);
}
function cb(o, s, h) {
  s === "number" && Xa(o.ownerDocument) === o || (h == null ? o.defaultValue = "" + o._wrapperState.initialValue : o.defaultValue !== "" + h && (o.defaultValue = "" + h));
}
var eb = Array.isArray;
function fb(o, s, h, g) {
  if (o = o.options, s) {
    s = {};
    for (var j = 0; j < h.length; j++) s["$" + h[j]] = !0;
    for (h = 0; h < o.length; h++) j = s.hasOwnProperty("$" + o[h].value), o[h].selected !== j && (o[h].selected = j), j && g && (o[h].defaultSelected = !0);
  } else {
    for (h = "" + Sa(h), s = null, j = 0; j < o.length; j++) {
      if (o[j].value === h) return o[j].selected = !0, void (g && (o[j].defaultSelected = !0));
      s !== null || o[j].disabled || (s = o[j]);
    }
    s !== null && (s.selected = !0);
  }
}
function gb(o, s) {
  if (s.dangerouslySetInnerHTML != null) throw Error(p$1(91));
  return A$1({}, s, { value: void 0, defaultValue: void 0, children: "" + o._wrapperState.initialValue });
}
function hb(o, s) {
  var h = s.value;
  if (h == null) {
    if (h = s.children, s = s.defaultValue, h != null) {
      if (s != null) throw Error(p$1(92));
      if (eb(h)) {
        if (1 < h.length) throw Error(p$1(93));
        h = h[0];
      }
      s = h;
    }
    s == null && (s = ""), h = s;
  }
  o._wrapperState = { initialValue: Sa(h) };
}
function ib(o, s) {
  var h = Sa(s.value), g = Sa(s.defaultValue);
  h != null && ((h = "" + h) !== o.value && (o.value = h), s.defaultValue == null && o.defaultValue !== h && (o.defaultValue = h)), g != null && (o.defaultValue = "" + g);
}
function jb(o) {
  var s = o.textContent;
  s === o._wrapperState.initialValue && s !== "" && s !== null && (o.value = s);
}
function kb(o) {
  switch (o) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(o, s) {
  return o == null || o === "http://www.w3.org/1999/xhtml" ? kb(s) : o === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o;
}
var mb, nb = function(o) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, h, g, j) {
    MSApp.execUnsafeLocalFunction(function() {
      return o(s, h);
    });
  } : o;
}(function(o, s) {
  if (o.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in o) o.innerHTML = s;
  else {
    for ((mb = mb || document.createElement("div")).innerHTML = "<svg>" + s.valueOf().toString() + "</svg>", s = mb.firstChild; o.firstChild; ) o.removeChild(o.firstChild);
    for (; s.firstChild; ) o.appendChild(s.firstChild);
  }
});
function ob(o, s) {
  if (s) {
    var h = o.firstChild;
    if (h && h === o.lastChild && h.nodeType === 3) return void (h.nodeValue = s);
  }
  o.textContent = s;
}
var pb = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, qb = ["Webkit", "ms", "Moz", "O"];
function rb(o, s, h) {
  return s == null || typeof s == "boolean" || s === "" ? "" : h || typeof s != "number" || s === 0 || pb.hasOwnProperty(o) && pb[o] ? ("" + s).trim() : s + "px";
}
function sb(o, s) {
  for (var h in o = o.style, s) if (s.hasOwnProperty(h)) {
    var g = h.indexOf("--") === 0, j = rb(h, s[h], g);
    h === "float" && (h = "cssFloat"), g ? o.setProperty(h, j) : o[h] = j;
  }
}
Object.keys(pb).forEach(function(o) {
  qb.forEach(function(s) {
    s = s + o.charAt(0).toUpperCase() + o.substring(1), pb[s] = pb[o];
  });
});
var tb = A$1({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ub(o, s) {
  if (s) {
    if (tb[o] && (s.children != null || s.dangerouslySetInnerHTML != null)) throw Error(p$1(137, o));
    if (s.dangerouslySetInnerHTML != null) {
      if (s.children != null) throw Error(p$1(60));
      if (typeof s.dangerouslySetInnerHTML != "object" || !("__html" in s.dangerouslySetInnerHTML)) throw Error(p$1(61));
    }
    if (s.style != null && typeof s.style != "object") throw Error(p$1(62));
  }
}
function vb(o, s) {
  if (o.indexOf("-") === -1) return typeof s.is == "string";
  switch (o) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var wb = null;
function xb(o) {
  return (o = o.target || o.srcElement || window).correspondingUseElement && (o = o.correspondingUseElement), o.nodeType === 3 ? o.parentNode : o;
}
var yb = null, zb = null, Ab = null;
function Bb(o) {
  if (o = Cb(o)) {
    if (typeof yb != "function") throw Error(p$1(280));
    var s = o.stateNode;
    s && (s = Db(s), yb(o.stateNode, o.type, s));
  }
}
function Eb(o) {
  zb ? Ab ? Ab.push(o) : Ab = [o] : zb = o;
}
function Fb() {
  if (zb) {
    var o = zb, s = Ab;
    if (Ab = zb = null, Bb(o), s) for (o = 0; o < s.length; o++) Bb(s[o]);
  }
}
function Gb(o, s) {
  return o(s);
}
function Hb() {
}
var Ib = !1;
function Jb(o, s, h) {
  if (Ib) return o(s, h);
  Ib = !0;
  try {
    return Gb(o, s, h);
  } finally {
    Ib = !1, (zb !== null || Ab !== null) && (Hb(), Fb());
  }
}
function Kb(o, s) {
  var h = o.stateNode;
  if (h === null) return null;
  var g = Db(h);
  if (g === null) return null;
  h = g[s];
  t: switch (s) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (g = !g.disabled) || (g = !((o = o.type) === "button" || o === "input" || o === "select" || o === "textarea")), o = !g;
      break t;
    default:
      o = !1;
  }
  if (o) return null;
  if (h && typeof h != "function") throw Error(p$1(231, s, typeof h));
  return h;
}
var Lb = !1;
if (ia) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", { get: function() {
    Lb = !0;
  } }), window.addEventListener("test", Mb, Mb), window.removeEventListener("test", Mb, Mb);
} catch {
  Lb = !1;
}
function Nb(o, s, h, g, j, tt, rt, at, it) {
  var st = Array.prototype.slice.call(arguments, 3);
  try {
    s.apply(h, st);
  } catch (lt) {
    this.onError(lt);
  }
}
var Ob = !1, Pb = null, Qb = !1, Rb = null, Sb = { onError: function(o) {
  Ob = !0, Pb = o;
} };
function Tb(o, s, h, g, j, tt, rt, at, it) {
  Ob = !1, Pb = null, Nb.apply(Sb, arguments);
}
function Ub(o, s, h, g, j, tt, rt, at, it) {
  if (Tb.apply(this, arguments), Ob) {
    if (!Ob) throw Error(p$1(198));
    var st = Pb;
    Ob = !1, Pb = null, Qb || (Qb = !0, Rb = st);
  }
}
function Vb(o) {
  var s = o, h = o;
  if (o.alternate) for (; s.return; ) s = s.return;
  else {
    o = s;
    do
      4098 & (s = o).flags && (h = s.return), o = s.return;
    while (o);
  }
  return s.tag === 3 ? h : null;
}
function Wb(o) {
  if (o.tag === 13) {
    var s = o.memoizedState;
    if (s === null && (o = o.alternate) !== null && (s = o.memoizedState), s !== null) return s.dehydrated;
  }
  return null;
}
function Xb(o) {
  if (Vb(o) !== o) throw Error(p$1(188));
}
function Yb(o) {
  var s = o.alternate;
  if (!s) {
    if ((s = Vb(o)) === null) throw Error(p$1(188));
    return s !== o ? null : o;
  }
  for (var h = o, g = s; ; ) {
    var j = h.return;
    if (j === null) break;
    var tt = j.alternate;
    if (tt === null) {
      if ((g = j.return) !== null) {
        h = g;
        continue;
      }
      break;
    }
    if (j.child === tt.child) {
      for (tt = j.child; tt; ) {
        if (tt === h) return Xb(j), o;
        if (tt === g) return Xb(j), s;
        tt = tt.sibling;
      }
      throw Error(p$1(188));
    }
    if (h.return !== g.return) h = j, g = tt;
    else {
      for (var rt = !1, at = j.child; at; ) {
        if (at === h) {
          rt = !0, h = j, g = tt;
          break;
        }
        if (at === g) {
          rt = !0, g = j, h = tt;
          break;
        }
        at = at.sibling;
      }
      if (!rt) {
        for (at = tt.child; at; ) {
          if (at === h) {
            rt = !0, h = tt, g = j;
            break;
          }
          if (at === g) {
            rt = !0, g = tt, h = j;
            break;
          }
          at = at.sibling;
        }
        if (!rt) throw Error(p$1(189));
      }
    }
    if (h.alternate !== g) throw Error(p$1(190));
  }
  if (h.tag !== 3) throw Error(p$1(188));
  return h.stateNode.current === h ? o : s;
}
function Zb(o) {
  return (o = Yb(o)) !== null ? $b(o) : null;
}
function $b(o) {
  if (o.tag === 5 || o.tag === 6) return o;
  for (o = o.child; o !== null; ) {
    var s = $b(o);
    if (s !== null) return s;
    o = o.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(o) {
  if (lc && typeof lc.onCommitFiberRoot == "function") try {
    lc.onCommitFiberRoot(kc, o, void 0, !(128 & ~o.current.flags));
  } catch {
  }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(o) {
  return (o >>>= 0) === 0 ? 32 : 31 - (pc(o) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(o) {
  switch (o & -o) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return 4194240 & o;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & o;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return o;
  }
}
function uc(o, s) {
  var h = o.pendingLanes;
  if (h === 0) return 0;
  var g = 0, j = o.suspendedLanes, tt = o.pingedLanes, rt = 268435455 & h;
  if (rt !== 0) {
    var at = rt & ~j;
    at !== 0 ? g = tc(at) : (tt &= rt) !== 0 && (g = tc(tt));
  } else (rt = h & ~j) !== 0 ? g = tc(rt) : tt !== 0 && (g = tc(tt));
  if (g === 0) return 0;
  if (s !== 0 && s !== g && !(s & j) && ((j = g & -g) >= (tt = s & -s) || j === 16 && 4194240 & tt)) return s;
  if (4 & g && (g |= 16 & h), (s = o.entangledLanes) !== 0) for (o = o.entanglements, s &= g; 0 < s; ) j = 1 << (h = 31 - oc(s)), g |= o[h], s &= ~j;
  return g;
}
function vc(o, s) {
  switch (o) {
    case 1:
    case 2:
    case 4:
      return s + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return s + 5e3;
    default:
      return -1;
  }
}
function wc(o, s) {
  for (var h = o.suspendedLanes, g = o.pingedLanes, j = o.expirationTimes, tt = o.pendingLanes; 0 < tt; ) {
    var rt = 31 - oc(tt), at = 1 << rt, it = j[rt];
    it === -1 ? at & h && !(at & g) || (j[rt] = vc(at, s)) : it <= s && (o.expiredLanes |= at), tt &= ~at;
  }
}
function xc(o) {
  return (o = -1073741825 & o.pendingLanes) !== 0 ? o : 1073741824 & o ? 1073741824 : 0;
}
function yc() {
  var o = rc;
  return !(4194240 & (rc <<= 1)) && (rc = 64), o;
}
function zc(o) {
  for (var s = [], h = 0; 31 > h; h++) s.push(o);
  return s;
}
function Ac(o, s, h) {
  o.pendingLanes |= s, s !== 536870912 && (o.suspendedLanes = 0, o.pingedLanes = 0), (o = o.eventTimes)[s = 31 - oc(s)] = h;
}
function Bc(o, s) {
  var h = o.pendingLanes & ~s;
  o.pendingLanes = s, o.suspendedLanes = 0, o.pingedLanes = 0, o.expiredLanes &= s, o.mutableReadLanes &= s, o.entangledLanes &= s, s = o.entanglements;
  var g = o.eventTimes;
  for (o = o.expirationTimes; 0 < h; ) {
    var j = 31 - oc(h), tt = 1 << j;
    s[j] = 0, g[j] = -1, o[j] = -1, h &= ~tt;
  }
}
function Cc(o, s) {
  var h = o.entangledLanes |= s;
  for (o = o.entanglements; h; ) {
    var g = 31 - oc(h), j = 1 << g;
    j & s | o[g] & s && (o[g] |= s), h &= ~j;
  }
}
var C$1 = 0;
function Dc(o) {
  return 1 < (o &= -o) ? 4 < o ? 268435455 & o ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = !1, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(o, s) {
  switch (o) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(s.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(s.pointerId);
  }
}
function Tc(o, s, h, g, j, tt) {
  return o === null || o.nativeEvent !== tt ? (o = { blockedOn: s, domEventName: h, eventSystemFlags: g, nativeEvent: tt, targetContainers: [j] }, s !== null && (s = Cb(s)) !== null && Fc(s), o) : (o.eventSystemFlags |= g, s = o.targetContainers, j !== null && s.indexOf(j) === -1 && s.push(j), o);
}
function Uc(o, s, h, g, j) {
  switch (s) {
    case "focusin":
      return Lc = Tc(Lc, o, s, h, g, j), !0;
    case "dragenter":
      return Mc = Tc(Mc, o, s, h, g, j), !0;
    case "mouseover":
      return Nc = Tc(Nc, o, s, h, g, j), !0;
    case "pointerover":
      var tt = j.pointerId;
      return Oc.set(tt, Tc(Oc.get(tt) || null, o, s, h, g, j)), !0;
    case "gotpointercapture":
      return tt = j.pointerId, Pc.set(tt, Tc(Pc.get(tt) || null, o, s, h, g, j)), !0;
  }
  return !1;
}
function Vc(o) {
  var s = Wc(o.target);
  if (s !== null) {
    var h = Vb(s);
    if (h !== null) {
      if ((s = h.tag) === 13) {
        if ((s = Wb(h)) !== null) return o.blockedOn = s, void Ic(o.priority, function() {
          Gc(h);
        });
      } else if (s === 3 && h.stateNode.current.memoizedState.isDehydrated) return void (o.blockedOn = h.tag === 3 ? h.stateNode.containerInfo : null);
    }
  }
  o.blockedOn = null;
}
function Xc(o) {
  if (o.blockedOn !== null) return !1;
  for (var s = o.targetContainers; 0 < s.length; ) {
    var h = Yc(o.domEventName, o.eventSystemFlags, s[0], o.nativeEvent);
    if (h !== null) return (s = Cb(h)) !== null && Fc(s), o.blockedOn = h, !1;
    var g = new (h = o.nativeEvent).constructor(h.type, h);
    wb = g, h.target.dispatchEvent(g), wb = null, s.shift();
  }
  return !0;
}
function Zc(o, s, h) {
  Xc(o) && h.delete(s);
}
function $c() {
  Jc = !1, Lc !== null && Xc(Lc) && (Lc = null), Mc !== null && Xc(Mc) && (Mc = null), Nc !== null && Xc(Nc) && (Nc = null), Oc.forEach(Zc), Pc.forEach(Zc);
}
function ad(o, s) {
  o.blockedOn === s && (o.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(o) {
  function s(j) {
    return ad(j, o);
  }
  if (0 < Kc.length) {
    ad(Kc[0], o);
    for (var h = 1; h < Kc.length; h++) {
      var g = Kc[h];
      g.blockedOn === o && (g.blockedOn = null);
    }
  }
  for (Lc !== null && ad(Lc, o), Mc !== null && ad(Mc, o), Nc !== null && ad(Nc, o), Oc.forEach(s), Pc.forEach(s), h = 0; h < Qc.length; h++) (g = Qc[h]).blockedOn === o && (g.blockedOn = null);
  for (; 0 < Qc.length && (h = Qc[0]).blockedOn === null; ) Vc(h), h.blockedOn === null && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = !0;
function ed(o, s, h, g) {
  var j = C$1, tt = cd.transition;
  cd.transition = null;
  try {
    C$1 = 1, fd(o, s, h, g);
  } finally {
    C$1 = j, cd.transition = tt;
  }
}
function gd(o, s, h, g) {
  var j = C$1, tt = cd.transition;
  cd.transition = null;
  try {
    C$1 = 4, fd(o, s, h, g);
  } finally {
    C$1 = j, cd.transition = tt;
  }
}
function fd(o, s, h, g) {
  if (dd) {
    var j = Yc(o, s, h, g);
    if (j === null) hd(o, s, g, id, h), Sc(o, g);
    else if (Uc(j, o, s, h, g)) g.stopPropagation();
    else if (Sc(o, g), 4 & s && -1 < Rc.indexOf(o)) {
      for (; j !== null; ) {
        var tt = Cb(j);
        if (tt !== null && Ec(tt), (tt = Yc(o, s, h, g)) === null && hd(o, s, g, id, h), tt === j) break;
        j = tt;
      }
      j !== null && g.stopPropagation();
    } else hd(o, s, g, null, h);
  }
}
var id = null;
function Yc(o, s, h, g) {
  if (id = null, (o = Wc(o = xb(g))) !== null) if ((s = Vb(o)) === null) o = null;
  else if ((h = s.tag) === 13) {
    if ((o = Wb(s)) !== null) return o;
    o = null;
  } else if (h === 3) {
    if (s.stateNode.current.memoizedState.isDehydrated) return s.tag === 3 ? s.stateNode.containerInfo : null;
    o = null;
  } else s !== o && (o = null);
  return id = o, null;
}
function jd(o) {
  switch (o) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md) return md;
  var o, s, h = ld, g = h.length, j = "value" in kd ? kd.value : kd.textContent, tt = j.length;
  for (o = 0; o < g && h[o] === j[o]; o++) ;
  var rt = g - o;
  for (s = 1; s <= rt && h[g - s] === j[tt - s]; s++) ;
  return md = j.slice(o, 1 < s ? 1 - s : void 0);
}
function od(o) {
  var s = o.keyCode;
  return "charCode" in o ? (o = o.charCode) === 0 && s === 13 && (o = 13) : o = s, o === 10 && (o = 13), 32 <= o || o === 13 ? o : 0;
}
function pd() {
  return !0;
}
function qd() {
  return !1;
}
function rd(o) {
  function s(h, g, j, tt, rt) {
    for (var at in this._reactName = h, this._targetInst = j, this.type = g, this.nativeEvent = tt, this.target = rt, this.currentTarget = null, o) o.hasOwnProperty(at) && (h = o[at], this[at] = h ? h(tt) : tt[at]);
    return this.isDefaultPrevented = (tt.defaultPrevented != null ? tt.defaultPrevented : tt.returnValue === !1) ? pd : qd, this.isPropagationStopped = qd, this;
  }
  return A$1(s.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var h = this.nativeEvent;
    h && (h.preventDefault ? h.preventDefault() : typeof h.returnValue != "unknown" && (h.returnValue = !1), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var h = this.nativeEvent;
    h && (h.stopPropagation ? h.stopPropagation() : typeof h.cancelBubble != "unknown" && (h.cancelBubble = !0), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd }), s;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(o) {
  return o.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$1({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$1({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(o) {
  return o.relatedTarget === void 0 ? o.fromElement === o.srcElement ? o.toElement : o.fromElement : o.relatedTarget;
}, movementX: function(o) {
  return "movementX" in o ? o.movementX : (o !== yd && (yd && o.type === "mousemove" ? (wd = o.screenX - yd.screenX, xd = o.screenY - yd.screenY) : xd = wd = 0, yd = o), wd);
}, movementY: function(o) {
  return "movementY" in o ? o.movementY : xd;
} }), Bd = rd(Ad), Cd = A$1({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$1({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$1({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$1({}, sd, { clipboardData: function(o) {
  return "clipboardData" in o ? o.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A$1({}, sd, { data: 0 }), Ld = rd(Kd), Md = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Nd = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(o) {
  var s = this.nativeEvent;
  return s.getModifierState ? s.getModifierState(o) : !!(o = Od[o]) && !!s[o];
}
function zd() {
  return Pd;
}
var Qd = A$1({}, ud, { key: function(o) {
  if (o.key) {
    var s = Md[o.key] || o.key;
    if (s !== "Unidentified") return s;
  }
  return o.type === "keypress" ? (o = od(o)) === 13 ? "Enter" : String.fromCharCode(o) : o.type === "keydown" || o.type === "keyup" ? Nd[o.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(o) {
  return o.type === "keypress" ? od(o) : 0;
}, keyCode: function(o) {
  return o.type === "keydown" || o.type === "keyup" ? o.keyCode : 0;
}, which: function(o) {
  return o.type === "keypress" ? od(o) : o.type === "keydown" || o.type === "keyup" ? o.keyCode : 0;
} }), Rd = rd(Qd), Sd = A$1({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$1({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$1({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$1({}, Ad, { deltaX: function(o) {
  return "deltaX" in o ? o.deltaX : "wheelDeltaX" in o ? -o.wheelDeltaX : 0;
}, deltaY: function(o) {
  return "deltaY" in o ? o.deltaY : "wheelDeltaY" in o ? -o.wheelDeltaY : "wheelDelta" in o ? -o.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = " ", fe = !1;
function ge(o, s) {
  switch (o) {
    case "keyup":
      return $d.indexOf(s.keyCode) !== -1;
    case "keydown":
      return s.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function he(o) {
  return typeof (o = o.detail) == "object" && "data" in o ? o.data : null;
}
var ie = !1;
function je(o, s) {
  switch (o) {
    case "compositionend":
      return he(s);
    case "keypress":
      return s.which !== 32 ? null : (fe = !0, ee);
    case "textInput":
      return (o = s.data) === ee && fe ? null : o;
    default:
      return null;
  }
}
function ke(o, s) {
  if (ie) return o === "compositionend" || !ae && ge(o, s) ? (o = nd(), md = ld = kd = null, ie = !1, o) : null;
  switch (o) {
    case "paste":
    default:
      return null;
    case "keypress":
      if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
        if (s.char && 1 < s.char.length) return s.char;
        if (s.which) return String.fromCharCode(s.which);
      }
      return null;
    case "compositionend":
      return de && s.locale !== "ko" ? null : s.data;
  }
}
var le = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function me(o) {
  var s = o && o.nodeName && o.nodeName.toLowerCase();
  return s === "input" ? !!le[o.type] : s === "textarea";
}
function ne(o, s, h, g) {
  Eb(g), 0 < (s = oe(s, "onChange")).length && (h = new td("onChange", "change", null, h, g), o.push({ event: h, listeners: s }));
}
var pe = null, qe = null;
function re(o) {
  se(o, 0);
}
function te(o) {
  if (Wa(ue(o))) return o;
}
function ve(o, s) {
  if (o === "change") return s;
}
var we = !1;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;"), ye = typeof ze.oninput == "function";
    }
    xe = ye;
  } else xe = !1;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(o) {
  if (o.propertyName === "value" && te(qe)) {
    var s = [];
    ne(s, qe, o, xb(o)), Jb(re, s);
  }
}
function Ce(o, s, h) {
  o === "focusin" ? (Ae(), qe = h, (pe = s).attachEvent("onpropertychange", Be)) : o === "focusout" && Ae();
}
function De(o) {
  if (o === "selectionchange" || o === "keyup" || o === "keydown") return te(qe);
}
function Ee(o, s) {
  if (o === "click") return te(s);
}
function Fe(o, s) {
  if (o === "input" || o === "change") return te(s);
}
function Ge(o, s) {
  return o === s && (o !== 0 || 1 / o == 1 / s) || o != o && s != s;
}
var He = typeof Object.is == "function" ? Object.is : Ge;
function Ie(o, s) {
  if (He(o, s)) return !0;
  if (typeof o != "object" || o === null || typeof s != "object" || s === null) return !1;
  var h = Object.keys(o), g = Object.keys(s);
  if (h.length !== g.length) return !1;
  for (g = 0; g < h.length; g++) {
    var j = h[g];
    if (!ja.call(s, j) || !He(o[j], s[j])) return !1;
  }
  return !0;
}
function Je(o) {
  for (; o && o.firstChild; ) o = o.firstChild;
  return o;
}
function Ke(o, s) {
  var h, g = Je(o);
  for (o = 0; g; ) {
    if (g.nodeType === 3) {
      if (h = o + g.textContent.length, o <= s && h >= s) return { node: g, offset: s - o };
      o = h;
    }
    t: {
      for (; g; ) {
        if (g.nextSibling) {
          g = g.nextSibling;
          break t;
        }
        g = g.parentNode;
      }
      g = void 0;
    }
    g = Je(g);
  }
}
function Le(o, s) {
  return !(!o || !s) && (o === s || (!o || o.nodeType !== 3) && (s && s.nodeType === 3 ? Le(o, s.parentNode) : "contains" in o ? o.contains(s) : !!o.compareDocumentPosition && !!(16 & o.compareDocumentPosition(s))));
}
function Me() {
  for (var o = window, s = Xa(); s instanceof o.HTMLIFrameElement; ) {
    try {
      var h = typeof s.contentWindow.location.href == "string";
    } catch {
      h = !1;
    }
    if (!h) break;
    s = Xa((o = s.contentWindow).document);
  }
  return s;
}
function Ne(o) {
  var s = o && o.nodeName && o.nodeName.toLowerCase();
  return s && (s === "input" && (o.type === "text" || o.type === "search" || o.type === "tel" || o.type === "url" || o.type === "password") || s === "textarea" || o.contentEditable === "true");
}
function Oe(o) {
  var s = Me(), h = o.focusedElem, g = o.selectionRange;
  if (s !== h && h && h.ownerDocument && Le(h.ownerDocument.documentElement, h)) {
    if (g !== null && Ne(h)) {
      if (s = g.start, (o = g.end) === void 0 && (o = s), "selectionStart" in h) h.selectionStart = s, h.selectionEnd = Math.min(o, h.value.length);
      else if ((o = (s = h.ownerDocument || document) && s.defaultView || window).getSelection) {
        o = o.getSelection();
        var j = h.textContent.length, tt = Math.min(g.start, j);
        g = g.end === void 0 ? tt : Math.min(g.end, j), !o.extend && tt > g && (j = g, g = tt, tt = j), j = Ke(h, tt);
        var rt = Ke(h, g);
        j && rt && (o.rangeCount !== 1 || o.anchorNode !== j.node || o.anchorOffset !== j.offset || o.focusNode !== rt.node || o.focusOffset !== rt.offset) && ((s = s.createRange()).setStart(j.node, j.offset), o.removeAllRanges(), tt > g ? (o.addRange(s), o.extend(rt.node, rt.offset)) : (s.setEnd(rt.node, rt.offset), o.addRange(s)));
      }
    }
    for (s = [], o = h; o = o.parentNode; ) o.nodeType === 1 && s.push({ element: o, left: o.scrollLeft, top: o.scrollTop });
    for (typeof h.focus == "function" && h.focus(), h = 0; h < s.length; h++) (o = s[h]).element.scrollLeft = o.left, o.element.scrollTop = o.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = !1;
function Ue(o, s, h) {
  var g = h.window === h ? h.document : h.nodeType === 9 ? h : h.ownerDocument;
  Te || Qe == null || Qe !== Xa(g) || ("selectionStart" in (g = Qe) && Ne(g) ? g = { start: g.selectionStart, end: g.selectionEnd } : g = { anchorNode: (g = (g.ownerDocument && g.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: g.anchorOffset, focusNode: g.focusNode, focusOffset: g.focusOffset }, Se && Ie(Se, g) || (Se = g, 0 < (g = oe(Re, "onSelect")).length && (s = new td("onSelect", "select", null, s, h), o.push({ event: s, listeners: g }), s.target = Qe)));
}
function Ve(o, s) {
  var h = {};
  return h[o.toLowerCase()] = s.toLowerCase(), h["Webkit" + o] = "webkit" + s, h["Moz" + o] = "moz" + s, h;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
function Ze(o) {
  if (Xe[o]) return Xe[o];
  if (!We[o]) return o;
  var s, h = We[o];
  for (s in h) if (h.hasOwnProperty(s) && s in Ye) return Xe[o] = h[s];
  return o;
}
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(o, s) {
  df.set(o, s), fa(s, [o]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd"), ff(af, "onAnimationIteration"), ff(bf, "onAnimationStart"), ff("dblclick", "onDoubleClick"), ff("focusin", "onFocus"), ff("focusout", "onBlur"), ff(cf, "onTransitionEnd"), ha("onMouseEnter", ["mouseout", "mouseover"]), ha("onMouseLeave", ["mouseout", "mouseover"]), ha("onPointerEnter", ["pointerout", "pointerover"]), ha("onPointerLeave", ["pointerout", "pointerover"]), fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(o, s, h) {
  var g = o.type || "unknown-event";
  o.currentTarget = h, Ub(g, s, void 0, o), o.currentTarget = null;
}
function se(o, s) {
  s = !!(4 & s);
  for (var h = 0; h < o.length; h++) {
    var g = o[h], j = g.event;
    g = g.listeners;
    t: {
      var tt = void 0;
      if (s) for (var rt = g.length - 1; 0 <= rt; rt--) {
        var at = g[rt], it = at.instance, st = at.currentTarget;
        if (at = at.listener, it !== tt && j.isPropagationStopped()) break t;
        nf(j, at, st), tt = it;
      }
      else for (rt = 0; rt < g.length; rt++) {
        if (it = (at = g[rt]).instance, st = at.currentTarget, at = at.listener, it !== tt && j.isPropagationStopped()) break t;
        nf(j, at, st), tt = it;
      }
    }
  }
  if (Qb) throw o = Rb, Qb = !1, Rb = null, o;
}
function D$1(o, s) {
  var h = s[of];
  h === void 0 && (h = s[of] = /* @__PURE__ */ new Set());
  var g = o + "__bubble";
  h.has(g) || (pf(s, o, 2, !1), h.add(g));
}
function qf(o, s, h) {
  var g = 0;
  s && (g |= 4), pf(h, o, g, s);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(o) {
  if (!o[rf]) {
    o[rf] = !0, da.forEach(function(h) {
      h !== "selectionchange" && (mf.has(h) || qf(h, !1, o), qf(h, !0, o));
    });
    var s = o.nodeType === 9 ? o : o.ownerDocument;
    s === null || s[rf] || (s[rf] = !0, qf("selectionchange", !1, s));
  }
}
function pf(o, s, h, g) {
  switch (jd(s)) {
    case 1:
      var j = ed;
      break;
    case 4:
      j = gd;
      break;
    default:
      j = fd;
  }
  h = j.bind(null, s, h, o), j = void 0, !Lb || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (j = !0), g ? j !== void 0 ? o.addEventListener(s, h, { capture: !0, passive: j }) : o.addEventListener(s, h, !0) : j !== void 0 ? o.addEventListener(s, h, { passive: j }) : o.addEventListener(s, h, !1);
}
function hd(o, s, h, g, j) {
  var tt = g;
  if (!(1 & s || 2 & s || g === null)) t: for (; ; ) {
    if (g === null) return;
    var rt = g.tag;
    if (rt === 3 || rt === 4) {
      var at = g.stateNode.containerInfo;
      if (at === j || at.nodeType === 8 && at.parentNode === j) break;
      if (rt === 4) for (rt = g.return; rt !== null; ) {
        var it = rt.tag;
        if ((it === 3 || it === 4) && ((it = rt.stateNode.containerInfo) === j || it.nodeType === 8 && it.parentNode === j)) return;
        rt = rt.return;
      }
      for (; at !== null; ) {
        if ((rt = Wc(at)) === null) return;
        if ((it = rt.tag) === 5 || it === 6) {
          g = tt = rt;
          continue t;
        }
        at = at.parentNode;
      }
    }
    g = g.return;
  }
  Jb(function() {
    var st = tt, lt = xb(h), ot = [];
    t: {
      var ft = df.get(o);
      if (ft !== void 0) {
        var ht = td, pt = o;
        switch (o) {
          case "keypress":
            if (od(h) === 0) break t;
          case "keydown":
          case "keyup":
            ht = Rd;
            break;
          case "focusin":
            pt = "focus", ht = Fd;
            break;
          case "focusout":
            pt = "blur", ht = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            ht = Fd;
            break;
          case "click":
            if (h.button === 2) break t;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            ht = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            ht = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            ht = Vd;
            break;
          case $e:
          case af:
          case bf:
            ht = Hd;
            break;
          case cf:
            ht = Xd;
            break;
          case "scroll":
            ht = vd;
            break;
          case "wheel":
            ht = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            ht = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            ht = Td;
        }
        var dt = !!(4 & s), ct = !dt && o === "scroll", mt = dt ? ft !== null ? ft + "Capture" : null : ft;
        dt = [];
        for (var yt, vt = st; vt !== null; ) {
          var _t = (yt = vt).stateNode;
          if (yt.tag === 5 && _t !== null && (yt = _t, mt !== null && (_t = Kb(vt, mt)) != null && dt.push(tf(vt, _t, yt))), ct) break;
          vt = vt.return;
        }
        0 < dt.length && (ft = new ht(ft, pt, null, h, lt), ot.push({ event: ft, listeners: dt }));
      }
    }
    if (!(7 & s)) {
      if (ht = o === "mouseout" || o === "pointerout", (!(ft = o === "mouseover" || o === "pointerover") || h === wb || !(pt = h.relatedTarget || h.fromElement) || !Wc(pt) && !pt[uf]) && (ht || ft) && (ft = lt.window === lt ? lt : (ft = lt.ownerDocument) ? ft.defaultView || ft.parentWindow : window, ht ? (ht = st, (pt = (pt = h.relatedTarget || h.toElement) ? Wc(pt) : null) !== null && (pt !== (ct = Vb(pt)) || pt.tag !== 5 && pt.tag !== 6) && (pt = null)) : (ht = null, pt = st), ht !== pt)) {
        if (dt = Bd, _t = "onMouseLeave", mt = "onMouseEnter", vt = "mouse", o !== "pointerout" && o !== "pointerover" || (dt = Td, _t = "onPointerLeave", mt = "onPointerEnter", vt = "pointer"), ct = ht == null ? ft : ue(ht), yt = pt == null ? ft : ue(pt), (ft = new dt(_t, vt + "leave", ht, h, lt)).target = ct, ft.relatedTarget = yt, _t = null, Wc(lt) === st && ((dt = new dt(mt, vt + "enter", pt, h, lt)).target = yt, dt.relatedTarget = ct, _t = dt), ct = _t, ht && pt) t: {
          for (mt = pt, vt = 0, yt = dt = ht; yt; yt = vf(yt)) vt++;
          for (yt = 0, _t = mt; _t; _t = vf(_t)) yt++;
          for (; 0 < vt - yt; ) dt = vf(dt), vt--;
          for (; 0 < yt - vt; ) mt = vf(mt), yt--;
          for (; vt--; ) {
            if (dt === mt || mt !== null && dt === mt.alternate) break t;
            dt = vf(dt), mt = vf(mt);
          }
          dt = null;
        }
        else dt = null;
        ht !== null && wf(ot, ft, ht, dt, !1), pt !== null && ct !== null && wf(ot, ct, pt, dt, !0);
      }
      if ((ht = (ft = st ? ue(st) : window).nodeName && ft.nodeName.toLowerCase()) === "select" || ht === "input" && ft.type === "file") var Pt = ve;
      else if (me(ft)) if (we) Pt = Fe;
      else {
        Pt = De;
        var bt = Ce;
      }
      else (ht = ft.nodeName) && ht.toLowerCase() === "input" && (ft.type === "checkbox" || ft.type === "radio") && (Pt = Ee);
      switch (Pt && (Pt = Pt(o, st)) ? ne(ot, Pt, h, lt) : (bt && bt(o, ft, st), o === "focusout" && (bt = ft._wrapperState) && bt.controlled && ft.type === "number" && cb(ft, "number", ft.value)), bt = st ? ue(st) : window, o) {
        case "focusin":
          (me(bt) || bt.contentEditable === "true") && (Qe = bt, Re = st, Se = null);
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = !1, Ue(ot, h, lt);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue(ot, h, lt);
      }
      var kt;
      if (ae) t: {
        switch (o) {
          case "compositionstart":
            var wt = "onCompositionStart";
            break t;
          case "compositionend":
            wt = "onCompositionEnd";
            break t;
          case "compositionupdate":
            wt = "onCompositionUpdate";
            break t;
        }
        wt = void 0;
      }
      else ie ? ge(o, h) && (wt = "onCompositionEnd") : o === "keydown" && h.keyCode === 229 && (wt = "onCompositionStart");
      wt && (de && h.locale !== "ko" && (ie || wt !== "onCompositionStart" ? wt === "onCompositionEnd" && ie && (kt = nd()) : (ld = "value" in (kd = lt) ? kd.value : kd.textContent, ie = !0)), 0 < (bt = oe(st, wt)).length && (wt = new Ld(wt, o, null, h, lt), ot.push({ event: wt, listeners: bt }), (kt || (kt = he(h)) !== null) && (wt.data = kt))), (kt = ce ? je(o, h) : ke(o, h)) && 0 < (st = oe(st, "onBeforeInput")).length && (lt = new Ld("onBeforeInput", "beforeinput", null, h, lt), ot.push({ event: lt, listeners: st }), lt.data = kt);
    }
    se(ot, s);
  });
}
function tf(o, s, h) {
  return { instance: o, listener: s, currentTarget: h };
}
function oe(o, s) {
  for (var h = s + "Capture", g = []; o !== null; ) {
    var j = o, tt = j.stateNode;
    j.tag === 5 && tt !== null && (j = tt, (tt = Kb(o, h)) != null && g.unshift(tf(o, tt, j)), (tt = Kb(o, s)) != null && g.push(tf(o, tt, j))), o = o.return;
  }
  return g;
}
function vf(o) {
  if (o === null) return null;
  do
    o = o.return;
  while (o && o.tag !== 5);
  return o || null;
}
function wf(o, s, h, g, j) {
  for (var tt = s._reactName, rt = []; h !== null && h !== g; ) {
    var at = h, it = at.alternate, st = at.stateNode;
    if (it !== null && it === g) break;
    at.tag === 5 && st !== null && (at = st, j ? (it = Kb(h, tt)) != null && rt.unshift(tf(h, it, at)) : j || (it = Kb(h, tt)) != null && rt.push(tf(h, it, at))), h = h.return;
  }
  rt.length !== 0 && o.push({ event: s, listeners: rt });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(o) {
  return (typeof o == "string" ? o : "" + o).replace(xf, `
`).replace(yf, "");
}
function Af(o, s, h) {
  if (s = zf(s), zf(o) !== s && h) throw Error(p$1(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(o, s) {
  return o === "textarea" || o === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null;
}
var Ff = typeof setTimeout == "function" ? setTimeout : void 0, Gf = typeof clearTimeout == "function" ? clearTimeout : void 0, Hf = typeof Promise == "function" ? Promise : void 0, Jf = typeof queueMicrotask == "function" ? queueMicrotask : Hf !== void 0 ? function(o) {
  return Hf.resolve(null).then(o).catch(If);
} : Ff;
function If(o) {
  setTimeout(function() {
    throw o;
  });
}
function Kf(o, s) {
  var h = s, g = 0;
  do {
    var j = h.nextSibling;
    if (o.removeChild(h), j && j.nodeType === 8) if ((h = j.data) === "/$") {
      if (g === 0) return o.removeChild(j), void bd(s);
      g--;
    } else h !== "$" && h !== "$?" && h !== "$!" || g++;
    h = j;
  } while (h);
  bd(s);
}
function Lf(o) {
  for (; o != null; o = o.nextSibling) {
    var s = o.nodeType;
    if (s === 1 || s === 3) break;
    if (s === 8) {
      if ((s = o.data) === "$" || s === "$!" || s === "$?") break;
      if (s === "/$") return null;
    }
  }
  return o;
}
function Mf(o) {
  o = o.previousSibling;
  for (var s = 0; o; ) {
    if (o.nodeType === 8) {
      var h = o.data;
      if (h === "$" || h === "$!" || h === "$?") {
        if (s === 0) return o;
        s--;
      } else h === "/$" && s++;
    }
    o = o.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(o) {
  var s = o[Of];
  if (s) return s;
  for (var h = o.parentNode; h; ) {
    if (s = h[uf] || h[Of]) {
      if (h = s.alternate, s.child !== null || h !== null && h.child !== null) for (o = Mf(o); o !== null; ) {
        if (h = o[Of]) return h;
        o = Mf(o);
      }
      return s;
    }
    h = (o = h).parentNode;
  }
  return null;
}
function Cb(o) {
  return !(o = o[Of] || o[uf]) || o.tag !== 5 && o.tag !== 6 && o.tag !== 13 && o.tag !== 3 ? null : o;
}
function ue(o) {
  if (o.tag === 5 || o.tag === 6) return o.stateNode;
  throw Error(p$1(33));
}
function Db(o) {
  return o[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(o) {
  return { current: o };
}
function E$1(o) {
  0 > Tf || (o.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(o, s) {
  Tf++, Sf[Tf] = o.current, o.current = s;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(!1), Xf = Vf;
function Yf(o, s) {
  var h = o.type.contextTypes;
  if (!h) return Vf;
  var g = o.stateNode;
  if (g && g.__reactInternalMemoizedUnmaskedChildContext === s) return g.__reactInternalMemoizedMaskedChildContext;
  var j, tt = {};
  for (j in h) tt[j] = s[j];
  return g && ((o = o.stateNode).__reactInternalMemoizedUnmaskedChildContext = s, o.__reactInternalMemoizedMaskedChildContext = tt), tt;
}
function Zf(o) {
  return (o = o.childContextTypes) != null;
}
function $f() {
  E$1(Wf), E$1(H);
}
function ag(o, s, h) {
  if (H.current !== Vf) throw Error(p$1(168));
  G(H, s), G(Wf, h);
}
function bg(o, s, h) {
  var g = o.stateNode;
  if (s = s.childContextTypes, typeof g.getChildContext != "function") return h;
  for (var j in g = g.getChildContext()) if (!(j in s)) throw Error(p$1(108, Ra(o) || "Unknown", j));
  return A$1({}, h, g);
}
function cg(o) {
  return o = (o = o.stateNode) && o.__reactInternalMemoizedMergedChildContext || Vf, Xf = H.current, G(H, o), G(Wf, Wf.current), !0;
}
function dg(o, s, h) {
  var g = o.stateNode;
  if (!g) throw Error(p$1(169));
  h ? (o = bg(o, s, Xf), g.__reactInternalMemoizedMergedChildContext = o, E$1(Wf), E$1(H), G(H, o)) : E$1(Wf), G(Wf, h);
}
var eg = null, fg = !1, gg = !1;
function hg(o) {
  eg === null ? eg = [o] : eg.push(o);
}
function ig(o) {
  fg = !0, hg(o);
}
function jg() {
  if (!gg && eg !== null) {
    gg = !0;
    var o = 0, s = C$1;
    try {
      var h = eg;
      for (C$1 = 1; o < h.length; o++) {
        var g = h[o];
        do
          g = g(!0);
        while (g !== null);
      }
      eg = null, fg = !1;
    } catch (j) {
      throw eg !== null && (eg = eg.slice(o + 1)), ac(fc, jg), j;
    } finally {
      C$1 = s, gg = !1;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(o, s) {
  kg[lg++] = ng, kg[lg++] = mg, mg = o, ng = s;
}
function ug(o, s, h) {
  og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, qg = o;
  var g = rg;
  o = sg;
  var j = 32 - oc(g) - 1;
  g &= ~(1 << j), h += 1;
  var tt = 32 - oc(s) + j;
  if (30 < tt) {
    var rt = j - j % 5;
    tt = (g & (1 << rt) - 1).toString(32), g >>= rt, j -= rt, rg = 1 << 32 - oc(s) + j | h << j | g, sg = tt + o;
  } else rg = 1 << tt | h << j | g, sg = o;
}
function vg(o) {
  o.return !== null && (tg(o, 1), ug(o, 1, 0));
}
function wg(o) {
  for (; o === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; o === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I$1 = !1, zg = null;
function Ag(o, s) {
  var h = Bg(5, null, null, 0);
  h.elementType = "DELETED", h.stateNode = s, h.return = o, (s = o.deletions) === null ? (o.deletions = [h], o.flags |= 16) : s.push(h);
}
function Cg(o, s) {
  switch (o.tag) {
    case 5:
      var h = o.type;
      return (s = s.nodeType !== 1 || h.toLowerCase() !== s.nodeName.toLowerCase() ? null : s) !== null && (o.stateNode = s, xg = o, yg = Lf(s.firstChild), !0);
    case 6:
      return (s = o.pendingProps === "" || s.nodeType !== 3 ? null : s) !== null && (o.stateNode = s, xg = o, yg = null, !0);
    case 13:
      return (s = s.nodeType !== 8 ? null : s) !== null && (h = qg !== null ? { id: rg, overflow: sg } : null, o.memoizedState = { dehydrated: s, treeContext: h, retryLane: 1073741824 }, (h = Bg(18, null, null, 0)).stateNode = s, h.return = o, o.child = h, xg = o, yg = null, !0);
    default:
      return !1;
  }
}
function Dg(o) {
  return !(!(1 & o.mode) || 128 & o.flags);
}
function Eg(o) {
  if (I$1) {
    var s = yg;
    if (s) {
      var h = s;
      if (!Cg(o, s)) {
        if (Dg(o)) throw Error(p$1(418));
        s = Lf(h.nextSibling);
        var g = xg;
        s && Cg(o, s) ? Ag(g, h) : (o.flags = -4097 & o.flags | 2, I$1 = !1, xg = o);
      }
    } else {
      if (Dg(o)) throw Error(p$1(418));
      o.flags = -4097 & o.flags | 2, I$1 = !1, xg = o;
    }
  }
}
function Fg(o) {
  for (o = o.return; o !== null && o.tag !== 5 && o.tag !== 3 && o.tag !== 13; ) o = o.return;
  xg = o;
}
function Gg(o) {
  if (o !== xg) return !1;
  if (!I$1) return Fg(o), I$1 = !0, !1;
  var s;
  if ((s = o.tag !== 3) && !(s = o.tag !== 5) && (s = (s = o.type) !== "head" && s !== "body" && !Ef(o.type, o.memoizedProps)), s && (s = yg)) {
    if (Dg(o)) throw Hg(), Error(p$1(418));
    for (; s; ) Ag(o, s), s = Lf(s.nextSibling);
  }
  if (Fg(o), o.tag === 13) {
    if (!(o = (o = o.memoizedState) !== null ? o.dehydrated : null)) throw Error(p$1(317));
    t: {
      for (o = o.nextSibling, s = 0; o; ) {
        if (o.nodeType === 8) {
          var h = o.data;
          if (h === "/$") {
            if (s === 0) {
              yg = Lf(o.nextSibling);
              break t;
            }
            s--;
          } else h !== "$" && h !== "$!" && h !== "$?" || s++;
        }
        o = o.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(o.stateNode.nextSibling) : null;
  return !0;
}
function Hg() {
  for (var o = yg; o; ) o = Lf(o.nextSibling);
}
function Ig() {
  yg = xg = null, I$1 = !1;
}
function Jg(o) {
  zg === null ? zg = [o] : zg.push(o);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(o, s, h) {
  if ((o = h.ref) !== null && typeof o != "function" && typeof o != "object") {
    if (h._owner) {
      if (h = h._owner) {
        if (h.tag !== 1) throw Error(p$1(309));
        var g = h.stateNode;
      }
      if (!g) throw Error(p$1(147, o));
      var j = g, tt = "" + o;
      return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === tt ? s.ref : (s = function(rt) {
        var at = j.refs;
        rt === null ? delete at[tt] : at[tt] = rt;
      }, s._stringRef = tt, s);
    }
    if (typeof o != "string") throw Error(p$1(284));
    if (!h._owner) throw Error(p$1(290, o));
  }
  return o;
}
function Mg(o, s) {
  throw o = Object.prototype.toString.call(s), Error(p$1(31, o === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : o));
}
function Ng(o) {
  return (0, o._init)(o._payload);
}
function Og(o) {
  function s(ct, mt) {
    if (o) {
      var yt = ct.deletions;
      yt === null ? (ct.deletions = [mt], ct.flags |= 16) : yt.push(mt);
    }
  }
  function h(ct, mt) {
    if (!o) return null;
    for (; mt !== null; ) s(ct, mt), mt = mt.sibling;
    return null;
  }
  function g(ct, mt) {
    for (ct = /* @__PURE__ */ new Map(); mt !== null; ) mt.key !== null ? ct.set(mt.key, mt) : ct.set(mt.index, mt), mt = mt.sibling;
    return ct;
  }
  function j(ct, mt) {
    return (ct = Pg(ct, mt)).index = 0, ct.sibling = null, ct;
  }
  function tt(ct, mt, yt) {
    return ct.index = yt, o ? (yt = ct.alternate) !== null ? (yt = yt.index) < mt ? (ct.flags |= 2, mt) : yt : (ct.flags |= 2, mt) : (ct.flags |= 1048576, mt);
  }
  function rt(ct) {
    return o && ct.alternate === null && (ct.flags |= 2), ct;
  }
  function at(ct, mt, yt, vt) {
    return mt === null || mt.tag !== 6 ? ((mt = Qg(yt, ct.mode, vt)).return = ct, mt) : ((mt = j(mt, yt)).return = ct, mt);
  }
  function it(ct, mt, yt, vt) {
    var _t = yt.type;
    return _t === ya ? lt(ct, mt, yt.props.children, vt, yt.key) : mt !== null && (mt.elementType === _t || typeof _t == "object" && _t !== null && _t.$$typeof === Ha && Ng(_t) === mt.type) ? ((vt = j(mt, yt.props)).ref = Lg(ct, mt, yt), vt.return = ct, vt) : ((vt = Rg(yt.type, yt.key, yt.props, null, ct.mode, vt)).ref = Lg(ct, mt, yt), vt.return = ct, vt);
  }
  function st(ct, mt, yt, vt) {
    return mt === null || mt.tag !== 4 || mt.stateNode.containerInfo !== yt.containerInfo || mt.stateNode.implementation !== yt.implementation ? ((mt = Sg(yt, ct.mode, vt)).return = ct, mt) : ((mt = j(mt, yt.children || [])).return = ct, mt);
  }
  function lt(ct, mt, yt, vt, _t) {
    return mt === null || mt.tag !== 7 ? ((mt = Tg(yt, ct.mode, vt, _t)).return = ct, mt) : ((mt = j(mt, yt)).return = ct, mt);
  }
  function ot(ct, mt, yt) {
    if (typeof mt == "string" && mt !== "" || typeof mt == "number") return (mt = Qg("" + mt, ct.mode, yt)).return = ct, mt;
    if (typeof mt == "object" && mt !== null) {
      switch (mt.$$typeof) {
        case va:
          return (yt = Rg(mt.type, mt.key, mt.props, null, ct.mode, yt)).ref = Lg(ct, null, mt), yt.return = ct, yt;
        case wa:
          return (mt = Sg(mt, ct.mode, yt)).return = ct, mt;
        case Ha:
          return ot(ct, (0, mt._init)(mt._payload), yt);
      }
      if (eb(mt) || Ka(mt)) return (mt = Tg(mt, ct.mode, yt, null)).return = ct, mt;
      Mg(ct, mt);
    }
    return null;
  }
  function ft(ct, mt, yt, vt) {
    var _t = mt !== null ? mt.key : null;
    if (typeof yt == "string" && yt !== "" || typeof yt == "number") return _t !== null ? null : at(ct, mt, "" + yt, vt);
    if (typeof yt == "object" && yt !== null) {
      switch (yt.$$typeof) {
        case va:
          return yt.key === _t ? it(ct, mt, yt, vt) : null;
        case wa:
          return yt.key === _t ? st(ct, mt, yt, vt) : null;
        case Ha:
          return ft(ct, mt, (_t = yt._init)(yt._payload), vt);
      }
      if (eb(yt) || Ka(yt)) return _t !== null ? null : lt(ct, mt, yt, vt, null);
      Mg(ct, yt);
    }
    return null;
  }
  function ht(ct, mt, yt, vt, _t) {
    if (typeof vt == "string" && vt !== "" || typeof vt == "number") return at(mt, ct = ct.get(yt) || null, "" + vt, _t);
    if (typeof vt == "object" && vt !== null) {
      switch (vt.$$typeof) {
        case va:
          return it(mt, ct = ct.get(vt.key === null ? yt : vt.key) || null, vt, _t);
        case wa:
          return st(mt, ct = ct.get(vt.key === null ? yt : vt.key) || null, vt, _t);
        case Ha:
          return ht(ct, mt, yt, (0, vt._init)(vt._payload), _t);
      }
      if (eb(vt) || Ka(vt)) return lt(mt, ct = ct.get(yt) || null, vt, _t, null);
      Mg(mt, vt);
    }
    return null;
  }
  function pt(ct, mt, yt, vt) {
    for (var _t = null, Pt = null, bt = mt, kt = mt = 0, wt = null; bt !== null && kt < yt.length; kt++) {
      bt.index > kt ? (wt = bt, bt = null) : wt = bt.sibling;
      var xt = ft(ct, bt, yt[kt], vt);
      if (xt === null) {
        bt === null && (bt = wt);
        break;
      }
      o && bt && xt.alternate === null && s(ct, bt), mt = tt(xt, mt, kt), Pt === null ? _t = xt : Pt.sibling = xt, Pt = xt, bt = wt;
    }
    if (kt === yt.length) return h(ct, bt), I$1 && tg(ct, kt), _t;
    if (bt === null) {
      for (; kt < yt.length; kt++) (bt = ot(ct, yt[kt], vt)) !== null && (mt = tt(bt, mt, kt), Pt === null ? _t = bt : Pt.sibling = bt, Pt = bt);
      return I$1 && tg(ct, kt), _t;
    }
    for (bt = g(ct, bt); kt < yt.length; kt++) (wt = ht(bt, ct, kt, yt[kt], vt)) !== null && (o && wt.alternate !== null && bt.delete(wt.key === null ? kt : wt.key), mt = tt(wt, mt, kt), Pt === null ? _t = wt : Pt.sibling = wt, Pt = wt);
    return o && bt.forEach(function(Tt) {
      return s(ct, Tt);
    }), I$1 && tg(ct, kt), _t;
  }
  function dt(ct, mt, yt, vt) {
    var _t = Ka(yt);
    if (typeof _t != "function") throw Error(p$1(150));
    if ((yt = _t.call(yt)) == null) throw Error(p$1(151));
    for (var Pt = _t = null, bt = mt, kt = mt = 0, wt = null, xt = yt.next(); bt !== null && !xt.done; kt++, xt = yt.next()) {
      bt.index > kt ? (wt = bt, bt = null) : wt = bt.sibling;
      var Tt = ft(ct, bt, xt.value, vt);
      if (Tt === null) {
        bt === null && (bt = wt);
        break;
      }
      o && bt && Tt.alternate === null && s(ct, bt), mt = tt(Tt, mt, kt), Pt === null ? _t = Tt : Pt.sibling = Tt, Pt = Tt, bt = wt;
    }
    if (xt.done) return h(ct, bt), I$1 && tg(ct, kt), _t;
    if (bt === null) {
      for (; !xt.done; kt++, xt = yt.next()) (xt = ot(ct, xt.value, vt)) !== null && (mt = tt(xt, mt, kt), Pt === null ? _t = xt : Pt.sibling = xt, Pt = xt);
      return I$1 && tg(ct, kt), _t;
    }
    for (bt = g(ct, bt); !xt.done; kt++, xt = yt.next()) (xt = ht(bt, ct, kt, xt.value, vt)) !== null && (o && xt.alternate !== null && bt.delete(xt.key === null ? kt : xt.key), mt = tt(xt, mt, kt), Pt === null ? _t = xt : Pt.sibling = xt, Pt = xt);
    return o && bt.forEach(function(It) {
      return s(ct, It);
    }), I$1 && tg(ct, kt), _t;
  }
  return function ct(mt, yt, vt, _t) {
    if (typeof vt == "object" && vt !== null && vt.type === ya && vt.key === null && (vt = vt.props.children), typeof vt == "object" && vt !== null) {
      switch (vt.$$typeof) {
        case va:
          t: {
            for (var Pt = vt.key, bt = yt; bt !== null; ) {
              if (bt.key === Pt) {
                if ((Pt = vt.type) === ya) {
                  if (bt.tag === 7) {
                    h(mt, bt.sibling), (yt = j(bt, vt.props.children)).return = mt, mt = yt;
                    break t;
                  }
                } else if (bt.elementType === Pt || typeof Pt == "object" && Pt !== null && Pt.$$typeof === Ha && Ng(Pt) === bt.type) {
                  h(mt, bt.sibling), (yt = j(bt, vt.props)).ref = Lg(mt, bt, vt), yt.return = mt, mt = yt;
                  break t;
                }
                h(mt, bt);
                break;
              }
              s(mt, bt), bt = bt.sibling;
            }
            vt.type === ya ? ((yt = Tg(vt.props.children, mt.mode, _t, vt.key)).return = mt, mt = yt) : ((_t = Rg(vt.type, vt.key, vt.props, null, mt.mode, _t)).ref = Lg(mt, yt, vt), _t.return = mt, mt = _t);
          }
          return rt(mt);
        case wa:
          t: {
            for (bt = vt.key; yt !== null; ) {
              if (yt.key === bt) {
                if (yt.tag === 4 && yt.stateNode.containerInfo === vt.containerInfo && yt.stateNode.implementation === vt.implementation) {
                  h(mt, yt.sibling), (yt = j(yt, vt.children || [])).return = mt, mt = yt;
                  break t;
                }
                h(mt, yt);
                break;
              }
              s(mt, yt), yt = yt.sibling;
            }
            (yt = Sg(vt, mt.mode, _t)).return = mt, mt = yt;
          }
          return rt(mt);
        case Ha:
          return ct(mt, yt, (bt = vt._init)(vt._payload), _t);
      }
      if (eb(vt)) return pt(mt, yt, vt, _t);
      if (Ka(vt)) return dt(mt, yt, vt, _t);
      Mg(mt, vt);
    }
    return typeof vt == "string" && vt !== "" || typeof vt == "number" ? (vt = "" + vt, yt !== null && yt.tag === 6 ? (h(mt, yt.sibling), (yt = j(yt, vt)).return = mt, mt = yt) : (h(mt, yt), (yt = Qg(vt, mt.mode, _t)).return = mt, mt = yt), rt(mt)) : h(mt, yt);
  };
}
var Ug = Og(!0), Vg = Og(!1), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(o) {
  var s = Wg.current;
  E$1(Wg), o._currentValue = s;
}
function bh(o, s, h) {
  for (; o !== null; ) {
    var g = o.alternate;
    if ((o.childLanes & s) !== s ? (o.childLanes |= s, g !== null && (g.childLanes |= s)) : g !== null && (g.childLanes & s) !== s && (g.childLanes |= s), o === h) break;
    o = o.return;
  }
}
function ch(o, s) {
  Xg = o, Zg = Yg = null, (o = o.dependencies) !== null && o.firstContext !== null && (o.lanes & s && (dh = !0), o.firstContext = null);
}
function eh(o) {
  var s = o._currentValue;
  if (Zg !== o) if (o = { context: o, memoizedValue: s, next: null }, Yg === null) {
    if (Xg === null) throw Error(p$1(308));
    Yg = o, Xg.dependencies = { lanes: 0, firstContext: o };
  } else Yg = Yg.next = o;
  return s;
}
var fh = null;
function gh(o) {
  fh === null ? fh = [o] : fh.push(o);
}
function hh(o, s, h, g) {
  var j = s.interleaved;
  return j === null ? (h.next = h, gh(s)) : (h.next = j.next, j.next = h), s.interleaved = h, ih(o, g);
}
function ih(o, s) {
  o.lanes |= s;
  var h = o.alternate;
  for (h !== null && (h.lanes |= s), h = o, o = o.return; o !== null; ) o.childLanes |= s, (h = o.alternate) !== null && (h.childLanes |= s), h = o, o = o.return;
  return h.tag === 3 ? h.stateNode : null;
}
var jh = !1;
function kh(o) {
  o.updateQueue = { baseState: o.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lh(o, s) {
  o = o.updateQueue, s.updateQueue === o && (s.updateQueue = { baseState: o.baseState, firstBaseUpdate: o.firstBaseUpdate, lastBaseUpdate: o.lastBaseUpdate, shared: o.shared, effects: o.effects });
}
function mh(o, s) {
  return { eventTime: o, lane: s, tag: 0, payload: null, callback: null, next: null };
}
function nh(o, s, h) {
  var g = o.updateQueue;
  if (g === null) return null;
  if (g = g.shared, 2 & K) {
    var j = g.pending;
    return j === null ? s.next = s : (s.next = j.next, j.next = s), g.pending = s, ih(o, h);
  }
  return (j = g.interleaved) === null ? (s.next = s, gh(g)) : (s.next = j.next, j.next = s), g.interleaved = s, ih(o, h);
}
function oh(o, s, h) {
  if ((s = s.updateQueue) !== null && (s = s.shared, 4194240 & h)) {
    var g = s.lanes;
    h |= g &= o.pendingLanes, s.lanes = h, Cc(o, h);
  }
}
function ph(o, s) {
  var h = o.updateQueue, g = o.alternate;
  if (g !== null && h === (g = g.updateQueue)) {
    var j = null, tt = null;
    if ((h = h.firstBaseUpdate) !== null) {
      do {
        var rt = { eventTime: h.eventTime, lane: h.lane, tag: h.tag, payload: h.payload, callback: h.callback, next: null };
        tt === null ? j = tt = rt : tt = tt.next = rt, h = h.next;
      } while (h !== null);
      tt === null ? j = tt = s : tt = tt.next = s;
    } else j = tt = s;
    return h = { baseState: g.baseState, firstBaseUpdate: j, lastBaseUpdate: tt, shared: g.shared, effects: g.effects }, void (o.updateQueue = h);
  }
  (o = h.lastBaseUpdate) === null ? h.firstBaseUpdate = s : o.next = s, h.lastBaseUpdate = s;
}
function qh(o, s, h, g) {
  var j = o.updateQueue;
  jh = !1;
  var tt = j.firstBaseUpdate, rt = j.lastBaseUpdate, at = j.shared.pending;
  if (at !== null) {
    j.shared.pending = null;
    var it = at, st = it.next;
    it.next = null, rt === null ? tt = st : rt.next = st, rt = it;
    var lt = o.alternate;
    lt !== null && (at = (lt = lt.updateQueue).lastBaseUpdate) !== rt && (at === null ? lt.firstBaseUpdate = st : at.next = st, lt.lastBaseUpdate = it);
  }
  if (tt !== null) {
    var ot = j.baseState;
    for (rt = 0, lt = st = it = null, at = tt; ; ) {
      var ft = at.lane, ht = at.eventTime;
      if ((g & ft) === ft) {
        lt !== null && (lt = lt.next = { eventTime: ht, lane: 0, tag: at.tag, payload: at.payload, callback: at.callback, next: null });
        t: {
          var pt = o, dt = at;
          switch (ft = s, ht = h, dt.tag) {
            case 1:
              if (typeof (pt = dt.payload) == "function") {
                ot = pt.call(ht, ot, ft);
                break t;
              }
              ot = pt;
              break t;
            case 3:
              pt.flags = -65537 & pt.flags | 128;
            case 0:
              if ((ft = typeof (pt = dt.payload) == "function" ? pt.call(ht, ot, ft) : pt) == null) break t;
              ot = A$1({}, ot, ft);
              break t;
            case 2:
              jh = !0;
          }
        }
        at.callback !== null && at.lane !== 0 && (o.flags |= 64, (ft = j.effects) === null ? j.effects = [at] : ft.push(at));
      } else ht = { eventTime: ht, lane: ft, tag: at.tag, payload: at.payload, callback: at.callback, next: null }, lt === null ? (st = lt = ht, it = ot) : lt = lt.next = ht, rt |= ft;
      if ((at = at.next) === null) {
        if ((at = j.shared.pending) === null) break;
        at = (ft = at).next, ft.next = null, j.lastBaseUpdate = ft, j.shared.pending = null;
      }
    }
    if (lt === null && (it = ot), j.baseState = it, j.firstBaseUpdate = st, j.lastBaseUpdate = lt, (s = j.shared.interleaved) !== null) {
      j = s;
      do
        rt |= j.lane, j = j.next;
      while (j !== s);
    } else tt === null && (j.shared.lanes = 0);
    rh |= rt, o.lanes = rt, o.memoizedState = ot;
  }
}
function sh(o, s, h) {
  if (o = s.effects, s.effects = null, o !== null) for (s = 0; s < o.length; s++) {
    var g = o[s], j = g.callback;
    if (j !== null) {
      if (g.callback = null, g = h, typeof j != "function") throw Error(p$1(191, j));
      j.call(g);
    }
  }
}
var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
function xh(o) {
  if (o === th) throw Error(p$1(174));
  return o;
}
function yh(o, s) {
  switch (G(wh, s), G(vh, o), G(uh, th), o = s.nodeType) {
    case 9:
    case 11:
      s = (s = s.documentElement) ? s.namespaceURI : lb(null, "");
      break;
    default:
      s = lb(s = (o = o === 8 ? s.parentNode : s).namespaceURI || null, o = o.tagName);
  }
  E$1(uh), G(uh, s);
}
function zh() {
  E$1(uh), E$1(vh), E$1(wh);
}
function Ah(o) {
  xh(wh.current);
  var s = xh(uh.current), h = lb(s, o.type);
  s !== h && (G(vh, o), G(uh, h));
}
function Bh(o) {
  vh.current === o && (E$1(uh), E$1(vh));
}
var L = Uf(0);
function Ch(o) {
  for (var s = o; s !== null; ) {
    if (s.tag === 13) {
      var h = s.memoizedState;
      if (h !== null && ((h = h.dehydrated) === null || h.data === "$?" || h.data === "$!")) return s;
    } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
      if (128 & s.flags) return s;
    } else if (s.child !== null) {
      s.child.return = s, s = s.child;
      continue;
    }
    if (s === o) break;
    for (; s.sibling === null; ) {
      if (s.return === null || s.return === o) return null;
      s = s.return;
    }
    s.sibling.return = s.return, s = s.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var o = 0; o < Dh.length; o++) Dh[o]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O$1 = null, Ih = !1, Jh = !1, Kh = 0, Lh = 0;
function P() {
  throw Error(p$1(321));
}
function Mh(o, s) {
  if (s === null) return !1;
  for (var h = 0; h < s.length && h < o.length; h++) if (!He(o[h], s[h])) return !1;
  return !0;
}
function Nh(o, s, h, g, j, tt) {
  if (Hh = tt, M = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, Fh.current = o === null || o.memoizedState === null ? Oh : Ph, o = h(g, j), Jh) {
    tt = 0;
    do {
      if (Jh = !1, Kh = 0, 25 <= tt) throw Error(p$1(301));
      tt += 1, O$1 = N = null, s.updateQueue = null, Fh.current = Qh, o = h(g, j);
    } while (Jh);
  }
  if (Fh.current = Rh, s = N !== null && N.next !== null, Hh = 0, O$1 = N = M = null, Ih = !1, s) throw Error(p$1(300));
  return o;
}
function Sh() {
  var o = Kh !== 0;
  return Kh = 0, o;
}
function Th() {
  var o = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return O$1 === null ? M.memoizedState = O$1 = o : O$1 = O$1.next = o, O$1;
}
function Uh() {
  if (N === null) {
    var o = M.alternate;
    o = o !== null ? o.memoizedState : null;
  } else o = N.next;
  var s = O$1 === null ? M.memoizedState : O$1.next;
  if (s !== null) O$1 = s, N = o;
  else {
    if (o === null) throw Error(p$1(310));
    o = { memoizedState: (N = o).memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null }, O$1 === null ? M.memoizedState = O$1 = o : O$1 = O$1.next = o;
  }
  return O$1;
}
function Vh(o, s) {
  return typeof s == "function" ? s(o) : s;
}
function Wh(o) {
  var s = Uh(), h = s.queue;
  if (h === null) throw Error(p$1(311));
  h.lastRenderedReducer = o;
  var g = N, j = g.baseQueue, tt = h.pending;
  if (tt !== null) {
    if (j !== null) {
      var rt = j.next;
      j.next = tt.next, tt.next = rt;
    }
    g.baseQueue = j = tt, h.pending = null;
  }
  if (j !== null) {
    tt = j.next, g = g.baseState;
    var at = rt = null, it = null, st = tt;
    do {
      var lt = st.lane;
      if ((Hh & lt) === lt) it !== null && (it = it.next = { lane: 0, action: st.action, hasEagerState: st.hasEagerState, eagerState: st.eagerState, next: null }), g = st.hasEagerState ? st.eagerState : o(g, st.action);
      else {
        var ot = { lane: lt, action: st.action, hasEagerState: st.hasEagerState, eagerState: st.eagerState, next: null };
        it === null ? (at = it = ot, rt = g) : it = it.next = ot, M.lanes |= lt, rh |= lt;
      }
      st = st.next;
    } while (st !== null && st !== tt);
    it === null ? rt = g : it.next = at, He(g, s.memoizedState) || (dh = !0), s.memoizedState = g, s.baseState = rt, s.baseQueue = it, h.lastRenderedState = g;
  }
  if ((o = h.interleaved) !== null) {
    j = o;
    do
      tt = j.lane, M.lanes |= tt, rh |= tt, j = j.next;
    while (j !== o);
  } else j === null && (h.lanes = 0);
  return [s.memoizedState, h.dispatch];
}
function Xh(o) {
  var s = Uh(), h = s.queue;
  if (h === null) throw Error(p$1(311));
  h.lastRenderedReducer = o;
  var g = h.dispatch, j = h.pending, tt = s.memoizedState;
  if (j !== null) {
    h.pending = null;
    var rt = j = j.next;
    do
      tt = o(tt, rt.action), rt = rt.next;
    while (rt !== j);
    He(tt, s.memoizedState) || (dh = !0), s.memoizedState = tt, s.baseQueue === null && (s.baseState = tt), h.lastRenderedState = tt;
  }
  return [tt, g];
}
function Yh() {
}
function Zh(o, s) {
  var h = M, g = Uh(), j = s(), tt = !He(g.memoizedState, j);
  if (tt && (g.memoizedState = j, dh = !0), g = g.queue, $h(ai.bind(null, h, g, o), [o]), g.getSnapshot !== s || tt || O$1 !== null && 1 & O$1.memoizedState.tag) {
    if (h.flags |= 2048, bi(9, ci.bind(null, h, g, j, s), void 0, null), Q === null) throw Error(p$1(349));
    30 & Hh || di(h, s, j);
  }
  return j;
}
function di(o, s, h) {
  o.flags |= 16384, o = { getSnapshot: s, value: h }, (s = M.updateQueue) === null ? (s = { lastEffect: null, stores: null }, M.updateQueue = s, s.stores = [o]) : (h = s.stores) === null ? s.stores = [o] : h.push(o);
}
function ci(o, s, h, g) {
  s.value = h, s.getSnapshot = g, ei(s) && fi(o);
}
function ai(o, s, h) {
  return h(function() {
    ei(s) && fi(o);
  });
}
function ei(o) {
  var s = o.getSnapshot;
  o = o.value;
  try {
    var h = s();
    return !He(o, h);
  } catch {
    return !0;
  }
}
function fi(o) {
  var s = ih(o, 1);
  s !== null && gi(s, o, 1, -1);
}
function hi(o) {
  var s = Th();
  return typeof o == "function" && (o = o()), s.memoizedState = s.baseState = o, o = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: o }, s.queue = o, o = o.dispatch = ii.bind(null, M, o), [s.memoizedState, o];
}
function bi(o, s, h, g) {
  return o = { tag: o, create: s, destroy: h, deps: g, next: null }, (s = M.updateQueue) === null ? (s = { lastEffect: null, stores: null }, M.updateQueue = s, s.lastEffect = o.next = o) : (h = s.lastEffect) === null ? s.lastEffect = o.next = o : (g = h.next, h.next = o, o.next = g, s.lastEffect = o), o;
}
function ji() {
  return Uh().memoizedState;
}
function ki(o, s, h, g) {
  var j = Th();
  M.flags |= o, j.memoizedState = bi(1 | s, h, void 0, g === void 0 ? null : g);
}
function li(o, s, h, g) {
  var j = Uh();
  g = g === void 0 ? null : g;
  var tt = void 0;
  if (N !== null) {
    var rt = N.memoizedState;
    if (tt = rt.destroy, g !== null && Mh(g, rt.deps)) return void (j.memoizedState = bi(s, h, tt, g));
  }
  M.flags |= o, j.memoizedState = bi(1 | s, h, tt, g);
}
function mi(o, s) {
  return ki(8390656, 8, o, s);
}
function $h(o, s) {
  return li(2048, 8, o, s);
}
function ni(o, s) {
  return li(4, 2, o, s);
}
function oi(o, s) {
  return li(4, 4, o, s);
}
function pi(o, s) {
  return typeof s == "function" ? (o = o(), s(o), function() {
    s(null);
  }) : s != null ? (o = o(), s.current = o, function() {
    s.current = null;
  }) : void 0;
}
function qi(o, s, h) {
  return h = h != null ? h.concat([o]) : null, li(4, 4, pi.bind(null, s, o), h);
}
function ri() {
}
function si(o, s) {
  var h = Uh();
  s = s === void 0 ? null : s;
  var g = h.memoizedState;
  return g !== null && s !== null && Mh(s, g[1]) ? g[0] : (h.memoizedState = [o, s], o);
}
function ti(o, s) {
  var h = Uh();
  s = s === void 0 ? null : s;
  var g = h.memoizedState;
  return g !== null && s !== null && Mh(s, g[1]) ? g[0] : (o = o(), h.memoizedState = [o, s], o);
}
function ui(o, s, h) {
  return 21 & Hh ? (He(h, s) || (h = yc(), M.lanes |= h, rh |= h, o.baseState = !0), s) : (o.baseState && (o.baseState = !1, dh = !0), o.memoizedState = h);
}
function vi(o, s) {
  var h = C$1;
  C$1 = h !== 0 && 4 > h ? h : 4, o(!0);
  var g = Gh.transition;
  Gh.transition = {};
  try {
    o(!1), s();
  } finally {
    C$1 = h, Gh.transition = g;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(o, s, h) {
  var g = yi(o);
  h = { lane: g, action: h, hasEagerState: !1, eagerState: null, next: null }, zi(o) ? Ai(s, h) : (h = hh(o, s, h, g)) !== null && (gi(h, o, g, R$1()), Bi(h, s, g));
}
function ii(o, s, h) {
  var g = yi(o), j = { lane: g, action: h, hasEagerState: !1, eagerState: null, next: null };
  if (zi(o)) Ai(s, j);
  else {
    var tt = o.alternate;
    if (o.lanes === 0 && (tt === null || tt.lanes === 0) && (tt = s.lastRenderedReducer) !== null) try {
      var rt = s.lastRenderedState, at = tt(rt, h);
      if (j.hasEagerState = !0, j.eagerState = at, He(at, rt)) {
        var it = s.interleaved;
        return it === null ? (j.next = j, gh(s)) : (j.next = it.next, it.next = j), void (s.interleaved = j);
      }
    } catch {
    }
    (h = hh(o, s, j, g)) !== null && (gi(h, o, g, j = R$1()), Bi(h, s, g));
  }
}
function zi(o) {
  var s = o.alternate;
  return o === M || s !== null && s === M;
}
function Ai(o, s) {
  Jh = Ih = !0;
  var h = o.pending;
  h === null ? s.next = s : (s.next = h.next, h.next = s), o.pending = s;
}
function Bi(o, s, h) {
  if (4194240 & h) {
    var g = s.lanes;
    h |= g &= o.pendingLanes, s.lanes = h, Cc(o, h);
  }
}
var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: !1 }, Oh = { readContext: eh, useCallback: function(o, s) {
  return Th().memoizedState = [o, s === void 0 ? null : s], o;
}, useContext: eh, useEffect: mi, useImperativeHandle: function(o, s, h) {
  return h = h != null ? h.concat([o]) : null, ki(4194308, 4, pi.bind(null, s, o), h);
}, useLayoutEffect: function(o, s) {
  return ki(4194308, 4, o, s);
}, useInsertionEffect: function(o, s) {
  return ki(4, 2, o, s);
}, useMemo: function(o, s) {
  var h = Th();
  return s = s === void 0 ? null : s, o = o(), h.memoizedState = [o, s], o;
}, useReducer: function(o, s, h) {
  var g = Th();
  return s = h !== void 0 ? h(s) : s, g.memoizedState = g.baseState = s, o = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: o, lastRenderedState: s }, g.queue = o, o = o.dispatch = xi.bind(null, M, o), [g.memoizedState, o];
}, useRef: function(o) {
  return o = { current: o }, Th().memoizedState = o;
}, useState: hi, useDebugValue: ri, useDeferredValue: function(o) {
  return Th().memoizedState = o;
}, useTransition: function() {
  var o = hi(!1), s = o[0];
  return o = vi.bind(null, o[1]), Th().memoizedState = o, [s, o];
}, useMutableSource: function() {
}, useSyncExternalStore: function(o, s, h) {
  var g = M, j = Th();
  if (I$1) {
    if (h === void 0) throw Error(p$1(407));
    h = h();
  } else {
    if (h = s(), Q === null) throw Error(p$1(349));
    30 & Hh || di(g, s, h);
  }
  j.memoizedState = h;
  var tt = { value: h, getSnapshot: s };
  return j.queue = tt, mi(ai.bind(null, g, tt, o), [o]), g.flags |= 2048, bi(9, ci.bind(null, g, tt, h, s), void 0, null), h;
}, useId: function() {
  var o = Th(), s = Q.identifierPrefix;
  if (I$1) {
    var h = sg;
    s = ":" + s + "R" + (h = (rg & ~(1 << 32 - oc(rg) - 1)).toString(32) + h), 0 < (h = Kh++) && (s += "H" + h.toString(32)), s += ":";
  } else s = ":" + s + "r" + (h = Lh++).toString(32) + ":";
  return o.memoizedState = s;
}, unstable_isNewReconciler: !1 }, Ph = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Wh, useRef: ji, useState: function() {
  return Wh(Vh);
}, useDebugValue: ri, useDeferredValue: function(o) {
  return ui(Uh(), N.memoizedState, o);
}, useTransition: function() {
  return [Wh(Vh)[0], Uh().memoizedState];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: !1 }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri, useDeferredValue: function(o) {
  var s = Uh();
  return N === null ? s.memoizedState = o : ui(s, N.memoizedState, o);
}, useTransition: function() {
  return [Xh(Vh)[0], Uh().memoizedState];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: !1 };
function Ci(o, s) {
  if (o && o.defaultProps) {
    for (var h in s = A$1({}, s), o = o.defaultProps) s[h] === void 0 && (s[h] = o[h]);
    return s;
  }
  return s;
}
function Di(o, s, h, g) {
  h = (h = h(g, s = o.memoizedState)) == null ? s : A$1({}, s, h), o.memoizedState = h, o.lanes === 0 && (o.updateQueue.baseState = h);
}
var Ei = { isMounted: function(o) {
  return !!(o = o._reactInternals) && Vb(o) === o;
}, enqueueSetState: function(o, s, h) {
  o = o._reactInternals;
  var g = R$1(), j = yi(o), tt = mh(g, j);
  tt.payload = s, h != null && (tt.callback = h), (s = nh(o, tt, j)) !== null && (gi(s, o, j, g), oh(s, o, j));
}, enqueueReplaceState: function(o, s, h) {
  o = o._reactInternals;
  var g = R$1(), j = yi(o), tt = mh(g, j);
  tt.tag = 1, tt.payload = s, h != null && (tt.callback = h), (s = nh(o, tt, j)) !== null && (gi(s, o, j, g), oh(s, o, j));
}, enqueueForceUpdate: function(o, s) {
  o = o._reactInternals;
  var h = R$1(), g = yi(o), j = mh(h, g);
  j.tag = 2, s != null && (j.callback = s), (s = nh(o, j, g)) !== null && (gi(s, o, g, h), oh(s, o, g));
} };
function Fi(o, s, h, g, j, tt, rt) {
  return typeof (o = o.stateNode).shouldComponentUpdate == "function" ? o.shouldComponentUpdate(g, tt, rt) : !s.prototype || !s.prototype.isPureReactComponent || !Ie(h, g) || !Ie(j, tt);
}
function Gi(o, s, h) {
  var g = !1, j = Vf, tt = s.contextType;
  return typeof tt == "object" && tt !== null ? tt = eh(tt) : (j = Zf(s) ? Xf : H.current, tt = (g = (g = s.contextTypes) != null) ? Yf(o, j) : Vf), s = new s(h, tt), o.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Ei, o.stateNode = s, s._reactInternals = o, g && ((o = o.stateNode).__reactInternalMemoizedUnmaskedChildContext = j, o.__reactInternalMemoizedMaskedChildContext = tt), s;
}
function Hi(o, s, h, g) {
  o = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(h, g), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(h, g), s.state !== o && Ei.enqueueReplaceState(s, s.state, null);
}
function Ii(o, s, h, g) {
  var j = o.stateNode;
  j.props = h, j.state = o.memoizedState, j.refs = {}, kh(o);
  var tt = s.contextType;
  typeof tt == "object" && tt !== null ? j.context = eh(tt) : (tt = Zf(s) ? Xf : H.current, j.context = Yf(o, tt)), j.state = o.memoizedState, typeof (tt = s.getDerivedStateFromProps) == "function" && (Di(o, s, tt, h), j.state = o.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof j.getSnapshotBeforeUpdate == "function" || typeof j.UNSAFE_componentWillMount != "function" && typeof j.componentWillMount != "function" || (s = j.state, typeof j.componentWillMount == "function" && j.componentWillMount(), typeof j.UNSAFE_componentWillMount == "function" && j.UNSAFE_componentWillMount(), s !== j.state && Ei.enqueueReplaceState(j, j.state, null), qh(o, h, j, g), j.state = o.memoizedState), typeof j.componentDidMount == "function" && (o.flags |= 4194308);
}
function Ji(o, s) {
  try {
    var h = "", g = s;
    do
      h += Pa(g), g = g.return;
    while (g);
    var j = h;
  } catch (tt) {
    j = `
Error generating stack: ` + tt.message + `
` + tt.stack;
  }
  return { value: o, source: s, stack: j, digest: null };
}
function Ki(o, s, h) {
  return { value: o, source: null, stack: h ?? null, digest: s ?? null };
}
function Li(o, s) {
  try {
    console.error(s.value);
  } catch (h) {
    setTimeout(function() {
      throw h;
    });
  }
}
var Mi = typeof WeakMap == "function" ? WeakMap : Map;
function Ni(o, s, h) {
  (h = mh(-1, h)).tag = 3, h.payload = { element: null };
  var g = s.value;
  return h.callback = function() {
    Oi || (Oi = !0, Pi = g), Li(o, s);
  }, h;
}
function Qi(o, s, h) {
  (h = mh(-1, h)).tag = 3;
  var g = o.type.getDerivedStateFromError;
  if (typeof g == "function") {
    var j = s.value;
    h.payload = function() {
      return g(j);
    }, h.callback = function() {
      Li(o, s);
    };
  }
  var tt = o.stateNode;
  return tt !== null && typeof tt.componentDidCatch == "function" && (h.callback = function() {
    Li(o, s), typeof g != "function" && (Ri === null ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
    var rt = s.stack;
    this.componentDidCatch(s.value, { componentStack: rt !== null ? rt : "" });
  }), h;
}
function Si(o, s, h) {
  var g = o.pingCache;
  if (g === null) {
    g = o.pingCache = new Mi();
    var j = /* @__PURE__ */ new Set();
    g.set(s, j);
  } else (j = g.get(s)) === void 0 && (j = /* @__PURE__ */ new Set(), g.set(s, j));
  j.has(h) || (j.add(h), o = Ti.bind(null, o, s, h), s.then(o, o));
}
function Ui(o) {
  do {
    var s;
    if ((s = o.tag === 13) && (s = (s = o.memoizedState) === null || s.dehydrated !== null), s) return o;
    o = o.return;
  } while (o !== null);
  return null;
}
function Vi(o, s, h, g, j) {
  return 1 & o.mode ? (o.flags |= 65536, o.lanes = j, o) : (o === s ? o.flags |= 65536 : (o.flags |= 128, h.flags |= 131072, h.flags &= -52805, h.tag === 1 && (h.alternate === null ? h.tag = 17 : ((s = mh(-1, 1)).tag = 2, nh(h, s, 1))), h.lanes |= 1), o);
}
var Wi = ua.ReactCurrentOwner, dh = !1;
function Xi(o, s, h, g) {
  s.child = o === null ? Vg(s, null, h, g) : Ug(s, o.child, h, g);
}
function Yi(o, s, h, g, j) {
  h = h.render;
  var tt = s.ref;
  return ch(s, j), g = Nh(o, s, h, g, tt, j), h = Sh(), o === null || dh ? (I$1 && h && vg(s), s.flags |= 1, Xi(o, s, g, j), s.child) : (s.updateQueue = o.updateQueue, s.flags &= -2053, o.lanes &= ~j, Zi(o, s, j));
}
function $i(o, s, h, g, j) {
  if (o === null) {
    var tt = h.type;
    return typeof tt != "function" || aj(tt) || tt.defaultProps !== void 0 || h.compare !== null || h.defaultProps !== void 0 ? ((o = Rg(h.type, null, g, s, s.mode, j)).ref = s.ref, o.return = s, s.child = o) : (s.tag = 15, s.type = tt, bj(o, s, tt, g, j));
  }
  if (tt = o.child, (o.lanes & j) === 0) {
    var rt = tt.memoizedProps;
    if ((h = (h = h.compare) !== null ? h : Ie)(rt, g) && o.ref === s.ref) return Zi(o, s, j);
  }
  return s.flags |= 1, (o = Pg(tt, g)).ref = s.ref, o.return = s, s.child = o;
}
function bj(o, s, h, g, j) {
  if (o !== null) {
    var tt = o.memoizedProps;
    if (Ie(tt, g) && o.ref === s.ref) {
      if (dh = !1, s.pendingProps = g = tt, (o.lanes & j) === 0) return s.lanes = o.lanes, Zi(o, s, j);
      131072 & o.flags && (dh = !0);
    }
  }
  return cj(o, s, h, g, j);
}
function dj(o, s, h) {
  var g = s.pendingProps, j = g.children, tt = o !== null ? o.memoizedState : null;
  if (g.mode === "hidden") if (1 & s.mode) {
    if (!(1073741824 & h)) return o = tt !== null ? tt.baseLanes | h : h, s.lanes = s.childLanes = 1073741824, s.memoizedState = { baseLanes: o, cachePool: null, transitions: null }, s.updateQueue = null, G(ej, fj), fj |= o, null;
    s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, g = tt !== null ? tt.baseLanes : h, G(ej, fj), fj |= g;
  } else s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= h;
  else tt !== null ? (g = tt.baseLanes | h, s.memoizedState = null) : g = h, G(ej, fj), fj |= g;
  return Xi(o, s, j, h), s.child;
}
function gj(o, s) {
  var h = s.ref;
  (o === null && h !== null || o !== null && o.ref !== h) && (s.flags |= 512, s.flags |= 2097152);
}
function cj(o, s, h, g, j) {
  var tt = Zf(h) ? Xf : H.current;
  return tt = Yf(s, tt), ch(s, j), h = Nh(o, s, h, g, tt, j), g = Sh(), o === null || dh ? (I$1 && g && vg(s), s.flags |= 1, Xi(o, s, h, j), s.child) : (s.updateQueue = o.updateQueue, s.flags &= -2053, o.lanes &= ~j, Zi(o, s, j));
}
function hj(o, s, h, g, j) {
  if (Zf(h)) {
    var tt = !0;
    cg(s);
  } else tt = !1;
  if (ch(s, j), s.stateNode === null) ij(o, s), Gi(s, h, g), Ii(s, h, g, j), g = !0;
  else if (o === null) {
    var rt = s.stateNode, at = s.memoizedProps;
    rt.props = at;
    var it = rt.context, st = h.contextType;
    typeof st == "object" && st !== null ? st = eh(st) : st = Yf(s, st = Zf(h) ? Xf : H.current);
    var lt = h.getDerivedStateFromProps, ot = typeof lt == "function" || typeof rt.getSnapshotBeforeUpdate == "function";
    ot || typeof rt.UNSAFE_componentWillReceiveProps != "function" && typeof rt.componentWillReceiveProps != "function" || (at !== g || it !== st) && Hi(s, rt, g, st), jh = !1;
    var ft = s.memoizedState;
    rt.state = ft, qh(s, g, rt, j), it = s.memoizedState, at !== g || ft !== it || Wf.current || jh ? (typeof lt == "function" && (Di(s, h, lt, g), it = s.memoizedState), (at = jh || Fi(s, h, at, g, ft, it, st)) ? (ot || typeof rt.UNSAFE_componentWillMount != "function" && typeof rt.componentWillMount != "function" || (typeof rt.componentWillMount == "function" && rt.componentWillMount(), typeof rt.UNSAFE_componentWillMount == "function" && rt.UNSAFE_componentWillMount()), typeof rt.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof rt.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = g, s.memoizedState = it), rt.props = g, rt.state = it, rt.context = st, g = at) : (typeof rt.componentDidMount == "function" && (s.flags |= 4194308), g = !1);
  } else {
    rt = s.stateNode, lh(o, s), at = s.memoizedProps, st = s.type === s.elementType ? at : Ci(s.type, at), rt.props = st, ot = s.pendingProps, ft = rt.context, typeof (it = h.contextType) == "object" && it !== null ? it = eh(it) : it = Yf(s, it = Zf(h) ? Xf : H.current);
    var ht = h.getDerivedStateFromProps;
    (lt = typeof ht == "function" || typeof rt.getSnapshotBeforeUpdate == "function") || typeof rt.UNSAFE_componentWillReceiveProps != "function" && typeof rt.componentWillReceiveProps != "function" || (at !== ot || ft !== it) && Hi(s, rt, g, it), jh = !1, ft = s.memoizedState, rt.state = ft, qh(s, g, rt, j);
    var pt = s.memoizedState;
    at !== ot || ft !== pt || Wf.current || jh ? (typeof ht == "function" && (Di(s, h, ht, g), pt = s.memoizedState), (st = jh || Fi(s, h, st, g, ft, pt, it) || !1) ? (lt || typeof rt.UNSAFE_componentWillUpdate != "function" && typeof rt.componentWillUpdate != "function" || (typeof rt.componentWillUpdate == "function" && rt.componentWillUpdate(g, pt, it), typeof rt.UNSAFE_componentWillUpdate == "function" && rt.UNSAFE_componentWillUpdate(g, pt, it)), typeof rt.componentDidUpdate == "function" && (s.flags |= 4), typeof rt.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof rt.componentDidUpdate != "function" || at === o.memoizedProps && ft === o.memoizedState || (s.flags |= 4), typeof rt.getSnapshotBeforeUpdate != "function" || at === o.memoizedProps && ft === o.memoizedState || (s.flags |= 1024), s.memoizedProps = g, s.memoizedState = pt), rt.props = g, rt.state = pt, rt.context = it, g = st) : (typeof rt.componentDidUpdate != "function" || at === o.memoizedProps && ft === o.memoizedState || (s.flags |= 4), typeof rt.getSnapshotBeforeUpdate != "function" || at === o.memoizedProps && ft === o.memoizedState || (s.flags |= 1024), g = !1);
  }
  return jj(o, s, h, g, tt, j);
}
function jj(o, s, h, g, j, tt) {
  gj(o, s);
  var rt = !!(128 & s.flags);
  if (!g && !rt) return j && dg(s, h, !1), Zi(o, s, tt);
  g = s.stateNode, Wi.current = s;
  var at = rt && typeof h.getDerivedStateFromError != "function" ? null : g.render();
  return s.flags |= 1, o !== null && rt ? (s.child = Ug(s, o.child, null, tt), s.child = Ug(s, null, at, tt)) : Xi(o, s, at, tt), s.memoizedState = g.state, j && dg(s, h, !0), s.child;
}
function kj(o) {
  var s = o.stateNode;
  s.pendingContext ? ag(o, s.pendingContext, s.pendingContext !== s.context) : s.context && ag(o, s.context, !1), yh(o, s.containerInfo);
}
function lj(o, s, h, g, j) {
  return Ig(), Jg(j), s.flags |= 256, Xi(o, s, h, g), s.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 }, zj, Aj, Bj, Cj;
function nj(o) {
  return { baseLanes: o, cachePool: null, transitions: null };
}
function oj(o, s, h) {
  var g, j = s.pendingProps, tt = L.current, rt = !1, at = !!(128 & s.flags);
  if ((g = at) || (g = (o === null || o.memoizedState !== null) && !!(2 & tt)), g ? (rt = !0, s.flags &= -129) : o !== null && o.memoizedState === null || (tt |= 1), G(L, 1 & tt), o === null) return Eg(s), (o = s.memoizedState) !== null && (o = o.dehydrated) !== null ? (1 & s.mode ? o.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824 : s.lanes = 1, null) : (at = j.children, o = j.fallback, rt ? (j = s.mode, rt = s.child, at = { mode: "hidden", children: at }, 1 & j || rt === null ? rt = pj(at, j, 0, null) : (rt.childLanes = 0, rt.pendingProps = at), o = Tg(o, j, h, null), rt.return = s, o.return = s, rt.sibling = o, s.child = rt, s.child.memoizedState = nj(h), s.memoizedState = mj, o) : qj(s, at));
  if ((tt = o.memoizedState) !== null && (g = tt.dehydrated) !== null) return rj(o, s, at, j, g, tt, h);
  if (rt) {
    rt = j.fallback, at = s.mode, g = (tt = o.child).sibling;
    var it = { mode: "hidden", children: j.children };
    return 1 & at || s.child === tt ? (j = Pg(tt, it)).subtreeFlags = 14680064 & tt.subtreeFlags : ((j = s.child).childLanes = 0, j.pendingProps = it, s.deletions = null), g !== null ? rt = Pg(g, rt) : (rt = Tg(rt, at, h, null)).flags |= 2, rt.return = s, j.return = s, j.sibling = rt, s.child = j, j = rt, rt = s.child, at = (at = o.child.memoizedState) === null ? nj(h) : { baseLanes: at.baseLanes | h, cachePool: null, transitions: at.transitions }, rt.memoizedState = at, rt.childLanes = o.childLanes & ~h, s.memoizedState = mj, j;
  }
  return o = (rt = o.child).sibling, j = Pg(rt, { mode: "visible", children: j.children }), !(1 & s.mode) && (j.lanes = h), j.return = s, j.sibling = null, o !== null && ((h = s.deletions) === null ? (s.deletions = [o], s.flags |= 16) : h.push(o)), s.child = j, s.memoizedState = null, j;
}
function qj(o, s) {
  return (s = pj({ mode: "visible", children: s }, o.mode, 0, null)).return = o, o.child = s;
}
function sj(o, s, h, g) {
  return g !== null && Jg(g), Ug(s, o.child, null, h), (o = qj(s, s.pendingProps.children)).flags |= 2, s.memoizedState = null, o;
}
function rj(o, s, h, g, j, tt, rt) {
  if (h) return 256 & s.flags ? (s.flags &= -257, sj(o, s, rt, g = Ki(Error(p$1(422))))) : s.memoizedState !== null ? (s.child = o.child, s.flags |= 128, null) : (tt = g.fallback, j = s.mode, g = pj({ mode: "visible", children: g.children }, j, 0, null), (tt = Tg(tt, j, rt, null)).flags |= 2, g.return = s, tt.return = s, g.sibling = tt, s.child = g, 1 & s.mode && Ug(s, o.child, null, rt), s.child.memoizedState = nj(rt), s.memoizedState = mj, tt);
  if (!(1 & s.mode)) return sj(o, s, rt, null);
  if (j.data === "$!") {
    if (g = j.nextSibling && j.nextSibling.dataset) var at = g.dgst;
    return g = at, sj(o, s, rt, g = Ki(tt = Error(p$1(419)), g, void 0));
  }
  if (at = (rt & o.childLanes) !== 0, dh || at) {
    if ((g = Q) !== null) {
      switch (rt & -rt) {
        case 4:
          j = 2;
          break;
        case 16:
          j = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          j = 32;
          break;
        case 536870912:
          j = 268435456;
          break;
        default:
          j = 0;
      }
      (j = j & (g.suspendedLanes | rt) ? 0 : j) !== 0 && j !== tt.retryLane && (tt.retryLane = j, ih(o, j), gi(g, o, j, -1));
    }
    return tj(), sj(o, s, rt, g = Ki(Error(p$1(421))));
  }
  return j.data === "$?" ? (s.flags |= 128, s.child = o.child, s = uj.bind(null, o), j._reactRetry = s, null) : (o = tt.treeContext, yg = Lf(j.nextSibling), xg = s, I$1 = !0, zg = null, o !== null && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = o.id, sg = o.overflow, qg = s), (s = qj(s, g.children)).flags |= 4096, s);
}
function vj(o, s, h) {
  o.lanes |= s;
  var g = o.alternate;
  g !== null && (g.lanes |= s), bh(o.return, s, h);
}
function wj(o, s, h, g, j) {
  var tt = o.memoizedState;
  tt === null ? o.memoizedState = { isBackwards: s, rendering: null, renderingStartTime: 0, last: g, tail: h, tailMode: j } : (tt.isBackwards = s, tt.rendering = null, tt.renderingStartTime = 0, tt.last = g, tt.tail = h, tt.tailMode = j);
}
function xj(o, s, h) {
  var g = s.pendingProps, j = g.revealOrder, tt = g.tail;
  if (Xi(o, s, g.children, h), 2 & (g = L.current)) g = 1 & g | 2, s.flags |= 128;
  else {
    if (o !== null && 128 & o.flags) t: for (o = s.child; o !== null; ) {
      if (o.tag === 13) o.memoizedState !== null && vj(o, h, s);
      else if (o.tag === 19) vj(o, h, s);
      else if (o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === s) break t;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === s) break t;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
    g &= 1;
  }
  if (G(L, g), 1 & s.mode) switch (j) {
    case "forwards":
      for (h = s.child, j = null; h !== null; ) (o = h.alternate) !== null && Ch(o) === null && (j = h), h = h.sibling;
      (h = j) === null ? (j = s.child, s.child = null) : (j = h.sibling, h.sibling = null), wj(s, !1, j, h, tt);
      break;
    case "backwards":
      for (h = null, j = s.child, s.child = null; j !== null; ) {
        if ((o = j.alternate) !== null && Ch(o) === null) {
          s.child = j;
          break;
        }
        o = j.sibling, j.sibling = h, h = j, j = o;
      }
      wj(s, !0, h, null, tt);
      break;
    case "together":
      wj(s, !1, null, null, void 0);
      break;
    default:
      s.memoizedState = null;
  }
  else s.memoizedState = null;
  return s.child;
}
function ij(o, s) {
  !(1 & s.mode) && o !== null && (o.alternate = null, s.alternate = null, s.flags |= 2);
}
function Zi(o, s, h) {
  if (o !== null && (s.dependencies = o.dependencies), rh |= s.lanes, (h & s.childLanes) === 0) return null;
  if (o !== null && s.child !== o.child) throw Error(p$1(153));
  if (s.child !== null) {
    for (h = Pg(o = s.child, o.pendingProps), s.child = h, h.return = s; o.sibling !== null; ) o = o.sibling, (h = h.sibling = Pg(o, o.pendingProps)).return = s;
    h.sibling = null;
  }
  return s.child;
}
function yj(o, s, h) {
  switch (s.tag) {
    case 3:
      kj(s), Ig();
      break;
    case 5:
      Ah(s);
      break;
    case 1:
      Zf(s.type) && cg(s);
      break;
    case 4:
      yh(s, s.stateNode.containerInfo);
      break;
    case 10:
      var g = s.type._context, j = s.memoizedProps.value;
      G(Wg, g._currentValue), g._currentValue = j;
      break;
    case 13:
      if ((g = s.memoizedState) !== null) return g.dehydrated !== null ? (G(L, 1 & L.current), s.flags |= 128, null) : h & s.child.childLanes ? oj(o, s, h) : (G(L, 1 & L.current), (o = Zi(o, s, h)) !== null ? o.sibling : null);
      G(L, 1 & L.current);
      break;
    case 19:
      if (g = (h & s.childLanes) !== 0, 128 & o.flags) {
        if (g) return xj(o, s, h);
        s.flags |= 128;
      }
      if ((j = s.memoizedState) !== null && (j.rendering = null, j.tail = null, j.lastEffect = null), G(L, L.current), g) break;
      return null;
    case 22:
    case 23:
      return s.lanes = 0, dj(o, s, h);
  }
  return Zi(o, s, h);
}
function Dj(o, s) {
  if (!I$1) switch (o.tailMode) {
    case "hidden":
      s = o.tail;
      for (var h = null; s !== null; ) s.alternate !== null && (h = s), s = s.sibling;
      h === null ? o.tail = null : h.sibling = null;
      break;
    case "collapsed":
      h = o.tail;
      for (var g = null; h !== null; ) h.alternate !== null && (g = h), h = h.sibling;
      g === null ? s || o.tail === null ? o.tail = null : o.tail.sibling = null : g.sibling = null;
  }
}
function S(o) {
  var s = o.alternate !== null && o.alternate.child === o.child, h = 0, g = 0;
  if (s) for (var j = o.child; j !== null; ) h |= j.lanes | j.childLanes, g |= 14680064 & j.subtreeFlags, g |= 14680064 & j.flags, j.return = o, j = j.sibling;
  else for (j = o.child; j !== null; ) h |= j.lanes | j.childLanes, g |= j.subtreeFlags, g |= j.flags, j.return = o, j = j.sibling;
  return o.subtreeFlags |= g, o.childLanes = h, s;
}
function Ej(o, s, h) {
  var g = s.pendingProps;
  switch (wg(s), s.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(s), null;
    case 1:
    case 17:
      return Zf(s.type) && $f(), S(s), null;
    case 3:
      return g = s.stateNode, zh(), E$1(Wf), E$1(H), Eh(), g.pendingContext && (g.context = g.pendingContext, g.pendingContext = null), o !== null && o.child !== null || (Gg(s) ? s.flags |= 4 : o === null || o.memoizedState.isDehydrated && !(256 & s.flags) || (s.flags |= 1024, zg !== null && (Fj(zg), zg = null))), Aj(o, s), S(s), null;
    case 5:
      Bh(s);
      var j = xh(wh.current);
      if (h = s.type, o !== null && s.stateNode != null) Bj(o, s, h, g, j), o.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
      else {
        if (!g) {
          if (s.stateNode === null) throw Error(p$1(166));
          return S(s), null;
        }
        if (o = xh(uh.current), Gg(s)) {
          g = s.stateNode, h = s.type;
          var tt = s.memoizedProps;
          switch (g[Of] = s, g[Pf] = tt, o = !!(1 & s.mode), h) {
            case "dialog":
              D$1("cancel", g), D$1("close", g);
              break;
            case "iframe":
            case "object":
            case "embed":
              D$1("load", g);
              break;
            case "video":
            case "audio":
              for (j = 0; j < lf.length; j++) D$1(lf[j], g);
              break;
            case "source":
              D$1("error", g);
              break;
            case "img":
            case "image":
            case "link":
              D$1("error", g), D$1("load", g);
              break;
            case "details":
              D$1("toggle", g);
              break;
            case "input":
              Za(g, tt), D$1("invalid", g);
              break;
            case "select":
              g._wrapperState = { wasMultiple: !!tt.multiple }, D$1("invalid", g);
              break;
            case "textarea":
              hb(g, tt), D$1("invalid", g);
          }
          for (var rt in ub(h, tt), j = null, tt) if (tt.hasOwnProperty(rt)) {
            var at = tt[rt];
            rt === "children" ? typeof at == "string" ? g.textContent !== at && (tt.suppressHydrationWarning !== !0 && Af(g.textContent, at, o), j = ["children", at]) : typeof at == "number" && g.textContent !== "" + at && (tt.suppressHydrationWarning !== !0 && Af(g.textContent, at, o), j = ["children", "" + at]) : ea.hasOwnProperty(rt) && at != null && rt === "onScroll" && D$1("scroll", g);
          }
          switch (h) {
            case "input":
              Va(g), db(g, tt, !0);
              break;
            case "textarea":
              Va(g), jb(g);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof tt.onClick == "function" && (g.onclick = Bf);
          }
          g = j, s.updateQueue = g, g !== null && (s.flags |= 4);
        } else {
          rt = j.nodeType === 9 ? j : j.ownerDocument, o === "http://www.w3.org/1999/xhtml" && (o = kb(h)), o === "http://www.w3.org/1999/xhtml" ? h === "script" ? ((o = rt.createElement("div")).innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild)) : typeof g.is == "string" ? o = rt.createElement(h, { is: g.is }) : (o = rt.createElement(h), h === "select" && (rt = o, g.multiple ? rt.multiple = !0 : g.size && (rt.size = g.size))) : o = rt.createElementNS(o, h), o[Of] = s, o[Pf] = g, zj(o, s, !1, !1), s.stateNode = o;
          t: {
            switch (rt = vb(h, g), h) {
              case "dialog":
                D$1("cancel", o), D$1("close", o), j = g;
                break;
              case "iframe":
              case "object":
              case "embed":
                D$1("load", o), j = g;
                break;
              case "video":
              case "audio":
                for (j = 0; j < lf.length; j++) D$1(lf[j], o);
                j = g;
                break;
              case "source":
                D$1("error", o), j = g;
                break;
              case "img":
              case "image":
              case "link":
                D$1("error", o), D$1("load", o), j = g;
                break;
              case "details":
                D$1("toggle", o), j = g;
                break;
              case "input":
                Za(o, g), j = Ya(o, g), D$1("invalid", o);
                break;
              case "option":
              default:
                j = g;
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!g.multiple }, j = A$1({}, g, { value: void 0 }), D$1("invalid", o);
                break;
              case "textarea":
                hb(o, g), j = gb(o, g), D$1("invalid", o);
            }
            for (tt in ub(h, j), at = j) if (at.hasOwnProperty(tt)) {
              var it = at[tt];
              tt === "style" ? sb(o, it) : tt === "dangerouslySetInnerHTML" ? (it = it ? it.__html : void 0) != null && nb(o, it) : tt === "children" ? typeof it == "string" ? (h !== "textarea" || it !== "") && ob(o, it) : typeof it == "number" && ob(o, "" + it) : tt !== "suppressContentEditableWarning" && tt !== "suppressHydrationWarning" && tt !== "autoFocus" && (ea.hasOwnProperty(tt) ? it != null && tt === "onScroll" && D$1("scroll", o) : it != null && ta(o, tt, it, rt));
            }
            switch (h) {
              case "input":
                Va(o), db(o, g, !1);
                break;
              case "textarea":
                Va(o), jb(o);
                break;
              case "option":
                g.value != null && o.setAttribute("value", "" + Sa(g.value));
                break;
              case "select":
                o.multiple = !!g.multiple, (tt = g.value) != null ? fb(o, !!g.multiple, tt, !1) : g.defaultValue != null && fb(o, !!g.multiple, g.defaultValue, !0);
                break;
              default:
                typeof j.onClick == "function" && (o.onclick = Bf);
            }
            switch (h) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                g = !!g.autoFocus;
                break t;
              case "img":
                g = !0;
                break t;
              default:
                g = !1;
            }
          }
          g && (s.flags |= 4);
        }
        s.ref !== null && (s.flags |= 512, s.flags |= 2097152);
      }
      return S(s), null;
    case 6:
      if (o && s.stateNode != null) Cj(o, s, o.memoizedProps, g);
      else {
        if (typeof g != "string" && s.stateNode === null) throw Error(p$1(166));
        if (h = xh(wh.current), xh(uh.current), Gg(s)) {
          if (g = s.stateNode, h = s.memoizedProps, g[Of] = s, (tt = g.nodeValue !== h) && (o = xg) !== null) switch (o.tag) {
            case 3:
              Af(g.nodeValue, h, !!(1 & o.mode));
              break;
            case 5:
              o.memoizedProps.suppressHydrationWarning !== !0 && Af(g.nodeValue, h, !!(1 & o.mode));
          }
          tt && (s.flags |= 4);
        } else (g = (h.nodeType === 9 ? h : h.ownerDocument).createTextNode(g))[Of] = s, s.stateNode = g;
      }
      return S(s), null;
    case 13:
      if (E$1(L), g = s.memoizedState, o === null || o.memoizedState !== null && o.memoizedState.dehydrated !== null) {
        if (I$1 && yg !== null && 1 & s.mode && !(128 & s.flags)) Hg(), Ig(), s.flags |= 98560, tt = !1;
        else if (tt = Gg(s), g !== null && g.dehydrated !== null) {
          if (o === null) {
            if (!tt) throw Error(p$1(318));
            if (!(tt = (tt = s.memoizedState) !== null ? tt.dehydrated : null)) throw Error(p$1(317));
            tt[Of] = s;
          } else Ig(), !(128 & s.flags) && (s.memoizedState = null), s.flags |= 4;
          S(s), tt = !1;
        } else zg !== null && (Fj(zg), zg = null), tt = !0;
        if (!tt) return 65536 & s.flags ? s : null;
      }
      return 128 & s.flags ? (s.lanes = h, s) : ((g = g !== null) != (o !== null && o.memoizedState !== null) && g && (s.child.flags |= 8192, 1 & s.mode && (o === null || 1 & L.current ? T === 0 && (T = 3) : tj())), s.updateQueue !== null && (s.flags |= 4), S(s), null);
    case 4:
      return zh(), Aj(o, s), o === null && sf(s.stateNode.containerInfo), S(s), null;
    case 10:
      return ah(s.type._context), S(s), null;
    case 19:
      if (E$1(L), (tt = s.memoizedState) === null) return S(s), null;
      if (g = !!(128 & s.flags), (rt = tt.rendering) === null) if (g) Dj(tt, !1);
      else {
        if (T !== 0 || o !== null && 128 & o.flags) for (o = s.child; o !== null; ) {
          if ((rt = Ch(o)) !== null) {
            for (s.flags |= 128, Dj(tt, !1), (g = rt.updateQueue) !== null && (s.updateQueue = g, s.flags |= 4), s.subtreeFlags = 0, g = h, h = s.child; h !== null; ) o = g, (tt = h).flags &= 14680066, (rt = tt.alternate) === null ? (tt.childLanes = 0, tt.lanes = o, tt.child = null, tt.subtreeFlags = 0, tt.memoizedProps = null, tt.memoizedState = null, tt.updateQueue = null, tt.dependencies = null, tt.stateNode = null) : (tt.childLanes = rt.childLanes, tt.lanes = rt.lanes, tt.child = rt.child, tt.subtreeFlags = 0, tt.deletions = null, tt.memoizedProps = rt.memoizedProps, tt.memoizedState = rt.memoizedState, tt.updateQueue = rt.updateQueue, tt.type = rt.type, o = rt.dependencies, tt.dependencies = o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }), h = h.sibling;
            return G(L, 1 & L.current | 2), s.child;
          }
          o = o.sibling;
        }
        tt.tail !== null && B() > Gj && (s.flags |= 128, g = !0, Dj(tt, !1), s.lanes = 4194304);
      }
      else {
        if (!g) if ((o = Ch(rt)) !== null) {
          if (s.flags |= 128, g = !0, (h = o.updateQueue) !== null && (s.updateQueue = h, s.flags |= 4), Dj(tt, !0), tt.tail === null && tt.tailMode === "hidden" && !rt.alternate && !I$1) return S(s), null;
        } else 2 * B() - tt.renderingStartTime > Gj && h !== 1073741824 && (s.flags |= 128, g = !0, Dj(tt, !1), s.lanes = 4194304);
        tt.isBackwards ? (rt.sibling = s.child, s.child = rt) : ((h = tt.last) !== null ? h.sibling = rt : s.child = rt, tt.last = rt);
      }
      return tt.tail !== null ? (s = tt.tail, tt.rendering = s, tt.tail = s.sibling, tt.renderingStartTime = B(), s.sibling = null, h = L.current, G(L, g ? 1 & h | 2 : 1 & h), s) : (S(s), null);
    case 22:
    case 23:
      return Hj(), g = s.memoizedState !== null, o !== null && o.memoizedState !== null !== g && (s.flags |= 8192), g && 1 & s.mode ? 1073741824 & fj && (S(s), 6 & s.subtreeFlags && (s.flags |= 8192)) : S(s), null;
    case 24:
    case 25:
      return null;
  }
  throw Error(p$1(156, s.tag));
}
function Ij(o, s) {
  switch (wg(s), s.tag) {
    case 1:
      return Zf(s.type) && $f(), 65536 & (o = s.flags) ? (s.flags = -65537 & o | 128, s) : null;
    case 3:
      return zh(), E$1(Wf), E$1(H), Eh(), 65536 & (o = s.flags) && !(128 & o) ? (s.flags = -65537 & o | 128, s) : null;
    case 5:
      return Bh(s), null;
    case 13:
      if (E$1(L), (o = s.memoizedState) !== null && o.dehydrated !== null) {
        if (s.alternate === null) throw Error(p$1(340));
        Ig();
      }
      return 65536 & (o = s.flags) ? (s.flags = -65537 & o | 128, s) : null;
    case 19:
      return E$1(L), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(s.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    default:
      return null;
  }
}
zj = function(o, s) {
  for (var h = s.child; h !== null; ) {
    if (h.tag === 5 || h.tag === 6) o.appendChild(h.stateNode);
    else if (h.tag !== 4 && h.child !== null) {
      h.child.return = h, h = h.child;
      continue;
    }
    if (h === s) break;
    for (; h.sibling === null; ) {
      if (h.return === null || h.return === s) return;
      h = h.return;
    }
    h.sibling.return = h.return, h = h.sibling;
  }
}, Aj = function() {
}, Bj = function(o, s, h, g) {
  var j = o.memoizedProps;
  if (j !== g) {
    o = s.stateNode, xh(uh.current);
    var tt, rt = null;
    switch (h) {
      case "input":
        j = Ya(o, j), g = Ya(o, g), rt = [];
        break;
      case "select":
        j = A$1({}, j, { value: void 0 }), g = A$1({}, g, { value: void 0 }), rt = [];
        break;
      case "textarea":
        j = gb(o, j), g = gb(o, g), rt = [];
        break;
      default:
        typeof j.onClick != "function" && typeof g.onClick == "function" && (o.onclick = Bf);
    }
    for (st in ub(h, g), h = null, j) if (!g.hasOwnProperty(st) && j.hasOwnProperty(st) && j[st] != null) if (st === "style") {
      var at = j[st];
      for (tt in at) at.hasOwnProperty(tt) && (h || (h = {}), h[tt] = "");
    } else st !== "dangerouslySetInnerHTML" && st !== "children" && st !== "suppressContentEditableWarning" && st !== "suppressHydrationWarning" && st !== "autoFocus" && (ea.hasOwnProperty(st) ? rt || (rt = []) : (rt = rt || []).push(st, null));
    for (st in g) {
      var it = g[st];
      if (at = j != null ? j[st] : void 0, g.hasOwnProperty(st) && it !== at && (it != null || at != null)) if (st === "style") if (at) {
        for (tt in at) !at.hasOwnProperty(tt) || it && it.hasOwnProperty(tt) || (h || (h = {}), h[tt] = "");
        for (tt in it) it.hasOwnProperty(tt) && at[tt] !== it[tt] && (h || (h = {}), h[tt] = it[tt]);
      } else h || (rt || (rt = []), rt.push(st, h)), h = it;
      else st === "dangerouslySetInnerHTML" ? (it = it ? it.__html : void 0, at = at ? at.__html : void 0, it != null && at !== it && (rt = rt || []).push(st, it)) : st === "children" ? typeof it != "string" && typeof it != "number" || (rt = rt || []).push(st, "" + it) : st !== "suppressContentEditableWarning" && st !== "suppressHydrationWarning" && (ea.hasOwnProperty(st) ? (it != null && st === "onScroll" && D$1("scroll", o), rt || at === it || (rt = [])) : (rt = rt || []).push(st, it));
    }
    h && (rt = rt || []).push("style", h);
    var st = rt;
    (s.updateQueue = st) && (s.flags |= 4);
  }
}, Cj = function(o, s, h, g) {
  h !== g && (s.flags |= 4);
};
var Jj = !1, U = !1, Kj = typeof WeakSet == "function" ? WeakSet : Set, V = null;
function Lj(o, s) {
  var h = o.ref;
  if (h !== null) if (typeof h == "function") try {
    h(null);
  } catch (g) {
    W(o, s, g);
  }
  else h.current = null;
}
function Mj(o, s, h) {
  try {
    h();
  } catch (g) {
    W(o, s, g);
  }
}
var Nj = !1;
function Oj(o, s) {
  if (Cf = dd, Ne(o = Me())) {
    if ("selectionStart" in o) var h = { start: o.selectionStart, end: o.selectionEnd };
    else t: {
      var g = (h = (h = o.ownerDocument) && h.defaultView || window).getSelection && h.getSelection();
      if (g && g.rangeCount !== 0) {
        h = g.anchorNode;
        var j = g.anchorOffset, tt = g.focusNode;
        g = g.focusOffset;
        try {
          h.nodeType, tt.nodeType;
        } catch {
          h = null;
          break t;
        }
        var rt = 0, at = -1, it = -1, st = 0, lt = 0, ot = o, ft = null;
        e: for (; ; ) {
          for (var ht; ot !== h || j !== 0 && ot.nodeType !== 3 || (at = rt + j), ot !== tt || g !== 0 && ot.nodeType !== 3 || (it = rt + g), ot.nodeType === 3 && (rt += ot.nodeValue.length), (ht = ot.firstChild) !== null; ) ft = ot, ot = ht;
          for (; ; ) {
            if (ot === o) break e;
            if (ft === h && ++st === j && (at = rt), ft === tt && ++lt === g && (it = rt), (ht = ot.nextSibling) !== null) break;
            ft = (ot = ft).parentNode;
          }
          ot = ht;
        }
        h = at === -1 || it === -1 ? null : { start: at, end: it };
      } else h = null;
    }
    h = h || { start: 0, end: 0 };
  } else h = null;
  for (Df = { focusedElem: o, selectionRange: h }, dd = !1, V = s; V !== null; ) if (o = (s = V).child, 1028 & s.subtreeFlags && o !== null) o.return = s, V = o;
  else for (; V !== null; ) {
    s = V;
    try {
      var pt = s.alternate;
      if (1024 & s.flags) switch (s.tag) {
        case 0:
        case 11:
        case 15:
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        case 1:
          if (pt !== null) {
            var dt = pt.memoizedProps, ct = pt.memoizedState, mt = s.stateNode, yt = mt.getSnapshotBeforeUpdate(s.elementType === s.type ? dt : Ci(s.type, dt), ct);
            mt.__reactInternalSnapshotBeforeUpdate = yt;
          }
          break;
        case 3:
          var vt = s.stateNode.containerInfo;
          vt.nodeType === 1 ? vt.textContent = "" : vt.nodeType === 9 && vt.documentElement && vt.removeChild(vt.documentElement);
          break;
        default:
          throw Error(p$1(163));
      }
    } catch (_t) {
      W(s, s.return, _t);
    }
    if ((o = s.sibling) !== null) {
      o.return = s.return, V = o;
      break;
    }
    V = s.return;
  }
  return pt = Nj, Nj = !1, pt;
}
function Pj(o, s, h) {
  var g = s.updateQueue;
  if ((g = g !== null ? g.lastEffect : null) !== null) {
    var j = g = g.next;
    do {
      if ((j.tag & o) === o) {
        var tt = j.destroy;
        j.destroy = void 0, tt !== void 0 && Mj(s, h, tt);
      }
      j = j.next;
    } while (j !== g);
  }
}
function Qj(o, s) {
  if ((s = (s = s.updateQueue) !== null ? s.lastEffect : null) !== null) {
    var h = s = s.next;
    do {
      if ((h.tag & o) === o) {
        var g = h.create;
        h.destroy = g();
      }
      h = h.next;
    } while (h !== s);
  }
}
function Rj(o) {
  var s = o.ref;
  if (s !== null) {
    var h = o.stateNode;
    o.tag, o = h, typeof s == "function" ? s(o) : s.current = o;
  }
}
function Sj(o) {
  var s = o.alternate;
  s !== null && (o.alternate = null, Sj(s)), o.child = null, o.deletions = null, o.sibling = null, o.tag === 5 && (s = o.stateNode) !== null && (delete s[Of], delete s[Pf], delete s[of], delete s[Qf], delete s[Rf]), o.stateNode = null, o.return = null, o.dependencies = null, o.memoizedProps = null, o.memoizedState = null, o.pendingProps = null, o.stateNode = null, o.updateQueue = null;
}
function Tj(o) {
  return o.tag === 5 || o.tag === 3 || o.tag === 4;
}
function Uj(o) {
  t: for (; ; ) {
    for (; o.sibling === null; ) {
      if (o.return === null || Tj(o.return)) return null;
      o = o.return;
    }
    for (o.sibling.return = o.return, o = o.sibling; o.tag !== 5 && o.tag !== 6 && o.tag !== 18; ) {
      if (2 & o.flags || o.child === null || o.tag === 4) continue t;
      o.child.return = o, o = o.child;
    }
    if (!(2 & o.flags)) return o.stateNode;
  }
}
function Vj(o, s, h) {
  var g = o.tag;
  if (g === 5 || g === 6) o = o.stateNode, s ? h.nodeType === 8 ? h.parentNode.insertBefore(o, s) : h.insertBefore(o, s) : (h.nodeType === 8 ? (s = h.parentNode).insertBefore(o, h) : (s = h).appendChild(o), (h = h._reactRootContainer) != null || s.onclick !== null || (s.onclick = Bf));
  else if (g !== 4 && (o = o.child) !== null) for (Vj(o, s, h), o = o.sibling; o !== null; ) Vj(o, s, h), o = o.sibling;
}
function Wj(o, s, h) {
  var g = o.tag;
  if (g === 5 || g === 6) o = o.stateNode, s ? h.insertBefore(o, s) : h.appendChild(o);
  else if (g !== 4 && (o = o.child) !== null) for (Wj(o, s, h), o = o.sibling; o !== null; ) Wj(o, s, h), o = o.sibling;
}
var X = null, Xj = !1;
function Yj(o, s, h) {
  for (h = h.child; h !== null; ) Zj(o, s, h), h = h.sibling;
}
function Zj(o, s, h) {
  if (lc && typeof lc.onCommitFiberUnmount == "function") try {
    lc.onCommitFiberUnmount(kc, h);
  } catch {
  }
  switch (h.tag) {
    case 5:
      U || Lj(h, s);
    case 6:
      var g = X, j = Xj;
      X = null, Yj(o, s, h), Xj = j, (X = g) !== null && (Xj ? (o = X, h = h.stateNode, o.nodeType === 8 ? o.parentNode.removeChild(h) : o.removeChild(h)) : X.removeChild(h.stateNode));
      break;
    case 18:
      X !== null && (Xj ? (o = X, h = h.stateNode, o.nodeType === 8 ? Kf(o.parentNode, h) : o.nodeType === 1 && Kf(o, h), bd(o)) : Kf(X, h.stateNode));
      break;
    case 4:
      g = X, j = Xj, X = h.stateNode.containerInfo, Xj = !0, Yj(o, s, h), X = g, Xj = j;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (g = h.updateQueue) !== null && (g = g.lastEffect) !== null) {
        j = g = g.next;
        do {
          var tt = j, rt = tt.destroy;
          tt = tt.tag, rt !== void 0 && (2 & tt || 4 & tt) && Mj(h, s, rt), j = j.next;
        } while (j !== g);
      }
      Yj(o, s, h);
      break;
    case 1:
      if (!U && (Lj(h, s), typeof (g = h.stateNode).componentWillUnmount == "function")) try {
        g.props = h.memoizedProps, g.state = h.memoizedState, g.componentWillUnmount();
      } catch (at) {
        W(h, s, at);
      }
      Yj(o, s, h);
      break;
    case 21:
      Yj(o, s, h);
      break;
    case 22:
      1 & h.mode ? (U = (g = U) || h.memoizedState !== null, Yj(o, s, h), U = g) : Yj(o, s, h);
      break;
    default:
      Yj(o, s, h);
  }
}
function ak(o) {
  var s = o.updateQueue;
  if (s !== null) {
    o.updateQueue = null;
    var h = o.stateNode;
    h === null && (h = o.stateNode = new Kj()), s.forEach(function(g) {
      var j = bk.bind(null, o, g);
      h.has(g) || (h.add(g), g.then(j, j));
    });
  }
}
function ck(o, s) {
  var h = s.deletions;
  if (h !== null) for (var g = 0; g < h.length; g++) {
    var j = h[g];
    try {
      var tt = o, rt = s, at = rt;
      t: for (; at !== null; ) {
        switch (at.tag) {
          case 5:
            X = at.stateNode, Xj = !1;
            break t;
          case 3:
          case 4:
            X = at.stateNode.containerInfo, Xj = !0;
            break t;
        }
        at = at.return;
      }
      if (X === null) throw Error(p$1(160));
      Zj(tt, rt, j), X = null, Xj = !1;
      var it = j.alternate;
      it !== null && (it.return = null), j.return = null;
    } catch (st) {
      W(j, s, st);
    }
  }
  if (12854 & s.subtreeFlags) for (s = s.child; s !== null; ) dk(s, o), s = s.sibling;
}
function dk(o, s) {
  var h = o.alternate, g = o.flags;
  switch (o.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ck(s, o), ek(o), 4 & g) {
        try {
          Pj(3, o, o.return), Qj(3, o);
        } catch (dt) {
          W(o, o.return, dt);
        }
        try {
          Pj(5, o, o.return);
        } catch (dt) {
          W(o, o.return, dt);
        }
      }
      break;
    case 1:
      ck(s, o), ek(o), 512 & g && h !== null && Lj(h, h.return);
      break;
    case 5:
      if (ck(s, o), ek(o), 512 & g && h !== null && Lj(h, h.return), 32 & o.flags) {
        var j = o.stateNode;
        try {
          ob(j, "");
        } catch (dt) {
          W(o, o.return, dt);
        }
      }
      if (4 & g && (j = o.stateNode) != null) {
        var tt = o.memoizedProps, rt = h !== null ? h.memoizedProps : tt, at = o.type, it = o.updateQueue;
        if (o.updateQueue = null, it !== null) try {
          at === "input" && tt.type === "radio" && tt.name != null && ab(j, tt), vb(at, rt);
          var st = vb(at, tt);
          for (rt = 0; rt < it.length; rt += 2) {
            var lt = it[rt], ot = it[rt + 1];
            lt === "style" ? sb(j, ot) : lt === "dangerouslySetInnerHTML" ? nb(j, ot) : lt === "children" ? ob(j, ot) : ta(j, lt, ot, st);
          }
          switch (at) {
            case "input":
              bb(j, tt);
              break;
            case "textarea":
              ib(j, tt);
              break;
            case "select":
              var ft = j._wrapperState.wasMultiple;
              j._wrapperState.wasMultiple = !!tt.multiple;
              var ht = tt.value;
              ht != null ? fb(j, !!tt.multiple, ht, !1) : ft !== !!tt.multiple && (tt.defaultValue != null ? fb(j, !!tt.multiple, tt.defaultValue, !0) : fb(j, !!tt.multiple, tt.multiple ? [] : "", !1));
          }
          j[Pf] = tt;
        } catch (dt) {
          W(o, o.return, dt);
        }
      }
      break;
    case 6:
      if (ck(s, o), ek(o), 4 & g) {
        if (o.stateNode === null) throw Error(p$1(162));
        j = o.stateNode, tt = o.memoizedProps;
        try {
          j.nodeValue = tt;
        } catch (dt) {
          W(o, o.return, dt);
        }
      }
      break;
    case 3:
      if (ck(s, o), ek(o), 4 & g && h !== null && h.memoizedState.isDehydrated) try {
        bd(s.containerInfo);
      } catch (dt) {
        W(o, o.return, dt);
      }
      break;
    case 4:
    default:
      ck(s, o), ek(o);
      break;
    case 13:
      ck(s, o), ek(o), 8192 & (j = o.child).flags && (tt = j.memoizedState !== null, j.stateNode.isHidden = tt, !tt || j.alternate !== null && j.alternate.memoizedState !== null || (fk = B())), 4 & g && ak(o);
      break;
    case 22:
      if (lt = h !== null && h.memoizedState !== null, 1 & o.mode ? (U = (st = U) || lt, ck(s, o), U = st) : ck(s, o), ek(o), 8192 & g) {
        if (st = o.memoizedState !== null, (o.stateNode.isHidden = st) && !lt && 1 & o.mode) for (V = o, lt = o.child; lt !== null; ) {
          for (ot = V = lt; V !== null; ) {
            switch (ht = (ft = V).child, ft.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, ft, ft.return);
                break;
              case 1:
                Lj(ft, ft.return);
                var pt = ft.stateNode;
                if (typeof pt.componentWillUnmount == "function") {
                  g = ft, h = ft.return;
                  try {
                    s = g, pt.props = s.memoizedProps, pt.state = s.memoizedState, pt.componentWillUnmount();
                  } catch (dt) {
                    W(g, h, dt);
                  }
                }
                break;
              case 5:
                Lj(ft, ft.return);
                break;
              case 22:
                if (ft.memoizedState !== null) {
                  gk(ot);
                  continue;
                }
            }
            ht !== null ? (ht.return = ft, V = ht) : gk(ot);
          }
          lt = lt.sibling;
        }
        t: for (lt = null, ot = o; ; ) {
          if (ot.tag === 5) {
            if (lt === null) {
              lt = ot;
              try {
                j = ot.stateNode, st ? typeof (tt = j.style).setProperty == "function" ? tt.setProperty("display", "none", "important") : tt.display = "none" : (at = ot.stateNode, rt = (it = ot.memoizedProps.style) != null && it.hasOwnProperty("display") ? it.display : null, at.style.display = rb("display", rt));
              } catch (dt) {
                W(o, o.return, dt);
              }
            }
          } else if (ot.tag === 6) {
            if (lt === null) try {
              ot.stateNode.nodeValue = st ? "" : ot.memoizedProps;
            } catch (dt) {
              W(o, o.return, dt);
            }
          } else if ((ot.tag !== 22 && ot.tag !== 23 || ot.memoizedState === null || ot === o) && ot.child !== null) {
            ot.child.return = ot, ot = ot.child;
            continue;
          }
          if (ot === o) break t;
          for (; ot.sibling === null; ) {
            if (ot.return === null || ot.return === o) break t;
            lt === ot && (lt = null), ot = ot.return;
          }
          lt === ot && (lt = null), ot.sibling.return = ot.return, ot = ot.sibling;
        }
      }
      break;
    case 19:
      ck(s, o), ek(o), 4 & g && ak(o);
    case 21:
  }
}
function ek(o) {
  var s = o.flags;
  if (2 & s) {
    try {
      t: {
        for (var h = o.return; h !== null; ) {
          if (Tj(h)) {
            var g = h;
            break t;
          }
          h = h.return;
        }
        throw Error(p$1(160));
      }
      switch (g.tag) {
        case 5:
          var j = g.stateNode;
          32 & g.flags && (ob(j, ""), g.flags &= -33), Wj(o, Uj(o), j);
          break;
        case 3:
        case 4:
          var tt = g.stateNode.containerInfo;
          Vj(o, Uj(o), tt);
          break;
        default:
          throw Error(p$1(161));
      }
    } catch (rt) {
      W(o, o.return, rt);
    }
    o.flags &= -3;
  }
  4096 & s && (o.flags &= -4097);
}
function hk(o, s, h) {
  V = o, ik(o);
}
function ik(o, s, h) {
  for (var g = !!(1 & o.mode); V !== null; ) {
    var j = V, tt = j.child;
    if (j.tag === 22 && g) {
      var rt = j.memoizedState !== null || Jj;
      if (!rt) {
        var at = j.alternate, it = at !== null && at.memoizedState !== null || U;
        at = Jj;
        var st = U;
        if (Jj = rt, (U = it) && !st) for (V = j; V !== null; ) it = (rt = V).child, rt.tag === 22 && rt.memoizedState !== null ? jk(j) : it !== null ? (it.return = rt, V = it) : jk(j);
        for (; tt !== null; ) V = tt, ik(tt), tt = tt.sibling;
        V = j, Jj = at, U = st;
      }
      kk(o);
    } else 8772 & j.subtreeFlags && tt !== null ? (tt.return = j, V = tt) : kk(o);
  }
}
function kk(o) {
  for (; V !== null; ) {
    var s = V;
    if (8772 & s.flags) {
      var h = s.alternate;
      try {
        if (8772 & s.flags) switch (s.tag) {
          case 0:
          case 11:
          case 15:
            U || Qj(5, s);
            break;
          case 1:
            var g = s.stateNode;
            if (4 & s.flags && !U) if (h === null) g.componentDidMount();
            else {
              var j = s.elementType === s.type ? h.memoizedProps : Ci(s.type, h.memoizedProps);
              g.componentDidUpdate(j, h.memoizedState, g.__reactInternalSnapshotBeforeUpdate);
            }
            var tt = s.updateQueue;
            tt !== null && sh(s, tt, g);
            break;
          case 3:
            var rt = s.updateQueue;
            if (rt !== null) {
              if (h = null, s.child !== null) switch (s.child.tag) {
                case 5:
                case 1:
                  h = s.child.stateNode;
              }
              sh(s, rt, h);
            }
            break;
          case 5:
            var at = s.stateNode;
            if (h === null && 4 & s.flags) {
              h = at;
              var it = s.memoizedProps;
              switch (s.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  it.autoFocus && h.focus();
                  break;
                case "img":
                  it.src && (h.src = it.src);
              }
            }
            break;
          case 6:
          case 4:
          case 12:
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          case 13:
            if (s.memoizedState === null) {
              var st = s.alternate;
              if (st !== null) {
                var lt = st.memoizedState;
                if (lt !== null) {
                  var ot = lt.dehydrated;
                  ot !== null && bd(ot);
                }
              }
            }
            break;
          default:
            throw Error(p$1(163));
        }
        U || 512 & s.flags && Rj(s);
      } catch (ft) {
        W(s, s.return, ft);
      }
    }
    if (s === o) {
      V = null;
      break;
    }
    if ((h = s.sibling) !== null) {
      h.return = s.return, V = h;
      break;
    }
    V = s.return;
  }
}
function gk(o) {
  for (; V !== null; ) {
    var s = V;
    if (s === o) {
      V = null;
      break;
    }
    var h = s.sibling;
    if (h !== null) {
      h.return = s.return, V = h;
      break;
    }
    V = s.return;
  }
}
function jk(o) {
  for (; V !== null; ) {
    var s = V;
    try {
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          var h = s.return;
          try {
            Qj(4, s);
          } catch (it) {
            W(s, h, it);
          }
          break;
        case 1:
          var g = s.stateNode;
          if (typeof g.componentDidMount == "function") {
            var j = s.return;
            try {
              g.componentDidMount();
            } catch (it) {
              W(s, j, it);
            }
          }
          var tt = s.return;
          try {
            Rj(s);
          } catch (it) {
            W(s, tt, it);
          }
          break;
        case 5:
          var rt = s.return;
          try {
            Rj(s);
          } catch (it) {
            W(s, rt, it);
          }
      }
    } catch (it) {
      W(s, s.return, it);
    }
    if (s === o) {
      V = null;
      break;
    }
    var at = s.sibling;
    if (at !== null) {
      at.return = s.return, V = at;
      break;
    }
    V = s.return;
  }
}
var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = 1 / 0, uk = null, Oi = !1, Pi = null, Ri = null, vk = !1, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0, Vk;
function R$1() {
  return 6 & K ? B() : Ak !== -1 ? Ak : Ak = B();
}
function yi(o) {
  return 1 & o.mode ? 2 & K && Z !== 0 ? Z & -Z : Kg.transition !== null ? (Bk === 0 && (Bk = yc()), Bk) : (o = C$1) !== 0 ? o : o = (o = window.event) === void 0 ? 16 : jd(o.type) : 1;
}
function gi(o, s, h, g) {
  if (50 < yk) throw yk = 0, zk = null, Error(p$1(185));
  Ac(o, h, g), 2 & K && o === Q || (o === Q && (!(2 & K) && (qk |= h), T === 4 && Ck(o, Z)), Dk(o, g), h === 1 && K === 0 && !(1 & s.mode) && (Gj = B() + 500, fg && jg()));
}
function Dk(o, s) {
  var h = o.callbackNode;
  wc(o, s);
  var g = uc(o, o === Q ? Z : 0);
  if (g === 0) h !== null && bc(h), o.callbackNode = null, o.callbackPriority = 0;
  else if (s = g & -g, o.callbackPriority !== s) {
    if (h != null && bc(h), s === 1) o.tag === 0 ? ig(Ek.bind(null, o)) : hg(Ek.bind(null, o)), Jf(function() {
      !(6 & K) && jg();
    }), h = null;
    else {
      switch (Dc(g)) {
        case 1:
          h = fc;
          break;
        case 4:
          h = gc;
          break;
        case 16:
        default:
          h = hc;
          break;
        case 536870912:
          h = jc;
      }
      h = Fk(h, Gk.bind(null, o));
    }
    o.callbackPriority = s, o.callbackNode = h;
  }
}
function Gk(o, s) {
  if (Ak = -1, Bk = 0, 6 & K) throw Error(p$1(327));
  var h = o.callbackNode;
  if (Hk() && o.callbackNode !== h) return null;
  var g = uc(o, o === Q ? Z : 0);
  if (g === 0) return null;
  if (30 & g || g & o.expiredLanes || s) s = Ik(o, g);
  else {
    s = g;
    var j = K;
    K |= 2;
    var tt = Jk();
    for (Q === o && Z === s || (uk = null, Gj = B() + 500, Kk(o, s)); ; ) try {
      Lk();
      break;
    } catch (at) {
      Mk(o, at);
    }
    $g(), mk.current = tt, K = j, Y !== null ? s = 0 : (Q = null, Z = 0, s = T);
  }
  if (s !== 0) {
    if (s === 2 && (j = xc(o)) !== 0 && (g = j, s = Nk(o, j)), s === 1) throw h = pk, Kk(o, 0), Ck(o, g), Dk(o, B()), h;
    if (s === 6) Ck(o, g);
    else {
      if (j = o.current.alternate, !(30 & g || Ok(j) || (s = Ik(o, g), s === 2 && (tt = xc(o), tt !== 0 && (g = tt, s = Nk(o, tt))), s !== 1))) throw h = pk, Kk(o, 0), Ck(o, g), Dk(o, B()), h;
      switch (o.finishedWork = j, o.finishedLanes = g, s) {
        case 0:
        case 1:
          throw Error(p$1(345));
        case 2:
        case 5:
          Pk(o, tk, uk);
          break;
        case 3:
          if (Ck(o, g), (130023424 & g) === g && 10 < (s = fk + 500 - B())) {
            if (uc(o, 0) !== 0) break;
            if (((j = o.suspendedLanes) & g) !== g) {
              R$1(), o.pingedLanes |= o.suspendedLanes & j;
              break;
            }
            o.timeoutHandle = Ff(Pk.bind(null, o, tk, uk), s);
            break;
          }
          Pk(o, tk, uk);
          break;
        case 4:
          if (Ck(o, g), (4194240 & g) === g) break;
          for (s = o.eventTimes, j = -1; 0 < g; ) {
            var rt = 31 - oc(g);
            tt = 1 << rt, (rt = s[rt]) > j && (j = rt), g &= ~tt;
          }
          if (g = j, 10 < (g = (120 > (g = B() - g) ? 120 : 480 > g ? 480 : 1080 > g ? 1080 : 1920 > g ? 1920 : 3e3 > g ? 3e3 : 4320 > g ? 4320 : 1960 * lk(g / 1960)) - g)) {
            o.timeoutHandle = Ff(Pk.bind(null, o, tk, uk), g);
            break;
          }
          Pk(o, tk, uk);
          break;
        default:
          throw Error(p$1(329));
      }
    }
  }
  return Dk(o, B()), o.callbackNode === h ? Gk.bind(null, o) : null;
}
function Nk(o, s) {
  var h = sk;
  return o.current.memoizedState.isDehydrated && (Kk(o, s).flags |= 256), (o = Ik(o, s)) !== 2 && (s = tk, tk = h, s !== null && Fj(s)), o;
}
function Fj(o) {
  tk === null ? tk = o : tk.push.apply(tk, o);
}
function Ok(o) {
  for (var s = o; ; ) {
    if (16384 & s.flags) {
      var h = s.updateQueue;
      if (h !== null && (h = h.stores) !== null) for (var g = 0; g < h.length; g++) {
        var j = h[g], tt = j.getSnapshot;
        j = j.value;
        try {
          if (!He(tt(), j)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (h = s.child, 16384 & s.subtreeFlags && h !== null) h.return = s, s = h;
    else {
      if (s === o) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === o) return !0;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }
  return !0;
}
function Ck(o, s) {
  for (s &= ~rk, s &= ~qk, o.suspendedLanes |= s, o.pingedLanes &= ~s, o = o.expirationTimes; 0 < s; ) {
    var h = 31 - oc(s), g = 1 << h;
    o[h] = -1, s &= ~g;
  }
}
function Ek(o) {
  if (6 & K) throw Error(p$1(327));
  Hk();
  var s = uc(o, 0);
  if (!(1 & s)) return Dk(o, B()), null;
  var h = Ik(o, s);
  if (o.tag !== 0 && h === 2) {
    var g = xc(o);
    g !== 0 && (s = g, h = Nk(o, g));
  }
  if (h === 1) throw h = pk, Kk(o, 0), Ck(o, s), Dk(o, B()), h;
  if (h === 6) throw Error(p$1(345));
  return o.finishedWork = o.current.alternate, o.finishedLanes = s, Pk(o, tk, uk), Dk(o, B()), null;
}
function Qk(o, s) {
  var h = K;
  K |= 1;
  try {
    return o(s);
  } finally {
    (K = h) === 0 && (Gj = B() + 500, fg && jg());
  }
}
function Rk(o) {
  wk !== null && wk.tag === 0 && !(6 & K) && Hk();
  var s = K;
  K |= 1;
  var h = ok.transition, g = C$1;
  try {
    if (ok.transition = null, C$1 = 1, o) return o();
  } finally {
    C$1 = g, ok.transition = h, !(6 & (K = s)) && jg();
  }
}
function Hj() {
  fj = ej.current, E$1(ej);
}
function Kk(o, s) {
  o.finishedWork = null, o.finishedLanes = 0;
  var h = o.timeoutHandle;
  if (h !== -1 && (o.timeoutHandle = -1, Gf(h)), Y !== null) for (h = Y.return; h !== null; ) {
    var g = h;
    switch (wg(g), g.tag) {
      case 1:
        (g = g.type.childContextTypes) != null && $f();
        break;
      case 3:
        zh(), E$1(Wf), E$1(H), Eh();
        break;
      case 5:
        Bh(g);
        break;
      case 4:
        zh();
        break;
      case 13:
      case 19:
        E$1(L);
        break;
      case 10:
        ah(g.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    h = h.return;
  }
  if (Q = o, Y = o = Pg(o.current, null), Z = fj = s, T = 0, pk = null, rk = qk = rh = 0, tk = sk = null, fh !== null) {
    for (s = 0; s < fh.length; s++) if ((g = (h = fh[s]).interleaved) !== null) {
      h.interleaved = null;
      var j = g.next, tt = h.pending;
      if (tt !== null) {
        var rt = tt.next;
        tt.next = j, g.next = rt;
      }
      h.pending = g;
    }
    fh = null;
  }
  return o;
}
function Mk(o, s) {
  for (; ; ) {
    var h = Y;
    try {
      if ($g(), Fh.current = Rh, Ih) {
        for (var g = M.memoizedState; g !== null; ) {
          var j = g.queue;
          j !== null && (j.pending = null), g = g.next;
        }
        Ih = !1;
      }
      if (Hh = 0, O$1 = N = M = null, Jh = !1, Kh = 0, nk.current = null, h === null || h.return === null) {
        T = 1, pk = s, Y = null;
        break;
      }
      t: {
        var tt = o, rt = h.return, at = h, it = s;
        if (s = Z, at.flags |= 32768, it !== null && typeof it == "object" && typeof it.then == "function") {
          var st = it, lt = at, ot = lt.tag;
          if (!(1 & lt.mode || ot !== 0 && ot !== 11 && ot !== 15)) {
            var ft = lt.alternate;
            ft ? (lt.updateQueue = ft.updateQueue, lt.memoizedState = ft.memoizedState, lt.lanes = ft.lanes) : (lt.updateQueue = null, lt.memoizedState = null);
          }
          var ht = Ui(rt);
          if (ht !== null) {
            ht.flags &= -257, Vi(ht, rt, at, tt, s), 1 & ht.mode && Si(tt, st, s), it = st;
            var pt = (s = ht).updateQueue;
            if (pt === null) {
              var dt = /* @__PURE__ */ new Set();
              dt.add(it), s.updateQueue = dt;
            } else pt.add(it);
            break t;
          }
          if (!(1 & s)) {
            Si(tt, st, s), tj();
            break t;
          }
          it = Error(p$1(426));
        } else if (I$1 && 1 & at.mode) {
          var ct = Ui(rt);
          if (ct !== null) {
            !(65536 & ct.flags) && (ct.flags |= 256), Vi(ct, rt, at, tt, s), Jg(Ji(it, at));
            break t;
          }
        }
        tt = it = Ji(it, at), T !== 4 && (T = 2), sk === null ? sk = [tt] : sk.push(tt), tt = rt;
        do {
          switch (tt.tag) {
            case 3:
              tt.flags |= 65536, s &= -s, tt.lanes |= s, ph(tt, Ni(tt, it, s));
              break t;
            case 1:
              at = it;
              var mt = tt.type, yt = tt.stateNode;
              if (!(128 & tt.flags || typeof mt.getDerivedStateFromError != "function" && (yt === null || typeof yt.componentDidCatch != "function" || Ri !== null && Ri.has(yt)))) {
                tt.flags |= 65536, s &= -s, tt.lanes |= s, ph(tt, Qi(tt, at, s));
                break t;
              }
          }
          tt = tt.return;
        } while (tt !== null);
      }
      Sk(h);
    } catch (vt) {
      s = vt, Y === h && h !== null && (Y = h = h.return);
      continue;
    }
    break;
  }
}
function Jk() {
  var o = mk.current;
  return mk.current = Rh, o === null ? Rh : o;
}
function tj() {
  T !== 0 && T !== 3 && T !== 2 || (T = 4), Q === null || !(268435455 & rh) && !(268435455 & qk) || Ck(Q, Z);
}
function Ik(o, s) {
  var h = K;
  K |= 2;
  var g = Jk();
  for (Q === o && Z === s || (uk = null, Kk(o, s)); ; ) try {
    Tk();
    break;
  } catch (j) {
    Mk(o, j);
  }
  if ($g(), K = h, mk.current = g, Y !== null) throw Error(p$1(261));
  return Q = null, Z = 0, T;
}
function Tk() {
  for (; Y !== null; ) Uk(Y);
}
function Lk() {
  for (; Y !== null && !cc(); ) Uk(Y);
}
function Uk(o) {
  var s = Vk(o.alternate, o, fj);
  o.memoizedProps = o.pendingProps, s === null ? Sk(o) : Y = s, nk.current = null;
}
function Sk(o) {
  var s = o;
  do {
    var h = s.alternate;
    if (o = s.return, 32768 & s.flags) {
      if ((h = Ij(h, s)) !== null) return h.flags &= 32767, void (Y = h);
      if (o === null) return T = 6, void (Y = null);
      o.flags |= 32768, o.subtreeFlags = 0, o.deletions = null;
    } else if ((h = Ej(h, s, fj)) !== null) return void (Y = h);
    if ((s = s.sibling) !== null) return void (Y = s);
    Y = s = o;
  } while (s !== null);
  T === 0 && (T = 5);
}
function Pk(o, s, h) {
  var g = C$1, j = ok.transition;
  try {
    ok.transition = null, C$1 = 1, Wk(o, s, h, g);
  } finally {
    ok.transition = j, C$1 = g;
  }
  return null;
}
function Wk(o, s, h, g) {
  do
    Hk();
  while (wk !== null);
  if (6 & K) throw Error(p$1(327));
  h = o.finishedWork;
  var j = o.finishedLanes;
  if (h === null) return null;
  if (o.finishedWork = null, o.finishedLanes = 0, h === o.current) throw Error(p$1(177));
  o.callbackNode = null, o.callbackPriority = 0;
  var tt = h.lanes | h.childLanes;
  if (Bc(o, tt), o === Q && (Y = Q = null, Z = 0), !(2064 & h.subtreeFlags) && !(2064 & h.flags) || vk || (vk = !0, Fk(hc, function() {
    return Hk(), null;
  })), tt = !!(15990 & h.flags), 15990 & h.subtreeFlags || tt) {
    tt = ok.transition, ok.transition = null;
    var rt = C$1;
    C$1 = 1;
    var at = K;
    K |= 4, nk.current = null, Oj(o, h), dk(h, o), Oe(Df), dd = !!Cf, Df = Cf = null, o.current = h, hk(h), dc(), K = at, C$1 = rt, ok.transition = tt;
  } else o.current = h;
  if (vk && (vk = !1, wk = o, xk = j), (tt = o.pendingLanes) === 0 && (Ri = null), mc(h.stateNode), Dk(o, B()), s !== null) for (g = o.onRecoverableError, h = 0; h < s.length; h++) g((j = s[h]).value, { componentStack: j.stack, digest: j.digest });
  if (Oi) throw Oi = !1, o = Pi, Pi = null, o;
  return 1 & xk && o.tag !== 0 && Hk(), 1 & (tt = o.pendingLanes) ? o === zk ? yk++ : (yk = 0, zk = o) : yk = 0, jg(), null;
}
function Hk() {
  if (wk !== null) {
    var o = Dc(xk), s = ok.transition, h = C$1;
    try {
      if (ok.transition = null, C$1 = 16 > o ? 16 : o, wk === null) var g = !1;
      else {
        if (o = wk, wk = null, xk = 0, 6 & K) throw Error(p$1(331));
        var j = K;
        for (K |= 4, V = o.current; V !== null; ) {
          var tt = V, rt = tt.child;
          if (16 & V.flags) {
            var at = tt.deletions;
            if (at !== null) {
              for (var it = 0; it < at.length; it++) {
                var st = at[it];
                for (V = st; V !== null; ) {
                  var lt = V;
                  switch (lt.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, lt, tt);
                  }
                  var ot = lt.child;
                  if (ot !== null) ot.return = lt, V = ot;
                  else for (; V !== null; ) {
                    var ft = (lt = V).sibling, ht = lt.return;
                    if (Sj(lt), lt === st) {
                      V = null;
                      break;
                    }
                    if (ft !== null) {
                      ft.return = ht, V = ft;
                      break;
                    }
                    V = ht;
                  }
                }
              }
              var pt = tt.alternate;
              if (pt !== null) {
                var dt = pt.child;
                if (dt !== null) {
                  pt.child = null;
                  do {
                    var ct = dt.sibling;
                    dt.sibling = null, dt = ct;
                  } while (dt !== null);
                }
              }
              V = tt;
            }
          }
          if (2064 & tt.subtreeFlags && rt !== null) rt.return = tt, V = rt;
          else t: for (; V !== null; ) {
            if (2048 & (tt = V).flags) switch (tt.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, tt, tt.return);
            }
            var mt = tt.sibling;
            if (mt !== null) {
              mt.return = tt.return, V = mt;
              break t;
            }
            V = tt.return;
          }
        }
        var yt = o.current;
        for (V = yt; V !== null; ) {
          var vt = (rt = V).child;
          if (2064 & rt.subtreeFlags && vt !== null) vt.return = rt, V = vt;
          else t: for (rt = yt; V !== null; ) {
            if (2048 & (at = V).flags) try {
              switch (at.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, at);
              }
            } catch (Pt) {
              W(at, at.return, Pt);
            }
            if (at === rt) {
              V = null;
              break t;
            }
            var _t = at.sibling;
            if (_t !== null) {
              _t.return = at.return, V = _t;
              break t;
            }
            V = at.return;
          }
        }
        if (K = j, jg(), lc && typeof lc.onPostCommitFiberRoot == "function") try {
          lc.onPostCommitFiberRoot(kc, o);
        } catch {
        }
        g = !0;
      }
      return g;
    } finally {
      C$1 = h, ok.transition = s;
    }
  }
  return !1;
}
function Xk(o, s, h) {
  o = nh(o, s = Ni(o, s = Ji(h, s), 1), 1), s = R$1(), o !== null && (Ac(o, 1, s), Dk(o, s));
}
function W(o, s, h) {
  if (o.tag === 3) Xk(o, o, h);
  else for (; s !== null; ) {
    if (s.tag === 3) {
      Xk(s, o, h);
      break;
    }
    if (s.tag === 1) {
      var g = s.stateNode;
      if (typeof s.type.getDerivedStateFromError == "function" || typeof g.componentDidCatch == "function" && (Ri === null || !Ri.has(g))) {
        s = nh(s, o = Qi(s, o = Ji(h, o), 1), 1), o = R$1(), s !== null && (Ac(s, 1, o), Dk(s, o));
        break;
      }
    }
    s = s.return;
  }
}
function Ti(o, s, h) {
  var g = o.pingCache;
  g !== null && g.delete(s), s = R$1(), o.pingedLanes |= o.suspendedLanes & h, Q === o && (Z & h) === h && (T === 4 || T === 3 && (130023424 & Z) === Z && 500 > B() - fk ? Kk(o, 0) : rk |= h), Dk(o, s);
}
function Yk(o, s) {
  s === 0 && (1 & o.mode ? (s = sc, !(130023424 & (sc <<= 1)) && (sc = 4194304)) : s = 1);
  var h = R$1();
  (o = ih(o, s)) !== null && (Ac(o, s, h), Dk(o, h));
}
function uj(o) {
  var s = o.memoizedState, h = 0;
  s !== null && (h = s.retryLane), Yk(o, h);
}
function bk(o, s) {
  var h = 0;
  switch (o.tag) {
    case 13:
      var g = o.stateNode, j = o.memoizedState;
      j !== null && (h = j.retryLane);
      break;
    case 19:
      g = o.stateNode;
      break;
    default:
      throw Error(p$1(314));
  }
  g !== null && g.delete(s), Yk(o, h);
}
function Fk(o, s) {
  return ac(o, s);
}
function $k(o, s, h, g) {
  this.tag = o, this.key = h, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = g, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Bg(o, s, h, g) {
  return new $k(o, s, h, g);
}
function aj(o) {
  return !(!(o = o.prototype) || !o.isReactComponent);
}
function Zk(o) {
  if (typeof o == "function") return aj(o) ? 1 : 0;
  if (o != null) {
    if ((o = o.$$typeof) === Da) return 11;
    if (o === Ga) return 14;
  }
  return 2;
}
function Pg(o, s) {
  var h = o.alternate;
  return h === null ? ((h = Bg(o.tag, s, o.key, o.mode)).elementType = o.elementType, h.type = o.type, h.stateNode = o.stateNode, h.alternate = o, o.alternate = h) : (h.pendingProps = s, h.type = o.type, h.flags = 0, h.subtreeFlags = 0, h.deletions = null), h.flags = 14680064 & o.flags, h.childLanes = o.childLanes, h.lanes = o.lanes, h.child = o.child, h.memoizedProps = o.memoizedProps, h.memoizedState = o.memoizedState, h.updateQueue = o.updateQueue, s = o.dependencies, h.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }, h.sibling = o.sibling, h.index = o.index, h.ref = o.ref, h;
}
function Rg(o, s, h, g, j, tt) {
  var rt = 2;
  if (g = o, typeof o == "function") aj(o) && (rt = 1);
  else if (typeof o == "string") rt = 5;
  else t: switch (o) {
    case ya:
      return Tg(h.children, j, tt, s);
    case za:
      rt = 8, j |= 8;
      break;
    case Aa:
      return (o = Bg(12, h, s, 2 | j)).elementType = Aa, o.lanes = tt, o;
    case Ea:
      return (o = Bg(13, h, s, j)).elementType = Ea, o.lanes = tt, o;
    case Fa:
      return (o = Bg(19, h, s, j)).elementType = Fa, o.lanes = tt, o;
    case Ia:
      return pj(h, j, tt, s);
    default:
      if (typeof o == "object" && o !== null) switch (o.$$typeof) {
        case Ba:
          rt = 10;
          break t;
        case Ca:
          rt = 9;
          break t;
        case Da:
          rt = 11;
          break t;
        case Ga:
          rt = 14;
          break t;
        case Ha:
          rt = 16, g = null;
          break t;
      }
      throw Error(p$1(130, o == null ? o : typeof o, ""));
  }
  return (s = Bg(rt, h, s, j)).elementType = o, s.type = g, s.lanes = tt, s;
}
function Tg(o, s, h, g) {
  return (o = Bg(7, o, g, s)).lanes = h, o;
}
function pj(o, s, h, g) {
  return (o = Bg(22, o, g, s)).elementType = Ia, o.lanes = h, o.stateNode = { isHidden: !1 }, o;
}
function Qg(o, s, h) {
  return (o = Bg(6, o, null, s)).lanes = h, o;
}
function Sg(o, s, h) {
  return (s = Bg(4, o.children !== null ? o.children : [], o.key, s)).lanes = h, s.stateNode = { containerInfo: o.containerInfo, pendingChildren: null, implementation: o.implementation }, s;
}
function al(o, s, h, g, j) {
  this.tag = s, this.containerInfo = o, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zc(0), this.expirationTimes = zc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zc(0), this.identifierPrefix = g, this.onRecoverableError = j, this.mutableSourceEagerHydrationData = null;
}
function bl(o, s, h, g, j, tt, rt, at, it) {
  return o = new al(o, s, h, at, it), s === 1 ? (s = 1, tt === !0 && (s |= 8)) : s = 0, tt = Bg(3, null, null, s), o.current = tt, tt.stateNode = o, tt.memoizedState = { element: g, isDehydrated: h, cache: null, transitions: null, pendingSuspenseBoundaries: null }, kh(tt), o;
}
function cl(o, s, h) {
  var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: wa, key: g == null ? null : "" + g, children: o, containerInfo: s, implementation: h };
}
function dl(o) {
  if (!o) return Vf;
  t: {
    if (Vb(o = o._reactInternals) !== o || o.tag !== 1) throw Error(p$1(170));
    var s = o;
    do {
      switch (s.tag) {
        case 3:
          s = s.stateNode.context;
          break t;
        case 1:
          if (Zf(s.type)) {
            s = s.stateNode.__reactInternalMemoizedMergedChildContext;
            break t;
          }
      }
      s = s.return;
    } while (s !== null);
    throw Error(p$1(171));
  }
  if (o.tag === 1) {
    var h = o.type;
    if (Zf(h)) return bg(o, h, s);
  }
  return s;
}
function el(o, s, h, g, j, tt, rt, at, it) {
  return (o = bl(h, g, !0, o, j, tt, rt, at, it)).context = dl(null), h = o.current, (tt = mh(g = R$1(), j = yi(h))).callback = s ?? null, nh(h, tt, j), o.current.lanes = j, Ac(o, j, g), Dk(o, g), o;
}
function fl(o, s, h, g) {
  var j = s.current, tt = R$1(), rt = yi(j);
  return h = dl(h), s.context === null ? s.context = h : s.pendingContext = h, (s = mh(tt, rt)).payload = { element: o }, (g = g === void 0 ? null : g) !== null && (s.callback = g), (o = nh(j, s, rt)) !== null && (gi(o, j, rt, tt), oh(o, j, rt)), rt;
}
function gl(o) {
  return (o = o.current).child ? (o.child.tag, o.child.stateNode) : null;
}
function hl(o, s) {
  if ((o = o.memoizedState) !== null && o.dehydrated !== null) {
    var h = o.retryLane;
    o.retryLane = h !== 0 && h < s ? h : s;
  }
}
function il(o, s) {
  hl(o, s), (o = o.alternate) && hl(o, s);
}
function jl() {
  return null;
}
Vk = function(o, s, h) {
  if (o !== null) if (o.memoizedProps !== s.pendingProps || Wf.current) dh = !0;
  else {
    if (!(o.lanes & h) && !(128 & s.flags)) return dh = !1, yj(o, s, h);
    dh = !!(131072 & o.flags);
  }
  else dh = !1, I$1 && 1048576 & s.flags && ug(s, ng, s.index);
  switch (s.lanes = 0, s.tag) {
    case 2:
      var g = s.type;
      ij(o, s), o = s.pendingProps;
      var j = Yf(s, H.current);
      ch(s, h), j = Nh(null, s, g, o, j, h);
      var tt = Sh();
      return s.flags |= 1, typeof j == "object" && j !== null && typeof j.render == "function" && j.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, Zf(g) ? (tt = !0, cg(s)) : tt = !1, s.memoizedState = j.state !== null && j.state !== void 0 ? j.state : null, kh(s), j.updater = Ei, s.stateNode = j, j._reactInternals = s, Ii(s, g, o, h), s = jj(null, s, g, !0, tt, h)) : (s.tag = 0, I$1 && tt && vg(s), Xi(null, s, j, h), s = s.child), s;
    case 16:
      g = s.elementType;
      t: {
        switch (ij(o, s), o = s.pendingProps, g = (j = g._init)(g._payload), s.type = g, j = s.tag = Zk(g), o = Ci(g, o), j) {
          case 0:
            s = cj(null, s, g, o, h);
            break t;
          case 1:
            s = hj(null, s, g, o, h);
            break t;
          case 11:
            s = Yi(null, s, g, o, h);
            break t;
          case 14:
            s = $i(null, s, g, Ci(g.type, o), h);
            break t;
        }
        throw Error(p$1(306, g, ""));
      }
      return s;
    case 0:
      return g = s.type, j = s.pendingProps, cj(o, s, g, j = s.elementType === g ? j : Ci(g, j), h);
    case 1:
      return g = s.type, j = s.pendingProps, hj(o, s, g, j = s.elementType === g ? j : Ci(g, j), h);
    case 3:
      t: {
        if (kj(s), o === null) throw Error(p$1(387));
        g = s.pendingProps, j = (tt = s.memoizedState).element, lh(o, s), qh(s, g, null, h);
        var rt = s.memoizedState;
        if (g = rt.element, tt.isDehydrated) {
          if (tt = { element: g, isDehydrated: !1, cache: rt.cache, pendingSuspenseBoundaries: rt.pendingSuspenseBoundaries, transitions: rt.transitions }, s.updateQueue.baseState = tt, s.memoizedState = tt, 256 & s.flags) {
            s = lj(o, s, g, h, j = Ji(Error(p$1(423)), s));
            break t;
          }
          if (g !== j) {
            s = lj(o, s, g, h, j = Ji(Error(p$1(424)), s));
            break t;
          }
          for (yg = Lf(s.stateNode.containerInfo.firstChild), xg = s, I$1 = !0, zg = null, h = Vg(s, null, g, h), s.child = h; h; ) h.flags = -3 & h.flags | 4096, h = h.sibling;
        } else {
          if (Ig(), g === j) {
            s = Zi(o, s, h);
            break t;
          }
          Xi(o, s, g, h);
        }
        s = s.child;
      }
      return s;
    case 5:
      return Ah(s), o === null && Eg(s), g = s.type, j = s.pendingProps, tt = o !== null ? o.memoizedProps : null, rt = j.children, Ef(g, j) ? rt = null : tt !== null && Ef(g, tt) && (s.flags |= 32), gj(o, s), Xi(o, s, rt, h), s.child;
    case 6:
      return o === null && Eg(s), null;
    case 13:
      return oj(o, s, h);
    case 4:
      return yh(s, s.stateNode.containerInfo), g = s.pendingProps, o === null ? s.child = Ug(s, null, g, h) : Xi(o, s, g, h), s.child;
    case 11:
      return g = s.type, j = s.pendingProps, Yi(o, s, g, j = s.elementType === g ? j : Ci(g, j), h);
    case 7:
      return Xi(o, s, s.pendingProps, h), s.child;
    case 8:
    case 12:
      return Xi(o, s, s.pendingProps.children, h), s.child;
    case 10:
      t: {
        if (g = s.type._context, j = s.pendingProps, tt = s.memoizedProps, rt = j.value, G(Wg, g._currentValue), g._currentValue = rt, tt !== null) if (He(tt.value, rt)) {
          if (tt.children === j.children && !Wf.current) {
            s = Zi(o, s, h);
            break t;
          }
        } else for ((tt = s.child) !== null && (tt.return = s); tt !== null; ) {
          var at = tt.dependencies;
          if (at !== null) {
            rt = tt.child;
            for (var it = at.firstContext; it !== null; ) {
              if (it.context === g) {
                if (tt.tag === 1) {
                  (it = mh(-1, h & -h)).tag = 2;
                  var st = tt.updateQueue;
                  if (st !== null) {
                    var lt = (st = st.shared).pending;
                    lt === null ? it.next = it : (it.next = lt.next, lt.next = it), st.pending = it;
                  }
                }
                tt.lanes |= h, (it = tt.alternate) !== null && (it.lanes |= h), bh(tt.return, h, s), at.lanes |= h;
                break;
              }
              it = it.next;
            }
          } else if (tt.tag === 10) rt = tt.type === s.type ? null : tt.child;
          else if (tt.tag === 18) {
            if ((rt = tt.return) === null) throw Error(p$1(341));
            rt.lanes |= h, (at = rt.alternate) !== null && (at.lanes |= h), bh(rt, h, s), rt = tt.sibling;
          } else rt = tt.child;
          if (rt !== null) rt.return = tt;
          else for (rt = tt; rt !== null; ) {
            if (rt === s) {
              rt = null;
              break;
            }
            if ((tt = rt.sibling) !== null) {
              tt.return = rt.return, rt = tt;
              break;
            }
            rt = rt.return;
          }
          tt = rt;
        }
        Xi(o, s, j.children, h), s = s.child;
      }
      return s;
    case 9:
      return j = s.type, g = s.pendingProps.children, ch(s, h), g = g(j = eh(j)), s.flags |= 1, Xi(o, s, g, h), s.child;
    case 14:
      return j = Ci(g = s.type, s.pendingProps), $i(o, s, g, j = Ci(g.type, j), h);
    case 15:
      return bj(o, s, s.type, s.pendingProps, h);
    case 17:
      return g = s.type, j = s.pendingProps, j = s.elementType === g ? j : Ci(g, j), ij(o, s), s.tag = 1, Zf(g) ? (o = !0, cg(s)) : o = !1, ch(s, h), Gi(s, g, j), Ii(s, g, j, h), jj(null, s, g, !0, o, h);
    case 19:
      return xj(o, s, h);
    case 22:
      return dj(o, s, h);
  }
  throw Error(p$1(156, s.tag));
};
var kl = typeof reportError == "function" ? reportError : function(o) {
  console.error(o);
};
function ll(o) {
  this._internalRoot = o;
}
function ml(o) {
  this._internalRoot = o;
}
function nl(o) {
  return !(!o || o.nodeType !== 1 && o.nodeType !== 9 && o.nodeType !== 11);
}
function ol(o) {
  return !(!o || o.nodeType !== 1 && o.nodeType !== 9 && o.nodeType !== 11 && (o.nodeType !== 8 || o.nodeValue !== " react-mount-point-unstable "));
}
function pl() {
}
function ql(o, s, h, g, j) {
  if (j) {
    if (typeof g == "function") {
      var tt = g;
      g = function() {
        var st = gl(rt);
        tt.call(st);
      };
    }
    var rt = el(s, g, o, 0, null, !1, !1, "", pl);
    return o._reactRootContainer = rt, o[uf] = rt.current, sf(o.nodeType === 8 ? o.parentNode : o), Rk(), rt;
  }
  for (; j = o.lastChild; ) o.removeChild(j);
  if (typeof g == "function") {
    var at = g;
    g = function() {
      var st = gl(it);
      at.call(st);
    };
  }
  var it = bl(o, 0, !1, null, null, !1, !1, "", pl);
  return o._reactRootContainer = it, o[uf] = it.current, sf(o.nodeType === 8 ? o.parentNode : o), Rk(function() {
    fl(s, it, h, g);
  }), it;
}
function rl(o, s, h, g, j) {
  var tt = h._reactRootContainer;
  if (tt) {
    var rt = tt;
    if (typeof j == "function") {
      var at = j;
      j = function() {
        var it = gl(rt);
        at.call(it);
      };
    }
    fl(s, rt, o, j);
  } else rt = ql(h, s, o, j, g);
  return gl(rt);
}
ml.prototype.render = ll.prototype.render = function(o) {
  var s = this._internalRoot;
  if (s === null) throw Error(p$1(409));
  fl(o, s, null, null);
}, ml.prototype.unmount = ll.prototype.unmount = function() {
  var o = this._internalRoot;
  if (o !== null) {
    this._internalRoot = null;
    var s = o.containerInfo;
    Rk(function() {
      fl(null, o, null, null);
    }), s[uf] = null;
  }
}, ml.prototype.unstable_scheduleHydration = function(o) {
  if (o) {
    var s = Hc();
    o = { blockedOn: null, target: o, priority: s };
    for (var h = 0; h < Qc.length && s !== 0 && s < Qc[h].priority; h++) ;
    Qc.splice(h, 0, o), h === 0 && Vc(o);
  }
}, Ec = function(o) {
  switch (o.tag) {
    case 3:
      var s = o.stateNode;
      if (s.current.memoizedState.isDehydrated) {
        var h = tc(s.pendingLanes);
        h !== 0 && (Cc(s, 1 | h), Dk(s, B()), !(6 & K) && (Gj = B() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var g = ih(o, 1);
        if (g !== null) {
          var j = R$1();
          gi(g, o, 1, j);
        }
      }), il(o, 1);
  }
}, Fc = function(o) {
  if (o.tag === 13) {
    var s = ih(o, 134217728);
    s !== null && gi(s, o, 134217728, R$1()), il(o, 134217728);
  }
}, Gc = function(o) {
  if (o.tag === 13) {
    var s = yi(o), h = ih(o, s);
    h !== null && gi(h, o, s, R$1()), il(o, s);
  }
}, Hc = function() {
  return C$1;
}, Ic = function(o, s) {
  var h = C$1;
  try {
    return C$1 = o, s();
  } finally {
    C$1 = h;
  }
}, yb = function(o, s, h) {
  switch (s) {
    case "input":
      if (bb(o, h), s = h.name, h.type === "radio" && s != null) {
        for (h = o; h.parentNode; ) h = h.parentNode;
        for (h = h.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'), s = 0; s < h.length; s++) {
          var g = h[s];
          if (g !== o && g.form === o.form) {
            var j = Db(g);
            if (!j) throw Error(p$1(90));
            Wa(g), bb(g, j);
          }
        }
      }
      break;
    case "textarea":
      ib(o, h);
      break;
    case "select":
      (s = h.value) != null && fb(o, !!h.multiple, s, !1);
  }
}, Gb = Qk, Hb = Rk;
var sl = { usingClientEntryPoint: !1, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(o) {
  return (o = Zb(o)) === null ? null : o.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    kc = vl.inject(ul), lc = vl;
  } catch {
  }
}
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (o) {
    console.error(o);
  }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl, reactDom_production_min.createPortal = function(o, s) {
  var h = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!nl(s)) throw Error(p$1(200));
  return cl(o, s, null, h);
}, reactDom_production_min.createRoot = function(o, s) {
  if (!nl(o)) throw Error(p$1(299));
  var h = !1, g = "", j = kl;
  return s != null && (s.unstable_strictMode === !0 && (h = !0), s.identifierPrefix !== void 0 && (g = s.identifierPrefix), s.onRecoverableError !== void 0 && (j = s.onRecoverableError)), s = bl(o, 1, !1, null, null, h, !1, g, j), o[uf] = s.current, sf(o.nodeType === 8 ? o.parentNode : o), new ll(s);
}, reactDom_production_min.findDOMNode = function(o) {
  if (o == null) return null;
  if (o.nodeType === 1) return o;
  var s = o._reactInternals;
  if (s === void 0)
    throw typeof o.render == "function" ? Error(p$1(188)) : (o = Object.keys(o).join(","), Error(p$1(268, o)));
  return o = (o = Zb(s)) === null ? null : o.stateNode;
}, reactDom_production_min.flushSync = function(o) {
  return Rk(o);
}, reactDom_production_min.hydrate = function(o, s, h) {
  if (!ol(s)) throw Error(p$1(200));
  return rl(null, o, s, !0, h);
}, reactDom_production_min.hydrateRoot = function(o, s, h) {
  if (!nl(o)) throw Error(p$1(405));
  var g = h != null && h.hydratedSources || null, j = !1, tt = "", rt = kl;
  if (h != null && (h.unstable_strictMode === !0 && (j = !0), h.identifierPrefix !== void 0 && (tt = h.identifierPrefix), h.onRecoverableError !== void 0 && (rt = h.onRecoverableError)), s = el(s, null, o, 1, h ?? null, j, !1, tt, rt), o[uf] = s.current, sf(o), g) for (o = 0; o < g.length; o++) j = (j = (h = g[o])._getVersion)(h._source), s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [h, j] : s.mutableSourceEagerHydrationData.push(h, j);
  return new ml(s);
}, reactDom_production_min.render = function(o, s, h) {
  if (!ol(s)) throw Error(p$1(200));
  return rl(null, o, s, !1, h);
}, reactDom_production_min.unmountComponentAtNode = function(o) {
  if (!ol(o)) throw Error(p$1(40));
  return !!o._reactRootContainer && (Rk(function() {
    rl(null, null, o, !1, function() {
      o._reactRootContainer = null, o[uf] = null;
    });
  }), !0);
}, reactDom_production_min.unstable_batchedUpdates = Qk, reactDom_production_min.unstable_renderSubtreeIntoContainer = function(o, s, h, g) {
  if (!ol(h)) throw Error(p$1(200));
  if (o == null || o._reactInternals === void 0) throw Error(p$1(38));
  return rl(o, s, h, !1, g);
}, reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426", checkDCE(), reactDom.exports = reactDom_production_min;
var reactDomExports = reactDom.exports;
const index = getDefaultExportFromCjs$1(reactDomExports), ReactDOM = _mergeNamespaces({ __proto__: null, default: index }, [reactDomExports]);
var m = reactDomExports;
client.createRoot = m.createRoot, client.hydrateRoot = m.hydrateRoot;
var ansiStyles$1 = { exports: {} }, colorName, hasRequiredColorName, conversions, hasRequiredConversions, route, hasRequiredRoute, colorConvert, hasRequiredColorConvert;
function requireColorName() {
  return hasRequiredColorName ? colorName : (hasRequiredColorName = 1, colorName = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] });
}
function requireConversions() {
  if (hasRequiredConversions) return conversions;
  hasRequiredConversions = 1;
  const o = requireColorName(), s = {};
  for (const j of Object.keys(o)) s[o[j]] = j;
  const h = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
  conversions = h;
  for (const j of Object.keys(h)) {
    if (!("channels" in h[j])) throw new Error("missing channels property: " + j);
    if (!("labels" in h[j])) throw new Error("missing channel labels property: " + j);
    if (h[j].labels.length !== h[j].channels) throw new Error("channel and label counts mismatch: " + j);
    const { channels: tt, labels: rt } = h[j];
    delete h[j].channels, delete h[j].labels, Object.defineProperty(h[j], "channels", { value: tt }), Object.defineProperty(h[j], "labels", { value: rt });
  }
  function g(j, tt) {
    return (j[0] - tt[0]) ** 2 + (j[1] - tt[1]) ** 2 + (j[2] - tt[2]) ** 2;
  }
  return h.rgb.hsl = function(j) {
    const tt = j[0] / 255, rt = j[1] / 255, at = j[2] / 255, it = Math.min(tt, rt, at), st = Math.max(tt, rt, at), lt = st - it;
    let ot, ft;
    st === it ? ot = 0 : tt === st ? ot = (rt - at) / lt : rt === st ? ot = 2 + (at - tt) / lt : at === st && (ot = 4 + (tt - rt) / lt), ot = Math.min(60 * ot, 360), ot < 0 && (ot += 360);
    const ht = (it + st) / 2;
    return ft = st === it ? 0 : ht <= 0.5 ? lt / (st + it) : lt / (2 - st - it), [ot, 100 * ft, 100 * ht];
  }, h.rgb.hsv = function(j) {
    let tt, rt, at, it, st;
    const lt = j[0] / 255, ot = j[1] / 255, ft = j[2] / 255, ht = Math.max(lt, ot, ft), pt = ht - Math.min(lt, ot, ft), dt = function(ct) {
      return (ht - ct) / 6 / pt + 0.5;
    };
    return pt === 0 ? (it = 0, st = 0) : (st = pt / ht, tt = dt(lt), rt = dt(ot), at = dt(ft), lt === ht ? it = at - rt : ot === ht ? it = 1 / 3 + tt - at : ft === ht && (it = 2 / 3 + rt - tt), it < 0 ? it += 1 : it > 1 && (it -= 1)), [360 * it, 100 * st, 100 * ht];
  }, h.rgb.hwb = function(j) {
    const tt = j[0], rt = j[1];
    let at = j[2];
    const it = h.rgb.hsl(j)[0], st = 1 / 255 * Math.min(tt, Math.min(rt, at));
    return at = 1 - 1 / 255 * Math.max(tt, Math.max(rt, at)), [it, 100 * st, 100 * at];
  }, h.rgb.cmyk = function(j) {
    const tt = j[0] / 255, rt = j[1] / 255, at = j[2] / 255, it = Math.min(1 - tt, 1 - rt, 1 - at);
    return [100 * ((1 - tt - it) / (1 - it) || 0), 100 * ((1 - rt - it) / (1 - it) || 0), 100 * ((1 - at - it) / (1 - it) || 0), 100 * it];
  }, h.rgb.keyword = function(j) {
    const tt = s[j];
    if (tt) return tt;
    let rt, at = 1 / 0;
    for (const it of Object.keys(o)) {
      const st = g(j, o[it]);
      st < at && (at = st, rt = it);
    }
    return rt;
  }, h.keyword.rgb = function(j) {
    return o[j];
  }, h.rgb.xyz = function(j) {
    let tt = j[0] / 255, rt = j[1] / 255, at = j[2] / 255;
    return tt = tt > 0.04045 ? ((tt + 0.055) / 1.055) ** 2.4 : tt / 12.92, rt = rt > 0.04045 ? ((rt + 0.055) / 1.055) ** 2.4 : rt / 12.92, at = at > 0.04045 ? ((at + 0.055) / 1.055) ** 2.4 : at / 12.92, [100 * (0.4124 * tt + 0.3576 * rt + 0.1805 * at), 100 * (0.2126 * tt + 0.7152 * rt + 0.0722 * at), 100 * (0.0193 * tt + 0.1192 * rt + 0.9505 * at)];
  }, h.rgb.lab = function(j) {
    const tt = h.rgb.xyz(j);
    let rt = tt[0], at = tt[1], it = tt[2];
    return rt /= 95.047, at /= 100, it /= 108.883, rt = rt > 8856e-6 ? rt ** (1 / 3) : 7.787 * rt + 16 / 116, at = at > 8856e-6 ? at ** (1 / 3) : 7.787 * at + 16 / 116, it = it > 8856e-6 ? it ** (1 / 3) : 7.787 * it + 16 / 116, [116 * at - 16, 500 * (rt - at), 200 * (at - it)];
  }, h.hsl.rgb = function(j) {
    const tt = j[0] / 360, rt = j[1] / 100, at = j[2] / 100;
    let it, st, lt;
    if (rt === 0) return lt = 255 * at, [lt, lt, lt];
    it = at < 0.5 ? at * (1 + rt) : at + rt - at * rt;
    const ot = 2 * at - it, ft = [0, 0, 0];
    for (let ht = 0; ht < 3; ht++) st = tt + 1 / 3 * -(ht - 1), st < 0 && st++, st > 1 && st--, lt = 6 * st < 1 ? ot + 6 * (it - ot) * st : 2 * st < 1 ? it : 3 * st < 2 ? ot + (it - ot) * (2 / 3 - st) * 6 : ot, ft[ht] = 255 * lt;
    return ft;
  }, h.hsl.hsv = function(j) {
    const tt = j[0];
    let rt = j[1] / 100, at = j[2] / 100, it = rt;
    const st = Math.max(at, 0.01);
    return at *= 2, rt *= at <= 1 ? at : 2 - at, it *= st <= 1 ? st : 2 - st, [tt, 100 * (at === 0 ? 2 * it / (st + it) : 2 * rt / (at + rt)), 100 * ((at + rt) / 2)];
  }, h.hsv.rgb = function(j) {
    const tt = j[0] / 60, rt = j[1] / 100;
    let at = j[2] / 100;
    const it = Math.floor(tt) % 6, st = tt - Math.floor(tt), lt = 255 * at * (1 - rt), ot = 255 * at * (1 - rt * st), ft = 255 * at * (1 - rt * (1 - st));
    switch (at *= 255, it) {
      case 0:
        return [at, ft, lt];
      case 1:
        return [ot, at, lt];
      case 2:
        return [lt, at, ft];
      case 3:
        return [lt, ot, at];
      case 4:
        return [ft, lt, at];
      case 5:
        return [at, lt, ot];
    }
  }, h.hsv.hsl = function(j) {
    const tt = j[0], rt = j[1] / 100, at = j[2] / 100, it = Math.max(at, 0.01);
    let st, lt;
    lt = (2 - rt) * at;
    const ot = (2 - rt) * it;
    return st = rt * it, st /= ot <= 1 ? ot : 2 - ot, st = st || 0, lt /= 2, [tt, 100 * st, 100 * lt];
  }, h.hwb.rgb = function(j) {
    const tt = j[0] / 360;
    let rt = j[1] / 100, at = j[2] / 100;
    const it = rt + at;
    let st;
    it > 1 && (rt /= it, at /= it);
    const lt = Math.floor(6 * tt), ot = 1 - at;
    st = 6 * tt - lt, 1 & lt && (st = 1 - st);
    const ft = rt + st * (ot - rt);
    let ht, pt, dt;
    switch (lt) {
      default:
      case 6:
      case 0:
        ht = ot, pt = ft, dt = rt;
        break;
      case 1:
        ht = ft, pt = ot, dt = rt;
        break;
      case 2:
        ht = rt, pt = ot, dt = ft;
        break;
      case 3:
        ht = rt, pt = ft, dt = ot;
        break;
      case 4:
        ht = ft, pt = rt, dt = ot;
        break;
      case 5:
        ht = ot, pt = rt, dt = ft;
    }
    return [255 * ht, 255 * pt, 255 * dt];
  }, h.cmyk.rgb = function(j) {
    const tt = j[0] / 100, rt = j[1] / 100, at = j[2] / 100, it = j[3] / 100;
    return [255 * (1 - Math.min(1, tt * (1 - it) + it)), 255 * (1 - Math.min(1, rt * (1 - it) + it)), 255 * (1 - Math.min(1, at * (1 - it) + it))];
  }, h.xyz.rgb = function(j) {
    const tt = j[0] / 100, rt = j[1] / 100, at = j[2] / 100;
    let it, st, lt;
    return it = 3.2406 * tt + -1.5372 * rt + -0.4986 * at, st = -0.9689 * tt + 1.8758 * rt + 0.0415 * at, lt = 0.0557 * tt + -0.204 * rt + 1.057 * at, it = it > 31308e-7 ? 1.055 * it ** (1 / 2.4) - 0.055 : 12.92 * it, st = st > 31308e-7 ? 1.055 * st ** (1 / 2.4) - 0.055 : 12.92 * st, lt = lt > 31308e-7 ? 1.055 * lt ** (1 / 2.4) - 0.055 : 12.92 * lt, it = Math.min(Math.max(0, it), 1), st = Math.min(Math.max(0, st), 1), lt = Math.min(Math.max(0, lt), 1), [255 * it, 255 * st, 255 * lt];
  }, h.xyz.lab = function(j) {
    let tt = j[0], rt = j[1], at = j[2];
    return tt /= 95.047, rt /= 100, at /= 108.883, tt = tt > 8856e-6 ? tt ** (1 / 3) : 7.787 * tt + 16 / 116, rt = rt > 8856e-6 ? rt ** (1 / 3) : 7.787 * rt + 16 / 116, at = at > 8856e-6 ? at ** (1 / 3) : 7.787 * at + 16 / 116, [116 * rt - 16, 500 * (tt - rt), 200 * (rt - at)];
  }, h.lab.xyz = function(j) {
    let tt, rt, at;
    rt = (j[0] + 16) / 116, tt = j[1] / 500 + rt, at = rt - j[2] / 200;
    const it = rt ** 3, st = tt ** 3, lt = at ** 3;
    return rt = it > 8856e-6 ? it : (rt - 16 / 116) / 7.787, tt = st > 8856e-6 ? st : (tt - 16 / 116) / 7.787, at = lt > 8856e-6 ? lt : (at - 16 / 116) / 7.787, tt *= 95.047, rt *= 100, at *= 108.883, [tt, rt, at];
  }, h.lab.lch = function(j) {
    const tt = j[0], rt = j[1], at = j[2];
    let it;
    return it = 360 * Math.atan2(at, rt) / 2 / Math.PI, it < 0 && (it += 360), [tt, Math.sqrt(rt * rt + at * at), it];
  }, h.lch.lab = function(j) {
    const tt = j[0], rt = j[1], at = j[2] / 360 * 2 * Math.PI;
    return [tt, rt * Math.cos(at), rt * Math.sin(at)];
  }, h.rgb.ansi16 = function(j, tt = null) {
    const [rt, at, it] = j;
    let st = tt === null ? h.rgb.hsv(j)[2] : tt;
    if (st = Math.round(st / 50), st === 0) return 30;
    let lt = 30 + (Math.round(it / 255) << 2 | Math.round(at / 255) << 1 | Math.round(rt / 255));
    return st === 2 && (lt += 60), lt;
  }, h.hsv.ansi16 = function(j) {
    return h.rgb.ansi16(h.hsv.rgb(j), j[2]);
  }, h.rgb.ansi256 = function(j) {
    const tt = j[0], rt = j[1], at = j[2];
    return tt === rt && rt === at ? tt < 8 ? 16 : tt > 248 ? 231 : Math.round((tt - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(tt / 255 * 5) + 6 * Math.round(rt / 255 * 5) + Math.round(at / 255 * 5);
  }, h.ansi16.rgb = function(j) {
    let tt = j % 10;
    if (tt === 0 || tt === 7) return j > 50 && (tt += 3.5), tt = tt / 10.5 * 255, [tt, tt, tt];
    const rt = 0.5 * (1 + ~~(j > 50));
    return [(1 & tt) * rt * 255, (tt >> 1 & 1) * rt * 255, (tt >> 2 & 1) * rt * 255];
  }, h.ansi256.rgb = function(j) {
    if (j >= 232) {
      const rt = 10 * (j - 232) + 8;
      return [rt, rt, rt];
    }
    let tt;
    return j -= 16, [Math.floor(j / 36) / 5 * 255, Math.floor((tt = j % 36) / 6) / 5 * 255, tt % 6 / 5 * 255];
  }, h.rgb.hex = function(j) {
    const tt = (((255 & Math.round(j[0])) << 16) + ((255 & Math.round(j[1])) << 8) + (255 & Math.round(j[2]))).toString(16).toUpperCase();
    return "000000".substring(tt.length) + tt;
  }, h.hex.rgb = function(j) {
    const tt = j.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!tt) return [0, 0, 0];
    let rt = tt[0];
    tt[0].length === 3 && (rt = rt.split("").map((it) => it + it).join(""));
    const at = parseInt(rt, 16);
    return [at >> 16 & 255, at >> 8 & 255, 255 & at];
  }, h.rgb.hcg = function(j) {
    const tt = j[0] / 255, rt = j[1] / 255, at = j[2] / 255, it = Math.max(Math.max(tt, rt), at), st = Math.min(Math.min(tt, rt), at), lt = it - st;
    let ot, ft;
    return ot = lt < 1 ? st / (1 - lt) : 0, ft = lt <= 0 ? 0 : it === tt ? (rt - at) / lt % 6 : it === rt ? 2 + (at - tt) / lt : 4 + (tt - rt) / lt, ft /= 6, ft %= 1, [360 * ft, 100 * lt, 100 * ot];
  }, h.hsl.hcg = function(j) {
    const tt = j[1] / 100, rt = j[2] / 100, at = rt < 0.5 ? 2 * tt * rt : 2 * tt * (1 - rt);
    let it = 0;
    return at < 1 && (it = (rt - 0.5 * at) / (1 - at)), [j[0], 100 * at, 100 * it];
  }, h.hsv.hcg = function(j) {
    const tt = j[1] / 100, rt = j[2] / 100, at = tt * rt;
    let it = 0;
    return at < 1 && (it = (rt - at) / (1 - at)), [j[0], 100 * at, 100 * it];
  }, h.hcg.rgb = function(j) {
    const tt = j[0] / 360, rt = j[1] / 100, at = j[2] / 100;
    if (rt === 0) return [255 * at, 255 * at, 255 * at];
    const it = [0, 0, 0], st = tt % 1 * 6, lt = st % 1, ot = 1 - lt;
    let ft = 0;
    switch (Math.floor(st)) {
      case 0:
        it[0] = 1, it[1] = lt, it[2] = 0;
        break;
      case 1:
        it[0] = ot, it[1] = 1, it[2] = 0;
        break;
      case 2:
        it[0] = 0, it[1] = 1, it[2] = lt;
        break;
      case 3:
        it[0] = 0, it[1] = ot, it[2] = 1;
        break;
      case 4:
        it[0] = lt, it[1] = 0, it[2] = 1;
        break;
      default:
        it[0] = 1, it[1] = 0, it[2] = ot;
    }
    return ft = (1 - rt) * at, [255 * (rt * it[0] + ft), 255 * (rt * it[1] + ft), 255 * (rt * it[2] + ft)];
  }, h.hcg.hsv = function(j) {
    const tt = j[1] / 100, rt = tt + j[2] / 100 * (1 - tt);
    let at = 0;
    return rt > 0 && (at = tt / rt), [j[0], 100 * at, 100 * rt];
  }, h.hcg.hsl = function(j) {
    const tt = j[1] / 100, rt = j[2] / 100 * (1 - tt) + 0.5 * tt;
    let at = 0;
    return rt > 0 && rt < 0.5 ? at = tt / (2 * rt) : rt >= 0.5 && rt < 1 && (at = tt / (2 * (1 - rt))), [j[0], 100 * at, 100 * rt];
  }, h.hcg.hwb = function(j) {
    const tt = j[1] / 100, rt = tt + j[2] / 100 * (1 - tt);
    return [j[0], 100 * (rt - tt), 100 * (1 - rt)];
  }, h.hwb.hcg = function(j) {
    const tt = j[1] / 100, rt = 1 - j[2] / 100, at = rt - tt;
    let it = 0;
    return at < 1 && (it = (rt - at) / (1 - at)), [j[0], 100 * at, 100 * it];
  }, h.apple.rgb = function(j) {
    return [j[0] / 65535 * 255, j[1] / 65535 * 255, j[2] / 65535 * 255];
  }, h.rgb.apple = function(j) {
    return [j[0] / 255 * 65535, j[1] / 255 * 65535, j[2] / 255 * 65535];
  }, h.gray.rgb = function(j) {
    return [j[0] / 100 * 255, j[0] / 100 * 255, j[0] / 100 * 255];
  }, h.gray.hsl = function(j) {
    return [0, 0, j[0]];
  }, h.gray.hsv = h.gray.hsl, h.gray.hwb = function(j) {
    return [0, 100, j[0]];
  }, h.gray.cmyk = function(j) {
    return [0, 0, 0, j[0]];
  }, h.gray.lab = function(j) {
    return [j[0], 0, 0];
  }, h.gray.hex = function(j) {
    const tt = 255 & Math.round(j[0] / 100 * 255), rt = ((tt << 16) + (tt << 8) + tt).toString(16).toUpperCase();
    return "000000".substring(rt.length) + rt;
  }, h.rgb.gray = function(j) {
    return [(j[0] + j[1] + j[2]) / 3 / 255 * 100];
  }, conversions;
}
function requireRoute() {
  if (hasRequiredRoute) return route;
  hasRequiredRoute = 1;
  const o = requireConversions();
  function s(j) {
    const tt = function() {
      const at = {}, it = Object.keys(o);
      for (let st = it.length, lt = 0; lt < st; lt++) at[it[lt]] = { distance: -1, parent: null };
      return at;
    }(), rt = [j];
    for (tt[j].distance = 0; rt.length; ) {
      const at = rt.pop(), it = Object.keys(o[at]);
      for (let st = it.length, lt = 0; lt < st; lt++) {
        const ot = it[lt], ft = tt[ot];
        ft.distance === -1 && (ft.distance = tt[at].distance + 1, ft.parent = at, rt.unshift(ot));
      }
    }
    return tt;
  }
  function h(j, tt) {
    return function(rt) {
      return tt(j(rt));
    };
  }
  function g(j, tt) {
    const rt = [tt[j].parent, j];
    let at = o[tt[j].parent][j], it = tt[j].parent;
    for (; tt[it].parent; ) rt.unshift(tt[it].parent), at = h(o[tt[it].parent][it], at), it = tt[it].parent;
    return at.conversion = rt, at;
  }
  return route = function(j) {
    const tt = s(j), rt = {}, at = Object.keys(tt);
    for (let it = at.length, st = 0; st < it; st++) {
      const lt = at[st];
      tt[lt].parent !== null && (rt[lt] = g(lt, tt));
    }
    return rt;
  }, route;
}
function requireColorConvert() {
  if (hasRequiredColorConvert) return colorConvert;
  hasRequiredColorConvert = 1;
  const o = requireConversions(), s = requireRoute(), h = {};
  return Object.keys(o).forEach((g) => {
    h[g] = {}, Object.defineProperty(h[g], "channels", { value: o[g].channels }), Object.defineProperty(h[g], "labels", { value: o[g].labels });
    const j = s(g);
    Object.keys(j).forEach((tt) => {
      const rt = j[tt];
      h[g][tt] = function(at) {
        const it = function(...st) {
          const lt = st[0];
          if (lt == null) return lt;
          lt.length > 1 && (st = lt);
          const ot = at(st);
          if (typeof ot == "object") for (let ft = ot.length, ht = 0; ht < ft; ht++) ot[ht] = Math.round(ot[ht]);
          return ot;
        };
        return "conversion" in at && (it.conversion = at.conversion), it;
      }(rt), h[g][tt].raw = function(at) {
        const it = function(...st) {
          const lt = st[0];
          return lt == null ? lt : (lt.length > 1 && (st = lt), at(st));
        };
        return "conversion" in at && (it.conversion = at.conversion), it;
      }(rt);
    });
  }), colorConvert = h;
}
ansiStyles$1.exports, function(o) {
  const s = (st, lt) => (...ot) => `\x1B[${st(...ot) + lt}m`, h = (st, lt) => (...ot) => {
    const ft = st(...ot);
    return `\x1B[${38 + lt};5;${ft}m`;
  }, g = (st, lt) => (...ot) => {
    const ft = st(...ot);
    return `\x1B[${38 + lt};2;${ft[0]};${ft[1]};${ft[2]}m`;
  }, j = (st) => st, tt = (st, lt, ot) => [st, lt, ot], rt = (st, lt, ot) => {
    Object.defineProperty(st, lt, { get: () => {
      const ft = ot();
      return Object.defineProperty(st, lt, { value: ft, enumerable: !0, configurable: !0 }), ft;
    }, enumerable: !0, configurable: !0 });
  };
  let at;
  const it = (st, lt, ot, ft) => {
    at === void 0 && (at = requireColorConvert());
    const ht = ft ? 10 : 0, pt = {};
    for (const [dt, ct] of Object.entries(at)) {
      const mt = dt === "ansi16" ? "ansi" : dt;
      dt === lt ? pt[mt] = st(ot, ht) : typeof ct == "object" && (pt[mt] = st(ct[lt], ht));
    }
    return pt;
  };
  Object.defineProperty(o, "exports", { enumerable: !0, get: function() {
    const st = /* @__PURE__ */ new Map(), lt = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
    lt.color.gray = lt.color.blackBright, lt.bgColor.bgGray = lt.bgColor.bgBlackBright, lt.color.grey = lt.color.blackBright, lt.bgColor.bgGrey = lt.bgColor.bgBlackBright;
    for (const [ot, ft] of Object.entries(lt)) {
      for (const [ht, pt] of Object.entries(ft)) lt[ht] = { open: `\x1B[${pt[0]}m`, close: `\x1B[${pt[1]}m` }, ft[ht] = lt[ht], st.set(pt[0], pt[1]);
      Object.defineProperty(lt, ot, { value: ft, enumerable: !1 });
    }
    return Object.defineProperty(lt, "codes", { value: st, enumerable: !1 }), lt.color.close = "\x1B[39m", lt.bgColor.close = "\x1B[49m", rt(lt.color, "ansi", () => it(s, "ansi16", j, !1)), rt(lt.color, "ansi256", () => it(h, "ansi256", j, !1)), rt(lt.color, "ansi16m", () => it(g, "rgb", tt, !1)), rt(lt.bgColor, "ansi", () => it(s, "ansi16", j, !0)), rt(lt.bgColor, "ansi256", () => it(h, "ansi256", j, !0)), rt(lt.bgColor, "ansi16m", () => it(g, "rgb", tt, !0)), lt;
  } });
}(ansiStyles$1);
var ansiStylesExports = ansiStyles$1.exports, browser$1 = { stdout: !1, stderr: !1 };
const stringReplaceAll$1 = (o, s, h) => {
  let g = o.indexOf(s);
  if (g === -1) return o;
  const j = s.length;
  let tt = 0, rt = "";
  do
    rt += o.substr(tt, g - tt) + s + h, tt = g + j, g = o.indexOf(s, tt);
  while (g !== -1);
  return rt += o.substr(tt), rt;
}, stringEncaseCRLFWithFirstIndex$1 = (o, s, h, g) => {
  let j = 0, tt = "";
  do {
    const rt = o[g - 1] === "\r";
    tt += o.substr(j, (rt ? g - 1 : g) - j) + s + (rt ? `\r
` : `
`) + h, j = g + 1, g = o.indexOf(`
`, j);
  } while (g !== -1);
  return tt += o.substr(j), tt;
};
var util = { stringReplaceAll: stringReplaceAll$1, stringEncaseCRLFWithFirstIndex: stringEncaseCRLFWithFirstIndex$1 }, templates, hasRequiredTemplates;
function requireTemplates() {
  if (hasRequiredTemplates) return templates;
  hasRequiredTemplates = 1;
  const o = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, s = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, h = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, g = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi, j = /* @__PURE__ */ new Map([["n", `
`], ["r", "\r"], ["t", "	"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1B"], ["a", "\x07"]]);
  function tt(st) {
    const lt = st[0] === "u", ot = st[1] === "{";
    return lt && !ot && st.length === 5 || st[0] === "x" && st.length === 3 ? String.fromCharCode(parseInt(st.slice(1), 16)) : lt && ot ? String.fromCodePoint(parseInt(st.slice(2, -1), 16)) : j.get(st) || st;
  }
  function rt(st, lt) {
    const ot = [], ft = lt.trim().split(/\s*,\s*/g);
    let ht;
    for (const pt of ft) {
      const dt = Number(pt);
      if (Number.isNaN(dt)) {
        if (!(ht = pt.match(h))) throw new Error(`Invalid Chalk template style argument: ${pt} (in style '${st}')`);
        ot.push(ht[2].replace(g, (ct, mt, yt) => mt ? tt(mt) : yt));
      } else ot.push(dt);
    }
    return ot;
  }
  function at(st) {
    s.lastIndex = 0;
    const lt = [];
    let ot;
    for (; (ot = s.exec(st)) !== null; ) {
      const ft = ot[1];
      if (ot[2]) {
        const ht = rt(ft, ot[2]);
        lt.push([ft].concat(ht));
      } else lt.push([ft]);
    }
    return lt;
  }
  function it(st, lt) {
    const ot = {};
    for (const ht of lt) for (const pt of ht.styles) ot[pt[0]] = ht.inverse ? null : pt.slice(1);
    let ft = st;
    for (const [ht, pt] of Object.entries(ot)) if (Array.isArray(pt)) {
      if (!(ht in ft)) throw new Error(`Unknown Chalk style: ${ht}`);
      ft = pt.length > 0 ? ft[ht](...pt) : ft[ht];
    }
    return ft;
  }
  return templates = (st, lt) => {
    const ot = [], ft = [];
    let ht = [];
    if (lt.replace(o, (pt, dt, ct, mt, yt, vt) => {
      if (dt) ht.push(tt(dt));
      else if (mt) {
        const _t = ht.join("");
        ht = [], ft.push(ot.length === 0 ? _t : it(st, ot)(_t)), ot.push({ inverse: ct, styles: at(mt) });
      } else if (yt) {
        if (ot.length === 0) throw new Error("Found extraneous } in Chalk template literal");
        ft.push(it(st, ot)(ht.join(""))), ht = [], ot.pop();
      } else ht.push(vt);
    }), ft.push(ht.join("")), ot.length > 0) {
      const pt = `Chalk template literal is missing ${ot.length} closing bracket${ot.length === 1 ? "" : "s"} (\`}\`)`;
      throw new Error(pt);
    }
    return ft.join("");
  }, templates;
}
const ansiStyles = ansiStylesExports, { stdout: stdoutColor, stderr: stderrColor } = browser$1, { stringReplaceAll, stringEncaseCRLFWithFirstIndex } = util, { isArray } = Array, levelMapping = ["ansi", "ansi", "ansi256", "ansi16m"], styles = /* @__PURE__ */ Object.create(null), applyOptions = (o, s = {}) => {
  if (s.level && !(Number.isInteger(s.level) && s.level >= 0 && s.level <= 3)) throw new Error("The `level` option should be an integer from 0 to 3");
  const h = stdoutColor ? stdoutColor.level : 0;
  o.level = s.level === void 0 ? h : s.level;
};
class ChalkClass {
  constructor(s) {
    return chalkFactory(s);
  }
}
const chalkFactory = (o) => {
  const s = {};
  return applyOptions(s, o), s.template = (...h) => chalkTag(s.template, ...h), Object.setPrototypeOf(s, Chalk.prototype), Object.setPrototypeOf(s.template, s), s.template.constructor = () => {
    throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
  }, s.template.Instance = ChalkClass, s.template;
};
function Chalk(o) {
  return chalkFactory(o);
}
for (const [o, s] of Object.entries(ansiStyles)) styles[o] = { get() {
  const h = createBuilder(this, createStyler(s.open, s.close, this._styler), this._isEmpty);
  return Object.defineProperty(this, o, { value: h }), h;
} };
styles.visible = { get() {
  const o = createBuilder(this, this._styler, !0);
  return Object.defineProperty(this, "visible", { value: o }), o;
} };
const usedModels = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
for (const o of usedModels) styles[o] = { get() {
  const { level: s } = this;
  return function(...h) {
    const g = createStyler(ansiStyles.color[levelMapping[s]][o](...h), ansiStyles.color.close, this._styler);
    return createBuilder(this, g, this._isEmpty);
  };
} };
for (const o of usedModels) {
  const s = "bg" + o[0].toUpperCase() + o.slice(1);
  styles[s] = { get() {
    const { level: h } = this;
    return function(...g) {
      const j = createStyler(ansiStyles.bgColor[levelMapping[h]][o](...g), ansiStyles.bgColor.close, this._styler);
      return createBuilder(this, j, this._isEmpty);
    };
  } };
}
const proto = Object.defineProperties(() => {
}, { ...styles, level: { enumerable: !0, get() {
  return this._generator.level;
}, set(o) {
  this._generator.level = o;
} } }), createStyler = (o, s, h) => {
  let g, j;
  return h === void 0 ? (g = o, j = s) : (g = h.openAll + o, j = s + h.closeAll), { open: o, close: s, openAll: g, closeAll: j, parent: h };
}, createBuilder = (o, s, h) => {
  const g = (...j) => isArray(j[0]) && isArray(j[0].raw) ? applyStyle(g, chalkTag(g, ...j)) : applyStyle(g, j.length === 1 ? "" + j[0] : j.join(" "));
  return Object.setPrototypeOf(g, proto), g._generator = o, g._styler = s, g._isEmpty = h, g;
}, applyStyle = (o, s) => {
  if (o.level <= 0 || !s) return o._isEmpty ? "" : s;
  let h = o._styler;
  if (h === void 0) return s;
  const { openAll: g, closeAll: j } = h;
  if (s.indexOf("\x1B") !== -1) for (; h !== void 0; ) s = stringReplaceAll(s, h.close, h.open), h = h.parent;
  const tt = s.indexOf(`
`);
  return tt !== -1 && (s = stringEncaseCRLFWithFirstIndex(s, j, g, tt)), g + s + j;
};
let template;
const chalkTag = (o, ...s) => {
  const [h] = s;
  if (!isArray(h) || !isArray(h.raw)) return s.join(" ");
  const g = s.slice(1), j = [h.raw[0]];
  for (let tt = 1; tt < h.length; tt++) j.push(String(g[tt - 1]).replace(/[{}\\]/g, "\\$&"), String(h.raw[tt]));
  return template === void 0 && (template = requireTemplates()), template(o, j.join(""));
};
Object.defineProperties(Chalk.prototype, styles);
const chalk = Chalk();
chalk.supportsColor = stdoutColor, chalk.stderr = Chalk({ level: stderrColor ? stderrColor.level : 0 }), chalk.stderr.supportsColor = stderrColor;
var source = chalk;
const d = getDefaultExportFromCjs$1(source);
var lodash = { exports: {} }, module, exports$1;
lodash.exports, module = lodash, exports$1 = lodash.exports, (function() {
  var o, s = "Expected a function", h = "__lodash_hash_undefined__", g = "__lodash_placeholder__", j = 32, tt = 128, rt = 256, at = 1 / 0, it = 9007199254740991, st = NaN, lt = 4294967295, ot = [["ary", tt], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", j], ["partialRight", 64], ["rearg", rt]], ft = "[object Arguments]", ht = "[object Array]", pt = "[object Boolean]", dt = "[object Date]", ct = "[object Error]", mt = "[object Function]", yt = "[object GeneratorFunction]", vt = "[object Map]", _t = "[object Number]", Pt = "[object Object]", bt = "[object Promise]", kt = "[object RegExp]", wt = "[object Set]", xt = "[object String]", Tt = "[object Symbol]", It = "[object WeakMap]", qt = "[object ArrayBuffer]", Wt = "[object DataView]", Nt = "[object Float32Array]", Yt = "[object Float64Array]", sr = "[object Int8Array]", ur = "[object Int16Array]", Rt = "[object Int32Array]", Ft = "[object Uint8Array]", At = "[object Uint8ClampedArray]", Zt = "[object Uint16Array]", hr = "[object Uint32Array]", Pr = /\b__p \+= '';/g, dr = /\b(__p \+=) '' \+/g, Er = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Sr = /&(?:amp|lt|gt|quot|#39);/g, Kt = /[&<>"']/g, rr = RegExp(Sr.source), nr = RegExp(Kt.source), Dr = /<%-([\s\S]+?)%>/g, Wr = /<%([\s\S]+?)%>/g, zr = /<%=([\s\S]+?)%>/g, Hr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fr = /^\w*$/, ba = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Dn = /[\\^$.*+?()[\]{}|]/g, yn = RegExp(Dn.source), Xr = /^\s+/, Rn = /\s/, an = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, hn = /\{\n\/\* \[wrapped with (.+)\] \*/, Vn = /,? & /, xn = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, zn = /[()=,{}\[\]\/\s]/, Sn = /\\(\\)?/g, Fn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ro = /\w*$/, no = /^[-+]0x[0-9a-f]+$/i, ao = /^0b[01]+$/i, ho = /^\[object .+?Constructor\]$/, ws = /^0o[0-7]+$/i, Uo = /^(?:0|[1-9]\d*)$/, qo = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ot = /($^)/, jt = /['\n\r\u2028\u2029\\]/g, Bt = "\\ud800-\\udfff", _e = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", ir = "\\u2700-\\u27bf", Cr = "a-z\\xdf-\\xf6\\xf8-\\xff", Lr = "A-Z\\xc0-\\xd6\\xd8-\\xde", Or = "\\ufe0e\\ufe0f", _r = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ar = "['â€™]", kr = "[" + Bt + "]", on = "[" + _r + "]", rn = "[" + _e + "]", Cn = "\\d+", er = "[" + ir + "]", Ir = "[" + Cr + "]", Rr = "[^" + Bt + _r + Cn + ir + Cr + Lr + "]", fn = "\\ud83c[\\udffb-\\udfff]", un = "[^" + Bt + "]", Hn = "(?:\\ud83c[\\udde6-\\uddff]){2}", tn = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ur = "[" + Lr + "]", vn = "\\u200d", cn = "(?:" + Ir + "|" + Rr + ")", jr = "(?:" + Ur + "|" + Rr + ")", qr = "(?:['â€™](?:d|ll|m|re|s|t|ve))?", In = "(?:['â€™](?:D|LL|M|RE|S|T|VE))?", _a = "(?:" + rn + "|" + fn + ")?", En = "[" + Or + "]?", Qr = En + _a + "(?:" + vn + "(?:" + [un, Hn, tn].join("|") + ")" + En + _a + ")*", Ln = "(?:" + [er, Hn, tn].join("|") + ")" + Qr, So = "(?:" + [un + rn + "?", rn, Hn, tn, kr].join("|") + ")", Io = RegExp(Ar, "g"), xa = RegExp(rn, "g"), On = RegExp(fn + "(?=" + fn + ")|" + So + Qr, "g"), cs = RegExp([Ur + "?" + Ir + "+" + qr + "(?=" + [on, Ur, "$"].join("|") + ")", jr + "+" + In + "(?=" + [on, Ur + cn, "$"].join("|") + ")", Ur + "?" + cn + "+" + qr, Ur + "+" + In, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Cn, Ln].join("|"), "g"), Lo = RegExp("[" + vn + Bt + _e + Or + "]"), fo = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Yo = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Ko = -1, lr = {};
  lr[Nt] = lr[Yt] = lr[sr] = lr[ur] = lr[Rt] = lr[Ft] = lr[At] = lr[Zt] = lr[hr] = !0, lr[ft] = lr[ht] = lr[qt] = lr[pt] = lr[Wt] = lr[dt] = lr[ct] = lr[mt] = lr[vt] = lr[_t] = lr[Pt] = lr[kt] = lr[wt] = lr[xt] = lr[It] = !1;
  var mr = {};
  mr[ft] = mr[ht] = mr[qt] = mr[Wt] = mr[pt] = mr[dt] = mr[Nt] = mr[Yt] = mr[sr] = mr[ur] = mr[Rt] = mr[vt] = mr[_t] = mr[Pt] = mr[kt] = mr[wt] = mr[xt] = mr[Tt] = mr[Ft] = mr[At] = mr[Zt] = mr[hr] = !0, mr[ct] = mr[mt] = mr[It] = !1;
  var $a = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, io = parseFloat, Zr = parseInt, po = typeof commonjsGlobal$1 == "object" && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1, Ps = typeof self == "object" && self && self.Object === Object && self, pn = po || Ps || Function("return this")(), Vl = exports$1 && !exports$1.nodeType && exports$1, Oo = Vl && module && !module.nodeType && module, Ku = Oo && Oo.exports === Vl, zl = Ku && po.process, Yn = function() {
    try {
      var $t = Oo && Oo.require && Oo.require("util").types;
      return $t || zl && zl.binding && zl.binding("util");
    } catch {
    }
  }(), Xu = Yn && Yn.isArrayBuffer, Qu = Yn && Yn.isDate, Zu = Yn && Yn.isMap, Ju = Yn && Yn.isRegExp, _c = Yn && Yn.isSet, _h = Yn && Yn.isTypedArray;
  function Gn($t, Gt, Ut) {
    switch (Ut.length) {
      case 0:
        return $t.call(Gt);
      case 1:
        return $t.call(Gt, Ut[0]);
      case 2:
        return $t.call(Gt, Ut[0], Ut[1]);
      case 3:
        return $t.call(Gt, Ut[0], Ut[1], Ut[2]);
    }
    return $t.apply(Gt, Ut);
  }
  function Qm($t, Gt, Ut, tr) {
    for (var xr = -1, Nr = $t == null ? 0 : $t.length; ++xr < Nr; ) {
      var dn = $t[xr];
      Gt(tr, dn, Ut(dn), $t);
    }
    return tr;
  }
  function Kn($t, Gt) {
    for (var Ut = -1, tr = $t == null ? 0 : $t.length; ++Ut < tr && Gt($t[Ut], Ut, $t) !== !1; ) ;
    return $t;
  }
  function Zm($t, Gt) {
    for (var Ut = $t == null ? 0 : $t.length; Ut-- && Gt($t[Ut], Ut, $t) !== !1; ) ;
    return $t;
  }
  function _f($t, Gt) {
    for (var Ut = -1, tr = $t == null ? 0 : $t.length; ++Ut < tr; ) if (!Gt($t[Ut], Ut, $t)) return !1;
    return !0;
  }
  function Co($t, Gt) {
    for (var Ut = -1, tr = $t == null ? 0 : $t.length, xr = 0, Nr = []; ++Ut < tr; ) {
      var dn = $t[Ut];
      Gt(dn, Ut, $t) && (Nr[xr++] = dn);
    }
    return Nr;
  }
  function Ts($t, Gt) {
    return !($t == null || !$t.length) && Xo($t, Gt, 0) > -1;
  }
  function Hl($t, Gt, Ut) {
    for (var tr = -1, xr = $t == null ? 0 : $t.length; ++tr < xr; ) if (Ut(Gt, $t[tr])) return !0;
    return !1;
  }
  function Jr($t, Gt) {
    for (var Ut = -1, tr = $t == null ? 0 : $t.length, xr = Array(tr); ++Ut < tr; ) xr[Ut] = Gt($t[Ut], Ut, $t);
    return xr;
  }
  function ko($t, Gt) {
    for (var Ut = -1, tr = Gt.length, xr = $t.length; ++Ut < tr; ) $t[xr + Ut] = Gt[Ut];
    return $t;
  }
  function Gl($t, Gt, Ut, tr) {
    var xr = -1, Nr = $t == null ? 0 : $t.length;
    for (tr && Nr && (Ut = $t[++xr]); ++xr < Nr; ) Ut = Gt(Ut, $t[xr], xr, $t);
    return Ut;
  }
  function Jm($t, Gt, Ut, tr) {
    var xr = $t == null ? 0 : $t.length;
    for (tr && xr && (Ut = $t[--xr]); xr--; ) Ut = Gt(Ut, $t[xr], xr, $t);
    return Ut;
  }
  function Wl($t, Gt) {
    for (var Ut = -1, tr = $t == null ? 0 : $t.length; ++Ut < tr; ) if (Gt($t[Ut], Ut, $t)) return !0;
    return !1;
  }
  var _g = Ul("length");
  function tp($t, Gt, Ut) {
    var tr;
    return Ut($t, function(xr, Nr, dn) {
      if (Gt(xr, Nr, dn)) return tr = Nr, !1;
    }), tr;
  }
  function Ms($t, Gt, Ut, tr) {
    for (var xr = $t.length, Nr = Ut + (tr ? 1 : -1); tr ? Nr-- : ++Nr < xr; ) if (Gt($t[Nr], Nr, $t)) return Nr;
    return -1;
  }
  function Xo($t, Gt, Ut) {
    return Gt == Gt ? function(tr, xr, Nr) {
      for (var dn = Nr - 1, oo = tr.length; ++dn < oo; ) if (tr[dn] === xr) return dn;
      return -1;
    }($t, Gt, Ut) : Ms($t, ep, Ut);
  }
  function ty($t, Gt, Ut, tr) {
    for (var xr = Ut - 1, Nr = $t.length; ++xr < Nr; ) if (tr($t[xr], Gt)) return xr;
    return -1;
  }
  function ep($t) {
    return $t != $t;
  }
  function rp($t, Gt) {
    var Ut = $t == null ? 0 : $t.length;
    return Ut ? Kl($t, Gt) / Ut : st;
  }
  function Ul($t) {
    return function(Gt) {
      return Gt == null ? o : Gt[$t];
    };
  }
  function Yl($t) {
    return function(Gt) {
      return $t == null ? o : $t[Gt];
    };
  }
  function np($t, Gt, Ut, tr, xr) {
    return xr($t, function(Nr, dn, oo) {
      Ut = tr ? (tr = !1, Nr) : Gt(Ut, Nr, dn, oo);
    }), Ut;
  }
  function Kl($t, Gt) {
    for (var Ut, tr = -1, xr = $t.length; ++tr < xr; ) {
      var Nr = Gt($t[tr]);
      Nr !== o && (Ut = Ut === o ? Nr : Ut + Nr);
    }
    return Ut;
  }
  function Xl($t, Gt) {
    for (var Ut = -1, tr = Array($t); ++Ut < $t; ) tr[Ut] = Gt(Ut);
    return tr;
  }
  function ap($t) {
    return $t && $t.slice(0, lp($t) + 1).replace(Xr, "");
  }
  function Wn($t) {
    return function(Gt) {
      return $t(Gt);
    };
  }
  function Ql($t, Gt) {
    return Jr(Gt, function(Ut) {
      return $t[Ut];
    });
  }
  function hs($t, Gt) {
    return $t.has(Gt);
  }
  function ip($t, Gt) {
    for (var Ut = -1, tr = $t.length; ++Ut < tr && Xo(Gt, $t[Ut], 0) > -1; ) ;
    return Ut;
  }
  function op($t, Gt) {
    for (var Ut = $t.length; Ut-- && Xo(Gt, $t[Ut], 0) > -1; ) ;
    return Ut;
  }
  var ey = Yl({ Ã€: "A", Ã: "A", Ã‚: "A", Ãƒ: "A", Ã„: "A", Ã…: "A", Ã : "a", Ã¡: "a", Ã¢: "a", Ã£: "a", Ã¤: "a", Ã¥: "a", Ã‡: "C", Ã§: "c", Ã: "D", Ã°: "d", Ãˆ: "E", Ã‰: "E", ÃŠ: "E", Ã‹: "E", Ã¨: "e", Ã©: "e", Ãª: "e", Ã«: "e", ÃŒ: "I", Ã: "I", ÃŽ: "I", Ã: "I", Ã¬: "i", Ã­: "i", Ã®: "i", Ã¯: "i", Ã‘: "N", Ã±: "n", Ã’: "O", Ã“: "O", Ã”: "O", Ã•: "O", Ã–: "O", Ã˜: "O", Ã²: "o", Ã³: "o", Ã´: "o", Ãµ: "o", Ã¶: "o", Ã¸: "o", Ã™: "U", Ãš: "U", Ã›: "U", Ãœ: "U", Ã¹: "u", Ãº: "u", Ã»: "u", Ã¼: "u", Ã: "Y", Ã½: "y", Ã¿: "y", Ã†: "Ae", Ã¦: "ae", Ãž: "Th", Ã¾: "th", ÃŸ: "ss", Ä€: "A", Ä‚: "A", Ä„: "A", Ä: "a", Äƒ: "a", Ä…: "a", Ä†: "C", Äˆ: "C", ÄŠ: "C", ÄŒ: "C", Ä‡: "c", Ä‰: "c", Ä‹: "c", Ä: "c", ÄŽ: "D", Ä: "D", Ä: "d", Ä‘: "d", Ä’: "E", Ä”: "E", Ä–: "E", Ä˜: "E", Äš: "E", Ä“: "e", Ä•: "e", Ä—: "e", Ä™: "e", Ä›: "e", Äœ: "G", Äž: "G", Ä : "G", Ä¢: "G", Ä: "g", ÄŸ: "g", Ä¡: "g", Ä£: "g", Ä¤: "H", Ä¦: "H", Ä¥: "h", Ä§: "h", Ä¨: "I", Äª: "I", Ä¬: "I", Ä®: "I", Ä°: "I", Ä©: "i", Ä«: "i", Ä­: "i", Ä¯: "i", Ä±: "i", Ä´: "J", Äµ: "j", Ä¶: "K", Ä·: "k", Ä¸: "k", Ä¹: "L", Ä»: "L", Ä½: "L", Ä¿: "L", Å: "L", Äº: "l", Ä¼: "l", Ä¾: "l", Å€: "l", Å‚: "l", Åƒ: "N", Å…: "N", Å‡: "N", ÅŠ: "N", Å„: "n", Å†: "n", Åˆ: "n", Å‹: "n", ÅŒ: "O", ÅŽ: "O", Å: "O", Å: "o", Å: "o", Å‘: "o", Å”: "R", Å–: "R", Å˜: "R", Å•: "r", Å—: "r", Å™: "r", Åš: "S", Åœ: "S", Åž: "S", Å : "S", Å›: "s", Å: "s", ÅŸ: "s", Å¡: "s", Å¢: "T", Å¤: "T", Å¦: "T", Å£: "t", Å¥: "t", Å§: "t", Å¨: "U", Åª: "U", Å¬: "U", Å®: "U", Å°: "U", Å²: "U", Å©: "u", Å«: "u", Å­: "u", Å¯: "u", Å±: "u", Å³: "u", Å´: "W", Åµ: "w", Å¶: "Y", Å·: "y", Å¸: "Y", Å¹: "Z", Å»: "Z", Å½: "Z", Åº: "z", Å¼: "z", Å¾: "z", Ä²: "IJ", Ä³: "ij", Å’: "Oe", Å“: "oe", Å‰: "'n", Å¿: "s" }), ry = Yl({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });
  function ny($t) {
    return "\\" + $a[$t];
  }
  function Qo($t) {
    return Lo.test($t);
  }
  function Zl($t) {
    var Gt = -1, Ut = Array($t.size);
    return $t.forEach(function(tr, xr) {
      Ut[++Gt] = [xr, tr];
    }), Ut;
  }
  function sp($t, Gt) {
    return function(Ut) {
      return $t(Gt(Ut));
    };
  }
  function wo($t, Gt) {
    for (var Ut = -1, tr = $t.length, xr = 0, Nr = []; ++Ut < tr; ) {
      var dn = $t[Ut];
      dn !== Gt && dn !== g || ($t[Ut] = g, Nr[xr++] = Ut);
    }
    return Nr;
  }
  function As($t) {
    var Gt = -1, Ut = Array($t.size);
    return $t.forEach(function(tr) {
      Ut[++Gt] = tr;
    }), Ut;
  }
  function ay($t) {
    var Gt = -1, Ut = Array($t.size);
    return $t.forEach(function(tr) {
      Ut[++Gt] = [tr, tr];
    }), Ut;
  }
  function Zo($t) {
    return Qo($t) ? function(Gt) {
      for (var Ut = On.lastIndex = 0; On.test(Gt); ) ++Ut;
      return Ut;
    }($t) : _g($t);
  }
  function _i($t) {
    return Qo($t) ? function(Gt) {
      return Gt.match(On) || [];
    }($t) : function(Gt) {
      return Gt.split("");
    }($t);
  }
  function lp($t) {
    for (var Gt = $t.length; Gt-- && Rn.test($t.charAt(Gt)); ) ;
    return Gt;
  }
  var iy = Yl({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }), Jo = function $t(Gt) {
    var Ut, tr = (Gt = Gt == null ? pn : Jo.defaults(pn.Object(), Gt, Jo.pick(pn, Yo))).Array, xr = Gt.Date, Nr = Gt.Error, dn = Gt.Function, oo = Gt.Math, Yr = Gt.Object, Jl = Gt.RegExp, oy = Gt.String, Xn = Gt.TypeError, Ds = tr.prototype, sy = dn.prototype, ts = Yr.prototype, Rs = Gt["__core-js_shared__"], Fs = sy.toString, Gr = ts.hasOwnProperty, ly = 0, up = (Ut = /[^.]+$/.exec(Rs && Rs.keys && Rs.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Ut : "", Is = ts.toString, uy = Fs.call(Yr), cy = pn._, hy = Jl("^" + Fs.call(Gr).replace(Dn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Ls = Ku ? Gt.Buffer : o, Po = Gt.Symbol, Os = Gt.Uint8Array, cp = Ls ? Ls.allocUnsafe : o, $s = sp(Yr.getPrototypeOf, Yr), hp = Yr.create, fp = ts.propertyIsEnumerable, Ns = Ds.splice, pp = Po ? Po.isConcatSpreadable : o, fs = Po ? Po.iterator : o, $o = Po ? Po.toStringTag : o, Bs = function() {
      try {
        var et = zo(Yr, "defineProperty");
        return et({}, "", {}), et;
      } catch {
      }
    }(), fy = Gt.clearTimeout !== pn.clearTimeout && Gt.clearTimeout, py = xr && xr.now !== pn.Date.now && xr.now, dy = Gt.setTimeout !== pn.setTimeout && Gt.setTimeout, js = oo.ceil, Vs = oo.floor, tu = Yr.getOwnPropertySymbols, my = Ls ? Ls.isBuffer : o, dp = Gt.isFinite, gy = Ds.join, yy = sp(Yr.keys, Yr), mn = oo.max, kn = oo.min, vy = xr.now, by = Gt.parseInt, mp = oo.random, Ey = Ds.reverse, eu = zo(Gt, "DataView"), ps = zo(Gt, "Map"), ru = zo(Gt, "Promise"), es = zo(Gt, "Set"), ds = zo(Gt, "WeakMap"), ms = zo(Yr, "create"), zs = ds && new ds(), rs = {}, _y = Ho(eu), xy = Ho(ps), Sy = Ho(ru), Cy = Ho(es), ky = Ho(ds), Hs = Po ? Po.prototype : o, gs = Hs ? Hs.valueOf : o, gp = Hs ? Hs.toString : o;
    function St(et) {
      if (nn(et) && !Tr(et) && !(et instanceof $r)) {
        if (et instanceof Qn) return et;
        if (Gr.call(et, "__wrapped__")) return gm(et);
      }
      return new Qn(et);
    }
    var ns = /* @__PURE__ */ function() {
      function et() {
      }
      return function(nt) {
        if (!en(nt)) return {};
        if (hp) return hp(nt);
        et.prototype = nt;
        var ut = new et();
        return et.prototype = o, ut;
      };
    }();
    function Gs() {
    }
    function Qn(et, nt) {
      this.__wrapped__ = et, this.__actions__ = [], this.__chain__ = !!nt, this.__index__ = 0, this.__values__ = o;
    }
    function $r(et) {
      this.__wrapped__ = et, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = lt, this.__views__ = [];
    }
    function No(et) {
      var nt = -1, ut = et == null ? 0 : et.length;
      for (this.clear(); ++nt < ut; ) {
        var gt = et[nt];
        this.set(gt[0], gt[1]);
      }
    }
    function mo(et) {
      var nt = -1, ut = et == null ? 0 : et.length;
      for (this.clear(); ++nt < ut; ) {
        var gt = et[nt];
        this.set(gt[0], gt[1]);
      }
    }
    function go(et) {
      var nt = -1, ut = et == null ? 0 : et.length;
      for (this.clear(); ++nt < ut; ) {
        var gt = et[nt];
        this.set(gt[0], gt[1]);
      }
    }
    function Bo(et) {
      var nt = -1, ut = et == null ? 0 : et.length;
      for (this.__data__ = new go(); ++nt < ut; ) this.add(et[nt]);
    }
    function to(et) {
      var nt = this.__data__ = new mo(et);
      this.size = nt.size;
    }
    function yp(et, nt) {
      var ut = Tr(et), gt = !ut && Go(et), Et = !ut && !gt && Ro(et), Ct = !ut && !gt && !Et && ls(et), Mt = ut || gt || Et || Ct, Dt = Mt ? Xl(et.length, oy) : [], Lt = Dt.length;
      for (var zt in et) !nt && !Gr.call(et, zt) || Mt && (zt == "length" || Et && (zt == "offset" || zt == "parent") || Ct && (zt == "buffer" || zt == "byteLength" || zt == "byteOffset") || Eo(zt, Lt)) || Dt.push(zt);
      return Dt;
    }
    function vp(et) {
      var nt = et.length;
      return nt ? et[pu(0, nt - 1)] : o;
    }
    function wy(et, nt) {
      return Sl($n(et), jo(nt, 0, et.length));
    }
    function Py(et) {
      return Sl($n(et));
    }
    function nu(et, nt, ut) {
      (ut !== o && !eo(et[nt], ut) || ut === o && !(nt in et)) && yo(et, nt, ut);
    }
    function ys(et, nt, ut) {
      var gt = et[nt];
      Gr.call(et, nt) && eo(gt, ut) && (ut !== o || nt in et) || yo(et, nt, ut);
    }
    function Ws(et, nt) {
      for (var ut = et.length; ut--; ) if (eo(et[ut][0], nt)) return ut;
      return -1;
    }
    function Ty(et, nt, ut, gt) {
      return To(et, function(Et, Ct, Mt) {
        nt(gt, Et, ut(Et), Mt);
      }), gt;
    }
    function bp(et, nt) {
      return et && lo(nt, bn(nt), et);
    }
    function yo(et, nt, ut) {
      nt == "__proto__" && Bs ? Bs(et, nt, { configurable: !0, enumerable: !0, value: ut, writable: !0 }) : et[nt] = ut;
    }
    function au(et, nt) {
      for (var ut = -1, gt = nt.length, Et = tr(gt), Ct = et == null; ++ut < gt; ) Et[ut] = Ct ? o : Nu(et, nt[ut]);
      return Et;
    }
    function jo(et, nt, ut) {
      return et == et && (ut !== o && (et = et <= ut ? et : ut), nt !== o && (et = et >= nt ? et : nt)), et;
    }
    function Zn(et, nt, ut, gt, Et, Ct) {
      var Mt, Dt = 1 & nt, Lt = 2 & nt, zt = 4 & nt;
      if (ut && (Mt = Et ? ut(et, gt, Et, Ct) : ut(et)), Mt !== o) return Mt;
      if (!en(et)) return et;
      var Vt = Tr(et);
      if (Vt) {
        if (Mt = function(Ht) {
          var Qt = Ht.length, yr = new Ht.constructor(Qt);
          return Qt && typeof Ht[0] == "string" && Gr.call(Ht, "index") && (yr.index = Ht.index, yr.input = Ht.input), yr;
        }(et), !Dt) return $n(et, Mt);
      } else {
        var Xt = wn(et), ar = Xt == mt || Xt == yt;
        if (Ro(et)) return Hp(et, Dt);
        if (Xt == Pt || Xt == ft || ar && !Et) {
          if (Mt = Lt || ar ? {} : sm(et), !Dt) return Lt ? function(Ht, Qt) {
            return lo(Ht, im(Ht), Qt);
          }(et, function(Ht, Qt) {
            return Ht && lo(Qt, Bn(Qt), Ht);
          }(Mt, et)) : function(Ht, Qt) {
            return lo(Ht, Pu(Ht), Qt);
          }(et, bp(Mt, et));
        } else {
          if (!mr[Xt]) return Et ? et : {};
          Mt = function(Ht, Qt, yr) {
            var Jt, wr = Ht.constructor;
            switch (Qt) {
              case qt:
                return Eu(Ht);
              case pt:
              case dt:
                return new wr(+Ht);
              case Wt:
                return function(br, Br) {
                  var cr = Br ? Eu(br.buffer) : br.buffer;
                  return new br.constructor(cr, br.byteOffset, br.byteLength);
                }(Ht, yr);
              case Nt:
              case Yt:
              case sr:
              case ur:
              case Rt:
              case Ft:
              case At:
              case Zt:
              case hr:
                return Gp(Ht, yr);
              case vt:
                return new wr();
              case _t:
              case xt:
                return new wr(Ht);
              case kt:
                return function(br) {
                  var Br = new br.constructor(br.source, ro.exec(br));
                  return Br.lastIndex = br.lastIndex, Br;
                }(Ht);
              case wt:
                return new wr();
              case Tt:
                return Jt = Ht, gs ? Yr(gs.call(Jt)) : {};
            }
          }(et, Xt, Dt);
        }
      }
      Ct || (Ct = new to());
      var or = Ct.get(et);
      if (or) return or;
      Ct.set(et, Mt), Im(et) ? et.forEach(function(Ht) {
        Mt.add(Zn(Ht, nt, ut, Ht, et, Ct));
      }) : Rm(et) && et.forEach(function(Ht, Qt) {
        Mt.set(Qt, Zn(Ht, nt, ut, Qt, et, Ct));
      });
      var pr = Vt ? o : (zt ? Lt ? Cu : Su : Lt ? Bn : bn)(et);
      return Kn(pr || et, function(Ht, Qt) {
        pr && (Ht = et[Qt = Ht]), ys(Mt, Qt, Zn(Ht, nt, ut, Qt, et, Ct));
      }), Mt;
    }
    function Ep(et, nt, ut) {
      var gt = ut.length;
      if (et == null) return !gt;
      for (et = Yr(et); gt--; ) {
        var Et = ut[gt], Ct = nt[Et], Mt = et[Et];
        if (Mt === o && !(Et in et) || !Ct(Mt)) return !1;
      }
      return !0;
    }
    function _p(et, nt, ut) {
      if (typeof et != "function") throw new Xn(s);
      return Cs(function() {
        et.apply(o, ut);
      }, nt);
    }
    function vs(et, nt, ut, gt) {
      var Et = -1, Ct = Ts, Mt = !0, Dt = et.length, Lt = [], zt = nt.length;
      if (!Dt) return Lt;
      ut && (nt = Jr(nt, Wn(ut))), gt ? (Ct = Hl, Mt = !1) : nt.length >= 200 && (Ct = hs, Mt = !1, nt = new Bo(nt));
      t: for (; ++Et < Dt; ) {
        var Vt = et[Et], Xt = ut == null ? Vt : ut(Vt);
        if (Vt = gt || Vt !== 0 ? Vt : 0, Mt && Xt == Xt) {
          for (var ar = zt; ar--; ) if (nt[ar] === Xt) continue t;
          Lt.push(Vt);
        } else Ct(nt, Xt, gt) || Lt.push(Vt);
      }
      return Lt;
    }
    St.templateSettings = { escape: Dr, evaluate: Wr, interpolate: zr, variable: "", imports: { _: St } }, St.prototype = Gs.prototype, St.prototype.constructor = St, Qn.prototype = ns(Gs.prototype), Qn.prototype.constructor = Qn, $r.prototype = ns(Gs.prototype), $r.prototype.constructor = $r, No.prototype.clear = function() {
      this.__data__ = ms ? ms(null) : {}, this.size = 0;
    }, No.prototype.delete = function(et) {
      var nt = this.has(et) && delete this.__data__[et];
      return this.size -= nt ? 1 : 0, nt;
    }, No.prototype.get = function(et) {
      var nt = this.__data__;
      if (ms) {
        var ut = nt[et];
        return ut === h ? o : ut;
      }
      return Gr.call(nt, et) ? nt[et] : o;
    }, No.prototype.has = function(et) {
      var nt = this.__data__;
      return ms ? nt[et] !== o : Gr.call(nt, et);
    }, No.prototype.set = function(et, nt) {
      var ut = this.__data__;
      return this.size += this.has(et) ? 0 : 1, ut[et] = ms && nt === o ? h : nt, this;
    }, mo.prototype.clear = function() {
      this.__data__ = [], this.size = 0;
    }, mo.prototype.delete = function(et) {
      var nt = this.__data__, ut = Ws(nt, et);
      return !(ut < 0 || (ut == nt.length - 1 ? nt.pop() : Ns.call(nt, ut, 1), --this.size, 0));
    }, mo.prototype.get = function(et) {
      var nt = this.__data__, ut = Ws(nt, et);
      return ut < 0 ? o : nt[ut][1];
    }, mo.prototype.has = function(et) {
      return Ws(this.__data__, et) > -1;
    }, mo.prototype.set = function(et, nt) {
      var ut = this.__data__, gt = Ws(ut, et);
      return gt < 0 ? (++this.size, ut.push([et, nt])) : ut[gt][1] = nt, this;
    }, go.prototype.clear = function() {
      this.size = 0, this.__data__ = { hash: new No(), map: new (ps || mo)(), string: new No() };
    }, go.prototype.delete = function(et) {
      var nt = xl(this, et).delete(et);
      return this.size -= nt ? 1 : 0, nt;
    }, go.prototype.get = function(et) {
      return xl(this, et).get(et);
    }, go.prototype.has = function(et) {
      return xl(this, et).has(et);
    }, go.prototype.set = function(et, nt) {
      var ut = xl(this, et), gt = ut.size;
      return ut.set(et, nt), this.size += ut.size == gt ? 0 : 1, this;
    }, Bo.prototype.add = Bo.prototype.push = function(et) {
      return this.__data__.set(et, h), this;
    }, Bo.prototype.has = function(et) {
      return this.__data__.has(et);
    }, to.prototype.clear = function() {
      this.__data__ = new mo(), this.size = 0;
    }, to.prototype.delete = function(et) {
      var nt = this.__data__, ut = nt.delete(et);
      return this.size = nt.size, ut;
    }, to.prototype.get = function(et) {
      return this.__data__.get(et);
    }, to.prototype.has = function(et) {
      return this.__data__.has(et);
    }, to.prototype.set = function(et, nt) {
      var ut = this.__data__;
      if (ut instanceof mo) {
        var gt = ut.__data__;
        if (!ps || gt.length < 199) return gt.push([et, nt]), this.size = ++ut.size, this;
        ut = this.__data__ = new go(gt);
      }
      return ut.set(et, nt), this.size = ut.size, this;
    };
    var To = Yp(so), xp = Yp(ou, !0);
    function My(et, nt) {
      var ut = !0;
      return To(et, function(gt, Et, Ct) {
        return ut = !!nt(gt, Et, Ct);
      }), ut;
    }
    function Us(et, nt, ut) {
      for (var gt = -1, Et = et.length; ++gt < Et; ) {
        var Ct = et[gt], Mt = nt(Ct);
        if (Mt != null && (Dt === o ? Mt == Mt && !qn(Mt) : ut(Mt, Dt))) var Dt = Mt, Lt = Ct;
      }
      return Lt;
    }
    function Sp(et, nt) {
      var ut = [];
      return To(et, function(gt, Et, Ct) {
        nt(gt, Et, Ct) && ut.push(gt);
      }), ut;
    }
    function _n(et, nt, ut, gt, Et) {
      var Ct = -1, Mt = et.length;
      for (ut || (ut = Vy), Et || (Et = []); ++Ct < Mt; ) {
        var Dt = et[Ct];
        nt > 0 && ut(Dt) ? nt > 1 ? _n(Dt, nt - 1, ut, gt, Et) : ko(Et, Dt) : gt || (Et[Et.length] = Dt);
      }
      return Et;
    }
    var iu = Kp(), Cp = Kp(!0);
    function so(et, nt) {
      return et && iu(et, nt, bn);
    }
    function ou(et, nt) {
      return et && Cp(et, nt, bn);
    }
    function qs(et, nt) {
      return Co(nt, function(ut) {
        return _o(et[ut]);
      });
    }
    function Vo(et, nt) {
      for (var ut = 0, gt = (nt = Ao(nt, et)).length; et != null && ut < gt; ) et = et[uo(nt[ut++])];
      return ut && ut == gt ? et : o;
    }
    function kp(et, nt, ut) {
      var gt = nt(et);
      return Tr(et) ? gt : ko(gt, ut(et));
    }
    function Tn(et) {
      return et == null ? et === o ? "[object Undefined]" : "[object Null]" : $o && $o in Yr(et) ? function(nt) {
        var ut = Gr.call(nt, $o), gt = nt[$o];
        try {
          nt[$o] = o;
          var Et = !0;
        } catch {
        }
        var Ct = Is.call(nt);
        return Et && (ut ? nt[$o] = gt : delete nt[$o]), Ct;
      }(et) : function(nt) {
        return Is.call(nt);
      }(et);
    }
    function su(et, nt) {
      return et > nt;
    }
    function Ay(et, nt) {
      return et != null && Gr.call(et, nt);
    }
    function Dy(et, nt) {
      return et != null && nt in Yr(et);
    }
    function lu(et, nt, ut) {
      for (var gt = ut ? Hl : Ts, Et = et[0].length, Ct = et.length, Mt = Ct, Dt = tr(Ct), Lt = 1 / 0, zt = []; Mt--; ) {
        var Vt = et[Mt];
        Mt && nt && (Vt = Jr(Vt, Wn(nt))), Lt = kn(Vt.length, Lt), Dt[Mt] = !ut && (nt || Et >= 120 && Vt.length >= 120) ? new Bo(Mt && Vt) : o;
      }
      Vt = et[0];
      var Xt = -1, ar = Dt[0];
      t: for (; ++Xt < Et && zt.length < Lt; ) {
        var or = Vt[Xt], pr = nt ? nt(or) : or;
        if (or = ut || or !== 0 ? or : 0, !(ar ? hs(ar, pr) : gt(zt, pr, ut))) {
          for (Mt = Ct; --Mt; ) {
            var Ht = Dt[Mt];
            if (!(Ht ? hs(Ht, pr) : gt(et[Mt], pr, ut))) continue t;
          }
          ar && ar.push(pr), zt.push(or);
        }
      }
      return zt;
    }
    function bs(et, nt, ut) {
      var gt = (et = hm(et, nt = Ao(nt, et))) == null ? et : et[uo(na(nt))];
      return gt == null ? o : Gn(gt, et, ut);
    }
    function wp(et) {
      return nn(et) && Tn(et) == ft;
    }
    function Es(et, nt, ut, gt, Et) {
      return et === nt || (et == null || nt == null || !nn(et) && !nn(nt) ? et != et && nt != nt : function(Ct, Mt, Dt, Lt, zt, Vt) {
        var Xt = Tr(Ct), ar = Tr(Mt), or = Xt ? ht : wn(Ct), pr = ar ? ht : wn(Mt), Ht = (or = or == ft ? Pt : or) == Pt, Qt = (pr = pr == ft ? Pt : pr) == Pt, yr = or == pr;
        if (yr && Ro(Ct)) {
          if (!Ro(Mt)) return !1;
          Xt = !0, Ht = !1;
        }
        if (yr && !Ht) return Vt || (Vt = new to()), Xt || ls(Ct) ? am(Ct, Mt, Dt, Lt, zt, Vt) : function(cr, vr, gn, ln, An, Kr, Pn) {
          switch (gn) {
            case Wt:
              if (cr.byteLength != vr.byteLength || cr.byteOffset != vr.byteOffset) return !1;
              cr = cr.buffer, vr = vr.buffer;
            case qt:
              return !(cr.byteLength != vr.byteLength || !Kr(new Os(cr), new Os(vr)));
            case pt:
            case dt:
            case _t:
              return eo(+cr, +vr);
            case ct:
              return cr.name == vr.name && cr.message == vr.message;
            case kt:
            case xt:
              return cr == vr + "";
            case vt:
              var co = Zl;
            case wt:
              var Fo = 1 & ln;
              if (co || (co = As), cr.size != vr.size && !Fo) return !1;
              var Fl = Pn.get(cr);
              if (Fl) return Fl == vr;
              ln |= 2, Pn.set(cr, vr);
              var qu = am(co(cr), co(vr), ln, An, Kr, Pn);
              return Pn.delete(cr), qu;
            case Tt:
              if (gs) return gs.call(cr) == gs.call(vr);
          }
          return !1;
        }(Ct, Mt, or, Dt, Lt, zt, Vt);
        if (!(1 & Dt)) {
          var Jt = Ht && Gr.call(Ct, "__wrapped__"), wr = Qt && Gr.call(Mt, "__wrapped__");
          if (Jt || wr) {
            var br = Jt ? Ct.value() : Ct, Br = wr ? Mt.value() : Mt;
            return Vt || (Vt = new to()), zt(br, Br, Dt, Lt, Vt);
          }
        }
        return !!yr && (Vt || (Vt = new to()), function(cr, vr, gn, ln, An, Kr) {
          var Pn = 1 & gn, co = Su(cr), Fo = co.length, Fl = Su(vr), qu = Fl.length;
          if (Fo != qu && !Pn) return !1;
          for (var Il = Fo; Il--; ) {
            var Wo = co[Il];
            if (!(Pn ? Wo in vr : Gr.call(vr, Wo))) return !1;
          }
          var Ym = Kr.get(cr), Km = Kr.get(vr);
          if (Ym && Km) return Ym == vr && Km == cr;
          var Ll = !0;
          Kr.set(cr, vr), Kr.set(vr, cr);
          for (var Yu = Pn; ++Il < Fo; ) {
            var Ol = cr[Wo = co[Il]], $l = vr[Wo];
            if (ln) var Xm = Pn ? ln($l, Ol, Wo, vr, cr, Kr) : ln(Ol, $l, Wo, cr, vr, Kr);
            if (!(Xm === o ? Ol === $l || An(Ol, $l, gn, ln, Kr) : Xm)) {
              Ll = !1;
              break;
            }
            Yu || (Yu = Wo == "constructor");
          }
          if (Ll && !Yu) {
            var Nl = cr.constructor, Bl = vr.constructor;
            Nl == Bl || !("constructor" in cr) || !("constructor" in vr) || typeof Nl == "function" && Nl instanceof Nl && typeof Bl == "function" && Bl instanceof Bl || (Ll = !1);
          }
          return Kr.delete(cr), Kr.delete(vr), Ll;
        }(Ct, Mt, Dt, Lt, zt, Vt));
      }(et, nt, ut, gt, Es, Et));
    }
    function uu(et, nt, ut, gt) {
      var Et = ut.length, Ct = Et, Mt = !gt;
      if (et == null) return !Ct;
      for (et = Yr(et); Et--; ) {
        var Dt = ut[Et];
        if (Mt && Dt[2] ? Dt[1] !== et[Dt[0]] : !(Dt[0] in et)) return !1;
      }
      for (; ++Et < Ct; ) {
        var Lt = (Dt = ut[Et])[0], zt = et[Lt], Vt = Dt[1];
        if (Mt && Dt[2]) {
          if (zt === o && !(Lt in et)) return !1;
        } else {
          var Xt = new to();
          if (gt) var ar = gt(zt, Vt, Lt, et, nt, Xt);
          if (!(ar === o ? Es(Vt, zt, 3, gt, Xt) : ar)) return !1;
        }
      }
      return !0;
    }
    function Pp(et) {
      return !(!en(et) || (nt = et, up && up in nt)) && (_o(et) ? hy : ho).test(Ho(et));
      var nt;
    }
    function Tp(et) {
      return typeof et == "function" ? et : et == null ? jn : typeof et == "object" ? Tr(et) ? Dp(et[0], et[1]) : Ap(et) : qm(et);
    }
    function cu(et) {
      if (!Ss(et)) return yy(et);
      var nt = [];
      for (var ut in Yr(et)) Gr.call(et, ut) && ut != "constructor" && nt.push(ut);
      return nt;
    }
    function Ry(et) {
      if (!en(et)) return function(Et) {
        var Ct = [];
        if (Et != null) for (var Mt in Yr(Et)) Ct.push(Mt);
        return Ct;
      }(et);
      var nt = Ss(et), ut = [];
      for (var gt in et) (gt != "constructor" || !nt && Gr.call(et, gt)) && ut.push(gt);
      return ut;
    }
    function hu(et, nt) {
      return et < nt;
    }
    function Mp(et, nt) {
      var ut = -1, gt = Nn(et) ? tr(et.length) : [];
      return To(et, function(Et, Ct, Mt) {
        gt[++ut] = nt(Et, Ct, Mt);
      }), gt;
    }
    function Ap(et) {
      var nt = wu(et);
      return nt.length == 1 && nt[0][2] ? um(nt[0][0], nt[0][1]) : function(ut) {
        return ut === et || uu(ut, et, nt);
      };
    }
    function Dp(et, nt) {
      return Tu(et) && lm(nt) ? um(uo(et), nt) : function(ut) {
        var gt = Nu(ut, et);
        return gt === o && gt === nt ? Bu(ut, et) : Es(nt, gt, 3);
      };
    }
    function Ys(et, nt, ut, gt, Et) {
      et !== nt && iu(nt, function(Ct, Mt) {
        if (Et || (Et = new to()), en(Ct)) (function(Lt, zt, Vt, Xt, ar, or, pr) {
          var Ht = Au(Lt, Vt), Qt = Au(zt, Vt), yr = pr.get(Qt);
          if (yr) nu(Lt, Vt, yr);
          else {
            var Jt = or ? or(Ht, Qt, Vt + "", Lt, zt, pr) : o, wr = Jt === o;
            if (wr) {
              var br = Tr(Qt), Br = !br && Ro(Qt), cr = !br && !Br && ls(Qt);
              Jt = Qt, br || Br || cr ? Tr(Ht) ? Jt = Ht : sn(Ht) ? Jt = $n(Ht) : Br ? (wr = !1, Jt = Hp(Qt, !0)) : cr ? (wr = !1, Jt = Gp(Qt, !0)) : Jt = [] : ks(Qt) || Go(Qt) ? (Jt = Ht, Go(Ht) ? Jt = $m(Ht) : en(Ht) && !_o(Ht) || (Jt = sm(Qt))) : wr = !1;
            }
            wr && (pr.set(Qt, Jt), ar(Jt, Qt, Xt, or, pr), pr.delete(Qt)), nu(Lt, Vt, Jt);
          }
        })(et, nt, Mt, ut, Ys, gt, Et);
        else {
          var Dt = gt ? gt(Au(et, Mt), Ct, Mt + "", et, nt, Et) : o;
          Dt === o && (Dt = Ct), nu(et, Mt, Dt);
        }
      }, Bn);
    }
    function Rp(et, nt) {
      var ut = et.length;
      if (ut) return Eo(nt += nt < 0 ? ut : 0, ut) ? et[nt] : o;
    }
    function Fp(et, nt, ut) {
      nt = nt.length ? Jr(nt, function(Ct) {
        return Tr(Ct) ? function(Mt) {
          return Vo(Mt, Ct.length === 1 ? Ct[0] : Ct);
        } : Ct;
      }) : [jn];
      var gt = -1;
      nt = Jr(nt, Wn(gr()));
      var Et = Mp(et, function(Ct, Mt, Dt) {
        var Lt = Jr(nt, function(zt) {
          return zt(Ct);
        });
        return { criteria: Lt, index: ++gt, value: Ct };
      });
      return function(Ct, Mt) {
        var Dt = Ct.length;
        for (Ct.sort(Mt); Dt--; ) Ct[Dt] = Ct[Dt].value;
        return Ct;
      }(Et, function(Ct, Mt) {
        return function(Dt, Lt, zt) {
          for (var Vt = -1, Xt = Dt.criteria, ar = Lt.criteria, or = Xt.length, pr = zt.length; ++Vt < or; ) {
            var Ht = Wp(Xt[Vt], ar[Vt]);
            if (Ht) return Vt >= pr ? Ht : Ht * (zt[Vt] == "desc" ? -1 : 1);
          }
          return Dt.index - Lt.index;
        }(Ct, Mt, ut);
      });
    }
    function Ip(et, nt, ut) {
      for (var gt = -1, Et = nt.length, Ct = {}; ++gt < Et; ) {
        var Mt = nt[gt], Dt = Vo(et, Mt);
        ut(Dt, Mt) && _s(Ct, Ao(Mt, et), Dt);
      }
      return Ct;
    }
    function fu(et, nt, ut, gt) {
      var Et = gt ? ty : Xo, Ct = -1, Mt = nt.length, Dt = et;
      for (et === nt && (nt = $n(nt)), ut && (Dt = Jr(et, Wn(ut))); ++Ct < Mt; ) for (var Lt = 0, zt = nt[Ct], Vt = ut ? ut(zt) : zt; (Lt = Et(Dt, Vt, Lt, gt)) > -1; ) Dt !== et && Ns.call(Dt, Lt, 1), Ns.call(et, Lt, 1);
      return et;
    }
    function Lp(et, nt) {
      for (var ut = et ? nt.length : 0, gt = ut - 1; ut--; ) {
        var Et = nt[ut];
        if (ut == gt || Et !== Ct) {
          var Ct = Et;
          Eo(Et) ? Ns.call(et, Et, 1) : gu(et, Et);
        }
      }
      return et;
    }
    function pu(et, nt) {
      return et + Vs(mp() * (nt - et + 1));
    }
    function du(et, nt) {
      var ut = "";
      if (!et || nt < 1 || nt > it) return ut;
      do
        nt % 2 && (ut += et), (nt = Vs(nt / 2)) && (et += et);
      while (nt);
      return ut;
    }
    function Fr(et, nt) {
      return Du(cm(et, nt, jn), et + "");
    }
    function Fy(et) {
      return vp(us(et));
    }
    function Iy(et, nt) {
      var ut = us(et);
      return Sl(ut, jo(nt, 0, ut.length));
    }
    function _s(et, nt, ut, gt) {
      if (!en(et)) return et;
      for (var Et = -1, Ct = (nt = Ao(nt, et)).length, Mt = Ct - 1, Dt = et; Dt != null && ++Et < Ct; ) {
        var Lt = uo(nt[Et]), zt = ut;
        if (Lt === "__proto__" || Lt === "constructor" || Lt === "prototype") return et;
        if (Et != Mt) {
          var Vt = Dt[Lt];
          (zt = gt ? gt(Vt, Lt, Dt) : o) === o && (zt = en(Vt) ? Vt : Eo(nt[Et + 1]) ? [] : {});
        }
        ys(Dt, Lt, zt), Dt = Dt[Lt];
      }
      return et;
    }
    var Op = zs ? function(et, nt) {
      return zs.set(et, nt), et;
    } : jn, Ly = Bs ? function(et, nt) {
      return Bs(et, "toString", { configurable: !0, enumerable: !1, value: Vu(nt), writable: !0 });
    } : jn;
    function Oy(et) {
      return Sl(us(et));
    }
    function Jn(et, nt, ut) {
      var gt = -1, Et = et.length;
      nt < 0 && (nt = -nt > Et ? 0 : Et + nt), (ut = ut > Et ? Et : ut) < 0 && (ut += Et), Et = nt > ut ? 0 : ut - nt >>> 0, nt >>>= 0;
      for (var Ct = tr(Et); ++gt < Et; ) Ct[gt] = et[gt + nt];
      return Ct;
    }
    function $y(et, nt) {
      var ut;
      return To(et, function(gt, Et, Ct) {
        return !(ut = nt(gt, Et, Ct));
      }), !!ut;
    }
    function Ks(et, nt, ut) {
      var gt = 0, Et = et == null ? gt : et.length;
      if (typeof nt == "number" && nt == nt && Et <= 2147483647) {
        for (; gt < Et; ) {
          var Ct = gt + Et >>> 1, Mt = et[Ct];
          Mt !== null && !qn(Mt) && (ut ? Mt <= nt : Mt < nt) ? gt = Ct + 1 : Et = Ct;
        }
        return Et;
      }
      return mu(et, nt, jn, ut);
    }
    function mu(et, nt, ut, gt) {
      var Et = 0, Ct = et == null ? 0 : et.length;
      if (Ct === 0) return 0;
      for (var Mt = (nt = ut(nt)) != nt, Dt = nt === null, Lt = qn(nt), zt = nt === o; Et < Ct; ) {
        var Vt = Vs((Et + Ct) / 2), Xt = ut(et[Vt]), ar = Xt !== o, or = Xt === null, pr = Xt == Xt, Ht = qn(Xt);
        if (Mt) var Qt = gt || pr;
        else Qt = zt ? pr && (gt || ar) : Dt ? pr && ar && (gt || !or) : Lt ? pr && ar && !or && (gt || !Ht) : !or && !Ht && (gt ? Xt <= nt : Xt < nt);
        Qt ? Et = Vt + 1 : Ct = Vt;
      }
      return kn(Ct, 4294967294);
    }
    function $p(et, nt) {
      for (var ut = -1, gt = et.length, Et = 0, Ct = []; ++ut < gt; ) {
        var Mt = et[ut], Dt = nt ? nt(Mt) : Mt;
        if (!ut || !eo(Dt, Lt)) {
          var Lt = Dt;
          Ct[Et++] = Mt === 0 ? 0 : Mt;
        }
      }
      return Ct;
    }
    function Np(et) {
      return typeof et == "number" ? et : qn(et) ? st : +et;
    }
    function Un(et) {
      if (typeof et == "string") return et;
      if (Tr(et)) return Jr(et, Un) + "";
      if (qn(et)) return gp ? gp.call(et) : "";
      var nt = et + "";
      return nt == "0" && 1 / et == -1 / 0 ? "-0" : nt;
    }
    function Mo(et, nt, ut) {
      var gt = -1, Et = Ts, Ct = et.length, Mt = !0, Dt = [], Lt = Dt;
      if (ut) Mt = !1, Et = Hl;
      else if (Ct >= 200) {
        var zt = nt ? null : By(et);
        if (zt) return As(zt);
        Mt = !1, Et = hs, Lt = new Bo();
      } else Lt = nt ? [] : Dt;
      t: for (; ++gt < Ct; ) {
        var Vt = et[gt], Xt = nt ? nt(Vt) : Vt;
        if (Vt = ut || Vt !== 0 ? Vt : 0, Mt && Xt == Xt) {
          for (var ar = Lt.length; ar--; ) if (Lt[ar] === Xt) continue t;
          nt && Lt.push(Xt), Dt.push(Vt);
        } else Et(Lt, Xt, ut) || (Lt !== Dt && Lt.push(Xt), Dt.push(Vt));
      }
      return Dt;
    }
    function gu(et, nt) {
      return (et = hm(et, nt = Ao(nt, et))) == null || delete et[uo(na(nt))];
    }
    function Bp(et, nt, ut, gt) {
      return _s(et, nt, ut(Vo(et, nt)), gt);
    }
    function Xs(et, nt, ut, gt) {
      for (var Et = et.length, Ct = gt ? Et : -1; (gt ? Ct-- : ++Ct < Et) && nt(et[Ct], Ct, et); ) ;
      return ut ? Jn(et, gt ? 0 : Ct, gt ? Ct + 1 : Et) : Jn(et, gt ? Ct + 1 : 0, gt ? Et : Ct);
    }
    function jp(et, nt) {
      var ut = et;
      return ut instanceof $r && (ut = ut.value()), Gl(nt, function(gt, Et) {
        return Et.func.apply(Et.thisArg, ko([gt], Et.args));
      }, ut);
    }
    function yu(et, nt, ut) {
      var gt = et.length;
      if (gt < 2) return gt ? Mo(et[0]) : [];
      for (var Et = -1, Ct = tr(gt); ++Et < gt; ) for (var Mt = et[Et], Dt = -1; ++Dt < gt; ) Dt != Et && (Ct[Et] = vs(Ct[Et] || Mt, et[Dt], nt, ut));
      return Mo(_n(Ct, 1), nt, ut);
    }
    function Vp(et, nt, ut) {
      for (var gt = -1, Et = et.length, Ct = nt.length, Mt = {}; ++gt < Et; ) {
        var Dt = gt < Ct ? nt[gt] : o;
        ut(Mt, et[gt], Dt);
      }
      return Mt;
    }
    function vu(et) {
      return sn(et) ? et : [];
    }
    function bu(et) {
      return typeof et == "function" ? et : jn;
    }
    function Ao(et, nt) {
      return Tr(et) ? et : Tu(et, nt) ? [et] : mm(Vr(et));
    }
    var Ny = Fr;
    function Do(et, nt, ut) {
      var gt = et.length;
      return ut = ut === o ? gt : ut, !nt && ut >= gt ? et : Jn(et, nt, ut);
    }
    var zp = fy || function(et) {
      return pn.clearTimeout(et);
    };
    function Hp(et, nt) {
      if (nt) return et.slice();
      var ut = et.length, gt = cp ? cp(ut) : new et.constructor(ut);
      return et.copy(gt), gt;
    }
    function Eu(et) {
      var nt = new et.constructor(et.byteLength);
      return new Os(nt).set(new Os(et)), nt;
    }
    function Gp(et, nt) {
      var ut = nt ? Eu(et.buffer) : et.buffer;
      return new et.constructor(ut, et.byteOffset, et.length);
    }
    function Wp(et, nt) {
      if (et !== nt) {
        var ut = et !== o, gt = et === null, Et = et == et, Ct = qn(et), Mt = nt !== o, Dt = nt === null, Lt = nt == nt, zt = qn(nt);
        if (!Dt && !zt && !Ct && et > nt || Ct && Mt && Lt && !Dt && !zt || gt && Mt && Lt || !ut && Lt || !Et) return 1;
        if (!gt && !Ct && !zt && et < nt || zt && ut && Et && !gt && !Ct || Dt && ut && Et || !Mt && Et || !Lt) return -1;
      }
      return 0;
    }
    function Up(et, nt, ut, gt) {
      for (var Et = -1, Ct = et.length, Mt = ut.length, Dt = -1, Lt = nt.length, zt = mn(Ct - Mt, 0), Vt = tr(Lt + zt), Xt = !gt; ++Dt < Lt; ) Vt[Dt] = nt[Dt];
      for (; ++Et < Mt; ) (Xt || Et < Ct) && (Vt[ut[Et]] = et[Et]);
      for (; zt--; ) Vt[Dt++] = et[Et++];
      return Vt;
    }
    function qp(et, nt, ut, gt) {
      for (var Et = -1, Ct = et.length, Mt = -1, Dt = ut.length, Lt = -1, zt = nt.length, Vt = mn(Ct - Dt, 0), Xt = tr(Vt + zt), ar = !gt; ++Et < Vt; ) Xt[Et] = et[Et];
      for (var or = Et; ++Lt < zt; ) Xt[or + Lt] = nt[Lt];
      for (; ++Mt < Dt; ) (ar || Et < Ct) && (Xt[or + ut[Mt]] = et[Et++]);
      return Xt;
    }
    function $n(et, nt) {
      var ut = -1, gt = et.length;
      for (nt || (nt = tr(gt)); ++ut < gt; ) nt[ut] = et[ut];
      return nt;
    }
    function lo(et, nt, ut, gt) {
      var Et = !ut;
      ut || (ut = {});
      for (var Ct = -1, Mt = nt.length; ++Ct < Mt; ) {
        var Dt = nt[Ct], Lt = gt ? gt(ut[Dt], et[Dt], Dt, ut, et) : o;
        Lt === o && (Lt = et[Dt]), Et ? yo(ut, Dt, Lt) : ys(ut, Dt, Lt);
      }
      return ut;
    }
    function Qs(et, nt) {
      return function(ut, gt) {
        var Et = Tr(ut) ? Qm : Ty, Ct = nt ? nt() : {};
        return Et(ut, et, gr(gt, 2), Ct);
      };
    }
    function as(et) {
      return Fr(function(nt, ut) {
        var gt = -1, Et = ut.length, Ct = Et > 1 ? ut[Et - 1] : o, Mt = Et > 2 ? ut[2] : o;
        for (Ct = et.length > 3 && typeof Ct == "function" ? (Et--, Ct) : o, Mt && Mn(ut[0], ut[1], Mt) && (Ct = Et < 3 ? o : Ct, Et = 1), nt = Yr(nt); ++gt < Et; ) {
          var Dt = ut[gt];
          Dt && et(nt, Dt, gt, Ct);
        }
        return nt;
      });
    }
    function Yp(et, nt) {
      return function(ut, gt) {
        if (ut == null) return ut;
        if (!Nn(ut)) return et(ut, gt);
        for (var Et = ut.length, Ct = nt ? Et : -1, Mt = Yr(ut); (nt ? Ct-- : ++Ct < Et) && gt(Mt[Ct], Ct, Mt) !== !1; ) ;
        return ut;
      };
    }
    function Kp(et) {
      return function(nt, ut, gt) {
        for (var Et = -1, Ct = Yr(nt), Mt = gt(nt), Dt = Mt.length; Dt--; ) {
          var Lt = Mt[et ? Dt : ++Et];
          if (ut(Ct[Lt], Lt, Ct) === !1) break;
        }
        return nt;
      };
    }
    function Xp(et) {
      return function(nt) {
        var ut = Qo(nt = Vr(nt)) ? _i(nt) : o, gt = ut ? ut[0] : nt.charAt(0), Et = ut ? Do(ut, 1).join("") : nt.slice(1);
        return gt[et]() + Et;
      };
    }
    function os(et) {
      return function(nt) {
        return Gl(Wm(Gm(nt).replace(Io, "")), et, "");
      };
    }
    function xs(et) {
      return function() {
        var nt = arguments;
        switch (nt.length) {
          case 0:
            return new et();
          case 1:
            return new et(nt[0]);
          case 2:
            return new et(nt[0], nt[1]);
          case 3:
            return new et(nt[0], nt[1], nt[2]);
          case 4:
            return new et(nt[0], nt[1], nt[2], nt[3]);
          case 5:
            return new et(nt[0], nt[1], nt[2], nt[3], nt[4]);
          case 6:
            return new et(nt[0], nt[1], nt[2], nt[3], nt[4], nt[5]);
          case 7:
            return new et(nt[0], nt[1], nt[2], nt[3], nt[4], nt[5], nt[6]);
        }
        var ut = ns(et.prototype), gt = et.apply(ut, nt);
        return en(gt) ? gt : ut;
      };
    }
    function Qp(et) {
      return function(nt, ut, gt) {
        var Et = Yr(nt);
        if (!Nn(nt)) {
          var Ct = gr(ut, 3);
          nt = bn(nt), ut = function(Dt) {
            return Ct(Et[Dt], Dt, Et);
          };
        }
        var Mt = et(nt, ut, gt);
        return Mt > -1 ? Et[Ct ? nt[Mt] : Mt] : o;
      };
    }
    function Zp(et) {
      return bo(function(nt) {
        var ut = nt.length, gt = ut, Et = Qn.prototype.thru;
        for (et && nt.reverse(); gt--; ) {
          var Ct = nt[gt];
          if (typeof Ct != "function") throw new Xn(s);
          if (Et && !Mt && _l(Ct) == "wrapper") var Mt = new Qn([], !0);
        }
        for (gt = Mt ? gt : ut; ++gt < ut; ) {
          var Dt = _l(Ct = nt[gt]), Lt = Dt == "wrapper" ? ku(Ct) : o;
          Mt = Lt && Mu(Lt[0]) && Lt[1] == 424 && !Lt[4].length && Lt[9] == 1 ? Mt[_l(Lt[0])].apply(Mt, Lt[3]) : Ct.length == 1 && Mu(Ct) ? Mt[Dt]() : Mt.thru(Ct);
        }
        return function() {
          var zt = arguments, Vt = zt[0];
          if (Mt && zt.length == 1 && Tr(Vt)) return Mt.plant(Vt).value();
          for (var Xt = 0, ar = ut ? nt[Xt].apply(this, zt) : Vt; ++Xt < ut; ) ar = nt[Xt].call(this, ar);
          return ar;
        };
      });
    }
    function Zs(et, nt, ut, gt, Et, Ct, Mt, Dt, Lt, zt) {
      var Vt = nt & tt, Xt = 1 & nt, ar = 2 & nt, or = 24 & nt, pr = 512 & nt, Ht = ar ? o : xs(et);
      return function Qt() {
        for (var yr = arguments.length, Jt = tr(yr), wr = yr; wr--; ) Jt[wr] = arguments[wr];
        if (or) var br = ss(Qt), Br = function(ln, An) {
          for (var Kr = ln.length, Pn = 0; Kr--; ) ln[Kr] === An && ++Pn;
          return Pn;
        }(Jt, br);
        if (gt && (Jt = Up(Jt, gt, Et, or)), Ct && (Jt = qp(Jt, Ct, Mt, or)), yr -= Br, or && yr < zt) {
          var cr = wo(Jt, br);
          return tm(et, nt, Zs, Qt.placeholder, ut, Jt, cr, Dt, Lt, zt - yr);
        }
        var vr = Xt ? ut : this, gn = ar ? vr[et] : et;
        return yr = Jt.length, Dt ? Jt = function(ln, An) {
          for (var Kr = ln.length, Pn = kn(An.length, Kr), co = $n(ln); Pn--; ) {
            var Fo = An[Pn];
            ln[Pn] = Eo(Fo, Kr) ? co[Fo] : o;
          }
          return ln;
        }(Jt, Dt) : pr && yr > 1 && Jt.reverse(), Vt && Lt < yr && (Jt.length = Lt), this && this !== pn && this instanceof Qt && (gn = Ht || xs(gn)), gn.apply(vr, Jt);
      };
    }
    function Jp(et, nt) {
      return function(ut, gt) {
        return function(Et, Ct, Mt, Dt) {
          return so(Et, function(Lt, zt, Vt) {
            Ct(Dt, Mt(Lt), zt, Vt);
          }), Dt;
        }(ut, et, nt(gt), {});
      };
    }
    function Js(et, nt) {
      return function(ut, gt) {
        var Et;
        if (ut === o && gt === o) return nt;
        if (ut !== o && (Et = ut), gt !== o) {
          if (Et === o) return gt;
          typeof ut == "string" || typeof gt == "string" ? (ut = Un(ut), gt = Un(gt)) : (ut = Np(ut), gt = Np(gt)), Et = et(ut, gt);
        }
        return Et;
      };
    }
    function _u(et) {
      return bo(function(nt) {
        return nt = Jr(nt, Wn(gr())), Fr(function(ut) {
          var gt = this;
          return et(nt, function(Et) {
            return Gn(Et, gt, ut);
          });
        });
      });
    }
    function yl(et, nt) {
      var ut = (nt = nt === o ? " " : Un(nt)).length;
      if (ut < 2) return ut ? du(nt, et) : nt;
      var gt = du(nt, js(et / Zo(nt)));
      return Qo(nt) ? Do(_i(gt), 0, et).join("") : gt.slice(0, et);
    }
    function _d(et) {
      return function(nt, ut, gt) {
        return gt && typeof gt != "number" && Mn(nt, ut, gt) && (ut = gt = o), nt = xo(nt), ut === o ? (ut = nt, nt = 0) : ut = xo(ut), function(Et, Ct, Mt, Dt) {
          for (var Lt = -1, zt = mn(js((Ct - Et) / (Mt || 1)), 0), Vt = tr(zt); zt--; ) Vt[Dt ? zt : ++Lt] = Et, Et += Mt;
          return Vt;
        }(nt, ut, gt = gt === o ? nt < ut ? 1 : -1 : xo(gt), et);
      };
    }
    function El(et) {
      return function(nt, ut) {
        return typeof nt == "string" && typeof ut == "string" || (nt = ga(nt), ut = ga(ut)), et(nt, ut);
      };
    }
    function tm(et, nt, ut, gt, Et, Ct, Mt, Dt, Lt, zt) {
      var Vt = 8 & nt;
      nt |= Vt ? j : 64, 4 & (nt &= ~(Vt ? 64 : j)) || (nt &= -4);
      var Xt = [et, nt, Et, Vt ? Ct : o, Vt ? Mt : o, Vt ? o : Ct, Vt ? o : Mt, Dt, Lt, zt], ar = ut.apply(o, Xt);
      return Mu(et) && fm(ar, Xt), ar.placeholder = gt, pm(ar, et, nt);
    }
    function xu(et) {
      var nt = oo[et];
      return function(ut, gt) {
        if (ut = ga(ut), (gt = gt == null ? 0 : kn(Mr(gt), 292)) && dp(ut)) {
          var Et = (Vr(ut) + "e").split("e");
          return +((Et = (Vr(nt(Et[0] + "e" + (+Et[1] + gt))) + "e").split("e"))[0] + "e" + (+Et[1] - gt));
        }
        return nt(ut);
      };
    }
    var By = es && 1 / As(new es([, -0]))[1] == at ? function(et) {
      return new es(et);
    } : Gu;
    function em(et) {
      return function(nt) {
        var ut = wn(nt);
        return ut == vt ? Zl(nt) : ut == wt ? ay(nt) : function(gt, Et) {
          return Jr(Et, function(Ct) {
            return [Ct, gt[Ct]];
          });
        }(nt, et(nt));
      };
    }
    function vo(et, nt, ut, gt, Et, Ct, Mt, Dt) {
      var Lt = 2 & nt;
      if (!Lt && typeof et != "function") throw new Xn(s);
      var zt = gt ? gt.length : 0;
      if (zt || (nt &= -97, gt = Et = o), Mt = Mt === o ? Mt : mn(Mr(Mt), 0), Dt = Dt === o ? Dt : Mr(Dt), zt -= Et ? Et.length : 0, 64 & nt) {
        var Vt = gt, Xt = Et;
        gt = Et = o;
      }
      var ar = Lt ? o : ku(et), or = [et, nt, ut, gt, Et, Vt, Xt, Ct, Mt, Dt];
      if (ar && function(Ht, Qt) {
        var yr = Ht[1], Jt = Qt[1], wr = yr | Jt, br = wr < 131, Br = Jt == tt && yr == 8 || Jt == tt && yr == rt && Ht[7].length <= Qt[8] || Jt == 384 && Qt[7].length <= Qt[8] && yr == 8;
        if (!br && !Br) return Ht;
        1 & Jt && (Ht[2] = Qt[2], wr |= 1 & yr ? 0 : 4);
        var cr = Qt[3];
        if (cr) {
          var vr = Ht[3];
          Ht[3] = vr ? Up(vr, cr, Qt[4]) : cr, Ht[4] = vr ? wo(Ht[3], g) : Qt[4];
        }
        (cr = Qt[5]) && (vr = Ht[5], Ht[5] = vr ? qp(vr, cr, Qt[6]) : cr, Ht[6] = vr ? wo(Ht[5], g) : Qt[6]), (cr = Qt[7]) && (Ht[7] = cr), Jt & tt && (Ht[8] = Ht[8] == null ? Qt[8] : kn(Ht[8], Qt[8])), Ht[9] == null && (Ht[9] = Qt[9]), Ht[0] = Qt[0], Ht[1] = wr;
      }(or, ar), et = or[0], nt = or[1], ut = or[2], gt = or[3], Et = or[4], !(Dt = or[9] = or[9] === o ? Lt ? 0 : et.length : mn(or[9] - zt, 0)) && 24 & nt && (nt &= -25), nt && nt != 1) pr = nt == 8 || nt == 16 ? function(Ht, Qt, yr) {
        var Jt = xs(Ht);
        return function wr() {
          for (var br = arguments.length, Br = tr(br), cr = br, vr = ss(wr); cr--; ) Br[cr] = arguments[cr];
          var gn = br < 3 && Br[0] !== vr && Br[br - 1] !== vr ? [] : wo(Br, vr);
          return (br -= gn.length) < yr ? tm(Ht, Qt, Zs, wr.placeholder, o, Br, gn, o, o, yr - br) : Gn(this && this !== pn && this instanceof wr ? Jt : Ht, this, Br);
        };
      }(et, nt, Dt) : nt != j && nt != 33 || Et.length ? Zs.apply(o, or) : function(Ht, Qt, yr, Jt) {
        var wr = 1 & Qt, br = xs(Ht);
        return function Br() {
          for (var cr = -1, vr = arguments.length, gn = -1, ln = Jt.length, An = tr(ln + vr), Kr = this && this !== pn && this instanceof Br ? br : Ht; ++gn < ln; ) An[gn] = Jt[gn];
          for (; vr--; ) An[gn++] = arguments[++cr];
          return Gn(Kr, wr ? yr : this, An);
        };
      }(et, nt, ut, gt);
      else var pr = function(Ht, Qt, yr) {
        var Jt = 1 & Qt, wr = xs(Ht);
        return function br() {
          return (this && this !== pn && this instanceof br ? wr : Ht).apply(Jt ? yr : this, arguments);
        };
      }(et, nt, ut);
      return pm((ar ? Op : fm)(pr, or), et, nt);
    }
    function rm(et, nt, ut, gt) {
      return et === o || eo(et, ts[ut]) && !Gr.call(gt, ut) ? nt : et;
    }
    function nm(et, nt, ut, gt, Et, Ct) {
      return en(et) && en(nt) && (Ct.set(nt, et), Ys(et, nt, o, nm, Ct), Ct.delete(nt)), et;
    }
    function jy(et) {
      return ks(et) ? o : et;
    }
    function am(et, nt, ut, gt, Et, Ct) {
      var Mt = 1 & ut, Dt = et.length, Lt = nt.length;
      if (Dt != Lt && !(Mt && Lt > Dt)) return !1;
      var zt = Ct.get(et), Vt = Ct.get(nt);
      if (zt && Vt) return zt == nt && Vt == et;
      var Xt = -1, ar = !0, or = 2 & ut ? new Bo() : o;
      for (Ct.set(et, nt), Ct.set(nt, et); ++Xt < Dt; ) {
        var pr = et[Xt], Ht = nt[Xt];
        if (gt) var Qt = Mt ? gt(Ht, pr, Xt, nt, et, Ct) : gt(pr, Ht, Xt, et, nt, Ct);
        if (Qt !== o) {
          if (Qt) continue;
          ar = !1;
          break;
        }
        if (or) {
          if (!Wl(nt, function(yr, Jt) {
            if (!hs(or, Jt) && (pr === yr || Et(pr, yr, ut, gt, Ct))) return or.push(Jt);
          })) {
            ar = !1;
            break;
          }
        } else if (pr !== Ht && !Et(pr, Ht, ut, gt, Ct)) {
          ar = !1;
          break;
        }
      }
      return Ct.delete(et), Ct.delete(nt), ar;
    }
    function bo(et) {
      return Du(cm(et, o, bm), et + "");
    }
    function Su(et) {
      return kp(et, bn, Pu);
    }
    function Cu(et) {
      return kp(et, Bn, im);
    }
    var ku = zs ? function(et) {
      return zs.get(et);
    } : Gu;
    function _l(et) {
      for (var nt = et.name + "", ut = rs[nt], gt = Gr.call(rs, nt) ? ut.length : 0; gt--; ) {
        var Et = ut[gt], Ct = Et.func;
        if (Ct == null || Ct == et) return Et.name;
      }
      return nt;
    }
    function ss(et) {
      return (Gr.call(St, "placeholder") ? St : et).placeholder;
    }
    function gr() {
      var et = St.iteratee || zu;
      return et = et === zu ? Tp : et, arguments.length ? et(arguments[0], arguments[1]) : et;
    }
    function xl(et, nt) {
      var ut, gt, Et = et.__data__;
      return ((gt = typeof (ut = nt)) == "string" || gt == "number" || gt == "symbol" || gt == "boolean" ? ut !== "__proto__" : ut === null) ? Et[typeof nt == "string" ? "string" : "hash"] : Et.map;
    }
    function wu(et) {
      for (var nt = bn(et), ut = nt.length; ut--; ) {
        var gt = nt[ut], Et = et[gt];
        nt[ut] = [gt, Et, lm(Et)];
      }
      return nt;
    }
    function zo(et, nt) {
      var ut = function(gt, Et) {
        return gt == null ? o : gt[Et];
      }(et, nt);
      return Pp(ut) ? ut : o;
    }
    var Pu = tu ? function(et) {
      return et == null ? [] : (et = Yr(et), Co(tu(et), function(nt) {
        return fp.call(et, nt);
      }));
    } : Wu, im = tu ? function(et) {
      for (var nt = []; et; ) ko(nt, Pu(et)), et = $s(et);
      return nt;
    } : Wu, wn = Tn;
    function om(et, nt, ut) {
      for (var gt = -1, Et = (nt = Ao(nt, et)).length, Ct = !1; ++gt < Et; ) {
        var Mt = uo(nt[gt]);
        if (!(Ct = et != null && ut(et, Mt))) break;
        et = et[Mt];
      }
      return Ct || ++gt != Et ? Ct : !!(Et = et == null ? 0 : et.length) && Al(Et) && Eo(Mt, Et) && (Tr(et) || Go(et));
    }
    function sm(et) {
      return typeof et.constructor != "function" || Ss(et) ? {} : ns($s(et));
    }
    function Vy(et) {
      return Tr(et) || Go(et) || !!(pp && et && et[pp]);
    }
    function Eo(et, nt) {
      var ut = typeof et;
      return !!(nt = nt ?? it) && (ut == "number" || ut != "symbol" && Uo.test(et)) && et > -1 && et % 1 == 0 && et < nt;
    }
    function Mn(et, nt, ut) {
      if (!en(ut)) return !1;
      var gt = typeof nt;
      return !!(gt == "number" ? Nn(ut) && Eo(nt, ut.length) : gt == "string" && nt in ut) && eo(ut[nt], et);
    }
    function Tu(et, nt) {
      if (Tr(et)) return !1;
      var ut = typeof et;
      return !(ut != "number" && ut != "symbol" && ut != "boolean" && et != null && !qn(et)) || fr.test(et) || !Hr.test(et) || nt != null && et in Yr(nt);
    }
    function Mu(et) {
      var nt = _l(et), ut = St[nt];
      if (typeof ut != "function" || !(nt in $r.prototype)) return !1;
      if (et === ut) return !0;
      var gt = ku(ut);
      return !!gt && et === gt[0];
    }
    (eu && wn(new eu(new ArrayBuffer(1))) != Wt || ps && wn(new ps()) != vt || ru && wn(ru.resolve()) != bt || es && wn(new es()) != wt || ds && wn(new ds()) != It) && (wn = function(et) {
      var nt = Tn(et), ut = nt == Pt ? et.constructor : o, gt = ut ? Ho(ut) : "";
      if (gt) switch (gt) {
        case _y:
          return Wt;
        case xy:
          return vt;
        case Sy:
          return bt;
        case Cy:
          return wt;
        case ky:
          return It;
      }
      return nt;
    });
    var zy = Rs ? _o : Uu;
    function Ss(et) {
      var nt = et && et.constructor;
      return et === (typeof nt == "function" && nt.prototype || ts);
    }
    function lm(et) {
      return et == et && !en(et);
    }
    function um(et, nt) {
      return function(ut) {
        return ut != null && ut[et] === nt && (nt !== o || et in Yr(ut));
      };
    }
    function cm(et, nt, ut) {
      return nt = mn(nt === o ? et.length - 1 : nt, 0), function() {
        for (var gt = arguments, Et = -1, Ct = mn(gt.length - nt, 0), Mt = tr(Ct); ++Et < Ct; ) Mt[Et] = gt[nt + Et];
        Et = -1;
        for (var Dt = tr(nt + 1); ++Et < nt; ) Dt[Et] = gt[Et];
        return Dt[nt] = ut(Mt), Gn(et, this, Dt);
      };
    }
    function hm(et, nt) {
      return nt.length < 2 ? et : Vo(et, Jn(nt, 0, -1));
    }
    function Au(et, nt) {
      if ((nt !== "constructor" || typeof et[nt] != "function") && nt != "__proto__") return et[nt];
    }
    var fm = dm(Op), Cs = dy || function(et, nt) {
      return pn.setTimeout(et, nt);
    }, Du = dm(Ly);
    function pm(et, nt, ut) {
      var gt = nt + "";
      return Du(et, function(Et, Ct) {
        var Mt = Ct.length;
        if (!Mt) return Et;
        var Dt = Mt - 1;
        return Ct[Dt] = (Mt > 1 ? "& " : "") + Ct[Dt], Ct = Ct.join(Mt > 2 ? ", " : " "), Et.replace(an, `{
/* [wrapped with ` + Ct + `] */
`);
      }(gt, function(Et, Ct) {
        return Kn(ot, function(Mt) {
          var Dt = "_." + Mt[0];
          Ct & Mt[1] && !Ts(Et, Dt) && Et.push(Dt);
        }), Et.sort();
      }(function(Et) {
        var Ct = Et.match(hn);
        return Ct ? Ct[1].split(Vn) : [];
      }(gt), ut)));
    }
    function dm(et) {
      var nt = 0, ut = 0;
      return function() {
        var gt = vy(), Et = 16 - (gt - ut);
        if (ut = gt, Et > 0) {
          if (++nt >= 800) return arguments[0];
        } else nt = 0;
        return et.apply(o, arguments);
      };
    }
    function Sl(et, nt) {
      var ut = -1, gt = et.length, Et = gt - 1;
      for (nt = nt === o ? gt : nt; ++ut < nt; ) {
        var Ct = pu(ut, Et), Mt = et[Ct];
        et[Ct] = et[ut], et[ut] = Mt;
      }
      return et.length = nt, et;
    }
    var mm = function(et) {
      var nt = Tl(et, function(gt) {
        return ut.size === 500 && ut.clear(), gt;
      }), ut = nt.cache;
      return nt;
    }(function(et) {
      var nt = [];
      return et.charCodeAt(0) === 46 && nt.push(""), et.replace(ba, function(ut, gt, Et, Ct) {
        nt.push(Et ? Ct.replace(Sn, "$1") : gt || ut);
      }), nt;
    });
    function uo(et) {
      if (typeof et == "string" || qn(et)) return et;
      var nt = et + "";
      return nt == "0" && 1 / et == -1 / 0 ? "-0" : nt;
    }
    function Ho(et) {
      if (et != null) {
        try {
          return Fs.call(et);
        } catch {
        }
        try {
          return et + "";
        } catch {
        }
      }
      return "";
    }
    function gm(et) {
      if (et instanceof $r) return et.clone();
      var nt = new Qn(et.__wrapped__, et.__chain__);
      return nt.__actions__ = $n(et.__actions__), nt.__index__ = et.__index__, nt.__values__ = et.__values__, nt;
    }
    var Hy = Fr(function(et, nt) {
      return sn(et) ? vs(et, _n(nt, 1, sn, !0)) : [];
    }), Gy = Fr(function(et, nt) {
      var ut = na(nt);
      return sn(ut) && (ut = o), sn(et) ? vs(et, _n(nt, 1, sn, !0), gr(ut, 2)) : [];
    }), Wy = Fr(function(et, nt) {
      var ut = na(nt);
      return sn(ut) && (ut = o), sn(et) ? vs(et, _n(nt, 1, sn, !0), o, ut) : [];
    });
    function ym(et, nt, ut) {
      var gt = et == null ? 0 : et.length;
      if (!gt) return -1;
      var Et = ut == null ? 0 : Mr(ut);
      return Et < 0 && (Et = mn(gt + Et, 0)), Ms(et, gr(nt, 3), Et);
    }
    function vm(et, nt, ut) {
      var gt = et == null ? 0 : et.length;
      if (!gt) return -1;
      var Et = gt - 1;
      return ut !== o && (Et = Mr(ut), Et = ut < 0 ? mn(gt + Et, 0) : kn(Et, gt - 1)), Ms(et, gr(nt, 3), Et, !0);
    }
    function bm(et) {
      return et != null && et.length ? _n(et, 1) : [];
    }
    function Em(et) {
      return et && et.length ? et[0] : o;
    }
    var Uy = Fr(function(et) {
      var nt = Jr(et, vu);
      return nt.length && nt[0] === et[0] ? lu(nt) : [];
    }), qy = Fr(function(et) {
      var nt = na(et), ut = Jr(et, vu);
      return nt === na(ut) ? nt = o : ut.pop(), ut.length && ut[0] === et[0] ? lu(ut, gr(nt, 2)) : [];
    }), Yy = Fr(function(et) {
      var nt = na(et), ut = Jr(et, vu);
      return (nt = typeof nt == "function" ? nt : o) && ut.pop(), ut.length && ut[0] === et[0] ? lu(ut, o, nt) : [];
    });
    function na(et) {
      var nt = et == null ? 0 : et.length;
      return nt ? et[nt - 1] : o;
    }
    var Ky = Fr(_m);
    function _m(et, nt) {
      return et && et.length && nt && nt.length ? fu(et, nt) : et;
    }
    var Xy = bo(function(et, nt) {
      var ut = et == null ? 0 : et.length, gt = au(et, nt);
      return Lp(et, Jr(nt, function(Et) {
        return Eo(Et, ut) ? +Et : Et;
      }).sort(Wp)), gt;
    });
    function Ru(et) {
      return et == null ? et : Ey.call(et);
    }
    var Qy = Fr(function(et) {
      return Mo(_n(et, 1, sn, !0));
    }), Zy = Fr(function(et) {
      var nt = na(et);
      return sn(nt) && (nt = o), Mo(_n(et, 1, sn, !0), gr(nt, 2));
    }), Jy = Fr(function(et) {
      var nt = na(et);
      return nt = typeof nt == "function" ? nt : o, Mo(_n(et, 1, sn, !0), o, nt);
    });
    function Fu(et) {
      if (!et || !et.length) return [];
      var nt = 0;
      return et = Co(et, function(ut) {
        if (sn(ut)) return nt = mn(ut.length, nt), !0;
      }), Xl(nt, function(ut) {
        return Jr(et, Ul(ut));
      });
    }
    function xm(et, nt) {
      if (!et || !et.length) return [];
      var ut = Fu(et);
      return nt == null ? ut : Jr(ut, function(gt) {
        return Gn(nt, o, gt);
      });
    }
    var t0 = Fr(function(et, nt) {
      return sn(et) ? vs(et, nt) : [];
    }), e0 = Fr(function(et) {
      return yu(Co(et, sn));
    }), r0 = Fr(function(et) {
      var nt = na(et);
      return sn(nt) && (nt = o), yu(Co(et, sn), gr(nt, 2));
    }), n0 = Fr(function(et) {
      var nt = na(et);
      return nt = typeof nt == "function" ? nt : o, yu(Co(et, sn), o, nt);
    }), a0 = Fr(Fu), i0 = Fr(function(et) {
      var nt = et.length, ut = nt > 1 ? et[nt - 1] : o;
      return ut = typeof ut == "function" ? (et.pop(), ut) : o, xm(et, ut);
    });
    function Sm(et) {
      var nt = St(et);
      return nt.__chain__ = !0, nt;
    }
    function Cl(et, nt) {
      return nt(et);
    }
    var o0 = bo(function(et) {
      var nt = et.length, ut = nt ? et[0] : 0, gt = this.__wrapped__, Et = function(Ct) {
        return au(Ct, et);
      };
      return !(nt > 1 || this.__actions__.length) && gt instanceof $r && Eo(ut) ? ((gt = gt.slice(ut, +ut + (nt ? 1 : 0))).__actions__.push({ func: Cl, args: [Et], thisArg: o }), new Qn(gt, this.__chain__).thru(function(Ct) {
        return nt && !Ct.length && Ct.push(o), Ct;
      })) : this.thru(Et);
    }), s0 = Qs(function(et, nt, ut) {
      Gr.call(et, ut) ? ++et[ut] : yo(et, ut, 1);
    }), l0 = Qp(ym), u0 = Qp(vm);
    function Cm(et, nt) {
      return (Tr(et) ? Kn : To)(et, gr(nt, 3));
    }
    function km(et, nt) {
      return (Tr(et) ? Zm : xp)(et, gr(nt, 3));
    }
    var c0 = Qs(function(et, nt, ut) {
      Gr.call(et, ut) ? et[ut].push(nt) : yo(et, ut, [nt]);
    }), h0 = Fr(function(et, nt, ut) {
      var gt = -1, Et = typeof nt == "function", Ct = Nn(et) ? tr(et.length) : [];
      return To(et, function(Mt) {
        Ct[++gt] = Et ? Gn(nt, Mt, ut) : bs(Mt, nt, ut);
      }), Ct;
    }), f0 = Qs(function(et, nt, ut) {
      yo(et, ut, nt);
    });
    function wl(et, nt) {
      return (Tr(et) ? Jr : Mp)(et, gr(nt, 3));
    }
    var p0 = Qs(function(et, nt, ut) {
      et[ut ? 0 : 1].push(nt);
    }, function() {
      return [[], []];
    }), d0 = Fr(function(et, nt) {
      if (et == null) return [];
      var ut = nt.length;
      return ut > 1 && Mn(et, nt[0], nt[1]) ? nt = [] : ut > 2 && Mn(nt[0], nt[1], nt[2]) && (nt = [nt[0]]), Fp(et, _n(nt, 1), []);
    }), Pl = py || function() {
      return pn.Date.now();
    };
    function wm(et, nt, ut) {
      return nt = ut ? o : nt, nt = et && nt == null ? et.length : nt, vo(et, tt, o, o, o, o, nt);
    }
    function Pm(et, nt) {
      var ut;
      if (typeof nt != "function") throw new Xn(s);
      return et = Mr(et), function() {
        return --et > 0 && (ut = nt.apply(this, arguments)), et <= 1 && (nt = o), ut;
      };
    }
    var Iu = Fr(function(et, nt, ut) {
      var gt = 1;
      if (ut.length) {
        var Et = wo(ut, ss(Iu));
        gt |= j;
      }
      return vo(et, gt, nt, ut, Et);
    }), Tm = Fr(function(et, nt, ut) {
      var gt = 3;
      if (ut.length) {
        var Et = wo(ut, ss(Tm));
        gt |= j;
      }
      return vo(nt, gt, et, ut, Et);
    });
    function Mm(et, nt, ut) {
      var gt, Et, Ct, Mt, Dt, Lt, zt = 0, Vt = !1, Xt = !1, ar = !0;
      if (typeof et != "function") throw new Xn(s);
      function or(Jt) {
        var wr = gt, br = Et;
        return gt = Et = o, zt = Jt, Mt = et.apply(br, wr);
      }
      function pr(Jt) {
        var wr = Jt - Lt;
        return Lt === o || wr >= nt || wr < 0 || Xt && Jt - zt >= Ct;
      }
      function Ht() {
        var Jt = Pl();
        if (pr(Jt)) return Qt(Jt);
        Dt = Cs(Ht, function(wr) {
          var br = nt - (wr - Lt);
          return Xt ? kn(br, Ct - (wr - zt)) : br;
        }(Jt));
      }
      function Qt(Jt) {
        return Dt = o, ar && gt ? or(Jt) : (gt = Et = o, Mt);
      }
      function yr() {
        var Jt = Pl(), wr = pr(Jt);
        if (gt = arguments, Et = this, Lt = Jt, wr) {
          if (Dt === o) return function(br) {
            return zt = br, Dt = Cs(Ht, nt), Vt ? or(br) : Mt;
          }(Lt);
          if (Xt) return zp(Dt), Dt = Cs(Ht, nt), or(Lt);
        }
        return Dt === o && (Dt = Cs(Ht, nt)), Mt;
      }
      return nt = ga(nt) || 0, en(ut) && (Vt = !!ut.leading, Ct = (Xt = "maxWait" in ut) ? mn(ga(ut.maxWait) || 0, nt) : Ct, ar = "trailing" in ut ? !!ut.trailing : ar), yr.cancel = function() {
        Dt !== o && zp(Dt), zt = 0, gt = Lt = Et = Dt = o;
      }, yr.flush = function() {
        return Dt === o ? Mt : Qt(Pl());
      }, yr;
    }
    var m0 = Fr(function(et, nt) {
      return _p(et, 1, nt);
    }), g0 = Fr(function(et, nt, ut) {
      return _p(et, ga(nt) || 0, ut);
    });
    function Tl(et, nt) {
      if (typeof et != "function" || nt != null && typeof nt != "function") throw new Xn(s);
      var ut = function() {
        var gt = arguments, Et = nt ? nt.apply(this, gt) : gt[0], Ct = ut.cache;
        if (Ct.has(Et)) return Ct.get(Et);
        var Mt = et.apply(this, gt);
        return ut.cache = Ct.set(Et, Mt) || Ct, Mt;
      };
      return ut.cache = new (Tl.Cache || go)(), ut;
    }
    function Ml(et) {
      if (typeof et != "function") throw new Xn(s);
      return function() {
        var nt = arguments;
        switch (nt.length) {
          case 0:
            return !et.call(this);
          case 1:
            return !et.call(this, nt[0]);
          case 2:
            return !et.call(this, nt[0], nt[1]);
          case 3:
            return !et.call(this, nt[0], nt[1], nt[2]);
        }
        return !et.apply(this, nt);
      };
    }
    Tl.Cache = go;
    var y0 = Ny(function(et, nt) {
      var ut = (nt = nt.length == 1 && Tr(nt[0]) ? Jr(nt[0], Wn(gr())) : Jr(_n(nt, 1), Wn(gr()))).length;
      return Fr(function(gt) {
        for (var Et = -1, Ct = kn(gt.length, ut); ++Et < Ct; ) gt[Et] = nt[Et].call(this, gt[Et]);
        return Gn(et, this, gt);
      });
    }), Lu = Fr(function(et, nt) {
      var ut = wo(nt, ss(Lu));
      return vo(et, j, o, nt, ut);
    }), Am = Fr(function(et, nt) {
      var ut = wo(nt, ss(Am));
      return vo(et, 64, o, nt, ut);
    }), v0 = bo(function(et, nt) {
      return vo(et, rt, o, o, o, nt);
    });
    function eo(et, nt) {
      return et === nt || et != et && nt != nt;
    }
    var b0 = El(su), E0 = El(function(et, nt) {
      return et >= nt;
    }), Go = wp(/* @__PURE__ */ function() {
      return arguments;
    }()) ? wp : function(et) {
      return nn(et) && Gr.call(et, "callee") && !fp.call(et, "callee");
    }, Tr = tr.isArray, _0 = Xu ? Wn(Xu) : function(et) {
      return nn(et) && Tn(et) == qt;
    };
    function Nn(et) {
      return et != null && Al(et.length) && !_o(et);
    }
    function sn(et) {
      return nn(et) && Nn(et);
    }
    var Ro = my || Uu, x0 = Qu ? Wn(Qu) : function(et) {
      return nn(et) && Tn(et) == dt;
    };
    function Ou(et) {
      if (!nn(et)) return !1;
      var nt = Tn(et);
      return nt == ct || nt == "[object DOMException]" || typeof et.message == "string" && typeof et.name == "string" && !ks(et);
    }
    function _o(et) {
      if (!en(et)) return !1;
      var nt = Tn(et);
      return nt == mt || nt == yt || nt == "[object AsyncFunction]" || nt == "[object Proxy]";
    }
    function Dm(et) {
      return typeof et == "number" && et == Mr(et);
    }
    function Al(et) {
      return typeof et == "number" && et > -1 && et % 1 == 0 && et <= it;
    }
    function en(et) {
      var nt = typeof et;
      return et != null && (nt == "object" || nt == "function");
    }
    function nn(et) {
      return et != null && typeof et == "object";
    }
    var Rm = Zu ? Wn(Zu) : function(et) {
      return nn(et) && wn(et) == vt;
    };
    function Fm(et) {
      return typeof et == "number" || nn(et) && Tn(et) == _t;
    }
    function ks(et) {
      if (!nn(et) || Tn(et) != Pt) return !1;
      var nt = $s(et);
      if (nt === null) return !0;
      var ut = Gr.call(nt, "constructor") && nt.constructor;
      return typeof ut == "function" && ut instanceof ut && Fs.call(ut) == uy;
    }
    var $u = Ju ? Wn(Ju) : function(et) {
      return nn(et) && Tn(et) == kt;
    }, Im = _c ? Wn(_c) : function(et) {
      return nn(et) && wn(et) == wt;
    };
    function Dl(et) {
      return typeof et == "string" || !Tr(et) && nn(et) && Tn(et) == xt;
    }
    function qn(et) {
      return typeof et == "symbol" || nn(et) && Tn(et) == Tt;
    }
    var ls = _h ? Wn(_h) : function(et) {
      return nn(et) && Al(et.length) && !!lr[Tn(et)];
    }, S0 = El(hu), C0 = El(function(et, nt) {
      return et <= nt;
    });
    function Lm(et) {
      if (!et) return [];
      if (Nn(et)) return Dl(et) ? _i(et) : $n(et);
      if (fs && et[fs]) return function(ut) {
        for (var gt, Et = []; !(gt = ut.next()).done; ) Et.push(gt.value);
        return Et;
      }(et[fs]());
      var nt = wn(et);
      return (nt == vt ? Zl : nt == wt ? As : us)(et);
    }
    function xo(et) {
      return et ? (et = ga(et)) === at || et === -1 / 0 ? 17976931348623157e292 * (et < 0 ? -1 : 1) : et == et ? et : 0 : et === 0 ? et : 0;
    }
    function Mr(et) {
      var nt = xo(et), ut = nt % 1;
      return nt == nt ? ut ? nt - ut : nt : 0;
    }
    function Om(et) {
      return et ? jo(Mr(et), 0, lt) : 0;
    }
    function ga(et) {
      if (typeof et == "number") return et;
      if (qn(et)) return st;
      if (en(et)) {
        var nt = typeof et.valueOf == "function" ? et.valueOf() : et;
        et = en(nt) ? nt + "" : nt;
      }
      if (typeof et != "string") return et === 0 ? et : +et;
      et = ap(et);
      var ut = ao.test(et);
      return ut || ws.test(et) ? Zr(et.slice(2), ut ? 2 : 8) : no.test(et) ? st : +et;
    }
    function $m(et) {
      return lo(et, Bn(et));
    }
    function Vr(et) {
      return et == null ? "" : Un(et);
    }
    var k0 = as(function(et, nt) {
      if (Ss(nt) || Nn(nt)) lo(nt, bn(nt), et);
      else for (var ut in nt) Gr.call(nt, ut) && ys(et, ut, nt[ut]);
    }), Nm = as(function(et, nt) {
      lo(nt, Bn(nt), et);
    }), Rl = as(function(et, nt, ut, gt) {
      lo(nt, Bn(nt), et, gt);
    }), w0 = as(function(et, nt, ut, gt) {
      lo(nt, bn(nt), et, gt);
    }), P0 = bo(au), T0 = Fr(function(et, nt) {
      et = Yr(et);
      var ut = -1, gt = nt.length, Et = gt > 2 ? nt[2] : o;
      for (Et && Mn(nt[0], nt[1], Et) && (gt = 1); ++ut < gt; ) for (var Ct = nt[ut], Mt = Bn(Ct), Dt = -1, Lt = Mt.length; ++Dt < Lt; ) {
        var zt = Mt[Dt], Vt = et[zt];
        (Vt === o || eo(Vt, ts[zt]) && !Gr.call(et, zt)) && (et[zt] = Ct[zt]);
      }
      return et;
    }), M0 = Fr(function(et) {
      return et.push(o, nm), Gn(Bm, o, et);
    });
    function Nu(et, nt, ut) {
      var gt = et == null ? o : Vo(et, nt);
      return gt === o ? ut : gt;
    }
    function Bu(et, nt) {
      return et != null && om(et, nt, Dy);
    }
    var A0 = Jp(function(et, nt, ut) {
      nt != null && typeof nt.toString != "function" && (nt = Is.call(nt)), et[nt] = ut;
    }, Vu(jn)), D0 = Jp(function(et, nt, ut) {
      nt != null && typeof nt.toString != "function" && (nt = Is.call(nt)), Gr.call(et, nt) ? et[nt].push(ut) : et[nt] = [ut];
    }, gr), R0 = Fr(bs);
    function bn(et) {
      return Nn(et) ? yp(et) : cu(et);
    }
    function Bn(et) {
      return Nn(et) ? yp(et, !0) : Ry(et);
    }
    var F0 = as(function(et, nt, ut) {
      Ys(et, nt, ut);
    }), Bm = as(function(et, nt, ut, gt) {
      Ys(et, nt, ut, gt);
    }), I0 = bo(function(et, nt) {
      var ut = {};
      if (et == null) return ut;
      var gt = !1;
      nt = Jr(nt, function(Ct) {
        return Ct = Ao(Ct, et), gt || (gt = Ct.length > 1), Ct;
      }), lo(et, Cu(et), ut), gt && (ut = Zn(ut, 7, jy));
      for (var Et = nt.length; Et--; ) gu(ut, nt[Et]);
      return ut;
    }), L0 = bo(function(et, nt) {
      return et == null ? {} : function(ut, gt) {
        return Ip(ut, gt, function(Et, Ct) {
          return Bu(ut, Ct);
        });
      }(et, nt);
    });
    function jm(et, nt) {
      if (et == null) return {};
      var ut = Jr(Cu(et), function(gt) {
        return [gt];
      });
      return nt = gr(nt), Ip(et, ut, function(gt, Et) {
        return nt(gt, Et[0]);
      });
    }
    var Vm = em(bn), zm = em(Bn);
    function us(et) {
      return et == null ? [] : Ql(et, bn(et));
    }
    var O0 = os(function(et, nt, ut) {
      return nt = nt.toLowerCase(), et + (ut ? Hm(nt) : nt);
    });
    function Hm(et) {
      return ju(Vr(et).toLowerCase());
    }
    function Gm(et) {
      return (et = Vr(et)) && et.replace(qo, ey).replace(xa, "");
    }
    var $0 = os(function(et, nt, ut) {
      return et + (ut ? "-" : "") + nt.toLowerCase();
    }), N0 = os(function(et, nt, ut) {
      return et + (ut ? " " : "") + nt.toLowerCase();
    }), B0 = Xp("toLowerCase"), j0 = os(function(et, nt, ut) {
      return et + (ut ? "_" : "") + nt.toLowerCase();
    }), V0 = os(function(et, nt, ut) {
      return et + (ut ? " " : "") + ju(nt);
    }), z0 = os(function(et, nt, ut) {
      return et + (ut ? " " : "") + nt.toUpperCase();
    }), ju = Xp("toUpperCase");
    function Wm(et, nt, ut) {
      return et = Vr(et), (nt = ut ? o : nt) === o ? function(gt) {
        return fo.test(gt);
      }(et) ? function(gt) {
        return gt.match(cs) || [];
      }(et) : function(gt) {
        return gt.match(xn) || [];
      }(et) : et.match(nt) || [];
    }
    var Um = Fr(function(et, nt) {
      try {
        return Gn(et, o, nt);
      } catch (ut) {
        return Ou(ut) ? ut : new Nr(ut);
      }
    }), H0 = bo(function(et, nt) {
      return Kn(nt, function(ut) {
        ut = uo(ut), yo(et, ut, Iu(et[ut], et));
      }), et;
    });
    function Vu(et) {
      return function() {
        return et;
      };
    }
    var G0 = Zp(), W0 = Zp(!0);
    function jn(et) {
      return et;
    }
    function zu(et) {
      return Tp(typeof et == "function" ? et : Zn(et, 1));
    }
    var U0 = Fr(function(et, nt) {
      return function(ut) {
        return bs(ut, et, nt);
      };
    }), q0 = Fr(function(et, nt) {
      return function(ut) {
        return bs(et, ut, nt);
      };
    });
    function Hu(et, nt, ut) {
      var gt = bn(nt), Et = qs(nt, gt);
      ut != null || en(nt) && (Et.length || !gt.length) || (ut = nt, nt = et, et = this, Et = qs(nt, bn(nt)));
      var Ct = !(en(ut) && "chain" in ut && !ut.chain), Mt = _o(et);
      return Kn(Et, function(Dt) {
        var Lt = nt[Dt];
        et[Dt] = Lt, Mt && (et.prototype[Dt] = function() {
          var zt = this.__chain__;
          if (Ct || zt) {
            var Vt = et(this.__wrapped__);
            return (Vt.__actions__ = $n(this.__actions__)).push({ func: Lt, args: arguments, thisArg: et }), Vt.__chain__ = zt, Vt;
          }
          return Lt.apply(et, ko([this.value()], arguments));
        });
      }), et;
    }
    function Gu() {
    }
    var Y0 = _u(Jr), K0 = _u(_f), X0 = _u(Wl);
    function qm(et) {
      return Tu(et) ? Ul(uo(et)) : /* @__PURE__ */ function(nt) {
        return function(ut) {
          return Vo(ut, nt);
        };
      }(et);
    }
    var Q0 = _d(), Z0 = _d(!0);
    function Wu() {
      return [];
    }
    function Uu() {
      return !1;
    }
    var J0 = Js(function(et, nt) {
      return et + nt;
    }, 0), tv = xu("ceil"), ev = Js(function(et, nt) {
      return et / nt;
    }, 1), rv = xu("floor"), nv = Js(function(et, nt) {
      return et * nt;
    }, 1), av = xu("round"), iv = Js(function(et, nt) {
      return et - nt;
    }, 0);
    return St.after = function(et, nt) {
      if (typeof nt != "function") throw new Xn(s);
      return et = Mr(et), function() {
        if (--et < 1) return nt.apply(this, arguments);
      };
    }, St.ary = wm, St.assign = k0, St.assignIn = Nm, St.assignInWith = Rl, St.assignWith = w0, St.at = P0, St.before = Pm, St.bind = Iu, St.bindAll = H0, St.bindKey = Tm, St.castArray = function() {
      if (!arguments.length) return [];
      var et = arguments[0];
      return Tr(et) ? et : [et];
    }, St.chain = Sm, St.chunk = function(et, nt, ut) {
      nt = (ut ? Mn(et, nt, ut) : nt === o) ? 1 : mn(Mr(nt), 0);
      var gt = et == null ? 0 : et.length;
      if (!gt || nt < 1) return [];
      for (var Et = 0, Ct = 0, Mt = tr(js(gt / nt)); Et < gt; ) Mt[Ct++] = Jn(et, Et, Et += nt);
      return Mt;
    }, St.compact = function(et) {
      for (var nt = -1, ut = et == null ? 0 : et.length, gt = 0, Et = []; ++nt < ut; ) {
        var Ct = et[nt];
        Ct && (Et[gt++] = Ct);
      }
      return Et;
    }, St.concat = function() {
      var et = arguments.length;
      if (!et) return [];
      for (var nt = tr(et - 1), ut = arguments[0], gt = et; gt--; ) nt[gt - 1] = arguments[gt];
      return ko(Tr(ut) ? $n(ut) : [ut], _n(nt, 1));
    }, St.cond = function(et) {
      var nt = et == null ? 0 : et.length, ut = gr();
      return et = nt ? Jr(et, function(gt) {
        if (typeof gt[1] != "function") throw new Xn(s);
        return [ut(gt[0]), gt[1]];
      }) : [], Fr(function(gt) {
        for (var Et = -1; ++Et < nt; ) {
          var Ct = et[Et];
          if (Gn(Ct[0], this, gt)) return Gn(Ct[1], this, gt);
        }
      });
    }, St.conforms = function(et) {
      return function(nt) {
        var ut = bn(nt);
        return function(gt) {
          return Ep(gt, nt, ut);
        };
      }(Zn(et, 1));
    }, St.constant = Vu, St.countBy = s0, St.create = function(et, nt) {
      var ut = ns(et);
      return nt == null ? ut : bp(ut, nt);
    }, St.curry = function et(nt, ut, gt) {
      var Et = vo(nt, 8, o, o, o, o, o, ut = gt ? o : ut);
      return Et.placeholder = et.placeholder, Et;
    }, St.curryRight = function et(nt, ut, gt) {
      var Et = vo(nt, 16, o, o, o, o, o, ut = gt ? o : ut);
      return Et.placeholder = et.placeholder, Et;
    }, St.debounce = Mm, St.defaults = T0, St.defaultsDeep = M0, St.defer = m0, St.delay = g0, St.difference = Hy, St.differenceBy = Gy, St.differenceWith = Wy, St.drop = function(et, nt, ut) {
      var gt = et == null ? 0 : et.length;
      return gt ? Jn(et, (nt = ut || nt === o ? 1 : Mr(nt)) < 0 ? 0 : nt, gt) : [];
    }, St.dropRight = function(et, nt, ut) {
      var gt = et == null ? 0 : et.length;
      return gt ? Jn(et, 0, (nt = gt - (nt = ut || nt === o ? 1 : Mr(nt))) < 0 ? 0 : nt) : [];
    }, St.dropRightWhile = function(et, nt) {
      return et && et.length ? Xs(et, gr(nt, 3), !0, !0) : [];
    }, St.dropWhile = function(et, nt) {
      return et && et.length ? Xs(et, gr(nt, 3), !0) : [];
    }, St.fill = function(et, nt, ut, gt) {
      var Et = et == null ? 0 : et.length;
      return Et ? (ut && typeof ut != "number" && Mn(et, nt, ut) && (ut = 0, gt = Et), function(Ct, Mt, Dt, Lt) {
        var zt = Ct.length;
        for ((Dt = Mr(Dt)) < 0 && (Dt = -Dt > zt ? 0 : zt + Dt), (Lt = Lt === o || Lt > zt ? zt : Mr(Lt)) < 0 && (Lt += zt), Lt = Dt > Lt ? 0 : Om(Lt); Dt < Lt; ) Ct[Dt++] = Mt;
        return Ct;
      }(et, nt, ut, gt)) : [];
    }, St.filter = function(et, nt) {
      return (Tr(et) ? Co : Sp)(et, gr(nt, 3));
    }, St.flatMap = function(et, nt) {
      return _n(wl(et, nt), 1);
    }, St.flatMapDeep = function(et, nt) {
      return _n(wl(et, nt), at);
    }, St.flatMapDepth = function(et, nt, ut) {
      return ut = ut === o ? 1 : Mr(ut), _n(wl(et, nt), ut);
    }, St.flatten = bm, St.flattenDeep = function(et) {
      return et != null && et.length ? _n(et, at) : [];
    }, St.flattenDepth = function(et, nt) {
      return et != null && et.length ? _n(et, nt = nt === o ? 1 : Mr(nt)) : [];
    }, St.flip = function(et) {
      return vo(et, 512);
    }, St.flow = G0, St.flowRight = W0, St.fromPairs = function(et) {
      for (var nt = -1, ut = et == null ? 0 : et.length, gt = {}; ++nt < ut; ) {
        var Et = et[nt];
        gt[Et[0]] = Et[1];
      }
      return gt;
    }, St.functions = function(et) {
      return et == null ? [] : qs(et, bn(et));
    }, St.functionsIn = function(et) {
      return et == null ? [] : qs(et, Bn(et));
    }, St.groupBy = c0, St.initial = function(et) {
      return et != null && et.length ? Jn(et, 0, -1) : [];
    }, St.intersection = Uy, St.intersectionBy = qy, St.intersectionWith = Yy, St.invert = A0, St.invertBy = D0, St.invokeMap = h0, St.iteratee = zu, St.keyBy = f0, St.keys = bn, St.keysIn = Bn, St.map = wl, St.mapKeys = function(et, nt) {
      var ut = {};
      return nt = gr(nt, 3), so(et, function(gt, Et, Ct) {
        yo(ut, nt(gt, Et, Ct), gt);
      }), ut;
    }, St.mapValues = function(et, nt) {
      var ut = {};
      return nt = gr(nt, 3), so(et, function(gt, Et, Ct) {
        yo(ut, Et, nt(gt, Et, Ct));
      }), ut;
    }, St.matches = function(et) {
      return Ap(Zn(et, 1));
    }, St.matchesProperty = function(et, nt) {
      return Dp(et, Zn(nt, 1));
    }, St.memoize = Tl, St.merge = F0, St.mergeWith = Bm, St.method = U0, St.methodOf = q0, St.mixin = Hu, St.negate = Ml, St.nthArg = function(et) {
      return et = Mr(et), Fr(function(nt) {
        return Rp(nt, et);
      });
    }, St.omit = I0, St.omitBy = function(et, nt) {
      return jm(et, Ml(gr(nt)));
    }, St.once = function(et) {
      return Pm(2, et);
    }, St.orderBy = function(et, nt, ut, gt) {
      return et == null ? [] : (Tr(nt) || (nt = nt == null ? [] : [nt]), Tr(ut = gt ? o : ut) || (ut = ut == null ? [] : [ut]), Fp(et, nt, ut));
    }, St.over = Y0, St.overArgs = y0, St.overEvery = K0, St.overSome = X0, St.partial = Lu, St.partialRight = Am, St.partition = p0, St.pick = L0, St.pickBy = jm, St.property = qm, St.propertyOf = function(et) {
      return function(nt) {
        return et == null ? o : Vo(et, nt);
      };
    }, St.pull = Ky, St.pullAll = _m, St.pullAllBy = function(et, nt, ut) {
      return et && et.length && nt && nt.length ? fu(et, nt, gr(ut, 2)) : et;
    }, St.pullAllWith = function(et, nt, ut) {
      return et && et.length && nt && nt.length ? fu(et, nt, o, ut) : et;
    }, St.pullAt = Xy, St.range = Q0, St.rangeRight = Z0, St.rearg = v0, St.reject = function(et, nt) {
      return (Tr(et) ? Co : Sp)(et, Ml(gr(nt, 3)));
    }, St.remove = function(et, nt) {
      var ut = [];
      if (!et || !et.length) return ut;
      var gt = -1, Et = [], Ct = et.length;
      for (nt = gr(nt, 3); ++gt < Ct; ) {
        var Mt = et[gt];
        nt(Mt, gt, et) && (ut.push(Mt), Et.push(gt));
      }
      return Lp(et, Et), ut;
    }, St.rest = function(et, nt) {
      if (typeof et != "function") throw new Xn(s);
      return Fr(et, nt = nt === o ? nt : Mr(nt));
    }, St.reverse = Ru, St.sampleSize = function(et, nt, ut) {
      return nt = (ut ? Mn(et, nt, ut) : nt === o) ? 1 : Mr(nt), (Tr(et) ? wy : Iy)(et, nt);
    }, St.set = function(et, nt, ut) {
      return et == null ? et : _s(et, nt, ut);
    }, St.setWith = function(et, nt, ut, gt) {
      return gt = typeof gt == "function" ? gt : o, et == null ? et : _s(et, nt, ut, gt);
    }, St.shuffle = function(et) {
      return (Tr(et) ? Py : Oy)(et);
    }, St.slice = function(et, nt, ut) {
      var gt = et == null ? 0 : et.length;
      return gt ? (ut && typeof ut != "number" && Mn(et, nt, ut) ? (nt = 0, ut = gt) : (nt = nt == null ? 0 : Mr(nt), ut = ut === o ? gt : Mr(ut)), Jn(et, nt, ut)) : [];
    }, St.sortBy = d0, St.sortedUniq = function(et) {
      return et && et.length ? $p(et) : [];
    }, St.sortedUniqBy = function(et, nt) {
      return et && et.length ? $p(et, gr(nt, 2)) : [];
    }, St.split = function(et, nt, ut) {
      return ut && typeof ut != "number" && Mn(et, nt, ut) && (nt = ut = o), (ut = ut === o ? lt : ut >>> 0) ? (et = Vr(et)) && (typeof nt == "string" || nt != null && !$u(nt)) && !(nt = Un(nt)) && Qo(et) ? Do(_i(et), 0, ut) : et.split(nt, ut) : [];
    }, St.spread = function(et, nt) {
      if (typeof et != "function") throw new Xn(s);
      return nt = nt == null ? 0 : mn(Mr(nt), 0), Fr(function(ut) {
        var gt = ut[nt], Et = Do(ut, 0, nt);
        return gt && ko(Et, gt), Gn(et, this, Et);
      });
    }, St.tail = function(et) {
      var nt = et == null ? 0 : et.length;
      return nt ? Jn(et, 1, nt) : [];
    }, St.take = function(et, nt, ut) {
      return et && et.length ? Jn(et, 0, (nt = ut || nt === o ? 1 : Mr(nt)) < 0 ? 0 : nt) : [];
    }, St.takeRight = function(et, nt, ut) {
      var gt = et == null ? 0 : et.length;
      return gt ? Jn(et, (nt = gt - (nt = ut || nt === o ? 1 : Mr(nt))) < 0 ? 0 : nt, gt) : [];
    }, St.takeRightWhile = function(et, nt) {
      return et && et.length ? Xs(et, gr(nt, 3), !1, !0) : [];
    }, St.takeWhile = function(et, nt) {
      return et && et.length ? Xs(et, gr(nt, 3)) : [];
    }, St.tap = function(et, nt) {
      return nt(et), et;
    }, St.throttle = function(et, nt, ut) {
      var gt = !0, Et = !0;
      if (typeof et != "function") throw new Xn(s);
      return en(ut) && (gt = "leading" in ut ? !!ut.leading : gt, Et = "trailing" in ut ? !!ut.trailing : Et), Mm(et, nt, { leading: gt, maxWait: nt, trailing: Et });
    }, St.thru = Cl, St.toArray = Lm, St.toPairs = Vm, St.toPairsIn = zm, St.toPath = function(et) {
      return Tr(et) ? Jr(et, uo) : qn(et) ? [et] : $n(mm(Vr(et)));
    }, St.toPlainObject = $m, St.transform = function(et, nt, ut) {
      var gt = Tr(et), Et = gt || Ro(et) || ls(et);
      if (nt = gr(nt, 4), ut == null) {
        var Ct = et && et.constructor;
        ut = Et ? gt ? new Ct() : [] : en(et) && _o(Ct) ? ns($s(et)) : {};
      }
      return (Et ? Kn : so)(et, function(Mt, Dt, Lt) {
        return nt(ut, Mt, Dt, Lt);
      }), ut;
    }, St.unary = function(et) {
      return wm(et, 1);
    }, St.union = Qy, St.unionBy = Zy, St.unionWith = Jy, St.uniq = function(et) {
      return et && et.length ? Mo(et) : [];
    }, St.uniqBy = function(et, nt) {
      return et && et.length ? Mo(et, gr(nt, 2)) : [];
    }, St.uniqWith = function(et, nt) {
      return nt = typeof nt == "function" ? nt : o, et && et.length ? Mo(et, o, nt) : [];
    }, St.unset = function(et, nt) {
      return et == null || gu(et, nt);
    }, St.unzip = Fu, St.unzipWith = xm, St.update = function(et, nt, ut) {
      return et == null ? et : Bp(et, nt, bu(ut));
    }, St.updateWith = function(et, nt, ut, gt) {
      return gt = typeof gt == "function" ? gt : o, et == null ? et : Bp(et, nt, bu(ut), gt);
    }, St.values = us, St.valuesIn = function(et) {
      return et == null ? [] : Ql(et, Bn(et));
    }, St.without = t0, St.words = Wm, St.wrap = function(et, nt) {
      return Lu(bu(nt), et);
    }, St.xor = e0, St.xorBy = r0, St.xorWith = n0, St.zip = a0, St.zipObject = function(et, nt) {
      return Vp(et || [], nt || [], ys);
    }, St.zipObjectDeep = function(et, nt) {
      return Vp(et || [], nt || [], _s);
    }, St.zipWith = i0, St.entries = Vm, St.entriesIn = zm, St.extend = Nm, St.extendWith = Rl, Hu(St, St), St.add = J0, St.attempt = Um, St.camelCase = O0, St.capitalize = Hm, St.ceil = tv, St.clamp = function(et, nt, ut) {
      return ut === o && (ut = nt, nt = o), ut !== o && (ut = (ut = ga(ut)) == ut ? ut : 0), nt !== o && (nt = (nt = ga(nt)) == nt ? nt : 0), jo(ga(et), nt, ut);
    }, St.clone = function(et) {
      return Zn(et, 4);
    }, St.cloneDeep = function(et) {
      return Zn(et, 5);
    }, St.cloneDeepWith = function(et, nt) {
      return Zn(et, 5, nt = typeof nt == "function" ? nt : o);
    }, St.cloneWith = function(et, nt) {
      return Zn(et, 4, nt = typeof nt == "function" ? nt : o);
    }, St.conformsTo = function(et, nt) {
      return nt == null || Ep(et, nt, bn(nt));
    }, St.deburr = Gm, St.defaultTo = function(et, nt) {
      return et == null || et != et ? nt : et;
    }, St.divide = ev, St.endsWith = function(et, nt, ut) {
      et = Vr(et), nt = Un(nt);
      var gt = et.length, Et = ut = ut === o ? gt : jo(Mr(ut), 0, gt);
      return (ut -= nt.length) >= 0 && et.slice(ut, Et) == nt;
    }, St.eq = eo, St.escape = function(et) {
      return (et = Vr(et)) && nr.test(et) ? et.replace(Kt, ry) : et;
    }, St.escapeRegExp = function(et) {
      return (et = Vr(et)) && yn.test(et) ? et.replace(Dn, "\\$&") : et;
    }, St.every = function(et, nt, ut) {
      var gt = Tr(et) ? _f : My;
      return ut && Mn(et, nt, ut) && (nt = o), gt(et, gr(nt, 3));
    }, St.find = l0, St.findIndex = ym, St.findKey = function(et, nt) {
      return tp(et, gr(nt, 3), so);
    }, St.findLast = u0, St.findLastIndex = vm, St.findLastKey = function(et, nt) {
      return tp(et, gr(nt, 3), ou);
    }, St.floor = rv, St.forEach = Cm, St.forEachRight = km, St.forIn = function(et, nt) {
      return et == null ? et : iu(et, gr(nt, 3), Bn);
    }, St.forInRight = function(et, nt) {
      return et == null ? et : Cp(et, gr(nt, 3), Bn);
    }, St.forOwn = function(et, nt) {
      return et && so(et, gr(nt, 3));
    }, St.forOwnRight = function(et, nt) {
      return et && ou(et, gr(nt, 3));
    }, St.get = Nu, St.gt = b0, St.gte = E0, St.has = function(et, nt) {
      return et != null && om(et, nt, Ay);
    }, St.hasIn = Bu, St.head = Em, St.identity = jn, St.includes = function(et, nt, ut, gt) {
      et = Nn(et) ? et : us(et), ut = ut && !gt ? Mr(ut) : 0;
      var Et = et.length;
      return ut < 0 && (ut = mn(Et + ut, 0)), Dl(et) ? ut <= Et && et.indexOf(nt, ut) > -1 : !!Et && Xo(et, nt, ut) > -1;
    }, St.indexOf = function(et, nt, ut) {
      var gt = et == null ? 0 : et.length;
      if (!gt) return -1;
      var Et = ut == null ? 0 : Mr(ut);
      return Et < 0 && (Et = mn(gt + Et, 0)), Xo(et, nt, Et);
    }, St.inRange = function(et, nt, ut) {
      return nt = xo(nt), ut === o ? (ut = nt, nt = 0) : ut = xo(ut), function(gt, Et, Ct) {
        return gt >= kn(Et, Ct) && gt < mn(Et, Ct);
      }(et = ga(et), nt, ut);
    }, St.invoke = R0, St.isArguments = Go, St.isArray = Tr, St.isArrayBuffer = _0, St.isArrayLike = Nn, St.isArrayLikeObject = sn, St.isBoolean = function(et) {
      return et === !0 || et === !1 || nn(et) && Tn(et) == pt;
    }, St.isBuffer = Ro, St.isDate = x0, St.isElement = function(et) {
      return nn(et) && et.nodeType === 1 && !ks(et);
    }, St.isEmpty = function(et) {
      if (et == null) return !0;
      if (Nn(et) && (Tr(et) || typeof et == "string" || typeof et.splice == "function" || Ro(et) || ls(et) || Go(et))) return !et.length;
      var nt = wn(et);
      if (nt == vt || nt == wt) return !et.size;
      if (Ss(et)) return !cu(et).length;
      for (var ut in et) if (Gr.call(et, ut)) return !1;
      return !0;
    }, St.isEqual = function(et, nt) {
      return Es(et, nt);
    }, St.isEqualWith = function(et, nt, ut) {
      var gt = (ut = typeof ut == "function" ? ut : o) ? ut(et, nt) : o;
      return gt === o ? Es(et, nt, o, ut) : !!gt;
    }, St.isError = Ou, St.isFinite = function(et) {
      return typeof et == "number" && dp(et);
    }, St.isFunction = _o, St.isInteger = Dm, St.isLength = Al, St.isMap = Rm, St.isMatch = function(et, nt) {
      return et === nt || uu(et, nt, wu(nt));
    }, St.isMatchWith = function(et, nt, ut) {
      return ut = typeof ut == "function" ? ut : o, uu(et, nt, wu(nt), ut);
    }, St.isNaN = function(et) {
      return Fm(et) && et != +et;
    }, St.isNative = function(et) {
      if (zy(et)) throw new Nr("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
      return Pp(et);
    }, St.isNil = function(et) {
      return et == null;
    }, St.isNull = function(et) {
      return et === null;
    }, St.isNumber = Fm, St.isObject = en, St.isObjectLike = nn, St.isPlainObject = ks, St.isRegExp = $u, St.isSafeInteger = function(et) {
      return Dm(et) && et >= -9007199254740991 && et <= it;
    }, St.isSet = Im, St.isString = Dl, St.isSymbol = qn, St.isTypedArray = ls, St.isUndefined = function(et) {
      return et === o;
    }, St.isWeakMap = function(et) {
      return nn(et) && wn(et) == It;
    }, St.isWeakSet = function(et) {
      return nn(et) && Tn(et) == "[object WeakSet]";
    }, St.join = function(et, nt) {
      return et == null ? "" : gy.call(et, nt);
    }, St.kebabCase = $0, St.last = na, St.lastIndexOf = function(et, nt, ut) {
      var gt = et == null ? 0 : et.length;
      if (!gt) return -1;
      var Et = gt;
      return ut !== o && (Et = (Et = Mr(ut)) < 0 ? mn(gt + Et, 0) : kn(Et, gt - 1)), nt == nt ? function(Ct, Mt, Dt) {
        for (var Lt = Dt + 1; Lt--; ) if (Ct[Lt] === Mt) return Lt;
        return Lt;
      }(et, nt, Et) : Ms(et, ep, Et, !0);
    }, St.lowerCase = N0, St.lowerFirst = B0, St.lt = S0, St.lte = C0, St.max = function(et) {
      return et && et.length ? Us(et, jn, su) : o;
    }, St.maxBy = function(et, nt) {
      return et && et.length ? Us(et, gr(nt, 2), su) : o;
    }, St.mean = function(et) {
      return rp(et, jn);
    }, St.meanBy = function(et, nt) {
      return rp(et, gr(nt, 2));
    }, St.min = function(et) {
      return et && et.length ? Us(et, jn, hu) : o;
    }, St.minBy = function(et, nt) {
      return et && et.length ? Us(et, gr(nt, 2), hu) : o;
    }, St.stubArray = Wu, St.stubFalse = Uu, St.stubObject = function() {
      return {};
    }, St.stubString = function() {
      return "";
    }, St.stubTrue = function() {
      return !0;
    }, St.multiply = nv, St.nth = function(et, nt) {
      return et && et.length ? Rp(et, Mr(nt)) : o;
    }, St.noConflict = function() {
      return pn._ === this && (pn._ = cy), this;
    }, St.noop = Gu, St.now = Pl, St.pad = function(et, nt, ut) {
      et = Vr(et);
      var gt = (nt = Mr(nt)) ? Zo(et) : 0;
      if (!nt || gt >= nt) return et;
      var Et = (nt - gt) / 2;
      return yl(Vs(Et), ut) + et + yl(js(Et), ut);
    }, St.padEnd = function(et, nt, ut) {
      et = Vr(et);
      var gt = (nt = Mr(nt)) ? Zo(et) : 0;
      return nt && gt < nt ? et + yl(nt - gt, ut) : et;
    }, St.padStart = function(et, nt, ut) {
      et = Vr(et);
      var gt = (nt = Mr(nt)) ? Zo(et) : 0;
      return nt && gt < nt ? yl(nt - gt, ut) + et : et;
    }, St.parseInt = function(et, nt, ut) {
      return ut || nt == null ? nt = 0 : nt && (nt = +nt), by(Vr(et).replace(Xr, ""), nt || 0);
    }, St.random = function(et, nt, ut) {
      if (ut && typeof ut != "boolean" && Mn(et, nt, ut) && (nt = ut = o), ut === o && (typeof nt == "boolean" ? (ut = nt, nt = o) : typeof et == "boolean" && (ut = et, et = o)), et === o && nt === o ? (et = 0, nt = 1) : (et = xo(et), nt === o ? (nt = et, et = 0) : nt = xo(nt)), et > nt) {
        var gt = et;
        et = nt, nt = gt;
      }
      if (ut || et % 1 || nt % 1) {
        var Et = mp();
        return kn(et + Et * (nt - et + io("1e-" + ((Et + "").length - 1))), nt);
      }
      return pu(et, nt);
    }, St.reduce = function(et, nt, ut) {
      var gt = Tr(et) ? Gl : np, Et = arguments.length < 3;
      return gt(et, gr(nt, 4), ut, Et, To);
    }, St.reduceRight = function(et, nt, ut) {
      var gt = Tr(et) ? Jm : np, Et = arguments.length < 3;
      return gt(et, gr(nt, 4), ut, Et, xp);
    }, St.repeat = function(et, nt, ut) {
      return nt = (ut ? Mn(et, nt, ut) : nt === o) ? 1 : Mr(nt), du(Vr(et), nt);
    }, St.replace = function() {
      var et = arguments, nt = Vr(et[0]);
      return et.length < 3 ? nt : nt.replace(et[1], et[2]);
    }, St.result = function(et, nt, ut) {
      var gt = -1, Et = (nt = Ao(nt, et)).length;
      for (Et || (Et = 1, et = o); ++gt < Et; ) {
        var Ct = et == null ? o : et[uo(nt[gt])];
        Ct === o && (gt = Et, Ct = ut), et = _o(Ct) ? Ct.call(et) : Ct;
      }
      return et;
    }, St.round = av, St.runInContext = $t, St.sample = function(et) {
      return (Tr(et) ? vp : Fy)(et);
    }, St.size = function(et) {
      if (et == null) return 0;
      if (Nn(et)) return Dl(et) ? Zo(et) : et.length;
      var nt = wn(et);
      return nt == vt || nt == wt ? et.size : cu(et).length;
    }, St.snakeCase = j0, St.some = function(et, nt, ut) {
      var gt = Tr(et) ? Wl : $y;
      return ut && Mn(et, nt, ut) && (nt = o), gt(et, gr(nt, 3));
    }, St.sortedIndex = function(et, nt) {
      return Ks(et, nt);
    }, St.sortedIndexBy = function(et, nt, ut) {
      return mu(et, nt, gr(ut, 2));
    }, St.sortedIndexOf = function(et, nt) {
      var ut = et == null ? 0 : et.length;
      if (ut) {
        var gt = Ks(et, nt);
        if (gt < ut && eo(et[gt], nt)) return gt;
      }
      return -1;
    }, St.sortedLastIndex = function(et, nt) {
      return Ks(et, nt, !0);
    }, St.sortedLastIndexBy = function(et, nt, ut) {
      return mu(et, nt, gr(ut, 2), !0);
    }, St.sortedLastIndexOf = function(et, nt) {
      if (et != null && et.length) {
        var ut = Ks(et, nt, !0) - 1;
        if (eo(et[ut], nt)) return ut;
      }
      return -1;
    }, St.startCase = V0, St.startsWith = function(et, nt, ut) {
      return et = Vr(et), ut = ut == null ? 0 : jo(Mr(ut), 0, et.length), nt = Un(nt), et.slice(ut, ut + nt.length) == nt;
    }, St.subtract = iv, St.sum = function(et) {
      return et && et.length ? Kl(et, jn) : 0;
    }, St.sumBy = function(et, nt) {
      return et && et.length ? Kl(et, gr(nt, 2)) : 0;
    }, St.template = function(et, nt, ut) {
      var gt = St.templateSettings;
      ut && Mn(et, nt, ut) && (nt = o), et = Vr(et), nt = Rl({}, nt, gt, rm);
      var Et, Ct, Mt = Rl({}, nt.imports, gt.imports, rm), Dt = bn(Mt), Lt = Ql(Mt, Dt), zt = 0, Vt = nt.interpolate || Ot, Xt = "__p += '", ar = Jl((nt.escape || Ot).source + "|" + Vt.source + "|" + (Vt === zr ? Fn : Ot).source + "|" + (nt.evaluate || Ot).source + "|$", "g"), or = "//# sourceURL=" + (Gr.call(nt, "sourceURL") ? (nt.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ko + "]") + `
`;
      et.replace(ar, function(Qt, yr, Jt, wr, br, Br) {
        return Jt || (Jt = wr), Xt += et.slice(zt, Br).replace(jt, ny), yr && (Et = !0, Xt += `' +
__e(` + yr + `) +
'`), br && (Ct = !0, Xt += `';
` + br + `;
__p += '`), Jt && (Xt += `' +
((__t = (` + Jt + `)) == null ? '' : __t) +
'`), zt = Br + Qt.length, Qt;
      }), Xt += `';
`;
      var pr = Gr.call(nt, "variable") && nt.variable;
      if (pr) {
        if (zn.test(pr)) throw new Nr("Invalid `variable` option passed into `_.template`");
      } else Xt = `with (obj) {
` + Xt + `
}
`;
      Xt = (Ct ? Xt.replace(Pr, "") : Xt).replace(dr, "$1").replace(Er, "$1;"), Xt = "function(" + (pr || "obj") + `) {
` + (pr ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (Et ? ", __e = _.escape" : "") + (Ct ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Xt + `return __p
}`;
      var Ht = Um(function() {
        return dn(Dt, or + "return " + Xt).apply(o, Lt);
      });
      if (Ht.source = Xt, Ou(Ht)) throw Ht;
      return Ht;
    }, St.times = function(et, nt) {
      if ((et = Mr(et)) < 1 || et > it) return [];
      var ut = lt, gt = kn(et, lt);
      nt = gr(nt), et -= lt;
      for (var Et = Xl(gt, nt); ++ut < et; ) nt(ut);
      return Et;
    }, St.toFinite = xo, St.toInteger = Mr, St.toLength = Om, St.toLower = function(et) {
      return Vr(et).toLowerCase();
    }, St.toNumber = ga, St.toSafeInteger = function(et) {
      return et ? jo(Mr(et), -9007199254740991, it) : et === 0 ? et : 0;
    }, St.toString = Vr, St.toUpper = function(et) {
      return Vr(et).toUpperCase();
    }, St.trim = function(et, nt, ut) {
      if ((et = Vr(et)) && (ut || nt === o)) return ap(et);
      if (!et || !(nt = Un(nt))) return et;
      var gt = _i(et), Et = _i(nt);
      return Do(gt, ip(gt, Et), op(gt, Et) + 1).join("");
    }, St.trimEnd = function(et, nt, ut) {
      if ((et = Vr(et)) && (ut || nt === o)) return et.slice(0, lp(et) + 1);
      if (!et || !(nt = Un(nt))) return et;
      var gt = _i(et);
      return Do(gt, 0, op(gt, _i(nt)) + 1).join("");
    }, St.trimStart = function(et, nt, ut) {
      if ((et = Vr(et)) && (ut || nt === o)) return et.replace(Xr, "");
      if (!et || !(nt = Un(nt))) return et;
      var gt = _i(et);
      return Do(gt, ip(gt, _i(nt))).join("");
    }, St.truncate = function(et, nt) {
      var ut = 30, gt = "...";
      if (en(nt)) {
        var Et = "separator" in nt ? nt.separator : Et;
        ut = "length" in nt ? Mr(nt.length) : ut, gt = "omission" in nt ? Un(nt.omission) : gt;
      }
      var Ct = (et = Vr(et)).length;
      if (Qo(et)) {
        var Mt = _i(et);
        Ct = Mt.length;
      }
      if (ut >= Ct) return et;
      var Dt = ut - Zo(gt);
      if (Dt < 1) return gt;
      var Lt = Mt ? Do(Mt, 0, Dt).join("") : et.slice(0, Dt);
      if (Et === o) return Lt + gt;
      if (Mt && (Dt += Lt.length - Dt), $u(Et)) {
        if (et.slice(Dt).search(Et)) {
          var zt, Vt = Lt;
          for (Et.global || (Et = Jl(Et.source, Vr(ro.exec(Et)) + "g")), Et.lastIndex = 0; zt = Et.exec(Vt); ) var Xt = zt.index;
          Lt = Lt.slice(0, Xt === o ? Dt : Xt);
        }
      } else if (et.indexOf(Un(Et), Dt) != Dt) {
        var ar = Lt.lastIndexOf(Et);
        ar > -1 && (Lt = Lt.slice(0, ar));
      }
      return Lt + gt;
    }, St.unescape = function(et) {
      return (et = Vr(et)) && rr.test(et) ? et.replace(Sr, iy) : et;
    }, St.uniqueId = function(et) {
      var nt = ++ly;
      return Vr(et) + nt;
    }, St.upperCase = z0, St.upperFirst = ju, St.each = Cm, St.eachRight = km, St.first = Em, Hu(St, function() {
      var et = {};
      return so(St, function(nt, ut) {
        Gr.call(St.prototype, ut) || (et[ut] = nt);
      }), et;
    }(), { chain: !1 }), St.VERSION = "4.17.21", Kn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(et) {
      St[et].placeholder = St;
    }), Kn(["drop", "take"], function(et, nt) {
      $r.prototype[et] = function(ut) {
        ut = ut === o ? 1 : mn(Mr(ut), 0);
        var gt = this.__filtered__ && !nt ? new $r(this) : this.clone();
        return gt.__filtered__ ? gt.__takeCount__ = kn(ut, gt.__takeCount__) : gt.__views__.push({ size: kn(ut, lt), type: et + (gt.__dir__ < 0 ? "Right" : "") }), gt;
      }, $r.prototype[et + "Right"] = function(ut) {
        return this.reverse()[et](ut).reverse();
      };
    }), Kn(["filter", "map", "takeWhile"], function(et, nt) {
      var ut = nt + 1, gt = ut == 1 || ut == 3;
      $r.prototype[et] = function(Et) {
        var Ct = this.clone();
        return Ct.__iteratees__.push({ iteratee: gr(Et, 3), type: ut }), Ct.__filtered__ = Ct.__filtered__ || gt, Ct;
      };
    }), Kn(["head", "last"], function(et, nt) {
      var ut = "take" + (nt ? "Right" : "");
      $r.prototype[et] = function() {
        return this[ut](1).value()[0];
      };
    }), Kn(["initial", "tail"], function(et, nt) {
      var ut = "drop" + (nt ? "" : "Right");
      $r.prototype[et] = function() {
        return this.__filtered__ ? new $r(this) : this[ut](1);
      };
    }), $r.prototype.compact = function() {
      return this.filter(jn);
    }, $r.prototype.find = function(et) {
      return this.filter(et).head();
    }, $r.prototype.findLast = function(et) {
      return this.reverse().find(et);
    }, $r.prototype.invokeMap = Fr(function(et, nt) {
      return typeof et == "function" ? new $r(this) : this.map(function(ut) {
        return bs(ut, et, nt);
      });
    }), $r.prototype.reject = function(et) {
      return this.filter(Ml(gr(et)));
    }, $r.prototype.slice = function(et, nt) {
      et = Mr(et);
      var ut = this;
      return ut.__filtered__ && (et > 0 || nt < 0) ? new $r(ut) : (et < 0 ? ut = ut.takeRight(-et) : et && (ut = ut.drop(et)), nt !== o && (ut = (nt = Mr(nt)) < 0 ? ut.dropRight(-nt) : ut.take(nt - et)), ut);
    }, $r.prototype.takeRightWhile = function(et) {
      return this.reverse().takeWhile(et).reverse();
    }, $r.prototype.toArray = function() {
      return this.take(lt);
    }, so($r.prototype, function(et, nt) {
      var ut = /^(?:filter|find|map|reject)|While$/.test(nt), gt = /^(?:head|last)$/.test(nt), Et = St[gt ? "take" + (nt == "last" ? "Right" : "") : nt], Ct = gt || /^find/.test(nt);
      Et && (St.prototype[nt] = function() {
        var Mt = this.__wrapped__, Dt = gt ? [1] : arguments, Lt = Mt instanceof $r, zt = Dt[0], Vt = Lt || Tr(Mt), Xt = function(yr) {
          var Jt = Et.apply(St, ko([yr], Dt));
          return gt && ar ? Jt[0] : Jt;
        };
        Vt && ut && typeof zt == "function" && zt.length != 1 && (Lt = Vt = !1);
        var ar = this.__chain__, or = !!this.__actions__.length, pr = Ct && !ar, Ht = Lt && !or;
        if (!Ct && Vt) {
          Mt = Ht ? Mt : new $r(this);
          var Qt = et.apply(Mt, Dt);
          return Qt.__actions__.push({ func: Cl, args: [Xt], thisArg: o }), new Qn(Qt, ar);
        }
        return pr && Ht ? et.apply(this, Dt) : (Qt = this.thru(Xt), pr ? gt ? Qt.value()[0] : Qt.value() : Qt);
      });
    }), Kn(["pop", "push", "shift", "sort", "splice", "unshift"], function(et) {
      var nt = Ds[et], ut = /^(?:push|sort|unshift)$/.test(et) ? "tap" : "thru", gt = /^(?:pop|shift)$/.test(et);
      St.prototype[et] = function() {
        var Et = arguments;
        if (gt && !this.__chain__) {
          var Ct = this.value();
          return nt.apply(Tr(Ct) ? Ct : [], Et);
        }
        return this[ut](function(Mt) {
          return nt.apply(Tr(Mt) ? Mt : [], Et);
        });
      };
    }), so($r.prototype, function(et, nt) {
      var ut = St[nt];
      if (ut) {
        var gt = ut.name + "";
        Gr.call(rs, gt) || (rs[gt] = []), rs[gt].push({ name: nt, func: ut });
      }
    }), rs[Zs(o, 2).name] = [{ name: "wrapper", func: o }], $r.prototype.clone = function() {
      var et = new $r(this.__wrapped__);
      return et.__actions__ = $n(this.__actions__), et.__dir__ = this.__dir__, et.__filtered__ = this.__filtered__, et.__iteratees__ = $n(this.__iteratees__), et.__takeCount__ = this.__takeCount__, et.__views__ = $n(this.__views__), et;
    }, $r.prototype.reverse = function() {
      if (this.__filtered__) {
        var et = new $r(this);
        et.__dir__ = -1, et.__filtered__ = !0;
      } else (et = this.clone()).__dir__ *= -1;
      return et;
    }, $r.prototype.value = function() {
      var et = this.__wrapped__.value(), nt = this.__dir__, ut = Tr(et), gt = nt < 0, Et = ut ? et.length : 0, Ct = function(Br, cr, vr) {
        for (var gn = -1, ln = vr.length; ++gn < ln; ) {
          var An = vr[gn], Kr = An.size;
          switch (An.type) {
            case "drop":
              Br += Kr;
              break;
            case "dropRight":
              cr -= Kr;
              break;
            case "take":
              cr = kn(cr, Br + Kr);
              break;
            case "takeRight":
              Br = mn(Br, cr - Kr);
          }
        }
        return { start: Br, end: cr };
      }(0, Et, this.__views__), Mt = Ct.start, Dt = Ct.end, Lt = Dt - Mt, zt = gt ? Dt : Mt - 1, Vt = this.__iteratees__, Xt = Vt.length, ar = 0, or = kn(Lt, this.__takeCount__);
      if (!ut || !gt && Et == Lt && or == Lt) return jp(et, this.__actions__);
      var pr = [];
      t: for (; Lt-- && ar < or; ) {
        for (var Ht = -1, Qt = et[zt += nt]; ++Ht < Xt; ) {
          var yr = Vt[Ht], Jt = yr.iteratee, wr = yr.type, br = Jt(Qt);
          if (wr == 2) Qt = br;
          else if (!br) {
            if (wr == 1) continue t;
            break t;
          }
        }
        pr[ar++] = Qt;
      }
      return pr;
    }, St.prototype.at = o0, St.prototype.chain = function() {
      return Sm(this);
    }, St.prototype.commit = function() {
      return new Qn(this.value(), this.__chain__);
    }, St.prototype.next = function() {
      this.__values__ === o && (this.__values__ = Lm(this.value()));
      var et = this.__index__ >= this.__values__.length;
      return { done: et, value: et ? o : this.__values__[this.__index__++] };
    }, St.prototype.plant = function(et) {
      for (var nt, ut = this; ut instanceof Gs; ) {
        var gt = gm(ut);
        gt.__index__ = 0, gt.__values__ = o, nt ? Et.__wrapped__ = gt : nt = gt;
        var Et = gt;
        ut = ut.__wrapped__;
      }
      return Et.__wrapped__ = et, nt;
    }, St.prototype.reverse = function() {
      var et = this.__wrapped__;
      if (et instanceof $r) {
        var nt = et;
        return this.__actions__.length && (nt = new $r(this)), (nt = nt.reverse()).__actions__.push({ func: Cl, args: [Ru], thisArg: o }), new Qn(nt, this.__chain__);
      }
      return this.thru(Ru);
    }, St.prototype.toJSON = St.prototype.valueOf = St.prototype.value = function() {
      return jp(this.__wrapped__, this.__actions__);
    }, St.prototype.first = St.prototype.head, fs && (St.prototype[fs] = function() {
      return this;
    }), St;
  }();
  Oo ? ((Oo.exports = Jo)._ = Jo, Vl._ = Jo) : pn._ = Jo;
}).call(commonjsGlobal$1);
var lodashExports = lodash.exports;
const E = getDefaultExportFromCjs$1(lodashExports);
function getChromeVersion() {
  const o = /(Chrome|Chromium)\/(?<chromeVersion>\d+)\./.exec(navigator.userAgent);
  if (o) return Number.parseInt(o.groups.chromeVersion, 10);
}
const colorSupport = getChromeVersion() >= 69 && { level: 1, hasBasic: !0, has256: !1, has16m: !1 };
var browser = { stdout: colorSupport, stderr: colorSupport };
const b = getDefaultExportFromCjs$1(browser);
var _ = (o) => {
  throw TypeError(o);
}, y = (o, s, h) => s.has(o) || _("Cannot " + h), a = (o, s, h) => (y(o, s, "read from private field"), h ? h.call(o) : s.get(o)), w = (o, s, h) => s.has(o) ? _("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(o) : s.set(o, h), R = (o, s, h, g) => (y(o, s, "write to private field"), s.set(o, h), h), i = (o, s, h) => (y(o, s, "access private method"), h);
const A = { 1: "MEDIA_ERR_ABORTED", 2: "MEDIA_ERR_NETWORK", 3: "MEDIA_ERR_DECODE", 4: "MEDIA_ERR_SRC_NOT_SUPPORTED" }, C = { log: d.blue, info: d.magenta, warn: d.green, error: d.cyan, debug: d.yellow, trace: d.red };
var $, f, O, p, r, c, D;
d.level = b.stdout ? b.stdout.level : 0;
class I {
  constructor() {
    w(this, r), w(this, $), w(this, f, {}), w(this, O), w(this, p), R(this, $, !1), R(this, p, (s, h) => h.map((g, j) => (C[s] && E.isObject(g), j === 0 ? C[s](g) : g)));
  }
  set enabled(s) {
    R(this, $, s);
  }
  get enabled() {
    return a(this, $);
  }
  set formatter(s) {
    R(this, p, s);
  }
  set handler(s) {
    R(this, O, s);
  }
  log(...s) {
    i(this, r, c).call(this, "log", s);
  }
  info(...s) {
    i(this, r, c).call(this, "info", s);
  }
  debug(...s) {
    i(this, r, c).call(this, "debug", s);
  }
  warn(...s) {
    i(this, r, c).call(this, "warn", s);
  }
  error(...s) {
    i(this, r, c).call(this, "error", s);
  }
  trace(...s) {
    i(this, r, c).call(this, "trace", s);
  }
  table(...s) {
    i(this, r, c).call(this, "table", s);
  }
  dir(s) {
    i(this, r, c).call(this, "dir", s);
  }
  count(s = "default") {
    i(this, r, c).call(this, "count", s);
  }
  countReset(s = "default") {
    i(this, r, D).call(this, "countReset", [s]);
  }
  group(s) {
    i(this, r, D).call(this, "group", s ? [s] : []);
  }
  groupCollapsed(s) {
    i(this, r, D).call(this, "groupCollapsed", s ? [s] : []);
  }
  groupEnd() {
    i(this, r, D).call(this, "groupEnd", []);
  }
  time(s = "default") {
    a(this, f)[s] && this.log(`Reseting Timer: ${s}`), a(this, f)[s] = performance.now();
  }
  timeEnd(s = "default", ...h) {
    if (!a(this, f)[s]) return void this.warn(`Timer: ${s} was not started using Logger.time(${s})`);
    const g = performance.now(), j = a(this, f)[s];
    i(this, r, c).call(this, "log", [`[${(/* @__PURE__ */ new Date()).toUTCString()}] ${s}: ${g - j}ms`, ...h]), a(this, f)[s] = void 0;
  }
  timeLog(s = "default", ...h) {
    if (!a(this, f)[s]) return void this.warn(`Timer: ${s} was not started using Logger.time(${s})`);
    const g = performance.now(), j = a(this, f)[s];
    i(this, r, c).call(this, "log", [`[${(/* @__PURE__ */ new Date()).toUTCString()}] ${s}: ${g - j}ms`, ...h]);
  }
  profile(s, h = s.constructor.name, g = []) {
    let j = [], tt = s;
    for (; tt; ) j = j.concat(Object.getOwnPropertyNames(tt)), tt = Object.getPrototypeOf(tt);
    j = E.uniq(j), this.info(`Profiling ${h}`), E.forEach(j, (rt) => {
      if (!~g.concat(["caller", "arguments"]).indexOf(rt)) try {
        const at = s[rt];
        E.isFunction(at) && (s[rt] = E.wrap(at, (it, ...st) => {
          this.time(`${h}.${rt}`);
          const lt = it.apply(s, st);
          return this.timeEnd(`${h}.${rt}`), lt;
        }));
      } catch {
        this.info(`Unable to profile ${h}.${rt}`);
      }
    });
  }
}
$ = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakSet(), c = function(o, s) {
  var h;
  const g = typeof globalThis < "u" && !!(globalThis.trackJs || (h = globalThis.DD_RUM) != null && h.getInternalContext()), j = E.isArray(s) ? s : [s], tt = a(this, O) ? a(this, O).call(this, o, j) : j.map((at) => {
    if (g && at instanceof MediaError) return `ERRCODE: ${at.code} ${A[at.code]}`;
    if (g && at instanceof Error) return `${at.name}: ${at.message}`;
    if (!(g && at instanceof Event)) {
      if (g && E.isPlainObject(at)) return E(at).keys().map((it) => it ? `${it}: ${E.get(at, it)}` : null).compact().join(", ");
      if (at instanceof Error) return `${at.name}: ${at.message}, ${at.stack}`;
    }
    return at;
  }), rt = a(this, p) ? a(this, p).call(this, o, tt) : tt;
  i(this, r, D).call(this, o, rt);
}, D = function(o, s) {
  (a(this, $) || ["warn", "error"].includes(o)) && (console[o] ? console[o](...s) : console.log(...s));
};
const x = new I();
var withSelector = { exports: {} }, useSyncExternalStoreWithSelector_production = {}, React = reactExports;
function is$1(o, s) {
  return o === s && (o !== 0 || 1 / o == 1 / s) || o != o && s != s;
}
var objectIs = typeof Object.is == "function" ? Object.is : is$1, useSyncExternalStore = React.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
useSyncExternalStoreWithSelector_production.useSyncExternalStoreWithSelector = function(o, s, h, g, j) {
  var tt = useRef(null);
  if (tt.current === null) {
    var rt = { hasValue: !1, value: null };
    tt.current = rt;
  } else rt = tt.current;
  tt = useMemo(function() {
    function it(ht) {
      if (!ot) {
        if (ot = !0, st = ht, ht = g(ht), j !== void 0 && rt.hasValue) {
          var pt = rt.value;
          if (j(pt, ht)) return lt = pt;
        }
        return lt = ht;
      }
      if (pt = lt, objectIs(st, ht)) return pt;
      var dt = g(ht);
      return j !== void 0 && j(pt, dt) ? (st = ht, pt) : (st = ht, lt = dt);
    }
    var st, lt, ot = !1, ft = h === void 0 ? null : h;
    return [function() {
      return it(s());
    }, ft === null ? void 0 : function() {
      return it(ft());
    }];
  }, [s, h, g, j]);
  var at = useSyncExternalStore(o, tt[0], tt[1]);
  return useEffect(function() {
    rt.hasValue = !0, rt.value = at;
  }, [at]), useDebugValue(at), at;
}, withSelector.exports = useSyncExternalStoreWithSelector_production;
var withSelectorExports = withSelector.exports, IS_REACT_19 = reactExports.version.startsWith("19"), REACT_ELEMENT_TYPE = Symbol.for(IS_REACT_19 ? "react.transitional.element" : "react.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), ForwardRef = REACT_FORWARD_REF_TYPE, Memo = REACT_MEMO_TYPE;
function typeOf(o) {
  if (typeof o == "object" && o !== null) {
    const { $$typeof: s } = o;
    switch (s) {
      case REACT_ELEMENT_TYPE:
        switch (o = o.type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return o;
          default:
            switch (o = o && o.$$typeof) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_CONSUMER_TYPE:
                return o;
              default:
                return s;
            }
        }
      case REACT_PORTAL_TYPE:
        return s;
    }
  }
}
function isMemo(o) {
  return typeOf(o) === REACT_MEMO_TYPE;
}
function pureFinalPropsSelectorFactory(o, s, h, g, { areStatesEqual: j, areOwnPropsEqual: tt, areStatePropsEqual: rt }) {
  let at, it, st, lt, ot, ft = !1;
  function ht(pt, dt) {
    const ct = !tt(dt, it), mt = !j(pt, at, dt, it);
    return at = pt, it = dt, ct && mt ? (st = o(at, it), s.dependsOnOwnProps && (lt = s(g, it)), ot = h(st, lt, it), ot) : ct ? (o.dependsOnOwnProps && (st = o(at, it)), s.dependsOnOwnProps && (lt = s(g, it)), ot = h(st, lt, it), ot) : mt ? function() {
      const yt = o(at, it), vt = !rt(yt, st);
      return st = yt, vt && (ot = h(st, lt, it)), ot;
    }() : ot;
  }
  return function(pt, dt) {
    return ft ? ht(pt, dt) : (at = pt, it = dt, st = o(at, it), lt = s(g, it), ot = h(st, lt, it), ft = !0, ot);
  };
}
function finalPropsSelectorFactory(o, { initMapStateToProps: s, initMapDispatchToProps: h, initMergeProps: g, ...j }) {
  return pureFinalPropsSelectorFactory(s(o, j), h(o, j), g(o, j), o, j);
}
function bindActionCreators(o, s) {
  const h = {};
  for (const g in o) {
    const j = o[g];
    typeof j == "function" && (h[g] = (...tt) => s(j(...tt)));
  }
  return h;
}
function wrapMapToPropsConstant(o) {
  return function(s) {
    const h = o(s);
    function g() {
      return h;
    }
    return g.dependsOnOwnProps = !1, g;
  };
}
function getDependsOnOwnProps(o) {
  return o.dependsOnOwnProps ? !!o.dependsOnOwnProps : o.length !== 1;
}
function wrapMapToPropsFunc(o, s) {
  return function(h, { displayName: g }) {
    const j = function(tt, rt) {
      return j.dependsOnOwnProps ? j.mapToProps(tt, rt) : j.mapToProps(tt, void 0);
    };
    return j.dependsOnOwnProps = !0, j.mapToProps = function(tt, rt) {
      j.mapToProps = o, j.dependsOnOwnProps = getDependsOnOwnProps(o);
      let at = j(tt, rt);
      return typeof at == "function" && (j.mapToProps = at, j.dependsOnOwnProps = getDependsOnOwnProps(at), at = j(tt, rt)), at;
    }, j;
  };
}
function createInvalidArgFactory(o, s) {
  return (h, g) => {
    throw new Error(`Invalid value of type ${typeof o} for ${s} argument when connecting component ${g.wrappedComponentName}.`);
  };
}
function mapDispatchToPropsFactory(o) {
  return o && typeof o == "object" ? wrapMapToPropsConstant((s) => bindActionCreators(o, s)) : o ? typeof o == "function" ? wrapMapToPropsFunc(o) : createInvalidArgFactory(o, "mapDispatchToProps") : wrapMapToPropsConstant((s) => ({ dispatch: s }));
}
function mapStateToPropsFactory(o) {
  return o ? typeof o == "function" ? wrapMapToPropsFunc(o) : createInvalidArgFactory(o, "mapStateToProps") : wrapMapToPropsConstant(() => ({}));
}
function defaultMergeProps(o, s, h) {
  return { ...h, ...o, ...s };
}
function wrapMergePropsFunc(o) {
  return function(s, { displayName: h, areMergedPropsEqual: g }) {
    let j, tt = !1;
    return function(rt, at, it) {
      const st = o(rt, at, it);
      return tt ? g(st, j) || (j = st) : (tt = !0, j = st), j;
    };
  };
}
function mergePropsFactory(o) {
  return o ? typeof o == "function" ? wrapMergePropsFunc(o) : createInvalidArgFactory(o, "mergeProps") : () => defaultMergeProps;
}
function defaultNoopBatch(o) {
  o();
}
function createListenerCollection() {
  let o = null, s = null;
  return { clear() {
    o = null, s = null;
  }, notify() {
    defaultNoopBatch(() => {
      let h = o;
      for (; h; ) h.callback(), h = h.next;
    });
  }, get() {
    const h = [];
    let g = o;
    for (; g; ) h.push(g), g = g.next;
    return h;
  }, subscribe(h) {
    let g = !0;
    const j = s = { callback: h, next: null, prev: s };
    return j.prev ? j.prev.next = j : o = j, function() {
      g && o !== null && (g = !1, j.next ? j.next.prev = j.prev : s = j.prev, j.prev ? j.prev.next = j.next : o = j.next);
    };
  } };
}
var nullListeners = { notify() {
}, get: () => [] };
function createSubscription(o, s) {
  let h, g = nullListeners, j = 0, tt = !1;
  function rt() {
    st.onStateChange && st.onStateChange();
  }
  function at() {
    j++, h || (h = s ? s.addNestedSub(rt) : o.subscribe(rt), g = createListenerCollection());
  }
  function it() {
    j--, h && j === 0 && (h(), h = void 0, g.clear(), g = nullListeners);
  }
  const st = { addNestedSub: function(lt) {
    at();
    const ot = g.subscribe(lt);
    let ft = !1;
    return () => {
      ft || (ft = !0, ot(), it());
    };
  }, notifyNestedSubs: function() {
    g.notify();
  }, handleChangeWrapper: rt, isSubscribed: function() {
    return tt;
  }, trySubscribe: function() {
    tt || (tt = !0, at());
  }, tryUnsubscribe: function() {
    tt && (tt = !1, it());
  }, getListeners: () => g };
  return st;
}
var canUseDOM = () => !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), isDOM = canUseDOM(), isRunningInReactNative = () => typeof navigator < "u" && navigator.product === "ReactNative", isReactNative = isRunningInReactNative(), getUseIsomorphicLayoutEffect = () => isDOM || isReactNative ? reactExports.useLayoutEffect : reactExports.useEffect, useIsomorphicLayoutEffect$1 = getUseIsomorphicLayoutEffect();
function is(o, s) {
  return o === s ? o !== 0 || s !== 0 || 1 / o == 1 / s : o != o && s != s;
}
function shallowEqual(o, s) {
  if (is(o, s)) return !0;
  if (typeof o != "object" || o === null || typeof s != "object" || s === null) return !1;
  const h = Object.keys(o), g = Object.keys(s);
  if (h.length !== g.length) return !1;
  for (let j = 0; j < h.length; j++) if (!Object.prototype.hasOwnProperty.call(s, h[j]) || !is(o[h[j]], s[h[j]])) return !1;
  return !0;
}
var REACT_STATICS = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, KNOWN_STATICS = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, FORWARD_REF_STATICS = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, MEMO_STATICS = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, TYPE_STATICS = { [ForwardRef]: FORWARD_REF_STATICS, [Memo]: MEMO_STATICS };
function getStatics(o) {
  return isMemo(o) ? MEMO_STATICS : TYPE_STATICS[o.$$typeof] || REACT_STATICS;
}
var defineProperty = Object.defineProperty, getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols = Object.getOwnPropertySymbols, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, getPrototypeOf = Object.getPrototypeOf, objectPrototype = Object.prototype;
function hoistNonReactStatics(o, s) {
  if (typeof s != "string") {
    if (objectPrototype) {
      const tt = getPrototypeOf(s);
      tt && tt !== objectPrototype && hoistNonReactStatics(o, tt);
    }
    let h = getOwnPropertyNames(s);
    getOwnPropertySymbols && (h = h.concat(getOwnPropertySymbols(s)));
    const g = getStatics(o), j = getStatics(s);
    for (let tt = 0; tt < h.length; ++tt) {
      const rt = h[tt];
      if (!(KNOWN_STATICS[rt] || j && j[rt] || g && g[rt])) {
        const at = getOwnPropertyDescriptor(s, rt);
        try {
          defineProperty(o, rt, at);
        } catch {
        }
      }
    }
  }
  return o;
}
var ContextKey = Symbol.for("react-redux-context"), gT = typeof globalThis < "u" ? globalThis : {};
function getContext() {
  if (!reactExports.createContext) return {};
  const o = gT[ContextKey] ?? (gT[ContextKey] = /* @__PURE__ */ new Map());
  let s = o.get(reactExports.createContext);
  return s || (s = reactExports.createContext(null), o.set(reactExports.createContext, s)), s;
}
var ReactReduxContext = getContext(), NO_SUBSCRIPTION_ARRAY = [null, null];
function useIsomorphicLayoutEffectWithArgs(o, s, h) {
  useIsomorphicLayoutEffect$1(() => o(...s), h);
}
function captureWrapperProps(o, s, h, g, j, tt) {
  o.current = g, h.current = !1, j.current && (j.current = null, tt());
}
function subscribeUpdates(o, s, h, g, j, tt, rt, at, it, st, lt) {
  if (!o) return () => {
  };
  let ot = !1, ft = null;
  const ht = () => {
    if (ot || !at.current) return;
    const pt = s.getState();
    let dt, ct;
    try {
      dt = g(pt, j.current);
    } catch (mt) {
      ct = mt, ft = mt;
    }
    ct || (ft = null), dt === tt.current ? rt.current || st() : (tt.current = dt, it.current = dt, rt.current = !0, lt());
  };
  return h.onStateChange = ht, h.trySubscribe(), ht(), () => {
    if (ot = !0, h.tryUnsubscribe(), h.onStateChange = null, ft) throw ft;
  };
}
function strictEqual(o, s) {
  return o === s;
}
function connect(o, s, h, { pure: g, areStatesEqual: j = strictEqual, areOwnPropsEqual: tt = shallowEqual, areStatePropsEqual: rt = shallowEqual, areMergedPropsEqual: at = shallowEqual, forwardRef: it = !1, context: st = ReactReduxContext } = {}) {
  const lt = st, ot = mapStateToPropsFactory(o), ft = mapDispatchToPropsFactory(s), ht = mergePropsFactory(h), pt = !!o;
  return (dt) => {
    const ct = dt.displayName || dt.name || "Component", mt = `Connect(${ct})`, yt = { shouldHandleStateChanges: pt, displayName: mt, wrappedComponentName: ct, WrappedComponent: dt, initMapStateToProps: ot, initMapDispatchToProps: ft, initMergeProps: ht, areStatesEqual: j, areStatePropsEqual: rt, areOwnPropsEqual: tt, areMergedPropsEqual: at };
    function vt(Pt) {
      const [bt, kt, wt] = reactExports.useMemo(() => {
        const { reactReduxForwardedRef: nr, ...Dr } = Pt;
        return [Pt.context, nr, Dr];
      }, [Pt]), xt = reactExports.useMemo(() => lt, [bt, lt]), Tt = reactExports.useContext(xt), It = !!Pt.store && !!Pt.store.getState && !!Pt.store.dispatch, qt = !!Tt && !!Tt.store, Wt = It ? Pt.store : Tt.store, Nt = qt ? Tt.getServerState : Wt.getState, Yt = reactExports.useMemo(() => finalPropsSelectorFactory(Wt.dispatch, yt), [Wt]), [sr, ur] = reactExports.useMemo(() => {
        if (!pt) return NO_SUBSCRIPTION_ARRAY;
        const nr = createSubscription(Wt, It ? void 0 : Tt.subscription), Dr = nr.notifyNestedSubs.bind(nr);
        return [nr, Dr];
      }, [Wt, It, Tt]), Rt = reactExports.useMemo(() => It ? Tt : { ...Tt, subscription: sr }, [It, Tt, sr]), Ft = reactExports.useRef(void 0), At = reactExports.useRef(wt), Zt = reactExports.useRef(void 0), hr = reactExports.useRef(!1), Pr = reactExports.useRef(!1), dr = reactExports.useRef(void 0);
      useIsomorphicLayoutEffect$1(() => (Pr.current = !0, () => {
        Pr.current = !1;
      }), []);
      const Er = reactExports.useMemo(() => () => Zt.current && wt === At.current ? Zt.current : Yt(Wt.getState(), wt), [Wt, wt]), Sr = reactExports.useMemo(() => (nr) => sr ? subscribeUpdates(pt, Wt, sr, Yt, At, Ft, hr, Pr, Zt, ur, nr) : () => {
      }, [sr]);
      let Kt;
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [At, Ft, hr, wt, Zt, ur]);
      try {
        Kt = reactExports.useSyncExternalStore(Sr, Er, Nt ? () => Yt(Nt(), wt) : Er);
      } catch (nr) {
        throw dr.current && (nr.message += `
The error may be correlated with this previous error:
${dr.current.stack}

`), nr;
      }
      useIsomorphicLayoutEffect$1(() => {
        dr.current = void 0, Zt.current = void 0, Ft.current = Kt;
      });
      const rr = reactExports.useMemo(() => reactExports.createElement(dt, { ...Kt, ref: kt }), [kt, dt, Kt]);
      return reactExports.useMemo(() => pt ? reactExports.createElement(xt.Provider, { value: Rt }, rr) : rr, [xt, rr, Rt]);
    }
    const _t = reactExports.memo(vt);
    if (_t.WrappedComponent = dt, _t.displayName = vt.displayName = mt, it) {
      const Pt = reactExports.forwardRef(function(bt, kt) {
        return reactExports.createElement(_t, { ...bt, reactReduxForwardedRef: kt });
      });
      return Pt.displayName = mt, Pt.WrappedComponent = dt, hoistNonReactStatics(Pt, dt);
    }
    return hoistNonReactStatics(_t, dt);
  };
}
var connect_default = connect;
function Provider(o) {
  const { children: s, context: h, serverState: g, store: j } = o, tt = reactExports.useMemo(() => {
    const it = createSubscription(j);
    return { store: j, subscription: it, getServerState: g ? () => g : void 0 };
  }, [j, g]), rt = reactExports.useMemo(() => j.getState(), [j]);
  useIsomorphicLayoutEffect$1(() => {
    const { subscription: it } = tt;
    return it.onStateChange = it.notifyNestedSubs, it.trySubscribe(), rt !== j.getState() && it.notifyNestedSubs(), () => {
      it.tryUnsubscribe(), it.onStateChange = void 0;
    };
  }, [tt, rt]);
  const at = h || ReactReduxContext;
  return reactExports.createElement(at.Provider, { value: tt }, s);
}
var Provider_default = Provider;
function createReduxContextHook(o = ReactReduxContext) {
  return function() {
    return reactExports.useContext(o);
  };
}
var useReduxContext = createReduxContextHook();
function createStoreHook(o = ReactReduxContext) {
  const s = o === ReactReduxContext ? useReduxContext : createReduxContextHook(o), h = () => {
    const { store: g } = s();
    return g;
  };
  return Object.assign(h, { withTypes: () => h }), h;
}
var useStore = createStoreHook();
function createDispatchHook(o = ReactReduxContext) {
  const s = o === ReactReduxContext ? useStore : createStoreHook(o), h = () => s().dispatch;
  return Object.assign(h, { withTypes: () => h }), h;
}
var useDispatch = createDispatchHook(), refEquality = (o, s) => o === s;
function createSelectorHook(o = ReactReduxContext) {
  const s = o === ReactReduxContext ? useReduxContext : createReduxContextHook(o), h = (g, j = {}) => {
    const { equalityFn: tt = refEquality } = typeof j == "function" ? { equalityFn: j } : j, rt = s(), { store: at, subscription: it, getServerState: st } = rt;
    reactExports.useRef(!0);
    const lt = reactExports.useCallback({ [g.name]: (ft) => g(ft) }[g.name], [g]), ot = withSelectorExports.useSyncExternalStoreWithSelector(it.addNestedSub, at.getState, st || at.getState, lt, tt);
    return reactExports.useDebugValue(ot), ot;
  };
  return Object.assign(h, { withTypes: () => h }), h;
}
var useSelector = createSelectorHook(), Action, ResultType;
function _extends$4() {
  return _extends$4 = Object.assign ? Object.assign.bind() : function(o) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var g in h) Object.prototype.hasOwnProperty.call(h, g) && (o[g] = h[g]);
    }
    return o;
  }, _extends$4.apply(this, arguments);
}
function createMemoryHistory(o) {
  o === void 0 && (o = {});
  let s, { initialEntries: h = ["/"], initialIndex: g, v5Compat: j = !1 } = o;
  s = h.map((ft, ht) => lt(ft, typeof ft == "string" ? null : ft.state, ht === 0 ? "default" : void 0));
  let tt = it(g ?? s.length - 1), rt = Action.Pop, at = null;
  function it(ft) {
    return Math.min(Math.max(ft, 0), s.length - 1);
  }
  function st() {
    return s[tt];
  }
  function lt(ft, ht, pt) {
    ht === void 0 && (ht = null);
    let dt = createLocation(s ? st().pathname : "/", ft, ht, pt);
    return warning$1(dt.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(ft)), dt;
  }
  function ot(ft) {
    return typeof ft == "string" ? ft : createPath(ft);
  }
  return { get index() {
    return tt;
  }, get action() {
    return rt;
  }, get location() {
    return st();
  }, createHref: ot, createURL: (ft) => new URL(ot(ft), "http://localhost"), encodeLocation(ft) {
    let ht = typeof ft == "string" ? parsePath(ft) : ft;
    return { pathname: ht.pathname || "", search: ht.search || "", hash: ht.hash || "" };
  }, push(ft, ht) {
    rt = Action.Push;
    let pt = lt(ft, ht);
    tt += 1, s.splice(tt, s.length, pt), j && at && at({ action: rt, location: pt, delta: 1 });
  }, replace(ft, ht) {
    rt = Action.Replace;
    let pt = lt(ft, ht);
    s[tt] = pt, j && at && at({ action: rt, location: pt, delta: 0 });
  }, go(ft) {
    rt = Action.Pop;
    let ht = it(tt + ft), pt = s[ht];
    tt = ht, at && at({ action: rt, location: pt, delta: ft });
  }, listen: (ft) => (at = ft, () => {
    at = null;
  }) };
}
function invariant(o, s) {
  if (o === !1 || o == null) throw new Error(s);
}
function warning$1(o, s) {
  if (!o) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s);
    } catch {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function createLocation(o, s, h, g) {
  return h === void 0 && (h = null), _extends$4({ pathname: typeof o == "string" ? o : o.pathname, search: "", hash: "" }, typeof s == "string" ? parsePath(s) : s, { state: h, key: s && s.key || g || createKey() });
}
function createPath(o) {
  let { pathname: s = "/", search: h = "", hash: g = "" } = o;
  return h && h !== "?" && (s += h.charAt(0) === "?" ? h : "?" + h), g && g !== "#" && (s += g.charAt(0) === "#" ? g : "#" + g), s;
}
function parsePath(o) {
  let s = {};
  if (o) {
    let h = o.indexOf("#");
    h >= 0 && (s.hash = o.substr(h), o = o.substr(0, h));
    let g = o.indexOf("?");
    g >= 0 && (s.search = o.substr(g), o = o.substr(0, g)), o && (s.pathname = o);
  }
  return s;
}
(function(o) {
  o.Pop = "POP", o.Push = "PUSH", o.Replace = "REPLACE";
})(Action || (Action = {})), function(o) {
  o.data = "data", o.deferred = "deferred", o.redirect = "redirect", o.error = "error";
}(ResultType || (ResultType = {}));
const immutableRouteKeys = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function isIndexRoute(o) {
  return o.index === !0;
}
function convertRoutesToDataRoutes(o, s, h, g) {
  return h === void 0 && (h = []), g === void 0 && (g = {}), o.map((j, tt) => {
    let rt = [...h, String(tt)], at = typeof j.id == "string" ? j.id : rt.join("-");
    if (invariant(j.index !== !0 || !j.children, "Cannot specify children on an index route"), invariant(!g[at], 'Found a route id collision on id "' + at + `".  Route id's must be globally unique within Data Router usages`), isIndexRoute(j)) {
      let it = _extends$4({}, j, s(j), { id: at });
      return g[at] = it, it;
    }
    {
      let it = _extends$4({}, j, s(j), { id: at, children: void 0 });
      return g[at] = it, j.children && (it.children = convertRoutesToDataRoutes(j.children, s, rt, g)), it;
    }
  });
}
function matchRoutes(o, s, h) {
  return h === void 0 && (h = "/"), matchRoutesImpl(o, s, h, !1);
}
function matchRoutesImpl(o, s, h, g) {
  let j = stripBasename((typeof s == "string" ? parsePath(s) : s).pathname || "/", h);
  if (j == null) return null;
  let tt = flattenRoutes(o);
  rankRouteBranches(tt);
  let rt = null;
  for (let at = 0; rt == null && at < tt.length; ++at) {
    let it = decodePath(j);
    rt = matchRouteBranch(tt[at], it, g);
  }
  return rt;
}
function convertRouteMatchToUiMatch(o, s) {
  let { route: h, pathname: g, params: j } = o;
  return { id: h.id, pathname: g, params: j, data: s[h.id], handle: h.handle };
}
function flattenRoutes(o, s, h, g) {
  s === void 0 && (s = []), h === void 0 && (h = []), g === void 0 && (g = "");
  let j = (tt, rt, at) => {
    let it = { relativePath: at === void 0 ? tt.path || "" : at, caseSensitive: tt.caseSensitive === !0, childrenIndex: rt, route: tt };
    it.relativePath.startsWith("/") && (invariant(it.relativePath.startsWith(g), 'Absolute route path "' + it.relativePath + '" nested under path "' + g + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), it.relativePath = it.relativePath.slice(g.length));
    let st = joinPaths([g, it.relativePath]), lt = h.concat(it);
    tt.children && tt.children.length > 0 && (invariant(tt.index !== !0, 'Index routes must not have child routes. Please remove all child routes from route path "' + st + '".'), flattenRoutes(tt.children, s, lt, st)), (tt.path != null || tt.index) && s.push({ path: st, score: computeScore(st, tt.index), routesMeta: lt });
  };
  return o.forEach((tt, rt) => {
    var at;
    if (tt.path !== "" && (at = tt.path) != null && at.includes("?")) for (let it of explodeOptionalSegments(tt.path)) j(tt, rt, it);
    else j(tt, rt);
  }), s;
}
function explodeOptionalSegments(o) {
  let s = o.split("/");
  if (s.length === 0) return [];
  let [h, ...g] = s, j = h.endsWith("?"), tt = h.replace(/\?$/, "");
  if (g.length === 0) return j ? [tt, ""] : [tt];
  let rt = explodeOptionalSegments(g.join("/")), at = [];
  return at.push(...rt.map((it) => it === "" ? tt : [tt, it].join("/"))), j && at.push(...rt), at.map((it) => o.startsWith("/") && it === "" ? "/" : it);
}
function rankRouteBranches(o) {
  o.sort((s, h) => s.score !== h.score ? h.score - s.score : compareIndexes(s.routesMeta.map((g) => g.childrenIndex), h.routesMeta.map((g) => g.childrenIndex)));
}
const paramRe = /^:[\w-]+$/, dynamicSegmentValue = 3, indexRouteValue = 2, emptySegmentValue = 1, staticSegmentValue = 10, splatPenalty = -2, isSplat = (o) => o === "*";
function computeScore(o, s) {
  let h = o.split("/"), g = h.length;
  return h.some(isSplat) && (g += splatPenalty), s && (g += indexRouteValue), h.filter((j) => !isSplat(j)).reduce((j, tt) => j + (paramRe.test(tt) ? dynamicSegmentValue : tt === "" ? emptySegmentValue : staticSegmentValue), g);
}
function compareIndexes(o, s) {
  return o.length === s.length && o.slice(0, -1).every((g, j) => g === s[j]) ? o[o.length - 1] - s[s.length - 1] : 0;
}
function matchRouteBranch(o, s, h) {
  h === void 0 && (h = !1);
  let { routesMeta: g } = o, j = {}, tt = "/", rt = [];
  for (let at = 0; at < g.length; ++at) {
    let it = g[at], st = at === g.length - 1, lt = tt === "/" ? s : s.slice(tt.length) || "/", ot = matchPath({ path: it.relativePath, caseSensitive: it.caseSensitive, end: st }, lt), ft = it.route;
    if (!ot && st && h && !g[g.length - 1].route.index && (ot = matchPath({ path: it.relativePath, caseSensitive: it.caseSensitive, end: !1 }, lt)), !ot) return null;
    Object.assign(j, ot.params), rt.push({ params: j, pathname: joinPaths([tt, ot.pathname]), pathnameBase: normalizePathname(joinPaths([tt, ot.pathnameBase])), route: ft }), ot.pathnameBase !== "/" && (tt = joinPaths([tt, ot.pathnameBase]));
  }
  return rt;
}
function matchPath(o, s) {
  typeof o == "string" && (o = { path: o, caseSensitive: !1, end: !0 });
  let [h, g] = compilePath(o.path, o.caseSensitive, o.end), j = s.match(h);
  if (!j) return null;
  let tt = j[0], rt = tt.replace(/(.)\/+$/, "$1"), at = j.slice(1);
  return { params: g.reduce((st, lt, ot) => {
    let { paramName: ft, isOptional: ht } = lt;
    if (ft === "*") {
      let dt = at[ot] || "";
      rt = tt.slice(0, tt.length - dt.length).replace(/(.)\/+$/, "$1");
    }
    const pt = at[ot];
    return st[ft] = ht && !pt ? void 0 : (pt || "").replace(/%2F/g, "/"), st;
  }, {}), pathname: tt, pathnameBase: rt, pattern: o };
}
function compilePath(o, s, h) {
  s === void 0 && (s = !1), h === void 0 && (h = !0), warning$1(o === "*" || !o.endsWith("*") || o.endsWith("/*"), 'Route path "' + o + '" will be treated as if it were "' + o.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + o.replace(/\*$/, "/*") + '".');
  let g = [], j = "^" + o.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (tt, rt, at) => (g.push({ paramName: rt, isOptional: at != null }), at ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return o.endsWith("*") ? (g.push({ paramName: "*" }), j += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : h ? j += "\\/*$" : o !== "" && o !== "/" && (j += "(?:(?=\\/|$))"), [new RegExp(j, s ? void 0 : "i"), g];
}
function decodePath(o) {
  try {
    return o.split("/").map((s) => decodeURIComponent(s).replace(/\//g, "%2F")).join("/");
  } catch (s) {
    return warning$1(!1, 'The URL path "' + o + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + s + ")."), o;
  }
}
function stripBasename(o, s) {
  if (s === "/") return o;
  if (!o.toLowerCase().startsWith(s.toLowerCase())) return null;
  let h = s.endsWith("/") ? s.length - 1 : s.length, g = o.charAt(h);
  return g && g !== "/" ? null : o.slice(h) || "/";
}
function resolvePath(o, s) {
  s === void 0 && (s = "/");
  let { pathname: h, search: g = "", hash: j = "" } = typeof o == "string" ? parsePath(o) : o;
  return { pathname: h ? h.startsWith("/") ? h : resolvePathname(h, s) : s, search: normalizeSearch(g), hash: normalizeHash(j) };
}
function resolvePathname(o, s) {
  let h = s.replace(/\/+$/, "").split("/");
  return o.split("/").forEach((g) => {
    g === ".." ? h.length > 1 && h.pop() : g !== "." && h.push(g);
  }), h.length > 1 ? h.join("/") : "/";
}
function getInvalidPathError(o, s, h, g) {
  return "Cannot include a '" + o + "' character in a manually specified `to." + s + "` field [" + JSON.stringify(g) + "].  Please separate it out to the `to." + h + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(o) {
  return o.filter((s, h) => h === 0 || s.route.path && s.route.path.length > 0);
}
function getResolveToMatches(o, s) {
  let h = getPathContributingMatches(o);
  return s ? h.map((g, j) => j === h.length - 1 ? g.pathname : g.pathnameBase) : h.map((g) => g.pathnameBase);
}
function resolveTo(o, s, h, g) {
  let j;
  g === void 0 && (g = !1), typeof o == "string" ? j = parsePath(o) : (j = _extends$4({}, o), invariant(!j.pathname || !j.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", j)), invariant(!j.pathname || !j.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", j)), invariant(!j.search || !j.search.includes("#"), getInvalidPathError("#", "search", "hash", j)));
  let tt, rt = o === "" || j.pathname === "", at = rt ? "/" : j.pathname;
  if (at == null) tt = h;
  else {
    let ot = s.length - 1;
    if (!g && at.startsWith("..")) {
      let ft = at.split("/");
      for (; ft[0] === ".."; ) ft.shift(), ot -= 1;
      j.pathname = ft.join("/");
    }
    tt = ot >= 0 ? s[ot] : "/";
  }
  let it = resolvePath(j, tt), st = at && at !== "/" && at.endsWith("/"), lt = (rt || at === ".") && h.endsWith("/");
  return it.pathname.endsWith("/") || !st && !lt || (it.pathname += "/"), it;
}
const joinPaths = (o) => o.join("/").replace(/\/\/+/g, "/"), normalizePathname = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"), normalizeSearch = (o) => o && o !== "?" ? o.startsWith("?") ? o : "?" + o : "", normalizeHash = (o) => o && o !== "#" ? o.startsWith("#") ? o : "#" + o : "";
class ErrorResponseImpl {
  constructor(s, h, g, j) {
    j === void 0 && (j = !1), this.status = s, this.statusText = h || "", this.internal = j, g instanceof Error ? (this.data = g.toString(), this.error = g) : this.data = g;
  }
}
function isRouteErrorResponse(o) {
  return o != null && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.internal == "boolean" && "data" in o;
}
const validMutationMethodsArr = ["post", "put", "patch", "delete"], validMutationMethods = new Set(validMutationMethodsArr), validRequestMethodsArr = ["get", ...validMutationMethodsArr], validRequestMethods = new Set(validRequestMethodsArr), redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), redirectPreserveMethodStatusCodes = /* @__PURE__ */ new Set([307, 308]), IDLE_NAVIGATION = { state: "idle", location: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, IDLE_FETCHER = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, IDLE_BLOCKER = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 }, ABSOLUTE_URL_REGEX$1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, defaultMapRouteProperties = (o) => ({ hasErrorBoundary: !!o.hasErrorBoundary }), TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
function createRouter(o) {
  const s = o.window ? o.window : typeof window < "u" ? window : void 0, h = s !== void 0 && s.document !== void 0 && s.document.createElement !== void 0, g = !h;
  let j;
  if (invariant(o.routes.length > 0, "You must provide a non-empty routes array to createRouter"), o.mapRouteProperties) j = o.mapRouteProperties;
  else if (o.detectErrorBoundary) {
    let Ot = o.detectErrorBoundary;
    j = (jt) => ({ hasErrorBoundary: Ot(jt) });
  } else j = defaultMapRouteProperties;
  let tt, rt, at, it = {}, st = convertRoutesToDataRoutes(o.routes, j, void 0, it), lt = o.basename || "/", ot = o.dataStrategy || defaultDataStrategy, ft = o.patchRoutesOnNavigation, ht = _extends$4({ v7_fetcherPersist: !1, v7_normalizeFormMethod: !1, v7_partialHydration: !1, v7_prependBasename: !1, v7_relativeSplatPath: !1, v7_skipActionErrorRevalidation: !1 }, o.future), pt = null, dt = /* @__PURE__ */ new Set(), ct = null, mt = null, yt = null, vt = o.hydrationData != null, _t = matchRoutes(st, o.history.location, lt), Pt = !1, bt = null;
  if (_t == null && !ft) {
    let Ot = getInternalRouterError(404, { pathname: o.history.location.pathname }), { matches: jt, route: Bt } = getShortCircuitMatches(st);
    _t = jt, bt = { [Bt.id]: Ot };
  }
  if (_t && !o.hydrationData && Uo(_t, st, o.history.location.pathname).active && (_t = null), _t) if (_t.some((Ot) => Ot.route.lazy)) rt = !1;
  else if (_t.some((Ot) => Ot.route.loader)) if (ht.v7_partialHydration) {
    let Ot = o.hydrationData ? o.hydrationData.loaderData : null, jt = o.hydrationData ? o.hydrationData.errors : null;
    if (jt) {
      let Bt = _t.findIndex((_e) => jt[_e.route.id] !== void 0);
      rt = _t.slice(0, Bt + 1).every((_e) => !shouldLoadRouteOnHydration(_e.route, Ot, jt));
    } else rt = _t.every((Bt) => !shouldLoadRouteOnHydration(Bt.route, Ot, jt));
  } else rt = o.hydrationData != null;
  else rt = !0;
  else if (rt = !1, _t = [], ht.v7_partialHydration) {
    let Ot = Uo(null, st, o.history.location.pathname);
    Ot.active && Ot.matches && (Pt = !0, _t = Ot.matches);
  }
  let kt, wt, xt = { historyAction: o.history.action, location: o.history.location, matches: _t, initialized: rt, navigation: IDLE_NAVIGATION, restoreScrollPosition: o.hydrationData == null && null, preventScrollReset: !1, revalidation: "idle", loaderData: o.hydrationData && o.hydrationData.loaderData || {}, actionData: o.hydrationData && o.hydrationData.actionData || null, errors: o.hydrationData && o.hydrationData.errors || bt, fetchers: /* @__PURE__ */ new Map(), blockers: /* @__PURE__ */ new Map() }, Tt = Action.Pop, It = !1, qt = !1, Wt = /* @__PURE__ */ new Map(), Nt = null, Yt = !1, sr = !1, ur = [], Rt = /* @__PURE__ */ new Set(), Ft = /* @__PURE__ */ new Map(), At = 0, Zt = -1, hr = /* @__PURE__ */ new Map(), Pr = /* @__PURE__ */ new Set(), dr = /* @__PURE__ */ new Map(), Er = /* @__PURE__ */ new Map(), Sr = /* @__PURE__ */ new Set(), Kt = /* @__PURE__ */ new Map(), rr = /* @__PURE__ */ new Map();
  function nr(Ot, jt) {
    jt === void 0 && (jt = {}), xt = _extends$4({}, xt, Ot);
    let Bt = [], _e = [];
    ht.v7_fetcherPersist && xt.fetchers.forEach((ir, Cr) => {
      ir.state === "idle" && (Sr.has(Cr) ? _e.push(Cr) : Bt.push(Cr));
    }), Sr.forEach((ir) => {
      xt.fetchers.has(ir) || Ft.has(ir) || _e.push(ir);
    }), [...dt].forEach((ir) => ir(xt, { deletedFetchers: _e, viewTransitionOpts: jt.viewTransitionOpts, flushSync: jt.flushSync === !0 })), ht.v7_fetcherPersist ? (Bt.forEach((ir) => xt.fetchers.delete(ir)), _e.forEach((ir) => an(ir))) : _e.forEach((ir) => Sr.delete(ir));
  }
  function Dr(Ot, jt, Bt) {
    var _e, ir;
    let Cr, { flushSync: Lr } = Bt === void 0 ? {} : Bt, Or = xt.actionData != null && xt.navigation.formMethod != null && isMutationMethod(xt.navigation.formMethod) && xt.navigation.state === "loading" && ((_e = Ot.state) == null ? void 0 : _e._isRedirect) !== !0;
    Cr = jt.actionData ? Object.keys(jt.actionData).length > 0 ? jt.actionData : null : Or ? xt.actionData : null;
    let _r = jt.loaderData ? mergeLoaderData(xt.loaderData, jt.loaderData, jt.matches || [], jt.errors) : xt.loaderData, Ar = xt.blockers;
    Ar.size > 0 && (Ar = new Map(Ar), Ar.forEach((rn, Cn) => Ar.set(Cn, IDLE_BLOCKER)));
    let kr, on = It === !0 || xt.navigation.formMethod != null && isMutationMethod(xt.navigation.formMethod) && ((ir = Ot.state) == null ? void 0 : ir._isRedirect) !== !0;
    if (tt && (st = tt, tt = void 0), Yt || Tt === Action.Pop || (Tt === Action.Push ? o.history.push(Ot, Ot.state) : Tt === Action.Replace && o.history.replace(Ot, Ot.state)), Tt === Action.Pop) {
      let rn = Wt.get(xt.location.pathname);
      rn && rn.has(Ot.pathname) ? kr = { currentLocation: xt.location, nextLocation: Ot } : Wt.has(Ot.pathname) && (kr = { currentLocation: Ot, nextLocation: xt.location });
    } else if (qt) {
      let rn = Wt.get(xt.location.pathname);
      rn ? rn.add(Ot.pathname) : (rn = /* @__PURE__ */ new Set([Ot.pathname]), Wt.set(xt.location.pathname, rn)), kr = { currentLocation: xt.location, nextLocation: Ot };
    }
    nr(_extends$4({}, jt, { actionData: Cr, loaderData: _r, historyAction: Tt, location: Ot, initialized: !0, navigation: IDLE_NAVIGATION, revalidation: "idle", restoreScrollPosition: ws(Ot, jt.matches || xt.matches), preventScrollReset: on, blockers: Ar }), { viewTransitionOpts: kr, flushSync: Lr === !0 }), Tt = Action.Pop, It = !1, qt = !1, Yt = !1, sr = !1, ur = [];
  }
  async function Wr(Ot, jt, Bt) {
    kt && kt.abort(), kt = null, Tt = Ot, Yt = (Bt && Bt.startUninterruptedRevalidation) === !0, function(er, Ir) {
      if (ct && yt) {
        let Rr = ho(er, Ir);
        ct[Rr] = yt();
      }
    }(xt.location, xt.matches), It = (Bt && Bt.preventScrollReset) === !0, qt = (Bt && Bt.enableViewTransition) === !0;
    let _e = tt || st, ir = Bt && Bt.overrideNavigation, Cr = Bt != null && Bt.initialHydration && xt.matches && xt.matches.length > 0 && !Pt ? xt.matches : matchRoutes(_e, jt, lt), Lr = (Bt && Bt.flushSync) === !0;
    if (Cr && xt.initialized && !sr && isHashChangeOnly(xt.location, jt) && !(Bt && Bt.submission && isMutationMethod(Bt.submission.formMethod))) return void Dr(jt, { matches: Cr }, { flushSync: Lr });
    let Or = Uo(Cr, _e, jt.pathname);
    if (Or.active && Or.matches && (Cr = Or.matches), !Cr) {
      let { error: er, notFoundMatches: Ir, route: Rr } = no(jt.pathname);
      return void Dr(jt, { matches: Ir, loaderData: {}, errors: { [Rr.id]: er } }, { flushSync: Lr });
    }
    kt = new AbortController();
    let _r, Ar = createClientSideRequest(o.history, jt, kt.signal, Bt && Bt.submission);
    if (Bt && Bt.pendingError) _r = [findNearestBoundary(Cr).route.id, { type: ResultType.error, error: Bt.pendingError }];
    else if (Bt && Bt.submission && isMutationMethod(Bt.submission.formMethod)) {
      let er = await async function(Ir, Rr, fn, un, Hn, tn) {
        tn === void 0 && (tn = {}), Dn();
        let Ur, vn = getSubmittingNavigation(Rr, fn);
        if (nr({ navigation: vn }, { flushSync: tn.flushSync === !0 }), Hn) {
          let jr = await qo(un, Rr.pathname, Ir.signal);
          if (jr.type === "aborted") return { shortCircuited: !0 };
          if (jr.type === "error") {
            let qr = findNearestBoundary(jr.partialMatches).route.id;
            return { matches: jr.partialMatches, pendingActionResult: [qr, { type: ResultType.error, error: jr.error }] };
          }
          if (!jr.matches) {
            let { notFoundMatches: qr, error: In, route: _a } = no(Rr.pathname);
            return { matches: qr, pendingActionResult: [_a.id, { type: ResultType.error, error: In }] };
          }
          un = jr.matches;
        }
        let cn = getTargetMatch(un, Rr);
        if (cn.route.action || cn.route.lazy) {
          if (Ur = (await fr("action", xt, Ir, [cn], un, null))[cn.route.id], Ir.signal.aborted) return { shortCircuited: !0 };
        } else Ur = { type: ResultType.error, error: getInternalRouterError(405, { method: Ir.method, pathname: Rr.pathname, routeId: cn.route.id }) };
        if (isRedirectResult(Ur)) {
          let jr;
          return tn && tn.replace != null ? jr = tn.replace : jr = normalizeRedirectLocation(Ur.response.headers.get("Location"), new URL(Ir.url), lt) === xt.location.pathname + xt.location.search, await Hr(Ir, Ur, !0, { submission: fn, replace: jr }), { shortCircuited: !0 };
        }
        if (isDeferredResult(Ur)) throw getInternalRouterError(400, { type: "defer-action" });
        if (isErrorResult(Ur)) {
          let jr = findNearestBoundary(un, cn.route.id);
          return (tn && tn.replace) !== !0 && (Tt = Action.Push), { matches: un, pendingActionResult: [jr.route.id, Ur] };
        }
        return { matches: un, pendingActionResult: [cn.route.id, Ur] };
      }(Ar, jt, Bt.submission, Cr, Or.active, { replace: Bt.replace, flushSync: Lr });
      if (er.shortCircuited) return;
      if (er.pendingActionResult) {
        let [Ir, Rr] = er.pendingActionResult;
        if (isErrorResult(Rr) && isRouteErrorResponse(Rr.error) && Rr.error.status === 404) return kt = null, void Dr(jt, { matches: er.matches, loaderData: {}, errors: { [Ir]: Rr.error } });
      }
      Cr = er.matches || Cr, _r = er.pendingActionResult, ir = getLoadingNavigation(jt, Bt.submission), Lr = !1, Or.active = !1, Ar = createClientSideRequest(o.history, Ar.url, Ar.signal);
    }
    let { shortCircuited: kr, matches: on, loaderData: rn, errors: Cn } = await async function(er, Ir, Rr, fn, un, Hn, tn, Ur, vn, cn, jr) {
      let qr = un || getLoadingNavigation(Ir, Hn), In = Hn || tn || getSubmissionFromNavigation(qr), _a = !(Yt || ht.v7_partialHydration && vn);
      if (fn) {
        if (_a) {
          let mr = zr(jr);
          nr(_extends$4({ navigation: qr }, mr !== void 0 ? { actionData: mr } : {}), { flushSync: cn });
        }
        let lr = await qo(Rr, Ir.pathname, er.signal);
        if (lr.type === "aborted") return { shortCircuited: !0 };
        if (lr.type === "error") {
          let mr = findNearestBoundary(lr.partialMatches).route.id;
          return { matches: lr.partialMatches, loaderData: {}, errors: { [mr]: lr.error } };
        }
        if (!lr.matches) {
          let { error: mr, notFoundMatches: $a, route: io } = no(Ir.pathname);
          return { matches: $a, loaderData: {}, errors: { [io.id]: mr } };
        }
        Rr = lr.matches;
      }
      let En = tt || st, [Qr, Ln] = getMatchesToLoad(o.history, xt, Rr, In, Ir, ht.v7_partialHydration && vn === !0, ht.v7_skipActionErrorRevalidation, sr, ur, Rt, Sr, dr, Pr, En, lt, jr);
      if (ao((lr) => !(Rr && Rr.some((mr) => mr.route.id === lr)) || Qr && Qr.some((mr) => mr.route.id === lr)), Zt = ++At, Qr.length === 0 && Ln.length === 0) {
        let lr = xn();
        return Dr(Ir, _extends$4({ matches: Rr, loaderData: {}, errors: jr && isErrorResult(jr[1]) ? { [jr[0]]: jr[1].error } : null }, getActionDataForCommit(jr), lr ? { fetchers: new Map(xt.fetchers) } : {}), { flushSync: cn }), { shortCircuited: !0 };
      }
      if (_a) {
        let lr = {};
        if (!fn) {
          lr.navigation = qr;
          let mr = zr(jr);
          mr !== void 0 && (lr.actionData = mr);
        }
        Ln.length > 0 && (lr.fetchers = function(mr) {
          return mr.forEach(($a) => {
            let io = xt.fetchers.get($a.key), Zr = getLoadingFetcher(void 0, io ? io.data : void 0);
            xt.fetchers.set($a.key, Zr);
          }), new Map(xt.fetchers);
        }(Ln)), nr(lr, { flushSync: cn });
      }
      Ln.forEach((lr) => {
        hn(lr.key), lr.controller && Ft.set(lr.key, lr.controller);
      });
      let So = () => Ln.forEach((lr) => hn(lr.key));
      kt && kt.signal.addEventListener("abort", So);
      let { loaderResults: Io, fetcherResults: xa } = await ba(xt, Rr, Qr, Ln, er);
      if (er.signal.aborted) return { shortCircuited: !0 };
      kt && kt.signal.removeEventListener("abort", So), Ln.forEach((lr) => Ft.delete(lr.key));
      let On = findRedirect(Io);
      if (On) return await Hr(er, On.result, !0, { replace: Ur }), { shortCircuited: !0 };
      if (On = findRedirect(xa), On) return Pr.add(On.key), await Hr(er, On.result, !0, { replace: Ur }), { shortCircuited: !0 };
      let { loaderData: cs, errors: Lo } = processLoaderData(xt, Rr, Io, jr, Ln, xa, Kt);
      Kt.forEach((lr, mr) => {
        lr.subscribe(($a) => {
          ($a || lr.done) && Kt.delete(mr);
        });
      }), ht.v7_partialHydration && vn && xt.errors && (Lo = _extends$4({}, xt.errors, Lo));
      let fo = xn(), Yo = zn(Zt), Ko = fo || Yo || Ln.length > 0;
      return _extends$4({ matches: Rr, loaderData: cs, errors: Lo }, Ko ? { fetchers: new Map(xt.fetchers) } : {});
    }(Ar, jt, Cr, Or.active, ir, Bt && Bt.submission, Bt && Bt.fetcherSubmission, Bt && Bt.replace, Bt && Bt.initialHydration === !0, Lr, _r);
    kr || (kt = null, Dr(jt, _extends$4({ matches: on || Cr }, getActionDataForCommit(_r), { loaderData: rn, errors: Cn })));
  }
  function zr(Ot) {
    return Ot && !isErrorResult(Ot[1]) ? { [Ot[0]]: Ot[1].data } : xt.actionData ? Object.keys(xt.actionData).length === 0 ? null : xt.actionData : void 0;
  }
  async function Hr(Ot, jt, Bt, _e) {
    let { submission: ir, fetcherSubmission: Cr, preventScrollReset: Lr, replace: Or } = _e === void 0 ? {} : _e;
    jt.response.headers.has("X-Remix-Revalidate") && (sr = !0);
    let _r = jt.response.headers.get("Location");
    invariant(_r, "Expected a Location header on the redirect Response"), _r = normalizeRedirectLocation(_r, new URL(Ot.url), lt);
    let Ar = createLocation(xt.location, _r, { _isRedirect: !0 });
    if (h) {
      let Ir = !1;
      if (jt.response.headers.has("X-Remix-Reload-Document")) Ir = !0;
      else if (ABSOLUTE_URL_REGEX$1.test(_r)) {
        const Rr = o.history.createURL(_r);
        Ir = Rr.origin !== s.location.origin || stripBasename(Rr.pathname, lt) == null;
      }
      if (Ir) return void (Or ? s.location.replace(_r) : s.location.assign(_r));
    }
    kt = null;
    let kr = Or === !0 || jt.response.headers.has("X-Remix-Replace") ? Action.Replace : Action.Push, { formMethod: on, formAction: rn, formEncType: Cn } = xt.navigation;
    !ir && !Cr && on && rn && Cn && (ir = getSubmissionFromNavigation(xt.navigation));
    let er = ir || Cr;
    if (redirectPreserveMethodStatusCodes.has(jt.response.status) && er && isMutationMethod(er.formMethod)) await Wr(kr, Ar, { submission: _extends$4({}, er, { formAction: _r }), preventScrollReset: Lr || It, enableViewTransition: Bt ? qt : void 0 });
    else {
      let Ir = getLoadingNavigation(Ar, ir);
      await Wr(kr, Ar, { overrideNavigation: Ir, fetcherSubmission: Cr, preventScrollReset: Lr || It, enableViewTransition: Bt ? qt : void 0 });
    }
  }
  async function fr(Ot, jt, Bt, _e, ir, Cr) {
    let Lr, Or = {};
    try {
      Lr = await callDataStrategyImpl(ot, Ot, jt, Bt, _e, ir, Cr, it, j);
    } catch (_r) {
      return _e.forEach((Ar) => {
        Or[Ar.route.id] = { type: ResultType.error, error: _r };
      }), Or;
    }
    for (let [_r, Ar] of Object.entries(Lr)) if (isRedirectDataStrategyResultResult(Ar)) {
      let kr = Ar.result;
      Or[_r] = { type: ResultType.redirect, response: normalizeRelativeRoutingRedirectResponse(kr, Bt, _r, ir, lt, ht.v7_relativeSplatPath) };
    } else Or[_r] = await convertDataStrategyResultToDataResult(Ar);
    return Or;
  }
  async function ba(Ot, jt, Bt, _e, ir) {
    let Cr = Ot.matches, Lr = fr("loader", Ot, ir, Bt, jt, null), Or = Promise.all(_e.map(async (kr) => {
      if (kr.matches && kr.match && kr.controller) {
        let on = (await fr("loader", Ot, createClientSideRequest(o.history, kr.path, kr.controller.signal), [kr.match], kr.matches, kr.key))[kr.match.route.id];
        return { [kr.key]: on };
      }
      return Promise.resolve({ [kr.key]: { type: ResultType.error, error: getInternalRouterError(404, { pathname: kr.path }) } });
    })), _r = await Lr, Ar = (await Or).reduce((kr, on) => Object.assign(kr, on), {});
    return await Promise.all([resolveNavigationDeferredResults(jt, _r, ir.signal, Cr, Ot.loaderData), resolveFetcherDeferredResults(jt, Ar, _e)]), { loaderResults: _r, fetcherResults: Ar };
  }
  function Dn() {
    sr = !0, ur.push(...ao()), dr.forEach((Ot, jt) => {
      Ft.has(jt) && Rt.add(jt), hn(jt);
    });
  }
  function yn(Ot, jt, Bt) {
    Bt === void 0 && (Bt = {}), xt.fetchers.set(Ot, jt), nr({ fetchers: new Map(xt.fetchers) }, { flushSync: (Bt && Bt.flushSync) === !0 });
  }
  function Xr(Ot, jt, Bt, _e) {
    _e === void 0 && (_e = {});
    let ir = findNearestBoundary(xt.matches, jt);
    an(Ot), nr({ errors: { [ir.route.id]: Bt }, fetchers: new Map(xt.fetchers) }, { flushSync: (_e && _e.flushSync) === !0 });
  }
  function Rn(Ot) {
    return Er.set(Ot, (Er.get(Ot) || 0) + 1), Sr.has(Ot) && Sr.delete(Ot), xt.fetchers.get(Ot) || IDLE_FETCHER;
  }
  function an(Ot) {
    let jt = xt.fetchers.get(Ot);
    !Ft.has(Ot) || jt && jt.state === "loading" && hr.has(Ot) || hn(Ot), dr.delete(Ot), hr.delete(Ot), Pr.delete(Ot), ht.v7_fetcherPersist && Sr.delete(Ot), Rt.delete(Ot), xt.fetchers.delete(Ot);
  }
  function hn(Ot) {
    let jt = Ft.get(Ot);
    jt && (jt.abort(), Ft.delete(Ot));
  }
  function Vn(Ot) {
    for (let jt of Ot) {
      let Bt = getDoneFetcher(Rn(jt).data);
      xt.fetchers.set(jt, Bt);
    }
  }
  function xn() {
    let Ot = [], jt = !1;
    for (let Bt of Pr) {
      let _e = xt.fetchers.get(Bt);
      invariant(_e, "Expected fetcher: " + Bt), _e.state === "loading" && (Pr.delete(Bt), Ot.push(Bt), jt = !0);
    }
    return Vn(Ot), jt;
  }
  function zn(Ot) {
    let jt = [];
    for (let [Bt, _e] of hr) if (_e < Ot) {
      let ir = xt.fetchers.get(Bt);
      invariant(ir, "Expected fetcher: " + Bt), ir.state === "loading" && (hn(Bt), hr.delete(Bt), jt.push(Bt));
    }
    return Vn(jt), jt.length > 0;
  }
  function Sn(Ot) {
    xt.blockers.delete(Ot), rr.delete(Ot);
  }
  function Fn(Ot, jt) {
    let Bt = xt.blockers.get(Ot) || IDLE_BLOCKER;
    invariant(Bt.state === "unblocked" && jt.state === "blocked" || Bt.state === "blocked" && jt.state === "blocked" || Bt.state === "blocked" && jt.state === "proceeding" || Bt.state === "blocked" && jt.state === "unblocked" || Bt.state === "proceeding" && jt.state === "unblocked", "Invalid blocker state transition: " + Bt.state + " -> " + jt.state);
    let _e = new Map(xt.blockers);
    _e.set(Ot, jt), nr({ blockers: _e });
  }
  function ro(Ot) {
    let { currentLocation: jt, nextLocation: Bt, historyAction: _e } = Ot;
    if (rr.size === 0) return;
    rr.size > 1 && warning$1(!1, "A router only supports one blocker at a time");
    let ir = Array.from(rr.entries()), [Cr, Lr] = ir[ir.length - 1], Or = xt.blockers.get(Cr);
    return Or && Or.state === "proceeding" ? void 0 : Lr({ currentLocation: jt, nextLocation: Bt, historyAction: _e }) ? Cr : void 0;
  }
  function no(Ot) {
    let jt = getInternalRouterError(404, { pathname: Ot }), Bt = tt || st, { matches: _e, route: ir } = getShortCircuitMatches(Bt);
    return ao(), { notFoundMatches: _e, route: ir, error: jt };
  }
  function ao(Ot) {
    let jt = [];
    return Kt.forEach((Bt, _e) => {
      Ot && !Ot(_e) || (Bt.cancel(), jt.push(_e), Kt.delete(_e));
    }), jt;
  }
  function ho(Ot, jt) {
    return mt && mt(Ot, jt.map((_e) => convertRouteMatchToUiMatch(_e, xt.loaderData))) || Ot.key;
  }
  function ws(Ot, jt) {
    if (ct) {
      let Bt = ho(Ot, jt), _e = ct[Bt];
      if (typeof _e == "number") return _e;
    }
    return null;
  }
  function Uo(Ot, jt, Bt) {
    if (ft) {
      if (!Ot)
        return { active: !0, matches: matchRoutesImpl(jt, Bt, lt, !0) || [] };
      if (Object.keys(Ot[0].params).length > 0)
        return { active: !0, matches: matchRoutesImpl(jt, Bt, lt, !0) };
    }
    return { active: !1, matches: null };
  }
  async function qo(Ot, jt, Bt, _e) {
    if (!ft) return { type: "success", matches: Ot };
    let ir = Ot;
    for (; ; ) {
      let Cr = tt == null, Lr = tt || st, Or = it;
      try {
        await ft({ signal: Bt, path: jt, matches: ir, fetcherKey: _e, patch: (kr, on) => {
          Bt.aborted || patchRoutesImpl(kr, on, Lr, Or, j);
        } });
      } catch (kr) {
        return { type: "error", error: kr, partialMatches: ir };
      } finally {
        Cr && !Bt.aborted && (st = [...st]);
      }
      if (Bt.aborted) return { type: "aborted" };
      let _r = matchRoutes(Lr, jt, lt);
      if (_r) return { type: "success", matches: _r };
      let Ar = matchRoutesImpl(Lr, jt, lt, !0);
      if (!Ar || ir.length === Ar.length && ir.every((kr, on) => kr.route.id === Ar[on].route.id)) return { type: "success", matches: null };
      ir = Ar;
    }
  }
  return at = { get basename() {
    return lt;
  }, get future() {
    return ht;
  }, get state() {
    return xt;
  }, get routes() {
    return st;
  }, get window() {
    return s;
  }, initialize: function() {
    if (pt = o.history.listen((Ot) => {
      let { action: jt, location: Bt, delta: _e } = Ot;
      if (wt) return wt(), void (wt = void 0);
      warning$1(rr.size === 0 || _e != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
      let ir = ro({ currentLocation: xt.location, nextLocation: Bt, historyAction: jt });
      if (ir && _e != null) {
        let Cr = new Promise((Lr) => {
          wt = Lr;
        });
        return o.history.go(-1 * _e), void Fn(ir, { state: "blocked", location: Bt, proceed() {
          Fn(ir, { state: "proceeding", proceed: void 0, reset: void 0, location: Bt }), Cr.then(() => o.history.go(_e));
        }, reset() {
          let Lr = new Map(xt.blockers);
          Lr.set(ir, IDLE_BLOCKER), nr({ blockers: Lr });
        } });
      }
      return Wr(jt, Bt);
    }), h) {
      restoreAppliedTransitions(s, Wt);
      let Ot = () => persistAppliedTransitions(s, Wt);
      s.addEventListener("pagehide", Ot), Nt = () => s.removeEventListener("pagehide", Ot);
    }
    return xt.initialized || Wr(Action.Pop, xt.location, { initialHydration: !0 }), at;
  }, subscribe: function(Ot) {
    return dt.add(Ot), () => dt.delete(Ot);
  }, enableScrollRestoration: function(Ot, jt, Bt) {
    if (ct = Ot, yt = jt, mt = Bt || null, !vt && xt.navigation === IDLE_NAVIGATION) {
      vt = !0;
      let _e = ws(xt.location, xt.matches);
      _e != null && nr({ restoreScrollPosition: _e });
    }
    return () => {
      ct = null, yt = null, mt = null;
    };
  }, navigate: async function Ot(jt, Bt) {
    if (typeof jt == "number") return void o.history.go(jt);
    let _e = normalizeTo(xt.location, xt.matches, lt, ht.v7_prependBasename, jt, ht.v7_relativeSplatPath, Bt == null ? void 0 : Bt.fromRouteId, Bt == null ? void 0 : Bt.relative), { path: ir, submission: Cr, error: Lr } = normalizeNavigateOptions(ht.v7_normalizeFormMethod, !1, _e, Bt), Or = xt.location, _r = createLocation(xt.location, ir, Bt && Bt.state);
    _r = _extends$4({}, _r, o.history.encodeLocation(_r));
    let Ar = Bt && Bt.replace != null ? Bt.replace : void 0, kr = Action.Push;
    Ar === !0 ? kr = Action.Replace : Ar === !1 || Cr != null && isMutationMethod(Cr.formMethod) && Cr.formAction === xt.location.pathname + xt.location.search && (kr = Action.Replace);
    let on = Bt && "preventScrollReset" in Bt ? Bt.preventScrollReset === !0 : void 0, rn = (Bt && Bt.flushSync) === !0, Cn = ro({ currentLocation: Or, nextLocation: _r, historyAction: kr });
    if (!Cn) return await Wr(kr, _r, { submission: Cr, pendingError: Lr, preventScrollReset: on, replace: Bt && Bt.replace, enableViewTransition: Bt && Bt.viewTransition, flushSync: rn });
    Fn(Cn, { state: "blocked", location: _r, proceed() {
      Fn(Cn, { state: "proceeding", proceed: void 0, reset: void 0, location: _r }), Ot(jt, Bt);
    }, reset() {
      let er = new Map(xt.blockers);
      er.set(Cn, IDLE_BLOCKER), nr({ blockers: er });
    } });
  }, fetch: function(Ot, jt, Bt, _e) {
    if (g) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
    hn(Ot);
    let ir = (_e && _e.flushSync) === !0, Cr = tt || st, Lr = normalizeTo(xt.location, xt.matches, lt, ht.v7_prependBasename, Bt, ht.v7_relativeSplatPath, jt, _e == null ? void 0 : _e.relative), Or = matchRoutes(Cr, Lr, lt), _r = Uo(Or, Cr, Lr);
    if (_r.active && _r.matches && (Or = _r.matches), !Or) return void Xr(Ot, jt, getInternalRouterError(404, { pathname: Lr }), { flushSync: ir });
    let { path: Ar, submission: kr, error: on } = normalizeNavigateOptions(ht.v7_normalizeFormMethod, !0, Lr, _e);
    if (on) return void Xr(Ot, jt, on, { flushSync: ir });
    let rn = getTargetMatch(Or, Ar), Cn = (_e && _e.preventScrollReset) === !0;
    kr && isMutationMethod(kr.formMethod) ? async function(er, Ir, Rr, fn, un, Hn, tn, Ur, vn) {
      function cn(Zr) {
        if (!Zr.route.action && !Zr.route.lazy) {
          let po = getInternalRouterError(405, { method: vn.formMethod, pathname: Rr, routeId: Ir });
          return Xr(er, Ir, po, { flushSync: tn }), !0;
        }
        return !1;
      }
      if (Dn(), dr.delete(er), !Hn && cn(fn)) return;
      let jr = xt.fetchers.get(er);
      yn(er, getSubmittingFetcher(vn, jr), { flushSync: tn });
      let qr = new AbortController(), In = createClientSideRequest(o.history, Rr, qr.signal, vn);
      if (Hn) {
        let Zr = await qo(un, new URL(In.url).pathname, In.signal, er);
        if (Zr.type === "aborted") return;
        if (Zr.type === "error") return void Xr(er, Ir, Zr.error, { flushSync: tn });
        if (!Zr.matches) return void Xr(er, Ir, getInternalRouterError(404, { pathname: Rr }), { flushSync: tn });
        if (cn(fn = getTargetMatch(un = Zr.matches, Rr))) return;
      }
      Ft.set(er, qr);
      let _a = At, En = await fr("action", xt, In, [fn], un, er), Qr = En[fn.route.id];
      if (In.signal.aborted) return void (Ft.get(er) === qr && Ft.delete(er));
      if (ht.v7_fetcherPersist && Sr.has(er)) {
        if (isRedirectResult(Qr) || isErrorResult(Qr)) return void yn(er, getDoneFetcher(void 0));
      } else {
        if (isRedirectResult(Qr)) return Ft.delete(er), Zt > _a ? void yn(er, getDoneFetcher(void 0)) : (Pr.add(er), yn(er, getLoadingFetcher(vn)), Hr(In, Qr, !1, { fetcherSubmission: vn, preventScrollReset: Ur }));
        if (isErrorResult(Qr)) return void Xr(er, Ir, Qr.error);
      }
      if (isDeferredResult(Qr)) throw getInternalRouterError(400, { type: "defer-action" });
      let Ln = xt.navigation.location || xt.location, So = createClientSideRequest(o.history, Ln, qr.signal), Io = tt || st, xa = xt.navigation.state !== "idle" ? matchRoutes(Io, xt.navigation.location, lt) : xt.matches;
      invariant(xa, "Didn't find any matches after fetcher action");
      let On = ++At;
      hr.set(er, On);
      let cs = getLoadingFetcher(vn, Qr.data);
      xt.fetchers.set(er, cs);
      let [Lo, fo] = getMatchesToLoad(o.history, xt, xa, vn, Ln, !1, ht.v7_skipActionErrorRevalidation, sr, ur, Rt, Sr, dr, Pr, Io, lt, [fn.route.id, Qr]);
      fo.filter((Zr) => Zr.key !== er).forEach((Zr) => {
        let po = Zr.key, Ps = xt.fetchers.get(po), pn = getLoadingFetcher(void 0, Ps ? Ps.data : void 0);
        xt.fetchers.set(po, pn), hn(po), Zr.controller && Ft.set(po, Zr.controller);
      }), nr({ fetchers: new Map(xt.fetchers) });
      let Yo = () => fo.forEach((Zr) => hn(Zr.key));
      qr.signal.addEventListener("abort", Yo);
      let { loaderResults: Ko, fetcherResults: lr } = await ba(xt, xa, Lo, fo, So);
      if (qr.signal.aborted) return;
      qr.signal.removeEventListener("abort", Yo), hr.delete(er), Ft.delete(er), fo.forEach((Zr) => Ft.delete(Zr.key));
      let mr = findRedirect(Ko);
      if (mr) return Hr(So, mr.result, !1, { preventScrollReset: Ur });
      if (mr = findRedirect(lr), mr) return Pr.add(mr.key), Hr(So, mr.result, !1, { preventScrollReset: Ur });
      let { loaderData: $a, errors: io } = processLoaderData(xt, xa, Ko, void 0, fo, lr, Kt);
      if (xt.fetchers.has(er)) {
        let Zr = getDoneFetcher(Qr.data);
        xt.fetchers.set(er, Zr);
      }
      zn(On), xt.navigation.state === "loading" && On > Zt ? (invariant(Tt, "Expected pending action"), kt && kt.abort(), Dr(xt.navigation.location, { matches: xa, loaderData: $a, errors: io, fetchers: new Map(xt.fetchers) })) : (nr({ errors: io, loaderData: mergeLoaderData(xt.loaderData, $a, xa, io), fetchers: new Map(xt.fetchers) }), sr = !1);
    }(Ot, jt, Ar, rn, Or, _r.active, ir, Cn, kr) : (dr.set(Ot, { routeId: jt, path: Ar }), async function(er, Ir, Rr, fn, un, Hn, tn, Ur, vn) {
      let cn = xt.fetchers.get(er);
      yn(er, getLoadingFetcher(vn, cn ? cn.data : void 0), { flushSync: tn });
      let jr = new AbortController(), qr = createClientSideRequest(o.history, Rr, jr.signal);
      if (Hn) {
        let Qr = await qo(un, new URL(qr.url).pathname, qr.signal, er);
        if (Qr.type === "aborted") return;
        if (Qr.type === "error") return void Xr(er, Ir, Qr.error, { flushSync: tn });
        if (!Qr.matches) return void Xr(er, Ir, getInternalRouterError(404, { pathname: Rr }), { flushSync: tn });
        fn = getTargetMatch(un = Qr.matches, Rr);
      }
      Ft.set(er, jr);
      let In = At, _a = await fr("loader", xt, qr, [fn], un, er), En = _a[fn.route.id];
      if (isDeferredResult(En) && (En = await resolveDeferredData(En, qr.signal, !0) || En), Ft.get(er) === jr && Ft.delete(er), !qr.signal.aborted) {
        if (Sr.has(er)) return void yn(er, getDoneFetcher(void 0));
        if (isRedirectResult(En)) return Zt > In ? void yn(er, getDoneFetcher(void 0)) : (Pr.add(er), void await Hr(qr, En, !1, { preventScrollReset: Ur }));
        if (isErrorResult(En)) return void Xr(er, Ir, En.error);
        invariant(!isDeferredResult(En), "Unhandled fetcher deferred data"), yn(er, getDoneFetcher(En.data));
      }
    }(Ot, jt, Ar, rn, Or, _r.active, ir, Cn, kr));
  }, revalidate: function() {
    Dn(), nr({ revalidation: "loading" }), xt.navigation.state !== "submitting" && (xt.navigation.state !== "idle" ? Wr(Tt || xt.historyAction, xt.navigation.location, { overrideNavigation: xt.navigation, enableViewTransition: qt === !0 }) : Wr(xt.historyAction, xt.location, { startUninterruptedRevalidation: !0 }));
  }, createHref: (Ot) => o.history.createHref(Ot), encodeLocation: (Ot) => o.history.encodeLocation(Ot), getFetcher: Rn, deleteFetcher: function(Ot) {
    let jt = (Er.get(Ot) || 0) - 1;
    jt <= 0 ? (Er.delete(Ot), Sr.add(Ot), ht.v7_fetcherPersist || an(Ot)) : Er.set(Ot, jt), nr({ fetchers: new Map(xt.fetchers) });
  }, dispose: function() {
    pt && pt(), Nt && Nt(), dt.clear(), kt && kt.abort(), xt.fetchers.forEach((Ot, jt) => an(jt)), xt.blockers.forEach((Ot, jt) => Sn(jt));
  }, getBlocker: function(Ot, jt) {
    let Bt = xt.blockers.get(Ot) || IDLE_BLOCKER;
    return rr.get(Ot) !== jt && rr.set(Ot, jt), Bt;
  }, deleteBlocker: Sn, patchRoutes: function(Ot, jt) {
    let Bt = tt == null;
    patchRoutesImpl(Ot, jt, tt || st, it, j), Bt && (st = [...st], nr({}));
  }, _internalFetchControllers: Ft, _internalActiveDeferreds: Kt, _internalSetRoutes: function(Ot) {
    it = {}, tt = convertRoutesToDataRoutes(Ot, j, void 0, it);
  } }, at;
}
function isSubmissionNavigation(o) {
  return o != null && ("formData" in o && o.formData != null || "body" in o && o.body !== void 0);
}
function normalizeTo(o, s, h, g, j, tt, rt, at) {
  let it, st;
  if (rt) {
    it = [];
    for (let ot of s) if (it.push(ot), ot.route.id === rt) {
      st = ot;
      break;
    }
  } else it = s, st = s[s.length - 1];
  let lt = resolveTo(j || ".", getResolveToMatches(it, tt), stripBasename(o.pathname, h) || o.pathname, at === "path");
  if (j == null && (lt.search = o.search, lt.hash = o.hash), (j == null || j === "" || j === ".") && st) {
    let ot = hasNakedIndexQuery(lt.search);
    if (st.route.index && !ot) lt.search = lt.search ? lt.search.replace(/^\?/, "?index&") : "?index";
    else if (!st.route.index && ot) {
      let ft = new URLSearchParams(lt.search), ht = ft.getAll("index");
      ft.delete("index"), ht.filter((dt) => dt).forEach((dt) => ft.append("index", dt));
      let pt = ft.toString();
      lt.search = pt ? "?" + pt : "";
    }
  }
  return g && h !== "/" && (lt.pathname = lt.pathname === "/" ? h : joinPaths([h, lt.pathname])), createPath(lt);
}
function normalizeNavigateOptions(o, s, h, g) {
  if (!g || !isSubmissionNavigation(g)) return { path: h };
  if (g.formMethod && !isValidMethod(g.formMethod)) return { path: h, error: getInternalRouterError(405, { method: g.formMethod }) };
  let j, tt, rt = () => ({ path: h, error: getInternalRouterError(400, { type: "invalid-body" }) }), at = g.formMethod || "get", it = o ? at.toUpperCase() : at.toLowerCase(), st = stripHashFromPath(h);
  if (g.body !== void 0) {
    if (g.formEncType === "text/plain") {
      if (!isMutationMethod(it)) return rt();
      let ft = typeof g.body == "string" ? g.body : g.body instanceof FormData || g.body instanceof URLSearchParams ? Array.from(g.body.entries()).reduce((ht, pt) => {
        let [dt, ct] = pt;
        return "" + ht + dt + "=" + ct + `
`;
      }, "") : String(g.body);
      return { path: h, submission: { formMethod: it, formAction: st, formEncType: g.formEncType, formData: void 0, json: void 0, text: ft } };
    }
    if (g.formEncType === "application/json") {
      if (!isMutationMethod(it)) return rt();
      try {
        let ft = typeof g.body == "string" ? JSON.parse(g.body) : g.body;
        return { path: h, submission: { formMethod: it, formAction: st, formEncType: g.formEncType, formData: void 0, json: ft, text: void 0 } };
      } catch {
        return rt();
      }
    }
  }
  if (invariant(typeof FormData == "function", "FormData is not available in this environment"), g.formData) j = convertFormDataToSearchParams(g.formData), tt = g.formData;
  else if (g.body instanceof FormData) j = convertFormDataToSearchParams(g.body), tt = g.body;
  else if (g.body instanceof URLSearchParams) j = g.body, tt = convertSearchParamsToFormData(j);
  else if (g.body == null) j = new URLSearchParams(), tt = new FormData();
  else try {
    j = new URLSearchParams(g.body), tt = convertSearchParamsToFormData(j);
  } catch {
    return rt();
  }
  let lt = { formMethod: it, formAction: st, formEncType: g && g.formEncType || "application/x-www-form-urlencoded", formData: tt, json: void 0, text: void 0 };
  if (isMutationMethod(lt.formMethod)) return { path: h, submission: lt };
  let ot = parsePath(h);
  return s && ot.search && hasNakedIndexQuery(ot.search) && j.append("index", ""), ot.search = "?" + j, { path: createPath(ot), submission: lt };
}
function getLoaderMatchesUntilBoundary(o, s, h) {
  h === void 0 && (h = !1);
  let g = o.findIndex((j) => j.route.id === s);
  return g >= 0 ? o.slice(0, h ? g + 1 : g) : o;
}
function getMatchesToLoad(o, s, h, g, j, tt, rt, at, it, st, lt, ot, ft, ht, pt, dt) {
  let ct = dt ? isErrorResult(dt[1]) ? dt[1].error : dt[1].data : void 0, mt = o.createURL(s.location), yt = o.createURL(j), vt = h;
  tt && s.errors ? vt = getLoaderMatchesUntilBoundary(h, Object.keys(s.errors)[0], !0) : dt && isErrorResult(dt[1]) && (vt = getLoaderMatchesUntilBoundary(h, dt[0]));
  let _t = dt ? dt[1].statusCode : void 0, Pt = rt && _t && _t >= 400, bt = vt.filter((wt, xt) => {
    let { route: Tt } = wt;
    if (Tt.lazy) return !0;
    if (Tt.loader == null) return !1;
    if (tt) return shouldLoadRouteOnHydration(Tt, s.loaderData, s.errors);
    if (isNewLoader(s.loaderData, s.matches[xt], wt) || it.some((Wt) => Wt === wt.route.id)) return !0;
    let It = s.matches[xt], qt = wt;
    return shouldRevalidateLoader(wt, _extends$4({ currentUrl: mt, currentParams: It.params, nextUrl: yt, nextParams: qt.params }, g, { actionResult: ct, actionStatus: _t, defaultShouldRevalidate: !Pt && (at || mt.pathname + mt.search === yt.pathname + yt.search || mt.search !== yt.search || isNewRouteInstance(It, qt)) }));
  }), kt = [];
  return ot.forEach((wt, xt) => {
    if (tt || !h.some((Nt) => Nt.route.id === wt.routeId) || lt.has(xt)) return;
    let Tt = matchRoutes(ht, wt.path, pt);
    if (!Tt) return void kt.push({ key: xt, routeId: wt.routeId, path: wt.path, matches: null, match: null, controller: null });
    let It = s.fetchers.get(xt), qt = getTargetMatch(Tt, wt.path), Wt = !1;
    ft.has(xt) ? Wt = !1 : st.has(xt) ? (st.delete(xt), Wt = !0) : Wt = It && It.state !== "idle" && It.data === void 0 ? at : shouldRevalidateLoader(qt, _extends$4({ currentUrl: mt, currentParams: s.matches[s.matches.length - 1].params, nextUrl: yt, nextParams: h[h.length - 1].params }, g, { actionResult: ct, actionStatus: _t, defaultShouldRevalidate: !Pt && at })), Wt && kt.push({ key: xt, routeId: wt.routeId, path: wt.path, matches: Tt, match: qt, controller: new AbortController() });
  }), [bt, kt];
}
function shouldLoadRouteOnHydration(o, s, h) {
  if (o.lazy) return !0;
  if (!o.loader) return !1;
  let g = s != null && s[o.id] !== void 0, j = h != null && h[o.id] !== void 0;
  return !(!g && j) && (typeof o.loader == "function" && o.loader.hydrate === !0 || !g && !j);
}
function isNewLoader(o, s, h) {
  let g = !s || h.route.id !== s.route.id, j = o[h.route.id] === void 0;
  return g || j;
}
function isNewRouteInstance(o, s) {
  let h = o.route.path;
  return o.pathname !== s.pathname || h != null && h.endsWith("*") && o.params["*"] !== s.params["*"];
}
function shouldRevalidateLoader(o, s) {
  if (o.route.shouldRevalidate) {
    let h = o.route.shouldRevalidate(s);
    if (typeof h == "boolean") return h;
  }
  return s.defaultShouldRevalidate;
}
function patchRoutesImpl(o, s, h, g, j) {
  var tt;
  let rt;
  if (o) {
    let it = g[o];
    invariant(it, "No route found to patch children into: routeId = " + o), it.children || (it.children = []), rt = it.children;
  } else rt = h;
  let at = convertRoutesToDataRoutes(s.filter((it) => !rt.some((st) => isSameRoute(it, st))), j, [o || "_", "patch", String(((tt = rt) == null ? void 0 : tt.length) || "0")], g);
  rt.push(...at);
}
function isSameRoute(o, s) {
  return "id" in o && "id" in s && o.id === s.id || o.index === s.index && o.path === s.path && o.caseSensitive === s.caseSensitive && (!(o.children && o.children.length !== 0 || s.children && s.children.length !== 0) || o.children.every((h, g) => {
    var j;
    return (j = s.children) == null ? void 0 : j.some((tt) => isSameRoute(h, tt));
  }));
}
async function loadLazyRouteModule(o, s, h) {
  if (!o.lazy) return;
  let g = await o.lazy();
  if (!o.lazy) return;
  let j = h[o.id];
  invariant(j, "No route found in manifest");
  let tt = {};
  for (let rt in g) {
    let at = j[rt] !== void 0 && rt !== "hasErrorBoundary";
    warning$1(!at, 'Route "' + j.id + '" has a static property "' + rt + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + rt + '" will be ignored.'), at || immutableRouteKeys.has(rt) || (tt[rt] = g[rt]);
  }
  Object.assign(j, tt), Object.assign(j, _extends$4({}, s(j), { lazy: void 0 }));
}
async function defaultDataStrategy(o) {
  let { matches: s } = o, h = s.filter((j) => j.shouldLoad);
  return (await Promise.all(h.map((j) => j.resolve()))).reduce((j, tt, rt) => Object.assign(j, { [h[rt].route.id]: tt }), {});
}
async function callDataStrategyImpl(o, s, h, g, j, tt, rt, at, it, st) {
  let lt = tt.map((ht) => ht.route.lazy ? loadLazyRouteModule(ht.route, it, at) : void 0), ot = tt.map((ht, pt) => {
    let dt = lt[pt], ct = j.some((mt) => mt.route.id === ht.route.id);
    return _extends$4({}, ht, { shouldLoad: ct, resolve: async (mt) => (mt && g.method === "GET" && (ht.route.lazy || ht.route.loader) && (ct = !0), ct ? callLoaderOrAction(s, g, ht, dt, mt, st) : Promise.resolve({ type: ResultType.data, result: void 0 })) });
  }), ft = await o({ matches: ot, request: g, params: tt[0].params, fetcherKey: rt, context: st });
  try {
    await Promise.all(lt);
  } catch {
  }
  return ft;
}
async function callLoaderOrAction(o, s, h, g, j, tt) {
  let rt, at, it = (st) => {
    let lt, ot = new Promise((pt, dt) => lt = dt);
    at = () => lt(), s.signal.addEventListener("abort", at);
    let ft = (pt) => typeof st != "function" ? Promise.reject(new Error('You cannot call the handler for a route which defines a boolean "' + o + '" [routeId: ' + h.route.id + "]")) : st({ request: s, params: h.params, context: tt }, ...pt !== void 0 ? [pt] : []), ht = (async () => {
      try {
        return { type: "data", result: await (j ? j((pt) => ft(pt)) : ft()) };
      } catch (pt) {
        return { type: "error", result: pt };
      }
    })();
    return Promise.race([ht, ot]);
  };
  try {
    let st = h.route[o];
    if (g) if (st) {
      let lt, [ot] = await Promise.all([it(st).catch((ft) => {
        lt = ft;
      }), g]);
      if (lt !== void 0) throw lt;
      rt = ot;
    } else {
      if (await g, st = h.route[o], !st) {
        if (o === "action") {
          let lt = new URL(s.url), ot = lt.pathname + lt.search;
          throw getInternalRouterError(405, { method: s.method, pathname: ot, routeId: h.route.id });
        }
        return { type: ResultType.data, result: void 0 };
      }
      rt = await it(st);
    }
    else {
      if (!st) {
        let lt = new URL(s.url);
        throw getInternalRouterError(404, { pathname: lt.pathname + lt.search });
      }
      rt = await it(st);
    }
    invariant(rt.result !== void 0, "You defined " + (o === "action" ? "an action" : "a loader") + ' for route "' + h.route.id + "\" but didn't return anything from your `" + o + "` function. Please return a value or `null`.");
  } catch (st) {
    return { type: ResultType.error, result: st };
  } finally {
    at && s.signal.removeEventListener("abort", at);
  }
  return rt;
}
async function convertDataStrategyResultToDataResult(o) {
  let { result: s, type: h } = o;
  if (isResponse(s)) {
    let ot;
    try {
      let ft = s.headers.get("Content-Type");
      ot = ft && /\bapplication\/json\b/.test(ft) ? s.body == null ? null : await s.json() : await s.text();
    } catch (ft) {
      return { type: ResultType.error, error: ft };
    }
    return h === ResultType.error ? { type: ResultType.error, error: new ErrorResponseImpl(s.status, s.statusText, ot), statusCode: s.status, headers: s.headers } : { type: ResultType.data, data: ot, statusCode: s.status, headers: s.headers };
  }
  var g, j, tt, rt, at, it, st, lt;
  return h === ResultType.error ? isDataWithResponseInit(s) ? s.data instanceof Error ? { type: ResultType.error, error: s.data, statusCode: (tt = s.init) == null ? void 0 : tt.status, headers: (rt = s.init) != null && rt.headers ? new Headers(s.init.headers) : void 0 } : { type: ResultType.error, error: new ErrorResponseImpl(((g = s.init) == null ? void 0 : g.status) || 500, void 0, s.data), statusCode: isRouteErrorResponse(s) ? s.status : void 0, headers: (j = s.init) != null && j.headers ? new Headers(s.init.headers) : void 0 } : { type: ResultType.error, error: s, statusCode: isRouteErrorResponse(s) ? s.status : void 0 } : isDeferredData(s) ? { type: ResultType.deferred, deferredData: s, statusCode: (at = s.init) == null ? void 0 : at.status, headers: ((it = s.init) == null ? void 0 : it.headers) && new Headers(s.init.headers) } : isDataWithResponseInit(s) ? { type: ResultType.data, data: s.data, statusCode: (st = s.init) == null ? void 0 : st.status, headers: (lt = s.init) != null && lt.headers ? new Headers(s.init.headers) : void 0 } : { type: ResultType.data, data: s };
}
function normalizeRelativeRoutingRedirectResponse(o, s, h, g, j, tt) {
  let rt = o.headers.get("Location");
  if (invariant(rt, "Redirects returned/thrown from loaders/actions must have a Location header"), !ABSOLUTE_URL_REGEX$1.test(rt)) {
    let at = g.slice(0, g.findIndex((it) => it.route.id === h) + 1);
    rt = normalizeTo(new URL(s.url), at, j, !0, rt, tt), o.headers.set("Location", rt);
  }
  return o;
}
function normalizeRedirectLocation(o, s, h) {
  if (ABSOLUTE_URL_REGEX$1.test(o)) {
    let g = o, j = g.startsWith("//") ? new URL(s.protocol + g) : new URL(g), tt = stripBasename(j.pathname, h) != null;
    if (j.origin === s.origin && tt) return j.pathname + j.search + j.hash;
  }
  return o;
}
function createClientSideRequest(o, s, h, g) {
  let j = o.createURL(stripHashFromPath(s)).toString(), tt = { signal: h };
  if (g && isMutationMethod(g.formMethod)) {
    let { formMethod: rt, formEncType: at } = g;
    tt.method = rt.toUpperCase(), at === "application/json" ? (tt.headers = new Headers({ "Content-Type": at }), tt.body = JSON.stringify(g.json)) : at === "text/plain" ? tt.body = g.text : at === "application/x-www-form-urlencoded" && g.formData ? tt.body = convertFormDataToSearchParams(g.formData) : tt.body = g.formData;
  }
  return new Request(j, tt);
}
function convertFormDataToSearchParams(o) {
  let s = new URLSearchParams();
  for (let [h, g] of o.entries()) s.append(h, typeof g == "string" ? g : g.name);
  return s;
}
function convertSearchParamsToFormData(o) {
  let s = new FormData();
  for (let [h, g] of o.entries()) s.append(h, g);
  return s;
}
function processRouteLoaderData(o, s, h, g, j) {
  let tt, rt = {}, at = null, it = !1, st = {}, lt = h && isErrorResult(h[1]) ? h[1].error : void 0;
  return o.forEach((ot) => {
    if (!(ot.route.id in s)) return;
    let ft = ot.route.id, ht = s[ft];
    if (invariant(!isRedirectResult(ht), "Cannot handle redirect results in processLoaderData"), isErrorResult(ht)) {
      let pt = ht.error;
      lt !== void 0 && (pt = lt, lt = void 0), at = at || {};
      {
        let dt = findNearestBoundary(o, ft);
        at[dt.route.id] == null && (at[dt.route.id] = pt);
      }
      rt[ft] = void 0, it || (it = !0, tt = isRouteErrorResponse(ht.error) ? ht.error.status : 500), ht.headers && (st[ft] = ht.headers);
    } else isDeferredResult(ht) ? (g.set(ft, ht.deferredData), rt[ft] = ht.deferredData.data, ht.statusCode == null || ht.statusCode === 200 || it || (tt = ht.statusCode), ht.headers && (st[ft] = ht.headers)) : (rt[ft] = ht.data, ht.statusCode && ht.statusCode !== 200 && !it && (tt = ht.statusCode), ht.headers && (st[ft] = ht.headers));
  }), lt !== void 0 && h && (at = { [h[0]]: lt }, rt[h[0]] = void 0), { loaderData: rt, errors: at, statusCode: tt || 200, loaderHeaders: st };
}
function processLoaderData(o, s, h, g, j, tt, rt) {
  let { loaderData: at, errors: it } = processRouteLoaderData(s, h, g, rt);
  return j.forEach((st) => {
    let { key: lt, match: ot, controller: ft } = st, ht = tt[lt];
    if (invariant(ht, "Did not find corresponding fetcher result"), !ft || !ft.signal.aborted) if (isErrorResult(ht)) {
      let pt = findNearestBoundary(o.matches, ot == null ? void 0 : ot.route.id);
      it && it[pt.route.id] || (it = _extends$4({}, it, { [pt.route.id]: ht.error })), o.fetchers.delete(lt);
    } else if (isRedirectResult(ht)) invariant(!1, "Unhandled fetcher revalidation redirect");
    else if (isDeferredResult(ht)) invariant(!1, "Unhandled fetcher deferred data");
    else {
      let pt = getDoneFetcher(ht.data);
      o.fetchers.set(lt, pt);
    }
  }), { loaderData: at, errors: it };
}
function mergeLoaderData(o, s, h, g) {
  let j = _extends$4({}, s);
  for (let tt of h) {
    let rt = tt.route.id;
    if (s.hasOwnProperty(rt) ? s[rt] !== void 0 && (j[rt] = s[rt]) : o[rt] !== void 0 && tt.route.loader && (j[rt] = o[rt]), g && g.hasOwnProperty(rt)) break;
  }
  return j;
}
function getActionDataForCommit(o) {
  return o ? isErrorResult(o[1]) ? { actionData: {} } : { actionData: { [o[0]]: o[1].data } } : {};
}
function findNearestBoundary(o, s) {
  return (s ? o.slice(0, o.findIndex((g) => g.route.id === s) + 1) : [...o]).reverse().find((g) => g.route.hasErrorBoundary === !0) || o[0];
}
function getShortCircuitMatches(o) {
  let s = o.length === 1 ? o[0] : o.find((h) => h.index || !h.path || h.path === "/") || { id: "__shim-error-route__" };
  return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: s }], route: s };
}
function getInternalRouterError(o, s) {
  let { pathname: h, routeId: g, method: j, type: tt, message: rt } = s === void 0 ? {} : s, at = "Unknown Server Error", it = "Unknown @remix-run/router error";
  return o === 400 ? (at = "Bad Request", j && h && g ? it = "You made a " + j + ' request to "' + h + '" but did not provide a `loader` for route "' + g + '", so there is no way to handle the request.' : tt === "defer-action" ? it = "defer() is not supported in actions" : tt === "invalid-body" && (it = "Unable to encode submission body")) : o === 403 ? (at = "Forbidden", it = 'Route "' + g + '" does not match URL "' + h + '"') : o === 404 ? (at = "Not Found", it = 'No route matches URL "' + h + '"') : o === 405 && (at = "Method Not Allowed", j && h && g ? it = "You made a " + j.toUpperCase() + ' request to "' + h + '" but did not provide an `action` for route "' + g + '", so there is no way to handle the request.' : j && (it = 'Invalid request method "' + j.toUpperCase() + '"')), new ErrorResponseImpl(o || 500, at, new Error(it), !0);
}
function findRedirect(o) {
  let s = Object.entries(o);
  for (let h = s.length - 1; h >= 0; h--) {
    let [g, j] = s[h];
    if (isRedirectResult(j)) return { key: g, result: j };
  }
}
function stripHashFromPath(o) {
  return createPath(_extends$4({}, typeof o == "string" ? parsePath(o) : o, { hash: "" }));
}
function isHashChangeOnly(o, s) {
  return o.pathname === s.pathname && o.search === s.search && (o.hash === "" ? s.hash !== "" : o.hash === s.hash || s.hash !== "");
}
function isRedirectDataStrategyResultResult(o) {
  return isResponse(o.result) && redirectStatusCodes.has(o.result.status);
}
function isDeferredResult(o) {
  return o.type === ResultType.deferred;
}
function isErrorResult(o) {
  return o.type === ResultType.error;
}
function isRedirectResult(o) {
  return (o && o.type) === ResultType.redirect;
}
function isDataWithResponseInit(o) {
  return typeof o == "object" && o != null && "type" in o && "data" in o && "init" in o && o.type === "DataWithResponseInit";
}
function isDeferredData(o) {
  let s = o;
  return s && typeof s == "object" && typeof s.data == "object" && typeof s.subscribe == "function" && typeof s.cancel == "function" && typeof s.resolveData == "function";
}
function isResponse(o) {
  return o != null && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.headers == "object" && o.body !== void 0;
}
function isValidMethod(o) {
  return validRequestMethods.has(o.toLowerCase());
}
function isMutationMethod(o) {
  return validMutationMethods.has(o.toLowerCase());
}
async function resolveNavigationDeferredResults(o, s, h, g, j) {
  let tt = Object.entries(s);
  for (let rt = 0; rt < tt.length; rt++) {
    let [at, it] = tt[rt], st = o.find((ft) => (ft == null ? void 0 : ft.route.id) === at);
    if (!st) continue;
    let lt = g.find((ft) => ft.route.id === st.route.id), ot = lt != null && !isNewRouteInstance(lt, st) && (j && j[st.route.id]) !== void 0;
    isDeferredResult(it) && ot && await resolveDeferredData(it, h, !1).then((ft) => {
      ft && (s[at] = ft);
    });
  }
}
async function resolveFetcherDeferredResults(o, s, h) {
  for (let g = 0; g < h.length; g++) {
    let { key: j, routeId: tt, controller: rt } = h[g], at = s[j];
    o.find((st) => (st == null ? void 0 : st.route.id) === tt) && isDeferredResult(at) && (invariant(rt, "Expected an AbortController for revalidating fetcher deferred result"), await resolveDeferredData(at, rt.signal, !0).then((st) => {
      st && (s[j] = st);
    }));
  }
}
async function resolveDeferredData(o, s, h) {
  if (h === void 0 && (h = !1), !await o.deferredData.resolveData(s)) {
    if (h) try {
      return { type: ResultType.data, data: o.deferredData.unwrappedData };
    } catch (g) {
      return { type: ResultType.error, error: g };
    }
    return { type: ResultType.data, data: o.deferredData.data };
  }
}
function hasNakedIndexQuery(o) {
  return new URLSearchParams(o).getAll("index").some((s) => s === "");
}
function getTargetMatch(o, s) {
  let h = typeof s == "string" ? parsePath(s).search : s.search;
  if (o[o.length - 1].route.index && hasNakedIndexQuery(h || "")) return o[o.length - 1];
  let g = getPathContributingMatches(o);
  return g[g.length - 1];
}
function getSubmissionFromNavigation(o) {
  let { formMethod: s, formAction: h, formEncType: g, text: j, formData: tt, json: rt } = o;
  if (s && h && g) return j != null ? { formMethod: s, formAction: h, formEncType: g, formData: void 0, json: void 0, text: j } : tt != null ? { formMethod: s, formAction: h, formEncType: g, formData: tt, json: void 0, text: void 0 } : rt !== void 0 ? { formMethod: s, formAction: h, formEncType: g, formData: void 0, json: rt, text: void 0 } : void 0;
}
function getLoadingNavigation(o, s) {
  return s ? { state: "loading", location: o, formMethod: s.formMethod, formAction: s.formAction, formEncType: s.formEncType, formData: s.formData, json: s.json, text: s.text } : { state: "loading", location: o, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
}
function getSubmittingNavigation(o, s) {
  return { state: "submitting", location: o, formMethod: s.formMethod, formAction: s.formAction, formEncType: s.formEncType, formData: s.formData, json: s.json, text: s.text };
}
function getLoadingFetcher(o, s) {
  return o ? { state: "loading", formMethod: o.formMethod, formAction: o.formAction, formEncType: o.formEncType, formData: o.formData, json: o.json, text: o.text, data: s } : { state: "loading", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: s };
}
function getSubmittingFetcher(o, s) {
  return { state: "submitting", formMethod: o.formMethod, formAction: o.formAction, formEncType: o.formEncType, formData: o.formData, json: o.json, text: o.text, data: s ? s.data : void 0 };
}
function getDoneFetcher(o) {
  return { state: "idle", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: o };
}
function restoreAppliedTransitions(o, s) {
  try {
    let h = o.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
    if (h) {
      let g = JSON.parse(h);
      for (let [j, tt] of Object.entries(g || {})) tt && Array.isArray(tt) && s.set(j, new Set(tt || []));
    }
  } catch {
  }
}
function persistAppliedTransitions(o, s) {
  if (s.size > 0) {
    let h = {};
    for (let [g, j] of s) h[g] = [...j];
    try {
      o.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(h));
    } catch (g) {
      warning$1(!1, "Failed to save applied view transitions in sessionStorage (" + g + ").");
    }
  }
}
function _extends$3() {
  return _extends$3 = Object.assign ? Object.assign.bind() : function(o) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var g in h) Object.prototype.hasOwnProperty.call(h, g) && (o[g] = h[g]);
    }
    return o;
  }, _extends$3.apply(this, arguments);
}
const DataRouterContext = reactExports.createContext(null), DataRouterStateContext = reactExports.createContext(null), NavigationContext = reactExports.createContext(null), LocationContext = reactExports.createContext(null), RouteContext = reactExports.createContext({ outlet: null, matches: [], isDataRoute: !1 }), RouteErrorContext = reactExports.createContext(null);
function useHref(o, s) {
  let { relative: h } = s === void 0 ? {} : s;
  useInRouterContext() || invariant(!1);
  let { basename: g, navigator: j } = reactExports.useContext(NavigationContext), { hash: tt, pathname: rt, search: at } = useResolvedPath(o, { relative: h }), it = rt;
  return g !== "/" && (it = rt === "/" ? g : joinPaths([g, rt])), j.createHref({ pathname: it, search: at, hash: tt });
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  return useInRouterContext() || invariant(!1), reactExports.useContext(LocationContext).location;
}
function useIsomorphicLayoutEffect(o) {
  reactExports.useContext(NavigationContext).static || reactExports.useLayoutEffect(o);
}
function useNavigate() {
  let { isDataRoute: o } = reactExports.useContext(RouteContext);
  return o ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  useInRouterContext() || invariant(!1);
  let o = reactExports.useContext(DataRouterContext), { basename: s, future: h, navigator: g } = reactExports.useContext(NavigationContext), { matches: j } = reactExports.useContext(RouteContext), { pathname: tt } = useLocation(), rt = JSON.stringify(getResolveToMatches(j, h.v7_relativeSplatPath)), at = reactExports.useRef(!1);
  return useIsomorphicLayoutEffect(() => {
    at.current = !0;
  }), reactExports.useCallback(function(it, st) {
    if (st === void 0 && (st = {}), !at.current) return;
    if (typeof it == "number") return void g.go(it);
    let lt = resolveTo(it, JSON.parse(rt), tt, st.relative === "path");
    o == null && s !== "/" && (lt.pathname = lt.pathname === "/" ? s : joinPaths([s, lt.pathname])), (st.replace ? g.replace : g.push)(lt, st.state, st);
  }, [s, g, rt, tt, o]);
}
const OutletContext = reactExports.createContext(null);
function useOutletContext() {
  return reactExports.useContext(OutletContext);
}
function useOutlet(o) {
  let s = reactExports.useContext(RouteContext).outlet;
  return s && reactExports.createElement(OutletContext.Provider, { value: o }, s);
}
function useParams() {
  let { matches: o } = reactExports.useContext(RouteContext), s = o[o.length - 1];
  return s ? s.params : {};
}
function useResolvedPath(o, s) {
  let { relative: h } = s === void 0 ? {} : s, { future: g } = reactExports.useContext(NavigationContext), { matches: j } = reactExports.useContext(RouteContext), { pathname: tt } = useLocation(), rt = JSON.stringify(getResolveToMatches(j, g.v7_relativeSplatPath));
  return reactExports.useMemo(() => resolveTo(o, JSON.parse(rt), tt, h === "path"), [o, rt, tt, h]);
}
function useRoutesImpl(o, s, h, g) {
  useInRouterContext() || invariant(!1);
  let { navigator: j } = reactExports.useContext(NavigationContext), { matches: tt } = reactExports.useContext(RouteContext), rt = tt[tt.length - 1], at = rt ? rt.params : {};
  !rt || rt.pathname;
  let it, st = rt ? rt.pathnameBase : "/";
  rt && rt.route, it = useLocation();
  let lt = it.pathname || "/", ot = lt;
  if (st !== "/") {
    let ht = st.replace(/^\//, "").split("/");
    ot = "/" + lt.replace(/^\//, "").split("/").slice(ht.length).join("/");
  }
  let ft = matchRoutes(o, { pathname: ot });
  return _renderMatches(ft && ft.map((ht) => Object.assign({}, ht, { params: Object.assign({}, at, ht.params), pathname: joinPaths([st, j.encodeLocation ? j.encodeLocation(ht.pathname).pathname : ht.pathname]), pathnameBase: ht.pathnameBase === "/" ? st : joinPaths([st, j.encodeLocation ? j.encodeLocation(ht.pathnameBase).pathname : ht.pathnameBase]) })), tt, h, g);
}
function DefaultErrorComponent() {
  let o = useRouteError(), s = isRouteErrorResponse(o) ? o.status + " " + o.statusText : o instanceof Error ? o.message : JSON.stringify(o), h = o instanceof Error ? o.stack : null, g = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return reactExports.createElement(reactExports.Fragment, null, reactExports.createElement("h2", null, "Unexpected Application Error!"), reactExports.createElement("h3", { style: { fontStyle: "italic" } }, s), h ? reactExports.createElement("pre", { style: g }, h) : null, null);
}
const defaultErrorElement = reactExports.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends reactExports.Component {
  constructor(s) {
    super(s), this.state = { location: s.location, revalidation: s.revalidation, error: s.error };
  }
  static getDerivedStateFromError(s) {
    return { error: s };
  }
  static getDerivedStateFromProps(s, h) {
    return h.location !== s.location || h.revalidation !== "idle" && s.revalidation === "idle" ? { error: s.error, location: s.location, revalidation: s.revalidation } : { error: s.error !== void 0 ? s.error : h.error, location: h.location, revalidation: s.revalidation || h.revalidation };
  }
  componentDidCatch(s, h) {
    console.error("React Router caught the following error during render", s, h);
  }
  render() {
    return this.state.error !== void 0 ? reactExports.createElement(RouteContext.Provider, { value: this.props.routeContext }, reactExports.createElement(RouteErrorContext.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
  }
}
function RenderedRoute(o) {
  let { routeContext: s, match: h, children: g } = o, j = reactExports.useContext(DataRouterContext);
  return j && j.static && j.staticContext && (h.route.errorElement || h.route.ErrorBoundary) && (j.staticContext._deepestRenderedBoundaryId = h.route.id), reactExports.createElement(RouteContext.Provider, { value: s }, g);
}
function _renderMatches(o, s, h, g) {
  var j;
  if (s === void 0 && (s = []), h === void 0 && (h = null), g === void 0 && (g = null), o == null) {
    var tt;
    if (!h) return null;
    if (h.errors) o = h.matches;
    else {
      if (!((tt = g) != null && tt.v7_partialHydration && s.length === 0 && !h.initialized && h.matches.length > 0)) return null;
      o = h.matches;
    }
  }
  let rt = o, at = (j = h) == null ? void 0 : j.errors;
  if (at != null) {
    let lt = rt.findIndex((ot) => ot.route.id && (at == null ? void 0 : at[ot.route.id]) !== void 0);
    lt >= 0 || invariant(!1), rt = rt.slice(0, Math.min(rt.length, lt + 1));
  }
  let it = !1, st = -1;
  if (h && g && g.v7_partialHydration) for (let lt = 0; lt < rt.length; lt++) {
    let ot = rt[lt];
    if ((ot.route.HydrateFallback || ot.route.hydrateFallbackElement) && (st = lt), ot.route.id) {
      let { loaderData: ft, errors: ht } = h, pt = ot.route.loader && ft[ot.route.id] === void 0 && (!ht || ht[ot.route.id] === void 0);
      if (ot.route.lazy || pt) {
        it = !0, rt = st >= 0 ? rt.slice(0, st + 1) : [rt[0]];
        break;
      }
    }
  }
  return rt.reduceRight((lt, ot, ft) => {
    let ht, pt = !1, dt = null, ct = null;
    h && (ht = at && ot.route.id ? at[ot.route.id] : void 0, dt = ot.route.errorElement || defaultErrorElement, it && (st < 0 && ft === 0 ? (warningOnce("route-fallback"), pt = !0, ct = null) : st === ft && (pt = !0, ct = ot.route.hydrateFallbackElement || null)));
    let mt = s.concat(rt.slice(0, ft + 1)), yt = () => {
      let vt;
      return vt = ht ? dt : pt ? ct : ot.route.Component ? reactExports.createElement(ot.route.Component, null) : ot.route.element ? ot.route.element : lt, reactExports.createElement(RenderedRoute, { match: ot, routeContext: { outlet: lt, matches: mt, isDataRoute: h != null }, children: vt });
    };
    return h && (ot.route.ErrorBoundary || ot.route.errorElement || ft === 0) ? reactExports.createElement(RenderErrorBoundary, { location: h.location, revalidation: h.revalidation, component: dt, error: ht, children: yt(), routeContext: { outlet: null, matches: mt, isDataRoute: !0 } }) : yt();
  }, null);
}
var DataRouterHook$1 = function(o) {
  return o.UseBlocker = "useBlocker", o.UseRevalidator = "useRevalidator", o.UseNavigateStable = "useNavigate", o;
}(DataRouterHook$1 || {}), DataRouterStateHook$1 = function(o) {
  return o.UseBlocker = "useBlocker", o.UseLoaderData = "useLoaderData", o.UseActionData = "useActionData", o.UseRouteError = "useRouteError", o.UseNavigation = "useNavigation", o.UseRouteLoaderData = "useRouteLoaderData", o.UseMatches = "useMatches", o.UseRevalidator = "useRevalidator", o.UseNavigateStable = "useNavigate", o.UseRouteId = "useRouteId", o;
}(DataRouterStateHook$1 || {});
function useDataRouterContext(o) {
  let s = reactExports.useContext(DataRouterContext);
  return s || invariant(!1), s;
}
function useDataRouterState(o) {
  let s = reactExports.useContext(DataRouterStateContext);
  return s || invariant(!1), s;
}
function useRouteContext(o) {
  let s = reactExports.useContext(RouteContext);
  return s || invariant(!1), s;
}
function useCurrentRouteId(o) {
  let s = useRouteContext(), h = s.matches[s.matches.length - 1];
  return h.route.id || invariant(!1), h.route.id;
}
function useRouteError() {
  var o;
  let s = reactExports.useContext(RouteErrorContext), h = useDataRouterState(), g = useCurrentRouteId();
  return s !== void 0 ? s : (o = h.errors) == null ? void 0 : o[g];
}
function useNavigateStable() {
  let { router: o } = useDataRouterContext(DataRouterHook$1.UseNavigateStable), s = useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable), h = reactExports.useRef(!1);
  return useIsomorphicLayoutEffect(() => {
    h.current = !0;
  }), reactExports.useCallback(function(g, j) {
    j === void 0 && (j = {}), h.current && (typeof g == "number" ? o.navigate(g) : o.navigate(g, _extends$3({ fromRouteId: s }, j)));
  }, [o, s]);
}
const alreadyWarned$1 = {};
function warningOnce(o, s, h) {
  alreadyWarned$1[o] || (alreadyWarned$1[o] = !0);
}
function logV6DeprecationWarnings(o, s) {
  o == null || o.v7_startTransition, (o == null ? void 0 : o.v7_relativeSplatPath) === void 0 && (!s || s.v7_relativeSplatPath), s && (s.v7_fetcherPersist, s.v7_normalizeFormMethod, s.v7_partialHydration, s.v7_skipActionErrorRevalidation);
}
function Navigate(o) {
  let { to: s, replace: h, state: g, relative: j } = o;
  useInRouterContext() || invariant(!1);
  let { future: tt, static: rt } = reactExports.useContext(NavigationContext), { matches: at } = reactExports.useContext(RouteContext), { pathname: it } = useLocation(), st = useNavigate(), lt = resolveTo(s, getResolveToMatches(at, tt.v7_relativeSplatPath), it, j === "path"), ot = JSON.stringify(lt);
  return reactExports.useEffect(() => st(JSON.parse(ot), { replace: h, state: g, relative: j }), [st, ot, j, h, g]), null;
}
function Outlet(o) {
  return useOutlet(o.context);
}
function Router(o) {
  let { basename: s = "/", children: h = null, location: g, navigationType: j = Action.Pop, navigator: tt, static: rt = !1, future: at } = o;
  useInRouterContext() && invariant(!1);
  let it = s.replace(/^\/*/, "/"), st = reactExports.useMemo(() => ({ basename: it, navigator: tt, static: rt, future: _extends$3({ v7_relativeSplatPath: !1 }, at) }), [it, at, tt, rt]);
  typeof g == "string" && (g = parsePath(g));
  let { pathname: lt = "/", search: ot = "", hash: ft = "", state: ht = null, key: pt = "default" } = g, dt = reactExports.useMemo(() => {
    let ct = stripBasename(lt, it);
    return ct == null ? null : { location: { pathname: ct, search: ot, hash: ft, state: ht, key: pt }, navigationType: j };
  }, [it, lt, ot, ft, ht, pt, j]);
  return dt == null ? null : reactExports.createElement(NavigationContext.Provider, { value: st }, reactExports.createElement(LocationContext.Provider, { children: h, value: dt }));
}
function mapRouteProperties(o) {
  let s = { hasErrorBoundary: o.ErrorBoundary != null || o.errorElement != null };
  return o.Component && Object.assign(s, { element: reactExports.createElement(o.Component), Component: void 0 }), o.HydrateFallback && Object.assign(s, { hydrateFallbackElement: reactExports.createElement(o.HydrateFallback), HydrateFallback: void 0 }), o.ErrorBoundary && Object.assign(s, { errorElement: reactExports.createElement(o.ErrorBoundary), ErrorBoundary: void 0 }), s;
}
function createMemoryRouter(o, s) {
  return createRouter({ basename: void 0, future: _extends$3({}, void 0, { v7_prependBasename: !0 }), history: createMemoryHistory({ initialEntries: void 0, initialIndex: void 0 }), hydrationData: void 0, routes: o, mapRouteProperties, dataStrategy: void 0, patchRoutesOnNavigation: void 0 }).initialize();
}
function _extends$2() {
  return _extends$2 = Object.assign ? Object.assign.bind() : function(o) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var g in h) Object.prototype.hasOwnProperty.call(h, g) && (o[g] = h[g]);
    }
    return o;
  }, _extends$2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(o, s) {
  if (o == null) return {};
  var h, g, j = {}, tt = Object.keys(o);
  for (g = 0; g < tt.length; g++) h = tt[g], s.indexOf(h) >= 0 || (j[h] = o[h]);
  return j;
}
function isModifiedEvent(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function shouldProcessLinkClick(o, s) {
  return !(o.button !== 0 || s && s !== "_self" || isModifiedEvent(o));
}
function createSearchParams(o) {
  return o === void 0 && (o = ""), new URLSearchParams(typeof o == "string" || Array.isArray(o) || o instanceof URLSearchParams ? o : Object.keys(o).reduce((s, h) => {
    let g = o[h];
    return s.concat(Array.isArray(g) ? g.map((j) => [h, j]) : [[h, g]]);
  }, []));
}
function getSearchParamsForLocation(o, s) {
  let h = createSearchParams(o);
  return s && s.forEach((g, j) => {
    h.has(j) || s.getAll(j).forEach((tt) => {
      h.append(j, tt);
    });
  }), h;
}
new Promise(() => {
});
const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], REACT_ROUTER_VERSION = "6";
try {
  window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch {
}
const ViewTransitionContext = reactExports.createContext({ isTransitioning: !1 }), FetchersContext = reactExports.createContext(/* @__PURE__ */ new Map()), START_TRANSITION = "startTransition", startTransitionImpl = React$2[START_TRANSITION], FLUSH_SYNC = "flushSync", flushSyncImpl = ReactDOM[FLUSH_SYNC];
function startTransitionSafe(o) {
  startTransitionImpl ? startTransitionImpl(o) : o();
}
function flushSyncSafe(o) {
  flushSyncImpl ? flushSyncImpl(o) : o();
}
class Deferred {
  constructor() {
    this.status = "pending", this.promise = new Promise((s, h) => {
      this.resolve = (g) => {
        this.status === "pending" && (this.status = "resolved", s(g));
      }, this.reject = (g) => {
        this.status === "pending" && (this.status = "rejected", h(g));
      };
    });
  }
}
function RouterProvider(o) {
  let { fallbackElement: s, router: h, future: g } = o, [j, tt] = reactExports.useState(h.state), [rt, at] = reactExports.useState(), [it, st] = reactExports.useState({ isTransitioning: !1 }), [lt, ot] = reactExports.useState(), [ft, ht] = reactExports.useState(), [pt, dt] = reactExports.useState(), ct = reactExports.useRef(/* @__PURE__ */ new Map()), { v7_startTransition: mt } = g || {}, yt = reactExports.useCallback((wt) => {
    mt ? startTransitionSafe(wt) : wt();
  }, [mt]), vt = reactExports.useCallback((wt, xt) => {
    let { deletedFetchers: Tt, flushSync: It, viewTransitionOpts: qt } = xt;
    wt.fetchers.forEach((Nt, Yt) => {
      Nt.data !== void 0 && ct.current.set(Yt, Nt.data);
    }), Tt.forEach((Nt) => ct.current.delete(Nt));
    let Wt = h.window == null || h.window.document == null || typeof h.window.document.startViewTransition != "function";
    if (qt && !Wt) {
      if (It) {
        flushSyncSafe(() => {
          ft && (lt && lt.resolve(), ft.skipTransition()), st({ isTransitioning: !0, flushSync: !0, currentLocation: qt.currentLocation, nextLocation: qt.nextLocation });
        });
        let Nt = h.window.document.startViewTransition(() => {
          flushSyncSafe(() => tt(wt));
        });
        return Nt.finished.finally(() => {
          flushSyncSafe(() => {
            ot(void 0), ht(void 0), at(void 0), st({ isTransitioning: !1 });
          });
        }), void flushSyncSafe(() => ht(Nt));
      }
      ft ? (lt && lt.resolve(), ft.skipTransition(), dt({ state: wt, currentLocation: qt.currentLocation, nextLocation: qt.nextLocation })) : (at(wt), st({ isTransitioning: !0, flushSync: !1, currentLocation: qt.currentLocation, nextLocation: qt.nextLocation }));
    } else It ? flushSyncSafe(() => tt(wt)) : yt(() => tt(wt));
  }, [h.window, ft, lt, ct, yt]);
  reactExports.useLayoutEffect(() => h.subscribe(vt), [h, vt]), reactExports.useEffect(() => {
    it.isTransitioning && !it.flushSync && ot(new Deferred());
  }, [it]), reactExports.useEffect(() => {
    if (lt && rt && h.window) {
      let wt = rt, xt = lt.promise, Tt = h.window.document.startViewTransition(async () => {
        yt(() => tt(wt)), await xt;
      });
      Tt.finished.finally(() => {
        ot(void 0), ht(void 0), at(void 0), st({ isTransitioning: !1 });
      }), ht(Tt);
    }
  }, [yt, rt, lt, h.window]), reactExports.useEffect(() => {
    lt && rt && j.location.key === rt.location.key && lt.resolve();
  }, [lt, ft, j.location, rt]), reactExports.useEffect(() => {
    !it.isTransitioning && pt && (at(pt.state), st({ isTransitioning: !0, flushSync: !1, currentLocation: pt.currentLocation, nextLocation: pt.nextLocation }), dt(void 0));
  }, [it.isTransitioning, pt]), reactExports.useEffect(() => {
  }, []);
  let _t = reactExports.useMemo(() => ({ createHref: h.createHref, encodeLocation: h.encodeLocation, go: (wt) => h.navigate(wt), push: (wt, xt, Tt) => h.navigate(wt, { state: xt, preventScrollReset: Tt == null ? void 0 : Tt.preventScrollReset }), replace: (wt, xt, Tt) => h.navigate(wt, { replace: !0, state: xt, preventScrollReset: Tt == null ? void 0 : Tt.preventScrollReset }) }), [h]), Pt = h.basename || "/", bt = reactExports.useMemo(() => ({ router: h, navigator: _t, static: !1, basename: Pt }), [h, _t, Pt]), kt = reactExports.useMemo(() => ({ v7_relativeSplatPath: h.future.v7_relativeSplatPath }), [h.future.v7_relativeSplatPath]);
  return reactExports.useEffect(() => logV6DeprecationWarnings(g, h.future), [g, h.future]), reactExports.createElement(reactExports.Fragment, null, reactExports.createElement(DataRouterContext.Provider, { value: bt }, reactExports.createElement(DataRouterStateContext.Provider, { value: j }, reactExports.createElement(FetchersContext.Provider, { value: ct.current }, reactExports.createElement(ViewTransitionContext.Provider, { value: it }, reactExports.createElement(Router, { basename: Pt, location: j.location, navigationType: j.historyAction, navigator: _t, future: kt }, j.initialized || h.future.v7_partialHydration ? reactExports.createElement(MemoizedDataRoutes, { routes: h.routes, future: h.future, state: j }) : s))))), null);
}
const MemoizedDataRoutes = reactExports.memo(DataRoutes);
function DataRoutes(o) {
  let { routes: s, future: h, state: g } = o;
  return useRoutesImpl(s, void 0, g, h);
}
const isBrowser = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Link = reactExports.forwardRef(function(o, s) {
  let h, { onClick: g, relative: j, reloadDocument: tt, replace: rt, state: at, target: it, to: st, preventScrollReset: lt, viewTransition: ot } = o, ft = _objectWithoutPropertiesLoose(o, _excluded), { basename: ht } = reactExports.useContext(NavigationContext), pt = !1;
  if (typeof st == "string" && ABSOLUTE_URL_REGEX.test(st) && (h = st, isBrowser)) try {
    let mt = new URL(window.location.href), yt = st.startsWith("//") ? new URL(mt.protocol + st) : new URL(st), vt = stripBasename(yt.pathname, ht);
    yt.origin === mt.origin && vt != null ? st = vt + yt.search + yt.hash : pt = !0;
  } catch {
  }
  let dt = useHref(st, { relative: j }), ct = useLinkClickHandler(st, { replace: rt, state: at, target: it, preventScrollReset: lt, relative: j, viewTransition: ot });
  return reactExports.createElement("a", _extends$2({}, ft, { href: h || dt, onClick: pt || tt ? g : function(mt) {
    g && g(mt), mt.defaultPrevented || ct(mt);
  }, ref: s, target: it }));
});
var DataRouterHook, DataRouterHook2, DataRouterStateHook, DataRouterStateHook2;
function useLinkClickHandler(o, s) {
  let { target: h, replace: g, state: j, preventScrollReset: tt, relative: rt, viewTransition: at } = s === void 0 ? {} : s, it = useNavigate(), st = useLocation(), lt = useResolvedPath(o, { relative: rt });
  return reactExports.useCallback((ot) => {
    if (shouldProcessLinkClick(ot, h)) {
      ot.preventDefault();
      let ft = g !== void 0 ? g : createPath(st) === createPath(lt);
      it(o, { replace: ft, state: j, preventScrollReset: tt, relative: rt, viewTransition: at });
    }
  }, [st, it, lt, g, j, h, o, tt, rt, at]);
}
function useSearchParams(o) {
  let s = reactExports.useRef(createSearchParams(o)), h = reactExports.useRef(!1), g = useLocation(), j = reactExports.useMemo(() => getSearchParamsForLocation(g.search, h.current ? null : s.current), [g.search]), tt = useNavigate(), rt = reactExports.useCallback((at, it) => {
    const st = createSearchParams(typeof at == "function" ? at(j) : at);
    h.current = !0, tt("?" + st, it);
  }, [tt, j]);
  return [j, rt];
}
DataRouterHook2 = DataRouterHook || (DataRouterHook = {}), DataRouterHook2.UseScrollRestoration = "useScrollRestoration", DataRouterHook2.UseSubmit = "useSubmit", DataRouterHook2.UseSubmitFetcher = "useSubmitFetcher", DataRouterHook2.UseFetcher = "useFetcher", DataRouterHook2.useViewTransitionState = "useViewTransitionState", DataRouterStateHook2 = DataRouterStateHook || (DataRouterStateHook = {}), DataRouterStateHook2.UseFetcher = "useFetcher", DataRouterStateHook2.UseFetchers = "useFetchers", DataRouterStateHook2.UseScrollRestoration = "useScrollRestoration";
var lib$1 = { exports: {} }, Modal$1 = {}, propTypes = { exports: {} }, ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", ReactPropTypesSecret_1 = ReactPropTypesSecret$1, ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function o(g, j, tt, rt, at, it) {
    if (it !== ReactPropTypesSecret) {
      var st = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw st.name = "Invariant Violation", st;
    }
  }
  function s() {
    return o;
  }
  o.isRequired = o;
  var h = { array: o, bigint: o, bool: o, func: o, number: o, object: o, string: o, symbol: o, any: o, arrayOf: s, element: o, elementType: o, instanceOf: s, node: o, objectOf: s, oneOf: s, oneOfType: s, shape: s, exact: s, checkPropTypes: emptyFunctionWithReset, resetWarningCache: emptyFunction };
  return h.PropTypes = h, h;
};
propTypes.exports = factoryWithThrowingShims();
var propTypesExports = propTypes.exports, ModalPortal = { exports: {} }, focusManager = {}, tabbable = { exports: {} };
(function(o, s) {
  Object.defineProperty(s, "__esModule", { value: !0 }), s.default = function it(st) {
    var lt = [].slice.call(st.querySelectorAll("*"), 0).reduce(function(ot, ft) {
      return ot.concat(ft.shadowRoot ? it(ft.shadowRoot) : [ft]);
    }, []);
    return lt.filter(at);
  };
  var h = "none", g = "contents", j = /^(input|select|textarea|button|object|iframe)$/;
  function tt(it) {
    var st = it.offsetWidth <= 0 && it.offsetHeight <= 0;
    if (st && !it.innerHTML) return !0;
    try {
      var lt = window.getComputedStyle(it), ot = lt.getPropertyValue("display");
      return st ? ot !== g && function(ft, ht) {
        return ht.getPropertyValue("overflow") !== "visible" || ft.scrollWidth <= 0 && ft.scrollHeight <= 0;
      }(it, lt) : ot === h;
    } catch {
      return console.warn("Failed to inspect element style"), !1;
    }
  }
  function rt(it, st) {
    var lt = it.nodeName.toLowerCase();
    return (j.test(lt) && !it.disabled || lt === "a" && it.href || st) && function(ot) {
      for (var ft = ot, ht = ot.getRootNode && ot.getRootNode(); ft && ft !== document.body; ) {
        if (ht && ft === ht && (ft = ht.host.parentNode), tt(ft)) return !1;
        ft = ft.parentNode;
      }
      return !0;
    }(it);
  }
  function at(it) {
    var st = it.getAttribute("tabindex");
    st === null && (st = void 0);
    var lt = isNaN(st);
    return (lt || st >= 0) && rt(it, !lt);
  }
  o.exports = s.default;
})(tabbable, tabbable.exports);
var tabbableExports = tabbable.exports;
Object.defineProperty(focusManager, "__esModule", { value: !0 }), focusManager.resetState = resetState$4, focusManager.log = log$4, focusManager.handleBlur = handleBlur, focusManager.handleFocus = handleFocus, focusManager.markForFocusLater = markForFocusLater, focusManager.returnFocus = returnFocus, focusManager.popWithoutFocus = popWithoutFocus, focusManager.setupScopedFocus = setupScopedFocus, focusManager.teardownScopedFocus = teardownScopedFocus;
var _tabbable = tabbableExports, _tabbable2 = _interopRequireDefault$7(_tabbable);
function _interopRequireDefault$7(o) {
  return o && o.__esModule ? o : { default: o };
}
var focusLaterElements = [], modalElement = null, needToFocus = !1;
function resetState$4() {
  focusLaterElements = [];
}
function log$4() {
}
function handleBlur() {
  needToFocus = !0;
}
function handleFocus() {
  if (needToFocus) {
    if (needToFocus = !1, !modalElement) return;
    setTimeout(function() {
      modalElement.contains(document.activeElement) || ((0, _tabbable2.default)(modalElement)[0] || modalElement).focus();
    }, 0);
  }
}
function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}
function returnFocus() {
  var o = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], s = null;
  try {
    return void (focusLaterElements.length !== 0 && (s = focusLaterElements.pop()).focus({ preventScroll: o }));
  } catch {
    console.warn(["You tried to return focus to", s, "but it is not in the DOM anymore"].join(" "));
  }
}
function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}
function setupScopedFocus(o) {
  modalElement = o, window.addEventListener ? (window.addEventListener("blur", handleBlur, !1), document.addEventListener("focus", handleFocus, !0)) : (window.attachEvent("onBlur", handleBlur), document.attachEvent("onFocus", handleFocus));
}
function teardownScopedFocus() {
  modalElement = null, window.addEventListener ? (window.removeEventListener("blur", handleBlur), document.removeEventListener("focus", handleFocus)) : (window.detachEvent("onBlur", handleBlur), document.detachEvent("onFocus", handleFocus));
}
var scopeTab = { exports: {} };
(function(o, s) {
  Object.defineProperty(s, "__esModule", { value: !0 }), s.default = function(tt, rt) {
    var at = (0, g.default)(tt);
    if (!at.length) return void rt.preventDefault();
    var it = void 0, st = rt.shiftKey, lt = at[0], ot = at[at.length - 1], ft = j();
    if (tt === ft) {
      if (!st) return;
      it = ot;
    }
    if (ot !== ft || st || (it = lt), lt === ft && st && (it = ot), it) return rt.preventDefault(), void it.focus();
    var ht = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
    if (!(ht == null || ht[1] == "Chrome" || /\biPod\b|\biPad\b/g.exec(navigator.userAgent) != null)) {
      var pt = at.indexOf(ft);
      if (pt > -1 && (pt += st ? -1 : 1), it = at[pt], it === void 0) return rt.preventDefault(), void (it = st ? ot : lt).focus();
      rt.preventDefault(), it.focus();
    }
  };
  var h, g = (h = tabbableExports) && h.__esModule ? h : { default: h };
  function j() {
    var tt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    return tt.activeElement.shadowRoot ? j(tt.activeElement.shadowRoot) : tt.activeElement;
  }
  o.exports = s.default;
})(scopeTab, scopeTab.exports);
var scopeTabExports = scopeTab.exports, ariaAppHider$1 = {}, warning = function() {
}, warning_1 = warning, safeHTMLElement = {}, exenv = { exports: {} };
(function(o) {
  (function() {
    var s = !(typeof window > "u" || !window.document || !window.document.createElement), h = { canUseDOM: s, canUseWorkers: typeof Worker < "u", canUseEventListeners: s && !(!window.addEventListener && !window.attachEvent), canUseViewport: s && !!window.screen };
    o.exports ? o.exports = h : window.ExecutionEnvironment = h;
  })();
})(exenv);
var exenvExports = exenv.exports;
Object.defineProperty(safeHTMLElement, "__esModule", { value: !0 }), safeHTMLElement.canUseDOM = safeHTMLElement.SafeNodeList = safeHTMLElement.SafeHTMLCollection = void 0;
var _exenv = exenvExports, _exenv2 = _interopRequireDefault$6(_exenv);
function _interopRequireDefault$6(o) {
  return o && o.__esModule ? o : { default: o };
}
var EE = _exenv2.default, SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};
safeHTMLElement.SafeHTMLCollection = EE.canUseDOM ? window.HTMLCollection : {}, safeHTMLElement.SafeNodeList = EE.canUseDOM ? window.NodeList : {}, safeHTMLElement.canUseDOM = EE.canUseDOM, safeHTMLElement.default = SafeHTMLElement, Object.defineProperty(ariaAppHider$1, "__esModule", { value: !0 }), ariaAppHider$1.resetState = resetState$3, ariaAppHider$1.log = log$3, ariaAppHider$1.assertNodeList = assertNodeList, ariaAppHider$1.setElement = setElement, ariaAppHider$1.validateElement = validateElement, ariaAppHider$1.hide = hide, ariaAppHider$1.show = show, ariaAppHider$1.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
var _warning = warning_1, _warning2 = _interopRequireDefault$5(_warning), _safeHTMLElement$1 = safeHTMLElement;
function _interopRequireDefault$5(o) {
  return o && o.__esModule ? o : { default: o };
}
var globalElement = null;
function resetState$3() {
  globalElement && (globalElement.removeAttribute ? globalElement.removeAttribute("aria-hidden") : globalElement.length != null ? globalElement.forEach(function(o) {
    return o.removeAttribute("aria-hidden");
  }) : document.querySelectorAll(globalElement).forEach(function(o) {
    return o.removeAttribute("aria-hidden");
  })), globalElement = null;
}
function log$3() {
}
function assertNodeList(o, s) {
  if (!o || !o.length) throw new Error("react-modal: No elements were found for selector " + s + ".");
}
function setElement(o) {
  var s = o;
  if (typeof s == "string" && _safeHTMLElement$1.canUseDOM) {
    var h = document.querySelectorAll(s);
    assertNodeList(h, s), s = h;
  }
  return globalElement = s || globalElement;
}
function validateElement(o) {
  var s = o || globalElement;
  return s ? Array.isArray(s) || s instanceof HTMLCollection || s instanceof NodeList ? s : [s] : ((0, _warning2.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), []);
}
function hide(o) {
  var s = !0, h = !1, g = void 0;
  try {
    for (var j, tt = validateElement(o)[Symbol.iterator](); !(s = (j = tt.next()).done); s = !0)
      j.value.setAttribute("aria-hidden", "true");
  } catch (rt) {
    h = !0, g = rt;
  } finally {
    try {
      !s && tt.return && tt.return();
    } finally {
      if (h) throw g;
    }
  }
}
function show(o) {
  var s = !0, h = !1, g = void 0;
  try {
    for (var j, tt = validateElement(o)[Symbol.iterator](); !(s = (j = tt.next()).done); s = !0)
      j.value.removeAttribute("aria-hidden");
  } catch (rt) {
    h = !0, g = rt;
  } finally {
    try {
      !s && tt.return && tt.return();
    } finally {
      if (h) throw g;
    }
  }
}
function documentNotReadyOrSSRTesting() {
  globalElement = null;
}
var classList = {};
Object.defineProperty(classList, "__esModule", { value: !0 }), classList.resetState = resetState$2, classList.log = log$2;
var htmlClassList = {}, docBodyClassList = {};
function removeClass(o, s) {
  o.classList.remove(s);
}
function resetState$2() {
  var o = document.getElementsByTagName("html")[0];
  for (var s in htmlClassList) removeClass(o, htmlClassList[s]);
  var h = document.body;
  for (var g in docBodyClassList) removeClass(h, docBodyClassList[g]);
  htmlClassList = {}, docBodyClassList = {};
}
function log$2() {
}
var incrementReference = function(o, s) {
  return o[s] || (o[s] = 0), o[s] += 1, s;
}, decrementReference = function(o, s) {
  return o[s] && (o[s] -= 1), s;
}, trackClass = function(o, s, h) {
  h.forEach(function(g) {
    incrementReference(s, g), o.add(g);
  });
}, untrackClass = function(o, s, h) {
  h.forEach(function(g) {
    decrementReference(s, g), s[g] === 0 && o.remove(g);
  });
};
classList.add = function(o, s) {
  return trackClass(o.classList, o.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, s.split(" "));
}, classList.remove = function(o, s) {
  return untrackClass(o.classList, o.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, s.split(" "));
};
var portalOpenInstances$1 = {};
function _classCallCheck$3(o, s) {
  if (!(o instanceof s)) throw new TypeError("Cannot call a class as a function");
}
Object.defineProperty(portalOpenInstances$1, "__esModule", { value: !0 }), portalOpenInstances$1.log = log$1, portalOpenInstances$1.resetState = resetState$1;
var PortalOpenInstances = function o() {
  var s = this;
  _classCallCheck$3(this, o), this.register = function(h) {
    s.openInstances.indexOf(h) === -1 && (s.openInstances.push(h), s.emit("register"));
  }, this.deregister = function(h) {
    var g = s.openInstances.indexOf(h);
    g !== -1 && (s.openInstances.splice(g, 1), s.emit("deregister"));
  }, this.subscribe = function(h) {
    s.subscribers.push(h);
  }, this.emit = function(h) {
    s.subscribers.forEach(function(g) {
      return g(h, s.openInstances.slice());
    });
  }, this.openInstances = [], this.subscribers = [];
}, portalOpenInstances = new PortalOpenInstances();
function log$1() {
  console.log("portalOpenInstances ----------"), console.log(portalOpenInstances.openInstances.length), portalOpenInstances.openInstances.forEach(function(o) {
    return console.log(o);
  }), console.log("end portalOpenInstances ----------");
}
function resetState$1() {
  portalOpenInstances = new PortalOpenInstances();
}
portalOpenInstances$1.default = portalOpenInstances;
var bodyTrap$1 = {};
Object.defineProperty(bodyTrap$1, "__esModule", { value: !0 }), bodyTrap$1.resetState = resetState, bodyTrap$1.log = log;
var _portalOpenInstances = portalOpenInstances$1, _portalOpenInstances2 = _interopRequireDefault$4(_portalOpenInstances);
function _interopRequireDefault$4(o) {
  return o && o.__esModule ? o : { default: o };
}
var before = void 0, after = void 0, instances = [];
function resetState() {
  for (var o = [before, after], s = 0; s < o.length; s++) {
    var h = o[s];
    h && h.parentNode && h.parentNode.removeChild(h);
  }
  before = after = null, instances = [];
}
function log() {
  console.log("bodyTrap ----------"), console.log(instances.length);
  for (var o = [before, after], s = 0; s < o.length; s++) {
    var h = o[s] || {};
    console.log(h.nodeName, h.className, h.id);
  }
  console.log("edn bodyTrap ----------");
}
function focusContent() {
  instances.length !== 0 && instances[instances.length - 1].focusContent();
}
function bodyTrap(o, s) {
  before || after || ((before = document.createElement("div")).setAttribute("data-react-modal-body-trap", ""), before.style.position = "absolute", before.style.opacity = "0", before.setAttribute("tabindex", "0"), before.addEventListener("focus", focusContent), (after = before.cloneNode()).addEventListener("focus", focusContent)), (instances = s).length > 0 ? (document.body.firstChild !== before && document.body.insertBefore(before, document.body.firstChild), document.body.lastChild !== after && document.body.appendChild(after)) : (before.parentElement && before.parentElement.removeChild(before), after.parentElement && after.parentElement.removeChild(after));
}
_portalOpenInstances2.default.subscribe(bodyTrap), function(o, s) {
  Object.defineProperty(s, "__esModule", { value: !0 });
  var h = Object.assign || function(vt) {
    for (var _t = 1; _t < arguments.length; _t++) {
      var Pt = arguments[_t];
      for (var bt in Pt) Object.prototype.hasOwnProperty.call(Pt, bt) && (vt[bt] = Pt[bt]);
    }
    return vt;
  }, g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(vt) {
    return typeof vt;
  } : function(vt) {
    return vt && typeof Symbol == "function" && vt.constructor === Symbol && vt !== Symbol.prototype ? "symbol" : typeof vt;
  }, j = /* @__PURE__ */ function() {
    function vt(_t, Pt) {
      for (var bt = 0; bt < Pt.length; bt++) {
        var kt = Pt[bt];
        kt.enumerable = kt.enumerable || !1, kt.configurable = !0, "value" in kt && (kt.writable = !0), Object.defineProperty(_t, kt.key, kt);
      }
    }
    return function(_t, Pt, bt) {
      return Pt && vt(_t.prototype, Pt), bt && vt(_t, bt), _t;
    };
  }(), tt = reactExports, rt = dt(propTypesExports), at = pt(focusManager), it = dt(scopeTabExports), st = pt(ariaAppHider$1), lt = pt(classList), ot = safeHTMLElement, ft = dt(ot), ht = dt(portalOpenInstances$1);
  function pt(vt) {
    if (vt && vt.__esModule) return vt;
    var _t = {};
    if (vt != null) for (var Pt in vt) Object.prototype.hasOwnProperty.call(vt, Pt) && (_t[Pt] = vt[Pt]);
    return _t.default = vt, _t;
  }
  function dt(vt) {
    return vt && vt.__esModule ? vt : { default: vt };
  }
  var ct = { overlay: "ReactModal__Overlay", content: "ReactModal__Content" }, mt = 0, yt = function(vt) {
    function _t(Pt) {
      (function(kt, wt) {
        if (!(kt instanceof wt)) throw new TypeError("Cannot call a class as a function");
      })(this, _t);
      var bt = function(kt, wt) {
        if (!kt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !wt || typeof wt != "object" && typeof wt != "function" ? kt : wt;
      }(this, (_t.__proto__ || Object.getPrototypeOf(_t)).call(this, Pt));
      return bt.setOverlayRef = function(kt) {
        bt.overlay = kt, bt.props.overlayRef && bt.props.overlayRef(kt);
      }, bt.setContentRef = function(kt) {
        bt.content = kt, bt.props.contentRef && bt.props.contentRef(kt);
      }, bt.afterClose = function() {
        var kt = bt.props, wt = kt.appElement, xt = kt.ariaHideApp, Tt = kt.htmlOpenClassName, It = kt.bodyOpenClassName, qt = kt.parentSelector, Wt = qt && qt().ownerDocument || document;
        It && lt.remove(Wt.body, It), Tt && lt.remove(Wt.getElementsByTagName("html")[0], Tt), xt && mt > 0 && (mt -= 1) === 0 && st.show(wt), bt.props.shouldFocusAfterRender && (bt.props.shouldReturnFocusAfterClose ? (at.returnFocus(bt.props.preventScroll), at.teardownScopedFocus()) : at.popWithoutFocus()), bt.props.onAfterClose && bt.props.onAfterClose(), ht.default.deregister(bt);
      }, bt.open = function() {
        bt.beforeOpen(), bt.state.afterOpen && bt.state.beforeClose ? (clearTimeout(bt.closeTimer), bt.setState({ beforeClose: !1 })) : (bt.props.shouldFocusAfterRender && (at.setupScopedFocus(bt.node), at.markForFocusLater()), bt.setState({ isOpen: !0 }, function() {
          bt.openAnimationFrame = requestAnimationFrame(function() {
            bt.setState({ afterOpen: !0 }), bt.props.isOpen && bt.props.onAfterOpen && bt.props.onAfterOpen({ overlayEl: bt.overlay, contentEl: bt.content });
          });
        }));
      }, bt.close = function() {
        bt.props.closeTimeoutMS > 0 ? bt.closeWithTimeout() : bt.closeWithoutTimeout();
      }, bt.focusContent = function() {
        return bt.content && !bt.contentHasFocus() && bt.content.focus({ preventScroll: !0 });
      }, bt.closeWithTimeout = function() {
        var kt = Date.now() + bt.props.closeTimeoutMS;
        bt.setState({ beforeClose: !0, closesAt: kt }, function() {
          bt.closeTimer = setTimeout(bt.closeWithoutTimeout, bt.state.closesAt - Date.now());
        });
      }, bt.closeWithoutTimeout = function() {
        bt.setState({ beforeClose: !1, isOpen: !1, afterOpen: !1, closesAt: null }, bt.afterClose);
      }, bt.handleKeyDown = function(kt) {
        (function(wt) {
          return wt.code === "Tab" || wt.keyCode === 9;
        })(kt) && (0, it.default)(bt.content, kt), bt.props.shouldCloseOnEsc && function(wt) {
          return wt.code === "Escape" || wt.keyCode === 27;
        }(kt) && (kt.stopPropagation(), bt.requestClose(kt));
      }, bt.handleOverlayOnClick = function(kt) {
        bt.shouldClose === null && (bt.shouldClose = !0), bt.shouldClose && bt.props.shouldCloseOnOverlayClick && (bt.ownerHandlesClose() ? bt.requestClose(kt) : bt.focusContent()), bt.shouldClose = null;
      }, bt.handleContentOnMouseUp = function() {
        bt.shouldClose = !1;
      }, bt.handleOverlayOnMouseDown = function(kt) {
        bt.props.shouldCloseOnOverlayClick || kt.target != bt.overlay || kt.preventDefault();
      }, bt.handleContentOnClick = function() {
        bt.shouldClose = !1;
      }, bt.handleContentOnMouseDown = function() {
        bt.shouldClose = !1;
      }, bt.requestClose = function(kt) {
        return bt.ownerHandlesClose() && bt.props.onRequestClose(kt);
      }, bt.ownerHandlesClose = function() {
        return bt.props.onRequestClose;
      }, bt.shouldBeClosed = function() {
        return !bt.state.isOpen && !bt.state.beforeClose;
      }, bt.contentHasFocus = function() {
        return document.activeElement === bt.content || bt.content.contains(document.activeElement);
      }, bt.buildClassName = function(kt, wt) {
        var xt = (wt === void 0 ? "undefined" : g(wt)) === "object" ? wt : { base: ct[kt], afterOpen: ct[kt] + "--after-open", beforeClose: ct[kt] + "--before-close" }, Tt = xt.base;
        return bt.state.afterOpen && (Tt = Tt + " " + xt.afterOpen), bt.state.beforeClose && (Tt = Tt + " " + xt.beforeClose), typeof wt == "string" && wt ? Tt + " " + wt : Tt;
      }, bt.attributesFromObject = function(kt, wt) {
        return Object.keys(wt).reduce(function(xt, Tt) {
          return xt[kt + "-" + Tt] = wt[Tt], xt;
        }, {});
      }, bt.state = { afterOpen: !1, beforeClose: !1 }, bt.shouldClose = null, bt.moveFromContentToOverlay = null, bt;
    }
    return function(Pt, bt) {
      if (typeof bt != "function" && bt !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof bt);
      Pt.prototype = Object.create(bt && bt.prototype, { constructor: { value: Pt, enumerable: !1, writable: !0, configurable: !0 } }), bt && (Object.setPrototypeOf ? Object.setPrototypeOf(Pt, bt) : Pt.__proto__ = bt);
    }(_t, vt), j(_t, [{ key: "componentDidMount", value: function() {
      this.props.isOpen && this.open();
    } }, { key: "componentDidUpdate", value: function(Pt, bt) {
      this.props.isOpen && !Pt.isOpen ? this.open() : !this.props.isOpen && Pt.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !bt.isOpen && this.focusContent();
    } }, { key: "componentWillUnmount", value: function() {
      this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer), cancelAnimationFrame(this.openAnimationFrame);
    } }, { key: "beforeOpen", value: function() {
      var Pt = this.props, bt = Pt.appElement, kt = Pt.ariaHideApp, wt = Pt.htmlOpenClassName, xt = Pt.bodyOpenClassName, Tt = Pt.parentSelector, It = Tt && Tt().ownerDocument || document;
      xt && lt.add(It.body, xt), wt && lt.add(It.getElementsByTagName("html")[0], wt), kt && (mt += 1, st.hide(bt)), ht.default.register(this);
    } }, { key: "render", value: function() {
      var Pt = this.props, bt = Pt.id, kt = Pt.className, wt = Pt.overlayClassName, xt = Pt.defaultStyles, Tt = Pt.children, It = kt ? {} : xt.content, qt = wt ? {} : xt.overlay;
      if (this.shouldBeClosed()) return null;
      var Wt = { ref: this.setOverlayRef, className: this.buildClassName("overlay", wt), style: h({}, qt, this.props.style.overlay), onClick: this.handleOverlayOnClick, onMouseDown: this.handleOverlayOnMouseDown }, Nt = h({ id: bt, ref: this.setContentRef, style: h({}, It, this.props.style.content), className: this.buildClassName("content", kt), tabIndex: "-1", onKeyDown: this.handleKeyDown, onMouseDown: this.handleContentOnMouseDown, onMouseUp: this.handleContentOnMouseUp, onClick: this.handleContentOnClick, role: this.props.role, "aria-label": this.props.contentLabel }, this.attributesFromObject("aria", h({ modal: !0 }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), { "data-testid": this.props.testId }), Yt = this.props.contentElement(Nt, Tt);
      return this.props.overlayElement(Wt, Yt);
    } }]), _t;
  }(tt.Component);
  yt.defaultProps = { style: { overlay: {}, content: {} }, defaultStyles: {} }, yt.propTypes = { isOpen: rt.default.bool.isRequired, defaultStyles: rt.default.shape({ content: rt.default.object, overlay: rt.default.object }), style: rt.default.shape({ content: rt.default.object, overlay: rt.default.object }), className: rt.default.oneOfType([rt.default.string, rt.default.object]), overlayClassName: rt.default.oneOfType([rt.default.string, rt.default.object]), parentSelector: rt.default.func, bodyOpenClassName: rt.default.string, htmlOpenClassName: rt.default.string, ariaHideApp: rt.default.bool, appElement: rt.default.oneOfType([rt.default.instanceOf(ft.default), rt.default.instanceOf(ot.SafeHTMLCollection), rt.default.instanceOf(ot.SafeNodeList), rt.default.arrayOf(rt.default.instanceOf(ft.default))]), onAfterOpen: rt.default.func, onAfterClose: rt.default.func, onRequestClose: rt.default.func, closeTimeoutMS: rt.default.number, shouldFocusAfterRender: rt.default.bool, shouldCloseOnOverlayClick: rt.default.bool, shouldReturnFocusAfterClose: rt.default.bool, preventScroll: rt.default.bool, role: rt.default.string, contentLabel: rt.default.string, aria: rt.default.object, data: rt.default.object, children: rt.default.node, shouldCloseOnEsc: rt.default.bool, overlayRef: rt.default.func, contentRef: rt.default.func, id: rt.default.string, overlayElement: rt.default.func, contentElement: rt.default.func, testId: rt.default.string }, s.default = yt, o.exports = s.default;
}(ModalPortal, ModalPortal.exports);
var ModalPortalExports = ModalPortal.exports;
function componentWillMount() {
  var o = this.constructor.getDerivedStateFromProps(this.props, this.state);
  o != null && this.setState(o);
}
function componentWillReceiveProps(o) {
  this.setState((function(s) {
    var h = this.constructor.getDerivedStateFromProps(o, s);
    return h ?? null;
  }).bind(this));
}
function componentWillUpdate(o, s) {
  try {
    var h = this.props, g = this.state;
    this.props = o, this.state = s, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(h, g);
  } finally {
    this.props = h, this.state = g;
  }
}
function polyfill(o) {
  var s = o.prototype;
  if (!s || !s.isReactComponent) throw new Error("Can only polyfill class components");
  if (typeof o.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function") return o;
  var h = null, g = null, j = null;
  if (typeof s.componentWillMount == "function" ? h = "componentWillMount" : typeof s.UNSAFE_componentWillMount == "function" && (h = "UNSAFE_componentWillMount"), typeof s.componentWillReceiveProps == "function" ? g = "componentWillReceiveProps" : typeof s.UNSAFE_componentWillReceiveProps == "function" && (g = "UNSAFE_componentWillReceiveProps"), typeof s.componentWillUpdate == "function" ? j = "componentWillUpdate" : typeof s.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), h !== null || g !== null || j !== null) {
    var tt = o.displayName || o.name, rt = typeof o.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

` + tt + " uses " + rt + " but also contains the following legacy lifecycles:" + (h !== null ? `
  ` + h : "") + (g !== null ? `
  ` + g : "") + (j !== null ? `
  ` + j : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`);
  }
  if (typeof o.getDerivedStateFromProps == "function" && (s.componentWillMount = componentWillMount, s.componentWillReceiveProps = componentWillReceiveProps), typeof s.getSnapshotBeforeUpdate == "function") {
    if (typeof s.componentDidUpdate != "function") throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
    s.componentWillUpdate = componentWillUpdate;
    var at = s.componentDidUpdate;
    s.componentDidUpdate = function(it, st, lt) {
      var ot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : lt;
      at.call(this, it, st, ot);
    };
  }
  return o;
}
componentWillMount.__suppressDeprecationWarning = !0, componentWillReceiveProps.__suppressDeprecationWarning = !0, componentWillUpdate.__suppressDeprecationWarning = !0;
const reactLifecyclesCompat_es = Object.freeze(Object.defineProperty({ __proto__: null, polyfill }, Symbol.toStringTag, { value: "Module" })), require$$6 = getAugmentedNamespace(reactLifecyclesCompat_es);
Object.defineProperty(Modal$1, "__esModule", { value: !0 }), Modal$1.bodyOpenClassName = Modal$1.portalClassName = void 0;
var _extends$1 = Object.assign || function(o) {
  for (var s = 1; s < arguments.length; s++) {
    var h = arguments[s];
    for (var g in h) Object.prototype.hasOwnProperty.call(h, g) && (o[g] = h[g]);
  }
  return o;
}, _createClass$2 = /* @__PURE__ */ function() {
  function o(s, h) {
    for (var g = 0; g < h.length; g++) {
      var j = h[g];
      j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(s, j.key, j);
    }
  }
  return function(s, h, g) {
    return h && o(s.prototype, h), g && o(s, g), s;
  };
}(), _react$2 = reactExports, _react2$1 = _interopRequireDefault$3(_react$2), _reactDom = reactDomExports, _reactDom2 = _interopRequireDefault$3(_reactDom), _propTypes$2 = propTypesExports, _propTypes2$2 = _interopRequireDefault$3(_propTypes$2), _ModalPortal = ModalPortalExports, _ModalPortal2 = _interopRequireDefault$3(_ModalPortal), _ariaAppHider = ariaAppHider$1, ariaAppHider = _interopRequireWildcard(_ariaAppHider), _safeHTMLElement = safeHTMLElement, _safeHTMLElement2 = _interopRequireDefault$3(_safeHTMLElement), _reactLifecyclesCompat = require$$6;
function _interopRequireWildcard(o) {
  if (o && o.__esModule) return o;
  var s = {};
  if (o != null) for (var h in o) Object.prototype.hasOwnProperty.call(o, h) && (s[h] = o[h]);
  return s.default = o, s;
}
function _interopRequireDefault$3(o) {
  return o && o.__esModule ? o : { default: o };
}
function _classCallCheck$2(o, s) {
  if (!(o instanceof s)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn$2(o, s) {
  if (!o) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !s || typeof s != "object" && typeof s != "function" ? o : s;
}
function _inherits$2(o, s) {
  if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof s);
  o.prototype = Object.create(s && s.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(o, s) : o.__proto__ = s);
}
var portalClassName = Modal$1.portalClassName = "ReactModalPortal", bodyOpenClassName = Modal$1.bodyOpenClassName = "ReactModal__Body--open", isReact16 = _safeHTMLElement.canUseDOM && _reactDom2.default.createPortal !== void 0, createHTMLElement = function(o) {
  return document.createElement(o);
}, getCreatePortal = function() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};
function getParentElement(o) {
  return o();
}
var Modal = function(o) {
  function s() {
    var h, g, j;
    _classCallCheck$2(this, s);
    for (var tt = arguments.length, rt = Array(tt), at = 0; at < tt; at++) rt[at] = arguments[at];
    return g = j = _possibleConstructorReturn$2(this, (h = s.__proto__ || Object.getPrototypeOf(s)).call.apply(h, [this].concat(rt))), j.removePortal = function() {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(j.node);
      var it = getParentElement(j.props.parentSelector);
      it && it.contains(j.node) ? it.removeChild(j.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
    }, j.portalRef = function(it) {
      j.portal = it;
    }, j.renderPortal = function(it) {
      var st = getCreatePortal()(j, _react2$1.default.createElement(_ModalPortal2.default, _extends$1({ defaultStyles: s.defaultStyles }, it)), j.node);
      j.portalRef(st);
    }, _possibleConstructorReturn$2(j, g);
  }
  return _inherits$2(s, _react$2.Component), _createClass$2(s, [{ key: "componentDidMount", value: function() {
    _safeHTMLElement.canUseDOM && (isReact16 || (this.node = createHTMLElement("div")), this.node.className = this.props.portalClassName, getParentElement(this.props.parentSelector).appendChild(this.node), !isReact16 && this.renderPortal(this.props));
  } }, { key: "getSnapshotBeforeUpdate", value: function(h) {
    return { prevParent: getParentElement(h.parentSelector), nextParent: getParentElement(this.props.parentSelector) };
  } }, { key: "componentDidUpdate", value: function(h, g, j) {
    if (_safeHTMLElement.canUseDOM) {
      var tt = this.props, rt = tt.isOpen, at = tt.portalClassName;
      h.portalClassName !== at && (this.node.className = at);
      var it = j.prevParent, st = j.nextParent;
      st !== it && (it.removeChild(this.node), st.appendChild(this.node)), (h.isOpen || rt) && !isReact16 && this.renderPortal(this.props);
    }
  } }, { key: "componentWillUnmount", value: function() {
    if (_safeHTMLElement.canUseDOM && this.node && this.portal) {
      var h = this.portal.state, g = Date.now(), j = h.isOpen && this.props.closeTimeoutMS && (h.closesAt || g + this.props.closeTimeoutMS);
      j ? (h.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, j - g)) : this.removePortal();
    }
  } }, { key: "render", value: function() {
    return _safeHTMLElement.canUseDOM && isReact16 ? (!this.node && isReact16 && (this.node = createHTMLElement("div")), getCreatePortal()(_react2$1.default.createElement(_ModalPortal2.default, _extends$1({ ref: this.portalRef, defaultStyles: s.defaultStyles }, this.props)), this.node)) : null;
  } }], [{ key: "setAppElement", value: function(h) {
    ariaAppHider.setElement(h);
  } }]), s;
}();
Modal.propTypes = { isOpen: _propTypes2$2.default.bool.isRequired, style: _propTypes2$2.default.shape({ content: _propTypes2$2.default.object, overlay: _propTypes2$2.default.object }), portalClassName: _propTypes2$2.default.string, bodyOpenClassName: _propTypes2$2.default.string, htmlOpenClassName: _propTypes2$2.default.string, className: _propTypes2$2.default.oneOfType([_propTypes2$2.default.string, _propTypes2$2.default.shape({ base: _propTypes2$2.default.string.isRequired, afterOpen: _propTypes2$2.default.string.isRequired, beforeClose: _propTypes2$2.default.string.isRequired })]), overlayClassName: _propTypes2$2.default.oneOfType([_propTypes2$2.default.string, _propTypes2$2.default.shape({ base: _propTypes2$2.default.string.isRequired, afterOpen: _propTypes2$2.default.string.isRequired, beforeClose: _propTypes2$2.default.string.isRequired })]), appElement: _propTypes2$2.default.oneOfType([_propTypes2$2.default.instanceOf(_safeHTMLElement2.default), _propTypes2$2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2$2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2$2.default.arrayOf(_propTypes2$2.default.instanceOf(_safeHTMLElement2.default))]), onAfterOpen: _propTypes2$2.default.func, onRequestClose: _propTypes2$2.default.func, closeTimeoutMS: _propTypes2$2.default.number, ariaHideApp: _propTypes2$2.default.bool, shouldFocusAfterRender: _propTypes2$2.default.bool, shouldCloseOnOverlayClick: _propTypes2$2.default.bool, shouldReturnFocusAfterClose: _propTypes2$2.default.bool, preventScroll: _propTypes2$2.default.bool, parentSelector: _propTypes2$2.default.func, aria: _propTypes2$2.default.object, data: _propTypes2$2.default.object, role: _propTypes2$2.default.string, contentLabel: _propTypes2$2.default.string, shouldCloseOnEsc: _propTypes2$2.default.bool, overlayRef: _propTypes2$2.default.func, contentRef: _propTypes2$2.default.func, id: _propTypes2$2.default.string, overlayElement: _propTypes2$2.default.func, contentElement: _propTypes2$2.default.func }, Modal.defaultProps = { isOpen: !1, portalClassName, bodyOpenClassName, role: "dialog", ariaHideApp: !0, closeTimeoutMS: 0, shouldFocusAfterRender: !0, shouldCloseOnEsc: !0, shouldCloseOnOverlayClick: !0, shouldReturnFocusAfterClose: !0, preventScroll: !1, parentSelector: function() {
  return document.body;
}, overlayElement: function(o, s) {
  return _react2$1.default.createElement("div", o, s);
}, contentElement: function(o, s) {
  return _react2$1.default.createElement("div", o, s);
} }, Modal.defaultStyles = { overlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(255, 255, 255, 0.75)" }, content: { position: "absolute", top: "40px", left: "40px", right: "40px", bottom: "40px", border: "1px solid #ccc", background: "#fff", overflow: "auto", WebkitOverflowScrolling: "touch", borderRadius: "4px", outline: "none", padding: "20px" } }, (0, _reactLifecyclesCompat.polyfill)(Modal), Modal$1.default = Modal, function(o, s) {
  Object.defineProperty(s, "__esModule", { value: !0 });
  var h, g = (h = Modal$1) && h.__esModule ? h : { default: h };
  s.default = g.default, o.exports = s.default;
}(lib$1, lib$1.exports);
var libExports = lib$1.exports;
const J = getDefaultExportFromCjs$1(libExports);
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(o) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var g in h) ({}).hasOwnProperty.call(h, g) && (o[g] = h[g]);
    }
    return o;
  }, _extends.apply(null, arguments);
}
const matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, htmlEntities = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "Â©", "&#169;": "Â©", "&reg;": "Â®", "&#174;": "Â®", "&hellip;": "â€¦", "&#8230;": "â€¦", "&#x2F;": "/", "&#47;": "/" }, unescapeHtmlEntity = (o) => htmlEntities[o], unescape = (o) => o.replace(matchHtmlEntity, unescapeHtmlEntity);
let defaultOptions = { bindI18n: "languageChanged", bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"], useSuspense: !0, unescape };
function setDefaults() {
  let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  defaultOptions = { ...defaultOptions, ...o };
}
const initReactI18next = { type: "3rdParty", init(o) {
  setDefaults(o.options.react);
} };
var lib = {}, FeatureToggle$1 = {};
Object.defineProperty(FeatureToggle$1, "__esModule", { value: !0 });
var _createClass$1 = /* @__PURE__ */ function() {
  function o(s, h) {
    for (var g = 0; g < h.length; g++) {
      var j = h[g];
      j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(s, j.key, j);
    }
  }
  return function(s, h, g) {
    return h && o(s.prototype, h), g && o(s, g), s;
  };
}(), _react$1 = reactExports, _propTypes$1 = propTypesExports, _propTypes2$1 = _interopRequireDefault$2(_propTypes$1);
function _interopRequireDefault$2(o) {
  return o && o.__esModule ? o : { default: o };
}
function _classCallCheck$1(o, s) {
  if (!(o instanceof s)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn$1(o, s) {
  if (!o) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !s || typeof s != "object" && typeof s != "function" ? o : s;
}
function _inherits$1(o, s) {
  if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof s);
  o.prototype = Object.create(s && s.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(o, s) : o.__proto__ = s);
}
var FeatureToggle = function(o) {
  function s() {
    return _classCallCheck$1(this, s), _possibleConstructorReturn$1(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
  }
  return _inherits$1(s, _react$1.Component), _createClass$1(s, [{ key: "render", value: function() {
    return !!this.context.featureToggleList[this.props.featureName] == !this.props.showOnlyWhenDisabled ? this.props.children : null;
  } }]), s;
}();
FeatureToggle.contextTypes = { featureToggleList: _propTypes2$1.default.objectOf(_propTypes2$1.default.bool).isRequired }, FeatureToggle.propTypes = { featureName: _propTypes2$1.default.string.isRequired, children: _propTypes2$1.default.node, showOnlyWhenDisabled: _propTypes2$1.default.bool }, FeatureToggle.defaultProps = { showOnlyWhenDisabled: !1, children: [] }, FeatureToggle$1.default = FeatureToggle;
var FeatureToggleProvider$1 = {};
Object.defineProperty(FeatureToggleProvider$1, "__esModule", { value: !0 });
var _createClass = /* @__PURE__ */ function() {
  function o(s, h) {
    for (var g = 0; g < h.length; g++) {
      var j = h[g];
      j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(s, j.key, j);
    }
  }
  return function(s, h, g) {
    return h && o(s.prototype, h), g && o(s, g), s;
  };
}(), _react = reactExports, _react2 = _interopRequireDefault$1(_react), _propTypes = propTypesExports, _propTypes2 = _interopRequireDefault$1(_propTypes);
function _interopRequireDefault$1(o) {
  return o && o.__esModule ? o : { default: o };
}
function _classCallCheck(o, s) {
  if (!(o instanceof s)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(o, s) {
  if (!o) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !s || typeof s != "object" && typeof s != "function" ? o : s;
}
function _inherits(o, s) {
  if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof s);
  o.prototype = Object.create(s && s.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(o, s) : o.__proto__ = s);
}
var FeatureToggleProvider = function(o) {
  function s() {
    return _classCallCheck(this, s), _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
  }
  return _inherits(s, _react2.default.Component), _createClass(s, [{ key: "getChildContext", value: function() {
    return { featureToggleList: this.props.featureToggleList };
  } }, { key: "render", value: function() {
    return this.props.children;
  } }]), s;
}();
FeatureToggleProvider.childContextTypes = { featureToggleList: _propTypes2.default.objectOf(_propTypes2.default.bool).isRequired }, FeatureToggleProvider.propTypes = { featureToggleList: _propTypes2.default.objectOf(_propTypes2.default.bool), children: _propTypes2.default.node }, FeatureToggleProvider.defaultProps = { children: [], featureToggleList: [] }, FeatureToggleProvider$1.default = FeatureToggleProvider, Object.defineProperty(lib, "__esModule", { value: !0 }), lib.FeatureToggle = lib.FeatureToggleProvider = void 0;
var _FeatureToggle = FeatureToggle$1, _FeatureToggle2 = _interopRequireDefault(_FeatureToggle), _FeatureToggleProvider = FeatureToggleProvider$1, _FeatureToggleProvider2 = _interopRequireDefault(_FeatureToggleProvider);
function _interopRequireDefault(o) {
  return o && o.__esModule ? o : { default: o };
}
lib.FeatureToggleProvider = _FeatureToggleProvider2.default, lib.FeatureToggle = _FeatureToggle2.default;
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var lottie$1 = { exports: {} };
(function(module, exports$1) {
  var e;
  typeof document < "u" && typeof navigator < "u" && (e = function() {
    var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = !1, initialDefaultFrame = -999999, setWebWorker = function(o) {
      _useWebWorker = !!o;
    }, getWebWorker = function() {
      return _useWebWorker;
    }, setLocationHref = function(o) {
      locationHref = o;
    }, getLocationHref = function() {
      return locationHref;
    };
    function createTag(o) {
      return document.createElement(o);
    }
    function extendPrototype(o, s) {
      var h, g, j = o.length;
      for (h = 0; h < j; h += 1) for (var tt in g = o[h].prototype) Object.prototype.hasOwnProperty.call(g, tt) && (s.prototype[tt] = g[tt]);
    }
    function getDescriptor(o, s) {
      return Object.getOwnPropertyDescriptor(o, s);
    }
    function createProxyFunction(o) {
      function s() {
      }
      return s.prototype = o, s;
    }
    var audioControllerFactory = function() {
      function o(s) {
        this.audios = [], this.audioFactory = s, this._volume = 1, this._isMuted = !1;
      }
      return o.prototype = { addAudio: function(s) {
        this.audios.push(s);
      }, pause: function() {
        var s, h = this.audios.length;
        for (s = 0; s < h; s += 1) this.audios[s].pause();
      }, resume: function() {
        var s, h = this.audios.length;
        for (s = 0; s < h; s += 1) this.audios[s].resume();
      }, setRate: function(s) {
        var h, g = this.audios.length;
        for (h = 0; h < g; h += 1) this.audios[h].setRate(s);
      }, createAudio: function(s) {
        return this.audioFactory ? this.audioFactory(s) : window.Howl ? new window.Howl({ src: [s] }) : { isPlaying: !1, play: function() {
          this.isPlaying = !0;
        }, seek: function() {
          this.isPlaying = !1;
        }, playing: function() {
        }, rate: function() {
        }, setVolume: function() {
        } };
      }, setAudioFactory: function(s) {
        this.audioFactory = s;
      }, setVolume: function(s) {
        this._volume = s, this._updateVolume();
      }, mute: function() {
        this._isMuted = !0, this._updateVolume();
      }, unmute: function() {
        this._isMuted = !1, this._updateVolume();
      }, getVolume: function() {
        return this._volume;
      }, _updateVolume: function() {
        var s, h = this.audios.length;
        for (s = 0; s < h; s += 1) this.audios[s].volume(this._volume * (this._isMuted ? 0 : 1));
      } }, function() {
        return new o();
      };
    }(), createTypedArray = /* @__PURE__ */ function() {
      function o(s, h) {
        var g, j = 0, tt = [];
        switch (s) {
          case "int16":
          case "uint8c":
            g = 1;
            break;
          default:
            g = 1.1;
        }
        for (j = 0; j < h; j += 1) tt.push(g);
        return tt;
      }
      return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? function(s, h) {
        return s === "float32" ? new Float32Array(h) : s === "int16" ? new Int16Array(h) : s === "uint8c" ? new Uint8ClampedArray(h) : o(s, h);
      } : o;
    }();
    function createSizedArray(o) {
      return Array.apply(null, { length: o });
    }
    function _typeof$6(o) {
      return (_typeof$6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
        return typeof s;
      } : function(s) {
        return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
      })(o);
    }
    var subframeEnabled = !0, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
    (function() {
      var o, s = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], h = s.length;
      for (o = 0; o < h; o += 1) BMMath[s[o]] = Math[s[o]];
    })(), BMMath.random = Math.random, BMMath.abs = function(o) {
      if (_typeof$6(o) === "object" && o.length) {
        var s, h = createSizedArray(o.length), g = o.length;
        for (s = 0; s < g; s += 1) h[s] = Math.abs(o[s]);
        return h;
      }
      return Math.abs(o);
    };
    var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = 0.5519;
    function styleDiv(o) {
      o.style.position = "absolute", o.style.top = 0, o.style.left = 0, o.style.display = "block", o.style.transformOrigin = "0 0", o.style.webkitTransformOrigin = "0 0", o.style.backfaceVisibility = "visible", o.style.webkitBackfaceVisibility = "visible", o.style.transformStyle = "preserve-3d", o.style.webkitTransformStyle = "preserve-3d", o.style.mozTransformStyle = "preserve-3d";
    }
    function BMEnterFrameEvent(o, s, h, g) {
      this.type = o, this.currentTime = s, this.totalTime = h, this.direction = g < 0 ? -1 : 1;
    }
    function BMCompleteEvent(o, s) {
      this.type = o, this.direction = s < 0 ? -1 : 1;
    }
    function BMCompleteLoopEvent(o, s, h, g) {
      this.type = o, this.currentLoop = h, this.totalLoops = s, this.direction = g < 0 ? -1 : 1;
    }
    function BMSegmentStartEvent(o, s, h) {
      this.type = o, this.firstFrame = s, this.totalFrames = h;
    }
    function BMDestroyEvent(o, s) {
      this.type = o, this.target = s;
    }
    function BMRenderFrameErrorEvent(o, s) {
      this.type = "renderFrameError", this.nativeError = o, this.currentTime = s;
    }
    function BMConfigErrorEvent(o) {
      this.type = "configError", this.nativeError = o;
    }
    var createElementID = /* @__PURE__ */ function() {
      var o = 0;
      return function() {
        return idPrefix$1 + "__lottie_element_" + (o += 1);
      };
    }();
    function HSVtoRGB(o, s, h) {
      var g, j, tt, rt, at, it, st, lt;
      switch (it = h * (1 - s), st = h * (1 - (at = 6 * o - (rt = Math.floor(6 * o))) * s), lt = h * (1 - (1 - at) * s), rt % 6) {
        case 0:
          g = h, j = lt, tt = it;
          break;
        case 1:
          g = st, j = h, tt = it;
          break;
        case 2:
          g = it, j = h, tt = lt;
          break;
        case 3:
          g = it, j = st, tt = h;
          break;
        case 4:
          g = lt, j = it, tt = h;
          break;
        case 5:
          g = h, j = it, tt = st;
      }
      return [g, j, tt];
    }
    function RGBtoHSV(o, s, h) {
      var g, j = Math.max(o, s, h), tt = Math.min(o, s, h), rt = j - tt, at = j === 0 ? 0 : rt / j, it = j / 255;
      switch (j) {
        case tt:
          g = 0;
          break;
        case o:
          g = s - h + rt * (s < h ? 6 : 0), g /= 6 * rt;
          break;
        case s:
          g = h - o + 2 * rt, g /= 6 * rt;
          break;
        case h:
          g = o - s + 4 * rt, g /= 6 * rt;
      }
      return [g, at, it];
    }
    function addSaturationToRGB(o, s) {
      var h = RGBtoHSV(255 * o[0], 255 * o[1], 255 * o[2]);
      return h[1] += s, h[1] > 1 ? h[1] = 1 : h[1] <= 0 && (h[1] = 0), HSVtoRGB(h[0], h[1], h[2]);
    }
    function addBrightnessToRGB(o, s) {
      var h = RGBtoHSV(255 * o[0], 255 * o[1], 255 * o[2]);
      return h[2] += s, h[2] > 1 ? h[2] = 1 : h[2] < 0 && (h[2] = 0), HSVtoRGB(h[0], h[1], h[2]);
    }
    function addHueToRGB(o, s) {
      var h = RGBtoHSV(255 * o[0], 255 * o[1], 255 * o[2]);
      return h[0] += s / 360, h[0] > 1 ? h[0] -= 1 : h[0] < 0 && (h[0] += 1), HSVtoRGB(h[0], h[1], h[2]);
    }
    var rgbToHex = function() {
      var o, s, h = [];
      for (o = 0; o < 256; o += 1) s = o.toString(16), h[o] = s.length === 1 ? "0" + s : s;
      return function(g, j, tt) {
        return g < 0 && (g = 0), j < 0 && (j = 0), tt < 0 && (tt = 0), "#" + h[g] + h[j] + h[tt];
      };
    }(), setSubframeEnabled = function(o) {
      subframeEnabled = !!o;
    }, getSubframeEnabled = function() {
      return subframeEnabled;
    }, setExpressionsPlugin = function(o) {
      expressionsPlugin = o;
    }, getExpressionsPlugin = function() {
      return expressionsPlugin;
    }, setExpressionInterfaces = function(o) {
      expressionsInterfaces = o;
    }, getExpressionInterfaces = function() {
      return expressionsInterfaces;
    }, setDefaultCurveSegments = function(o) {
      defaultCurveSegments = o;
    }, getDefaultCurveSegments = function() {
      return defaultCurveSegments;
    }, setIdPrefix = function(o) {
      idPrefix$1 = o;
    };
    function createNS(o) {
      return document.createElementNS(svgNS, o);
    }
    function _typeof$5(o) {
      return (_typeof$5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
        return typeof s;
      } : function(s) {
        return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
      })(o);
    }
    var dataManager = /* @__PURE__ */ function() {
      var o, s, h = 1, g = [], j = { onmessage: function() {
      }, postMessage: function(it) {
        o({ data: it });
      } }, tt = { postMessage: function(it) {
        j.onmessage({ data: it });
      } };
      function rt() {
        s || (s = function(it) {
          if (window.Worker && window.Blob && getWebWorker()) {
            var st = new Blob(["var _workerSelf = self; self.onmessage = ", it.toString()], { type: "text/javascript" }), lt = URL.createObjectURL(st);
            return new Worker(lt);
          }
          return o = it, j;
        }(function(it) {
          if (tt.dataManager || (tt.dataManager = function() {
            function lt(bt, kt) {
              var wt, xt, Tt, It, qt, Wt, Nt = bt.length;
              for (xt = 0; xt < Nt; xt += 1) if ("ks" in (wt = bt[xt]) && !wt.completed) {
                if (wt.completed = !0, wt.hasMask) {
                  var Yt = wt.masksProperties;
                  for (It = Yt.length, Tt = 0; Tt < It; Tt += 1) if (Yt[Tt].pt.k.i) ht(Yt[Tt].pt.k);
                  else for (Wt = Yt[Tt].pt.k.length, qt = 0; qt < Wt; qt += 1) Yt[Tt].pt.k[qt].s && ht(Yt[Tt].pt.k[qt].s[0]), Yt[Tt].pt.k[qt].e && ht(Yt[Tt].pt.k[qt].e[0]);
                }
                wt.ty === 0 ? (wt.layers = ot(wt.refId, kt), lt(wt.layers, kt)) : wt.ty === 4 ? ft(wt.shapes) : wt.ty === 5 && _t(wt);
              }
            }
            function ot(bt, kt) {
              var wt = function(xt, Tt) {
                for (var It = 0, qt = Tt.length; It < qt; ) {
                  if (Tt[It].id === xt) return Tt[It];
                  It += 1;
                }
                return null;
              }(bt, kt);
              return wt ? wt.layers.__used ? JSON.parse(JSON.stringify(wt.layers)) : (wt.layers.__used = !0, wt.layers) : null;
            }
            function ft(bt) {
              var kt, wt, xt;
              for (kt = bt.length - 1; kt >= 0; kt -= 1) if (bt[kt].ty === "sh") if (bt[kt].ks.k.i) ht(bt[kt].ks.k);
              else for (xt = bt[kt].ks.k.length, wt = 0; wt < xt; wt += 1) bt[kt].ks.k[wt].s && ht(bt[kt].ks.k[wt].s[0]), bt[kt].ks.k[wt].e && ht(bt[kt].ks.k[wt].e[0]);
              else bt[kt].ty === "gr" && ft(bt[kt].it);
            }
            function ht(bt) {
              var kt, wt = bt.i.length;
              for (kt = 0; kt < wt; kt += 1) bt.i[kt][0] += bt.v[kt][0], bt.i[kt][1] += bt.v[kt][1], bt.o[kt][0] += bt.v[kt][0], bt.o[kt][1] += bt.v[kt][1];
            }
            function pt(bt, kt) {
              var wt = kt ? kt.split(".") : [100, 100, 100];
              return bt[0] > wt[0] || !(wt[0] > bt[0]) && (bt[1] > wt[1] || !(wt[1] > bt[1]) && (bt[2] > wt[2] || !(wt[2] > bt[2]) && null));
            }
            var dt = /* @__PURE__ */ function() {
              var bt = [4, 4, 14];
              function kt(xt) {
                var Tt = xt.t.d;
                xt.t.d = { k: [{ s: Tt, t: 0 }] };
              }
              function wt(xt) {
                var Tt, It = xt.length;
                for (Tt = 0; Tt < It; Tt += 1) xt[Tt].ty === 5 && kt(xt[Tt]);
              }
              return function(xt) {
                if (pt(bt, xt.v) && (wt(xt.layers), xt.assets)) {
                  var Tt, It = xt.assets.length;
                  for (Tt = 0; Tt < It; Tt += 1) xt.assets[Tt].layers && wt(xt.assets[Tt].layers);
                }
              };
            }(), ct = /* @__PURE__ */ function() {
              var bt = [4, 7, 99];
              return function(kt) {
                if (kt.chars && !pt(bt, kt.v)) {
                  var wt, xt = kt.chars.length;
                  for (wt = 0; wt < xt; wt += 1) {
                    var Tt = kt.chars[wt];
                    Tt.data && Tt.data.shapes && (ft(Tt.data.shapes), Tt.data.ip = 0, Tt.data.op = 99999, Tt.data.st = 0, Tt.data.sr = 1, Tt.data.ks = { p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 } }, kt.chars[wt].t || (Tt.data.shapes.push({ ty: "no" }), Tt.data.shapes[0].it.push({ p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 }, sk: { k: 0, a: 0 }, sa: { k: 0, a: 0 }, ty: "tr" })));
                  }
                }
              };
            }(), mt = /* @__PURE__ */ function() {
              var bt = [5, 7, 15];
              function kt(xt) {
                var Tt = xt.t.p;
                typeof Tt.a == "number" && (Tt.a = { a: 0, k: Tt.a }), typeof Tt.p == "number" && (Tt.p = { a: 0, k: Tt.p }), typeof Tt.r == "number" && (Tt.r = { a: 0, k: Tt.r });
              }
              function wt(xt) {
                var Tt, It = xt.length;
                for (Tt = 0; Tt < It; Tt += 1) xt[Tt].ty === 5 && kt(xt[Tt]);
              }
              return function(xt) {
                if (pt(bt, xt.v) && (wt(xt.layers), xt.assets)) {
                  var Tt, It = xt.assets.length;
                  for (Tt = 0; Tt < It; Tt += 1) xt.assets[Tt].layers && wt(xt.assets[Tt].layers);
                }
              };
            }(), yt = /* @__PURE__ */ function() {
              var bt = [4, 1, 9];
              function kt(xt) {
                var Tt, It, qt, Wt = xt.length;
                for (Tt = 0; Tt < Wt; Tt += 1) if (xt[Tt].ty === "gr") kt(xt[Tt].it);
                else if (xt[Tt].ty === "fl" || xt[Tt].ty === "st") if (xt[Tt].c.k && xt[Tt].c.k[0].i) for (qt = xt[Tt].c.k.length, It = 0; It < qt; It += 1) xt[Tt].c.k[It].s && (xt[Tt].c.k[It].s[0] /= 255, xt[Tt].c.k[It].s[1] /= 255, xt[Tt].c.k[It].s[2] /= 255, xt[Tt].c.k[It].s[3] /= 255), xt[Tt].c.k[It].e && (xt[Tt].c.k[It].e[0] /= 255, xt[Tt].c.k[It].e[1] /= 255, xt[Tt].c.k[It].e[2] /= 255, xt[Tt].c.k[It].e[3] /= 255);
                else xt[Tt].c.k[0] /= 255, xt[Tt].c.k[1] /= 255, xt[Tt].c.k[2] /= 255, xt[Tt].c.k[3] /= 255;
              }
              function wt(xt) {
                var Tt, It = xt.length;
                for (Tt = 0; Tt < It; Tt += 1) xt[Tt].ty === 4 && kt(xt[Tt].shapes);
              }
              return function(xt) {
                if (pt(bt, xt.v) && (wt(xt.layers), xt.assets)) {
                  var Tt, It = xt.assets.length;
                  for (Tt = 0; Tt < It; Tt += 1) xt.assets[Tt].layers && wt(xt.assets[Tt].layers);
                }
              };
            }(), vt = /* @__PURE__ */ function() {
              var bt = [4, 4, 18];
              function kt(xt) {
                var Tt, It, qt;
                for (Tt = xt.length - 1; Tt >= 0; Tt -= 1) if (xt[Tt].ty === "sh") if (xt[Tt].ks.k.i) xt[Tt].ks.k.c = xt[Tt].closed;
                else for (qt = xt[Tt].ks.k.length, It = 0; It < qt; It += 1) xt[Tt].ks.k[It].s && (xt[Tt].ks.k[It].s[0].c = xt[Tt].closed), xt[Tt].ks.k[It].e && (xt[Tt].ks.k[It].e[0].c = xt[Tt].closed);
                else xt[Tt].ty === "gr" && kt(xt[Tt].it);
              }
              function wt(xt) {
                var Tt, It, qt, Wt, Nt, Yt, sr = xt.length;
                for (It = 0; It < sr; It += 1) {
                  if ((Tt = xt[It]).hasMask) {
                    var ur = Tt.masksProperties;
                    for (Wt = ur.length, qt = 0; qt < Wt; qt += 1) if (ur[qt].pt.k.i) ur[qt].pt.k.c = ur[qt].cl;
                    else for (Yt = ur[qt].pt.k.length, Nt = 0; Nt < Yt; Nt += 1) ur[qt].pt.k[Nt].s && (ur[qt].pt.k[Nt].s[0].c = ur[qt].cl), ur[qt].pt.k[Nt].e && (ur[qt].pt.k[Nt].e[0].c = ur[qt].cl);
                  }
                  Tt.ty === 4 && kt(Tt.shapes);
                }
              }
              return function(xt) {
                if (pt(bt, xt.v) && (wt(xt.layers), xt.assets)) {
                  var Tt, It = xt.assets.length;
                  for (Tt = 0; Tt < It; Tt += 1) xt.assets[Tt].layers && wt(xt.assets[Tt].layers);
                }
              };
            }();
            function _t(bt) {
              bt.t.a.length === 0 && bt.t.p;
            }
            var Pt = { completeData: function(bt) {
              bt.__complete || (yt(bt), dt(bt), ct(bt), mt(bt), vt(bt), lt(bt.layers, bt.assets), function(kt, wt) {
                if (kt) {
                  var xt = 0, Tt = kt.length;
                  for (xt = 0; xt < Tt; xt += 1) kt[xt].t === 1 && (kt[xt].data.layers = ot(kt[xt].data.refId, wt), lt(kt[xt].data.layers, wt));
                }
              }(bt.chars, bt.assets), bt.__complete = !0);
            } };
            return Pt.checkColors = yt, Pt.checkChars = ct, Pt.checkPathProperties = mt, Pt.checkShapes = vt, Pt.completeLayers = lt, Pt;
          }()), tt.assetLoader || (tt.assetLoader = /* @__PURE__ */ function() {
            function lt(ot) {
              var ft = ot.getResponseHeader("content-type");
              return ft && ot.responseType === "json" && ft.indexOf("json") !== -1 || ot.response && _typeof$5(ot.response) === "object" ? ot.response : ot.response && typeof ot.response == "string" ? JSON.parse(ot.response) : ot.responseText ? JSON.parse(ot.responseText) : null;
            }
            return { load: function(ot, ft, ht, pt) {
              var dt, ct = new XMLHttpRequest();
              try {
                ct.responseType = "json";
              } catch {
              }
              ct.onreadystatechange = function() {
                if (ct.readyState === 4) if (ct.status === 200) dt = lt(ct), ht(dt);
                else try {
                  dt = lt(ct), ht(dt);
                } catch (mt) {
                  pt && pt(mt);
                }
              };
              try {
                ct.open(["G", "E", "T"].join(""), ot, !0);
              } catch {
                ct.open(["G", "E", "T"].join(""), ft + "/" + ot, !0);
              }
              ct.send();
            } };
          }()), it.data.type === "loadAnimation") tt.assetLoader.load(it.data.path, it.data.fullPath, function(lt) {
            tt.dataManager.completeData(lt), tt.postMessage({ id: it.data.id, payload: lt, status: "success" });
          }, function() {
            tt.postMessage({ id: it.data.id, status: "error" });
          });
          else if (it.data.type === "complete") {
            var st = it.data.animation;
            tt.dataManager.completeData(st), tt.postMessage({ id: it.data.id, payload: st, status: "success" });
          } else it.data.type === "loadData" && tt.assetLoader.load(it.data.path, it.data.fullPath, function(lt) {
            tt.postMessage({ id: it.data.id, payload: lt, status: "success" });
          }, function() {
            tt.postMessage({ id: it.data.id, status: "error" });
          });
        }), s.onmessage = function(it) {
          var st = it.data, lt = st.id, ot = g[lt];
          g[lt] = null, st.status === "success" ? ot.onComplete(st.payload) : ot.onError && ot.onError();
        });
      }
      function at(it, st) {
        var lt = "processId_" + (h += 1);
        return g[lt] = { onComplete: it, onError: st }, lt;
      }
      return { loadAnimation: function(it, st, lt) {
        rt();
        var ot = at(st, lt);
        s.postMessage({ type: "loadAnimation", path: it, fullPath: window.location.origin + window.location.pathname, id: ot });
      }, loadData: function(it, st, lt) {
        rt();
        var ot = at(st, lt);
        s.postMessage({ type: "loadData", path: it, fullPath: window.location.origin + window.location.pathname, id: ot });
      }, completeAnimation: function(it, st, lt) {
        rt();
        var ot = at(st, lt);
        s.postMessage({ type: "complete", animation: it, id: ot });
      } };
    }(), ImagePreloader = function() {
      var o = function() {
        var at = createTag("canvas");
        at.width = 1, at.height = 1;
        var it = at.getContext("2d");
        return it.fillStyle = "rgba(0,0,0,0)", it.fillRect(0, 0, 1, 1), at;
      }();
      function s() {
        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function h() {
        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function g(at, it, st) {
        var lt = "";
        if (at.e) lt = at.p;
        else if (it) {
          var ot = at.p;
          ot.indexOf("images/") !== -1 && (ot = ot.split("/")[1]), lt = it + ot;
        } else lt = st, lt += at.u ? at.u : "", lt += at.p;
        return lt;
      }
      function j(at) {
        var it = 0, st = setInterval((function() {
          (at.getBBox().width || it > 500) && (this._imageLoaded(), clearInterval(st)), it += 1;
        }).bind(this), 50);
      }
      function tt(at) {
        var it = { assetData: at }, st = g(at, this.assetsPath, this.path);
        return dataManager.loadData(st, (function(lt) {
          it.img = lt, this._footageLoaded();
        }).bind(this), (function() {
          it.img = {}, this._footageLoaded();
        }).bind(this)), it;
      }
      function rt() {
        this._imageLoaded = s.bind(this), this._footageLoaded = h.bind(this), this.testImageLoaded = j.bind(this), this.createFootageData = tt.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
      }
      return rt.prototype = { loadAssets: function(at, it) {
        this.imagesLoadedCb = it;
        var st, lt = at.length;
        for (st = 0; st < lt; st += 1) at[st].layers || (at[st].t && at[st].t !== "seq" ? at[st].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(at[st]))) : (this.totalImages += 1, this.images.push(this._createImageData(at[st]))));
      }, setAssetsPath: function(at) {
        this.assetsPath = at || "";
      }, setPath: function(at) {
        this.path = at || "";
      }, loadedImages: function() {
        return this.totalImages === this.loadedAssets;
      }, loadedFootages: function() {
        return this.totalFootages === this.loadedFootagesCount;
      }, destroy: function() {
        this.imagesLoadedCb = null, this.images.length = 0;
      }, getAsset: function(at) {
        for (var it = 0, st = this.images.length; it < st; ) {
          if (this.images[it].assetData === at) return this.images[it].img;
          it += 1;
        }
        return null;
      }, createImgData: function(at) {
        var it = g(at, this.assetsPath, this.path), st = createTag("img");
        st.crossOrigin = "anonymous", st.addEventListener("load", this._imageLoaded, !1), st.addEventListener("error", (function() {
          lt.img = o, this._imageLoaded();
        }).bind(this), !1), st.src = it;
        var lt = { img: st, assetData: at };
        return lt;
      }, createImageData: function(at) {
        var it = g(at, this.assetsPath, this.path), st = createNS("image");
        isSafari ? this.testImageLoaded(st) : st.addEventListener("load", this._imageLoaded, !1), st.addEventListener("error", (function() {
          lt.img = o, this._imageLoaded();
        }).bind(this), !1), st.setAttributeNS("http://www.w3.org/1999/xlink", "href", it), this._elementHelper.append ? this._elementHelper.append(st) : this._elementHelper.appendChild(st);
        var lt = { img: st, assetData: at };
        return lt;
      }, imageLoaded: s, footageLoaded: h, setCacheType: function(at, it) {
        at === "svg" ? (this._elementHelper = it, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
      } }, rt;
    }();
    function BaseEvent() {
    }
    BaseEvent.prototype = { triggerEvent: function(o, s) {
      if (this._cbs[o]) for (var h = this._cbs[o], g = 0; g < h.length; g += 1) h[g](s);
    }, addEventListener: function(o, s) {
      return this._cbs[o] || (this._cbs[o] = []), this._cbs[o].push(s), (function() {
        this.removeEventListener(o, s);
      }).bind(this);
    }, removeEventListener: function(o, s) {
      if (s) {
        if (this._cbs[o]) {
          for (var h = 0, g = this._cbs[o].length; h < g; ) this._cbs[o][h] === s && (this._cbs[o].splice(h, 1), h -= 1, g -= 1), h += 1;
          this._cbs[o].length || (this._cbs[o] = null);
        }
      } else this._cbs[o] = null;
    } };
    var markerParser = /* @__PURE__ */ function() {
      function o(s) {
        for (var h, g = s.split(`\r
`), j = {}, tt = 0, rt = 0; rt < g.length; rt += 1) (h = g[rt].split(":")).length === 2 && (j[h[0]] = h[1].trim(), tt += 1);
        if (tt === 0) throw new Error();
        return j;
      }
      return function(s) {
        for (var h = [], g = 0; g < s.length; g += 1) {
          var j = s[g], tt = { time: j.tm, duration: j.dr };
          try {
            tt.payload = JSON.parse(s[g].cm);
          } catch {
            try {
              tt.payload = o(s[g].cm);
            } catch {
              tt.payload = { name: s[g].cm };
            }
          }
          h.push(tt);
        }
        return h;
      };
    }(), ProjectInterface = /* @__PURE__ */ function() {
      function o(s) {
        this.compositions.push(s);
      }
      return function() {
        function s(h) {
          for (var g = 0, j = this.compositions.length; g < j; ) {
            if (this.compositions[g].data && this.compositions[g].data.nm === h) return this.compositions[g].prepareFrame && this.compositions[g].data.xt && this.compositions[g].prepareFrame(this.currentFrame), this.compositions[g].compInterface;
            g += 1;
          }
          return null;
        }
        return s.compositions = [], s.currentFrame = 0, s.registerComposition = o, s;
      };
    }(), renderers = {}, registerRenderer = function(o, s) {
      renderers[o] = s;
    };
    function getRenderer(o) {
      return renderers[o];
    }
    function getRegisteredRenderer() {
      if (renderers.canvas) return "canvas";
      for (var o in renderers) if (renderers[o]) return o;
      return "";
    }
    function _typeof$4(o) {
      return (_typeof$4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
        return typeof s;
      } : function(s) {
        return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
      })(o);
    }
    var AnimationItem = function() {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader(), this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin();
    };
    extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(o) {
      (o.wrapper || o.container) && (this.wrapper = o.wrapper || o.container);
      var s = "svg";
      o.animType ? s = o.animType : o.renderer && (s = o.renderer);
      var h = getRenderer(s);
      this.renderer = new h(this, o.rendererSettings), this.imagePreloader.setCacheType(s, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = s, o.loop === "" || o.loop === null || o.loop === void 0 || o.loop === !0 ? this.loop = !0 : o.loop === !1 ? this.loop = !1 : this.loop = parseInt(o.loop, 10), this.autoplay = !("autoplay" in o) || o.autoplay, this.name = o.name ? o.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(o, "autoloadSegments") || o.autoloadSegments, this.assetsPath = o.assetsPath, this.initialSegment = o.initialSegment, o.audioFactory && this.audioController.setAudioFactory(o.audioFactory), o.animationData ? this.setupAnimation(o.animationData) : o.path && (o.path.lastIndexOf("\\") !== -1 ? this.path = o.path.substr(0, o.path.lastIndexOf("\\") + 1) : this.path = o.path.substr(0, o.path.lastIndexOf("/") + 1), this.fileName = o.path.substr(o.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(o.path, this.configAnimation, this.onSetupError));
    }, AnimationItem.prototype.onSetupError = function() {
      this.trigger("data_failed");
    }, AnimationItem.prototype.setupAnimation = function(o) {
      dataManager.completeAnimation(o, this.configAnimation);
    }, AnimationItem.prototype.setData = function(o, s) {
      s && _typeof$4(s) !== "object" && (s = JSON.parse(s));
      var h = { wrapper: o, animationData: s }, g = o.attributes;
      h.path = g.getNamedItem("data-animation-path") ? g.getNamedItem("data-animation-path").value : g.getNamedItem("data-bm-path") ? g.getNamedItem("data-bm-path").value : g.getNamedItem("bm-path") ? g.getNamedItem("bm-path").value : "", h.animType = g.getNamedItem("data-anim-type") ? g.getNamedItem("data-anim-type").value : g.getNamedItem("data-bm-type") ? g.getNamedItem("data-bm-type").value : g.getNamedItem("bm-type") ? g.getNamedItem("bm-type").value : g.getNamedItem("data-bm-renderer") ? g.getNamedItem("data-bm-renderer").value : g.getNamedItem("bm-renderer") ? g.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
      var j = g.getNamedItem("data-anim-loop") ? g.getNamedItem("data-anim-loop").value : g.getNamedItem("data-bm-loop") ? g.getNamedItem("data-bm-loop").value : g.getNamedItem("bm-loop") ? g.getNamedItem("bm-loop").value : "";
      j === "false" ? h.loop = !1 : j === "true" ? h.loop = !0 : j !== "" && (h.loop = parseInt(j, 10));
      var tt = g.getNamedItem("data-anim-autoplay") ? g.getNamedItem("data-anim-autoplay").value : g.getNamedItem("data-bm-autoplay") ? g.getNamedItem("data-bm-autoplay").value : !g.getNamedItem("bm-autoplay") || g.getNamedItem("bm-autoplay").value;
      h.autoplay = tt !== "false", h.name = g.getNamedItem("data-name") ? g.getNamedItem("data-name").value : g.getNamedItem("data-bm-name") ? g.getNamedItem("data-bm-name").value : g.getNamedItem("bm-name") ? g.getNamedItem("bm-name").value : "", (g.getNamedItem("data-anim-prerender") ? g.getNamedItem("data-anim-prerender").value : g.getNamedItem("data-bm-prerender") ? g.getNamedItem("data-bm-prerender").value : g.getNamedItem("bm-prerender") ? g.getNamedItem("bm-prerender").value : "") === "false" && (h.prerender = !1), h.path ? this.setParams(h) : this.trigger("destroy");
    }, AnimationItem.prototype.includeLayers = function(o) {
      o.op > this.animationData.op && (this.animationData.op = o.op, this.totalFrames = Math.floor(o.op - this.animationData.ip));
      var s, h, g = this.animationData.layers, j = g.length, tt = o.layers, rt = tt.length;
      for (h = 0; h < rt; h += 1) for (s = 0; s < j; ) {
        if (g[s].id === tt[h].id) {
          g[s] = tt[h];
          break;
        }
        s += 1;
      }
      if ((o.chars || o.fonts) && (this.renderer.globalData.fontManager.addChars(o.chars), this.renderer.globalData.fontManager.addFonts(o.fonts, this.renderer.globalData.defs)), o.assets) for (j = o.assets.length, s = 0; s < j; s += 1) this.animationData.assets.push(o.assets[s]);
      this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
    }, AnimationItem.prototype.onSegmentComplete = function(o) {
      this.animationData = o;
      var s = getExpressionsPlugin();
      s && s.initExpressions(this), this.loadNextSegment();
    }, AnimationItem.prototype.loadNextSegment = function() {
      var o = this.animationData.segments;
      if (!o || o.length === 0 || !this.autoloadSegments) return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
      var s = o.shift();
      this.timeCompleted = s.time * this.frameRate;
      var h = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, dataManager.loadData(h, this.includeLayers.bind(this), (function() {
        this.trigger("data_failed");
      }).bind(this));
    }, AnimationItem.prototype.loadSegments = function() {
      this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
    }, AnimationItem.prototype.imagesLoaded = function() {
      this.trigger("loaded_images"), this.checkLoaded();
    }, AnimationItem.prototype.preloadImages = function() {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
    }, AnimationItem.prototype.configAnimation = function(o) {
      if (this.renderer) try {
        this.animationData = o, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(o), o.assets || (o.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(o.assets), this.markers = markerParser(o.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
      } catch (s) {
        this.triggerConfigError(s);
      }
    }, AnimationItem.prototype.waitForFontsLoaded = function() {
      this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
    }, AnimationItem.prototype.checkLoaded = function() {
      if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
        this.isLoaded = !0;
        var o = getExpressionsPlugin();
        o && o.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
          this.trigger("DOMLoaded");
        }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
      }
    }, AnimationItem.prototype.resize = function(o, s) {
      var h = typeof o == "number" ? o : void 0, g = typeof s == "number" ? s : void 0;
      this.renderer.updateContainerSize(h, g);
    }, AnimationItem.prototype.setSubframe = function(o) {
      this.isSubframeEnabled = !!o;
    }, AnimationItem.prototype.gotoFrame = function() {
      this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
    }, AnimationItem.prototype.renderFrame = function() {
      if (this.isLoaded !== !1 && this.renderer) try {
        this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
      } catch (o) {
        this.triggerRenderFrameError(o);
      }
    }, AnimationItem.prototype.play = function(o) {
      o && this.name !== o || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
    }, AnimationItem.prototype.pause = function(o) {
      o && this.name !== o || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause());
    }, AnimationItem.prototype.togglePause = function(o) {
      o && this.name !== o || (this.isPaused === !0 ? this.play() : this.pause());
    }, AnimationItem.prototype.stop = function(o) {
      o && this.name !== o || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
    }, AnimationItem.prototype.getMarkerData = function(o) {
      for (var s, h = 0; h < this.markers.length; h += 1) if ((s = this.markers[h]).payload && s.payload.name === o) return s;
      return null;
    }, AnimationItem.prototype.goToAndStop = function(o, s, h) {
      if (!h || this.name === h) {
        var g = Number(o);
        if (isNaN(g)) {
          var j = this.getMarkerData(o);
          j && this.goToAndStop(j.time, !0);
        } else s ? this.setCurrentRawFrameValue(o) : this.setCurrentRawFrameValue(o * this.frameModifier);
        this.pause();
      }
    }, AnimationItem.prototype.goToAndPlay = function(o, s, h) {
      if (!h || this.name === h) {
        var g = Number(o);
        if (isNaN(g)) {
          var j = this.getMarkerData(o);
          j && (j.duration ? this.playSegments([j.time, j.time + j.duration], !0) : this.goToAndStop(j.time, !0));
        } else this.goToAndStop(g, s, h);
        this.play();
      }
    }, AnimationItem.prototype.advanceTime = function(o) {
      if (this.isPaused !== !0 && this.isLoaded !== !1) {
        var s = this.currentRawFrame + o * this.frameModifier, h = !1;
        s >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? s >= this.totalFrames ? (this.playCount += 1, this.checkSegments(s % this.totalFrames) || (this.setCurrentRawFrameValue(s % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(s) : this.checkSegments(s > this.totalFrames ? s % this.totalFrames : 0) || (h = !0, s = this.totalFrames - 1) : s < 0 ? this.checkSegments(s % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && this.loop !== !0 ? (h = !0, s = 0) : (this.setCurrentRawFrameValue(this.totalFrames + s % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(s), h && (this.setCurrentRawFrameValue(s), this.pause(), this.trigger("complete"));
      }
    }, AnimationItem.prototype.adjustSegment = function(o, s) {
      this.playCount = 0, o[1] < o[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = o[0] - o[1], this.timeCompleted = this.totalFrames, this.firstFrame = o[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - s)) : o[1] > o[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = o[1] - o[0], this.timeCompleted = this.totalFrames, this.firstFrame = o[0], this.setCurrentRawFrameValue(1e-3 + s)), this.trigger("segmentStart");
    }, AnimationItem.prototype.setSegment = function(o, s) {
      var h = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < o ? h = o : this.currentRawFrame + this.firstFrame > s && (h = s - o)), this.firstFrame = o, this.totalFrames = s - o, this.timeCompleted = this.totalFrames, h !== -1 && this.goToAndStop(h, !0);
    }, AnimationItem.prototype.playSegments = function(o, s) {
      if (s && (this.segments.length = 0), _typeof$4(o[0]) === "object") {
        var h, g = o.length;
        for (h = 0; h < g; h += 1) this.segments.push(o[h]);
      } else this.segments.push(o);
      this.segments.length && s && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
    }, AnimationItem.prototype.resetSegments = function(o) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), o && this.checkSegments(0);
    }, AnimationItem.prototype.checkSegments = function(o) {
      return !!this.segments.length && (this.adjustSegment(this.segments.shift(), o), !0);
    }, AnimationItem.prototype.destroy = function(o) {
      o && this.name !== o || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
    }, AnimationItem.prototype.setCurrentRawFrameValue = function(o) {
      this.currentRawFrame = o, this.gotoFrame();
    }, AnimationItem.prototype.setSpeed = function(o) {
      this.playSpeed = o, this.updaFrameModifier();
    }, AnimationItem.prototype.setDirection = function(o) {
      this.playDirection = o < 0 ? -1 : 1, this.updaFrameModifier();
    }, AnimationItem.prototype.setLoop = function(o) {
      this.loop = o;
    }, AnimationItem.prototype.setVolume = function(o, s) {
      s && this.name !== s || this.audioController.setVolume(o);
    }, AnimationItem.prototype.getVolume = function() {
      return this.audioController.getVolume();
    }, AnimationItem.prototype.mute = function(o) {
      o && this.name !== o || this.audioController.mute();
    }, AnimationItem.prototype.unmute = function(o) {
      o && this.name !== o || this.audioController.unmute();
    }, AnimationItem.prototype.updaFrameModifier = function() {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
    }, AnimationItem.prototype.getPath = function() {
      return this.path;
    }, AnimationItem.prototype.getAssetsPath = function(o) {
      var s = "";
      if (o.e) s = o.p;
      else if (this.assetsPath) {
        var h = o.p;
        h.indexOf("images/") !== -1 && (h = h.split("/")[1]), s = this.assetsPath + h;
      } else s = this.path, s += o.u ? o.u : "", s += o.p;
      return s;
    }, AnimationItem.prototype.getAssetData = function(o) {
      for (var s = 0, h = this.assets.length; s < h; ) {
        if (o === this.assets[s].id) return this.assets[s];
        s += 1;
      }
      return null;
    }, AnimationItem.prototype.hide = function() {
      this.renderer.hide();
    }, AnimationItem.prototype.show = function() {
      this.renderer.show();
    }, AnimationItem.prototype.getDuration = function(o) {
      return o ? this.totalFrames : this.totalFrames / this.frameRate;
    }, AnimationItem.prototype.updateDocumentData = function(o, s, h) {
      try {
        this.renderer.getElementByPath(o).updateDocumentData(s, h);
      } catch {
      }
    }, AnimationItem.prototype.trigger = function(o) {
      if (this._cbs && this._cbs[o]) switch (o) {
        case "enterFrame":
          this.triggerEvent(o, new BMEnterFrameEvent(o, this.currentFrame, this.totalFrames, this.frameModifier));
          break;
        case "drawnFrame":
          this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(o, this.drawnFrameEvent);
          break;
        case "loopComplete":
          this.triggerEvent(o, new BMCompleteLoopEvent(o, this.loop, this.playCount, this.frameMult));
          break;
        case "complete":
          this.triggerEvent(o, new BMCompleteEvent(o, this.frameMult));
          break;
        case "segmentStart":
          this.triggerEvent(o, new BMSegmentStartEvent(o, this.firstFrame, this.totalFrames));
          break;
        case "destroy":
          this.triggerEvent(o, new BMDestroyEvent(o, this));
          break;
        default:
          this.triggerEvent(o);
      }
      o === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(o, this.currentFrame, this.totalFrames, this.frameMult)), o === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(o, this.loop, this.playCount, this.frameMult)), o === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(o, this.frameMult)), o === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(o, this.firstFrame, this.totalFrames)), o === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(o, this));
    }, AnimationItem.prototype.triggerRenderFrameError = function(o) {
      var s = new BMRenderFrameErrorEvent(o, this.currentFrame);
      this.triggerEvent("error", s), this.onError && this.onError.call(this, s);
    }, AnimationItem.prototype.triggerConfigError = function(o) {
      var s = new BMConfigErrorEvent(o, this.currentFrame);
      this.triggerEvent("error", s), this.onError && this.onError.call(this, s);
    };
    var animationManager = function() {
      var o = {}, s = [], h = 0, g = 0, j = 0, tt = !0, rt = !1;
      function at(dt) {
        for (var ct = 0, mt = dt.target; ct < g; ) s[ct].animation === mt && (s.splice(ct, 1), ct -= 1, g -= 1, mt.isPaused || lt()), ct += 1;
      }
      function it(dt, ct) {
        if (!dt) return null;
        for (var mt = 0; mt < g; ) {
          if (s[mt].elem === dt && s[mt].elem !== null) return s[mt].animation;
          mt += 1;
        }
        var yt = new AnimationItem();
        return ot(yt, dt), yt.setData(dt, ct), yt;
      }
      function st() {
        j += 1, pt();
      }
      function lt() {
        j -= 1;
      }
      function ot(dt, ct) {
        dt.addEventListener("destroy", at), dt.addEventListener("_active", st), dt.addEventListener("_idle", lt), s.push({ elem: ct, animation: dt }), g += 1;
      }
      function ft(dt) {
        var ct, mt = dt - h;
        for (ct = 0; ct < g; ct += 1) s[ct].animation.advanceTime(mt);
        h = dt, j && !rt ? window.requestAnimationFrame(ft) : tt = !0;
      }
      function ht(dt) {
        h = dt, window.requestAnimationFrame(ft);
      }
      function pt() {
        !rt && j && tt && (window.requestAnimationFrame(ht), tt = !1);
      }
      return o.registerAnimation = it, o.loadAnimation = function(dt) {
        var ct = new AnimationItem();
        return ot(ct, null), ct.setParams(dt), ct;
      }, o.setSpeed = function(dt, ct) {
        var mt;
        for (mt = 0; mt < g; mt += 1) s[mt].animation.setSpeed(dt, ct);
      }, o.setDirection = function(dt, ct) {
        var mt;
        for (mt = 0; mt < g; mt += 1) s[mt].animation.setDirection(dt, ct);
      }, o.play = function(dt) {
        var ct;
        for (ct = 0; ct < g; ct += 1) s[ct].animation.play(dt);
      }, o.pause = function(dt) {
        var ct;
        for (ct = 0; ct < g; ct += 1) s[ct].animation.pause(dt);
      }, o.stop = function(dt) {
        var ct;
        for (ct = 0; ct < g; ct += 1) s[ct].animation.stop(dt);
      }, o.togglePause = function(dt) {
        var ct;
        for (ct = 0; ct < g; ct += 1) s[ct].animation.togglePause(dt);
      }, o.searchAnimations = function(dt, ct, mt) {
        var yt, vt = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), _t = vt.length;
        for (yt = 0; yt < _t; yt += 1) mt && vt[yt].setAttribute("data-bm-type", mt), it(vt[yt], dt);
        if (ct && _t === 0) {
          mt || (mt = "svg");
          var Pt = document.getElementsByTagName("body")[0];
          Pt.innerText = "";
          var bt = createTag("div");
          bt.style.width = "100%", bt.style.height = "100%", bt.setAttribute("data-bm-type", mt), Pt.appendChild(bt), it(bt, dt);
        }
      }, o.resize = function() {
        var dt;
        for (dt = 0; dt < g; dt += 1) s[dt].animation.resize();
      }, o.goToAndStop = function(dt, ct, mt) {
        var yt;
        for (yt = 0; yt < g; yt += 1) s[yt].animation.goToAndStop(dt, ct, mt);
      }, o.destroy = function(dt) {
        var ct;
        for (ct = g - 1; ct >= 0; ct -= 1) s[ct].animation.destroy(dt);
      }, o.freeze = function() {
        rt = !0;
      }, o.unfreeze = function() {
        rt = !1, pt();
      }, o.setVolume = function(dt, ct) {
        var mt;
        for (mt = 0; mt < g; mt += 1) s[mt].animation.setVolume(dt, ct);
      }, o.mute = function(dt) {
        var ct;
        for (ct = 0; ct < g; ct += 1) s[ct].animation.mute(dt);
      }, o.unmute = function(dt) {
        var ct;
        for (ct = 0; ct < g; ct += 1) s[ct].animation.unmute(dt);
      }, o.getRegisteredAnimations = function() {
        var dt, ct = s.length, mt = [];
        for (dt = 0; dt < ct; dt += 1) mt.push(s[dt].animation);
        return mt;
      }, o;
    }(), BezierFactory = function() {
      var o = { getBezierEasing: function(ot, ft, ht, pt, dt) {
        var ct = dt || ("bez_" + ot + "_" + ft + "_" + ht + "_" + pt).replace(/\./g, "p");
        if (s[ct]) return s[ct];
        var mt = new lt([ot, ft, ht, pt]);
        return s[ct] = mt, mt;
      } }, s = {}, h = 11, g = 1 / (h - 1), j = typeof Float32Array == "function";
      function tt(ot, ft) {
        return 1 - 3 * ft + 3 * ot;
      }
      function rt(ot, ft) {
        return 3 * ft - 6 * ot;
      }
      function at(ot) {
        return 3 * ot;
      }
      function it(ot, ft, ht) {
        return ((tt(ft, ht) * ot + rt(ft, ht)) * ot + at(ft)) * ot;
      }
      function st(ot, ft, ht) {
        return 3 * tt(ft, ht) * ot * ot + 2 * rt(ft, ht) * ot + at(ft);
      }
      function lt(ot) {
        this._p = ot, this._mSampleValues = j ? new Float32Array(h) : new Array(h), this._precomputed = !1, this.get = this.get.bind(this);
      }
      return lt.prototype = { get: function(ot) {
        var ft = this._p[0], ht = this._p[1], pt = this._p[2], dt = this._p[3];
        return this._precomputed || this._precompute(), ft === ht && pt === dt ? ot : ot === 0 ? 0 : ot === 1 ? 1 : it(this._getTForX(ot), ht, dt);
      }, _precompute: function() {
        var ot = this._p[0], ft = this._p[1], ht = this._p[2], pt = this._p[3];
        this._precomputed = !0, (ot !== ft || ht !== pt) && this._calcSampleValues();
      }, _calcSampleValues: function() {
        for (var ot = this._p[0], ft = this._p[2], ht = 0; ht < h; ++ht) this._mSampleValues[ht] = it(ht * g, ot, ft);
      }, _getTForX: function(ot) {
        for (var ft = this._p[0], ht = this._p[2], pt = this._mSampleValues, dt = 0, ct = 1, mt = h - 1; ct !== mt && pt[ct] <= ot; ++ct) dt += g;
        var yt = dt + (ot - pt[--ct]) / (pt[ct + 1] - pt[ct]) * g, vt = st(yt, ft, ht);
        return vt >= 1e-3 ? function(_t, Pt, bt, kt) {
          for (var wt = 0; wt < 4; ++wt) {
            var xt = st(Pt, bt, kt);
            if (xt === 0) return Pt;
            Pt -= (it(Pt, bt, kt) - _t) / xt;
          }
          return Pt;
        }(ot, yt, ft, ht) : vt === 0 ? yt : function(_t, Pt, bt, kt, wt) {
          var xt, Tt, It = 0;
          do
            (xt = it(Tt = Pt + (bt - Pt) / 2, kt, wt) - _t) > 0 ? bt = Tt : Pt = Tt;
          while (Math.abs(xt) > 1e-7 && ++It < 10);
          return Tt;
        }(ot, dt, dt + g, ft, ht);
      } }, o;
    }(), pooling = /* @__PURE__ */ function() {
      return { double: function(o) {
        return o.concat(createSizedArray(o.length));
      } };
    }(), poolFactory = /* @__PURE__ */ function() {
      return function(o, s, h) {
        var g = 0, j = o, tt = createSizedArray(j), rt = { newElement: function() {
          return g ? tt[g -= 1] : s();
        }, release: function(at) {
          g === j && (tt = pooling.double(tt), j *= 2), h && h(at), tt[g] = at, g += 1;
        } };
        return rt;
      };
    }(), bezierLengthPool = poolFactory(8, function() {
      return { addedLength: 0, percents: createTypedArray("float32", getDefaultCurveSegments()), lengths: createTypedArray("float32", getDefaultCurveSegments()) };
    }), segmentsLengthPool = poolFactory(8, function() {
      return { lengths: [], totalLength: 0 };
    }, function(o) {
      var s, h = o.lengths.length;
      for (s = 0; s < h; s += 1) bezierLengthPool.release(o.lengths[s]);
      o.lengths.length = 0;
    });
    function bezFunction() {
      var o = Math;
      function s(it, st, lt, ot, ft, ht) {
        var pt = it * ot + st * ft + lt * ht - ft * ot - ht * it - lt * st;
        return pt > -1e-3 && pt < 1e-3;
      }
      var h = /* @__PURE__ */ function() {
        return function(it, st, lt, ot) {
          var ft, ht, pt, dt, ct, mt, yt = getDefaultCurveSegments(), vt = 0, _t = [], Pt = [], bt = bezierLengthPool.newElement();
          for (pt = lt.length, ft = 0; ft < yt; ft += 1) {
            for (ct = ft / (yt - 1), mt = 0, ht = 0; ht < pt; ht += 1) dt = bmPow(1 - ct, 3) * it[ht] + 3 * bmPow(1 - ct, 2) * ct * lt[ht] + 3 * (1 - ct) * bmPow(ct, 2) * ot[ht] + bmPow(ct, 3) * st[ht], _t[ht] = dt, Pt[ht] !== null && (mt += bmPow(_t[ht] - Pt[ht], 2)), Pt[ht] = _t[ht];
            mt && (vt += mt = bmSqrt(mt)), bt.percents[ft] = ct, bt.lengths[ft] = vt;
          }
          return bt.addedLength = vt, bt;
        };
      }();
      function g(it) {
        this.segmentLength = 0, this.points = new Array(it);
      }
      function j(it, st) {
        this.partialLength = it, this.point = st;
      }
      var tt = /* @__PURE__ */ function() {
        var it = {};
        return function(st, lt, ot, ft) {
          var ht = (st[0] + "_" + st[1] + "_" + lt[0] + "_" + lt[1] + "_" + ot[0] + "_" + ot[1] + "_" + ft[0] + "_" + ft[1]).replace(/\./g, "p");
          if (!it[ht]) {
            var pt, dt, ct, mt, yt, vt, _t, Pt = getDefaultCurveSegments(), bt = 0, kt = null;
            st.length === 2 && (st[0] !== lt[0] || st[1] !== lt[1]) && s(st[0], st[1], lt[0], lt[1], st[0] + ot[0], st[1] + ot[1]) && s(st[0], st[1], lt[0], lt[1], lt[0] + ft[0], lt[1] + ft[1]) && (Pt = 2);
            var wt = new g(Pt);
            for (ct = ot.length, pt = 0; pt < Pt; pt += 1) {
              for (_t = createSizedArray(ct), yt = pt / (Pt - 1), vt = 0, dt = 0; dt < ct; dt += 1) mt = bmPow(1 - yt, 3) * st[dt] + 3 * bmPow(1 - yt, 2) * yt * (st[dt] + ot[dt]) + 3 * (1 - yt) * bmPow(yt, 2) * (lt[dt] + ft[dt]) + bmPow(yt, 3) * lt[dt], _t[dt] = mt, kt !== null && (vt += bmPow(_t[dt] - kt[dt], 2));
              bt += vt = bmSqrt(vt), wt.points[pt] = new j(vt, _t), kt = _t;
            }
            wt.segmentLength = bt, it[ht] = wt;
          }
          return it[ht];
        };
      }();
      function rt(it, st) {
        var lt = st.percents, ot = st.lengths, ft = lt.length, ht = bmFloor((ft - 1) * it), pt = it * st.addedLength, dt = 0;
        if (ht === ft - 1 || ht === 0 || pt === ot[ht]) return lt[ht];
        for (var ct = ot[ht] > pt ? -1 : 1, mt = !0; mt; ) if (ot[ht] <= pt && ot[ht + 1] > pt ? (dt = (pt - ot[ht]) / (ot[ht + 1] - ot[ht]), mt = !1) : ht += ct, ht < 0 || ht >= ft - 1) {
          if (ht === ft - 1) return lt[ht];
          mt = !1;
        }
        return lt[ht] + (lt[ht + 1] - lt[ht]) * dt;
      }
      var at = createTypedArray("float32", 8);
      return { getSegmentsLength: function(it) {
        var st, lt = segmentsLengthPool.newElement(), ot = it.c, ft = it.v, ht = it.o, pt = it.i, dt = it._length, ct = lt.lengths, mt = 0;
        for (st = 0; st < dt - 1; st += 1) ct[st] = h(ft[st], ft[st + 1], ht[st], pt[st + 1]), mt += ct[st].addedLength;
        return ot && dt && (ct[st] = h(ft[st], ft[0], ht[st], pt[0]), mt += ct[st].addedLength), lt.totalLength = mt, lt;
      }, getNewSegment: function(it, st, lt, ot, ft, ht, pt) {
        ft < 0 ? ft = 0 : ft > 1 && (ft = 1);
        var dt, ct = rt(ft, pt), mt = rt(ht = ht > 1 ? 1 : ht, pt), yt = it.length, vt = 1 - ct, _t = 1 - mt, Pt = vt * vt * vt, bt = ct * vt * vt * 3, kt = ct * ct * vt * 3, wt = ct * ct * ct, xt = vt * vt * _t, Tt = ct * vt * _t + vt * ct * _t + vt * vt * mt, It = ct * ct * _t + vt * ct * mt + ct * vt * mt, qt = ct * ct * mt, Wt = vt * _t * _t, Nt = ct * _t * _t + vt * mt * _t + vt * _t * mt, Yt = ct * mt * _t + vt * mt * mt + ct * _t * mt, sr = ct * mt * mt, ur = _t * _t * _t, Rt = mt * _t * _t + _t * mt * _t + _t * _t * mt, Ft = mt * mt * _t + _t * mt * mt + mt * _t * mt, At = mt * mt * mt;
        for (dt = 0; dt < yt; dt += 1) at[4 * dt] = o.round(1e3 * (Pt * it[dt] + bt * lt[dt] + kt * ot[dt] + wt * st[dt])) / 1e3, at[4 * dt + 1] = o.round(1e3 * (xt * it[dt] + Tt * lt[dt] + It * ot[dt] + qt * st[dt])) / 1e3, at[4 * dt + 2] = o.round(1e3 * (Wt * it[dt] + Nt * lt[dt] + Yt * ot[dt] + sr * st[dt])) / 1e3, at[4 * dt + 3] = o.round(1e3 * (ur * it[dt] + Rt * lt[dt] + Ft * ot[dt] + At * st[dt])) / 1e3;
        return at;
      }, getPointInSegment: function(it, st, lt, ot, ft, ht) {
        var pt = rt(ft, ht), dt = 1 - pt;
        return [o.round(1e3 * (dt * dt * dt * it[0] + (pt * dt * dt + dt * pt * dt + dt * dt * pt) * lt[0] + (pt * pt * dt + dt * pt * pt + pt * dt * pt) * ot[0] + pt * pt * pt * st[0])) / 1e3, o.round(1e3 * (dt * dt * dt * it[1] + (pt * dt * dt + dt * pt * dt + dt * dt * pt) * lt[1] + (pt * pt * dt + dt * pt * pt + pt * dt * pt) * ot[1] + pt * pt * pt * st[1])) / 1e3];
      }, buildBezierData: tt, pointOnLine2D: s, pointOnLine3D: function(it, st, lt, ot, ft, ht, pt, dt, ct) {
        if (lt === 0 && ht === 0 && ct === 0) return s(it, st, ot, ft, pt, dt);
        var mt, yt = o.sqrt(o.pow(ot - it, 2) + o.pow(ft - st, 2) + o.pow(ht - lt, 2)), vt = o.sqrt(o.pow(pt - it, 2) + o.pow(dt - st, 2) + o.pow(ct - lt, 2)), _t = o.sqrt(o.pow(pt - ot, 2) + o.pow(dt - ft, 2) + o.pow(ct - ht, 2));
        return (mt = yt > vt ? yt > _t ? yt - vt - _t : _t - vt - yt : _t > vt ? _t - vt - yt : vt - yt - _t) > -1e-4 && mt < 1e-4;
      } };
    }
    var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
    function interpolateValue(o, s) {
      var h, g = this.offsetTime;
      this.propType === "multidimensional" && (h = createTypedArray("float32", this.pv.length));
      for (var j, tt, rt, at = s.lastIndex, it = at, st = this.keyframes.length - 1, lt = !0; lt; ) {
        if (j = this.keyframes[it], tt = this.keyframes[it + 1], it === st - 1 && o >= tt.t - g) {
          j.h && (j = tt), at = 0;
          break;
        }
        if (tt.t - g > o) {
          at = it;
          break;
        }
        it < st - 1 ? it += 1 : (at = 0, lt = !1);
      }
      rt = this.keyframesMetadata[it] || {};
      var ot, ft, ht, pt, dt, ct, mt, yt = tt.t - g, vt = j.t - g;
      if (j.to) {
        rt.bezierData || (rt.bezierData = bez.buildBezierData(j.s, tt.s || j.e, j.to, j.ti));
        var _t = rt.bezierData;
        if (o >= yt || o < vt) {
          var Pt = o >= yt ? _t.points.length - 1 : 0;
          for (ft = _t.points[Pt].point.length, ot = 0; ot < ft; ot += 1) h[ot] = _t.points[Pt].point[ot];
        } else {
          rt.__fnct ? ct = rt.__fnct : (ct = BezierFactory.getBezierEasing(j.o.x, j.o.y, j.i.x, j.i.y, j.n).get, rt.__fnct = ct), ht = ct((o - vt) / (yt - vt));
          var bt, kt = _t.segmentLength * ht, wt = s.lastFrame < o && s._lastKeyframeIndex === it ? s._lastAddedLength : 0;
          for (dt = s.lastFrame < o && s._lastKeyframeIndex === it ? s._lastPoint : 0, lt = !0, pt = _t.points.length; lt; ) {
            if (wt += _t.points[dt].partialLength, kt === 0 || ht === 0 || dt === _t.points.length - 1) {
              for (ft = _t.points[dt].point.length, ot = 0; ot < ft; ot += 1) h[ot] = _t.points[dt].point[ot];
              break;
            }
            if (kt >= wt && kt < wt + _t.points[dt + 1].partialLength) {
              for (bt = (kt - wt) / _t.points[dt + 1].partialLength, ft = _t.points[dt].point.length, ot = 0; ot < ft; ot += 1) h[ot] = _t.points[dt].point[ot] + (_t.points[dt + 1].point[ot] - _t.points[dt].point[ot]) * bt;
              break;
            }
            dt < pt - 1 ? dt += 1 : lt = !1;
          }
          s._lastPoint = dt, s._lastAddedLength = wt - _t.points[dt].partialLength, s._lastKeyframeIndex = it;
        }
      } else {
        var xt, Tt, It, qt, Wt;
        if (st = j.s.length, mt = tt.s || j.e, this.sh && j.h !== 1) o >= yt ? (h[0] = mt[0], h[1] = mt[1], h[2] = mt[2]) : o <= vt ? (h[0] = j.s[0], h[1] = j.s[1], h[2] = j.s[2]) : quaternionToEuler(h, slerp(createQuaternion(j.s), createQuaternion(mt), (o - vt) / (yt - vt)));
        else for (it = 0; it < st; it += 1) j.h !== 1 && (o >= yt ? ht = 1 : o < vt ? ht = 0 : (j.o.x.constructor === Array ? (rt.__fnct || (rt.__fnct = []), rt.__fnct[it] ? ct = rt.__fnct[it] : (xt = j.o.x[it] === void 0 ? j.o.x[0] : j.o.x[it], Tt = j.o.y[it] === void 0 ? j.o.y[0] : j.o.y[it], It = j.i.x[it] === void 0 ? j.i.x[0] : j.i.x[it], qt = j.i.y[it] === void 0 ? j.i.y[0] : j.i.y[it], ct = BezierFactory.getBezierEasing(xt, Tt, It, qt).get, rt.__fnct[it] = ct)) : rt.__fnct ? ct = rt.__fnct : (xt = j.o.x, Tt = j.o.y, It = j.i.x, qt = j.i.y, ct = BezierFactory.getBezierEasing(xt, Tt, It, qt).get, j.keyframeMetadata = ct), ht = ct((o - vt) / (yt - vt)))), mt = tt.s || j.e, Wt = j.h === 1 ? j.s[it] : j.s[it] + (mt[it] - j.s[it]) * ht, this.propType === "multidimensional" ? h[it] = Wt : h = Wt;
      }
      return s.lastIndex = at, h;
    }
    function slerp(o, s, h) {
      var g, j, tt, rt, at, it = [], st = o[0], lt = o[1], ot = o[2], ft = o[3], ht = s[0], pt = s[1], dt = s[2], ct = s[3];
      return (j = st * ht + lt * pt + ot * dt + ft * ct) < 0 && (j = -j, ht = -ht, pt = -pt, dt = -dt, ct = -ct), 1 - j > 1e-6 ? (g = Math.acos(j), tt = Math.sin(g), rt = Math.sin((1 - h) * g) / tt, at = Math.sin(h * g) / tt) : (rt = 1 - h, at = h), it[0] = rt * st + at * ht, it[1] = rt * lt + at * pt, it[2] = rt * ot + at * dt, it[3] = rt * ft + at * ct, it;
    }
    function quaternionToEuler(o, s) {
      var h = s[0], g = s[1], j = s[2], tt = s[3], rt = Math.atan2(2 * g * tt - 2 * h * j, 1 - 2 * g * g - 2 * j * j), at = Math.asin(2 * h * g + 2 * j * tt), it = Math.atan2(2 * h * tt - 2 * g * j, 1 - 2 * h * h - 2 * j * j);
      o[0] = rt / degToRads, o[1] = at / degToRads, o[2] = it / degToRads;
    }
    function createQuaternion(o) {
      var s = o[0] * degToRads, h = o[1] * degToRads, g = o[2] * degToRads, j = Math.cos(s / 2), tt = Math.cos(h / 2), rt = Math.cos(g / 2), at = Math.sin(s / 2), it = Math.sin(h / 2), st = Math.sin(g / 2);
      return [at * it * rt + j * tt * st, at * tt * rt + j * it * st, j * it * rt - at * tt * st, j * tt * rt - at * it * st];
    }
    function getValueAtCurrentTime() {
      var o = this.comp.renderedFrame - this.offsetTime, s = this.keyframes[0].t - this.offsetTime, h = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
      if (!(o === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= h && o >= h || this._caching.lastFrame < s && o < s))) {
        this._caching.lastFrame >= o && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
        var g = this.interpolateValue(o, this._caching);
        this.pv = g;
      }
      return this._caching.lastFrame = o, this.pv;
    }
    function setVValue(o) {
      var s;
      if (this.propType === "unidimensional") s = o * this.mult, mathAbs(this.v - s) > 1e-5 && (this.v = s, this._mdf = !0);
      else for (var h = 0, g = this.v.length; h < g; ) s = o[h] * this.mult, mathAbs(this.v[h] - s) > 1e-5 && (this.v[h] = s, this._mdf = !0), h += 1;
    }
    function processEffectsSequence() {
      if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
        if (this.lock) return void this.setVValue(this.pv);
        this.lock = !0, this._mdf = this._isFirstFrame;
        var o, s = this.effectsSequence.length, h = this.kf ? this.pv : this.data.k;
        for (o = 0; o < s; o += 1) h = this.effectsSequence[o](h);
        this.setVValue(h), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
      }
    }
    function addEffect(o) {
      this.effectsSequence.push(o), this.container.addDynamicProperty(this);
    }
    function ValueProperty(o, s, h, g) {
      this.propType = "unidimensional", this.mult = h || 1, this.data = s, this.v = h ? s.k * h : s.k, this.pv = s.k, this._mdf = !1, this.elem = o, this.container = g, this.comp = o.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
    }
    function MultiDimensionalProperty(o, s, h, g) {
      this.propType = "multidimensional", this.mult = h || 1, this.data = s, this._mdf = !1, this.elem = o, this.container = g, this.comp = o.comp, this.k = !1, this.kf = !1, this.frameId = -1;
      var j, tt = s.k.length;
      for (this.v = createTypedArray("float32", tt), this.pv = createTypedArray("float32", tt), this.vel = createTypedArray("float32", tt), j = 0; j < tt; j += 1) this.v[j] = s.k[j] * this.mult, this.pv[j] = s.k[j];
      this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
    }
    function KeyframedValueProperty(o, s, h, g) {
      this.propType = "unidimensional", this.keyframes = s.k, this.keyframesMetadata = [], this.offsetTime = o.data.st, this.frameId = -1, this._caching = { lastFrame: initFrame, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = !0, this.kf = !0, this.data = s, this.mult = h || 1, this.elem = o, this.container = g, this.comp = o.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect;
    }
    function KeyframedMultidimensionalProperty(o, s, h, g) {
      this.propType = "multidimensional";
      var j, tt, rt, at, it, st = s.k.length;
      for (j = 0; j < st - 1; j += 1) s.k[j].to && s.k[j].s && s.k[j + 1] && s.k[j + 1].s && (tt = s.k[j].s, rt = s.k[j + 1].s, at = s.k[j].to, it = s.k[j].ti, (tt.length === 2 && !(tt[0] === rt[0] && tt[1] === rt[1]) && bez.pointOnLine2D(tt[0], tt[1], rt[0], rt[1], tt[0] + at[0], tt[1] + at[1]) && bez.pointOnLine2D(tt[0], tt[1], rt[0], rt[1], rt[0] + it[0], rt[1] + it[1]) || tt.length === 3 && !(tt[0] === rt[0] && tt[1] === rt[1] && tt[2] === rt[2]) && bez.pointOnLine3D(tt[0], tt[1], tt[2], rt[0], rt[1], rt[2], tt[0] + at[0], tt[1] + at[1], tt[2] + at[2]) && bez.pointOnLine3D(tt[0], tt[1], tt[2], rt[0], rt[1], rt[2], rt[0] + it[0], rt[1] + it[1], rt[2] + it[2])) && (s.k[j].to = null, s.k[j].ti = null), tt[0] === rt[0] && tt[1] === rt[1] && at[0] === 0 && at[1] === 0 && it[0] === 0 && it[1] === 0 && (tt.length === 2 || tt[2] === rt[2] && at[2] === 0 && it[2] === 0) && (s.k[j].to = null, s.k[j].ti = null));
      this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = s, this.keyframes = s.k, this.keyframesMetadata = [], this.offsetTime = o.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = h || 1, this.elem = o, this.container = g, this.comp = o.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
      var lt = s.k[0].s.length;
      for (this.v = createTypedArray("float32", lt), this.pv = createTypedArray("float32", lt), j = 0; j < lt; j += 1) this.v[j] = initFrame, this.pv[j] = initFrame;
      this._caching = { lastFrame: initFrame, lastIndex: 0, value: createTypedArray("float32", lt) }, this.addEffect = addEffect;
    }
    var PropertyFactory = /* @__PURE__ */ function() {
      var o = { getProp: function(s, h, g, j, tt) {
        var rt;
        if (h.sid && (h = s.globalData.slotManager.getProp(h)), h.k.length) if (typeof h.k[0] == "number") rt = new MultiDimensionalProperty(s, h, j, tt);
        else switch (g) {
          case 0:
            rt = new KeyframedValueProperty(s, h, j, tt);
            break;
          case 1:
            rt = new KeyframedMultidimensionalProperty(s, h, j, tt);
        }
        else rt = new ValueProperty(s, h, j, tt);
        return rt.effectsSequence.length && tt.addDynamicProperty(rt), rt;
      } };
      return o;
    }();
    function DynamicPropertyContainer() {
    }
    DynamicPropertyContainer.prototype = { addDynamicProperty: function(o) {
      this.dynamicProperties.indexOf(o) === -1 && (this.dynamicProperties.push(o), this.container.addDynamicProperty(this), this._isAnimated = !0);
    }, iterateDynamicProperties: function() {
      this._mdf = !1;
      var o, s = this.dynamicProperties.length;
      for (o = 0; o < s; o += 1) this.dynamicProperties[o].getValue(), this.dynamicProperties[o]._mdf && (this._mdf = !0);
    }, initDynamicPropertyContainer: function(o) {
      this.container = o, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
    } };
    var pointPool = poolFactory(8, function() {
      return createTypedArray("float32", 2);
    });
    function ShapePath() {
      this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
    }
    ShapePath.prototype.setPathData = function(o, s) {
      this.c = o, this.setLength(s);
      for (var h = 0; h < s; ) this.v[h] = pointPool.newElement(), this.o[h] = pointPool.newElement(), this.i[h] = pointPool.newElement(), h += 1;
    }, ShapePath.prototype.setLength = function(o) {
      for (; this._maxLength < o; ) this.doubleArrayLength();
      this._length = o;
    }, ShapePath.prototype.doubleArrayLength = function() {
      this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
    }, ShapePath.prototype.setXYAt = function(o, s, h, g, j) {
      var tt;
      switch (this._length = Math.max(this._length, g + 1), this._length >= this._maxLength && this.doubleArrayLength(), h) {
        case "v":
          tt = this.v;
          break;
        case "i":
          tt = this.i;
          break;
        case "o":
          tt = this.o;
          break;
        default:
          tt = [];
      }
      (!tt[g] || tt[g] && !j) && (tt[g] = pointPool.newElement()), tt[g][0] = o, tt[g][1] = s;
    }, ShapePath.prototype.setTripleAt = function(o, s, h, g, j, tt, rt, at) {
      this.setXYAt(o, s, "v", rt, at), this.setXYAt(h, g, "o", rt, at), this.setXYAt(j, tt, "i", rt, at);
    }, ShapePath.prototype.reverse = function() {
      var o = new ShapePath();
      o.setPathData(this.c, this._length);
      var s = this.v, h = this.o, g = this.i, j = 0;
      this.c && (o.setTripleAt(s[0][0], s[0][1], g[0][0], g[0][1], h[0][0], h[0][1], 0, !1), j = 1);
      var tt, rt = this._length - 1, at = this._length;
      for (tt = j; tt < at; tt += 1) o.setTripleAt(s[rt][0], s[rt][1], g[rt][0], g[rt][1], h[rt][0], h[rt][1], tt, !1), rt -= 1;
      return o;
    }, ShapePath.prototype.length = function() {
      return this._length;
    };
    var shapePool = function() {
      var o = poolFactory(4, function() {
        return new ShapePath();
      }, function(s) {
        var h, g = s._length;
        for (h = 0; h < g; h += 1) pointPool.release(s.v[h]), pointPool.release(s.i[h]), pointPool.release(s.o[h]), s.v[h] = null, s.i[h] = null, s.o[h] = null;
        s._length = 0, s.c = !1;
      });
      return o.clone = function(s) {
        var h, g = o.newElement(), j = s._length === void 0 ? s.v.length : s._length;
        for (g.setLength(j), g.c = s.c, h = 0; h < j; h += 1) g.setTripleAt(s.v[h][0], s.v[h][1], s.o[h][0], s.o[h][1], s.i[h][0], s.i[h][1], h);
        return g;
      }, o;
    }();
    function ShapeCollection() {
      this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
    }
    ShapeCollection.prototype.addShape = function(o) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = o, this._length += 1;
    }, ShapeCollection.prototype.releaseShapes = function() {
      var o;
      for (o = 0; o < this._length; o += 1) shapePool.release(this.shapes[o]);
      this._length = 0;
    };
    var shapeCollectionPool = function() {
      var o = { newShapeCollection: function() {
        return s ? g[s -= 1] : new ShapeCollection();
      }, release: function(j) {
        var tt, rt = j._length;
        for (tt = 0; tt < rt; tt += 1) shapePool.release(j.shapes[tt]);
        j._length = 0, s === h && (g = pooling.double(g), h *= 2), g[s] = j, s += 1;
      } }, s = 0, h = 4, g = createSizedArray(h);
      return o;
    }(), ShapePropertyFactory = function() {
      var o = -999999;
      function s(ht, pt, dt) {
        var ct, mt, yt, vt, _t, Pt, bt, kt, wt, xt = dt.lastIndex, Tt = this.keyframes;
        if (ht < Tt[0].t - this.offsetTime) ct = Tt[0].s[0], yt = !0, xt = 0;
        else if (ht >= Tt[Tt.length - 1].t - this.offsetTime) ct = Tt[Tt.length - 1].s ? Tt[Tt.length - 1].s[0] : Tt[Tt.length - 2].e[0], yt = !0;
        else {
          for (var It, qt, Wt, Nt = xt, Yt = Tt.length - 1, sr = !0; sr && (It = Tt[Nt], !((qt = Tt[Nt + 1]).t - this.offsetTime > ht)); ) Nt < Yt - 1 ? Nt += 1 : sr = !1;
          if (Wt = this.keyframesMetadata[Nt] || {}, xt = Nt, !(yt = It.h === 1)) {
            if (ht >= qt.t - this.offsetTime) kt = 1;
            else if (ht < It.t - this.offsetTime) kt = 0;
            else {
              var ur;
              Wt.__fnct ? ur = Wt.__fnct : (ur = BezierFactory.getBezierEasing(It.o.x, It.o.y, It.i.x, It.i.y).get, Wt.__fnct = ur), kt = ur((ht - (It.t - this.offsetTime)) / (qt.t - this.offsetTime - (It.t - this.offsetTime)));
            }
            mt = qt.s ? qt.s[0] : It.e[0];
          }
          ct = It.s[0];
        }
        for (Pt = pt._length, bt = ct.i[0].length, dt.lastIndex = xt, vt = 0; vt < Pt; vt += 1) for (_t = 0; _t < bt; _t += 1) wt = yt ? ct.i[vt][_t] : ct.i[vt][_t] + (mt.i[vt][_t] - ct.i[vt][_t]) * kt, pt.i[vt][_t] = wt, wt = yt ? ct.o[vt][_t] : ct.o[vt][_t] + (mt.o[vt][_t] - ct.o[vt][_t]) * kt, pt.o[vt][_t] = wt, wt = yt ? ct.v[vt][_t] : ct.v[vt][_t] + (mt.v[vt][_t] - ct.v[vt][_t]) * kt, pt.v[vt][_t] = wt;
      }
      function h() {
        var ht = this.comp.renderedFrame - this.offsetTime, pt = this.keyframes[0].t - this.offsetTime, dt = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, ct = this._caching.lastFrame;
        return ct !== o && (ct < pt && ht < pt || ct > dt && ht > dt) || (this._caching.lastIndex = ct < ht ? this._caching.lastIndex : 0, this.interpolateShape(ht, this.pv, this._caching)), this._caching.lastFrame = ht, this.pv;
      }
      function g() {
        this.paths = this.localShapeCollection;
      }
      function j(ht) {
        (function(pt, dt) {
          if (pt._length !== dt._length || pt.c !== dt.c) return !1;
          var ct, mt = pt._length;
          for (ct = 0; ct < mt; ct += 1) if (pt.v[ct][0] !== dt.v[ct][0] || pt.v[ct][1] !== dt.v[ct][1] || pt.o[ct][0] !== dt.o[ct][0] || pt.o[ct][1] !== dt.o[ct][1] || pt.i[ct][0] !== dt.i[ct][0] || pt.i[ct][1] !== dt.i[ct][1]) return !1;
          return !0;
        })(this.v, ht) || (this.v = shapePool.clone(ht), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
      }
      function tt() {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (!this.effectsSequence.length) return void (this._mdf = !1);
          if (this.lock) return void this.setVValue(this.pv);
          var ht;
          this.lock = !0, this._mdf = !1, ht = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
          var pt, dt = this.effectsSequence.length;
          for (pt = 0; pt < dt; pt += 1) ht = this.effectsSequence[pt](ht);
          this.setVValue(ht), this.lock = !1, this.frameId = this.elem.globalData.frameId;
        }
      }
      function rt(ht, pt, dt) {
        this.propType = "shape", this.comp = ht.comp, this.container = ht, this.elem = ht, this.data = pt, this.k = !1, this.kf = !1, this._mdf = !1;
        var ct = dt === 3 ? pt.pt.k : pt.ks.k;
        this.v = shapePool.clone(ct), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = g, this.effectsSequence = [];
      }
      function at(ht) {
        this.effectsSequence.push(ht), this.container.addDynamicProperty(this);
      }
      function it(ht, pt, dt) {
        this.propType = "shape", this.comp = ht.comp, this.elem = ht, this.container = ht, this.offsetTime = ht.data.st, this.keyframes = dt === 3 ? pt.pt.k : pt.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
        var ct = this.keyframes[0].s[0].i.length;
        this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, ct), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = o, this.reset = g, this._caching = { lastFrame: o, lastIndex: 0 }, this.effectsSequence = [h.bind(this)];
      }
      rt.prototype.interpolateShape = s, rt.prototype.getValue = tt, rt.prototype.setVValue = j, rt.prototype.addEffect = at, it.prototype.getValue = tt, it.prototype.interpolateShape = s, it.prototype.setVValue = j, it.prototype.addEffect = at;
      var st = function() {
        var ht = roundCorner;
        function pt(dt, ct) {
          this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = ct.d, this.elem = dt, this.comp = dt.comp, this.frameId = -1, this.initDynamicPropertyContainer(dt), this.p = PropertyFactory.getProp(dt, ct.p, 1, 0, this), this.s = PropertyFactory.getProp(dt, ct.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
        }
        return pt.prototype = { reset: g, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
        }, convertEllToPath: function() {
          var dt = this.p.v[0], ct = this.p.v[1], mt = this.s.v[0] / 2, yt = this.s.v[1] / 2, vt = this.d !== 3, _t = this.v;
          _t.v[0][0] = dt, _t.v[0][1] = ct - yt, _t.v[1][0] = vt ? dt + mt : dt - mt, _t.v[1][1] = ct, _t.v[2][0] = dt, _t.v[2][1] = ct + yt, _t.v[3][0] = vt ? dt - mt : dt + mt, _t.v[3][1] = ct, _t.i[0][0] = vt ? dt - mt * ht : dt + mt * ht, _t.i[0][1] = ct - yt, _t.i[1][0] = vt ? dt + mt : dt - mt, _t.i[1][1] = ct - yt * ht, _t.i[2][0] = vt ? dt + mt * ht : dt - mt * ht, _t.i[2][1] = ct + yt, _t.i[3][0] = vt ? dt - mt : dt + mt, _t.i[3][1] = ct + yt * ht, _t.o[0][0] = vt ? dt + mt * ht : dt - mt * ht, _t.o[0][1] = ct - yt, _t.o[1][0] = vt ? dt + mt : dt - mt, _t.o[1][1] = ct + yt * ht, _t.o[2][0] = vt ? dt - mt * ht : dt + mt * ht, _t.o[2][1] = ct + yt, _t.o[3][0] = vt ? dt - mt : dt + mt, _t.o[3][1] = ct - yt * ht;
        } }, extendPrototype([DynamicPropertyContainer], pt), pt;
      }(), lt = function() {
        function ht(pt, dt) {
          this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = pt, this.comp = pt.comp, this.data = dt, this.frameId = -1, this.d = dt.d, this.initDynamicPropertyContainer(pt), dt.sy === 1 ? (this.ir = PropertyFactory.getProp(pt, dt.ir, 0, 0, this), this.is = PropertyFactory.getProp(pt, dt.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(pt, dt.pt, 0, 0, this), this.p = PropertyFactory.getProp(pt, dt.p, 1, 0, this), this.r = PropertyFactory.getProp(pt, dt.r, 0, degToRads, this), this.or = PropertyFactory.getProp(pt, dt.or, 0, 0, this), this.os = PropertyFactory.getProp(pt, dt.os, 0, 0.01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
        }
        return ht.prototype = { reset: g, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
        }, convertStarToPath: function() {
          var pt, dt, ct, mt, yt = 2 * Math.floor(this.pt.v), vt = 2 * Math.PI / yt, _t = !0, Pt = this.or.v, bt = this.ir.v, kt = this.os.v, wt = this.is.v, xt = 2 * Math.PI * Pt / (2 * yt), Tt = 2 * Math.PI * bt / (2 * yt), It = -Math.PI / 2;
          It += this.r.v;
          var qt = this.data.d === 3 ? -1 : 1;
          for (this.v._length = 0, pt = 0; pt < yt; pt += 1) {
            ct = _t ? kt : wt, mt = _t ? xt : Tt;
            var Wt = (dt = _t ? Pt : bt) * Math.cos(It), Nt = dt * Math.sin(It), Yt = Wt === 0 && Nt === 0 ? 0 : Nt / Math.sqrt(Wt * Wt + Nt * Nt), sr = Wt === 0 && Nt === 0 ? 0 : -Wt / Math.sqrt(Wt * Wt + Nt * Nt);
            Wt += +this.p.v[0], Nt += +this.p.v[1], this.v.setTripleAt(Wt, Nt, Wt - Yt * mt * ct * qt, Nt - sr * mt * ct * qt, Wt + Yt * mt * ct * qt, Nt + sr * mt * ct * qt, pt, !0), _t = !_t, It += vt * qt;
          }
        }, convertPolygonToPath: function() {
          var pt, dt = Math.floor(this.pt.v), ct = 2 * Math.PI / dt, mt = this.or.v, yt = this.os.v, vt = 2 * Math.PI * mt / (4 * dt), _t = 0.5 * -Math.PI, Pt = this.data.d === 3 ? -1 : 1;
          for (_t += this.r.v, this.v._length = 0, pt = 0; pt < dt; pt += 1) {
            var bt = mt * Math.cos(_t), kt = mt * Math.sin(_t), wt = bt === 0 && kt === 0 ? 0 : kt / Math.sqrt(bt * bt + kt * kt), xt = bt === 0 && kt === 0 ? 0 : -bt / Math.sqrt(bt * bt + kt * kt);
            bt += +this.p.v[0], kt += +this.p.v[1], this.v.setTripleAt(bt, kt, bt - wt * vt * yt * Pt, kt - xt * vt * yt * Pt, bt + wt * vt * yt * Pt, kt + xt * vt * yt * Pt, pt, !0), _t += ct * Pt;
          }
          this.paths.length = 0, this.paths[0] = this.v;
        } }, extendPrototype([DynamicPropertyContainer], ht), ht;
      }(), ot = function() {
        function ht(pt, dt) {
          this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = pt, this.comp = pt.comp, this.frameId = -1, this.d = dt.d, this.initDynamicPropertyContainer(pt), this.p = PropertyFactory.getProp(pt, dt.p, 1, 0, this), this.s = PropertyFactory.getProp(pt, dt.s, 1, 0, this), this.r = PropertyFactory.getProp(pt, dt.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
        }
        return ht.prototype = { convertRectToPath: function() {
          var pt = this.p.v[0], dt = this.p.v[1], ct = this.s.v[0] / 2, mt = this.s.v[1] / 2, yt = bmMin(ct, mt, this.r.v), vt = yt * (1 - roundCorner);
          this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(pt + ct, dt - mt + yt, pt + ct, dt - mt + yt, pt + ct, dt - mt + vt, 0, !0), this.v.setTripleAt(pt + ct, dt + mt - yt, pt + ct, dt + mt - vt, pt + ct, dt + mt - yt, 1, !0), yt !== 0 ? (this.v.setTripleAt(pt + ct - yt, dt + mt, pt + ct - yt, dt + mt, pt + ct - vt, dt + mt, 2, !0), this.v.setTripleAt(pt - ct + yt, dt + mt, pt - ct + vt, dt + mt, pt - ct + yt, dt + mt, 3, !0), this.v.setTripleAt(pt - ct, dt + mt - yt, pt - ct, dt + mt - yt, pt - ct, dt + mt - vt, 4, !0), this.v.setTripleAt(pt - ct, dt - mt + yt, pt - ct, dt - mt + vt, pt - ct, dt - mt + yt, 5, !0), this.v.setTripleAt(pt - ct + yt, dt - mt, pt - ct + yt, dt - mt, pt - ct + vt, dt - mt, 6, !0), this.v.setTripleAt(pt + ct - yt, dt - mt, pt + ct - vt, dt - mt, pt + ct - yt, dt - mt, 7, !0)) : (this.v.setTripleAt(pt - ct, dt + mt, pt - ct + vt, dt + mt, pt - ct, dt + mt, 2), this.v.setTripleAt(pt - ct, dt - mt, pt - ct, dt - mt + vt, pt - ct, dt - mt, 3))) : (this.v.setTripleAt(pt + ct, dt - mt + yt, pt + ct, dt - mt + vt, pt + ct, dt - mt + yt, 0, !0), yt !== 0 ? (this.v.setTripleAt(pt + ct - yt, dt - mt, pt + ct - yt, dt - mt, pt + ct - vt, dt - mt, 1, !0), this.v.setTripleAt(pt - ct + yt, dt - mt, pt - ct + vt, dt - mt, pt - ct + yt, dt - mt, 2, !0), this.v.setTripleAt(pt - ct, dt - mt + yt, pt - ct, dt - mt + yt, pt - ct, dt - mt + vt, 3, !0), this.v.setTripleAt(pt - ct, dt + mt - yt, pt - ct, dt + mt - vt, pt - ct, dt + mt - yt, 4, !0), this.v.setTripleAt(pt - ct + yt, dt + mt, pt - ct + yt, dt + mt, pt - ct + vt, dt + mt, 5, !0), this.v.setTripleAt(pt + ct - yt, dt + mt, pt + ct - vt, dt + mt, pt + ct - yt, dt + mt, 6, !0), this.v.setTripleAt(pt + ct, dt + mt - yt, pt + ct, dt + mt - yt, pt + ct, dt + mt - vt, 7, !0)) : (this.v.setTripleAt(pt - ct, dt - mt, pt - ct + vt, dt - mt, pt - ct, dt - mt, 1, !0), this.v.setTripleAt(pt - ct, dt + mt, pt - ct, dt + mt - vt, pt - ct, dt + mt, 2, !0), this.v.setTripleAt(pt + ct, dt + mt, pt + ct - vt, dt + mt, pt + ct, dt + mt, 3, !0)));
        }, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
        }, reset: g }, extendPrototype([DynamicPropertyContainer], ht), ht;
      }(), ft = { getShapeProp: function(ht, pt, dt) {
        var ct;
        return dt === 3 || dt === 4 ? ct = (dt === 3 ? pt.pt : pt.ks).k.length ? new it(ht, pt, dt) : new rt(ht, pt, dt) : dt === 5 ? ct = new ot(ht, pt) : dt === 6 ? ct = new st(ht, pt) : dt === 7 && (ct = new lt(ht, pt)), ct.k && ht.addDynamicProperty(ct), ct;
      }, getConstructorFunction: function() {
        return rt;
      }, getKeyframedConstructorFunction: function() {
        return it;
      } };
      return ft;
    }(), Matrix = /* @__PURE__ */ function() {
      var o = Math.cos, s = Math.sin, h = Math.tan, g = Math.round;
      function j() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
      }
      function tt(Rt) {
        if (Rt === 0) return this;
        var Ft = o(Rt), At = s(Rt);
        return this._t(Ft, -At, 0, 0, At, Ft, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function rt(Rt) {
        if (Rt === 0) return this;
        var Ft = o(Rt), At = s(Rt);
        return this._t(1, 0, 0, 0, 0, Ft, -At, 0, 0, At, Ft, 0, 0, 0, 0, 1);
      }
      function at(Rt) {
        if (Rt === 0) return this;
        var Ft = o(Rt), At = s(Rt);
        return this._t(Ft, 0, At, 0, 0, 1, 0, 0, -At, 0, Ft, 0, 0, 0, 0, 1);
      }
      function it(Rt) {
        if (Rt === 0) return this;
        var Ft = o(Rt), At = s(Rt);
        return this._t(Ft, -At, 0, 0, At, Ft, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function st(Rt, Ft) {
        return this._t(1, Ft, Rt, 1, 0, 0);
      }
      function lt(Rt, Ft) {
        return this.shear(h(Rt), h(Ft));
      }
      function ot(Rt, Ft) {
        var At = o(Ft), Zt = s(Ft);
        return this._t(At, Zt, 0, 0, -Zt, At, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, h(Rt), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(At, -Zt, 0, 0, Zt, At, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function ft(Rt, Ft, At) {
        return !At && At !== 0 && (At = 1), Rt === 1 && Ft === 1 && At === 1 ? this : this._t(Rt, 0, 0, 0, 0, Ft, 0, 0, 0, 0, At, 0, 0, 0, 0, 1);
      }
      function ht(Rt, Ft, At, Zt, hr, Pr, dr, Er, Sr, Kt, rr, nr, Dr, Wr, zr, Hr) {
        return this.props[0] = Rt, this.props[1] = Ft, this.props[2] = At, this.props[3] = Zt, this.props[4] = hr, this.props[5] = Pr, this.props[6] = dr, this.props[7] = Er, this.props[8] = Sr, this.props[9] = Kt, this.props[10] = rr, this.props[11] = nr, this.props[12] = Dr, this.props[13] = Wr, this.props[14] = zr, this.props[15] = Hr, this;
      }
      function pt(Rt, Ft, At) {
        return At = At || 0, Rt !== 0 || Ft !== 0 || At !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, Rt, Ft, At, 1) : this;
      }
      function dt(Rt, Ft, At, Zt, hr, Pr, dr, Er, Sr, Kt, rr, nr, Dr, Wr, zr, Hr) {
        var fr = this.props;
        if (Rt === 1 && Ft === 0 && At === 0 && Zt === 0 && hr === 0 && Pr === 1 && dr === 0 && Er === 0 && Sr === 0 && Kt === 0 && rr === 1 && nr === 0) return fr[12] = fr[12] * Rt + fr[15] * Dr, fr[13] = fr[13] * Pr + fr[15] * Wr, fr[14] = fr[14] * rr + fr[15] * zr, fr[15] *= Hr, this._identityCalculated = !1, this;
        var ba = fr[0], Dn = fr[1], yn = fr[2], Xr = fr[3], Rn = fr[4], an = fr[5], hn = fr[6], Vn = fr[7], xn = fr[8], zn = fr[9], Sn = fr[10], Fn = fr[11], ro = fr[12], no = fr[13], ao = fr[14], ho = fr[15];
        return fr[0] = ba * Rt + Dn * hr + yn * Sr + Xr * Dr, fr[1] = ba * Ft + Dn * Pr + yn * Kt + Xr * Wr, fr[2] = ba * At + Dn * dr + yn * rr + Xr * zr, fr[3] = ba * Zt + Dn * Er + yn * nr + Xr * Hr, fr[4] = Rn * Rt + an * hr + hn * Sr + Vn * Dr, fr[5] = Rn * Ft + an * Pr + hn * Kt + Vn * Wr, fr[6] = Rn * At + an * dr + hn * rr + Vn * zr, fr[7] = Rn * Zt + an * Er + hn * nr + Vn * Hr, fr[8] = xn * Rt + zn * hr + Sn * Sr + Fn * Dr, fr[9] = xn * Ft + zn * Pr + Sn * Kt + Fn * Wr, fr[10] = xn * At + zn * dr + Sn * rr + Fn * zr, fr[11] = xn * Zt + zn * Er + Sn * nr + Fn * Hr, fr[12] = ro * Rt + no * hr + ao * Sr + ho * Dr, fr[13] = ro * Ft + no * Pr + ao * Kt + ho * Wr, fr[14] = ro * At + no * dr + ao * rr + ho * zr, fr[15] = ro * Zt + no * Er + ao * nr + ho * Hr, this._identityCalculated = !1, this;
      }
      function ct(Rt) {
        var Ft = Rt.props;
        return this.transform(Ft[0], Ft[1], Ft[2], Ft[3], Ft[4], Ft[5], Ft[6], Ft[7], Ft[8], Ft[9], Ft[10], Ft[11], Ft[12], Ft[13], Ft[14], Ft[15]);
      }
      function mt() {
        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
      }
      function yt(Rt) {
        for (var Ft = 0; Ft < 16; ) {
          if (Rt.props[Ft] !== this.props[Ft]) return !1;
          Ft += 1;
        }
        return !0;
      }
      function vt(Rt) {
        var Ft;
        for (Ft = 0; Ft < 16; Ft += 1) Rt.props[Ft] = this.props[Ft];
        return Rt;
      }
      function _t(Rt) {
        var Ft;
        for (Ft = 0; Ft < 16; Ft += 1) this.props[Ft] = Rt[Ft];
      }
      function Pt(Rt, Ft, At) {
        return { x: Rt * this.props[0] + Ft * this.props[4] + At * this.props[8] + this.props[12], y: Rt * this.props[1] + Ft * this.props[5] + At * this.props[9] + this.props[13], z: Rt * this.props[2] + Ft * this.props[6] + At * this.props[10] + this.props[14] };
      }
      function bt(Rt, Ft, At) {
        return Rt * this.props[0] + Ft * this.props[4] + At * this.props[8] + this.props[12];
      }
      function kt(Rt, Ft, At) {
        return Rt * this.props[1] + Ft * this.props[5] + At * this.props[9] + this.props[13];
      }
      function wt(Rt, Ft, At) {
        return Rt * this.props[2] + Ft * this.props[6] + At * this.props[10] + this.props[14];
      }
      function xt() {
        var Rt = this.props[0] * this.props[5] - this.props[1] * this.props[4], Ft = this.props[5] / Rt, At = -this.props[1] / Rt, Zt = -this.props[4] / Rt, hr = this.props[0] / Rt, Pr = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / Rt, dr = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / Rt, Er = new Matrix();
        return Er.props[0] = Ft, Er.props[1] = At, Er.props[4] = Zt, Er.props[5] = hr, Er.props[12] = Pr, Er.props[13] = dr, Er;
      }
      function Tt(Rt) {
        return this.getInverseMatrix().applyToPointArray(Rt[0], Rt[1], Rt[2] || 0);
      }
      function It(Rt) {
        var Ft, At = Rt.length, Zt = [];
        for (Ft = 0; Ft < At; Ft += 1) Zt[Ft] = Tt(Rt[Ft]);
        return Zt;
      }
      function qt(Rt, Ft, At) {
        var Zt = createTypedArray("float32", 6);
        if (this.isIdentity()) Zt[0] = Rt[0], Zt[1] = Rt[1], Zt[2] = Ft[0], Zt[3] = Ft[1], Zt[4] = At[0], Zt[5] = At[1];
        else {
          var hr = this.props[0], Pr = this.props[1], dr = this.props[4], Er = this.props[5], Sr = this.props[12], Kt = this.props[13];
          Zt[0] = Rt[0] * hr + Rt[1] * dr + Sr, Zt[1] = Rt[0] * Pr + Rt[1] * Er + Kt, Zt[2] = Ft[0] * hr + Ft[1] * dr + Sr, Zt[3] = Ft[0] * Pr + Ft[1] * Er + Kt, Zt[4] = At[0] * hr + At[1] * dr + Sr, Zt[5] = At[0] * Pr + At[1] * Er + Kt;
        }
        return Zt;
      }
      function Wt(Rt, Ft, At) {
        return this.isIdentity() ? [Rt, Ft, At] : [Rt * this.props[0] + Ft * this.props[4] + At * this.props[8] + this.props[12], Rt * this.props[1] + Ft * this.props[5] + At * this.props[9] + this.props[13], Rt * this.props[2] + Ft * this.props[6] + At * this.props[10] + this.props[14]];
      }
      function Nt(Rt, Ft) {
        if (this.isIdentity()) return Rt + "," + Ft;
        var At = this.props;
        return Math.round(100 * (Rt * At[0] + Ft * At[4] + At[12])) / 100 + "," + Math.round(100 * (Rt * At[1] + Ft * At[5] + At[13])) / 100;
      }
      function Yt() {
        for (var Rt = 0, Ft = this.props, At = "matrix3d("; Rt < 16; ) At += g(1e4 * Ft[Rt]) / 1e4, At += Rt === 15 ? ")" : ",", Rt += 1;
        return At;
      }
      function sr(Rt) {
        return Rt < 1e-6 && Rt > 0 || Rt > -1e-6 && Rt < 0 ? g(1e4 * Rt) / 1e4 : Rt;
      }
      function ur() {
        var Rt = this.props;
        return "matrix(" + sr(Rt[0]) + "," + sr(Rt[1]) + "," + sr(Rt[4]) + "," + sr(Rt[5]) + "," + sr(Rt[12]) + "," + sr(Rt[13]) + ")";
      }
      return function() {
        this.reset = j, this.rotate = tt, this.rotateX = rt, this.rotateY = at, this.rotateZ = it, this.skew = lt, this.skewFromAxis = ot, this.shear = st, this.scale = ft, this.setTransform = ht, this.translate = pt, this.transform = dt, this.multiply = ct, this.applyToPoint = Pt, this.applyToX = bt, this.applyToY = kt, this.applyToZ = wt, this.applyToPointArray = Wt, this.applyToTriplePoints = qt, this.applyToPointStringified = Nt, this.toCSS = Yt, this.to2dCSS = ur, this.clone = vt, this.cloneFromProps = _t, this.equals = yt, this.inversePoints = It, this.inversePoint = Tt, this.getInverseMatrix = xt, this._t = this.transform, this.isIdentity = mt, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
      };
    }();
    function _typeof$3(o) {
      return (_typeof$3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
        return typeof s;
      } : function(s) {
        return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
      })(o);
    }
    var lottie = {};
    function setLocation(o) {
      setLocationHref(o);
    }
    function searchAnimations() {
      animationManager.searchAnimations();
    }
    function setSubframeRendering(o) {
      setSubframeEnabled(o);
    }
    function setPrefix(o) {
      setIdPrefix(o);
    }
    function loadAnimation(o) {
      return animationManager.loadAnimation(o);
    }
    function setQuality(o) {
      if (typeof o == "string") switch (o) {
        case "high":
          setDefaultCurveSegments(200);
          break;
        default:
        case "medium":
          setDefaultCurveSegments(50);
          break;
        case "low":
          setDefaultCurveSegments(10);
      }
      else !isNaN(o) && o > 1 && setDefaultCurveSegments(o);
    }
    function inBrowser() {
      return typeof navigator < "u";
    }
    function installPlugin(o, s) {
      o === "expressions" && setExpressionsPlugin(s);
    }
    function getFactory(o) {
      switch (o) {
        case "propertyFactory":
          return PropertyFactory;
        case "shapePropertyFactory":
          return ShapePropertyFactory;
        case "matrix":
          return Matrix;
        default:
          return null;
      }
    }
    function checkReady() {
      document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations());
    }
    function getQueryVariable(o) {
      for (var s = queryString.split("&"), h = 0; h < s.length; h += 1) {
        var g = s[h].split("=");
        if (decodeURIComponent(g[0]) == o) return decodeURIComponent(g[1]);
      }
      return null;
    }
    lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.13.0";
    var queryString = "", scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || { src: "" };
    queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer");
    var readyStateCheckInterval = setInterval(checkReady, 100);
    try {
      _typeof$3(exports$1) !== "object" && (window.bodymovin = lottie);
    } catch (o) {
    }
    var ShapeModifiers = function() {
      var o = {}, s = {};
      return o.registerModifier = function(h, g) {
        s[h] || (s[h] = g);
      }, o.getModifier = function(h, g, j) {
        return new s[h](g, j);
      }, o;
    }();
    function ShapeModifier() {
    }
    function TrimModifier() {
    }
    function PuckerAndBloatModifier() {
    }
    ShapeModifier.prototype.initModifierProperties = function() {
    }, ShapeModifier.prototype.addShapeToModifier = function() {
    }, ShapeModifier.prototype.addShape = function(o) {
      if (!this.closed) {
        o.sh.container.addDynamicProperty(o.sh);
        var s = { shape: o.sh, data: o, localShapeCollection: shapeCollectionPool.newShapeCollection() };
        this.shapes.push(s), this.addShapeToModifier(s), this._isAnimated && o.setAsAnimated();
      }
    }, ShapeModifier.prototype.init = function(o, s) {
      this.shapes = [], this.elem = o, this.initDynamicPropertyContainer(o), this.initModifierProperties(o, s), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, ShapeModifier.prototype.processKeys = function() {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
    }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(o, s) {
      this.s = PropertyFactory.getProp(o, s.s, 0, 0.01, this), this.e = PropertyFactory.getProp(o, s.e, 0, 0.01, this), this.o = PropertyFactory.getProp(o, s.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = s.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    }, TrimModifier.prototype.addShapeToModifier = function(o) {
      o.pathsData = [];
    }, TrimModifier.prototype.calculateShapeEdges = function(o, s, h, g, j) {
      var tt = [];
      s <= 1 ? tt.push({ s: o, e: s }) : o >= 1 ? tt.push({ s: o - 1, e: s - 1 }) : (tt.push({ s: o, e: 1 }), tt.push({ s: 0, e: s - 1 }));
      var rt, at, it = [], st = tt.length;
      for (rt = 0; rt < st; rt += 1) if (!((at = tt[rt]).e * j < g || at.s * j > g + h)) {
        var lt, ot;
        lt = at.s * j <= g ? 0 : (at.s * j - g) / h, ot = at.e * j >= g + h ? 1 : (at.e * j - g) / h, it.push([lt, ot]);
      }
      return it.length || it.push([0, 0]), it;
    }, TrimModifier.prototype.releasePathsData = function(o) {
      var s, h = o.length;
      for (s = 0; s < h; s += 1) segmentsLengthPool.release(o[s]);
      return o.length = 0, o;
    }, TrimModifier.prototype.processShapes = function(o) {
      var s, h;
      if (this._mdf || o) {
        var g = this.o.v % 360 / 360;
        if (g < 0 && (g += 1), (s = this.s.v > 1 ? 1 + g : this.s.v < 0 ? 0 + g : this.s.v + g) > (h = this.e.v > 1 ? 1 + g : this.e.v < 0 ? 0 + g : this.e.v + g)) {
          var j = s;
          s = h, h = j;
        }
        s = 1e-4 * Math.round(1e4 * s), h = 1e-4 * Math.round(1e4 * h), this.sValue = s, this.eValue = h;
      } else s = this.sValue, h = this.eValue;
      var tt, rt, at, it, st, lt, ot, ft = this.shapes.length, ht = 0;
      if (h === s) for (rt = 0; rt < ft; rt += 1) this.shapes[rt].localShapeCollection.releaseShapes(), this.shapes[rt].shape._mdf = !0, this.shapes[rt].shape.paths = this.shapes[rt].localShapeCollection, this._mdf && (this.shapes[rt].pathsData.length = 0);
      else if (h === 1 && s === 0 || h === 0 && s === 1) {
        if (this._mdf) for (rt = 0; rt < ft; rt += 1) this.shapes[rt].pathsData.length = 0, this.shapes[rt].shape._mdf = !0;
      } else {
        var pt, dt, ct = [];
        for (rt = 0; rt < ft; rt += 1) if ((pt = this.shapes[rt]).shape._mdf || this._mdf || o || this.m === 2) {
          if (it = (tt = pt.shape.paths)._length, ot = 0, !pt.shape._mdf && pt.pathsData.length) ot = pt.totalShapeLength;
          else {
            for (st = this.releasePathsData(pt.pathsData), at = 0; at < it; at += 1) lt = bez.getSegmentsLength(tt.shapes[at]), st.push(lt), ot += lt.totalLength;
            pt.totalShapeLength = ot, pt.pathsData = st;
          }
          ht += ot, pt.shape._mdf = !0;
        } else pt.shape.paths = pt.localShapeCollection;
        var mt, yt = s, vt = h, _t = 0;
        for (rt = ft - 1; rt >= 0; rt -= 1) if ((pt = this.shapes[rt]).shape._mdf) {
          for ((dt = pt.localShapeCollection).releaseShapes(), this.m === 2 && ft > 1 ? (mt = this.calculateShapeEdges(s, h, pt.totalShapeLength, _t, ht), _t += pt.totalShapeLength) : mt = [[yt, vt]], it = mt.length, at = 0; at < it; at += 1) {
            yt = mt[at][0], vt = mt[at][1], ct.length = 0, vt <= 1 ? ct.push({ s: pt.totalShapeLength * yt, e: pt.totalShapeLength * vt }) : yt >= 1 ? ct.push({ s: pt.totalShapeLength * (yt - 1), e: pt.totalShapeLength * (vt - 1) }) : (ct.push({ s: pt.totalShapeLength * yt, e: pt.totalShapeLength }), ct.push({ s: 0, e: pt.totalShapeLength * (vt - 1) }));
            var Pt = this.addShapes(pt, ct[0]);
            if (ct[0].s !== ct[0].e) {
              if (ct.length > 1) if (pt.shape.paths.shapes[pt.shape.paths._length - 1].c) {
                var bt = Pt.pop();
                this.addPaths(Pt, dt), Pt = this.addShapes(pt, ct[1], bt);
              } else this.addPaths(Pt, dt), Pt = this.addShapes(pt, ct[1]);
              this.addPaths(Pt, dt);
            }
          }
          pt.shape.paths = dt;
        }
      }
    }, TrimModifier.prototype.addPaths = function(o, s) {
      var h, g = o.length;
      for (h = 0; h < g; h += 1) s.addShape(o[h]);
    }, TrimModifier.prototype.addSegment = function(o, s, h, g, j, tt, rt) {
      j.setXYAt(s[0], s[1], "o", tt), j.setXYAt(h[0], h[1], "i", tt + 1), rt && j.setXYAt(o[0], o[1], "v", tt), j.setXYAt(g[0], g[1], "v", tt + 1);
    }, TrimModifier.prototype.addSegmentFromArray = function(o, s, h, g) {
      s.setXYAt(o[1], o[5], "o", h), s.setXYAt(o[2], o[6], "i", h + 1), g && s.setXYAt(o[0], o[4], "v", h), s.setXYAt(o[3], o[7], "v", h + 1);
    }, TrimModifier.prototype.addShapes = function(o, s, h) {
      var g, j, tt, rt, at, it, st, lt, ot = o.pathsData, ft = o.shape.paths.shapes, ht = o.shape.paths._length, pt = 0, dt = [], ct = !0;
      for (h ? (at = h._length, lt = h._length) : (h = shapePool.newElement(), at = 0, lt = 0), dt.push(h), g = 0; g < ht; g += 1) {
        for (it = ot[g].lengths, h.c = ft[g].c, tt = ft[g].c ? it.length : it.length + 1, j = 1; j < tt; j += 1) if (pt + (rt = it[j - 1]).addedLength < s.s) pt += rt.addedLength, h.c = !1;
        else {
          if (pt > s.e) {
            h.c = !1;
            break;
          }
          s.s <= pt && s.e >= pt + rt.addedLength ? (this.addSegment(ft[g].v[j - 1], ft[g].o[j - 1], ft[g].i[j], ft[g].v[j], h, at, ct), ct = !1) : (st = bez.getNewSegment(ft[g].v[j - 1], ft[g].v[j], ft[g].o[j - 1], ft[g].i[j], (s.s - pt) / rt.addedLength, (s.e - pt) / rt.addedLength, it[j - 1]), this.addSegmentFromArray(st, h, at, ct), ct = !1, h.c = !1), pt += rt.addedLength, at += 1;
        }
        if (ft[g].c && it.length) {
          if (rt = it[j - 1], pt <= s.e) {
            var mt = it[j - 1].addedLength;
            s.s <= pt && s.e >= pt + mt ? (this.addSegment(ft[g].v[j - 1], ft[g].o[j - 1], ft[g].i[0], ft[g].v[0], h, at, ct), ct = !1) : (st = bez.getNewSegment(ft[g].v[j - 1], ft[g].v[0], ft[g].o[j - 1], ft[g].i[0], (s.s - pt) / mt, (s.e - pt) / mt, it[j - 1]), this.addSegmentFromArray(st, h, at, ct), ct = !1, h.c = !1);
          } else h.c = !1;
          pt += rt.addedLength, at += 1;
        }
        if (h._length && (h.setXYAt(h.v[lt][0], h.v[lt][1], "i", lt), h.setXYAt(h.v[h._length - 1][0], h.v[h._length - 1][1], "o", h._length - 1)), pt > s.e) break;
        g < ht - 1 && (h = shapePool.newElement(), ct = !0, dt.push(h), at = 0);
      }
      return dt;
    }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(o, s) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(o, s.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
    }, PuckerAndBloatModifier.prototype.processPath = function(o, s) {
      var h = s / 100, g = [0, 0], j = o._length, tt = 0;
      for (tt = 0; tt < j; tt += 1) g[0] += o.v[tt][0], g[1] += o.v[tt][1];
      g[0] /= j, g[1] /= j;
      var rt, at, it, st, lt, ot, ft = shapePool.newElement();
      for (ft.c = o.c, tt = 0; tt < j; tt += 1) rt = o.v[tt][0] + (g[0] - o.v[tt][0]) * h, at = o.v[tt][1] + (g[1] - o.v[tt][1]) * h, it = o.o[tt][0] + (g[0] - o.o[tt][0]) * -h, st = o.o[tt][1] + (g[1] - o.o[tt][1]) * -h, lt = o.i[tt][0] + (g[0] - o.i[tt][0]) * -h, ot = o.i[tt][1] + (g[1] - o.i[tt][1]) * -h, ft.setTripleAt(rt, at, it, st, lt, ot, tt);
      return ft;
    }, PuckerAndBloatModifier.prototype.processShapes = function(o) {
      var s, h, g, j, tt, rt, at = this.shapes.length, it = this.amount.v;
      if (it !== 0) for (h = 0; h < at; h += 1) {
        if (rt = (tt = this.shapes[h]).localShapeCollection, tt.shape._mdf || this._mdf || o) for (rt.releaseShapes(), tt.shape._mdf = !0, s = tt.shape.paths.shapes, j = tt.shape.paths._length, g = 0; g < j; g += 1) rt.addShape(this.processPath(s[g], it));
        tt.shape.paths = tt.localShapeCollection;
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    var TransformPropertyFactory = function() {
      var o = [0, 0];
      function s(h, g, j) {
        if (this.elem = h, this.frameId = -1, this.propType = "transform", this.data = g, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(j || h), g.p && g.p.s ? (this.px = PropertyFactory.getProp(h, g.p.x, 0, 0, this), this.py = PropertyFactory.getProp(h, g.p.y, 0, 0, this), g.p.z && (this.pz = PropertyFactory.getProp(h, g.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(h, g.p || { k: [0, 0, 0] }, 1, 0, this), g.rx) {
          if (this.rx = PropertyFactory.getProp(h, g.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(h, g.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(h, g.rz, 0, degToRads, this), g.or.k[0].ti) {
            var tt, rt = g.or.k.length;
            for (tt = 0; tt < rt; tt += 1) g.or.k[tt].to = null, g.or.k[tt].ti = null;
          }
          this.or = PropertyFactory.getProp(h, g.or, 1, degToRads, this), this.or.sh = !0;
        } else this.r = PropertyFactory.getProp(h, g.r || { k: 0 }, 0, degToRads, this);
        g.sk && (this.sk = PropertyFactory.getProp(h, g.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(h, g.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(h, g.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(h, g.s || { k: [100, 100, 100] }, 1, 0.01, this), g.o ? this.o = PropertyFactory.getProp(h, g.o, 0, 0.01, h) : this.o = { _mdf: !1, v: 1 }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
      }
      return s.prototype = { applyToMatrix: function(h) {
        var g = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || g, this.a && h.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && h.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && h.skewFromAxis(-this.sk.v, this.sa.v), this.r ? h.rotate(-this.r.v) : h.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? h.translate(this.px.v, this.py.v, -this.pz.v) : h.translate(this.px.v, this.py.v, 0) : h.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }, getValue: function(h) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || h) {
            var g;
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var j, tt;
              if (g = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (j = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / g, 0), tt = this.p.getValueAtTime(this.p.keyframes[0].t / g, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (j = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / g, 0), tt = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / g, 0)) : (j = this.p.pv, tt = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / g, this.p.offsetTime));
              else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                j = [], tt = [];
                var rt = this.px, at = this.py;
                rt._caching.lastFrame + rt.offsetTime <= rt.keyframes[0].t ? (j[0] = rt.getValueAtTime((rt.keyframes[0].t + 0.01) / g, 0), j[1] = at.getValueAtTime((at.keyframes[0].t + 0.01) / g, 0), tt[0] = rt.getValueAtTime(rt.keyframes[0].t / g, 0), tt[1] = at.getValueAtTime(at.keyframes[0].t / g, 0)) : rt._caching.lastFrame + rt.offsetTime >= rt.keyframes[rt.keyframes.length - 1].t ? (j[0] = rt.getValueAtTime(rt.keyframes[rt.keyframes.length - 1].t / g, 0), j[1] = at.getValueAtTime(at.keyframes[at.keyframes.length - 1].t / g, 0), tt[0] = rt.getValueAtTime((rt.keyframes[rt.keyframes.length - 1].t - 0.01) / g, 0), tt[1] = at.getValueAtTime((at.keyframes[at.keyframes.length - 1].t - 0.01) / g, 0)) : (j = [rt.pv, at.pv], tt[0] = rt.getValueAtTime((rt._caching.lastFrame + rt.offsetTime - 0.01) / g, rt.offsetTime), tt[1] = at.getValueAtTime((at._caching.lastFrame + at.offsetTime - 0.01) / g, at.offsetTime));
              } else j = tt = o;
              this.v.rotate(-Math.atan2(j[1] - tt[1], j[0] - tt[0]));
            }
            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }
          this.frameId = this.elem.globalData.frameId;
        }
      }, precalculateMatrix: function() {
        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
          if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
          }
          this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
        }
      }, autoOrient: function() {
      } }, extendPrototype([DynamicPropertyContainer], s), s.prototype.addDynamicProperty = function(h) {
        this._addDynamicProperty(h), this.elem.addDynamicProperty(h), this._isDirty = !0;
      }, s.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, { getTransformProperty: function(h, g, j) {
        return new s(h, g, j);
      } };
    }();
    function RepeaterModifier() {
    }
    function RoundCornersModifier() {
    }
    function floatEqual(o, s) {
      return 1e5 * Math.abs(o - s) <= Math.min(Math.abs(o), Math.abs(s));
    }
    function floatZero(o) {
      return Math.abs(o) <= 1e-5;
    }
    function lerp(o, s, h) {
      return o * (1 - h) + s * h;
    }
    function lerpPoint(o, s, h) {
      return [lerp(o[0], s[0], h), lerp(o[1], s[1], h)];
    }
    function quadRoots(o, s, h) {
      if (o === 0) return [];
      var g = s * s - 4 * o * h;
      if (g < 0) return [];
      var j = -s / (2 * o);
      if (g === 0) return [j];
      var tt = Math.sqrt(g) / (2 * o);
      return [j - tt, j + tt];
    }
    function polynomialCoefficients(o, s, h, g) {
      return [3 * s - o - 3 * h + g, 3 * o - 6 * s + 3 * h, -3 * o + 3 * s, o];
    }
    function singlePoint(o) {
      return new PolynomialBezier(o, o, o, o, !1);
    }
    function PolynomialBezier(o, s, h, g, j) {
      j && pointEqual(o, s) && (s = lerpPoint(o, g, 1 / 3)), j && pointEqual(h, g) && (h = lerpPoint(o, g, 2 / 3));
      var tt = polynomialCoefficients(o[0], s[0], h[0], g[0]), rt = polynomialCoefficients(o[1], s[1], h[1], g[1]);
      this.a = [tt[0], rt[0]], this.b = [tt[1], rt[1]], this.c = [tt[2], rt[2]], this.d = [tt[3], rt[3]], this.points = [o, s, h, g];
    }
    function extrema(o, s) {
      var h = o.points[0][s], g = o.points[o.points.length - 1][s];
      if (h > g) {
        var j = g;
        g = h, h = j;
      }
      for (var tt = quadRoots(3 * o.a[s], 2 * o.b[s], o.c[s]), rt = 0; rt < tt.length; rt += 1) if (tt[rt] > 0 && tt[rt] < 1) {
        var at = o.point(tt[rt])[s];
        at < h ? h = at : at > g && (g = at);
      }
      return { min: h, max: g };
    }
    function intersectData(o, s, h) {
      var g = o.boundingBox();
      return { cx: g.cx, cy: g.cy, width: g.width, height: g.height, bez: o, t: (s + h) / 2, t1: s, t2: h };
    }
    function splitData(o) {
      var s = o.bez.split(0.5);
      return [intersectData(s[0], o.t1, o.t), intersectData(s[1], o.t, o.t2)];
    }
    function boxIntersect(o, s) {
      return 2 * Math.abs(o.cx - s.cx) < o.width + s.width && 2 * Math.abs(o.cy - s.cy) < o.height + s.height;
    }
    function intersectsImpl(o, s, h, g, j, tt) {
      if (boxIntersect(o, s)) {
        if (h >= tt || o.width <= g && o.height <= g && s.width <= g && s.height <= g) return void j.push([o.t, s.t]);
        var rt = splitData(o), at = splitData(s);
        intersectsImpl(rt[0], at[0], h + 1, g, j, tt), intersectsImpl(rt[0], at[1], h + 1, g, j, tt), intersectsImpl(rt[1], at[0], h + 1, g, j, tt), intersectsImpl(rt[1], at[1], h + 1, g, j, tt);
      }
    }
    function crossProduct(o, s) {
      return [o[1] * s[2] - o[2] * s[1], o[2] * s[0] - o[0] * s[2], o[0] * s[1] - o[1] * s[0]];
    }
    function lineIntersection(o, s, h, g) {
      var j = [o[0], o[1], 1], tt = [s[0], s[1], 1], rt = [h[0], h[1], 1], at = [g[0], g[1], 1], it = crossProduct(crossProduct(j, tt), crossProduct(rt, at));
      return floatZero(it[2]) ? null : [it[0] / it[2], it[1] / it[2]];
    }
    function polarOffset(o, s, h) {
      return [o[0] + Math.cos(s) * h, o[1] - Math.sin(s) * h];
    }
    function pointDistance(o, s) {
      return Math.hypot(o[0] - s[0], o[1] - s[1]);
    }
    function pointEqual(o, s) {
      return floatEqual(o[0], s[0]) && floatEqual(o[1], s[1]);
    }
    function ZigZagModifier() {
    }
    function setPoint(o, s, h, g, j, tt, rt) {
      var at = h - Math.PI / 2, it = h + Math.PI / 2, st = s[0] + Math.cos(h) * g * j, lt = s[1] - Math.sin(h) * g * j;
      o.setTripleAt(st, lt, st + Math.cos(at) * tt, lt - Math.sin(at) * tt, st + Math.cos(it) * rt, lt - Math.sin(it) * rt, o.length());
    }
    function getPerpendicularVector(o, s) {
      var h = [s[0] - o[0], s[1] - o[1]], g = 0.5 * -Math.PI;
      return [Math.cos(g) * h[0] - Math.sin(g) * h[1], Math.sin(g) * h[0] + Math.cos(g) * h[1]];
    }
    function getProjectingAngle(o, s) {
      var h = s === 0 ? o.length() - 1 : s - 1, g = (s + 1) % o.length(), j = getPerpendicularVector(o.v[h], o.v[g]);
      return Math.atan2(0, 1) - Math.atan2(j[1], j[0]);
    }
    function zigZagCorner(o, s, h, g, j, tt, rt) {
      var at = getProjectingAngle(s, h), it = s.v[h % s._length], st = s.v[h === 0 ? s._length - 1 : h - 1], lt = s.v[(h + 1) % s._length], ot = tt === 2 ? Math.sqrt(Math.pow(it[0] - st[0], 2) + Math.pow(it[1] - st[1], 2)) : 0, ft = tt === 2 ? Math.sqrt(Math.pow(it[0] - lt[0], 2) + Math.pow(it[1] - lt[1], 2)) : 0;
      setPoint(o, s.v[h % s._length], at, rt, g, ft / (2 * (j + 1)), ot / (2 * (j + 1)));
    }
    function zigZagSegment(o, s, h, g, j, tt) {
      for (var rt = 0; rt < g; rt += 1) {
        var at = (rt + 1) / (g + 1), it = j === 2 ? Math.sqrt(Math.pow(s.points[3][0] - s.points[0][0], 2) + Math.pow(s.points[3][1] - s.points[0][1], 2)) : 0, st = s.normalAngle(at);
        setPoint(o, s.point(at), st, tt, h, it / (2 * (g + 1)), it / (2 * (g + 1))), tt = -tt;
      }
      return tt;
    }
    function linearOffset(o, s, h) {
      var g = Math.atan2(s[0] - o[0], s[1] - o[1]);
      return [polarOffset(o, g, h), polarOffset(s, g, h)];
    }
    function offsetSegment(o, s) {
      var h, g, j, tt, rt, at, it;
      h = (it = linearOffset(o.points[0], o.points[1], s))[0], g = it[1], j = (it = linearOffset(o.points[1], o.points[2], s))[0], tt = it[1], rt = (it = linearOffset(o.points[2], o.points[3], s))[0], at = it[1];
      var st = lineIntersection(h, g, j, tt);
      st === null && (st = g);
      var lt = lineIntersection(rt, at, j, tt);
      return lt === null && (lt = rt), new PolynomialBezier(h, st, lt, at);
    }
    function joinLines(o, s, h, g, j) {
      var tt = s.points[3], rt = h.points[0];
      if (g === 3 || pointEqual(tt, rt)) return tt;
      if (g === 2) {
        var at = -s.tangentAngle(1), it = -h.tangentAngle(0) + Math.PI, st = lineIntersection(tt, polarOffset(tt, at + Math.PI / 2, 100), rt, polarOffset(rt, at + Math.PI / 2, 100)), lt = st ? pointDistance(st, tt) : pointDistance(tt, rt) / 2, ot = polarOffset(tt, at, 2 * lt * roundCorner);
        return o.setXYAt(ot[0], ot[1], "o", o.length() - 1), ot = polarOffset(rt, it, 2 * lt * roundCorner), o.setTripleAt(rt[0], rt[1], rt[0], rt[1], ot[0], ot[1], o.length()), rt;
      }
      var ft = lineIntersection(pointEqual(tt, s.points[2]) ? s.points[0] : s.points[2], tt, rt, pointEqual(rt, h.points[1]) ? h.points[3] : h.points[1]);
      return ft && pointDistance(ft, tt) < j ? (o.setTripleAt(ft[0], ft[1], ft[0], ft[1], ft[0], ft[1], o.length()), ft) : tt;
    }
    function getIntersection(o, s) {
      var h = o.intersections(s);
      return h.length && floatEqual(h[0][0], 1) && h.shift(), h.length ? h[0] : null;
    }
    function pruneSegmentIntersection(o, s) {
      var h = o.slice(), g = s.slice(), j = getIntersection(o[o.length - 1], s[0]);
      return j && (h[o.length - 1] = o[o.length - 1].split(j[0])[0], g[0] = s[0].split(j[1])[1]), o.length > 1 && s.length > 1 && (j = getIntersection(o[0], s[s.length - 1])) ? [[o[0].split(j[0])[0]], [s[s.length - 1].split(j[1])[1]]] : [h, g];
    }
    function pruneIntersections(o) {
      for (var s, h = 1; h < o.length; h += 1) s = pruneSegmentIntersection(o[h - 1], o[h]), o[h - 1] = s[0], o[h] = s[1];
      return o.length > 1 && (s = pruneSegmentIntersection(o[o.length - 1], o[0]), o[o.length - 1] = s[0], o[0] = s[1]), o;
    }
    function offsetSegmentSplit(o, s) {
      var h, g, j, tt, rt = o.inflectionPoints();
      if (rt.length === 0) return [offsetSegment(o, s)];
      if (rt.length === 1 || floatEqual(rt[1], 1)) return h = (j = o.split(rt[0]))[0], g = j[1], [offsetSegment(h, s), offsetSegment(g, s)];
      h = (j = o.split(rt[0]))[0];
      var at = (rt[1] - rt[0]) / (1 - rt[0]);
      return tt = (j = j[1].split(at))[0], g = j[1], [offsetSegment(h, s), offsetSegment(tt, s), offsetSegment(g, s)];
    }
    function OffsetPathModifier() {
    }
    function getFontProperties(o) {
      for (var s, h = o.fStyle ? o.fStyle.split(" ") : [], g = "normal", j = "normal", tt = h.length, rt = 0; rt < tt; rt += 1) switch (s = h[rt].toLowerCase(), s) {
        case "italic":
          j = "italic";
          break;
        case "bold":
          g = "700";
          break;
        case "black":
          g = "900";
          break;
        case "medium":
          g = "500";
          break;
        case "regular":
        case "normal":
          g = "400";
          break;
        case "light":
        case "thin":
          g = "200";
      }
      return { style: j, weight: o.fWeight || g };
    }
    extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(o, s) {
      this.getValue = this.processKeys, this.c = PropertyFactory.getProp(o, s.c, 0, null, this), this.o = PropertyFactory.getProp(o, s.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(o, s.tr, this), this.so = PropertyFactory.getProp(o, s.tr.so, 0, 0.01, this), this.eo = PropertyFactory.getProp(o, s.tr.eo, 0, 0.01, this), this.data = s, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
    }, RepeaterModifier.prototype.applyTransforms = function(o, s, h, g, j, tt) {
      var rt = tt ? -1 : 1, at = g.s.v[0] + (1 - g.s.v[0]) * (1 - j), it = g.s.v[1] + (1 - g.s.v[1]) * (1 - j);
      o.translate(g.p.v[0] * rt * j, g.p.v[1] * rt * j, g.p.v[2]), s.translate(-g.a.v[0], -g.a.v[1], g.a.v[2]), s.rotate(-g.r.v * rt * j), s.translate(g.a.v[0], g.a.v[1], g.a.v[2]), h.translate(-g.a.v[0], -g.a.v[1], g.a.v[2]), h.scale(tt ? 1 / at : at, tt ? 1 / it : it), h.translate(g.a.v[0], g.a.v[1], g.a.v[2]);
    }, RepeaterModifier.prototype.init = function(o, s, h, g) {
      for (this.elem = o, this.arr = s, this.pos = h, this.elemsData = g, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(o), this.initModifierProperties(o, s[h]); h > 0; ) h -= 1, this._elements.unshift(s[h]);
      this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, RepeaterModifier.prototype.resetElements = function(o) {
      var s, h = o.length;
      for (s = 0; s < h; s += 1) o[s]._processed = !1, o[s].ty === "gr" && this.resetElements(o[s].it);
    }, RepeaterModifier.prototype.cloneElements = function(o) {
      var s = JSON.parse(JSON.stringify(o));
      return this.resetElements(s), s;
    }, RepeaterModifier.prototype.changeGroupRender = function(o, s) {
      var h, g = o.length;
      for (h = 0; h < g; h += 1) o[h]._render = s, o[h].ty === "gr" && this.changeGroupRender(o[h].it, s);
    }, RepeaterModifier.prototype.processShapes = function(o) {
      var s, h, g, j, tt, rt = !1;
      if (this._mdf || o) {
        var at, it = Math.ceil(this.c.v);
        if (this._groups.length < it) {
          for (; this._groups.length < it; ) {
            var st = { it: this.cloneElements(this._elements), ty: "gr" };
            st.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, st), this._groups.splice(0, 0, st), this._currentCopies += 1;
          }
          this.elem.reloadShapes(), rt = !0;
        }
        for (tt = 0, g = 0; g <= this._groups.length - 1; g += 1) {
          if (at = tt < it, this._groups[g]._render = at, this.changeGroupRender(this._groups[g].it, at), !at) {
            var lt = this.elemsData[g].it, ot = lt[lt.length - 1];
            ot.transform.op.v !== 0 ? (ot.transform.op._mdf = !0, ot.transform.op.v = 0) : ot.transform.op._mdf = !1;
          }
          tt += 1;
        }
        this._currentCopies = it;
        var ft = this.o.v, ht = ft % 1, pt = ft > 0 ? Math.floor(ft) : Math.ceil(ft), dt = this.pMatrix.props, ct = this.rMatrix.props, mt = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var yt, vt, _t = 0;
        if (ft > 0) {
          for (; _t < pt; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), _t += 1;
          ht && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, ht, !1), _t += ht);
        } else if (ft < 0) {
          for (; _t > pt; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), _t -= 1;
          ht && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -ht, !0), _t -= ht);
        }
        for (g = this.data.m === 1 ? 0 : this._currentCopies - 1, j = this.data.m === 1 ? 1 : -1, tt = this._currentCopies; tt; ) {
          if (vt = (h = (s = this.elemsData[g].it)[s.length - 1].transform.mProps.v.props).length, s[s.length - 1].transform.mProps._mdf = !0, s[s.length - 1].transform.op._mdf = !0, s[s.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (g / (this._currentCopies - 1)), _t !== 0) {
            for ((g !== 0 && j === 1 || g !== this._currentCopies - 1 && j === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(ct[0], ct[1], ct[2], ct[3], ct[4], ct[5], ct[6], ct[7], ct[8], ct[9], ct[10], ct[11], ct[12], ct[13], ct[14], ct[15]), this.matrix.transform(mt[0], mt[1], mt[2], mt[3], mt[4], mt[5], mt[6], mt[7], mt[8], mt[9], mt[10], mt[11], mt[12], mt[13], mt[14], mt[15]), this.matrix.transform(dt[0], dt[1], dt[2], dt[3], dt[4], dt[5], dt[6], dt[7], dt[8], dt[9], dt[10], dt[11], dt[12], dt[13], dt[14], dt[15]), yt = 0; yt < vt; yt += 1) h[yt] = this.matrix.props[yt];
            this.matrix.reset();
          } else for (this.matrix.reset(), yt = 0; yt < vt; yt += 1) h[yt] = this.matrix.props[yt];
          _t += 1, tt -= 1, g += j;
        }
      } else for (tt = this._currentCopies, g = 0, j = 1; tt; ) h = (s = this.elemsData[g].it)[s.length - 1].transform.mProps.v.props, s[s.length - 1].transform.mProps._mdf = !1, s[s.length - 1].transform.op._mdf = !1, tt -= 1, g += j;
      return rt;
    }, RepeaterModifier.prototype.addShape = function() {
    }, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(o, s) {
      this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(o, s.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
    }, RoundCornersModifier.prototype.processPath = function(o, s) {
      var h = shapePool.newElement();
      h.c = o.c;
      var g, j, tt, rt, at, it, st, lt, ot, ft, ht, pt, dt, ct = o._length, mt = 0;
      for (g = 0; g < ct; g += 1) j = o.v[g], rt = o.o[g], tt = o.i[g], j[0] === rt[0] && j[1] === rt[1] && j[0] === tt[0] && j[1] === tt[1] ? g !== 0 && g !== ct - 1 || o.c ? (at = g === 0 ? o.v[ct - 1] : o.v[g - 1], st = (it = Math.sqrt(Math.pow(j[0] - at[0], 2) + Math.pow(j[1] - at[1], 2))) ? Math.min(it / 2, s) / it : 0, lt = pt = j[0] + (at[0] - j[0]) * st, ot = dt = j[1] - (j[1] - at[1]) * st, ft = lt - (lt - j[0]) * roundCorner, ht = ot - (ot - j[1]) * roundCorner, h.setTripleAt(lt, ot, ft, ht, pt, dt, mt), mt += 1, at = g === ct - 1 ? o.v[0] : o.v[g + 1], st = (it = Math.sqrt(Math.pow(j[0] - at[0], 2) + Math.pow(j[1] - at[1], 2))) ? Math.min(it / 2, s) / it : 0, lt = ft = j[0] + (at[0] - j[0]) * st, ot = ht = j[1] + (at[1] - j[1]) * st, pt = lt - (lt - j[0]) * roundCorner, dt = ot - (ot - j[1]) * roundCorner, h.setTripleAt(lt, ot, ft, ht, pt, dt, mt), mt += 1) : (h.setTripleAt(j[0], j[1], rt[0], rt[1], tt[0], tt[1], mt), mt += 1) : (h.setTripleAt(o.v[g][0], o.v[g][1], o.o[g][0], o.o[g][1], o.i[g][0], o.i[g][1], mt), mt += 1);
      return h;
    }, RoundCornersModifier.prototype.processShapes = function(o) {
      var s, h, g, j, tt, rt, at = this.shapes.length, it = this.rd.v;
      if (it !== 0) for (h = 0; h < at; h += 1) {
        if (rt = (tt = this.shapes[h]).localShapeCollection, tt.shape._mdf || this._mdf || o) for (rt.releaseShapes(), tt.shape._mdf = !0, s = tt.shape.paths.shapes, j = tt.shape.paths._length, g = 0; g < j; g += 1) rt.addShape(this.processPath(s[g], it));
        tt.shape.paths = tt.localShapeCollection;
      }
      this.dynamicProperties.length || (this._mdf = !1);
    }, PolynomialBezier.prototype.point = function(o) {
      return [((this.a[0] * o + this.b[0]) * o + this.c[0]) * o + this.d[0], ((this.a[1] * o + this.b[1]) * o + this.c[1]) * o + this.d[1]];
    }, PolynomialBezier.prototype.derivative = function(o) {
      return [(3 * o * this.a[0] + 2 * this.b[0]) * o + this.c[0], (3 * o * this.a[1] + 2 * this.b[1]) * o + this.c[1]];
    }, PolynomialBezier.prototype.tangentAngle = function(o) {
      var s = this.derivative(o);
      return Math.atan2(s[1], s[0]);
    }, PolynomialBezier.prototype.normalAngle = function(o) {
      var s = this.derivative(o);
      return Math.atan2(s[0], s[1]);
    }, PolynomialBezier.prototype.inflectionPoints = function() {
      var o = this.a[1] * this.b[0] - this.a[0] * this.b[1];
      if (floatZero(o)) return [];
      var s = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / o, h = s * s - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / o;
      if (h < 0) return [];
      var g = Math.sqrt(h);
      return floatZero(g) ? g > 0 && g < 1 ? [s] : [] : [s - g, s + g].filter(function(j) {
        return j > 0 && j < 1;
      });
    }, PolynomialBezier.prototype.split = function(o) {
      if (o <= 0) return [singlePoint(this.points[0]), this];
      if (o >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
      var s = lerpPoint(this.points[0], this.points[1], o), h = lerpPoint(this.points[1], this.points[2], o), g = lerpPoint(this.points[2], this.points[3], o), j = lerpPoint(s, h, o), tt = lerpPoint(h, g, o), rt = lerpPoint(j, tt, o);
      return [new PolynomialBezier(this.points[0], s, j, rt, !0), new PolynomialBezier(rt, tt, g, this.points[3], !0)];
    }, PolynomialBezier.prototype.bounds = function() {
      return { x: extrema(this, 0), y: extrema(this, 1) };
    }, PolynomialBezier.prototype.boundingBox = function() {
      var o = this.bounds();
      return { left: o.x.min, right: o.x.max, top: o.y.min, bottom: o.y.max, width: o.x.max - o.x.min, height: o.y.max - o.y.min, cx: (o.x.max + o.x.min) / 2, cy: (o.y.max + o.y.min) / 2 };
    }, PolynomialBezier.prototype.intersections = function(o, s, h) {
      s === void 0 && (s = 2), h === void 0 && (h = 7);
      var g = [];
      return intersectsImpl(intersectData(this, 0, 1), intersectData(o, 0, 1), 0, s, g, h), g;
    }, PolynomialBezier.shapeSegment = function(o, s) {
      var h = (s + 1) % o.length();
      return new PolynomialBezier(o.v[s], o.o[s], o.i[h], o.v[h], !0);
    }, PolynomialBezier.shapeSegmentInverted = function(o, s) {
      var h = (s + 1) % o.length();
      return new PolynomialBezier(o.v[h], o.i[h], o.o[s], o.v[s], !0);
    }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(o, s) {
      this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(o, s.s, 0, null, this), this.frequency = PropertyFactory.getProp(o, s.r, 0, null, this), this.pointsType = PropertyFactory.getProp(o, s.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
    }, ZigZagModifier.prototype.processPath = function(o, s, h, g) {
      var j = o._length, tt = shapePool.newElement();
      if (tt.c = o.c, o.c || (j -= 1), j === 0) return tt;
      var rt = -1, at = PolynomialBezier.shapeSegment(o, 0);
      zigZagCorner(tt, o, 0, s, h, g, rt);
      for (var it = 0; it < j; it += 1) rt = zigZagSegment(tt, at, s, h, g, -rt), at = it !== j - 1 || o.c ? PolynomialBezier.shapeSegment(o, (it + 1) % j) : null, zigZagCorner(tt, o, it + 1, s, h, g, rt);
      return tt;
    }, ZigZagModifier.prototype.processShapes = function(o) {
      var s, h, g, j, tt, rt, at = this.shapes.length, it = this.amplitude.v, st = Math.max(0, Math.round(this.frequency.v)), lt = this.pointsType.v;
      if (it !== 0) for (h = 0; h < at; h += 1) {
        if (rt = (tt = this.shapes[h]).localShapeCollection, tt.shape._mdf || this._mdf || o) for (rt.releaseShapes(), tt.shape._mdf = !0, s = tt.shape.paths.shapes, j = tt.shape.paths._length, g = 0; g < j; g += 1) rt.addShape(this.processPath(s[g], it, st, lt));
        tt.shape.paths = tt.localShapeCollection;
      }
      this.dynamicProperties.length || (this._mdf = !1);
    }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(o, s) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(o, s.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(o, s.ml, 0, null, this), this.lineJoin = s.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
    }, OffsetPathModifier.prototype.processPath = function(o, s, h, g) {
      var j = shapePool.newElement();
      j.c = o.c;
      var tt = o.length();
      o.c || (tt -= 1);
      var rt, at, it, st = [];
      for (rt = 0; rt < tt; rt += 1) it = PolynomialBezier.shapeSegment(o, rt), st.push(offsetSegmentSplit(it, s));
      if (!o.c) for (rt = tt - 1; rt >= 0; rt -= 1) it = PolynomialBezier.shapeSegmentInverted(o, rt), st.push(offsetSegmentSplit(it, s));
      st = pruneIntersections(st);
      var lt = null, ot = null;
      for (rt = 0; rt < st.length; rt += 1) {
        var ft = st[rt];
        for (ot && (lt = joinLines(j, ot, ft[0], h, g)), ot = ft[ft.length - 1], at = 0; at < ft.length; at += 1) it = ft[at], lt && pointEqual(it.points[0], lt) ? j.setXYAt(it.points[1][0], it.points[1][1], "o", j.length() - 1) : j.setTripleAt(it.points[0][0], it.points[0][1], it.points[1][0], it.points[1][1], it.points[0][0], it.points[0][1], j.length()), j.setTripleAt(it.points[3][0], it.points[3][1], it.points[3][0], it.points[3][1], it.points[2][0], it.points[2][1], j.length()), lt = it.points[3];
      }
      return st.length && joinLines(j, ot, st[0][0], h, g), j;
    }, OffsetPathModifier.prototype.processShapes = function(o) {
      var s, h, g, j, tt, rt, at = this.shapes.length, it = this.amount.v, st = this.miterLimit.v, lt = this.lineJoin;
      if (it !== 0) for (h = 0; h < at; h += 1) {
        if (rt = (tt = this.shapes[h]).localShapeCollection, tt.shape._mdf || this._mdf || o) for (rt.releaseShapes(), tt.shape._mdf = !0, s = tt.shape.paths.shapes, j = tt.shape.paths._length, g = 0; g < j; g += 1) rt.addShape(this.processPath(s[g], it, lt, st));
        tt.shape.paths = tt.localShapeCollection;
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    var FontManager = function() {
      var o = { w: 0, size: 0, shapes: [], data: { shapes: [] } }, s = [];
      s = s.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
      var h = 127988, g = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
      function j(lt, ot) {
        var ft = createTag("span");
        ft.setAttribute("aria-hidden", !0), ft.style.fontFamily = ot;
        var ht = createTag("span");
        ht.innerText = "giItT1WQy@!-/#", ft.style.position = "absolute", ft.style.left = "-10000px", ft.style.top = "-10000px", ft.style.fontSize = "300px", ft.style.fontVariant = "normal", ft.style.fontStyle = "normal", ft.style.fontWeight = "normal", ft.style.letterSpacing = "0", ft.appendChild(ht), document.body.appendChild(ft);
        var pt = ht.offsetWidth;
        return ht.style.fontFamily = function(dt) {
          var ct, mt = dt.split(","), yt = mt.length, vt = [];
          for (ct = 0; ct < yt; ct += 1) mt[ct] !== "sans-serif" && mt[ct] !== "monospace" && vt.push(mt[ct]);
          return vt.join(",");
        }(lt) + ", " + ot, { node: ht, w: pt, parent: ft };
      }
      function tt(lt, ot) {
        var ft, ht = document.body && ot ? "svg" : "canvas", pt = getFontProperties(lt);
        if (ht === "svg") {
          var dt = createNS("text");
          dt.style.fontSize = "100px", dt.setAttribute("font-family", lt.fFamily), dt.setAttribute("font-style", pt.style), dt.setAttribute("font-weight", pt.weight), dt.textContent = "1", lt.fClass ? (dt.style.fontFamily = "inherit", dt.setAttribute("class", lt.fClass)) : dt.style.fontFamily = lt.fFamily, ot.appendChild(dt), ft = dt;
        } else {
          var ct = new OffscreenCanvas(500, 500).getContext("2d");
          ct.font = pt.style + " " + pt.weight + " 100px " + lt.fFamily, ft = ct;
        }
        return { measureText: function(mt) {
          return ht === "svg" ? (ft.textContent = mt, ft.getComputedTextLength()) : ft.measureText(mt).width;
        } };
      }
      function rt(lt) {
        var ot = 0, ft = lt.charCodeAt(0);
        if (ft >= 55296 && ft <= 56319) {
          var ht = lt.charCodeAt(1);
          ht >= 56320 && ht <= 57343 && (ot = 1024 * (ft - 55296) + ht - 56320 + 65536);
        }
        return ot;
      }
      function at(lt) {
        var ot = rt(lt);
        return ot >= 127462 && ot <= 127487;
      }
      var it = function() {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
      };
      it.isModifier = function(lt, ot) {
        var ft = lt.toString(16) + ot.toString(16);
        return g.indexOf(ft) !== -1;
      }, it.isZeroWidthJoiner = function(lt) {
        return lt === 8205;
      }, it.isFlagEmoji = function(lt) {
        return at(lt.substr(0, 2)) && at(lt.substr(2, 2));
      }, it.isRegionalCode = at, it.isCombinedCharacter = function(lt) {
        return s.indexOf(lt) !== -1;
      }, it.isRegionalFlag = function(lt, ot) {
        var ft = rt(lt.substr(ot, 2));
        if (ft !== h) return !1;
        var ht = 0;
        for (ot += 2; ht < 5; ) {
          if ((ft = rt(lt.substr(ot, 2))) < 917601 || ft > 917626) return !1;
          ht += 1, ot += 2;
        }
        return rt(lt.substr(ot, 2)) === 917631;
      }, it.isVariationSelector = function(lt) {
        return lt === 65039;
      }, it.BLACK_FLAG_CODE_POINT = h;
      var st = { addChars: function(lt) {
        if (lt) {
          this.chars || (this.chars = []);
          var ot, ft, ht, pt = lt.length, dt = this.chars.length;
          for (ot = 0; ot < pt; ot += 1) {
            for (ft = 0, ht = !1; ft < dt; ) this.chars[ft].style === lt[ot].style && this.chars[ft].fFamily === lt[ot].fFamily && this.chars[ft].ch === lt[ot].ch && (ht = !0), ft += 1;
            ht || (this.chars.push(lt[ot]), dt += 1);
          }
        }
      }, addFonts: function(lt, ot) {
        if (lt) {
          if (this.chars) return this.isLoaded = !0, void (this.fonts = lt.list);
          if (!document.body) return this.isLoaded = !0, lt.list.forEach(function(bt) {
            bt.helper = tt(bt), bt.cache = {};
          }), void (this.fonts = lt.list);
          var ft, ht = lt.list, pt = ht.length, dt = pt;
          for (ft = 0; ft < pt; ft += 1) {
            var ct, mt, yt = !0;
            if (ht[ft].loaded = !1, ht[ft].monoCase = j(ht[ft].fFamily, "monospace"), ht[ft].sansCase = j(ht[ft].fFamily, "sans-serif"), ht[ft].fPath) {
              if (ht[ft].fOrigin === "p" || ht[ft].origin === 3) {
                if ((ct = document.querySelectorAll('style[f-forigin="p"][f-family="' + ht[ft].fFamily + '"], style[f-origin="3"][f-family="' + ht[ft].fFamily + '"]')).length > 0 && (yt = !1), yt) {
                  var vt = createTag("style");
                  vt.setAttribute("f-forigin", ht[ft].fOrigin), vt.setAttribute("f-origin", ht[ft].origin), vt.setAttribute("f-family", ht[ft].fFamily), vt.type = "text/css", vt.innerText = "@font-face {font-family: " + ht[ft].fFamily + "; font-style: normal; src: url('" + ht[ft].fPath + "');}", ot.appendChild(vt);
                }
              } else if (ht[ft].fOrigin === "g" || ht[ft].origin === 1) {
                for (ct = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), mt = 0; mt < ct.length; mt += 1) ct[mt].href.indexOf(ht[ft].fPath) !== -1 && (yt = !1);
                if (yt) {
                  var _t = createTag("link");
                  _t.setAttribute("f-forigin", ht[ft].fOrigin), _t.setAttribute("f-origin", ht[ft].origin), _t.type = "text/css", _t.rel = "stylesheet", _t.href = ht[ft].fPath, document.body.appendChild(_t);
                }
              } else if (ht[ft].fOrigin === "t" || ht[ft].origin === 2) {
                for (ct = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), mt = 0; mt < ct.length; mt += 1) ht[ft].fPath === ct[mt].src && (yt = !1);
                if (yt) {
                  var Pt = createTag("link");
                  Pt.setAttribute("f-forigin", ht[ft].fOrigin), Pt.setAttribute("f-origin", ht[ft].origin), Pt.setAttribute("rel", "stylesheet"), Pt.setAttribute("href", ht[ft].fPath), ot.appendChild(Pt);
                }
              }
            } else ht[ft].loaded = !0, dt -= 1;
            ht[ft].helper = tt(ht[ft], ot), ht[ft].cache = {}, this.fonts.push(ht[ft]);
          }
          dt === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
        } else this.isLoaded = !0;
      }, getCharData: function(lt, ot, ft) {
        for (var ht = 0, pt = this.chars.length; ht < pt; ) {
          if (this.chars[ht].ch === lt && this.chars[ht].style === ot && this.chars[ht].fFamily === ft) return this.chars[ht];
          ht += 1;
        }
        return (typeof lt == "string" && lt.charCodeAt(0) !== 13 || !lt) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", lt, ot, ft)), o;
      }, getFontByName: function(lt) {
        for (var ot = 0, ft = this.fonts.length; ot < ft; ) {
          if (this.fonts[ot].fName === lt) return this.fonts[ot];
          ot += 1;
        }
        return this.fonts[0];
      }, measureText: function(lt, ot, ft) {
        var ht = this.getFontByName(ot), pt = lt;
        if (!ht.cache[pt]) {
          var dt = ht.helper;
          if (lt === " ") {
            var ct = dt.measureText("|" + lt + "|"), mt = dt.measureText("||");
            ht.cache[pt] = (ct - mt) / 100;
          } else ht.cache[pt] = dt.measureText(lt) / 100;
        }
        return ht.cache[pt] * ft;
      }, checkLoadedFonts: function() {
        var lt, ot, ft, ht = this.fonts.length, pt = ht;
        for (lt = 0; lt < ht; lt += 1) this.fonts[lt].loaded ? pt -= 1 : this.fonts[lt].fOrigin === "n" || this.fonts[lt].origin === 0 ? this.fonts[lt].loaded = !0 : (ot = this.fonts[lt].monoCase.node, ft = this.fonts[lt].monoCase.w, ot.offsetWidth !== ft ? (pt -= 1, this.fonts[lt].loaded = !0) : (ot = this.fonts[lt].sansCase.node, ft = this.fonts[lt].sansCase.w, ot.offsetWidth !== ft && (pt -= 1, this.fonts[lt].loaded = !0)), this.fonts[lt].loaded && (this.fonts[lt].sansCase.parent.parentNode.removeChild(this.fonts[lt].sansCase.parent), this.fonts[lt].monoCase.parent.parentNode.removeChild(this.fonts[lt].monoCase.parent)));
        pt !== 0 && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      }, setIsLoaded: function() {
        this.isLoaded = !0;
      } };
      return it.prototype = st, it;
    }();
    function SlotManager(o) {
      this.animationData = o;
    }
    function slotFactory(o) {
      return new SlotManager(o);
    }
    function RenderableElement() {
    }
    SlotManager.prototype.getProp = function(o) {
      return this.animationData.slots && this.animationData.slots[o.sid] ? Object.assign(o, this.animationData.slots[o.sid].p) : o;
    }, RenderableElement.prototype = { initRenderable: function() {
      this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
    }, addRenderableComponent: function(o) {
      this.renderableComponents.indexOf(o) === -1 && this.renderableComponents.push(o);
    }, removeRenderableComponent: function(o) {
      this.renderableComponents.indexOf(o) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(o), 1);
    }, prepareRenderableFrame: function(o) {
      this.checkLayerLimits(o);
    }, checkTransparency: function() {
      this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
    }, checkLayerLimits: function(o) {
      this.data.ip - this.data.st <= o && this.data.op - this.data.st > o ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
    }, renderRenderable: function() {
      var o, s = this.renderableComponents.length;
      for (o = 0; o < s; o += 1) this.renderableComponents[o].renderFrame(this._isFirstFrame);
    }, sourceRectAtTime: function() {
      return { top: 0, left: 0, width: 100, height: 100 };
    }, getLayerSize: function() {
      return this.data.ty === 5 ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height };
    } };
    var getBlendMode = /* @__PURE__ */ function() {
      var o = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" };
      return function(s) {
        return o[s] || "";
      };
    }();
    function SliderEffect(o, s, h) {
      this.p = PropertyFactory.getProp(s, o.v, 0, 0, h);
    }
    function AngleEffect(o, s, h) {
      this.p = PropertyFactory.getProp(s, o.v, 0, 0, h);
    }
    function ColorEffect(o, s, h) {
      this.p = PropertyFactory.getProp(s, o.v, 1, 0, h);
    }
    function PointEffect(o, s, h) {
      this.p = PropertyFactory.getProp(s, o.v, 1, 0, h);
    }
    function LayerIndexEffect(o, s, h) {
      this.p = PropertyFactory.getProp(s, o.v, 0, 0, h);
    }
    function MaskIndexEffect(o, s, h) {
      this.p = PropertyFactory.getProp(s, o.v, 0, 0, h);
    }
    function CheckboxEffect(o, s, h) {
      this.p = PropertyFactory.getProp(s, o.v, 0, 0, h);
    }
    function NoValueEffect() {
      this.p = {};
    }
    function EffectsManager(o, s) {
      var h = o.ef || [];
      this.effectElements = [];
      var g, j, tt = h.length;
      for (g = 0; g < tt; g += 1) j = new GroupEffect(h[g], s), this.effectElements.push(j);
    }
    function GroupEffect(o, s) {
      this.init(o, s);
    }
    function BaseElement() {
    }
    function FrameElement() {
    }
    function FootageElement(o, s, h) {
      this.initFrame(), this.initRenderable(), this.assetData = s.getAssetData(o.refId), this.footageData = s.imageLoader.getAsset(this.assetData), this.initBaseData(o, s, h);
    }
    function AudioElement(o, s, h) {
      this.initFrame(), this.initRenderable(), this.assetData = s.getAssetData(o.refId), this.initBaseData(o, s, h), this._isPlaying = !1, this._canPlay = !1;
      var g = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(g), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = o.tm ? PropertyFactory.getProp(this, o.tm, 0, s.frameRate, this) : { _placeholder: !0 }, this.lv = PropertyFactory.getProp(this, o.au && o.au.lv ? o.au.lv : { k: [100] }, 1, 0.01, this);
    }
    function BaseRenderer() {
    }
    extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(o, s) {
      this.data = o, this.effectElements = [], this.initDynamicPropertyContainer(s);
      var h, g, j = this.data.ef.length, tt = this.data.ef;
      for (h = 0; h < j; h += 1) {
        switch (g = null, tt[h].ty) {
          case 0:
            g = new SliderEffect(tt[h], s, this);
            break;
          case 1:
            g = new AngleEffect(tt[h], s, this);
            break;
          case 2:
            g = new ColorEffect(tt[h], s, this);
            break;
          case 3:
            g = new PointEffect(tt[h], s, this);
            break;
          case 4:
          case 7:
            g = new CheckboxEffect(tt[h], s, this);
            break;
          case 10:
            g = new LayerIndexEffect(tt[h], s, this);
            break;
          case 11:
            g = new MaskIndexEffect(tt[h], s, this);
            break;
          case 5:
            g = new EffectsManager(tt[h], s);
            break;
          default:
            g = new NoValueEffect(tt[h]);
        }
        g && this.effectElements.push(g);
      }
    }, BaseElement.prototype = { checkMasks: function() {
      if (!this.data.hasMask) return !1;
      for (var o = 0, s = this.data.masksProperties.length; o < s; ) {
        if (this.data.masksProperties[o].mode !== "n" && this.data.masksProperties[o].cl !== !1) return !0;
        o += 1;
      }
      return !1;
    }, initExpressions: function() {
      var o = getExpressionInterfaces();
      if (o) {
        var s = o("layer"), h = o("effects"), g = o("shape"), j = o("text"), tt = o("comp");
        this.layerInterface = s(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
        var rt = h.createEffectsInterface(this, this.layerInterface);
        this.layerInterface.registerEffectsInterface(rt), this.data.ty === 0 || this.data.xt ? this.compInterface = tt(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = g(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = j(this), this.layerInterface.text = this.layerInterface.textInterface);
      }
    }, setBlendMode: function() {
      var o = getBlendMode(this.data.bm);
      (this.baseElement || this.layerElement).style["mix-blend-mode"] = o;
    }, initBaseData: function(o, s, h) {
      this.globalData = s, this.comp = h, this.data = o, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
    }, getType: function() {
      return this.type;
    }, sourceRectAtTime: function() {
    } }, FrameElement.prototype = { initFrame: function() {
      this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
    }, prepareProperties: function(o, s) {
      var h, g = this.dynamicProperties.length;
      for (h = 0; h < g; h += 1) (s || this._isParent && this.dynamicProperties[h].propType === "transform") && (this.dynamicProperties[h].getValue(), this.dynamicProperties[h]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
    }, addDynamicProperty: function(o) {
      this.dynamicProperties.indexOf(o) === -1 && this.dynamicProperties.push(o);
    } }, FootageElement.prototype.prepareFrame = function() {
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
      return null;
    }, FootageElement.prototype.renderFrame = function() {
    }, FootageElement.prototype.destroy = function() {
    }, FootageElement.prototype.initExpressions = function() {
      var o = getExpressionInterfaces();
      if (o) {
        var s = o("footage");
        this.layerInterface = s(this);
      }
    }, FootageElement.prototype.getFootageData = function() {
      return this.footageData;
    }, AudioElement.prototype.prepareFrame = function(o) {
      if (this.prepareRenderableFrame(o, !0), this.prepareProperties(o, !0), this.tm._placeholder) this._currentTime = o / this.data.sr;
      else {
        var s = this.tm.v;
        this._currentTime = s;
      }
      this._volume = this.lv.v[0];
      var h = this._volume * this._volumeMultiplier;
      this._previousVolume !== h && (this._previousVolume = h, this.audio.volume(h));
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
    }, AudioElement.prototype.show = function() {
    }, AudioElement.prototype.hide = function() {
      this.audio.pause(), this._isPlaying = !1;
    }, AudioElement.prototype.pause = function() {
      this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
    }, AudioElement.prototype.resume = function() {
      this._canPlay = !0;
    }, AudioElement.prototype.setRate = function(o) {
      this.audio.rate(o);
    }, AudioElement.prototype.volume = function(o) {
      this._volumeMultiplier = o, this._previousVolume = o * this._volume, this.audio.volume(this._previousVolume);
    }, AudioElement.prototype.getBaseElement = function() {
      return null;
    }, AudioElement.prototype.destroy = function() {
    }, AudioElement.prototype.sourceRectAtTime = function() {
    }, AudioElement.prototype.initExpressions = function() {
    }, BaseRenderer.prototype.checkLayers = function(o) {
      var s, h, g = this.layers.length;
      for (this.completeLayers = !0, s = g - 1; s >= 0; s -= 1) this.elements[s] || (h = this.layers[s]).ip - h.st <= o - this.layers[s].st && h.op - h.st > o - this.layers[s].st && this.buildItem(s), this.completeLayers = !!this.elements[s] && this.completeLayers;
      this.checkPendingElements();
    }, BaseRenderer.prototype.createItem = function(o) {
      switch (o.ty) {
        case 2:
          return this.createImage(o);
        case 0:
          return this.createComp(o);
        case 1:
          return this.createSolid(o);
        case 3:
        default:
          return this.createNull(o);
        case 4:
          return this.createShape(o);
        case 5:
          return this.createText(o);
        case 6:
          return this.createAudio(o);
        case 13:
          return this.createCamera(o);
        case 15:
          return this.createFootage(o);
      }
    }, BaseRenderer.prototype.createCamera = function() {
      throw new Error("You're using a 3d camera. Try the html renderer.");
    }, BaseRenderer.prototype.createAudio = function(o) {
      return new AudioElement(o, this.globalData, this);
    }, BaseRenderer.prototype.createFootage = function(o) {
      return new FootageElement(o, this.globalData, this);
    }, BaseRenderer.prototype.buildAllItems = function() {
      var o, s = this.layers.length;
      for (o = 0; o < s; o += 1) this.buildItem(o);
      this.checkPendingElements();
    }, BaseRenderer.prototype.includeLayers = function(o) {
      this.completeLayers = !1;
      var s, h, g = o.length, j = this.layers.length;
      for (s = 0; s < g; s += 1) for (h = 0; h < j; ) {
        if (this.layers[h].id === o[s].id) {
          this.layers[h] = o[s];
          break;
        }
        h += 1;
      }
    }, BaseRenderer.prototype.setProjectInterface = function(o) {
      this.globalData.projectInterface = o;
    }, BaseRenderer.prototype.initItems = function() {
      this.globalData.progressiveLoad || this.buildAllItems();
    }, BaseRenderer.prototype.buildElementParenting = function(o, s, h) {
      for (var g = this.elements, j = this.layers, tt = 0, rt = j.length; tt < rt; ) j[tt].ind == s && (g[tt] && g[tt] !== !0 ? (h.push(g[tt]), g[tt].setAsParent(), j[tt].parent !== void 0 ? this.buildElementParenting(o, j[tt].parent, h) : o.setHierarchy(h)) : (this.buildItem(tt), this.addPendingElement(o))), tt += 1;
    }, BaseRenderer.prototype.addPendingElement = function(o) {
      this.pendingElements.push(o);
    }, BaseRenderer.prototype.searchExtraCompositions = function(o) {
      var s, h = o.length;
      for (s = 0; s < h; s += 1) if (o[s].xt) {
        var g = this.createComp(o[s]);
        g.initExpressions(), this.globalData.projectInterface.registerComposition(g);
      }
    }, BaseRenderer.prototype.getElementById = function(o) {
      var s, h = this.elements.length;
      for (s = 0; s < h; s += 1) if (this.elements[s].data.ind === o) return this.elements[s];
      return null;
    }, BaseRenderer.prototype.getElementByPath = function(o) {
      var s, h = o.shift();
      if (typeof h == "number") s = this.elements[h];
      else {
        var g, j = this.elements.length;
        for (g = 0; g < j; g += 1) if (this.elements[g].data.nm === h) {
          s = this.elements[g];
          break;
        }
      }
      return o.length === 0 ? s : s.getElementByPath(o);
    }, BaseRenderer.prototype.setupGlobalData = function(o, s) {
      this.globalData.fontManager = new FontManager(), this.globalData.slotManager = slotFactory(o), this.globalData.fontManager.addChars(o.chars), this.globalData.fontManager.addFonts(o.fonts, s), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = o.fr, this.globalData.nm = o.nm, this.globalData.compSize = { w: o.w, h: o.h };
    };
    var effectTypes = { TRANSFORM_EFFECT: "transformEFfect" };
    function TransformElement() {
    }
    function MaskElement(o, s, h) {
      this.data = o, this.element = s, this.globalData = h, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var g, j = this.globalData.defs, tt = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = createSizedArray(tt), this.solidPath = "";
      var rt, at, it, st, lt, ot, ft, ht = this.masksProperties, pt = 0, dt = [], ct = createElementID(), mt = "clipPath", yt = "clip-path";
      for (g = 0; g < tt; g += 1) if ((ht[g].mode !== "a" && ht[g].mode !== "n" || ht[g].inv || ht[g].o.k !== 100 || ht[g].o.x) && (mt = "mask", yt = "mask"), ht[g].mode !== "s" && ht[g].mode !== "i" || pt !== 0 ? st = null : ((st = createNS("rect")).setAttribute("fill", "#ffffff"), st.setAttribute("width", this.element.comp.data.w || 0), st.setAttribute("height", this.element.comp.data.h || 0), dt.push(st)), rt = createNS("path"), ht[g].mode === "n") this.viewData[g] = { op: PropertyFactory.getProp(this.element, ht[g].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, ht[g], 3), elem: rt, lastPath: "" }, j.appendChild(rt);
      else {
        var vt;
        if (pt += 1, rt.setAttribute("fill", ht[g].mode === "s" ? "#000000" : "#ffffff"), rt.setAttribute("clip-rule", "nonzero"), ht[g].x.k !== 0 ? (mt = "mask", yt = "mask", ft = PropertyFactory.getProp(this.element, ht[g].x, 0, null, this.element), vt = createElementID(), (lt = createNS("filter")).setAttribute("id", vt), (ot = createNS("feMorphology")).setAttribute("operator", "erode"), ot.setAttribute("in", "SourceGraphic"), ot.setAttribute("radius", "0"), lt.appendChild(ot), j.appendChild(lt), rt.setAttribute("stroke", ht[g].mode === "s" ? "#000000" : "#ffffff")) : (ot = null, ft = null), this.storedData[g] = { elem: rt, x: ft, expan: ot, lastPath: "", lastOperator: "", filterId: vt, lastRadius: 0 }, ht[g].mode === "i") {
          it = dt.length;
          var _t = createNS("g");
          for (at = 0; at < it; at += 1) _t.appendChild(dt[at]);
          var Pt = createNS("mask");
          Pt.setAttribute("mask-type", "alpha"), Pt.setAttribute("id", ct + "_" + pt), Pt.appendChild(rt), j.appendChild(Pt), _t.setAttribute("mask", "url(" + getLocationHref() + "#" + ct + "_" + pt + ")"), dt.length = 0, dt.push(_t);
        } else dt.push(rt);
        ht[g].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[g] = { elem: rt, lastPath: "", op: PropertyFactory.getProp(this.element, ht[g].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, ht[g], 3), invRect: st }, this.viewData[g].prop.k || this.drawPath(ht[g], this.viewData[g].prop.v, this.viewData[g]);
      }
      for (this.maskElement = createNS(mt), tt = dt.length, g = 0; g < tt; g += 1) this.maskElement.appendChild(dt[g]);
      pt > 0 && (this.maskElement.setAttribute("id", ct), this.element.maskedElement.setAttribute(yt, "url(" + getLocationHref() + "#" + ct + ")"), j.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
    }
    TransformElement.prototype = { initTransform: function() {
      var o = new Matrix();
      this.finalTransform = { mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: !1, _localMatMdf: !1, _opMdf: !1, mat: o, localMat: o, localOpacity: 1 }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
    }, renderTransform: function() {
      if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
        var o, s = this.finalTransform.mat, h = 0, g = this.hierarchy.length;
        if (!this.finalTransform._matMdf) for (; h < g; ) {
          if (this.hierarchy[h].finalTransform.mProp._mdf) {
            this.finalTransform._matMdf = !0;
            break;
          }
          h += 1;
        }
        if (this.finalTransform._matMdf) for (o = this.finalTransform.mProp.v.props, s.cloneFromProps(o), h = 0; h < g; h += 1) s.multiply(this.hierarchy[h].finalTransform.mProp.v);
      }
      (!this.localTransforms || this.finalTransform._matMdf) && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
    }, renderLocalTransform: function() {
      if (this.localTransforms) {
        var o = 0, s = this.localTransforms.length;
        if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf) for (; o < s; ) this.localTransforms[o]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[o]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), o += 1;
        if (this.finalTransform._localMatMdf) {
          var h = this.finalTransform.localMat;
          for (this.localTransforms[0].matrix.clone(h), o = 1; o < s; o += 1) {
            var g = this.localTransforms[o].matrix;
            h.multiply(g);
          }
          h.multiply(this.finalTransform.mat);
        }
        if (this.finalTransform._opMdf) {
          var j = this.finalTransform.localOpacity;
          for (o = 0; o < s; o += 1) j *= 0.01 * this.localTransforms[o].opacity;
          this.finalTransform.localOpacity = j;
        }
      }
    }, searchEffectTransforms: function() {
      if (this.renderableEffectsManager) {
        var o = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
        if (o.length) {
          this.localTransforms = [], this.finalTransform.localMat = new Matrix();
          var s = 0, h = o.length;
          for (s = 0; s < h; s += 1) this.localTransforms.push(o[s]);
        }
      }
    }, globalToLocal: function(o) {
      var s = [];
      s.push(this.finalTransform);
      for (var h = !0, g = this.comp; h; ) g.finalTransform ? (g.data.hasMask && s.splice(0, 0, g.finalTransform), g = g.comp) : h = !1;
      var j, tt, rt = s.length;
      for (j = 0; j < rt; j += 1) tt = s[j].mat.applyToPointArray(0, 0, 0), o = [o[0] - tt[0], o[1] - tt[1], 0];
      return o;
    }, mHelper: new Matrix() }, MaskElement.prototype.getMaskProperty = function(o) {
      return this.viewData[o].prop;
    }, MaskElement.prototype.renderFrame = function(o) {
      var s, h = this.element.finalTransform.mat, g = this.masksProperties.length;
      for (s = 0; s < g; s += 1) if ((this.viewData[s].prop._mdf || o) && this.drawPath(this.masksProperties[s], this.viewData[s].prop.v, this.viewData[s]), (this.viewData[s].op._mdf || o) && this.viewData[s].elem.setAttribute("fill-opacity", this.viewData[s].op.v), this.masksProperties[s].mode !== "n" && (this.viewData[s].invRect && (this.element.finalTransform.mProp._mdf || o) && this.viewData[s].invRect.setAttribute("transform", h.getInverseMatrix().to2dCSS()), this.storedData[s].x && (this.storedData[s].x._mdf || o))) {
        var j = this.storedData[s].expan;
        this.storedData[s].x.v < 0 ? (this.storedData[s].lastOperator !== "erode" && (this.storedData[s].lastOperator = "erode", this.storedData[s].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[s].filterId + ")")), j.setAttribute("radius", -this.storedData[s].x.v)) : (this.storedData[s].lastOperator !== "dilate" && (this.storedData[s].lastOperator = "dilate", this.storedData[s].elem.setAttribute("filter", null)), this.storedData[s].elem.setAttribute("stroke-width", 2 * this.storedData[s].x.v));
      }
    }, MaskElement.prototype.getMaskelement = function() {
      return this.maskElement;
    }, MaskElement.prototype.createLayerSolidPath = function() {
      var o = "M0,0 ";
      return o += " h" + this.globalData.compSize.w, o += " v" + this.globalData.compSize.h, o += " h-" + this.globalData.compSize.w, o += " v-" + this.globalData.compSize.h + " ";
    }, MaskElement.prototype.drawPath = function(o, s, h) {
      var g, j, tt = " M" + s.v[0][0] + "," + s.v[0][1];
      for (j = s._length, g = 1; g < j; g += 1) tt += " C" + s.o[g - 1][0] + "," + s.o[g - 1][1] + " " + s.i[g][0] + "," + s.i[g][1] + " " + s.v[g][0] + "," + s.v[g][1];
      if (s.c && j > 1 && (tt += " C" + s.o[g - 1][0] + "," + s.o[g - 1][1] + " " + s.i[0][0] + "," + s.i[0][1] + " " + s.v[0][0] + "," + s.v[0][1]), h.lastPath !== tt) {
        var rt = "";
        h.elem && (s.c && (rt = o.inv ? this.solidPath + tt : tt), h.elem.setAttribute("d", rt)), h.lastPath = tt;
      }
    }, MaskElement.prototype.destroy = function() {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
    };
    var filtersFactory = /* @__PURE__ */ function() {
      var o = { createFilter: function(s, h) {
        var g = createNS("filter");
        return g.setAttribute("id", s), h !== !0 && (g.setAttribute("filterUnits", "objectBoundingBox"), g.setAttribute("x", "0%"), g.setAttribute("y", "0%"), g.setAttribute("width", "100%"), g.setAttribute("height", "100%")), g;
      }, createAlphaToLuminanceFilter: function() {
        var s = createNS("feColorMatrix");
        return s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), s;
      } };
      return o;
    }(), featureSupport = function() {
      var o = { maskType: !0, svgLumaHidden: !0, offscreenCanvas: typeof OffscreenCanvas < "u" };
      return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (o.maskType = !1), /firefox/i.test(navigator.userAgent) && (o.svgLumaHidden = !1), o;
    }(), registeredEffects$1 = {}, idPrefix = "filter_result_";
    function SVGEffects(o) {
      var s, h, g = "SourceGraphic", j = o.data.ef ? o.data.ef.length : 0, tt = createElementID(), rt = filtersFactory.createFilter(tt, !0), at = 0;
      for (this.filters = [], s = 0; s < j; s += 1) {
        h = null;
        var it = o.data.ef[s].ty;
        registeredEffects$1[it] && (h = new registeredEffects$1[it].effect(rt, o.effectsManager.effectElements[s], o, idPrefix + at, g), g = idPrefix + at, registeredEffects$1[it].countsAsEffect && (at += 1)), h && this.filters.push(h);
      }
      at && (o.globalData.defs.appendChild(rt), o.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + tt + ")")), this.filters.length && o.addRenderableComponent(this);
    }
    function registerEffect$1(o, s, h) {
      registeredEffects$1[o] = { effect: s, countsAsEffect: h };
    }
    function SVGBaseElement() {
    }
    function HierarchyElement() {
    }
    function RenderableDOMElement() {
    }
    function IImageElement(o, s, h) {
      this.assetData = s.getAssetData(o.refId), this.assetData && this.assetData.sid && (this.assetData = s.slotManager.getProp(this.assetData)), this.initElement(o, s, h), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h };
    }
    function ProcessedElement(o, s) {
      this.elem = o, this.pos = s;
    }
    function IShapeElement() {
    }
    SVGEffects.prototype.renderFrame = function(o) {
      var s, h = this.filters.length;
      for (s = 0; s < h; s += 1) this.filters[s].renderFrame(o);
    }, SVGEffects.prototype.getEffects = function(o) {
      var s, h = this.filters.length, g = [];
      for (s = 0; s < h; s += 1) this.filters[s].type === o && g.push(this.filters[s]);
      return g;
    }, SVGBaseElement.prototype = { initRendererElement: function() {
      this.layerElement = createNS("g");
    }, createContainerElements: function() {
      this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
      var o = null;
      if (this.data.td) {
        this.matteMasks = {};
        var s = createNS("g");
        s.setAttribute("id", this.layerId), s.appendChild(this.layerElement), o = s, this.globalData.defs.appendChild(s);
      } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), o = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
      if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
        var h = createNS("clipPath"), g = createNS("path");
        g.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
        var j = createElementID();
        if (h.setAttribute("id", j), h.appendChild(g), this.globalData.defs.appendChild(h), this.checkMasks()) {
          var tt = createNS("g");
          tt.setAttribute("clip-path", "url(" + getLocationHref() + "#" + j + ")"), tt.appendChild(this.layerElement), this.transformedElement = tt, o ? o.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
        } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + j + ")");
      }
      this.data.bm !== 0 && this.setBlendMode();
    }, renderElement: function() {
      this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
    }, destroyBaseElement: function() {
      this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
    }, getBaseElement: function() {
      return this.data.hd ? null : this.baseElement;
    }, createRenderableComponents: function() {
      this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms();
    }, getMatte: function(o) {
      if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[o]) {
        var s, h, g, j, tt = this.layerId + "_" + o;
        if (o === 1 || o === 3) {
          var rt = createNS("mask");
          rt.setAttribute("id", tt), rt.setAttribute("mask-type", o === 3 ? "luminance" : "alpha"), (g = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), rt.appendChild(g), this.globalData.defs.appendChild(rt), !featureSupport.maskType && o === 1 && (rt.setAttribute("mask-type", "luminance"), s = createElementID(), h = filtersFactory.createFilter(s), this.globalData.defs.appendChild(h), h.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (j = createNS("g")).appendChild(g), rt.appendChild(j), j.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")"));
        } else if (o === 2) {
          var at = createNS("mask");
          at.setAttribute("id", tt), at.setAttribute("mask-type", "alpha");
          var it = createNS("g");
          at.appendChild(it), s = createElementID(), h = filtersFactory.createFilter(s);
          var st = createNS("feComponentTransfer");
          st.setAttribute("in", "SourceGraphic"), h.appendChild(st);
          var lt = createNS("feFuncA");
          lt.setAttribute("type", "table"), lt.setAttribute("tableValues", "1.0 0.0"), st.appendChild(lt), this.globalData.defs.appendChild(h);
          var ot = createNS("rect");
          ot.setAttribute("width", this.comp.data.w), ot.setAttribute("height", this.comp.data.h), ot.setAttribute("x", "0"), ot.setAttribute("y", "0"), ot.setAttribute("fill", "#ffffff"), ot.setAttribute("opacity", "0"), it.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")"), it.appendChild(ot), (g = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), it.appendChild(g), featureSupport.maskType || (at.setAttribute("mask-type", "luminance"), h.appendChild(filtersFactory.createAlphaToLuminanceFilter()), j = createNS("g"), it.appendChild(ot), j.appendChild(this.layerElement), it.appendChild(j)), this.globalData.defs.appendChild(at);
        }
        this.matteMasks[o] = tt;
      }
      return this.matteMasks[o];
    }, setMatte: function(o) {
      this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + o + ")");
    } }, HierarchyElement.prototype = { initHierarchy: function() {
      this.hierarchy = [], this._isParent = !1, this.checkParenting();
    }, setHierarchy: function(o) {
      this.hierarchy = o;
    }, setAsParent: function() {
      this._isParent = !0;
    }, checkParenting: function() {
      this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
    } }, extendPrototype([RenderableElement, createProxyFunction({ initElement: function(o, s, h) {
      this.initFrame(), this.initBaseData(o, s, h), this.initTransform(o, s, h), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
    }, hide: function() {
      this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0);
    }, show: function() {
      this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0);
    }, renderFrame: function() {
      this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
    }, renderInnerContent: function() {
    }, prepareFrame: function(o) {
      this._mdf = !1, this.prepareRenderableFrame(o), this.prepareProperties(o, this.isInRange), this.checkTransparency();
    }, destroy: function() {
      this.innerElem = null, this.destroyBaseElement();
    } })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
      var o = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), this.layerElement.appendChild(this.innerElem);
    }, IImageElement.prototype.sourceRectAtTime = function() {
      return this.sourceRect;
    }, IShapeElement.prototype = { addShapeToModifiers: function(o) {
      var s, h = this.shapeModifiers.length;
      for (s = 0; s < h; s += 1) this.shapeModifiers[s].addShape(o);
    }, isShapeInAnimatedModifiers: function(o) {
      for (var s = this.shapeModifiers.length; 0 < s; ) if (this.shapeModifiers[0].isAnimatedWithShape(o)) return !0;
      return !1;
    }, renderModifiers: function() {
      if (this.shapeModifiers.length) {
        var o, s = this.shapes.length;
        for (o = 0; o < s; o += 1) this.shapes[o].sh.reset();
        for (o = (s = this.shapeModifiers.length) - 1; o >= 0 && !this.shapeModifiers[o].processShapes(this._isFirstFrame); o -= 1) ;
      }
    }, searchProcessedElement: function(o) {
      for (var s = this.processedElements, h = 0, g = s.length; h < g; ) {
        if (s[h].elem === o) return s[h].pos;
        h += 1;
      }
      return 0;
    }, addProcessedElement: function(o, s) {
      for (var h = this.processedElements, g = h.length; g; ) if (h[g -= 1].elem === o) return void (h[g].pos = s);
      h.push(new ProcessedElement(o, s));
    }, prepareFrame: function(o) {
      this.prepareRenderableFrame(o), this.prepareProperties(o, this.isInRange);
    } };
    var lineCapEnum = { 1: "butt", 2: "round", 3: "square" }, lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" };
    function SVGShapeData(o, s, h) {
      this.caches = [], this.styles = [], this.transformers = o, this.lStr = "", this.sh = h, this.lvl = s, this._isAnimated = !!h.k;
      for (var g = 0, j = o.length; g < j; ) {
        if (o[g].mProps.dynamicProperties.length) {
          this._isAnimated = !0;
          break;
        }
        g += 1;
      }
    }
    function SVGStyleData(o, s) {
      this.data = o, this.type = o.ty, this.d = "", this.lvl = s, this._mdf = !1, this.closed = o.hd === !0, this.pElem = createNS("path"), this.msElem = null;
    }
    function DashProperty(o, s, h, g) {
      this.elem = o, this.frameId = -1, this.dataProps = createSizedArray(s.length), this.renderer = h, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", s.length ? s.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(g);
      var j, tt, rt = s.length || 0;
      for (j = 0; j < rt; j += 1) tt = PropertyFactory.getProp(o, s[j].v, 0, 0, this), this.k = tt.k || this.k, this.dataProps[j] = { n: s[j].n, p: tt };
      this.k || this.getValue(!0), this._isAnimated = this.k;
    }
    function SVGStrokeStyleData(o, s, h) {
      this.initDynamicPropertyContainer(o), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(o, s.o, 0, 0.01, this), this.w = PropertyFactory.getProp(o, s.w, 0, null, this), this.d = new DashProperty(o, s.d || {}, "svg", this), this.c = PropertyFactory.getProp(o, s.c, 1, 255, this), this.style = h, this._isAnimated = !!this._isAnimated;
    }
    function SVGFillStyleData(o, s, h) {
      this.initDynamicPropertyContainer(o), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(o, s.o, 0, 0.01, this), this.c = PropertyFactory.getProp(o, s.c, 1, 255, this), this.style = h;
    }
    function SVGNoStyleData(o, s, h) {
      this.initDynamicPropertyContainer(o), this.getValue = this.iterateDynamicProperties, this.style = h;
    }
    function GradientProperty(o, s, h) {
      this.data = s, this.c = createTypedArray("uint8c", 4 * s.p);
      var g = s.k.k[0].s ? s.k.k[0].s.length - 4 * s.p : s.k.k.length - 4 * s.p;
      this.o = createTypedArray("float32", g), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = g, this.initDynamicPropertyContainer(h), this.prop = PropertyFactory.getProp(o, s.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
    }
    function SVGGradientFillStyleData(o, s, h) {
      this.initDynamicPropertyContainer(o), this.getValue = this.iterateDynamicProperties, this.initGradientData(o, s, h);
    }
    function SVGGradientStrokeStyleData(o, s, h) {
      this.initDynamicPropertyContainer(o), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(o, s.w, 0, null, this), this.d = new DashProperty(o, s.d || {}, "svg", this), this.initGradientData(o, s, h), this._isAnimated = !!this._isAnimated;
    }
    function ShapeGroupData() {
      this.it = [], this.prevViewData = [], this.gr = createNS("g");
    }
    function SVGTransformData(o, s, h) {
      this.transform = { mProps: o, op: s, container: h }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    SVGShapeData.prototype.setAsAnimated = function() {
      this._isAnimated = !0;
    }, SVGStyleData.prototype.reset = function() {
      this.d = "", this._mdf = !1;
    }, DashProperty.prototype.getValue = function(o) {
      if ((this.elem.globalData.frameId !== this.frameId || o) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || o, this._mdf)) {
        var s = 0, h = this.dataProps.length;
        for (this.renderer === "svg" && (this.dashStr = ""), s = 0; s < h; s += 1) this.dataProps[s].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[s].p.v : this.dashArray[s] = this.dataProps[s].p.v : this.dashoffset[0] = this.dataProps[s].p.v;
      }
    }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(o, s) {
      for (var h = 0, g = this.o.length / 2; h < g; ) {
        if (Math.abs(o[4 * h] - o[4 * s + 2 * h]) > 0.01) return !1;
        h += 1;
      }
      return !0;
    }, GradientProperty.prototype.checkCollapsable = function() {
      if (this.o.length / 2 != this.c.length / 4) return !1;
      if (this.data.k.k[0].s) for (var o = 0, s = this.data.k.k.length; o < s; ) {
        if (!this.comparePoints(this.data.k.k[o].s, this.data.p)) return !1;
        o += 1;
      }
      else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
      return !0;
    }, GradientProperty.prototype.getValue = function(o) {
      if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || o) {
        var s, h, g, j = 4 * this.data.p;
        for (s = 0; s < j; s += 1) h = s % 4 == 0 ? 100 : 255, g = Math.round(this.prop.v[s] * h), this.c[s] !== g && (this.c[s] = g, this._cmdf = !o);
        if (this.o.length) for (j = this.prop.v.length, s = 4 * this.data.p; s < j; s += 1) h = s % 2 == 0 ? 100 : 1, g = s % 2 == 0 ? Math.round(100 * this.prop.v[s]) : this.prop.v[s], this.o[s - 4 * this.data.p] !== g && (this.o[s - 4 * this.data.p] = g, this._omdf = !o);
        this._mdf = !o;
      }
    }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(o, s, h) {
      this.o = PropertyFactory.getProp(o, s.o, 0, 0.01, this), this.s = PropertyFactory.getProp(o, s.s, 1, null, this), this.e = PropertyFactory.getProp(o, s.e, 1, null, this), this.h = PropertyFactory.getProp(o, s.h || { k: 0 }, 0, 0.01, this), this.a = PropertyFactory.getProp(o, s.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(o, s.g, this), this.style = h, this.stops = [], this.setGradientData(h.pElem, s), this.setGradientOpacity(s, h), this._isAnimated = !!this._isAnimated;
    }, SVGGradientFillStyleData.prototype.setGradientData = function(o, s) {
      var h = createElementID(), g = createNS(s.t === 1 ? "linearGradient" : "radialGradient");
      g.setAttribute("id", h), g.setAttribute("spreadMethod", "pad"), g.setAttribute("gradientUnits", "userSpaceOnUse");
      var j, tt, rt, at = [];
      for (rt = 4 * s.g.p, tt = 0; tt < rt; tt += 4) j = createNS("stop"), g.appendChild(j), at.push(j);
      o.setAttribute(s.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + h + ")"), this.gf = g, this.cst = at;
    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(o, s) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var h, g, j, tt = createNS("mask"), rt = createNS("path");
        tt.appendChild(rt);
        var at = createElementID(), it = createElementID();
        tt.setAttribute("id", it);
        var st = createNS(o.t === 1 ? "linearGradient" : "radialGradient");
        st.setAttribute("id", at), st.setAttribute("spreadMethod", "pad"), st.setAttribute("gradientUnits", "userSpaceOnUse"), j = o.g.k.k[0].s ? o.g.k.k[0].s.length : o.g.k.k.length;
        var lt = this.stops;
        for (g = 4 * o.g.p; g < j; g += 2) (h = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), st.appendChild(h), lt.push(h);
        rt.setAttribute(o.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + at + ")"), o.ty === "gs" && (rt.setAttribute("stroke-linecap", lineCapEnum[o.lc || 2]), rt.setAttribute("stroke-linejoin", lineJoinEnum[o.lj || 2]), o.lj === 1 && rt.setAttribute("stroke-miterlimit", o.ml)), this.of = st, this.ms = tt, this.ost = lt, this.maskId = it, s.msElem = rt;
      }
    }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
    var buildShapeString = function(o, s, h, g) {
      if (s === 0) return "";
      var j, tt = o.o, rt = o.i, at = o.v, it = " M" + g.applyToPointStringified(at[0][0], at[0][1]);
      for (j = 1; j < s; j += 1) it += " C" + g.applyToPointStringified(tt[j - 1][0], tt[j - 1][1]) + " " + g.applyToPointStringified(rt[j][0], rt[j][1]) + " " + g.applyToPointStringified(at[j][0], at[j][1]);
      return h && s && (it += " C" + g.applyToPointStringified(tt[j - 1][0], tt[j - 1][1]) + " " + g.applyToPointStringified(rt[0][0], rt[0][1]) + " " + g.applyToPointStringified(at[0][0], at[0][1]), it += "z"), it;
    }, SVGElementsRenderer = function() {
      var o = new Matrix(), s = new Matrix(), h = { createRenderFunction: function(lt) {
        switch (lt.ty) {
          case "fl":
            return rt;
          case "gf":
            return it;
          case "gs":
            return at;
          case "st":
            return st;
          case "sh":
          case "el":
          case "rc":
          case "sr":
            return tt;
          case "tr":
            return g;
          case "no":
            return j;
          default:
            return null;
        }
      } };
      function g(lt, ot, ft) {
        (ft || ot.transform.op._mdf) && ot.transform.container.setAttribute("opacity", ot.transform.op.v), (ft || ot.transform.mProps._mdf) && ot.transform.container.setAttribute("transform", ot.transform.mProps.v.to2dCSS());
      }
      function j() {
      }
      function tt(lt, ot, ft) {
        var ht, pt, dt, ct, mt, yt, vt, _t, Pt, bt, kt = ot.styles.length, wt = ot.lvl;
        for (yt = 0; yt < kt; yt += 1) {
          if (ct = ot.sh._mdf || ft, ot.styles[yt].lvl < wt) {
            for (_t = s.reset(), Pt = wt - ot.styles[yt].lvl, bt = ot.transformers.length - 1; !ct && Pt > 0; ) ct = ot.transformers[bt].mProps._mdf || ct, Pt -= 1, bt -= 1;
            if (ct) for (Pt = wt - ot.styles[yt].lvl, bt = ot.transformers.length - 1; Pt > 0; ) _t.multiply(ot.transformers[bt].mProps.v), Pt -= 1, bt -= 1;
          } else _t = o;
          if (pt = (vt = ot.sh.paths)._length, ct) {
            for (dt = "", ht = 0; ht < pt; ht += 1) (mt = vt.shapes[ht]) && mt._length && (dt += buildShapeString(mt, mt._length, mt.c, _t));
            ot.caches[yt] = dt;
          } else dt = ot.caches[yt];
          ot.styles[yt].d += lt.hd === !0 ? "" : dt, ot.styles[yt]._mdf = ct || ot.styles[yt]._mdf;
        }
      }
      function rt(lt, ot, ft) {
        var ht = ot.style;
        (ot.c._mdf || ft) && ht.pElem.setAttribute("fill", "rgb(" + bmFloor(ot.c.v[0]) + "," + bmFloor(ot.c.v[1]) + "," + bmFloor(ot.c.v[2]) + ")"), (ot.o._mdf || ft) && ht.pElem.setAttribute("fill-opacity", ot.o.v);
      }
      function at(lt, ot, ft) {
        it(lt, ot, ft), st(0, ot, ft);
      }
      function it(lt, ot, ft) {
        var ht, pt, dt, ct, mt, yt = ot.gf, vt = ot.g._hasOpacity, _t = ot.s.v, Pt = ot.e.v;
        if (ot.o._mdf || ft) {
          var bt = lt.ty === "gf" ? "fill-opacity" : "stroke-opacity";
          ot.style.pElem.setAttribute(bt, ot.o.v);
        }
        if (ot.s._mdf || ft) {
          var kt = lt.t === 1 ? "x1" : "cx", wt = kt === "x1" ? "y1" : "cy";
          yt.setAttribute(kt, _t[0]), yt.setAttribute(wt, _t[1]), vt && !ot.g._collapsable && (ot.of.setAttribute(kt, _t[0]), ot.of.setAttribute(wt, _t[1]));
        }
        if (ot.g._cmdf || ft) {
          ht = ot.cst;
          var xt = ot.g.c;
          for (dt = ht.length, pt = 0; pt < dt; pt += 1) (ct = ht[pt]).setAttribute("offset", xt[4 * pt] + "%"), ct.setAttribute("stop-color", "rgb(" + xt[4 * pt + 1] + "," + xt[4 * pt + 2] + "," + xt[4 * pt + 3] + ")");
        }
        if (vt && (ot.g._omdf || ft)) {
          var Tt = ot.g.o;
          for (dt = (ht = ot.g._collapsable ? ot.cst : ot.ost).length, pt = 0; pt < dt; pt += 1) ct = ht[pt], ot.g._collapsable || ct.setAttribute("offset", Tt[2 * pt] + "%"), ct.setAttribute("stop-opacity", Tt[2 * pt + 1]);
        }
        if (lt.t === 1) (ot.e._mdf || ft) && (yt.setAttribute("x2", Pt[0]), yt.setAttribute("y2", Pt[1]), vt && !ot.g._collapsable && (ot.of.setAttribute("x2", Pt[0]), ot.of.setAttribute("y2", Pt[1])));
        else if ((ot.s._mdf || ot.e._mdf || ft) && (mt = Math.sqrt(Math.pow(_t[0] - Pt[0], 2) + Math.pow(_t[1] - Pt[1], 2)), yt.setAttribute("r", mt), vt && !ot.g._collapsable && ot.of.setAttribute("r", mt)), ot.s._mdf || ot.e._mdf || ot.h._mdf || ot.a._mdf || ft) {
          mt || (mt = Math.sqrt(Math.pow(_t[0] - Pt[0], 2) + Math.pow(_t[1] - Pt[1], 2)));
          var It = Math.atan2(Pt[1] - _t[1], Pt[0] - _t[0]), qt = ot.h.v;
          qt >= 1 ? qt = 0.99 : qt <= -1 && (qt = -0.99);
          var Wt = mt * qt, Nt = Math.cos(It + ot.a.v) * Wt + _t[0], Yt = Math.sin(It + ot.a.v) * Wt + _t[1];
          yt.setAttribute("fx", Nt), yt.setAttribute("fy", Yt), vt && !ot.g._collapsable && (ot.of.setAttribute("fx", Nt), ot.of.setAttribute("fy", Yt));
        }
      }
      function st(lt, ot, ft) {
        var ht = ot.style, pt = ot.d;
        pt && (pt._mdf || ft) && pt.dashStr && (ht.pElem.setAttribute("stroke-dasharray", pt.dashStr), ht.pElem.setAttribute("stroke-dashoffset", pt.dashoffset[0])), ot.c && (ot.c._mdf || ft) && ht.pElem.setAttribute("stroke", "rgb(" + bmFloor(ot.c.v[0]) + "," + bmFloor(ot.c.v[1]) + "," + bmFloor(ot.c.v[2]) + ")"), (ot.o._mdf || ft) && ht.pElem.setAttribute("stroke-opacity", ot.o.v), (ot.w._mdf || ft) && (ht.pElem.setAttribute("stroke-width", ot.w.v), ht.msElem && ht.msElem.setAttribute("stroke-width", ot.w.v));
      }
      return h;
    }();
    function SVGShapeElement(o, s, h) {
      this.shapes = [], this.shapesData = o.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(o, s, h), this.prevViewData = [];
    }
    function LetterProps(o, s, h, g, j, tt) {
      this.o = o, this.sw = s, this.sc = h, this.fc = g, this.m = j, this.p = tt, this._mdf = { o: !0, sw: !!s, sc: !!h, fc: !!g, m: !0, p: !0 };
    }
    function TextProperty(o, s) {
      this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, s.d && s.d.sid && (s.d = o.globalData.slotManager.getProp(s.d)), this.data = s, this.elem = o, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: !1, strokeColorAnim: !1, strokeWidthAnim: !1, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: !1 }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {
    }, SVGShapeElement.prototype.identityMatrix = new Matrix(), SVGShapeElement.prototype.buildExpressionInterface = function() {
    }, SVGShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
      var o, s, h, g, j = this.shapes.length, tt = this.stylesList.length, rt = [], at = !1;
      for (h = 0; h < tt; h += 1) {
        for (g = this.stylesList[h], at = !1, rt.length = 0, o = 0; o < j; o += 1) (s = this.shapes[o]).styles.indexOf(g) !== -1 && (rt.push(s), at = s._isAnimated || at);
        rt.length > 1 && at && this.setShapesAsAnimated(rt);
      }
    }, SVGShapeElement.prototype.setShapesAsAnimated = function(o) {
      var s, h = o.length;
      for (s = 0; s < h; s += 1) o[s].setAsAnimated();
    }, SVGShapeElement.prototype.createStyleElement = function(o, s) {
      var h, g = new SVGStyleData(o, s), j = g.pElem;
      return o.ty === "st" ? h = new SVGStrokeStyleData(this, o, g) : o.ty === "fl" ? h = new SVGFillStyleData(this, o, g) : o.ty === "gf" || o.ty === "gs" ? (h = new (o.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, o, g), this.globalData.defs.appendChild(h.gf), h.maskId && (this.globalData.defs.appendChild(h.ms), this.globalData.defs.appendChild(h.of), j.setAttribute("mask", "url(" + getLocationHref() + "#" + h.maskId + ")"))) : o.ty === "no" && (h = new SVGNoStyleData(this, o, g)), (o.ty === "st" || o.ty === "gs") && (j.setAttribute("stroke-linecap", lineCapEnum[o.lc || 2]), j.setAttribute("stroke-linejoin", lineJoinEnum[o.lj || 2]), j.setAttribute("fill-opacity", "0"), o.lj === 1 && j.setAttribute("stroke-miterlimit", o.ml)), o.r === 2 && j.setAttribute("fill-rule", "evenodd"), o.ln && j.setAttribute("id", o.ln), o.cl && j.setAttribute("class", o.cl), o.bm && (j.style["mix-blend-mode"] = getBlendMode(o.bm)), this.stylesList.push(g), this.addToAnimatedContents(o, h), h;
    }, SVGShapeElement.prototype.createGroupElement = function(o) {
      var s = new ShapeGroupData();
      return o.ln && s.gr.setAttribute("id", o.ln), o.cl && s.gr.setAttribute("class", o.cl), o.bm && (s.gr.style["mix-blend-mode"] = getBlendMode(o.bm)), s;
    }, SVGShapeElement.prototype.createTransformElement = function(o, s) {
      var h = TransformPropertyFactory.getTransformProperty(this, o, this), g = new SVGTransformData(h, h.o, s);
      return this.addToAnimatedContents(o, g), g;
    }, SVGShapeElement.prototype.createShapeElement = function(o, s, h) {
      var g = 4;
      o.ty === "rc" ? g = 5 : o.ty === "el" ? g = 6 : o.ty === "sr" && (g = 7);
      var j = new SVGShapeData(s, h, ShapePropertyFactory.getShapeProp(this, o, g, this));
      return this.shapes.push(j), this.addShapeToModifiers(j), this.addToAnimatedContents(o, j), j;
    }, SVGShapeElement.prototype.addToAnimatedContents = function(o, s) {
      for (var h = 0, g = this.animatedContents.length; h < g; ) {
        if (this.animatedContents[h].element === s) return;
        h += 1;
      }
      this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(o), element: s, data: o });
    }, SVGShapeElement.prototype.setElementStyles = function(o) {
      var s, h = o.styles, g = this.stylesList.length;
      for (s = 0; s < g; s += 1) h.indexOf(this.stylesList[s]) === -1 && !this.stylesList[s].closed && h.push(this.stylesList[s]);
    }, SVGShapeElement.prototype.reloadShapes = function() {
      this._isFirstFrame = !0;
      var o, s = this.itemsData.length;
      for (o = 0; o < s; o += 1) this.prevViewData[o] = this.itemsData[o];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), s = this.dynamicProperties.length, o = 0; o < s; o += 1) this.dynamicProperties[o].getValue();
      this.renderModifiers();
    }, SVGShapeElement.prototype.searchShapes = function(o, s, h, g, j, tt, rt) {
      var at, it, st, lt, ot, ft, ht = [].concat(tt), pt = o.length - 1, dt = [], ct = [];
      for (at = pt; at >= 0; at -= 1) {
        if ((ft = this.searchProcessedElement(o[at])) ? s[at] = h[ft - 1] : o[at]._render = rt, o[at].ty === "fl" || o[at].ty === "st" || o[at].ty === "gf" || o[at].ty === "gs" || o[at].ty === "no") ft ? s[at].style.closed = o[at].hd : s[at] = this.createStyleElement(o[at], j), o[at]._render && s[at].style.pElem.parentNode !== g && g.appendChild(s[at].style.pElem), dt.push(s[at].style);
        else if (o[at].ty === "gr") {
          if (ft) for (st = s[at].it.length, it = 0; it < st; it += 1) s[at].prevViewData[it] = s[at].it[it];
          else s[at] = this.createGroupElement(o[at]);
          this.searchShapes(o[at].it, s[at].it, s[at].prevViewData, s[at].gr, j + 1, ht, rt), o[at]._render && s[at].gr.parentNode !== g && g.appendChild(s[at].gr);
        } else o[at].ty === "tr" ? (ft || (s[at] = this.createTransformElement(o[at], g)), lt = s[at].transform, ht.push(lt)) : o[at].ty === "sh" || o[at].ty === "rc" || o[at].ty === "el" || o[at].ty === "sr" ? (ft || (s[at] = this.createShapeElement(o[at], ht, j)), this.setElementStyles(s[at])) : o[at].ty === "tm" || o[at].ty === "rd" || o[at].ty === "ms" || o[at].ty === "pb" || o[at].ty === "zz" || o[at].ty === "op" ? (ft ? (ot = s[at]).closed = !1 : ((ot = ShapeModifiers.getModifier(o[at].ty)).init(this, o[at]), s[at] = ot, this.shapeModifiers.push(ot)), ct.push(ot)) : o[at].ty === "rp" && (ft ? (ot = s[at]).closed = !0 : (ot = ShapeModifiers.getModifier(o[at].ty), s[at] = ot, ot.init(this, o, at, s), this.shapeModifiers.push(ot), rt = !1), ct.push(ot));
        this.addProcessedElement(o[at], at + 1);
      }
      for (pt = dt.length, at = 0; at < pt; at += 1) dt[at].closed = !0;
      for (pt = ct.length, at = 0; at < pt; at += 1) ct[at].closed = !0;
    }, SVGShapeElement.prototype.renderInnerContent = function() {
      this.renderModifiers();
      var o, s = this.stylesList.length;
      for (o = 0; o < s; o += 1) this.stylesList[o].reset();
      for (this.renderShape(), o = 0; o < s; o += 1) (this.stylesList[o]._mdf || this._isFirstFrame) && (this.stylesList[o].msElem && (this.stylesList[o].msElem.setAttribute("d", this.stylesList[o].d), this.stylesList[o].d = "M0 0" + this.stylesList[o].d), this.stylesList[o].pElem.setAttribute("d", this.stylesList[o].d || "M0 0"));
    }, SVGShapeElement.prototype.renderShape = function() {
      var o, s, h = this.animatedContents.length;
      for (o = 0; o < h; o += 1) s = this.animatedContents[o], (this._isFirstFrame || s.element._isAnimated) && s.data !== !0 && s.fn(s.data, s.element, this._isFirstFrame);
    }, SVGShapeElement.prototype.destroy = function() {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
    }, LetterProps.prototype.update = function(o, s, h, g, j, tt) {
      this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
      var rt = !1;
      return this.o !== o && (this.o = o, this._mdf.o = !0, rt = !0), this.sw !== s && (this.sw = s, this._mdf.sw = !0, rt = !0), this.sc !== h && (this.sc = h, this._mdf.sc = !0, rt = !0), this.fc !== g && (this.fc = g, this._mdf.fc = !0, rt = !0), this.m !== j && (this.m = j, this._mdf.m = !0, rt = !0), tt.length && (this.p[0] !== tt[0] || this.p[1] !== tt[1] || this.p[4] !== tt[4] || this.p[5] !== tt[5] || this.p[12] !== tt[12] || this.p[13] !== tt[13]) && (this.p = tt, this._mdf.p = !0, rt = !0), rt;
    }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(o, s) {
      for (var h in s) Object.prototype.hasOwnProperty.call(s, h) && (o[h] = s[h]);
      return o;
    }, TextProperty.prototype.setCurrentData = function(o) {
      o.__complete || this.completeTextData(o), this.currentData = o, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
    }, TextProperty.prototype.searchProperty = function() {
      return this.searchKeyframes();
    }, TextProperty.prototype.searchKeyframes = function() {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
    }, TextProperty.prototype.addEffect = function(o) {
      this.effectsSequence.push(o), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.getValue = function(o) {
      if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || o) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var s = this.currentData, h = this.keysIndex;
        if (this.lock) return void this.setCurrentData(this.currentData);
        this.lock = !0, this._mdf = !1;
        var g, j = this.effectsSequence.length, tt = o || this.data.d.k[this.keysIndex].s;
        for (g = 0; g < j; g += 1) tt = h !== this.keysIndex ? this.effectsSequence[g](tt, tt.t) : this.effectsSequence[g](this.currentData, tt.t);
        s !== tt && this.setCurrentData(tt), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
      }
    }, TextProperty.prototype.getKeyframeValue = function() {
      for (var o = this.data.d.k, s = this.elem.comp.renderedFrame, h = 0, g = o.length; h <= g - 1 && !(h === g - 1 || o[h + 1].t > s); ) h += 1;
      return this.keysIndex !== h && (this.keysIndex = h), this.data.d.k[this.keysIndex].s;
    }, TextProperty.prototype.buildFinalText = function(o) {
      for (var s, h, g = [], j = 0, tt = o.length, rt = !1, at = !1, it = ""; j < tt; ) rt = at, at = !1, s = o.charCodeAt(j), it = o.charAt(j), FontManager.isCombinedCharacter(s) ? rt = !0 : s >= 55296 && s <= 56319 ? FontManager.isRegionalFlag(o, j) ? it = o.substr(j, 14) : (h = o.charCodeAt(j + 1)) >= 56320 && h <= 57343 && (FontManager.isModifier(s, h) ? (it = o.substr(j, 2), rt = !0) : it = FontManager.isFlagEmoji(o.substr(j, 4)) ? o.substr(j, 4) : o.substr(j, 2)) : s > 56319 ? (h = o.charCodeAt(j + 1), FontManager.isVariationSelector(s) && (rt = !0)) : FontManager.isZeroWidthJoiner(s) && (rt = !0, at = !0), rt ? (g[g.length - 1] += it, rt = !1) : g.push(it), j += it.length;
      return g;
    }, TextProperty.prototype.completeTextData = function(o) {
      o.__complete = !0;
      var s, h, g, j, tt, rt, at, it = this.elem.globalData.fontManager, st = this.data, lt = [], ot = 0, ft = st.m.g, ht = 0, pt = 0, dt = 0, ct = [], mt = 0, yt = 0, vt = it.getFontByName(o.f), _t = 0, Pt = getFontProperties(vt);
      o.fWeight = Pt.weight, o.fStyle = Pt.style, o.finalSize = o.s, o.finalText = this.buildFinalText(o.t), h = o.finalText.length, o.finalLineHeight = o.lh;
      var bt, kt = o.tr / 1e3 * o.finalSize;
      if (o.sz) for (var wt, xt, Tt = !0, It = o.sz[0], qt = o.sz[1]; Tt; ) {
        wt = 0, mt = 0, h = (xt = this.buildFinalText(o.t)).length, kt = o.tr / 1e3 * o.finalSize;
        var Wt = -1;
        for (s = 0; s < h; s += 1) bt = xt[s].charCodeAt(0), g = !1, xt[s] === " " ? Wt = s : (bt === 13 || bt === 3) && (mt = 0, g = !0, wt += o.finalLineHeight || 1.2 * o.finalSize), it.chars ? (at = it.getCharData(xt[s], vt.fStyle, vt.fFamily), _t = g ? 0 : at.w * o.finalSize / 100) : _t = it.measureText(xt[s], o.f, o.finalSize), mt + _t > It && xt[s] !== " " ? (Wt === -1 ? h += 1 : s = Wt, wt += o.finalLineHeight || 1.2 * o.finalSize, xt.splice(s, Wt === s ? 1 : 0, "\r"), Wt = -1, mt = 0) : (mt += _t, mt += kt);
        wt += vt.ascent * o.finalSize / 100, this.canResize && o.finalSize > this.minimumFontSize && qt < wt ? (o.finalSize -= 1, o.finalLineHeight = o.finalSize * o.lh / o.s) : (o.finalText = xt, h = o.finalText.length, Tt = !1);
      }
      mt = -kt, _t = 0;
      var Nt, Yt = 0;
      for (s = 0; s < h; s += 1) if (g = !1, (bt = (Nt = o.finalText[s]).charCodeAt(0)) === 13 || bt === 3 ? (Yt = 0, ct.push(mt), yt = mt > yt ? mt : yt, mt = -2 * kt, j = "", g = !0, dt += 1) : j = Nt, it.chars ? (at = it.getCharData(Nt, vt.fStyle, it.getFontByName(o.f).fFamily), _t = g ? 0 : at.w * o.finalSize / 100) : _t = it.measureText(j, o.f, o.finalSize), Nt === " " ? Yt += _t + kt : (mt += _t + kt + Yt, Yt = 0), lt.push({ l: _t, an: _t, add: ht, n: g, anIndexes: [], val: j, line: dt, animatorJustifyOffset: 0 }), ft == 2) {
        if (ht += _t, j === "" || j === " " || s === h - 1) {
          for ((j === "" || j === " ") && (ht -= _t); pt <= s; ) lt[pt].an = ht, lt[pt].ind = ot, lt[pt].extra = _t, pt += 1;
          ot += 1, ht = 0;
        }
      } else if (ft == 3) {
        if (ht += _t, j === "" || s === h - 1) {
          for (j === "" && (ht -= _t); pt <= s; ) lt[pt].an = ht, lt[pt].ind = ot, lt[pt].extra = _t, pt += 1;
          ht = 0, ot += 1;
        }
      } else lt[ot].ind = ot, lt[ot].extra = 0, ot += 1;
      if (o.l = lt, yt = mt > yt ? mt : yt, ct.push(mt), o.sz) o.boxWidth = o.sz[0], o.justifyOffset = 0;
      else switch (o.boxWidth = yt, o.j) {
        case 1:
          o.justifyOffset = -o.boxWidth;
          break;
        case 2:
          o.justifyOffset = -o.boxWidth / 2;
          break;
        default:
          o.justifyOffset = 0;
      }
      o.lineWidths = ct;
      var sr, ur, Rt = st.a;
      rt = Rt.length;
      var Ft, At, Zt = [];
      for (tt = 0; tt < rt; tt += 1) {
        for ((sr = Rt[tt]).a.sc && (o.strokeColorAnim = !0), sr.a.sw && (o.strokeWidthAnim = !0), (sr.a.fc || sr.a.fh || sr.a.fs || sr.a.fb) && (o.fillColorAnim = !0), At = 0, Ft = sr.s.b, s = 0; s < h; s += 1) (ur = lt[s]).anIndexes[tt] = At, (Ft == 1 && ur.val !== "" || Ft == 2 && ur.val !== "" && ur.val !== " " || Ft == 3 && (ur.n || ur.val == " " || s == h - 1) || Ft == 4 && (ur.n || s == h - 1)) && (sr.s.rn === 1 && Zt.push(At), At += 1);
        st.a[tt].s.totalChars = At;
        var hr, Pr = -1;
        if (sr.s.rn === 1) for (s = 0; s < h; s += 1) Pr != (ur = lt[s]).anIndexes[tt] && (Pr = ur.anIndexes[tt], hr = Zt.splice(Math.floor(Math.random() * Zt.length), 1)[0]), ur.anIndexes[tt] = hr;
      }
      o.yOffset = o.finalLineHeight || 1.2 * o.finalSize, o.ls = o.ls || 0, o.ascent = vt.ascent * o.finalSize / 100;
    }, TextProperty.prototype.updateDocumentData = function(o, s) {
      s = s === void 0 ? this.keysIndex : s;
      var h = this.copyData({}, this.data.d.k[s].s);
      h = this.copyData(h, o), this.data.d.k[s].s = h, this.recalculate(s), this.setCurrentData(h), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.recalculate = function(o) {
      var s = this.data.d.k[o].s;
      s.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(s);
    }, TextProperty.prototype.canResizeFont = function(o) {
      this.canResize = o, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.setMinimumFontSize = function(o) {
      this.minimumFontSize = Math.floor(o) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    };
    var TextSelectorProp = function() {
      var o = Math.max, s = Math.min, h = Math.floor;
      function g(j, tt) {
        this._currentTextLength = -1, this.k = !1, this.data = tt, this.elem = j, this.comp = j.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(j), this.s = PropertyFactory.getProp(j, tt.s || { k: 0 }, 0, 0, this), this.e = "e" in tt ? PropertyFactory.getProp(j, tt.e, 0, 0, this) : { v: 100 }, this.o = PropertyFactory.getProp(j, tt.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(j, tt.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(j, tt.ne || { k: 0 }, 0, 0, this), this.sm = PropertyFactory.getProp(j, tt.sm || { k: 100 }, 0, 0, this), this.a = PropertyFactory.getProp(j, tt.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
      }
      return g.prototype = { getMult: function(j) {
        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
        var tt = 0, rt = 0, at = 1, it = 1;
        this.ne.v > 0 ? tt = this.ne.v / 100 : rt = -this.ne.v / 100, this.xe.v > 0 ? at = 1 - this.xe.v / 100 : it = 1 + this.xe.v / 100;
        var st = BezierFactory.getBezierEasing(tt, rt, at, it).get, lt = 0, ot = this.finalS, ft = this.finalE, ht = this.data.sh;
        if (ht === 2) lt = st(lt = ft === ot ? j >= ft ? 1 : 0 : o(0, s(0.5 / (ft - ot) + (j - ot) / (ft - ot), 1)));
        else if (ht === 3) lt = st(lt = ft === ot ? j >= ft ? 0 : 1 : 1 - o(0, s(0.5 / (ft - ot) + (j - ot) / (ft - ot), 1)));
        else if (ht === 4) ft === ot ? lt = 0 : (lt = o(0, s(0.5 / (ft - ot) + (j - ot) / (ft - ot), 1))) < 0.5 ? lt *= 2 : lt = 1 - 2 * (lt - 0.5), lt = st(lt);
        else if (ht === 5) {
          if (ft === ot) lt = 0;
          else {
            var pt = ft - ot, dt = -pt / 2 + (j = s(o(0, j + 0.5 - ot), ft - ot)), ct = pt / 2;
            lt = Math.sqrt(1 - dt * dt / (ct * ct));
          }
          lt = st(lt);
        } else ht === 6 ? (ft === ot ? lt = 0 : (j = s(o(0, j + 0.5 - ot), ft - ot), lt = (1 + Math.cos(Math.PI + 2 * Math.PI * j / (ft - ot))) / 2), lt = st(lt)) : (j >= h(ot) && (lt = o(0, s(j - ot < 0 ? s(ft, 1) - (ot - j) : ft - j, 1))), lt = st(lt));
        if (this.sm.v !== 100) {
          var mt = 0.01 * this.sm.v;
          mt === 0 && (mt = 1e-8);
          var yt = 0.5 - 0.5 * mt;
          lt < yt ? lt = 0 : (lt = (lt - yt) / mt) > 1 && (lt = 1);
        }
        return lt * this.a.v;
      }, getValue: function(j) {
        this.iterateDynamicProperties(), this._mdf = j || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, j && this.data.r === 2 && (this.e.v = this._currentTextLength);
        var tt = this.data.r === 2 ? 1 : 100 / this.data.totalChars, rt = this.o.v / tt, at = this.s.v / tt + rt, it = this.e.v / tt + rt;
        if (at > it) {
          var st = at;
          at = it, it = st;
        }
        this.finalS = at, this.finalE = it;
      } }, extendPrototype([DynamicPropertyContainer], g), { getTextSelectorProp: function(j, tt, rt) {
        return new g(j, tt);
      } };
    }();
    function TextAnimatorDataProperty(o, s, h) {
      var g = { propType: !1 }, j = PropertyFactory.getProp, tt = s.a;
      this.a = { r: tt.r ? j(o, tt.r, 0, degToRads, h) : g, rx: tt.rx ? j(o, tt.rx, 0, degToRads, h) : g, ry: tt.ry ? j(o, tt.ry, 0, degToRads, h) : g, sk: tt.sk ? j(o, tt.sk, 0, degToRads, h) : g, sa: tt.sa ? j(o, tt.sa, 0, degToRads, h) : g, s: tt.s ? j(o, tt.s, 1, 0.01, h) : g, a: tt.a ? j(o, tt.a, 1, 0, h) : g, o: tt.o ? j(o, tt.o, 0, 0.01, h) : g, p: tt.p ? j(o, tt.p, 1, 0, h) : g, sw: tt.sw ? j(o, tt.sw, 0, 0, h) : g, sc: tt.sc ? j(o, tt.sc, 1, 0, h) : g, fc: tt.fc ? j(o, tt.fc, 1, 0, h) : g, fh: tt.fh ? j(o, tt.fh, 0, 0, h) : g, fs: tt.fs ? j(o, tt.fs, 0, 0.01, h) : g, fb: tt.fb ? j(o, tt.fb, 0, 0.01, h) : g, t: tt.t ? j(o, tt.t, 0, 0, h) : g }, this.s = TextSelectorProp.getTextSelectorProp(o, s.s, h), this.s.t = s.s.t;
    }
    function TextAnimatorProperty(o, s, h) {
      this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = o, this._renderType = s, this._elem = h, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(h);
    }
    function ITextElement() {
    }
    TextAnimatorProperty.prototype.searchProperties = function() {
      var o, s, h = this._textData.a.length, g = PropertyFactory.getProp;
      for (o = 0; o < h; o += 1) s = this._textData.a[o], this._animatorsData[o] = new TextAnimatorDataProperty(this._elem, s, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = { a: g(this._elem, this._textData.p.a, 0, 0, this), f: g(this._elem, this._textData.p.f, 0, 0, this), l: g(this._elem, this._textData.p.l, 0, 0, this), r: g(this._elem, this._textData.p.r, 0, 0, this), p: g(this._elem, this._textData.p.p, 0, 0, this), m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = g(this._elem, this._textData.m.a, 1, 0, this);
    }, TextAnimatorProperty.prototype.getMeasures = function(o, s) {
      if (this.lettersChangedFlag = s, this._mdf || this._isFirstFrame || s || this._hasMaskedPath && this._pathData.m._mdf) {
        this._isFirstFrame = !1;
        var h, g, j, tt, rt, at, it, st, lt, ot, ft, ht, pt, dt, ct, mt, yt, vt, _t, Pt = this._moreOptions.alignment.v, bt = this._animatorsData, kt = this._textData, wt = this.mHelper, xt = this._renderType, Tt = this.renderedLetters.length, It = o.l;
        if (this._hasMaskedPath) {
          if (_t = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var qt, Wt = _t.v;
            for (this._pathData.r.v && (Wt = Wt.reverse()), rt = { tLength: 0, segments: [] }, tt = Wt._length - 1, mt = 0, j = 0; j < tt; j += 1) qt = bez.buildBezierData(Wt.v[j], Wt.v[j + 1], [Wt.o[j][0] - Wt.v[j][0], Wt.o[j][1] - Wt.v[j][1]], [Wt.i[j + 1][0] - Wt.v[j + 1][0], Wt.i[j + 1][1] - Wt.v[j + 1][1]]), rt.tLength += qt.segmentLength, rt.segments.push(qt), mt += qt.segmentLength;
            j = tt, _t.v.c && (qt = bez.buildBezierData(Wt.v[j], Wt.v[0], [Wt.o[j][0] - Wt.v[j][0], Wt.o[j][1] - Wt.v[j][1]], [Wt.i[0][0] - Wt.v[0][0], Wt.i[0][1] - Wt.v[0][1]]), rt.tLength += qt.segmentLength, rt.segments.push(qt), mt += qt.segmentLength), this._pathData.pi = rt;
          }
          if (rt = this._pathData.pi, at = this._pathData.f.v, ft = 0, ot = 1, st = 0, lt = !0, dt = rt.segments, at < 0 && _t.v.c) for (rt.tLength < Math.abs(at) && (at = -Math.abs(at) % rt.tLength), ot = (pt = dt[ft = dt.length - 1].points).length - 1; at < 0; ) at += pt[ot].partialLength, (ot -= 1) < 0 && (ot = (pt = dt[ft -= 1].points).length - 1);
          ht = (pt = dt[ft].points)[ot - 1], ct = (it = pt[ot]).partialLength;
        }
        tt = It.length, h = 0, g = 0;
        var Nt, Yt, sr, ur, Rt = 1.2 * o.finalSize * 0.714, Ft = !0;
        sr = bt.length;
        var At, Zt, hr, Pr, dr, Er, Sr, Kt, rr, nr, Dr, Wr, zr, Hr = -1, fr = at, ba = ft, Dn = ot, yn = -1, Xr = "", Rn = this.defaultPropsArray;
        if (o.j === 2 || o.j === 1) {
          var an = 0, hn = 0, Vn = o.j === 2 ? -0.5 : -1, xn = 0, zn = !0;
          for (j = 0; j < tt; j += 1) if (It[j].n) {
            for (an && (an += hn); xn < j; ) It[xn].animatorJustifyOffset = an, xn += 1;
            an = 0, zn = !0;
          } else {
            for (Yt = 0; Yt < sr; Yt += 1) (Nt = bt[Yt].a).t.propType && (zn && o.j === 2 && (hn += Nt.t.v * Vn), (At = bt[Yt].s.getMult(It[j].anIndexes[Yt], kt.a[Yt].s.totalChars)).length ? an += Nt.t.v * At[0] * Vn : an += Nt.t.v * At * Vn);
            zn = !1;
          }
          for (an && (an += hn); xn < j; ) It[xn].animatorJustifyOffset = an, xn += 1;
        }
        for (j = 0; j < tt; j += 1) {
          if (wt.reset(), dr = 1, It[j].n) h = 0, g += o.yOffset, g += Ft ? 1 : 0, at = fr, Ft = !1, this._hasMaskedPath && (ot = Dn, ht = (pt = dt[ft = ba].points)[ot - 1], ct = (it = pt[ot]).partialLength, st = 0), Xr = "", Wr = "", nr = "", zr = "", Rn = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (yn !== It[j].line) {
                switch (o.j) {
                  case 1:
                    at += mt - o.lineWidths[It[j].line];
                    break;
                  case 2:
                    at += (mt - o.lineWidths[It[j].line]) / 2;
                }
                yn = It[j].line;
              }
              Hr !== It[j].ind && (It[Hr] && (at += It[Hr].extra), at += It[j].an / 2, Hr = It[j].ind), at += Pt[0] * It[j].an * 5e-3;
              var Sn = 0;
              for (Yt = 0; Yt < sr; Yt += 1) (Nt = bt[Yt].a).p.propType && ((At = bt[Yt].s.getMult(It[j].anIndexes[Yt], kt.a[Yt].s.totalChars)).length ? Sn += Nt.p.v[0] * At[0] : Sn += Nt.p.v[0] * At), Nt.a.propType && ((At = bt[Yt].s.getMult(It[j].anIndexes[Yt], kt.a[Yt].s.totalChars)).length ? Sn += Nt.a.v[0] * At[0] : Sn += Nt.a.v[0] * At);
              for (lt = !0, this._pathData.a.v && (at = 0.5 * It[0].an + (mt - this._pathData.f.v - 0.5 * It[0].an - 0.5 * It[It.length - 1].an) * Hr / (tt - 1), at += this._pathData.f.v); lt; ) st + ct >= at + Sn || !pt ? (yt = (at + Sn - st) / it.partialLength, hr = ht.point[0] + (it.point[0] - ht.point[0]) * yt, Pr = ht.point[1] + (it.point[1] - ht.point[1]) * yt, wt.translate(-Pt[0] * It[j].an * 5e-3, -Pt[1] * Rt * 0.01), lt = !1) : pt && (st += it.partialLength, (ot += 1) >= pt.length && (ot = 0, dt[ft += 1] ? pt = dt[ft].points : _t.v.c ? (ot = 0, pt = dt[ft = 0].points) : (st -= it.partialLength, pt = null)), pt && (ht = it, ct = (it = pt[ot]).partialLength));
              Zt = It[j].an / 2 - It[j].add, wt.translate(-Zt, 0, 0);
            } else Zt = It[j].an / 2 - It[j].add, wt.translate(-Zt, 0, 0), wt.translate(-Pt[0] * It[j].an * 5e-3, -Pt[1] * Rt * 0.01, 0);
            for (Yt = 0; Yt < sr; Yt += 1) (Nt = bt[Yt].a).t.propType && (At = bt[Yt].s.getMult(It[j].anIndexes[Yt], kt.a[Yt].s.totalChars), (h !== 0 || o.j !== 0) && (this._hasMaskedPath ? At.length ? at += Nt.t.v * At[0] : at += Nt.t.v * At : At.length ? h += Nt.t.v * At[0] : h += Nt.t.v * At));
            for (o.strokeWidthAnim && (Sr = o.sw || 0), o.strokeColorAnim && (Er = o.sc ? [o.sc[0], o.sc[1], o.sc[2]] : [0, 0, 0]), o.fillColorAnim && o.fc && (Kt = [o.fc[0], o.fc[1], o.fc[2]]), Yt = 0; Yt < sr; Yt += 1) (Nt = bt[Yt].a).a.propType && ((At = bt[Yt].s.getMult(It[j].anIndexes[Yt], kt.a[Yt].s.totalChars)).length ? wt.translate(-Nt.a.v[0] * At[0], -Nt.a.v[1] * At[1], Nt.a.v[2] * At[2]) : wt.translate(-Nt.a.v[0] * At, -Nt.a.v[1] * At, Nt.a.v[2] * At));
            for (Yt = 0; Yt < sr; Yt += 1) (Nt = bt[Yt].a).s.propType && ((At = bt[Yt].s.getMult(It[j].anIndexes[Yt], kt.a[Yt].s.totalChars)).length ? wt.scale(1 + (Nt.s.v[0] - 1) * At[0], 1 + (Nt.s.v[1] - 1) * At[1], 1) : wt.scale(1 + (Nt.s.v[0] - 1) * At, 1 + (Nt.s.v[1] - 1) * At, 1));
            for (Yt = 0; Yt < sr; Yt += 1) {
              if (Nt = bt[Yt].a, At = bt[Yt].s.getMult(It[j].anIndexes[Yt], kt.a[Yt].s.totalChars), Nt.sk.propType && (At.length ? wt.skewFromAxis(-Nt.sk.v * At[0], Nt.sa.v * At[1]) : wt.skewFromAxis(-Nt.sk.v * At, Nt.sa.v * At)), Nt.r.propType && (At.length ? wt.rotateZ(-Nt.r.v * At[2]) : wt.rotateZ(-Nt.r.v * At)), Nt.ry.propType && (At.length ? wt.rotateY(Nt.ry.v * At[1]) : wt.rotateY(Nt.ry.v * At)), Nt.rx.propType && (At.length ? wt.rotateX(Nt.rx.v * At[0]) : wt.rotateX(Nt.rx.v * At)), Nt.o.propType && (At.length ? dr += (Nt.o.v * At[0] - dr) * At[0] : dr += (Nt.o.v * At - dr) * At), o.strokeWidthAnim && Nt.sw.propType && (At.length ? Sr += Nt.sw.v * At[0] : Sr += Nt.sw.v * At), o.strokeColorAnim && Nt.sc.propType) for (rr = 0; rr < 3; rr += 1) At.length ? Er[rr] += (Nt.sc.v[rr] - Er[rr]) * At[0] : Er[rr] += (Nt.sc.v[rr] - Er[rr]) * At;
              if (o.fillColorAnim && o.fc) {
                if (Nt.fc.propType) for (rr = 0; rr < 3; rr += 1) At.length ? Kt[rr] += (Nt.fc.v[rr] - Kt[rr]) * At[0] : Kt[rr] += (Nt.fc.v[rr] - Kt[rr]) * At;
                Nt.fh.propType && (Kt = At.length ? addHueToRGB(Kt, Nt.fh.v * At[0]) : addHueToRGB(Kt, Nt.fh.v * At)), Nt.fs.propType && (Kt = At.length ? addSaturationToRGB(Kt, Nt.fs.v * At[0]) : addSaturationToRGB(Kt, Nt.fs.v * At)), Nt.fb.propType && (Kt = At.length ? addBrightnessToRGB(Kt, Nt.fb.v * At[0]) : addBrightnessToRGB(Kt, Nt.fb.v * At));
              }
            }
            for (Yt = 0; Yt < sr; Yt += 1) (Nt = bt[Yt].a).p.propType && (At = bt[Yt].s.getMult(It[j].anIndexes[Yt], kt.a[Yt].s.totalChars), this._hasMaskedPath ? At.length ? wt.translate(0, Nt.p.v[1] * At[0], -Nt.p.v[2] * At[1]) : wt.translate(0, Nt.p.v[1] * At, -Nt.p.v[2] * At) : At.length ? wt.translate(Nt.p.v[0] * At[0], Nt.p.v[1] * At[1], -Nt.p.v[2] * At[2]) : wt.translate(Nt.p.v[0] * At, Nt.p.v[1] * At, -Nt.p.v[2] * At));
            if (o.strokeWidthAnim && (nr = Sr < 0 ? 0 : Sr), o.strokeColorAnim && (Dr = "rgb(" + Math.round(255 * Er[0]) + "," + Math.round(255 * Er[1]) + "," + Math.round(255 * Er[2]) + ")"), o.fillColorAnim && o.fc && (Wr = "rgb(" + Math.round(255 * Kt[0]) + "," + Math.round(255 * Kt[1]) + "," + Math.round(255 * Kt[2]) + ")"), this._hasMaskedPath) {
              if (wt.translate(0, -o.ls), wt.translate(0, Pt[1] * Rt * 0.01 + g, 0), this._pathData.p.v) {
                vt = (it.point[1] - ht.point[1]) / (it.point[0] - ht.point[0]);
                var Fn = 180 * Math.atan(vt) / Math.PI;
                it.point[0] < ht.point[0] && (Fn += 180), wt.rotate(-Fn * Math.PI / 180);
              }
              wt.translate(hr, Pr, 0), at -= Pt[0] * It[j].an * 5e-3, It[j + 1] && Hr !== It[j + 1].ind && (at += It[j].an / 2, at += 1e-3 * o.tr * o.finalSize);
            } else {
              switch (wt.translate(h, g, 0), o.ps && wt.translate(o.ps[0], o.ps[1] + o.ascent, 0), o.j) {
                case 1:
                  wt.translate(It[j].animatorJustifyOffset + o.justifyOffset + (o.boxWidth - o.lineWidths[It[j].line]), 0, 0);
                  break;
                case 2:
                  wt.translate(It[j].animatorJustifyOffset + o.justifyOffset + (o.boxWidth - o.lineWidths[It[j].line]) / 2, 0, 0);
              }
              wt.translate(0, -o.ls), wt.translate(Zt, 0, 0), wt.translate(Pt[0] * It[j].an * 5e-3, Pt[1] * Rt * 0.01, 0), h += It[j].l + 1e-3 * o.tr * o.finalSize;
            }
            xt === "html" ? Xr = wt.toCSS() : xt === "svg" ? Xr = wt.to2dCSS() : Rn = [wt.props[0], wt.props[1], wt.props[2], wt.props[3], wt.props[4], wt.props[5], wt.props[6], wt.props[7], wt.props[8], wt.props[9], wt.props[10], wt.props[11], wt.props[12], wt.props[13], wt.props[14], wt.props[15]], zr = dr;
          }
          Tt <= j ? (ur = new LetterProps(zr, nr, Dr, Wr, Xr, Rn), this.renderedLetters.push(ur), Tt += 1, this.lettersChangedFlag = !0) : (ur = this.renderedLetters[j], this.lettersChangedFlag = ur.update(zr, nr, Dr, Wr, Xr, Rn) || this.lettersChangedFlag);
        }
      }
    }, TextAnimatorProperty.prototype.getValue = function() {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
    }, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(o, s, h) {
      this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(o, s, h), this.textProperty = new TextProperty(this, o.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(o.t, this.renderType, this), this.initTransform(o, s, h), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
    }, ITextElement.prototype.prepareFrame = function(o) {
      this._mdf = !1, this.prepareRenderableFrame(o), this.prepareProperties(o, this.isInRange);
    }, ITextElement.prototype.createPathShape = function(o, s) {
      var h, g, j = s.length, tt = "";
      for (h = 0; h < j; h += 1) s[h].ty === "sh" && (g = s[h].ks.k, tt += buildShapeString(g, g.i.length, !0, o));
      return tt;
    }, ITextElement.prototype.updateDocumentData = function(o, s) {
      this.textProperty.updateDocumentData(o, s);
    }, ITextElement.prototype.canResizeFont = function(o) {
      this.textProperty.canResizeFont(o);
    }, ITextElement.prototype.setMinimumFontSize = function(o) {
      this.textProperty.setMinimumFontSize(o);
    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(o, s, h, g, j) {
      switch (o.ps && s.translate(o.ps[0], o.ps[1] + o.ascent, 0), s.translate(0, -o.ls, 0), o.j) {
        case 1:
          s.translate(o.justifyOffset + (o.boxWidth - o.lineWidths[h]), 0, 0);
          break;
        case 2:
          s.translate(o.justifyOffset + (o.boxWidth - o.lineWidths[h]) / 2, 0, 0);
      }
      s.translate(g, j, 0);
    }, ITextElement.prototype.buildColor = function(o) {
      return "rgb(" + Math.round(255 * o[0]) + "," + Math.round(255 * o[1]) + "," + Math.round(255 * o[2]) + ")";
    }, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function() {
    }, ITextElement.prototype.validateText = function() {
      (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
    };
    var emptyShapeData = { shapes: [] };
    function SVGTextLottieElement(o, s, h) {
      this.textSpans = [], this.renderType = "svg", this.initElement(o, s, h);
    }
    function ISolidElement(o, s, h) {
      this.initElement(o, s, h);
    }
    function NullElement(o, s, h) {
      this.initFrame(), this.initBaseData(o, s, h), this.initFrame(), this.initTransform(o, s, h), this.initHierarchy();
    }
    function SVGRendererBase() {
    }
    function ICompElement() {
    }
    function SVGCompElement(o, s, h) {
      this.layers = o.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(o, s, h), this.tm = o.tm ? PropertyFactory.getProp(this, o.tm, 0, s.frameRate, this) : { _placeholder: !0 };
    }
    function SVGRenderer(o, s) {
      this.animationItem = o, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
      var h = "";
      if (s && s.title) {
        var g = createNS("title"), j = createElementID();
        g.setAttribute("id", j), g.textContent = s.title, this.svgElement.appendChild(g), h += j;
      }
      if (s && s.description) {
        var tt = createNS("desc"), rt = createElementID();
        tt.setAttribute("id", rt), tt.textContent = s.description, this.svgElement.appendChild(tt), h += " " + rt;
      }
      h && this.svgElement.setAttribute("aria-labelledby", h);
      var at = createNS("defs");
      this.svgElement.appendChild(at);
      var it = createNS("g");
      this.svgElement.appendChild(it), this.layerElement = it, this.renderConfig = { preserveAspectRatio: s && s.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: s && s.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: s && s.contentVisibility || "visible", progressiveLoad: s && s.progressiveLoad || !1, hideOnTransparent: !(s && s.hideOnTransparent === !1), viewBoxOnly: s && s.viewBoxOnly || !1, viewBoxSize: s && s.viewBoxSize || !1, className: s && s.className || "", id: s && s.id || "", focusable: s && s.focusable, filterSize: { width: s && s.filterSize && s.filterSize.width || "100%", height: s && s.filterSize && s.filterSize.height || "100%", x: s && s.filterSize && s.filterSize.x || "0%", y: s && s.filterSize && s.filterSize.y || "0%" }, width: s && s.width, height: s && s.height, runExpressions: !s || s.runExpressions === void 0 || s.runExpressions }, this.globalData = { _mdf: !1, frameNum: -1, defs: at, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
    }
    function ShapeTransformManager() {
      this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
    }, SVGTextLottieElement.prototype.buildTextContents = function(o) {
      for (var s = 0, h = o.length, g = [], j = ""; s < h; ) o[s] === "\r" || o[s] === "" ? (g.push(j), j = "") : j += o[s], s += 1;
      return g.push(j), g;
    }, SVGTextLottieElement.prototype.buildShapeData = function(o, s) {
      if (o.shapes && o.shapes.length) {
        var h = o.shapes[0];
        if (h.it) {
          var g = h.it[h.it.length - 1];
          g.s && (g.s.k[0] = s, g.s.k[1] = s);
        }
      }
      return o;
    }, SVGTextLottieElement.prototype.buildNewText = function() {
      this.addDynamicProperty(this);
      var o, s, h = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(h ? h.l.length : 0), h.fc ? this.layerElement.setAttribute("fill", this.buildColor(h.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), h.sc && (this.layerElement.setAttribute("stroke", this.buildColor(h.sc)), this.layerElement.setAttribute("stroke-width", h.sw)), this.layerElement.setAttribute("font-size", h.finalSize);
      var g = this.globalData.fontManager.getFontByName(h.f);
      if (g.fClass) this.layerElement.setAttribute("class", g.fClass);
      else {
        this.layerElement.setAttribute("font-family", g.fFamily);
        var j = h.fWeight, tt = h.fStyle;
        this.layerElement.setAttribute("font-style", tt), this.layerElement.setAttribute("font-weight", j);
      }
      this.layerElement.setAttribute("aria-label", h.t);
      var rt = h.l || [], at = !!this.globalData.fontManager.chars;
      s = rt.length;
      var it, st = this.mHelper, lt = this.data.singleShape, ot = 0, ft = 0, ht = !0, pt = 1e-3 * h.tr * h.finalSize;
      if (!lt || at || h.sz) {
        var dt, ct = this.textSpans.length;
        for (o = 0; o < s; o += 1) {
          if (this.textSpans[o] || (this.textSpans[o] = { span: null, childSpan: null, glyph: null }), !at || !lt || o === 0) {
            if (it = ct > o ? this.textSpans[o].span : createNS(at ? "g" : "text"), ct <= o) {
              if (it.setAttribute("stroke-linecap", "butt"), it.setAttribute("stroke-linejoin", "round"), it.setAttribute("stroke-miterlimit", "4"), this.textSpans[o].span = it, at) {
                var mt = createNS("g");
                it.appendChild(mt), this.textSpans[o].childSpan = mt;
              }
              this.textSpans[o].span = it, this.layerElement.appendChild(it);
            }
            it.style.display = "inherit";
          }
          if (st.reset(), lt && (rt[o].n && (ot = -pt, ft += h.yOffset, ft += ht ? 1 : 0, ht = !1), this.applyTextPropertiesToMatrix(h, st, rt[o].line, ot, ft), ot += rt[o].l || 0, ot += pt), at) {
            var yt;
            if ((dt = this.globalData.fontManager.getCharData(h.finalText[o], g.fStyle, this.globalData.fontManager.getFontByName(h.f).fFamily)).t === 1) yt = new SVGCompElement(dt.data, this.globalData, this);
            else {
              var vt = emptyShapeData;
              dt.data && dt.data.shapes && (vt = this.buildShapeData(dt.data, h.finalSize)), yt = new SVGShapeElement(vt, this.globalData, this);
            }
            if (this.textSpans[o].glyph) {
              var _t = this.textSpans[o].glyph;
              this.textSpans[o].childSpan.removeChild(_t.layerElement), _t.destroy();
            }
            this.textSpans[o].glyph = yt, yt._debug = !0, yt.prepareFrame(0), yt.renderFrame(), this.textSpans[o].childSpan.appendChild(yt.layerElement), dt.t === 1 && this.textSpans[o].childSpan.setAttribute("transform", "scale(" + h.finalSize / 100 + "," + h.finalSize / 100 + ")");
          } else lt && it.setAttribute("transform", "translate(" + st.props[12] + "," + st.props[13] + ")"), it.textContent = rt[o].val, it.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        }
        lt && it && it.setAttribute("d", "");
      } else {
        var Pt = this.textContainer, bt = "start";
        switch (h.j) {
          case 1:
            bt = "end";
            break;
          case 2:
            bt = "middle";
            break;
          default:
            bt = "start";
        }
        Pt.setAttribute("text-anchor", bt), Pt.setAttribute("letter-spacing", pt);
        var kt = this.buildTextContents(h.finalText);
        for (s = kt.length, ft = h.ps ? h.ps[1] + h.ascent : 0, o = 0; o < s; o += 1) (it = this.textSpans[o].span || createNS("tspan")).textContent = kt[o], it.setAttribute("x", 0), it.setAttribute("y", ft), it.style.display = "inherit", Pt.appendChild(it), this.textSpans[o] || (this.textSpans[o] = { span: null, glyph: null }), this.textSpans[o].span = it, ft += h.finalLineHeight;
        this.layerElement.appendChild(Pt);
      }
      for (; o < this.textSpans.length; ) this.textSpans[o].span.style.display = "none", o += 1;
      this._sizeChanged = !0;
    }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = !1;
        var o = this.layerElement.getBBox();
        this.bbox = { top: o.y, left: o.x, width: o.width, height: o.height };
      }
      return this.bbox;
    }, SVGTextLottieElement.prototype.getValue = function() {
      var o, s, h = this.textSpans.length;
      for (this.renderedFrame = this.comp.renderedFrame, o = 0; o < h; o += 1) (s = this.textSpans[o].glyph) && (s.prepareFrame(this.comp.renderedFrame - this.data.st), s._mdf && (this._mdf = !0));
    }, SVGTextLottieElement.prototype.renderInnerContent = function() {
      if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        this._sizeChanged = !0;
        var o, s, h, g, j, tt = this.textAnimator.renderedLetters, rt = this.textProperty.currentData.l;
        for (s = rt.length, o = 0; o < s; o += 1) rt[o].n || (h = tt[o], g = this.textSpans[o].span, (j = this.textSpans[o].glyph) && j.renderFrame(), h._mdf.m && g.setAttribute("transform", h.m), h._mdf.o && g.setAttribute("opacity", h.o), h._mdf.sw && g.setAttribute("stroke-width", h.sw), h._mdf.sc && g.setAttribute("stroke", h.sc), h._mdf.fc && g.setAttribute("fill", h.fc));
      }
    }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
      var o = createNS("rect");
      o.setAttribute("width", this.data.sw), o.setAttribute("height", this.data.sh), o.setAttribute("fill", this.data.sc), this.layerElement.appendChild(o);
    }, NullElement.prototype.prepareFrame = function(o) {
      this.prepareProperties(o, !0);
    }, NullElement.prototype.renderFrame = function() {
    }, NullElement.prototype.getBaseElement = function() {
      return null;
    }, NullElement.prototype.destroy = function() {
    }, NullElement.prototype.sourceRectAtTime = function() {
    }, NullElement.prototype.hide = function() {
    }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(o) {
      return new NullElement(o, this.globalData, this);
    }, SVGRendererBase.prototype.createShape = function(o) {
      return new SVGShapeElement(o, this.globalData, this);
    }, SVGRendererBase.prototype.createText = function(o) {
      return new SVGTextLottieElement(o, this.globalData, this);
    }, SVGRendererBase.prototype.createImage = function(o) {
      return new IImageElement(o, this.globalData, this);
    }, SVGRendererBase.prototype.createSolid = function(o) {
      return new ISolidElement(o, this.globalData, this);
    }, SVGRendererBase.prototype.configAnimation = function(o) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + o.w + " " + o.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", o.w), this.svgElement.setAttribute("height", o.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var s = this.globalData.defs;
      this.setupGlobalData(o, s), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = o;
      var h = createNS("clipPath"), g = createNS("rect");
      g.setAttribute("width", o.w), g.setAttribute("height", o.h), g.setAttribute("x", 0), g.setAttribute("y", 0);
      var j = createElementID();
      h.setAttribute("id", j), h.appendChild(g), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + j + ")"), s.appendChild(h), this.layers = o.layers, this.elements = createSizedArray(o.layers.length);
    }, SVGRendererBase.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var o, s = this.layers ? this.layers.length : 0;
      for (o = 0; o < s; o += 1) this.elements[o] && this.elements[o].destroy && this.elements[o].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, SVGRendererBase.prototype.updateContainerSize = function() {
    }, SVGRendererBase.prototype.findIndexByInd = function(o) {
      var s = 0, h = this.layers.length;
      for (s = 0; s < h; s += 1) if (this.layers[s].ind === o) return s;
      return -1;
    }, SVGRendererBase.prototype.buildItem = function(o) {
      var s = this.elements;
      if (!s[o] && this.layers[o].ty !== 99) {
        s[o] = !0;
        var h = this.createItem(this.layers[o]);
        if (s[o] = h, getExpressionsPlugin() && (this.layers[o].ty === 0 && this.globalData.projectInterface.registerComposition(h), h.initExpressions()), this.appendElementInPos(h, o), this.layers[o].tt) {
          var g = "tp" in this.layers[o] ? this.findIndexByInd(this.layers[o].tp) : o - 1;
          if (g === -1) return;
          if (this.elements[g] && this.elements[g] !== !0) {
            var j = s[g].getMatte(this.layers[o].tt);
            h.setMatte(j);
          } else this.buildItem(g), this.addPendingElement(h);
        }
      }
    }, SVGRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var o = this.pendingElements.pop();
        if (o.checkParenting(), o.data.tt) for (var s = 0, h = this.elements.length; s < h; ) {
          if (this.elements[s] === o) {
            var g = "tp" in o.data ? this.findIndexByInd(o.data.tp) : s - 1, j = this.elements[g].getMatte(this.layers[s].tt);
            o.setMatte(j);
            break;
          }
          s += 1;
        }
      }
    }, SVGRendererBase.prototype.renderFrame = function(o) {
      if (this.renderedFrame !== o && !this.destroyed) {
        o === null ? o = this.renderedFrame : this.renderedFrame = o, this.globalData.frameNum = o, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = o, this.globalData._mdf = !1;
        var s, h = this.layers.length;
        for (this.completeLayers || this.checkLayers(o), s = h - 1; s >= 0; s -= 1) (this.completeLayers || this.elements[s]) && this.elements[s].prepareFrame(o - this.layers[s].st);
        if (this.globalData._mdf) for (s = 0; s < h; s += 1) (this.completeLayers || this.elements[s]) && this.elements[s].renderFrame();
      }
    }, SVGRendererBase.prototype.appendElementInPos = function(o, s) {
      var h = o.getBaseElement();
      if (h) {
        for (var g, j = 0; j < s; ) this.elements[j] && this.elements[j] !== !0 && this.elements[j].getBaseElement() && (g = this.elements[j].getBaseElement()), j += 1;
        g ? this.layerElement.insertBefore(h, g) : this.layerElement.appendChild(h);
      }
    }, SVGRendererBase.prototype.hide = function() {
      this.layerElement.style.display = "none";
    }, SVGRendererBase.prototype.show = function() {
      this.layerElement.style.display = "block";
    }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(o, s, h) {
      this.initFrame(), this.initBaseData(o, s, h), this.initTransform(o, s, h), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !s.progressiveLoad) && this.buildAllItems(), this.hide();
    }, ICompElement.prototype.prepareFrame = function(o) {
      if (this._mdf = !1, this.prepareRenderableFrame(o), this.prepareProperties(o, this.isInRange), this.isInRange || this.data.xt) {
        if (this.tm._placeholder) this.renderedFrame = o / this.data.sr;
        else {
          var s = this.tm.v;
          s === this.data.op && (s = this.data.op - 1), this.renderedFrame = s;
        }
        var h, g = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), h = g - 1; h >= 0; h -= 1) (this.completeLayers || this.elements[h]) && (this.elements[h].prepareFrame(this.renderedFrame - this.layers[h].st), this.elements[h]._mdf && (this._mdf = !0));
      }
    }, ICompElement.prototype.renderInnerContent = function() {
      var o, s = this.layers.length;
      for (o = 0; o < s; o += 1) (this.completeLayers || this.elements[o]) && this.elements[o].renderFrame();
    }, ICompElement.prototype.setElements = function(o) {
      this.elements = o;
    }, ICompElement.prototype.getElements = function() {
      return this.elements;
    }, ICompElement.prototype.destroyElements = function() {
      var o, s = this.layers.length;
      for (o = 0; o < s; o += 1) this.elements[o] && this.elements[o].destroy();
    }, ICompElement.prototype.destroy = function() {
      this.destroyElements(), this.destroyBaseElement();
    }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(o) {
      return new SVGCompElement(o, this.globalData, this);
    }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(o) {
      return new SVGCompElement(o, this.globalData, this);
    }, ShapeTransformManager.prototype = { addTransformSequence: function(o) {
      var s, h = o.length, g = "_";
      for (s = 0; s < h; s += 1) g += o[s].transform.key + "_";
      var j = this.sequences[g];
      return j || (j = { transforms: [].concat(o), finalTransform: new Matrix(), _mdf: !1 }, this.sequences[g] = j, this.sequenceList.push(j)), j;
    }, processSequence: function(o, s) {
      for (var h = 0, g = o.transforms.length, j = s; h < g && !s; ) {
        if (o.transforms[h].transform.mProps._mdf) {
          j = !0;
          break;
        }
        h += 1;
      }
      if (j) for (o.finalTransform.reset(), h = g - 1; h >= 0; h -= 1) o.finalTransform.multiply(o.transforms[h].transform.mProps.v);
      o._mdf = j;
    }, processSequences: function(o) {
      var s, h = this.sequenceList.length;
      for (s = 0; s < h; s += 1) this.processSequence(this.sequenceList[s], o);
    }, getNewKey: function() {
      return this.transform_key_count += 1, "_" + this.transform_key_count;
    } };
    var lumaLoader = function() {
      var o = "__lottie_element_luma_buffer", s = null, h = null, g = null;
      function j() {
        s || (g = function() {
          var tt = createNS("svg"), rt = createNS("filter"), at = createNS("feColorMatrix");
          return rt.setAttribute("id", o), at.setAttribute("type", "matrix"), at.setAttribute("color-interpolation-filters", "sRGB"), at.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), rt.appendChild(at), tt.appendChild(rt), tt.setAttribute("id", o + "_svg"), featureSupport.svgLumaHidden && (tt.style.display = "none"), tt;
        }(), document.body.appendChild(g), s = createTag("canvas"), (h = s.getContext("2d")).filter = "url(#" + o + ")", h.fillStyle = "rgba(0,0,0,0)", h.fillRect(0, 0, 1, 1));
      }
      return { load: j, get: function(tt) {
        return s || j(), s.width = tt.width, s.height = tt.height, h.filter = "url(#" + o + ")", s;
      } };
    };
    function createCanvas(o, s) {
      if (featureSupport.offscreenCanvas) return new OffscreenCanvas(o, s);
      var h = createTag("canvas");
      return h.width = o, h.height = s, h;
    }
    var assetLoader = { loadLumaCanvas: lumaLoader.load, getLumaCanvas: lumaLoader.get, createCanvas }, registeredEffects = {};
    function CVEffects(o) {
      var s, h, g = o.data.ef ? o.data.ef.length : 0;
      for (this.filters = [], s = 0; s < g; s += 1) {
        h = null;
        var j = o.data.ef[s].ty;
        registeredEffects[j] && (h = new registeredEffects[j].effect(o.effectsManager.effectElements[s], o)), h && this.filters.push(h);
      }
      this.filters.length && o.addRenderableComponent(this);
    }
    function registerEffect(o, s) {
      registeredEffects[o] = { effect: s };
    }
    function CVMaskElement(o, s) {
      this.data = o, this.element = s, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
      var h, g = this.masksProperties.length, j = !1;
      for (h = 0; h < g; h += 1) this.masksProperties[h].mode !== "n" && (j = !0), this.viewData[h] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[h], 3);
      this.hasMasks = j, j && this.element.addRenderableComponent(this);
    }
    function CVBaseElement() {
    }
    CVEffects.prototype.renderFrame = function(o) {
      var s, h = this.filters.length;
      for (s = 0; s < h; s += 1) this.filters[s].renderFrame(o);
    }, CVEffects.prototype.getEffects = function(o) {
      var s, h = this.filters.length, g = [];
      for (s = 0; s < h; s += 1) this.filters[s].type === o && g.push(this.filters[s]);
      return g;
    }, CVMaskElement.prototype.renderFrame = function() {
      if (this.hasMasks) {
        var o, s, h, g, j = this.element.finalTransform.mat, tt = this.element.canvasContext, rt = this.masksProperties.length;
        for (tt.beginPath(), o = 0; o < rt; o += 1) if (this.masksProperties[o].mode !== "n") {
          this.masksProperties[o].inv && (tt.moveTo(0, 0), tt.lineTo(this.element.globalData.compSize.w, 0), tt.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), tt.lineTo(0, this.element.globalData.compSize.h), tt.lineTo(0, 0)), g = this.viewData[o].v, s = j.applyToPointArray(g.v[0][0], g.v[0][1], 0), tt.moveTo(s[0], s[1]);
          var at, it = g._length;
          for (at = 1; at < it; at += 1) h = j.applyToTriplePoints(g.o[at - 1], g.i[at], g.v[at]), tt.bezierCurveTo(h[0], h[1], h[2], h[3], h[4], h[5]);
          h = j.applyToTriplePoints(g.o[at - 1], g.i[0], g.v[0]), tt.bezierCurveTo(h[0], h[1], h[2], h[3], h[4], h[5]);
        }
        this.element.globalData.renderer.save(!0), tt.clip();
      }
    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
      this.element = null;
    };
    var operationsMap = { 1: "source-in", 2: "source-out", 3: "source-in", 4: "source-out" };
    function CVShapeData(o, s, h, g) {
      this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
      var j = 4;
      s.ty === "rc" ? j = 5 : s.ty === "el" ? j = 6 : s.ty === "sr" && (j = 7), this.sh = ShapePropertyFactory.getShapeProp(o, s, j, o);
      var tt, rt, at = h.length;
      for (tt = 0; tt < at; tt += 1) h[tt].closed || (rt = { transforms: g.addTransformSequence(h[tt].transforms), trNodes: [] }, this.styledShapes.push(rt), h[tt].elements.push(rt));
    }
    function CVShapeElement(o, s, h) {
      this.shapes = [], this.shapesData = o.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), this.initElement(o, s, h);
    }
    function CVTextElement(o, s, h) {
      this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, this.initElement(o, s, h);
    }
    function CVImageElement(o, s, h) {
      this.assetData = s.getAssetData(o.refId), this.img = s.imageLoader.getAsset(this.assetData), this.initElement(o, s, h);
    }
    function CVSolidElement(o, s, h) {
      this.initElement(o, s, h);
    }
    function CanvasRendererBase() {
    }
    function CanvasContext() {
      this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random();
    }
    function CVContextData() {
      var o;
      for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix(), o = 0; o < 15; o += 1) {
        var s = new CanvasContext();
        this.stack[o] = s;
      }
      this._length = 15, this.nativeContext = null, this.transformMat = new Matrix(), this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = "";
    }
    function CVCompElement(o, s, h) {
      this.completeLayers = !1, this.layers = o.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(o, s, h), this.tm = o.tm ? PropertyFactory.getProp(this, o.tm, 0, s.frameRate, this) : { _placeholder: !0 };
    }
    function CanvasRenderer(o, s) {
      this.animationItem = o, this.renderConfig = { clearCanvas: !s || s.clearCanvas === void 0 || s.clearCanvas, context: s && s.context || null, progressiveLoad: s && s.progressiveLoad || !1, preserveAspectRatio: s && s.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: s && s.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: s && s.contentVisibility || "visible", className: s && s.className || "", id: s && s.id || "", runExpressions: !s || s.runExpressions === void 0 || s.runExpressions }, this.renderConfig.dpr = s && s.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = s && s.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = { frameNum: -1, _mdf: !1, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData));
    }
    function HBaseElement() {
    }
    function HSolidElement(o, s, h) {
      this.initElement(o, s, h);
    }
    function HShapeElement(o, s, h) {
      this.shapes = [], this.shapesData = o.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(o, s, h), this.prevViewData = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 };
    }
    function HTextElement(o, s, h) {
      this.textSpans = [], this.textPaths = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }, this.renderType = "svg", this.isMasked = !1, this.initElement(o, s, h);
    }
    function HCameraElement(o, s, h) {
      this.initFrame(), this.initBaseData(o, s, h), this.initHierarchy();
      var g = PropertyFactory.getProp;
      if (this.pe = g(this, o.pe, 0, 0, this), o.ks.p.s ? (this.px = g(this, o.ks.p.x, 1, 0, this), this.py = g(this, o.ks.p.y, 1, 0, this), this.pz = g(this, o.ks.p.z, 1, 0, this)) : this.p = g(this, o.ks.p, 1, 0, this), o.ks.a && (this.a = g(this, o.ks.a, 1, 0, this)), o.ks.or.k.length && o.ks.or.k[0].to) {
        var j, tt = o.ks.or.k.length;
        for (j = 0; j < tt; j += 1) o.ks.or.k[j].to = null, o.ks.or.k[j].ti = null;
      }
      this.or = g(this, o.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = g(this, o.ks.rx, 0, degToRads, this), this.ry = g(this, o.ks.ry, 0, degToRads, this), this.rz = g(this, o.ks.rz, 0, degToRads, this), this.mat = new Matrix(), this._prevMat = new Matrix(), this._isFirstFrame = !0, this.finalTransform = { mProp: this };
    }
    function HImageElement(o, s, h) {
      this.assetData = s.getAssetData(o.refId), this.initElement(o, s, h);
    }
    function HybridRendererBase(o, s) {
      this.animationItem = o, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: s && s.className || "", imagePreserveAspectRatio: s && s.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(s && s.hideOnTransparent === !1), filterSize: { width: s && s.filterSize && s.filterSize.width || "400%", height: s && s.filterSize && s.filterSize.height || "400%", x: s && s.filterSize && s.filterSize.x || "-100%", y: s && s.filterSize && s.filterSize.y || "-100%" } }, this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
    }
    function HCompElement(o, s, h) {
      this.layers = o.layers, this.supports3d = !o.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(o, s, h), this.tm = o.tm ? PropertyFactory.getProp(this, o.tm, 0, s.frameRate, this) : { _placeholder: !0 };
    }
    function HybridRenderer(o, s) {
      this.animationItem = o, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: s && s.className || "", imagePreserveAspectRatio: s && s.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(s && s.hideOnTransparent === !1), filterSize: { width: s && s.filterSize && s.filterSize.width || "400%", height: s && s.filterSize && s.filterSize.height || "400%", x: s && s.filterSize && s.filterSize.x || "-100%", y: s && s.filterSize && s.filterSize.y || "-100%" }, runExpressions: !s || s.runExpressions === void 0 || s.runExpressions }, this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
    }
    CVBaseElement.prototype = { createElements: function() {
    }, initRendererElement: function() {
    }, createContainerElements: function() {
      if (this.data.tt >= 1) {
        this.buffers = [];
        var o = this.globalData.canvasContext, s = assetLoader.createCanvas(o.canvas.width, o.canvas.height);
        this.buffers.push(s);
        var h = assetLoader.createCanvas(o.canvas.width, o.canvas.height);
        this.buffers.push(h), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas();
      }
      this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms();
    }, createContent: function() {
    }, setBlendMode: function() {
      var o = this.globalData;
      if (o.blendMode !== this.data.bm) {
        o.blendMode = this.data.bm;
        var s = getBlendMode(this.data.bm);
        o.canvasContext.globalCompositeOperation = s;
      }
    }, createRenderableComponents: function() {
      this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
    }, hideElement: function() {
      !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = !0);
    }, showElement: function() {
      this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0);
    }, clearCanvas: function(o) {
      o.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
    }, prepareLayer: function() {
      if (this.data.tt >= 1) {
        var o = this.buffers[0].getContext("2d");
        this.clearCanvas(o), o.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
      }
    }, exitLayer: function() {
      if (this.data.tt >= 1) {
        var o = this.buffers[1], s = o.getContext("2d");
        if (this.clearCanvas(s), s.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
          var h = assetLoader.getLumaCanvas(this.canvasContext.canvas);
          h.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(h, 0, 0);
        }
        this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(o, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over";
      }
    }, renderFrame: function(o) {
      if (!this.hidden && !this.data.hd && (this.data.td !== 1 || o)) {
        this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
        var s = this.data.ty === 0;
        this.prepareLayer(), this.globalData.renderer.save(s), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(s), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);
      }
    }, destroy: function() {
      this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
    }, mHelper: new Matrix() }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
    }, CVShapeElement.prototype.createStyleElement = function(o, s) {
      var h = { data: o, type: o.ty, preTransforms: this.transformsManager.addTransformSequence(s), transforms: [], elements: [], closed: o.hd === !0 }, g = {};
      if (o.ty === "fl" || o.ty === "st" ? (g.c = PropertyFactory.getProp(this, o.c, 1, 255, this), g.c.k || (h.co = "rgb(" + bmFloor(g.c.v[0]) + "," + bmFloor(g.c.v[1]) + "," + bmFloor(g.c.v[2]) + ")")) : (o.ty === "gf" || o.ty === "gs") && (g.s = PropertyFactory.getProp(this, o.s, 1, null, this), g.e = PropertyFactory.getProp(this, o.e, 1, null, this), g.h = PropertyFactory.getProp(this, o.h || { k: 0 }, 0, 0.01, this), g.a = PropertyFactory.getProp(this, o.a || { k: 0 }, 0, degToRads, this), g.g = new GradientProperty(this, o.g, this)), g.o = PropertyFactory.getProp(this, o.o, 0, 0.01, this), o.ty === "st" || o.ty === "gs") {
        if (h.lc = lineCapEnum[o.lc || 2], h.lj = lineJoinEnum[o.lj || 2], o.lj == 1 && (h.ml = o.ml), g.w = PropertyFactory.getProp(this, o.w, 0, null, this), g.w.k || (h.wi = g.w.v), o.d) {
          var j = new DashProperty(this, o.d, "canvas", this);
          g.d = j, g.d.k || (h.da = g.d.dashArray, h.do = g.d.dashoffset[0]);
        }
      } else h.r = o.r === 2 ? "evenodd" : "nonzero";
      return this.stylesList.push(h), g.style = h, g;
    }, CVShapeElement.prototype.createGroupElement = function() {
      return { it: [], prevViewData: [] };
    }, CVShapeElement.prototype.createTransformElement = function(o) {
      return { transform: { opacity: 1, _opMdf: !1, key: this.transformsManager.getNewKey(), op: PropertyFactory.getProp(this, o.o, 0, 0.01, this), mProps: TransformPropertyFactory.getTransformProperty(this, o, this) } };
    }, CVShapeElement.prototype.createShapeElement = function(o) {
      var s = new CVShapeData(this, o, this.stylesList, this.transformsManager);
      return this.shapes.push(s), this.addShapeToModifiers(s), s;
    }, CVShapeElement.prototype.reloadShapes = function() {
      this._isFirstFrame = !0;
      var o, s = this.itemsData.length;
      for (o = 0; o < s; o += 1) this.prevViewData[o] = this.itemsData[o];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), s = this.dynamicProperties.length, o = 0; o < s; o += 1) this.dynamicProperties[o].getValue();
      this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
    }, CVShapeElement.prototype.addTransformToStyleList = function(o) {
      var s, h = this.stylesList.length;
      for (s = 0; s < h; s += 1) this.stylesList[s].closed || this.stylesList[s].transforms.push(o);
    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
      var o, s = this.stylesList.length;
      for (o = 0; o < s; o += 1) this.stylesList[o].closed || this.stylesList[o].transforms.pop();
    }, CVShapeElement.prototype.closeStyles = function(o) {
      var s, h = o.length;
      for (s = 0; s < h; s += 1) o[s].closed = !0;
    }, CVShapeElement.prototype.searchShapes = function(o, s, h, g, j) {
      var tt, rt, at, it, st, lt, ot = o.length - 1, ft = [], ht = [], pt = [].concat(j);
      for (tt = ot; tt >= 0; tt -= 1) {
        if ((it = this.searchProcessedElement(o[tt])) ? s[tt] = h[it - 1] : o[tt]._shouldRender = g, o[tt].ty === "fl" || o[tt].ty === "st" || o[tt].ty === "gf" || o[tt].ty === "gs") it ? s[tt].style.closed = !1 : s[tt] = this.createStyleElement(o[tt], pt), ft.push(s[tt].style);
        else if (o[tt].ty === "gr") {
          if (it) for (at = s[tt].it.length, rt = 0; rt < at; rt += 1) s[tt].prevViewData[rt] = s[tt].it[rt];
          else s[tt] = this.createGroupElement(o[tt]);
          this.searchShapes(o[tt].it, s[tt].it, s[tt].prevViewData, g, pt);
        } else o[tt].ty === "tr" ? (it || (lt = this.createTransformElement(o[tt]), s[tt] = lt), pt.push(s[tt]), this.addTransformToStyleList(s[tt])) : o[tt].ty === "sh" || o[tt].ty === "rc" || o[tt].ty === "el" || o[tt].ty === "sr" ? it || (s[tt] = this.createShapeElement(o[tt])) : o[tt].ty === "tm" || o[tt].ty === "rd" || o[tt].ty === "pb" || o[tt].ty === "zz" || o[tt].ty === "op" ? (it ? (st = s[tt]).closed = !1 : ((st = ShapeModifiers.getModifier(o[tt].ty)).init(this, o[tt]), s[tt] = st, this.shapeModifiers.push(st)), ht.push(st)) : o[tt].ty === "rp" && (it ? (st = s[tt]).closed = !0 : (st = ShapeModifiers.getModifier(o[tt].ty), s[tt] = st, st.init(this, o, tt, s), this.shapeModifiers.push(st), g = !1), ht.push(st));
        this.addProcessedElement(o[tt], tt + 1);
      }
      for (this.removeTransformFromStyleList(), this.closeStyles(ft), ot = ht.length, tt = 0; tt < ot; tt += 1) ht[tt].closed = !0;
    }, CVShapeElement.prototype.renderInnerContent = function() {
      this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
    }, CVShapeElement.prototype.renderShapeTransform = function(o, s) {
      (o._opMdf || s.op._mdf || this._isFirstFrame) && (s.opacity = o.opacity, s.opacity *= s.op.v, s._opMdf = !0);
    }, CVShapeElement.prototype.drawLayer = function() {
      var o, s, h, g, j, tt, rt, at, it, st = this.stylesList.length, lt = this.globalData.renderer, ot = this.globalData.canvasContext;
      for (o = 0; o < st; o += 1) if (((at = (it = this.stylesList[o]).type) !== "st" && at !== "gs" || it.wi !== 0) && it.data._shouldRender && it.coOp !== 0 && this.globalData.currentGlobalAlpha !== 0) {
        for (lt.save(), tt = it.elements, at === "st" || at === "gs" ? (lt.ctxStrokeStyle(at === "st" ? it.co : it.grd), lt.ctxLineWidth(it.wi), lt.ctxLineCap(it.lc), lt.ctxLineJoin(it.lj), lt.ctxMiterLimit(it.ml || 0)) : lt.ctxFillStyle(at === "fl" ? it.co : it.grd), lt.ctxOpacity(it.coOp), at !== "st" && at !== "gs" && ot.beginPath(), lt.ctxTransform(it.preTransforms.finalTransform.props), h = tt.length, s = 0; s < h; s += 1) {
          for ((at === "st" || at === "gs") && (ot.beginPath(), it.da && (ot.setLineDash(it.da), ot.lineDashOffset = it.do)), j = (rt = tt[s].trNodes).length, g = 0; g < j; g += 1) rt[g].t === "m" ? ot.moveTo(rt[g].p[0], rt[g].p[1]) : rt[g].t === "c" ? ot.bezierCurveTo(rt[g].pts[0], rt[g].pts[1], rt[g].pts[2], rt[g].pts[3], rt[g].pts[4], rt[g].pts[5]) : ot.closePath();
          (at === "st" || at === "gs") && (lt.ctxStroke(), it.da && ot.setLineDash(this.dashResetter));
        }
        at !== "st" && at !== "gs" && this.globalData.renderer.ctxFill(it.r), lt.restore();
      }
    }, CVShapeElement.prototype.renderShape = function(o, s, h, g) {
      var j, tt;
      for (tt = o, j = s.length - 1; j >= 0; j -= 1) s[j].ty === "tr" ? (tt = h[j].transform, this.renderShapeTransform(o, tt)) : s[j].ty === "sh" || s[j].ty === "el" || s[j].ty === "rc" || s[j].ty === "sr" ? this.renderPath(s[j], h[j]) : s[j].ty === "fl" ? this.renderFill(s[j], h[j], tt) : s[j].ty === "st" ? this.renderStroke(s[j], h[j], tt) : s[j].ty === "gf" || s[j].ty === "gs" ? this.renderGradientFill(s[j], h[j], tt) : s[j].ty === "gr" ? this.renderShape(tt, s[j].it, h[j].it) : s[j].ty;
      g && this.drawLayer();
    }, CVShapeElement.prototype.renderStyledShape = function(o, s) {
      if (this._isFirstFrame || s._mdf || o.transforms._mdf) {
        var h, g, j, tt = o.trNodes, rt = s.paths, at = rt._length;
        tt.length = 0;
        var it = o.transforms.finalTransform;
        for (j = 0; j < at; j += 1) {
          var st = rt.shapes[j];
          if (st && st.v) {
            for (g = st._length, h = 1; h < g; h += 1) h === 1 && tt.push({ t: "m", p: it.applyToPointArray(st.v[0][0], st.v[0][1], 0) }), tt.push({ t: "c", pts: it.applyToTriplePoints(st.o[h - 1], st.i[h], st.v[h]) });
            g === 1 && tt.push({ t: "m", p: it.applyToPointArray(st.v[0][0], st.v[0][1], 0) }), st.c && g && (tt.push({ t: "c", pts: it.applyToTriplePoints(st.o[h - 1], st.i[0], st.v[0]) }), tt.push({ t: "z" }));
          }
        }
        o.trNodes = tt;
      }
    }, CVShapeElement.prototype.renderPath = function(o, s) {
      if (o.hd !== !0 && o._shouldRender) {
        var h, g = s.styledShapes.length;
        for (h = 0; h < g; h += 1) this.renderStyledShape(s.styledShapes[h], s.sh);
      }
    }, CVShapeElement.prototype.renderFill = function(o, s, h) {
      var g = s.style;
      (s.c._mdf || this._isFirstFrame) && (g.co = "rgb(" + bmFloor(s.c.v[0]) + "," + bmFloor(s.c.v[1]) + "," + bmFloor(s.c.v[2]) + ")"), (s.o._mdf || h._opMdf || this._isFirstFrame) && (g.coOp = s.o.v * h.opacity);
    }, CVShapeElement.prototype.renderGradientFill = function(o, s, h) {
      var g, j = s.style;
      if (!j.grd || s.g._mdf || s.s._mdf || s.e._mdf || o.t !== 1 && (s.h._mdf || s.a._mdf)) {
        var tt = this.globalData.canvasContext, rt = s.s.v, at = s.e.v;
        if (o.t === 1) g = tt.createLinearGradient(rt[0], rt[1], at[0], at[1]);
        else {
          var it = Math.sqrt(Math.pow(rt[0] - at[0], 2) + Math.pow(rt[1] - at[1], 2)), st = Math.atan2(at[1] - rt[1], at[0] - rt[0]), lt = s.h.v;
          lt >= 1 ? lt = 0.99 : lt <= -1 && (lt = -0.99);
          var ot = it * lt, ft = Math.cos(st + s.a.v) * ot + rt[0], ht = Math.sin(st + s.a.v) * ot + rt[1];
          g = tt.createRadialGradient(ft, ht, 0, rt[0], rt[1], it);
        }
        var pt, dt = o.g.p, ct = s.g.c, mt = 1;
        for (pt = 0; pt < dt; pt += 1) s.g._hasOpacity && s.g._collapsable && (mt = s.g.o[2 * pt + 1]), g.addColorStop(ct[4 * pt] / 100, "rgba(" + ct[4 * pt + 1] + "," + ct[4 * pt + 2] + "," + ct[4 * pt + 3] + "," + mt + ")");
        j.grd = g;
      }
      j.coOp = s.o.v * h.opacity;
    }, CVShapeElement.prototype.renderStroke = function(o, s, h) {
      var g = s.style, j = s.d;
      j && (j._mdf || this._isFirstFrame) && (g.da = j.dashArray, g.do = j.dashoffset[0]), (s.c._mdf || this._isFirstFrame) && (g.co = "rgb(" + bmFloor(s.c.v[0]) + "," + bmFloor(s.c.v[1]) + "," + bmFloor(s.c.v[2]) + ")"), (s.o._mdf || h._opMdf || this._isFirstFrame) && (g.coOp = s.o.v * h.opacity), (s.w._mdf || this._isFirstFrame) && (g.wi = s.w.v);
    }, CVShapeElement.prototype.destroy = function() {
      this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
      var o = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(o.l ? o.l.length : 0);
      var s = !1;
      o.fc ? (s = !0, this.values.fill = this.buildColor(o.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = s;
      var h = !1;
      o.sc && (h = !0, this.values.stroke = this.buildColor(o.sc), this.values.sWidth = o.sw);
      var g, j, tt = this.globalData.fontManager.getFontByName(o.f), rt = o.l, at = this.mHelper;
      this.stroke = h, this.values.fValue = o.finalSize + "px " + this.globalData.fontManager.getFontByName(o.f).fFamily, j = o.finalText.length;
      var it, st, lt, ot, ft, ht, pt, dt, ct, mt, yt = this.data.singleShape, vt = 1e-3 * o.tr * o.finalSize, _t = 0, Pt = 0, bt = !0, kt = 0;
      for (g = 0; g < j; g += 1) {
        st = (it = this.globalData.fontManager.getCharData(o.finalText[g], tt.fStyle, this.globalData.fontManager.getFontByName(o.f).fFamily)) && it.data || {}, at.reset(), yt && rt[g].n && (_t = -vt, Pt += o.yOffset, Pt += bt ? 1 : 0, bt = !1), pt = (ft = st.shapes ? st.shapes[0].it : []).length, at.scale(o.finalSize / 100, o.finalSize / 100), yt && this.applyTextPropertiesToMatrix(o, at, rt[g].line, _t, Pt), ct = createSizedArray(pt - 1);
        var wt = 0;
        for (ht = 0; ht < pt; ht += 1) if (ft[ht].ty === "sh") {
          for (ot = ft[ht].ks.k.i.length, dt = ft[ht].ks.k, mt = [], lt = 1; lt < ot; lt += 1) lt === 1 && mt.push(at.applyToX(dt.v[0][0], dt.v[0][1], 0), at.applyToY(dt.v[0][0], dt.v[0][1], 0)), mt.push(at.applyToX(dt.o[lt - 1][0], dt.o[lt - 1][1], 0), at.applyToY(dt.o[lt - 1][0], dt.o[lt - 1][1], 0), at.applyToX(dt.i[lt][0], dt.i[lt][1], 0), at.applyToY(dt.i[lt][0], dt.i[lt][1], 0), at.applyToX(dt.v[lt][0], dt.v[lt][1], 0), at.applyToY(dt.v[lt][0], dt.v[lt][1], 0));
          mt.push(at.applyToX(dt.o[lt - 1][0], dt.o[lt - 1][1], 0), at.applyToY(dt.o[lt - 1][0], dt.o[lt - 1][1], 0), at.applyToX(dt.i[0][0], dt.i[0][1], 0), at.applyToY(dt.i[0][0], dt.i[0][1], 0), at.applyToX(dt.v[0][0], dt.v[0][1], 0), at.applyToY(dt.v[0][0], dt.v[0][1], 0)), ct[wt] = mt, wt += 1;
        }
        yt && (_t += rt[g].l, _t += vt), this.textSpans[kt] ? this.textSpans[kt].elem = ct : this.textSpans[kt] = { elem: ct }, kt += 1;
      }
    }, CVTextElement.prototype.renderInnerContent = function() {
      this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
      var o, s, h, g, j, tt, rt = this.textAnimator.renderedLetters, at = this.textProperty.currentData.l;
      s = at.length;
      var it, st, lt, ot = null, ft = null, ht = null, pt = this.globalData.renderer;
      for (o = 0; o < s; o += 1) if (!at[o].n) {
        if ((it = rt[o]) && (pt.save(), pt.ctxTransform(it.p), pt.ctxOpacity(it.o)), this.fill) {
          for (it && it.fc ? ot !== it.fc && (pt.ctxFillStyle(it.fc), ot = it.fc) : ot !== this.values.fill && (ot = this.values.fill, pt.ctxFillStyle(this.values.fill)), g = (st = this.textSpans[o].elem).length, this.globalData.canvasContext.beginPath(), h = 0; h < g; h += 1) for (tt = (lt = st[h]).length, this.globalData.canvasContext.moveTo(lt[0], lt[1]), j = 2; j < tt; j += 6) this.globalData.canvasContext.bezierCurveTo(lt[j], lt[j + 1], lt[j + 2], lt[j + 3], lt[j + 4], lt[j + 5]);
          this.globalData.canvasContext.closePath(), pt.ctxFill();
        }
        if (this.stroke) {
          for (it && it.sw ? ht !== it.sw && (ht = it.sw, pt.ctxLineWidth(it.sw)) : ht !== this.values.sWidth && (ht = this.values.sWidth, pt.ctxLineWidth(this.values.sWidth)), it && it.sc ? ft !== it.sc && (ft = it.sc, pt.ctxStrokeStyle(it.sc)) : ft !== this.values.stroke && (ft = this.values.stroke, pt.ctxStrokeStyle(this.values.stroke)), g = (st = this.textSpans[o].elem).length, this.globalData.canvasContext.beginPath(), h = 0; h < g; h += 1) for (tt = (lt = st[h]).length, this.globalData.canvasContext.moveTo(lt[0], lt[1]), j = 2; j < tt; j += 6) this.globalData.canvasContext.bezierCurveTo(lt[j], lt[j + 1], lt[j + 2], lt[j + 3], lt[j + 4], lt[j + 5]);
          this.globalData.canvasContext.closePath(), pt.ctxStroke();
        }
        it && this.globalData.renderer.restore();
      }
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
      if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
        var o = createTag("canvas");
        o.width = this.assetData.w, o.height = this.assetData.h;
        var s, h, g = o.getContext("2d"), j = this.img.width, tt = this.img.height, rt = j / tt, at = this.assetData.w / this.assetData.h, it = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
        rt > at && it === "xMidYMid slice" || rt < at && it !== "xMidYMid slice" ? s = (h = tt) * at : h = (s = j) / at, g.drawImage(this.img, (j - s) / 2, (tt - h) / 2, s, h, 0, 0, this.assetData.w, this.assetData.h), this.img = o;
      }
    }, CVImageElement.prototype.renderInnerContent = function() {
      this.canvasContext.drawImage(this.img, 0, 0);
    }, CVImageElement.prototype.destroy = function() {
      this.img = null;
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
      this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
    }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(o) {
      return new CVShapeElement(o, this.globalData, this);
    }, CanvasRendererBase.prototype.createText = function(o) {
      return new CVTextElement(o, this.globalData, this);
    }, CanvasRendererBase.prototype.createImage = function(o) {
      return new CVImageElement(o, this.globalData, this);
    }, CanvasRendererBase.prototype.createSolid = function(o) {
      return new CVSolidElement(o, this.globalData, this);
    }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(o) {
      o[0] === 1 && o[1] === 0 && o[4] === 0 && o[5] === 1 && o[12] === 0 && o[13] === 0 || this.canvasContext.transform(o[0], o[1], o[4], o[5], o[12], o[13]);
    }, CanvasRendererBase.prototype.ctxOpacity = function(o) {
      this.canvasContext.globalAlpha *= o < 0 ? 0 : o;
    }, CanvasRendererBase.prototype.ctxFillStyle = function(o) {
      this.canvasContext.fillStyle = o;
    }, CanvasRendererBase.prototype.ctxStrokeStyle = function(o) {
      this.canvasContext.strokeStyle = o;
    }, CanvasRendererBase.prototype.ctxLineWidth = function(o) {
      this.canvasContext.lineWidth = o;
    }, CanvasRendererBase.prototype.ctxLineCap = function(o) {
      this.canvasContext.lineCap = o;
    }, CanvasRendererBase.prototype.ctxLineJoin = function(o) {
      this.canvasContext.lineJoin = o;
    }, CanvasRendererBase.prototype.ctxMiterLimit = function(o) {
      this.canvasContext.miterLimit = o;
    }, CanvasRendererBase.prototype.ctxFill = function(o) {
      this.canvasContext.fill(o);
    }, CanvasRendererBase.prototype.ctxFillRect = function(o, s, h, g) {
      this.canvasContext.fillRect(o, s, h, g);
    }, CanvasRendererBase.prototype.ctxStroke = function() {
      this.canvasContext.stroke();
    }, CanvasRendererBase.prototype.reset = function() {
      this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
    }, CanvasRendererBase.prototype.save = function() {
      this.canvasContext.save();
    }, CanvasRendererBase.prototype.restore = function(o) {
      this.renderConfig.clearCanvas ? (o && (this.globalData.blendMode = "source-over"), this.contextData.restore(o)) : this.canvasContext.restore();
    }, CanvasRendererBase.prototype.configAnimation = function(o) {
      if (this.animationItem.wrapper) {
        this.animationItem.container = createTag("canvas");
        var s = this.animationItem.container.style;
        s.width = "100%", s.height = "100%";
        var h = "0px 0px 0px";
        s.transformOrigin = h, s.mozTransformOrigin = h, s.webkitTransformOrigin = h, s["-webkit-transform"] = h, s.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
      } else this.canvasContext = this.renderConfig.context;
      this.contextData.setContext(this.canvasContext), this.data = o, this.layers = o.layers, this.transformCanvas = { w: o.w, h: o.h, sx: 0, sy: 0, tx: 0, ty: 0 }, this.setupGlobalData(o, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(o.layers.length), this.updateContainerSize();
    }, CanvasRendererBase.prototype.updateContainerSize = function(o, s) {
      var h, g, j, tt;
      if (this.reset(), o ? (h = o, g = s, this.canvasContext.canvas.width = h, this.canvasContext.canvas.height = g) : (this.animationItem.wrapper && this.animationItem.container ? (h = this.animationItem.wrapper.offsetWidth, g = this.animationItem.wrapper.offsetHeight) : (h = this.canvasContext.canvas.width, g = this.canvasContext.canvas.height), this.canvasContext.canvas.width = h * this.renderConfig.dpr, this.canvasContext.canvas.height = g * this.renderConfig.dpr), this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
        var rt = this.renderConfig.preserveAspectRatio.split(" "), at = rt[1] || "meet", it = rt[0] || "xMidYMid", st = it.substr(0, 4), lt = it.substr(4);
        j = h / g, (tt = this.transformCanvas.w / this.transformCanvas.h) > j && at === "meet" || tt < j && at === "slice" ? (this.transformCanvas.sx = h / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = h / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = g / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = g / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = st === "xMid" && (tt < j && at === "meet" || tt > j && at === "slice") ? (h - this.transformCanvas.w * (g / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : st === "xMax" && (tt < j && at === "meet" || tt > j && at === "slice") ? (h - this.transformCanvas.w * (g / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = lt === "YMid" && (tt > j && at === "meet" || tt < j && at === "slice") ? (g - this.transformCanvas.h * (h / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : lt === "YMax" && (tt > j && at === "meet" || tt < j && at === "slice") ? (g - this.transformCanvas.h * (h / this.transformCanvas.w)) * this.renderConfig.dpr : 0;
      } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = h / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = g / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
      this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
    }, CanvasRendererBase.prototype.destroy = function() {
      var o;
      for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), o = (this.layers ? this.layers.length : 0) - 1; o >= 0; o -= 1) this.elements[o] && this.elements[o].destroy && this.elements[o].destroy();
      this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0;
    }, CanvasRendererBase.prototype.renderFrame = function(o, s) {
      if ((this.renderedFrame !== o || this.renderConfig.clearCanvas !== !0 || s) && !this.destroyed && o !== -1) {
        this.renderedFrame = o, this.globalData.frameNum = o - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || s, this.globalData.projectInterface.currentFrame = o;
        var h, g = this.layers.length;
        for (this.completeLayers || this.checkLayers(o), h = g - 1; h >= 0; h -= 1) (this.completeLayers || this.elements[h]) && this.elements[h].prepareFrame(o - this.layers[h].st);
        if (this.globalData._mdf) {
          for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), h = g - 1; h >= 0; h -= 1) (this.completeLayers || this.elements[h]) && this.elements[h].renderFrame();
          this.renderConfig.clearCanvas !== !0 && this.restore();
        }
      }
    }, CanvasRendererBase.prototype.buildItem = function(o) {
      var s = this.elements;
      if (!s[o] && this.layers[o].ty !== 99) {
        var h = this.createItem(this.layers[o], this, this.globalData);
        s[o] = h, h.initExpressions();
      }
    }, CanvasRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) this.pendingElements.pop().checkParenting();
    }, CanvasRendererBase.prototype.hide = function() {
      this.animationItem.container.style.display = "none";
    }, CanvasRendererBase.prototype.show = function() {
      this.animationItem.container.style.display = "block";
    }, CVContextData.prototype.duplicate = function() {
      var o = 2 * this._length, s = 0;
      for (s = this._length; s < o; s += 1) this.stack[s] = new CanvasContext();
      this._length = o;
    }, CVContextData.prototype.reset = function() {
      this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1;
    }, CVContextData.prototype.restore = function(o) {
      this.cArrPos -= 1;
      var s, h = this.stack[this.cArrPos], g = h.transform, j = this.cTr.props;
      for (s = 0; s < 16; s += 1) j[s] = g[s];
      if (o) {
        this.nativeContext.restore();
        var tt = this.stack[this.cArrPos + 1];
        this.appliedFillStyle = tt.fillStyle, this.appliedStrokeStyle = tt.strokeStyle, this.appliedLineWidth = tt.lineWidth, this.appliedLineCap = tt.lineCap, this.appliedLineJoin = tt.lineJoin, this.appliedMiterLimit = tt.miterLimit;
      }
      this.nativeContext.setTransform(g[0], g[1], g[4], g[5], g[12], g[13]), (o || h.opacity !== -1 && this.currentOpacity !== h.opacity) && (this.nativeContext.globalAlpha = h.opacity, this.currentOpacity = h.opacity), this.currentFillStyle = h.fillStyle, this.currentStrokeStyle = h.strokeStyle, this.currentLineWidth = h.lineWidth, this.currentLineCap = h.lineCap, this.currentLineJoin = h.lineJoin, this.currentMiterLimit = h.miterLimit;
    }, CVContextData.prototype.save = function(o) {
      o && this.nativeContext.save();
      var s = this.cTr.props;
      this._length <= this.cArrPos && this.duplicate();
      var h, g = this.stack[this.cArrPos];
      for (h = 0; h < 16; h += 1) g.transform[h] = s[h];
      this.cArrPos += 1;
      var j = this.stack[this.cArrPos];
      j.opacity = g.opacity, j.fillStyle = g.fillStyle, j.strokeStyle = g.strokeStyle, j.lineWidth = g.lineWidth, j.lineCap = g.lineCap, j.lineJoin = g.lineJoin, j.miterLimit = g.miterLimit;
    }, CVContextData.prototype.setOpacity = function(o) {
      this.stack[this.cArrPos].opacity = o;
    }, CVContextData.prototype.setContext = function(o) {
      this.nativeContext = o;
    }, CVContextData.prototype.fillStyle = function(o) {
      this.stack[this.cArrPos].fillStyle !== o && (this.currentFillStyle = o, this.stack[this.cArrPos].fillStyle = o);
    }, CVContextData.prototype.strokeStyle = function(o) {
      this.stack[this.cArrPos].strokeStyle !== o && (this.currentStrokeStyle = o, this.stack[this.cArrPos].strokeStyle = o);
    }, CVContextData.prototype.lineWidth = function(o) {
      this.stack[this.cArrPos].lineWidth !== o && (this.currentLineWidth = o, this.stack[this.cArrPos].lineWidth = o);
    }, CVContextData.prototype.lineCap = function(o) {
      this.stack[this.cArrPos].lineCap !== o && (this.currentLineCap = o, this.stack[this.cArrPos].lineCap = o);
    }, CVContextData.prototype.lineJoin = function(o) {
      this.stack[this.cArrPos].lineJoin !== o && (this.currentLineJoin = o, this.stack[this.cArrPos].lineJoin = o);
    }, CVContextData.prototype.miterLimit = function(o) {
      this.stack[this.cArrPos].miterLimit !== o && (this.currentMiterLimit = o, this.stack[this.cArrPos].miterLimit = o);
    }, CVContextData.prototype.transform = function(o) {
      this.transformMat.cloneFromProps(o);
      var s = this.cTr;
      this.transformMat.multiply(s), s.cloneFromProps(this.transformMat.props);
      var h = s.props;
      this.nativeContext.setTransform(h[0], h[1], h[4], h[5], h[12], h[13]);
    }, CVContextData.prototype.opacity = function(o) {
      var s = this.stack[this.cArrPos].opacity;
      s *= o < 0 ? 0 : o, this.stack[this.cArrPos].opacity !== s && (this.currentOpacity !== o && (this.nativeContext.globalAlpha = o, this.currentOpacity = o), this.stack[this.cArrPos].opacity = s);
    }, CVContextData.prototype.fill = function(o) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(o);
    }, CVContextData.prototype.fillRect = function(o, s, h, g) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(o, s, h, g);
    }, CVContextData.prototype.stroke = function() {
      this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke();
    }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
      var o, s = this.canvasContext;
      for (s.beginPath(), s.moveTo(0, 0), s.lineTo(this.data.w, 0), s.lineTo(this.data.w, this.data.h), s.lineTo(0, this.data.h), s.lineTo(0, 0), s.clip(), o = this.layers.length - 1; o >= 0; o -= 1) (this.completeLayers || this.elements[o]) && this.elements[o].renderFrame();
    }, CVCompElement.prototype.destroy = function() {
      var o;
      for (o = this.layers.length - 1; o >= 0; o -= 1) this.elements[o] && this.elements[o].destroy();
      this.layers = null, this.elements = null;
    }, CVCompElement.prototype.createComp = function(o) {
      return new CVCompElement(o, this.globalData, this);
    }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(o) {
      return new CVCompElement(o, this.globalData, this);
    }, HBaseElement.prototype = { checkBlendMode: function() {
    }, initRendererElement: function() {
      this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
    }, createContainerElements: function() {
      this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode();
    }, renderElement: function() {
      var o = this.transformedElement ? this.transformedElement.style : {};
      if (this.finalTransform._matMdf) {
        var s = this.finalTransform.mat.toCSS();
        o.transform = s, o.webkitTransform = s;
      }
      this.finalTransform._opMdf && (o.opacity = this.finalTransform.mProp.o.v);
    }, renderFrame: function() {
      this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
    }, destroy: function() {
      this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
    }, createRenderableComponents: function() {
      this.maskManager = new MaskElement(this.data, this, this.globalData);
    }, addEffects: function() {
    }, setMatte: function() {
    } }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
      var o;
      this.data.hasMask ? ((o = createNS("rect")).setAttribute("width", this.data.sw), o.setAttribute("height", this.data.sh), o.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((o = createTag("div")).style.width = this.data.sw + "px", o.style.height = this.data.sh + "px", o.style.backgroundColor = this.data.sc), this.layerElement.appendChild(o);
    }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
      var o;
      if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), o = this.svgElement;
      else {
        o = createNS("svg");
        var s = this.comp.data ? this.comp.data : this.globalData.compSize;
        o.setAttribute("width", s.w), o.setAttribute("height", s.h), o.appendChild(this.shapesContainer), this.layerElement.appendChild(o);
      }
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = o;
    }, HShapeElement.prototype.getTransformedPoint = function(o, s) {
      var h, g = o.length;
      for (h = 0; h < g; h += 1) s = o[h].mProps.v.applyToPointArray(s[0], s[1], 0);
      return s;
    }, HShapeElement.prototype.calculateShapeBoundingBox = function(o, s) {
      var h, g, j, tt, rt, at = o.sh.v, it = o.transformers, st = at._length;
      if (!(st <= 1)) {
        for (h = 0; h < st - 1; h += 1) g = this.getTransformedPoint(it, at.v[h]), j = this.getTransformedPoint(it, at.o[h]), tt = this.getTransformedPoint(it, at.i[h + 1]), rt = this.getTransformedPoint(it, at.v[h + 1]), this.checkBounds(g, j, tt, rt, s);
        at.c && (g = this.getTransformedPoint(it, at.v[h]), j = this.getTransformedPoint(it, at.o[h]), tt = this.getTransformedPoint(it, at.i[0]), rt = this.getTransformedPoint(it, at.v[0]), this.checkBounds(g, j, tt, rt, s));
      }
    }, HShapeElement.prototype.checkBounds = function(o, s, h, g, j) {
      this.getBoundsOfCurve(o, s, h, g);
      var tt = this.shapeBoundingBox;
      j.x = bmMin(tt.left, j.x), j.xMax = bmMax(tt.right, j.xMax), j.y = bmMin(tt.top, j.y), j.yMax = bmMax(tt.bottom, j.yMax);
    }, HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }, HShapeElement.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }, HShapeElement.prototype.getBoundsOfCurve = function(o, s, h, g) {
      for (var j, tt, rt, at, it, st, lt, ot = [[o[0], g[0]], [o[1], g[1]]], ft = 0; ft < 2; ++ft) tt = 6 * o[ft] - 12 * s[ft] + 6 * h[ft], j = -3 * o[ft] + 9 * s[ft] - 9 * h[ft] + 3 * g[ft], rt = 3 * s[ft] - 3 * o[ft], tt |= 0, rt |= 0, (j |= 0) == 0 && tt === 0 || (j === 0 ? (at = -rt / tt) > 0 && at < 1 && ot[ft].push(this.calculateF(at, o, s, h, g, ft)) : (it = tt * tt - 4 * rt * j) >= 0 && ((st = (-tt + bmSqrt(it)) / (2 * j)) > 0 && st < 1 && ot[ft].push(this.calculateF(st, o, s, h, g, ft)), (lt = (-tt - bmSqrt(it)) / (2 * j)) > 0 && lt < 1 && ot[ft].push(this.calculateF(lt, o, s, h, g, ft))));
      this.shapeBoundingBox.left = bmMin.apply(null, ot[0]), this.shapeBoundingBox.top = bmMin.apply(null, ot[1]), this.shapeBoundingBox.right = bmMax.apply(null, ot[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, ot[1]);
    }, HShapeElement.prototype.calculateF = function(o, s, h, g, j, tt) {
      return bmPow(1 - o, 3) * s[tt] + 3 * bmPow(1 - o, 2) * o * h[tt] + 3 * (1 - o) * bmPow(o, 2) * g[tt] + bmPow(o, 3) * j[tt];
    }, HShapeElement.prototype.calculateBoundingBox = function(o, s) {
      var h, g = o.length;
      for (h = 0; h < g; h += 1) o[h] && o[h].sh ? this.calculateShapeBoundingBox(o[h], s) : o[h] && o[h].it ? this.calculateBoundingBox(o[h].it, s) : o[h] && o[h].style && o[h].w && this.expandStrokeBoundingBox(o[h].w, s);
    }, HShapeElement.prototype.expandStrokeBoundingBox = function(o, s) {
      var h = 0;
      if (o.keyframes) {
        for (var g = 0; g < o.keyframes.length; g += 1) {
          var j = o.keyframes[g].s;
          j > h && (h = j);
        }
        h *= o.mult;
      } else h = o.v * o.mult;
      s.x -= h, s.xMax += h, s.y -= h, s.yMax += h;
    }, HShapeElement.prototype.currentBoxContains = function(o) {
      return this.currentBBox.x <= o.x && this.currentBBox.y <= o.y && this.currentBBox.width + this.currentBBox.x >= o.x + o.width && this.currentBBox.height + this.currentBBox.y >= o.y + o.height;
    }, HShapeElement.prototype.renderInnerContent = function() {
      if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
        var o = this.tempBoundingBox, s = 999999;
        if (o.x = s, o.xMax = -s, o.y = s, o.yMax = -s, this.calculateBoundingBox(this.itemsData, o), o.width = o.xMax < o.x ? 0 : o.xMax - o.x, o.height = o.yMax < o.y ? 0 : o.yMax - o.y, this.currentBoxContains(o)) return;
        var h = !1;
        if (this.currentBBox.w !== o.width && (this.currentBBox.w = o.width, this.shapeCont.setAttribute("width", o.width), h = !0), this.currentBBox.h !== o.height && (this.currentBBox.h = o.height, this.shapeCont.setAttribute("height", o.height), h = !0), h || this.currentBBox.x !== o.x || this.currentBBox.y !== o.y) {
          this.currentBBox.w = o.width, this.currentBBox.h = o.height, this.currentBBox.x = o.x, this.currentBBox.y = o.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
          var g = this.shapeCont.style, j = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
          g.transform = j, g.webkitTransform = j;
        }
      }
    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
      if (this.isMasked = this.checkMasks(), this.isMasked) {
        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
        var o = createNS("g");
        this.maskedElement.appendChild(o), this.innerElem = o;
      } else this.renderType = "html", this.innerElem = this.layerElement;
      this.checkParenting();
    }, HTextElement.prototype.buildNewText = function() {
      var o = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(o.l ? o.l.length : 0);
      var s = this.innerElem.style, h = o.fc ? this.buildColor(o.fc) : "rgba(0,0,0,0)";
      s.fill = h, s.color = h, o.sc && (s.stroke = this.buildColor(o.sc), s.strokeWidth = o.sw + "px");
      var g = this.globalData.fontManager.getFontByName(o.f);
      if (!this.globalData.fontManager.chars) if (s.fontSize = o.finalSize + "px", s.lineHeight = o.finalSize + "px", g.fClass) this.innerElem.className = g.fClass;
      else {
        s.fontFamily = g.fFamily;
        var j = o.fWeight, tt = o.fStyle;
        s.fontStyle = tt, s.fontWeight = j;
      }
      var rt, at, it = o.l;
      at = it.length;
      var st, lt, ot, ft, ht = this.mHelper, pt = "", dt = 0;
      for (rt = 0; rt < at; rt += 1) {
        if (this.globalData.fontManager.chars ? (this.textPaths[dt] ? st = this.textPaths[dt] : ((st = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), st.setAttribute("stroke-linejoin", lineJoinEnum[2]), st.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[dt] ? ot = (lt = this.textSpans[dt]).children[0] : ((lt = createTag("div")).style.lineHeight = 0, (ot = createNS("svg")).appendChild(st), styleDiv(lt)))) : this.isMasked ? st = this.textPaths[dt] ? this.textPaths[dt] : createNS("text") : this.textSpans[dt] ? (lt = this.textSpans[dt], st = this.textPaths[dt]) : (styleDiv(lt = createTag("span")), styleDiv(st = createTag("span")), lt.appendChild(st)), this.globalData.fontManager.chars) {
          var ct, mt = this.globalData.fontManager.getCharData(o.finalText[rt], g.fStyle, this.globalData.fontManager.getFontByName(o.f).fFamily);
          if (ct = mt ? mt.data : null, ht.reset(), ct && ct.shapes && ct.shapes.length && (ft = ct.shapes[0].it, ht.scale(o.finalSize / 100, o.finalSize / 100), pt = this.createPathShape(ht, ft), st.setAttribute("d", pt)), this.isMasked) this.innerElem.appendChild(st);
          else {
            if (this.innerElem.appendChild(lt), ct && ct.shapes) {
              document.body.appendChild(ot);
              var yt = ot.getBBox();
              ot.setAttribute("width", yt.width + 2), ot.setAttribute("height", yt.height + 2), ot.setAttribute("viewBox", yt.x - 1 + " " + (yt.y - 1) + " " + (yt.width + 2) + " " + (yt.height + 2));
              var vt = ot.style, _t = "translate(" + (yt.x - 1) + "px," + (yt.y - 1) + "px)";
              vt.transform = _t, vt.webkitTransform = _t, it[rt].yOffset = yt.y - 1;
            } else ot.setAttribute("width", 1), ot.setAttribute("height", 1);
            lt.appendChild(ot);
          }
        } else if (st.textContent = it[rt].val, st.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(st);
        else {
          this.innerElem.appendChild(lt);
          var Pt = st.style, bt = "translate3d(0," + -o.finalSize / 1.2 + "px,0)";
          Pt.transform = bt, Pt.webkitTransform = bt;
        }
        this.isMasked ? this.textSpans[dt] = st : this.textSpans[dt] = lt, this.textSpans[dt].style.display = "block", this.textPaths[dt] = st, dt += 1;
      }
      for (; dt < this.textSpans.length; ) this.textSpans[dt].style.display = "none", dt += 1;
    }, HTextElement.prototype.renderInnerContent = function() {
      var o;
      if (this.validateText(), this.data.singleShape) {
        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
        if (this.isMasked && this.finalTransform._matMdf) {
          this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), o = this.svgElement.style;
          var s = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
          o.transform = s, o.webkitTransform = s;
        }
      }
      if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
        var h, g, j, tt, rt, at = 0, it = this.textAnimator.renderedLetters, st = this.textProperty.currentData.l;
        for (g = st.length, h = 0; h < g; h += 1) st[h].n ? at += 1 : (tt = this.textSpans[h], rt = this.textPaths[h], j = it[at], at += 1, j._mdf.m && (this.isMasked ? tt.setAttribute("transform", j.m) : (tt.style.webkitTransform = j.m, tt.style.transform = j.m)), tt.style.opacity = j.o, j.sw && j._mdf.sw && rt.setAttribute("stroke-width", j.sw), j.sc && j._mdf.sc && rt.setAttribute("stroke", j.sc), j.fc && j._mdf.fc && (rt.setAttribute("fill", j.fc), rt.style.color = j.fc));
        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
          var lt = this.innerElem.getBBox();
          if (this.currentBBox.w !== lt.width && (this.currentBBox.w = lt.width, this.svgElement.setAttribute("width", lt.width)), this.currentBBox.h !== lt.height && (this.currentBBox.h = lt.height, this.svgElement.setAttribute("height", lt.height)), this.currentBBox.w !== lt.width + 2 || this.currentBBox.h !== lt.height + 2 || this.currentBBox.x !== lt.x - 1 || this.currentBBox.y !== lt.y - 1) {
            this.currentBBox.w = lt.width + 2, this.currentBBox.h = lt.height + 2, this.currentBBox.x = lt.x - 1, this.currentBBox.y = lt.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), o = this.svgElement.style;
            var ot = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            o.transform = ot, o.webkitTransform = ot;
          }
        }
      }
    }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
      var o, s, h, g, j = this.comp.threeDElements.length;
      for (o = 0; o < j; o += 1) if ((s = this.comp.threeDElements[o]).type === "3d") {
        h = s.perspectiveElem.style, g = s.container.style;
        var tt = this.pe.v + "px", rt = "0px 0px 0px", at = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        h.perspective = tt, h.webkitPerspective = tt, g.transformOrigin = rt, g.mozTransformOrigin = rt, g.webkitTransformOrigin = rt, h.transform = at, h.webkitTransform = at;
      }
    }, HCameraElement.prototype.createElements = function() {
    }, HCameraElement.prototype.hide = function() {
    }, HCameraElement.prototype.renderFrame = function() {
      var o, s, h = this._isFirstFrame;
      if (this.hierarchy) for (s = this.hierarchy.length, o = 0; o < s; o += 1) h = this.hierarchy[o].finalTransform.mProp._mdf || h;
      if (h || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
        if (this.mat.reset(), this.hierarchy) for (o = s = this.hierarchy.length - 1; o >= 0; o -= 1) {
          var g = this.hierarchy[o].finalTransform.mProp;
          this.mat.translate(-g.p.v[0], -g.p.v[1], g.p.v[2]), this.mat.rotateX(-g.or.v[0]).rotateY(-g.or.v[1]).rotateZ(g.or.v[2]), this.mat.rotateX(-g.rx.v).rotateY(-g.ry.v).rotateZ(g.rz.v), this.mat.scale(1 / g.s.v[0], 1 / g.s.v[1], 1 / g.s.v[2]), this.mat.translate(g.a.v[0], g.a.v[1], g.a.v[2]);
        }
        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
          var j;
          j = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
          var tt = Math.sqrt(Math.pow(j[0], 2) + Math.pow(j[1], 2) + Math.pow(j[2], 2)), rt = [j[0] / tt, j[1] / tt, j[2] / tt], at = Math.sqrt(rt[2] * rt[2] + rt[0] * rt[0]), it = Math.atan2(rt[1], at), st = Math.atan2(rt[0], -rt[2]);
          this.mat.rotateY(st).rotateX(-it);
        }
        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
        var lt = !this._prevMat.equals(this.mat);
        if ((lt || this.pe._mdf) && this.comp.threeDElements) {
          var ot, ft, ht;
          for (s = this.comp.threeDElements.length, o = 0; o < s; o += 1) if ((ot = this.comp.threeDElements[o]).type === "3d") {
            if (lt) {
              var pt = this.mat.toCSS();
              (ht = ot.container.style).transform = pt, ht.webkitTransform = pt;
            }
            this.pe._mdf && ((ft = ot.perspectiveElem.style).perspective = this.pe.v + "px", ft.webkitPerspective = this.pe.v + "px");
          }
          this.mat.clone(this._prevMat);
        }
      }
      this._isFirstFrame = !1;
    }, HCameraElement.prototype.prepareFrame = function(o) {
      this.prepareProperties(o, !0);
    }, HCameraElement.prototype.destroy = function() {
    }, HCameraElement.prototype.getBaseElement = function() {
      return null;
    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
      var o = this.globalData.getAssetsPath(this.assetData), s = new Image();
      this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(s), s.crossOrigin = "anonymous", s.src = o, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
    }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) this.pendingElements.pop().checkParenting();
    }, HybridRendererBase.prototype.appendElementInPos = function(o, s) {
      var h = o.getBaseElement();
      if (h) {
        var g = this.layers[s];
        if (g.ddd && this.supports3d) this.addTo3dContainer(h, s);
        else if (this.threeDElements) this.addTo3dContainer(h, s);
        else {
          for (var j, tt, rt = 0; rt < s; ) this.elements[rt] && this.elements[rt] !== !0 && this.elements[rt].getBaseElement && (tt = this.elements[rt], j = (this.layers[rt].ddd ? this.getThreeDContainerByPos(rt) : tt.getBaseElement()) || j), rt += 1;
          j ? (!g.ddd || !this.supports3d) && this.layerElement.insertBefore(h, j) : (!g.ddd || !this.supports3d) && this.layerElement.appendChild(h);
        }
      }
    }, HybridRendererBase.prototype.createShape = function(o) {
      return this.supports3d ? new HShapeElement(o, this.globalData, this) : new SVGShapeElement(o, this.globalData, this);
    }, HybridRendererBase.prototype.createText = function(o) {
      return this.supports3d ? new HTextElement(o, this.globalData, this) : new SVGTextLottieElement(o, this.globalData, this);
    }, HybridRendererBase.prototype.createCamera = function(o) {
      return this.camera = new HCameraElement(o, this.globalData, this), this.camera;
    }, HybridRendererBase.prototype.createImage = function(o) {
      return this.supports3d ? new HImageElement(o, this.globalData, this) : new IImageElement(o, this.globalData, this);
    }, HybridRendererBase.prototype.createSolid = function(o) {
      return this.supports3d ? new HSolidElement(o, this.globalData, this) : new ISolidElement(o, this.globalData, this);
    }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(o) {
      for (var s = 0, h = this.threeDElements.length; s < h; ) {
        if (this.threeDElements[s].startPos <= o && this.threeDElements[s].endPos >= o) return this.threeDElements[s].perspectiveElem;
        s += 1;
      }
      return null;
    }, HybridRendererBase.prototype.createThreeDContainer = function(o, s) {
      var h, g, j = createTag("div");
      styleDiv(j);
      var tt = createTag("div");
      if (styleDiv(tt), s === "3d") {
        (h = j.style).width = this.globalData.compSize.w + "px", h.height = this.globalData.compSize.h + "px";
        var rt = "50% 50%";
        h.webkitTransformOrigin = rt, h.mozTransformOrigin = rt, h.transformOrigin = rt;
        var at = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        (g = tt.style).transform = at, g.webkitTransform = at;
      }
      j.appendChild(tt);
      var it = { container: tt, perspectiveElem: j, startPos: o, endPos: o, type: s };
      return this.threeDElements.push(it), it;
    }, HybridRendererBase.prototype.build3dContainers = function() {
      var o, s, h = this.layers.length, g = "";
      for (o = 0; o < h; o += 1) this.layers[o].ddd && this.layers[o].ty !== 3 ? (g !== "3d" && (g = "3d", s = this.createThreeDContainer(o, "3d")), s.endPos = Math.max(s.endPos, o)) : (g !== "2d" && (g = "2d", s = this.createThreeDContainer(o, "2d")), s.endPos = Math.max(s.endPos, o));
      for (o = (h = this.threeDElements.length) - 1; o >= 0; o -= 1) this.resizerElem.appendChild(this.threeDElements[o].perspectiveElem);
    }, HybridRendererBase.prototype.addTo3dContainer = function(o, s) {
      for (var h = 0, g = this.threeDElements.length; h < g; ) {
        if (s <= this.threeDElements[h].endPos) {
          for (var j, tt = this.threeDElements[h].startPos; tt < s; ) this.elements[tt] && this.elements[tt].getBaseElement && (j = this.elements[tt].getBaseElement()), tt += 1;
          j ? this.threeDElements[h].container.insertBefore(o, j) : this.threeDElements[h].container.appendChild(o);
          break;
        }
        h += 1;
      }
    }, HybridRendererBase.prototype.configAnimation = function(o) {
      var s = createTag("div"), h = this.animationItem.wrapper, g = s.style;
      g.width = o.w + "px", g.height = o.h + "px", this.resizerElem = s, styleDiv(s), g.transformStyle = "flat", g.mozTransformStyle = "flat", g.webkitTransformStyle = "flat", this.renderConfig.className && s.setAttribute("class", this.renderConfig.className), h.appendChild(s), g.overflow = "hidden";
      var j = createNS("svg");
      j.setAttribute("width", "1"), j.setAttribute("height", "1"), styleDiv(j), this.resizerElem.appendChild(j);
      var tt = createNS("defs");
      j.appendChild(tt), this.data = o, this.setupGlobalData(o, j), this.globalData.defs = tt, this.layers = o.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
    }, HybridRendererBase.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
      var o, s = this.layers ? this.layers.length : 0;
      for (o = 0; o < s; o += 1) this.elements[o] && this.elements[o].destroy && this.elements[o].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, HybridRendererBase.prototype.updateContainerSize = function() {
      var o, s, h, g, j = this.animationItem.wrapper.offsetWidth, tt = this.animationItem.wrapper.offsetHeight, rt = j / tt;
      this.globalData.compSize.w / this.globalData.compSize.h > rt ? (o = j / this.globalData.compSize.w, s = j / this.globalData.compSize.w, h = 0, g = (tt - this.globalData.compSize.h * (j / this.globalData.compSize.w)) / 2) : (o = tt / this.globalData.compSize.h, s = tt / this.globalData.compSize.h, h = (j - this.globalData.compSize.w * (tt / this.globalData.compSize.h)) / 2, g = 0);
      var at = this.resizerElem.style;
      at.webkitTransform = "matrix3d(" + o + ",0,0,0,0," + s + ",0,0,0,0,1,0," + h + "," + g + ",0,1)", at.transform = at.webkitTransform;
    }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
      this.resizerElem.style.display = "none";
    }, HybridRendererBase.prototype.show = function() {
      this.resizerElem.style.display = "block";
    }, HybridRendererBase.prototype.initItems = function() {
      if (this.buildAllItems(), this.camera) this.camera.setup();
      else {
        var o, s = this.globalData.compSize.w, h = this.globalData.compSize.h, g = this.threeDElements.length;
        for (o = 0; o < g; o += 1) {
          var j = this.threeDElements[o].perspectiveElem.style;
          j.webkitPerspective = Math.sqrt(Math.pow(s, 2) + Math.pow(h, 2)) + "px", j.perspective = j.webkitPerspective;
        }
      }
    }, HybridRendererBase.prototype.searchExtraCompositions = function(o) {
      var s, h = o.length, g = createTag("div");
      for (s = 0; s < h; s += 1) if (o[s].xt) {
        var j = this.createComp(o[s], g, this.globalData.comp, null);
        j.initExpressions(), this.globalData.projectInterface.registerComposition(j);
      }
    }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
      this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
    }, HCompElement.prototype.addTo3dContainer = function(o, s) {
      for (var h, g = 0; g < s; ) this.elements[g] && this.elements[g].getBaseElement && (h = this.elements[g].getBaseElement()), g += 1;
      h ? this.layerElement.insertBefore(o, h) : this.layerElement.appendChild(o);
    }, HCompElement.prototype.createComp = function(o) {
      return this.supports3d ? new HCompElement(o, this.globalData, this) : new SVGCompElement(o, this.globalData, this);
    }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(o) {
      return this.supports3d ? new HCompElement(o, this.globalData, this) : new SVGCompElement(o, this.globalData, this);
    };
    var CompExpressionInterface = /* @__PURE__ */ function() {
      return function(o) {
        function s(h) {
          for (var g = 0, j = o.layers.length; g < j; ) {
            if (o.layers[g].nm === h || o.layers[g].ind === h) return o.elements[g].layerInterface;
            g += 1;
          }
          return null;
        }
        return Object.defineProperty(s, "_name", { value: o.data.nm }), s.layer = s, s.pixelAspect = 1, s.height = o.data.h || o.globalData.compSize.h, s.width = o.data.w || o.globalData.compSize.w, s.pixelAspect = 1, s.frameDuration = 1 / o.globalData.frameRate, s.displayStartTime = 0, s.numLayers = o.layers.length, s;
      };
    }();
    function _typeof$2(o) {
      return (_typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
        return typeof s;
      } : function(s) {
        return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
      })(o);
    }
    function seedRandom(o, s) {
      var h = this, g = 256, j = "random", tt = s.pow(g, 6), rt = s.pow(2, 52), at = 2 * rt, it = 255;
      function st(pt) {
        var dt, ct = pt.length, mt = this, yt = 0, vt = mt.i = mt.j = 0, _t = mt.S = [];
        for (ct || (pt = [ct++]); yt < g; ) _t[yt] = yt++;
        for (yt = 0; yt < g; yt++) _t[yt] = _t[vt = it & vt + pt[yt % ct] + (dt = _t[yt])], _t[vt] = dt;
        mt.g = function(Pt) {
          for (var bt, kt = 0, wt = mt.i, xt = mt.j, Tt = mt.S; Pt--; ) bt = Tt[wt = it & wt + 1], kt = kt * g + Tt[it & (Tt[wt] = Tt[xt = it & xt + bt]) + (Tt[xt] = bt)];
          return mt.i = wt, mt.j = xt, kt;
        };
      }
      function lt(pt, dt) {
        return dt.i = pt.i, dt.j = pt.j, dt.S = pt.S.slice(), dt;
      }
      function ot(pt, dt) {
        var ct, mt = [], yt = _typeof$2(pt);
        if (dt && yt == "object") for (ct in pt) try {
          mt.push(ot(pt[ct], dt - 1));
        } catch {
        }
        return mt.length ? mt : yt == "string" ? pt : pt + "\0";
      }
      function ft(pt, dt) {
        for (var ct, mt = pt + "", yt = 0; yt < mt.length; ) dt[it & yt] = it & (ct ^= 19 * dt[it & yt]) + mt.charCodeAt(yt++);
        return ht(dt);
      }
      function ht(pt) {
        return String.fromCharCode.apply(0, pt);
      }
      s["seed" + j] = function(pt, dt, ct) {
        var mt = [], yt = ft(ot((dt = dt === !0 ? { entropy: !0 } : dt || {}).entropy ? [pt, ht(o)] : pt === null ? function() {
          try {
            var Pt = new Uint8Array(g);
            return (h.crypto || h.msCrypto).getRandomValues(Pt), ht(Pt);
          } catch {
            var bt = h.navigator, kt = bt && bt.plugins;
            return [+/* @__PURE__ */ new Date(), h, kt, h.screen, ht(o)];
          }
        }() : pt, 3), mt), vt = new st(mt), _t = function() {
          for (var Pt = vt.g(6), bt = tt, kt = 0; Pt < rt; ) Pt = (Pt + kt) * g, bt *= g, kt = vt.g(1);
          for (; Pt >= at; ) Pt /= 2, bt /= 2, kt >>>= 1;
          return (Pt + kt) / bt;
        };
        return _t.int32 = function() {
          return 0 | vt.g(4);
        }, _t.quick = function() {
          return vt.g(4) / 4294967296;
        }, _t.double = _t, ft(ht(vt.S), o), (dt.pass || ct || function(Pt, bt, kt, wt) {
          return wt && (wt.S && lt(wt, vt), Pt.state = function() {
            return lt(vt, {});
          }), kt ? (s[j] = Pt, bt) : Pt;
        })(_t, yt, "global" in dt ? dt.global : this == s, dt.state);
      }, ft(s.random(), o);
    }
    function initialize$2(o) {
      seedRandom([], o);
    }
    var propTypes = { SHAPE: "shape" };
    function _typeof$1(o) {
      return (_typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
        return typeof s;
      } : function(s) {
        return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
      })(o);
    }
    var ExpressionManager = function() {
      var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null, frames = null, _lottieGlobal = {};
      function resetFrame() {
        _lottieGlobal = {};
      }
      function $bm_isInstanceOfArray(o) {
        return o.constructor === Array || o.constructor === Float32Array;
      }
      function isNumerable(o, s) {
        return o === "number" || s instanceof Number || o === "boolean" || o === "string";
      }
      function $bm_neg(o) {
        var s = _typeof$1(o);
        if (s === "number" || o instanceof Number || s === "boolean") return -o;
        if ($bm_isInstanceOfArray(o)) {
          var h, g = o.length, j = [];
          for (h = 0; h < g; h += 1) j[h] = -o[h];
          return j;
        }
        return o.propType ? o.v : -o;
      }
      initialize$2(BMMath);
      var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
      function sum(o, s) {
        var h = _typeof$1(o), g = _typeof$1(s);
        if (isNumerable(h, o) && isNumerable(g, s) || h === "string" || g === "string") return o + s;
        if ($bm_isInstanceOfArray(o) && isNumerable(g, s)) return (o = o.slice(0))[0] += s, o;
        if (isNumerable(h, o) && $bm_isInstanceOfArray(s)) return (s = s.slice(0))[0] = o + s[0], s;
        if ($bm_isInstanceOfArray(o) && $bm_isInstanceOfArray(s)) {
          for (var j = 0, tt = o.length, rt = s.length, at = []; j < tt || j < rt; ) (typeof o[j] == "number" || o[j] instanceof Number) && (typeof s[j] == "number" || s[j] instanceof Number) ? at[j] = o[j] + s[j] : at[j] = s[j] === void 0 ? o[j] : o[j] || s[j], j += 1;
          return at;
        }
        return 0;
      }
      var add = sum;
      function sub(o, s) {
        var h = _typeof$1(o), g = _typeof$1(s);
        if (isNumerable(h, o) && isNumerable(g, s)) return h === "string" && (o = parseInt(o, 10)), g === "string" && (s = parseInt(s, 10)), o - s;
        if ($bm_isInstanceOfArray(o) && isNumerable(g, s)) return (o = o.slice(0))[0] -= s, o;
        if (isNumerable(h, o) && $bm_isInstanceOfArray(s)) return (s = s.slice(0))[0] = o - s[0], s;
        if ($bm_isInstanceOfArray(o) && $bm_isInstanceOfArray(s)) {
          for (var j = 0, tt = o.length, rt = s.length, at = []; j < tt || j < rt; ) (typeof o[j] == "number" || o[j] instanceof Number) && (typeof s[j] == "number" || s[j] instanceof Number) ? at[j] = o[j] - s[j] : at[j] = s[j] === void 0 ? o[j] : o[j] || s[j], j += 1;
          return at;
        }
        return 0;
      }
      function mul(o, s) {
        var h, g, j, tt = _typeof$1(o), rt = _typeof$1(s);
        if (isNumerable(tt, o) && isNumerable(rt, s)) return o * s;
        if ($bm_isInstanceOfArray(o) && isNumerable(rt, s)) {
          for (j = o.length, h = createTypedArray("float32", j), g = 0; g < j; g += 1) h[g] = o[g] * s;
          return h;
        }
        if (isNumerable(tt, o) && $bm_isInstanceOfArray(s)) {
          for (j = s.length, h = createTypedArray("float32", j), g = 0; g < j; g += 1) h[g] = o * s[g];
          return h;
        }
        return 0;
      }
      function div(o, s) {
        var h, g, j, tt = _typeof$1(o), rt = _typeof$1(s);
        if (isNumerable(tt, o) && isNumerable(rt, s)) return o / s;
        if ($bm_isInstanceOfArray(o) && isNumerable(rt, s)) {
          for (j = o.length, h = createTypedArray("float32", j), g = 0; g < j; g += 1) h[g] = o[g] / s;
          return h;
        }
        if (isNumerable(tt, o) && $bm_isInstanceOfArray(s)) {
          for (j = s.length, h = createTypedArray("float32", j), g = 0; g < j; g += 1) h[g] = o / s[g];
          return h;
        }
        return 0;
      }
      function mod(o, s) {
        return typeof o == "string" && (o = parseInt(o, 10)), typeof s == "string" && (s = parseInt(s, 10)), o % s;
      }
      var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
      function clamp(o, s, h) {
        if (s > h) {
          var g = h;
          h = s, s = g;
        }
        return Math.min(Math.max(o, s), h);
      }
      function radiansToDegrees(o) {
        return o / degToRads;
      }
      var radians_to_degrees = radiansToDegrees;
      function degreesToRadians(o) {
        return o * degToRads;
      }
      var degrees_to_radians = radiansToDegrees, helperLengthArray = [0, 0, 0, 0, 0, 0];
      function length(o, s) {
        if (typeof o == "number" || o instanceof Number) return s = s || 0, Math.abs(o - s);
        s || (s = helperLengthArray);
        var h, g = Math.min(o.length, s.length), j = 0;
        for (h = 0; h < g; h += 1) j += Math.pow(s[h] - o[h], 2);
        return Math.sqrt(j);
      }
      function normalize(o) {
        return div(o, length(o));
      }
      function rgbToHsl(o) {
        var s, h, g = o[0], j = o[1], tt = o[2], rt = Math.max(g, j, tt), at = Math.min(g, j, tt), it = (rt + at) / 2;
        if (rt === at) s = 0, h = 0;
        else {
          var st = rt - at;
          switch (h = it > 0.5 ? st / (2 - rt - at) : st / (rt + at), rt) {
            case g:
              s = (j - tt) / st + (j < tt ? 6 : 0);
              break;
            case j:
              s = (tt - g) / st + 2;
              break;
            case tt:
              s = (g - j) / st + 4;
          }
          s /= 6;
        }
        return [s, h, it, o[3]];
      }
      function hue2rgb(o, s, h) {
        return h < 0 && (h += 1), h > 1 && (h -= 1), h < 1 / 6 ? o + 6 * (s - o) * h : h < 0.5 ? s : h < 2 / 3 ? o + (s - o) * (2 / 3 - h) * 6 : o;
      }
      function hslToRgb(o) {
        var s, h, g, j = o[0], tt = o[1], rt = o[2];
        if (tt === 0) s = rt, g = rt, h = rt;
        else {
          var at = rt < 0.5 ? rt * (1 + tt) : rt + tt - rt * tt, it = 2 * rt - at;
          s = hue2rgb(it, at, j + 1 / 3), h = hue2rgb(it, at, j), g = hue2rgb(it, at, j - 1 / 3);
        }
        return [s, h, g, o[3]];
      }
      function linear(o, s, h, g, j) {
        if ((g === void 0 || j === void 0) && (g = s, j = h, s = 0, h = 1), h < s) {
          var tt = h;
          h = s, s = tt;
        }
        if (o <= s) return g;
        if (o >= h) return j;
        var rt = h === s ? 0 : (o - s) / (h - s);
        if (!g.length) return g + (j - g) * rt;
        var at, it = g.length, st = createTypedArray("float32", it);
        for (at = 0; at < it; at += 1) st[at] = g[at] + (j[at] - g[at]) * rt;
        return st;
      }
      function random(o, s) {
        if (s === void 0 && (o === void 0 ? (o = 0, s = 1) : (s = o, o = void 0)), s.length) {
          var h, g = s.length;
          o || (o = createTypedArray("float32", g));
          var j = createTypedArray("float32", g), tt = BMMath.random();
          for (h = 0; h < g; h += 1) j[h] = o[h] + tt * (s[h] - o[h]);
          return j;
        }
        return o === void 0 && (o = 0), o + BMMath.random() * (s - o);
      }
      function createPath(o, s, h, g) {
        var j, tt = o.length, rt = shapePool.newElement();
        rt.setPathData(!!g, tt);
        var at, it, st = [0, 0];
        for (j = 0; j < tt; j += 1) at = s && s[j] ? s[j] : st, it = h && h[j] ? h[j] : st, rt.setTripleAt(o[j][0], o[j][1], it[0] + o[j][0], it[1] + o[j][1], at[0] + o[j][0], at[1] + o[j][1], j, !0);
        return rt;
      }
      function initiateExpression(elem, data, property) {
        function noOp(o) {
          return o;
        }
        if (!elem.globalData.renderConfig.runExpressions) return noOp;
        var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = val.indexOf("random") !== -1, elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
        thisProperty._name = elem.data.nm, thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", { get: function() {
          return thisProperty.v;
        } }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
        var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || this.data.hd !== !0, wiggle = (function(o, s) {
          var h, g, j = this.pv.length ? this.pv.length : 1, tt = createTypedArray("float32", j), rt = Math.floor(5 * time);
          for (h = 0, g = 0; h < rt; ) {
            for (g = 0; g < j; g += 1) tt[g] += -s + 2 * s * BMMath.random();
            h += 1;
          }
          var at = 5 * time, it = at - Math.floor(at), st = createTypedArray("float32", j);
          if (j > 1) {
            for (g = 0; g < j; g += 1) st[g] = this.pv[g] + tt[g] + (-s + 2 * s * BMMath.random()) * it;
            return st;
          }
          return this.pv + tt[0] + (-s + 2 * s * BMMath.random()) * it;
        }).bind(this);
        function loopInDuration(o, s) {
          return loopIn(o, s, !0);
        }
        function loopOutDuration(o, s) {
          return loopOut(o, s, !0);
        }
        thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
        function lookAt(o, s) {
          var h = [s[0] - o[0], s[1] - o[1], s[2] - o[2]], g = Math.atan2(h[0], Math.sqrt(h[1] * h[1] + h[2] * h[2])) / degToRads;
          return [-Math.atan2(h[1], h[2]) / degToRads, g, 0];
        }
        function easeOut(o, s, h, g, j) {
          return applyEase(easeOutBez, o, s, h, g, j);
        }
        function easeIn(o, s, h, g, j) {
          return applyEase(easeInBez, o, s, h, g, j);
        }
        function ease(o, s, h, g, j) {
          return applyEase(easeInOutBez, o, s, h, g, j);
        }
        function applyEase(o, s, h, g, j, tt) {
          j === void 0 ? (j = h, tt = g) : s = (s - h) / (g - h), s > 1 ? s = 1 : s < 0 && (s = 0);
          var rt = o(s);
          if ($bm_isInstanceOfArray(j)) {
            var at, it = j.length, st = createTypedArray("float32", it);
            for (at = 0; at < it; at += 1) st[at] = (tt[at] - j[at]) * rt + j[at];
            return st;
          }
          return (tt - j) * rt + j;
        }
        function nearestKey(o) {
          var s, h, g, j = data.k.length;
          if (data.k.length && typeof data.k[0] != "number") if (h = -1, (o *= elem.comp.globalData.frameRate) < data.k[0].t) h = 1, g = data.k[0].t;
          else {
            for (s = 0; s < j - 1; s += 1) {
              if (o === data.k[s].t) {
                h = s + 1, g = data.k[s].t;
                break;
              }
              if (o > data.k[s].t && o < data.k[s + 1].t) {
                o - data.k[s].t > data.k[s + 1].t - o ? (h = s + 2, g = data.k[s + 1].t) : (h = s + 1, g = data.k[s].t);
                break;
              }
            }
            h === -1 && (h = s + 1, g = data.k[s].t);
          }
          else h = 0, g = 0;
          var tt = {};
          return tt.index = h, tt.time = g / elem.comp.globalData.frameRate, tt;
        }
        function key(o) {
          var s, h, g;
          if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + o);
          o -= 1, s = { time: data.k[o].t / elem.comp.globalData.frameRate, value: [] };
          var j = Object.prototype.hasOwnProperty.call(data.k[o], "s") ? data.k[o].s : data.k[o - 1].e;
          for (g = j.length, h = 0; h < g; h += 1) s[h] = j[h], s.value[h] = j[h];
          return s;
        }
        function framesToTime(o, s) {
          return s || (s = elem.comp.globalData.frameRate), o / s;
        }
        function timeToFrames(o, s) {
          return !o && o !== 0 && (o = time), s || (s = elem.comp.globalData.frameRate), o * s;
        }
        function seedRandom(o) {
          BMMath.seedrandom(randSeed + o);
        }
        function sourceRectAtTime() {
          return elem.sourceRectAtTime();
        }
        function substring(o, s) {
          return typeof value == "string" ? s === void 0 ? value.substring(o) : value.substring(o, s) : "";
        }
        function substr(o, s) {
          return typeof value == "string" ? s === void 0 ? value.substr(o) : value.substr(o, s) : "";
        }
        function posterizeTime(o) {
          time = o === 0 ? 0 : Math.floor(time * o) / o, value = valueAtTime(time);
        }
        var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), parent, randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;
        function executeExpression(o) {
          return value = o, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType === 4 && !content && (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt);
        }
        return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression;
      }
      return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob;
    }(), Expressions = function() {
      var o = { initExpressions: function(s) {
        var h = 0, g = [];
        s.renderer.compInterface = CompExpressionInterface(s.renderer), s.renderer.globalData.projectInterface.registerComposition(s.renderer), s.renderer.globalData.pushExpression = function() {
          h += 1;
        }, s.renderer.globalData.popExpression = function() {
          (h -= 1) == 0 && function() {
            var j, tt = g.length;
            for (j = 0; j < tt; j += 1) g[j].release();
            g.length = 0;
          }();
        }, s.renderer.globalData.registerExpressionProperty = function(j) {
          g.indexOf(j) === -1 && g.push(j);
        };
      } };
      return o.resetFrame = ExpressionManager.resetFrame, o;
    }(), MaskManagerInterface = function() {
      function o(s, h) {
        this._mask = s, this._data = h;
      }
      return Object.defineProperty(o.prototype, "maskPath", { get: function() {
        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
      } }), Object.defineProperty(o.prototype, "maskOpacity", { get: function() {
        return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
      } }), function(s) {
        var h, g = createSizedArray(s.viewData.length), j = s.viewData.length;
        for (h = 0; h < j; h += 1) g[h] = new o(s.viewData[h], s.masksProperties[h]);
        return function(tt) {
          for (h = 0; h < j; ) {
            if (s.masksProperties[h].nm === tt) return g[h];
            h += 1;
          }
          return null;
        };
      };
    }(), ExpressionPropertyInterface = /* @__PURE__ */ function() {
      var o = { pv: 0, v: 0, mult: 1 }, s = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
      function h(j, tt, rt) {
        Object.defineProperty(j, "velocity", { get: function() {
          return tt.getVelocityAtTime(tt.comp.currentFrame);
        } }), j.numKeys = tt.keyframes ? tt.keyframes.length : 0, j.key = function(at) {
          if (!j.numKeys) return 0;
          var it = "";
          it = "s" in tt.keyframes[at - 1] ? tt.keyframes[at - 1].s : "e" in tt.keyframes[at - 2] ? tt.keyframes[at - 2].e : tt.keyframes[at - 2].s;
          var st = rt === "unidimensional" ? new Number(it) : Object.assign({}, it);
          return st.time = tt.keyframes[at - 1].t / tt.elem.comp.globalData.frameRate, st.value = rt === "unidimensional" ? it[0] : it, st;
        }, j.valueAtTime = tt.getValueAtTime, j.speedAtTime = tt.getSpeedAtTime, j.velocityAtTime = tt.getVelocityAtTime, j.propertyGroup = tt.propertyGroup;
      }
      function g() {
        return o;
      }
      return function(j) {
        return j ? j.propType === "unidimensional" ? function(tt) {
          (!tt || !("pv" in tt)) && (tt = o);
          var rt = 1 / tt.mult, at = tt.pv * rt, it = new Number(at);
          return it.value = at, h(it, tt, "unidimensional"), function() {
            return tt.k && tt.getValue(), at = tt.v * rt, it.value !== at && ((it = new Number(at)).value = at, it[0] = at, h(it, tt, "unidimensional")), it;
          };
        }(j) : function(tt) {
          (!tt || !("pv" in tt)) && (tt = s);
          var rt = 1 / tt.mult, at = tt.data && tt.data.l || tt.pv.length, it = createTypedArray("float32", at), st = createTypedArray("float32", at);
          return it.value = st, h(it, tt, "multidimensional"), function() {
            tt.k && tt.getValue();
            for (var lt = 0; lt < at; lt += 1) st[lt] = tt.v[lt] * rt, it[lt] = st[lt];
            return it;
          };
        }(j) : g;
      };
    }(), TransformExpressionInterface = /* @__PURE__ */ function() {
      return function(o) {
        function s(rt) {
          switch (rt) {
            case "scale":
            case "Scale":
            case "ADBE Scale":
            case 6:
              return s.scale;
            case "rotation":
            case "Rotation":
            case "ADBE Rotation":
            case "ADBE Rotate Z":
            case 10:
              return s.rotation;
            case "ADBE Rotate X":
              return s.xRotation;
            case "ADBE Rotate Y":
              return s.yRotation;
            case "position":
            case "Position":
            case "ADBE Position":
            case 2:
              return s.position;
            case "ADBE Position_0":
              return s.xPosition;
            case "ADBE Position_1":
              return s.yPosition;
            case "ADBE Position_2":
              return s.zPosition;
            case "anchorPoint":
            case "AnchorPoint":
            case "Anchor Point":
            case "ADBE AnchorPoint":
            case 1:
              return s.anchorPoint;
            case "opacity":
            case "Opacity":
            case 11:
              return s.opacity;
            default:
              return null;
          }
        }
        var h, g, j, tt;
        return Object.defineProperty(s, "rotation", { get: ExpressionPropertyInterface(o.r || o.rz) }), Object.defineProperty(s, "zRotation", { get: ExpressionPropertyInterface(o.rz || o.r) }), Object.defineProperty(s, "xRotation", { get: ExpressionPropertyInterface(o.rx) }), Object.defineProperty(s, "yRotation", { get: ExpressionPropertyInterface(o.ry) }), Object.defineProperty(s, "scale", { get: ExpressionPropertyInterface(o.s) }), o.p ? tt = ExpressionPropertyInterface(o.p) : (h = ExpressionPropertyInterface(o.px), g = ExpressionPropertyInterface(o.py), o.pz && (j = ExpressionPropertyInterface(o.pz))), Object.defineProperty(s, "position", { get: function() {
          return o.p ? tt() : [h(), g(), j ? j() : 0];
        } }), Object.defineProperty(s, "xPosition", { get: ExpressionPropertyInterface(o.px) }), Object.defineProperty(s, "yPosition", { get: ExpressionPropertyInterface(o.py) }), Object.defineProperty(s, "zPosition", { get: ExpressionPropertyInterface(o.pz) }), Object.defineProperty(s, "anchorPoint", { get: ExpressionPropertyInterface(o.a) }), Object.defineProperty(s, "opacity", { get: ExpressionPropertyInterface(o.o) }), Object.defineProperty(s, "skew", { get: ExpressionPropertyInterface(o.sk) }), Object.defineProperty(s, "skewAxis", { get: ExpressionPropertyInterface(o.sa) }), Object.defineProperty(s, "orientation", { get: ExpressionPropertyInterface(o.or) }), s;
      };
    }(), LayerExpressionInterface = /* @__PURE__ */ function() {
      function o(st) {
        var lt = new Matrix();
        return st !== void 0 ? this._elem.finalTransform.mProp.getValueAtTime(st).clone(lt) : this._elem.finalTransform.mProp.applyToMatrix(lt), lt;
      }
      function s(st, lt) {
        var ot = this.getMatrix(lt);
        return ot.props[12] = 0, ot.props[13] = 0, ot.props[14] = 0, this.applyPoint(ot, st);
      }
      function h(st, lt) {
        var ot = this.getMatrix(lt);
        return this.applyPoint(ot, st);
      }
      function g(st, lt) {
        var ot = this.getMatrix(lt);
        return ot.props[12] = 0, ot.props[13] = 0, ot.props[14] = 0, this.invertPoint(ot, st);
      }
      function j(st, lt) {
        var ot = this.getMatrix(lt);
        return this.invertPoint(ot, st);
      }
      function tt(st, lt) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var ot, ft = this._elem.hierarchy.length;
          for (ot = 0; ot < ft; ot += 1) this._elem.hierarchy[ot].finalTransform.mProp.applyToMatrix(st);
        }
        return st.applyToPointArray(lt[0], lt[1], lt[2] || 0);
      }
      function rt(st, lt) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var ot, ft = this._elem.hierarchy.length;
          for (ot = 0; ot < ft; ot += 1) this._elem.hierarchy[ot].finalTransform.mProp.applyToMatrix(st);
        }
        return st.inversePoint(lt);
      }
      function at(st) {
        var lt = new Matrix();
        if (lt.reset(), this._elem.finalTransform.mProp.applyToMatrix(lt), this._elem.hierarchy && this._elem.hierarchy.length) {
          var ot, ft = this._elem.hierarchy.length;
          for (ot = 0; ot < ft; ot += 1) this._elem.hierarchy[ot].finalTransform.mProp.applyToMatrix(lt);
          return lt.inversePoint(st);
        }
        return lt.inversePoint(st);
      }
      function it() {
        return [1, 1, 1, 1];
      }
      return function(st) {
        var lt;
        function ot(ht) {
          switch (ht) {
            case "ADBE Root Vectors Group":
            case "Contents":
            case 2:
              return ot.shapeInterface;
            case 1:
            case 6:
            case "Transform":
            case "transform":
            case "ADBE Transform Group":
              return lt;
            case 4:
            case "ADBE Effect Parade":
            case "effects":
            case "Effects":
              return ot.effect;
            case "ADBE Text Properties":
              return ot.textInterface;
            default:
              return null;
          }
        }
        ot.getMatrix = o, ot.invertPoint = rt, ot.applyPoint = tt, ot.toWorld = h, ot.toWorldVec = s, ot.fromWorld = j, ot.fromWorldVec = g, ot.toComp = h, ot.fromComp = at, ot.sampleImage = it, ot.sourceRectAtTime = st.sourceRectAtTime.bind(st), ot._elem = st;
        var ft = getDescriptor(lt = TransformExpressionInterface(st.finalTransform.mProp), "anchorPoint");
        return Object.defineProperties(ot, { hasParent: { get: function() {
          return st.hierarchy.length;
        } }, parent: { get: function() {
          return st.hierarchy[0].layerInterface;
        } }, rotation: getDescriptor(lt, "rotation"), scale: getDescriptor(lt, "scale"), position: getDescriptor(lt, "position"), opacity: getDescriptor(lt, "opacity"), anchorPoint: ft, anchor_point: ft, transform: { get: function() {
          return lt;
        } }, active: { get: function() {
          return st.isInRange;
        } } }), ot.startTime = st.data.st, ot.index = st.data.ind, ot.source = st.data.refId, ot.height = st.data.ty === 0 ? st.data.h : 100, ot.width = st.data.ty === 0 ? st.data.w : 100, ot.inPoint = st.data.ip / st.comp.globalData.frameRate, ot.outPoint = st.data.op / st.comp.globalData.frameRate, ot._name = st.data.nm, ot.registerMaskInterface = function(ht) {
          ot.mask = new MaskManagerInterface(ht, st);
        }, ot.registerEffectsInterface = function(ht) {
          ot.effect = ht;
        }, ot;
      };
    }(), propertyGroupFactory = /* @__PURE__ */ function() {
      return function(o, s) {
        return function(h) {
          return (h = h === void 0 ? 1 : h) <= 0 ? o : s(h - 1);
        };
      };
    }(), PropertyInterface = /* @__PURE__ */ function() {
      return function(o, s) {
        var h = { _name: o };
        return function(g) {
          return (g = g === void 0 ? 1 : g) <= 0 ? h : s(g - 1);
        };
      };
    }(), EffectsExpressionInterface = /* @__PURE__ */ function() {
      var o = { createEffectsInterface: function(g, j) {
        if (g.effectsManager) {
          var tt, rt = [], at = g.data.ef, it = g.effectsManager.effectElements.length;
          for (tt = 0; tt < it; tt += 1) rt.push(s(at[tt], g.effectsManager.effectElements[tt], j, g));
          var st = g.data.ef || [], lt = function(ot) {
            for (tt = 0, it = st.length; tt < it; ) {
              if (ot === st[tt].nm || ot === st[tt].mn || ot === st[tt].ix) return rt[tt];
              tt += 1;
            }
            return null;
          };
          return Object.defineProperty(lt, "numProperties", { get: function() {
            return st.length;
          } }), lt;
        }
        return null;
      } };
      function s(g, j, tt, rt) {
        function at(ft) {
          for (var ht = g.ef, pt = 0, dt = ht.length; pt < dt; ) {
            if (ft === ht[pt].nm || ft === ht[pt].mn || ft === ht[pt].ix) return ht[pt].ty === 5 ? lt[pt] : lt[pt]();
            pt += 1;
          }
          throw new Error();
        }
        var it, st = propertyGroupFactory(at, tt), lt = [], ot = g.ef.length;
        for (it = 0; it < ot; it += 1) g.ef[it].ty === 5 ? lt.push(s(g.ef[it], j.effectElements[it], j.effectElements[it].propertyGroup, rt)) : lt.push(h(j.effectElements[it], g.ef[it].ty, rt, st));
        return g.mn === "ADBE Color Control" && Object.defineProperty(at, "color", { get: function() {
          return lt[0]();
        } }), Object.defineProperties(at, { numProperties: { get: function() {
          return g.np;
        } }, _name: { value: g.nm }, propertyGroup: { value: st } }), at.enabled = g.en !== 0, at.active = at.enabled, at;
      }
      function h(g, j, tt, rt) {
        var at = ExpressionPropertyInterface(g.p);
        return g.p.setGroupProperty && g.p.setGroupProperty(PropertyInterface("", rt)), function() {
          return j === 10 ? tt.comp.compInterface(g.p.v) : at();
        };
      }
      return o;
    }(), ShapePathInterface = /* @__PURE__ */ function() {
      return function(o, s, h) {
        var g = s.sh;
        function j(rt) {
          return rt === "Shape" || rt === "shape" || rt === "Path" || rt === "path" || rt === "ADBE Vector Shape" || rt === 2 ? j.path : null;
        }
        var tt = propertyGroupFactory(j, h);
        return g.setGroupProperty(PropertyInterface("Path", tt)), Object.defineProperties(j, { path: { get: function() {
          return g.k && g.getValue(), g;
        } }, shape: { get: function() {
          return g.k && g.getValue(), g;
        } }, _name: { value: o.nm }, ix: { value: o.ix }, propertyIndex: { value: o.ix }, mn: { value: o.mn }, propertyGroup: { value: h } }), j;
      };
    }(), ShapeExpressionInterface = /* @__PURE__ */ function() {
      function o(ht, pt, dt) {
        var ct, mt = [], yt = ht ? ht.length : 0;
        for (ct = 0; ct < yt; ct += 1) ht[ct].ty === "gr" ? mt.push(s(ht[ct], pt[ct], dt)) : ht[ct].ty === "fl" ? mt.push(h(ht[ct], pt[ct], dt)) : ht[ct].ty === "st" ? mt.push(tt(ht[ct], pt[ct], dt)) : ht[ct].ty === "tm" ? mt.push(rt(ht[ct], pt[ct], dt)) : ht[ct].ty === "tr" || (ht[ct].ty === "el" ? mt.push(it(ht[ct], pt[ct], dt)) : ht[ct].ty === "sr" ? mt.push(st(ht[ct], pt[ct], dt)) : ht[ct].ty === "sh" ? mt.push(ShapePathInterface(ht[ct], pt[ct], dt)) : ht[ct].ty === "rc" ? mt.push(lt(ht[ct], pt[ct], dt)) : ht[ct].ty === "rd" ? mt.push(ot(ht[ct], pt[ct], dt)) : ht[ct].ty === "rp" ? mt.push(ft(ht[ct], pt[ct], dt)) : ht[ct].ty === "gf" ? mt.push(g(ht[ct], pt[ct], dt)) : mt.push(j(ht[ct], pt[ct])));
        return mt;
      }
      function s(ht, pt, dt) {
        var ct = function(vt) {
          switch (vt) {
            case "ADBE Vectors Group":
            case "Contents":
            case 2:
              return ct.content;
            default:
              return ct.transform;
          }
        };
        ct.propertyGroup = propertyGroupFactory(ct, dt);
        var mt = function(vt, _t, Pt) {
          var bt, kt = function(xt) {
            for (var Tt = 0, It = bt.length; Tt < It; ) {
              if (bt[Tt]._name === xt || bt[Tt].mn === xt || bt[Tt].propertyIndex === xt || bt[Tt].ix === xt || bt[Tt].ind === xt) return bt[Tt];
              Tt += 1;
            }
            return typeof xt == "number" ? bt[xt - 1] : null;
          };
          kt.propertyGroup = propertyGroupFactory(kt, Pt), bt = o(vt.it, _t.it, kt.propertyGroup), kt.numProperties = bt.length;
          var wt = at(vt.it[vt.it.length - 1], _t.it[_t.it.length - 1], kt.propertyGroup);
          return kt.transform = wt, kt.propertyIndex = vt.cix, kt._name = vt.nm, kt;
        }(ht, pt, ct.propertyGroup), yt = at(ht.it[ht.it.length - 1], pt.it[pt.it.length - 1], ct.propertyGroup);
        return ct.content = mt, ct.transform = yt, Object.defineProperty(ct, "_name", { get: function() {
          return ht.nm;
        } }), ct.numProperties = ht.np, ct.propertyIndex = ht.ix, ct.nm = ht.nm, ct.mn = ht.mn, ct;
      }
      function h(ht, pt, dt) {
        function ct(mt) {
          return mt === "Color" || mt === "color" ? ct.color : mt === "Opacity" || mt === "opacity" ? ct.opacity : null;
        }
        return Object.defineProperties(ct, { color: { get: ExpressionPropertyInterface(pt.c) }, opacity: { get: ExpressionPropertyInterface(pt.o) }, _name: { value: ht.nm }, mn: { value: ht.mn } }), pt.c.setGroupProperty(PropertyInterface("Color", dt)), pt.o.setGroupProperty(PropertyInterface("Opacity", dt)), ct;
      }
      function g(ht, pt, dt) {
        function ct(mt) {
          return mt === "Start Point" || mt === "start point" ? ct.startPoint : mt === "End Point" || mt === "end point" ? ct.endPoint : mt === "Opacity" || mt === "opacity" ? ct.opacity : null;
        }
        return Object.defineProperties(ct, { startPoint: { get: ExpressionPropertyInterface(pt.s) }, endPoint: { get: ExpressionPropertyInterface(pt.e) }, opacity: { get: ExpressionPropertyInterface(pt.o) }, type: { get: function() {
          return "a";
        } }, _name: { value: ht.nm }, mn: { value: ht.mn } }), pt.s.setGroupProperty(PropertyInterface("Start Point", dt)), pt.e.setGroupProperty(PropertyInterface("End Point", dt)), pt.o.setGroupProperty(PropertyInterface("Opacity", dt)), ct;
      }
      function j() {
        return function() {
          return null;
        };
      }
      function tt(ht, pt, dt) {
        var ct = propertyGroupFactory(bt, dt), mt = propertyGroupFactory(Pt, ct);
        function yt(kt) {
          Object.defineProperty(Pt, ht.d[kt].nm, { get: ExpressionPropertyInterface(pt.d.dataProps[kt].p) });
        }
        var vt, _t = ht.d ? ht.d.length : 0, Pt = {};
        for (vt = 0; vt < _t; vt += 1) yt(vt), pt.d.dataProps[vt].p.setGroupProperty(mt);
        function bt(kt) {
          return kt === "Color" || kt === "color" ? bt.color : kt === "Opacity" || kt === "opacity" ? bt.opacity : kt === "Stroke Width" || kt === "stroke width" ? bt.strokeWidth : null;
        }
        return Object.defineProperties(bt, { color: { get: ExpressionPropertyInterface(pt.c) }, opacity: { get: ExpressionPropertyInterface(pt.o) }, strokeWidth: { get: ExpressionPropertyInterface(pt.w) }, dash: { get: function() {
          return Pt;
        } }, _name: { value: ht.nm }, mn: { value: ht.mn } }), pt.c.setGroupProperty(PropertyInterface("Color", ct)), pt.o.setGroupProperty(PropertyInterface("Opacity", ct)), pt.w.setGroupProperty(PropertyInterface("Stroke Width", ct)), bt;
      }
      function rt(ht, pt, dt) {
        function ct(yt) {
          return yt === ht.e.ix || yt === "End" || yt === "end" ? ct.end : yt === ht.s.ix ? ct.start : yt === ht.o.ix ? ct.offset : null;
        }
        var mt = propertyGroupFactory(ct, dt);
        return ct.propertyIndex = ht.ix, pt.s.setGroupProperty(PropertyInterface("Start", mt)), pt.e.setGroupProperty(PropertyInterface("End", mt)), pt.o.setGroupProperty(PropertyInterface("Offset", mt)), ct.propertyIndex = ht.ix, ct.propertyGroup = dt, Object.defineProperties(ct, { start: { get: ExpressionPropertyInterface(pt.s) }, end: { get: ExpressionPropertyInterface(pt.e) }, offset: { get: ExpressionPropertyInterface(pt.o) }, _name: { value: ht.nm } }), ct.mn = ht.mn, ct;
      }
      function at(ht, pt, dt) {
        function ct(yt) {
          return ht.a.ix === yt || yt === "Anchor Point" ? ct.anchorPoint : ht.o.ix === yt || yt === "Opacity" ? ct.opacity : ht.p.ix === yt || yt === "Position" ? ct.position : ht.r.ix === yt || yt === "Rotation" || yt === "ADBE Vector Rotation" ? ct.rotation : ht.s.ix === yt || yt === "Scale" ? ct.scale : ht.sk && ht.sk.ix === yt || yt === "Skew" ? ct.skew : ht.sa && ht.sa.ix === yt || yt === "Skew Axis" ? ct.skewAxis : null;
        }
        var mt = propertyGroupFactory(ct, dt);
        return pt.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", mt)), pt.transform.mProps.p.setGroupProperty(PropertyInterface("Position", mt)), pt.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", mt)), pt.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", mt)), pt.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", mt)), pt.transform.mProps.sk && (pt.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", mt)), pt.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", mt))), pt.transform.op.setGroupProperty(PropertyInterface("Opacity", mt)), Object.defineProperties(ct, { opacity: { get: ExpressionPropertyInterface(pt.transform.mProps.o) }, position: { get: ExpressionPropertyInterface(pt.transform.mProps.p) }, anchorPoint: { get: ExpressionPropertyInterface(pt.transform.mProps.a) }, scale: { get: ExpressionPropertyInterface(pt.transform.mProps.s) }, rotation: { get: ExpressionPropertyInterface(pt.transform.mProps.r) }, skew: { get: ExpressionPropertyInterface(pt.transform.mProps.sk) }, skewAxis: { get: ExpressionPropertyInterface(pt.transform.mProps.sa) }, _name: { value: ht.nm } }), ct.ty = "tr", ct.mn = ht.mn, ct.propertyGroup = dt, ct;
      }
      function it(ht, pt, dt) {
        function ct(vt) {
          return ht.p.ix === vt ? ct.position : ht.s.ix === vt ? ct.size : null;
        }
        var mt = propertyGroupFactory(ct, dt);
        ct.propertyIndex = ht.ix;
        var yt = pt.sh.ty === "tm" ? pt.sh.prop : pt.sh;
        return yt.s.setGroupProperty(PropertyInterface("Size", mt)), yt.p.setGroupProperty(PropertyInterface("Position", mt)), Object.defineProperties(ct, { size: { get: ExpressionPropertyInterface(yt.s) }, position: { get: ExpressionPropertyInterface(yt.p) }, _name: { value: ht.nm } }), ct.mn = ht.mn, ct;
      }
      function st(ht, pt, dt) {
        function ct(vt) {
          return ht.p.ix === vt ? ct.position : ht.r.ix === vt ? ct.rotation : ht.pt.ix === vt ? ct.points : ht.or.ix === vt || vt === "ADBE Vector Star Outer Radius" ? ct.outerRadius : ht.os.ix === vt ? ct.outerRoundness : !ht.ir || ht.ir.ix !== vt && vt !== "ADBE Vector Star Inner Radius" ? ht.is && ht.is.ix === vt ? ct.innerRoundness : null : ct.innerRadius;
        }
        var mt = propertyGroupFactory(ct, dt), yt = pt.sh.ty === "tm" ? pt.sh.prop : pt.sh;
        return ct.propertyIndex = ht.ix, yt.or.setGroupProperty(PropertyInterface("Outer Radius", mt)), yt.os.setGroupProperty(PropertyInterface("Outer Roundness", mt)), yt.pt.setGroupProperty(PropertyInterface("Points", mt)), yt.p.setGroupProperty(PropertyInterface("Position", mt)), yt.r.setGroupProperty(PropertyInterface("Rotation", mt)), ht.ir && (yt.ir.setGroupProperty(PropertyInterface("Inner Radius", mt)), yt.is.setGroupProperty(PropertyInterface("Inner Roundness", mt))), Object.defineProperties(ct, { position: { get: ExpressionPropertyInterface(yt.p) }, rotation: { get: ExpressionPropertyInterface(yt.r) }, points: { get: ExpressionPropertyInterface(yt.pt) }, outerRadius: { get: ExpressionPropertyInterface(yt.or) }, outerRoundness: { get: ExpressionPropertyInterface(yt.os) }, innerRadius: { get: ExpressionPropertyInterface(yt.ir) }, innerRoundness: { get: ExpressionPropertyInterface(yt.is) }, _name: { value: ht.nm } }), ct.mn = ht.mn, ct;
      }
      function lt(ht, pt, dt) {
        function ct(vt) {
          return ht.p.ix === vt ? ct.position : ht.r.ix === vt ? ct.roundness : ht.s.ix === vt || vt === "Size" || vt === "ADBE Vector Rect Size" ? ct.size : null;
        }
        var mt = propertyGroupFactory(ct, dt), yt = pt.sh.ty === "tm" ? pt.sh.prop : pt.sh;
        return ct.propertyIndex = ht.ix, yt.p.setGroupProperty(PropertyInterface("Position", mt)), yt.s.setGroupProperty(PropertyInterface("Size", mt)), yt.r.setGroupProperty(PropertyInterface("Rotation", mt)), Object.defineProperties(ct, { position: { get: ExpressionPropertyInterface(yt.p) }, roundness: { get: ExpressionPropertyInterface(yt.r) }, size: { get: ExpressionPropertyInterface(yt.s) }, _name: { value: ht.nm } }), ct.mn = ht.mn, ct;
      }
      function ot(ht, pt, dt) {
        function ct(vt) {
          return ht.r.ix === vt || vt === "Round Corners 1" ? ct.radius : null;
        }
        var mt = propertyGroupFactory(ct, dt), yt = pt;
        return ct.propertyIndex = ht.ix, yt.rd.setGroupProperty(PropertyInterface("Radius", mt)), Object.defineProperties(ct, { radius: { get: ExpressionPropertyInterface(yt.rd) }, _name: { value: ht.nm } }), ct.mn = ht.mn, ct;
      }
      function ft(ht, pt, dt) {
        function ct(vt) {
          return ht.c.ix === vt || vt === "Copies" ? ct.copies : ht.o.ix === vt || vt === "Offset" ? ct.offset : null;
        }
        var mt = propertyGroupFactory(ct, dt), yt = pt;
        return ct.propertyIndex = ht.ix, yt.c.setGroupProperty(PropertyInterface("Copies", mt)), yt.o.setGroupProperty(PropertyInterface("Offset", mt)), Object.defineProperties(ct, { copies: { get: ExpressionPropertyInterface(yt.c) }, offset: { get: ExpressionPropertyInterface(yt.o) }, _name: { value: ht.nm } }), ct.mn = ht.mn, ct;
      }
      return function(ht, pt, dt) {
        var ct;
        function mt(yt) {
          if (typeof yt == "number") return (yt = yt === void 0 ? 1 : yt) === 0 ? dt : ct[yt - 1];
          for (var vt = 0, _t = ct.length; vt < _t; ) {
            if (ct[vt]._name === yt) return ct[vt];
            vt += 1;
          }
          return null;
        }
        return mt.propertyGroup = propertyGroupFactory(mt, function() {
          return dt;
        }), ct = o(ht, pt, mt.propertyGroup), mt.numProperties = ct.length, mt._name = "Contents", mt;
      };
    }(), TextExpressionInterface = /* @__PURE__ */ function() {
      return function(o) {
        var s;
        function h(g) {
          return g === "ADBE Text Document" ? h.sourceText : null;
        }
        return Object.defineProperty(h, "sourceText", { get: function() {
          o.textProperty.getValue();
          var g = o.textProperty.currentData.t;
          return (!s || g !== s.value) && ((s = new String(g)).value = g || new String(g), Object.defineProperty(s, "style", { get: function() {
            return { fillColor: o.textProperty.currentData.fc };
          } })), s;
        } }), h;
      };
    }();
    function _typeof(o) {
      return (_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
        return typeof s;
      } : function(s) {
        return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
      })(o);
    }
    var FootageInterface = /* @__PURE__ */ function() {
      var o = function(s) {
        function h(g) {
          return g === "Outline" ? h.outlineInterface() : null;
        }
        return h._name = "Outline", h.outlineInterface = function(g) {
          var j = "", tt = g.getFootageData();
          function rt(at) {
            if (tt[at]) return j = at, _typeof(tt = tt[at]) === "object" ? rt : tt;
            var it = at.indexOf(j);
            if (it !== -1) {
              var st = parseInt(at.substr(it + j.length), 10);
              return _typeof(tt = tt[st]) === "object" ? rt : tt;
            }
            return "";
          }
          return function() {
            return j = "", tt = g.getFootageData(), rt;
          };
        }(s), h;
      };
      return function(s) {
        function h(g) {
          return g === "Data" ? h.dataInterface : null;
        }
        return h._name = "Data", h.dataInterface = o(s), h;
      };
    }(), interfaces = { layer: LayerExpressionInterface, effects: EffectsExpressionInterface, comp: CompExpressionInterface, shape: ShapeExpressionInterface, text: TextExpressionInterface, footage: FootageInterface };
    function getInterface(o) {
      return interfaces[o] || null;
    }
    var expressionHelpers = /* @__PURE__ */ function() {
      return { searchExpressions: function(o, s, h) {
        s.x && (h.k = !0, h.x = !0, h.initiateExpression = ExpressionManager.initiateExpression, h.effectsSequence.push(h.initiateExpression(o, s, h).bind(h)));
      }, getSpeedAtTime: function(o) {
        var s = this.getValueAtTime(o), h = this.getValueAtTime(o + -0.01), g = 0;
        if (s.length) {
          var j;
          for (j = 0; j < s.length; j += 1) g += Math.pow(h[j] - s[j], 2);
          g = 100 * Math.sqrt(g);
        } else g = 0;
        return g;
      }, getVelocityAtTime: function(o) {
        if (this.vel !== void 0) return this.vel;
        var s, h, g = -1e-3, j = this.getValueAtTime(o), tt = this.getValueAtTime(o + g);
        if (j.length) for (s = createTypedArray("float32", j.length), h = 0; h < j.length; h += 1) s[h] = (tt[h] - j[h]) / g;
        else s = (tt - j) / g;
        return s;
      }, getValueAtTime: function(o) {
        return o *= this.elem.globalData.frameRate, (o -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < o ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(o, this._cachingAtTime), this._cachingAtTime.lastFrame = o), this._cachingAtTime.value;
      }, getStaticValueAtTime: function() {
        return this.pv;
      }, setGroupProperty: function(o) {
        this.propertyGroup = o;
      } };
    }();
    function addPropertyDecorator() {
      function o(ot, ft, ht) {
        if (!this.k || !this.keyframes) return this.pv;
        ot = ot ? ot.toLowerCase() : "";
        var pt, dt, ct, mt, yt, vt = this.comp.renderedFrame, _t = this.keyframes, Pt = _t[_t.length - 1].t;
        if (vt <= Pt) return this.pv;
        if (ht ? dt = Pt - (pt = ft ? Math.abs(Pt - this.elem.comp.globalData.frameRate * ft) : Math.max(0, Pt - this.elem.data.ip)) : ((!ft || ft > _t.length - 1) && (ft = _t.length - 1), pt = Pt - (dt = _t[_t.length - 1 - ft].t)), ot === "pingpong") {
          if (Math.floor((vt - dt) / pt) % 2 != 0) return this.getValueAtTime((pt - (vt - dt) % pt + dt) / this.comp.globalData.frameRate, 0);
        } else {
          if (ot === "offset") {
            var bt = this.getValueAtTime(dt / this.comp.globalData.frameRate, 0), kt = this.getValueAtTime(Pt / this.comp.globalData.frameRate, 0), wt = this.getValueAtTime(((vt - dt) % pt + dt) / this.comp.globalData.frameRate, 0), xt = Math.floor((vt - dt) / pt);
            if (this.pv.length) {
              for (mt = (yt = new Array(bt.length)).length, ct = 0; ct < mt; ct += 1) yt[ct] = (kt[ct] - bt[ct]) * xt + wt[ct];
              return yt;
            }
            return (kt - bt) * xt + wt;
          }
          if (ot === "continue") {
            var Tt = this.getValueAtTime(Pt / this.comp.globalData.frameRate, 0), It = this.getValueAtTime((Pt - 1e-3) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (mt = (yt = new Array(Tt.length)).length, ct = 0; ct < mt; ct += 1) yt[ct] = Tt[ct] + (Tt[ct] - It[ct]) * ((vt - Pt) / this.comp.globalData.frameRate) / 5e-4;
              return yt;
            }
            return Tt + (vt - Pt) / 1e-3 * (Tt - It);
          }
        }
        return this.getValueAtTime(((vt - dt) % pt + dt) / this.comp.globalData.frameRate, 0);
      }
      function s(ot, ft, ht) {
        if (!this.k) return this.pv;
        ot = ot ? ot.toLowerCase() : "";
        var pt, dt, ct, mt, yt, vt = this.comp.renderedFrame, _t = this.keyframes, Pt = _t[0].t;
        if (vt >= Pt) return this.pv;
        if (ht ? dt = Pt + (pt = ft ? Math.abs(this.elem.comp.globalData.frameRate * ft) : Math.max(0, this.elem.data.op - Pt)) : ((!ft || ft > _t.length - 1) && (ft = _t.length - 1), pt = (dt = _t[ft].t) - Pt), ot === "pingpong") {
          if (Math.floor((Pt - vt) / pt) % 2 == 0) return this.getValueAtTime(((Pt - vt) % pt + Pt) / this.comp.globalData.frameRate, 0);
        } else {
          if (ot === "offset") {
            var bt = this.getValueAtTime(Pt / this.comp.globalData.frameRate, 0), kt = this.getValueAtTime(dt / this.comp.globalData.frameRate, 0), wt = this.getValueAtTime((pt - (Pt - vt) % pt + Pt) / this.comp.globalData.frameRate, 0), xt = Math.floor((Pt - vt) / pt) + 1;
            if (this.pv.length) {
              for (mt = (yt = new Array(bt.length)).length, ct = 0; ct < mt; ct += 1) yt[ct] = wt[ct] - (kt[ct] - bt[ct]) * xt;
              return yt;
            }
            return wt - (kt - bt) * xt;
          }
          if (ot === "continue") {
            var Tt = this.getValueAtTime(Pt / this.comp.globalData.frameRate, 0), It = this.getValueAtTime((Pt + 1e-3) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (mt = (yt = new Array(Tt.length)).length, ct = 0; ct < mt; ct += 1) yt[ct] = Tt[ct] + (Tt[ct] - It[ct]) * (Pt - vt) / 1e-3;
              return yt;
            }
            return Tt + (Tt - It) * (Pt - vt) / 1e-3;
          }
        }
        return this.getValueAtTime((pt - ((Pt - vt) % pt + Pt)) / this.comp.globalData.frameRate, 0);
      }
      function h(ot, ft) {
        if (!this.k) return this.pv;
        if (ot = 0.5 * (ot || 0.4), (ft = Math.floor(ft || 5)) <= 1) return this.pv;
        var ht, pt, dt = this.comp.renderedFrame / this.comp.globalData.frameRate, ct = dt - ot, mt = ft > 1 ? (dt + ot - ct) / (ft - 1) : 1, yt = 0, vt = 0;
        for (ht = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; yt < ft; ) {
          if (pt = this.getValueAtTime(ct + yt * mt), this.pv.length) for (vt = 0; vt < this.pv.length; vt += 1) ht[vt] += pt[vt];
          else ht += pt;
          yt += 1;
        }
        if (this.pv.length) for (vt = 0; vt < this.pv.length; vt += 1) ht[vt] /= ft;
        else ht /= ft;
        return ht;
      }
      function g(ot) {
        this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix() });
        var ft = this._transformCachingAtTime.v;
        if (ft.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
          var ht = this.a.getValueAtTime(ot);
          ft.translate(-ht[0] * this.a.mult, -ht[1] * this.a.mult, ht[2] * this.a.mult);
        }
        if (this.appliedTransformations < 2) {
          var pt = this.s.getValueAtTime(ot);
          ft.scale(pt[0] * this.s.mult, pt[1] * this.s.mult, pt[2] * this.s.mult);
        }
        if (this.sk && this.appliedTransformations < 3) {
          var dt = this.sk.getValueAtTime(ot), ct = this.sa.getValueAtTime(ot);
          ft.skewFromAxis(-dt * this.sk.mult, ct * this.sa.mult);
        }
        if (this.r && this.appliedTransformations < 4) {
          var mt = this.r.getValueAtTime(ot);
          ft.rotate(-mt * this.r.mult);
        } else if (!this.r && this.appliedTransformations < 4) {
          var yt = this.rz.getValueAtTime(ot), vt = this.ry.getValueAtTime(ot), _t = this.rx.getValueAtTime(ot), Pt = this.or.getValueAtTime(ot);
          ft.rotateZ(-yt * this.rz.mult).rotateY(vt * this.ry.mult).rotateX(_t * this.rx.mult).rotateZ(-Pt[2] * this.or.mult).rotateY(Pt[1] * this.or.mult).rotateX(Pt[0] * this.or.mult);
        }
        if (this.data.p && this.data.p.s) {
          var bt = this.px.getValueAtTime(ot), kt = this.py.getValueAtTime(ot);
          if (this.data.p.z) {
            var wt = this.pz.getValueAtTime(ot);
            ft.translate(bt * this.px.mult, kt * this.py.mult, -wt * this.pz.mult);
          } else ft.translate(bt * this.px.mult, kt * this.py.mult, 0);
        } else {
          var xt = this.p.getValueAtTime(ot);
          ft.translate(xt[0] * this.p.mult, xt[1] * this.p.mult, -xt[2] * this.p.mult);
        }
        return ft;
      }
      function j() {
        return this.v.clone(new Matrix());
      }
      var tt = TransformPropertyFactory.getTransformProperty;
      TransformPropertyFactory.getTransformProperty = function(ot, ft, ht) {
        var pt = tt(ot, ft, ht);
        return pt.dynamicProperties.length ? pt.getValueAtTime = g.bind(pt) : pt.getValueAtTime = j.bind(pt), pt.setGroupProperty = expressionHelpers.setGroupProperty, pt;
      };
      var rt = PropertyFactory.getProp;
      PropertyFactory.getProp = function(ot, ft, ht, pt, dt) {
        var ct = rt(ot, ft, ht, pt, dt);
        ct.kf ? ct.getValueAtTime = expressionHelpers.getValueAtTime.bind(ct) : ct.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(ct), ct.setGroupProperty = expressionHelpers.setGroupProperty, ct.loopOut = o, ct.loopIn = s, ct.smooth = h, ct.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(ct), ct.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(ct), ct.numKeys = ft.a === 1 ? ft.k.length : 0, ct.propertyIndex = ft.ix;
        var mt = 0;
        return ht !== 0 && (mt = createTypedArray("float32", ft.a === 1 ? ft.k[0].s.length : ft.k.length)), ct._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: mt }, expressionHelpers.searchExpressions(ot, ft, ct), ct.k && dt.addDynamicProperty(ct), ct;
      };
      var at = ShapePropertyFactory.getConstructorFunction(), it = ShapePropertyFactory.getKeyframedConstructorFunction();
      function st() {
      }
      st.prototype = { vertices: function(ot, ft) {
        this.k && this.getValue();
        var ht = this.v;
        ft !== void 0 && (ht = this.getValueAtTime(ft, 0));
        var pt, dt = ht._length, ct = ht[ot], mt = ht.v, yt = createSizedArray(dt);
        for (pt = 0; pt < dt; pt += 1) yt[pt] = ot === "i" || ot === "o" ? [ct[pt][0] - mt[pt][0], ct[pt][1] - mt[pt][1]] : [ct[pt][0], ct[pt][1]];
        return yt;
      }, points: function(ot) {
        return this.vertices("v", ot);
      }, inTangents: function(ot) {
        return this.vertices("i", ot);
      }, outTangents: function(ot) {
        return this.vertices("o", ot);
      }, isClosed: function() {
        return this.v.c;
      }, pointOnPath: function(ot, ft) {
        var ht = this.v;
        ft !== void 0 && (ht = this.getValueAtTime(ft, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(ht));
        for (var pt, dt = this._segmentsLength, ct = dt.lengths, mt = dt.totalLength * ot, yt = 0, vt = ct.length, _t = 0; yt < vt; ) {
          if (_t + ct[yt].addedLength > mt) {
            var Pt = yt, bt = ht.c && yt === vt - 1 ? 0 : yt + 1, kt = (mt - _t) / ct[yt].addedLength;
            pt = bez.getPointInSegment(ht.v[Pt], ht.v[bt], ht.o[Pt], ht.i[bt], kt, ct[yt]);
            break;
          }
          _t += ct[yt].addedLength, yt += 1;
        }
        return pt || (pt = ht.c ? [ht.v[0][0], ht.v[0][1]] : [ht.v[ht._length - 1][0], ht.v[ht._length - 1][1]]), pt;
      }, vectorOnPath: function(ot, ft, ht) {
        ot == 1 ? ot = this.v.c : ot == 0 && (ot = 0.999);
        var pt = this.pointOnPath(ot, ft), dt = this.pointOnPath(ot + 1e-3, ft), ct = dt[0] - pt[0], mt = dt[1] - pt[1], yt = Math.sqrt(Math.pow(ct, 2) + Math.pow(mt, 2));
        return yt === 0 ? [0, 0] : ht === "tangent" ? [ct / yt, mt / yt] : [-mt / yt, ct / yt];
      }, tangentOnPath: function(ot, ft) {
        return this.vectorOnPath(ot, ft, "tangent");
      }, normalOnPath: function(ot, ft) {
        return this.vectorOnPath(ot, ft, "normal");
      }, setGroupProperty: expressionHelpers.setGroupProperty, getValueAtTime: expressionHelpers.getStaticValueAtTime }, extendPrototype([st], at), extendPrototype([st], it), it.prototype.getValueAtTime = function(ot) {
        return this._cachingAtTime || (this._cachingAtTime = { shapeValue: shapePool.clone(this.pv), lastIndex: 0, lastTime: initialDefaultFrame }), ot *= this.elem.globalData.frameRate, (ot -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < ot ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = ot, this.interpolateShape(ot, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
      }, it.prototype.initiateExpression = ExpressionManager.initiateExpression;
      var lt = ShapePropertyFactory.getShapeProp;
      ShapePropertyFactory.getShapeProp = function(ot, ft, ht, pt, dt) {
        var ct = lt(ot, ft, ht, pt, dt);
        return ct.propertyIndex = ft.ix, ct.lock = !1, ht === 3 ? expressionHelpers.searchExpressions(ot, ft.pt, ct) : ht === 4 && expressionHelpers.searchExpressions(ot, ft.ks, ct), ct.k && ot.addDynamicProperty(ct), ct;
      };
    }
    function initialize$1() {
      addPropertyDecorator();
    }
    function addDecorator() {
      TextProperty.prototype.getExpressionValue = function(o, s) {
        var h = this.calculateExpression(s);
        if (o.t !== h) {
          var g = {};
          return this.copyData(g, o), g.t = h.toString(), g.__complete = !1, g;
        }
        return o;
      }, TextProperty.prototype.searchProperty = function() {
        var o = this.searchKeyframes(), s = this.searchExpressions();
        return this.kf = o || s, this.kf;
      }, TextProperty.prototype.searchExpressions = function() {
        return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null;
      };
    }
    function initialize() {
      addDecorator();
    }
    function SVGComposableEffect() {
    }
    SVGComposableEffect.prototype = { createMergeNode: function(o, s) {
      var h, g, j = createNS("feMerge");
      for (j.setAttribute("result", o), g = 0; g < s.length; g += 1) (h = createNS("feMergeNode")).setAttribute("in", s[g]), j.appendChild(h), j.appendChild(h);
      return j;
    } };
    var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
    function SVGTintFilter(o, s, h, g, j) {
      this.filterManager = s;
      var tt = createNS("feColorMatrix");
      tt.setAttribute("type", "matrix"), tt.setAttribute("color-interpolation-filters", "linearRGB"), tt.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = tt, tt.setAttribute("result", g + "_tint_1"), o.appendChild(tt), (tt = createNS("feColorMatrix")).setAttribute("type", "matrix"), tt.setAttribute("color-interpolation-filters", "sRGB"), tt.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), tt.setAttribute("result", g + "_tint_2"), o.appendChild(tt), this.matrixFilter = tt;
      var rt = this.createMergeNode(g, [j, g + "_tint_1", g + "_tint_2"]);
      o.appendChild(rt);
    }
    function SVGFillFilter(o, s, h, g) {
      this.filterManager = s;
      var j = createNS("feColorMatrix");
      j.setAttribute("type", "matrix"), j.setAttribute("color-interpolation-filters", "sRGB"), j.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), j.setAttribute("result", g), o.appendChild(j), this.matrixFilter = j;
    }
    function SVGStrokeEffect(o, s, h) {
      this.initialized = !1, this.filterManager = s, this.elem = h, this.paths = [];
    }
    function SVGTritoneFilter(o, s, h, g) {
      this.filterManager = s;
      var j = createNS("feColorMatrix");
      j.setAttribute("type", "matrix"), j.setAttribute("color-interpolation-filters", "linearRGB"), j.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), o.appendChild(j);
      var tt = createNS("feComponentTransfer");
      tt.setAttribute("color-interpolation-filters", "sRGB"), tt.setAttribute("result", g), this.matrixFilter = tt;
      var rt = createNS("feFuncR");
      rt.setAttribute("type", "table"), tt.appendChild(rt), this.feFuncR = rt;
      var at = createNS("feFuncG");
      at.setAttribute("type", "table"), tt.appendChild(at), this.feFuncG = at;
      var it = createNS("feFuncB");
      it.setAttribute("type", "table"), tt.appendChild(it), this.feFuncB = it, o.appendChild(tt);
    }
    function SVGProLevelsFilter(o, s, h, g) {
      this.filterManager = s;
      var j = this.filterManager.effectElements, tt = createNS("feComponentTransfer");
      (j[10].p.k || j[10].p.v !== 0 || j[11].p.k || j[11].p.v !== 1 || j[12].p.k || j[12].p.v !== 1 || j[13].p.k || j[13].p.v !== 0 || j[14].p.k || j[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", tt)), (j[17].p.k || j[17].p.v !== 0 || j[18].p.k || j[18].p.v !== 1 || j[19].p.k || j[19].p.v !== 1 || j[20].p.k || j[20].p.v !== 0 || j[21].p.k || j[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", tt)), (j[24].p.k || j[24].p.v !== 0 || j[25].p.k || j[25].p.v !== 1 || j[26].p.k || j[26].p.v !== 1 || j[27].p.k || j[27].p.v !== 0 || j[28].p.k || j[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", tt)), (j[31].p.k || j[31].p.v !== 0 || j[32].p.k || j[32].p.v !== 1 || j[33].p.k || j[33].p.v !== 1 || j[34].p.k || j[34].p.v !== 0 || j[35].p.k || j[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", tt)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (tt.setAttribute("color-interpolation-filters", "sRGB"), o.appendChild(tt)), (j[3].p.k || j[3].p.v !== 0 || j[4].p.k || j[4].p.v !== 1 || j[5].p.k || j[5].p.v !== 1 || j[6].p.k || j[6].p.v !== 0 || j[7].p.k || j[7].p.v !== 1) && ((tt = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), tt.setAttribute("result", g), o.appendChild(tt), this.feFuncRComposed = this.createFeFunc("feFuncR", tt), this.feFuncGComposed = this.createFeFunc("feFuncG", tt), this.feFuncBComposed = this.createFeFunc("feFuncB", tt));
    }
    function SVGDropShadowEffect(o, s, h, g, j) {
      var tt = s.container.globalData.renderConfig.filterSize, rt = s.data.fs || tt;
      o.setAttribute("x", rt.x || tt.x), o.setAttribute("y", rt.y || tt.y), o.setAttribute("width", rt.width || tt.width), o.setAttribute("height", rt.height || tt.height), this.filterManager = s;
      var at = createNS("feGaussianBlur");
      at.setAttribute("in", "SourceAlpha"), at.setAttribute("result", g + "_drop_shadow_1"), at.setAttribute("stdDeviation", "0"), this.feGaussianBlur = at, o.appendChild(at);
      var it = createNS("feOffset");
      it.setAttribute("dx", "25"), it.setAttribute("dy", "0"), it.setAttribute("in", g + "_drop_shadow_1"), it.setAttribute("result", g + "_drop_shadow_2"), this.feOffset = it, o.appendChild(it);
      var st = createNS("feFlood");
      st.setAttribute("flood-color", "#00ff00"), st.setAttribute("flood-opacity", "1"), st.setAttribute("result", g + "_drop_shadow_3"), this.feFlood = st, o.appendChild(st);
      var lt = createNS("feComposite");
      lt.setAttribute("in", g + "_drop_shadow_3"), lt.setAttribute("in2", g + "_drop_shadow_2"), lt.setAttribute("operator", "in"), lt.setAttribute("result", g + "_drop_shadow_4"), o.appendChild(lt);
      var ot = this.createMergeNode(g, [g + "_drop_shadow_4", j]);
      o.appendChild(ot);
    }
    extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(o) {
      if (o || this.filterManager._mdf) {
        var s = this.filterManager.effectElements[0].p.v, h = this.filterManager.effectElements[1].p.v, g = this.filterManager.effectElements[2].p.v / 100;
        this.linearFilter.setAttribute("values", linearFilterValue + " " + g + " 0"), this.matrixFilter.setAttribute("values", h[0] - s[0] + " 0 0 0 " + s[0] + " " + (h[1] - s[1]) + " 0 0 0 " + s[1] + " " + (h[2] - s[2]) + " 0 0 0 " + s[2] + " 0 0 0 1 0");
      }
    }, SVGFillFilter.prototype.renderFrame = function(o) {
      if (o || this.filterManager._mdf) {
        var s = this.filterManager.effectElements[2].p.v, h = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute("values", "0 0 0 0 " + s[0] + " 0 0 0 0 " + s[1] + " 0 0 0 0 " + s[2] + " 0 0 0 " + h + " 0");
      }
    }, SVGStrokeEffect.prototype.initialize = function() {
      var o, s, h, g, j = this.elem.layerElement.children || this.elem.layerElement.childNodes;
      for (this.filterManager.effectElements[1].p.v === 1 ? (g = this.elem.maskManager.masksProperties.length, h = 0) : g = 1 + (h = this.filterManager.effectElements[0].p.v - 1), (s = createNS("g")).setAttribute("fill", "none"), s.setAttribute("stroke-linecap", "round"), s.setAttribute("stroke-dashoffset", 1); h < g; h += 1) o = createNS("path"), s.appendChild(o), this.paths.push({ p: o, m: h });
      if (this.filterManager.effectElements[10].p.v === 3) {
        var tt = createNS("mask"), rt = createElementID();
        tt.setAttribute("id", rt), tt.setAttribute("mask-type", "alpha"), tt.appendChild(s), this.elem.globalData.defs.appendChild(tt);
        var at = createNS("g");
        for (at.setAttribute("mask", "url(" + getLocationHref() + "#" + rt + ")"); j[0]; ) at.appendChild(j[0]);
        this.elem.layerElement.appendChild(at), this.masker = tt, s.setAttribute("stroke", "#fff");
      } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
        if (this.filterManager.effectElements[10].p.v === 2) for (j = this.elem.layerElement.children || this.elem.layerElement.childNodes; j.length; ) this.elem.layerElement.removeChild(j[0]);
        this.elem.layerElement.appendChild(s), this.elem.layerElement.removeAttribute("mask"), s.setAttribute("stroke", "#fff");
      }
      this.initialized = !0, this.pathMasker = s;
    }, SVGStrokeEffect.prototype.renderFrame = function(o) {
      this.initialized || this.initialize();
      var s, h, g, j = this.paths.length;
      for (s = 0; s < j; s += 1) if (this.paths[s].m !== -1 && (h = this.elem.maskManager.viewData[this.paths[s].m], g = this.paths[s].p, (o || this.filterManager._mdf || h.prop._mdf) && g.setAttribute("d", h.lastPath), o || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || h.prop._mdf)) {
        var tt;
        if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
          var rt = 0.01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), at = 0.01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), it = g.getTotalLength();
          tt = "0 0 0 " + it * rt + " ";
          var st, lt = it * (at - rt), ot = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01, ft = Math.floor(lt / ot);
          for (st = 0; st < ft; st += 1) tt += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01 + " ";
          tt += "0 " + 10 * it + " 0 0";
        } else tt = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01;
        g.setAttribute("stroke-dasharray", tt);
      }
      if ((o || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (o || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (o || this.filterManager.effectElements[3].p._mdf)) {
        var ht = this.filterManager.effectElements[3].p.v;
        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * ht[0]) + "," + bmFloor(255 * ht[1]) + "," + bmFloor(255 * ht[2]) + ")");
      }
    }, SVGTritoneFilter.prototype.renderFrame = function(o) {
      if (o || this.filterManager._mdf) {
        var s = this.filterManager.effectElements[0].p.v, h = this.filterManager.effectElements[1].p.v, g = this.filterManager.effectElements[2].p.v, j = g[0] + " " + h[0] + " " + s[0], tt = g[1] + " " + h[1] + " " + s[1], rt = g[2] + " " + h[2] + " " + s[2];
        this.feFuncR.setAttribute("tableValues", j), this.feFuncG.setAttribute("tableValues", tt), this.feFuncB.setAttribute("tableValues", rt);
      }
    }, SVGProLevelsFilter.prototype.createFeFunc = function(o, s) {
      var h = createNS(o);
      return h.setAttribute("type", "table"), s.appendChild(h), h;
    }, SVGProLevelsFilter.prototype.getTableValue = function(o, s, h, g, j) {
      for (var tt, rt, at = 0, it = Math.min(o, s), st = Math.max(o, s), lt = Array.call(null, { length: 256 }), ot = 0, ft = j - g, ht = s - o; at <= 256; ) rt = (tt = at / 256) <= it ? ht < 0 ? j : g : tt >= st ? ht < 0 ? g : j : g + ft * Math.pow((tt - o) / ht, 1 / h), lt[ot] = rt, ot += 1, at += 256 / 255;
      return lt.join(" ");
    }, SVGProLevelsFilter.prototype.renderFrame = function(o) {
      if (o || this.filterManager._mdf) {
        var s, h = this.filterManager.effectElements;
        this.feFuncRComposed && (o || h[3].p._mdf || h[4].p._mdf || h[5].p._mdf || h[6].p._mdf || h[7].p._mdf) && (s = this.getTableValue(h[3].p.v, h[4].p.v, h[5].p.v, h[6].p.v, h[7].p.v), this.feFuncRComposed.setAttribute("tableValues", s), this.feFuncGComposed.setAttribute("tableValues", s), this.feFuncBComposed.setAttribute("tableValues", s)), this.feFuncR && (o || h[10].p._mdf || h[11].p._mdf || h[12].p._mdf || h[13].p._mdf || h[14].p._mdf) && (s = this.getTableValue(h[10].p.v, h[11].p.v, h[12].p.v, h[13].p.v, h[14].p.v), this.feFuncR.setAttribute("tableValues", s)), this.feFuncG && (o || h[17].p._mdf || h[18].p._mdf || h[19].p._mdf || h[20].p._mdf || h[21].p._mdf) && (s = this.getTableValue(h[17].p.v, h[18].p.v, h[19].p.v, h[20].p.v, h[21].p.v), this.feFuncG.setAttribute("tableValues", s)), this.feFuncB && (o || h[24].p._mdf || h[25].p._mdf || h[26].p._mdf || h[27].p._mdf || h[28].p._mdf) && (s = this.getTableValue(h[24].p.v, h[25].p.v, h[26].p.v, h[27].p.v, h[28].p.v), this.feFuncB.setAttribute("tableValues", s)), this.feFuncA && (o || h[31].p._mdf || h[32].p._mdf || h[33].p._mdf || h[34].p._mdf || h[35].p._mdf) && (s = this.getTableValue(h[31].p.v, h[32].p.v, h[33].p.v, h[34].p.v, h[35].p.v), this.feFuncA.setAttribute("tableValues", s));
      }
    }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(o) {
      if (o || this.filterManager._mdf) {
        if ((o || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), o || this.filterManager.effectElements[0].p._mdf) {
          var s = this.filterManager.effectElements[0].p.v;
          this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * s[0]), Math.round(255 * s[1]), Math.round(255 * s[2])));
        }
        if ((o || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), o || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
          var h = this.filterManager.effectElements[3].p.v, g = (this.filterManager.effectElements[2].p.v - 90) * degToRads, j = h * Math.cos(g), tt = h * Math.sin(g);
          this.feOffset.setAttribute("dx", j), this.feOffset.setAttribute("dy", tt);
        }
      }
    };
    var _svgMatteSymbols = [];
    function SVGMatte3Effect(o, s, h) {
      this.initialized = !1, this.filterManager = s, this.filterElem = o, this.elem = h, h.matteElement = createNS("g"), h.matteElement.appendChild(h.layerElement), h.matteElement.appendChild(h.transformedElement), h.baseElement = h.matteElement;
    }
    function SVGGaussianBlurEffect(o, s, h, g) {
      o.setAttribute("x", "-100%"), o.setAttribute("y", "-100%"), o.setAttribute("width", "300%"), o.setAttribute("height", "300%"), this.filterManager = s;
      var j = createNS("feGaussianBlur");
      j.setAttribute("result", g), o.appendChild(j), this.feGaussianBlur = j;
    }
    function TransformEffect() {
    }
    function SVGTransformEffect(o, s) {
      this.init(s);
    }
    function CVTransformEffect(o) {
      this.init(o);
    }
    return SVGMatte3Effect.prototype.findSymbol = function(o) {
      for (var s = 0, h = _svgMatteSymbols.length; s < h; ) {
        if (_svgMatteSymbols[s] === o) return _svgMatteSymbols[s];
        s += 1;
      }
      return null;
    }, SVGMatte3Effect.prototype.replaceInParent = function(o, s) {
      var h = o.layerElement.parentNode;
      if (h) {
        for (var g = h.children, j = 0, tt = g.length; j < tt && g[j] !== o.layerElement; ) j += 1;
        var rt;
        j <= tt - 2 && (rt = g[j + 1]);
        var at = createNS("use");
        at.setAttribute("href", "#" + s), rt ? h.insertBefore(at, rt) : h.appendChild(at);
      }
    }, SVGMatte3Effect.prototype.setElementAsMask = function(o, s) {
      if (!this.findSymbol(s)) {
        var h = createElementID(), g = createNS("mask");
        g.setAttribute("id", s.layerId), g.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(s);
        var j = o.globalData.defs;
        j.appendChild(g);
        var tt = createNS("symbol");
        tt.setAttribute("id", h), this.replaceInParent(s, h), tt.appendChild(s.layerElement), j.appendChild(tt);
        var rt = createNS("use");
        rt.setAttribute("href", "#" + h), g.appendChild(rt), s.data.hd = !1, s.show();
      }
      o.setMatte(s.layerId);
    }, SVGMatte3Effect.prototype.initialize = function() {
      for (var o = this.filterManager.effectElements[0].p.v, s = this.elem.comp.elements, h = 0, g = s.length; h < g; ) s[h] && s[h].data.ind === o && this.setElementAsMask(this.elem, s[h]), h += 1;
      this.initialized = !0;
    }, SVGMatte3Effect.prototype.renderFrame = function() {
      this.initialized || this.initialize();
    }, SVGGaussianBlurEffect.prototype.renderFrame = function(o) {
      if (o || this.filterManager._mdf) {
        var s = 0.3 * this.filterManager.effectElements[0].p.v, h = this.filterManager.effectElements[1].p.v, g = h == 3 ? 0 : s, j = h == 2 ? 0 : s;
        this.feGaussianBlur.setAttribute("stdDeviation", g + " " + j);
        var tt = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
        this.feGaussianBlur.setAttribute("edgeMode", tt);
      }
    }, TransformEffect.prototype.init = function(o) {
      this.effectsManager = o, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix(), this.opacity = -1, this._mdf = !1, this._opMdf = !1;
    }, TransformEffect.prototype.renderFrame = function(o) {
      if (this._opMdf = !1, this._mdf = !1, o || this.effectsManager._mdf) {
        var s = this.effectsManager.effectElements, h = s[0].p.v, g = s[1].p.v, j = s[2].p.v === 1, tt = s[3].p.v, rt = j ? tt : s[4].p.v, at = s[5].p.v, it = s[6].p.v, st = s[7].p.v;
        this.matrix.reset(), this.matrix.translate(-h[0], -h[1], h[2]), this.matrix.scale(0.01 * rt, 0.01 * tt, 1), this.matrix.rotate(-st * degToRads), this.matrix.skewFromAxis(-at * degToRads, (it + 90) * degToRads), this.matrix.translate(g[0], g[1], 0), this._mdf = !0, this.opacity !== s[8].p.v && (this.opacity = s[8].p.v, this._opMdf = !0);
      }
    }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie;
  }, module.exports = e());
})(lottie$1, lottie$1.exports);
var lottieExports = lottie$1.exports;
const _lottie = getDefaultExportFromCjs(lottieExports), lottie = _lottie, Lottie = reactExports.forwardRef((o, s) => {
  const { className: h, animationData: g, autoplay: j = !1, loop: tt = !1, initialAnimation: rt, alt: at, longDesc: it, id: st, decorativeFlag: lt = !1, height: ot, width: ft, path: ht, style: pt, ...dt } = o, ct = reactExports.useRef(null), mt = reactExports.useRef(null), yt = reactExports.useRef(), vt = reactExports.useRef([]), [_t, Pt] = reactExports.useState(at), [bt, kt] = reactExports.useState(it), wt = reactExports.useMemo(() => `${st}-alt-text`, [at, st]), xt = reactExports.useMemo(() => it ? `${st}-long-desc` : void 0, [it, st]);
  reactExports.useEffect(() => (mt.current = lottie.loadAnimation({ animationData: g, path: ht, autoplay: j, loop: tt, container: ct.current, renderer: "svg" }), mt.current.addEventListener("DOMLoaded", () => {
    rt && mt.current.goToAndPlay(rt);
  }), () => {
    var Kt;
    At(), (Kt = mt.current) == null || Kt.destroy();
  }), [g]);
  const Tt = () => mt.current.isLoaded, It = () => {
    At(), mt.current.play();
  }, qt = () => new Promise((Kt) => {
    At(), mt.current.loop = !1, mt.current.play();
    const rr = mt.current.addEventListener("complete", () => {
      rr(), Kt();
    });
    vt.current.push(rr);
  }), Wt = () => {
    mt.current.stop();
  }, Nt = () => {
    mt.current.pause();
  }, Yt = (Kt, rr = !1) => {
    if (Kt === null) throw new Error(`lottie marker ${Kt} is undefined or null`);
    if (typeof Kt == "string" && !dr(Kt)) throw new Error(`lottie marker ${Kt} does not exist`);
    return new Promise((nr) => {
      At(), mt.current.loop = !1, mt.current.goToAndPlay(Kt, rr);
      const Dr = mt.current.addEventListener("complete", () => {
        Dr(), nr();
      });
      vt.current.push(Dr);
    });
  }, sr = (Kt) => {
    if (!dr(Kt)) throw new Error(`lottie marker ${Kt} does not exist`);
    At(), mt.current.loop = !0, mt.current.goToAndPlay(Kt);
  }, ur = (Kt) => {
    if (!dr(Kt)) throw new Error(`lottie marker ${Kt} does not exist`);
    mt.current.goToAndStop(Kt);
  }, Rt = (Kt, rr) => {
    const nr = dr(Kt), Dr = dr(rr);
    if (!nr || !Dr) throw new Error("lottie marker does not exist");
    At(), mt.current.loop = !0, mt.current.playSegments([nr.time, nr.time + nr.duration], !0);
    const Wr = mt.current.addEventListener("loopComplete", () => {
      mt.current.playSegments([Dr.time, Dr.time + Dr.duration], !0);
    });
    vt.current.push(Wr);
  }, Ft = (Kt, rr) => {
    if (!Kt || !rr) return x.error("Either frame_id or fram_id_stop does not exist"), null;
    const nr = dr(Kt), Dr = dr(rr);
    return nr && Dr ? new Promise((Wr) => {
      At(), mt.current.loop = !1;
      const zr = mt.current.addEventListener("enterFrame", ({ currentTime: Hr }) => {
        Hr >= Dr.time && (zr(), ur(rr), Wr());
      });
      mt.current.goToAndPlay(Kt), vt.current.push(zr);
    }) : (x.error("lottie marker does not exist"), null);
  }, At = () => {
    for (; vt.current.length; ) vt.current.shift()();
  }, Zt = (Kt) => {
    mt.current.setSpeed(Kt);
  }, hr = (Kt) => Kt ? dr(Kt).duration / mt.current.frameRate : mt.current.getDuration(), Pr = () => {
    const Kt = mt.current.markers ?? null;
    if (!Kt) return [];
    const rr = mt.current.currentFrame + mt.current.firstFrame;
    return Kt.filter((nr) => rr >= nr.time && rr <= nr.time + nr.duration).map((nr) => nr.payload.name);
  }, dr = (Kt) => {
    var rr;
    const nr = ((rr = mt.current) == null ? void 0 : rr.markers) ?? null;
    return nr ? nr.find((Dr) => Dr.payload.name === Kt) : null;
  }, Er = (Kt) => {
    if (Kt.data.type !== "cm-data-alt-text-ld") {
      const { action: rr, frame_id: nr, frame_id_stop: Dr } = Kt.data;
      if (!rr || !nr) return x.error("Either action or frame_id does not exist"), null;
      const Wr = () => {
        var Hr;
        return (Hr = Kt.resolve) == null ? void 0 : Hr.call(Kt, void 0);
      };
      let zr;
      switch (rr) {
        case "PLAY":
          zr = It();
          break;
        case "STOP":
          zr = ur(nr);
          break;
        case "JUMP_AND_PLAY":
          zr = Yt(nr);
          break;
        case "PLAY_SEGMENT":
          zr = Ft(nr, Dr);
      }
      return zr instanceof Promise && zr.then(Wr), zr;
    }
    Pt(Kt.data.alt_text), kt(Kt.data.long_description);
  }, Sr = () => (yt.current || (yt.current = new Promise((Kt) => {
    const rr = () => {
      Tt() ? Kt() : setTimeout(() => {
        rr();
      }, 500);
    };
    rr();
  })), yt.current);
  return reactExports.useImperativeHandle(s, () => ({ animationRef: mt, isLoaded: Tt, play: It, playAndWait: qt, stop: Wt, pause: Nt, gotoAndPlay: Yt, gotoAndLoop: sr, gotoAndStop: ur, playThenLoop: Rt, playSegment: Ft, setSpeed: Zt, getDuration: hr, getMarkerByName: dr, getCurrentMarkers: Pr, containerRef: ct, callMechanism: Er, onAnimationLoad: Sr }), []), jsxRuntimeExports.jsx("div", { id: st, className: h, ref: ct, "aria-hidden": lt, style: { height: ot, width: ft, ...pt }, ...dt, children: lt ? null : jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("p", { id: wt, className: "sr-only", children: _t }), it ? jsxRuntimeExports.jsx("p", { id: xt, className: "sr-only", children: bt }) : null] }) });
});
export {
  E,
  J,
  Link as L,
  Navigate as N,
  Outlet as O,
  Provider_default as P,
  React$1 as R,
  _extends as _,
  useSelector as a,
  reactDomExports as b,
  getAugmentedNamespace as c,
  commonjsGlobal$1 as d,
  useOutletContext as e,
  connect_default as f,
  getDefaultExportFromCjs$1 as g,
  createSearchParams as h,
  initReactI18next as i,
  jsxRuntimeExports as j,
  Lottie as k,
  lodashExports as l,
  useSearchParams as m,
  useParams as n,
  useLocation as o,
  createMemoryRouter as p,
  RouterProvider as q,
  reactExports as r,
  client as s,
  useDispatch as u,
  x
};
