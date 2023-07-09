function b64_hmac_sha1(e, t, n, a) {
    function i(e, t, n, a) {
        return e < 20 ? t & n | ~t & a : e < 40 ? t ^ n ^ a : e < 60 ? t & n | t & a | n & a : t ^ n ^ a
    }
    function r(e) {
        return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514
    }
    function s(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }
    function o(e, t) {
        return e << t | e >>> 32 - t
    }
    function l(e, t) {
        e[t >> 5] |= 128 << 24 - t % 32,
        e[15 + (t + 64 >> 9 << 4)] = t;
        for (var n = [80], a = 1732584193, l = -271733879, c = -1732584194, u = 271733878, d = -1009589776, p = 0; p < e.length; p += 16) {
            for (var g = a, h = l, f = c, m = u, v = d, y = 0; y < 80; y++) {
                n[y] = y < 16 ? e[p + y] : o(n[y - 3] ^ n[y - 8] ^ n[y - 14] ^ n[y - 16], 1);
                var w = s(s(o(a, 5), i(y, l, c, u)), s(s(d, n[y]), r(y)));
                d = u,
                u = c,
                c = o(l, 30),
                l = a,
                a = w
            }
            a = s(a, g),
            l = s(l, h),
            c = s(c, f),
            u = s(u, m),
            d = s(d, v)
        }
        return [a, l, c, u, d]
    }
    function c(e) {
        for (var t = [], n = (1 << a) - 1, i = 0; i < e.length * a; i += a)
            t[i >> 5] |= (e.charCodeAt(i / 8) & n) << 32 - a - i % 32;
        return t
    }
    return n || (n = "="),
    a || (a = 8),
    function(e, t) {
        return function(e) {
            for (var t = "", a = 0; a < 4 * e.length; a += 3)
                for (var i = (e[a >> 2] >> 8 * (3 - a % 4) & 255) << 16 | (e[a + 1 >> 2] >> 8 * (3 - (a + 1) % 4) & 255) << 8 | e[a + 2 >> 2] >> 8 * (3 - (a + 2) % 4) & 255, r = 0; r < 4; r++)
                    8 * a + 6 * r > 32 * e.length ? t += n : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >> 6 * (3 - r) & 63);
            return t
        }(function(e, t) {
            var n = c(e);
            n.length > 16 && (n = l(n, e.length * a));
            for (var i = [16], r = [16], s = 0; s < 16; s++)
                i[s] = 909522486 ^ n[s],
                r[s] = 1549556828 ^ n[s];
            var o = l(i.concat(c(t)), 512 + t.length * a);
            return l(r.concat(o), 672)
        }(e, t))
    }(e, t)
}
"object" == typeof Response && Response.create({
    prop: "width",
    prefix: "min-width- r src",
    breakpoints: [1500, 1200, 1020, 760, 320, 0],
    lazy: !0
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.CountUp = t()
}(this, (function(e, t, n) {
    return function(e, t, n, a, i, r) {
        function s(e) {
            return "number" == typeof e && !isNaN(e)
        }
        var o = this;
        if (o.version = function() {
            return "1.9.3"
        }
        ,
        o.options = {
            useEasing: !0,
            useGrouping: !0,
            separator: ",",
            decimal: ".",
            easingFn: function(e, t, n, a) {
                return n * (1 - Math.pow(2, -10 * e / a)) * 1024 / 1023 + t
            },
            formattingFn: function(e) {
                var t, n, a, i, r, s, l = e < 0;
                if (e = Math.abs(e).toFixed(o.decimals),
                n = (t = (e += "").split("."))[0],
                a = t.length > 1 ? o.options.decimal + t[1] : "",
                o.options.useGrouping) {
                    for (i = "",
                    r = 0,
                    s = n.length; r < s; ++r)
                        0 !== r && r % 3 == 0 && (i = o.options.separator + i),
                        i = n[s - r - 1] + i;
                    n = i
                }
                return o.options.numerals.length && (n = n.replace(/[0-9]/g, (function(e) {
                    return o.options.numerals[+e]
                }
                )),
                a = a.replace(/[0-9]/g, (function(e) {
                    return o.options.numerals[+e]
                }
                ))),
                (l ? "-" : "") + o.options.prefix + n + a + o.options.suffix
            },
            prefix: "",
            suffix: "",
            numerals: []
        },
        r && "object" == typeof r)
            for (var l in o.options)
                r.hasOwnProperty(l) && null !== r[l] && (o.options[l] = r[l]);
        "" === o.options.separator ? o.options.useGrouping = !1 : o.options.separator = "" + o.options.separator;
        for (var c = 0, u = ["webkit", "moz", "ms", "o"], d = 0; d < u.length && !window.requestAnimationFrame; ++d)
            window.requestAnimationFrame = window[u[d] + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[u[d] + "CancelAnimationFrame"] || window[u[d] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
            var n = (new Date).getTime()
              , a = Math.max(0, 16 - (n - c))
              , i = window.setTimeout((function() {
                e(n + a)
            }
            ), a);
            return c = n + a,
            i
        }
        ),
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        }
        ),
        o.initialize = function() {
            return !(!o.initialized && (o.error = "",
            o.d = "string" == typeof e ? document.getElementById(e) : e,
            o.d ? (o.startVal = Number(t),
            o.endVal = Number(n),
            s(o.startVal) && s(o.endVal) ? (o.decimals = Math.max(0, a || 0),
            o.dec = Math.pow(10, o.decimals),
            o.duration = 1e3 * Number(i) || 2e3,
            o.countDown = o.startVal > o.endVal,
            o.frameVal = o.startVal,
            o.initialized = !0,
            0) : (o.error = "[CountUp] startVal (" + t + ") or endVal (" + n + ") is not a number",
            1)) : (o.error = "[CountUp] target is null or undefined",
            1)))
        }
        ,
        o.printValue = function(e) {
            var t = o.options.formattingFn(e);
            "INPUT" === o.d.tagName ? this.d.value = t : "text" === o.d.tagName || "tspan" === o.d.tagName ? this.d.textContent = t : this.d.innerHTML = t
        }
        ,
        o.count = function(e) {
            o.startTime || (o.startTime = e),
            o.timestamp = e;
            var t = e - o.startTime;
            o.remaining = o.duration - t,
            o.options.useEasing ? o.countDown ? o.frameVal = o.startVal - o.options.easingFn(t, 0, o.startVal - o.endVal, o.duration) : o.frameVal = o.options.easingFn(t, o.startVal, o.endVal - o.startVal, o.duration) : o.countDown ? o.frameVal = o.startVal - (o.startVal - o.endVal) * (t / o.duration) : o.frameVal = o.startVal + (o.endVal - o.startVal) * (t / o.duration),
            o.countDown ? o.frameVal = o.frameVal < o.endVal ? o.endVal : o.frameVal : o.frameVal = o.frameVal > o.endVal ? o.endVal : o.frameVal,
            o.frameVal = Math.round(o.frameVal * o.dec) / o.dec,
            o.printValue(o.frameVal),
            t < o.duration ? o.rAF = requestAnimationFrame(o.count) : o.callback && o.callback()
        }
        ,
        o.start = function(e) {
            o.initialize() && (o.callback = e,
            o.rAF = requestAnimationFrame(o.count))
        }
        ,
        o.pauseResume = function() {
            o.paused ? (o.paused = !1,
            delete o.startTime,
            o.duration = o.remaining,
            o.startVal = o.frameVal,
            requestAnimationFrame(o.count)) : (o.paused = !0,
            cancelAnimationFrame(o.rAF))
        }
        ,
        o.reset = function() {
            o.paused = !1,
            delete o.startTime,
            o.initialized = !1,
            o.initialize() && (cancelAnimationFrame(o.rAF),
            o.printValue(o.startVal))
        }
        ,
        o.update = function(e) {
            if (o.initialize()) {
                if (!s(e = Number(e)))
                    return void (o.error = "[CountUp] update() - new endVal is not a number: " + e);
                o.error = "",
                e !== o.frameVal && (cancelAnimationFrame(o.rAF),
                o.paused = !1,
                delete o.startTime,
                o.startVal = o.frameVal,
                o.endVal = e,
                o.countDown = o.startVal > o.endVal,
                o.rAF = requestAnimationFrame(o.count))
            }
        }
        ,
        o.initialize() && o.printValue(o.startVal)
    }
}
)),
function(e, t) {
    var n, a = e.jQuery || e.Cowboy || (e.Cowboy = {});
    a.throttle = n = function(e, n, i, r) {
        var s, o = 0;
        function l() {
            var a = this
              , l = +new Date - o
              , c = arguments;
            function u() {
                o = +new Date,
                i.apply(a, c)
            }
            function d() {
                s = t
            }
            r && !s && u(),
            s && clearTimeout(s),
            r === t && l > e ? u() : !0 !== n && (s = setTimeout(r ? d : u, r === t ? e - l : e))
        }
        return "boolean" != typeof n && (r = i,
        i = n,
        n = t),
        a.guid && (l.guid = i.guid = i.guid || a.guid++),
        l
    }
    ,
    a.debounce = function(e, a, i) {
        return i === t ? n(e, a, !1) : n(e, i, !1 !== a)
    }
}(this),
function(e) {
    var t = {
        init: function(n) {
            var a = e.extend({
                items: 1,
                itemsOnPage: 1,
                pages: 0,
                displayedPages: 5,
                edges: 2,
                currentPage: 0,
                useAnchors: !0,
                hrefTextPrefix: "#page-",
                hrefTextSuffix: "",
                prevText: "Prev",
                nextText: "Next",
                ellipseText: "&hellip;",
                ellipsePageSet: !0,
                cssStyle: "light-theme",
                listStyle: "",
                labelMap: [],
                selectOnClick: !0,
                nextAtFront: !1,
                invertPageOrder: !1,
                useStartEdge: !0,
                useEndEdge: !0,
                onPageClick: function(e, t) {},
                onInit: function() {}
            }, n || {})
              , i = this;
            return a.pages = a.pages ? a.pages : Math.ceil(a.items / a.itemsOnPage) ? Math.ceil(a.items / a.itemsOnPage) : 1,
            a.currentPage ? a.currentPage = a.currentPage - 1 : a.currentPage = a.invertPageOrder ? a.pages - 1 : 0,
            a.halfDisplayed = a.displayedPages / 2,
            this.each((function() {
                i.addClass(a.cssStyle + " simple-pagination").data("pagination", a),
                t._draw.call(i)
            }
            )),
            a.onInit(),
            this
        },
        selectPage: function(e) {
            return t._selectPage.call(this, e - 1),
            this
        },
        prevPage: function() {
            var e = this.data("pagination");
            return e.invertPageOrder ? e.currentPage < e.pages - 1 && t._selectPage.call(this, e.currentPage + 1) : e.currentPage > 0 && t._selectPage.call(this, e.currentPage - 1),
            this
        },
        nextPage: function() {
            var e = this.data("pagination");
            return e.invertPageOrder ? e.currentPage > 0 && t._selectPage.call(this, e.currentPage - 1) : e.currentPage < e.pages - 1 && t._selectPage.call(this, e.currentPage + 1),
            this
        },
        getPagesCount: function() {
            return this.data("pagination").pages
        },
        setPagesCount: function(e) {
            this.data("pagination").pages = e
        },
        getCurrentPage: function() {
            return this.data("pagination").currentPage + 1
        },
        destroy: function() {
            return this.empty(),
            this
        },
        drawPage: function(e) {
            var n = this.data("pagination");
            return n.currentPage = e - 1,
            this.data("pagination", n),
            t._draw.call(this),
            this
        },
        redraw: function() {
            return t._draw.call(this),
            this
        },
        disable: function() {
            var e = this.data("pagination");
            return e.disabled = !0,
            this.data("pagination", e),
            t._draw.call(this),
            this
        },
        enable: function() {
            var e = this.data("pagination");
            return e.disabled = !1,
            this.data("pagination", e),
            t._draw.call(this),
            this
        },
        updateItems: function(e) {
            var n = this.data("pagination");
            n.items = e,
            n.pages = t._getPages(n),
            this.data("pagination", n),
            t._draw.call(this)
        },
        updateItemsOnPage: function(e) {
            var n = this.data("pagination");
            return n.itemsOnPage = e,
            n.pages = t._getPages(n),
            this.data("pagination", n),
            t._selectPage.call(this, 0),
            this
        },
        getItemsOnPage: function() {
            return this.data("pagination").itemsOnPage
        },
        _draw: function() {
            var n, a = this.data("pagination"), i = t._getInterval(a);
            t.destroy.call(this);
            var r = "UL" === ("function" == typeof this.prop ? this.prop("tagName") : this.attr("tagName")) ? this : e("<ul" + (a.listStyle ? ' class="' + a.listStyle + '"' : "") + "></ul>").appendTo(this);
            if (a.prevText && t._appendItem.call(this, a.invertPageOrder ? a.currentPage + 1 : a.currentPage - 1, {
                text: a.prevText,
                classes: "prev"
            }),
            a.nextText && a.nextAtFront && t._appendItem.call(this, a.invertPageOrder ? a.currentPage - 1 : a.currentPage + 1, {
                text: a.nextText,
                classes: "next"
            }),
            a.invertPageOrder) {
                if (i.end < a.pages && a.edges > 0) {
                    if (a.useStartEdge) {
                        var s = Math.max(a.pages - a.edges, i.end);
                        for (n = a.pages - 1; n >= s; n--)
                            t._appendItem.call(this, n)
                    }
                    a.pages - a.edges > i.end && a.pages - a.edges - i.end != 1 ? r.append('<li class="disabled"><span class="ellipse">' + a.ellipseText + "</span></li>") : a.pages - a.edges - i.end == 1 && t._appendItem.call(this, i.end)
                }
            } else if (i.start > 0 && a.edges > 0) {
                if (a.useStartEdge) {
                    var o = Math.min(a.edges, i.start);
                    for (n = 0; n < o; n++)
                        t._appendItem.call(this, n)
                }
                a.edges < i.start && i.start - a.edges != 1 ? r.append('<li class="disabled"><span class="ellipse">' + a.ellipseText + "</span></li>") : i.start - a.edges == 1 && t._appendItem.call(this, a.edges)
            }
            if (a.invertPageOrder)
                for (n = i.end - 1; n >= i.start; n--)
                    t._appendItem.call(this, n);
            else
                for (n = i.start; n < i.end; n++)
                    t._appendItem.call(this, n);
            if (a.invertPageOrder) {
                if (i.start > 0 && a.edges > 0 && (a.edges < i.start && i.start - a.edges != 1 ? r.append('<li class="disabled"><span class="ellipse">' + a.ellipseText + "</span></li>") : i.start - a.edges == 1 && t._appendItem.call(this, a.edges),
                a.useEndEdge))
                    for (n = (o = Math.min(a.edges, i.start)) - 1; n >= 0; n--)
                        t._appendItem.call(this, n)
            } else if (i.end < a.pages && a.edges > 0 && (a.pages - a.edges > i.end && a.pages - a.edges - i.end != 1 ? r.append('<li class="disabled"><span class="ellipse">' + a.ellipseText + "</span></li>") : a.pages - a.edges - i.end == 1 && t._appendItem.call(this, i.end),
            a.useEndEdge))
                for (n = s = Math.max(a.pages - a.edges, i.end); n < a.pages; n++)
                    t._appendItem.call(this, n);
            a.nextText && !a.nextAtFront && t._appendItem.call(this, a.invertPageOrder ? a.currentPage - 1 : a.currentPage + 1, {
                text: a.nextText,
                classes: "next"
            }),
            a.ellipsePageSet && !a.disabled && t._ellipseClick.call(this, r)
        },
        _getPages: function(e) {
            return Math.ceil(e.items / e.itemsOnPage) || 1
        },
        _getInterval: function(e) {
            return {
                start: Math.ceil(e.currentPage > e.halfDisplayed ? Math.max(Math.min(e.currentPage - e.halfDisplayed, e.pages - e.displayedPages), 0) : 0),
                end: Math.ceil(e.currentPage > e.halfDisplayed ? Math.min(e.currentPage + e.halfDisplayed, e.pages) : Math.min(e.displayedPages, e.pages))
            }
        },
        _appendItem: function(n, a) {
            var i, r, s = this, o = s.data("pagination"), l = e("<li></li>"), c = s.find("ul");
            i = {
                text: (n = n < 0 ? 0 : n < o.pages ? n : o.pages - 1) + 1,
                classes: ""
            },
            o.labelMap.length && o.labelMap[n] && (i.text = o.labelMap[n]),
            i = e.extend(i, a || {}),
            n == o.currentPage || o.disabled ? (o.disabled || "prev" === i.classes || "next" === i.classes ? l.addClass("disabled") : l.addClass("active"),
            r = e('<span class="current">' + i.text + "</span>")) : (r = e(o.useAnchors ? '<a href="' + o.hrefTextPrefix + (n + 1) + o.hrefTextSuffix + '" class="page-link">' + i.text + "</a>" : "<span >" + i.text + "</span>")).click((function(e) {
                return t._selectPage.call(s, n, e)
            }
            )),
            i.classes && r.addClass(i.classes),
            l.append(r),
            c.length ? c.append(l) : s.append(l)
        },
        _selectPage: function(e, n) {
            var a = this.data("pagination");
            return a.currentPage = e,
            a.selectOnClick && t._draw.call(this),
            a.onPageClick(e + 1, n)
        },
        _ellipseClick: function(n) {
            var a = this
              , i = this.data("pagination")
              , r = n.find(".ellipse");
            r.addClass("clickable").parent().removeClass("disabled"),
            r.click((function(n) {
                if (!i.disable) {
                    var s = e(this)
                      , o = (parseInt(s.parent().prev().text(), 10) || 0) + 1;
                    s.html('<input type="number" min="1" max="' + i.pages + '" step="1" value="' + o + '">').find("input").focus().click((function(e) {
                        e.stopPropagation()
                    }
                    )).keyup((function(n) {
                        var s = e(this).val();
                        13 === n.which && "" !== s ? s > 0 && s <= i.pages && t._selectPage.call(a, s - 1) : 27 === n.which && r.empty().html(i.ellipseText)
                    }
                    )).bind("blur", (function(n) {
                        var s = e(this).val();
                        return "" !== s && t._selectPage.call(a, s - 1),
                        r.empty().html(i.ellipseText),
                        !1
                    }
                    ))
                }
                return !1
            }
            ))
        }
    };
    e.fn.pagination = function(n) {
        return t[n] && "_" != n.charAt(0) ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.pagination") : t.init.apply(this, arguments)
    }
}(jQuery),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    var t = -1
      , n = -1
      , a = function(e) {
        return parseFloat(e) || 0
    }
      , i = function(t) {
        var n = e(t)
          , i = null
          , r = [];
        return n.each((function() {
            var t = e(this)
              , n = t.offset().top - a(t.css("margin-top"))
              , s = r.length > 0 ? r[r.length - 1] : null;
            null === s ? r.push(t) : Math.floor(Math.abs(i - n)) <= 1 ? r[r.length - 1] = s.add(t) : r.push(t),
            i = n
        }
        )),
        r
    }
      , r = function(t) {
        var n = {
            byRow: !0,
            property: "height",
            target: null,
            remove: !1
        };
        return "object" == typeof t ? e.extend(n, t) : ("boolean" == typeof t ? n.byRow = t : "remove" === t && (n.remove = !0),
        n)
    }
      , s = e.fn.matchHeight = function(t) {
        var n = r(t);
        if (n.remove) {
            var a = this;
            return this.css(n.property, ""),
            e.each(s._groups, (function(e, t) {
                t.elements = t.elements.not(a)
            }
            )),
            this
        }
        return this.length <= 1 && !n.target || (s._groups.push({
            elements: this,
            options: n
        }),
        s._apply(this, n)),
        this
    }
    ;
    s.version = "master",
    s._groups = [],
    s._throttle = 80,
    s._maintainScroll = !1,
    s._beforeUpdate = null,
    s._afterUpdate = null,
    s._rows = i,
    s._parse = a,
    s._parseOptions = r,
    s._apply = function(t, n) {
        var o = r(n)
          , l = e(t)
          , c = [l]
          , u = e(window).scrollTop()
          , d = e("html").outerHeight(!0)
          , p = l.parents().filter(":hidden");
        return p.each((function() {
            var t = e(this);
            t.data("style-cache", t.attr("style"))
        }
        )),
        p.css("display", "block"),
        o.byRow && !o.target && (l.each((function() {
            var t = e(this)
              , n = t.css("display");
            "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block"),
            t.data("style-cache", t.attr("style")),
            t.css({
                display: n,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden"
            })
        }
        )),
        c = i(l),
        l.each((function() {
            var t = e(this);
            t.attr("style", t.data("style-cache") || "")
        }
        ))),
        e.each(c, (function(t, n) {
            var i = e(n)
              , r = 0;
            if (o.target)
                r = o.target.outerHeight(!1);
            else {
                if (o.byRow && i.length <= 1)
                    return void i.css(o.property, "");
                i.each((function() {
                    var t = e(this)
                      , n = t.attr("style")
                      , a = t.css("display");
                    "inline-block" !== a && "flex" !== a && "inline-flex" !== a && (a = "block");
                    var i = {
                        display: a
                    };
                    i[o.property] = "",
                    t.css(i),
                    t.outerHeight(!1) > r && (r = t.outerHeight(!1)),
                    n ? t.attr("style", n) : t.css("display", "")
                }
                ))
            }
            i.each((function() {
                var t = e(this)
                  , n = 0;
                o.target && t.is(o.target) || ("border-box" !== t.css("box-sizing") && (n += a(t.css("border-top-width")) + a(t.css("border-bottom-width")),
                n += a(t.css("padding-top")) + a(t.css("padding-bottom"))),
                t.css(o.property, r - n + "px"))
            }
            ))
        }
        )),
        p.each((function() {
            var t = e(this);
            t.attr("style", t.data("style-cache") || null)
        }
        )),
        s._maintainScroll && e(window).scrollTop(u / d * e("html").outerHeight(!0)),
        this
    }
    ,
    s._applyDataApi = function() {
        var t = {};
        e("[data-match-height], [data-mh]").each((function() {
            var n = e(this)
              , a = n.attr("data-mh") || n.attr("data-match-height");
            t[a] = a in t ? t[a].add(n) : n
        }
        )),
        e.each(t, (function() {
            this.matchHeight(!0)
        }
        ))
    }
    ;
    var o = function(t) {
        s._beforeUpdate && s._beforeUpdate(t, s._groups),
        e.each(s._groups, (function() {
            s._apply(this.elements, this.options)
        }
        )),
        s._afterUpdate && s._afterUpdate(t, s._groups)
    };
    s._update = function(a, i) {
        if (i && "resize" === i.type) {
            var r = e(window).width();
            if (r === t)
                return;
            t = r
        }
        a ? -1 === n && (n = setTimeout((function() {
            o(i),
            n = -1
        }
        ), s._throttle)) : o(i)
    }
    ,
    e(s._applyDataApi),
    e(window).bind("load", (function(e) {
        s._update(!1, e)
    }
    )),
    e(window).bind("resize orientationchange", (function(e) {
        s._update(!0, e)
    }
    ))
}
));
var absolute_url = window.location.protocol + "//" + window.location.hostname;
sessionId = "undefined" != typeof sessionId ? sessionId : 1,
language = "undefined" != typeof language ? language : "en";
var head = document.getElementsByTagName("head")[0]
  , insertBefore = head.insertBefore;
