/*! For license information please see bootstrap.js.LICENSE.txt */
(() => {
    var t, e = {
            980: (t, e, i) => {
                "use strict";
                i.r(e), i.d(e, {
                    afterMain: () => A,
                    afterRead: () => v,
                    afterWrite: () => C,
                    applyStyles: () => I,
                    arrow: () => J,
                    auto: () => a,
                    basePlacements: () => l,
                    beforeMain: () => y,
                    beforeRead: () => _,
                    beforeWrite: () => E,
                    bottom: () => s,
                    clippingParents: () => d,
                    computeStyles: () => it,
                    createPopper: () => It,
                    createPopperBase: () => St,
                    createPopperLite: () => Pt,
                    detectOverflow: () => bt,
                    end: () => h,
                    eventListeners: () => st,
                    flip: () => vt,
                    hide: () => At,
                    left: () => r,
                    main: () => w,
                    modifierPhases: () => O,
                    offset: () => Et,
                    placements: () => m,
                    popper: () => f,
                    popperGenerator: () => Dt,
                    popperOffsets: () => Tt,
                    preventOverflow: () => Ct,
                    read: () => b,
                    reference: () => p,
                    right: () => o,
                    start: () => c,
                    top: () => n,
                    variationPlacements: () => g,
                    viewport: () => u,
                    write: () => T
                });
                var n = "top",
                    s = "bottom",
                    o = "right",
                    r = "left",
                    a = "auto",
                    l = [n, s, o, r],
                    c = "start",
                    h = "end",
                    d = "clippingParents",
                    u = "viewport",
                    f = "popper",
                    p = "reference",
                    g = l.reduce((function(t, e) {
                        return t.concat([e + "-" + c, e + "-" + h])
                    }), []),
                    m = [].concat(l, [a]).reduce((function(t, e) {
                        return t.concat([e, e + "-" + c, e + "-" + h])
                    }), []),
                    _ = "beforeRead",
                    b = "read",
                    v = "afterRead",
                    y = "beforeMain",
                    w = "main",
                    A = "afterMain",
                    E = "beforeWrite",
                    T = "write",
                    C = "afterWrite",
                    O = [_, b, v, y, w, A, E, T, C];

                function x(t) {
                    return t ? (t.nodeName || "").toLowerCase() : null
                }

                function k(t) {
                    if (null == t) return window;
                    if ("[object Window]" !== t.toString()) {
                        var e = t.ownerDocument;
                        return e && e.defaultView || window
                    }
                    return t
                }

                function L(t) {
                    return t instanceof k(t).Element || t instanceof Element
                }

                function D(t) {
                    return t instanceof k(t).HTMLElement || t instanceof HTMLElement
                }

                function S(t) {
                    return "undefined" != typeof ShadowRoot && (t instanceof k(t).ShadowRoot || t instanceof ShadowRoot)
                }
                const I = {
                    name: "applyStyles",
                    enabled: !0,
                    phase: "write",
                    fn: function(t) {
                        var e = t.state;
                        Object.keys(e.elements).forEach((function(t) {
                            var i = e.styles[t] || {},
                                n = e.attributes[t] || {},
                                s = e.elements[t];
                            D(s) && x(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function(t) {
                                var e = n[t];
                                !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                            })))
                        }))
                    },
                    effect: function(t) {
                        var e = t.state,
                            i = {
                                popper: {
                                    position: e.options.strategy,
                                    left: "0",
                                    top: "0",
                                    margin: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                },
                                reference: {}
                            };
                        return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                            function() {
                                Object.keys(e.elements).forEach((function(t) {
                                    var n = e.elements[t],
                                        s = e.attributes[t] || {},
                                        o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) {
                                            return t[e] = "", t
                                        }), {});
                                    D(n) && x(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function(t) {
                                        n.removeAttribute(t)
                                    })))
                                }))
                            }
                    },
                    requires: ["computeStyles"]
                };

                function P(t) {
                    return t.split("-")[0]
                }
                var N = Math.max,
                    j = Math.min,
                    M = Math.round;

                function H() {
                    var t = navigator.userAgentData;
                    return null != t && t.brands ? t.brands.map((function(t) {
                        return t.brand + "/" + t.version
                    })).join(" ") : navigator.userAgent
                }

                function $() {
                    return !/^((?!chrome|android).)*safari/i.test(H())
                }

                function W(t, e, i) {
                    void 0 === e && (e = !1), void 0 === i && (i = !1);
                    var n = t.getBoundingClientRect(),
                        s = 1,
                        o = 1;
                    e && D(t) && (s = t.offsetWidth > 0 && M(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && M(n.height) / t.offsetHeight || 1);
                    var r = (L(t) ? k(t) : window).visualViewport,
                        a = !$() && i,
                        l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
                        c = (n.top + (a && r ? r.offsetTop : 0)) / o,
                        h = n.width / s,
                        d = n.height / o;
                    return {
                        width: h,
                        height: d,
                        top: c,
                        right: l + h,
                        bottom: c + d,
                        left: l,
                        x: l,
                        y: c
                    }
                }

                function B(t) {
                    var e = W(t),
                        i = t.offsetWidth,
                        n = t.offsetHeight;
                    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
                        x: t.offsetLeft,
                        y: t.offsetTop,
                        width: i,
                        height: n
                    }
                }

                function F(t, e) {
                    var i = e.getRootNode && e.getRootNode();
                    if (t.contains(e)) return !0;
                    if (i && S(i)) {
                        var n = e;
                        do {
                            if (n && t.isSameNode(n)) return !0;
                            n = n.parentNode || n.host
                        } while (n)
                    }
                    return !1
                }

                function z(t) {
                    return k(t).getComputedStyle(t)
                }

                function q(t) {
                    return ["table", "td", "th"].indexOf(x(t)) >= 0
                }

                function R(t) {
                    return ((L(t) ? t.ownerDocument : t.document) || window.document).documentElement
                }

                function V(t) {
                    return "html" === x(t) ? t : t.assignedSlot || t.parentNode || (S(t) ? t.host : null) || R(t)
                }

                function K(t) {
                    return D(t) && "fixed" !== z(t).position ? t.offsetParent : null
                }

                function Q(t) {
                    for (var e = k(t), i = K(t); i && q(i) && "static" === z(i).position;) i = K(i);
                    return i && ("html" === x(i) || "body" === x(i) && "static" === z(i).position) ? e : i || function(t) {
                        var e = /firefox/i.test(H());
                        if (/Trident/i.test(H()) && D(t) && "fixed" === z(t).position) return null;
                        var i = V(t);
                        for (S(i) && (i = i.host); D(i) && ["html", "body"].indexOf(x(i)) < 0;) {
                            var n = z(i);
                            if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                            i = i.parentNode
                        }
                        return null
                    }(t) || e
                }

                function X(t) {
                    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
                }

                function Y(t, e, i) {
                    return N(t, j(e, i))
                }

                function U(t) {
                    return Object.assign({}, {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, t)
                }

                function G(t, e) {
                    return e.reduce((function(e, i) {
                        return e[i] = t, e
                    }), {})
                }
                const J = {
                    name: "arrow",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e, i = t.state,
                            a = t.name,
                            c = t.options,
                            h = i.elements.arrow,
                            d = i.modifiersData.popperOffsets,
                            u = P(i.placement),
                            f = X(u),
                            p = [r, o].indexOf(u) >= 0 ? "height" : "width";
                        if (h && d) {
                            var g = function(t, e) {
                                    return U("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                                        placement: e.placement
                                    })) : t) ? t : G(t, l))
                                }(c.padding, i),
                                m = B(h),
                                _ = "y" === f ? n : r,
                                b = "y" === f ? s : o,
                                v = i.rects.reference[p] + i.rects.reference[f] - d[f] - i.rects.popper[p],
                                y = d[f] - i.rects.reference[f],
                                w = Q(h),
                                A = w ? "y" === f ? w.clientHeight || 0 : w.clientWidth || 0 : 0,
                                E = v / 2 - y / 2,
                                T = g[_],
                                C = A - m[p] - g[b],
                                O = A / 2 - m[p] / 2 + E,
                                x = Y(T, O, C),
                                k = f;
                            i.modifiersData[a] = ((e = {})[k] = x, e.centerOffset = x - O, e)
                        }
                    },
                    effect: function(t) {
                        var e = t.state,
                            i = t.options.element,
                            n = void 0 === i ? "[data-popper-arrow]" : i;
                        null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && F(e.elements.popper, n) && (e.elements.arrow = n)
                    },
                    requires: ["popperOffsets"],
                    requiresIfExists: ["preventOverflow"]
                };

                function Z(t) {
                    return t.split("-")[1]
                }
                var tt = {
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto"
                };

                function et(t) {
                    var e, i = t.popper,
                        a = t.popperRect,
                        l = t.placement,
                        c = t.variation,
                        d = t.offsets,
                        u = t.position,
                        f = t.gpuAcceleration,
                        p = t.adaptive,
                        g = t.roundOffsets,
                        m = t.isFixed,
                        _ = d.x,
                        b = void 0 === _ ? 0 : _,
                        v = d.y,
                        y = void 0 === v ? 0 : v,
                        w = "function" == typeof g ? g({
                            x: b,
                            y
                        }) : {
                            x: b,
                            y
                        };
                    b = w.x, y = w.y;
                    var A = d.hasOwnProperty("x"),
                        E = d.hasOwnProperty("y"),
                        T = r,
                        C = n,
                        O = window;
                    if (p) {
                        var x = Q(i),
                            L = "clientHeight",
                            D = "clientWidth";
                        if (x === k(i) && "static" !== z(x = R(i)).position && "absolute" === u && (L = "scrollHeight", D = "scrollWidth"), l === n || (l === r || l === o) && c === h) C = s, y -= (m && x === O && O.visualViewport ? O.visualViewport.height : x[L]) - a.height, y *= f ? 1 : -1;
                        if (l === r || (l === n || l === s) && c === h) T = o, b -= (m && x === O && O.visualViewport ? O.visualViewport.width : x[D]) - a.width, b *= f ? 1 : -1
                    }
                    var S, I = Object.assign({
                            position: u
                        }, p && tt),
                        P = !0 === g ? function(t) {
                            var e = t.x,
                                i = t.y,
                                n = window.devicePixelRatio || 1;
                            return {
                                x: M(e * n) / n || 0,
                                y: M(i * n) / n || 0
                            }
                        }({
                            x: b,
                            y
                        }) : {
                            x: b,
                            y
                        };
                    return b = P.x, y = P.y, f ? Object.assign({}, I, ((S = {})[C] = E ? "0" : "", S[T] = A ? "0" : "", S.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + y + "px)" : "translate3d(" + b + "px, " + y + "px, 0)", S)) : Object.assign({}, I, ((e = {})[C] = E ? y + "px" : "", e[T] = A ? b + "px" : "", e.transform = "", e))
                }
                const it = {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function(t) {
                        var e = t.state,
                            i = t.options,
                            n = i.gpuAcceleration,
                            s = void 0 === n || n,
                            o = i.adaptive,
                            r = void 0 === o || o,
                            a = i.roundOffsets,
                            l = void 0 === a || a,
                            c = {
                                placement: P(e.placement),
                                variation: Z(e.placement),
                                popper: e.elements.popper,
                                popperRect: e.rects.popper,
                                gpuAcceleration: s,
                                isFixed: "fixed" === e.options.strategy
                            };
                        null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, et(Object.assign({}, c, {
                            offsets: e.modifiersData.popperOffsets,
                            position: e.options.strategy,
                            adaptive: r,
                            roundOffsets: l
                        })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, et(Object.assign({}, c, {
                            offsets: e.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: l
                        })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                            "data-popper-placement": e.placement
                        })
                    },
                    data: {}
                };
                var nt = {
                    passive: !0
                };
                const st = {
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function() {},
                    effect: function(t) {
                        var e = t.state,
                            i = t.instance,
                            n = t.options,
                            s = n.scroll,
                            o = void 0 === s || s,
                            r = n.resize,
                            a = void 0 === r || r,
                            l = k(e.elements.popper),
                            c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                        return o && c.forEach((function(t) {
                                t.addEventListener("scroll", i.update, nt)
                            })), a && l.addEventListener("resize", i.update, nt),
                            function() {
                                o && c.forEach((function(t) {
                                    t.removeEventListener("scroll", i.update, nt)
                                })), a && l.removeEventListener("resize", i.update, nt)
                            }
                    },
                    data: {}
                };
                var ot = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };

                function rt(t) {
                    return t.replace(/left|right|bottom|top/g, (function(t) {
                        return ot[t]
                    }))
                }
                var at = {
                    start: "end",
                    end: "start"
                };

                function lt(t) {
                    return t.replace(/start|end/g, (function(t) {
                        return at[t]
                    }))
                }

                function ct(t) {
                    var e = k(t);
                    return {
                        scrollLeft: e.pageXOffset,
                        scrollTop: e.pageYOffset
                    }
                }

                function ht(t) {
                    return W(R(t)).left + ct(t).scrollLeft
                }

                function dt(t) {
                    var e = z(t),
                        i = e.overflow,
                        n = e.overflowX,
                        s = e.overflowY;
                    return /auto|scroll|overlay|hidden/.test(i + s + n)
                }

                function ut(t) {
                    return ["html", "body", "#document"].indexOf(x(t)) >= 0 ? t.ownerDocument.body : D(t) && dt(t) ? t : ut(V(t))
                }

                function ft(t, e) {
                    var i;
                    void 0 === e && (e = []);
                    var n = ut(t),
                        s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
                        o = k(n),
                        r = s ? [o].concat(o.visualViewport || [], dt(n) ? n : []) : n,
                        a = e.concat(r);
                    return s ? a : a.concat(ft(V(r)))
                }

                function pt(t) {
                    return Object.assign({}, t, {
                        left: t.x,
                        top: t.y,
                        right: t.x + t.width,
                        bottom: t.y + t.height
                    })
                }

                function gt(t, e, i) {
                    return e === u ? pt(function(t, e) {
                        var i = k(t),
                            n = R(t),
                            s = i.visualViewport,
                            o = n.clientWidth,
                            r = n.clientHeight,
                            a = 0,
                            l = 0;
                        if (s) {
                            o = s.width, r = s.height;
                            var c = $();
                            (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop)
                        }
                        return {
                            width: o,
                            height: r,
                            x: a + ht(t),
                            y: l
                        }
                    }(t, i)) : L(e) ? function(t, e) {
                        var i = W(t, !1, "fixed" === e);
                        return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i
                    }(e, i) : pt(function(t) {
                        var e, i = R(t),
                            n = ct(t),
                            s = null == (e = t.ownerDocument) ? void 0 : e.body,
                            o = N(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                            r = N(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                            a = -n.scrollLeft + ht(t),
                            l = -n.scrollTop;
                        return "rtl" === z(s || i).direction && (a += N(i.clientWidth, s ? s.clientWidth : 0) - o), {
                            width: o,
                            height: r,
                            x: a,
                            y: l
                        }
                    }(R(t)))
                }

                function mt(t, e, i, n) {
                    var s = "clippingParents" === e ? function(t) {
                            var e = ft(V(t)),
                                i = ["absolute", "fixed"].indexOf(z(t).position) >= 0 && D(t) ? Q(t) : t;
                            return L(i) ? e.filter((function(t) {
                                return L(t) && F(t, i) && "body" !== x(t)
                            })) : []
                        }(t) : [].concat(e),
                        o = [].concat(s, [i]),
                        r = o[0],
                        a = o.reduce((function(e, i) {
                            var s = gt(t, i, n);
                            return e.top = N(s.top, e.top), e.right = j(s.right, e.right), e.bottom = j(s.bottom, e.bottom), e.left = N(s.left, e.left), e
                        }), gt(t, r, n));
                    return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
                }

                function _t(t) {
                    var e, i = t.reference,
                        a = t.element,
                        l = t.placement,
                        d = l ? P(l) : null,
                        u = l ? Z(l) : null,
                        f = i.x + i.width / 2 - a.width / 2,
                        p = i.y + i.height / 2 - a.height / 2;
                    switch (d) {
                        case n:
                            e = {
                                x: f,
                                y: i.y - a.height
                            };
                            break;
                        case s:
                            e = {
                                x: f,
                                y: i.y + i.height
                            };
                            break;
                        case o:
                            e = {
                                x: i.x + i.width,
                                y: p
                            };
                            break;
                        case r:
                            e = {
                                x: i.x - a.width,
                                y: p
                            };
                            break;
                        default:
                            e = {
                                x: i.x,
                                y: i.y
                            }
                    }
                    var g = d ? X(d) : null;
                    if (null != g) {
                        var m = "y" === g ? "height" : "width";
                        switch (u) {
                            case c:
                                e[g] = e[g] - (i[m] / 2 - a[m] / 2);
                                break;
                            case h:
                                e[g] = e[g] + (i[m] / 2 - a[m] / 2)
                        }
                    }
                    return e
                }

                function bt(t, e) {
                    void 0 === e && (e = {});
                    var i = e,
                        r = i.placement,
                        a = void 0 === r ? t.placement : r,
                        c = i.strategy,
                        h = void 0 === c ? t.strategy : c,
                        g = i.boundary,
                        m = void 0 === g ? d : g,
                        _ = i.rootBoundary,
                        b = void 0 === _ ? u : _,
                        v = i.elementContext,
                        y = void 0 === v ? f : v,
                        w = i.altBoundary,
                        A = void 0 !== w && w,
                        E = i.padding,
                        T = void 0 === E ? 0 : E,
                        C = U("number" != typeof T ? T : G(T, l)),
                        O = y === f ? p : f,
                        x = t.rects.popper,
                        k = t.elements[A ? O : y],
                        D = mt(L(k) ? k : k.contextElement || R(t.elements.popper), m, b, h),
                        S = W(t.elements.reference),
                        I = _t({
                            reference: S,
                            element: x,
                            strategy: "absolute",
                            placement: a
                        }),
                        P = pt(Object.assign({}, x, I)),
                        N = y === f ? P : S,
                        j = {
                            top: D.top - N.top + C.top,
                            bottom: N.bottom - D.bottom + C.bottom,
                            left: D.left - N.left + C.left,
                            right: N.right - D.right + C.right
                        },
                        M = t.modifiersData.offset;
                    if (y === f && M) {
                        var H = M[a];
                        Object.keys(j).forEach((function(t) {
                            var e = [o, s].indexOf(t) >= 0 ? 1 : -1,
                                i = [n, s].indexOf(t) >= 0 ? "y" : "x";
                            j[t] += H[i] * e
                        }))
                    }
                    return j
                }
                const vt = {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e = t.state,
                            i = t.options,
                            h = t.name;
                        if (!e.modifiersData[h]._skip) {
                            for (var d = i.mainAxis, u = void 0 === d || d, f = i.altAxis, p = void 0 === f || f, _ = i.fallbackPlacements, b = i.padding, v = i.boundary, y = i.rootBoundary, w = i.altBoundary, A = i.flipVariations, E = void 0 === A || A, T = i.allowedAutoPlacements, C = e.options.placement, O = P(C), x = _ || (O === C || !E ? [rt(C)] : function(t) {
                                    if (P(t) === a) return [];
                                    var e = rt(t);
                                    return [lt(t), e, lt(e)]
                                }(C)), k = [C].concat(x).reduce((function(t, i) {
                                    return t.concat(P(i) === a ? function(t, e) {
                                        void 0 === e && (e = {});
                                        var i = e,
                                            n = i.placement,
                                            s = i.boundary,
                                            o = i.rootBoundary,
                                            r = i.padding,
                                            a = i.flipVariations,
                                            c = i.allowedAutoPlacements,
                                            h = void 0 === c ? m : c,
                                            d = Z(n),
                                            u = d ? a ? g : g.filter((function(t) {
                                                return Z(t) === d
                                            })) : l,
                                            f = u.filter((function(t) {
                                                return h.indexOf(t) >= 0
                                            }));
                                        0 === f.length && (f = u);
                                        var p = f.reduce((function(e, i) {
                                            return e[i] = bt(t, {
                                                placement: i,
                                                boundary: s,
                                                rootBoundary: o,
                                                padding: r
                                            })[P(i)], e
                                        }), {});
                                        return Object.keys(p).sort((function(t, e) {
                                            return p[t] - p[e]
                                        }))
                                    }(e, {
                                        placement: i,
                                        boundary: v,
                                        rootBoundary: y,
                                        padding: b,
                                        flipVariations: E,
                                        allowedAutoPlacements: T
                                    }) : i)
                                }), []), L = e.rects.reference, D = e.rects.popper, S = new Map, I = !0, N = k[0], j = 0; j < k.length; j++) {
                                var M = k[j],
                                    H = P(M),
                                    $ = Z(M) === c,
                                    W = [n, s].indexOf(H) >= 0,
                                    B = W ? "width" : "height",
                                    F = bt(e, {
                                        placement: M,
                                        boundary: v,
                                        rootBoundary: y,
                                        altBoundary: w,
                                        padding: b
                                    }),
                                    z = W ? $ ? o : r : $ ? s : n;
                                L[B] > D[B] && (z = rt(z));
                                var q = rt(z),
                                    R = [];
                                if (u && R.push(F[H] <= 0), p && R.push(F[z] <= 0, F[q] <= 0), R.every((function(t) {
                                        return t
                                    }))) {
                                    N = M, I = !1;
                                    break
                                }
                                S.set(M, R)
                            }
                            if (I)
                                for (var V = function(t) {
                                        var e = k.find((function(e) {
                                            var i = S.get(e);
                                            if (i) return i.slice(0, t).every((function(t) {
                                                return t
                                            }))
                                        }));
                                        if (e) return N = e, "break"
                                    }, K = E ? 3 : 1; K > 0; K--) {
                                    if ("break" === V(K)) break
                                }
                            e.placement !== N && (e.modifiersData[h]._skip = !0, e.placement = N, e.reset = !0)
                        }
                    },
                    requiresIfExists: ["offset"],
                    data: {
                        _skip: !1
                    }
                };

                function yt(t, e, i) {
                    return void 0 === i && (i = {
                        x: 0,
                        y: 0
                    }), {
                        top: t.top - e.height - i.y,
                        right: t.right - e.width + i.x,
                        bottom: t.bottom - e.height + i.y,
                        left: t.left - e.width - i.x
                    }
                }

                function wt(t) {
                    return [n, o, s, r].some((function(e) {
                        return t[e] >= 0
                    }))
                }
                const At = {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function(t) {
                        var e = t.state,
                            i = t.name,
                            n = e.rects.reference,
                            s = e.rects.popper,
                            o = e.modifiersData.preventOverflow,
                            r = bt(e, {
                                elementContext: "reference"
                            }),
                            a = bt(e, {
                                altBoundary: !0
                            }),
                            l = yt(r, n),
                            c = yt(a, s, o),
                            h = wt(l),
                            d = wt(c);
                        e.modifiersData[i] = {
                            referenceClippingOffsets: l,
                            popperEscapeOffsets: c,
                            isReferenceHidden: h,
                            hasPopperEscaped: d
                        }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                            "data-popper-reference-hidden": h,
                            "data-popper-escaped": d
                        })
                    }
                };
                const Et = {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function(t) {
                        var e = t.state,
                            i = t.options,
                            s = t.name,
                            a = i.offset,
                            l = void 0 === a ? [0, 0] : a,
                            c = m.reduce((function(t, i) {
                                return t[i] = function(t, e, i) {
                                    var s = P(t),
                                        a = [r, n].indexOf(s) >= 0 ? -1 : 1,
                                        l = "function" == typeof i ? i(Object.assign({}, e, {
                                            placement: t
                                        })) : i,
                                        c = l[0],
                                        h = l[1];
                                    return c = c || 0, h = (h || 0) * a, [r, o].indexOf(s) >= 0 ? {
                                        x: h,
                                        y: c
                                    } : {
                                        x: c,
                                        y: h
                                    }
                                }(i, e.rects, l), t
                            }), {}),
                            h = c[e.placement],
                            d = h.x,
                            u = h.y;
                        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += d, e.modifiersData.popperOffsets.y += u), e.modifiersData[s] = c
                    }
                };
                const Tt = {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(t) {
                        var e = t.state,
                            i = t.name;
                        e.modifiersData[i] = _t({
                            reference: e.rects.reference,
                            element: e.rects.popper,
                            strategy: "absolute",
                            placement: e.placement
                        })
                    },
                    data: {}
                };
                const Ct = {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e = t.state,
                            i = t.options,
                            a = t.name,
                            l = i.mainAxis,
                            h = void 0 === l || l,
                            d = i.altAxis,
                            u = void 0 !== d && d,
                            f = i.boundary,
                            p = i.rootBoundary,
                            g = i.altBoundary,
                            m = i.padding,
                            _ = i.tether,
                            b = void 0 === _ || _,
                            v = i.tetherOffset,
                            y = void 0 === v ? 0 : v,
                            w = bt(e, {
                                boundary: f,
                                rootBoundary: p,
                                padding: m,
                                altBoundary: g
                            }),
                            A = P(e.placement),
                            E = Z(e.placement),
                            T = !E,
                            C = X(A),
                            O = "x" === C ? "y" : "x",
                            x = e.modifiersData.popperOffsets,
                            k = e.rects.reference,
                            L = e.rects.popper,
                            D = "function" == typeof y ? y(Object.assign({}, e.rects, {
                                placement: e.placement
                            })) : y,
                            S = "number" == typeof D ? {
                                mainAxis: D,
                                altAxis: D
                            } : Object.assign({
                                mainAxis: 0,
                                altAxis: 0
                            }, D),
                            I = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
                            M = {
                                x: 0,
                                y: 0
                            };
                        if (x) {
                            if (h) {
                                var H, $ = "y" === C ? n : r,
                                    W = "y" === C ? s : o,
                                    F = "y" === C ? "height" : "width",
                                    z = x[C],
                                    q = z + w[$],
                                    R = z - w[W],
                                    V = b ? -L[F] / 2 : 0,
                                    K = E === c ? k[F] : L[F],
                                    U = E === c ? -L[F] : -k[F],
                                    G = e.elements.arrow,
                                    J = b && G ? B(G) : {
                                        width: 0,
                                        height: 0
                                    },
                                    tt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0
                                    },
                                    et = tt[$],
                                    it = tt[W],
                                    nt = Y(0, k[F], J[F]),
                                    st = T ? k[F] / 2 - V - nt - et - S.mainAxis : K - nt - et - S.mainAxis,
                                    ot = T ? -k[F] / 2 + V + nt + it + S.mainAxis : U + nt + it + S.mainAxis,
                                    rt = e.elements.arrow && Q(e.elements.arrow),
                                    at = rt ? "y" === C ? rt.clientTop || 0 : rt.clientLeft || 0 : 0,
                                    lt = null != (H = null == I ? void 0 : I[C]) ? H : 0,
                                    ct = z + ot - lt,
                                    ht = Y(b ? j(q, z + st - lt - at) : q, z, b ? N(R, ct) : R);
                                x[C] = ht, M[C] = ht - z
                            }
                            if (u) {
                                var dt, ut = "x" === C ? n : r,
                                    ft = "x" === C ? s : o,
                                    pt = x[O],
                                    gt = "y" === O ? "height" : "width",
                                    mt = pt + w[ut],
                                    _t = pt - w[ft],
                                    vt = -1 !== [n, r].indexOf(A),
                                    yt = null != (dt = null == I ? void 0 : I[O]) ? dt : 0,
                                    wt = vt ? mt : pt - k[gt] - L[gt] - yt + S.altAxis,
                                    At = vt ? pt + k[gt] + L[gt] - yt - S.altAxis : _t,
                                    Et = b && vt ? function(t, e, i) {
                                        var n = Y(t, e, i);
                                        return n > i ? i : n
                                    }(wt, pt, At) : Y(b ? wt : mt, pt, b ? At : _t);
                                x[O] = Et, M[O] = Et - pt
                            }
                            e.modifiersData[a] = M
                        }
                    },
                    requiresIfExists: ["offset"]
                };

                function Ot(t, e, i) {
                    void 0 === i && (i = !1);
                    var n, s, o = D(e),
                        r = D(e) && function(t) {
                            var e = t.getBoundingClientRect(),
                                i = M(e.width) / t.offsetWidth || 1,
                                n = M(e.height) / t.offsetHeight || 1;
                            return 1 !== i || 1 !== n
                        }(e),
                        a = R(e),
                        l = W(t, r, i),
                        c = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        h = {
                            x: 0,
                            y: 0
                        };
                    return (o || !o && !i) && (("body" !== x(e) || dt(a)) && (c = (n = e) !== k(n) && D(n) ? {
                        scrollLeft: (s = n).scrollLeft,
                        scrollTop: s.scrollTop
                    } : ct(n)), D(e) ? ((h = W(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = ht(a))), {
                        x: l.left + c.scrollLeft - h.x,
                        y: l.top + c.scrollTop - h.y,
                        width: l.width,
                        height: l.height
                    }
                }

                function xt(t) {
                    var e = new Map,
                        i = new Set,
                        n = [];

                    function s(t) {
                        i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                            if (!i.has(t)) {
                                var n = e.get(t);
                                n && s(n)
                            }
                        })), n.push(t)
                    }
                    return t.forEach((function(t) {
                        e.set(t.name, t)
                    })), t.forEach((function(t) {
                        i.has(t.name) || s(t)
                    })), n
                }
                var kt = {
                    placement: "bottom",
                    modifiers: [],
                    strategy: "absolute"
                };

                function Lt() {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    return !e.some((function(t) {
                        return !(t && "function" == typeof t.getBoundingClientRect)
                    }))
                }

                function Dt(t) {
                    void 0 === t && (t = {});
                    var e = t,
                        i = e.defaultModifiers,
                        n = void 0 === i ? [] : i,
                        s = e.defaultOptions,
                        o = void 0 === s ? kt : s;
                    return function(t, e, i) {
                        void 0 === i && (i = o);
                        var s, r, a = {
                                placement: "bottom",
                                orderedModifiers: [],
                                options: Object.assign({}, kt, o),
                                modifiersData: {},
                                elements: {
                                    reference: t,
                                    popper: e
                                },
                                attributes: {},
                                styles: {}
                            },
                            l = [],
                            c = !1,
                            h = {
                                state: a,
                                setOptions: function(i) {
                                    var s = "function" == typeof i ? i(a.options) : i;
                                    d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                                        reference: L(t) ? ft(t) : t.contextElement ? ft(t.contextElement) : [],
                                        popper: ft(e)
                                    };
                                    var r = function(t) {
                                        var e = xt(t);
                                        return O.reduce((function(t, i) {
                                            return t.concat(e.filter((function(t) {
                                                return t.phase === i
                                            })))
                                        }), [])
                                    }(function(t) {
                                        var e = t.reduce((function(t, e) {
                                            var i = t[e.name];
                                            return t[e.name] = i ? Object.assign({}, i, e, {
                                                options: Object.assign({}, i.options, e.options),
                                                data: Object.assign({}, i.data, e.data)
                                            }) : e, t
                                        }), {});
                                        return Object.keys(e).map((function(t) {
                                            return e[t]
                                        }))
                                    }([].concat(n, a.options.modifiers)));
                                    return a.orderedModifiers = r.filter((function(t) {
                                        return t.enabled
                                    })), a.orderedModifiers.forEach((function(t) {
                                        var e = t.name,
                                            i = t.options,
                                            n = void 0 === i ? {} : i,
                                            s = t.effect;
                                        if ("function" == typeof s) {
                                            var o = s({
                                                    state: a,
                                                    name: e,
                                                    instance: h,
                                                    options: n
                                                }),
                                                r = function() {};
                                            l.push(o || r)
                                        }
                                    })), h.update()
                                },
                                forceUpdate: function() {
                                    if (!c) {
                                        var t = a.elements,
                                            e = t.reference,
                                            i = t.popper;
                                        if (Lt(e, i)) {
                                            a.rects = {
                                                reference: Ot(e, Q(i), "fixed" === a.options.strategy),
                                                popper: B(i)
                                            }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) {
                                                return a.modifiersData[t.name] = Object.assign({}, t.data)
                                            }));
                                            for (var n = 0; n < a.orderedModifiers.length; n++)
                                                if (!0 !== a.reset) {
                                                    var s = a.orderedModifiers[n],
                                                        o = s.fn,
                                                        r = s.options,
                                                        l = void 0 === r ? {} : r,
                                                        d = s.name;
                                                    "function" == typeof o && (a = o({
                                                        state: a,
                                                        options: l,
                                                        name: d,
                                                        instance: h
                                                    }) || a)
                                                } else a.reset = !1, n = -1
                                        }
                                    }
                                },
                                update: (s = function() {
                                    return new Promise((function(t) {
                                        h.forceUpdate(), t(a)
                                    }))
                                }, function() {
                                    return r || (r = new Promise((function(t) {
                                        Promise.resolve().then((function() {
                                            r = void 0, t(s())
                                        }))
                                    }))), r
                                }),
                                destroy: function() {
                                    d(), c = !0
                                }
                            };
                        if (!Lt(t, e)) return h;

                        function d() {
                            l.forEach((function(t) {
                                return t()
                            })), l = []
                        }
                        return h.setOptions(i).then((function(t) {
                            !c && i.onFirstUpdate && i.onFirstUpdate(t)
                        })), h
                    }
                }
                var St = Dt(),
                    It = Dt({
                        defaultModifiers: [st, Tt, it, I, Et, vt, Ct, J, At]
                    }),
                    Pt = Dt({
                        defaultModifiers: [st, Tt, it, I]
                    })
            },
            666: function(t, e, i) {
                t.exports = function(t) {
                    "use strict";

                    function e(t) {
                        if (t && t.__esModule) return t;
                        const e = Object.create(null, {
                            [Symbol.toStringTag]: {
                                value: "Module"
                            }
                        });
                        if (t)
                            for (const i in t)
                                if ("default" !== i) {
                                    const n = Object.getOwnPropertyDescriptor(t, i);
                                    Object.defineProperty(e, i, n.get ? n : {
                                        enumerable: !0,
                                        get: () => t[i]
                                    })
                                } return e.default = t, Object.freeze(e)
                    }
                    const i = e(t),
                        n = "transitionend",
                        s = t => {
                            let e = t.getAttribute("data-bs-target");
                            if (!e || "#" === e) {
                                let i = t.getAttribute("href");
                                if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null
                            }
                            return e
                        },
                        o = t => {
                            const e = s(t);
                            return e && document.querySelector(e) ? e : null
                        },
                        r = t => {
                            const e = s(t);
                            return e ? document.querySelector(e) : null
                        },
                        a = t => {
                            t.dispatchEvent(new Event(n))
                        },
                        l = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
                        c = t => l(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
                        h = t => {
                            if (!l(t) || 0 === t.getClientRects().length) return !1;
                            const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                                i = t.closest("details:not([open])");
                            if (!i) return e;
                            if (i !== t) {
                                const e = t.closest("summary");
                                if (e && e.parentNode !== i) return !1;
                                if (null === e) return !1
                            }
                            return e
                        },
                        d = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
                        u = t => {
                            if (!document.documentElement.attachShadow) return null;
                            if ("function" == typeof t.getRootNode) {
                                const e = t.getRootNode();
                                return e instanceof ShadowRoot ? e : null
                            }
                            return t instanceof ShadowRoot ? t : t.parentNode ? u(t.parentNode) : null
                        },
                        f = () => {},
                        p = t => {
                            t.offsetHeight
                        },
                        g = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
                        m = [],
                        _ = () => "rtl" === document.documentElement.dir,
                        b = t => {
                            var e;
                            e = () => {
                                const e = g();
                                if (e) {
                                    const i = t.NAME,
                                        n = e.fn[i];
                                    e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
                                }
                            }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", (() => {
                                for (const t of m) t()
                            })), m.push(e)) : e()
                        },
                        v = t => {
                            "function" == typeof t && t()
                        },
                        y = (t, e, i = !0) => {
                            if (!i) return void v(t);
                            const s = (t => {
                                if (!t) return 0;
                                let {
                                    transitionDuration: e,
                                    transitionDelay: i
                                } = window.getComputedStyle(t);
                                const n = Number.parseFloat(e),
                                    s = Number.parseFloat(i);
                                return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
                            })(e) + 5;
                            let o = !1;
                            const r = ({
                                target: i
                            }) => {
                                i === e && (o = !0, e.removeEventListener(n, r), v(t))
                            };
                            e.addEventListener(n, r), setTimeout((() => {
                                o || a(e)
                            }), s)
                        },
                        w = (t, e, i, n) => {
                            const s = t.length;
                            let o = t.indexOf(e);
                            return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))])
                        },
                        A = /[^.]*(?=\..*)\.|.*/,
                        E = /\..*/,
                        T = /::\d+$/,
                        C = {};
                    let O = 1;
                    const x = {
                            mouseenter: "mouseover",
                            mouseleave: "mouseout"
                        },
                        k = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

                    function L(t, e) {
                        return e && `${e}::${O++}` || t.uidEvent || O++
                    }

                    function D(t) {
                        const e = L(t);
                        return t.uidEvent = e, C[e] = C[e] || {}, C[e]
                    }

                    function S(t, e, i = null) {
                        return Object.values(t).find((t => t.callable === e && t.delegationSelector === i))
                    }

                    function I(t, e, i) {
                        const n = "string" == typeof e,
                            s = n ? i : e || i;
                        let o = M(t);
                        return k.has(o) || (o = t), [n, s, o]
                    }

                    function P(t, e, i, n, s) {
                        if ("string" != typeof e || !t) return;
                        let [o, r, a] = I(e, i, n);
                        if (e in x) {
                            const t = t => function(e) {
                                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
                            };
                            r = t(r)
                        }
                        const l = D(t),
                            c = l[a] || (l[a] = {}),
                            h = S(c, r, o ? i : null);
                        if (h) return void(h.oneOff = h.oneOff && s);
                        const d = L(r, e.replace(A, "")),
                            u = o ? function(t, e, i) {
                                return function n(s) {
                                    const o = t.querySelectorAll(e);
                                    for (let {
                                            target: r
                                        } = s; r && r !== this; r = r.parentNode)
                                        for (const a of o)
                                            if (a === r) return $(s, {
                                                delegateTarget: r
                                            }), n.oneOff && H.off(t, s.type, e, i), i.apply(r, [s])
                                }
                            }(t, i, r) : function(t, e) {
                                return function i(n) {
                                    return $(n, {
                                        delegateTarget: t
                                    }), i.oneOff && H.off(t, n.type, e), e.apply(t, [n])
                                }
                            }(t, r);
                        u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
                    }

                    function N(t, e, i, n, s) {
                        const o = S(e[i], n, s);
                        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
                    }

                    function j(t, e, i, n) {
                        const s = e[i] || {};
                        for (const o of Object.keys(s))
                            if (o.includes(n)) {
                                const n = s[o];
                                N(t, e, i, n.callable, n.delegationSelector)
                            }
                    }

                    function M(t) {
                        return t = t.replace(E, ""), x[t] || t
                    }
                    const H = {
                        on(t, e, i, n) {
                            P(t, e, i, n, !1)
                        },
                        one(t, e, i, n) {
                            P(t, e, i, n, !0)
                        },
                        off(t, e, i, n) {
                            if ("string" != typeof e || !t) return;
                            const [s, o, r] = I(e, i, n), a = r !== e, l = D(t), c = l[r] || {}, h = e.startsWith(".");
                            if (void 0 === o) {
                                if (h)
                                    for (const i of Object.keys(l)) j(t, l, i, e.slice(1));
                                for (const i of Object.keys(c)) {
                                    const n = i.replace(T, "");
                                    if (!a || e.includes(n)) {
                                        const e = c[i];
                                        N(t, l, r, e.callable, e.delegationSelector)
                                    }
                                }
                            } else {
                                if (!Object.keys(c).length) return;
                                N(t, l, r, o, s ? i : null)
                            }
                        },
                        trigger(t, e, i) {
                            if ("string" != typeof e || !t) return null;
                            const n = g();
                            let s = null,
                                o = !0,
                                r = !0,
                                a = !1;
                            e !== M(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
                            let l = new Event(e, {
                                bubbles: o,
                                cancelable: !0
                            });
                            return l = $(l, i), a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l
                        }
                    };

                    function $(t, e) {
                        for (const [i, n] of Object.entries(e || {})) try {
                            t[i] = n
                        } catch (e) {
                            Object.defineProperty(t, i, {
                                configurable: !0,
                                get: () => n
                            })
                        }
                        return t
                    }
                    const W = new Map,
                        B = {
                            set(t, e, i) {
                                W.has(t) || W.set(t, new Map);
                                const n = W.get(t);
                                n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
                            },
                            get: (t, e) => W.has(t) && W.get(t).get(e) || null,
                            remove(t, e) {
                                if (!W.has(t)) return;
                                const i = W.get(t);
                                i.delete(e), 0 === i.size && W.delete(t)
                            }
                        };

                    function F(t) {
                        if ("true" === t) return !0;
                        if ("false" === t) return !1;
                        if (t === Number(t).toString()) return Number(t);
                        if ("" === t || "null" === t) return null;
                        if ("string" != typeof t) return t;
                        try {
                            return JSON.parse(decodeURIComponent(t))
                        } catch (e) {
                            return t
                        }
                    }

                    function z(t) {
                        return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
                    }
                    const q = {
                        setDataAttribute(t, e, i) {
                            t.setAttribute(`data-bs-${z(e)}`, i)
                        },
                        removeDataAttribute(t, e) {
                            t.removeAttribute(`data-bs-${z(e)}`)
                        },
                        getDataAttributes(t) {
                            if (!t) return {};
                            const e = {},
                                i = Object.keys(t.dataset).filter((t => t.startsWith("bs") && !t.startsWith("bsConfig")));
                            for (const n of i) {
                                let i = n.replace(/^bs/, "");
                                i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = F(t.dataset[n])
                            }
                            return e
                        },
                        getDataAttribute: (t, e) => F(t.getAttribute(`data-bs-${z(e)}`))
                    };
                    class R {
                        static get Default() {
                            return {}
                        }
                        static get DefaultType() {
                            return {}
                        }
                        static get NAME() {
                            throw new Error('You have to implement the static method "NAME", for each component!')
                        }
                        _getConfig(t) {
                            return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
                        }
                        _configAfterMerge(t) {
                            return t
                        }
                        _mergeConfigObj(t, e) {
                            const i = l(e) ? q.getDataAttribute(e, "config") : {};
                            return {
                                ...this.constructor.Default,
                                ..."object" == typeof i ? i : {},
                                ...l(e) ? q.getDataAttributes(e) : {},
                                ..."object" == typeof t ? t : {}
                            }
                        }
                        _typeCheckConfig(t, e = this.constructor.DefaultType) {
                            for (const n of Object.keys(e)) {
                                const s = e[n],
                                    o = t[n],
                                    r = l(o) ? "element" : null == (i = o) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                                if (!new RegExp(s).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)
                            }
                            var i
                        }
                    }
                    class V extends R {
                        constructor(t, e) {
                            super(), (t = c(t)) && (this._element = t, this._config = this._getConfig(e), B.set(this._element, this.constructor.DATA_KEY, this))
                        }
                        dispose() {
                            B.remove(this._element, this.constructor.DATA_KEY), H.off(this._element, this.constructor.EVENT_KEY);
                            for (const t of Object.getOwnPropertyNames(this)) this[t] = null
                        }
                        _queueCallback(t, e, i = !0) {
                            y(t, e, i)
                        }
                        _getConfig(t) {
                            return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
                        }
                        static getInstance(t) {
                            return B.get(c(t), this.DATA_KEY)
                        }
                        static getOrCreateInstance(t, e = {}) {
                            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
                        }
                        static get VERSION() {
                            return "5.2.3"
                        }
                        static get DATA_KEY() {
                            return `bs.${this.NAME}`
                        }
                        static get EVENT_KEY() {
                            return `.${this.DATA_KEY}`
                        }
                        static eventName(t) {
                            return `${t}${this.EVENT_KEY}`
                        }
                    }
                    const K = (t, e = "hide") => {
                        const i = `click.dismiss${t.EVENT_KEY}`,
                            n = t.NAME;
                        H.on(document, i, `[data-bs-dismiss="${n}"]`, (function(i) {
                            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), d(this)) return;
                            const s = r(this) || this.closest(`.${n}`);
                            t.getOrCreateInstance(s)[e]()
                        }))
                    };
                    class Q extends V {
                        static get NAME() {
                            return "alert"
                        }
                        close() {
                            if (H.trigger(this._element, "close.bs.alert").defaultPrevented) return;
                            this._element.classList.remove("show");
                            const t = this._element.classList.contains("fade");
                            this._queueCallback((() => this._destroyElement()), this._element, t)
                        }
                        _destroyElement() {
                            this._element.remove(), H.trigger(this._element, "closed.bs.alert"), this.dispose()
                        }
                        static jQueryInterface(t) {
                            return this.each((function() {
                                const e = Q.getOrCreateInstance(this);
                                if ("string" == typeof t) {
                                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                                    e[t](this)
                                }
                            }))
                        }
                    }
                    K(Q, "close"), b(Q);
                    const X = '[data-bs-toggle="button"]';
                    class Y extends V {
                        static get NAME() {
                            return "button"
                        }
                        toggle() {
                            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
                        }
                        static jQueryInterface(t) {
                            return this.each((function() {
                                const e = Y.getOrCreateInstance(this);
                                "toggle" === t && e[t]()
                            }))
                        }
                    }
                    H.on(document, "click.bs.button.data-api", X, (t => {
                        t.preventDefault();
                        const e = t.target.closest(X);
                        Y.getOrCreateInstance(e).toggle()
                    })), b(Y);
                    const U = {
                            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
                            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
                            children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
                            parents(t, e) {
                                const i = [];
                                let n = t.parentNode.closest(e);
                                for (; n;) i.push(n), n = n.parentNode.closest(e);
                                return i
                            },
                            prev(t, e) {
                                let i = t.previousElementSibling;
                                for (; i;) {
                                    if (i.matches(e)) return [i];
                                    i = i.previousElementSibling
                                }
                                return []
                            },
                            next(t, e) {
                                let i = t.nextElementSibling;
                                for (; i;) {
                                    if (i.matches(e)) return [i];
                                    i = i.nextElementSibling
                                }
                                return []
                            },
                            focusableChildren(t) {
                                const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(",");
                                return this.find(e, t).filter((t => !d(t) && h(t)))
                            }
                        },
                        G = {
                            endCallback: null,
                            leftCallback: null,
                            rightCallback: null
                        },
                        J = {
                            endCallback: "(function|null)",
                            leftCallback: "(function|null)",
                            rightCallback: "(function|null)"
                        };
                    class Z extends R {
                        constructor(t, e) {
                            super(), this._element = t, t && Z.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
                        }
                        static get Default() {
                            return G
                        }
                        static get DefaultType() {
                            return J
                        }
                        static get NAME() {
                            return "swipe"
                        }
                        dispose() {
                            H.off(this._element, ".bs.swipe")
                        }
                        _start(t) {
                            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
                        }
                        _end(t) {
                            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), v(this._config.endCallback)
                        }
                        _move(t) {
                            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
                        }
                        _handleSwipe() {
                            const t = Math.abs(this._deltaX);
                            if (t <= 40) return;
                            const e = t / this._deltaX;
                            this._deltaX = 0, e && v(e > 0 ? this._config.rightCallback : this._config.leftCallback)
                        }
                        _initEvents() {
                            this._supportPointerEvents ? (H.on(this._element, "pointerdown.bs.swipe", (t => this._start(t))), H.on(this._element, "pointerup.bs.swipe", (t => this._end(t))), this._element.classList.add("pointer-event")) : (H.on(this._element, "touchstart.bs.swipe", (t => this._start(t))), H.on(this._element, "touchmove.bs.swipe", (t => this._move(t))), H.on(this._element, "touchend.bs.swipe", (t => this._end(t))))
                        }
                        _eventIsPointerPenTouch(t) {
                            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
                        }
                        static isSupported() {
                            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
                        }
                    }
                    const tt = "next",
                        et = "prev",
                        it = "left",
                        nt = "right",
                        st = "slid.bs.carousel",
                        ot = "carousel",
                        rt = "active",
                        at = {
                            ArrowLeft: nt,
                            ArrowRight: it
                        },
                        lt = {
                            interval: 5e3,
                            keyboard: !0,
                            pause: "hover",
                            ride: !1,
                            touch: !0,
                            wrap: !0
                        },
                        ct = {
                            interval: "(number|boolean)",
                            keyboard: "boolean",
                            pause: "(string|boolean)",
                            ride: "(boolean|string)",
                            touch: "boolean",
                            wrap: "boolean"
                        };
                    class ht extends V {
                        constructor(t, e) {
                            super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = U.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === ot && this.cycle()
                        }
                        static get Default() {
                            return lt
                        }
                        static get DefaultType() {
                            return ct
                        }
                        static get NAME() {
                            return "carousel"
                        }
                        next() {
                            this._slide(tt)
                        }
                        nextWhenVisible() {
                            !document.hidden && h(this._element) && this.next()
                        }
                        prev() {
                            this._slide(et)
                        }
                        pause() {
                            this._isSliding && a(this._element), this._clearInterval()
                        }
                        cycle() {
                            this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval)
                        }
                        _maybeEnableCycle() {
                            this._config.ride && (this._isSliding ? H.one(this._element, st, (() => this.cycle())) : this.cycle())
                        }
                        to(t) {
                            const e = this._getItems();
                            if (t > e.length - 1 || t < 0) return;
                            if (this._isSliding) return void H.one(this._element, st, (() => this.to(t)));
                            const i = this._getItemIndex(this._getActive());
                            if (i === t) return;
                            const n = t > i ? tt : et;
                            this._slide(n, e[t])
                        }
                        dispose() {
                            this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
                        }
                        _configAfterMerge(t) {
                            return t.defaultInterval = t.interval, t
                        }
                        _addEventListeners() {
                            this._config.keyboard && H.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && (H.on(this._element, "mouseenter.bs.carousel", (() => this.pause())), H.on(this._element, "mouseleave.bs.carousel", (() => this._maybeEnableCycle()))), this._config.touch && Z.isSupported() && this._addTouchEventListeners()
                        }
                        _addTouchEventListeners() {
                            for (const t of U.find(".carousel-item img", this._element)) H.on(t, "dragstart.bs.carousel", (t => t.preventDefault()));
                            const t = {
                                leftCallback: () => this._slide(this._directionToOrder(it)),
                                rightCallback: () => this._slide(this._directionToOrder(nt)),
                                endCallback: () => {
                                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval))
                                }
                            };
                            this._swipeHelper = new Z(this._element, t)
                        }
                        _keydown(t) {
                            if (/input|textarea/i.test(t.target.tagName)) return;
                            const e = at[t.key];
                            e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
                        }
                        _getItemIndex(t) {
                            return this._getItems().indexOf(t)
                        }
                        _setActiveIndicatorElement(t) {
                            if (!this._indicatorsElement) return;
                            const e = U.findOne(".active", this._indicatorsElement);
                            e.classList.remove(rt), e.removeAttribute("aria-current");
                            const i = U.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
                            i && (i.classList.add(rt), i.setAttribute("aria-current", "true"))
                        }
                        _updateInterval() {
                            const t = this._activeElement || this._getActive();
                            if (!t) return;
                            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                            this._config.interval = e || this._config.defaultInterval
                        }
                        _slide(t, e = null) {
                            if (this._isSliding) return;
                            const i = this._getActive(),
                                n = t === tt,
                                s = e || w(this._getItems(), i, n, this._config.wrap);
                            if (s === i) return;
                            const o = this._getItemIndex(s),
                                r = e => H.trigger(this._element, e, {
                                    relatedTarget: s,
                                    direction: this._orderToDirection(t),
                                    from: this._getItemIndex(i),
                                    to: o
                                });
                            if (r("slide.bs.carousel").defaultPrevented) return;
                            if (!i || !s) return;
                            const a = Boolean(this._interval);
                            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
                            const l = n ? "carousel-item-start" : "carousel-item-end",
                                c = n ? "carousel-item-next" : "carousel-item-prev";
                            s.classList.add(c), p(s), i.classList.add(l), s.classList.add(l), this._queueCallback((() => {
                                s.classList.remove(l, c), s.classList.add(rt), i.classList.remove(rt, c, l), this._isSliding = !1, r(st)
                            }), i, this._isAnimated()), a && this.cycle()
                        }
                        _isAnimated() {
                            return this._element.classList.contains("slide")
                        }
                        _getActive() {
                            return U.findOne(".active.carousel-item", this._element)
                        }
                        _getItems() {
                            return U.find(".carousel-item", this._element)
                        }
                        _clearInterval() {
                            this._interval && (clearInterval(this._interval), this._interval = null)
                        }
                        _directionToOrder(t) {
                            return _() ? t === it ? et : tt : t === it ? tt : et
                        }
                        _orderToDirection(t) {
                            return _() ? t === et ? it : nt : t === et ? nt : it
                        }
                        static jQueryInterface(t) {
                            return this.each((function() {
                                const e = ht.getOrCreateInstance(this, t);
                                if ("number" != typeof t) {
                                    if ("string" == typeof t) {
                                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                                        e[t]()
                                    }
                                } else e.to(t)
                            }))
                        }
                    }
                    H.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", (function(t) {
                        const e = r(this);
                        if (!e || !e.classList.contains(ot)) return;
                        t.preventDefault();
                        const i = ht.getOrCreateInstance(e),
                            n = this.getAttribute("data-bs-slide-to");
                        return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === q.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle())
                    })), H.on(window, "load.bs.carousel.data-api", (() => {
                        const t = U.find('[data-bs-ride="carousel"]');
                        for (const e of t) ht.getOrCreateInstance(e)
                    })), b(ht);
                    const dt = "show",
                        ut = "collapse",
                        ft = "collapsing",
                        pt = '[data-bs-toggle="collapse"]',
                        gt = {
                            parent: null,
                            toggle: !0
                        },
                        mt = {
                            parent: "(null|element)",
                            toggle: "boolean"
                        };
                    class _t extends V {
                        constructor(t, e) {
                            super(t, e), this._isTransitioning = !1, this._triggerArray = [];
                            const i = U.find(pt);
                            for (const t of i) {
                                const e = o(t),
                                    i = U.find(e).filter((t => t === this._element));
                                null !== e && i.length && this._triggerArray.push(t)
                            }
                            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
                        }
                        static get Default() {
                            return gt
                        }
                        static get DefaultType() {
                            return mt
                        }
                        static get NAME() {
                            return "collapse"
                        }
                        toggle() {
                            this._isShown() ? this.hide() : this.show()
                        }
                        show() {
                            if (this._isTransitioning || this._isShown()) return;
                            let t = [];
                            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t => t !== this._element)).map((t => _t.getOrCreateInstance(t, {
                                    toggle: !1
                                })))), t.length && t[0]._isTransitioning) return;
                            if (H.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
                            for (const e of t) e.hide();
                            const e = this._getDimension();
                            this._element.classList.remove(ut), this._element.classList.add(ft), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                            const i = `scroll${e[0].toUpperCase()+e.slice(1)}`;
                            this._queueCallback((() => {
                                this._isTransitioning = !1, this._element.classList.remove(ft), this._element.classList.add(ut, dt), this._element.style[e] = "", H.trigger(this._element, "shown.bs.collapse")
                            }), this._element, !0), this._element.style[e] = `${this._element[i]}px`
                        }
                        hide() {
                            if (this._isTransitioning || !this._isShown()) return;
                            if (H.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
                            const t = this._getDimension();
                            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, p(this._element), this._element.classList.add(ft), this._element.classList.remove(ut, dt);
                            for (const t of this._triggerArray) {
                                const e = r(t);
                                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
                            }
                            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => {
                                this._isTransitioning = !1, this._element.classList.remove(ft), this._element.classList.add(ut), H.trigger(this._element, "hidden.bs.collapse")
                            }), this._element, !0)
                        }
                        _isShown(t = this._element) {
                            return t.classList.contains(dt)
                        }
                        _configAfterMerge(t) {
                            return t.toggle = Boolean(t.toggle), t.parent = c(t.parent), t
                        }
                        _getDimension() {
                            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
                        }
                        _initializeChildren() {
                            if (!this._config.parent) return;
                            const t = this._getFirstLevelChildren(pt);
                            for (const e of t) {
                                const t = r(e);
                                t && this._addAriaAndCollapsedClass([e], this._isShown(t))
                            }
                        }
                        _getFirstLevelChildren(t) {
                            const e = U.find(":scope .collapse .collapse", this._config.parent);
                            return U.find(t, this._config.parent).filter((t => !e.includes(t)))
                        }
                        _addAriaAndCollapsedClass(t, e) {
                            if (t.length)
                                for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e)
                        }
                        static jQueryInterface(t) {
                            const e = {};
                            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each((function() {
                                const i = _t.getOrCreateInstance(this, e);
                                if ("string" == typeof t) {
                                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                                    i[t]()
                                }
                            }))
                        }
                    }
                    H.on(document, "click.bs.collapse.data-api", pt, (function(t) {
                        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
                        const e = o(this),
                            i = U.find(e);
                        for (const t of i) _t.getOrCreateInstance(t, {
                            toggle: !1
                        }).toggle()
                    })), b(_t);
                    const bt = "dropdown",
                        vt = "ArrowUp",
                        yt = "ArrowDown",
                        wt = "click.bs.dropdown.data-api",
                        At = "keydown.bs.dropdown.data-api",
                        Et = "show",
                        Tt = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
                        Ct = `${Tt}.show`,
                        Ot = ".dropdown-menu",
                        xt = _() ? "top-end" : "top-start",
                        kt = _() ? "top-start" : "top-end",
                        Lt = _() ? "bottom-end" : "bottom-start",
                        Dt = _() ? "bottom-start" : "bottom-end",
                        St = _() ? "left-start" : "right-start",
                        It = _() ? "right-start" : "left-start",
                        Pt = {
                            autoClose: !0,
                            boundary: "clippingParents",
                            display: "dynamic",
                            offset: [0, 2],
                            popperConfig: null,
                            reference: "toggle"
                        },
                        Nt = {
                            autoClose: "(boolean|string)",
                            boundary: "(string|element)",
                            display: "string",
                            offset: "(array|string|function)",
                            popperConfig: "(null|object|function)",
                            reference: "(string|element|object)"
                        };
                    class jt extends V {
                        constructor(t, e) {
                            super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = U.next(this._element, Ot)[0] || U.prev(this._element, Ot)[0] || U.findOne(Ot, this._parent), this._inNavbar = this._detectNavbar()
                        }
                        static get Default() {
                            return Pt
                        }
                        static get DefaultType() {
                            return Nt
                        }
                        static get NAME() {
                            return bt
                        }
                        toggle() {
                            return this._isShown() ? this.hide() : this.show()
                        }
                        show() {
                            if (d(this._element) || this._isShown()) return;
                            const t = {
                                relatedTarget: this._element
                            };
                            if (!H.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                                    for (const t of [].concat(...document.body.children)) H.on(t, "mouseover", f);
                                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Et), this._element.classList.add(Et), H.trigger(this._element, "shown.bs.dropdown", t)
                            }
                        }
                        hide() {
                            if (d(this._element) || !this._isShown()) return;
                            const t = {
                                relatedTarget: this._element
                            };
                            this._completeHide(t)
                        }
                        dispose() {
                            this._popper && this._popper.destroy(), super.dispose()
                        }
                        update() {
                            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
                        }
                        _completeHide(t) {
                            if (!H.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
                                if ("ontouchstart" in document.documentElement)
                                    for (const t of [].concat(...document.body.children)) H.off(t, "mouseover", f);
                                this._popper && this._popper.destroy(), this._menu.classList.remove(Et), this._element.classList.remove(Et), this._element.setAttribute("aria-expanded", "false"), q.removeDataAttribute(this._menu, "popper"), H.trigger(this._element, "hidden.bs.dropdown", t)
                            }
                        }
                        _getConfig(t) {
                            if ("object" == typeof(t = super._getConfig(t)).reference && !l(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                            return t
                        }
                        _createPopper() {
                            if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                            let t = this._element;
                            "parent" === this._config.reference ? t = this._parent : l(this._config.reference) ? t = c(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
                            const e = this._getPopperConfig();
                            this._popper = i.createPopper(t, this._menu, e)
                        }
                        _isShown() {
                            return this._menu.classList.contains(Et)
                        }
                        _getPlacement() {
                            const t = this._parent;
                            if (t.classList.contains("dropend")) return St;
                            if (t.classList.contains("dropstart")) return It;
                            if (t.classList.contains("dropup-center")) return "top";
                            if (t.classList.contains("dropdown-center")) return "bottom";
                            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                            return t.classList.contains("dropup") ? e ? kt : xt : e ? Dt : Lt
                        }
                        _detectNavbar() {
                            return null !== this._element.closest(".navbar")
                        }
                        _getOffset() {
                            const {
                                offset: t
                            } = this._config;
                            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
                        }
                        _getPopperConfig() {
                            const t = {
                                placement: this._getPlacement(),
                                modifiers: [{
                                    name: "preventOverflow",
                                    options: {
                                        boundary: this._config.boundary
                                    }
                                }, {
                                    name: "offset",
                                    options: {
                                        offset: this._getOffset()
                                    }
                                }]
                            };
                            return (this._inNavbar || "static" === this._config.display) && (q.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
                                name: "applyStyles",
                                enabled: !1
                            }]), {
                                ...t,
                                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
                            }
                        }
                        _selectMenuItem({
                            key: t,
                            target: e
                        }) {
                            const i = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t => h(t)));
                            i.length && w(i, e, t === yt, !i.includes(e)).focus()
                        }
                        static jQueryInterface(t) {
                            return this.each((function() {
                                const e = jt.getOrCreateInstance(this, t);
                                if ("string" == typeof t) {
                                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                    e[t]()
                                }
                            }))
                        }
                        static clearMenus(t) {
                            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
                            const e = U.find(Ct);
                            for (const i of e) {
                                const e = jt.getInstance(i);
                                if (!e || !1 === e._config.autoClose) continue;
                                const n = t.composedPath(),
                                    s = n.includes(e._menu);
                                if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue;
                                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                                const o = {
                                    relatedTarget: e._element
                                };
                                "click" === t.type && (o.clickEvent = t), e._completeHide(o)
                            }
                        }
                        static dataApiKeydownHandler(t) {
                            const e = /input|textarea/i.test(t.target.tagName),
                                i = "Escape" === t.key,
                                n = [vt, yt].includes(t.key);
                            if (!n && !i) return;
                            if (e && !i) return;
                            t.preventDefault();
                            const s = this.matches(Tt) ? this : U.prev(this, Tt)[0] || U.next(this, Tt)[0] || U.findOne(Tt, t.delegateTarget.parentNode),
                                o = jt.getOrCreateInstance(s);
                            if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
                            o._isShown() && (t.stopPropagation(), o.hide(), s.focus())
                        }
                    }
                    H.on(document, At, Tt, jt.dataApiKeydownHandler), H.on(document, At, Ot, jt.dataApiKeydownHandler), H.on(document, wt, jt.clearMenus), H.on(document, "keyup.bs.dropdown.data-api", jt.clearMenus), H.on(document, wt, Tt, (function(t) {
                        t.preventDefault(), jt.getOrCreateInstance(this).toggle()
                    })), b(jt);
                    const Mt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                        Ht = ".sticky-top",
                        $t = "padding-right",
                        Wt = "margin-right";
                    class Bt {
                        constructor() {
                            this._element = document.body
                        }
                        getWidth() {
                            const t = document.documentElement.clientWidth;
                            return Math.abs(window.innerWidth - t)
                        }
                        hide() {
                            const t = this.getWidth();
                            this._disableOverFlow(), this._setElementAttributes(this._element, $t, (e => e + t)), this._setElementAttributes(Mt, $t, (e => e + t)), this._setElementAttributes(Ht, Wt, (e => e - t))
                        }
                        reset() {
                            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, $t), this._resetElementAttributes(Mt, $t), this._resetElementAttributes(Ht, Wt)
                        }
                        isOverflowing() {
                            return this.getWidth() > 0
                        }
                        _disableOverFlow() {
                            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
                        }
                        _setElementAttributes(t, e, i) {
                            const n = this.getWidth();
                            this._applyManipulationCallback(t, (t => {
                                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                                this._saveInitialAttribute(t, e);
                                const s = window.getComputedStyle(t).getPropertyValue(e);
                                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`)
                            }))
                        }
                        _saveInitialAttribute(t, e) {
                            const i = t.style.getPropertyValue(e);
                            i && q.setDataAttribute(t, e, i)
                        }
                        _resetElementAttributes(t, e) {
                            this._applyManipulationCallback(t, (t => {
                                const i = q.getDataAttribute(t, e);
                                null !== i ? (q.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e)
                            }))
                        }
                        _applyManipulationCallback(t, e) {
                            if (l(t)) e(t);
                            else
                                for (const i of U.find(t, this._element)) e(i)
                        }
                    }
                    const Ft = "show",
                        zt = "mousedown.bs.backdrop",
                        qt = {
                            className: "modal-backdrop",
                            clickCallback: null,
                            isAnimated: !1,
                            isVisible: !0,
                            rootElement: "body"
                        },
                        Rt = {
                            className: "string",
                            clickCallback: "(function|null)",
                            isAnimated: "boolean",
                            isVisible: "boolean",
                            rootElement: "(element|string)"
                        };
                    class Vt extends R {
                        constructor(t) {
                            super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null
                        }
                        static get Default() {
                            return qt
                        }
                        static get DefaultType() {
                            return Rt
                        }
                        static get NAME() {
                            return "backdrop"
                        }
                        show(t) {
                            if (!this._config.isVisible) return void v(t);
                            this._append();
                            const e = this._getElement();
                            this._config.isAnimated && p(e), e.classList.add(Ft), this._emulateAnimation((() => {
                                v(t)
                            }))
                        }
                        hide(t) {
                            this._config.isVisible ? (this._getElement().classList.remove(Ft), this._emulateAnimation((() => {
                                this.dispose(), v(t)
                            }))) : v(t)
                        }
                        dispose() {
                            this._isAppended && (H.off(this._element, zt), this._element.remove(), this._isAppended = !1)
                        }
                        _getElement() {
                            if (!this._element) {
                                const t = document.createElement("div");
                                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
                            }
                            return this._element
                        }
                        _configAfterMerge(t) {
                            return t.rootElement = c(t.rootElement), t
                        }
                        _append() {
                            if (this._isAppended) return;
                            const t = this._getElement();
                            this._config.rootElement.append(t), H.on(t, zt, (() => {
                                v(this._config.clickCallback)
                            })), this._isAppended = !0
                        }
                        _emulateAnimation(t) {
                            y(t, this._getElement(), this._config.isAnimated)
                        }
                    }
                    const Kt = ".bs.focustrap",
                        Qt = "backward",
                        Xt = {
                            autofocus: !0,
                            trapElement: null
                        },
                        Yt = {
                            autofocus: "boolean",
                            trapElement: "element"
                        };
                    class Ut extends R {
                        constructor(t) {
                            super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
                        }
                        static get Default() {
                            return Xt
                        }
                        static get DefaultType() {
                            return Yt
                        }
                        static get NAME() {
                            return "focustrap"
                        }
                        activate() {
                            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), H.off(document, Kt), H.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))), H.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))), this._isActive = !0)
                        }
                        deactivate() {
                            this._isActive && (this._isActive = !1, H.off(document, Kt))
                        }
                        _handleFocusin(t) {
                            const {
                                trapElement: e
                            } = this._config;
                            if (t.target === document || t.target === e || e.contains(t.target)) return;
                            const i = U.focusableChildren(e);
                            0 === i.length ? e.focus() : this._lastTabNavDirection === Qt ? i[i.length - 1].focus() : i[0].focus()
                        }
                        _handleKeydown(t) {
                            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Qt : "forward")
                        }
                    }
                    const Gt = "hidden.bs.modal",
                        Jt = "show.bs.modal",
                        Zt = "modal-open",
                        te = "show",
                        ee = "modal-static",
                        ie = {
                            backdrop: !0,
                            focus: !0,
                            keyboard: !0
                        },
                        ne = {
                            backdrop: "(boolean|string)",
                            focus: "boolean",
                            keyboard: "boolean"
                        };
                    class se extends V {
                        constructor(t, e) {
                            super(t, e), this._dialog = U.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Bt, this._addEventListeners()
                        }
                        static get Default() {
                            return ie
                        }
                        static get DefaultType() {
                            return ne
                        }
                        static get NAME() {
                            return "modal"
                        }
                        toggle(t) {
                            return this._isShown ? this.hide() : this.show(t)
                        }
                        show(t) {
                            this._isShown || this._isTransitioning || H.trigger(this._element, Jt, {
                                relatedTarget: t
                            }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Zt), this._adjustDialog(), this._backdrop.show((() => this._showElement(t))))
                        }
                        hide() {
                            this._isShown && !this._isTransitioning && (H.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(te), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated())))
                        }
                        dispose() {
                            for (const t of [window, this._dialog]) H.off(t, ".bs.modal");
                            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
                        }
                        handleUpdate() {
                            this._adjustDialog()
                        }
                        _initializeBackDrop() {
                            return new Vt({
                                isVisible: Boolean(this._config.backdrop),
                                isAnimated: this._isAnimated()
                            })
                        }
                        _initializeFocusTrap() {
                            return new Ut({
                                trapElement: this._element
                            })
                        }
                        _showElement(t) {
                            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
                            const e = U.findOne(".modal-body", this._dialog);
                            e && (e.scrollTop = 0), p(this._element), this._element.classList.add(te), this._queueCallback((() => {
                                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, H.trigger(this._element, "shown.bs.modal", {
                                    relatedTarget: t
                                })
                            }), this._dialog, this._isAnimated())
                        }
                        _addEventListeners() {
                            H.on(this._element, "keydown.dismiss.bs.modal", (t => {
                                if ("Escape" === t.key) return this._config.keyboard ? (t.preventDefault(), void this.hide()) : void this._triggerBackdropTransition()
                            })), H.on(window, "resize.bs.modal", (() => {
                                this._isShown && !this._isTransitioning && this._adjustDialog()
                            })), H.on(this._element, "mousedown.dismiss.bs.modal", (t => {
                                H.one(this._element, "click.dismiss.bs.modal", (e => {
                                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                                }))
                            }))
                        }
                        _hideModal() {
                            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                                document.body.classList.remove(Zt), this._resetAdjustments(), this._scrollBar.reset(), H.trigger(this._element, Gt)
                            }))
                        }
                        _isAnimated() {
                            return this._element.classList.contains("fade")
                        }
                        _triggerBackdropTransition() {
                            if (H.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
                            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                                e = this._element.style.overflowY;
                            "hidden" === e || this._element.classList.contains(ee) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(ee), this._queueCallback((() => {
                                this._element.classList.remove(ee), this._queueCallback((() => {
                                    this._element.style.overflowY = e
                                }), this._dialog)
                            }), this._dialog), this._element.focus())
                        }
                        _adjustDialog() {
                            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                                e = this._scrollBar.getWidth(),
                                i = e > 0;
                            if (i && !t) {
                                const t = _() ? "paddingLeft" : "paddingRight";
                                this._element.style[t] = `${e}px`
                            }
                            if (!i && t) {
                                const t = _() ? "paddingRight" : "paddingLeft";
                                this._element.style[t] = `${e}px`
                            }
                        }
                        _resetAdjustments() {
                            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                        }
                        static jQueryInterface(t, e) {
                            return this.each((function() {
                                const i = se.getOrCreateInstance(this, t);
                                if ("string" == typeof t) {
                                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                                    i[t](e)
                                }
                            }))
                        }
                    }
                    H.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
                        const e = r(this);
                        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), H.one(e, Jt, (t => {
                            t.defaultPrevented || H.one(e, Gt, (() => {
                                h(this) && this.focus()
                            }))
                        }));
                        const i = U.findOne(".modal.show");
                        i && se.getInstance(i).hide(), se.getOrCreateInstance(e).toggle(this)
                    })), K(se), b(se);
                    const oe = "show",
                        re = "showing",
                        ae = "hiding",
                        le = ".offcanvas.show",
                        ce = "hidePrevented.bs.offcanvas",
                        he = "hidden.bs.offcanvas",
                        de = {
                            backdrop: !0,
                            keyboard: !0,
                            scroll: !1
                        },
                        ue = {
                            backdrop: "(boolean|string)",
                            keyboard: "boolean",
                            scroll: "boolean"
                        };
                    class fe extends V {
                        constructor(t, e) {
                            super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
                        }
                        static get Default() {
                            return de
                        }
                        static get DefaultType() {
                            return ue
                        }
                        static get NAME() {
                            return "offcanvas"
                        }
                        toggle(t) {
                            return this._isShown ? this.hide() : this.show(t)
                        }
                        show(t) {
                            this._isShown || H.trigger(this._element, "show.bs.offcanvas", {
                                relatedTarget: t
                            }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new Bt).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(re), this._queueCallback((() => {
                                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(oe), this._element.classList.remove(re), H.trigger(this._element, "shown.bs.offcanvas", {
                                    relatedTarget: t
                                })
                            }), this._element, !0))
                        }
                        hide() {
                            this._isShown && (H.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(ae), this._backdrop.hide(), this._queueCallback((() => {
                                this._element.classList.remove(oe, ae), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new Bt).reset(), H.trigger(this._element, he)
                            }), this._element, !0)))
                        }
                        dispose() {
                            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
                        }
                        _initializeBackDrop() {
                            const t = Boolean(this._config.backdrop);
                            return new Vt({
                                className: "offcanvas-backdrop",
                                isVisible: t,
                                isAnimated: !0,
                                rootElement: this._element.parentNode,
                                clickCallback: t ? () => {
                                    "static" !== this._config.backdrop ? this.hide() : H.trigger(this._element, ce)
                                } : null
                            })
                        }
                        _initializeFocusTrap() {
                            return new Ut({
                                trapElement: this._element
                            })
                        }
                        _addEventListeners() {
                            H.on(this._element, "keydown.dismiss.bs.offcanvas", (t => {
                                "Escape" === t.key && (this._config.keyboard ? this.hide() : H.trigger(this._element, ce))
                            }))
                        }
                        static jQueryInterface(t) {
                            return this.each((function() {
                                const e = fe.getOrCreateInstance(this, t);
                                if ("string" == typeof t) {
                                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                                    e[t](this)
                                }
                            }))
                        }
                    }
                    H.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
                        const e = r(this);
                        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)) return;
                        H.one(e, he, (() => {
                            h(this) && this.focus()
                        }));
                        const i = U.findOne(le);
                        i && i !== e && fe.getInstance(i).hide(), fe.getOrCreateInstance(e).toggle(this)
                    })), H.on(window, "load.bs.offcanvas.data-api", (() => {
                        for (const t of U.find(le)) fe.getOrCreateInstance(t).show()
                    })), H.on(window, "resize.bs.offcanvas", (() => {
                        for (const t of U.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && fe.getOrCreateInstance(t).hide()
                    })), K(fe), b(fe);
                    const pe = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
                        ge = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
                        me = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
                        _e = (t, e) => {
                            const i = t.nodeName.toLowerCase();
                            return e.includes(i) ? !pe.has(i) || Boolean(ge.test(t.nodeValue) || me.test(t.nodeValue)) : e.filter((t => t instanceof RegExp)).some((t => t.test(i)))
                        },
                        be = {
                            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                            a: ["target", "href", "title", "rel"],
                            area: [],
                            b: [],
                            br: [],
                            col: [],
                            code: [],
                            div: [],
                            em: [],
                            hr: [],
                            h1: [],
                            h2: [],
                            h3: [],
                            h4: [],
                            h5: [],
                            h6: [],
                            i: [],
                            img: ["src", "srcset", "alt", "title", "width", "height"],
                            li: [],
                            ol: [],
                            p: [],
                            pre: [],
                            s: [],
                            small: [],
                            span: [],
                            sub: [],
                            sup: [],
                            strong: [],
                            u: [],
                            ul: []
                        },
                        ve = {
                            allowList: be,
                            content: {},
                            extraClass: "",
                            html: !1,
                            sanitize: !0,
                            sanitizeFn: null,
                            template: "<div></div>"
                        },
                        ye = {
                            allowList: "object",
                            content: "object",
                            extraClass: "(string|function)",
                            html: "boolean",
                            sanitize: "boolean",
                            sanitizeFn: "(null|function)",
                            template: "string"
                        },
                        we = {
                            entry: "(string|element|function|null)",
                            selector: "(string|element)"
                        };
                    class Ae extends R {
                        constructor(t) {
                            super(), this._config = this._getConfig(t)
                        }
                        static get Default() {
                            return ve
                        }
                        static get DefaultType() {
                            return ye
                        }
                        static get NAME() {
                            return "TemplateFactory"
                        }
                        getContent() {
                            return Object.values(this._config.content).map((t => this._resolvePossibleFunction(t))).filter(Boolean)
                        }
                        hasContent() {
                            return this.getContent().length > 0
                        }
                        changeContent(t) {
                            return this._checkContent(t), this._config.content = {
                                ...this._config.content,
                                ...t
                            }, this
                        }
                        toHtml() {
                            const t = document.createElement("div");
                            t.innerHTML = this._maybeSanitize(this._config.template);
                            for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e);
                            const e = t.children[0],
                                i = this._resolvePossibleFunction(this._config.extraClass);
                            return i && e.classList.add(...i.split(" ")), e
                        }
                        _typeCheckConfig(t) {
                            super._typeCheckConfig(t), this._checkContent(t.content)
                        }
                        _checkContent(t) {
                            for (const [e, i] of Object.entries(t)) super._typeCheckConfig({
                                selector: e,
                                entry: i
                            }, we)
                        }
                        _setContent(t, e, i) {
                            const n = U.findOne(i, t);
                            n && ((e = this._resolvePossibleFunction(e)) ? l(e) ? this._putElementInTemplate(c(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove())
                        }
                        _maybeSanitize(t) {
                            return this._config.sanitize ? function(t, e, i) {
                                if (!t.length) return t;
                                if (i && "function" == typeof i) return i(t);
                                const n = (new window.DOMParser).parseFromString(t, "text/html"),
                                    s = [].concat(...n.body.querySelectorAll("*"));
                                for (const t of s) {
                                    const i = t.nodeName.toLowerCase();
                                    if (!Object.keys(e).includes(i)) {
                                        t.remove();
                                        continue
                                    }
                                    const n = [].concat(...t.attributes),
                                        s = [].concat(e["*"] || [], e[i] || []);
                                    for (const e of n) _e(e, s) || t.removeAttribute(e.nodeName)
                                }
                                return n.body.innerHTML
                            }(t, this._config.allowList, this._config.sanitizeFn) : t
                        }
                        _resolvePossibleFunction(t) {
                            return "function" == typeof t ? t(this) : t
                        }
                        _putElementInTemplate(t, e) {
                            if (this._config.html) return e.innerHTML = "", void e.append(t);
                            e.textContent = t.textContent
                        }
                    }
                    const Ee = new Set(["sanitize", "allowList", "sanitizeFn"]),
                        Te = "fade",
                        Ce = "show",
                        Oe = ".modal",
                        xe = "hide.bs.modal",
                        ke = "hover",
                        Le = "focus",
                        De = {
                            AUTO: "auto",
                            TOP: "top",
                            RIGHT: _() ? "left" : "right",
                            BOTTOM: "bottom",
                            LEFT: _() ? "right" : "left"
                        },
                        Se = {
                            allowList: be,
                            animation: !0,
                            boundary: "clippingParents",
                            container: !1,
                            customClass: "",
                            delay: 0,
                            fallbackPlacements: ["top", "right", "bottom", "left"],
                            html: !1,
                            offset: [0, 0],
                            placement: "top",
                            popperConfig: null,
                            sanitize: !0,
                            sanitizeFn: null,
                            selector: !1,
                            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                            title: "",
                            trigger: "hover focus"
                        },
                        Ie = {
                            allowList: "object",
                            animation: "boolean",
                            boundary: "(string|element)",
                            container: "(string|element|boolean)",
                            customClass: "(string|function)",
                            delay: "(number|object)",
                            fallbackPlacements: "array",
                            html: "boolean",
                            offset: "(array|string|function)",
                            placement: "(string|function)",
                            popperConfig: "(null|object|function)",
                            sanitize: "boolean",
                            sanitizeFn: "(null|function)",
                            selector: "(string|boolean)",
                            template: "string",
                            title: "(string|element|function)",
                            trigger: "string"
                        };
                    class Pe extends V {
                        constructor(t, e) {
                            if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                            super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
                        }
                        static get Default() {
                            return Se
                        }
                        static get DefaultType() {
                            return Ie
                        }
                        static get NAME() {
                            return "tooltip"
                        }
                        enable() {
                            this._isEnabled = !0
                        }
                        disable() {
                            this._isEnabled = !1
                        }
                        toggleEnabled() {
                            this._isEnabled = !this._isEnabled
                        }
                        toggle() {
                            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
                        }
                        dispose() {
                            clearTimeout(this._timeout), H.off(this._element.closest(Oe), xe, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
                        }
                        show() {
                            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                            if (!this._isWithContent() || !this._isEnabled) return;
                            const t = H.trigger(this._element, this.constructor.eventName("show")),
                                e = (u(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
                            if (t.defaultPrevented || !e) return;
                            this._disposePopper();
                            const i = this._getTipElement();
                            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
                            const {
                                container: n
                            } = this._config;
                            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), H.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(Ce), "ontouchstart" in document.documentElement)
                                for (const t of [].concat(...document.body.children)) H.on(t, "mouseover", f);
                            this._queueCallback((() => {
                                H.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1
                            }), this.tip, this._isAnimated())
                        }
                        hide() {
                            if (this._isShown() && !H.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                                if (this._getTipElement().classList.remove(Ce), "ontouchstart" in document.documentElement)
                                    for (const t of [].concat(...document.body.children)) H.off(t, "mouseover", f);
                                this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = null, this._queueCallback((() => {
                                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), H.trigger(this._element, this.constructor.eventName("hidden")))
                                }), this.tip, this._isAnimated())
                            }
                        }
                        update() {
                            this._popper && this._popper.update()
                        }
                        _isWithContent() {
                            return Boolean(this._getTitle())
                        }
                        _getTipElement() {
                            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
                        }
                        _createTipElement(t) {
                            const e = this._getTemplateFactory(t).toHtml();
                            if (!e) return null;
                            e.classList.remove(Te, Ce), e.classList.add(`bs-${this.constructor.NAME}-auto`);
                            const i = (t => {
                                do {
                                    t += Math.floor(1e6 * Math.random())
                                } while (document.getElementById(t));
                                return t
                            })(this.constructor.NAME).toString();
                            return e.setAttribute("id", i), this._isAnimated() && e.classList.add(Te), e
                        }
                        setContent(t) {
                            this._newContent = t, this._isShown() && (this._disposePopper(), this.show())
                        }
                        _getTemplateFactory(t) {
                            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Ae({
                                ...this._config,
                                content: t,
                                extraClass: this._resolvePossibleFunction(this._config.customClass)
                            }), this._templateFactory
                        }
                        _getContentForTemplate() {
                            return {
                                ".tooltip-inner": this._getTitle()
                            }
                        }
                        _getTitle() {
                            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
                        }
                        _initializeOnDelegatedTarget(t) {
                            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
                        }
                        _isAnimated() {
                            return this._config.animation || this.tip && this.tip.classList.contains(Te)
                        }
                        _isShown() {
                            return this.tip && this.tip.classList.contains(Ce)
                        }
                        _createPopper(t) {
                            const e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement,
                                n = De[e.toUpperCase()];
                            return i.createPopper(this._element, t, this._getPopperConfig(n))
                        }
                        _getOffset() {
                            const {
                                offset: t
                            } = this._config;
                            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
                        }
                        _resolvePossibleFunction(t) {
                            return "function" == typeof t ? t.call(this._element) : t
                        }
                        _getPopperConfig(t) {
                            const e = {
                                placement: t,
                                modifiers: [{
                                    name: "flip",
                                    options: {
                                        fallbackPlacements: this._config.fallbackPlacements
                                    }
                                }, {
                                    name: "offset",
                                    options: {
                                        offset: this._getOffset()
                                    }
                                }, {
                                    name: "preventOverflow",
                                    options: {
                                        boundary: this._config.boundary
                                    }
                                }, {
                                    name: "arrow",
                                    options: {
                                        element: `.${this.constructor.NAME}-arrow`
                                    }
                                }, {
                                    name: "preSetPlacement",
                                    enabled: !0,
                                    phase: "beforeMain",
                                    fn: t => {
                                        this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
                                    }
                                }]
                            };
                            return {
                                ...e,
                                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
                            }
                        }
                        _setListeners() {
                            const t = this._config.trigger.split(" ");
                            for (const e of t)
                                if ("click" === e) H.on(this._element, this.constructor.eventName("click"), this._config.selector, (t => {
                                    this._initializeOnDelegatedTarget(t).toggle()
                                }));
                                else if ("manual" !== e) {
                                const t = e === ke ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                                    i = e === ke ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                                H.on(this._element, t, this._config.selector, (t => {
                                    const e = this._initializeOnDelegatedTarget(t);
                                    e._activeTrigger["focusin" === t.type ? Le : ke] = !0, e._enter()
                                })), H.on(this._element, i, this._config.selector, (t => {
                                    const e = this._initializeOnDelegatedTarget(t);
                                    e._activeTrigger["focusout" === t.type ? Le : ke] = e._element.contains(t.relatedTarget), e._leave()
                                }))
                            }
                            this._hideModalHandler = () => {
                                this._element && this.hide()
                            }, H.on(this._element.closest(Oe), xe, this._hideModalHandler)
                        }
                        _fixTitle() {
                            const t = this._element.getAttribute("title");
                            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"))
                        }
                        _enter() {
                            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => {
                                this._isHovered && this.show()
                            }), this._config.delay.show))
                        }
                        _leave() {
                            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => {
                                this._isHovered || this.hide()
                            }), this._config.delay.hide))
                        }
                        _setTimeout(t, e) {
                            clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
                        }
                        _isWithActiveTrigger() {
                            return Object.values(this._activeTrigger).includes(!0)
                        }
                        _getConfig(t) {
                            const e = q.getDataAttributes(this._element);
                            for (const t of Object.keys(e)) Ee.has(t) && delete e[t];
                            return t = {
                                ...e,
                                ..."object" == typeof t && t ? t : {}
                            }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
                        }
                        _configAfterMerge(t) {
                            return t.container = !1 === t.container ? document.body : c(t.container), "number" == typeof t.delay && (t.delay = {
                                show: t.delay,
                                hide: t.delay
                            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t
                        }
                        _getDelegateConfig() {
                            const t = {};
                            for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
                            return t.selector = !1, t.trigger = "manual", t
                        }
                        _disposePopper() {
                            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
                        }
                        static jQueryInterface(t) {
                            return this.each((function() {
                                const e = Pe.getOrCreateInstance(this, t);
                                if ("string" == typeof t) {
                                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                    e[t]()
                                }
                            }))
                        }
                    }
                    b(Pe);
                    const Ne = {
                            ...Pe.Default,
                            content: "",
                            offset: [0, 8],
                            placement: "right",
                            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                            trigger: "click"
                        },
                        je = {
                            ...Pe.DefaultType,
                            content: "(null|string|element|function)"
                        };
                    class Me extends Pe {
                        static get Default() {
                            return Ne
                        }
                        static get DefaultType() {
                            return je
                        }
                        static get NAME() {
                            return "popover"
                        }
                        _isWithContent() {
                            return this._getTitle() || this._getContent()
                        }
                        _getContentForTemplate() {
                            return {
                                ".popover-header": this._getTitle(),
                                ".popover-body": this._getContent()
                            }
                        }
                        _getContent() {
                            return this._resolvePossibleFunction(this._config.content)
                        }
                        static jQueryInterface(t) {
                            return this.each((function() {
                                const e = Me.getOrCreateInstance(this, t);
                                if ("string" == typeof t) {
                                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                    e[t]()
                                }
                            }))
                        }
                    }
                    b(Me);
                    const He = "click.bs.scrollspy",
                        $e = "active",
                        We = "[href]",
                        Be = {
                            offset: null,
                            rootMargin: "0px 0px -25%",
                            smoothScroll: !1,
                            target: null,
                            threshold: [.1, .5, 1]
                        },
                        Fe = {
                            offset: "(number|null)",
                            rootMargin: "string",
                            smoothScroll: "boolean",
                            target: "element",
                            threshold: "array"
                        };
                    class ze extends V {
                        constructor(t, e) {
                            super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                                visibleEntryTop: 0,
                                parentScrollTop: 0
                            }, this.refresh()
                        }
                        static get Default() {
                            return Be
                        }
                        static get DefaultType() {
                            return Fe
                        }
                        static get NAME() {
                            return "scrollspy"
                        }
                        refresh() {
                            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
                            for (const t of this._observableSections.values()) this._observer.observe(t)
                        }
                        dispose() {
                            this._observer.disconnect(), super.dispose()
                        }
                        _configAfterMerge(t) {
                            return t.target = c(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t => Number.parseFloat(t)))), t
                        }
                        _maybeEnableSmoothScroll() {
                            this._config.smoothScroll && (H.off(this._config.target, He), H.on(this._config.target, He, We, (t => {
                                const e = this._observableSections.get(t.target.hash);
                                if (e) {
                                    t.preventDefault();
                                    const i = this._rootElement || window,
                                        n = e.offsetTop - this._element.offsetTop;
                                    if (i.scrollTo) return void i.scrollTo({
                                        top: n,
                                        behavior: "smooth"
                                    });
                                    i.scrollTop = n
                                }
                            })))
                        }
                        _getNewObserver() {
                            const t = {
                                root: this._rootElement,
                                threshold: this._config.threshold,
                                rootMargin: this._config.rootMargin
                            };
                            return new IntersectionObserver((t => this._observerCallback(t)), t)
                        }
                        _observerCallback(t) {
                            const e = t => this._targetLinks.get(`#${t.target.id}`),
                                i = t => {
                                    this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t))
                                },
                                n = (this._rootElement || document.documentElement).scrollTop,
                                s = n >= this._previousScrollData.parentScrollTop;
                            this._previousScrollData.parentScrollTop = n;
                            for (const o of t) {
                                if (!o.isIntersecting) {
                                    this._activeTarget = null, this._clearActiveClass(e(o));
                                    continue
                                }
                                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                                if (s && t) {
                                    if (i(o), !n) return
                                } else s || t || i(o)
                            }
                        }
                        _initializeTargetsAndObservables() {
                            this._targetLinks = new Map, this._observableSections = new Map;
                            const t = U.find(We, this._config.target);
                            for (const e of t) {
                                if (!e.hash || d(e)) continue;
                                const t = U.findOne(e.hash, this._element);
                                h(t) && (this._targetLinks.set(e.hash, e), this._observableSections.set(e.hash, t))
                            }
                        }
                        _process(t) {
                            this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add($e), this._activateParents(t), H.trigger(this._element, "activate.bs.scrollspy", {
                                relatedTarget: t
                            }))
                        }
                        _activateParents(t) {
                            if (t.classList.contains("dropdown-item")) U.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add($e);
                            else
                                for (const e of U.parents(t, ".nav, .list-group"))
                                    for (const t of U.prev(e, ".nav-link, .nav-item > .nav-link, .list-group-item")) t.classList.add($e)
                        }
                        _clearActiveClass(t) {
                            t.classList.remove($e);
                            const e = U.find("[href].active", t);
                            for (const t of e) t.classList.remove($e)
                        }
                        static jQueryInterface(t) {
                            return this.each((function() {
                                const e = ze.getOrCreateInstance(this, t);
                                if ("string" == typeof t) {
                                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                                    e[t]()
                                }
                            }))
                        }
                    }
                    H.on(window, "load.bs.scrollspy.data-api", (() => {
                        for (const t of U.find('[data-bs-spy="scroll"]')) ze.getOrCreateInstance(t)
                    })), b(ze);
                    const qe = "ArrowLeft",
                        Re = "ArrowRight",
                        Ve = "ArrowUp",
                        Ke = "ArrowDown",
                        Qe = "active",
                        Xe = "fade",
                        Ye = "show",
                        Ue = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
                        Ge = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Ue}`;
                    class Je extends V {
                        constructor(t) {
                            super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), H.on(this._element, "keydown.bs.tab", (t => this._keydown(t))))
                        }
                        static get NAME() {
                            return "tab"
                        }
                        show() {
                            const t = this._element;
                            if (this._elemIsActive(t)) return;
                            const e = this._getActiveElem(),
                                i = e ? H.trigger(e, "hide.bs.tab", {
                                    relatedTarget: t
                                }) : null;
                            H.trigger(t, "show.bs.tab", {
                                relatedTarget: e
                            }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e))
                        }
                        _activate(t, e) {
                            t && (t.classList.add(Qe), this._activate(r(t)), this._queueCallback((() => {
                                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), H.trigger(t, "shown.bs.tab", {
                                    relatedTarget: e
                                })) : t.classList.add(Ye)
                            }), t, t.classList.contains(Xe)))
                        }
                        _deactivate(t, e) {
                            t && (t.classList.remove(Qe), t.blur(), this._deactivate(r(t)), this._queueCallback((() => {
                                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), H.trigger(t, "hidden.bs.tab", {
                                    relatedTarget: e
                                })) : t.classList.remove(Ye)
                            }), t, t.classList.contains(Xe)))
                        }
                        _keydown(t) {
                            if (![qe, Re, Ve, Ke].includes(t.key)) return;
                            t.stopPropagation(), t.preventDefault();
                            const e = [Re, Ke].includes(t.key),
                                i = w(this._getChildren().filter((t => !d(t))), t.target, e, !0);
                            i && (i.focus({
                                preventScroll: !0
                            }), Je.getOrCreateInstance(i).show())
                        }
                        _getChildren() {
                            return U.find(Ge, this._parent)
                        }
                        _getActiveElem() {
                            return this._getChildren().find((t => this._elemIsActive(t))) || null
                        }
                        _setInitialAttributes(t, e) {
                            this._setAttributeIfNotExists(t, "role", "tablist");
                            for (const t of e) this._setInitialAttributesOnChild(t)
                        }
                        _setInitialAttributesOnChild(t) {
                            t = this._getInnerElement(t);
                            const e = this._elemIsActive(t),
                                i = this._getOuterElement(t);
                            t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t)
                        }
                        _setInitialAttributesOnTargetPanel(t) {
                            const e = r(t);
                            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`))
                        }
                        _toggleDropDown(t, e) {
                            const i = this._getOuterElement(t);
                            if (!i.classList.contains("dropdown")) return;
                            const n = (t, n) => {
                                const s = U.findOne(t, i);
                                s && s.classList.toggle(n, e)
                            };
                            n(".dropdown-toggle", Qe), n(".dropdown-menu", Ye), i.setAttribute("aria-expanded", e)
                        }
                        _setAttributeIfNotExists(t, e, i) {
                            t.hasAttribute(e) || t.setAttribute(e, i)
                        }
                        _elemIsActive(t) {
                            return t.classList.contains(Qe)
                        }
                        _getInnerElement(t) {
                            return t.matches(Ge) ? t : U.findOne(Ge, t)
                        }
                        _getOuterElement(t) {
                            return t.closest(".nav-item, .list-group-item") || t
                        }
                        static jQueryInterface(t) {
                            return this.each((function() {
                                const e = Je.getOrCreateInstance(this);
                                if ("string" == typeof t) {
                                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                                    e[t]()
                                }
                            }))
                        }
                    }
                    H.on(document, "click.bs.tab", Ue, (function(t) {
                        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this) || Je.getOrCreateInstance(this).show()
                    })), H.on(window, "load.bs.tab", (() => {
                        for (const t of U.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) Je.getOrCreateInstance(t)
                    })), b(Je);
                    const Ze = "hide",
                        ti = "show",
                        ei = "showing",
                        ii = {
                            animation: "boolean",
                            autohide: "boolean",
                            delay: "number"
                        },
                        ni = {
                            animation: !0,
                            autohide: !0,
                            delay: 5e3
                        };
                    class si extends V {
                        constructor(t, e) {
                            super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
                        }
                        static get Default() {
                            return ni
                        }
                        static get DefaultType() {
                            return ii
                        }
                        static get NAME() {
                            return "toast"
                        }
                        show() {
                            H.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Ze), p(this._element), this._element.classList.add(ti, ei), this._queueCallback((() => {
                                this._element.classList.remove(ei), H.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
                            }), this._element, this._config.animation))
                        }
                        hide() {
                            this.isShown() && (H.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(ei), this._queueCallback((() => {
                                this._element.classList.add(Ze), this._element.classList.remove(ei, ti), H.trigger(this._element, "hidden.bs.toast")
                            }), this._element, this._config.animation)))
                        }
                        dispose() {
                            this._clearTimeout(), this.isShown() && this._element.classList.remove(ti), super.dispose()
                        }
                        isShown() {
                            return this._element.classList.contains(ti)
                        }
                        _maybeScheduleHide() {
                            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                                this.hide()
                            }), this._config.delay)))
                        }
                        _onInteraction(t, e) {
                            switch (t.type) {
                                case "mouseover":
                                case "mouseout":
                                    this._hasMouseInteraction = e;
                                    break;
                                case "focusin":
                                case "focusout":
                                    this._hasKeyboardInteraction = e
                            }
                            if (e) return void this._clearTimeout();
                            const i = t.relatedTarget;
                            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
                        }
                        _setListeners() {
                            H.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))), H.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))), H.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))), H.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1)))
                        }
                        _clearTimeout() {
                            clearTimeout(this._timeout), this._timeout = null
                        }
                        static jQueryInterface(t) {
                            return this.each((function() {
                                const e = si.getOrCreateInstance(this, t);
                                if ("string" == typeof t) {
                                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                    e[t](this)
                                }
                            }))
                        }
                    }
                    return K(si), b(si), {
                        Alert: Q,
                        Button: Y,
                        Carousel: ht,
                        Collapse: _t,
                        Dropdown: jt,
                        Modal: se,
                        Offcanvas: fe,
                        Popover: Me,
                        ScrollSpy: ze,
                        Tab: Je,
                        Toast: si,
                        Tooltip: Pe
                    }
                }(i(980))
            }
        },
        i = {};

    function n(t) {
        var s = i[t];
        if (void 0 !== s) return s.exports;
        var o = i[t] = {
            exports: {}
        };
        return e[t].call(o.exports, o, o.exports, n), o.exports
    }
    n.d = (t, e) => {
        for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, {
            enumerable: !0,
            get: e[i]
        })
    }, n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, t = n(666), window.bootstrap = t
})();