!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function(h, e) {
    function s(e) {
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
        le.addEventListener ? (le.removeEventListener("DOMContentLoaded", r, !1), h.removeEventListener("load", r, !1)) : (le.detachEvent("onreadystatechange", r), 
        h.detachEvent("onload", r));
    }
    function r() {
        (le.addEventListener || "load" === event.type || "complete" === le.readyState) && (i(), 
        J.ready());
    }
    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(ye, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ve.test(n) ? J.parseJSON(n) : n);
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
    function a(e, t, n, i) {
        if (J.acceptData(e)) {
            var r, a, o = J.expando, s = e.nodeType, l = s ? J.cache : e, u = s ? e[o] : e[o] && o;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[o] = q.pop() || J.guid++ : o), 
            l[u] || (l[u] = s ? {} : {
                toJSON: J.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = J.extend(l[u], t) : l[u].data = J.extend(l[u].data, t)), 
            a = l[u], i || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[J.camelCase(t)] = n), 
            "string" == typeof t ? null == (r = a[t]) && (r = a[J.camelCase(t)]) : r = a, r;
        }
    }
    function o(e, t, n) {
        if (J.acceptData(e)) {
            var i, r, a = e.nodeType, o = a ? J.cache : e, s = a ? e[J.expando] : J.expando;
            if (o[s]) {
                if (t && (i = n ? o[s] : o[s].data)) {
                    J.isArray(t) ? t = t.concat(J.map(t, J.camelCase)) : t in i ? t = [ t ] : t = (t = J.camelCase(t)) in i ? [ t ] : t.split(" "), 
                    r = t.length;
                    for (;r--; ) delete i[t[r]];
                    if (n ? !u(i) : !J.isEmptyObject(i)) return;
                }
                (n || (delete o[s].data, u(o[s]))) && (a ? J.cleanData([ e ], !0) : Q.deleteExpando || o != o.window ? delete o[s] : o[s] = null);
            }
        }
    }
    function c() {
        return !0;
    }
    function d() {
        return !1;
    }
    function p() {
        try {
            return le.activeElement;
        } catch (e) {}
    }
    function m(e) {
        var t = Ae.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (;t.length; ) n.createElement(t.pop());
        return n;
    }
    function g(e, t) {
        var n, i, r = 0, a = typeof e.getElementsByTagName !== ge ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== ge ? e.querySelectorAll(t || "*") : void 0;
        if (!a) for (a = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || J.nodeName(i, t) ? a.push(i) : J.merge(a, g(i, t));
        return void 0 === t || t && J.nodeName(e, t) ? J.merge([ e ], a) : a;
    }
    function v(e) {
        Ce.test(e.type) && (e.defaultChecked = e.checked);
    }
    function f(e, t) {
        return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function y(e) {
        return e.type = (null !== J.find.attr(e, "type")) + "/" + e.type, e;
    }
    function b(e) {
        var t = Be.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function w(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) J._data(n, "globalEval", !t || J._data(t[i], "globalEval"));
    }
    function x(e, t) {
        if (1 === t.nodeType && J.hasData(e)) {
            var n, i, r, a = J._data(e), o = J._data(t, a), s = a.events;
            if (s) for (n in delete o.handle, o.events = {}, s) for (i = 0, r = s[n].length; i < r; i++) J.event.add(t, n, s[n][i]);
            o.data && (o.data = J.extend({}, o.data));
        }
    }
    function T(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !Q.noCloneEvent && t[J.expando]) {
                for (i in (r = J._data(t)).events) J.removeEvent(t, i, r.handle);
                t.removeAttribute(J.expando);
            }
            "script" === n && t.text !== e.text ? (y(t).text = e.text, b(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
            Q.html5Clone && e.innerHTML && !J.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ce.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
        }
    }
    function C(e, t) {
        var n, i = J(t.createElement(e)).appendTo(t.body), r = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(i[0])) ? n.display : J.css(i[0], "display");
        return i.detach(), r;
    }
    function S(e) {
        var t = le, n = Ge[e];
        return n || ("none" !== (n = C(e, t)) && n || ((t = ((Fe = (Fe || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Fe[0].contentDocument).document).write(), 
        t.close(), n = C(e, t), Fe.detach()), Ge[e] = n), n;
    }
    function E(t, n) {
        return {
            get: function() {
                var e = t();
                if (null != e) return e ? void delete this.get : (this.get = n).apply(this, arguments);
            }
        };
    }
    function k(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = at.length; r--; ) if ((t = at[r] + n) in e) return t;
        return i;
    }
    function N(e, t) {
        for (var n, i, r, a = [], o = 0, s = e.length; o < s; o++) (i = e[o]).style && (a[o] = J._data(i, "olddisplay"), 
        n = i.style.display, t ? (a[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && xe(i) && (a[o] = J._data(i, "olddisplay", S(i.nodeName)))) : (r = xe(i), 
        (n && "none" !== n || !r) && J._data(i, "olddisplay", r ? n : J.css(i, "display"))));
        for (o = 0; o < s; o++) (i = e[o]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[o] || "" : "none"));
        return e;
    }
    function D(e, t, n) {
        var i = tt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
    }
    function A(e, t, n, i, r) {
        for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; a < 4; a += 2) "margin" === n && (o += J.css(e, n + we[a], !0, r)), 
        i ? ("content" === n && (o -= J.css(e, "padding" + we[a], !0, r)), "margin" !== n && (o -= J.css(e, "border" + we[a] + "Width", !0, r))) : (o += J.css(e, "padding" + we[a], !0, r), 
        "padding" !== n && (o += J.css(e, "border" + we[a] + "Width", !0, r)));
        return o;
    }
    function L(e, t, n) {
        var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, a = Ye(e), o = Q.boxSizing && "border-box" === J.css(e, "boxSizing", !1, a);
        if (r <= 0 || null == r) {
            if (((r = Ve(e, t, a)) < 0 || null == r) && (r = e.style[t]), Qe.test(r)) return r;
            i = o && (Q.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0;
        }
        return r + A(e, t, n || (o ? "border" : "content"), i, a) + "px";
    }
    function M(e, t, n, i, r) {
        return new M.prototype.init(e, t, n, i, r);
    }
    function z() {
        return setTimeout(function() {
            ot = void 0;
        }), ot = J.now();
    }
    function P(e, t) {
        var n, i = {
            height: e
        }, r = 0;
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = we[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function I(e, t, n) {
        for (var i, r = (vt[t] || []).concat(vt["*"]), a = 0, o = r.length; a < o; a++) if (i = r[a].call(n, t, e)) return i;
    }
    function H(a, e, t) {
        var n, o, i = 0, r = gt.length, s = J.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (o) return !1;
            for (var e = ot || z(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
            return s.notifyWith(a, [ u, n, t ]), n < 1 && r ? t : (s.resolveWith(a, [ u ]), 
            !1);
        }, u = s.promise({
            elem: a,
            props: J.extend({}, e),
            opts: J.extend(!0, {
                specialEasing: {}
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: ot || z(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = J.Tween(a, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n), n;
            },
            stop: function(e) {
                var t = 0, n = e ? u.tweens.length : 0;
                if (o) return this;
                for (o = !0; t < n; t++) u.tweens[t].run(1);
                return e ? s.resolveWith(a, [ u, e ]) : s.rejectWith(a, [ u, e ]), this;
            }
        }), c = u.props;
        for (function(e, t) {
            var n, i, r, a, o;
            for (n in e) if (r = t[i = J.camelCase(n)], a = e[n], J.isArray(a) && (r = a[1], 
            a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (o = J.cssHooks[i]) && "expand" in o) for (n in a = o.expand(a), 
            delete e[i], a) n in e || (e[n] = a[n], t[n] = r); else t[i] = r;
        }(c, u.opts.specialEasing); i < r; i++) if (n = gt[i].call(u, a, c, u.opts)) return n;
        return J.map(c, I, u), J.isFunction(u.opts.start) && u.opts.start.call(a, u), J.fx.timer(J.extend(l, {
            elem: a,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
    }
    function $(a) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0, r = e.toLowerCase().match(fe) || [];
            if (J.isFunction(t)) for (;n = r[i++]; ) "+" === n.charAt(0) ? (n = n.slice(1) || "*", 
            (a[n] = a[n] || []).unshift(t)) : (a[n] = a[n] || []).push(t);
        };
    }
    function j(t, r, a, o) {
        function s(e) {
            var i;
            return l[e] = !0, J.each(t[e] || [], function(e, t) {
                var n = t(r, a, o);
                return "string" != typeof n || u || l[n] ? u ? !(i = n) : void 0 : (r.dataTypes.unshift(n), 
                s(n), !1);
            }), i;
        }
        var l = {}, u = t === Bt;
        return s(r.dataTypes[0]) || !l["*"] && s("*");
    }
    function O(e, t) {
        var n, i, r = J.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && J.extend(!0, e, n), e;
    }
    function R(n, e, i, r) {
        var t;
        if (J.isArray(e)) J.each(e, function(e, t) {
            i || Wt.test(n) ? r(n, t) : R(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, r);
        }); else if (i || "object" !== J.type(e)) r(n, e); else for (t in e) R(n + "[" + t + "]", e[t], i, r);
    }
    function B() {
        try {
            return new h.XMLHttpRequest();
        } catch (e) {}
    }
    function _(e) {
        return J.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
    }
    var q = [], W = q.slice, F = q.concat, X = q.push, G = q.indexOf, Y = {}, V = Y.toString, U = Y.hasOwnProperty, Q = {}, K = "1.11.2", J = function(e, t) {
        return new J.fn.init(e, t);
    }, Z = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ee = /^-ms-/, te = /-([\da-z])/gi, ne = function(e, t) {
        return t.toUpperCase();
    };
    J.fn = J.prototype = {
        jquery: K,
        constructor: J,
        selector: "",
        length: 0,
        toArray: function() {
            return W.call(this);
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : W.call(this);
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
            return this.pushStack(W.apply(this, arguments));
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
        push: X,
        sort: q.sort,
        splice: q.splice
    }, J.extend = J.fn.extend = function() {
        var e, t, n, i, r, a, o = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || J.isFunction(o) || (o = {}), 
        s === l && (o = this, s--); s < l; s++) if (null != (r = arguments[s])) for (i in r) e = o[i], 
        o !== (n = r[i]) && (u && n && (J.isPlainObject(n) || (t = J.isArray(n))) ? (t ? (t = !1, 
        a = e && J.isArray(e) ? e : []) : a = e && J.isPlainObject(e) ? e : {}, o[i] = J.extend(u, a, n)) : void 0 !== n && (o[i] = n));
        return o;
    }, J.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
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
                if (e.constructor && !U.call(e, "constructor") && !U.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (e) {
                return !1;
            }
            if (Q.ownLast) for (t in e) return U.call(e, t);
            for (t in e) ;
            return void 0 === t || U.call(e, t);
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Y[V.call(e)] || "object" : typeof e;
        },
        globalEval: function(e) {
            e && J.trim(e) && (h.execScript || function(e) {
                h.eval.call(h, e);
            })(e);
        },
        camelCase: function(e) {
            return e.replace(ee, "ms-").replace(te, ne);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t, n) {
            var i = 0, r = e.length, a = s(e);
            if (n) {
                if (a) for (;i < r && !1 !== t.apply(e[i], n); i++) ; else for (i in e) if (!1 === t.apply(e[i], n)) break;
            } else if (a) for (;i < r && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(Z, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (s(Object(e)) ? J.merge(n, "string" == typeof e ? [ e ] : e) : X.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (G) return G.call(t, e, n);
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
            for (var i = [], r = 0, a = e.length, o = !n; r < a; r++) !t(e[r], r) !== o && i.push(e[r]);
            return i;
        },
        map: function(e, t, n) {
            var i, r = 0, a = e.length, o = [];
            if (s(e)) for (;r < a; r++) null != (i = t(e[r], r, n)) && o.push(i); else for (r in e) null != (i = t(e[r], r, n)) && o.push(i);
            return F.apply([], o);
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), J.isFunction(e) ? (n = W.call(arguments, 2), 
            (i = function() {
                return e.apply(t || this, n.concat(W.call(arguments)));
            }).guid = e.guid = e.guid || J.guid++, i) : void 0;
        },
        now: function() {
            return +new Date();
        },
        support: Q
    }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Y["[object " + t + "]"] = t.toLowerCase();
    });
    var ie = function(n) {
        function w(e, t, n, i) {
            var r, a, o, s, l, u, c, d, p, f;
            if ((t ? t.ownerDocument || t : O) !== L && A(t), n = n || [], s = (t = t || L).nodeType, 
            "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!i && z) {
                if (11 !== s && (r = ge.exec(e))) if (o = r[1]) {
                    if (9 === s) {
                        if (!(a = t.getElementById(o)) || !a.parentNode) return n;
                        if (a.id === o) return n.push(a), n;
                    } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(o)) && $(t, a) && a.id === o) return n.push(a), 
                    n;
                } else {
                    if (r[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                    if ((o = r[3]) && g.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(o)), 
                    n;
                }
                if (g.qsa && (!P || !P.test(e))) {
                    if (d = c = j, p = t, f = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = C(e), (c = t.getAttribute("id")) ? d = c.replace(ye, "\\$&") : t.setAttribute("id", d), 
                        d = "[id='" + d + "'] ", l = u.length; l--; ) u[l] = d + m(u[l]);
                        p = ve.test(e) && h(t.parentNode) || t, f = u.join(",");
                    }
                    if (f) try {
                        return Q.apply(n, p.querySelectorAll(f)), n;
                    } catch (e) {} finally {
                        c || t.removeAttribute("id");
                    }
                }
            }
            return E(e.replace(oe, "$1"), t, n, i);
        }
        function e() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > T.cacheLength && delete e[i.shift()], e[t + " "] = n;
            };
        }
        function l(e) {
            return e[j] = !0, e;
        }
        function i(e) {
            var t = L.createElement("div");
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
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (i) return i;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function r(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function a(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function o(o) {
            return l(function(a) {
                return a = +a, l(function(e, t) {
                    for (var n, i = o([], e.length, a), r = i.length; r--; ) e[n = i[r]] && (e[n] = !(t[n] = e[n]));
                });
            });
        }
        function h(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        function s() {}
        function m(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function d(o, e, t) {
            var s = e.dir, l = t && "parentNode" === s, u = B++;
            return e.first ? function(e, t, n) {
                for (;e = e[s]; ) if (1 === e.nodeType || l) return o(e, t, n);
            } : function(e, t, n) {
                var i, r, a = [ R, u ];
                if (n) {
                    for (;e = e[s]; ) if ((1 === e.nodeType || l) && o(e, t, n)) return !0;
                } else for (;e = e[s]; ) if (1 === e.nodeType || l) {
                    if ((i = (r = e[j] || (e[j] = {}))[s]) && i[0] === R && i[1] === u) return a[2] = i[2];
                    if ((r[s] = a)[2] = o(e, t, n)) return !0;
                }
            };
        }
        function p(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--; ) if (!r[i](e, t, n)) return !1;
                return !0;
            } : r[0];
        }
        function x(e, t, n, i, r) {
            for (var a, o = [], s = 0, l = e.length, u = null != t; s < l; s++) (a = e[s]) && (!n || n(a, i, r)) && (o.push(a), 
            u && t.push(s));
            return o;
        }
        function y(f, h, m, g, v, e) {
            return g && !g[j] && (g = y(g)), v && !v[j] && (v = y(v, e)), l(function(e, t, n, i) {
                var r, a, o, s = [], l = [], u = t.length, c = e || function(e, t, n) {
                    for (var i = 0, r = t.length; i < r; i++) w(e, t[i], n);
                    return n;
                }(h || "*", n.nodeType ? [ n ] : n, []), d = !f || !e && h ? c : x(c, s, f, n, i), p = m ? v || (e ? f : u || g) ? [] : t : d;
                if (m && m(d, p, n, i), g) for (r = x(p, l), g(r, [], n, i), a = r.length; a--; ) (o = r[a]) && (p[l[a]] = !(d[l[a]] = o));
                if (e) {
                    if (v || f) {
                        if (v) {
                            for (r = [], a = p.length; a--; ) (o = p[a]) && r.push(d[a] = o);
                            v(null, p = [], r, i);
                        }
                        for (a = p.length; a--; ) (o = p[a]) && -1 < (r = v ? J(e, o) : s[a]) && (e[r] = !(t[r] = o));
                    }
                } else p = x(p === t ? p.splice(u, p.length) : p), v ? v(null, t, p, i) : Q.apply(t, p);
            });
        }
        function f(e) {
            for (var r, t, n, i = e.length, a = T.relative[e[0].type], o = a || T.relative[" "], s = a ? 1 : 0, l = d(function(e) {
                return e === r;
            }, o, !0), u = d(function(e) {
                return -1 < J(r, e);
            }, o, !0), c = [ function(e, t, n) {
                var i = !a && (n || t !== k) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                return r = null, i;
            } ]; s < i; s++) if (t = T.relative[e[s].type]) c = [ d(p(c), t) ]; else {
                if ((t = T.filter[e[s].type].apply(null, e[s].matches))[j]) {
                    for (n = ++s; n < i && !T.relative[e[n].type]; n++) ;
                    return y(1 < s && p(c), 1 < s && m(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace(oe, "$1"), t, s < n && f(e.slice(s, n)), n < i && f(e = e.slice(n)), n < i && m(e));
                }
                c.push(t);
            }
            return p(c);
        }
        var c, g, T, v, b, C, S, E, k, N, D, A, L, M, z, P, I, H, $, j = "sizzle" + 1 * new Date(), O = n.document, R = 0, B = 0, _ = e(), q = e(), W = e(), F = function(e, t) {
            return e === t && (D = !0), 0;
        }, X = 1 << 31, G = {}.hasOwnProperty, Y = [], V = Y.pop, U = Y.push, Q = Y.push, K = Y.slice, J = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ne = te.replace("w", "w#"), ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ee + "*\\]", re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ee + "+", "g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), se = new RegExp("^" + ee + "*," + ee + "*"), le = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ce = new RegExp(re), de = new RegExp("^" + ne + "$"), pe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + Z + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        }, fe = /^(?:input|select|textarea|button)$/i, he = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, ye = /'|\\/g, be = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), we = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        }, xe = function() {
            A();
        };
        try {
            Q.apply(Y = K.call(O.childNodes), O.childNodes), Y[O.childNodes.length].nodeType;
        } catch (e) {
            Q = {
                apply: Y.length ? function(e, t) {
                    U.apply(e, K.call(t));
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        for (c in g = w.support = {}, b = w.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, A = w.setDocument = function(e) {
            var t, n, l = e ? e.ownerDocument || e : O;
            return l !== L && 9 === l.nodeType && l.documentElement ? (M = (L = l).documentElement, 
            (n = l.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), 
            z = !b(l), g.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), g.getElementsByTagName = i(function(e) {
                return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length;
            }), g.getElementsByClassName = me.test(l.getElementsByClassName), g.getById = i(function(e) {
                return M.appendChild(e).id = j, !l.getElementsByName || !l.getElementsByName(j).length;
            }), g.getById ? (T.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && z) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [ n ] : [];
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var n = e.replace(be, we);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                };
            }), T.find.TAG = g.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : g.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, i = [], r = 0, a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = a[r++]; ) 1 === n.nodeType && i.push(n);
                    return i;
                }
                return a;
            }, T.find.CLASS = g.getElementsByClassName && function(e, t) {
                return z ? t.getElementsByClassName(e) : void 0;
            }, I = [], P = [], (g.qsa = me.test(l.querySelectorAll)) && (i(function(e) {
                M.appendChild(e).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ee + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || P.push("\\[" + ee + "*(?:value|" + Z + ")"), 
                e.querySelectorAll("[id~=" + j + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), 
                e.querySelectorAll("a#" + j + "+*").length || P.push(".#.+[+~]");
            }), i(function(e) {
                var t = l.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ee + "*[*^$|!~]?="), 
                e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                P.push(",.*:");
            })), (g.matchesSelector = me.test(H = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && i(function(e) {
                g.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), I.push("!=", re);
            }), P = P.length && new RegExp(P.join("|")), I = I.length && new RegExp(I.join("|")), 
            t = me.test(M.compareDocumentPosition), $ = t || me.test(M.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, F = t ? function(e, t) {
                if (e === t) return D = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !g.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === O && $(O, e) ? -1 : t === l || t.ownerDocument === O && $(O, t) ? 1 : N ? J(N, e) - J(N, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return D = !0, 0;
                var n, i = 0, r = e.parentNode, a = t.parentNode, o = [ e ], s = [ t ];
                if (!r || !a) return e === l ? -1 : t === l ? 1 : r ? -1 : a ? 1 : N ? J(N, e) - J(N, t) : 0;
                if (r === a) return u(e, t);
                for (n = e; n = n.parentNode; ) o.unshift(n);
                for (n = t; n = n.parentNode; ) s.unshift(n);
                for (;o[i] === s[i]; ) i++;
                return i ? u(o[i], s[i]) : o[i] === O ? -1 : s[i] === O ? 1 : 0;
            }, l) : L;
        }, w.matches = function(e, t) {
            return w(e, null, null, t);
        }, w.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== L && A(e), t = t.replace(ue, "='$1']"), !(!g.matchesSelector || !z || I && I.test(t) || P && P.test(t))) try {
                var n = H.call(e, t);
                if (n || g.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (e) {}
            return 0 < w(t, L, null, [ e ]).length;
        }, w.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && A(e), $(e, t);
        }, w.attr = function(e, t) {
            (e.ownerDocument || e) !== L && A(e);
            var n = T.attrHandle[t.toLowerCase()], i = n && G.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !z) : void 0;
            return void 0 !== i ? i : g.attributes || !z ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }, w.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, w.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (D = !g.detectDuplicates, N = !g.sortStable && e.slice(0), e.sort(F), D) {
                for (;t = e[r++]; ) t === e[r] && (i = n.push(r));
                for (;i--; ) e.splice(n[i], 1);
            }
            return N = null, e;
        }, v = w.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += v(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (;t = e[i++]; ) n += v(t);
            return n;
        }, (T = w.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: pe,
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
                    return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || w.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && w.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, we).toLowerCase();
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
                        var t = w.attr(e, n);
                        return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(ae, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"));
                    };
                },
                CHILD: function(f, e, t, h, m) {
                    var g = "nth" !== f.slice(0, 3), v = "last" !== f.slice(-4), y = "of-type" === e;
                    return 1 === h && 0 === m ? function(e) {
                        return !!e.parentNode;
                    } : function(e, t, n) {
                        var i, r, a, o, s, l, u = g !== v ? "nextSibling" : "previousSibling", c = e.parentNode, d = y && e.nodeName.toLowerCase(), p = !n && !y;
                        if (c) {
                            if (g) {
                                for (;u; ) {
                                    for (a = e; a = a[u]; ) if (y ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                    l = u = "only" === f && !l && "nextSibling";
                                }
                                return !0;
                            }
                            if (l = [ v ? c.firstChild : c.lastChild ], v && p) {
                                for (s = (i = (r = c[j] || (c[j] = {}))[f] || [])[0] === R && i[1], o = i[0] === R && i[2], 
                                a = s && c.childNodes[s]; a = ++s && a && a[u] || (o = s = 0) || l.pop(); ) if (1 === a.nodeType && ++o && a === e) {
                                    r[f] = [ R, s, o ];
                                    break;
                                }
                            } else if (p && (i = (e[j] || (e[j] = {}))[f]) && i[0] === R) o = i[1]; else for (;(a = ++s && a && a[u] || (o = s = 0) || l.pop()) && ((y ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++o || (p && ((a[j] || (a[j] = {}))[f] = [ R, o ]), 
                            a !== e)); ) ;
                            return (o -= m) === h || o % h == 0 && 0 <= o / h;
                        }
                    };
                },
                PSEUDO: function(e, a) {
                    var t, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || w.error("unsupported pseudo: " + e);
                    return o[j] ? o(a) : 1 < o.length ? (t = [ e, e, "", a ], T.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function(e, t) {
                        for (var n, i = o(e, a), r = i.length; r--; ) e[n = J(e, i[r])] = !(t[n] = i[r]);
                    }) : function(e) {
                        return o(e, 0, t);
                    }) : o;
                }
            },
            pseudos: {
                not: l(function(e) {
                    var i = [], r = [], s = S(e.replace(oe, "$1"));
                    return s[j] ? l(function(e, t, n, i) {
                        for (var r, a = s(e, null, i, []), o = e.length; o--; ) (r = a[o]) && (e[o] = !(t[o] = r));
                    }) : function(e, t, n) {
                        return i[0] = e, s(i, null, n, r), i[0] = null, !r.pop();
                    };
                }),
                has: l(function(t) {
                    return function(e) {
                        return 0 < w(t, e).length;
                    };
                }),
                contains: l(function(t) {
                    return t = t.replace(be, we), function(e) {
                        return -1 < (e.textContent || e.innerText || v(e)).indexOf(t);
                    };
                }),
                lang: l(function(n) {
                    return de.test(n || "") || w.error("unsupported lang: " + n), n = n.replace(be, we).toLowerCase(), 
                    function(e) {
                        var t;
                        do {
                            if (t = z ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function(e) {
                    return e === M;
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
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
                    return fe.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: o(function() {
                    return [ 0 ];
                }),
                last: o(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: o(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: o(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: o(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: o(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
                    return e;
                }),
                gt: o(function(e, t, n) {
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
        }) T.pseudos[c] = a(c);
        return s.prototype = T.filters = T.pseudos, T.setFilters = new s(), C = w.tokenize = function(e, t) {
            var n, i, r, a, o, s, l, u = q[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (o = e, s = [], l = T.preFilter; o; ) {
                for (a in (!n || (i = se.exec(o))) && (i && (o = o.slice(i[0].length) || o), s.push(r = [])), 
                n = !1, (i = le.exec(o)) && (n = i.shift(), r.push({
                    value: n,
                    type: i[0].replace(oe, " ")
                }), o = o.slice(n.length)), T.filter) !(i = pe[a].exec(o)) || l[a] && !(i = l[a](i)) || (n = i.shift(), 
                r.push({
                    value: n,
                    type: a,
                    matches: i
                }), o = o.slice(n.length));
                if (!n) break;
            }
            return t ? o.length : o ? w.error(e) : q(e, s).slice(0);
        }, S = w.compile = function(e, t) {
            var n, g, v, y, b, i, r = [], a = [], o = W[e + " "];
            if (!o) {
                for (t || (t = C(e)), n = t.length; n--; ) (o = f(t[n]))[j] ? r.push(o) : a.push(o);
                (o = W(e, (g = a, y = 0 < (v = r).length, b = 0 < g.length, i = function(e, t, n, i, r) {
                    var a, o, s, l = 0, u = "0", c = e && [], d = [], p = k, f = e || b && T.find.TAG("*", r), h = R += null == p ? 1 : Math.random() || .1, m = f.length;
                    for (r && (k = t !== L && t); u !== m && null != (a = f[u]); u++) {
                        if (b && a) {
                            for (o = 0; s = g[o++]; ) if (s(a, t, n)) {
                                i.push(a);
                                break;
                            }
                            r && (R = h);
                        }
                        y && ((a = !s && a) && l--, e && c.push(a));
                    }
                    if (l += u, y && u !== l) {
                        for (o = 0; s = v[o++]; ) s(c, d, t, n);
                        if (e) {
                            if (0 < l) for (;u--; ) c[u] || d[u] || (d[u] = V.call(i));
                            d = x(d);
                        }
                        Q.apply(i, d), r && !e && 0 < d.length && 1 < l + v.length && w.uniqueSort(i);
                    }
                    return r && (R = h, k = p), c;
                }, y ? l(i) : i))).selector = e;
            }
            return o;
        }, E = w.select = function(e, t, n, i) {
            var r, a, o, s, l, u = "function" == typeof e && e, c = !i && C(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (a = c[0] = c[0].slice(0)).length && "ID" === (o = a[0]).type && g.getById && 9 === t.nodeType && z && T.relative[a[1].type]) {
                    if (!(t = (T.find.ID(o.matches[0].replace(be, we), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(a.shift().value.length);
                }
                for (r = pe.needsContext.test(e) ? 0 : a.length; r-- && (o = a[r], !T.relative[s = o.type]); ) if ((l = T.find[s]) && (i = l(o.matches[0].replace(be, we), ve.test(a[0].type) && h(t.parentNode) || t))) {
                    if (a.splice(r, 1), !(e = i.length && m(a))) return Q.apply(n, i), n;
                    break;
                }
            }
            return (u || S(e, c))(i, t, !z, n, ve.test(e) && h(t.parentNode) || t), n;
        }, g.sortStable = j.split("").sort(F).join("") === j, g.detectDuplicates = !!D, 
        A(), g.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"));
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || t("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), g.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || t("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
        }), i(function(e) {
            return null == e.getAttribute("disabled");
        }) || t(Z, function(e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }), w;
    }(h);
    J.find = ie, J.expr = ie.selectors, J.expr[":"] = J.expr.pseudos, J.unique = ie.uniqueSort, 
    J.text = ie.getText, J.isXMLDoc = ie.isXML, J.contains = ie.contains;
    var re = J.expr.match.needsContext, ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, oe = /^.[^:#\[\.,]*$/;
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
            return !!t(this, "string" == typeof e && re.test(e) ? J(e) : e || [], !1).length;
        }
    });
    var se, le = h.document, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (J.fn.init = function(e, t) {
        var n, i;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [ null, e, null ] : ue.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || se).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof J ? t[0] : t, J.merge(this, J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : le, !0)), 
                ae.test(n[1]) && J.isPlainObject(t)) for (n in t) J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this;
            }
            if ((i = le.getElementById(n[2])) && i.parentNode) {
                if (i.id !== n[2]) return se.find(e);
                this.length = 1, this[0] = i;
            }
            return this.context = le, this.selector = e, this;
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : J.isFunction(e) ? void 0 !== se.ready ? se.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector, 
        this.context = e.context), J.makeArray(e, this));
    }).prototype = J.fn, se = J(le);
    var ce = /^(?:parents|prev(?:Until|All))/, de = {
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
            for (var n, i = 0, r = this.length, a = [], o = re.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && J.find.matchesSelector(n, e))) {
                a.push(n);
                break;
            }
            return this.pushStack(1 < a.length ? J.unique(a) : a);
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
            1 < this.length && (de[i] || (n = J.unique(n)), ce.test(i) && (n = n.reverse())), 
            this.pushStack(n);
        };
    });
    var pe, fe = /\S+/g, he = {};
    J.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? he[r] || (n = he[e = r] = {}, J.each(e.match(fe) || [], function(e, t) {
            n[t] = !0;
        }), n) : J.extend({}, r);
        var i, t, a, o, s, l, u = [], c = !r.once && [], d = function(e) {
            for (t = r.memory && e, a = !0, s = l || 0, l = 0, o = u.length, i = !0; u && s < o; s++) if (!1 === u[s].apply(e[0], e[1]) && r.stopOnFalse) {
                t = !1;
                break;
            }
            i = !1, u && (c ? c.length && d(c.shift()) : t ? u = [] : p.disable());
        }, p = {
            add: function() {
                if (u) {
                    var e = u.length;
                    !function i(e) {
                        J.each(e, function(e, t) {
                            var n = J.type(t);
                            "function" === n ? r.unique && p.has(t) || u.push(t) : t && t.length && "string" !== n && i(t);
                        });
                    }(arguments), i ? o = u.length : t && (l = e, d(t));
                }
                return this;
            },
            remove: function() {
                return u && J.each(arguments, function(e, t) {
                    for (var n; -1 < (n = J.inArray(t, u, n)); ) u.splice(n, 1), i && (n <= o && o--, 
                    n <= s && s--);
                }), this;
            },
            has: function(e) {
                return e ? -1 < J.inArray(e, u) : !(!u || !u.length);
            },
            empty: function() {
                return u = [], o = 0, this;
            },
            disable: function() {
                return u = c = t = void 0, this;
            },
            disabled: function() {
                return !u;
            },
            lock: function() {
                return c = void 0, t || p.disable(), this;
            },
            locked: function() {
                return !c;
            },
            fireWith: function(e, t) {
                return !u || a && !c || (t = [ e, (t = t || []).slice ? t.slice() : t ], i ? c.push(t) : d(t)), 
                this;
            },
            fire: function() {
                return p.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!a;
            }
        };
        return p;
    }, J.extend({
        Deferred: function(e) {
            var a = [ [ "resolve", "done", J.Callbacks("once memory"), "resolved" ], [ "reject", "fail", J.Callbacks("once memory"), "rejected" ], [ "notify", "progress", J.Callbacks("memory") ] ], r = "pending", o = {
                state: function() {
                    return r;
                },
                always: function() {
                    return s.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var r = arguments;
                    return J.Deferred(function(i) {
                        J.each(a, function(e, t) {
                            var n = J.isFunction(r[e]) && r[e];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && J.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === o ? i.promise() : this, n ? [ e ] : arguments);
                            });
                        }), r = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? J.extend(e, o) : o;
                }
            }, s = {};
            return o.pipe = o.then, J.each(a, function(e, t) {
                var n = t[2], i = t[3];
                o[t[1]] = n.add, i && n.add(function() {
                    r = i;
                }, a[1 ^ e][2].disable, a[2][2].lock), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? o : this, arguments), this;
                }, s[t[0] + "With"] = n.fireWith;
            }), o.promise(s), e && e.call(s, s), s;
        },
        when: function(e) {
            var r, t, n, i = 0, a = W.call(arguments), o = a.length, s = 1 !== o || e && J.isFunction(e.promise) ? o : 0, l = 1 === s ? e : J.Deferred(), u = function(t, n, i) {
                return function(e) {
                    n[t] = this, i[t] = 1 < arguments.length ? W.call(arguments) : e, i === r ? l.notifyWith(n, i) : --s || l.resolveWith(n, i);
                };
            };
            if (1 < o) for (r = new Array(o), t = new Array(o), n = new Array(o); i < o; i++) a[i] && J.isFunction(a[i].promise) ? a[i].promise().done(u(i, n, a)).fail(l.reject).progress(u(i, t, r)) : --s;
            return s || l.resolveWith(n, a), l.promise();
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
                if (!le.body) return setTimeout(J.ready);
                (J.isReady = !0) !== e && 0 < --J.readyWait || (pe.resolveWith(le, [ J ]), J.fn.triggerHandler && (J(le).triggerHandler("ready"), 
                J(le).off("ready")));
            }
        }
    }), J.ready.promise = function(e) {
        if (!pe) if (pe = J.Deferred(), "complete" === le.readyState) setTimeout(J.ready); else if (le.addEventListener) le.addEventListener("DOMContentLoaded", r, !1), 
        h.addEventListener("load", r, !1); else {
            le.attachEvent("onreadystatechange", r), h.attachEvent("onload", r);
            var n = !1;
            try {
                n = null == h.frameElement && le.documentElement;
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
        return pe.promise(e);
    };
    var me, ge = "undefined";
    for (me in J(Q)) break;
    Q.ownLast = "0" !== me, Q.inlineBlockNeedsLayout = !1, J(function() {
        var e, t, n, i;
        (n = le.getElementsByTagName("body")[0]) && n.style && (t = le.createElement("div"), 
        (i = le.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
        n.appendChild(i).appendChild(t), typeof t.style.zoom !== ge && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", 
        Q.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i));
    }), function() {
        var e = le.createElement("div");
        if (null == Q.deleteExpando) {
            Q.deleteExpando = !0;
            try {
                delete e.test;
            } catch (e) {
                Q.deleteExpando = !1;
            }
        }
        e = null;
    }(), J.acceptData = function(e) {
        var t = J.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t);
    };
    var ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ye = /([A-Z])/g;
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
            return a(e, t, n);
        },
        removeData: function(e, t) {
            return o(e, t);
        },
        _data: function(e, t, n) {
            return a(e, t, n, !0);
        },
        _removeData: function(e, t) {
            return o(e, t, !0);
        }
    }), J.fn.extend({
        data: function(e, t) {
            var n, i, r, a = this[0], o = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (r = J.data(a), 1 === a.nodeType && !J._data(a, "parsedAttrs"))) {
                    for (n = o.length; n--; ) o[n] && (0 === (i = o[n].name).indexOf("data-") && l(a, i = J.camelCase(i.slice(5)), r[i]));
                    J._data(a, "parsedAttrs", !0);
                }
                return r;
            }
            return "object" == typeof e ? this.each(function() {
                J.data(this, e);
            }) : 1 < arguments.length ? this.each(function() {
                J.data(this, e, t);
            }) : a ? l(a, e, J.data(a, e)) : void 0;
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
            var n = J.queue(e, t), i = n.length, r = n.shift(), a = J._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), 
            delete a.stop, r.call(e, function() {
                J.dequeue(e, t);
            }, a)), !i && a && a.empty.fire();
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
            var n, i = 1, r = J.Deferred(), a = this, o = this.length, s = function() {
                --i || r.resolveWith(a, [ a ]);
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--; ) (n = J._data(a[o], e + "queueHooks")) && n.empty && (i++, 
            n.empty.add(s));
            return s(), r.promise(t);
        }
    });
    var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, we = [ "Top", "Right", "Bottom", "Left" ], xe = function(e, t) {
        return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e);
    }, Te = J.access = function(e, t, n, i, r, a, o) {
        var s = 0, l = e.length, u = null == n;
        if ("object" === J.type(n)) for (s in r = !0, n) J.access(e, t, s, n[s], !0, a, o); else if (void 0 !== i && (r = !0, 
        J.isFunction(i) || (o = !0), u && (o ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
            return u.call(J(e), n);
        })), t)) for (;s < l; s++) t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : a;
    }, Ce = /^(?:checkbox|radio)$/i;
    !function() {
        var e = le.createElement("input"), t = le.createElement("div"), n = le.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        Q.leadingWhitespace = 3 === t.firstChild.nodeType, Q.tbody = !t.getElementsByTagName("tbody").length, 
        Q.htmlSerialize = !!t.getElementsByTagName("link").length, Q.html5Clone = "<:nav></:nav>" !== le.createElement("nav").cloneNode(!0).outerHTML, 
        e.type = "checkbox", e.checked = !0, n.appendChild(e), Q.appendChecked = e.checked, 
        t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, 
        n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", 
        Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, Q.noCloneEvent = !0, 
        t.attachEvent && (t.attachEvent("onclick", function() {
            Q.noCloneEvent = !1;
        }), t.cloneNode(!0).click()), null == Q.deleteExpando) {
            Q.deleteExpando = !0;
            try {
                delete t.test;
            } catch (e) {
                Q.deleteExpando = !1;
            }
        }
    }(), function() {
        var e, t, n = le.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) t = "on" + e, (Q[e + "Bubbles"] = t in h) || (n.setAttribute(t, "t"), Q[e + "Bubbles"] = !1 === n.attributes[t].expando);
        n = null;
    }();
    var Se = /^(?:input|select|textarea)$/i, Ee = /^key/, ke = /^(?:mouse|pointer|contextmenu)|click/, Ne = /^(?:focusinfocus|focusoutblur)$/, De = /^([^.]*)(?:\.(.+)|)$/;
    J.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var a, o, s, l, u, c, d, p, f, h, m, g = J._data(e);
            if (g) {
                for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = J.guid++), 
                (o = g.events) || (o = g.events = {}), (c = g.handle) || ((c = g.handle = function(e) {
                    return typeof J === ge || e && J.event.triggered === e.type ? void 0 : J.event.dispatch.apply(c.elem, arguments);
                }).elem = e), s = (t = (t || "").match(fe) || [ "" ]).length; s--; ) f = m = (a = De.exec(t[s]) || [])[1], 
                h = (a[2] || "").split(".").sort(), f && (u = J.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, 
                u = J.event.special[f] || {}, d = J.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && J.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, l), (p = o[f]) || ((p = o[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, c) || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), 
                u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), 
                J.event.global[f] = !0);
                e = null;
            }
        },
        remove: function(e, t, n, i, r) {
            var a, o, s, l, u, c, d, p, f, h, m, g = J.hasData(e) && J._data(e);
            if (g && (c = g.events)) {
                for (u = (t = (t || "").match(fe) || [ "" ]).length; u--; ) if (f = m = (s = De.exec(t[u]) || [])[1], 
                h = (s[2] || "").split(".").sort(), f) {
                    for (d = J.event.special[f] || {}, p = c[f = (i ? d.delegateType : d.bindType) || f] || [], 
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = p.length; a--; ) o = p[a], 
                    !r && m !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (p.splice(a, 1), 
                    o.selector && p.delegateCount--, d.remove && d.remove.call(e, o));
                    l && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || J.removeEvent(e, f, g.handle), 
                    delete c[f]);
                } else for (f in c) J.event.remove(e, f + t[u], n, i, !0);
                J.isEmptyObject(c) && (delete g.handle, J._removeData(e, "events"));
            }
        },
        trigger: function(e, t, n, i) {
            var r, a, o, s, l, u, c, d = [ n || le ], p = U.call(e, "type") ? e.type : e, f = U.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = u = n = n || le, 3 !== n.nodeType && 8 !== n.nodeType && !Ne.test(p + J.event.triggered) && (0 <= p.indexOf(".") && (p = (f = p.split(".")).shift(), 
            f.sort()), a = p.indexOf(":") < 0 && "on" + p, (e = e[J.expando] ? e : new J.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, 
            e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = n), t = null == t ? [ e ] : J.makeArray(t, [ e ]), 
            l = J.event.special[p] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!i && !l.noBubble && !J.isWindow(n)) {
                    for (s = l.delegateType || p, Ne.test(s + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), 
                    u = o;
                    u === (n.ownerDocument || le) && d.push(u.defaultView || u.parentWindow || h);
                }
                for (c = 0; (o = d[c++]) && !e.isPropagationStopped(); ) e.type = 1 < c ? s : l.bindType || p, 
                (r = (J._data(o, "events") || {})[e.type] && J._data(o, "handle")) && r.apply(o, t), 
                (r = a && o[a]) && r.apply && J.acceptData(o) && (e.result = r.apply(o, t), !1 === e.result && e.preventDefault());
                if (e.type = p, !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), t)) && J.acceptData(n) && a && n[p] && !J.isWindow(n)) {
                    (u = n[a]) && (n[a] = null), J.event.triggered = p;
                    try {
                        n[p]();
                    } catch (e) {}
                    J.event.triggered = void 0, u && (n[a] = u);
                }
                return e.result;
            }
        },
        dispatch: function(e) {
            e = J.event.fix(e);
            var t, n, i, r, a, o = [], s = W.call(arguments), l = (J._data(this, "events") || {})[e.type] || [], u = J.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (o = J.event.handlers.call(this, e, l), t = 0; (r = o[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = r.elem, 
                a = 0; (i = r.handlers[a++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, 
                e.data = i.data, void 0 !== (n = ((J.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s)) && !1 === (e.result = n) && (e.preventDefault(), 
                e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, t) {
            var n, i, r, a, o = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type)) for (;l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                for (r = [], a = 0; a < s; a++) void 0 === r[n = (i = t[a]).selector + " "] && (r[n] = i.needsContext ? 0 <= J(n, this).index(l) : J.find(n, this, null, [ l ]).length), 
                r[n] && r.push(i);
                r.length && o.push({
                    elem: l,
                    handlers: r
                });
            }
            return s < t.length && o.push({
                elem: this,
                handlers: t.slice(s)
            }), o;
        },
        fix: function(e) {
            if (e[J.expando]) return e;
            var t, n, i, r = e.type, a = e, o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = ke.test(r) ? this.mouseHooks : Ee.test(r) ? this.keyHooks : {}), 
            i = o.props ? this.props.concat(o.props) : this.props, e = new J.Event(a), t = i.length; t--; ) e[n = i[t]] = a[n];
            return e.target || (e.target = a.srcElement || le), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
            e.metaKey = !!e.metaKey, o.filter ? o.filter(e, a) : e;
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
                var n, i, r, a = t.button, o = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = (i = e.target.ownerDocument || le).documentElement, 
                n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), 
                e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), 
                !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), 
                e;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== p() && this.focus) try {
                        return this.focus(), !1;
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0;
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
    }, J.removeEvent = le.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === ge && (e[i] = null), e.detachEvent(i, n));
    }, J.Event = function(e, t) {
        return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? c : d) : this.type = e, 
        t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void (this[J.expando] = !0)) : new J.Event(e, t);
    }, J.Event.prototype = {
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
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
    }), Q.submitBubbles || (J.event.special.submit = {
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
    }), Q.changeBubbles || (J.event.special.change = {
        setup: function() {
            return Se.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (J.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
            }), J.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), J.event.simulate("change", this, e, !0);
            })), !1) : void J.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Se.test(t.nodeName) && !J._data(t, "changeBubbles") && (J.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || J.event.simulate("change", this.parentNode, e, !0);
                }), J._data(t, "changeBubbles", !0));
            });
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0;
        },
        teardown: function() {
            return J.event.remove(this, "._change"), !Se.test(this.nodeName);
        }
    }), Q.focusinBubbles || J.each({
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
            var a, o;
            if ("object" == typeof e) {
                for (a in "string" != typeof t && (n = n || t, t = void 0), e) this.on(a, t, n, e[a], r);
                return this;
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, 
            n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = d; else if (!i) return this;
            return 1 === r && (o = i, (i = function(e) {
                return J().off(e), o.apply(this, arguments);
            }).guid = o.guid || (o.guid = J.guid++)), this.each(function() {
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
            return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = d), 
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
    var Ae = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Le = / jQuery\d+="(?:null|\d+)"/g, Me = new RegExp("<(?:" + Ae + ")[\\s/>]", "i"), ze = /^\s+/, Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ie = /<([\w:]+)/, He = /<tbody/i, $e = /<|&#?\w+;/, je = /<(?:script|style|link)/i, Oe = /checked\s*(?:[^=]|=\s*.checked.)/i, Re = /^$|\/(?:java|ecma)script/i, Be = /^true\/(.*)/, _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, qe = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: Q.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, We = m(le).appendChild(le.createElement("div"));
    qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, 
    qe.th = qe.td, J.extend({
        clone: function(e, t, n) {
            var i, r, a, o, s, l = J.contains(e.ownerDocument, e);
            if (Q.html5Clone || J.isXMLDoc(e) || !Me.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (We.innerHTML = e.outerHTML, 
            We.removeChild(a = We.firstChild)), !(Q.noCloneEvent && Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e))) for (i = g(a), 
            s = g(e), o = 0; null != (r = s[o]); ++o) i[o] && T(r, i[o]);
            if (t) if (n) for (s = s || g(e), i = i || g(a), o = 0; null != (r = s[o]); o++) x(r, i[o]); else x(e, a);
            return 0 < (i = g(a, "script")).length && w(i, !l && g(e, "script")), i = s = r = null, 
            a;
        },
        buildFragment: function(e, t, n, i) {
            for (var r, a, o, s, l, u, c, d = e.length, p = m(t), f = [], h = 0; h < d; h++) if ((a = e[h]) || 0 === a) if ("object" === J.type(a)) J.merge(f, a.nodeType ? [ a ] : a); else if ($e.test(a)) {
                for (s = s || p.appendChild(t.createElement("div")), l = (Ie.exec(a) || [ "", "" ])[1].toLowerCase(), 
                c = qe[l] || qe._default, s.innerHTML = c[1] + a.replace(Pe, "<$1></$2>") + c[2], 
                r = c[0]; r--; ) s = s.lastChild;
                if (!Q.leadingWhitespace && ze.test(a) && f.push(t.createTextNode(ze.exec(a)[0])), 
                !Q.tbody) for (r = (a = "table" !== l || He.test(a) ? "<table>" !== c[1] || He.test(a) ? 0 : s : s.firstChild) && a.childNodes.length; r--; ) J.nodeName(u = a.childNodes[r], "tbody") && !u.childNodes.length && a.removeChild(u);
                for (J.merge(f, s.childNodes), s.textContent = ""; s.firstChild; ) s.removeChild(s.firstChild);
                s = p.lastChild;
            } else f.push(t.createTextNode(a));
            for (s && p.removeChild(s), Q.appendChecked || J.grep(g(f, "input"), v), h = 0; a = f[h++]; ) if ((!i || -1 === J.inArray(a, i)) && (o = J.contains(a.ownerDocument, a), 
            s = g(p.appendChild(a), "script"), o && w(s), n)) for (r = 0; a = s[r++]; ) Re.test(a.type || "") && n.push(a);
            return s = null, p;
        },
        cleanData: function(e, t) {
            for (var n, i, r, a, o = 0, s = J.expando, l = J.cache, u = Q.deleteExpando, c = J.event.special; null != (n = e[o]); o++) if ((t || J.acceptData(n)) && (a = (r = n[s]) && l[r])) {
                if (a.events) for (i in a.events) c[i] ? J.event.remove(n, i) : J.removeEvent(n, i, a.handle);
                l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== ge ? n.removeAttribute(s) : n[s] = null, 
                q.push(r));
            }
        }
    }), J.fn.extend({
        text: function(e) {
            return Te(this, function(e) {
                return void 0 === e ? J.text(this) : this.empty().append((this[0] && this[0].ownerDocument || le).createTextNode(e));
            }, null, e, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || f(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
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
            for (var n, i = e ? J.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || J.cleanData(g(n)), 
            n.parentNode && (t && J.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && J.cleanData(g(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
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
            return Te(this, function(e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Le, "") : void 0;
                if (!("string" != typeof e || je.test(e) || !Q.htmlSerialize && Me.test(e) || !Q.leadingWhitespace && ze.test(e) || qe[(Ie.exec(e) || [ "", "" ])[1].toLowerCase()])) {
                    e = e.replace(Pe, "<$1></$2>");
                    try {
                        for (;n < i; n++) 1 === (t = this[n] || {}).nodeType && (J.cleanData(g(t, !1)), 
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
                t = this.parentNode, J.cleanData(g(this)), t && t.replaceChild(e, this);
            }), t && (t.length || t.nodeType) ? this : this.remove();
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(n, i) {
            n = F.apply([], n);
            var e, t, r, a, o, s, l = 0, u = this.length, c = this, d = u - 1, p = n[0], f = J.isFunction(p);
            if (f || 1 < u && "string" == typeof p && !Q.checkClone && Oe.test(p)) return this.each(function(e) {
                var t = c.eq(e);
                f && (n[0] = p.call(this, e, t.html())), t.domManip(n, i);
            });
            if (u && (e = (s = J.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 
            1 === s.childNodes.length && (s = e), e)) {
                for (r = (a = J.map(g(s, "script"), y)).length; l < u; l++) t = s, l !== d && (t = J.clone(t, !0, !0), 
                r && J.merge(a, g(t, "script"))), i.call(this[l], t, l);
                if (r) for (o = a[a.length - 1].ownerDocument, J.map(a, b), l = 0; l < r; l++) t = a[l], 
                Re.test(t.type || "") && !J._data(t, "globalEval") && J.contains(o, t) && (t.src ? J._evalUrl && J._evalUrl(t.src) : J.globalEval((t.text || t.textContent || t.innerHTML || "").replace(_e, "")));
                s = e = null;
            }
            return this;
        }
    }), J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, o) {
        J.fn[e] = function(e) {
            for (var t, n = 0, i = [], r = J(e), a = r.length - 1; n <= a; n++) t = n === a ? this : this.clone(!0), 
            J(r[n])[o](t), X.apply(i, t.get());
            return this.pushStack(i);
        };
    });
    var Fe, Xe, Ge = {};
    Q.shrinkWrapBlocks = function() {
        return null != Xe ? Xe : (Xe = !1, (t = le.getElementsByTagName("body")[0]) && t.style ? (e = le.createElement("div"), 
        (n = le.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
        t.appendChild(n).appendChild(e), typeof e.style.zoom !== ge && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", 
        e.appendChild(le.createElement("div")).style.width = "5px", Xe = 3 !== e.offsetWidth), 
        t.removeChild(n), Xe) : void 0);
        var e, t, n;
    };
    var Ye, Ve, Ue = /^margin/, Qe = new RegExp("^(" + be + ")(?!px)[a-z%]+$", "i"), Ke = /^(top|right|bottom|left)$/;
    h.getComputedStyle ? (Ye = function(e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : h.getComputedStyle(e, null);
    }, Ve = function(e, t, n) {
        var i, r, a, o, s = e.style;
        return o = (n = n || Ye(e)) ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || J.contains(e.ownerDocument, e) || (o = J.style(e, t)), 
        Qe.test(o) && Ue.test(t) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, 
        o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a)), void 0 === o ? o : o + "";
    }) : le.documentElement.currentStyle && (Ye = function(e) {
        return e.currentStyle;
    }, Ve = function(e, t, n) {
        var i, r, a, o, s = e.style;
        return null == (o = (n = n || Ye(e)) ? n[t] : void 0) && s && s[t] && (o = s[t]), 
        Qe.test(o) && !Ke.test(t) && (i = s.left, (a = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), 
        s.left = "fontSize" === t ? "1em" : o, o = s.pixelLeft + "px", s.left = i, a && (r.left = a)), 
        void 0 === o ? o : o + "" || "auto";
    }), function() {
        function e() {
            var e, t, n, i;
            (t = le.getElementsByTagName("body")[0]) && t.style && (e = le.createElement("div"), 
            (n = le.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
            t.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
            r = a = !1, s = !0, h.getComputedStyle && (r = "1%" !== (h.getComputedStyle(e, null) || {}).top, 
            a = "4px" === (h.getComputedStyle(e, null) || {
                width: "4px"
            }).width, (i = e.appendChild(le.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
            i.style.marginRight = i.style.width = "0", e.style.width = "1px", s = !parseFloat((h.getComputedStyle(i, null) || {}).marginRight), 
            e.removeChild(i)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            (i = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", 
            (o = 0 === i[0].offsetHeight) && (i[0].style.display = "", i[1].style.display = "none", 
            o = 0 === i[0].offsetHeight), t.removeChild(n));
        }
        var t, n, i, r, a, o, s;
        (t = le.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        (n = (i = t.getElementsByTagName("a")[0]) && i.style) && (n.cssText = "float:left;opacity:.5", 
        Q.opacity = "0.5" === n.opacity, Q.cssFloat = !!n.cssFloat, t.style.backgroundClip = "content-box", 
        t.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === t.style.backgroundClip, 
        Q.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, 
        J.extend(Q, {
            reliableHiddenOffsets: function() {
                return null == o && e(), o;
            },
            boxSizingReliable: function() {
                return null == a && e(), a;
            },
            pixelPosition: function() {
                return null == r && e(), r;
            },
            reliableMarginRight: function() {
                return null == s && e(), s;
            }
        }));
    }(), J.swap = function(e, t, n, i) {
        var r, a, o = {};
        for (a in t) o[a] = e.style[a], e.style[a] = t[a];
        for (a in r = n.apply(e, i || []), t) e.style[a] = o[a];
        return r;
    };
    var Je = /alpha\([^)]*\)/i, Ze = /opacity\s*=\s*([^)]*)/, et = /^(none|table(?!-c[ea]).+)/, tt = new RegExp("^(" + be + ")(.*)$", "i"), nt = new RegExp("^([+-])=(" + be + ")", "i"), it = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, rt = {
        letterSpacing: "0",
        fontWeight: "400"
    }, at = [ "Webkit", "O", "Moz", "ms" ];
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
            float: Q.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, o, s = J.camelCase(t), l = e.style;
                if (t = J.cssProps[s] || (J.cssProps[s] = k(l, s)), o = J.cssHooks[t] || J.cssHooks[s], 
                void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t];
                if ("string" === (a = typeof n) && (r = nt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(J.css(e, t)), 
                a = "number"), null != n && n == n && ("number" !== a || J.cssNumber[s] || (n += "px"), 
                Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
                !(o && "set" in o && void 0 === (n = o.set(e, n, i))))) try {
                    l[t] = n;
                } catch (e) {}
            }
        },
        css: function(e, t, n, i) {
            var r, a, o, s = J.camelCase(t);
            return t = J.cssProps[s] || (J.cssProps[s] = k(e.style, s)), (o = J.cssHooks[t] || J.cssHooks[s]) && "get" in o && (a = o.get(e, !0, n)), 
            void 0 === a && (a = Ve(e, t, i)), "normal" === a && t in rt && (a = rt[t]), "" === n || n ? (r = parseFloat(a), 
            !0 === n || J.isNumeric(r) ? r || 0 : a) : a;
        }
    }), J.each([ "height", "width" ], function(e, r) {
        J.cssHooks[r] = {
            get: function(e, t, n) {
                return t ? et.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, it, function() {
                    return L(e, r, n);
                }) : L(e, r, n) : void 0;
            },
            set: function(e, t, n) {
                var i = n && Ye(e);
                return D(0, t, n ? A(e, r, n, Q.boxSizing && "border-box" === J.css(e, "boxSizing", !1, i), i) : 0);
            }
        };
    }), Q.opacity || (J.cssHooks.opacity = {
        get: function(e, t) {
            return Ze.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },
        set: function(e, t) {
            var n = e.style, i = e.currentStyle, r = J.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", a = i && i.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === J.trim(a.replace(Je, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
            "" === t || i && !i.filter) || (n.filter = Je.test(a) ? a.replace(Je, r) : a + " " + r);
        }
    }), J.cssHooks.marginRight = E(Q.reliableMarginRight, function(e, t) {
        return t ? J.swap(e, {
            display: "inline-block"
        }, Ve, [ e, "marginRight" ]) : void 0;
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, a) {
        J.cssHooks[r + a] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [ e ]; t < 4; t++) n[r + we[t] + a] = i[t] || i[t - 2] || i[0];
                return n;
            }
        }, Ue.test(r) || (J.cssHooks[r + a].set = D);
    }), J.fn.extend({
        css: function(e, t) {
            return Te(this, function(e, t, n) {
                var i, r, a = {}, o = 0;
                if (J.isArray(t)) {
                    for (i = Ye(e), r = t.length; o < r; o++) a[t[o]] = J.css(e, t[o], !1, i);
                    return a;
                }
                return void 0 !== n ? J.style(e, t, n) : J.css(e, t);
            }, e, t, 1 < arguments.length);
        },
        show: function() {
            return N(this, !0);
        },
        hide: function() {
            return N(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                xe(this) ? J(this).show() : J(this).hide();
            });
        }
    }), (J.Tween = M).prototype = {
        constructor: M,
        init: function(e, t, n, i, r, a) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), 
            this.end = i, this.unit = a || (J.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = M.propHooks[this.prop];
            return this.pos = t = this.options.duration ? J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : M.propHooks._default.set(this), this;
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop];
            },
            set: function(e) {
                J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
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
    }, J.fx = M.prototype.init, J.fx.step = {};
    var ot, st, lt, ut, ct, dt, pt, ft = /^(?:toggle|show|hide)$/, ht = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$", "i"), mt = /queueHooks$/, gt = [ function(t, e, n) {
        var i, r, a, o, s, l, u, c = this, d = {}, p = t.style, f = t.nodeType && xe(t), h = J._data(t, "fxshow");
        for (i in n.queue || (null == (s = J._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, 
        l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l();
        }), s.unqueued++, c.always(function() {
            c.always(function() {
                s.unqueued--, J.queue(t, "fx").length || s.empty.fire();
            });
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
        "inline" === ("none" === (u = J.css(t, "display")) ? J._data(t, "olddisplay") || S(t.nodeName) : u) && "none" === J.css(t, "float") && (Q.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), 
        n.overflow && (p.overflow = "hidden", Q.shrinkWrapBlocks() || c.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
        })), e) if (r = e[i], ft.exec(r)) {
            if (delete e[i], a = a || "toggle" === r, r === (f ? "hide" : "show")) {
                if ("show" !== r || !h || void 0 === h[i]) continue;
                f = !0;
            }
            d[i] = h && h[i] || J.style(t, i);
        } else u = void 0;
        if (J.isEmptyObject(d)) "inline" === ("none" === u ? S(t.nodeName) : u) && (p.display = u); else for (i in h ? "hidden" in h && (f = h.hidden) : h = J._data(t, "fxshow", {}), 
        a && (h.hidden = !f), f ? J(t).show() : c.done(function() {
            J(t).hide();
        }), c.done(function() {
            var e;
            for (e in J._removeData(t, "fxshow"), d) J.style(t, e, d[e]);
        }), d) o = I(f ? h[i] : 0, i, c), i in h || (h[i] = o.start, f && (o.end = o.start, 
        o.start = "width" === i || "height" === i ? 1 : 0));
    } ], vt = {
        "*": [ function(e, t) {
            var n = this.createTween(e, t), i = n.cur(), r = ht.exec(t), a = r && r[3] || (J.cssNumber[e] ? "" : "px"), o = (J.cssNumber[e] || "px" !== a && +i) && ht.exec(J.css(n.elem, e)), s = 1, l = 20;
            if (o && o[3] !== a) for (a = a || o[3], r = r || [], o = +i || 1; o /= s = s || ".5", 
            J.style(n.elem, e, o + a), s !== (s = n.cur() / i) && 1 !== s && --l; ) ;
            return r && (o = n.start = +o || +i || 0, n.unit = a, n.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), 
            n;
        } ]
    };
    J.Animation = J.extend(H, {
        tweener: function(e, t) {
            J.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], vt[n] = vt[n] || [], vt[n].unshift(t);
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
            var r = J.isEmptyObject(t), a = J.speed(e, n, i), o = function() {
                var e = H(this, J.extend({}, t), a);
                (r || J._data(this, "finish")) && e.stop(!0);
            };
            return o.finish = o, r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o);
        },
        stop: function(r, e, a) {
            var o = function(e) {
                var t = e.stop;
                delete e.stop, t(a);
            };
            return "string" != typeof r && (a = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), 
            this.each(function() {
                var e = !0, t = null != r && r + "queueHooks", n = J.timers, i = J._data(this);
                if (t) i[t] && i[t].stop && o(i[t]); else for (t in i) i[t] && i[t].stop && mt.test(t) && o(i[t]);
                for (t = n.length; t--; ) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(a), 
                e = !1, n.splice(t, 1));
                (e || !a) && J.dequeue(this, r);
            });
        },
        finish: function(o) {
            return !1 !== o && (o = o || "fx"), this.each(function() {
                var e, t = J._data(this), n = t[o + "queue"], i = t[o + "queueHooks"], r = J.timers, a = n ? n.length : 0;
                for (t.finish = !0, J.queue(this, o, []), i && i.stop && i.stop.call(this, !0), 
                e = r.length; e--; ) r[e].elem === this && r[e].queue === o && (r[e].anim.stop(!0), 
                r.splice(e, 1));
                for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish;
            });
        }
    }), J.each([ "toggle", "show", "hide" ], function(e, i) {
        var r = J.fn[i];
        J.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(P(i, !0), e, t, n);
        };
    }), J.each({
        slideDown: P("show"),
        slideUp: P("hide"),
        slideToggle: P("toggle"),
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
    }, (ut = le.createElement("div")).setAttribute("className", "t"), ut.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
    dt = ut.getElementsByTagName("a")[0], pt = (ct = le.createElement("select")).appendChild(le.createElement("option")), 
    lt = ut.getElementsByTagName("input")[0], dt.style.cssText = "top:1px", Q.getSetAttribute = "t" !== ut.className, 
    Q.style = /top/.test(dt.getAttribute("style")), Q.hrefNormalized = "/a" === dt.getAttribute("href"), 
    Q.checkOn = !!lt.value, Q.optSelected = pt.selected, Q.enctype = !!le.createElement("form").enctype, 
    ct.disabled = !0, Q.optDisabled = !pt.disabled, (lt = le.createElement("input")).setAttribute("value", ""), 
    Q.input = "" === lt.getAttribute("value"), lt.value = "t", lt.setAttribute("type", "radio"), 
    Q.radioValue = "t" === lt.value;
    var yt = /\r/g;
    J.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = J.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, J(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : J.isArray(t) && (t = J.map(t, function(e) {
                    return null == e ? "" : e + "";
                })), (i = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t));
            })) : t ? (i = J.valHooks[t.type] || J.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0;
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
                    for (var t, n, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || r < 0, o = a ? null : [], s = a ? r + 1 : i.length, l = r < 0 ? s : a ? r : 0; l < s; l++) if (!(!(n = i[l]).selected && l !== r || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
                        if (t = J(n).val(), a) return t;
                        o.push(t);
                    }
                    return o;
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, a = J.makeArray(t), o = r.length; o--; ) if (i = r[o], 
                    0 <= J.inArray(J.valHooks.option.get(i), a)) try {
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
        }, Q.checkOn || (J.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var bt, wt, xt = J.expr.attrHandle, Tt = /^(?:checked|selected)$/i, Ct = Q.getSetAttribute, St = Q.input;
    J.fn.extend({
        attr: function(e, t) {
            return Te(this, J.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function(e) {
            return this.each(function() {
                J.removeAttr(this, e);
            });
        }
    }), J.extend({
        attr: function(e, t, n) {
            var i, r, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === ge ? J.prop(e, t, n) : (1 === a && J.isXMLDoc(e) || (t = t.toLowerCase(), 
            i = J.attrHooks[t] || (J.expr.match.bool.test(t) ? wt : bt)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = J.find.attr(e, t)) ? void 0 : r : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
            n) : void J.removeAttr(e, t));
        },
        removeAttr: function(e, t) {
            var n, i, r = 0, a = t && t.match(fe);
            if (a && 1 === e.nodeType) for (;n = a[r++]; ) i = J.propFix[n] || n, J.expr.match.bool.test(n) ? St && Ct || !Tt.test(n) ? e[i] = !1 : e[J.camelCase("default-" + n)] = e[i] = !1 : J.attr(e, n, ""), 
            e.removeAttribute(Ct ? n : i);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Q.radioValue && "radio" === t && J.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        }
    }), wt = {
        set: function(e, t, n) {
            return !1 === t ? J.removeAttr(e, n) : St && Ct || !Tt.test(n) ? e.setAttribute(!Ct && J.propFix[n] || n, n) : e[J.camelCase("default-" + n)] = e[n] = !0, 
            n;
        }
    }, J.each(J.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = xt[t] || J.find.attr;
        xt[t] = St && Ct || !Tt.test(t) ? function(e, t, n) {
            var i, r;
            return n || (r = xt[t], xt[t] = i, i = null != a(e, t, n) ? t.toLowerCase() : null, 
            xt[t] = r), i;
        } : function(e, t, n) {
            return n ? void 0 : e[J.camelCase("default-" + t)] ? t.toLowerCase() : null;
        };
    }), St && Ct || (J.attrHooks.value = {
        set: function(e, t, n) {
            return J.nodeName(e, "input") ? void (e.defaultValue = t) : bt && bt.set(e, t, n);
        }
    }), Ct || (bt = {
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
        set: bt.set
    }, J.attrHooks.contenteditable = {
        set: function(e, t, n) {
            bt.set(e, "" !== t && t, n);
        }
    }, J.each([ "width", "height" ], function(e, n) {
        J.attrHooks[n] = {
            set: function(e, t) {
                return "" === t ? (e.setAttribute(n, "auto"), t) : void 0;
            }
        };
    })), Q.style || (J.attrHooks.style = {
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
            return Te(this, J.prop, e, t, 1 < arguments.length);
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
            var i, r, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !J.isXMLDoc(e)) && (t = J.propFix[t] || t, 
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
    }), Q.hrefNormalized || J.each([ "href", "src" ], function(e, t) {
        J.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4);
            }
        };
    }), Q.optSelected || (J.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    }), J.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        J.propFix[this.toLowerCase()] = this;
    }), Q.enctype || (J.propFix.enctype = "encoding");
    var Nt = /[\t\r\n\f]/g;
    J.fn.extend({
        addClass: function(t) {
            var e, n, i, r, a, o, s = 0, l = this.length, u = "string" == typeof t && t;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).addClass(t.call(this, e, this.className));
            });
            if (u) for (e = (t || "").match(fe) || []; s < l; s++) if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(Nt, " ") : " ")) {
                for (a = 0; r = e[a++]; ) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                o = J.trim(i), n.className !== o && (n.className = o);
            }
            return this;
        },
        removeClass: function(t) {
            var e, n, i, r, a, o, s = 0, l = this.length, u = 0 === arguments.length || "string" == typeof t && t;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).removeClass(t.call(this, e, this.className));
            });
            if (u) for (e = (t || "").match(fe) || []; s < l; s++) if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(Nt, " ") : "")) {
                for (a = 0; r = e[a++]; ) for (;0 <= i.indexOf(" " + r + " "); ) i = i.replace(" " + r + " ", " ");
                o = t ? J.trim(i) : "", n.className !== o && (n.className = o);
            }
            return this;
        },
        toggleClass: function(r, t) {
            var a = typeof r;
            return "boolean" == typeof t && "string" === a ? t ? this.addClass(r) : this.removeClass(r) : this.each(J.isFunction(r) ? function(e) {
                J(this).toggleClass(r.call(this, e, this.className, t), t);
            } : function() {
                if ("string" === a) for (var e, t = 0, n = J(this), i = r.match(fe) || []; e = i[t++]; ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else (a === ge || "boolean" === a) && (this.className && J._data(this, "__className__", this.className), 
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
    var Dt = J.now(), At = /\?/, Lt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    J.parseJSON = function(e) {
        if (h.JSON && h.JSON.parse) return h.JSON.parse(e + "");
        var r, a = null, t = J.trim(e + "");
        return t && !J.trim(t.replace(Lt, function(e, t, n, i) {
            return r && t && (a = 0), 0 === a ? e : (r = n || t, a += !i - !n, "");
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
    var Mt, zt, Pt = /#.*$/, It = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, $t = /^(?:GET|HEAD)$/, jt = /^\/\//, Ot = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Rt = {}, Bt = {}, _t = "*/".concat("*");
    try {
        zt = location.href;
    } catch (e) {
        (zt = le.createElement("a")).href = "", zt = zt.href;
    }
    Mt = Ot.exec(zt.toLowerCase()) || [], J.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zt,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Mt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _t,
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
            return t ? O(O(e, J.ajaxSettings), t) : O(J.ajaxSettings, e);
        },
        ajaxPrefilter: $(Rt),
        ajaxTransport: $(Bt),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var r, a, o, s, l, u = t;
                2 !== x && (x = 2, p && clearTimeout(p), h = void 0, d = i || "", T.readyState = 0 < e ? 4 : 0, 
                r = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var i, r, a, o, s = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), 
                    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) for (o in s) if (s[o] && s[o].test(r)) {
                        l.unshift(o);
                        break;
                    }
                    if (l[0] in n) a = l[0]; else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                a = o;
                                break;
                            }
                            i || (i = o);
                        }
                        a = a || i;
                    }
                    return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0;
                }(m, T, n)), s = function(e, t, n, i) {
                    var r, a, o, s, l, u = {}, c = e.dataTypes.slice();
                    if (c[1]) for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
                    for (a = c.shift(); a; ) if (e.responseFields[a] && (n[e.responseFields[a]] = t), 
                    !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift()) if ("*" === a) a = l; else if ("*" !== l && l !== a) {
                        if (!(o = u[l + " " + a] || u["* " + a])) for (r in u) if ((s = r.split(" "))[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                            !0 === o ? o = u[r] : !0 !== u[r] && (a = s[0], c.unshift(s[1]));
                            break;
                        }
                        if (!0 !== o) if (o && e.throws) t = o(t); else try {
                            t = o(t);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: o ? e : "No conversion from " + l + " to " + a
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: t
                    };
                }(m, s, T, r), r ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (J.lastModified[c] = l), 
                (l = T.getResponseHeader("etag")) && (J.etag[c] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, 
                a = s.data, r = !(o = s.error))) : (o = u, (e || !u) && (u = "error", e < 0 && (e = 0))), 
                T.status = e, T.statusText = (t || u) + "", r ? y.resolveWith(g, [ a, u, T ]) : y.rejectWith(g, [ T, u, o ]), 
                T.statusCode(w), w = void 0, f && v.trigger(r ? "ajaxSuccess" : "ajaxError", [ T, m, r ? a : o ]), 
                b.fireWith(g, [ T, u ]), f && (v.trigger("ajaxComplete", [ T, m ]), --J.active || J.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, r, c, d, p, f, h, a, m = J.ajaxSetup({}, t), g = m.context || m, v = m.context && (g.nodeType || g.jquery) ? J(g) : J.event, y = J.Deferred(), b = J.Callbacks("once memory"), w = m.statusCode || {}, o = {}, s = {}, x = 0, l = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!a) for (a = {}; t = Ht.exec(d); ) a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? d : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = s[n] = s[n] || e, o[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return x || (m.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (x < 2) for (t in e) w[t] = [ w[t], e[t] ]; else T.always(e[T.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || l;
                    return h && h.abort(t), n(0, t), this;
                }
            };
            if (y.promise(T).complete = b.add, T.success = T.done, T.error = T.fail, m.url = ((e || m.url || zt) + "").replace(Pt, "").replace(jt, Mt[1] + "//"), 
            m.type = t.method || t.type || m.method || m.type, m.dataTypes = J.trim(m.dataType || "*").toLowerCase().match(fe) || [ "" ], 
            null == m.crossDomain && (i = Ot.exec(m.url.toLowerCase()), m.crossDomain = !(!i || i[1] === Mt[1] && i[2] === Mt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Mt[3] || ("http:" === Mt[1] ? "80" : "443")))), 
            m.data && m.processData && "string" != typeof m.data && (m.data = J.param(m.data, m.traditional)), 
            j(Rt, m, t, T), 2 === x) return T;
            for (r in (f = J.event && m.global) && 0 == J.active++ && J.event.trigger("ajaxStart"), 
            m.type = m.type.toUpperCase(), m.hasContent = !$t.test(m.type), c = m.url, m.hasContent || (m.data && (c = m.url += (At.test(c) ? "&" : "?") + m.data, 
            delete m.data), !1 === m.cache && (m.url = It.test(c) ? c.replace(It, "$1_=" + Dt++) : c + (At.test(c) ? "&" : "?") + "_=" + Dt++)), 
            m.ifModified && (J.lastModified[c] && T.setRequestHeader("If-Modified-Since", J.lastModified[c]), 
            J.etag[c] && T.setRequestHeader("If-None-Match", J.etag[c])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), 
            T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : m.accepts["*"]), 
            m.headers) T.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, T, m) || 2 === x)) return T.abort();
            for (r in l = "abort", {
                success: 1,
                error: 1,
                complete: 1
            }) T[r](m[r]);
            if (h = j(Bt, m, t, T)) {
                T.readyState = 1, f && v.trigger("ajaxSend", [ T, m ]), m.async && 0 < m.timeout && (p = setTimeout(function() {
                    T.abort("timeout");
                }, m.timeout));
                try {
                    x = 1, h.send(o, n);
                } catch (e) {
                    if (!(x < 2)) throw e;
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
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !Q.reliableHiddenOffsets() && "none" === (e.style && e.style.display || J.css(e, "display"));
    }, J.expr.filters.visible = function(e) {
        return !J.expr.filters.hidden(e);
    };
    var qt = /%20/g, Wt = /\[\]$/, Ft = /\r?\n/g, Xt = /^(?:submit|button|image|reset|file)$/i, Gt = /^(?:input|select|textarea|keygen)/i;
    J.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            t = J.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function() {
            r(this.name, this.value);
        }); else for (n in e) R(n, e[n], t, r);
        return i.join("&").replace(qt, "+");
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
                return this.name && !J(this).is(":disabled") && Gt.test(this.nodeName) && !Xt.test(e) && (this.checked || !Ce.test(e));
            }).map(function(e, t) {
                var n = J(this).val();
                return null == n ? null : J.isArray(n) ? J.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ft, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(Ft, "\r\n")
                };
            }).get();
        }
    }), J.ajaxSettings.xhr = void 0 !== h.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && B() || function() {
            try {
                return new h.ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }();
    } : B;
    var Yt = 0, Vt = {}, Ut = J.ajaxSettings.xhr();
    h.attachEvent && h.attachEvent("onunload", function() {
        for (var e in Vt) Vt[e](void 0, !0);
    }), Q.cors = !!Ut && "withCredentials" in Ut, (Ut = Q.ajax = !!Ut) && J.ajaxTransport(function(l) {
        var u;
        if (!l.crossDomain || Q.cors) return {
            send: function(e, a) {
                var t, o = l.xhr(), s = ++Yt;
                if (o.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields) for (t in l.xhrFields) o[t] = l.xhrFields[t];
                for (t in l.mimeType && o.overrideMimeType && o.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), 
                e) void 0 !== e[t] && o.setRequestHeader(t, e[t] + "");
                o.send(l.hasContent && l.data || null), u = function(e, t) {
                    var n, i, r;
                    if (u && (t || 4 === o.readyState)) if (delete Vt[s], u = void 0, o.onreadystatechange = J.noop, 
                    t) 4 !== o.readyState && o.abort(); else {
                        r = {}, n = o.status, "string" == typeof o.responseText && (r.text = o.responseText);
                        try {
                            i = o.statusText;
                        } catch (e) {
                            i = "";
                        }
                        n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = r.text ? 200 : 404;
                    }
                    r && a(n, i, r, o.getAllResponseHeaders());
                }, l.async ? 4 === o.readyState ? setTimeout(u) : o.onreadystatechange = Vt[s] = u : u();
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
            var i, r = le.head || J("head")[0] || le.documentElement;
            return {
                send: function(e, n) {
                    (i = le.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), 
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
    var Qt = [], Kt = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Qt.pop() || J.expando + "_" + Dt++;
            return this[e] = !0, e;
        }
    }), J.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, a, o = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
        return o || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = J.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        o ? e[o] = e[o].replace(Kt, "$1" + i) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), 
        e.converters["script json"] = function() {
            return a || J.error(i + " was not called"), a[0];
        }, e.dataTypes[0] = "json", r = h[i], h[i] = function() {
            a = arguments;
        }, n.always(function() {
            h[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Qt.push(i)), a && J.isFunction(r) && r(a[0]), 
            a = r = void 0;
        }), "script") : void 0;
    }), J.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || le;
        var i = ae.exec(e), r = !n && [];
        return i ? [ t.createElement(i[1]) ] : (i = J.buildFragment([ e ], t, r), r && r.length && J(r).remove(), 
        J.merge([], i.childNodes));
    };
    var Jt = J.fn.load;
    J.fn.load = function(e, t, n) {
        if ("string" != typeof e && Jt) return Jt.apply(this, arguments);
        var i, r, a, o = this, s = e.indexOf(" ");
        return 0 <= s && (i = J.trim(e.slice(s, e.length)), e = e.slice(0, s)), J.isFunction(t) ? (n = t, 
        t = void 0) : t && "object" == typeof t && (a = "POST"), 0 < o.length && J.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, o.html(i ? J("<div>").append(J.parseHTML(e)).find(i) : e);
        }).complete(n && function(e, t) {
            o.each(n, r || [ e.responseText, t, e ]);
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
    var Zt = h.document.documentElement;
    J.offset = {
        setOffset: function(e, t, n) {
            var i, r, a, o, s, l, u = J.css(e, "position"), c = J(e), d = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), a = J.css(e, "top"), 
            l = J.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < J.inArray("auto", [ a, l ]) ? (o = (i = c.position()).top, 
            r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(l) || 0), J.isFunction(t) && (t = t.call(e, n, s)), 
            null != t.top && (d.top = t.top - s.top + o), null != t.left && (d.left = t.left - s.left + r), 
            "using" in t ? t.using.call(e, d) : c.css(d);
        }
    }, J.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                J.offset.setOffset(this, t, e);
            });
            var e, n, i = {
                top: 0,
                left: 0
            }, r = this[0], a = r && r.ownerDocument;
            return a ? (e = a.documentElement, J.contains(e, r) ? (typeof r.getBoundingClientRect !== ge && (i = r.getBoundingClientRect()), 
            n = _(a), {
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
                for (var e = this.offsetParent || Zt; e && !J.nodeName(e, "html") && "static" === J.css(e, "position"); ) e = e.offsetParent;
                return e || Zt;
            });
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var a = /Y/.test(r);
        J.fn[t] = function(e) {
            return Te(this, function(e, t, n) {
                var i = _(e);
                return void 0 === n ? i ? r in i ? i[r] : i.document.documentElement[t] : e[t] : void (i ? i.scrollTo(a ? J(i).scrollLeft() : n, a ? n : J(i).scrollTop()) : e[t] = n);
            }, t, e, arguments.length, null);
        };
    }), J.each([ "top", "left" ], function(e, n) {
        J.cssHooks[n] = E(Q.pixelPosition, function(e, t) {
            return t ? (t = Ve(e, n), Qe.test(t) ? J(e).position()[n] + "px" : t) : void 0;
        });
    }), J.each({
        Height: "height",
        Width: "width"
    }, function(a, o) {
        J.each({
            padding: "inner" + a,
            content: o,
            "": "outer" + a
        }, function(i, e) {
            J.fn[e] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e), r = i || (!0 === e || !0 === t ? "margin" : "border");
                return Te(this, function(e, t, n) {
                    var i;
                    return J.isWindow(e) ? e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement, 
                    Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? J.css(e, t, r) : J.style(e, t, n, r);
                }, o, n ? e : void 0, n, null);
            };
        });
    }), J.fn.size = function() {
        return this.length;
    }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return J;
    });
    var en = h.jQuery, tn = h.$;
    return J.noConflict = function(e) {
        return h.$ === J && (h.$ = tn), e && h.jQuery === J && (h.jQuery = en), J;
    }, typeof e === ge && (h.jQuery = h.$ = J), J;
}), function() {
    var l = {
        ua: "",
        is: function(e) {
            return RegExp(e, "i").test(l.ua);
        },
        version: function(e, t) {
            for (var n = (t = t.replace(".", "_")).indexOf("_"), i = ""; 0 < n; ) i += " " + e + t.substring(0, n), 
            n = t.indexOf("_", n + 1);
            return i += " " + e + t;
        },
        getBrowser: function() {
            var e = "gecko", t = "webkit", n = "chrome", i = "firefox", r = "safari", a = "opera", o = l.ua, s = l.is;
            return [ !/opera|webtv/i.test(o) && /msie\s(\d+)/.test(o) ? "ie ie" + (/trident\/4\.0/.test(o) ? "8" : RegExp.$1) : s("edge/") ? "edge ie" + (/edge\/(\d+)\.(\d+)/.test(o) ? RegExp.$1 + " ie" + RegExp.$1 + "_" + RegExp.$2 : "") : s("trident/") ? "ie ie" + (/trident\/.+rv:(\d+)/i.test(o) ? RegExp.$1 : "") : s("firefox/") ? e + " " + i + (/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(o) ? " " + i + RegExp.$2 + " " + i + RegExp.$2 + "_" + RegExp.$4 : "") : s("gecko/") ? e : s("opera") ? a + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(o) ? " " + a + RegExp.$2 + " " + a + RegExp.$2 + "_" + RegExp.$4 : /opera(\s|\/)(\d+)\.(\d+)/.test(o) ? " " + a + RegExp.$2 + " " + a + RegExp.$2 + "_" + RegExp.$3 : "") : s("konqueror") ? "konqueror" : s("chrome") ? t + " " + n + (/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(o) ? " " + n + RegExp.$2 + (0 < RegExp.$4 ? " " + n + RegExp.$2 + "_" + RegExp.$4 : "") : "") : s("iron") ? t + " iron" : s("applewebkit/") ? t + " " + r + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(o) ? " " + r + RegExp.$2 + " " + r + RegExp.$2 + RegExp.$3.replace(".", "_") : / Safari\/(\d+)/i.test(o) ? "419" == RegExp.$1 || "417" == RegExp.$1 || "416" == RegExp.$1 || "412" == RegExp.$1 ? " safari2_0" : "312" == RegExp.$1 ? " safari1_3" : "125" == RegExp.$1 ? " safari1_2" : "85" == RegExp.$1 ? " safari1_0" : "" : "") : s("mozilla/") ? e : "" ];
        },
        getPlatform: function() {
            var e = "winphone", t = "android", n = "blackberry", i = l.ua, r = l.version, a = l.is;
            return [ a("j2me") ? "j2me" : a("windows phone") ? e + (/Windows Phone (\d+)(\.(\d+))+/i.test(i) ? " " + e + RegExp.$1 + " " + e + RegExp.$1 + RegExp.$2.replace(".", "_") : /Windows Phone OS (\d+)(\.(\d+))+/i.test(i) ? " " + e + RegExp.$1 + " " + e + RegExp.$1 + RegExp.$2.replace(".", "_") : "") : a("blackberry") ? n + (/Version\/(\d+)(\.(\d+)+)/i.test(i) ? " " + n + RegExp.$1 + " " + n + RegExp.$1 + RegExp.$2.replace(".", "_") : /Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(i) ? " " + n + RegExp.$2 + (RegExp.$3 ? " " + n + RegExp.$2 + RegExp.$3 : "") : "") : a("android") ? t + (/Version\/(\d+)(\.(\d+))+/i.test(i) ? " " + t + RegExp.$1 + " " + t + RegExp.$1 + RegExp.$2.replace(".", "_") : "") + (/Android (.+); (.+) Build/i.test(i) ? " device_" + RegExp.$2.replace(/ /g, "_").replace(/-/g, "_") : "") : a("ipad|ipod|iphone") ? (/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(i) ? "ios" + r("ios", RegExp.$2) : "") + " " + (/(ip(ad|od|hone))/gi.test(i) ? RegExp.$1 : "") : a("playbook") ? "playbook" : a("kindle|silk") ? "kindle" : a("playbook") ? "playbook" : a("mac") ? "mac" + (/mac os x ((\d+)[.|_](\d+))/.test(i) ? " mac" + RegExp.$2 + " mac" + RegExp.$1.replace(".", "_") : "") : a("win") ? "win" + (a("windows nt 10.0") ? " win10" : a("windows nt 6.3") ? " win8_1" : a("windows nt 6.2") ? " win8" : a("windows nt 6.1") ? " win7" : a("windows nt 6.0") ? " vista" : a("windows nt 5.2") || a("windows nt 5.1") ? " win_xp" : a("windows nt 5.0") ? " win_2k" : a("windows nt 4.0") || a("WinNT4.0") ? " win_nt" : "") : a("freebsd") ? "freebsd" : a("x11|linux") ? "linux" : "" ];
        },
        getMobile: function() {
            return [ (0, l.is)("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|winphone|playbook|kindle|silk") ? "mobile" : "" ];
        },
        getIpadApp: function() {
            var e = l.is;
            return [ e("ipad|iphone|ipod") && !e("safari") ? "ipad_app" : "" ];
        },
        getLang: function() {
            var e = l.ua;
            return [ /[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(e) ? ("lang_" + RegExp.$2).replace("-", "_") + ("" != RegExp.$3 ? (" lang_" + RegExp.$1).replace("-", "_") : "") : "" ];
        }
    };
    "undefined" == typeof html && (html = document.documentElement);
    var s = {
        width: (window.outerWidth || html.clientWidth) - 15,
        height: window.outerHeight || html.clientHeight,
        screens: [ 0, 768, 980, 1200 ],
        screenSize: function() {
            s.width = (window.outerWidth || html.clientWidth) - 15, s.height = window.outerHeight || html.clientHeight;
            for (var e = s.screens, t = e.length, n = []; t--; ) if (s.width >= e[t]) {
                t && n.push("minw_" + e[t]), t <= 2 && n.push("maxw_" + (e[t + 1] - 1));
                break;
            }
            return n;
        },
        getOrientation: function() {
            return s.width < s.height ? [ "orientation_portrait" ] : [ "orientation_landscape" ];
        },
        getInfo: function() {
            var e = [];
            return e = (e = e.concat(s.screenSize())).concat(s.getOrientation());
        },
        getPixelRatio: function() {
            var e = [], t = window.devicePixelRatio ? window.devicePixelRatio : 1;
            return 1 < t ? (e.push("retina_" + parseInt(t) + "x"), e.push("hidpi")) : e.push("no-hidpi"), 
            e;
        }
    }, u = {
        data: new Image(),
        div: document.createElement("div"),
        isIeLessThan9: !1,
        getImg: function() {
            return u.data.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", 
            u.div.innerHTML = "<!--[if lt IE 9]><i></i><![endif]-->", u.isIeLessThan9 = 1 == u.div.getElementsByTagName("i").length, 
            u.data;
        },
        checkSupport: function() {
            return 1 != u.data.width || 1 != u.data.height || u.isIeLessThan9 ? [ "no-datauri" ] : [ "datauri" ];
        }
    };
    window.css_browser_selector = function(e, t) {
        var n = document.documentElement, i = [];
        t = t || "", l.ua = e.toLowerCase(), i = (i = (i = (i = (i = (i = (i = (i = i.concat(l.getBrowser())).concat(l.getPlatform())).concat(l.getMobile())).concat(l.getIpadApp())).concat(l.getLang())).concat([ "js" ])).concat(s.getPixelRatio())).concat(s.getInfo());
        var r = function() {
            n.className = n.className.replace(/ ?orientation_\w+/g, "").replace(/ [min|max|cl]+[w|h]_\d+/g, ""), 
            n.className = n.className + " " + s.getInfo().join(" ");
        };
        window.addEventListener ? (window.addEventListener("resize", r), window.addEventListener("orientationchange", r)) : window.attachEvent && window.attachEvent("onresize", r);
        var a = u.getImg();
        a.onload = a.onerror = function() {
            n.className += " " + u.checkSupport().join(" ");
        };
        var o = n.className.split(/ /);
        return i = i.concat(o), Array.prototype.filter || (Array.prototype.filter = function(e) {
            "use strict";
            if (null == this) throw new TypeError();
            var t = Object(this), n = t.length >>> 0;
            if ("function" != typeof e) throw new TypeError();
            for (var i = [], r = 2 <= arguments.length ? arguments[1] : void 0, a = 0; a < n; a++) if (a in t) {
                var o = t[a];
                e.call(r, o, a, t) && i.push(o);
            }
            return i;
        }), (i = i.filter(function(e) {
            return "no-js" !== e && e;
        }))[0] = t ? t + i[0] : i[0], n.className = i.join(" " + t), n.className;
    };
}();

var css_browser_selector_ns = css_browser_selector_ns || "";

if (css_browser_selector(navigator.userAgent, css_browser_selector_ns), function() {
    "use strict";
    var $, e, t, n, i, r, a, o, s, l, j = function(e, l) {
        function m(e) {
            return Math.floor(e);
        }
        function t() {
            var e = w.params.autoplay, t = w.slides.eq(w.activeIndex);
            t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || w.params.autoplay), 
            w.autoplayTimeoutId = setTimeout(function() {
                w.params.loop ? (w.fixLoop(), w._slideNext(), w.emit("onAutoplay", w)) : w.isEnd ? l.autoplayStopOnLast ? w.stopAutoplay() : (w._slideTo(0), 
                w.emit("onAutoplay", w)) : (w._slideNext(), w.emit("onAutoplay", w));
            }, e);
        }
        function s(e, n) {
            var t = $(e.target);
            if (!t.is(n)) if ("string" == typeof n) t = t.parents(n); else if (n.nodeType) {
                var i;
                return t.parents().each(function(e, t) {
                    t === n && (i = n);
                }), i ? n : void 0;
            }
            if (0 !== t.length) return t[0];
        }
        function n(e, t) {
            t = t || {};
            var n = new (window.MutationObserver || window.WebkitMutationObserver)(function(e) {
                e.forEach(function(e) {
                    w.onResize(!0), w.emit("onObserverUpdate", w, e);
                });
            });
            n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), w.observers.push(n);
        }
        function i(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.keyCode || e.charCode;
            if (!w.params.allowSwipeToNext && (w.isHorizontal() && 39 === t || !w.isHorizontal() && 40 === t)) return !1;
            if (!w.params.allowSwipeToPrev && (w.isHorizontal() && 37 === t || !w.isHorizontal() && 38 === t)) return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    var n = !1;
                    if (0 < w.container.parents("." + w.params.slideClass).length && 0 === w.container.parents("." + w.params.slideActiveClass).length) return;
                    var i = window.pageXOffset, r = window.pageYOffset, a = window.innerWidth, o = window.innerHeight, s = w.container.offset();
                    w.rtl && (s.left = s.left - w.container[0].scrollLeft);
                    for (var l = [ [ s.left, s.top ], [ s.left + w.width, s.top ], [ s.left, s.top + w.height ], [ s.left + w.width, s.top + w.height ] ], u = 0; u < l.length; u++) {
                        var c = l[u];
                        c[0] >= i && c[0] <= i + a && c[1] >= r && c[1] <= r + o && (n = !0);
                    }
                    if (!n) return;
                }
                w.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 
                (39 === t && !w.rtl || 37 === t && w.rtl) && w.slideNext(), (37 === t && !w.rtl || 39 === t && w.rtl) && w.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 
                40 === t && w.slideNext(), 38 === t && w.slidePrev()), w.emit("onKeyPress", w, t);
            }
        }
        function r(e) {
            e.originalEvent && (e = e.originalEvent);
            var t, n, i, r, a, o = 0, s = w.rtl ? -1 : 1, l = (a = r = i = n = 0, "detail" in (t = e) && (i = t.detail), 
            "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), 
            "wheelDeltaX" in t && (n = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (n = i, 
            i = 0), r = 10 * n, a = 10 * i, "deltaY" in t && (a = t.deltaY), "deltaX" in t && (r = t.deltaX), 
            (r || a) && t.deltaMode && (1 === t.deltaMode ? (r *= 40, a *= 40) : (r *= 800, 
            a *= 800)), r && !n && (n = r < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                spinX: n,
                spinY: i,
                pixelX: r,
                pixelY: a
            });
            if (w.params.mousewheelForceToAxis) if (w.isHorizontal()) {
                if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return;
                o = l.pixelX * s;
            } else {
                if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return;
                o = l.pixelY;
            } else o = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * s : -l.pixelY;
            if (0 !== o) {
                if (w.params.mousewheelInvert && (o = -o), w.params.freeMode) {
                    var u = w.getWrapperTranslate() + o * w.params.mousewheelSensitivity, c = w.isBeginning, d = w.isEnd;
                    if (u >= w.minTranslate() && (u = w.minTranslate()), u <= w.maxTranslate() && (u = w.maxTranslate()), 
                    w.setWrapperTransition(0), w.setWrapperTranslate(u), w.updateProgress(), w.updateActiveIndex(), 
                    (!c && w.isBeginning || !d && w.isEnd) && w.updateClasses(), w.params.freeModeSticky ? (clearTimeout(w.mousewheel.timeout), 
                    w.mousewheel.timeout = setTimeout(function() {
                        w.slideReset();
                    }, 300)) : w.params.lazyLoading && w.lazy && w.lazy.load(), w.emit("onScroll", w, e), 
                    w.params.autoplay && w.params.autoplayDisableOnInteraction && w.stopAutoplay(), 
                    0 === u || u === w.maxTranslate()) return;
                } else {
                    if (60 < new window.Date().getTime() - w.mousewheel.lastScrollTime) if (o < 0) if (w.isEnd && !w.params.loop || w.animating) {
                        if (w.params.mousewheelReleaseOnEdges) return !0;
                    } else w.slideNext(), w.emit("onScroll", w, e); else if (w.isBeginning && !w.params.loop || w.animating) {
                        if (w.params.mousewheelReleaseOnEdges) return !0;
                    } else w.slidePrev(), w.emit("onScroll", w, e);
                    w.mousewheel.lastScrollTime = new window.Date().getTime();
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1;
            }
        }
        function a(e, t) {
            e = $(e);
            var n, i, r, a = w.rtl ? -1 : 1;
            n = e.attr("data-swiper-parallax") || "0", i = e.attr("data-swiper-parallax-x"), 
            r = e.attr("data-swiper-parallax-y"), i || r ? (i = i || "0", r = r || "0") : w.isHorizontal() ? (i = n, 
            r = "0") : (r = n, i = "0"), i = 0 <= i.indexOf("%") ? parseInt(i, 10) * t * a + "%" : i * t * a + "px", 
            r = 0 <= r.indexOf("%") ? parseInt(r, 10) * t + "%" : r * t + "px", e.transform("translate3d(" + i + ", " + r + ",0px)");
        }
        function o(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), 
            e;
        }
        if (!(this instanceof j)) return new j(e, l);
        var u = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            flip: {
                slideShadows: !0,
                limitRotation: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            zoom: !1,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: !0,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: "container",
            hashnav: !1,
            hashnavWatchState: !1,
            history: !1,
            replaceState: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            normalizeSlideIndex: !0,
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            paginationClickableClass: "swiper-pagination-clickable",
            paginationModifierClass: "swiper-pagination-",
            lazyLoadingClass: "swiper-lazy",
            lazyStatusLoadingClass: "swiper-lazy-loading",
            lazyStatusLoadedClass: "swiper-lazy-loaded",
            lazyPreloaderClass: "swiper-lazy-preloader",
            notificationClass: "swiper-notification",
            preloaderClass: "preloader",
            zoomContainerClass: "swiper-zoom-container",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        }, c = l && l.virtualTranslate;
        l = l || {};
        var d = {};
        for (var p in l) if ("object" != typeof l[p] || null === l[p] || l[p].nodeType || l[p] === window || l[p] === document || void 0 !== O && l[p] instanceof O || "undefined" != typeof jQuery && l[p] instanceof jQuery) d[p] = l[p]; else for (var f in d[p] = {}, 
        l[p]) d[p][f] = l[p][f];
        for (var h in u) if (void 0 === l[h]) l[h] = u[h]; else if ("object" == typeof l[h]) for (var g in u[h]) void 0 === l[h][g] && (l[h][g] = u[h][g]);
        var w = this;
        if (w.params = l, w.originalParams = d, w.classNames = [], void 0 !== $ && void 0 !== O && ($ = O), 
        (void 0 !== $ || ($ = void 0 === O ? window.Dom7 || window.Zepto || window.jQuery : O)) && (w.$ = $, 
        w.currentBreakpoint = void 0, w.getActiveBreakpoint = function() {
            if (!w.params.breakpoints) return !1;
            var e, t = !1, n = [];
            for (e in w.params.breakpoints) w.params.breakpoints.hasOwnProperty(e) && n.push(e);
            n.sort(function(e, t) {
                return parseInt(e, 10) > parseInt(t, 10);
            });
            for (var i = 0; i < n.length; i++) (e = n[i]) >= window.innerWidth && !t && (t = e);
            return t || "max";
        }, w.setBreakpoint = function() {
            var e = w.getActiveBreakpoint();
            if (e && w.currentBreakpoint !== e) {
                var t = e in w.params.breakpoints ? w.params.breakpoints[e] : w.originalParams, n = w.params.loop && t.slidesPerView !== w.params.slidesPerView;
                for (var i in t) w.params[i] = t[i];
                w.currentBreakpoint = e, n && w.destroyLoop && w.reLoop(!0);
            }
        }, w.params.breakpoints && w.setBreakpoint(), w.container = $(e), 0 !== w.container.length)) {
            if (1 < w.container.length) {
                var v = [];
                return w.container.each(function() {
                    v.push(new j(this, l));
                }), v;
            }
            (w.container[0].swiper = w).container.data("swiper", w), w.classNames.push(w.params.containerModifierClass + w.params.direction), 
            w.params.freeMode && w.classNames.push(w.params.containerModifierClass + "free-mode"), 
            w.support.flexbox || (w.classNames.push(w.params.containerModifierClass + "no-flexbox"), 
            w.params.slidesPerColumn = 1), w.params.autoHeight && w.classNames.push(w.params.containerModifierClass + "autoheight"), 
            (w.params.parallax || w.params.watchSlidesVisibility) && (w.params.watchSlidesProgress = !0), 
            w.params.touchReleaseOnEdges && (w.params.resistanceRatio = 0), 0 <= [ "cube", "coverflow", "flip" ].indexOf(w.params.effect) && (w.support.transforms3d ? (w.params.watchSlidesProgress = !0, 
            w.classNames.push(w.params.containerModifierClass + "3d")) : w.params.effect = "slide"), 
            "slide" !== w.params.effect && w.classNames.push(w.params.containerModifierClass + w.params.effect), 
            "cube" === w.params.effect && (w.params.resistanceRatio = 0, w.params.slidesPerView = 1, 
            w.params.slidesPerColumn = 1, w.params.slidesPerGroup = 1, w.params.centeredSlides = !1, 
            w.params.spaceBetween = 0, w.params.virtualTranslate = !0), "fade" !== w.params.effect && "flip" !== w.params.effect || (w.params.slidesPerView = 1, 
            w.params.slidesPerColumn = 1, w.params.slidesPerGroup = 1, w.params.watchSlidesProgress = !0, 
            void (w.params.spaceBetween = 0) === c && (w.params.virtualTranslate = !0)), w.params.grabCursor && w.support.touch && (w.params.grabCursor = !1), 
            w.wrapper = w.container.children("." + w.params.wrapperClass), w.params.pagination && (w.paginationContainer = $(w.params.pagination), 
            w.params.uniqueNavElements && "string" == typeof w.params.pagination && 1 < w.paginationContainer.length && 1 === w.container.find(w.params.pagination).length && (w.paginationContainer = w.container.find(w.params.pagination)), 
            "bullets" === w.params.paginationType && w.params.paginationClickable ? w.paginationContainer.addClass(w.params.paginationModifierClass + "clickable") : w.params.paginationClickable = !1, 
            w.paginationContainer.addClass(w.params.paginationModifierClass + w.params.paginationType)), 
            (w.params.nextButton || w.params.prevButton) && (w.params.nextButton && (w.nextButton = $(w.params.nextButton), 
            w.params.uniqueNavElements && "string" == typeof w.params.nextButton && 1 < w.nextButton.length && 1 === w.container.find(w.params.nextButton).length && (w.nextButton = w.container.find(w.params.nextButton))), 
            w.params.prevButton && (w.prevButton = $(w.params.prevButton), w.params.uniqueNavElements && "string" == typeof w.params.prevButton && 1 < w.prevButton.length && 1 === w.container.find(w.params.prevButton).length && (w.prevButton = w.container.find(w.params.prevButton)))), 
            w.isHorizontal = function() {
                return "horizontal" === w.params.direction;
            }, w.rtl = w.isHorizontal() && ("rtl" === w.container[0].dir.toLowerCase() || "rtl" === w.container.css("direction")), 
            w.rtl && w.classNames.push(w.params.containerModifierClass + "rtl"), w.rtl && (w.wrongRTL = "-webkit-box" === w.wrapper.css("display")), 
            1 < w.params.slidesPerColumn && w.classNames.push(w.params.containerModifierClass + "multirow"), 
            w.device.android && w.classNames.push(w.params.containerModifierClass + "android"), 
            w.container.addClass(w.classNames.join(" ")), w.translate = 0, w.progress = 0, w.velocity = 0, 
            w.lockSwipeToNext = function() {
                (w.params.allowSwipeToNext = !1) === w.params.allowSwipeToPrev && w.params.grabCursor && w.unsetGrabCursor();
            }, w.lockSwipeToPrev = function() {
                (w.params.allowSwipeToPrev = !1) === w.params.allowSwipeToNext && w.params.grabCursor && w.unsetGrabCursor();
            }, w.lockSwipes = function() {
                w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !1, w.params.grabCursor && w.unsetGrabCursor();
            }, w.unlockSwipeToNext = function() {
                (w.params.allowSwipeToNext = !0) === w.params.allowSwipeToPrev && w.params.grabCursor && w.setGrabCursor();
            }, w.unlockSwipeToPrev = function() {
                (w.params.allowSwipeToPrev = !0) === w.params.allowSwipeToNext && w.params.grabCursor && w.setGrabCursor();
            }, w.unlockSwipes = function() {
                w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !0, w.params.grabCursor && w.setGrabCursor();
            }, w.setGrabCursor = function(e) {
                w.container[0].style.cursor = "move", w.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", 
                w.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", w.container[0].style.cursor = e ? "grabbing" : "grab";
            }, w.unsetGrabCursor = function() {
                w.container[0].style.cursor = "";
            }, w.params.grabCursor && w.setGrabCursor(), w.imagesToLoad = [], w.imagesLoaded = 0, 
            w.loadImage = function(e, t, n, i, r, a) {
                function o() {
                    a && a();
                }
                var s;
                e.complete && r ? o() : t ? ((s = new window.Image()).onload = o, s.onerror = o, 
                i && (s.sizes = i), n && (s.srcset = n), t && (s.src = t)) : o();
            }, w.preloadImages = function() {
                function e() {
                    null != w && w && (void 0 !== w.imagesLoaded && w.imagesLoaded++, w.imagesLoaded === w.imagesToLoad.length && (w.params.updateOnImagesReady && w.update(), 
                    w.emit("onImagesReady", w)));
                }
                w.imagesToLoad = w.container.find("img");
                for (var t = 0; t < w.imagesToLoad.length; t++) w.loadImage(w.imagesToLoad[t], w.imagesToLoad[t].currentSrc || w.imagesToLoad[t].getAttribute("src"), w.imagesToLoad[t].srcset || w.imagesToLoad[t].getAttribute("srcset"), w.imagesToLoad[t].sizes || w.imagesToLoad[t].getAttribute("sizes"), !0, e);
            }, w.autoplayTimeoutId = void 0, w.autoplaying = !1, w.autoplayPaused = !1, w.startAutoplay = function() {
                return void 0 === w.autoplayTimeoutId && !!w.params.autoplay && !w.autoplaying && (w.autoplaying = !0, 
                w.emit("onAutoplayStart", w), void t());
            }, w.stopAutoplay = function(e) {
                w.autoplayTimeoutId && (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId), 
                w.autoplaying = !1, w.autoplayTimeoutId = void 0, w.emit("onAutoplayStop", w));
            }, w.pauseAutoplay = function(e) {
                w.autoplayPaused || (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId), w.autoplayPaused = !0, 
                0 === e ? (w.autoplayPaused = !1, t()) : w.wrapper.transitionEnd(function() {
                    w && (w.autoplayPaused = !1, w.autoplaying ? t() : w.stopAutoplay());
                }));
            }, w.minTranslate = function() {
                return -w.snapGrid[0];
            }, w.maxTranslate = function() {
                return -w.snapGrid[w.snapGrid.length - 1];
            }, w.updateAutoHeight = function() {
                var e, t = [], n = 0;
                if ("auto" !== w.params.slidesPerView && 1 < w.params.slidesPerView) for (e = 0; e < Math.ceil(w.params.slidesPerView); e++) {
                    var i = w.activeIndex + e;
                    if (i > w.slides.length) break;
                    t.push(w.slides.eq(i)[0]);
                } else t.push(w.slides.eq(w.activeIndex)[0]);
                for (e = 0; e < t.length; e++) if (void 0 !== t[e]) {
                    var r = t[e].offsetHeight;
                    n = n < r ? r : n;
                }
                n && w.wrapper.css("height", n + "px");
            }, w.updateContainerSize = function() {
                var e, t;
                e = void 0 !== w.params.width ? w.params.width : w.container[0].clientWidth, t = void 0 !== w.params.height ? w.params.height : w.container[0].clientHeight, 
                0 === e && w.isHorizontal() || 0 === t && !w.isHorizontal() || (e = e - parseInt(w.container.css("padding-left"), 10) - parseInt(w.container.css("padding-right"), 10), 
                t = t - parseInt(w.container.css("padding-top"), 10) - parseInt(w.container.css("padding-bottom"), 10), 
                w.width = e, w.height = t, w.size = w.isHorizontal() ? w.width : w.height);
            }, w.updateSlidesSize = function() {
                w.slides = w.wrapper.children("." + w.params.slideClass), w.snapGrid = [], w.slidesGrid = [], 
                w.slidesSizesGrid = [];
                var e, t = w.params.spaceBetween, n = -w.params.slidesOffsetBefore, i = 0, r = 0;
                if (void 0 !== w.size) {
                    var a;
                    "string" == typeof t && 0 <= t.indexOf("%") && (t = parseFloat(t.replace("%", "")) / 100 * w.size), 
                    w.virtualSize = -t, w.rtl ? w.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : w.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    }), 1 < w.params.slidesPerColumn && (a = Math.floor(w.slides.length / w.params.slidesPerColumn) === w.slides.length / w.params.slidesPerColumn ? w.slides.length : Math.ceil(w.slides.length / w.params.slidesPerColumn) * w.params.slidesPerColumn, 
                    "auto" !== w.params.slidesPerView && "row" === w.params.slidesPerColumnFill && (a = Math.max(a, w.params.slidesPerView * w.params.slidesPerColumn)));
                    var o, s, l = w.params.slidesPerColumn, u = a / l, c = u - (w.params.slidesPerColumn * u - w.slides.length);
                    for (e = 0; e < w.slides.length; e++) {
                        o = 0;
                        var d, p, f, h = w.slides.eq(e);
                        if (1 < w.params.slidesPerColumn) "column" === w.params.slidesPerColumnFill ? (f = e - (p = Math.floor(e / l)) * l, 
                        (c < p || p === c && f === l - 1) && ++f >= l && (f = 0, p++), d = p + f * a / l, 
                        h.css({
                            "-webkit-box-ordinal-group": d,
                            "-moz-box-ordinal-group": d,
                            "-ms-flex-order": d,
                            "-webkit-order": d,
                            order: d
                        })) : p = e - (f = Math.floor(e / u)) * u, h.css("margin-" + (w.isHorizontal() ? "top" : "left"), 0 !== f && w.params.spaceBetween && w.params.spaceBetween + "px").attr("data-swiper-column", p).attr("data-swiper-row", f);
                        "none" !== h.css("display") && ("auto" === w.params.slidesPerView ? (o = w.isHorizontal() ? h.outerWidth(!0) : h.outerHeight(!0), 
                        w.params.roundLengths && (o = m(o))) : (o = (w.size - (w.params.slidesPerView - 1) * t) / w.params.slidesPerView, 
                        w.params.roundLengths && (o = m(o)), w.isHorizontal() ? w.slides[e].style.width = o + "px" : w.slides[e].style.height = o + "px"), 
                        w.slides[e].swiperSlideSize = o, w.slidesSizesGrid.push(o), w.params.centeredSlides ? (n = n + o / 2 + i / 2 + t, 
                        0 === i && 0 !== e && (n = n - w.size / 2 - t), 0 === e && (n = n - w.size / 2 - t), 
                        Math.abs(n) < .001 && (n = 0), r % w.params.slidesPerGroup == 0 && w.snapGrid.push(n), 
                        w.slidesGrid.push(n)) : (r % w.params.slidesPerGroup == 0 && w.snapGrid.push(n), 
                        w.slidesGrid.push(n), n = n + o + t), w.virtualSize += o + t, i = o, r++);
                    }
                    if (w.virtualSize = Math.max(w.virtualSize, w.size) + w.params.slidesOffsetAfter, 
                    w.rtl && w.wrongRTL && ("slide" === w.params.effect || "coverflow" === w.params.effect) && w.wrapper.css({
                        width: w.virtualSize + w.params.spaceBetween + "px"
                    }), w.support.flexbox && !w.params.setWrapperSize || (w.isHorizontal() ? w.wrapper.css({
                        width: w.virtualSize + w.params.spaceBetween + "px"
                    }) : w.wrapper.css({
                        height: w.virtualSize + w.params.spaceBetween + "px"
                    })), 1 < w.params.slidesPerColumn && (w.virtualSize = (o + w.params.spaceBetween) * a, 
                    w.virtualSize = Math.ceil(w.virtualSize / w.params.slidesPerColumn) - w.params.spaceBetween, 
                    w.isHorizontal() ? w.wrapper.css({
                        width: w.virtualSize + w.params.spaceBetween + "px"
                    }) : w.wrapper.css({
                        height: w.virtualSize + w.params.spaceBetween + "px"
                    }), w.params.centeredSlides)) {
                        for (s = [], e = 0; e < w.snapGrid.length; e++) w.snapGrid[e] < w.virtualSize + w.snapGrid[0] && s.push(w.snapGrid[e]);
                        w.snapGrid = s;
                    }
                    if (!w.params.centeredSlides) {
                        for (s = [], e = 0; e < w.snapGrid.length; e++) w.snapGrid[e] <= w.virtualSize - w.size && s.push(w.snapGrid[e]);
                        w.snapGrid = s, 1 < Math.floor(w.virtualSize - w.size) - Math.floor(w.snapGrid[w.snapGrid.length - 1]) && w.snapGrid.push(w.virtualSize - w.size);
                    }
                    0 === w.snapGrid.length && (w.snapGrid = [ 0 ]), 0 !== w.params.spaceBetween && (w.isHorizontal() ? w.rtl ? w.slides.css({
                        marginLeft: t + "px"
                    }) : w.slides.css({
                        marginRight: t + "px"
                    }) : w.slides.css({
                        marginBottom: t + "px"
                    })), w.params.watchSlidesProgress && w.updateSlidesOffset();
                }
            }, w.updateSlidesOffset = function() {
                for (var e = 0; e < w.slides.length; e++) w.slides[e].swiperSlideOffset = w.isHorizontal() ? w.slides[e].offsetLeft : w.slides[e].offsetTop;
            }, w.currentSlidesPerView = function() {
                var e, t, n = 1;
                if (w.params.centeredSlides) {
                    var i, r = w.slides[w.activeIndex].swiperSlideSize;
                    for (e = w.activeIndex + 1; e < w.slides.length; e++) w.slides[e] && !i && (n++, 
                    (r += w.slides[e].swiperSlideSize) > w.size && (i = !0));
                    for (t = w.activeIndex - 1; 0 <= t; t--) w.slides[t] && !i && (n++, (r += w.slides[t].swiperSlideSize) > w.size && (i = !0));
                } else for (e = w.activeIndex + 1; e < w.slides.length; e++) w.slidesGrid[e] - w.slidesGrid[w.activeIndex] < w.size && n++;
                return n;
            }, w.updateSlidesProgress = function(e) {
                if (void 0 === e && (e = w.translate || 0), 0 !== w.slides.length) {
                    void 0 === w.slides[0].swiperSlideOffset && w.updateSlidesOffset();
                    var t = -e;
                    w.rtl && (t = e), w.slides.removeClass(w.params.slideVisibleClass);
                    for (var n = 0; n < w.slides.length; n++) {
                        var i = w.slides[n], r = (t + (w.params.centeredSlides ? w.minTranslate() : 0) - i.swiperSlideOffset) / (i.swiperSlideSize + w.params.spaceBetween);
                        if (w.params.watchSlidesVisibility) {
                            var a = -(t - i.swiperSlideOffset), o = a + w.slidesSizesGrid[n];
                            (0 <= a && a < w.size || 0 < o && o <= w.size || a <= 0 && o >= w.size) && w.slides.eq(n).addClass(w.params.slideVisibleClass);
                        }
                        i.progress = w.rtl ? -r : r;
                    }
                }
            }, w.updateProgress = function(e) {
                void 0 === e && (e = w.translate || 0);
                var t = w.maxTranslate() - w.minTranslate(), n = w.isBeginning, i = w.isEnd;
                0 === t ? (w.progress = 0, w.isBeginning = w.isEnd = !0) : (w.progress = (e - w.minTranslate()) / t, 
                w.isBeginning = w.progress <= 0, w.isEnd = 1 <= w.progress), w.isBeginning && !n && w.emit("onReachBeginning", w), 
                w.isEnd && !i && w.emit("onReachEnd", w), w.params.watchSlidesProgress && w.updateSlidesProgress(e), 
                w.emit("onProgress", w, w.progress);
            }, w.updateActiveIndex = function() {
                var e, t, n, i = w.rtl ? w.translate : -w.translate;
                for (t = 0; t < w.slidesGrid.length; t++) void 0 !== w.slidesGrid[t + 1] ? i >= w.slidesGrid[t] && i < w.slidesGrid[t + 1] - (w.slidesGrid[t + 1] - w.slidesGrid[t]) / 2 ? e = t : i >= w.slidesGrid[t] && i < w.slidesGrid[t + 1] && (e = t + 1) : i >= w.slidesGrid[t] && (e = t);
                w.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), (n = Math.floor(e / w.params.slidesPerGroup)) >= w.snapGrid.length && (n = w.snapGrid.length - 1), 
                e !== w.activeIndex && (w.snapIndex = n, w.previousIndex = w.activeIndex, w.activeIndex = e, 
                w.updateClasses(), w.updateRealIndex());
            }, w.updateRealIndex = function() {
                w.realIndex = parseInt(w.slides.eq(w.activeIndex).attr("data-swiper-slide-index") || w.activeIndex, 10);
            }, w.updateClasses = function() {
                w.slides.removeClass(w.params.slideActiveClass + " " + w.params.slideNextClass + " " + w.params.slidePrevClass + " " + w.params.slideDuplicateActiveClass + " " + w.params.slideDuplicateNextClass + " " + w.params.slideDuplicatePrevClass);
                var e = w.slides.eq(w.activeIndex);
                e.addClass(w.params.slideActiveClass), l.loop && (e.hasClass(w.params.slideDuplicateClass) ? w.wrapper.children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + w.realIndex + '"]').addClass(w.params.slideDuplicateActiveClass) : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + w.realIndex + '"]').addClass(w.params.slideDuplicateActiveClass));
                var t = e.next("." + w.params.slideClass).addClass(w.params.slideNextClass);
                w.params.loop && 0 === t.length && (t = w.slides.eq(0)).addClass(w.params.slideNextClass);
                var n = e.prev("." + w.params.slideClass).addClass(w.params.slidePrevClass);
                if (w.params.loop && 0 === n.length && (n = w.slides.eq(-1)).addClass(w.params.slidePrevClass), 
                l.loop && (t.hasClass(w.params.slideDuplicateClass) ? w.wrapper.children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicateNextClass) : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicateNextClass), 
                n.hasClass(w.params.slideDuplicateClass) ? w.wrapper.children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicatePrevClass) : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicatePrevClass)), 
                w.paginationContainer && 0 < w.paginationContainer.length) {
                    var i, r = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length;
                    if (w.params.loop ? ((i = Math.ceil((w.activeIndex - w.loopedSlides) / w.params.slidesPerGroup)) > w.slides.length - 1 - 2 * w.loopedSlides && (i -= w.slides.length - 2 * w.loopedSlides), 
                    r - 1 < i && (i -= r), i < 0 && "bullets" !== w.params.paginationType && (i = r + i)) : i = void 0 !== w.snapIndex ? w.snapIndex : w.activeIndex || 0, 
                    "bullets" === w.params.paginationType && w.bullets && 0 < w.bullets.length && (w.bullets.removeClass(w.params.bulletActiveClass), 
                    1 < w.paginationContainer.length ? w.bullets.each(function() {
                        $(this).index() === i && $(this).addClass(w.params.bulletActiveClass);
                    }) : w.bullets.eq(i).addClass(w.params.bulletActiveClass)), "fraction" === w.params.paginationType && (w.paginationContainer.find("." + w.params.paginationCurrentClass).text(i + 1), 
                    w.paginationContainer.find("." + w.params.paginationTotalClass).text(r)), "progress" === w.params.paginationType) {
                        var a = (i + 1) / r, o = a, s = 1;
                        w.isHorizontal() || (s = a, o = 1), w.paginationContainer.find("." + w.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + o + ") scaleY(" + s + ")").transition(w.params.speed);
                    }
                    "custom" === w.params.paginationType && w.params.paginationCustomRender && (w.paginationContainer.html(w.params.paginationCustomRender(w, i + 1, r)), 
                    w.emit("onPaginationRendered", w, w.paginationContainer[0]));
                }
                w.params.loop || (w.params.prevButton && w.prevButton && 0 < w.prevButton.length && (w.isBeginning ? (w.prevButton.addClass(w.params.buttonDisabledClass), 
                w.params.a11y && w.a11y && w.a11y.disable(w.prevButton)) : (w.prevButton.removeClass(w.params.buttonDisabledClass), 
                w.params.a11y && w.a11y && w.a11y.enable(w.prevButton))), w.params.nextButton && w.nextButton && 0 < w.nextButton.length && (w.isEnd ? (w.nextButton.addClass(w.params.buttonDisabledClass), 
                w.params.a11y && w.a11y && w.a11y.disable(w.nextButton)) : (w.nextButton.removeClass(w.params.buttonDisabledClass), 
                w.params.a11y && w.a11y && w.a11y.enable(w.nextButton))));
            }, w.updatePagination = function() {
                if (w.params.pagination && w.paginationContainer && 0 < w.paginationContainer.length) {
                    var e = "";
                    if ("bullets" === w.params.paginationType) {
                        for (var t = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length, n = 0; n < t; n++) e += w.params.paginationBulletRender ? w.params.paginationBulletRender(w, n, w.params.bulletClass) : "<" + w.params.paginationElement + ' class="' + w.params.bulletClass + '"></' + w.params.paginationElement + ">";
                        w.paginationContainer.html(e), w.bullets = w.paginationContainer.find("." + w.params.bulletClass), 
                        w.params.paginationClickable && w.params.a11y && w.a11y && w.a11y.initPagination();
                    }
                    "fraction" === w.params.paginationType && (e = w.params.paginationFractionRender ? w.params.paginationFractionRender(w, w.params.paginationCurrentClass, w.params.paginationTotalClass) : '<span class="' + w.params.paginationCurrentClass + '"></span> / <span class="' + w.params.paginationTotalClass + '"></span>', 
                    w.paginationContainer.html(e)), "progress" === w.params.paginationType && (e = w.params.paginationProgressRender ? w.params.paginationProgressRender(w, w.params.paginationProgressbarClass) : '<span class="' + w.params.paginationProgressbarClass + '"></span>', 
                    w.paginationContainer.html(e)), "custom" !== w.params.paginationType && w.emit("onPaginationRendered", w, w.paginationContainer[0]);
                }
            }, w.update = function(e) {
                function t() {
                    w.rtl, w.translate, n = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate()), 
                    w.setWrapperTranslate(n), w.updateActiveIndex(), w.updateClasses();
                }
                var n;
                w && (w.updateContainerSize(), w.updateSlidesSize(), w.updateProgress(), w.updatePagination(), 
                w.updateClasses(), w.params.scrollbar && w.scrollbar && w.scrollbar.set(), e ? (w.controller && w.controller.spline && (w.controller.spline = void 0), 
                w.params.freeMode ? (t(), w.params.autoHeight && w.updateAutoHeight()) : (("auto" === w.params.slidesPerView || 1 < w.params.slidesPerView) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0)) || t()) : w.params.autoHeight && w.updateAutoHeight());
            }, w.onResize = function(e) {
                w.params.onBeforeResize && w.params.onBeforeResize(w), w.params.breakpoints && w.setBreakpoint();
                var t = w.params.allowSwipeToPrev, n = w.params.allowSwipeToNext;
                w.params.allowSwipeToPrev = w.params.allowSwipeToNext = !0, w.updateContainerSize(), 
                w.updateSlidesSize(), ("auto" === w.params.slidesPerView || w.params.freeMode || e) && w.updatePagination(), 
                w.params.scrollbar && w.scrollbar && w.scrollbar.set(), w.controller && w.controller.spline && (w.controller.spline = void 0);
                var i = !1;
                if (w.params.freeMode) {
                    var r = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate());
                    w.setWrapperTranslate(r), w.updateActiveIndex(), w.updateClasses(), w.params.autoHeight && w.updateAutoHeight();
                } else w.updateClasses(), i = ("auto" === w.params.slidesPerView || 1 < w.params.slidesPerView) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0);
                w.params.lazyLoading && !i && w.lazy && w.lazy.load(), w.params.allowSwipeToPrev = t, 
                w.params.allowSwipeToNext = n, w.params.onAfterResize && w.params.onAfterResize(w);
            }, w.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            }, window.navigator.pointerEnabled ? w.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (w.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            }), w.touchEvents = {
                start: w.support.touch || !w.params.simulateTouch ? "touchstart" : w.touchEventsDesktop.start,
                move: w.support.touch || !w.params.simulateTouch ? "touchmove" : w.touchEventsDesktop.move,
                end: w.support.touch || !w.params.simulateTouch ? "touchend" : w.touchEventsDesktop.end
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === w.params.touchEventsTarget ? w.container : w.wrapper).addClass("swiper-wp8-" + w.params.direction), 
            w.initEvents = function(e) {
                var t = e ? "off" : "on", n = e ? "removeEventListener" : "addEventListener", i = "container" === w.params.touchEventsTarget ? w.container[0] : w.wrapper[0], r = w.support.touch ? i : document, a = !!w.params.nested;
                if (w.browser.ie) i[n](w.touchEvents.start, w.onTouchStart, !1), r[n](w.touchEvents.move, w.onTouchMove, a), 
                r[n](w.touchEvents.end, w.onTouchEnd, !1); else {
                    if (w.support.touch) {
                        var o = !("touchstart" !== w.touchEvents.start || !w.support.passiveListener || !w.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        i[n](w.touchEvents.start, w.onTouchStart, o), i[n](w.touchEvents.move, w.onTouchMove, a), 
                        i[n](w.touchEvents.end, w.onTouchEnd, o);
                    }
                    (l.simulateTouch && !w.device.ios && !w.device.android || l.simulateTouch && !w.support.touch && w.device.ios) && (i[n]("mousedown", w.onTouchStart, !1), 
                    document[n]("mousemove", w.onTouchMove, a), document[n]("mouseup", w.onTouchEnd, !1));
                }
                window[n]("resize", w.onResize), w.params.nextButton && w.nextButton && 0 < w.nextButton.length && (w.nextButton[t]("click", w.onClickNext), 
                w.params.a11y && w.a11y && w.nextButton[t]("keydown", w.a11y.onEnterKey)), w.params.prevButton && w.prevButton && 0 < w.prevButton.length && (w.prevButton[t]("click", w.onClickPrev), 
                w.params.a11y && w.a11y && w.prevButton[t]("keydown", w.a11y.onEnterKey)), w.params.pagination && w.params.paginationClickable && (w.paginationContainer[t]("click", "." + w.params.bulletClass, w.onClickIndex), 
                w.params.a11y && w.a11y && w.paginationContainer[t]("keydown", "." + w.params.bulletClass, w.a11y.onEnterKey)), 
                (w.params.preventClicks || w.params.preventClicksPropagation) && i[n]("click", w.preventClicks, !0);
            }, w.attachEvents = function() {
                w.initEvents();
            }, w.detachEvents = function() {
                w.initEvents(!0);
            }, w.allowClick = !0, w.preventClicks = function(e) {
                w.allowClick || (w.params.preventClicks && e.preventDefault(), w.params.preventClicksPropagation && w.animating && (e.stopPropagation(), 
                e.stopImmediatePropagation()));
            }, w.onClickNext = function(e) {
                e.preventDefault(), w.isEnd && !w.params.loop || w.slideNext();
            }, w.onClickPrev = function(e) {
                e.preventDefault(), w.isBeginning && !w.params.loop || w.slidePrev();
            }, w.onClickIndex = function(e) {
                e.preventDefault();
                var t = $(this).index() * w.params.slidesPerGroup;
                w.params.loop && (t += w.loopedSlides), w.slideTo(t);
            }, w.updateClickedSlide = function(e) {
                var t = s(e, "." + w.params.slideClass), n = !1;
                if (t) for (var i = 0; i < w.slides.length; i++) w.slides[i] === t && (n = !0);
                if (!t || !n) return w.clickedSlide = void 0, void (w.clickedIndex = void 0);
                if (w.clickedSlide = t, w.clickedIndex = $(t).index(), w.params.slideToClickedSlide && void 0 !== w.clickedIndex && w.clickedIndex !== w.activeIndex) {
                    var r, a = w.clickedIndex, o = "auto" === w.params.slidesPerView ? w.currentSlidesPerView() : w.params.slidesPerView;
                    if (w.params.loop) {
                        if (w.animating) return;
                        r = parseInt($(w.clickedSlide).attr("data-swiper-slide-index"), 10), w.params.centeredSlides ? a < w.loopedSlides - o / 2 || a > w.slides.length - w.loopedSlides + o / 2 ? (w.fixLoop(), 
                        a = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + w.params.slideDuplicateClass + ")").eq(0).index(), 
                        setTimeout(function() {
                            w.slideTo(a);
                        }, 0)) : w.slideTo(a) : a > w.slides.length - o ? (w.fixLoop(), a = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + w.params.slideDuplicateClass + ")").eq(0).index(), 
                        setTimeout(function() {
                            w.slideTo(a);
                        }, 0)) : w.slideTo(a);
                    } else w.slideTo(a);
                }
            };
            var x, T, C, S, y, E, k, b, N, D, A, L, M = "input, select, textarea, button, video", z = Date.now(), P = [];
            for (var I in w.animating = !1, w.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            }, w.onTouchStart = function(e) {
                if (e.originalEvent && (e = e.originalEvent), (A = "touchstart" === e.type) || !("which" in e) || 3 !== e.which) {
                    if (w.params.noSwiping && s(e, "." + w.params.noSwipingClass)) return void (w.allowClick = !0);
                    if (!w.params.swipeHandler || s(e, w.params.swipeHandler)) {
                        var t = w.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n = w.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                        if (!(w.device.ios && w.params.iOSEdgeSwipeDetection && t <= w.params.iOSEdgeSwipeThreshold)) {
                            if (C = !(T = !(x = !0)), L = y = void 0, w.touches.startX = t, w.touches.startY = n, 
                            S = Date.now(), w.allowClick = !0, w.updateContainerSize(), w.swipeDirection = void 0, 
                            0 < w.params.threshold && (b = !1), "touchstart" !== e.type) {
                                var i = !0;
                                $(e.target).is(M) && (i = !1), document.activeElement && $(document.activeElement).is(M) && document.activeElement.blur(), 
                                i && e.preventDefault();
                            }
                            w.emit("onTouchStart", w, e);
                        }
                    }
                }
            }, w.onTouchMove = function(e) {
                if (e.originalEvent && (e = e.originalEvent), !A || "mousemove" !== e.type) {
                    if (e.preventedByNestedSwiper) return w.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, 
                    void (w.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                    if (w.params.onlyExternal) return w.allowClick = !1, void (x && (w.touches.startX = w.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, 
                    w.touches.startY = w.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, 
                    S = Date.now()));
                    if (A && w.params.touchReleaseOnEdges && !w.params.loop) if (w.isHorizontal()) {
                        if (w.touches.currentX < w.touches.startX && w.translate <= w.maxTranslate() || w.touches.currentX > w.touches.startX && w.translate >= w.minTranslate()) return;
                    } else if (w.touches.currentY < w.touches.startY && w.translate <= w.maxTranslate() || w.touches.currentY > w.touches.startY && w.translate >= w.minTranslate()) return;
                    if (A && document.activeElement && e.target === document.activeElement && $(e.target).is(M)) return T = !0, 
                    void (w.allowClick = !1);
                    if (C && w.emit("onTouchMove", w, e), !(e.targetTouches && 1 < e.targetTouches.length)) {
                        var t;
                        if (w.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, 
                        w.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, 
                        void 0 === y) w.isHorizontal() && w.touches.currentY === w.touches.startY || !w.isHorizontal() && w.touches.currentX === w.touches.startX ? y = !1 : (t = 180 * Math.atan2(Math.abs(w.touches.currentY - w.touches.startY), Math.abs(w.touches.currentX - w.touches.startX)) / Math.PI, 
                        y = w.isHorizontal() ? t > w.params.touchAngle : 90 - t > w.params.touchAngle);
                        if (y && w.emit("onTouchMoveOpposite", w, e), void 0 === L && (w.touches.currentX === w.touches.startX && w.touches.currentY === w.touches.startY || (L = !0)), 
                        x) {
                            if (y) return void (x = !1);
                            if (L) {
                                w.allowClick = !1, w.emit("onSliderMove", w, e), e.preventDefault(), w.params.touchMoveStopPropagation && !w.params.nested && e.stopPropagation(), 
                                T || (l.loop && w.fixLoop(), k = w.getWrapperTranslate(), w.setWrapperTransition(0), 
                                w.animating && w.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), 
                                w.params.autoplay && w.autoplaying && (w.params.autoplayDisableOnInteraction ? w.stopAutoplay() : w.pauseAutoplay()), 
                                D = !1, !w.params.grabCursor || !0 !== w.params.allowSwipeToNext && !0 !== w.params.allowSwipeToPrev || w.setGrabCursor(!0)), 
                                T = !0;
                                var n = w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY;
                                n *= w.params.touchRatio, w.rtl && (n = -n), w.swipeDirection = 0 < n ? "prev" : "next", 
                                E = n + k;
                                var i = !0;
                                if (0 < n && E > w.minTranslate() ? (i = !1, w.params.resistance && (E = w.minTranslate() - 1 + Math.pow(-w.minTranslate() + k + n, w.params.resistanceRatio))) : n < 0 && E < w.maxTranslate() && (i = !1, 
                                w.params.resistance && (E = w.maxTranslate() + 1 - Math.pow(w.maxTranslate() - k - n, w.params.resistanceRatio))), 
                                i && (e.preventedByNestedSwiper = !0), !w.params.allowSwipeToNext && "next" === w.swipeDirection && E < k && (E = k), 
                                !w.params.allowSwipeToPrev && "prev" === w.swipeDirection && k < E && (E = k), 0 < w.params.threshold) {
                                    if (!(Math.abs(n) > w.params.threshold || b)) return void (E = k);
                                    if (!b) return b = !0, w.touches.startX = w.touches.currentX, w.touches.startY = w.touches.currentY, 
                                    E = k, void (w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY);
                                }
                                w.params.followFinger && ((w.params.freeMode || w.params.watchSlidesProgress) && w.updateActiveIndex(), 
                                w.params.freeMode && (0 === P.length && P.push({
                                    position: w.touches[w.isHorizontal() ? "startX" : "startY"],
                                    time: S
                                }), P.push({
                                    position: w.touches[w.isHorizontal() ? "currentX" : "currentY"],
                                    time: new window.Date().getTime()
                                })), w.updateProgress(E), w.setWrapperTranslate(E));
                            }
                        }
                    }
                }
            }, w.onTouchEnd = function(e) {
                if (e.originalEvent && (e = e.originalEvent), C && w.emit("onTouchEnd", w, e), C = !1, 
                x) {
                    w.params.grabCursor && T && x && (!0 === w.params.allowSwipeToNext || !0 === w.params.allowSwipeToPrev) && w.setGrabCursor(!1);
                    var t, n = Date.now(), i = n - S;
                    if (w.allowClick && (w.updateClickedSlide(e), w.emit("onTap", w, e), i < 300 && 300 < n - z && (N && clearTimeout(N), 
                    N = setTimeout(function() {
                        w && (w.params.paginationHide && 0 < w.paginationContainer.length && !$(e.target).hasClass(w.params.bulletClass) && w.paginationContainer.toggleClass(w.params.paginationHiddenClass), 
                        w.emit("onClick", w, e));
                    }, 300)), i < 300 && n - z < 300 && (N && clearTimeout(N), w.emit("onDoubleTap", w, e))), 
                    z = Date.now(), setTimeout(function() {
                        w && (w.allowClick = !0);
                    }, 0), !x || !T || !w.swipeDirection || 0 === w.touches.diff || E === k) return void (x = T = !1);
                    if (x = T = !1, t = w.params.followFinger ? w.rtl ? w.translate : -w.translate : -E, 
                    w.params.freeMode) {
                        if (t < -w.minTranslate()) return void w.slideTo(w.activeIndex);
                        if (t > -w.maxTranslate()) return void (w.slides.length < w.snapGrid.length ? w.slideTo(w.snapGrid.length - 1) : w.slideTo(w.slides.length - 1));
                        if (w.params.freeModeMomentum) {
                            if (1 < P.length) {
                                var r = P.pop(), a = P.pop(), o = r.position - a.position, s = r.time - a.time;
                                w.velocity = o / s, w.velocity = w.velocity / 2, Math.abs(w.velocity) < w.params.freeModeMinimumVelocity && (w.velocity = 0), 
                                (150 < s || 300 < new window.Date().getTime() - r.time) && (w.velocity = 0);
                            } else w.velocity = 0;
                            w.velocity = w.velocity * w.params.freeModeMomentumVelocityRatio, P.length = 0;
                            var l = 1e3 * w.params.freeModeMomentumRatio, u = w.velocity * l, c = w.translate + u;
                            w.rtl && (c = -c);
                            var d, p = !1, f = 20 * Math.abs(w.velocity) * w.params.freeModeMomentumBounceRatio;
                            if (c < w.maxTranslate()) w.params.freeModeMomentumBounce ? (c + w.maxTranslate() < -f && (c = w.maxTranslate() - f), 
                            d = w.maxTranslate(), D = p = !0) : c = w.maxTranslate(); else if (c > w.minTranslate()) w.params.freeModeMomentumBounce ? (c - w.minTranslate() > f && (c = w.minTranslate() + f), 
                            d = w.minTranslate(), D = p = !0) : c = w.minTranslate(); else if (w.params.freeModeSticky) {
                                var h, m = 0;
                                for (m = 0; m < w.snapGrid.length; m += 1) if (w.snapGrid[m] > -c) {
                                    h = m;
                                    break;
                                }
                                c = Math.abs(w.snapGrid[h] - c) < Math.abs(w.snapGrid[h - 1] - c) || "next" === w.swipeDirection ? w.snapGrid[h] : w.snapGrid[h - 1], 
                                w.rtl || (c = -c);
                            }
                            if (0 !== w.velocity) l = w.rtl ? Math.abs((-c - w.translate) / w.velocity) : Math.abs((c - w.translate) / w.velocity); else if (w.params.freeModeSticky) return void w.slideReset();
                            w.params.freeModeMomentumBounce && p ? (w.updateProgress(d), w.setWrapperTransition(l), 
                            w.setWrapperTranslate(c), w.onTransitionStart(), w.animating = !0, w.wrapper.transitionEnd(function() {
                                w && D && (w.emit("onMomentumBounce", w), w.setWrapperTransition(w.params.speed), 
                                w.setWrapperTranslate(d), w.wrapper.transitionEnd(function() {
                                    w && w.onTransitionEnd();
                                }));
                            })) : w.velocity ? (w.updateProgress(c), w.setWrapperTransition(l), w.setWrapperTranslate(c), 
                            w.onTransitionStart(), w.animating || (w.animating = !0, w.wrapper.transitionEnd(function() {
                                w && w.onTransitionEnd();
                            }))) : w.updateProgress(c), w.updateActiveIndex();
                        }
                        return void ((!w.params.freeModeMomentum || i >= w.params.longSwipesMs) && (w.updateProgress(), 
                        w.updateActiveIndex()));
                    }
                    var g, v = 0, y = w.slidesSizesGrid[0];
                    for (g = 0; g < w.slidesGrid.length; g += w.params.slidesPerGroup) void 0 !== w.slidesGrid[g + w.params.slidesPerGroup] ? t >= w.slidesGrid[g] && t < w.slidesGrid[g + w.params.slidesPerGroup] && (v = g, 
                    y = w.slidesGrid[g + w.params.slidesPerGroup] - w.slidesGrid[g]) : t >= w.slidesGrid[g] && (v = g, 
                    y = w.slidesGrid[w.slidesGrid.length - 1] - w.slidesGrid[w.slidesGrid.length - 2]);
                    var b = (t - w.slidesGrid[v]) / y;
                    if (i > w.params.longSwipesMs) {
                        if (!w.params.longSwipes) return void w.slideTo(w.activeIndex);
                        "next" === w.swipeDirection && (b >= w.params.longSwipesRatio ? w.slideTo(v + w.params.slidesPerGroup) : w.slideTo(v)), 
                        "prev" === w.swipeDirection && (b > 1 - w.params.longSwipesRatio ? w.slideTo(v + w.params.slidesPerGroup) : w.slideTo(v));
                    } else {
                        if (!w.params.shortSwipes) return void w.slideTo(w.activeIndex);
                        "next" === w.swipeDirection && w.slideTo(v + w.params.slidesPerGroup), "prev" === w.swipeDirection && w.slideTo(v);
                    }
                }
            }, w._slideTo = function(e, t) {
                return w.slideTo(e, t, !0, !0);
            }, w.slideTo = function(e, t, n, i) {
                void 0 === n && (n = !0), void 0 === e && (e = 0), e < 0 && (e = 0), w.snapIndex = Math.floor(e / w.params.slidesPerGroup), 
                w.snapIndex >= w.snapGrid.length && (w.snapIndex = w.snapGrid.length - 1);
                var r = -w.snapGrid[w.snapIndex];
                if (w.params.autoplay && w.autoplaying && (i || !w.params.autoplayDisableOnInteraction ? w.pauseAutoplay(t) : w.stopAutoplay()), 
                w.updateProgress(r), w.params.normalizeSlideIndex) for (var a = 0; a < w.slidesGrid.length; a++) -Math.floor(100 * r) >= Math.floor(100 * w.slidesGrid[a]) && (e = a);
                return !(!w.params.allowSwipeToNext && r < w.translate && r < w.minTranslate() || !w.params.allowSwipeToPrev && r > w.translate && r > w.maxTranslate() && (w.activeIndex || 0) !== e || (void 0 === t && (t = w.params.speed), 
                w.previousIndex = w.activeIndex || 0, w.activeIndex = e, w.updateRealIndex(), w.rtl && -r === w.translate || !w.rtl && r === w.translate ? (w.params.autoHeight && w.updateAutoHeight(), 
                w.updateClasses(), "slide" !== w.params.effect && w.setWrapperTranslate(r), 1) : (w.updateClasses(), 
                w.onTransitionStart(n), 0 === t || w.browser.lteIE9 ? (w.setWrapperTranslate(r), 
                w.setWrapperTransition(0), w.onTransitionEnd(n)) : (w.setWrapperTranslate(r), w.setWrapperTransition(t), 
                w.animating || (w.animating = !0, w.wrapper.transitionEnd(function() {
                    w && w.onTransitionEnd(n);
                }))), 0)));
            }, w.onTransitionStart = function(e) {
                void 0 === e && (e = !0), w.params.autoHeight && w.updateAutoHeight(), w.lazy && w.lazy.onTransitionStart(), 
                e && (w.emit("onTransitionStart", w), w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeStart", w), 
                w.activeIndex > w.previousIndex ? w.emit("onSlideNextStart", w) : w.emit("onSlidePrevStart", w)));
            }, w.onTransitionEnd = function(e) {
                w.animating = !1, w.setWrapperTransition(0), void 0 === e && (e = !0), w.lazy && w.lazy.onTransitionEnd(), 
                e && (w.emit("onTransitionEnd", w), w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeEnd", w), 
                w.activeIndex > w.previousIndex ? w.emit("onSlideNextEnd", w) : w.emit("onSlidePrevEnd", w))), 
                w.params.history && w.history && w.history.setHistory(w.params.history, w.activeIndex), 
                w.params.hashnav && w.hashnav && w.hashnav.setHash();
            }, w.slideNext = function(e, t, n) {
                return w.params.loop ? !w.animating && (w.fixLoop(), w.container[0].clientLeft, 
                w.slideTo(w.activeIndex + w.params.slidesPerGroup, t, e, n)) : w.slideTo(w.activeIndex + w.params.slidesPerGroup, t, e, n);
            }, w._slideNext = function(e) {
                return w.slideNext(!0, e, !0);
            }, w.slidePrev = function(e, t, n) {
                return w.params.loop ? !w.animating && (w.fixLoop(), w.container[0].clientLeft, 
                w.slideTo(w.activeIndex - 1, t, e, n)) : w.slideTo(w.activeIndex - 1, t, e, n);
            }, w._slidePrev = function(e) {
                return w.slidePrev(!0, e, !0);
            }, w.slideReset = function(e, t, n) {
                return w.slideTo(w.activeIndex, t, e);
            }, w.disableTouchControl = function() {
                return w.params.onlyExternal = !0;
            }, w.enableTouchControl = function() {
                return !(w.params.onlyExternal = !1);
            }, w.setWrapperTransition = function(e, t) {
                w.wrapper.transition(e), "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTransition(e), 
                w.params.parallax && w.parallax && w.parallax.setTransition(e), w.params.scrollbar && w.scrollbar && w.scrollbar.setTransition(e), 
                w.params.control && w.controller && w.controller.setTransition(e, t), w.emit("onSetTransition", w, e);
            }, w.setWrapperTranslate = function(e, t, n) {
                var i = 0, r = 0;
                w.isHorizontal() ? i = w.rtl ? -e : e : r = e, w.params.roundLengths && (i = m(i), 
                r = m(r)), w.params.virtualTranslate || (w.support.transforms3d ? w.wrapper.transform("translate3d(" + i + "px, " + r + "px, 0px)") : w.wrapper.transform("translate(" + i + "px, " + r + "px)")), 
                w.translate = w.isHorizontal() ? i : r;
                var a = w.maxTranslate() - w.minTranslate();
                (0 === a ? 0 : (e - w.minTranslate()) / a) !== w.progress && w.updateProgress(e), 
                t && w.updateActiveIndex(), "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTranslate(w.translate), 
                w.params.parallax && w.parallax && w.parallax.setTranslate(w.translate), w.params.scrollbar && w.scrollbar && w.scrollbar.setTranslate(w.translate), 
                w.params.control && w.controller && w.controller.setTranslate(w.translate, n), w.emit("onSetTranslate", w, w.translate);
            }, w.getTranslate = function(e, t) {
                var n, i, r, a;
                return void 0 === t && (t = "x"), w.params.virtualTranslate ? w.rtl ? -w.translate : w.translate : (r = window.getComputedStyle(e, null), 
                window.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
                    return e.replace(",", ".");
                }).join(", ")), a = new window.WebKitCSSMatrix("none" === i ? "" : i)) : n = (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), 
                "x" === t && (i = window.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), 
                "y" === t && (i = window.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), 
                w.rtl && i && (i = -i), i || 0);
            }, w.getWrapperTranslate = function(e) {
                return void 0 === e && (e = w.isHorizontal() ? "x" : "y"), w.getTranslate(w.wrapper[0], e);
            }, w.observers = [], w.initObservers = function() {
                if (w.params.observeParents) for (var e = w.container.parents(), t = 0; t < e.length; t++) n(e[t]);
                n(w.container[0], {
                    childList: !1
                }), n(w.wrapper[0], {
                    attributes: !1
                });
            }, w.disconnectObservers = function() {
                for (var e = 0; e < w.observers.length; e++) w.observers[e].disconnect();
                w.observers = [];
            }, w.createLoop = function() {
                w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove();
                var i = w.wrapper.children("." + w.params.slideClass);
                "auto" !== w.params.slidesPerView || w.params.loopedSlides || (w.params.loopedSlides = i.length), 
                w.loopedSlides = parseInt(w.params.loopedSlides || w.params.slidesPerView, 10), 
                w.loopedSlides = w.loopedSlides + w.params.loopAdditionalSlides, w.loopedSlides > i.length && (w.loopedSlides = i.length);
                var e, r = [], a = [];
                for (i.each(function(e, t) {
                    var n = $(this);
                    e < w.loopedSlides && a.push(t), e < i.length && e >= i.length - w.loopedSlides && r.push(t), 
                    n.attr("data-swiper-slide-index", e);
                }), e = 0; e < a.length; e++) w.wrapper.append($(a[e].cloneNode(!0)).addClass(w.params.slideDuplicateClass));
                for (e = r.length - 1; 0 <= e; e--) w.wrapper.prepend($(r[e].cloneNode(!0)).addClass(w.params.slideDuplicateClass));
            }, w.destroyLoop = function() {
                w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove(), 
                w.slides.removeAttr("data-swiper-slide-index");
            }, w.reLoop = function(e) {
                var t = w.activeIndex - w.loopedSlides;
                w.destroyLoop(), w.createLoop(), w.updateSlidesSize(), e && w.slideTo(t + w.loopedSlides, 0, !1);
            }, w.fixLoop = function() {
                var e;
                w.activeIndex < w.loopedSlides ? (e = w.slides.length - 3 * w.loopedSlides + w.activeIndex, 
                e += w.loopedSlides, w.slideTo(e, 0, !1, !0)) : ("auto" === w.params.slidesPerView && w.activeIndex >= 2 * w.loopedSlides || w.activeIndex > w.slides.length - 2 * w.params.slidesPerView) && (e = -w.slides.length + w.activeIndex + w.loopedSlides, 
                e += w.loopedSlides, w.slideTo(e, 0, !1, !0));
            }, w.appendSlide = function(e) {
                if (w.params.loop && w.destroyLoop(), "object" == typeof e && e.length) for (var t = 0; t < e.length; t++) e[t] && w.wrapper.append(e[t]); else w.wrapper.append(e);
                w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0);
            }, w.prependSlide = function(e) {
                w.params.loop && w.destroyLoop();
                var t = w.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var n = 0; n < e.length; n++) e[n] && w.wrapper.prepend(e[n]);
                    t = w.activeIndex + e.length;
                } else w.wrapper.prepend(e);
                w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0), 
                w.slideTo(t, 0, !1);
            }, w.removeSlide = function(e) {
                w.params.loop && (w.destroyLoop(), w.slides = w.wrapper.children("." + w.params.slideClass));
                var t, n = w.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var i = 0; i < e.length; i++) t = e[i], w.slides[t] && w.slides.eq(t).remove(), 
                    t < n && n--;
                    n = Math.max(n, 0);
                } else t = e, w.slides[t] && w.slides.eq(t).remove(), t < n && n--, n = Math.max(n, 0);
                w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0), 
                w.params.loop ? w.slideTo(n + w.loopedSlides, 0, !1) : w.slideTo(n, 0, !1);
            }, w.removeAllSlides = function() {
                for (var e = [], t = 0; t < w.slides.length; t++) e.push(t);
                w.removeSlide(e);
            }, w.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < w.slides.length; e++) {
                            var t = w.slides.eq(e), n = -t[0].swiperSlideOffset;
                            w.params.virtualTranslate || (n -= w.translate);
                            var i = 0;
                            w.isHorizontal() || (i = n, n = 0);
                            var r = w.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            t.css({
                                opacity: r
                            }).transform("translate3d(" + n + "px, " + i + "px, 0px)");
                        }
                    },
                    setTransition: function(e) {
                        if (w.slides.transition(e), w.params.virtualTranslate && 0 !== e) {
                            var n = !1;
                            w.slides.transitionEnd(function() {
                                if (!n && w) {
                                    n = !0, w.animating = !1;
                                    for (var e = [ "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd" ], t = 0; t < e.length; t++) w.wrapper.trigger(e[t]);
                                }
                            });
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var e = 0; e < w.slides.length; e++) {
                            var t = w.slides.eq(e), n = t[0].progress;
                            w.params.flip.limitRotation && (n = Math.max(Math.min(t[0].progress, 1), -1));
                            var i = -180 * n, r = 0, a = -t[0].swiperSlideOffset, o = 0;
                            if (w.isHorizontal() ? w.rtl && (i = -i) : (o = a, r = -i, i = a = 0), t[0].style.zIndex = -Math.abs(Math.round(n)) + w.slides.length, 
                            w.params.flip.slideShadows) {
                                var s = w.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"), l = w.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                0 === s.length && (s = $('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'), 
                                t.append(s)), 0 === l.length && (l = $('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'), 
                                t.append(l)), s.length && (s[0].style.opacity = Math.max(-n, 0)), l.length && (l[0].style.opacity = Math.max(n, 0));
                            }
                            t.transform("translate3d(" + a + "px, " + o + "px, 0px) rotateX(" + r + "deg) rotateY(" + i + "deg)");
                        }
                    },
                    setTransition: function(e) {
                        if (w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), 
                        w.params.virtualTranslate && 0 !== e) {
                            var n = !1;
                            w.slides.eq(w.activeIndex).transitionEnd(function() {
                                if (!n && w && $(this).hasClass(w.params.slideActiveClass)) {
                                    n = !0, w.animating = !1;
                                    for (var e = [ "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd" ], t = 0; t < e.length; t++) w.wrapper.trigger(e[t]);
                                }
                            });
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var e, t = 0;
                        w.params.cube.shadow && (w.isHorizontal() ? (0 === (e = w.wrapper.find(".swiper-cube-shadow")).length && (e = $('<div class="swiper-cube-shadow"></div>'), 
                        w.wrapper.append(e)), e.css({
                            height: w.width + "px"
                        })) : 0 === (e = w.container.find(".swiper-cube-shadow")).length && (e = $('<div class="swiper-cube-shadow"></div>'), 
                        w.container.append(e)));
                        for (var n = 0; n < w.slides.length; n++) {
                            var i = w.slides.eq(n), r = 90 * n, a = Math.floor(r / 360);
                            w.rtl && (r = -r, a = Math.floor(-r / 360));
                            var o = Math.max(Math.min(i[0].progress, 1), -1), s = 0, l = 0, u = 0;
                            n % 4 == 0 ? (s = 4 * -a * w.size, u = 0) : (n - 1) % 4 == 0 ? (s = 0, u = 4 * -a * w.size) : (n - 2) % 4 == 0 ? (s = w.size + 4 * a * w.size, 
                            u = w.size) : (n - 3) % 4 == 0 && (s = -w.size, u = 3 * w.size + 4 * w.size * a), 
                            w.rtl && (s = -s), w.isHorizontal() || (l = s, s = 0);
                            var c = "rotateX(" + (w.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (w.isHorizontal() ? r : 0) + "deg) translate3d(" + s + "px, " + l + "px, " + u + "px)";
                            if (o <= 1 && -1 < o && (t = 90 * n + 90 * o, w.rtl && (t = 90 * -n - 90 * o)), 
                            i.transform(c), w.params.cube.slideShadows) {
                                var d = w.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"), p = w.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                0 === d.length && (d = $('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'), 
                                i.append(d)), 0 === p.length && (p = $('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'), 
                                i.append(p)), d.length && (d[0].style.opacity = Math.max(-o, 0)), p.length && (p[0].style.opacity = Math.max(o, 0));
                            }
                        }
                        if (w.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + w.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + w.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + w.size / 2 + "px",
                            "transform-origin": "50% 50% -" + w.size / 2 + "px"
                        }), w.params.cube.shadow) if (w.isHorizontal()) e.transform("translate3d(0px, " + (w.width / 2 + w.params.cube.shadowOffset) + "px, " + -w.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + w.params.cube.shadowScale + ")"); else {
                            var f = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90), h = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2), m = w.params.cube.shadowScale, g = w.params.cube.shadowScale / h, v = w.params.cube.shadowOffset;
                            e.transform("scale3d(" + m + ", 1, " + g + ") translate3d(0px, " + (w.height / 2 + v) + "px, " + -w.height / 2 / g + "px) rotateX(-90deg)");
                        }
                        var y = w.isSafari || w.isUiWebView ? -w.size / 2 : 0;
                        w.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (w.isHorizontal() ? 0 : t) + "deg) rotateY(" + (w.isHorizontal() ? -t : 0) + "deg)");
                    },
                    setTransition: function(e) {
                        w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), 
                        w.params.cube.shadow && !w.isHorizontal() && w.container.find(".swiper-cube-shadow").transition(e);
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var e = w.translate, t = w.isHorizontal() ? -e + w.width / 2 : -e + w.height / 2, n = w.isHorizontal() ? w.params.coverflow.rotate : -w.params.coverflow.rotate, i = w.params.coverflow.depth, r = 0, a = w.slides.length; r < a; r++) {
                            var o = w.slides.eq(r), s = w.slidesSizesGrid[r], l = (t - o[0].swiperSlideOffset - s / 2) / s * w.params.coverflow.modifier, u = w.isHorizontal() ? n * l : 0, c = w.isHorizontal() ? 0 : n * l, d = -i * Math.abs(l), p = w.isHorizontal() ? 0 : w.params.coverflow.stretch * l, f = w.isHorizontal() ? w.params.coverflow.stretch * l : 0;
                            Math.abs(f) < .001 && (f = 0), Math.abs(p) < .001 && (p = 0), Math.abs(d) < .001 && (d = 0), 
                            Math.abs(u) < .001 && (u = 0), Math.abs(c) < .001 && (c = 0);
                            var h = "translate3d(" + f + "px," + p + "px," + d + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";
                            if (o.transform(h), o[0].style.zIndex = 1 - Math.abs(Math.round(l)), w.params.coverflow.slideShadows) {
                                var m = w.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"), g = w.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                0 === m.length && (m = $('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'), 
                                o.append(m)), 0 === g.length && (g = $('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'), 
                                o.append(g)), m.length && (m[0].style.opacity = 0 < l ? l : 0), g.length && (g[0].style.opacity = 0 < -l ? -l : 0);
                            }
                        }
                        w.browser.ie && (w.wrapper[0].style.perspectiveOrigin = t + "px 50%");
                    },
                    setTransition: function(e) {
                        w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
                    }
                }
            }, w.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(e, l) {
                    if (void 0 !== e && (void 0 === l && (l = !0), 0 !== w.slides.length)) {
                        var u = w.slides.eq(e), t = u.find("." + w.params.lazyLoadingClass + ":not(." + w.params.lazyStatusLoadedClass + "):not(." + w.params.lazyStatusLoadingClass + ")");
                        !u.hasClass(w.params.lazyLoadingClass) || u.hasClass(w.params.lazyStatusLoadedClass) || u.hasClass(w.params.lazyStatusLoadingClass) || (t = t.add(u[0])), 
                        0 !== t.length && t.each(function() {
                            var i = $(this);
                            i.addClass(w.params.lazyStatusLoadingClass);
                            var r = i.attr("data-background"), a = i.attr("data-src"), o = i.attr("data-srcset"), s = i.attr("data-sizes");
                            w.loadImage(i[0], a || r, o, s, !1, function() {
                                if (null != w && w) {
                                    if (r ? (i.css("background-image", 'url("' + r + '")'), i.removeAttr("data-background")) : (o && (i.attr("srcset", o), 
                                    i.removeAttr("data-srcset")), s && (i.attr("sizes", s), i.removeAttr("data-sizes")), 
                                    a && (i.attr("src", a), i.removeAttr("data-src"))), i.addClass(w.params.lazyStatusLoadedClass).removeClass(w.params.lazyStatusLoadingClass), 
                                    u.find("." + w.params.lazyPreloaderClass + ", ." + w.params.preloaderClass).remove(), 
                                    w.params.loop && l) {
                                        var e = u.attr("data-swiper-slide-index");
                                        if (u.hasClass(w.params.slideDuplicateClass)) {
                                            var t = w.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + w.params.slideDuplicateClass + ")");
                                            w.lazy.loadImageInSlide(t.index(), !1);
                                        } else {
                                            var n = w.wrapper.children("." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            w.lazy.loadImageInSlide(n.index(), !1);
                                        }
                                    }
                                    w.emit("onLazyImageReady", w, u[0], i[0]);
                                }
                            }), w.emit("onLazyImageLoad", w, u[0], i[0]);
                        });
                    }
                },
                load: function() {
                    var e, t = w.params.slidesPerView;
                    if ("auto" === t && (t = 0), w.lazy.initialImageLoaded || (w.lazy.initialImageLoaded = !0), 
                    w.params.watchSlidesVisibility) w.wrapper.children("." + w.params.slideVisibleClass).each(function() {
                        w.lazy.loadImageInSlide($(this).index());
                    }); else if (1 < t) for (e = w.activeIndex; e < w.activeIndex + t; e++) w.slides[e] && w.lazy.loadImageInSlide(e); else w.lazy.loadImageInSlide(w.activeIndex);
                    if (w.params.lazyLoadingInPrevNext) if (1 < t || w.params.lazyLoadingInPrevNextAmount && 1 < w.params.lazyLoadingInPrevNextAmount) {
                        var n = w.params.lazyLoadingInPrevNextAmount, i = t, r = Math.min(w.activeIndex + i + Math.max(n, i), w.slides.length), a = Math.max(w.activeIndex - Math.max(i, n), 0);
                        for (e = w.activeIndex + t; e < r; e++) w.slides[e] && w.lazy.loadImageInSlide(e);
                        for (e = a; e < w.activeIndex; e++) w.slides[e] && w.lazy.loadImageInSlide(e);
                    } else {
                        var o = w.wrapper.children("." + w.params.slideNextClass);
                        0 < o.length && w.lazy.loadImageInSlide(o.index());
                        var s = w.wrapper.children("." + w.params.slidePrevClass);
                        0 < s.length && w.lazy.loadImageInSlide(s.index());
                    }
                },
                onTransitionStart: function() {
                    w.params.lazyLoading && (w.params.lazyLoadingOnTransitionStart || !w.params.lazyLoadingOnTransitionStart && !w.lazy.initialImageLoaded) && w.lazy.load();
                },
                onTransitionEnd: function() {
                    w.params.lazyLoading && !w.params.lazyLoadingOnTransitionStart && w.lazy.load();
                }
            }, w.scrollbar = {
                isTouched: !1,
                setDragPosition: function(e) {
                    var t = w.scrollbar, n = (w.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - t.track.offset()[w.isHorizontal() ? "left" : "top"] - t.dragSize / 2, i = -w.minTranslate() * t.moveDivider, r = -w.maxTranslate() * t.moveDivider;
                    n < i ? n = i : r < n && (n = r), n = -n / t.moveDivider, w.updateProgress(n), w.setWrapperTranslate(n, !0);
                },
                dragStart: function(e) {
                    var t = w.scrollbar;
                    t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), 
                    clearTimeout(t.dragTimeout), t.track.transition(0), w.params.scrollbarHide && t.track.css("opacity", 1), 
                    w.wrapper.transition(100), t.drag.transition(100), w.emit("onScrollbarDragStart", w);
                },
                dragMove: function(e) {
                    var t = w.scrollbar;
                    t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), 
                    w.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), w.emit("onScrollbarDragMove", w));
                },
                dragEnd: function(e) {
                    var t = w.scrollbar;
                    t.isTouched && (t.isTouched = !1, w.params.scrollbarHide && (clearTimeout(t.dragTimeout), 
                    t.dragTimeout = setTimeout(function() {
                        t.track.css("opacity", 0), t.track.transition(400);
                    }, 1e3)), w.emit("onScrollbarDragEnd", w), w.params.scrollbarSnapOnRelease && w.slideReset());
                },
                draggableEvents: !1 !== w.params.simulateTouch || w.support.touch ? w.touchEvents : w.touchEventsDesktop,
                enableDraggable: function() {
                    var e = w.scrollbar, t = w.support.touch ? e.track : document;
                    $(e.track).on(e.draggableEvents.start, e.dragStart), $(t).on(e.draggableEvents.move, e.dragMove), 
                    $(t).on(e.draggableEvents.end, e.dragEnd);
                },
                disableDraggable: function() {
                    var e = w.scrollbar, t = w.support.touch ? e.track : document;
                    $(e.track).off(e.draggableEvents.start, e.dragStart), $(t).off(e.draggableEvents.move, e.dragMove), 
                    $(t).off(e.draggableEvents.end, e.dragEnd);
                },
                set: function() {
                    if (w.params.scrollbar) {
                        var e = w.scrollbar;
                        e.track = $(w.params.scrollbar), w.params.uniqueNavElements && "string" == typeof w.params.scrollbar && 1 < e.track.length && 1 === w.container.find(w.params.scrollbar).length && (e.track = w.container.find(w.params.scrollbar)), 
                        e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = $('<div class="swiper-scrollbar-drag"></div>'), 
                        e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", 
                        e.trackSize = w.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, 
                        e.divider = w.size / w.virtualSize, e.moveDivider = e.divider * (e.trackSize / w.size), 
                        e.dragSize = e.trackSize * e.divider, w.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", 
                        1 <= e.divider ? e.track[0].style.display = "none" : e.track[0].style.display = "", 
                        w.params.scrollbarHide && (e.track[0].style.opacity = 0);
                    }
                },
                setTranslate: function() {
                    if (w.params.scrollbar) {
                        var e, t = w.scrollbar, n = (w.translate, t.dragSize);
                        e = (t.trackSize - t.dragSize) * w.progress, w.rtl && w.isHorizontal() ? 0 < (e = -e) ? (n = t.dragSize - e, 
                        e = 0) : -e + t.dragSize > t.trackSize && (n = t.trackSize + e) : e < 0 ? (n = t.dragSize + e, 
                        e = 0) : e + t.dragSize > t.trackSize && (n = t.trackSize - e), w.isHorizontal() ? (w.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), 
                        t.drag[0].style.width = n + "px") : (w.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), 
                        t.drag[0].style.height = n + "px"), w.params.scrollbarHide && (clearTimeout(t.timeout), 
                        t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                            t.track[0].style.opacity = 0, t.track.transition(400);
                        }, 1e3));
                    }
                },
                setTransition: function(e) {
                    w.params.scrollbar && w.scrollbar.drag.transition(e);
                }
            }, w.controller = {
                LinearSpline: function(e, t) {
                    var n, i, r, a, o, s = function(e, t) {
                        for (i = -1, n = e.length; 1 < n - i; ) e[r = n + i >> 1] <= t ? i = r : n = r;
                        return n;
                    };
                    this.x = e, this.y = t, this.lastIndex = e.length - 1, this.x.length, this.interpolate = function(e) {
                        return e ? (o = s(this.x, e), a = o - 1, (e - this.x[a]) * (this.y[o] - this.y[a]) / (this.x[o] - this.x[a]) + this.y[a]) : 0;
                    };
                },
                getInterpolateFunction: function(e) {
                    w.controller.spline || (w.controller.spline = w.params.loop ? new w.controller.LinearSpline(w.slidesGrid, e.slidesGrid) : new w.controller.LinearSpline(w.snapGrid, e.snapGrid));
                },
                setTranslate: function(t, e) {
                    function n(e) {
                        t = e.rtl && "horizontal" === e.params.direction ? -w.translate : w.translate, "slide" === w.params.controlBy && (w.controller.getInterpolateFunction(e), 
                        r = -w.controller.spline.interpolate(-t)), r && "container" !== w.params.controlBy || (i = (e.maxTranslate() - e.minTranslate()) / (w.maxTranslate() - w.minTranslate()), 
                        r = (t - w.minTranslate()) * i + e.minTranslate()), w.params.controlInverse && (r = e.maxTranslate() - r), 
                        e.updateProgress(r), e.setWrapperTranslate(r, !1, w), e.updateActiveIndex();
                    }
                    var i, r, a = w.params.control;
                    if (Array.isArray(a)) for (var o = 0; o < a.length; o++) a[o] !== e && a[o] instanceof j && n(a[o]); else a instanceof j && e !== a && n(a);
                },
                setTransition: function(t, e) {
                    function n(e) {
                        e.setWrapperTransition(t, w), 0 !== t && (e.onTransitionStart(), e.wrapper.transitionEnd(function() {
                            r && (e.params.loop && "slide" === w.params.controlBy && e.fixLoop(), e.onTransitionEnd());
                        }));
                    }
                    var i, r = w.params.control;
                    if (Array.isArray(r)) for (i = 0; i < r.length; i++) r[i] !== e && r[i] instanceof j && n(r[i]); else r instanceof j && e !== r && n(r);
                }
            }, w.hashnav = {
                onHashCange: function(e, t) {
                    var n = document.location.hash.replace("#", "");
                    n !== w.slides.eq(w.activeIndex).attr("data-hash") && w.slideTo(w.wrapper.children("." + w.params.slideClass + '[data-hash="' + n + '"]').index());
                },
                attachEvents: function(e) {
                    var t = e ? "off" : "on";
                    $(window)[t]("hashchange", w.hashnav.onHashCange);
                },
                setHash: function() {
                    if (w.hashnav.initialized && w.params.hashnav) if (w.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + w.slides.eq(w.activeIndex).attr("data-hash") || ""); else {
                        var e = w.slides.eq(w.activeIndex), t = e.attr("data-hash") || e.attr("data-history");
                        document.location.hash = t || "";
                    }
                },
                init: function() {
                    if (w.params.hashnav && !w.params.history) {
                        w.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e) for (var t = 0, n = w.slides.length; t < n; t++) {
                            var i = w.slides.eq(t);
                            if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(w.params.slideDuplicateClass)) {
                                var r = i.index();
                                w.slideTo(r, 0, w.params.runCallbacksOnInit, !0);
                            }
                        }
                        w.params.hashnavWatchState && w.hashnav.attachEvents();
                    }
                },
                destroy: function() {
                    w.params.hashnavWatchState && w.hashnav.attachEvents(!0);
                }
            }, w.history = {
                init: function() {
                    if (w.params.history) {
                        if (!window.history || !window.history.pushState) return w.params.history = !1, 
                        void (w.params.hashnav = !0);
                        w.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, w.params.runCallbacksOnInit), 
                        w.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState));
                    }
                },
                setHistoryPopState: function() {
                    w.history.paths = w.history.getPathValues(), w.history.scrollToSlide(w.params.speed, w.history.paths.value, !1);
                },
                getPathValues: function() {
                    var e = window.location.pathname.slice(1).split("/"), t = e.length;
                    return {
                        key: e[t - 2],
                        value: e[t - 1]
                    };
                },
                setHistory: function(e, t) {
                    if (w.history.initialized && w.params.history) {
                        var n = w.slides.eq(t), i = this.slugify(n.attr("data-history"));
                        window.location.pathname.includes(e) || (i = e + "/" + i), w.params.replaceState ? window.history.replaceState(null, null, i) : window.history.pushState(null, null, i);
                    }
                },
                slugify: function(e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
                },
                scrollToSlide: function(e, t, n) {
                    if (t) for (var i = 0, r = w.slides.length; i < r; i++) {
                        var a = w.slides.eq(i);
                        if (this.slugify(a.attr("data-history")) === t && !a.hasClass(w.params.slideDuplicateClass)) {
                            var o = a.index();
                            w.slideTo(o, e, n);
                        }
                    } else w.slideTo(0, e, n);
                }
            }, w.disableKeyboardControl = function() {
                w.params.keyboardControl = !1, $(document).off("keydown", i);
            }, w.enableKeyboardControl = function() {
                w.params.keyboardControl = !0, $(document).on("keydown", i);
            }, w.mousewheel = {
                event: !1,
                lastScrollTime: new window.Date().getTime()
            }, w.params.mousewheelControl && (w.mousewheel.event = -1 < navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                var e = "onwheel" in document;
                if (!e) {
                    var t = document.createElement("div");
                    t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel;
                }
                return !e && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (e = document.implementation.hasFeature("Events.wheel", "3.0")), 
                e;
            }() ? "wheel" : "mousewheel"), w.disableMousewheelControl = function() {
                if (!w.mousewheel.event) return !1;
                var e = w.container;
                return "container" !== w.params.mousewheelEventsTarged && (e = $(w.params.mousewheelEventsTarged)), 
                e.off(w.mousewheel.event, r), !(w.params.mousewheelControl = !1);
            }, w.enableMousewheelControl = function() {
                if (!w.mousewheel.event) return !1;
                var e = w.container;
                return "container" !== w.params.mousewheelEventsTarged && (e = $(w.params.mousewheelEventsTarged)), 
                e.on(w.mousewheel.event, r), w.params.mousewheelControl = !0;
            }, w.parallax = {
                setTranslate: function() {
                    w.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        a(this, w.progress);
                    }), w.slides.each(function() {
                        var e = $(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            a(this, Math.min(Math.max(e[0].progress, -1), 1));
                        });
                    });
                },
                setTransition: function(n) {
                    void 0 === n && (n = w.params.speed), w.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var e = $(this), t = parseInt(e.attr("data-swiper-parallax-duration"), 10) || n;
                        0 === n && (t = 0), e.transition(t);
                    });
                }
            }, w.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: w.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX, n = e.targetTouches[0].pageY, i = e.targetTouches[1].pageX, r = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - n, 2));
                },
                onGestureStart: function(e) {
                    var t = w.zoom;
                    if (!w.support.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        t.gesture.scaleStart = t.getDistanceBetweenTouches(e);
                    }
                    t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = $(this), 0 === t.gesture.slide.length && (t.gesture.slide = w.slides.eq(w.activeIndex)), 
                    t.gesture.image = t.gesture.slide.find("img, svg, canvas"), t.gesture.imageWrap = t.gesture.image.parent("." + w.params.zoomContainerClass), 
                    t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || w.params.zoomMax, 
                    0 !== t.gesture.imageWrap.length) ? (t.gesture.image.transition(0), t.isScaling = !0) : t.gesture.image = void 0;
                },
                onGestureChange: function(e) {
                    var t = w.zoom;
                    if (!w.support.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        t.gesture.scaleMove = t.getDistanceBetweenTouches(e);
                    }
                    t.gesture.image && 0 !== t.gesture.image.length && (w.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, 
                    t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), 
                    t.scale < w.params.zoomMin && (t.scale = w.params.zoomMin + 1 - Math.pow(w.params.zoomMin - t.scale + 1, .5)), 
                    t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"));
                },
                onGestureEnd: function(e) {
                    var t = w.zoom;
                    !w.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), w.params.zoomMin), 
                    t.gesture.image.transition(w.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), 
                    t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0));
                },
                onTouchStart: function(e, t) {
                    var n = e.zoom;
                    n.gesture.image && 0 !== n.gesture.image.length && (n.image.isTouched || ("android" === e.device.os && t.preventDefault(), 
                    n.image.isTouched = !0, n.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, 
                    n.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY));
                },
                onTouchMove: function(e) {
                    var t = w.zoom;
                    if (t.gesture.image && 0 !== t.gesture.image.length && (w.allowClick = !1, t.image.isTouched && t.gesture.slide)) {
                        t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, 
                        t.image.startX = w.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = w.getTranslate(t.gesture.imageWrap[0], "y") || 0, 
                        t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, 
                        t.gesture.imageWrap.transition(0), w.rtl && (t.image.startX = -t.image.startX), 
                        w.rtl && (t.image.startY = -t.image.startY));
                        var n = t.image.width * t.scale, i = t.image.height * t.scale;
                        if (!(n < t.gesture.slideWidth && i < t.gesture.slideHeight)) {
                            if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - n / 2, 0), t.image.maxX = -t.image.minX, 
                            t.image.minY = Math.min(t.gesture.slideHeight / 2 - i / 2, 0), t.image.maxY = -t.image.minY, 
                            t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, 
                            t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, 
                            !t.image.isMoved && !t.isScaling) {
                                if (w.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x) return void (t.image.isTouched = !1);
                                if (!w.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y) return void (t.image.isTouched = !1);
                            }
                            e.preventDefault(), e.stopPropagation(), t.image.isMoved = !0, t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX, 
                            t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY, 
                            t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)), 
                            t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)), 
                            t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)), 
                            t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)), 
                            t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x), 
                            t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y), 
                            t.velocity.prevTime || (t.velocity.prevTime = Date.now()), t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2, 
                            t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2, 
                            Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0), 
                            Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0), 
                            t.velocity.prevPositionX = t.image.touchesCurrent.x, t.velocity.prevPositionY = t.image.touchesCurrent.y, 
                            t.velocity.prevTime = Date.now(), t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)");
                        }
                    }
                },
                onTouchEnd: function(e, t) {
                    var n = e.zoom;
                    if (n.gesture.image && 0 !== n.gesture.image.length) {
                        if (!n.image.isTouched || !n.image.isMoved) return n.image.isTouched = !1, void (n.image.isMoved = !1);
                        n.image.isTouched = !1, n.image.isMoved = !1;
                        var i = 300, r = 300, a = n.velocity.x * i, o = n.image.currentX + a, s = n.velocity.y * r, l = n.image.currentY + s;
                        0 !== n.velocity.x && (i = Math.abs((o - n.image.currentX) / n.velocity.x)), 0 !== n.velocity.y && (r = Math.abs((l - n.image.currentY) / n.velocity.y));
                        var u = Math.max(i, r);
                        n.image.currentX = o, n.image.currentY = l;
                        var c = n.image.width * n.scale, d = n.image.height * n.scale;
                        n.image.minX = Math.min(n.gesture.slideWidth / 2 - c / 2, 0), n.image.maxX = -n.image.minX, 
                        n.image.minY = Math.min(n.gesture.slideHeight / 2 - d / 2, 0), n.image.maxY = -n.image.minY, 
                        n.image.currentX = Math.max(Math.min(n.image.currentX, n.image.maxX), n.image.minX), 
                        n.image.currentY = Math.max(Math.min(n.image.currentY, n.image.maxY), n.image.minY), 
                        n.gesture.imageWrap.transition(u).transform("translate3d(" + n.image.currentX + "px, " + n.image.currentY + "px,0)");
                    }
                },
                onTransitionEnd: function(e) {
                    var t = e.zoom;
                    t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), 
                    t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, 
                    t.scale = t.currentScale = 1);
                },
                toggleZoom: function(e, t) {
                    var n, i, r, a, o, s, l, u, c, d, p, f, h, m, g, v, y = e.zoom;
                    (y.gesture.slide || (y.gesture.slide = e.clickedSlide ? $(e.clickedSlide) : e.slides.eq(e.activeIndex), 
                    y.gesture.image = y.gesture.slide.find("img, svg, canvas"), y.gesture.imageWrap = y.gesture.image.parent("." + e.params.zoomContainerClass)), 
                    y.gesture.image && 0 !== y.gesture.image.length) && (void 0 === y.image.touchesStart.x && t ? (n = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, 
                    i = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (n = y.image.touchesStart.x, 
                    i = y.image.touchesStart.y), y.scale && 1 !== y.scale ? (y.scale = y.currentScale = 1, 
                    y.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), 
                    y.gesture.slide = void 0) : (y.scale = y.currentScale = y.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax, 
                    t ? (g = y.gesture.slide[0].offsetWidth, v = y.gesture.slide[0].offsetHeight, r = y.gesture.slide.offset().left + g / 2 - n, 
                    a = y.gesture.slide.offset().top + v / 2 - i, l = y.gesture.image[0].offsetWidth, 
                    u = y.gesture.image[0].offsetHeight, c = l * y.scale, d = u * y.scale, h = -(p = Math.min(g / 2 - c / 2, 0)), 
                    m = -(f = Math.min(v / 2 - d / 2, 0)), (o = r * y.scale) < p && (o = p), h < o && (o = h), 
                    (s = a * y.scale) < f && (s = f), m < s && (s = m)) : s = o = 0, y.gesture.imageWrap.transition(300).transform("translate3d(" + o + "px, " + s + "px,0)"), 
                    y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")")));
                },
                attachEvents: function(e) {
                    var n = e ? "off" : "on";
                    if (w.params.zoom) {
                        var t = (w.slides, !("touchstart" !== w.touchEvents.start || !w.support.passiveListener || !w.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        });
                        w.support.gestures ? (w.slides[n]("gesturestart", w.zoom.onGestureStart, t), w.slides[n]("gesturechange", w.zoom.onGestureChange, t), 
                        w.slides[n]("gestureend", w.zoom.onGestureEnd, t)) : "touchstart" === w.touchEvents.start && (w.slides[n](w.touchEvents.start, w.zoom.onGestureStart, t), 
                        w.slides[n](w.touchEvents.move, w.zoom.onGestureChange, t), w.slides[n](w.touchEvents.end, w.zoom.onGestureEnd, t)), 
                        w[n]("touchStart", w.zoom.onTouchStart), w.slides.each(function(e, t) {
                            0 < $(t).find("." + w.params.zoomContainerClass).length && $(t)[n](w.touchEvents.move, w.zoom.onTouchMove);
                        }), w[n]("touchEnd", w.zoom.onTouchEnd), w[n]("transitionEnd", w.zoom.onTransitionEnd), 
                        w.params.zoomToggle && w.on("doubleTap", w.zoom.toggleZoom);
                    }
                },
                init: function() {
                    w.zoom.attachEvents();
                },
                destroy: function() {
                    w.zoom.attachEvents(!0);
                }
            }, w._plugins = [], w.plugins) {
                var H = w.plugins[I](w, w.params[I]);
                H && w._plugins.push(H);
            }
            return w.callPlugins = function(e) {
                for (var t = 0; t < w._plugins.length; t++) e in w._plugins[t] && w._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }, w.emitterEventListeners = {}, w.emit = function(e) {
                var t;
                if (w.params[e] && w.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), 
                w.emitterEventListeners[e]) for (t = 0; t < w.emitterEventListeners[e].length; t++) w.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                w.callPlugins && w.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }, w.on = function(e, t) {
                return e = o(e), w.emitterEventListeners[e] || (w.emitterEventListeners[e] = []), 
                w.emitterEventListeners[e].push(t), w;
            }, w.off = function(e, t) {
                var n;
                if (e = o(e), void 0 === t) return w.emitterEventListeners[e] = [], w;
                if (w.emitterEventListeners[e] && 0 !== w.emitterEventListeners[e].length) {
                    for (n = 0; n < w.emitterEventListeners[e].length; n++) w.emitterEventListeners[e][n] === t && w.emitterEventListeners[e].splice(n, 1);
                    return w;
                }
            }, w.once = function(e, t) {
                e = o(e);
                var n = function() {
                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), w.off(e, n);
                };
                return w.on(e, n), w;
            }, w.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e;
                },
                addRole: function(e, t) {
                    return e.attr("role", t), e;
                },
                addLabel: function(e, t) {
                    return e.attr("aria-label", t), e;
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0), e;
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1), e;
                },
                onEnterKey: function(e) {
                    13 === e.keyCode && ($(e.target).is(w.params.nextButton) ? (w.onClickNext(e), w.isEnd ? w.a11y.notify(w.params.lastSlideMessage) : w.a11y.notify(w.params.nextSlideMessage)) : $(e.target).is(w.params.prevButton) && (w.onClickPrev(e), 
                    w.isBeginning ? w.a11y.notify(w.params.firstSlideMessage) : w.a11y.notify(w.params.prevSlideMessage)), 
                    $(e.target).is("." + w.params.bulletClass) && $(e.target)[0].click());
                },
                liveRegion: $('<span class="' + w.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var t = w.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e));
                },
                init: function() {
                    w.params.nextButton && w.nextButton && 0 < w.nextButton.length && (w.a11y.makeFocusable(w.nextButton), 
                    w.a11y.addRole(w.nextButton, "button"), w.a11y.addLabel(w.nextButton, w.params.nextSlideMessage)), 
                    w.params.prevButton && w.prevButton && 0 < w.prevButton.length && (w.a11y.makeFocusable(w.prevButton), 
                    w.a11y.addRole(w.prevButton, "button"), w.a11y.addLabel(w.prevButton, w.params.prevSlideMessage)), 
                    $(w.container).append(w.a11y.liveRegion);
                },
                initPagination: function() {
                    w.params.pagination && w.params.paginationClickable && w.bullets && w.bullets.length && w.bullets.each(function() {
                        var e = $(this);
                        w.a11y.makeFocusable(e), w.a11y.addRole(e, "button"), w.a11y.addLabel(e, w.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1));
                    });
                },
                destroy: function() {
                    w.a11y.liveRegion && 0 < w.a11y.liveRegion.length && w.a11y.liveRegion.remove();
                }
            }, w.init = function() {
                w.params.loop && w.createLoop(), w.updateContainerSize(), w.updateSlidesSize(), 
                w.updatePagination(), w.params.scrollbar && w.scrollbar && (w.scrollbar.set(), w.params.scrollbarDraggable && w.scrollbar.enableDraggable()), 
                "slide" !== w.params.effect && w.effects[w.params.effect] && (w.params.loop || w.updateProgress(), 
                w.effects[w.params.effect].setTranslate()), w.params.loop ? w.slideTo(w.params.initialSlide + w.loopedSlides, 0, w.params.runCallbacksOnInit) : (w.slideTo(w.params.initialSlide, 0, w.params.runCallbacksOnInit), 
                0 === w.params.initialSlide && (w.parallax && w.params.parallax && w.parallax.setTranslate(), 
                w.lazy && w.params.lazyLoading && (w.lazy.load(), w.lazy.initialImageLoaded = !0))), 
                w.attachEvents(), w.params.observer && w.support.observer && w.initObservers(), 
                w.params.preloadImages && !w.params.lazyLoading && w.preloadImages(), w.params.zoom && w.zoom && w.zoom.init(), 
                w.params.autoplay && w.startAutoplay(), w.params.keyboardControl && w.enableKeyboardControl && w.enableKeyboardControl(), 
                w.params.mousewheelControl && w.enableMousewheelControl && w.enableMousewheelControl(), 
                w.params.hashnavReplaceState && (w.params.replaceState = w.params.hashnavReplaceState), 
                w.params.history && w.history && w.history.init(), w.params.hashnav && w.hashnav && w.hashnav.init(), 
                w.params.a11y && w.a11y && w.a11y.init(), w.emit("onInit", w);
            }, w.cleanupStyles = function() {
                w.container.removeClass(w.classNames.join(" ")).removeAttr("style"), w.wrapper.removeAttr("style"), 
                w.slides && w.slides.length && w.slides.removeClass([ w.params.slideVisibleClass, w.params.slideActiveClass, w.params.slideNextClass, w.params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), 
                w.paginationContainer && w.paginationContainer.length && w.paginationContainer.removeClass(w.params.paginationHiddenClass), 
                w.bullets && w.bullets.length && w.bullets.removeClass(w.params.bulletActiveClass), 
                w.params.prevButton && $(w.params.prevButton).removeClass(w.params.buttonDisabledClass), 
                w.params.nextButton && $(w.params.nextButton).removeClass(w.params.buttonDisabledClass), 
                w.params.scrollbar && w.scrollbar && (w.scrollbar.track && w.scrollbar.track.length && w.scrollbar.track.removeAttr("style"), 
                w.scrollbar.drag && w.scrollbar.drag.length && w.scrollbar.drag.removeAttr("style"));
            }, w.destroy = function(e, t) {
                w.detachEvents(), w.stopAutoplay(), w.params.scrollbar && w.scrollbar && w.params.scrollbarDraggable && w.scrollbar.disableDraggable(), 
                w.params.loop && w.destroyLoop(), t && w.cleanupStyles(), w.disconnectObservers(), 
                w.params.zoom && w.zoom && w.zoom.destroy(), w.params.keyboardControl && w.disableKeyboardControl && w.disableKeyboardControl(), 
                w.params.mousewheelControl && w.disableMousewheelControl && w.disableMousewheelControl(), 
                w.params.a11y && w.a11y && w.a11y.destroy(), w.params.history && !w.params.replaceState && window.removeEventListener("popstate", w.history.setHistoryPopState), 
                w.params.hashnav && w.hashnav && w.hashnav.destroy(), w.emit("onDestroy"), !1 !== e && (w = null);
            }, w.init(), w;
        }
    };
    j.prototype = {
        isSafari: (s = window.navigator.userAgent.toLowerCase(), 0 <= s.indexOf("safari") && s.indexOf("chrome") < 0 && s.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e);
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && 1 < window.navigator.msMaxTouchPoints || window.navigator.pointerEnabled && 1 < window.navigator.maxTouchPoints,
            lteIE9: (o = document.createElement("div"), o.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 
            1 === o.getElementsByTagName("i").length)
        },
        device: (t = window.navigator.userAgent, n = t.match(/(Android);?[\s\/]+([\d.]+)?/), 
        i = t.match(/(iPad).*OS\s([\d_]+)/), r = t.match(/(iPod)(.*OS\s([\d_]+))?/), a = !i && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/), 
        {
            ios: i || a || r,
            android: n
        }),
        support: {
            touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
            transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || (e = document.createElement("div").style, 
            "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
            flexbox: function() {
                for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++) if (t[n] in e) return !0;
            }(),
            observer: "MutationObserver" in window || "WebkitMutationObserver" in window,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0;
                        }
                    });
                    window.addEventListener("testPassiveListener", null, t);
                } catch (e) {}
                return e;
            }(),
            gestures: "ongesturestart" in window
        },
        plugins: {}
    };
    for (var O = function() {
        var l = function(e) {
            var t = 0;
            for (t = 0; t < e.length; t++) this[t] = e[t];
            return this.length = e.length, this;
        }, u = function(e, t) {
            var n = [], i = 0;
            if (e && !t && e instanceof l) return e;
            if (e) if ("string" == typeof e) {
                var r, a, o = e.trim();
                if (0 <= o.indexOf("<") && 0 <= o.indexOf(">")) {
                    var s = "div";
                    for (0 === o.indexOf("<li") && (s = "ul"), 0 === o.indexOf("<tr") && (s = "tbody"), 
                    0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (s = "tr"), 0 === o.indexOf("<tbody") && (s = "table"), 
                    0 === o.indexOf("<option") && (s = "select"), (a = document.createElement(s)).innerHTML = e, 
                    i = 0; i < a.childNodes.length; i++) n.push(a.childNodes[i]);
                } else for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e) : [ document.getElementById(e.split("#")[1]) ], 
                i = 0; i < r.length; i++) r[i] && n.push(r[i]);
            } else if (e.nodeType || e === window || e === document) n.push(e); else if (0 < e.length && e[0].nodeType) for (i = 0; i < e.length; i++) n.push(e[i]);
            return new l(n);
        };
        return l.prototype = {
            addClass: function(e) {
                if (void 0 === e) return this;
                for (var t = e.split(" "), n = 0; n < t.length; n++) for (var i = 0; i < this.length; i++) this[i].classList.add(t[n]);
                return this;
            },
            removeClass: function(e) {
                for (var t = e.split(" "), n = 0; n < t.length; n++) for (var i = 0; i < this.length; i++) this[i].classList.remove(t[n]);
                return this;
            },
            hasClass: function(e) {
                return !!this[0] && this[0].classList.contains(e);
            },
            toggleClass: function(e) {
                for (var t = e.split(" "), n = 0; n < t.length; n++) for (var i = 0; i < this.length; i++) this[i].classList.toggle(t[n]);
                return this;
            },
            attr: function(e, t) {
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (var n = 0; n < this.length; n++) if (2 === arguments.length) this[n].setAttribute(e, t); else for (var i in e) this[n][i] = e[i], 
                this[n].setAttribute(i, e[i]);
                return this;
            },
            removeAttr: function(e) {
                for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                return this;
            },
            data: function(e, t) {
                if (void 0 !== t) {
                    for (var n = 0; n < this.length; n++) {
                        var i = this[n];
                        i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                    }
                    return this;
                }
                if (this[0]) {
                    var r = this[0].getAttribute("data-" + e);
                    return r || (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0);
                }
            },
            transform: function(e) {
                for (var t = 0; t < this.length; t++) {
                    var n = this[t].style;
                    n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e;
                }
                return this;
            },
            transition: function(e) {
                "string" != typeof e && (e += "ms");
                for (var t = 0; t < this.length; t++) {
                    var n = this[t].style;
                    n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e;
                }
                return this;
            },
            on: function(e, r, a, t) {
                function n(e) {
                    var t = e.target;
                    if (u(t).is(r)) a.call(t, e); else for (var n = u(t).parents(), i = 0; i < n.length; i++) u(n[i]).is(r) && a.call(n[i], e);
                }
                var i, o, s = e.split(" ");
                for (i = 0; i < this.length; i++) if ("function" == typeof r || !1 === r) for ("function" == typeof r && (t = (a = r) || !1), 
                o = 0; o < s.length; o++) this[i].addEventListener(s[o], a, t); else for (o = 0; o < s.length; o++) this[i].dom7LiveListeners || (this[i].dom7LiveListeners = []), 
                this[i].dom7LiveListeners.push({
                    listener: a,
                    liveListener: n
                }), this[i].addEventListener(s[o], n, t);
                return this;
            },
            off: function(e, t, n, i) {
                for (var r = e.split(" "), a = 0; a < r.length; a++) for (var o = 0; o < this.length; o++) if ("function" == typeof t || !1 === t) "function" == typeof t && (i = (n = t) || !1), 
                this[o].removeEventListener(r[a], n, i); else if (this[o].dom7LiveListeners) for (var s = 0; s < this[o].dom7LiveListeners.length; s++) this[o].dom7LiveListeners[s].listener === n && this[o].removeEventListener(r[a], this[o].dom7LiveListeners[s].liveListener, i);
                return this;
            },
            once: function(n, i, r, a) {
                var o = this;
                "function" == typeof i && (a = r = i = !1), o.on(n, i, function e(t) {
                    r(t), o.off(n, i, e, a);
                }, a);
            },
            trigger: function(e, t) {
                for (var n = 0; n < this.length; n++) {
                    var i;
                    try {
                        i = new window.CustomEvent(e, {
                            detail: t,
                            bubbles: !0,
                            cancelable: !0
                        });
                    } catch (n) {
                        (i = document.createEvent("Event")).initEvent(e, !0, !0), i.detail = t;
                    }
                    this[n].dispatchEvent(i);
                }
                return this;
            },
            transitionEnd: function(t) {
                function n(e) {
                    if (e.target === this) for (t.call(this, e), i = 0; i < r.length; i++) a.off(r[i], n);
                }
                var i, r = [ "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd" ], a = this;
                if (t) for (i = 0; i < r.length; i++) a.on(r[i], n);
                return this;
            },
            width: function() {
                return this[0] === window ? window.innerWidth : 0 < this.length ? parseFloat(this.css("width")) : null;
            },
            outerWidth: function(e) {
                return 0 < this.length ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
            },
            height: function() {
                return this[0] === window ? window.innerHeight : 0 < this.length ? parseFloat(this.css("height")) : null;
            },
            outerHeight: function(e) {
                return 0 < this.length ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null;
            },
            offset: function() {
                if (0 < this.length) {
                    var e = this[0], t = e.getBoundingClientRect(), n = document.body, i = e.clientTop || n.clientTop || 0, r = e.clientLeft || n.clientLeft || 0, a = window.pageYOffset || e.scrollTop, o = window.pageXOffset || e.scrollLeft;
                    return {
                        top: t.top + a - i,
                        left: t.left + o - r
                    };
                }
                return null;
            },
            css: function(e, t) {
                var n;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (n = 0; n < this.length; n++) for (var i in e) this[n].style[i] = e[i];
                        return this;
                    }
                    if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (n = 0; n < this.length; n++) this[n].style[e] = t;
                    return this;
                }
                return this;
            },
            each: function(e) {
                for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                return this;
            },
            html: function(e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                return this;
            },
            text: function(e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t++) this[t].textContent = e;
                return this;
            },
            is: function(e) {
                if (!this[0]) return !1;
                var t, n;
                if ("string" == typeof e) {
                    var i = this[0];
                    if (i === document) return e === document;
                    if (i === window) return e === window;
                    if (i.matches) return i.matches(e);
                    if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                    if (i.mozMatchesSelector) return i.mozMatchesSelector(e);
                    if (i.msMatchesSelector) return i.msMatchesSelector(e);
                    for (t = u(e), n = 0; n < t.length; n++) if (t[n] === this[0]) return !0;
                    return !1;
                }
                if (e === document) return this[0] === document;
                if (e === window) return this[0] === window;
                if (e.nodeType || e instanceof l) {
                    for (t = e.nodeType ? [ e ] : e, n = 0; n < t.length; n++) if (t[n] === this[0]) return !0;
                    return !1;
                }
                return !1;
            },
            index: function() {
                if (this[0]) {
                    for (var e = this[0], t = 0; null !== (e = e.previousSibling); ) 1 === e.nodeType && t++;
                    return t;
                }
            },
            eq: function(e) {
                if (void 0 === e) return this;
                var t, n = this.length;
                return n - 1 < e ? new l([]) : e < 0 ? new l((t = n + e) < 0 ? [] : [ this[t] ]) : new l([ this[e] ]);
            },
            append: function(e) {
                var t, n;
                for (t = 0; t < this.length; t++) if ("string" == typeof e) {
                    var i = document.createElement("div");
                    for (i.innerHTML = e; i.firstChild; ) this[t].appendChild(i.firstChild);
                } else if (e instanceof l) for (n = 0; n < e.length; n++) this[t].appendChild(e[n]); else this[t].appendChild(e);
                return this;
            },
            prepend: function(e) {
                var t, n;
                for (t = 0; t < this.length; t++) if ("string" == typeof e) {
                    var i = document.createElement("div");
                    for (i.innerHTML = e, n = i.childNodes.length - 1; 0 <= n; n--) this[t].insertBefore(i.childNodes[n], this[t].childNodes[0]);
                } else if (e instanceof l) for (n = 0; n < e.length; n++) this[t].insertBefore(e[n], this[t].childNodes[0]); else this[t].insertBefore(e, this[t].childNodes[0]);
                return this;
            },
            insertBefore: function(e) {
                for (var t = u(e), n = 0; n < this.length; n++) if (1 === t.length) t[0].parentNode.insertBefore(this[n], t[0]); else if (1 < t.length) for (var i = 0; i < t.length; i++) t[i].parentNode.insertBefore(this[n].cloneNode(!0), t[i]);
            },
            insertAfter: function(e) {
                for (var t = u(e), n = 0; n < this.length; n++) if (1 === t.length) t[0].parentNode.insertBefore(this[n], t[0].nextSibling); else if (1 < t.length) for (var i = 0; i < t.length; i++) t[i].parentNode.insertBefore(this[n].cloneNode(!0), t[i].nextSibling);
            },
            next: function(e) {
                return new l(0 < this.length ? e ? this[0].nextElementSibling && u(this[0].nextElementSibling).is(e) ? [ this[0].nextElementSibling ] : [] : this[0].nextElementSibling ? [ this[0].nextElementSibling ] : [] : []);
            },
            nextAll: function(e) {
                var t = [], n = this[0];
                if (!n) return new l([]);
                for (;n.nextElementSibling; ) {
                    var i = n.nextElementSibling;
                    e ? u(i).is(e) && t.push(i) : t.push(i), n = i;
                }
                return new l(t);
            },
            prev: function(e) {
                return new l(0 < this.length ? e ? this[0].previousElementSibling && u(this[0].previousElementSibling).is(e) ? [ this[0].previousElementSibling ] : [] : this[0].previousElementSibling ? [ this[0].previousElementSibling ] : [] : []);
            },
            prevAll: function(e) {
                var t = [], n = this[0];
                if (!n) return new l([]);
                for (;n.previousElementSibling; ) {
                    var i = n.previousElementSibling;
                    e ? u(i).is(e) && t.push(i) : t.push(i), n = i;
                }
                return new l(t);
            },
            parent: function(e) {
                for (var t = [], n = 0; n < this.length; n++) e ? u(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode);
                return u(u.unique(t));
            },
            parents: function(e) {
                for (var t = [], n = 0; n < this.length; n++) for (var i = this[n].parentNode; i; ) e ? u(i).is(e) && t.push(i) : t.push(i), 
                i = i.parentNode;
                return u(u.unique(t));
            },
            find: function(e) {
                for (var t = [], n = 0; n < this.length; n++) for (var i = this[n].querySelectorAll(e), r = 0; r < i.length; r++) t.push(i[r]);
                return new l(t);
            },
            children: function(e) {
                for (var t = [], n = 0; n < this.length; n++) for (var i = this[n].childNodes, r = 0; r < i.length; r++) e ? 1 === i[r].nodeType && u(i[r]).is(e) && t.push(i[r]) : 1 === i[r].nodeType && t.push(i[r]);
                return new l(u.unique(t));
            },
            remove: function() {
                for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this;
            },
            add: function() {
                var e, t;
                for (e = 0; e < arguments.length; e++) {
                    var n = u(arguments[e]);
                    for (t = 0; t < n.length; t++) this[this.length] = n[t], this.length++;
                }
                return this;
            }
        }, u.fn = l.prototype, u.unique = function(e) {
            for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
        }, u;
    }(), u = [ "jQuery", "Zepto", "Dom7" ], c = 0; c < u.length; c++) window[u[c]] && function(e) {
        e.fn.swiper = function(t) {
            var n;
            return e(this).each(function() {
                var e = new j(this, t);
                n || (n = e);
            }), n;
        };
    }(window[u[c]]);
    (l = void 0 === O ? window.Dom7 || window.Zepto || window.jQuery : O) && ("transitionEnd" in l.fn || (l.fn.transitionEnd = function(t) {
        function n(e) {
            if (e.target === this) for (t.call(this, e), i = 0; i < r.length; i++) a.off(r[i], n);
        }
        var i, r = [ "webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd" ], a = this;
        if (t) for (i = 0; i < r.length; i++) a.on(r[i], n);
        return this;
    }), "transform" in l.fn || (l.fn.transform = function(e) {
        for (var t = 0; t < this.length; t++) {
            var n = this[t].style;
            n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e;
        }
        return this;
    }), "transition" in l.fn || (l.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t++) {
            var n = this[t].style;
            n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e;
        }
        return this;
    }), "outerWidth" in l.fn || (l.fn.outerWidth = function(e) {
        return 0 < this.length ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
    })), window.Swiper = j;
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper;
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
}(jQuery), function(a) {
    "use strict";
    var t = '[data-dismiss="alert"]', o = function(e) {
        a(e).on("click", t, this.close);
    };
    o.VERSION = "3.3.7", o.TRANSITION_DURATION = 150, o.prototype.close = function(e) {
        function t() {
            r.detach().trigger("closed.bs.alert").remove();
        }
        var n = a(this), i = n.attr("data-target");
        i || (i = (i = n.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var r = a("#" === i ? [] : i);
        e && e.preventDefault(), r.length || (r = n.closest(".alert")), r.trigger(e = a.Event("close.bs.alert")), 
        e.isDefaultPrevented() || (r.removeClass("in"), a.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", t).emulateTransitionEnd(o.TRANSITION_DURATION) : t());
    };
    var e = a.fn.alert;
    a.fn.alert = function(n) {
        return this.each(function() {
            var e = a(this), t = e.data("bs.alert");
            t || e.data("bs.alert", t = new o(this)), "string" == typeof n && t[n].call(e);
        });
    }, a.fn.alert.Constructor = o, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this;
    }, a(document).on("click.bs.alert.data-api", t, o.prototype.close);
}(jQuery), function(a) {
    "use strict";
    function n(i) {
        return this.each(function() {
            var e = a(this), t = e.data("bs.button"), n = "object" == typeof i && i;
            t || e.data("bs.button", t = new r(this, n)), "toggle" == i ? t.toggle() : i && t.setState(i);
        });
    }
    var r = function(e, t) {
        this.$element = a(e), this.options = a.extend({}, r.DEFAULTS, t), this.isLoading = !1;
    };
    r.VERSION = "3.3.7", r.DEFAULTS = {
        loadingText: "loading..."
    }, r.prototype.setState = function(e) {
        var t = "disabled", n = this.$element, i = n.is("input") ? "val" : "html", r = n.data();
        e += "Text", null == r.resetText && n.data("resetText", n[i]()), setTimeout(a.proxy(function() {
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
    var e = a.fn.button;
    a.fn.button = n, a.fn.button.Constructor = r, a.fn.button.noConflict = function() {
        return a.fn.button = e, this;
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var t = a(e.target).closest(".btn");
        n.call(t, "toggle"), a(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), 
        t.is("input,button") ? t.trigger("focus") : t.find("input:visible,button:visible").first().trigger("focus"));
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        a(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
    });
}(jQuery), function(d) {
    "use strict";
    function o(r) {
        return this.each(function() {
            var e = d(this), t = e.data("bs.carousel"), n = d.extend({}, p.DEFAULTS, e.data(), "object" == typeof r && r), i = "string" == typeof r ? r : n.slide;
            t || e.data("bs.carousel", t = new p(this, n)), "number" == typeof r ? t.to(r) : i ? t[i]() : n.interval && t.pause().cycle();
        });
    }
    var p = function(e, t) {
        this.$element = d(e), this.$indicators = this.$element.find(".carousel-indicators"), 
        this.options = t, this.paused = null, this.sliding = null, this.interval = null, 
        this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", d.proxy(this.keydown, this)), 
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", d.proxy(this.pause, this)).on("mouseleave.bs.carousel", d.proxy(this.cycle, this));
    };
    p.VERSION = "3.3.7", p.TRANSITION_DURATION = 600, p.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, p.prototype.keydown = function(e) {
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
    }, p.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(d.proxy(this.next, this), this.options.interval)), 
        this;
    }, p.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active);
    }, p.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t);
        if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap) return t;
        var i = (n + ("prev" == e ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i);
    }, p.prototype.to = function(e) {
        var t = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e);
        }) : n == e ? this.pause().cycle() : this.slide(n < e ? "next" : "prev", this.$items.eq(e));
    }, p.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && d.support.transition && (this.$element.trigger(d.support.transition.end), 
        this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, p.prototype.next = function() {
        if (!this.sliding) return this.slide("next");
    }, p.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev");
    }, p.prototype.slide = function(e, t) {
        var n = this.$element.find(".item.active"), i = t || this.getItemForDirection(e, n), r = this.interval, a = "next" == e ? "left" : "right", o = this;
        if (i.hasClass("active")) return this.sliding = !1;
        var s = i[0], l = d.Event("slide.bs.carousel", {
            relatedTarget: s,
            direction: a
        });
        if (this.$element.trigger(l), !l.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = d(this.$indicators.children()[this.getItemIndex(i)]);
                u && u.addClass("active");
            }
            var c = d.Event("slid.bs.carousel", {
                relatedTarget: s,
                direction: a
            });
            return d.support.transition && this.$element.hasClass("slide") ? (i.addClass(e), 
            i[0].offsetWidth, n.addClass(a), i.addClass(a), n.one("bsTransitionEnd", function() {
                i.removeClass([ e, a ].join(" ")).addClass("active"), n.removeClass([ "active", a ].join(" ")), 
                o.sliding = !1, setTimeout(function() {
                    o.$element.trigger(c);
                }, 0);
            }).emulateTransitionEnd(p.TRANSITION_DURATION)) : (n.removeClass("active"), i.addClass("active"), 
            this.sliding = !1, this.$element.trigger(c)), r && this.cycle(), this;
        }
    };
    var e = d.fn.carousel;
    d.fn.carousel = o, d.fn.carousel.Constructor = p, d.fn.carousel.noConflict = function() {
        return d.fn.carousel = e, this;
    };
    var t = function(e) {
        var t, n = d(this), i = d(n.attr("data-target") || (t = n.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, ""));
        if (i.hasClass("carousel")) {
            var r = d.extend({}, i.data(), n.data()), a = n.attr("data-slide-to");
            a && (r.interval = !1), o.call(i, r), a && i.data("bs.carousel").to(a), e.preventDefault();
        }
    };
    d(document).on("click.bs.carousel.data-api", "[data-slide]", t).on("click.bs.carousel.data-api", "[data-slide-to]", t), 
    d(window).on("load", function() {
        d('[data-ride="carousel"]').each(function() {
            var e = d(this);
            o.call(e, e.data());
        });
    });
}(jQuery), function(o) {
    "use strict";
    function r(e) {
        var t, n = e.attr("data-target") || (t = e.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, "");
        return o(n);
    }
    function s(i) {
        return this.each(function() {
            var e = o(this), t = e.data("bs.collapse"), n = o.extend({}, l.DEFAULTS, e.data(), "object" == typeof i && i);
            !t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || e.data("bs.collapse", t = new l(this, n)), 
            "string" == typeof i && t[i]();
        });
    }
    var l = function(e, t) {
        this.$element = o(e), this.options = o.extend({}, l.DEFAULTS, t), this.$trigger = o('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), 
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
                var n = o.Event("show.bs.collapse");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                    t && t.length && (s.call(t, "hide"), e || t.data("bs.collapse", null));
                    var i = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0), 
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[i](""), this.transitioning = 0, 
                        this.$element.trigger("shown.bs.collapse");
                    };
                    if (!o.support.transition) return r.call(this);
                    var a = o.camelCase([ "scroll", i ].join("-"));
                    this.$element.one("bsTransitionEnd", o.proxy(r, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[i](this.$element[0][a]);
                }
            }
        }
    }, l.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = o.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var t = this.dimension();
                this.$element[t](this.$element[t]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), 
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                };
                return o.support.transition ? void this.$element[t](0).one("bsTransitionEnd", o.proxy(n, this)).emulateTransitionEnd(l.TRANSITION_DURATION) : n.call(this);
            }
        }
    }, l.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    }, l.prototype.getParent = function() {
        return o(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(o.proxy(function(e, t) {
            var n = o(t);
            this.addAriaAndCollapsedClass(r(n), n);
        }, this)).end();
    }, l.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n);
    };
    var e = o.fn.collapse;
    o.fn.collapse = s, o.fn.collapse.Constructor = l, o.fn.collapse.noConflict = function() {
        return o.fn.collapse = e, this;
    }, o(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var t = o(this);
        t.attr("data-target") || e.preventDefault();
        var n = r(t), i = n.data("bs.collapse") ? "toggle" : t.data();
        s.call(n, i);
    });
}(jQuery), function(o) {
    "use strict";
    function s(e) {
        var t = e.attr("data-target");
        t || (t = (t = e.attr("href")) && /#[A-Za-z]/.test(t) && t.replace(/.*(?=#[^\s]*$)/, ""));
        var n = t && o(t);
        return n && n.length ? n : e.parent();
    }
    function a(i) {
        i && 3 === i.which || (o(e).remove(), o(l).each(function() {
            var e = o(this), t = s(e), n = {
                relatedTarget: this
            };
            t.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && o.contains(t[0], i.target) || (t.trigger(i = o.Event("hide.bs.dropdown", n)), 
            i.isDefaultPrevented() || (e.attr("aria-expanded", "false"), t.removeClass("open").trigger(o.Event("hidden.bs.dropdown", n)))));
        }));
    }
    var e = ".dropdown-backdrop", l = '[data-toggle="dropdown"]', i = function(e) {
        o(e).on("click.bs.dropdown", this.toggle);
    };
    i.VERSION = "3.3.7", i.prototype.toggle = function(e) {
        var t = o(this);
        if (!t.is(".disabled, :disabled")) {
            var n = s(t), i = n.hasClass("open");
            if (a(), !i) {
                "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && o(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(o(this)).on("click", a);
                var r = {
                    relatedTarget: this
                };
                if (n.trigger(e = o.Event("show.bs.dropdown", r)), e.isDefaultPrevented()) return;
                t.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(o.Event("shown.bs.dropdown", r));
            }
            return !1;
        }
    }, i.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var t = o(this);
            if (e.preventDefault(), e.stopPropagation(), !t.is(".disabled, :disabled")) {
                var n = s(t), i = n.hasClass("open");
                if (!i && 27 != e.which || i && 27 == e.which) return 27 == e.which && n.find(l).trigger("focus"), 
                t.trigger("click");
                var r = n.find(".dropdown-menu li:not(.disabled):visible a");
                if (r.length) {
                    var a = r.index(e.target);
                    38 == e.which && 0 < a && a--, 40 == e.which && a < r.length - 1 && a++, ~a || (a = 0), 
                    r.eq(a).trigger("focus");
                }
            }
        }
    };
    var t = o.fn.dropdown;
    o.fn.dropdown = function(n) {
        return this.each(function() {
            var e = o(this), t = e.data("bs.dropdown");
            t || e.data("bs.dropdown", t = new i(this)), "string" == typeof n && t[n].call(e);
        });
    }, o.fn.dropdown.Constructor = i, o.fn.dropdown.noConflict = function() {
        return o.fn.dropdown = t, this;
    }, o(document).on("click.bs.dropdown.data-api", a).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation();
    }).on("click.bs.dropdown.data-api", l, i.prototype.toggle).on("keydown.bs.dropdown.data-api", l, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown);
}(jQuery), function(a) {
    "use strict";
    function o(i, r) {
        return this.each(function() {
            var e = a(this), t = e.data("bs.modal"), n = a.extend({}, s.DEFAULTS, e.data(), "object" == typeof i && i);
            t || e.data("bs.modal", t = new s(this, n)), "string" == typeof i ? t[i](r) : n.show && t.show(r);
        });
    }
    var s = function(e, t) {
        this.options = t, this.$body = a(document.body), this.$element = a(e), this.$dialog = this.$element.find(".modal-dialog"), 
        this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, 
        this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };
    s.VERSION = "3.3.7", s.TRANSITION_DURATION = 300, s.BACKDROP_TRANSITION_DURATION = 150, 
    s.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, s.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e);
    }, s.prototype.show = function(n) {
        var i = this, e = a.Event("show.bs.modal", {
            relatedTarget: n
        });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, 
        this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), 
        this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), 
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                a(e.target).is(i.$element) && (i.ignoreBackdropClick = !0);
            });
        }), this.backdrop(function() {
            var e = a.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), 
            i.adjustDialog(), e && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var t = a.Event("shown.bs.modal", {
                relatedTarget: n
            });
            e ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(t);
            }).emulateTransitionEnd(s.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(t);
        }));
    }, s.prototype.hide = function(e) {
        e && e.preventDefault(), e = a.Event("hide.bs.modal"), this.$element.trigger(e), 
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), 
        a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), 
        this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : this.hideModal());
    }, s.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(e) {
            document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus");
        }, this));
    }, s.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(e) {
            27 == e.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    }, s.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
    }, s.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal");
        });
    }, s.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, s.prototype.backdrop = function(e) {
        var t = this, n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = a.support.transition && n;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), 
            this.$element.on("click.dismiss.bs.modal", a.proxy(function(e) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
            }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            i ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : e();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                t.removeBackdrop(), e && e();
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : r();
        } else e && e();
    }, s.prototype.handleUpdate = function() {
        this.adjustDialog();
    }, s.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        });
    }, s.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        });
    }, s.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar();
    }, s.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth);
    }, s.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
    }, s.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t;
    };
    var e = a.fn.modal;
    a.fn.modal = o, a.fn.modal.Constructor = s, a.fn.modal.noConflict = function() {
        return a.fn.modal = e, this;
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var t = a(this), n = t.attr("href"), i = a(t.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")), r = i.data("bs.modal") ? "toggle" : a.extend({
            remote: !/#/.test(n) && n
        }, i.data(), t.data());
        t.is("a") && e.preventDefault(), i.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || i.one("hidden.bs.modal", function() {
                t.is(":visible") && t.trigger("focus");
            });
        }), o.call(i, r, this);
    });
}(jQuery), function(m) {
    "use strict";
    var g = function(e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, 
        this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t);
    };
    g.VERSION = "3.3.7", g.TRANSITION_DURATION = 150, g.DEFAULTS = {
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
    }, g.prototype.init = function(e, t, n) {
        if (this.enabled = !0, this.type = e, this.$element = m(t), this.options = this.getOptions(n), 
        this.$viewport = this.options.viewport && m(m.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), 
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), r = i.length; r--; ) {
            var a = i[r];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, m.proxy(this.toggle, this)); else if ("manual" != a) {
                var o = "hover" == a ? "mouseenter" : "focusin", s = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(o + "." + this.type, this.options.selector, m.proxy(this.enter, this)), 
                this.$element.on(s + "." + this.type, this.options.selector, m.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = m.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    }, g.prototype.getDefaults = function() {
        return g.DEFAULTS;
    }, g.prototype.getOptions = function(e) {
        return (e = m.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e;
    }, g.prototype.getDelegateOptions = function() {
        var n = {}, i = this.getDefaults();
        return this._options && m.each(this._options, function(e, t) {
            i[e] != t && (n[e] = t);
        }), n;
    }, g.prototype.enter = function(e) {
        var t = e instanceof this.constructor ? e : m(e.currentTarget).data("bs." + this.type);
        return t || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), 
        m(e.currentTarget).data("bs." + this.type, t)), e instanceof m.Event && (t.inState["focusin" == e.type ? "focus" : "hover"] = !0), 
        t.tip().hasClass("in") || "in" == t.hoverState ? void (t.hoverState = "in") : (clearTimeout(t.timeout), 
        t.hoverState = "in", t.options.delay && t.options.delay.show ? void (t.timeout = setTimeout(function() {
            "in" == t.hoverState && t.show();
        }, t.options.delay.show)) : t.show());
    }, g.prototype.isInStateTrue = function() {
        for (var e in this.inState) if (this.inState[e]) return !0;
        return !1;
    }, g.prototype.leave = function(e) {
        var t = e instanceof this.constructor ? e : m(e.currentTarget).data("bs." + this.type);
        if (t || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), 
        m(e.currentTarget).data("bs." + this.type, t)), e instanceof m.Event && (t.inState["focusout" == e.type ? "focus" : "hover"] = !1), 
        !t.isInStateTrue()) return clearTimeout(t.timeout), t.hoverState = "out", t.options.delay && t.options.delay.hide ? void (t.timeout = setTimeout(function() {
            "out" == t.hoverState && t.hide();
        }, t.options.delay.hide)) : t.hide();
    }, g.prototype.show = function() {
        var e = m.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var t = m.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !t) return;
            var n = this, i = this.tip(), r = this.getUID(this.type);
            this.setContent(), i.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && i.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement, o = /\s?auto?\s?/i, s = o.test(a);
            s && (a = a.replace(o, "") || "top"), i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element), 
            this.$element.trigger("inserted.bs." + this.type);
            var l = this.getPosition(), u = i[0].offsetWidth, c = i[0].offsetHeight;
            if (s) {
                var d = a, p = this.getPosition(this.$viewport);
                a = "bottom" == a && l.bottom + c > p.bottom ? "top" : "top" == a && l.top - c < p.top ? "bottom" : "right" == a && l.right + u > p.width ? "left" : "left" == a && l.left - u < p.left ? "right" : a, 
                i.removeClass(d).addClass(a);
            }
            var f = this.getCalculatedOffset(a, l, u, c);
            this.applyPlacement(f, a);
            var h = function() {
                var e = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == e && n.leave(n);
            };
            m.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", h).emulateTransitionEnd(g.TRANSITION_DURATION) : h();
        }
    }, g.prototype.applyPlacement = function(e, t) {
        var n = this.tip(), i = n[0].offsetWidth, r = n[0].offsetHeight, a = parseInt(n.css("margin-top"), 10), o = parseInt(n.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(o) && (o = 0), e.top += a, e.left += o, m.offset.setOffset(n[0], m.extend({
            using: function(e) {
                n.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                });
            }
        }, e), 0), n.addClass("in");
        var s = n[0].offsetWidth, l = n[0].offsetHeight;
        "top" == t && l != r && (e.top = e.top + r - l);
        var u = this.getViewportAdjustedDelta(t, e, s, l);
        u.left ? e.left += u.left : e.top += u.top;
        var c = /top|bottom/.test(t), d = c ? 2 * u.left - i + s : 2 * u.top - r + l, p = c ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(d, n[0][p], c);
    }, g.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "");
    }, g.prototype.setContent = function() {
        var e = this.tip(), t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right");
    }, g.prototype.hide = function(e) {
        function t() {
            "in" != n.hoverState && i.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), 
            e && e();
        }
        var n = this, i = m(this.$tip), r = m.Event("hide.bs." + this.type);
        if (this.$element.trigger(r), !r.isDefaultPrevented()) return i.removeClass("in"), 
        m.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", t).emulateTransitionEnd(g.TRANSITION_DURATION) : t(), 
        this.hoverState = null, this;
    }, g.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "");
    }, g.prototype.hasContent = function() {
        return this.getTitle();
    }, g.prototype.getPosition = function(e) {
        var t = (e = e || this.$element)[0], n = "BODY" == t.tagName, i = t.getBoundingClientRect();
        null == i.width && (i = m.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var r = window.SVGElement && t instanceof window.SVGElement, a = n ? {
            top: 0,
            left: 0
        } : r ? null : e.offset(), o = {
            scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        }, s = n ? {
            width: m(window).width(),
            height: m(window).height()
        } : null;
        return m.extend({}, i, o, s, a);
    }, g.prototype.getCalculatedOffset = function(e, t, n, i) {
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
    }, g.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var a = this.options.viewport && this.options.viewport.padding || 0, o = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var s = t.top - a - o.scroll, l = t.top + a - o.scroll + i;
            s < o.top ? r.top = o.top - s : l > o.top + o.height && (r.top = o.top + o.height - l);
        } else {
            var u = t.left - a, c = t.left + a + n;
            u < o.left ? r.left = o.left - u : c > o.right && (r.left = o.left + o.width - c);
        }
        return r;
    }, g.prototype.getTitle = function() {
        var e = this.$element, t = this.options;
        return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title);
    }, g.prototype.getUID = function(e) {
        for (;e += ~~(1e6 * Math.random()), document.getElementById(e); ) ;
        return e;
    }, g.prototype.tip = function() {
        if (!this.$tip && (this.$tip = m(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip;
    }, g.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, g.prototype.enable = function() {
        this.enabled = !0;
    }, g.prototype.disable = function() {
        this.enabled = !1;
    }, g.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    }, g.prototype.toggle = function(e) {
        var t = this;
        e && ((t = m(e.currentTarget).data("bs." + this.type)) || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), 
        m(e.currentTarget).data("bs." + this.type, t))), e ? (t.inState.click = !t.inState.click, 
        t.isInStateTrue() ? t.enter(t) : t.leave(t)) : t.tip().hasClass("in") ? t.leave(t) : t.enter(t);
    }, g.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), 
            e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null;
        });
    };
    var e = m.fn.tooltip;
    m.fn.tooltip = function(i) {
        return this.each(function() {
            var e = m(this), t = e.data("bs.tooltip"), n = "object" == typeof i && i;
            !t && /destroy|hide/.test(i) || (t || e.data("bs.tooltip", t = new g(this, n)), 
            "string" == typeof i && t[i]());
        });
    }, m.fn.tooltip.Constructor = g, m.fn.tooltip.noConflict = function() {
        return m.fn.tooltip = e, this;
    };
}(jQuery), function(r) {
    "use strict";
    var a = function(e, t) {
        this.init("popover", e, t);
    };
    if (!r.fn.tooltip) throw new Error("Popover requires tooltip.js");
    a.VERSION = "3.3.7", a.DEFAULTS = r.extend({}, r.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), a.prototype = r.extend({}, r.fn.tooltip.Constructor.prototype), (a.prototype.constructor = a).prototype.getDefaults = function() {
        return a.DEFAULTS;
    }, a.prototype.setContent = function() {
        var e = this.tip(), t = this.getTitle(), n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), 
        e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide();
    }, a.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    }, a.prototype.getContent = function() {
        var e = this.$element, t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content);
    }, a.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };
    var e = r.fn.popover;
    r.fn.popover = function(i) {
        return this.each(function() {
            var e = r(this), t = e.data("bs.popover"), n = "object" == typeof i && i;
            !t && /destroy|hide/.test(i) || (t || e.data("bs.popover", t = new a(this, n)), 
            "string" == typeof i && t[i]());
        });
    }, r.fn.popover.Constructor = a, r.fn.popover.noConflict = function() {
        return r.fn.popover = e, this;
    };
}(jQuery), function(a) {
    "use strict";
    function r(e, t) {
        this.$body = a(document.body), this.$scrollElement = a(a(e).is(document.body) ? window : e), 
        this.options = a.extend({}, r.DEFAULTS, t), this.selector = (this.options.target || "") + " .nav li > a", 
        this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, 
        this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), 
        this.process();
    }
    function t(i) {
        return this.each(function() {
            var e = a(this), t = e.data("bs.scrollspy"), n = "object" == typeof i && i;
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
        a.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop()), 
        this.$body.find(this.selector).map(function() {
            var e = a(this), t = e.data("target") || e.attr("href"), n = /^#./.test(t) && a(t);
            return n && n.length && n.is(":visible") && [ [ n[i]().top + r, t ] ] || null;
        }).sort(function(e, t) {
            return e[0] - t[0];
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1]);
        });
    }, r.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), r = this.offsets, a = this.targets, o = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), i <= t) return o != (e = a[a.length - 1]) && this.activate(e);
        if (o && t < r[0]) return this.activeTarget = null, this.clear();
        for (e = r.length; e--; ) o != a[e] && t >= r[e] && (void 0 === r[e + 1] || t < r[e + 1]) && this.activate(a[e]);
    }, r.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var t = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', n = a(t).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), 
        n.trigger("activate.bs.scrollspy");
    }, r.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };
    var e = a.fn.scrollspy;
    a.fn.scrollspy = t, a.fn.scrollspy.Constructor = r, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = e, this;
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var e = a(this);
            t.call(e, e.data());
        });
    });
}(jQuery), function(s) {
    "use strict";
    function t(n) {
        return this.each(function() {
            var e = s(this), t = e.data("bs.tab");
            t || e.data("bs.tab", t = new o(this)), "string" == typeof n && t[n]();
        });
    }
    var o = function(e) {
        this.element = s(e);
    };
    o.VERSION = "3.3.7", o.TRANSITION_DURATION = 150, o.prototype.show = function() {
        var e = this.element, t = e.closest("ul:not(.dropdown-menu)"), n = e.data("target");
        if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var i = t.find(".active:last a"), r = s.Event("hide.bs.tab", {
                relatedTarget: e[0]
            }), a = s.Event("show.bs.tab", {
                relatedTarget: i[0]
            });
            if (i.trigger(r), e.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var o = s(n);
                this.activate(e.closest("li"), t), this.activate(o, o.parent(), function() {
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
    }, o.prototype.activate = function(e, t, n) {
        function i() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), 
            e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, 
            e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), 
            n && n();
        }
        var r = t.find("> .active"), a = n && s.support.transition && (r.length && r.hasClass("fade") || !!t.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i(), 
        r.removeClass("in");
    };
    var e = s.fn.tab;
    s.fn.tab = t, s.fn.tab.Constructor = o, s.fn.tab.noConflict = function() {
        return s.fn.tab = e, this;
    };
    var n = function(e) {
        e.preventDefault(), t.call(s(this), "show");
    };
    s(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n);
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
        var r = this.$target.scrollTop(), a = this.$element.offset(), o = this.$target.height();
        if (null != n && "top" == this.affixed) return r < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(r + this.unpin <= a.top) && "bottom" : !(r + o <= e - i) && "bottom";
        var s = null == this.affixed, l = s ? r : a.top;
        return null != n && r <= n ? "top" : null != i && e - i <= l + (s ? o : t) && "bottom";
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
            var a = this.getState(r, e, n, i);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var o = "affix" + (a ? "-" + a : ""), s = l.Event(o + ".bs.affix");
                if (this.$element.trigger(s), s.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(u.RESET).addClass(o).trigger(o.replace("affix", "affixed") + ".bs.affix");
            }
            "bottom" == a && this.$element.offset({
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
    function s(e) {
        var t = e.length, n = K.type(e);
        return "function" !== n && !K.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e));
    }
    function t(e, n, i) {
        if (K.isFunction(n)) return K.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i;
        });
        if (n.nodeType) return K.grep(e, function(e) {
            return e === n !== i;
        });
        if ("string" == typeof n) {
            if (ae.test(n)) return K.filter(n, e, i);
            n = K.filter(n, e);
        }
        return K.grep(e, function(e) {
            return 0 <= K.inArray(e, n) !== i;
        });
    }
    function n(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    function i() {
        se.addEventListener ? (se.removeEventListener("DOMContentLoaded", r, !1), h.removeEventListener("load", r, !1)) : (se.detachEvent("onreadystatechange", r), 
        h.detachEvent("onload", r));
    }
    function r() {
        (se.addEventListener || "load" === event.type || "complete" === se.readyState) && (i(), 
        K.ready());
    }
    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(ve, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ge.test(n) ? K.parseJSON(n) : n);
                } catch (e) {}
                K.data(e, t, n);
            } else n = void 0;
        }
        return n;
    }
    function u(e) {
        var t;
        for (t in e) if (("data" !== t || !K.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0;
    }
    function a(e, t, n, i) {
        if (K.acceptData(e)) {
            var r, a, o = K.expando, s = e.nodeType, l = s ? K.cache : e, u = s ? e[o] : e[o] && o;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[o] = q.pop() || K.guid++ : o), 
            l[u] || (l[u] = s ? {} : {
                toJSON: K.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = K.extend(l[u], t) : l[u].data = K.extend(l[u].data, t)), 
            a = l[u], i || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[K.camelCase(t)] = n), 
            "string" == typeof t ? null == (r = a[t]) && (r = a[K.camelCase(t)]) : r = a, r;
        }
    }
    function o(e, t, n) {
        if (K.acceptData(e)) {
            var i, r, a = e.nodeType, o = a ? K.cache : e, s = a ? e[K.expando] : K.expando;
            if (o[s]) {
                if (t && (i = n ? o[s] : o[s].data)) {
                    K.isArray(t) ? t = t.concat(K.map(t, K.camelCase)) : t in i ? t = [ t ] : t = (t = K.camelCase(t)) in i ? [ t ] : t.split(" "), 
                    r = t.length;
                    for (;r--; ) delete i[t[r]];
                    if (n ? !u(i) : !K.isEmptyObject(i)) return;
                }
                (n || (delete o[s].data, u(o[s]))) && (a ? K.cleanData([ e ], !0) : Q.deleteExpando || o != o.window ? delete o[s] : o[s] = null);
            }
        }
    }
    function c() {
        return !0;
    }
    function d() {
        return !1;
    }
    function p() {
        try {
            return se.activeElement;
        } catch (e) {}
    }
    function m(e) {
        var t = De.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (;t.length; ) n.createElement(t.pop());
        return n;
    }
    function g(e, t) {
        var n, i, r = 0, a = typeof e.getElementsByTagName !== me ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== me ? e.querySelectorAll(t || "*") : void 0;
        if (!a) for (a = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || K.nodeName(i, t) ? a.push(i) : K.merge(a, g(i, t));
        return void 0 === t || t && K.nodeName(e, t) ? K.merge([ e ], a) : a;
    }
    function v(e) {
        Te.test(e.type) && (e.defaultChecked = e.checked);
    }
    function f(e, t) {
        return K.nodeName(e, "table") && K.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function y(e) {
        return e.type = (null !== K.find.attr(e, "type")) + "/" + e.type, e;
    }
    function b(e) {
        var t = Re.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function w(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) K._data(n, "globalEval", !t || K._data(t[i], "globalEval"));
    }
    function x(e, t) {
        if (1 === t.nodeType && K.hasData(e)) {
            var n, i, r, a = K._data(e), o = K._data(t, a), s = a.events;
            if (s) for (n in delete o.handle, o.events = {}, s) for (i = 0, r = s[n].length; i < r; i++) K.event.add(t, n, s[n][i]);
            o.data && (o.data = K.extend({}, o.data));
        }
    }
    function T(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !Q.noCloneEvent && t[K.expando]) {
                for (i in (r = K._data(t)).events) K.removeEvent(t, i, r.handle);
                t.removeAttribute(K.expando);
            }
            "script" === n && t.text !== e.text ? (y(t).text = e.text, b(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
            Q.html5Clone && e.innerHTML && !K.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Te.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
        }
    }
    function C(e, t) {
        var n, i = K(t.createElement(e)).appendTo(t.body), r = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(i[0])) ? n.display : K.css(i[0], "display");
        return i.detach(), r;
    }
    function S(e) {
        var t = se, n = Xe[e];
        return n || ("none" !== (n = C(e, t)) && n || ((t = ((We = (We || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || We[0].contentDocument).document).write(), 
        t.close(), n = C(e, t), We.detach()), Xe[e] = n), n;
    }
    function E(t, n) {
        return {
            get: function() {
                var e = t();
                if (null != e) return e ? void delete this.get : (this.get = n).apply(this, arguments);
            }
        };
    }
    function k(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = rt.length; r--; ) if ((t = rt[r] + n) in e) return t;
        return i;
    }
    function N(e, t) {
        for (var n, i, r, a = [], o = 0, s = e.length; o < s; o++) (i = e[o]).style && (a[o] = K._data(i, "olddisplay"), 
        n = i.style.display, t ? (a[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && we(i) && (a[o] = K._data(i, "olddisplay", S(i.nodeName)))) : (r = we(i), 
        (n && "none" !== n || !r) && K._data(i, "olddisplay", r ? n : K.css(i, "display"))));
        for (o = 0; o < s; o++) (i = e[o]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[o] || "" : "none"));
        return e;
    }
    function D(e, t, n) {
        var i = et.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
    }
    function A(e, t, n, i, r) {
        for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; a < 4; a += 2) "margin" === n && (o += K.css(e, n + be[a], !0, r)), 
        i ? ("content" === n && (o -= K.css(e, "padding" + be[a], !0, r)), "margin" !== n && (o -= K.css(e, "border" + be[a] + "Width", !0, r))) : (o += K.css(e, "padding" + be[a], !0, r), 
        "padding" !== n && (o += K.css(e, "border" + be[a] + "Width", !0, r)));
        return o;
    }
    function L(e, t, n) {
        var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, a = Ge(e), o = Q.boxSizing && "border-box" === K.css(e, "boxSizing", !1, a);
        if (r <= 0 || null == r) {
            if (((r = Ye(e, t, a)) < 0 || null == r) && (r = e.style[t]), Ue.test(r)) return r;
            i = o && (Q.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0;
        }
        return r + A(e, t, n || (o ? "border" : "content"), i, a) + "px";
    }
    function M(e, t, n, i, r) {
        return new M.prototype.init(e, t, n, i, r);
    }
    function z() {
        return setTimeout(function() {
            at = void 0;
        }), at = K.now();
    }
    function P(e, t) {
        var n, i = {
            height: e
        }, r = 0;
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = be[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function I(e, t, n) {
        for (var i, r = (gt[t] || []).concat(gt["*"]), a = 0, o = r.length; a < o; a++) if (i = r[a].call(n, t, e)) return i;
    }
    function H(a, e, t) {
        var n, o, i = 0, r = mt.length, s = K.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (o) return !1;
            for (var e = at || z(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
            return s.notifyWith(a, [ u, n, t ]), n < 1 && r ? t : (s.resolveWith(a, [ u ]), 
            !1);
        }, u = s.promise({
            elem: a,
            props: K.extend({}, e),
            opts: K.extend(!0, {
                specialEasing: {}
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: at || z(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = K.Tween(a, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n), n;
            },
            stop: function(e) {
                var t = 0, n = e ? u.tweens.length : 0;
                if (o) return this;
                for (o = !0; t < n; t++) u.tweens[t].run(1);
                return e ? s.resolveWith(a, [ u, e ]) : s.rejectWith(a, [ u, e ]), this;
            }
        }), c = u.props;
        for (function(e, t) {
            var n, i, r, a, o;
            for (n in e) if (r = t[i = K.camelCase(n)], a = e[n], K.isArray(a) && (r = a[1], 
            a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (o = K.cssHooks[i]) && "expand" in o) for (n in a = o.expand(a), 
            delete e[i], a) n in e || (e[n] = a[n], t[n] = r); else t[i] = r;
        }(c, u.opts.specialEasing); i < r; i++) if (n = mt[i].call(u, a, c, u.opts)) return n;
        return K.map(c, I, u), K.isFunction(u.opts.start) && u.opts.start.call(a, u), K.fx.timer(K.extend(l, {
            elem: a,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
    }
    function $(a) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0, r = e.toLowerCase().match(pe) || [];
            if (K.isFunction(t)) for (;n = r[i++]; ) "+" === n.charAt(0) ? (n = n.slice(1) || "*", 
            (a[n] = a[n] || []).unshift(t)) : (a[n] = a[n] || []).push(t);
        };
    }
    function j(t, r, a, o) {
        function s(e) {
            var i;
            return l[e] = !0, K.each(t[e] || [], function(e, t) {
                var n = t(r, a, o);
                return "string" != typeof n || u || l[n] ? u ? !(i = n) : void 0 : (r.dataTypes.unshift(n), 
                s(n), !1);
            }), i;
        }
        var l = {}, u = t === Rt;
        return s(r.dataTypes[0]) || !l["*"] && s("*");
    }
    function O(e, t) {
        var n, i, r = K.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && K.extend(!0, e, n), e;
    }
    function R(n, e, i, r) {
        var t;
        if (K.isArray(e)) K.each(e, function(e, t) {
            i || qt.test(n) ? r(n, t) : R(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, r);
        }); else if (i || "object" !== K.type(e)) r(n, e); else for (t in e) R(n + "[" + t + "]", e[t], i, r);
    }
    function B() {
        try {
            return new h.XMLHttpRequest();
        } catch (e) {}
    }
    function _(e) {
        return K.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
    }
    var q = [], W = q.slice, F = q.concat, X = q.push, G = q.indexOf, Y = {}, V = Y.toString, U = Y.hasOwnProperty, Q = {}, K = function(e, t) {
        return new K.fn.init(e, t);
    }, J = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Z = /^-ms-/, ee = /-([\da-z])/gi, te = function(e, t) {
        return t.toUpperCase();
    };
    K.fn = K.prototype = {
        jquery: "1.11.2",
        constructor: K,
        selector: "",
        length: 0,
        toArray: function() {
            return W.call(this);
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : W.call(this);
        },
        pushStack: function(e) {
            var t = K.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e, t) {
            return K.each(this, e, t);
        },
        map: function(n) {
            return this.pushStack(K.map(this, function(e, t) {
                return n.call(e, t, e);
            }));
        },
        slice: function() {
            return this.pushStack(W.apply(this, arguments));
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
        push: X,
        sort: q.sort,
        splice: q.splice
    }, K.extend = K.fn.extend = function() {
        var e, t, n, i, r, a, o = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || K.isFunction(o) || (o = {}), 
        s === l && (o = this, s--); s < l; s++) if (null != (r = arguments[s])) for (i in r) e = o[i], 
        o !== (n = r[i]) && (u && n && (K.isPlainObject(n) || (t = K.isArray(n))) ? (t ? (t = !1, 
        a = e && K.isArray(e) ? e : []) : a = e && K.isPlainObject(e) ? e : {}, o[i] = K.extend(u, a, n)) : void 0 !== n && (o[i] = n));
        return o;
    }, K.extend({
        expando: "jQuery" + ("1.11.2" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === K.type(e);
        },
        isArray: Array.isArray || function(e) {
            return "array" === K.type(e);
        },
        isWindow: function(e) {
            return null != e && e == e.window;
        },
        isNumeric: function(e) {
            return !K.isArray(e) && 0 <= e - parseFloat(e) + 1;
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== K.type(e) || e.nodeType || K.isWindow(e)) return !1;
            try {
                if (e.constructor && !U.call(e, "constructor") && !U.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (e) {
                return !1;
            }
            if (Q.ownLast) for (t in e) return U.call(e, t);
            for (t in e) ;
            return void 0 === t || U.call(e, t);
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Y[V.call(e)] || "object" : typeof e;
        },
        globalEval: function(e) {
            e && K.trim(e) && (h.execScript || function(e) {
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
            var i = 0, r = e.length, a = s(e);
            if (n) {
                if (a) for (;i < r && !1 !== t.apply(e[i], n); i++) ; else for (i in e) if (!1 === t.apply(e[i], n)) break;
            } else if (a) for (;i < r && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(J, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (s(Object(e)) ? K.merge(n, "string" == typeof e ? [ e ] : e) : X.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (G) return G.call(t, e, n);
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
            for (var i = [], r = 0, a = e.length, o = !n; r < a; r++) !t(e[r], r) !== o && i.push(e[r]);
            return i;
        },
        map: function(e, t, n) {
            var i, r = 0, a = e.length, o = [];
            if (s(e)) for (;r < a; r++) null != (i = t(e[r], r, n)) && o.push(i); else for (r in e) null != (i = t(e[r], r, n)) && o.push(i);
            return F.apply([], o);
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), K.isFunction(e) ? (n = W.call(arguments, 2), 
            (i = function() {
                return e.apply(t || this, n.concat(W.call(arguments)));
            }).guid = e.guid = e.guid || K.guid++, i) : void 0;
        },
        now: function() {
            return +new Date();
        },
        support: Q
    }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Y["[object " + t + "]"] = t.toLowerCase();
    });
    var ne = function(n) {
        function w(e, t, n, i) {
            var r, a, o, s, l, u, c, d, p, f;
            if ((t ? t.ownerDocument || t : O) !== L && A(t), n = n || [], s = (t = t || L).nodeType, 
            "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!i && z) {
                if (11 !== s && (r = ge.exec(e))) if (o = r[1]) {
                    if (9 === s) {
                        if (!(a = t.getElementById(o)) || !a.parentNode) return n;
                        if (a.id === o) return n.push(a), n;
                    } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(o)) && $(t, a) && a.id === o) return n.push(a), 
                    n;
                } else {
                    if (r[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                    if ((o = r[3]) && g.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(o)), 
                    n;
                }
                if (g.qsa && (!P || !P.test(e))) {
                    if (d = c = j, p = t, f = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = C(e), (c = t.getAttribute("id")) ? d = c.replace(ye, "\\$&") : t.setAttribute("id", d), 
                        d = "[id='" + d + "'] ", l = u.length; l--; ) u[l] = d + m(u[l]);
                        p = ve.test(e) && h(t.parentNode) || t, f = u.join(",");
                    }
                    if (f) try {
                        return Q.apply(n, p.querySelectorAll(f)), n;
                    } catch (e) {} finally {
                        c || t.removeAttribute("id");
                    }
                }
            }
            return E(e.replace(oe, "$1"), t, n, i);
        }
        function e() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > T.cacheLength && delete e[i.shift()], e[t + " "] = n;
            };
        }
        function l(e) {
            return e[j] = !0, e;
        }
        function i(e) {
            var t = L.createElement("div");
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
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (i) return i;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function r(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function a(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function o(o) {
            return l(function(a) {
                return a = +a, l(function(e, t) {
                    for (var n, i = o([], e.length, a), r = i.length; r--; ) e[n = i[r]] && (e[n] = !(t[n] = e[n]));
                });
            });
        }
        function h(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        function s() {}
        function m(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function d(o, e, t) {
            var s = e.dir, l = t && "parentNode" === s, u = B++;
            return e.first ? function(e, t, n) {
                for (;e = e[s]; ) if (1 === e.nodeType || l) return o(e, t, n);
            } : function(e, t, n) {
                var i, r, a = [ R, u ];
                if (n) {
                    for (;e = e[s]; ) if ((1 === e.nodeType || l) && o(e, t, n)) return !0;
                } else for (;e = e[s]; ) if (1 === e.nodeType || l) {
                    if ((i = (r = e[j] || (e[j] = {}))[s]) && i[0] === R && i[1] === u) return a[2] = i[2];
                    if ((r[s] = a)[2] = o(e, t, n)) return !0;
                }
            };
        }
        function p(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--; ) if (!r[i](e, t, n)) return !1;
                return !0;
            } : r[0];
        }
        function x(e, t, n, i, r) {
            for (var a, o = [], s = 0, l = e.length, u = null != t; s < l; s++) (a = e[s]) && (!n || n(a, i, r)) && (o.push(a), 
            u && t.push(s));
            return o;
        }
        function y(f, h, m, g, v, e) {
            return g && !g[j] && (g = y(g)), v && !v[j] && (v = y(v, e)), l(function(e, t, n, i) {
                var r, a, o, s = [], l = [], u = t.length, c = e || function(e, t, n) {
                    for (var i = 0, r = t.length; i < r; i++) w(e, t[i], n);
                    return n;
                }(h || "*", n.nodeType ? [ n ] : n, []), d = !f || !e && h ? c : x(c, s, f, n, i), p = m ? v || (e ? f : u || g) ? [] : t : d;
                if (m && m(d, p, n, i), g) for (r = x(p, l), g(r, [], n, i), a = r.length; a--; ) (o = r[a]) && (p[l[a]] = !(d[l[a]] = o));
                if (e) {
                    if (v || f) {
                        if (v) {
                            for (r = [], a = p.length; a--; ) (o = p[a]) && r.push(d[a] = o);
                            v(null, p = [], r, i);
                        }
                        for (a = p.length; a--; ) (o = p[a]) && -1 < (r = v ? J(e, o) : s[a]) && (e[r] = !(t[r] = o));
                    }
                } else p = x(p === t ? p.splice(u, p.length) : p), v ? v(null, t, p, i) : Q.apply(t, p);
            });
        }
        function f(e) {
            for (var r, t, n, i = e.length, a = T.relative[e[0].type], o = a || T.relative[" "], s = a ? 1 : 0, l = d(function(e) {
                return e === r;
            }, o, !0), u = d(function(e) {
                return -1 < J(r, e);
            }, o, !0), c = [ function(e, t, n) {
                var i = !a && (n || t !== k) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                return r = null, i;
            } ]; s < i; s++) if (t = T.relative[e[s].type]) c = [ d(p(c), t) ]; else {
                if ((t = T.filter[e[s].type].apply(null, e[s].matches))[j]) {
                    for (n = ++s; n < i && !T.relative[e[n].type]; n++) ;
                    return y(1 < s && p(c), 1 < s && m(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace(oe, "$1"), t, s < n && f(e.slice(s, n)), n < i && f(e = e.slice(n)), n < i && m(e));
                }
                c.push(t);
            }
            return p(c);
        }
        var c, g, T, v, b, C, S, E, k, N, D, A, L, M, z, P, I, H, $, j = "sizzle" + 1 * new Date(), O = n.document, R = 0, B = 0, _ = e(), q = e(), W = e(), F = function(e, t) {
            return e === t && (D = !0), 0;
        }, X = 1 << 31, G = {}.hasOwnProperty, Y = [], V = Y.pop, U = Y.push, Q = Y.push, K = Y.slice, J = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ne = te.replace("w", "w#"), ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ee + "*\\]", re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ee + "+", "g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), se = new RegExp("^" + ee + "*," + ee + "*"), le = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ce = new RegExp(re), de = new RegExp("^" + ne + "$"), pe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + Z + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        }, fe = /^(?:input|select|textarea|button)$/i, he = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, ye = /'|\\/g, be = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), we = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        }, xe = function() {
            A();
        };
        try {
            Q.apply(Y = K.call(O.childNodes), O.childNodes), Y[O.childNodes.length].nodeType;
        } catch (e) {
            Q = {
                apply: Y.length ? function(e, t) {
                    U.apply(e, K.call(t));
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        for (c in g = w.support = {}, b = w.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, A = w.setDocument = function(e) {
            var t, n, l = e ? e.ownerDocument || e : O;
            return l !== L && 9 === l.nodeType && l.documentElement ? (M = (L = l).documentElement, 
            (n = l.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), 
            z = !b(l), g.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), g.getElementsByTagName = i(function(e) {
                return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length;
            }), g.getElementsByClassName = me.test(l.getElementsByClassName), g.getById = i(function(e) {
                return M.appendChild(e).id = j, !l.getElementsByName || !l.getElementsByName(j).length;
            }), g.getById ? (T.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && z) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [ n ] : [];
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var n = e.replace(be, we);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                };
            }), T.find.TAG = g.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : g.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, i = [], r = 0, a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = a[r++]; ) 1 === n.nodeType && i.push(n);
                    return i;
                }
                return a;
            }, T.find.CLASS = g.getElementsByClassName && function(e, t) {
                return z ? t.getElementsByClassName(e) : void 0;
            }, I = [], P = [], (g.qsa = me.test(l.querySelectorAll)) && (i(function(e) {
                M.appendChild(e).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ee + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || P.push("\\[" + ee + "*(?:value|" + Z + ")"), 
                e.querySelectorAll("[id~=" + j + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), 
                e.querySelectorAll("a#" + j + "+*").length || P.push(".#.+[+~]");
            }), i(function(e) {
                var t = l.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ee + "*[*^$|!~]?="), 
                e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                P.push(",.*:");
            })), (g.matchesSelector = me.test(H = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && i(function(e) {
                g.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), I.push("!=", re);
            }), P = P.length && new RegExp(P.join("|")), I = I.length && new RegExp(I.join("|")), 
            t = me.test(M.compareDocumentPosition), $ = t || me.test(M.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, F = t ? function(e, t) {
                if (e === t) return D = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !g.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === O && $(O, e) ? -1 : t === l || t.ownerDocument === O && $(O, t) ? 1 : N ? J(N, e) - J(N, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return D = !0, 0;
                var n, i = 0, r = e.parentNode, a = t.parentNode, o = [ e ], s = [ t ];
                if (!r || !a) return e === l ? -1 : t === l ? 1 : r ? -1 : a ? 1 : N ? J(N, e) - J(N, t) : 0;
                if (r === a) return u(e, t);
                for (n = e; n = n.parentNode; ) o.unshift(n);
                for (n = t; n = n.parentNode; ) s.unshift(n);
                for (;o[i] === s[i]; ) i++;
                return i ? u(o[i], s[i]) : o[i] === O ? -1 : s[i] === O ? 1 : 0;
            }, l) : L;
        }, w.matches = function(e, t) {
            return w(e, null, null, t);
        }, w.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== L && A(e), t = t.replace(ue, "='$1']"), !(!g.matchesSelector || !z || I && I.test(t) || P && P.test(t))) try {
                var n = H.call(e, t);
                if (n || g.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (e) {}
            return 0 < w(t, L, null, [ e ]).length;
        }, w.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && A(e), $(e, t);
        }, w.attr = function(e, t) {
            (e.ownerDocument || e) !== L && A(e);
            var n = T.attrHandle[t.toLowerCase()], i = n && G.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !z) : void 0;
            return void 0 !== i ? i : g.attributes || !z ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }, w.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, w.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (D = !g.detectDuplicates, N = !g.sortStable && e.slice(0), e.sort(F), D) {
                for (;t = e[r++]; ) t === e[r] && (i = n.push(r));
                for (;i--; ) e.splice(n[i], 1);
            }
            return N = null, e;
        }, v = w.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += v(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (;t = e[i++]; ) n += v(t);
            return n;
        }, (T = w.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: pe,
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
                    return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || w.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && w.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, we).toLowerCase();
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
                        var t = w.attr(e, n);
                        return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(ae, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"));
                    };
                },
                CHILD: function(f, e, t, h, m) {
                    var g = "nth" !== f.slice(0, 3), v = "last" !== f.slice(-4), y = "of-type" === e;
                    return 1 === h && 0 === m ? function(e) {
                        return !!e.parentNode;
                    } : function(e, t, n) {
                        var i, r, a, o, s, l, u = g !== v ? "nextSibling" : "previousSibling", c = e.parentNode, d = y && e.nodeName.toLowerCase(), p = !n && !y;
                        if (c) {
                            if (g) {
                                for (;u; ) {
                                    for (a = e; a = a[u]; ) if (y ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                    l = u = "only" === f && !l && "nextSibling";
                                }
                                return !0;
                            }
                            if (l = [ v ? c.firstChild : c.lastChild ], v && p) {
                                for (s = (i = (r = c[j] || (c[j] = {}))[f] || [])[0] === R && i[1], o = i[0] === R && i[2], 
                                a = s && c.childNodes[s]; a = ++s && a && a[u] || (o = s = 0) || l.pop(); ) if (1 === a.nodeType && ++o && a === e) {
                                    r[f] = [ R, s, o ];
                                    break;
                                }
                            } else if (p && (i = (e[j] || (e[j] = {}))[f]) && i[0] === R) o = i[1]; else for (;(a = ++s && a && a[u] || (o = s = 0) || l.pop()) && ((y ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++o || (p && ((a[j] || (a[j] = {}))[f] = [ R, o ]), 
                            a !== e)); ) ;
                            return (o -= m) === h || o % h == 0 && 0 <= o / h;
                        }
                    };
                },
                PSEUDO: function(e, a) {
                    var t, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || w.error("unsupported pseudo: " + e);
                    return o[j] ? o(a) : 1 < o.length ? (t = [ e, e, "", a ], T.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function(e, t) {
                        for (var n, i = o(e, a), r = i.length; r--; ) e[n = J(e, i[r])] = !(t[n] = i[r]);
                    }) : function(e) {
                        return o(e, 0, t);
                    }) : o;
                }
            },
            pseudos: {
                not: l(function(e) {
                    var i = [], r = [], s = S(e.replace(oe, "$1"));
                    return s[j] ? l(function(e, t, n, i) {
                        for (var r, a = s(e, null, i, []), o = e.length; o--; ) (r = a[o]) && (e[o] = !(t[o] = r));
                    }) : function(e, t, n) {
                        return i[0] = e, s(i, null, n, r), i[0] = null, !r.pop();
                    };
                }),
                has: l(function(t) {
                    return function(e) {
                        return 0 < w(t, e).length;
                    };
                }),
                contains: l(function(t) {
                    return t = t.replace(be, we), function(e) {
                        return -1 < (e.textContent || e.innerText || v(e)).indexOf(t);
                    };
                }),
                lang: l(function(n) {
                    return de.test(n || "") || w.error("unsupported lang: " + n), n = n.replace(be, we).toLowerCase(), 
                    function(e) {
                        var t;
                        do {
                            if (t = z ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function(e) {
                    return e === M;
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
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
                    return fe.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: o(function() {
                    return [ 0 ];
                }),
                last: o(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: o(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: o(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: o(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: o(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
                    return e;
                }),
                gt: o(function(e, t, n) {
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
        }) T.pseudos[c] = a(c);
        return s.prototype = T.filters = T.pseudos, T.setFilters = new s(), C = w.tokenize = function(e, t) {
            var n, i, r, a, o, s, l, u = q[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (o = e, s = [], l = T.preFilter; o; ) {
                for (a in (!n || (i = se.exec(o))) && (i && (o = o.slice(i[0].length) || o), s.push(r = [])), 
                n = !1, (i = le.exec(o)) && (n = i.shift(), r.push({
                    value: n,
                    type: i[0].replace(oe, " ")
                }), o = o.slice(n.length)), T.filter) !(i = pe[a].exec(o)) || l[a] && !(i = l[a](i)) || (n = i.shift(), 
                r.push({
                    value: n,
                    type: a,
                    matches: i
                }), o = o.slice(n.length));
                if (!n) break;
            }
            return t ? o.length : o ? w.error(e) : q(e, s).slice(0);
        }, S = w.compile = function(e, t) {
            var n, g, v, y, b, i, r = [], a = [], o = W[e + " "];
            if (!o) {
                for (t || (t = C(e)), n = t.length; n--; ) (o = f(t[n]))[j] ? r.push(o) : a.push(o);
                (o = W(e, (g = a, y = 0 < (v = r).length, b = 0 < g.length, i = function(e, t, n, i, r) {
                    var a, o, s, l = 0, u = "0", c = e && [], d = [], p = k, f = e || b && T.find.TAG("*", r), h = R += null == p ? 1 : Math.random() || .1, m = f.length;
                    for (r && (k = t !== L && t); u !== m && null != (a = f[u]); u++) {
                        if (b && a) {
                            for (o = 0; s = g[o++]; ) if (s(a, t, n)) {
                                i.push(a);
                                break;
                            }
                            r && (R = h);
                        }
                        y && ((a = !s && a) && l--, e && c.push(a));
                    }
                    if (l += u, y && u !== l) {
                        for (o = 0; s = v[o++]; ) s(c, d, t, n);
                        if (e) {
                            if (0 < l) for (;u--; ) c[u] || d[u] || (d[u] = V.call(i));
                            d = x(d);
                        }
                        Q.apply(i, d), r && !e && 0 < d.length && 1 < l + v.length && w.uniqueSort(i);
                    }
                    return r && (R = h, k = p), c;
                }, y ? l(i) : i))).selector = e;
            }
            return o;
        }, E = w.select = function(e, t, n, i) {
            var r, a, o, s, l, u = "function" == typeof e && e, c = !i && C(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (a = c[0] = c[0].slice(0)).length && "ID" === (o = a[0]).type && g.getById && 9 === t.nodeType && z && T.relative[a[1].type]) {
                    if (!(t = (T.find.ID(o.matches[0].replace(be, we), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(a.shift().value.length);
                }
                for (r = pe.needsContext.test(e) ? 0 : a.length; r-- && (o = a[r], !T.relative[s = o.type]); ) if ((l = T.find[s]) && (i = l(o.matches[0].replace(be, we), ve.test(a[0].type) && h(t.parentNode) || t))) {
                    if (a.splice(r, 1), !(e = i.length && m(a))) return Q.apply(n, i), n;
                    break;
                }
            }
            return (u || S(e, c))(i, t, !z, n, ve.test(e) && h(t.parentNode) || t), n;
        }, g.sortStable = j.split("").sort(F).join("") === j, g.detectDuplicates = !!D, 
        A(), g.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"));
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || t("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), g.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || t("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
        }), i(function(e) {
            return null == e.getAttribute("disabled");
        }) || t(Z, function(e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }), w;
    }(h);
    K.find = ne, K.expr = ne.selectors, K.expr[":"] = K.expr.pseudos, K.unique = ne.uniqueSort, 
    K.text = ne.getText, K.isXMLDoc = ne.isXML, K.contains = ne.contains;
    var ie = K.expr.match.needsContext, re = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ae = /^.[^:#\[\.,]*$/;
    K.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? K.find.matchesSelector(i, e) ? [ i ] : [] : K.find.matches(e, K.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, K.fn.extend({
        find: function(e) {
            var t, n = [], i = this, r = i.length;
            if ("string" != typeof e) return this.pushStack(K(e).filter(function() {
                for (t = 0; t < r; t++) if (K.contains(i[t], this)) return !0;
            }));
            for (t = 0; t < r; t++) K.find(e, i[t], n);
            return (n = this.pushStack(1 < r ? K.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, 
            n;
        },
        filter: function(e) {
            return this.pushStack(t(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(t(this, e || [], !0));
        },
        is: function(e) {
            return !!t(this, "string" == typeof e && ie.test(e) ? K(e) : e || [], !1).length;
        }
    });
    var oe, se = h.document, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (K.fn.init = function(e, t) {
        var n, i;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [ null, e, null ] : le.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || oe).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof K ? t[0] : t, K.merge(this, K.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), 
                re.test(n[1]) && K.isPlainObject(t)) for (n in t) K.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this;
            }
            if ((i = se.getElementById(n[2])) && i.parentNode) {
                if (i.id !== n[2]) return oe.find(e);
                this.length = 1, this[0] = i;
            }
            return this.context = se, this.selector = e, this;
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : K.isFunction(e) ? void 0 !== oe.ready ? oe.ready(e) : e(K) : (void 0 !== e.selector && (this.selector = e.selector, 
        this.context = e.context), K.makeArray(e, this));
    }).prototype = K.fn, oe = K(se);
    var ue = /^(?:parents|prev(?:Until|All))/, ce = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    K.extend({
        dir: function(e, t, n) {
            for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !K(r).is(n)); ) 1 === r.nodeType && i.push(r), 
            r = r[t];
            return i;
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    }), K.fn.extend({
        has: function(e) {
            var t, n = K(e, this), i = n.length;
            return this.filter(function() {
                for (t = 0; t < i; t++) if (K.contains(this, n[t])) return !0;
            });
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, a = [], o = ie.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && K.find.matchesSelector(n, e))) {
                a.push(n);
                break;
            }
            return this.pushStack(1 < a.length ? K.unique(a) : a);
        },
        index: function(e) {
            return e ? "string" == typeof e ? K.inArray(this[0], K(e)) : K.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(K.unique(K.merge(this.get(), K(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), K.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return K.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return K.dir(e, "parentNode", n);
        },
        next: function(e) {
            return n(e, "nextSibling");
        },
        prev: function(e) {
            return n(e, "previousSibling");
        },
        nextAll: function(e) {
            return K.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return K.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return K.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return K.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return K.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return K.sibling(e.firstChild);
        },
        contents: function(e) {
            return K.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : K.merge([], e.childNodes);
        }
    }, function(i, r) {
        K.fn[i] = function(e, t) {
            var n = K.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = K.filter(t, n)), 
            1 < this.length && (ce[i] || (n = K.unique(n)), ue.test(i) && (n = n.reverse())), 
            this.pushStack(n);
        };
    });
    var de, pe = /\S+/g, fe = {};
    K.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? fe[r] || (n = fe[e = r] = {}, K.each(e.match(pe) || [], function(e, t) {
            n[t] = !0;
        }), n) : K.extend({}, r);
        var i, t, a, o, s, l, u = [], c = !r.once && [], d = function(e) {
            for (t = r.memory && e, a = !0, s = l || 0, l = 0, o = u.length, i = !0; u && s < o; s++) if (!1 === u[s].apply(e[0], e[1]) && r.stopOnFalse) {
                t = !1;
                break;
            }
            i = !1, u && (c ? c.length && d(c.shift()) : t ? u = [] : p.disable());
        }, p = {
            add: function() {
                if (u) {
                    var e = u.length;
                    !function i(e) {
                        K.each(e, function(e, t) {
                            var n = K.type(t);
                            "function" === n ? r.unique && p.has(t) || u.push(t) : t && t.length && "string" !== n && i(t);
                        });
                    }(arguments), i ? o = u.length : t && (l = e, d(t));
                }
                return this;
            },
            remove: function() {
                return u && K.each(arguments, function(e, t) {
                    for (var n; -1 < (n = K.inArray(t, u, n)); ) u.splice(n, 1), i && (n <= o && o--, 
                    n <= s && s--);
                }), this;
            },
            has: function(e) {
                return e ? -1 < K.inArray(e, u) : !(!u || !u.length);
            },
            empty: function() {
                return u = [], o = 0, this;
            },
            disable: function() {
                return u = c = t = void 0, this;
            },
            disabled: function() {
                return !u;
            },
            lock: function() {
                return c = void 0, t || p.disable(), this;
            },
            locked: function() {
                return !c;
            },
            fireWith: function(e, t) {
                return !u || a && !c || (t = [ e, (t = t || []).slice ? t.slice() : t ], i ? c.push(t) : d(t)), 
                this;
            },
            fire: function() {
                return p.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!a;
            }
        };
        return p;
    }, K.extend({
        Deferred: function(e) {
            var a = [ [ "resolve", "done", K.Callbacks("once memory"), "resolved" ], [ "reject", "fail", K.Callbacks("once memory"), "rejected" ], [ "notify", "progress", K.Callbacks("memory") ] ], r = "pending", o = {
                state: function() {
                    return r;
                },
                always: function() {
                    return s.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var r = arguments;
                    return K.Deferred(function(i) {
                        K.each(a, function(e, t) {
                            var n = K.isFunction(r[e]) && r[e];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && K.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === o ? i.promise() : this, n ? [ e ] : arguments);
                            });
                        }), r = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? K.extend(e, o) : o;
                }
            }, s = {};
            return o.pipe = o.then, K.each(a, function(e, t) {
                var n = t[2], i = t[3];
                o[t[1]] = n.add, i && n.add(function() {
                    r = i;
                }, a[1 ^ e][2].disable, a[2][2].lock), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? o : this, arguments), this;
                }, s[t[0] + "With"] = n.fireWith;
            }), o.promise(s), e && e.call(s, s), s;
        },
        when: function(e) {
            var r, t, n, i = 0, a = W.call(arguments), o = a.length, s = 1 !== o || e && K.isFunction(e.promise) ? o : 0, l = 1 === s ? e : K.Deferred(), u = function(t, n, i) {
                return function(e) {
                    n[t] = this, i[t] = 1 < arguments.length ? W.call(arguments) : e, i === r ? l.notifyWith(n, i) : --s || l.resolveWith(n, i);
                };
            };
            if (1 < o) for (r = new Array(o), t = new Array(o), n = new Array(o); i < o; i++) a[i] && K.isFunction(a[i].promise) ? a[i].promise().done(u(i, n, a)).fail(l.reject).progress(u(i, t, r)) : --s;
            return s || l.resolveWith(n, a), l.promise();
        }
    }), K.fn.ready = function(e) {
        return K.ready.promise().done(e), this;
    }, K.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? K.readyWait++ : K.ready(!0);
        },
        ready: function(e) {
            if (!0 === e ? !--K.readyWait : !K.isReady) {
                if (!se.body) return setTimeout(K.ready);
                (K.isReady = !0) !== e && 0 < --K.readyWait || (de.resolveWith(se, [ K ]), K.fn.triggerHandler && (K(se).triggerHandler("ready"), 
                K(se).off("ready")));
            }
        }
    }), K.ready.promise = function(e) {
        if (!de) if (de = K.Deferred(), "complete" === se.readyState) setTimeout(K.ready); else if (se.addEventListener) se.addEventListener("DOMContentLoaded", r, !1), 
        h.addEventListener("load", r, !1); else {
            se.attachEvent("onreadystatechange", r), h.attachEvent("onload", r);
            var n = !1;
            try {
                n = null == h.frameElement && se.documentElement;
            } catch (e) {}
            n && n.doScroll && function t() {
                if (!K.isReady) {
                    try {
                        n.doScroll("left");
                    } catch (e) {
                        return setTimeout(t, 50);
                    }
                    i(), K.ready();
                }
            }();
        }
        return de.promise(e);
    };
    var he, me = "undefined";
    for (he in K(Q)) break;
    Q.ownLast = "0" !== he, Q.inlineBlockNeedsLayout = !1, K(function() {
        var e, t, n, i;
        (n = se.getElementsByTagName("body")[0]) && n.style && (t = se.createElement("div"), 
        (i = se.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
        n.appendChild(i).appendChild(t), typeof t.style.zoom !== me && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", 
        Q.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i));
    }), function() {
        var e = se.createElement("div");
        if (null == Q.deleteExpando) {
            Q.deleteExpando = !0;
            try {
                delete e.test;
            } catch (e) {
                Q.deleteExpando = !1;
            }
        }
        e = null;
    }(), K.acceptData = function(e) {
        var t = K.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t);
    };
    var ge = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ve = /([A-Z])/g;
    K.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? K.cache[e[K.expando]] : e[K.expando]) && !u(e);
        },
        data: function(e, t, n) {
            return a(e, t, n);
        },
        removeData: function(e, t) {
            return o(e, t);
        },
        _data: function(e, t, n) {
            return a(e, t, n, !0);
        },
        _removeData: function(e, t) {
            return o(e, t, !0);
        }
    }), K.fn.extend({
        data: function(e, t) {
            var n, i, r, a = this[0], o = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (r = K.data(a), 1 === a.nodeType && !K._data(a, "parsedAttrs"))) {
                    for (n = o.length; n--; ) o[n] && (0 === (i = o[n].name).indexOf("data-") && l(a, i = K.camelCase(i.slice(5)), r[i]));
                    K._data(a, "parsedAttrs", !0);
                }
                return r;
            }
            return "object" == typeof e ? this.each(function() {
                K.data(this, e);
            }) : 1 < arguments.length ? this.each(function() {
                K.data(this, e, t);
            }) : a ? l(a, e, K.data(a, e)) : void 0;
        },
        removeData: function(e) {
            return this.each(function() {
                K.removeData(this, e);
            });
        }
    }), K.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = K._data(e, t), n && (!i || K.isArray(n) ? i = K._data(e, t, K.makeArray(n)) : i.push(n)), 
            i || []) : void 0;
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = K.queue(e, t), i = n.length, r = n.shift(), a = K._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), 
            delete a.stop, r.call(e, function() {
                K.dequeue(e, t);
            }, a)), !i && a && a.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return K._data(e, n) || K._data(e, n, {
                empty: K.Callbacks("once memory").add(function() {
                    K._removeData(e, t + "queue"), K._removeData(e, n);
                })
            });
        }
    }), K.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? K.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = K.queue(this, t, n);
                K._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && K.dequeue(this, t);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                K.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, i = 1, r = K.Deferred(), a = this, o = this.length, s = function() {
                --i || r.resolveWith(a, [ a ]);
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--; ) (n = K._data(a[o], e + "queueHooks")) && n.empty && (i++, 
            n.empty.add(s));
            return s(), r.promise(t);
        }
    });
    var ye = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, be = [ "Top", "Right", "Bottom", "Left" ], we = function(e, t) {
        return e = t || e, "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e);
    }, xe = K.access = function(e, t, n, i, r, a, o) {
        var s = 0, l = e.length, u = null == n;
        if ("object" === K.type(n)) for (s in r = !0, n) K.access(e, t, s, n[s], !0, a, o); else if (void 0 !== i && (r = !0, 
        K.isFunction(i) || (o = !0), u && (o ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
            return u.call(K(e), n);
        })), t)) for (;s < l; s++) t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : a;
    }, Te = /^(?:checkbox|radio)$/i;
    !function() {
        var e = se.createElement("input"), t = se.createElement("div"), n = se.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        Q.leadingWhitespace = 3 === t.firstChild.nodeType, Q.tbody = !t.getElementsByTagName("tbody").length, 
        Q.htmlSerialize = !!t.getElementsByTagName("link").length, Q.html5Clone = "<:nav></:nav>" !== se.createElement("nav").cloneNode(!0).outerHTML, 
        e.type = "checkbox", e.checked = !0, n.appendChild(e), Q.appendChecked = e.checked, 
        t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, 
        n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", 
        Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, Q.noCloneEvent = !0, 
        t.attachEvent && (t.attachEvent("onclick", function() {
            Q.noCloneEvent = !1;
        }), t.cloneNode(!0).click()), null == Q.deleteExpando) {
            Q.deleteExpando = !0;
            try {
                delete t.test;
            } catch (e) {
                Q.deleteExpando = !1;
            }
        }
    }(), function() {
        var e, t, n = se.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) t = "on" + e, (Q[e + "Bubbles"] = t in h) || (n.setAttribute(t, "t"), Q[e + "Bubbles"] = !1 === n.attributes[t].expando);
        n = null;
    }();
    var Ce = /^(?:input|select|textarea)$/i, Se = /^key/, Ee = /^(?:mouse|pointer|contextmenu)|click/, ke = /^(?:focusinfocus|focusoutblur)$/, Ne = /^([^.]*)(?:\.(.+)|)$/;
    K.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var a, o, s, l, u, c, d, p, f, h, m, g = K._data(e);
            if (g) {
                for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = K.guid++), 
                (o = g.events) || (o = g.events = {}), (c = g.handle) || ((c = g.handle = function(e) {
                    return typeof K === me || e && K.event.triggered === e.type ? void 0 : K.event.dispatch.apply(c.elem, arguments);
                }).elem = e), s = (t = (t || "").match(pe) || [ "" ]).length; s--; ) f = m = (a = Ne.exec(t[s]) || [])[1], 
                h = (a[2] || "").split(".").sort(), f && (u = K.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, 
                u = K.event.special[f] || {}, d = K.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && K.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, l), (p = o[f]) || ((p = o[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, c) || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), 
                u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), 
                K.event.global[f] = !0);
                e = null;
            }
        },
        remove: function(e, t, n, i, r) {
            var a, o, s, l, u, c, d, p, f, h, m, g = K.hasData(e) && K._data(e);
            if (g && (c = g.events)) {
                for (u = (t = (t || "").match(pe) || [ "" ]).length; u--; ) if (f = m = (s = Ne.exec(t[u]) || [])[1], 
                h = (s[2] || "").split(".").sort(), f) {
                    for (d = K.event.special[f] || {}, p = c[f = (i ? d.delegateType : d.bindType) || f] || [], 
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = p.length; a--; ) o = p[a], 
                    !r && m !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (p.splice(a, 1), 
                    o.selector && p.delegateCount--, d.remove && d.remove.call(e, o));
                    l && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || K.removeEvent(e, f, g.handle), 
                    delete c[f]);
                } else for (f in c) K.event.remove(e, f + t[u], n, i, !0);
                K.isEmptyObject(c) && (delete g.handle, K._removeData(e, "events"));
            }
        },
        trigger: function(e, t, n, i) {
            var r, a, o, s, l, u, c, d = [ n || se ], p = U.call(e, "type") ? e.type : e, f = U.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = u = n = n || se, 3 !== n.nodeType && 8 !== n.nodeType && !ke.test(p + K.event.triggered) && (0 <= p.indexOf(".") && (p = (f = p.split(".")).shift(), 
            f.sort()), a = p.indexOf(":") < 0 && "on" + p, (e = e[K.expando] ? e : new K.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, 
            e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = n), t = null == t ? [ e ] : K.makeArray(t, [ e ]), 
            l = K.event.special[p] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!i && !l.noBubble && !K.isWindow(n)) {
                    for (s = l.delegateType || p, ke.test(s + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), 
                    u = o;
                    u === (n.ownerDocument || se) && d.push(u.defaultView || u.parentWindow || h);
                }
                for (c = 0; (o = d[c++]) && !e.isPropagationStopped(); ) e.type = 1 < c ? s : l.bindType || p, 
                (r = (K._data(o, "events") || {})[e.type] && K._data(o, "handle")) && r.apply(o, t), 
                (r = a && o[a]) && r.apply && K.acceptData(o) && (e.result = r.apply(o, t), !1 === e.result && e.preventDefault());
                if (e.type = p, !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), t)) && K.acceptData(n) && a && n[p] && !K.isWindow(n)) {
                    (u = n[a]) && (n[a] = null), K.event.triggered = p;
                    try {
                        n[p]();
                    } catch (e) {}
                    K.event.triggered = void 0, u && (n[a] = u);
                }
                return e.result;
            }
        },
        dispatch: function(e) {
            e = K.event.fix(e);
            var t, n, i, r, a, o = [], s = W.call(arguments), l = (K._data(this, "events") || {})[e.type] || [], u = K.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (o = K.event.handlers.call(this, e, l), t = 0; (r = o[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = r.elem, 
                a = 0; (i = r.handlers[a++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, 
                e.data = i.data, void 0 !== (n = ((K.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s)) && !1 === (e.result = n) && (e.preventDefault(), 
                e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, t) {
            var n, i, r, a, o = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type)) for (;l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                for (r = [], a = 0; a < s; a++) void 0 === r[n = (i = t[a]).selector + " "] && (r[n] = i.needsContext ? 0 <= K(n, this).index(l) : K.find(n, this, null, [ l ]).length), 
                r[n] && r.push(i);
                r.length && o.push({
                    elem: l,
                    handlers: r
                });
            }
            return s < t.length && o.push({
                elem: this,
                handlers: t.slice(s)
            }), o;
        },
        fix: function(e) {
            if (e[K.expando]) return e;
            var t, n, i, r = e.type, a = e, o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = Ee.test(r) ? this.mouseHooks : Se.test(r) ? this.keyHooks : {}), 
            i = o.props ? this.props.concat(o.props) : this.props, e = new K.Event(a), t = i.length; t--; ) e[n = i[t]] = a[n];
            return e.target || (e.target = a.srcElement || se), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
            e.metaKey = !!e.metaKey, o.filter ? o.filter(e, a) : e;
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
                var n, i, r, a = t.button, o = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = (i = e.target.ownerDocument || se).documentElement, 
                n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), 
                e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), 
                !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), 
                e;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== p() && this.focus) try {
                        return this.focus(), !1;
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return K.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(e) {
                    return K.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = K.extend(new K.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? K.event.trigger(r, null, t) : K.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault();
        }
    }, K.removeEvent = se.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === me && (e[i] = null), e.detachEvent(i, n));
    }, K.Event = function(e, t) {
        return this instanceof K.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? c : d) : this.type = e, 
        t && K.extend(this, t), this.timeStamp = e && e.timeStamp || K.now(), void (this[K.expando] = !0)) : new K.Event(e, t);
    }, K.Event.prototype = {
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
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
    }, K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        K.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget, i = e.handleObj;
                return (!n || n !== this && !K.contains(this, n)) && (e.type = i.origType, t = i.handler.apply(this, arguments), 
                e.type = r), t;
            }
        };
    }), Q.submitBubbles || (K.event.special.submit = {
        setup: function() {
            return !K.nodeName(this, "form") && void K.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target, n = K.nodeName(t, "input") || K.nodeName(t, "button") ? t.form : void 0;
                n && !K._data(n, "submitBubbles") && (K.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                }), K._data(n, "submitBubbles", !0));
            });
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && K.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function() {
            return !K.nodeName(this, "form") && void K.event.remove(this, "._submit");
        }
    }), Q.changeBubbles || (K.event.special.change = {
        setup: function() {
            return Ce.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (K.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
            }), K.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), K.event.simulate("change", this, e, !0);
            })), !1) : void K.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ce.test(t.nodeName) && !K._data(t, "changeBubbles") && (K.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || K.event.simulate("change", this.parentNode, e, !0);
                }), K._data(t, "changeBubbles", !0));
            });
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0;
        },
        teardown: function() {
            return K.event.remove(this, "._change"), !Ce.test(this.nodeName);
        }
    }), Q.focusinBubbles || K.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var r = function(e) {
            K.event.simulate(i, e.target, K.event.fix(e), !0);
        };
        K.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this, t = K._data(e, i);
                t || e.addEventListener(n, r, !0), K._data(e, i, (t || 0) + 1);
            },
            teardown: function() {
                var e = this.ownerDocument || this, t = K._data(e, i) - 1;
                t ? K._data(e, i, t) : (e.removeEventListener(n, r, !0), K._removeData(e, i));
            }
        };
    }), K.fn.extend({
        on: function(e, t, n, i, r) {
            var a, o;
            if ("object" == typeof e) {
                for (a in "string" != typeof t && (n = n || t, t = void 0), e) this.on(a, t, n, e[a], r);
                return this;
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, 
            n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = d; else if (!i) return this;
            return 1 === r && (o = i, (i = function(e) {
                return K().off(e), o.apply(this, arguments);
            }).guid = o.guid || (o.guid = K.guid++)), this.each(function() {
                K.event.add(this, e, i, n, t);
            });
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1);
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, K(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this;
            }
            return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = d), 
            this.each(function() {
                K.event.remove(this, e, n, t);
            });
        },
        trigger: function(e, t) {
            return this.each(function() {
                K.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? K.event.trigger(e, t, n, !0) : void 0;
        }
    });
    var De = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ae = / jQuery\d+="(?:null|\d+)"/g, Le = new RegExp("<(?:" + De + ")[\\s/>]", "i"), Me = /^\s+/, ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Pe = /<([\w:]+)/, Ie = /<tbody/i, He = /<|&#?\w+;/, $e = /<(?:script|style|link)/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i, Oe = /^$|\/(?:java|ecma)script/i, Re = /^true\/(.*)/, Be = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, _e = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: Q.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, qe = m(se).appendChild(se.createElement("div"));
    _e.optgroup = _e.option, _e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead, 
    _e.th = _e.td, K.extend({
        clone: function(e, t, n) {
            var i, r, a, o, s, l = K.contains(e.ownerDocument, e);
            if (Q.html5Clone || K.isXMLDoc(e) || !Le.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (qe.innerHTML = e.outerHTML, 
            qe.removeChild(a = qe.firstChild)), !(Q.noCloneEvent && Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e))) for (i = g(a), 
            s = g(e), o = 0; null != (r = s[o]); ++o) i[o] && T(r, i[o]);
            if (t) if (n) for (s = s || g(e), i = i || g(a), o = 0; null != (r = s[o]); o++) x(r, i[o]); else x(e, a);
            return 0 < (i = g(a, "script")).length && w(i, !l && g(e, "script")), i = s = r = null, 
            a;
        },
        buildFragment: function(e, t, n, i) {
            for (var r, a, o, s, l, u, c, d = e.length, p = m(t), f = [], h = 0; h < d; h++) if ((a = e[h]) || 0 === a) if ("object" === K.type(a)) K.merge(f, a.nodeType ? [ a ] : a); else if (He.test(a)) {
                for (s = s || p.appendChild(t.createElement("div")), l = (Pe.exec(a) || [ "", "" ])[1].toLowerCase(), 
                c = _e[l] || _e._default, s.innerHTML = c[1] + a.replace(ze, "<$1></$2>") + c[2], 
                r = c[0]; r--; ) s = s.lastChild;
                if (!Q.leadingWhitespace && Me.test(a) && f.push(t.createTextNode(Me.exec(a)[0])), 
                !Q.tbody) for (r = (a = "table" !== l || Ie.test(a) ? "<table>" !== c[1] || Ie.test(a) ? 0 : s : s.firstChild) && a.childNodes.length; r--; ) K.nodeName(u = a.childNodes[r], "tbody") && !u.childNodes.length && a.removeChild(u);
                for (K.merge(f, s.childNodes), s.textContent = ""; s.firstChild; ) s.removeChild(s.firstChild);
                s = p.lastChild;
            } else f.push(t.createTextNode(a));
            for (s && p.removeChild(s), Q.appendChecked || K.grep(g(f, "input"), v), h = 0; a = f[h++]; ) if ((!i || -1 === K.inArray(a, i)) && (o = K.contains(a.ownerDocument, a), 
            s = g(p.appendChild(a), "script"), o && w(s), n)) for (r = 0; a = s[r++]; ) Oe.test(a.type || "") && n.push(a);
            return s = null, p;
        },
        cleanData: function(e, t) {
            for (var n, i, r, a, o = 0, s = K.expando, l = K.cache, u = Q.deleteExpando, c = K.event.special; null != (n = e[o]); o++) if ((t || K.acceptData(n)) && (a = (r = n[s]) && l[r])) {
                if (a.events) for (i in a.events) c[i] ? K.event.remove(n, i) : K.removeEvent(n, i, a.handle);
                l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== me ? n.removeAttribute(s) : n[s] = null, 
                q.push(r));
            }
        }
    }), K.fn.extend({
        text: function(e) {
            return xe(this, function(e) {
                return void 0 === e ? K.text(this) : this.empty().append((this[0] && this[0].ownerDocument || se).createTextNode(e));
            }, null, e, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || f(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
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
            for (var n, i = e ? K.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || K.cleanData(g(n)), 
            n.parentNode && (t && K.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && K.cleanData(g(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
                e.options && K.nodeName(e, "select") && (e.options.length = 0);
            }
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return K.clone(this, e, t);
            });
        },
        html: function(e) {
            return xe(this, function(e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ae, "") : void 0;
                if (!("string" != typeof e || $e.test(e) || !Q.htmlSerialize && Le.test(e) || !Q.leadingWhitespace && Me.test(e) || _e[(Pe.exec(e) || [ "", "" ])[1].toLowerCase()])) {
                    e = e.replace(ze, "<$1></$2>");
                    try {
                        for (;n < i; n++) 1 === (t = this[n] || {}).nodeType && (K.cleanData(g(t, !1)), 
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
                t = this.parentNode, K.cleanData(g(this)), t && t.replaceChild(e, this);
            }), t && (t.length || t.nodeType) ? this : this.remove();
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(n, i) {
            n = F.apply([], n);
            var e, t, r, a, o, s, l = 0, u = this.length, c = this, d = u - 1, p = n[0], f = K.isFunction(p);
            if (f || 1 < u && "string" == typeof p && !Q.checkClone && je.test(p)) return this.each(function(e) {
                var t = c.eq(e);
                f && (n[0] = p.call(this, e, t.html())), t.domManip(n, i);
            });
            if (u && (e = (s = K.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 
            1 === s.childNodes.length && (s = e), e)) {
                for (r = (a = K.map(g(s, "script"), y)).length; l < u; l++) t = s, l !== d && (t = K.clone(t, !0, !0), 
                r && K.merge(a, g(t, "script"))), i.call(this[l], t, l);
                if (r) for (o = a[a.length - 1].ownerDocument, K.map(a, b), l = 0; l < r; l++) t = a[l], 
                Oe.test(t.type || "") && !K._data(t, "globalEval") && K.contains(o, t) && (t.src ? K._evalUrl && K._evalUrl(t.src) : K.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Be, "")));
                s = e = null;
            }
            return this;
        }
    }), K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, o) {
        K.fn[e] = function(e) {
            for (var t, n = 0, i = [], r = K(e), a = r.length - 1; n <= a; n++) t = n === a ? this : this.clone(!0), 
            K(r[n])[o](t), X.apply(i, t.get());
            return this.pushStack(i);
        };
    });
    var We, Fe, Xe = {};
    Q.shrinkWrapBlocks = function() {
        return null != Fe ? Fe : (Fe = !1, (t = se.getElementsByTagName("body")[0]) && t.style ? (e = se.createElement("div"), 
        (n = se.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
        t.appendChild(n).appendChild(e), typeof e.style.zoom !== me && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", 
        e.appendChild(se.createElement("div")).style.width = "5px", Fe = 3 !== e.offsetWidth), 
        t.removeChild(n), Fe) : void 0);
        var e, t, n;
    };
    var Ge, Ye, Ve = /^margin/, Ue = new RegExp("^(" + ye + ")(?!px)[a-z%]+$", "i"), Qe = /^(top|right|bottom|left)$/;
    h.getComputedStyle ? (Ge = function(e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : h.getComputedStyle(e, null);
    }, Ye = function(e, t, n) {
        var i, r, a, o, s = e.style;
        return o = (n = n || Ge(e)) ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || K.contains(e.ownerDocument, e) || (o = K.style(e, t)), 
        Ue.test(o) && Ve.test(t) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, 
        o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a)), void 0 === o ? o : o + "";
    }) : se.documentElement.currentStyle && (Ge = function(e) {
        return e.currentStyle;
    }, Ye = function(e, t, n) {
        var i, r, a, o, s = e.style;
        return null == (o = (n = n || Ge(e)) ? n[t] : void 0) && s && s[t] && (o = s[t]), 
        Ue.test(o) && !Qe.test(t) && (i = s.left, (a = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), 
        s.left = "fontSize" === t ? "1em" : o, o = s.pixelLeft + "px", s.left = i, a && (r.left = a)), 
        void 0 === o ? o : o + "" || "auto";
    }), function() {
        function e() {
            var e, t, n, i;
            (t = se.getElementsByTagName("body")[0]) && t.style && (e = se.createElement("div"), 
            (n = se.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
            t.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
            r = a = !1, s = !0, h.getComputedStyle && (r = "1%" !== (h.getComputedStyle(e, null) || {}).top, 
            a = "4px" === (h.getComputedStyle(e, null) || {
                width: "4px"
            }).width, (i = e.appendChild(se.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
            i.style.marginRight = i.style.width = "0", e.style.width = "1px", s = !parseFloat((h.getComputedStyle(i, null) || {}).marginRight), 
            e.removeChild(i)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            (i = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", 
            (o = 0 === i[0].offsetHeight) && (i[0].style.display = "", i[1].style.display = "none", 
            o = 0 === i[0].offsetHeight), t.removeChild(n));
        }
        var t, n, i, r, a, o, s;
        (t = se.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        (n = (i = t.getElementsByTagName("a")[0]) && i.style) && (n.cssText = "float:left;opacity:.5", 
        Q.opacity = "0.5" === n.opacity, Q.cssFloat = !!n.cssFloat, t.style.backgroundClip = "content-box", 
        t.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === t.style.backgroundClip, 
        Q.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, 
        K.extend(Q, {
            reliableHiddenOffsets: function() {
                return null == o && e(), o;
            },
            boxSizingReliable: function() {
                return null == a && e(), a;
            },
            pixelPosition: function() {
                return null == r && e(), r;
            },
            reliableMarginRight: function() {
                return null == s && e(), s;
            }
        }));
    }(), K.swap = function(e, t, n, i) {
        var r, a, o = {};
        for (a in t) o[a] = e.style[a], e.style[a] = t[a];
        for (a in r = n.apply(e, i || []), t) e.style[a] = o[a];
        return r;
    };
    var Ke = /alpha\([^)]*\)/i, Je = /opacity\s*=\s*([^)]*)/, Ze = /^(none|table(?!-c[ea]).+)/, et = new RegExp("^(" + ye + ")(.*)$", "i"), tt = new RegExp("^([+-])=(" + ye + ")", "i"), nt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, it = {
        letterSpacing: "0",
        fontWeight: "400"
    }, rt = [ "Webkit", "O", "Moz", "ms" ];
    K.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ye(e, "opacity");
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
            float: Q.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, o, s = K.camelCase(t), l = e.style;
                if (t = K.cssProps[s] || (K.cssProps[s] = k(l, s)), o = K.cssHooks[t] || K.cssHooks[s], 
                void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t];
                if ("string" === (a = typeof n) && (r = tt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(K.css(e, t)), 
                a = "number"), null != n && n == n && ("number" !== a || K.cssNumber[s] || (n += "px"), 
                Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
                !(o && "set" in o && void 0 === (n = o.set(e, n, i))))) try {
                    l[t] = n;
                } catch (e) {}
            }
        },
        css: function(e, t, n, i) {
            var r, a, o, s = K.camelCase(t);
            return t = K.cssProps[s] || (K.cssProps[s] = k(e.style, s)), (o = K.cssHooks[t] || K.cssHooks[s]) && "get" in o && (a = o.get(e, !0, n)), 
            void 0 === a && (a = Ye(e, t, i)), "normal" === a && t in it && (a = it[t]), "" === n || n ? (r = parseFloat(a), 
            !0 === n || K.isNumeric(r) ? r || 0 : a) : a;
        }
    }), K.each([ "height", "width" ], function(e, r) {
        K.cssHooks[r] = {
            get: function(e, t, n) {
                return t ? Ze.test(K.css(e, "display")) && 0 === e.offsetWidth ? K.swap(e, nt, function() {
                    return L(e, r, n);
                }) : L(e, r, n) : void 0;
            },
            set: function(e, t, n) {
                var i = n && Ge(e);
                return D(0, t, n ? A(e, r, n, Q.boxSizing && "border-box" === K.css(e, "boxSizing", !1, i), i) : 0);
            }
        };
    }), Q.opacity || (K.cssHooks.opacity = {
        get: function(e, t) {
            return Je.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },
        set: function(e, t) {
            var n = e.style, i = e.currentStyle, r = K.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", a = i && i.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === K.trim(a.replace(Ke, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
            "" === t || i && !i.filter) || (n.filter = Ke.test(a) ? a.replace(Ke, r) : a + " " + r);
        }
    }), K.cssHooks.marginRight = E(Q.reliableMarginRight, function(e, t) {
        return t ? K.swap(e, {
            display: "inline-block"
        }, Ye, [ e, "marginRight" ]) : void 0;
    }), K.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, a) {
        K.cssHooks[r + a] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [ e ]; t < 4; t++) n[r + be[t] + a] = i[t] || i[t - 2] || i[0];
                return n;
            }
        }, Ve.test(r) || (K.cssHooks[r + a].set = D);
    }), K.fn.extend({
        css: function(e, t) {
            return xe(this, function(e, t, n) {
                var i, r, a = {}, o = 0;
                if (K.isArray(t)) {
                    for (i = Ge(e), r = t.length; o < r; o++) a[t[o]] = K.css(e, t[o], !1, i);
                    return a;
                }
                return void 0 !== n ? K.style(e, t, n) : K.css(e, t);
            }, e, t, 1 < arguments.length);
        },
        show: function() {
            return N(this, !0);
        },
        hide: function() {
            return N(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                we(this) ? K(this).show() : K(this).hide();
            });
        }
    }), (K.Tween = M).prototype = {
        constructor: M,
        init: function(e, t, n, i, r, a) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), 
            this.end = i, this.unit = a || (K.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = M.propHooks[this.prop];
            return this.pos = t = this.options.duration ? K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : M.propHooks._default.set(this), this;
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop];
            },
            set: function(e) {
                K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, K.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, K.fx = M.prototype.init, K.fx.step = {};
    var at, ot, st, lt, ut, ct, dt, pt = /^(?:toggle|show|hide)$/, ft = new RegExp("^(?:([+-])=|)(" + ye + ")([a-z%]*)$", "i"), ht = /queueHooks$/, mt = [ function(t, e, n) {
        var i, r, a, o, s, l, u, c = this, d = {}, p = t.style, f = t.nodeType && we(t), h = K._data(t, "fxshow");
        for (i in n.queue || (null == (s = K._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, 
        l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l();
        }), s.unqueued++, c.always(function() {
            c.always(function() {
                s.unqueued--, K.queue(t, "fx").length || s.empty.fire();
            });
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
        "inline" === ("none" === (u = K.css(t, "display")) ? K._data(t, "olddisplay") || S(t.nodeName) : u) && "none" === K.css(t, "float") && (Q.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), 
        n.overflow && (p.overflow = "hidden", Q.shrinkWrapBlocks() || c.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
        })), e) if (r = e[i], pt.exec(r)) {
            if (delete e[i], a = a || "toggle" === r, r === (f ? "hide" : "show")) {
                if ("show" !== r || !h || void 0 === h[i]) continue;
                f = !0;
            }
            d[i] = h && h[i] || K.style(t, i);
        } else u = void 0;
        if (K.isEmptyObject(d)) "inline" === ("none" === u ? S(t.nodeName) : u) && (p.display = u); else for (i in h ? "hidden" in h && (f = h.hidden) : h = K._data(t, "fxshow", {}), 
        a && (h.hidden = !f), f ? K(t).show() : c.done(function() {
            K(t).hide();
        }), c.done(function() {
            var e;
            for (e in K._removeData(t, "fxshow"), d) K.style(t, e, d[e]);
        }), d) o = I(f ? h[i] : 0, i, c), i in h || (h[i] = o.start, f && (o.end = o.start, 
        o.start = "width" === i || "height" === i ? 1 : 0));
    } ], gt = {
        "*": [ function(e, t) {
            var n = this.createTween(e, t), i = n.cur(), r = ft.exec(t), a = r && r[3] || (K.cssNumber[e] ? "" : "px"), o = (K.cssNumber[e] || "px" !== a && +i) && ft.exec(K.css(n.elem, e)), s = 1, l = 20;
            if (o && o[3] !== a) for (a = a || o[3], r = r || [], o = +i || 1; o /= s = s || ".5", 
            K.style(n.elem, e, o + a), s !== (s = n.cur() / i) && 1 !== s && --l; ) ;
            return r && (o = n.start = +o || +i || 0, n.unit = a, n.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), 
            n;
        } ]
    };
    K.Animation = K.extend(H, {
        tweener: function(e, t) {
            K.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], gt[n] = gt[n] || [], gt[n].unshift(t);
        },
        prefilter: function(e, t) {
            t ? mt.unshift(e) : mt.push(e);
        }
    }), K.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? K.extend({}, e) : {
            complete: n || !n && t || K.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !K.isFunction(t) && t
        };
        return i.duration = K.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in K.fx.speeds ? K.fx.speeds[i.duration] : K.fx.speeds._default, 
        (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            K.isFunction(i.old) && i.old.call(this), i.queue && K.dequeue(this, i.queue);
        }, i;
    }, K.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(we).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i);
        },
        animate: function(t, e, n, i) {
            var r = K.isEmptyObject(t), a = K.speed(e, n, i), o = function() {
                var e = H(this, K.extend({}, t), a);
                (r || K._data(this, "finish")) && e.stop(!0);
            };
            return o.finish = o, r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o);
        },
        stop: function(r, e, a) {
            var o = function(e) {
                var t = e.stop;
                delete e.stop, t(a);
            };
            return "string" != typeof r && (a = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), 
            this.each(function() {
                var e = !0, t = null != r && r + "queueHooks", n = K.timers, i = K._data(this);
                if (t) i[t] && i[t].stop && o(i[t]); else for (t in i) i[t] && i[t].stop && ht.test(t) && o(i[t]);
                for (t = n.length; t--; ) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(a), 
                e = !1, n.splice(t, 1));
                (e || !a) && K.dequeue(this, r);
            });
        },
        finish: function(o) {
            return !1 !== o && (o = o || "fx"), this.each(function() {
                var e, t = K._data(this), n = t[o + "queue"], i = t[o + "queueHooks"], r = K.timers, a = n ? n.length : 0;
                for (t.finish = !0, K.queue(this, o, []), i && i.stop && i.stop.call(this, !0), 
                e = r.length; e--; ) r[e].elem === this && r[e].queue === o && (r[e].anim.stop(!0), 
                r.splice(e, 1));
                for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish;
            });
        }
    }), K.each([ "toggle", "show", "hide" ], function(e, i) {
        var r = K.fn[i];
        K.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(P(i, !0), e, t, n);
        };
    }), K.each({
        slideDown: P("show"),
        slideUp: P("hide"),
        slideToggle: P("toggle"),
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
        K.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n);
        };
    }), K.timers = [], K.fx.tick = function() {
        var e, t = K.timers, n = 0;
        for (at = K.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || K.fx.stop(), at = void 0;
    }, K.fx.timer = function(e) {
        K.timers.push(e), e() ? K.fx.start() : K.timers.pop();
    }, K.fx.interval = 13, K.fx.start = function() {
        ot || (ot = setInterval(K.fx.tick, K.fx.interval));
    }, K.fx.stop = function() {
        clearInterval(ot), ot = null;
    }, K.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, K.fn.delay = function(i, e) {
        return i = K.fx && K.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = setTimeout(e, i);
            t.stop = function() {
                clearTimeout(n);
            };
        });
    }, (lt = se.createElement("div")).setAttribute("className", "t"), lt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
    ct = lt.getElementsByTagName("a")[0], dt = (ut = se.createElement("select")).appendChild(se.createElement("option")), 
    st = lt.getElementsByTagName("input")[0], ct.style.cssText = "top:1px", Q.getSetAttribute = "t" !== lt.className, 
    Q.style = /top/.test(ct.getAttribute("style")), Q.hrefNormalized = "/a" === ct.getAttribute("href"), 
    Q.checkOn = !!st.value, Q.optSelected = dt.selected, Q.enctype = !!se.createElement("form").enctype, 
    ut.disabled = !0, Q.optDisabled = !dt.disabled, (st = se.createElement("input")).setAttribute("value", ""), 
    Q.input = "" === st.getAttribute("value"), st.value = "t", st.setAttribute("type", "radio"), 
    Q.radioValue = "t" === st.value;
    var vt = /\r/g;
    K.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = K.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, K(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : K.isArray(t) && (t = K.map(t, function(e) {
                    return null == e ? "" : e + "";
                })), (i = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t));
            })) : t ? (i = K.valHooks[t.type] || K.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(vt, "") : null == e ? "" : e : void 0;
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = K.find.attr(e, "value");
                    return null != t ? t : K.trim(K.text(e));
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || r < 0, o = a ? null : [], s = a ? r + 1 : i.length, l = r < 0 ? s : a ? r : 0; l < s; l++) if (!(!(n = i[l]).selected && l !== r || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && K.nodeName(n.parentNode, "optgroup"))) {
                        if (t = K(n).val(), a) return t;
                        o.push(t);
                    }
                    return o;
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, a = K.makeArray(t), o = r.length; o--; ) if (i = r[o], 
                    0 <= K.inArray(K.valHooks.option.get(i), a)) try {
                        i.selected = n = !0;
                    } catch (e) {
                        i.scrollHeight;
                    } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r;
                }
            }
        }
    }), K.each([ "radio", "checkbox" ], function() {
        K.valHooks[this] = {
            set: function(e, t) {
                return K.isArray(t) ? e.checked = 0 <= K.inArray(K(e).val(), t) : void 0;
            }
        }, Q.checkOn || (K.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var yt, bt, wt = K.expr.attrHandle, xt = /^(?:checked|selected)$/i, Tt = Q.getSetAttribute, Ct = Q.input;
    K.fn.extend({
        attr: function(e, t) {
            return xe(this, K.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function(e) {
            return this.each(function() {
                K.removeAttr(this, e);
            });
        }
    }), K.extend({
        attr: function(e, t, n) {
            var i, r, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === me ? K.prop(e, t, n) : (1 === a && K.isXMLDoc(e) || (t = t.toLowerCase(), 
            i = K.attrHooks[t] || (K.expr.match.bool.test(t) ? bt : yt)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = K.find.attr(e, t)) ? void 0 : r : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
            n) : void K.removeAttr(e, t));
        },
        removeAttr: function(e, t) {
            var n, i, r = 0, a = t && t.match(pe);
            if (a && 1 === e.nodeType) for (;n = a[r++]; ) i = K.propFix[n] || n, K.expr.match.bool.test(n) ? Ct && Tt || !xt.test(n) ? e[i] = !1 : e[K.camelCase("default-" + n)] = e[i] = !1 : K.attr(e, n, ""), 
            e.removeAttribute(Tt ? n : i);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Q.radioValue && "radio" === t && K.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        }
    }), bt = {
        set: function(e, t, n) {
            return !1 === t ? K.removeAttr(e, n) : Ct && Tt || !xt.test(n) ? e.setAttribute(!Tt && K.propFix[n] || n, n) : e[K.camelCase("default-" + n)] = e[n] = !0, 
            n;
        }
    }, K.each(K.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = wt[t] || K.find.attr;
        wt[t] = Ct && Tt || !xt.test(t) ? function(e, t, n) {
            var i, r;
            return n || (r = wt[t], wt[t] = i, i = null != a(e, t, n) ? t.toLowerCase() : null, 
            wt[t] = r), i;
        } : function(e, t, n) {
            return n ? void 0 : e[K.camelCase("default-" + t)] ? t.toLowerCase() : null;
        };
    }), Ct && Tt || (K.attrHooks.value = {
        set: function(e, t, n) {
            return K.nodeName(e, "input") ? void (e.defaultValue = t) : yt && yt.set(e, t, n);
        }
    }), Tt || (yt = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", 
            "value" === n || t === e.getAttribute(n) ? t : void 0;
        }
    }, wt.id = wt.name = wt.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null;
    }, K.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0;
        },
        set: yt.set
    }, K.attrHooks.contenteditable = {
        set: function(e, t, n) {
            yt.set(e, "" !== t && t, n);
        }
    }, K.each([ "width", "height" ], function(e, n) {
        K.attrHooks[n] = {
            set: function(e, t) {
                return "" === t ? (e.setAttribute(n, "auto"), t) : void 0;
            }
        };
    })), Q.style || (K.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0;
        },
        set: function(e, t) {
            return e.style.cssText = t + "";
        }
    });
    var St = /^(?:input|select|textarea|button|object)$/i, Et = /^(?:a|area)$/i;
    K.fn.extend({
        prop: function(e, t) {
            return xe(this, K.prop, e, t, 1 < arguments.length);
        },
        removeProp: function(e) {
            return e = K.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e];
                } catch (e) {}
            });
        }
    }), K.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var i, r, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !K.isXMLDoc(e)) && (t = K.propFix[t] || t, 
            r = K.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = K.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : St.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        }
    }), Q.hrefNormalized || K.each([ "href", "src" ], function(e, t) {
        K.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4);
            }
        };
    }), Q.optSelected || (K.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    }), K.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        K.propFix[this.toLowerCase()] = this;
    }), Q.enctype || (K.propFix.enctype = "encoding");
    var kt = /[\t\r\n\f]/g;
    K.fn.extend({
        addClass: function(t) {
            var e, n, i, r, a, o, s = 0, l = this.length, u = "string" == typeof t && t;
            if (K.isFunction(t)) return this.each(function(e) {
                K(this).addClass(t.call(this, e, this.className));
            });
            if (u) for (e = (t || "").match(pe) || []; s < l; s++) if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(kt, " ") : " ")) {
                for (a = 0; r = e[a++]; ) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                o = K.trim(i), n.className !== o && (n.className = o);
            }
            return this;
        },
        removeClass: function(t) {
            var e, n, i, r, a, o, s = 0, l = this.length, u = 0 === arguments.length || "string" == typeof t && t;
            if (K.isFunction(t)) return this.each(function(e) {
                K(this).removeClass(t.call(this, e, this.className));
            });
            if (u) for (e = (t || "").match(pe) || []; s < l; s++) if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(kt, " ") : "")) {
                for (a = 0; r = e[a++]; ) for (;0 <= i.indexOf(" " + r + " "); ) i = i.replace(" " + r + " ", " ");
                o = t ? K.trim(i) : "", n.className !== o && (n.className = o);
            }
            return this;
        },
        toggleClass: function(r, t) {
            var a = typeof r;
            return "boolean" == typeof t && "string" === a ? t ? this.addClass(r) : this.removeClass(r) : this.each(K.isFunction(r) ? function(e) {
                K(this).toggleClass(r.call(this, e, this.className, t), t);
            } : function() {
                if ("string" === a) for (var e, t = 0, n = K(this), i = r.match(pe) || []; e = i[t++]; ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else (a === me || "boolean" === a) && (this.className && K._data(this, "__className__", this.className), 
                this.className = this.className || !1 === r ? "" : K._data(this, "__className__") || "");
            });
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++) if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(kt, " ").indexOf(t)) return !0;
            return !1;
        }
    }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        K.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
    }), K.fn.extend({
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
    var Nt = K.now(), Dt = /\?/, At = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    K.parseJSON = function(e) {
        if (h.JSON && h.JSON.parse) return h.JSON.parse(e + "");
        var r, a = null, t = K.trim(e + "");
        return t && !K.trim(t.replace(At, function(e, t, n, i) {
            return r && t && (a = 0), 0 === a ? e : (r = n || t, a += !i - !n, "");
        })) ? Function("return " + t)() : K.error("Invalid JSON: " + e);
    }, K.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            h.DOMParser ? t = new DOMParser().parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", 
            t.loadXML(e));
        } catch (e) {
            t = void 0;
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || K.error("Invalid XML: " + e), 
        t;
    };
    var Lt, Mt, zt = /#.*$/, Pt = /([?&])_=[^&]*/, It = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ht = /^(?:GET|HEAD)$/, $t = /^\/\//, jt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ot = {}, Rt = {}, Bt = "*/".concat("*");
    try {
        Mt = location.href;
    } catch (e) {
        (Mt = se.createElement("a")).href = "", Mt = Mt.href;
    }
    Lt = jt.exec(Mt.toLowerCase()) || [], K.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Mt,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Lt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
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
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? O(O(e, K.ajaxSettings), t) : O(K.ajaxSettings, e);
        },
        ajaxPrefilter: $(Ot),
        ajaxTransport: $(Rt),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var r, a, o, s, l, u = t;
                2 !== x && (x = 2, p && clearTimeout(p), h = void 0, d = i || "", T.readyState = 0 < e ? 4 : 0, 
                r = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var i, r, a, o, s = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), 
                    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) for (o in s) if (s[o] && s[o].test(r)) {
                        l.unshift(o);
                        break;
                    }
                    if (l[0] in n) a = l[0]; else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                a = o;
                                break;
                            }
                            i || (i = o);
                        }
                        a = a || i;
                    }
                    return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0;
                }(m, T, n)), s = function(e, t, n, i) {
                    var r, a, o, s, l, u = {}, c = e.dataTypes.slice();
                    if (c[1]) for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
                    for (a = c.shift(); a; ) if (e.responseFields[a] && (n[e.responseFields[a]] = t), 
                    !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift()) if ("*" === a) a = l; else if ("*" !== l && l !== a) {
                        if (!(o = u[l + " " + a] || u["* " + a])) for (r in u) if ((s = r.split(" "))[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                            !0 === o ? o = u[r] : !0 !== u[r] && (a = s[0], c.unshift(s[1]));
                            break;
                        }
                        if (!0 !== o) if (o && e.throws) t = o(t); else try {
                            t = o(t);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: o ? e : "No conversion from " + l + " to " + a
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: t
                    };
                }(m, s, T, r), r ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (K.lastModified[c] = l), 
                (l = T.getResponseHeader("etag")) && (K.etag[c] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, 
                a = s.data, r = !(o = s.error))) : (o = u, (e || !u) && (u = "error", e < 0 && (e = 0))), 
                T.status = e, T.statusText = (t || u) + "", r ? y.resolveWith(g, [ a, u, T ]) : y.rejectWith(g, [ T, u, o ]), 
                T.statusCode(w), w = void 0, f && v.trigger(r ? "ajaxSuccess" : "ajaxError", [ T, m, r ? a : o ]), 
                b.fireWith(g, [ T, u ]), f && (v.trigger("ajaxComplete", [ T, m ]), --K.active || K.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, r, c, d, p, f, h, a, m = K.ajaxSetup({}, t), g = m.context || m, v = m.context && (g.nodeType || g.jquery) ? K(g) : K.event, y = K.Deferred(), b = K.Callbacks("once memory"), w = m.statusCode || {}, o = {}, s = {}, x = 0, l = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!a) for (a = {}; t = It.exec(d); ) a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? d : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = s[n] = s[n] || e, o[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return x || (m.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (x < 2) for (t in e) w[t] = [ w[t], e[t] ]; else T.always(e[T.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || l;
                    return h && h.abort(t), n(0, t), this;
                }
            };
            if (y.promise(T).complete = b.add, T.success = T.done, T.error = T.fail, m.url = ((e || m.url || Mt) + "").replace(zt, "").replace($t, Lt[1] + "//"), 
            m.type = t.method || t.type || m.method || m.type, m.dataTypes = K.trim(m.dataType || "*").toLowerCase().match(pe) || [ "" ], 
            null == m.crossDomain && (i = jt.exec(m.url.toLowerCase()), m.crossDomain = !(!i || i[1] === Lt[1] && i[2] === Lt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Lt[3] || ("http:" === Lt[1] ? "80" : "443")))), 
            m.data && m.processData && "string" != typeof m.data && (m.data = K.param(m.data, m.traditional)), 
            j(Ot, m, t, T), 2 === x) return T;
            for (r in (f = K.event && m.global) && 0 == K.active++ && K.event.trigger("ajaxStart"), 
            m.type = m.type.toUpperCase(), m.hasContent = !Ht.test(m.type), c = m.url, m.hasContent || (m.data && (c = m.url += (Dt.test(c) ? "&" : "?") + m.data, 
            delete m.data), !1 === m.cache && (m.url = Pt.test(c) ? c.replace(Pt, "$1_=" + Nt++) : c + (Dt.test(c) ? "&" : "?") + "_=" + Nt++)), 
            m.ifModified && (K.lastModified[c] && T.setRequestHeader("If-Modified-Since", K.lastModified[c]), 
            K.etag[c] && T.setRequestHeader("If-None-Match", K.etag[c])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), 
            T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : m.accepts["*"]), 
            m.headers) T.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, T, m) || 2 === x)) return T.abort();
            for (r in l = "abort", {
                success: 1,
                error: 1,
                complete: 1
            }) T[r](m[r]);
            if (h = j(Rt, m, t, T)) {
                T.readyState = 1, f && v.trigger("ajaxSend", [ T, m ]), m.async && 0 < m.timeout && (p = setTimeout(function() {
                    T.abort("timeout");
                }, m.timeout));
                try {
                    x = 1, h.send(o, n);
                } catch (e) {
                    if (!(x < 2)) throw e;
                    n(-1, e);
                }
            } else n(-1, "No Transport");
            return T;
        },
        getJSON: function(e, t, n) {
            return K.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return K.get(e, void 0, t, "script");
        }
    }), K.each([ "get", "post" ], function(e, r) {
        K[r] = function(e, t, n, i) {
            return K.isFunction(t) && (i = i || n, n = t, t = void 0), K.ajax({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            });
        };
    }), K._evalUrl = function(e) {
        return K.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        });
    }, K.fn.extend({
        wrapAll: function(t) {
            if (K.isFunction(t)) return this.each(function(e) {
                K(this).wrapAll(t.call(this, e));
            });
            if (this[0]) {
                var e = K(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(n) {
            return this.each(K.isFunction(n) ? function(e) {
                K(this).wrapInner(n.call(this, e));
            } : function() {
                var e = K(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
            });
        },
        wrap: function(t) {
            var n = K.isFunction(t);
            return this.each(function(e) {
                K(this).wrapAll(n ? t.call(this, e) : t);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes);
            }).end();
        }
    }), K.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !Q.reliableHiddenOffsets() && "none" === (e.style && e.style.display || K.css(e, "display"));
    }, K.expr.filters.visible = function(e) {
        return !K.expr.filters.hidden(e);
    };
    var _t = /%20/g, qt = /\[\]$/, Wt = /\r?\n/g, Ft = /^(?:submit|button|image|reset|file)$/i, Xt = /^(?:input|select|textarea|keygen)/i;
    K.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            t = K.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (void 0 === t && (t = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(e) || e.jquery && !K.isPlainObject(e)) K.each(e, function() {
            r(this.name, this.value);
        }); else for (n in e) R(n, e[n], t, r);
        return i.join("&").replace(_t, "+");
    }, K.fn.extend({
        serialize: function() {
            return K.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = K.prop(this, "elements");
                return e ? K.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !K(this).is(":disabled") && Xt.test(this.nodeName) && !Ft.test(e) && (this.checked || !Te.test(e));
            }).map(function(e, t) {
                var n = K(this).val();
                return null == n ? null : K.isArray(n) ? K.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Wt, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(Wt, "\r\n")
                };
            }).get();
        }
    }), K.ajaxSettings.xhr = void 0 !== h.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && B() || function() {
            try {
                return new h.ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }();
    } : B;
    var Gt = 0, Yt = {}, Vt = K.ajaxSettings.xhr();
    h.attachEvent && h.attachEvent("onunload", function() {
        for (var e in Yt) Yt[e](void 0, !0);
    }), Q.cors = !!Vt && "withCredentials" in Vt, (Vt = Q.ajax = !!Vt) && K.ajaxTransport(function(l) {
        var u;
        if (!l.crossDomain || Q.cors) return {
            send: function(e, a) {
                var t, o = l.xhr(), s = ++Gt;
                if (o.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields) for (t in l.xhrFields) o[t] = l.xhrFields[t];
                for (t in l.mimeType && o.overrideMimeType && o.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), 
                e) void 0 !== e[t] && o.setRequestHeader(t, e[t] + "");
                o.send(l.hasContent && l.data || null), u = function(e, t) {
                    var n, i, r;
                    if (u && (t || 4 === o.readyState)) if (delete Yt[s], u = void 0, o.onreadystatechange = K.noop, 
                    t) 4 !== o.readyState && o.abort(); else {
                        r = {}, n = o.status, "string" == typeof o.responseText && (r.text = o.responseText);
                        try {
                            i = o.statusText;
                        } catch (e) {
                            i = "";
                        }
                        n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = r.text ? 200 : 404;
                    }
                    r && a(n, i, r, o.getAllResponseHeaders());
                }, l.async ? 4 === o.readyState ? setTimeout(u) : o.onreadystatechange = Yt[s] = u : u();
            },
            abort: function() {
                u && u(void 0, !0);
            }
        };
    }), K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return K.globalEval(e), e;
            }
        }
    }), K.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), K.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var i, r = se.head || K("head")[0] || se.documentElement;
            return {
                send: function(e, n) {
                    (i = se.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), 
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
    var Ut = [], Qt = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ut.pop() || K.expando + "_" + Nt++;
            return this[e] = !0, e;
        }
    }), K.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, a, o = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
        return o || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        o ? e[o] = e[o].replace(Qt, "$1" + i) : !1 !== e.jsonp && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), 
        e.converters["script json"] = function() {
            return a || K.error(i + " was not called"), a[0];
        }, e.dataTypes[0] = "json", r = h[i], h[i] = function() {
            a = arguments;
        }, n.always(function() {
            h[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Ut.push(i)), a && K.isFunction(r) && r(a[0]), 
            a = r = void 0;
        }), "script") : void 0;
    }), K.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || se;
        var i = re.exec(e), r = !n && [];
        return i ? [ t.createElement(i[1]) ] : (i = K.buildFragment([ e ], t, r), r && r.length && K(r).remove(), 
        K.merge([], i.childNodes));
    };
    var Kt = K.fn.load;
    K.fn.load = function(e, t, n) {
        if ("string" != typeof e && Kt) return Kt.apply(this, arguments);
        var i, r, a, o = this, s = e.indexOf(" ");
        return 0 <= s && (i = K.trim(e.slice(s, e.length)), e = e.slice(0, s)), K.isFunction(t) ? (n = t, 
        t = void 0) : t && "object" == typeof t && (a = "POST"), 0 < o.length && K.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, o.html(i ? K("<div>").append(K.parseHTML(e)).find(i) : e);
        }).complete(n && function(e, t) {
            o.each(n, r || [ e.responseText, t, e ]);
        }), this;
    }, K.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        K.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), K.expr.filters.animated = function(t) {
        return K.grep(K.timers, function(e) {
            return t === e.elem;
        }).length;
    };
    var Jt = h.document.documentElement;
    K.offset = {
        setOffset: function(e, t, n) {
            var i, r, a, o, s, l, u = K.css(e, "position"), c = K(e), d = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), a = K.css(e, "top"), 
            l = K.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < K.inArray("auto", [ a, l ]) ? (o = (i = c.position()).top, 
            r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(l) || 0), K.isFunction(t) && (t = t.call(e, n, s)), 
            null != t.top && (d.top = t.top - s.top + o), null != t.left && (d.left = t.left - s.left + r), 
            "using" in t ? t.using.call(e, d) : c.css(d);
        }
    }, K.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                K.offset.setOffset(this, t, e);
            });
            var e, n, i = {
                top: 0,
                left: 0
            }, r = this[0], a = r && r.ownerDocument;
            return a ? (e = a.documentElement, K.contains(e, r) ? (typeof r.getBoundingClientRect !== me && (i = r.getBoundingClientRect()), 
            n = _(a), {
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
                return "fixed" === K.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), K.nodeName(e[0], "html") || (n = e.offset()), n.top += K.css(e[0], "borderTopWidth", !0), 
                n.left += K.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - K.css(i, "marginTop", !0),
                    left: t.left - n.left - K.css(i, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Jt; e && !K.nodeName(e, "html") && "static" === K.css(e, "position"); ) e = e.offsetParent;
                return e || Jt;
            });
        }
    }), K.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var a = /Y/.test(r);
        K.fn[t] = function(e) {
            return xe(this, function(e, t, n) {
                var i = _(e);
                return void 0 === n ? i ? r in i ? i[r] : i.document.documentElement[t] : e[t] : void (i ? i.scrollTo(a ? K(i).scrollLeft() : n, a ? n : K(i).scrollTop()) : e[t] = n);
            }, t, e, arguments.length, null);
        };
    }), K.each([ "top", "left" ], function(e, n) {
        K.cssHooks[n] = E(Q.pixelPosition, function(e, t) {
            return t ? (t = Ye(e, n), Ue.test(t) ? K(e).position()[n] + "px" : t) : void 0;
        });
    }), K.each({
        Height: "height",
        Width: "width"
    }, function(a, o) {
        K.each({
            padding: "inner" + a,
            content: o,
            "": "outer" + a
        }, function(i, e) {
            K.fn[e] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e), r = i || (!0 === e || !0 === t ? "margin" : "border");
                return xe(this, function(e, t, n) {
                    var i;
                    return K.isWindow(e) ? e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement, 
                    Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? K.css(e, t, r) : K.style(e, t, n, r);
                }, o, n ? e : void 0, n, null);
            };
        });
    }), K.fn.size = function() {
        return this.length;
    }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return K;
    });
    var Zt = h.jQuery, en = h.$;
    return K.noConflict = function(e) {
        return h.$ === K && (h.$ = en), e && h.jQuery === K && (h.jQuery = Zt), K;
    }, typeof e === me && (h.jQuery = h.$ = K), K;
});