function checkWindow() {
    let e = $(window).width()
      , t = $(".sidebar");
    e < ($("#dashboard").length > 0 ? 1180 : 1279) ? t.addClass("hide-sidebar") : t.removeClass("hide-sidebar")
}
function message(e, t, n) {
    $(".messages-q").fadeIn();
    n = n || e;
    var a = document.createElement("div");
    a.innerHTML = '<div class="message ' + e.toLowerCase() + '"><span class="icon-cross2"></span><h6>' + n + "</h6><p>" + t + "</p></div>",
    a.className = "message-outer",
    $(".messages-q").append(a),
    setTimeout((function() {
        $(a).addClass("active")
    }
    ), 100),
    function(e) {
        setTimeout((function() {
            $(e).removeClass("active").delay(400).fadeOut((function() {
                $(this).remove(),
                0 == $(".message").length && $(".messages-q").fadeOut()
            }
            ))
        }
        ), 5e3)
    }(a);
    var i = $(".messages-q .message-outer").length;
    if (i > 0)
        for (var r = i, s = 10; r > 0; r--) {
            var o = $(".messages-q .message-outer:nth-child(" + r + ")");
            o.css("bottom", s + "px"),
            s += o.height()
        }
}
function loadScript(e, t) {
    var n = document.getElementsByTagName("head")[0]
      , a = document.createElement("script")
      , i = {
        script: e,
        loaded: !0
    };
    a.type = "text/javascript",
    a.src = e,
    void 0 !== t && (a.onreadystatechange = function() {
        t(i)
    }
    ,
    a.onload = function() {
        t(i)
    }
    ),
    n.appendChild(a)
}
function sharing() {
    var e = 780
      , t = 550;
    $(document).on("click", ".share-link, .social-buttons > a:not(.course-mail-share, .content-mail-share), .social-buttons > span:not(.course-mail-share, .content-mail-share, .copy-link)", (function(n) {
        var a = Math.floor(($(window).width() - e) / 2)
          , i = Math.floor(($(window).height() - t) / 2)
          , r = $(this).attr("data-href") || $(this).prop("href")
          , s = window.open(r, "social", "width=" + e + ",height=" + t + ",left=" + a + ",top=" + i + ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
        s && (s.focus(),
        n.preventDefault())
    }
    ))
}
function fcm() {
    if (firebase.initializeApp({
        apiKey: "AIzaSyAOSgGrMfLooTWvkTjGpL3bOPEcDnaqT58",
        authDomain: "push-notifications-dcd25.firebaseapp.com",
        databaseURL: "push-notifications-dcd25.firebaseio.com",
        projectId: "push-notifications-dcd25",
        storageBucket: "push-notifications-dcd25.appspot.com",
        messagingSenderId: "978221646603"
    }),
    firebase.messaging.isSupported()) {
        var e = firebase.messaging();
        function t() {
            Notification.requestPermission().then((function(i) {
                r() || ("granted" === i ? (console.log("Notification permission granted."),
                localStorage.setItem("push-popup", "granted"),
                acceptedPush(),
                e.getToken().then((function(e) {
                    e ? a(e) : (console.log("No Instance ID token available. Request permission to generate one."),
                    s(!1))
                }
                )).catch((function(e) {
                    n("An error occurred while retrieving token. ", e)
                }
                ))) : (localStorage.setItem("push-popup", "declined"),
                console.log("Unable to get permission to notify.")),
                navigator.userAgent.search("Firefox") && document.removeEventListener("click", t, !1))
            }
            ))
        }
        function n(e, t) {
            console.error("Unable to retrieve refreshed token ", t),
            s(!1)
        }
        function a(e) {
            r() ? n() : $.ajax({
                url: "/firebase/save-token",
                type: "POST",
                data: {
                    token: e,
                    timezone_offset: 60 * (new Date).getTimezoneOffset()
                },
                success: function(e) {
                    s(!0),
                    console.log(e)
                },
                error: function(e) {
                    console.log(e)
                }
            })
        }
        function i(e) {
            o() ? n() : $.ajax({
                url: "/firebase/pair-user",
                type: "POST",
                data: {
                    token: e
                },
                success: function(e) {
                    var t;
                    t = !0,
                    window.localStorage.setItem("pairedToToken", t ? "1" : "0"),
                    console.log(e)
                },
                error: function(e) {
                    console.log(e)
                }
            })
        }
        function r() {
            return "1" === window.localStorage.getItem("sentToServer")
        }
        function s(e) {
            window.localStorage.setItem("sentToServer", e ? "1" : "0")
        }
        function o() {
            return "1" === window.localStorage.getItem("pairedToToken")
        }
        e.usePublicVapidKey("BJmQKzMmJAXrZeRQUjQQiZDnxf6U1ShyUjGVKDaFwJxYal1VrT_jW9GURFTqijJu1jrUxh-RMsgn6RwfmrJFVT8"),
        -1 !== navigator.userAgent.indexOf("Firefox") ? document.addEventListener("click", t, !1) : t(),
        e.onTokenRefresh((function() {
            e.getToken().then((function(e) {
                console.log("Token refreshed."),
                s(!1),
                a(e)
            }
            )).catch((function(e) {
                n("Unable to retrieve refreshed token ", e)
            }
            ))
        }
        )),
        e.onMessage((function(e) {
            console.log("onMessage", e)
        }
        )),
        $("header").hasClass("loggedin") && !o() && (console.log("WE ARE LOGGED IN"),
        e.getToken().then((function(e) {
            i(e)
        }
        )).catch((function(e) {
            n(0, e)
        }
        )))
    } else
        console.log("Browser doesn't support Firebase")
}
function countDown(e) {
    var t = $(e).attr("data-time").split(/[- :]/)
      , n = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5])).getTime()
      , a = $(e).hasClass("countdown__timer--labels")
      , i = setInterval((function() {
        var t = (new Date).getTime()
          , r = n - t;
        if (r <= 0)
            return clearInterval(i),
            void $(".pre-sale__bubble, .pre-sale__popup").hide();
        var s = Math.floor(r / 864e5)
          , o = Math.floor(r % 864e5 / 36e5)
          , l = Math.floor(r % 36e5 / 6e4)
          , c = Math.floor(r % 6e4 / 1e3);
        c = (c < 10 ? "0" : "") + c,
        $(e).find(".countdown__timer-days").text(s + "" + (a ? "d" : "")),
        $(e).find(".countdown__timer-hours").text(o + "" + (a ? "h" : "")),
        $(e).find(".countdown__timer-minutes").text(l + "" + (a ? "m" : "")),
        $(e).find(".countdown__timer-seconds").text(c + "" + (a ? "s" : ""))
    }
    ), 1e3);
    $(e).addClass("started"),
    $(e).css("opacity", 1)
}
function initialiseCaptchas() {
    if ($(".g-recaptcha").length > 0) {
        var e = $(".g-recaptcha").parents("form").attr("name").split("-")[0];
        $('textarea[id="g-recaptcha-response"]').attr("name", e + "-g-recaptcha-response")
    }
}
function validForTranslation(e) {
    if (void 0 !== e && "string" == typeof e)
        return -1 === e.indexOf(" ") && e.indexOf(".") > -1
}
function setLsItem(e, t) {
    "undefined" != typeof localStorage && null !== t && t.length < 150 && localStorage.setItem(e, "" + t)
}
function getLsItem(e) {
    if ("undefined" != typeof localStorage)
        return localStorage.getItem(e)
}
function isEmpty(e) {
    for (var t in e)
        if (e.hasOwnProperty(t))
            return !1;
    return JSON.stringify(e) === JSON.stringify({})
}
head.insertBefore = function(e, t) {
    e.href && e.href.indexOf("//fonts.googleapis.com/css?family=Roboto") > -1 || insertBefore.call(head, e, t)
}
,
$.ajaxSetup({
    headers: {
        "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content"),
        Authorization: "Cookie " + window.sessionId
    }
}),
$.ajaxPrefilter((function(e, t, n) {
    e.beforeSend || (e.beforeSend = function(t) {
        t.setRequestHeader("X-HEADER-HOST", b64_hmac_sha1("eec72464333d1da18082b2d29b79eb4aef3ceb6fd60734f1c1d4ebe30b022bd1", e.url))
    }
    )
}
)),
checkWindow(),
$(document).on("click", ".messages-q .message-outer", (function() {
    $(this).parent().fadeOut((function() {
        $(this).remove()
    }
    ))
}
)),
$(document).ready((function() {
    $(".match-height").matchHeight(),
    $.fn.matchHeight._apply(".course-holder, .course .ad"),
    sharing(),
    $(".fix-comma").each((function() {
        let e = $(this).text();
        -1 === e.indexOf(",") && $(this).text(parseInt(e).toLocaleString("en-US"))
    }
    )),
    $(document).on("click", ".card", (function(e) {
        e.preventDefault(),
        $(window).width() < 991 ? $(e.target).is("a") ? window.location.href = $(e.target).attr("href") : window.location.href = $(e.target).parents(".card").find(".card__more").attr("href") : $(e.target).is("a") ? window.location.href = $(e.target).attr("href") : window.location.href = $(e.target).parents(".card").find(".card__start").attr("href")
    }
    )),
    $(".message").parent().delay(8e3).fadeOut(),
    $(".faq-title").click((function() {
        $(this).toggleClass("open").next().slideToggle()
    }
    )),
    $(".question").click((function() {
        var e = $(this);
        $(this).next(".answer").slideToggle((function() {
            $(this)[0].clientHeight > 0 ? e.parent().find(".reveal > span.icon-chevron-down").css("transform", "rotate(180deg)") : e.parent().find(".reveal > span.icon-chevron-down").css("transform", "rotate(0deg)")
        }
        ))
    }
    )),
    $(".overlay").click((function(e) {
        ($(e.target).hasClass("overlay") || $(e.target).hasClass("close") || $(e.target).hasClass("icon-cross2")) && $(".overlay").fadeOut()
    }
    ))
}
)),
Date.prototype.getMonthLabel = function() {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][this.getMonth()]
}
,
Object.size = function(e) {
    var t, n = 0;
    for (t in e)
        e.hasOwnProperty(t) && n++;
    return n
}
,
Handlebars.registerHelper("ifCond", (function(e, t, n, a) {
    switch (t) {
    case "==":
        return e == n ? a.fn(this) : a.inverse(this);
    case "===":
        return e === n ? a.fn(this) : a.inverse(this);
    case "!=":
        return e != n ? a.fn(this) : a.inverse(this);
    case "!==":
        return e !== n ? a.fn(this) : a.inverse(this);
    case "<":
        return e < n ? a.fn(this) : a.inverse(this);
    case "<=":
        return e <= n ? a.fn(this) : a.inverse(this);
    case ">":
        return e > n ? a.fn(this) : a.inverse(this);
    case ">=":
        return e >= n ? a.fn(this) : a.inverse(this);
    case "&&":
        return e && n ? a.fn(this) : a.inverse(this);
    case "||":
        return e || n ? a.fn(this) : a.inverse(this);
    default:
        return a.inverse(this)
    }
}
)),
Handlebars.registerHelper("slugify", (function(e) {
    return e.toLowerCase().replace(/[ ]+/g, "-")
}
)),
$(document).ready((function() {
    if ($(".btn-twitter-utm").length) {
        var e = $(".btn-twitter-utm").attr("href").split("&text=")
          , t = e[0] + "%3Futm_campaign=social_share%26utm_source=Twitter%26utm_medium=social&text=" + e[1];
        $(".btn-twitter-utm").each((function() {
            $(this).attr("href", t)
        }
        ))
    }
}
)),
window.opener && window.opener.postMessage(window.location.href + "-close", "*");
var translations = []
  , apiUrl = $("body").data("api_endpoint")
  , Lang = {
    opts: {
        runAt: Math.floor(Date.now() / 1e3),
        ignoreLs: !1
    },
    init: function() {
        var e = this;
        $.ajax({
            url: apiUrl + "/translations/multiple",
            type: "GET",
            contentType: "application/json",
            success: function(t, n, a) {
                if (a.getResponseHeader("Last-Modified")) {
                    var i = Math.floor(new Date(a.getResponseHeader("Last-Modified")) / 1e3);
                    getLsItem("updated_at") && i > parseInt(getLsItem("updated_at")) && (setLsItem("updated_at", e.opts.runAt),
                    e.opts.ignoreLs = !0)
                }
            },
            error: function(t, n) {
                if ("timeout" === n) {
                    var a = getLsItem("updated_at");
                    a && parseInt(a) - e.opts.runAt > 86400 && (e.opts.ignoreLs = !0)
                }
            }
        })
    },
    get: function(e, t, n) {
        if (e.indexOf("routes") > -1 ? translations[t] = n || "" : void 0 !== t && (translations[t] = '<em class="update-' + t + '">' + (n || "") + "</em>"),
        getLsItem(language + ":" + e) && 0 == this.opts.ignoreLs)
            return void 0 !== t ? void (translations[t] = getLsItem(language + ":" + e)) : getLsItem(language + ":" + e);
        this.contactApi(e, (function(e) {
            if (void 0 === t)
                return e;
            if ("" !== e) {
                translations[t] = e;
                var n = document.querySelectorAll(".update-" + t);
                if (n.length > 0)
                    for (var a = 0; a < n.length; ++a)
                        n[a].innerHTML = e;
                else
                    setTimeout((function() {
                        var n = document.querySelectorAll(".update-" + t);
                        if (n.length > 0)
                            for (var a = 0; a < n.length; ++a)
                                n[a].innerHTML = e
                    }
                    ), 3e3)
            }
        }
        ))
    },
    message: function(e, t, n) {
        language = "undefined" != typeof language ? language : "en";
        language;
        if (t = void 0 === t ? "" : t,
        n = void 0 === n ? "" : n,
        getLsItem(language + ":" + e[0]) && getLsItem(language + ":" + e[1]) && 0 == this.opts.ignoreLs)
            return message(getLsItem(language + ":" + e[0]), t + " " + getLsItem(language + ":" + e[1]) + " " + n);
        if (validForTranslation(e[0]) && validForTranslation(e[1]))
            return this.contactApi(e, (function(e) {
                message(e[0], t + " " + e[1] + " " + n)
            }
            ));
        if (!validForTranslation(e[0]) && !validForTranslation(e[1]))
            return message(e[0], t + " " + e[1] + " " + n);
        var a = validForTranslation(e[0]) ? 0 : 1;
        if (!getLsItem(language + ":" + e[a]) || 0 != this.opts.ignoreLs)
            return this.contactApi(e[a], (function(i) {
                0 === a ? message(i, t + " " + e[1] + " " + n) : message(e[0], t + " " + i + " " + n)
            }
            ));
        0 === a ? message(getLsItem(language + ":" + e[0]), t + " " + e[1] + " " + n) : message(e[0], t + " " + getLsItem(language + ":" + e[1]) + " " + n)
    },
    contactApi: function(e, t) {
        language = "undefined" != typeof language ? language : "en";
        var n = this
          , a = []
          , i = "";
        if ("string" != typeof e)
            for (var r in e)
                a.push(language + ":" + e[r]),
                i += language + ":" + e[r] + "&v=";
        else
            a.push(language + ":" + e),
            i += language + ":" + e;
        $.ajax({
            url: apiUrl + "/translations/multiple?v=" + i,
            type: "GET",
            timeout: 3e3,
            contentType: "application/json",
            success: function(i) {
                var r = i.result.translations
                  , s = [];
                if (!isEmpty(r)) {
                    if (setLsItem("updated_at", "" + n.opts.runAt),
                    "string" != typeof e) {
                        for (var o in a)
                            setLsItem(a[o], r[a[o]]),
                            s.push(r[a[o]]);
                        return t(s)
                    }
                    var l = r[language + ":" + e];
                    return "" !== l && setLsItem(a[0], l),
                    t(l)
                }
            },
            error: function(e) {}
        })
    }
};
function innerPageStickyAd(e, t) {
    var n = e || ".inner-page-sticky-ad"
      , a = t || 155;
    if ($(n).length) {
        $(n).offset().top;
        var i = $(n);
        i.css({
            position: "absolute",
            top: a + "px"
        }),
        $(window).scroll($.throttle(0, (function() {
            var e = $("header").outerHeight() + ($(".player-header").length > 0 ? $(".player-header").height() : 0);
            $(window).scrollTop() + e >= i.offset().top && (i.offset().top,
            i.css({
                position: "fixed"
            })),
            a >= $(window).scrollTop() + e && i.css({
                position: "absolute"
            }),
            i.offset().top + i.height() - e >= $("footer").offset().top - e ? i.css({
                top: $("footer").offset().top - e - (i.height() + 20),
                position: "absolute"
            }) : a >= $(window).scrollTop() + e ? i.css({
                position: "absolute",
                top: a + "px"
            }) : ".occupations-single-sticky-ad" === n ? i.css({
                top: "155px",
                position: "fixed"
            }) : i.css({
                top: a,
                position: "fixed"
            })
        }
        )))
    }
}
if (Lang.init(),
$(".search-results-container:not(.occupation)").length > 0) {
    if ("undefined" != typeof Search)
        var search = new Search;
    $(document).ready((function(e) {
        if (e(".sticky-ad").length > 0 && "undefined" !== e(".sticky-ad").offset()) {
            var t = window.innerHeight - document.getElementsByTagName("header")[0].clientHeight;
            innerPageStickyAd(".sticky-ad", e(".header__outer").height() + (t >= 609 && t < 630 ? 6 : 20))
        }
    }
    ))
}
if ($(".sticky-ad:not(.inner-page-sticky-ad)").length > 0)
    if ($(".search-sticky--index").length > 0)
        if ($(window).width() < 1151 || $(window).height() < 600)
            $(".sticky-ad").each((function() {
                $(this).html(" ")
            }
            ));
        else {
            var header = $(".player-header").length > 0 ? $(".player-header").height() : $(".header__outer").height()
              , viewable_height = window.innerHeight - header;
            $(".sticky-ad ins").each((function() {
                if (window.innerWidth < 1440 && ($(this)[0].style.width = "150px"),
                viewable_height < 609) {
                    var e = $(this)[0]
                      , t = document.getElementById("search-sticky");
                    t.style.cssText = "width:120px;height:240px",
                    t.classList.add("search-sticky--small"),
                    e.style.cssText = "display:block;width:120px;height:240px",
                    e.removeAttribute("data-ad-format"),
                    $("#learning-environment").length > 0 && $(e).parent().addClass("sticky-small")
                } else
                    viewable_height >= 609 && viewable_height < 630 && $(this)[0].classList.add("search-sticky--condensed");
                try {
                    (adsbygoogle = window.adsbygoogle || []).push({})
                } catch (e) {
                    console.log(e)
                }
            }
            ))
        }
    else if ($(window).width() < 1151 || $(window).height() < 702)
        $(".sticky-ad").html(" ");
    else if ($(".testimonial-page-ad").length > 0 && $(window).width() < 1351)
        $(".sticky-ad").html(" ");
    else
        try {
            (adsbygoogle = window.adsbygoogle || []).push({})
        } catch (e) {
            console.log(e)
        }
