!function() {
    function n(d) {
        var g = []
          , a = []
          , f = function(c) {
            for (var b = {}, e = 0; e < z.length; e++) {
                var h = z[e];
                if (h.Tag === c) {
                    b = h;
                    break
                }
                var k = (r = h.Tag,
                t = x = l = void 0,
                l = -1 !== (t = r).indexOf("http:") ? t.replace("http:", "") : t.replace("https:", ""),
                -1 !== (x = l.indexOf("?")) ? l.replace(l.substring(x), "") : l);
                if (c && (-1 !== c.indexOf(k) || -1 !== h.Tag.indexOf(c))) {
                    b = h;
                    break
                }
            }
            var r, l, x, t;
            return b
        }(d);
        return f.CategoryId && (g = f.CategoryId),
        f.Vendor && (a = f.Vendor.split(":")),
        !f.Tag && D && (a = g = function(c) {
            var b = []
              , e = function(h) {
                var k = document.createElement("a");
                k.href = h;
                h = k.hostname.split(".");
                return -1 !== h.indexOf("www") || 2 < h.length ? h.slice(1).join(".") : k.hostname
            }(c);
            y.some(function(h) {
                return h === e
            }) && (b = ["C0004"]);
            return b
        }(d)),
        {
            categoryIds: g,
            vsCatIds: a
        }
    }
    function A(d) {
        return !d || !d.length || (d && window.OptanonActiveGroups ? d.every(function(g) {
            return -1 !== window.OptanonActiveGroups.indexOf("," + g + ",")
        }) : void 0)
    }
    function m(d, g) {
        void 0 === g && (g = null);
        var a = window
          , f = a.OneTrust && a.OneTrust.IsVendorServiceEnabled;
        a = f && a.OneTrust.IsVendorServiceEnabled();
        return "Categories" === u || "All" === u && f && !a ? A(d) : ("Vendors" === u || "All" === u && f && a) && A(g)
    }
    function p(d) {
        d = d.getAttribute("class") || "";
        return -1 !== d.indexOf("optanon-category") || -1 !== d.indexOf("ot-vscat")
    }
    function q(d) {
        return d.hasAttribute("data-ot-ignore")
    }
    function v(d, g, a) {
        void 0 === a && (a = null);
        var f = d.join("-")
          , c = a && a.join("-")
          , b = g.getAttribute("class") || ""
          , e = ""
          , h = !1;
        d && d.length && -1 === b.indexOf("optanon-category-" + f) && (e = ("optanon-category-" + f).trim(),
        h = !0);
        a && a.length && -1 === b.indexOf("ot-vscat-" + c) && (e += " " + ("ot-vscat-" + c).trim(),
        h = !0);
        h && g.setAttribute("class", e + " " + b)
    }
    function B(d, g, a) {
        void 0 === a && (a = null);
        var f;
        d = d.join("-");
        a = a && a.join("-");
        return -1 === g.indexOf("optanon-category-" + d) && (f = ("optanon-category-" + d).trim()),
        -1 === g.indexOf("ot-vscat-" + a) && (f += " " + ("ot-vscat-" + a).trim()),
        f + " " + g
    }
    var z = JSON.parse('[{"Tag":"https://player.vimeo.com/api/player.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtm.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://assets.futurelearn.com/packs/packs/application-3e659248e499ed0d5b5e-1.5.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.southampton.ac.uk/assets/moocs/wellington/Battle-of-Waterloo-map.jpg","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube-nocookie.com/embed/nNljzrTEK7I","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://script.hotjar.com/modules.0fd8b750824023792fba.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://px.ads.linkedin.com/collect/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://nypi.dc-storm.com/t","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/ExcBrlqCd-M","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/7osdqPDqWBI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://script.crazyegg.com/pages/versioned/common-scripts/11.1.420.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://ut.ra.linksynergy.com/t","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://elearning.unipd.it/PuglieseQuizImages/tab.png","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://px.ads.linkedin.com/collect","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube-nocookie.com/embed/e6los7bWvD4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://tr.outbrain.com/cachedClickId","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.google-analytics.com/plugins/ua/ec.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://widget.surveymonkey.com/collect/website/js/cookie.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://consent.linksynergy.com/consent/v3/p","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://cdn.taboola.com/libtrc/unip/1312667/tfa.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://bat.bing.com/action/0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://assets.futurelearn.com/packs/packs/application-baec397dad96b1c350a7-1.5.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://bat.bing.com/bat.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://assets.futurelearn.com/packs/npm.honeybadger-js-86f99d1d61132ec8c645-1.5.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://staticw2.yotpo.com/oYzvzN8FHvZtrcVA2Iuee4yyfJRE34YrOHcYtEAc/widget.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://assets.futurelearn.com/packs/packs/application-9a12caad9d9c21c0ec15-1.5.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://9853912.fls.doubleclick.net/activityi","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://assets.futurelearn.com/packs/packs/analytics-f179e6795e528724b197-1.5.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.menti.com/umdkoyhj8k","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/3kBNErp4nlQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube-nocookie.com/embed/TvwCC2eA66E","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube-nocookie.com/embed/PlBCufehhxc","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/61RnrsWQE7A","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://assets.futurelearn.com/packs/packs/honeybadger-dba9fdc7fcd5d693844e-1.1.js","CategoryId":["C0002","C0003","C0004"],"Vendor":null},{"Tag":"https://googleads.g.doubleclick.net/pagead/viewthroughconversion/973080445/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://assets.futurelearn.com/packs/npm.honeybadger-js-f387150627cf0e2aaaa2-1.4.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube-nocookie.com/embed/OsJ30Xd_HGo","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.futurelearn.com/vendor/ahoy-0.4.0.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube-nocookie.com/embed/EKNGACGiCv8","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/7LDnjZdChGg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://intljs.rmtag.com/114483.ct.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube-nocookie.com/embed/YlzVC4NyusI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.futurelearn.com/vendor/ahoy.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.linkedin.com/px/li_sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://assets.futurelearn.com/packs/npm.honeybadger-js-f387150627cf0e2aaaa2-1.1.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube-nocookie.com/embed/NrmMk1Myrxc","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://static.mentimeter.com/static/fonts/web/menti-text/1.4/MentiText-SemiBold.otf","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://script.hotjar.com/modules.3123a148abe4a1b966d0.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/PlBCufehhxc","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://davidson-web2.weizmann.ac.il/davidsonRp/ye/FutureLearn/galore/lbb.jpeg","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://assets.futurelearn.com/packs/npm.honeybadger-js-cddfc47c50b038e6f46d-1.5.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://assets.futurelearn.com/packs/packs/analytics-5bf2a1e1ac0793c4eb57-1.5.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://snap.licdn.com/li.lms-analytics/insight.min.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://connect.facebook.net/signals/config/2441936382724811","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://trc.taboola.com/1312667/trc/3/json","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/QnMNC7MpLm0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.facebook.com/tr/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtag/js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://connect.facebook.net/signals/config/783518442847773","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://platform-api.sharethis.com/js/sharethis.js#property\x3d5ef0868a0ef96600120c1bf9\x26product\x3dinline-share-buttons","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://assets.futurelearn.com/packs/packs/application-099038eb7c1895f13b1c-1.4.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://images.unsplash.com/photo-1539077107320-3f0fb8c0fe58","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube-nocookie.com/embed/GCbIPIcdjgU","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgdyKwxyk21vkRuOYgYGRWQHMr0o0ahzl89A3h9tt1sSfW.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.futurelearn.com/cdn-cgi/challenge-platform/h/b/orchestrate/jsch/v1","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://assets.futurelearn.com/packs/packs/analytics-69ad6ea6318bb3ae1076-1.5.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://bam.nr-data.net/1/f9d051f404","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://bit.ly/2VtCsdz","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://images.pexels.com/photos/943630/pexels-photo-943630.jpeg","CategoryId":["C0003"],"Vendor":null}]')
      , D = JSON.parse("true")
      , u = JSON.parse('"Categories"')
      , y = [""];
    y = y.filter(function(d) {
        if ("null" !== d && d.trim().length)
            return d
    });
    var w = ["embed", "iframe", "img", "script"];
    (new MutationObserver(function(d) {
        Array.prototype.forEach.call(d, function(g) {
            Array.prototype.forEach.call(g.addedNodes, function(e) {
                var h, k;
                if (1 === e.nodeType && -1 !== w.indexOf(e.tagName.toLowerCase()) && !p(e) && !q(e))
                    if ("script" === e.tagName.toLowerCase()) {
                        if ((k = n(h = e.src || "")).categoryIds.length || k.vsCatIds.length) {
                            v(k.categoryIds, e, k.vsCatIds);
                            m(k.categoryIds, k.vsCatIds) || (e.type = "text/plain");
                            var r = function(l) {
                                "text/plain" === e.getAttribute("type") && l.preventDefault();
                                e.removeEventListener("beforescriptexecute", r)
                            };
                            e.addEventListener("beforescriptexecute", r)
                        }
                    } else
                        ((k = n(h = e.src || "")).categoryIds.length || k.vsCatIds.length) && (v(k.categoryIds, e, k.vsCatIds),
                        m(k.categoryIds, k.vsCatIds) || (e.removeAttribute("src"),
                        e.setAttribute("data-src", h)))
            });
            var a = g.target;
            if (g.attributeName && (!p(a) || !q(a)))
                if ("script" === a.nodeName.toLowerCase()) {
                    if ((b = n(c = a.src || "")).categoryIds.length || b.vsCatIds.length) {
                        v(b.categoryIds, a, b.vsCatIds);
                        m(b.categoryIds, b.vsCatIds) || (a.type = "text/plain");
                        var f = function(e) {
                            "text/plain" === a.getAttribute("type") && e.preventDefault();
                            a.removeEventListener("beforescriptexecute", f)
                        };
                        a.addEventListener("beforescriptexecute", f)
                    }
                } else if (-1 !== w.indexOf(g.target.nodeName.toLowerCase())) {
                    var c, b;
                    ((b = n(c = a.src || "")).categoryIds.length || b.vsCatIds.length) && (v(b.categoryIds, a, b.vsCatIds),
                    m(b.categoryIds, b.vsCatIds) || (a.removeAttribute("src"),
                    a.setAttribute("data-src", c)))
                }
        })
    }
    )).observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["src"]
    });
    var C = document.createElement;
    document.createElement = function() {
        for (var d = [], g = 0; g < arguments.length; g++)
            d[g] = arguments[g];
        if ("script" !== d[0].toLowerCase() && -1 === w.indexOf(d[0].toLowerCase()))
            return C.bind(document).apply(void 0, d);
        var a = C.bind(document).apply(void 0, d)
          , f = a.setAttribute.bind(a);
        return Object.defineProperties(a, {
            src: {
                get: function() {
                    return a.getAttribute("src") || ""
                },
                set: function(c) {
                    var b = "";
                    "string" == typeof c ? b = c : c instanceof Object && (b = c.toString());
                    b = n(b);
                    !b.categoryIds.length && !b.vsCatIds.length || "script" !== d[0].toLowerCase() || p(a) || m(b.categoryIds, b.vsCatIds) || q(a) ? !b.categoryIds.length || -1 === w.indexOf(d[0].toLowerCase()) || p(a) || m(b.categoryIds, b.vsCatIds) || q(a) ? f("src", c) : (a.removeAttribute("src"),
                    f("data-src", c),
                    c = a.getAttribute("class"),
                    c || (c = B(b.categoryIds, c || "", b.vsCatIds),
                    f("class", c))) : (f("type", "text/plain"),
                    f("src", c));
                    return !0
                }
            },
            type: {
                set: function(c) {
                    var b = n(a.src || "");
                    c = !b.categoryIds.length && !b.vsCatIds.length || p(a) || m(b.categoryIds, b.vsCatIds) || q(a) ? c : "text/plain";
                    return f("type", c),
                    !0
                }
            },
            class: {
                set: function(c) {
                    var b = n(a.src);
                    !b.categoryIds.length && !b.vsCatIds.length || p(a) || m(b.categoryIds, b.vsCatIds) || q(a) ? f("class", c) : (c = B(b.categoryIds, c, b.vsCatIds),
                    f("class", c));
                    return !0
                }
            }
        }),
        a.setAttribute = function(c, b, e) {
            "type" !== c && "src" !== c || e ? f(c, b) : a[c] = b
        }
        ,
        a
    }
}();
