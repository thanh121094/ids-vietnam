if (function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    function g(e, t, n) {
        var i, r = (t = t || J).createElement("script");
        if (r.text = e, n) for (i in fe) n[i] && (r[i] = n[i]);
        t.head.appendChild(r).parentNode.removeChild(r);
    }
    function m(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ie[re.call(e)] || "object" : typeof e;
    }
    function a(e) {
        var t = !!e && "length" in e && e.length, n = m(e);
        return !ue(e) && !ce(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
    }
    function u(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function t(e, n, i) {
        return ue(n) ? de.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i;
        }) : n.nodeType ? de.grep(e, function(e) {
            return e === n !== i;
        }) : "string" != typeof n ? de.grep(e, function(e) {
            return -1 < ne.call(n, e) !== i;
        }) : de.filter(n, e, i);
    }
    function n(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    function c(e) {
        return e;
    }
    function f(e) {
        throw e;
    }
    function l(e, t, n, i) {
        var r;
        try {
            e && ue(r = e.promise) ? r.call(e).done(t).fail(n) : e && ue(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [ e ].slice(i));
        } catch (e) {
            n.apply(void 0, [ e ]);
        }
    }
    function i() {
        J.removeEventListener("DOMContentLoaded", i), C.removeEventListener("load", i), 
        de.ready();
    }
    function r(e, t) {
        return t.toUpperCase();
    }
    function d(e) {
        return e.replace(Se, "ms-").replace(De, r);
    }
    function o() {
        this.expando = de.expando + o.uid++;
    }
    function p(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Oe, "-$&").toLowerCase(), 
        "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Le.test(r) ? JSON.parse(r) : r);
            } catch (e) {}
            $e.set(e, t, n);
        } else n = void 0;
        return n;
    }
    function h(e, t, n, i) {
        var r, o, s = 20, a = i ? function() {
            return i.cur();
        } : function() {
            return de.css(e, t, "");
        }, l = a(), u = n && n[3] || (de.cssNumber[t] ? "" : "px"), c = (de.cssNumber[t] || "px" !== u && +l) && qe.exec(de.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; s--; ) de.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), 
            c /= o;
            c *= 2, de.style(e, t, c + u), n = n || [];
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, 
        i.start = c, i.end = r)), r;
    }
    function v(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++) (i = e[o]).style && (n = i.style.display, 
        t ? ("none" === n && (r[o] = je.get(i, "display") || null, r[o] || (i.style.display = "")), 
        "" === i.style.display && Re(i) && (r[o] = (f = u = l = void 0, u = (a = i).ownerDocument, 
        c = a.nodeName, (f = Me[c]) || (l = u.body.appendChild(u.createElement(c)), f = de.css(l, "display"), 
        l.parentNode.removeChild(l), "none" === f && (f = "block"), Me[c] = f)))) : "none" !== n && (r[o] = "none", 
        je.set(i, "display", n)));
        var a, l, u, c, f;
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e;
    }
    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
        void 0 === t || t && u(e, t) ? de.merge([ e ], n) : n;
    }
    function b(e, t) {
        for (var n = 0, i = e.length; n < i; n++) je.set(e[n], "globalEval", !t || je.get(t[n], "globalEval"));
    }
    function x(e, t, n, i, r) {
        for (var o, s, a, l, u, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++) if ((o = e[p]) || 0 === o) if ("object" === m(o)) de.merge(d, o.nodeType ? [ o ] : o); else if (Xe.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (_e.exec(o) || [ "", "" ])[1].toLowerCase(), 
            l = Be[a] || Be._default, s.innerHTML = l[1] + de.htmlPrefilter(o) + l[2], c = l[0]; c--; ) s = s.lastChild;
            de.merge(d, s.childNodes), (s = f.firstChild).textContent = "";
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++]; ) if (i && -1 < de.inArray(o, i)) r && r.push(o); else if (u = de.contains(o.ownerDocument, o), 
        s = y(f.appendChild(o), "script"), u && b(s), n) for (c = 0; o = s[c++]; ) We.test(o.type || "") && n.push(o);
        return f;
    }
    function s() {
        return !0;
    }
    function w() {
        return !1;
    }
    function T() {
        try {
            return J.activeElement;
        } catch (e) {}
    }
    function E(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) E(e, a, n, i, t[a], o);
            return e;
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, 
        i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = w; else if (!r) return e;
        return 1 === o && (s = r, (r = function(e) {
            return de().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = de.guid++)), e.each(function() {
            de.event.add(this, t, r, i, n);
        });
    }
    function k(e, t) {
        return u(e, "table") && u(11 !== t.nodeType ? t : t.firstChild, "tr") && de(e).children("tbody")[0] || e;
    }
    function N(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function S(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
        e;
    }
    function D(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (je.hasData(e) && (o = je.access(e), s = je.set(t, o), u = o.events)) for (r in delete s.handle, 
            s.events = {}, u) for (n = 0, i = u[r].length; n < i; n++) de.event.add(t, r, u[r][n]);
            $e.hasData(e) && (a = $e.access(e), l = de.extend({}, a), $e.set(t, l));
        }
    }
    function A(n, i, r, o) {
        i = ee.apply([], i);
        var e, t, s, a, l, u, c = 0, f = n.length, d = f - 1, p = i[0], h = ue(p);
        if (h || 1 < f && "string" == typeof p && !le.checkClone && Ze.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            h && (i[0] = p.call(this, e, t.html())), A(t, i, r, o);
        });
        if (f && (t = (e = x(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), 
        t || o)) {
            for (a = (s = de.map(y(e, "script"), N)).length; c < f; c++) l = e, c !== d && (l = de.clone(l, !0, !0), 
            a && de.merge(s, y(l, "script"))), r.call(n[c], l, c);
            if (a) for (u = s[s.length - 1].ownerDocument, de.map(s, S), c = 0; c < a; c++) l = s[c], 
            We.test(l.type || "") && !je.access(l, "globalEval") && de.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? de._evalUrl && de._evalUrl(l.src) : g(l.textContent.replace(et, ""), u, l));
        }
        return n;
    }
    function j(e, t, n) {
        for (var i, r = t ? de.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || de.cleanData(y(i)), 
        i.parentNode && (n && de.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    function $(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || nt(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || de.contains(e.ownerDocument, e) || (s = de.style(e, t)), 
        !le.pixelBoxStyles() && tt.test(s) && it.test(t) && (i = a.width, r = a.minWidth, 
        o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, 
        a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s;
    }
    function L(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }
    function O(e) {
        var t = de.cssProps[e];
        return t || (t = de.cssProps[e] = function(e) {
            if (e in ut) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = lt.length; n--; ) if ((e = lt[n] + t) in ut) return e;
        }(e) || e), t;
    }
    function H(e, t, n) {
        var i = qe.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function q(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0, a = 0, l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (;s < 4; s += 2) "margin" === n && (l += de.css(e, n + Ie[s], !0, r)), i ? ("content" === n && (l -= de.css(e, "padding" + Ie[s], !0, r)), 
        "margin" !== n && (l -= de.css(e, "border" + Ie[s] + "Width", !0, r))) : (l += de.css(e, "padding" + Ie[s], !0, r), 
        "padding" !== n ? l += de.css(e, "border" + Ie[s] + "Width", !0, r) : a += de.css(e, "border" + Ie[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), 
        l;
    }
    function I(e, t, n) {
        var i = nt(e), r = $(e, t, i), o = "border-box" === de.css(e, "boxSizing", !1, i), s = o;
        if (tt.test(r)) {
            if (!n) return r;
            r = "auto";
        }
        return s = s && (le.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === de.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], 
        s = !0), (r = parseFloat(r) || 0) + q(e, t, n || (o ? "border" : "content"), s, i, r) + "px";
    }
    function R(e, t, n, i, r) {
        return new R.prototype.init(e, t, n, i, r);
    }
    function P() {
        ft && (!1 === J.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(P) : C.setTimeout(P, de.fx.interval), 
        de.fx.tick());
    }
    function M() {
        return C.setTimeout(function() {
            ct = void 0;
        }), ct = Date.now();
    }
    function F(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = Ie[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function _(e, t, n) {
        for (var i, r = (W.tweeners[t] || []).concat(W.tweeners["*"]), o = 0, s = r.length; o < s; o++) if (i = r[o].call(n, t, e)) return i;
    }
    function W(o, e, t) {
        var n, s, i = 0, r = W.prefilters.length, a = de.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (s) return !1;
            for (var e = ct || M(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
            return a.notifyWith(o, [ u, n, t ]), n < 1 && r ? t : (r || a.notifyWith(o, [ u, 1, 0 ]), 
            a.resolveWith(o, [ u ]), !1);
        }, u = a.promise({
            elem: o,
            props: de.extend({}, e),
            opts: de.extend(!0, {
                specialEasing: {},
                easing: de.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: ct || M(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = de.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n), n;
            },
            stop: function(e) {
                var t = 0, n = e ? u.tweens.length : 0;
                if (s) return this;
                for (s = !0; t < n; t++) u.tweens[t].run(1);
                return e ? (a.notifyWith(o, [ u, 1, 0 ]), a.resolveWith(o, [ u, e ])) : a.rejectWith(o, [ u, e ]), 
                this;
            }
        }), c = u.props;
        for (function(e, t) {
            var n, i, r, o, s;
            for (n in e) if (r = t[i = d(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), 
            n !== i && (e[i] = o, delete e[n]), (s = de.cssHooks[i]) && "expand" in s) for (n in o = s.expand(o), 
            delete e[i], o) n in e || (e[n] = o[n], t[n] = r); else t[i] = r;
        }(c, u.opts.specialEasing); i < r; i++) if (n = W.prefilters[i].call(u, o, c, u.opts)) return ue(n.stop) && (de._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), 
        n;
        return de.map(c, _, u), ue(u.opts.start) && u.opts.start.call(o, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), 
        de.fx.timer(de.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })), u;
    }
    function B(e) {
        return (e.match(Ce) || []).join(" ");
    }
    function z(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function U(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(Ce) || [];
    }
    function X(n, e, i, r) {
        var t;
        if (Array.isArray(e)) de.each(e, function(e, t) {
            i || Nt.test(n) ? r(n, t) : X(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r);
        }); else if (i || "object" !== m(e)) r(n, e); else for (t in e) X(n + "[" + t + "]", e[t], i, r);
    }
    function V(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0, r = e.toLowerCase().match(Ce) || [];
            if (ue(t)) for (;n = r[i++]; ) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function Q(t, r, o, s) {
        function a(e) {
            var i;
            return l[e] = !0, de.each(t[e] || [], function(e, t) {
                var n = t(r, o, s);
                return "string" != typeof n || u || l[n] ? u ? !(i = n) : void 0 : (r.dataTypes.unshift(n), 
                a(n), !1);
            }), i;
        }
        var l = {}, u = t === Rt;
        return a(r.dataTypes[0]) || !l["*"] && a("*");
    }
    function Y(e, t) {
        var n, i, r = de.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && de.extend(!0, e, i), e;
    }
    var G = [], J = C.document, K = Object.getPrototypeOf, Z = G.slice, ee = G.concat, te = G.push, ne = G.indexOf, ie = {}, re = ie.toString, oe = ie.hasOwnProperty, se = oe.toString, ae = se.call(Object), le = {}, ue = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
    }, ce = function(e) {
        return null != e && e === e.window;
    }, fe = {
        type: !0,
        src: !0,
        noModule: !0
    }, de = function(e, t) {
        return new de.fn.init(e, t);
    }, pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    de.fn = de.prototype = {
        jquery: "3.3.1",
        constructor: de,
        length: 0,
        toArray: function() {
            return Z.call(this);
        },
        get: function(e) {
            return null == e ? Z.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = de.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function(e) {
            return de.each(this, e);
        },
        map: function(n) {
            return this.pushStack(de.map(this, function(e, t) {
                return n.call(e, t, e);
            }));
        },
        slice: function() {
            return this.pushStack(Z.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: te,
        sort: G.sort,
        splice: G.splice
    }, de.extend = de.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ue(s) || (s = {}), 
        a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], 
        s !== (i = e[t]) && (u && i && (de.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, 
        o = n && Array.isArray(n) ? n : []) : o = n && de.isPlainObject(n) ? n : {}, s[t] = de.extend(u, o, i)) : void 0 !== i && (s[t] = i));
        return s;
    }, de.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== re.call(e) || (t = K(e)) && ("function" != typeof (n = oe.call(t, "constructor") && t.constructor) || se.call(n) !== ae));
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        globalEval: function(e) {
            g(e);
        },
        each: function(e, t) {
            var n, i = 0;
            if (a(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(pe, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (a(Object(e)) ? de.merge(n, "string" == typeof e ? [ e ] : e) : te.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : ne.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e;
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i;
        },
        map: function(e, t, n) {
            var i, r, o = 0, s = [];
            if (a(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r); else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
            return ee.apply([], s);
        },
        guid: 1,
        support: le
    }), "function" == typeof Symbol && (de.fn[Symbol.iterator] = G[Symbol.iterator]), 
    de.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ie["[object " + t + "]"] = t.toLowerCase();
    });
    var he = function(n) {
        function x(e, t, n, i) {
            var r, o, s, a, l, u, c, f = t && t.ownerDocument, d = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!i && ((t ? t.ownerDocument || t : M) !== $ && j(t), t = t || $, O)) {
                if (11 !== d && (l = ge.exec(e))) if (r = l[1]) {
                    if (9 === d) {
                        if (!(s = t.getElementById(r))) return n;
                        if (s.id === r) return n.push(s), n;
                    } else if (f && (s = f.getElementById(r)) && R(t, s) && s.id === r) return n.push(s), 
                    n;
                } else {
                    if (l[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                    if ((r = l[3]) && v.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(r)), 
                    n;
                }
                if (v.qsa && !z[e + " "] && (!H || !H.test(e))) {
                    if (1 !== d) f = t, c = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, xe) : t.setAttribute("id", a = P), 
                        o = (u = E(e)).length; o--; ) u[o] = "#" + a + " " + h(u[o]);
                        c = u.join(","), f = me.test(e) && p(t.parentNode) || t;
                    }
                    if (c) try {
                        return G.apply(n, f.querySelectorAll(c)), n;
                    } catch (e) {} finally {
                        a === P && t.removeAttribute("id");
                    }
                }
            }
            return N(e.replace(oe, "$1"), t, n, i);
        }
        function e() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > T.cacheLength && delete e[i.shift()], e[t + " "] = n;
            };
        }
        function l(e) {
            return e[P] = !0, e;
        }
        function r(e) {
            var t = $.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function t(e, t) {
            for (var n = e.split("|"), i = n.length; i--; ) T.attrHandle[n[i]] = t;
        }
        function u(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function i(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function o(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function s(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Te(e) === t : e.disabled === t : "label" in e && e.disabled === t;
            };
        }
        function a(s) {
            return l(function(o) {
                return o = +o, l(function(e, t) {
                    for (var n, i = s([], e.length, o), r = i.length; r--; ) e[n = i[r]] && (e[n] = !(t[n] = e[n]));
                });
            });
        }
        function p(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        function c() {}
        function h(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function f(a, e, t) {
            var l = e.dir, u = e.next, c = u || l, f = t && "parentNode" === c, d = _++;
            return e.first ? function(e, t, n) {
                for (;e = e[l]; ) if (1 === e.nodeType || f) return a(e, t, n);
                return !1;
            } : function(e, t, n) {
                var i, r, o, s = [ F, d ];
                if (n) {
                    for (;e = e[l]; ) if ((1 === e.nodeType || f) && a(e, t, n)) return !0;
                } else for (;e = e[l]; ) if (1 === e.nodeType || f) if (r = (o = e[P] || (e[P] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), 
                u && u === e.nodeName.toLowerCase()) e = e[l] || e; else {
                    if ((i = r[c]) && i[0] === F && i[1] === d) return s[2] = i[2];
                    if ((r[c] = s)[2] = a(e, t, n)) return !0;
                }
                return !1;
            };
        }
        function d(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--; ) if (!r[i](e, t, n)) return !1;
                return !0;
            } : r[0];
        }
        function w(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++) (o = e[a]) && (n && !n(o, i, r) || (s.push(o), 
            u && t.push(a)));
            return s;
        }
        function y(p, h, g, m, v, e) {
            return m && !m[P] && (m = y(m)), v && !v[P] && (v = y(v, e)), l(function(e, t, n, i) {
                var r, o, s, a = [], l = [], u = t.length, c = e || function(e, t, n) {
                    for (var i = 0, r = t.length; i < r; i++) x(e, t[i], n);
                    return n;
                }(h || "*", n.nodeType ? [ n ] : n, []), f = !p || !e && h ? c : w(c, a, p, n, i), d = g ? v || (e ? p : u || m) ? [] : t : f;
                if (g && g(f, d, n, i), m) for (r = w(d, l), m(r, [], n, i), o = r.length; o--; ) (s = r[o]) && (d[l[o]] = !(f[l[o]] = s));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (r = [], o = d.length; o--; ) (s = d[o]) && r.push(f[o] = s);
                            v(null, d = [], r, i);
                        }
                        for (o = d.length; o--; ) (s = d[o]) && -1 < (r = v ? K(e, s) : a[o]) && (e[r] = !(t[r] = s));
                    }
                } else d = w(d === t ? d.splice(u, d.length) : d), v ? v(null, t, d, i) : G.apply(t, d);
            });
        }
        function g(e) {
            for (var r, t, n, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = f(function(e) {
                return e === r;
            }, s, !0), u = f(function(e) {
                return -1 < K(r, e);
            }, s, !0), c = [ function(e, t, n) {
                var i = !o && (n || t !== S) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                return r = null, i;
            } ]; a < i; a++) if (t = T.relative[e[a].type]) c = [ f(d(c), t) ]; else {
                if ((t = T.filter[e[a].type].apply(null, e[a].matches))[P]) {
                    for (n = ++a; n < i && !T.relative[e[n].type]; n++) ;
                    return y(1 < a && d(c), 1 < a && h(e.slice(0, a - 1).concat({
                        value: " " === e[a - 2].type ? "*" : ""
                    })).replace(oe, "$1"), t, a < n && g(e.slice(a, n)), n < i && g(e = e.slice(n)), n < i && h(e));
                }
                c.push(t);
            }
            return d(c);
        }
        var m, v, T, b, C, E, k, N, S, D, A, j, $, L, O, H, q, I, R, P = "sizzle" + 1 * new Date(), M = n.document, F = 0, _ = 0, W = e(), B = e(), z = e(), U = function(e, t) {
            return e === t && (A = !0), 0;
        }, X = {}.hasOwnProperty, V = [], Q = V.pop, Y = V.push, G = V.push, J = V.slice, K = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", re = new RegExp(ee + "+", "g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), se = new RegExp("^" + ee + "*," + ee + "*"), ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ue = new RegExp(ie), ce = new RegExp("^" + te + "$"), fe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + ie),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + Z + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        }, de = /^(?:input|select|textarea|button)$/i, pe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, me = /[+~]/, ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        }, be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, xe = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, we = function() {
            j();
        }, Te = f(function(e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            G.apply(V = J.call(M.childNodes), M.childNodes), V[M.childNodes.length].nodeType;
        } catch (n) {
            G = {
                apply: V.length ? function(e, t) {
                    Y.apply(e, J.call(t));
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        for (m in v = x.support = {}, C = x.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, j = x.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : M;
            return i !== $ && 9 === i.nodeType && i.documentElement && (L = ($ = i).documentElement, 
            O = !C($), M !== $ && (n = $.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), 
            v.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), v.getElementsByTagName = r(function(e) {
                return e.appendChild($.createComment("")), !e.getElementsByTagName("*").length;
            }), v.getElementsByClassName = he.test($.getElementsByClassName), v.getById = r(function(e) {
                return L.appendChild(e).id = P, !$.getElementsByName || !$.getElementsByName(P).length;
            }), v.getById ? (T.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, T.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n ? [ n ] : [];
                }
            }) : (T.filter.ID = function(e) {
                var n = e.replace(ve, ye);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                };
            }, T.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && O) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++]; ) if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                    }
                    return [];
                }
            }), T.find.TAG = v.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : v.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[r++]; ) 1 === n.nodeType && i.push(n);
                    return i;
                }
                return o;
            }, T.find.CLASS = v.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && O) return t.getElementsByClassName(e);
            }, q = [], H = [], (v.qsa = he.test($.querySelectorAll)) && (r(function(e) {
                L.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ee + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || H.push("\\[" + ee + "*(?:value|" + Z + ")"), 
                e.querySelectorAll("[id~=" + P + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), 
                e.querySelectorAll("a#" + P + "+*").length || H.push(".#.+[+~]");
            }), r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = $.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + ee + "*[*^$|!~]?="), 
                2 !== e.querySelectorAll(":enabled").length && H.push(":enabled", ":disabled"), 
                L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && H.push(":enabled", ":disabled"), 
                e.querySelectorAll("*,:x"), H.push(",.*:");
            })), (v.matchesSelector = he.test(I = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(e) {
                v.disconnectedMatch = I.call(e, "*"), I.call(e, "[s!='']:x"), q.push("!=", ie);
            }), H = H.length && new RegExp(H.join("|")), q = q.length && new RegExp(q.join("|")), 
            t = he.test(L.compareDocumentPosition), R = t || he.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, U = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !v.sortDetached && t.compareDocumentPosition(e) === n ? e === $ || e.ownerDocument === M && R(M, e) ? -1 : t === $ || t.ownerDocument === M && R(M, t) ? 1 : D ? K(D, e) - K(D, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, s = [ e ], a = [ t ];
                if (!r || !o) return e === $ ? -1 : t === $ ? 1 : r ? -1 : o ? 1 : D ? K(D, e) - K(D, t) : 0;
                if (r === o) return u(e, t);
                for (n = e; n = n.parentNode; ) s.unshift(n);
                for (n = t; n = n.parentNode; ) a.unshift(n);
                for (;s[i] === a[i]; ) i++;
                return i ? u(s[i], a[i]) : s[i] === M ? -1 : a[i] === M ? 1 : 0;
            }), $;
        }, x.matches = function(e, t) {
            return x(e, null, null, t);
        }, x.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== $ && j(e), t = t.replace(le, "='$1']"), v.matchesSelector && O && !z[t + " "] && (!q || !q.test(t)) && (!H || !H.test(t))) try {
                var n = I.call(e, t);
                if (n || v.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (e) {}
            return 0 < x(t, $, null, [ e ]).length;
        }, x.contains = function(e, t) {
            return (e.ownerDocument || e) !== $ && j(e), R(e, t);
        }, x.attr = function(e, t) {
            (e.ownerDocument || e) !== $ && j(e);
            var n = T.attrHandle[t.toLowerCase()], i = n && X.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== i ? i : v.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }, x.escape = function(e) {
            return (e + "").replace(be, xe);
        }, x.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, x.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (A = !v.detectDuplicates, D = !v.sortStable && e.slice(0), e.sort(U), A) {
                for (;t = e[r++]; ) t === e[r] && (i = n.push(r));
                for (;i--; ) e.splice(n[i], 1);
            }
            return D = null, e;
        }, b = x.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += b(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (;t = e[i++]; ) n += b(t);
            return n;
        }, (T = x.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || x.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && x.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(n, i, r) {
                    return function(e) {
                        var t = x.attr(e, n);
                        return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(re, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"));
                    };
                },
                CHILD: function(h, e, t, g, m) {
                    var v = "nth" !== h.slice(0, 3), y = "last" !== h.slice(-4), b = "of-type" === e;
                    return 1 === g && 0 === m ? function(e) {
                        return !!e.parentNode;
                    } : function(e, t, n) {
                        var i, r, o, s, a, l, u = v !== y ? "nextSibling" : "previousSibling", c = e.parentNode, f = b && e.nodeName.toLowerCase(), d = !n && !b, p = !1;
                        if (c) {
                            if (v) {
                                for (;u; ) {
                                    for (s = e; s = s[u]; ) if (b ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                    l = u = "only" === h && !l && "nextSibling";
                                }
                                return !0;
                            }
                            if (l = [ y ? c.firstChild : c.lastChild ], y && d) {
                                for (p = (a = (i = (r = (o = (s = c)[P] || (s[P] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === F && i[1]) && i[2], 
                                s = a && c.childNodes[a]; s = ++a && s && s[u] || (p = a = 0) || l.pop(); ) if (1 === s.nodeType && ++p && s === e) {
                                    r[h] = [ F, a, p ];
                                    break;
                                }
                            } else if (d && (p = a = (i = (r = (o = (s = e)[P] || (s[P] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === F && i[1]), 
                            !1 === p) for (;(s = ++a && s && s[u] || (p = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++p || (d && ((r = (o = s[P] || (s[P] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [ F, p ]), 
                            s !== e)); ) ;
                            return (p -= m) === g || p % g == 0 && 0 <= p / g;
                        }
                    };
                },
                PSEUDO: function(e, o) {
                    var t, s = T.pseudos[e] || T.setFilters[e.toLowerCase()] || x.error("unsupported pseudo: " + e);
                    return s[P] ? s(o) : 1 < s.length ? (t = [ e, e, "", o ], T.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function(e, t) {
                        for (var n, i = s(e, o), r = i.length; r--; ) e[n = K(e, i[r])] = !(t[n] = i[r]);
                    }) : function(e) {
                        return s(e, 0, t);
                    }) : s;
                }
            },
            pseudos: {
                not: l(function(e) {
                    var i = [], r = [], a = k(e.replace(oe, "$1"));
                    return a[P] ? l(function(e, t, n, i) {
                        for (var r, o = a(e, null, i, []), s = e.length; s--; ) (r = o[s]) && (e[s] = !(t[s] = r));
                    }) : function(e, t, n) {
                        return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop();
                    };
                }),
                has: l(function(t) {
                    return function(e) {
                        return 0 < x(t, e).length;
                    };
                }),
                contains: l(function(t) {
                    return t = t.replace(ve, ye), function(e) {
                        return -1 < (e.textContent || e.innerText || b(e)).indexOf(t);
                    };
                }),
                lang: l(function(n) {
                    return ce.test(n || "") || x.error("unsupported lang: " + n), n = n.replace(ve, ye).toLowerCase(), 
                    function(e) {
                        var t;
                        do {
                            if (t = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function(e) {
                    return e === L;
                },
                focus: function(e) {
                    return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !T.pseudos.empty(e);
                },
                header: function(e) {
                    return pe.test(e.nodeName);
                },
                input: function(e) {
                    return de.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: a(function() {
                    return [ 0 ];
                }),
                last: a(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: a(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: a(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: a(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: a(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
                    return e;
                }),
                gt: a(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                })
            }
        }).pseudos.nth = T.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) T.pseudos[m] = i(m);
        for (m in {
            submit: !0,
            reset: !0
        }) T.pseudos[m] = o(m);
        return c.prototype = T.filters = T.pseudos, T.setFilters = new c(), E = x.tokenize = function(e, t) {
            var n, i, r, o, s, a, l, u = B[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, a = [], l = T.preFilter; s; ) {
                for (o in n && !(i = se.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), 
                n = !1, (i = ae.exec(s)) && (n = i.shift(), r.push({
                    value: n,
                    type: i[0].replace(oe, " ")
                }), s = s.slice(n.length)), T.filter) !(i = fe[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), 
                r.push({
                    value: n,
                    type: o,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break;
            }
            return t ? s.length : s ? x.error(e) : B(e, a).slice(0);
        }, k = x.compile = function(e, t) {
            var n, m, v, y, b, i, r = [], o = [], s = z[e + " "];
            if (!s) {
                for (t || (t = E(e)), n = t.length; n--; ) (s = g(t[n]))[P] ? r.push(s) : o.push(s);
                (s = z(e, (m = o, v = r, y = 0 < v.length, b = 0 < m.length, i = function(e, t, n, i, r) {
                    var o, s, a, l = 0, u = "0", c = e && [], f = [], d = S, p = e || b && T.find.TAG("*", r), h = F += null == d ? 1 : Math.random() || .1, g = p.length;
                    for (r && (S = t === $ || t || r); u !== g && null != (o = p[u]); u++) {
                        if (b && o) {
                            for (s = 0, t || o.ownerDocument === $ || (j(o), n = !O); a = m[s++]; ) if (a(o, t || $, n)) {
                                i.push(o);
                                break;
                            }
                            r && (F = h);
                        }
                        y && ((o = !a && o) && l--, e && c.push(o));
                    }
                    if (l += u, y && u !== l) {
                        for (s = 0; a = v[s++]; ) a(c, f, t, n);
                        if (e) {
                            if (0 < l) for (;u--; ) c[u] || f[u] || (f[u] = Q.call(i));
                            f = w(f);
                        }
                        G.apply(i, f), r && !e && 0 < f.length && 1 < l + v.length && x.uniqueSort(i);
                    }
                    return r && (F = h, S = d), c;
                }, y ? l(i) : i))).selector = e;
            }
            return s;
        }, N = x.select = function(e, t, n, i) {
            var r, o, s, a, l, u = "function" == typeof e && e, c = !i && E(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (!(t = (T.find.ID(s.matches[0].replace(ve, ye), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !T.relative[a = s.type]); ) if ((l = T.find[a]) && (i = l(s.matches[0].replace(ve, ye), me.test(o[0].type) && p(t.parentNode) || t))) {
                    if (o.splice(r, 1), !(e = i.length && h(o))) return G.apply(n, i), n;
                    break;
                }
            }
            return (u || k(e, c))(i, t, !O, n, !t || me.test(e) && p(t.parentNode) || t), n;
        }, v.sortStable = P.split("").sort(U).join("") === P, v.detectDuplicates = !!A, 
        j(), v.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition($.createElement("fieldset"));
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || t("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), v.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || t("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), r(function(e) {
            return null == e.getAttribute("disabled");
        }) || t(Z, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }), x;
    }(C);
    de.find = he, de.expr = he.selectors, de.expr[":"] = de.expr.pseudos, de.uniqueSort = de.unique = he.uniqueSort, 
    de.text = he.getText, de.isXMLDoc = he.isXML, de.contains = he.contains, de.escapeSelector = he.escape;
    var ge = function(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
            if (r && de(e).is(n)) break;
            i.push(e);
        }
        return i;
    }, me = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, ve = de.expr.match.needsContext, ye = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    de.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? de.find.matchesSelector(i, e) ? [ i ] : [] : de.find.matches(e, de.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, de.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e) return this.pushStack(de(e).filter(function() {
                for (t = 0; t < i; t++) if (de.contains(r[t], this)) return !0;
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) de.find(e, r[t], n);
            return 1 < i ? de.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(t(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(t(this, e || [], !0));
        },
        is: function(e) {
            return !!t(this, "string" == typeof e && ve.test(e) ? de(e) : e || [], !1).length;
        }
    });
    var be, xe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (de.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || be, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [ null, e, null ] : xe.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof de ? t[0] : t, de.merge(this, de.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), 
                ye.test(i[1]) && de.isPlainObject(t)) for (i in t) ue(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (r = J.getElementById(i[2])) && (this[0] = r, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : ue(e) ? void 0 !== n.ready ? n.ready(e) : e(de) : de.makeArray(e, this);
    }).prototype = de.fn, be = de(J);
    var we = /^(?:parents|prev(?:Until|All))/, Te = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    de.fn.extend({
        has: function(e) {
            var t = de(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++) if (de.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, o = [], s = "string" != typeof e && de(e);
            if (!ve.test(e)) for (;i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && de.find.matchesSelector(n, e))) {
                o.push(n);
                break;
            }
            return this.pushStack(1 < o.length ? de.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? ne.call(de(e), this[0]) : ne.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(de.uniqueSort(de.merge(this.get(), de(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), de.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return ge(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return ge(e, "parentNode", n);
        },
        next: function(e) {
            return n(e, "nextSibling");
        },
        prev: function(e) {
            return n(e, "previousSibling");
        },
        nextAll: function(e) {
            return ge(e, "nextSibling");
        },
        prevAll: function(e) {
            return ge(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return ge(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return ge(e, "previousSibling", n);
        },
        siblings: function(e) {
            return me((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return me(e.firstChild);
        },
        contents: function(e) {
            return u(e, "iframe") ? e.contentDocument : (u(e, "template") && (e = e.content || e), 
            de.merge([], e.childNodes));
        }
    }, function(i, r) {
        de.fn[i] = function(e, t) {
            var n = de.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = de.filter(t, n)), 
            1 < this.length && (Te[i] || de.uniqueSort(n), we.test(i) && n.reverse()), this.pushStack(n);
        };
    });
    var Ce = /[^\x20\t\r\n\f]+/g;
    de.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, de.each(e.match(Ce) || [], function(e, t) {
            n[t] = !0;
        }), n) : de.extend({}, i);
        var r, t, o, s, a = [], l = [], u = -1, c = function() {
            for (s = s || i.once, o = r = !0; l.length; u = -1) for (t = l.shift(); ++u < a.length; ) !1 === a[u].apply(t[0], t[1]) && i.stopOnFalse && (u = a.length, 
            t = !1);
            i.memory || (t = !1), r = !1, s && (a = t ? [] : "");
        }, f = {
            add: function() {
                return a && (t && !r && (u = a.length - 1, l.push(t)), function n(e) {
                    de.each(e, function(e, t) {
                        ue(t) ? i.unique && f.has(t) || a.push(t) : t && t.length && "string" !== m(t) && n(t);
                    });
                }(arguments), t && !r && c()), this;
            },
            remove: function() {
                return de.each(arguments, function(e, t) {
                    for (var n; -1 < (n = de.inArray(t, a, n)); ) a.splice(n, 1), n <= u && u--;
                }), this;
            },
            has: function(e) {
                return e ? -1 < de.inArray(e, a) : 0 < a.length;
            },
            empty: function() {
                return a && (a = []), this;
            },
            disable: function() {
                return s = l = [], a = t = "", this;
            },
            disabled: function() {
                return !a;
            },
            lock: function() {
                return s = l = [], t || r || (a = t = ""), this;
            },
            locked: function() {
                return !!s;
            },
            fireWith: function(e, t) {
                return s || (t = [ e, (t = t || []).slice ? t.slice() : t ], l.push(t), r || c()), 
                this;
            },
            fire: function() {
                return f.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!o;
            }
        };
        return f;
    }, de.extend({
        Deferred: function(e) {
            var o = [ [ "notify", "progress", de.Callbacks("memory"), de.Callbacks("memory"), 2 ], [ "resolve", "done", de.Callbacks("once memory"), de.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", de.Callbacks("once memory"), de.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", s = {
                state: function() {
                    return r;
                },
                always: function() {
                    return a.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                    return s.then(null, e);
                },
                pipe: function() {
                    var r = arguments;
                    return de.Deferred(function(i) {
                        de.each(o, function(e, t) {
                            var n = ue(r[t[4]]) && r[t[4]];
                            a[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && ue(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [ e ] : arguments);
                            });
                        }), r = null;
                    }).promise();
                },
                then: function(t, n, i) {
                    function l(r, o, s, a) {
                        return function() {
                            var n = this, i = arguments, e = function() {
                                var e, t;
                                if (!(r < u)) {
                                    if ((e = s.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then, ue(t) ? a ? t.call(e, l(u, o, c, a), l(u, o, f, a)) : (u++, 
                                    t.call(e, l(u, o, c, a), l(u, o, f, a), l(u, o, c, o.notifyWith))) : (s !== c && (n = void 0, 
                                    i = [ e ]), (a || o.resolveWith)(n, i));
                                }
                            }, t = a ? e : function() {
                                try {
                                    e();
                                } catch (e) {
                                    de.Deferred.exceptionHook && de.Deferred.exceptionHook(e, t.stackTrace), u <= r + 1 && (s !== f && (n = void 0, 
                                    i = [ e ]), o.rejectWith(n, i));
                                }
                            };
                            r ? t() : (de.Deferred.getStackHook && (t.stackTrace = de.Deferred.getStackHook()), 
                            C.setTimeout(t));
                        };
                    }
                    var u = 0;
                    return de.Deferred(function(e) {
                        o[0][3].add(l(0, e, ue(i) ? i : c, e.notifyWith)), o[1][3].add(l(0, e, ue(t) ? t : c)), 
                        o[2][3].add(l(0, e, ue(n) ? n : f));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? de.extend(e, s) : s;
                }
            }, a = {};
            return de.each(o, function(e, t) {
                var n = t[2], i = t[5];
                s[t[1]] = n.add, i && n.add(function() {
                    r = i;
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), 
                a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this;
                }, a[t[0] + "With"] = n.fireWith;
            }), s.promise(a), e && e.call(a, a), a;
        },
        when: function(e) {
            var n = arguments.length, t = n, i = Array(t), r = Z.call(arguments), o = de.Deferred(), s = function(t) {
                return function(e) {
                    i[t] = this, r[t] = 1 < arguments.length ? Z.call(arguments) : e, --n || o.resolveWith(i, r);
                };
            };
            if (n <= 1 && (l(e, o.done(s(t)).resolve, o.reject, !n), "pending" === o.state() || ue(r[t] && r[t].then))) return o.then();
            for (;t--; ) l(r[t], s(t), o.reject);
            return o.promise();
        }
    });
    var Ee = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    de.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && Ee.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, de.readyException = function(e) {
        C.setTimeout(function() {
            throw e;
        });
    };
    var ke = de.Deferred();
    de.fn.ready = function(e) {
        return ke.then(e).catch(function(e) {
            de.readyException(e);
        }), this;
    }, de.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --de.readyWait : de.isReady) || ((de.isReady = !0) !== e && 0 < --de.readyWait || ke.resolveWith(J, [ de ]));
        }
    }), de.ready.then = ke.then, "complete" === J.readyState || "loading" !== J.readyState && !J.documentElement.doScroll ? C.setTimeout(de.ready) : (J.addEventListener("DOMContentLoaded", i), 
    C.addEventListener("load", i));
    var Ne = function(e, t, n, i, r, o, s) {
        var a = 0, l = e.length, u = null == n;
        if ("object" === m(n)) for (a in r = !0, n) Ne(e, t, a, n[a], !0, o, s); else if (void 0 !== i && (r = !0, 
        ue(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
            return u.call(de(e), n);
        })), t)) for (;a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    }, Se = /^-ms-/, De = /-([a-z])/g, Ae = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    o.uid = 1, o.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Ae(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[d(t)] = n; else for (i in t) r[d(i)] = t[i];
            return r;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][d(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
            void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(d) : (t = d(t)) in i ? [ t ] : t.match(Ce) || []).length;
                    for (;n--; ) delete i[t[n]];
                }
                (void 0 === t || de.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !de.isEmptyObject(t);
        }
    };
    var je = new o(), $e = new o(), Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Oe = /[A-Z]/g;
    de.extend({
        hasData: function(e) {
            return $e.hasData(e) || je.hasData(e);
        },
        data: function(e, t, n) {
            return $e.access(e, t, n);
        },
        removeData: function(e, t) {
            $e.remove(e, t);
        },
        _data: function(e, t, n) {
            return je.access(e, t, n);
        },
        _removeData: function(e, t) {
            je.remove(e, t);
        }
    }), de.fn.extend({
        data: function(n, e) {
            var t, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (r = $e.get(o), 1 === o.nodeType && !je.get(o, "hasDataAttrs"))) {
                    for (t = s.length; t--; ) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = d(i.slice(5)), 
                    p(o, i, r[i]));
                    je.set(o, "hasDataAttrs", !0);
                }
                return r;
            }
            return "object" == typeof n ? this.each(function() {
                $e.set(this, n);
            }) : Ne(this, function(e) {
                var t;
                if (o && void 0 === e) {
                    if (void 0 !== (t = $e.get(o, n))) return t;
                    if (void 0 !== (t = p(o, n))) return t;
                } else this.each(function() {
                    $e.set(this, n, e);
                });
            }, null, e, 1 < arguments.length, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                $e.remove(this, e);
            });
        }
    }), de.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = je.get(e, t), n && (!i || Array.isArray(n) ? i = je.access(e, t, de.makeArray(n)) : i.push(n)), 
            i || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = de.queue(e, t), i = n.length, r = n.shift(), o = de._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, r.call(e, function() {
                de.dequeue(e, t);
            }, o)), !i && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return je.get(e, n) || je.access(e, n, {
                empty: de.Callbacks("once memory").add(function() {
                    je.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), de.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? de.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = de.queue(this, t, n);
                de._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && de.dequeue(this, t);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                de.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, i = 1, r = de.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [ o ]);
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--; ) (n = je.get(o[s], e + "queueHooks")) && n.empty && (i++, 
            n.empty.add(a));
            return a(), r.promise(t);
        }
    });
    var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, qe = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$", "i"), Ie = [ "Top", "Right", "Bottom", "Left" ], Re = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && de.contains(e.ownerDocument, e) && "none" === de.css(e, "display");
    }, Pe = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
        return r;
    }, Me = {};
    de.fn.extend({
        show: function() {
            return v(this, !0);
        },
        hide: function() {
            return v(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Re(this) ? de(this).show() : de(this).hide();
            });
        }
    });
    var Fe = /^(?:checkbox|radio)$/i, _e = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, We = /^$|^module$|\/(?:java|ecma)script/i, Be = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, 
    Be.th = Be.td;
    var ze, Ue, Xe = /<|&#?\w+;/;
    ze = J.createDocumentFragment().appendChild(J.createElement("div")), (Ue = J.createElement("input")).setAttribute("type", "radio"), 
    Ue.setAttribute("checked", "checked"), Ue.setAttribute("name", "t"), ze.appendChild(Ue), 
    le.checkClone = ze.cloneNode(!0).cloneNode(!0).lastChild.checked, ze.innerHTML = "<textarea>x</textarea>", 
    le.noCloneChecked = !!ze.cloneNode(!0).lastChild.defaultValue;
    var Ve = J.documentElement, Qe = /^key/, Ye = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ge = /^([^.]*)(?:\.(.+)|)/;
    de.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, u, c, f, d, p, h, g, m = je.get(t);
            if (m) for (n.handler && (n = (o = n).handler, r = o.selector), r && de.find.matchesSelector(Ve, r), 
            n.guid || (n.guid = de.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                return void 0 !== de && de.event.triggered !== e.type ? de.event.dispatch.apply(t, arguments) : void 0;
            }), u = (e = (e || "").match(Ce) || [ "" ]).length; u--; ) p = g = (a = Ge.exec(e[u]) || [])[1], 
            h = (a[2] || "").split(".").sort(), p && (f = de.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, 
            f = de.event.special[p] || {}, c = de.extend({
                type: p,
                origType: g,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && de.expr.match.needsContext.test(r),
                namespace: h.join(".")
            }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(p, s)), 
            f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), 
            de.event.global[p] = !0);
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, f, d, p, h, g, m = je.hasData(e) && je.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(Ce) || [ "" ]).length; u--; ) if (p = g = (a = Ge.exec(t[u]) || [])[1], 
                h = (a[2] || "").split(".").sort(), p) {
                    for (f = de.event.special[p] || {}, d = l[p = (i ? f.delegateType : f.bindType) || p] || [], 
                    a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--; ) c = d[o], 
                    !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), 
                    c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                    s && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || de.removeEvent(e, p, m.handle), 
                    delete l[p]);
                } else for (p in l) de.event.remove(e, p + t[u], n, i, !0);
                de.isEmptyObject(l) && je.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = de.event.fix(e), l = new Array(arguments.length), u = (je.get(this, "events") || {})[a.type] || [], c = de.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = de.event.handlers.call(this, a, u), t = 0; (r = s[t++]) && !a.isPropagationStopped(); ) for (a.currentTarget = r.elem, 
                n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped(); ) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, 
                a.data = o.data, void 0 !== (i = ((de.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), 
                a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button)) for (;u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < de(r, this).index(u) : de.find(r, this, null, [ u ]).length), 
                s[r] && o.push(i);
                o.length && a.push({
                    elem: u,
                    handlers: o
                });
            }
            return u = this, l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }), a;
        },
        addProp: function(t, e) {
            Object.defineProperty(de.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: ue(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t];
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    });
                }
            });
        },
        fix: function(e) {
            return e[de.expando] ? e : new de.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== T() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === T() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && u(this, "input")) return this.click(), 
                    !1;
                },
                _default: function(e) {
                    return u(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, de.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, de.Event = function(e, t) {
        if (!(this instanceof de.Event)) return new de.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? s : w, 
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
        this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
        t && de.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[de.expando] = !0;
    }, de.Event.prototype = {
        constructor: de.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = s, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = s, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = s, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, de.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Qe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ye.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, de.event.addProp), de.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        de.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget, i = e.handleObj;
                return n && (n === this || de.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), 
                e.type = r), t;
            }
        };
    }), de.fn.extend({
        on: function(e, t, n, i) {
            return E(this, e, t, n, i);
        },
        one: function(e, t, n, i) {
            return E(this, e, t, n, i, 1);
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, de(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = w), 
            this.each(function() {
                de.event.remove(this, e, n, t);
            });
        }
    });
    var Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ke = /<script|<style|<link/i, Ze = /checked\s*(?:[^=]|=\s*.checked.)/i, et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    de.extend({
        htmlPrefilter: function(e) {
            return e.replace(Je, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var i, r, o, s, a, l, u, c = e.cloneNode(!0), f = de.contains(e.ownerDocument, e);
            if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || de.isXMLDoc(e))) for (s = y(c), 
            i = 0, r = (o = y(e)).length; i < r; i++) a = o[i], l = s[i], void 0, "input" === (u = l.nodeName.toLowerCase()) && Fe.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t) if (n) for (o = o || y(e), s = s || y(c), i = 0, r = o.length; i < r; i++) D(o[i], s[i]); else D(e, c);
            return 0 < (s = y(c, "script")).length && b(s, !f && y(e, "script")), c;
        },
        cleanData: function(e) {
            for (var t, n, i, r = de.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Ae(n)) {
                if (t = n[je.expando]) {
                    if (t.events) for (i in t.events) r[i] ? de.event.remove(n, i) : de.removeEvent(n, i, t.handle);
                    n[je.expando] = void 0;
                }
                n[$e.expando] && (n[$e.expando] = void 0);
            }
        }
    }), de.fn.extend({
        detach: function(e) {
            return j(this, e, !0);
        },
        remove: function(e) {
            return j(this, e);
        },
        text: function(e) {
            return Ne(this, function(e) {
                return void 0 === e ? de.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return A(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return A(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return A(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return A(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (de.cleanData(y(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return de.clone(this, e, t);
            });
        },
        html: function(e) {
            return Ne(this, function(e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ke.test(e) && !Be[(_e.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = de.htmlPrefilter(e);
                    try {
                        for (;n < i; n++) 1 === (t = this[n] || {}).nodeType && (de.cleanData(y(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var n = [];
            return A(this, arguments, function(e) {
                var t = this.parentNode;
                de.inArray(this, n) < 0 && (de.cleanData(y(this)), t && t.replaceChild(e, this));
            }, n);
        }
    }), de.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        de.fn[e] = function(e) {
            for (var t, n = [], i = de(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), 
            de(i[o])[s](t), te.apply(n, t.get());
            return this.pushStack(n);
        };
    });
    var tt = new RegExp("^(" + He + ")(?!px)[a-z%]+$", "i"), nt = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C), t.getComputedStyle(e);
    }, it = new RegExp(Ie.join("|"), "i");
    !function() {
        function e() {
            if (l) {
                a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
                Ve.appendChild(a).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), 
                i = 36 === t(e.width), l.style.position = "absolute", r = 36 === l.offsetWidth || "absolute", 
                Ve.removeChild(a), l = null;
            }
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n, i, r, o, s, a = J.createElement("div"), l = J.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", 
        le.clearCloneStyle = "content-box" === l.style.backgroundClip, de.extend(le, {
            boxSizingReliable: function() {
                return e(), i;
            },
            pixelBoxStyles: function() {
                return e(), o;
            },
            pixelPosition: function() {
                return e(), n;
            },
            reliableMarginLeft: function() {
                return e(), s;
            },
            scrollboxSize: function() {
                return e(), r;
            }
        }));
    }();
    var rt = /^(none|table(?!-c[ea]).+)/, ot = /^--/, st = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, at = {
        letterSpacing: "0",
        fontWeight: "400"
    }, lt = [ "Webkit", "Moz", "ms" ], ut = J.createElement("div").style;
    de.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = $(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = d(t), l = ot.test(t), u = e.style;
                if (l || (t = O(a)), s = de.cssHooks[t] || de.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
                "string" == (o = typeof n) && (r = qe.exec(n)) && r[1] && (n = h(e, t, r), o = "number"), 
                null != n && n == n && ("number" === o && (n += r && r[3] || (de.cssNumber[a] ? "" : "px")), 
                le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), 
                s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n));
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = d(t);
            return ot.test(t) || (t = O(a)), (s = de.cssHooks[t] || de.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), 
            void 0 === r && (r = $(e, t, i)), "normal" === r && t in at && (r = at[t]), "" === n || n ? (o = parseFloat(r), 
            !0 === n || isFinite(o) ? o || 0 : r) : r;
        }
    }), de.each([ "height", "width" ], function(e, a) {
        de.cssHooks[a] = {
            get: function(e, t, n) {
                if (t) return !rt.test(de.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? I(e, a, n) : Pe(e, st, function() {
                    return I(e, a, n);
                });
            },
            set: function(e, t, n) {
                var i, r = nt(e), o = "border-box" === de.css(e, "boxSizing", !1, r), s = n && q(e, a, n, o, r);
                return o && le.scrollboxSize() === r.position && (s -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - q(e, a, "border", !1, r) - .5)), 
                s && (i = qe.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = de.css(e, a)), 
                H(0, t, s);
            }
        };
    }), de.cssHooks.marginLeft = L(le.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat($(e, "marginLeft")) || e.getBoundingClientRect().left - Pe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), de.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        de.cssHooks[r + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [ e ]; t < 4; t++) n[r + Ie[t] + o] = i[t] || i[t - 2] || i[0];
                return n;
            }
        }, "margin" !== r && (de.cssHooks[r + o].set = H);
    }), de.fn.extend({
        css: function(e, t) {
            return Ne(this, function(e, t, n) {
                var i, r, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = nt(e), r = t.length; s < r; s++) o[t[s]] = de.css(e, t[s], !1, i);
                    return o;
                }
                return void 0 !== n ? de.style(e, t, n) : de.css(e, t);
            }, e, t, 1 < arguments.length);
        }
    }), (de.Tween = R).prototype = {
        constructor: R,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || de.easing._default, this.options = t, 
            this.start = this.now = this.cur(), this.end = i, this.unit = o || (de.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = R.propHooks[this.prop];
            return e && e.get ? e.get(this) : R.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = R.propHooks[this.prop];
            return this.options.duration ? this.pos = t = de.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : R.propHooks._default.set(this), this;
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = de.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function(e) {
                de.fx.step[e.prop] ? de.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[de.cssProps[e.prop]] && !de.cssHooks[e.prop] ? e.elem[e.prop] = e.now : de.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, de.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, de.fx = R.prototype.init, de.fx.step = {};
    var ct, ft, dt, pt, ht = /^(?:toggle|show|hide)$/, gt = /queueHooks$/;
    de.Animation = de.extend(W, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                return h(n.elem, e, qe.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            ue(e) ? (t = e, e = [ "*" ]) : e = e.match(Ce);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], W.tweeners[n] = W.tweeners[n] || [], 
            W.tweeners[n].unshift(t);
        },
        prefilters: [ function(e, t, n) {
            var i, r, o, s, a, l, u, c, f = "width" in t || "height" in t, d = this, p = {}, h = e.style, g = e.nodeType && Re(e), m = je.get(e, "fxshow");
            for (i in n.queue || (null == (s = de._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, 
            a = s.empty.fire, s.empty.fire = function() {
                s.unqueued || a();
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--, de.queue(e, "fx").length || s.empty.fire();
                });
            })), t) if (r = t[i], ht.test(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    g = !0;
                }
                p[i] = m && m[i] || de.style(e, i);
            }
            if ((l = !de.isEmptyObject(t)) || !de.isEmptyObject(p)) for (i in f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
            null == (u = m && m.display) && (u = je.get(e, "display")), "none" === (c = de.css(e, "display")) && (u ? c = u : (v([ e ], !0), 
            u = e.style.display || u, c = de.css(e, "display"), v([ e ]))), ("inline" === c || "inline-block" === c && null != u) && "none" === de.css(e, "float") && (l || (d.done(function() {
                h.display = u;
            }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), 
            n.overflow && (h.overflow = "hidden", d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = je.access(e, "fxshow", {
                display: u
            }), o && (m.hidden = !g), g && v([ e ], !0), d.done(function() {
                for (i in g || v([ e ]), je.remove(e, "fxshow"), p) de.style(e, i, p[i]);
            })), l = _(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, 
            l.start = 0));
        } ],
        prefilter: function(e, t) {
            t ? W.prefilters.unshift(e) : W.prefilters.push(e);
        }
    }), de.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? de.extend({}, e) : {
            complete: n || !n && t || ue(e) && e,
            duration: e,
            easing: n && t || t && !ue(t) && t
        };
        return de.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in de.fx.speeds ? i.duration = de.fx.speeds[i.duration] : i.duration = de.fx.speeds._default), 
        null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            ue(i.old) && i.old.call(this), i.queue && de.dequeue(this, i.queue);
        }, i;
    }, de.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(Re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i);
        },
        animate: function(t, e, n, i) {
            var r = de.isEmptyObject(t), o = de.speed(e, n, i), s = function() {
                var e = W(this, de.extend({}, t), o);
                (r || je.get(this, "finish")) && e.stop(!0);
            };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
        },
        stop: function(r, e, o) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop, t(o);
            };
            return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), 
            this.each(function() {
                var e = !0, t = null != r && r + "queueHooks", n = de.timers, i = je.get(this);
                if (t) i[t] && i[t].stop && s(i[t]); else for (t in i) i[t] && i[t].stop && gt.test(t) && s(i[t]);
                for (t = n.length; t--; ) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), 
                e = !1, n.splice(t, 1));
                !e && o || de.dequeue(this, r);
            });
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = je.get(this), n = t[s + "queue"], i = t[s + "queueHooks"], r = de.timers, o = n ? n.length : 0;
                for (t.finish = !0, de.queue(this, s, []), i && i.stop && i.stop.call(this, !0), 
                e = r.length; e--; ) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), 
                r.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish;
            });
        }
    }), de.each([ "toggle", "show", "hide" ], function(e, i) {
        var r = de.fn[i];
        de.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(F(i, !0), e, t, n);
        };
    }), de.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        de.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n);
        };
    }), de.timers = [], de.fx.tick = function() {
        var e, t = 0, n = de.timers;
        for (ct = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || de.fx.stop(), ct = void 0;
    }, de.fx.timer = function(e) {
        de.timers.push(e), de.fx.start();
    }, de.fx.interval = 13, de.fx.start = function() {
        ft || (ft = !0, P());
    }, de.fx.stop = function() {
        ft = null;
    }, de.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, de.fn.delay = function(i, e) {
        return i = de.fx && de.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, i);
            t.stop = function() {
                C.clearTimeout(n);
            };
        });
    }, dt = J.createElement("input"), pt = J.createElement("select").appendChild(J.createElement("option")), 
    dt.type = "checkbox", le.checkOn = "" !== dt.value, le.optSelected = pt.selected, 
    (dt = J.createElement("input")).value = "t", dt.type = "radio", le.radioValue = "t" === dt.value;
    var mt, vt = de.expr.attrHandle;
    de.fn.extend({
        attr: function(e, t) {
            return Ne(this, de.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function(e) {
            return this.each(function() {
                de.removeAttr(this, e);
            });
        }
    }), de.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? de.prop(e, t, n) : (1 === o && de.isXMLDoc(e) || (r = de.attrHooks[t.toLowerCase()] || (de.expr.match.bool.test(t) ? mt : void 0)), 
            void 0 !== n ? null === n ? void de.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), 
            n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = de.find.attr(e, t)) ? void 0 : i);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!le.radioValue && "radio" === t && u(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, r = t && t.match(Ce);
            if (r && 1 === e.nodeType) for (;n = r[i++]; ) e.removeAttribute(n);
        }
    }), mt = {
        set: function(e, t, n) {
            return !1 === t ? de.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, de.each(de.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = vt[t] || de.find.attr;
        vt[t] = function(e, t, n) {
            var i, r, o = t.toLowerCase();
            return n || (r = vt[o], vt[o] = i, i = null != s(e, t, n) ? o : null, vt[o] = r), 
            i;
        };
    });
    var yt = /^(?:input|select|textarea|button)$/i, bt = /^(?:a|area)$/i;
    de.fn.extend({
        prop: function(e, t) {
            return Ne(this, de.prop, e, t, 1 < arguments.length);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[de.propFix[e] || e];
            });
        }
    }), de.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && de.isXMLDoc(e) || (t = de.propFix[t] || t, 
            r = de.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = de.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), le.optSelected || (de.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), de.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        de.propFix[this.toLowerCase()] = this;
    }), de.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (ue(t)) return this.each(function(e) {
                de(this).addClass(t.call(this, e, z(this)));
            });
            if ((e = U(t)).length) for (;n = this[l++]; ) if (r = z(n), i = 1 === n.nodeType && " " + B(r) + " ") {
                for (s = 0; o = e[s++]; ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                r !== (a = B(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (ue(t)) return this.each(function(e) {
                de(this).removeClass(t.call(this, e, z(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = U(t)).length) for (;n = this[l++]; ) if (r = z(n), i = 1 === n.nodeType && " " + B(r) + " ") {
                for (s = 0; o = e[s++]; ) for (;-1 < i.indexOf(" " + o + " "); ) i = i.replace(" " + o + " ", " ");
                r !== (a = B(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        toggleClass: function(r, t) {
            var o = typeof r, s = "string" === o || Array.isArray(r);
            return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : ue(r) ? this.each(function(e) {
                de(this).toggleClass(r.call(this, e, z(this), t), t);
            }) : this.each(function() {
                var e, t, n, i;
                if (s) for (t = 0, n = de(this), i = U(r); e = i[t++]; ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else void 0 !== r && "boolean" !== o || ((e = z(this)) && je.set(this, "__className__", e), 
                this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : je.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; ) if (1 === n.nodeType && -1 < (" " + B(z(n)) + " ").indexOf(t)) return !0;
            return !1;
        }
    });
    var xt = /\r/g;
    de.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = ue(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, de(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = de.map(t, function(e) {
                    return null == e ? "" : e + "";
                })), (i = de.valHooks[this.type] || de.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t));
            })) : t ? (i = de.valHooks[t.type] || de.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0;
        }
    }), de.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = de.find.attr(e, "value");
                    return null != t ? t : B(de.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++) if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !u(n.parentNode, "optgroup"))) {
                        if (t = de(n).val(), s) return t;
                        a.push(t);
                    }
                    return a;
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = de.makeArray(t), s = r.length; s--; ) ((i = r[s]).selected = -1 < de.inArray(de.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), de.each([ "radio", "checkbox" ], function() {
        de.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < de.inArray(de(e).val(), t);
            }
        }, le.checkOn || (de.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    }), le.focusin = "onfocusin" in C;
    var wt = /^(?:focusinfocus|focusoutblur)$/, Tt = function(e) {
        e.stopPropagation();
    };
    de.extend(de.event, {
        trigger: function(e, t, n, i) {
            var r, o, s, a, l, u, c, f, d = [ n || J ], p = oe.call(e, "type") ? e.type : e, h = oe.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = s = n = n || J, 3 !== n.nodeType && 8 !== n.nodeType && !wt.test(p + de.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), 
            h.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[de.expando] ? e : new de.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, 
            e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = n), t = null == t ? [ e ] : de.makeArray(t, [ e ]), 
            c = de.event.special[p] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !ce(n)) {
                    for (a = c.delegateType || p, wt.test(a + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), 
                    s = o;
                    s === (n.ownerDocument || J) && d.push(s.defaultView || s.parentWindow || C);
                }
                for (r = 0; (o = d[r++]) && !e.isPropagationStopped(); ) f = o, e.type = 1 < r ? a : c.bindType || p, 
                (u = (je.get(o, "events") || {})[e.type] && je.get(o, "handle")) && u.apply(o, t), 
                (u = l && o[l]) && u.apply && Ae(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = p, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !Ae(n) || l && ue(n[p]) && !ce(n) && ((s = n[l]) && (n[l] = null), 
                de.event.triggered = p, e.isPropagationStopped() && f.addEventListener(p, Tt), n[p](), 
                e.isPropagationStopped() && f.removeEventListener(p, Tt), de.event.triggered = void 0, 
                s && (n[l] = s)), e.result;
            }
        },
        simulate: function(e, t, n) {
            var i = de.extend(new de.Event(), n, {
                type: e,
                isSimulated: !0
            });
            de.event.trigger(i, null, t);
        }
    }), de.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                de.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return de.event.trigger(e, t, n, !0);
        }
    }), le.focusin || de.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var r = function(e) {
            de.event.simulate(i, e.target, de.event.fix(e));
        };
        de.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this, t = je.access(e, i);
                t || e.addEventListener(n, r, !0), je.access(e, i, (t || 0) + 1);
            },
            teardown: function() {
                var e = this.ownerDocument || this, t = je.access(e, i) - 1;
                t ? je.access(e, i, t) : (e.removeEventListener(n, r, !0), je.remove(e, i));
            }
        };
    });
    var Ct = C.location, Et = Date.now(), kt = /\?/;
    de.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = void 0;
        }
        return t && !t.getElementsByTagName("parsererror").length || de.error("Invalid XML: " + e), 
        t;
    };
    var Nt = /\[\]$/, St = /\r?\n/g, Dt = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i;
    de.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            var n = ue(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
        if (Array.isArray(e) || e.jquery && !de.isPlainObject(e)) de.each(e, function() {
            r(this.name, this.value);
        }); else for (n in e) X(n, e[n], t, r);
        return i.join("&");
    }, de.fn.extend({
        serialize: function() {
            return de.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = de.prop(this, "elements");
                return e ? de.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !de(this).is(":disabled") && At.test(this.nodeName) && !Dt.test(e) && (this.checked || !Fe.test(e));
            }).map(function(e, t) {
                var n = de(this).val();
                return null == n ? null : Array.isArray(n) ? de.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                };
            }).get();
        }
    });
    var jt = /%20/g, $t = /#.*$/, Lt = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ht = /^(?:GET|HEAD)$/, qt = /^\/\//, It = {}, Rt = {}, Pt = "*/".concat("*"), Mt = J.createElement("a");
    Mt.href = Ct.href, de.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": de.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Y(Y(e, de.ajaxSettings), t) : Y(de.ajaxSettings, e);
        },
        ajaxPrefilter: V(It),
        ajaxTransport: V(Rt),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var r, o, s, a, l, u = t;
                h || (h = !0, p && C.clearTimeout(p), c = void 0, d = i || "", T.readyState = 0 < e ? 4 : 0, 
                r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), 
                    void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i) for (r in a) if (a[r] && a[r].test(i)) {
                        l.unshift(r);
                        break;
                    }
                    if (l[0] in n) o = l[0]; else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break;
                            }
                            s || (s = r);
                        }
                        o = o || s;
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o];
                }(m, T, n)), a = function(e, t, n, i) {
                    var r, o, s, a, l, u = {}, c = e.dataTypes.slice();
                    if (c[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
                    !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                        if (!(s = u[l + " " + o] || u["* " + o])) for (r in u) if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                            !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                            break;
                        }
                        if (!0 !== s) if (s && e.throws) t = s(t); else try {
                            t = s(t);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: s ? e : "No conversion from " + l + " to " + o
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: t
                    };
                }(m, a, T, r), r ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (de.lastModified[f] = l), 
                (l = T.getResponseHeader("etag")) && (de.etag[f] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state, 
                o = a.data, r = !(s = a.error))) : (s = u, !e && u || (u = "error", e < 0 && (e = 0))), 
                T.status = e, T.statusText = (t || u) + "", r ? b.resolveWith(v, [ o, u, T ]) : b.rejectWith(v, [ T, u, s ]), 
                T.statusCode(w), w = void 0, g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [ T, m, r ? o : s ]), 
                x.fireWith(v, [ T, u ]), g && (y.trigger("ajaxComplete", [ T, m ]), --de.active || de.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, d, i, p, r, h, g, o, s, m = de.ajaxSetup({}, t), v = m.context || m, y = m.context && (v.nodeType || v.jquery) ? de(v) : de.event, b = de.Deferred(), x = de.Callbacks("once memory"), w = m.statusCode || {}, a = {}, l = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!i) for (i = {}; t = Ot.exec(d); ) i[t[1].toLowerCase()] = t[2];
                        t = i[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return h ? d : null;
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = l[e.toLowerCase()] = l[e.toLowerCase()] || e, a[e] = t), 
                    this;
                },
                overrideMimeType: function(e) {
                    return null == h && (m.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [ w[t], e[t] ];
                    return this;
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t), n(0, t), this;
                }
            };
            if (b.promise(T), m.url = ((e || m.url || Ct.href) + "").replace(qt, Ct.protocol + "//"), 
            m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(Ce) || [ "" ], 
            null == m.crossDomain) {
                r = J.createElement("a");
                try {
                    r.href = m.url, r.href = r.href, m.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host;
                } catch (e) {
                    m.crossDomain = !0;
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = de.param(m.data, m.traditional)), 
            Q(It, m, t, T), h) return T;
            for (o in (g = de.event && m.global) && 0 == de.active++ && de.event.trigger("ajaxStart"), 
            m.type = m.type.toUpperCase(), m.hasContent = !Ht.test(m.type), f = m.url.replace($t, ""), 
            m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(jt, "+")) : (s = m.url.slice(f.length), 
            m.data && (m.processData || "string" == typeof m.data) && (f += (kt.test(f) ? "&" : "?") + m.data, 
            delete m.data), !1 === m.cache && (f = f.replace(Lt, "$1"), s = (kt.test(f) ? "&" : "?") + "_=" + Et++ + s), 
            m.url = f + s), m.ifModified && (de.lastModified[f] && T.setRequestHeader("If-Modified-Since", de.lastModified[f]), 
            de.etag[f] && T.setRequestHeader("If-None-Match", de.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), 
            T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : m.accepts["*"]), 
            m.headers) T.setRequestHeader(o, m.headers[o]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, T, m) || h)) return T.abort();
            if (u = "abort", x.add(m.complete), T.done(m.success), T.fail(m.error), c = Q(Rt, m, t, T)) {
                if (T.readyState = 1, g && y.trigger("ajaxSend", [ T, m ]), h) return T;
                m.async && 0 < m.timeout && (p = C.setTimeout(function() {
                    T.abort("timeout");
                }, m.timeout));
                try {
                    h = !1, c.send(a, n);
                } catch (e) {
                    if (h) throw e;
                    n(-1, e);
                }
            } else n(-1, "No Transport");
            return T;
        },
        getJSON: function(e, t, n) {
            return de.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return de.get(e, void 0, t, "script");
        }
    }), de.each([ "get", "post" ], function(e, r) {
        de[r] = function(e, t, n, i) {
            return ue(t) && (i = i || n, n = t, t = void 0), de.ajax(de.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, de.isPlainObject(e) && e));
        };
    }), de._evalUrl = function(e) {
        return de.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        });
    }, de.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (ue(e) && (e = e.call(this[0])), t = de(e, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function(n) {
            return ue(n) ? this.each(function(e) {
                de(this).wrapInner(n.call(this, e));
            }) : this.each(function() {
                var e = de(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
            });
        },
        wrap: function(t) {
            var n = ue(t);
            return this.each(function(e) {
                de(this).wrapAll(n ? t.call(this, e) : t);
            });
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                de(this).replaceWith(this.childNodes);
            }), this;
        }
    }), de.expr.pseudos.hidden = function(e) {
        return !de.expr.pseudos.visible(e);
    }, de.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, de.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest();
        } catch (e) {}
    };
    var Ft = {
        0: 200,
        1223: 204
    }, _t = de.ajaxSettings.xhr();
    le.cors = !!_t && "withCredentials" in _t, le.ajax = _t = !!_t, de.ajaxTransport(function(r) {
        var o, s;
        if (le.cors || _t && !r.crossDomain) return {
            send: function(e, t) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields) for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), 
                e) i.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, 
                        "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Ft[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()));
                    };
                }, i.onload = o(), s = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                    4 === i.readyState && C.setTimeout(function() {
                        o && s();
                    });
                }, o = o("abort");
                try {
                    i.send(r.hasContent && r.data || null);
                } catch (e) {
                    if (o) throw e;
                }
            },
            abort: function() {
                o && o();
            }
        };
    }), de.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
    }), de.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return de.globalEval(e), e;
            }
        }
    }), de.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), de.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain) return {
            send: function(e, t) {
                i = de("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", r = function(e) {
                    i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type);
                }), J.head.appendChild(i[0]);
            },
            abort: function() {
                r && r();
            }
        };
    });
    var Wt, Bt = [], zt = /(=)\?(?=&|$)|\?\?/;
    de.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bt.pop() || de.expando + "_" + Et++;
            return this[e] = !0, e;
        }
    }), de.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, s = !1 !== e.jsonp && (zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = ue(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        s ? e[s] = e[s].replace(zt, "$1" + i) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), 
        e.converters["script json"] = function() {
            return o || de.error(i + " was not called"), o[0];
        }, e.dataTypes[0] = "json", r = C[i], C[i] = function() {
            o = arguments;
        }, n.always(function() {
            void 0 === r ? de(C).removeProp(i) : C[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, 
            Bt.push(i)), o && ue(r) && r(o[0]), o = r = void 0;
        }), "script";
    }), le.createHTMLDocument = ((Wt = J.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
    2 === Wt.childNodes.length), de.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((i = (t = J.implementation.createHTMLDocument("")).createElement("base")).href = J.location.href, 
        t.head.appendChild(i)) : t = J), o = !n && [], (r = ye.exec(e)) ? [ t.createElement(r[1]) ] : (r = x([ e ], t, o), 
        o && o.length && de(o).remove(), de.merge([], r.childNodes)));
        var i, r, o;
    }, de.fn.load = function(e, t, n) {
        var i, r, o, s = this, a = e.indexOf(" ");
        return -1 < a && (i = B(e.slice(a)), e = e.slice(0, a)), ue(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 
        0 < s.length && de.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? de("<div>").append(de.parseHTML(e)).find(i) : e);
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [ e.responseText, t, e ]);
            });
        }), this;
    }, de.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        de.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), de.expr.pseudos.animated = function(t) {
        return de.grep(de.timers, function(e) {
            return t === e.elem;
        }).length;
    }, de.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, u = de.css(e, "position"), c = de(e), f = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), o = de.css(e, "top"), 
            l = de.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (s = (i = c.position()).top, 
            r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ue(t) && (t = t.call(e, n, de.extend({}, a))), 
            null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), 
            "using" in t ? t.using.call(e, f) : c.css(f);
        }
    }, de.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                de.offset.setOffset(this, t, e);
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, 
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === de.css(i, "position")) t = i.getBoundingClientRect(); else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === de.css(e, "position"); ) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = de(e).offset()).top += de.css(e, "borderTopWidth", !0), 
                    r.left += de.css(e, "borderLeftWidth", !0));
                }
                return {
                    top: t.top - r.top - de.css(i, "marginTop", !0),
                    left: t.left - r.left - de.css(i, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === de.css(e, "position"); ) e = e.offsetParent;
                return e || Ve;
            });
        }
    }), de.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = "pageYOffset" === r;
        de.fn[t] = function(e) {
            return Ne(this, function(e, t, n) {
                var i;
                if (ce(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
                i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n;
            }, t, e, arguments.length);
        };
    }), de.each([ "top", "left" ], function(e, n) {
        de.cssHooks[n] = L(le.pixelPosition, function(e, t) {
            if (t) return t = $(e, n), tt.test(t) ? de(e).position()[n] + "px" : t;
        });
    }), de.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        de.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, o) {
            de.fn[o] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e), r = i || (!0 === e || !0 === t ? "margin" : "border");
                return Ne(this, function(e, t, n) {
                    var i;
                    return ce(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, 
                    Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? de.css(e, t, r) : de.style(e, t, n, r);
                }, a, n ? e : void 0, n);
            };
        });
    }), de.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        de.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
    }), de.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), de.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    }), de.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), ue(e)) return i = Z.call(arguments, 2), 
        (r = function() {
            return e.apply(t || this, i.concat(Z.call(arguments)));
        }).guid = e.guid = e.guid || de.guid++, r;
    }, de.holdReady = function(e) {
        e ? de.readyWait++ : de.ready(!0);
    }, de.isArray = Array.isArray, de.parseJSON = JSON.parse, de.nodeName = u, de.isFunction = ue, 
    de.isWindow = ce, de.camelCase = d, de.type = m, de.now = Date.now, de.isNumeric = function(e) {
        var t = de.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return de;
    });
    var Ut = C.jQuery, Xt = C.$;
    return de.noConflict = function(e) {
        return C.$ === de && (C.$ = Xt), e && C.jQuery === de && (C.jQuery = Ut), de;
    }, e || (C.jQuery = C.$ = de), de;
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