$(".inner-page-sticky-ad:not(.new-landing-width, .occupations-advert, .player-page-sticky, .results-ad)").length > 0 && (window.innerWidth < 1570 || window.innerWidth < 711) && $(".inner-page-sticky-ad").html(" "),
$(".sticky-ad--welliba").length > 0 && window.innerWidth <= 1220 && $(".inner-page-sticky-ad").html(" "),
$(".inner-page-sticky-ad.occupations-advert, .inner-page-sticky-ad.results-ad").length > 0 && window.innerWidth < 1200 && $(".inner-page-sticky-ad").html(" "),
$(".player-page-sticky:not(.le-sticky)").length > 0 && window.innerWidth < 1439 && $(".inner-page-sticky-ad").html(" "),
$(".le-sticky").length > 0 && window.innerWidth < 1250 && $(".inner-page-sticky-ad").html(" "),
$(".inner-page-sticky-ad.new-landing-width:not(.dfp-sticky)").length > 0 && (window.innerWidth < 1201 || window.innerHeight < 706 ? $(".inner-page-sticky-ad").html(" ") : (adsbygoogle = window.adsbygoogle || []).push({})),
Handlebars.registerPartial("course-object-blank", Handlebars.template({
    compiler: [8, ">= 4.3.0"],
    main: function(e, t, n, a, i) {
        var r = e.lookupProperty || function(e, t) {
            if (Object.prototype.hasOwnProperty.call(e, t))
                return e[t]
        }
        ;
        return '<li> <div class="course-block course-block--' + e.escapeExpression("function" == typeof (n = null != (n = r(n, "class") || (null != t ? r(t, "class") : t)) ? n : e.hooks.helperMissing) ? n.call(null != t ? t : e.nullContext || {}, {
            name: "class",
            hash: {},
            data: i,
            loc: {
                start: {
                    line: 1,
                    column: 44
                },
                end: {
                    line: 1,
                    column: 55
                }
            }
        }) : n) + ' blank"> <div class="course-block-img-outer"> <div class="course-block-img"> <div class="img-cover"></div> </div> </div> <div class="course-block-content"> <span class="course-type"></span> <a href="" class="course-category"></a> <h4><span></span><span></span></h4> <div class="mobile-read-more"> </div> </div> </div>\n</li>'
    },
    useData: !0
})),
Handlebars.registerPartial("course-object", Handlebars.template({
    1: function(e, t, n, a, i) {
        return " card--long "
    },
    3: function(e, t, n, a, i) {
        return " card--wide "
    },
    5: function(e, t, n, a, i) {
        return " Certificate "
    },
    7: function(e, t, n, a, i) {
        return " Diploma "
    },
    9: function(e, t, n, a, i) {
        var r = e.lookupProperty || function(e, t) {
            if (Object.prototype.hasOwnProperty.call(e, t))
                return e[t]
        }
        ;
        return " <span>" + e.escapeExpression(e.lambda(null != (e = null != t ? r(t, "course") : t) ? r(e, "root_category_slug") : e, t)) + "</span> "
    },
    11: function(e, t, n, a, i) {
        return " card__details--progress "
    },
    13: function(e, t, n, a, i) {
        var r, s = e.lambda, o = e.escapeExpression;
        e = e.lookupProperty || function(e, t) {
            if (Object.prototype.hasOwnProperty.call(e, t))
                return e[t]
        }
        ;
        return ' <div class="c__progress"> <div class="c__bar"> <div class="c__bar-inner" style="width:' + o(s(null != (r = null != t ? e(t, "course") : t) ? e(r, "progress") : r, t)) + '%"></div> </div> <div class="c__score"><span>' + o(s(null != (r = null != t ? e(t, "course") : t) ? e(r, "progress") : r, t)) + "%</span> complete</div> </div> "
    },
    15: function(e, t, n, a, i) {
        var r = e.escapeExpression
          , s = e.lambda
          , o = e.lookupProperty || function(e, t) {
            if (Object.prototype.hasOwnProperty.call(e, t))
                return e[t]
        }
        ;
        return ' <span class="card__publisher" style="display: none"> <a href="' + r("function" == typeof (n = null != (n = o(n, "more_info") || (null != t ? o(t, "more_info") : t)) ? n : e.hooks.helperMissing) ? n.call(null != t ? t : e.nullContext || {}, {
            name: "more_info",
            hash: {},
            data: i,
            loc: {
                start: {
                    line: 1,
                    column: 1176
                },
                end: {
                    line: 1,
                    column: 1191
                }
            }
        }) : n) + '#l-main-pub" title="' + r(s(null != (e = null != t ? o(t, "course") : t) ? o(e, "publisher_display_name") : e, t)) + '"> By ' + r(s(null != (e = null != t ? o(t, "course") : t) ? o(e, "publisher_display_name") : e, t)) + " </a> </span> "
    },
    17: function(e, t, n, a, i) {
        var r = e.lookupProperty || function(e, t) {
            if (Object.prototype.hasOwnProperty.call(e, t))
                return e[t]
        }
        ;
        return ' <div class="card__outcomes"> <h5>You will learn how to</h5> <ul> ' + (null != (n = (r(n, "outcomes") || t && r(t, "outcomes") || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, null != (n = null != t ? r(t, "course") : t) ? r(n, "outcomes") : n, null != (n = null != t ? r(t, "course") : t) ? r(n, "name") : n, null != t ? r(t, "more_info") : t, {
            name: "outcomes",
            hash: {},
            data: i,
            loc: {
                start: {
                    line: 1,
                    column: 1404
                },
                end: {
                    line: 1,
                    column: 1458
                }
            }
        })) ? n : "") + " </ul> </div> "
    },
    19: function(e, t, n, a, i) {
        return " add-course-id "
    },
    21: function(e, t, n, a, i) {
        return " Continue "
    },
    23: function(e, t, n, a, i) {
        return " Start Learning "
    },
    compiler: [8, ">= 4.3.0"],
    main: function(e, t, n, a, i) {
        var r, s, o = null != t ? t : e.nullContext || {}, l = e.hooks.helperMissing, c = "function", u = e.escapeExpression, d = e.lambda, p = e.lookupProperty || function(e, t) {
            if (Object.prototype.hasOwnProperty.call(e, t))
                return e[t]
        }
        ;
        return '<div class="card card--' + u(typeof (s = null != (s = p(n, "background") || (null != t ? p(t, "background") : t)) ? s : l) == c ? s.call(o, {
            name: "background",
            hash: {},
            data: i,
            loc: {
                start: {
                    line: 1,
                    column: 23
                },
                end: {
                    line: 1,
                    column: 39
                }
            }
        }) : s) + " " + (null != (r = p(n, "if").call(o, null != t ? p(t, "long_outcome") : t, {
            name: "if",
            hash: {},
            fn: e.program(1, i, 0),
            inverse: e.noop,
            data: i,
            loc: {
                start: {
                    line: 1,
                    column: 40
                },
                end: {
                    line: 1,
                    column: 79
                }
            }
        })) ? r : "") + " " + (null != (r = p(n, "if").call(o, null != t ? p(t, "wide") : t, {
            name: "if",
            hash: {},
            fn: e.program(3, i, 0),
            inverse: e.noop,
            data: i,
            loc: {
                start: {
                    line: 1,
                    column: 80
                },
                end: {
                    line: 1,
                    column: 111
                }
            }
        })) ? r : "") + '"> <div class="card__img"> <span class="course-type-' + u(d(null != (r = null != t ? p(t, "course") : t) ? p(r, "course_type_id") : r, t)) + '"> ' + (null != (r = (p(n, "ifCond") || t && p(t, "ifCond") || l).call(o, null != (r = null != t ? p(t, "course") : t) ? p(r, "course_type_id") : r, "==", 1, {
            name: "ifCond",
            hash: {},
            fn: e.program(5, i, 0),
            inverse: e.program(7, i, 0),
            data: i,
            loc: {
                start: {
                    line: 1,
                    column: 193
                },
                end: {
                    line: 1,
                    column: 274
                }
            }
        })) ? r : "") + ' </span> <img class="lazyload" width="254px" height="170px" data-src="' + u(d(null != (r = null != t ? p(t, "course") : t) ? p(r, "courseImgUrl") : r, t)) + '" title="' + u(d(null != (r = null != t ? p(t, "course") : t) ? p(r, "name") : r, t)) + '" /> </div> <div class="card__info"> <div class="card__top"> ' + (null != (r = p(n, "unless").call(o, null != t ? p(t, "mobile") : t, {
            name: "unless",
            hash: {},
            fn: e.program(9, i, 0),
            inverse: e.noop,
            data: i,
            loc: {
                start: {
                    line: 1,
                    column: 456
                },
                end: {
                    line: 1,
                    column: 531
                }
            }
        })) ? r : "") + " <h3>" + u(d(null != (r = null != t ? p(t, "course") : t) ? p(r, "name") : r, t)) + '</h3> </div> <div class="card__bottom"> <div class="card__details ' + (null != (r = p(n, "if").call(o, null != (r = null != t ? p(t, "course") : t) ? p(r, "progress") : r, {
            name: "if",
            hash: {},
            fn: e.program(11, i, 0),
            inverse: e.noop,
            data: i,
            loc: {
                start: {
                    line: 1,
                    column: 619
                },
                end: {
                    line: 1,
                    column: 674
                }
            }
        })) ? r : "") + '"> ' + (null != (r = p(n, "if").call(o, null != (r = null != t ? p(t, "course") : t) ? p(r, "progress") : r, {
            name: "if",
            hash: {},
            fn: e.program(13, i, 0),
            inverse: e.noop,
            data: i,
            loc: {
                start: {
                    line: 1,
                    column: 677
                },
                end: {
                    line: 1,
                    column: 912
                }
            }
        })) ? r : "") + ' <span class="card__duration" title="Estimated duration">' + u(d(null != (r = null != t ? p(t, "course") : t) ? p(r, "avg_duration") : r, t)) + ' hrs</span> <span class="card__enrolled" title="Users enrolled">' + u(d(null != (r = null != t ? p(t, "course") : t) ? p(r, "enrolled") : r, t)) + " learners</span> " + (null != (r = p(n, "unless").call(o, null != t ? p(t, "mobile") : t, {
            name: "unless",
            hash: {},
            fn: e.program(15, i, 0),
            inverse: e.noop,
            data: i,
            loc: {
                start: {
                    line: 1,
                    column: 1095
                },
                end: {
                    line: 1,
                    column: 1312
                }
            }
        })) ? r : "") + " </div> " + (null != (r = p(n, "unless").call(o, null != t ? p(t, "mobile") : t, {
            name: "unless",
            hash: {},
            fn: e.program(17, i, 0),
            inverse: e.noop,
            data: i,
            loc: {
                start: {
                    line: 1,
                    column: 1320
                },
                end: {
                    line: 1,
                    column: 1483
                }
            }
        })) ? r : "") + ' <div class="card__nav"> <a class="card__more card__more--mobile" title="' + u(d(null != (r = null != t ? p(t, "course") : t) ? p(r, "name") : r, t)) + ' - Landing Page" href="' + u(typeof (s = null != (s = p(n, "more_info") || (null != t ? p(t, "more_info") : t)) ? s : l) == c ? s.call(o, {
            name: "more_info",
            hash: {},
            data: i,
            loc: {
                start: {
                    line: 1,
                    column: 1596
                },
                end: {
                    line: 1,
                    column: 1611
                }
            }
        }) : s) + '">More Info</a> <a class="card__start ' + (null != (r = p(n, "unless").call(o, null != (r = null != t ? p(t, "course") : t) ? p(r, "progress") : r, {
            name: "unless",
            hash: {},
            fn: e.program(19, i, 0),
            inverse: e.noop,
            data: i,
            loc: {
                start: {
                    line: 1,
                    column: 1649
                },
                end: {
                    line: 1,
                    column: 1702
                }
            }
        })) ? r : "") + '" title="' + u(d(null != (r = null != t ? p(t, "course") : t) ? p(r, "name") : r, t)) + ' - Start Learning" href="' + u(typeof (s = null != (s = p(n, "course_url") || (null != t ? p(t, "course_url") : t)) ? s : l) == c ? s.call(o, {
            name: "course_url",
            hash: {},
            data: i,
            loc: {
                start: {
                    line: 1,
                    column: 1753
                },
                end: {
                    line: 1,
                    column: 1769
                }
            }
        }) : s) + '" data-id="' + u(d(null != (r = null != t ? p(t, "course") : t) ? p(r, "id") : r, t)) + '"> ' + (null != (r = p(n, "if").call(o, null != (r = null != t ? p(t, "course") : t) ? p(r, "progress") : r, {
            name: "if",
            hash: {},
            fn: e.program(21, i, 0),
            inverse: e.program(23, i, 0),
            data: i,
            loc: {
                start: {
                    line: 1,
                    column: 1798
                },
                end: {
                    line: 1,
                    column: 1862
                }
            }
        })) ? r : "") + " </a> </div> </div> </div> \x3c!-- END card__info --\x3e\n</div>"
    },
    useData: !0
})),
Handlebars.registerHelper("outcomes", (function(e, t, n) {
    let a = $("<div>" + e + "</div>").find("ul")
      , i = t.length <= 32 && $(window).width() > 991 ? 4 : 3;
    if (a.length > 0) {
        let e = a.find("li")
          , r = ""
          , s = ' <a class="card__more" title="' + t + '- Landing Page" href="' + n + '#outcomes">Read More</a>';
        for (let t = 0; t < i; t++) {
            let n = t === i - 1 ? 45 : 56
              , a = $(e[t]).text();
            $(e[t]).text().length > n ? r += '<li class="visible" title="' + a + '">' + a.substring(0, n) + "..." : r += '<li class="br" title="' + a + '">' + a,
            r += (t === i - 1 ? s : "") + "</li>"
        }
        return r
    }
}
));
class CourseCard {
    createBlanks(e) {
        let t = ""
          , n = Handlebars.partials["course-object-blank"]({
            class: "new"
        });
        for (var a = 0; a < e; a++)
            t += n;
        return t
    }
    buildCourseItem(e, t, n) {
        let a = void 0 !== e.headline ? e.headline.replace(/(<([^>]+)>)/gi, "") : ""
          , i = transResumeUrl + "index.html" + e.id
          , r = n || !1;
        return e.progress = null,
        0 === $(".head__u--in").length && void 0 === e.type_name && (i = transModulePage.replace("/9999", "index.html" + e.slug) + "#event=login"),
        "undefined" != typeof enrolled_object && null !== enrolled_object && void 0 !== enrolled_object[e.id] && (e.progress = Math.floor(enrolled_object[e.id])),
        "it" === e.root_category_slug && (e.root_category_slug = "Information Technology"),
        void 0 !== e.type && (e.course_type_id = "Certificate" === e.type ? 1 : 2),
        void 0 !== e.avg_duration && e.avg_duration.indexOf(".") > -1 && (e.avg_duration = Math.ceil(parseFloat(e.avg_duration.split("-")[0])) + " - " + Math.ceil(parseFloat(e.avg_duration.split("-")[1]))),
        e.enrolled = parseInt(e.enrolled ?? "5000").toLocaleString("en-US"),
        Handlebars.partials["course-object"]({
            course: e,
            long_outcome: e.name.length <= 32,
            course_url: i,
            more_info: transCourseUrl.replace("replace_me", "") + e.slug,
            background: t || "white",
            wide: r,
            mobile: $(window).width() < 768,
            course_intro: a.length > 120 ? a.substring(0, 120) + "..." : a,
            new_course: !0
        })
    }
}
