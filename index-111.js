(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o=>{
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
var zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mn(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var km = {
    exports: {}
}
  , dl = {}
  , _m = {
    exports: {}
}
  , ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cs = Symbol.for("react.element")
  , Z2 = Symbol.for("react.portal")
  , eb = Symbol.for("react.fragment")
  , tb = Symbol.for("react.strict_mode")
  , nb = Symbol.for("react.profiler")
  , rb = Symbol.for("react.provider")
  , ob = Symbol.for("react.context")
  , ib = Symbol.for("react.forward_ref")
  , sb = Symbol.for("react.suspense")
  , ab = Symbol.for("react.memo")
  , lb = Symbol.for("react.lazy")
  , dp = Symbol.iterator;
function ub(e) {
    return e === null || typeof e != "object" ? null : (e = dp && e[dp] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Tm = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Pm = Object.assign
  , Om = {};
function ci(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Om,
    this.updater = n || Tm
}
ci.prototype.isReactComponent = {};
ci.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
ci.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function $m() {}
$m.prototype = ci.prototype;
function uf(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Om,
    this.updater = n || Tm
}
var cf = uf.prototype = new $m;
cf.constructor = uf;
Pm(cf, ci.prototype);
cf.isPureReactComponent = !0;
var pp = Array.isArray
  , Im = Object.prototype.hasOwnProperty
  , ff = {
    current: null
}
  , Lm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Nm(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Im.call(t, r) && !Lm.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var l = Array(a), c = 0; c < a; c++)
            l[c] = arguments[c + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: Cs,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: ff.current
    }
}
function cb(e, t) {
    return {
        $$typeof: Cs,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function df(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Cs
}
function fb(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var hp = /\/+/g;
function tu(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? fb("" + e.key) : t.toString(36)
}
function pa(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Cs:
            case Z2:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + tu(s, 0) : r,
        pp(o) ? (n = "",
        e != null && (n = e.replace(hp, "$&/") + "/"),
        pa(o, t, n, "", function(c) {
            return c
        })) : o != null && (df(o) && (o = cb(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(hp, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    pp(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + tu(i, a);
            s += pa(i, t, n, l, o)
        }
    else if (l = ub(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(i = e.next()).done; )
            i = i.value,
            l = r + tu(i, a++),
            s += pa(i, t, n, l, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Vs(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return pa(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function db(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var At = {
    current: null
}
  , ha = {
    transition: null
}
  , pb = {
    ReactCurrentDispatcher: At,
    ReactCurrentBatchConfig: ha,
    ReactCurrentOwner: ff
};
ae.Children = {
    map: Vs,
    forEach: function(e, t, n) {
        Vs(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Vs(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Vs(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!df(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
ae.Component = ci;
ae.Fragment = eb;
ae.Profiler = nb;
ae.PureComponent = uf;
ae.StrictMode = tb;
ae.Suspense = sb;
ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pb;
ae.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Pm({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = ff.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            Im.call(t, l) && !Lm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var c = 0; c < l; c++)
            a[c] = arguments[c + 2];
        r.children = a
    }
    return {
        $$typeof: Cs,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
ae.createContext = function(e) {
    return e = {
        $$typeof: ob,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: rb,
        _context: e
    },
    e.Consumer = e
}
;
ae.createElement = Nm;
ae.createFactory = function(e) {
    var t = Nm.bind(null, e);
    return t.type = e,
    t
}
;
ae.createRef = function() {
    return {
        current: null
    }
}
;
ae.forwardRef = function(e) {
    return {
        $$typeof: ib,
        render: e
    }
}
;
ae.isValidElement = df;
ae.lazy = function(e) {
    return {
        $$typeof: lb,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: db
    }
}
;
ae.memo = function(e, t) {
    return {
        $$typeof: ab,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
ae.startTransition = function(e) {
    var t = ha.transition;
    ha.transition = {};
    try {
        e()
    } finally {
        ha.transition = t
    }
}
;
ae.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
ae.useCallback = function(e, t) {
    return At.current.useCallback(e, t)
}
;
ae.useContext = function(e) {
    return At.current.useContext(e)
}
;
ae.useDebugValue = function() {}
;
ae.useDeferredValue = function(e) {
    return At.current.useDeferredValue(e)
}
;
ae.useEffect = function(e, t) {
    return At.current.useEffect(e, t)
}
;
ae.useId = function() {
    return At.current.useId()
}
;
ae.useImperativeHandle = function(e, t, n) {
    return At.current.useImperativeHandle(e, t, n)
}
;
ae.useInsertionEffect = function(e, t) {
    return At.current.useInsertionEffect(e, t)
}
;
ae.useLayoutEffect = function(e, t) {
    return At.current.useLayoutEffect(e, t)
}
;
ae.useMemo = function(e, t) {
    return At.current.useMemo(e, t)
}
;
ae.useReducer = function(e, t, n) {
    return At.current.useReducer(e, t, n)
}
;
ae.useRef = function(e) {
    return At.current.useRef(e)
}
;
ae.useState = function(e) {
    return At.current.useState(e)
}
;
ae.useSyncExternalStore = function(e, t, n) {
    return At.current.useSyncExternalStore(e, t, n)
}
;
ae.useTransition = function() {
    return At.current.useTransition()
}
;
ae.version = "18.2.0";
_m.exports = ae;
var P = _m.exports;
const qr = Mn(P);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hb = P
  , mb = Symbol.for("react.element")
  , gb = Symbol.for("react.fragment")
  , vb = Object.prototype.hasOwnProperty
  , yb = hb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , wb = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Rm(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        vb.call(t, r) && !wb.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: mb,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: yb.current
    }
}
dl.Fragment = gb;
dl.jsx = Rm;
dl.jsxs = Rm;
km.exports = dl;
var k = km.exports
  , zu = {}
  , Am = {
    exports: {}
}
  , nn = {}
  , jm = {
    exports: {}
}
  , Dm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, F) {
        var V = N.length;
        N.push(F);
        e: for (; 0 < V; ) {
            var Q = V - 1 >>> 1
              , re = N[Q];
            if (0 < o(re, F))
                N[Q] = F,
                N[V] = re,
                V = Q;
            else
                break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0)
            return null;
        var F = N[0]
          , V = N.pop();
        if (V !== F) {
            N[0] = V;
            e: for (var Q = 0, re = N.length, ke = re >>> 1; Q < ke; ) {
                var Ue = 2 * (Q + 1) - 1
                  , _e = N[Ue]
                  , Ye = Ue + 1
                  , Dt = N[Ye];
                if (0 > o(_e, V))
                    Ye < re && 0 > o(Dt, _e) ? (N[Q] = Dt,
                    N[Ye] = V,
                    Q = Ye) : (N[Q] = _e,
                    N[Ue] = V,
                    Q = Ue);
                else if (Ye < re && 0 > o(Dt, V))
                    N[Q] = Dt,
                    N[Ye] = V,
                    Q = Ye;
                else
                    break e
            }
        }
        return F
    }
    function o(N, F) {
        var V = N.sortIndex - F.sortIndex;
        return V !== 0 ? V : N.id - F.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = []
      , c = []
      , d = 1
      , m = null
      , g = 3
      , x = !1
      , w = !1
      , y = !1
      , E = typeof setTimeout == "function" ? setTimeout : null
      , h = typeof clearTimeout == "function" ? clearTimeout : null
      , v = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function b(N) {
        for (var F = n(c); F !== null; ) {
            if (F.callback === null)
                r(c);
            else if (F.startTime <= N)
                r(c),
                F.sortIndex = F.expirationTime,
                t(l, F);
            else
                break;
            F = n(c)
        }
    }
    function C(N) {
        if (y = !1,
        b(N),
        !w)
            if (n(l) !== null)
                w = !0,
                G(O);
            else {
                var F = n(c);
                F !== null && W(C, F.startTime - N)
            }
    }
    function O(N, F) {
        w = !1,
        y && (y = !1,
        h(D),
        D = -1),
        x = !0;
        var V = g;
        try {
            for (b(F),
            m = n(l); m !== null && (!(m.expirationTime > F) || N && !he()); ) {
                var Q = m.callback;
                if (typeof Q == "function") {
                    m.callback = null,
                    g = m.priorityLevel;
                    var re = Q(m.expirationTime <= F);
                    F = e.unstable_now(),
                    typeof re == "function" ? m.callback = re : m === n(l) && r(l),
                    b(F)
                } else
                    r(l);
                m = n(l)
            }
            if (m !== null)
                var ke = !0;
            else {
                var Ue = n(c);
                Ue !== null && W(C, Ue.startTime - F),
                ke = !1
            }
            return ke
        } finally {
            m = null,
            g = V,
            x = !1
        }
    }
    var T = !1
      , R = null
      , D = -1
      , H = 5
      , z = -1;
    function he() {
        return !(e.unstable_now() - z < H)
    }
    function Ne() {
        if (R !== null) {
            var N = e.unstable_now();
            z = N;
            var F = !0;
            try {
                F = R(!0, N)
            } finally {
                F ? X() : (T = !1,
                R = null)
            }
        } else
            T = !1
    }
    var X;
    if (typeof v == "function")
        X = function() {
            v(Ne)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var U = new MessageChannel
          , B = U.port2;
        U.port1.onmessage = Ne,
        X = function() {
            B.postMessage(null)
        }
    } else
        X = function() {
            E(Ne, 0)
        }
        ;
    function G(N) {
        R = N,
        T || (T = !0,
        X())
    }
    function W(N, F) {
        D = E(function() {
            N(e.unstable_now())
        }, F)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(N) {
        N.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || x || (w = !0,
        G(O))
    }
    ,
    e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < N ? Math.floor(1e3 / N) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return g
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(N) {
        switch (g) {
        case 1:
        case 2:
        case 3:
            var F = 3;
            break;
        default:
            F = g
        }
        var V = g;
        g = F;
        try {
            return N()
        } finally {
            g = V
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(N, F) {
        switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            N = 3
        }
        var V = g;
        g = N;
        try {
            return F()
        } finally {
            g = V
        }
    }
    ,
    e.unstable_scheduleCallback = function(N, F, V) {
        var Q = e.unstable_now();
        switch (typeof V == "object" && V !== null ? (V = V.delay,
        V = typeof V == "number" && 0 < V ? Q + V : Q) : V = Q,
        N) {
        case 1:
            var re = -1;
            break;
        case 2:
            re = 250;
            break;
        case 5:
            re = 1073741823;
            break;
        case 4:
            re = 1e4;
            break;
        default:
            re = 5e3
        }
        return re = V + re,
        N = {
            id: d++,
            callback: F,
            priorityLevel: N,
            startTime: V,
            expirationTime: re,
            sortIndex: -1
        },
        V > Q ? (N.sortIndex = V,
        t(c, N),
        n(l) === null && N === n(c) && (y ? (h(D),
        D = -1) : y = !0,
        W(C, V - Q))) : (N.sortIndex = re,
        t(l, N),
        w || x || (w = !0,
        G(O))),
        N
    }
    ,
    e.unstable_shouldYield = he,
    e.unstable_wrapCallback = function(N) {
        var F = g;
        return function() {
            var V = g;
            g = F;
            try {
                return N.apply(this, arguments)
            } finally {
                g = V
            }
        }
    }
}
)(Dm);
jm.exports = Dm;
var bb = jm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mm = P
  , tn = bb;
function M(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Fm = new Set
  , rs = {};
function uo(e, t) {
    Zo(e, t),
    Zo(e + "Capture", t)
}
function Zo(e, t) {
    for (rs[e] = t,
    e = 0; e < t.length; e++)
        Fm.add(t[e])
}
var Xn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Hu = Object.prototype.hasOwnProperty
  , xb = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , mp = {}
  , gp = {};
function Sb(e) {
    return Hu.call(gp, e) ? !0 : Hu.call(mp, e) ? !1 : xb.test(e) ? gp[e] = !0 : (mp[e] = !0,
    !1)
}
function Eb(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Cb(e, t, n, r) {
    if (t === null || typeof t > "u" || Eb(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function jt(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var yt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    yt[e] = new jt(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    yt[t] = new jt(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    yt[e] = new jt(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    yt[e] = new jt(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    yt[e] = new jt(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    yt[e] = new jt(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    yt[e] = new jt(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    yt[e] = new jt(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    yt[e] = new jt(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var pf = /[\-:]([a-z])/g;
function hf(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(pf, hf);
    yt[t] = new jt(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(pf, hf);
    yt[t] = new jt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(pf, hf);
    yt[t] = new jt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    yt[e] = new jt(e,1,!1,e.toLowerCase(),null,!1,!1)
});
yt.xlinkHref = new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    yt[e] = new jt(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function mf(e, t, n, r) {
    var o = yt.hasOwnProperty(t) ? yt[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Cb(t, n, o, r) && (n = null),
    r || o === null ? Sb(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var rr = Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ks = Symbol.for("react.element")
  , $o = Symbol.for("react.portal")
  , Io = Symbol.for("react.fragment")
  , gf = Symbol.for("react.strict_mode")
  , Wu = Symbol.for("react.profiler")
  , Bm = Symbol.for("react.provider")
  , Um = Symbol.for("react.context")
  , vf = Symbol.for("react.forward_ref")
  , Vu = Symbol.for("react.suspense")
  , Ku = Symbol.for("react.suspense_list")
  , yf = Symbol.for("react.memo")
  , hr = Symbol.for("react.lazy")
  , zm = Symbol.for("react.offscreen")
  , vp = Symbol.iterator;
function Ei(e) {
    return e === null || typeof e != "object" ? null : (e = vp && e[vp] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Be = Object.assign, nu;
function ji(e) {
    if (nu === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            nu = t && t[1] || ""
        }
    return `
` + nu + e
}
var ru = !1;
function ou(e, t) {
    if (!e || ru)
        return "";
    ru = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var o = c.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a]; )
                a--;
            for (; 1 <= s && 0 <= a; s--,
            a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                            a--,
                            0 > a || o[s] !== i[a]) {
                                var l = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        ru = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? ji(e) : ""
}
function kb(e) {
    switch (e.tag) {
    case 5:
        return ji(e.type);
    case 16:
        return ji("Lazy");
    case 13:
        return ji("Suspense");
    case 19:
        return ji("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = ou(e.type, !1),
        e;
    case 11:
        return e = ou(e.type.render, !1),
        e;
    case 1:
        return e = ou(e.type, !0),
        e;
    default:
        return ""
    }
}
function qu(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Io:
        return "Fragment";
    case $o:
        return "Portal";
    case Wu:
        return "Profiler";
    case gf:
        return "StrictMode";
    case Vu:
        return "Suspense";
    case Ku:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Um:
            return (e.displayName || "Context") + ".Consumer";
        case Bm:
            return (e._context.displayName || "Context") + ".Provider";
        case vf:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case yf:
            return t = e.displayName || null,
            t !== null ? t : qu(e.type) || "Memo";
        case hr:
            t = e._payload,
            e = e._init;
            try {
                return qu(e(t))
            } catch {}
        }
    return null
}
function _b(e) {
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
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
        return qu(t);
    case 8:
        return t === gf ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Ir(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Hm(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Tb(e) {
    var t = Hm(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function qs(e) {
    e._valueTracker || (e._valueTracker = Tb(e))
}
function Wm(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Hm(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Na(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Yu(e, t) {
    var n = t.checked;
    return Be({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function yp(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ir(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Vm(e, t) {
    t = t.checked,
    t != null && mf(e, "checked", t, !1)
}
function Gu(e, t) {
    Vm(e, t);
    var n = Ir(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Qu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qu(e, t.type, Ir(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function wp(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Qu(e, t, n) {
    (t !== "number" || Na(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Di = Array.isArray;
function Wo(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Ir(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Ju(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(M(91));
    return Be({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function bp(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(M(92));
            if (Di(n)) {
                if (1 < n.length)
                    throw Error(M(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Ir(n)
    }
}
function Km(e, t) {
    var n = Ir(t.value)
      , r = Ir(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function xp(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function qm(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Xu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? qm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ys, Ym = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Ys = Ys || document.createElement("div"),
        Ys.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Ys.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function os(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Hi = {
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
    strokeWidth: !0
}
  , Pb = ["Webkit", "ms", "Moz", "O"];
Object.keys(Hi).forEach(function(e) {
    Pb.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Hi[t] = Hi[e]
    })
});
function Gm(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Hi.hasOwnProperty(e) && Hi[e] ? ("" + t).trim() : t + "px"
}
function Qm(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Gm(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var Ob = Be({
    menuitem: !0
}, {
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
    wbr: !0
});
function Zu(e, t) {
    if (t) {
        if (Ob[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(M(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(M(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(M(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(M(62))
    }
}
function ec(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
        return !0
    }
}
var tc = null;
function wf(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var nc = null
  , Vo = null
  , Ko = null;
function Sp(e) {
    if (e = Ts(e)) {
        if (typeof nc != "function")
            throw Error(M(280));
        var t = e.stateNode;
        t && (t = vl(t),
        nc(e.stateNode, e.type, t))
    }
}
function Jm(e) {
    Vo ? Ko ? Ko.push(e) : Ko = [e] : Vo = e
}
function Xm() {
    if (Vo) {
        var e = Vo
          , t = Ko;
        if (Ko = Vo = null,
        Sp(e),
        t)
            for (e = 0; e < t.length; e++)
                Sp(t[e])
    }
}
function Zm(e, t) {
    return e(t)
}
function eg() {}
var iu = !1;
function tg(e, t, n) {
    if (iu)
        return e(t, n);
    iu = !0;
    try {
        return Zm(e, t, n)
    } finally {
        iu = !1,
        (Vo !== null || Ko !== null) && (eg(),
        Xm())
    }
}
function is(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = vl(n);
    if (r === null)
        return null;
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(M(231, t, typeof n));
    return n
}
var rc = !1;
if (Xn)
    try {
        var Ci = {};
        Object.defineProperty(Ci, "passive", {
            get: function() {
                rc = !0
            }
        }),
        window.addEventListener("test", Ci, Ci),
        window.removeEventListener("test", Ci, Ci)
    } catch {
        rc = !1
    }
function $b(e, t, n, r, o, i, s, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (d) {
        this.onError(d)
    }
}
var Wi = !1
  , Ra = null
  , Aa = !1
  , oc = null
  , Ib = {
    onError: function(e) {
        Wi = !0,
        Ra = e
    }
};
function Lb(e, t, n, r, o, i, s, a, l) {
    Wi = !1,
    Ra = null,
    $b.apply(Ib, arguments)
}
function Nb(e, t, n, r, o, i, s, a, l) {
    if (Lb.apply(this, arguments),
    Wi) {
        if (Wi) {
            var c = Ra;
            Wi = !1,
            Ra = null
        } else
            throw Error(M(198));
        Aa || (Aa = !0,
        oc = c)
    }
}
function co(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ng(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Ep(e) {
    if (co(e) !== e)
        throw Error(M(188))
}
function Rb(e) {
    var t = e.alternate;
    if (!t) {
        if (t = co(e),
        t === null)
            throw Error(M(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return Ep(o),
                    e;
                if (i === r)
                    return Ep(o),
                    t;
                i = i.sibling
            }
            throw Error(M(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, a = o.child; a; ) {
                if (a === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (a === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (a === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(M(189))
            }
        }
        if (n.alternate !== r)
            throw Error(M(190))
    }
    if (n.tag !== 3)
        throw Error(M(188));
    return n.stateNode.current === n ? e : t
}
function rg(e) {
    return e = Rb(e),
    e !== null ? og(e) : null
}
function og(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = og(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var ig = tn.unstable_scheduleCallback
  , Cp = tn.unstable_cancelCallback
  , Ab = tn.unstable_shouldYield
  , jb = tn.unstable_requestPaint
  , Ke = tn.unstable_now
  , Db = tn.unstable_getCurrentPriorityLevel
  , bf = tn.unstable_ImmediatePriority
  , sg = tn.unstable_UserBlockingPriority
  , ja = tn.unstable_NormalPriority
  , Mb = tn.unstable_LowPriority
  , ag = tn.unstable_IdlePriority
  , pl = null
  , Rn = null;
function Fb(e) {
    if (Rn && typeof Rn.onCommitFiberRoot == "function")
        try {
            Rn.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var xn = Math.clz32 ? Math.clz32 : zb
  , Bb = Math.log
  , Ub = Math.LN2;
function zb(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Bb(e) / Ub | 0) | 0
}
var Gs = 64
  , Qs = 4194304;
function Mi(e) {
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
        return e
    }
}
function Da(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? r = Mi(a) : (i &= s,
        i !== 0 && (r = Mi(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = Mi(s) : i !== 0 && (r = Mi(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - xn(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function Hb(e, t) {
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
        return -1
    }
}
function Wb(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - xn(i)
          , a = 1 << s
          , l = o[s];
        l === -1 ? (!(a & n) || a & r) && (o[s] = Hb(a, t)) : l <= t && (e.expiredLanes |= a),
        i &= ~a
    }
}
function ic(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function lg() {
    var e = Gs;
    return Gs <<= 1,
    !(Gs & 4194240) && (Gs = 64),
    e
}
function su(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ks(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - xn(t),
    e[t] = n
}
function Vb(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - xn(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function xf(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - xn(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var xe = 0;
function ug(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var cg, Sf, fg, dg, pg, sc = !1, Js = [], Sr = null, Er = null, Cr = null, ss = new Map, as = new Map, yr = [], Kb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function kp(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Sr = null;
        break;
    case "dragenter":
    case "dragleave":
        Er = null;
        break;
    case "mouseover":
    case "mouseout":
        Cr = null;
        break;
    case "pointerover":
    case "pointerout":
        ss.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        as.delete(t.pointerId)
    }
}
function ki(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = Ts(t),
    t !== null && Sf(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function qb(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Sr = ki(Sr, e, t, n, r, o),
        !0;
    case "dragenter":
        return Er = ki(Er, e, t, n, r, o),
        !0;
    case "mouseover":
        return Cr = ki(Cr, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return ss.set(i, ki(ss.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        as.set(i, ki(as.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function hg(e) {
    var t = Yr(e.target);
    if (t !== null) {
        var n = co(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = ng(n),
                t !== null) {
                    e.blockedOn = t,
                    pg(e.priority, function() {
                        fg(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ma(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ac(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            tc = r,
            n.target.dispatchEvent(r),
            tc = null
        } else
            return t = Ts(n),
            t !== null && Sf(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function _p(e, t, n) {
    ma(e) && n.delete(t)
}
function Yb() {
    sc = !1,
    Sr !== null && ma(Sr) && (Sr = null),
    Er !== null && ma(Er) && (Er = null),
    Cr !== null && ma(Cr) && (Cr = null),
    ss.forEach(_p),
    as.forEach(_p)
}
function _i(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    sc || (sc = !0,
    tn.unstable_scheduleCallback(tn.unstable_NormalPriority, Yb)))
}
function ls(e) {
    function t(o) {
        return _i(o, e)
    }
    if (0 < Js.length) {
        _i(Js[0], e);
        for (var n = 1; n < Js.length; n++) {
            var r = Js[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Sr !== null && _i(Sr, e),
    Er !== null && _i(Er, e),
    Cr !== null && _i(Cr, e),
    ss.forEach(t),
    as.forEach(t),
    n = 0; n < yr.length; n++)
        r = yr[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < yr.length && (n = yr[0],
    n.blockedOn === null); )
        hg(n),
        n.blockedOn === null && yr.shift()
}
var qo = rr.ReactCurrentBatchConfig
  , Ma = !0;
function Gb(e, t, n, r) {
    var o = xe
      , i = qo.transition;
    qo.transition = null;
    try {
        xe = 1,
        Ef(e, t, n, r)
    } finally {
        xe = o,
        qo.transition = i
    }
}
function Qb(e, t, n, r) {
    var o = xe
      , i = qo.transition;
    qo.transition = null;
    try {
        xe = 4,
        Ef(e, t, n, r)
    } finally {
        xe = o,
        qo.transition = i
    }
}
function Ef(e, t, n, r) {
    if (Ma) {
        var o = ac(e, t, n, r);
        if (o === null)
            gu(e, t, r, Fa, n),
            kp(e, r);
        else if (qb(o, e, t, n, r))
            r.stopPropagation();
        else if (kp(e, r),
        t & 4 && -1 < Kb.indexOf(e)) {
            for (; o !== null; ) {
                var i = Ts(o);
                if (i !== null && cg(i),
                i = ac(e, t, n, r),
                i === null && gu(e, t, r, Fa, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            gu(e, t, r, null, n)
    }
}
var Fa = null;
function ac(e, t, n, r) {
    if (Fa = null,
    e = wf(r),
    e = Yr(e),
    e !== null)
        if (t = co(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = ng(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Fa = e,
    null
}
function mg(e) {
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
        switch (Db()) {
        case bf:
            return 1;
        case sg:
            return 4;
        case ja:
        case Mb:
            return 16;
        case ag:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var br = null
  , Cf = null
  , ga = null;
function gg() {
    if (ga)
        return ga;
    var e, t = Cf, n = t.length, r, o = "value"in br ? br.value : br.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return ga = o.slice(e, 1 < r ? 1 - r : void 0)
}
function va(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Xs() {
    return !0
}
function Tp() {
    return !1
}
function rn(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Xs : Tp,
        this.isPropagationStopped = Tp,
        this
    }
    return Be(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Xs)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Xs)
        },
        persist: function() {},
        isPersistent: Xs
    }),
    t
}
var fi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, kf = rn(fi), _s = Be({}, fi, {
    view: 0,
    detail: 0
}), Jb = rn(_s), au, lu, Ti, hl = Be({}, _s, {
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
    getModifierState: _f,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Ti && (Ti && e.type === "mousemove" ? (au = e.screenX - Ti.screenX,
        lu = e.screenY - Ti.screenY) : lu = au = 0,
        Ti = e),
        au)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : lu
    }
}), Pp = rn(hl), Xb = Be({}, hl, {
    dataTransfer: 0
}), Zb = rn(Xb), ex = Be({}, _s, {
    relatedTarget: 0
}), uu = rn(ex), tx = Be({}, fi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), nx = rn(tx), rx = Be({}, fi, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), ox = rn(rx), ix = Be({}, fi, {
    data: 0
}), Op = rn(ix), sx = {
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
    MozPrintableKey: "Unidentified"
}, ax = {
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
    224: "Meta"
}, lx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function ux(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = lx[e]) ? !!t[e] : !1
}
function _f() {
    return ux
}
var cx = Be({}, _s, {
    key: function(e) {
        if (e.key) {
            var t = sx[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = va(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ax[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _f,
    charCode: function(e) {
        return e.type === "keypress" ? va(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? va(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , fx = rn(cx)
  , dx = Be({}, hl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , $p = rn(dx)
  , px = Be({}, _s, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _f
})
  , hx = rn(px)
  , mx = Be({}, fi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , gx = rn(mx)
  , vx = Be({}, hl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , yx = rn(vx)
  , wx = [9, 13, 27, 32]
  , Tf = Xn && "CompositionEvent"in window
  , Vi = null;
Xn && "documentMode"in document && (Vi = document.documentMode);
var bx = Xn && "TextEvent"in window && !Vi
  , vg = Xn && (!Tf || Vi && 8 < Vi && 11 >= Vi)
  , Ip = String.fromCharCode(32)
  , Lp = !1;
function yg(e, t) {
    switch (e) {
    case "keyup":
        return wx.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function wg(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Lo = !1;
function xx(e, t) {
    switch (e) {
    case "compositionend":
        return wg(t);
    case "keypress":
        return t.which !== 32 ? null : (Lp = !0,
        Ip);
    case "textInput":
        return e = t.data,
        e === Ip && Lp ? null : e;
    default:
        return null
    }
}
function Sx(e, t) {
    if (Lo)
        return e === "compositionend" || !Tf && yg(e, t) ? (e = gg(),
        ga = Cf = br = null,
        Lo = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return vg && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Ex = {
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
    week: !0
};
function Np(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ex[e.type] : t === "textarea"
}
function bg(e, t, n, r) {
    Jm(r),
    t = Ba(t, "onChange"),
    0 < t.length && (n = new kf("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Ki = null
  , us = null;
function Cx(e) {
    Ig(e, 0)
}
function ml(e) {
    var t = Ao(e);
    if (Wm(t))
        return e
}
function kx(e, t) {
    if (e === "change")
        return t
}
var xg = !1;
if (Xn) {
    var cu;
    if (Xn) {
        var fu = "oninput"in document;
        if (!fu) {
            var Rp = document.createElement("div");
            Rp.setAttribute("oninput", "return;"),
            fu = typeof Rp.oninput == "function"
        }
        cu = fu
    } else
        cu = !1;
    xg = cu && (!document.documentMode || 9 < document.documentMode)
}
function Ap() {
    Ki && (Ki.detachEvent("onpropertychange", Sg),
    us = Ki = null)
}
function Sg(e) {
    if (e.propertyName === "value" && ml(us)) {
        var t = [];
        bg(t, us, e, wf(e)),
        tg(Cx, t)
    }
}
function _x(e, t, n) {
    e === "focusin" ? (Ap(),
    Ki = t,
    us = n,
    Ki.attachEvent("onpropertychange", Sg)) : e === "focusout" && Ap()
}
function Tx(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ml(us)
}
function Px(e, t) {
    if (e === "click")
        return ml(t)
}
function Ox(e, t) {
    if (e === "input" || e === "change")
        return ml(t)
}
function $x(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var En = typeof Object.is == "function" ? Object.is : $x;
function cs(e, t) {
    if (En(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Hu.call(t, o) || !En(e[o], t[o]))
            return !1
    }
    return !0
}
function jp(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Dp(e, t) {
    var n = jp(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = jp(n)
    }
}
function Eg(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Eg(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Cg() {
    for (var e = window, t = Na(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Na(e.document)
    }
    return t
}
function Pf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Ix(e) {
    var t = Cg()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Eg(n.ownerDocument.documentElement, n)) {
        if (r !== null && Pf(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = Dp(n, i);
                var s = Dp(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Lx = Xn && "documentMode"in document && 11 >= document.documentMode
  , No = null
  , lc = null
  , qi = null
  , uc = !1;
function Mp(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    uc || No == null || No !== Na(r) || (r = No,
    "selectionStart"in r && Pf(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    qi && cs(qi, r) || (qi = r,
    r = Ba(lc, "onSelect"),
    0 < r.length && (t = new kf("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = No)))
}
function Zs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Ro = {
    animationend: Zs("Animation", "AnimationEnd"),
    animationiteration: Zs("Animation", "AnimationIteration"),
    animationstart: Zs("Animation", "AnimationStart"),
    transitionend: Zs("Transition", "TransitionEnd")
}
  , du = {}
  , kg = {};
Xn && (kg = document.createElement("div").style,
"AnimationEvent"in window || (delete Ro.animationend.animation,
delete Ro.animationiteration.animation,
delete Ro.animationstart.animation),
"TransitionEvent"in window || delete Ro.transitionend.transition);
function gl(e) {
    if (du[e])
        return du[e];
    if (!Ro[e])
        return e;
    var t = Ro[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in kg)
            return du[e] = t[n];
    return e
}
var _g = gl("animationend")
  , Tg = gl("animationiteration")
  , Pg = gl("animationstart")
  , Og = gl("transitionend")
  , $g = new Map
  , Fp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Nr(e, t) {
    $g.set(e, t),
    uo(t, [e])
}
for (var pu = 0; pu < Fp.length; pu++) {
    var hu = Fp[pu]
      , Nx = hu.toLowerCase()
      , Rx = hu[0].toUpperCase() + hu.slice(1);
    Nr(Nx, "on" + Rx)
}
Nr(_g, "onAnimationEnd");
Nr(Tg, "onAnimationIteration");
Nr(Pg, "onAnimationStart");
Nr("dblclick", "onDoubleClick");
Nr("focusin", "onFocus");
Nr("focusout", "onBlur");
Nr(Og, "onTransitionEnd");
Zo("onMouseEnter", ["mouseout", "mouseover"]);
Zo("onMouseLeave", ["mouseout", "mouseover"]);
Zo("onPointerEnter", ["pointerout", "pointerover"]);
Zo("onPointerLeave", ["pointerout", "pointerover"]);
uo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
uo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
uo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
uo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
uo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
uo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Fi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Ax = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fi));
function Bp(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Nb(r, t, void 0, e),
    e.currentTarget = null
}
function Ig(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                      , l = a.instance
                      , c = a.currentTarget;
                    if (a = a.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    Bp(o, a, c),
                    i = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                    l = a.instance,
                    c = a.currentTarget,
                    a = a.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    Bp(o, a, c),
                    i = l
                }
        }
    }
    if (Aa)
        throw e = oc,
        Aa = !1,
        oc = null,
        e
}
function $e(e, t) {
    var n = t[hc];
    n === void 0 && (n = t[hc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Lg(t, e, 2, !1),
    n.add(r))
}
function mu(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Lg(n, e, r, t)
}
var ea = "_reactListening" + Math.random().toString(36).slice(2);
function fs(e) {
    if (!e[ea]) {
        e[ea] = !0,
        Fm.forEach(function(n) {
            n !== "selectionchange" && (Ax.has(n) || mu(n, !1, e),
            mu(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ea] || (t[ea] = !0,
        mu("selectionchange", !1, t))
    }
}
function Lg(e, t, n, r) {
    switch (mg(t)) {
    case 1:
        var o = Gb;
        break;
    case 4:
        o = Qb;
        break;
    default:
        o = Ef
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !rc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function gu(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; a !== null; ) {
                    if (s = Yr(a),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        r = i = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    tg(function() {
        var c = i
          , d = wf(n)
          , m = [];
        e: {
            var g = $g.get(e);
            if (g !== void 0) {
                var x = kf
                  , w = e;
                switch (e) {
                case "keypress":
                    if (va(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    x = fx;
                    break;
                case "focusin":
                    w = "focus",
                    x = uu;
                    break;
                case "focusout":
                    w = "blur",
                    x = uu;
                    break;
                case "beforeblur":
                case "afterblur":
                    x = uu;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    x = Pp;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    x = Zb;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    x = hx;
                    break;
                case _g:
                case Tg:
                case Pg:
                    x = nx;
                    break;
                case Og:
                    x = gx;
                    break;
                case "scroll":
                    x = Jb;
                    break;
                case "wheel":
                    x = yx;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    x = ox;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    x = $p
                }
                var y = (t & 4) !== 0
                  , E = !y && e === "scroll"
                  , h = y ? g !== null ? g + "Capture" : null : g;
                y = [];
                for (var v = c, b; v !== null; ) {
                    b = v;
                    var C = b.stateNode;
                    if (b.tag === 5 && C !== null && (b = C,
                    h !== null && (C = is(v, h),
                    C != null && y.push(ds(v, C, b)))),
                    E)
                        break;
                    v = v.return
                }
                0 < y.length && (g = new x(g,w,null,n,d),
                m.push({
                    event: g,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (g = e === "mouseover" || e === "pointerover",
                x = e === "mouseout" || e === "pointerout",
                g && n !== tc && (w = n.relatedTarget || n.fromElement) && (Yr(w) || w[Zn]))
                    break e;
                if ((x || g) && (g = d.window === d ? d : (g = d.ownerDocument) ? g.defaultView || g.parentWindow : window,
                x ? (w = n.relatedTarget || n.toElement,
                x = c,
                w = w ? Yr(w) : null,
                w !== null && (E = co(w),
                w !== E || w.tag !== 5 && w.tag !== 6) && (w = null)) : (x = null,
                w = c),
                x !== w)) {
                    if (y = Pp,
                    C = "onMouseLeave",
                    h = "onMouseEnter",
                    v = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = $p,
                    C = "onPointerLeave",
                    h = "onPointerEnter",
                    v = "pointer"),
                    E = x == null ? g : Ao(x),
                    b = w == null ? g : Ao(w),
                    g = new y(C,v + "leave",x,n,d),
                    g.target = E,
                    g.relatedTarget = b,
                    C = null,
                    Yr(d) === c && (y = new y(h,v + "enter",w,n,d),
                    y.target = b,
                    y.relatedTarget = E,
                    C = y),
                    E = C,
                    x && w)
                        t: {
                            for (y = x,
                            h = w,
                            v = 0,
                            b = y; b; b = ko(b))
                                v++;
                            for (b = 0,
                            C = h; C; C = ko(C))
                                b++;
                            for (; 0 < v - b; )
                                y = ko(y),
                                v--;
                            for (; 0 < b - v; )
                                h = ko(h),
                                b--;
                            for (; v--; ) {
                                if (y === h || h !== null && y === h.alternate)
                                    break t;
                                y = ko(y),
                                h = ko(h)
                            }
                            y = null
                        }
                    else
                        y = null;
                    x !== null && Up(m, g, x, y, !1),
                    w !== null && E !== null && Up(m, E, w, y, !0)
                }
            }
            e: {
                if (g = c ? Ao(c) : window,
                x = g.nodeName && g.nodeName.toLowerCase(),
                x === "select" || x === "input" && g.type === "file")
                    var O = kx;
                else if (Np(g))
                    if (xg)
                        O = Ox;
                    else {
                        O = Tx;
                        var T = _x
                    }
                else
                    (x = g.nodeName) && x.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (O = Px);
                if (O && (O = O(e, c))) {
                    bg(m, O, n, d);
                    break e
                }
                T && T(e, g, c),
                e === "focusout" && (T = g._wrapperState) && T.controlled && g.type === "number" && Qu(g, "number", g.value)
            }
            switch (T = c ? Ao(c) : window,
            e) {
            case "focusin":
                (Np(T) || T.contentEditable === "true") && (No = T,
                lc = c,
                qi = null);
                break;
            case "focusout":
                qi = lc = No = null;
                break;
            case "mousedown":
                uc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                uc = !1,
                Mp(m, n, d);
                break;
            case "selectionchange":
                if (Lx)
                    break;
            case "keydown":
            case "keyup":
                Mp(m, n, d)
            }
            var R;
            if (Tf)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var D = "onCompositionStart";
                        break e;
                    case "compositionend":
                        D = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        D = "onCompositionUpdate";
                        break e
                    }
                    D = void 0
                }
            else
                Lo ? yg(e, n) && (D = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
            D && (vg && n.locale !== "ko" && (Lo || D !== "onCompositionStart" ? D === "onCompositionEnd" && Lo && (R = gg()) : (br = d,
            Cf = "value"in br ? br.value : br.textContent,
            Lo = !0)),
            T = Ba(c, D),
            0 < T.length && (D = new Op(D,e,null,n,d),
            m.push({
                event: D,
                listeners: T
            }),
            R ? D.data = R : (R = wg(n),
            R !== null && (D.data = R)))),
            (R = bx ? xx(e, n) : Sx(e, n)) && (c = Ba(c, "onBeforeInput"),
            0 < c.length && (d = new Op("onBeforeInput","beforeinput",null,n,d),
            m.push({
                event: d,
                listeners: c
            }),
            d.data = R))
        }
        Ig(m, t)
    })
}
function ds(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ba(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = is(e, n),
        i != null && r.unshift(ds(e, i, o)),
        i = is(e, t),
        i != null && r.push(ds(e, i, o))),
        e = e.return
    }
    return r
}
function ko(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Up(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , c = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && c !== null && (a = c,
        o ? (l = is(n, i),
        l != null && s.unshift(ds(n, l, a))) : o || (l = is(n, i),
        l != null && s.push(ds(n, l, a)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var jx = /\r\n?/g
  , Dx = /\u0000|\uFFFD/g;
function zp(e) {
    return (typeof e == "string" ? e : "" + e).replace(jx, `
`).replace(Dx, "")
}
function ta(e, t, n) {
    if (t = zp(t),
    zp(e) !== t && n)
        throw Error(M(425))
}
function Ua() {}
var cc = null
  , fc = null;
function dc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var pc = typeof setTimeout == "function" ? setTimeout : void 0
  , Mx = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Hp = typeof Promise == "function" ? Promise : void 0
  , Fx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hp < "u" ? function(e) {
    return Hp.resolve(null).then(e).catch(Bx)
}
: pc;
function Bx(e) {
    setTimeout(function() {
        throw e
    })
}
function vu(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    ls(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    ls(t)
}
function kr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Wp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var di = Math.random().toString(36).slice(2)
  , In = "__reactFiber$" + di
  , ps = "__reactProps$" + di
  , Zn = "__reactContainer$" + di
  , hc = "__reactEvents$" + di
  , Ux = "__reactListeners$" + di
  , zx = "__reactHandles$" + di;
function Yr(e) {
    var t = e[In];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Zn] || n[In]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Wp(e); e !== null; ) {
                    if (n = e[In])
                        return n;
                    e = Wp(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Ts(e) {
    return e = e[In] || e[Zn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Ao(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(M(33))
}
function vl(e) {
    return e[ps] || null
}
var mc = []
  , jo = -1;
function Rr(e) {
    return {
        current: e
    }
}
function Ie(e) {
    0 > jo || (e.current = mc[jo],
    mc[jo] = null,
    jo--)
}
function Pe(e, t) {
    jo++,
    mc[jo] = e.current,
    e.current = t
}
var Lr = {}
  , _t = Rr(Lr)
  , Kt = Rr(!1)
  , to = Lr;
function ei(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Lr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function qt(e) {
    return e = e.childContextTypes,
    e != null
}
function za() {
    Ie(Kt),
    Ie(_t)
}
function Vp(e, t, n) {
    if (_t.current !== Lr)
        throw Error(M(168));
    Pe(_t, t),
    Pe(Kt, n)
}
function Ng(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(M(108, _b(e) || "Unknown", o));
    return Be({}, n, r)
}
function Ha(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Lr,
    to = _t.current,
    Pe(_t, e),
    Pe(Kt, Kt.current),
    !0
}
function Kp(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(M(169));
    n ? (e = Ng(e, t, to),
    r.__reactInternalMemoizedMergedChildContext = e,
    Ie(Kt),
    Ie(_t),
    Pe(_t, e)) : Ie(Kt),
    Pe(Kt, n)
}
var qn = null
  , yl = !1
  , yu = !1;
function Rg(e) {
    qn === null ? qn = [e] : qn.push(e)
}
function Hx(e) {
    yl = !0,
    Rg(e)
}
function Ar() {
    if (!yu && qn !== null) {
        yu = !0;
        var e = 0
          , t = xe;
        try {
            var n = qn;
            for (xe = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            qn = null,
            yl = !1
        } catch (o) {
            throw qn !== null && (qn = qn.slice(e + 1)),
            ig(bf, Ar),
            o
        } finally {
            xe = t,
            yu = !1
        }
    }
    return null
}
var Do = []
  , Mo = 0
  , Wa = null
  , Va = 0
  , sn = []
  , an = 0
  , no = null
  , Yn = 1
  , Gn = "";
function Ur(e, t) {
    Do[Mo++] = Va,
    Do[Mo++] = Wa,
    Wa = e,
    Va = t
}
function Ag(e, t, n) {
    sn[an++] = Yn,
    sn[an++] = Gn,
    sn[an++] = no,
    no = e;
    var r = Yn;
    e = Gn;
    var o = 32 - xn(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - xn(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        Yn = 1 << 32 - xn(t) + o | n << o | r,
        Gn = i + e
    } else
        Yn = 1 << i | n << o | r,
        Gn = e
}
function Of(e) {
    e.return !== null && (Ur(e, 1),
    Ag(e, 1, 0))
}
function $f(e) {
    for (; e === Wa; )
        Wa = Do[--Mo],
        Do[Mo] = null,
        Va = Do[--Mo],
        Do[Mo] = null;
    for (; e === no; )
        no = sn[--an],
        sn[an] = null,
        Gn = sn[--an],
        sn[an] = null,
        Yn = sn[--an],
        sn[an] = null
}
var en = null
  , Zt = null
  , Le = !1
  , bn = null;
function jg(e, t) {
    var n = un(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function qp(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        en = e,
        Zt = kr(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        en = e,
        Zt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = no !== null ? {
            id: Yn,
            overflow: Gn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = un(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        en = e,
        Zt = null,
        !0) : !1;
    default:
        return !1
    }
}
function gc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function vc(e) {
    if (Le) {
        var t = Zt;
        if (t) {
            var n = t;
            if (!qp(e, t)) {
                if (gc(e))
                    throw Error(M(418));
                t = kr(n.nextSibling);
                var r = en;
                t && qp(e, t) ? jg(r, n) : (e.flags = e.flags & -4097 | 2,
                Le = !1,
                en = e)
            }
        } else {
            if (gc(e))
                throw Error(M(418));
            e.flags = e.flags & -4097 | 2,
            Le = !1,
            en = e
        }
    }
}
function Yp(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    en = e
}
function na(e) {
    if (e !== en)
        return !1;
    if (!Le)
        return Yp(e),
        Le = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !dc(e.type, e.memoizedProps)),
    t && (t = Zt)) {
        if (gc(e))
            throw Dg(),
            Error(M(418));
        for (; t; )
            jg(e, t),
            t = kr(t.nextSibling)
    }
    if (Yp(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(M(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Zt = kr(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Zt = null
        }
    } else
        Zt = en ? kr(e.stateNode.nextSibling) : null;
    return !0
}
function Dg() {
    for (var e = Zt; e; )
        e = kr(e.nextSibling)
}
function ti() {
    Zt = en = null,
    Le = !1
}
function If(e) {
    bn === null ? bn = [e] : bn.push(e)
}
var Wx = rr.ReactCurrentBatchConfig;
function vn(e, t) {
    if (e && e.defaultProps) {
        t = Be({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Ka = Rr(null)
  , qa = null
  , Fo = null
  , Lf = null;
function Nf() {
    Lf = Fo = qa = null
}
function Rf(e) {
    var t = Ka.current;
    Ie(Ka),
    e._currentValue = t
}
function yc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Yo(e, t) {
    qa = e,
    Lf = Fo = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Vt = !0),
    e.firstContext = null)
}
function pn(e) {
    var t = e._currentValue;
    if (Lf !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Fo === null) {
            if (qa === null)
                throw Error(M(308));
            Fo = e,
            qa.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Fo = Fo.next = e;
    return t
}
var Gr = null;
function Af(e) {
    Gr === null ? Gr = [e] : Gr.push(e)
}
function Mg(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    Af(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    er(e, r)
}
function er(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var mr = !1;
function jf(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Fg(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Qn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function _r(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    fe & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        er(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    Af(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    er(e, n)
}
function ya(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        xf(e, n)
    }
}
function Gp(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Ya(e, t, n, r) {
    var o = e.updateQueue;
    mr = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a
          , c = l.next;
        l.next = null,
        s === null ? i = c : s.next = c,
        s = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        a = d.lastBaseUpdate,
        a !== s && (a === null ? d.firstBaseUpdate = c : a.next = c,
        d.lastBaseUpdate = l))
    }
    if (i !== null) {
        var m = o.baseState;
        s = 0,
        d = c = l = null,
        a = i;
        do {
            var g = a.lane
              , x = a.eventTime;
            if ((r & g) === g) {
                d !== null && (d = d.next = {
                    eventTime: x,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var w = e
                      , y = a;
                    switch (g = t,
                    x = n,
                    y.tag) {
                    case 1:
                        if (w = y.payload,
                        typeof w == "function") {
                            m = w.call(x, m, g);
                            break e
                        }
                        m = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = y.payload,
                        g = typeof w == "function" ? w.call(x, m, g) : w,
                        g == null)
                            break e;
                        m = Be({}, m, g);
                        break e;
                    case 2:
                        mr = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                g = o.effects,
                g === null ? o.effects = [a] : g.push(a))
            } else
                x = {
                    eventTime: x,
                    lane: g,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                d === null ? (c = d = x,
                l = m) : d = d.next = x,
                s |= g;
            if (a = a.next,
            a === null) {
                if (a = o.shared.pending,
                a === null)
                    break;
                g = a,
                a = g.next,
                g.next = null,
                o.lastBaseUpdate = g,
                o.shared.pending = null
            }
        } while (1);
        if (d === null && (l = m),
        o.baseState = l,
        o.firstBaseUpdate = c,
        o.lastBaseUpdate = d,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        oo |= s,
        e.lanes = s,
        e.memoizedState = m
    }
}
function Qp(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(M(191, o));
                o.call(r)
            }
        }
}
var Bg = new Mm.Component().refs;
function wc(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Be({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var wl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? co(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Nt()
          , o = Pr(e)
          , i = Qn(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = _r(e, i, o),
        t !== null && (Sn(t, e, o, r),
        ya(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Nt()
          , o = Pr(e)
          , i = Qn(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = _r(e, i, o),
        t !== null && (Sn(t, e, o, r),
        ya(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Nt()
          , r = Pr(e)
          , o = Qn(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = _r(e, o, r),
        t !== null && (Sn(t, e, r, n),
        ya(t, e, r))
    }
};
function Jp(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !cs(n, r) || !cs(o, i) : !0
}
function Ug(e, t, n) {
    var r = !1
      , o = Lr
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = pn(i) : (o = qt(t) ? to : _t.current,
    r = t.contextTypes,
    i = (r = r != null) ? ei(e, o) : Lr),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = wl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Xp(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && wl.enqueueReplaceState(t, t.state, null)
}
function bc(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = Bg,
    jf(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = pn(i) : (i = qt(t) ? to : _t.current,
    o.context = ei(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (wc(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && wl.enqueueReplaceState(o, o.state, null),
    Ya(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Pi(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(M(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(M(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var a = o.refs;
                a === Bg && (a = o.refs = {}),
                s === null ? delete a[i] : a[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(M(284));
        if (!n._owner)
            throw Error(M(290, e))
    }
    return e
}
function ra(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Zp(e) {
    var t = e._init;
    return t(e._payload)
}
function zg(e) {
    function t(h, v) {
        if (e) {
            var b = h.deletions;
            b === null ? (h.deletions = [v],
            h.flags |= 16) : b.push(v)
        }
    }
    function n(h, v) {
        if (!e)
            return null;
        for (; v !== null; )
            t(h, v),
            v = v.sibling;
        return null
    }
    function r(h, v) {
        for (h = new Map; v !== null; )
            v.key !== null ? h.set(v.key, v) : h.set(v.index, v),
            v = v.sibling;
        return h
    }
    function o(h, v) {
        return h = Or(h, v),
        h.index = 0,
        h.sibling = null,
        h
    }
    function i(h, v, b) {
        return h.index = b,
        e ? (b = h.alternate,
        b !== null ? (b = b.index,
        b < v ? (h.flags |= 2,
        v) : b) : (h.flags |= 2,
        v)) : (h.flags |= 1048576,
        v)
    }
    function s(h) {
        return e && h.alternate === null && (h.flags |= 2),
        h
    }
    function a(h, v, b, C) {
        return v === null || v.tag !== 6 ? (v = ku(b, h.mode, C),
        v.return = h,
        v) : (v = o(v, b),
        v.return = h,
        v)
    }
    function l(h, v, b, C) {
        var O = b.type;
        return O === Io ? d(h, v, b.props.children, C, b.key) : v !== null && (v.elementType === O || typeof O == "object" && O !== null && O.$$typeof === hr && Zp(O) === v.type) ? (C = o(v, b.props),
        C.ref = Pi(h, v, b),
        C.return = h,
        C) : (C = Ca(b.type, b.key, b.props, null, h.mode, C),
        C.ref = Pi(h, v, b),
        C.return = h,
        C)
    }
    function c(h, v, b, C) {
        return v === null || v.tag !== 4 || v.stateNode.containerInfo !== b.containerInfo || v.stateNode.implementation !== b.implementation ? (v = _u(b, h.mode, C),
        v.return = h,
        v) : (v = o(v, b.children || []),
        v.return = h,
        v)
    }
    function d(h, v, b, C, O) {
        return v === null || v.tag !== 7 ? (v = eo(b, h.mode, C, O),
        v.return = h,
        v) : (v = o(v, b),
        v.return = h,
        v)
    }
    function m(h, v, b) {
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return v = ku("" + v, h.mode, b),
            v.return = h,
            v;
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Ks:
                return b = Ca(v.type, v.key, v.props, null, h.mode, b),
                b.ref = Pi(h, null, v),
                b.return = h,
                b;
            case $o:
                return v = _u(v, h.mode, b),
                v.return = h,
                v;
            case hr:
                var C = v._init;
                return m(h, C(v._payload), b)
            }
            if (Di(v) || Ei(v))
                return v = eo(v, h.mode, b, null),
                v.return = h,
                v;
            ra(h, v)
        }
        return null
    }
    function g(h, v, b, C) {
        var O = v !== null ? v.key : null;
        if (typeof b == "string" && b !== "" || typeof b == "number")
            return O !== null ? null : a(h, v, "" + b, C);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case Ks:
                return b.key === O ? l(h, v, b, C) : null;
            case $o:
                return b.key === O ? c(h, v, b, C) : null;
            case hr:
                return O = b._init,
                g(h, v, O(b._payload), C)
            }
            if (Di(b) || Ei(b))
                return O !== null ? null : d(h, v, b, C, null);
            ra(h, b)
        }
        return null
    }
    function x(h, v, b, C, O) {
        if (typeof C == "string" && C !== "" || typeof C == "number")
            return h = h.get(b) || null,
            a(v, h, "" + C, O);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
            case Ks:
                return h = h.get(C.key === null ? b : C.key) || null,
                l(v, h, C, O);
            case $o:
                return h = h.get(C.key === null ? b : C.key) || null,
                c(v, h, C, O);
            case hr:
                var T = C._init;
                return x(h, v, b, T(C._payload), O)
            }
            if (Di(C) || Ei(C))
                return h = h.get(b) || null,
                d(v, h, C, O, null);
            ra(v, C)
        }
        return null
    }
    function w(h, v, b, C) {
        for (var O = null, T = null, R = v, D = v = 0, H = null; R !== null && D < b.length; D++) {
            R.index > D ? (H = R,
            R = null) : H = R.sibling;
            var z = g(h, R, b[D], C);
            if (z === null) {
                R === null && (R = H);
                break
            }
            e && R && z.alternate === null && t(h, R),
            v = i(z, v, D),
            T === null ? O = z : T.sibling = z,
            T = z,
            R = H
        }
        if (D === b.length)
            return n(h, R),
            Le && Ur(h, D),
            O;
        if (R === null) {
            for (; D < b.length; D++)
                R = m(h, b[D], C),
                R !== null && (v = i(R, v, D),
                T === null ? O = R : T.sibling = R,
                T = R);
            return Le && Ur(h, D),
            O
        }
        for (R = r(h, R); D < b.length; D++)
            H = x(R, h, D, b[D], C),
            H !== null && (e && H.alternate !== null && R.delete(H.key === null ? D : H.key),
            v = i(H, v, D),
            T === null ? O = H : T.sibling = H,
            T = H);
        return e && R.forEach(function(he) {
            return t(h, he)
        }),
        Le && Ur(h, D),
        O
    }
    function y(h, v, b, C) {
        var O = Ei(b);
        if (typeof O != "function")
            throw Error(M(150));
        if (b = O.call(b),
        b == null)
            throw Error(M(151));
        for (var T = O = null, R = v, D = v = 0, H = null, z = b.next(); R !== null && !z.done; D++,
        z = b.next()) {
            R.index > D ? (H = R,
            R = null) : H = R.sibling;
            var he = g(h, R, z.value, C);
            if (he === null) {
                R === null && (R = H);
                break
            }
            e && R && he.alternate === null && t(h, R),
            v = i(he, v, D),
            T === null ? O = he : T.sibling = he,
            T = he,
            R = H
        }
        if (z.done)
            return n(h, R),
            Le && Ur(h, D),
            O;
        if (R === null) {
            for (; !z.done; D++,
            z = b.next())
                z = m(h, z.value, C),
                z !== null && (v = i(z, v, D),
                T === null ? O = z : T.sibling = z,
                T = z);
            return Le && Ur(h, D),
            O
        }
        for (R = r(h, R); !z.done; D++,
        z = b.next())
            z = x(R, h, D, z.value, C),
            z !== null && (e && z.alternate !== null && R.delete(z.key === null ? D : z.key),
            v = i(z, v, D),
            T === null ? O = z : T.sibling = z,
            T = z);
        return e && R.forEach(function(Ne) {
            return t(h, Ne)
        }),
        Le && Ur(h, D),
        O
    }
    function E(h, v, b, C) {
        if (typeof b == "object" && b !== null && b.type === Io && b.key === null && (b = b.props.children),
        typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case Ks:
                e: {
                    for (var O = b.key, T = v; T !== null; ) {
                        if (T.key === O) {
                            if (O = b.type,
                            O === Io) {
                                if (T.tag === 7) {
                                    n(h, T.sibling),
                                    v = o(T, b.props.children),
                                    v.return = h,
                                    h = v;
                                    break e
                                }
                            } else if (T.elementType === O || typeof O == "object" && O !== null && O.$$typeof === hr && Zp(O) === T.type) {
                                n(h, T.sibling),
                                v = o(T, b.props),
                                v.ref = Pi(h, T, b),
                                v.return = h,
                                h = v;
                                break e
                            }
                            n(h, T);
                            break
                        } else
                            t(h, T);
                        T = T.sibling
                    }
                    b.type === Io ? (v = eo(b.props.children, h.mode, C, b.key),
                    v.return = h,
                    h = v) : (C = Ca(b.type, b.key, b.props, null, h.mode, C),
                    C.ref = Pi(h, v, b),
                    C.return = h,
                    h = C)
                }
                return s(h);
            case $o:
                e: {
                    for (T = b.key; v !== null; ) {
                        if (v.key === T)
                            if (v.tag === 4 && v.stateNode.containerInfo === b.containerInfo && v.stateNode.implementation === b.implementation) {
                                n(h, v.sibling),
                                v = o(v, b.children || []),
                                v.return = h,
                                h = v;
                                break e
                            } else {
                                n(h, v);
                                break
                            }
                        else
                            t(h, v);
                        v = v.sibling
                    }
                    v = _u(b, h.mode, C),
                    v.return = h,
                    h = v
                }
                return s(h);
            case hr:
                return T = b._init,
                E(h, v, T(b._payload), C)
            }
            if (Di(b))
                return w(h, v, b, C);
            if (Ei(b))
                return y(h, v, b, C);
            ra(h, b)
        }
        return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b,
        v !== null && v.tag === 6 ? (n(h, v.sibling),
        v = o(v, b),
        v.return = h,
        h = v) : (n(h, v),
        v = ku(b, h.mode, C),
        v.return = h,
        h = v),
        s(h)) : n(h, v)
    }
    return E
}
var ni = zg(!0)
  , Hg = zg(!1)
  , Ps = {}
  , An = Rr(Ps)
  , hs = Rr(Ps)
  , ms = Rr(Ps);
function Qr(e) {
    if (e === Ps)
        throw Error(M(174));
    return e
}
function Df(e, t) {
    switch (Pe(ms, t),
    Pe(hs, e),
    Pe(An, Ps),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Xu(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Xu(t, e)
    }
    Ie(An),
    Pe(An, t)
}
function ri() {
    Ie(An),
    Ie(hs),
    Ie(ms)
}
function Wg(e) {
    Qr(ms.current);
    var t = Qr(An.current)
      , n = Xu(t, e.type);
    t !== n && (Pe(hs, e),
    Pe(An, n))
}
function Mf(e) {
    hs.current === e && (Ie(An),
    Ie(hs))
}
var Ae = Rr(0);
function Ga(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var wu = [];
function Ff() {
    for (var e = 0; e < wu.length; e++)
        wu[e]._workInProgressVersionPrimary = null;
    wu.length = 0
}
var wa = rr.ReactCurrentDispatcher
  , bu = rr.ReactCurrentBatchConfig
  , ro = 0
  , Me = null
  , it = null
  , pt = null
  , Qa = !1
  , Yi = !1
  , gs = 0
  , Vx = 0;
function xt() {
    throw Error(M(321))
}
function Bf(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!En(e[n], t[n]))
            return !1;
    return !0
}
function Uf(e, t, n, r, o, i) {
    if (ro = i,
    Me = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    wa.current = e === null || e.memoizedState === null ? Gx : Qx,
    e = n(r, o),
    Yi) {
        i = 0;
        do {
            if (Yi = !1,
            gs = 0,
            25 <= i)
                throw Error(M(301));
            i += 1,
            pt = it = null,
            t.updateQueue = null,
            wa.current = Jx,
            e = n(r, o)
        } while (Yi)
    }
    if (wa.current = Ja,
    t = it !== null && it.next !== null,
    ro = 0,
    pt = it = Me = null,
    Qa = !1,
    t)
        throw Error(M(300));
    return e
}
function zf() {
    var e = gs !== 0;
    return gs = 0,
    e
}
function $n() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return pt === null ? Me.memoizedState = pt = e : pt = pt.next = e,
    pt
}
function hn() {
    if (it === null) {
        var e = Me.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = it.next;
    var t = pt === null ? Me.memoizedState : pt.next;
    if (t !== null)
        pt = t,
        it = e;
    else {
        if (e === null)
            throw Error(M(310));
        it = e,
        e = {
            memoizedState: it.memoizedState,
            baseState: it.baseState,
            baseQueue: it.baseQueue,
            queue: it.queue,
            next: null
        },
        pt === null ? Me.memoizedState = pt = e : pt = pt.next = e
    }
    return pt
}
function vs(e, t) {
    return typeof t == "function" ? t(e) : t
}
function xu(e) {
    var t = hn()
      , n = t.queue;
    if (n === null)
        throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = it
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var a = s = null
          , l = null
          , c = i;
        do {
            var d = c.lane;
            if ((ro & d) === d)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var m = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                l === null ? (a = l = m,
                s = r) : l = l.next = m,
                Me.lanes |= d,
                oo |= d
            }
            c = c.next
        } while (c !== null && c !== i);
        l === null ? s = r : l.next = a,
        En(r, t.memoizedState) || (Vt = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            Me.lanes |= i,
            oo |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Su(e) {
    var t = hn()
      , n = t.queue;
    if (n === null)
        throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        En(i, t.memoizedState) || (Vt = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Vg() {}
function Kg(e, t) {
    var n = Me
      , r = hn()
      , o = t()
      , i = !En(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Vt = !0),
    r = r.queue,
    Hf(Gg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || pt !== null && pt.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        ys(9, Yg.bind(null, n, r, o, t), void 0, null),
        ht === null)
            throw Error(M(349));
        ro & 30 || qg(n, t, o)
    }
    return o
}
function qg(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Me.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Me.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Yg(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Qg(t) && Jg(e)
}
function Gg(e, t, n) {
    return n(function() {
        Qg(t) && Jg(e)
    })
}
function Qg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !En(e, n)
    } catch {
        return !0
    }
}
function Jg(e) {
    var t = er(e, 1);
    t !== null && Sn(t, e, 1, -1)
}
function eh(e) {
    var t = $n();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vs,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Yx.bind(null, Me, e),
    [t.memoizedState, e]
}
function ys(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = Me.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Me.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Xg() {
    return hn().memoizedState
}
function ba(e, t, n, r) {
    var o = $n();
    Me.flags |= e,
    o.memoizedState = ys(1 | t, n, void 0, r === void 0 ? null : r)
}
function bl(e, t, n, r) {
    var o = hn();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (it !== null) {
        var s = it.memoizedState;
        if (i = s.destroy,
        r !== null && Bf(r, s.deps)) {
            o.memoizedState = ys(t, n, i, r);
            return
        }
    }
    Me.flags |= e,
    o.memoizedState = ys(1 | t, n, i, r)
}
function th(e, t) {
    return ba(8390656, 8, e, t)
}
function Hf(e, t) {
    return bl(2048, 8, e, t)
}
function Zg(e, t) {
    return bl(4, 2, e, t)
}
function ev(e, t) {
    return bl(4, 4, e, t)
}
function tv(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function nv(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    bl(4, 4, tv.bind(null, t, e), n)
}
function Wf() {}
function rv(e, t) {
    var n = hn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bf(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function ov(e, t) {
    var n = hn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bf(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function iv(e, t, n) {
    return ro & 21 ? (En(n, t) || (n = lg(),
    Me.lanes |= n,
    oo |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Vt = !0),
    e.memoizedState = n)
}
function Kx(e, t) {
    var n = xe;
    xe = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = bu.transition;
    bu.transition = {};
    try {
        e(!1),
        t()
    } finally {
        xe = n,
        bu.transition = r
    }
}
function sv() {
    return hn().memoizedState
}
function qx(e, t, n) {
    var r = Pr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    av(e))
        lv(t, n);
    else if (n = Mg(e, t, n, r),
    n !== null) {
        var o = Nt();
        Sn(n, e, r, o),
        uv(n, t, r)
    }
}
function Yx(e, t, n) {
    var r = Pr(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (av(e))
        lv(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , a = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = a,
                En(a, s)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    Af(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Mg(e, t, o, r),
        n !== null && (o = Nt(),
        Sn(n, e, r, o),
        uv(n, t, r))
    }
}
function av(e) {
    var t = e.alternate;
    return e === Me || t !== null && t === Me
}
function lv(e, t) {
    Yi = Qa = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function uv(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        xf(e, n)
    }
}
var Ja = {
    readContext: pn,
    useCallback: xt,
    useContext: xt,
    useEffect: xt,
    useImperativeHandle: xt,
    useInsertionEffect: xt,
    useLayoutEffect: xt,
    useMemo: xt,
    useReducer: xt,
    useRef: xt,
    useState: xt,
    useDebugValue: xt,
    useDeferredValue: xt,
    useTransition: xt,
    useMutableSource: xt,
    useSyncExternalStore: xt,
    useId: xt,
    unstable_isNewReconciler: !1
}
  , Gx = {
    readContext: pn,
    useCallback: function(e, t) {
        return $n().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: pn,
    useEffect: th,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        ba(4194308, 4, tv.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return ba(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return ba(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = $n();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = $n();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = qx.bind(null, Me, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = $n();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: eh,
    useDebugValue: Wf,
    useDeferredValue: function(e) {
        return $n().memoizedState = e
    },
    useTransition: function() {
        var e = eh(!1)
          , t = e[0];
        return e = Kx.bind(null, e[1]),
        $n().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = Me
          , o = $n();
        if (Le) {
            if (n === void 0)
                throw Error(M(407));
            n = n()
        } else {
            if (n = t(),
            ht === null)
                throw Error(M(349));
            ro & 30 || qg(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        th(Gg.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        ys(9, Yg.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = $n()
          , t = ht.identifierPrefix;
        if (Le) {
            var n = Gn
              , r = Yn;
            n = (r & ~(1 << 32 - xn(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = gs++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Vx++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Qx = {
    readContext: pn,
    useCallback: rv,
    useContext: pn,
    useEffect: Hf,
    useImperativeHandle: nv,
    useInsertionEffect: Zg,
    useLayoutEffect: ev,
    useMemo: ov,
    useReducer: xu,
    useRef: Xg,
    useState: function() {
        return xu(vs)
    },
    useDebugValue: Wf,
    useDeferredValue: function(e) {
        var t = hn();
        return iv(t, it.memoizedState, e)
    },
    useTransition: function() {
        var e = xu(vs)[0]
          , t = hn().memoizedState;
        return [e, t]
    },
    useMutableSource: Vg,
    useSyncExternalStore: Kg,
    useId: sv,
    unstable_isNewReconciler: !1
}
  , Jx = {
    readContext: pn,
    useCallback: rv,
    useContext: pn,
    useEffect: Hf,
    useImperativeHandle: nv,
    useInsertionEffect: Zg,
    useLayoutEffect: ev,
    useMemo: ov,
    useReducer: Su,
    useRef: Xg,
    useState: function() {
        return Su(vs)
    },
    useDebugValue: Wf,
    useDeferredValue: function(e) {
        var t = hn();
        return it === null ? t.memoizedState = e : iv(t, it.memoizedState, e)
    },
    useTransition: function() {
        var e = Su(vs)[0]
          , t = hn().memoizedState;
        return [e, t]
    },
    useMutableSource: Vg,
    useSyncExternalStore: Kg,
    useId: sv,
    unstable_isNewReconciler: !1
};
function oi(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += kb(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Eu(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function xc(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Xx = typeof WeakMap == "function" ? WeakMap : Map;
function cv(e, t, n) {
    n = Qn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Za || (Za = !0,
        Ic = r),
        xc(e, t)
    }
    ,
    n
}
function fv(e, t, n) {
    n = Qn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            xc(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        xc(e, t),
        typeof r != "function" && (Tr === null ? Tr = new Set([this]) : Tr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function nh(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Xx;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = dS.bind(null, e, t, n),
    t.then(e, e))
}
function rh(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function oh(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qn(-1, 1),
    t.tag = 2,
    _r(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Zx = rr.ReactCurrentOwner
  , Vt = !1;
function $t(e, t, n, r) {
    t.child = e === null ? Hg(t, null, n, r) : ni(t, e.child, n, r)
}
function ih(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Yo(t, o),
    r = Uf(e, t, n, r, i, o),
    n = zf(),
    e !== null && !Vt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    tr(e, t, o)) : (Le && n && Of(t),
    t.flags |= 1,
    $t(e, t, r, o),
    t.child)
}
function sh(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Xf(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        dv(e, t, i, r, o)) : (e = Ca(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : cs,
        n(s, r) && e.ref === t.ref)
            return tr(e, t, o)
    }
    return t.flags |= 1,
    e = Or(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function dv(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (cs(i, r) && e.ref === t.ref)
            if (Vt = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Vt = !0);
            else
                return t.lanes = e.lanes,
                tr(e, t, o)
    }
    return Sc(e, t, n, r, o)
}
function pv(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            Pe(Uo, Xt),
            Xt |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                Pe(Uo, Xt),
                Xt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            Pe(Uo, Xt),
            Xt |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        Pe(Uo, Xt),
        Xt |= r;
    return $t(e, t, o, n),
    t.child
}
function hv(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Sc(e, t, n, r, o) {
    var i = qt(n) ? to : _t.current;
    return i = ei(t, i),
    Yo(t, o),
    n = Uf(e, t, n, r, i, o),
    r = zf(),
    e !== null && !Vt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    tr(e, t, o)) : (Le && r && Of(t),
    t.flags |= 1,
    $t(e, t, n, o),
    t.child)
}
function ah(e, t, n, r, o) {
    if (qt(n)) {
        var i = !0;
        Ha(t)
    } else
        i = !1;
    if (Yo(t, o),
    t.stateNode === null)
        xa(e, t),
        Ug(t, n, r),
        bc(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , a = t.memoizedProps;
        s.props = a;
        var l = s.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = pn(c) : (c = qt(n) ? to : _t.current,
        c = ei(t, c));
        var d = n.getDerivedStateFromProps
          , m = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        m || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== c) && Xp(t, s, r, c),
        mr = !1;
        var g = t.memoizedState;
        s.state = g,
        Ya(t, r, s, o),
        l = t.memoizedState,
        a !== r || g !== l || Kt.current || mr ? (typeof d == "function" && (wc(t, n, d, r),
        l = t.memoizedState),
        (a = mr || Jp(t, n, a, r, g, l, c)) ? (m || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        s.props = r,
        s.state = l,
        s.context = c,
        r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Fg(e, t),
        a = t.memoizedProps,
        c = t.type === t.elementType ? a : vn(t.type, a),
        s.props = c,
        m = t.pendingProps,
        g = s.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = pn(l) : (l = qt(n) ? to : _t.current,
        l = ei(t, l));
        var x = n.getDerivedStateFromProps;
        (d = typeof x == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== m || g !== l) && Xp(t, s, r, l),
        mr = !1,
        g = t.memoizedState,
        s.state = g,
        Ya(t, r, s, o);
        var w = t.memoizedState;
        a !== m || g !== w || Kt.current || mr ? (typeof x == "function" && (wc(t, n, x, r),
        w = t.memoizedState),
        (c = mr || Jp(t, n, c, r, g, w, l) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, l)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        s.props = r,
        s.state = w,
        s.context = l,
        r = c) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Ec(e, t, n, r, i, o)
}
function Ec(e, t, n, r, o, i) {
    hv(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && Kp(t, n, !1),
        tr(e, t, i);
    r = t.stateNode,
    Zx.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = ni(t, e.child, null, i),
    t.child = ni(t, null, a, i)) : $t(e, t, a, i),
    t.memoizedState = r.state,
    o && Kp(t, n, !0),
    t.child
}
function mv(e) {
    var t = e.stateNode;
    t.pendingContext ? Vp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vp(e, t.context, !1),
    Df(e, t.containerInfo)
}
function lh(e, t, n, r, o) {
    return ti(),
    If(o),
    t.flags |= 256,
    $t(e, t, n, r),
    t.child
}
var Cc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function kc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function gv(e, t, n) {
    var r = t.pendingProps, o = Ae.current, i = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    Pe(Ae, o & 1),
    e === null)
        return vc(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = El(s, r, 0, null),
        e = eo(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = kc(n),
        t.memoizedState = Cc,
        e) : Vf(t, s));
    if (o = e.memoizedState,
    o !== null && (a = o.dehydrated,
    a !== null))
        return eS(e, t, s, r, a, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Or(o, l),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        a !== null ? i = Or(a, i) : (i = eo(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? kc(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Cc,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = Or(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Vf(e, t) {
    return t = El({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function oa(e, t, n, r) {
    return r !== null && If(r),
    ni(t, e.child, null, n),
    e = Vf(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function eS(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Eu(Error(M(422))),
        oa(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = El({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = eo(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && ni(t, e.child, null, s),
        t.child.memoizedState = kc(s),
        t.memoizedState = Cc,
        i);
    if (!(t.mode & 1))
        return oa(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        i = Error(M(419)),
        r = Eu(i, r, void 0),
        oa(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
    Vt || a) {
        if (r = ht,
        r !== null) {
            switch (s & -s) {
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
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            er(e, o),
            Sn(r, e, o, -1))
        }
        return Jf(),
        r = Eu(Error(M(421))),
        oa(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = pS.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    Zt = kr(o.nextSibling),
    en = t,
    Le = !0,
    bn = null,
    e !== null && (sn[an++] = Yn,
    sn[an++] = Gn,
    sn[an++] = no,
    Yn = e.id,
    Gn = e.overflow,
    no = t),
    t = Vf(t, r.children),
    t.flags |= 4096,
    t)
}
function uh(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    yc(e.return, t, n)
}
function Cu(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function vv(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if ($t(e, t, r.children, n),
    r = Ae.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && uh(e, n, t);
                else if (e.tag === 19)
                    uh(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (Pe(Ae, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Ga(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Cu(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Ga(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Cu(t, !0, n, null, i);
            break;
        case "together":
            Cu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function xa(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function tr(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    oo |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(M(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Or(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Or(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function tS(e, t, n) {
    switch (t.tag) {
    case 3:
        mv(t),
        ti();
        break;
    case 5:
        Wg(t);
        break;
    case 1:
        qt(t.type) && Ha(t);
        break;
    case 4:
        Df(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        Pe(Ka, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (Pe(Ae, Ae.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? gv(e, t, n) : (Pe(Ae, Ae.current & 1),
            e = tr(e, t, n),
            e !== null ? e.sibling : null);
        Pe(Ae, Ae.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return vv(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        Pe(Ae, Ae.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        pv(e, t, n)
    }
    return tr(e, t, n)
}
var yv, _c, wv, bv;
yv = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
_c = function() {}
;
wv = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Qr(An.current);
        var i = null;
        switch (n) {
        case "input":
            o = Yu(e, o),
            r = Yu(e, r),
            i = [];
            break;
        case "select":
            o = Be({}, o, {
                value: void 0
            }),
            r = Be({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = Ju(e, o),
            r = Ju(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ua)
        }
        Zu(n, r);
        var s;
        n = null;
        for (c in o)
            if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
                if (c === "style") {
                    var a = o[c];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (rs.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in r) {
            var l = r[c];
            if (a = o != null ? o[c] : void 0,
            r.hasOwnProperty(c) && l !== a && (l != null || a != null))
                if (c === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                            n[s] = l[s])
                    } else
                        n || (i || (i = []),
                        i.push(c, n)),
                        n = l;
                else
                    c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (i = i || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (rs.hasOwnProperty(c) ? (l != null && c === "onScroll" && $e("scroll", e),
                    i || a === l || (i = [])) : (i = i || []).push(c, l))
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
bv = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Oi(e, t) {
    if (!Le)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function St(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function nS(e, t, n) {
    var r = t.pendingProps;
    switch ($f(t),
    t.tag) {
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
        return St(t),
        null;
    case 1:
        return qt(t.type) && za(),
        St(t),
        null;
    case 3:
        return r = t.stateNode,
        ri(),
        Ie(Kt),
        Ie(_t),
        Ff(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (na(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        bn !== null && (Rc(bn),
        bn = null))),
        _c(e, t),
        St(t),
        null;
    case 5:
        Mf(t);
        var o = Qr(ms.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            wv(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(M(166));
                return St(t),
                null
            }
            if (e = Qr(An.current),
            na(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[In] = t,
                r[ps] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    $e("cancel", r),
                    $e("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    $e("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Fi.length; o++)
                        $e(Fi[o], r);
                    break;
                case "source":
                    $e("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    $e("error", r),
                    $e("load", r);
                    break;
                case "details":
                    $e("toggle", r);
                    break;
                case "input":
                    yp(r, i),
                    $e("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    $e("invalid", r);
                    break;
                case "textarea":
                    bp(r, i),
                    $e("invalid", r)
                }
                Zu(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var a = i[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && ta(r.textContent, a, e),
                        o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && ta(r.textContent, a, e),
                        o = ["children", "" + a]) : rs.hasOwnProperty(s) && a != null && s === "onScroll" && $e("scroll", r)
                    }
                switch (n) {
                case "input":
                    qs(r),
                    wp(r, i, !0);
                    break;
                case "textarea":
                    qs(r),
                    xp(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Ua)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = qm(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[In] = t,
                e[ps] = r,
                yv(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = ec(n, r),
                    n) {
                    case "dialog":
                        $e("cancel", e),
                        $e("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        $e("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Fi.length; o++)
                            $e(Fi[o], e);
                        o = r;
                        break;
                    case "source":
                        $e("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        $e("error", e),
                        $e("load", e),
                        o = r;
                        break;
                    case "details":
                        $e("toggle", e),
                        o = r;
                        break;
                    case "input":
                        yp(e, r),
                        o = Yu(e, r),
                        $e("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = Be({}, r, {
                            value: void 0
                        }),
                        $e("invalid", e);
                        break;
                    case "textarea":
                        bp(e, r),
                        o = Ju(e, r),
                        $e("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Zu(n, o),
                    a = o;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            i === "style" ? Qm(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Ym(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && os(e, l) : typeof l == "number" && os(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (rs.hasOwnProperty(i) ? l != null && i === "onScroll" && $e("scroll", e) : l != null && mf(e, i, l, s))
                        }
                    switch (n) {
                    case "input":
                        qs(e),
                        wp(e, r, !1);
                        break;
                    case "textarea":
                        qs(e),
                        xp(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Ir(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Wo(e, !!r.multiple, i, !1) : r.defaultValue != null && Wo(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Ua)
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
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return St(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            bv(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(M(166));
            if (n = Qr(ms.current),
            Qr(An.current),
            na(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[In] = t,
                (i = r.nodeValue !== n) && (e = en,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ta(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ta(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[In] = t,
                t.stateNode = r
        }
        return St(t),
        null;
    case 13:
        if (Ie(Ae),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Le && Zt !== null && t.mode & 1 && !(t.flags & 128))
                Dg(),
                ti(),
                t.flags |= 98560,
                i = !1;
            else if (i = na(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(M(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(M(317));
                    i[In] = t
                } else
                    ti(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                St(t),
                i = !1
            } else
                bn !== null && (Rc(bn),
                bn = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || Ae.current & 1 ? st === 0 && (st = 3) : Jf())),
        t.updateQueue !== null && (t.flags |= 4),
        St(t),
        null);
    case 4:
        return ri(),
        _c(e, t),
        e === null && fs(t.stateNode.containerInfo),
        St(t),
        null;
    case 10:
        return Rf(t.type._context),
        St(t),
        null;
    case 17:
        return qt(t.type) && za(),
        St(t),
        null;
    case 19:
        if (Ie(Ae),
        i = t.memoizedState,
        i === null)
            return St(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                Oi(i, !1);
            else {
                if (st !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = Ga(e),
                        s !== null) {
                            for (t.flags |= 128,
                            Oi(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return Pe(Ae, Ae.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && Ke() > ii && (t.flags |= 128,
                r = !0,
                Oi(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Ga(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Oi(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !Le)
                        return St(t),
                        null
                } else
                    2 * Ke() - i.renderingStartTime > ii && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Oi(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = Ke(),
        t.sibling = null,
        n = Ae.current,
        Pe(Ae, r ? n & 1 | 2 : n & 1),
        t) : (St(t),
        null);
    case 22:
    case 23:
        return Qf(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Xt & 1073741824 && (St(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : St(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(M(156, t.tag))
}
function rS(e, t) {
    switch ($f(t),
    t.tag) {
    case 1:
        return qt(t.type) && za(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return ri(),
        Ie(Kt),
        Ie(_t),
        Ff(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Mf(t),
        null;
    case 13:
        if (Ie(Ae),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(M(340));
            ti()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return Ie(Ae),
        null;
    case 4:
        return ri(),
        null;
    case 10:
        return Rf(t.type._context),
        null;
    case 22:
    case 23:
        return Qf(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ia = !1
  , Ct = !1
  , oS = typeof WeakSet == "function" ? WeakSet : Set
  , Y = null;
function Bo(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                He(e, t, r)
            }
        else
            n.current = null
}
function Tc(e, t, n) {
    try {
        n()
    } catch (r) {
        He(e, t, r)
    }
}
var ch = !1;
function iS(e, t) {
    if (cc = Ma,
    e = Cg(),
    Pf(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , a = -1
                      , l = -1
                      , c = 0
                      , d = 0
                      , m = e
                      , g = null;
                    t: for (; ; ) {
                        for (var x; m !== n || o !== 0 && m.nodeType !== 3 || (a = s + o),
                        m !== i || r !== 0 && m.nodeType !== 3 || (l = s + r),
                        m.nodeType === 3 && (s += m.nodeValue.length),
                        (x = m.firstChild) !== null; )
                            g = m,
                            m = x;
                        for (; ; ) {
                            if (m === e)
                                break t;
                            if (g === n && ++c === o && (a = s),
                            g === i && ++d === r && (l = s),
                            (x = m.nextSibling) !== null)
                                break;
                            m = g,
                            g = m.parentNode
                        }
                        m = x
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (fc = {
        focusedElem: e,
        selectionRange: n
    },
    Ma = !1,
    Y = t; Y !== null; )
        if (t = Y,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            Y = e;
        else
            for (; Y !== null; ) {
                t = Y;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var y = w.memoizedProps
                                  , E = w.memoizedState
                                  , h = t.stateNode
                                  , v = h.getSnapshotBeforeUpdate(t.elementType === t.type ? y : vn(t.type, y), E);
                                h.__reactInternalSnapshotBeforeUpdate = v
                            }
                            break;
                        case 3:
                            var b = t.stateNode.containerInfo;
                            b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(M(163))
                        }
                } catch (C) {
                    He(t, t.return, C)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    Y = e;
                    break
                }
                Y = t.return
            }
    return w = ch,
    ch = !1,
    w
}
function Gi(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && Tc(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function xl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Pc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function xv(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    xv(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[In],
    delete t[ps],
    delete t[hc],
    delete t[Ux],
    delete t[zx])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Sv(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function fh(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Sv(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Oc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Ua));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Oc(e, t, n),
        e = e.sibling; e !== null; )
            Oc(e, t, n),
            e = e.sibling
}
function $c(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for ($c(e, t, n),
        e = e.sibling; e !== null; )
            $c(e, t, n),
            e = e.sibling
}
var gt = null
  , wn = !1;
function cr(e, t, n) {
    for (n = n.child; n !== null; )
        Ev(e, t, n),
        n = n.sibling
}
function Ev(e, t, n) {
    if (Rn && typeof Rn.onCommitFiberUnmount == "function")
        try {
            Rn.onCommitFiberUnmount(pl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ct || Bo(n, t);
    case 6:
        var r = gt
          , o = wn;
        gt = null,
        cr(e, t, n),
        gt = r,
        wn = o,
        gt !== null && (wn ? (e = gt,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : gt.removeChild(n.stateNode));
        break;
    case 18:
        gt !== null && (wn ? (e = gt,
        n = n.stateNode,
        e.nodeType === 8 ? vu(e.parentNode, n) : e.nodeType === 1 && vu(e, n),
        ls(e)) : vu(gt, n.stateNode));
        break;
    case 4:
        r = gt,
        o = wn,
        gt = n.stateNode.containerInfo,
        wn = !0,
        cr(e, t, n),
        gt = r,
        wn = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ct && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && Tc(n, t, s),
                o = o.next
            } while (o !== r)
        }
        cr(e, t, n);
        break;
    case 1:
        if (!Ct && (Bo(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                He(n, t, a)
            }
        cr(e, t, n);
        break;
    case 21:
        cr(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ct = (r = Ct) || n.memoizedState !== null,
        cr(e, t, n),
        Ct = r) : cr(e, t, n);
        break;
    default:
        cr(e, t, n)
    }
}
function dh(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new oS),
        t.forEach(function(r) {
            var o = hS.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function gn(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        gt = a.stateNode,
                        wn = !1;
                        break e;
                    case 3:
                        gt = a.stateNode.containerInfo,
                        wn = !0;
                        break e;
                    case 4:
                        gt = a.stateNode.containerInfo,
                        wn = !0;
                        break e
                    }
                    a = a.return
                }
                if (gt === null)
                    throw Error(M(160));
                Ev(i, s, o),
                gt = null,
                wn = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (c) {
                He(o, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Cv(t, e),
            t = t.sibling
}
function Cv(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (gn(t, e),
        Pn(e),
        r & 4) {
            try {
                Gi(3, e, e.return),
                xl(3, e)
            } catch (y) {
                He(e, e.return, y)
            }
            try {
                Gi(5, e, e.return)
            } catch (y) {
                He(e, e.return, y)
            }
        }
        break;
    case 1:
        gn(t, e),
        Pn(e),
        r & 512 && n !== null && Bo(n, n.return);
        break;
    case 5:
        if (gn(t, e),
        Pn(e),
        r & 512 && n !== null && Bo(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                os(o, "")
            } catch (y) {
                He(e, e.return, y)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && Vm(o, i),
                    ec(a, s);
                    var c = ec(a, i);
                    for (s = 0; s < l.length; s += 2) {
                        var d = l[s]
                          , m = l[s + 1];
                        d === "style" ? Qm(o, m) : d === "dangerouslySetInnerHTML" ? Ym(o, m) : d === "children" ? os(o, m) : mf(o, d, m, c)
                    }
                    switch (a) {
                    case "input":
                        Gu(o, i);
                        break;
                    case "textarea":
                        Km(o, i);
                        break;
                    case "select":
                        var g = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var x = i.value;
                        x != null ? Wo(o, !!i.multiple, x, !1) : g !== !!i.multiple && (i.defaultValue != null ? Wo(o, !!i.multiple, i.defaultValue, !0) : Wo(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[ps] = i
                } catch (y) {
                    He(e, e.return, y)
                }
        }
        break;
    case 6:
        if (gn(t, e),
        Pn(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(M(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (y) {
                He(e, e.return, y)
            }
        }
        break;
    case 3:
        if (gn(t, e),
        Pn(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                ls(t.containerInfo)
            } catch (y) {
                He(e, e.return, y)
            }
        break;
    case 4:
        gn(t, e),
        Pn(e);
        break;
    case 13:
        gn(t, e),
        Pn(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (Yf = Ke())),
        r & 4 && dh(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ct = (c = Ct) || d,
        gn(t, e),
        Ct = c) : gn(t, e),
        Pn(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !d && e.mode & 1)
                for (Y = e,
                d = e.child; d !== null; ) {
                    for (m = Y = d; Y !== null; ) {
                        switch (g = Y,
                        x = g.child,
                        g.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Gi(4, g, g.return);
                            break;
                        case 1:
                            Bo(g, g.return);
                            var w = g.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = g,
                                n = g.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (y) {
                                    He(r, n, y)
                                }
                            }
                            break;
                        case 5:
                            Bo(g, g.return);
                            break;
                        case 22:
                            if (g.memoizedState !== null) {
                                hh(m);
                                continue
                            }
                        }
                        x !== null ? (x.return = g,
                        Y = x) : hh(m)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            m = e; ; ) {
                if (m.tag === 5) {
                    if (d === null) {
                        d = m;
                        try {
                            o = m.stateNode,
                            c ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = m.stateNode,
                            l = m.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = Gm("display", s))
                        } catch (y) {
                            He(e, e.return, y)
                        }
                    }
                } else if (m.tag === 6) {
                    if (d === null)
                        try {
                            m.stateNode.nodeValue = c ? "" : m.memoizedProps
                        } catch (y) {
                            He(e, e.return, y)
                        }
                } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                    m.child.return = m,
                    m = m.child;
                    continue
                }
                if (m === e)
                    break e;
                for (; m.sibling === null; ) {
                    if (m.return === null || m.return === e)
                        break e;
                    d === m && (d = null),
                    m = m.return
                }
                d === m && (d = null),
                m.sibling.return = m.return,
                m = m.sibling
            }
        }
        break;
    case 19:
        gn(t, e),
        Pn(e),
        r & 4 && dh(e);
        break;
    case 21:
        break;
    default:
        gn(t, e),
        Pn(e)
    }
}
function Pn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Sv(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(M(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (os(o, ""),
                r.flags &= -33);
                var i = fh(e);
                $c(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , a = fh(e);
                Oc(e, a, s);
                break;
            default:
                throw Error(M(161))
            }
        } catch (l) {
            He(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function sS(e, t, n) {
    Y = e,
    kv(e)
}
function kv(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Y !== null; ) {
        var o = Y
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || ia;
            if (!s) {
                var a = o.alternate
                  , l = a !== null && a.memoizedState !== null || Ct;
                a = ia;
                var c = Ct;
                if (ia = s,
                (Ct = l) && !c)
                    for (Y = o; Y !== null; )
                        s = Y,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? mh(o) : l !== null ? (l.return = s,
                        Y = l) : mh(o);
                for (; i !== null; )
                    Y = i,
                    kv(i),
                    i = i.sibling;
                Y = o,
                ia = a,
                Ct = c
            }
            ph(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            Y = i) : ph(e)
    }
}
function ph(e) {
    for (; Y !== null; ) {
        var t = Y;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ct || xl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ct)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : vn(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Qp(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Qp(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
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
                            var c = t.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var m = d.dehydrated;
                                    m !== null && ls(m)
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
                        throw Error(M(163))
                    }
                Ct || t.flags & 512 && Pc(t)
            } catch (g) {
                He(t, t.return, g)
            }
        }
        if (t === e) {
            Y = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            Y = n;
            break
        }
        Y = t.return
    }
}
function hh(e) {
    for (; Y !== null; ) {
        var t = Y;
        if (t === e) {
            Y = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            Y = n;
            break
        }
        Y = t.return
    }
}
function mh(e) {
    for (; Y !== null; ) {
        var t = Y;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    xl(4, t)
                } catch (l) {
                    He(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        He(t, o, l)
                    }
                }
                var i = t.return;
                try {
                    Pc(t)
                } catch (l) {
                    He(t, i, l)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    Pc(t)
                } catch (l) {
                    He(t, s, l)
                }
            }
        } catch (l) {
            He(t, t.return, l)
        }
        if (t === e) {
            Y = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            Y = a;
            break
        }
        Y = t.return
    }
}
var aS = Math.ceil
  , Xa = rr.ReactCurrentDispatcher
  , Kf = rr.ReactCurrentOwner
  , cn = rr.ReactCurrentBatchConfig
  , fe = 0
  , ht = null
  , tt = null
  , vt = 0
  , Xt = 0
  , Uo = Rr(0)
  , st = 0
  , ws = null
  , oo = 0
  , Sl = 0
  , qf = 0
  , Qi = null
  , Wt = null
  , Yf = 0
  , ii = 1 / 0
  , Vn = null
  , Za = !1
  , Ic = null
  , Tr = null
  , sa = !1
  , xr = null
  , el = 0
  , Ji = 0
  , Lc = null
  , Sa = -1
  , Ea = 0;
function Nt() {
    return fe & 6 ? Ke() : Sa !== -1 ? Sa : Sa = Ke()
}
function Pr(e) {
    return e.mode & 1 ? fe & 2 && vt !== 0 ? vt & -vt : Wx.transition !== null ? (Ea === 0 && (Ea = lg()),
    Ea) : (e = xe,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : mg(e.type)),
    e) : 1
}
function Sn(e, t, n, r) {
    if (50 < Ji)
        throw Ji = 0,
        Lc = null,
        Error(M(185));
    ks(e, n, r),
    (!(fe & 2) || e !== ht) && (e === ht && (!(fe & 2) && (Sl |= n),
    st === 4 && wr(e, vt)),
    Yt(e, r),
    n === 1 && fe === 0 && !(t.mode & 1) && (ii = Ke() + 500,
    yl && Ar()))
}
function Yt(e, t) {
    var n = e.callbackNode;
    Wb(e, t);
    var r = Da(e, e === ht ? vt : 0);
    if (r === 0)
        n !== null && Cp(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Cp(n),
        t === 1)
            e.tag === 0 ? Hx(gh.bind(null, e)) : Rg(gh.bind(null, e)),
            Fx(function() {
                !(fe & 6) && Ar()
            }),
            n = null;
        else {
            switch (ug(r)) {
            case 1:
                n = bf;
                break;
            case 4:
                n = sg;
                break;
            case 16:
                n = ja;
                break;
            case 536870912:
                n = ag;
                break;
            default:
                n = ja
            }
            n = Nv(n, _v.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function _v(e, t) {
    if (Sa = -1,
    Ea = 0,
    fe & 6)
        throw Error(M(327));
    var n = e.callbackNode;
    if (Go() && e.callbackNode !== n)
        return null;
    var r = Da(e, e === ht ? vt : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = tl(e, r);
    else {
        t = r;
        var o = fe;
        fe |= 2;
        var i = Pv();
        (ht !== e || vt !== t) && (Vn = null,
        ii = Ke() + 500,
        Zr(e, t));
        do
            try {
                cS();
                break
            } catch (a) {
                Tv(e, a)
            }
        while (1);
        Nf(),
        Xa.current = i,
        fe = o,
        tt !== null ? t = 0 : (ht = null,
        vt = 0,
        t = st)
    }
    if (t !== 0) {
        if (t === 2 && (o = ic(e),
        o !== 0 && (r = o,
        t = Nc(e, o))),
        t === 1)
            throw n = ws,
            Zr(e, 0),
            wr(e, r),
            Yt(e, Ke()),
            n;
        if (t === 6)
            wr(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !lS(o) && (t = tl(e, r),
            t === 2 && (i = ic(e),
            i !== 0 && (r = i,
            t = Nc(e, i))),
            t === 1))
                throw n = ws,
                Zr(e, 0),
                wr(e, r),
                Yt(e, Ke()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(M(345));
            case 2:
                zr(e, Wt, Vn);
                break;
            case 3:
                if (wr(e, r),
                (r & 130023424) === r && (t = Yf + 500 - Ke(),
                10 < t)) {
                    if (Da(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Nt(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = pc(zr.bind(null, e, Wt, Vn), t);
                    break
                }
                zr(e, Wt, Vn);
                break;
            case 4:
                if (wr(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - xn(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = Ke() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * aS(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = pc(zr.bind(null, e, Wt, Vn), r);
                    break
                }
                zr(e, Wt, Vn);
                break;
            case 5:
                zr(e, Wt, Vn);
                break;
            default:
                throw Error(M(329))
            }
        }
    }
    return Yt(e, Ke()),
    e.callbackNode === n ? _v.bind(null, e) : null
}
function Nc(e, t) {
    var n = Qi;
    return e.current.memoizedState.isDehydrated && (Zr(e, t).flags |= 256),
    e = tl(e, t),
    e !== 2 && (t = Wt,
    Wt = n,
    t !== null && Rc(t)),
    e
}
function Rc(e) {
    Wt === null ? Wt = e : Wt.push.apply(Wt, e)
}
function lS(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!En(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function wr(e, t) {
    for (t &= ~qf,
    t &= ~Sl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - xn(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function gh(e) {
    if (fe & 6)
        throw Error(M(327));
    Go();
    var t = Da(e, 0);
    if (!(t & 1))
        return Yt(e, Ke()),
        null;
    var n = tl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ic(e);
        r !== 0 && (t = r,
        n = Nc(e, r))
    }
    if (n === 1)
        throw n = ws,
        Zr(e, 0),
        wr(e, t),
        Yt(e, Ke()),
        n;
    if (n === 6)
        throw Error(M(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    zr(e, Wt, Vn),
    Yt(e, Ke()),
    null
}
function Gf(e, t) {
    var n = fe;
    fe |= 1;
    try {
        return e(t)
    } finally {
        fe = n,
        fe === 0 && (ii = Ke() + 500,
        yl && Ar())
    }
}
function io(e) {
    xr !== null && xr.tag === 0 && !(fe & 6) && Go();
    var t = fe;
    fe |= 1;
    var n = cn.transition
      , r = xe;
    try {
        if (cn.transition = null,
        xe = 1,
        e)
            return e()
    } finally {
        xe = r,
        cn.transition = n,
        fe = t,
        !(fe & 6) && Ar()
    }
}
function Qf() {
    Xt = Uo.current,
    Ie(Uo)
}
function Zr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Mx(n)),
    tt !== null)
        for (n = tt.return; n !== null; ) {
            var r = n;
            switch ($f(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && za();
                break;
            case 3:
                ri(),
                Ie(Kt),
                Ie(_t),
                Ff();
                break;
            case 5:
                Mf(r);
                break;
            case 4:
                ri();
                break;
            case 13:
                Ie(Ae);
                break;
            case 19:
                Ie(Ae);
                break;
            case 10:
                Rf(r.type._context);
                break;
            case 22:
            case 23:
                Qf()
            }
            n = n.return
        }
    if (ht = e,
    tt = e = Or(e.current, null),
    vt = Xt = t,
    st = 0,
    ws = null,
    qf = Sl = oo = 0,
    Wt = Qi = null,
    Gr !== null) {
        for (t = 0; t < Gr.length; t++)
            if (n = Gr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        Gr = null
    }
    return e
}
function Tv(e, t) {
    do {
        var n = tt;
        try {
            if (Nf(),
            wa.current = Ja,
            Qa) {
                for (var r = Me.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                Qa = !1
            }
            if (ro = 0,
            pt = it = Me = null,
            Yi = !1,
            gs = 0,
            Kf.current = null,
            n === null || n.return === null) {
                st = 1,
                ws = t,
                tt = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , a = n
                  , l = t;
                if (t = vt,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var c = l
                      , d = a
                      , m = d.tag;
                    if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var g = d.alternate;
                        g ? (d.updateQueue = g.updateQueue,
                        d.memoizedState = g.memoizedState,
                        d.lanes = g.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var x = rh(s);
                    if (x !== null) {
                        x.flags &= -257,
                        oh(x, s, a, i, t),
                        x.mode & 1 && nh(i, c, t),
                        t = x,
                        l = c;
                        var w = t.updateQueue;
                        if (w === null) {
                            var y = new Set;
                            y.add(l),
                            t.updateQueue = y
                        } else
                            w.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            nh(i, c, t),
                            Jf();
                            break e
                        }
                        l = Error(M(426))
                    }
                } else if (Le && a.mode & 1) {
                    var E = rh(s);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256),
                        oh(E, s, a, i, t),
                        If(oi(l, a));
                        break e
                    }
                }
                i = l = oi(l, a),
                st !== 4 && (st = 2),
                Qi === null ? Qi = [i] : Qi.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var h = cv(i, l, t);
                        Gp(i, h);
                        break e;
                    case 1:
                        a = l;
                        var v = i.type
                          , b = i.stateNode;
                        if (!(i.flags & 128) && (typeof v.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Tr === null || !Tr.has(b)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var C = fv(i, a, t);
                            Gp(i, C);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            $v(n)
        } catch (O) {
            t = O,
            tt === n && n !== null && (tt = n = n.return);
            continue
        }
        break
    } while (1)
}
function Pv() {
    var e = Xa.current;
    return Xa.current = Ja,
    e === null ? Ja : e
}
function Jf() {
    (st === 0 || st === 3 || st === 2) && (st = 4),
    ht === null || !(oo & 268435455) && !(Sl & 268435455) || wr(ht, vt)
}
function tl(e, t) {
    var n = fe;
    fe |= 2;
    var r = Pv();
    (ht !== e || vt !== t) && (Vn = null,
    Zr(e, t));
    do
        try {
            uS();
            break
        } catch (o) {
            Tv(e, o)
        }
    while (1);
    if (Nf(),
    fe = n,
    Xa.current = r,
    tt !== null)
        throw Error(M(261));
    return ht = null,
    vt = 0,
    st
}
function uS() {
    for (; tt !== null; )
        Ov(tt)
}
function cS() {
    for (; tt !== null && !Ab(); )
        Ov(tt)
}
function Ov(e) {
    var t = Lv(e.alternate, e, Xt);
    e.memoizedProps = e.pendingProps,
    t === null ? $v(e) : tt = t,
    Kf.current = null
}
function $v(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = rS(n, t),
            n !== null) {
                n.flags &= 32767,
                tt = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                st = 6,
                tt = null;
                return
            }
        } else if (n = nS(n, t, Xt),
        n !== null) {
            tt = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            tt = t;
            return
        }
        tt = t = e
    } while (t !== null);
    st === 0 && (st = 5)
}
function zr(e, t, n) {
    var r = xe
      , o = cn.transition;
    try {
        cn.transition = null,
        xe = 1,
        fS(e, t, n, r)
    } finally {
        cn.transition = o,
        xe = r
    }
    return null
}
function fS(e, t, n, r) {
    do
        Go();
    while (xr !== null);
    if (fe & 6)
        throw Error(M(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(M(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Vb(e, i),
    e === ht && (tt = ht = null,
    vt = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || sa || (sa = !0,
    Nv(ja, function() {
        return Go(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = cn.transition,
        cn.transition = null;
        var s = xe;
        xe = 1;
        var a = fe;
        fe |= 4,
        Kf.current = null,
        iS(e, n),
        Cv(n, e),
        Ix(fc),
        Ma = !!cc,
        fc = cc = null,
        e.current = n,
        sS(n),
        jb(),
        fe = a,
        xe = s,
        cn.transition = i
    } else
        e.current = n;
    if (sa && (sa = !1,
    xr = e,
    el = o),
    i = e.pendingLanes,
    i === 0 && (Tr = null),
    Fb(n.stateNode),
    Yt(e, Ke()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (Za)
        throw Za = !1,
        e = Ic,
        Ic = null,
        e;
    return el & 1 && e.tag !== 0 && Go(),
    i = e.pendingLanes,
    i & 1 ? e === Lc ? Ji++ : (Ji = 0,
    Lc = e) : Ji = 0,
    Ar(),
    null
}
function Go() {
    if (xr !== null) {
        var e = ug(el)
          , t = cn.transition
          , n = xe;
        try {
            if (cn.transition = null,
            xe = 16 > e ? 16 : e,
            xr === null)
                var r = !1;
            else {
                if (e = xr,
                xr = null,
                el = 0,
                fe & 6)
                    throw Error(M(331));
                var o = fe;
                for (fe |= 4,
                Y = e.current; Y !== null; ) {
                    var i = Y
                      , s = i.child;
                    if (Y.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                for (Y = c; Y !== null; ) {
                                    var d = Y;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Gi(8, d, i)
                                    }
                                    var m = d.child;
                                    if (m !== null)
                                        m.return = d,
                                        Y = m;
                                    else
                                        for (; Y !== null; ) {
                                            d = Y;
                                            var g = d.sibling
                                              , x = d.return;
                                            if (xv(d),
                                            d === c) {
                                                Y = null;
                                                break
                                            }
                                            if (g !== null) {
                                                g.return = x,
                                                Y = g;
                                                break
                                            }
                                            Y = x
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var y = w.child;
                                if (y !== null) {
                                    w.child = null;
                                    do {
                                        var E = y.sibling;
                                        y.sibling = null,
                                        y = E
                                    } while (y !== null)
                                }
                            }
                            Y = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        Y = s;
                    else
                        e: for (; Y !== null; ) {
                            if (i = Y,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Gi(9, i, i.return)
                                }
                            var h = i.sibling;
                            if (h !== null) {
                                h.return = i.return,
                                Y = h;
                                break e
                            }
                            Y = i.return
                        }
                }
                var v = e.current;
                for (Y = v; Y !== null; ) {
                    s = Y;
                    var b = s.child;
                    if (s.subtreeFlags & 2064 && b !== null)
                        b.return = s,
                        Y = b;
                    else
                        e: for (s = v; Y !== null; ) {
                            if (a = Y,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        xl(9, a)
                                    }
                                } catch (O) {
                                    He(a, a.return, O)
                                }
                            if (a === s) {
                                Y = null;
                                break e
                            }
                            var C = a.sibling;
                            if (C !== null) {
                                C.return = a.return,
                                Y = C;
                                break e
                            }
                            Y = a.return
                        }
                }
                if (fe = o,
                Ar(),
                Rn && typeof Rn.onPostCommitFiberRoot == "function")
                    try {
                        Rn.onPostCommitFiberRoot(pl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            xe = n,
            cn.transition = t
        }
    }
    return !1
}
function vh(e, t, n) {
    t = oi(n, t),
    t = cv(e, t, 1),
    e = _r(e, t, 1),
    t = Nt(),
    e !== null && (ks(e, 1, t),
    Yt(e, t))
}
function He(e, t, n) {
    if (e.tag === 3)
        vh(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                vh(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Tr === null || !Tr.has(r))) {
                    e = oi(n, e),
                    e = fv(t, e, 1),
                    t = _r(t, e, 1),
                    e = Nt(),
                    t !== null && (ks(t, 1, e),
                    Yt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function dS(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Nt(),
    e.pingedLanes |= e.suspendedLanes & n,
    ht === e && (vt & n) === n && (st === 4 || st === 3 && (vt & 130023424) === vt && 500 > Ke() - Yf ? Zr(e, 0) : qf |= n),
    Yt(e, t)
}
function Iv(e, t) {
    t === 0 && (e.mode & 1 ? (t = Qs,
    Qs <<= 1,
    !(Qs & 130023424) && (Qs = 4194304)) : t = 1);
    var n = Nt();
    e = er(e, t),
    e !== null && (ks(e, t, n),
    Yt(e, n))
}
function pS(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Iv(e, n)
}
function hS(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(M(314))
    }
    r !== null && r.delete(t),
    Iv(e, n)
}
var Lv;
Lv = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Kt.current)
            Vt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Vt = !1,
                tS(e, t, n);
            Vt = !!(e.flags & 131072)
        }
    else
        Vt = !1,
        Le && t.flags & 1048576 && Ag(t, Va, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        xa(e, t),
        e = t.pendingProps;
        var o = ei(t, _t.current);
        Yo(t, n),
        o = Uf(null, t, r, e, o, n);
        var i = zf();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        qt(r) ? (i = !0,
        Ha(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        jf(t),
        o.updater = wl,
        t.stateNode = o,
        o._reactInternals = t,
        bc(t, r, e, n),
        t = Ec(null, t, r, !0, i, n)) : (t.tag = 0,
        Le && i && Of(t),
        $t(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (xa(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = gS(r),
            e = vn(r, e),
            o) {
            case 0:
                t = Sc(null, t, r, e, n);
                break e;
            case 1:
                t = ah(null, t, r, e, n);
                break e;
            case 11:
                t = ih(null, t, r, e, n);
                break e;
            case 14:
                t = sh(null, t, r, vn(r.type, e), n);
                break e
            }
            throw Error(M(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : vn(r, o),
        Sc(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : vn(r, o),
        ah(e, t, r, o, n);
    case 3:
        e: {
            if (mv(t),
            e === null)
                throw Error(M(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Fg(e, t),
            Ya(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = oi(Error(M(423)), t),
                    t = lh(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = oi(Error(M(424)), t),
                    t = lh(e, t, r, n, o);
                    break e
                } else
                    for (Zt = kr(t.stateNode.containerInfo.firstChild),
                    en = t,
                    Le = !0,
                    bn = null,
                    n = Hg(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (ti(),
                r === o) {
                    t = tr(e, t, n);
                    break e
                }
                $t(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Wg(t),
        e === null && vc(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        dc(r, o) ? s = null : i !== null && dc(r, i) && (t.flags |= 32),
        hv(e, t),
        $t(e, t, s, n),
        t.child;
    case 6:
        return e === null && vc(t),
        null;
    case 13:
        return gv(e, t, n);
    case 4:
        return Df(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = ni(t, null, r, n) : $t(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : vn(r, o),
        ih(e, t, r, o, n);
    case 7:
        return $t(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return $t(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return $t(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            Pe(Ka, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (En(i.value, s)) {
                    if (i.children === o.children && !Kt.current) {
                        t = tr(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            s = i.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (i.tag === 1) {
                                        l = Qn(-1, n & -n),
                                        l.tag = 2;
                                        var c = i.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var d = c.pending;
                                            d === null ? l.next = l : (l.next = d.next,
                                            d.next = l),
                                            c.pending = l
                                        }
                                    }
                                    i.lanes |= n,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= n),
                                    yc(i.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(M(341));
                            s.lanes |= n,
                            a = s.alternate,
                            a !== null && (a.lanes |= n),
                            yc(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            $t(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Yo(t, n),
        o = pn(o),
        r = r(o),
        t.flags |= 1,
        $t(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = vn(r, t.pendingProps),
        o = vn(r.type, o),
        sh(e, t, r, o, n);
    case 15:
        return dv(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : vn(r, o),
        xa(e, t),
        t.tag = 1,
        qt(r) ? (e = !0,
        Ha(t)) : e = !1,
        Yo(t, n),
        Ug(t, r, o),
        bc(t, r, o, n),
        Ec(null, t, r, !0, e, n);
    case 19:
        return vv(e, t, n);
    case 22:
        return pv(e, t, n)
    }
    throw Error(M(156, t.tag))
}
;
function Nv(e, t) {
    return ig(e, t)
}
function mS(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function un(e, t, n, r) {
    return new mS(e,t,n,r)
}
function Xf(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function gS(e) {
    if (typeof e == "function")
        return Xf(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === vf)
            return 11;
        if (e === yf)
            return 14
    }
    return 2
}
function Or(e, t) {
    var n = e.alternate;
    return n === null ? (n = un(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Ca(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        Xf(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case Io:
            return eo(n.children, o, i, t);
        case gf:
            s = 8,
            o |= 8;
            break;
        case Wu:
            return e = un(12, n, t, o | 2),
            e.elementType = Wu,
            e.lanes = i,
            e;
        case Vu:
            return e = un(13, n, t, o),
            e.elementType = Vu,
            e.lanes = i,
            e;
        case Ku:
            return e = un(19, n, t, o),
            e.elementType = Ku,
            e.lanes = i,
            e;
        case zm:
            return El(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Bm:
                    s = 10;
                    break e;
                case Um:
                    s = 9;
                    break e;
                case vf:
                    s = 11;
                    break e;
                case yf:
                    s = 14;
                    break e;
                case hr:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(M(130, e == null ? e : typeof e, ""))
        }
    return t = un(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function eo(e, t, n, r) {
    return e = un(7, e, r, t),
    e.lanes = n,
    e
}
function El(e, t, n, r) {
    return e = un(22, e, r, t),
    e.elementType = zm,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function ku(e, t, n) {
    return e = un(6, e, null, t),
    e.lanes = n,
    e
}
function _u(e, t, n) {
    return t = un(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function vS(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = su(0),
    this.expirationTimes = su(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = su(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Zf(e, t, n, r, o, i, s, a, l) {
    return e = new vS(e,t,n,a,l),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = un(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    jf(i),
    e
}
function yS(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: $o,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Rv(e) {
    if (!e)
        return Lr;
    e = e._reactInternals;
    e: {
        if (co(e) !== e || e.tag !== 1)
            throw Error(M(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (qt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(M(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (qt(n))
            return Ng(e, n, t)
    }
    return t
}
function Av(e, t, n, r, o, i, s, a, l) {
    return e = Zf(n, r, !0, e, o, i, s, a, l),
    e.context = Rv(null),
    n = e.current,
    r = Nt(),
    o = Pr(n),
    i = Qn(r, o),
    i.callback = t ?? null,
    _r(n, i, o),
    e.current.lanes = o,
    ks(e, o, r),
    Yt(e, r),
    e
}
function Cl(e, t, n, r) {
    var o = t.current
      , i = Nt()
      , s = Pr(o);
    return n = Rv(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Qn(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = _r(o, t, s),
    e !== null && (Sn(e, o, s, i),
    ya(e, o, s)),
    s
}
function nl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function yh(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function ed(e, t) {
    yh(e, t),
    (e = e.alternate) && yh(e, t)
}
function wS() {
    return null
}
var jv = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function td(e) {
    this._internalRoot = e
}
kl.prototype.render = td.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(M(409));
    Cl(e, t, null, null)
}
;
kl.prototype.unmount = td.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        io(function() {
            Cl(null, e, null, null)
        }),
        t[Zn] = null
    }
}
;
function kl(e) {
    this._internalRoot = e
}
kl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = dg();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < yr.length && t !== 0 && t < yr[n].priority; n++)
            ;
        yr.splice(n, 0, e),
        n === 0 && hg(e)
    }
}
;
function nd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function _l(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function wh() {}
function bS(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var c = nl(s);
                i.call(c)
            }
        }
        var s = Av(t, r, e, 0, null, !1, !1, "", wh);
        return e._reactRootContainer = s,
        e[Zn] = s.current,
        fs(e.nodeType === 8 ? e.parentNode : e),
        io(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var c = nl(l);
            a.call(c)
        }
    }
    var l = Zf(e, 0, !1, null, null, !1, !1, "", wh);
    return e._reactRootContainer = l,
    e[Zn] = l.current,
    fs(e.nodeType === 8 ? e.parentNode : e),
    io(function() {
        Cl(t, l, n, r)
    }),
    l
}
function Tl(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = nl(s);
                a.call(l)
            }
        }
        Cl(t, s, e, o)
    } else
        s = bS(n, t, e, o, r);
    return nl(s)
}
cg = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Mi(t.pendingLanes);
            n !== 0 && (xf(t, n | 1),
            Yt(t, Ke()),
            !(fe & 6) && (ii = Ke() + 500,
            Ar()))
        }
        break;
    case 13:
        io(function() {
            var r = er(e, 1);
            if (r !== null) {
                var o = Nt();
                Sn(r, e, 1, o)
            }
        }),
        ed(e, 1)
    }
}
;
Sf = function(e) {
    if (e.tag === 13) {
        var t = er(e, 134217728);
        if (t !== null) {
            var n = Nt();
            Sn(t, e, 134217728, n)
        }
        ed(e, 134217728)
    }
}
;
fg = function(e) {
    if (e.tag === 13) {
        var t = Pr(e)
          , n = er(e, t);
        if (n !== null) {
            var r = Nt();
            Sn(n, e, t, r)
        }
        ed(e, t)
    }
}
;
dg = function() {
    return xe
}
;
pg = function(e, t) {
    var n = xe;
    try {
        return xe = e,
        t()
    } finally {
        xe = n
    }
}
;
nc = function(e, t, n) {
    switch (t) {
    case "input":
        if (Gu(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = vl(r);
                    if (!o)
                        throw Error(M(90));
                    Wm(r),
                    Gu(r, o)
                }
            }
        }
        break;
    case "textarea":
        Km(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Wo(e, !!n.multiple, t, !1)
    }
}
;
Zm = Gf;
eg = io;
var xS = {
    usingClientEntryPoint: !1,
    Events: [Ts, Ao, vl, Jm, Xm, Gf]
}
  , $i = {
    findFiberByHostInstance: Yr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , SS = {
    bundleType: $i.bundleType,
    version: $i.version,
    rendererPackageName: $i.rendererPackageName,
    rendererConfig: $i.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = rg(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: $i.findFiberByHostInstance || wS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var aa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!aa.isDisabled && aa.supportsFiber)
        try {
            pl = aa.inject(SS),
            Rn = aa
        } catch {}
}
nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xS;
nn.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!nd(t))
        throw Error(M(200));
    return yS(e, t, null, n)
}
;
// nn.createRoot = function(e, t) {
//     if (!nd(e))
//         throw Error(M(299));
//     var n = !1
//       , r = ""
//       , o = jv;
//     return t != null && (t.unstable_strictMode === !0 && (n = !0),
//     t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
//     t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
//     t = Zf(e, 1, !1, null, null, n, !1, r, o),
//     e[Zn] = t.current,
//     fs(e.nodeType === 8 ? e.parentNode : e),
//     new td(t)
// }
// ;
nn.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","),
        Error(M(268, e)));
    return e = rg(t),
    e = e === null ? null : e.stateNode,
    e
}
;
nn.flushSync = function(e) {
    return io(e)
}
;
nn.hydrate = function(e, t, n) {
    if (!_l(t))
        throw Error(M(200));
    return Tl(null, e, t, !0, n)
}
;
nn.hydrateRoot = function(e, t, n) {
    if (!nd(e))
        throw Error(M(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = jv;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Av(t, null, e, 1, n ?? null, o, !1, i, s),
    e[Zn] = t.current,
    fs(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new kl(t)
}
;
nn.render = function(e, t, n) {
    if (!_l(t))
        throw Error(M(200));
    return Tl(null, e, t, !1, n)
}
;
nn.unmountComponentAtNode = function(e) {
    if (!_l(e))
        throw Error(M(40));
    return e._reactRootContainer ? (io(function() {
        Tl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Zn] = null
        })
    }),
    !0) : !1
}
;
nn.unstable_batchedUpdates = Gf;
nn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!_l(n))
        throw Error(M(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(M(38));
    return Tl(e, t, n, !1, r)
}
;
nn.version = "18.2.0-next-9e3b772b8-20220608";
function Dv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dv)
        } catch (e) {
            console.error(e)
        }
}
Dv(),
Am.exports = nn;
var Mv = Am.exports;
const Bi = Mn(Mv);
var bh = Mv;
zu.createRoot = bh.createRoot,
zu.hydrateRoot = bh.hydrateRoot;
var kt = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof kt < "u" && kt
  , Ut = {
    searchParams: "URLSearchParams"in kt,
    iterable: "Symbol"in kt && "iterator"in Symbol,
    blob: "FileReader"in kt && "Blob"in kt && function() {
        try {
            return new Blob,
            !0
        } catch {
            return !1
        }
    }(),
    formData: "FormData"in kt,
    arrayBuffer: "ArrayBuffer"in kt
};
function ES(e) {
    return e && DataView.prototype.isPrototypeOf(e)
}
if (Ut.arrayBuffer)
    var CS = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
      , kS = ArrayBuffer.isView || function(e) {
        return e && CS.indexOf(Object.prototype.toString.call(e)) > -1
    }
    ;
function Os(e) {
    if (typeof e != "string" && (e = String(e)),
    /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
        throw new TypeError('Invalid character in header field name: "' + e + '"');
    return e.toLowerCase()
}
function rd(e) {
    return typeof e != "string" && (e = String(e)),
    e
}
function od(e) {
    var t = {
        next: function() {
            var n = e.shift();
            return {
                done: n === void 0,
                value: n
            }
        }
    };
    return Ut.iterable && (t[Symbol.iterator] = function() {
        return t
    }
    ),
    t
}
function lt(e) {
    this.map = {},
    e instanceof lt ? e.forEach(function(t, n) {
        this.append(n, t)
    }, this) : Array.isArray(e) ? e.forEach(function(t) {
        this.append(t[0], t[1])
    }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
        this.append(t, e[t])
    }, this)
}
lt.prototype.append = function(e, t) {
    e = Os(e),
    t = rd(t);
    var n = this.map[e];
    this.map[e] = n ? n + ", " + t : t
}
;
lt.prototype.delete = function(e) {
    delete this.map[Os(e)]
}
;
lt.prototype.get = function(e) {
    return e = Os(e),
    this.has(e) ? this.map[e] : null
}
;
lt.prototype.has = function(e) {
    return this.map.hasOwnProperty(Os(e))
}
;
lt.prototype.set = function(e, t) {
    this.map[Os(e)] = rd(t)
}
;
lt.prototype.forEach = function(e, t) {
    for (var n in this.map)
        this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
}
;
lt.prototype.keys = function() {
    var e = [];
    return this.forEach(function(t, n) {
        e.push(n)
    }),
    od(e)
}
;
lt.prototype.values = function() {
    var e = [];
    return this.forEach(function(t) {
        e.push(t)
    }),
    od(e)
}
;
lt.prototype.entries = function() {
    var e = [];
    return this.forEach(function(t, n) {
        e.push([n, t])
    }),
    od(e)
}
;
Ut.iterable && (lt.prototype[Symbol.iterator] = lt.prototype.entries);
function Tu(e) {
    if (e.bodyUsed)
        return Promise.reject(new TypeError("Already read"));
    e.bodyUsed = !0
}
function Fv(e) {
    return new Promise(function(t, n) {
        e.onload = function() {
            t(e.result)
        }
        ,
        e.onerror = function() {
            n(e.error)
        }
    }
    )
}
function _S(e) {
    var t = new FileReader
      , n = Fv(t);
    return t.readAsArrayBuffer(e),
    n
}
function TS(e) {
    var t = new FileReader
      , n = Fv(t);
    return t.readAsText(e),
    n
}
function PS(e) {
    for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++)
        n[r] = String.fromCharCode(t[r]);
    return n.join("")
}
function xh(e) {
    if (e.slice)
        return e.slice(0);
    var t = new Uint8Array(e.byteLength);
    return t.set(new Uint8Array(e)),
    t.buffer
}
function Bv() {
    return this.bodyUsed = !1,
    this._initBody = function(e) {
        this.bodyUsed = this.bodyUsed,
        this._bodyInit = e,
        e ? typeof e == "string" ? this._bodyText = e : Ut.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : Ut.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : Ut.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : Ut.arrayBuffer && Ut.blob && ES(e) ? (this._bodyArrayBuffer = xh(e.buffer),
        this._bodyInit = new Blob([this._bodyArrayBuffer])) : Ut.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || kS(e)) ? this._bodyArrayBuffer = xh(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "",
        this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : Ut.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
    }
    ,
    Ut.blob && (this.blob = function() {
        var e = Tu(this);
        if (e)
            return e;
        if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
        if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
        return Promise.resolve(new Blob([this._bodyText]))
    }
    ,
    this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
            var e = Tu(this);
            return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
        } else
            return this.blob().then(_S)
    }
    ),
    this.text = function() {
        var e = Tu(this);
        if (e)
            return e;
        if (this._bodyBlob)
            return TS(this._bodyBlob);
        if (this._bodyArrayBuffer)
            return Promise.resolve(PS(this._bodyArrayBuffer));
        if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
        return Promise.resolve(this._bodyText)
    }
    ,
    Ut.formData && (this.formData = function() {
        return this.text().then(IS)
    }
    ),
    this.json = function() {
        return this.text().then(JSON.parse)
    }
    ,
    this
}
var OS = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
function $S(e) {
    var t = e.toUpperCase();
    return OS.indexOf(t) > -1 ? t : e
}
function so(e, t) {
    if (!(this instanceof so))
        throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    t = t || {};
    var n = t.body;
    if (e instanceof so) {
        if (e.bodyUsed)
            throw new TypeError("Already read");
        this.url = e.url,
        this.credentials = e.credentials,
        t.headers || (this.headers = new lt(e.headers)),
        this.method = e.method,
        this.mode = e.mode,
        this.signal = e.signal,
        !n && e._bodyInit != null && (n = e._bodyInit,
        e.bodyUsed = !0)
    } else
        this.url = String(e);
    if (this.credentials = t.credentials || this.credentials || "same-origin",
    (t.headers || !this.headers) && (this.headers = new lt(t.headers)),
    this.method = $S(t.method || this.method || "GET"),
    this.mode = t.mode || this.mode || null,
    this.signal = t.signal || this.signal,
    this.referrer = null,
    (this.method === "GET" || this.method === "HEAD") && n)
        throw new TypeError("Body not allowed for GET or HEAD requests");
    if (this._initBody(n),
    (this.method === "GET" || this.method === "HEAD") && (t.cache === "no-store" || t.cache === "no-cache")) {
        var r = /([?&])_=[^&]*/;
        if (r.test(this.url))
            this.url = this.url.replace(r, "$1_=" + new Date().getTime());
        else {
            var o = /\?/;
            this.url += (o.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
        }
    }
}
so.prototype.clone = function() {
    return new so(this,{
        body: this._bodyInit
    })
}
;
function IS(e) {
    var t = new FormData;
    return e.trim().split("&").forEach(function(n) {
        if (n) {
            var r = n.split("=")
              , o = r.shift().replace(/\+/g, " ")
              , i = r.join("=").replace(/\+/g, " ");
            t.append(decodeURIComponent(o), decodeURIComponent(i))
        }
    }),
    t
}
function LS(e) {
    var t = new lt
      , n = e.replace(/\r?\n[\t ]+/g, " ");
    return n.split("\r").map(function(r) {
        return r.indexOf(`
`) === 0 ? r.substr(1, r.length) : r
    }).forEach(function(r) {
        var o = r.split(":")
          , i = o.shift().trim();
        if (i) {
            var s = o.join(":").trim();
            t.append(i, s)
        }
    }),
    t
}
Bv.call(so.prototype);
function Dn(e, t) {
    if (!(this instanceof Dn))
        throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    t || (t = {}),
    this.type = "default",
    this.status = t.status === void 0 ? 200 : t.status,
    this.ok = this.status >= 200 && this.status < 300,
    this.statusText = t.statusText === void 0 ? "" : "" + t.statusText,
    this.headers = new lt(t.headers),
    this.url = t.url || "",
    this._initBody(e)
}
Bv.call(Dn.prototype);
Dn.prototype.clone = function() {
    return new Dn(this._bodyInit,{
        status: this.status,
        statusText: this.statusText,
        headers: new lt(this.headers),
        url: this.url
    })
}
;
Dn.error = function() {
    var e = new Dn(null,{
        status: 0,
        statusText: ""
    });
    return e.type = "error",
    e
}
;
var NS = [301, 302, 303, 307, 308];
Dn.redirect = function(e, t) {
    if (NS.indexOf(t) === -1)
        throw new RangeError("Invalid status code");
    return new Dn(null,{
        status: t,
        headers: {
            location: e
        }
    })
}
;
var Wr = kt.DOMException;
try {
    new Wr
} catch {
    Wr = function(t, n) {
        this.message = t,
        this.name = n;
        var r = Error(t);
        this.stack = r.stack
    }
    ,
    Wr.prototype = Object.create(Error.prototype),
    Wr.prototype.constructor = Wr
}
function Uv(e, t) {
    return new Promise(function(n, r) {
        var o = new so(e,t);
        if (o.signal && o.signal.aborted)
            return r(new Wr("Aborted","AbortError"));
        var i = new XMLHttpRequest;
        function s() {
            i.abort()
        }
        i.onload = function() {
            var l = {
                status: i.status,
                statusText: i.statusText,
                headers: LS(i.getAllResponseHeaders() || "")
            };
            l.url = "responseURL"in i ? i.responseURL : l.headers.get("X-Request-URL");
            var c = "response"in i ? i.response : i.responseText;
            setTimeout(function() {
                n(new Dn(c,l))
            }, 0)
        }
        ,
        i.onerror = function() {
            setTimeout(function() {
                r(new TypeError("Network request failed"))
            }, 0)
        }
        ,
        i.ontimeout = function() {
            setTimeout(function() {
                r(new TypeError("Network request failed"))
            }, 0)
        }
        ,
        i.onabort = function() {
            setTimeout(function() {
                r(new Wr("Aborted","AbortError"))
            }, 0)
        }
        ;
        function a(l) {
            try {
                return l === "" && kt.location.href ? kt.location.href : l
            } catch {
                return l
            }
        }
        i.open(o.method, a(o.url), !0),
        o.credentials === "include" ? i.withCredentials = !0 : o.credentials === "omit" && (i.withCredentials = !1),
        "responseType"in i && (Ut.blob ? i.responseType = "blob" : Ut.arrayBuffer && o.headers.get("Content-Type") && o.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (i.responseType = "arraybuffer")),
        t && typeof t.headers == "object" && !(t.headers instanceof lt) ? Object.getOwnPropertyNames(t.headers).forEach(function(l) {
            i.setRequestHeader(l, rd(t.headers[l]))
        }) : o.headers.forEach(function(l, c) {
            i.setRequestHeader(c, l)
        }),
        o.signal && (o.signal.addEventListener("abort", s),
        i.onreadystatechange = function() {
            i.readyState === 4 && o.signal.removeEventListener("abort", s)
        }
        ),
        i.send(typeof o._bodyInit > "u" ? null : o._bodyInit)
    }
    )
}
Uv.polyfill = !0;
kt.fetch || (kt.fetch = Uv,
kt.Headers = lt,
kt.Request = so,
kt.Response = Dn);
function zv(e) {
    var t = this.constructor;
    return this.then(function(n) {
        return t.resolve(e()).then(function() {
            return n
        })
    }, function(n) {
        return t.resolve(e()).then(function() {
            return t.reject(n)
        })
    })
}
function Hv(e) {
    var t = this;
    return new t(function(n, r) {
        if (!(e && typeof e.length < "u"))
            return r(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
        var o = Array.prototype.slice.call(e);
        if (o.length === 0)
            return n([]);
        var i = o.length;
        function s(l, c) {
            if (c && (typeof c == "object" || typeof c == "function")) {
                var d = c.then;
                if (typeof d == "function") {
                    d.call(c, function(m) {
                        s(l, m)
                    }, function(m) {
                        o[l] = {
                            status: "rejected",
                            reason: m
                        },
                        --i === 0 && n(o)
                    });
                    return
                }
            }
            o[l] = {
                status: "fulfilled",
                value: c
            },
            --i === 0 && n(o)
        }
        for (var a = 0; a < o.length; a++)
            s(a, o[a])
    }
    )
}
function Wv(e, t) {
    this.name = "AggregateError",
    this.errors = e,
    this.message = t || ""
}
Wv.prototype = Error.prototype;
function Vv(e) {
    var t = this;
    return new t(function(n, r) {
        if (!(e && typeof e.length < "u"))
            return r(new TypeError("Promise.any accepts an array"));
        var o = Array.prototype.slice.call(e);
        if (o.length === 0)
            return r();
        for (var i = [], s = 0; s < o.length; s++)
            try {
                t.resolve(o[s]).then(n).catch(function(a) {
                    i.push(a),
                    i.length === o.length && r(new Wv(i,"All promises were rejected"))
                })
            } catch (a) {
                r(a)
            }
    }
    )
}
var RS = setTimeout;
function Kv(e) {
    return !!(e && typeof e.length < "u")
}
function AS() {}
function jS(e, t) {
    return function() {
        e.apply(t, arguments)
    }
}
function Fe(e) {
    if (!(this instanceof Fe))
        throw new TypeError("Promises must be constructed via new");
    if (typeof e != "function")
        throw new TypeError("not a function");
    this._state = 0,
    this._handled = !1,
    this._value = void 0,
    this._deferreds = [],
    Yv(e, this)
}
function qv(e, t) {
    for (; e._state === 3; )
        e = e._value;
    if (e._state === 0) {
        e._deferreds.push(t);
        return
    }
    e._handled = !0,
    Fe._immediateFn(function() {
        var n = e._state === 1 ? t.onFulfilled : t.onRejected;
        if (n === null) {
            (e._state === 1 ? Ac : bs)(t.promise, e._value);
            return
        }
        var r;
        try {
            r = n(e._value)
        } catch (o) {
            bs(t.promise, o);
            return
        }
        Ac(t.promise, r)
    })
}
function Ac(e, t) {
    try {
        if (t === e)
            throw new TypeError("A promise cannot be resolved with itself.");
        if (t && (typeof t == "object" || typeof t == "function")) {
            var n = t.then;
            if (t instanceof Fe) {
                e._state = 3,
                e._value = t,
                jc(e);
                return
            } else if (typeof n == "function") {
                Yv(jS(n, t), e);
                return
            }
        }
        e._state = 1,
        e._value = t,
        jc(e)
    } catch (r) {
        bs(e, r)
    }
}
function bs(e, t) {
    e._state = 2,
    e._value = t,
    jc(e)
}
function jc(e) {
    e._state === 2 && e._deferreds.length === 0 && Fe._immediateFn(function() {
        e._handled || Fe._unhandledRejectionFn(e._value)
    });
    for (var t = 0, n = e._deferreds.length; t < n; t++)
        qv(e, e._deferreds[t]);
    e._deferreds = null
}
function DS(e, t, n) {
    this.onFulfilled = typeof e == "function" ? e : null,
    this.onRejected = typeof t == "function" ? t : null,
    this.promise = n
}
function Yv(e, t) {
    var n = !1;
    try {
        e(function(r) {
            n || (n = !0,
            Ac(t, r))
        }, function(r) {
            n || (n = !0,
            bs(t, r))
        })
    } catch (r) {
        if (n)
            return;
        n = !0,
        bs(t, r)
    }
}
Fe.prototype.catch = function(e) {
    return this.then(null, e)
}
;
Fe.prototype.then = function(e, t) {
    var n = new this.constructor(AS);
    return qv(this, new DS(e,t,n)),
    n
}
;
Fe.prototype.finally = zv;
Fe.all = function(e) {
    return new Fe(function(t, n) {
        if (!Kv(e))
            return n(new TypeError("Promise.all accepts an array"));
        var r = Array.prototype.slice.call(e);
        if (r.length === 0)
            return t([]);
        var o = r.length;
        function i(a, l) {
            try {
                if (l && (typeof l == "object" || typeof l == "function")) {
                    var c = l.then;
                    if (typeof c == "function") {
                        c.call(l, function(d) {
                            i(a, d)
                        }, n);
                        return
                    }
                }
                r[a] = l,
                --o === 0 && t(r)
            } catch (d) {
                n(d)
            }
        }
        for (var s = 0; s < r.length; s++)
            i(s, r[s])
    }
    )
}
;
Fe.any = Vv;
Fe.allSettled = Hv;
Fe.resolve = function(e) {
    return e && typeof e == "object" && e.constructor === Fe ? e : new Fe(function(t) {
        t(e)
    }
    )
}
;
Fe.reject = function(e) {
    return new Fe(function(t, n) {
        n(e)
    }
    )
}
;
Fe.race = function(e) {
    return new Fe(function(t, n) {
        if (!Kv(e))
            return n(new TypeError("Promise.race accepts an array"));
        for (var r = 0, o = e.length; r < o; r++)
            Fe.resolve(e[r]).then(t, n)
    }
    )
}
;
Fe._immediateFn = typeof setImmediate == "function" && function(e) {
    setImmediate(e)
}
|| function(e) {
    RS(e, 0)
}
;
Fe._unhandledRejectionFn = function(t) {
    typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", t)
}
;
var fr = function() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}();
typeof fr.Promise != "function" ? fr.Promise = Fe : (fr.Promise.prototype.finally || (fr.Promise.prototype.finally = zv),
fr.Promise.allSettled || (fr.Promise.allSettled = Hv),
fr.Promise.any || (fr.Promise.any = Vv));
var Dc = function(e, t) {
    return Dc = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(n, r) {
        n.__proto__ = r
    }
    || function(n, r) {
        for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
    }
    ,
    Dc(e, t)
};
function me(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    Dc(e, t);
    function n() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype,
    new n)
}
var De = function() {
    return De = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ,
    De.apply(this, arguments)
};
function K(e, t, n, r) {
    function o(i) {
        return i instanceof n ? i : new n(function(s) {
            s(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, s) {
        function a(d) {
            try {
                c(r.next(d))
            } catch (m) {
                s(m)
            }
        }
        function l(d) {
            try {
                c(r.throw(d))
            } catch (m) {
                s(m)
            }
        }
        function c(d) {
            d.done ? i(d.value) : o(d.value).then(a, l)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
}
function q(e, t) {
    var n = {
        label: 0,
        sent: function() {
            if (i[0] & 1)
                throw i[1];
            return i[1]
        },
        trys: [],
        ops: []
    }, r, o, i, s;
    return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
    },
    typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }
    ),
    s;
    function a(c) {
        return function(d) {
            return l([c, d])
        }
    }
    function l(c) {
        if (r)
            throw new TypeError("Generator is already executing.");
        for (; s && (s = 0,
        c[0] && (n = 0)),
        n; )
            try {
                if (r = 1,
                o && (i = c[0] & 2 ? o.return : c[0] ? o.throw || ((i = o.return) && i.call(o),
                0) : o.next) && !(i = i.call(o, c[1])).done)
                    return i;
                switch (o = 0,
                i && (c = [c[0] & 2, i.value]),
                c[0]) {
                case 0:
                case 1:
                    i = c;
                    break;
                case 4:
                    return n.label++,
                    {
                        value: c[1],
                        done: !1
                    };
                case 5:
                    n.label++,
                    o = c[1],
                    c = [0];
                    continue;
                case 7:
                    c = n.ops.pop(),
                    n.trys.pop();
                    continue;
                default:
                    if (i = n.trys,
                    !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
                        n.label = c[1];
                        break
                    }
                    if (c[0] === 6 && n.label < i[1]) {
                        n.label = i[1],
                        i = c;
                        break
                    }
                    if (i && n.label < i[2]) {
                        n.label = i[2],
                        n.ops.push(c);
                        break
                    }
                    i[2] && n.ops.pop(),
                    n.trys.pop();
                    continue
                }
                c = t.call(e, n)
            } catch (d) {
                c = [6, d],
                o = 0
            } finally {
                r = i = 0
            }
        if (c[0] & 5)
            throw c[1];
        return {
            value: c[0] ? c[1] : void 0,
            done: !0
        }
    }
}
function Pl(e) {
    var t = typeof Symbol == "function" && Symbol.iterator
      , n = t && e[t]
      , r = 0;
    if (n)
        return n.call(e);
    if (e && typeof e.length == "number")
        return {
            next: function() {
                return e && r >= e.length && (e = void 0),
                {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function je(e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n)
        return e;
    var r = n.call(e), o, i = [], s;
    try {
        for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; )
            i.push(o.value)
    } catch (a) {
        s = {
            error: a
        }
    } finally {
        try {
            o && !o.done && (n = r.return) && n.call(r)
        } finally {
            if (s)
                throw s.error
        }
    }
    return i
}
function Ln(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)
            (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)),
            i[r] = t[r]);
    return e.concat(i || Array.prototype.slice.call(t))
}
function MS(e, t) {
    return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
    }) : e.raw = t,
    e
}
var Vr;
(function(e) {
    e[e.DEBUG = 1] = "DEBUG",
    e[e.INFO = 2] = "INFO",
    e[e.WARN = 3] = "WARN",
    e[e.ERROR = 4] = "ERROR"
}
)(Vr || (Vr = {}));
var FS = function() {
    function e(t) {
        t === void 0 && (t = Vr.INFO),
        this.logLevel = t,
        this._debug = console.debug,
        this._info = console.info,
        this._warn = console.warn,
        this._error = console.error
    }
    return e.prototype.debug = function() {
        for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
        this.logLevel <= Vr.DEBUG && (t.unshift("[DEBUG]"),
        this._debug.apply(this, Ln([], je(t), !1)))
    }
    ,
    e.prototype.info = function() {
        for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
        this.logLevel <= Vr.INFO && (t.unshift("[INFO]"),
        this._info.apply(this, Ln([], je(t), !1)))
    }
    ,
    e.prototype.warn = function() {
        for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
        this.logLevel <= Vr.WARN && (t.unshift("[WARN]"),
        this._warn.apply(this, Ln([], je(t), !1)))
    }
    ,
    e.prototype.error = function() {
        for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
        this.logLevel <= Vr.ERROR && (t.unshift("[ERROR]"),
        this._error.apply(this, Ln([], je(t), !1)))
    }
    ,
    e
}(), we = new FS(+"3"), BS = function(e, t) {
    this._driver = e,
    this.liff = t,
    this.hooks = this._driver.hooks,
    this.internalHooks = this._driver.internalHooks
}, US = function(e, t) {
    this._driver = e,
    this.liff = t,
    this.hooks = this._driver.hooks
}, zS = function() {
    function e(t, n) {
        this.pluginCtx = new US(t,n),
        this.moduleCtx = new BS(t,n)
    }
    return Object.defineProperty(e.prototype, "pluginContext", {
        get: function() {
            return this.pluginCtx
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "moduleContext", {
        get: function() {
            return this.moduleCtx
        },
        enumerable: !1,
        configurable: !0
    }),
    e
}(), HS = function() {
    function e() {
        this.modules = new Map,
        this.hooks = {},
        this.internalHooks = {}
    }
    return e.prototype.addModule = function(t, n) {
        this.modules.set(t, n),
        n.hooks && (this.hooks[t] = Object.entries(n.hooks).reduce(function(r, o) {
            var i, s = je(o, 2), a = s[0], l = s[1];
            return De(De({}, r), ((i = {})[a] = l.on.bind(l),
            i))
        }, {})),
        "internalHooks"in n && n.internalHooks && (this.internalHooks[t] = Object.entries(n.internalHooks).reduce(function(r, o) {
            var i, s = je(o, 2), a = s[0], l = s[1];
            return De(De({}, r), ((i = {})[a] = l.on.bind(l),
            i))
        }, {}))
    }
    ,
    e.prototype.hasModule = function(t) {
        return this.modules.has(t)
    }
    ,
    e
}(), pe = function() {}, Sh = function(e) {
    return e instanceof pe
}, Gv = function(e) {
    function t(n, r, o) {
        var i = e.call(this) || this;
        return i.driver = n,
        i.contextHolder = r,
        i.option = o,
        i
    }
    return me(t, e),
    t.prototype.install = function() {
        return this.factory(this.driver, this.contextHolder)
    }
    ,
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "use"
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "defaultOption", {
        get: function() {
            return {
                namespacePrefix: "$"
            }
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.factory = function(n, r) {
        var o = Object.assign({}, this.defaultOption, this.option).namespacePrefix;
        return function(i, s) {
            if (!i || typeof i.install != "function" || typeof i.name != "string")
                return we.warn("To install the plugin, you need to define the `name` property and the `install` method."),
                this;
            var a = Sh(i) ? i.name : "".concat(o).concat(i.name);
            if (n.hasModule(a))
                return this;
            var l = Sh(i) ? i.install.call(i, r.moduleContext, s) : i.install.call(i, r.pluginContext, s);
            return this["".concat(a)] ? (we.warn("There is a duplicate plugin name. `".concat(a, "` plugin namespace will be override.")),
            this["".concat(a)] = l) : l !== void 0 && (this["".concat(a)] = l),
            n.addModule(a, i),
            this
        }
    }
    ,
    t
}(pe), Qv, WS = new Promise(function(e) {
    Qv = e
}
), It = "UNKNOWN", Rt = "UNAUTHORIZED", nt = "INVALID_ARGUMENT", rt = "INIT_FAILED", et = "FORBIDDEN", Fn = "INVALID_CONFIG", Br = "INVALID_ID_TOKEN", Mc = "CREATE_SUBWINDOW_FAILED", Fc = "EXCEPTION_IN_SUBWINDOW", Jv = "liffEvent", Cn = "LIFF_STORE", Xv = "https://liff.".concat("line.me", "/"), de = {
    ACCESS_TOKEN: "accessToken",
    ID_TOKEN: "IDToken",
    DECODED_ID_TOKEN: "decodedIDToken",
    FEATURE_TOKEN: "featureToken",
    LOGIN_TMP: "loginTmp",
    CONFIG: "config",
    CONTEXT: "context",
    EXPIRES: "expires",
    RAW_CONTEXT: "rawContext",
    CLIENT_ID: "clientId",
    IS_SUBSEQUENT_LIFF_APP: "isSubsequentLiffApp",
    MST_CHALLENGE: "mstChallenge",
    MSIT: "msit",
    MST: "mst",
    MST_VERIFIER: "mstVerifier",
    APP_DATA: "appData"
}, Eh = "isInClient", Zv = ["context_token", "feature_token", "access_token", "id_token", "client_id", "mst_verifier", "mst_challenge", "msit"], VS = 5, KS = ["liff.ref.source", "liff.ref.medium", "liff.ref.campaign", "liff.ref.term", "liff.ref.content"], qS = "liff://subwindow", Se = {
    INIT: "init",
    SUBMIT: "submit",
    CANCEL: "cancel",
    CLOSE: "close",
    ERROR: "error"
}, YS = 100, ey = 100, ty = "liff.subwindow", rl = "healthCheck", GS = ["profile", "chat_message.write", "openid", "email"];
function Ch(e) {
    return window.atob(e.replace(/-/g, "+").replace(/_/g, "/"))
}
var Pu = {
    decode: Ch,
    encode: function(e) {
        return window.btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
    },
    decodeUnicode: function(e) {
        var t = Ch(e).split("").map(function(n) {
            return "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2)
        }).join("");
        return decodeURIComponent(t)
    }
};
function jn(e, t) {
    if (e === t)
        return 0;
    for (var n = e.split("."), r = t.split("."), o = Math.max(n.length, r.length), i = 0; i < o; i++) {
        n[i] || (n[i] = "0"),
        r[i] || (r[i] = "0");
        var s = parseInt(n[i]) - parseInt(r[i]);
        if (s !== 0)
            return s > 0 ? 1 : -1
    }
    return 0
}
function kh(e) {
    var t = e.replace("#", "").match(/.{2}/g) || [];
    if (t.length !== 4)
        return we.warn("convertArgbToRgba: Received invalid ARGB color"),
        "";
    var n = function(s) {
        var a = Jr(s);
        return Math.round(a / 255 * 100) / 100
    }(t[0])
      , r = Jr(t[1])
      , o = Jr(t[2])
      , i = Jr(t[3]);
    return "rgba(".concat(r, ", ").concat(o, ", ").concat(i, ", ").concat(n, ")")
}
function Jr(e) {
    return parseInt(e, 16)
}
function _h(e) {
    var t = e.replace("#", "").match(/.{2}/g) || [];
    if (t.length !== 3)
        return we.warn("convertArgbToRgba: Received invalid hex color"),
        "";
    var n = Jr(t[0])
      , r = Jr(t[1])
      , o = Jr(t[2]);
    return "".concat(n, ", ").concat(r, ", ").concat(o)
}
function Th(e) {
    for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), o = 0; o < t; o++)
        r[o] = e.charCodeAt(o);
    return n
}
var id = {
    get: function(e) {
        var t = new RegExp("(?:(?:^|.*;\\s*)".concat(e, "\\s*\\=\\s*([^;]*).*$)|^.*$"));
        return document.cookie.replace(t, "$1")
    },
    set: function(e, t, n) {
        var r = e + "=" + t;
        if (n)
            for (var o in n) {
                var i = n[o] ? "=".concat(n[o]) : "";
                r += "; ".concat(o).concat(i)
            }
        we.debug("set cookie", r),
        document.cookie = r
    },
    remove: function(e, t) {
        var n = "".concat(e, "=; expires=Thu, 01 Jan 1970 00:00:00 GMT");
        if (t)
            for (var r in t)
                n += "; ".concat(r, "=").concat(t[r]);
        document.cookie = n
    }
}
  , QS = new Set(["400", "401", "403", "404", "429", "500"])
  , ny = function(e) {
    function t(n, r) {
        var o = e.call(this, r) || this;
        return o.code = n,
        o
    }
    return me(t, e),
    t
}(Error);
function A(e, t) {
    return new ny(e,t || "")
}
function sd(e) {
    var t = e.match(/([^-]+)-[^-]+/);
    return t && t[1]
}
function JS(e) {
    var t = "";
    return e.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ").forEach(function(n) {
        t += String.fromCharCode(parseInt(n))
    }),
    window.btoa(t)
}
var XS = new (function() {
    function e() {
        this.map = {}
    }
    return e.prototype.clear = function() {
        this.map = {}
    }
    ,
    e.prototype.getItem = function(t) {
        var n = this.map[t];
        return n === void 0 ? null : n
    }
    ,
    e.prototype.setItem = function(t, n) {
        this.map[t] = n
    }
    ,
    e.prototype.removeItem = function(t) {
        delete this.map[t]
    }
    ,
    e.prototype.key = function(t) {
        var n = Object.keys(this.map)[t];
        return n === void 0 ? null : n
    }
    ,
    Object.defineProperty(e.prototype, "length", {
        get: function() {
            return Object.keys(this.map).length
        },
        enumerable: !1,
        configurable: !0
    }),
    e
}())
  , Lt = {
    parse: function(e) {
        return e.replace(/^\?/, "").replace(/^#\/?/, "").split(/&+/).filter(function(t) {
            return t.length > 0
        }).reduce(function(t, n) {
            var r = je(n.split("=").map(decodeURIComponent), 2)
              , o = r[0]
              , i = r[1]
              , s = t[o];
            return Array.isArray(s) ? s.push(i) : Object.prototype.hasOwnProperty.call(t, o) ? t[o] = [s, i] : t[o] = i,
            t
        }, {})
    },
    stringify: function(e) {
        return Object.keys(e).map(function(t) {
            var n = e[t]
              , r = function(o) {
                return o !== void 0 ? "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(o)) : encodeURIComponent(t)
            };
            return Array.isArray(n) ? n.map(function(o) {
                return r(o)
            }).join("&") : r(n)
        }).join("&")
    }
}
  , Ph = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function ZS() {
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296
}
function si(e) {
    for (var t = "", n = 0; n < e; n++)
        t += Ph[Math.floor(ZS() * Ph.length)];
    return t
}
function ry(e) {
    var t = new URL(e)
      , n = t.hash.slice(1).split("&").filter(function(r) {
        return !Zv.some(function(o) {
            return r.includes("".concat(o, "="))
        })
    }).join("&");
    return t.hash = n,
    t.toString()
}
function eE(e) {
    var t = new URL(e);
    return t.toString().replace(new RegExp(String.raw(Oh || (Oh = MS(["^", ""], ["^", ""])), t.origin)), "")
}
var Oh, tE = function(e) {
    var t = eE(ry(e));
    window.history.replaceState(history.state, "", t)
};
function oy(e, t) {
    if (!e)
        throw new Error("addParamsToUrl: invalid URL");
    var n = new URL(e);
    return Object.entries(t).forEach(function(r) {
        var o = je(r, 2)
          , i = o[0]
          , s = o[1];
        n.searchParams.set(i, s)
    }),
    n.toString()
}
function iy(e) {
    var t, n = e.match((t = Xv.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    new RegExp("^".concat(t, "(\\d+-\\w+)"))));
    return n && n[1]
}
function nE(e) {
    var t = e.match(/^(https?:\/\/.*?)\//);
    return t && t[1] || ""
}
function ad(e) {
    return e === void 0 && (e = window.navigator.userAgent),
    /ipad/.test(e.toLowerCase())
}
function sy(e) {
    return e === void 0 && (e = window.navigator.userAgent),
    /Line\/\d+\.\d+\.\d+/.test(e)
}
function ay(e) {
    return e === void 0 && (e = window.navigator.userAgent),
    /Line\/\d+\.\d+\.\d+ LIFF/.test(e)
}
function rE(e) {
    return e === void 0 && (e = window.navigator.userAgent),
    /LIFF\/SubWindow/.test(e)
}
function oE(e) {
    for (var t, n, r = [], o = 1; o < arguments.length; o++)
        r[o - 1] = arguments[o];
    var i = function(c) {
        Object.keys(c).filter(function(d) {
            return c[d] !== null && c[d] !== void 0
        }).forEach(function(d) {
            e[d] = c[d]
        })
    };
    try {
        for (var s = Pl(r), a = s.next(); !a.done; a = s.next()) {
            var l = a.value;
            i(l)
        }
    } catch (c) {
        t = {
            error: c
        }
    } finally {
        try {
            a && !a.done && (n = s.return) && n.call(s)
        } finally {
            if (t)
                throw t.error
        }
    }
    return e
}
var la = null;
function Ee() {
    return la === null && (la = ay() || sy() && /[#|&]access_token=/.test(location.hash) || sessionStorage.getItem("".concat(Cn, ":").concat(Eh)) === "1",
    sessionStorage.setItem("".concat(Cn, ":").concat(Eh), la ? "1" : "0")),
    !!la
}
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "isInClient"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return function() {
            return Ee()
        }
    }
    ,
    t
}
)(pe);
function qe() {
    var e;
    return (e = window.__liffConfig) !== null && e !== void 0 ? e : {}
}
function iE(e) {
    window.__liffConfig = e
}
function sE(e, t) {
    if (!t)
        throw A(Fn, "liffId is necessary for liff.init()");
    var n = (Ee() ? sessionStorage : localStorage).getItem("".concat(Cn, ":").concat(t, ":").concat(e));
    try {
        return n === null ? null : JSON.parse(n)
    } catch {
        return null
    }
}
function Qt(e) {
    return sE(e, qe().liffId)
}
function on(e, t) {
    var n = qe().liffId;
    if (!n)
        throw A(Fn, "liffId is necessary for liff.init()");
    (Ee() ? sessionStorage : localStorage).setItem("".concat(Cn, ":").concat(n, ":").concat(e), JSON.stringify(t))
}
function Tt() {
    return Qt(de.CONTEXT)
}
function ld(e) {
    on(de.CONTEXT, e)
}
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "getContext"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return function() {
            return Tt()
        }
    }
    ,
    t
}
)(pe);
function ly() {
    return ((Tt() || {}).d || {}).aId
}
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "getAId"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return function() {
            return ly()
        }
    }
    ,
    t
}
)(pe);
function uy() {
    return ((Tt() || {}).d || {}).autoplay || !1
}
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "getIsVideoAutoPlay"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return function() {
            return uy()
        }
    }
    ,
    t
}
)(pe);
function cy() {
    return (Tt() || {}).profilePlus
}
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "getProfilePlus"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return function() {
            return cy()
        }
    }
    ,
    t
}
)(pe);
function aE() {
    return !!Qt(de.IS_SUBSEQUENT_LIFF_APP)
}
function lE(e) {
    on(de.IS_SUBSEQUENT_LIFF_APP, e)
}
function uE() {
    return Qt(de.APP_DATA)
}
function Bc(e) {
    on(de.APP_DATA, e)
}
function cE() {
    return Qt(de.MST_VERIFIER)
}
function fE(e) {
    on(de.MST_VERIFIER, e)
}
function dE() {
    return Qt(de.MSIT)
}
function pE(e) {
    on(de.MSIT, e)
}
function ka() {
    return Qt(de.MST)
}
function hE(e) {
    on(de.MST, e)
}
function fy() {
    return Qt(de.MST_CHALLENGE)
}
function mE(e) {
    on(de.MST_CHALLENGE, e)
}
function gE() {
    return Qt(de.CLIENT_ID)
}
function dy(e) {
    on(de.CLIENT_ID, e)
}
function vE() {
    return Qt(de.RAW_CONTEXT)
}
function $s() {
    return Qt(de.FEATURE_TOKEN)
}
function $h(e) {
    on(de.FEATURE_TOKEN, e)
}
function Ol() {
    return Qt(de.ID_TOKEN)
}
function py(e) {
    on(de.ID_TOKEN, e)
}
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "getIDToken"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return function() {
            return Ol()
        }
    }
    ,
    t
}
)(pe);
function or() {
    return Qt(de.ACCESS_TOKEN)
}
function ud(e) {
    on(de.ACCESS_TOKEN, e)
}
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "getAccessToken"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return function() {
            return or()
        }
    }
    ,
    t
}
)(pe);
function hy(e) {
    var t = qe().liffId;
    if (!t)
        throw A(Fn, "liffId is necessary for liff.init()");
    (Ee() ? sessionStorage : localStorage).removeItem("".concat(Cn, ":").concat(t, ":").concat(e))
}
function my() {
    return Qt(de.LOGIN_TMP)
}
function yE(e) {
    on(de.LOGIN_TMP, e)
}
function Ih() {
    hy(de.LOGIN_TMP)
}
function wE(e) {
    var t = qe();
    id.set("".concat(Cn, ":").concat(de.EXPIRES, ":").concat(t.liffId), e.getTime(), {
        expires: e.toUTCString(),
        path: "/",
        secure: null
    })
}
function bE() {
    var e = qe();
    return id.get("".concat(Cn, ":").concat(de.EXPIRES, ":").concat(e.liffId))
}
function xE() {
    var e = qe();
    id.remove("".concat(Cn, ":").concat(de.EXPIRES, ":").concat(e.liffId), {
        path: "/"
    })
}
function $l() {
    return Qt(de.DECODED_ID_TOKEN)
}
function gy(e) {
    on(de.DECODED_ID_TOKEN, e)
}
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "getDecodedIDToken"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return function() {
            return $l()
        }
    }
    ,
    t
}
)(pe);
function SE() {
    Object.keys(de).forEach(function(e) {
        hy(de[e])
    }),
    xE()
}
function Gt() {
    return !!or()
}
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "isLoggedIn"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return function() {
            return Gt()
        }
    }
    ,
    t
}
)(pe);
function Il() {
    return "2.22.0"
}
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "getVersion"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return function() {
            return "2.22.0"
        }
    }
    ,
    t
}
)(pe);
var EE = function() {
    function e() {}
    return e.prototype.invoke = function() {
        return rE()
    }
    ,
    e
}()
  , CE = function() {
    function e(t) {
        this.storage = t
    }
    return Object.defineProperty(e, "IN_SUB_WINDOW_KEY", {
        get: function() {
            return "inSubWindow"
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.invoke = function() {
        return new URLSearchParams(window.location.search).has(ty) && this.setInSubWindow(!0),
        !(!this.getInSubWindow() && !this.getSubWindowIdentifier())
    }
    ,
    e.prototype.getInSubWindow = function() {
        var t = this.storage.getItem("".concat(Cn, ":").concat(this.getLiffId(), ":").concat(e.IN_SUB_WINDOW_KEY));
        return t !== null && JSON.parse(t)
    }
    ,
    e.prototype.getSubWindowIdentifier = function() {
        var t, n, r = "liff.subwindow.identifier", o = new URLSearchParams(window.location.search);
        return o.get(r) || (t = r,
        (n = o.get("liff.state")) ? new URLSearchParams(n).get(t) : null) || null
    }
    ,
    e.prototype.setInSubWindow = function(t) {
        this.storage.setItem("".concat(Cn, ":").concat(this.getLiffId(), ":").concat(e.IN_SUB_WINDOW_KEY), String(t))
    }
    ,
    e.prototype.getLiffId = function() {
        var t = qe().liffId;
        if (!t)
            throw A(Fn, "liffId is necessary for liff.init()");
        return t
    }
    ,
    e
}()
  , kE = function(e) {
    function t() {
        var n = e.call(this) || this;
        return Ee() ? n.impl = new EE : n.impl = new CE(window.sessionStorage),
        n
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "isSubWindow"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return this.impl.invoke.bind(this.impl)
    }
    ,
    t
}(pe)
  , vy = new kE
  , ao = vy.install();
function ir() {
    var e = navigator.userAgent.match(/Line\/\d+(\.\d+)*/i);
    return e ? e[0].slice(5) : null
}
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "getLineVersion"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return function() {
            return ir()
        }
    }
    ,
    t
}
)(pe);
function yy(e) {
    var t, n = Tt();
    return (t = n == null ? void 0 : n.availability) === null || t === void 0 ? void 0 : t[e]
}
function pr(e, t) {
    var n = yy(e);
    if (!n || !n.permission)
        return {
            available: !1,
            error: {
                code: et,
                message: "".concat(e, " is not allowed in this LIFF app")
            }
        };
    var r = n.minVer
      , o = n.unsupportedFromVer;
    if (Ee()) {
        var i = function(s, a) {
            var l = ir();
            return !!l && !(a && jn(l, a) > 0) && jn(l, s) >= 0
        }(r, o);
        return i ? {
            available: !0
        } : {
            available: !1,
            error: {
                code: et,
                message: "".concat(e, " is unavailable in this client version.")
            }
        }
    }
    return t ? {
        available: !0
    } : {
        available: !1,
        error: {
            code: et,
            message: "".concat(e, " is not allowed in external browser")
        }
    }
}
var Lh = function() {
    return Gt() ? !ay() && sy() ? {
        available: !1,
        error: {
            code: et,
            message: "Subwindow is not supported in this browser"
        }
    } : ao() ? {
        available: !1,
        error: {
            code: et,
            message: "this api can be only called in child window"
        }
    } : pr("subwindowOpen", !0) : {
        available: !1,
        error: {
            code: Rt,
            message: "Need access_token for api call, Please login first"
        }
    }
}
  , _E = ["subwindowOpen", "shareTargetPicker", "multipleLiffTransition", "scanCode", "scanCodeV2", "getAdvertisingId", "addToHomeScreen", "bluetoothLeFunction", "skipChannelVerificationScreen"]
  , On = {
    scanCode: function() {
        return pr("scanCode")
    },
    getAdvertisingId: function() {
        return pr("getAdvertisingId")
    },
    bluetoothLeFunction: function() {
        return pr("bluetoothLeFunction")
    },
    shareTargetPicker: function() {
        return ao() ? {
            available: !1,
            error: {
                code: et,
                message: "this api can be only called in child window"
            }
        } : Gt() ? pr("shareTargetPicker", !0) : {
            available: !1,
            error: {
                code: Rt,
                message: "Need access_token for api call, Please login first"
            }
        }
    },
    multipleLiffTransition: function() {
        var e = yy("multipleLiffTransition");
        return e && e.permission ? Ee() ? {
            available: !0
        } : {
            available: !1,
            error: {
                code: et,
                message: "multipleLiffTransition is available only in the LINE App browser"
            }
        } : {
            available: !1,
            error: {
                code: et,
                message: "multipleLiffTransition is not allowed in this LIFF app"
            }
        }
    },
    subwindowOpen: Lh,
    scanCodeV2: function() {
        if (!Gt())
            return {
                available: !1,
                error: {
                    code: Rt,
                    message: "Need access_token for api call, Please login first"
                }
            };
        var e = Lh();
        return e.available ? pr("scanCodeV2", !0) : e
    },
    addToHomeScreen: function() {
        return ao() ? {
            available: !1,
            error: {
                code: et,
                message: "this api can be only called in child window"
            }
        } : pr("addToHomeScreen")
    },
    skipChannelVerificationScreen: function() {
        var e = Tt();
        return e ? e.type === "square_chat" ? {
            available: !1,
            error: {
                code: et,
                message: "skipChannelVerificationScreen is not allowed in OpenChat"
            }
        } : pr("skipChannelVerificationScreen") : {
            available: !1,
            error: {
                code: et,
                message: "Context is not found"
            }
        }
    }
}
  , Wn = function(e) {
    return function() {
        var t = e();
        if (!t.available)
            throw A(t.error.code, t.error.message)
    }
}
  , Ll = {
    scanCode: Wn(On.scanCode),
    getAdvertisingId: Wn(On.getAdvertisingId),
    bluetoothLeFunction: Wn(On.bluetoothLeFunction),
    shareTargetPicker: Wn(On.shareTargetPicker),
    multipleLiffTransition: Wn(On.multipleLiffTransition),
    subwindowOpen: Wn(On.subwindowOpen),
    scanCodeV2: Wn(On.scanCodeV2),
    addToHomeScreen: Wn(On.addToHomeScreen),
    skipChannelVerificationScreen: Wn(On.skipChannelVerificationScreen)
};
function Is(e) {
    if (!function(n) {
        return _E.some(function(r) {
            return r === n
        })
    }(e))
        throw A(nt, "Unexpected API name.");
    var t = On[e];
    return !t || t().available
}
(function(e) {
    function t() {
        var n = e !== null && e.apply(this, arguments) || this;
        return n.hooks = {},
        n
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "isApiAvailable"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return function(n) {
            return Is(n)
        }
    }
    ,
    t
}
)(pe);
var TE = function() {
    function e() {}
    return e.prototype.invoke = function(t) {
        var n = Ll[t];
        return !!n && (n(),
        !0)
    }
    ,
    e
}(), PE = function() {
    function e(t) {
        this.liff = t
    }
    return e.prototype.invoke = function(t) {
        return this.liff.checkFeature(t)
    }
    ,
    e
}(), Ou = function() {
    function e(t) {
        jn(Il(), e.SDK_VERSION_SUPPORTING_NEW) >= 0 ? this.impl = new TE : this.impl = new PE(t)
    }
    return Object.defineProperty(e, "SDK_VERSION_SUPPORTING_NEW", {
        get: function() {
            return "2.11.0"
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.invoke = function(t) {
        return this.impl.invoke(t)
    }
    ,
    e
}(), $u;
function fn() {
    if (!$u) {
        var e = window.navigator.userAgent.toLowerCase();
        $u = /iphone|ipad|ipod/.test(e) ? "ios" : /android/.test(e) ? "android" : "web"
    }
    return $u
}
(function(e) {
    function t() {
        return e.call(this) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "getOS"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return function() {
            return fn()
        }
    }
    ,
    t
}
)(pe);
var Uc = function(e, t) {
    return Uc = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(n, r) {
        n.__proto__ = r
    }
    || function(n, r) {
        for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
    }
    ,
    Uc(e, t)
};
function OE(e, t, n, r) {
    return new (n || (n = Promise))(function(o, i) {
        function s(c) {
            try {
                l(r.next(c))
            } catch (d) {
                i(d)
            }
        }
        function a(c) {
            try {
                l(r.throw(c))
            } catch (d) {
                i(d)
            }
        }
        function l(c) {
            var d;
            c.done ? o(c.value) : (d = c.value,
            d instanceof n ? d : new n(function(m) {
                m(d)
            }
            )).then(s, a)
        }
        l((r = r.apply(e, t || [])).next())
    }
    )
}
function $E(e, t) {
    var n, r, o, i, s = {
        label: 0,
        sent: function() {
            if (1 & o[0])
                throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
    },
    typeof Symbol == "function" && (i[Symbol.iterator] = function() {
        return this
    }
    ),
    i;
    function a(l) {
        return function(c) {
            return function(d) {
                if (n)
                    throw new TypeError("Generator is already executing.");
                for (; s; )
                    try {
                        if (n = 1,
                        r && (o = 2 & d[0] ? r.return : d[0] ? r.throw || ((o = r.return) && o.call(r),
                        0) : r.next) && !(o = o.call(r, d[1])).done)
                            return o;
                        switch (r = 0,
                        o && (d = [2 & d[0], o.value]),
                        d[0]) {
                        case 0:
                        case 1:
                            o = d;
                            break;
                        case 4:
                            return s.label++,
                            {
                                value: d[1],
                                done: !1
                            };
                        case 5:
                            s.label++,
                            r = d[1],
                            d = [0];
                            continue;
                        case 7:
                            d = s.ops.pop(),
                            s.trys.pop();
                            continue;
                        default:
                            if (o = s.trys,
                            !((o = o.length > 0 && o[o.length - 1]) || d[0] !== 6 && d[0] !== 2)) {
                                s = 0;
                                continue
                            }
                            if (d[0] === 3 && (!o || d[1] > o[0] && d[1] < o[3])) {
                                s.label = d[1];
                                break
                            }
                            if (d[0] === 6 && s.label < o[1]) {
                                s.label = o[1],
                                o = d;
                                break
                            }
                            if (o && s.label < o[2]) {
                                s.label = o[2],
                                s.ops.push(d);
                                break
                            }
                            o[2] && s.ops.pop(),
                            s.trys.pop();
                            continue
                        }
                        d = t.call(e, s)
                    } catch (m) {
                        d = [6, m],
                        r = 0
                    } finally {
                        n = o = 0
                    }
                if (5 & d[0])
                    throw d[1];
                return {
                    value: d[0] ? d[1] : void 0,
                    done: !0
                }
            }([l, c])
        }
    }
}
var wy = !1
  , IE = function() {
    return wy
}
  , LE = function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return function(n, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
        function o() {
            this.constructor = n
        }
        Uc(n, r),
        n.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype,
        new o)
    }(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "_legacyExtensionsEnabled"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        wy = !0
    }
    ,
    t
}(pe);
function NE() {
    var e;
    return fn() === "ios" ? (e = ir()) && jn(e, "9.19.0") < 0 ? "https://static.line-scdn.net/liff/edge/2/ios-918-extensions_2_22_0.js" : "https://static.line-scdn.net/liff/edge/2/ios-extensions_2_22_0.js" : "https://static.line-scdn.net/liff/edge/2/non-ios-extensions_2_22_0.js"
}
function RE() {
    return IE() ? function() {
        return OE(this, void 0, void 0, function() {
            return $E(this, function(e) {
                switch (e.label) {
                case 0:
                    return [3, 2];
                case 1:
                    return [2, e.sent().default];
                case 2:
                    return [2, new Promise(function(t, n) {
                        var r = document.createElement("script")
                          , o = NE();
                        r.onload = function() {
                            var i = window.liffClientExtension;
                            i ? t(i) : n(A(rt, "Unable to load client features. (Extension is empty)"))
                        }
                        ,
                        r.onerror = function() {
                            n(A(rt, "Unable to load client features."))
                        }
                        ,
                        r.src = o,
                        r.type = "text/javascript",
                        document.body.appendChild(r)
                    }
                    )]
                }
            })
        })
    }() : Promise.resolve(void 0)
}
function cd() {
    SE()
}
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "logout"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return function() {
            return cd()
        }
    }
    ,
    t
}
)(pe);
function AE(e) {
    return K(this, void 0, void 0, function() {
        var t, n, r;
        return q(this, function(o) {
            switch (o.label) {
            case 0:
                if (!e.ok)
                    return [3, 4];
                o.label = 1;
            case 1:
                return o.trys.push([1, 3, , 4]),
                [4, e.json()];
            case 2:
                return [2, o.sent()];
            case 3:
                return o.sent(),
                [2, e];
            case 4:
                return t = String(e.status),
                n = QS.has(t) ? t : It,
                [4, e.json().catch(function() {
                    throw A(n, e.statusText)
                })];
            case 5:
                throw r = o.sent(),
                A(r.error || n, r.error_description || r.message)
            }
        })
    })
}
function by(e) {
    var t = function(n) {
        if (n)
            return n;
        var r = or();
        if (!r)
            throw A(Rt, "Need access_token for api call, Please login first");
        return {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer ".concat(r)
        }
    }(e && e.headers);
    return De(De({}, e), {
        headers: t
    })
}
function at(e, t) {
    var n;
    try {
        n = by(t)
    } catch (r) {
        return Promise.reject(r)
    }
    return fetch(e, n).then(AE)
}
function jE(e, t) {
    var n;
    try {
        n = by(t)
    } catch (r) {
        return Promise.reject(r)
    }
    return fetch(e, n)
}
function Xe(e) {
    var t = e.subdomain
      , n = t === void 0 ? "api" : t
      , r = e.pathname;
    return "https://".concat(n, ".").concat("line.me", "/").concat(r)
}
var DE = {
    token: Xe({
        pathname: "oauth2/v2.1/token"
    }),
    certs: Xe({
        pathname: "oauth2/v2.1/certs"
    }),
    "openid-configuration": Xe({
        subdomain: "access",
        pathname: ".well-known/openid-configuration"
    }),
    authorize: Xe({
        subdomain: "access",
        pathname: "liff/v1/authorize"
    }),
    profile: Xe({
        pathname: "v2/profile"
    }),
    message: Xe({
        pathname: "message/v3/share"
    }),
    friendship: Xe({
        pathname: "friendship/v1/status"
    }),
    shareTargetPicker: Xe({
        subdomain: "access",
        pathname: "oauth2/v2.1/liff/shareTargetPicker"
    }),
    shareTargetPickerOtt: Xe({
        pathname: "liff/v2/apps"
    }),
    shareTargetPickerResult: Xe({
        subdomain: "access",
        pathname: "oauth2/v2.1/liff/shareTargetPicker/result"
    }),
    apps: Xe({
        pathname: "liff/v2/apps"
    }),
    subWindowGetMSIT: Xe({
        pathname: "liff/v2/sub/msit"
    }),
    subWindowGetMSTByMSIT: Xe({
        pathname: "liff/v2/sub/mst"
    }),
    subWindowSubscribe: Xe({
        subdomain: "liff",
        pathname: "liff/v2/sub/waitResult"
    }),
    subWindowPost: Xe({
        pathname: "liff/v2/sub/result"
    }),
    subWindowGetAppData: Xe({
        pathname: "liff/v2/sub/appData"
    }),
    subWindowGetOrigin: function(e) {
        return Xe({
            pathname: "liff/v2/sub/".concat(e, "/origin")
        })
    },
    accessTokenVerify: Xe({
        pathname: "oauth2/v2.1/verify"
    }),
    unauthorizedPermissions: Xe({
        subdomain: "liff",
        pathname: "liff/v2/incrementalAgreement/unauthorizedPermissions"
    }),
    permanentLink: Xe({
        subdomain: "liff",
        pathname: "liff/v2/permanentLink"
    })
};
function We(e) {
    return DE[e]
}
function xy(e) {
    return at("".concat(We("accessTokenVerify"), "?access_token=").concat(encodeURIComponent(e)), {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })
}
var Sy = "liff.subwindow.identifier"
  , zc = "liff.subwindow.cryptokey"
  , _a = De(De({}, Se), {
    GET_DATA: "getData",
    SET_DATA: "setData",
    NOT_FOUND: "notFound",
    TEARDOWN: "teardown"
})
  , ol = {
    BROADCAST: "broadcast",
    COMMAND: "command"
}
  , Xi = {
    MAIN: "main",
    SUB: "sub"
}
  , Ey = function(e) {
    return K(void 0, void 0, void 0, function() {
        var t;
        return q(this, function(n) {
            switch (n.label) {
            case 0:
                return n.trys.push([0, 2, , 3]),
                [4, window.crypto.subtle.importKey("jwk", {
                    kty: "oct",
                    k: e,
                    alg: "A128GCM",
                    ext: !0
                }, {
                    name: "AES-GCM"
                }, !1, ["encrypt", "decrypt"])];
            case 1:
                return [2, n.sent()];
            case 2:
                throw t = n.sent(),
                A(It, t);
            case 3:
                return [2]
            }
        })
    })
}
  , ME = function(e, t, n) {
    return K(void 0, void 0, void 0, function() {
        var r, o, i, s;
        return q(this, function(a) {
            switch (a.label) {
            case 0:
                return a.trys.push([0, 3, , 4]),
                r = new TextEncoder().encode(e),
                [4, Ey(t)];
            case 1:
                return o = a.sent(),
                [4, window.crypto.subtle.encrypt({
                    name: "AES-GCM",
                    iv: r
                }, o, new TextEncoder().encode(n))];
            case 2:
                return i = a.sent(),
                [2, btoa(new Uint8Array(i).reduce(function(l, c) {
                    return l + String.fromCharCode(c)
                }, ""))];
            case 3:
                throw s = a.sent(),
                A(It, s);
            case 4:
                return [2]
            }
        })
    })
}
  , FE = function(e, t, n) {
    return K(void 0, void 0, void 0, function() {
        var r, o, i, s, a, l, c;
        return q(this, function(d) {
            switch (d.label) {
            case 0:
                return d.trys.push([0, 3, , 4]),
                r = new TextEncoder().encode(e),
                [4, Ey(t)];
            case 1:
                for (o = d.sent(),
                i = atob(n),
                s = new Uint8Array(i.length),
                a = 0; a < i.length; a++)
                    s[a] = i.charCodeAt(a);
                return [4, window.crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: r
                }, o, s.buffer)];
            case 2:
                return l = d.sent(),
                [2, new TextDecoder().decode(new Uint8Array(l))];
            case 3:
                throw c = d.sent(),
                A(It, c);
            case 4:
                return [2]
            }
        })
    })
}
  , BE = function(e, t) {
    return Zi(e) === Zi(t)
}
  , Zi = function(e) {
    return "".concat(e.identifier, "-").concat(e.action, "-").concat(e.timestamp)
}
  , UE = function(e) {
    return Object.keys(Se).map(function(t) {
        return Se[t]
    }).includes(e) ? ol.BROADCAST : ol.COMMAND
};
function zE() {
    var e = document.createElement("form");
    e.method = "POST",
    e.action = "$MESSAGE_HANDLER_URL";
    var t = document.createElement("input");
    t.type = "hidden",
    t.name = "identifier",
    t.value = "$IDENTIFIER",
    e.appendChild(t),
    document.body.appendChild(e),
    e.submit()
}
var HE = function(e) {
    e === void 0 && (e = Xi.MAIN);
    var t = this;
    this.identification = {
        identifier: "",
        cryptoKey: ""
    },
    this.messageHandlerInstance = null,
    this.listeners = new Map,
    this.sentMessages = [],
    this.generateIdentification = function() {
        return K(t, void 0, void 0, function() {
            var n, r, o, i, s;
            return q(this, function(a) {
                switch (a.label) {
                case 0:
                    return n = new URLSearchParams(window.location.search),
                    r = function(l) {
                        var c = n.get("liff.state");
                        return c ? new URLSearchParams(c).get(l) : null
                    }
                    ,
                    o = this,
                    s = {
                        identifier: this.windowType === Xi.MAIN ? si(12) : n.get("liff.subwindow.identifier") || r("liff.subwindow.identifier") || ""
                    },
                    this.windowType !== Xi.MAIN ? [3, 2] : [4, K(void 0, void 0, void 0, function() {
                        var l, c, d;
                        return q(this, function(m) {
                            switch (m.label) {
                            case 0:
                                return m.trys.push([0, 3, , 4]),
                                [4, window.crypto.subtle.generateKey({
                                    name: "AES-GCM",
                                    length: 128
                                }, !0, ["encrypt", "decrypt"])];
                            case 1:
                                return l = m.sent(),
                                [4, window.crypto.subtle.exportKey("jwk", l)];
                            case 2:
                                if (!(c = m.sent()) || !c.k)
                                    throw A(It, "failed to generate key");
                                return [2, c.k];
                            case 3:
                                throw d = m.sent(),
                                A(It, d);
                            case 4:
                                return [2]
                            }
                        })
                    })];
                case 1:
                    return i = a.sent(),
                    [3, 3];
                case 2:
                    i = n.get(zc) || r(zc) || "",
                    a.label = 3;
                case 3:
                    return o.identification = (s.cryptoKey = i,
                    s),
                    [2]
                }
            })
        })
    }
    ,
    this.hasIdentification = function() {
        var n = t.identification
          , r = n.identifier
          , o = n.cryptoKey;
        return typeof r == "string" && typeof o == "string" && r.length > 0 && o.length > 0
    }
    ,
    this.isReady = function() {
        return t.hasIdentification() && !!t.messageHandlerInstance
    }
    ,
    this.setup = function() {
        return K(t, void 0, void 0, function() {
            var n, r, o, i, s, a = this;
            return q(this, function(l) {
                switch (l.label) {
                case 0:
                    return this.messageHandlerInstance ? [2] : [4, this.generateIdentification()];
                case 1:
                    if (l.sent(),
                    !(n = this.identification.identifier))
                        return [2];
                    if (r = /^[a-zA-Z0-9]+$/gm,
                    !n.match(r))
                        throw A(It, "Invalid identifier");
                    return (o = document.createElement("iframe")).style.display = "none",
                    o.src = "about:blank",
                    document.body.appendChild(o),
                    (s = o == null ? void 0 : o.contentWindow) === null || s === void 0 || s.window.eval("(".concat(zE.toString().replace("$MESSAGE_HANDLER_URL", "".concat("https://liff-subwindow.line.me/liff/v2/sub/messageHandler")).replace("$IDENTIFIER", n.split("'")[0]), ")()")),
                    i = "iframe-".concat(n, "-ready"),
                    [4, new Promise(function(c) {
                        var d = function(m) {
                            m.data[i] && (a.messageHandlerInstance = o,
                            window.addEventListener("message", a.proxyToListeners),
                            c(),
                            document.removeEventListener("message", d))
                        };
                        window.addEventListener("message", d)
                    }
                    )];
                case 2:
                    return [2, l.sent()]
                }
            })
        })
    }
    ,
    this.teardown = function() {
        return K(t, void 0, void 0, function() {
            var n, r;
            return q(this, function(o) {
                switch (o.label) {
                case 0:
                    return this.isReady() ? [4, this.send({
                        eventName: _a.TEARDOWN
                    })] : [3, 2];
                case 1:
                    o.sent(),
                    window.removeEventListener("message", this.proxyToListeners),
                    this.listeners.clear(),
                    (r = (n = this.messageHandlerInstance) === null || n === void 0 ? void 0 : n.parentNode) === null || r === void 0 || r.removeChild(this.messageHandlerInstance),
                    this.messageHandlerInstance = null,
                    o.label = 2;
                case 2:
                    return [2]
                }
            })
        })
    }
    ,
    this.listen = function(n) {
        t.listeners.set(n, n)
    }
    ,
    this.listenRepliedEvent = function(n, r) {
        var o = function(i) {
            i.replyTarget && BE(i.replyTarget, n) && (r(i),
            t.listeners.delete(o))
        };
        t.listeners.set(o, o)
    }
    ,
    this.send = function(n) {
        return K(t, void 0, void 0, function() {
            var r, o, i, s, a = this;
            return q(this, function(l) {
                switch (l.label) {
                case 0:
                    if (!this.isReady())
                        throw A("message bus is not ready to send message");
                    return o = {
                        action: UE(n.eventName),
                        identifier: this.identification.identifier || "",
                        timestamp: new Date().getTime()
                    },
                    [4, this.getEncryptedContext(n)];
                case 1:
                    return o.context = l.sent(),
                    r = o,
                    (s = (i = this.messageHandlerInstance) === null || i === void 0 ? void 0 : i.contentWindow) === null || s === void 0 || s.postMessage({
                        messageBusEvent: r
                    }, "*"),
                    this.sentMessages.push(Zi(r)),
                    [4, new Promise(function(c) {
                        a.listenRepliedEvent(r, function(d) {
                            c(d.context)
                        })
                    }
                    )];
                case 2:
                    return [2, l.sent()]
                }
            })
        })
    }
    ,
    this.reply = function(n, r) {
        return K(t, void 0, void 0, function() {
            var o, i, s, a;
            return q(this, function(l) {
                switch (l.label) {
                case 0:
                    if (!this.isReady())
                        throw A("message bus is not ready to send message");
                    if (!n.identifier || !n.timestamp)
                        throw A(It, "target message is not valid");
                    return i = {
                        action: ol.BROADCAST
                    },
                    [4, this.getEncryptedContext(r)];
                case 1:
                    return i.context = l.sent(),
                    i.identifier = this.identification.identifier || "",
                    i.timestamp = new Date().getTime(),
                    i.replyTarget = {
                        action: n.action,
                        identifier: n.identifier,
                        timestamp: n.timestamp
                    },
                    o = i,
                    (a = (s = this.messageHandlerInstance) === null || s === void 0 ? void 0 : s.contentWindow) === null || a === void 0 || a.postMessage({
                        messageBusEvent: o
                    }, "*"),
                    this.sentMessages.push(Zi(o)),
                    [2]
                }
            })
        })
    }
    ,
    this.setData = function(n, r) {
        n === void 0 && (n = "appData"),
        t.send({
            eventName: _a.SET_DATA,
            key: n,
            data: r
        })
    }
    ,
    this.getData = function(n) {
        return n === void 0 && (n = "appData"),
        K(t, void 0, void 0, function() {
            return q(this, function(r) {
                switch (r.label) {
                case 0:
                    return [4, this.send({
                        eventName: _a.GET_DATA,
                        key: n
                    })];
                case 1:
                    return [2, r.sent()]
                }
            })
        })
    }
    ,
    this.proxyToListeners = function(n) {
        return K(t, void 0, void 0, function() {
            var r, o = this;
            return q(this, function(i) {
                return (r = n.data.messageBusEvent) ? (this.sentMessages.includes(Zi(r)) || r.identifier !== this.identification.identifier || r.action !== ol.BROADCAST && !r.replyTarget || this.listeners.forEach(function(s) {
                    return K(o, void 0, void 0, function() {
                        var a, l, c;
                        return q(this, function(d) {
                            switch (d.label) {
                            case 0:
                                return a = s,
                                l = [De({}, r)],
                                c = {},
                                [4, this.getDecryptedContext(r.context)];
                            case 1:
                                return a.apply(void 0, [De.apply(void 0, l.concat([(c.context = d.sent(),
                                c)]))]),
                                [2]
                            }
                        })
                    })
                }),
                [2]) : [2]
            })
        })
    }
    ,
    this.getEncryptedContext = function(n) {
        return K(t, void 0, void 0, function() {
            var r, o, i, s, a, l, c;
            return q(this, function(d) {
                switch (d.label) {
                case 0:
                    return r = this.identification,
                    o = r.identifier,
                    i = r.cryptoKey,
                    a = (s = JSON).stringify,
                    c = {
                        eventName: n.eventName,
                        key: n.key ? n.key : void 0
                    },
                    n.data ? [4, ME(o, i, JSON.stringify(n.data))] : [3, 2];
                case 1:
                    return l = d.sent(),
                    [3, 3];
                case 2:
                    l = void 0,
                    d.label = 3;
                case 3:
                    return [2, a.apply(s, [(c.data = l,
                    c)])]
                }
            })
        })
    }
    ,
    this.getDecryptedContext = function(n) {
        return K(t, void 0, void 0, function() {
            var r, o, i, s, a, l, c, d;
            return q(this, function(m) {
                switch (m.label) {
                case 0:
                    return r = this.identification,
                    o = r.identifier,
                    i = r.cryptoKey,
                    (s = JSON.parse(n)).data && typeof s.data == "string" ? (d = (c = JSON).parse,
                    [4, FE(o, i, s.data)]) : [3, 2];
                case 1:
                    return l = d.apply(c, [m.sent()]),
                    [3, 3];
                case 2:
                    l = void 0,
                    m.label = 3;
                case 3:
                    return a = l,
                    [2, De(De({}, s), {
                        data: a
                    })]
                }
            })
        })
    }
    ,
    this.windowType = e
};
function WE(e) {
    return new CustomEvent(Jv,{
        detail: e
    })
}
(function() {
    if (typeof window.CustomEvent != "function") {
        let t = function(n, r) {
            var o = r || {}
              , i = o.bubbles
              , s = i !== void 0 && i
              , a = o.cancelable
              , l = a !== void 0 && a
              , c = o.detail
              , d = c === void 0 ? void 0 : c
              , m = document.createEvent("CustomEvent");
            return m.initCustomEvent(n, s, l, d),
            m
        };
        var e = t;
        t.prototype = Event.prototype,
        window.CustomEvent = t
    }
}
)();
var Po = {}
  , Nh = !1;
function fd(e, t) {
    Nh || (Nh = !0,
    window.addEventListener(Jv, function(n) {
        n && n.detail && n.detail.type && Po[n.detail.type] && Po[n.detail.type].forEach(function(r) {
            return r(n)
        })
    })),
    Po[e] ? Po[e].push(t) : Po[e] = [t]
}
function dd(e, t) {
    var n = Po[e];
    if (n && Array.isArray(n)) {
        var r = n.indexOf(t);
        r >= 0 && n.splice(r, 1)
    }
}
function VE(e) {
    var t = {};
    try {
        t = JSON.parse(e)
    } catch (r) {
        throw A(nt, r.message)
    }
    var n = WE(t);
    we.debug("[client dispatchEvent to js]", {
        type: n.type,
        detail: n.detail
    }),
    window.dispatchEvent(n)
}
function Cy(e, t, n) {
    t === void 0 && (t = {}),
    n === void 0 && (n = "");
    var r = $s();
    if (!r)
        throw A(et, "Invalid featureToken for client features");
    if (!window._liff || !window._liff.postMessage)
        throw A(nt, "postMessage is not available from client");
    we.debug("[js postMessage to client]", e, n, t),
    window._liff.postMessage(e, r, n, JSON.stringify(t))
}
function pd(e, t, n) {
    return t === void 0 && (t = {}),
    n === void 0 && (n = {
        once: !0
    }),
    $s() ? (n = De({
        callbackId: si(12),
        once: !0
    }, n),
    new Promise(function(r, o) {
        var i = function(s) {
            if (s && s.detail) {
                var a = s.detail.callbackId === n.callbackId
                  , l = typeof s.detail.callbackId != "string";
                (a || l) && (n.once && dd(e, i),
                we.debug("[callback detail]", s.detail),
                s.detail.error ? o(s.detail.error) : s.detail.data ? r(s.detail.data) : o(s.detail))
            }
            o()
        };
        fd(e, i),
        Cy(e, t, n.callbackId)
    }
    )) : Promise.reject(A(et, "Invalid featureToken for client features"))
}
function Qo() {
    var e = ir();
    e !== null && (fn() === "ios" && jn(e, "9.19") >= 0 || fn() === "android" && jn(e, "11.6.0") >= 0) ? location.href = "liff://close" : window._liff && window._liff.postMessage ? e !== null && jn(e, "10.15.0") >= 0 ? fn() === "ios" ? window._liff.postMessage("closeWindow", "") : window._liff.postMessage("closeWindow", "", "", "") : pd("closeWindow") : window.close()
}
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "closeWindow"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return function() {
            return Qo()
        }
    }
    ,
    t
}
)(pe);
function ky(e) {
    var t = We("subWindowGetOrigin");
    return at(t(e))
}
var gr = {};
function ai(e, t) {
    e && gr[e] && gr[e].forEach(function(n) {
        n(t)
    })
}
var _y, Ty, Py, Oy, Hc, $y = function() {
    function e(t) {
        this.storage = t
    }
    return e.prototype.getItem = function(t) {
        return this.storage.getItem("".concat(this.getKeyPrefix(), ":").concat(t))
    }
    ,
    e.prototype.setItem = function(t, n) {
        this.storage.setItem("".concat(this.getKeyPrefix(), ":").concat(t), n)
    }
    ,
    e.prototype.removeItem = function(t) {
        this.storage.removeItem("".concat(this.getKeyPrefix(), ":").concat(t))
    }
    ,
    e.prototype.clear = function() {
        this.storage.clear()
    }
    ,
    e.prototype.getKeyPrefix = function() {
        return "".concat(Cn, ":").concat(this.getLiffId())
    }
    ,
    e.prototype.getLiffId = function() {
        var t = qe().liffId;
        if (!t)
            throw A(Fn, "liffId is necessary for liff.init()");
        return t
    }
    ,
    e
}(), Iy = new $y(XS);
function il() {
    var e = Iy.getItem("subWindowStatusUpdated");
    return e !== null && JSON.parse(e)
}
function lo(e) {
    Iy.setItem("subWindowStatusUpdated", String(e))
}
function Wc(e) {
    _y = e
}
function es() {
    return _y
}
function Vc() {
    return Py
}
function Rh() {
    return Oy
}
function Ly(e) {
    return e === void 0 && (e = Xi.MAIN),
    K(this, void 0, void 0, function() {
        return q(this, function(t) {
            switch (t.label) {
            case 0:
                return [4, (Hc = new HE(e)).setup()];
            case 1:
                return t.sent(),
                [2, Hc]
            }
        })
    })
}
function pi() {
    return Hc
}
var Ny = new $y(window.sessionStorage);
function KE(e) {
    Ny.setItem("mainWindowOrigin", e)
}
function Ry() {
    return Ny.getItem("mainWindowOrigin")
}
function Ah(e, t) {
    return t === void 0 && (t = {}),
    K(this, void 0, void 0, function() {
        var n, r, o, i, s, a, l, c;
        return q(this, function(d) {
            switch (d.label) {
            case 0:
                if ((n = pi()) != null && n.isReady())
                    return [3, 5];
                if (r = JSON.stringify(t),
                o = qe().liffId,
                i = Ry(),
                !window.opener || !i || !o)
                    throw A(Fc);
                s = !1,
                d.label = 1;
            case 1:
                return d.trys.push([1, 3, , 4]),
                [4, ky(o)];
            case 2:
                return a = d.sent(),
                s = a.subwindowCommonModule,
                [3, 4];
            case 3:
                throw l = d.sent(),
                we.debug(l),
                A(Fc);
            case 4:
                return c = s ? i : location.origin,
                [2, new Promise(function(m) {
                    window.addEventListener("message", function g(x) {
                        (function(w) {
                            return !!(w.data && typeof w.data.type == "string" && [Se.SUBMIT, Se.CANCEL].includes(w.data.type))
                        }
                        )(x) && (window.removeEventListener("message", g),
                        m({
                            status: e,
                            result: r
                        }))
                    }),
                    window.opener.postMessage({
                        status: e,
                        result: r
                    }, c)
                }
                )];
            case 5:
                return n.send({
                    eventName: e,
                    data: t
                }),
                [4, new Promise(function(m) {
                    setTimeout(m, 500)
                }
                )];
            case 6:
                return d.sent(),
                [2, {
                    status: e,
                    result: JSON.stringify(t)
                }]
            }
        })
    })
}
function hd(e) {
    var t, n = Rh();
    if (e.origin === n) {
        var r = e.data;
        if (r) {
            var o, i = r.status, s = r.result;
            try {
                o = JSON.parse(s || "{}")
            } catch {
                o = {}
            }
            switch (i) {
            case rl:
                window.clearInterval(Vc()),
                md();
                break;
            case Se.CANCEL:
            case Se.SUBMIT:
                lo(!0),
                window.clearInterval(Vc()),
                window.removeEventListener("message", hd),
                ai(i, o),
                (t = es()) === null || t === void 0 || t.postMessage({
                    type: i
                }, Rh());
                break;
            default:
                we.debug("unexpected message")
            }
        }
    }
}
var qE = function(e) {
    return K(void 0, void 0, void 0, function() {
        var t, n, r, o;
        return q(this, function(i) {
            if (il())
                return [2];
            switch (t = e.context,
            n = t.eventName,
            r = t.data,
            o = pi(),
            n) {
            case Se.INIT:
                jy(!r.hasOpener);
                break;
            case Se.CANCEL:
            case Se.SUBMIT:
                lo(!0),
                ai(n, r),
                o == null || o.reply(e, {
                    eventName: n
                });
                break;
            case Se.CLOSE:
                il() === !1 && (lo(!0),
                ai(Se.CLOSE, {})),
                md()
            }
            return [2]
        })
    })
};
function Ay() {
    window.clearInterval(Ty),
    window.clearInterval(Vc()),
    window.removeEventListener("message", hd)
}
function jy(e) {
    if (e === void 0 && (e = !1),
    Ay(),
    lo(!1),
    e) {
        var t = es();
        t && (t.close(),
        Wc(null))
    }
}
function md() {
    return K(this, void 0, void 0, function() {
        var e;
        return q(this, function(t) {
            switch (t.label) {
            case 0:
                return (e = pi()) ? [4, e.teardown()] : [3, 2];
            case 1:
                t.sent(),
                t.label = 2;
            case 2:
                return [2]
            }
        })
    })
}
function YE(e) {
    return K(this, void 0, void 0, function() {
        var t, n, r, o, i, s, a, l, c, d;
        return q(this, function(m) {
            switch (m.label) {
            case 0:
                return (t = iy(e.url)) ? (jy(!0),
                [4, md()]) : [2, Promise.reject(A(nt, "params.url must be liff url"))];
            case 1:
                return m.sent(),
                n = e.url,
                r = e.appData,
                (o = new URL(n)).searchParams.append(ty, "true"),
                [4, Ly()];
            case 2:
                return i = m.sent(),
                o.searchParams.append(Sy, i.identification.identifier),
                o.searchParams.append(zc, i.identification.cryptoKey),
                o.hostname = function(x) {
                    var w = je(x.split("."))
                      , y = w[0]
                      , E = w.slice(1);
                    return Ln(["".concat(y, "-ext")], je(E), !1).join(".")
                }(o.hostname),
                s = o.toString(),
                Wc(fn() !== "ios" || ad() ? window.open("", "liffsubwindow", "width=480, height=640, menubar=no, toolbar=no, scrollbars=yes") : window.open()),
                [4, ky(t)];
            case 3:
                if (a = m.sent(),
                l = a.origin,
                c = a.subwindowCommonModule,
                !(d = es()))
                    throw A(Mc);
                return c ? (function(x) {
                    Oy = x
                }(l),
                i.listen(qE),
                i.setData("appData", r),
                window.addEventListener("message", hd),
                d.location.href = s,
                g = function(x, w) {
                    var y = es()
                      , E = {
                        type: rl
                    };
                    return w && (E.message = JSON.stringify(w)),
                    window.setInterval(function() {
                        y == null || y.postMessage(E, x)
                    }, ey)
                }(l, r),
                Py = g,
                function(x) {
                    Ty = x
                }(window.setInterval(function() {
                    var x = es();
                    x && x.closed && (Ay(),
                    Wc(null),
                    il() === !1 && (lo(!0),
                    ai(Se.CLOSE, {})))
                }, YS)),
                [2]) : (d.close(),
                [2])
            }
            var g
        })
    })
}
var Ii = null;
function Dy(e) {
    return K(this, void 0, void 0, function() {
        var t, n, r, o, i, s, a, l, c, d, m, g, x, w, y = this;
        return q(this, function(E) {
            switch (E.label) {
            case 0:
                if (t = e.msit,
                n = e.mstChallenge,
                r = e.reconnectCount,
                o = r === void 0 ? 0 : r,
                i = function() {
                    return K(y, void 0, void 0, function() {
                        return q(this, function(h) {
                            switch (h.label) {
                            case 0:
                                return [4, (v = 1e3,
                                new Promise(function(b) {
                                    return setTimeout(b, v)
                                }
                                ))];
                            case 1:
                                return h.sent(),
                                [4, Dy({
                                    msit: t,
                                    mstChallenge: n,
                                    onSuccess: e.onSuccess,
                                    onError: e.onError,
                                    reconnectCount: o + 1
                                })];
                            case 2:
                                return h.sent(),
                                [2]
                            }
                            var v
                        })
                    })
                }
                ,
                s = function() {
                    for (var h = [], v = 0; v < arguments.length; v++)
                        h[v] = arguments[v];
                    Ii = null,
                    e.onSuccess.apply(e, Ln([], je(h), !1))
                }
                ,
                a = function() {
                    for (var h = [], v = 0; v < arguments.length; v++)
                        h[v] = arguments[v];
                    Ii = null,
                    e.onError.apply(e, Ln([], je(h), !1))
                }
                ,
                l = Date.now(),
                Ii === null && (Ii = l),
                c = l - Ii,
                o >= 10 || c > 6e5)
                    return a(A(It, "Failed to connect")),
                    [2];
                E.label = 1;
            case 1:
                return E.trys.push([1, 3, , 5]),
                [4, jE(We("subWindowSubscribe"), {
                    method: "POST",
                    body: JSON.stringify({
                        msit: t,
                        mstChallenge: n
                    })
                })];
            case 2:
                return d = E.sent(),
                [3, 5];
            case 3:
                return E.sent(),
                [4, i()];
            case 4:
                return E.sent(),
                [2];
            case 5:
                return d.status >= 500 ? [4, i()] : [3, 7];
            case 6:
                return E.sent(),
                [3, 17];
            case 7:
                return d.status >= 400 && 500 > d.status ? [4, jh(d)] : [3, 9];
            case 8:
                return g = E.sent(),
                m = g ? A(nt, g.errorDetail) : A(It, "Some error happened in the server"),
                a(m),
                [3, 17];
            case 9:
                return d.status !== 200 ? [3, 16] : [4, jh(d)];
            case 10:
                if (!(g = E.sent()))
                    return a(A(It, "Some error happened in the server")),
                    [2];
                switch (x = g.status,
                w = g.result,
                x) {
                case Se.ERROR:
                    return [3, 11];
                case Se.CLOSE:
                case Se.CANCEL:
                case Se.SUBMIT:
                    return [3, 13]
                }
                return [3, 14];
            case 11:
                return [4, i()];
            case 12:
                return E.sent(),
                [3, 15];
            case 13:
                return s(x, w),
                [3, 15];
            case 14:
                a(A(It, "Some error happened in the server")),
                E.label = 15;
            case 15:
                return [3, 17];
            case 16:
                a(A(It, "Some error happened in the server")),
                E.label = 17;
            case 17:
                return [2]
            }
        })
    })
}
function jh(e) {
    return K(this, void 0, void 0, function() {
        return q(this, function(t) {
            switch (t.label) {
            case 0:
                return t.trys.push([0, 2, , 3]),
                [4, e.json()];
            case 1:
                return [2, t.sent()];
            case 2:
                return t.sent(),
                [2, null];
            case 3:
                return [2]
            }
        })
    })
}
function GE(e) {
    var t = {};
    return Object.keys(e).forEach(function(n) {
        n === "closeButtonColor" ? e[n] === "white" ? t[n] = "#ffffff" : t[n] = "#000000" : t[n] = e[n]
    }),
    t
}
var QE = {
    height: "full",
    closeButtonPosition: "right",
    closeButtonColor: "black",
    closeButtonLabel: ""
};
function JE(e) {
    var t = e.appData
      , n = e.native
      , r = qe().liffId
      , o = fy()
      , i = iy(e.url);
    if (!r)
        return Promise.reject(A(Rt, "liffId is invalid"));
    if (!o)
        return Promise.reject(A(Rt, "mst_challenge is invalid"));
    if (!i)
        return Promise.reject(A(nt, "params.url must be liff url"));
    var s = Object.assign({}, QE, n);
    return function(a) {
        var l = a.mainLiffId
          , c = a.subLiffId
          , d = a.mstChallenge
          , m = a.appData
          , g = a.view;
        return l && d ? at(We("subWindowGetMSIT"), {
            method: "POST",
            body: JSON.stringify({
                mainLiffId: l,
                subLiffId: c,
                mstChallenge: d,
                appData: m,
                view: g
            })
        }) : Promise.reject(A(nt, "no proper argument"))
    }({
        mainLiffId: r,
        subLiffId: i,
        mstChallenge: o,
        appData: t,
        view: GE(s)
    }).then(function(a) {
        var l = a.msit;
        Dy({
            msit: l,
            mstChallenge: o,
            onSuccess: function(c, d) {
                ai(c, d)
            },
            onError: function(c) {
                ai(Se.ERROR, c)
            }
        }),
        function(c, d) {
            var m = c.url
              , g = new URLSearchParams;
            g.set("msit", d),
            location.href = "".concat(qS, "?url=").concat(encodeURIComponent(m), "&").concat(g.toString())
        }(e, l)
    })
}
function Iu(e) {
    if (!e.mst || !e.status)
        return Promise.reject(A(nt, "no proper argument"));
    var t = JSON.stringify(e);
    return at(We("subWindowPost"), {
        method: "POST",
        body: t
    })
}
function ua() {
    if (!ao())
        throw A(Rt, "this api can be only called in child window")
}
function XE(e) {
    var t = e.msit
      , n = e.mstVerifier;
    return t && n ? at(We("subWindowGetMSTByMSIT"), {
        method: "POST",
        body: JSON.stringify({
            msit: t,
            mstVerifier: n
        })
    }) : Promise.reject(A(nt, "no proper argument"))
}
function ZE(e) {
    var t = e.mst;
    return t ? at(We("subWindowGetAppData"), {
        method: "POST",
        body: JSON.stringify({
            mst: t
        })
    }) : Promise.reject(A(nt, "no proper argument"))
}
var Ht = {
    on: function(e, t) {
        gr[e] || (gr[e] = []),
        gr[e].push(t)
    },
    off: function(e, t) {
        if (gr[e]) {
            var n = gr[e].indexOf(t);
            n >= 0 && gr[e].splice(n, 1)
        }
    },
    open: function(e) {
        return Ll.subwindowOpen(),
        Ee() ? JE(e) : YE(e)
    },
    cancel: function(e) {
        return e === void 0 && (e = {}),
        ua(),
        Ee() ? function(t) {
            return t === void 0 && (t = {}),
            K(this, void 0, void 0, function() {
                var n, r;
                return q(this, function(o) {
                    switch (o.label) {
                    case 0:
                        return (n = ka()) ? [4, Iu({
                            mst: n,
                            status: Se.CANCEL,
                            result: t
                        })] : [2, Promise.reject(A(Rt, "mst is invalid"))];
                    case 1:
                        return r = o.sent(),
                        lo(!0),
                        [2, r]
                    }
                })
            })
        }(e) : function(t) {
            return t === void 0 && (t = {}),
            Ah(Se.CANCEL, t)
        }(e)
    },
    submit: function(e) {
        return e === void 0 && (e = {}),
        ua(),
        Ee() ? function(t) {
            return t === void 0 && (t = {}),
            K(this, void 0, void 0, function() {
                var n, r;
                return q(this, function(o) {
                    switch (o.label) {
                    case 0:
                        return (n = ka()) ? [4, Iu({
                            mst: n,
                            status: Se.SUBMIT,
                            result: t
                        })] : [2, Promise.reject(A(Rt, "mst is invalid"))];
                    case 1:
                        return r = o.sent(),
                        lo(!0),
                        [2, r]
                    }
                })
            })
        }(e) : function(t) {
            return t === void 0 && (t = {}),
            Ah(Se.SUBMIT, t)
        }(e)
    },
    close: function() {
        return ua(),
        Ee() ? function() {
            return K(this, void 0, void 0, function() {
                var e;
                return q(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return il() !== !1 ? [3, 2] : (e = ka()) ? [4, Iu({
                            mst: e,
                            status: Se.CLOSE,
                            result: {}
                        })] : [2, Promise.reject(A(Rt, "mst is invalid"))];
                    case 1:
                        t.sent(),
                        t.label = 2;
                    case 2:
                        return Qo(),
                        [2]
                    }
                })
            })
        }() : function() {
            return K(this, void 0, void 0, function() {
                var e;
                return q(this, function(t) {
                    return (e = pi()) != null && e.isReady() ? (e.send({
                        eventName: Se.CLOSE
                    }),
                    [2, new Promise(function(n) {
                        setTimeout(function() {
                            Qo(),
                            n()
                        }, ey)
                    }
                    )]) : (Qo(),
                    [2, Promise.resolve()])
                })
            })
        }()
    },
    getAppData: function() {
        return ua(),
        function() {
            var e, t = uE();
            try {
                e = t ? JSON.parse(t) : {}
            } catch {
                e = {}
            }
            return Promise.resolve(e)
        }()
    }
};
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "subWindow"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return Ht
    }
    ,
    t
}
)(pe);
var My = {
    exports: {}
};
(function(e) {
    (function(t, n) {
        e.exports ? e.exports = n() : t.sha256 = n()
    }
    )(zt, function() {
        var t = function n(r) {
            function o(he, Ne) {
                return he >>> Ne | he << 32 - Ne
            }
            for (var i = Math.pow, s = i(2, 32), a = "length", l, c, d = "", m = [], g = r[a] * 8, x = n.h = n.h || [], w = n.k = n.k || [], y = w[a], E = {}, h = 2; y < 64; h++)
                if (!E[h]) {
                    for (l = 0; l < 313; l += h)
                        E[l] = h;
                    x[y] = i(h, .5) * s | 0,
                    w[y++] = i(h, .3333333333333333) * s | 0
                }
            for (r += ""; r[a] % 64 - 56; )
                r += "\0";
            for (l = 0; l < r[a]; l++) {
                if (c = r.charCodeAt(l),
                c >> 8)
                    return;
                m[l >> 2] |= c << (3 - l) % 4 * 8
            }
            for (m[m[a]] = g / s | 0,
            m[m[a]] = g,
            c = 0; c < m[a]; ) {
                var v = m.slice(c, c += 16)
                  , b = x;
                for (x = x.slice(0, 8),
                l = 0; l < 64; l++) {
                    var C = v[l - 15]
                      , O = v[l - 2]
                      , T = x[0]
                      , R = x[4]
                      , D = x[7] + (o(R, 6) ^ o(R, 11) ^ o(R, 25)) + (R & x[5] ^ ~R & x[6]) + w[l] + (v[l] = l < 16 ? v[l] : v[l - 16] + (o(C, 7) ^ o(C, 18) ^ C >>> 3) + v[l - 7] + (o(O, 17) ^ o(O, 19) ^ O >>> 10) | 0)
                      , H = (o(T, 2) ^ o(T, 13) ^ o(T, 22)) + (T & x[1] ^ T & x[2] ^ x[1] & x[2]);
                    x = [D + H | 0].concat(x),
                    x[4] = x[4] + D | 0
                }
                for (l = 0; l < 8; l++)
                    x[l] = x[l] + b[l] | 0
            }
            for (l = 0; l < 8; l++)
                for (c = 3; c + 1; c--) {
                    var z = x[l] >> c * 8 & 255;
                    d += (z < 16 ? 0 : "") + z.toString(16)
                }
            return d
        };
        return t.code = 'var sha256=function a(b){function c(a,b){return a>>>b|a<<32-b}for(var d,e,f=Math.pow,g=f(2,32),h="length",i="",j=[],k=8*b[h],l=a.h=a.h||[],m=a.k=a.k||[],n=m[h],o={},p=2;64>n;p++)if(!o[p]){for(d=0;313>d;d+=p)o[d]=p;l[n]=f(p,.5)*g|0,m[n++]=f(p,1/3)*g|0}for(b+="\\x80";b[h]%64-56;)b+="\\x00";for(d=0;d<b[h];d++){if(e=b.charCodeAt(d),e>>8)return;j[d>>2]|=e<<(3-d)%4*8}for(j[j[h]]=k/g|0,j[j[h]]=k,e=0;e<j[h];){var q=j.slice(e,e+=16),r=l;for(l=l.slice(0,8),d=0;64>d;d++){var s=q[d-15],t=q[d-2],u=l[0],v=l[4],w=l[7]+(c(v,6)^c(v,11)^c(v,25))+(v&l[5]^~v&l[6])+m[d]+(q[d]=16>d?q[d]:q[d-16]+(c(s,7)^c(s,18)^s>>>3)+q[d-7]+(c(t,17)^c(t,19)^t>>>10)|0),x=(c(u,2)^c(u,13)^c(u,22))+(u&l[1]^u&l[2]^l[1]&l[2]);l=[w+x|0].concat(l),l[4]=l[4]+w|0}for(d=0;8>d;d++)l[d]=l[d]+r[d]|0}for(d=0;8>d;d++)for(e=3;e+1;e--){var y=l[d]>>8*e&255;i+=(16>y?0:"")+y.toString(16)}return i};',
        t
    })
}
)(My);
var eC = My.exports;
const tC = Mn(eC);
var nC = function() {
    var e = this;
    this.type = "sync",
    this.fns = new Set,
    this.on = function(t) {
        e.fns.add(t)
    }
    ,
    this.call = function() {
        for (var t, n, r = [], o = 0; o < arguments.length; o++)
            r[o] = arguments[o];
        try {
            for (var i = Pl(e.fns), s = i.next(); !s.done; s = i.next()) {
                var a = s.value;
                a.apply(void 0, Ln([], je(r), !1))
            }
        } catch (l) {
            t = {
                error: l
            }
        } finally {
            try {
                s && !s.done && (n = i.return) && n.call(i)
            } finally {
                if (t)
                    throw t.error
            }
        }
    }
}
  , Li = function() {
    var e = this;
    this.type = "async",
    this.fns = new Set,
    this.on = function(t) {
        e.fns.add(t)
    }
    ,
    this.call = function() {
        for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
        return K(e, void 0, void 0, function() {
            var r, o, i, s, a, l;
            return q(this, function(c) {
                switch (c.label) {
                case 0:
                    r = [];
                    try {
                        for (o = Pl(this.fns),
                        i = o.next(); !i.done; i = o.next())
                            s = i.value,
                            r.push(s.apply(void 0, Ln([], je(t), !1)))
                    } catch (d) {
                        a = {
                            error: d
                        }
                    } finally {
                        try {
                            i && !i.done && (l = o.return) && l.call(o)
                        } finally {
                            if (a)
                                throw a.error
                        }
                    }
                    return [4, Promise.all(r)];
                case 1:
                    return c.sent(),
                    [2]
                }
            })
        })
    }
}
  , ts = function(e) {
    var t, n = si(43), r = JS(tC(n)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ""), o = qe();
    if (!o || !o.liffId)
        throw A(Fn, "You need to define `liffId` for liff.login()");
    var i = {
        app_id: o.liffId,
        state: si(12),
        response_type: "code",
        code_challenge_method: "S256",
        code_challenge: r,
        liff_sdk_version: Il()
    };
    e && e.redirectUri && (i.redirect_uri = e.redirectUri),
    ao() && !Ee() && (!((t = pi()) === null || t === void 0) && t.isReady() ? i.redirect_uri = window.location.href : i.disable_auto_login = "true"),
    yE({
        codeVerifier: n
    });
    var s = We("authorize") + "?" + Lt.stringify(i);
    we.debug("[Redirect] ".concat(s)),
    window.location.href = s
}
  , rC = function(e) {
    function t() {
        var n = e !== null && e.apply(this, arguments) || this;
        return n.hooks = {
            before: new nC
        },
        n
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "login"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return this._login.bind(this)
    }
    ,
    t.prototype._login = function(n) {
        this.hooks.before.call(n),
        ts(n)
    }
    ,
    t
}(pe)
  , Ta = navigator.language
  , Kc = null;
function oC(e) {
    return K(this, void 0, void 0, function() {
        return q(this, function(t) {
            switch (t.label) {
            case 0:
                return Ta = e,
                [4, Fy()];
            case 1:
                return t.sent(),
                [2]
            }
        })
    })
}
function Fy() {
    return K(this, void 0, void 0, function() {
        var e, t;
        return q(this, function(n) {
            switch (n.label) {
            case 0:
                return [4, at("".concat("https://liffsdk.line-scdn.net/xlt/manifest.json"), {
                    method: "GET",
                    headers: {
                        Accept: "application/json"
                    }
                })];
            case 1:
                return e = n.sent(),
                t = "".concat(Ta),
                !e.languages[t] && Ta.includes("-") && (t = Ta.split("-")[0]),
                e.languages[t] || (t = "en"),
                [4, at("".concat("https://liffsdk.line-scdn.net/xlt", "/").concat(e.languages[t]), {
                    method: "GET",
                    headers: {
                        Accept: "application/json"
                    }
                })];
            case 2:
                return Kc = n.sent(),
                [2]
            }
        })
    })
}
function Lu(e) {
    if (Kc === null)
        throw A(rt, "please call xlt after liff.init");
    return Kc[e]
}
var iC = function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "i18n"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function(n) {
        return n.internalHooks.init.beforeFinished(this.beforeInitFinished.bind(this)),
        {
            setLang: oC
        }
    }
    ,
    t.prototype.beforeInitFinished = function() {
        return K(this, void 0, void 0, function() {
            return q(this, function(n) {
                switch (n.label) {
                case 0:
                    return [4, Fy()];
                case 1:
                    return n.sent(),
                    [2]
                }
            })
        })
    }
    ,
    t
}(pe)
  , sC = new iC
  , Dh = {
    iconColor: "#111111",
    statusBarColor: "BLACK",
    titleTextColor: "#111111",
    titleSubtextColor: "#B7B7B7",
    titleButtonColor: "#111111",
    titleBackgroundColor: "#FFFFFF",
    progressBarColor: "#06C755",
    progressBackgroundColor: "#FFFFFF",
    titleButtonAreaBackgroundColor: "#1FFFFFFF",
    titleButtonAreaBorderColor: "#26000000",
    baseBackgroundColor: "#FFFFFF",
    baseTextColor: "#000000",
    lightButtonBorderColor: "rgba(0, 0, 0, 0.15)"
}
  , Mh = {
    iconColor: "#FFFFFF",
    statusBarColor: "WHITE",
    titleTextColor: "#FFFFFF",
    titleSubtextColor: "#949494",
    titleButtonColor: "#FFFFFF",
    titleBackgroundColor: "#111111",
    progressBarColor: "#06C755",
    progressBackgroundColor: "#111111",
    titleButtonAreaBackgroundColor: "#1FFFFFFF",
    titleButtonAreaBorderColor: "#26000000",
    baseBackgroundColor: "#000000",
    baseTextColor: "#FFFFFF",
    lightButtonBorderColor: "rgba(255, 255, 255, 0.5)"
};
function aC() {
    var e;
    Et("color-scheme", (((e = Tt()) == null ? void 0 : e.menuColorSetting) || {
        adaptableColorSchemes: ["light"]
    }).adaptableColorSchemes.join(" "));
    var t = window.matchMedia("(prefers-color-scheme: dark)");
    Nu({
        matches: t == null ? void 0 : t.matches,
        media: t == null ? void 0 : t.media
    }),
    t.addEventListener ? t.addEventListener("change", Nu) : t.addListener && t.addListener(Nu)
}
function Nu(e) {
    var t = Tt()
      , n = (t == null ? void 0 : t.menuColorSetting) || {
        adaptableColorSchemes: ["light"],
        lightModeColor: Dh,
        darkModeColor: Mh
    }
      , r = n.adaptableColorSchemes
      , o = n.lightModeColor
      , i = n.darkModeColor
      , s = r.includes("dark");
    e.matches && s ? Fh(De(De({}, Mh), i)) : Fh(De(De({}, Dh), o))
}
function Fh(e) {
    var t = e.iconColor
      , n = e.statusBarColor
      , r = e.titleTextColor
      , o = e.titleSubtextColor
      , i = e.titleButtonColor
      , s = e.titleBackgroundColor
      , a = e.progressBarColor
      , l = e.progressBackgroundColor
      , c = e.titleButtonAreaBackgroundColor
      , d = e.titleButtonAreaBorderColor
      , m = e.baseBackgroundColor
      , g = e.baseTextColor
      , x = e.lightButtonBorderColor;
    Et("--liff-base-background-color", m),
    Et("--liff-base-text-color", g),
    Et("--liff-base-background-rgb-color", _h(m)),
    Et("--liff-base-text-rgb-color", _h(g)),
    Et("--liff-light-button-border-color", x),
    Et("--liff-title-text-color", r),
    Et("--liff-title-background-color", s),
    Et("--liff-title-button-color", i),
    Et("--liff-icon-color", t),
    Et("--liff-status-bar-color", n),
    Et("--liff-title-subtext-color", o),
    Et("--liff-progress-bar-color", a),
    Et("--liff-progress-background-color", l),
    Et("--liff-title-button-area-background-color", kh(c)),
    Et("--liff-title-button-area-border-color", kh(d))
}
function Et(e, t) {
    document.documentElement.style.setProperty(e, t)
}
var lC = {
    addToHomeScreen: function(e) {
        if (!new Ou(e).invoke("addToHomeScreen"))
            throw A(et, "No permission for liff.addToHomeScreen()")
    },
    scanCode: function(e) {
        if (!new Ou(e).invoke("scanCode"))
            return Promise.reject(A(et, "No permission for liff.scanCode()"))
    },
    getAdvertisingId: function(e) {
        if (!new Ou(e).invoke("getAdvertisingId"))
            return Promise.reject(A(et, "No permission for liff.getAdvertisingId()"))
    },
    initPlugins: function() {}
};
function uC(e) {
    return K(this, void 0, void 0, function() {
        var t;
        return q(this, function(n) {
            switch (n.label) {
            case 0:
                return [4, RE()];
            case 1:
                return (t = n.sent()) ? (t.install(e, lC),
                [2]) : [2]
            }
        })
    })
}
function cC() {
    return K(this, void 0, void 0, function() {
        return q(this, function(e) {
            switch (e.label) {
            case 0:
                return [4, at(We("certs"))];
            case 1:
                return [2, e.sent()]
            }
        })
    })
}
function fC(e, t, n) {
    return K(this, void 0, void 0, function() {
        var r;
        return q(this, function(o) {
            switch (o.label) {
            case 0:
                return [4, crypto.subtle.importKey("jwk", e, {
                    name: "ECDSA",
                    namedCurve: "P-256"
                }, !1, ["verify"])];
            case 1:
                return r = o.sent(),
                [4, crypto.subtle.verify({
                    name: "ECDSA",
                    hash: {
                        name: "SHA-256"
                    }
                }, r, n, t)];
            case 2:
                return [2, o.sent()]
            }
        })
    })
}
function By(e, t) {
    return K(this, void 0, void 0, function() {
        var n, r, o, i, s, a, l, c, d, m, g, x, w, y, E, h;
        return q(this, function(v) {
            switch (v.label) {
            case 0:
                return n = e.split("."),
                r = je(n, 3),
                o = r[0],
                i = r[1],
                s = r[2],
                a = JSON.parse(Pu.decode(o)),
                l = JSON.parse(Pu.decodeUnicode(i)),
                c = Th(Pu.decode(s)),
                d = Th("".concat(o, ".").concat(i)),
                [4, cC()];
            case 1:
                if (m = v.sent(),
                !(g = m.keys.find(function(b) {
                    return b.kid === a.kid
                })))
                    return [3, 6];
                if (delete g.alg,
                a.alg !== "ES256")
                    throw A(Br, 'Invalid "alg" value in ID_TOKEN');
                x = void 0,
                v.label = 2;
            case 2:
                return v.trys.push([2, 4, , 5]),
                [4, fC(g, d, c)];
            case 3:
                return x = v.sent(),
                [3, 5];
            case 4:
                throw w = v.sent(),
                A(Br, "".concat("Failed to use Crypto API to verify ID_TOKEN", ": ").concat(w));
            case 5:
                if (x) {
                    if (y = l.iss !== "https://access.".concat("line.me"),
                    E = l.aud !== t,
                    h = 1e3 * l.exp < Date.now(),
                    y)
                        throw A(Br, 'Invalid "iss" value in ID_TOKEN');
                    if (E)
                        throw A(Br, 'Invalid "aud" value in ID_TOKEN');
                    if (h)
                        throw A(Br, 'Invalid "exp" value in ID_TOKEN');
                    return [2, l]
                }
                throw A(Br, "Invalid signature in ID_TOKEN");
            case 6:
                throw A(Br, 'Invalid "kid" value in ID_TOKEN');
            case 7:
                return [2]
            }
        })
    })
}
function gd(e) {
    var t = e.split(".");
    if (t[1])
        try {
            var n = t[1].replace(/-/g, "+").replace(/_/g, "/");
            return JSON.parse(window.atob(n))
        } catch {
            return null
        }
    return null
}
function Uy(e) {
    var t = e.pathname
      , n = e.query
      , r = n ? "?".concat(Lt.stringify(n)) : ""
      , o = "".concat("liff://").concat(t).concat(r);
    location.href = o
}
var qc = null;
function dC() {
    typeof qc == "boolean" && we.warn("liff.init is not expected to be called more than once"),
    qc = !!aE() || !(!Ee() || Lt.parse(window.location.hash).feature_token || $s()) && (lE(!0),
    !0)
}
function Yc() {
    return !!qc
}
function pC(e, t) {
    return K(this, void 0, void 0, function() {
        var n;
        return q(this, function(r) {
            switch (r.label) {
            case 0:
                return (n = ka()) ? [2, n] : e && t ? [4, XE({
                    msit: e,
                    mstVerifier: t
                })] : [3, 2];
            case 1:
                return [2, r.sent().mst];
            case 2:
                return [2, null]
            }
        })
    })
}
function hC(e) {
    return at("".concat(We("apps"), "/").concat(e, "/featureToken"))
}
function mC(e) {
    return K(this, void 0, void 0, function() {
        var t, n, r, o;
        return q(this, function(i) {
            switch (i.label) {
            case 0:
                return t = Lt.parse(window.location.hash),
                n = oE({
                    access_token: or(),
                    context_token: vE(),
                    feature_token: $s(),
                    id_token: Ol(),
                    client_id: gE(),
                    mst_challenge: fy(),
                    mst_verifier: cE(),
                    msit: dE()
                }, t),
                Yc() ? Gt() ? [4, hC(e)] : [3, 2] : [3, 3];
            case 1:
                r = i.sent().featureToken,
                n.feature_token || (n.feature_token = r),
                i.label = 2;
            case 2:
                (o = sd(e)) && (n.client_id = o),
                i.label = 3;
            case 3:
                return [2, n]
            }
        })
    })
}
function gC(e) {
    if (e.persisted && Is("multipleLiffTransition"))
        if (fn() === "ios")
            window.location.reload();
        else {
            var t = qe().liffId
              , n = $s();
            if (!t)
                throw A(rt, "Invalid LIFF ID.");
            if (!n)
                throw A(et, "Invalid featureToken for client features");
            Uy({
                pathname: "app/".concat(t),
                query: {
                    feature_token: n
                }
            })
        }
}
function vC(e, t) {
    return K(this, void 0, void 0, function() {
        var n, r;
        return q(this, function(o) {
            switch (o.label) {
            case 0:
                return [4, xy(e)];
            case 1:
                return n = o.sent().client_id,
                r = sd(t),
                [2, n === r]
            }
        })
    })
}
function yC(e) {
    var t, n;
    return K(this, void 0, void 0, function() {
        var r, o, i, s, a, l, c, d, m, g, x, w, y;
        return q(this, function(E) {
            switch (E.label) {
            case 0:
                return [4, new Promise(function(h) {
                    var v = ir();
                    if (!v || jn(v, "9.5.0") < 0)
                        h();
                    else if (window._liff && window._liff.features)
                        h();
                    else {
                        we.debug("cannot find window._liff.features, listen to ready event");
                        var b = function() {
                            we.debug("ready event is fired"),
                            dd("ready", b),
                            h()
                        };
                        fd("ready", b)
                    }
                }
                )];
            case 1:
                return E.sent(),
                dC(),
                [4, mC(e.liffId)];
            case 2:
                if (r = E.sent(),
                o = r.access_token,
                i = r.context_token,
                s = r.feature_token,
                a = r.id_token,
                l = r.client_id,
                c = r.mst_verifier,
                d = r.mst_challenge,
                m = r.msit,
                i) {
                    if (typeof i != "string")
                        throw A(rt, "Cannot get context token, perhaps there is an incorrect parameter in permanent link");
                    ld(gd(i))
                }
                if (((t = Tt()) === null || t === void 0 ? void 0 : t.liffId) !== void 0 && ((n = Tt()) === null || n === void 0 ? void 0 : n.liffId) !== e.liffId)
                    throw A(rt, "Invalid LIFF ID");
                return !ao() && s && (function(h, v) {
                    Is("multipleLiffTransition") && Uy({
                        pathname: "app/".concat(h),
                        query: {
                            feature_token: v
                        }
                    })
                }(e.liffId, s),
                Yc() && $h(s)),
                d && mE(d),
                c && fE(c),
                l && dy(l),
                m && pE(m),
                window.addEventListener("pageshow", gC),
                Gt() ? [3, 7] : s && o ? [3, 5] : Yc() ? (g = oy(location.href, {
                    "liff.hback": "2"
                }),
                ts({
                    redirectUri: g
                }),
                [4, new Promise(function() {}
                )]) : [3, 4];
            case 3:
                E.sent(),
                E.label = 4;
            case 4:
                throw ts(),
                A(rt, "Failed to parse feature_token or access_token");
            case 5:
                return [4, vC(o, e.liffId)];
            case 6:
                if (!E.sent())
                    throw ts(),
                    A(rt, "Failed to verify access_token");
                $h(s),
                ud(o),
                E.label = 7;
            case 7:
                return [4, pC(m, c)];
            case 8:
                return (x = E.sent()) ? (hE(x),
                [4, ZE({
                    mst: x
                })]) : [3, 10];
            case 9:
                (w = E.sent().data) && Bc(JSON.stringify(w)),
                E.label = 10;
            case 10:
                return a && !Ol() && py(a),
                a && l && !$l() ? [4, By(a, l)] : [3, 12];
            case 11:
                (y = E.sent()) && gy(y),
                E.label = 12;
            case 12:
                return [2]
            }
        })
    })
}
function wC(e) {
    return K(this, void 0, void 0, function() {
        var t, n, r, o, i, s, a;
        return q(this, function(l) {
            switch (l.label) {
            case 0:
                return t = We("apps"),
                n = "".concat(t, "/").concat(e, "/contextToken"),
                r = or(),
                o = {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                r && (o.Authorization = "Bearer ".concat(r)),
                [4, at(n, {
                    headers: o
                })];
            case 1:
                if (i = l.sent(),
                !(s = i.contextToken))
                    throw A(rt, "Can not get context from server.");
                if (!(a = gd(s)))
                    throw A(rt, "Invalid context token.");
                return [2, a]
            }
        })
    })
}
function zy() {
    return K(this, void 0, void 0, function() {
        var e, t;
        return q(this, function(n) {
            switch (n.label) {
            case 0:
                if (!(e = qe().liffId))
                    throw A(rt, "Invalid LIFF ID.");
                return [4, wC(e)];
            case 1:
                return t = n.sent(),
                ld(t),
                [2]
            }
        })
    })
}
function bC(e) {
    return K(this, void 0, void 0, function() {
        var t, n, r, o = this;
        return q(this, function(i) {
            switch (i.label) {
            case 0:
                t = function() {
                    return K(o, void 0, void 0, function() {
                        var s, a, l, c, d, m;
                        return q(this, function(g) {
                            switch (g.label) {
                            case 0:
                                return [4, (x = qe(),
                                w = Lt.parse(window.location.search),
                                y = my(),
                                E = {
                                    grant_type: "authorization_code",
                                    client_id: w.liffClientId,
                                    appId: x.liffId,
                                    code: w.code,
                                    code_verifier: y.codeVerifier,
                                    redirect_uri: x.redirectUri || w.liffRedirectUri,
                                    id_token_key_type: "JWK"
                                },
                                h = Lt.stringify(E),
                                at(We("token"), {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                                    },
                                    body: h
                                }))];
                            case 1:
                                return s = g.sent(),
                                a = s.access_token,
                                l = s.id_token,
                                c = s.expires_in,
                                dy(e),
                                ud(a),
                                wE(new Date(Date.now() + 1e3 * c)),
                                Ih(),
                                l ? (py(l),
                                [4, By(l, e)]) : [3, 3];
                            case 2:
                                (d = g.sent()) && gy(d),
                                g.label = 3;
                            case 3:
                                return (m = Lt.parse(location.hash).context_token) ? (ld(gd(m)),
                                [3, 6]) : [3, 4];
                            case 4:
                                return [4, zy()];
                            case 5:
                                g.sent(),
                                g.label = 6;
                            case 6:
                                return [2]
                            }
                            var x, w, y, E, h
                        })
                    })
                }
                ,
                i.label = 1;
            case 1:
                return i.trys.push([1, 3, , 4]),
                [4, t()];
            case 2:
                return i.sent(),
                [3, 4];
            case 3:
                throw n = i.sent(),
                r = n,
                Ih(),
                r;
            case 4:
                return [2]
            }
        })
    })
}
function Hy() {
    return K(this, void 0, void 0, function() {
        var e, t, n, r, o, i, s = this;
        return q(this, function(a) {
            switch (a.label) {
            case 0:
                return (t = pi()) ? [3, 2] : [4, Ly(Xi.SUB)];
            case 1:
                t = a.sent(),
                a.label = 2;
            case 2:
                return (e = t).isReady() ? (n = si(8),
                [4, e.getData("appData")]) : [3, 8];
            case 3:
                return r = a.sent(),
                o = r.eventName,
                i = r.data,
                o !== _a.NOT_FOUND ? [3, 6] : [4, e.teardown()];
            case 4:
                return a.sent(),
                [4, Hy()];
            case 5:
                return [2, a.sent()];
            case 6:
                i && Bc(JSON.stringify(i)),
                a.label = 7;
            case 7:
                return e.listen(function(l) {
                    return K(s, void 0, void 0, function() {
                        var c, d;
                        return q(this, function(m) {
                            return c = l.context,
                            d = c.data,
                            c.eventName === Se.INIT && (d == null ? void 0 : d.subWindowId) !== n && Qo(),
                            c.eventName !== Se.CANCEL && c.eventName !== Se.SUBMIT || e.teardown(),
                            [2]
                        })
                    })
                }),
                Gt() && e.send({
                    eventName: Se.INIT,
                    data: {
                        subWindowId: n,
                        hasOpener: !!window.opener
                    }
                }),
                [3, 10];
            case 8:
                return Ry() ? [3, 10] : [4, new Promise(function(l) {
                    window.addEventListener("message", function(c) {
                        return function d(m) {
                            var g = m.data
                              , x = m.source
                              , w = m.origin;
                            if (g) {
                                var y = g.type
                                  , E = g.message;
                                y === rl && (window.removeEventListener("message", d),
                                E && Bc(E),
                                KE(w),
                                x && x.postMessage && x.postMessage({
                                    status: rl
                                }, w),
                                c())
                            }
                        }
                    }(l))
                }
                )];
            case 9:
                return [2, a.sent()];
            case 10:
                return [2]
            }
        })
    })
}
var xC = new (function() {
    function e() {
        var t = this;
        this.getAndValidateContext = function() {
            var n = Tt();
            if (!n)
                throw A(rt, "Could not get Context from server.");
            if (!n.endpointUrl)
                throw A(rt, "Could not get endpointUrl from server.");
            if (!n.permanentLinkPattern)
                throw A(rt, "Could not get permanentLinkPattern from server.");
            return n
        }
        ,
        this.decodeState = function(n) {
            var r = t.getAndValidateContext();
            n = n.replace(/\n/g, "%0D%0A");
            var o = !r.endpointUrl.startsWith("/?") && r.endpointUrl.includes("/?") || !r.endpointUrl.startsWith("/#") && r.endpointUrl.includes("/#") || r.endpointUrl.endsWith("/") || !n.startsWith("/?") && n.includes("/?") || !n.startsWith("/#") && n.includes("/#") || n.endsWith("/")
              , i = new URL(r.endpointUrl)
              , s = i.origin
              , a = i.pathname
              , l = i.search
              , c = new URL("".concat(s).concat(t.attachSlashAtStart(n)))
              , d = c.pathname
              , m = c.search
              , g = c.hash
              , x = "".concat(l).concat(l ? m.replace(/\?/g, "&") : m)
              , w = "".concat(a).concat(t.attachSlashAtStart(d)).replace("//", "/");
            return (w = t.attachSlashAtStart("".concat(w))).endsWith("/") && !o && (w = w.substring(0, w.length - 1)),
            "".concat(s).concat(w).concat(x).concat(g).replace(/%0D%0A/g, `
`)
        }
    }
    return e.prototype.attachSlashAtStart = function(t) {
        return "".concat(t && t.length > 0 && !t.startsWith("/") ? "/" : "").concat(t)
    }
    ,
    e.prototype.invoke = function() {
        return K(this, void 0, void 0, function() {
            var t, n, r, o, i;
            return q(this, function(s) {
                switch (s.label) {
                case 0:
                    if (t = Lt.parse(window.location.search),
                    typeof (n = t["liff.state"]) != "string")
                        return [2];
                    s.label = 1;
                case 1:
                    return s.trys.push([1, 4, , 5]),
                    r = location.href,
                    (o = this.decodeState(n)) === r ? [3, 3] : (t["liff.hback"] ? location.replace(oy(o, {
                        "liff.hback": t["liff.hback"]
                    })) : location.replace(o),
                    [4, new Promise(function() {}
                    )]);
                case 2:
                    s.sent(),
                    s.label = 3;
                case 3:
                    return [3, 5];
                case 4:
                    if ((i = s.sent()).code === rt)
                        throw i;
                    return we.debug(i),
                    [3, 5];
                case 5:
                    return [2]
                }
            })
        })
    }
    ,
    e
}());
function SC(e, t) {
    return K(this, void 0, void 0, function() {
        var n;
        return q(this, function(r) {
            switch (r.label) {
            case 0:
                if (!e.liffId)
                    throw A(Fn, "liffId is necessary for liff.init()");
                return iE(e),
                !Ee() && Gt() && (bE() || cd()),
                n = Lt.parse(window.location.search),
                !ao() || Ee() ? [3, 2] : [4, Hy()];
            case 1:
                r.sent(),
                r.label = 2;
            case 2:
                if (n.error && n.liffOAuth2Error)
                    throw s = n.error,
                    a = n.error_description,
                    l = a.replace(/\+/g, " "),
                    c = "".concat(s, ": ").concat(l),
                    A(rt, c);
                return o = n.code,
                i = my(),
                o && !Gt() && i && i.codeVerifier ? [4, bC(n.liffClientId)] : [3, 4];
            case 3:
                r.sent(),
                r.label = 4;
            case 4:
                return Ee() ? [4, yC(e)] : [3, 6];
            case 5:
                return r.sent(),
                [3, 8];
            case 6:
                return Gt() ? [3, 8] : [4, zy()];
            case 7:
                r.sent(),
                r.label = 8;
            case 8:
                return [4, xC.invoke()];
            case 9:
                return r.sent(),
                [4, t()];
            case 10:
                return r.sent(),
                tE(window.location.href),
                [2]
            }
            var o, i, s, a, l, c
        })
    })
}
var Wy = function(e, t) {
    return new Promise(function(n, r) {
        if (e) {
            var o = document.createElement("script");
            o.type = "module",
            o.onload = function() {
                n()
            }
            ,
            o.src = e,
            document.head.appendChild(o)
        } else
            r(A(Fn, t))
    }
    )
}
  , EC = function(e) {
    var t = "https://static.line-scdn.net/lui/edge/versions/1.13.0/lui-alert.js";
    return t && e && (t = t.replace(/\d{1,2}\.\d{1,2}\.\d{1,3}/, e)),
    Wy(t, "LUI_ALERT_URL is not defined")
}
  , Ru = function() {
    return K(void 0, void 0, void 0, function() {
        var e;
        return q(this, function(t) {
            switch (t.label) {
            case 0:
                return e = function() {
                    var r, o = document.querySelector('script[src*="luivendor.js"]');
                    if (o && (!((r = o.src.match(/\d{1,2}\.\d{1,2}\.\d{1,3}/g)) === null || r === void 0) && r.length))
                        return o.src.match(/\d{1,2}\.\d{1,2}\.\d{1,3}/g)[0]
                }(),
                e ? [3, 2] : [4, Wy("https://static.line-scdn.net/lui/edge/versions/1.13.0/luivendor.js", "LUI_VENDOR_URL is not defined")];
            case 1:
                t.sent(),
                t.label = 2;
            case 2:
                return [4, EC(e)];
            case 3:
                return t.sent(),
                [4, (n = si(6),
                new Promise(function() {
                    var r = document.createElement("div");
                    r.innerHTML = '<lui-alert id="'.concat("liffAlert", "-").concat(n, '" shown title="').concat(Lu("alert.android.extBrowser.autoLoginWorkaround.title"), '" message="').concat(Lu("alert.android.extBrowser.autoLoginWorkaround.desc"), '" button="').concat(Lu("alert.android.extBrowser.autoLoginWorkaround.button.text"), '"></lui-alert>'),
                    document.body.appendChild(r);
                    var o = document.getElementById("".concat("liffAlert", "-").concat(n));
                    o && o.addEventListener("lui-button-click", function() {
                        var i = window.open("".concat(window.location.href, "&liffIsEscapedFromApp=true"), "_blank");
                        i && (i.location.href = "".concat(window.location.href, "&liffIsEscapedFromApp=true"),
                        window.close())
                    })
                }
                ))];
            case 4:
                return t.sent(),
                [2]
            }
            var n
        })
    })
};
function CC() {
    return K(this, void 0, void 0, function() {
        var e;
        return q(this, function(t) {
            switch (t.label) {
            case 0:
                return Ee() || fn() !== "android" || (e = Lt.parse(window.location.search))[Sy] || e.liffIsEscapedFromApp ? [3, 6] : e.liffClientId && document.referrer.includes("access.".concat("line.me")) ? (window.location.href = "".concat(window.location.href, "&liffIsEscapedFromApp=true"),
                [2]) : e.liffClientId && document.referrer.includes("android-app://") ? [4, Ru()] : [3, 2];
            case 1:
                t.sent(),
                t.label = 2;
            case 2:
                return e.liffClientId && document.referrer === "" && window.history.length === 1 ? [4, Ru()] : [3, 4];
            case 3:
                t.sent(),
                t.label = 4;
            case 4:
                return !document.referrer.includes("liffClientId") || document.referrer.includes("liffIsEscapedFromApp") ? [3, 6] : [4, Ru()];
            case 5:
                t.sent(),
                t.label = 6;
            case 6:
                return [2]
            }
        })
    })
}
var kC = function(e) {
    function t() {
        var n = e !== null && e.apply(this, arguments) || this;
        return n.hooks = {
            before: new Li,
            after: new Li
        },
        n.internalHooks = {
            beforeFinished: new Li,
            beforeSuccess: new Li,
            error: new Li
        },
        n
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "init"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function(n) {
        var r = n.liff;
        return this.liffForWindow = r,
        this.init.bind(this)
    }
    ,
    t.prototype.init = function(n, r, o) {
        return K(this, void 0, void 0, function() {
            var i;
            return q(this, function(s) {
                switch (s.label) {
                case 0:
                    return [4, this.hooks.before.call()];
                case 1:
                    s.sent(),
                    a = this.liffForWindow,
                    window && !window.liff && (window.liff = a),
                    s.label = 2;
                case 2:
                    return s.trys.push([2, 9, , 11]),
                    [4, Promise.all([uC(this.liffForWindow), SC(n, this.internalHooks.beforeFinished.call)])];
                case 3:
                    return s.sent(),
                    aC(),
                    [4, this.internalHooks.beforeSuccess.call()];
                case 4:
                    return s.sent(),
                    !n.withLoginOnExternalBrowser || Gt() ? [3, 6] : (ts(),
                    [4, new Promise(function() {}
                    )]);
                case 5:
                    s.sent(),
                    s.label = 6;
                case 6:
                    return [4, CC()];
                case 7:
                    return s.sent(),
                    [4, this.hooks.after.call()];
                case 8:
                    return s.sent(),
                    typeof r == "function" && r(),
                    Qv(),
                    [3, 11];
                case 9:
                    return i = s.sent(),
                    [4, this.internalHooks.error.call(i)];
                case 10:
                    throw s.sent(),
                    typeof o == "function" && o(i),
                    i;
                case 11:
                    return [2]
                }
                var a
            })
        })
    }
    ,
    t
}(pe);
function Vy() {
    return navigator.language
}
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "getLanguage"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return function() {
            return Vy()
        }
    }
    ,
    t
}
)(pe);
function Ky(e) {
    return K(this, void 0, void 0, function() {
        var t, n, r, o, i, s, a;
        return q(this, function(l) {
            switch (l.label) {
            case 0:
                return function(c) {
                    if (!GS.includes(c))
                        throw A(nt, "Unexpected permission name.");
                    var d = Tt();
                    return !!(d != null && d.scope.includes(c))
                }(e) ? (t = or()) ? [4, xy(t)] : [3, 2] : [2, {
                    state: "unavailable"
                }];
            case 1:
                n = l.sent(),
                r = unescape(n.scope).split(" ");
                try {
                    for (o = Pl(r),
                    i = o.next(); !i.done; i = o.next())
                        if (i.value.includes(e))
                            return [2, {
                                state: "granted"
                            }]
                } catch (c) {
                    s = {
                        error: c
                    }
                } finally {
                    try {
                        i && !i.done && (a = o.return) && a.call(o)
                    } finally {
                        if (s)
                            throw s.error
                    }
                }
                return [2, {
                    state: "prompt"
                }];
            case 2:
                throw A(Rt, "LiffId is not found.")
            }
        })
    })
}
function qy() {
    var e, t, n = Tt();
    return !!n && n.type !== "square_chat" && (Is("skipChannelVerificationScreen") || !Ee() && ((t = (e = n.availability) === null || e === void 0 ? void 0 : e.skipChannelVerificationScreen) === null || t === void 0 ? void 0 : t.permission))
}
function _C() {
    var e = qe().liffId;
    if (e)
        return at("".concat(We("unauthorizedPermissions"), "?liffId=").concat(e), {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer ".concat(or())
            }
        });
    throw A(Rt, "liffId is required")
}
var Pa, ca = Ht.on, fa = Ht.off, TC = Ht.open, PC = function() {
    function e(t, n) {
        var r = this;
        this.onSubmit = function(o) {
            var i = o.newAccessToken
              , s = o.ICA_ERROR;
            return K(r, void 0, void 0, function() {
                return q(this, function(a) {
                    return i ? this.resolve({
                        newAccessToken: i
                    }) : s && this.reject(A(It, s)),
                    this.teardown(),
                    [2]
                })
            })
        }
        ,
        this.onClose = function() {
            return K(r, void 0, void 0, function() {
                return q(this, function(o) {
                    return this.reject(A(Rt, "user didn't allow the agreement")),
                    this.teardown(),
                    [2]
                })
            })
        }
        ,
        this.onCancel = function() {
            return K(r, void 0, void 0, function() {
                return q(this, function(o) {
                    return this.reject(A(Rt, "user didn't allow the agreement")),
                    this.teardown(),
                    [2]
                })
            })
        }
        ,
        this.onError = function(o) {
            return K(r, void 0, void 0, function() {
                return q(this, function(i) {
                    return this.reject(o),
                    this.teardown(),
                    [2]
                })
            })
        }
        ,
        this.resolve = t,
        this.reject = n,
        this.setup()
    }
    return e.prototype.setup = function() {
        ca("submit", this.onSubmit),
        ca("close", this.onClose),
        ca("cancel", this.onCancel),
        ca("error", this.onError)
    }
    ,
    e.prototype.teardown = function() {
        fa("submit", this.onSubmit),
        fa("close", this.onClose),
        fa("cancel", this.onCancel),
        fa("error", this.onError),
        Pa = void 0
    }
    ,
    e.prototype.open = function() {
        var t = qe().liffId;
        t ? TC({
            url: "".concat("https://liff.line.me/1656032314-Xgrw5Pmk"),
            appData: {
                liffId: t,
                channelId: sd(t),
                accessToken: or()
            }
        }) : this.reject(A(Rt, "liffId is required"))
    }
    ,
    e
}();
function Yy() {
    return K(this, void 0, void 0, function() {
        var e, t;
        return q(this, function(n) {
            switch (n.label) {
            case 0:
                if (!qy())
                    throw A(et, "SkipChannelVerificationScreen is unavailable.");
                return Pa && Pa.teardown(),
                [4, _C()];
            case 1:
                return e = n.sent(),
                (Ee() ? e : e.filter(function(r) {
                    return r !== "chat_message.write"
                })).length > 0 ? [4, new Promise(function(r, o) {
                    (Pa = new PC(r,o)).open()
                }
                )] : [3, 3];
            case 2:
                return t = n.sent().newAccessToken,
                ud(t),
                [3, 4];
            case 3:
                throw A(et, "All permissions have already been approved.");
            case 4:
                return [2]
            }
        })
    })
}
function Jo(e, t) {
    var n = this;
    return function() {
        for (var r = [], o = 0; o < arguments.length; o++)
            r[o] = arguments[o];
        return K(n, void 0, void 0, function() {
            var i, s, a;
            return q(this, function(l) {
                switch (l.label) {
                case 0:
                    return i = (r.length > 0 ? r[r.length - 1] : {}).ignorePermissionCheck,
                    s = i !== void 0 && i,
                    [4, Ky(t)];
                case 1:
                    if ((a = l.sent().state) !== "unavailable")
                        return [3, 2];
                    throw A(et, "The permission is not in LIFF app scope.");
                case 2:
                    return a !== "prompt" || !qy() || s || !Ee() && t === "chat_message.write" ? [3, 4] : [4, Yy()];
                case 3:
                    return l.sent(),
                    [3, 5];
                case 4:
                    s && r.pop(),
                    l.label = 5;
                case 5:
                    return [4, e.apply(void 0, Ln([], je(r), !1))];
                case 6:
                    return [2, l.sent()]
                }
            })
        })
    }
}
var OC = function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "permission"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return {
            query: Ky,
            requestAll: Yy
        }
    }
    ,
    t
}(pe)
  , $C = new OC;
function vd() {
    return at(We("profile"))
}
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "getProfile"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return Jo(vd, "profile")
    }
    ,
    t
}
)(pe);
var IC = function(e, t) {
    return e ? "&".concat(e.split("&").filter(function(n) {
        return n.indexOf("is_liff_external_open_window") === -1
    }).join("&").concat("".concat(t ? "#".concat(t) : ""))) : "".concat(t ? "#".concat(t) : "")
};
function Gy(e) {
    if (!function(i) {
        if (!i || typeof i != "object")
            return !1;
        var s = i
          , a = s.url
          , l = s.external
          , c = je([typeof a, typeof l], 2)
          , d = c[0]
          , m = c[1];
        return d === "string" && a !== "" && (m === "undefined" || m === "boolean")
    }(e))
        throw A(nt, "Invalid parameters for liff.openWindow()");
    var t = ir();
    if (Ee())
        if (t !== null && fn() === "ios" && jn(t, "9.19") >= 0 || !window._liff.postMessage) {
            var n = e.url
              , r = e.external
              , o = r !== void 0 && r;
            window.open(function(i, s) {
                var a, l, c, d, m, g, x, w, y;
                (function(h) {
                    return h.indexOf("#") !== -1 && h.indexOf("?") !== -1 && h.indexOf("#") < h.indexOf("?")
                }
                )(i) || function(h) {
                    return h.indexOf("?") === -1 && h.indexOf("#") !== -1
                }(i) ? (x = (a = je(i.split("#"), 2))[0],
                l = a[1],
                w = (c = je((l === void 0 ? "" : l).split("?"), 2))[0],
                y = c[1]) : (x = (d = je(i.split("?"), 2))[0],
                m = d[1],
                y = (g = je((m === void 0 ? "" : m).split("#"), 2))[0],
                w = g[1]);
                var E = IC(y, w);
                return "".concat(x, "?").concat("is_liff_external_open_window", "=").concat(!!s).concat(E)
            }(n, o))
        } else
            pd("openWindow", e);
    else
        window.open(e.url, "_blank")
}
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "openWindow"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return function(n) {
            return Gy(n)
        }
    }
    ,
    t
}
)(pe);
var LC = function(e) {
    return typeof e == "object" && e !== null && function(t) {
        return typeof t == "string" || t instanceof String
    }(e.type)
};
function Bh(e) {
    return Promise.reject(A(nt, e))
}
function Qy(e) {
    if (!function(n) {
        return Array.isArray(n) && n.every(LC)
    }(e))
        return Bh("Parameter 'messages' must be an array of { type, ... }");
    var t = e.length;
    return t < 1 || t > 5 ? Bh("Number of messages should be in range 1 to ".concat(5, ".")) : at(We("message"), {
        method: "POST",
        body: JSON.stringify({
            messages: e
        })
    }).catch(NC)
}
var NC = function(e) {
    if (e.code === "403") {
        var t = ir() === "12.0.0"
          , n = fn() === "ios"
          , r = ad();
        t && (n || r) && window.alert(`LINEアプリをLINE 12.0.1以降にアップデートしてください。
Please update your LINE app to LINE 12.0.1 or later.`)
    }
    throw e
};
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "sendMessages"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return Jo(Qy, "chat_message.write")
    }
    ,
    t
}
)(pe);
function Jy() {
    return at(We("friendship"))
}
(function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "getFriendship"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return Jo(Jy, "profile")
    }
    ,
    t
}
)(pe);
function RC() {
    return K(this, void 0, void 0, function() {
        var e, t;
        return q(this, function(n) {
            switch (n.label) {
            case 0:
                if (!Gt())
                    return [3, 6];
                n.label = 1;
            case 1:
                return n.trys.push([1, 5, , 6]),
                (e = $l()) && e.sub ? [2, e.sub] : [3, 2];
            case 2:
                return [4, vd()];
            case 3:
                if ((t = n.sent()) && t.userId)
                    return [2, t.userId];
                n.label = 4;
            case 4:
                return [3, 6];
            case 5:
                return n.sent(),
                we.debug("can't retrieve Mid/Uid because of something wrong"),
                [3, 6];
            case 6:
                return [2]
            }
        })
    })
}
function AC() {
    return K(this, void 0, void 0, function() {
        var e;
        return q(this, function(t) {
            switch (t.label) {
            case 0:
                return [4, RC()];
            case 1:
                return (e = t.sent()) && e.substring(0, 1) === "u" ? [2, e] : [2]
            }
        })
    })
}
var jC = function(e) {
    function t() {
        var n = e !== null && e.apply(this, arguments) || this;
        return n.utsExtra = {
            isLiffSuccessful: !1,
            isLoggedIn: !1,
            id: "",
            version: ""
        },
        n.injected = !1,
        n
    }
    return me(t, e),
    Object.defineProperty(t, "CUSTOMPLACEID_INIT", {
        get: function() {
            return "liff.init"
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t, "CUSTOMTYPE", {
        get: function() {
            return "liffSdk"
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t, "LiffUtsLoginStatus", {
        get: function() {
            return {
                isLoggedIn: 1,
                isLiffSuccessful: 2
            }
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "analytics"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function(n) {
        var r = n.liff
          , o = n.internalHooks;
        this.liffCore = r,
        o.init.beforeFinished(this.beforeInitFinished.bind(this)),
        o.init.beforeSuccess(this.beforeInitSuccess.bind(this)),
        o.init.error(this.initError.bind(this))
    }
    ,
    t.prototype.changeRatioToUTSFormat = function(n) {
        if (n && Number.isFinite(n))
            return Math.round(100 * n)
    }
    ,
    t.prototype.setExtra = function() {
        var n, r = this.utsExtra, o = r.isLiffSuccessful, i = r.isLoggedIn, s = r.id, a = r.version, l = (i ? t.LiffUtsLoginStatus.isLoggedIn : 0) | (o ? t.LiffUtsLoginStatus.isLiffSuccessful : 0);
        (n = this.uts) === null || n === void 0 || n.setExtra("liff", {
            id: s,
            loginStatus: l,
            version: a
        })
    }
    ,
    t.prototype.assignUtsExtra = function(n) {
        Object.assign(this.utsExtra, n)
    }
    ,
    t.prototype.setVersion = function(n) {
        this.assignUtsExtra({
            version: n
        }),
        we.debug("[LIFFUTS][SDK version] ".concat(n)),
        this.setExtra()
    }
    ,
    t.prototype.setLiffId = function(n) {
        this.assignUtsExtra({
            id: n
        }),
        we.debug("[LIFFUTS][LIFFID] ".concat(n)),
        this.setExtra()
    }
    ,
    t.prototype.setIsLoggedIn = function(n) {
        this.assignUtsExtra({
            isLoggedIn: n
        }),
        we.debug("[LIFFUTS][isLoggedIn] ".concat(n)),
        this.setExtra()
    }
    ,
    t.prototype.sendLiffInit = function() {
        var n;
        we.debug("[LIFFUTS][sendCustom] liff.init"),
        (n = this.uts) === null || n === void 0 || n.sendCustom({
            type: t.CUSTOMTYPE,
            params: {
                placeId: t.CUSTOMPLACEID_INIT
            }
        })
    }
    ,
    t.prototype.setIsLiffSuccessful = function(n) {
        this.assignUtsExtra({
            isLiffSuccessful: n
        }),
        we.debug("[LIFFUTS][isLiffInitSuccessful] ".concat(n)),
        this.setExtra()
    }
    ,
    t.prototype.prepareReferrer = function(n) {
        var r = {};
        Object.keys(n).forEach(function(o) {
            if (KS.includes(o)) {
                var i = n[o];
                typeof i == "string" && i && (r[o.replace(/^liff\.ref\./, "")] = i)
            }
        }),
        Object.keys(r).length > 0 && (this.referrer = r)
    }
    ,
    t.prototype.beforeInitFinished = function() {
        return K(this, void 0, void 0, function() {
            var n, r, o, i, s, a, l, c, d, m, g, x;
            return q(this, function(w) {
                switch (w.label) {
                case 0:
                    if (n = Lt.parse(window.location.search),
                    this.prepareReferrer(n),
                    r = Tt(),
                    !(o = r == null ? void 0 : r.utsTracking))
                        return [2];
                    if (i = qe(),
                    s = i.liffId,
                    a = i.analytics,
                    o.mode !== "auto" || !a)
                        return [3, 6];
                    we.debug("[LIFFUTS] ".concat(new Date().toUTCString())),
                    w.label = 1;
                case 1:
                    return w.trys.push([1, 3, , 4]),
                    l = this,
                    [4, new Promise(function(y, E) {
                        var h = window.uts
                          , v = document.createElement("script");
                        v.type = "text/javascript",
                        v.src = "https://static.line-scdn.net/uts/edge/4.1.0/uts.js",
                        v.onload = function() {
                            var b = window.uts;
                            y(b),
                            window.uts = h
                        }
                        ,
                        v.onerror = function(b) {
                            E(b)
                        }
                        ,
                        document.getElementsByTagName("head")[0].appendChild(v)
                    }
                    )];
                case 2:
                    return l.uts = w.sent(),
                    [3, 4];
                case 3:
                    return c = w.sent(),
                    we.debug("[LIFFUTS] cannot load UTS, reason: ".concat(c)),
                    [2];
                case 4:
                    return d = De(De({}, a.context), {
                        utsId: a.context.utsId,
                        appName: a.context.appName,
                        appEnv: a.context.appEnv || "release"
                    }),
                    m = De(De({
                        endpoint: "https://uts-front.line-apps.com"
                    }, a.options), {
                        sampleRate: this.changeRatioToUTSFormat(o.sendRatio),
                        version: "current"
                    }),
                    this.uts.init(d, m),
                    [4, AC()];
                case 5:
                    (g = w.sent()) && (we.debug("[LIFFUTS][mid] ".concat(g)),
                    this.uts.setMid(g)),
                    r != null && r.tid && (we.debug("[LIFFUTS][tid] ".concat(r.tid)),
                    this.uts.setTid(r.tid)),
                    this.referrer && (we.debug("liff.ref.referrer", this.referrer),
                    this.uts.setSessionParams(this.referrer)),
                    s && this.setLiffId(s),
                    this.setIsLoggedIn(Gt()),
                    this.setVersion(Il()),
                    x = ry(location.href),
                    we.debug("[LIFFUTS][url] ".concat(x)),
                    this.uts.setUrl(x),
                    this.liffCore.analytics = this.uts,
                    this.injected = !0,
                    w.label = 6;
                case 6:
                    return [2]
                }
            })
        })
    }
    ,
    t.prototype.beforeInitSuccess = function() {
        return this.injected && (this.setIsLiffSuccessful(!0),
        this.sendLiffInit()),
        Promise.resolve()
    }
    ,
    t.prototype.initError = function() {
        return this.injected && (this.setIsLiffSuccessful(!1),
        this.sendLiffInit()),
        Promise.resolve()
    }
    ,
    t
}(pe)
  , DC = function(e) {
    we.debug("[LIFFUTS][sendCustom] liff.shareTargetPicker"),
    e.sendCustom({
        type: "liffSdk",
        params: {
            placeId: "liff.shareTargetPicker"
        }
    })
};
function MC(e) {
    return K(this, void 0, void 0, function() {
        var t, n;
        return q(this, function(r) {
            switch (r.label) {
            case 0:
                return [4, fetch(We("permanentLink"), {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(e)
                })];
            case 1:
                return (t = r.sent()).ok ? [3, 3] : [4, t.json()];
            case 2:
                throw n = r.sent().message,
                A(It, n);
            case 3:
                return [4, t.json()];
            case 4:
                return [2, r.sent()]
            }
        })
    })
}
var FC = function(e) {
    function t() {
        var n = e !== null && e.apply(this, arguments) || this;
        return n.extraParams = "",
        n.getAndValidateContext = function() {
            var r = Tt();
            if (!r)
                throw A(rt, "Could not get Context from server.");
            if (!r.endpointUrl)
                throw A(rt, "Could not get endpointUrl from server.");
            if (!r.permanentLinkPattern)
                throw A(rt, "Could not get permanentLinkPattern from server.");
            return r
        }
        ,
        n.createUrl = function() {
            var r = n.getAndValidateContext()
              , o = window.location
              , i = o.pathname
              , s = o.search
              , a = o.hash
              , l = o.origin
              , c = new URL(r.endpointUrl);
            if (c.origin !== l || !n.isAncestor(c.pathname, i))
                throw A(Fn, "Current page is not under entrypoint.");
            var d = i.substring(c.pathname.length);
            d.length > 0 && d[0] !== "/" && (d = "/" + d);
            var m = new RegExp("^".concat(Zv.join("|")))
              , g = a.substring(1).split("&").filter(function(T) {
                return !m.test(T) && !!T
            }).join("&")
              , x = g === c.hash.substring(1) ? "" : g
              , w = function(T) {
                return T.substring(1).split("&").filter(function(R) {
                    return !/liff\.state/.test(R) && !!R
                })
            }
              , y = w(s)
              , E = w(c.search);
            n.extraParams && y.push(n.extraParams);
            for (var h = 0; h < E.length; h++) {
                var v = E[h]
                  , b = y.indexOf(v);
                b > -1 && y.splice(b, 1)
            }
            var C = y.join("&")
              , O = "".concat(d).concat(C !== "" ? "?".concat(C) : "").concat(x ? "#".concat(x) : "");
            return "".concat(Xv).concat(qe().liffId).concat(O)
        }
        ,
        n.createUrlBy = function(r) {
            return K(n, void 0, void 0, function() {
                var o, i;
                return q(this, function(s) {
                    switch (s.label) {
                    case 0:
                        if (!(o = qe().liffId))
                            throw A(rt, "Should run after liff init.");
                        try {
                            i = new URL(r)
                        } catch {
                            throw A(nt, "invalid URL.")
                        }
                        return [4, MC({
                            liffId: o,
                            currentPageUrl: i.toString()
                        })];
                    case 1:
                        return [2, s.sent().permanentLinkUrl]
                    }
                })
            })
        }
        ,
        n.setExtraQueryParam = function(r) {
            n.extraParams = r
        }
        ,
        n.isAncestor = function(r, o) {
            return o.indexOf(r) === 0 && (r.endsWith("/") && (r = r.substring(0, r.length - 1)),
            o[r.length] === void 0 || o[r.length] === "/")
        }
        ,
        n.install = function() {
            return {
                createUrl: n.createUrl,
                createUrlBy: n.createUrlBy,
                setExtraQueryParam: n.setExtraQueryParam
            }
        }
        ,
        n
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "permanentLink"
        },
        enumerable: !1,
        configurable: !0
    }),
    t
}(pe), BC = new FC, Oo, UC = function() {
    function e(t, n) {
        var r = this;
        this.resolve = t,
        this.reject = n,
        this.onSubmit = function(o) {
            var i = o.message;
            r.resolve({
                value: i
            }),
            r.destroy()
        }
        ,
        this.onClose = function() {
            r.resolve({
                value: null
            }),
            r.destroy()
        }
        ,
        this.onCancel = function() {
            r.resolve({
                value: null
            }),
            r.destroy()
        }
        ,
        this.onError = function(o) {
            r.reject(o),
            r.destroy()
        }
        ,
        this.start()
    }
    return e.prototype.start = function() {
        Ht.on("submit", this.onSubmit),
        Ht.on("close", this.onClose),
        Ht.on("cancel", this.onCancel),
        Ht.on("error", this.onError)
    }
    ,
    e.prototype.destroy = function() {
        Ht.off("submit", this.onSubmit),
        Ht.off("close", this.onClose),
        Ht.off("cancel", this.onCancel),
        Ht.off("error", this.onError),
        Oo = void 0
    }
    ,
    e
}();
function zC() {
    return K(this, void 0, void 0, function() {
        return q(this, function(e) {
            return Ll.scanCodeV2(),
            Oo && Oo.destroy(),
            [2, new Promise(function(t, n) {
                Oo = new UC(t,n),
                Ht.open({
                    url: "https://liff.line.me/1656359117-jxmx5e11"
                }).catch(function(r) {
                    Oo == null || Oo.destroy(),
                    n(r)
                })
            }
            )]
        })
    })
}
var HC = function(e) {
    function t() {
        return e !== null && e.apply(this, arguments) || this
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "scanCodeV2"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return zC
    }
    ,
    t
}(pe)
  , WC = new HC
  , Xy = {};
function VC() {
    return Xy
}
function Zy(e, t) {
    var n = VC()
      , r = je(t.split("."), 1)[0]
      , o = n[t];
    o && e.removeEventListener(r, o),
    n[t] = null
}
var Uh = !1
  , zh = !1;
function KC(e, t, n, r) {
    Uh || (zh = function() {
        var i = !1;
        try {
            var s = Object.defineProperty({}, "passive", {
                get: function() {
                    return i = !0,
                    !1
                }
            });
            window.addEventListener("test", s, s),
            window.removeEventListener("test", s, s)
        } catch {
            i = !1
        }
        return i
    }(),
    Uh = !0);
    var o = je(t.split("."), 1)[0];
    return new Promise(function(i) {
        var s = function(a) {
            i(a),
            n && n(a),
            r && r.once && Zy(e, t)
        };
        (function(a, l) {
            Xy[a] = l
        }
        )(t, s),
        e.addEventListener(o, s, !!zh && r)
    }
    )
}
function Hh(e, t, n, r) {
    if (n === void 0 && (n = {}),
    typeof e != "object" || !e.postMessage)
        throw A(nt, "target must be window object");
    if (typeof t != "string")
        throw A(nt, "keyname must be string");
    if (typeof n != "object")
        throw A(nt, "incorrect body format. It should be Object or Array comprised of Object");
    if (!r)
        throw A(nt, "serverEndPointUrl isn't passed. please fill up with proper url");
    if (r === "*")
        throw new Error("serverEndPointUrl doesn't allow to set '*'");
    var o = {
        name: t,
        body: n
    };
    e.postMessage(o, r)
}
function qC(e, t, n, r) {
    KC(e, "message.".concat(t), function(o, i, s) {
        return function(a) {
            we.debug("messageReceive", a),
            a.origin === s && a.data.name === o && i(a)
        }
    }(t, n, r))
}
var YC = function() {
    function e() {
        this.payloadToShareTargetPicker = null,
        this.popupWindow = null,
        this.doesWaitForSubwindowResult = !1
    }
    return e.getInstance = function() {
        return e.instance ? e.instance.reset() : e.instance = new e,
        e.instance
    }
    ,
    e.prototype.init = function(t) {
        return K(this, void 0, void 0, function() {
            var n, r;
            return q(this, function(o) {
                switch (o.label) {
                case 0:
                    return o.trys.push([0, 5, , 6]),
                    this.liffId = t.referrer.liffId,
                    this.doesWaitForSubwindowResult = !(!t.options || !t.options.waitForSubwindowResult),
                    this.allowPostMessageOrigin = this.initAllowPostMessageOrigin(),
                    this.payloadToShareTargetPicker = this.buildPayloadToShareTargetPicker(t),
                    window.AbortController && (this.abortController = new window.AbortController),
                    this.prepareAnotherWindow(),
                    [4, this.initOtt()];
                case 1:
                    return o.sent(),
                    this.initListener(),
                    this.openAnotherWindow(),
                    this.doesWaitForSubwindowResult ? [4, this.pollingShareResult()] : [3, 3];
                case 2:
                    return n = o.sent(),
                    this.finalize(),
                    [2, n];
                case 3:
                case 6:
                    return [2];
                case 4:
                    return [3, 6];
                case 5:
                    if (r = o.sent(),
                    this.finalize(),
                    r.name !== "AbortError")
                        throw r;
                    return [3, 6]
                }
            })
        })
    }
    ,
    e.prototype.resetAllVariables = function() {
        this.liffId = "",
        this.allowPostMessageOrigin = "",
        this.payloadToShareTargetPicker = null,
        this.ott = "",
        this.popupWindow = null,
        this.timeoutIDForHealthCheck = null,
        this.abortController = null,
        this.internalError = null,
        this.doesWaitForSubwindowResult = !1
    }
    ,
    e.prototype.reset = function() {
        this.finalize(),
        this.resetAllVariables()
    }
    ,
    e.prototype.finalize = function() {
        var t, n;
        this.abortController && this.abortController.abort(),
        Ee() || (t = this.timeoutIDForHealthCheck,
        n = this.popupWindow,
        Zy(window, "message.receivedHealthcheck"),
        t && clearTimeout(t),
        n && !n.closed && n.close())
    }
    ,
    e.prototype.buildPayloadToShareTargetPicker = function(t) {
        return {
            messages: t.messages,
            isMultiple: t.isMultiple,
            referrer: t.referrer
        }
    }
    ,
    e.prototype.initAllowPostMessageOrigin = function(t) {
        return t === void 0 && (t = We("shareTargetPicker")),
        nE(t)
    }
    ,
    e.prototype.initOtt = function() {
        return K(this, void 0, void 0, function() {
            var t, n, r;
            return q(this, function(o) {
                switch (o.label) {
                case 0:
                    return this.abortController && (t = this.abortController.signal),
                    n = "".concat(We("shareTargetPickerOtt"), "/").concat(this.liffId, "/ott"),
                    r = this,
                    [4, at(n, {
                        method: "GET",
                        signal: t
                    }).then(function(i) {
                        return i.ott
                    })];
                case 1:
                    return r.ott = o.sent(),
                    [2]
                }
            })
        })
    }
    ,
    e.prototype.prepareAnotherWindow = function() {
        Ee() || (fn() !== "ios" || ad() ? this.popupWindow = window.open("", "liffpopup", "width=480, height=640, menubar=no, toolbar=no, scrollbars=yes") : this.popupWindow = window.open())
    }
    ,
    e.prototype.openAnotherWindow = function() {
        if (Ee() && this.payloadToShareTargetPicker)
            t = this.liffId,
            n = this.ott,
            r = this.payloadToShareTargetPicker,
            o = {
                liffId: t,
                ott: n,
                data: JSON.stringify(r),
                closeModals: !1
            },
            location.href = "".concat("line://picker", "?").concat(Lt.stringify(o));
        else {
            if (this.timeoutIDForHealthCheck = window.setTimeout(this.healthCheck.bind(this), 1e3),
            !this.popupWindow)
                throw A(Mc);
            (function(i, s, a) {
                var l = {
                    liffId: s,
                    ott: a
                };
                i.location.href = "".concat(We("shareTargetPicker"), "?").concat(Lt.stringify(l))
            }
            )(this.popupWindow, this.liffId, this.ott)
        }
        var t, n, r, o
    }
    ,
    e.prototype.initListener = function() {
        var t, n;
        Ee() || (t = this.onReceivedHealthcheck.bind(this),
        n = this.allowPostMessageOrigin,
        qC(window, "receivedHealthcheck", t, n))
    }
    ,
    e.prototype.healthCheck = function() {
        return K(this, void 0, void 0, function() {
            var t;
            return q(this, function(n) {
                switch (n.label) {
                case 0:
                    if (this.popupWindow && !this.popupWindow.closed)
                        return [3, 7];
                    if (!this.doesWaitForSubwindowResult)
                        return [3, 5];
                    n.label = 1;
                case 1:
                    return n.trys.push([1, 3, , 4]),
                    [4, this.onCanceled()];
                case 2:
                    return n.sent(),
                    [3, 4];
                case 3:
                    return t = n.sent(),
                    this.internalError = t,
                    [3, 4];
                case 4:
                    return [3, 6];
                case 5:
                    this.finalize(),
                    n.label = 6;
                case 6:
                    return [3, 8];
                case 7:
                    r = this.popupWindow,
                    o = this.allowPostMessageOrigin,
                    Hh(r, "healthcheck", void 0, o),
                    this.timeoutIDForHealthCheck = window.setTimeout(this.healthCheck.bind(this), 1e3),
                    n.label = 8;
                case 8:
                    return [2]
                }
                var r, o
            })
        })
    }
    ,
    e.prototype.onReceivedHealthcheck = function() {
        if (!this.popupWindow || !this.payloadToShareTargetPicker)
            throw A(Mc);
        var t, n, r;
        t = this.popupWindow,
        n = this.payloadToShareTargetPicker,
        r = this.allowPostMessageOrigin,
        Hh(t, "ready", n, r)
    }
    ,
    e.prototype.onCanceled = function() {
        return K(this, void 0, void 0, function() {
            var t, n;
            return q(this, function(r) {
                switch (r.label) {
                case 0:
                    if (Ee() || !this.ott)
                        throw new Error("need to call with ott in client");
                    return this.abortController && (t = this.abortController.signal),
                    n = {
                        liffId: this.liffId,
                        ott: this.ott
                    },
                    [4, at("".concat(We("shareTargetPickerResult"), "?").concat(Lt.stringify(n)), {
                        method: "POST",
                        signal: t,
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: "result=CANCEL"
                    })];
                case 1:
                    return [2, r.sent().status === "ok"]
                }
            })
        })
    }
    ,
    e.prototype.getShareResult = function() {
        return K(this, void 0, void 0, function() {
            var t, n;
            return q(this, function(r) {
                if (!this.ott)
                    throw new Error("need to call with ott in client");
                return this.abortController && (t = this.abortController.signal),
                n = {
                    liffId: this.liffId,
                    ott: this.ott
                },
                we.debug("fetch: getShareResult"),
                [2, at("".concat(We("shareTargetPickerResult"), "?").concat(Lt.stringify(n)), {
                    method: "GET",
                    headers: {
                        Accept: "application/json"
                    },
                    signal: t
                })]
            })
        })
    }
    ,
    e.isPollingTimeOut = function(t, n) {
        return (n - t) / 6e4 >= 10
    }
    ,
    e.prototype.pollingShareResult = function() {
        return K(this, void 0, void 0, function() {
            var t, n;
            return q(this, function(r) {
                switch (r.label) {
                case 0:
                    t = Date.now(),
                    r.label = 1;
                case 1:
                    if (e.isPollingTimeOut(t, Date.now()))
                        return [3, 4];
                    if (this.internalError)
                        throw this.internalError;
                    return [4, this.getShareResult()];
                case 2:
                    if ((n = r.sent()) && n.result)
                        switch (n.result) {
                        case "SUCCESS":
                            return [2, {
                                status: "success"
                            }];
                        case "CANCEL":
                            return [2];
                        default:
                            throw new Error(n.resultDescription)
                        }
                    return [4, new Promise(function(o) {
                        setTimeout(o, 500)
                    }
                    )];
                case 3:
                    return r.sent(),
                    [3, 1];
                case 4:
                    throw new Error("Timeout: not finished within ".concat(10, "min"))
                }
            })
        })
    }
    ,
    e
}()
  , GC = function(e) {
    function t() {
        var n = e !== null && e.apply(this, arguments) || this;
        return n.shareTargetPicker = function(r, o) {
            return o === void 0 && (o = {}),
            K(n, void 0, void 0, function() {
                var i, s, a, l, c, d, m;
                return q(this, function(g) {
                    switch (g.label) {
                    case 0:
                        if (Ll.shareTargetPicker(),
                        !r || !Array.isArray(r) || r.length === 0)
                            throw A(nt, "no proper argument");
                        if (r.length > VS)
                            throw A(nt, "exceed the limit of num of messages");
                        if (!(i = qe().liffId))
                            throw A(Fn);
                        window.liff && (s = window.liff).analytics && DC(s.analytics),
                        a = o.isMultiple === void 0 || o.isMultiple,
                        g.label = 1;
                    case 1:
                        return g.trys.push([1, 3, , 4]),
                        l = YC.getInstance(),
                        c = ir(),
                        d = {
                            waitForSubwindowResult: !0
                        },
                        Ee() && c && jn(c, "10.11.0") < 0 && (d.waitForSubwindowResult = !1),
                        [4, l.init({
                            messages: r,
                            isMultiple: a,
                            referrer: {
                                liffId: i,
                                url: location.origin
                            },
                            options: d
                        })];
                    case 2:
                        return [2, g.sent()];
                    case 3:
                        throw (m = g.sent())instanceof ny ? m : A(Fc, m.message);
                    case 4:
                        return [2]
                    }
                })
            })
        }
        ,
        n
    }
    return me(t, e),
    Object.defineProperty(t.prototype, "name", {
        get: function() {
            return "shareTargetPicker"
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.install = function() {
        return this.shareTargetPicker
    }
    ,
    t
}(pe)
  , QC = new GC
  , JC = {}
  , yd = Object.defineProperties(JC, {
    getOS: {
        value: fn,
        enumerable: !0,
        writable: !0
    },
    getVersion: {
        value: Il,
        enumerable: !0,
        writable: !0
    },
    getLanguage: {
        value: Vy,
        enumerable: !0,
        writable: !0
    },
    isInClient: {
        value: Ee,
        enumerable: !0,
        writable: !0
    },
    isLoggedIn: {
        value: Gt,
        enumerable: !0,
        writable: !0
    },
    logout: {
        value: cd,
        enumerable: !0,
        writable: !0
    },
    getAccessToken: {
        value: or,
        enumerable: !0,
        writable: !0
    },
    getIDToken: {
        value: Ol,
        enumerable: !0,
        writable: !0
    },
    getDecodedIDToken: {
        value: $l,
        enumerable: !0,
        writable: !0
    },
    getContext: {
        value: Tt,
        enumerable: !0,
        writable: !0
    },
    openWindow: {
        value: Gy,
        enumerable: !0,
        writable: !0
    },
    closeWindow: {
        value: Qo,
        enumerable: !0,
        writable: !0
    },
    getFriendship: {
        value: Jo(Jy, "profile"),
        enumerable: !0,
        writable: !0
    },
    getAId: {
        value: ly,
        enumerable: !0,
        writable: !0
    },
    getProfilePlus: {
        value: cy,
        enumerable: !0,
        writable: !0
    },
    getIsVideoAutoPlay: {
        value: uy,
        enumerable: !0,
        writable: !0
    },
    getLineVersion: {
        value: ir,
        enumerable: !0,
        writable: !0
    },
    isApiAvailable: {
        value: Is,
        enumerable: !0,
        writable: !0
    },
    getProfile: {
        value: Jo(vd, "profile"),
        enumerable: !0,
        writable: !0
    },
    sendMessages: {
        value: Jo(Qy, "chat_message.write"),
        enumerable: !0,
        writable: !0
    },
    subWindow: {
        value: Ht,
        enumerable: !0,
        writable: !0
    },
    ready: {
        value: WS,
        enumerable: !0,
        writable: !0
    },
    id: {
        get: function() {
            return qe().liffId || null
        },
        enumerable: !0
    },
    _dispatchEvent: {
        value: VE,
        enumerable: !0,
        writable: !0
    },
    _call: {
        value: pd,
        enumerable: !0,
        writable: !0
    },
    _addListener: {
        value: fd,
        enumerable: !0,
        writable: !0
    },
    _removeListener: {
        value: dd,
        enumerable: !0,
        writable: !0
    },
    _postMessage: {
        value: Cy,
        enumerable: !0,
        writable: !0
    }
})
  , wd = new HS
  , ew = new zS(wd,yd)
  , XC = new Gv(wd,ew).install();
function ZC(e) {
    XC.call(yd, e)
}
[new Gv(wd,ew), new rC, new kC, new jC, WC, BC, vy, $C, QC, sC, new LE].forEach(ZC);
var Ui = yd;
const ek = "1657782440-0b1j7ELm"
  , tk = "1.2.4"
  , tw = "https://api.hengsiam.com/api/v1"
  , nw = "https://api.hengsiam.com/api/v1/static/icons/";
/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ge() {
    return ge = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ge.apply(this, arguments)
}
var Ze;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Ze || (Ze = {}));
const Wh = "popstate";
function nk(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: s, hash: a} = r.location;
        return xs("", {
            pathname: i,
            search: s,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : Ls(o)
    }
    return ok(t, n, null, e)
}
function le(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function li(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function rk() {
    return Math.random().toString(36).substr(2, 8)
}
function Vh(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function xs(e, t, n, r) {
    return n === void 0 && (n = null),
    ge({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? sr(t) : t, {
        state: n,
        key: t && t.key || r || rk()
    })
}
function Ls(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function sr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function ok(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , s = o.history
      , a = Ze.Pop
      , l = null
      , c = d();
    c == null && (c = 0,
    s.replaceState(ge({}, s.state, {
        idx: c
    }), ""));
    function d() {
        return (s.state || {
            idx: null
        }).idx
    }
    function m() {
        a = Ze.Pop;
        let E = d()
          , h = E == null ? null : E - c;
        c = E,
        l && l({
            action: a,
            location: y.location,
            delta: h
        })
    }
    function g(E, h) {
        a = Ze.Push;
        let v = xs(y.location, E, h);
        n && n(v, E),
        c = d() + 1;
        let b = Vh(v, c)
          , C = y.createHref(v);
        try {
            s.pushState(b, "", C)
        } catch {
            o.location.assign(C)
        }
        i && l && l({
            action: a,
            location: y.location,
            delta: 1
        })
    }
    function x(E, h) {
        a = Ze.Replace;
        let v = xs(y.location, E, h);
        n && n(v, E),
        c = d();
        let b = Vh(v, c)
          , C = y.createHref(v);
        s.replaceState(b, "", C),
        i && l && l({
            action: a,
            location: y.location,
            delta: 0
        })
    }
    function w(E) {
        let h = o.location.origin !== "null" ? o.location.origin : o.location.href
          , v = typeof E == "string" ? E : Ls(E);
        return le(h, "No window.location.(origin|href) available to create URL for href: " + v),
        new URL(v,h)
    }
    let y = {
        get action() {
            return a
        },
        get location() {
            return e(o, s)
        },
        listen(E) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Wh, m),
            l = E,
            ()=>{
                o.removeEventListener(Wh, m),
                l = null
            }
        },
        createHref(E) {
            return t(o, E)
        },
        createURL: w,
        encodeLocation(E) {
            let h = w(E);
            return {
                pathname: h.pathname,
                search: h.search,
                hash: h.hash
            }
        },
        push: g,
        replace: x,
        go(E) {
            return s.go(E)
        }
    };
    return y
}
var ot;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(ot || (ot = {}));
const ik = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function sk(e) {
    return e.index === !0
}
function rw(e, t, n, r) {
    return n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o,i)=>{
        let s = [...n, i]
          , a = typeof o.id == "string" ? o.id : s.join("-");
        if (le(o.index !== !0 || !o.children, "Cannot specify children on an index route"),
        le(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`),
        sk(o)) {
            let l = ge({}, o, t(o), {
                id: a
            });
            return r[a] = l,
            l
        } else {
            let l = ge({}, o, t(o), {
                id: a,
                children: void 0
            });
            return r[a] = l,
            o.children && (l.children = rw(o.children, t, s, r)),
            l
        }
    }
    )
}
function zo(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? sr(t) : t
      , o = Ns(r.pathname || "/", n);
    if (o == null)
        return null;
    let i = ow(e);
    ak(i);
    let s = null;
    for (let a = 0; s == null && a < i.length; ++a)
        s = gk(i[a], wk(o));
    return s
}
function ow(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i,s,a)=>{
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        l.relativePath.startsWith("/") && (le(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let c = $r([r, l.relativePath])
          , d = n.concat(l);
        i.children && i.children.length > 0 && (le(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
        ow(i.children, t, d, c)),
        !(i.path == null && !i.index) && t.push({
            path: c,
            score: hk(c, i.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach((i,s)=>{
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?")))
            o(i, s);
        else
            for (let l of iw(i.path))
                o(i, s, l)
    }
    ),
    t
}
function iw(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let s = iw(r.join("/"))
      , a = [];
    return a.push(...s.map(l=>l === "" ? i : [i, l].join("/"))),
    o && a.push(...s),
    a.map(l=>e.startsWith("/") && l === "" ? "/" : l)
}
function ak(e) {
    e.sort((t,n)=>t.score !== n.score ? n.score - t.score : mk(t.routesMeta.map(r=>r.childrenIndex), n.routesMeta.map(r=>r.childrenIndex)))
}
const lk = /^:\w+$/
  , uk = 3
  , ck = 2
  , fk = 1
  , dk = 10
  , pk = -2
  , Kh = e=>e === "*";
function hk(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Kh) && (r += pk),
    t && (r += ck),
    n.filter(o=>!Kh(o)).reduce((o,i)=>o + (lk.test(i) ? uk : i === "" ? fk : dk), r)
}
function mk(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r,o)=>r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function gk(e, t) {
    let {routesMeta: n} = e
      , r = {}
      , o = "/"
      , i = [];
    for (let s = 0; s < n.length; ++s) {
        let a = n[s]
          , l = s === n.length - 1
          , c = o === "/" ? t : t.slice(o.length) || "/"
          , d = vk({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: l
        }, c);
        if (!d)
            return null;
        Object.assign(r, d.params);
        let m = a.route;
        i.push({
            params: r,
            pathname: $r([o, d.pathname]),
            pathnameBase: Ek($r([o, d.pathnameBase])),
            route: m
        }),
        d.pathnameBase !== "/" && (o = $r([o, d.pathnameBase]))
    }
    return i
}
function vk(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = yk(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , s = i.replace(/(.)\/+$/, "$1")
      , a = o.slice(1);
    return {
        params: r.reduce((c,d,m)=>{
            if (d === "*") {
                let g = a[m] || "";
                s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1")
            }
            return c[d] = bk(a[m] || "", d),
            c
        }
        , {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}
function yk(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    li(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (s,a)=>(r.push(a),
    "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push("*"),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function wk(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return li(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function bk(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return li(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")),
        e
    }
}
function Ns(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function xk(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? sr(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Sk(n, t) : t,
        search: Ck(r),
        hash: kk(o)
    }
}
function Sk(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o=>{
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Au(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function bd(e) {
    return e.filter((t,n)=>n === 0 || t.route.path && t.route.path.length > 0)
}
function sw(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = sr(e) : (o = ge({}, e),
    le(!o.pathname || !o.pathname.includes("?"), Au("?", "pathname", "search", o)),
    le(!o.pathname || !o.pathname.includes("#"), Au("#", "pathname", "hash", o)),
    le(!o.search || !o.search.includes("#"), Au("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "", s = i ? "/" : o.pathname, a;
    if (r || s == null)
        a = n;
    else {
        let m = t.length - 1;
        if (s.startsWith("..")) {
            let g = s.split("/");
            for (; g[0] === ".."; )
                g.shift(),
                m -= 1;
            o.pathname = g.join("/")
        }
        a = m >= 0 ? t[m] : "/"
    }
    let l = xk(o, a)
      , c = s && s !== "/" && s.endsWith("/")
      , d = (i || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"),
    l
}
const $r = e=>e.join("/").replace(/\/\/+/g, "/")
  , Ek = e=>e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Ck = e=>!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , kk = e=>!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class xd {
    constructor(t, n, r, o) {
        o === void 0 && (o = !1),
        this.status = t,
        this.statusText = n || "",
        this.internal = o,
        r instanceof Error ? (this.data = r.toString(),
        this.error = r) : this.data = r
    }
}
function aw(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const lw = ["post", "put", "patch", "delete"]
  , _k = new Set(lw)
  , Tk = ["get", ...lw]
  , Pk = new Set(Tk)
  , Ok = new Set([301, 302, 303, 307, 308])
  , $k = new Set([307, 308])
  , ju = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0
}
  , Ik = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0
}
  , qh = {
    state: "unblocked",
    proceed: void 0,
    reset: void 0,
    location: void 0
}
  , uw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , cw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Lk = !cw
  , Nk = e=>({
    hasErrorBoundary: !!e.hasErrorBoundary
});
function Rk(e) {
    le(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let t;
    if (e.mapRouteProperties)
        t = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let $ = e.detectErrorBoundary;
        t = _=>({
            hasErrorBoundary: $(_)
        })
    } else
        t = Nk;
    let n = {}, r = rw(e.routes, t, void 0, n), o, i = e.basename || "/", s = ge({
        v7_normalizeFormMethod: !1,
        v7_prependBasename: !1
    }, e.future), a = null, l = new Set, c = null, d = null, m = null, g = e.hydrationData != null, x = zo(r, e.history.location, i), w = null;
    if (x == null) {
        let $ = yn(404, {
            pathname: e.history.location.pathname
        })
          , {matches: _, route: j} = em(r);
        x = _,
        w = {
            [j.id]: $
        }
    }
    let y = !x.some($=>$.route.lazy) && (!x.some($=>$.route.loader) || e.hydrationData != null), E, h = {
        historyAction: e.history.action,
        location: e.history.location,
        matches: x,
        initialized: y,
        navigation: ju,
        restoreScrollPosition: e.hydrationData != null ? !1 : null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: e.hydrationData && e.hydrationData.loaderData || {},
        actionData: e.hydrationData && e.hydrationData.actionData || null,
        errors: e.hydrationData && e.hydrationData.errors || w,
        fetchers: new Map,
        blockers: new Map
    }, v = Ze.Pop, b = !1, C, O = !1, T = !1, R = [], D = [], H = new Map, z = 0, he = -1, Ne = new Map, X = new Set, U = new Map, B = new Map, G = new Map, W = !1;
    function N() {
        return a = e.history.listen($=>{
            let {action: _, location: j, delta: J} = $;
            if (W) {
                W = !1;
                return
            }
            li(G.size === 0 || J != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let Z = bt({
                currentLocation: h.location,
                nextLocation: j,
                historyAction: _
            });
            if (Z && J != null) {
                W = !0,
                e.history.go(J * -1),
                zn(Z, {
                    state: "blocked",
                    location: j,
                    proceed() {
                        zn(Z, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: j
                        }),
                        e.history.go(J)
                    },
                    reset() {
                        lr(Z),
                        Q({
                            blockers: new Map(E.state.blockers)
                        })
                    }
                });
                return
            }
            return _e(_, j)
        }
        ),
        h.initialized || _e(Ze.Pop, h.location),
        E
    }
    function F() {
        a && a(),
        l.clear(),
        C && C.abort(),
        h.fetchers.forEach(($,_)=>se(_)),
        h.blockers.forEach(($,_)=>lr(_))
    }
    function V($) {
        return l.add($),
        ()=>l.delete($)
    }
    function Q($) {
        h = ge({}, h, $),
        l.forEach(_=>_(h))
    }
    function re($, _) {
        var j, J;
        let Z = h.actionData != null && h.navigation.formMethod != null && Kn(h.navigation.formMethod) && h.navigation.state === "loading" && ((j = $.state) == null ? void 0 : j._isRedirect) !== !0, oe;
        _.actionData ? Object.keys(_.actionData).length > 0 ? oe = _.actionData : oe = null : Z ? oe = h.actionData : oe = null;
        let ie = _.loaderData ? Zh(h.loaderData, _.loaderData, _.matches || [], _.errors) : h.loaderData;
        for (let[ee] of G)
            lr(ee);
        let te = b === !0 || h.navigation.formMethod != null && Kn(h.navigation.formMethod) && ((J = $.state) == null ? void 0 : J._isRedirect) !== !0;
        o && (r = o,
        o = void 0),
        Q(ge({}, _, {
            actionData: oe,
            loaderData: ie,
            historyAction: v,
            location: $,
            initialized: !0,
            navigation: ju,
            revalidation: "idle",
            restoreScrollPosition: go($, _.matches || h.matches),
            preventScrollReset: te,
            blockers: new Map(h.blockers)
        })),
        O || v === Ze.Pop || (v === Ze.Push ? e.history.push($, $.state) : v === Ze.Replace && e.history.replace($, $.state)),
        v = Ze.Pop,
        b = !1,
        O = !1,
        T = !1,
        R = [],
        D = []
    }
    async function ke($, _) {
        if (typeof $ == "number") {
            e.history.go($);
            return
        }
        let j = Gc(h.location, h.matches, i, s.v7_prependBasename, $, _ == null ? void 0 : _.fromRouteId, _ == null ? void 0 : _.relative)
          , {path: J, submission: Z, error: oe} = Yh(s.v7_normalizeFormMethod, !1, j, _)
          , ie = h.location
          , te = xs(h.location, J, _ && _.state);
        te = ge({}, te, e.history.encodeLocation(te));
        let ee = _ && _.replace != null ? _.replace : void 0
          , ue = Ze.Push;
        ee === !0 ? ue = Ze.Replace : ee === !1 || Z != null && Kn(Z.formMethod) && Z.formAction === h.location.pathname + h.location.search && (ue = Ze.Replace);
        let ye = _ && "preventScrollReset"in _ ? _.preventScrollReset === !0 : void 0
          , ft = bt({
            currentLocation: ie,
            nextLocation: te,
            historyAction: ue
        });
        if (ft) {
            zn(ft, {
                state: "blocked",
                location: te,
                proceed() {
                    zn(ft, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: te
                    }),
                    ke($, _)
                },
                reset() {
                    lr(ft),
                    Q({
                        blockers: new Map(h.blockers)
                    })
                }
            });
            return
        }
        return await _e(ue, te, {
            submission: Z,
            pendingError: oe,
            preventScrollReset: ye,
            replace: _ && _.replace
        })
    }
    function Ue() {
        if (ho(),
        Q({
            revalidation: "loading"
        }),
        h.navigation.state !== "submitting") {
            if (h.navigation.state === "idle") {
                _e(h.historyAction, h.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            _e(v || h.historyAction, h.navigation.location, {
                overrideNavigation: h.navigation
            })
        }
    }
    async function _e($, _, j) {
        C && C.abort(),
        C = null,
        v = $,
        O = (j && j.startUninterruptedRevalidation) === !0,
        Fs(h.location, h.matches),
        b = (j && j.preventScrollReset) === !0;
        let J = o || r
          , Z = j && j.overrideNavigation
          , oe = zo(J, _, i);
        if (!oe) {
            let Je = yn(404, {
                pathname: _.pathname
            })
              , {matches: ze, route: Mt} = em(J);
            mi(),
            re(_, {
                matches: ze,
                loaderData: {},
                errors: {
                    [Mt.id]: Je
                }
            });
            return
        }
        if (Fk(h.location, _) && !(j && j.submission && Kn(j.submission.formMethod))) {
            re(_, {
                matches: oe
            });
            return
        }
        C = new AbortController;
        let ie = Ri(e.history, _, C.signal, j && j.submission), te, ee;
        if (j && j.pendingError)
            ee = {
                [Ho(oe).route.id]: j.pendingError
            };
        else if (j && j.submission && Kn(j.submission.formMethod)) {
            let Je = await Ye(ie, _, j.submission, oe, {
                replace: j.replace
            });
            if (Je.shortCircuited)
                return;
            te = Je.pendingActionData,
            ee = Je.pendingActionError,
            Z = ge({
                state: "loading",
                location: _
            }, j.submission),
            ie = new Request(ie.url,{
                signal: ie.signal
            })
        }
        let {shortCircuited: ue, loaderData: ye, errors: ft} = await Dt(ie, _, oe, Z, j && j.submission, j && j.fetcherSubmission, j && j.replace, te, ee);
        ue || (C = null,
        re(_, ge({
            matches: oe
        }, te ? {
            actionData: te
        } : {}, {
            loaderData: ye,
            errors: ft
        })))
    }
    async function Ye($, _, j, J, Z) {
        ho();
        let oe = ge({
            state: "submitting",
            location: _
        }, j);
        Q({
            navigation: oe
        });
        let ie, te = Qc(J, _);
        if (!te.route.action && !te.route.lazy)
            ie = {
                type: ot.error,
                error: yn(405, {
                    method: $.method,
                    pathname: _.pathname,
                    routeId: te.route.id
                })
            };
        else if (ie = await Ni("action", $, te, J, n, t, i),
        $.signal.aborted)
            return {
                shortCircuited: !0
            };
        if (Xo(ie)) {
            let ee;
            return Z && Z.replace != null ? ee = Z.replace : ee = ie.location === h.location.pathname + h.location.search,
            await Re(h, ie, {
                submission: j,
                replace: ee
            }),
            {
                shortCircuited: !0
            }
        }
        if (ns(ie)) {
            let ee = Ho(J, te.route.id);
            return (Z && Z.replace) !== !0 && (v = Ze.Push),
            {
                pendingActionData: {},
                pendingActionError: {
                    [ee.route.id]: ie.error
                }
            }
        }
        if (Xr(ie))
            throw yn(400, {
                type: "defer-action"
            });
        return {
            pendingActionData: {
                [te.route.id]: ie.data
            }
        }
    }
    async function Dt($, _, j, J, Z, oe, ie, te, ee) {
        let ue = J;
        ue || (ue = ge({
            state: "loading",
            location: _,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0
        }, Z));
        let ye = Z || oe ? Z || oe : ue.formMethod && ue.formAction && ue.formData && ue.formEncType ? {
            formMethod: ue.formMethod,
            formAction: ue.formAction,
            formData: ue.formData,
            formEncType: ue.formEncType
        } : void 0
          , ft = o || r
          , [Je,ze] = Gh(e.history, h, j, ye, _, T, R, D, U, ft, i, te, ee);
        if (mi(Oe=>!(j && j.some(Ft=>Ft.route.id === Oe)) || Je && Je.some(Ft=>Ft.route.id === Oe)),
        Je.length === 0 && ze.length === 0) {
            let Oe = Un();
            return re(_, ge({
                matches: j,
                loaderData: {},
                errors: ee || null
            }, te ? {
                actionData: te
            } : {}, Oe ? {
                fetchers: new Map(h.fetchers)
            } : {})),
            {
                shortCircuited: !0
            }
        }
        if (!O) {
            ze.forEach(Ft=>{
                let ur = h.fetchers.get(Ft.key)
                  , yi = {
                    state: "loading",
                    data: ur && ur.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0
                };
                h.fetchers.set(Ft.key, yi)
            }
            );
            let Oe = te || h.actionData;
            Q(ge({
                navigation: ue
            }, Oe ? Object.keys(Oe).length === 0 ? {
                actionData: null
            } : {
                actionData: Oe
            } : {}, ze.length > 0 ? {
                fetchers: new Map(h.fetchers)
            } : {}))
        }
        he = ++z,
        ze.forEach(Oe=>{
            Oe.controller && H.set(Oe.key, Oe.controller)
        }
        );
        let Mt = ()=>ze.forEach(Oe=>mt(Oe.key));
        C && C.signal.addEventListener("abort", Mt);
        let {results: Dr, loaderResults: Hn, fetcherResults: vo} = await po(h.matches, j, Je, ze, $);
        if ($.signal.aborted)
            return {
                shortCircuited: !0
            };
        C && C.signal.removeEventListener("abort", Mt),
        ze.forEach(Oe=>H.delete(Oe.key));
        let _n = tm(Dr);
        if (_n)
            return await Re(h, _n, {
                replace: ie
            }),
            {
                shortCircuited: !0
            };
        let {loaderData: yo, errors: gi} = Xh(h, j, Je, Hn, ee, ze, vo, B);
        B.forEach((Oe,Ft)=>{
            Oe.subscribe(ur=>{
                (ur || Oe.done) && B.delete(Ft)
            }
            )
        }
        );
        let Mr = Un()
          , vi = Qe(he)
          , wo = Mr || vi || ze.length > 0;
        return ge({
            loaderData: yo,
            errors: gi
        }, wo ? {
            fetchers: new Map(h.fetchers)
        } : {})
    }
    function wt($) {
        return h.fetchers.get($) || Ik
    }
    function ve($, _, j, J) {
        if (Lk)
            throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        H.has($) && mt($);
        let Z = o || r
          , oe = Gc(h.location, h.matches, i, s.v7_prependBasename, j, _, J == null ? void 0 : J.relative)
          , ie = zo(Z, oe, i);
        if (!ie) {
            mo($, _, yn(404, {
                pathname: oe
            }));
            return
        }
        let {path: te, submission: ee} = Yh(s.v7_normalizeFormMethod, !0, oe, J)
          , ue = Qc(ie, te);
        if (b = (J && J.preventScrollReset) === !0,
        ee && Kn(ee.formMethod)) {
            Ge($, _, te, ue, ie, ee);
            return
        }
        U.set($, {
            routeId: _,
            path: te
        }),
        jr($, _, te, ue, ie, ee)
    }
    async function Ge($, _, j, J, Z, oe) {
        if (ho(),
        U.delete($),
        !J.route.action && !J.route.lazy) {
            let Pt = yn(405, {
                method: oe.formMethod,
                pathname: j,
                routeId: _
            });
            mo($, _, Pt);
            return
        }
        let ie = h.fetchers.get($)
          , te = ge({
            state: "submitting"
        }, oe, {
            data: ie && ie.data,
            " _hasFetcherDoneAnything ": !0
        });
        h.fetchers.set($, te),
        Q({
            fetchers: new Map(h.fetchers)
        });
        let ee = new AbortController
          , ue = Ri(e.history, j, ee.signal, oe);
        H.set($, ee);
        let ye = await Ni("action", ue, J, Z, n, t, i);
        if (ue.signal.aborted) {
            H.get($) === ee && H.delete($);
            return
        }
        if (Xo(ye)) {
            H.delete($),
            X.add($);
            let Pt = ge({
                state: "loading"
            }, oe, {
                data: void 0,
                " _hasFetcherDoneAnything ": !0
            });
            return h.fetchers.set($, Pt),
            Q({
                fetchers: new Map(h.fetchers)
            }),
            Re(h, ye, {
                submission: oe,
                isFetchActionRedirect: !0
            })
        }
        if (ns(ye)) {
            mo($, _, ye.error);
            return
        }
        if (Xr(ye))
            throw yn(400, {
                type: "defer-action"
            });
        let ft = h.navigation.location || h.location
          , Je = Ri(e.history, ft, ee.signal)
          , ze = o || r
          , Mt = h.navigation.state !== "idle" ? zo(ze, h.navigation.location, i) : h.matches;
        le(Mt, "Didn't find any matches after fetcher action");
        let Dr = ++z;
        Ne.set($, Dr);
        let Hn = ge({
            state: "loading",
            data: ye.data
        }, oe, {
            " _hasFetcherDoneAnything ": !0
        });
        h.fetchers.set($, Hn);
        let[vo,_n] = Gh(e.history, h, Mt, oe, ft, T, R, D, U, ze, i, {
            [J.route.id]: ye.data
        }, void 0);
        _n.filter(Pt=>Pt.key !== $).forEach(Pt=>{
            let wi = Pt.key
              , Bs = h.fetchers.get(wi)
              , Vl = {
                state: "loading",
                data: Bs && Bs.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
            };
            h.fetchers.set(wi, Vl),
            Pt.controller && H.set(wi, Pt.controller)
        }
        ),
        Q({
            fetchers: new Map(h.fetchers)
        });
        let yo = ()=>_n.forEach(Pt=>mt(Pt.key));
        ee.signal.addEventListener("abort", yo);
        let {results: gi, loaderResults: Mr, fetcherResults: vi} = await po(h.matches, Mt, vo, _n, Je);
        if (ee.signal.aborted)
            return;
        ee.signal.removeEventListener("abort", yo),
        Ne.delete($),
        H.delete($),
        _n.forEach(Pt=>H.delete(Pt.key));
        let wo = tm(gi);
        if (wo)
            return Re(h, wo);
        let {loaderData: Oe, errors: Ft} = Xh(h, h.matches, vo, Mr, void 0, _n, vi, B)
          , ur = {
            state: "idle",
            data: ye.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0
        };
        h.fetchers.set($, ur);
        let yi = Qe(Dr);
        h.navigation.state === "loading" && Dr > he ? (le(v, "Expected pending action"),
        C && C.abort(),
        re(h.navigation.location, {
            matches: Mt,
            loaderData: Oe,
            errors: Ft,
            fetchers: new Map(h.fetchers)
        })) : (Q(ge({
            errors: Ft,
            loaderData: Zh(h.loaderData, Oe, Mt, Ft)
        }, yi ? {
            fetchers: new Map(h.fetchers)
        } : {})),
        T = !1)
    }
    async function jr($, _, j, J, Z, oe) {
        let ie = h.fetchers.get($)
          , te = ge({
            state: "loading",
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0
        }, oe, {
            data: ie && ie.data,
            " _hasFetcherDoneAnything ": !0
        });
        h.fetchers.set($, te),
        Q({
            fetchers: new Map(h.fetchers)
        });
        let ee = new AbortController
          , ue = Ri(e.history, j, ee.signal);
        H.set($, ee);
        let ye = await Ni("loader", ue, J, Z, n, t, i);
        if (Xr(ye) && (ye = await hw(ye, ue.signal, !0) || ye),
        H.get($) === ee && H.delete($),
        ue.signal.aborted)
            return;
        if (Xo(ye)) {
            X.add($),
            await Re(h, ye);
            return
        }
        if (ns(ye)) {
            let Je = Ho(h.matches, _);
            h.fetchers.delete($),
            Q({
                fetchers: new Map(h.fetchers),
                errors: {
                    [Je.route.id]: ye.error
                }
            });
            return
        }
        le(!Xr(ye), "Unhandled fetcher deferred data");
        let ft = {
            state: "idle",
            data: ye.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0
        };
        h.fetchers.set($, ft),
        Q({
            fetchers: new Map(h.fetchers)
        })
    }
    async function Re($, _, j) {
        var J;
        let {submission: Z, replace: oe, isFetchActionRedirect: ie} = j === void 0 ? {} : j;
        _.revalidate && (T = !0);
        let te = xs($.location, _.location, ge({
            _isRedirect: !0
        }, ie ? {
            _isFetchActionRedirect: !0
        } : {}));
        if (le(te, "Expected a location on the redirect navigation"),
        uw.test(_.location) && cw && typeof ((J = window) == null ? void 0 : J.location) < "u") {
            let ze = e.history.createURL(_.location)
              , Mt = Ns(ze.pathname, i) == null;
            if (window.location.origin !== ze.origin || Mt) {
                oe ? window.location.replace(_.location) : window.location.assign(_.location);
                return
            }
        }
        C = null;
        let ee = oe === !0 ? Ze.Replace : Ze.Push
          , {formMethod: ue, formAction: ye, formEncType: ft, formData: Je} = $.navigation;
        !Z && ue && ye && Je && ft && (Z = {
            formMethod: ue,
            formAction: ye,
            formEncType: ft,
            formData: Je
        }),
        $k.has(_.status) && Z && Kn(Z.formMethod) ? await _e(ee, te, {
            submission: ge({}, Z, {
                formAction: _.location
            }),
            preventScrollReset: b
        }) : ie ? await _e(ee, te, {
            overrideNavigation: {
                state: "loading",
                location: te,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0
            },
            fetcherSubmission: Z,
            preventScrollReset: b
        }) : await _e(ee, te, {
            overrideNavigation: {
                state: "loading",
                location: te,
                formMethod: Z ? Z.formMethod : void 0,
                formAction: Z ? Z.formAction : void 0,
                formEncType: Z ? Z.formEncType : void 0,
                formData: Z ? Z.formData : void 0
            },
            preventScrollReset: b
        })
    }
    async function po($, _, j, J, Z) {
        let oe = await Promise.all([...j.map(ee=>Ni("loader", Z, ee, _, n, t, i)), ...J.map(ee=>ee.matches && ee.match && ee.controller ? Ni("loader", Ri(e.history, ee.path, ee.controller.signal), ee.match, ee.matches, n, t, i) : {
            type: ot.error,
            error: yn(404, {
                pathname: ee.path
            })
        })])
          , ie = oe.slice(0, j.length)
          , te = oe.slice(j.length);
        return await Promise.all([nm($, j, ie, ie.map(()=>Z.signal), !1, h.loaderData), nm($, J.map(ee=>ee.match), te, J.map(ee=>ee.controller ? ee.controller.signal : null), !0)]),
        {
            results: oe,
            loaderResults: ie,
            fetcherResults: te
        }
    }
    function ho() {
        T = !0,
        R.push(...mi()),
        U.forEach(($,_)=>{
            H.has(_) && (D.push(_),
            mt(_))
        }
        )
    }
    function mo($, _, j) {
        let J = Ho(h.matches, _);
        se($),
        Q({
            errors: {
                [J.route.id]: j
            },
            fetchers: new Map(h.fetchers)
        })
    }
    function se($) {
        H.has($) && mt($),
        U.delete($),
        Ne.delete($),
        X.delete($),
        h.fetchers.delete($)
    }
    function mt($) {
        let _ = H.get($);
        le(_, "Expected fetch controller: " + $),
        _.abort(),
        H.delete($)
    }
    function mn($) {
        for (let _ of $) {
            let J = {
                state: "idle",
                data: wt(_).data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
            };
            h.fetchers.set(_, J)
        }
    }
    function Un() {
        let $ = []
          , _ = !1;
        for (let j of X) {
            let J = h.fetchers.get(j);
            le(J, "Expected fetcher: " + j),
            J.state === "loading" && (X.delete(j),
            $.push(j),
            _ = !0)
        }
        return mn($),
        _
    }
    function Qe($) {
        let _ = [];
        for (let[j,J] of Ne)
            if (J < $) {
                let Z = h.fetchers.get(j);
                le(Z, "Expected fetcher: " + j),
                Z.state === "loading" && (mt(j),
                Ne.delete(j),
                _.push(j))
            }
        return mn(_),
        _.length > 0
    }
    function ct($, _) {
        let j = h.blockers.get($) || qh;
        return G.get($) !== _ && G.set($, _),
        j
    }
    function lr($) {
        h.blockers.delete($),
        G.delete($)
    }
    function zn($, _) {
        let j = h.blockers.get($) || qh;
        le(j.state === "unblocked" && _.state === "blocked" || j.state === "blocked" && _.state === "blocked" || j.state === "blocked" && _.state === "proceeding" || j.state === "blocked" && _.state === "unblocked" || j.state === "proceeding" && _.state === "unblocked", "Invalid blocker state transition: " + j.state + " -> " + _.state),
        h.blockers.set($, _),
        Q({
            blockers: new Map(h.blockers)
        })
    }
    function bt($) {
        let {currentLocation: _, nextLocation: j, historyAction: J} = $;
        if (G.size === 0)
            return;
        G.size > 1 && li(!1, "A router only supports one blocker at a time");
        let Z = Array.from(G.entries())
          , [oe,ie] = Z[Z.length - 1]
          , te = h.blockers.get(oe);
        if (!(te && te.state === "proceeding") && ie({
            currentLocation: _,
            nextLocation: j,
            historyAction: J
        }))
            return oe
    }
    function mi($) {
        let _ = [];
        return B.forEach((j,J)=>{
            (!$ || $(J)) && (j.cancel(),
            _.push(J),
            B.delete(J))
        }
        ),
        _
    }
    function Ms($, _, j) {
        if (c = $,
        m = _,
        d = j || (J=>J.key),
        !g && h.navigation === ju) {
            g = !0;
            let J = go(h.location, h.matches);
            J != null && Q({
                restoreScrollPosition: J
            })
        }
        return ()=>{
            c = null,
            m = null,
            d = null
        }
    }
    function Fs($, _) {
        if (c && d && m) {
            let j = _.map(Z=>rm(Z, h.loaderData))
              , J = d($, j) || $.key;
            c[J] = m()
        }
    }
    function go($, _) {
        if (c && d && m) {
            let j = _.map(oe=>rm(oe, h.loaderData))
              , J = d($, j) || $.key
              , Z = c[J];
            if (typeof Z == "number")
                return Z
        }
        return null
    }
    function Wl($) {
        o = $
    }
    return E = {
        get basename() {
            return i
        },
        get state() {
            return h
        },
        get routes() {
            return r
        },
        initialize: N,
        subscribe: V,
        enableScrollRestoration: Ms,
        navigate: ke,
        fetch: ve,
        revalidate: Ue,
        createHref: $=>e.history.createHref($),
        encodeLocation: $=>e.history.encodeLocation($),
        getFetcher: wt,
        deleteFetcher: se,
        dispose: F,
        getBlocker: ct,
        deleteBlocker: lr,
        _internalFetchControllers: H,
        _internalActiveDeferreds: B,
        _internalSetRoutes: Wl
    },
    E
}
function Ak(e) {
    return e != null && "formData"in e
}
function Gc(e, t, n, r, o, i, s) {
    let a, l;
    if (i != null && s !== "path") {
        a = [];
        for (let d of t)
            if (a.push(d),
            d.route.id === i) {
                l = d;
                break
            }
    } else
        a = t,
        l = t[t.length - 1];
    let c = sw(o || ".", bd(a).map(d=>d.pathnameBase), Ns(e.pathname, n) || e.pathname, s === "path");
    return o == null && (c.search = e.search,
    c.hash = e.hash),
    (o == null || o === "" || o === ".") && l && l.route.index && !Sd(c.search) && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r && n !== "/" && (c.pathname = c.pathname === "/" ? n : $r([n, c.pathname])),
    Ls(c)
}
function Yh(e, t, n, r) {
    if (!r || !Ak(r))
        return {
            path: n
        };
    if (r.formMethod && !zk(r.formMethod))
        return {
            path: n,
            error: yn(405, {
                method: r.formMethod
            })
        };
    let o;
    if (r.formData) {
        let a = r.formMethod || "get";
        if (o = {
            formMethod: e ? a.toUpperCase() : a.toLowerCase(),
            formAction: pw(n),
            formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
            formData: r.formData
        },
        Kn(o.formMethod))
            return {
                path: n,
                submission: o
            }
    }
    let i = sr(n)
      , s = dw(r.formData);
    return t && i.search && Sd(i.search) && s.append("index", ""),
    i.search = "?" + s,
    {
        path: Ls(i),
        submission: o
    }
}
function jk(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex(o=>o.route.id === t);
        r >= 0 && (n = e.slice(0, r))
    }
    return n
}
function Gh(e, t, n, r, o, i, s, a, l, c, d, m, g) {
    let x = g ? Object.values(g)[0] : m ? Object.values(m)[0] : void 0
      , w = e.createURL(t.location)
      , y = e.createURL(o)
      , E = g ? Object.keys(g)[0] : void 0
      , v = jk(n, E).filter((C,O)=>{
        if (C.route.lazy)
            return !0;
        if (C.route.loader == null)
            return !1;
        if (Dk(t.loaderData, t.matches[O], C) || s.some(D=>D === C.route.id))
            return !0;
        let T = t.matches[O]
          , R = C;
        return Qh(C, ge({
            currentUrl: w,
            currentParams: T.params,
            nextUrl: y,
            nextParams: R.params
        }, r, {
            actionResult: x,
            defaultShouldRevalidate: i || w.pathname + w.search === y.pathname + y.search || w.search !== y.search || fw(T, R)
        }))
    }
    )
      , b = [];
    return l.forEach((C,O)=>{
        if (!n.some(H=>H.route.id === C.routeId))
            return;
        let T = zo(c, C.path, d);
        if (!T) {
            b.push({
                key: O,
                routeId: C.routeId,
                path: C.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let R = Qc(T, C.path);
        if (a.includes(O)) {
            b.push({
                key: O,
                routeId: C.routeId,
                path: C.path,
                matches: T,
                match: R,
                controller: new AbortController
            });
            return
        }
        Qh(R, ge({
            currentUrl: w,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: y,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: x,
            defaultShouldRevalidate: i
        })) && b.push({
            key: O,
            routeId: C.routeId,
            path: C.path,
            matches: T,
            match: R,
            controller: new AbortController
        })
    }
    ),
    [v, b]
}
function Dk(e, t, n) {
    let r = !t || n.route.id !== t.route.id
      , o = e[n.route.id] === void 0;
    return r || o
}
function fw(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}
function Qh(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean")
            return n
    }
    return t.defaultShouldRevalidate
}
async function Jh(e, t, n) {
    if (!e.lazy)
        return;
    let r = await e.lazy();
    if (!e.lazy)
        return;
    let o = n[e.id];
    le(o, "No route found in manifest");
    let i = {};
    for (let s in r) {
        let l = o[s] !== void 0 && s !== "hasErrorBoundary";
        li(!l, 'Route "' + o.id + '" has a static property "' + s + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + s + '" will be ignored.')),
        !l && !ik.has(s) && (i[s] = r[s])
    }
    Object.assign(o, i),
    Object.assign(o, ge({}, t(o), {
        lazy: void 0
    }))
}
async function Ni(e, t, n, r, o, i, s, a, l, c) {
    a === void 0 && (a = !1),
    l === void 0 && (l = !1);
    let d, m, g, x = E=>{
        let h, v = new Promise((b,C)=>h = C);
        return g = ()=>h(),
        t.signal.addEventListener("abort", g),
        Promise.race([E({
            request: t,
            params: n.params,
            context: c
        }), v])
    }
    ;
    try {
        let E = n.route[e];
        if (n.route.lazy)
            if (E)
                m = (await Promise.all([x(E), Jh(n.route, i, o)]))[0];
            else if (await Jh(n.route, i, o),
            E = n.route[e],
            E)
                m = await x(E);
            else if (e === "action") {
                let h = new URL(t.url)
                  , v = h.pathname + h.search;
                throw yn(405, {
                    method: t.method,
                    pathname: v,
                    routeId: n.route.id
                })
            } else
                return {
                    type: ot.data,
                    data: void 0
                };
        else if (E)
            m = await x(E);
        else {
            let h = new URL(t.url)
              , v = h.pathname + h.search;
            throw yn(404, {
                pathname: v
            })
        }
        le(m !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (E) {
        d = ot.error,
        m = E
    } finally {
        g && t.signal.removeEventListener("abort", g)
    }
    if (Uk(m)) {
        let E = m.status;
        if (Ok.has(E)) {
            let b = m.headers.get("Location");
            if (le(b, "Redirects returned/thrown from loaders/actions must have a Location header"),
            !uw.test(b))
                b = Gc(new URL(t.url), r.slice(0, r.indexOf(n) + 1), s, !0, b);
            else if (!a) {
                let C = new URL(t.url)
                  , O = b.startsWith("//") ? new URL(C.protocol + b) : new URL(b)
                  , T = Ns(O.pathname, s) != null;
                O.origin === C.origin && T && (b = O.pathname + O.search + O.hash)
            }
            if (a)
                throw m.headers.set("Location", b),
                m;
            return {
                type: ot.redirect,
                status: E,
                location: b,
                revalidate: m.headers.get("X-Remix-Revalidate") !== null
            }
        }
        if (l)
            throw {
                type: d || ot.data,
                response: m
            };
        let h, v = m.headers.get("Content-Type");
        return v && /\bapplication\/json\b/.test(v) ? h = await m.json() : h = await m.text(),
        d === ot.error ? {
            type: d,
            error: new xd(E,m.statusText,h),
            headers: m.headers
        } : {
            type: ot.data,
            data: h,
            statusCode: m.status,
            headers: m.headers
        }
    }
    if (d === ot.error)
        return {
            type: d,
            error: m
        };
    if (Bk(m)) {
        var w, y;
        return {
            type: ot.deferred,
            deferredData: m,
            statusCode: (w = m.init) == null ? void 0 : w.status,
            headers: ((y = m.init) == null ? void 0 : y.headers) && new Headers(m.init.headers)
        }
    }
    return {
        type: ot.data,
        data: m
    }
}
function Ri(e, t, n, r) {
    let o = e.createURL(pw(t)).toString()
      , i = {
        signal: n
    };
    if (r && Kn(r.formMethod)) {
        let {formMethod: s, formEncType: a, formData: l} = r;
        i.method = s.toUpperCase(),
        i.body = a === "application/x-www-form-urlencoded" ? dw(l) : l
    }
    return new Request(o,i)
}
function dw(e) {
    let t = new URLSearchParams;
    for (let[n,r] of e.entries())
        t.append(n, r instanceof File ? r.name : r);
    return t
}
function Mk(e, t, n, r, o) {
    let i = {}, s = null, a, l = !1, c = {};
    return n.forEach((d,m)=>{
        let g = t[m].route.id;
        if (le(!Xo(d), "Cannot handle redirect results in processLoaderData"),
        ns(d)) {
            let x = Ho(e, g)
              , w = d.error;
            r && (w = Object.values(r)[0],
            r = void 0),
            s = s || {},
            s[x.route.id] == null && (s[x.route.id] = w),
            i[g] = void 0,
            l || (l = !0,
            a = aw(d.error) ? d.error.status : 500),
            d.headers && (c[g] = d.headers)
        } else
            Xr(d) ? (o.set(g, d.deferredData),
            i[g] = d.deferredData.data) : i[g] = d.data,
            d.statusCode != null && d.statusCode !== 200 && !l && (a = d.statusCode),
            d.headers && (c[g] = d.headers)
    }
    ),
    r && (s = r,
    i[Object.keys(r)[0]] = void 0),
    {
        loaderData: i,
        errors: s,
        statusCode: a || 200,
        loaderHeaders: c
    }
}
function Xh(e, t, n, r, o, i, s, a) {
    let {loaderData: l, errors: c} = Mk(t, n, r, o, a);
    for (let d = 0; d < i.length; d++) {
        let {key: m, match: g, controller: x} = i[d];
        le(s !== void 0 && s[d] !== void 0, "Did not find corresponding fetcher result");
        let w = s[d];
        if (!(x && x.signal.aborted))
            if (ns(w)) {
                let y = Ho(e.matches, g == null ? void 0 : g.route.id);
                c && c[y.route.id] || (c = ge({}, c, {
                    [y.route.id]: w.error
                })),
                e.fetchers.delete(m)
            } else if (Xo(w))
                le(!1, "Unhandled fetcher revalidation redirect");
            else if (Xr(w))
                le(!1, "Unhandled fetcher deferred data");
            else {
                let y = {
                    state: "idle",
                    data: w.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0
                };
                e.fetchers.set(m, y)
            }
    }
    return {
        loaderData: l,
        errors: c
    }
}
function Zh(e, t, n, r) {
    let o = ge({}, t);
    for (let i of n) {
        let s = i.route.id;
        if (t.hasOwnProperty(s) ? t[s] !== void 0 && (o[s] = t[s]) : e[s] !== void 0 && i.route.loader && (o[s] = e[s]),
        r && r.hasOwnProperty(s))
            break
    }
    return o
}
function Ho(e, t) {
    return (t ? e.slice(0, e.findIndex(r=>r.route.id === t) + 1) : [...e]).reverse().find(r=>r.route.hasErrorBoundary === !0) || e[0]
}
function em(e) {
    let t = e.find(n=>n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}
function yn(e, t) {
    let {pathname: n, routeId: r, method: o, type: i} = t === void 0 ? {} : t
      , s = "Unknown Server Error"
      , a = "Unknown @remix-run/router error";
    return e === 400 ? (s = "Bad Request",
    o && n && r ? a = "You made a " + o + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : i === "defer-action" && (a = "defer() is not supported in actions")) : e === 403 ? (s = "Forbidden",
    a = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (s = "Not Found",
    a = 'No route matches URL "' + n + '"') : e === 405 && (s = "Method Not Allowed",
    o && n && r ? a = "You made a " + o.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : o && (a = 'Invalid request method "' + o.toUpperCase() + '"')),
    new xd(e || 500,s,new Error(a),!0)
}
function tm(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (Xo(n))
            return n
    }
}
function pw(e) {
    let t = typeof e == "string" ? sr(e) : e;
    return Ls(ge({}, t, {
        hash: ""
    }))
}
function Fk(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}
function Xr(e) {
    return e.type === ot.deferred
}
function ns(e) {
    return e.type === ot.error
}
function Xo(e) {
    return (e && e.type) === ot.redirect
}
function Bk(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}
function Uk(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}
function zk(e) {
    return Pk.has(e.toLowerCase())
}
function Kn(e) {
    return _k.has(e.toLowerCase())
}
async function nm(e, t, n, r, o, i) {
    for (let s = 0; s < n.length; s++) {
        let a = n[s]
          , l = t[s];
        if (!l)
            continue;
        let c = e.find(m=>m.route.id === l.route.id)
          , d = c != null && !fw(c, l) && (i && i[l.route.id]) !== void 0;
        if (Xr(a) && (o || d)) {
            let m = r[s];
            le(m, "Expected an AbortSignal for revalidating fetcher deferred result"),
            await hw(a, m, o).then(g=>{
                g && (n[s] = g || n[s])
            }
            )
        }
    }
}
async function hw(e, t, n) {
    if (n === void 0 && (n = !1),
    !await e.deferredData.resolveData(t)) {
        if (n)
            try {
                return {
                    type: ot.data,
                    data: e.deferredData.unwrappedData
                }
            } catch (o) {
                return {
                    type: ot.error,
                    error: o
                }
            }
        return {
            type: ot.data,
            data: e.deferredData.data
        }
    }
}
function Sd(e) {
    return new URLSearchParams(e).getAll("index").some(t=>t === "")
}
function rm(e, t) {
    let {route: n, pathname: r, params: o} = e;
    return {
        id: n.id,
        pathname: r,
        params: o,
        data: t[n.id],
        handle: n.handle
    }
}
function Qc(e, t) {
    let n = typeof t == "string" ? sr(t).search : t.search;
    if (e[e.length - 1].route.index && Sd(n || ""))
        return e[e.length - 1];
    let r = bd(e);
    return r[r.length - 1]
}
/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function sl() {
    return sl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    sl.apply(this, arguments)
}
const Ed = P.createContext(null)
  , mw = P.createContext(null)
  , Nl = P.createContext(null)
  , Rl = P.createContext(null)
  , fo = P.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , gw = P.createContext(null);
function Al() {
    return P.useContext(Rl) != null
}
function vw() {
    return Al() || le(!1),
    P.useContext(Rl).location
}
function yw(e) {
    P.useContext(Nl).static || P.useLayoutEffect(e)
}
function ww() {
    let {isDataRoute: e} = P.useContext(fo);
    return e ? t_() : Hk()
}
function Hk() {
    Al() || le(!1);
    let {basename: e, navigator: t} = P.useContext(Nl)
      , {matches: n} = P.useContext(fo)
      , {pathname: r} = vw()
      , o = JSON.stringify(bd(n).map(a=>a.pathnameBase))
      , i = P.useRef(!1);
    return yw(()=>{
        i.current = !0
    }
    ),
    P.useCallback(function(a, l) {
        if (l === void 0 && (l = {}),
        !i.current)
            return;
        if (typeof a == "number") {
            t.go(a);
            return
        }
        let c = sw(a, JSON.parse(o), r, l.relative === "path");
        e !== "/" && (c.pathname = c.pathname === "/" ? e : $r([e, c.pathname])),
        (l.replace ? t.replace : t.push)(c, l.state, l)
    }, [e, t, o, r])
}
function Wk() {
    let {matches: e} = P.useContext(fo)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function Vk(e, t, n) {
    Al() || le(!1);
    let {navigator: r} = P.useContext(Nl)
      , {matches: o} = P.useContext(fo)
      , i = o[o.length - 1]
      , s = i ? i.params : {};
    i && i.pathname;
    let a = i ? i.pathnameBase : "/";
    i && i.route;
    let l = vw(), c;
    if (t) {
        var d;
        let y = typeof t == "string" ? sr(t) : t;
        a === "/" || (d = y.pathname) != null && d.startsWith(a) || le(!1),
        c = y
    } else
        c = l;
    let m = c.pathname || "/"
      , g = a === "/" ? m : m.slice(a.length) || "/"
      , x = zo(e, {
        pathname: g
    })
      , w = Qk(x && x.map(y=>Object.assign({}, y, {
        params: Object.assign({}, s, y.params),
        pathname: $r([a, r.encodeLocation ? r.encodeLocation(y.pathname).pathname : y.pathname]),
        pathnameBase: y.pathnameBase === "/" ? a : $r([a, r.encodeLocation ? r.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
    })), o, n);
    return t && w ? P.createElement(Rl.Provider, {
        value: {
            location: sl({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Ze.Pop
        }
    }, w) : w
}
function Kk() {
    let e = e_()
      , t = aw(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    }
      , i = null;
    return P.createElement(P.Fragment, null, P.createElement("h2", null, "Unexpected Application Error!"), P.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? P.createElement("pre", {
        style: o
    }, n) : null, i)
}
const qk = P.createElement(Kk, null);
class Yk extends P.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error || n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error ? P.createElement(fo.Provider, {
            value: this.props.routeContext
        }, P.createElement(gw.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Gk(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = P.useContext(Ed);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(fo.Provider, {
        value: t
    }, r)
}
function Qk(e, t, n) {
    var r;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    e == null) {
        var o;
        if ((o = n) != null && o.errors)
            e = n.matches;
        else
            return null
    }
    let i = e
      , s = (r = n) == null ? void 0 : r.errors;
    if (s != null) {
        let a = i.findIndex(l=>l.route.id && (s == null ? void 0 : s[l.route.id]));
        a >= 0 || le(!1),
        i = i.slice(0, Math.min(i.length, a + 1))
    }
    return i.reduceRight((a,l,c)=>{
        let d = l.route.id ? s == null ? void 0 : s[l.route.id] : null
          , m = null;
        n && (m = l.route.errorElement || qk);
        let g = t.concat(i.slice(0, c + 1))
          , x = ()=>{
            let w;
            return d ? w = m : l.route.Component ? w = P.createElement(l.route.Component, null) : l.route.element ? w = l.route.element : w = a,
            P.createElement(Gk, {
                match: l,
                routeContext: {
                    outlet: a,
                    matches: g,
                    isDataRoute: n != null
                },
                children: w
            })
        }
        ;
        return n && (l.route.ErrorBoundary || l.route.errorElement || c === 0) ? P.createElement(Yk, {
            location: n.location,
            revalidation: n.revalidation,
            component: m,
            error: d,
            children: x(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : x()
    }
    , null)
}
var Jc;
(function(e) {
    e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate"
}
)(Jc || (Jc = {}));
var Ss;
(function(e) {
    e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId"
}
)(Ss || (Ss = {}));
function Jk(e) {
    let t = P.useContext(Ed);
    return t || le(!1),
    t
}
function Xk(e) {
    let t = P.useContext(mw);
    return t || le(!1),
    t
}
function Zk(e) {
    let t = P.useContext(fo);
    return t || le(!1),
    t
}
function bw(e) {
    let t = Zk()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || le(!1),
    n.route.id
}
function e_() {
    var e;
    let t = P.useContext(gw)
      , n = Xk(Ss.UseRouteError)
      , r = bw(Ss.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r])
}
function t_() {
    let {router: e} = Jk(Jc.UseNavigateStable)
      , t = bw(Ss.UseNavigateStable)
      , n = P.useRef(!1);
    return yw(()=>{
        n.current = !0
    }
    ),
    P.useCallback(function(o, i) {
        i === void 0 && (i = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, sl({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
function n_(e) {
    let {fallbackElement: t, router: n} = e
      , [r,o] = P.useState(n.state);
    P.useLayoutEffect(()=>n.subscribe(o), [n, o]);
    let i = P.useMemo(()=>({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: l=>n.navigate(l),
        push: (l,c,d)=>n.navigate(l, {
            state: c,
            preventScrollReset: d == null ? void 0 : d.preventScrollReset
        }),
        replace: (l,c,d)=>n.navigate(l, {
            replace: !0,
            state: c,
            preventScrollReset: d == null ? void 0 : d.preventScrollReset
        })
    }), [n])
      , s = n.basename || "/"
      , a = P.useMemo(()=>({
        router: n,
        navigator: i,
        static: !1,
        basename: s
    }), [n, i, s]);
    return P.createElement(P.Fragment, null, P.createElement(Ed.Provider, {
        value: a
    }, P.createElement(mw.Provider, {
        value: r
    }, P.createElement(o_, {
        basename: n.basename,
        location: n.state.location,
        navigationType: n.state.historyAction,
        navigator: i
    }, n.state.initialized ? P.createElement(r_, {
        routes: n.routes,
        state: r
    }) : t))), null)
}
function r_(e) {
    let {routes: t, state: n} = e;
    return Vk(t, void 0, n)
}
function o_(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=Ze.Pop, navigator: i, static: s=!1} = e;
    Al() && le(!1);
    let a = t.replace(/^\/*/, "/")
      , l = P.useMemo(()=>({
        basename: a,
        navigator: i,
        static: s
    }), [a, i, s]);
    typeof r == "string" && (r = sr(r));
    let {pathname: c="/", search: d="", hash: m="", state: g=null, key: x="default"} = r
      , w = P.useMemo(()=>{
        let y = Ns(c, a);
        return y == null ? null : {
            location: {
                pathname: y,
                search: d,
                hash: m,
                state: g,
                key: x
            },
            navigationType: o
        }
    }
    , [a, c, d, m, g, x, o]);
    return w == null ? null : P.createElement(Nl.Provider, {
        value: l
    }, P.createElement(Rl.Provider, {
        children: n,
        value: w
    }))
}
var om;
(function(e) {
    e[e.pending = 0] = "pending",
    e[e.success = 1] = "success",
    e[e.error = 2] = "error"
}
)(om || (om = {}));
new Promise(()=>{}
);
function i_(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: P.createElement(e.Component),
        Component: void 0
    }),
    e.ErrorBoundary && Object.assign(t, {
        errorElement: P.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }),
    t
}
/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function al() {
    return al = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    al.apply(this, arguments)
}
function s_(e, t) {
    return Rk({
        basename: t == null ? void 0 : t.basename,
        future: al({}, t == null ? void 0 : t.future, {
            v7_prependBasename: !0
        }),
        history: nk({
            window: t == null ? void 0 : t.window
        }),
        hydrationData: (t == null ? void 0 : t.hydrationData) || a_(),
        routes: e,
        mapRouteProperties: i_
    }).initialize()
}
function a_() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = al({}, t, {
        errors: l_(t.errors)
    })),
    t
}
function l_(e) {
    if (!e)
        return null;
    let t = Object.entries(e)
      , n = {};
    for (let[r,o] of t)
        if (o && o.__type === "RouteErrorResponse")
            n[r] = new xd(o.status,o.statusText,o.data,o.internal === !0);
        else if (o && o.__type === "Error") {
            let i = new Error(o.message);
            i.stack = "",
            n[r] = i
        } else
            n[r] = o;
    return n
}
var im;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmitImpl = "useSubmitImpl",
    e.UseFetcher = "useFetcher"
}
)(im || (im = {}));
var sm;
(function(e) {
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(sm || (sm = {}));
function xw(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: u_} = Object.prototype
  , {getPrototypeOf: Cd} = Object
  , jl = (e=>t=>{
    const n = u_.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , Bn = e=>(e = e.toLowerCase(),
t=>jl(t) === e)
  , Dl = e=>t=>typeof t === e
  , {isArray: hi} = Array
  , Es = Dl("undefined");
function c_(e) {
    return e !== null && !Es(e) && e.constructor !== null && !Es(e.constructor) && dn(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Sw = Bn("ArrayBuffer");
function f_(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Sw(e.buffer),
    t
}
const d_ = Dl("string")
  , dn = Dl("function")
  , Ew = Dl("number")
  , Ml = e=>e !== null && typeof e == "object"
  , p_ = e=>e === !0 || e === !1
  , Oa = e=>{
    if (jl(e) !== "object")
        return !1;
    const t = Cd(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , h_ = Bn("Date")
  , m_ = Bn("File")
  , g_ = Bn("Blob")
  , v_ = Bn("FileList")
  , y_ = e=>Ml(e) && dn(e.pipe)
  , w_ = e=>{
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || dn(e.append) && ((t = jl(e)) === "formdata" || t === "object" && dn(e.toString) && e.toString() === "[object FormData]"))
}
  , b_ = Bn("URLSearchParams")
  , x_ = e=>e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Rs(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, o;
    if (typeof e != "object" && (e = [e]),
    hi(e))
        for (r = 0,
        o = e.length; r < o; r++)
            t.call(null, e[r], r, e);
    else {
        const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , s = i.length;
        let a;
        for (r = 0; r < s; r++)
            a = i[r],
            t.call(null, e[a], a, e)
    }
}
function Cw(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, o;
    for (; r-- > 0; )
        if (o = n[r],
        t === o.toLowerCase())
            return o;
    return null
}
const kw = (()=>typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)()
  , _w = e=>!Es(e) && e !== kw;
function Xc() {
    const {caseless: e} = _w(this) && this || {}
      , t = {}
      , n = (r,o)=>{
        const i = e && Cw(t, o) || o;
        Oa(t[i]) && Oa(r) ? t[i] = Xc(t[i], r) : Oa(r) ? t[i] = Xc({}, r) : hi(r) ? t[i] = r.slice() : t[i] = r
    }
    ;
    for (let r = 0, o = arguments.length; r < o; r++)
        arguments[r] && Rs(arguments[r], n);
    return t
}
const S_ = (e,t,n,{allOwnKeys: r}={})=>(Rs(t, (o,i)=>{
    n && dn(o) ? e[i] = xw(o, n) : e[i] = o
}
, {
    allOwnKeys: r
}),
e)
  , E_ = e=>(e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , C_ = (e,t,n,r)=>{
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , k_ = (e,t,n,r)=>{
    let o, i, s;
    const a = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (o = Object.getOwnPropertyNames(e),
        i = o.length; i-- > 0; )
            s = o[i],
            (!r || r(s, e, t)) && !a[s] && (t[s] = e[s],
            a[s] = !0);
        e = n !== !1 && Cd(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , __ = (e,t,n)=>{
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , T_ = e=>{
    if (!e)
        return null;
    if (hi(e))
        return e;
    let t = e.length;
    if (!Ew(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , P_ = (e=>t=>e && t instanceof e)(typeof Uint8Array < "u" && Cd(Uint8Array))
  , O_ = (e,t)=>{
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
        const i = o.value;
        t.call(e, i[0], i[1])
    }
}
  , $_ = (e,t)=>{
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , I_ = Bn("HTMLFormElement")
  , L_ = e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
    return r.toUpperCase() + o
})
  , am = (({hasOwnProperty: e})=>(t,n)=>e.call(t, n))(Object.prototype)
  , N_ = Bn("RegExp")
  , Tw = (e,t)=>{
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    Rs(n, (o,i)=>{
        t(o, i, e) !== !1 && (r[i] = o)
    }
    ),
    Object.defineProperties(e, r)
}
  , R_ = e=>{
    Tw(e, (t,n)=>{
        if (dn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (dn(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = ()=>{
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , A_ = (e,t)=>{
    const n = {}
      , r = o=>{
        o.forEach(i=>{
            n[i] = !0
        }
        )
    }
    ;
    return hi(e) ? r(e) : r(String(e).split(t)),
    n
}
  , j_ = ()=>{}
  , D_ = (e,t)=>(e = +e,
Number.isFinite(e) ? e : t)
  , Du = "abcdefghijklmnopqrstuvwxyz"
  , lm = "0123456789"
  , Pw = {
    DIGIT: lm,
    ALPHA: Du,
    ALPHA_DIGIT: Du + Du.toUpperCase() + lm
}
  , M_ = (e=16,t=Pw.ALPHA_DIGIT)=>{
    let n = "";
    const {length: r} = t;
    for (; e--; )
        n += t[Math.random() * r | 0];
    return n
}
;
function F_(e) {
    return !!(e && dn(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const B_ = e=>{
    const t = new Array(10)
      , n = (r,o)=>{
        if (Ml(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[o] = r;
                const i = hi(r) ? [] : {};
                return Rs(r, (s,a)=>{
                    const l = n(s, o + 1);
                    !Es(l) && (i[a] = l)
                }
                ),
                t[o] = void 0,
                i
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , U_ = Bn("AsyncFunction")
  , z_ = e=>e && (Ml(e) || dn(e)) && dn(e.then) && dn(e.catch)
  , L = {
    isArray: hi,
    isArrayBuffer: Sw,
    isBuffer: c_,
    isFormData: w_,
    isArrayBufferView: f_,
    isString: d_,
    isNumber: Ew,
    isBoolean: p_,
    isObject: Ml,
    isPlainObject: Oa,
    isUndefined: Es,
    isDate: h_,
    isFile: m_,
    isBlob: g_,
    isRegExp: N_,
    isFunction: dn,
    isStream: y_,
    isURLSearchParams: b_,
    isTypedArray: P_,
    isFileList: v_,
    forEach: Rs,
    merge: Xc,
    extend: S_,
    trim: x_,
    stripBOM: E_,
    inherits: C_,
    toFlatObject: k_,
    kindOf: jl,
    kindOfTest: Bn,
    endsWith: __,
    toArray: T_,
    forEachEntry: O_,
    matchAll: $_,
    isHTMLForm: I_,
    hasOwnProperty: am,
    hasOwnProp: am,
    reduceDescriptors: Tw,
    freezeMethods: R_,
    toObjectSet: A_,
    toCamelCase: L_,
    noop: j_,
    toFiniteNumber: D_,
    findKey: Cw,
    global: kw,
    isContextDefined: _w,
    ALPHABET: Pw,
    generateString: M_,
    isSpecCompliantForm: F_,
    toJSONObject: B_,
    isAsyncFn: U_,
    isThenable: z_
};
function ce(e, t, n, r, o) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o)
}
L.inherits(ce, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: L.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const Ow = ce.prototype
  , $w = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e=>{
    $w[e] = {
        value: e
    }
}
);
Object.defineProperties(ce, $w);
Object.defineProperty(Ow, "isAxiosError", {
    value: !0
});
ce.from = (e,t,n,r,o,i)=>{
    const s = Object.create(Ow);
    return L.toFlatObject(e, s, function(l) {
        return l !== Error.prototype
    }, a=>a !== "isAxiosError"),
    ce.call(s, e.message, t, n, r, o),
    s.cause = e,
    s.name = e.name,
    i && Object.assign(s, i),
    s
}
;
const H_ = null;
function Zc(e) {
    return L.isPlainObject(e) || L.isArray(e)
}
function Iw(e) {
    return L.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function um(e, t, n) {
    return e ? e.concat(t).map(function(o, i) {
        return o = Iw(o),
        !n && i ? "[" + o + "]" : o
    }).join(n ? "." : "") : t
}
function W_(e) {
    return L.isArray(e) && !e.some(Zc)
}
const V_ = L.toFlatObject(L, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function Fl(e, t, n) {
    if (!L.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = L.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(y, E) {
        return !L.isUndefined(E[y])
    });
    const r = n.metaTokens
      , o = n.visitor || d
      , i = n.dots
      , s = n.indexes
      , l = (n.Blob || typeof Blob < "u" && Blob) && L.isSpecCompliantForm(t);
    if (!L.isFunction(o))
        throw new TypeError("visitor must be a function");
    function c(w) {
        if (w === null)
            return "";
        if (L.isDate(w))
            return w.toISOString();
        if (!l && L.isBlob(w))
            throw new ce("Blob is not supported. Use a Buffer instead.");
        return L.isArrayBuffer(w) || L.isTypedArray(w) ? l && typeof Blob == "function" ? new Blob([w]) : Buffer.from(w) : w
    }
    function d(w, y, E) {
        let h = w;
        if (w && !E && typeof w == "object") {
            if (L.endsWith(y, "{}"))
                y = r ? y : y.slice(0, -2),
                w = JSON.stringify(w);
            else if (L.isArray(w) && W_(w) || (L.isFileList(w) || L.endsWith(y, "[]")) && (h = L.toArray(w)))
                return y = Iw(y),
                h.forEach(function(b, C) {
                    !(L.isUndefined(b) || b === null) && t.append(s === !0 ? um([y], C, i) : s === null ? y : y + "[]", c(b))
                }),
                !1
        }
        return Zc(w) ? !0 : (t.append(um(E, y, i), c(w)),
        !1)
    }
    const m = []
      , g = Object.assign(V_, {
        defaultVisitor: d,
        convertValue: c,
        isVisitable: Zc
    });
    function x(w, y) {
        if (!L.isUndefined(w)) {
            if (m.indexOf(w) !== -1)
                throw Error("Circular reference detected in " + y.join("."));
            m.push(w),
            L.forEach(w, function(h, v) {
                (!(L.isUndefined(h) || h === null) && o.call(t, h, L.isString(v) ? v.trim() : v, y, g)) === !0 && x(h, y ? y.concat(v) : [v])
            }),
            m.pop()
        }
    }
    if (!L.isObject(e))
        throw new TypeError("data must be an object");
    return x(e),
    t
}
function cm(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function kd(e, t) {
    this._pairs = [],
    e && Fl(e, this, t)
}
const Lw = kd.prototype;
Lw.append = function(t, n) {
    this._pairs.push([t, n])
}
;
Lw.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, cm)
    }
    : cm;
    return this._pairs.map(function(o) {
        return n(o[0]) + "=" + n(o[1])
    }, "").join("&")
}
;
function K_(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function Nw(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || K_
      , o = n && n.serialize;
    let i;
    if (o ? i = o(t, n) : i = L.isURLSearchParams(t) ? t.toString() : new kd(t,n).toString(r),
    i) {
        const s = e.indexOf("#");
        s !== -1 && (e = e.slice(0, s)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + i
    }
    return e
}
class q_ {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        L.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const fm = q_
  , Rw = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , Y_ = typeof URLSearchParams < "u" ? URLSearchParams : kd
  , G_ = typeof FormData < "u" ? FormData : null
  , Q_ = typeof Blob < "u" ? Blob : null
  , J_ = (()=>{
    let e;
    return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
}
)()
  , X_ = (()=>typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")()
  , Nn = {
    isBrowser: !0,
    classes: {
        URLSearchParams: Y_,
        FormData: G_,
        Blob: Q_
    },
    isStandardBrowserEnv: J_,
    isStandardBrowserWebWorkerEnv: X_,
    protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Z_(e, t) {
    return Fl(e, new Nn.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, o, i) {
            return Nn.isNode && L.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : i.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function eT(e) {
    return L.matchAll(/\w+|\[(\w*)]/g, e).map(t=>t[0] === "[]" ? "" : t[1] || t[0])
}
function tT(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const o = n.length;
    let i;
    for (r = 0; r < o; r++)
        i = n[r],
        t[i] = e[i];
    return t
}
function Aw(e) {
    function t(n, r, o, i) {
        let s = n[i++];
        const a = Number.isFinite(+s)
          , l = i >= n.length;
        return s = !s && L.isArray(o) ? o.length : s,
        l ? (L.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r,
        !a) : ((!o[s] || !L.isObject(o[s])) && (o[s] = []),
        t(n, r, o[s], i) && L.isArray(o[s]) && (o[s] = tT(o[s])),
        !a)
    }
    if (L.isFormData(e) && L.isFunction(e.entries)) {
        const n = {};
        return L.forEachEntry(e, (r,o)=>{
            t(eT(r), o, n, 0)
        }
        ),
        n
    }
    return null
}
const nT = {
    "Content-Type": void 0
};
function rT(e, t, n) {
    if (L.isString(e))
        try {
            return (t || JSON.parse)(e),
            L.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
const Bl = {
    transitional: Rw,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , o = r.indexOf("application/json") > -1
          , i = L.isObject(t);
        if (i && L.isHTMLForm(t) && (t = new FormData(t)),
        L.isFormData(t))
            return o && o ? JSON.stringify(Aw(t)) : t;
        if (L.isArrayBuffer(t) || L.isBuffer(t) || L.isStream(t) || L.isFile(t) || L.isBlob(t))
            return t;
        if (L.isArrayBufferView(t))
            return t.buffer;
        if (L.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let a;
        if (i) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return Z_(t, this.formSerializer).toString();
            if ((a = L.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const l = this.env && this.env.FormData;
                return Fl(a ? {
                    "files[]": t
                } : t, l && new l, this.formSerializer)
            }
        }
        return i || o ? (n.setContentType("application/json", !1),
        rT(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || Bl.transitional
          , r = n && n.forcedJSONParsing
          , o = this.responseType === "json";
        if (t && L.isString(t) && (r && !this.responseType || o)) {
            const s = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(t)
            } catch (a) {
                if (s)
                    throw a.name === "SyntaxError" ? ce.from(a, ce.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Nn.classes.FormData,
        Blob: Nn.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    }
};
L.forEach(["delete", "get", "head"], function(t) {
    Bl.headers[t] = {}
});
L.forEach(["post", "put", "patch"], function(t) {
    Bl.headers[t] = L.merge(nT)
});
const _d = Bl
  , oT = L.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , iT = e=>{
    const t = {};
    let n, r, o;
    return e && e.split(`
`).forEach(function(s) {
        o = s.indexOf(":"),
        n = s.substring(0, o).trim().toLowerCase(),
        r = s.substring(o + 1).trim(),
        !(!n || t[n] && oT[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , dm = Symbol("internals");
function Ai(e) {
    return e && String(e).trim().toLowerCase()
}
function $a(e) {
    return e === !1 || e == null ? e : L.isArray(e) ? e.map($a) : String(e)
}
function sT(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const aT = e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Mu(e, t, n, r, o) {
    if (L.isFunction(r))
        return r.call(this, t, n);
    if (o && (t = n),
    !!L.isString(t)) {
        if (L.isString(r))
            return t.indexOf(r) !== -1;
        if (L.isRegExp(r))
            return r.test(t)
    }
}
function lT(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t,n,r)=>n.toUpperCase() + r)
}
function uT(e, t) {
    const n = L.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r=>{
        Object.defineProperty(e, r + n, {
            value: function(o, i, s) {
                return this[r].call(this, t, o, i, s)
            },
            configurable: !0
        })
    }
    )
}
class Ul {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const o = this;
        function i(a, l, c) {
            const d = Ai(l);
            if (!d)
                throw new Error("header name must be a non-empty string");
            const m = L.findKey(o, d);
            (!m || o[m] === void 0 || c === !0 || c === void 0 && o[m] !== !1) && (o[m || l] = $a(a))
        }
        const s = (a,l)=>L.forEach(a, (c,d)=>i(c, d, l));
        return L.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : L.isString(t) && (t = t.trim()) && !aT(t) ? s(iT(t), n) : t != null && i(n, t, r),
        this
    }
    get(t, n) {
        if (t = Ai(t),
        t) {
            const r = L.findKey(this, t);
            if (r) {
                const o = this[r];
                if (!n)
                    return o;
                if (n === !0)
                    return sT(o);
                if (L.isFunction(n))
                    return n.call(this, o, r);
                if (L.isRegExp(n))
                    return n.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = Ai(t),
        t) {
            const r = L.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || Mu(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let o = !1;
        function i(s) {
            if (s = Ai(s),
            s) {
                const a = L.findKey(r, s);
                a && (!n || Mu(r, r[a], a, n)) && (delete r[a],
                o = !0)
            }
        }
        return L.isArray(t) ? t.forEach(i) : i(t),
        o
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , o = !1;
        for (; r--; ) {
            const i = n[r];
            (!t || Mu(this, this[i], i, t, !0)) && (delete this[i],
            o = !0)
        }
        return o
    }
    normalize(t) {
        const n = this
          , r = {};
        return L.forEach(this, (o,i)=>{
            const s = L.findKey(r, i);
            if (s) {
                n[s] = $a(o),
                delete n[i];
                return
            }
            const a = t ? lT(i) : String(i).trim();
            a !== i && delete n[i],
            n[a] = $a(o),
            r[a] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return L.forEach(this, (r,o)=>{
            r != null && r !== !1 && (n[o] = t && L.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t,n])=>t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(o=>r.set(o)),
        r
    }
    static accessor(t) {
        const r = (this[dm] = this[dm] = {
            accessors: {}
        }).accessors
          , o = this.prototype;
        function i(s) {
            const a = Ai(s);
            r[a] || (uT(o, s),
            r[a] = !0)
        }
        return L.isArray(t) ? t.forEach(i) : i(t),
        this
    }
}
Ul.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
L.freezeMethods(Ul.prototype);
L.freezeMethods(Ul);
const Jn = Ul;
function Fu(e, t) {
    const n = this || _d
      , r = t || n
      , o = Jn.from(r.headers);
    let i = r.data;
    return L.forEach(e, function(a) {
        i = a.call(n, i, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    i
}
function jw(e) {
    return !!(e && e.__CANCEL__)
}
function As(e, t, n) {
    ce.call(this, e ?? "canceled", ce.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
L.inherits(As, ce, {
    __CANCEL__: !0
});
function cT(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new ce("Request failed with status code " + n.status,[ce.ERR_BAD_REQUEST, ce.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
const fT = Nn.isStandardBrowserEnv ? function() {
    return {
        write: function(n, r, o, i, s, a) {
            const l = [];
            l.push(n + "=" + encodeURIComponent(r)),
            L.isNumber(o) && l.push("expires=" + new Date(o).toGMTString()),
            L.isString(i) && l.push("path=" + i),
            L.isString(s) && l.push("domain=" + s),
            a === !0 && l.push("secure"),
            document.cookie = l.join("; ")
        },
        read: function(n) {
            const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
            return r ? decodeURIComponent(r[3]) : null
        },
        remove: function(n) {
            this.write(n, "", Date.now() - 864e5)
        }
    }
}() : function() {
    return {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}();
function dT(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function pT(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function Dw(e, t) {
    return e && !dT(t) ? pT(e, t) : t
}
const hT = Nn.isStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent)
      , n = document.createElement("a");
    let r;
    function o(i) {
        let s = i;
        return t && (n.setAttribute("href", s),
        s = n.href),
        n.setAttribute("href", s),
        {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = o(window.location.href),
    function(s) {
        const a = L.isString(s) ? o(s) : s;
        return a.protocol === r.protocol && a.host === r.host
    }
}() : function() {
    return function() {
        return !0
    }
}();
function mT(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function gT(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let o = 0, i = 0, s;
    return t = t !== void 0 ? t : 1e3,
    function(l) {
        const c = Date.now()
          , d = r[i];
        s || (s = c),
        n[o] = l,
        r[o] = c;
        let m = i
          , g = 0;
        for (; m !== o; )
            g += n[m++],
            m = m % e;
        if (o = (o + 1) % e,
        o === i && (i = (i + 1) % e),
        c - s < t)
            return;
        const x = d && c - d;
        return x ? Math.round(g * 1e3 / x) : void 0
    }
}
function pm(e, t) {
    let n = 0;
    const r = gT(50, 250);
    return o=>{
        const i = o.loaded
          , s = o.lengthComputable ? o.total : void 0
          , a = i - n
          , l = r(a)
          , c = i <= s;
        n = i;
        const d = {
            loaded: i,
            total: s,
            progress: s ? i / s : void 0,
            bytes: a,
            rate: l || void 0,
            estimated: l && s && c ? (s - i) / l : void 0,
            event: o
        };
        d[t ? "download" : "upload"] = !0,
        e(d)
    }
}
const vT = typeof XMLHttpRequest < "u"
  , yT = vT && function(e) {
    return new Promise(function(n, r) {
        let o = e.data;
        const i = Jn.from(e.headers).normalize()
          , s = e.responseType;
        let a;
        function l() {
            e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener("abort", a)
        }
        L.isFormData(o) && (Nn.isStandardBrowserEnv || Nn.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
        let c = new XMLHttpRequest;
        if (e.auth) {
            const x = e.auth.username || ""
              , w = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
            i.set("Authorization", "Basic " + btoa(x + ":" + w))
        }
        const d = Dw(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), Nw(d, e.params, e.paramsSerializer), !0),
        c.timeout = e.timeout;
        function m() {
            if (!c)
                return;
            const x = Jn.from("getAllResponseHeaders"in c && c.getAllResponseHeaders())
              , y = {
                data: !s || s === "text" || s === "json" ? c.responseText : c.response,
                status: c.status,
                statusText: c.statusText,
                headers: x,
                config: e,
                request: c
            };
            cT(function(h) {
                n(h),
                l()
            }, function(h) {
                r(h),
                l()
            }, y),
            c = null
        }
        if ("onloadend"in c ? c.onloadend = m : c.onreadystatechange = function() {
            !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(m)
        }
        ,
        c.onabort = function() {
            c && (r(new ce("Request aborted",ce.ECONNABORTED,e,c)),
            c = null)
        }
        ,
        c.onerror = function() {
            r(new ce("Network Error",ce.ERR_NETWORK,e,c)),
            c = null
        }
        ,
        c.ontimeout = function() {
            let w = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
            const y = e.transitional || Rw;
            e.timeoutErrorMessage && (w = e.timeoutErrorMessage),
            r(new ce(w,y.clarifyTimeoutError ? ce.ETIMEDOUT : ce.ECONNABORTED,e,c)),
            c = null
        }
        ,
        Nn.isStandardBrowserEnv) {
            const x = (e.withCredentials || hT(d)) && e.xsrfCookieName && fT.read(e.xsrfCookieName);
            x && i.set(e.xsrfHeaderName, x)
        }
        o === void 0 && i.setContentType(null),
        "setRequestHeader"in c && L.forEach(i.toJSON(), function(w, y) {
            c.setRequestHeader(y, w)
        }),
        L.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials),
        s && s !== "json" && (c.responseType = e.responseType),
        typeof e.onDownloadProgress == "function" && c.addEventListener("progress", pm(e.onDownloadProgress, !0)),
        typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", pm(e.onUploadProgress)),
        (e.cancelToken || e.signal) && (a = x=>{
            c && (r(!x || x.type ? new As(null,e,c) : x),
            c.abort(),
            c = null)
        }
        ,
        e.cancelToken && e.cancelToken.subscribe(a),
        e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
        const g = mT(d);
        if (g && Nn.protocols.indexOf(g) === -1) {
            r(new ce("Unsupported protocol " + g + ":",ce.ERR_BAD_REQUEST,e));
            return
        }
        c.send(o || null)
    }
    )
}
  , Ia = {
    http: H_,
    xhr: yT
};
L.forEach(Ia, (e,t)=>{
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const wT = {
    getAdapter: e=>{
        e = L.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        for (let o = 0; o < t && (n = e[o],
        !(r = L.isString(n) ? Ia[n.toLowerCase()] : n)); o++)
            ;
        if (!r)
            throw r === !1 ? new ce(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT") : new Error(L.hasOwnProp(Ia, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
        if (!L.isFunction(r))
            throw new TypeError("adapter is not a function");
        return r
    }
    ,
    adapters: Ia
};
function Bu(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new As(null,e)
}
function hm(e) {
    return Bu(e),
    e.headers = Jn.from(e.headers),
    e.data = Fu.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    wT.getAdapter(e.adapter || _d.adapter)(e).then(function(r) {
        return Bu(e),
        r.data = Fu.call(e, e.transformResponse, r),
        r.headers = Jn.from(r.headers),
        r
    }, function(r) {
        return jw(r) || (Bu(e),
        r && r.response && (r.response.data = Fu.call(e, e.transformResponse, r.response),
        r.response.headers = Jn.from(r.response.headers))),
        Promise.reject(r)
    })
}
const mm = e=>e instanceof Jn ? e.toJSON() : e;
function ui(e, t) {
    t = t || {};
    const n = {};
    function r(c, d, m) {
        return L.isPlainObject(c) && L.isPlainObject(d) ? L.merge.call({
            caseless: m
        }, c, d) : L.isPlainObject(d) ? L.merge({}, d) : L.isArray(d) ? d.slice() : d
    }
    function o(c, d, m) {
        if (L.isUndefined(d)) {
            if (!L.isUndefined(c))
                return r(void 0, c, m)
        } else
            return r(c, d, m)
    }
    function i(c, d) {
        if (!L.isUndefined(d))
            return r(void 0, d)
    }
    function s(c, d) {
        if (L.isUndefined(d)) {
            if (!L.isUndefined(c))
                return r(void 0, c)
        } else
            return r(void 0, d)
    }
    function a(c, d, m) {
        if (m in t)
            return r(c, d);
        if (m in e)
            return r(void 0, c)
    }
    const l = {
        url: i,
        method: i,
        data: i,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        beforeRedirect: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: a,
        headers: (c,d)=>o(mm(c), mm(d), !0)
    };
    return L.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
        const m = l[d] || o
          , g = m(e[d], t[d], d);
        L.isUndefined(g) && m !== a || (n[d] = g)
    }),
    n
}
const Mw = "1.4.0"
  , Td = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e,t)=>{
    Td[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const gm = {};
Td.transitional = function(t, n, r) {
    function o(i, s) {
        return "[Axios v" + Mw + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "")
    }
    return (i,s,a)=>{
        if (t === !1)
            throw new ce(o(s, " has been removed" + (n ? " in " + n : "")),ce.ERR_DEPRECATED);
        return n && !gm[s] && (gm[s] = !0,
        console.warn(o(s, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(i, s, a) : !0
    }
}
;
function bT(e, t, n) {
    if (typeof e != "object")
        throw new ce("options must be an object",ce.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let o = r.length;
    for (; o-- > 0; ) {
        const i = r[o]
          , s = t[i];
        if (s) {
            const a = e[i]
              , l = a === void 0 || s(a, i, e);
            if (l !== !0)
                throw new ce("option " + i + " must be " + l,ce.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new ce("Unknown option " + i,ce.ERR_BAD_OPTION)
    }
}
const ef = {
    assertOptions: bT,
    validators: Td
}
  , dr = ef.validators;
class ll {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new fm,
            response: new fm
        }
    }
    request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = ui(this.defaults, n);
        const {transitional: r, paramsSerializer: o, headers: i} = n;
        r !== void 0 && ef.assertOptions(r, {
            silentJSONParsing: dr.transitional(dr.boolean),
            forcedJSONParsing: dr.transitional(dr.boolean),
            clarifyTimeoutError: dr.transitional(dr.boolean)
        }, !1),
        o != null && (L.isFunction(o) ? n.paramsSerializer = {
            serialize: o
        } : ef.assertOptions(o, {
            encode: dr.function,
            serialize: dr.function
        }, !0)),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let s;
        s = i && L.merge(i.common, i[n.method]),
        s && L.forEach(["delete", "get", "head", "post", "put", "patch", "common"], w=>{
            delete i[w]
        }
        ),
        n.headers = Jn.concat(s, i);
        const a = [];
        let l = !0;
        this.interceptors.request.forEach(function(y) {
            typeof y.runWhen == "function" && y.runWhen(n) === !1 || (l = l && y.synchronous,
            a.unshift(y.fulfilled, y.rejected))
        });
        const c = [];
        this.interceptors.response.forEach(function(y) {
            c.push(y.fulfilled, y.rejected)
        });
        let d, m = 0, g;
        if (!l) {
            const w = [hm.bind(this), void 0];
            for (w.unshift.apply(w, a),
            w.push.apply(w, c),
            g = w.length,
            d = Promise.resolve(n); m < g; )
                d = d.then(w[m++], w[m++]);
            return d
        }
        g = a.length;
        let x = n;
        for (m = 0; m < g; ) {
            const w = a[m++]
              , y = a[m++];
            try {
                x = w(x)
            } catch (E) {
                y.call(this, E);
                break
            }
        }
        try {
            d = hm.call(this, x)
        } catch (w) {
            return Promise.reject(w)
        }
        for (m = 0,
        g = c.length; m < g; )
            d = d.then(c[m++], c[m++]);
        return d
    }
    getUri(t) {
        t = ui(this.defaults, t);
        const n = Dw(t.baseURL, t.url);
        return Nw(n, t.params, t.paramsSerializer)
    }
}
L.forEach(["delete", "get", "head", "options"], function(t) {
    ll.prototype[t] = function(n, r) {
        return this.request(ui(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
L.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(i, s, a) {
            return this.request(ui(a || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: i,
                data: s
            }))
        }
    }
    ll.prototype[t] = n(),
    ll.prototype[t + "Form"] = n(!0)
});
const La = ll;
class Pd {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(i) {
            n = i
        }
        );
        const r = this;
        this.promise.then(o=>{
            if (!r._listeners)
                return;
            let i = r._listeners.length;
            for (; i-- > 0; )
                r._listeners[i](o);
            r._listeners = null
        }
        ),
        this.promise.then = o=>{
            let i;
            const s = new Promise(a=>{
                r.subscribe(a),
                i = a
            }
            ).then(o);
            return s.cancel = function() {
                r.unsubscribe(i)
            }
            ,
            s
        }
        ,
        t(function(i, s, a) {
            r.reason || (r.reason = new As(i,s,a),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new Pd(function(o) {
                t = o
            }
            ),
            cancel: t
        }
    }
}
const xT = Pd;
function ST(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function ET(e) {
    return L.isObject(e) && e.isAxiosError === !0
}
const tf = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(tf).forEach(([e,t])=>{
    tf[t] = e
}
);
const CT = tf;
function Fw(e) {
    const t = new La(e)
      , n = xw(La.prototype.request, t);
    return L.extend(n, La.prototype, t, {
        allOwnKeys: !0
    }),
    L.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(o) {
        return Fw(ui(e, o))
    }
    ,
    n
}
const ut = Fw(_d);
ut.Axios = La;
ut.CanceledError = As;
ut.CancelToken = xT;
ut.isCancel = jw;
ut.VERSION = Mw;
ut.toFormData = Fl;
ut.AxiosError = ce;
ut.Cancel = ut.CanceledError;
ut.all = function(t) {
    return Promise.all(t)
}
;
ut.spread = ST;
ut.isAxiosError = ET;
ut.mergeConfig = ui;
ut.AxiosHeaders = Jn;
ut.formToJSON = e=>Aw(L.isHTMLForm(e) ? new FormData(e) : e);
ut.HttpStatusCode = CT;
ut.default = ut;
const Bw = ut;
var Uw = {
    exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
    (function() {
        var t = {}.hasOwnProperty;
        function n() {
            for (var r = [], o = 0; o < arguments.length; o++) {
                var i = arguments[o];
                if (i) {
                    var s = typeof i;
                    if (s === "string" || s === "number")
                        r.push(i);
                    else if (Array.isArray(i)) {
                        if (i.length) {
                            var a = n.apply(null, i);
                            a && r.push(a)
                        }
                    } else if (s === "object") {
                        if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
                            r.push(i.toString());
                            continue
                        }
                        for (var l in i)
                            t.call(i, l) && i[l] && r.push(l)
                    }
                }
            }
            return r.join(" ")
        }
        e.exports ? (n.default = n,
        e.exports = n) : window.classNames = n
    }
    )()
}
)(Uw);
var kT = Uw.exports;
const Ce = Mn(kT);
function nf() {
    return nf = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    nf.apply(this, arguments)
}
function zw(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), o, i;
    for (i = 0; i < r.length; i++)
        o = r[i],
        !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}
function vm(e) {
    return "default" + e.charAt(0).toUpperCase() + e.substr(1)
}
function _T(e) {
    var t = TT(e, "string");
    return typeof t == "symbol" ? t : String(t)
}
function TT(e, t) {
    if (typeof e != "object" || e === null)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function PT(e, t, n) {
    var r = P.useRef(e !== void 0)
      , o = P.useState(t)
      , i = o[0]
      , s = o[1]
      , a = e !== void 0
      , l = r.current;
    return r.current = a,
    !a && l && i !== t && s(t),
    [a ? e : i, P.useCallback(function(c) {
        for (var d = arguments.length, m = new Array(d > 1 ? d - 1 : 0), g = 1; g < d; g++)
            m[g - 1] = arguments[g];
        n && n.apply(void 0, [c].concat(m)),
        s(c)
    }, [n])]
}
function OT(e, t) {
    return Object.keys(t).reduce(function(n, r) {
        var o, i = n, s = i[vm(r)], a = i[r], l = zw(i, [vm(r), r].map(_T)), c = t[r], d = PT(a, s, e[c]), m = d[0], g = d[1];
        return nf({}, l, (o = {},
        o[r] = m,
        o[c] = g,
        o))
    }, e)
}
function rf(e, t) {
    return rf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
        return r.__proto__ = o,
        r
    }
    ,
    rf(e, t)
}
function $T(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    rf(e, t)
}
const Hw = ["xxl", "xl", "lg", "md", "sm", "xs"]
  , Ww = "xs"
  , zl = P.createContext({
    prefixes: {},
    breakpoints: Hw,
    minBreakpoint: Ww
})
  , {Consumer: xO, Provider: IT} = zl;
function LT({prefixes: e={}, breakpoints: t=Hw, minBreakpoint: n=Ww, dir: r, children: o}) {
    const i = P.useMemo(()=>({
        prefixes: {
            ...e
        },
        breakpoints: t,
        minBreakpoint: n,
        dir: r
    }), [e, t, n, r]);
    return k.jsx(IT, {
        value: i,
        children: o
    })
}
function Ve(e, t) {
    const {prefixes: n} = P.useContext(zl);
    return e || n[t] || t
}
function Vw() {
    const {breakpoints: e} = P.useContext(zl);
    return e
}
function Kw() {
    const {minBreakpoint: e} = P.useContext(zl);
    return e
}
function NT(e) {
    return e && e.ownerDocument || document
}
function RT(e) {
    var t = NT(e);
    return t && t.defaultView || window
}
function AT(e, t) {
    return RT(e).getComputedStyle(e, t)
}
var jT = /([A-Z])/g;
function DT(e) {
    return e.replace(jT, "-$1").toLowerCase()
}
var MT = /^ms-/;
function da(e) {
    return DT(e).replace(MT, "-ms-")
}
var FT = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function BT(e) {
    return !!(e && FT.test(e))
}
function qw(e, t) {
    var n = ""
      , r = "";
    if (typeof t == "string")
        return e.style.getPropertyValue(da(t)) || AT(e).getPropertyValue(da(t));
    Object.keys(t).forEach(function(o) {
        var i = t[o];
        !i && i !== 0 ? e.style.removeProperty(da(o)) : BT(o) ? r += o + "(" + i + ") " : n += da(o) + ": " + i + ";"
    }),
    r && (n += "transform: " + r + ";"),
    e.style.cssText += ";" + n
}
var Yw = {
    exports: {}
}
  , UT = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , zT = UT
  , HT = zT;
function Gw() {}
function Qw() {}
Qw.resetWarningCache = Gw;
var WT = function() {
    function e(r, o, i, s, a, l) {
        if (l !== HT) {
            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw c.name = "Invariant Violation",
            c
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
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
        checkPropTypes: Qw,
        resetWarningCache: Gw
    };
    return n.PropTypes = n,
    n
};
Yw.exports = WT();
var VT = Yw.exports;
const be = Mn(VT)
  , ym = {
    disabled: !1
}
  , Jw = qr.createContext(null);
var KT = function(t) {
    return t.scrollTop
}
  , zi = "unmounted"
  , Hr = "exited"
  , vr = "entering"
  , Kr = "entered"
  , of = "exiting"
  , ar = function(e) {
    $T(t, e);
    function t(r, o) {
        var i;
        i = e.call(this, r, o) || this;
        var s = o, a = s && !s.isMounting ? r.enter : r.appear, l;
        return i.appearStatus = null,
        r.in ? a ? (l = Hr,
        i.appearStatus = vr) : l = Kr : r.unmountOnExit || r.mountOnEnter ? l = zi : l = Hr,
        i.state = {
            status: l
        },
        i.nextCallback = null,
        i
    }
    t.getDerivedStateFromProps = function(o, i) {
        var s = o.in;
        return s && i.status === zi ? {
            status: Hr
        } : null
    }
    ;
    var n = t.prototype;
    return n.componentDidMount = function() {
        this.updateStatus(!0, this.appearStatus)
    }
    ,
    n.componentDidUpdate = function(o) {
        var i = null;
        if (o !== this.props) {
            var s = this.state.status;
            this.props.in ? s !== vr && s !== Kr && (i = vr) : (s === vr || s === Kr) && (i = of)
        }
        this.updateStatus(!1, i)
    }
    ,
    n.componentWillUnmount = function() {
        this.cancelNextCallback()
    }
    ,
    n.getTimeouts = function() {
        var o = this.props.timeout, i, s, a;
        return i = s = a = o,
        o != null && typeof o != "number" && (i = o.exit,
        s = o.enter,
        a = o.appear !== void 0 ? o.appear : s),
        {
            exit: i,
            enter: s,
            appear: a
        }
    }
    ,
    n.updateStatus = function(o, i) {
        if (o === void 0 && (o = !1),
        i !== null)
            if (this.cancelNextCallback(),
            i === vr) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var s = this.props.nodeRef ? this.props.nodeRef.current : Bi.findDOMNode(this);
                    s && KT(s)
                }
                this.performEnter(o)
            } else
                this.performExit();
        else
            this.props.unmountOnExit && this.state.status === Hr && this.setState({
                status: zi
            })
    }
    ,
    n.performEnter = function(o) {
        var i = this
          , s = this.props.enter
          , a = this.context ? this.context.isMounting : o
          , l = this.props.nodeRef ? [a] : [Bi.findDOMNode(this), a]
          , c = l[0]
          , d = l[1]
          , m = this.getTimeouts()
          , g = a ? m.appear : m.enter;
        if (!o && !s || ym.disabled) {
            this.safeSetState({
                status: Kr
            }, function() {
                i.props.onEntered(c)
            });
            return
        }
        this.props.onEnter(c, d),
        this.safeSetState({
            status: vr
        }, function() {
            i.props.onEntering(c, d),
            i.onTransitionEnd(g, function() {
                i.safeSetState({
                    status: Kr
                }, function() {
                    i.props.onEntered(c, d)
                })
            })
        })
    }
    ,
    n.performExit = function() {
        var o = this
          , i = this.props.exit
          , s = this.getTimeouts()
          , a = this.props.nodeRef ? void 0 : Bi.findDOMNode(this);
        if (!i || ym.disabled) {
            this.safeSetState({
                status: Hr
            }, function() {
                o.props.onExited(a)
            });
            return
        }
        this.props.onExit(a),
        this.safeSetState({
            status: of
        }, function() {
            o.props.onExiting(a),
            o.onTransitionEnd(s.exit, function() {
                o.safeSetState({
                    status: Hr
                }, function() {
                    o.props.onExited(a)
                })
            })
        })
    }
    ,
    n.cancelNextCallback = function() {
        this.nextCallback !== null && (this.nextCallback.cancel(),
        this.nextCallback = null)
    }
    ,
    n.safeSetState = function(o, i) {
        i = this.setNextCallback(i),
        this.setState(o, i)
    }
    ,
    n.setNextCallback = function(o) {
        var i = this
          , s = !0;
        return this.nextCallback = function(a) {
            s && (s = !1,
            i.nextCallback = null,
            o(a))
        }
        ,
        this.nextCallback.cancel = function() {
            s = !1
        }
        ,
        this.nextCallback
    }
    ,
    n.onTransitionEnd = function(o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef ? this.props.nodeRef.current : Bi.findDOMNode(this)
          , a = o == null && !this.props.addEndListener;
        if (!s || a) {
            setTimeout(this.nextCallback, 0);
            return
        }
        if (this.props.addEndListener) {
            var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback]
              , c = l[0]
              , d = l[1];
            this.props.addEndListener(c, d)
        }
        o != null && setTimeout(this.nextCallback, o)
    }
    ,
    n.render = function() {
        var o = this.state.status;
        if (o === zi)
            return null;
        var i = this.props
          , s = i.children;
        i.in,
        i.mountOnEnter,
        i.unmountOnExit,
        i.appear,
        i.enter,
        i.exit,
        i.timeout,
        i.addEndListener,
        i.onEnter,
        i.onEntering,
        i.onEntered,
        i.onExit,
        i.onExiting,
        i.onExited,
        i.nodeRef;
        var a = zw(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
        return qr.createElement(Jw.Provider, {
            value: null
        }, typeof s == "function" ? s(o, a) : qr.cloneElement(qr.Children.only(s), a))
    }
    ,
    t
}(qr.Component);
ar.contextType = Jw;
ar.propTypes = {};
function _o() {}
ar.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: _o,
    onEntering: _o,
    onEntered: _o,
    onExit: _o,
    onExiting: _o,
    onExited: _o
};
ar.UNMOUNTED = zi;
ar.EXITED = Hr;
ar.ENTERING = vr;
ar.ENTERED = Kr;
ar.EXITING = of;
const qT = ar
  , YT = !!(typeof window < "u" && window.document && window.document.createElement);
var sf = !1
  , af = !1;
try {
    var Uu = {
        get passive() {
            return sf = !0
        },
        get once() {
            return af = sf = !0
        }
    };
    YT && (window.addEventListener("test", Uu, Uu),
    window.removeEventListener("test", Uu, !0))
} catch {}
function GT(e, t, n, r) {
    if (r && typeof r != "boolean" && !af) {
        var o = r.once
          , i = r.capture
          , s = n;
        !af && o && (s = n.__once || function a(l) {
            this.removeEventListener(t, a, i),
            n.call(this, l)
        }
        ,
        n.__once = s),
        e.addEventListener(t, s, sf ? r : i)
    }
    e.addEventListener(t, n, r)
}
function QT(e, t, n, r) {
    var o = r && typeof r != "boolean" ? r.capture : r;
    e.removeEventListener(t, n, o),
    n.__once && e.removeEventListener(t, n.__once, o)
}
function Xw(e, t, n, r) {
    return GT(e, t, n, r),
    function() {
        QT(e, t, n, r)
    }
}
function JT(e, t, n, r) {
    if (n === void 0 && (n = !1),
    r === void 0 && (r = !0),
    e) {
        var o = document.createEvent("HTMLEvents");
        o.initEvent(t, n, r),
        e.dispatchEvent(o)
    }
}
function XT(e) {
    var t = qw(e, "transitionDuration") || ""
      , n = t.indexOf("ms") === -1 ? 1e3 : 1;
    return parseFloat(t) * n
}
function ZT(e, t, n) {
    n === void 0 && (n = 5);
    var r = !1
      , o = setTimeout(function() {
        r || JT(e, "transitionend", !0)
    }, t + n)
      , i = Xw(e, "transitionend", function() {
        r = !0
    }, {
        once: !0
    });
    return function() {
        clearTimeout(o),
        i()
    }
}
function eP(e, t, n, r) {
    n == null && (n = XT(e) || 0);
    var o = ZT(e, n, r)
      , i = Xw(e, "transitionend", t);
    return function() {
        o(),
        i()
    }
}
function wm(e, t) {
    const n = qw(e, t) || ""
      , r = n.indexOf("ms") === -1 ? 1e3 : 1;
    return parseFloat(n) * r
}
function tP(e, t) {
    const n = wm(e, "transitionDuration")
      , r = wm(e, "transitionDelay")
      , o = eP(e, i=>{
        i.target === e && (o(),
        t(i))
    }
    , n + r)
}
function nP(e) {
    e.offsetHeight
}
var bm = function(t) {
    return !t || typeof t == "function" ? t : function(n) {
        t.current = n
    }
};
function rP(e, t) {
    var n = bm(e)
      , r = bm(t);
    return function(o) {
        n && n(o),
        r && r(o)
    }
}
function oP(e, t) {
    return P.useMemo(function() {
        return rP(e, t)
    }, [e, t])
}
function iP(e) {
    return e && "setState"in e ? Bi.findDOMNode(e) : e ?? null
}
const sP = qr.forwardRef(({onEnter: e, onEntering: t, onEntered: n, onExit: r, onExiting: o, onExited: i, addEndListener: s, children: a, childRef: l, ...c},d)=>{
    const m = P.useRef(null)
      , g = oP(m, l)
      , x = T=>{
        g(iP(T))
    }
      , w = T=>R=>{
        T && m.current && T(m.current, R)
    }
      , y = P.useCallback(w(e), [e])
      , E = P.useCallback(w(t), [t])
      , h = P.useCallback(w(n), [n])
      , v = P.useCallback(w(r), [r])
      , b = P.useCallback(w(o), [o])
      , C = P.useCallback(w(i), [i])
      , O = P.useCallback(w(s), [s]);
    return k.jsx(qT, {
        ref: d,
        ...c,
        onEnter: y,
        onEntered: h,
        onEntering: E,
        onExit: v,
        onExited: C,
        onExiting: b,
        addEndListener: O,
        nodeRef: m,
        children: typeof a == "function" ? (T,R)=>a(T, {
            ...R,
            ref: x
        }) : qr.cloneElement(a, {
            ref: x
        })
    })
}
)
  , aP = sP;
function lP(e) {
    var t = P.useRef(e);
    return P.useEffect(function() {
        t.current = e
    }, [e]),
    t
}
function Zw(e) {
    var t = lP(e);
    return P.useCallback(function() {
        return t.current && t.current.apply(t, arguments)
    }, [t])
}
const uP = ["as", "disabled"];
function cP(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), o, i;
    for (i = 0; i < r.length; i++)
        o = r[i],
        !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}
function fP(e) {
    return !e || e.trim() === "#"
}
function Od({tagName: e, disabled: t, href: n, target: r, rel: o, role: i, onClick: s, tabIndex: a=0, type: l}) {
    e || (n != null || r != null || o != null ? e = "a" : e = "button");
    const c = {
        tagName: e
    };
    if (e === "button")
        return [{
            type: l || "button",
            disabled: t
        }, c];
    const d = g=>{
        if ((t || e === "a" && fP(n)) && g.preventDefault(),
        t) {
            g.stopPropagation();
            return
        }
        s == null || s(g)
    }
      , m = g=>{
        g.key === " " && (g.preventDefault(),
        d(g))
    }
    ;
    return e === "a" && (n || (n = "#"),
    t && (n = void 0)),
    [{
        role: i ?? "button",
        disabled: void 0,
        tabIndex: t ? void 0 : a,
        href: n,
        target: e === "a" ? r : void 0,
        "aria-disabled": t || void 0,
        rel: e === "a" ? o : void 0,
        onClick: d,
        onKeyDown: m
    }, c]
}
const dP = P.forwardRef((e,t)=>{
    let {as: n, disabled: r} = e
      , o = cP(e, uP);
    const [i,{tagName: s}] = Od(Object.assign({
        tagName: n,
        disabled: r
    }, o));
    return k.jsx(s, Object.assign({}, o, i, {
        ref: t
    }))
}
);
dP.displayName = "Button";
const pP = ["onKeyDown"];
function hP(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), o, i;
    for (i = 0; i < r.length; i++)
        o = r[i],
        !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}
function mP(e) {
    return !e || e.trim() === "#"
}
const e0 = P.forwardRef((e,t)=>{
    let {onKeyDown: n} = e
      , r = hP(e, pP);
    const [o] = Od(Object.assign({
        tagName: "a"
    }, r))
      , i = Zw(s=>{
        o.onKeyDown(s),
        n == null || n(s)
    }
    );
    return mP(r.href) || r.role === "button" ? k.jsx("a", Object.assign({
        ref: t
    }, r, o, {
        onKeyDown: i
    })) : k.jsx("a", Object.assign({
        ref: t
    }, r, {
        onKeyDown: n
    }))
}
);
e0.displayName = "Anchor";
const gP = e0
  , vP = {
    [vr]: "show",
    [Kr]: "show"
}
  , t0 = P.forwardRef(({className: e, children: t, transitionClasses: n={}, onEnter: r, ...o},i)=>{
    const s = {
        in: !1,
        timeout: 300,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        ...o
    }
      , a = P.useCallback((l,c)=>{
        nP(l),
        r == null || r(l, c)
    }
    , [r]);
    return k.jsx(aP, {
        ref: i,
        addEndListener: tP,
        ...s,
        onEnter: a,
        childRef: t.ref,
        children: (l,c)=>P.cloneElement(t, {
            ...c,
            className: Ce("fade", e, t.props.className, vP[l], n[l])
        })
    })
}
);
t0.displayName = "Fade";
const xm = t0
  , yP = {
    "aria-label": be.string,
    onClick: be.func,
    variant: be.oneOf(["white"])
}
  , $d = P.forwardRef(({className: e, variant: t, "aria-label": n="Close", ...r},o)=>k.jsx("button", {
    ref: o,
    type: "button",
    className: Ce("btn-close", t && `btn-close-${t}`, e),
    "aria-label": n,
    ...r
}));
$d.displayName = "CloseButton";
$d.propTypes = yP;
const wP = $d
  , Id = e=>P.forwardRef((t,n)=>k.jsx("div", {
    ...t,
    ref: n,
    className: Ce(t.className, e)
}));
var bP = /-(.)/g;
function xP(e) {
    return e.replace(bP, function(t, n) {
        return n.toUpperCase()
    })
}
const SP = e=>e[0].toUpperCase() + xP(e).slice(1);
function kn(e, {displayName: t=SP(e), Component: n, defaultProps: r}={}) {
    const o = P.forwardRef(({className: i, bsPrefix: s, as: a=n || "div", ...l},c)=>{
        const d = {
            ...r,
            ...l
        }
          , m = Ve(s, e);
        return k.jsx(a, {
            ref: c,
            className: Ce(i, m),
            ...d
        })
    }
    );
    return o.displayName = t,
    o
}
const n0 = Id("h4");
n0.displayName = "DivStyledAsH4";
const EP = kn("alert-heading", {
    Component: n0
})
  , CP = kn("alert-link", {
    Component: gP
})
  , r0 = P.forwardRef((e,t)=>{
    const {bsPrefix: n, show: r=!0, closeLabel: o="Close alert", closeVariant: i, className: s, children: a, variant: l="primary", onClose: c, dismissible: d, transition: m=xm, ...g} = OT(e, {
        show: "onClose"
    })
      , x = Ve(n, "alert")
      , w = Zw(h=>{
        c && c(!1, h)
    }
    )
      , y = m === !0 ? xm : m
      , E = k.jsxs("div", {
        role: "alert",
        ...y ? void 0 : g,
        ref: t,
        className: Ce(s, x, l && `${x}-${l}`, d && `${x}-dismissible`),
        children: [d && k.jsx(wP, {
            onClick: w,
            "aria-label": o,
            variant: i
        }), a]
    });
    return y ? k.jsx(y, {
        unmountOnExit: !0,
        ...g,
        ref: void 0,
        in: r,
        children: E
    }) : r ? E : null
}
);
r0.displayName = "Alert";
const ul = Object.assign(r0, {
    Link: CP,
    Heading: EP
})
  , o0 = P.forwardRef(({as: e, bsPrefix: t, variant: n="primary", size: r, active: o=!1, disabled: i=!1, className: s, ...a},l)=>{
    const c = Ve(t, "btn")
      , [d,{tagName: m}] = Od({
        tagName: e,
        disabled: i,
        ...a
    })
      , g = m;
    return k.jsx(g, {
        ...d,
        ...a,
        ref: l,
        disabled: i,
        className: Ce(s, c, o && "active", n && `${c}-${n}`, r && `${c}-${r}`, a.href && i && "disabled")
    })
}
);
o0.displayName = "Button";
const dt = o0
  , i0 = P.forwardRef(({bsPrefix: e, className: t, variant: n, as: r="img", ...o},i)=>{
    const s = Ve(e, "card-img");
    return k.jsx(r, {
        ref: i,
        className: Ce(n ? `${s}-${n}` : s, t),
        ...o
    })
}
);
i0.displayName = "CardImg";
const kP = i0
  , s0 = P.createContext(null);
s0.displayName = "CardHeaderContext";
const _P = s0
  , a0 = P.forwardRef(({bsPrefix: e, className: t, as: n="div", ...r},o)=>{
    const i = Ve(e, "card-header")
      , s = P.useMemo(()=>({
        cardHeaderBsPrefix: i
    }), [i]);
    return k.jsx(_P.Provider, {
        value: s,
        children: k.jsx(n, {
            ref: o,
            ...r,
            className: Ce(t, i)
        })
    })
}
);
a0.displayName = "CardHeader";
const TP = a0
  , PP = Id("h5")
  , OP = Id("h6")
  , l0 = kn("card-body")
  , $P = kn("card-title", {
    Component: PP
})
  , IP = kn("card-subtitle", {
    Component: OP
})
  , LP = kn("card-link", {
    Component: "a"
})
  , NP = kn("card-text", {
    Component: "p"
})
  , RP = kn("card-footer")
  , AP = kn("card-img-overlay")
  , u0 = P.forwardRef(({bsPrefix: e, className: t, bg: n, text: r, border: o, body: i=!1, children: s, as: a="div", ...l},c)=>{
    const d = Ve(e, "card");
    return k.jsx(a, {
        ref: c,
        ...l,
        className: Ce(t, d, n && `bg-${n}`, r && `text-${r}`, o && `border-${o}`),
        children: i ? k.jsx(l0, {
            children: s
        }) : s
    })
}
);
u0.displayName = "Card";
const cl = Object.assign(u0, {
    Img: kP,
    Title: $P,
    Subtitle: IP,
    Body: l0,
    Link: LP,
    Text: NP,
    Header: TP,
    Footer: RP,
    ImgOverlay: AP
});
function jP(e, t) {
    return P.Children.toArray(e).some(n=>P.isValidElement(n) && n.type === t)
}
function DP({as: e, bsPrefix: t, className: n, ...r}) {
    t = Ve(t, "col");
    const o = Vw()
      , i = Kw()
      , s = []
      , a = [];
    return o.forEach(l=>{
        const c = r[l];
        delete r[l];
        let d, m, g;
        typeof c == "object" && c != null ? {span: d, offset: m, order: g} = c : d = c;
        const x = l !== i ? `-${l}` : "";
        d && s.push(d === !0 ? `${t}${x}` : `${t}${x}-${d}`),
        g != null && a.push(`order ${x}-${g}`),
        m != null && a.push(`offset ${x}-${m}`)
    }
    ),
    [{
        ...r,
        className: Ce(n, ...s, ...a)
    }, {
        as: e,
        bsPrefix: t,
        spans: s
    }]
}
const c0 = P.forwardRef((e,t)=>{
    const [{className: n, ...r},{as: o="div", bsPrefix: i, spans: s}] = DP(e);
    return k.jsx(o, {
        ...r,
        ref: t,
        className: Ce(n, !s.length && i)
    })
}
);
c0.displayName = "Col";
const f0 = c0
  , d0 = P.createContext(null);
d0.displayName = "InputGroupContext";
const MP = d0
  , FP = {
    type: be.string,
    tooltip: be.bool,
    as: be.elementType
}
  , Ld = P.forwardRef(({as: e="div", className: t, type: n="valid", tooltip: r=!1, ...o},i)=>k.jsx(e, {
    ...o,
    ref: i,
    className: Ce(t, `${n}-${r ? "tooltip" : "feedback"}`)
}));
Ld.displayName = "Feedback";
Ld.propTypes = FP;
const p0 = Ld
  , BP = P.createContext({})
  , nr = BP
  , h0 = P.forwardRef(({id: e, bsPrefix: t, className: n, type: r="checkbox", isValid: o=!1, isInvalid: i=!1, as: s="input", ...a},l)=>{
    const {controlId: c} = P.useContext(nr);
    return t = Ve(t, "form-check-input"),
    k.jsx(s, {
        ...a,
        ref: l,
        type: r,
        id: e || c,
        className: Ce(n, t, o && "is-valid", i && "is-invalid")
    })
}
);
h0.displayName = "FormCheckInput";
const Hl = h0
  , m0 = P.forwardRef(({bsPrefix: e, className: t, htmlFor: n, ...r},o)=>{
    const {controlId: i} = P.useContext(nr);
    return e = Ve(e, "form-check-label"),
    k.jsx("label", {
        ...r,
        ref: o,
        htmlFor: n || i,
        className: Ce(t, e)
    })
}
);
m0.displayName = "FormCheckLabel";
const lf = m0
  , g0 = P.forwardRef(({id: e, bsPrefix: t, bsSwitchPrefix: n, inline: r=!1, reverse: o=!1, disabled: i=!1, isValid: s=!1, isInvalid: a=!1, feedbackTooltip: l=!1, feedback: c, feedbackType: d, className: m, style: g, title: x="", type: w="checkbox", label: y, children: E, as: h="input", ...v},b)=>{
    t = Ve(t, "form-check"),
    n = Ve(n, "form-switch");
    const {controlId: C} = P.useContext(nr)
      , O = P.useMemo(()=>({
        controlId: e || C
    }), [C, e])
      , T = !E && y != null && y !== !1 || jP(E, lf)
      , R = k.jsx(Hl, {
        ...v,
        type: w === "switch" ? "checkbox" : w,
        ref: b,
        isValid: s,
        isInvalid: a,
        disabled: i,
        as: h
    });
    return k.jsx(nr.Provider, {
        value: O,
        children: k.jsx("div", {
            style: g,
            className: Ce(m, T && t, r && `${t}-inline`, o && `${t}-reverse`, w === "switch" && n),
            children: E || k.jsxs(k.Fragment, {
                children: [R, T && k.jsx(lf, {
                    title: x,
                    children: y
                }), c && k.jsx(p0, {
                    type: d,
                    tooltip: l,
                    children: c
                })]
            })
        })
    })
}
);
g0.displayName = "FormCheck";
const fl = Object.assign(g0, {
    Input: Hl,
    Label: lf
})
  , v0 = P.forwardRef(({bsPrefix: e, type: t, size: n, htmlSize: r, id: o, className: i, isValid: s=!1, isInvalid: a=!1, plaintext: l, readOnly: c, as: d="input", ...m},g)=>{
    const {controlId: x} = P.useContext(nr);
    e = Ve(e, "form-control");
    let w;
    return l ? w = {
        [`${e}-plaintext`]: !0
    } : w = {
        [e]: !0,
        [`${e}-${n}`]: n
    },
    k.jsx(d, {
        ...m,
        type: t,
        size: r,
        ref: g,
        readOnly: c,
        id: o || x,
        className: Ce(i, w, s && "is-valid", a && "is-invalid", t === "color" && `${e}-color`)
    })
}
);
v0.displayName = "FormControl";
const UP = Object.assign(v0, {
    Feedback: p0
})
  , zP = kn("form-floating")
  , y0 = P.forwardRef(({controlId: e, as: t="div", ...n},r)=>{
    const o = P.useMemo(()=>({
        controlId: e
    }), [e]);
    return k.jsx(nr.Provider, {
        value: o,
        children: k.jsx(t, {
            ...n,
            ref: r
        })
    })
}
);
y0.displayName = "FormGroup";
const w0 = y0
  , b0 = P.forwardRef(({as: e="label", bsPrefix: t, column: n=!1, visuallyHidden: r=!1, className: o, htmlFor: i, ...s},a)=>{
    const {controlId: l} = P.useContext(nr);
    t = Ve(t, "form-label");
    let c = "col-form-label";
    typeof n == "string" && (c = `${c} ${c}-${n}`);
    const d = Ce(o, t, r && "visually-hidden", n && c);
    return i = i || l,
    n ? k.jsx(f0, {
        ref: a,
        as: "label",
        className: d,
        htmlFor: i,
        ...s
    }) : k.jsx(e, {
        ref: a,
        className: d,
        htmlFor: i,
        ...s
    })
}
);
b0.displayName = "FormLabel";
const HP = b0
  , x0 = P.forwardRef(({bsPrefix: e, className: t, id: n, ...r},o)=>{
    const {controlId: i} = P.useContext(nr);
    return e = Ve(e, "form-range"),
    k.jsx("input", {
        ...r,
        type: "range",
        ref: o,
        className: Ce(t, e),
        id: n || i
    })
}
);
x0.displayName = "FormRange";
const WP = x0
  , S0 = P.forwardRef(({bsPrefix: e, size: t, htmlSize: n, className: r, isValid: o=!1, isInvalid: i=!1, id: s, ...a},l)=>{
    const {controlId: c} = P.useContext(nr);
    return e = Ve(e, "form-select"),
    k.jsx("select", {
        ...a,
        size: n,
        ref: l,
        className: Ce(r, e, t && `${e}-${t}`, o && "is-valid", i && "is-invalid"),
        id: s || c
    })
}
);
S0.displayName = "FormSelect";
const VP = S0
  , E0 = P.forwardRef(({bsPrefix: e, className: t, as: n="small", muted: r, ...o},i)=>(e = Ve(e, "form-text"),
k.jsx(n, {
    ...o,
    ref: i,
    className: Ce(t, e, r && "text-muted")
})));
E0.displayName = "FormText";
const KP = E0
  , C0 = P.forwardRef((e,t)=>k.jsx(fl, {
    ...e,
    ref: t,
    type: "switch"
}));
C0.displayName = "Switch";
const qP = Object.assign(C0, {
    Input: fl.Input,
    Label: fl.Label
})
  , k0 = P.forwardRef(({bsPrefix: e, className: t, children: n, controlId: r, label: o, ...i},s)=>(e = Ve(e, "form-floating"),
k.jsxs(w0, {
    ref: s,
    className: Ce(t, e),
    controlId: r,
    ...i,
    children: [n, k.jsx("label", {
        htmlFor: r,
        children: o
    })]
})));
k0.displayName = "FloatingLabel";
const YP = k0
  , GP = {
    _ref: be.any,
    validated: be.bool,
    as: be.elementType
}
  , Nd = P.forwardRef(({className: e, validated: t, as: n="form", ...r},o)=>k.jsx(n, {
    ...r,
    ref: o,
    className: Ce(e, t && "was-validated")
}));
Nd.displayName = "Form";
Nd.propTypes = GP;
const _0 = Object.assign(Nd, {
    Group: w0,
    Control: UP,
    Floating: zP,
    Check: fl,
    Switch: qP,
    Label: HP,
    Text: KP,
    Range: WP,
    Select: VP,
    FloatingLabel: YP
})
  , T0 = P.forwardRef(({bsPrefix: e, fluid: t=!1, as: n="div", className: r, ...o},i)=>{
    const s = Ve(e, "container")
      , a = typeof t == "string" ? `-${t}` : "-fluid";
    return k.jsx(n, {
        ref: i,
        ...o,
        className: Ce(r, t ? `${s}${a}` : s)
    })
}
);
T0.displayName = "Container";
const Rd = T0;
be.string,
be.bool,
be.bool,
be.bool,
be.bool;
const P0 = P.forwardRef(({bsPrefix: e, className: t, fluid: n=!1, rounded: r=!1, roundedCircle: o=!1, thumbnail: i=!1, ...s},a)=>(e = Ve(e, "img"),
k.jsx("img", {
    ref: a,
    ...s,
    className: Ce(t, n && `${e}-fluid`, r && "rounded", o && "rounded-circle", i && `${e}-thumbnail`)
})));
P0.displayName = "Image";
const O0 = P0
  , Ad = kn("input-group-text", {
    Component: "span"
})
  , QP = e=>k.jsx(Ad, {
    children: k.jsx(Hl, {
        type: "checkbox",
        ...e
    })
})
  , JP = e=>k.jsx(Ad, {
    children: k.jsx(Hl, {
        type: "radio",
        ...e
    })
})
  , $0 = P.forwardRef(({bsPrefix: e, size: t, hasValidation: n, className: r, as: o="div", ...i},s)=>{
    e = Ve(e, "input-group");
    const a = P.useMemo(()=>({}), []);
    return k.jsx(MP.Provider, {
        value: a,
        children: k.jsx(o, {
            ref: s,
            ...i,
            className: Ce(r, e, t && `${e}-${t}`, n && "has-validation")
        })
    })
}
);
$0.displayName = "InputGroup";
const XP = Object.assign($0, {
    Text: Ad,
    Radio: JP,
    Checkbox: QP
})
  , I0 = P.forwardRef(({bsPrefix: e, className: t, as: n="div", ...r},o)=>{
    const i = Ve(e, "row")
      , s = Vw()
      , a = Kw()
      , l = `${i}-cols`
      , c = [];
    return s.forEach(d=>{
        const m = r[d];
        delete r[d];
        let g;
        m != null && typeof m == "object" ? {cols: g} = m : g = m;
        const x = d !== a ? `-${d}` : "";
        g != null && c.push(`${l}${x}-${g}`)
    }
    ),
    k.jsx(n, {
        ref: o,
        ...r,
        className: Ce(t, i, ...c)
    })
}
);
I0.displayName = "Row";
const Sm = I0
  , ZP = ()=>{}
  , L0 = P.forwardRef(({bsPrefix: e, name: t, className: n, checked: r, type: o, onChange: i, value: s, disabled: a, id: l, inputRef: c, ...d},m)=>(e = Ve(e, "btn-check"),
k.jsxs(k.Fragment, {
    children: [k.jsx("input", {
        className: e,
        name: t,
        type: o,
        value: s,
        ref: c,
        autoComplete: "off",
        checked: !!r,
        disabled: !!a,
        onChange: i || ZP,
        id: l
    }), k.jsx(dt, {
        ...d,
        ref: m,
        className: Ce(n, a && "disabled"),
        type: void 0,
        role: void 0,
        as: "label",
        htmlFor: l
    })]
})));
L0.displayName = "ToggleButton";
const eO = L0;
var N0 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(zt, function() {
        var n = 1e3
          , r = 6e4
          , o = 36e5
          , i = "millisecond"
          , s = "second"
          , a = "minute"
          , l = "hour"
          , c = "day"
          , d = "week"
          , m = "month"
          , g = "quarter"
          , x = "year"
          , w = "date"
          , y = "Invalid Date"
          , E = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
          , h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
          , v = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: function(X) {
                var U = ["th", "st", "nd", "rd"]
                  , B = X % 100;
                return "[" + X + (U[(B - 20) % 10] || U[B] || U[0]) + "]"
            }
        }
          , b = function(X, U, B) {
            var G = String(X);
            return !G || G.length >= U ? X : "" + Array(U + 1 - G.length).join(B) + X
        }
          , C = {
            s: b,
            z: function(X) {
                var U = -X.utcOffset()
                  , B = Math.abs(U)
                  , G = Math.floor(B / 60)
                  , W = B % 60;
                return (U <= 0 ? "+" : "-") + b(G, 2, "0") + ":" + b(W, 2, "0")
            },
            m: function X(U, B) {
                if (U.date() < B.date())
                    return -X(B, U);
                var G = 12 * (B.year() - U.year()) + (B.month() - U.month())
                  , W = U.clone().add(G, m)
                  , N = B - W < 0
                  , F = U.clone().add(G + (N ? -1 : 1), m);
                return +(-(G + (B - W) / (N ? W - F : F - W)) || 0)
            },
            a: function(X) {
                return X < 0 ? Math.ceil(X) || 0 : Math.floor(X)
            },
            p: function(X) {
                return {
                    M: m,
                    y: x,
                    w: d,
                    d: c,
                    D: w,
                    h: l,
                    m: a,
                    s,
                    ms: i,
                    Q: g
                }[X] || String(X || "").toLowerCase().replace(/s$/, "")
            },
            u: function(X) {
                return X === void 0
            }
        }
          , O = "en"
          , T = {};
        T[O] = v;
        var R = function(X) {
            return X instanceof he
        }
          , D = function X(U, B, G) {
            var W;
            if (!U)
                return O;
            if (typeof U == "string") {
                var N = U.toLowerCase();
                T[N] && (W = N),
                B && (T[N] = B,
                W = N);
                var F = U.split("-");
                if (!W && F.length > 1)
                    return X(F[0])
            } else {
                var V = U.name;
                T[V] = U,
                W = V
            }
            return !G && W && (O = W),
            W || !G && O
        }
          , H = function(X, U) {
            if (R(X))
                return X.clone();
            var B = typeof U == "object" ? U : {};
            return B.date = X,
            B.args = arguments,
            new he(B)
        }
          , z = C;
        z.l = D,
        z.i = R,
        z.w = function(X, U) {
            return H(X, {
                locale: U.$L,
                utc: U.$u,
                x: U.$x,
                $offset: U.$offset
            })
        }
        ;
        var he = function() {
            function X(B) {
                this.$L = D(B.locale, null, !0),
                this.parse(B)
            }
            var U = X.prototype;
            return U.parse = function(B) {
                this.$d = function(G) {
                    var W = G.date
                      , N = G.utc;
                    if (W === null)
                        return new Date(NaN);
                    if (z.u(W))
                        return new Date;
                    if (W instanceof Date)
                        return new Date(W);
                    if (typeof W == "string" && !/Z$/i.test(W)) {
                        var F = W.match(E);
                        if (F) {
                            var V = F[2] - 1 || 0
                              , Q = (F[7] || "0").substring(0, 3);
                            return N ? new Date(Date.UTC(F[1], V, F[3] || 1, F[4] || 0, F[5] || 0, F[6] || 0, Q)) : new Date(F[1],V,F[3] || 1,F[4] || 0,F[5] || 0,F[6] || 0,Q)
                        }
                    }
                    return new Date(W)
                }(B),
                this.$x = B.x || {},
                this.init()
            }
            ,
            U.init = function() {
                var B = this.$d;
                this.$y = B.getFullYear(),
                this.$M = B.getMonth(),
                this.$D = B.getDate(),
                this.$W = B.getDay(),
                this.$H = B.getHours(),
                this.$m = B.getMinutes(),
                this.$s = B.getSeconds(),
                this.$ms = B.getMilliseconds()
            }
            ,
            U.$utils = function() {
                return z
            }
            ,
            U.isValid = function() {
                return this.$d.toString() !== y
            }
            ,
            U.isSame = function(B, G) {
                var W = H(B);
                return this.startOf(G) <= W && W <= this.endOf(G)
            }
            ,
            U.isAfter = function(B, G) {
                return H(B) < this.startOf(G)
            }
            ,
            U.isBefore = function(B, G) {
                return this.endOf(G) < H(B)
            }
            ,
            U.$g = function(B, G, W) {
                return z.u(B) ? this[G] : this.set(W, B)
            }
            ,
            U.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }
            ,
            U.valueOf = function() {
                return this.$d.getTime()
            }
            ,
            U.startOf = function(B, G) {
                var W = this
                  , N = !!z.u(G) || G
                  , F = z.p(B)
                  , V = function(wt, ve) {
                    var Ge = z.w(W.$u ? Date.UTC(W.$y, ve, wt) : new Date(W.$y,ve,wt), W);
                    return N ? Ge : Ge.endOf(c)
                }
                  , Q = function(wt, ve) {
                    return z.w(W.toDate()[wt].apply(W.toDate("s"), (N ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ve)), W)
                }
                  , re = this.$W
                  , ke = this.$M
                  , Ue = this.$D
                  , _e = "set" + (this.$u ? "UTC" : "");
                switch (F) {
                case x:
                    return N ? V(1, 0) : V(31, 11);
                case m:
                    return N ? V(1, ke) : V(0, ke + 1);
                case d:
                    var Ye = this.$locale().weekStart || 0
                      , Dt = (re < Ye ? re + 7 : re) - Ye;
                    return V(N ? Ue - Dt : Ue + (6 - Dt), ke);
                case c:
                case w:
                    return Q(_e + "Hours", 0);
                case l:
                    return Q(_e + "Minutes", 1);
                case a:
                    return Q(_e + "Seconds", 2);
                case s:
                    return Q(_e + "Milliseconds", 3);
                default:
                    return this.clone()
                }
            }
            ,
            U.endOf = function(B) {
                return this.startOf(B, !1)
            }
            ,
            U.$set = function(B, G) {
                var W, N = z.p(B), F = "set" + (this.$u ? "UTC" : ""), V = (W = {},
                W[c] = F + "Date",
                W[w] = F + "Date",
                W[m] = F + "Month",
                W[x] = F + "FullYear",
                W[l] = F + "Hours",
                W[a] = F + "Minutes",
                W[s] = F + "Seconds",
                W[i] = F + "Milliseconds",
                W)[N], Q = N === c ? this.$D + (G - this.$W) : G;
                if (N === m || N === x) {
                    var re = this.clone().set(w, 1);
                    re.$d[V](Q),
                    re.init(),
                    this.$d = re.set(w, Math.min(this.$D, re.daysInMonth())).$d
                } else
                    V && this.$d[V](Q);
                return this.init(),
                this
            }
            ,
            U.set = function(B, G) {
                return this.clone().$set(B, G)
            }
            ,
            U.get = function(B) {
                return this[z.p(B)]()
            }
            ,
            U.add = function(B, G) {
                var W, N = this;
                B = Number(B);
                var F = z.p(G)
                  , V = function(ke) {
                    var Ue = H(N);
                    return z.w(Ue.date(Ue.date() + Math.round(ke * B)), N)
                };
                if (F === m)
                    return this.set(m, this.$M + B);
                if (F === x)
                    return this.set(x, this.$y + B);
                if (F === c)
                    return V(1);
                if (F === d)
                    return V(7);
                var Q = (W = {},
                W[a] = r,
                W[l] = o,
                W[s] = n,
                W)[F] || 1
                  , re = this.$d.getTime() + B * Q;
                return z.w(re, this)
            }
            ,
            U.subtract = function(B, G) {
                return this.add(-1 * B, G)
            }
            ,
            U.format = function(B) {
                var G = this
                  , W = this.$locale();
                if (!this.isValid())
                    return W.invalidDate || y;
                var N = B || "YYYY-MM-DDTHH:mm:ssZ"
                  , F = z.z(this)
                  , V = this.$H
                  , Q = this.$m
                  , re = this.$M
                  , ke = W.weekdays
                  , Ue = W.months
                  , _e = function(ve, Ge, jr, Re) {
                    return ve && (ve[Ge] || ve(G, N)) || jr[Ge].slice(0, Re)
                }
                  , Ye = function(ve) {
                    return z.s(V % 12 || 12, ve, "0")
                }
                  , Dt = W.meridiem || function(ve, Ge, jr) {
                    var Re = ve < 12 ? "AM" : "PM";
                    return jr ? Re.toLowerCase() : Re
                }
                  , wt = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: re + 1,
                    MM: z.s(re + 1, 2, "0"),
                    MMM: _e(W.monthsShort, re, Ue, 3),
                    MMMM: _e(Ue, re),
                    D: this.$D,
                    DD: z.s(this.$D, 2, "0"),
                    d: String(this.$W),
                    dd: _e(W.weekdaysMin, this.$W, ke, 2),
                    ddd: _e(W.weekdaysShort, this.$W, ke, 3),
                    dddd: ke[this.$W],
                    H: String(V),
                    HH: z.s(V, 2, "0"),
                    h: Ye(1),
                    hh: Ye(2),
                    a: Dt(V, Q, !0),
                    A: Dt(V, Q, !1),
                    m: String(Q),
                    mm: z.s(Q, 2, "0"),
                    s: String(this.$s),
                    ss: z.s(this.$s, 2, "0"),
                    SSS: z.s(this.$ms, 3, "0"),
                    Z: F
                };
                return N.replace(h, function(ve, Ge) {
                    return Ge || wt[ve] || F.replace(":", "")
                })
            }
            ,
            U.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }
            ,
            U.diff = function(B, G, W) {
                var N, F = z.p(G), V = H(B), Q = (V.utcOffset() - this.utcOffset()) * r, re = this - V, ke = z.m(this, V);
                return ke = (N = {},
                N[x] = ke / 12,
                N[m] = ke,
                N[g] = ke / 3,
                N[d] = (re - Q) / 6048e5,
                N[c] = (re - Q) / 864e5,
                N[l] = re / o,
                N[a] = re / r,
                N[s] = re / n,
                N)[F] || re,
                W ? ke : z.a(ke)
            }
            ,
            U.daysInMonth = function() {
                return this.endOf(m).$D
            }
            ,
            U.$locale = function() {
                return T[this.$L]
            }
            ,
            U.locale = function(B, G) {
                if (!B)
                    return this.$L;
                var W = this.clone()
                  , N = D(B, G, !0);
                return N && (W.$L = N),
                W
            }
            ,
            U.clone = function() {
                return z.w(this.$d, this)
            }
            ,
            U.toDate = function() {
                return new Date(this.valueOf())
            }
            ,
            U.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }
            ,
            U.toISOString = function() {
                return this.$d.toISOString()
            }
            ,
            U.toString = function() {
                return this.$d.toUTCString()
            }
            ,
            X
        }()
          , Ne = he.prototype;
        return H.prototype = Ne,
        [["$ms", i], ["$s", s], ["$m", a], ["$H", l], ["$W", c], ["$M", m], ["$y", x], ["$D", w]].forEach(function(X) {
            Ne[X[1]] = function(U) {
                return this.$g(U, X[0], X[1])
            }
        }),
        H.extend = function(X, U) {
            return X.$i || (X(U, he, H),
            X.$i = !0),
            H
        }
        ,
        H.locale = D,
        H.isDayjs = R,
        H.unix = function(X) {
            return H(1e3 * X)
        }
        ,
        H.en = T[O],
        H.Ls = T,
        H.p = {},
        H
    })
}
)(N0);
var R0 = N0.exports;
const js = Mn(R0);
var A0 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(zt, function() {
        return function(n, r, o) {
            n = n || {};
            var i = r.prototype
              , s = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            };
            function a(c, d, m, g) {
                return i.fromToBase(c, d, m, g)
            }
            o.en.relativeTime = s,
            i.fromToBase = function(c, d, m, g, x) {
                for (var w, y, E, h = m.$locale().relativeTime || s, v = n.thresholds || [{
                    l: "s",
                    r: 44,
                    d: "second"
                }, {
                    l: "m",
                    r: 89
                }, {
                    l: "mm",
                    r: 44,
                    d: "minute"
                }, {
                    l: "h",
                    r: 89
                }, {
                    l: "hh",
                    r: 21,
                    d: "hour"
                }, {
                    l: "d",
                    r: 35
                }, {
                    l: "dd",
                    r: 25,
                    d: "day"
                }, {
                    l: "M",
                    r: 45
                }, {
                    l: "MM",
                    r: 10,
                    d: "month"
                }, {
                    l: "y",
                    r: 17
                }, {
                    l: "yy",
                    d: "year"
                }], b = v.length, C = 0; C < b; C += 1) {
                    var O = v[C];
                    O.d && (w = g ? o(c).diff(m, O.d, !0) : m.diff(c, O.d, !0));
                    var T = (n.rounding || Math.round)(Math.abs(w));
                    if (E = w > 0,
                    T <= O.r || !O.r) {
                        T <= 1 && C > 0 && (O = v[C - 1]);
                        var R = h[O.l];
                        x && (T = x("" + T)),
                        y = typeof R == "string" ? R.replace("%d", T) : R(T, d, O.l, E);
                        break
                    }
                }
                if (d)
                    return y;
                var D = E ? h.future : h.past;
                return typeof D == "function" ? D(y) : D.replace("%s", y)
            }
            ,
            i.to = function(c, d) {
                return a(c, d, this, !0)
            }
            ,
            i.from = function(c, d) {
                return a(c, d, this)
            }
            ;
            var l = function(c) {
                return c.$u ? o.utc() : o()
            };
            i.toNow = function(c) {
                return this.to(l(this), c)
            }
            ,
            i.fromNow = function(c) {
                return this.from(l(this), c)
            }
        }
    })
}
)(A0);
var tO = A0.exports;
const nO = Mn(tO);
var rO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(R0)
    }
    )(zt, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var o = r(n)
          , i = {
            name: "th",
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
            formats: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H:mm",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            },
            ordinal: function(s) {
                return s + "."
            }
        };
        return o.default.locale(i, null, !0),
        i
    })
}
)(rO);
var j0 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(zt, function() {
        var n = "minute"
          , r = /[+-]\d\d(?::?\d\d)?/g
          , o = /([+-]|\d\d)/g;
        return function(i, s, a) {
            var l = s.prototype;
            a.utc = function(y) {
                var E = {
                    date: y,
                    utc: !0,
                    args: arguments
                };
                return new s(E)
            }
            ,
            l.utc = function(y) {
                var E = a(this.toDate(), {
                    locale: this.$L,
                    utc: !0
                });
                return y ? E.add(this.utcOffset(), n) : E
            }
            ,
            l.local = function() {
                return a(this.toDate(), {
                    locale: this.$L,
                    utc: !1
                })
            }
            ;
            var c = l.parse;
            l.parse = function(y) {
                y.utc && (this.$u = !0),
                this.$utils().u(y.$offset) || (this.$offset = y.$offset),
                c.call(this, y)
            }
            ;
            var d = l.init;
            l.init = function() {
                if (this.$u) {
                    var y = this.$d;
                    this.$y = y.getUTCFullYear(),
                    this.$M = y.getUTCMonth(),
                    this.$D = y.getUTCDate(),
                    this.$W = y.getUTCDay(),
                    this.$H = y.getUTCHours(),
                    this.$m = y.getUTCMinutes(),
                    this.$s = y.getUTCSeconds(),
                    this.$ms = y.getUTCMilliseconds()
                } else
                    d.call(this)
            }
            ;
            var m = l.utcOffset;
            l.utcOffset = function(y, E) {
                var h = this.$utils().u;
                if (h(y))
                    return this.$u ? 0 : h(this.$offset) ? m.call(this) : this.$offset;
                if (typeof y == "string" && (y = function(O) {
                    O === void 0 && (O = "");
                    var T = O.match(r);
                    if (!T)
                        return null;
                    var R = ("" + T[0]).match(o) || ["-", 0, 0]
                      , D = R[0]
                      , H = 60 * +R[1] + +R[2];
                    return H === 0 ? 0 : D === "+" ? H : -H
                }(y),
                y === null))
                    return this;
                var v = Math.abs(y) <= 16 ? 60 * y : y
                  , b = this;
                if (E)
                    return b.$offset = v,
                    b.$u = y === 0,
                    b;
                if (y !== 0) {
                    var C = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                    (b = this.local().add(v + C, n)).$offset = v,
                    b.$x.$localOffset = C
                } else
                    b = this.utc();
                return b
            }
            ;
            var g = l.format;
            l.format = function(y) {
                var E = y || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                return g.call(this, E)
            }
            ,
            l.valueOf = function() {
                var y = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
                return this.$d.valueOf() - 6e4 * y
            }
            ,
            l.isUTC = function() {
                return !!this.$u
            }
            ,
            l.toISOString = function() {
                return this.toDate().toISOString()
            }
            ,
            l.toString = function() {
                return this.toDate().toUTCString()
            }
            ;
            var x = l.toDate;
            l.toDate = function(y) {
                return y === "s" && this.$offset ? a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : x.call(this)
            }
            ;
            var w = l.diff;
            l.diff = function(y, E, h) {
                if (y && this.$u === y.$u)
                    return w.call(this, y, E, h);
                var v = this.local()
                  , b = a(y).local();
                return w.call(v, b, E, h)
            }
        }
    })
}
)(j0);
var oO = j0.exports;
const iO = Mn(oO);
var D0 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(zt, function() {
        var n = {
            year: 0,
            month: 1,
            day: 2,
            hour: 3,
            minute: 4,
            second: 5
        }
          , r = {};
        return function(o, i, s) {
            var a, l = function(g, x, w) {
                w === void 0 && (w = {});
                var y = new Date(g)
                  , E = function(h, v) {
                    v === void 0 && (v = {});
                    var b = v.timeZoneName || "short"
                      , C = h + "|" + b
                      , O = r[C];
                    return O || (O = new Intl.DateTimeFormat("en-US",{
                        hour12: !1,
                        timeZone: h,
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        timeZoneName: b
                    }),
                    r[C] = O),
                    O
                }(x, w);
                return E.formatToParts(y)
            }, c = function(g, x) {
                for (var w = l(g, x), y = [], E = 0; E < w.length; E += 1) {
                    var h = w[E]
                      , v = h.type
                      , b = h.value
                      , C = n[v];
                    C >= 0 && (y[C] = parseInt(b, 10))
                }
                var O = y[3]
                  , T = O === 24 ? 0 : O
                  , R = y[0] + "-" + y[1] + "-" + y[2] + " " + T + ":" + y[4] + ":" + y[5] + ":000"
                  , D = +g;
                return (s.utc(R).valueOf() - (D -= D % 1e3)) / 6e4
            }, d = i.prototype;
            d.tz = function(g, x) {
                g === void 0 && (g = a);
                var w = this.utcOffset()
                  , y = this.toDate()
                  , E = y.toLocaleString("en-US", {
                    timeZone: g
                })
                  , h = Math.round((y - new Date(E)) / 1e3 / 60)
                  , v = s(E).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(y.getTimezoneOffset() / 15) - h, !0);
                if (x) {
                    var b = v.utcOffset();
                    v = v.add(w - b, "minute")
                }
                return v.$x.$timezone = g,
                v
            }
            ,
            d.offsetName = function(g) {
                var x = this.$x.$timezone || s.tz.guess()
                  , w = l(this.valueOf(), x, {
                    timeZoneName: g
                }).find(function(y) {
                    return y.type.toLowerCase() === "timezonename"
                });
                return w && w.value
            }
            ;
            var m = d.startOf;
            d.startOf = function(g, x) {
                if (!this.$x || !this.$x.$timezone)
                    return m.call(this, g, x);
                var w = s(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
                return m.call(w, g, x).tz(this.$x.$timezone, !0)
            }
            ,
            s.tz = function(g, x, w) {
                var y = w && x
                  , E = w || x || a
                  , h = c(+s(), E);
                if (typeof g != "string")
                    return s(g).tz(E);
                var v = function(T, R, D) {
                    var H = T - 60 * R * 1e3
                      , z = c(H, D);
                    if (R === z)
                        return [H, R];
                    var he = c(H -= 60 * (z - R) * 1e3, D);
                    return z === he ? [H, z] : [T - 60 * Math.min(z, he) * 1e3, Math.max(z, he)]
                }(s.utc(g, y).valueOf(), h, E)
                  , b = v[0]
                  , C = v[1]
                  , O = s(b).utcOffset(C);
                return O.$x.$timezone = E,
                O
            }
            ,
            s.tz.guess = function() {
                return Intl.DateTimeFormat().resolvedOptions().timeZone
            }
            ,
            s.tz.setDefault = function(g) {
                a = g
            }
        }
    })
}
)(D0);
var sO = D0.exports;
const aO = Mn(sO);
js.extend(iO);
js.extend(nO);
js.extend(aO);
js.locale("th");
const lO = e=>js.unix(e).format("HH:mm DD-MM-YYYY")
  , Em = e=>new Intl.NumberFormat("th-TH",{
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 2,
    roundingIncrement: 5
}).format(e || 0)
  , uO = e=>{
    const t = ["00", "11", "22", "33", "44", "55", "66", "77", "88", "99"];
    let n = [...e];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        t.includes(o) || n.push(o.split("").reverse().join(""))
    }
    return n
}
  , cO = e=>{
    let t = e
      , n = []
      , r = []
      , o = [];
    n[0] = t.substr(0, 1) + t.substr(1, 1),
    n[1] = t.substr(1, 1) + t.substr(0, 1);
    let i = t.substr(2, 1);
    for (let a = 0; a <= 2 - 1; a++)
        r[0] = n[a].substr(0, 1),
        r[1] = n[a].substr(1, 1),
        o.push(i + r[0] + r[1]),
        o.push(r[0] + i + r[1]),
        o.push(r[0] + r[1] + i);
    return [...new Set(o)]
}
  , fO = e=>{
    let t = [], n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], r, o;
    for (const s of n)
        r = e + s,
        o = s + e,
        t.push(r, o);
    return [...new Set(t)]
}
  , M0 = e=>{
    switch (e) {
    case "3_up":
        return "3 ตัวบน";
    case "3_todd":
        return "3 ตัวโต๊ด";
    case "2_up":
        return "2 ตัวบน";
    case "2_down":
        return "2 ตัวล่าง";
    case "run_up":
        return "วิ่งบน";
    case "run_down":
        return "วิ่งล่าง";
    default:
        return "ไม่พบประเภทการแทง"
    }
}
;
var F0 = {
    exports: {}
};
/*!
* sweetalert2 v11.7.3
* Released under the MIT License.
*/
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(zt, function() {
        var n = {
            awaitingPromise: new WeakMap,
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        };
        const r = "swal2-"
          , o = u=>{
            const f = {};
            for (const p in u)
                f[u[p]] = r + u[p];
            return f
        }
          , i = o(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"])
          , s = o(["success", "warning", "info", "question", "error"])
          , a = "SweetAlert2:"
          , l = u=>{
            const f = [];
            for (let p = 0; p < u.length; p++)
                f.indexOf(u[p]) === -1 && f.push(u[p]);
            return f
        }
          , c = u=>u.charAt(0).toUpperCase() + u.slice(1)
          , d = u=>{
            console.warn(`${a} ${typeof u == "object" ? u.join(" ") : u}`)
        }
          , m = u=>{
            console.error(`${a} ${u}`)
        }
          , g = []
          , x = u=>{
            g.includes(u) || (g.push(u),
            d(u))
        }
          , w = (u,f)=>{
            x(`"${u}" is deprecated and will be removed in the next major release. Please use "${f}" instead.`)
        }
          , y = u=>typeof u == "function" ? u() : u
          , E = u=>u && typeof u.toPromise == "function"
          , h = u=>E(u) ? u.toPromise() : Promise.resolve(u)
          , v = u=>u && Promise.resolve(u) === u
          , b = ()=>document.body.querySelector(`.${i.container}`)
          , C = u=>{
            const f = b();
            return f ? f.querySelector(u) : null
        }
          , O = u=>C(`.${u}`)
          , T = ()=>O(i.popup)
          , R = ()=>O(i.icon)
          , D = ()=>O(i["icon-content"])
          , H = ()=>O(i.title)
          , z = ()=>O(i["html-container"])
          , he = ()=>O(i.image)
          , Ne = ()=>O(i["progress-steps"])
          , X = ()=>O(i["validation-message"])
          , U = ()=>C(`.${i.actions} .${i.confirm}`)
          , B = ()=>C(`.${i.actions} .${i.cancel}`)
          , G = ()=>C(`.${i.actions} .${i.deny}`)
          , W = ()=>O(i["input-label"])
          , N = ()=>C(`.${i.loader}`)
          , F = ()=>O(i.actions)
          , V = ()=>O(i.footer)
          , Q = ()=>O(i["timer-progress-bar"])
          , re = ()=>O(i.close)
          , ke = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`
          , Ue = ()=>{
            const u = Array.from(T().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((p,S)=>{
                const I = parseInt(p.getAttribute("tabindex"))
                  , ne = parseInt(S.getAttribute("tabindex"));
                return I > ne ? 1 : I < ne ? -1 : 0
            }
            )
              , f = Array.from(T().querySelectorAll(ke)).filter(p=>p.getAttribute("tabindex") !== "-1");
            return l(u.concat(f)).filter(p=>bt(p))
        }
          , _e = ()=>Ge(document.body, i.shown) && !Ge(document.body, i["toast-shown"]) && !Ge(document.body, i["no-backdrop"])
          , Ye = ()=>T() && Ge(T(), i.toast)
          , Dt = ()=>T().hasAttribute("data-loading")
          , wt = {
            previousBodyPadding: null
        }
          , ve = (u,f)=>{
            if (u.textContent = "",
            f) {
                const S = new DOMParser().parseFromString(f, "text/html");
                Array.from(S.querySelector("head").childNodes).forEach(I=>{
                    u.appendChild(I)
                }
                ),
                Array.from(S.querySelector("body").childNodes).forEach(I=>{
                    I instanceof HTMLVideoElement || I instanceof HTMLAudioElement ? u.appendChild(I.cloneNode(!0)) : u.appendChild(I)
                }
                )
            }
        }
          , Ge = (u,f)=>{
            if (!f)
                return !1;
            const p = f.split(/\s+/);
            for (let S = 0; S < p.length; S++)
                if (!u.classList.contains(p[S]))
                    return !1;
            return !0
        }
          , jr = (u,f)=>{
            Array.from(u.classList).forEach(p=>{
                !Object.values(i).includes(p) && !Object.values(s).includes(p) && !Object.values(f.showClass).includes(p) && u.classList.remove(p)
            }
            )
        }
          , Re = (u,f,p)=>{
            if (jr(u, f),
            f.customClass && f.customClass[p]) {
                if (typeof f.customClass[p] != "string" && !f.customClass[p].forEach) {
                    d(`Invalid type of customClass.${p}! Expected string or iterable object, got "${typeof f.customClass[p]}"`);
                    return
                }
                se(u, f.customClass[p])
            }
        }
          , po = (u,f)=>{
            if (!f)
                return null;
            switch (f) {
            case "select":
            case "textarea":
            case "file":
                return u.querySelector(`.${i.popup} > .${i[f]}`);
            case "checkbox":
                return u.querySelector(`.${i.popup} > .${i.checkbox} input`);
            case "radio":
                return u.querySelector(`.${i.popup} > .${i.radio} input:checked`) || u.querySelector(`.${i.popup} > .${i.radio} input:first-child`);
            case "range":
                return u.querySelector(`.${i.popup} > .${i.range} input`);
            default:
                return u.querySelector(`.${i.popup} > .${i.input}`)
            }
        }
          , ho = u=>{
            if (u.focus(),
            u.type !== "file") {
                const f = u.value;
                u.value = "",
                u.value = f
            }
        }
          , mo = (u,f,p)=>{
            !u || !f || (typeof f == "string" && (f = f.split(/\s+/).filter(Boolean)),
            f.forEach(S=>{
                Array.isArray(u) ? u.forEach(I=>{
                    p ? I.classList.add(S) : I.classList.remove(S)
                }
                ) : p ? u.classList.add(S) : u.classList.remove(S)
            }
            ))
        }
          , se = (u,f)=>{
            mo(u, f, !0)
        }
          , mt = (u,f)=>{
            mo(u, f, !1)
        }
          , mn = (u,f)=>{
            const p = Array.from(u.children);
            for (let S = 0; S < p.length; S++) {
                const I = p[S];
                if (I instanceof HTMLElement && Ge(I, f))
                    return I
            }
        }
          , Un = (u,f,p)=>{
            p === `${parseInt(p)}` && (p = parseInt(p)),
            p || parseInt(p) === 0 ? u.style[f] = typeof p == "number" ? `${p}px` : p : u.style.removeProperty(f)
        }
          , Qe = function(u) {
            let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
            u.style.display = f
        }
          , ct = u=>{
            u.style.display = "none"
        }
          , lr = (u,f,p,S)=>{
            const I = u.querySelector(f);
            I && (I.style[p] = S)
        }
          , zn = function(u, f) {
            let p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
            f ? Qe(u, p) : ct(u)
        }
          , bt = u=>!!(u && (u.offsetWidth || u.offsetHeight || u.getClientRects().length))
          , mi = ()=>!bt(U()) && !bt(G()) && !bt(B())
          , Ms = u=>u.scrollHeight > u.clientHeight
          , Fs = u=>{
            const f = window.getComputedStyle(u)
              , p = parseFloat(f.getPropertyValue("animation-duration") || "0")
              , S = parseFloat(f.getPropertyValue("transition-duration") || "0");
            return p > 0 || S > 0
        }
          , go = function(u) {
            let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
            const p = Q();
            bt(p) && (f && (p.style.transition = "none",
            p.style.width = "100%"),
            setTimeout(()=>{
                p.style.transition = `width ${u / 1e3}s linear`,
                p.style.width = "0%"
            }
            , 10))
        }
          , Wl = ()=>{
            const u = Q()
              , f = parseInt(window.getComputedStyle(u).width);
            u.style.removeProperty("transition"),
            u.style.width = "100%";
            const p = parseInt(window.getComputedStyle(u).width)
              , S = f / p * 100;
            u.style.width = `${S}%`
        }
          , $ = 100
          , _ = {}
          , j = ()=>{
            _.previousActiveElement instanceof HTMLElement ? (_.previousActiveElement.focus(),
            _.previousActiveElement = null) : document.body && document.body.focus()
        }
          , J = u=>new Promise(f=>{
            if (!u)
                return f();
            const p = window.scrollX
              , S = window.scrollY;
            _.restoreFocusTimeout = setTimeout(()=>{
                j(),
                f()
            }
            , $),
            window.scrollTo(p, S)
        }
        )
          , Z = ()=>typeof window > "u" || typeof document > "u"
          , oe = `
 <div aria-labelledby="${i.title}" aria-describedby="${i["html-container"]}" class="${i.popup}" tabindex="-1">
   <button type="button" class="${i.close}"></button>
   <ul class="${i["progress-steps"]}"></ul>
   <div class="${i.icon}"></div>
   <img class="${i.image}" />
   <h2 class="${i.title}" id="${i.title}"></h2>
   <div class="${i["html-container"]}" id="${i["html-container"]}"></div>
   <input class="${i.input}" />
   <input type="file" class="${i.file}" />
   <div class="${i.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${i.select}"></select>
   <div class="${i.radio}"></div>
   <label for="${i.checkbox}" class="${i.checkbox}">
     <input type="checkbox" />
     <span class="${i.label}"></span>
   </label>
   <textarea class="${i.textarea}"></textarea>
   <div class="${i["validation-message"]}" id="${i["validation-message"]}"></div>
   <div class="${i.actions}">
     <div class="${i.loader}"></div>
     <button type="button" class="${i.confirm}"></button>
     <button type="button" class="${i.deny}"></button>
     <button type="button" class="${i.cancel}"></button>
   </div>
   <div class="${i.footer}"></div>
   <div class="${i["timer-progress-bar-container"]}">
     <div class="${i["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, "")
          , ie = ()=>{
            const u = b();
            return u ? (u.remove(),
            mt([document.documentElement, document.body], [i["no-backdrop"], i["toast-shown"], i["has-column"]]),
            !0) : !1
        }
          , te = ()=>{
            _.currentInstance.resetValidationMessage()
        }
          , ee = ()=>{
            const u = T()
              , f = mn(u, i.input)
              , p = mn(u, i.file)
              , S = u.querySelector(`.${i.range} input`)
              , I = u.querySelector(`.${i.range} output`)
              , ne = mn(u, i.select)
              , Te = u.querySelector(`.${i.checkbox} input`)
              , Jt = mn(u, i.textarea);
            f.oninput = te,
            p.onchange = te,
            ne.onchange = te,
            Te.onchange = te,
            Jt.oninput = te,
            S.oninput = ()=>{
                te(),
                I.value = S.value
            }
            ,
            S.onchange = ()=>{
                te(),
                I.value = S.value
            }
        }
          , ue = u=>typeof u == "string" ? document.querySelector(u) : u
          , ye = u=>{
            const f = T();
            f.setAttribute("role", u.toast ? "alert" : "dialog"),
            f.setAttribute("aria-live", u.toast ? "polite" : "assertive"),
            u.toast || f.setAttribute("aria-modal", "true")
        }
          , ft = u=>{
            window.getComputedStyle(u).direction === "rtl" && se(b(), i.rtl)
        }
          , Je = u=>{
            const f = ie();
            if (Z()) {
                m("SweetAlert2 requires document to initialize");
                return
            }
            const p = document.createElement("div");
            p.className = i.container,
            f && se(p, i["no-transition"]),
            ve(p, oe);
            const S = ue(u.target);
            S.appendChild(p),
            ye(u),
            ft(S),
            ee()
        }
          , ze = (u,f)=>{
            u instanceof HTMLElement ? f.appendChild(u) : typeof u == "object" ? Mt(u, f) : u && ve(f, u)
        }
          , Mt = (u,f)=>{
            u.jquery ? Dr(f, u) : ve(f, u.toString())
        }
          , Dr = (u,f)=>{
            if (u.textContent = "",
            0 in f)
                for (let p = 0; p in f; p++)
                    u.appendChild(f[p].cloneNode(!0));
            else
                u.appendChild(f.cloneNode(!0))
        }
          , Hn = (()=>{
            if (Z())
                return !1;
            const u = document.createElement("div")
              , f = {
                WebkitAnimation: "webkitAnimationEnd",
                animation: "animationend"
            };
            for (const p in f)
                if (Object.prototype.hasOwnProperty.call(f, p) && typeof u.style[p] < "u")
                    return f[p];
            return !1
        }
        )()
          , vo = ()=>{
            const u = document.createElement("div");
            u.className = i["scrollbar-measure"],
            document.body.appendChild(u);
            const f = u.getBoundingClientRect().width - u.clientWidth;
            return document.body.removeChild(u),
            f
        }
          , _n = (u,f)=>{
            const p = F()
              , S = N();
            !f.showConfirmButton && !f.showDenyButton && !f.showCancelButton ? ct(p) : Qe(p),
            Re(p, f, "actions"),
            yo(p, S, f),
            ve(S, f.loaderHtml),
            Re(S, f, "loader")
        }
        ;
        function yo(u, f, p) {
            const S = U()
              , I = G()
              , ne = B();
            Mr(S, "confirm", p),
            Mr(I, "deny", p),
            Mr(ne, "cancel", p),
            gi(S, I, ne, p),
            p.reverseButtons && (p.toast ? (u.insertBefore(ne, S),
            u.insertBefore(I, S)) : (u.insertBefore(ne, f),
            u.insertBefore(I, f),
            u.insertBefore(S, f)))
        }
        function gi(u, f, p, S) {
            if (!S.buttonsStyling) {
                mt([u, f, p], i.styled);
                return
            }
            se([u, f, p], i.styled),
            S.confirmButtonColor && (u.style.backgroundColor = S.confirmButtonColor,
            se(u, i["default-outline"])),
            S.denyButtonColor && (f.style.backgroundColor = S.denyButtonColor,
            se(f, i["default-outline"])),
            S.cancelButtonColor && (p.style.backgroundColor = S.cancelButtonColor,
            se(p, i["default-outline"]))
        }
        function Mr(u, f, p) {
            zn(u, p[`show ${c(f)}Button`], "inline-block"),
            ve(u, p[`${f}ButtonText`]),
            u.setAttribute("aria-label", p[`${f}ButtonAriaLabel`]),
            u.className = i[f],
            Re(u, p, `${f}Button`),
            se(u, p[`${f}ButtonClass`])
        }
        const vi = (u,f)=>{
            const p = re();
            ve(p, f.closeButtonHtml),
            Re(p, f, "closeButton"),
            zn(p, f.showCloseButton),
            p.setAttribute("aria-label", f.closeButtonAriaLabel)
        }
          , wo = (u,f)=>{
            const p = b();
            p && (Oe(p, f.backdrop),
            Ft(p, f.position),
            ur(p, f.grow),
            Re(p, f, "container"))
        }
        ;
        function Oe(u, f) {
            typeof f == "string" ? u.style.background = f : f || se([document.documentElement, document.body], i["no-backdrop"])
        }
        function Ft(u, f) {
            f in i ? se(u, i[f]) : (d('The "position" parameter is not valid, defaulting to "center"'),
            se(u, i.center))
        }
        function ur(u, f) {
            if (f && typeof f == "string") {
                const p = `grow-${f}`;
                p in i && se(u, i[p])
            }
        }
        const yi = ["input", "file", "range", "select", "radio", "checkbox", "textarea"]
          , Pt = (u,f)=>{
            const p = T()
              , S = n.innerParams.get(u)
              , I = !S || f.input !== S.input;
            yi.forEach(ne=>{
                const Te = mn(p, i[ne]);
                Vl(ne, f.inputAttributes),
                Te.className = i[ne],
                I && ct(Te)
            }
            ),
            f.input && (I && wi(f),
            K0(f))
        }
          , wi = u=>{
            if (!Bt[u.input]) {
                m(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${u.input}"`);
                return
            }
            const f = jd(u.input)
              , p = Bt[u.input](f, u);
            Qe(f),
            u.inputAutoFocus && setTimeout(()=>{
                ho(p)
            }
            )
        }
          , Bs = u=>{
            for (let f = 0; f < u.attributes.length; f++) {
                const p = u.attributes[f].name;
                ["type", "value", "style"].includes(p) || u.removeAttribute(p)
            }
        }
          , Vl = (u,f)=>{
            const p = po(T(), u);
            if (p) {
                Bs(p);
                for (const S in f)
                    p.setAttribute(S, f[S])
            }
        }
          , K0 = u=>{
            const f = jd(u.input);
            typeof u.customClass == "object" && se(f, u.customClass.input)
        }
          , Kl = (u,f)=>{
            (!u.placeholder || f.inputPlaceholder) && (u.placeholder = f.inputPlaceholder)
        }
          , bi = (u,f,p)=>{
            if (p.inputLabel) {
                u.id = i.input;
                const S = document.createElement("label")
                  , I = i["input-label"];
                S.setAttribute("for", u.id),
                S.className = I,
                typeof p.customClass == "object" && se(S, p.customClass.inputLabel),
                S.innerText = p.inputLabel,
                f.insertAdjacentElement("beforebegin", S)
            }
        }
          , jd = u=>mn(T(), i[u] || i.input)
          , Us = (u,f)=>{
            ["string", "number"].includes(typeof f) ? u.value = `${f}` : v(f) || d(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof f}"`)
        }
          , Bt = {};
        Bt.text = Bt.email = Bt.password = Bt.number = Bt.tel = Bt.url = (u,f)=>(Us(u, f.inputValue),
        bi(u, u, f),
        Kl(u, f),
        u.type = f.input,
        u),
        Bt.file = (u,f)=>(bi(u, u, f),
        Kl(u, f),
        u),
        Bt.range = (u,f)=>{
            const p = u.querySelector("input")
              , S = u.querySelector("output");
            return Us(p, f.inputValue),
            p.type = f.input,
            Us(S, f.inputValue),
            bi(p, u, f),
            u
        }
        ,
        Bt.select = (u,f)=>{
            if (u.textContent = "",
            f.inputPlaceholder) {
                const p = document.createElement("option");
                ve(p, f.inputPlaceholder),
                p.value = "",
                p.disabled = !0,
                p.selected = !0,
                u.appendChild(p)
            }
            return bi(u, u, f),
            u
        }
        ,
        Bt.radio = u=>(u.textContent = "",
        u),
        Bt.checkbox = (u,f)=>{
            const p = po(T(), "checkbox");
            p.value = "1",
            p.id = i.checkbox,
            p.checked = !!f.inputValue;
            const S = u.querySelector("span");
            return ve(S, f.inputPlaceholder),
            p
        }
        ,
        Bt.textarea = (u,f)=>{
            Us(u, f.inputValue),
            Kl(u, f),
            bi(u, u, f);
            const p = S=>parseInt(window.getComputedStyle(S).marginLeft) + parseInt(window.getComputedStyle(S).marginRight);
            return setTimeout(()=>{
                if ("MutationObserver"in window) {
                    const S = parseInt(window.getComputedStyle(T()).width)
                      , I = ()=>{
                        const ne = u.offsetWidth + p(u);
                        ne > S ? T().style.width = `${ne}px` : T().style.width = null
                    }
                    ;
                    new MutationObserver(I).observe(u, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    })
                }
            }
            ),
            u
        }
        ;
        const q0 = (u,f)=>{
            const p = z();
            Re(p, f, "htmlContainer"),
            f.html ? (ze(f.html, p),
            Qe(p, "block")) : f.text ? (p.textContent = f.text,
            Qe(p, "block")) : ct(p),
            Pt(u, f)
        }
          , Y0 = (u,f)=>{
            const p = V();
            zn(p, f.footer),
            f.footer && ze(f.footer, p),
            Re(p, f, "footer")
        }
          , G0 = (u,f)=>{
            const p = n.innerParams.get(u)
              , S = R();
            if (p && f.icon === p.icon) {
                Md(S, f),
                Dd(S, f);
                return
            }
            if (!f.icon && !f.iconHtml) {
                ct(S);
                return
            }
            if (f.icon && Object.keys(s).indexOf(f.icon) === -1) {
                m(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${f.icon}"`),
                ct(S);
                return
            }
            Qe(S),
            Md(S, f),
            Dd(S, f),
            se(S, f.showClass.icon)
        }
          , Dd = (u,f)=>{
            for (const p in s)
                f.icon !== p && mt(u, s[p]);
            se(u, s[f.icon]),
            Z0(u, f),
            Q0(),
            Re(u, f, "icon")
        }
          , Q0 = ()=>{
            const u = T()
              , f = window.getComputedStyle(u).getPropertyValue("background-color")
              , p = u.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
            for (let S = 0; S < p.length; S++)
                p[S].style.backgroundColor = f
        }
          , J0 = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`
          , X0 = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`
          , Md = (u,f)=>{
            let p = u.innerHTML, S;
            f.iconHtml ? S = Fd(f.iconHtml) : f.icon === "success" ? (S = J0,
            p = p.replace(/ style=".*?"/g, "")) : f.icon === "error" ? S = X0 : S = Fd({
                question: "?",
                warning: "!",
                info: "i"
            }[f.icon]),
            p.trim() !== S.trim() && ve(u, S)
        }
          , Z0 = (u,f)=>{
            if (f.iconColor) {
                u.style.color = f.iconColor,
                u.style.borderColor = f.iconColor;
                for (const p of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"])
                    lr(u, p, "backgroundColor", f.iconColor);
                lr(u, ".swal2-success-ring", "borderColor", f.iconColor)
            }
        }
          , Fd = u=>`<div class="${i["icon-content"]}">${u}</div>`
          , e1 = (u,f)=>{
            const p = he();
            if (!f.imageUrl) {
                ct(p);
                return
            }
            Qe(p, ""),
            p.setAttribute("src", f.imageUrl),
            p.setAttribute("alt", f.imageAlt),
            Un(p, "width", f.imageWidth),
            Un(p, "height", f.imageHeight),
            p.className = i.image,
            Re(p, f, "image")
        }
          , t1 = (u,f)=>{
            const p = b()
              , S = T();
            f.toast ? (Un(p, "width", f.width),
            S.style.width = "100%",
            S.insertBefore(N(), R())) : Un(S, "width", f.width),
            Un(S, "padding", f.padding),
            f.color && (S.style.color = f.color),
            f.background && (S.style.background = f.background),
            ct(X()),
            n1(S, f)
        }
          , n1 = (u,f)=>{
            u.className = `${i.popup} ${bt(u) ? f.showClass.popup : ""}`,
            f.toast ? (se([document.documentElement, document.body], i["toast-shown"]),
            se(u, i.toast)) : se(u, i.modal),
            Re(u, f, "popup"),
            typeof f.customClass == "string" && se(u, f.customClass),
            f.icon && se(u, i[`icon-${f.icon}`])
        }
          , r1 = (u,f)=>{
            const p = Ne();
            if (!f.progressSteps || f.progressSteps.length === 0) {
                ct(p);
                return
            }
            Qe(p),
            p.textContent = "",
            f.currentProgressStep >= f.progressSteps.length && d("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),
            f.progressSteps.forEach((S,I)=>{
                const ne = o1(S);
                if (p.appendChild(ne),
                I === f.currentProgressStep && se(ne, i["active-progress-step"]),
                I !== f.progressSteps.length - 1) {
                    const Te = i1(f);
                    p.appendChild(Te)
                }
            }
            )
        }
          , o1 = u=>{
            const f = document.createElement("li");
            return se(f, i["progress-step"]),
            ve(f, u),
            f
        }
          , i1 = u=>{
            const f = document.createElement("li");
            return se(f, i["progress-step-line"]),
            u.progressStepsDistance && Un(f, "width", u.progressStepsDistance),
            f
        }
          , s1 = (u,f)=>{
            const p = H();
            zn(p, f.title || f.titleText, "block"),
            f.title && ze(f.title, p),
            f.titleText && (p.innerText = f.titleText),
            Re(p, f, "title")
        }
          , Bd = (u,f)=>{
            t1(u, f),
            wo(u, f),
            r1(u, f),
            G0(u, f),
            e1(u, f),
            s1(u, f),
            vi(u, f),
            q0(u, f),
            _n(u, f),
            Y0(u, f),
            typeof f.didRender == "function" && f.didRender(T())
        }
        ;
        function Ud() {
            const u = n.innerParams.get(this);
            if (!u)
                return;
            const f = n.domCache.get(this);
            ct(f.loader),
            Ye() ? u.icon && Qe(R()) : a1(f),
            mt([f.popup, f.actions], i.loading),
            f.popup.removeAttribute("aria-busy"),
            f.popup.removeAttribute("data-loading"),
            f.confirmButton.disabled = !1,
            f.denyButton.disabled = !1,
            f.cancelButton.disabled = !1
        }
        const a1 = u=>{
            const f = u.popup.getElementsByClassName(u.loader.getAttribute("data-button-to-replace"));
            f.length ? Qe(f[0], "inline-block") : mi() && ct(u.actions)
        }
        ;
        function l1(u) {
            const f = n.innerParams.get(u || this)
              , p = n.domCache.get(u || this);
            return p ? po(p.popup, f.input) : null
        }
        const u1 = ()=>bt(T())
          , zd = ()=>U() && U().click()
          , c1 = ()=>G() && G().click()
          , f1 = ()=>B() && B().click()
          , bo = Object.freeze({
            cancel: "cancel",
            backdrop: "backdrop",
            close: "close",
            esc: "esc",
            timer: "timer"
        })
          , Hd = u=>{
            u.keydownTarget && u.keydownHandlerAdded && (u.keydownTarget.removeEventListener("keydown", u.keydownHandler, {
                capture: u.keydownListenerCapture
            }),
            u.keydownHandlerAdded = !1)
        }
          , d1 = (u,f,p,S)=>{
            Hd(f),
            p.toast || (f.keydownHandler = I=>h1(u, I, S),
            f.keydownTarget = p.keydownListenerCapture ? window : T(),
            f.keydownListenerCapture = p.keydownListenerCapture,
            f.keydownTarget.addEventListener("keydown", f.keydownHandler, {
                capture: f.keydownListenerCapture
            }),
            f.keydownHandlerAdded = !0)
        }
          , ql = (u,f)=>{
            const p = Ue();
            if (p.length) {
                u = u + f,
                u === p.length ? u = 0 : u === -1 && (u = p.length - 1),
                p[u].focus();
                return
            }
            T().focus()
        }
          , Wd = ["ArrowRight", "ArrowDown"]
          , p1 = ["ArrowLeft", "ArrowUp"]
          , h1 = (u,f,p)=>{
            const S = n.innerParams.get(u);
            S && (f.isComposing || f.keyCode === 229 || (S.stopKeydownPropagation && f.stopPropagation(),
            f.key === "Enter" ? m1(u, f, S) : f.key === "Tab" ? g1(f) : [...Wd, ...p1].includes(f.key) ? v1(f.key) : f.key === "Escape" && y1(f, S, p)))
        }
          , m1 = (u,f,p)=>{
            if (y(p.allowEnterKey) && f.target && u.getInput() && f.target instanceof HTMLElement && f.target.outerHTML === u.getInput().outerHTML) {
                if (["textarea", "file"].includes(p.input))
                    return;
                zd(),
                f.preventDefault()
            }
        }
          , g1 = u=>{
            const f = u.target
              , p = Ue();
            let S = -1;
            for (let I = 0; I < p.length; I++)
                if (f === p[I]) {
                    S = I;
                    break
                }
            u.shiftKey ? ql(S, -1) : ql(S, 1),
            u.stopPropagation(),
            u.preventDefault()
        }
          , v1 = u=>{
            const f = U()
              , p = G()
              , S = B()
              , I = [f, p, S];
            if (document.activeElement instanceof HTMLElement && !I.includes(document.activeElement))
                return;
            const ne = Wd.includes(u) ? "nextElementSibling" : "previousElementSibling";
            let Te = document.activeElement;
            for (let Jt = 0; Jt < F().children.length; Jt++) {
                if (Te = Te[ne],
                !Te)
                    return;
                if (Te instanceof HTMLButtonElement && bt(Te))
                    break
            }
            Te instanceof HTMLButtonElement && Te.focus()
        }
          , y1 = (u,f,p)=>{
            y(f.allowEscapeKey) && (u.preventDefault(),
            p(bo.esc))
        }
        ;
        var xi = {
            swalPromiseResolve: new WeakMap,
            swalPromiseReject: new WeakMap
        };
        const w1 = ()=>{
            Array.from(document.body.children).forEach(f=>{
                f === b() || f.contains(b()) || (f.hasAttribute("aria-hidden") && f.setAttribute("data-previous-aria-hidden", f.getAttribute("aria-hidden")),
                f.setAttribute("aria-hidden", "true"))
            }
            )
        }
          , Vd = ()=>{
            Array.from(document.body.children).forEach(f=>{
                f.hasAttribute("data-previous-aria-hidden") ? (f.setAttribute("aria-hidden", f.getAttribute("data-previous-aria-hidden")),
                f.removeAttribute("data-previous-aria-hidden")) : f.removeAttribute("aria-hidden")
            }
            )
        }
          , b1 = ()=>{
            if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !Ge(document.body, i.iosfix)) {
                const f = document.body.scrollTop;
                document.body.style.top = `${f * -1}px`,
                se(document.body, i.iosfix),
                S1(),
                x1()
            }
        }
          , x1 = ()=>{
            const u = navigator.userAgent
              , f = !!u.match(/iPad/i) || !!u.match(/iPhone/i)
              , p = !!u.match(/WebKit/i);
            f && p && !u.match(/CriOS/i) && T().scrollHeight > window.innerHeight - 44 && (b().style.paddingBottom = "44px")
        }
          , S1 = ()=>{
            const u = b();
            let f;
            u.ontouchstart = p=>{
                f = E1(p)
            }
            ,
            u.ontouchmove = p=>{
                f && (p.preventDefault(),
                p.stopPropagation())
            }
        }
          , E1 = u=>{
            const f = u.target
              , p = b();
            return C1(u) || k1(u) ? !1 : f === p || !Ms(p) && f instanceof HTMLElement && f.tagName !== "INPUT" && f.tagName !== "TEXTAREA" && !(Ms(z()) && z().contains(f))
        }
          , C1 = u=>u.touches && u.touches.length && u.touches[0].touchType === "stylus"
          , k1 = u=>u.touches && u.touches.length > 1
          , _1 = ()=>{
            if (Ge(document.body, i.iosfix)) {
                const u = parseInt(document.body.style.top, 10);
                mt(document.body, i.iosfix),
                document.body.style.top = "",
                document.body.scrollTop = u * -1
            }
        }
          , T1 = ()=>{
            wt.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (wt.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),
            document.body.style.paddingRight = `${wt.previousBodyPadding + vo()}px`)
        }
          , P1 = ()=>{
            wt.previousBodyPadding !== null && (document.body.style.paddingRight = `${wt.previousBodyPadding}px`,
            wt.previousBodyPadding = null)
        }
        ;
        function Kd(u, f, p, S) {
            Ye() ? qd(u, S) : (J(p).then(()=>qd(u, S)),
            Hd(_)),
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (f.setAttribute("style", "display:none !important"),
            f.removeAttribute("class"),
            f.innerHTML = "") : f.remove(),
            _e() && (P1(),
            _1(),
            Vd()),
            O1()
        }
        function O1() {
            mt([document.documentElement, document.body], [i.shown, i["height-auto"], i["no-backdrop"], i["toast-shown"]])
        }
        function zs(u) {
            u = N1(u);
            const f = xi.swalPromiseResolve.get(this)
              , p = I1(this);
            this.isAwaitingPromise() ? u.isDismissed || (Si(this),
            f(u)) : p && f(u)
        }
        function $1() {
            return !!n.awaitingPromise.get(this)
        }
        const I1 = u=>{
            const f = T();
            if (!f)
                return !1;
            const p = n.innerParams.get(u);
            if (!p || Ge(f, p.hideClass.popup))
                return !1;
            mt(f, p.showClass.popup),
            se(f, p.hideClass.popup);
            const S = b();
            return mt(S, p.showClass.backdrop),
            se(S, p.hideClass.backdrop),
            R1(u, f, p),
            !0
        }
        ;
        function L1(u) {
            const f = xi.swalPromiseReject.get(this);
            Si(this),
            f && f(u)
        }
        const Si = u=>{
            u.isAwaitingPromise() && (n.awaitingPromise.delete(u),
            n.innerParams.get(u) || u._destroy())
        }
          , N1 = u=>typeof u > "u" ? {
            isConfirmed: !1,
            isDenied: !1,
            isDismissed: !0
        } : Object.assign({
            isConfirmed: !1,
            isDenied: !1,
            isDismissed: !1
        }, u)
          , R1 = (u,f,p)=>{
            const S = b()
              , I = Hn && Fs(f);
            typeof p.willClose == "function" && p.willClose(f),
            I ? A1(u, f, S, p.returnFocus, p.didClose) : Kd(u, S, p.returnFocus, p.didClose)
        }
          , A1 = (u,f,p,S,I)=>{
            _.swalCloseEventFinishedCallback = Kd.bind(null, u, p, S, I),
            f.addEventListener(Hn, function(ne) {
                ne.target === f && (_.swalCloseEventFinishedCallback(),
                delete _.swalCloseEventFinishedCallback)
            })
        }
          , qd = (u,f)=>{
            setTimeout(()=>{
                typeof f == "function" && f.bind(u.params)(),
                u._destroy()
            }
            )
        }
        ;
        function Yd(u, f, p) {
            const S = n.domCache.get(u);
            f.forEach(I=>{
                S[I].disabled = p
            }
            )
        }
        function Gd(u, f) {
            if (u)
                if (u.type === "radio") {
                    const S = u.parentNode.parentNode.querySelectorAll("input");
                    for (let I = 0; I < S.length; I++)
                        S[I].disabled = f
                } else
                    u.disabled = f
        }
        function j1() {
            Yd(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        }
        function D1() {
            Yd(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        }
        function M1() {
            Gd(this.getInput(), !1)
        }
        function F1() {
            Gd(this.getInput(), !0)
        }
        function B1(u) {
            const f = n.domCache.get(this)
              , p = n.innerParams.get(this);
            ve(f.validationMessage, u),
            f.validationMessage.className = i["validation-message"],
            p.customClass && p.customClass.validationMessage && se(f.validationMessage, p.customClass.validationMessage),
            Qe(f.validationMessage);
            const S = this.getInput();
            S && (S.setAttribute("aria-invalid", !0),
            S.setAttribute("aria-describedby", i["validation-message"]),
            ho(S),
            se(S, i.inputerror))
        }
        function U1() {
            const u = n.domCache.get(this);
            u.validationMessage && ct(u.validationMessage);
            const f = this.getInput();
            f && (f.removeAttribute("aria-invalid"),
            f.removeAttribute("aria-describedby"),
            mt(f, i.inputerror))
        }
        const xo = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            icon: void 0,
            iconColor: void 0,
            iconHtml: void 0,
            template: void 0,
            toast: !1,
            showClass: {
                popup: "swal2-show",
                backdrop: "swal2-backdrop-show",
                icon: "swal2-icon-show"
            },
            hideClass: {
                popup: "swal2-hide",
                backdrop: "swal2-backdrop-hide",
                icon: "swal2-icon-hide"
            },
            customClass: {},
            target: "body",
            color: void 0,
            backdrop: !0,
            heightAuto: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            stopKeydownPropagation: !0,
            keydownListenerCapture: !1,
            showConfirmButton: !0,
            showDenyButton: !1,
            showCancelButton: !1,
            preConfirm: void 0,
            preDeny: void 0,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: void 0,
            denyButtonText: "No",
            denyButtonAriaLabel: "",
            denyButtonColor: void 0,
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: void 0,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusDeny: !1,
            focusCancel: !1,
            returnFocus: !0,
            showCloseButton: !1,
            closeButtonHtml: "&times;",
            closeButtonAriaLabel: "Close this dialog",
            loaderHtml: "",
            showLoaderOnConfirm: !1,
            showLoaderOnDeny: !1,
            imageUrl: void 0,
            imageWidth: void 0,
            imageHeight: void 0,
            imageAlt: "",
            timer: void 0,
            timerProgressBar: !1,
            width: void 0,
            padding: void 0,
            background: void 0,
            input: void 0,
            inputPlaceholder: "",
            inputLabel: "",
            inputValue: "",
            inputOptions: {},
            inputAutoFocus: !0,
            inputAutoTrim: !0,
            inputAttributes: {},
            inputValidator: void 0,
            returnInputValueOnDeny: !1,
            validationMessage: void 0,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: void 0,
            progressStepsDistance: void 0,
            willOpen: void 0,
            didOpen: void 0,
            didRender: void 0,
            willClose: void 0,
            didClose: void 0,
            didDestroy: void 0,
            scrollbarPadding: !0
        }
          , z1 = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"]
          , H1 = {}
          , W1 = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"]
          , Qd = u=>Object.prototype.hasOwnProperty.call(xo, u)
          , Jd = u=>z1.indexOf(u) !== -1
          , Yl = u=>H1[u]
          , V1 = u=>{
            Qd(u) || d(`Unknown parameter "${u}"`)
        }
          , K1 = u=>{
            W1.includes(u) && d(`The parameter "${u}" is incompatible with toasts`)
        }
          , q1 = u=>{
            Yl(u) && w(u, Yl(u))
        }
          , Y1 = u=>{
            u.backdrop === !1 && u.allowOutsideClick && d('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
            for (const f in u)
                V1(f),
                u.toast && K1(f),
                q1(f)
        }
        ;
        function G1(u) {
            const f = T()
              , p = n.innerParams.get(this);
            if (!f || Ge(f, p.hideClass.popup)) {
                d("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
                return
            }
            const S = Q1(u)
              , I = Object.assign({}, p, S);
            Bd(this, I),
            n.innerParams.set(this, I),
            Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, u),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
        const Q1 = u=>{
            const f = {};
            return Object.keys(u).forEach(p=>{
                Jd(p) ? f[p] = u[p] : d(`Invalid parameter to update: ${p}`)
            }
            ),
            f
        }
        ;
        function J1() {
            const u = n.domCache.get(this)
              , f = n.innerParams.get(this);
            if (!f) {
                Xd(this);
                return
            }
            u.popup && _.swalCloseEventFinishedCallback && (_.swalCloseEventFinishedCallback(),
            delete _.swalCloseEventFinishedCallback),
            typeof f.didDestroy == "function" && f.didDestroy(),
            X1(this)
        }
        const X1 = u=>{
            Xd(u),
            delete u.params,
            delete _.keydownHandler,
            delete _.keydownTarget,
            delete _.currentInstance
        }
          , Xd = u=>{
            u.isAwaitingPromise() ? (Gl(n, u),
            n.awaitingPromise.set(u, !0)) : (Gl(xi, u),
            Gl(n, u))
        }
          , Gl = (u,f)=>{
            for (const p in u)
                u[p].delete(f)
        }
        ;
        var Zd = Object.freeze({
            __proto__: null,
            _destroy: J1,
            close: zs,
            closeModal: zs,
            closePopup: zs,
            closeToast: zs,
            disableButtons: D1,
            disableInput: F1,
            disableLoading: Ud,
            enableButtons: j1,
            enableInput: M1,
            getInput: l1,
            handleAwaitingPromise: Si,
            hideLoading: Ud,
            isAwaitingPromise: $1,
            rejectPromise: L1,
            resetValidationMessage: U1,
            showValidationMessage: B1,
            update: G1
        });
        const So = u=>{
            let f = T();
            f || new Ws,
            f = T();
            const p = N();
            Ye() ? ct(R()) : Z1(f, u),
            Qe(p),
            f.setAttribute("data-loading", "true"),
            f.setAttribute("aria-busy", "true"),
            f.focus()
        }
          , Z1 = (u,f)=>{
            const p = F()
              , S = N();
            !f && bt(U()) && (f = U()),
            Qe(p),
            f && (ct(f),
            S.setAttribute("data-button-to-replace", f.className)),
            S.parentNode.insertBefore(S, f),
            se([u, p], i.loading)
        }
          , e2 = (u,f)=>{
            f.input === "select" || f.input === "radio" ? i2(u, f) : ["text", "email", "number", "tel", "textarea"].includes(f.input) && (E(f.inputValue) || v(f.inputValue)) && (So(U()),
            s2(u, f))
        }
          , t2 = (u,f)=>{
            const p = u.getInput();
            if (!p)
                return null;
            switch (f.input) {
            case "checkbox":
                return n2(p);
            case "radio":
                return r2(p);
            case "file":
                return o2(p);
            default:
                return f.inputAutoTrim ? p.value.trim() : p.value
            }
        }
          , n2 = u=>u.checked ? 1 : 0
          , r2 = u=>u.checked ? u.value : null
          , o2 = u=>u.files.length ? u.getAttribute("multiple") !== null ? u.files : u.files[0] : null
          , i2 = (u,f)=>{
            const p = T()
              , S = I=>{
                a2[f.input](p, Ql(I), f)
            }
            ;
            E(f.inputOptions) || v(f.inputOptions) ? (So(U()),
            h(f.inputOptions).then(I=>{
                u.hideLoading(),
                S(I)
            }
            )) : typeof f.inputOptions == "object" ? S(f.inputOptions) : m(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof f.inputOptions}`)
        }
          , s2 = (u,f)=>{
            const p = u.getInput();
            ct(p),
            h(f.inputValue).then(S=>{
                p.value = f.input === "number" ? `${parseFloat(S) || 0}` : `${S}`,
                Qe(p),
                p.focus(),
                u.hideLoading()
            }
            ).catch(S=>{
                m(`Error in inputValue promise: ${S}`),
                p.value = "",
                Qe(p),
                p.focus(),
                u.hideLoading()
            }
            )
        }
          , a2 = {
            select: (u,f,p)=>{
                const S = mn(u, i.select)
                  , I = (ne,Te,Jt)=>{
                    const Ot = document.createElement("option");
                    Ot.value = Jt,
                    ve(Ot, Te),
                    Ot.selected = ep(Jt, p.inputValue),
                    ne.appendChild(Ot)
                }
                ;
                f.forEach(ne=>{
                    const Te = ne[0]
                      , Jt = ne[1];
                    if (Array.isArray(Jt)) {
                        const Ot = document.createElement("optgroup");
                        Ot.label = Te,
                        Ot.disabled = !1,
                        S.appendChild(Ot),
                        Jt.forEach(Co=>I(Ot, Co[1], Co[0]))
                    } else
                        I(S, Jt, Te)
                }
                ),
                S.focus()
            }
            ,
            radio: (u,f,p)=>{
                const S = mn(u, i.radio);
                f.forEach(ne=>{
                    const Te = ne[0]
                      , Jt = ne[1]
                      , Ot = document.createElement("input")
                      , Co = document.createElement("label");
                    Ot.type = "radio",
                    Ot.name = i.radio,
                    Ot.value = Te,
                    ep(Te, p.inputValue) && (Ot.checked = !0);
                    const eu = document.createElement("span");
                    ve(eu, Jt),
                    eu.className = i.label,
                    Co.appendChild(Ot),
                    Co.appendChild(eu),
                    S.appendChild(Co)
                }
                );
                const I = S.querySelectorAll("input");
                I.length && I[0].focus()
            }
        }
          , Ql = u=>{
            const f = [];
            return typeof Map < "u" && u instanceof Map ? u.forEach((p,S)=>{
                let I = p;
                typeof I == "object" && (I = Ql(I)),
                f.push([S, I])
            }
            ) : Object.keys(u).forEach(p=>{
                let S = u[p];
                typeof S == "object" && (S = Ql(S)),
                f.push([p, S])
            }
            ),
            f
        }
          , ep = (u,f)=>f && f.toString() === u.toString()
          , l2 = u=>{
            const f = n.innerParams.get(u);
            u.disableButtons(),
            f.input ? tp(u, "confirm") : Xl(u, !0)
        }
          , u2 = u=>{
            const f = n.innerParams.get(u);
            u.disableButtons(),
            f.returnInputValueOnDeny ? tp(u, "deny") : Jl(u, !1)
        }
          , c2 = (u,f)=>{
            u.disableButtons(),
            f(bo.cancel)
        }
          , tp = (u,f)=>{
            const p = n.innerParams.get(u);
            if (!p.input) {
                m(`The "input" parameter is needed to be set when using returnInputValueOn ${c(f)}`);
                return
            }
            const S = t2(u, p);
            p.inputValidator ? f2(u, S, f) : u.getInput().checkValidity() ? f === "deny" ? Jl(u, S) : Xl(u, S) : (u.enableButtons(),
            u.showValidationMessage(p.validationMessage))
        }
          , f2 = (u,f,p)=>{
            const S = n.innerParams.get(u);
            u.disableInput(),
            Promise.resolve().then(()=>h(S.inputValidator(f, S.validationMessage))).then(ne=>{
                u.enableButtons(),
                u.enableInput(),
                ne ? u.showValidationMessage(ne) : p === "deny" ? Jl(u, f) : Xl(u, f)
            }
            )
        }
          , Jl = (u,f)=>{
            const p = n.innerParams.get(u || void 0);
            p.showLoaderOnDeny && So(G()),
            p.preDeny ? (n.awaitingPromise.set(u || void 0, !0),
            Promise.resolve().then(()=>h(p.preDeny(f, p.validationMessage))).then(I=>{
                I === !1 ? (u.hideLoading(),
                Si(u)) : u.close({
                    isDenied: !0,
                    value: typeof I > "u" ? f : I
                })
            }
            ).catch(I=>rp(u || void 0, I))) : u.close({
                isDenied: !0,
                value: f
            })
        }
          , np = (u,f)=>{
            u.close({
                isConfirmed: !0,
                value: f
            })
        }
          , rp = (u,f)=>{
            u.rejectPromise(f)
        }
          , Xl = (u,f)=>{
            const p = n.innerParams.get(u || void 0);
            p.showLoaderOnConfirm && So(),
            p.preConfirm ? (u.resetValidationMessage(),
            n.awaitingPromise.set(u || void 0, !0),
            Promise.resolve().then(()=>h(p.preConfirm(f, p.validationMessage))).then(I=>{
                bt(X()) || I === !1 ? (u.hideLoading(),
                Si(u)) : np(u, typeof I > "u" ? f : I)
            }
            ).catch(I=>rp(u || void 0, I))) : np(u, f)
        }
          , d2 = (u,f,p)=>{
            n.innerParams.get(u).toast ? p2(u, f, p) : (m2(f),
            g2(f),
            v2(u, f, p))
        }
          , p2 = (u,f,p)=>{
            f.popup.onclick = ()=>{
                const S = n.innerParams.get(u);
                S && (h2(S) || S.timer || S.input) || p(bo.close)
            }
        }
          , h2 = u=>u.showConfirmButton || u.showDenyButton || u.showCancelButton || u.showCloseButton;
        let Hs = !1;
        const m2 = u=>{
            u.popup.onmousedown = ()=>{
                u.container.onmouseup = function(f) {
                    u.container.onmouseup = void 0,
                    f.target === u.container && (Hs = !0)
                }
            }
        }
          , g2 = u=>{
            u.container.onmousedown = ()=>{
                u.popup.onmouseup = function(f) {
                    u.popup.onmouseup = void 0,
                    (f.target === u.popup || u.popup.contains(f.target)) && (Hs = !0)
                }
            }
        }
          , v2 = (u,f,p)=>{
            f.container.onclick = S=>{
                const I = n.innerParams.get(u);
                if (Hs) {
                    Hs = !1;
                    return
                }
                S.target === f.container && y(I.allowOutsideClick) && p(bo.backdrop)
            }
        }
          , y2 = u=>typeof u == "object" && u.jquery
          , op = u=>u instanceof Element || y2(u)
          , w2 = u=>{
            const f = {};
            return typeof u[0] == "object" && !op(u[0]) ? Object.assign(f, u[0]) : ["title", "html", "icon"].forEach((p,S)=>{
                const I = u[S];
                typeof I == "string" || op(I) ? f[p] = I : I !== void 0 && m(`Unexpected type of ${p}! Expected "string" or "Element", got ${typeof I}`)
            }
            ),
            f
        }
        ;
        function b2() {
            const u = this;
            for (var f = arguments.length, p = new Array(f), S = 0; S < f; S++)
                p[S] = arguments[S];
            return new u(...p)
        }
        function x2(u) {
            class f extends this {
                _main(S, I) {
                    return super._main(S, Object.assign({}, u, I))
                }
            }
            return f
        }
        const S2 = ()=>_.timeout && _.timeout.getTimerLeft()
          , ip = ()=>{
            if (_.timeout)
                return Wl(),
                _.timeout.stop()
        }
          , sp = ()=>{
            if (_.timeout) {
                const u = _.timeout.start();
                return go(u),
                u
            }
        }
          , E2 = ()=>{
            const u = _.timeout;
            return u && (u.running ? ip() : sp())
        }
          , C2 = u=>{
            if (_.timeout) {
                const f = _.timeout.increase(u);
                return go(f, !0),
                f
            }
        }
          , k2 = ()=>_.timeout && _.timeout.isRunning();
        let ap = !1;
        const Zl = {};
        function _2() {
            let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
            Zl[u] = this,
            ap || (document.body.addEventListener("click", T2),
            ap = !0)
        }
        const T2 = u=>{
            for (let f = u.target; f && f !== document; f = f.parentNode)
                for (const p in Zl) {
                    const S = f.getAttribute(p);
                    if (S) {
                        Zl[p].fire({
                            template: S
                        });
                        return
                    }
                }
        }
        ;
        var P2 = Object.freeze({
            __proto__: null,
            argsToParams: w2,
            bindClickHandler: _2,
            clickCancel: f1,
            clickConfirm: zd,
            clickDeny: c1,
            enableLoading: So,
            fire: b2,
            getActions: F,
            getCancelButton: B,
            getCloseButton: re,
            getConfirmButton: U,
            getContainer: b,
            getDenyButton: G,
            getFocusableElements: Ue,
            getFooter: V,
            getHtmlContainer: z,
            getIcon: R,
            getIconContent: D,
            getImage: he,
            getInputLabel: W,
            getLoader: N,
            getPopup: T,
            getProgressSteps: Ne,
            getTimerLeft: S2,
            getTimerProgressBar: Q,
            getTitle: H,
            getValidationMessage: X,
            increaseTimer: C2,
            isDeprecatedParameter: Yl,
            isLoading: Dt,
            isTimerRunning: k2,
            isUpdatableParameter: Jd,
            isValidParameter: Qd,
            isVisible: u1,
            mixin: x2,
            resumeTimer: sp,
            showLoading: So,
            stopTimer: ip,
            toggleTimer: E2
        });
        class O2 {
            constructor(f, p) {
                this.callback = f,
                this.remaining = p,
                this.running = !1,
                this.start()
            }
            start() {
                return this.running || (this.running = !0,
                this.started = new Date,
                this.id = setTimeout(this.callback, this.remaining)),
                this.remaining
            }
            stop() {
                return this.running && (this.running = !1,
                clearTimeout(this.id),
                this.remaining -= new Date().getTime() - this.started.getTime()),
                this.remaining
            }
            increase(f) {
                const p = this.running;
                return p && this.stop(),
                this.remaining += f,
                p && this.start(),
                this.remaining
            }
            getTimerLeft() {
                return this.running && (this.stop(),
                this.start()),
                this.remaining
            }
            isRunning() {
                return this.running
            }
        }
        const lp = ["swal-title", "swal-html", "swal-footer"]
          , $2 = u=>{
            const f = typeof u.template == "string" ? document.querySelector(u.template) : u.template;
            if (!f)
                return {};
            const p = f.content;
            return M2(p),
            Object.assign(I2(p), L2(p), N2(p), R2(p), A2(p), j2(p), D2(p, lp))
        }
          , I2 = u=>{
            const f = {};
            return Array.from(u.querySelectorAll("swal-param")).forEach(S=>{
                Fr(S, ["name", "value"]);
                const I = S.getAttribute("name")
                  , ne = S.getAttribute("value");
                typeof xo[I] == "boolean" ? f[I] = ne !== "false" : typeof xo[I] == "object" ? f[I] = JSON.parse(ne) : f[I] = ne
            }
            ),
            f
        }
          , L2 = u=>{
            const f = {};
            return Array.from(u.querySelectorAll("swal-function-param")).forEach(S=>{
                const I = S.getAttribute("name")
                  , ne = S.getAttribute("value");
                f[I] = new Function(`return ${ne}`)()
            }
            ),
            f
        }
          , N2 = u=>{
            const f = {};
            return Array.from(u.querySelectorAll("swal-button")).forEach(S=>{
                Fr(S, ["type", "color", "aria-label"]);
                const I = S.getAttribute("type");
                f[`${I}ButtonText`] = S.innerHTML,
                f[`show ${c(I)}Button`] = !0,
                S.hasAttribute("color") && (f[`${I}ButtonColor`] = S.getAttribute("color")),
                S.hasAttribute("aria-label") && (f[`${I}ButtonAriaLabel`] = S.getAttribute("aria-label"))
            }
            ),
            f
        }
          , R2 = u=>{
            const f = {}
              , p = u.querySelector("swal-image");
            return p && (Fr(p, ["src", "width", "height", "alt"]),
            p.hasAttribute("src") && (f.imageUrl = p.getAttribute("src")),
            p.hasAttribute("width") && (f.imageWidth = p.getAttribute("width")),
            p.hasAttribute("height") && (f.imageHeight = p.getAttribute("height")),
            p.hasAttribute("alt") && (f.imageAlt = p.getAttribute("alt"))),
            f
        }
          , A2 = u=>{
            const f = {}
              , p = u.querySelector("swal-icon");
            return p && (Fr(p, ["type", "color"]),
            p.hasAttribute("type") && (f.icon = p.getAttribute("type")),
            p.hasAttribute("color") && (f.iconColor = p.getAttribute("color")),
            f.iconHtml = p.innerHTML),
            f
        }
          , j2 = u=>{
            const f = {}
              , p = u.querySelector("swal-input");
            p && (Fr(p, ["type", "label", "placeholder", "value"]),
            f.input = p.getAttribute("type") || "text",
            p.hasAttribute("label") && (f.inputLabel = p.getAttribute("label")),
            p.hasAttribute("placeholder") && (f.inputPlaceholder = p.getAttribute("placeholder")),
            p.hasAttribute("value") && (f.inputValue = p.getAttribute("value")));
            const S = Array.from(u.querySelectorAll("swal-input-option"));
            return S.length && (f.inputOptions = {},
            S.forEach(I=>{
                Fr(I, ["value"]);
                const ne = I.getAttribute("value")
                  , Te = I.innerHTML;
                f.inputOptions[ne] = Te
            }
            )),
            f
        }
          , D2 = (u,f)=>{
            const p = {};
            for (const S in f) {
                const I = f[S]
                  , ne = u.querySelector(I);
                ne && (Fr(ne, []),
                p[I.replace(/^swal-/, "")] = ne.innerHTML.trim())
            }
            return p
        }
          , M2 = u=>{
            const f = lp.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
            Array.from(u.children).forEach(p=>{
                const S = p.tagName.toLowerCase();
                f.includes(S) || d(`Unrecognized element <${S}>`)
            }
            )
        }
          , Fr = (u,f)=>{
            Array.from(u.attributes).forEach(p=>{
                f.indexOf(p.name) === -1 && d([`Unrecognized attribute "${p.name}" on <${u.tagName.toLowerCase()}>.`, `${f.length ? `Allowed attributes are: ${f.join(", ")}` : "To set the value, use HTML within the element."}`])
            }
            )
        }
          , up = 10
          , F2 = u=>{
            const f = b()
              , p = T();
            typeof u.willOpen == "function" && u.willOpen(p);
            const I = window.getComputedStyle(document.body).overflowY;
            z2(f, p, u),
            setTimeout(()=>{
                B2(f, p)
            }
            , up),
            _e() && (U2(f, u.scrollbarPadding, I),
            w1()),
            !Ye() && !_.previousActiveElement && (_.previousActiveElement = document.activeElement),
            typeof u.didOpen == "function" && setTimeout(()=>u.didOpen(p)),
            mt(f, i["no-transition"])
        }
          , cp = u=>{
            const f = T();
            if (u.target !== f)
                return;
            const p = b();
            f.removeEventListener(Hn, cp),
            p.style.overflowY = "auto"
        }
          , B2 = (u,f)=>{
            Hn && Fs(f) ? (u.style.overflowY = "hidden",
            f.addEventListener(Hn, cp)) : u.style.overflowY = "auto"
        }
          , U2 = (u,f,p)=>{
            b1(),
            f && p !== "hidden" && T1(),
            setTimeout(()=>{
                u.scrollTop = 0
            }
            )
        }
          , z2 = (u,f,p)=>{
            se(u, p.showClass.backdrop),
            f.style.setProperty("opacity", "0", "important"),
            Qe(f, "grid"),
            setTimeout(()=>{
                se(f, p.showClass.popup),
                f.style.removeProperty("opacity")
            }
            , up),
            se([document.documentElement, document.body], i.shown),
            p.heightAuto && p.backdrop && !p.toast && se([document.documentElement, document.body], i["height-auto"])
        }
        ;
        var fp = {
            email: (u,f)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(u) ? Promise.resolve() : Promise.resolve(f || "Invalid email address"),
            url: (u,f)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(u) ? Promise.resolve() : Promise.resolve(f || "Invalid URL")
        };
        function H2(u) {
            u.inputValidator || Object.keys(fp).forEach(f=>{
                u.input === f && (u.inputValidator = fp[f])
            }
            )
        }
        function W2(u) {
            (!u.target || typeof u.target == "string" && !document.querySelector(u.target) || typeof u.target != "string" && !u.target.appendChild) && (d('Target parameter is not valid, defaulting to "body"'),
            u.target = "body")
        }
        function V2(u) {
            H2(u),
            u.showLoaderOnConfirm && !u.preConfirm && d(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
            W2(u),
            typeof u.title == "string" && (u.title = u.title.split(`
`).join("<br />")),
            Je(u)
        }
        let Tn;
        class Eo {
            constructor() {
                if (typeof window > "u")
                    return;
                Tn = this;
                for (var f = arguments.length, p = new Array(f), S = 0; S < f; S++)
                    p[S] = arguments[S];
                const I = Object.freeze(this.constructor.argsToParams(p));
                Object.defineProperties(this, {
                    params: {
                        value: I,
                        writable: !1,
                        enumerable: !0,
                        configurable: !0
                    }
                });
                const ne = Tn._main(Tn.params);
                n.promise.set(this, ne)
            }
            _main(f) {
                let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                Y1(Object.assign({}, p, f)),
                _.currentInstance && (_.currentInstance._destroy(),
                _e() && Vd()),
                _.currentInstance = Tn;
                const S = q2(f, p);
                V2(S),
                Object.freeze(S),
                _.timeout && (_.timeout.stop(),
                delete _.timeout),
                clearTimeout(_.restoreFocusTimeout);
                const I = Y2(Tn);
                return Bd(Tn, S),
                n.innerParams.set(Tn, S),
                K2(Tn, I, S)
            }
            then(f) {
                return n.promise.get(this).then(f)
            }
            finally(f) {
                return n.promise.get(this).finally(f)
            }
        }
        const K2 = (u,f,p)=>new Promise((S,I)=>{
            const ne = Te=>{
                u.close({
                    isDismissed: !0,
                    dismiss: Te
                })
            }
            ;
            xi.swalPromiseResolve.set(u, S),
            xi.swalPromiseReject.set(u, I),
            f.confirmButton.onclick = ()=>{
                l2(u)
            }
            ,
            f.denyButton.onclick = ()=>{
                u2(u)
            }
            ,
            f.cancelButton.onclick = ()=>{
                c2(u, ne)
            }
            ,
            f.closeButton.onclick = ()=>{
                ne(bo.close)
            }
            ,
            d2(u, f, ne),
            d1(u, _, p, ne),
            e2(u, p),
            F2(p),
            G2(_, p, ne),
            Q2(f, p),
            setTimeout(()=>{
                f.container.scrollTop = 0
            }
            )
        }
        )
          , q2 = (u,f)=>{
            const p = $2(u)
              , S = Object.assign({}, xo, f, p, u);
            return S.showClass = Object.assign({}, xo.showClass, S.showClass),
            S.hideClass = Object.assign({}, xo.hideClass, S.hideClass),
            S
        }
          , Y2 = u=>{
            const f = {
                popup: T(),
                container: b(),
                actions: F(),
                confirmButton: U(),
                denyButton: G(),
                cancelButton: B(),
                loader: N(),
                closeButton: re(),
                validationMessage: X(),
                progressSteps: Ne()
            };
            return n.domCache.set(u, f),
            f
        }
          , G2 = (u,f,p)=>{
            const S = Q();
            ct(S),
            f.timer && (u.timeout = new O2(()=>{
                p("timer"),
                delete u.timeout
            }
            ,f.timer),
            f.timerProgressBar && (Qe(S),
            Re(S, f, "timerProgressBar"),
            setTimeout(()=>{
                u.timeout && u.timeout.running && go(f.timer)
            }
            )))
        }
          , Q2 = (u,f)=>{
            if (!f.toast) {
                if (!y(f.allowEnterKey)) {
                    X2();
                    return
                }
                J2(u, f) || ql(-1, 1)
            }
        }
          , J2 = (u,f)=>f.focusDeny && bt(u.denyButton) ? (u.denyButton.focus(),
        !0) : f.focusCancel && bt(u.cancelButton) ? (u.cancelButton.focus(),
        !0) : f.focusConfirm && bt(u.confirmButton) ? (u.confirmButton.focus(),
        !0) : !1
          , X2 = ()=>{
            document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur()
        }
        ;
        if (typeof window < "u" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
            const u = new Date
              , f = localStorage.getItem("swal-initiation");
            f ? (u.getTime() - Date.parse(f)) / (1e3 * 60 * 60 * 24) > 3 && setTimeout(()=>{
                document.body.style.pointerEvents = "none";
                const p = document.createElement("audio");
                p.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",
                p.loop = !0,
                document.body.appendChild(p),
                setTimeout(()=>{
                    p.play().catch(()=>{}
                    )
                }
                , 2500)
            }
            , 500) : localStorage.setItem("swal-initiation", `${u}`)
        }
        Object.assign(Eo.prototype, Zd),
        Object.assign(Eo, P2),
        Object.keys(Zd).forEach(u=>{
            Eo[u] = function() {
                if (Tn)
                    return Tn[u](...arguments)
            }
        }
        ),
        Eo.DismissReason = bo,
        Eo.version = "11.7.3";
        const Ws = Eo;
        return Ws.default = Ws,
        Ws
    }),
    typeof zt < "u" && zt.Sweetalert2 && (zt.swal = zt.sweetAlert = zt.Swal = zt.SweetAlert = zt.Sweetalert2),
    typeof document < "u" && function(n, r) {
        var o = n.createElement("style");
        if (n.getElementsByTagName("head")[0].appendChild(o),
        o.styleSheet)
            o.styleSheet.disabled || (o.styleSheet.cssText = r);
        else
            try {
                o.innerHTML = r
            } catch {
                o.innerText = r
            }
    }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')
}
)(F0);
var dO = F0.exports;
const ln = Mn(dO);
function B0({round: e}) {
    var i, s;
    const t = ww()
      , n = a=>nw + a + ".svg"
      , r = Math.floor(Date.now() / 1e3)
      , o = (e == null ? void 0 : e.close_at) <= r;
    return k.jsx(cl, {
        className: o ? "bg-danger border-danger bg-opacity-75 text-white shadow shadow-none" : "bg-success bg-opacity-75 border border-success text-white shadow shadow-sm",
        style: {
            cursor: "pointer"
        },
        onClick: ()=>o ? ln.fire("รอบหวยนี้ปิดแล้ว", "", "error") : t(`/bet-room/${e._id}`),
        children: k.jsx(cl.Body, {
            className: "d-flex",
            children: k.jsxs("div", {
                className: "d-flex gap-2",
                children: [k.jsx(O0, {
                    src: n((i = e == null ? void 0 : e.lottery) == null ? void 0 : i.img_links),
                    style: {
                        width: "100px"
                    },
                    className: "border",
                    rounded: !0
                }), k.jsxs("div", {
                    className: "d-flex flex-column gap-2",
                    children: [k.jsxs("span", {
                        className: "text-truncate fw-bold",
                        children: [(s = e == null ? void 0 : e.lottery) == null ? void 0 : s.name, " ", e == null ? void 0 : e.round_name]
                    }), k.jsxs("span", {
                        className: "text-truncate",
                        children: ["ปิดรับ ", lO(e.close_at)]
                    })]
                })]
            })
        })
    })
}
B0.propTypes = {
    round: be.object.isRequired
};
const pO = async e=>new Promise(t=>(e.map(n=>n.rounds.sort((i,s)=>i.status === "open" && s.status !== "open" ? -1 : i.status !== "open" && s.status === "open" ? 1 : i.status === s.status ? i.close_at - s.close_at : 0)),
t(e)));
function hO() {
    const [e,t] = P.useState([]);
    return P.useEffect(()=>{
        (async()=>{
            try {
                const {data: r} = await Bw.get(`${tw}/round`)
                  , o = await pO(r.data || []);
                t(o)
            } catch (r) {
                console.error(r)
            }
        }
        )()
    }
    , []),
    k.jsx(Rd, {
        children: k.jsx(Sm, {
            children: e.map((n,r)=>{
                var o, i, s;
                return k.jsxs("div", {
                    children: [k.jsx("h4", {
                        children: (o = n == null ? void 0 : n.lotteryType) == null ? void 0 : o.name
                    }), ((i = n == null ? void 0 : n.rounds) == null ? void 0 : i.length) === 0 ? k.jsx(ul, {
                        variant: "danger",
                        children: "ไม่มีรอบ"
                    }) : k.jsx(Sm, {
                        children: (s = n == null ? void 0 : n.rounds) == null ? void 0 : s.map((a,l)=>k.jsx(f0, {
                            md: 6,
                            className: "mb-4",
                            children: k.jsx(B0, {
                                round: a
                            })
                        }, l))
                    })]
                }, r)
            }
            )
        })
    })
}
const Ds = P.createContext({
    betList: [],
    setBetList: ()=>{}
    ,
    betTotal: 0,
    setBetTotal: ()=>{}
    ,
    betTypes: [],
    setBetTypes: ()=>{}
    ,
    lengthOfTypes: 2,
    newTotal: 0
})
  , U0 = ({children: e})=>{
    const [t,n] = P.useState([])
      , [r,o] = P.useState(0)
      , [i,s] = P.useState([])
      , a = P.useMemo(()=>t.length > 0 ? t.reduce((d,m)=>d + Number(m.price), 0) : 0, [t])
      , l = P.useMemo(()=>i.includes("3_up") || i.includes("3_todd") || i.includes("3_reverse") ? 3 : (i.includes("2_up") || i.includes("2_down") || i.includes("2_reverse")) && !i.includes("19_goal") ? 2 : i.includes("run_up") || i.includes("run_down") || i.includes("19_goal") ? 1 : i.includes("double") ? 2 : i.includes("triple") ? 3 : 2, [i])
      , c = {
        betList: t,
        setBetList: n,
        betTotal: r,
        setBetTotal: o,
        betTypes: i,
        setBetTypes: s,
        lengthOfTypes: l,
        newTotal: a
    };
    return k.jsx(Ds.Provider, {
        value: c,
        children: e
    })
}
;
U0.propTypes = {
    children: be.node.isRequired
};
z0.propTypes = {
    handleNumberClick: be.func.isRequired,
    handleDelete: be.func.isRequired
};
function z0({handleNumberClick: e, handleDelete: t}) {
    return k.jsxs("div", {
        className: "container-fluid d-grid gap-2",
        children: [k.jsxs("div", {
            className: "row gap-2",
            children: [k.jsx(dt, {
                size: "lg",
                variant: "outline-primary",
                className: "col",
                onClick: ()=>e("1"),
                children: "1"
            }), k.jsx(dt, {
                size: "lg",
                variant: "outline-primary",
                className: "col",
                onClick: ()=>e("2"),
                children: "2"
            }), k.jsx(dt, {
                size: "lg",
                variant: "outline-primary",
                className: "col",
                onClick: ()=>e("3"),
                children: "3"
            })]
        }), k.jsxs("div", {
            className: "row gap-2",
            children: [k.jsx(dt, {
                size: "lg",
                variant: "outline-primary",
                className: "col",
                onClick: ()=>e("4"),
                children: "4"
            }), k.jsx(dt, {
                size: "lg",
                variant: "outline-primary",
                className: "col",
                onClick: ()=>e("5"),
                children: "5"
            }), k.jsx(dt, {
                size: "lg",
                variant: "outline-primary",
                className: "col",
                onClick: ()=>e("6"),
                children: "6"
            })]
        }), k.jsxs("div", {
            className: "row gap-2",
            children: [k.jsx(dt, {
                size: "lg",
                variant: "outline-primary",
                className: "col",
                onClick: ()=>e("7"),
                children: "7"
            }), k.jsx(dt, {
                size: "lg",
                variant: "outline-primary",
                className: "col",
                onClick: ()=>e("8"),
                children: "8"
            }), k.jsx(dt, {
                size: "lg",
                variant: "outline-primary",
                className: "col",
                onClick: ()=>e("9"),
                children: "9"
            })]
        }), k.jsxs("div", {
            className: "row gap-2",
            children: [k.jsx(dt, {
                size: "lg",
                variant: "outline-primary",
                className: "col",
                onClick: ()=>e("0"),
                children: "0"
            }), k.jsx(dt, {
                size: "lg",
                variant: "danger",
                className: "col-8",
                onClick: t,
                children: k.jsxs("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    className: "bi bi-backspace",
                    viewBox: "0 0 16 16",
                    children: [k.jsx("path", {
                        d: "M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"
                    }), k.jsx("path", {
                        d: "M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"
                    })]
                })
            })]
        })]
    })
}
function H0({numbers: e, length: t=2}) {
    return k.jsx("div", {
        className: "d-flex justify-content-center gap-2",
        children: Array(t).fill("").map((n,r)=>k.jsx("div", {
            className: "d-grid align-content-center border rounded-3 text-center bg-light",
            style: {
                width: "3rem",
                height: "3rem"
            },
            children: e[r]
        }, r))
    })
}
H0.propTypes = {
    numbers: be.arrayOf(be.string).isRequired,
    length: be.number.isRequired
};
function W0() {
    async function e({number: r="", types: o=[]}) {
        return new Promise(i=>{
            let s = [];
            if (o.includes("3_up") || o.includes("3_todd") || o.includes("3_reverse"))
                if (o.includes("3_reverse")) {
                    const a = cO(r);
                    if (o.includes("3_todd")) {
                        const l = a.map(c=>({
                            type: "3_up",
                            number: c,
                            price: 1
                        }));
                        return s.push(...l, {
                            type: "3_todd",
                            number: r,
                            price: 1
                        }),
                        i(s)
                    } else {
                        const l = a.map(c=>({
                            type: "3_up",
                            number: c,
                            price: 1
                        }));
                        return s.push(...l),
                        i(s)
                    }
                } else
                    return s = o.map(a=>({
                        type: a,
                        number: r,
                        price: 1
                    })),
                    i(s);
            else if ((o.includes("2_up") || o.includes("2_down") || o.includes("2_reverse")) && !o.includes("19_goal"))
                if (o.includes("2_reverse")) {
                    const a = uO([r]);
                    if (o.includes("2_up") && o.includes("2_down")) {
                        const l = a.map(d=>({
                            type: "2_up",
                            number: d,
                            price: 1
                        }))
                          , c = a.map(d=>({
                            type: "2_down",
                            number: d,
                            price: 1
                        }));
                        return s.push(...l, ...c),
                        i(s)
                    } else if (o.includes("2_up") && !o.includes("2_down")) {
                        const l = a.map(c=>({
                            type: "2_up",
                            number: c,
                            price: 1
                        }));
                        return s.push(...l),
                        i(s)
                    } else if (o.includes("2_down") && !o.includes("2_up")) {
                        const l = a.map(c=>({
                            type: "2_down",
                            number: c,
                            price: 1
                        }));
                        return s.push(...l),
                        i(s)
                    }
                } else
                    return s = o.map(a=>({
                        type: a,
                        number: r,
                        price: 1
                    })),
                    i(s);
            else {
                if (o.includes("run_up") || o.includes("run_down"))
                    return s = o.map(a=>({
                        type: a,
                        number: r,
                        price: 1
                    })),
                    i(s);
                if (o.includes("19_goal")) {
                    console.log("19_goal");
                    const a = fO(r);
                    if (o.includes("2_up") && o.includes("2_down")) {
                        const l = a.map(d=>({
                            type: "2_up",
                            number: d,
                            price: 1
                        }))
                          , c = a.map(d=>({
                            type: "2_down",
                            number: d,
                            price: 1
                        }));
                        return s.push(...l, ...c),
                        i(s)
                    } else if (o.includes("2_up") && !o.includes("2_down")) {
                        const l = a.map(c=>({
                            type: "2_up",
                            number: c,
                            price: 1
                        }));
                        return s.push(...l),
                        i(s)
                    } else if (o.includes("2_down") && !o.includes("2_up")) {
                        const l = a.map(c=>({
                            type: "2_down",
                            number: c,
                            price: 1
                        }));
                        return s.push(...l),
                        i(s)
                    }
                }
            }
        }
        )
    }
    async function t({types: r=[]}) {
        return new Promise(o=>{
            let i = [];
            console.log("double");
            const s = ["00", "11", "22", "33", "44", "55", "66", "77", "88", "99"];
            if (r.includes("2_up") && r.includes("2_down")) {
                const a = s.map(c=>({
                    type: "2_up",
                    number: c,
                    price: 1
                }))
                  , l = s.map(c=>({
                    type: "2_down",
                    number: c,
                    price: 1
                }));
                return i.push(...a, ...l),
                o(i)
            } else if (r.includes("2_up") && !r.includes("2_down")) {
                const a = s.map(l=>({
                    type: "2_up",
                    number: l,
                    price: 1
                }));
                return i.push(...a),
                o(i)
            } else if (r.includes("2_down") && !r.includes("2_up")) {
                const a = s.map(l=>({
                    type: "2_down",
                    number: l,
                    price: 1
                }));
                return i.push(...a),
                o(i)
            }
            return o(s)
        }
        )
    }
    async function n() {
        return new Promise(r=>{
            let o = [];
            return o = ["000", "111", "222", "333", "444", "555", "666", "777", "888", "999"].map(s=>({
                type: "3_up",
                number: s,
                price: 1
            })),
            r(o)
        }
        )
    }
    return {
        setBetDataList: e,
        setBetDataListDoubleNum: t,
        setBetDataListTripleNum: n
    }
}
function mO() {
    const {setBetList: e, lengthOfTypes: t, betTypes: n, betList: r} = P.useContext(Ds)
      , {setBetDataList: o, setBetDataListDoubleNum: i, setBetDataListTripleNum: s} = W0()
      , [a,l] = P.useState([])
      , c = P.useRef(null)
      , d = P.useCallback(()=>{
        o({
            number: a.join(""),
            types: n
        }).then(y=>{
            e(E=>[...E, ...y]),
            l([]),
            ln.fire({
                icon: "success",
                text: `เพิ่มเลข ${a.join("")} เรียบร้อย`,
                toast: !0,
                position: "top-end",
                showConfirmButton: !1,
                timer: 1500
            })
        }
        )
    }
    , [n, a, o, e])
      , m = y=>{
        n.length >= 1 ? l(E=>[...E, y]) : ln.fire({
            icon: "error",
            title: "กรุณาเลือกประเภทการแทง"
        })
    }
      , g = ()=>l(y=>y.slice(0, -1))
      , x = P.useCallback(()=>{
        const y = c.current.value;
        r.length >= 1 ? y == "" || y == 0 ? (e(E=>E.map(h=>({
            ...h,
            price: 1
        }))),
        c.current.value = "") : (e(E=>E.map(h=>({
            ...h,
            price: Number(y)
        }))),
        c.current.value = "") : (ln.fire({
            icon: "error",
            title: "ยังไม่มีรายการแทง"
        }),
        c.current.value = "",
        c.current.blur())
    }
    , [r.length, e]);
    P.useEffect(()=>{
        if (a.length == t && d(),
        a.length < 0)
            return ()=>{
                l([])
            }
    }
    , [d, a, t, n, i, e, s]);
    const w = [5, 10, 20, 50, 100];
    return k.jsxs(k.Fragment, {
        children: [k.jsx("h3", {
            className: "text-center",
            children: "ระบุตัวเลข"
        }), k.jsx(H0, {
            numbers: a,
            length: t
        }), k.jsx(z0, {
            handleNumberClick: m,
            handleDelete: g
        }), k.jsxs("div", {
            className: "d-flex border flex-column w-100 justify-content-center rounded-4 shadow-sm bg-white p-2 px-3",
            children: [k.jsx("p", {
                className: "text-center fs-5",
                children: "ใส่ราคาเท่ากันหมด"
            }), k.jsx("div", {
                className: "d-flex w-100 mb-2 justify-content-between",
                children: w.map(y=>k.jsxs(dt, {
                    variant: "dark",
                    className: "m-1",
                    onClick: ()=>e(E=>E.map(h=>({
                        ...h,
                        price: y
                    }))),
                    children: [y, "฿"]
                }, y))
            }), k.jsxs(XP, {
                className: "mb-3",
                children: [k.jsx(_0.Control, {
                    ref: c,
                    placeholder: "ใส่ราคา",
                    "aria-label": "ใส่ราคา",
                    "aria-describedby": "basic-addon2",
                    type: "text",
                    inputMode: "decimal",
                    min: 1
                }), k.jsx(dt, {
                    variant: "success",
                    id: "button-addon2",
                    onClick: x,
                    children: k.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "currentColor",
                        className: "bi bi-plus",
                        viewBox: "0 0 16 16",
                        children: k.jsx("path", {
                            d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        })
                    })
                })]
            })]
        })]
    })
}
const Cm = [{
    name: "3 ตัวบน",
    value: "3_up"
}, {
    name: "3 ตัวโต๊ด",
    value: "3_todd"
}, {
    name: "3 ตัวกลับ",
    value: "3_reverse"
}, {
    name: "2 ตัวบน",
    value: "2_up"
}, {
    name: "2 ตัวล่าง",
    value: "2_down"
}, {
    name: "2 ตัวกลับ",
    value: "2_reverse"
}, {
    name: "วิ่งบน",
    value: "run_up"
}, {
    name: "วิ่งล่าง",
    value: "run_down"
}, {
    name: "19 ประตู",
    value: "19_goal"
}, {
    name: "เลขเบิ้ล",
    value: "double"
}, {
    name: "เลขตอง",
    value: "triple"
}];
function gO() {
    const {setBetTypes: e, betTypes: t, setBetList: n} = P.useContext(Ds)
      , {setBetDataListDoubleNum: r, setBetDataListTripleNum: o} = W0()
      , i = P.useMemo(()=>t.map(c=>{
        const d = Cm.find(m=>m.value === c);
        return d ? d.name : ""
    }
    ).filter(c=>c !== ""), [t])
      , s = l=>{
        const {value: c} = l.target;
        if (c === "double") {
            r({
                types: t
            }).then(m=>{
                n(g=>[...g, ...m]),
                ln.fire({
                    icon: "success",
                    text: "เพิ่มเลขคู่เรียบร้อย",
                    toast: !0,
                    position: "top-end",
                    showConfirmButton: !1,
                    timer: 1500
                })
            }
            );
            return
        } else if (c === "triple") {
            o().then(m=>{
                n(g=>[...g, ...m]),
                ln.fire({
                    icon: "success",
                    text: "เพิ่มเลขคู่เรียบร้อย",
                    toast: !0,
                    position: "top-end",
                    showConfirmButton: !1,
                    timer: 1500
                })
            }
            );
            return
        }
        t.indexOf(c) == -1 ? c === "3_reverse" ? t.includes("3_up") ? e([...t, c]) : e([...t, "3_up", c]) : c === "2_reverse" ? t.includes("2_up") ? e([...t, c]) : e([...t, "2_up", c]) : c === "19_goal" ? t.includes("2_up") ? e([...t, c]) : e([...t, "2_up", c]) : e([...t, c]) : e(t.filter(m=>m !== c))
    }
      , a = l=>t.includes("3_up") || t.includes("3_todd") ? l == "2_up" || l == "2_down" || l == "2_reverse" || l == "run_up" || l == "run_down" || l == "19_goal" || l == "double" || l == "triple" : t.includes("3_reverse") ? l == "2_up" || l == "2_down" || l == "2_reverse" || l == "run_up" || l == "run_down" || l == "double" || l == "triple" : t.includes("2_up") || t.includes("2_down") ? l == "3_up" || l == "3_todd" || l == "3_reverse" || l == "run_up" || l == "run_down" || l == "triple" : t.includes("2_reverse") ? l == "3_up" || l == "3_todd" || l == "3_reverse" || l == "run_up" || l == "run_down" || l == "19_goal" || l == "double" || l == "triple" : t.includes("run_up") || t.includes("run_down") ? l == "3_up" || l == "3_todd" || l == "3_reverse" || l == "2_up" || l == "2_down" || l == "2_reverse" || l == "19_goal" || l == "double" || l == "triple" : t.includes("19_goal") ? (console.log("19_goal"),
    l == "3_up" || l == "3_todd" || l == "3_reverse" || l == "2_reverse" || l == "run_up" || l == "run_down" || l == "double" || l == "triple") : t.includes("double") ? l == "3_up" || l == "3_todd" || l == "3_reverse" || l == "2_up" || l == "2_down" || l == "2_reverse" || l == "run_up" || l == "run_down" || l == "19_goal" || l == "triple" : t.includes("triple") && (l == "3_up" || l == "3_todd" || l == "3_reverse" || l == "2_up" || l == "2_down" || l == "2_reverse" || l == "run_up" || l == "run_down" || l == "19_goal") || l == "double";
    return k.jsxs(Rd, {
        fluid: !0,
        children: [k.jsx("div", {
            style: {
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)"
            },
            className: "gap-2",
            children: Cm.map((l,c)=>k.jsx("div", {
                style: {
                    gridColumn: l.value === "run_up" || l.value === "run_down" ? "span 3" : "span 2",
                    display: "grid"
                },
                children: k.jsx(eO, {
                    id: `checkbox-${c}`,
                    type: "checkbox",
                    variant: t.includes(l.value) ? "primary" : a(l.value) ? "outline-secondary" : "outline-primary",
                    disabled: a(l.value),
                    value: l.value,
                    name: l.name,
                    datatype: l.name,
                    checked: t.includes(l.value),
                    onChange: s,
                    children: l.name
                })
            }, c))
        }), k.jsxs(ul, {
            variant: t.length == 0 ? "warning" : "primary",
            className: "d-flex flex-column justify-content-center align-items-center gap-2 mt-4 mb-2 rounded-4",
            children: [k.jsx(ul.Heading, {
                style: {
                    fontSize: "18px",
                    fontWeight: 700
                },
                children: "ประเภทการแทงที่เลือก"
            }), k.jsx("div", {
                children: t.length == 0 ? k.jsx("span", {
                    className: "fw-bold",
                    children: "กรุณาเลือกประเภทการแทง"
                }) : k.jsx("span", {
                    children: i.join(", ")
                })
            })]
        })]
    })
}
V0.propTypes = {
    number: be.string.isRequired,
    type: be.string.isRequired,
    price: be.oneOfType([be.string, be.number]).isRequired,
    onChange: be.func.isRequired,
    onBlur: be.func.isRequired,
    onDelete: be.func.isRequired
};
function V0({number: e, type: t, price: n, onChange: r, onBlur: o, onDelete: i}) {
    return k.jsxs("tr", {
        children: [k.jsx("td", {
            className: "text-center",
            children: k.jsx("span", {
                className: "badge text-bg-success h-100 fs-5",
                children: e
            })
        }), k.jsx("td", {
            children: k.jsx(_0.Control, {
                type: "text",
                id: `${t}-${e}`,
                value: n,
                placeholder: "ใส่ราคา",
                inputMode: "decimal",
                "aria-label": "ใส่ราคา",
                onChange: r,
                min: 1,
                onBlur: o,
                readOnly: !0,
                disabled: !0
            })
        }), k.jsx("td", {
            className: "text-center",
            children: k.jsx(dt, {
                onClick: i,
                variant: "danger",
                children: k.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    className: "bi bi-trash3",
                    viewBox: "0 0 16 16",
                    children: k.jsx("path", {
                        d: "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                    })
                })
            })
        })]
    })
}
function vO() {
    const {betList: e, setBetList: t} = P.useContext(Ds)
      , n = ["2_up", "2_down", "3_up", "3_todd", "run_up", "run_down"]
      , r = P.useCallback((s,a)=>{
        const {value: l} = s.target;
        t(c=>{
            const d = [...c];
            return d[a].price = l,
            d
        }
        )
    }
    , [t])
      , o = P.useCallback((s,a)=>{
        const {value: l} = s.target;
        if (l == "" || l == 0) {
            console.log("onBlurPrice", {
                value: l,
                idx: a
            });
            const c = [...e];
            c[a].price = 1,
            t(c)
        } else
            t(c=>{
                const d = [...c];
                return d[a].price = Number(l),
                d
            }
            )
    }
    , [e, t])
      , i = P.useCallback(s=>{
        t(a=>{
            const l = [...a];
            return l.splice(s, 1),
            l
        }
        ),
        ln.fire({
            icon: "success",
            text: `ลบเลข ${e[s].number} เรียบร้อยแล้ว`,
            toast: !0,
            position: "top-end",
            showConfirmButton: !1,
            timer: 1500
        })
    }
    , [e, t]);
    return k.jsx("div", {
        className: "border border-0 border-danger d-grid gap-2",
        children: e.length >= 1 ? n.map(s=>e.some(a=>a.type === s) ? k.jsxs("div", {
            className: "d-flex flex-column justify-content-center align-items-center border rounded-4 p-2 bg-light",
            children: [k.jsx("div", {
                className: "w-100",
                children: k.jsx("p", {
                    className: "text-center fs-5",
                    children: M0(s)
                })
            }), k.jsx("div", {
                className: "w-100 border overflow-hidden rounded-3 bg-white shadow-sm",
                children: k.jsxs("table", {
                    className: "table table-hover table-borderless",
                    children: [k.jsx("thead", {
                        className: "border-bottom",
                        children: k.jsxs("tr", {
                            children: [k.jsx("th", {
                                className: "text-center",
                                scope: "col",
                                children: "ตัวเลข"
                            }), k.jsx("th", {
                                scope: "col",
                                children: "จำนวนเงิน"
                            }), k.jsx("th", {
                                className: "text-center",
                                scope: "col",
                                children: "ลบ"
                            })]
                        })
                    }), k.jsx("tbody", {
                        children: e.map((a,l)=>a.type === s ? k.jsx(V0, {
                            ...a,
                            onChange: c=>r(c, l),
                            onBlur: c=>o(c, l),
                            onDelete: ()=>i(l)
                        }, l) : null)
                    })]
                })
            })]
        }, s) : null) : k.jsx(ul, {
            variant: "secondary",
            className: "rounded-4",
            children: k.jsx("p", {
                className: "text-center fs-5",
                children: "ยังไม่มีรายการแทง"
            })
        })
    })
}
const To = (e=[],t)=>e.filter(n=>n.type === t).map(n=>n.number).join(" , ");
function yO() {
    var g, x, w;
    const e = ww()
      , {id: t} = Wk()
      , [n,r] = P.useState(!1)
      , [o,i] = P.useState({})
      , {betList: s, setBetList: a, setBetTotal: l, newTotal: c} = P.useContext(Ds)
      , d = y=>nw + y + ".svg"
      , m = async()=>{
        var T, R;
        if (r(!0),
        s.length === 0) {
            r(!1),
            ln.fire("กรุณาใส่เลขที่ต้องการเพิ่ม", "", "error");
            return
        }
        const y = s.reduce((D,H)=>{
            const {type: z, number: he, price: Ne} = H
              , X = z;
            return D[X] || (D[X] = {
                type: z,
                price: Ne,
                numbers: []
            }),
            D[X].numbers.push(he),
            D
        }
        , {})
          , E = Object.values(y)
          , v = JSON.stringify([]).replace(/["[\]]/g, "")
          , b = await Ui.getProfile()
          , C = {
            round_id: (T = o == null ? void 0 : o.lottery) == null ? void 0 : T.name,
            bet_type: o == null ? void 0 : o.round_name,
            total: c,
            user_id: b.userId,
            display_name: b.displayName,
            picture_url: b.pictureUrl,
            bet_lottery: v,
            bet_3_up: To(s, "3_up"),
            bet_3_todd: To(s, "3_todd"),
            bet_2_up: To(s, "2_up"),
            bet_2_down: To(s, "2_down"),
            bet_run_up: To(s, "run_up"),
            bet_run_down: To(s, "run_down")
        }
          , O = [];
        E.forEach(D=>{
            O.push({
                type: "text",
                text: `${M0(D.type)} : x ${D.price}`,
                align: "start",
                wrap: !0,
                weight: "bold",
                color: "#ffcc00"
            }, {
                type: "text",
                text: D.numbers.join(" "),
                align: "start",
                wrap: !0,
                weight: "bold",
                color: "#ffffff"
            })
        }
        ),
        Ui.sendMessages([{
            type: "flex",
            altText: "ส่งโพยเรีนยบร้อยแล้ว กรุณาโอนเงินก่อนหวยปิดรับ",
            contents: {
                type: "bubble",
                size: "mega",
                header: {
                    type: "box",
                    layout: "horizontal",
                    contents: [{
                        type: "box",
                        layout: "vertical",
                        contents: [{
                            type: "image",
                            url: "" + b.pictureUrl,
                            aspectMode: "cover",
                            size: "full"
                        }],
                        cornerRadius: "100px",
                        width: "72px",
                        height: "72px",
                        margin: "xl",
                        offsetTop: "none"
                    }, {
                        type: "text",
                        text: "ออกโพยให้คุณ: " + b.displayName,
                        gravity: "center",
                        weight: "bold",
                        size: "lg",
                        wrap: !0,
                        align: "center",
                        color: "#ffffff"
                    }],
                    backgroundColor: "#7f0000",
                    paddingAll: "0px"
                },
                body: {
                    type: "box",
                    layout: "vertical",
                    contents: [{
                        type: "box",
                        layout: "horizontal",
                        contents: [{
                            type: "box",
                            layout: "vertical",
                            contents: [{
                                type: "text",
                                text: `${(R = o == null ? void 0 : o.lottery) == null ? void 0 : R.name} [${o == null ? void 0 : o.round_name}]`,
                                wrap: !0,
                                color: "#ffffff",
                                weight: "bold",
                                size: "xl",
                                align: "center"
                            }]
                        }]
                    }, {
                        type: "separator",
                        margin: "md",
                        color: "#7f0000"
                    }, {
                        type: "box",
                        layout: "horizontal",
                        contents: [{
                            type: "box",
                            layout: "vertical",
                            contents: O
                        }],
                        margin: "md"
                    }, {
                        type: "separator",
                        color: "#ffffff",
                        margin: "md"
                    }, {
                        type: "box",
                        layout: "horizontal",
                        contents: [{
                            type: "box",
                            layout: "vertical",
                            contents: [{
                                type: "text",
                                text: "ยอดรวม",
                                weight: "bold",
                                color: "#ffcc00",
                                align: "start",
                                size: "xl"
                            }]
                        }, {
                            type: "box",
                            layout: "vertical",
                            contents: [{
                                type: "text",
                                text: Em(c).replace("฿", "").trim(),
                                weight: "bold",
                                color: "#ffcc00",
                                align: "end",
                                wrap: !0,
                                size: "xl"
                            }]
                        }],
                        margin: "md"
                    }],
                    backgroundColor: "#7f0000"
                },
                footer: {
                    type: "box",
                    layout: "vertical",
                    contents: [{
                        type: "text",
                        text: "กรุณาโอนเงินก่อนหวยปิดรับนะครับ ",
                        align: "center",
                        wrap: !0,
                        weight: "bold",
                        size: "md",
                        color: "#ffffff"
                    }, {
                        type: "separator",
                        margin: "lg",
                        color: "#7f0000"
                    }],
                    backgroundColor: "#7f0000"
                }
            }
        }]).then(()=>{
            Ui.sendMessages([{
                type: "text",
                text: "เลขบัญชี"
            }]).then(()=>{
                ln.fire({
                    icon: "success",
                    title: "ส่งโพยร้อยแล้ว!",
                    text: "กรุณาโอนเงินก่อนหวยปิดรับ !",
                    showConfirmButton: !1,
                    timer: 1500
                }).then(()=>{
                    Ui.closeWindow()
                }
                ).catch(()=>{
                    ln.fire("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง", "", "error")
                }
                ).finally(()=>r(!1))
            }
            )
        }
        ).catch(()=>{
            ln.fire("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง", "", "error")
        }
        ).finally(()=>r(!1)),
        fetch("https://script.google.com/macros/s/AKfycbxoLtFgOKvAsHpsuTG2NbDgTiR6T_23qn_tCdx9y9XweHaMMrGqTlWUy0yzqxLNmZmo/exec", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(C)
        }).then(()=>{
            a([]),
            l(0)
        }
        ).catch(D=>{
            console.error(D),
            ln.fire("เกิดข้อผิดพลาดในการบันทึกข้อมูล", "", "error")
        }
        ).finally(()=>r(!1))
    }
    ;
    return P.useEffect(()=>{
        window.scrollTo(0, 0),
        t ? (async()=>{
            try {
                const {data: E} = await Bw.get(`${tw}/round/${t}`);
                E.data ? i(E.data) : e("/")
            } catch {
                e("/")
            }
        }
        )() : e("/")
    }
    , [t, e]),
    k.jsxs(k.Fragment, {
        children: [k.jsx("div", {
            children: k.jsx(dt, {
                variant: "link",
                onClick: ()=>{
                    e("/")
                }
                ,
                children: "ย้อนกลับ"
            })
        }), k.jsxs(Rd, {
            className: "d-flex flex-column",
            style: {
                border: "0px solid red",
                height: "calc(100vh - 2rem)",
                gap: "1rem",
                paddingTop: "1rem",
                paddingBottom: "1rem"
            },
            children: [k.jsx(cl, {
                className: "shadow shadow-sm",
                children: k.jsx(cl.Body, {
                    className: "d-flex",
                    children: k.jsxs("div", {
                        className: "d-flex gap-2",
                        children: [k.jsx(O0, {
                            src: d((g = o == null ? void 0 : o.lottery) == null ? void 0 : g.img_links),
                            style: {
                                width: "100px"
                            },
                            className: "border",
                            rounded: !0
                        }), k.jsxs("div", {
                            className: "d-flex flex-column gap-2",
                            children: [k.jsxs("span", {
                                className: "text-truncate fw-bold",
                                children: ["[", (x = o == null ? void 0 : o.lotteryType) == null ? void 0 : x.name, "] ", (w = o == null ? void 0 : o.lottery) == null ? void 0 : w.name]
                            }), k.jsxs("span", {
                                className: "text-truncate",
                                children: ["รอบหวยที่ ", o == null ? void 0 : o.round_name]
                            })]
                        })]
                    })
                })
            }), k.jsx(gO, {}), k.jsx(mO, {}), k.jsx("div", {
                className: "p-4 rounded-4 shadow-sm border",
                children: k.jsxs("div", {
                    className: "card-body text-end d-flex justify-content-between",
                    children: [k.jsx("h5", {
                        className: "card-title",
                        children: "รวม"
                    }), k.jsx("h5", {
                        className: "card-title",
                        children: Em(c).replace("฿", "").trim()
                    })]
                })
            }), k.jsx(vO, {}), k.jsxs("div", {
                className: "d-flex gap-2 mt-auto pb-4",
                children: [k.jsx(dt, {
                    variant: "outline-danger",
                    className: "w-25",
                    onClick: n ? null : ()=>{
                        a([]),
                        l(0)
                    }
                    ,
                    disabled: n,
                    children: "ล้าง"
                }), k.jsx(dt, {
                    variant: "primary",
                    className: "w-75",
                    onClick: n ? null : m,
                    disabled: n,
                    children: n ? "กำลังบันทึก..." : "บันทึก"
                })]
            })]
        })]
    })
}
const wO = s_([{
    path: "/",
    index: !0,
    element: k.jsx(hO, {})
}, {
    path: "/bet-room/:id",
    element: k.jsx(yO, {})
}, {
    path: "/_v",
    element: k.jsxs("div", {
        children: ["Version: ", tk]
    })
}]);
function bO() {
    return P.useEffect(()=>{
        (async()=>{
            try {
                await Ui.init({
                    liffId: ek
                })
            } catch (t) {
                console.error("LIFF initialization failed", t.message)
            }
        }
        )()
    }
    , []),
    k.jsx(n_, {
        router: wO
    })
}
// zu.createRoot(document.getElementById("root")).render(k.jsx(LT, {
//     breakpoints: ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"],
//     minBreakpoint: "xxs",
//     children: k.jsx(U0, {
//         children: k.jsx(bO, {})
//     })
// }));
