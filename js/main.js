var kc = (e) => {
  throw TypeError(e);
};
var fl = (e, t, n) => t.has(e) || kc("Cannot " + n);
var j = (e, t, n) => (
  fl(e, t, "read from private field"),
  n ? n.call(e) : t.get(e)
),
  ee = (e, t, n) =>
    t.has(e)
      ? kc("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  K = (e, t, n, r) => (
    fl(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  Ne = (e, t, n) => (fl(e, t, "access private method"), n);
var vs = (e, t, n, r) => ({
  set _(o) {
    K(e, t, o, n);
  },
  get _() {
    return j(e, t, r);
  },
});
function Bg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s &&
            Object.defineProperty(
              e,
              o,
              s.get ? s : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)

          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function Af(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Lf = { exports: {} },
  Mi = {},
  If = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var is = Symbol.for("react.element"),
  Ug = Symbol.for("react.portal"),
  Wg = Symbol.for("react.fragment"),
  Vg = Symbol.for("react.strict_mode"),
  Hg = Symbol.for("react.profiler"),
  Qg = Symbol.for("react.provider"),
  Yg = Symbol.for("react.context"),
  Kg = Symbol.for("react.forward_ref"),
  Gg = Symbol.for("react.suspense"),
  Xg = Symbol.for("react.memo"),
  qg = Symbol.for("react.lazy"),
  Nc = Symbol.iterator;
function Zg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Nc && e[Nc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Df = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () { },
  enqueueReplaceState: function () { },
  enqueueSetState: function () { },
},
  Ff = Object.assign,
  zf = {};
function oo(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = zf),
    (this.updater = n || Df));
}
oo.prototype.isReactComponent = {};
oo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
oo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $f() { }
$f.prototype = oo.prototype;
function iu(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = zf),
    (this.updater = n || Df));
}
var lu = (iu.prototype = new $f());
lu.constructor = iu;
Ff(lu, oo.prototype);
lu.isPureReactComponent = !0;
var Pc = Array.isArray,
  Bf = Object.prototype.hasOwnProperty,
  au = { current: null },
  Uf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wf(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
      t.key !== void 0 && (s = "" + t.key),
      t))
      Bf.call(t, r) && !Uf.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: is,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: au.current,
  };
}
function Jg(e, t) {
  return {
    $$typeof: is,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function uu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === is;
}
function e0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Tc = /\/+/g;
function pl(e, t) {

  return typeof e == "object" && e !== null && e.key != null
    ? e0("" + e.key)
    : t.toString(36);
}
function Bs(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (s) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case is:
          case Ug:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + pl(i, 0) : r),
      Pc(o)
        ? ((n = ""),
          e != null && (n = e.replace(Tc, "$&/") + "/"),
          Bs(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
        (uu(o) &&
          (o = Jg(
            o,
            n +
            (!o.key || (i && i.key === o.key)
              ? ""
              : ("" + o.key).replace(Tc, "$&/") + "/") +
            e,
          )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Pc(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + pl(s, l);
      i += Bs(s, t, n, a, o);
    }
  else if (((a = Zg(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done;)
      ((s = s.value), (a = r + pl(s, l++)), (i += Bs(s, t, n, a, o)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
        (t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t) +
        "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return i;
}
function ys(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Bs(e, r, "", "", function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function t0(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ie = { current: null },
  Us = { transition: null },
  n0 = {
    ReactCurrentDispatcher: Ie,
    ReactCurrentBatchConfig: Us,
    ReactCurrentOwner: au,
  };
function Vf() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = {
  map: ys,
  forEach: function (e, t, n) {
    ys(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ys(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ys(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!uu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
q.Component = oo;
q.Fragment = Wg;
q.Profiler = Hg;
q.PureComponent = iu;
q.StrictMode = Vg;
q.Suspense = Gg;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = n0;
q.act = Vf;
q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
      e +
      ".",
    );
  var r = Ff({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = au.current)),
        t.key !== void 0 && (o = "" + t.key),

        e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Bf.call(t, a) &&
        !Uf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: is, type: e.type, key: o, ref: s, props: r, _owner: i };
};
q.createContext = function (e) {
  return (
    (e = {
      $$typeof: Yg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Qg, _context: e }),
    (e.Consumer = e)
  );
};
q.createElement = Wf;
q.createFactory = function (e) {
  var t = Wf.bind(null, e);
  return ((t.type = e), t);
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (e) {
  return { $$typeof: Kg, render: e };
};
q.isValidElement = uu;
q.lazy = function (e) {
  return { $$typeof: qg, _payload: { _status: -1, _result: e }, _init: t0 };
};
q.memo = function (e, t) {
  return { $$typeof: Xg, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
  var t = Us.transition;
  Us.transition = {};
  try {
    e();
  } finally {
    Us.transition = t;
  }
};
q.unstable_act = Vf;
q.useCallback = function (e, t) {
  return Ie.current.useCallback(e, t);
};
q.useContext = function (e) {
  return Ie.current.useContext(e);
};
q.useDebugValue = function () { };
q.useDeferredValue = function (e) {
  return Ie.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
  return Ie.current.useEffect(e, t);
};
q.useId = function () {
  return Ie.current.useId();
};
q.useImperativeHandle = function (e, t, n) {
  return Ie.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
  return Ie.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return Ie.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return Ie.current.useMemo(e, t);
};
q.useReducer = function (e, t, n) {
  return Ie.current.useReducer(e, t, n);
};
q.useRef = function (e) {
  return Ie.current.useRef(e);
};
q.useState = function (e) {
  return Ie.current.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
  return Ie.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
  return Ie.current.useTransition();
};
q.version = "18.3.1";
If.exports = q;
var w = If.exports;
const z = Af(w),
  Hf = Bg({ __proto__: null, default: z }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r0 = w,
  o0 = Symbol.for("react.element"),
  s0 = Symbol.for("react.fragment"),
  i0 = Object.prototype.hasOwnProperty,
  l0 = r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  a0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qf(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) i0.call(t, r) && !a0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: o0,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: l0.current,
  };
}
Mi.Fragment = s0;
Mi.jsx = Qf;
Mi.jsxs = Qf;
Lf.exports = Mi;
var g = Lf.exports,
  Yf = { exports: {} },
  Ze = {},
  Kf = { exports: {} },
  Gf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *

* This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, R) {
    var M = T.length;
    T.push(R);
    e: for (; 0 < M;) {
      var D = (M - 1) >>> 1,
        _ = T[D];
      if (0 < o(_, R)) ((T[D] = R), (T[M] = _), (M = D));
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var R = T[0],
      M = T.pop();
    if (M !== R) {
      T[0] = M;
      e: for (var D = 0, _ = T.length, F = _ >>> 1; D < F;) {
        var U = 2 * (D + 1) - 1,
          Z = T[U],
          te = U + 1,
          X = T[te];
        if (0 > o(Z, M))
          te < _ && 0 > o(X, Z)
            ? ((T[D] = X), (T[te] = M), (D = te))
            : ((T[D] = Z), (T[U] = M), (D = U));
        else if (te < _ && 0 > o(X, M)) ((T[D] = X), (T[te] = M), (D = te));
        else break e;
      }
    }
    return R;
  }
  function o(T, R) {
    var M = T.sortIndex - R.sortIndex;
    return M !== 0 ? M : T.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  var a = [],
    u = [],
    d = 1,
    c = null,
    h = 3,
    f = !1,
    S = !1,
    y = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(T) {
    for (var R = n(u); R !== null;) {
      if (R.callback === null) r(u);
      else if (R.startTime <= T)
        (r(u), (R.sortIndex = R.expirationTime), t(a, R));
      else break;
      R = n(u);
    }
  }
  function E(T) {
    if (((y = !1), v(T), !S))
      if (n(a) !== null) ((S = !0), H(b));
      else {
        var R = n(u);
        R !== null && Q(E, R.startTime - T);
      }
  }
  function b(T, R) {
    ((S = !1), y && ((y = !1), m(A), (A = -1)), (f = !0));
    var M = h;
    try {
      for (
        v(R), c = n(a);
        c !== null && (!(c.expirationTime > R) || (T && !L()));
      ) {
        var D = c.callback;
        if (typeof D == "function") {
          ((c.callback = null), (h = c.priorityLevel));
          var _ = D(c.expirationTime <= R);
          ((R = e.unstable_now()),
            typeof _ == "function" ? (c.callback = _) : c === n(a) && r(a),
            v(R));
        } else r(a);
        c = n(a);
      }
      if (c !== null) var F = !0;
      else {
        var U = n(u);
        (U !== null && Q(E, U.startTime - R), (F = !1));
      }
      return F;
    } finally {
      ((c = null), (h = M), (f = !1));
    }
  }
  var k = !1,
    P = null,
    A = -1,
    B = 5,
    O = -1;
  function L() {
    return !(e.unstable_now() - O < B);
  }
  function C() {
    if (P !== null) {
      var T = e.unstable_now();
      O = T;
      var R = !0;
      try {
        R = P(!0, T);
      } finally {
        R ? $() : ((k = !1), (P = null));
      }
    } else k = !1;
  }
  var $;
  if (typeof p == "function")
    $ = function () {
      p(C);
    };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(),
      W = N.port2;
    ((N.port1.onmessage = C),
      ($ = function () {
        W.postMessage(null);
      }));
  } else
    $ = function () {
      x(C, 0);
    };
  function H(T) {
    ((P = T), k || ((k = !0), $()));
  }
  function Q(T, R) {
    A = x(function () {
      T(e.unstable_now());
    }, R);
  }

  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || f || ((S = !0), H(b));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
        )
        : (B = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (T) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = h;
      }
      var M = h;
      h = R;
      try {
        return T();
      } finally {
        h = M;
      }
    }),
    (e.unstable_pauseExecution = function () { }),
    (e.unstable_requestPaint = function () { }),
    (e.unstable_runWithPriority = function (T, R) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var M = h;
      h = T;
      try {
        return R();
      } finally {
        h = M;
      }
    }),
    (e.unstable_scheduleCallback = function (T, R, M) {
      var D = e.unstable_now();
      switch (
      (typeof M == "object" && M !== null
        ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? D + M : D))
        : (M = D),
        T)
      ) {
        case 1:
          var _ = -1;
          break;
        case 2:
          _ = 250;
          break;
        case 5:
          _ = 1073741823;
          break;
        case 4:
          _ = 1e4;
          break;
        default:
          _ = 5e3;
      }
      return (
        (_ = M + _),
        (T = {
          id: d++,
          callback: R,
          priorityLevel: T,
          startTime: M,
          expirationTime: _,
          sortIndex: -1,
        }),
        M > D
          ? ((T.sortIndex = M),
            t(u, T),
            n(a) === null &&
            T === n(u) &&
            (y ? (m(A), (A = -1)) : (y = !0), Q(E, M - D)))
          : ((T.sortIndex = _), t(a, T), S || f || ((S = !0), H(b))),
        T
      );
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (T) {
      var R = h;
      return function () {
        var M = h;
        h = R;
        try {
          return T.apply(this, arguments);
        } finally {
          h = M;
        }
      };
    }));
})(Gf);
Kf.exports = Gf;
var u0 = Kf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var c0 = w,
  qe = u0;
function I(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Xf = new Set(),
  Do = {};
function ur(e, t) {
  (Gr(e, t), Gr(e + "Capture", t));
}
function Gr(e, t) {
  for (Do[e] = t, e = 0; e < t.length; e++) Xf.add(t[e]);
}
var Qt = !(
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
),

  ql = Object.prototype.hasOwnProperty,
  d0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Rc = {},
  _c = {};
function f0(e) {
  return ql.call(_c, e)
    ? !0
    : ql.call(Rc, e)
      ? !1
      : d0.test(e)
        ? (_c[e] = !0)
        : ((Rc[e] = !0), !1);
}
function p0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function h0(e, t, n, r) {
  if (t === null || typeof t > "u" || p0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function De(e, t, n, r, o, s, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i));
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ke[e] = new De(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ke[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ke[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ke[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ke[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ke[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ke[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ke[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ke[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var cu = /[\-:]([a-z])/g;
function du(e) {
  return e[1].toUpperCase();
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(cu, du);
    ke[t] = new De(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(cu, du);
    ke[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(cu, du);
  ke[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ke[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new De(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ke[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function fu(e, t, n, r) {
  var o = ke.hasOwnProperty(t) ? ke[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
    !(2 < t.length) ||
    (t[0] !== "o" && t[0] !== "O") ||
    (t[1] !== "n" && t[1] !== "N")) &&
    (h0(t, n, o, r) && (n = null),
      r || o === null
        ? f0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : o.mustUseProperty
          ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
          : ((t = o.attributeName),
            (r = o.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((o = o.type),
                (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Zt = c0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xs = Symbol.for("react.element"),
  wr = Symbol.for("react.portal"),
  Sr = Symbol.for("react.fragment"),
  pu = Symbol.for("react.strict_mode"),
  Zl = Symbol.for("react.profiler"),
  qf = Symbol.for("react.provider"),
  Zf = Symbol.for("react.context"),
  hu = Symbol.for("react.forward_ref"),
  Jl = Symbol.for("react.suspense"),
  ea = Symbol.for("react.suspense_list"),
  mu = Symbol.for("react.memo"),
  fn = Symbol.for("react.lazy"),
  Jf = Symbol.for("react.offscreen"),
  jc = Symbol.iterator;
function po(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (jc && e[jc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pe = Object.assign,
  hl;
function bo(e) {
  if (hl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      hl = (t && t[1]) || "";
    }
  return (
    `
` +
    hl +
    e
  );
}
var ml = !1;
function gl(e, t) {
  if (!e || ml) return "";
  ml = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },

          }),
          typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
        s = r.stack.split(`
`),
        i = o.length - 1,
        l = s.length - 1;
        1 <= i && 0 <= l && o[i] !== s[l];
      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (o[i] !== s[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || o[i] !== s[l])) {
                var a =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                  a.includes("<anonymous>") &&
                  (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    ((ml = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? bo(e) : "";
}
function m0(e) {
  switch (e.tag) {
    case 5:
      return bo(e.type);
    case 16:
      return bo("Lazy");
    case 13:
      return bo("Suspense");
    case 19:
      return bo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = gl(e.type, !1)), e);
    case 11:
      return ((e = gl(e.type.render, !1)), e);
    case 1:
      return ((e = gl(e.type, !0)), e);
    default:
      return "";
  }
}
function ta(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sr:
      return "Fragment";
    case wr:
      return "Portal";
    case Zl:
      return "Profiler";
    case pu:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case ea:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Zf:
        return (e.displayName || "Context") + ".Consumer";
      case qf:
        return (e._context.displayName || "Context") + ".Provider";
      case hu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
          ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case mu:
        return (
          (t = e.displayName || null),
          t !== null ? t : ta(e.type) || "Memo"
        );
      case fn:
        ((t = e._payload), (e = e._init));
        try {
          return ta(e(t));
        } catch { }
    }
  return null;
}
function g0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ta(t);
    case 8:
      return t === pu ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function On(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ep(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function v0(e) {
  var t = ep(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          ((r = "" + i), s.call(this, i));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function ws(e) {
  e._valueTracker || (e._valueTracker = v0(e));
}
function tp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ep(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ni(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function na(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Oc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = On(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function np(e, t) {
  ((t = t.checked), t != null && fu(e, "checked", t, !1));
}
function ra(e, t) {
  np(e, t);
  var n = On(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? oa(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && oa(e, t.type, On(t.defaultValue)),
    t.checked == null &&
    t.defaultChecked != null &&
    (e.defaultChecked = !!t.defaultChecked));
}
function Mc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function oa(e, t, n) {

  (t !== "number" || ni(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Co = Array.isArray;
function Or(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + On(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function sa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ac(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(I(92));
      if (Co(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: On(n) };
}
function rp(e, t) {
  var n = On(t.value),
    r = On(t.defaultValue);
  (n != null &&
    ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Lc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function op(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ia(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? op(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ss,
  sp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function () {
          return e(t, n, r, o);
        });
      }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ss = Ss || document.createElement("div"),
        Ss.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Ss.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild;) e.appendChild(t.firstChild);
    }
  });
function Fo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Po = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,

  strokeWidth: !0,
},
  y0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Po).forEach(function (e) {
  y0.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Po[t] = Po[e]));
  });
});
function ip(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Po.hasOwnProperty(e) && Po[e])
      ? ("" + t).trim()
      : t + "px";
}
function lp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = ip(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
    }
}
var x0 = pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function la(e, t) {
  if (t) {
    if (x0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function aa(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var ua = null;
function gu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ca = null,
  Mr = null,
  Ar = null;
function Ic(e) {
  if ((e = us(e))) {
    if (typeof ca != "function") throw Error(I(280));
    var t = e.stateNode;
    t && ((t = Fi(t)), ca(e.stateNode, e.type, t));
  }
}
function ap(e) {
  Mr ? (Ar ? Ar.push(e) : (Ar = [e])) : (Mr = e);
}
function up() {
  if (Mr) {
    var e = Mr,
      t = Ar;
    if (((Ar = Mr = null), Ic(e), t)) for (e = 0; e < t.length; e++) Ic(t[e]);
  }
}
function cp(e, t) {
  return e(t);
}
function dp() { }
var vl = !1;
function fp(e, t, n) {
  if (vl) return e(t, n);
  vl = !0;
  try {
    return cp(e, t, n);
  } finally {
    ((vl = !1), (Mr !== null || Ar !== null) && (dp(), up()));
  }
}
function zo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      ((r = !r.disabled) ||
        ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var da = !1;
if (Qt)
  try {
    var ho = {};
    (Object.defineProperty(ho, "passive", {
      get: function () {
        da = !0;
      },
    }),
      window.addEventListener("test", ho, ho),
      window.removeEventListener("test", ho, ho));
  } catch {
    da = !1;
  }
function w0(e, t, n, r, o, s, i, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {

    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var To = !1,
  ri = null,
  oi = !1,
  fa = null,
  S0 = {
    onError: function (e) {
      ((To = !0), (ri = e));
    },
  };
function E0(e, t, n, r, o, s, i, l, a) {
  ((To = !1), (ri = null), w0.apply(S0, arguments));
}
function b0(e, t, n, r, o, s, i, l, a) {
  if ((E0.apply(this, arguments), To)) {
    if (To) {
      var u = ri;
      ((To = !1), (ri = null));
    } else throw Error(I(198));
    oi || ((oi = !0), (fa = u));
  }
}
function cr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return;) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function pp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Dc(e) {
  if (cr(e) !== e) throw Error(I(188));
}
function C0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = cr(e)), t === null)) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ;) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s;) {
        if (s === n) return (Dc(o), e);
        if (s === r) return (Dc(o), t);
        s = s.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) ((n = o), (r = s));
    else {
      for (var i = !1, l = o.child; l;) {
        if (l === n) {
          ((i = !0), (n = o), (r = s));
          break;
        }
        if (l === r) {
          ((i = !0), (r = o), (n = s));
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = s.child; l;) {
          if (l === n) {
            ((i = !0), (n = s), (r = o));
            break;
          }
          if (l === r) {
            ((i = !0), (r = s), (n = o));
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function hp(e) {
  return ((e = C0(e)), e !== null ? mp(e) : null);
}
function mp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = mp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gp = qe.unstable_scheduleCallback,
  Fc = qe.unstable_cancelCallback,
  k0 = qe.unstable_shouldYield,
  N0 = qe.unstable_requestPaint,
  ge = qe.unstable_now,
  P0 = qe.unstable_getCurrentPriorityLevel,
  vu = qe.unstable_ImmediatePriority,
  vp = qe.unstable_UserBlockingPriority,
  si = qe.unstable_NormalPriority,
  T0 = qe.unstable_LowPriority,
  yp = qe.unstable_IdlePriority,
  Ai = null,
  Mt = null;
function R0(e) {
  if (Mt && typeof Mt.onCommitFiberRoot == "function")
    try {
      Mt.onCommitFiberRoot(Ai, e, void 0, (e.current.flags & 128) === 128);
    } catch { }
}
var wt = Math.clz32 ? Math.clz32 : O0,
  _0 = Math.log,
  j0 = Math.LN2;
function O0(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((_0(e) / j0) | 0)) | 0);
}
var Es = 64,
  bs = 4194304;
function ko(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ii(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? (r = ko(l)) : ((s &= i), s !== 0 && (r = ko(s)));
  } else ((i = n & ~o), i !== 0 ? (r = ko(i)) : s !== 0 && (r = ko(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t;)
      ((n = 31 - wt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
  return r;
}
function M0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function A0(e, t) {
  for (
    var n = e.suspendedLanes,
    r = e.pingedLanes,
    o = e.expirationTimes,
    s = e.pendingLanes;
    0 < s;
  ) {
    var i = 31 - wt(s),
      l = 1 << i,
      a = o[i];
    (a === -1
      ? (!(l & n) || l & r) && (o[i] = M0(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l));
  }
}
function pa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function xp() {
  var e = Es;
  return ((Es <<= 1), !(Es & 4194240) && (Es = 64), e);
}
function yl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ls(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - wt(t)),
    (e[t] = n));
}
function L0(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var o = 31 - wt(n),
      s = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s));
  }
}
function yu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n;) {
    var r = 31 - wt(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var ne = 0;
function wp(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Sp,
  xu,
  Ep,
  bp,
  Cp,
  ha = !1,
  Cs = [],
  Cn = null,
  kn = null,
  Nn = null,
  $o = new Map(),
  Bo = new Map(),
  hn = [],
  I0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function zc(e, t) {
  switch (e) {

    case "focusin":
    case "focusout":
      Cn = null;
      break;
    case "dragenter":
    case "dragleave":
      kn = null;
      break;
    case "mouseover":
    case "mouseout":
      Nn = null;
      break;
    case "pointerover":
    case "pointerout":
      $o.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Bo.delete(t.pointerId);
  }
}
function mo(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: s,
      targetContainers: [o],
    }),
      t !== null && ((t = us(t)), t !== null && xu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function D0(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ((Cn = mo(Cn, e, t, n, r, o)), !0);
    case "dragenter":
      return ((kn = mo(kn, e, t, n, r, o)), !0);
    case "mouseover":
      return ((Nn = mo(Nn, e, t, n, r, o)), !0);
    case "pointerover":
      var s = o.pointerId;
      return ($o.set(s, mo($o.get(s) || null, e, t, n, r, o)), !0);
    case "gotpointercapture":
      return (
        (s = o.pointerId),
        Bo.set(s, mo(Bo.get(s) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function kp(e) {
  var t = Qn(e.target);
  if (t !== null) {
    var n = cr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = pp(n)), t !== null)) {
          ((e.blockedOn = t),
            Cp(e.priority, function () {
              Ep(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ws(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = ma(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((ua = r), n.target.dispatchEvent(r), (ua = null));
    } else return ((t = us(n)), t !== null && xu(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function $c(e, t, n) {
  Ws(e) && n.delete(t);
}
function F0() {
  ((ha = !1),
    Cn !== null && Ws(Cn) && (Cn = null),
    kn !== null && Ws(kn) && (kn = null),
    Nn !== null && Ws(Nn) && (Nn = null),
    $o.forEach($c),
    Bo.forEach($c));
}
function go(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
      ha ||
      ((ha = !0),
        qe.unstable_scheduleCallback(qe.unstable_NormalPriority, F0)));
}
function Uo(e) {
  function t(o) {
    return go(o, e);
  }
  if (0 < Cs.length) {
    go(Cs[0], e);
    for (var n = 1; n < Cs.length; n++) {
      var r = Cs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Cn !== null && go(Cn, e),
    kn !== null && go(kn, e),
    Nn !== null && go(Nn, e),
    $o.forEach(t),
    Bo.forEach(t),
    n = 0;
    n < hn.length;
    n++
  )
    ((r = hn[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < hn.length && ((n = hn[0]), n.blockedOn === null);)
    (kp(n), n.blockedOn === null && hn.shift());
}
var Lr = Zt.ReactCurrentBatchConfig,
  li = !0;
function z0(e, t, n, r) {
  var o = ne,
    s = Lr.transition;
  Lr.transition = null;
  try {
    ((ne = 1), wu(e, t, n, r));
  } finally {
    ((ne = o), (Lr.transition = s));
  }
}
function $0(e, t, n, r) {
  var o = ne,
    s = Lr.transition;
  Lr.transition = null;
  try {
    ((ne = 4), wu(e, t, n, r));
  } finally {
    ((ne = o), (Lr.transition = s));
  }
}
function wu(e, t, n, r) {
  if (li) {
    var o = ma(e, t, n, r);
    if (o === null) (Tl(e, t, r, ai, n), zc(e, r));

    else if (D0(o, e, t, n, r)) r.stopPropagation();
    else if ((zc(e, r), t & 4 && -1 < I0.indexOf(e))) {
      for (; o !== null;) {
        var s = us(o);
        if (
          (s !== null && Sp(s),
            (s = ma(e, t, n, r)),
            s === null && Tl(e, t, r, ai, n),
            s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else Tl(e, t, r, null, n);
  }
}
var ai = null;
function ma(e, t, n, r) {
  if (((ai = null), (e = gu(r)), (e = Qn(e)), e !== null))
    if (((t = cr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = pp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ai = e), null);
}
function Np(e) {
  switch (e) {
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
      switch (P0()) {
        case vu:
          return 1;
        case vp:
          return 4;
        case si:
        case T0:
          return 16;
        case yp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Sn = null,
  Su = null,
  Vs = null;
function Pp() {
  if (Vs) return Vs;
  var e,
    t = Su,
    n = t.length,
    r,
    o = "value" in Sn ? Sn.value : Sn.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (Vs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Hs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ks() {
  return !0;
}
function Bc() {
  return !1;
}
function Je(e) {
  function t(n, r, o, s, i) {
    ((this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null));
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (

        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ks
        : Bc),
      (this.isPropagationStopped = Bc),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = ks));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = ks));
      },
      persist: function () { },
      isPersistent: ks,
    }),
    t
  );
}
var so = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function (e) {
    return e.timeStamp || Date.now();
  },
  defaultPrevented: 0,
  isTrusted: 0,
},
  Eu = Je(so),
  as = pe({}, so, { view: 0, detail: 0 }),
  B0 = Je(as),
  xl,
  wl,
  vo,
  Li = pe({}, as, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: bu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vo &&
          (vo && e.type === "mousemove"
            ? ((xl = e.screenX - vo.screenX), (wl = e.screenY - vo.screenY))
            : (wl = xl = 0),
            (vo = e)),
          xl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : wl;
    },
  }),
  Uc = Je(Li),
  U0 = pe({}, Li, { dataTransfer: 0 }),
  W0 = Je(U0),
  V0 = pe({}, as, { relatedTarget: 0 }),
  Sl = Je(V0),
  H0 = pe({}, so, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Q0 = Je(H0),
  Y0 = pe({}, so, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  K0 = Je(Y0),
  G0 = pe({}, so, { data: 0 }),
  Wc = Je(G0),
  X0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  q0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Z0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function J0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Z0[e]) ? !!t[e] : !1;
}
function bu() {
  return J0;
}
var ev = pe({}, as, {
  key: function (e) {
    if (e.key) {
      var t = X0[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress"
      ? ((e = Hs(e)), e === 13 ? "Enter" : String.fromCharCode(e))

      : e.type === "keydown" || e.type === "keyup"
        ? q0[e.keyCode] || "Unidentified"
        : "";
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: bu,
  charCode: function (e) {
    return e.type === "keypress" ? Hs(e) : 0;
  },
  keyCode: function (e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  },
  which: function (e) {
    return e.type === "keypress"
      ? Hs(e)
      : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
  },
}),
  tv = Je(ev),
  nv = pe({}, Li, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Vc = Je(nv),
  rv = pe({}, as, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bu,
  }),
  ov = Je(rv),
  sv = pe({}, so, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  iv = Je(sv),
  lv = pe({}, Li, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  av = Je(lv),
  uv = [9, 13, 27, 32],
  Cu = Qt && "CompositionEvent" in window,
  Ro = null;
Qt && "documentMode" in document && (Ro = document.documentMode);
var cv = Qt && "TextEvent" in window && !Ro,
  Tp = Qt && (!Cu || (Ro && 8 < Ro && 11 >= Ro)),
  Hc = " ",
  Qc = !1;
function Rp(e, t) {
  switch (e) {
    case "keyup":
      return uv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function _p(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Er = !1;
function dv(e, t) {
  switch (e) {
    case "compositionend":
      return _p(t);
    case "keypress":
      return t.which !== 32 ? null : ((Qc = !0), Hc);
    case "textInput":
      return ((e = t.data), e === Hc && Qc ? null : e);
    default:
      return null;
  }
}
function fv(e, t) {
  if (Er)
    return e === "compositionend" || (!Cu && Rp(e, t))
      ? ((e = Pp()), (Vs = Su = Sn = null), (Er = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Tp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var pv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Yc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!pv[e.type] : t === "textarea";
}
function jp(e, t, n, r) {
  (ap(r),
    (t = ui(t, "onChange")),
    0 < t.length &&
    ((n = new Eu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var _o = null,
  Wo = null;
function hv(e) {
  Up(e, 0);
}
function Ii(e) {
  var t = kr(e);
  if (tp(t)) return e;
}
function mv(e, t) {
  if (e === "change") return t;
}
var Op = !1;
if (Qt) {
  var El;
  if (Qt) {
    var bl = "oninput" in document;
    if (!bl) {

      var Kc = document.createElement("div");
      (Kc.setAttribute("oninput", "return;"),
        (bl = typeof Kc.oninput == "function"));
    }
    El = bl;
  } else El = !1;
  Op = El && (!document.documentMode || 9 < document.documentMode);
}
function Gc() {
  _o && (_o.detachEvent("onpropertychange", Mp), (Wo = _o = null));
}
function Mp(e) {
  if (e.propertyName === "value" && Ii(Wo)) {
    var t = [];
    (jp(t, Wo, e, gu(e)), fp(hv, t));
  }
}
function gv(e, t, n) {
  e === "focusin"
    ? (Gc(), (_o = t), (Wo = n), _o.attachEvent("onpropertychange", Mp))
    : e === "focusout" && Gc();
}
function vv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ii(Wo);
}
function yv(e, t) {
  if (e === "click") return Ii(t);
}
function xv(e, t) {
  if (e === "input" || e === "change") return Ii(t);
}
function wv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Et = typeof Object.is == "function" ? Object.is : wv;
function Vo(e, t) {
  if (Et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ql.call(t, o) || !Et(e[o], t[o])) return !1;
  }
  return !0;
}
function Xc(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e;
}
function qc(e, t) {
  var n = Xc(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Xc(n);
  }
}
function Ap(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ap(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Lp() {
  for (var e = window, t = ni(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ni(e.document);
  }
  return t;
}
function ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Sv(e) {
  var t = Lp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ap(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ku(n)) {
      if (
        ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          s = Math.min(r.start, o);
        ((r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = qc(n, s)));
        var i = qc(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||

            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
            t.setStart(o.node, o.offset),
            e.removeAllRanges(),
            s > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode);)
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Ev = Qt && "documentMode" in document && 11 >= document.documentMode,
  br = null,
  ga = null,
  jo = null,
  va = !1;
function Zc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  va ||
    br == null ||
    br !== ni(r) ||
    ((r = br),
      "selectionStart" in r && ku(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (jo && Vo(jo, r)) ||
      ((jo = r),
        (r = ui(ga, "onSelect")),
        0 < r.length &&
        ((t = new Eu("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = br))));
}
function Ns(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Cr = {
  animationend: Ns("Animation", "AnimationEnd"),
  animationiteration: Ns("Animation", "AnimationIteration"),
  animationstart: Ns("Animation", "AnimationStart"),
  transitionend: Ns("Transition", "TransitionEnd"),
},
  Cl = {},
  Ip = {};
Qt &&
  ((Ip = document.createElement("div").style),
    "AnimationEvent" in window ||
    (delete Cr.animationend.animation,
      delete Cr.animationiteration.animation,
      delete Cr.animationstart.animation),
    "TransitionEvent" in window || delete Cr.transitionend.transition);
function Di(e) {
  if (Cl[e]) return Cl[e];
  if (!Cr[e]) return e;
  var t = Cr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ip) return (Cl[e] = t[n]);
  return e;
}
var Dp = Di("animationend"),
  Fp = Di("animationiteration"),
  zp = Di("animationstart"),
  $p = Di("transitionend"),
  Bp = new Map(),
  Jc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Fn(e, t) {
  (Bp.set(e, t), ur(t, [e]));
}
for (var kl = 0; kl < Jc.length; kl++) {
  var Nl = Jc[kl],
    bv = Nl.toLowerCase(),
    Cv = Nl[0].toUpperCase() + Nl.slice(1);
  Fn(bv, "on" + Cv);
}
Fn(Dp, "onAnimationEnd");
Fn(Fp, "onAnimationIteration");
Fn(zp, "onAnimationStart");
Fn("dblclick", "onDoubleClick");
Fn("focusin", "onFocus");
Fn("focusout", "onBlur");
Fn($p, "onTransitionEnd");
Gr("onMouseEnter", ["mouseout", "mouseover"]);
Gr("onMouseLeave", ["mouseout", "mouseover"]);
Gr("onPointerEnter", ["pointerout", "pointerover"]);
Gr("onPointerLeave", ["pointerout", "pointerover"]);
ur(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
ur(
  "onSelect",

  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
ur("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ur(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
ur(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
ur(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var No =
  "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " ",
  ),
  kv = new Set("cancel close invalid load scroll toggle".split(" ").concat(No));
function ed(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), b0(r, t, void 0, e), (e.currentTarget = null));
}
function Up(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && o.isPropagationStopped())) break e;
          (ed(o, l, u), (s = a));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((l = r[i]),
              (a = l.instance),
              (u = l.currentTarget),
              (l = l.listener),
              a !== s && o.isPropagationStopped())
          )
            break e;
          (ed(o, l, u), (s = a));
        }
    }
  }
  if (oi) throw ((e = fa), (oi = !1), (fa = null), e);
}
function le(e, t) {
  var n = t[Ea];
  n === void 0 && (n = t[Ea] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Wp(t, e, 2, !1), n.add(r));
}
function Pl(e, t, n) {
  var r = 0;
  (t && (r |= 4), Wp(n, e, r, t));
}
var Ps = "_reactListening" + Math.random().toString(36).slice(2);
function Ho(e) {
  if (!e[Ps]) {
    ((e[Ps] = !0),
      Xf.forEach(function (n) {
        n !== "selectionchange" && (kv.has(n) || Pl(n, !1, e), Pl(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ps] || ((t[Ps] = !0), Pl("selectionchange", !1, t));
  }
}
function Wp(e, t, n, r) {
  switch (Np(t)) {
    case 1:
      var o = z0;
      break;
    case 4:
      o = $0;
      break;
    default:
      o = wu;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !da ||
    (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
    (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1));
}
function Tl(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (; ;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null;) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
                a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; l !== null;) {
          if (((i = Qn(l)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = s = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  fp(function () {
    var u = s,
      d = gu(n),
      c = [];
    e: {
      var h = Bp.get(e);

      if (h !== void 0) {
        var f = Eu,
          S = e;
        switch (e) {
          case "keypress":
            if (Hs(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = tv;
            break;
          case "focusin":
            ((S = "focus"), (f = Sl));
            break;
          case "focusout":
            ((S = "blur"), (f = Sl));
            break;
          case "beforeblur":
          case "afterblur":
            f = Sl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            f = Uc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = W0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = ov;
            break;
          case Dp:
          case Fp:
          case zp:
            f = Q0;
            break;
          case $p:
            f = iv;
            break;
          case "scroll":
            f = B0;
            break;
          case "wheel":
            f = av;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = K0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = Vc;
        }
        var y = (t & 4) !== 0,
          x = !y && e === "scroll",
          m = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var p = u, v; p !== null;) {
          v = p;
          var E = v.stateNode;
          if (
            (v.tag === 5 &&
              E !== null &&
              ((v = E),
                m !== null && ((E = zo(p, m)), E != null && y.push(Qo(p, E, v)))),
              x)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((h = new f(h, S, null, n, d)), c.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
            (f = e === "mouseout" || e === "pointerout"),
            h &&
            n !== ua &&
            (S = n.relatedTarget || n.fromElement) &&
            (Qn(S) || S[Yt]))
        )
          break e;
        if (
          (f || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
            f
              ? ((S = n.relatedTarget || n.toElement),
                (f = u),
                (S = S ? Qn(S) : null),
                S !== null &&
                ((x = cr(S)), S !== x || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
              : ((f = null), (S = u)),
            f !== S)
        ) {
          if (
            ((y = Uc),
              (E = "onMouseLeave"),
              (m = "onMouseEnter"),
              (p = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
              ((y = Vc),
                (E = "onPointerLeave"),
                (m = "onPointerEnter"),
                (p = "pointer")),
              (x = f == null ? h : kr(f)),
              (v = S == null ? h : kr(S)),
              (h = new y(E, p + "leave", f, n, d)),
              (h.target = x),
              (h.relatedTarget = v),

              (E = null),
              Qn(d) === u &&
              ((y = new y(m, p + "enter", S, n, d)),
                (y.target = v),
                (y.relatedTarget = x),
                (E = y)),
              (x = E),
              f && S)
          )
            t: {
              for (y = f, m = S, p = 0, v = y; v; v = yr(v)) p++;
              for (v = 0, E = m; E; E = yr(E)) v++;
              for (; 0 < p - v;) ((y = yr(y)), p--);
              for (; 0 < v - p;) ((m = yr(m)), v--);
              for (; p--;) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                ((y = yr(y)), (m = yr(m)));
              }
              y = null;
            }
          else y = null;
          (f !== null && td(c, h, f, y, !1),
            S !== null && x !== null && td(c, x, S, y, !0));
        }
      }
      e: {
        if (
          ((h = u ? kr(u) : window),
            (f = h.nodeName && h.nodeName.toLowerCase()),
            f === "select" || (f === "input" && h.type === "file"))
        )
          var b = mv;
        else if (Yc(h))
          if (Op) b = xv;
          else {
            b = vv;
            var k = gv;
          }
        else
          (f = h.nodeName) &&
            f.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (b = yv);
        if (b && (b = b(e, u))) {
          jp(c, b, n, d);
          break e;
        }
        (k && k(e, h, u),
          e === "focusout" &&
          (k = h._wrapperState) &&
          k.controlled &&
          h.type === "number" &&
          oa(h, "number", h.value));
      }
      switch (((k = u ? kr(u) : window), e)) {
        case "focusin":
          (Yc(k) || k.contentEditable === "true") &&
            ((br = k), (ga = u), (jo = null));
          break;
        case "focusout":
          jo = ga = br = null;
          break;
        case "mousedown":
          va = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((va = !1), Zc(c, n, d));
          break;
        case "selectionchange":
          if (Ev) break;
        case "keydown":
        case "keyup":
          Zc(c, n, d);
      }
      var P;
      if (Cu)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        Er
          ? Rp(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      (A &&
        (Tp &&
          n.locale !== "ko" &&
          (Er || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && Er && (P = Pp())
            : ((Sn = d),
              (Su = "value" in Sn ? Sn.value : Sn.textContent),
              (Er = !0))),
          (k = ui(u, A)),
          0 < k.length &&
          ((A = new Wc(A, e, null, n, d)),
            c.push({ event: A, listeners: k }),
            P ? (A.data = P) : ((P = _p(n)), P !== null && (A.data = P)))),
        (P = cv ? dv(e, n) : fv(e, n)) &&
        ((u = ui(u, "onBeforeInput")),
          0 < u.length &&
          ((d = new Wc("onBeforeInput", "beforeinput", null, n, d)),
            c.push({ event: d, listeners: u }),
            (d.data = P))));
    }
    Up(c, t);
  });
}
function Qo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ui(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var o = e,
      s = o.stateNode;
    (o.tag === 5 &&
      s !== null &&
      ((o = s),
        (s = zo(e, n)),
        s != null && r.unshift(Qo(e, s, o)),
        (s = zo(e, t)),
        s != null && r.push(Qo(e, s, o))),

      (e = e.return));
  }
  return r;
}
function yr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function td(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r;) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    (l.tag === 5 &&
      u !== null &&
      ((l = u),
        o
          ? ((a = zo(n, s)), a != null && i.unshift(Qo(n, a, l)))
          : o || ((a = zo(n, s)), a != null && i.push(Qo(n, a, l)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Nv = /\r\n?/g,
  Pv = /\u0000|\uFFFD/g;
function nd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Nv,
      `
`,
    )
    .replace(Pv, "");
}
function Ts(e, t, n) {
  if (((t = nd(t)), nd(e) !== t && n)) throw Error(I(425));
}
function ci() { }
var ya = null,
  xa = null;
function wa(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Sa = typeof setTimeout == "function" ? setTimeout : void 0,
  Tv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  rd = typeof Promise == "function" ? Promise : void 0,
  Rv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof rd < "u"
        ? function (e) {
          return rd.resolve(null).then(e).catch(_v);
        }
        : Sa;
function _v(e) {
  setTimeout(function () {
    throw e;
  });
}
function Rl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(o), Uo(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Uo(t);
}
function Pn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function od(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var io = Math.random().toString(36).slice(2),
  jt = "__reactFiber$" + io,
  Yo = "__reactProps$" + io,
  Yt = "__reactContainer$" + io,
  Ea = "__reactEvents$" + io,
  jv = "__reactListeners$" + io,
  Ov = "__reactHandles$" + io;
function Qn(e) {
  var t = e[jt];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if ((t = n[Yt] || n[jt])) {
      if (
        ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
      )
        for (e = od(e); e !== null;) {
          if ((n = e[jt])) return n;
          e = od(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function us(e) {
  return (
    (e = e[jt] || e[Yt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function kr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function Fi(e) {
  return e[Yo] || null;
}
var ba = [],
  Nr = -1;
function zn(e) {
  return { current: e };
}
function ae(e) {
  0 > Nr || ((e.current = ba[Nr]), (ba[Nr] = null), Nr--);
}
function se(e, t) {
  (Nr++, (ba[Nr] = e.current), (e.current = t));
}
var Mn = {},
  je = zn(Mn),
  Be = zn(!1),
  rr = Mn;

function Xr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return (
    r &&
    ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ue(e) {
  return ((e = e.childContextTypes), e != null);
}
function di() {
  (ae(Be), ae(je));
}
function sd(e, t, n) {
  if (je.current !== Mn) throw Error(I(168));
  (se(je, t), se(Be, n));
}
function Vp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(I(108, g0(e) || "Unknown", o));
  return pe({}, n, r);
}
function fi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mn),
    (rr = je.current),
    se(je, e),
    se(Be, Be.current),
    !0
  );
}
function id(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  (n
    ? ((e = Vp(e, t, rr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(Be),
      ae(je),
      se(je, e))
    : ae(Be),
    se(Be, n));
}
var Bt = null,
  zi = !1,
  _l = !1;
function Hp(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function Mv(e) {
  ((zi = !0), Hp(e));
}
function $n() {
  if (!_l && Bt !== null) {
    _l = !0;
    var e = 0,
      t = ne;
    try {
      var n = Bt;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Bt = null), (zi = !1));
    } catch (o) {
      throw (Bt !== null && (Bt = Bt.slice(e + 1)), gp(vu, $n), o);
    } finally {
      ((ne = t), (_l = !1));
    }
  }
  return null;
}
var Pr = [],
  Tr = 0,
  pi = null,
  hi = 0,
  rt = [],
  ot = 0,
  or = null,
  Wt = 1,
  Vt = "";
function Vn(e, t) {
  ((Pr[Tr++] = hi), (Pr[Tr++] = pi), (pi = e), (hi = t));
}
function Qp(e, t, n) {
  ((rt[ot++] = Wt), (rt[ot++] = Vt), (rt[ot++] = or), (or = e));
  var r = Wt;
  e = Vt;
  var o = 32 - wt(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var s = 32 - wt(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    ((s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Wt = (1 << (32 - wt(t) + o)) | (n << o) | r),
      (Vt = s + e));
  } else ((Wt = (1 << s) | (n << o) | r), (Vt = e));
}
function Nu(e) {
  e.return !== null && (Vn(e, 1), Qp(e, 1, 0));
}
function Pu(e) {
  for (; e === pi;)
    ((pi = Pr[--Tr]), (Pr[Tr] = null), (hi = Pr[--Tr]), (Pr[Tr] = null));
  for (; e === or;)
    ((or = rt[--ot]),
      (rt[ot] = null),
      (Vt = rt[--ot]),
      (rt[ot] = null),
      (Wt = rt[--ot]),
      (rt[ot] = null));
}
var Ge = null,
  Ke = null,
  ce = !1,
  xt = null;
function Yp(e, t) {
  var n = st(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function ld(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ge = e), (Ke = Pn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ge = e), (Ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = or !== null ? { id: Wt, overflow: Vt } : null),
            (e.memoizedState = {

              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = st(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ge = e),
            (Ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ca(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ka(e) {
  if (ce) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!ld(e, t)) {
        if (Ca(e)) throw Error(I(418));
        t = Pn(n.nextSibling);
        var r = Ge;
        t && ld(e, t)
          ? Yp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ce = !1), (Ge = e));
      }
    } else {
      if (Ca(e)) throw Error(I(418));
      ((e.flags = (e.flags & -4097) | 2), (ce = !1), (Ge = e));
    }
  }
}
function ad(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return;
  Ge = e;
}
function Rs(e) {
  if (e !== Ge) return !1;
  if (!ce) return (ad(e), (ce = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
        (t = t !== "head" && t !== "body" && !wa(e.type, e.memoizedProps))),
      t && (t = Ke))
  ) {
    if (Ca(e)) throw (Kp(), Error(I(418)));
    for (; t;) (Yp(e, t), (t = Pn(t.nextSibling)));
  }
  if ((ad(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = Pn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Ge ? Pn(e.stateNode.nextSibling) : null;
  return !0;
}
function Kp() {
  for (var e = Ke; e;) e = Pn(e.nextSibling);
}
function qr() {
  ((Ke = Ge = null), (ce = !1));
}
function Tu(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
var Av = Zt.ReactCurrentBatchConfig;
function yo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var o = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
          var l = o.refs;
          i === null ? delete l[s] : (l[s] = i);
        }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function _s(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      I(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function ud(e) {
  var t = e._init;
  return t(e._payload);
}
function Gp(e) {
  function t(m, p) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [p]), (m.flags |= 16)) : v.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null;) (t(m, p), (p = p.sibling));
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null;)
      (p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling));
    return m;
  }
  function o(m, p) {
    return ((m = jn(m, p)), (m.index = 0), (m.sibling = null), m);
  }
  function s(m, p, v) {
    return (
      (m.index = v),
      e

        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((m.flags |= 2), p) : v)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function i(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function l(m, p, v, E) {
    return p === null || p.tag !== 6
      ? ((p = Dl(v, m.mode, E)), (p.return = m), p)
      : ((p = o(p, v)), (p.return = m), p);
  }
  function a(m, p, v, E) {
    var b = v.type;
    return b === Sr
      ? d(m, p, v.props.children, E, v.key)
      : p !== null &&
        (p.elementType === b ||
          (typeof b == "object" &&
            b !== null &&
            b.$$typeof === fn &&
            ud(b) === p.type))
        ? ((E = o(p, v.props)), (E.ref = yo(m, p, v)), (E.return = m), E)
        : ((E = Zs(v.type, v.key, v.props, null, m.mode, E)),
          (E.ref = yo(m, p, v)),
          (E.return = m),
          E);
  }
  function u(m, p, v, E) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = Fl(v, m.mode, E)), (p.return = m), p)
      : ((p = o(p, v.children || [])), (p.return = m), p);
  }
  function d(m, p, v, E, b) {
    return p === null || p.tag !== 7
      ? ((p = nr(v, m.mode, E, b)), (p.return = m), p)
      : ((p = o(p, v)), (p.return = m), p);
  }
  function c(m, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return ((p = Dl("" + p, m.mode, v)), (p.return = m), p);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case xs:
          return (
            (v = Zs(p.type, p.key, p.props, null, m.mode, v)),
            (v.ref = yo(m, null, p)),
            (v.return = m),
            v
          );
        case wr:
          return ((p = Fl(p, m.mode, v)), (p.return = m), p);
        case fn:
          var E = p._init;
          return c(m, E(p._payload), v);
      }
      if (Co(p) || po(p))
        return ((p = nr(p, m.mode, v, null)), (p.return = m), p);
      _s(m, p);
    }
    return null;
  }
  function h(m, p, v, E) {
    var b = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return b !== null ? null : l(m, p, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case xs:
          return v.key === b ? a(m, p, v, E) : null;
        case wr:
          return v.key === b ? u(m, p, v, E) : null;
        case fn:
          return ((b = v._init), h(m, p, b(v._payload), E));
      }
      if (Co(v) || po(v)) return b !== null ? null : d(m, p, v, E, null);
      _s(m, v);
    }
    return null;
  }
  function f(m, p, v, E, b) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return ((m = m.get(v) || null), l(p, m, "" + E, b));
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case xs:
          return (
            (m = m.get(E.key === null ? v : E.key) || null),
            a(p, m, E, b)
          );
        case wr:
          return (
            (m = m.get(E.key === null ? v : E.key) || null),
            u(p, m, E, b)
          );
        case fn:
          var k = E._init;
          return f(m, p, v, k(E._payload), b);
      }
      if (Co(E) || po(E)) return ((m = m.get(v) || null), d(p, m, E, b, null));
      _s(p, E);
    }
    return null;
  }
  function S(m, p, v, E) {
    for (
      var b = null, k = null, P = p, A = (p = 0), B = null;
      P !== null && A < v.length;
      A++
    ) {
      P.index > A ? ((B = P), (P = null)) : (B = P.sibling);
      var O = h(m, P, v[A], E);
      if (O === null) {
        P === null && (P = B);
        break;
      }
      (e && P && O.alternate === null && t(m, P),
        (p = s(O, p, A)),
        k === null ? (b = O) : (k.sibling = O),
        (k = O),
        (P = B));
    }

    if (A === v.length) return (n(m, P), ce && Vn(m, A), b);
    if (P === null) {
      for (; A < v.length; A++)
        ((P = c(m, v[A], E)),
          P !== null &&
          ((p = s(P, p, A)),
            k === null ? (b = P) : (k.sibling = P),
            (k = P)));
      return (ce && Vn(m, A), b);
    }
    for (P = r(m, P); A < v.length; A++)
      ((B = f(P, m, A, v[A], E)),
        B !== null &&
        (e && B.alternate !== null && P.delete(B.key === null ? A : B.key),
          (p = s(B, p, A)),
          k === null ? (b = B) : (k.sibling = B),
          (k = B)));
    return (
      e &&
      P.forEach(function (L) {
        return t(m, L);
      }),
      ce && Vn(m, A),
      b
    );
  }
  function y(m, p, v, E) {
    var b = po(v);
    if (typeof b != "function") throw Error(I(150));
    if (((v = b.call(v)), v == null)) throw Error(I(151));
    for (
      var k = (b = null), P = p, A = (p = 0), B = null, O = v.next();
      P !== null && !O.done;
      A++, O = v.next()
    ) {
      P.index > A ? ((B = P), (P = null)) : (B = P.sibling);
      var L = h(m, P, O.value, E);
      if (L === null) {
        P === null && (P = B);
        break;
      }
      (e && P && L.alternate === null && t(m, P),
        (p = s(L, p, A)),
        k === null ? (b = L) : (k.sibling = L),
        (k = L),
        (P = B));
    }
    if (O.done) return (n(m, P), ce && Vn(m, A), b);
    if (P === null) {
      for (; !O.done; A++, O = v.next())
        ((O = c(m, O.value, E)),
          O !== null &&
          ((p = s(O, p, A)),
            k === null ? (b = O) : (k.sibling = O),
            (k = O)));
      return (ce && Vn(m, A), b);
    }
    for (P = r(m, P); !O.done; A++, O = v.next())
      ((O = f(P, m, A, O.value, E)),
        O !== null &&
        (e && O.alternate !== null && P.delete(O.key === null ? A : O.key),
          (p = s(O, p, A)),
          k === null ? (b = O) : (k.sibling = O),
          (k = O)));
    return (
      e &&
      P.forEach(function (C) {
        return t(m, C);
      }),
      ce && Vn(m, A),
      b
    );
  }
  function x(m, p, v, E) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Sr &&
        v.key === null &&
        (v = v.props.children),
        typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case xs:
          e: {
            for (var b = v.key, k = p; k !== null;) {
              if (k.key === b) {
                if (((b = v.type), b === Sr)) {
                  if (k.tag === 7) {
                    (n(m, k.sibling),
                      (p = o(k, v.props.children)),
                      (p.return = m),
                      (m = p));
                    break e;
                  }
                } else if (
                  k.elementType === b ||
                  (typeof b == "object" &&
                    b !== null &&
                    b.$$typeof === fn &&
                    ud(b) === k.type)
                ) {
                  (n(m, k.sibling),
                    (p = o(k, v.props)),
                    (p.ref = yo(m, k, v)),
                    (p.return = m),
                    (m = p));
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            v.type === Sr
              ? ((p = nr(v.props.children, m.mode, E, v.key)),
                (p.return = m),
                (m = p))
              : ((E = Zs(v.type, v.key, v.props, null, m.mode, E)),
                (E.ref = yo(m, p, v)),
                (E.return = m),
                (m = E));
          }
          return i(m);
        case wr:
          e: {
            for (k = v.key; p !== null;) {
              if (p.key === k)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&

                  p.stateNode.implementation === v.implementation
                ) {
                  (n(m, p.sibling),
                    (p = o(p, v.children || [])),
                    (p.return = m),
                    (m = p));
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            ((p = Fl(v, m.mode, E)), (p.return = m), (m = p));
          }
          return i(m);
        case fn:
          return ((k = v._init), x(m, p, k(v._payload), E));
      }
      if (Co(v)) return S(m, p, v, E);
      if (po(v)) return y(m, p, v, E);
      _s(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = o(p, v)), (p.return = m), (m = p))
          : (n(m, p), (p = Dl(v, m.mode, E)), (p.return = m), (m = p)),
        i(m))
      : n(m, p);
  }
  return x;
}
var Zr = Gp(!0),
  Xp = Gp(!1),
  mi = zn(null),
  gi = null,
  Rr = null,
  Ru = null;
function _u() {
  Ru = Rr = gi = null;
}
function ju(e) {
  var t = mi.current;
  (ae(mi), (e._currentValue = t));
}
function Na(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
    )
      break;
    e = e.return;
  }
}
function Ir(e, t) {
  ((gi = e),
    (Ru = Rr = null),
    (e = e.dependencies),
    e !== null &&
    e.firstContext !== null &&
    (e.lanes & t && ($e = !0), (e.firstContext = null)));
}
function lt(e) {
  var t = e._currentValue;
  if (Ru !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Rr === null)) {
      if (gi === null) throw Error(I(308));
      ((Rr = e), (gi.dependencies = { lanes: 0, firstContext: e }));
    } else Rr = Rr.next = e;
  return t;
}
var Yn = null;
function Ou(e) {
  Yn === null ? (Yn = [e]) : Yn.push(e);
}
function qp(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ou(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Kt(e, r)
  );
}
function Kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var pn = !1;
function Mu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Zp(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
    (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects,
    }));
}
function Ht(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Tn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Kt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ou(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Kt(e, n)
  );
}
function Qs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), yu(e, n));
  }
}

function cd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (o = s = i) : (s = s.next = i), (n = n.next));
      } while (n !== null);
      s === null ? (o = s = t) : (s = s.next = t);
    } else o = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function vi(e, t, n, r) {
  var o = e.updateQueue;
  pn = !1;
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    ((a.next = null), i === null ? (s = u) : (i.next = u), (i = a));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
        (l = d.lastBaseUpdate),
        l !== i &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
          (d.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var c = o.baseState;
    ((i = 0), (d = u = a = null), (l = s));
    do {
      var h = l.lane,
        f = l.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
          {
            eventTime: f,
            lane: 0,
            tag: l.tag,
            payload: l.payload,
            callback: l.callback,
            next: null,
          });
        e: {
          var S = e,
            y = l;
          switch (((h = t), (f = n), y.tag)) {
            case 1:
              if (((S = y.payload), typeof S == "function")) {
                c = S.call(f, c, h);
                break e;
              }
              c = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = y.payload),
                  (h = typeof S == "function" ? S.call(f, c, h) : S),
                  h == null)
              )
                break e;
              c = pe({}, c, h);
              break e;
            case 2:
              pn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
            (h = o.effects),
            h === null ? (o.effects = [l]) : h.push(l));
      } else
        ((f = {
          eventTime: f,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = f), (a = c)) : (d = d.next = f),
          (i |= h));
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        ((h = l),
          (l = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (a = c),
        (o.baseState = a),
        (o.firstBaseUpdate = u),
        (o.lastBaseUpdate = d),
        (t = o.shared.interleaved),
        t !== null)
    ) {
      o = t;
      do ((i |= o.lane), (o = o.next));
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    ((ir |= i), (e.lanes = i), (e.memoizedState = c));
  }
}
function dd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(I(191, o));
        o.call(r);

      }
    }
}
var cs = {},
  At = zn(cs),
  Ko = zn(cs),
  Go = zn(cs);
function Kn(e) {
  if (e === cs) throw Error(I(174));
  return e;
}
function Au(e, t) {
  switch ((se(Go, t), se(Ko, e), se(At, cs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ia(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ia(t, e)));
  }
  (ae(At), se(At, t));
}
function Jr() {
  (ae(At), ae(Ko), ae(Go));
}
function Jp(e) {
  Kn(Go.current);
  var t = Kn(At.current),
    n = ia(t, e.type);
  t !== n && (se(Ko, e), se(At, n));
}
function Lu(e) {
  Ko.current === e && (ae(At), ae(Ko));
}
var de = zn(0);
function yi(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var jl = [];
function Iu() {
  for (var e = 0; e < jl.length; e++)
    jl[e]._workInProgressVersionPrimary = null;
  jl.length = 0;
}
var Ys = Zt.ReactCurrentDispatcher,
  Ol = Zt.ReactCurrentBatchConfig,
  sr = 0,
  fe = null,
  ye = null,
  Se = null,
  xi = !1,
  Oo = !1,
  Xo = 0,
  Lv = 0;
function Pe() {
  throw Error(I(321));
}
function Du(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Et(e[n], t[n])) return !1;
  return !0;
}
function Fu(e, t, n, r, o, s) {
  if (
    ((sr = s),
      (fe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Ys.current = e === null || e.memoizedState === null ? zv : $v),
      (e = n(r, o)),
      Oo)
  ) {
    s = 0;
    do {
      if (((Oo = !1), (Xo = 0), 25 <= s)) throw Error(I(301));
      ((s += 1),
        (Se = ye = null),
        (t.updateQueue = null),
        (Ys.current = Bv),
        (e = n(r, o)));
    } while (Oo);
  }
  if (
    ((Ys.current = wi),
      (t = ye !== null && ye.next !== null),
      (sr = 0),
      (Se = ye = fe = null),
      (xi = !1),
      t)
  )
    throw Error(I(300));
  return e;
}
function zu() {
  var e = Xo !== 0;
  return ((Xo = 0), e);
}
function Pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Se === null ? (fe.memoizedState = Se = e) : (Se = Se.next = e), Se);
}
function at() {
  if (ye === null) {
    var e = fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ye.next;
  var t = Se === null ? fe.memoizedState : Se.next;
  if (t !== null) ((Se = t), (ye = e));
  else {
    if (e === null) throw Error(I(310));
    ((ye = e),
      (e = {
        memoizedState: ye.memoizedState,
        baseState: ye.baseState,
        baseQueue: ye.baseQueue,
        queue: ye.queue,
        next: null,
      }),
      Se === null ? (fe.memoizedState = Se = e) : (Se = Se.next = e));
  }
  return Se;
}
function qo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ml(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = ye,
    o = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      ((o.next = s.next), (s.next = i));
    }

    ((r.baseQueue = o = s), (n.pending = null));
  }
  if (o !== null) {
    ((s = o.next), (r = r.baseState));
    var l = (i = null),
      a = null,
      u = s;
    do {
      var d = u.lane;
      if ((sr & d) === d)
        (a !== null &&
          (a = a.next =
          {
            lane: 0,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var c = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (a === null ? ((l = a = c), (i = r)) : (a = a.next = c),
          (fe.lanes |= d),
          (ir |= d));
      }
      u = u.next;
    } while (u !== null && u !== s);
    (a === null ? (i = r) : (a.next = l),
      Et(r, t.memoizedState) || ($e = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((s = o.lane), (fe.lanes |= s), (ir |= s), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Al(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do ((s = e(s, i.action)), (i = i.next));
    while (i !== o);
    (Et(s, t.memoizedState) || ($e = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function eh() { }
function th(e, t) {
  var n = fe,
    r = at(),
    o = t(),
    s = !Et(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), ($e = !0)),
      (r = r.queue),
      $u(oh.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || s || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
        Zo(9, rh.bind(null, n, r, o, t), void 0, null),
        Ee === null)
    )
      throw Error(I(349));
    sr & 30 || nh(n, t, o);
  }
  return o;
}
function nh(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function rh(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), sh(t) && ih(e));
}
function oh(e, t, n) {
  return n(function () {
    sh(t) && ih(e);
  });
}
function sh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Et(e, n);
  } catch {
    return !0;
  }
}
function ih(e) {
  var t = Kt(e, 1);
  t !== null && St(t, e, 1, -1);
}
function fd(e) {
  var t = Pt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Fv.bind(null, fe, e)),
    [t.memoizedState, e]
  );
}
function Zo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function lh() {
  return at().memoizedState;
}

function Ks(e, t, n, r) {
  var o = Pt();
  ((fe.flags |= e),
    (o.memoizedState = Zo(1 | t, n, void 0, r === void 0 ? null : r)));
}
function $i(e, t, n, r) {
  var o = at();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ye !== null) {
    var i = ye.memoizedState;
    if (((s = i.destroy), r !== null && Du(r, i.deps))) {
      o.memoizedState = Zo(t, n, s, r);
      return;
    }
  }
  ((fe.flags |= e), (o.memoizedState = Zo(1 | t, n, s, r)));
}
function pd(e, t) {
  return Ks(8390656, 8, e, t);
}
function $u(e, t) {
  return $i(2048, 8, e, t);
}
function ah(e, t) {
  return $i(4, 2, e, t);
}
function uh(e, t) {
  return $i(4, 4, e, t);
}
function ch(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function dh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    $i(4, 4, ch.bind(null, t, e), n)
  );
}
function Bu() { }
function fh(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ph(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function hh(e, t, n) {
  return sr & 21
    ? (Et(n, t) || ((n = xp()), (fe.lanes |= n), (ir |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), ($e = !0)), (e.memoizedState = n));
}
function Iv(e, t) {
  var n = ne;
  ((ne = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Ol.transition;
  Ol.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((ne = n), (Ol.transition = r));
  }
}
function mh() {
  return at().memoizedState;
}
function Dv(e, t, n) {
  var r = _n(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      gh(e))
  )
    vh(t, n);
  else if (((n = qp(e, t, n, r)), n !== null)) {
    var o = Le();
    (St(n, e, r, o), yh(n, t, r));
  }
}
function Fv(e, t, n) {
  var r = _n(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gh(e)) vh(t, o);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = s(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Et(l, i))) {
          var a = t.interleaved;
          (a === null
            ? ((o.next = o), Ou(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = qp(e, t, o, r)),
      n !== null && ((o = Le()), St(n, e, r, o), yh(n, t, r)));
  }
}
function gh(e) {
  var t = e.alternate;
  return e === fe || (t !== null && t === fe);
}
function vh(e, t) {
  Oo = xi = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function yh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), yu(e, n));
  }
}
var wi = {
  readContext: lt,
  useCallback: Pe,
  useContext: Pe,
  useEffect: Pe,
  useImperativeHandle: Pe,
  useInsertionEffect: Pe,
  useLayoutEffect: Pe,
  useMemo: Pe,
  useReducer: Pe,
  useRef: Pe,
  useState: Pe,
  useDebugValue: Pe,
  useDeferredValue: Pe,
  useTransition: Pe,
  useMutableSource: Pe,
  useSyncExternalStore: Pe,
  useId: Pe,
  unstable_isNewReconciler: !1,
},

  zv = {
    readContext: lt,
    useCallback: function (e, t) {
      return ((Pt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: lt,
    useEffect: pd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ks(4194308, 4, ch.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ks(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ks(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Pt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Pt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Dv.bind(null, fe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Pt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: fd,
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      return (Pt().memoizedState = e);
    },
    useTransition: function () {
      var e = fd(!1),
        t = e[0];
      return ((e = Iv.bind(null, e[1])), (Pt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () { },
    useSyncExternalStore: function (e, t, n) {
      var r = fe,
        o = Pt();
      if (ce) {
        if (n === void 0) throw Error(I(407));
        n = n();
      } else {
        if (((n = t()), Ee === null)) throw Error(I(349));
        sr & 30 || nh(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        pd(oh.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Zo(9, rh.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Pt(),
        t = Ee.identifierPrefix;
      if (ce) {
        var n = Vt,
          r = Wt;
        ((n = (r & ~(1 << (32 - wt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Xo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Lv++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  $v = {
    readContext: lt,
    useCallback: fh,
    useContext: lt,
    useEffect: $u,
    useImperativeHandle: dh,
    useInsertionEffect: ah,
    useLayoutEffect: uh,
    useMemo: ph,
    useReducer: Ml,
    useRef: lh,
    useState: function () {
      return Ml(qo);
    },
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      var t = at();
      return hh(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = Ml(qo)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: eh,
    useSyncExternalStore: th,
    useId: mh,
    unstable_isNewReconciler: !1,
  },
  Bv = {
    readContext: lt,
    useCallback: fh,
    useContext: lt,
    useEffect: $u,
    useImperativeHandle: dh,
    useInsertionEffect: ah,
    useLayoutEffect: uh,
    useMemo: ph,
    useReducer: Al,
    useRef: lh,
    useState: function () {
      return Al(qo);
    },
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      var t = at();
      return ye === null ? (t.memoizedState = e) : hh(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(qo)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: eh,
    useSyncExternalStore: th,
    useId: mh,

    unstable_isNewReconciler: !1,
  };
function ht(e, t) {
  if (e && e.defaultProps) {
    ((t = pe({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Pa(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Bi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? cr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      o = _n(e),
      s = Ht(r, o);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = Tn(e, s, o)),
      t !== null && (St(t, e, o, r), Qs(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      o = _n(e),
      s = Ht(r, o);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Tn(e, s, o)),
      t !== null && (St(t, e, o, r), Qs(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Le(),
      r = _n(e),
      o = Ht(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = Tn(e, o, r)),
      t !== null && (St(t, e, r, n), Qs(t, e, r)));
  },
};
function hd(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Vo(n, r) || !Vo(o, s)
        : !0
  );
}
function xh(e, t, n) {
  var r = !1,
    o = Mn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = lt(s))
      : ((o = Ue(t) ? rr : je.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Xr(e, o) : Mn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Bi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
    ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function md(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
    t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
    t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Bi.enqueueReplaceState(t, t.state, null));
}
function Ta(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), Mu(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (o.context = lt(s))
    : ((s = Ue(t) ? rr : je.current), (o.context = Xr(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Pa(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
    typeof o.getSnapshotBeforeUpdate == "function" ||
    (typeof o.UNSAFE_componentWillMount != "function" &&
      typeof o.componentWillMount != "function") ||
    ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
      o.UNSAFE_componentWillMount(),
      t !== o.state && Bi.enqueueReplaceState(o, o.state, null),
      vi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function eo(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += m0(r)), (r = r.return));
    while (r);
    var o = n;
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ll(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ra(e, t) {
  try {

    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Uv = typeof WeakMap == "function" ? WeakMap : Map;
function wh(e, t, n) {
  ((n = Ht(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Ei || ((Ei = !0), (za = r)), Ra(e, t));
    }),
    n
  );
}
function Sh(e, t, n) {
  ((n = Ht(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ra(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
    typeof s.componentDidCatch == "function" &&
    (n.callback = function () {
      (Ra(e, t),
        typeof r != "function" &&
        (Rn === null ? (Rn = new Set([this])) : Rn.add(this)));
      var i = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: i !== null ? i : "",
      });
    }),
    n
  );
}
function gd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Uv();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = ny.bind(null, e, t, n)), t.then(e, e));
}
function vd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
        t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function yd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
      ? (e.flags |= 65536)
      : ((e.flags |= 128),
        (n.flags |= 131072),
        (n.flags &= -52805),
        n.tag === 1 &&
        (n.alternate === null
          ? (n.tag = 17)
          : ((t = Ht(-1, 1)), (t.tag = 2), Tn(n, t, 1))),
        (n.lanes |= 1)),
      e);
}
var Wv = Zt.ReactCurrentOwner,
  $e = !1;
function Me(e, t, n, r) {
  t.child = e === null ? Xp(t, null, n, r) : Zr(t, e.child, n, r);
}
function xd(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    Ir(t, o),
    (r = Fu(e, t, n, r, s, o)),
    (n = zu()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Gt(e, t, o))
      : (ce && n && Nu(t), (t.flags |= 1), Me(e, t, r, o), t.child)
  );
}
function wd(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Gu(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Eh(e, t, s, r, o))
      : ((e = Zs(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Vo), n(i, r) && e.ref === t.ref)
    )
      return Gt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = jn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Eh(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Vo(s, r) && e.ref === t.ref)
      if ((($e = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && ($e = !0);
      else return ((t.lanes = e.lanes), Gt(e, t, o));
  }
  return _a(e, t, n, r, o);
}
function bh(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        se(jr, Qe),
        (Qe |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),

          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          se(jr, Qe),
          (Qe |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        se(jr, Qe),
        (Qe |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      se(jr, Qe),
      (Qe |= r));
  return (Me(e, t, o, n), t.child);
}
function Ch(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function _a(e, t, n, r, o) {
  var s = Ue(n) ? rr : je.current;
  return (
    (s = Xr(t, s)),
    Ir(t, o),
    (n = Fu(e, t, n, r, s, o)),
    (r = zu()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Gt(e, t, o))
      : (ce && r && Nu(t), (t.flags |= 1), Me(e, t, n, o), t.child)
  );
}
function Sd(e, t, n, r, o) {
  if (Ue(n)) {
    var s = !0;
    fi(t);
  } else s = !1;
  if ((Ir(t, o), t.stateNode === null))
    (Gs(e, t), xh(t, n, r), Ta(t, n, r, o), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var a = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = lt(u))
      : ((u = Ue(n) ? rr : je.current), (u = Xr(t, u)));
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (c ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && md(t, i, r, u)),
      (pn = !1));
    var h = t.memoizedState;
    ((i.state = h),
      vi(t, r, i, o),
      (a = t.memoizedState),
      l !== r || h !== a || Be.current || pn
        ? (typeof d == "function" && (Pa(t, n, d, r), (a = t.memoizedState)),
          (l = pn || hd(t, n, l, r, h, a, u))
            ? (c ||
              (typeof i.UNSAFE_componentWillMount != "function" &&
                typeof i.componentWillMount != "function") ||
              (typeof i.componentWillMount == "function" &&
                i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = u),
          (r = l))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((i = t.stateNode),
      Zp(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : ht(t.type, l)),
      (i.props = u),
      (c = t.pendingProps),
      (h = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = lt(a))
        : ((a = Ue(n) ? rr : je.current), (a = Xr(t, a))));
    var f = n.getDerivedStateFromProps;
    ((d =
      typeof f == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== c || h !== a) && md(t, i, r, a)),
      (pn = !1),
      (h = t.memoizedState),
      (i.state = h),
      vi(t, r, i, o));
    var S = t.memoizedState;
    l !== c || h !== S || Be.current || pn
      ? (typeof f == "function" && (Pa(t, n, f, r), (S = t.memoizedState)),
        (u = pn || hd(t, n, u, r, h, S, a) || !1)
          ? (d ||

            (typeof i.UNSAFE_componentWillUpdate != "function" &&
              typeof i.componentWillUpdate != "function") ||
            (typeof i.componentWillUpdate == "function" &&
              i.componentWillUpdate(r, S, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
              i.UNSAFE_componentWillUpdate(r, S, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
            (l === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
            (l === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = a),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
        (l === e.memoizedProps && h === e.memoizedState) ||
        (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
        (l === e.memoizedProps && h === e.memoizedState) ||
        (t.flags |= 1024),
        (r = !1));
  }
  return ja(e, t, n, r, s, o);
}
function ja(e, t, n, r, o, s) {
  Ch(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (o && id(t, n, !1), Gt(e, t, s));
  ((r = t.stateNode), (Wv.current = t));
  var l =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Zr(t, e.child, null, s)), (t.child = Zr(t, null, l, s)))
      : Me(e, t, l, s),
    (t.memoizedState = r.state),
    o && id(t, n, !0),
    t.child
  );
}
function kh(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? sd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && sd(e, t.context, !1),
    Au(e, t.containerInfo));
}
function Ed(e, t, n, r, o) {
  return (qr(), Tu(o), (t.flags |= 256), Me(e, t, n, r), t.child);
}
var Oa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ma(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Nh(e, t, n) {
  var r = t.pendingProps,
    o = de.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
      l
        ? ((s = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (o |= 1),
      se(de, o & 1),
      e === null)
  )
    return (
      ka(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
          ? e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824)
          : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = i))
                : (s = Vi(i, r, 0, null)),
              (e = nr(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Ma(n)),
              (t.memoizedState = Oa),
              e)
            : Uu(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Vv(e, t, i, r, l, o, n);
  if (s) {
    ((s = r.fallback), (i = t.mode), (o = e.child), (l = o.sibling));
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = jn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),

      l !== null ? (s = jn(l, s)) : ((s = nr(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ma(n)
          : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions,
          }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Oa),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = jn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
    ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Uu(e, t) {
  return (
    (t = Vi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function js(e, t, n, r) {
  return (
    r !== null && Tu(r),
    Zr(t, e.child, null, n),
    (e = Uu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Vv(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ll(Error(I(422)))), js(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (o = t.mode),
          (r = Vi({ mode: "visible", children: r.children }, o, 0, null)),
          (s = nr(s, o, i, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Zr(t, e.child, null, i),
          (t.child.memoizedState = Ma(i)),
          (t.memoizedState = Oa),
          s);
  if (!(t.mode & 1)) return js(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (
      (r = l),
      (s = Error(I(419))),
      (r = Ll(s, r, void 0)),
      js(e, t, i, r)
    );
  }
  if (((l = (i & e.childLanes) !== 0), $e || l)) {
    if (((r = Ee), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      ((o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
        o !== s.retryLane &&
        ((s.retryLane = o), Kt(e, o), St(r, e, o, -1)));
    }
    return (Ku(), (r = Ll(Error(I(421)))), js(e, t, i, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ry.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ke = Pn(o.nextSibling)),
      (Ge = t),
      (ce = !0),
      (xt = null),
      e !== null &&
      ((rt[ot++] = Wt),
        (rt[ot++] = Vt),
        (rt[ot++] = or),
        (Wt = e.id),
        (Vt = e.overflow),
        (or = t)),
      (t = Uu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Na(e.return, t, n));
}
function Il(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null

    ? (e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: o,
    })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o));
}
function Ph(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((Me(e, t, r.children, n), (r = de.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && bd(e, n, t);
        else if (e.tag === 19) bd(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((se(de, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null;)
          ((e = n.alternate),
            e !== null && yi(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Il(t, !1, o, n, s));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null;) {
          if (((e = o.alternate), e !== null && yi(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        Il(t, !0, n, null, s);
        break;
      case "together":
        Il(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Gs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Gt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
      (ir |= t.lanes),
      !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (
      e = t.child, n = jn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = jn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Hv(e, t, n) {
  switch (t.tag) {
    case 3:
      (kh(t), qr());
      break;
    case 5:
      Jp(t);
      break;
    case 1:
      Ue(t.type) && fi(t);
      break;
    case 4:
      Au(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (se(mi, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (se(de, de.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Nh(e, t, n)
            : (se(de, de.current & 1),
              (e = Gt(e, t, n)),
              e !== null ? e.sibling : null);
      se(de, de.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ph(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
          o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          se(de, de.current),
          r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), bh(e, t, n));
  }
  return Gt(e, t, n);
}
var Th, Aa, Rh, _h;
Th = function (e, t) {

  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Aa = function () { };
Rh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), Kn(At.current));
    var s = null;
    switch (n) {
      case "input":
        ((o = na(e, o)), (r = na(e, r)), (s = []));
        break;
      case "select":
        ((o = pe({}, o, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((o = sa(e, o)), (r = sa(e, r)), (s = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ci);
    }
    la(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Do.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
          r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                l[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else (n || (s || (s = []), s.push(u, n)), (n = a));
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Do.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && le("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
_h = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xo(e, t) {
  if (!ce)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null;)
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null;)
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null;)
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null;)

      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Qv(e, t, n) {
  var r = t.pendingProps;
  switch ((Pu(t), t.tag)) {
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
      return (Te(t), null);
    case 1:
      return (Ue(t.type) && di(), Te(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Jr(),
        ae(Be),
        ae(je),
        Iu(),
        r.pendingContext &&
        ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
        (Rs(t)
          ? (t.flags |= 4)
          : e === null ||
          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
          ((t.flags |= 1024), xt !== null && (Ua(xt), (xt = null)))),
        Aa(e, t),
        Te(t),
        null
      );
    case 5:
      Lu(t);
      var o = Kn(Go.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Rh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return (Te(t), null);
        }
        if (((e = Kn(At.current)), Rs(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[jt] = t), (r[Yo] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (le("cancel", r), le("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              le("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < No.length; o++) le(No[o], r);
              break;
            case "source":
              le("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (le("error", r), le("load", r));
              break;
            case "details":
              le("toggle", r);
              break;
            case "input":
              (Oc(r, s), le("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                le("invalid", r));
              break;
            case "textarea":
              (Ac(r, s), le("invalid", r));
          }
          (la(n, s), (o = null));
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var l = s[i];
              i === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                  (s.suppressHydrationWarning !== !0 &&
                    Ts(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                  r.textContent !== "" + l &&
                  (s.suppressHydrationWarning !== !0 &&
                    Ts(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Do.hasOwnProperty(i) &&
                l != null &&
                i === "onScroll" &&
                le("scroll", r);
            }
          switch (n) {
            case "input":
              (ws(r), Mc(r, s, !0));
              break;
            case "textarea":
              (ws(r), Lc(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ci);
          }
          ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = op(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"

                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                    ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[jt] = t),
            (e[Yo] = r),
            Th(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = aa(n, r)), n)) {
              case "dialog":
                (le("cancel", e), le("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (le("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < No.length; o++) le(No[o], e);
                o = r;
                break;
              case "source":
                (le("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (le("error", e), le("load", e), (o = r));
                break;
              case "details":
                (le("toggle", e), (o = r));
                break;
              case "input":
                (Oc(e, r), (o = na(e, r)), le("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = pe({}, r, { value: void 0 })),
                  le("invalid", e));
                break;
              case "textarea":
                (Ac(e, r), (o = sa(e, r)), le("invalid", e));
                break;
              default:
                o = r;
            }
            (la(n, o), (l = o));
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? lp(e, a)
                  : s === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && sp(e, a))
                    : s === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Fo(e, a)
                        : typeof a == "number" && Fo(e, "" + a)
                      : s !== "suppressContentEditableWarning" &&
                      s !== "suppressHydrationWarning" &&
                      s !== "autoFocus" &&
                      (Do.hasOwnProperty(s)
                        ? a != null && s === "onScroll" && le("scroll", e)
                        : a != null && fu(e, s, a, i));
              }
            switch (n) {
              case "input":
                (ws(e), Mc(e, r, !1));
                break;
              case "textarea":
                (ws(e), Lc(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + On(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Or(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                    Or(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ci);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;

            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Te(t), null);
    case 6:
      if (e && t.stateNode != null) _h(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (((n = Kn(Go.current)), Kn(At.current), Rs(t))) {
          if (
            ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[jt] = t),
              (s = r.nodeValue !== n) && ((e = Ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ts(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ts(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[jt] = t),
            (t.stateNode = r));
      }
      return (Te(t), null);
    case 13:
      if (
        (ae(de),
          (r = t.memoizedState),
          e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ce && Ke !== null && t.mode & 1 && !(t.flags & 128))
          (Kp(), qr(), (t.flags |= 98560), (s = !1));
        else if (((s = Rs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(I(318));
            if (
              ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
            )
              throw Error(I(317));
            s[jt] = t;
          } else
            (qr(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Te(t), (s = !1));
        } else (xt !== null && (Ua(xt), (xt = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
          r &&
          ((t.child.flags |= 8192),
            t.mode & 1 &&
            (e === null || de.current & 1 ? we === 0 && (we = 3) : Ku())),
          t.updateQueue !== null && (t.flags |= 4),
          Te(t),
          null);
    case 4:
      return (
        Jr(),
        Aa(e, t),
        e === null && Ho(t.stateNode.containerInfo),
        Te(t),
        null
      );
    case 10:
      return (ju(t.type._context), Te(t), null);
    case 17:
      return (Ue(t.type) && di(), Te(t), null);
    case 19:
      if ((ae(de), (s = t.memoizedState), s === null)) return (Te(t), null);
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) xo(s, !1);
        else {
          if (we !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null;) {
              if (((i = yi(e)), i !== null)) {
                for (
                  t.flags |= 128,
                  xo(s, !1),
                  r = i.updateQueue,
                  r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                  t.subtreeFlags = 0,
                  r = n,
                  n = t.child;
                  n !== null;
                )
                  ((s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),

                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                              lanes: e.lanes,
                              firstContext: e.firstContext,
                            })),
                    (n = n.sibling));
                return (se(de, (de.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ge() > to &&
            ((t.flags |= 128), (r = !0), xo(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = yi(i)), e !== null)) {
            if (
              ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                xo(s, !0),
                s.tail === null && s.tailMode === "hidden" && !i.alternate && !ce)
            )
              return (Te(t), null);
          } else
            2 * ge() - s.renderingStartTime > to &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), xo(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = ge()),
          (t.sibling = null),
          (n = de.current),
          se(de, r ? (n & 1) | 2 : n & 1),
          t)
        : (Te(t), null);
    case 22:
    case 23:
      return (
        Yu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Te(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function Yv(e, t) {
  switch ((Pu(t), t.tag)) {
    case 1:
      return (
        Ue(t.type) && di(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Jr(),
        ae(Be),
        ae(je),
        Iu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Lu(t), null);
    case 13:
      if (
        (ae(de), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(I(340));
        qr();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (ae(de), null);
    case 4:
      return (Jr(), null);
    case 10:
      return (ju(t.type._context), null);
    case 22:
    case 23:
      return (Yu(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Os = !1,
  _e = !1,
  Kv = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function _r(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else n.current = null;
}
function La(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var Cd = !1;
function Gv(e, t) {

  if (((ya = li), (e = Lp()), ku(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            c = e,
            h = null;
          t: for (; ;) {
            for (
              var f;
              c !== n || (o !== 0 && c.nodeType !== 3) || (l = i + o),
              c !== s || (r !== 0 && c.nodeType !== 3) || (a = i + r),
              c.nodeType === 3 && (i += c.nodeValue.length),
              (f = c.firstChild) !== null;
            )
              ((h = c), (c = f));
            for (; ;) {
              if (c === e) break t;
              if (
                (h === n && ++u === o && (l = i),
                  h === s && ++d === r && (a = i),
                  (f = c.nextSibling) !== null)
              )
                break;
              ((c = h), (h = c.parentNode));
            }
            c = f;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xa = { focusedElem: e, selectionRange: n }, li = !1, V = t; V !== null;)
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (V = e));
    else
      for (; V !== null;) {
        t = V;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var y = S.memoizedProps,
                    x = S.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : ht(t.type, y),
                      x,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                  v.documentElement &&
                  v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (E) {
          me(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (V = e));
          break;
        }
        V = t.return;
      }
  return ((S = Cd), (Cd = !1), S);
}
function Mo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        ((o.destroy = void 0), s !== void 0 && La(t, n, s));
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ui(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ia(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;

      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function jh(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), jh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
    ((t = e.stateNode),
      t !== null &&
      (delete t[jt], delete t[Yo], delete t[Ea], delete t[jv], delete t[Ov])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Oh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kd(e) {
  e: for (; ;) {
    for (; e.sibling === null;) {
      if (e.return === null || Oh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Da(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
          ? ((t = n.parentNode), t.insertBefore(e, n))
          : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ci)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Da(e, t, n), e = e.sibling; e !== null;)
      (Da(e, t, n), (e = e.sibling));
}
function Fa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fa(e, t, n), e = e.sibling; e !== null;)
      (Fa(e, t, n), (e = e.sibling));
}
var be = null,
  yt = !1;
function ln(e, t, n) {
  for (n = n.child; n !== null;) (Mh(e, t, n), (n = n.sibling));
}
function Mh(e, t, n) {
  if (Mt && typeof Mt.onCommitFiberUnmount == "function")
    try {
      Mt.onCommitFiberUnmount(Ai, n);
    } catch { }
  switch (n.tag) {
    case 5:
      _e || _r(n, t);
    case 6:
      var r = be,
        o = yt;
      ((be = null),
        ln(e, t, n),
        (be = r),
        (yt = o),
        be !== null &&
        (yt
          ? ((e = be),
            (n = n.stateNode),
            e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
          : be.removeChild(n.stateNode)));
      break;
    case 18:
      be !== null &&
        (yt
          ? ((e = be),
            (n = n.stateNode),
            e.nodeType === 8
              ? Rl(e.parentNode, n)
              : e.nodeType === 1 && Rl(e, n),
            Uo(e))
          : Rl(be, n.stateNode));
      break;
    case 4:
      ((r = be),
        (o = yt),
        (be = n.stateNode.containerInfo),
        (yt = !0),
        ln(e, t, n),
        (be = r),
        (yt = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          ((s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && La(n, t, i),
            (o = o.next));
        } while (o !== r);
      }
      ln(e, t, n);
      break;
    case 1:
      if (
        !_e &&
        (_r(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (l) {
          me(n, t, l);
        }
      ln(e, t, n);

      break;
    case 21:
      ln(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_e = (r = _e) || n.memoizedState !== null), ln(e, t, n), (_e = r))
        : ln(e, t, n);
      break;
    default:
      ln(e, t, n);
  }
}
function Nd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Kv()),
      t.forEach(function (r) {
        var o = oy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function ft(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var s = e,
          i = t,
          l = i;
        e: for (; l !== null;) {
          switch (l.tag) {
            case 5:
              ((be = l.stateNode), (yt = !1));
              break e;
            case 3:
              ((be = l.stateNode.containerInfo), (yt = !0));
              break e;
            case 4:
              ((be = l.stateNode.containerInfo), (yt = !0));
              break e;
          }
          l = l.return;
        }
        if (be === null) throw Error(I(160));
        (Mh(s, i, o), (be = null), (yt = !1));
        var a = o.alternate;
        (a !== null && (a.return = null), (o.return = null));
      } catch (u) {
        me(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) (Ah(t, e), (t = t.sibling));
}
function Ah(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ft(t, e), Nt(e), r & 4)) {
        try {
          (Mo(3, e, e.return), Ui(3, e));
        } catch (y) {
          me(e, e.return, y);
        }
        try {
          Mo(5, e, e.return);
        } catch (y) {
          me(e, e.return, y);
        }
      }
      break;
    case 1:
      (ft(t, e), Nt(e), r & 512 && n !== null && _r(n, n.return));
      break;
    case 5:
      if (
        (ft(t, e),
          Nt(e),
          r & 512 && n !== null && _r(n, n.return),
          e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Fo(o, "");
        } catch (y) {
          me(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (l === "input" && s.type === "radio" && s.name != null && np(o, s),
              aa(l, i));
            var u = aa(l, s);
            for (i = 0; i < a.length; i += 2) {
              var d = a[i],
                c = a[i + 1];
              d === "style"
                ? lp(o, c)
                : d === "dangerouslySetInnerHTML"
                  ? sp(o, c)
                  : d === "children"
                    ? Fo(o, c)
                    : fu(o, d, c, u);
            }
            switch (l) {
              case "input":
                ra(o, s);
                break;
              case "textarea":
                rp(o, s);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var f = s.value;
                f != null
                  ? Or(o, !!s.multiple, f, !1)
                  : h !== !!s.multiple &&
                  (s.defaultValue != null
                    ? Or(o, !!s.multiple, s.defaultValue, !0)
                    : Or(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[Yo] = s;
          } catch (y) {
            me(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((ft(t, e), Nt(e), r & 4)) {
        if (e.stateNode === null) throw Error(I(162));

        ((o = e.stateNode), (s = e.memoizedProps));
        try {
          o.nodeValue = s;
        } catch (y) {
          me(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (ft(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Uo(t.containerInfo);
        } catch (y) {
          me(e, e.return, y);
        }
      break;
    case 4:
      (ft(t, e), Nt(e));
      break;
    case 13:
      (ft(t, e),
        Nt(e),
        (o = e.child),
        o.flags & 8192 &&
        ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
          (o.alternate !== null && o.alternate.memoizedState !== null) ||
          (Hu = ge())),
        r & 4 && Nd(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((_e = (u = _e) || d), ft(t, e), (_e = u)) : ft(t, e),
          Nt(e),
          r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (V = e, d = e.child; d !== null;) {
            for (c = V = d; V !== null;) {
              switch (((h = V), (f = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mo(4, h, h.return);
                  break;
                case 1:
                  _r(h, h.return);
                  var S = h.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    ((r = h), (n = h.return));
                    try {
                      ((t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount());
                    } catch (y) {
                      me(r, n, y);
                    }
                  }
                  break;
                case 5:
                  _r(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Td(c);
                    continue;
                  }
              }
              f !== null ? ((f.return = h), (V = f)) : Td(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ;) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                ((o = c.stateNode),
                  u
                    ? ((s = o.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = c.stateNode),
                      (a = c.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = ip("display", i))));
              } catch (y) {
                me(e, e.return, y);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (y) {
                me(e, e.return, y);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            ((c.child.return = c), (c = c.child));
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null;) {
            if (c.return === null || c.return === e) break e;
            (d === c && (d = null), (c = c.return));
          }
          (d === c && (d = null),
            (c.sibling.return = c.return),
            (c = c.sibling));

        }
      }
      break;
    case 19:
      (ft(t, e), Nt(e), r & 4 && Nd(e));
      break;
    case 21:
      break;
    default:
      (ft(t, e), Nt(e));
  }
}
function Nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (Oh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Fo(o, ""), (r.flags &= -33));
          var s = kd(e);
          Fa(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = kd(e);
          Da(e, l, i);
          break;
        default:
          throw Error(I(161));
      }
    } catch (a) {
      me(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Xv(e, t, n) {
  ((V = e), Lh(e));
}
function Lh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null;) {
    var o = V,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Os;
      if (!i) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || _e;
        l = Os;
        var u = _e;
        if (((Os = i), (_e = a) && !u))
          for (V = o; V !== null;)
            ((i = V),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Rd(o)
                : a !== null
                  ? ((a.return = i), (V = a))
                  : Rd(o));
        for (; s !== null;) ((V = s), Lh(s), (s = s.sibling));
        ((V = o), (Os = l), (_e = u));
      }
      Pd(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (V = s)) : Pd(e);
  }
}
function Pd(e) {
  for (; V !== null;) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || Ui(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ht(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && dd(t, s, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                dd(t, i, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:

              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && Uo(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(I(163));
          }
        _e || (t.flags & 512 && Ia(t));
      } catch (h) {
        me(t, t.return, h);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (V = n));
      break;
    }
    V = t.return;
  }
}
function Td(e) {
  for (; V !== null;) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (V = n));
      break;
    }
    V = t.return;
  }
}
function Rd(e) {
  for (; V !== null;) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ui(4, t);
          } catch (a) {
            me(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              me(t, o, a);
            }
          }
          var s = t.return;
          try {
            Ia(t);
          } catch (a) {
            me(t, s, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ia(t);
          } catch (a) {
            me(t, i, a);
          }
      }
    } catch (a) {
      me(t, t.return, a);
    }
    if (t === e) {
      V = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      ((l.return = t.return), (V = l));
      break;
    }
    V = t.return;
  }
}
var qv = Math.ceil,
  Si = Zt.ReactCurrentDispatcher,
  Wu = Zt.ReactCurrentOwner,
  it = Zt.ReactCurrentBatchConfig,
  J = 0,
  Ee = null,
  ve = null,
  Ce = 0,
  Qe = 0,
  jr = zn(0),
  we = 0,
  Jo = null,
  ir = 0,
  Wi = 0,
  Vu = 0,
  Ao = null,
  ze = null,
  Hu = 0,
  to = 1 / 0,
  $t = null,
  Ei = !1,
  za = null,
  Rn = null,
  Ms = !1,
  En = null,
  bi = 0,
  Lo = 0,
  $a = null,
  Xs = -1,
  qs = 0;
function Le() {
  return J & 6 ? ge() : Xs !== -1 ? Xs : (Xs = ge());
}
function _n(e) {
  return e.mode & 1
    ? J & 2 && Ce !== 0
      ? Ce & -Ce
      : Av.transition !== null
        ? (qs === 0 && (qs = xp()), qs)
        : ((e = ne),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Np(e.type))),
          e)
    : 1;
}
function St(e, t, n, r) {
  if (50 < Lo) throw ((Lo = 0), ($a = null), Error(I(185)));
  (ls(e, n, r),
    (!(J & 2) || e !== Ee) &&
    (e === Ee && (!(J & 2) && (Wi |= n), we === 4 && mn(e, Ce)),
      We(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((to = ge() + 500), zi && $n())));
}
function We(e, t) {
  var n = e.callbackNode;
  A0(e, t);
  var r = ii(e, e === Ee ? Ce : 0);
  if (r === 0)
    (n !== null && Fc(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Fc(n), t === 1))
      (e.tag === 0 ? Mv(_d.bind(null, e)) : Hp(_d.bind(null, e)),
        Rv(function () {
          !(J & 6) && $n();
        }),
        (n = null));
    else {
      switch (wp(r)) {
        case 1:
          n = vu;
          break;
        case 4:
          n = vp;

          break;
        case 16:
          n = si;
          break;
        case 536870912:
          n = yp;
          break;
        default:
          n = si;
      }
      n = Wh(n, Ih.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Ih(e, t) {
  if (((Xs = -1), (qs = 0), J & 6)) throw Error(I(327));
  var n = e.callbackNode;
  if (Dr() && e.callbackNode !== n) return null;
  var r = ii(e, e === Ee ? Ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ci(e, r);
  else {
    t = r;
    var o = J;
    J |= 2;
    var s = Fh();
    (Ee !== e || Ce !== t) && (($t = null), (to = ge() + 500), tr(e, t));
    do
      try {
        ey();
        break;
      } catch (l) {
        Dh(e, l);
      }
    while (!0);
    (_u(),
      (Si.current = s),
      (J = o),
      ve !== null ? (t = 0) : ((Ee = null), (Ce = 0), (t = we)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = pa(e)), o !== 0 && ((r = o), (t = Ba(e, o)))), t === 1)
    )
      throw ((n = Jo), tr(e, 0), mn(e, r), We(e, ge()), n);
    if (t === 6) mn(e, r);
    else {
      if (
        ((o = e.current.alternate),
          !(r & 30) &&
          !Zv(o) &&
          ((t = Ci(e, r)),
            t === 2 && ((s = pa(e)), s !== 0 && ((r = s), (t = Ba(e, s)))),
            t === 1))
      )
        throw ((n = Jo), tr(e, 0), mn(e, r), We(e, ge()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          Hn(e, ze, $t);
          break;
        case 3:
          if (
            (mn(e, r), (r & 130023424) === r && ((t = Hu + 500 - ge()), 10 < t))
          ) {
            if (ii(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (Le(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = Sa(Hn.bind(null, e, ze, $t), t);
            break;
          }
          Hn(e, ze, $t);
          break;
        case 4:
          if ((mn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r;) {
            var i = 31 - wt(r);
            ((s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s));
          }
          if (
            ((r = o),
              (r = ge() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * qv(r / 1960)) - r),
              10 < r)
          ) {
            e.timeoutHandle = Sa(Hn.bind(null, e, ze, $t), r);
            break;
          }
          Hn(e, ze, $t);
          break;
        case 5:
          Hn(e, ze, $t);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return (We(e, ge()), e.callbackNode === n ? Ih.bind(null, e) : null);
}
function Ba(e, t) {
  var n = Ao;
  return (
    e.current.memoizedState.isDehydrated && (tr(e, t).flags |= 256),
    (e = Ci(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && Ua(t)),
    e
  );
}
function Ua(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function Zv(e) {
  for (var t = e; ;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!Et(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))

      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function mn(e, t) {
  for (
    t &= ~Vu,
    t &= ~Wi,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - wt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function _d(e) {
  if (J & 6) throw Error(I(327));
  Dr();
  var t = ii(e, 0);
  if (!(t & 1)) return (We(e, ge()), null);
  var n = Ci(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = pa(e);
    r !== 0 && ((t = r), (n = Ba(e, r)));
  }
  if (n === 1) throw ((n = Jo), tr(e, 0), mn(e, t), We(e, ge()), n);
  if (n === 6) throw Error(I(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Hn(e, ze, $t),
    We(e, ge()),
    null
  );
}
function Qu(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    ((J = n), J === 0 && ((to = ge() + 500), zi && $n()));
  }
}
function lr(e) {
  En !== null && En.tag === 0 && !(J & 6) && Dr();
  var t = J;
  J |= 1;
  var n = it.transition,
    r = ne;
  try {
    if (((it.transition = null), (ne = 1), e)) return e();
  } finally {
    ((ne = r), (it.transition = n), (J = t), !(J & 6) && $n());
  }
}
function Yu() {
  ((Qe = jr.current), ae(jr));
}
function tr(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Tv(n)), ve !== null))
    for (n = ve.return; n !== null;) {
      var r = n;
      switch ((Pu(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && di());
          break;
        case 3:
          (Jr(), ae(Be), ae(je), Iu());
          break;
        case 5:
          Lu(r);
          break;
        case 4:
          Jr();
          break;
        case 13:
          ae(de);
          break;
        case 19:
          ae(de);
          break;
        case 10:
          ju(r.type._context);
          break;
        case 22:
        case 23:
          Yu();
      }
      n = n.return;
    }
  if (
    ((Ee = e),
      (ve = e = jn(e.current, null)),
      (Ce = Qe = t),
      (we = 0),
      (Jo = null),
      (Vu = Wi = ir = 0),
      (ze = Ao = null),
      Yn !== null)
  ) {
    for (t = 0; t < Yn.length; t++)
      if (((n = Yn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          ((s.next = o), (r.next = i));
        }
        n.pending = r;
      }
    Yn = null;
  }
  return e;
}
function Dh(e, t) {
  do {
    var n = ve;
    try {
      if ((_u(), (Ys.current = wi), xi)) {
        for (var r = fe.memoizedState; r !== null;) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        xi = !1;
      }
      if (
        ((sr = 0),
          (Se = ye = fe = null),
          (Oo = !1),
          (Xo = 0),
          (Wu.current = null),
          n === null || n.return === null)
      ) {
        ((we = 1), (Jo = t), (ve = null));
        break;
      }
      e: {
        var s = e,
          i = n.return,
          l = n,
          a = t;
        if (
          ((t = Ce),
            (l.flags |= 32768),
            a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = l,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),

                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var f = vd(i);
          if (f !== null) {
            ((f.flags &= -257),
              yd(f, i, l, s, t),
              f.mode & 1 && gd(s, u, t),
              (t = f),
              (a = u));
            var S = t.updateQueue;
            if (S === null) {
              var y = new Set();
              (y.add(a), (t.updateQueue = y));
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (gd(s, u, t), Ku());
              break e;
            }
            a = Error(I(426));
          }
        } else if (ce && l.mode & 1) {
          var x = vd(i);
          if (x !== null) {
            (!(x.flags & 65536) && (x.flags |= 256),
              yd(x, i, l, s, t),
              Tu(eo(a, l)));
            break e;
          }
        }
        ((s = a = eo(a, l)),
          we !== 4 && (we = 2),
          Ao === null ? (Ao = [s]) : Ao.push(s),
          (s = i));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var m = wh(s, a, t);
              cd(s, m);
              break e;
            case 1:
              l = a;
              var p = s.type,
                v = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Rn === null || !Rn.has(v))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var E = Sh(s, l, t);
                cd(s, E);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      $h(n);
    } catch (b) {
      ((t = b), ve === n && n !== null && (ve = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Fh() {
  var e = Si.current;
  return ((Si.current = wi), e === null ? wi : e);
}
function Ku() {
  ((we === 0 || we === 3 || we === 2) && (we = 4),
    Ee === null || (!(ir & 268435455) && !(Wi & 268435455)) || mn(Ee, Ce));
}
function Ci(e, t) {
  var n = J;
  J |= 2;
  var r = Fh();
  (Ee !== e || Ce !== t) && (($t = null), tr(e, t));
  do
    try {
      Jv();
      break;
    } catch (o) {
      Dh(e, o);
    }
  while (!0);
  if ((_u(), (J = n), (Si.current = r), ve !== null)) throw Error(I(261));
  return ((Ee = null), (Ce = 0), we);
}
function Jv() {
  for (; ve !== null;) zh(ve);
}
function ey() {
  for (; ve !== null && !k0();) zh(ve);
}
function zh(e) {
  var t = Uh(e.alternate, e, Qe);
  ((e.memoizedProps = e.pendingProps),
    t === null ? $h(e) : (ve = t),
    (Wu.current = null));
}
function $h(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Yv(n, t)), n !== null)) {
        ((n.flags &= 32767), (ve = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((we = 6), (ve = null));
        return;
      }
    } else if (((n = Qv(n, t, Qe)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function Hn(e, t, n) {
  var r = ne,
    o = it.transition;
  try {
    ((it.transition = null), (ne = 1), ty(e, t, n, r));
  } finally {
    ((it.transition = o), (ne = r));
  }
  return null;
}
function ty(e, t, n, r) {
  do Dr();
  while (En !== null);
  if (J & 6) throw Error(I(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;

  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(I(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (L0(e, s),
      e === Ee && ((ve = Ee = null), (Ce = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ms ||
      ((Ms = !0),
        Wh(si, function () {
          return (Dr(), null);
        })),
      (s = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || s)
  ) {
    ((s = it.transition), (it.transition = null));
    var i = ne;
    ne = 1;
    var l = J;
    ((J |= 4),
      (Wu.current = null),
      Gv(e, n),
      Ah(n, e),
      Sv(xa),
      (li = !!ya),
      (xa = ya = null),
      (e.current = n),
      Xv(n),
      N0(),
      (J = l),
      (ne = i),
      (it.transition = s));
  } else e.current = n;
  if (
    (Ms && ((Ms = !1), (En = e), (bi = o)),
      (s = e.pendingLanes),
      s === 0 && (Rn = null),
      R0(n.stateNode),
      We(e, ge()),
      t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (Ei) throw ((Ei = !1), (e = za), (za = null), e);
  return (
    bi & 1 && e.tag !== 0 && Dr(),
    (s = e.pendingLanes),
    s & 1 ? (e === $a ? Lo++ : ((Lo = 0), ($a = e))) : (Lo = 0),
    $n(),
    null
  );
}
function Dr() {
  if (En !== null) {
    var e = wp(bi),
      t = it.transition,
      n = ne;
    try {
      if (((it.transition = null), (ne = 16 > e ? 16 : e), En === null))
        var r = !1;
      else {
        if (((e = En), (En = null), (bi = 0), J & 6)) throw Error(I(331));
        var o = J;
        for (J |= 4, V = e.current; V !== null;) {
          var s = V,
            i = s.child;
          if (V.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (V = u; V !== null;) {
                  var d = V;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mo(8, d, s);
                  }
                  var c = d.child;
                  if (c !== null) ((c.return = d), (V = c));
                  else
                    for (; V !== null;) {
                      d = V;
                      var h = d.sibling,
                        f = d.return;
                      if ((jh(d), d === u)) {
                        V = null;
                        break;
                      }
                      if (h !== null) {
                        ((h.return = f), (V = h));
                        break;
                      }
                      V = f;
                    }
                }
              }
              var S = s.alternate;
              if (S !== null) {
                var y = S.child;
                if (y !== null) {
                  S.child = null;
                  do {
                    var x = y.sibling;
                    ((y.sibling = null), (y = x));
                  } while (y !== null);
                }
              }
              V = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) ((i.return = s), (V = i));
          else
            e: for (; V !== null;) {
              if (((s = V), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mo(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                ((m.return = s.return), (V = m));
                break e;
              }
              V = s.return;
            }
        }
        var p = e.current;
        for (V = p; V !== null;) {
          i = V;
          var v = i.child;

          if (i.subtreeFlags & 2064 && v !== null) ((v.return = i), (V = v));
          else
            e: for (i = p; V !== null;) {
              if (((l = V), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ui(9, l);
                  }
                } catch (b) {
                  me(l, l.return, b);
                }
              if (l === i) {
                V = null;
                break e;
              }
              var E = l.sibling;
              if (E !== null) {
                ((E.return = l.return), (V = E));
                break e;
              }
              V = l.return;
            }
        }
        if (
          ((J = o), $n(), Mt && typeof Mt.onPostCommitFiberRoot == "function")
        )
          try {
            Mt.onPostCommitFiberRoot(Ai, e);
          } catch { }
        r = !0;
      }
      return r;
    } finally {
      ((ne = n), (it.transition = t));
    }
  }
  return !1;
}
function jd(e, t, n) {
  ((t = eo(n, t)),
    (t = wh(e, t, 1)),
    (e = Tn(e, t, 1)),
    (t = Le()),
    e !== null && (ls(e, 1, t), We(e, t)));
}
function me(e, t, n) {
  if (e.tag === 3) jd(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        jd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Rn === null || !Rn.has(r)))
        ) {
          ((e = eo(n, e)),
            (e = Sh(t, e, 1)),
            (t = Tn(t, e, 1)),
            (e = Le()),
            t !== null && (ls(t, 1, e), We(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function ny(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Le()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
    (Ce & n) === n &&
    (we === 4 || (we === 3 && (Ce & 130023424) === Ce && 500 > ge() - Hu)
      ? tr(e, 0)
      : (Vu |= n)),
    We(e, t));
}
function Bh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = bs), (bs <<= 1), !(bs & 130023424) && (bs = 4194304))
      : (t = 1));
  var n = Le();
  ((e = Kt(e, t)), e !== null && (ls(e, t, n), We(e, n)));
}
function ry(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Bh(e, n));
}
function oy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  (r !== null && r.delete(t), Bh(e, n));
}
var Uh;
Uh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) $e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (($e = !1), Hv(e, t, n));
      $e = !!(e.flags & 131072);
    }
  else (($e = !1), ce && t.flags & 1048576 && Qp(t, hi, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Gs(e, t), (e = t.pendingProps));
      var o = Xr(t, je.current);
      (Ir(t, n), (o = Fu(null, t, r, e, o, n)));
      var s = zu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ue(r) ? ((s = !0), fi(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Mu(t),
            (o.updater = Bi),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ta(t, r, e, n),

            (t = ja(null, t, r, !0, s, n)))
          : ((t.tag = 0), ce && s && Nu(t), Me(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
        (Gs(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = iy(r)),
          (e = ht(r, e)),
          o)
        ) {
          case 0:
            t = _a(null, t, r, e, n);
            break e;
          case 1:
            t = Sd(null, t, r, e, n);
            break e;
          case 11:
            t = xd(null, t, r, e, n);
            break e;
          case 14:
            t = wd(null, t, r, ht(r.type, e), n);
            break e;
        }
        throw Error(I(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ht(r, o)),
        _a(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ht(r, o)),
        Sd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((kh(t), e === null)) throw Error(I(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          Zp(e, t),
          vi(t, r, null, n));
        var i = t.memoizedState;
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
          ) {
            ((o = eo(Error(I(423)), t)), (t = Ed(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = eo(Error(I(424)), t)), (t = Ed(e, t, r, n, o)));
            break e;
          } else
            for (
              Ke = Pn(t.stateNode.containerInfo.firstChild),
              Ge = t,
              ce = !0,
              xt = null,
              n = Xp(t, null, r, n),
              t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((qr(), r === o)) {
            t = Gt(e, t, n);
            break e;
          }
          Me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Jp(t),
        e === null && ka(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        wa(r, o) ? (i = null) : s !== null && wa(r, s) && (t.flags |= 32),
        Ch(e, t),
        Me(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && ka(t), null);
    case 13:
      return Nh(e, t, n);
    case 4:
      return (
        Au(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Zr(t, null, r, n)) : Me(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ht(r, o)),
        xd(e, t, r, o, n)
      );
    case 7:
      return (Me(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Me(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Me(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
            (o = t.pendingProps),
            (s = t.memoizedProps),
            (i = o.value),
            se(mi, r._currentValue),
            (r._currentValue = i),
            s !== null)
        )
          if (Et(s.value, i)) {
            if (s.children === o.children && !Be.current) {

              t = Gt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null;) {
              var l = s.dependencies;
              if (l !== null) {
                i = s.child;
                for (var a = l.firstContext; a !== null;) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      ((a = Ht(-1, n & -n)), (a.tag = 2));
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        (d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a));
                      }
                    }
                    ((s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      Na(s.return, n, t),
                      (l.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(I(341));
                ((i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  Na(i, n, t),
                  (i = s.sibling));
              } else i = s.child;
              if (i !== null) i.return = s;
              else
                for (i = s; i !== null;) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((s = i.sibling), s !== null)) {
                    ((s.return = i.return), (i = s));
                    break;
                  }
                  i = i.return;
                }
              s = i;
            }
        (Me(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Ir(t, n),
        (o = lt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Me(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = ht(r, t.pendingProps)),
        (o = ht(r.type, o)),
        wd(e, t, r, o, n)
      );
    case 15:
      return Eh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ht(r, o)),
        Gs(e, t),
        (t.tag = 1),
        Ue(r) ? ((e = !0), fi(t)) : (e = !1),
        Ir(t, n),
        xh(t, r, o),
        Ta(t, r, o, n),
        ja(null, t, r, !0, e, n)
      );
    case 19:
      return Ph(e, t, n);
    case 22:
      return bh(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Wh(e, t) {
  return gp(e, t);
}
function sy(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
      null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
      null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function st(e, t, n, r) {
  return new sy(e, t, n, r);
}
function Gu(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function iy(e) {
  if (typeof e == "function") return Gu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === hu)) return 11;
    if (e === mu) return 14;
  }
  return 2;
}
function jn(e, t) {
  var n = e.alternate;

  return (
    n === null
      ? ((n = st(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Zs(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) Gu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Sr:
        return nr(n.children, o, s, t);
      case pu:
        ((i = 8), (o |= 8));
        break;
      case Zl:
        return (
          (e = st(12, n, t, o | 2)),
          (e.elementType = Zl),
          (e.lanes = s),
          e
        );
      case Jl:
        return ((e = st(13, n, t, o)), (e.elementType = Jl), (e.lanes = s), e);
      case ea:
        return ((e = st(19, n, t, o)), (e.elementType = ea), (e.lanes = s), e);
      case Jf:
        return Vi(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case qf:
              i = 10;
              break e;
            case Zf:
              i = 9;
              break e;
            case hu:
              i = 11;
              break e;
            case mu:
              i = 14;
              break e;
            case fn:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(I(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = st(i, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function nr(e, t, n, r) {
  return ((e = st(7, e, r, t)), (e.lanes = n), e);
}
function Vi(e, t, n, r) {
  return (
    (e = st(22, e, r, t)),
    (e.elementType = Jf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Dl(e, t, n) {
  return ((e = st(6, e, null, t)), (e.lanes = n), e);
}
function Fl(e, t, n) {
  return (
    (t = st(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ly(e, t, n, r, o) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
      null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = yl(0)),
    (this.expirationTimes = yl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
      0),
    (this.entanglements = yl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function Xu(e, t, n, r, o, s, i, l, a) {
  return (
    (e = new ly(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = st(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Mu(s),
    e
  );
}
function ay(e, t, n) {

  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Vh(e) {
  if (!e) return Mn;
  e = e._reactInternals;
  e: {
    if (cr(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ue(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ue(n)) return Vp(e, n, t);
  }
  return t;
}
function Hh(e, t, n, r, o, s, i, l, a) {
  return (
    (e = Xu(n, r, !0, e, o, s, i, l, a)),
    (e.context = Vh(null)),
    (n = e.current),
    (r = Le()),
    (o = _n(n)),
    (s = Ht(r, o)),
    (s.callback = t ?? null),
    Tn(n, s, o),
    (e.current.lanes = o),
    ls(e, o, r),
    We(e, r),
    e
  );
}
function Hi(e, t, n, r) {
  var o = t.current,
    s = Le(),
    i = _n(o);
  return (
    (n = Vh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ht(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Tn(o, t, i)),
    e !== null && (St(e, o, i, s), Qs(e, o, i)),
    i
  );
}
function ki(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Od(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function qu(e, t) {
  (Od(e, t), (e = e.alternate) && Od(e, t));
}
function uy() {
  return null;
}
var Qh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
      console.error(e);
    };
function Zu(e) {
  this._internalRoot = e;
}
Qi.prototype.render = Zu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  Hi(e, t, null, null);
};
Qi.prototype.unmount = Zu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (lr(function () {
      Hi(null, e, null, null);
    }),
      (t[Yt] = null));
  }
};
function Qi(e) {
  this._internalRoot = e;
}
Qi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = bp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++);
    (hn.splice(n, 0, e), n === 0 && kp(e));
  }
};
function Ju(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Md() { }
function cy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = ki(i);
        s.call(u);
      };
    }
    var i = Hh(t, r, e, 0, null, !1, !1, "", Md);
    return (
      (e._reactRootContainer = i),
      (e[Yt] = i.current),
      Ho(e.nodeType === 8 ? e.parentNode : e),
      lr(),
      i
    );
  }
  for (; (o = e.lastChild);) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = ki(a);
      l.call(u);
    };
  }
  var a = Xu(e, 0, !1, null, null, !1, !1, "", Md);
  return (
    (e._reactRootContainer = a),
    (e[Yt] = a.current),

    Ho(e.nodeType === 8 ? e.parentNode : e),
    lr(function () {
      Hi(t, a, n, r);
    }),
    a
  );
}
function Ki(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = ki(i);
        l.call(a);
      };
    }
    Hi(t, i, e, o);
  } else i = cy(n, t, e, o, r);
  return ki(i);
}
Sp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ko(t.pendingLanes);
        n !== 0 &&
          (yu(t, n | 1), We(t, ge()), !(J & 6) && ((to = ge() + 500), $n()));
      }
      break;
    case 13:
      (lr(function () {
        var r = Kt(e, 1);
        if (r !== null) {
          var o = Le();
          St(r, e, 1, o);
        }
      }),
        qu(e, 1));
  }
};
xu = function (e) {
  if (e.tag === 13) {
    var t = Kt(e, 134217728);
    if (t !== null) {
      var n = Le();
      St(t, e, 134217728, n);
    }
    qu(e, 134217728);
  }
};
Ep = function (e) {
  if (e.tag === 13) {
    var t = _n(e),
      n = Kt(e, t);
    if (n !== null) {
      var r = Le();
      St(n, e, t, r);
    }
    qu(e, t);
  }
};
bp = function () {
  return ne;
};
Cp = function (e, t) {
  var n = ne;
  try {
    return ((ne = e), t());
  } finally {
    ne = n;
  }
};
ca = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ra(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
          t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Fi(r);
            if (!o) throw Error(I(90));
            (tp(r), ra(r, o));
          }
        }
      }
      break;
    case "textarea":
      rp(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Or(e, !!n.multiple, t, !1));
  }
};
cp = Qu;
dp = lr;
var dy = { usingClientEntryPoint: !1, Events: [us, kr, Fi, ap, up, Qu] },
  wo = {
    findFiberByHostInstance: Qn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  fy = {
    bundleType: wo.bundleType,
    version: wo.version,
    rendererPackageName: wo.rendererPackageName,
    rendererConfig: wo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = hp(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: wo.findFiberByHostInstance || uy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var As = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!As.isDisabled && As.supportsFiber)
    try {
      ((Ai = As.inject(fy)), (Mt = As));
    } catch { }
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dy;
Ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ju(t)) throw Error(I(200));
  return ay(e, t, null, n);
};
Ze.createRoot = function (e, t) {
  if (!Ju(e)) throw Error(I(299));
  var n = !1,
    r = "",
    o = Qh;
  return (
    t != null &&
    (t.unstable_strictMode === !0 && (n = !0),

      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Xu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Yt] = t.current),
    Ho(e.nodeType === 8 ? e.parentNode : e),
    new Zu(t)
  );
};
Ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(I(188))
      : ((e = Object.keys(e).join(",")), Error(I(268, e)));
  return ((e = hp(t)), (e = e === null ? null : e.stateNode), e);
};
Ze.flushSync = function (e) {
  return lr(e);
};
Ze.hydrate = function (e, t, n) {
  if (!Yi(t)) throw Error(I(200));
  return Ki(null, e, t, !0, n);
};
Ze.hydrateRoot = function (e, t, n) {
  if (!Ju(e)) throw Error(I(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = Qh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
      (t = Hh(t, null, e, 1, n ?? null, o, !1, s, i)),
      (e[Yt] = t.current),
      Ho(e),
      r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new Qi(t);
};
Ze.render = function (e, t, n) {
  if (!Yi(t)) throw Error(I(200));
  return Ki(null, e, t, !1, n);
};
Ze.unmountComponentAtNode = function (e) {
  if (!Yi(e)) throw Error(I(40));
  return e._reactRootContainer
    ? (lr(function () {
      Ki(null, null, e, !1, function () {
        ((e._reactRootContainer = null), (e[Yt] = null));
      });
    }),
      !0)
    : !1;
};
Ze.unstable_batchedUpdates = Qu;
Ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Yi(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return Ki(e, t, n, !1, r);
};
Ze.version = "18.3.1-next-f1338f8080-20240426";
function Yh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yh);
    } catch (e) {
      console.error(e);
    }
}
(Yh(), (Yf.exports = Ze));
var ds = Yf.exports;
const Kh = Af(ds);
var Gh,
  Ad = ds;
((Gh = Ad.createRoot), Ad.hydrateRoot);
var Gi = class {
  constructor() {
    ((this.listeners = new Set()),
      (this.subscribe = this.subscribe.bind(this)));
  }
  subscribe(e) {
    return (
      this.listeners.add(e),
      this.onSubscribe(),
      () => {
        (this.listeners.delete(e), this.onUnsubscribe());
      }
    );
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() { }
  onUnsubscribe() { }
},
  Xi = typeof window > "u" || "Deno" in globalThis;
function mt() { }
function py(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function hy(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function my(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Wa(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gy(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ld(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: s,
    queryKey: i,
    stale: l,
  } = e;
  if (i) {
    if (r) {
      if (t.queryHash !== ec(i, t.options)) return !1;
    } else if (!ts(t.queryKey, i)) return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||

    (o && o !== t.state.fetchStatus) ||
    (s && !s(t))
  );
}
function Id(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (es(t.options.mutationKey) !== es(s)) return !1;
    } else if (!ts(t.options.mutationKey, s)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function ec(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || es)(e);
}
function es(e) {
  return JSON.stringify(e, (t, n) =>
    Va(n)
      ? Object.keys(n)
        .sort()
        .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n,
  );
}
function ts(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((n) => ts(e[n], t[n]))
        : !1;
}
function Xh(e, t) {
  if (e === t) return e;
  const n = Dd(e) && Dd(t);
  if (n || (Va(e) && Va(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      s = n ? t : Object.keys(t),
      i = s.length,
      l = n ? [] : {},
      a = new Set(r);
    let u = 0;
    for (let d = 0; d < i; d++) {
      const c = n ? d : s[d];
      ((!n && a.has(c)) || n) && e[c] === void 0 && t[c] === void 0
        ? ((l[c] = void 0), u++)
        : ((l[c] = Xh(e[c], t[c])), l[c] === e[c] && e[c] !== void 0 && u++);
    }
    return o === i && u === o ? e : l;
  }
  return t;
}
function Dd(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Va(e) {
  if (!Fd(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Fd(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Fd(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function vy(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function yy(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? Xh(e, t)
      : t;
}
function xy(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function wy(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var tc = Symbol();
function qh(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === tc
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var Gn,
  gn,
  Br,
  Nf,
  Sy =
    ((Nf = class extends Gi {
      constructor() {
        super();
        ee(this, Gn);
        ee(this, gn);
        ee(this, Br);
        K(this, Br, (t) => {
          if (!Xi && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        j(this, gn) || this.setEventListener(j(this, Br));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = j(this, gn)) == null || t.call(this), K(this, gn, void 0));
      }
      setEventListener(t) {
        var n;
        (K(this, Br, t),
          (n = j(this, gn)) == null || n.call(this),
          K(
            this,
            gn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        j(this, Gn) !== t && (K(this, Gn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {

        var t;
        return typeof j(this, Gn) == "boolean"
          ? j(this, Gn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
          "hidden";
      }
    }),
      (Gn = new WeakMap()),
      (gn = new WeakMap()),
      (Br = new WeakMap()),
      Nf),
  Zh = new Sy(),
  Ur,
  vn,
  Wr,
  Pf,
  Ey =
    ((Pf = class extends Gi {
      constructor() {
        super();
        ee(this, Ur, !0);
        ee(this, vn);
        ee(this, Wr);
        K(this, Wr, (t) => {
          if (!Xi && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        j(this, vn) || this.setEventListener(j(this, Wr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = j(this, vn)) == null || t.call(this), K(this, vn, void 0));
      }
      setEventListener(t) {
        var n;
        (K(this, Wr, t),
          (n = j(this, vn)) == null || n.call(this),
          K(this, vn, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        j(this, Ur) !== t &&
          (K(this, Ur, t),
            this.listeners.forEach((r) => {
              r(t);
            }));
      }
      isOnline() {
        return j(this, Ur);
      }
    }),
      (Ur = new WeakMap()),
      (vn = new WeakMap()),
      (Wr = new WeakMap()),
      Pf),
  Ni = new Ey();
function by() {
  let e, t;
  const n = new Promise((o, s) => {
    ((e = o), (t = s));
  });
  ((n.status = "pending"), n.catch(() => { }));
  function r(o) {
    (Object.assign(n, o), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (o) => {
      (r({ status: "fulfilled", value: o }), e(o));
    }),
    (n.reject = (o) => {
      (r({ status: "rejected", reason: o }), t(o));
    }),
    n
  );
}
function Cy(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Jh(e) {
  return (e ?? "online") === "online" ? Ni.isOnline() : !0;
}
var em = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function zl(e) {
  return e instanceof em;
}
function tm(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const s = by(),
    i = (y) => {
      var x;
      r || (h(new em(y)), (x = e.abort) == null || x.call(e));
    },
    l = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () =>
      Zh.isFocused() &&
      (e.networkMode === "always" || Ni.isOnline()) &&
      e.canRun(),
    d = () => Jh(e.networkMode) && e.canRun(),
    c = (y) => {
      var x;
      r ||
        ((r = !0),
          (x = e.onSuccess) == null || x.call(e, y),
          o == null || o(),
          s.resolve(y));
    },
    h = (y) => {
      var x;
      r ||
        ((r = !0),
          (x = e.onError) == null || x.call(e, y),
          o == null || o(),
          s.reject(y));
    },
    f = () =>
      new Promise((y) => {
        var x;
        ((o = (m) => {
          (r || u()) && y(m);
        }),
          (x = e.onPause) == null || x.call(e));
      }).then(() => {
        var y;
        ((o = void 0), r || (y = e.onContinue) == null || y.call(e));
      }),
    S = () => {
      if (r) return;
      let y;
      const x = n === 0 ? e.initialPromise : void 0;
      try {
        y = x ?? e.fn();
      } catch (m) {
        y = Promise.reject(m);
      }
      Promise.resolve(y)
        .then(c)
        .catch((m) => {

          var k;
          if (r) return;
          const p = e.retry ?? (Xi ? 0 : 3),
            v = e.retryDelay ?? Cy,
            E = typeof v == "function" ? v(n, m) : v,
            b =
              p === !0 ||
              (typeof p == "number" && n < p) ||
              (typeof p == "function" && p(n, m));
          if (t || !b) {
            h(m);
            return;
          }
          (n++,
            (k = e.onFail) == null || k.call(e, n, m),
            vy(E)
              .then(() => (u() ? void 0 : f()))
              .then(() => {
                t ? h(m) : S();
              }));
        });
    };
  return {
    promise: s,
    cancel: i,
    continue: () => (o == null || o(), s),
    cancelRetry: l,
    continueRetry: a,
    canStart: d,
    start: () => (d() ? S() : f().then(S), s),
  };
}
var ky = (e) => setTimeout(e, 0);
function Ny() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = ky;
  const s = (l) => {
    t
      ? e.push(l)
      : o(() => {
        n(l);
      });
  },
    i = () => {
      const l = e;
      ((e = []),
        l.length &&
        o(() => {
          r(() => {
            l.forEach((a) => {
              n(a);
            });
          });
        }));
    };
  return {
    batch: (l) => {
      let a;
      t++;
      try {
        a = l();
      } finally {
        (t--, t || i());
      }
      return a;
    },
    batchCalls:
      (l) =>
        (...a) => {
          s(() => {
            l(...a);
          });
        },
    schedule: s,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var Ae = Ny(),
  Xn,
  Tf,
  nm =
    ((Tf = class {
      constructor() {
        ee(this, Xn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          hy(this.gcTime) &&
          K(
            this,
            Xn,
            setTimeout(() => {
              this.optionalRemove();
            }, this.gcTime),
          ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Xi ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        j(this, Xn) && (clearTimeout(j(this, Xn)), K(this, Xn, void 0));
      }
    }),
      (Xn = new WeakMap()),
      Tf),
  Vr,
  qn,
  nt,
  Zn,
  Re,
  os,
  Jn,
  gt,
  zt,
  Rf,
  Py =
    ((Rf = class extends nm {
      constructor(t) {
        super();
        ee(this, gt);
        ee(this, Vr);
        ee(this, qn);
        ee(this, nt);
        ee(this, Zn);
        ee(this, Re);
        ee(this, os);
        ee(this, Jn);
        (K(this, Jn, !1),
          K(this, os, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          K(this, Zn, t.client),
          K(this, nt, j(this, Zn).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          K(this, Vr, Ry(this.options)),
          (this.state = t.state ?? j(this, Vr)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = j(this, Re)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        ((this.options = { ...j(this, os), ...t }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          j(this, nt).remove(this);
      }
      setData(t, n) {
        const r = yy(this.state.data, t, this.options);
        return (

          Ne(this, gt, zt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Ne(this, gt, zt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = j(this, Re)) == null ? void 0 : r.promise;
        return (
          (o = j(this, Re)) == null || o.cancel(t),
          n ? n.then(mt).catch(mt) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(j(this, Vr)));
      }
      isActive() {
        return this.observers.some((t) => gy(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === tc ||
          this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
            (t) => Wa(t.options.staleTime, this) === "static",
          )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
            ? !1
            : this.state.isInvalidated
              ? !0
              : !my(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = j(this, Re)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = j(this, Re)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
            this.clearGcTimeout(),
            j(this, nt).notify({
              type: "observerAdded",
              query: this,
              observer: t,
            }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
            this.observers.length ||
            (j(this, Re) &&
              (j(this, Jn)
                ? j(this, Re).cancel({ revert: !0 })
                : j(this, Re).cancelRetry()),
              this.scheduleGc()),
            j(this, nt).notify({
              type: "observerRemoved",
              query: this,
              observer: t,
            }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Ne(this, gt, zt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, d, c;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (j(this, Re))
            return (j(this, Re).continueRetry(), j(this, Re).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const h = this.observers.find((f) => f.options.queryFn);
          h && this.setOptions(h.options);
        }
        const r = new AbortController(),
          o = (h) => {
            Object.defineProperty(h, "signal", {
              enumerable: !0,
              get: () => (K(this, Jn, !0), r.signal),
            });
          },
          s = () => {

            const h = qh(this.options, n),
              S = (() => {
                const y = {
                  client: j(this, Zn),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (o(y), y);
              })();
            return (
              K(this, Jn, !1),
              this.options.persister ? this.options.persister(h, S, this) : h(S)
            );
          },
          l = (() => {
            const h = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: j(this, Zn),
              state: this.state,
              fetchFn: s,
            };
            return (o(h), h);
          })();
        ((u = this.options.behavior) == null || u.onFetch(l, this),
          K(this, qn, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
            ((d = l.fetchOptions) == null ? void 0 : d.meta)) &&
          Ne(this, gt, zt).call(this, {
            type: "fetch",
            meta: (c = l.fetchOptions) == null ? void 0 : c.meta,
          }));
        const a = (h) => {
          var f, S, y, x;
          ((zl(h) && h.silent) ||
            Ne(this, gt, zt).call(this, { type: "error", error: h }),
            zl(h) ||
            ((S = (f = j(this, nt).config).onError) == null ||
              S.call(f, h, this),
              (x = (y = j(this, nt).config).onSettled) == null ||
              x.call(y, this.state.data, h, this)),
            this.scheduleGc());
        };
        return (
          K(
            this,
            Re,
            tm({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: l.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (h) => {
                var f, S, y, x;
                if (h === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(h);
                } catch (m) {
                  a(m);
                  return;
                }
                ((S = (f = j(this, nt).config).onSuccess) == null ||
                  S.call(f, h, this),
                  (x = (y = j(this, nt).config).onSettled) == null ||
                  x.call(y, h, this.state.error, this),
                  this.scheduleGc());
              },
              onError: a,
              onFail: (h, f) => {
                Ne(this, gt, zt).call(this, {
                  type: "failed",
                  failureCount: h,
                  error: f,
                });
              },
              onPause: () => {
                Ne(this, gt, zt).call(this, { type: "pause" });
              },
              onContinue: () => {
                Ne(this, gt, zt).call(this, { type: "continue" });
              },
              retry: l.options.retry,
              retryDelay: l.options.retryDelay,
              networkMode: l.options.networkMode,
              canRun: () => !0,
            }),
          ),
          j(this, Re).start()
        );
      }
    }),
      (Vr = new WeakMap()),
      (qn = new WeakMap()),
      (nt = new WeakMap()),
      (Zn = new WeakMap()),
      (Re = new WeakMap()),
      (os = new WeakMap()),
      (Jn = new WeakMap()),
      (gt = new WeakSet()),
      (zt = function (t) {
        const n = (r) => {
          switch (t.type) {
            case "failed":
              return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error,
              };
            case "pause":
              return { ...r, fetchStatus: "paused" };
            case "continue":
              return { ...r, fetchStatus: "fetching" };
            case "fetch":
              return {
                ...r,
                ...Ty(r.data, this.options),
                fetchMeta: t.meta ?? null,

              };
            case "success":
              return (
                K(this, qn, void 0),
                {
                  ...r,
                  data: t.data,
                  dataUpdateCount: r.dataUpdateCount + 1,
                  dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                  error: null,
                  isInvalidated: !1,
                  status: "success",
                  ...(!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                  }),
                }
              );
            case "error":
              const o = t.error;
              return zl(o) && o.revert && j(this, qn)
                ? { ...j(this, qn), fetchStatus: "idle" }
                : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
            case "invalidate":
              return { ...r, isInvalidated: !0 };
            case "setState":
              return { ...r, ...t.state };
          }
        };
        ((this.state = n(this.state)),
          Ae.batch(() => {
            (this.observers.forEach((r) => {
              r.onQueryUpdate();
            }),
              j(this, nt).notify({ query: this, type: "updated", action: t }));
          }));
      }),
      Rf);
function Ty(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Jh(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function Ry(e) {
  const t =
    typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Tt,
  _f,
  _y =
    ((_f = class extends Gi {
      constructor(t = {}) {
        super();
        ee(this, Tt);
        ((this.config = t), K(this, Tt, new Map()));
      }
      build(t, n, r) {
        const o = n.queryKey,
          s = n.queryHash ?? ec(o, n);
        let i = this.get(s);
        return (
          i ||
          ((i = new Py({
            client: t,
            queryKey: o,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o),
          })),
            this.add(i)),
          i
        );
      }
      add(t) {
        j(this, Tt).has(t.queryHash) ||
          (j(this, Tt).set(t.queryHash, t),
            this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = j(this, Tt).get(t.queryHash);
        n &&
          (t.destroy(),
            n === t && j(this, Tt).delete(t.queryHash),
            this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ae.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return j(this, Tt).get(t);
      }
      getAll() {
        return [...j(this, Tt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Ld(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();

        return Object.keys(t).length > 0 ? n.filter((r) => Ld(t, r)) : n;
      }
      notify(t) {
        Ae.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Ae.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ae.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
      (Tt = new WeakMap()),
      _f),
  Rt,
  Oe,
  er,
  _t,
  dn,
  jf,
  jy =
    ((jf = class extends nm {
      constructor(t) {
        super();
        ee(this, _t);
        ee(this, Rt);
        ee(this, Oe);
        ee(this, er);
        ((this.mutationId = t.mutationId),
          K(this, Oe, t.mutationCache),
          K(this, Rt, []),
          (this.state = t.state || Oy()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        j(this, Rt).includes(t) ||
          (j(this, Rt).push(t),
            this.clearGcTimeout(),
            j(this, Oe).notify({
              type: "observerAdded",
              mutation: this,
              observer: t,
            }));
      }
      removeObserver(t) {
        (K(
          this,
          Rt,
          j(this, Rt).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          j(this, Oe).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        j(this, Rt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : j(this, Oe).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = j(this, er)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var s, i, l, a, u, d, c, h, f, S, y, x, m, p, v, E, b, k, P, A;
        const n = () => {
          Ne(this, _t, dn).call(this, { type: "continue" });
        };
        K(
          this,
          er,
          tm({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (B, O) => {
              Ne(this, _t, dn).call(this, {
                type: "failed",
                failureCount: B,
                error: O,
              });
            },
            onPause: () => {
              Ne(this, _t, dn).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => j(this, Oe).canRun(this),
          }),
        );
        const r = this.state.status === "pending",
          o = !j(this, er).canStart();
        try {
          if (r) n();
          else {
            (Ne(this, _t, dn).call(this, {
              type: "pending",
              variables: t,
              isPaused: o,
            }),
              await ((i = (s = j(this, Oe).config).onMutate) == null
                ? void 0
                : i.call(s, t, this)));
            const O = await ((a = (l = this.options).onMutate) == null
              ? void 0
              : a.call(l, t));
            O !== this.state.context &&
              Ne(this, _t, dn).call(this, {
                type: "pending",
                context: O,
                variables: t,
                isPaused: o,
              });
          }
          const B = await j(this, er).start();
          return (

            await ((d = (u = j(this, Oe).config).onSuccess) == null
              ? void 0
              : d.call(u, B, t, this.state.context, this)),
            await ((h = (c = this.options).onSuccess) == null
              ? void 0
              : h.call(c, B, t, this.state.context)),
            await ((S = (f = j(this, Oe).config).onSettled) == null
              ? void 0
              : S.call(
                f,
                B,
                null,
                this.state.variables,
                this.state.context,
                this,
              )),
            await ((x = (y = this.options).onSettled) == null
              ? void 0
              : x.call(y, B, null, t, this.state.context)),
            Ne(this, _t, dn).call(this, { type: "success", data: B }),
            B
          );
        } catch (B) {
          try {
            throw (
              await ((p = (m = j(this, Oe).config).onError) == null
                ? void 0
                : p.call(m, B, t, this.state.context, this)),
              await ((E = (v = this.options).onError) == null
                ? void 0
                : E.call(v, B, t, this.state.context)),
              await ((k = (b = j(this, Oe).config).onSettled) == null
                ? void 0
                : k.call(
                  b,
                  void 0,
                  B,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
              await ((A = (P = this.options).onSettled) == null
                ? void 0
                : A.call(P, void 0, B, t, this.state.context)),
              B
            );
          } finally {
            Ne(this, _t, dn).call(this, { type: "error", error: B });
          }
        } finally {
          j(this, Oe).runNext(this);
        }
      }
    }),
      (Rt = new WeakMap()),
      (Oe = new WeakMap()),
      (er = new WeakMap()),
      (_t = new WeakSet()),
      (dn = function (t) {
        const n = (r) => {
          switch (t.type) {
            case "failed":
              return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error,
              };
            case "pause":
              return { ...r, isPaused: !0 };
            case "continue":
              return { ...r, isPaused: !1 };
            case "pending":
              return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now(),
              };
            case "success":
              return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1,
              };
            case "error":
              return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error",
              };
          }
        };
        ((this.state = n(this.state)),
          Ae.batch(() => {
            (j(this, Rt).forEach((r) => {
              r.onMutationUpdate(t);
            }),
              j(this, Oe).notify({ mutation: this, type: "updated", action: t }));
          }));
      }),
      jf);
function Oy() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Ut,
  vt,
  ss,
  Of,
  My =
    ((Of = class extends Gi {

      constructor(t = {}) {
        super();
        ee(this, Ut);
        ee(this, vt);
        ee(this, ss);
        ((this.config = t),
          K(this, Ut, new Set()),
          K(this, vt, new Map()),
          K(this, ss, 0));
      }
      build(t, n, r) {
        const o = new jy({
          mutationCache: this,
          mutationId: ++vs(this, ss)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(o), o);
      }
      add(t) {
        j(this, Ut).add(t);
        const n = Ls(t);
        if (typeof n == "string") {
          const r = j(this, vt).get(n);
          r ? r.push(t) : j(this, vt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (j(this, Ut).delete(t)) {
          const n = Ls(t);
          if (typeof n == "string") {
            const r = j(this, vt).get(n);
            if (r)
              if (r.length > 1) {
                const o = r.indexOf(t);
                o !== -1 && r.splice(o, 1);
              } else r[0] === t && j(this, vt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = Ls(t);
        if (typeof n == "string") {
          const r = j(this, vt).get(n),
            o =
              r == null ? void 0 : r.find((s) => s.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = Ls(t);
        if (typeof n == "string") {
          const o =
            (r = j(this, vt).get(n)) == null
              ? void 0
              : r.find((s) => s !== t && s.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Ae.batch(() => {
          (j(this, Ut).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            j(this, Ut).clear(),
            j(this, vt).clear());
        });
      }
      getAll() {
        return Array.from(j(this, Ut));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Id(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Id(t, n));
      }
      notify(t) {
        Ae.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Ae.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(mt))),
        );
      }
    }),
      (Ut = new WeakMap()),
      (vt = new WeakMap()),
      (ss = new WeakMap()),
      Of);
function Ls(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function zd(e) {
  return {
    onFetch: (t, n) => {
      var d, c, h, f, S;
      const r = t.options,
        o =
          (h =
            (c = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : c.fetchMore) == null
            ? void 0
            : h.direction,
        s = ((f = t.state.data) == null ? void 0 : f.pages) || [],
        i = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        a = 0;
      const u = async () => {
        let y = !1;
        const x = (v) => {
          Object.defineProperty(v, "signal", {
            enumerable: !0,
            get: () => (
              t.signal.aborted
                ? (y = !0)
                : t.signal.addEventListener("abort", () => {
                  y = !0;
                }),
              t.signal
            ),
          });
        },
          m = qh(t.options, t.fetchOptions),
          p = async (v, E, b) => {
            if (y) return Promise.reject();

            if (E == null && v.pages.length) return Promise.resolve(v);
            const P = (() => {
              const L = {
                client: t.client,
                queryKey: t.queryKey,
                pageParam: E,
                direction: b ? "backward" : "forward",
                meta: t.options.meta,
              };
              return (x(L), L);
            })(),
              A = await m(P),
              { maxPages: B } = t.options,
              O = b ? wy : xy;
            return {
              pages: O(v.pages, A, B),
              pageParams: O(v.pageParams, E, B),
            };
          };
        if (o && s.length) {
          const v = o === "backward",
            E = v ? Ay : $d,
            b = { pages: s, pageParams: i },
            k = E(r, b);
          l = await p(b, k, v);
        } else {
          const v = e ?? s.length;
          do {
            const E = a === 0 ? (i[0] ?? r.initialPageParam) : $d(r, l);
            if (a > 0 && E == null) break;
            ((l = await p(l, E)), a++);
          } while (a < v);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
          var y, x;
          return (x = (y = t.options).persister) == null
            ? void 0
            : x.call(
              y,
              u,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              n,
            );
        })
        : (t.fetchFn = u);
    },
  };
}
function $d(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Ay(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var he,
  yn,
  xn,
  Hr,
  Qr,
  wn,
  Yr,
  Kr,
  Mf,
  Ly =
    ((Mf = class {
      constructor(e = {}) {
        ee(this, he);
        ee(this, yn);
        ee(this, xn);
        ee(this, Hr);
        ee(this, Qr);
        ee(this, wn);
        ee(this, Yr);
        ee(this, Kr);
        (K(this, he, e.queryCache || new _y()),
          K(this, yn, e.mutationCache || new My()),
          K(this, xn, e.defaultOptions || {}),
          K(this, Hr, new Map()),
          K(this, Qr, new Map()),
          K(this, wn, 0));
      }
      mount() {
        (vs(this, wn)._++,
          j(this, wn) === 1 &&
          (K(
            this,
            Yr,
            Zh.subscribe(async (e) => {
              e &&
                (await this.resumePausedMutations(), j(this, he).onFocus());
            }),
          ),
            K(
              this,
              Kr,
              Ni.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), j(this, he).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (vs(this, wn)._--,
          j(this, wn) === 0 &&
          ((e = j(this, Yr)) == null || e.call(this),
            K(this, Yr, void 0),
            (t = j(this, Kr)) == null || t.call(this),
            K(this, Kr, void 0)));
      }
      isFetching(e) {
        return j(this, he).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return j(this, yn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = j(this, he).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = j(this, he).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&

            n.isStaleByTime(Wa(t.staleTime, n)) &&
            this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return j(this, he)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = j(this, he).get(r.queryHash),
          s = o == null ? void 0 : o.state.data,
          i = py(t, s);
        if (i !== void 0)
          return j(this, he)
            .build(this, r)
            .setData(i, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Ae.batch(() =>
          j(this, he)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = j(this, he).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = j(this, he);
        Ae.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = j(this, he);
        return Ae.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = Ae.batch(() =>
            j(this, he)
              .findAll(e)
              .map((o) => o.cancel(n)),
          );
        return Promise.all(r).then(mt).catch(mt);
      }
      invalidateQueries(e, t = {}) {
        return Ae.batch(
          () => (
            j(this, he)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                {
                  ...e,
                  type:
                    (e == null ? void 0 : e.refetchType) ??
                    (e == null ? void 0 : e.type) ??
                    "active",
                },
                t,
              )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = Ae.batch(() =>
            j(this, he)
              .findAll(e)
              .filter((o) => !o.isDisabled() && !o.isStatic())
              .map((o) => {
                let s = o.fetch(void 0, n);
                return (
                  n.throwOnError || (s = s.catch(mt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : s
                );
              }),
          );
        return Promise.all(r).then(mt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = j(this, he).build(this, t);
        return n.isStaleByTime(Wa(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(mt).catch(mt);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = zd(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(mt).catch(mt);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = zd(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return Ni.isOnline()
          ? j(this, yn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return j(this, he);
      }
      getMutationCache() {
        return j(this, yn);
      }

      getDefaultOptions() {
        return j(this, xn);
      }
      setDefaultOptions(e) {
        K(this, xn, e);
      }
      setQueryDefaults(e, t) {
        j(this, Hr).set(es(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...j(this, Hr).values()],
          n = {};
        return (
          t.forEach((r) => {
            ts(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        j(this, Qr).set(es(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...j(this, Qr).values()],
          n = {};
        return (
          t.forEach((r) => {
            ts(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...j(this, xn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = ec(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === tc && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
            ...j(this, xn).mutations,
            ...((e == null ? void 0 : e.mutationKey) &&
              this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
      }
      clear() {
        (j(this, he).clear(), j(this, yn).clear());
      }
    }),
      (he = new WeakMap()),
      (yn = new WeakMap()),
      (xn = new WeakMap()),
      (Hr = new WeakMap()),
      (Qr = new WeakMap()),
      (wn = new WeakMap()),
      (Yr = new WeakMap()),
      (Kr = new WeakMap()),
      Mf),
  Iy = w.createContext(void 0),
  Dy = ({ client: e, children: t }) => (
    w.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    g.jsx(Iy.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Pi() {
  return (
    (Pi = Object.assign
      ? Object.assign.bind()
      : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Pi.apply(this, arguments)
  );
}
var bn;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(bn || (bn = {}));
const Bd = "popstate";
function Fy(e) {
  e === void 0 && (e = {});
  // Auto-detect base path from <base href> for GitHub Pages subdirectory deployment
  var _baseEl = document.querySelector('base');
  var _basename = '';
  if (_baseEl && typeof location !== 'undefined' && location.protocol !== 'file:') {
    try {
      var _basePath = new URL(_baseEl.href).pathname;
      _basename = _basePath === '/' ? '' : _basePath.replace(/\/$/, '');
    } catch (e) { _basename = ''; }
  }
  function t(r, o) {
    let { pathname: s, search: i, hash: l } = r.location;
    // When opened as file://, the pathname is the disk path — normalize to "/"
    if (typeof location !== 'undefined' && location.protocol === 'file:') {
      s = '/';
      i = '';
      l = '';
    }
    // Normalize /index.html to / so BrowserRouter routes match correctly
    if (s === '/index.html') {
      s = '/';
    }
    return Ha(
      _basename,
      { pathname: s, search: i, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : om(o);
  }
  return $y(t, n, null, e);
}
function Ve(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function rm(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch { }
  }
}
function zy() {
  return Math.random().toString(36).substr(2, 8);
}
function Ud(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ha(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Pi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? qi(t) : t,
      { state: n, key: (t && t.key) || r || zy() },
    )
  );
}
function om(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function qi(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function $y(e, t, n, r) {
  r === void 0 && (r = {});
  const _isFile = (typeof location !== 'undefined' && location.protocol === 'file:');
  let { window: o = document.defaultView, v5Compat: s = !1 } = r,
    i = o.history,
    l = bn.Pop,
    a = null,
    u = d();
  u == null && ((u = 0), _isFile ? null : i.replaceState(Pi({}, i.state, { idx: u }), ""));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function c() {
    l = bn.Pop;
    let x = d(),
      m = x == null ? null : x - u;
    ((u = x), a && a({ action: l, location: y.location, delta: m }));
  }
  function h(x, m) {
    l = bn.Push;
    let p = Ha(y.location, x, m);
    u = d() + 1;
    let v = Ud(p, u),
      E = y.createHref(p);
    if (_isFile) {
      s && a && a({ action: l, location: y.location, delta: 1 });
      return;
    }
    try {
      i.pushState(v, "", E);
    } catch (b) {
      if (b instanceof DOMException && b.name === "DataCloneError") throw b;
      o.location.assign(E);
    }
    s && a && a({ action: l, location: y.location, delta: 1 });
  }
  function f(x, m) {
    l = bn.Replace;
    let p = Ha(y.location, x, m);
    u = d();
    let v = Ud(p, u),
      E = y.createHref(p);
    if (!_isFile) i.replaceState(v, "", E);
    s && a && a({ action: l, location: y.location, delta: 0 });
  }
  function S(x) {
    let m = _isFile ? 'file:///' : (o.location.origin !== "null" ? o.location.origin : o.location.href),
      p = typeof x == "string" ? x : om(x);
    return (
      (p = p.replace(/ $/, "%20")),
      Ve(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
        p,
      ),
      new URL(p, m)
    );
  }
  let y = {
    get action() {
      return l;
    },
    get location() {
      return e(o, i);
    },
    listen(x) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Bd, c),
        (a = x),
        () => {
          (o.removeEventListener(Bd, c), (a = null));
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: S,
    encodeLocation(x) {
      let m = S(x);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: f,
    go(x) {
      return i.go(x);
    },
  };
  return y;
}
var Wd;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(Wd || (Wd = {}));
function By(e, t, n) {
  return (n === void 0 && (n = "/"), Uy(e, t, n, !1));
}
function Uy(e, t, n, r) {

  let o = typeof t == "string" ? qi(t) : t,
    s = lm(o.pathname || "/", n);
  if (s == null) return null;
  let i = sm(e);
  Wy(i);
  let l = null;
  for (let a = 0; l == null && a < i.length; ++a) {
    let u = ex(s);
    l = Zy(i[a], u, r);
  }
  return l;
}
function sm(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let o = (s, i, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: i,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (Ve(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
        a.relativePath +
        '" nested under path ' +
        ('"' + r + '" is not valid. An absolute child route path ') +
        "must start with the combined path of all its parent routes.",
      ),
        (a.relativePath = a.relativePath.slice(r.length)));
    let u = Fr([r, a.relativePath]),
      d = n.concat(a);
    (s.children &&
      s.children.length > 0 &&
      (Ve(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
        ('all child routes from route path "' + u + '".'),
      ),
        sm(s.children, t, d, u)),
      !(s.path == null && !s.index) &&
      t.push({ path: u, score: Xy(u, s.index), routesMeta: d }));
  };
  return (
    e.forEach((s, i) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) o(s, i);
      else for (let a of im(s.path)) o(s, i, a);
    }),
    t
  );
}
function im(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [s, ""] : [s];
  let i = im(r.join("/")),
    l = [];
  return (
    l.push(...i.map((a) => (a === "" ? s : [s, a].join("/")))),
    o && l.push(...i),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Wy(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : qy(
        t.routesMeta.map((r) => r.childrenIndex),
        n.routesMeta.map((r) => r.childrenIndex),
      ),
  );
}
const Vy = /^:[\w-]+$/,
  Hy = 3,
  Qy = 2,
  Yy = 1,
  Ky = 10,
  Gy = -2,
  Vd = (e) => e === "*";
function Xy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Vd) && (r += Gy),
    t && (r += Qy),
    n
      .filter((o) => !Vd(o))
      .reduce((o, s) => o + (Vy.test(s) ? Hy : s === "" ? Yy : Ky), r)
  );
}
function qy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Zy(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    s = "/",
    i = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      d = s === "/" ? t : t.slice(s.length) || "/",
      c = Hd(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        d,
      ),
      h = a.route;
    if (
      (!c &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (c = Hd(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          d,
        )),
        !c)
    )
      return null;
    (Object.assign(o, c.params),
      i.push({
        params: o,
        pathname: Fr([s, c.pathname]),
        pathnameBase: tx(Fr([s, c.pathnameBase])),
        route: h,
      }),
      c.pathnameBase !== "/" && (s = Fr([s, c.pathnameBase])));
  }
  return i;
}
function Hd(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Jy(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let s = o[0],
    i = s.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, d, c) => {
      let { paramName: h, isOptional: f } = d;

      if (h === "*") {
        let y = l[c] || "";
        i = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const S = l[c];
      return (
        f && !S ? (u[h] = void 0) : (u[h] = (S || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: s,
    pathnameBase: i,
    pattern: e,
  };
}
function Jy(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    rm(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
      e +
      '" will be treated as if it were ' +
      ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
      "always follow a `/` in the pattern. To get rid of this warning, " +
      ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function ex(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      rm(
        !1,
        'The URL path "' +
        e +
        '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
        ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function lm(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Fr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  tx = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function nx(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const am = ["post", "put", "patch", "delete"];
new Set(am);
const rx = ["get", ...am];
new Set(rx);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ti() {
  return (
    (Ti = Object.assign
      ? Object.assign.bind()
      : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ti.apply(this, arguments)
  );
}
const ox = w.createContext(null),
  sx = w.createContext(null),
  um = w.createContext(null),
  Zi = w.createContext(null),
  Ji = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  cm = w.createContext(null);
function nc() {
  return w.useContext(Zi) != null;
}
function dm() {
  return (nc() || Ve(!1), w.useContext(Zi).location);
}
function ix(e, t) {
  return lx(e, t);
}
function lx(e, t, n, r) {
  nc() || Ve(!1);
  let { navigator: o } = w.useContext(um),
    { matches: s } = w.useContext(Ji),
    i = s[s.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let u = dm(),
    d;
  if (t) {
    var c;
    let x = typeof t == "string" ? qi(t) : t;
    (a === "/" || ((c = x.pathname) != null && c.startsWith(a)) || Ve(!1),
      (d = x));
  } else d = u;
  let h = d.pathname || "/",
    f = h;

  if (a !== "/") {
    let x = a.replace(/^\//, "").split("/");
    f = "/" + h.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let S = By(e, { pathname: f }),
    y = fx(
      S &&
      S.map((x) =>
        Object.assign({}, x, {
          params: Object.assign({}, l, x.params),
          pathname: Fr([
            a,
            o.encodeLocation
              ? o.encodeLocation(x.pathname).pathname
              : x.pathname,
          ]),
          pathnameBase:
            x.pathnameBase === "/"
              ? a
              : Fr([
                a,
                o.encodeLocation
                  ? o.encodeLocation(x.pathnameBase).pathname
                  : x.pathnameBase,
              ]),
        }),
      ),
      s,
      n,
      r,
    );
  return t && y
    ? w.createElement(
      Zi.Provider,
      {
        value: {
          location: Ti(
            {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
            },
            d,
          ),
          navigationType: bn.Pop,
        },
      },
      y,
    )
    : y;
}
function ax() {
  let e = gx(),
    t = nx(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? w.createElement("pre", { style: o }, n) : null,
    null,
  );
}
const ux = w.createElement(ax, null);
class cx extends w.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
        error: t.error !== void 0 ? t.error : n.error,
        location: n.location,
        revalidation: t.revalidation || n.revalidation,
      };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? w.createElement(
        Ji.Provider,
        { value: this.props.routeContext },
        w.createElement(cm.Provider, {
          value: this.state.error,
          children: this.props.component,
        }),
      )
      : this.props.children;
  }
}
function dx(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = w.useContext(ox);
  return (
    o &&
    o.static &&
    o.staticContext &&
    (n.route.errorElement || n.route.ErrorBoundary) &&
    (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(Ji.Provider, { value: t }, r)
  );
}
function fx(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
      n === void 0 && (n = null),
      r === void 0 && (r = null),
      e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let d = i.findIndex(
      (c) => c.route.id && (l == null ? void 0 : l[c.route.id]) !== void 0,
    );
    (d >= 0 || Ve(!1), (i = i.slice(0, Math.min(i.length, d + 1))));
  }
  let a = !1,

    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < i.length; d++) {
      let c = i[d];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = d),
          c.route.id)
      ) {
        let { loaderData: h, errors: f } = n,
          S =
            c.route.loader &&
            h[c.route.id] === void 0 &&
            (!f || f[c.route.id] === void 0);
        if (c.route.lazy || S) {
          ((a = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]));
          break;
        }
      }
    }
  return i.reduceRight((d, c, h) => {
    let f,
      S = !1,
      y = null,
      x = null;
    n &&
      ((f = l && c.route.id ? l[c.route.id] : void 0),
        (y = c.route.errorElement || ux),
        a &&
        (u < 0 && h === 0
          ? ((S = !0), (x = null))
          : u === h &&
          ((S = !0), (x = c.route.hydrateFallbackElement || null))));
    let m = t.concat(i.slice(0, h + 1)),
      p = () => {
        let v;
        return (
          f
            ? (v = y)
            : S
              ? (v = x)
              : c.route.Component
                ? (v = w.createElement(c.route.Component, null))
                : c.route.element
                  ? (v = c.route.element)
                  : (v = d),
          w.createElement(dx, {
            match: c,
            routeContext: { outlet: d, matches: m, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || h === 0)
      ? w.createElement(cx, {
        location: n.location,
        revalidation: n.revalidation,
        component: y,
        error: f,
        children: p(),
        routeContext: { outlet: null, matches: m, isDataRoute: !0 },
      })
      : p();
  }, null);
}
var Qa = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Qa || {});
function px(e) {
  let t = w.useContext(sx);
  return (t || Ve(!1), t);
}
function hx(e) {
  let t = w.useContext(Ji);
  return (t || Ve(!1), t);
}
function mx(e) {
  let t = hx(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || Ve(!1), n.route.id);
}
function gx() {
  var e;
  let t = w.useContext(cm),
    n = px(Qa.UseRouteError),
    r = mx(Qa.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function vx(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function Ya(e) {
  Ve(!1);
}
function yx(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = bn.Pop,
    navigator: s,
    static: i = !1,
    future: l,
  } = e;
  nc() && Ve(!1);
  let a = t.replace(/^\/*/, "/"),
    u = w.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: i,
        future: Ti({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, s, i],
    );
  typeof r == "string" && (r = qi(r));
  let {
    pathname: d = "/",
    search: c = "",
    hash: h = "",
    state: f = null,
    key: S = "default",
  } = r,
    y = w.useMemo(() => {
      let x = lm(d, a);
      return x == null
        ? null
        : {
          location: { pathname: x, search: c, hash: h, state: f, key: S },
          navigationType: o,
        };
    }, [a, d, c, h, f, S, o]);
  return y == null
    ? null
    : w.createElement(
      um.Provider,
      { value: u },
      w.createElement(Zi.Provider, { children: n, value: y }),
    );
}
function xx(e) {

  let { children: t, location: n } = e;
  return ix(Ka(t), n);
}
new Promise(() => { });
function Ka(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, o) => {
      if (!w.isValidElement(r)) return;
      let s = [...t, o];
      if (r.type === w.Fragment) {
        n.push.apply(n, Ka(r.props.children, s));
        return;
      }
      (r.type !== Ya && Ve(!1), !r.props.index || !r.props.children || Ve(!1));
      let i = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (i.children = Ka(r.props.children, s)), n.push(i));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const wx = "6";
try {
  window.__reactRouterVersion = wx;
} catch { }
const Sx = "startTransition",
  Qd = Hf[Sx];
function Ex(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    s = w.useRef();
  s.current == null && (s.current = Fy({ window: o, v5Compat: !0 }));
  let i = s.current,
    [l, a] = w.useState({ action: i.action, location: i.location }),
    { v7_startTransition: u } = r || {},
    d = w.useCallback(
      (c) => {
        u && Qd ? Qd(() => a(c)) : a(c);
      },
      [a, u],
    );
  return (
    w.useLayoutEffect(() => i.listen(d), [i, d]),
    w.useEffect(() => vx(r), [r]),
    w.createElement(yx, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
      future: r,
    })
  );
}
var Yd;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(Yd || (Yd = {}));
var Kd;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Kd || (Kd = {}));
var Gd = ["light", "dark"],
  bx = "(prefers-color-scheme: dark)",
  Cx = w.createContext(void 0),
  kx = { setTheme: (e) => { }, themes: [] },
  Nx = () => {
    var e;
    return (e = w.useContext(Cx)) != null ? e : kx;
  };
w.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: s,
    value: i,
    attrs: l,
    nonce: a,
  }) => {
    let u = s === "system",
      d =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map((S) => `'${S}'`).join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      c = o
        ? Gd.includes(s) && s
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      h = (S, y = !1, x = !0) => {
        let m = i ? i[S] : S,
          p = y ? S + "|| ''" : `'${m}'`,
          v = "";
        return (
          o &&
          x &&
          !y &&
          Gd.includes(S) &&
          (v += `d.style.colorScheme = '${S}';`),
          n === "class"
            ? y || m
              ? (v += `c.add(${p})`)
              : (v += "null")
            : m && (v += `d[s](n,${p})`),
          v
        );
      },
      f = e

        ? `!function(){${d}${h(e)}}()`
        : r
          ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${bx}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${h(i ? "x[e]" : "e", !0)}}${u ? "" : "else{" + h(s, !1, !1) + "}"}${c}}catch(e){}}()`
          : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${h(i ? "x[e]" : "e", !0)}}else{${h(s, !1, !1)};}${c}}catch(t){}}();`;
    return w.createElement("script", {
      nonce: a,
      dangerouslySetInnerHTML: { __html: f },
    });
  },
);
var Px = (e) => {
  switch (e) {
    case "success":
      return _x;
    case "info":
      return Ox;
    case "warning":
      return jx;
    case "error":
      return Mx;
    default:
      return null;
  }
},
  Tx = Array(12).fill(0),
  Rx = ({ visible: e, className: t }) =>
    z.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      z.createElement(
        "div",
        { className: "sonner-spinner" },
        Tx.map((n, r) =>
          z.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          }),
        ),
      ),
    ),
  _x = z.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    z.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  jx = z.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    z.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  Ox = z.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    z.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  Mx = z.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    z.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  Ax = z.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    z.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    z.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  Lx = () => {
    let [e, t] = z.useState(document.hidden);
    return (
      z.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (

          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Ga = 1,
  Ix = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
                ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Ga++,
            s = this.toasts.find((l) => l.id === o),
            i = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            s
              ? (this.toasts = this.toasts.map((l) =>
                l.id === o
                  ? (this.publish({ ...l, ...e, id: o, title: n }),
                    { ...l, ...e, id: o, dismissible: i, title: n })
                  : l,
              ))
              : this.addToast({ title: n, ...r, dismissible: i, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
          this.toasts.forEach((t) => {
            this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
          }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            s,
            i = r
              .then(async (a) => {
                if (((s = ["resolve", a]), z.isValidElement(a)))
                  ((o = !1),
                    this.create({ id: n, type: "default", message: a }));
                else if (Fx(a) && !a.ok) {
                  o = !1;
                  let u =
                    typeof t.error == "function"
                      ? await t.error(`HTTP error! status: ${a.status}`)
                      : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${a.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: d,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let u =
                    typeof t.success == "function"
                      ? await t.success(a)
                      : t.success,
                    d =
                      typeof t.description == "function"
                        ? await t.description(a)

                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: d,
                  });
                }
              })
              .catch(async (a) => {
                if (((s = ["reject", a]), t.error !== void 0)) {
                  o = !1;
                  let u =
                    typeof t.error == "function" ? await t.error(a) : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: d,
                  });
                }
              })
              .finally(() => {
                var a;
                (o && (this.dismiss(n), (n = void 0)),
                  (a = t.finally) == null || a.call(t));
              }),
            l = () =>
              new Promise((a, u) =>
                i.then(() => (s[0] === "reject" ? u(s[1]) : a(s[1]))).catch(u),
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: l }
            : Object.assign(n, { unwrap: l });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Ga++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  Fe = new Ix(),
  Dx = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Ga++;
    return (Fe.addToast({ title: e, ...t, id: n }), n);
  },
  Fx = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  zx = Dx,
  $x = () => Fe.toasts,
  Bx = () => Fe.getActiveToasts();
Object.assign(
  zx,
  {
    success: Fe.success,
    info: Fe.info,
    warning: Fe.warning,
    error: Fe.error,
    custom: Fe.custom,
    message: Fe.message,
    promise: Fe.promise,
    dismiss: Fe.dismiss,
    loading: Fe.loading,
  },
  { getHistory: $x, getToasts: Bx },
);
function Ux(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  ((r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e)));
}

Ux(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}

`);
function Is(e) {
  return e.label !== void 0;
}
var Wx = 3,
  Vx = "32px",
  Hx = "16px",
  Xd = 4e3,
  Qx = 356,
  Yx = 14,
  Kx = 20,
  Gx = 200;
function pt(...e) {
  return e.filter(Boolean).join(" ");
}
function Xx(e) {
  let [t, n] = e.split("-"),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var qx = (e) => {
  var t, n, r, o, s, i, l, a, u, d, c;
  let {
    invert: h,
    toast: f,
    unstyled: S,
    interacting: y,
    setHeights: x,
    visibleToasts: m,
    heights: p,
    index: v,
    toasts: E,
    expanded: b,
    removeToast: k,
    defaultRichColors: P,
    closeButton: A,
    style: B,
    cancelButtonStyle: O,
    actionButtonStyle: L,
    className: C = "",
    descriptionClassName: $ = "",
    duration: N,
    position: W,
    gap: H,
    loadingIcon: Q,
    expandByDefault: T,
    classNames: R,
    icons: M,
    closeButtonAriaLabel: D = "Close toast",
    pauseWhenPageIsHidden: _,
  } = e,
    [F, U] = z.useState(null),
    [Z, te] = z.useState(null),
    [X, fr] = z.useState(!1),
    [en, Bn] = z.useState(!1),
    [tn, pr] = z.useState(!1),
    [nn, hs] = z.useState(!1),
    [al, ms] = z.useState(!1),
    [ul, co] = z.useState(0),
    [hr, xc] = z.useState(0),
    fo = z.useRef(f.duration || N || Xd),
    wc = z.useRef(null),
    Un = z.useRef(null),
    Og = v === 0,
    Mg = v + 1 <= m,
    et = f.type,
    mr = f.dismissible !== !1,
    Ag = f.className || "",
    Lg = f.descriptionClassName || "",
    gs = z.useMemo(
      () => p.findIndex((Y) => Y.toastId === f.id) || 0,
      [p, f.id],
    ),
    Ig = z.useMemo(() => {
      var Y;
      return (Y = f.closeButton) != null ? Y : A;
    }, [f.closeButton, A]),
    Sc = z.useMemo(() => f.duration || N || Xd, [f.duration, N]),
    cl = z.useRef(0),
    gr = z.useRef(0),
    Ec = z.useRef(0),
    vr = z.useRef(null),
    [Dg, Fg] = W.split("-"),
    bc = z.useMemo(
      () => p.reduce((Y, re, ue) => (ue >= gs ? Y : Y + re.height), 0),
      [p, gs],
    ),
    Cc = Lx(),
    zg = f.invert || h,
    dl = et === "loading";
  ((gr.current = z.useMemo(() => gs * H + bc, [gs, bc])),
    z.useEffect(() => {
      fo.current = Sc;
    }, [Sc]),
    z.useEffect(() => {
      fr(!0);
    }, []),
    z.useEffect(() => {
      let Y = Un.current;
      if (Y) {
        let re = Y.getBoundingClientRect().height;
        return (
          xc(re),
          x((ue) => [
            { toastId: f.id, height: re, position: f.position },
            ...ue,
          ]),
          () => x((ue) => ue.filter((ut) => ut.toastId !== f.id))
        );
      }
    }, [x, f.id]),
    z.useLayoutEffect(() => {
      if (!X) return;
      let Y = Un.current,
        re = Y.style.height;
      Y.style.height = "auto";
      let ue = Y.getBoundingClientRect().height;
      ((Y.style.height = re),
        xc(ue),
        x((ut) =>
          ut.find((ct) => ct.toastId === f.id)
            ? ut.map((ct) => (ct.toastId === f.id ? { ...ct, height: ue } : ct))
            : [{ toastId: f.id, height: ue, position: f.position }, ...ut],
        ));
    }, [X, f.title, f.description, x, f.id]));
  let rn = z.useCallback(() => {
    (Bn(!0),
      co(gr.current),
      x((Y) => Y.filter((re) => re.toastId !== f.id)),
      setTimeout(() => {
        k(f);
      }, Gx));
  }, [f, k, x, gr]);
  (z.useEffect(() => {
    if (
      (f.promise && et === "loading") ||
      f.duration === 1 / 0 ||
      f.type === "loading"
    )
      return;
    let Y;
    return (
      b || y || (_ && Cc)
        ? (() => {
          if (Ec.current < cl.current) {
            let re = new Date().getTime() - cl.current;
            fo.current = fo.current - re;
          }
          Ec.current = new Date().getTime();
        })()
        : fo.current !== 1 / 0 &&
        ((cl.current = new Date().getTime()),
          (Y = setTimeout(() => {
            var re;

            ((re = f.onAutoClose) == null || re.call(f, f), rn());
          }, fo.current))),
      () => clearTimeout(Y)
    );
  }, [b, y, f, et, _, Cc, rn]),
    z.useEffect(() => {
      f.delete && rn();
    }, [rn, f.delete]));
  function $g() {
    var Y, re, ue;
    return M != null && M.loading
      ? z.createElement(
        "div",
        {
          className: pt(
            R == null ? void 0 : R.loader,
            (Y = f == null ? void 0 : f.classNames) == null
              ? void 0
              : Y.loader,
            "sonner-loader",
          ),
          "data-visible": et === "loading",
        },
        M.loading,
      )
      : Q
        ? z.createElement(
          "div",
          {
            className: pt(
              R == null ? void 0 : R.loader,
              (re = f == null ? void 0 : f.classNames) == null
                ? void 0
                : re.loader,
              "sonner-loader",
            ),
            "data-visible": et === "loading",
          },
          Q,
        )
        : z.createElement(Rx, {
          className: pt(
            R == null ? void 0 : R.loader,
            (ue = f == null ? void 0 : f.classNames) == null
              ? void 0
              : ue.loader,
          ),
          visible: et === "loading",
        });
  }
  return z.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Un,
      className: pt(
        C,
        Ag,
        R == null ? void 0 : R.toast,
        (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast,
        R == null ? void 0 : R.default,
        R == null ? void 0 : R[et],
        (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[et],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = f.richColors) != null ? r : P,
      "data-styled": !(f.jsx || f.unstyled || S),
      "data-mounted": X,
      "data-promise": !!f.promise,
      "data-swiped": al,
      "data-removed": en,
      "data-visible": Mg,
      "data-y-position": Dg,
      "data-x-position": Fg,
      "data-index": v,
      "data-front": Og,
      "data-swiping": tn,
      "data-dismissible": mr,
      "data-type": et,
      "data-invert": zg,
      "data-swipe-out": nn,
      "data-swipe-direction": Z,
      "data-expanded": !!(b || (T && X)),
      style: {
        "--index": v,
        "--toasts-before": v,
        "--z-index": E.length - v,
        "--offset": `${en ? ul : gr.current}px`,
        "--initial-height": T ? "auto" : `${hr}px`,
        ...B,
        ...f.style,
      },
      onDragEnd: () => {
        (pr(!1), U(null), (vr.current = null));
      },
      onPointerDown: (Y) => {
        dl ||
          !mr ||
          ((wc.current = new Date()),
            co(gr.current),
            Y.target.setPointerCapture(Y.pointerId),
            Y.target.tagName !== "BUTTON" &&
            (pr(!0), (vr.current = { x: Y.clientX, y: Y.clientY })));
      },
      onPointerUp: () => {
        var Y, re, ue, ut;
        if (nn || !mr) return;
        vr.current = null;
        let ct = Number(
          ((Y = Un.current) == null
            ? void 0
            : Y.style
              .getPropertyValue("--swipe-amount-x")
              .replace("px", "")) || 0,
        ),
          on = Number(
            ((re = Un.current) == null
              ? void 0
              : re.style
                .getPropertyValue("--swipe-amount-y")
                .replace("px", "")) || 0,
          ),
          Wn =
            new Date().getTime() -
            ((ue = wc.current) == null ? void 0 : ue.getTime()),
          dt = F === "x" ? ct : on,
          sn = Math.abs(dt) / Wn;
        if (Math.abs(dt) >= Kx || sn > 0.11) {
          (co(gr.current),
            (ut = f.onDismiss) == null || ut.call(f, f),
            te(
              F === "x" ? (ct > 0 ? "right" : "left") : on > 0 ? "down" : "up",
            ),
            rn(),
            hs(!0),

            ms(!1));
          return;
        }
        (pr(!1), U(null));
      },
      onPointerMove: (Y) => {
        var re, ue, ut, ct;
        if (
          !vr.current ||
          !mr ||
          ((re = window.getSelection()) == null
            ? void 0
            : re.toString().length) > 0
        )
          return;
        let on = Y.clientY - vr.current.y,
          Wn = Y.clientX - vr.current.x,
          dt = (ue = e.swipeDirections) != null ? ue : Xx(W);
        !F &&
          (Math.abs(Wn) > 1 || Math.abs(on) > 1) &&
          U(Math.abs(Wn) > Math.abs(on) ? "x" : "y");
        let sn = { x: 0, y: 0 };
        (F === "y"
          ? (dt.includes("top") || dt.includes("bottom")) &&
          ((dt.includes("top") && on < 0) ||
            (dt.includes("bottom") && on > 0)) &&
          (sn.y = on)
          : F === "x" &&
          (dt.includes("left") || dt.includes("right")) &&
          ((dt.includes("left") && Wn < 0) ||
            (dt.includes("right") && Wn > 0)) &&
          (sn.x = Wn),
          (Math.abs(sn.x) > 0 || Math.abs(sn.y) > 0) && ms(!0),
          (ut = Un.current) == null ||
          ut.style.setProperty("--swipe-amount-x", `${sn.x}px`),
          (ct = Un.current) == null ||
          ct.style.setProperty("--swipe-amount-y", `${sn.y}px`));
      },
    },
    Ig && !f.jsx
      ? z.createElement(
        "button",
        {
          "aria-label": D,
          "data-disabled": dl,
          "data-close-button": !0,
          onClick:
            dl || !mr
              ? () => { }
              : () => {
                var Y;
                (rn(), (Y = f.onDismiss) == null || Y.call(f, f));
              },
          className: pt(
            R == null ? void 0 : R.closeButton,
            (o = f == null ? void 0 : f.classNames) == null
              ? void 0
              : o.closeButton,
          ),
        },
        (s = M == null ? void 0 : M.close) != null ? s : Ax,
      )
      : null,
    f.jsx || w.isValidElement(f.title)
      ? f.jsx
        ? f.jsx
        : typeof f.title == "function"
          ? f.title()
          : f.title
      : z.createElement(
        z.Fragment,
        null,
        et || f.icon || f.promise
          ? z.createElement(
            "div",
            {
              "data-icon": "",
              className: pt(
                R == null ? void 0 : R.icon,
                (i = f == null ? void 0 : f.classNames) == null
                  ? void 0
                  : i.icon,
              ),
            },
            f.promise || (f.type === "loading" && !f.icon)
              ? f.icon || $g()
              : null,
            f.type !== "loading"
              ? f.icon || (M == null ? void 0 : M[et]) || Px(et)
              : null,
          )
          : null,
        z.createElement(
          "div",
          {
            "data-content": "",
            className: pt(
              R == null ? void 0 : R.content,
              (l = f == null ? void 0 : f.classNames) == null
                ? void 0
                : l.content,
            ),
          },
          z.createElement(
            "div",
            {
              "data-title": "",
              className: pt(
                R == null ? void 0 : R.title,
                (a = f == null ? void 0 : f.classNames) == null
                  ? void 0
                  : a.title,
              ),
            },
            typeof f.title == "function" ? f.title() : f.title,
          ),
          f.description
            ? z.createElement(
              "div",
              {
                "data-description": "",
                className: pt(
                  $,
                  Lg,
                  R == null ? void 0 : R.description,
                  (u = f == null ? void 0 : f.classNames) == null
                    ? void 0
                    : u.description,
                ),
              },
              typeof f.description == "function"

                ? f.description()
                : f.description,
            )
            : null,
        ),
        w.isValidElement(f.cancel)
          ? f.cancel
          : f.cancel && Is(f.cancel)
            ? z.createElement(
              "button",
              {
                "data-button": !0,
                "data-cancel": !0,
                style: f.cancelButtonStyle || O,
                onClick: (Y) => {
                  var re, ue;
                  Is(f.cancel) &&
                    mr &&
                    ((ue = (re = f.cancel).onClick) == null ||
                      ue.call(re, Y),
                      rn());
                },
                className: pt(
                  R == null ? void 0 : R.cancelButton,
                  (d = f == null ? void 0 : f.classNames) == null
                    ? void 0
                    : d.cancelButton,
                ),
              },
              f.cancel.label,
            )
            : null,
        w.isValidElement(f.action)
          ? f.action
          : f.action && Is(f.action)
            ? z.createElement(
              "button",
              {
                "data-button": !0,
                "data-action": !0,
                style: f.actionButtonStyle || L,
                onClick: (Y) => {
                  var re, ue;
                  Is(f.action) &&
                    ((ue = (re = f.action).onClick) == null ||
                      ue.call(re, Y),
                      !Y.defaultPrevented && rn());
                },
                className: pt(
                  R == null ? void 0 : R.actionButton,
                  (c = f == null ? void 0 : f.classNames) == null
                    ? void 0
                    : c.actionButton,
                ),
              },
              f.action.label,
            )
            : null,
      ),
  );
};
function qd() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function Zx(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, o) => {
      let s = o === 1,
        i = s ? "--mobile-offset" : "--offset",
        l = s ? Hx : Vx;
      function a(u) {
        ["top", "right", "bottom", "left"].forEach((d) => {
          n[`${i}-${d}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? a(r)
        : typeof r == "object"
          ? ["top", "right", "bottom", "left"].forEach((u) => {
            r[u] === void 0
              ? (n[`${i}-${u}`] = l)
              : (n[`${i}-${u}`] =
                typeof r[u] == "number" ? `${r[u]}px` : r[u]);
          })
          : a(l);
    }),
    n
  );
}
var Jx = w.forwardRef(function (e, t) {
  let {
    invert: n,
    position: r = "bottom-right",
    hotkey: o = ["altKey", "KeyT"],
    expand: s,
    closeButton: i,
    className: l,
    offset: a,
    mobileOffset: u,
    theme: d = "light",
    richColors: c,
    duration: h,
    style: f,
    visibleToasts: S = Wx,
    toastOptions: y,
    dir: x = qd(),
    gap: m = Yx,
    loadingIcon: p,
    icons: v,
    containerAriaLabel: E = "Notifications",
    pauseWhenPageIsHidden: b,
  } = e,
    [k, P] = z.useState([]),
    A = z.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(k.filter((_) => _.position).map((_) => _.position)),
          ),
        ),
      [k, r],
    ),
    [B, O] = z.useState([]),
    [L, C] = z.useState(!1),
    [$, N] = z.useState(!1),
    [W, H] = z.useState(
      d !== "system"
        ? d
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    Q = z.useRef(null),

    T = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    R = z.useRef(null),
    M = z.useRef(!1),
    D = z.useCallback((_) => {
      P((F) => {
        var U;
        return (
          ((U = F.find((Z) => Z.id === _.id)) != null && U.delete) ||
          Fe.dismiss(_.id),
          F.filter(({ id: Z }) => Z !== _.id)
        );
      });
    }, []);
  return (
    z.useEffect(
      () =>
        Fe.subscribe((_) => {
          if (_.dismiss) {
            P((F) => F.map((U) => (U.id === _.id ? { ...U, delete: !0 } : U)));
            return;
          }
          setTimeout(() => {
            Kh.flushSync(() => {
              P((F) => {
                let U = F.findIndex((Z) => Z.id === _.id);
                return U !== -1
                  ? [...F.slice(0, U), { ...F[U], ..._ }, ...F.slice(U + 1)]
                  : [_, ...F];
              });
            });
          });
        }),
      [],
    ),
    z.useEffect(() => {
      if (d !== "system") {
        H(d);
        return;
      }
      if (
        (d === "system" &&
          (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
            ? H("dark")
            : H("light")),
          typeof window > "u")
      )
        return;
      let _ = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        _.addEventListener("change", ({ matches: F }) => {
          H(F ? "dark" : "light");
        });
      } catch {
        _.addListener(({ matches: U }) => {
          try {
            H(U ? "dark" : "light");
          } catch (Z) {
            console.error(Z);
          }
        });
      }
    }, [d]),
    z.useEffect(() => {
      k.length <= 1 && C(!1);
    }, [k]),
    z.useEffect(() => {
      let _ = (F) => {
        var U, Z;
        (o.every((te) => F[te] || F.code === te) &&
          (C(!0), (U = Q.current) == null || U.focus()),
          F.code === "Escape" &&
          (document.activeElement === Q.current ||
            ((Z = Q.current) != null &&
              Z.contains(document.activeElement))) &&
          C(!1));
      };
      return (
        document.addEventListener("keydown", _),
        () => document.removeEventListener("keydown", _)
      );
    }, [o]),
    z.useEffect(() => {
      if (Q.current)
        return () => {
          R.current &&
            (R.current.focus({ preventScroll: !0 }),
              (R.current = null),
              (M.current = !1));
        };
    }, [Q.current]),
    z.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${E} ${T}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      A.map((_, F) => {
        var U;
        let [Z, te] = _.split("-");
        return k.length
          ? z.createElement(
            "ol",
            {
              key: _,
              dir: x === "auto" ? qd() : x,
              tabIndex: -1,
              ref: Q,
              className: l,
              "data-sonner-toaster": !0,
              "data-theme": W,
              "data-y-position": Z,
              "data-lifted": L && k.length > 1 && !s,
              "data-x-position": te,
              style: {
                "--front-toast-height": `${((U = B[0]) == null ? void 0 : U.height) || 0}px`,
                "--width": `${Qx}px`,
                "--gap": `${m}px`,
                ...f,
                ...Zx(a, u),
              },
              onBlur: (X) => {
                M.current &&
                  !X.currentTarget.contains(X.relatedTarget) &&
                  ((M.current = !1),
                    R.current &&
                    (R.current.focus({ preventScroll: !0 }),
                      (R.current = null)));
              },
              onFocus: (X) => {
                (X.target instanceof HTMLElement &&

                  X.target.dataset.dismissible === "false") ||
                  M.current ||
                  ((M.current = !0), (R.current = X.relatedTarget));
              },
              onMouseEnter: () => C(!0),
              onMouseMove: () => C(!0),
              onMouseLeave: () => {
                $ || C(!1);
              },
              onDragEnd: () => C(!1),
              onPointerDown: (X) => {
                (X.target instanceof HTMLElement &&
                  X.target.dataset.dismissible === "false") ||
                  N(!0);
              },
              onPointerUp: () => N(!1),
            },
            k
              .filter((X) => (!X.position && F === 0) || X.position === _)
              .map((X, fr) => {
                var en, Bn;
                return z.createElement(qx, {
                  key: X.id,
                  icons: v,
                  index: fr,
                  toast: X,
                  defaultRichColors: c,
                  duration:
                    (en = y == null ? void 0 : y.duration) != null ? en : h,
                  className: y == null ? void 0 : y.className,
                  descriptionClassName:
                    y == null ? void 0 : y.descriptionClassName,
                  invert: n,
                  visibleToasts: S,
                  closeButton:
                    (Bn = y == null ? void 0 : y.closeButton) != null
                      ? Bn
                      : i,
                  interacting: $,
                  position: _,
                  style: y == null ? void 0 : y.style,
                  unstyled: y == null ? void 0 : y.unstyled,
                  classNames: y == null ? void 0 : y.classNames,
                  cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                  actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                  removeToast: D,
                  toasts: k.filter((tn) => tn.position == X.position),
                  heights: B.filter((tn) => tn.position == X.position),
                  setHeights: O,
                  expandByDefault: s,
                  gap: m,
                  loadingIcon: p,
                  expanded: L,
                  pauseWhenPageIsHidden: b,
                  swipeDirections: e.swipeDirections,
                });
              }),
          )
          : null;
      }),
    )
  );
});
const ew = ({ ...e }) => {
  const { theme: t = "system" } = Nx();
  return g.jsx(Jx, {
    theme: t,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...e,
  });
},
  tw = 1,
  nw = 1e6;
let $l = 0;
function rw() {
  return (($l = ($l + 1) % Number.MAX_SAFE_INTEGER), $l.toString());
}
const Bl = new Map(),
  Zd = (e) => {
    if (Bl.has(e)) return;
    const t = setTimeout(() => {
      (Bl.delete(e), Io({ type: "REMOVE_TOAST", toastId: e }));
    }, nw);
    Bl.set(e, t);
  },
  ow = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, tw) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Zd(n)
            : e.toasts.forEach((r) => {
              Zd(r.id);
            }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),

          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  Js = [];
let ei = { toasts: [] };
function Io(e) {
  ((ei = ow(ei, e)),
    Js.forEach((t) => {
      t(ei);
    }));
}
function sw({ ...e }) {
  const t = rw(),
    n = (o) => Io({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => Io({ type: "DISMISS_TOAST", toastId: t });
  return (
    Io({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function iw() {
  const [e, t] = w.useState(ei);
  return (
    w.useEffect(
      () => (
        Js.push(t),
        () => {
          const n = Js.indexOf(t);
          n > -1 && Js.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: sw,
      dismiss: (n) => Io({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function xe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Jd(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function fm(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Jd(o, t);
      return (!n && typeof s == "function" && (n = !0), s);
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Jd(e[o], null);
        }
      };
  };
}
function bt(...e) {
  return w.useCallback(fm(...e), e);
}
function el(e, t = []) {
  let n = [];
  function r(s, i) {
    const l = w.createContext(i),
      a = n.length;
    n = [...n, i];
    const u = (c) => {
      var m;
      const { scope: h, children: f, ...S } = c,
        y = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[a]) || l,
        x = w.useMemo(() => S, Object.values(S));
      return g.jsx(y.Provider, { value: x, children: f });
    };
    u.displayName = s + "Provider";
    function d(c, h) {
      var y;
      const f = ((y = h == null ? void 0 : h[e]) == null ? void 0 : y[a]) || l,
        S = w.useContext(f);
      if (S) return S;
      if (i !== void 0) return i;
      throw new Error(`\`${c}\` must be used within \`${s}\``);
    }
    return [u, d];
  }
  const o = () => {
    const s = n.map((i) => w.createContext(i));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || s;
      return w.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return ((o.scopeName = e), [r, lw(o, ...t)]);
}
function lw(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((l, { useScope: a, scopeName: u }) => {
        const c = a(s)[`__scope${u}`];
        return { ...l, ...c };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function Xa(e) {
  const t = aw(e),
    n = w.forwardRef((r, o) => {
      const { children: s, ...i } = r,
        l = w.Children.toArray(s),
        a = l.find(cw);
      if (a) {
        const u = a.props.children,
          d = l.map((c) =>
            c === a
              ? w.Children.count(u) > 1
                ? w.Children.only(null)
                : w.isValidElement(u)
                  ? u.props.children
                  : null
              : c,
          );
        return g.jsx(t, {
          ...i,
          ref: o,

          children: w.isValidElement(u) ? w.cloneElement(u, void 0, d) : null,
        });
      }
      return g.jsx(t, { ...i, ref: o, children: s });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function aw(e) {
  const t = w.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (w.isValidElement(o)) {
      const i = fw(o),
        l = dw(s, o.props);
      return (
        o.type !== w.Fragment && (l.ref = r ? fm(r, i) : i),
        w.cloneElement(o, l)
      );
    }
    return w.Children.count(o) > 1 ? w.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var pm = Symbol("radix.slottable");
function uw(e) {
  const t = ({ children: n }) => g.jsx(g.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = pm), t);
}
function cw(e) {
  return (
    w.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === pm
  );
}
function dw(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...l) => {
          const a = s(...l);
          return (o(...l), a);
        })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...s })
        : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function fw(e) {
  var r, o;
  let t =
    (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
      ? void 0
      : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
      (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
        ? void 0
        : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function pw(e) {
  const t = e + "CollectionProvider",
    [n, r] = el(t),
    [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (y) => {
      const { scope: x, children: m } = y,
        p = z.useRef(null),
        v = z.useRef(new Map()).current;
      return g.jsx(o, { scope: x, itemMap: v, collectionRef: p, children: m });
    };
  i.displayName = t;
  const l = e + "CollectionSlot",
    a = Xa(l),
    u = z.forwardRef((y, x) => {
      const { scope: m, children: p } = y,
        v = s(l, m),
        E = bt(x, v.collectionRef);
      return g.jsx(a, { ref: E, children: p });
    });
  u.displayName = l;
  const d = e + "CollectionItemSlot",
    c = "data-radix-collection-item",
    h = Xa(d),
    f = z.forwardRef((y, x) => {
      const { scope: m, children: p, ...v } = y,
        E = z.useRef(null),
        b = bt(x, E),
        k = s(d, m);
      return (
        z.useEffect(
          () => (
            k.itemMap.set(E, { ref: E, ...v }),
            () => void k.itemMap.delete(E)
          ),
        ),
        g.jsx(h, { [c]: "", ref: b, children: p })
      );
    });
  f.displayName = d;
  function S(y) {
    const x = s(e + "CollectionConsumer", y);
    return z.useCallback(() => {
      const p = x.collectionRef.current;
      if (!p) return [];
      const v = Array.from(p.querySelectorAll(`[${c}]`));
      return Array.from(x.itemMap.values()).sort(
        (k, P) => v.indexOf(k.ref.current) - v.indexOf(P.ref.current),
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: i, Slot: u, ItemSlot: f }, S, r];
}
var hw = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul",
],
  He = hw.reduce((e, t) => {
    const n = Xa(`Primitive.${t}`),
      r = w.forwardRef((o, s) => {
        const { asChild: i, ...l } = o,
          a = i ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          g.jsx(a, { ...l, ref: s })

        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function hm(e, t) {
  e && ds.flushSync(() => e.dispatchEvent(t));
}
function An(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      t.current = e;
    }),
    w.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function mw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = An(e);
  w.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var gw = "DismissableLayer",
  qa = "dismissableLayer.update",
  vw = "dismissableLayer.pointerDownOutside",
  yw = "dismissableLayer.focusOutside",
  ef,
  mm = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  rc = w.forwardRef((e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: l,
      ...a
    } = e,
      u = w.useContext(mm),
      [d, c] = w.useState(null),
      h =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, f] = w.useState({}),
      S = bt(t, (P) => c(P)),
      y = Array.from(u.layers),
      [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = y.indexOf(x),
      p = d ? y.indexOf(d) : -1,
      v = u.layersWithOutsidePointerEventsDisabled.size > 0,
      E = p >= m,
      b = ww((P) => {
        const A = P.target,
          B = [...u.branches].some((O) => O.contains(A));
        !E ||
          B ||
          (o == null || o(P),
            i == null || i(P),
            P.defaultPrevented || l == null || l());
      }, h),
      k = Sw((P) => {
        const A = P.target;
        [...u.branches].some((O) => O.contains(A)) ||
          (s == null || s(P),
            i == null || i(P),
            P.defaultPrevented || l == null || l());
      }, h);
    return (
      mw((P) => {
        p === u.layers.size - 1 &&
          (r == null || r(P),
            !P.defaultPrevented && l && (P.preventDefault(), l()));
      }, h),
      w.useEffect(() => {
        if (d)
          return (
            n &&
            (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
              ((ef = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            tf(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = ef);
            }
          );
      }, [d, h, n, u]),
      w.useEffect(
        () => () => {
          d &&
            (u.layers.delete(d),
              u.layersWithOutsidePointerEventsDisabled.delete(d),
              tf());
        },
        [d, u],
      ),
      w.useEffect(() => {
        const P = () => f({});
        return (
          document.addEventListener(qa, P),
          () => document.removeEventListener(qa, P)
        );
      }, []),
      g.jsx(He.div, {
        ...a,
        ref: S,
        style: {
          pointerEvents: v ? (E ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: xe(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: xe(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: xe(
          e.onPointerDownCapture,
          b.onPointerDownCapture,
        ),
      })
    );
  });
rc.displayName = gw;
var xw = "DismissableLayerBranch",

  gm = w.forwardRef((e, t) => {
    const n = w.useContext(mm),
      r = w.useRef(null),
      o = bt(t, r);
    return (
      w.useEffect(() => {
        const s = r.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      g.jsx(He.div, { ...e, ref: o })
    );
  });
gm.displayName = xw;
function ww(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = An(e),
    r = w.useRef(!1),
    o = w.useRef(() => { });
  return (
    w.useEffect(() => {
      const s = (l) => {
        if (l.target && !r.current) {
          let a = function () {
            vm(vw, n, u, { discrete: !0 });
          };
          const u = { originalEvent: l };
          l.pointerType === "touch"
            ? (t.removeEventListener("click", o.current),
              (o.current = a),
              t.addEventListener("click", o.current, { once: !0 }))
            : a();
        } else t.removeEventListener("click", o.current);
        r.current = !1;
      },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        (window.clearTimeout(i),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", o.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Sw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = An(e),
    r = w.useRef(!1);
  return (
    w.useEffect(() => {
      const o = (s) => {
        s.target &&
          !r.current &&
          vm(yw, n, { originalEvent: s }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function tf() {
  const e = new CustomEvent(qa);
  document.dispatchEvent(e);
}
function vm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? hm(o, s) : o.dispatchEvent(s));
}
var Ew = rc,
  bw = gm,
  Ln = globalThis != null && globalThis.document ? w.useLayoutEffect : () => { },
  Cw = "Portal",
  ym = w.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, s] = w.useState(!1);
    Ln(() => s(!0), []);
    const i =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return i ? Kh.createPortal(g.jsx(He.div, { ...r, ref: t }), i) : null;
  });
ym.displayName = Cw;
function kw(e, t) {
  return w.useReducer((n, r) => t[n][r] ?? n, e);
}
var oc = (e) => {
  const { present: t, children: n } = e,
    r = Nw(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : w.Children.only(n),
    s = bt(r.ref, Pw(o));
  return typeof n == "function" || r.isPresent
    ? w.cloneElement(o, { ref: s })
    : null;
};
oc.displayName = "Presence";
function Nw(e) {
  const [t, n] = w.useState(),
    r = w.useRef(null),
    o = w.useRef(e),
    s = w.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [l, a] = kw(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const u = Ds(r.current);
      s.current = l === "mounted" ? u : "none";
    }, [l]),
    Ln(() => {
      const u = r.current,
        d = o.current;
      if (d !== e) {
        const h = s.current,
          f = Ds(u);
        (e
          ? a("MOUNT")
          : f === "none" || (u == null ? void 0 : u.display) === "none"

            ? a("UNMOUNT")
            : a(d && h !== f ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e));
      }
    }, [e, a]),
    Ln(() => {
      if (t) {
        let u;
        const d = t.ownerDocument.defaultView ?? window,
          c = (f) => {
            const y = Ds(r.current).includes(f.animationName);
            if (f.target === t && y && (a("ANIMATION_END"), !o.current)) {
              const x = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (u = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = x);
                })));
            }
          },
          h = (f) => {
            f.target === t && (s.current = Ds(r.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", c),
          t.addEventListener("animationend", c),
          () => {
            (d.clearTimeout(u),
              t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", c),
              t.removeEventListener("animationend", c));
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: w.useCallback((u) => {
        ((r.current = u ? getComputedStyle(u) : null), n(u));
      }, []),
    }
  );
}
function Ds(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Pw(e) {
  var r, o;
  let t =
    (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
      ? void 0
      : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
      (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
        ? void 0
        : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Tw = Hf[" useInsertionEffect ".trim().toString()] || Ln;
function Rw({ prop: e, defaultProp: t, onChange: n = () => { }, caller: r }) {
  const [o, s, i] = _w({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    a = l ? e : o;
  {
    const d = w.useRef(e !== void 0);
    w.useEffect(() => {
      const c = d.current;
      (c !== l &&
        console.warn(
          `${r} is changing from ${c ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (d.current = l));
    }, [l, r]);
  }
  const u = w.useCallback(
    (d) => {
      var c;
      if (l) {
        const h = jw(d) ? d(e) : d;
        h !== e && ((c = i.current) == null || c.call(i, h));
      } else s(d);
    },
    [l, e, s, i],
  );
  return [a, u];
}
function _w({ defaultProp: e, onChange: t }) {
  const [n, r] = w.useState(e),
    o = w.useRef(n),
    s = w.useRef(t);
  return (
    Tw(() => {
      s.current = t;
    }, [t]),
    w.useEffect(() => {
      var i;
      o.current !== n &&
        ((i = s.current) == null || i.call(s, n), (o.current = n));
    }, [n, o]),
    [n, r, s]
  );
}
function jw(e) {
  return typeof e == "function";
}
var Ow = Object.freeze({
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal",
}),
  Mw = "VisuallyHidden",
  tl = w.forwardRef((e, t) =>
    g.jsx(He.span, { ...e, ref: t, style: { ...Ow, ...e.style } }),
  );
tl.displayName = Mw;
var Aw = tl,
  sc = "ToastProvider",
  [ic, Lw, Iw] = pw("Toast"),
  [xm, lb] = el("Toast", [Iw]),
  [Dw, nl] = xm(sc),
  wm = (e) => {
    const {
      __scopeToast: t,
      label: n = "Notification",
      duration: r = 5e3,

      swipeDirection: o = "right",
      swipeThreshold: s = 50,
      children: i,
    } = e,
      [l, a] = w.useState(null),
      [u, d] = w.useState(0),
      c = w.useRef(!1),
      h = w.useRef(!1);
    return (
      n.trim() ||
      console.error(
        `Invalid prop \`label\` supplied to \`${sc}\`. Expected non-empty \`string\`.`,
      ),
      g.jsx(ic.Provider, {
        scope: t,
        children: g.jsx(Dw, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: s,
          toastCount: u,
          viewport: l,
          onViewportChange: a,
          onToastAdd: w.useCallback(() => d((f) => f + 1), []),
          onToastRemove: w.useCallback(() => d((f) => f - 1), []),
          isFocusedToastEscapeKeyDownRef: c,
          isClosePausedRef: h,
          children: i,
        }),
      })
    );
  };
wm.displayName = sc;
var Sm = "ToastViewport",
  Fw = ["F8"],
  Za = "toast.viewportPause",
  Ja = "toast.viewportResume",
  Em = w.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = Fw,
      label: o = "Notifications ({hotkey})",
      ...s
    } = e,
      i = nl(Sm, n),
      l = Lw(n),
      a = w.useRef(null),
      u = w.useRef(null),
      d = w.useRef(null),
      c = w.useRef(null),
      h = bt(t, c, i.onViewportChange),
      f = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      S = i.toastCount > 0;
    (w.useEffect(() => {
      const x = (m) => {
        var v;
        r.length !== 0 &&
          r.every((E) => m[E] || m.code === E) &&
          ((v = c.current) == null || v.focus());
      };
      return (
        document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
      );
    }, [r]),
      w.useEffect(() => {
        const x = a.current,
          m = c.current;
        if (S && x && m) {
          const p = () => {
            if (!i.isClosePausedRef.current) {
              const k = new CustomEvent(Za);
              (m.dispatchEvent(k), (i.isClosePausedRef.current = !0));
            }
          },
            v = () => {
              if (i.isClosePausedRef.current) {
                const k = new CustomEvent(Ja);
                (m.dispatchEvent(k), (i.isClosePausedRef.current = !1));
              }
            },
            E = (k) => {
              !x.contains(k.relatedTarget) && v();
            },
            b = () => {
              x.contains(document.activeElement) || v();
            };
          return (
            x.addEventListener("focusin", p),
            x.addEventListener("focusout", E),
            x.addEventListener("pointermove", p),
            x.addEventListener("pointerleave", b),
            window.addEventListener("blur", p),
            window.addEventListener("focus", v),
            () => {
              (x.removeEventListener("focusin", p),
                x.removeEventListener("focusout", E),
                x.removeEventListener("pointermove", p),
                x.removeEventListener("pointerleave", b),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", v));
            }
          );
        }
      }, [S, i.isClosePausedRef]));
    const y = w.useCallback(
      ({ tabbingDirection: x }) => {
        const p = l().map((v) => {
          const E = v.ref.current,
            b = [E, ...qw(E)];
          return x === "forwards" ? b : b.reverse();
        });
        return (x === "forwards" ? p.reverse() : p).flat();
      },
      [l],
    );
    return (
      w.useEffect(() => {
        const x = c.current;
        if (x) {
          const m = (p) => {
            var b, k, P;
            const v = p.altKey || p.ctrlKey || p.metaKey;
            if (p.key === "Tab" && !v) {
              const A = document.activeElement,
                B = p.shiftKey;
              if (p.target === x && B) {

                (b = u.current) == null || b.focus();
                return;
              }
              const C = y({ tabbingDirection: B ? "backwards" : "forwards" }),
                $ = C.findIndex((N) => N === A);
              Ul(C.slice($ + 1))
                ? p.preventDefault()
                : B
                  ? (k = u.current) == null || k.focus()
                  : (P = d.current) == null || P.focus();
            }
          };
          return (
            x.addEventListener("keydown", m),
            () => x.removeEventListener("keydown", m)
          );
        }
      }, [l, y]),
      g.jsxs(bw, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", f),
        tabIndex: -1,
        style: { pointerEvents: S ? void 0 : "none" },
        children: [
          S &&
          g.jsx(eu, {
            ref: u,
            onFocusFromOutsideViewport: () => {
              const x = y({ tabbingDirection: "forwards" });
              Ul(x);
            },
          }),
          g.jsx(ic.Slot, {
            scope: n,
            children: g.jsx(He.ol, { tabIndex: -1, ...s, ref: h }),
          }),
          S &&
          g.jsx(eu, {
            ref: d,
            onFocusFromOutsideViewport: () => {
              const x = y({ tabbingDirection: "backwards" });
              Ul(x);
            },
          }),
        ],
      })
    );
  });
Em.displayName = Sm;
var bm = "ToastFocusProxy",
  eu = w.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      s = nl(bm, n);
    return g.jsx(tl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (i) => {
        var u;
        const l = i.relatedTarget;
        !((u = s.viewport) != null && u.contains(l)) && r();
      },
    });
  });
eu.displayName = bm;
var fs = "Toast",
  zw = "toast.swipeStart",
  $w = "toast.swipeMove",
  Bw = "toast.swipeCancel",
  Uw = "toast.swipeEnd",
  Cm = w.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i } = e,
      [l, a] = Rw({ prop: r, defaultProp: o ?? !0, onChange: s, caller: fs });
    return g.jsx(oc, {
      present: n || l,
      children: g.jsx(Hw, {
        open: l,
        ...i,
        ref: t,
        onClose: () => a(!1),
        onPause: An(e.onPause),
        onResume: An(e.onResume),
        onSwipeStart: xe(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: xe(e.onSwipeMove, (u) => {
          const { x: d, y: c } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${c}px`,
            ));
        }),
        onSwipeCancel: xe(e.onSwipeCancel, (u) => {
          (u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: xe(e.onSwipeEnd, (u) => {
          const { x: d, y: c } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${c}px`,
            ),

            a(!1));
        }),
      }),
    });
  });
Cm.displayName = fs;
var [Ww, Vw] = xm(fs, { onClose() { } }),
  Hw = w.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: o,
      open: s,
      onClose: i,
      onEscapeKeyDown: l,
      onPause: a,
      onResume: u,
      onSwipeStart: d,
      onSwipeMove: c,
      onSwipeCancel: h,
      onSwipeEnd: f,
      ...S
    } = e,
      y = nl(fs, n),
      [x, m] = w.useState(null),
      p = bt(t, (N) => m(N)),
      v = w.useRef(null),
      E = w.useRef(null),
      b = o || y.duration,
      k = w.useRef(0),
      P = w.useRef(b),
      A = w.useRef(0),
      { onToastAdd: B, onToastRemove: O } = y,
      L = An(() => {
        var W;
        ((x == null ? void 0 : x.contains(document.activeElement)) &&
          ((W = y.viewport) == null || W.focus()),
          i());
      }),
      C = w.useCallback(
        (N) => {
          !N ||
            N === 1 / 0 ||
            (window.clearTimeout(A.current),
              (k.current = new Date().getTime()),
              (A.current = window.setTimeout(L, N)));
        },
        [L],
      );
    (w.useEffect(() => {
      const N = y.viewport;
      if (N) {
        const W = () => {
          (C(P.current), u == null || u());
        },
          H = () => {
            const Q = new Date().getTime() - k.current;
            ((P.current = P.current - Q),
              window.clearTimeout(A.current),
              a == null || a());
          };
        return (
          N.addEventListener(Za, H),
          N.addEventListener(Ja, W),
          () => {
            (N.removeEventListener(Za, H), N.removeEventListener(Ja, W));
          }
        );
      }
    }, [y.viewport, b, a, u, C]),
      w.useEffect(() => {
        s && !y.isClosePausedRef.current && C(b);
      }, [s, b, y.isClosePausedRef, C]),
      w.useEffect(() => (B(), () => O()), [B, O]));
    const $ = w.useMemo(() => (x ? jm(x) : null), [x]);
    return y.viewport
      ? g.jsxs(g.Fragment, {
        children: [
          $ &&
          g.jsx(Qw, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: $,
          }),
          g.jsx(Ww, {
            scope: n,
            onClose: L,
            children: ds.createPortal(
              g.jsx(ic.ItemSlot, {
                scope: n,
                children: g.jsx(Ew, {
                  asChild: !0,
                  onEscapeKeyDown: xe(l, () => {
                    (y.isFocusedToastEscapeKeyDownRef.current || L(),
                      (y.isFocusedToastEscapeKeyDownRef.current = !1));
                  }),
                  children: g.jsx(He.li, {
                    role: "status",
                    "aria-live": "off",
                    "aria-atomic": !0,
                    tabIndex: 0,
                    "data-state": s ? "open" : "closed",
                    "data-swipe-direction": y.swipeDirection,
                    ...S,
                    ref: p,
                    style: {
                      userSelect: "none",
                      touchAction: "none",
                      ...e.style,
                    },
                    onKeyDown: xe(e.onKeyDown, (N) => {
                      N.key === "Escape" &&
                        (l == null || l(N.nativeEvent),
                          N.nativeEvent.defaultPrevented ||
                          ((y.isFocusedToastEscapeKeyDownRef.current = !0),
                            L()));
                    }),
                    onPointerDown: xe(e.onPointerDown, (N) => {
                      N.button === 0 &&
                        (v.current = { x: N.clientX, y: N.clientY });
                    }),
                    onPointerMove: xe(e.onPointerMove, (N) => {
                      if (!v.current) return;

                      const W = N.clientX - v.current.x,
                        H = N.clientY - v.current.y,
                        Q = !!E.current,
                        T = ["left", "right"].includes(y.swipeDirection),
                        R = ["left", "up"].includes(y.swipeDirection)
                          ? Math.min
                          : Math.max,
                        M = T ? R(0, W) : 0,
                        D = T ? 0 : R(0, H),
                        _ = N.pointerType === "touch" ? 10 : 2,
                        F = { x: M, y: D },
                        U = { originalEvent: N, delta: F };
                      Q
                        ? ((E.current = F), Fs($w, c, U, { discrete: !1 }))
                        : nf(F, y.swipeDirection, _)
                          ? ((E.current = F),
                            Fs(zw, d, U, { discrete: !1 }),
                            N.target.setPointerCapture(N.pointerId))
                          : (Math.abs(W) > _ || Math.abs(H) > _) &&
                          (v.current = null);
                    }),
                    onPointerUp: xe(e.onPointerUp, (N) => {
                      const W = E.current,
                        H = N.target;
                      if (
                        (H.hasPointerCapture(N.pointerId) &&
                          H.releasePointerCapture(N.pointerId),
                          (E.current = null),
                          (v.current = null),
                          W)
                      ) {
                        const Q = N.currentTarget,
                          T = { originalEvent: N, delta: W };
                        (nf(W, y.swipeDirection, y.swipeThreshold)
                          ? Fs(Uw, f, T, { discrete: !0 })
                          : Fs(Bw, h, T, { discrete: !0 }),
                          Q.addEventListener(
                            "click",
                            (R) => R.preventDefault(),
                            { once: !0 },
                          ));
                      }
                    }),
                  }),
                }),
              }),
              y.viewport,
            ),
          }),
        ],
      })
      : null;
  }),
  Qw = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = nl(fs, t),
      [s, i] = w.useState(!1),
      [l, a] = w.useState(!1);
    return (
      Gw(() => i(!0)),
      w.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : g.jsx(ym, {
          asChild: !0,
          children: g.jsx(tl, {
            ...r,
            children:
              s && g.jsxs(g.Fragment, { children: [o.label, " ", n] }),
          }),
        })
    );
  },
  Yw = "ToastTitle",
  km = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return g.jsx(He.div, { ...r, ref: t });
  });
km.displayName = Yw;
var Kw = "ToastDescription",
  Nm = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return g.jsx(He.div, { ...r, ref: t });
  });
Nm.displayName = Kw;
var Pm = "ToastAction",
  Tm = w.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? g.jsx(_m, {
        altText: n,
        asChild: !0,
        children: g.jsx(lc, { ...r, ref: t }),
      })
      : (console.error(
        `Invalid prop \`altText\` supplied to \`${Pm}\`. Expected non-empty \`string\`.`,
      ),
        null);
  });
Tm.displayName = Pm;
var Rm = "ToastClose",
  lc = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = Vw(Rm, n);
    return g.jsx(_m, {
      asChild: !0,
      children: g.jsx(He.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: xe(e.onClick, o.onClose),
      }),
    });
  });
lc.displayName = Rm;
var _m = w.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return g.jsx(He.div, {

    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function jm(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
          Xw(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          s = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (s) {
            const i = r.dataset.radixToastAnnounceAlt;
            i && t.push(i);
          } else t.push(...jm(r));
      }
    }),
    t
  );
}
function Fs(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? hm(o, s) : o.dispatchEvent(s));
}
var nf = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function Gw(e = () => { }) {
  const t = An(e);
  Ln(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
      }
    );
  }, [t]);
}
function Xw(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function qw(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
function Ul(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var Zw = wm,
  Om = Em,
  Mm = Cm,
  Am = km,
  Lm = Nm,
  Im = Tm,
  Dm = lc;
function Fm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Fm(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function zm() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Fm(e)) && (r && (r += " "), (r += t));
  return r;
}
const rf = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  of = zm,
  Jw = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return of(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: s } = t,
      i = Object.keys(o).map((u) => {
        const d = n == null ? void 0 : n[u],
          c = s == null ? void 0 : s[u];
        if (d === null) return null;
        const h = rf(d) || rf(c);
        return o[u][h];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, d) => {
          let [c, h] = d;
          return (h === void 0 || (u[c] = h), u);
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, d) => {
            let { class: c, className: h, ...f } = d;
            return Object.entries(f).every((S) => {
              let [y, x] = S;
              return Array.isArray(x)
                ? x.includes({ ...s, ...l }[y])
                : { ...s, ...l }[y] === x;
            })
              ? [...u, c, h]
              : u;
          }, []);
    return of(
      e,
      i,
      a,
      n == null ? void 0 : n.class,

      n == null ? void 0 : n.className,
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const e1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  $m = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var t1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const n1 = w.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: s,
      iconNode: i,
      ...l
    },
    a,
  ) =>
    w.createElement(
      "svg",
      {
        ref: a,
        ...t1,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: $m("lucide", o),
        ...l,
      },
      [
        ...i.map(([u, d]) => w.createElement(u, d)),
        ...(Array.isArray(s) ? s : [s]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jt = (e, t) => {
  const n = w.forwardRef(({ className: r, ...o }, s) =>
    w.createElement(n1, {
      ref: s,
      iconNode: t,
      className: $m(`lucide-${e1(e)}`, r),
      ...o,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const r1 = Jt("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const o1 = Jt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const s1 = Jt("Image", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const i1 = Jt("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const l1 = Jt("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bm = Jt("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [

    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const a1 = Jt("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Um = Jt("Trophy", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  [
    "path",
    {
      d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
      key: "1nw9bq",
    },
  ],
  [
    "path",
    {
      d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
      key: "1np0yb",
    },
  ],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const u1 = Jt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]),
  ac = "-",
  c1 = (e) => {
    const t = f1(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const l = i.split(ac);
        return (l[0] === "" && l.length !== 1 && l.shift(), Wm(l, t) || d1(i));
      },
      getConflictingClassGroupIds: (i, l) => {
        const a = n[i] || [];
        return l && r[i] ? [...a, ...r[i]] : a;
      },
    };
  },
  Wm = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Wm(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const s = e.join(ac);
    return (i = t.validators.find(({ validator: l }) => l(s))) == null
      ? void 0
      : i.classGroupId;
  },
  sf = /^\[(.+)\]$/,
  d1 = (e) => {
    if (sf.test(e)) {
      const t = sf.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  f1 = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      h1(Object.entries(e.classGroups), n).forEach(([s, i]) => {
        tu(i, r, s, t);
      }),
      r
    );
  },
  tu = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const s = o === "" ? t : lf(t, o);
        s.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (p1(o)) {
          tu(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([s, i]) => {
        tu(i, lf(t, s), n, r);
      });
    });
  },
  lf = (e, t) => {
    let n = e;
    return (
      t.split(ac).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  p1 = (e) => e.isThemeGetter,
  h1 = (e, t) =>
    t
      ? e.map(([n, r]) => {
        const o = r.map((s) =>
          typeof s == "string"
            ? t + s
            : typeof s == "object"
              ? Object.fromEntries(

                Object.entries(s).map(([i, l]) => [t + i, l]),
              )
              : s,
        );
        return [n, o];
      })
      : e,
  m1 = (e) => {
    if (e < 1) return { get: () => { }, set: () => { } };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (s, i) => {
      (n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(s) {
        let i = n.get(s);
        if (i !== void 0) return i;
        if ((i = r.get(s)) !== void 0) return (o(s, i), i);
      },
      set(s, i) {
        n.has(s) ? n.set(s, i) : o(s, i);
      },
    };
  },
  Vm = "!",
  g1 = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      s = t.length,
      i = (l) => {
        const a = [];
        let u = 0,
          d = 0,
          c;
        for (let x = 0; x < l.length; x++) {
          let m = l[x];
          if (u === 0) {
            if (m === o && (r || l.slice(x, x + s) === t)) {
              (a.push(l.slice(d, x)), (d = x + s));
              continue;
            }
            if (m === "/") {
              c = x;
              continue;
            }
          }
          m === "[" ? u++ : m === "]" && u--;
        }
        const h = a.length === 0 ? l : l.substring(d),
          f = h.startsWith(Vm),
          S = f ? h.substring(1) : h,
          y = c && c > d ? c - d : void 0;
        return {
          modifiers: a,
          hasImportantModifier: f,
          baseClassName: S,
          maybePostfixModifierPosition: y,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: i }) : i;
  },
  v1 = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  y1 = (e) => ({ cache: m1(e.cacheSize), parseClassName: g1(e), ...c1(e) }),
  x1 = /\s+/,
  w1 = (e, t) => {
    const {
      parseClassName: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: o,
    } = t,
      s = [],
      i = e.trim().split(x1);
    let l = "";
    for (let a = i.length - 1; a >= 0; a -= 1) {
      const u = i[a],
        {
          modifiers: d,
          hasImportantModifier: c,
          baseClassName: h,
          maybePostfixModifierPosition: f,
        } = n(u);
      let S = !!f,
        y = r(S ? h.substring(0, f) : h);
      if (!y) {
        if (!S) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((y = r(h)), !y)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        S = !1;
      }
      const x = v1(d).join(":"),
        m = c ? x + Vm : x,
        p = m + y;
      if (s.includes(p)) continue;
      s.push(p);
      const v = o(y, S);
      for (let E = 0; E < v.length; ++E) {
        const b = v[E];
        s.push(m + b);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function S1() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length;)
    (t = arguments[e++]) && (n = Hm(t)) && (r && (r += " "), (r += n));
  return r;
}
const Hm = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Hm(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function E1(e, ...t) {
  let n,
    r,
    o,
    s = i;
  function i(a) {
    const u = t.reduce((d, c) => c(d), e());
    return ((n = y1(u)), (r = n.cache.get), (o = n.cache.set), (s = l), l(a));
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const d = w1(a, n);
    return (o(a, d), d);
  }
  return function () {
    return s(S1.apply(null, arguments));
  };
}
const ie = (e) => {

  const t = (n) => n[e] || [];
  return ((t.isThemeGetter = !0), t);
},
  Qm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  b1 = /^\d+\/\d+$/,
  C1 = new Set(["px", "full", "screen"]),
  k1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  N1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  P1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  T1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  R1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ft = (e) => zr(e) || C1.has(e) || b1.test(e),
  an = (e) => lo(e, "length", D1),
  zr = (e) => !!e && !Number.isNaN(Number(e)),
  Wl = (e) => lo(e, "number", zr),
  So = (e) => !!e && Number.isInteger(Number(e)),
  _1 = (e) => e.endsWith("%") && zr(e.slice(0, -1)),
  G = (e) => Qm.test(e),
  un = (e) => k1.test(e),
  j1 = new Set(["length", "size", "percentage"]),
  O1 = (e) => lo(e, j1, Ym),
  M1 = (e) => lo(e, "position", Ym),
  A1 = new Set(["image", "url"]),
  L1 = (e) => lo(e, A1, z1),
  I1 = (e) => lo(e, "", F1),
  Eo = () => !0,
  lo = (e, t, n) => {
    const r = Qm.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  D1 = (e) => N1.test(e) && !P1.test(e),
  Ym = () => !1,
  F1 = (e) => T1.test(e),
  z1 = (e) => R1.test(e),
  $1 = () => {
    const e = ie("colors"),
      t = ie("spacing"),
      n = ie("blur"),
      r = ie("brightness"),
      o = ie("borderColor"),
      s = ie("borderRadius"),
      i = ie("borderSpacing"),
      l = ie("borderWidth"),
      a = ie("contrast"),
      u = ie("grayscale"),
      d = ie("hueRotate"),
      c = ie("invert"),
      h = ie("gap"),
      f = ie("gradientColorStops"),
      S = ie("gradientColorStopPositions"),
      y = ie("inset"),
      x = ie("margin"),
      m = ie("opacity"),
      p = ie("padding"),
      v = ie("saturate"),
      E = ie("scale"),
      b = ie("sepia"),
      k = ie("skew"),
      P = ie("space"),
      A = ie("translate"),
      B = () => ["auto", "contain", "none"],
      O = () => ["auto", "hidden", "clip", "visible", "scroll"],
      L = () => ["auto", G, t],
      C = () => [G, t],
      $ = () => ["", Ft, an],
      N = () => ["auto", zr, G],
      W = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      H = () => ["solid", "dashed", "dotted", "double", "none"],
      Q = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      T = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      R = () => ["", "0", G],
      M = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      D = () => [zr, G];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Eo],
        spacing: [Ft, an],
        blur: ["none", "", un, G],
        brightness: D(),
        borderColor: [e],
        borderRadius: ["none", "", "full", un, G],
        borderSpacing: C(),
        borderWidth: $(),
        contrast: D(),
        grayscale: R(),
        hueRotate: D(),
        invert: R(),
        gap: C(),
        gradientColorStops: [e],
        gradientColorStopPositions: [_1, an],
        inset: L(),
        margin: L(),
        opacity: D(),
        padding: C(),

        saturate: D(),
        scale: D(),
        sepia: R(),
        skew: D(),
        space: C(),
        translate: C(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", G] }],
        container: ["container"],
        columns: [{ columns: [un] }],
        "break-after": [{ "break-after": M() }],
        "break-before": [{ "break-before": M() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...W(), G] }],
        overflow: [{ overflow: O() }],
        "overflow-x": [{ "overflow-x": O() }],
        "overflow-y": [{ "overflow-y": O() }],
        overscroll: [{ overscroll: B() }],
        "overscroll-x": [{ "overscroll-x": B() }],
        "overscroll-y": [{ "overscroll-y": B() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [y] }],
        "inset-x": [{ "inset-x": [y] }],
        "inset-y": [{ "inset-y": [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", So, G] }],
        basis: [{ basis: L() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", G] }],
        grow: [{ grow: R() }],
        shrink: [{ shrink: R() }],
        order: [{ order: ["first", "last", "none", So, G] }],
        "grid-cols": [{ "grid-cols": [Eo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", So, G] }, G] }],
        "col-start": [{ "col-start": N() }],
        "col-end": [{ "col-end": N() }],
        "grid-rows": [{ "grid-rows": [Eo] }],
        "row-start-end": [{ row: ["auto", { span: [So, G] }, G] }],
        "row-start": [{ "row-start": N() }],
        "row-end": [{ "row-end": N() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", G] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", G] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...T()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...T(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],

        "place-content": [{ "place-content": [...T(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [p] }],
        px: [{ px: [p] }],
        py: [{ py: [p] }],
        ps: [{ ps: [p] }],
        pe: [{ pe: [p] }],
        pt: [{ pt: [p] }],
        pr: [{ pr: [p] }],
        pb: [{ pb: [p] }],
        pl: [{ pl: [p] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [P] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [P] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t] }],
        "min-w": [{ "min-w": [G, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              G,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [un] },
              un,
            ],
          },
        ],
        h: [{ h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [G, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", un, an] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Wl,
            ],
          },
        ],
        "font-family": [{ font: [Eo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              G,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", zr, Wl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Ft,
              G,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", G] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", G] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...H(), "wavy"] }],
        "text-decoration-thickness": [

          { decoration: ["auto", "from-font", Ft, an] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Ft, G] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: C() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              G,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", G] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...W(), M1] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", O1] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              L1,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [S] }],
        "gradient-via-pos": [{ via: [S] }],
        "gradient-to-pos": [{ to: [S] }],
        "gradient-from": [{ from: [f] }],
        "gradient-via": [{ via: [f] }],
        "gradient-to": [{ to: [f] }],
        rounded: [{ rounded: [s] }],
        "rounded-s": [{ "rounded-s": [s] }],
        "rounded-e": [{ "rounded-e": [s] }],
        "rounded-t": [{ "rounded-t": [s] }],
        "rounded-r": [{ "rounded-r": [s] }],
        "rounded-b": [{ "rounded-b": [s] }],
        "rounded-l": [{ "rounded-l": [s] }],
        "rounded-ss": [{ "rounded-ss": [s] }],
        "rounded-se": [{ "rounded-se": [s] }],
        "rounded-ee": [{ "rounded-ee": [s] }],
        "rounded-es": [{ "rounded-es": [s] }],
        "rounded-tl": [{ "rounded-tl": [s] }],
        "rounded-tr": [{ "rounded-tr": [s] }],
        "rounded-br": [{ "rounded-br": [s] }],
        "rounded-bl": [{ "rounded-bl": [s] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...H(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: H() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],

        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...H()] }],
        "outline-offset": [{ "outline-offset": [Ft, G] }],
        "outline-w": [{ outline: [Ft, an] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: $() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [Ft, an] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", un, I1] }],
        "shadow-color": [{ shadow: [Eo] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [{ "mix-blend": [...Q(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": Q() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", un, G] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [c] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [b] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [c] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [v] }],
        "backdrop-sepia": [{ "backdrop-sepia": [b] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              G,
            ],
          },
        ],
        duration: [{ duration: D() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", G] }],
        delay: [{ delay: D() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", G] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [E] }],
        "scale-x": [{ "scale-x": [E] }],
        "scale-y": [{ "scale-y": [E] }],
        rotate: [{ rotate: [So, G] }],
        "translate-x": [{ "translate-x": [A] }],
        "translate-y": [{ "translate-y": [A] }],
        "skew-x": [{ "skew-x": [k] }],
        "skew-y": [{ "skew-y": [k] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              G,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",

              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              G,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": C() }],
        "scroll-mx": [{ "scroll-mx": C() }],
        "scroll-my": [{ "scroll-my": C() }],
        "scroll-ms": [{ "scroll-ms": C() }],
        "scroll-me": [{ "scroll-me": C() }],
        "scroll-mt": [{ "scroll-mt": C() }],
        "scroll-mr": [{ "scroll-mr": C() }],
        "scroll-mb": [{ "scroll-mb": C() }],
        "scroll-ml": [{ "scroll-ml": C() }],
        "scroll-p": [{ "scroll-p": C() }],
        "scroll-px": [{ "scroll-px": C() }],
        "scroll-py": [{ "scroll-py": C() }],
        "scroll-ps": [{ "scroll-ps": C() }],
        "scroll-pe": [{ "scroll-pe": C() }],
        "scroll-pt": [{ "scroll-pt": C() }],
        "scroll-pr": [{ "scroll-pr": C() }],
        "scroll-pb": [{ "scroll-pb": C() }],
        "scroll-pl": [{ "scroll-pl": C() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", G] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Ft, an, Wl] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",

        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  B1 = E1($1);
function dr(...e) {
  return B1(zm(e));
}
const U1 = Zw,
  Km = w.forwardRef(({ className: e, ...t }, n) =>
    g.jsx(Om, {
      ref: n,
      className: dr(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
Km.displayName = Om.displayName;
const W1 = Jw(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
),
  Gm = w.forwardRef(({ className: e, variant: t, ...n }, r) =>
    g.jsx(Mm, { ref: r, className: dr(W1({ variant: t }), e), ...n }),
  );
Gm.displayName = Mm.displayName;
const V1 = w.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(Im, {
    ref: n,
    className: dr(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e,
    ),
    ...t,
  }),
);
V1.displayName = Im.displayName;
const Xm = w.forwardRef(({ className: e, ...t }, n) =>

  g.jsx(Dm, {
    ref: n,
    className: dr(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: g.jsx(u1, { className: "h-4 w-4" }),
  }),
);
Xm.displayName = Dm.displayName;
const qm = w.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(Am, { ref: n, className: dr("text-sm font-semibold", e), ...t }),
);
qm.displayName = Am.displayName;
const Zm = w.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(Lm, { ref: n, className: dr("text-sm opacity-90", e), ...t }),
);
Zm.displayName = Lm.displayName;
function H1() {
  const { toasts: e } = iw();
  return g.jsxs(U1, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...s }) {
        return g.jsxs(
          Gm,
          {
            ...s,
            children: [
              g.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && g.jsx(qm, { children: n }),
                  r && g.jsx(Zm, { children: r }),
                ],
              }),
              o,
              g.jsx(Xm, {}),
            ],
          },
          t,
        );
      }),
      g.jsx(Km, {}),
    ],
  });
}
const Q1 = ["top", "right", "bottom", "left"],
  In = Math.min,
  Ye = Math.max,
  Ri = Math.round,
  zs = Math.floor,
  Lt = (e) => ({ x: e, y: e }),
  Y1 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  K1 = { start: "end", end: "start" };
function nu(e, t, n) {
  return Ye(e, In(t, n));
}
function Xt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function qt(e) {
  return e.split("-")[0];
}
function ao(e) {
  return e.split("-")[1];
}
function uc(e) {
  return e === "x" ? "y" : "x";
}
function cc(e) {
  return e === "y" ? "height" : "width";
}
const G1 = new Set(["top", "bottom"]);
function Ot(e) {
  return G1.has(qt(e)) ? "y" : "x";
}
function dc(e) {
  return uc(Ot(e));
}
function X1(e, t, n) {
  n === void 0 && (n = !1);
  const r = ao(e),
    o = dc(e),
    s = cc(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[s] > t.floating[s] && (i = _i(i)), [i, _i(i)]);
}
function q1(e) {
  const t = _i(e);
  return [ru(e), t, ru(t)];
}
function ru(e) {
  return e.replace(/start|end/g, (t) => K1[t]);
}
const af = ["left", "right"],
  uf = ["right", "left"],
  Z1 = ["top", "bottom"],
  J1 = ["bottom", "top"];
function eS(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? uf : af) : t ? af : uf;
    case "left":
    case "right":
      return t ? Z1 : J1;
    default:
      return [];
  }
}
function tS(e, t, n, r) {
  const o = ao(e);
  let s = eS(qt(e), n === "start", r);
  return (
    o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(ru)))),
    s
  );
}
function _i(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Y1[t]);
}
function nS(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Jm(e) {
  return typeof e != "number"
    ? nS(e)
    : { top: e, right: e, bottom: e, left: e };
}
function ji(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function cf(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = Ot(t),
    i = dc(t),
    l = cc(i),
    a = qt(t),
    u = s === "y",
    d = r.x + r.width / 2 - o.width / 2,

    c = r.y + r.height / 2 - o.height / 2,
    h = r[l] / 2 - o[l] / 2;
  let f;
  switch (a) {
    case "top":
      f = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      f = { x: d, y: r.y + r.height };
      break;
    case "right":
      f = { x: r.x + r.width, y: c };
      break;
    case "left":
      f = { x: r.x - o.width, y: c };
      break;
    default:
      f = { x: r.x, y: r.y };
  }
  switch (ao(t)) {
    case "start":
      f[i] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      f[i] += h * (n && u ? -1 : 1);
      break;
  }
  return f;
}
const rS = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i,
  } = n,
    l = s.filter(Boolean),
    a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: c } = cf(u, r, a),
    h = r,
    f = {},
    S = 0;
  for (let y = 0; y < l.length; y++) {
    const { name: x, fn: m } = l[y],
      {
        x: p,
        y: v,
        data: E,
        reset: b,
      } = await m({
        x: d,
        y: c,
        initialPlacement: r,
        placement: h,
        strategy: o,
        middlewareData: f,
        rects: u,
        platform: i,
        elements: { reference: e, floating: t },
      });
    ((d = p ?? d),
      (c = v ?? c),
      (f = { ...f, [x]: { ...f[x], ...E } }),
      b &&
      S <= 50 &&
      (S++,
        typeof b == "object" &&
        (b.placement && (h = b.placement),
          b.rects &&
          (u =
            b.rects === !0
              ? await i.getElementRects({
                reference: e,
                floating: t,
                strategy: o,
              })
              : b.rects),
          ({ x: d, y: c } = cf(u, h, a))),
        (y = -1)));
  }
  return { x: d, y: c, placement: h, strategy: o, middlewareData: f };
};
async function ns(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: l, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: c = "floating",
      altBoundary: h = !1,
      padding: f = 0,
    } = Xt(t, e),
    S = Jm(f),
    x = l[h ? (c === "floating" ? "reference" : "floating") : c],
    m = ji(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null ||
            n
            ? x
            : x.contextElement ||
            (await (s.getDocumentElement == null
              ? void 0
              : s.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: a,
      }),
    ),
    p =
      c === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    v = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(l.floating)),
    E = (await (s.isElement == null ? void 0 : s.isElement(v)))
      ? (await (s.getScale == null ? void 0 : s.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    b = ji(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: l,
          rect: p,
          offsetParent: v,
          strategy: a,
        })
        : p,
    );
  return {
    top: (m.top - b.top + S.top) / E.y,
    bottom: (b.bottom - m.bottom + S.bottom) / E.y,
    left: (m.left - b.left + S.left) / E.x,
    right: (b.right - m.right + S.right) / E.x,
  };
}
const oS = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: l,
      middlewareData: a,
    } = t,

      { element: u, padding: d = 0 } = Xt(e, t) || {};
    if (u == null) return {};
    const c = Jm(d),
      h = { x: n, y: r },
      f = dc(o),
      S = cc(f),
      y = await i.getDimensions(u),
      x = f === "y",
      m = x ? "top" : "left",
      p = x ? "bottom" : "right",
      v = x ? "clientHeight" : "clientWidth",
      E = s.reference[S] + s.reference[f] - h[f] - s.floating[S],
      b = h[f] - s.reference[f],
      k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let P = k ? k[v] : 0;
    (!P || !(await (i.isElement == null ? void 0 : i.isElement(k)))) &&
      (P = l.floating[v] || s.floating[S]);
    const A = E / 2 - b / 2,
      B = P / 2 - y[S] / 2 - 1,
      O = In(c[m], B),
      L = In(c[p], B),
      C = O,
      $ = P - y[S] - L,
      N = P / 2 - y[S] / 2 + A,
      W = nu(C, N, $),
      H =
        !a.arrow &&
        ao(o) != null &&
        N !== W &&
        s.reference[S] / 2 - (N < C ? O : L) - y[S] / 2 < 0,
      Q = H ? (N < C ? N - C : N - $) : 0;
    return {
      [f]: h[f] + Q,
      data: {
        [f]: W,
        centerOffset: N - W - Q,
        ...(H && { alignmentOffset: Q }),
      },
      reset: H,
    };
  },
}),
  sS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
            placement: o,
            middlewareData: s,
            rects: i,
            initialPlacement: l,
            platform: a,
            elements: u,
          } = t,
            {
              mainAxis: d = !0,
              crossAxis: c = !0,
              fallbackPlacements: h,
              fallbackStrategy: f = "bestFit",
              fallbackAxisSideDirection: S = "none",
              flipAlignment: y = !0,
              ...x
            } = Xt(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const m = qt(o),
            p = Ot(l),
            v = qt(l) === l,
            E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            b = h || (v || !y ? [_i(l)] : q1(l)),
            k = S !== "none";
          !h && k && b.push(...tS(l, y, S, E));
          const P = [l, ...b],
            A = await ns(t, x),
            B = [];
          let O = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((d && B.push(A[m]), c)) {
            const N = X1(o, i, E);
            B.push(A[N[0]], A[N[1]]);
          }
          if (
            ((O = [...O, { placement: o, overflows: B }]),
              !B.every((N) => N <= 0))
          ) {
            var L, C;
            const N = (((L = s.flip) == null ? void 0 : L.index) || 0) + 1,
              W = P[N];
            if (
              W &&
              (!(c === "alignment" ? p !== Ot(W) : !1) ||
                O.every((T) => T.overflows[0] > 0 && Ot(T.placement) === p))
            )
              return {
                data: { index: N, overflows: O },
                reset: { placement: W },
              };
            let H =
              (C = O.filter((Q) => Q.overflows[0] <= 0).sort(
                (Q, T) => Q.overflows[1] - T.overflows[1],
              )[0]) == null
                ? void 0
                : C.placement;
            if (!H)
              switch (f) {
                case "bestFit": {
                  var $;
                  const Q =
                    ($ = O.filter((T) => {
                      if (k) {
                        const R = Ot(T.placement);
                        return R === p || R === "y";
                      }
                      return !0;
                    })
                      .map((T) => [
                        T.placement,
                        T.overflows
                          .filter((R) => R > 0)
                          .reduce((R, M) => R + M, 0),
                      ])
                      .sort((T, R) => T[1] - R[1])[0]) == null

                      ? void 0
                      : $[0];
                  Q && (H = Q);
                  break;
                }
                case "initialPlacement":
                  H = l;
                  break;
              }
            if (o !== H) return { reset: { placement: H } };
          }
          return {};
        },
      }
    );
  };
function df(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function ff(e) {
  return Q1.some((t) => e[t] >= 0);
}
const iS = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = Xt(e, t);
        switch (r) {
          case "referenceHidden": {
            const s = await ns(t, { ...o, elementContext: "reference" }),
              i = df(s, n.reference);
            return {
              data: { referenceHiddenOffsets: i, referenceHidden: ff(i) },
            };
          }
          case "escaped": {
            const s = await ns(t, { ...o, altBoundary: !0 }),
              i = df(s, n.floating);
            return { data: { escapedOffsets: i, escaped: ff(i) } };
          }
          default:
            return {};
        }
      },
    }
  );
},
  eg = new Set(["left", "top"]);
async function lS(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = qt(n),
    l = ao(n),
    a = Ot(n) === "y",
    u = eg.has(i) ? -1 : 1,
    d = s && a ? -1 : 1,
    c = Xt(t, e);
  let {
    mainAxis: h,
    crossAxis: f,
    alignmentAxis: S,
  } = typeof c == "number"
      ? { mainAxis: c, crossAxis: 0, alignmentAxis: null }
      : {
        mainAxis: c.mainAxis || 0,
        crossAxis: c.crossAxis || 0,
        alignmentAxis: c.alignmentAxis,
      };
  return (
    l && typeof S == "number" && (f = l === "end" ? S * -1 : S),
    a ? { x: f * d, y: h * u } : { x: h * u, y: f * d }
  );
}
const aS = function (e) {
  return (
    e === void 0 && (e = 0),
    {
      name: "offset",
      options: e,
      async fn(t) {
        var n, r;
        const { x: o, y: s, placement: i, middlewareData: l } = t,
          a = await lS(t, e);
        return i === ((n = l.offset) == null ? void 0 : n.placement) &&
          (r = l.arrow) != null &&
          r.alignmentOffset
          ? {}
          : { x: o + a.x, y: s + a.y, data: { ...a, placement: i } };
      },
    }
  );
},
  uS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: i = !1,
              limiter: l = {
                fn: (x) => {
                  let { x: m, y: p } = x;
                  return { x: m, y: p };
                },
              },
              ...a
            } = Xt(e, t),
            u = { x: n, y: r },
            d = await ns(t, a),
            c = Ot(qt(o)),
            h = uc(c);
          let f = u[h],
            S = u[c];
          if (s) {
            const x = h === "y" ? "top" : "left",
              m = h === "y" ? "bottom" : "right",
              p = f + d[x],
              v = f - d[m];
            f = nu(p, f, v);
          }
          if (i) {
            const x = c === "y" ? "top" : "left",
              m = c === "y" ? "bottom" : "right",
              p = S + d[x],
              v = S - d[m];
            S = nu(p, S, v);
          }
          const y = l.fn({ ...t, [h]: f, [c]: S });
          return {
            ...y,
            data: { x: y.x - n, y: y.y - r, enabled: { [h]: s, [c]: i } },
          };
        },
      }
    );
  },

  cS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = Xt(e, t),
            d = { x: n, y: r },
            c = Ot(o),
            h = uc(c);
          let f = d[h],
            S = d[c];
          const y = Xt(l, t),
            x =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (a) {
            const v = h === "y" ? "height" : "width",
              E = s.reference[h] - s.floating[v] + x.mainAxis,
              b = s.reference[h] + s.reference[v] - x.mainAxis;
            f < E ? (f = E) : f > b && (f = b);
          }
          if (u) {
            var m, p;
            const v = h === "y" ? "width" : "height",
              E = eg.has(qt(o)),
              b =
                s.reference[c] -
                s.floating[v] +
                ((E && ((m = i.offset) == null ? void 0 : m[c])) || 0) +
                (E ? 0 : x.crossAxis),
              k =
                s.reference[c] +
                s.reference[v] +
                (E ? 0 : ((p = i.offset) == null ? void 0 : p[c]) || 0) -
                (E ? x.crossAxis : 0);
            S < b ? (S = b) : S > k && (S = k);
          }
          return { [h]: f, [c]: S };
        },
      }
    );
  },
  dS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: s, platform: i, elements: l } = t,
            { apply: a = () => { }, ...u } = Xt(e, t),
            d = await ns(t, u),
            c = qt(o),
            h = ao(o),
            f = Ot(o) === "y",
            { width: S, height: y } = s.floating;
          let x, m;
          c === "top" || c === "bottom"
            ? ((x = c),
              (m =
                h ===
                  ((await (i.isRTL == null ? void 0 : i.isRTL(l.floating)))
                    ? "start"
                    : "end")
                  ? "left"
                  : "right"))
            : ((m = c), (x = h === "end" ? "top" : "bottom"));
          const p = y - d.top - d.bottom,
            v = S - d.left - d.right,
            E = In(y - d[x], p),
            b = In(S - d[m], v),
            k = !t.middlewareData.shift;
          let P = E,
            A = b;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (A = v),
              (r = t.middlewareData.shift) != null && r.enabled.y && (P = p),
              k && !h)
          ) {
            const O = Ye(d.left, 0),
              L = Ye(d.right, 0),
              C = Ye(d.top, 0),
              $ = Ye(d.bottom, 0);
            f
              ? (A = S - 2 * (O !== 0 || L !== 0 ? O + L : Ye(d.left, d.right)))
              : (P =
                y - 2 * (C !== 0 || $ !== 0 ? C + $ : Ye(d.top, d.bottom)));
          }
          await a({ ...t, availableWidth: A, availableHeight: P });
          const B = await i.getDimensions(l.floating);
          return S !== B.width || y !== B.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function rl() {
  return typeof window < "u";
}
function uo(e) {
  return tg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Xe(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Dt(e) {
  var t;
  return (t = (tg(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function tg(e) {
  return rl() ? e instanceof Node || e instanceof Xe(e).Node : !1;
}
function Ct(e) {
  return rl() ? e instanceof Element || e instanceof Xe(e).Element : !1;
}
function It(e) {

  return rl() ? e instanceof HTMLElement || e instanceof Xe(e).HTMLElement : !1;
}
function pf(e) {
  return !rl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Xe(e).ShadowRoot;
}
const fS = new Set(["inline", "contents"]);
function ps(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = kt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !fS.has(o);
}
const pS = new Set(["table", "td", "th"]);
function hS(e) {
  return pS.has(uo(e));
}
const mS = [":popover-open", ":modal"];
function ol(e) {
  return mS.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const gS = ["transform", "translate", "scale", "rotate", "perspective"],
  vS = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  yS = ["paint", "layout", "strict", "content"];
function fc(e) {
  const t = pc(),
    n = Ct(e) ? kt(e) : e;
  return (
    gS.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    vS.some((r) => (n.willChange || "").includes(r)) ||
    yS.some((r) => (n.contain || "").includes(r))
  );
}
function xS(e) {
  let t = Dn(e);
  for (; It(t) && !no(t);) {
    if (fc(t)) return t;
    if (ol(t)) return null;
    t = Dn(t);
  }
  return null;
}
function pc() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const wS = new Set(["html", "body", "#document"]);
function no(e) {
  return wS.has(uo(e));
}
function kt(e) {
  return Xe(e).getComputedStyle(e);
}
function sl(e) {
  return Ct(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Dn(e) {
  if (uo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (pf(e) && e.host) || Dt(e);
  return pf(t) ? t.host : t;
}
function ng(e) {
  const t = Dn(e);
  return no(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : It(t) && ps(t)
      ? t
      : ng(t);
}
function rs(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const o = ng(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = Xe(o);
  if (s) {
    const l = ou(i);
    return t.concat(
      i,
      i.visualViewport || [],
      ps(o) ? o : [],
      l && n ? rs(l) : [],
    );
  }
  return t.concat(o, rs(o, [], n));
}
function ou(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function rg(e) {
  const t = kt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = It(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    l = Ri(n) !== s || Ri(r) !== i;
  return (l && ((n = s), (r = i)), { width: n, height: r, $: l });
}
function hc(e) {
  return Ct(e) ? e : e.contextElement;
}
function $r(e) {
  const t = hc(e);
  if (!It(t)) return Lt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = rg(t);
  let i = (s ? Ri(n.width) : n.width) / r,
    l = (s ? Ri(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: i, y: l }
  );
}
const SS = Lt(0);
function og(e) {
  const t = Xe(e);
  return !pc() || !t.visualViewport
    ? SS
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function ES(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== Xe(e)) ? !1 : t);
}
function ar(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const o = e.getBoundingClientRect(),
    s = hc(e);
  let i = Lt(1);
  t && (r ? Ct(r) && (i = $r(r)) : (i = $r(e)));
  const l = ES(s, n, r) ? og(s) : Lt(0);

  let a = (o.left + l.x) / i.x,
    u = (o.top + l.y) / i.y,
    d = o.width / i.x,
    c = o.height / i.y;
  if (s) {
    const h = Xe(s),
      f = r && Ct(r) ? Xe(r) : r;
    let S = h,
      y = ou(S);
    for (; y && r && f !== S;) {
      const x = $r(y),
        m = y.getBoundingClientRect(),
        p = kt(y),
        v = m.left + (y.clientLeft + parseFloat(p.paddingLeft)) * x.x,
        E = m.top + (y.clientTop + parseFloat(p.paddingTop)) * x.y;
      ((a *= x.x),
        (u *= x.y),
        (d *= x.x),
        (c *= x.y),
        (a += v),
        (u += E),
        (S = Xe(y)),
        (y = ou(S)));
    }
  }
  return ji({ width: d, height: c, x: a, y: u });
}
function mc(e, t) {
  const n = sl(e).scrollLeft;
  return t ? t.left + n : ar(Dt(e)).left + n;
}
function sg(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : mc(e, r)),
    s = r.top + t.scrollTop;
  return { x: o, y: s };
}
function bS(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed",
    i = Dt(r),
    l = t ? ol(t.floating) : !1;
  if (r === i || (l && s)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = Lt(1);
  const d = Lt(0),
    c = It(r);
  if (
    (c || (!c && !s)) &&
    ((uo(r) !== "body" || ps(i)) && (a = sl(r)), It(r))
  ) {
    const f = ar(r);
    ((u = $r(r)), (d.x = f.x + r.clientLeft), (d.y = f.y + r.clientTop));
  }
  const h = i && !c && !s ? sg(i, a, !0) : Lt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + d.x + h.x,
    y: n.y * u.y - a.scrollTop * u.y + d.y + h.y,
  };
}
function CS(e) {
  return Array.from(e.getClientRects());
}
function kS(e) {
  const t = Dt(e),
    n = sl(e),
    r = e.ownerDocument.body,
    o = Ye(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = Ye(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + mc(e);
  const l = -n.scrollTop;
  return (
    kt(r).direction === "rtl" && (i += Ye(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: l }
  );
}
function NS(e, t) {
  const n = Xe(e),
    r = Dt(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    ((s = o.width), (i = o.height));
    const u = pc();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: s, height: i, x: l, y: a };
}
const PS = new Set(["absolute", "fixed"]);
function TS(e, t) {
  const n = ar(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = It(e) ? $r(e) : Lt(1),
    i = e.clientWidth * s.x,
    l = e.clientHeight * s.y,
    a = o * s.x,
    u = r * s.y;
  return { width: i, height: l, x: a, y: u };
}
function hf(e, t, n) {
  let r;
  if (t === "viewport") r = NS(e, n);
  else if (t === "document") r = kS(Dt(e));
  else if (Ct(t)) r = TS(t, n);
  else {
    const o = og(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return ji(r);
}
function ig(e, t) {
  const n = Dn(e);
  return n === t || !Ct(n) || no(n)
    ? !1
    : kt(n).position === "fixed" || ig(n, t);
}
function RS(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = rs(e, [], !1).filter((l) => Ct(l) && uo(l) !== "body"),
    o = null;
  const s = kt(e).position === "fixed";
  let i = s ? Dn(e) : e;
  for (; Ct(i) && !no(i);) {
    const l = kt(i),
      a = fc(i);
    (!a && l.position === "fixed" && (o = null),
      (
        s
          ? !a && !o
          : (!a && l.position === "static" && !!o && PS.has(o.position)) ||
          (ps(i) && !a && ig(e, i))
      )
        ? (r = r.filter((d) => d !== i))
        : (o = l),
      (i = Dn(i)));
  }
  return (t.set(e, r), r);
}
function _S(e) {

  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
    ...(n === "clippingAncestors"
      ? ol(t)
        ? []
        : RS(t, this._c)
      : [].concat(n)),
    r,
  ],
    l = i[0],
    a = i.reduce(
      (u, d) => {
        const c = hf(t, d, o);
        return (
          (u.top = Ye(c.top, u.top)),
          (u.right = In(c.right, u.right)),
          (u.bottom = In(c.bottom, u.bottom)),
          (u.left = Ye(c.left, u.left)),
          u
        );
      },
      hf(t, l, o),
    );
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function jS(e) {
  const { width: t, height: n } = rg(e);
  return { width: t, height: n };
}
function OS(e, t, n) {
  const r = It(t),
    o = Dt(t),
    s = n === "fixed",
    i = ar(e, !0, s, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = Lt(0);
  function u() {
    a.x = mc(o);
  }
  if (r || (!r && !s))
    if (((uo(t) !== "body" || ps(o)) && (l = sl(t)), r)) {
      const f = ar(t, !0, s, t);
      ((a.x = f.x + t.clientLeft), (a.y = f.y + t.clientTop));
    } else o && u();
  s && !r && o && u();
  const d = o && !r && !s ? sg(o, l) : Lt(0),
    c = i.left + l.scrollLeft - a.x - d.x,
    h = i.top + l.scrollTop - a.y - d.y;
  return { x: c, y: h, width: i.width, height: i.height };
}
function Vl(e) {
  return kt(e).position === "static";
}
function mf(e, t) {
  if (!It(e) || kt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (Dt(e) === n && (n = n.ownerDocument.body), n);
}
function lg(e, t) {
  const n = Xe(e);
  if (ol(e)) return n;
  if (!It(e)) {
    let o = Dn(e);
    for (; o && !no(o);) {
      if (Ct(o) && !Vl(o)) return o;
      o = Dn(o);
    }
    return n;
  }
  let r = mf(e, t);
  for (; r && hS(r) && Vl(r);) r = mf(r, t);
  return r && no(r) && Vl(r) && !fc(r) ? n : r || xS(e) || n;
}
const MS = async function (e) {
  const t = this.getOffsetParent || lg,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: OS(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function AS(e) {
  return kt(e).direction === "rtl";
}
const LS = {
  convertOffsetParentRelativeRectToViewportRelativeRect: bS,
  getDocumentElement: Dt,
  getClippingRect: _S,
  getOffsetParent: lg,
  getElementRects: MS,
  getClientRects: CS,
  getDimensions: jS,
  getScale: $r,
  isElement: Ct,
  isRTL: AS,
};
function ag(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function IS(e, t) {
  let n = null,
    r;
  const o = Dt(e);
  function s() {
    var l;
    (clearTimeout(r), (l = n) == null || l.disconnect(), (n = null));
  }
  function i(l, a) {
    (l === void 0 && (l = !1), a === void 0 && (a = 1), s());
    const u = e.getBoundingClientRect(),
      { left: d, top: c, width: h, height: f } = u;
    if ((l || t(), !h || !f)) return;
    const S = zs(c),
      y = zs(o.clientWidth - (d + h)),
      x = zs(o.clientHeight - (c + f)),
      m = zs(d),
      v = {
        rootMargin: -S + "px " + -y + "px " + -x + "px " + -m + "px",
        threshold: Ye(0, In(1, a)) || 1,
      };
    let E = !0;
    function b(k) {
      const P = k[0].intersectionRatio;
      if (P !== a) {
        if (!E) return i();
        P
          ? i(!1, P)
          : (r = setTimeout(() => {
            i(!1, 1e-7);
          }, 1e3));
      }
      (P === 1 && !ag(u, e.getBoundingClientRect()) && i(), (E = !1));
    }
    try {
      n = new IntersectionObserver(b, { ...v, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(b, v);
    }
    n.observe(e);
  }
  return (i(!0), s);
}
function DS(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,

    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: a = !1,
  } = r,
    u = hc(e),
    d = o || s ? [...(u ? rs(u) : []), ...rs(t)] : [];
  d.forEach((m) => {
    (o && m.addEventListener("scroll", n, { passive: !0 }),
      s && m.addEventListener("resize", n));
  });
  const c = u && l ? IS(u, n) : null;
  let h = -1,
    f = null;
  i &&
    ((f = new ResizeObserver((m) => {
      let [p] = m;
      (p &&
        p.target === u &&
        f &&
        (f.unobserve(t),
          cancelAnimationFrame(h),
          (h = requestAnimationFrame(() => {
            var v;
            (v = f) == null || v.observe(t);
          }))),
        n());
    })),
      u && !a && f.observe(u),
      f.observe(t));
  let S,
    y = a ? ar(e) : null;
  a && x();
  function x() {
    const m = ar(e);
    (y && !ag(y, m) && n(), (y = m), (S = requestAnimationFrame(x)));
  }
  return (
    n(),
    () => {
      var m;
      (d.forEach((p) => {
        (o && p.removeEventListener("scroll", n),
          s && p.removeEventListener("resize", n));
      }),
        c == null || c(),
        (m = f) == null || m.disconnect(),
        (f = null),
        a && cancelAnimationFrame(S));
    }
  );
}
const FS = aS,
  zS = uS,
  $S = sS,
  BS = dS,
  US = iS,
  gf = oS,
  WS = cS,
  VS = (e, t, n) => {
    const r = new Map(),
      o = { platform: LS, ...n },
      s = { ...o.platform, _c: r };
    return rS(e, t, { ...o, platform: s });
  };
var HS = typeof document < "u",
  QS = function () { },
  ti = HS ? w.useLayoutEffect : QS;
function Oi(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0;) if (!Oi(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0;) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Oi(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ug(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function vf(e, t) {
  const n = ug(e);
  return Math.round(t * n) / n;
}
function Hl(e) {
  const t = w.useRef(e);
  return (
    ti(() => {
      t.current = e;
    }),
    t
  );
}
function YS(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: { reference: s, floating: i } = {},
    transform: l = !0,
    whileElementsMounted: a,
    open: u,
  } = e,
    [d, c] = w.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, f] = w.useState(r);
  Oi(h, r) || f(r);
  const [S, y] = w.useState(null),
    [x, m] = w.useState(null),
    p = w.useCallback((T) => {
      T !== k.current && ((k.current = T), y(T));
    }, []),
    v = w.useCallback((T) => {
      T !== P.current && ((P.current = T), m(T));
    }, []),
    E = s || S,
    b = i || x,
    k = w.useRef(null),
    P = w.useRef(null),
    A = w.useRef(d),
    B = a != null,
    O = Hl(a),
    L = Hl(o),
    C = Hl(u),
    $ = w.useCallback(() => {
      if (!k.current || !P.current) return;
      const T = { placement: t, strategy: n, middleware: h };
      (L.current && (T.platform = L.current),
        VS(k.current, P.current, T).then((R) => {
          const M = { ...R, isPositioned: C.current !== !1 };

          N.current &&
            !Oi(A.current, M) &&
            ((A.current = M),
              ds.flushSync(() => {
                c(M);
              }));
        }));
    }, [h, t, n, L, C]);
  ti(() => {
    u === !1 &&
      A.current.isPositioned &&
      ((A.current.isPositioned = !1), c((T) => ({ ...T, isPositioned: !1 })));
  }, [u]);
  const N = w.useRef(!1);
  (ti(
    () => (
      (N.current = !0),
      () => {
        N.current = !1;
      }
    ),
    [],
  ),
    ti(() => {
      if ((E && (k.current = E), b && (P.current = b), E && b)) {
        if (O.current) return O.current(E, b, $);
        $();
      }
    }, [E, b, $, O, B]));
  const W = w.useMemo(
    () => ({ reference: k, floating: P, setReference: p, setFloating: v }),
    [p, v],
  ),
    H = w.useMemo(() => ({ reference: E, floating: b }), [E, b]),
    Q = w.useMemo(() => {
      const T = { position: n, left: 0, top: 0 };
      if (!H.floating) return T;
      const R = vf(H.floating, d.x),
        M = vf(H.floating, d.y);
      return l
        ? {
          ...T,
          transform: "translate(" + R + "px, " + M + "px)",
          ...(ug(H.floating) >= 1.5 && { willChange: "transform" }),
        }
        : { position: n, left: R, top: M };
    }, [n, l, H.floating, d.x, d.y]);
  return w.useMemo(
    () => ({ ...d, update: $, refs: W, elements: H, floatingStyles: Q }),
    [d, $, W, H, Q],
  );
}
const KS = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
      return r && t(r)
        ? r.current != null
          ? gf({ element: r.current, padding: o }).fn(n)
          : {}
        : r
          ? gf({ element: r, padding: o }).fn(n)
          : {};
    },
  };
},
  GS = (e, t) => ({ ...FS(e), options: [e, t] }),
  XS = (e, t) => ({ ...zS(e), options: [e, t] }),
  qS = (e, t) => ({ ...WS(e), options: [e, t] }),
  ZS = (e, t) => ({ ...$S(e), options: [e, t] }),
  JS = (e, t) => ({ ...BS(e), options: [e, t] }),
  eE = (e, t) => ({ ...US(e), options: [e, t] }),
  tE = (e, t) => ({ ...KS(e), options: [e, t] });
var nE = "Arrow",
  cg = w.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...s } = e;
    return g.jsx(He.svg, {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : g.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
cg.displayName = nE;
var rE = cg;
function oE(e) {
  const [t, n] = w.useState(void 0);
  return (
    Ln(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let i, l;
          if ("borderBoxSize" in s) {
            const a = s.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            ((i = u.inlineSize), (l = u.blockSize));
          } else ((i = e.offsetWidth), (l = e.offsetHeight));
          n({ width: i, height: l });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var dg = "Popper",
  [fg, pg] = el(dg),
  [ab, hg] = fg(dg),
  mg = "PopperAnchor",
  gg = w.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      s = hg(mg, n),
      i = w.useRef(null),
      l = bt(t, i);
    return (
      w.useEffect(() => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
      }),
      r ? null : g.jsx(He.div, { ...o, ref: l })
    );
  });
gg.displayName = mg;
var gc = "PopperContent",
  [sE, iE] = fg(gc),
  vg = w.forwardRef((e, t) => {
    var X, fr, en, Bn, tn, pr;
    const {
      __scopePopper: n,
      side: r = "bottom",

      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: l = 0,
      avoidCollisions: a = !0,
      collisionBoundary: u = [],
      collisionPadding: d = 0,
      sticky: c = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: f = "optimized",
      onPlaced: S,
      ...y
    } = e,
      x = hg(gc, n),
      [m, p] = w.useState(null),
      v = bt(t, (nn) => p(nn)),
      [E, b] = w.useState(null),
      k = oE(E),
      P = (k == null ? void 0 : k.width) ?? 0,
      A = (k == null ? void 0 : k.height) ?? 0,
      B = r + (s !== "center" ? "-" + s : ""),
      O =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      L = Array.isArray(u) ? u : [u],
      C = L.length > 0,
      $ = { padding: O, boundary: L.filter(aE), altBoundary: C },
      {
        refs: N,
        floatingStyles: W,
        placement: H,
        isPositioned: Q,
        middlewareData: T,
      } = YS({
        strategy: "fixed",
        placement: B,
        whileElementsMounted: (...nn) =>
          DS(...nn, { animationFrame: f === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          GS({ mainAxis: o + A, alignmentAxis: i }),
          a &&
          XS({
            mainAxis: !0,
            crossAxis: !1,
            limiter: c === "partial" ? qS() : void 0,
            ...$,
          }),
          a && ZS({ ...$ }),
          JS({
            ...$,
            apply: ({
              elements: nn,
              rects: hs,
              availableWidth: al,
              availableHeight: ms,
            }) => {
              const { width: ul, height: co } = hs.reference,
                hr = nn.floating.style;
              (hr.setProperty("--radix-popper-available-width", `${al}px`),
                hr.setProperty("--radix-popper-available-height", `${ms}px`),
                hr.setProperty("--radix-popper-anchor-width", `${ul}px`),
                hr.setProperty("--radix-popper-anchor-height", `${co}px`));
            },
          }),
          E && tE({ element: E, padding: l }),
          uE({ arrowWidth: P, arrowHeight: A }),
          h && eE({ strategy: "referenceHidden", ...$ }),
        ],
      }),
      [R, M] = wg(H),
      D = An(S);
    Ln(() => {
      Q && (D == null || D());
    }, [Q, D]);
    const _ = (X = T.arrow) == null ? void 0 : X.x,
      F = (fr = T.arrow) == null ? void 0 : fr.y,
      U = ((en = T.arrow) == null ? void 0 : en.centerOffset) !== 0,
      [Z, te] = w.useState();
    return (
      Ln(() => {
        m && te(window.getComputedStyle(m).zIndex);
      }, [m]),
      g.jsx("div", {
        ref: N.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: Q ? W.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Z,
          "--radix-popper-transform-origin": [
            (Bn = T.transformOrigin) == null ? void 0 : Bn.x,
            (tn = T.transformOrigin) == null ? void 0 : tn.y,
          ].join(" "),
          ...(((pr = T.hide) == null ? void 0 : pr.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: g.jsx(sE, {
          scope: n,
          placedSide: R,
          onArrowChange: b,
          arrowX: _,
          arrowY: F,
          shouldHideArrow: U,
          children: g.jsx(He.div, {
            "data-side": R,
            "data-align": M,
            ...y,
            ref: v,
            style: { ...y.style, animation: Q ? void 0 : "none" },
          }),
        }),
      })
    );
  });
vg.displayName = gc;
var yg = "PopperArrow",
  lE = { top: "bottom", right: "left", bottom: "top", left: "right" },
  xg = w.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      s = iE(yg, r),
      i = lE[s.placedSide];

    return g.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [i]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0,
      },
      children: g.jsx(rE, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
xg.displayName = yg;
function aE(e) {
  return e !== null;
}
var uE = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, m, p;
    const { placement: n, rects: r, middlewareData: o } = t,
      i = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0,
      l = i ? 0 : e.arrowWidth,
      a = i ? 0 : e.arrowHeight,
      [u, d] = wg(n),
      c = { start: "0%", center: "50%", end: "100%" }[d],
      h = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + l / 2,
      f = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + a / 2;
    let S = "",
      y = "";
    return (
      u === "bottom"
        ? ((S = i ? c : `${h}px`), (y = `${-a}px`))
        : u === "top"
          ? ((S = i ? c : `${h}px`), (y = `${r.floating.height + a}px`))
          : u === "right"
            ? ((S = `${-a}px`), (y = i ? c : `${f}px`))
            : u === "left" &&
            ((S = `${r.floating.width + a}px`), (y = i ? c : `${f}px`)),
      { data: { x: S, y } }
    );
  },
});
function wg(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var cE = gg,
  dE = vg,
  fE = xg,
  [il, ub] = el("Tooltip", [pg]),
  vc = pg(),
  Sg = "TooltipProvider",
  pE = 700,
  yf = "tooltip.open",
  [hE, Eg] = il(Sg),
  bg = (e) => {
    const {
      __scopeTooltip: t,
      delayDuration: n = pE,
      skipDelayDuration: r = 300,
      disableHoverableContent: o = !1,
      children: s,
    } = e,
      i = w.useRef(!0),
      l = w.useRef(!1),
      a = w.useRef(0);
    return (
      w.useEffect(() => {
        const u = a.current;
        return () => window.clearTimeout(u);
      }, []),
      g.jsx(hE, {
        scope: t,
        isOpenDelayedRef: i,
        delayDuration: n,
        onOpen: w.useCallback(() => {
          (window.clearTimeout(a.current), (i.current = !1));
        }, []),
        onClose: w.useCallback(() => {
          (window.clearTimeout(a.current),
            (a.current = window.setTimeout(() => (i.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: w.useCallback((u) => {
          l.current = u;
        }, []),
        disableHoverableContent: o,
        children: s,
      })
    );
  };
bg.displayName = Sg;
var Cg = "Tooltip",
  [cb, ll] = il(Cg),
  su = "TooltipTrigger",
  mE = w.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = ll(su, n),
      s = Eg(su, n),
      i = vc(n),
      l = w.useRef(null),
      a = bt(t, l, o.onTriggerChange),
      u = w.useRef(!1),
      d = w.useRef(!1),
      c = w.useCallback(() => (u.current = !1), []);
    return (
      w.useEffect(
        () => () => document.removeEventListener("pointerup", c),
        [c],
      ),
      g.jsx(cE, {
        asChild: !0,
        ...i,
        children: g.jsx(He.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: a,
          onPointerMove: xe(e.onPointerMove, (h) => {
            h.pointerType !== "touch" &&
              !d.current &&
              !s.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (d.current = !0));

          }),
          onPointerLeave: xe(e.onPointerLeave, () => {
            (o.onTriggerLeave(), (d.current = !1));
          }),
          onPointerDown: xe(e.onPointerDown, () => {
            (o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", c, { once: !0 }));
          }),
          onFocus: xe(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: xe(e.onBlur, o.onClose),
          onClick: xe(e.onClick, o.onClose),
        }),
      })
    );
  });
mE.displayName = su;
var gE = "TooltipPortal",
  [db, vE] = il(gE, { forceMount: void 0 }),
  ro = "TooltipContent",
  kg = w.forwardRef((e, t) => {
    const n = vE(ro, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...s } = e,
      i = ll(ro, e.__scopeTooltip);
    return g.jsx(oc, {
      present: r || i.open,
      children: i.disableHoverableContent
        ? g.jsx(Ng, { side: o, ...s, ref: t })
        : g.jsx(yE, { side: o, ...s, ref: t }),
    });
  }),
  yE = w.forwardRef((e, t) => {
    const n = ll(ro, e.__scopeTooltip),
      r = Eg(ro, e.__scopeTooltip),
      o = w.useRef(null),
      s = bt(t, o),
      [i, l] = w.useState(null),
      { trigger: a, onClose: u } = n,
      d = o.current,
      { onPointerInTransitChange: c } = r,
      h = w.useCallback(() => {
        (l(null), c(!1));
      }, [c]),
      f = w.useCallback(
        (S, y) => {
          const x = S.currentTarget,
            m = { x: S.clientX, y: S.clientY },
            p = bE(m, x.getBoundingClientRect()),
            v = CE(m, p),
            E = kE(y.getBoundingClientRect()),
            b = PE([...v, ...E]);
          (l(b), c(!0));
        },
        [c],
      );
    return (
      w.useEffect(() => () => h(), [h]),
      w.useEffect(() => {
        if (a && d) {
          const S = (x) => f(x, d),
            y = (x) => f(x, a);
          return (
            a.addEventListener("pointerleave", S),
            d.addEventListener("pointerleave", y),
            () => {
              (a.removeEventListener("pointerleave", S),
                d.removeEventListener("pointerleave", y));
            }
          );
        }
      }, [a, d, f, h]),
      w.useEffect(() => {
        if (i) {
          const S = (y) => {
            const x = y.target,
              m = { x: y.clientX, y: y.clientY },
              p =
                (a == null ? void 0 : a.contains(x)) ||
                (d == null ? void 0 : d.contains(x)),
              v = !NE(m, i);
            p ? h() : v && (h(), u());
          };
          return (
            document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
          );
        }
      }, [a, d, i, u, h]),
      g.jsx(Ng, { ...e, ref: s })
    );
  }),
  [xE, wE] = il(Cg, { isInside: !1 }),
  SE = uw("TooltipContent"),
  Ng = w.forwardRef((e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      ...l
    } = e,
      a = ll(ro, n),
      u = vc(n),
      { onClose: d } = a;
    return (
      w.useEffect(
        () => (
          document.addEventListener(yf, d),
          () => document.removeEventListener(yf, d)
        ),
        [d],
      ),
      w.useEffect(() => {
        if (a.trigger) {
          const c = (h) => {
            const f = h.target;
            f != null && f.contains(a.trigger) && d();
          };
          return (
            window.addEventListener("scroll", c, { capture: !0 }),
            () => window.removeEventListener("scroll", c, { capture: !0 })
          );
        }
      }, [a.trigger, d]),
      g.jsx(rc, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (c) => c.preventDefault(),
        onDismiss: d,

        children: g.jsxs(dE, {
          "data-state": a.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            g.jsx(SE, { children: r }),
            g.jsx(xE, {
              scope: n,
              isInside: !0,
              children: g.jsx(Aw, {
                id: a.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
kg.displayName = ro;
var Pg = "TooltipArrow",
  EE = w.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = vc(n);
    return wE(Pg, n).isInside ? null : g.jsx(fE, { ...o, ...r, ref: t });
  });
EE.displayName = Pg;
function bE(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function CE(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function kE(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function NE(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const l = t[s],
      a = t[i],
      u = l.x,
      d = l.y,
      c = a.x,
      h = a.y;
    d > r != h > r && n < ((c - u) * (r - d)) / (h - d) + u && (o = !o);
  }
  return o;
}
function PE(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    TE(t)
  );
}
function TE(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2;) {
      const s = t[t.length - 1],
        i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2;) {
      const s = n[n.length - 1],
        i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var RE = bg,
  Tg = kg;
const _E = RE,
  jE = w.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    g.jsx(Tg, {
      ref: r,
      sideOffset: t,
      className: dr(

        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...n,
    }),
  );
jE.displayName = Tg.displayName;
const OE =
  "" + "./assets/mario-banner-B8vN95hX.jpg",
  ME = ({ label: e, studentName: t }) =>
    g.jsx("div", {
      className: "video-placeholder group",
      children: g.jsxs("div", {
        className: "flex flex-col items-center gap-2 p-6 text-center",
        children: [
          g.jsx("div", {
            className:
              "w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center",
            children: g.jsx(l1, { className: "w-7 h-7 text-primary" }),
          }),
          g.jsx("p", {
            className: "font-semibold text-foreground",
            children: e,
          }),
          t && g.jsx("p", { className: "text-sm", children: t }),
          g.jsx("p", {
            className: "text-xs uppercase tracking-wider",
            children: "Video coming soon",
          }),
        ],
      }),
    }),
  $s = ({ title: e, number: t, tag: n, children: r, id: o }) =>
    g.jsxs("article", {
      id: o,
      className:
        "bg-card rounded-2xl border-2 border-border p-6 md:p-10 pixel-shadow scroll-mt-24",
      children: [
        g.jsxs("header", {
          className: "mb-6 flex flex-wrap items-center gap-3",
          children: [
            g.jsx("span", {
              className:
                "inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold",
              children: t,
            }),
            g.jsx("span", {
              className:
                "text-xs uppercase tracking-widest font-bold text-secondary",
              children: n,
            }),
            g.jsx("h2", {
              className:
                "w-full text-3xl md:text-4xl font-bold text-foreground mt-2",
              children: e,
            }),
          ],
        }),
        g.jsx("div", {
          className:
            "space-y-6 text-base md:text-lg leading-relaxed text-foreground/90",
          children: r,
        }),
      ],
    }),
  xf = ({ studentName: e, caption: t }) =>
    g.jsxs("figure", {
      className: "space-y-2",
      children: [
        g.jsxs("div", {
          className:
            "relative aspect-square rounded-xl border-4 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center text-muted-foreground overflow-hidden",
          children: [
            g.jsx(s1, { className: "w-10 h-10 mb-2" }),
            g.jsx("p", {
              className: "text-sm font-semibold",
              children: "Edited image",
            }),
            g.jsx("p", { className: "text-xs", children: "with watermark" }),
            g.jsxs("span", {
              className:
                "absolute bottom-2 right-2 text-[10px] font-bold text-foreground/30 rotate-[-15deg] border border-foreground/20 px-2 py-0.5 rounded",
              children: ["© ", e],
            }),
          ],
        }),
        g.jsx("figcaption", {
          className: "text-sm text-center text-muted-foreground",
          children: t ?? e,
        }),
      ],
    }),
  AE = [
    "MARIO",
    "LUIGI",
    "YOSHI",
    "TOAD",
    "BOWSER",
    "PEACH",
    "DAISY",
    "GOOMBA",
    "KOOPA",
    "MUSHROOM",
    "COIN",
    "STAR",
    "FLOWER",
    "CASTLE",
    "PIPE",
    "GALAXY",
    "WARIO",
    "WALUIGI",
    "ROSALINA",
    "CAPPY",
    "PAULINE",
    "SHELL",
    "BLOCK",
    "LAKITU",
    "CHOMP",
    "BULLET",
    "BOO",
    "FIRE",
    "ICE",
    "KINGDOM",
    "PLANT",
    "JUMP",
    "WORLD",
    "KART",
    "RACE",

    "NINTENDO",
    "SWITCH",
    "ODYSSEY",
    "WONDER",
    "TANUKI",
    "BEE",
    "GLACIER",
    "DESERT",
    "FOREST",
    "BEACH",
    "BANZAI",
    "PIRANHA",
    "MAGIKOOPA",
    "DRYBONES",
    "CHEEP",
  ],
  wf = [
    {
      key: "easy",
      label: "Easy",
      emoji: "🍄",
      size: 8,
      count: 5,
      dirs: 2,
      minLen: 4,
      maxLen: 6,
      reward: 10,
      accent: "bg-red-500",
    },
    {
      key: "normal",
      label: "Normal",
      emoji: "🪙",
      size: 10,
      count: 7,
      dirs: 3,
      minLen: 4,
      maxLen: 8,
      reward: 20,
      accent: "bg-yellow-500",
    },
    {
      key: "hard",
      label: "Hard",
      emoji: "⭐",
      size: 12,
      count: 9,
      dirs: 4,
      minLen: 4,
      maxLen: 9,
      reward: 30,
      accent: "bg-blue-500",
    },
    {
      key: "extreme",
      label: "Extreme",
      emoji: "🔥",
      size: 14,
      count: 12,
      dirs: 8,
      minLen: 4,
      maxLen: 10,
      reward: 50,
      accent: "bg-orange-500",
    },
    {
      key: "imp1",
      label: "Impossible 1",
      emoji: "💀",
      size: 16,
      count: 15,
      dirs: 8,
      minLen: 4,
      maxLen: 10,
      reward: 100,
      unlockCost: 100,
      accent: "bg-purple-600",
    },
    {
      key: "imp2",
      label: "Impossible 2",
      emoji: "☠️",
      size: 18,
      count: 20,
      dirs: 8,
      minLen: 4,
      maxLen: 12,
      reward: 250,
      unlockCost: 200,
      accent: "bg-pink-600",
    },
    {
      key: "imp3",
      label: "Impossible 3",
      emoji: "👑",
      size: 20,
      count: 25,
      dirs: 8,
      minLen: 4,
      maxLen: 14,
      reward: 500,
      unlockCost: 500,
      accent: "bg-amber-500",
    },
  ],
  Rg = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
    [0, -1],
    [-1, 0],
    [-1, -1],
    [-1, 1],
  ];
function LE(e) {
  const t = [...e];
  for (let n = t.length - 1; n > 0; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [t[n], t[r]] = [t[r], t[n]];
  }
  return t;
}
function IE(e) {
  const t = AE.filter(
    (n) => n.length >= e.minLen && n.length <= Math.min(e.maxLen, e.size),
  );
  return LE(t).slice(0, e.count);
}
function DE(e) {
  const t = e.size,
    n = Rg.slice(0, e.dirs),
    r = Array.from({ length: t }, () => Array.from({ length: t }, () => "")),
    o = [],
    s = IE(e);
  for (const l of s) {
    let a = !1;
    for (let u = 0; u < 200 && !a; u++) {
      const [d, c] = n[Math.floor(Math.random() * n.length)],
        h = Math.floor(Math.random() * t),
        f = Math.floor(Math.random() * t),
        S = h + d * (l.length - 1),
        y = f + c * (l.length - 1);
      if (S < 0 || S >= t || y < 0 || y >= t) continue;
      let x = !0;
      const m = [];
      for (let p = 0; p < l.length; p++) {
        const v = h + d * p,
          E = f + c * p,
          b = r[v][E];
        if (b && b !== l[p]) {
          x = !1;
          break;
        }
        m.push({ r: v, c: E });
      }
      x &&
        (m.forEach((p, v) => {
          r[p.r][p.c] = l[v];
        }),
          o.push({ word: l, cells: m }),
          (a = !0));
    }
  }
  const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let l = 0; l < t; l++)
    for (let a = 0; a < t; a++)
      r[l][a] || (r[l][a] = i[Math.floor(Math.random() * 26)]);
  return { grid: r, words: o };
}
const Ql = (e, t) => `${e}-${t}`;
function FE(e, t, n) {
  const r = Math.sign(t.r - e.r),
    o = Math.sign(t.c - e.c),
    s = Math.abs(t.r - e.r),
    i = Math.abs(t.c - e.c);
  if (s !== 0 && i !== 0 && s !== i) return null;
  if (r === 0 && o === 0) return [e];
  if (!Rg.some(([c, h]) => c === r && h === o)) return null;
  const u = Math.max(s, i) + 1,
    d = [];

  for (let c = 0; c < u; c++) d.push({ r: e.r + r * c, c: e.c + o * c });
  return d;
}
const _g = "mario_word_points",
  jg = "mario_word_unlocked_v2";
function zE() {
  try {
    return Number(localStorage.getItem(_g)) || 0;
  } catch {
    return 0;
  }
}
function $E() {
  try {
    return JSON.parse(localStorage.getItem(jg) || "[]");
  } catch {
    return [];
  }
}
const BE = () => {
  const [e, t] = w.useState(() => zE()),
    [n, r] = w.useState(() => $E()),
    [o, s] = w.useState(null),
    [i, l] = w.useState(0),
    [a, u] = w.useState(null);
  (w.useEffect(() => {
    localStorage.setItem(_g, String(e));
  }, [e]),
    w.useEffect(() => {
      localStorage.setItem(jg, JSON.stringify(n));
    }, [n]));
  const d = w.useMemo(() => wf.find((C) => C.key === o) ?? null, [o]),
    c = w.useMemo(() => (d ? DE(d) : null), [d, i]),
    [h, f] = w.useState(null),
    [S, y] = w.useState(new Set()),
    [x, m] = w.useState(new Set()),
    p = w.useRef(!1),
    v = () => {
      (l((C) => C + 1),
        f(null),
        y(new Set()),
        m(new Set()),
        (p.current = !1));
    };
  w.useEffect(() => {
    v();
  }, [o]);
  const E = !!c && c.words.length > 0 && x.size === c.words.length;
  w.useEffect(() => {
    if (!E || !d || p.current) return;
    ((p.current = !0), t(($) => $ + d.reward), b(`+${d.reward} Points! ⭐`));
    const C = setTimeout(() => v(), 2e3);
    return () => clearTimeout(C);
  }, [E]);
  const b = (C) => {
    (u(C), setTimeout(() => u(null), 1400));
  },
    k = (C, $) => f([{ r: C, c: $ }]),
    P = (C, $) => {
      if (!h || !d) return;
      const N = FE(h[0], { r: C, c: $ }, d.dirs);
      N && f(N);
    },
    A = () => {
      if (!h || !c || !d) {
        f(null);
        return;
      }
      if (h.length < 2) {
        f(null);
        return;
      }
      const C = h.map((W) => c.grid[W.r][W.c]).join(""),
        $ = [...C].reverse().join(""),
        N = c.words.find(
          (W) => !x.has(W.word) && (W.word === C || W.word === $),
        );
      (N &&
        (m((W) => new Set(W).add(N.word)),
          y((W) => {
            const H = new Set(W);
            return (N.cells.forEach((Q) => H.add(Ql(Q.r, Q.c))), H);
          }),
          b(`${N.word}! ⭐`)),
        f(null));
    },
    B = new Set((h == null ? void 0 : h.map((C) => Ql(C.r, C.c))) ?? []),
    O = (C) => {
      C.unlockCost &&
        (n.includes(C.key) ||
          e < C.unlockCost ||
          (t(($) => $ - C.unlockCost),
            r(($) => [...$, C.key]),
            b(`${C.label} unlocked! ${C.emoji}`)));
    },
    L = (C) => !C.unlockCost || n.includes(C.key);
  return !d || !c
    ? g.jsxs("div", {
      className: "relative mario-panel p-5 md:p-8 overflow-hidden",
      children: [
        g.jsx("div", {
          className:
            "absolute inset-0 mario-sky opacity-30 pointer-events-none rounded-[10px]",
        }),
        g.jsx(Sf, { points: e }),
        g.jsxs("div", {
          className: "relative",
          children: [
            g.jsx("h3", {
              className:
                "font-pixel text-lg md:text-2xl mb-1 text-[#5a2a00] drop-shadow-[2px_2px_0_#fff]",
              children: "MARIO WORD SEARCH",
            }),
            g.jsx("p", {
              className: "text-sm text-[#5a2a00]/80 mb-6 font-semibold",
              children:
                "Pick a difficulty. Collect 🪙 coins and unlock the impossible worlds.",
            }),
            g.jsx("div", {
              className:
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
              children: wf.map((C) => {
                const $ = L(C),
                  N = !!C.unlockCost && !$ && e >= C.unlockCost;
                return g.jsxs(
                  "div",
                  {
                    className:

                      "relative rounded-xl p-4 bg-gradient-to-b from-[#FFF6DD] to-[#F4D88A] border-4 border-[#8B5A00] shadow-[0_5px_0_#5a3a00] transition-all hover:-translate-y-0.5",
                    children: [
                      g.jsxs("div", {
                        className: "flex items-center gap-3 mb-3",
                        children: [
                          g.jsx("span", {
                            className: `w-12 h-12 rounded-lg ${C.accent} grid place-items-center text-2xl border-2 border-black/30 shadow-[inset_0_-3px_0_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.45)]`,
                            children: C.emoji,
                          }),
                          g.jsxs("div", {
                            children: [
                              g.jsx("p", {
                                className:
                                  "font-pixel text-[11px] leading-tight text-[#5a2a00]",
                                children: C.label,
                              }),
                              g.jsxs("p", {
                                className:
                                  "text-xs text-[#5a2a00]/70 font-bold mt-1",
                                children: [
                                  C.size,
                                  "×",
                                  C.size,
                                  " · ",
                                  C.count,
                                  " words",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      g.jsxs("p", {
                        className: "text-xs text-[#5a2a00] mb-3 font-bold",
                        children: [
                          "Reward: ",
                          g.jsxs("span", {
                            className:
                              "font-pixel text-[10px] text-[#B86800]",
                            children: ["+", C.reward],
                          }),
                          " 🪙",
                        ],
                      }),
                      $
                        ? g.jsx("button", {
                          onClick: () => s(C.key),
                          className: `w-full py-2 rounded-lg font-pixel text-[11px] text-white ${C.accent} hover:brightness-110 transition border-2 border-black/40 shadow-[0_3px_0_rgba(0,0,0,0.45),inset_0_2px_0_rgba(255,255,255,0.35)] active:translate-y-0.5 active:shadow-none`,
                          children: "PLAY",
                        })
                        : g.jsxs("button", {
                          onClick: () => O(C),
                          disabled: !N,
                          className: `w-full py-2 rounded-lg font-pixel text-[10px] border-2 transition flex items-center justify-center gap-2 ${N ? "bg-[#F8B800] border-[#8B5A00] text-[#5a2a00] hover:brightness-110 shadow-[0_3px_0_#5a3a00,inset_0_2px_0_rgba(255,255,255,0.5)] active:translate-y-0.5 active:shadow-none" : "bg-[#cfc7b0] border-[#8B5A00]/50 text-[#5a2a00]/50 cursor-not-allowed"}`,
                          children: [
                            g.jsx(i1, { className: "w-3.5 h-3.5" }),
                            C.unlockCost,
                            " 🪙",
                          ],
                        }),
                    ],
                  },
                  C.key,
                );
              }),
            }),
          ],
        }),
        g.jsx(Ef, { msg: a }),
      ],
    })
    : g.jsxs("div", {
      className: "relative mario-panel p-4 md:p-6 overflow-hidden",
      children: [
        g.jsx("div", {
          className:
            "absolute inset-0 mario-sky opacity-25 pointer-events-none rounded-[10px]",
        }),
        g.jsx(Sf, {
          points: e,
          children: g.jsxs("button", {
            onClick: v,

            className: "p-1.5 rounded-lg bg-[#F8B800] border-2 border-[#8B5A00] text-[#5a2a00] hover:brightness-110 shadow-[0_2px_0_#5a3a00] active:translate-y-0.5 active:shadow-none flex items-center gap-1.5 px-2 font-pixel text-[10px]",
            "aria-label": "New board",
            children: [g.jsx(Bm, { className: "w-3 h-3" }), " RESET"],
          }),
        }),
        g.jsxs("div", {
          className:
            "relative flex flex-wrap items-center justify-between gap-3 mb-4",
          children: [
            g.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                g.jsx("button", {
                  onClick: () => s(null),
                  className:
                    "p-2 rounded-lg bg-[#F8B800] border-2 border-[#8B5A00] text-[#5a2a00] hover:brightness-110 shadow-[0_3px_0_#5a3a00] active:translate-y-0.5 active:shadow-none",
                  "aria-label": "Back to menu",
                  children: g.jsx(r1, { className: "w-4 h-4" }),
                }),
                g.jsxs("div", {
                  children: [
                    g.jsxs("h3", {
                      className:
                        "font-pixel text-[11px] md:text-sm flex items-center gap-2 text-[#5a2a00] drop-shadow-[1px_1px_0_#fff]",
                      children: [
                        g.jsx("span", {
                          className: `w-9 h-9 rounded-md ${d.accent} grid place-items-center text-base border-2 border-black/30 shadow-[inset_0_-2px_0_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.4)]`,
                          children: d.emoji,
                        }),
                        "WORD SEARCH · ",
                        d.label.toUpperCase(),
                      ],
                    }),
                    g.jsxs("p", {
                      className:
                        "text-xs text-[#5a2a00]/80 font-semibold mt-1",
                      children: [
                        "Drag to select. Reward: ",
                        g.jsxs("span", {
                          className:
                            "font-pixel text-[10px] text-[#B86800]",
                          children: ["+", d.reward],
                        }),
                        " 🪙",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        E &&
        g.jsxs("div", {
          className:
            "relative mb-4 flex items-center gap-2 rounded-lg bg-[#F8B800] border-2 border-[#8B5A00] text-[#5a2a00] px-3 py-2 text-xs font-pixel shadow-[0_3px_0_#5a3a00] animate-fade-in",
          children: [
            g.jsx(Um, { className: "w-4 h-4" }),
            " COMPLETED! NEW BOARD…",
          ],
        }),
        g.jsxs("div", {
          className:
            "relative grid lg:grid-cols-[1fr_auto] gap-2 items-start",
          children: [
            g.jsx("div", {
              className: "overflow-auto flex justify-center w-full",
              children: g.jsx("div", {
                className:
                  "select-none touch-none inline-grid mx-auto rounded-xl p-3 mario-brick border-4 border-[#5a1f00] shadow-[0_5px_0_#3a1500,inset_0_0_0_3px_rgba(0,0,0,0.25)]",
                style: {
                  gridTemplateColumns: `repeat(${c.grid.length}, minmax(0, 1fr))`,
                },
                onMouseLeave: () => f(null),
                onMouseUp: A,
                onTouchEnd: A,
                children: c.grid.map((C, $) =>
                  C.map((N, W) => {
                    const H = Ql($, W),
                      Q = S.has(H),
                      T = B.has(H),
                      R =
                        d.size <= 10
                          ? "w-9 sm:w-10 md:w-11 text-sm md:text-base"
                          : d.size <= 14
                            ? "w-7 sm:w-8 text-xs sm:text-sm"
                            : d.size <= 18
                              ? "w-6 sm:w-7 text-[10px] sm:text-xs"
                              : "w-5 sm:w-6 text-[10px]";

                    return g.jsx(
                      "button",
                      {
                        onMouseDown: () => k($, W),
                        onMouseEnter: () => P($, W),
                        onTouchStart: () => k($, W),
                        onTouchMove: (M) => {
                          var U;
                          const D = M.touches[0],
                            _ = document.elementFromPoint(
                              D.clientX,
                              D.clientY,
                            ),
                            F =
                              (U = _ == null ? void 0 : _.dataset) == null
                                ? void 0
                                : U.cell;
                          if (F) {
                            const [Z, te] = F.split("-").map(Number);
                            P(Z, te);
                          }
                        },
                        "data-cell": `${$}-${W}`,
                        className: `aspect-square ${R} grid place-items-center font-pixel rounded-md m-[2px] transition-all duration-100 mario-tile ${Q ? "mario-tile-found" : T ? "mario-tile-sel" : ""}`,
                        children: N,
                      },
                      H,
                    );
                  }),
                ),
              }),
            }),
            g.jsxs("div", {
              className:
                "lg:w-56 rounded-xl p-4 bg-gradient-to-b from-[#FFF6DD] to-[#F4D88A] border-4 border-[#8B5A00] shadow-[0_4px_0_#5a3a00]",
              children: [
                g.jsxs("p", {
                  className: "font-pixel text-[10px] text-[#5a2a00] mb-3",
                  children: ["WORDS · ", x.size, "/", c.words.length],
                }),
                g.jsx("ul", {
                  className:
                    "grid grid-cols-2 lg:grid-cols-1 gap-1.5 text-sm",
                  children: c.words.map(({ word: C }) => {
                    const $ = x.has(C);
                    return g.jsxs(
                      "li",
                      {
                        className: `font-pixel text-[10px] transition-all duration-300 flex items-center gap-1.5 ${$ ? "line-through text-[#5a2a00]/40 opacity-60" : "text-[#5a2a00]"}`,
                        children: [
                          g.jsx("span", {
                            className: `inline-block w-2 h-2 rounded-full ${$ ? "bg-green-500" : "bg-[#8B5A00]/40"}`,
                          }),
                          C,
                        ],
                      },
                      C,
                    );
                  }),
                }),
              ],
            }),
          ],
        }),
        g.jsx(Ef, { msg: a }),
      ],
    });
},
  Sf = ({ points: e, children: t }) =>
    g.jsxs("div", {
      className: "absolute top-3 right-3 z-20 flex items-center gap-2",
      children: [
        t,
        g.jsxs("div", {
          className:
            "flex items-center gap-2 mario-wallet font-pixel text-[11px] px-3 py-1.5 rounded-full",
          children: [
            g.jsx("span", {
              className:
                "inline-block w-4 h-4 rounded-full mario-coin animate-coin-spin",
            }),
            g.jsx("span", { className: "tabular-nums text-[#5a2a00]", children: e }),
          ],
        }),
      ],
    }),
  Ef = ({ msg: e }) =>
    e
      ? g.jsx("div", {
        className:
          "pointer-events-none fixed inset-0 z-50 grid place-items-center",
        children: g.jsx("div", {
          className:
            "px-6 py-4 rounded-2xl bg-[#E63946] text-white text-base md:text-2xl font-pixel shadow-[0_8px_0_#7a0010] border-4 border-[#FFD24A] animate-mario-bounce",
          children: e,
        }),
      })
      : null,
  UE =
    "" + "./assets/diff-scene-1-CKyuG_6W.jpg",
  WE =
    "" + "./assets/diff-scene-2-ZNbipYW0.jpg",
  VE =
    "" + "./assets/diff-scene-3-BMnaNcRm.jpg",
  HE =
    "" + "./assets/diff-scene-4-5418mqE6.jpg",
  QE =
    "" +

    "./assets/diff-scene-1-mod-BZvgwxdn.jpg",
  YE =
    "" +
    "./assets/diff-scene-2-mod-C3r8dJei.jpg",
  KE =
    "" +
    "./assets/diff-scene-3-mod-BzXrKVz0.jpg",
  GE =
    "" +
    "./assets/diff-scene-4-mod-BWaD_RrF.jpg",
  Yl = {
    easy: { label: "Easy", emoji: "🍄", accent: "bg-red-500", hitScale: 1.2, ringSize: 62, reward: 30, count: 5 },
    medium: { label: "Medium", emoji: "🪙", accent: "bg-yellow-500", hitScale: 1.1, ringSize: 52, reward: 50, count: 5 },
    hard: { label: "Hard", emoji: "⭐", accent: "bg-orange-500", hitScale: 1.0, ringSize: 44, reward: 100, unlockCost: 100, count: 5 },
    impossible: { label: "Impossible", emoji: "💀", accent: "bg-purple-600", hitScale: 1.0, ringSize: 38, reward: 200, unlockCost: 200, count: 5 },
    impossible2: { label: "Impossible 2", emoji: "☠️", accent: "bg-fuchsia-700", hitScale: 1.0, ringSize: 38, reward: 300, unlockCost: 400, count: 11 },
  },
  XE = {
    easy: {
      original: UE,
      modified: QE,
      label: "Mushroom Kingdom",
      diffs: [
        { x: 16.5, y: 13, radiusX: 12, radiusY: 8 },
        { x: 61, y: 61, radiusX: 17, radiusY: 18 },
        { x: 43, y: 86.5, radiusX: 6, radiusY: 8 },
        { x: 70, y: 86, radiusX: 20, radiusY: 8 },
        { x: 17.5, y: 72, radiusX: 5, radiusY: 7 },
      ],
    },
    medium: {
      original: WE,
      modified: YE,
      label: "Underground Cave",
      diffs: [
        { x: 19, y: 25.5, radiusX: 10, radiusY: 11 },
        { x: 9.5, y: 68, radiusX: 5, radiusY: 10 },
        { x: 45, y: 45, radiusX: 4, radiusY: 7 },
        { x: 53, y: 45, radiusX: 4, radiusY: 7 },
        { x: 19.5, y: 86, radiusX: 6, radiusY: 6 },
      ],
    },
    hard: {
      original: VE,
      modified: KE,
      label: "Peach's Castle",
      diffs: [
        { x: 15.5, y: 28, radiusX: 5, radiusY: 6 },
        { x: 32, y: 18, radiusX: 4, radiusY: 8 },
        { x: 63, y: 18, radiusX: 6, radiusY: 14 },
        { x: 82, y: 17, radiusX: 6, radiusY: 12 },
        { x: 46, y: 58, radiusX: 4, radiusY: 7 },
      ],
    },
    impossible: {
      original: HE,
      modified: GE,
      label: "Bowser's Castle",
      diffs: [
        { x: 15.5, y: 85, radiusX: 3, radiusY: 4 },
        { x: 32.3, y: 92, radiusX: 3, radiusY: 3 },
        { x: 65, y: 91, radiusX: 3, radiusY: 4 },
        { x: 77, y: 79.5, radiusX: 4, radiusY: 6 },
        { x: 94.4, y: 87.5, radiusX: 3, radiusY: 4 },
      ],
    },
    impossible2: {
      original: "./assets/encunetra_la_diferencia_mario.png",
      modified: "./assets/encuentra_las_diferencias_solucion.png",
      label: "Custom Impossible Level",
      diffs: [
        { x: 25, y: 55, radiusX: 6, radiusY: 6 }, // Gorro
        { x: 25, y: 75, radiusX: 6, radiusY: 6 }, // Traje
        { x: 55, y: 75, radiusX: 6, radiusY: 6 }, // Hongo azul 1
        { x: 65, y: 85, radiusX: 6, radiusY: 6 }, // Hongo azul 2
        { x: 45, y: 65, radiusX: 6, radiusY: 6 }, // Tuberia morada 1
        { x: 65, y: 65, radiusX: 6, radiusY: 6 }, // Tuberia morada 2
        { x: 65, y: 45, radiusX: 6, radiusY: 6 }, // Cubo ? gris
        { x: 75, y: 45, radiusX: 6, radiusY: 6 }, // Cubo agrietado
        { x: 95, y: 65, radiusX: 6, radiusY: 6 }, // Planta carnivora desaparecida
        { x: 65, y: 5, radiusX: 6, radiusY: 6 }, // Bandera negra
        { x: 85, y: 5, radiusX: 6, radiusY: 6 }, // Moneda faltante
      ],
    },
  },
  qE = () => {
    const [pts, setPts] = w.useState(() => { try { return Number(localStorage.getItem("mario_diff_points")) || 0; } catch { return 0; } }),
      [unlocked, setUnlocked] = w.useState(() => {
        try { return JSON.parse(localStorage.getItem("mario_diff_unlocked_v2") || '["easy", "medium"]'); } catch { return ["easy", "medium"]; }
      }),
      [e, t] = w.useState(null),
      [n, r] = w.useState([]),
      [o, s] = w.useState([]),
      i = e ? XE[e] : null,
      l = e ? Yl[e] : null,
      a = e && n.length === (i ? i.diffs.length : 0),
      u = (c = e) => {
        (t(c), r([]), s([]));
      },
      d = (c) => {
        if (!i || !l || a) return;
        const h = c.currentTarget.getBoundingClientRect(),
          f = ((c.clientX - h.left) / h.width) * 100,
          S = ((c.clientY - h.top) / h.height) * 100,
          y = i.diffs.findIndex((x, m) => {
            if (n.some((E) => E.index === m)) return !1;
            const p = (f - x.x) / (x.radiusX * l.hitScale),
              v = (S - x.y) / (x.radiusY * l.hitScale);
            return p * p + v * v <= 1;
          });
        if (y !== -1) r((x) => [...x, { index: y, x: f, y: S }]);
        else {
          const x = Date.now();
          (s((m) => [...m, { x: f, y: S, id: x }]),
            setTimeout(() => s((m) => m.filter((p) => p.id !== x)), 700));
        }
      };
    w.useEffect(() => {
      localStorage.setItem("mario_diff_unlocked_v2", JSON.stringify(unlocked));
    }, [unlocked]);
    w.useEffect(() => {
      if (a && e) {
        setPts(p => {
          const np = p + (Yl[e].reward || 0);
          localStorage.setItem("mario_diff_points", String(np));
          return np;
        });
      }
    }, [a, e]);
    return !e ? g.jsxs("div", {
      className: "relative mario-panel p-5 md:p-8 overflow-hidden my-10 max-w-5xl mx-auto",

      children: [
        g.jsx("div", { className: "absolute inset-0 mario-sky opacity-30 pointer-events-none rounded-[10px]" }),
        g.jsx(Sf, { points: pts }),
        g.jsxs("div", {
          className: "relative",
          children: [
            g.jsx("h3", { className: "font-pixel text-lg md:text-2xl mb-1 text-[#5a2a00] drop-shadow-[2px_2px_0_#fff]", children: "SPOT THE 5 DIFFERENCES" }),
            g.jsx("p", { className: "text-sm text-[#5a2a00]/80 mb-6 font-semibold", children: "Compare the two images. Click on the right one." }),
            g.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
              children: Object.keys(Yl).map((c) => {
                const conf = Yl[c];
                const isUnlocked = unlocked.includes(c) || !conf.unlockCost;
                const canAfford = pts >= (conf.unlockCost || 0);
                return g.jsxs("div", {
                  className: "relative rounded-xl p-4 bg-gradient-to-b from-[#FFF6DD] to-[#F4D88A] border-4 border-[#8B5A00] shadow-[0_5px_0_#5a3a00] transition-all hover:-translate-y-0.5",
                  children: [
                    g.jsxs("div", {
                      className: "flex items-center gap-3 mb-3",
                      children: [
                        g.jsx("span", { className: `w-12 h-12 rounded-lg ${conf.accent} grid place-items-center text-2xl border-2 border-black/30 shadow-[inset_0_-3px_0_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.45)]`, children: conf.emoji }),
                        g.jsxs("div", {
                          children: [
                            g.jsx("p", { className: "font-pixel text-[11px] leading-tight text-[#5a2a00]", children: conf.label }),
                            g.jsxs("p", { className: "text-xs text-[#5a2a00]/70 font-bold mt-1", children: [`${conf.count} differences`] }),
                          ]
                        })
                      ]
                    }),
                    g.jsxs("p", {
                      className: "text-xs text-[#5a2a00] mb-3 font-bold",
                      children: ["Reward: ", g.jsxs("span", { className: "font-pixel text-[10px] text-[#B86800]", children: ["+", conf.reward] }), " 🪙"]
                    }),
                    isUnlocked ? g.jsx("button", {
                      onClick: () => u(c),
                      className: `w-full py-2 rounded-lg font-pixel text-[11px] text-white ${conf.accent} hover:brightness-110 transition border-2 border-black/40 shadow-[0_3px_0_rgba(0,0,0,0.45),inset_0_2px_0_rgba(255,255,255,0.35)] active:translate-y-0.5 active:shadow-none`,
                      children: "PLAY"
                    }) : g.jsxs("button", {
                      onClick: () => {
                        if (canAfford) {
                          setPts(p => {
                            const np = p - conf.unlockCost;
                            localStorage.setItem("mario_diff_points", String(np));
                            return np;
                          });
                          setUnlocked(prev => [...prev, c]);
                        }
                      },
                      disabled: !canAfford,
                      className: `w-full py-2 rounded-lg font-pixel text-[10px] border-2 transition flex items-center justify-center gap-2 ${canAfford ? "bg-[#F8B800] border-[#8B5A00] text-[#5a2a00] hover:brightness-110 shadow-[0_3px_0_#5a3a00,inset_0_2px_0_rgba(255,255,255,0.5)] active:translate-y-0.5 active:shadow-none" : "bg-[#cfc7b0] border-[#8B5A00]/50 text-[#5a2a00]/50 cursor-not-allowed"}`,
                      children: [g.jsx(i1, { className: "w-3.5 h-3.5" }), conf.unlockCost, " 🪙"]
                    })
                  ]
                }, c);
              })
            })
          ]
        })
      ]
    }) : g.jsxs("div", {
      className: "relative mario-panel p-4 md:p-6 overflow-hidden my-10 max-w-5xl mx-auto",
      children: [
        g.jsx("div", { className: "absolute inset-0 mario-sky opacity-25 pointer-events-none rounded-[10px]" }),
        g.jsx(Sf, {
          points: pts,
          children: g.jsxs("button", {
            onClick: () => u(e),

            className: "p-1.5 rounded-lg bg-[#F8B800] border-2 border-[#8B5A00] text-[#5a2a00] hover:brightness-110 shadow-[0_2px_0_#5a3a00] active:translate-y-0.5 active:shadow-none flex items-center gap-1.5 px-2 font-pixel text-[10px]",
            "aria-label": "Restart",
            children: [g.jsx(Bm, { className: "w-3 h-3" }), " RESTART"]
          })
        }),
        g.jsxs("div", {
          className: "relative flex flex-wrap items-center justify-between gap-3 mb-4",
          children: [
            g.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                g.jsx("button", {
                  onClick: () => t(null),
                  className: "p-2 rounded-lg bg-[#F8B800] border-2 border-[#8B5A00] text-[#5a2a00] hover:brightness-110 shadow-[0_3px_0_#5a3a00] active:translate-y-0.5 active:shadow-none",
                  "aria-label": "Back to menu",
                  children: g.jsx(r1, { className: "w-4 h-4" })
                }),
                g.jsxs("div", {
                  children: [
                    g.jsxs("h3", {
                      className: "font-pixel text-[11px] md:text-sm flex items-center gap-2 text-[#5a2a00] drop-shadow-[1px_1px_0_#fff]",
                      children: [
                        g.jsx("span", { className: `w-9 h-9 rounded-md ${l.accent} grid place-items-center text-base border-2 border-black/30 shadow-[inset_0_-2px_0_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.4)]`, children: l.emoji }),
                        "SPOT THE DIFFERENCES · ", l.label.toUpperCase()
                      ]
                    }),
                    g.jsxs("p", {
                      className: "text-xs text-[#5a2a00]/80 font-semibold mt-1",
                      children: ["Reward: ", g.jsxs("span", { className: "font-pixel text-[10px] text-[#B86800]", children: ["+", l.reward] }), " 🪙"]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        a && g.jsxs("div", {
          className: "relative mb-4 flex items-center gap-2 rounded-lg bg-[#F8B800] border-2 border-[#8B5A00] text-[#5a2a00] px-3 py-2 text-xs font-pixel shadow-[0_3px_0_#5a3a00] animate-fade-in",
          children: [g.jsx(Um, { className: "w-4 h-4" }), ` EXCELLENT! YOU FOUND ALL ${l.count}.`]
        }),
        g.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-5",
          children: [
            g.jsxs("figure", {
              children: [
                g.jsx("div", {
                  className:
                    "relative rounded-2xl overflow-hidden border-4 border-foreground/80 shadow-[0_8px_0_hsl(var(--foreground))]",
                  children: g.jsx("img", {
                    src: i.original,
                    alt: "Original Mario scene",
                    loading: "lazy",
                    className: "block w-full h-auto",
                  }),
                }),
                g.jsx("figcaption", {
                  className:
                    "text-xs text-center mt-3 font-pixel text-muted-foreground uppercase",
                  children: "Original",
                }),
              ],
            }),
            g.jsxs("figure", {
              children: [
                g.jsxs("div", {
                  className:
                    "relative rounded-2xl overflow-hidden border-4 border-foreground/80 shadow-[0_8px_0_hsl(var(--foreground))] cursor-crosshair transition-all hover:brightness-105",
                  onClick: d,
                  children: [
                    g.jsx("img", {
                      src: i.modified,
                      alt: "Modified Mario scene with 5 differences",
                      loading: "lazy",
                      className:
                        "block w-full h-auto select-none pointer-events-none",
                      draggable: !1,
                    }),
                    n.map((c) => {
                      const h = i.diffs[c.index];
                      return g.jsx(
                        "span",
                        {
                          className:
                            "absolute pointer-events-none rounded-full border-[3px] border-[#32CD32] bg-[#32CD32]/30 grid place-items-center shadow-[0_0_12px_rgba(50,205,50,0.5)] transition-all duration-300",
                          style: {
                            left: `${h.x}%`,
                            top: `${h.y}%`,
                            width: l.ringSize,
                            height: l.ringSize,
                            transform: "translate(-50%, -50%)",
                          },
                          children: g.jsx(o1, {
                            className: "w-[60%] h-[60%] text-[#32CD32] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]",
                            strokeWidth: 3,
                          }),
                        },
                        `f-${c.index}`,
                      );
                    }),
                    o.map((c) =>
                      g.jsx(
                        "span",
                        {
                          className:
                            "absolute pointer-events-none rounded-full border-4 border-red-500 bg-red-500/20 animate-ping",
                          style: {
                            left: `${c.x}%`,
                            top: `${c.y}%`,
                            width: 36,
                            height: 36,
                            transform: "translate(-50%, -50%)",
                          },
                        },
                        c.id,
                      ),
                    ),
                  ],
                }),
                g.jsxs("figcaption", {
                  className:
                    "text-xs text-center mt-3 font-pixel text-muted-foreground uppercase",
                  children: [
                    "Find the differences (",
                    n.length,
                    "/",
                    i.diffs.length,
                    ")",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Kl = [
    { name: "mushroom", src: "./iconos/champinon.png" },
    { name: "leaf", src: "./iconos/flor.png" },
    { name: "star", src: "./iconos/estrella.png" },
    { name: "coin", src: "./iconos/moneda.png" },
    { name: "egg", src: "./iconos/huevo.png" },
    { name: "block", src: "./iconos/cuadrado.png" },
    { name: "plant", src: "./iconos/planta.png" },
    { name: "shell", src: "./iconos/caparazon.png" },
  ],
  ZE = "./iconos/combo_especial_bomba.mp4",
  JE = "./iconos/super_estrella_especial.mp4",
  eb = {
    easy: "./iconos/tablero.mp4",
    medium: "./iconos/tablero.mp4",
    hard: "./iconos/tablero.mp4",
    impossible: "./iconos/tablero.mp4",
  };
let oe = 8;
const xr = {
  easy: {
    moves: 40,
    types: 5,
    goals: 2,
    goalCount: 20,
    label: "Easy",
    emoji: "🍄",
    accent: "bg-red-500",
    size: 8,
    reward: 30,
  },
  medium: {
    moves: 30,
    types: 7,
    goals: 3,
    goalCount: 20,
    goalCounts: [20, 20, 20],
    label: "Medium",
    emoji: "🪙",
    accent: "bg-yellow-500",
    size: 8,
    reward: 50,
  },
  hard: {
    moves: 20,
    types: 7,
    goals: 5,
    goalCount: 20,
    label: "Hard",
    emoji: "⭐",
    accent: "bg-orange-500",
    size: 8,
    reward: 100,
    unlockCost: 100,
  },
  impossible: {
    moves: 15,
    types: 8,
    goals: 6,
    goalCount: 15,
    label: "Impossible",
    emoji: "💀",
    accent: "bg-purple-600",
    size: 8,
    reward: 200,
    unlockCost: 200,
  }
};
let yc = 1;
const Gl = (e, t = "normal") => ({
  id: yc++,
  type: e,
  special: t,
  spawning: !0,
}),
  tt = (e) => e.map((t) => t.map((n) => ({ ...n }))),
  bf = (e, t) => e >= 0 && e < oe && t >= 0 && t < oe;
function Cf(e) {
  const t = [];
  for (let n = 0; n < oe; n++) {
    t.push([]);
    for (let r = 0; r < oe; r++) {
      let o,
        s = 0;
      do ((o = Math.floor(Math.random() * e)), s++);
      while (
        s < 30 &&
        ((r >= 2 && t[n][r - 1].type === o && t[n][r - 2].type === o) ||

          (n >= 2 && t[n - 1][r].type === o && t[n - 2][r].type === o))
      );
      t[n].push({ id: yc++, type: o, special: "normal" });
    }
  }
  return t;
}
function kf(e) {
  const t = new Set(),
    n = [];
  for (let r = 0; r < oe; r++) {
    let o = 0;
    for (let s = 1; s <= oe; s++)
      if (s === oe || e[r][s].type !== e[r][o].type) {
        if (s - o >= 3) {
          const i = [];
          for (let l = o; l < s; l++) (i.push(`${r},${l}`), t.add(`${r},${l}`));
          n.push({ cells: i, horizontal: !0 });
        }
        o = s;
      }
  }
  for (let r = 0; r < oe; r++) {
    let o = 0;
    for (let s = 1; s <= oe; s++)
      if (s === oe || e[s][r].type !== e[o][r].type) {
        if (s - o >= 3) {
          const i = [];
          for (let l = o; l < s; l++) (i.push(`${l},${r}`), t.add(`${l},${r}`));
          n.push({ cells: i, horizontal: !1 });
        }
        o = s;
      }
  }
  return { cells: t, runs: n };
}
const cn = (e) => new Promise((t) => setTimeout(t, e)),
  tb = () => {
    const [pts, setPts] = w.useState(() => { try { return Number(localStorage.getItem("mario_crush_points")) || 0; } catch { return 0; } }),
      [unlocked, setUnlocked] = w.useState(() => {
        try { return JSON.parse(localStorage.getItem("mario_crush_unlocked_v2") || '["easy", "medium"]'); } catch { return ["easy", "medium"]; }
      }),
      [e, t] = w.useState(null),
      n = e ? xr[e] : xr.easy,
      [r, o] = w.useState(() => Cf(xr.easy.types)),
      [s, i] = w.useState(xr.easy.moves),
      [l, a] = w.useState([]),
      [u, d] = w.useState({}),
      [c, h] = w.useState(null),
      [f, S] = w.useState(!1),
      [y, x] = w.useState(null),
      m = w.useRef(null),
      _gc = (idx) => (n.goalCounts ? (n.goalCounts[idx] ?? n.goalCount) : n.goalCount),
      p = n.goalCounts ? n.goalCounts.reduce((a, b) => a + b, 0) : n.goalCount * n.goals,
      v = l.reduce((O, L, idx) => O + Math.min(u[L] ?? 0, _gc(idx)), 0),
      E = Math.min(100, Math.round((v / p) * 100)),
      b = w.useCallback((O) => {
        const L = xr[O],
          C = Cf(L.types),
          N = Array.from({ length: L.types }, (W, H) => H)
            .sort(() => Math.random() - 0.5)
            .slice(0, L.goals);
        (o(C),
          i(L.moves),
          a(N),
          d({}),
          h(null),
          S(!1),
          x(null),
          (m.current = null));
      }, []);
    w.useEffect(() => {
      localStorage.setItem("mario_crush_unlocked_v2", JSON.stringify(unlocked));
    }, [unlocked]);
    w.useEffect(() => {
      if (e) b(e);
    }, [e, b]);
    w.useEffect(() => {
      if (y && y.won && e) {
        setPts(p => {
          const np = p + (xr[e].reward || 0);
          localStorage.setItem("mario_crush_points", String(np));
          return np;
        });
      }
    }, [y, e]);
    const k = w.useCallback(
      async (O) => {
        const L = tt(O);
        let C = 0;
        for (; ;) {
          const { cells: N, runs: W } = kf(L);
          if (N.size === 0) break;
          const H = [];
          for (const M of W)
            if (M.cells.length >= 5) {
              const [D, _] = M.cells[Math.floor(M.cells.length / 2)]
                .split(",")
                .map(Number);
              H.push({ r: D, c: _, type: L[D][_].type, kind: "rainbow" });
            } else if (M.cells.length === 4) {
              const [D, _] = M.cells[Math.floor(M.cells.length / 2)]
                .split(",")
                .map(Number);
              H.push({ r: D, c: _, type: L[D][_].type, kind: "bomb" });
            }
          const Q = new Set(H.map((M) => `${M.r},${M.c}`)),
            T = new Set(N);
          for (const M of Array.from(T)) {
            const [D, _] = M.split(",").map(Number);
            if (L[D][_].special === "bomb") {
              if (window.triggerBombExplosion)
                window.triggerBombExplosion(document.getElementById("mc-btn-" + D + "-" + _));
              for (let F = -1; F <= 1; F++)
                for (let U = -1; U <= 1; U++) {
                  const Z = D + F,
                    te = _ + U;
                  bf(Z, te) && T.add(`${Z},${te}`);
                }
            }
          }
          d((M) => {
            const D = { ...M };
            for (const _ of T) {
              if (Q.has(_)) continue;
              const [F, U] = _.split(",").map(Number),
                Z = L[F][U].type;

              D[Z] = (D[Z] ?? 0) + 1;
            }
            return D;
          });
          const R = tt(L);
          for (const M of T) {
            const [D, _] = M.split(",").map(Number);
            R[D][_].exploding = !0;
          }
          (o(R), await cn(320));
          for (const M of T) {
            const [D, _] = M.split(",").map(Number);
            if (Q.has(M)) {
              const F = H.find((U) => U.r === D && U.c === _);
              L[D][_] = {
                id: yc++,
                type: F.type,
                special: F.kind,
                spawning: !0,
              };
            } else L[D][_] = { id: -1, type: -1, special: "normal" };
          }
          for (let M = 0; M < oe; M++) {
            let D = oe - 1;
            for (let _ = oe - 1; _ >= 0; _--)
              L[_][M].type !== -1 &&
                (D !== _ &&
                  ((L[D][M] = L[_][M]),
                    (L[_][M] = { id: -1, type: -1, special: "normal" })),
                  D--);
            for (let _ = D; _ >= 0; _--)
              L[_][M] = Gl(Math.floor(Math.random() * n.types));
          }
          if ((o(tt(L)), await cn(280), C++, C > 25)) break;
        }
        const $ = tt(L);
        for (let N = 0; N < oe; N++)
          for (let W = 0; W < oe; W++)
            (delete $[N][W].exploding, delete $[N][W].spawning);
        o($);
      },
      [n.types],
    ),
      P = w.useCallback(
        async (O, L, C, $) => {
          if (f || y) return;
          if (Math.abs(O - C) + Math.abs(L - $) !== 1) {
            h({ r: C, c: $ });
            return;
          }
          (S(!0), h(null));
          const N = tt(r),
            W = N[O][L],
            H = N[C][$];
          if (W.special === "rainbow" || H.special === "rainbow") {
            if (W.special === "rainbow" && H.special === "rainbow") {
              d((_) => {
                const F = { ..._ };
                for (let row = 0; row < oe; row++)
                  for (let col = 0; col < oe; col++) {
                    const X = N[row][col].type;
                    X >= 0 && (F[X] = (F[X] ?? 0) + 1);
                  }
                return F;
              });
              const boardCopy = tt(N);
              for (let row = 0; row < oe; row++)
                for (let col = 0; col < oe; col++)
                  boardCopy[row][col].exploding = true;
              (o(boardCopy), await cn(360));
              const newBoard = Cf(n.types);
              (o(newBoard), await cn(280), i((_) => _ - 1), S(!1));
              return;
            }
            const R = W.special === "rainbow" ? H.type : W.type,
              M = new Set();
            (M.add(`${O},${L}`), M.add(`${C},${$}`));

            for (let _ = 0; _ < oe; _++)
              for (let F = 0; F < oe; F++)
                N[_][F].type === R && M.add(`${_},${F}`);
            d((_) => {
              const F = { ..._ };
              for (const U of M) {
                const [Z, te] = U.split(",").map(Number),
                  X = N[Z][te].type;
                X >= 0 && (F[X] = (F[X] ?? 0) + 1);
              }
              return F;
            });
            const D = tt(N);
            if (window.llancarLaserEstrella) {
              window.llancarLaserEstrella(document.getElementById("mc-btn-" + (W.special === "rainbow" ? O : C) + "-" + (W.special === "rainbow" ? L : $)), R);
              await cn(500);
            }
            for (const _ of M) {
              const [F, U] = _.split(",").map(Number);
              D[F][U].exploding = !0;
            }
            (o(D), await cn(360));
            for (const _ of M) {
              const [F, U] = _.split(",").map(Number);
              N[F][U] = { id: -1, type: -1, special: "normal" };
            }
            for (let _ = 0; _ < oe; _++) {
              let F = oe - 1;
              for (let U = oe - 1; U >= 0; U--)
                N[U][_].type !== -1 &&
                  (F !== U &&
                    ((N[F][_] = N[U][_]),
                      (N[U][_] = { id: -1, type: -1, special: "normal" })),
                    F--);
              for (let U = F; U >= 0; U--)
                N[U][_] = Gl(Math.floor(Math.random() * n.types));
            }
            (o(tt(N)), await cn(280), i((_) => _ - 1), await k(N), S(!1));
            return;
          }
          (([N[O][L], N[C][$]] = [N[C][$], N[O][L]]), o(tt(N)), await cn(180));
          const { cells: Q } = kf(N);
          if (Q.size === 0) {
            const R = tt(N);
            ((R[O][L].shaking = !0),
              (R[C][$].shaking = !0),
              o(R),
              await cn(320),
              ([N[O][L], N[C][$]] = [N[C][$], N[O][L]]));
            const M = tt(N);
            for (let D = 0; D < oe; D++)
              for (let _ = 0; _ < oe; _++) delete M[D][_].shaking;
            (o(M), S(!1));
            return;
          }
          (i((R) => R - 1), await k(N), S(!1));
        },
        [r, f, n.types, y, k],
      ),
      dragRef = w.useRef(null),
      handlePointerDown = w.useCallback((O, L, ev) => {
        if (f || y) return;
        ev.preventDefault();
        dragRef.current = { r: O, c: L, x: ev.clientX ?? ev.touches?.[0]?.clientX, y: ev.clientY ?? ev.touches?.[0]?.clientY };
      }, [f, y]),
      handlePointerUp = w.useCallback((ev) => {
        if (!dragRef.current || f || y) return;
        const { r: startR, c: startC, x: startX, y: startY } = dragRef.current;
        dragRef.current = null;
        const endX = ev.clientX ?? ev.changedTouches?.[0]?.clientX ?? startX;
        const endY = ev.clientY ?? ev.changedTouches?.[0]?.clientY ?? startY;
        const dx = endX - startX, dy = endY - startY;
        const THRESHOLD = 15;
        if (Math.abs(dx) < THRESHOLD && Math.abs(dy) < THRESHOLD) return;
        let dr = 0, dc = 0;
        if (Math.abs(dx) > Math.abs(dy)) dc = dx > 0 ? 1 : -1;
        else dr = dy > 0 ? 1 : -1;
        const toR = startR + dr, toC = startC + dc;
        if (toR >= 0 && toR < oe && toC >= 0 && toC < oe) P(startR, startC, toR, toC);
      }, [f, y, P]);
    w.useEffect(() => {
      if (y || f || l.length === 0) return;
      const hasMoves = () => {
        for (let row = 0; row < oe; row++) {
          for (let col = 0; col < oe; col++) {
            if (r[row][col].special === "rainbow") return !0;
            if (col < oe - 1) {
              const tmp = r[row][col];
              r[row][col] = r[row][col + 1];
              r[row][col + 1] = tmp;
              const m = kf(r).cells.size > 0;
              r[row][col + 1] = r[row][col];
              r[row][col] = tmp;
              if (m) return !0;
            }
            if (row < oe - 1) {
              const tmp = r[row][col];
              r[row][col] = r[row + 1][col];
              r[row + 1][col] = tmp;
              const m = kf(r).cells.size > 0;
              r[row + 1][col] = r[row][col];
              r[row][col] = tmp;
              if (m) return !0;
            }
          }
        }
        return !1;
      };
      l.every((L, idx) => (u[L] ?? 0) >= _gc(idx))
        ? x({ won: !0, pct: 100 })
        : s <= 0 ? x({ won: !1, pct: E }) : (!hasMoves() && x({ won: !1, pct: E, noMoves: !0 }));
    }, [s, u, l, n.goalCount, n.goalCounts, y, f, E, r]);
    const B = s <= 5;
    return !e ? g.jsxs("div", {
      className: "relative mario-panel p-5 md:p-8 overflow-hidden my-10 max-w-5xl mx-auto",
      children: [
        g.jsx("div", { className: "absolute inset-0 mario-sky opacity-30 pointer-events-none rounded-[10px]" }),
        g.jsx(Sf, { points: pts }),
        g.jsxs("div", {
          className: "relative",
          children: [
            g.jsx("h3", { className: "font-pixel text-lg md:text-2xl mb-1 text-[#5a2a00] drop-shadow-[2px_2px_0_#fff]", children: "MARIO CRUSH" }),
            g.jsx("p", { className: "text-sm text-[#5a2a00]/80 mb-6 font-semibold", children: "Swap adjacent tiles to form combos of 3 or more." }),
            g.jsx("div", {

              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
              children: Object.keys(xr).map((O) => {
                const conf = xr[O];
                const isUnlocked = unlocked.includes(O) || !conf.unlockCost;
                const canAfford = pts >= (conf.unlockCost || 0);
                return g.jsxs("div", {
                  className: "relative rounded-xl p-4 bg-gradient-to-b from-[#FFF6DD] to-[#F4D88A] border-4 border-[#8B5A00] shadow-[0_5px_0_#5a3a00] transition-all hover:-translate-y-0.5",
                  children: [
                    g.jsxs("div", {
                      className: "flex items-center gap-3 mb-3",
                      children: [
                        g.jsx("span", { className: `w-12 h-12 rounded-lg ${conf.accent} grid place-items-center text-2xl border-2 border-black/30 shadow-[inset_0_-3px_0_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.45)]`, children: conf.emoji }),
                        g.jsxs("div", {
                          children: [
                            g.jsx("p", { className: "font-pixel text-[11px] leading-tight text-[#5a2a00]", children: conf.label }),
                            g.jsxs("p", { className: "text-xs text-[#5a2a00]/70 font-bold mt-1", children: [conf.goals, " goals · ", conf.moves, " moves"] }),
                          ]
                        })
                      ]
                    }),
                    g.jsxs("p", {
                      className: "text-xs text-[#5a2a00] mb-3 font-bold",
                      children: ["Reward: ", g.jsxs("span", { className: "font-pixel text-[10px] text-[#B86800]", children: ["+", conf.reward] }), " 🪙"]
                    }),
                    isUnlocked ? g.jsx("button", {
                      onClick: () => { oe = 8; t(O); },
                      className: `w-full py-2 rounded-lg font-pixel text-[11px] text-white ${conf.accent} hover:brightness-110 transition border-2 border-black/40 shadow-[0_3px_0_rgba(0,0,0,0.45),inset_0_2px_0_rgba(255,255,255,0.35)] active:translate-y-0.5 active:shadow-none`,
                      children: "PLAY"
                    }) : g.jsxs("button", {
                      onClick: () => {
                        if (canAfford) {
                          setPts(p => {
                            const np = p - conf.unlockCost;
                            localStorage.setItem("mario_crush_points", String(np));
                            return np;
                          });
                          setUnlocked(prev => [...prev, O]);
                        }
                      },
                      disabled: !canAfford,
                      className: `w-full py-2 rounded-lg font-pixel text-[10px] border-2 transition flex items-center justify-center gap-2 ${canAfford ? "bg-[#F8B800] border-[#8B5A00] text-[#5a2a00] hover:brightness-110 shadow-[0_3px_0_#5a3a00,inset_0_2px_0_rgba(255,255,255,0.5)] active:translate-y-0.5 active:shadow-none" : "bg-[#cfc7b0] border-[#8B5A00]/50 text-[#5a2a00]/50 cursor-not-allowed"}`,
                      children: [g.jsx(i1, { className: "w-3.5 h-3.5" }), conf.unlockCost, " 🪙"]
                    })
                  ]
                }, O);
              })
            })
          ]
        })
      ]
    }) : g.jsxs("div", {
      className: "relative mario-panel p-4 md:p-6 overflow-hidden my-10 max-w-5xl mx-auto",
      children: [
        g.jsx("div", { className: "absolute inset-0 mario-sky opacity-25 pointer-events-none rounded-[10px]" }),
        g.jsx(Sf, {
          points: pts,
          children: g.jsxs("button", {
            onClick: () => b(e),
            className: "p-1.5 rounded-lg bg-[#F8B800] border-2 border-[#8B5A00] text-[#5a2a00] hover:brightness-110 shadow-[0_2px_0_#5a3a00] active:translate-y-0.5 active:shadow-none flex items-center gap-1.5 px-2 font-pixel text-[10px]",
            "aria-label": "Restart",
            children: [g.jsx(Bm, { className: "w-3 h-3" }), " RESTART"]
          })
        }),
        g.jsxs("div", {
          className: "relative flex flex-wrap items-center justify-between gap-3 mb-4",
          children: [
            g.jsxs("div", {

              className: "flex items-center gap-3",
              children: [
                g.jsx("button", {
                  onClick: () => t(null),
                  className: "p-2 rounded-lg bg-[#F8B800] border-2 border-[#8B5A00] text-[#5a2a00] hover:brightness-110 shadow-[0_3px_0_#5a3a00] active:translate-y-0.5 active:shadow-none",
                  "aria-label": "Back to menu",
                  children: g.jsx(r1, { className: "w-4 h-4" })
                }),
                g.jsxs("div", {
                  children: [
                    g.jsxs("h3", {
                      className: "font-pixel text-[11px] md:text-sm flex items-center gap-2 text-[#5a2a00] drop-shadow-[1px_1px_0_#fff]",
                      children: [
                        g.jsx("span", { className: `w-9 h-9 rounded-md ${n.accent} grid place-items-center text-base border-2 border-black/30 shadow-[inset_0_-2px_0_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.4)]`, children: n.emoji }),
                        "MARIO CRUSH · ", n.label.toUpperCase()
                      ]
                    }),
                    g.jsxs("p", {
                      className: "text-xs text-[#5a2a00]/80 font-semibold mt-1",
                      children: ["Reward: ", g.jsxs("span", { className: "font-pixel text-[10px] text-[#B86800]", children: ["+", n.reward] }), " 🪙"]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        g.jsxs("div", {
          className: "grid md:grid-cols-[1fr_260px] gap-5",
          children: [
            g.jsxs("div", {
              className:
                "relative w-full aspect-square rounded-2xl overflow-hidden border-4 border-foreground/80 shadow-[0_8px_0_hsl(var(--foreground))]",
              children: [
                g.jsx("video", {
                  key: e,
                  src: eb[e],
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  playsInline: !0,
                  className: "absolute inset-0 w-full h-full object-cover",
                }),
                g.jsx("div", { className: "absolute inset-0 bg-black/15" }),
                g.jsx("div", {
                  className: "absolute grid gap-[2px]",
                  style: {
                    gridTemplateColumns: `repeat(${oe}, minmax(0,1fr))`,
                    gridTemplateRows: `repeat(${oe}, minmax(0,1fr))`,
                    top: "6%",
                    left: "5%",
                    right: "5%",
                    bottom: "5%",
                  },
                  children: r.map((O, L) =>
                    O.map((C, $) => {
                      const N =
                        (c == null ? void 0 : c.r) === L &&
                        (c == null ? void 0 : c.c) === $;
                      if (C.type < 0) return g.jsx("div", {}, `${L}-${$}`);
                      const W = Kl[C.type];
                      return g.jsx(
                        "button",
                        {
                          id: "mc-btn-" + L + "-" + $,
                          "data-type": C.type,
                          onPointerDown: (ev) => handlePointerDown(L, $, ev),
                          onPointerUp: handlePointerUp,
                          onTouchStart: (ev) => handlePointerDown(L, $, ev.touches[0]),
                          onTouchEnd: (ev) => handlePointerUp(ev),
                          style: { aspectRatio: "1 / 1", touchAction: "none", userSelect: "none" },
                          className: `relative rounded-md overflow-hidden transition-all duration-200 ${C.exploding ? "mc-explode icona-eliminada" : ""} ${C.spawning ? "mc-spawn" : ""} ${C.shaking ? "mc-shake" : ""}`,
                          children:
                            C.special === "rainbow"
                              ? g.jsx("video", {
                                src: "./iconos/estrella especial.mp4",
                                autoPlay: !0,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,

                                className:
                                  "absolute inset-0 w-full h-full object-cover mc-rainbow",
                              })
                              : C.special === "bomb"
                                ? g.jsxs(g.Fragment, {
                                  children: [
                                    g.jsx("video", {
                                      src: "./iconos/bomba especial.mp4",
                                      autoPlay: !0,
                                      loop: !0,
                                      muted: !0,
                                      playsInline: !0,
                                      className:
                                        "absolute inset-0 w-full h-full object-cover",
                                    }),
                                    g.jsx("img", {
                                      src: W.src,
                                      className:
                                        "absolute inset-[22%] w-[56%] h-[56%] object-contain rounded-full",
                                    }),
                                  ],
                                })
                                : g.jsx("img", {
                                  src: W.src,
                                  className:
                                    "absolute inset-0 w-full h-full object-cover",
                                }),
                        },
                        C.id,
                      );
                    }),
                  ),
                }),
              ],
            }),
            g.jsxs("aside", {
              className: "space-y-4",
              children: [
                g.jsxs("div", {
                  className: "mario-panel p-4",
                  children: [
                    g.jsxs("div", {
                      className: "flex items-center justify-between mb-2",
                      children: [
                        g.jsx("span", {
                          className: "font-pixel text-xs",
                          children: "MOVES",
                        }),
                        g.jsx("span", {
                          className: `font-pixel text-2xl ${B ? "text-red-600 animate-pulse" : "text-foreground"}`,
                          children: s,
                        }),
                      ],
                    }),
                    g.jsx("div", {
                      className:
                        "h-3 bg-black/20 rounded-full overflow-hidden border border-foreground/40",
                      children: g.jsx("div", {
                        className:
                          "h-full bg-gradient-to-r from-green-400 to-emerald-600 transition-all duration-500",
                        style: { width: `${E}%` },
                      }),
                    }),
                    g.jsxs("div", {
                      className: "text-right text-[10px] font-pixel mt-1",
                      children: [E, "%"],
                    }),
                  ],
                }),
                g.jsxs("div", {
                  className: "mario-panel p-4",
                  children: [
                    g.jsx("div", {
                      className: "font-pixel text-xs mb-3",
                      children: "GOALS",
                    }),
                    g.jsx("ul", {
                      className: "space-y-2",
                      children: l.map((O, idx) => {
                        const gc = _gc(idx),
                          L = Math.min(u[O] ?? 0, gc),
                          C = L >= gc;
                        return g.jsxs(
                          "li",
                          {
                            className: "flex items-center gap-3",
                            children: [
                              g.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-md overflow-hidden border-2 border-foreground/60 bg-black/20 relative",
                                children: g.jsx("img", {

                                  src: Kl[O].src,
                                  className:
                                    "absolute inset-0 w-full h-full object-cover",
                                }),
                              }),
                              g.jsxs("div", {
                                className: "flex-1",
                                children: [
                                  g.jsx("div", {
                                    className:
                                      "font-pixel text-[10px] uppercase",
                                    children: Kl[O].name,
                                  }),
                                  g.jsx("div", {
                                    className:
                                      "h-2 bg-black/20 rounded-full overflow-hidden",
                                    children: g.jsx("div", {
                                      className: `h-full ${C ? "bg-emerald-500" : "bg-yellow-400"} transition-all`,
                                      style: {
                                        width: `${(L / gc) * 100}%`,
                                      },
                                    }),
                                  }),
                                ],
                              }),
                              g.jsxs("span", {
                                className: `font-pixel text-xs ${C ? "text-emerald-600" : ""}`,
                                children: [L, "/", gc],
                              }),
                            ],
                          },
                          O,
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        y &&
        g.jsx("div", {
          className:
            "fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6",
          children: g.jsxs("div", {
            className: "mario-panel p-8 max-w-sm w-full text-center",
            children: [
              g.jsx("h4", {
                className: "font-pixel text-xl mb-3",
                children: y.won ? "VICTORY!" : "GAME OVER",
              }),
              y.noMoves && g.jsx("p", {
                className: "font-pixel text-[10px] mb-2 text-red-600",
                children: "No more possible moves",
              }),
              g.jsxs("p", {
                className: "font-pixel text-xs mb-4",
                children: [
                  "Progress: ",
                  g.jsxs("span", {
                    className: "text-primary text-base",
                    children: [y.pct, "%"],
                  }),
                ],
              }),
              g.jsx("button", {
                onClick: () => b(e),
                className:
                  "px-5 py-3 rounded-lg font-pixel text-xs bg-primary text-primary-foreground border-2 border-foreground shadow-[0_4px_0_hsl(var(--foreground))] hover:translate-y-0.5 transition-transform",
                children: "PLAY AGAIN",
              }),
            ],
          }),
        }),
        g.jsx("style", {
          children: `
        @keyframes mc-explode {
          0% { transform: scale(1) rotate(0); opacity: 1; }
          100% { transform: scale(0) rotate(220deg); opacity: 0; }
        }
        .mc-explode { animation: mc-explode 0.3s ease-in forwards; }
        @keyframes mc-spawn {
          0% { transform: translateY(-40%) scale(0.6); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        .mc-spawn { animation: mc-spawn 0.28s ease-out both; }
        @keyframes mc-shake {
          0%,100% { transform: translateX(0); }
          20% { transform: translateX(-6px) rotate(-4deg); }
          40% { transform: translateX(6px) rotate(4deg); }
          60% { transform: translateX(-4px) rotate(-2deg); }
          80% { transform: translateX(4px) rotate(2deg); }
        }
        .mc-shake { animation: mc-shake 0.3s ease-in-out; }
        @keyframes mc-rainbow {
          0%,100% { filter: hue-rotate(0deg) brightness(1.1); }
          50% { filter: hue-rotate(180deg) brightness(1.4); }
        }
        .mc-rainbow { animation: mc-rainbow 1.4s linear infinite; }
      `,
        }),
      ],
    });

  },
  Xl = ["Student 1", "Student 2", "Student 3"],
  nb = () =>
    g.jsxs("div", {
      className: "min-h-screen bg-transparent",
      children: [
        g.jsx("nav", {
          className:
            "sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border",
          children: g.jsxs("div", {
            className: "container flex items-center justify-between py-3",
            children: [
              g.jsxs("a", {
                href: "#top",
                className: "flex items-center gap-2 font-bold text-lg",
                children: [
                  g.jsx("span", {
                    className:
                      "w-8 h-8 rounded-full bg-primary text-primary-foreground grid place-items-center",
                    children: "M",
                  }),
                  g.jsx("span", { children: "Mario Universe Blog" }),
                ],
              }),
              g.jsxs("ul", {
                className:
                  "flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm font-semibold",
                children: [
                  g.jsx("li", {
                    children: g.jsx("a", {
                      href: "#post-1",
                      className: "hover:text-primary transition-colors",
                      children: "Intro",
                    }),
                  }),
                  g.jsx("li", {
                    children: g.jsx("a", {
                      href: "#post-2",
                      className: "hover:text-primary transition-colors",
                      children: "Opinion",
                    }),
                  }),
                  g.jsx("li", {
                    children: g.jsx("a", {
                      href: "#post-3",
                      className: "hover:text-primary transition-colors",
                      children: "Our Choice",
                    }),
                  }),
                  g.jsx("li", {
                    children: g.jsx("a", {
                      href: "#post-4",
                      className: "hover:text-primary transition-colors",
                      children: "Activities",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        g.jsxs("header", {
          id: "top",
          className: "relative",
          children: [
            g.jsx("img", {
              src: OE,
              alt: "Mario universe banner with castle and Mushroom Kingdom",
              width: 1920,
              height: 768,
              className: "w-full h-[45vh] md:h-[60vh] object-cover",
            }),
            g.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent",
            }),
            g.jsx("div", {
              className: "absolute inset-0 flex items-end",
              children: g.jsxs("div", {
                className: "container pb-10 md:pb-16",
                children: [
                  g.jsxs("span", {
                    className:
                      "inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3",
                    children: [
                      g.jsx(a1, { className: "inline w-3 h-3 mr-1" }),
                      " A Student Blog Project",
                    ],
                  }),
                  g.jsxs("h1", {
                    className:
                      "text-4xl md:text-6xl lg:text-7xl font-bold text-foreground drop-shadow-lg max-w-4xl",
                    children: [
                      "Welcome to the ",
                      g.jsx("span", {
                        className: "text-primary",
                        children: "Mario Universe",
                      }),
                    ],
                  }),
                  g.jsx("p", {
                    className:
                      "mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl",
                    children:

                      "Explore the vast Super Mario universe — featuring character insights, our top game picks, and fun interactive mini-games all in one place.",
                  }),
                ],
              }),
            }),
          ],
        }),
        g.jsxs("main", {
          className: "container py-12 md:py-20 space-y-12 max-w-5xl",
          children: [
            g.jsxs($s, {
              id: "post-1",
              number: 1,
              tag: "Introduction",
              title: "Meet the Team",
              children: [
                g.jsx("p", { children: "Welcome to our Mario blog!" }),
                g.jsx("p", {
                  children:
                    "This is a space dedicated to Super Mario and his incredible universe. We love these classic video games, and we want to share our passion with all of you.",
                }),
                g.jsx("p", {
                  children:
                    "In this blog, you will find a lot of content about the Mushroom Kingdom. We want to talk about famous characters like Mario, Luigi, Peach, and Bowser. Also, we want to share opinions about our favorite games and worlds.",
                }),
                g.jsx("p", {
                  children:
                    "Below, you can watch our first video. In the video, we introduce ourselves and talk about our skills and hobbies. We hope you enjoy this adventure with us!",
                }),
                g.jsx("video", {
                  controls: !0,
                  className: "w-full aspect-video rounded-xl shadow-md border-2 border-muted my-6 bg-black",
                  src: "./video/Students%20and%20blog%20introduction.mp4"
                }),
              ],
            }),
            g.jsxs($s, {
              id: "post-2",
              number: 2,
              tag: "Opinion Essay",
              title: "Our Opinion: Who is the best character in Super Mario?",
              children: [
                g.jsx("p", {
                  children:
                    "In our opinion, the Super Mario universe has many great characters, but we think Shy Guy, Wario, and Luigi are the best. Every character is special and good for different players.",
                }),
                g.jsx("p", {
                  children:
                    "First, Daniel prefers Shy Guy because he is very mysterious and cool. He wears a classic mask and has many colors. In games like Mario Kart, Shy Guy is very fast and fun to play with.",
                }),
                g.jsx("p", {
                  children:
                    "Second, Marc likes Wario. Wario is the greedy rival of Mario and one of the most unique characters in the franchise. He is strong, funny, and surprisingly fast. We think he is the most entertaining character in the games.",
                }),
                g.jsx("p", {
                  children:
                    "Finally, Josep thinks Luigi is the best. Luigi can jump very high, and he is a bit different from his brother. He is sometimes scared, but he is very brave in games like Luigi's Mansion. We think he is a very fun character.",
                }),
                g.jsx("p", {
                  children:
                    "In conclusion, all characters are amazing. But for us, Shy Guy, Wario, and Luigi make the games perfect. What is your favorite character?",
                }),
                g.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-5 pt-2",
                  children: [
                    g.jsx("figure", {
                      className: "space-y-2",
                      children: [
                        g.jsx("div", {
                          className: "relative aspect-square rounded-xl border-4 border-border overflow-hidden shadow-md bg-muted/20",
                          children: g.jsx("img", {
                            src: "./imagenes_edit/daniel_post2.png",
                            alt: "Daniel's favorite Mario character",
                            className: "absolute inset-0 w-full h-full object-contain",
                          }),
                        }),
                        g.jsx("figcaption", { className: "text-sm text-center text-muted-foreground", children: "Daniel Vasquez" }),
                      ],
                    }, "daniel"),
                    g.jsx("figure", {
                      className: "space-y-2",
                      children: [
                        g.jsx("div", {
                          className: "relative aspect-square rounded-xl border-4 border-border overflow-hidden shadow-md bg-muted/20",
                          children: g.jsx("img", {
                            src: "./imagenes_edit/marc_post2.png",
                            alt: "Marc's favorite Mario character",
                            className: "absolute inset-0 w-full h-full object-contain",
                          }),
                        }),
                        g.jsx("figcaption", { className: "text-sm text-center text-muted-foreground", children: "Marc Duran" }),
                      ],
                    }, "marc"),
                    g.jsx("figure", {
                      className: "space-y-2",
                      children: [
                        g.jsx("div", {
                          className: "relative aspect-square rounded-xl border-4 border-border overflow-hidden shadow-md bg-muted/20",
                          children: g.jsx("img", {
                            src: "./imagenes_edit/josep_post2.png",
                            alt: "Josep's favorite Mario character",
                            className: "absolute inset-0 w-full h-full object-contain",
                          }),
                        }),
                        g.jsx("figcaption", { className: "text-sm text-center text-muted-foreground", children: "Josep Sancho" }),
                      ],
                    }, "josep"),
                  ],
                }),

              ],
            }),
            g.jsxs($s, {
              id: "post-3",
              number: 3,
              tag: "Students' Choice",
              title: "Our Favorite Super Mario Games",
              children: [
                g.jsx("p", {
                  children:
                    "The Super Mario franchise has many incredible games. We played many of them, and today we want to talk about our three favorite titles.",
                }),
                g.jsx("p", {
                  children:

                    "First, Daniel loves Mario Kart 8 Deluxe. This game is for the Nintendo Switch, and it is incredible. In this racing game, players compete on amazing tracks with anti-gravity sections. With many characters, karts, and items like the Blue Shell, Daniel thinks the races are chaotic and perfect to play with friends.",
                }),
                g.jsx("p", {
                  children:
                    "Second, Marc prefers Mario Strikers. This is the best sports game for him. It combines football with the chaos of Mario universe power-ups. Marc loves the fast-paced matches and the competitive online mode. It is a perfect game to play with friends at home because it is very intense and fun.",
                }),
                g.jsx("p", {
                  children:
                    "Finally, Josep chooses Super Mario Galaxy 2. This game is the incredible sequel to the original Galaxy, released for the Nintendo Wii. It keeps all the amazing gravity mechanics from the first game but adds new power-ups like the Cloud Suit and Yoshi. Josep thinks it is even better than the first one, and the level design is absolutely perfect.",
                }),
                g.jsx("p", {
                  children:
                    "In conclusion, Super Mario games are always high quality. Whether you prefer adventures in space, racing with friends, or exploring big worlds, there is always a perfect Mario game for you.",
                }),
                g.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-5 pt-2",
                  children: [
                    g.jsx("figure", {
                      className: "space-y-2",
                      children: [
                        g.jsx("div", {
                          className: "relative aspect-square rounded-xl border-4 border-border overflow-hidden shadow-md bg-muted/20",
                          children: g.jsx("img", {
                            src: "./imagenes_edit/daniel_post3.png",
                            alt: "Daniel's favorite Mario game",
                            className: "absolute inset-0 w-full h-full object-contain",
                          }),
                        }),
                        g.jsx("figcaption", { className: "text-sm text-center text-muted-foreground", children: "Daniel Vasquez" }),
                      ],
                    }, "daniel"),
                    g.jsx("figure", {
                      className: "space-y-2",
                      children: [
                        g.jsx("div", {
                          className: "relative aspect-square rounded-xl border-4 border-border overflow-hidden shadow-md bg-muted/20",
                          children: g.jsx("img", {
                            src: "./imagenes_edit/marc_post3.png",
                            alt: "Marc's favorite Mario game",
                            className: "absolute inset-0 w-full h-full object-contain",
                          }),
                        }),
                        g.jsx("figcaption", { className: "text-sm text-center text-muted-foreground", children: "Marc Duran" }),
                      ],
                    }, "marc"),
                    g.jsx("figure", {
                      className: "space-y-2",
                      children: [
                        g.jsx("div", {
                          className: "relative aspect-square rounded-xl border-4 border-border overflow-hidden shadow-md bg-muted/20",
                          children: g.jsx("img", {
                            src: "./imagenes_edit/josep_post3.png",
                            alt: "Josep's favorite Mario game",
                            className: "absolute inset-0 w-full h-full object-contain",
                          }),
                        }),
                        g.jsx("figcaption", { className: "text-sm text-center text-muted-foreground", children: "Josep Sancho" }),
                      ],
                    }, "josep"),
                  ],
                }),

              ],
            }),
            g.jsxs($s, {
              id: "post-4",
              number: 4,
              tag: "Fun Zone",
              title: "Play and Fun: Our Super Mario Games!",
              children: [
                g.jsx("p", {
                  children:
                    "Welcome to our special games post! We created three fun and entertaining activities about the Super Mario universe. We edited the images and designs ourselves, and we hope you like them.",
                }),
                g.jsxs("div", {
                  className: "mt-10 space-y-10",
                  children: [
                    g.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        g.jsx("h3", {
                          className: "text-xl font-bold",
                          children: "Game 1: Mario Word Search",
                        }),
                        g.jsx("p", {
                          children:
                            "Can you find the hidden words? In this classic activity, you need to search for the names of your favorite characters, like Mario, Luigi, Yoshi, and Toad. Look carefully in all directions!",
                        }),
                        g.jsx(BE, {}),
                      ],
                    }),
                    g.jsx("hr", {
                      className: "border-4 border-foreground/20 rounded-full",
                    }),
                    g.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        g.jsx("h3", {
                          className: "text-xl font-bold",
                          children: "Game 2: Find the Differences",
                        }),
                        g.jsx("p", {
                          children:
                            "Look at the two pictures of Mario very closely. They look identical, but they are not! There are some small differences between them. Can you find all of them?",
                        }),
                        g.jsx(qE, {}),
                      ],
                    }),
                    g.jsx("hr", {
                      className: "border-4 border-foreground/20 rounded-full",
                    }),
                    g.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        g.jsx("h3", {
                          className: "text-xl font-bold",

                          children:
                            "Game 3: Mushroom Kingdom Match (Candy Crush Style)",
                        }),
                        g.jsx("p", {
                          children:
                            "This is a very addictive puzzle game! You need to connect three or more identical icons from the Mario universe, like red mushrooms, stars, and coins. Connect them to clear the board and get points!",
                        }),
                        g.jsx(tb, {}),
                      ],
                    }),
                    g.jsx("div", {
                      className:
                        "bg-primary/10 p-6 rounded-xl border border-primary/20 text-center mt-8",
                      children: g.jsx("p", {
                        className: "font-bold text-lg text-primary",
                        children:
                          "Tell us in the comments: Which game is your favorite and what is your best score? Enjoy playing!",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        g.jsx("footer", {
          className: "border-t border-border bg-muted/40 mt-12",
          children: g.jsxs("div", {
            className:
              "container py-8 text-center text-sm text-muted-foreground",
            children: [
              g.jsx("p", {
                className: "font-semibold text-foreground",
                children: "Mario Universe Blog",
              }),

            ],
          }),
        }),
      ],
    }),
  rb = () => {
    const e = dm();
    return (
      w.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname,
        );
      }, [e.pathname]),
      g.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: g.jsxs("div", {
          className: "text-center",
          children: [
            g.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            g.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            g.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  ob = new Ly(),
  sb = () =>
    g.jsx(Dy, {
      client: ob,
      children: g.jsxs(_E, {
        children: [
          g.jsx(H1, {}),
          g.jsx(ew, {}),
          g.jsx(Ex, {
            basename: location.hostname === "gdvasquez-io.github.io" ? "/blog-mario-univers" : "",
            children: g.jsxs(xx, {
              children: [
                g.jsx(Ya, { path: "/", element: g.jsx(nb, {}) }),
                g.jsx(Ya, { path: "/index.html", element: g.jsx(nb, {}) }),
                g.jsx(Ya, { path: "*", element: g.jsx(rb, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
Gh(document.getElementById("root")).render(g.jsx(sb, {}));

window.llancarLaserEstrella = function (posicioEstrella, tipusIconaAEliminar) {
  const iconesCoincidents = document.querySelectorAll("[data-type='" + tipusIconaAEliminar + "']");
  if (!posicioEstrella) return;
  const rectEstrella = posicioEstrella.getBoundingClientRect();
  const xOrigen = rectEstrella.left + rectEstrella.width / 2;
  const yOrigen = rectEstrella.top + rectEstrella.height / 2;
  const targets = Array.from(iconesCoincidents);

  targets.forEach(function (icona, idx) {
    const delay = idx * 60;
    setTimeout(function () {
      const rectIcona = icona.getBoundingClientRect();
      const xDesti = rectIcona.left + rectIcona.width / 2;
      const yDesti = rectIcona.top + rectIcona.height / 2;
      const distancia = Math.hypot(xDesti - xOrigen, yDesti - yOrigen);
      const angle = Math.atan2(yDesti - yOrigen, xDesti - xOrigen) * (180 / Math.PI);

      // Laser arcoíris
      const laser = document.createElement('div');
      laser.classList.add('laser-line');
      laser.style.left = xOrigen + 'px';
      laser.style.top = yOrigen + 'px';
      laser.style.width = distancia + 'px';
      laser.style.transform = 'rotate(' + angle + 'deg)';
      laser.style.animationDelay = '0ms';
      document.body.appendChild(laser);
      laser.addEventListener('animationend', function () { laser.remove(); });

      // Destello de impacto en el destino
      const speed = distancia / 600;
      setTimeout(function () {
        const hit = document.createElement('div');
        hit.className = 'laser-hit';
        hit.style.left = xDesti + 'px';
        hit.style.top = yDesti + 'px';
        document.body.appendChild(hit);
        hit.addEventListener('animationend', function () { hit.remove(); });
      }, speed * 300);
    }, delay);
  });
};