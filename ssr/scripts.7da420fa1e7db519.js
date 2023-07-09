function r(vt, $) {
    for (var tt = 0; tt < $.length; tt++) {
        var at = $[tt];
        at.enumerable = at.enumerable || !1,
        at.configurable = !0,
        "value"in at && (at.writable = !0),
        Object.defineProperty(vt, at.key, at)
    }
}
function Jt(vt, $, tt) {
    $ && r(vt.prototype, $),
    tt && r(vt, tt),
    Object.defineProperty(vt, "prototype", {
        writable: !1
    })
}
var n, t;
n = this,
t = function() {
    "use strict";
    var vt = "(prefers-reduced-motion: reduce)"
      , $ = 4
      , tt = 5
      , at = {
        CREATED: 1,
        MOUNTED: 2,
        IDLE: 3,
        MOVING: $,
        SCROLLING: tt,
        DRAGGING: 6,
        DESTROYED: 7
    };
    function ct(e) {
        e.length = 0
    }
    function ht(e, u, i) {
        return Array.prototype.slice.call(e, u, i)
    }
    function j(e) {
        return e.bind.apply(e, [null].concat(ht(arguments, 1)))
    }
    function hn() {}
    var Rn = setTimeout;
    function Wn(e) {
        return requestAnimationFrame(e)
    }
    function nn(e, u) {
        return typeof u === e
    }
    function _t(e) {
        return !mn(e) && nn("object", e)
    }
    var gn = Array.isArray
      , Xn = j(nn, "function")
      , gt = j(nn, "string")
      , jt = j(nn, "undefined");
    function mn(e) {
        return null === e
    }
    function Gn(e) {
        try {
            return e instanceof (e.ownerDocument.defaultView || window).HTMLElement
        } catch {
            return !1
        }
    }
    function Ft(e) {
        return gn(e) ? e : [e]
    }
    function nt(e, u) {
        Ft(e).forEach(u)
    }
    function yn(e, u) {
        return -1 < e.indexOf(u)
    }
    function en(e, u) {
        return e.push.apply(e, Ft(u)),
        e
    }
    function lt(e, u, i) {
        e && nt(u, function(o) {
            o && e.classList[i ? "add" : "remove"](o)
        })
    }
    function ut(e, u) {
        lt(e, gt(u) ? u.split(" ") : u, !0)
    }
    function Rt(e, u) {
        nt(u, e.appendChild.bind(e))
    }
    function bn(e, u) {
        nt(e, function(i) {
            var o = (u || i).parentNode;
            o && o.insertBefore(i, u)
        })
    }
    function Wt(e, u) {
        return Gn(e) && (e.msMatchesSelector || e.matches).call(e, u)
    }
    function Bn(e, u) {
        return e = e ? ht(e.children) : [],
        u ? e.filter(function(i) {
            return Wt(i, u)
        }) : e
    }
    function Xt(e, u) {
        return u ? Bn(e, u)[0] : e.firstElementChild
    }
    var Gt = Object.keys;
    function xt(e, u, i) {
        e && (i ? Gt(e).reverse() : Gt(e)).forEach(function(o) {
            "__proto__" !== o && u(e[o], o)
        })
    }
    function Bt(e) {
        return ht(arguments, 1).forEach(function(u) {
            xt(u, function(i, o) {
                e[o] = u[o]
            })
        }),
        e
    }
    function mt(e) {
        return ht(arguments, 1).forEach(function(u) {
            xt(u, function(i, o) {
                e[o] = gn(i) ? i.slice() : _t(i) ? mt({}, _t(e[o]) ? e[o] : {}, i) : i
            })
        }),
        e
    }
    function Hn(e, u) {
        nt(u || Gt(e), function(i) {
            delete e[i]
        })
    }
    function st(e, u) {
        nt(e, function(i) {
            nt(u, function(o) {
                i && i.removeAttribute(o)
            })
        })
    }
    function N(e, u, i) {
        _t(u) ? xt(u, function(o, s) {
            N(e, s, o)
        }) : nt(e, function(o) {
            mn(i) || "" === i ? st(o, u) : o.setAttribute(u, String(i))
        })
    }
    function At(e, u, i) {
        return e = document.createElement(e),
        u && (gt(u) ? ut : N)(e, u),
        i && Rt(i, e),
        e
    }
    function rt(e, u, i) {
        if (jt(i))
            return getComputedStyle(e)[u];
        mn(i) || (e.style[u] = "" + i)
    }
    function Ht(e, u) {
        rt(e, "display", u)
    }
    function Yn(e) {
        e.setActive && e.setActive() || e.focus({
            preventScroll: !0
        })
    }
    function ot(e, u) {
        return e.getAttribute(u)
    }
    function qn(e, u) {
        return e && e.classList.contains(u)
    }
    function et(e) {
        return e.getBoundingClientRect()
    }
    function St(e) {
        nt(e, function(u) {
            u && u.parentNode && u.parentNode.removeChild(u)
        })
    }
    function Un(e) {
        return Xt((new DOMParser).parseFromString(e, "text/html").body)
    }
    function ft(e, u) {
        e.preventDefault(),
        u && (e.stopPropagation(),
        e.stopImmediatePropagation())
    }
    function Jn(e, u) {
        return e && e.querySelector(u)
    }
    function wn(e, u) {
        return u ? ht(e.querySelectorAll(u)) : []
    }
    function dt(e, u) {
        lt(e, u, !1)
    }
    function En(e) {
        return e.timeStamp
    }
    function kt(e) {
        return gt(e) ? e : e ? e + "px" : ""
    }
    var Yt = "splide"
      , xn = "data-" + Yt;
    function qt(e, u) {
        if (!e)
            throw new Error("[" + Yt + "] " + (u || ""))
    }
    var yt = Math.min
      , rn = Math.max
      , on = Math.floor
      , Ut = Math.ceil
      , J = Math.abs;
    function Kn(e, u, i) {
        return J(e - u) < i
    }
    function un(e, a, i, o) {
        var s = yt(a, i);
        return a = rn(a, i),
        o ? s < e && e < a : s <= e && e <= a
    }
    function Dt(e, s, i) {
        var o = yt(s, i);
        return s = rn(s, i),
        yt(rn(o, e), s)
    }
    function Sn(e) {
        return (0 < e) - (e < 0)
    }
    function kn(e, u) {
        return nt(u, function(i) {
            e = e.replace("%s", "" + i)
        }),
        e
    }
    function Pn(e) {
        return e < 10 ? "0" + e : "" + e
    }
    var Vn = {};
    function Qn() {
        var e = [];
        function u(i, o, s) {
            nt(i, function(a) {
                a && nt(o, function(d) {
                    d.split(" ").forEach(function(l) {
                        l = l.split("."),
                        s(a, l[0], l[1])
                    })
                })
            })
        }
        return {
            bind: function(i, o, s, a) {
                u(i, o, function(d, l, g) {
                    var p = "addEventListener"in d
                      , v = p ? d.removeEventListener.bind(d, l, s, a) : d.removeListener.bind(d, s);
                    p ? d.addEventListener(l, s, a) : d.addListener(s),
                    e.push([d, l, g, s, v])
                })
            },
            unbind: function(i, o, s) {
                u(i, o, function(a, d, l) {
                    e = e.filter(function(g) {
                        return !!(g[0] !== a || g[1] !== d || g[2] !== l || s && g[3] !== s) || (g[4](),
                        !1)
                    })
                })
            },
            dispatch: function(i, o, s) {
                var a;
                return "function" == typeof CustomEvent ? a = new CustomEvent(o,{
                    bubbles: !0,
                    detail: s
                }) : (a = document.createEvent("CustomEvent")).initCustomEvent(o, !0, !1, s),
                i.dispatchEvent(a),
                a
            },
            destroy: function() {
                e.forEach(function(i) {
                    i[4]()
                }),
                ct(e)
            }
        }
    }
    var Pt = "mounted"
      , bt = "move"
      , Kt = "moved"
      , Zn = "click"
      , Se = "active"
      , ke = "inactive"
      , Pe = "visible"
      , Le = "hidden"
      , B = "refresh"
      , K = "updated"
      , Vt = "resize"
      , Ln = "resized"
      , Cn = "scroll"
      , Mt = "scrolled"
      , $n = "destroy"
      , te = "navigation:mounted"
      , ne = "autoplay:play"
      , ee = "autoplay:pause"
      , ie = "lazyload:loaded"
      , re = "sk"
      , oe = "sh";
    function W(e) {
        var u = e ? e.event.bus : document.createDocumentFragment()
          , i = Qn();
        return e && e.event.on($n, i.destroy),
        Bt(i, {
            bus: u,
            on: function(o, s) {
                i.bind(u, Ft(o).join(" "), function(a) {
                    s.apply(s, gn(a.detail) ? a.detail : [])
                })
            },
            off: j(i.unbind, u),
            emit: function(o) {
                i.dispatch(u, o, ht(arguments, 1))
            }
        })
    }
    function sn(e, u, i, o) {
        var s, a, d = Date.now, l = 0, g = !0, p = 0;
        function v() {
            if (!g) {
                if (l = e ? yt((d() - s) / e, 1) : 1,
                i && i(l),
                1 <= l && (u(),
                s = d(),
                o && ++p >= o))
                    return S();
                a = Wn(v)
            }
        }
        function S() {
            g = !0
        }
        function w() {
            a && cancelAnimationFrame(a),
            g = !(a = l = 0)
        }
        return {
            start: function(m) {
                m || w(),
                s = d() - (m ? l * e : 0),
                g = !1,
                a = Wn(v)
            },
            rewind: function() {
                s = d(),
                l = 0,
                i && i(l)
            },
            pause: S,
            cancel: w,
            set: function(m) {
                e = m
            },
            isPaused: function() {
                return g
            }
        }
    }
    var Lt, X, an = (Lt = "Arrow") + "Left", cn = Lt + "Right", zt = Lt + "Up", ln = "ttb", An = {
        width: ["height"],
        left: ["top", "right"],
        right: ["bottom", "left"],
        x: ["y"],
        X: ["Y"],
        Y: ["X"],
        ArrowLeft: [zt, cn],
        ArrowRight: [Lt += "Down", an]
    }, pt = "role", Ot = "tabindex", Qt = (X = "aria-") + "controls", ue = X + "current", se = X + "selected", it = X + "label", Dn = X + "labelledby", ae = X + "hidden", Mn = X + "orientation", Zt = X + "roledescription", ce = X + "live", le = X + "busy", fe = X + "atomic", zn = [pt, Ot, "disabled", Qt, ue, it, Dn, ae, Mn, Zt], On = Yt, de = (X = Yt + "__") + "track", Ae = X + "list", fn = X + "slide", pe = fn + "--clone", De = fn + "__container", Nn = X + "arrows", dn = X + "arrow", ve = dn + "--prev", he = dn + "--next", pn = X + "pagination", ge = pn + "__page", Me = X + "progress__bar", ze = X + "toggle", Oe = X + "sr", Ct = "is-active", me = "is-prev", ye = "is-next", In = "is-visible", Tn = "is-loading", be = "is-focus-in", we = "is-overflow", Ne = [Ct, In, me, ye, Tn, be, we], Ee = "touchstart mousedown", _n = "touchmove mousemove", jn = "touchend touchcancel mouseup click", Nt = "slide", It = "loop", $t = "fade", Te = xn + "-interval", Tt = {
        passive: !1,
        capture: !0
    }, _e = {
        Spacebar: " ",
        Right: cn,
        Left: an,
        Up: zt,
        Down: Lt
    };
    function Fn(e) {
        return e = gt(e) ? e : e.key,
        _e[e] || e
    }
    var xe = "keydown"
      , tn = xn + "-lazy"
      , vn = tn + "-srcset"
      , je = "[" + tn + "], [" + vn + "]"
      , Fe = [" ", "Enter"]
      , Re = Object.freeze({
        __proto__: null,
        Media: function(e, u, i) {
            var o = e.state
              , s = i.breakpoints || {}
              , a = i.reducedMotion || {}
              , d = Qn()
              , l = [];
            function g(w) {
                w && d.destroy()
            }
            function p(w, m) {
                m = matchMedia(m),
                d.bind(m, "change", v),
                l.push([w, m])
            }
            function v() {
                var w = o.is(7)
                  , m = i.direction
                  , k = l.reduce(function(E, c) {
                    return mt(E, c[1].matches ? c[0] : {})
                }, {});
                Hn(i),
                S(k),
                i.destroy ? e.destroy("completely" === i.destroy) : w ? (g(!0),
                e.mount()) : m !== i.direction && e.refresh()
            }
            function S(w, m, k) {
                mt(i, w),
                m && mt(Object.getPrototypeOf(i), w),
                !k && o.is(1) || e.emit(K, i)
            }
            return {
                setup: function() {
                    var w = "min" === i.mediaQuery;
                    Gt(s).sort(function(m, k) {
                        return w ? +m - +k : +k - +m
                    }).forEach(function(m) {
                        p(s[m], "(" + (w ? "min" : "max") + "-width:" + m + "px)")
                    }),
                    p(a, vt),
                    v()
                },
                destroy: g,
                reduce: function(w) {
                    matchMedia(vt).matches && (w ? mt(i, a) : Hn(i, Gt(a)))
                },
                set: S
            }
        },
        Direction: function(e, u, i) {
            return {
                resolve: function(o, s, a) {
                    var d = "rtl" !== (a = a || i.direction) || s ? a === ln ? 0 : -1 : 1;
                    return An[o] && An[o][d] || o.replace(/width|left|right/i, function(l, g) {
                        return l = An[l.toLowerCase()][d] || l,
                        0 < g ? l.charAt(0).toUpperCase() + l.slice(1) : l
                    })
                },
                orient: function(o) {
                    return o * ("rtl" === i.direction ? 1 : -1)
                }
            }
        },
        Elements: function(e, u, i) {
            var o, s, a, d = W(e), l = d.on, g = d.bind, p = e.root, v = i.i18n, S = {}, w = [], m = [], k = [];
            function E() {
                o = A("." + de),
                s = Xt(o, "." + Ae),
                qt(o && s, "A track/list element is missing."),
                en(w, Bn(s, "." + fn + ":not(." + pe + ")")),
                xt({
                    arrows: Nn,
                    pagination: pn,
                    prev: ve,
                    next: he,
                    bar: Me,
                    toggle: ze
                }, function(M, _) {
                    S[_] = A("." + M)
                }),
                Bt(S, {
                    root: p,
                    track: o,
                    list: s,
                    slides: w
                });
                var M, P = p.id || "" + (M = Yt) + Pn(Vn[M] = (Vn[M] || 0) + 1), y = i.role;
                p.id = P,
                o.id = o.id || P + "-track",
                s.id = s.id || P + "-list",
                !ot(p, pt) && "SECTION" !== p.tagName && y && N(p, pt, y),
                N(p, Zt, v.carousel),
                N(s, pt, "presentation"),
                f()
            }
            function c(P) {
                var y = zn.concat("style");
                ct(w),
                dt(p, m),
                dt(o, k),
                st([o, s], y),
                st(p, P ? y : ["style", Zt])
            }
            function f() {
                dt(p, m),
                dt(o, k),
                m = L(On),
                k = L(de),
                ut(p, m),
                ut(o, k),
                N(p, it, i.label),
                N(p, Dn, i.labelledby)
            }
            function A(P) {
                return (P = Jn(p, P)) && function(y, M) {
                    if (Xn(y.closest))
                        return y.closest(M);
                    for (var _ = y; _ && 1 === _.nodeType && !Wt(_, M); )
                        _ = _.parentElement;
                    return _
                }(P, "." + On) === p ? P : void 0
            }
            function L(P) {
                return [P + "--" + i.type, P + "--" + i.direction, i.drag && P + "--draggable", i.isNavigation && P + "--nav", P === On && Ct]
            }
            return Bt(S, {
                setup: E,
                mount: function() {
                    l(B, c),
                    l(B, E),
                    l(K, f),
                    g(document, Ee + " keydown", function(P) {
                        a = "keydown" === P.type
                    }, {
                        capture: !0
                    }),
                    g(p, "focusin", function() {
                        lt(p, be, !!a)
                    })
                },
                destroy: c
            })
        },
        Slides: function(e, u, i) {
            var o = W(e)
              , s = o.on
              , a = o.emit
              , d = o.bind
              , l = (o = u.Elements).slides
              , g = o.list
              , p = [];
            function v() {
                l.forEach(function(c, f) {
                    w(c, f, -1)
                })
            }
            function S() {
                k(function(c) {
                    c.destroy()
                }),
                ct(p)
            }
            function w(c, f, A) {
                f = function Ie(e, u, i, o) {
                    var s, a = W(e), d = a.on, l = a.emit, g = a.bind, p = e.Components, v = e.root, S = e.options, w = S.isNavigation, m = S.updateOnMove, k = S.i18n, E = S.pagination, c = S.slideFocus, f = p.Direction.resolve, A = ot(o, "style"), L = ot(o, it), P = -1 < i, y = Xt(o, "." + De);
                    function M() {
                        var h = e.splides.map(function(b) {
                            return (b = b.splide.Components.Slides.getAt(u)) ? b.slide.id : ""
                        }).join(" ");
                        N(o, it, kn(k.slideX, (P ? i : u) + 1)),
                        N(o, Qt, h),
                        N(o, pt, c ? "button" : ""),
                        c && st(o, Zt)
                    }
                    function _() {
                        s || I()
                    }
                    function I() {
                        var h, b, C;
                        s || (h = e.index,
                        (C = z()) !== qn(o, Ct) && (lt(o, Ct, C),
                        N(o, ue, w && C || ""),
                        l(C ? Se : ke, x)),
                        b = !(C = function() {
                            if (e.is($t))
                                return z();
                            var T = et(p.Elements.track)
                              , H = et(o)
                              , R = f("left", !0)
                              , Z = f("right", !0);
                            return on(T[R]) <= Ut(H[R]) && on(H[Z]) <= Ut(T[Z])
                        }()) && (!z() || P),
                        e.state.is([$, tt]) || N(o, ae, b || ""),
                        N(wn(o, S.focusableNodes || ""), Ot, b ? -1 : ""),
                        c && N(o, Ot, b ? -1 : 0),
                        C !== qn(o, In) && (lt(o, In, C),
                        l(C ? Pe : Le, x)),
                        C || document.activeElement !== o || (b = p.Slides.getAt(e.index)) && Yn(b.slide),
                        lt(o, me, u === h - 1),
                        lt(o, ye, u === h + 1))
                    }
                    function z() {
                        var h = e.index;
                        return h === u || S.cloneStatus && h === i
                    }
                    var x = {
                        index: u,
                        slideIndex: i,
                        slide: o,
                        container: y,
                        isClone: P,
                        mount: function() {
                            P || (o.id = v.id + "-slide" + Pn(u + 1),
                            N(o, pt, E ? "tabpanel" : "group"),
                            N(o, Zt, k.slide),
                            N(o, it, L || kn(k.slideLabel, [u + 1, e.length]))),
                            g(o, "click", j(l, Zn, x)),
                            g(o, "keydown", j(l, re, x)),
                            d([Kt, oe, Mt], I),
                            d(te, M),
                            m && d(bt, _)
                        },
                        destroy: function() {
                            s = !0,
                            a.destroy(),
                            dt(o, Ne),
                            st(o, zn),
                            N(o, "style", A),
                            N(o, it, L || "")
                        },
                        update: I,
                        style: function(h, b, C) {
                            rt(C && y || o, h, b)
                        },
                        isWithin: function(h, b) {
                            return h = J(h - u),
                            (h = P || !S.rewind && !e.is(It) ? h : yt(h, e.length - h)) <= b
                        }
                    };
                    return x
                }(e, f, A, c),
                f.mount(),
                p.push(f),
                p.sort(function(L, P) {
                    return L.index - P.index
                })
            }
            function m(c) {
                return c ? E(function(f) {
                    return !f.isClone
                }) : p
            }
            function k(c, f) {
                m(f).forEach(c)
            }
            function E(c) {
                return p.filter(Xn(c) ? c : function(f) {
                    return gt(c) ? Wt(f.slide, c) : yn(Ft(c), f.index)
                }
                )
            }
            return {
                mount: function() {
                    v(),
                    s(B, S),
                    s(B, v)
                },
                destroy: S,
                update: function() {
                    k(function(c) {
                        c.update()
                    })
                },
                register: w,
                get: m,
                getIn: function(c) {
                    var f = u.Controller
                      , A = f.toIndex(c)
                      , L = f.hasFocus() ? 1 : i.perPage;
                    return E(function(P) {
                        return un(P.index, A, A + L - 1)
                    })
                },
                getAt: function(c) {
                    return E(c)[0]
                },
                add: function(c, f) {
                    nt(c, function(A) {
                        var L, P, y;
                        Gn(A = gt(A) ? Un(A) : A) && ((L = l[f]) ? bn(A, L) : Rt(g, A),
                        ut(A, i.classes.slide),
                        L = A,
                        P = j(a, Vt),
                        L = wn(L, "img"),
                        (y = L.length) ? L.forEach(function(M) {
                            d(M, "load error", function() {
                                --y || P()
                            })
                        }) : P())
                    }),
                    a(B)
                },
                remove: function(c) {
                    St(E(c).map(function(f) {
                        return f.slide
                    })),
                    a(B)
                },
                forEach: k,
                filter: E,
                style: function(c, f, A) {
                    k(function(L) {
                        L.style(c, f, A)
                    })
                },
                getLength: function(c) {
                    return (c ? l : p).length
                },
                isEnough: function() {
                    return p.length > i.perPage
                }
            }
        },
        Layout: function(e, u, i) {
            var o, s, a, d = (p = W(e)).on, l = p.bind, g = p.emit, p = u.Slides, v = u.Direction.resolve, S = (u = u.Elements).root, w = u.track, m = u.list, k = p.getAt, E = p.style;
            function c() {
                o = i.direction === ln,
                rt(S, "maxWidth", kt(i.width)),
                rt(w, v("paddingLeft"), A(!1)),
                rt(w, v("paddingRight"), A(!0)),
                f(!0)
            }
            function f(h) {
                var C, b = et(S);
                !h && s.width === b.width && s.height === b.height || (rt(w, "height", (C = "",
                o && (qt(C = L(), "height or heightRatio is missing."),
                C = "calc(" + C + " - " + A(!1) + " - " + A(!0) + ")"),
                C)),
                E(v("marginRight"), kt(i.gap)),
                E("width", i.autoWidth ? null : kt(i.fixedWidth) || (o ? "" : P())),
                E("height", kt(i.fixedHeight) || (o ? i.autoHeight ? null : P() : L()), !0),
                s = b,
                g(Ln),
                a !== (a = x()) && (lt(S, we, a),
                g("overflow", a)))
            }
            function A(C) {
                var b = i.padding;
                return C = v(C ? "right" : "left"),
                b && kt(b[C] || (_t(b) ? 0 : b)) || "0px"
            }
            function L() {
                return kt(i.height || et(m).width * i.heightRatio)
            }
            function P() {
                var h = kt(i.gap);
                return "calc((100%" + (h && " + " + h) + ")/" + (i.perPage || 1) + (h && " - " + h) + ")"
            }
            function y() {
                return et(m)[v("width")]
            }
            function M(h, b) {
                return (h = k(h || 0)) ? et(h.slide)[v("width")] + (b ? 0 : z()) : 0
            }
            function _(T, b) {
                var C;
                return (T = k(T)) ? (T = et(T.slide)[v("right")],
                C = et(m)[v("left")],
                J(T - C) + (b ? 0 : z())) : 0
            }
            function I(h) {
                return _(e.length - 1) - _(0) + M(0, h)
            }
            function z() {
                var h = k(0);
                return h && parseFloat(rt(h.slide, v("marginRight"))) || 0
            }
            function x() {
                return e.is($t) || I(!0) > y()
            }
            return {
                mount: function() {
                    var h, C;
                    c(),
                    l(window, "resize load", (h = j(g, Vt),
                    C = sn(0, h, null, 1),
                    function() {
                        C.isPaused() && C.start()
                    }
                    )),
                    d([K, B], c),
                    d(Vt, f)
                },
                resize: f,
                listSize: y,
                slideSize: M,
                sliderSize: I,
                totalSize: _,
                getPadding: function(h) {
                    return parseFloat(rt(w, v("padding" + (h ? "Right" : "Left")))) || 0
                },
                isOverflow: x
            }
        },
        Clones: function(e, u, i) {
            var o, s = W(e), a = s.on, d = u.Elements, l = u.Slides, g = u.Direction.resolve, p = [];
            function v() {
                if (a(B, S),
                a([K, Vt], m),
                o = k()) {
                    var E = o
                      , c = l.get().slice()
                      , f = c.length;
                    if (f) {
                        for (; c.length < E; )
                            en(c, c);
                        en(c.slice(-E), c.slice(0, E)).forEach(function(A, L) {
                            var M, _, P = L < E, y = (_ = L,
                            ut(M = (M = A.slide).cloneNode(!0), i.classes.clone),
                            M.id = e.root.id + "-clone" + Pn(_ + 1),
                            M);
                            P ? bn(y, c[0].slide) : Rt(d.list, y),
                            en(p, y),
                            l.register(y, L - E + (P ? 0 : f), A.index)
                        })
                    }
                    u.Layout.resize(!0)
                }
            }
            function S() {
                w(),
                v()
            }
            function w() {
                St(p),
                ct(p),
                s.destroy()
            }
            function m() {
                var E = k();
                o !== E && (o < E || !E) && s.emit(B)
            }
            function k() {
                var E, c = i.clones;
                return e.is(It) ? jt(c) && (c = (E = i[g("fixedWidth")] && u.Layout.slideSize(0)) && Ut(et(d.track)[g("width")] / E) || i[g("autoWidth")] && e.length || 2 * i.perPage) : c = 0,
                c
            }
            return {
                mount: v,
                destroy: w
            }
        },
        Move: function(e, u, i) {
            var o, s = W(e), a = s.on, d = s.emit, l = e.state.set, g = (s = u.Layout).slideSize, p = s.getPadding, v = s.totalSize, S = s.listSize, w = s.sliderSize, m = (s = u.Direction).resolve, k = s.orient, E = (s = u.Elements).list, c = s.track;
            function f() {
                u.Controller.isBusy() || (u.Scroll.cancel(),
                A(e.index),
                u.Slides.update())
            }
            function A(x) {
                L(_(x, !0))
            }
            function L(x, h) {
                var b, C, T;
                e.is($t) || (h = h ? x : (b = x,
                e.is(It) && (T = (C = M(b)) > u.Controller.getEnd(),
                (C < 0 || T) && (b = P(b, T))),
                b),
                rt(E, "transform", "translate" + m("X") + "(" + h + "px)"),
                x !== h && d(oe))
            }
            function P(x, h) {
                var b = x - z(h)
                  , C = w();
                return x - k(C * (Ut(J(b) / C) || 1)) * (h ? 1 : -1)
            }
            function y() {
                L(I(), !0),
                o.cancel()
            }
            function M(x) {
                for (var h = u.Slides.get(), b = 0, C = 1 / 0, T = 0; T < h.length; T++) {
                    var H = h[T].index
                      , R = J(_(H, !0) - x);
                    if (!(R <= C))
                        break;
                    C = R,
                    b = H
                }
                return b
            }
            function _(x, h) {
                var b = k(v(x - 1) - ("center" === (b = i.focus) ? (S() - g(x, !0)) / 2 : +b * g(x) || 0));
                return h ? (x = b,
                x = i.trimSpace && e.is(Nt) ? Dt(x, 0, k(w(!0) - S())) : x) : b
            }
            function I() {
                var x = m("left");
                return et(E)[x] - et(c)[x] + k(p(!1))
            }
            function z(x) {
                return _(x ? u.Controller.getEnd() : 0, !!i.trimSpace)
            }
            return {
                mount: function() {
                    o = u.Transition,
                    a([Pt, Ln, K, B], f)
                },
                move: function(x, h, b, C) {
                    var T, H;
                    x !== h && (T = b < x,
                    H = k(P(I(), T)),
                    T ? 0 <= H : H <= E[m("scrollWidth")] - et(c)[m("width")]) && (y(),
                    L(P(I(), b < x), !0)),
                    l($),
                    d(bt, h, b, x),
                    o.start(h, function() {
                        l(3),
                        d(Kt, h, b, x),
                        C && C()
                    })
                },
                jump: A,
                translate: L,
                shift: P,
                cancel: y,
                toIndex: M,
                toPosition: _,
                getPosition: I,
                getLimit: z,
                exceededLimit: function(C, h) {
                    h = jt(h) ? I() : h;
                    var b = !0 !== C && k(h) < k(z(!1));
                    return C = !1 !== C && k(h) > k(z(!0)),
                    b || C
                },
                reposition: f
            }
        },
        Controller: function(e, u, i) {
            var o, s, a, d, l = W(e), g = l.on, p = l.emit, v = u.Move, S = v.getPosition, w = v.getLimit, m = v.toPosition, k = (l = u.Slides).isEnough, E = l.getLength, c = i.omitEnd, f = e.is(It), A = e.is(Nt), L = j(z, !1), P = j(z, !0), y = i.start || 0, M = y;
            function _() {
                s = E(!0),
                a = i.perMove,
                d = i.perPage,
                o = b();
                var D = Dt(y, 0, c ? o : s - 1);
                D !== y && (y = D,
                v.reposition())
            }
            function I() {
                o !== b() && p("ei")
            }
            function z(D, U) {
                var Y = a || (R() ? 1 : d);
                return -1 === (Y = x(y + Y * (D ? -1 : 1), y, !(a || R()))) && A && !Kn(S(), w(!D), 1) ? D ? 0 : o : U ? Y : h(Y)
            }
            function x(D, U, Y) {
                var V;
                return k() || R() ? ((V = function(q) {
                    if (A && "move" === i.trimSpace && q !== y)
                        for (var O = S(); O === m(q, !0) && un(q, 0, e.length - 1, !i.rewind); )
                            q < y ? --q : ++q;
                    return q
                }(D)) !== D && (U = D,
                D = V,
                Y = !1),
                D < 0 || o < D ? D = a || !un(0, D, U, !0) && !un(o, U, D, !0) ? f ? Y ? D < 0 ? -(s % d || d) : s : D : i.rewind ? D < 0 ? o : 0 : -1 : C(T(D)) : Y && D !== U && (D = C(T(U) + (D < U ? -1 : 1)))) : D = -1,
                D
            }
            function h(D) {
                return f ? (D + s) % s || 0 : D
            }
            function b() {
                for (var D = s - (R() || f && a ? 1 : d); c && 0 < D--; )
                    if (m(s - 1, !0) !== m(D, !0)) {
                        D++;
                        break
                    }
                return Dt(D, 0, s - 1)
            }
            function C(D) {
                return Dt(R() ? D : d * D, 0, o)
            }
            function T(D) {
                return R() ? yt(D, o) : on((o <= D ? s - 1 : D) / d)
            }
            function H(D) {
                D !== y && (M = y,
                y = D)
            }
            function R() {
                return !jt(i.focus) || i.isNavigation
            }
            function Z() {
                return e.state.is([$, tt]) && !!i.waitForTransition
            }
            return {
                mount: function() {
                    _(),
                    g([K, B, "ei"], _),
                    g(Ln, I)
                },
                go: function(D, U, Y) {
                    var V, q, F, G, O;
                    Z() || -1 < (V = h((O = y,
                    gt(q = D) ? (F = (G = q.match(/([+\-<>])(\d+)?/) || [])[1],
                    G = G[2],
                    "+" === F || "-" === F ? O = x(y + +("" + F + (+G || 1)), y) : ">" === F ? O = G ? C(+G) : L(!0) : "<" === F && (O = P(!0))) : O = f ? q : Dt(q, 0, o),
                    D = O))) && (U || V !== y) && (H(V),
                    v.move(D, V, M, Y))
                },
                scroll: function(D, U, Y, V) {
                    u.Scroll.scroll(D, U, Y, function() {
                        var q = h(v.toIndex(S()));
                        H(c ? yt(q, o) : q),
                        V && V()
                    })
                },
                getNext: L,
                getPrev: P,
                getAdjacent: z,
                getEnd: b,
                setIndex: H,
                getIndex: function(D) {
                    return D ? M : y
                },
                toIndex: C,
                toPage: T,
                toDest: function(D) {
                    return D = v.toIndex(D),
                    A ? Dt(D, 0, o) : D
                },
                hasFocus: R,
                isBusy: Z
            }
        },
        Arrows: function(e, u, i) {
            var o, s, a = W(e), d = a.on, l = a.bind, g = a.emit, p = i.classes, v = i.i18n, S = u.Elements, w = u.Controller, m = S.arrows, k = S.track, E = m, c = S.prev, f = S.next, A = {};
            function L() {
                var z = i.arrows;
                !z || c && f || (E = m || At("div", p.arrows),
                c = _(!0),
                f = _(!1),
                o = !0,
                Rt(E, [c, f]),
                m || bn(E, k)),
                c && f && (Bt(A, {
                    prev: c,
                    next: f
                }),
                Ht(E, z ? "" : "none"),
                ut(E, s = Nn + "--" + i.direction),
                z && (d([Pt, Kt, B, Mt, "ei"], I),
                l(f, "click", j(M, ">")),
                l(c, "click", j(M, "<")),
                I(),
                N([c, f], Qt, k.id),
                g("arrows:mounted", c, f))),
                d(K, P)
            }
            function P() {
                y(),
                L()
            }
            function y() {
                a.destroy(),
                dt(E, s),
                o ? (St(m ? [c, f] : E),
                c = f = null) : st([c, f], zn)
            }
            function M(z) {
                w.go(z, !0)
            }
            function _(z) {
                return Un('<button class="' + p.arrow + " " + (z ? p.prev : p.next) + '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' + (i.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") + '" />')
            }
            function I() {
                var z, x, h, b;
                c && f && (b = e.index,
                z = w.getPrev(),
                x = w.getNext(),
                h = -1 < z && b < z ? v.last : v.prev,
                b = -1 < x && x < b ? v.first : v.next,
                c.disabled = z < 0,
                f.disabled = x < 0,
                N(c, it, h),
                N(f, it, b),
                g("arrows:updated", c, f, z, x))
            }
            return {
                arrows: A,
                mount: L,
                destroy: y,
                update: I
            }
        },
        Autoplay: function(e, u, i) {
            var o, s, a = W(e), d = a.on, l = a.bind, g = a.emit, p = sn(i.interval, e.go.bind(e, ">"), function(y) {
                var M = S.bar;
                M && rt(M, "width", 100 * y + "%"),
                g("autoplay:playing", y)
            }), v = p.isPaused, S = u.Elements, w = (a = u.Elements).root, m = a.toggle, k = i.autoplay, E = "pause" === k;
            function c() {
                v() && u.Slides.isEnough() && (p.start(!i.resetProgress),
                s = o = E = !1,
                L(),
                g(ne))
            }
            function f(y) {
                E = !!(y = void 0 === y || y),
                L(),
                v() || (p.pause(),
                g(ee))
            }
            function A() {
                E || (o || s ? f(!1) : c())
            }
            function L() {
                m && (lt(m, Ct, !E),
                N(m, it, i.i18n[E ? "play" : "pause"]))
            }
            function P(y) {
                y = u.Slides.getAt(y),
                p.set(y && +ot(y.slide, Te) || i.interval)
            }
            return {
                mount: function() {
                    k && (i.pauseOnHover && l(w, "mouseenter mouseleave", function(y) {
                        o = "mouseenter" === y.type,
                        A()
                    }),
                    i.pauseOnFocus && l(w, "focusin focusout", function(y) {
                        s = "focusin" === y.type,
                        A()
                    }),
                    m && l(m, "click", function() {
                        E ? c() : f(!0)
                    }),
                    d([bt, Cn, B], p.rewind),
                    d(bt, P),
                    m && N(m, Qt, S.track.id),
                    E || c(),
                    L())
                },
                destroy: p.cancel,
                play: c,
                pause: f,
                isPaused: v
            }
        },
        Cover: function(e, u, i) {
            var o = W(e).on;
            function s(d) {
                u.Slides.forEach(function(l) {
                    var g = Xt(l.container || l.slide, "img");
                    g && g.src && a(d, g, l)
                })
            }
            function a(d, l, g) {
                g.style("background", d ? 'center/cover no-repeat url("' + l.src + '")' : "", !0),
                Ht(l, d ? "none" : "")
            }
            return {
                mount: function() {
                    i.cover && (o(ie, j(a, !0)),
                    o([Pt, K, B], j(s, !0)))
                },
                destroy: j(s, !1)
            }
        },
        Scroll: function(e, u, i) {
            var o, s, a = W(e), d = a.on, l = a.emit, g = e.state.set, p = u.Move, v = p.getPosition, S = p.getLimit, w = p.exceededLimit, m = p.translate, k = e.is(Nt), E = 1;
            function c(y, M, b, I, z) {
                var x, h = v();
                L(),
                !b || k && w() || (b = u.Layout.sliderSize(),
                x = Sn(y) * b * on(J(y) / b) || 0,
                y = p.toPosition(u.Controller.toDest(y % b)) + x),
                b = Kn(h, y, 1),
                E = 1,
                M = b ? 0 : M || rn(J(y - h) / 1.5, 800),
                s = I,
                o = sn(M, f, j(A, h, y, z), 1),
                g(tt),
                l(Cn),
                o.start()
            }
            function f() {
                g(3),
                s && s(),
                l(Mt)
            }
            function A(y, M, _, x) {
                var z = v();
                x = (y + (M - y) * (M = x,
                (y = i.easingFunc) ? y(M) : 1 - Math.pow(1 - M, 4)) - z) * E,
                m(z + x),
                k && !_ && w() && (E *= .6,
                J(x) < 10 && c(S(w(!0)), 600, !1, s, !0))
            }
            function L() {
                o && o.cancel()
            }
            function P() {
                o && !o.isPaused() && (L(),
                f())
            }
            return {
                mount: function() {
                    d(bt, L),
                    d([K, B], P)
                },
                destroy: L,
                scroll: c,
                cancel: P
            }
        },
        Drag: function(e, u, i) {
            var o, s, a, d, l, g, p, v, S = W(e), w = S.on, m = S.emit, k = S.bind, E = S.unbind, c = e.state, f = u.Move, A = u.Scroll, L = u.Controller, P = u.Elements.track, y = u.Media.reduce, M = (S = u.Direction).resolve, _ = S.orient, I = f.getPosition, z = f.exceededLimit, x = !1;
            function h() {
                var O = i.drag;
                q(!O),
                d = "free" === O
            }
            function b(O) {
                var F, G, Q;
                g = !1,
                p || (F = V(O),
                Q = i.noDrag,
                Wt(G = O.target, "." + ge + ", ." + dn) || Q && Wt(G, Q) || !F && O.button || (L.isBusy() ? ft(O, !0) : (v = F ? P : window,
                l = c.is([$, tt]),
                a = null,
                k(v, _n, C, Tt),
                k(v, jn, T, Tt),
                f.cancel(),
                A.cancel(),
                R(O))))
            }
            function C(O) {
                var F, G, Q, wt, Et;
                c.is(6) || (c.set(6),
                m("drag")),
                O.cancelable && (l ? (f.translate(o + Z(O) / (x && e.is(Nt) ? 5 : 1)),
                Et = 200 < D(O),
                F = x !== (x = z()),
                (Et || F) && R(O),
                g = !0,
                m("dragging"),
                ft(O)) : J(Z(Et = O)) > J(Z(Et, !0)) && (F = O,
                wt = (Q = _t(G = i.dragMinThreshold)) && G.mouse || 0,
                Q = (Q ? G.touch : +G) || 10,
                l = J(Z(F)) > (V(F) ? Q : wt),
                ft(O)))
            }
            function T(O) {
                var F, G, Q, wt;
                c.is(6) && (c.set(3),
                m("dragged")),
                l && (wt = F = function(wt) {
                    if (e.is(It) || !x) {
                        var Et = D(wt);
                        if (Et && Et < 200)
                            return Z(wt) / Et
                    }
                    return 0
                }(F = O),
                G = I() + Sn(wt) * yt(J(wt) * (i.flickPower || 600), d ? 1 / 0 : u.Layout.listSize() * (i.flickMaxPages || 1)),
                Q = i.rewind && i.rewindByDrag,
                y(!1),
                d ? L.scroll(G, 0, i.snap) : e.is($t) ? L.go(_(Sn(F)) < 0 ? Q ? "<" : "-" : Q ? ">" : "+") : e.is(Nt) && x && Q ? L.go(z(!0) ? ">" : "<") : L.go(L.toDest(G), !0),
                y(!0),
                ft(O)),
                E(v, _n, C),
                E(v, jn, T),
                l = !1
            }
            function H(O) {
                !p && g && ft(O, !0)
            }
            function R(O) {
                a = s,
                s = O,
                o = I()
            }
            function Z(O, F) {
                return Y(O, F) - Y(U(O), F)
            }
            function D(O) {
                return En(O) - En(U(O))
            }
            function U(O) {
                return s === O && a || s
            }
            function Y(O, F) {
                return (V(O) ? O.changedTouches[0] : O)["page" + M(F ? "Y" : "X")]
            }
            function V(O) {
                return typeof TouchEvent < "u" && O instanceof TouchEvent
            }
            function q(O) {
                p = O
            }
            return {
                mount: function() {
                    k(P, _n, hn, Tt),
                    k(P, jn, hn, Tt),
                    k(P, Ee, b, Tt),
                    k(P, "click", H, {
                        capture: !0
                    }),
                    k(P, "dragstart", ft),
                    w([Pt, K], h)
                },
                disable: q,
                isDragging: function() {
                    return l
                }
            }
        },
        Keyboard: function(e, u, i) {
            var o, s, a = W(e), d = a.on, l = a.bind, g = a.unbind, p = e.root, v = u.Direction.resolve;
            function S() {
                var E = i.keyboard;
                E && (o = "global" === E ? window : p,
                l(o, xe, k))
            }
            function w() {
                g(o, xe)
            }
            function m() {
                var E = s;
                s = !0,
                Rn(function() {
                    s = E
                })
            }
            function k(E) {
                s || ((E = Fn(E)) === v(an) ? e.go("<") : E === v(cn) && e.go(">"))
            }
            return {
                mount: function() {
                    S(),
                    d(K, w),
                    d(K, S),
                    d(bt, m)
                },
                destroy: w,
                disable: function(E) {
                    s = E
                }
            }
        },
        LazyLoad: function(e, u, i) {
            var o = W(e)
              , s = o.on
              , a = o.off
              , d = o.bind
              , l = o.emit
              , g = "sequential" === i.lazyLoad
              , p = [Kt, Mt]
              , v = [];
            function S() {
                ct(v),
                u.Slides.forEach(function(c) {
                    wn(c.slide, je).forEach(function(f) {
                        var A = ot(f, tn)
                          , L = ot(f, vn);
                        A === f.src && L === f.srcset || (A = Xt(L = f.parentElement, "." + (A = i.classes.spinner)) || At("span", A, L),
                        v.push([f, c, A]),
                        f.src || Ht(f, "none"))
                    })
                }),
                (g ? E : (a(p),
                s(p, w),
                w))()
            }
            function w() {
                (v = v.filter(function(c) {
                    return !c[1].isWithin(e.index, i.perPage * ((i.preloadPages || 1) + 1) - 1) || m(c)
                })).length || a(p)
            }
            function m(c) {
                var f = c[0];
                ut(c[1].slide, Tn),
                d(f, "load error", j(k, c)),
                N(f, "src", ot(f, tn)),
                N(f, "srcset", ot(f, vn)),
                st(f, tn),
                st(f, vn)
            }
            function k(c, f) {
                var A = c[0]
                  , L = c[1];
                dt(L.slide, Tn),
                "error" !== f.type && (St(c[2]),
                Ht(A, ""),
                l(ie, A, L),
                l(Vt)),
                g && E()
            }
            function E() {
                v.length && m(v.shift())
            }
            return {
                mount: function() {
                    i.lazyLoad && (S(),
                    s(B, S))
                },
                destroy: j(ct, v),
                check: w
            }
        },
        Pagination: function(e, u, i) {
            var o, s, a = W(e), d = a.on, l = a.emit, g = a.bind, p = u.Slides, v = u.Elements, S = u.Controller, w = S.hasFocus, m = S.getIndex, k = S.go, E = u.Direction.resolve, c = v.pagination, f = [];
            function A() {
                o && (St(c ? ht(o.children) : o),
                dt(o, s),
                ct(f),
                o = null),
                a.destroy()
            }
            function L(I) {
                k(">" + I, !0)
            }
            function P(I, z) {
                var x = f.length
                  , h = Fn(z)
                  , C = y()
                  , b = -1;
                h === E(cn, !1, C) ? b = ++I % x : h === E(an, !1, C) ? b = (--I + x) % x : "Home" === h ? b = 0 : "End" === h && (b = x - 1),
                (C = f[b]) && (Yn(C.button),
                k(">" + b),
                ft(z, !0))
            }
            function y() {
                return i.paginationDirection || i.direction
            }
            function M(I) {
                return f[S.toPage(I)]
            }
            function _() {
                var I, z = M(m(!0)), x = M(m());
                z && (dt(I = z.button, Ct),
                st(I, se),
                N(I, Ot, -1)),
                x && (ut(I = x.button, Ct),
                N(I, se, !0),
                N(I, Ot, "")),
                l("pagination:updated", {
                    list: o,
                    items: f
                }, z, x)
            }
            return {
                items: f,
                mount: function I() {
                    A(),
                    d([K, B, "ei"], I);
                    var z = i.pagination;
                    if (c && Ht(c, z ? "" : "none"),
                    z) {
                        d([bt, Cn, Mt], _),
                        z = e.length;
                        var x = i.classes
                          , h = i.i18n
                          , b = i.perPage
                          , C = w() ? S.getEnd() + 1 : Ut(z / b);
                        ut(o = c || At("ul", x.pagination, v.track.parentElement), s = pn + "--" + y()),
                        N(o, pt, "tablist"),
                        N(o, it, h.select),
                        N(o, Mn, y() === ln ? "vertical" : "");
                        for (var T = 0; T < C; T++) {
                            var H = At("li", null, o)
                              , R = At("button", {
                                class: x.page,
                                type: "button"
                            }, H)
                              , Z = p.getIn(T).map(function(Y) {
                                return Y.slide.id
                            })
                              , D = !w() && 1 < b ? h.pageX : h.slideX;
                            g(R, "click", j(L, T)),
                            i.paginationKeyboard && g(R, "keydown", j(P, T)),
                            N(H, pt, "presentation"),
                            N(R, pt, "tab"),
                            N(R, Qt, Z.join(" ")),
                            N(R, it, kn(D, T + 1)),
                            N(R, Ot, -1),
                            f.push({
                                li: H,
                                button: R,
                                page: T
                            })
                        }
                        _(),
                        l("pagination:mounted", {
                            list: o,
                            items: f
                        }, M(e.index))
                    }
                },
                destroy: A,
                getAt: M,
                update: _
            }
        },
        Sync: function(e, u, i) {
            var o = i.isNavigation
              , s = i.slideFocus
              , a = [];
            function d() {
                var w, m;
                e.splides.forEach(function(k) {
                    k.isParent || (g(e, k.splide),
                    g(k.splide, e))
                }),
                o && ((m = (w = W(e)).on)(Zn, v),
                m(re, S),
                m([Pt, K], p),
                a.push(w),
                w.emit(te, e.splides))
            }
            function l() {
                a.forEach(function(w) {
                    w.destroy()
                }),
                ct(a)
            }
            function g(w, m) {
                (w = W(w)).on(bt, function(k, E, c) {
                    m.go(m.is(It) ? c : k)
                }),
                a.push(w)
            }
            function p() {
                N(u.Elements.list, Mn, i.direction === ln ? "vertical" : "")
            }
            function v(w) {
                e.go(w.index)
            }
            function S(w, m) {
                yn(Fe, Fn(m)) && (v(w),
                ft(m))
            }
            return {
                setup: j(u.Media.set, {
                    slideFocus: jt(s) ? o : s
                }, !0),
                mount: d,
                destroy: l,
                remount: function() {
                    l(),
                    d()
                }
            }
        },
        Wheel: function(e, u, i) {
            var o = W(e).bind
              , s = 0;
            function a(d) {
                var l, g, p, v, S;
                d.cancelable && (l = (S = d.deltaY) < 0,
                g = En(d),
                p = i.wheelMinThreshold || 0,
                v = i.wheelSleep || 0,
                J(S) > p && v < g - s && (e.go(l ? "<" : ">"),
                s = g),
                S = l,
                i.releaseWheel && !e.state.is($) && -1 === u.Controller.getAdjacent(S) || ft(d))
            }
            return {
                mount: function() {
                    i.wheel && o(u.Elements.track, "wheel", a, Tt)
                }
            }
        },
        Live: function(e, u, i) {
            var o = W(e).on
              , s = u.Elements.track
              , a = i.live && !i.isNavigation
              , d = At("span", Oe)
              , l = sn(90, j(g, !1));
            function g(v) {
                N(s, le, v),
                v ? (Rt(s, d),
                l.start()) : (St(d),
                l.cancel())
            }
            function p(v) {
                a && N(s, ce, v ? "off" : "polite")
            }
            return {
                mount: function() {
                    a && (p(!u.Autoplay.isPaused()),
                    N(s, fe, !0),
                    d.textContent = "\u2026",
                    o(ne, j(p, !0)),
                    o(ee, j(p, !1)),
                    o([Kt, Mt], j(g, !0)))
                },
                disable: p,
                destroy: function() {
                    st(s, [ce, fe, le]),
                    St(d)
                }
            }
        }
    })
      , We = {
        type: "slide",
        role: "region",
        speed: 400,
        perPage: 1,
        cloneStatus: !0,
        arrows: !0,
        pagination: !0,
        paginationKeyboard: !0,
        interval: 5e3,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        resetProgress: !0,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        drag: !0,
        direction: "ltr",
        trimSpace: !0,
        focusableNodes: "a, button, textarea, input, select, iframe",
        live: !0,
        classes: {
            slide: fn,
            clone: pe,
            arrows: Nn,
            arrow: dn,
            prev: ve,
            next: he,
            pagination: pn,
            page: ge,
            spinner: X + "spinner"
        },
        i18n: {
            prev: "Previous slide",
            next: "Next slide",
            first: "Go to first slide",
            last: "Go to last slide",
            slideX: "Go to slide %s",
            pageX: "Go to page %s",
            play: "Start autoplay",
            pause: "Pause autoplay",
            carousel: "carousel",
            slide: "slide",
            select: "Select a slide to show",
            slideLabel: "%s of %s"
        },
        reducedMotion: {
            speed: 0,
            rewindSpeed: 0,
            autoplay: "pause"
        }
    };
    function Xe(e, u, i) {
        var o = u.Slides;
        function s() {
            o.forEach(function(a) {
                a.style("transform", "translateX(-" + 100 * a.index + "%)")
            })
        }
        return {
            mount: function() {
                W(e).on([Pt, B], s)
            },
            start: function(a, d) {
                o.style("transition", "opacity " + i.speed + "ms " + i.easing),
                Rn(d)
            },
            cancel: hn
        }
    }
    function Ge(e, u, i) {
        var o, s = u.Move, a = u.Controller, d = u.Scroll, l = u.Elements.list, g = j(rt, l, "transition");
        function p() {
            g(""),
            d.cancel()
        }
        return {
            mount: function() {
                W(e).bind(l, "transitionend", function(v) {
                    v.target === l && o && (p(),
                    o())
                })
            },
            start: function(v, S) {
                var w = s.toPosition(v, !0)
                  , m = s.getPosition()
                  , k = function(E) {
                    var c = i.rewindSpeed;
                    if (e.is(Nt) && c) {
                        var f = a.getIndex(!0)
                          , A = a.getEnd();
                        if (0 === f && A <= E || A <= f && 0 === E)
                            return c
                    }
                    return i.speed
                }(v);
                1 <= J(w - m) && 1 <= k ? i.useScroll ? d.scroll(w, k, !1, S) : (g("transform " + k + "ms " + i.easing),
                s.translate(w, !0),
                o = S) : (s.jump(v),
                S())
            },
            cancel: p
        }
    }
    return zt = function() {
        function e(i, o) {
            this.event = W(),
            this.Components = {},
            this.state = function Ce(e) {
                var u = e;
                return {
                    set: function(i) {
                        u = i
                    },
                    is: function(i) {
                        return yn(Ft(i), u)
                    }
                }
            }(1),
            this.splides = [],
            this.n = {},
            this.t = {},
            qt(i = gt(i) ? Jn(document, i) : i, i + " is invalid."),
            o = mt({
                label: ot(this.root = i, it) || "",
                labelledby: ot(i, Dn) || ""
            }, We, e.defaults, o || {});
            try {
                mt(o, JSON.parse(ot(i, xn)))
            } catch {
                qt(!1, "Invalid JSON")
            }
            this.n = Object.create(mt({}, o))
        }
        var u = e.prototype;
        return u.mount = function(i, o) {
            var s = this
              , a = this.state
              , d = this.Components;
            return qt(a.is([1, 7]), "Already mounted!"),
            a.set(1),
            this.i = d,
            this.r = o || this.r || (this.is($t) ? Xe : Ge),
            this.t = i || this.t,
            xt(Bt({}, Re, this.t, {
                Transition: this.r
            }), function(l, g) {
                l = l(s, d, s.n),
                (d[g] = l).setup && l.setup()
            }),
            xt(d, function(l) {
                l.mount && l.mount()
            }),
            this.emit(Pt),
            ut(this.root, "is-initialized"),
            a.set(3),
            this.emit("ready"),
            this
        }
        ,
        u.sync = function(i) {
            return this.splides.push({
                splide: i
            }),
            i.splides.push({
                splide: this,
                isParent: !0
            }),
            this.state.is(3) && (this.i.Sync.remount(),
            i.Components.Sync.remount()),
            this
        }
        ,
        u.go = function(i) {
            return this.i.Controller.go(i),
            this
        }
        ,
        u.on = function(i, o) {
            return this.event.on(i, o),
            this
        }
        ,
        u.off = function(i) {
            return this.event.off(i),
            this
        }
        ,
        u.emit = function(i) {
            var o;
            return (o = this.event).emit.apply(o, [i].concat(ht(arguments, 1))),
            this
        }
        ,
        u.add = function(i, o) {
            return this.i.Slides.add(i, o),
            this
        }
        ,
        u.remove = function(i) {
            return this.i.Slides.remove(i),
            this
        }
        ,
        u.is = function(i) {
            return this.n.type === i
        }
        ,
        u.refresh = function() {
            return this.emit(B),
            this
        }
        ,
        u.destroy = function(i) {
            void 0 === i && (i = !0);
            var o = this.event
              , s = this.state;
            return s.is(1) ? W(this).on("ready", this.destroy.bind(this, i)) : (xt(this.i, function(a) {
                a.destroy && a.destroy(i)
            }, !0),
            o.emit($n),
            o.destroy(),
            i && ct(this.splides),
            s.set(7)),
            this
        }
        ,
        Jt(e, [{
            key: "options",
            get: function() {
                return this.n
            },
            set: function(i) {
                this.i.Media.set(i, !0, !0)
            }
        }, {
            key: "length",
            get: function() {
                return this.i.Slides.getLength(!0)
            }
        }, {
            key: "index",
            get: function() {
                return this.i.Controller.getIndex()
            }
        }]),
        e
    }(),
    zt.defaults = {},
    zt.STATES = at,
    zt
}
,
"object" == typeof exports && typeof module < "u" ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = typeof globalThis < "u" ? globalThis : n || self).Splide = t();