!function(e) {
    "use strict";
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || 3 < t[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(), function(i) {
    "use strict";
    i.fn.emulateTransitionEnd = function(e) {
        var t = !1, n = this;
        i(this).one("bsTransitionEnd", function() {
            t = !0;
        });
        return setTimeout(function() {
            t || i(n).trigger(i.support.transition.end);
        }, e), this;
    }, i(function() {
        i.support.transition = function() {
            var e = document.createElement("bootstrap"), t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var n in t) if (void 0 !== e.style[n]) return {
                end: t[n]
            };
            return !1;
        }(), i.support.transition && (i.event.special.bsTransitionEnd = {
            bindType: i.support.transition.end,
            delegateType: i.support.transition.end,
            handle: function(e) {
                if (i(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
            }
        });
    });
}(jQuery), function(o) {
    "use strict";
    var t = '[data-dismiss="alert"]', s = function(e) {
        o(e).on("click", t, this.close);
    };
    s.VERSION = "3.3.7", s.TRANSITION_DURATION = 150, s.prototype.close = function(e) {
        function t() {
            r.detach().trigger("closed.bs.alert").remove();
        }
        var n = o(this), i = n.attr("data-target");
        i || (i = (i = n.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var r = o("#" === i ? [] : i);
        e && e.preventDefault(), r.length || (r = n.closest(".alert")), r.trigger(e = o.Event("close.bs.alert")), 
        e.isDefaultPrevented() || (r.removeClass("in"), o.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", t).emulateTransitionEnd(s.TRANSITION_DURATION) : t());
    };
    var e = o.fn.alert;
    o.fn.alert = function(n) {
        return this.each(function() {
            var e = o(this), t = e.data("bs.alert");
            t || e.data("bs.alert", t = new s(this)), "string" == typeof n && t[n].call(e);
        });
    }, o.fn.alert.Constructor = s, o.fn.alert.noConflict = function() {
        return o.fn.alert = e, this;
    }, o(document).on("click.bs.alert.data-api", t, s.prototype.close);
}(jQuery), function(o) {
    "use strict";
    function n(i) {
        return this.each(function() {
            var e = o(this), t = e.data("bs.button"), n = "object" == typeof i && i;
            t || e.data("bs.button", t = new r(this, n)), "toggle" == i ? t.toggle() : i && t.setState(i);
        });
    }
    var r = function(e, t) {
        this.$element = o(e), this.options = o.extend({}, r.DEFAULTS, t), this.isLoading = !1;
    };
    r.VERSION = "3.3.7", r.DEFAULTS = {
        loadingText: "loading..."
    }, r.prototype.setState = function(e) {
        var t = "disabled", n = this.$element, i = n.is("input") ? "val" : "html", r = n.data();
        e += "Text", null == r.resetText && n.data("resetText", n[i]()), setTimeout(o.proxy(function() {
            n[i](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, 
            n.addClass(t).attr(t, t).prop(t, !0)) : this.isLoading && (this.isLoading = !1, 
            n.removeClass(t).removeAttr(t).prop(t, !1));
        }, this), 0);
    }, r.prototype.toggle = function() {
        var e = !0, t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), 
            this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), 
            this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), 
            e && n.trigger("change");
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
    };
    var e = o.fn.button;
    o.fn.button = n, o.fn.button.Constructor = r, o.fn.button.noConflict = function() {
        return o.fn.button = e, this;
    }, o(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var t = o(e.target).closest(".btn");
        n.call(t, "toggle"), o(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), 
        t.is("input,button") ? t.trigger("focus") : t.find("input:visible,button:visible").first().trigger("focus"));
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        o(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
    });
}(jQuery), function(f) {
    "use strict";
    function s(r) {
        return this.each(function() {
            var e = f(this), t = e.data("bs.carousel"), n = f.extend({}, d.DEFAULTS, e.data(), "object" == typeof r && r), i = "string" == typeof r ? r : n.slide;
            t || e.data("bs.carousel", t = new d(this, n)), "number" == typeof r ? t.to(r) : i ? t[i]() : n.interval && t.pause().cycle();
        });
    }
    var d = function(e, t) {
        this.$element = f(e), this.$indicators = this.$element.find(".carousel-indicators"), 
        this.options = t, this.paused = null, this.sliding = null, this.interval = null, 
        this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", f.proxy(this.keydown, this)), 
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", f.proxy(this.pause, this)).on("mouseleave.bs.carousel", f.proxy(this.cycle, this));
    };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 600, d.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, d.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
              case 37:
                this.prev();
                break;

              case 39:
                this.next();
                break;

              default:
                return;
            }
            e.preventDefault();
        }
    }, d.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(f.proxy(this.next, this), this.options.interval)), 
        this;
    }, d.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active);
    }, d.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t);
        if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap) return t;
        var i = (n + ("prev" == e ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i);
    }, d.prototype.to = function(e) {
        var t = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e);
        }) : n == e ? this.pause().cycle() : this.slide(n < e ? "next" : "prev", this.$items.eq(e));
    }, d.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && f.support.transition && (this.$element.trigger(f.support.transition.end), 
        this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, d.prototype.next = function() {
        if (!this.sliding) return this.slide("next");
    }, d.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev");
    }, d.prototype.slide = function(e, t) {
        var n = this.$element.find(".item.active"), i = t || this.getItemForDirection(e, n), r = this.interval, o = "next" == e ? "left" : "right", s = this;
        if (i.hasClass("active")) return this.sliding = !1;
        var a = i[0], l = f.Event("slide.bs.carousel", {
            relatedTarget: a,
            direction: o
        });
        if (this.$element.trigger(l), !l.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = f(this.$indicators.children()[this.getItemIndex(i)]);
                u && u.addClass("active");
            }
            var c = f.Event("slid.bs.carousel", {
                relatedTarget: a,
                direction: o
            });
            return f.support.transition && this.$element.hasClass("slide") ? (i.addClass(e), 
            i[0].offsetWidth, n.addClass(o), i.addClass(o), n.one("bsTransitionEnd", function() {
                i.removeClass([ e, o ].join(" ")).addClass("active"), n.removeClass([ "active", o ].join(" ")), 
                s.sliding = !1, setTimeout(function() {
                    s.$element.trigger(c);
                }, 0);
            }).emulateTransitionEnd(d.TRANSITION_DURATION)) : (n.removeClass("active"), i.addClass("active"), 
            this.sliding = !1, this.$element.trigger(c)), r && this.cycle(), this;
        }
    };
    var e = f.fn.carousel;
    f.fn.carousel = s, f.fn.carousel.Constructor = d, f.fn.carousel.noConflict = function() {
        return f.fn.carousel = e, this;
    };
    var t = function(e) {
        var t, n = f(this), i = f(n.attr("data-target") || (t = n.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, ""));
        if (i.hasClass("carousel")) {
            var r = f.extend({}, i.data(), n.data()), o = n.attr("data-slide-to");
            o && (r.interval = !1), s.call(i, r), o && i.data("bs.carousel").to(o), e.preventDefault();
        }
    };
    f(document).on("click.bs.carousel.data-api", "[data-slide]", t).on("click.bs.carousel.data-api", "[data-slide-to]", t), 
    f(window).on("load", function() {
        f('[data-ride="carousel"]').each(function() {
            var e = f(this);
            s.call(e, e.data());
        });
    });
}(jQuery), function(s) {
    "use strict";
    function r(e) {
        var t, n = e.attr("data-target") || (t = e.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, "");
        return s(n);
    }
    function a(i) {
        return this.each(function() {
            var e = s(this), t = e.data("bs.collapse"), n = s.extend({}, l.DEFAULTS, e.data(), "object" == typeof i && i);
            !t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || e.data("bs.collapse", t = new l(this, n)), 
            "string" == typeof i && t[i]();
        });
    }
    var l = function(e, t) {
        this.$element = s(e), this.options = s.extend({}, l.DEFAULTS, t), this.$trigger = s('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), 
        this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), 
        this.options.toggle && this.toggle();
    };
    l.VERSION = "3.3.7", l.TRANSITION_DURATION = 350, l.DEFAULTS = {
        toggle: !0
    }, l.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height";
    }, l.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, t = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(t && t.length && ((e = t.data("bs.collapse")) && e.transitioning))) {
                var n = s.Event("show.bs.collapse");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                    t && t.length && (a.call(t, "hide"), e || t.data("bs.collapse", null));
                    var i = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0), 
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[i](""), this.transitioning = 0, 
                        this.$element.trigger("shown.bs.collapse");
                    };
                    if (!s.support.transition) return r.call(this);
                    var o = s.camelCase([ "scroll", i ].join("-"));
                    this.$element.one("bsTransitionEnd", s.proxy(r, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[i](this.$element[0][o]);
                }
            }
        }
    }, l.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = s.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var t = this.dimension();
                this.$element[t](this.$element[t]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), 
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                };
                return s.support.transition ? void this.$element[t](0).one("bsTransitionEnd", s.proxy(n, this)).emulateTransitionEnd(l.TRANSITION_DURATION) : n.call(this);
            }
        }
    }, l.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    }, l.prototype.getParent = function() {
        return s(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(s.proxy(function(e, t) {
            var n = s(t);
            this.addAriaAndCollapsedClass(r(n), n);
        }, this)).end();
    }, l.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n);
    };
    var e = s.fn.collapse;
    s.fn.collapse = a, s.fn.collapse.Constructor = l, s.fn.collapse.noConflict = function() {
        return s.fn.collapse = e, this;
    }, s(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var t = s(this);
        t.attr("data-target") || e.preventDefault();
        var n = r(t), i = n.data("bs.collapse") ? "toggle" : t.data();
        a.call(n, i);
    });
}(jQuery), function(s) {
    "use strict";
    function a(e) {
        var t = e.attr("data-target");
        t || (t = (t = e.attr("href")) && /#[A-Za-z]/.test(t) && t.replace(/.*(?=#[^\s]*$)/, ""));
        var n = t && s(t);
        return n && n.length ? n : e.parent();
    }
    function o(i) {
        i && 3 === i.which || (s(e).remove(), s(l).each(function() {
            var e = s(this), t = a(e), n = {
                relatedTarget: this
            };
            t.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && s.contains(t[0], i.target) || (t.trigger(i = s.Event("hide.bs.dropdown", n)), 
            i.isDefaultPrevented() || (e.attr("aria-expanded", "false"), t.removeClass("open").trigger(s.Event("hidden.bs.dropdown", n)))));
        }));
    }
    var e = ".dropdown-backdrop", l = '[data-toggle="dropdown"]', i = function(e) {
        s(e).on("click.bs.dropdown", this.toggle);
    };
    i.VERSION = "3.3.7", i.prototype.toggle = function(e) {
        var t = s(this);
        if (!t.is(".disabled, :disabled")) {
            var n = a(t), i = n.hasClass("open");
            if (o(), !i) {
                "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && s(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(s(this)).on("click", o);
                var r = {
                    relatedTarget: this
                };
                if (n.trigger(e = s.Event("show.bs.dropdown", r)), e.isDefaultPrevented()) return;
                t.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(s.Event("shown.bs.dropdown", r));
            }
            return !1;
        }
    }, i.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var t = s(this);
            if (e.preventDefault(), e.stopPropagation(), !t.is(".disabled, :disabled")) {
                var n = a(t), i = n.hasClass("open");
                if (!i && 27 != e.which || i && 27 == e.which) return 27 == e.which && n.find(l).trigger("focus"), 
                t.trigger("click");
                var r = n.find(".dropdown-menu li:not(.disabled):visible a");
                if (r.length) {
                    var o = r.index(e.target);
                    38 == e.which && 0 < o && o--, 40 == e.which && o < r.length - 1 && o++, ~o || (o = 0), 
                    r.eq(o).trigger("focus");
                }
            }
        }
    };
    var t = s.fn.dropdown;
    s.fn.dropdown = function(n) {
        return this.each(function() {
            var e = s(this), t = e.data("bs.dropdown");
            t || e.data("bs.dropdown", t = new i(this)), "string" == typeof n && t[n].call(e);
        });
    }, s.fn.dropdown.Constructor = i, s.fn.dropdown.noConflict = function() {
        return s.fn.dropdown = t, this;
    }, s(document).on("click.bs.dropdown.data-api", o).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation();
    }).on("click.bs.dropdown.data-api", l, i.prototype.toggle).on("keydown.bs.dropdown.data-api", l, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown);
}(jQuery), function(o) {
    "use strict";
    function s(i, r) {
        return this.each(function() {
            var e = o(this), t = e.data("bs.modal"), n = o.extend({}, a.DEFAULTS, e.data(), "object" == typeof i && i);
            t || e.data("bs.modal", t = new a(this, n)), "string" == typeof i ? t[i](r) : n.show && t.show(r);
        });
    }
    var a = function(e, t) {
        this.options = t, this.$body = o(document.body), this.$element = o(e), this.$dialog = this.$element.find(".modal-dialog"), 
        this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, 
        this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, o.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };
    a.VERSION = "3.3.7", a.TRANSITION_DURATION = 300, a.BACKDROP_TRANSITION_DURATION = 150, 
    a.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, a.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e);
    }, a.prototype.show = function(n) {
        var i = this, e = o.Event("show.bs.modal", {
            relatedTarget: n
        });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, 
        this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), 
        this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', o.proxy(this.hide, this)), 
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                o(e.target).is(i.$element) && (i.ignoreBackdropClick = !0);
            });
        }), this.backdrop(function() {
            var e = o.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), 
            i.adjustDialog(), e && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var t = o.Event("shown.bs.modal", {
                relatedTarget: n
            });
            e ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(t);
            }).emulateTransitionEnd(a.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(t);
        }));
    }, a.prototype.hide = function(e) {
        e && e.preventDefault(), e = o.Event("hide.bs.modal"), this.$element.trigger(e), 
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), 
        o(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), 
        this.$dialog.off("mousedown.dismiss.bs.modal"), o.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", o.proxy(this.hideModal, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : this.hideModal());
    }, a.prototype.enforceFocus = function() {
        o(document).off("focusin.bs.modal").on("focusin.bs.modal", o.proxy(function(e) {
            document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus");
        }, this));
    }, a.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", o.proxy(function(e) {
            27 == e.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    }, a.prototype.resize = function() {
        this.isShown ? o(window).on("resize.bs.modal", o.proxy(this.handleUpdate, this)) : o(window).off("resize.bs.modal");
    }, a.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal");
        });
    }, a.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, a.prototype.backdrop = function(e) {
        var t = this, n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = o.support.transition && n;
            if (this.$backdrop = o(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), 
            this.$element.on("click.dismiss.bs.modal", o.proxy(function(e) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
            }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            i ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : e();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                t.removeBackdrop(), e && e();
            };
            o.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : r();
        } else e && e();
    }, a.prototype.handleUpdate = function() {
        this.adjustDialog();
    }, a.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        });
    }, a.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        });
    }, a.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar();
    }, a.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth);
    }, a.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
    }, a.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t;
    };
    var e = o.fn.modal;
    o.fn.modal = s, o.fn.modal.Constructor = a, o.fn.modal.noConflict = function() {
        return o.fn.modal = e, this;
    }, o(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var t = o(this), n = t.attr("href"), i = o(t.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")), r = i.data("bs.modal") ? "toggle" : o.extend({
            remote: !/#/.test(n) && n
        }, i.data(), t.data());
        t.is("a") && e.preventDefault(), i.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || i.one("hidden.bs.modal", function() {
                t.is(":visible") && t.trigger("focus");
            });
        }), s.call(i, r, this);
    });
}(jQuery), function(g) {
    "use strict";
    var m = function(e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, 
        this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t);
    };
    m.VERSION = "3.3.7", m.TRANSITION_DURATION = 150, m.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, m.prototype.init = function(e, t, n) {
        if (this.enabled = !0, this.type = e, this.$element = g(t), this.options = this.getOptions(n), 
        this.$viewport = this.options.viewport && g(g.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), 
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), r = i.length; r--; ) {
            var o = i[r];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, g.proxy(this.toggle, this)); else if ("manual" != o) {
                var s = "hover" == o ? "mouseenter" : "focusin", a = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, g.proxy(this.enter, this)), 
                this.$element.on(a + "." + this.type, this.options.selector, g.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = g.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    }, m.prototype.getDefaults = function() {
        return m.DEFAULTS;
    }, m.prototype.getOptions = function(e) {
        return (e = g.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e;
    }, m.prototype.getDelegateOptions = function() {
        var n = {}, i = this.getDefaults();
        return this._options && g.each(this._options, function(e, t) {
            i[e] != t && (n[e] = t);
        }), n;
    }, m.prototype.enter = function(e) {
        var t = e instanceof this.constructor ? e : g(e.currentTarget).data("bs." + this.type);
        return t || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), 
        g(e.currentTarget).data("bs." + this.type, t)), e instanceof g.Event && (t.inState["focusin" == e.type ? "focus" : "hover"] = !0), 
        t.tip().hasClass("in") || "in" == t.hoverState ? void (t.hoverState = "in") : (clearTimeout(t.timeout), 
        t.hoverState = "in", t.options.delay && t.options.delay.show ? void (t.timeout = setTimeout(function() {
            "in" == t.hoverState && t.show();
        }, t.options.delay.show)) : t.show());
    }, m.prototype.isInStateTrue = function() {
        for (var e in this.inState) if (this.inState[e]) return !0;
        return !1;
    }, m.prototype.leave = function(e) {
        var t = e instanceof this.constructor ? e : g(e.currentTarget).data("bs." + this.type);
        if (t || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), 
        g(e.currentTarget).data("bs." + this.type, t)), e instanceof g.Event && (t.inState["focusout" == e.type ? "focus" : "hover"] = !1), 
        !t.isInStateTrue()) return clearTimeout(t.timeout), t.hoverState = "out", t.options.delay && t.options.delay.hide ? void (t.timeout = setTimeout(function() {
            "out" == t.hoverState && t.hide();
        }, t.options.delay.hide)) : t.hide();
    }, m.prototype.show = function() {
        var e = g.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var t = g.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !t) return;
            var n = this, i = this.tip(), r = this.getUID(this.type);
            this.setContent(), i.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && i.addClass("fade");
            var o = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement, s = /\s?auto?\s?/i, a = s.test(o);
            a && (o = o.replace(s, "") || "top"), i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(o).data("bs." + this.type, this), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element), 
            this.$element.trigger("inserted.bs." + this.type);
            var l = this.getPosition(), u = i[0].offsetWidth, c = i[0].offsetHeight;
            if (a) {
                var f = o, d = this.getPosition(this.$viewport);
                o = "bottom" == o && l.bottom + c > d.bottom ? "top" : "top" == o && l.top - c < d.top ? "bottom" : "right" == o && l.right + u > d.width ? "left" : "left" == o && l.left - u < d.left ? "right" : o, 
                i.removeClass(f).addClass(o);
            }
            var p = this.getCalculatedOffset(o, l, u, c);
            this.applyPlacement(p, o);
            var h = function() {
                var e = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == e && n.leave(n);
            };
            g.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", h).emulateTransitionEnd(m.TRANSITION_DURATION) : h();
        }
    }, m.prototype.applyPlacement = function(e, t) {
        var n = this.tip(), i = n[0].offsetWidth, r = n[0].offsetHeight, o = parseInt(n.css("margin-top"), 10), s = parseInt(n.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(s) && (s = 0), e.top += o, e.left += s, g.offset.setOffset(n[0], g.extend({
            using: function(e) {
                n.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                });
            }
        }, e), 0), n.addClass("in");
        var a = n[0].offsetWidth, l = n[0].offsetHeight;
        "top" == t && l != r && (e.top = e.top + r - l);
        var u = this.getViewportAdjustedDelta(t, e, a, l);
        u.left ? e.left += u.left : e.top += u.top;
        var c = /top|bottom/.test(t), f = c ? 2 * u.left - i + a : 2 * u.top - r + l, d = c ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(f, n[0][d], c);
    }, m.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "");
    }, m.prototype.setContent = function() {
        var e = this.tip(), t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right");
    }, m.prototype.hide = function(e) {
        function t() {
            "in" != n.hoverState && i.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), 
            e && e();
        }
        var n = this, i = g(this.$tip), r = g.Event("hide.bs." + this.type);
        if (this.$element.trigger(r), !r.isDefaultPrevented()) return i.removeClass("in"), 
        g.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", t).emulateTransitionEnd(m.TRANSITION_DURATION) : t(), 
        this.hoverState = null, this;
    }, m.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "");
    }, m.prototype.hasContent = function() {
        return this.getTitle();
    }, m.prototype.getPosition = function(e) {
        var t = (e = e || this.$element)[0], n = "BODY" == t.tagName, i = t.getBoundingClientRect();
        null == i.width && (i = g.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var r = window.SVGElement && t instanceof window.SVGElement, o = n ? {
            top: 0,
            left: 0
        } : r ? null : e.offset(), s = {
            scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        }, a = n ? {
            width: g(window).width(),
            height: g(window).height()
        } : null;
        return g.extend({}, i, s, a, o);
    }, m.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        };
    }, m.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var o = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var a = t.top - o - s.scroll, l = t.top + o - s.scroll + i;
            a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l);
        } else {
            var u = t.left - o, c = t.left + o + n;
            u < s.left ? r.left = s.left - u : c > s.right && (r.left = s.left + s.width - c);
        }
        return r;
    }, m.prototype.getTitle = function() {
        var e = this.$element, t = this.options;
        return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title);
    }, m.prototype.getUID = function(e) {
        for (;e += ~~(1e6 * Math.random()), document.getElementById(e); ) ;
        return e;
    }, m.prototype.tip = function() {
        if (!this.$tip && (this.$tip = g(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip;
    }, m.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, m.prototype.enable = function() {
        this.enabled = !0;
    }, m.prototype.disable = function() {
        this.enabled = !1;
    }, m.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    }, m.prototype.toggle = function(e) {
        var t = this;
        e && ((t = g(e.currentTarget).data("bs." + this.type)) || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), 
        g(e.currentTarget).data("bs." + this.type, t))), e ? (t.inState.click = !t.inState.click, 
        t.isInStateTrue() ? t.enter(t) : t.leave(t)) : t.tip().hasClass("in") ? t.leave(t) : t.enter(t);
    }, m.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), 
            e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null;
        });
    };
    var e = g.fn.tooltip;
    g.fn.tooltip = function(i) {
        return this.each(function() {
            var e = g(this), t = e.data("bs.tooltip"), n = "object" == typeof i && i;
            !t && /destroy|hide/.test(i) || (t || e.data("bs.tooltip", t = new m(this, n)), 
            "string" == typeof i && t[i]());
        });
    }, g.fn.tooltip.Constructor = m, g.fn.tooltip.noConflict = function() {
        return g.fn.tooltip = e, this;
    };
}(jQuery), function(r) {
    "use strict";
    var o = function(e, t) {
        this.init("popover", e, t);
    };
    if (!r.fn.tooltip) throw new Error("Popover requires tooltip.js");
    o.VERSION = "3.3.7", o.DEFAULTS = r.extend({}, r.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), o.prototype = r.extend({}, r.fn.tooltip.Constructor.prototype), (o.prototype.constructor = o).prototype.getDefaults = function() {
        return o.DEFAULTS;
    }, o.prototype.setContent = function() {
        var e = this.tip(), t = this.getTitle(), n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), 
        e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide();
    }, o.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    }, o.prototype.getContent = function() {
        var e = this.$element, t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content);
    }, o.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };
    var e = r.fn.popover;
    r.fn.popover = function(i) {
        return this.each(function() {
            var e = r(this), t = e.data("bs.popover"), n = "object" == typeof i && i;
            !t && /destroy|hide/.test(i) || (t || e.data("bs.popover", t = new o(this, n)), 
            "string" == typeof i && t[i]());
        });
    }, r.fn.popover.Constructor = o, r.fn.popover.noConflict = function() {
        return r.fn.popover = e, this;
    };
}(jQuery), function(o) {
    "use strict";
    function r(e, t) {
        this.$body = o(document.body), this.$scrollElement = o(o(e).is(document.body) ? window : e), 
        this.options = o.extend({}, r.DEFAULTS, t), this.selector = (this.options.target || "") + " .nav li > a", 
        this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, 
        this.$scrollElement.on("scroll.bs.scrollspy", o.proxy(this.process, this)), this.refresh(), 
        this.process();
    }
    function t(i) {
        return this.each(function() {
            var e = o(this), t = e.data("bs.scrollspy"), n = "object" == typeof i && i;
            t || e.data("bs.scrollspy", t = new r(this, n)), "string" == typeof i && t[i]();
        });
    }
    r.VERSION = "3.3.7", r.DEFAULTS = {
        offset: 10
    }, r.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }, r.prototype.refresh = function() {
        var e = this, i = "offset", r = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), 
        o.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop()), 
        this.$body.find(this.selector).map(function() {
            var e = o(this), t = e.data("target") || e.attr("href"), n = /^#./.test(t) && o(t);
            return n && n.length && n.is(":visible") && [ [ n[i]().top + r, t ] ] || null;
        }).sort(function(e, t) {
            return e[0] - t[0];
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1]);
        });
    }, r.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), r = this.offsets, o = this.targets, s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), i <= t) return s != (e = o[o.length - 1]) && this.activate(e);
        if (s && t < r[0]) return this.activeTarget = null, this.clear();
        for (e = r.length; e--; ) s != o[e] && t >= r[e] && (void 0 === r[e + 1] || t < r[e + 1]) && this.activate(o[e]);
    }, r.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var t = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', n = o(t).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), 
        n.trigger("activate.bs.scrollspy");
    }, r.prototype.clear = function() {
        o(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };
    var e = o.fn.scrollspy;
    o.fn.scrollspy = t, o.fn.scrollspy.Constructor = r, o.fn.scrollspy.noConflict = function() {
        return o.fn.scrollspy = e, this;
    }, o(window).on("load.bs.scrollspy.data-api", function() {
        o('[data-spy="scroll"]').each(function() {
            var e = o(this);
            t.call(e, e.data());
        });
    });
}(jQuery), function(a) {
    "use strict";
    function t(n) {
        return this.each(function() {
            var e = a(this), t = e.data("bs.tab");
            t || e.data("bs.tab", t = new s(this)), "string" == typeof n && t[n]();
        });
    }
    var s = function(e) {
        this.element = a(e);
    };
    s.VERSION = "3.3.7", s.TRANSITION_DURATION = 150, s.prototype.show = function() {
        var e = this.element, t = e.closest("ul:not(.dropdown-menu)"), n = e.data("target");
        if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var i = t.find(".active:last a"), r = a.Event("hide.bs.tab", {
                relatedTarget: e[0]
            }), o = a.Event("show.bs.tab", {
                relatedTarget: i[0]
            });
            if (i.trigger(r), e.trigger(o), !o.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var s = a(n);
                this.activate(e.closest("li"), t), this.activate(s, s.parent(), function() {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    });
                });
            }
        }
    }, s.prototype.activate = function(e, t, n) {
        function i() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), 
            e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), o ? (e[0].offsetWidth, 
            e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), 
            n && n();
        }
        var r = t.find("> .active"), o = n && a.support.transition && (r.length && r.hasClass("fade") || !!t.find("> .fade").length);
        r.length && o ? r.one("bsTransitionEnd", i).emulateTransitionEnd(s.TRANSITION_DURATION) : i(), 
        r.removeClass("in");
    };
    var e = a.fn.tab;
    a.fn.tab = t, a.fn.tab.Constructor = s, a.fn.tab.noConflict = function() {
        return a.fn.tab = e, this;
    };
    var n = function(e) {
        e.preventDefault(), t.call(a(this), "show");
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n);
}(jQuery), function(l) {
    "use strict";
    function n(i) {
        return this.each(function() {
            var e = l(this), t = e.data("bs.affix"), n = "object" == typeof i && i;
            t || e.data("bs.affix", t = new u(this, n)), "string" == typeof i && t[i]();
        });
    }
    var u = function(e, t) {
        this.options = l.extend({}, u.DEFAULTS, t), this.$target = l(this.options.target).on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)), 
        this.$element = l(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, 
        this.checkPosition();
    };
    u.VERSION = "3.3.7", u.RESET = "affix affix-top affix-bottom", u.DEFAULTS = {
        offset: 0,
        target: window
    }, u.prototype.getState = function(e, t, n, i) {
        var r = this.$target.scrollTop(), o = this.$element.offset(), s = this.$target.height();
        if (null != n && "top" == this.affixed) return r < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(r + this.unpin <= o.top) && "bottom" : !(r + s <= e - i) && "bottom";
        var a = null == this.affixed, l = a ? r : o.top;
        return null != n && r <= n ? "top" : null != i && e - i <= l + (a ? s : t) && "bottom";
    }, u.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(u.RESET).addClass("affix");
        var e = this.$target.scrollTop(), t = this.$element.offset();
        return this.pinnedOffset = t.top - e;
    }, u.prototype.checkPositionWithEventLoop = function() {
        setTimeout(l.proxy(this.checkPosition, this), 1);
    }, u.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), t = this.options.offset, n = t.top, i = t.bottom, r = Math.max(l(document).height(), l(document.body).height());
            "object" != typeof t && (i = n = t), "function" == typeof n && (n = t.top(this.$element)), 
            "function" == typeof i && (i = t.bottom(this.$element));
            var o = this.getState(r, e, n, i);
            if (this.affixed != o) {
                null != this.unpin && this.$element.css("top", "");
                var s = "affix" + (o ? "-" + o : ""), a = l.Event(s + ".bs.affix");
                if (this.$element.trigger(a), a.isDefaultPrevented()) return;
                this.affixed = o, this.unpin = "bottom" == o ? this.getPinnedOffset() : null, this.$element.removeClass(u.RESET).addClass(s).trigger(s.replace("affix", "affixed") + ".bs.affix");
            }
            "bottom" == o && this.$element.offset({
                top: r - e - i
            });
        }
    };
    var e = l.fn.affix;
    l.fn.affix = n, l.fn.affix.Constructor = u, l.fn.affix.noConflict = function() {
        return l.fn.affix = e, this;
    }, l(window).on("load", function() {
        l('[data-spy="affix"]').each(function() {
            var e = l(this), t = e.data();
            t.offset = t.offset || {}, null != t.offsetBottom && (t.offset.bottom = t.offsetBottom), 
            null != t.offsetTop && (t.offset.top = t.offsetTop), n.call(e, t);
        });
    });
}(jQuery), function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function(h, e) {
    function a(e) {
        var t = e.length, n = J.type(e);
        return "function" !== n && !J.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e));
    }
    function t(e, n, i) {
        if (J.isFunction(n)) return J.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i;
        });
        if (n.nodeType) return J.grep(e, function(e) {
            return e === n !== i;
        });
        if ("string" == typeof n) {
            if (oe.test(n)) return J.filter(n, e, i);
            n = J.filter(n, e);
        }
        return J.grep(e, function(e) {
            return 0 <= J.inArray(e, n) !== i;
        });
    }
    function n(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    function i() {
        ae.addEventListener ? (ae.removeEventListener("DOMContentLoaded", r, !1), h.removeEventListener("load", r, !1)) : (ae.detachEvent("onreadystatechange", r), 
        h.detachEvent("onload", r));
    }
    function r() {
        (ae.addEventListener || "load" === event.type || "complete" === ae.readyState) && (i(), 
        J.ready());
    }
    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(ve, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : me.test(n) ? J.parseJSON(n) : n);
                } catch (e) {}
                J.data(e, t, n);
            } else n = void 0;
        }
        return n;
    }
    function u(e) {
        var t;
        for (t in e) if (("data" !== t || !J.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0;
    }
    function o(e, t, n, i) {
        if (J.acceptData(e)) {
            var r, o, s = J.expando, a = e.nodeType, l = a ? J.cache : e, u = a ? e[s] : e[s] && s;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = a ? e[s] = W.pop() || J.guid++ : s), 
            l[u] || (l[u] = a ? {} : {
                toJSON: J.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = J.extend(l[u], t) : l[u].data = J.extend(l[u].data, t)), 
            o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[J.camelCase(t)] = n), 
            "string" == typeof t ? null == (r = o[t]) && (r = o[J.camelCase(t)]) : r = o, r;
        }
    }
    function s(e, t, n) {
        if (J.acceptData(e)) {
            var i, r, o = e.nodeType, s = o ? J.cache : e, a = o ? e[J.expando] : J.expando;
            if (s[a]) {
                if (t && (i = n ? s[a] : s[a].data)) {
                    J.isArray(t) ? t = t.concat(J.map(t, J.camelCase)) : t in i ? t = [ t ] : t = (t = J.camelCase(t)) in i ? [ t ] : t.split(" "), 
                    r = t.length;
                    for (;r--; ) delete i[t[r]];
                    if (n ? !u(i) : !J.isEmptyObject(i)) return;
                }
                (n || (delete s[a].data, u(s[a]))) && (o ? J.cleanData([ e ], !0) : G.deleteExpando || s != s.window ? delete s[a] : s[a] = null);
            }
        }
    }
    function c() {
        return !0;
    }
    function f() {
        return !1;
    }
    function d() {
        try {
            return ae.activeElement;
        } catch (e) {}
    }
    function g(e) {
        var t = De.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (;t.length; ) n.createElement(t.pop());
        return n;
    }
    function m(e, t) {
        var n, i, r = 0, o = typeof e.getElementsByTagName !== ge ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== ge ? e.querySelectorAll(t || "*") : void 0;
        if (!o) for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || J.nodeName(i, t) ? o.push(i) : J.merge(o, m(i, t));
        return void 0 === t || t && J.nodeName(e, t) ? J.merge([ e ], o) : o;
    }
    function v(e) {
        Te.test(e.type) && (e.defaultChecked = e.checked);
    }
    function p(e, t) {
        return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function y(e) {
        return e.type = (null !== J.find.attr(e, "type")) + "/" + e.type, e;
    }
    function b(e) {
        var t = Me.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function x(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) J._data(n, "globalEval", !t || J._data(t[i], "globalEval"));
    }
    function w(e, t) {
        if (1 === t.nodeType && J.hasData(e)) {
            var n, i, r, o = J._data(e), s = J._data(t, o), a = o.events;
            if (a) for (n in delete s.handle, s.events = {}, a) for (i = 0, r = a[n].length; i < r; i++) J.event.add(t, n, a[n][i]);
            s.data && (s.data = J.extend({}, s.data));
        }
    }
    function T(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !G.noCloneEvent && t[J.expando]) {
                for (i in (r = J._data(t)).events) J.removeEvent(t, i, r.handle);
                t.removeAttribute(J.expando);
            }
            "script" === n && t.text !== e.text ? (y(t).text = e.text, b(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
            G.html5Clone && e.innerHTML && !J.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Te.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
        }
    }
    function C(e, t) {
        var n, i = J(t.createElement(e)).appendTo(t.body), r = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(i[0])) ? n.display : J.css(i[0], "display");
        return i.detach(), r;
    }
    function E(e) {
        var t = ae, n = Ue[e];
        return n || ("none" !== (n = C(e, t)) && n || ((t = ((Be = (Be || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Be[0].contentDocument).document).write(), 
        t.close(), n = C(e, t), Be.detach()), Ue[e] = n), n;
    }
    function k(t, n) {
        return {
            get: function() {
                var e = t();
                if (null != e) return e ? void delete this.get : (this.get = n).apply(this, arguments);
            }
        };
    }
    function N(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = rt.length; r--; ) if ((t = rt[r] + n) in e) return t;
        return i;
    }
    function S(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++) (i = e[s]).style && (o[s] = J._data(i, "olddisplay"), 
        n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && xe(i) && (o[s] = J._data(i, "olddisplay", E(i.nodeName)))) : (r = xe(i), 
        (n && "none" !== n || !r) && J._data(i, "olddisplay", r ? n : J.css(i, "display"))));
        for (s = 0; s < a; s++) (i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
        return e;
    }
    function D(e, t, n) {
        var i = et.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
    }
    function A(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += J.css(e, n + be[o], !0, r)), 
        i ? ("content" === n && (s -= J.css(e, "padding" + be[o], !0, r)), "margin" !== n && (s -= J.css(e, "border" + be[o] + "Width", !0, r))) : (s += J.css(e, "padding" + be[o], !0, r), 
        "padding" !== n && (s += J.css(e, "border" + be[o] + "Width", !0, r)));
        return s;
    }
    function j(e, t, n) {
        var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, o = Xe(e), s = G.boxSizing && "border-box" === J.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (((r = Ve(e, t, o)) < 0 || null == r) && (r = e.style[t]), Ye.test(r)) return r;
            i = s && (G.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0;
        }
        return r + A(e, t, n || (s ? "border" : "content"), i, o) + "px";
    }
    function $(e, t, n, i, r) {
        return new $.prototype.init(e, t, n, i, r);
    }
    function L() {
        return setTimeout(function() {
            ot = void 0;
        }), ot = J.now();
    }
    function O(e, t) {
        var n, i = {
            height: e
        }, r = 0;
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = be[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function H(e, t, n) {
        for (var i, r = (mt[t] || []).concat(mt["*"]), o = 0, s = r.length; o < s; o++) if (i = r[o].call(n, t, e)) return i;
    }
    function q(o, e, t) {
        var n, s, i = 0, r = gt.length, a = J.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (s) return !1;
            for (var e = ot || L(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
            return a.notifyWith(o, [ u, n, t ]), n < 1 && r ? t : (a.resolveWith(o, [ u ]), 
            !1);
        }, u = a.promise({
            elem: o,
            props: J.extend({}, e),
            opts: J.extend(!0, {
                specialEasing: {}
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: ot || L(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = J.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n), n;
            },
            stop: function(e) {
                var t = 0, n = e ? u.tweens.length : 0;
                if (s) return this;
                for (s = !0; t < n; t++) u.tweens[t].run(1);
                return e ? a.resolveWith(o, [ u, e ]) : a.rejectWith(o, [ u, e ]), this;
            }
        }), c = u.props;
        for (function(e, t) {
            var n, i, r, o, s;
            for (n in e) if (r = t[i = J.camelCase(n)], o = e[n], J.isArray(o) && (r = o[1], 
            o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = J.cssHooks[i]) && "expand" in s) for (n in o = s.expand(o), 
            delete e[i], o) n in e || (e[n] = o[n], t[n] = r); else t[i] = r;
        }(c, u.opts.specialEasing); i < r; i++) if (n = gt[i].call(u, o, c, u.opts)) return n;
        return J.map(c, H, u), J.isFunction(u.opts.start) && u.opts.start.call(o, u), J.fx.timer(J.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
    }
    function I(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0, r = e.toLowerCase().match(de) || [];
            if (J.isFunction(t)) for (;n = r[i++]; ) "+" === n.charAt(0) ? (n = n.slice(1) || "*", 
            (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function R(t, r, o, s) {
        function a(e) {
            var i;
            return l[e] = !0, J.each(t[e] || [], function(e, t) {
                var n = t(r, o, s);
                return "string" != typeof n || u || l[n] ? u ? !(i = n) : void 0 : (r.dataTypes.unshift(n), 
                a(n), !1);
            }), i;
        }
        var l = {}, u = t === Mt;
        return a(r.dataTypes[0]) || !l["*"] && a("*");
    }
    function P(e, t) {
        var n, i, r = J.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && J.extend(!0, e, n), e;
    }
    function M(n, e, i, r) {
        var t;
        if (J.isArray(e)) J.each(e, function(e, t) {
            i || Wt.test(n) ? r(n, t) : M(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, r);
        }); else if (i || "object" !== J.type(e)) r(n, e); else for (t in e) M(n + "[" + t + "]", e[t], i, r);
    }
    function F() {
        try {
            return new h.XMLHttpRequest();
        } catch (e) {}
    }
    function _(e) {
        return J.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
    }
    var W = [], B = W.slice, z = W.concat, U = W.push, X = W.indexOf, V = {}, Q = V.toString, Y = V.hasOwnProperty, G = {}, J = function(e, t) {
        return new J.fn.init(e, t);
    }, K = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Z = /^-ms-/, ee = /-([\da-z])/gi, te = function(e, t) {
        return t.toUpperCase();
    };
    J.fn = J.prototype = {
        jquery: "1.11.2",
        constructor: J,
        selector: "",
        length: 0,
        toArray: function() {
            return B.call(this);
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : B.call(this);
        },
        pushStack: function(e) {
            var t = J.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e, t) {
            return J.each(this, e, t);
        },
        map: function(n) {
            return this.pushStack(J.map(this, function(e, t) {
                return n.call(e, t, e);
            }));
        },
        slice: function() {
            return this.pushStack(B.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: U,
        sort: W.sort,
        splice: W.splice
    }, J.extend = J.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || J.isFunction(s) || (s = {}), 
        a === l && (s = this, a--); a < l; a++) if (null != (r = arguments[a])) for (i in r) e = s[i], 
        s !== (n = r[i]) && (u && n && (J.isPlainObject(n) || (t = J.isArray(n))) ? (t ? (t = !1, 
        o = e && J.isArray(e) ? e : []) : o = e && J.isPlainObject(e) ? e : {}, s[i] = J.extend(u, o, n)) : void 0 !== n && (s[i] = n));
        return s;
    }, J.extend({
        expando: "jQuery" + ("1.11.2" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === J.type(e);
        },
        isArray: Array.isArray || function(e) {
            return "array" === J.type(e);
        },
        isWindow: function(e) {
            return null != e && e == e.window;
        },
        isNumeric: function(e) {
            return !J.isArray(e) && 0 <= e - parseFloat(e) + 1;
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== J.type(e) || e.nodeType || J.isWindow(e)) return !1;
            try {
                if (e.constructor && !Y.call(e, "constructor") && !Y.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (e) {
                return !1;
            }
            if (G.ownLast) for (t in e) return Y.call(e, t);
            for (t in e) ;
            return void 0 === t || Y.call(e, t);
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Q.call(e)] || "object" : typeof e;
        },
        globalEval: function(e) {
            e && J.trim(e) && (h.execScript || function(e) {
                h.eval.call(h, e);
            })(e);
        },
        camelCase: function(e) {
            return e.replace(Z, "ms-").replace(ee, te);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t, n) {
            var i = 0, r = e.length, o = a(e);
            if (n) {
                if (o) for (;i < r && !1 !== t.apply(e[i], n); i++) ; else for (i in e) if (!1 === t.apply(e[i], n)) break;
            } else if (o) for (;i < r && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(K, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (a(Object(e)) ? J.merge(n, "string" == typeof e ? [ e ] : e) : U.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (X) return X.call(t, e, n);
                for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++) if (n in t && t[n] === e) return n;
            }
            return -1;
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; ) e[r++] = t[i++];
            if (n != n) for (;void 0 !== t[i]; ) e[r++] = t[i++];
            return e.length = r, e;
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i;
        },
        map: function(e, t, n) {
            var i, r = 0, o = e.length, s = [];
            if (a(e)) for (;r < o; r++) null != (i = t(e[r], r, n)) && s.push(i); else for (r in e) null != (i = t(e[r], r, n)) && s.push(i);
            return z.apply([], s);
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), J.isFunction(e) ? (n = B.call(arguments, 2), 
            (i = function() {
                return e.apply(t || this, n.concat(B.call(arguments)));
            }).guid = e.guid = e.guid || J.guid++, i) : void 0;
        },
        now: function() {
            return +new Date();
        },
        support: G
    }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        V["[object " + t + "]"] = t.toLowerCase();
    });
    var ne = function(n) {
        function x(e, t, n, i) {
            var r, o, s, a, l, u, c, f, d, p;
            if ((t ? t.ownerDocument || t : P) !== j && A(t), n = n || [], a = (t = t || j).nodeType, 
            "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!i && L) {
                if (11 !== a && (r = me.exec(e))) if (s = r[1]) {
                    if (9 === a) {
                        if (!(o = t.getElementById(s)) || !o.parentNode) return n;
                        if (o.id === s) return n.push(o), n;
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && I(t, o) && o.id === s) return n.push(o), 
                    n;
                } else {
                    if (r[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = r[3]) && m.getElementsByClassName) return G.apply(n, t.getElementsByClassName(s)), 
                    n;
                }
                if (m.qsa && (!O || !O.test(e))) {
                    if (f = c = R, d = t, p = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (u = C(e), (c = t.getAttribute("id")) ? f = c.replace(ye, "\\$&") : t.setAttribute("id", f), 
                        f = "[id='" + f + "'] ", l = u.length; l--; ) u[l] = f + g(u[l]);
                        d = ve.test(e) && h(t.parentNode) || t, p = u.join(",");
                    }
                    if (p) try {
                        return G.apply(n, d.querySelectorAll(p)), n;
                    } catch (e) {} finally {
                        c || t.removeAttribute("id");
                    }
                }
            }
            return k(e.replace(se, "$1"), t, n, i);
        }
        function e() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > T.cacheLength && delete e[i.shift()], e[t + " "] = n;
            };
        }
        function l(e) {
            return e[R] = !0, e;
        }
        function i(e) {
            var t = j.createElement("div");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function t(e, t) {
            for (var n = e.split("|"), i = e.length; i--; ) T.attrHandle[n[i]] = t;
        }
        function u(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (i) return i;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function r(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function o(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function s(s) {
            return l(function(o) {
                return o = +o, l(function(e, t) {
                    for (var n, i = s([], e.length, o), r = i.length; r--; ) e[n = i[r]] && (e[n] = !(t[n] = e[n]));
                });
            });
        }
        function h(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        function a() {}
        function g(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function f(s, e, t) {
            var a = e.dir, l = t && "parentNode" === a, u = F++;
            return e.first ? function(e, t, n) {
                for (;e = e[a]; ) if (1 === e.nodeType || l) return s(e, t, n);
            } : function(e, t, n) {
                var i, r, o = [ M, u ];
                if (n) {
                    for (;e = e[a]; ) if ((1 === e.nodeType || l) && s(e, t, n)) return !0;
                } else for (;e = e[a]; ) if (1 === e.nodeType || l) {
                    if ((i = (r = e[R] || (e[R] = {}))[a]) && i[0] === M && i[1] === u) return o[2] = i[2];
                    if ((r[a] = o)[2] = s(e, t, n)) return !0;
                }
            };
        }
        function d(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--; ) if (!r[i](e, t, n)) return !1;
                return !0;
            } : r[0];
        }
        function w(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++) (o = e[a]) && (!n || n(o, i, r)) && (s.push(o), 
            u && t.push(a));
            return s;
        }
        function y(p, h, g, m, v, e) {
            return m && !m[R] && (m = y(m)), v && !v[R] && (v = y(v, e)), l(function(e, t, n, i) {
                var r, o, s, a = [], l = [], u = t.length, c = e || function(e, t, n) {
                    for (var i = 0, r = t.length; i < r; i++) x(e, t[i], n);
                    return n;
                }(h || "*", n.nodeType ? [ n ] : n, []), f = !p || !e && h ? c : w(c, a, p, n, i), d = g ? v || (e ? p : u || m) ? [] : t : f;
                if (g && g(f, d, n, i), m) for (r = w(d, l), m(r, [], n, i), o = r.length; o--; ) (s = r[o]) && (d[l[o]] = !(f[l[o]] = s));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (r = [], o = d.length; o--; ) (s = d[o]) && r.push(f[o] = s);
                            v(null, d = [], r, i);
                        }
                        for (o = d.length; o--; ) (s = d[o]) && -1 < (r = v ? K(e, s) : a[o]) && (e[r] = !(t[r] = s));
                    }
                } else d = w(d === t ? d.splice(u, d.length) : d), v ? v(null, t, d, i) : G.apply(t, d);
            });
        }
        function p(e) {
            for (var r, t, n, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = f(function(e) {
                return e === r;
            }, s, !0), u = f(function(e) {
                return -1 < K(r, e);
            }, s, !0), c = [ function(e, t, n) {
                var i = !o && (n || t !== N) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                return r = null, i;
            } ]; a < i; a++) if (t = T.relative[e[a].type]) c = [ f(d(c), t) ]; else {
                if ((t = T.filter[e[a].type].apply(null, e[a].matches))[R]) {
                    for (n = ++a; n < i && !T.relative[e[n].type]; n++) ;
                    return y(1 < a && d(c), 1 < a && g(e.slice(0, a - 1).concat({
                        value: " " === e[a - 2].type ? "*" : ""
                    })).replace(se, "$1"), t, a < n && p(e.slice(a, n)), n < i && p(e = e.slice(n)), n < i && g(e));
                }
                c.push(t);
            }
            return d(c);
        }
        var c, m, T, v, b, C, E, k, N, S, D, A, j, $, L, O, H, q, I, R = "sizzle" + 1 * new Date(), P = n.document, M = 0, F = 0, _ = e(), W = e(), B = e(), z = function(e, t) {
            return e === t && (D = !0), 0;
        }, U = 1 << 31, X = {}.hasOwnProperty, V = [], Q = V.pop, Y = V.push, G = V.push, J = V.slice, K = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ne = te.replace("w", "w#"), ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ee + "*\\]", re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", oe = new RegExp(ee + "+", "g"), se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), ae = new RegExp("^" + ee + "*," + ee + "*"), le = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ce = new RegExp(re), fe = new RegExp("^" + ne + "$"), de = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + Z + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        }, pe = /^(?:input|select|textarea|button)$/i, he = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, ye = /'|\\/g, be = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), xe = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        }, we = function() {
            A();
        };
        try {
            G.apply(V = J.call(P.childNodes), P.childNodes), V[P.childNodes.length].nodeType;
        } catch (e) {
            G = {
                apply: V.length ? function(e, t) {
                    Y.apply(e, J.call(t));
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        for (c in m = x.support = {}, b = x.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, A = x.setDocument = function(e) {
            var t, n, l = e ? e.ownerDocument || e : P;
            return l !== j && 9 === l.nodeType && l.documentElement ? ($ = (j = l).documentElement, 
            (n = l.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), 
            L = !b(l), m.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), m.getElementsByTagName = i(function(e) {
                return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length;
            }), m.getElementsByClassName = ge.test(l.getElementsByClassName), m.getById = i(function(e) {
                return $.appendChild(e).id = R, !l.getElementsByName || !l.getElementsByName(R).length;
            }), m.getById ? (T.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && L) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [ n ] : [];
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var n = e.replace(be, xe);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                };
            }), T.find.TAG = m.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : m.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[r++]; ) 1 === n.nodeType && i.push(n);
                    return i;
                }
                return o;
            }, T.find.CLASS = m.getElementsByClassName && function(e, t) {
                return L ? t.getElementsByClassName(e) : void 0;
            }, H = [], O = [], (m.qsa = ge.test(l.querySelectorAll)) && (i(function(e) {
                $.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ee + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || O.push("\\[" + ee + "*(?:value|" + Z + ")"), 
                e.querySelectorAll("[id~=" + R + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), 
                e.querySelectorAll("a#" + R + "+*").length || O.push(".#.+[+~]");
            }), i(function(e) {
                var t = l.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ee + "*[*^$|!~]?="), 
                e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                O.push(",.*:");
            })), (m.matchesSelector = ge.test(q = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && i(function(e) {
                m.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), H.push("!=", re);
            }), O = O.length && new RegExp(O.join("|")), H = H.length && new RegExp(H.join("|")), 
            t = ge.test($.compareDocumentPosition), I = t || ge.test($.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, z = t ? function(e, t) {
                if (e === t) return D = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !m.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === P && I(P, e) ? -1 : t === l || t.ownerDocument === P && I(P, t) ? 1 : S ? K(S, e) - K(S, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return D = !0, 0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, s = [ e ], a = [ t ];
                if (!r || !o) return e === l ? -1 : t === l ? 1 : r ? -1 : o ? 1 : S ? K(S, e) - K(S, t) : 0;
                if (r === o) return u(e, t);
                for (n = e; n = n.parentNode; ) s.unshift(n);
                for (n = t; n = n.parentNode; ) a.unshift(n);
                for (;s[i] === a[i]; ) i++;
                return i ? u(s[i], a[i]) : s[i] === P ? -1 : a[i] === P ? 1 : 0;
            }, l) : j;
        }, x.matches = function(e, t) {
            return x(e, null, null, t);
        }, x.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== j && A(e), t = t.replace(ue, "='$1']"), !(!m.matchesSelector || !L || H && H.test(t) || O && O.test(t))) try {
                var n = q.call(e, t);
                if (n || m.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (e) {}
            return 0 < x(t, j, null, [ e ]).length;
        }, x.contains = function(e, t) {
            return (e.ownerDocument || e) !== j && A(e), I(e, t);
        }, x.attr = function(e, t) {
            (e.ownerDocument || e) !== j && A(e);
            var n = T.attrHandle[t.toLowerCase()], i = n && X.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
            return void 0 !== i ? i : m.attributes || !L ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }, x.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, x.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (D = !m.detectDuplicates, S = !m.sortStable && e.slice(0), e.sort(z), D) {
                for (;t = e[r++]; ) t === e[r] && (i = n.push(r));
                for (;i--; ) e.splice(n[i], 1);
            }
            return S = null, e;
        }, v = x.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += v(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (;t = e[i++]; ) n += v(t);
            return n;
        }, (T = x.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || x.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && x.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && _(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(n, i, r) {
                    return function(e) {
                        var t = x.attr(e, n);
                        return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(oe, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"));
                    };
                },
                CHILD: function(p, e, t, h, g) {
                    var m = "nth" !== p.slice(0, 3), v = "last" !== p.slice(-4), y = "of-type" === e;
                    return 1 === h && 0 === g ? function(e) {
                        return !!e.parentNode;
                    } : function(e, t, n) {
                        var i, r, o, s, a, l, u = m !== v ? "nextSibling" : "previousSibling", c = e.parentNode, f = y && e.nodeName.toLowerCase(), d = !n && !y;
                        if (c) {
                            if (m) {
                                for (;u; ) {
                                    for (o = e; o = o[u]; ) if (y ? o.nodeName.toLowerCase() === f : 1 === o.nodeType) return !1;
                                    l = u = "only" === p && !l && "nextSibling";
                                }
                                return !0;
                            }
                            if (l = [ v ? c.firstChild : c.lastChild ], v && d) {
                                for (a = (i = (r = c[R] || (c[R] = {}))[p] || [])[0] === M && i[1], s = i[0] === M && i[2], 
                                o = a && c.childNodes[a]; o = ++a && o && o[u] || (s = a = 0) || l.pop(); ) if (1 === o.nodeType && ++s && o === e) {
                                    r[p] = [ M, a, s ];
                                    break;
                                }
                            } else if (d && (i = (e[R] || (e[R] = {}))[p]) && i[0] === M) s = i[1]; else for (;(o = ++a && o && o[u] || (s = a = 0) || l.pop()) && ((y ? o.nodeName.toLowerCase() !== f : 1 !== o.nodeType) || !++s || (d && ((o[R] || (o[R] = {}))[p] = [ M, s ]), 
                            o !== e)); ) ;
                            return (s -= g) === h || s % h == 0 && 0 <= s / h;
                        }
                    };
                },
                PSEUDO: function(e, o) {
                    var t, s = T.pseudos[e] || T.setFilters[e.toLowerCase()] || x.error("unsupported pseudo: " + e);
                    return s[R] ? s(o) : 1 < s.length ? (t = [ e, e, "", o ], T.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function(e, t) {
                        for (var n, i = s(e, o), r = i.length; r--; ) e[n = K(e, i[r])] = !(t[n] = i[r]);
                    }) : function(e) {
                        return s(e, 0, t);
                    }) : s;
                }
            },
            pseudos: {
                not: l(function(e) {
                    var i = [], r = [], a = E(e.replace(se, "$1"));
                    return a[R] ? l(function(e, t, n, i) {
                        for (var r, o = a(e, null, i, []), s = e.length; s--; ) (r = o[s]) && (e[s] = !(t[s] = r));
                    }) : function(e, t, n) {
                        return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop();
                    };
                }),
                has: l(function(t) {
                    return function(e) {
                        return 0 < x(t, e).length;
                    };
                }),
                contains: l(function(t) {
                    return t = t.replace(be, xe), function(e) {
                        return -1 < (e.textContent || e.innerText || v(e)).indexOf(t);
                    };
                }),
                lang: l(function(n) {
                    return fe.test(n || "") || x.error("unsupported lang: " + n), n = n.replace(be, xe).toLowerCase(), 
                    function(e) {
                        var t;
                        do {
                            if (t = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function(e) {
                    return e === $;
                },
                focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function(e) {
                    return !1 === e.disabled;
                },
                disabled: function(e) {
                    return !0 === e.disabled;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !T.pseudos.empty(e);
                },
                header: function(e) {
                    return he.test(e.nodeName);
                },
                input: function(e) {
                    return pe.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: s(function() {
                    return [ 0 ];
                }),
                last: s(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: s(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: s(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: s(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: s(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
                    return e;
                }),
                gt: s(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                })
            }
        }).pseudos.nth = T.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) T.pseudos[c] = r(c);
        for (c in {
            submit: !0,
            reset: !0
        }) T.pseudos[c] = o(c);
        return a.prototype = T.filters = T.pseudos, T.setFilters = new a(), C = x.tokenize = function(e, t) {
            var n, i, r, o, s, a, l, u = W[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, a = [], l = T.preFilter; s; ) {
                for (o in (!n || (i = ae.exec(s))) && (i && (s = s.slice(i[0].length) || s), a.push(r = [])), 
                n = !1, (i = le.exec(s)) && (n = i.shift(), r.push({
                    value: n,
                    type: i[0].replace(se, " ")
                }), s = s.slice(n.length)), T.filter) !(i = de[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), 
                r.push({
                    value: n,
                    type: o,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break;
            }
            return t ? s.length : s ? x.error(e) : W(e, a).slice(0);
        }, E = x.compile = function(e, t) {
            var n, m, v, y, b, i, r = [], o = [], s = B[e + " "];
            if (!s) {
                for (t || (t = C(e)), n = t.length; n--; ) (s = p(t[n]))[R] ? r.push(s) : o.push(s);
                (s = B(e, (m = o, y = 0 < (v = r).length, b = 0 < m.length, i = function(e, t, n, i, r) {
                    var o, s, a, l = 0, u = "0", c = e && [], f = [], d = N, p = e || b && T.find.TAG("*", r), h = M += null == d ? 1 : Math.random() || .1, g = p.length;
                    for (r && (N = t !== j && t); u !== g && null != (o = p[u]); u++) {
                        if (b && o) {
                            for (s = 0; a = m[s++]; ) if (a(o, t, n)) {
                                i.push(o);
                                break;
                            }
                            r && (M = h);
                        }
                        y && ((o = !a && o) && l--, e && c.push(o));
                    }
                    if (l += u, y && u !== l) {
                        for (s = 0; a = v[s++]; ) a(c, f, t, n);
                        if (e) {
                            if (0 < l) for (;u--; ) c[u] || f[u] || (f[u] = Q.call(i));
                            f = w(f);
                        }
                        G.apply(i, f), r && !e && 0 < f.length && 1 < l + v.length && x.uniqueSort(i);
                    }
                    return r && (M = h, N = d), c;
                }, y ? l(i) : i))).selector = e;
            }
            return s;
        }, k = x.select = function(e, t, n, i) {
            var r, o, s, a, l, u = "function" == typeof e && e, c = !i && C(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && m.getById && 9 === t.nodeType && L && T.relative[o[1].type]) {
                    if (!(t = (T.find.ID(s.matches[0].replace(be, xe), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                for (r = de.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !T.relative[a = s.type]); ) if ((l = T.find[a]) && (i = l(s.matches[0].replace(be, xe), ve.test(o[0].type) && h(t.parentNode) || t))) {
                    if (o.splice(r, 1), !(e = i.length && g(o))) return G.apply(n, i), n;
                    break;
                }
            }
            return (u || E(e, c))(i, t, !L, n, ve.test(e) && h(t.parentNode) || t), n;
        }, m.sortStable = R.split("").sort(z).join("") === R, m.detectDuplicates = !!D, 
        A(), m.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("div"));
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || t("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), m.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || t("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
        }), i(function(e) {
            return null == e.getAttribute("disabled");
        }) || t(Z, function(e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }), x;
    }(h);
    J.find = ne, J.expr = ne.selectors, J.expr[":"] = J.expr.pseudos, J.unique = ne.uniqueSort, 
    J.text = ne.getText, J.isXMLDoc = ne.isXML, J.contains = ne.contains;
    var ie = J.expr.match.needsContext, re = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, oe = /^.[^:#\[\.,]*$/;
    J.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? J.find.matchesSelector(i, e) ? [ i ] : [] : J.find.matches(e, J.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, J.fn.extend({
        find: function(e) {
            var t, n = [], i = this, r = i.length;
            if ("string" != typeof e) return this.pushStack(J(e).filter(function() {
                for (t = 0; t < r; t++) if (J.contains(i[t], this)) return !0;
            }));
            for (t = 0; t < r; t++) J.find(e, i[t], n);
            return (n = this.pushStack(1 < r ? J.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, 
            n;
        },
        filter: function(e) {
            return this.pushStack(t(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(t(this, e || [], !0));
        },
        is: function(e) {
            return !!t(this, "string" == typeof e && ie.test(e) ? J(e) : e || [], !1).length;
        }
    });
    var se, ae = h.document, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (J.fn.init = function(e, t) {
        var n, i;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [ null, e, null ] : le.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || se).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof J ? t[0] : t, J.merge(this, J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ae, !0)), 
                re.test(n[1]) && J.isPlainObject(t)) for (n in t) J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this;
            }
            if ((i = ae.getElementById(n[2])) && i.parentNode) {
                if (i.id !== n[2]) return se.find(e);
                this.length = 1, this[0] = i;
            }
            return this.context = ae, this.selector = e, this;
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : J.isFunction(e) ? void 0 !== se.ready ? se.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector, 
        this.context = e.context), J.makeArray(e, this));
    }).prototype = J.fn, se = J(ae);
    var ue = /^(?:parents|prev(?:Until|All))/, ce = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    J.extend({
        dir: function(e, t, n) {
            for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !J(r).is(n)); ) 1 === r.nodeType && i.push(r), 
            r = r[t];
            return i;
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    }), J.fn.extend({
        has: function(e) {
            var t, n = J(e, this), i = n.length;
            return this.filter(function() {
                for (t = 0; t < i; t++) if (J.contains(this, n[t])) return !0;
            });
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], s = ie.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && J.find.matchesSelector(n, e))) {
                o.push(n);
                break;
            }
            return this.pushStack(1 < o.length ? J.unique(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? J.inArray(this[0], J(e)) : J.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(J.unique(J.merge(this.get(), J(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), J.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return J.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return J.dir(e, "parentNode", n);
        },
        next: function(e) {
            return n(e, "nextSibling");
        },
        prev: function(e) {
            return n(e, "previousSibling");
        },
        nextAll: function(e) {
            return J.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return J.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return J.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return J.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return J.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return J.sibling(e.firstChild);
        },
        contents: function(e) {
            return J.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : J.merge([], e.childNodes);
        }
    }, function(i, r) {
        J.fn[i] = function(e, t) {
            var n = J.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = J.filter(t, n)), 
            1 < this.length && (ce[i] || (n = J.unique(n)), ue.test(i) && (n = n.reverse())), 
            this.pushStack(n);
        };
    });
    var fe, de = /\S+/g, pe = {};
    J.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? pe[r] || (n = pe[e = r] = {}, J.each(e.match(de) || [], function(e, t) {
            n[t] = !0;
        }), n) : J.extend({}, r);
        var i, t, o, s, a, l, u = [], c = !r.once && [], f = function(e) {
            for (t = r.memory && e, o = !0, a = l || 0, l = 0, s = u.length, i = !0; u && a < s; a++) if (!1 === u[a].apply(e[0], e[1]) && r.stopOnFalse) {
                t = !1;
                break;
            }
            i = !1, u && (c ? c.length && f(c.shift()) : t ? u = [] : d.disable());
        }, d = {
            add: function() {
                if (u) {
                    var e = u.length;
                    !function i(e) {
                        J.each(e, function(e, t) {
                            var n = J.type(t);
                            "function" === n ? r.unique && d.has(t) || u.push(t) : t && t.length && "string" !== n && i(t);
                        });
                    }(arguments), i ? s = u.length : t && (l = e, f(t));
                }
                return this;
            },
            remove: function() {
                return u && J.each(arguments, function(e, t) {
                    for (var n; -1 < (n = J.inArray(t, u, n)); ) u.splice(n, 1), i && (n <= s && s--, 
                    n <= a && a--);
                }), this;
            },
            has: function(e) {
                return e ? -1 < J.inArray(e, u) : !(!u || !u.length);
            },
            empty: function() {
                return u = [], s = 0, this;
            },
            disable: function() {
                return u = c = t = void 0, this;
            },
            disabled: function() {
                return !u;
            },
            lock: function() {
                return c = void 0, t || d.disable(), this;
            },
            locked: function() {
                return !c;
            },
            fireWith: function(e, t) {
                return !u || o && !c || (t = [ e, (t = t || []).slice ? t.slice() : t ], i ? c.push(t) : f(t)), 
                this;
            },
            fire: function() {
                return d.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!o;
            }
        };
        return d;
    }, J.extend({
        Deferred: function(e) {
            var o = [ [ "resolve", "done", J.Callbacks("once memory"), "resolved" ], [ "reject", "fail", J.Callbacks("once memory"), "rejected" ], [ "notify", "progress", J.Callbacks("memory") ] ], r = "pending", s = {
                state: function() {
                    return r;
                },
                always: function() {
                    return a.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var r = arguments;
                    return J.Deferred(function(i) {
                        J.each(o, function(e, t) {
                            var n = J.isFunction(r[e]) && r[e];
                            a[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && J.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === s ? i.promise() : this, n ? [ e ] : arguments);
                            });
                        }), r = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? J.extend(e, s) : s;
                }
            }, a = {};
            return s.pipe = s.then, J.each(o, function(e, t) {
                var n = t[2], i = t[3];
                s[t[1]] = n.add, i && n.add(function() {
                    r = i;
                }, o[1 ^ e][2].disable, o[2][2].lock), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? s : this, arguments), this;
                }, a[t[0] + "With"] = n.fireWith;
            }), s.promise(a), e && e.call(a, a), a;
        },
        when: function(e) {
            var r, t, n, i = 0, o = B.call(arguments), s = o.length, a = 1 !== s || e && J.isFunction(e.promise) ? s : 0, l = 1 === a ? e : J.Deferred(), u = function(t, n, i) {
                return function(e) {
                    n[t] = this, i[t] = 1 < arguments.length ? B.call(arguments) : e, i === r ? l.notifyWith(n, i) : --a || l.resolveWith(n, i);
                };
            };
            if (1 < s) for (r = new Array(s), t = new Array(s), n = new Array(s); i < s; i++) o[i] && J.isFunction(o[i].promise) ? o[i].promise().done(u(i, n, o)).fail(l.reject).progress(u(i, t, r)) : --a;
            return a || l.resolveWith(n, o), l.promise();
        }
    }), J.fn.ready = function(e) {
        return J.ready.promise().done(e), this;
    }, J.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? J.readyWait++ : J.ready(!0);
        },
        ready: function(e) {
            if (!0 === e ? !--J.readyWait : !J.isReady) {
                if (!ae.body) return setTimeout(J.ready);
                (J.isReady = !0) !== e && 0 < --J.readyWait || (fe.resolveWith(ae, [ J ]), J.fn.triggerHandler && (J(ae).triggerHandler("ready"), 
                J(ae).off("ready")));
            }
        }
    }), J.ready.promise = function(e) {
        if (!fe) if (fe = J.Deferred(), "complete" === ae.readyState) setTimeout(J.ready); else if (ae.addEventListener) ae.addEventListener("DOMContentLoaded", r, !1), 
        h.addEventListener("load", r, !1); else {
            ae.attachEvent("onreadystatechange", r), h.attachEvent("onload", r);
            var n = !1;
            try {
                n = null == h.frameElement && ae.documentElement;
            } catch (e) {}
            n && n.doScroll && function t() {
                if (!J.isReady) {
                    try {
                        n.doScroll("left");
                    } catch (e) {
                        return setTimeout(t, 50);
                    }
                    i(), J.ready();
                }
            }();
        }
        return fe.promise(e);
    };
    var he, ge = "undefined";
    for (he in J(G)) break;
    G.ownLast = "0" !== he, G.inlineBlockNeedsLayout = !1, J(function() {
        var e, t, n, i;
        (n = ae.getElementsByTagName("body")[0]) && n.style && (t = ae.createElement("div"), 
        (i = ae.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
        n.appendChild(i).appendChild(t), typeof t.style.zoom !== ge && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", 
        G.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i));
    }), function() {
        var e = ae.createElement("div");
        if (null == G.deleteExpando) {
            G.deleteExpando = !0;
            try {
                delete e.test;
            } catch (e) {
                G.deleteExpando = !1;
            }
        }
        e = null;
    }(), J.acceptData = function(e) {
        var t = J.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t);
    };
    var me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ve = /([A-Z])/g;
    J.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? J.cache[e[J.expando]] : e[J.expando]) && !u(e);
        },
        data: function(e, t, n) {
            return o(e, t, n);
        },
        removeData: function(e, t) {
            return s(e, t);
        },
        _data: function(e, t, n) {
            return o(e, t, n, !0);
        },
        _removeData: function(e, t) {
            return s(e, t, !0);
        }
    }), J.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = J.data(o), 1 === o.nodeType && !J._data(o, "parsedAttrs"))) {
                    for (n = s.length; n--; ) s[n] && (0 === (i = s[n].name).indexOf("data-") && l(o, i = J.camelCase(i.slice(5)), r[i]));
                    J._data(o, "parsedAttrs", !0);
                }
                return r;
            }
            return "object" == typeof e ? this.each(function() {
                J.data(this, e);
            }) : 1 < arguments.length ? this.each(function() {
                J.data(this, e, t);
            }) : o ? l(o, e, J.data(o, e)) : void 0;
        },
        removeData: function(e) {
            return this.each(function() {
                J.removeData(this, e);
            });
        }
    }), J.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = J._data(e, t), n && (!i || J.isArray(n) ? i = J._data(e, t, J.makeArray(n)) : i.push(n)), 
            i || []) : void 0;
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = J.queue(e, t), i = n.length, r = n.shift(), o = J._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, r.call(e, function() {
                J.dequeue(e, t);
            }, o)), !i && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return J._data(e, n) || J._data(e, n, {
                empty: J.Callbacks("once memory").add(function() {
                    J._removeData(e, t + "queue"), J._removeData(e, n);
                })
            });
        }
    }), J.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? J.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = J.queue(this, t, n);
                J._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && J.dequeue(this, t);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                J.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, i = 1, r = J.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [ o ]);
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--; ) (n = J._data(o[s], e + "queueHooks")) && n.empty && (i++, 
            n.empty.add(a));
            return a(), r.promise(t);
        }
    });
    var ye = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, be = [ "Top", "Right", "Bottom", "Left" ], xe = function(e, t) {
        return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e);
    }, we = J.access = function(e, t, n, i, r, o, s) {
        var a = 0, l = e.length, u = null == n;
        if ("object" === J.type(n)) for (a in r = !0, n) J.access(e, t, a, n[a], !0, o, s); else if (void 0 !== i && (r = !0, 
        J.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
            return u.call(J(e), n);
        })), t)) for (;a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    }, Te = /^(?:checkbox|radio)$/i;
    !function() {
        var e = ae.createElement("input"), t = ae.createElement("div"), n = ae.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        G.leadingWhitespace = 3 === t.firstChild.nodeType, G.tbody = !t.getElementsByTagName("tbody").length, 
        G.htmlSerialize = !!t.getElementsByTagName("link").length, G.html5Clone = "<:nav></:nav>" !== ae.createElement("nav").cloneNode(!0).outerHTML, 
        e.type = "checkbox", e.checked = !0, n.appendChild(e), G.appendChecked = e.checked, 
        t.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, 
        n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", 
        G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, G.noCloneEvent = !0, 
        t.attachEvent && (t.attachEvent("onclick", function() {
            G.noCloneEvent = !1;
        }), t.cloneNode(!0).click()), null == G.deleteExpando) {
            G.deleteExpando = !0;
            try {
                delete t.test;
            } catch (e) {
                G.deleteExpando = !1;
            }
        }
    }(), function() {
        var e, t, n = ae.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) t = "on" + e, (G[e + "Bubbles"] = t in h) || (n.setAttribute(t, "t"), G[e + "Bubbles"] = !1 === n.attributes[t].expando);
        n = null;
    }();
    var Ce = /^(?:input|select|textarea)$/i, Ee = /^key/, ke = /^(?:mouse|pointer|contextmenu)|click/, Ne = /^(?:focusinfocus|focusoutblur)$/, Se = /^([^.]*)(?:\.(.+)|)$/;
    J.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, u, c, f, d, p, h, g, m = J._data(e);
            if (m) {
                for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = J.guid++), 
                (s = m.events) || (s = m.events = {}), (c = m.handle) || ((c = m.handle = function(e) {
                    return typeof J === ge || e && J.event.triggered === e.type ? void 0 : J.event.dispatch.apply(c.elem, arguments);
                }).elem = e), a = (t = (t || "").match(de) || [ "" ]).length; a--; ) p = g = (o = Se.exec(t[a]) || [])[1], 
                h = (o[2] || "").split(".").sort(), p && (u = J.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, 
                u = J.event.special[p] || {}, f = J.extend({
                    type: p,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && J.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, l), (d = s[p]) || ((d = s[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), 
                u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, f) : d.push(f), 
                J.event.global[p] = !0);
                e = null;
            }
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, f, d, p, h, g, m = J.hasData(e) && J._data(e);
            if (m && (c = m.events)) {
                for (u = (t = (t || "").match(de) || [ "" ]).length; u--; ) if (p = g = (a = Se.exec(t[u]) || [])[1], 
                h = (a[2] || "").split(".").sort(), p) {
                    for (f = J.event.special[p] || {}, d = c[p = (i ? f.delegateType : f.bindType) || p] || [], 
                    a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--; ) s = d[o], 
                    !r && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(o, 1), 
                    s.selector && d.delegateCount--, f.remove && f.remove.call(e, s));
                    l && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || J.removeEvent(e, p, m.handle), 
                    delete c[p]);
                } else for (p in c) J.event.remove(e, p + t[u], n, i, !0);
                J.isEmptyObject(c) && (delete m.handle, J._removeData(e, "events"));
            }
        },
        trigger: function(e, t, n, i) {
            var r, o, s, a, l, u, c, f = [ n || ae ], d = Y.call(e, "type") ? e.type : e, p = Y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = u = n = n || ae, 3 !== n.nodeType && 8 !== n.nodeType && !Ne.test(d + J.event.triggered) && (0 <= d.indexOf(".") && (d = (p = d.split(".")).shift(), 
            p.sort()), o = d.indexOf(":") < 0 && "on" + d, (e = e[J.expando] ? e : new J.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3, 
            e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = n), t = null == t ? [ e ] : J.makeArray(t, [ e ]), 
            l = J.event.special[d] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!i && !l.noBubble && !J.isWindow(n)) {
                    for (a = l.delegateType || d, Ne.test(a + d) || (s = s.parentNode); s; s = s.parentNode) f.push(s), 
                    u = s;
                    u === (n.ownerDocument || ae) && f.push(u.defaultView || u.parentWindow || h);
                }
                for (c = 0; (s = f[c++]) && !e.isPropagationStopped(); ) e.type = 1 < c ? a : l.bindType || d, 
                (r = (J._data(s, "events") || {})[e.type] && J._data(s, "handle")) && r.apply(s, t), 
                (r = o && s[o]) && r.apply && J.acceptData(s) && (e.result = r.apply(s, t), !1 === e.result && e.preventDefault());
                if (e.type = d, !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(f.pop(), t)) && J.acceptData(n) && o && n[d] && !J.isWindow(n)) {
                    (u = n[o]) && (n[o] = null), J.event.triggered = d;
                    try {
                        n[d]();
                    } catch (e) {}
                    J.event.triggered = void 0, u && (n[o] = u);
                }
                return e.result;
            }
        },
        dispatch: function(e) {
            e = J.event.fix(e);
            var t, n, i, r, o, s = [], a = B.call(arguments), l = (J._data(this, "events") || {})[e.type] || [], u = J.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (s = J.event.handlers.call(this, e, l), t = 0; (r = s[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = r.elem, 
                o = 0; (i = r.handlers[o++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, 
                e.data = i.data, void 0 !== (n = ((J.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)) && !1 === (e.result = n) && (e.preventDefault(), 
                e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s = [], a = t.delegateCount, l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type)) for (;l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                for (r = [], o = 0; o < a; o++) void 0 === r[n = (i = t[o]).selector + " "] && (r[n] = i.needsContext ? 0 <= J(n, this).index(l) : J.find(n, this, null, [ l ]).length), 
                r[n] && r.push(i);
                r.length && s.push({
                    elem: l,
                    handlers: r
                });
            }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s;
        },
        fix: function(e) {
            if (e[J.expando]) return e;
            var t, n, i, r = e.type, o = e, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = ke.test(r) ? this.mouseHooks : Ee.test(r) ? this.keyHooks : {}), 
            i = s.props ? this.props.concat(s.props) : this.props, e = new J.Event(o), t = i.length; t--; ) e[n = i[t]] = o[n];
            return e.target || (e.target = o.srcElement || ae), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
            e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), 
                e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button, s = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = (i = e.target.ownerDocument || ae).documentElement, 
                n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), 
                e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), 
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), 
                e;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== d() && this.focus) try {
                        return this.focus(), !1;
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === d() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return J.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(e) {
                    return J.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = J.extend(new J.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? J.event.trigger(r, null, t) : J.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault();
        }
    }, J.removeEvent = ae.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === ge && (e[i] = null), e.detachEvent(i, n));
    }, J.Event = function(e, t) {
        return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? c : f) : this.type = e, 
        t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void (this[J.expando] = !0)) : new J.Event(e, t);
    }, J.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = c, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = c, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        J.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget, i = e.handleObj;
                return (!n || n !== this && !J.contains(this, n)) && (e.type = i.origType, t = i.handler.apply(this, arguments), 
                e.type = r), t;
            }
        };
    }), G.submitBubbles || (J.event.special.submit = {
        setup: function() {
            return !J.nodeName(this, "form") && void J.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target, n = J.nodeName(t, "input") || J.nodeName(t, "button") ? t.form : void 0;
                n && !J._data(n, "submitBubbles") && (J.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                }), J._data(n, "submitBubbles", !0));
            });
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && J.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function() {
            return !J.nodeName(this, "form") && void J.event.remove(this, "._submit");
        }
    }), G.changeBubbles || (J.event.special.change = {
        setup: function() {
            return Ce.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (J.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
            }), J.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), J.event.simulate("change", this, e, !0);
            })), !1) : void J.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ce.test(t.nodeName) && !J._data(t, "changeBubbles") && (J.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || J.event.simulate("change", this.parentNode, e, !0);
                }), J._data(t, "changeBubbles", !0));
            });
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0;
        },
        teardown: function() {
            return J.event.remove(this, "._change"), !Ce.test(this.nodeName);
        }
    }), G.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var r = function(e) {
            J.event.simulate(i, e.target, J.event.fix(e), !0);
        };
        J.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this, t = J._data(e, i);
                t || e.addEventListener(n, r, !0), J._data(e, i, (t || 0) + 1);
            },
            teardown: function() {
                var e = this.ownerDocument || this, t = J._data(e, i) - 1;
                t ? J._data(e, i, t) : (e.removeEventListener(n, r, !0), J._removeData(e, i));
            }
        };
    }), J.fn.extend({
        on: function(e, t, n, i, r) {
            var o, s;
            if ("object" == typeof e) {
                for (o in "string" != typeof t && (n = n || t, t = void 0), e) this.on(o, t, n, e[o], r);
                return this;
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, 
            n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = f; else if (!i) return this;
            return 1 === r && (s = i, (i = function(e) {
                return J().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = J.guid++)), this.each(function() {
                J.event.add(this, e, i, n, t);
            });
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1);
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, J(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this;
            }
            return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = f), 
            this.each(function() {
                J.event.remove(this, e, n, t);
            });
        },
        trigger: function(e, t) {
            return this.each(function() {
                J.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? J.event.trigger(e, t, n, !0) : void 0;
        }
    });
    var De = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ae = / jQuery\d+="(?:null|\d+)"/g, je = new RegExp("<(?:" + De + ")[\\s/>]", "i"), $e = /^\s+/, Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Oe = /<([\w:]+)/, He = /<tbody/i, qe = /<|&#?\w+;/, Ie = /<(?:script|style|link)/i, Re = /checked\s*(?:[^=]|=\s*.checked.)/i, Pe = /^$|\/(?:java|ecma)script/i, Me = /^true\/(.*)/, Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, _e = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: G.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, We = g(ae).appendChild(ae.createElement("div"));
    _e.optgroup = _e.option, _e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead, 
    _e.th = _e.td, J.extend({
        clone: function(e, t, n) {
            var i, r, o, s, a, l = J.contains(e.ownerDocument, e);
            if (G.html5Clone || J.isXMLDoc(e) || !je.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (We.innerHTML = e.outerHTML, 
            We.removeChild(o = We.firstChild)), !(G.noCloneEvent && G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e))) for (i = m(o), 
            a = m(e), s = 0; null != (r = a[s]); ++s) i[s] && T(r, i[s]);
            if (t) if (n) for (a = a || m(e), i = i || m(o), s = 0; null != (r = a[s]); s++) w(r, i[s]); else w(e, o);
            return 0 < (i = m(o, "script")).length && x(i, !l && m(e, "script")), i = a = r = null, 
            o;
        },
        buildFragment: function(e, t, n, i) {
            for (var r, o, s, a, l, u, c, f = e.length, d = g(t), p = [], h = 0; h < f; h++) if ((o = e[h]) || 0 === o) if ("object" === J.type(o)) J.merge(p, o.nodeType ? [ o ] : o); else if (qe.test(o)) {
                for (a = a || d.appendChild(t.createElement("div")), l = (Oe.exec(o) || [ "", "" ])[1].toLowerCase(), 
                c = _e[l] || _e._default, a.innerHTML = c[1] + o.replace(Le, "<$1></$2>") + c[2], 
                r = c[0]; r--; ) a = a.lastChild;
                if (!G.leadingWhitespace && $e.test(o) && p.push(t.createTextNode($e.exec(o)[0])), 
                !G.tbody) for (r = (o = "table" !== l || He.test(o) ? "<table>" !== c[1] || He.test(o) ? 0 : a : a.firstChild) && o.childNodes.length; r--; ) J.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (J.merge(p, a.childNodes), a.textContent = ""; a.firstChild; ) a.removeChild(a.firstChild);
                a = d.lastChild;
            } else p.push(t.createTextNode(o));
            for (a && d.removeChild(a), G.appendChecked || J.grep(m(p, "input"), v), h = 0; o = p[h++]; ) if ((!i || -1 === J.inArray(o, i)) && (s = J.contains(o.ownerDocument, o), 
            a = m(d.appendChild(o), "script"), s && x(a), n)) for (r = 0; o = a[r++]; ) Pe.test(o.type || "") && n.push(o);
            return a = null, d;
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, s = 0, a = J.expando, l = J.cache, u = G.deleteExpando, c = J.event.special; null != (n = e[s]); s++) if ((t || J.acceptData(n)) && (o = (r = n[a]) && l[r])) {
                if (o.events) for (i in o.events) c[i] ? J.event.remove(n, i) : J.removeEvent(n, i, o.handle);
                l[r] && (delete l[r], u ? delete n[a] : typeof n.removeAttribute !== ge ? n.removeAttribute(a) : n[a] = null, 
                W.push(r));
            }
        }
    }), J.fn.extend({
        text: function(e) {
            return we(this, function(e) {
                return void 0 === e ? J.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ae).createTextNode(e));
            }, null, e, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || p(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        remove: function(e, t) {
            for (var n, i = e ? J.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || J.cleanData(m(n)), 
            n.parentNode && (t && J.contains(n.ownerDocument, n) && x(m(n, "script")), n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && J.cleanData(m(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
                e.options && J.nodeName(e, "select") && (e.options.length = 0);
            }
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return J.clone(this, e, t);
            });
        },
        html: function(e) {
            return we(this, function(e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ae, "") : void 0;
                if (!("string" != typeof e || Ie.test(e) || !G.htmlSerialize && je.test(e) || !G.leadingWhitespace && $e.test(e) || _e[(Oe.exec(e) || [ "", "" ])[1].toLowerCase()])) {
                    e = e.replace(Le, "<$1></$2>");
                    try {
                        for (;n < i; n++) 1 === (t = this[n] || {}).nodeType && (J.cleanData(m(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, J.cleanData(m(this)), t && t.replaceChild(e, this);
            }), t && (t.length || t.nodeType) ? this : this.remove();
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(n, i) {
            n = z.apply([], n);
            var e, t, r, o, s, a, l = 0, u = this.length, c = this, f = u - 1, d = n[0], p = J.isFunction(d);
            if (p || 1 < u && "string" == typeof d && !G.checkClone && Re.test(d)) return this.each(function(e) {
                var t = c.eq(e);
                p && (n[0] = d.call(this, e, t.html())), t.domManip(n, i);
            });
            if (u && (e = (a = J.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 
            1 === a.childNodes.length && (a = e), e)) {
                for (r = (o = J.map(m(a, "script"), y)).length; l < u; l++) t = a, l !== f && (t = J.clone(t, !0, !0), 
                r && J.merge(o, m(t, "script"))), i.call(this[l], t, l);
                if (r) for (s = o[o.length - 1].ownerDocument, J.map(o, b), l = 0; l < r; l++) t = o[l], 
                Pe.test(t.type || "") && !J._data(t, "globalEval") && J.contains(s, t) && (t.src ? J._evalUrl && J._evalUrl(t.src) : J.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Fe, "")));
                a = e = null;
            }
            return this;
        }
    }), J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        J.fn[e] = function(e) {
            for (var t, n = 0, i = [], r = J(e), o = r.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0), 
            J(r[n])[s](t), U.apply(i, t.get());
            return this.pushStack(i);
        };
    });
    var Be, ze, Ue = {};
    G.shrinkWrapBlocks = function() {
        return null != ze ? ze : (ze = !1, (t = ae.getElementsByTagName("body")[0]) && t.style ? (e = ae.createElement("div"), 
        (n = ae.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
        t.appendChild(n).appendChild(e), typeof e.style.zoom !== ge && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", 
        e.appendChild(ae.createElement("div")).style.width = "5px", ze = 3 !== e.offsetWidth), 
        t.removeChild(n), ze) : void 0);
        var e, t, n;
    };
    var Xe, Ve, Qe = /^margin/, Ye = new RegExp("^(" + ye + ")(?!px)[a-z%]+$", "i"), Ge = /^(top|right|bottom|left)$/;
    h.getComputedStyle ? (Xe = function(e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : h.getComputedStyle(e, null);
    }, Ve = function(e, t, n) {
        var i, r, o, s, a = e.style;
        return s = (n = n || Xe(e)) ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== s || J.contains(e.ownerDocument, e) || (s = J.style(e, t)), 
        Ye.test(s) && Qe.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, 
        s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 === s ? s : s + "";
    }) : ae.documentElement.currentStyle && (Xe = function(e) {
        return e.currentStyle;
    }, Ve = function(e, t, n) {
        var i, r, o, s, a = e.style;
        return null == (s = (n = n || Xe(e)) ? n[t] : void 0) && a && a[t] && (s = a[t]), 
        Ye.test(s) && !Ge.test(t) && (i = a.left, (o = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), 
        a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), 
        void 0 === s ? s : s + "" || "auto";
    }), function() {
        function e() {
            var e, t, n, i;
            (t = ae.getElementsByTagName("body")[0]) && t.style && (e = ae.createElement("div"), 
            (n = ae.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
            t.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
            r = o = !1, a = !0, h.getComputedStyle && (r = "1%" !== (h.getComputedStyle(e, null) || {}).top, 
            o = "4px" === (h.getComputedStyle(e, null) || {
                width: "4px"
            }).width, (i = e.appendChild(ae.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
            i.style.marginRight = i.style.width = "0", e.style.width = "1px", a = !parseFloat((h.getComputedStyle(i, null) || {}).marginRight), 
            e.removeChild(i)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            (i = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", 
            (s = 0 === i[0].offsetHeight) && (i[0].style.display = "", i[1].style.display = "none", 
            s = 0 === i[0].offsetHeight), t.removeChild(n));
        }
        var t, n, i, r, o, s, a;
        (t = ae.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        (n = (i = t.getElementsByTagName("a")[0]) && i.style) && (n.cssText = "float:left;opacity:.5", 
        G.opacity = "0.5" === n.opacity, G.cssFloat = !!n.cssFloat, t.style.backgroundClip = "content-box", 
        t.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === t.style.backgroundClip, 
        G.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, 
        J.extend(G, {
            reliableHiddenOffsets: function() {
                return null == s && e(), s;
            },
            boxSizingReliable: function() {
                return null == o && e(), o;
            },
            pixelPosition: function() {
                return null == r && e(), r;
            },
            reliableMarginRight: function() {
                return null == a && e(), a;
            }
        }));
    }(), J.swap = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
        return r;
    };
    var Je = /alpha\([^)]*\)/i, Ke = /opacity\s*=\s*([^)]*)/, Ze = /^(none|table(?!-c[ea]).+)/, et = new RegExp("^(" + ye + ")(.*)$", "i"), tt = new RegExp("^([+-])=(" + ye + ")", "i"), nt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, it = {
        letterSpacing: "0",
        fontWeight: "400"
    }, rt = [ "Webkit", "O", "Moz", "ms" ];
    J.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ve(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: G.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = J.camelCase(t), l = e.style;
                if (t = J.cssProps[a] || (J.cssProps[a] = N(l, a)), s = J.cssHooks[t] || J.cssHooks[a], 
                void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t];
                if ("string" === (o = typeof n) && (r = tt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(J.css(e, t)), 
                o = "number"), null != n && n == n && ("number" !== o || J.cssNumber[a] || (n += "px"), 
                G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
                !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try {
                    l[t] = n;
                } catch (e) {}
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = J.camelCase(t);
            return t = J.cssProps[a] || (J.cssProps[a] = N(e.style, a)), (s = J.cssHooks[t] || J.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), 
            void 0 === o && (o = Ve(e, t, i)), "normal" === o && t in it && (o = it[t]), "" === n || n ? (r = parseFloat(o), 
            !0 === n || J.isNumeric(r) ? r || 0 : o) : o;
        }
    }), J.each([ "height", "width" ], function(e, r) {
        J.cssHooks[r] = {
            get: function(e, t, n) {
                return t ? Ze.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, nt, function() {
                    return j(e, r, n);
                }) : j(e, r, n) : void 0;
            },
            set: function(e, t, n) {
                var i = n && Xe(e);
                return D(0, t, n ? A(e, r, n, G.boxSizing && "border-box" === J.css(e, "boxSizing", !1, i), i) : 0);
            }
        };
    }), G.opacity || (J.cssHooks.opacity = {
        get: function(e, t) {
            return Ke.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },
        set: function(e, t) {
            var n = e.style, i = e.currentStyle, r = J.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = i && i.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === J.trim(o.replace(Je, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
            "" === t || i && !i.filter) || (n.filter = Je.test(o) ? o.replace(Je, r) : o + " " + r);
        }
    }), J.cssHooks.marginRight = k(G.reliableMarginRight, function(e, t) {
        return t ? J.swap(e, {
            display: "inline-block"
        }, Ve, [ e, "marginRight" ]) : void 0;
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        J.cssHooks[r + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [ e ]; t < 4; t++) n[r + be[t] + o] = i[t] || i[t - 2] || i[0];
                return n;
            }
        }, Qe.test(r) || (J.cssHooks[r + o].set = D);
    }), J.fn.extend({
        css: function(e, t) {
            return we(this, function(e, t, n) {
                var i, r, o = {}, s = 0;
                if (J.isArray(t)) {
                    for (i = Xe(e), r = t.length; s < r; s++) o[t[s]] = J.css(e, t[s], !1, i);
                    return o;
                }
                return void 0 !== n ? J.style(e, t, n) : J.css(e, t);
            }, e, t, 1 < arguments.length);
        },
        show: function() {
            return S(this, !0);
        },
        hide: function() {
            return S(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                xe(this) ? J(this).show() : J(this).hide();
            });
        }
    }), (J.Tween = $).prototype = {
        constructor: $,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), 
            this.end = i, this.unit = o || (J.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = $.propHooks[this.prop];
            return this.pos = t = this.options.duration ? J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : $.propHooks._default.set(this), this;
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop];
            },
            set: function(e) {
                J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, J.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, J.fx = $.prototype.init, J.fx.step = {};
    var ot, st, at, lt, ut, ct, ft, dt = /^(?:toggle|show|hide)$/, pt = new RegExp("^(?:([+-])=|)(" + ye + ")([a-z%]*)$", "i"), ht = /queueHooks$/, gt = [ function(t, e, n) {
        var i, r, o, s, a, l, u, c = this, f = {}, d = t.style, p = t.nodeType && xe(t), h = J._data(t, "fxshow");
        for (i in n.queue || (null == (a = J._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, 
        l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l();
        }), a.unqueued++, c.always(function() {
            c.always(function() {
                a.unqueued--, J.queue(t, "fx").length || a.empty.fire();
            });
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [ d.overflow, d.overflowX, d.overflowY ], 
        "inline" === ("none" === (u = J.css(t, "display")) ? J._data(t, "olddisplay") || E(t.nodeName) : u) && "none" === J.css(t, "float") && (G.inlineBlockNeedsLayout && "inline" !== E(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), 
        n.overflow && (d.overflow = "hidden", G.shrinkWrapBlocks() || c.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
        })), e) if (r = e[i], dt.exec(r)) {
            if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                if ("show" !== r || !h || void 0 === h[i]) continue;
                p = !0;
            }
            f[i] = h && h[i] || J.style(t, i);
        } else u = void 0;
        if (J.isEmptyObject(f)) "inline" === ("none" === u ? E(t.nodeName) : u) && (d.display = u); else for (i in h ? "hidden" in h && (p = h.hidden) : h = J._data(t, "fxshow", {}), 
        o && (h.hidden = !p), p ? J(t).show() : c.done(function() {
            J(t).hide();
        }), c.done(function() {
            var e;
            for (e in J._removeData(t, "fxshow"), f) J.style(t, e, f[e]);
        }), f) s = H(p ? h[i] : 0, i, c), i in h || (h[i] = s.start, p && (s.end = s.start, 
        s.start = "width" === i || "height" === i ? 1 : 0));
    } ], mt = {
        "*": [ function(e, t) {
            var n = this.createTween(e, t), i = n.cur(), r = pt.exec(t), o = r && r[3] || (J.cssNumber[e] ? "" : "px"), s = (J.cssNumber[e] || "px" !== o && +i) && pt.exec(J.css(n.elem, e)), a = 1, l = 20;
            if (s && s[3] !== o) for (o = o || s[3], r = r || [], s = +i || 1; s /= a = a || ".5", 
            J.style(n.elem, e, s + o), a !== (a = n.cur() / i) && 1 !== a && --l; ) ;
            return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), 
            n;
        } ]
    };
    J.Animation = J.extend(q, {
        tweener: function(e, t) {
            J.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], mt[n] = mt[n] || [], mt[n].unshift(t);
        },
        prefilter: function(e, t) {
            t ? gt.unshift(e) : gt.push(e);
        }
    }), J.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? J.extend({}, e) : {
            complete: n || !n && t || J.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !J.isFunction(t) && t
        };
        return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, 
        (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue);
        }, i;
    }, J.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(xe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i);
        },
        animate: function(t, e, n, i) {
            var r = J.isEmptyObject(t), o = J.speed(e, n, i), s = function() {
                var e = q(this, J.extend({}, t), o);
                (r || J._data(this, "finish")) && e.stop(!0);
            };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
        },
        stop: function(r, e, o) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop, t(o);
            };
            return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), 
            this.each(function() {
                var e = !0, t = null != r && r + "queueHooks", n = J.timers, i = J._data(this);
                if (t) i[t] && i[t].stop && s(i[t]); else for (t in i) i[t] && i[t].stop && ht.test(t) && s(i[t]);
                for (t = n.length; t--; ) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), 
                e = !1, n.splice(t, 1));
                (e || !o) && J.dequeue(this, r);
            });
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = J._data(this), n = t[s + "queue"], i = t[s + "queueHooks"], r = J.timers, o = n ? n.length : 0;
                for (t.finish = !0, J.queue(this, s, []), i && i.stop && i.stop.call(this, !0), 
                e = r.length; e--; ) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), 
                r.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish;
            });
        }
    }), J.each([ "toggle", "show", "hide" ], function(e, i) {
        var r = J.fn[i];
        J.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(O(i, !0), e, t, n);
        };
    }), J.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        J.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n);
        };
    }), J.timers = [], J.fx.tick = function() {
        var e, t = J.timers, n = 0;
        for (ot = J.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || J.fx.stop(), ot = void 0;
    }, J.fx.timer = function(e) {
        J.timers.push(e), e() ? J.fx.start() : J.timers.pop();
    }, J.fx.interval = 13, J.fx.start = function() {
        st || (st = setInterval(J.fx.tick, J.fx.interval));
    }, J.fx.stop = function() {
        clearInterval(st), st = null;
    }, J.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, J.fn.delay = function(i, e) {
        return i = J.fx && J.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = setTimeout(e, i);
            t.stop = function() {
                clearTimeout(n);
            };
        });
    }, (lt = ae.createElement("div")).setAttribute("className", "t"), lt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
    ct = lt.getElementsByTagName("a")[0], ft = (ut = ae.createElement("select")).appendChild(ae.createElement("option")), 
    at = lt.getElementsByTagName("input")[0], ct.style.cssText = "top:1px", G.getSetAttribute = "t" !== lt.className, 
    G.style = /top/.test(ct.getAttribute("style")), G.hrefNormalized = "/a" === ct.getAttribute("href"), 
    G.checkOn = !!at.value, G.optSelected = ft.selected, G.enctype = !!ae.createElement("form").enctype, 
    ut.disabled = !0, G.optDisabled = !ft.disabled, (at = ae.createElement("input")).setAttribute("value", ""), 
    G.input = "" === at.getAttribute("value"), at.value = "t", at.setAttribute("type", "radio"), 
    G.radioValue = "t" === at.value;
    var vt = /\r/g;
    J.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = J.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, J(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : J.isArray(t) && (t = J.map(t, function(e) {
                    return null == e ? "" : e + "";
                })), (i = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t));
            })) : t ? (i = J.valHooks[t.type] || J.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(vt, "") : null == e ? "" : e : void 0;
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = J.find.attr(e, "value");
                    return null != t ? t : J.trim(J.text(e));
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++) if (!(!(n = i[l]).selected && l !== r || (G.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
                        if (t = J(n).val(), o) return t;
                        s.push(t);
                    }
                    return s;
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = J.makeArray(t), s = r.length; s--; ) if (i = r[s], 
                    0 <= J.inArray(J.valHooks.option.get(i), o)) try {
                        i.selected = n = !0;
                    } catch (e) {
                        i.scrollHeight;
                    } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r;
                }
            }
        }
    }), J.each([ "radio", "checkbox" ], function() {
        J.valHooks[this] = {
            set: function(e, t) {
                return J.isArray(t) ? e.checked = 0 <= J.inArray(J(e).val(), t) : void 0;
            }
        }, G.checkOn || (J.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var yt, bt, xt = J.expr.attrHandle, wt = /^(?:checked|selected)$/i, Tt = G.getSetAttribute, Ct = G.input;
    J.fn.extend({
        attr: function(e, t) {
            return we(this, J.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function(e) {
            return this.each(function() {
                J.removeAttr(this, e);
            });
        }
    }), J.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === ge ? J.prop(e, t, n) : (1 === o && J.isXMLDoc(e) || (t = t.toLowerCase(), 
            i = J.attrHooks[t] || (J.expr.match.bool.test(t) ? bt : yt)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = J.find.attr(e, t)) ? void 0 : r : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
            n) : void J.removeAttr(e, t));
        },
        removeAttr: function(e, t) {
            var n, i, r = 0, o = t && t.match(de);
            if (o && 1 === e.nodeType) for (;n = o[r++]; ) i = J.propFix[n] || n, J.expr.match.bool.test(n) ? Ct && Tt || !wt.test(n) ? e[i] = !1 : e[J.camelCase("default-" + n)] = e[i] = !1 : J.attr(e, n, ""), 
            e.removeAttribute(Tt ? n : i);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!G.radioValue && "radio" === t && J.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        }
    }), bt = {
        set: function(e, t, n) {
            return !1 === t ? J.removeAttr(e, n) : Ct && Tt || !wt.test(n) ? e.setAttribute(!Tt && J.propFix[n] || n, n) : e[J.camelCase("default-" + n)] = e[n] = !0, 
            n;
        }
    }, J.each(J.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = xt[t] || J.find.attr;
        xt[t] = Ct && Tt || !wt.test(t) ? function(e, t, n) {
            var i, r;
            return n || (r = xt[t], xt[t] = i, i = null != o(e, t, n) ? t.toLowerCase() : null, 
            xt[t] = r), i;
        } : function(e, t, n) {
            return n ? void 0 : e[J.camelCase("default-" + t)] ? t.toLowerCase() : null;
        };
    }), Ct && Tt || (J.attrHooks.value = {
        set: function(e, t, n) {
            return J.nodeName(e, "input") ? void (e.defaultValue = t) : yt && yt.set(e, t, n);
        }
    }), Tt || (yt = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", 
            "value" === n || t === e.getAttribute(n) ? t : void 0;
        }
    }, xt.id = xt.name = xt.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null;
    }, J.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0;
        },
        set: yt.set
    }, J.attrHooks.contenteditable = {
        set: function(e, t, n) {
            yt.set(e, "" !== t && t, n);
        }
    }, J.each([ "width", "height" ], function(e, n) {
        J.attrHooks[n] = {
            set: function(e, t) {
                return "" === t ? (e.setAttribute(n, "auto"), t) : void 0;
            }
        };
    })), G.style || (J.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0;
        },
        set: function(e, t) {
            return e.style.cssText = t + "";
        }
    });
    var Et = /^(?:input|select|textarea|button|object)$/i, kt = /^(?:a|area)$/i;
    J.fn.extend({
        prop: function(e, t) {
            return we(this, J.prop, e, t, 1 < arguments.length);
        },
        removeProp: function(e) {
            return e = J.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e];
                } catch (e) {}
            });
        }
    }), J.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !J.isXMLDoc(e)) && (t = J.propFix[t] || t, 
            r = J.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = J.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Et.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        }
    }), G.hrefNormalized || J.each([ "href", "src" ], function(e, t) {
        J.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4);
            }
        };
    }), G.optSelected || (J.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    }), J.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        J.propFix[this.toLowerCase()] = this;
    }), G.enctype || (J.propFix.enctype = "encoding");
    var Nt = /[\t\r\n\f]/g;
    J.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a = 0, l = this.length, u = "string" == typeof t && t;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).addClass(t.call(this, e, this.className));
            });
            if (u) for (e = (t || "").match(de) || []; a < l; a++) if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(Nt, " ") : " ")) {
                for (o = 0; r = e[o++]; ) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                s = J.trim(i), n.className !== s && (n.className = s);
            }
            return this;
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a = 0, l = this.length, u = 0 === arguments.length || "string" == typeof t && t;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).removeClass(t.call(this, e, this.className));
            });
            if (u) for (e = (t || "").match(de) || []; a < l; a++) if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(Nt, " ") : "")) {
                for (o = 0; r = e[o++]; ) for (;0 <= i.indexOf(" " + r + " "); ) i = i.replace(" " + r + " ", " ");
                s = t ? J.trim(i) : "", n.className !== s && (n.className = s);
            }
            return this;
        },
        toggleClass: function(r, t) {
            var o = typeof r;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(r) : this.removeClass(r) : this.each(J.isFunction(r) ? function(e) {
                J(this).toggleClass(r.call(this, e, this.className, t), t);
            } : function() {
                if ("string" === o) for (var e, t = 0, n = J(this), i = r.match(de) || []; e = i[t++]; ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else (o === ge || "boolean" === o) && (this.className && J._data(this, "__className__", this.className), 
                this.className = this.className || !1 === r ? "" : J._data(this, "__className__") || "");
            });
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++) if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(Nt, " ").indexOf(t)) return !0;
            return !1;
        }
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        J.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
    }), J.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    });
    var St = J.now(), Dt = /\?/, At = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    J.parseJSON = function(e) {
        if (h.JSON && h.JSON.parse) return h.JSON.parse(e + "");
        var r, o = null, t = J.trim(e + "");
        return t && !J.trim(t.replace(At, function(e, t, n, i) {
            return r && t && (o = 0), 0 === o ? e : (r = n || t, o += !i - !n, "");
        })) ? Function("return " + t)() : J.error("Invalid JSON: " + e);
    }, J.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            h.DOMParser ? t = new DOMParser().parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", 
            t.loadXML(e));
        } catch (e) {
            t = void 0;
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || J.error("Invalid XML: " + e), 
        t;
    };
    var jt, $t, Lt = /#.*$/, Ot = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, qt = /^(?:GET|HEAD)$/, It = /^\/\//, Rt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Pt = {}, Mt = {}, Ft = "*/".concat("*");
    try {
        $t = location.href;
    } catch (e) {
        ($t = ae.createElement("a")).href = "", $t = $t.href;
    }
    jt = Rt.exec($t.toLowerCase()) || [], J.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: $t,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(jt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ft,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? P(P(e, J.ajaxSettings), t) : P(J.ajaxSettings, e);
        },
        ajaxPrefilter: I(Pt),
        ajaxTransport: I(Mt),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var r, o, s, a, l, u = t;
                2 !== w && (w = 2, d && clearTimeout(d), h = void 0, f = i || "", T.readyState = 0 < e ? 4 : 0, 
                r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), 
                    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) for (s in a) if (a[s] && a[s].test(r)) {
                        l.unshift(s);
                        break;
                    }
                    if (l[0] in n) o = l[0]; else {
                        for (s in n) {
                            if (!l[0] || e.converters[s + " " + l[0]]) {
                                o = s;
                                break;
                            }
                            i || (i = s);
                        }
                        o = o || i;
                    }
                    return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0;
                }(g, T, n)), a = function(e, t, n, i) {
                    var r, o, s, a, l, u = {}, c = e.dataTypes.slice();
                    if (c[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
                    !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                        if (!(s = u[l + " " + o] || u["* " + o])) for (r in u) if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                            !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                            break;
                        }
                        if (!0 !== s) if (s && e.throws) t = s(t); else try {
                            t = s(t);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: s ? e : "No conversion from " + l + " to " + o
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: t
                    };
                }(g, a, T, r), r ? (g.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (J.lastModified[c] = l), 
                (l = T.getResponseHeader("etag")) && (J.etag[c] = l)), 204 === e || "HEAD" === g.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state, 
                o = a.data, r = !(s = a.error))) : (s = u, (e || !u) && (u = "error", e < 0 && (e = 0))), 
                T.status = e, T.statusText = (t || u) + "", r ? y.resolveWith(m, [ o, u, T ]) : y.rejectWith(m, [ T, u, s ]), 
                T.statusCode(x), x = void 0, p && v.trigger(r ? "ajaxSuccess" : "ajaxError", [ T, g, r ? o : s ]), 
                b.fireWith(m, [ T, u ]), p && (v.trigger("ajaxComplete", [ T, g ]), --J.active || J.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, r, c, f, d, p, h, o, g = J.ajaxSetup({}, t), m = g.context || g, v = g.context && (m.nodeType || m.jquery) ? J(m) : J.event, y = J.Deferred(), b = J.Callbacks("once memory"), x = g.statusCode || {}, s = {}, a = {}, w = 0, l = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!o) for (o = {}; t = Ht.exec(f); ) o[t[1].toLowerCase()] = t[2];
                        t = o[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? f : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return w || (e = a[n] = a[n] || e, s[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return w || (g.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (w < 2) for (t in e) x[t] = [ x[t], e[t] ]; else T.always(e[T.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || l;
                    return h && h.abort(t), n(0, t), this;
                }
            };
            if (y.promise(T).complete = b.add, T.success = T.done, T.error = T.fail, g.url = ((e || g.url || $t) + "").replace(Lt, "").replace(It, jt[1] + "//"), 
            g.type = t.method || t.type || g.method || g.type, g.dataTypes = J.trim(g.dataType || "*").toLowerCase().match(de) || [ "" ], 
            null == g.crossDomain && (i = Rt.exec(g.url.toLowerCase()), g.crossDomain = !(!i || i[1] === jt[1] && i[2] === jt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (jt[3] || ("http:" === jt[1] ? "80" : "443")))), 
            g.data && g.processData && "string" != typeof g.data && (g.data = J.param(g.data, g.traditional)), 
            R(Pt, g, t, T), 2 === w) return T;
            for (r in (p = J.event && g.global) && 0 == J.active++ && J.event.trigger("ajaxStart"), 
            g.type = g.type.toUpperCase(), g.hasContent = !qt.test(g.type), c = g.url, g.hasContent || (g.data && (c = g.url += (Dt.test(c) ? "&" : "?") + g.data, 
            delete g.data), !1 === g.cache && (g.url = Ot.test(c) ? c.replace(Ot, "$1_=" + St++) : c + (Dt.test(c) ? "&" : "?") + "_=" + St++)), 
            g.ifModified && (J.lastModified[c] && T.setRequestHeader("If-Modified-Since", J.lastModified[c]), 
            J.etag[c] && T.setRequestHeader("If-None-Match", J.etag[c])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && T.setRequestHeader("Content-Type", g.contentType), 
            T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : g.accepts["*"]), 
            g.headers) T.setRequestHeader(r, g.headers[r]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, T, g) || 2 === w)) return T.abort();
            for (r in l = "abort", {
                success: 1,
                error: 1,
                complete: 1
            }) T[r](g[r]);
            if (h = R(Mt, g, t, T)) {
                T.readyState = 1, p && v.trigger("ajaxSend", [ T, g ]), g.async && 0 < g.timeout && (d = setTimeout(function() {
                    T.abort("timeout");
                }, g.timeout));
                try {
                    w = 1, h.send(s, n);
                } catch (e) {
                    if (!(w < 2)) throw e;
                    n(-1, e);
                }
            } else n(-1, "No Transport");
            return T;
        },
        getJSON: function(e, t, n) {
            return J.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return J.get(e, void 0, t, "script");
        }
    }), J.each([ "get", "post" ], function(e, r) {
        J[r] = function(e, t, n, i) {
            return J.isFunction(t) && (i = i || n, n = t, t = void 0), J.ajax({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            });
        };
    }), J._evalUrl = function(e) {
        return J.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        });
    }, J.fn.extend({
        wrapAll: function(t) {
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).wrapAll(t.call(this, e));
            });
            if (this[0]) {
                var e = J(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(n) {
            return this.each(J.isFunction(n) ? function(e) {
                J(this).wrapInner(n.call(this, e));
            } : function() {
                var e = J(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
            });
        },
        wrap: function(t) {
            var n = J.isFunction(t);
            return this.each(function(e) {
                J(this).wrapAll(n ? t.call(this, e) : t);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes);
            }).end();
        }
    }), J.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !G.reliableHiddenOffsets() && "none" === (e.style && e.style.display || J.css(e, "display"));
    }, J.expr.filters.visible = function(e) {
        return !J.expr.filters.hidden(e);
    };
    var _t = /%20/g, Wt = /\[\]$/, Bt = /\r?\n/g, zt = /^(?:submit|button|image|reset|file)$/i, Ut = /^(?:input|select|textarea|keygen)/i;
    J.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            t = J.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function() {
            r(this.name, this.value);
        }); else for (n in e) M(n, e[n], t, r);
        return i.join("&").replace(_t, "+");
    }, J.fn.extend({
        serialize: function() {
            return J.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = J.prop(this, "elements");
                return e ? J.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !J(this).is(":disabled") && Ut.test(this.nodeName) && !zt.test(e) && (this.checked || !Te.test(e));
            }).map(function(e, t) {
                var n = J(this).val();
                return null == n ? null : J.isArray(n) ? J.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Bt, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(Bt, "\r\n")
                };
            }).get();
        }
    }), J.ajaxSettings.xhr = void 0 !== h.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && F() || function() {
            try {
                return new h.ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }();
    } : F;
    var Xt = 0, Vt = {}, Qt = J.ajaxSettings.xhr();
    h.attachEvent && h.attachEvent("onunload", function() {
        for (var e in Vt) Vt[e](void 0, !0);
    }), G.cors = !!Qt && "withCredentials" in Qt, (Qt = G.ajax = !!Qt) && J.ajaxTransport(function(l) {
        var u;
        if (!l.crossDomain || G.cors) return {
            send: function(e, o) {
                var t, s = l.xhr(), a = ++Xt;
                if (s.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields) for (t in l.xhrFields) s[t] = l.xhrFields[t];
                for (t in l.mimeType && s.overrideMimeType && s.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), 
                e) void 0 !== e[t] && s.setRequestHeader(t, e[t] + "");
                s.send(l.hasContent && l.data || null), u = function(e, t) {
                    var n, i, r;
                    if (u && (t || 4 === s.readyState)) if (delete Vt[a], u = void 0, s.onreadystatechange = J.noop, 
                    t) 4 !== s.readyState && s.abort(); else {
                        r = {}, n = s.status, "string" == typeof s.responseText && (r.text = s.responseText);
                        try {
                            i = s.statusText;
                        } catch (e) {
                            i = "";
                        }
                        n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = r.text ? 200 : 404;
                    }
                    r && o(n, i, r, s.getAllResponseHeaders());
                }, l.async ? 4 === s.readyState ? setTimeout(u) : s.onreadystatechange = Vt[a] = u : u();
            },
            abort: function() {
                u && u(void 0, !0);
            }
        };
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return J.globalEval(e), e;
            }
        }
    }), J.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), J.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var i, r = ae.head || J("head")[0] || ae.documentElement;
            return {
                send: function(e, n) {
                    (i = ae.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), 
                    i.src = t.url, i.onload = i.onreadystatechange = function(e, t) {
                        (t || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, 
                        i.parentNode && i.parentNode.removeChild(i), i = null, t || n(200, "success"));
                    }, r.insertBefore(i, r.firstChild);
                },
                abort: function() {
                    i && i.onload(void 0, !0);
                }
            };
        }
    });
    var Yt = [], Gt = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || J.expando + "_" + St++;
            return this[e] = !0, e;
        }
    }), J.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, s = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = J.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        s ? e[s] = e[s].replace(Gt, "$1" + i) : !1 !== e.jsonp && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), 
        e.converters["script json"] = function() {
            return o || J.error(i + " was not called"), o[0];
        }, e.dataTypes[0] = "json", r = h[i], h[i] = function() {
            o = arguments;
        }, n.always(function() {
            h[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Yt.push(i)), o && J.isFunction(r) && r(o[0]), 
            o = r = void 0;
        }), "script") : void 0;
    }), J.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || ae;
        var i = re.exec(e), r = !n && [];
        return i ? [ t.createElement(i[1]) ] : (i = J.buildFragment([ e ], t, r), r && r.length && J(r).remove(), 
        J.merge([], i.childNodes));
    };
    var Jt = J.fn.load;
    J.fn.load = function(e, t, n) {
        if ("string" != typeof e && Jt) return Jt.apply(this, arguments);
        var i, r, o, s = this, a = e.indexOf(" ");
        return 0 <= a && (i = J.trim(e.slice(a, e.length)), e = e.slice(0, a)), J.isFunction(t) ? (n = t, 
        t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && J.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? J("<div>").append(J.parseHTML(e)).find(i) : e);
        }).complete(n && function(e, t) {
            s.each(n, r || [ e.responseText, t, e ]);
        }), this;
    }, J.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        J.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), J.expr.filters.animated = function(t) {
        return J.grep(J.timers, function(e) {
            return t === e.elem;
        }).length;
    };
    var Kt = h.document.documentElement;
    J.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, u = J.css(e, "position"), c = J(e), f = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), o = J.css(e, "top"), 
            l = J.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < J.inArray("auto", [ o, l ]) ? (s = (i = c.position()).top, 
            r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), J.isFunction(t) && (t = t.call(e, n, a)), 
            null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), 
            "using" in t ? t.using.call(e, f) : c.css(f);
        }
    }, J.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                J.offset.setOffset(this, t, e);
            });
            var e, n, i = {
                top: 0,
                left: 0
            }, r = this[0], o = r && r.ownerDocument;
            return o ? (e = o.documentElement, J.contains(e, r) ? (typeof r.getBoundingClientRect !== ge && (i = r.getBoundingClientRect()), 
            n = _(o), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0;
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === J.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), J.nodeName(e[0], "html") || (n = e.offset()), n.top += J.css(e[0], "borderTopWidth", !0), 
                n.left += J.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - J.css(i, "marginTop", !0),
                    left: t.left - n.left - J.css(i, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Kt; e && !J.nodeName(e, "html") && "static" === J.css(e, "position"); ) e = e.offsetParent;
                return e || Kt;
            });
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = /Y/.test(r);
        J.fn[t] = function(e) {
            return we(this, function(e, t, n) {
                var i = _(e);
                return void 0 === n ? i ? r in i ? i[r] : i.document.documentElement[t] : e[t] : void (i ? i.scrollTo(o ? J(i).scrollLeft() : n, o ? n : J(i).scrollTop()) : e[t] = n);
            }, t, e, arguments.length, null);
        };
    }), J.each([ "top", "left" ], function(e, n) {
        J.cssHooks[n] = k(G.pixelPosition, function(e, t) {
            return t ? (t = Ve(e, n), Ye.test(t) ? J(e).position()[n] + "px" : t) : void 0;
        });
    }), J.each({
        Height: "height",
        Width: "width"
    }, function(o, s) {
        J.each({
            padding: "inner" + o,
            content: s,
            "": "outer" + o
        }, function(i, e) {
            J.fn[e] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e), r = i || (!0 === e || !0 === t ? "margin" : "border");
                return we(this, function(e, t, n) {
                    var i;
                    return J.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement, 
                    Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : void 0 === n ? J.css(e, t, r) : J.style(e, t, n, r);
                }, s, n ? e : void 0, n, null);
            };
        });
    }), J.fn.size = function() {
        return this.length;
    }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return J;
    });
    var Zt = h.jQuery, en = h.$;
    return J.noConflict = function(e) {
        return h.$ === J && (h.$ = en), e && h.jQuery === J && (h.jQuery = Zt), J;
    }, typeof e === ge && (h.jQuery = h.$ = J), J;
});