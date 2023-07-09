globalThis.$localize = Object.assign(globalThis.$localize || {}, {
    locale: "en"
});
"use strict";
(function(global) {
    global.ng = global.ng || {};
    global.ng.common = global.ng.common || {};
    global.ng.common.locales = global.ng.common.locales || {};
    const u = undefined;
    function plural(val) {
        const n = val
          , i = Math.floor(Math.abs(val))
          , v = val.toString().replace(/^[^.]*\.?/, "").length;
        if (i === 1 && v === 0)
            return 1;
        return 5
    }
    global.ng.common.locales["en"] = ["en", [["a", "p"], ["AM", "PM"], u], [["AM", "PM"], u, u], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], u, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", u, "{1} 'at' {0}", u], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", plural, [[["mi", "n", "in the morning", "in the afternoon", "in the evening", "at night"], ["midnight", "noon", "in the morning", "in the afternoon", "in the evening", "at night"], u], [["midnight", "noon", "morning", "afternoon", "evening", "night"], u, u], ["00:00", "12:00", ["06:00", "12:00"], ["12:00", "18:00"], ["18:00", "21:00"], ["21:00", "06:00"]]]]
}
)(typeof globalThis !== "undefined" && globalThis || typeof global !== "undefined" && global || typeof window !== "undefined" && window);
;(self.webpackChunkalison = self.webpackChunkalison || []).push([[179], {
    6789: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            lV: ()=>Q,
            u8: ()=>X
        });
        var Q, X, me, _ = P(6895), L = P(8256), O = P(2340);
        (Q || (Q = {})).initialize = function Ae() {
            const ue = (0,
            L.f3M)(L.Lbi);
            return ()=>{
                !function Ce(ue) {
                    if (!(0,
                    _.NF)(ue) || O.N.local || !window)
                        return;
                    const q = `${window.location.protocol}//${window.location.hostname}`;
                    O.N.appUrl = q,
                    O.N.apiUrl = q + "/api/v1",
                    ("https://alison.com" === q || "https://admin.alison.com" === q) && (O.N.dataApiUrl = "https://api.alison.com/v0.1")
                }(ue)
            }
        }
        ,
        (X || (X = {})).mapToRoute = function Ae(Ce, ue) {
            return Ce.map(q=>({
                path: q,
                ...ue
            }))
        }
        ,
        function(De) {
            De.toBoolean = function Ae(Ce) {
                switch (Ce?.toLowerCase()?.trim()) {
                case "false":
                case "no":
                case "0":
                case null:
                case void 0:
                    return !1;
                default:
                    return !!Ce
                }
            }
        }(me || (me = {}))
    }
    ,
    625: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            z: ()=>O
        });
        var _ = P(1135)
          , L = P(8256);
        let O = (()=>{
            class Q {
                constructor() {
                    this._showAds$ = new _.X(!0)
                }
                getShowAds() {
                    return this._showAds$.asObservable()
                }
                setShowAds(me) {
                    this._showAds$.next(me)
                }
            }
            return Q.\u0275fac = function(me) {
                return new (me || Q)
            }
            ,
            Q.\u0275prov = L.Yz7({
                token: Q,
                factory: Q.\u0275fac,
                providedIn: "root"
            }),
            Q
        }
        )()
    }
    ,
    2340: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            N: ()=>_
        });
        const _ = {
            production: !0,
            local: !1,
            X_HEADER_HOST: "oTbrPD9HRO+jdciawiXuh4vUgB8=",
            appUrl: "",
            apiUrl: "",
            dataApiUrl: "",
            sessionID: ""
        }
    }
    ,
    191: (Ve,ae,P)=>{
        "use strict";
        var _ = P(1481)
          , L = P(6895)
          , O = P(8256)
          , Q = P(9646)
          , X = P(9751)
          , me = P(4351)
          , De = P(9300)
          , Ae = P(4004);
        class Ce {
        }
        class ue {
        }
        class q {
            constructor(o) {
                this.normalizedNames = new Map,
                this.lazyUpdate = null,
                o ? this.lazyInit = "string" == typeof o ? ()=>{
                    this.headers = new Map,
                    o.split("\n").forEach(l=>{
                        const p = l.indexOf(":");
                        if (p > 0) {
                            const E = l.slice(0, p)
                              , I = E.toLowerCase()
                              , N = l.slice(p + 1).trim();
                            this.maybeSetNormalizedName(E, I),
                            this.headers.has(I) ? this.headers.get(I).push(N) : this.headers.set(I, [N])
                        }
                    }
                    )
                }
                : ()=>{
                    this.headers = new Map,
                    Object.entries(o).forEach(([l,p])=>{
                        let E;
                        if (E = "string" == typeof p ? [p] : "number" == typeof p ? [p.toString()] : p.map(I=>I.toString()),
                        E.length > 0) {
                            const I = l.toLowerCase();
                            this.headers.set(I, E),
                            this.maybeSetNormalizedName(l, I)
                        }
                    }
                    )
                }
                : this.headers = new Map
            }
            has(o) {
                return this.init(),
                this.headers.has(o.toLowerCase())
            }
            get(o) {
                this.init();
                const l = this.headers.get(o.toLowerCase());
                return l && l.length > 0 ? l[0] : null
            }
            keys() {
                return this.init(),
                Array.from(this.normalizedNames.values())
            }
            getAll(o) {
                return this.init(),
                this.headers.get(o.toLowerCase()) || null
            }
            append(o, l) {
                return this.clone({
                    name: o,
                    value: l,
                    op: "a"
                })
            }
            set(o, l) {
                return this.clone({
                    name: o,
                    value: l,
                    op: "s"
                })
            }
            delete(o, l) {
                return this.clone({
                    name: o,
                    value: l,
                    op: "d"
                })
            }
            maybeSetNormalizedName(o, l) {
                this.normalizedNames.has(l) || this.normalizedNames.set(l, o)
            }
            init() {
                this.lazyInit && (this.lazyInit instanceof q ? this.copyFrom(this.lazyInit) : this.lazyInit(),
                this.lazyInit = null,
                this.lazyUpdate && (this.lazyUpdate.forEach(o=>this.applyUpdate(o)),
                this.lazyUpdate = null))
            }
            copyFrom(o) {
                o.init(),
                Array.from(o.headers.keys()).forEach(l=>{
                    this.headers.set(l, o.headers.get(l)),
                    this.normalizedNames.set(l, o.normalizedNames.get(l))
                }
                )
            }
            clone(o) {
                const l = new q;
                return l.lazyInit = this.lazyInit && this.lazyInit instanceof q ? this.lazyInit : this,
                l.lazyUpdate = (this.lazyUpdate || []).concat([o]),
                l
            }
            applyUpdate(o) {
                const l = o.name.toLowerCase();
                switch (o.op) {
                case "a":
                case "s":
                    let p = o.value;
                    if ("string" == typeof p && (p = [p]),
                    0 === p.length)
                        return;
                    this.maybeSetNormalizedName(o.name, l);
                    const E = ("a" === o.op ? this.headers.get(l) : void 0) || [];
                    E.push(...p),
                    this.headers.set(l, E);
                    break;
                case "d":
                    const I = o.value;
                    if (I) {
                        let N = this.headers.get(l);
                        if (!N)
                            return;
                        N = N.filter(x=>-1 === I.indexOf(x)),
                        0 === N.length ? (this.headers.delete(l),
                        this.normalizedNames.delete(l)) : this.headers.set(l, N)
                    } else
                        this.headers.delete(l),
                        this.normalizedNames.delete(l)
                }
            }
            forEach(o) {
                this.init(),
                Array.from(this.normalizedNames.keys()).forEach(l=>o(this.normalizedNames.get(l), this.headers.get(l)))
            }
        }
        class Ze {
            encodeKey(o) {
                return Je(o)
            }
            encodeValue(o) {
                return Je(o)
            }
            decodeKey(o) {
                return decodeURIComponent(o)
            }
            decodeValue(o) {
                return decodeURIComponent(o)
            }
        }
        const Ue = /%(\d[a-f0-9])/gi
          , Oe = {
            40: "@",
            "3A": ":",
            24: "$",
            "2C": ",",
            "3B": ";",
            "3D": "=",
            "3F": "?",
            "2F": "/"
        };
        function Je(v) {
            return encodeURIComponent(v).replace(Ue, (o,l)=>Oe[l] ?? o)
        }
        function Be(v) {
            return `${v}`
        }
        class We {
            constructor(o={}) {
                if (this.updates = null,
                this.cloneFrom = null,
                this.encoder = o.encoder || new Ze,
                o.fromString) {
                    if (o.fromObject)
                        throw new Error("Cannot specify both fromString and fromObject.");
                    this.map = function fe(v, o) {
                        const l = new Map;
                        return v.length > 0 && v.replace(/^\?/, "").split("&").forEach(E=>{
                            const I = E.indexOf("=")
                              , [N,x] = -1 == I ? [o.decodeKey(E), ""] : [o.decodeKey(E.slice(0, I)), o.decodeValue(E.slice(I + 1))]
                              , U = l.get(N) || [];
                            U.push(x),
                            l.set(N, U)
                        }
                        ),
                        l
                    }(o.fromString, this.encoder)
                } else
                    o.fromObject ? (this.map = new Map,
                    Object.keys(o.fromObject).forEach(l=>{
                        const p = o.fromObject[l]
                          , E = Array.isArray(p) ? p.map(Be) : [Be(p)];
                        this.map.set(l, E)
                    }
                    )) : this.map = null
            }
            has(o) {
                return this.init(),
                this.map.has(o)
            }
            get(o) {
                this.init();
                const l = this.map.get(o);
                return l ? l[0] : null
            }
            getAll(o) {
                return this.init(),
                this.map.get(o) || null
            }
            keys() {
                return this.init(),
                Array.from(this.map.keys())
            }
            append(o, l) {
                return this.clone({
                    param: o,
                    value: l,
                    op: "a"
                })
            }
            appendAll(o) {
                const l = [];
                return Object.keys(o).forEach(p=>{
                    const E = o[p];
                    Array.isArray(E) ? E.forEach(I=>{
                        l.push({
                            param: p,
                            value: I,
                            op: "a"
                        })
                    }
                    ) : l.push({
                        param: p,
                        value: E,
                        op: "a"
                    })
                }
                ),
                this.clone(l)
            }
            set(o, l) {
                return this.clone({
                    param: o,
                    value: l,
                    op: "s"
                })
            }
            delete(o, l) {
                return this.clone({
                    param: o,
                    value: l,
                    op: "d"
                })
            }
            toString() {
                return this.init(),
                this.keys().map(o=>{
                    const l = this.encoder.encodeKey(o);
                    return this.map.get(o).map(p=>l + "=" + this.encoder.encodeValue(p)).join("&")
                }
                ).filter(o=>"" !== o).join("&")
            }
            clone(o) {
                const l = new We({
                    encoder: this.encoder
                });
                return l.cloneFrom = this.cloneFrom || this,
                l.updates = (this.updates || []).concat(o),
                l
            }
            init() {
                null === this.map && (this.map = new Map),
                null !== this.cloneFrom && (this.cloneFrom.init(),
                this.cloneFrom.keys().forEach(o=>this.map.set(o, this.cloneFrom.map.get(o))),
                this.updates.forEach(o=>{
                    switch (o.op) {
                    case "a":
                    case "s":
                        const l = ("a" === o.op ? this.map.get(o.param) : void 0) || [];
                        l.push(Be(o.value)),
                        this.map.set(o.param, l);
                        break;
                    case "d":
                        if (void 0 === o.value) {
                            this.map.delete(o.param);
                            break
                        }
                        {
                            let p = this.map.get(o.param) || [];
                            const E = p.indexOf(Be(o.value));
                            -1 !== E && p.splice(E, 1),
                            p.length > 0 ? this.map.set(o.param, p) : this.map.delete(o.param)
                        }
                    }
                }
                ),
                this.cloneFrom = this.updates = null)
            }
        }
        class ye {
            constructor() {
                this.map = new Map
            }
            set(o, l) {
                return this.map.set(o, l),
                this
            }
            get(o) {
                return this.map.has(o) || this.map.set(o, o.defaultValue()),
                this.map.get(o)
            }
            delete(o) {
                return this.map.delete(o),
                this
            }
            has(o) {
                return this.map.has(o)
            }
            keys() {
                return this.map.keys()
            }
        }
        function Ne(v) {
            return typeof ArrayBuffer < "u" && v instanceof ArrayBuffer
        }
        function ot(v) {
            return typeof Blob < "u" && v instanceof Blob
        }
        function re(v) {
            return typeof FormData < "u" && v instanceof FormData
        }
        class se {
            constructor(o, l, p, E) {
                let I;
                if (this.url = l,
                this.body = null,
                this.reportProgress = !1,
                this.withCredentials = !1,
                this.responseType = "json",
                this.method = o.toUpperCase(),
                function J(v) {
                    switch (v) {
                    case "DELETE":
                    case "GET":
                    case "HEAD":
                    case "OPTIONS":
                    case "JSONP":
                        return !1;
                    default:
                        return !0
                    }
                }(this.method) || E ? (this.body = void 0 !== p ? p : null,
                I = E) : I = p,
                I && (this.reportProgress = !!I.reportProgress,
                this.withCredentials = !!I.withCredentials,
                I.responseType && (this.responseType = I.responseType),
                I.headers && (this.headers = I.headers),
                I.context && (this.context = I.context),
                I.params && (this.params = I.params)),
                this.headers || (this.headers = new q),
                this.context || (this.context = new ye),
                this.params) {
                    const N = this.params.toString();
                    if (0 === N.length)
                        this.urlWithParams = l;
                    else {
                        const x = l.indexOf("?");
                        this.urlWithParams = l + (-1 === x ? "?" : x < l.length - 1 ? "&" : "") + N
                    }
                } else
                    this.params = new We,
                    this.urlWithParams = l
            }
            serializeBody() {
                return null === this.body ? null : Ne(this.body) || ot(this.body) || re(this.body) || function Ee(v) {
                    return typeof URLSearchParams < "u" && v instanceof URLSearchParams
                }(this.body) || "string" == typeof this.body ? this.body : this.body instanceof We ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
            }
            detectContentTypeHeader() {
                return null === this.body || re(this.body) ? null : ot(this.body) ? this.body.type || null : Ne(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof We ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || "boolean" == typeof this.body ? "application/json" : null
            }
            clone(o={}) {
                const l = o.method || this.method
                  , p = o.url || this.url
                  , E = o.responseType || this.responseType
                  , I = void 0 !== o.body ? o.body : this.body
                  , N = void 0 !== o.withCredentials ? o.withCredentials : this.withCredentials
                  , x = void 0 !== o.reportProgress ? o.reportProgress : this.reportProgress;
                let U = o.headers || this.headers
                  , V = o.params || this.params;
                const Se = o.context ?? this.context;
                return void 0 !== o.setHeaders && (U = Object.keys(o.setHeaders).reduce((Ie,c)=>Ie.set(c, o.setHeaders[c]), U)),
                o.setParams && (V = Object.keys(o.setParams).reduce((Ie,c)=>Ie.set(c, o.setParams[c]), V)),
                new se(l,p,I,{
                    params: V,
                    headers: U,
                    context: Se,
                    reportProgress: x,
                    responseType: E,
                    withCredentials: N
                })
            }
        }
        var le = (()=>((le = le || {})[le.Sent = 0] = "Sent",
        le[le.UploadProgress = 1] = "UploadProgress",
        le[le.ResponseHeader = 2] = "ResponseHeader",
        le[le.DownloadProgress = 3] = "DownloadProgress",
        le[le.Response = 4] = "Response",
        le[le.User = 5] = "User",
        le))();
        class je {
            constructor(o, l=200, p="OK") {
                this.headers = o.headers || new q,
                this.status = void 0 !== o.status ? o.status : l,
                this.statusText = o.statusText || p,
                this.url = o.url || null,
                this.ok = this.status >= 200 && this.status < 300
            }
        }
        class yt extends je {
            constructor(o={}) {
                super(o),
                this.type = le.ResponseHeader
            }
            clone(o={}) {
                return new yt({
                    headers: o.headers || this.headers,
                    status: void 0 !== o.status ? o.status : this.status,
                    statusText: o.statusText || this.statusText,
                    url: o.url || this.url || void 0
                })
            }
        }
        class Fe extends je {
            constructor(o={}) {
                super(o),
                this.type = le.Response,
                this.body = void 0 !== o.body ? o.body : null
            }
            clone(o={}) {
                return new Fe({
                    body: void 0 !== o.body ? o.body : this.body,
                    headers: o.headers || this.headers,
                    status: void 0 !== o.status ? o.status : this.status,
                    statusText: o.statusText || this.statusText,
                    url: o.url || this.url || void 0
                })
            }
        }
        class Y extends je {
            constructor(o) {
                super(o, 0, "Unknown Error"),
                this.name = "HttpErrorResponse",
                this.ok = !1,
                this.message = this.status >= 200 && this.status < 300 ? `Http failure during parsing for ${o.url || "(unknown url)"}` : `Http failure response for ${o.url || "(unknown url)"}: ${o.status} ${o.statusText}`,
                this.error = o.error || null
            }
        }
        function K(v, o) {
            return {
                body: o,
                headers: v.headers,
                context: v.context,
                observe: v.observe,
                params: v.params,
                reportProgress: v.reportProgress,
                responseType: v.responseType,
                withCredentials: v.withCredentials
            }
        }
        let ie = (()=>{
            class v {
                constructor(l) {
                    this.handler = l
                }
                request(l, p, E={}) {
                    let I;
                    if (l instanceof se)
                        I = l;
                    else {
                        let U, V;
                        U = E.headers instanceof q ? E.headers : new q(E.headers),
                        E.params && (V = E.params instanceof We ? E.params : new We({
                            fromObject: E.params
                        })),
                        I = new se(l,p,void 0 !== E.body ? E.body : null,{
                            headers: U,
                            context: E.context,
                            params: V,
                            reportProgress: E.reportProgress,
                            responseType: E.responseType || "json",
                            withCredentials: E.withCredentials
                        })
                    }
                    const N = (0,
                    Q.of)(I).pipe((0,
                    me.b)(U=>this.handler.handle(U)));
                    if (l instanceof se || "events" === E.observe)
                        return N;
                    const x = N.pipe((0,
                    De.h)(U=>U instanceof Fe));
                    switch (E.observe || "body") {
                    case "body":
                        switch (I.responseType) {
                        case "arraybuffer":
                            return x.pipe((0,
                            Ae.U)(U=>{
                                if (null !== U.body && !(U.body instanceof ArrayBuffer))
                                    throw new Error("Response is not an ArrayBuffer.");
                                return U.body
                            }
                            ));
                        case "blob":
                            return x.pipe((0,
                            Ae.U)(U=>{
                                if (null !== U.body && !(U.body instanceof Blob))
                                    throw new Error("Response is not a Blob.");
                                return U.body
                            }
                            ));
                        case "text":
                            return x.pipe((0,
                            Ae.U)(U=>{
                                if (null !== U.body && "string" != typeof U.body)
                                    throw new Error("Response is not a string.");
                                return U.body
                            }
                            ));
                        default:
                            return x.pipe((0,
                            Ae.U)(U=>U.body))
                        }
                    case "response":
                        return x;
                    default:
                        throw new Error(`Unreachable: unhandled observe type ${E.observe}}`)
                    }
                }
                delete(l, p={}) {
                    return this.request("DELETE", l, p)
                }
                get(l, p={}) {
                    return this.request("GET", l, p)
                }
                head(l, p={}) {
                    return this.request("HEAD", l, p)
                }
                jsonp(l, p) {
                    return this.request("JSONP", l, {
                        params: (new We).append(p, "JSONP_CALLBACK"),
                        observe: "body",
                        responseType: "json"
                    })
                }
                options(l, p={}) {
                    return this.request("OPTIONS", l, p)
                }
                patch(l, p, E={}) {
                    return this.request("PATCH", l, K(E, p))
                }
                post(l, p, E={}) {
                    return this.request("POST", l, K(E, p))
                }
                put(l, p, E={}) {
                    return this.request("PUT", l, K(E, p))
                }
            }
            return v.\u0275fac = function(l) {
                return new (l || v)(O.LFG(Ce))
            }
            ,
            v.\u0275prov = O.Yz7({
                token: v,
                factory: v.\u0275fac
            }),
            v
        }
        )();
        function ne(v, o) {
            return o(v)
        }
        function we(v, o) {
            return (l,p)=>o.intercept(l, {
                handle: E=>v(E, p)
            })
        }
        const Ke = new O.OlP("HTTP_INTERCEPTORS")
          , ft = new O.OlP("HTTP_INTERCEPTOR_FNS");
        function $t() {
            let v = null;
            return (o,l)=>(null === v && (v = ((0,
            O.f3M)(Ke, {
                optional: !0
            }) ?? []).reduceRight(we, ne)),
            v(o, l))
        }
        let Ye = (()=>{
            class v extends Ce {
                constructor(l, p) {
                    super(),
                    this.backend = l,
                    this.injector = p,
                    this.chain = null
                }
                handle(l) {
                    if (null === this.chain) {
                        const p = Array.from(new Set(this.injector.get(ft)));
                        this.chain = p.reduceRight((E,I)=>function he(v, o, l) {
                            return (p,E)=>l.runInContext(()=>o(p, I=>v(I, E)))
                        }(E, I, this.injector), ne)
                    }
                    return this.chain(l, p=>this.backend.handle(p))
                }
            }
            return v.\u0275fac = function(l) {
                return new (l || v)(O.LFG(ue),O.LFG(O.lqb))
            }
            ,
            v.\u0275prov = O.Yz7({
                token: v,
                factory: v.\u0275fac
            }),
            v
        }
        )();
        const xr = /^\)\]\}',?\n/;
        let dr = (()=>{
            class v {
                constructor(l) {
                    this.xhrFactory = l
                }
                handle(l) {
                    if ("JSONP" === l.method)
                        throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");
                    return new X.y(p=>{
                        const E = this.xhrFactory.build();
                        if (E.open(l.method, l.urlWithParams),
                        l.withCredentials && (E.withCredentials = !0),
                        l.headers.forEach((d,a)=>E.setRequestHeader(d, a.join(","))),
                        l.headers.has("Accept") || E.setRequestHeader("Accept", "application/json, text/plain, */*"),
                        !l.headers.has("Content-Type")) {
                            const d = l.detectContentTypeHeader();
                            null !== d && E.setRequestHeader("Content-Type", d)
                        }
                        if (l.responseType) {
                            const d = l.responseType.toLowerCase();
                            E.responseType = "json" !== d ? d : "text"
                        }
                        const I = l.serializeBody();
                        let N = null;
                        const x = ()=>{
                            if (null !== N)
                                return N;
                            const d = E.statusText || "OK"
                              , a = new q(E.getAllResponseHeaders())
                              , f = function Gt(v) {
                                return "responseURL"in v && v.responseURL ? v.responseURL : /^X-Request-URL:/m.test(v.getAllResponseHeaders()) ? v.getResponseHeader("X-Request-URL") : null
                            }(E) || l.url;
                            return N = new yt({
                                headers: a,
                                status: E.status,
                                statusText: d,
                                url: f
                            }),
                            N
                        }
                          , U = ()=>{
                            let {headers: d, status: a, statusText: f, url: D} = x()
                              , S = null;
                            204 !== a && (S = typeof E.response > "u" ? E.responseText : E.response),
                            0 === a && (a = S ? 200 : 0);
                            let T = a >= 200 && a < 300;
                            if ("json" === l.responseType && "string" == typeof S) {
                                const k = S;
                                S = S.replace(xr, "");
                                try {
                                    S = "" !== S ? JSON.parse(S) : null
                                } catch (G) {
                                    S = k,
                                    T && (T = !1,
                                    S = {
                                        error: G,
                                        text: S
                                    })
                                }
                            }
                            T ? (p.next(new Fe({
                                body: S,
                                headers: d,
                                status: a,
                                statusText: f,
                                url: D || void 0
                            })),
                            p.complete()) : p.error(new Y({
                                error: S,
                                headers: d,
                                status: a,
                                statusText: f,
                                url: D || void 0
                            }))
                        }
                          , V = d=>{
                            const {url: a} = x()
                              , f = new Y({
                                error: d,
                                status: E.status || 0,
                                statusText: E.statusText || "Unknown Error",
                                url: a || void 0
                            });
                            p.error(f)
                        }
                        ;
                        let Se = !1;
                        const Ie = d=>{
                            Se || (p.next(x()),
                            Se = !0);
                            let a = {
                                type: le.DownloadProgress,
                                loaded: d.loaded
                            };
                            d.lengthComputable && (a.total = d.total),
                            "text" === l.responseType && E.responseText && (a.partialText = E.responseText),
                            p.next(a)
                        }
                          , c = d=>{
                            let a = {
                                type: le.UploadProgress,
                                loaded: d.loaded
                            };
                            d.lengthComputable && (a.total = d.total),
                            p.next(a)
                        }
                        ;
                        return E.addEventListener("load", U),
                        E.addEventListener("error", V),
                        E.addEventListener("timeout", V),
                        E.addEventListener("abort", V),
                        l.reportProgress && (E.addEventListener("progress", Ie),
                        null !== I && E.upload && E.upload.addEventListener("progress", c)),
                        E.send(I),
                        p.next({
                            type: le.Sent
                        }),
                        ()=>{
                            E.removeEventListener("error", V),
                            E.removeEventListener("abort", V),
                            E.removeEventListener("load", U),
                            E.removeEventListener("timeout", V),
                            l.reportProgress && (E.removeEventListener("progress", Ie),
                            null !== I && E.upload && E.upload.removeEventListener("progress", c)),
                            E.readyState !== E.DONE && E.abort()
                        }
                    }
                    )
                }
            }
            return v.\u0275fac = function(l) {
                return new (l || v)(O.LFG(L.JF))
            }
            ,
            v.\u0275prov = O.Yz7({
                token: v,
                factory: v.\u0275fac
            }),
            v
        }
        )();
        const Lr = new O.OlP("XSRF_ENABLED")
          , Rn = new O.OlP("XSRF_COOKIE_NAME",{
            providedIn: "root",
            factory: ()=>"XSRF-TOKEN"
        })
          , Wn = new O.OlP("XSRF_HEADER_NAME",{
            providedIn: "root",
            factory: ()=>"X-XSRF-TOKEN"
        });
        class kr {
        }
        let Rt = (()=>{
            class v {
                constructor(l, p, E) {
                    this.doc = l,
                    this.platform = p,
                    this.cookieName = E,
                    this.lastCookieString = "",
                    this.lastToken = null,
                    this.parseCount = 0
                }
                getToken() {
                    if ("server" === this.platform)
                        return null;
                    const l = this.doc.cookie || "";
                    return l !== this.lastCookieString && (this.parseCount++,
                    this.lastToken = (0,
                    L.Mx)(l, this.cookieName),
                    this.lastCookieString = l),
                    this.lastToken
                }
            }
            return v.\u0275fac = function(l) {
                return new (l || v)(O.LFG(L.K0),O.LFG(O.Lbi),O.LFG(Rn))
            }
            ,
            v.\u0275prov = O.Yz7({
                token: v,
                factory: v.\u0275fac
            }),
            v
        }
        )();
        function ce(v, o) {
            const l = v.url.toLowerCase();
            if (!(0,
            O.f3M)(Lr) || "GET" === v.method || "HEAD" === v.method || l.startsWith("http://") || l.startsWith("https://"))
                return o(v);
            const p = (0,
            O.f3M)(kr).getToken()
              , E = (0,
            O.f3M)(Wn);
            return null != p && !v.headers.has(E) && (v = v.clone({
                headers: v.headers.set(E, p)
            })),
            o(v)
        }
        var Ot = (()=>((Ot = Ot || {})[Ot.Interceptors = 0] = "Interceptors",
        Ot[Ot.LegacyInterceptors = 1] = "LegacyInterceptors",
        Ot[Ot.CustomXsrfConfiguration = 2] = "CustomXsrfConfiguration",
        Ot[Ot.NoXsrfProtection = 3] = "NoXsrfProtection",
        Ot[Ot.JsonpSupport = 4] = "JsonpSupport",
        Ot[Ot.RequestsMadeViaParent = 5] = "RequestsMadeViaParent",
        Ot))();
        function Nt(v, o) {
            return {
                \u0275kind: v,
                \u0275providers: o
            }
        }
        function fn(...v) {
            const o = [ie, dr, Ye, {
                provide: Ce,
                useExisting: Ye
            }, {
                provide: ue,
                useExisting: dr
            }, {
                provide: ft,
                useValue: ce,
                multi: !0
            }, {
                provide: Lr,
                useValue: !0
            }, {
                provide: kr,
                useClass: Rt
            }];
            for (const l of v)
                o.push(...l.\u0275providers);
            return (0,
            O.MR2)(o)
        }
        const ct = new O.OlP("LEGACY_INTERCEPTOR_FN");
        let Ti = (()=>{
            class v {
            }
            return v.\u0275fac = function(l) {
                return new (l || v)
            }
            ,
            v.\u0275mod = O.oAB({
                type: v
            }),
            v.\u0275inj = O.cJS({
                providers: [fn(Nt(Ot.LegacyInterceptors, [{
                    provide: ct,
                    useFactory: $t
                }, {
                    provide: ft,
                    useExisting: ct,
                    multi: !0
                }]))]
            }),
            v
        }
        )();
        class er {
        }
        class tr {
        }
        const Ut = "*";
        function ii(v, o=null) {
            return {
                type: 2,
                steps: v,
                options: o
            }
        }
        function Ir(v) {
            return {
                type: 6,
                styles: v,
                offset: null
            }
        }
        function Qe(v) {
            Promise.resolve().then(v)
        }
        class ke {
            constructor(o=0, l=0) {
                this._onDoneFns = [],
                this._onStartFns = [],
                this._onDestroyFns = [],
                this._originalOnDoneFns = [],
                this._originalOnStartFns = [],
                this._started = !1,
                this._destroyed = !1,
                this._finished = !1,
                this._position = 0,
                this.parentPlayer = null,
                this.totalTime = o + l
            }
            _onFinish() {
                this._finished || (this._finished = !0,
                this._onDoneFns.forEach(o=>o()),
                this._onDoneFns = [])
            }
            onStart(o) {
                this._originalOnStartFns.push(o),
                this._onStartFns.push(o)
            }
            onDone(o) {
                this._originalOnDoneFns.push(o),
                this._onDoneFns.push(o)
            }
            onDestroy(o) {
                this._onDestroyFns.push(o)
            }
            hasStarted() {
                return this._started
            }
            init() {}
            play() {
                this.hasStarted() || (this._onStart(),
                this.triggerMicrotask()),
                this._started = !0
            }
            triggerMicrotask() {
                Qe(()=>this._onFinish())
            }
            _onStart() {
                this._onStartFns.forEach(o=>o()),
                this._onStartFns = []
            }
            pause() {}
            restart() {}
            finish() {
                this._onFinish()
            }
            destroy() {
                this._destroyed || (this._destroyed = !0,
                this.hasStarted() || this._onStart(),
                this.finish(),
                this._onDestroyFns.forEach(o=>o()),
                this._onDestroyFns = [])
            }
            reset() {
                this._started = !1,
                this._finished = !1,
                this._onStartFns = this._originalOnStartFns,
                this._onDoneFns = this._originalOnDoneFns
            }
            setPosition(o) {
                this._position = this.totalTime ? o * this.totalTime : 1
            }
            getPosition() {
                return this.totalTime ? this._position / this.totalTime : 1
            }
            triggerCallback(o) {
                const l = "start" == o ? this._onStartFns : this._onDoneFns;
                l.forEach(p=>p()),
                l.length = 0
            }
        }
        class Tt {
            constructor(o) {
                this._onDoneFns = [],
                this._onStartFns = [],
                this._finished = !1,
                this._started = !1,
                this._destroyed = !1,
                this._onDestroyFns = [],
                this.parentPlayer = null,
                this.totalTime = 0,
                this.players = o;
                let l = 0
                  , p = 0
                  , E = 0;
                const I = this.players.length;
                0 == I ? Qe(()=>this._onFinish()) : this.players.forEach(N=>{
                    N.onDone(()=>{
                        ++l == I && this._onFinish()
                    }
                    ),
                    N.onDestroy(()=>{
                        ++p == I && this._onDestroy()
                    }
                    ),
                    N.onStart(()=>{
                        ++E == I && this._onStart()
                    }
                    )
                }
                ),
                this.totalTime = this.players.reduce((N,x)=>Math.max(N, x.totalTime), 0)
            }
            _onFinish() {
                this._finished || (this._finished = !0,
                this._onDoneFns.forEach(o=>o()),
                this._onDoneFns = [])
            }
            init() {
                this.players.forEach(o=>o.init())
            }
            onStart(o) {
                this._onStartFns.push(o)
            }
            _onStart() {
                this.hasStarted() || (this._started = !0,
                this._onStartFns.forEach(o=>o()),
                this._onStartFns = [])
            }
            onDone(o) {
                this._onDoneFns.push(o)
            }
            onDestroy(o) {
                this._onDestroyFns.push(o)
            }
            hasStarted() {
                return this._started
            }
            play() {
                this.parentPlayer || this.init(),
                this._onStart(),
                this.players.forEach(o=>o.play())
            }
            pause() {
                this.players.forEach(o=>o.pause())
            }
            restart() {
                this.players.forEach(o=>o.restart())
            }
            finish() {
                this._onFinish(),
                this.players.forEach(o=>o.finish())
            }
            destroy() {
                this._onDestroy()
            }
            _onDestroy() {
                this._destroyed || (this._destroyed = !0,
                this._onFinish(),
                this.players.forEach(o=>o.destroy()),
                this._onDestroyFns.forEach(o=>o()),
                this._onDestroyFns = [])
            }
            reset() {
                this.players.forEach(o=>o.reset()),
                this._destroyed = !1,
                this._finished = !1,
                this._started = !1
            }
            setPosition(o) {
                const l = o * this.totalTime;
                this.players.forEach(p=>{
                    const E = p.totalTime ? Math.min(1, l / p.totalTime) : 1;
                    p.setPosition(E)
                }
                )
            }
            getPosition() {
                const o = this.players.reduce((l,p)=>null === l || p.totalTime > l.totalTime ? p : l, null);
                return null != o ? o.getPosition() : 0
            }
            beforeDestroy() {
                this.players.forEach(o=>{
                    o.beforeDestroy && o.beforeDestroy()
                }
                )
            }
            triggerCallback(o) {
                const l = "start" == o ? this._onStartFns : this._onDoneFns;
                l.forEach(p=>p()),
                l.length = 0
            }
        }
        const hr = "!";
        function oi(v) {
            return new O.vHH(3e3,!1)
        }
        function sn() {
            return typeof window < "u" && typeof window.document < "u"
        }
        function Mr() {
            return typeof process < "u" && "[object process]" === {}.toString.call(process)
        }
        function Sn(v) {
            switch (v.length) {
            case 0:
                return new ke;
            case 1:
                return v[0];
            default:
                return new Tt(v)
            }
        }
        function Bn(v, o, l, p, E=new Map, I=new Map) {
            const N = []
              , x = [];
            let U = -1
              , V = null;
            if (p.forEach(Se=>{
                const Ie = Se.get("offset")
                  , c = Ie == U
                  , d = c && V || new Map;
                Se.forEach((a,f)=>{
                    let D = f
                      , S = a;
                    if ("offset" !== f)
                        switch (D = o.normalizePropertyName(D, N),
                        S) {
                        case hr:
                            S = E.get(f);
                            break;
                        case Ut:
                            S = I.get(f);
                            break;
                        default:
                            S = o.normalizeStyleValue(f, D, S, N)
                        }
                    d.set(D, S)
                }
                ),
                c || x.push(d),
                V = d,
                U = Ie
            }
            ),
            N.length)
                throw function Dt(v) {
                    return new O.vHH(3502,!1)
                }();
            return x
        }
        function rr(v, o, l, p) {
            switch (o) {
            case "start":
                v.onStart(()=>p(l && Ni(l, "start", v)));
                break;
            case "done":
                v.onDone(()=>p(l && Ni(l, "done", v)));
                break;
            case "destroy":
                v.onDestroy(()=>p(l && Ni(l, "destroy", v)))
            }
        }
        function Ni(v, o, l) {
            const I = It(v.element, v.triggerName, v.fromState, v.toState, o || v.phaseName, l.totalTime ?? v.totalTime, !!l.disabled)
              , N = v._data;
            return null != N && (I._data = N),
            I
        }
        function It(v, o, l, p, E="", I=0, N) {
            return {
                element: v,
                triggerName: o,
                fromState: l,
                toState: p,
                phaseName: E,
                totalTime: I,
                disabled: !!N
            }
        }
        function Nn(v, o, l) {
            let p = v.get(o);
            return p || v.set(o, p = l),
            p
        }
        function Fi(v) {
            const o = v.indexOf(":");
            return [v.substring(1, o), v.slice(o + 1)]
        }
        let xi = (v,o)=>!1
          , jr = (v,o,l)=>[]
          , Tr = null;
        function Kn(v) {
            const o = v.parentNode || v.host;
            return o === Tr ? null : o
        }
        (Mr() || typeof Element < "u") && (sn() ? (Tr = (()=>document.documentElement)(),
        xi = (v,o)=>{
            for (; o; ) {
                if (o === v)
                    return !0;
                o = Kn(o)
            }
            return !1
        }
        ) : xi = (v,o)=>v.contains(o),
        jr = (v,o,l)=>{
            if (l)
                return Array.from(v.querySelectorAll(o));
            const p = v.querySelector(o);
            return p ? [p] : []
        }
        );
        let Vt = null
          , bn = !1;
        const Fn = xi
          , hi = jr;
        let Vr = (()=>{
            class v {
                validateStyleProperty(l) {
                    return function ds(v) {
                        Vt || (Vt = function $r() {
                            return typeof document < "u" ? document.body : null
                        }() || {},
                        bn = !!Vt.style && "WebkitAppearance"in Vt.style);
                        let o = !0;
                        return Vt.style && !function fi(v) {
                            return "ebkit" == v.substring(1, 6)
                        }(v) && (o = v in Vt.style,
                        !o && bn && (o = "Webkit" + v.charAt(0).toUpperCase() + v.slice(1)in Vt.style)),
                        o
                    }(l)
                }
                matchesElement(l, p) {
                    return !1
                }
                containsElement(l, p) {
                    return Fn(l, p)
                }
                getParentElement(l) {
                    return Kn(l)
                }
                query(l, p, E) {
                    return hi(l, p, E)
                }
                computeStyle(l, p, E) {
                    return E || ""
                }
                animate(l, p, E, I, N, x=[], U) {
                    return new ke(E,I)
                }
            }
            return v.\u0275fac = function(l) {
                return new (l || v)
            }
            ,
            v.\u0275prov = O.Yz7({
                token: v,
                factory: v.\u0275fac
            }),
            v
        }
        )()
          , zr = (()=>{
            class v {
            }
            return v.NOOP = new Vr,
            v
        }
        )();
        const ho = 1e3
          , Ar = "ng-enter"
          , fs = "ng-leave"
          , hs = "ng-trigger"
          , pi = ".ng-trigger"
          , ks = "ng-animating"
          , ps = ".ng-animating";
        function yr(v) {
            if ("number" == typeof v)
                return v;
            const o = v.match(/^(-?[\.\d]+)(m?s)/);
            return !o || o.length < 2 ? 0 : Hs(parseFloat(o[1]), o[2])
        }
        function Hs(v, o) {
            return "s" === o ? v * ho : v
        }
        function Bs(v, o, l) {
            return v.hasOwnProperty("duration") ? v : function Gr(v, o, l) {
                let E, I = 0, N = "";
                if ("string" == typeof v) {
                    const x = v.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
                    if (null === x)
                        return o.push(oi()),
                        {
                            duration: 0,
                            delay: 0,
                            easing: ""
                        };
                    E = Hs(parseFloat(x[1]), x[2]);
                    const U = x[3];
                    null != U && (I = Hs(parseFloat(U), x[4]));
                    const V = x[5];
                    V && (N = V)
                } else
                    E = v;
                if (!l) {
                    let x = !1
                      , U = o.length;
                    E < 0 && (o.push(function pr() {
                        return new O.vHH(3100,!1)
                    }()),
                    x = !0),
                    I < 0 && (o.push(function Br() {
                        return new O.vHH(3101,!1)
                    }()),
                    x = !0),
                    x && o.splice(U, 0, oi())
                }
                return {
                    duration: E,
                    delay: I,
                    easing: N
                }
            }(v, o, l)
        }
        function sr(v, o={}) {
            return Object.keys(v).forEach(l=>{
                o[l] = v[l]
            }
            ),
            o
        }
        function Li(v) {
            const o = new Map;
            return Object.keys(v).forEach(l=>{
                o.set(l, v[l])
            }
            ),
            o
        }
        function on(v, o=new Map, l) {
            if (l)
                for (let[p,E] of l)
                    o.set(p, E);
            for (let[p,E] of v)
                o.set(p, E);
            return o
        }
        function Us(v, o, l) {
            return l ? o + ":" + l + ";" : ""
        }
        function gi(v) {
            let o = "";
            for (let l = 0; l < v.style.length; l++) {
                const p = v.style.item(l);
                o += Us(0, p, v.style.getPropertyValue(p))
            }
            for (const l in v.style)
                v.style.hasOwnProperty(l) && !l.startsWith("_") && (o += Us(0, Yr(l), v.style[l]));
            v.setAttribute("style", o)
        }
        function or(v, o, l) {
            v.style && (o.forEach((p,E)=>{
                const I = Bi(E);
                l && !l.has(E) && l.set(E, v.style[I]),
                v.style[I] = p
            }
            ),
            Mr() && gi(v))
        }
        function Wr(v, o) {
            v.style && (o.forEach((l,p)=>{
                const E = Bi(p);
                v.style[E] = ""
            }
            ),
            Mr() && gi(v))
        }
        function ki(v) {
            return Array.isArray(v) ? 1 == v.length ? v[0] : ii(v) : v
        }
        const Pr = new RegExp("{{\\s*(.+?)\\s*}}","g");
        function js(v) {
            let o = [];
            if ("string" == typeof v) {
                let l;
                for (; l = Pr.exec(v); )
                    o.push(l[1]);
                Pr.lastIndex = 0
            }
            return o
        }
        function Yn(v, o, l) {
            const p = v.toString()
              , E = p.replace(Pr, (I,N)=>{
                let x = o[N];
                return null == x && (l.push(function Ns(v) {
                    return new O.vHH(3003,!1)
                }()),
                x = ""),
                x.toString()
            }
            );
            return E == p ? v : E
        }
        function Kr(v) {
            const o = [];
            let l = v.next();
            for (; !l.done; )
                o.push(l.value),
                l = v.next();
            return o
        }
        const Lt = /-+([a-z0-9])/g;
        function Bi(v) {
            return v.replace(Lt, (...o)=>o[1].toUpperCase())
        }
        function Yr(v) {
            return v.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        }
        function tn(v, o, l) {
            switch (o.type) {
            case 7:
                return v.visitTrigger(o, l);
            case 0:
                return v.visitState(o, l);
            case 1:
                return v.visitTransition(o, l);
            case 2:
                return v.visitSequence(o, l);
            case 3:
                return v.visitGroup(o, l);
            case 4:
                return v.visitAnimate(o, l);
            case 5:
                return v.visitKeyframes(o, l);
            case 6:
                return v.visitStyle(o, l);
            case 8:
                return v.visitReference(o, l);
            case 9:
                return v.visitAnimateChild(o, l);
            case 10:
                return v.visitAnimateRef(o, l);
            case 11:
                return v.visitQuery(o, l);
            case 12:
                return v.visitStagger(o, l);
            default:
                throw function ai(v) {
                    return new O.vHH(3004,!1)
                }()
            }
        }
        function an(v, o) {
            return window.getComputedStyle(v)[o]
        }
        const gn = "*";
        function $s(v, o) {
            const l = [];
            return "string" == typeof v ? v.split(/\s*,\s*/).forEach(p=>function Vs(v, o, l) {
                if (":" == v[0]) {
                    const U = function rt(v, o) {
                        switch (v) {
                        case ":enter":
                            return "void => *";
                        case ":leave":
                            return "* => void";
                        case ":increment":
                            return (l,p)=>parseFloat(p) > parseFloat(l);
                        case ":decrement":
                            return (l,p)=>parseFloat(p) < parseFloat(l);
                        default:
                            return o.push(function ci(v) {
                                return new O.vHH(3016,!1)
                            }()),
                            "* => *"
                        }
                    }(v, l);
                    if ("function" == typeof U)
                        return void o.push(U);
                    v = U
                }
                const p = v.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                if (null == p || p.length < 4)
                    return l.push(function Oi(v) {
                        return new O.vHH(3015,!1)
                    }()),
                    o;
                const E = p[1]
                  , I = p[2]
                  , N = p[3];
                o.push(go(E, N));
                "<" == I[0] && !(E == gn && N == gn) && o.push(go(N, E))
            }(p, l, o)) : l.push(v),
            l
        }
        const At = new Set(["true", "1"])
          , zs = new Set(["false", "0"]);
        function go(v, o) {
            const l = At.has(v) || zs.has(v)
              , p = At.has(o) || zs.has(o);
            return (E,I)=>{
                let N = v == gn || v == E
                  , x = o == gn || o == I;
                return !N && l && "boolean" == typeof E && (N = E ? At.has(v) : zs.has(v)),
                !x && p && "boolean" == typeof I && (x = I ? At.has(o) : zs.has(o)),
                N && x
            }
        }
        const ko = new RegExp("s*:selfs*,?","g");
        function yi(v, o, l, p) {
            return new Qr(v).build(o, l, p)
        }
        class Qr {
            constructor(o) {
                this._driver = o
            }
            build(o, l, p) {
                const E = new Ho(l);
                return this._resetContextStyleTimingState(E),
                tn(this, ki(o), E)
            }
            _resetContextStyleTimingState(o) {
                o.currentQuerySelector = "",
                o.collectedStyles = new Map,
                o.collectedStyles.set("", new Map),
                o.currentTime = 0
            }
            visitTrigger(o, l) {
                let p = l.queryCount = 0
                  , E = l.depCount = 0;
                const I = []
                  , N = [];
                return "@" == o.name.charAt(0) && l.errors.push(function gr() {
                    return new O.vHH(3006,!1)
                }()),
                o.definitions.forEach(x=>{
                    if (this._resetContextStyleTimingState(l),
                    0 == x.type) {
                        const U = x
                          , V = U.name;
                        V.toString().split(/\s*,\s*/).forEach(Se=>{
                            U.name = Se,
                            I.push(this.visitState(U, l))
                        }
                        ),
                        U.name = V
                    } else if (1 == x.type) {
                        const U = this.visitTransition(x, l);
                        p += U.queryCount,
                        E += U.depCount,
                        N.push(U)
                    } else
                        l.errors.push(function Ur() {
                            return new O.vHH(3007,!1)
                        }())
                }
                ),
                {
                    type: 7,
                    name: o.name,
                    states: I,
                    transitions: N,
                    queryCount: p,
                    depCount: E,
                    options: null
                }
            }
            visitState(o, l) {
                const p = this.visitStyle(o.styles, l)
                  , E = o.options && o.options.params || null;
                if (p.containsDynamicStyles) {
                    const I = new Set
                      , N = E || {};
                    p.styles.forEach(x=>{
                        x instanceof Map && x.forEach(U=>{
                            js(U).forEach(V=>{
                                N.hasOwnProperty(V) || I.add(V)
                            }
                            )
                        }
                        )
                    }
                    ),
                    I.size && (Kr(I.values()),
                    l.errors.push(function os(v, o) {
                        return new O.vHH(3008,!1)
                    }()))
                }
                return {
                    type: 0,
                    name: o.name,
                    style: p,
                    options: E ? {
                        params: E
                    } : null
                }
            }
            visitTransition(o, l) {
                l.queryCount = 0,
                l.depCount = 0;
                const p = tn(this, ki(o.animation), l);
                return {
                    type: 1,
                    matchers: $s(o.expr, l.errors),
                    animation: p,
                    queryCount: l.queryCount,
                    depCount: l.depCount,
                    options: vr(o.options)
                }
            }
            visitSequence(o, l) {
                return {
                    type: 2,
                    steps: o.steps.map(p=>tn(this, p, l)),
                    options: vr(o.options)
                }
            }
            visitGroup(o, l) {
                const p = l.currentTime;
                let E = 0;
                const I = o.steps.map(N=>{
                    l.currentTime = p;
                    const x = tn(this, N, l);
                    return E = Math.max(E, l.currentTime),
                    x
                }
                );
                return l.currentTime = E,
                {
                    type: 3,
                    steps: I,
                    options: vr(o.options)
                }
            }
            visitAnimate(o, l) {
                const p = function nn(v, o) {
                    if (v.hasOwnProperty("duration"))
                        return v;
                    if ("number" == typeof v)
                        return ar(Bs(v, o).duration, 0, "");
                    const l = v;
                    if (l.split(/\s+/).some(I=>"{" == I.charAt(0) && "{" == I.charAt(1))) {
                        const I = ar(0, 0, "");
                        return I.dynamic = !0,
                        I.strValue = l,
                        I
                    }
                    const E = Bs(l, o);
                    return ar(E.duration, E.delay, E.easing)
                }(o.timings, l.errors);
                l.currentAnimateTimings = p;
                let E, I = o.styles ? o.styles : Ir({});
                if (5 == I.type)
                    E = this.visitKeyframes(I, l);
                else {
                    let N = o.styles
                      , x = !1;
                    if (!N) {
                        x = !0;
                        const V = {};
                        p.easing && (V.easing = p.easing),
                        N = Ir(V)
                    }
                    l.currentTime += p.duration + p.delay;
                    const U = this.visitStyle(N, l);
                    U.isEmptyStep = x,
                    E = U
                }
                return l.currentAnimateTimings = null,
                {
                    type: 4,
                    timings: p,
                    style: E,
                    options: null
                }
            }
            visitStyle(o, l) {
                const p = this._makeStyleAst(o, l);
                return this._validateStyleAst(p, l),
                p
            }
            _makeStyleAst(o, l) {
                const p = []
                  , E = Array.isArray(o.styles) ? o.styles : [o.styles];
                for (let x of E)
                    "string" == typeof x ? x === Ut ? p.push(x) : l.errors.push(new O.vHH(3002,!1)) : p.push(Li(x));
                let I = !1
                  , N = null;
                return p.forEach(x=>{
                    if (x instanceof Map && (x.has("easing") && (N = x.get("easing"),
                    x.delete("easing")),
                    !I))
                        for (let U of x.values())
                            if (U.toString().indexOf("{{") >= 0) {
                                I = !0;
                                break
                            }
                }
                ),
                {
                    type: 6,
                    styles: p,
                    easing: N,
                    offset: o.offset,
                    containsDynamicStyles: I,
                    options: null
                }
            }
            _validateStyleAst(o, l) {
                const p = l.currentAnimateTimings;
                let E = l.currentTime
                  , I = l.currentTime;
                p && I > 0 && (I -= p.duration + p.delay),
                o.styles.forEach(N=>{
                    "string" != typeof N && N.forEach((x,U)=>{
                        const V = l.collectedStyles.get(l.currentQuerySelector)
                          , Se = V.get(U);
                        let Ie = !0;
                        Se && (I != E && I >= Se.startTime && E <= Se.endTime && (l.errors.push(function Fs(v, o, l, p, E) {
                            return new O.vHH(3010,!1)
                        }()),
                        Ie = !1),
                        I = Se.startTime),
                        Ie && V.set(U, {
                            startTime: I,
                            endTime: E
                        }),
                        l.options && function Hi(v, o, l) {
                            const p = o.params || {}
                              , E = js(v);
                            E.length && E.forEach(I=>{
                                p.hasOwnProperty(I) || l.push(function Ri(v) {
                                    return new O.vHH(3001,!1)
                                }())
                            }
                            )
                        }(x, l.options, l.errors)
                    }
                    )
                }
                )
            }
            visitKeyframes(o, l) {
                const p = {
                    type: 5,
                    styles: [],
                    options: null
                };
                if (!l.currentAnimateTimings)
                    return l.errors.push(function gt() {
                        return new O.vHH(3011,!1)
                    }()),
                    p;
                let I = 0;
                const N = [];
                let x = !1
                  , U = !1
                  , V = 0;
                const Se = o.steps.map(S=>{
                    const T = this._makeStyleAst(S, l);
                    let k = null != T.offset ? T.offset : function Gs(v) {
                        if ("string" == typeof v)
                            return null;
                        let o = null;
                        if (Array.isArray(v))
                            v.forEach(l=>{
                                if (l instanceof Map && l.has("offset")) {
                                    const p = l;
                                    o = parseFloat(p.get("offset")),
                                    p.delete("offset")
                                }
                            }
                            );
                        else if (v instanceof Map && v.has("offset")) {
                            const l = v;
                            o = parseFloat(l.get("offset")),
                            l.delete("offset")
                        }
                        return o
                    }(T.styles)
                      , G = 0;
                    return null != k && (I++,
                    G = T.offset = k),
                    U = U || G < 0 || G > 1,
                    x = x || G < V,
                    V = G,
                    N.push(G),
                    T
                }
                );
                U && l.errors.push(function Qt() {
                    return new O.vHH(3012,!1)
                }()),
                x && l.errors.push(function hn() {
                    return new O.vHH(3200,!1)
                }());
                const Ie = o.steps.length;
                let c = 0;
                I > 0 && I < Ie ? l.errors.push(function mr() {
                    return new O.vHH(3202,!1)
                }()) : 0 == I && (c = 1 / (Ie - 1));
                const d = Ie - 1
                  , a = l.currentTime
                  , f = l.currentAnimateTimings
                  , D = f.duration;
                return Se.forEach((S,T)=>{
                    const k = c > 0 ? T == d ? 1 : c * T : N[T]
                      , G = k * D;
                    l.currentTime = a + f.delay + G,
                    f.duration = G,
                    this._validateStyleAst(S, l),
                    S.offset = k,
                    p.styles.push(S)
                }
                ),
                p
            }
            visitReference(o, l) {
                return {
                    type: 8,
                    animation: tn(this, ki(o.animation), l),
                    options: vr(o.options)
                }
            }
            visitAnimateChild(o, l) {
                return l.depCount++,
                {
                    type: 9,
                    options: vr(o.options)
                }
            }
            visitAnimateRef(o, l) {
                return {
                    type: 10,
                    animation: this.visitReference(o.animation, l),
                    options: vr(o.options)
                }
            }
            visitQuery(o, l) {
                const p = l.currentQuerySelector
                  , E = o.options || {};
                l.queryCount++,
                l.currentQuery = o;
                const [I,N] = function oe(v) {
                    const o = !!v.split(/\s*,\s*/).find(l=>":self" == l);
                    return o && (v = v.replace(ko, "")),
                    v = v.replace(/@\*/g, pi).replace(/@\w+/g, l=>pi + "-" + l.slice(1)).replace(/:animating/g, ps),
                    [v, o]
                }(o.selector);
                l.currentQuerySelector = p.length ? p + " " + I : I,
                Nn(l.collectedStyles, l.currentQuerySelector, new Map);
                const x = tn(this, ki(o.animation), l);
                return l.currentQuery = null,
                l.currentQuerySelector = p,
                {
                    type: 11,
                    selector: I,
                    limit: E.limit || 0,
                    optional: !!E.optional,
                    includeSelf: N,
                    animation: x,
                    originalSelector: o.selector,
                    options: vr(o.options)
                }
            }
            visitStagger(o, l) {
                l.currentQuery || l.errors.push(function Kt() {
                    return new O.vHH(3013,!1)
                }());
                const p = "full" === o.timings ? {
                    duration: 0,
                    delay: 0,
                    easing: "full"
                } : Bs(o.timings, l.errors, !0);
                return {
                    type: 12,
                    animation: tn(this, ki(o.animation), l),
                    timings: p,
                    options: null
                }
            }
        }
        class Ho {
            constructor(o) {
                this.errors = o,
                this.queryCount = 0,
                this.depCount = 0,
                this.currentTransition = null,
                this.currentQuery = null,
                this.currentQuerySelector = null,
                this.currentAnimateTimings = null,
                this.currentTime = 0,
                this.collectedStyles = new Map,
                this.options = null,
                this.unsupportedCSSPropertiesFound = new Set
            }
        }
        function vr(v) {
            return v ? (v = sr(v)).params && (v.params = function pt(v) {
                return v ? sr(v) : null
            }(v.params)) : v = {},
            v
        }
        function ar(v, o, l) {
            return {
                duration: v,
                delay: o,
                easing: l
            }
        }
        function ln(v, o, l, p, E, I, N=null, x=!1) {
            return {
                type: 1,
                element: v,
                keyframes: o,
                preStyleProps: l,
                postStyleProps: p,
                duration: E,
                delay: I,
                totalTime: E + I,
                easing: N,
                subTimeline: x
            }
        }
        class vi {
            constructor() {
                this._map = new Map
            }
            get(o) {
                return this._map.get(o) || []
            }
            append(o, l) {
                let p = this._map.get(o);
                p || this._map.set(o, p = []),
                p.push(...l)
            }
            has(o) {
                return this._map.has(o)
            }
            clear() {
                this._map.clear()
            }
        }
        const ys = new RegExp(":enter","g")
          , un = new RegExp(":leave","g");
        function vn(v, o, l, p, E, I=new Map, N=new Map, x, U, V=[]) {
            return (new vs).buildKeyframes(v, o, l, p, E, I, N, x, U, V)
        }
        class vs {
            buildKeyframes(o, l, p, E, I, N, x, U, V, Se=[]) {
                V = V || new vi;
                const Ie = new Qn(o,l,V,E,I,Se,[]);
                Ie.options = U;
                const c = U.delay ? yr(U.delay) : 0;
                Ie.currentTimeline.delayNextStep(c),
                Ie.currentTimeline.setStyles([N], null, Ie.errors, U),
                tn(this, p, Ie);
                const d = Ie.timelines.filter(a=>a.containsAnimation());
                if (d.length && x.size) {
                    let a;
                    for (let f = d.length - 1; f >= 0; f--) {
                        const D = d[f];
                        if (D.element === l) {
                            a = D;
                            break
                        }
                    }
                    a && !a.allowOnlyTimelineStyles() && a.setStyles([x], null, Ie.errors, U)
                }
                return d.length ? d.map(a=>a.buildKeyframes()) : [ln(l, [], [], [], 0, c, "", !1)]
            }
            visitTrigger(o, l) {}
            visitState(o, l) {}
            visitTransition(o, l) {}
            visitAnimateChild(o, l) {
                const p = l.subInstructions.get(l.element);
                if (p) {
                    const E = l.createSubContext(o.options)
                      , I = l.currentTimeline.currentTime
                      , N = this._visitSubInstructions(p, E, E.options);
                    I != N && l.transformIntoNewTimeline(N)
                }
                l.previousNode = o
            }
            visitAnimateRef(o, l) {
                const p = l.createSubContext(o.options);
                p.transformIntoNewTimeline(),
                this._applyAnimationRefDelays([o.options, o.animation.options], l, p),
                this.visitReference(o.animation, p),
                l.transformIntoNewTimeline(p.currentTimeline.currentTime),
                l.previousNode = o
            }
            _applyAnimationRefDelays(o, l, p) {
                for (const E of o) {
                    const I = E?.delay;
                    if (I) {
                        const N = "number" == typeof I ? I : yr(Yn(I, E?.params ?? {}, l.errors));
                        p.delayNextStep(N)
                    }
                }
            }
            _visitSubInstructions(o, l, p) {
                let I = l.currentTimeline.currentTime;
                const N = null != p.duration ? yr(p.duration) : null
                  , x = null != p.delay ? yr(p.delay) : null;
                return 0 !== N && o.forEach(U=>{
                    const V = l.appendInstructionToTimeline(U, N, x);
                    I = Math.max(I, V.duration + V.delay)
                }
                ),
                I
            }
            visitReference(o, l) {
                l.updateOptions(o.options, !0),
                tn(this, o.animation, l),
                l.previousNode = o
            }
            visitSequence(o, l) {
                const p = l.subContextCount;
                let E = l;
                const I = o.options;
                if (I && (I.params || I.delay) && (E = l.createSubContext(I),
                E.transformIntoNewTimeline(),
                null != I.delay)) {
                    6 == E.previousNode.type && (E.currentTimeline.snapshotCurrentStyles(),
                    E.previousNode = Dr);
                    const N = yr(I.delay);
                    E.delayNextStep(N)
                }
                o.steps.length && (o.steps.forEach(N=>tn(this, N, E)),
                E.currentTimeline.applyStylesToKeyframe(),
                E.subContextCount > p && E.transformIntoNewTimeline()),
                l.previousNode = o
            }
            visitGroup(o, l) {
                const p = [];
                let E = l.currentTimeline.currentTime;
                const I = o.options && o.options.delay ? yr(o.options.delay) : 0;
                o.steps.forEach(N=>{
                    const x = l.createSubContext(o.options);
                    I && x.delayNextStep(I),
                    tn(this, N, x),
                    E = Math.max(E, x.currentTimeline.currentTime),
                    p.push(x.currentTimeline)
                }
                ),
                p.forEach(N=>l.currentTimeline.mergeTimelineCollectedStyles(N)),
                l.transformIntoNewTimeline(E),
                l.previousNode = o
            }
            _visitTiming(o, l) {
                if (o.dynamic) {
                    const p = o.strValue;
                    return Bs(l.params ? Yn(p, l.params, l.errors) : p, l.errors)
                }
                return {
                    duration: o.duration,
                    delay: o.delay,
                    easing: o.easing
                }
            }
            visitAnimate(o, l) {
                const p = l.currentAnimateTimings = this._visitTiming(o.timings, l)
                  , E = l.currentTimeline;
                p.delay && (l.incrementTime(p.delay),
                E.snapshotCurrentStyles());
                const I = o.style;
                5 == I.type ? this.visitKeyframes(I, l) : (l.incrementTime(p.duration),
                this.visitStyle(I, l),
                E.applyStylesToKeyframe()),
                l.currentAnimateTimings = null,
                l.previousNode = o
            }
            visitStyle(o, l) {
                const p = l.currentTimeline
                  , E = l.currentAnimateTimings;
                !E && p.hasCurrentStyleProperties() && p.forwardFrame();
                const I = E && E.easing || o.easing;
                o.isEmptyStep ? p.applyEmptyStep(I) : p.setStyles(o.styles, I, l.errors, l.options),
                l.previousNode = o
            }
            visitKeyframes(o, l) {
                const p = l.currentAnimateTimings
                  , E = l.currentTimeline.duration
                  , I = p.duration
                  , x = l.createSubContext().currentTimeline;
                x.easing = p.easing,
                o.styles.forEach(U=>{
                    x.forwardTime((U.offset || 0) * I),
                    x.setStyles(U.styles, U.easing, l.errors, l.options),
                    x.applyStylesToKeyframe()
                }
                ),
                l.currentTimeline.mergeTimelineCollectedStyles(x),
                l.transformIntoNewTimeline(E + I),
                l.previousNode = o
            }
            visitQuery(o, l) {
                const p = l.currentTimeline.currentTime
                  , E = o.options || {}
                  , I = E.delay ? yr(E.delay) : 0;
                I && (6 === l.previousNode.type || 0 == p && l.currentTimeline.hasCurrentStyleProperties()) && (l.currentTimeline.snapshotCurrentStyles(),
                l.previousNode = Dr);
                let N = p;
                const x = l.invokeQuery(o.selector, o.originalSelector, o.limit, o.includeSelf, !!E.optional, l.errors);
                l.currentQueryTotal = x.length;
                let U = null;
                x.forEach((V,Se)=>{
                    l.currentQueryIndex = Se;
                    const Ie = l.createSubContext(o.options, V);
                    I && Ie.delayNextStep(I),
                    V === l.element && (U = Ie.currentTimeline),
                    tn(this, o.animation, Ie),
                    Ie.currentTimeline.applyStylesToKeyframe(),
                    N = Math.max(N, Ie.currentTimeline.currentTime)
                }
                ),
                l.currentQueryIndex = 0,
                l.currentQueryTotal = 0,
                l.transformIntoNewTimeline(N),
                U && (l.currentTimeline.mergeTimelineCollectedStyles(U),
                l.currentTimeline.snapshotCurrentStyles()),
                l.previousNode = o
            }
            visitStagger(o, l) {
                const p = l.parentContext
                  , E = l.currentTimeline
                  , I = o.timings
                  , N = Math.abs(I.duration)
                  , x = N * (l.currentQueryTotal - 1);
                let U = N * l.currentQueryIndex;
                switch (I.duration < 0 ? "reverse" : I.easing) {
                case "reverse":
                    U = x - U;
                    break;
                case "full":
                    U = p.currentStaggerTime
                }
                const Se = l.currentTimeline;
                U && Se.delayNextStep(U);
                const Ie = Se.currentTime;
                tn(this, o.animation, l),
                l.previousNode = o,
                p.currentStaggerTime = E.currentTime - Ie + (E.startTime - p.currentTimeline.startTime)
            }
        }
        const Dr = {};
        class Qn {
            constructor(o, l, p, E, I, N, x, U) {
                this._driver = o,
                this.element = l,
                this.subInstructions = p,
                this._enterClassName = E,
                this._leaveClassName = I,
                this.errors = N,
                this.timelines = x,
                this.parentContext = null,
                this.currentAnimateTimings = null,
                this.previousNode = Dr,
                this.subContextCount = 0,
                this.options = {},
                this.currentQueryIndex = 0,
                this.currentQueryTotal = 0,
                this.currentStaggerTime = 0,
                this.currentTimeline = U || new Ds(this._driver,l,0),
                x.push(this.currentTimeline)
            }
            get params() {
                return this.options.params
            }
            updateOptions(o, l) {
                if (!o)
                    return;
                const p = o;
                let E = this.options;
                null != p.duration && (E.duration = yr(p.duration)),
                null != p.delay && (E.delay = yr(p.delay));
                const I = p.params;
                if (I) {
                    let N = E.params;
                    N || (N = this.options.params = {}),
                    Object.keys(I).forEach(x=>{
                        (!l || !N.hasOwnProperty(x)) && (N[x] = Yn(I[x], N, this.errors))
                    }
                    )
                }
            }
            _copyOptions() {
                const o = {};
                if (this.options) {
                    const l = this.options.params;
                    if (l) {
                        const p = o.params = {};
                        Object.keys(l).forEach(E=>{
                            p[E] = l[E]
                        }
                        )
                    }
                }
                return o
            }
            createSubContext(o=null, l, p) {
                const E = l || this.element
                  , I = new Qn(this._driver,E,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(E, p || 0));
                return I.previousNode = this.previousNode,
                I.currentAnimateTimings = this.currentAnimateTimings,
                I.options = this._copyOptions(),
                I.updateOptions(o),
                I.currentQueryIndex = this.currentQueryIndex,
                I.currentQueryTotal = this.currentQueryTotal,
                I.parentContext = this,
                this.subContextCount++,
                I
            }
            transformIntoNewTimeline(o) {
                return this.previousNode = Dr,
                this.currentTimeline = this.currentTimeline.fork(this.element, o),
                this.timelines.push(this.currentTimeline),
                this.currentTimeline
            }
            appendInstructionToTimeline(o, l, p) {
                const E = {
                    duration: l ?? o.duration,
                    delay: this.currentTimeline.currentTime + (p ?? 0) + o.delay,
                    easing: ""
                }
                  , I = new Vi(this._driver,o.element,o.keyframes,o.preStyleProps,o.postStyleProps,E,o.stretchStartingKeyframe);
                return this.timelines.push(I),
                E
            }
            incrementTime(o) {
                this.currentTimeline.forwardTime(this.currentTimeline.duration + o)
            }
            delayNextStep(o) {
                o > 0 && this.currentTimeline.delayNextStep(o)
            }
            invokeQuery(o, l, p, E, I, N) {
                let x = [];
                if (E && x.push(this.element),
                o.length > 0) {
                    o = (o = o.replace(ys, "." + this._enterClassName)).replace(un, "." + this._leaveClassName);
                    let V = this._driver.query(this.element, o, 1 != p);
                    0 !== p && (V = p < 0 ? V.slice(V.length + p, V.length) : V.slice(0, p)),
                    x.push(...V)
                }
                return !I && 0 == x.length && N.push(function ls(v) {
                    return new O.vHH(3014,!1)
                }()),
                x
            }
        }
        class Ds {
            constructor(o, l, p, E) {
                this._driver = o,
                this.element = l,
                this.startTime = p,
                this._elementTimelineStylesLookup = E,
                this.duration = 0,
                this.easing = null,
                this._previousKeyframe = new Map,
                this._currentKeyframe = new Map,
                this._keyframes = new Map,
                this._styleSummary = new Map,
                this._localTimelineStyles = new Map,
                this._pendingStyles = new Map,
                this._backFill = new Map,
                this._currentEmptyStepKeyframe = null,
                this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map),
                this._globalTimelineStyles = this._elementTimelineStylesLookup.get(l),
                this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles,
                this._elementTimelineStylesLookup.set(l, this._localTimelineStyles)),
                this._loadKeyframe()
            }
            containsAnimation() {
                switch (this._keyframes.size) {
                case 0:
                    return !1;
                case 1:
                    return this.hasCurrentStyleProperties();
                default:
                    return !0
                }
            }
            hasCurrentStyleProperties() {
                return this._currentKeyframe.size > 0
            }
            get currentTime() {
                return this.startTime + this.duration
            }
            delayNextStep(o) {
                const l = 1 === this._keyframes.size && this._pendingStyles.size;
                this.duration || l ? (this.forwardTime(this.currentTime + o),
                l && this.snapshotCurrentStyles()) : this.startTime += o
            }
            fork(o, l) {
                return this.applyStylesToKeyframe(),
                new Ds(this._driver,o,l || this.currentTime,this._elementTimelineStylesLookup)
            }
            _loadKeyframe() {
                this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe),
                this._currentKeyframe = this._keyframes.get(this.duration),
                this._currentKeyframe || (this._currentKeyframe = new Map,
                this._keyframes.set(this.duration, this._currentKeyframe))
            }
            forwardFrame() {
                this.duration += 1,
                this._loadKeyframe()
            }
            forwardTime(o) {
                this.applyStylesToKeyframe(),
                this.duration = o,
                this._loadKeyframe()
            }
            _updateStyle(o, l) {
                this._localTimelineStyles.set(o, l),
                this._globalTimelineStyles.set(o, l),
                this._styleSummary.set(o, {
                    time: this.currentTime,
                    value: l
                })
            }
            allowOnlyTimelineStyles() {
                return this._currentEmptyStepKeyframe !== this._currentKeyframe
            }
            applyEmptyStep(o) {
                o && this._previousKeyframe.set("easing", o);
                for (let[l,p] of this._globalTimelineStyles)
                    this._backFill.set(l, p || Ut),
                    this._currentKeyframe.set(l, Ut);
                this._currentEmptyStepKeyframe = this._currentKeyframe
            }
            setStyles(o, l, p, E) {
                l && this._previousKeyframe.set("easing", l);
                const I = E && E.params || {}
                  , N = function mo(v, o) {
                    const l = new Map;
                    let p;
                    return v.forEach(E=>{
                        if ("*" === E) {
                            p = p || o.keys();
                            for (let I of p)
                                l.set(I, Ut)
                        } else
                            on(E, l)
                    }
                    ),
                    l
                }(o, this._globalTimelineStyles);
                for (let[x,U] of N) {
                    const V = Yn(U, I, p);
                    this._pendingStyles.set(x, V),
                    this._localTimelineStyles.has(x) || this._backFill.set(x, this._globalTimelineStyles.get(x) ?? Ut),
                    this._updateStyle(x, V)
                }
            }
            applyStylesToKeyframe() {
                0 != this._pendingStyles.size && (this._pendingStyles.forEach((o,l)=>{
                    this._currentKeyframe.set(l, o)
                }
                ),
                this._pendingStyles.clear(),
                this._localTimelineStyles.forEach((o,l)=>{
                    this._currentKeyframe.has(l) || this._currentKeyframe.set(l, o)
                }
                ))
            }
            snapshotCurrentStyles() {
                for (let[o,l] of this._localTimelineStyles)
                    this._pendingStyles.set(o, l),
                    this._updateStyle(o, l)
            }
            getFinalKeyframe() {
                return this._keyframes.get(this.duration)
            }
            get properties() {
                const o = [];
                for (let l in this._currentKeyframe)
                    o.push(l);
                return o
            }
            mergeTimelineCollectedStyles(o) {
                o._styleSummary.forEach((l,p)=>{
                    const E = this._styleSummary.get(p);
                    (!E || l.time > E.time) && this._updateStyle(p, l.value)
                }
                )
            }
            buildKeyframes() {
                this.applyStylesToKeyframe();
                const o = new Set
                  , l = new Set
                  , p = 1 === this._keyframes.size && 0 === this.duration;
                let E = [];
                this._keyframes.forEach((x,U)=>{
                    const V = on(x, new Map, this._backFill);
                    V.forEach((Se,Ie)=>{
                        Se === hr ? o.add(Ie) : Se === Ut && l.add(Ie)
                    }
                    ),
                    p || V.set("offset", U / this.duration),
                    E.push(V)
                }
                );
                const I = o.size ? Kr(o.values()) : []
                  , N = l.size ? Kr(l.values()) : [];
                if (p) {
                    const x = E[0]
                      , U = new Map(x);
                    x.set("offset", 0),
                    U.set("offset", 1),
                    E = [x, U]
                }
                return ln(this.element, E, I, N, this.duration, this.startTime, this.easing, !1)
            }
        }
        class Vi extends Ds {
            constructor(o, l, p, E, I, N, x=!1) {
                super(o, l, N.delay),
                this.keyframes = p,
                this.preStyleProps = E,
                this.postStyleProps = I,
                this._stretchStartingKeyframe = x,
                this.timings = {
                    duration: N.duration,
                    delay: N.delay,
                    easing: N.easing
                }
            }
            containsAnimation() {
                return this.keyframes.length > 1
            }
            buildKeyframes() {
                let o = this.keyframes
                  , {delay: l, duration: p, easing: E} = this.timings;
                if (this._stretchStartingKeyframe && l) {
                    const I = []
                      , N = p + l
                      , x = l / N
                      , U = on(o[0]);
                    U.set("offset", 0),
                    I.push(U);
                    const V = on(o[0]);
                    V.set("offset", Ys(x)),
                    I.push(V);
                    const Se = o.length - 1;
                    for (let Ie = 1; Ie <= Se; Ie++) {
                        let c = on(o[Ie]);
                        const d = c.get("offset");
                        c.set("offset", Ys((l + d * p) / N)),
                        I.push(c)
                    }
                    p = N,
                    l = 0,
                    E = "",
                    o = I
                }
                return ln(this.element, o, this.preStyleProps, this.postStyleProps, p, l, E, !0)
            }
        }
        function Ys(v, o=3) {
            const l = Math.pow(10, o - 1);
            return Math.round(v * l) / l
        }
        class Rr {
        }
        const qr = new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
        class Qs extends Rr {
            normalizePropertyName(o, l) {
                return Bi(o)
            }
            normalizeStyleValue(o, l, p, E) {
                let I = "";
                const N = p.toString().trim();
                if (qr.has(l) && 0 !== p && "0" !== p)
                    if ("number" == typeof p)
                        I = "px";
                    else {
                        const x = p.match(/^[+-]?[\d\.]+([a-z]*)$/);
                        x && 0 == x[1].length && E.push(function li(v, o) {
                            return new O.vHH(3005,!1)
                        }())
                    }
                return N + I
            }
        }
        function qs(v, o, l, p, E, I, N, x, U, V, Se, Ie, c) {
            return {
                type: 0,
                element: v,
                triggerName: o,
                isRemovalTransition: E,
                fromState: l,
                fromStyles: I,
                toState: p,
                toStyles: N,
                timelines: x,
                queriedElements: U,
                preStyleProps: V,
                postStyleProps: Se,
                totalTime: Ie,
                errors: c
            }
        }
        const Di = {};
        class Es {
            constructor(o, l, p) {
                this._triggerName = o,
                this.ast = l,
                this._stateStyles = p
            }
            match(o, l, p, E) {
                return function vo(v, o, l, p, E) {
                    return v.some(I=>I(o, l, p, E))
                }(this.ast.matchers, o, l, p, E)
            }
            buildStyles(o, l, p) {
                let E = this._stateStyles.get("*");
                return void 0 !== o && (E = this._stateStyles.get(o?.toString()) || E),
                E ? E.buildStyles(l, p) : new Map
            }
            build(o, l, p, E, I, N, x, U, V, Se) {
                const Ie = []
                  , c = this.ast.options && this.ast.options.params || Di
                  , a = this.buildStyles(p, x && x.params || Di, Ie)
                  , f = U && U.params || Di
                  , D = this.buildStyles(E, f, Ie)
                  , S = new Set
                  , T = new Map
                  , k = new Map
                  , G = "void" === E
                  , ve = {
                    params: Xs(f, c),
                    delay: this.ast.options?.delay
                }
                  , ge = Se ? [] : vn(o, l, this.ast.animation, I, N, a, D, ve, V, Ie);
                let qe = 0;
                if (ge.forEach(In=>{
                    qe = Math.max(In.duration + In.delay, qe)
                }
                ),
                Ie.length)
                    return qs(l, this._triggerName, p, E, G, a, D, [], [], T, k, qe, Ie);
                ge.forEach(In=>{
                    const cn = In.element
                      , ei = Nn(T, cn, new Set);
                    In.preStyleProps.forEach(Zi=>ei.add(Zi));
                    const Mn = Nn(k, cn, new Set);
                    In.postStyleProps.forEach(Zi=>Mn.add(Zi)),
                    cn !== l && S.add(cn)
                }
                );
                const Ct = Kr(S.values());
                return qs(l, this._triggerName, p, E, G, a, D, ge, Ct, T, k, qe)
            }
        }
        function Xs(v, o) {
            const l = sr(o);
            for (const p in v)
                v.hasOwnProperty(p) && null != v[p] && (l[p] = v[p]);
            return l
        }
        class Zs {
            constructor(o, l, p) {
                this.styles = o,
                this.defaultParams = l,
                this.normalizer = p
            }
            buildStyles(o, l) {
                const p = new Map
                  , E = sr(this.defaultParams);
                return Object.keys(o).forEach(I=>{
                    const N = o[I];
                    null !== N && (E[I] = N)
                }
                ),
                this.styles.styles.forEach(I=>{
                    "string" != typeof I && I.forEach((N,x)=>{
                        N && (N = Yn(N, E, l));
                        const U = this.normalizer.normalizePropertyName(x, l);
                        N = this.normalizer.normalizeStyleValue(x, U, N, l),
                        p.set(x, N)
                    }
                    )
                }
                ),
                p
            }
        }
        class jo {
            constructor(o, l, p) {
                this.name = o,
                this.ast = l,
                this._normalizer = p,
                this.transitionFactories = [],
                this.states = new Map,
                l.states.forEach(E=>{
                    this.states.set(E.name, new Zs(E.style,E.options && E.options.params || {},p))
                }
                ),
                Or(this.states, "true", "1"),
                Or(this.states, "false", "0"),
                l.transitions.forEach(E=>{
                    this.transitionFactories.push(new Es(o,E,this.states))
                }
                ),
                this.fallbackTransition = function Dn(v, o, l) {
                    return new Es(v,{
                        type: 1,
                        animation: {
                            type: 2,
                            steps: [],
                            options: null
                        },
                        matchers: [(N,x)=>!0],
                        options: null,
                        queryCount: 0,
                        depCount: 0
                    },o)
                }(o, this.states)
            }
            get containsQueries() {
                return this.ast.queryCount > 0
            }
            matchTransition(o, l, p, E) {
                return this.transitionFactories.find(N=>N.match(o, l, p, E)) || null
            }
            matchStyles(o, l, p) {
                return this.fallbackTransition.buildStyles(o, l, p)
            }
        }
        function Or(v, o, l) {
            v.has(o) ? v.has(l) || v.set(l, v.get(o)) : v.has(l) && v.set(o, v.get(l))
        }
        const Bt = new vi;
        class $o {
            constructor(o, l, p) {
                this.bodyNode = o,
                this._driver = l,
                this._normalizer = p,
                this._animations = new Map,
                this._playersById = new Map,
                this.players = []
            }
            register(o, l) {
                const p = []
                  , E = []
                  , I = yi(this._driver, l, p, E);
                if (p.length)
                    throw function yn(v) {
                        return new O.vHH(3503,!1)
                    }();
                this._animations.set(o, I)
            }
            _buildPlayer(o, l, p) {
                const E = o.element
                  , I = Bn(0, this._normalizer, 0, o.keyframes, l, p);
                return this._driver.animate(E, I, o.duration, o.delay, o.easing, [], !0)
            }
            create(o, l, p={}) {
                const E = []
                  , I = this._animations.get(o);
                let N;
                const x = new Map;
                if (I ? (N = vn(this._driver, l, I, Ar, fs, new Map, new Map, p, Bt, E),
                N.forEach(Se=>{
                    const Ie = Nn(x, Se.element, new Map);
                    Se.postStyleProps.forEach(c=>Ie.set(c, null))
                }
                )) : (E.push(function pn() {
                    return new O.vHH(3300,!1)
                }()),
                N = []),
                E.length)
                    throw function jt(v) {
                        return new O.vHH(3504,!1)
                    }();
                x.forEach((Se,Ie)=>{
                    Se.forEach((c,d)=>{
                        Se.set(d, this._driver.computeStyle(Ie, d, Ut))
                    }
                    )
                }
                );
                const V = Sn(N.map(Se=>{
                    const Ie = x.get(Se.element);
                    return this._buildPlayer(Se, new Map, Ie)
                }
                ));
                return this._playersById.set(o, V),
                V.onDestroy(()=>this.destroy(o)),
                this.players.push(V),
                V
            }
            destroy(o) {
                const l = this._getPlayer(o);
                l.destroy(),
                this._playersById.delete(o);
                const p = this.players.indexOf(l);
                p >= 0 && this.players.splice(p, 1)
            }
            _getPlayer(o) {
                const l = this._playersById.get(o);
                if (!l)
                    throw function nr(v) {
                        return new O.vHH(3301,!1)
                    }();
                return l
            }
            listen(o, l, p, E) {
                const I = It(l, "", "", "");
                return rr(this._getPlayer(o), p, I, E),
                ()=>{}
            }
            command(o, l, p, E) {
                if ("register" == p)
                    return void this.register(o, E[0]);
                if ("create" == p)
                    return void this.create(o, l, E[0] || {});
                const I = this._getPlayer(o);
                switch (p) {
                case "play":
                    I.play();
                    break;
                case "pause":
                    I.pause();
                    break;
                case "reset":
                    I.reset();
                    break;
                case "restart":
                    I.restart();
                    break;
                case "finish":
                    I.finish();
                    break;
                case "init":
                    I.init();
                    break;
                case "setPosition":
                    I.setPosition(parseFloat(E[0]));
                    break;
                case "destroy":
                    this.destroy(o)
                }
            }
        }
        const g = "ng-animate-queued"
          , y = "ng-animate-disabled"
          , te = []
          , Re = {
            namespaceId: "",
            setForRemoval: !1,
            setForMove: !1,
            hasAnimation: !1,
            removedBeforeQueried: !1
        }
          , mt = {
            namespaceId: "",
            setForMove: !1,
            setForRemoval: !1,
            hasAnimation: !1,
            removedBeforeQueried: !0
        }
          , st = "__ng_removed";
        class Et {
            get params() {
                return this.options.params
            }
            constructor(o, l="") {
                this.namespaceId = l;
                const p = o && o.hasOwnProperty("value");
                if (this.value = function lr(v) {
                    return v ?? null
                }(p ? o.value : o),
                p) {
                    const I = sr(o);
                    delete I.value,
                    this.options = I
                } else
                    this.options = {};
                this.options.params || (this.options.params = {})
            }
            absorbOptions(o) {
                const l = o.params;
                if (l) {
                    const p = this.options.params;
                    Object.keys(l).forEach(E=>{
                        null == p[E] && (p[E] = l[E])
                    }
                    )
                }
            }
        }
        const it = "void"
          , Pt = new Et(it);
        class Mt {
            constructor(o, l, p) {
                this.id = o,
                this.hostElement = l,
                this._engine = p,
                this.players = [],
                this._triggers = new Map,
                this._queue = [],
                this._elementListeners = new Map,
                this._hostClassName = "ng-tns-" + o,
                Ln(l, this._hostClassName)
            }
            listen(o, l, p, E) {
                if (!this._triggers.has(l))
                    throw function xt(v, o) {
                        return new O.vHH(3302,!1)
                    }();
                if (null == p || 0 == p.length)
                    throw function us(v) {
                        return new O.vHH(3303,!1)
                    }();
                if (!function Gi(v) {
                    return "start" == v || "done" == v
                }(p))
                    throw function di(v, o) {
                        return new O.vHH(3400,!1)
                    }();
                const I = Nn(this._elementListeners, o, [])
                  , N = {
                    name: l,
                    phase: p,
                    callback: E
                };
                I.push(N);
                const x = Nn(this._engine.statesByElement, o, new Map);
                return x.has(l) || (Ln(o, hs),
                Ln(o, hs + "-" + l),
                x.set(l, Pt)),
                ()=>{
                    this._engine.afterFlush(()=>{
                        const U = I.indexOf(N);
                        U >= 0 && I.splice(U, 1),
                        this._triggers.has(l) || x.delete(l)
                    }
                    )
                }
            }
            register(o, l) {
                return !this._triggers.has(o) && (this._triggers.set(o, l),
                !0)
            }
            _getTrigger(o) {
                const l = this._triggers.get(o);
                if (!l)
                    throw function lt(v) {
                        return new O.vHH(3401,!1)
                    }();
                return l
            }
            trigger(o, l, p, E=!0) {
                const I = this._getTrigger(l)
                  , N = new xn(this.id,l,o);
                let x = this._engine.statesByElement.get(o);
                x || (Ln(o, hs),
                Ln(o, hs + "-" + l),
                this._engine.statesByElement.set(o, x = new Map));
                let U = x.get(l);
                const V = new Et(p,this.id);
                if (!(p && p.hasOwnProperty("value")) && U && V.absorbOptions(U.options),
                x.set(l, V),
                U || (U = Pt),
                V.value !== it && U.value === V.value) {
                    if (!function _a(v, o) {
                        const l = Object.keys(v)
                          , p = Object.keys(o);
                        if (l.length != p.length)
                            return !1;
                        for (let E = 0; E < l.length; E++) {
                            const I = l[E];
                            if (!o.hasOwnProperty(I) || v[I] !== o[I])
                                return !1
                        }
                        return !0
                    }(U.params, V.params)) {
                        const f = []
                          , D = I.matchStyles(U.value, U.params, f)
                          , S = I.matchStyles(V.value, V.params, f);
                        f.length ? this._engine.reportError(f) : this._engine.afterFlush(()=>{
                            Wr(o, D),
                            or(o, S)
                        }
                        )
                    }
                    return
                }
                const c = Nn(this._engine.playersByElement, o, []);
                c.forEach(f=>{
                    f.namespaceId == this.id && f.triggerName == l && f.queued && f.destroy()
                }
                );
                let d = I.matchTransition(U.value, V.value, o, V.params)
                  , a = !1;
                if (!d) {
                    if (!E)
                        return;
                    d = I.fallbackTransition,
                    a = !0
                }
                return this._engine.totalQueuedPlayers++,
                this._queue.push({
                    element: o,
                    triggerName: l,
                    transition: d,
                    fromState: U,
                    toState: V,
                    player: N,
                    isFallbackTransition: a
                }),
                a || (Ln(o, g),
                N.onStart(()=>{
                    _r(o, g)
                }
                )),
                N.onDone(()=>{
                    let f = this.players.indexOf(N);
                    f >= 0 && this.players.splice(f, 1);
                    const D = this._engine.playersByElement.get(o);
                    if (D) {
                        let S = D.indexOf(N);
                        S >= 0 && D.splice(S, 1)
                    }
                }
                ),
                this.players.push(N),
                c.push(N),
                N
            }
            deregister(o) {
                this._triggers.delete(o),
                this._engine.statesByElement.forEach(l=>l.delete(o)),
                this._elementListeners.forEach((l,p)=>{
                    this._elementListeners.set(p, l.filter(E=>E.name != o))
                }
                )
            }
            clearElementCache(o) {
                this._engine.statesByElement.delete(o),
                this._elementListeners.delete(o);
                const l = this._engine.playersByElement.get(o);
                l && (l.forEach(p=>p.destroy()),
                this._engine.playersByElement.delete(o))
            }
            _signalRemovalForInnerTriggers(o, l) {
                const p = this._engine.driver.query(o, pi, !0);
                p.forEach(E=>{
                    if (E[st])
                        return;
                    const I = this._engine.fetchNamespacesByElement(E);
                    I.size ? I.forEach(N=>N.triggerLeaveAnimation(E, l, !1, !0)) : this.clearElementCache(E)
                }
                ),
                this._engine.afterFlushAnimationsDone(()=>p.forEach(E=>this.clearElementCache(E)))
            }
            triggerLeaveAnimation(o, l, p, E) {
                const I = this._engine.statesByElement.get(o)
                  , N = new Map;
                if (I) {
                    const x = [];
                    if (I.forEach((U,V)=>{
                        if (N.set(V, U.value),
                        this._triggers.has(V)) {
                            const Se = this.trigger(o, V, it, E);
                            Se && x.push(Se)
                        }
                    }
                    ),
                    x.length)
                        return this._engine.markElementAsRemoved(this.id, o, !0, l, N),
                        p && Sn(x).onDone(()=>this._engine.processLeaveNode(o)),
                        !0
                }
                return !1
            }
            prepareLeaveAnimationListeners(o) {
                const l = this._elementListeners.get(o)
                  , p = this._engine.statesByElement.get(o);
                if (l && p) {
                    const E = new Set;
                    l.forEach(I=>{
                        const N = I.name;
                        if (E.has(N))
                            return;
                        E.add(N);
                        const U = this._triggers.get(N).fallbackTransition
                          , V = p.get(N) || Pt
                          , Se = new Et(it)
                          , Ie = new xn(this.id,N,o);
                        this._engine.totalQueuedPlayers++,
                        this._queue.push({
                            element: o,
                            triggerName: N,
                            transition: U,
                            fromState: V,
                            toState: Se,
                            player: Ie,
                            isFallbackTransition: !0
                        })
                    }
                    )
                }
            }
            removeNode(o, l) {
                const p = this._engine;
                if (o.childElementCount && this._signalRemovalForInnerTriggers(o, l),
                this.triggerLeaveAnimation(o, l, !0))
                    return;
                let E = !1;
                if (p.totalAnimations) {
                    const I = p.players.length ? p.playersByQueriedElement.get(o) : [];
                    if (I && I.length)
                        E = !0;
                    else {
                        let N = o;
                        for (; N = N.parentNode; )
                            if (p.statesByElement.get(N)) {
                                E = !0;
                                break
                            }
                    }
                }
                if (this.prepareLeaveAnimationListeners(o),
                E)
                    p.markElementAsRemoved(this.id, o, !1, l);
                else {
                    const I = o[st];
                    (!I || I === Re) && (p.afterFlush(()=>this.clearElementCache(o)),
                    p.destroyInnerAnimations(o),
                    p._onRemovalComplete(o, l))
                }
            }
            insertNode(o, l) {
                Ln(o, this._hostClassName)
            }
            drainQueuedTransitions(o) {
                const l = [];
                return this._queue.forEach(p=>{
                    const E = p.player;
                    if (E.destroyed)
                        return;
                    const I = p.element
                      , N = this._elementListeners.get(I);
                    N && N.forEach(x=>{
                        if (x.name == p.triggerName) {
                            const U = It(I, p.triggerName, p.fromState.value, p.toState.value);
                            U._data = o,
                            rr(p.player, x.phase, U, x.callback)
                        }
                    }
                    ),
                    E.markedForDestroy ? this._engine.afterFlush(()=>{
                        E.destroy()
                    }
                    ) : l.push(p)
                }
                ),
                this._queue = [],
                l.sort((p,E)=>{
                    const I = p.transition.ast.depCount
                      , N = E.transition.ast.depCount;
                    return 0 == I || 0 == N ? I - N : this._engine.driver.containsElement(p.element, E.element) ? 1 : -1
                }
                )
            }
            destroy(o) {
                this.players.forEach(l=>l.destroy()),
                this._signalRemovalForInnerTriggers(this.hostElement, o)
            }
            elementContainsData(o) {
                let l = !1;
                return this._elementListeners.has(o) && (l = !0),
                l = !!this._queue.find(p=>p.element === o) || l,
                l
            }
        }
        class Xt {
            _onRemovalComplete(o, l) {
                this.onRemovalComplete(o, l)
            }
            constructor(o, l, p) {
                this.bodyNode = o,
                this.driver = l,
                this._normalizer = p,
                this.players = [],
                this.newHostElements = new Map,
                this.playersByElement = new Map,
                this.playersByQueriedElement = new Map,
                this.statesByElement = new Map,
                this.disabledNodes = new Set,
                this.totalAnimations = 0,
                this.totalQueuedPlayers = 0,
                this._namespaceLookup = {},
                this._namespaceList = [],
                this._flushFns = [],
                this._whenQuietFns = [],
                this.namespacesByHostElement = new Map,
                this.collectedEnterElements = [],
                this.collectedLeaveElements = [],
                this.onRemovalComplete = (E,I)=>{}
            }
            get queuedPlayers() {
                const o = [];
                return this._namespaceList.forEach(l=>{
                    l.players.forEach(p=>{
                        p.queued && o.push(p)
                    }
                    )
                }
                ),
                o
            }
            createNamespace(o, l) {
                const p = new Mt(o,l,this);
                return this.bodyNode && this.driver.containsElement(this.bodyNode, l) ? this._balanceNamespaceList(p, l) : (this.newHostElements.set(l, p),
                this.collectEnterElement(l)),
                this._namespaceLookup[o] = p
            }
            _balanceNamespaceList(o, l) {
                const p = this._namespaceList
                  , E = this.namespacesByHostElement;
                if (p.length - 1 >= 0) {
                    let N = !1
                      , x = this.driver.getParentElement(l);
                    for (; x; ) {
                        const U = E.get(x);
                        if (U) {
                            const V = p.indexOf(U);
                            p.splice(V + 1, 0, o),
                            N = !0;
                            break
                        }
                        x = this.driver.getParentElement(x)
                    }
                    N || p.unshift(o)
                } else
                    p.push(o);
                return E.set(l, o),
                o
            }
            register(o, l) {
                let p = this._namespaceLookup[o];
                return p || (p = this.createNamespace(o, l)),
                p
            }
            registerTrigger(o, l, p) {
                let E = this._namespaceLookup[o];
                E && E.register(l, p) && this.totalAnimations++
            }
            destroy(o, l) {
                if (!o)
                    return;
                const p = this._fetchNamespace(o);
                this.afterFlush(()=>{
                    this.namespacesByHostElement.delete(p.hostElement),
                    delete this._namespaceLookup[o];
                    const E = this._namespaceList.indexOf(p);
                    E >= 0 && this._namespaceList.splice(E, 1)
                }
                ),
                this.afterFlushAnimationsDone(()=>p.destroy(l))
            }
            _fetchNamespace(o) {
                return this._namespaceLookup[o]
            }
            fetchNamespacesByElement(o) {
                const l = new Set
                  , p = this.statesByElement.get(o);
                if (p)
                    for (let E of p.values())
                        if (E.namespaceId) {
                            const I = this._fetchNamespace(E.namespaceId);
                            I && l.add(I)
                        }
                return l
            }
            trigger(o, l, p, E) {
                if (jn(l)) {
                    const I = this._fetchNamespace(o);
                    if (I)
                        return I.trigger(l, p, E),
                        !0
                }
                return !1
            }
            insertNode(o, l, p, E) {
                if (!jn(l))
                    return;
                const I = l[st];
                if (I && I.setForRemoval) {
                    I.setForRemoval = !1,
                    I.setForMove = !0;
                    const N = this.collectedLeaveElements.indexOf(l);
                    N >= 0 && this.collectedLeaveElements.splice(N, 1)
                }
                if (o) {
                    const N = this._fetchNamespace(o);
                    N && N.insertNode(l, p)
                }
                E && this.collectEnterElement(l)
            }
            collectEnterElement(o) {
                this.collectedEnterElements.push(o)
            }
            markElementAsDisabled(o, l) {
                l ? this.disabledNodes.has(o) || (this.disabledNodes.add(o),
                Ln(o, y)) : this.disabledNodes.has(o) && (this.disabledNodes.delete(o),
                _r(o, y))
            }
            removeNode(o, l, p, E) {
                if (jn(l)) {
                    const I = o ? this._fetchNamespace(o) : null;
                    if (I ? I.removeNode(l, E) : this.markElementAsRemoved(o, l, !1, E),
                    p) {
                        const N = this.namespacesByHostElement.get(l);
                        N && N.id !== o && N.removeNode(l, E)
                    }
                } else
                    this._onRemovalComplete(l, E)
            }
            markElementAsRemoved(o, l, p, E, I) {
                this.collectedLeaveElements.push(l),
                l[st] = {
                    namespaceId: o,
                    setForRemoval: E,
                    hasAnimation: p,
                    removedBeforeQueried: !1,
                    previousTriggersValues: I
                }
            }
            listen(o, l, p, E, I) {
                return jn(l) ? this._fetchNamespace(o).listen(l, p, E, I) : ()=>{}
            }
            _buildInstruction(o, l, p, E, I) {
                return o.transition.build(this.driver, o.element, o.fromState.value, o.toState.value, p, E, o.fromState.options, o.toState.options, l, I)
            }
            destroyInnerAnimations(o) {
                let l = this.driver.query(o, pi, !0);
                l.forEach(p=>this.destroyActiveAnimationsForElement(p)),
                0 != this.playersByQueriedElement.size && (l = this.driver.query(o, ps, !0),
                l.forEach(p=>this.finishActiveQueriedAnimationOnElement(p)))
            }
            destroyActiveAnimationsForElement(o) {
                const l = this.playersByElement.get(o);
                l && l.forEach(p=>{
                    p.queued ? p.markedForDestroy = !0 : p.destroy()
                }
                )
            }
            finishActiveQueriedAnimationOnElement(o) {
                const l = this.playersByQueriedElement.get(o);
                l && l.forEach(p=>p.finish())
            }
            whenRenderingDone() {
                return new Promise(o=>{
                    if (this.players.length)
                        return Sn(this.players).onDone(()=>o());
                    o()
                }
                )
            }
            processLeaveNode(o) {
                const l = o[st];
                if (l && l.setForRemoval) {
                    if (o[st] = Re,
                    l.namespaceId) {
                        this.destroyInnerAnimations(o);
                        const p = this._fetchNamespace(l.namespaceId);
                        p && p.clearElementCache(o)
                    }
                    this._onRemovalComplete(o, l.setForRemoval)
                }
                o.classList?.contains(y) && this.markElementAsDisabled(o, !1),
                this.driver.query(o, ".ng-animate-disabled", !0).forEach(p=>{
                    this.markElementAsDisabled(p, !1)
                }
                )
            }
            flush(o=-1) {
                let l = [];
                if (this.newHostElements.size && (this.newHostElements.forEach((p,E)=>this._balanceNamespaceList(p, E)),
                this.newHostElements.clear()),
                this.totalAnimations && this.collectedEnterElements.length)
                    for (let p = 0; p < this.collectedEnterElements.length; p++)
                        Ln(this.collectedEnterElements[p], "ng-star-inserted");
                if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
                    const p = [];
                    try {
                        l = this._flushAnimations(p, o)
                    } finally {
                        for (let E = 0; E < p.length; E++)
                            p[E]()
                    }
                } else
                    for (let p = 0; p < this.collectedLeaveElements.length; p++)
                        this.processLeaveNode(this.collectedLeaveElements[p]);
                if (this.totalQueuedPlayers = 0,
                this.collectedEnterElements.length = 0,
                this.collectedLeaveElements.length = 0,
                this._flushFns.forEach(p=>p()),
                this._flushFns = [],
                this._whenQuietFns.length) {
                    const p = this._whenQuietFns;
                    this._whenQuietFns = [],
                    l.length ? Sn(l).onDone(()=>{
                        p.forEach(E=>E())
                    }
                    ) : p.forEach(E=>E())
                }
            }
            reportError(o) {
                throw function xs(v) {
                    return new O.vHH(3402,!1)
                }()
            }
            _flushAnimations(o, l) {
                const p = new vi
                  , E = []
                  , I = new Map
                  , N = []
                  , x = new Map
                  , U = new Map
                  , V = new Map
                  , Se = new Set;
                this.disabledNodes.forEach(He=>{
                    Se.add(He);
                    const ze = this.driver.query(He, ".ng-animate-queued", !0);
                    for (let Xe = 0; Xe < ze.length; Xe++)
                        Se.add(ze[Xe])
                }
                );
                const Ie = this.bodyNode
                  , c = Array.from(this.statesByElement.keys())
                  , d = Js(c, this.collectedEnterElements)
                  , a = new Map;
                let f = 0;
                d.forEach((He,ze)=>{
                    const Xe = Ar + f++;
                    a.set(ze, Xe),
                    He.forEach(_t=>Ln(_t, Xe))
                }
                );
                const D = []
                  , S = new Set
                  , T = new Set;
                for (let He = 0; He < this.collectedLeaveElements.length; He++) {
                    const ze = this.collectedLeaveElements[He]
                      , Xe = ze[st];
                    Xe && Xe.setForRemoval && (D.push(ze),
                    S.add(ze),
                    Xe.hasAnimation ? this.driver.query(ze, ".ng-star-inserted", !0).forEach(_t=>S.add(_t)) : T.add(ze))
                }
                const k = new Map
                  , G = Js(c, Array.from(S));
                G.forEach((He,ze)=>{
                    const Xe = fs + f++;
                    k.set(ze, Xe),
                    He.forEach(_t=>Ln(_t, Xe))
                }
                ),
                o.push(()=>{
                    d.forEach((He,ze)=>{
                        const Xe = a.get(ze);
                        He.forEach(_t=>_r(_t, Xe))
                    }
                    ),
                    G.forEach((He,ze)=>{
                        const Xe = k.get(ze);
                        He.forEach(_t=>_r(_t, Xe))
                    }
                    ),
                    D.forEach(He=>{
                        this.processLeaveNode(He)
                    }
                    )
                }
                );
                const ve = []
                  , ge = [];
                for (let He = this._namespaceList.length - 1; He >= 0; He--)
                    this._namespaceList[He].drainQueuedTransitions(l).forEach(Xe=>{
                        const _t = Xe.player
                          , Zt = Xe.element;
                        if (ve.push(_t),
                        this.collectedEnterElements.length) {
                            const An = Zt[st];
                            if (An && An.setForMove) {
                                if (An.previousTriggersValues && An.previousTriggersValues.has(Xe.triggerName)) {
                                    const Ms = An.previousTriggersValues.get(Xe.triggerName)
                                      , Sr = this.statesByElement.get(Xe.element);
                                    if (Sr && Sr.has(Xe.triggerName)) {
                                        const Ei = Sr.get(Xe.triggerName);
                                        Ei.value = Ms,
                                        Sr.set(Xe.triggerName, Ei)
                                    }
                                }
                                return void _t.destroy()
                            }
                        }
                        const Nr = !Ie || !this.driver.containsElement(Ie, Zt)
                          , Tn = k.get(Zt)
                          , Ji = a.get(Zt)
                          , zt = this._buildInstruction(Xe, p, Ji, Tn, Nr);
                        if (zt.errors && zt.errors.length)
                            return void ge.push(zt);
                        if (Nr)
                            return _t.onStart(()=>Wr(Zt, zt.fromStyles)),
                            _t.onDestroy(()=>or(Zt, zt.toStyles)),
                            void E.push(_t);
                        if (Xe.isFallbackTransition)
                            return _t.onStart(()=>Wr(Zt, zt.fromStyles)),
                            _t.onDestroy(()=>or(Zt, zt.toStyles)),
                            void E.push(_t);
                        const oo = [];
                        zt.timelines.forEach(An=>{
                            An.stretchStartingKeyframe = !0,
                            this.disabledNodes.has(An.element) || oo.push(An)
                        }
                        ),
                        zt.timelines = oo,
                        p.append(Zt, zt.timelines),
                        N.push({
                            instruction: zt,
                            player: _t,
                            element: Zt
                        }),
                        zt.queriedElements.forEach(An=>Nn(x, An, []).push(_t)),
                        zt.preStyleProps.forEach((An,Ms)=>{
                            if (An.size) {
                                let Sr = U.get(Ms);
                                Sr || U.set(Ms, Sr = new Set),
                                An.forEach((Ei,Ts)=>Sr.add(Ts))
                            }
                        }
                        ),
                        zt.postStyleProps.forEach((An,Ms)=>{
                            let Sr = V.get(Ms);
                            Sr || V.set(Ms, Sr = new Set),
                            An.forEach((Ei,Ts)=>Sr.add(Ts))
                        }
                        )
                    }
                    );
                if (ge.length) {
                    const He = [];
                    ge.forEach(ze=>{
                        He.push(function fo(v, o) {
                            return new O.vHH(3505,!1)
                        }())
                    }
                    ),
                    ve.forEach(ze=>ze.destroy()),
                    this.reportError(He)
                }
                const qe = new Map
                  , Ct = new Map;
                N.forEach(He=>{
                    const ze = He.element;
                    p.has(ze) && (Ct.set(ze, ze),
                    this._beforeAnimationBuild(He.player.namespaceId, He.instruction, qe))
                }
                ),
                E.forEach(He=>{
                    const ze = He.element;
                    this._getPreviousPlayers(ze, !1, He.namespaceId, He.triggerName, null).forEach(_t=>{
                        Nn(qe, ze, []).push(_t),
                        _t.destroy()
                    }
                    )
                }
                );
                const In = D.filter(He=>Zr(He, U, V))
                  , cn = new Map;
                Er(cn, this.driver, T, V, Ut).forEach(He=>{
                    Zr(He, U, V) && In.push(He)
                }
                );
                const Mn = new Map;
                d.forEach((He,ze)=>{
                    Er(Mn, this.driver, new Set(He), U, hr)
                }
                ),
                In.forEach(He=>{
                    const ze = cn.get(He)
                      , Xe = Mn.get(He);
                    cn.set(He, new Map([...Array.from(ze?.entries() ?? []), ...Array.from(Xe?.entries() ?? [])]))
                }
                );
                const Zi = []
                  , so = []
                  , qo = {};
                N.forEach(He=>{
                    const {element: ze, player: Xe, instruction: _t} = He;
                    if (p.has(ze)) {
                        if (Se.has(ze))
                            return Xe.onDestroy(()=>or(ze, _t.toStyles)),
                            Xe.disabled = !0,
                            Xe.overrideTotalTime(_t.totalTime),
                            void E.push(Xe);
                        let Zt = qo;
                        if (Ct.size > 1) {
                            let Tn = ze;
                            const Ji = [];
                            for (; Tn = Tn.parentNode; ) {
                                const zt = Ct.get(Tn);
                                if (zt) {
                                    Zt = zt;
                                    break
                                }
                                Ji.push(Tn)
                            }
                            Ji.forEach(zt=>Ct.set(zt, Zt))
                        }
                        const Nr = this._buildAnimation(Xe.namespaceId, _t, qe, I, Mn, cn);
                        if (Xe.setRealPlayer(Nr),
                        Zt === qo)
                            Zi.push(Xe);
                        else {
                            const Tn = this.playersByElement.get(Zt);
                            Tn && Tn.length && (Xe.parentPlayer = Sn(Tn)),
                            E.push(Xe)
                        }
                    } else
                        Wr(ze, _t.fromStyles),
                        Xe.onDestroy(()=>or(ze, _t.toStyles)),
                        so.push(Xe),
                        Se.has(ze) && E.push(Xe)
                }
                ),
                so.forEach(He=>{
                    const ze = I.get(He.element);
                    if (ze && ze.length) {
                        const Xe = Sn(ze);
                        He.setRealPlayer(Xe)
                    }
                }
                ),
                E.forEach(He=>{
                    He.parentPlayer ? He.syncPlayerEvents(He.parentPlayer) : He.destroy()
                }
                );
                for (let He = 0; He < D.length; He++) {
                    const ze = D[He]
                      , Xe = ze[st];
                    if (_r(ze, fs),
                    Xe && Xe.hasAnimation)
                        continue;
                    let _t = [];
                    if (x.size) {
                        let Nr = x.get(ze);
                        Nr && Nr.length && _t.push(...Nr);
                        let Tn = this.driver.query(ze, ps, !0);
                        for (let Ji = 0; Ji < Tn.length; Ji++) {
                            let zt = x.get(Tn[Ji]);
                            zt && zt.length && _t.push(...zt)
                        }
                    }
                    const Zt = _t.filter(Nr=>!Nr.destroyed);
                    Zt.length ? Vo(this, ze, Zt) : this.processLeaveNode(ze)
                }
                return D.length = 0,
                Zi.forEach(He=>{
                    this.players.push(He),
                    He.onDone(()=>{
                        He.destroy();
                        const ze = this.players.indexOf(He);
                        this.players.splice(ze, 1)
                    }
                    ),
                    He.play()
                }
                ),
                Zi
            }
            elementContainsData(o, l) {
                let p = !1;
                const E = l[st];
                return E && E.setForRemoval && (p = !0),
                this.playersByElement.has(l) && (p = !0),
                this.playersByQueriedElement.has(l) && (p = !0),
                this.statesByElement.has(l) && (p = !0),
                this._fetchNamespace(o).elementContainsData(l) || p
            }
            afterFlush(o) {
                this._flushFns.push(o)
            }
            afterFlushAnimationsDone(o) {
                this._whenQuietFns.push(o)
            }
            _getPreviousPlayers(o, l, p, E, I) {
                let N = [];
                if (l) {
                    const x = this.playersByQueriedElement.get(o);
                    x && (N = x)
                } else {
                    const x = this.playersByElement.get(o);
                    if (x) {
                        const U = !I || I == it;
                        x.forEach(V=>{
                            V.queued || !U && V.triggerName != E || N.push(V)
                        }
                        )
                    }
                }
                return (p || E) && (N = N.filter(x=>!(p && p != x.namespaceId || E && E != x.triggerName))),
                N
            }
            _beforeAnimationBuild(o, l, p) {
                const I = l.element
                  , N = l.isRemovalTransition ? void 0 : o
                  , x = l.isRemovalTransition ? void 0 : l.triggerName;
                for (const U of l.timelines) {
                    const V = U.element
                      , Se = V !== I
                      , Ie = Nn(p, V, []);
                    this._getPreviousPlayers(V, Se, N, x, l.toState).forEach(d=>{
                        const a = d.getRealPlayer();
                        a.beforeDestroy && a.beforeDestroy(),
                        d.destroy(),
                        Ie.push(d)
                    }
                    )
                }
                Wr(I, l.fromStyles)
            }
            _buildAnimation(o, l, p, E, I, N) {
                const x = l.triggerName
                  , U = l.element
                  , V = []
                  , Se = new Set
                  , Ie = new Set
                  , c = l.timelines.map(a=>{
                    const f = a.element;
                    Se.add(f);
                    const D = f[st];
                    if (D && D.removedBeforeQueried)
                        return new ke(a.duration,a.delay);
                    const S = f !== U
                      , T = function zo(v) {
                        const o = [];
                        return _s(v, o),
                        o
                    }((p.get(f) || te).map(qe=>qe.getRealPlayer())).filter(qe=>!!qe.element && qe.element === f)
                      , k = I.get(f)
                      , G = N.get(f)
                      , ve = Bn(0, this._normalizer, 0, a.keyframes, k, G)
                      , ge = this._buildPlayer(a, ve, T);
                    if (a.subTimeline && E && Ie.add(f),
                    S) {
                        const qe = new xn(o,x,f);
                        qe.setRealPlayer(ge),
                        V.push(qe)
                    }
                    return ge
                }
                );
                V.forEach(a=>{
                    Nn(this.playersByQueriedElement, a.element, []).push(a),
                    a.onDone(()=>function En(v, o, l) {
                        let p = v.get(o);
                        if (p) {
                            if (p.length) {
                                const E = p.indexOf(l);
                                p.splice(E, 1)
                            }
                            0 == p.length && v.delete(o)
                        }
                        return p
                    }(this.playersByQueriedElement, a.element, a))
                }
                ),
                Se.forEach(a=>Ln(a, ks));
                const d = Sn(c);
                return d.onDestroy(()=>{
                    Se.forEach(a=>_r(a, ks)),
                    or(U, l.toStyles)
                }
                ),
                Ie.forEach(a=>{
                    Nn(E, a, []).push(d)
                }
                ),
                d
            }
            _buildPlayer(o, l, p) {
                return l.length > 0 ? this.driver.animate(o.element, l, o.duration, o.delay, o.easing, p) : new ke(o.duration,o.delay)
            }
        }
        class xn {
            constructor(o, l, p) {
                this.namespaceId = o,
                this.triggerName = l,
                this.element = p,
                this._player = new ke,
                this._containsRealPlayer = !1,
                this._queuedCallbacks = new Map,
                this.destroyed = !1,
                this.parentPlayer = null,
                this.markedForDestroy = !1,
                this.disabled = !1,
                this.queued = !0,
                this.totalTime = 0
            }
            setRealPlayer(o) {
                this._containsRealPlayer || (this._player = o,
                this._queuedCallbacks.forEach((l,p)=>{
                    l.forEach(E=>rr(o, p, void 0, E))
                }
                ),
                this._queuedCallbacks.clear(),
                this._containsRealPlayer = !0,
                this.overrideTotalTime(o.totalTime),
                this.queued = !1)
            }
            getRealPlayer() {
                return this._player
            }
            overrideTotalTime(o) {
                this.totalTime = o
            }
            syncPlayerEvents(o) {
                const l = this._player;
                l.triggerCallback && o.onStart(()=>l.triggerCallback("start")),
                o.onDone(()=>this.finish()),
                o.onDestroy(()=>this.destroy())
            }
            _queueEvent(o, l) {
                Nn(this._queuedCallbacks, o, []).push(l)
            }
            onDone(o) {
                this.queued && this._queueEvent("done", o),
                this._player.onDone(o)
            }
            onStart(o) {
                this.queued && this._queueEvent("start", o),
                this._player.onStart(o)
            }
            onDestroy(o) {
                this.queued && this._queueEvent("destroy", o),
                this._player.onDestroy(o)
            }
            init() {
                this._player.init()
            }
            hasStarted() {
                return !this.queued && this._player.hasStarted()
            }
            play() {
                !this.queued && this._player.play()
            }
            pause() {
                !this.queued && this._player.pause()
            }
            restart() {
                !this.queued && this._player.restart()
            }
            finish() {
                this._player.finish()
            }
            destroy() {
                this.destroyed = !0,
                this._player.destroy()
            }
            reset() {
                !this.queued && this._player.reset()
            }
            setPosition(o) {
                this.queued || this._player.setPosition(o)
            }
            getPosition() {
                return this.queued ? 0 : this._player.getPosition()
            }
            triggerCallback(o) {
                const l = this._player;
                l.triggerCallback && l.triggerCallback(o)
            }
        }
        function jn(v) {
            return v && 1 === v.nodeType
        }
        function Xr(v, o) {
            const l = v.style.display;
            return v.style.display = o ?? "none",
            l
        }
        function Er(v, o, l, p, E) {
            const I = [];
            l.forEach(U=>I.push(Xr(U)));
            const N = [];
            p.forEach((U,V)=>{
                const Se = new Map;
                U.forEach(Ie=>{
                    const c = o.computeStyle(V, Ie, E);
                    Se.set(Ie, c),
                    (!c || 0 == c.length) && (V[st] = mt,
                    N.push(V))
                }
                ),
                v.set(V, Se)
            }
            );
            let x = 0;
            return l.forEach(U=>Xr(U, I[x++])),
            N
        }
        function Js(v, o) {
            const l = new Map;
            if (v.forEach(x=>l.set(x, [])),
            0 == o.length)
                return l;
            const p = 1
              , E = new Set(o)
              , I = new Map;
            function N(x) {
                if (!x)
                    return p;
                let U = I.get(x);
                if (U)
                    return U;
                const V = x.parentNode;
                return U = l.has(V) ? V : E.has(V) ? p : N(V),
                I.set(x, U),
                U
            }
            return o.forEach(x=>{
                const U = N(x);
                U !== p && l.get(U).push(x)
            }
            ),
            l
        }
        function Ln(v, o) {
            v.classList?.add(o)
        }
        function _r(v, o) {
            v.classList?.remove(o)
        }
        function Vo(v, o, l) {
            Sn(l).onDone(()=>v.processLeaveNode(o))
        }
        function _s(v, o) {
            for (let l = 0; l < v.length; l++) {
                const p = v[l];
                p instanceof Tt ? _s(p.players, o) : o.push(p)
            }
        }
        function Zr(v, o, l) {
            const p = l.get(v);
            if (!p)
                return !1;
            let E = o.get(v);
            return E ? p.forEach(I=>E.add(I)) : o.set(v, p),
            l.delete(v),
            !0
        }
        class Wi {
            constructor(o, l, p) {
                this.bodyNode = o,
                this._driver = l,
                this._normalizer = p,
                this._triggerCache = {},
                this.onRemovalComplete = (E,I)=>{}
                ,
                this._transitionEngine = new Xt(o,l,p),
                this._timelineEngine = new $o(o,l,p),
                this._transitionEngine.onRemovalComplete = (E,I)=>this.onRemovalComplete(E, I)
            }
            registerTrigger(o, l, p, E, I) {
                const N = o + "-" + E;
                let x = this._triggerCache[N];
                if (!x) {
                    const U = []
                      , V = []
                      , Se = yi(this._driver, I, U, V);
                    if (U.length)
                        throw function et(v, o) {
                            return new O.vHH(3404,!1)
                        }();
                    x = function Uo(v, o, l) {
                        return new jo(v,o,l)
                    }(E, Se, this._normalizer),
                    this._triggerCache[N] = x
                }
                this._transitionEngine.registerTrigger(l, E, x)
            }
            register(o, l) {
                this._transitionEngine.register(o, l)
            }
            destroy(o, l) {
                this._transitionEngine.destroy(o, l)
            }
            onInsert(o, l, p, E) {
                this._transitionEngine.insertNode(o, l, p, E)
            }
            onRemove(o, l, p, E) {
                this._transitionEngine.removeNode(o, l, E || !1, p)
            }
            disableAnimations(o, l) {
                this._transitionEngine.markElementAsDisabled(o, l)
            }
            process(o, l, p, E) {
                if ("@" == p.charAt(0)) {
                    const [I,N] = Fi(p);
                    this._timelineEngine.command(I, l, N, E)
                } else
                    this._transitionEngine.trigger(o, l, p, E)
            }
            listen(o, l, p, E, I) {
                if ("@" == p.charAt(0)) {
                    const [N,x] = Fi(p);
                    return this._timelineEngine.listen(N, l, x, I)
                }
                return this._transitionEngine.listen(o, l, p, E, I)
            }
            flush(o=-1) {
                this._transitionEngine.flush(o)
            }
            get players() {
                return this._transitionEngine.players.concat(this._timelineEngine.players)
            }
            whenRenderingDone() {
                return this._transitionEngine.whenRenderingDone()
            }
        }
        let Go = (()=>{
            class v {
                constructor(l, p, E) {
                    this._element = l,
                    this._startStyles = p,
                    this._endStyles = E,
                    this._state = 0;
                    let I = v.initialStylesByElement.get(l);
                    I || v.initialStylesByElement.set(l, I = new Map),
                    this._initialStyles = I
                }
                start() {
                    this._state < 1 && (this._startStyles && or(this._element, this._startStyles, this._initialStyles),
                    this._state = 1)
                }
                finish() {
                    this.start(),
                    this._state < 2 && (or(this._element, this._initialStyles),
                    this._endStyles && (or(this._element, this._endStyles),
                    this._endStyles = null),
                    this._state = 1)
                }
                destroy() {
                    this.finish(),
                    this._state < 3 && (v.initialStylesByElement.delete(this._element),
                    this._startStyles && (Wr(this._element, this._startStyles),
                    this._endStyles = null),
                    this._endStyles && (Wr(this._element, this._endStyles),
                    this._endStyles = null),
                    or(this._element, this._initialStyles),
                    this._state = 3)
                }
            }
            return v.initialStylesByElement = new WeakMap,
            v
        }
        )();
        function to(v) {
            let o = null;
            return v.forEach((l,p)=>{
                (function Wo(v) {
                    return "display" === v || "position" === v
                }
                )(p) && (o = o || new Map,
                o.set(p, l))
            }
            ),
            o
        }
        class Ko {
            constructor(o, l, p, E) {
                this.element = o,
                this.keyframes = l,
                this.options = p,
                this._specialStyles = E,
                this._onDoneFns = [],
                this._onStartFns = [],
                this._onDestroyFns = [],
                this._initialized = !1,
                this._finished = !1,
                this._started = !1,
                this._destroyed = !1,
                this._originalOnDoneFns = [],
                this._originalOnStartFns = [],
                this.time = 0,
                this.parentPlayer = null,
                this.currentSnapshot = new Map,
                this._duration = p.duration,
                this._delay = p.delay || 0,
                this.time = this._duration + this._delay
            }
            _onFinish() {
                this._finished || (this._finished = !0,
                this._onDoneFns.forEach(o=>o()),
                this._onDoneFns = [])
            }
            init() {
                this._buildPlayer(),
                this._preparePlayerBeforeStart()
            }
            _buildPlayer() {
                if (this._initialized)
                    return;
                this._initialized = !0;
                const o = this.keyframes;
                this.domPlayer = this._triggerWebAnimation(this.element, o, this.options),
                this._finalKeyframe = o.length ? o[o.length - 1] : new Map,
                this.domPlayer.addEventListener("finish", ()=>this._onFinish())
            }
            _preparePlayerBeforeStart() {
                this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
            }
            _convertKeyframesToObject(o) {
                const l = [];
                return o.forEach(p=>{
                    l.push(Object.fromEntries(p))
                }
                ),
                l
            }
            _triggerWebAnimation(o, l, p) {
                return o.animate(this._convertKeyframesToObject(l), p)
            }
            onStart(o) {
                this._originalOnStartFns.push(o),
                this._onStartFns.push(o)
            }
            onDone(o) {
                this._originalOnDoneFns.push(o),
                this._onDoneFns.push(o)
            }
            onDestroy(o) {
                this._onDestroyFns.push(o)
            }
            play() {
                this._buildPlayer(),
                this.hasStarted() || (this._onStartFns.forEach(o=>o()),
                this._onStartFns = [],
                this._started = !0,
                this._specialStyles && this._specialStyles.start()),
                this.domPlayer.play()
            }
            pause() {
                this.init(),
                this.domPlayer.pause()
            }
            finish() {
                this.init(),
                this._specialStyles && this._specialStyles.finish(),
                this._onFinish(),
                this.domPlayer.finish()
            }
            reset() {
                this._resetDomPlayerState(),
                this._destroyed = !1,
                this._finished = !1,
                this._started = !1,
                this._onStartFns = this._originalOnStartFns,
                this._onDoneFns = this._originalOnDoneFns
            }
            _resetDomPlayerState() {
                this.domPlayer && this.domPlayer.cancel()
            }
            restart() {
                this.reset(),
                this.play()
            }
            hasStarted() {
                return this._started
            }
            destroy() {
                this._destroyed || (this._destroyed = !0,
                this._resetDomPlayerState(),
                this._onFinish(),
                this._specialStyles && this._specialStyles.destroy(),
                this._onDestroyFns.forEach(o=>o()),
                this._onDestroyFns = [])
            }
            setPosition(o) {
                void 0 === this.domPlayer && this.init(),
                this.domPlayer.currentTime = o * this.time
            }
            getPosition() {
                return this.domPlayer.currentTime / this.time
            }
            get totalTime() {
                return this._delay + this._duration
            }
            beforeDestroy() {
                const o = new Map;
                this.hasStarted() && this._finalKeyframe.forEach((p,E)=>{
                    "offset" !== E && o.set(E, this._finished ? p : an(this.element, E))
                }
                ),
                this.currentSnapshot = o
            }
            triggerCallback(o) {
                const l = "start" === o ? this._onStartFns : this._onDoneFns;
                l.forEach(p=>p()),
                l.length = 0
            }
        }
        class wr {
            validateStyleProperty(o) {
                return !0
            }
            validateAnimatableStyleProperty(o) {
                return !0
            }
            matchesElement(o, l) {
                return !1
            }
            containsElement(o, l) {
                return Fn(o, l)
            }
            getParentElement(o) {
                return Kn(o)
            }
            query(o, l, p) {
                return hi(o, l, p)
            }
            computeStyle(o, l, p) {
                return window.getComputedStyle(o)[l]
            }
            animate(o, l, p, E, I, N=[]) {
                const U = {
                    duration: p,
                    delay: E,
                    fill: 0 == E ? "both" : "forwards"
                };
                I && (U.easing = I);
                const V = new Map
                  , Se = N.filter(d=>d instanceof Ko);
                (function en(v, o) {
                    return 0 === v || 0 === o
                }
                )(p, E) && Se.forEach(d=>{
                    d.currentSnapshot.forEach((a,f)=>V.set(f, a))
                }
                );
                let Ie = function No(v) {
                    return v.length ? v[0]instanceof Map ? v : v.map(o=>Li(o)) : []
                }(l).map(d=>on(d));
                Ie = function po(v, o, l) {
                    if (l.size && o.length) {
                        let p = o[0]
                          , E = [];
                        if (l.forEach((I,N)=>{
                            p.has(N) || E.push(N),
                            p.set(N, I)
                        }
                        ),
                        E.length)
                            for (let I = 1; I < o.length; I++) {
                                let N = o[I];
                                E.forEach(x=>N.set(x, an(v, x)))
                            }
                    }
                    return o
                }(o, Ie, V);
                const c = function eo(v, o) {
                    let l = null
                      , p = null;
                    return Array.isArray(o) && o.length ? (l = to(o[0]),
                    o.length > 1 && (p = to(o[o.length - 1]))) : o instanceof Map && (l = to(o)),
                    l || p ? new Go(v,l,p) : null
                }(o, Ie);
                return new Ko(o,Ie,U,c)
            }
        }
        let $n = (()=>{
            class v extends er {
                constructor(l, p) {
                    super(),
                    this._nextAnimationId = 0,
                    this._renderer = l.createRenderer(p.body, {
                        id: "0",
                        encapsulation: O.ifc.None,
                        styles: [],
                        data: {
                            animation: []
                        }
                    })
                }
                build(l) {
                    const p = this._nextAnimationId.toString();
                    this._nextAnimationId++;
                    const E = Array.isArray(l) ? ii(l) : l;
                    return Do(this._renderer, null, p, "register", [E]),
                    new no(p,this._renderer)
                }
            }
            return v.\u0275fac = function(l) {
                return new (l || v)(O.LFG(O.FYo),O.LFG(L.K0))
            }
            ,
            v.\u0275prov = O.Yz7({
                token: v,
                factory: v.\u0275fac
            }),
            v
        }
        )();
        class no extends tr {
            constructor(o, l) {
                super(),
                this._id = o,
                this._renderer = l
            }
            create(o, l) {
                return new Ki(this._id,o,l || {},this._renderer)
            }
        }
        class Ki {
            constructor(o, l, p, E) {
                this.id = o,
                this.element = l,
                this._renderer = E,
                this.parentPlayer = null,
                this._started = !1,
                this.totalTime = 0,
                this._command("create", p)
            }
            _listen(o, l) {
                return this._renderer.listen(this.element, `@@${this.id}:${o}`, l)
            }
            _command(o, ...l) {
                return Do(this._renderer, this.element, this.id, o, l)
            }
            onDone(o) {
                this._listen("done", o)
            }
            onStart(o) {
                this._listen("start", o)
            }
            onDestroy(o) {
                this._listen("destroy", o)
            }
            init() {
                this._command("init")
            }
            hasStarted() {
                return this._started
            }
            play() {
                this._command("play"),
                this._started = !0
            }
            pause() {
                this._command("pause")
            }
            restart() {
                this._command("restart")
            }
            finish() {
                this._command("finish")
            }
            destroy() {
                this._command("destroy")
            }
            reset() {
                this._command("reset"),
                this._started = !1
            }
            setPosition(o) {
                this._command("setPosition", o)
            }
            getPosition() {
                return this._renderer.engine.players[+this.id]?.getPosition() ?? 0
            }
        }
        function Do(v, o, l, p, E) {
            return v.setProperty(o, `@@${l}:${p}`, E)
        }
        const ws = "@.disabled";
        let Ka = (()=>{
            class v {
                constructor(l, p, E) {
                    this.delegate = l,
                    this.engine = p,
                    this._zone = E,
                    this._currentId = 0,
                    this._microtaskId = 1,
                    this._animationCallbacksBuffer = [],
                    this._rendererCache = new Map,
                    this._cdRecurDepth = 0,
                    this.promise = Promise.resolve(0),
                    p.onRemovalComplete = (I,N)=>{
                        const x = N?.parentNode(I);
                        x && N.removeChild(x, I)
                    }
                }
                createRenderer(l, p) {
                    const I = this.delegate.createRenderer(l, p);
                    if (!(l && p && p.data && p.data.animation)) {
                        let Se = this._rendererCache.get(I);
                        return Se || (Se = new Yo("",I,this.engine,()=>this._rendererCache.delete(I)),
                        this._rendererCache.set(I, Se)),
                        Se
                    }
                    const N = p.id
                      , x = p.id + "-" + this._currentId;
                    this._currentId++,
                    this.engine.register(x, l);
                    const U = Se=>{
                        Array.isArray(Se) ? Se.forEach(U) : this.engine.registerTrigger(N, x, l, Se.name, Se)
                    }
                    ;
                    return p.data.animation.forEach(U),
                    new Qo(this,x,I,this.engine)
                }
                begin() {
                    this._cdRecurDepth++,
                    this.delegate.begin && this.delegate.begin()
                }
                _scheduleCountTask() {
                    this.promise.then(()=>{
                        this._microtaskId++
                    }
                    )
                }
                scheduleListenerCallback(l, p, E) {
                    l >= 0 && l < this._microtaskId ? this._zone.run(()=>p(E)) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then(()=>{
                        this._zone.run(()=>{
                            this._animationCallbacksBuffer.forEach(I=>{
                                const [N,x] = I;
                                N(x)
                            }
                            ),
                            this._animationCallbacksBuffer = []
                        }
                        )
                    }
                    ),
                    this._animationCallbacksBuffer.push([p, E]))
                }
                end() {
                    this._cdRecurDepth--,
                    0 == this._cdRecurDepth && this._zone.runOutsideAngular(()=>{
                        this._scheduleCountTask(),
                        this.engine.flush(this._microtaskId)
                    }
                    ),
                    this.delegate.end && this.delegate.end()
                }
                whenRenderingDone() {
                    return this.engine.whenRenderingDone()
                }
            }
            return v.\u0275fac = function(l) {
                return new (l || v)(O.LFG(O.FYo),O.LFG(Wi),O.LFG(O.R0b))
            }
            ,
            v.\u0275prov = O.Yz7({
                token: v,
                factory: v.\u0275fac
            }),
            v
        }
        )();
        class Yo {
            constructor(o, l, p, E) {
                this.namespaceId = o,
                this.delegate = l,
                this.engine = p,
                this._onDestroy = E,
                this.destroyNode = this.delegate.destroyNode ? I=>l.destroyNode(I) : null
            }
            get data() {
                return this.delegate.data
            }
            destroy() {
                this.engine.destroy(this.namespaceId, this.delegate),
                this.delegate.destroy(),
                this._onDestroy?.()
            }
            createElement(o, l) {
                return this.delegate.createElement(o, l)
            }
            createComment(o) {
                return this.delegate.createComment(o)
            }
            createText(o) {
                return this.delegate.createText(o)
            }
            appendChild(o, l) {
                this.delegate.appendChild(o, l),
                this.engine.onInsert(this.namespaceId, l, o, !1)
            }
            insertBefore(o, l, p, E=!0) {
                this.delegate.insertBefore(o, l, p),
                this.engine.onInsert(this.namespaceId, l, o, E)
            }
            removeChild(o, l, p) {
                this.engine.onRemove(this.namespaceId, l, this.delegate, p)
            }
            selectRootElement(o, l) {
                return this.delegate.selectRootElement(o, l)
            }
            parentNode(o) {
                return this.delegate.parentNode(o)
            }
            nextSibling(o) {
                return this.delegate.nextSibling(o)
            }
            setAttribute(o, l, p, E) {
                this.delegate.setAttribute(o, l, p, E)
            }
            removeAttribute(o, l, p) {
                this.delegate.removeAttribute(o, l, p)
            }
            addClass(o, l) {
                this.delegate.addClass(o, l)
            }
            removeClass(o, l) {
                this.delegate.removeClass(o, l)
            }
            setStyle(o, l, p, E) {
                this.delegate.setStyle(o, l, p, E)
            }
            removeStyle(o, l, p) {
                this.delegate.removeStyle(o, l, p)
            }
            setProperty(o, l, p) {
                "@" == l.charAt(0) && l == ws ? this.disableAnimations(o, !!p) : this.delegate.setProperty(o, l, p)
            }
            setValue(o, l) {
                this.delegate.setValue(o, l)
            }
            listen(o, l, p) {
                return this.delegate.listen(o, l, p)
            }
            disableAnimations(o, l) {
                this.engine.disableAnimations(o, l)
            }
        }
        class Qo extends Yo {
            constructor(o, l, p, E, I) {
                super(l, p, E, I),
                this.factory = o,
                this.namespaceId = l
            }
            setProperty(o, l, p) {
                "@" == l.charAt(0) ? "." == l.charAt(1) && l == ws ? this.disableAnimations(o, p = void 0 === p || !!p) : this.engine.process(this.namespaceId, o, l.slice(1), p) : this.delegate.setProperty(o, l, p)
            }
            listen(o, l, p) {
                if ("@" == l.charAt(0)) {
                    const E = function ro(v) {
                        switch (v) {
                        case "body":
                            return document.body;
                        case "document":
                            return document;
                        case "window":
                            return window;
                        default:
                            return v
                        }
                    }(o);
                    let I = l.slice(1)
                      , N = "";
                    return "@" != I.charAt(0) && ([I,N] = function Eo(v) {
                        const o = v.indexOf(".");
                        return [v.substring(0, o), v.slice(o + 1)]
                    }(I)),
                    this.engine.listen(this.namespaceId, E, I, N, x=>{
                        this.factory.scheduleListenerCallback(x._data || -1, p, x)
                    }
                    )
                }
                return this.delegate.listen(o, l, p)
            }
        }
        const wa = [{
            provide: er,
            useClass: $n
        }, {
            provide: Rr,
            useFactory: function io() {
                return new Qs
            }
        }, {
            provide: Wi,
            useClass: (()=>{
                class v extends Wi {
                    constructor(l, p, E, I) {
                        super(l.body, p, E)
                    }
                    ngOnDestroy() {
                        this.flush()
                    }
                }
                return v.\u0275fac = function(l) {
                    return new (l || v)(O.LFG(L.K0),O.LFG(zr),O.LFG(Rr),O.LFG(O.z2F))
                }
                ,
                v.\u0275prov = O.Yz7({
                    token: v,
                    factory: v.\u0275fac
                }),
                v
            }
            )()
        }, {
            provide: O.FYo,
            useFactory: function qn(v, o, l) {
                return new Ka(v,o,l)
            },
            deps: [_.se, Wi, O.R0b]
        }]
          , Cs = [{
            provide: zr,
            useFactory: ()=>new wr
        }, {
            provide: O.QbO,
            useValue: "BrowserAnimations"
        }, ...wa]
          , Cr = [{
            provide: zr,
            useClass: Vr
        }, {
            provide: O.QbO,
            useValue: "NoopAnimations"
        }, ...wa];
        let Jr = (()=>{
            class v {
                static withConfig(l) {
                    return {
                        ngModule: v,
                        providers: l.disableAnimations ? Cr : Cs
                    }
                }
            }
            return v.\u0275fac = function(l) {
                return new (l || v)
            }
            ,
            v.\u0275mod = O.oAB({
                type: v
            }),
            v.\u0275inj = O.cJS({
                providers: Cs,
                imports: [_.b2]
            }),
            v
        }
        )();
        var _o = P(6789)
          , ur = P(2340)
          , Ss = P(262)
          , Qi = P(515)
          , qi = P(2843);
        let Xi = (()=>{
            class v {
                constructor() {}
                intercept(l, p) {
                    return l = this._addProductionHeaders(l),
                    l = this._addAuthenticationHeaders(l),
                    p.handle(l).pipe((0,
                    Ss.K)(E=>E && 401 === E.status && ur.N.production ? (window.location.href = "/login",
                    Qi.E) : (0,
                    qi._)(()=>E)))
                }
                _addAuthenticationHeaders(l) {
                    if (l.url.match(/auth\/backend-api/))
                        return l;
                    const p = window.session_id || ur.N.sessionID;
                    if (l.url.match(ur.N.dataApiUrl))
                        return p ? l.clone({
                            setHeaders: {
                                Authorization: `Cookie ${p}`
                            }
                        }) : l;
                    if (l.url.match(ur.N.apiUrl)) {
                        if (l.url.includes("flms")) {
                            const E = localStorage.getItem("flms-token");
                            return l.clone({
                                setHeaders: {
                                    Authorization: `Bearer ${E}`
                                }
                            })
                        }
                        return l.clone({
                            setHeaders: {
                                "X-CSRF-Token": window.csrf,
                                Authorization: `Cookie ${p}`
                            }
                        })
                    }
                    return l
                }
                _addProductionHeaders(l) {
                    const p = l.url.match(ur.N.dataApiUrl)
                      , E = l.url.match(ur.N.apiUrl);
                    return (p || E) && ur.N.production ? l.clone({
                        setHeaders: {
                            "x-header-host": ur.N.X_HEADER_HOST
                        }
                    }) : l
                }
            }
            return v.\u0275fac = function(l) {
                return new (l || v)
            }
            ,
            v.\u0275prov = O.Yz7({
                token: v,
                factory: v.\u0275fac
            }),
            v
        }
        )();
        var bs = P(6250);
        const wo = [..._o.u8.mapToRoute(["publish"], {
            loadChildren: ()=>P.e(712).then(P.bind(P, 4712)).then(v=>v.PublishModule)
        })];
        let Is = (()=>{
            class v {
            }
            return v.\u0275fac = function(l) {
                return new (l || v)
            }
            ,
            v.\u0275mod = O.oAB({
                type: v
            }),
            v.\u0275inj = O.cJS({
                imports: [bs.Bz.forRoot(wo, {
                    initialNavigation: "enabledBlocking",
                    scrollPositionRestoration: "top"
                }), bs.Bz]
            }),
            v
        }
        )();
        var kl = P(625);
        let qa = (()=>{
            class v {
                constructor(l) {
                    this._http = l
                }
                checkSubscriptionStatus() {
                    return this._http.get(`${ur.N.appUrl}/check-subscription-status`)
                }
            }
            return v.\u0275fac = function(l) {
                return new (l || v)(O.LFG(ie))
            }
            ,
            v.\u0275prov = O.Yz7({
                token: v,
                factory: v.\u0275fac,
                providedIn: "root"
            }),
            v
        }
        )()
          , St = (()=>{
            class v {
                constructor(l, p, E, I) {
                    this._paltformId = l,
                    this._appService = p,
                    this._metaTagService = E,
                    this._generalAPIService = I
                }
                ngOnInit() {
                    this._setPageMeta(),
                    this._checkSubscriptionStatus()
                }
                _setPageMeta() {
                    this._metaTagService.addTags([{
                        name: "keywords",
                        content: "Fhorge, LMS, Learn, Courses, Online Courses, Learnings"
                    }])
                }
                _checkSubscriptionStatus() {
                    (0,
                    L.PM)(this._paltformId) || !window?.session_id || this._generalAPIService.checkSubscriptionStatus().subscribe(p=>{
                        this._appService.setShowAds(!p.is_subscribed)
                    }
                    )
                }
            }
            return v.\u0275fac = function(l) {
                return new (l || v)(O.Y36(O.Lbi),O.Y36(kl.z),O.Y36(_.h_),O.Y36(qa))
            }
            ,
            v.\u0275cmp = O.Xpm({
                type: v,
                selectors: [["app-root"]],
                decls: 1,
                vars: 0,
                template: function(l, p) {
                    1 & l && O._UZ(0, "router-outlet")
                },
                dependencies: [bs.lC]
            }),
            v
        }
        )()
          , Hl = (()=>{
            class v {
                constructor(l, p, E, I) {
                    this.platformId = l,
                    this.document = p,
                    this.baseHref = E,
                    this.transferState = I
                }
            }
            return v.\u0275fac = function(l) {
                return new (l || v)(O.LFG(O.Lbi),O.LFG(L.K0),O.LFG(L.mr, 8),O.LFG(_.ki))
            }
            ,
            v.\u0275mod = O.oAB({
                type: v,
                bootstrap: [St]
            }),
            v.\u0275inj = O.cJS({
                providers: [{
                    provide: O.ip1,
                    useFactory: _o.lV.initialize,
                    multi: !0
                }, {
                    provide: Ke,
                    useClass: Xi,
                    multi: !0
                }],
                imports: [Jr, _.b2.withServerTransition({
                    appId: "serverApp"
                }), Is, Ti]
            }),
            v
        }
        )();
        _.q6().bootstrapModule(Hl).catch(v=>console.error(v))
    }
    ,
    1135: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            X: ()=>L
        });
        var _ = P(7579);
        class L extends _.x {
            constructor(Q) {
                super(),
                this._value = Q
            }
            get value() {
                return this.getValue()
            }
            _subscribe(Q) {
                const X = super._subscribe(Q);
                return !X.closed && Q.next(this._value),
                X
            }
            getValue() {
                const {hasError: Q, thrownError: X, _value: me} = this;
                if (Q)
                    throw X;
                return this._throwIfClosed(),
                me
            }
            next(Q) {
                super.next(this._value = Q)
            }
        }
    }
    ,
    9751: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            y: ()=>Ae
        });
        var _ = P(930)
          , L = P(727)
          , O = P(8822)
          , Q = P(9635)
          , X = P(2416)
          , me = P(576)
          , De = P(2806);
        let Ae = (()=>{
            class be {
                constructor(fe) {
                    fe && (this._subscribe = fe)
                }
                lift(fe) {
                    const Ue = new be;
                    return Ue.source = this,
                    Ue.operator = fe,
                    Ue
                }
                subscribe(fe, Ue, Oe) {
                    const Je = function q(be) {
                        return be && be instanceof _.Lv || function ue(be) {
                            return be && (0,
                            me.m)(be.next) && (0,
                            me.m)(be.error) && (0,
                            me.m)(be.complete)
                        }(be) && (0,
                        L.Nn)(be)
                    }(fe) ? fe : new _.Hp(fe,Ue,Oe);
                    return (0,
                    De.x)(()=>{
                        const {operator: Be, source: We} = this;
                        Je.add(Be ? Be.call(Je, We) : We ? this._subscribe(Je) : this._trySubscribe(Je))
                    }
                    ),
                    Je
                }
                _trySubscribe(fe) {
                    try {
                        return this._subscribe(fe)
                    } catch (Ue) {
                        fe.error(Ue)
                    }
                }
                forEach(fe, Ue) {
                    return new (Ue = Ce(Ue))((Oe,Je)=>{
                        const Be = new _.Hp({
                            next: We=>{
                                try {
                                    fe(We)
                                } catch (_e) {
                                    Je(_e),
                                    Be.unsubscribe()
                                }
                            }
                            ,
                            error: Je,
                            complete: Oe
                        });
                        this.subscribe(Be)
                    }
                    )
                }
                _subscribe(fe) {
                    var Ue;
                    return null === (Ue = this.source) || void 0 === Ue ? void 0 : Ue.subscribe(fe)
                }
                [O.L]() {
                    return this
                }
                pipe(...fe) {
                    return (0,
                    Q.U)(fe)(this)
                }
                toPromise(fe) {
                    return new (fe = Ce(fe))((Ue,Oe)=>{
                        let Je;
                        this.subscribe(Be=>Je = Be, Be=>Oe(Be), ()=>Ue(Je))
                    }
                    )
                }
            }
            return be.create = Ze=>new be(Ze),
            be
        }
        )();
        function Ce(be) {
            var Ze;
            return null !== (Ze = be ?? X.v.Promise) && void 0 !== Ze ? Ze : Promise
        }
    }
    ,
    7579: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            x: ()=>De
        });
        var _ = P(9751)
          , L = P(727);
        const Q = (0,
        P(3888).d)(Ce=>function() {
            Ce(this),
            this.name = "ObjectUnsubscribedError",
            this.message = "object unsubscribed"
        }
        );
        var X = P(8737)
          , me = P(2806);
        let De = (()=>{
            class Ce extends _.y {
                constructor() {
                    super(),
                    this.closed = !1,
                    this.currentObservers = null,
                    this.observers = [],
                    this.isStopped = !1,
                    this.hasError = !1,
                    this.thrownError = null
                }
                lift(q) {
                    const be = new Ae(this,this);
                    return be.operator = q,
                    be
                }
                _throwIfClosed() {
                    if (this.closed)
                        throw new Q
                }
                next(q) {
                    (0,
                    me.x)(()=>{
                        if (this._throwIfClosed(),
                        !this.isStopped) {
                            this.currentObservers || (this.currentObservers = Array.from(this.observers));
                            for (const be of this.currentObservers)
                                be.next(q)
                        }
                    }
                    )
                }
                error(q) {
                    (0,
                    me.x)(()=>{
                        if (this._throwIfClosed(),
                        !this.isStopped) {
                            this.hasError = this.isStopped = !0,
                            this.thrownError = q;
                            const {observers: be} = this;
                            for (; be.length; )
                                be.shift().error(q)
                        }
                    }
                    )
                }
                complete() {
                    (0,
                    me.x)(()=>{
                        if (this._throwIfClosed(),
                        !this.isStopped) {
                            this.isStopped = !0;
                            const {observers: q} = this;
                            for (; q.length; )
                                q.shift().complete()
                        }
                    }
                    )
                }
                unsubscribe() {
                    this.isStopped = this.closed = !0,
                    this.observers = this.currentObservers = null
                }
                get observed() {
                    var q;
                    return (null === (q = this.observers) || void 0 === q ? void 0 : q.length) > 0
                }
                _trySubscribe(q) {
                    return this._throwIfClosed(),
                    super._trySubscribe(q)
                }
                _subscribe(q) {
                    return this._throwIfClosed(),
                    this._checkFinalizedStatuses(q),
                    this._innerSubscribe(q)
                }
                _innerSubscribe(q) {
                    const {hasError: be, isStopped: Ze, observers: fe} = this;
                    return be || Ze ? L.Lc : (this.currentObservers = null,
                    fe.push(q),
                    new L.w0(()=>{
                        this.currentObservers = null,
                        (0,
                        X.P)(fe, q)
                    }
                    ))
                }
                _checkFinalizedStatuses(q) {
                    const {hasError: be, thrownError: Ze, isStopped: fe} = this;
                    be ? q.error(Ze) : fe && q.complete()
                }
                asObservable() {
                    const q = new _.y;
                    return q.source = this,
                    q
                }
            }
            return Ce.create = (ue,q)=>new Ae(ue,q),
            Ce
        }
        )();
        class Ae extends De {
            constructor(ue, q) {
                super(),
                this.destination = ue,
                this.source = q
            }
            next(ue) {
                var q, be;
                null === (be = null === (q = this.destination) || void 0 === q ? void 0 : q.next) || void 0 === be || be.call(q, ue)
            }
            error(ue) {
                var q, be;
                null === (be = null === (q = this.destination) || void 0 === q ? void 0 : q.error) || void 0 === be || be.call(q, ue)
            }
            complete() {
                var ue, q;
                null === (q = null === (ue = this.destination) || void 0 === ue ? void 0 : ue.complete) || void 0 === q || q.call(ue)
            }
            _subscribe(ue) {
                var q, be;
                return null !== (be = null === (q = this.source) || void 0 === q ? void 0 : q.subscribe(ue)) && void 0 !== be ? be : L.Lc
            }
        }
    }
    ,
    930: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            Hp: ()=>Oe,
            Lv: ()=>be
        });
        var _ = P(576)
          , L = P(727)
          , O = P(2416)
          , Q = P(7849)
          , X = P(5032);
        const me = Ce("C", void 0, void 0);
        function Ce(ye, J, Ne) {
            return {
                kind: ye,
                value: J,
                error: Ne
            }
        }
        var ue = P(3410)
          , q = P(2806);
        class be extends L.w0 {
            constructor(J) {
                super(),
                this.isStopped = !1,
                J ? (this.destination = J,
                (0,
                L.Nn)(J) && J.add(this)) : this.destination = _e
            }
            static create(J, Ne, ot) {
                return new Oe(J,Ne,ot)
            }
            next(J) {
                this.isStopped ? We(function Ae(ye) {
                    return Ce("N", ye, void 0)
                }(J), this) : this._next(J)
            }
            error(J) {
                this.isStopped ? We(function De(ye) {
                    return Ce("E", void 0, ye)
                }(J), this) : (this.isStopped = !0,
                this._error(J))
            }
            complete() {
                this.isStopped ? We(me, this) : (this.isStopped = !0,
                this._complete())
            }
            unsubscribe() {
                this.closed || (this.isStopped = !0,
                super.unsubscribe(),
                this.destination = null)
            }
            _next(J) {
                this.destination.next(J)
            }
            _error(J) {
                try {
                    this.destination.error(J)
                } finally {
                    this.unsubscribe()
                }
            }
            _complete() {
                try {
                    this.destination.complete()
                } finally {
                    this.unsubscribe()
                }
            }
        }
        const Ze = Function.prototype.bind;
        function fe(ye, J) {
            return Ze.call(ye, J)
        }
        class Ue {
            constructor(J) {
                this.partialObserver = J
            }
            next(J) {
                const {partialObserver: Ne} = this;
                if (Ne.next)
                    try {
                        Ne.next(J)
                    } catch (ot) {
                        Je(ot)
                    }
            }
            error(J) {
                const {partialObserver: Ne} = this;
                if (Ne.error)
                    try {
                        Ne.error(J)
                    } catch (ot) {
                        Je(ot)
                    }
                else
                    Je(J)
            }
            complete() {
                const {partialObserver: J} = this;
                if (J.complete)
                    try {
                        J.complete()
                    } catch (Ne) {
                        Je(Ne)
                    }
            }
        }
        class Oe extends be {
            constructor(J, Ne, ot) {
                let re;
                if (super(),
                (0,
                _.m)(J) || !J)
                    re = {
                        next: J ?? void 0,
                        error: Ne ?? void 0,
                        complete: ot ?? void 0
                    };
                else {
                    let Ee;
                    this && O.v.useDeprecatedNextContext ? (Ee = Object.create(J),
                    Ee.unsubscribe = ()=>this.unsubscribe(),
                    re = {
                        next: J.next && fe(J.next, Ee),
                        error: J.error && fe(J.error, Ee),
                        complete: J.complete && fe(J.complete, Ee)
                    }) : re = J
                }
                this.destination = new Ue(re)
            }
        }
        function Je(ye) {
            O.v.useDeprecatedSynchronousErrorHandling ? (0,
            q.O)(ye) : (0,
            Q.h)(ye)
        }
        function We(ye, J) {
            const {onStoppedNotification: Ne} = O.v;
            Ne && ue.z.setTimeout(()=>Ne(ye, J))
        }
        const _e = {
            closed: !0,
            next: X.Z,
            error: function Be(ye) {
                throw ye
            },
            complete: X.Z
        }
    }
    ,
    727: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            Lc: ()=>me,
            w0: ()=>X,
            Nn: ()=>De
        });
        var _ = P(576);
        const O = (0,
        P(3888).d)(Ce=>function(q) {
            Ce(this),
            this.message = q ? `${q.length} errors occurred during unsubscription:\n ${q.map((be,Ze)=>`${Ze + 1}) ${be.toString()}`).join("\n  ")}` : "",
            this.name = "UnsubscriptionError",
            this.errors = q
        }
        );
        var Q = P(8737);
        class X {
            constructor(ue) {
                this.initialTeardown = ue,
                this.closed = !1,
                this._parentage = null,
                this._finalizers = null
            }
            unsubscribe() {
                let ue;
                if (!this.closed) {
                    this.closed = !0;
                    const {_parentage: q} = this;
                    if (q)
                        if (this._parentage = null,
                        Array.isArray(q))
                            for (const fe of q)
                                fe.remove(this);
                        else
                            q.remove(this);
                    const {initialTeardown: be} = this;
                    if ((0,
                    _.m)(be))
                        try {
                            be()
                        } catch (fe) {
                            ue = fe instanceof O ? fe.errors : [fe]
                        }
                    const {_finalizers: Ze} = this;
                    if (Ze) {
                        this._finalizers = null;
                        for (const fe of Ze)
                            try {
                                Ae(fe)
                            } catch (Ue) {
                                ue = ue ?? [],
                                Ue instanceof O ? ue = [...ue, ...Ue.errors] : ue.push(Ue)
                            }
                    }
                    if (ue)
                        throw new O(ue)
                }
            }
            add(ue) {
                var q;
                if (ue && ue !== this)
                    if (this.closed)
                        Ae(ue);
                    else {
                        if (ue instanceof X) {
                            if (ue.closed || ue._hasParent(this))
                                return;
                            ue._addParent(this)
                        }
                        (this._finalizers = null !== (q = this._finalizers) && void 0 !== q ? q : []).push(ue)
                    }
            }
            _hasParent(ue) {
                const {_parentage: q} = this;
                return q === ue || Array.isArray(q) && q.includes(ue)
            }
            _addParent(ue) {
                const {_parentage: q} = this;
                this._parentage = Array.isArray(q) ? (q.push(ue),
                q) : q ? [q, ue] : ue
            }
            _removeParent(ue) {
                const {_parentage: q} = this;
                q === ue ? this._parentage = null : Array.isArray(q) && (0,
                Q.P)(q, ue)
            }
            remove(ue) {
                const {_finalizers: q} = this;
                q && (0,
                Q.P)(q, ue),
                ue instanceof X && ue._removeParent(this)
            }
        }
        X.EMPTY = (()=>{
            const Ce = new X;
            return Ce.closed = !0,
            Ce
        }
        )();
        const me = X.EMPTY;
        function De(Ce) {
            return Ce instanceof X || Ce && "closed"in Ce && (0,
            _.m)(Ce.remove) && (0,
            _.m)(Ce.add) && (0,
            _.m)(Ce.unsubscribe)
        }
        function Ae(Ce) {
            (0,
            _.m)(Ce) ? Ce() : Ce.unsubscribe()
        }
    }
    ,
    2416: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            v: ()=>_
        });
        const _ = {
            onUnhandledError: null,
            onStoppedNotification: null,
            Promise: void 0,
            useDeprecatedSynchronousErrorHandling: !1,
            useDeprecatedNextContext: !1
        }
    }
    ,
    1577: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            a: ()=>Ue
        });
        var _ = P(9751);
        const {isArray: L} = Array
          , {getPrototypeOf: O, prototype: Q, keys: X} = Object;
        var Ae = P(2076)
          , Ce = P(4671)
          , ue = P(3268)
          , q = P(3269)
          , Ze = P(5403)
          , fe = P(9672);
        function Ue(...Be) {
            const We = (0,
            q.yG)(Be)
              , _e = (0,
            q.jO)(Be)
              , {args: ye, keys: J} = function me(Be) {
                if (1 === Be.length) {
                    const We = Be[0];
                    if (L(We))
                        return {
                            args: We,
                            keys: null
                        };
                    if (function De(Be) {
                        return Be && "object" == typeof Be && O(Be) === Q
                    }(We)) {
                        const _e = X(We);
                        return {
                            args: _e.map(ye=>We[ye]),
                            keys: _e
                        }
                    }
                }
                return {
                    args: Be,
                    keys: null
                }
            }(Be);
            if (0 === ye.length)
                return (0,
                Ae.D)([], We);
            const Ne = new _.y(function Oe(Be, We, _e=Ce.y) {
                return ye=>{
                    Je(We, ()=>{
                        const {length: J} = Be
                          , Ne = new Array(J);
                        let ot = J
                          , re = J;
                        for (let Ee = 0; Ee < J; Ee++)
                            Je(We, ()=>{
                                const se = (0,
                                Ae.D)(Be[Ee], We);
                                let le = !1;
                                se.subscribe((0,
                                Ze.x)(ye, je=>{
                                    Ne[Ee] = je,
                                    le || (le = !0,
                                    re--),
                                    re || ye.next(_e(Ne.slice()))
                                }
                                , ()=>{
                                    --ot || ye.complete()
                                }
                                ))
                            }
                            , ye)
                    }
                    , ye)
                }
            }(ye, We, J ? ot=>function be(Be, We) {
                return Be.reduce((_e,ye,J)=>(_e[ye] = We[J],
                _e), {})
            }(J, ot) : Ce.y));
            return _e ? Ne.pipe((0,
            ue.Z)(_e)) : Ne
        }
        function Je(Be, We, _e) {
            Be ? (0,
            fe.f)(_e, Be, We) : We()
        }
    }
    ,
    7272: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            z: ()=>X
        });
        var _ = P(8189)
          , O = P(3269)
          , Q = P(2076);
        function X(...me) {
            return function L() {
                return (0,
                _.J)(1)
            }()((0,
            Q.D)(me, (0,
            O.yG)(me)))
        }
    }
    ,
    515: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            E: ()=>L
        });
        const L = new (P(9751).y)(X=>X.complete())
    }
    ,
    2076: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            D: ()=>ot
        });
        var _ = P(8421)
          , L = P(9672)
          , O = P(4482)
          , Q = P(5403);
        function X(re, Ee=0) {
            return (0,
            O.e)((se,le)=>{
                se.subscribe((0,
                Q.x)(le, je=>(0,
                L.f)(le, re, ()=>le.next(je), Ee), ()=>(0,
                L.f)(le, re, ()=>le.complete(), Ee), je=>(0,
                L.f)(le, re, ()=>le.error(je), Ee)))
            }
            )
        }
        function me(re, Ee=0) {
            return (0,
            O.e)((se,le)=>{
                le.add(re.schedule(()=>se.subscribe(le), Ee))
            }
            )
        }
        var Ce = P(9751)
          , q = P(2202)
          , be = P(576);
        function fe(re, Ee) {
            if (!re)
                throw new Error("Iterable cannot be null");
            return new Ce.y(se=>{
                (0,
                L.f)(se, Ee, ()=>{
                    const le = re[Symbol.asyncIterator]();
                    (0,
                    L.f)(se, Ee, ()=>{
                        le.next().then(je=>{
                            je.done ? se.complete() : se.next(je.value)
                        }
                        )
                    }
                    , 0, !0)
                }
                )
            }
            )
        }
        var Ue = P(3670)
          , Oe = P(8239)
          , Je = P(1144)
          , Be = P(6495)
          , We = P(2206)
          , _e = P(4532)
          , ye = P(3260);
        function ot(re, Ee) {
            return Ee ? function Ne(re, Ee) {
                if (null != re) {
                    if ((0,
                    Ue.c)(re))
                        return function De(re, Ee) {
                            return (0,
                            _.Xf)(re).pipe(me(Ee), X(Ee))
                        }(re, Ee);
                    if ((0,
                    Je.z)(re))
                        return function ue(re, Ee) {
                            return new Ce.y(se=>{
                                let le = 0;
                                return Ee.schedule(function() {
                                    le === re.length ? se.complete() : (se.next(re[le++]),
                                    se.closed || this.schedule())
                                })
                            }
                            )
                        }(re, Ee);
                    if ((0,
                    Oe.t)(re))
                        return function Ae(re, Ee) {
                            return (0,
                            _.Xf)(re).pipe(me(Ee), X(Ee))
                        }(re, Ee);
                    if ((0,
                    We.D)(re))
                        return fe(re, Ee);
                    if ((0,
                    Be.T)(re))
                        return function Ze(re, Ee) {
                            return new Ce.y(se=>{
                                let le;
                                return (0,
                                L.f)(se, Ee, ()=>{
                                    le = re[q.h](),
                                    (0,
                                    L.f)(se, Ee, ()=>{
                                        let je, yt;
                                        try {
                                            ({value: je, done: yt} = le.next())
                                        } catch (Fe) {
                                            return void se.error(Fe)
                                        }
                                        yt ? se.complete() : se.next(je)
                                    }
                                    , 0, !0)
                                }
                                ),
                                ()=>(0,
                                be.m)(le?.return) && le.return()
                            }
                            )
                        }(re, Ee);
                    if ((0,
                    ye.L)(re))
                        return function J(re, Ee) {
                            return fe((0,
                            ye.Q)(re), Ee)
                        }(re, Ee)
                }
                throw (0,
                _e.z)(re)
            }(re, Ee) : (0,
            _.Xf)(re)
        }
    }
    ,
    8421: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            Xf: ()=>Ze
        });
        var _ = P(655)
          , L = P(1144)
          , O = P(8239)
          , Q = P(9751)
          , X = P(3670)
          , me = P(2206)
          , De = P(4532)
          , Ae = P(6495)
          , Ce = P(3260)
          , ue = P(576)
          , q = P(7849)
          , be = P(8822);
        function Ze(ye) {
            if (ye instanceof Q.y)
                return ye;
            if (null != ye) {
                if ((0,
                X.c)(ye))
                    return function fe(ye) {
                        return new Q.y(J=>{
                            const Ne = ye[be.L]();
                            if ((0,
                            ue.m)(Ne.subscribe))
                                return Ne.subscribe(J);
                            throw new TypeError("Provided object does not correctly implement Symbol.observable")
                        }
                        )
                    }(ye);
                if ((0,
                L.z)(ye))
                    return function Ue(ye) {
                        return new Q.y(J=>{
                            for (let Ne = 0; Ne < ye.length && !J.closed; Ne++)
                                J.next(ye[Ne]);
                            J.complete()
                        }
                        )
                    }(ye);
                if ((0,
                O.t)(ye))
                    return function Oe(ye) {
                        return new Q.y(J=>{
                            ye.then(Ne=>{
                                J.closed || (J.next(Ne),
                                J.complete())
                            }
                            , Ne=>J.error(Ne)).then(null, q.h)
                        }
                        )
                    }(ye);
                if ((0,
                me.D)(ye))
                    return Be(ye);
                if ((0,
                Ae.T)(ye))
                    return function Je(ye) {
                        return new Q.y(J=>{
                            for (const Ne of ye)
                                if (J.next(Ne),
                                J.closed)
                                    return;
                            J.complete()
                        }
                        )
                    }(ye);
                if ((0,
                Ce.L)(ye))
                    return function We(ye) {
                        return Be((0,
                        Ce.Q)(ye))
                    }(ye)
            }
            throw (0,
            De.z)(ye)
        }
        function Be(ye) {
            return new Q.y(J=>{
                (function _e(ye, J) {
                    var Ne, ot, re, Ee;
                    return (0,
                    _.mG)(this, void 0, void 0, function*() {
                        try {
                            for (Ne = (0,
                            _.KL)(ye); !(ot = yield Ne.next()).done; )
                                if (J.next(ot.value),
                                J.closed)
                                    return
                        } catch (se) {
                            re = {
                                error: se
                            }
                        } finally {
                            try {
                                ot && !ot.done && (Ee = Ne.return) && (yield Ee.call(Ne))
                            } finally {
                                if (re)
                                    throw re.error
                            }
                        }
                        J.complete()
                    })
                }
                )(ye, J).catch(Ne=>J.error(Ne))
            }
            )
        }
    }
    ,
    9646: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            of: ()=>O
        });
        var _ = P(3269)
          , L = P(2076);
        function O(...Q) {
            const X = (0,
            _.yG)(Q);
            return (0,
            L.D)(Q, X)
        }
    }
    ,
    2843: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            _: ()=>O
        });
        var _ = P(9751)
          , L = P(576);
        function O(Q, X) {
            const me = (0,
            L.m)(Q) ? Q : ()=>Q
              , De = Ae=>Ae.error(me());
            return new _.y(X ? Ae=>X.schedule(De, 0, Ae) : De)
        }
    }
    ,
    5403: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            x: ()=>L
        });
        var _ = P(930);
        function L(Q, X, me, De, Ae) {
            return new O(Q,X,me,De,Ae)
        }
        class O extends _.Lv {
            constructor(X, me, De, Ae, Ce, ue) {
                super(X),
                this.onFinalize = Ce,
                this.shouldUnsubscribe = ue,
                this._next = me ? function(q) {
                    try {
                        me(q)
                    } catch (be) {
                        X.error(be)
                    }
                }
                : super._next,
                this._error = Ae ? function(q) {
                    try {
                        Ae(q)
                    } catch (be) {
                        X.error(be)
                    } finally {
                        this.unsubscribe()
                    }
                }
                : super._error,
                this._complete = De ? function() {
                    try {
                        De()
                    } catch (q) {
                        X.error(q)
                    } finally {
                        this.unsubscribe()
                    }
                }
                : super._complete
            }
            unsubscribe() {
                var X;
                if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                    const {closed: me} = this;
                    super.unsubscribe(),
                    !me && (null === (X = this.onFinalize) || void 0 === X || X.call(this))
                }
            }
        }
    }
    ,
    262: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            K: ()=>Q
        });
        var _ = P(8421)
          , L = P(5403)
          , O = P(4482);
        function Q(X) {
            return (0,
            O.e)((me,De)=>{
                let ue, Ae = null, Ce = !1;
                Ae = me.subscribe((0,
                L.x)(De, void 0, void 0, q=>{
                    ue = (0,
                    _.Xf)(X(q, Q(X)(me))),
                    Ae ? (Ae.unsubscribe(),
                    Ae = null,
                    ue.subscribe(De)) : Ce = !0
                }
                )),
                Ce && (Ae.unsubscribe(),
                Ae = null,
                ue.subscribe(De))
            }
            )
        }
    }
    ,
    4351: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            b: ()=>O
        });
        var _ = P(5577)
          , L = P(576);
        function O(Q, X) {
            return (0,
            L.m)(X) ? (0,
            _.z)(Q, X, 1) : (0,
            _.z)(Q, 1)
        }
    }
    ,
    9300: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            h: ()=>O
        });
        var _ = P(4482)
          , L = P(5403);
        function O(Q, X) {
            return (0,
            _.e)((me,De)=>{
                let Ae = 0;
                me.subscribe((0,
                L.x)(De, Ce=>Q.call(X, Ce, Ae++) && De.next(Ce)))
            }
            )
        }
    }
    ,
    4004: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            U: ()=>O
        });
        var _ = P(4482)
          , L = P(5403);
        function O(Q, X) {
            return (0,
            _.e)((me,De)=>{
                let Ae = 0;
                me.subscribe((0,
                L.x)(De, Ce=>{
                    De.next(Q.call(X, Ce, Ae++))
                }
                ))
            }
            )
        }
    }
    ,
    8189: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            J: ()=>O
        });
        var _ = P(5577)
          , L = P(4671);
        function O(Q=1 / 0) {
            return (0,
            _.z)(L.y, Q)
        }
    }
    ,
    5577: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            z: ()=>Ae
        });
        var _ = P(4004)
          , L = P(8421)
          , O = P(4482)
          , Q = P(9672)
          , X = P(5403)
          , De = P(576);
        function Ae(Ce, ue, q=1 / 0) {
            return (0,
            De.m)(ue) ? Ae((be,Ze)=>(0,
            _.U)((fe,Ue)=>ue(be, fe, Ze, Ue))((0,
            L.Xf)(Ce(be, Ze))), q) : ("number" == typeof ue && (q = ue),
            (0,
            O.e)((be,Ze)=>function me(Ce, ue, q, be, Ze, fe, Ue, Oe) {
                const Je = [];
                let Be = 0
                  , We = 0
                  , _e = !1;
                const ye = ()=>{
                    _e && !Je.length && !Be && ue.complete()
                }
                  , J = ot=>Be < be ? Ne(ot) : Je.push(ot)
                  , Ne = ot=>{
                    fe && ue.next(ot),
                    Be++;
                    let re = !1;
                    (0,
                    L.Xf)(q(ot, We++)).subscribe((0,
                    X.x)(ue, Ee=>{
                        Ze?.(Ee),
                        fe ? J(Ee) : ue.next(Ee)
                    }
                    , ()=>{
                        re = !0
                    }
                    , void 0, ()=>{
                        if (re)
                            try {
                                for (Be--; Je.length && Be < be; ) {
                                    const Ee = Je.shift();
                                    Ue ? (0,
                                    Q.f)(ue, Ue, ()=>Ne(Ee)) : Ne(Ee)
                                }
                                ye()
                            } catch (Ee) {
                                ue.error(Ee)
                            }
                    }
                    ))
                }
                ;
                return Ce.subscribe((0,
                X.x)(ue, J, ()=>{
                    _e = !0,
                    ye()
                }
                )),
                ()=>{
                    Oe?.()
                }
            }(be, Ze, Ce, q)))
        }
    }
    ,
    8675: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            O: ()=>Q
        });
        var _ = P(7272)
          , L = P(3269)
          , O = P(4482);
        function Q(...X) {
            const me = (0,
            L.yG)(X);
            return (0,
            O.e)((De,Ae)=>{
                (me ? (0,
                _.z)(X, De, me) : (0,
                _.z)(X, De)).subscribe(Ae)
            }
            )
        }
    }
    ,
    3900: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            w: ()=>Q
        });
        var _ = P(8421)
          , L = P(4482)
          , O = P(5403);
        function Q(X, me) {
            return (0,
            L.e)((De,Ae)=>{
                let Ce = null
                  , ue = 0
                  , q = !1;
                const be = ()=>q && !Ce && Ae.complete();
                De.subscribe((0,
                O.x)(Ae, Ze=>{
                    Ce?.unsubscribe();
                    let fe = 0;
                    const Ue = ue++;
                    (0,
                    _.Xf)(X(Ze, Ue)).subscribe(Ce = (0,
                    O.x)(Ae, Oe=>Ae.next(me ? me(Ze, Oe, Ue, fe++) : Oe), ()=>{
                        Ce = null,
                        be()
                    }
                    ))
                }
                , ()=>{
                    q = !0,
                    be()
                }
                ))
            }
            )
        }
    }
    ,
    5698: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            q: ()=>Q
        });
        var _ = P(515)
          , L = P(4482)
          , O = P(5403);
        function Q(X) {
            return X <= 0 ? ()=>_.E : (0,
            L.e)((me,De)=>{
                let Ae = 0;
                me.subscribe((0,
                O.x)(De, Ce=>{
                    ++Ae <= X && (De.next(Ce),
                    X <= Ae && De.complete())
                }
                ))
            }
            )
        }
    }
    ,
    3410: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            z: ()=>_
        });
        const _ = {
            setTimeout(L, O, ...Q) {
                const {delegate: X} = _;
                return X?.setTimeout ? X.setTimeout(L, O, ...Q) : setTimeout(L, O, ...Q)
            },
            clearTimeout(L) {
                const {delegate: O} = _;
                return (O?.clearTimeout || clearTimeout)(L)
            },
            delegate: void 0
        }
    }
    ,
    2202: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            h: ()=>L
        });
        const L = function _() {
            return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        }()
    }
    ,
    8822: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            L: ()=>_
        });
        const _ = "function" == typeof Symbol && Symbol.observable || "@@observable"
    }
    ,
    3269: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            _6: ()=>me,
            jO: ()=>Q,
            yG: ()=>X
        });
        var _ = P(576)
          , L = P(3532);
        function O(De) {
            return De[De.length - 1]
        }
        function Q(De) {
            return (0,
            _.m)(O(De)) ? De.pop() : void 0
        }
        function X(De) {
            return (0,
            L.K)(O(De)) ? De.pop() : void 0
        }
        function me(De, Ae) {
            return "number" == typeof O(De) ? De.pop() : Ae
        }
    }
    ,
    8737: (Ve,ae,P)=>{
        "use strict";
        function _(L, O) {
            if (L) {
                const Q = L.indexOf(O);
                0 <= Q && L.splice(Q, 1)
            }
        }
        P.d(ae, {
            P: ()=>_
        })
    }
    ,
    3888: (Ve,ae,P)=>{
        "use strict";
        function _(L) {
            const Q = L(X=>{
                Error.call(X),
                X.stack = (new Error).stack
            }
            );
            return Q.prototype = Object.create(Error.prototype),
            Q.prototype.constructor = Q,
            Q
        }
        P.d(ae, {
            d: ()=>_
        })
    }
    ,
    2806: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            O: ()=>Q,
            x: ()=>O
        });
        var _ = P(2416);
        let L = null;
        function O(X) {
            if (_.v.useDeprecatedSynchronousErrorHandling) {
                const me = !L;
                if (me && (L = {
                    errorThrown: !1,
                    error: null
                }),
                X(),
                me) {
                    const {errorThrown: De, error: Ae} = L;
                    if (L = null,
                    De)
                        throw Ae
                }
            } else
                X()
        }
        function Q(X) {
            _.v.useDeprecatedSynchronousErrorHandling && L && (L.errorThrown = !0,
            L.error = X)
        }
    }
    ,
    9672: (Ve,ae,P)=>{
        "use strict";
        function _(L, O, Q, X=0, me=!1) {
            const De = O.schedule(function() {
                Q(),
                me ? L.add(this.schedule(null, X)) : this.unsubscribe()
            }, X);
            if (L.add(De),
            !me)
                return De
        }
        P.d(ae, {
            f: ()=>_
        })
    }
    ,
    4671: (Ve,ae,P)=>{
        "use strict";
        function _(L) {
            return L
        }
        P.d(ae, {
            y: ()=>_
        })
    }
    ,
    1144: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            z: ()=>_
        });
        const _ = L=>L && "number" == typeof L.length && "function" != typeof L
    }
    ,
    2206: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            D: ()=>L
        });
        var _ = P(576);
        function L(O) {
            return Symbol.asyncIterator && (0,
            _.m)(O?.[Symbol.asyncIterator])
        }
    }
    ,
    576: (Ve,ae,P)=>{
        "use strict";
        function _(L) {
            return "function" == typeof L
        }
        P.d(ae, {
            m: ()=>_
        })
    }
    ,
    3670: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            c: ()=>O
        });
        var _ = P(8822)
          , L = P(576);
        function O(Q) {
            return (0,
            L.m)(Q[_.L])
        }
    }
    ,
    6495: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            T: ()=>O
        });
        var _ = P(2202)
          , L = P(576);
        function O(Q) {
            return (0,
            L.m)(Q?.[_.h])
        }
    }
    ,
    8239: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            t: ()=>L
        });
        var _ = P(576);
        function L(O) {
            return (0,
            _.m)(O?.then)
        }
    }
    ,
    3260: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            L: ()=>Q,
            Q: ()=>O
        });
        var _ = P(655)
          , L = P(576);
        function O(X) {
            return (0,
            _.FC)(this, arguments, function*() {
                const De = X.getReader();
                try {
                    for (; ; ) {
                        const {value: Ae, done: Ce} = yield(0,
                        _.qq)(De.read());
                        if (Ce)
                            return yield(0,
                            _.qq)(void 0);
                        yield yield(0,
                        _.qq)(Ae)
                    }
                } finally {
                    De.releaseLock()
                }
            })
        }
        function Q(X) {
            return (0,
            L.m)(X?.getReader)
        }
    }
    ,
    3532: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            K: ()=>L
        });
        var _ = P(576);
        function L(O) {
            return O && (0,
            _.m)(O.schedule)
        }
    }
    ,
    4482: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            A: ()=>L,
            e: ()=>O
        });
        var _ = P(576);
        function L(Q) {
            return (0,
            _.m)(Q?.lift)
        }
        function O(Q) {
            return X=>{
                if (L(X))
                    return X.lift(function(me) {
                        try {
                            return Q(me, this)
                        } catch (De) {
                            this.error(De)
                        }
                    });
                throw new TypeError("Unable to lift unknown Observable type")
            }
        }
    }
    ,
    3268: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            Z: ()=>Q
        });
        var _ = P(4004);
        const {isArray: L} = Array;
        function Q(X) {
            return (0,
            _.U)(me=>function O(X, me) {
                return L(me) ? X(...me) : X(me)
            }(X, me))
        }
    }
    ,
    5032: (Ve,ae,P)=>{
        "use strict";
        function _() {}
        P.d(ae, {
            Z: ()=>_
        })
    }
    ,
    9635: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            U: ()=>O,
            z: ()=>L
        });
        var _ = P(4671);
        function L(...Q) {
            return O(Q)
        }
        function O(Q) {
            return 0 === Q.length ? _.y : 1 === Q.length ? Q[0] : function(me) {
                return Q.reduce((De,Ae)=>Ae(De), me)
            }
        }
    }
    ,
    7849: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            h: ()=>O
        });
        var _ = P(2416)
          , L = P(3410);
        function O(Q) {
            L.z.setTimeout(()=>{
                const {onUnhandledError: X} = _.v;
                if (!X)
                    throw Q;
                X(Q)
            }
            )
        }
    }
    ,
    4532: (Ve,ae,P)=>{
        "use strict";
        function _(L) {
            return new TypeError(`You provided ${null !== L && "object" == typeof L ? "an invalid object" : `'${L}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)
        }
        P.d(ae, {
            z: ()=>_
        })
    }
    ,
    655: (Ve,ae,P)=>{
        "use strict";
        function be(Y, K, ie, ne) {
            return new (ie || (ie = Promise))(function(he, Ke) {
                function ft(bt) {
                    try {
                        Ye(ne.next(bt))
                    } catch (vt) {
                        Ke(vt)
                    }
                }
                function $t(bt) {
                    try {
                        Ye(ne.throw(bt))
                    } catch (vt) {
                        Ke(vt)
                    }
                }
                function Ye(bt) {
                    bt.done ? he(bt.value) : function we(he) {
                        return he instanceof ie ? he : new ie(function(Ke) {
                            Ke(he)
                        }
                        )
                    }(bt.value).then(ft, $t)
                }
                Ye((ne = ne.apply(Y, K || [])).next())
            }
            )
        }
        function ye(Y) {
            return this instanceof ye ? (this.v = Y,
            this) : new ye(Y)
        }
        function J(Y, K, ie) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var we, ne = ie.apply(Y, K || []), he = [];
            return we = {},
            Ke("next"),
            Ke("throw"),
            Ke("return"),
            we[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            we;
            function Ke(wt) {
                ne[wt] && (we[wt] = function(zn) {
                    return new Promise(function(Le, nt) {
                        he.push([wt, zn, Le, nt]) > 1 || ft(wt, zn)
                    }
                    )
                }
                )
            }
            function ft(wt, zn) {
                try {
                    !function $t(wt) {
                        wt.value instanceof ye ? Promise.resolve(wt.value.v).then(Ye, bt) : vt(he[0][2], wt)
                    }(ne[wt](zn))
                } catch (Le) {
                    vt(he[0][3], Le)
                }
            }
            function Ye(wt) {
                ft("next", wt)
            }
            function bt(wt) {
                ft("throw", wt)
            }
            function vt(wt, zn) {
                wt(zn),
                he.shift(),
                he.length && ft(he[0][0], he[0][1])
            }
        }
        function ot(Y) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var ie, K = Y[Symbol.asyncIterator];
            return K ? K.call(Y) : (Y = function Oe(Y) {
                var K = "function" == typeof Symbol && Symbol.iterator
                  , ie = K && Y[K]
                  , ne = 0;
                if (ie)
                    return ie.call(Y);
                if (Y && "number" == typeof Y.length)
                    return {
                        next: function() {
                            return Y && ne >= Y.length && (Y = void 0),
                            {
                                value: Y && Y[ne++],
                                done: !Y
                            }
                        }
                    };
                throw new TypeError(K ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }(Y),
            ie = {},
            ne("next"),
            ne("throw"),
            ne("return"),
            ie[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            ie);
            function ne(he) {
                ie[he] = Y[he] && function(Ke) {
                    return new Promise(function(ft, $t) {
                        !function we(he, Ke, ft, $t) {
                            Promise.resolve($t).then(function(Ye) {
                                he({
                                    value: Ye,
                                    done: ft
                                })
                            }, Ke)
                        }(ft, $t, (Ke = Y[he](Ke)).done, Ke.value)
                    }
                    )
                }
            }
        }
        P.d(ae, {
            FC: ()=>J,
            KL: ()=>ot,
            mG: ()=>be,
            qq: ()=>ye
        })
    }
    ,
    9334: ()=>{}
    ,
    6895: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            Do: ()=>We,
            EM: ()=>Gr,
            HT: ()=>Q,
            JF: ()=>on,
            K0: ()=>me,
            Mx: ()=>Fs,
            NF: ()=>ks,
            O5: ()=>et,
            Ov: ()=>rr,
            PM: ()=>ps,
            S$: ()=>Oe,
            V_: ()=>Ce,
            Ye: ()=>_e,
            b0: ()=>Be,
            bD: ()=>Ar,
            ez: ()=>Oo,
            mk: ()=>hn,
            mr: ()=>Je,
            q: ()=>O,
            sg: ()=>ci,
            w_: ()=>X
        });
        var _ = P(8256);
        let L = null;
        function O() {
            return L
        }
        function Q(g) {
            L || (L = g)
        }
        class X {
        }
        const me = new _.OlP("DocumentToken");
        let De = (()=>{
            class g {
                historyGo(y) {
                    throw new Error("Not implemented")
                }
            }
            return g.\u0275fac = function(y) {
                return new (y || g)
            }
            ,
            g.\u0275prov = _.Yz7({
                token: g,
                factory: function() {
                    return function Ae() {
                        return (0,
                        _.LFG)(ue)
                    }()
                },
                providedIn: "platform"
            }),
            g
        }
        )();
        const Ce = new _.OlP("Location Initialized");
        let ue = (()=>{
            class g extends De {
                constructor(y) {
                    super(),
                    this._doc = y,
                    this._location = window.location,
                    this._history = window.history
                }
                getBaseHrefFromDOM() {
                    return O().getBaseHref(this._doc)
                }
                onPopState(y) {
                    const b = O().getGlobalEventTarget(this._doc, "window");
                    return b.addEventListener("popstate", y, !1),
                    ()=>b.removeEventListener("popstate", y)
                }
                onHashChange(y) {
                    const b = O().getGlobalEventTarget(this._doc, "window");
                    return b.addEventListener("hashchange", y, !1),
                    ()=>b.removeEventListener("hashchange", y)
                }
                get href() {
                    return this._location.href
                }
                get protocol() {
                    return this._location.protocol
                }
                get hostname() {
                    return this._location.hostname
                }
                get port() {
                    return this._location.port
                }
                get pathname() {
                    return this._location.pathname
                }
                get search() {
                    return this._location.search
                }
                get hash() {
                    return this._location.hash
                }
                set pathname(y) {
                    this._location.pathname = y
                }
                pushState(y, b, F) {
                    q() ? this._history.pushState(y, b, F) : this._location.hash = F
                }
                replaceState(y, b, F) {
                    q() ? this._history.replaceState(y, b, F) : this._location.hash = F
                }
                forward() {
                    this._history.forward()
                }
                back() {
                    this._history.back()
                }
                historyGo(y=0) {
                    this._history.go(y)
                }
                getState() {
                    return this._history.state
                }
            }
            return g.\u0275fac = function(y) {
                return new (y || g)(_.LFG(me))
            }
            ,
            g.\u0275prov = _.Yz7({
                token: g,
                factory: function() {
                    return function be() {
                        return new ue((0,
                        _.LFG)(me))
                    }()
                },
                providedIn: "platform"
            }),
            g
        }
        )();
        function q() {
            return !!window.history.pushState
        }
        function Ze(g, C) {
            if (0 == g.length)
                return C;
            if (0 == C.length)
                return g;
            let y = 0;
            return g.endsWith("/") && y++,
            C.startsWith("/") && y++,
            2 == y ? g + C.substring(1) : 1 == y ? g + C : g + "/" + C
        }
        function fe(g) {
            const C = g.match(/#|\?|$/)
              , y = C && C.index || g.length;
            return g.slice(0, y - ("/" === g[y - 1] ? 1 : 0)) + g.slice(y)
        }
        function Ue(g) {
            return g && "?" !== g[0] ? "?" + g : g
        }
        let Oe = (()=>{
            class g {
                historyGo(y) {
                    throw new Error("Not implemented")
                }
            }
            return g.\u0275fac = function(y) {
                return new (y || g)
            }
            ,
            g.\u0275prov = _.Yz7({
                token: g,
                factory: function() {
                    return (0,
                    _.f3M)(Be)
                },
                providedIn: "root"
            }),
            g
        }
        )();
        const Je = new _.OlP("appBaseHref");
        let Be = (()=>{
            class g extends Oe {
                constructor(y, b) {
                    super(),
                    this._platformLocation = y,
                    this._removeListenerFns = [],
                    this._baseHref = b ?? this._platformLocation.getBaseHrefFromDOM() ?? (0,
                    _.f3M)(me).location?.origin ?? ""
                }
                ngOnDestroy() {
                    for (; this._removeListenerFns.length; )
                        this._removeListenerFns.pop()()
                }
                onPopState(y) {
                    this._removeListenerFns.push(this._platformLocation.onPopState(y), this._platformLocation.onHashChange(y))
                }
                getBaseHref() {
                    return this._baseHref
                }
                prepareExternalUrl(y) {
                    return Ze(this._baseHref, y)
                }
                path(y=!1) {
                    const b = this._platformLocation.pathname + Ue(this._platformLocation.search)
                      , F = this._platformLocation.hash;
                    return F && y ? `${b}${F}` : b
                }
                pushState(y, b, F, W) {
                    const te = this.prepareExternalUrl(F + Ue(W));
                    this._platformLocation.pushState(y, b, te)
                }
                replaceState(y, b, F, W) {
                    const te = this.prepareExternalUrl(F + Ue(W));
                    this._platformLocation.replaceState(y, b, te)
                }
                forward() {
                    this._platformLocation.forward()
                }
                back() {
                    this._platformLocation.back()
                }
                getState() {
                    return this._platformLocation.getState()
                }
                historyGo(y=0) {
                    this._platformLocation.historyGo?.(y)
                }
            }
            return g.\u0275fac = function(y) {
                return new (y || g)(_.LFG(De),_.LFG(Je, 8))
            }
            ,
            g.\u0275prov = _.Yz7({
                token: g,
                factory: g.\u0275fac,
                providedIn: "root"
            }),
            g
        }
        )()
          , We = (()=>{
            class g extends Oe {
                constructor(y, b) {
                    super(),
                    this._platformLocation = y,
                    this._baseHref = "",
                    this._removeListenerFns = [],
                    null != b && (this._baseHref = b)
                }
                ngOnDestroy() {
                    for (; this._removeListenerFns.length; )
                        this._removeListenerFns.pop()()
                }
                onPopState(y) {
                    this._removeListenerFns.push(this._platformLocation.onPopState(y), this._platformLocation.onHashChange(y))
                }
                getBaseHref() {
                    return this._baseHref
                }
                path(y=!1) {
                    let b = this._platformLocation.hash;
                    return null == b && (b = "#"),
                    b.length > 0 ? b.substring(1) : b
                }
                prepareExternalUrl(y) {
                    const b = Ze(this._baseHref, y);
                    return b.length > 0 ? "#" + b : b
                }
                pushState(y, b, F, W) {
                    let te = this.prepareExternalUrl(F + Ue(W));
                    0 == te.length && (te = this._platformLocation.pathname),
                    this._platformLocation.pushState(y, b, te)
                }
                replaceState(y, b, F, W) {
                    let te = this.prepareExternalUrl(F + Ue(W));
                    0 == te.length && (te = this._platformLocation.pathname),
                    this._platformLocation.replaceState(y, b, te)
                }
                forward() {
                    this._platformLocation.forward()
                }
                back() {
                    this._platformLocation.back()
                }
                getState() {
                    return this._platformLocation.getState()
                }
                historyGo(y=0) {
                    this._platformLocation.historyGo?.(y)
                }
            }
            return g.\u0275fac = function(y) {
                return new (y || g)(_.LFG(De),_.LFG(Je, 8))
            }
            ,
            g.\u0275prov = _.Yz7({
                token: g,
                factory: g.\u0275fac
            }),
            g
        }
        )()
          , _e = (()=>{
            class g {
                constructor(y) {
                    this._subject = new _.vpe,
                    this._urlChangeListeners = [],
                    this._urlChangeSubscription = null,
                    this._locationStrategy = y;
                    const b = this._locationStrategy.getBaseHref();
                    this._basePath = function ot(g) {
                        if (new RegExp("^(https?:)?//").test(g)) {
                            const [,y] = g.split(/\/\/[^\/]+/);
                            return y
                        }
                        return g
                    }(fe(Ne(b))),
                    this._locationStrategy.onPopState(F=>{
                        this._subject.emit({
                            url: this.path(!0),
                            pop: !0,
                            state: F.state,
                            type: F.type
                        })
                    }
                    )
                }
                ngOnDestroy() {
                    this._urlChangeSubscription?.unsubscribe(),
                    this._urlChangeListeners = []
                }
                path(y=!1) {
                    return this.normalize(this._locationStrategy.path(y))
                }
                getState() {
                    return this._locationStrategy.getState()
                }
                isCurrentPathEqualTo(y, b="") {
                    return this.path() == this.normalize(y + Ue(b))
                }
                normalize(y) {
                    return g.stripTrailingSlash(function J(g, C) {
                        if (!g || !C.startsWith(g))
                            return C;
                        const y = C.substring(g.length);
                        return "" === y || ["/", ";", "?", "#"].includes(y[0]) ? y : C
                    }(this._basePath, Ne(y)))
                }
                prepareExternalUrl(y) {
                    return y && "/" !== y[0] && (y = "/" + y),
                    this._locationStrategy.prepareExternalUrl(y)
                }
                go(y, b="", F=null) {
                    this._locationStrategy.pushState(F, "", y, b),
                    this._notifyUrlChangeListeners(this.prepareExternalUrl(y + Ue(b)), F)
                }
                replaceState(y, b="", F=null) {
                    this._locationStrategy.replaceState(F, "", y, b),
                    this._notifyUrlChangeListeners(this.prepareExternalUrl(y + Ue(b)), F)
                }
                forward() {
                    this._locationStrategy.forward()
                }
                back() {
                    this._locationStrategy.back()
                }
                historyGo(y=0) {
                    this._locationStrategy.historyGo?.(y)
                }
                onUrlChange(y) {
                    return this._urlChangeListeners.push(y),
                    this._urlChangeSubscription || (this._urlChangeSubscription = this.subscribe(b=>{
                        this._notifyUrlChangeListeners(b.url, b.state)
                    }
                    )),
                    ()=>{
                        const b = this._urlChangeListeners.indexOf(y);
                        this._urlChangeListeners.splice(b, 1),
                        0 === this._urlChangeListeners.length && (this._urlChangeSubscription?.unsubscribe(),
                        this._urlChangeSubscription = null)
                    }
                }
                _notifyUrlChangeListeners(y="", b) {
                    this._urlChangeListeners.forEach(F=>F(y, b))
                }
                subscribe(y, b, F) {
                    return this._subject.subscribe({
                        next: y,
                        error: b,
                        complete: F
                    })
                }
            }
            return g.normalizeQueryParams = Ue,
            g.joinWithSlash = Ze,
            g.stripTrailingSlash = fe,
            g.\u0275fac = function(y) {
                return new (y || g)(_.LFG(Oe))
            }
            ,
            g.\u0275prov = _.Yz7({
                token: g,
                factory: function() {
                    return function ye() {
                        return new _e((0,
                        _.LFG)(Oe))
                    }()
                },
                providedIn: "root"
            }),
            g
        }
        )();
        function Ne(g) {
            return g.replace(/\/index.html$/, "")
        }
        function Fs(g, C) {
            C = encodeURIComponent(C);
            for (const y of g.split(";")) {
                const b = y.indexOf("=")
                  , [F,W] = -1 == b ? [y, ""] : [y.slice(0, b), y.slice(b + 1)];
                if (F.trim() === C)
                    return decodeURIComponent(W)
            }
            return null
        }
        const gt = /\s+/
          , Qt = [];
        let hn = (()=>{
            class g {
                constructor(y, b, F, W) {
                    this._iterableDiffers = y,
                    this._keyValueDiffers = b,
                    this._ngEl = F,
                    this._renderer = W,
                    this.initialClasses = Qt,
                    this.stateMap = new Map
                }
                set klass(y) {
                    this.initialClasses = null != y ? y.trim().split(gt) : Qt
                }
                set ngClass(y) {
                    this.rawClass = "string" == typeof y ? y.trim().split(gt) : y
                }
                ngDoCheck() {
                    for (const b of this.initialClasses)
                        this._updateState(b, !0);
                    const y = this.rawClass;
                    if (Array.isArray(y) || y instanceof Set)
                        for (const b of y)
                            this._updateState(b, !0);
                    else if (null != y)
                        for (const b of Object.keys(y))
                            this._updateState(b, Boolean(y[b]));
                    this._applyStateDiff()
                }
                _updateState(y, b) {
                    const F = this.stateMap.get(y);
                    void 0 !== F ? (F.enabled !== b && (F.changed = !0,
                    F.enabled = b),
                    F.touched = !0) : this.stateMap.set(y, {
                        enabled: b,
                        changed: !0,
                        touched: !0
                    })
                }
                _applyStateDiff() {
                    for (const y of this.stateMap) {
                        const b = y[0]
                          , F = y[1];
                        F.changed ? (this._toggleClass(b, F.enabled),
                        F.changed = !1) : F.touched || (F.enabled && this._toggleClass(b, !1),
                        this.stateMap.delete(b)),
                        F.touched = !1
                    }
                }
                _toggleClass(y, b) {
                    (y = y.trim()).length > 0 && y.split(gt).forEach(F=>{
                        b ? this._renderer.addClass(this._ngEl.nativeElement, F) : this._renderer.removeClass(this._ngEl.nativeElement, F)
                    }
                    )
                }
            }
            return g.\u0275fac = function(y) {
                return new (y || g)(_.Y36(_.ZZ4),_.Y36(_.aQg),_.Y36(_.SBq),_.Y36(_.Qsj))
            }
            ,
            g.\u0275dir = _.lG2({
                type: g,
                selectors: [["", "ngClass", ""]],
                inputs: {
                    klass: ["class", "klass"],
                    ngClass: "ngClass"
                },
                standalone: !0
            }),
            g
        }
        )();
        class Oi {
            constructor(C, y, b, F) {
                this.$implicit = C,
                this.ngForOf = y,
                this.index = b,
                this.count = F
            }
            get first() {
                return 0 === this.index
            }
            get last() {
                return this.index === this.count - 1
            }
            get even() {
                return this.index % 2 == 0
            }
            get odd() {
                return !this.even
            }
        }
        let ci = (()=>{
            class g {
                set ngForOf(y) {
                    this._ngForOf = y,
                    this._ngForOfDirty = !0
                }
                set ngForTrackBy(y) {
                    this._trackByFn = y
                }
                get ngForTrackBy() {
                    return this._trackByFn
                }
                constructor(y, b, F) {
                    this._viewContainer = y,
                    this._template = b,
                    this._differs = F,
                    this._ngForOf = null,
                    this._ngForOfDirty = !0,
                    this._differ = null
                }
                set ngForTemplate(y) {
                    y && (this._template = y)
                }
                ngDoCheck() {
                    if (this._ngForOfDirty) {
                        this._ngForOfDirty = !1;
                        const y = this._ngForOf;
                        !this._differ && y && (this._differ = this._differs.find(y).create(this.ngForTrackBy))
                    }
                    if (this._differ) {
                        const y = this._differ.diff(this._ngForOf);
                        y && this._applyChanges(y)
                    }
                }
                _applyChanges(y) {
                    const b = this._viewContainer;
                    y.forEachOperation((F,W,te)=>{
                        if (null == F.previousIndex)
                            b.createEmbeddedView(this._template, new Oi(F.item,this._ngForOf,-1,-1), null === te ? void 0 : te);
                        else if (null == te)
                            b.remove(null === W ? void 0 : W);
                        else if (null !== W) {
                            const Re = b.get(W);
                            b.move(Re, te),
                            Hn(Re, F)
                        }
                    }
                    );
                    for (let F = 0, W = b.length; F < W; F++) {
                        const Re = b.get(F).context;
                        Re.index = F,
                        Re.count = W,
                        Re.ngForOf = this._ngForOf
                    }
                    y.forEachIdentityChange(F=>{
                        Hn(b.get(F.currentIndex), F)
                    }
                    )
                }
                static ngTemplateContextGuard(y, b) {
                    return !0
                }
            }
            return g.\u0275fac = function(y) {
                return new (y || g)(_.Y36(_.s_b),_.Y36(_.Rgc),_.Y36(_.ZZ4))
            }
            ,
            g.\u0275dir = _.lG2({
                type: g,
                selectors: [["", "ngFor", "", "ngForOf", ""]],
                inputs: {
                    ngForOf: "ngForOf",
                    ngForTrackBy: "ngForTrackBy",
                    ngForTemplate: "ngForTemplate"
                },
                standalone: !0
            }),
            g
        }
        )();
        function Hn(g, C) {
            g.context.$implicit = C.item
        }
        let et = (()=>{
            class g {
                constructor(y, b) {
                    this._viewContainer = y,
                    this._context = new Dt,
                    this._thenTemplateRef = null,
                    this._elseTemplateRef = null,
                    this._thenViewRef = null,
                    this._elseViewRef = null,
                    this._thenTemplateRef = b
                }
                set ngIf(y) {
                    this._context.$implicit = this._context.ngIf = y,
                    this._updateView()
                }
                set ngIfThen(y) {
                    yn("ngIfThen", y),
                    this._thenTemplateRef = y,
                    this._thenViewRef = null,
                    this._updateView()
                }
                set ngIfElse(y) {
                    yn("ngIfElse", y),
                    this._elseTemplateRef = y,
                    this._elseViewRef = null,
                    this._updateView()
                }
                _updateView() {
                    this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(),
                    this._elseViewRef = null,
                    this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(),
                    this._thenViewRef = null,
                    this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
                }
                static ngTemplateContextGuard(y, b) {
                    return !0
                }
            }
            return g.\u0275fac = function(y) {
                return new (y || g)(_.Y36(_.s_b),_.Y36(_.Rgc))
            }
            ,
            g.\u0275dir = _.lG2({
                type: g,
                selectors: [["", "ngIf", ""]],
                inputs: {
                    ngIf: "ngIf",
                    ngIfThen: "ngIfThen",
                    ngIfElse: "ngIfElse"
                },
                standalone: !0
            }),
            g
        }
        )();
        class Dt {
            constructor() {
                this.$implicit = null,
                this.ngIf = null
            }
        }
        function yn(g, C) {
            if (C && !C.createEmbeddedView)
                throw new Error(`${g} must be a TemplateRef, but received '${(0,
                _.AaK)(C)}'.`)
        }
        class sn {
            createSubscription(C, y) {
                return C.subscribe({
                    next: y,
                    error: b=>{
                        throw b
                    }
                })
            }
            dispose(C) {
                C.unsubscribe()
            }
        }
        class Mr {
            createSubscription(C, y) {
                return C.then(y, b=>{
                    throw b
                }
                )
            }
            dispose(C) {}
        }
        const Sn = new Mr
          , Bn = new sn;
        let rr = (()=>{
            class g {
                constructor(y) {
                    this._latestValue = null,
                    this._subscription = null,
                    this._obj = null,
                    this._strategy = null,
                    this._ref = y
                }
                ngOnDestroy() {
                    this._subscription && this._dispose(),
                    this._ref = null
                }
                transform(y) {
                    return this._obj ? y !== this._obj ? (this._dispose(),
                    this.transform(y)) : this._latestValue : (y && this._subscribe(y),
                    this._latestValue)
                }
                _subscribe(y) {
                    this._obj = y,
                    this._strategy = this._selectStrategy(y),
                    this._subscription = this._strategy.createSubscription(y, b=>this._updateLatestValue(y, b))
                }
                _selectStrategy(y) {
                    if ((0,
                    _.QGY)(y))
                        return Sn;
                    if ((0,
                    _.F4k)(y))
                        return Bn;
                    throw function rn(g, C) {
                        return new _.vHH(2100,!1)
                    }()
                }
                _dispose() {
                    this._strategy.dispose(this._subscription),
                    this._latestValue = null,
                    this._subscription = null,
                    this._obj = null
                }
                _updateLatestValue(y, b) {
                    y === this._obj && (this._latestValue = b,
                    this._ref.markForCheck())
                }
            }
            return g.\u0275fac = function(y) {
                return new (y || g)(_.Y36(_.sBO, 16))
            }
            ,
            g.\u0275pipe = _.Yjl({
                name: "async",
                type: g,
                pure: !1,
                standalone: !0
            }),
            g
        }
        )()
          , Oo = (()=>{
            class g {
            }
            return g.\u0275fac = function(y) {
                return new (y || g)
            }
            ,
            g.\u0275mod = _.oAB({
                type: g
            }),
            g.\u0275inj = _.cJS({}),
            g
        }
        )();
        const Ar = "browser"
          , fs = "server";
        function ks(g) {
            return g === Ar
        }
        function ps(g) {
            return g === fs
        }
        let Gr = (()=>{
            class g {
            }
            return g.\u0275prov = (0,
            _.Yz7)({
                token: g,
                providedIn: "root",
                factory: ()=>new sr((0,
                _.LFG)(me),window)
            }),
            g
        }
        )();
        class sr {
            constructor(C, y) {
                this.document = C,
                this.window = y,
                this.offset = ()=>[0, 0]
            }
            setOffset(C) {
                this.offset = Array.isArray(C) ? ()=>C : C
            }
            getScrollPosition() {
                return this.supportsScrolling() ? [this.window.pageXOffset, this.window.pageYOffset] : [0, 0]
            }
            scrollToPosition(C) {
                this.supportsScrolling() && this.window.scrollTo(C[0], C[1])
            }
            scrollToAnchor(C) {
                if (!this.supportsScrolling())
                    return;
                const y = function No(g, C) {
                    const y = g.getElementById(C) || g.getElementsByName(C)[0];
                    if (y)
                        return y;
                    if ("function" == typeof g.createTreeWalker && g.body && (g.body.createShadowRoot || g.body.attachShadow)) {
                        const b = g.createTreeWalker(g.body, NodeFilter.SHOW_ELEMENT);
                        let F = b.currentNode;
                        for (; F; ) {
                            const W = F.shadowRoot;
                            if (W) {
                                const te = W.getElementById(C) || W.querySelector(`[name="${C}"]`);
                                if (te)
                                    return te
                            }
                            F = b.nextNode()
                        }
                    }
                    return null
                }(this.document, C);
                y && (this.scrollToElement(y),
                y.focus())
            }
            setHistoryScrollRestoration(C) {
                if (this.supportScrollRestoration()) {
                    const y = this.window.history;
                    y && y.scrollRestoration && (y.scrollRestoration = C)
                }
            }
            scrollToElement(C) {
                const y = C.getBoundingClientRect()
                  , b = y.left + this.window.pageXOffset
                  , F = y.top + this.window.pageYOffset
                  , W = this.offset();
                this.window.scrollTo(b - W[0], F - W[1])
            }
            supportScrollRestoration() {
                try {
                    if (!this.supportsScrolling())
                        return !1;
                    const C = Li(this.window.history) || Li(Object.getPrototypeOf(this.window.history));
                    return !(!C || !C.writable && !C.set)
                } catch {
                    return !1
                }
            }
            supportsScrolling() {
                try {
                    return !!this.window && !!this.window.scrollTo && "pageXOffset"in this.window
                } catch {
                    return !1
                }
            }
        }
        function Li(g) {
            return Object.getOwnPropertyDescriptor(g, "scrollRestoration")
        }
        class on {
        }
    }
    ,
    8256: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            QbO: ()=>W_,
            tb: ()=>gg,
            AFp: ()=>ig,
            ip1: ()=>rg,
            CZH: ()=>Rl,
            hGG: ()=>Rw,
            z2F: ()=>Nl,
            sBO: ()=>gw,
            Sil: ()=>X_,
            _Vd: ()=>Pa,
            EJc: ()=>Q_,
            Xts: ()=>du,
            SBq: ()=>Ra,
            lqb: ()=>bo,
            qLn: ()=>Oa,
            vpe: ()=>is,
            XFs: ()=>ce,
            OlP: ()=>St,
            zs3: ()=>Io,
            ZZ4: ()=>Lc,
            aQg: ()=>kc,
            soG: ()=>Ol,
            YKP: ()=>fp,
            h0i: ()=>va,
            PXZ: ()=>cw,
            R0b: ()=>ni,
            FiY: ()=>Zt,
            Lbi: ()=>G_,
            g9A: ()=>og,
            Qsj: ()=>ay,
            FYo: ()=>Ud,
            JOm: ()=>es,
            tp0: ()=>Tn,
            Rgc: ()=>Ga,
            dDg: ()=>ow,
            eoX: ()=>hg,
            GfV: ()=>jd,
            s_b: ()=>Tl,
            ifc: ()=>Me,
            MMx: ()=>cc,
            Lck: ()=>UE,
            eFA: ()=>yg,
            f3M: ()=>ii,
            $WT: ()=>mr,
            MR2: ()=>Wm,
            _c5: ()=>Pw,
            c2e: ()=>K_,
            zSh: ()=>gu,
            wAp: ()=>tt,
            vHH: ()=>re,
            lri: ()=>dg,
            rWj: ()=>fg,
            D6c: ()=>Ow,
            cg1: ()=>ec,
            kL8: ()=>Hh,
            dqk: ()=>ct,
            Z0I: ()=>dr,
            eJc: ()=>Ec,
            CqO: ()=>jf,
            QGY: ()=>Gu,
            F4k: ()=>Uf,
            RDi: ()=>Cm,
            AaK: ()=>Oe,
            qOj: ()=>Hu,
            TTD: ()=>gi,
            jDz: ()=>pp,
            xp6: ()=>Yd,
            uIk: ()=>ju,
            ekj: ()=>Zu,
            Suo: ()=>xp,
            Xpm: ()=>Ns,
            lG2: ()=>ui,
            Yz7: ()=>Yt,
            cJS: ()=>xr,
            oAB: ()=>Ur,
            Yjl: ()=>Fs,
            Y36: ()=>ia,
            _UZ: ()=>zu,
            BQk: ()=>Dl,
            ynx: ()=>vl,
            qZA: ()=>yl,
            TgZ: ()=>ml,
            n5z: ()=>Qa,
            SDv: ()=>lp,
            N_p: ()=>ic,
            Zx4: ()=>cp,
            tHW: ()=>rc,
            LFG: ()=>kt,
            $8M: ()=>Ss,
            $Z: ()=>uf,
            NdJ: ()=>Wu,
            CRH: ()=>Lp,
            oxw: ()=>Wf,
            ALo: ()=>Ip,
            lcZ: ()=>Mp,
            Hsn: ()=>Yf,
            F$t: ()=>Kf,
            Q6J: ()=>$u,
            iGM: ()=>Np,
            LSH: ()=>cu,
            P3R: ()=>Td,
            Akn: ()=>wi,
            Udp: ()=>Xu,
            YNc: ()=>Hf,
            _uU: ()=>yh,
            hij: ()=>wl,
            Gf: ()=>Fp
        });
        var _ = P(7579)
          , L = P(727)
          , O = P(9751)
          , Q = P(8189)
          , X = P(8421)
          , me = P(515)
          , De = P(3269)
          , Ae = P(2076)
          , ue = P(930)
          , q = P(4482);
        function Ze(e, t, ...n) {
            if (!0 === t)
                return void e();
            if (!1 === t)
                return;
            const r = new ue.Hp({
                next: ()=>{
                    r.unsubscribe(),
                    e()
                }
            });
            return (0,
            X.Xf)(t(...n)).subscribe(r)
        }
        function fe(e) {
            for (let t in e)
                if (e[t] === fe)
                    return t;
            throw Error("Could not find renamed property on target object.")
        }
        function Ue(e, t) {
            for (const n in t)
                t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n])
        }
        function Oe(e) {
            if ("string" == typeof e)
                return e;
            if (Array.isArray(e))
                return "[" + e.map(Oe).join(", ") + "]";
            if (null == e)
                return "" + e;
            if (e.overriddenName)
                return `${e.overriddenName}`;
            if (e.name)
                return `${e.name}`;
            const t = e.toString();
            if (null == t)
                return "" + t;
            const n = t.indexOf("\n");
            return -1 === n ? t : t.substring(0, n)
        }
        function Je(e, t) {
            return null == e || "" === e ? null === t ? "" : t : null == t || "" === t ? e : e + " " + t
        }
        const Be = fe({
            __forward_ref__: fe
        });
        function We(e) {
            return e.__forward_ref__ = We,
            e.toString = function() {
                return Oe(this())
            }
            ,
            e
        }
        function _e(e) {
            return ye(e) ? e() : e
        }
        function ye(e) {
            return "function" == typeof e && e.hasOwnProperty(Be) && e.__forward_ref__ === We
        }
        function J(e) {
            return e && !!e.\u0275providers
        }
        const ot = "https://g.co/ng/security#xss";
        class re extends Error {
            constructor(t, n) {
                super(Ee(t, n)),
                this.code = t
            }
        }
        function Ee(e, t) {
            return `NG0 ${Math.abs(e)}${t ? ": " + t.trim() : ""}`
        }
        function se(e) {
            return "string" == typeof e ? e : null == e ? "" : String(e)
        }
        function Y(e, t) {
            throw new re(-201,!1)
        }
        function nt(e, t, n, r) {
            throw new Error(`ASSERTION ERROR: ${e}` + (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`))
        }
        function Yt(e) {
            return {
                token: e.token,
                providedIn: e.providedIn || null,
                factory: e.factory,
                value: void 0
            }
        }
        function xr(e) {
            return {
                providers: e.providers || [],
                imports: e.imports || []
            }
        }
        function Gt(e) {
            return Lr(e, Gn) || Lr(e, kr)
        }
        function dr(e) {
            return null !== Gt(e)
        }
        function Lr(e, t) {
            return e.hasOwnProperty(t) ? e[t] : null
        }
        function Rn(e) {
            return e && (e.hasOwnProperty(Wn) || e.hasOwnProperty(Rt)) ? e[Wn] : null
        }
        const Gn = fe({
            \u0275prov: fe
        })
          , Wn = fe({
            \u0275inj: fe
        })
          , kr = fe({
            ngInjectableDef: fe
        })
          , Rt = fe({
            ngInjectorDef: fe
        });
        var ce = (()=>((ce = ce || {})[ce.Default = 0] = "Default",
        ce[ce.Host = 1] = "Host",
        ce[ce.Self = 2] = "Self",
        ce[ce.SkipSelf = 4] = "SkipSelf",
        ce[ce.Optional = 8] = "Optional",
        ce))();
        let $e;
        function Nt(e) {
            const t = $e;
            return $e = e,
            t
        }
        function fn(e, t, n) {
            const r = Gt(e);
            return r && "root" == r.providedIn ? void 0 === r.value ? r.value = r.factory() : r.value : n & ce.Optional ? null : void 0 !== t ? t : void Y(Oe(e))
        }
        const ct = (()=>typeof globalThis < "u" && globalThis || typeof global < "u" && global || typeof window < "u" && window || typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self)()
          , ht = {}
          , Mi = "__NG_DI_FLAG__"
          , On = "ngTempTokenPath"
          , Ti = "ngTokenPath"
          , Ai = /\n/gm
          , ri = "\u0275"
          , er = "__source";
        let tr;
        function Ut(e) {
            const t = tr;
            return tr = e,
            t
        }
        function ss(e, t=ce.Default) {
            if (void 0 === tr)
                throw new re(-203,!1);
            return null === tr ? fn(e, void 0, t) : tr.get(e, t & ce.Optional ? null : void 0, t)
        }
        function kt(e, t=ce.Default) {
            return (function Ot() {
                return $e
            }() || ss)(_e(e), t)
        }
        function ii(e, t=ce.Default) {
            return kt(e, Ir(t))
        }
        function Ir(e) {
            return typeof e > "u" || "number" == typeof e ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4)
        }
        function Pi(e) {
            const t = [];
            for (let n = 0; n < e.length; n++) {
                const r = _e(e[n]);
                if (Array.isArray(r)) {
                    if (0 === r.length)
                        throw new re(900,!1);
                    let i, s = ce.Default;
                    for (let u = 0; u < r.length; u++) {
                        const h = r[u]
                          , m = z(h);
                        "number" == typeof m ? -1 === m ? i = h.token : s |= m : i = h
                    }
                    t.push(kt(i, s))
                } else
                    t.push(kt(r))
            }
            return t
        }
        function si(e, t) {
            return e[Mi] = t,
            e.prototype[Mi] = t,
            e
        }
        function z(e) {
            return e[Mi]
        }
        function j(e) {
            return {
                toString: e
            }.toString()
        }
        var Z = (()=>((Z = Z || {})[Z.OnPush = 0] = "OnPush",
        Z[Z.Default = 1] = "Default",
        Z))()
          , Me = (()=>{
            return (e = Me || (Me = {}))[e.Emulated = 0] = "Emulated",
            e[e.None = 2] = "None",
            e[e.ShadowDom = 3] = "ShadowDom",
            Me;
            var e
        }
        )();
        const Qe = {}
          , ke = []
          , Tt = fe({
            \u0275cmp: fe
        })
          , hr = fe({
            \u0275dir: fe
        })
          , Cn = fe({
            \u0275pipe: fe
        })
          , oi = fe({
            \u0275mod: fe
        })
          , pr = fe({
            \u0275fac: fe
        })
          , Br = fe({
            __NG_ELEMENT_ID__: fe
        });
        let Ri = 0;
        function Ns(e) {
            return j(()=>{
                const t = ls(e)
                  , n = {
                    ...t,
                    decls: e.decls,
                    vars: e.vars,
                    template: e.template,
                    consts: e.consts || null,
                    ngContentSelectors: e.ngContentSelectors,
                    onPush: e.changeDetection === Z.OnPush,
                    directiveDefs: null,
                    pipeDefs: null,
                    dependencies: t.standalone && e.dependencies || null,
                    getStandaloneInjector: null,
                    data: e.data || {},
                    encapsulation: e.encapsulation || Me.Emulated,
                    id: "c" + Ri++,
                    styles: e.styles || ke,
                    _: null,
                    schemas: e.schemas || null,
                    tView: null
                };
                Oi(n);
                const r = e.dependencies;
                return n.directiveDefs = ci(r, !1),
                n.pipeDefs = ci(r, !0),
                n
            }
            )
        }
        function li(e) {
            return gt(e) || Qt(e)
        }
        function gr(e) {
            return null !== e
        }
        function Ur(e) {
            return j(()=>({
                type: e.type,
                bootstrap: e.bootstrap || ke,
                declarations: e.declarations || ke,
                imports: e.imports || ke,
                exports: e.exports || ke,
                transitiveCompileScopes: null,
                schemas: e.schemas || null,
                id: e.id || null
            }))
        }
        function as(e, t) {
            if (null == e)
                return Qe;
            const n = {};
            for (const r in e)
                if (e.hasOwnProperty(r)) {
                    let i = e[r]
                      , s = i;
                    Array.isArray(i) && (s = i[1],
                    i = i[0]),
                    n[i] = r,
                    t && (t[i] = s)
                }
            return n
        }
        function ui(e) {
            return j(()=>{
                const t = ls(e);
                return Oi(t),
                t
            }
            )
        }
        function Fs(e) {
            return {
                type: e.type,
                name: e.name,
                factory: null,
                pure: !1 !== e.pure,
                standalone: !0 === e.standalone,
                onDestroy: e.type.prototype.ngOnDestroy || null
            }
        }
        function gt(e) {
            return e[Tt] || null
        }
        function Qt(e) {
            return e[hr] || null
        }
        function hn(e) {
            return e[Cn] || null
        }
        function mr(e) {
            const t = gt(e) || Qt(e) || hn(e);
            return null !== t && t.standalone
        }
        function Kt(e, t) {
            const n = e[oi] || null;
            if (!n && !0 === t)
                throw new Error(`Type ${Oe(e)} does not have '\u0275mod' property.`);
            return n
        }
        function ls(e) {
            const t = {};
            return {
                type: e.type,
                providersResolver: null,
                factory: null,
                hostBindings: e.hostBindings || null,
                hostVars: e.hostVars || 0,
                hostAttrs: e.hostAttrs || null,
                contentQueries: e.contentQueries || null,
                declaredInputs: t,
                exportAs: e.exportAs || null,
                standalone: !0 === e.standalone,
                selectors: e.selectors || ke,
                viewQuery: e.viewQuery || null,
                features: e.features || null,
                setInput: null,
                findHostDirectiveDefs: null,
                hostDirectives: null,
                inputs: as(e.inputs, t),
                outputs: as(e.outputs)
            }
        }
        function Oi(e) {
            e.features?.forEach(t=>t(e))
        }
        function ci(e, t) {
            if (!e)
                return null;
            const n = t ? hn : li;
            return ()=>("function" == typeof e ? e() : e).map(r=>n(r)).filter(gr)
        }
        const Hn = 0
          , Pe = 1
          , et = 2
          , Dt = 3
          , yn = 4
          , pn = 5
          , jt = 6
          , nr = 7
          , xt = 8
          , us = 9
          , di = 10
          , lt = 11
          , xs = 12
          , cs = 13
          , fo = 14
          , rn = 15
          , sn = 16
          , Mr = 17
          , Sn = 18
          , Bn = 19
          , rr = 20
          , Ni = 21
          , It = 22
          , Fi = 1
          , xi = 2
          , jr = 7
          , Tr = 8
          , Kn = 9
          , Ht = 10;
        function Vt(e) {
            return Array.isArray(e) && "object" == typeof e[Fi]
        }
        function bn(e) {
            return Array.isArray(e) && !0 === e[Fi]
        }
        function ds(e) {
            return 0 != (4 & e.flags)
        }
        function ir(e) {
            return e.componentOffset > -1
        }
        function $r(e) {
            return 1 == (1 & e.flags)
        }
        function Fn(e) {
            return !!e.template
        }
        function hi(e) {
            return 0 != (256 & e[et])
        }
        function on(e, t) {
            return e.hasOwnProperty(pr) ? e[pr] : null
        }
        class Us {
            constructor(t, n, r) {
                this.previousValue = t,
                this.currentValue = n,
                this.firstChange = r
            }
            isFirstChange() {
                return this.firstChange
            }
        }
        function gi() {
            return or
        }
        function or(e) {
            return e.type.prototype.ngOnChanges && (e.setInput = ki),
            Wr
        }
        function Wr() {
            const e = Pr(this)
              , t = e?.current;
            if (t) {
                const n = e.previous;
                if (n === Qe)
                    e.previous = t;
                else
                    for (let r in t)
                        n[r] = t[r];
                e.current = null,
                this.ngOnChanges(t)
            }
        }
        function ki(e, t, n, r) {
            const i = this.declaredInputs[n]
              , s = Pr(e) || function js(e, t) {
                return e[Hi] = t
            }(e, {
                previous: Qe,
                current: null
            })
              , u = s.current || (s.current = {})
              , h = s.previous
              , m = h[i];
            u[i] = new Us(m && m.currentValue,t,h === Qe),
            e[r] = t
        }
        gi.ngInherit = !0;
        const Hi = "__ngSimpleChanges__";
        function Pr(e) {
            return e[Hi] || null
        }
        const Lt = function(e, t, n) {};
        function en(e) {
            for (; Array.isArray(e); )
                e = e[Hn];
            return e
        }
        function tn(e, t) {
            return en(t[e])
        }
        function an(e, t) {
            return en(t[e.index])
        }
        function mi(e, t) {
            return e.data[t]
        }
        function qt(e, t) {
            const n = t[e];
            return Vt(n) ? n : n[Hn]
        }
        function gs(e) {
            return 64 == (64 & e[et])
        }
        function gn(e, t) {
            return null == t ? null : e[t]
        }
        function $s(e) {
            e[Sn] = 0
        }
        function Vs(e, t) {
            e[pn] += t;
            let n = e
              , r = e[Dt];
            for (; null !== r && (1 === t && 1 === n[pn] || -1 === t && 0 === n[pn]); )
                r[pn] += t,
                n = r,
                r = r[Dt]
        }
        const rt = {
            lFrame: Bo(null),
            bindingsEnabled: !0
        };
        function yi() {
            return rt.bindingsEnabled
        }
        function oe() {
            return rt.lFrame.lView
        }
        function pt() {
            return rt.lFrame.tView
        }
        function nn() {
            let e = vr();
            for (; null !== e && 64 === e.type; )
                e = e.parent;
            return e
        }
        function vr() {
            return rt.lFrame.currentTNode
        }
        function ar() {
            const e = rt.lFrame
              , t = e.currentTNode;
            return e.isParent ? t : t.parent
        }
        function ln(e, t) {
            const n = rt.lFrame;
            n.currentTNode = e,
            n.isParent = t
        }
        function vi() {
            return rt.lFrame.isParent
        }
        function ms() {
            rt.lFrame.isParent = !1
        }
        function Dr() {
            return rt.lFrame.bindingIndex++
        }
        function Qn(e) {
            const t = rt.lFrame
              , n = t.bindingIndex;
            return t.bindingIndex = t.bindingIndex + e,
            n
        }
        function Vi(e) {
            rt.lFrame.inI18n = e
        }
        function Ys(e, t) {
            const n = rt.lFrame;
            n.bindingIndex = n.bindingRootIndex = e,
            zi(t)
        }
        function zi(e) {
            rt.lFrame.currentDirectiveIndex = e
        }
        function yo() {
            return rt.lFrame.currentQueryIndex
        }
        function qr(e) {
            rt.lFrame.currentQueryIndex = e
        }
        function Qs(e) {
            const t = e[Pe];
            return 2 === t.type ? t.declTNode : 1 === t.type ? e[jt] : null
        }
        function qs(e, t, n) {
            if (n & ce.SkipSelf) {
                let i = t
                  , s = e;
                for (; !(i = i.parent,
                null !== i || n & ce.Host || (i = Qs(s),
                null === i || (s = s[rn],
                10 & i.type))); )
                    ;
                if (null === i)
                    return !1;
                t = i,
                e = s
            }
            const r = rt.lFrame = Es();
            return r.currentTNode = t,
            r.lView = e,
            !0
        }
        function Di(e) {
            const t = Es()
              , n = e[Pe];
            rt.lFrame = t,
            t.currentTNode = n.firstChild,
            t.lView = e,
            t.tView = n,
            t.contextLView = e,
            t.bindingIndex = n.bindingStartIndex,
            t.inI18n = !1
        }
        function Es() {
            const e = rt.lFrame
              , t = null === e ? null : e.child;
            return null === t ? Bo(e) : t
        }
        function Bo(e) {
            const t = {
                currentTNode: null,
                isParent: !0,
                lView: null,
                tView: null,
                selectedIndex: -1,
                contextLView: null,
                elementDepthCount: 0,
                currentNamespace: null,
                currentDirectiveIndex: -1,
                bindingRootIndex: -1,
                bindingIndex: -1,
                currentQueryIndex: 0,
                parent: e,
                child: null,
                inI18n: !1
            };
            return null !== e && (e.child = t),
            t
        }
        function vo() {
            const e = rt.lFrame;
            return rt.lFrame = e.parent,
            e.currentTNode = null,
            e.lView = null,
            e
        }
        const Xs = vo;
        function Zs() {
            const e = vo();
            e.isParent = !0,
            e.tView = null,
            e.selectedIndex = -1,
            e.contextLView = null,
            e.elementDepthCount = 0,
            e.currentDirectiveIndex = -1,
            e.currentNamespace = null,
            e.bindingRootIndex = -1,
            e.bindingIndex = -1,
            e.currentQueryIndex = 0
        }
        function Dn() {
            return rt.lFrame.selectedIndex
        }
        function Or(e) {
            rt.lFrame.selectedIndex = e
        }
        function Bt() {
            const e = rt.lFrame;
            return mi(e.tView, e.selectedIndex)
        }
        function W(e, t) {
            for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
                const s = e.data[n].type.prototype
                  , {ngAfterContentInit: u, ngAfterContentChecked: h, ngAfterViewInit: m, ngAfterViewChecked: w, ngOnDestroy: M} = s;
                u && (e.contentHooks ?? (e.contentHooks = [])).push(-n, u),
                h && ((e.contentHooks ?? (e.contentHooks = [])).push(n, h),
                (e.contentCheckHooks ?? (e.contentCheckHooks = [])).push(n, h)),
                m && (e.viewHooks ?? (e.viewHooks = [])).push(-n, m),
                w && ((e.viewHooks ?? (e.viewHooks = [])).push(n, w),
                (e.viewCheckHooks ?? (e.viewCheckHooks = [])).push(n, w)),
                null != M && (e.destroyHooks ?? (e.destroyHooks = [])).push(n, M)
            }
        }
        function te(e, t, n) {
            st(e, t, 3, n)
        }
        function Re(e, t, n, r) {
            (3 & e[et]) === n && st(e, t, n, r)
        }
        function mt(e, t) {
            let n = e[et];
            (3 & n) === t && (n &= 2047,
            n += 1,
            e[et] = n)
        }
        function st(e, t, n, r) {
            const s = r ?? -1
              , u = t.length - 1;
            let h = 0;
            for (let m = void 0 !== r ? 65535 & e[Sn] : 0; m < u; m++)
                if ("number" == typeof t[m + 1]) {
                    if (h = t[m],
                    null != r && h >= r)
                        break
                } else
                    t[m] < 0 && (e[Sn] += 65536),
                    (h < s || -1 == s) && (Et(e, n, t, m),
                    e[Sn] = (4294901760 & e[Sn]) + m + 2),
                    m++
        }
        function Et(e, t, n, r) {
            const i = n[r] < 0
              , s = n[r + 1]
              , h = e[i ? -n[r] : n[r]];
            if (i) {
                if (e[et] >> 11 < e[Sn] >> 16 && (3 & e[et]) === t) {
                    e[et] += 2048,
                    Lt(4, h, s);
                    try {
                        s.call(h)
                    } finally {
                        Lt(5, h, s)
                    }
                }
            } else {
                Lt(4, h, s);
                try {
                    s.call(h)
                } finally {
                    Lt(5, h, s)
                }
            }
        }
        const it = -1;
        class Pt {
            constructor(t, n, r) {
                this.factory = t,
                this.resolving = !1,
                this.canSeeViewProviders = n,
                this.injectImpl = r
            }
        }
        function Er(e, t, n) {
            let r = 0;
            for (; r < n.length; ) {
                const i = n[r];
                if ("number" == typeof i) {
                    if (0 !== i)
                        break;
                    r++;
                    const s = n[r++]
                      , u = n[r++]
                      , h = n[r++];
                    e.setAttribute(t, u, h, s)
                } else {
                    const s = i
                      , u = n[++r];
                    Ln(s) ? e.setProperty(t, s, u) : e.setAttribute(t, s, u),
                    r++
                }
            }
            return r
        }
        function Js(e) {
            return 3 === e || 4 === e || 6 === e
        }
        function Ln(e) {
            return 64 === e.charCodeAt(0)
        }
        function _r(e, t) {
            if (null !== t && 0 !== t.length)
                if (null === e || 0 === e.length)
                    e = t.slice();
                else {
                    let n = -1;
                    for (let r = 0; r < t.length; r++) {
                        const i = t[r];
                        "number" == typeof i ? n = i : 0 === n || Vo(e, n, i, null, -1 === n || 2 === n ? t[++r] : null)
                    }
                }
            return e
        }
        function Vo(e, t, n, r, i) {
            let s = 0
              , u = e.length;
            if (-1 === t)
                u = -1;
            else
                for (; s < e.length; ) {
                    const h = e[s++];
                    if ("number" == typeof h) {
                        if (h === t) {
                            u = -1;
                            break
                        }
                        if (h > t) {
                            u = s - 1;
                            break
                        }
                    }
                }
            for (; s < e.length; ) {
                const h = e[s];
                if ("number" == typeof h)
                    break;
                if (h === n) {
                    if (null === r)
                        return void (null !== i && (e[s + 1] = i));
                    if (r === e[s + 1])
                        return void (e[s + 2] = i)
                }
                s++,
                null !== r && s++,
                null !== i && s++
            }
            -1 !== u && (e.splice(u, 0, t),
            s = u + 1),
            e.splice(s++, 0, n),
            null !== r && e.splice(s++, 0, r),
            null !== i && e.splice(s++, 0, i)
        }
        function zo(e) {
            return e !== it
        }
        function _s(e) {
            return 32767 & e
        }
        function Zr(e, t) {
            let n = function _a(e) {
                return e >> 16
            }(e)
              , r = t;
            for (; n > 0; )
                r = r[rn],
                n--;
            return r
        }
        let Wi = !0;
        function eo(e) {
            const t = Wi;
            return Wi = e,
            t
        }
        const to = 255
          , Wo = 5;
        let Ko = 0;
        const wr = {};
        function no(e, t) {
            const n = Do(e, t);
            if (-1 !== n)
                return n;
            const r = t[Pe];
            r.firstCreatePass && (e.injectorIndex = t.length,
            Ki(r.data, e),
            Ki(t, null),
            Ki(r.blueprint, null));
            const i = Yi(e, t)
              , s = e.injectorIndex;
            if (zo(i)) {
                const u = _s(i)
                  , h = Zr(i, t)
                  , m = h[Pe].data;
                for (let w = 0; w < 8; w++)
                    t[s + w] = h[u + w] | m[u + w]
            }
            return t[s + 8] = i,
            s
        }
        function Ki(e, t) {
            e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
        }
        function Do(e, t) {
            return -1 === e.injectorIndex || e.parent && e.parent.injectorIndex === e.injectorIndex || null === t[e.injectorIndex + 8] ? -1 : e.injectorIndex
        }
        function Yi(e, t) {
            if (e.parent && -1 !== e.parent.injectorIndex)
                return e.parent.injectorIndex;
            let n = 0
              , r = null
              , i = t;
            for (; null !== i; ) {
                if (r = ur(i),
                null === r)
                    return it;
                if (n++,
                i = i[rn],
                -1 !== r.injectorIndex)
                    return r.injectorIndex | n << 16
            }
            return it
        }
        function ws(e, t, n) {
            !function $n(e, t, n) {
                let r;
                "string" == typeof n ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(Br) && (r = n[Br]),
                null == r && (r = n[Br] = Ko++);
                const i = r & to;
                t.data[e + (i >> Wo)] |= 1 << i
            }(e, t, n)
        }
        function Yo(e, t, n) {
            if (n & ce.Optional || void 0 !== e)
                return e;
            Y()
        }
        function Qo(e, t, n, r) {
            if (n & ce.Optional && void 0 === r && (r = null),
            !(n & (ce.Self | ce.Host))) {
                const i = e[us]
                  , s = Nt(void 0);
                try {
                    return i ? i.get(t, r, n & ce.Optional) : fn(t, r, n & ce.Optional)
                } finally {
                    Nt(s)
                }
            }
            return Yo(r, 0, n)
        }
        function ro(e, t, n, r=ce.Default, i) {
            if (null !== e) {
                if (1024 & t[et]) {
                    const u = function _o(e, t, n, r, i) {
                        let s = e
                          , u = t;
                        for (; null !== s && null !== u && 1024 & u[et] && !(256 & u[et]); ) {
                            const h = Eo(s, u, n, r | ce.Self, wr);
                            if (h !== wr)
                                return h;
                            let m = s.parent;
                            if (!m) {
                                const w = u[Ni];
                                if (w) {
                                    const M = w.get(n, wr, r);
                                    if (M !== wr)
                                        return M
                                }
                                m = ur(u),
                                u = u[rn]
                            }
                            s = m
                        }
                        return i
                    }(e, t, n, r, wr);
                    if (u !== wr)
                        return u
                }
                const s = Eo(e, t, n, r, wr);
                if (s !== wr)
                    return s
            }
            return Qo(t, n, r, i)
        }
        function Eo(e, t, n, r, i) {
            const s = function wa(e) {
                if ("string" == typeof e)
                    return e.charCodeAt(0) || 0;
                const t = e.hasOwnProperty(Br) ? e[Br] : void 0;
                return "number" == typeof t ? t >= 0 ? t & to : Ya : t
            }(n);
            if ("function" == typeof s) {
                if (!qs(t, e, r))
                    return r & ce.Host ? Yo(i, 0, r) : Qo(t, n, r, i);
                try {
                    const u = s(r);
                    if (null != u || r & ce.Optional)
                        return u;
                    Y()
                } finally {
                    Xs()
                }
            } else if ("number" == typeof s) {
                let u = null
                  , h = Do(e, t)
                  , m = it
                  , w = r & ce.Host ? t[sn][jt] : null;
                for ((-1 === h || r & ce.SkipSelf) && (m = -1 === h ? Yi(e, t) : t[h + 8],
                m !== it && Cr(r, !1) ? (u = t[Pe],
                h = _s(m),
                t = Zr(m, t)) : h = -1); -1 !== h; ) {
                    const M = t[Pe];
                    if (Cs(s, h, M.data)) {
                        const R = Vn(h, t, n, u, r, w);
                        if (R !== wr)
                            return R
                    }
                    m = t[h + 8],
                    m !== it && Cr(r, t[Pe].data[h + 8] === w) && Cs(s, h, t) ? (u = M,
                    h = _s(m),
                    t = Zr(m, t)) : h = -1
                }
            }
            return i
        }
        function Vn(e, t, n, r, i, s) {
            const u = t[Pe]
              , h = u.data[e + 8]
              , M = io(h, u, n, null == r ? ir(h) && Wi : r != u && 0 != (3 & h.type), i & ce.Host && s === h);
            return null !== M ? qn(t, u, M, h) : wr
        }
        function io(e, t, n, r, i) {
            const s = e.providerIndexes
              , u = t.data
              , h = 1048575 & s
              , m = e.directiveStart
              , M = s >> 20
              , H = i ? h + M : e.directiveEnd;
            for (let $ = r ? h : h + M; $ < H; $++) {
                const ee = u[$];
                if ($ < m && n === ee || $ >= m && ee.type === n)
                    return $
            }
            if (i) {
                const $ = u[m];
                if ($ && Fn($) && $.type === n)
                    return m
            }
            return null
        }
        function qn(e, t, n, r) {
            let i = e[n];
            const s = t.data;
            if (function Mt(e) {
                return e instanceof Pt
            }(i)) {
                const u = i;
                u.resolving && function je(e, t) {
                    const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
                    throw new re(-200,`Circular dependency in DI detected for ${e}${n}`)
                }(function le(e) {
                    return "function" == typeof e ? e.name || e.toString() : "object" == typeof e && null != e && "function" == typeof e.type ? e.type.name || e.type.toString() : se(e)
                }(s[n]));
                const h = eo(u.canSeeViewProviders);
                u.resolving = !0;
                const m = u.injectImpl ? Nt(u.injectImpl) : null;
                qs(e, r, ce.Default);
                try {
                    i = e[n] = u.factory(void 0, s, e, r),
                    t.firstCreatePass && n >= r.directiveStart && function F(e, t, n) {
                        const {ngOnChanges: r, ngOnInit: i, ngDoCheck: s} = t.type.prototype;
                        if (r) {
                            const u = or(t);
                            (n.preOrderHooks ?? (n.preOrderHooks = [])).push(e, u),
                            (n.preOrderCheckHooks ?? (n.preOrderCheckHooks = [])).push(e, u)
                        }
                        i && (n.preOrderHooks ?? (n.preOrderHooks = [])).push(0 - e, i),
                        s && ((n.preOrderHooks ?? (n.preOrderHooks = [])).push(e, s),
                        (n.preOrderCheckHooks ?? (n.preOrderCheckHooks = [])).push(e, s))
                    }(n, s[n], t)
                } finally {
                    null !== m && Nt(m),
                    eo(h),
                    u.resolving = !1,
                    Xs()
                }
            }
            return i
        }
        function Cs(e, t, n) {
            return !!(n[t + (e >> Wo)] & 1 << e)
        }
        function Cr(e, t) {
            return !(e & ce.Self || e & ce.Host && t)
        }
        class Jr {
            constructor(t, n) {
                this._tNode = t,
                this._lView = n
            }
            get(t, n, r) {
                return ro(this._tNode, this._lView, t, Ir(r), n)
            }
        }
        function Ya() {
            return new Jr(nn(),oe())
        }
        function Qa(e) {
            return j(()=>{
                const t = e.prototype.constructor
                  , n = t[pr] || Ca(t)
                  , r = Object.prototype;
                let i = Object.getPrototypeOf(e.prototype).constructor;
                for (; i && i !== r; ) {
                    const s = i[pr] || Ca(i);
                    if (s && s !== n)
                        return s;
                    i = Object.getPrototypeOf(i)
                }
                return s=>new s
            }
            )
        }
        function Ca(e) {
            return ye(e) ? ()=>{
                const t = Ca(_e(e));
                return t && t()
            }
            : on(e)
        }
        function ur(e) {
            const t = e[Pe]
              , n = t.type;
            return 2 === n ? t.declTNode : 1 === n ? e[jt] : null
        }
        function Ss(e) {
            return function Ka(e, t) {
                if ("class" === t)
                    return e.classes;
                if ("style" === t)
                    return e.styles;
                const n = e.attrs;
                if (n) {
                    const r = n.length;
                    let i = 0;
                    for (; i < r; ) {
                        const s = n[i];
                        if (Js(s))
                            break;
                        if (0 === s)
                            i += 2;
                        else if ("number" == typeof s)
                            for (i++; i < r && "string" == typeof n[i]; )
                                i++;
                        else {
                            if (s === t)
                                return n[i + 1];
                            i += 2
                        }
                    }
                }
                return null
            }(nn(), e)
        }
        const qi = "__parameters__";
        function Is(e, t, n) {
            return j(()=>{
                const r = function wo(e) {
                    return function(...n) {
                        if (e) {
                            const r = e(...n);
                            for (const i in r)
                                this[i] = r[i]
                        }
                    }
                }(t);
                function i(...s) {
                    if (this instanceof i)
                        return r.apply(this, s),
                        this;
                    const u = new i(...s);
                    return h.annotation = u,
                    h;
                    function h(m, w, M) {
                        const R = m.hasOwnProperty(qi) ? m[qi] : Object.defineProperty(m, qi, {
                            value: []
                        })[qi];
                        for (; R.length <= M; )
                            R.push(null);
                        return (R[M] = R[M] || []).push(u),
                        m
                    }
                }
                return n && (i.prototype = Object.create(n.prototype)),
                i.prototype.ngMetadataName = e,
                i.annotationCls = i,
                i
            }
            )
        }
        class St {
            constructor(t, n) {
                this._desc = t,
                this.ngMetadataName = "InjectionToken",
                this.\u0275prov = void 0,
                "number" == typeof n ? this.__NG_ELEMENT_ID__ = n : void 0 !== n && (this.\u0275prov = Yt({
                    token: this,
                    providedIn: n.providedIn || "root",
                    factory: n.factory
                }))
            }
            get multi() {
                return this
            }
            toString() {
                return `InjectionToken ${this._desc}`
            }
        }
        function a(e, t) {
            e.forEach(n=>Array.isArray(n) ? a(n, t) : t(n))
        }
        function f(e, t, n) {
            t >= e.length ? e.push(n) : e.splice(t, 0, n)
        }
        function D(e, t) {
            return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
        }
        function S(e, t) {
            const n = [];
            for (let r = 0; r < e; r++)
                n.push(t);
            return n
        }
        function ge(e, t, n) {
            let r = Ct(e, t);
            return r >= 0 ? e[1 | r] = n : (r = ~r,
            function G(e, t, n, r) {
                let i = e.length;
                if (i == t)
                    e.push(n, r);
                else if (1 === i)
                    e.push(r, e[0]),
                    e[0] = n;
                else {
                    for (i--,
                    e.push(e[i - 1], e[i]); i > t; )
                        e[i] = e[i - 2],
                        i--;
                    e[t] = n,
                    e[t + 1] = r
                }
            }(e, r, t, n)),
            r
        }
        function qe(e, t) {
            const n = Ct(e, t);
            if (n >= 0)
                return e[1 | n]
        }
        function Ct(e, t) {
            return function cn(e, t, n) {
                let r = 0
                  , i = e.length >> n;
                for (; i !== r; ) {
                    const s = r + (i - r >> 1)
                      , u = e[s << n];
                    if (t === u)
                        return s << n;
                    u > t ? i = s : r = s + 1
                }
                return ~(i << n)
            }(e, t, 1)
        }
        const Zt = si(Is("Optional"), 8)
          , Tn = si(Is("SkipSelf"), 4);
        var es = (()=>((es = es || {})[es.Important = 1] = "Important",
        es[es.DashCase = 2] = "DashCase",
        es))();
        const $l = new Map;
        let Wg = 0;
        const zl = "__ngContext__";
        function Xn(e, t) {
            Vt(t) ? (e[zl] = t[rr],
            function Yg(e) {
                $l.set(e[rr], e)
            }(t)) : e[zl] = t
        }
        let Gl;
        function Wl(e, t) {
            return Gl(e, t)
        }
        function ba(e) {
            const t = e[Dt];
            return bn(t) ? t[Dt] : t
        }
        function Kl(e) {
            return ed(e[cs])
        }
        function Yl(e) {
            return ed(e[yn])
        }
        function ed(e) {
            for (; null !== e && !bn(e); )
                e = e[yn];
            return e
        }
        function Zo(e, t, n, r, i) {
            if (null != r) {
                let s, u = !1;
                bn(r) ? s = r : Vt(r) && (u = !0,
                r = r[Hn]);
                const h = en(r);
                0 === e && null !== n ? null == i ? od(t, n, h) : Co(t, n, h, i || null, !0) : 1 === e && null !== n ? Co(t, n, h, i || null, !0) : 2 === e ? function tu(e, t, n) {
                    const r = Za(e, t);
                    r && function pm(e, t, n, r) {
                        e.removeChild(t, n, r)
                    }(e, r, t, n)
                }(t, h, u) : 3 === e && t.destroyNode(h),
                null != s && function ym(e, t, n, r, i) {
                    const s = n[jr];
                    s !== en(n) && Zo(t, e, r, s, i);
                    for (let h = Ht; h < n.length; h++) {
                        const m = n[h];
                        Ia(m[Pe], m, e, t, r, s)
                    }
                }(t, e, s, n, i)
            }
        }
        function Ql(e, t) {
            return e.createText(t)
        }
        function ql(e, t, n) {
            return e.createElement(t, n)
        }
        function nd(e, t) {
            const n = e[Kn]
              , r = n.indexOf(t)
              , i = t[Dt];
            512 & t[et] && (t[et] &= -513,
            Vs(i, -1)),
            n.splice(r, 1)
        }
        function Xl(e, t) {
            if (e.length <= Ht)
                return;
            const n = Ht + t
              , r = e[n];
            if (r) {
                const i = r[Mr];
                null !== i && i !== e && nd(i, r),
                t > 0 && (e[n - 1][yn] = r[yn]);
                const s = D(e, Ht + t);
                !function om(e, t) {
                    Ia(e, t, t[lt], 2, null, null),
                    t[Hn] = null,
                    t[jt] = null
                }(r[Pe], r);
                const u = s[Bn];
                null !== u && u.detachView(s[Pe]),
                r[Dt] = null,
                r[yn] = null,
                r[et] &= -65
            }
            return r
        }
        function rd(e, t) {
            if (!(128 & t[et])) {
                const n = t[lt];
                n.destroyNode && Ia(e, t, n, 3, null, null),
                function um(e) {
                    let t = e[cs];
                    if (!t)
                        return Zl(e[Pe], e);
                    for (; t; ) {
                        let n = null;
                        if (Vt(t))
                            n = t[cs];
                        else {
                            const r = t[Ht];
                            r && (n = r)
                        }
                        if (!n) {
                            for (; t && !t[yn] && t !== e; )
                                Vt(t) && Zl(t[Pe], t),
                                t = t[Dt];
                            null === t && (t = e),
                            Vt(t) && Zl(t[Pe], t),
                            n = t && t[yn]
                        }
                        t = n
                    }
                }(t)
            }
        }
        function Zl(e, t) {
            if (!(128 & t[et])) {
                t[et] &= -65,
                t[et] |= 128,
                function hm(e, t) {
                    let n;
                    if (null != e && null != (n = e.destroyHooks))
                        for (let r = 0; r < n.length; r += 2) {
                            const i = t[n[r]];
                            if (!(i instanceof Pt)) {
                                const s = n[r + 1];
                                if (Array.isArray(s))
                                    for (let u = 0; u < s.length; u += 2) {
                                        const h = i[s[u]]
                                          , m = s[u + 1];
                                        Lt(4, h, m);
                                        try {
                                            m.call(h)
                                        } finally {
                                            Lt(5, h, m)
                                        }
                                    }
                                else {
                                    Lt(4, i, s);
                                    try {
                                        s.call(i)
                                    } finally {
                                        Lt(5, i, s)
                                    }
                                }
                            }
                        }
                }(e, t),
                function fm(e, t) {
                    const n = e.cleanup
                      , r = t[nr];
                    let i = -1;
                    if (null !== n)
                        for (let s = 0; s < n.length - 1; s += 2)
                            if ("string" == typeof n[s]) {
                                const u = n[s + 3];
                                u >= 0 ? r[i = u]() : r[i = -u].unsubscribe(),
                                s += 2
                            } else {
                                const u = r[i = n[s + 1]];
                                n[s].call(u)
                            }
                    if (null !== r) {
                        for (let s = i + 1; s < r.length; s++)
                            (0,
                            r[s])();
                        t[nr] = null
                    }
                }(e, t),
                1 === t[Pe].type && t[lt].destroy();
                const n = t[Mr];
                if (null !== n && bn(t[Dt])) {
                    n !== t[Dt] && nd(n, t);
                    const r = t[Bn];
                    null !== r && r.detachView(e)
                }
                !function Qg(e) {
                    $l.delete(e[rr])
                }(t)
            }
        }
        function id(e, t, n) {
            return sd(e, t.parent, n)
        }
        function sd(e, t, n) {
            let r = t;
            for (; null !== r && 40 & r.type; )
                r = (t = r).parent;
            if (null === r)
                return n[Hn];
            {
                const {componentOffset: i} = r;
                if (i > -1) {
                    const {encapsulation: s} = e.data[r.directiveStart + i];
                    if (s === Me.None || s === Me.Emulated)
                        return null
                }
                return an(r, n)
            }
        }
        function Co(e, t, n, r, i) {
            e.insertBefore(t, n, r, i)
        }
        function od(e, t, n) {
            e.appendChild(t, n)
        }
        function ad(e, t, n, r, i) {
            null !== r ? Co(e, t, n, r, i) : od(e, t, n)
        }
        function Za(e, t) {
            return e.parentNode(t)
        }
        function ld(e, t, n) {
            return cd(e, t, n)
        }
        function ud(e, t, n) {
            return 40 & e.type ? an(e, n) : null
        }
        let Jl, tl, iu, nl, cd = ud;
        function dd(e, t) {
            cd = e,
            Jl = t
        }
        function Ja(e, t, n, r) {
            const i = id(e, r, t)
              , s = t[lt]
              , h = ld(r.parent || t[jt], r, t);
            if (null != i)
                if (Array.isArray(n))
                    for (let m = 0; m < n.length; m++)
                        ad(s, i, n[m], h, !1);
                else
                    ad(s, i, n, h, !1);
            void 0 !== Jl && Jl(s, r, t, n, i)
        }
        function el(e, t) {
            if (null !== t) {
                const n = t.type;
                if (3 & n)
                    return an(t, e);
                if (4 & n)
                    return eu(-1, e[t.index]);
                if (8 & n) {
                    const r = t.child;
                    if (null !== r)
                        return el(e, r);
                    {
                        const i = e[t.index];
                        return bn(i) ? eu(-1, i) : en(i)
                    }
                }
                if (32 & n)
                    return Wl(t, e)() || en(e[t.index]);
                {
                    const r = fd(e, t);
                    return null !== r ? Array.isArray(r) ? r[0] : el(ba(e[sn]), r) : el(e, t.next)
                }
            }
            return null
        }
        function fd(e, t) {
            return null !== t ? e[sn][jt].projection[t.projection] : null
        }
        function eu(e, t) {
            const n = Ht + e + 1;
            if (n < t.length) {
                const r = t[n]
                  , i = r[Pe].firstChild;
                if (null !== i)
                    return el(r, i)
            }
            return t[jr]
        }
        function nu(e, t, n, r, i, s, u) {
            for (; null != n; ) {
                const h = r[n.index]
                  , m = n.type;
                if (u && 0 === t && (h && Xn(en(h), r),
                n.flags |= 2),
                32 != (32 & n.flags))
                    if (8 & m)
                        nu(e, t, n.child, r, i, s, !1),
                        Zo(t, e, i, h, s);
                    else if (32 & m) {
                        const w = Wl(n, r);
                        let M;
                        for (; M = w(); )
                            Zo(t, e, i, M, s);
                        Zo(t, e, i, h, s)
                    } else
                        16 & m ? hd(e, t, r, n, i, s) : Zo(t, e, i, h, s);
                n = u ? n.projectionNext : n.next
            }
        }
        function Ia(e, t, n, r, i, s) {
            nu(n, r, e.firstChild, t, i, s, !1)
        }
        function hd(e, t, n, r, i, s) {
            const u = n[sn]
              , m = u[jt].projection[r.projection];
            if (Array.isArray(m))
                for (let w = 0; w < m.length; w++)
                    Zo(t, e, i, m[w], s);
            else
                nu(e, t, m, u[Dt], i, s, !0)
        }
        function pd(e, t, n) {
            "" === n ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n)
        }
        function gd(e, t, n) {
            const {mergedAttrs: r, classes: i, styles: s} = n;
            null !== r && Er(e, t, r),
            null !== i && pd(e, t, i),
            null !== s && function Dm(e, t, n) {
                e.setAttribute(t, "style", n)
            }(e, t, s)
        }
        function Jo(e) {
            return function ru() {
                if (void 0 === tl && (tl = null,
                ct.trustedTypes))
                    try {
                        tl = ct.trustedTypes.createPolicy("angular", {
                            createHTML: e=>e,
                            createScript: e=>e,
                            createScriptURL: e=>e
                        })
                    } catch {}
                return tl
            }()?.createHTML(e) || e
        }
        function Cm(e) {
            iu = e
        }
        function Dd(e) {
            return function su() {
                if (void 0 === nl && (nl = null,
                ct.trustedTypes))
                    try {
                        nl = ct.trustedTypes.createPolicy("angular#unsafe-bypass", {
                            createHTML: e=>e,
                            createScript: e=>e,
                            createScriptURL: e=>e
                        })
                    } catch {}
                return nl
            }()?.createScriptURL(e) || e
        }
        class Ed {
            constructor(t) {
                this.changingThisBreaksApplicationSecurity = t
            }
            toString() {
                return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${ot})`
            }
        }
        function ao(e) {
            return e instanceof Ed ? e.changingThisBreaksApplicationSecurity : e
        }
        function Ma(e, t) {
            const n = function Am(e) {
                return e instanceof Ed && e.getTypeName() || null
            }(e);
            if (null != n && n !== t) {
                if ("ResourceURL" === n && "URL" === t)
                    return !0;
                throw new Error(`Required a safe ${t}, got a ${n} (see ${ot})`)
            }
            return n === t
        }
        class Pm {
            constructor(t) {
                this.inertDocumentHelper = t
            }
            getInertBodyElement(t) {
                t = "<body><remove></remove>" + t;
                try {
                    const n = (new window.DOMParser).parseFromString(Jo(t), "text/html").body;
                    return null === n ? this.inertDocumentHelper.getInertBodyElement(t) : (n.removeChild(n.firstChild),
                    n)
                } catch {
                    return null
                }
            }
        }
        class Rm {
            constructor(t) {
                this.defaultDoc = t,
                this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")
            }
            getInertBodyElement(t) {
                const n = this.inertDocument.createElement("template");
                return n.innerHTML = Jo(t),
                n
            }
        }
        const Nm = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
        function ou(e) {
            return (e = String(e)).match(Nm) ? e : "unsafe:" + e
        }
        function As(e) {
            const t = {};
            for (const n of e.split(","))
                t[n] = !0;
            return t
        }
        function Ta(...e) {
            const t = {};
            for (const n of e)
                for (const r in n)
                    n.hasOwnProperty(r) && (t[r] = !0);
            return t
        }
        const wd = As("area,br,col,hr,img,wbr")
          , Cd = As("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr")
          , Sd = As("rp,rt")
          , au = Ta(wd, Ta(Cd, As("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Ta(Sd, As("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Ta(Sd, Cd))
          , lu = As("background,cite,href,itemtype,longdesc,poster,src,xlink:href")
          , bd = Ta(lu, As("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), As("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"));
        var _n = (()=>((_n = _n || {})[_n.NONE = 0] = "NONE",
        _n[_n.HTML = 1] = "HTML",
        _n[_n.STYLE = 2] = "STYLE",
        _n[_n.SCRIPT = 3] = "SCRIPT",
        _n[_n.URL = 4] = "URL",
        _n[_n.RESOURCE_URL = 5] = "RESOURCE_URL",
        _n))();
        function cu(e) {
            const t = Aa();
            return t ? t.sanitize(_n.URL, e) || "" : Ma(e, "URL") ? ao(e) : ou(se(e))
        }
        function Md(e) {
            const t = Aa();
            if (t)
                return Dd(t.sanitize(_n.RESOURCE_URL, e) || "");
            if (Ma(e, "ResourceURL"))
                return Dd(ao(e));
            throw new re(904,!1)
        }
        function Td(e, t, n) {
            return function Gm(e, t) {
                return "src" === t && ("embed" === e || "frame" === e || "iframe" === e || "media" === e || "script" === e) || "href" === t && ("base" === e || "link" === e) ? Md : cu
            }(t, n)(e)
        }
        function Aa() {
            const e = oe();
            return e && e[xs]
        }
        const du = new St("ENVIRONMENT_INITIALIZER")
          , Ad = new St("INJECTOR",-1)
          , Pd = new St("INJECTOR_DEF_TYPES");
        class Rd {
            get(t, n=ht) {
                if (n === ht) {
                    const r = new Error(`NullInjectorError: No provider for ${Oe(t)}!`);
                    throw r.name = "NullInjectorError",
                    r
                }
                return n
            }
        }
        function Wm(e) {
            return {
                \u0275providers: e
            }
        }
        function Km(...e) {
            return {
                \u0275providers: Od(0, e),
                \u0275fromNgModule: !0
            }
        }
        function Od(e, ...t) {
            const n = []
              , r = new Set;
            let i;
            return a(t, s=>{
                const u = s;
                fu(u, n, [], r) && (i || (i = []),
                i.push(u))
            }
            ),
            void 0 !== i && Nd(i, n),
            n
        }
        function Nd(e, t) {
            for (let n = 0; n < e.length; n++) {
                const {providers: i} = e[n];
                hu(i, s=>{
                    t.push(s)
                }
                )
            }
        }
        function fu(e, t, n, r) {
            if (!(e = _e(e)))
                return !1;
            let i = null
              , s = Rn(e);
            const u = !s && gt(e);
            if (s || u) {
                if (u && !u.standalone)
                    return !1;
                i = e
            } else {
                const m = e.ngModule;
                if (s = Rn(m),
                !s)
                    return !1;
                i = m
            }
            const h = r.has(i);
            if (u) {
                if (h)
                    return !1;
                if (r.add(i),
                u.dependencies) {
                    const m = "function" == typeof u.dependencies ? u.dependencies() : u.dependencies;
                    for (const w of m)
                        fu(w, t, n, r)
                }
            } else {
                if (!s)
                    return !1;
                {
                    if (null != s.imports && !h) {
                        let w;
                        r.add(i);
                        try {
                            a(s.imports, M=>{
                                fu(M, t, n, r) && (w || (w = []),
                                w.push(M))
                            }
                            )
                        } finally {}
                        void 0 !== w && Nd(w, t)
                    }
                    if (!h) {
                        const w = on(i) || (()=>new i);
                        t.push({
                            provide: i,
                            useFactory: w,
                            deps: ke
                        }, {
                            provide: Pd,
                            useValue: i,
                            multi: !0
                        }, {
                            provide: du,
                            useValue: ()=>kt(i),
                            multi: !0
                        })
                    }
                    const m = s.providers;
                    null == m || h || hu(m, M=>{
                        t.push(M)
                    }
                    )
                }
            }
            return i !== e && void 0 !== e.providers
        }
        function hu(e, t) {
            for (let n of e)
                J(n) && (n = n.\u0275providers),
                Array.isArray(n) ? hu(n, t) : t(n)
        }
        const Ym = fe({
            provide: String,
            useValue: fe
        });
        function pu(e) {
            return null !== e && "object" == typeof e && Ym in e
        }
        function So(e) {
            return "function" == typeof e
        }
        const gu = new St("Set Injector scope.")
          , il = {}
          , qm = {};
        let mu;
        function sl() {
            return void 0 === mu && (mu = new Rd),
            mu
        }
        class bo {
        }
        class Ld extends bo {
            get destroyed() {
                return this._destroyed
            }
            constructor(t, n, r, i) {
                super(),
                this.parent = n,
                this.source = r,
                this.scopes = i,
                this.records = new Map,
                this._ngOnDestroyHooks = new Set,
                this._onDestroyHooks = [],
                this._destroyed = !1,
                vu(t, u=>this.processProvider(u)),
                this.records.set(Ad, ea(void 0, this)),
                i.has("environment") && this.records.set(bo, ea(void 0, this));
                const s = this.records.get(gu);
                null != s && "string" == typeof s.value && this.scopes.add(s.value),
                this.injectorDefTypes = new Set(this.get(Pd.multi, ke, ce.Self))
            }
            destroy() {
                this.assertNotDestroyed(),
                this._destroyed = !0;
                try {
                    for (const t of this._ngOnDestroyHooks)
                        t.ngOnDestroy();
                    for (const t of this._onDestroyHooks)
                        t()
                } finally {
                    this.records.clear(),
                    this._ngOnDestroyHooks.clear(),
                    this.injectorDefTypes.clear(),
                    this._onDestroyHooks.length = 0
                }
            }
            onDestroy(t) {
                this._onDestroyHooks.push(t)
            }
            runInContext(t) {
                this.assertNotDestroyed();
                const n = Ut(this)
                  , r = Nt(void 0);
                try {
                    return t()
                } finally {
                    Ut(n),
                    Nt(r)
                }
            }
            get(t, n=ht, r=ce.Default) {
                this.assertNotDestroyed(),
                r = Ir(r);
                const i = Ut(this)
                  , s = Nt(void 0);
                try {
                    if (!(r & ce.SkipSelf)) {
                        let h = this.records.get(t);
                        if (void 0 === h) {
                            const m = function ty(e) {
                                return "function" == typeof e || "object" == typeof e && e instanceof St
                            }(t) && Gt(t);
                            h = m && this.injectableDefInScope(m) ? ea(yu(t), il) : null,
                            this.records.set(t, h)
                        }
                        if (null != h)
                            return this.hydrate(t, h)
                    }
                    return (r & ce.Self ? sl() : this.parent).get(t, n = r & ce.Optional && n === ht ? null : n)
                } catch (u) {
                    if ("NullInjectorError" === u.name) {
                        if ((u[On] = u[On] || []).unshift(Oe(t)),
                        i)
                            throw u;
                        return function B(e, t, n, r) {
                            const i = e[On];
                            throw t[er] && i.unshift(t[er]),
                            e.message = function A(e, t, n, r=null) {
                                e = e && "\n" === e.charAt(0) && e.charAt(1) == ri ? e.slice(2) : e;
                                let i = Oe(t);
                                if (Array.isArray(t))
                                    i = t.map(Oe).join(" -> ");
                                else if ("object" == typeof t) {
                                    let s = [];
                                    for (let u in t)
                                        if (t.hasOwnProperty(u)) {
                                            let h = t[u];
                                            s.push(u + ":" + ("string" == typeof h ? JSON.stringify(h) : Oe(h)))
                                        }
                                    i = `{${s.join(", ")}}`
                                }
                                return `${n}${r ? "(" + r + ")" : ""}[${i}]: ${e.replace(Ai, "\n  ")}`
                            }("\n" + e.message, i, n, r),
                            e[Ti] = i,
                            e[On] = null,
                            e
                        }(u, t, "R3InjectorError", this.source)
                    }
                    throw u
                } finally {
                    Nt(s),
                    Ut(i)
                }
            }
            resolveInjectorInitializers() {
                const t = Ut(this)
                  , n = Nt(void 0);
                try {
                    const r = this.get(du.multi, ke, ce.Self);
                    for (const i of r)
                        i()
                } finally {
                    Ut(t),
                    Nt(n)
                }
            }
            toString() {
                const t = []
                  , n = this.records;
                for (const r of n.keys())
                    t.push(Oe(r));
                return `R3Injector[${t.join(", ")}]`
            }
            assertNotDestroyed() {
                if (this._destroyed)
                    throw new re(205,!1)
            }
            processProvider(t) {
                let n = So(t = _e(t)) ? t : _e(t && t.provide);
                const r = function Zm(e) {
                    return pu(e) ? ea(void 0, e.useValue) : ea(function kd(e, t, n) {
                        let r;
                        if (So(e)) {
                            const i = _e(e);
                            return on(i) || yu(i)
                        }
                        if (pu(e))
                            r = ()=>_e(e.useValue);
                        else if (function xd(e) {
                            return !(!e || !e.useFactory)
                        }(e))
                            r = ()=>e.useFactory(...Pi(e.deps || []));
                        else if (function Fd(e) {
                            return !(!e || !e.useExisting)
                        }(e))
                            r = ()=>kt(_e(e.useExisting));
                        else {
                            const i = _e(e && (e.useClass || e.provide));
                            if (!function Jm(e) {
                                return !!e.deps
                            }(e))
                                return on(i) || yu(i);
                            r = ()=>new i(...Pi(e.deps))
                        }
                        return r
                    }(e), il)
                }(t);
                if (So(t) || !0 !== t.multi)
                    this.records.get(n);
                else {
                    let i = this.records.get(n);
                    i || (i = ea(void 0, il, !0),
                    i.factory = ()=>Pi(i.multi),
                    this.records.set(n, i)),
                    n = t,
                    i.multi.push(t)
                }
                this.records.set(n, r)
            }
            hydrate(t, n) {
                return n.value === il && (n.value = qm,
                n.value = n.factory()),
                "object" == typeof n.value && n.value && function ey(e) {
                    return null !== e && "object" == typeof e && "function" == typeof e.ngOnDestroy
                }(n.value) && this._ngOnDestroyHooks.add(n.value),
                n.value
            }
            injectableDefInScope(t) {
                if (!t.providedIn)
                    return !1;
                const n = _e(t.providedIn);
                return "string" == typeof n ? "any" === n || this.scopes.has(n) : this.injectorDefTypes.has(n)
            }
        }
        function yu(e) {
            const t = Gt(e)
              , n = null !== t ? t.factory : on(e);
            if (null !== n)
                return n;
            if (e instanceof St)
                throw new re(204,!1);
            if (e instanceof Function)
                return function Xm(e) {
                    const t = e.length;
                    if (t > 0)
                        throw S(t, "?"),
                        new re(204,!1);
                    const n = function Wt(e) {
                        return e && (e[Gn] || e[kr]) || null
                    }(e);
                    return null !== n ? ()=>n.factory(e) : ()=>new e
                }(e);
            throw new re(204,!1)
        }
        function ea(e, t, n=!1) {
            return {
                factory: e,
                value: t,
                multi: n ? [] : void 0
            }
        }
        function vu(e, t) {
            for (const n of e)
                Array.isArray(n) ? vu(n, t) : n && J(n) ? vu(n.\u0275providers, t) : t(n)
        }
        class ny {
        }
        class Hd {
        }
        class iy {
            resolveComponentFactory(t) {
                throw function ry(e) {
                    const t = Error(`No component factory found for ${Oe(e)}. Did you add it to @NgModule.entryComponents?`);
                    return t.ngComponent = e,
                    t
                }(t)
            }
        }
        let Pa = (()=>{
            class e {
            }
            return e.NULL = new iy,
            e
        }
        )();
        function sy() {
            return ta(nn(), oe())
        }
        function ta(e, t) {
            return new Ra(an(e, t))
        }
        let Ra = (()=>{
            class e {
                constructor(n) {
                    this.nativeElement = n
                }
            }
            return e.__NG_ELEMENT_ID__ = sy,
            e
        }
        )();
        function oy(e) {
            return e instanceof Ra ? e.nativeElement : e
        }
        class Ud {
        }
        let ay = (()=>{
            class e {
            }
            return e.__NG_ELEMENT_ID__ = ()=>function ly() {
                const e = oe()
                  , n = qt(nn().index, e);
                return (Vt(n) ? n : e)[lt]
            }(),
            e
        }
        )()
          , uy = (()=>{
            class e {
            }
            return e.\u0275prov = Yt({
                token: e,
                providedIn: "root",
                factory: ()=>null
            }),
            e
        }
        )();
        class jd {
            constructor(t) {
                this.full = t,
                this.major = t.split(".")[0],
                this.minor = t.split(".")[1],
                this.patch = t.split(".").slice(2).join(".")
            }
        }
        const cy = new jd("15.2.8")
          , Du = {}
          , Eu = "ngOriginalError";
        function _u(e) {
            return e[Eu]
        }
        class Oa {
            constructor() {
                this._console = console
            }
            handleError(t) {
                const n = this._findOriginalError(t);
                this._console.error("ERROR", t),
                n && this._console.error("ORIGINAL ERROR", n)
            }
            _findOriginalError(t) {
                let n = t && _u(t);
                for (; n && _u(n); )
                    n = _u(n);
                return n || null
            }
        }
        function Ps(e) {
            return e instanceof Function ? e() : e
        }
        function Vd(e, t, n) {
            let r = e.length;
            for (; ; ) {
                const i = e.indexOf(t, n);
                if (-1 === i)
                    return i;
                if (0 === i || e.charCodeAt(i - 1) <= 32) {
                    const s = t.length;
                    if (i + s === r || e.charCodeAt(i + s) <= 32)
                        return i
                }
                n = i + 1
            }
        }
        const zd = "ng-template";
        function _y(e, t, n) {
            let r = 0
              , i = !0;
            for (; r < e.length; ) {
                let s = e[r++];
                if ("string" == typeof s && i) {
                    const u = e[r++];
                    if (n && "class" === s && -1 !== Vd(u.toLowerCase(), t, 0))
                        return !0
                } else {
                    if (1 === s) {
                        for (; r < e.length && "string" == typeof (s = e[r++]); )
                            if (s.toLowerCase() === t)
                                return !0;
                        return !1
                    }
                    "number" == typeof s && (i = !1)
                }
            }
            return !1
        }
        function Gd(e) {
            return 4 === e.type && e.value !== zd
        }
        function wy(e, t, n) {
            return t === (4 !== e.type || n ? e.value : zd)
        }
        function Cy(e, t, n) {
            let r = 4;
            const i = e.attrs || []
              , s = function Iy(e) {
                for (let t = 0; t < e.length; t++)
                    if (Js(e[t]))
                        return t;
                return e.length
            }(i);
            let u = !1;
            for (let h = 0; h < t.length; h++) {
                const m = t[h];
                if ("number" != typeof m) {
                    if (!u)
                        if (4 & r) {
                            if (r = 2 | 1 & r,
                            "" !== m && !wy(e, m, n) || "" === m && 1 === t.length) {
                                if (_i(r))
                                    return !1;
                                u = !0
                            }
                        } else {
                            const w = 8 & r ? m : t[++h];
                            if (8 & r && null !== e.attrs) {
                                if (!_y(e.attrs, w, n)) {
                                    if (_i(r))
                                        return !1;
                                    u = !0
                                }
                                continue
                            }
                            const R = Sy(8 & r ? "class" : m, i, Gd(e), n);
                            if (-1 === R) {
                                if (_i(r))
                                    return !1;
                                u = !0;
                                continue
                            }
                            if ("" !== w) {
                                let H;
                                H = R > s ? "" : i[R + 1].toLowerCase();
                                const $ = 8 & r ? H : null;
                                if ($ && -1 !== Vd($, w, 0) || 2 & r && w !== H) {
                                    if (_i(r))
                                        return !1;
                                    u = !0
                                }
                            }
                        }
                } else {
                    if (!u && !_i(r) && !_i(m))
                        return !1;
                    if (u && _i(m))
                        continue;
                    u = !1,
                    r = m | 1 & r
                }
            }
            return _i(r) || u
        }
        function _i(e) {
            return 0 == (1 & e)
        }
        function Sy(e, t, n, r) {
            if (null === t)
                return -1;
            let i = 0;
            if (r || !n) {
                let s = !1;
                for (; i < t.length; ) {
                    const u = t[i];
                    if (u === e)
                        return i;
                    if (3 === u || 6 === u)
                        s = !0;
                    else {
                        if (1 === u || 2 === u) {
                            let h = t[++i];
                            for (; "string" == typeof h; )
                                h = t[++i];
                            continue
                        }
                        if (4 === u)
                            break;
                        if (0 === u) {
                            i += 4;
                            continue
                        }
                    }
                    i += s ? 1 : 2
                }
                return -1
            }
            return function My(e, t) {
                let n = e.indexOf(4);
                if (n > -1)
                    for (n++; n < e.length; ) {
                        const r = e[n];
                        if ("number" == typeof r)
                            return -1;
                        if (r === t)
                            return n;
                        n++
                    }
                return -1
            }(t, e)
        }
        function Wd(e, t, n=!1) {
            for (let r = 0; r < t.length; r++)
                if (Cy(e, t[r], n))
                    return !0;
            return !1
        }
        function Ty(e, t) {
            e: for (let n = 0; n < t.length; n++) {
                const r = t[n];
                if (e.length === r.length) {
                    for (let i = 0; i < e.length; i++)
                        if (e[i] !== r[i])
                            continue e;
                    return !0
                }
            }
            return !1
        }
        function Kd(e, t) {
            return e ? ":not(" + t.trim() + ")" : t
        }
        function Ay(e) {
            let t = e[0]
              , n = 1
              , r = 2
              , i = ""
              , s = !1;
            for (; n < e.length; ) {
                let u = e[n];
                if ("string" == typeof u)
                    if (2 & r) {
                        const h = e[++n];
                        i += "[" + u + (h.length > 0 ? '="' + h + '"' : "") + "]"
                    } else
                        8 & r ? i += "." + u : 4 & r && (i += " " + u);
                else
                    "" !== i && !_i(u) && (t += Kd(s, i),
                    i = ""),
                    r = u,
                    s = s || !_i(r);
                n++
            }
            return "" !== i && (t += Kd(s, i)),
            t
        }
        const dt = {};
        function Yd(e) {
            Qd(pt(), oe(), Dn() + e, !1)
        }
        function Qd(e, t, n, r) {
            if (!r)
                if (3 == (3 & t[et])) {
                    const s = e.preOrderCheckHooks;
                    null !== s && te(t, s, n)
                } else {
                    const s = e.preOrderHooks;
                    null !== s && Re(t, s, 0, n)
                }
            Or(n)
        }
        function Jd(e, t=null, n=null, r) {
            const i = ef(e, t, n, r);
            return i.resolveInjectorInitializers(),
            i
        }
        function ef(e, t=null, n=null, r, i=new Set) {
            const s = [n || ke, Km(e)];
            return r = r || ("object" == typeof e ? void 0 : Oe(e)),
            new Ld(s,t || sl(),r || null,i)
        }
        let Io = (()=>{
            class e {
                static create(n, r) {
                    if (Array.isArray(n))
                        return Jd({
                            name: ""
                        }, r, n, "");
                    {
                        const i = n.name ?? "";
                        return Jd({
                            name: i
                        }, n.parent, n.providers, i)
                    }
                }
            }
            return e.THROW_IF_NOT_FOUND = ht,
            e.NULL = new Rd,
            e.\u0275prov = Yt({
                token: e,
                providedIn: "any",
                factory: ()=>kt(Ad)
            }),
            e.__NG_ELEMENT_ID__ = -1,
            e
        }
        )();
        function ia(e, t=ce.Default) {
            const n = oe();
            return null === n ? kt(e, t) : ro(nn(), n, _e(e), t)
        }
        function uf() {
            throw new Error("invalid")
        }
        function cf(e, t) {
            const n = e.contentQueries;
            if (null !== n)
                for (let r = 0; r < n.length; r += 2) {
                    const s = n[r + 1];
                    if (-1 !== s) {
                        const u = e.data[s];
                        qr(n[r]),
                        u.contentQueries(2, t[s], s)
                    }
                }
        }
        function al(e, t, n, r, i, s, u, h, m, w, M) {
            const R = t.blueprint.slice();
            return R[Hn] = i,
            R[et] = 76 | r,
            (null !== M || e && 1024 & e[et]) && (R[et] |= 1024),
            $s(R),
            R[Dt] = R[rn] = e,
            R[xt] = n,
            R[di] = u || e && e[di],
            R[lt] = h || e && e[lt],
            R[xs] = m || e && e[xs] || null,
            R[us] = w || e && e[us] || null,
            R[jt] = s,
            R[rr] = function Kg() {
                return Wg++
            }(),
            R[Ni] = M,
            R[sn] = 2 == t.type ? e[sn] : R,
            R
        }
        function sa(e, t, n, r, i) {
            let s = e.data[t];
            if (null === s)
                s = Iu(e, t, n, r, i),
                function Ds() {
                    return rt.lFrame.inI18n
                }() && (s.flags |= 32);
            else if (64 & s.type) {
                s.type = n,
                s.value = r,
                s.attrs = i;
                const u = ar();
                s.injectorIndex = null === u ? -1 : u.injectorIndex
            }
            return ln(s, !0),
            s
        }
        function Iu(e, t, n, r, i) {
            const s = vr()
              , u = vi()
              , m = e.data[t] = function tv(e, t, n, r, i, s) {
                return {
                    type: n,
                    index: r,
                    insertBeforeIndex: null,
                    injectorIndex: t ? t.injectorIndex : -1,
                    directiveStart: -1,
                    directiveEnd: -1,
                    directiveStylingLast: -1,
                    componentOffset: -1,
                    propertyBindings: null,
                    flags: 0,
                    providerIndexes: 0,
                    value: i,
                    attrs: s,
                    mergedAttrs: null,
                    localNames: null,
                    initialInputs: void 0,
                    inputs: null,
                    outputs: null,
                    tView: null,
                    next: null,
                    prev: null,
                    projectionNext: null,
                    child: null,
                    parent: t,
                    projection: null,
                    styles: null,
                    stylesWithoutHost: null,
                    residualStyles: void 0,
                    classes: null,
                    classesWithoutHost: null,
                    residualClasses: void 0,
                    classBindings: 0,
                    styleBindings: 0
                }
            }(0, u ? s : s && s.parent, n, t, r, i);
            return null === e.firstChild && (e.firstChild = m),
            null !== s && (u ? null == s.child && null !== m.parent && (s.child = m) : null === s.next && (s.next = m,
            m.prev = s)),
            m
        }
        function Na(e, t, n, r) {
            if (0 === n)
                return -1;
            const i = t.length;
            for (let s = 0; s < n; s++)
                t.push(r),
                e.blueprint.push(r),
                e.data.push(null);
            return i
        }
        function Mu(e, t, n) {
            Di(t);
            try {
                const r = e.viewQuery;
                null !== r && Lu(1, r, n);
                const i = e.template;
                null !== i && df(e, t, i, 1, n),
                e.firstCreatePass && (e.firstCreatePass = !1),
                e.staticContentQueries && cf(e, t),
                e.staticViewQueries && Lu(2, e.viewQuery, n);
                const s = e.components;
                null !== s && function Zy(e, t) {
                    for (let n = 0; n < t.length; n++)
                        _v(e, t[n])
                }(t, s)
            } catch (r) {
                throw e.firstCreatePass && (e.incompleteFirstPass = !0,
                e.firstCreatePass = !1),
                r
            } finally {
                t[et] &= -5,
                Zs()
            }
        }
        function ll(e, t, n, r) {
            const i = t[et];
            if (128 != (128 & i)) {
                Di(t);
                try {
                    $s(t),
                    function vs(e) {
                        return rt.lFrame.bindingIndex = e
                    }(e.bindingStartIndex),
                    null !== n && df(e, t, n, 2, r);
                    const u = 3 == (3 & i);
                    if (u) {
                        const w = e.preOrderCheckHooks;
                        null !== w && te(t, w, null)
                    } else {
                        const w = e.preOrderHooks;
                        null !== w && Re(t, w, 0, null),
                        mt(t, 0)
                    }
                    if (function Dv(e) {
                        for (let t = Kl(e); null !== t; t = Yl(t)) {
                            if (!t[xi])
                                continue;
                            const n = t[Kn];
                            for (let r = 0; r < n.length; r++) {
                                const i = n[r];
                                512 & i[et] || Vs(i[Dt], 1),
                                i[et] |= 512
                            }
                        }
                    }(t),
                    function vv(e) {
                        for (let t = Kl(e); null !== t; t = Yl(t))
                            for (let n = Ht; n < t.length; n++) {
                                const r = t[n]
                                  , i = r[Pe];
                                gs(r) && ll(i, r, i.template, r[xt])
                            }
                    }(t),
                    null !== e.contentQueries && cf(e, t),
                    u) {
                        const w = e.contentCheckHooks;
                        null !== w && te(t, w)
                    } else {
                        const w = e.contentHooks;
                        null !== w && Re(t, w, 1),
                        mt(t, 1)
                    }
                    !function qy(e, t) {
                        const n = e.hostBindingOpCodes;
                        if (null !== n)
                            try {
                                for (let r = 0; r < n.length; r++) {
                                    const i = n[r];
                                    if (i < 0)
                                        Or(~i);
                                    else {
                                        const s = i
                                          , u = n[++r]
                                          , h = n[++r];
                                        Ys(u, s),
                                        h(2, t[s])
                                    }
                                }
                            } finally {
                                Or(-1)
                            }
                    }(e, t);
                    const h = e.components;
                    null !== h && function Xy(e, t) {
                        for (let n = 0; n < t.length; n++)
                            Ev(e, t[n])
                    }(t, h);
                    const m = e.viewQuery;
                    if (null !== m && Lu(2, m, r),
                    u) {
                        const w = e.viewCheckHooks;
                        null !== w && te(t, w)
                    } else {
                        const w = e.viewHooks;
                        null !== w && Re(t, w, 2),
                        mt(t, 2)
                    }
                    !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
                    t[et] &= -41,
                    512 & t[et] && (t[et] &= -513,
                    Vs(t[Dt], -1))
                } finally {
                    Zs()
                }
            }
        }
        function df(e, t, n, r, i) {
            const s = Dn()
              , u = 2 & r;
            try {
                Or(-1),
                u && t.length > It && Qd(e, t, It, !1),
                Lt(u ? 2 : 0, i),
                n(r, i)
            } finally {
                Or(s),
                Lt(u ? 3 : 1, i)
            }
        }
        function Tu(e, t, n) {
            if (ds(t)) {
                const i = t.directiveEnd;
                for (let s = t.directiveStart; s < i; s++) {
                    const u = e.data[s];
                    u.contentQueries && u.contentQueries(1, n[s], s)
                }
            }
        }
        function Au(e, t, n) {
            yi() && (function lv(e, t, n, r) {
                const i = n.directiveStart
                  , s = n.directiveEnd;
                ir(n) && function gv(e, t, n) {
                    const r = an(t, e)
                      , i = ff(n)
                      , s = e[di]
                      , u = ul(e, al(e, i, null, n.onPush ? 32 : 16, r, t, s, s.createRenderer(r, n), null, null, null));
                    e[t.index] = u
                }(t, n, e.data[i + n.componentOffset]),
                e.firstCreatePass || no(n, t),
                Xn(r, t);
                const u = n.initialInputs;
                for (let h = i; h < s; h++) {
                    const m = e.data[h]
                      , w = qn(t, e, h, n);
                    Xn(w, t),
                    null !== u && mv(0, h - i, w, m, 0, u),
                    Fn(m) && (qt(n.index, t)[xt] = qn(t, e, h, n))
                }
            }(e, t, n, an(n, t)),
            64 == (64 & n.flags) && yf(e, t, n))
        }
        function Pu(e, t, n=an) {
            const r = t.localNames;
            if (null !== r) {
                let i = t.index + 1;
                for (let s = 0; s < r.length; s += 2) {
                    const u = r[s + 1]
                      , h = -1 === u ? n(t, e) : e[u];
                    e[i++] = h
                }
            }
        }
        function ff(e) {
            const t = e.tView;
            return null === t || t.incompleteFirstPass ? e.tView = Ru(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts) : t
        }
        function Ru(e, t, n, r, i, s, u, h, m, w) {
            const M = It + r
              , R = M + i
              , H = function Jy(e, t) {
                const n = [];
                for (let r = 0; r < t; r++)
                    n.push(r < e ? null : dt);
                return n
            }(M, R)
              , $ = "function" == typeof w ? w() : w;
            return H[Pe] = {
                type: e,
                blueprint: H,
                template: n,
                queries: null,
                viewQuery: h,
                declTNode: t,
                data: H.slice().fill(null, M),
                bindingStartIndex: M,
                expandoStartIndex: R,
                hostBindingOpCodes: null,
                firstCreatePass: !0,
                firstUpdatePass: !0,
                staticViewQueries: !1,
                staticContentQueries: !1,
                preOrderHooks: null,
                preOrderCheckHooks: null,
                contentHooks: null,
                contentCheckHooks: null,
                viewHooks: null,
                viewCheckHooks: null,
                destroyHooks: null,
                cleanup: null,
                contentQueries: null,
                components: null,
                directiveRegistry: "function" == typeof s ? s() : s,
                pipeRegistry: "function" == typeof u ? u() : u,
                firstChild: null,
                schemas: m,
                consts: $,
                incompleteFirstPass: !1
            }
        }
        function hf(e, t, n, r) {
            const i = Df(t);
            null === n ? i.push(r) : (i.push(n),
            e.firstCreatePass && Ef(e).push(r, i.length - 1))
        }
        function pf(e, t, n, r) {
            for (let i in e)
                if (e.hasOwnProperty(i)) {
                    n = null === n ? {} : n;
                    const s = e[i];
                    null === r ? gf(n, t, i, s) : r.hasOwnProperty(i) && gf(n, t, r[i], s)
                }
            return n
        }
        function gf(e, t, n, r) {
            e.hasOwnProperty(n) ? e[n].push(t, r) : e[n] = [t, r]
        }
        function Ou(e, t, n, r) {
            if (yi()) {
                const i = null === r ? null : {
                    "": -1
                }
                  , s = function cv(e, t) {
                    const n = e.directiveRegistry;
                    let r = null
                      , i = null;
                    if (n)
                        for (let s = 0; s < n.length; s++) {
                            const u = n[s];
                            if (Wd(t, u.selectors, !1))
                                if (r || (r = []),
                                Fn(u))
                                    if (null !== u.findHostDirectiveDefs) {
                                        const h = [];
                                        i = i || new Map,
                                        u.findHostDirectiveDefs(u, h, i),
                                        r.unshift(...h, u),
                                        Nu(e, t, h.length)
                                    } else
                                        r.unshift(u),
                                        Nu(e, t, 0);
                                else
                                    i = i || new Map,
                                    u.findHostDirectiveDefs?.(u, r, i),
                                    r.push(u)
                        }
                    return null === r ? null : [r, i]
                }(e, n);
                let u, h;
                null === s ? u = h = null : [u,h] = s,
                null !== u && mf(e, t, n, u, i, h),
                i && function dv(e, t, n) {
                    if (t) {
                        const r = e.localNames = [];
                        for (let i = 0; i < t.length; i += 2) {
                            const s = n[t[i + 1]];
                            if (null == s)
                                throw new re(-301,!1);
                            r.push(t[i], s)
                        }
                    }
                }(n, r, i)
            }
            n.mergedAttrs = _r(n.mergedAttrs, n.attrs)
        }
        function mf(e, t, n, r, i, s) {
            for (let w = 0; w < r.length; w++)
                ws(no(n, t), e, r[w].type);
            !function hv(e, t, n) {
                e.flags |= 1,
                e.directiveStart = t,
                e.directiveEnd = t + n,
                e.providerIndexes = t
            }(n, e.data.length, r.length);
            for (let w = 0; w < r.length; w++) {
                const M = r[w];
                M.providersResolver && M.providersResolver(M)
            }
            let u = !1
              , h = !1
              , m = Na(e, t, r.length, null);
            for (let w = 0; w < r.length; w++) {
                const M = r[w];
                n.mergedAttrs = _r(n.mergedAttrs, M.hostAttrs),
                pv(e, n, t, m, M),
                fv(m, M, i),
                null !== M.contentQueries && (n.flags |= 4),
                (null !== M.hostBindings || null !== M.hostAttrs || 0 !== M.hostVars) && (n.flags |= 64);
                const R = M.type.prototype;
                !u && (R.ngOnChanges || R.ngOnInit || R.ngDoCheck) && ((e.preOrderHooks ?? (e.preOrderHooks = [])).push(n.index),
                u = !0),
                !h && (R.ngOnChanges || R.ngDoCheck) && ((e.preOrderCheckHooks ?? (e.preOrderCheckHooks = [])).push(n.index),
                h = !0),
                m++
            }
            !function nv(e, t, n) {
                const i = t.directiveEnd
                  , s = e.data
                  , u = t.attrs
                  , h = [];
                let m = null
                  , w = null;
                for (let M = t.directiveStart; M < i; M++) {
                    const R = s[M]
                      , H = n ? n.get(R) : null
                      , ee = H ? H.outputs : null;
                    m = pf(R.inputs, M, m, H ? H.inputs : null),
                    w = pf(R.outputs, M, w, ee);
                    const pe = null === m || null === u || Gd(t) ? null : yv(m, M, u);
                    h.push(pe)
                }
                null !== m && (m.hasOwnProperty("class") && (t.flags |= 8),
                m.hasOwnProperty("style") && (t.flags |= 16)),
                t.initialInputs = h,
                t.inputs = m,
                t.outputs = w
            }(e, n, s)
        }
        function yf(e, t, n) {
            const r = n.directiveStart
              , i = n.directiveEnd
              , s = n.index
              , u = function mo() {
                return rt.lFrame.currentDirectiveIndex
            }();
            try {
                Or(s);
                for (let h = r; h < i; h++) {
                    const m = e.data[h]
                      , w = t[h];
                    zi(h),
                    (null !== m.hostBindings || 0 !== m.hostVars || null !== m.hostAttrs) && uv(m, w)
                }
            } finally {
                Or(-1),
                zi(u)
            }
        }
        function uv(e, t) {
            null !== e.hostBindings && e.hostBindings(1, t)
        }
        function Nu(e, t, n) {
            t.componentOffset = n,
            (e.components ?? (e.components = [])).push(t.index)
        }
        function fv(e, t, n) {
            if (n) {
                if (t.exportAs)
                    for (let r = 0; r < t.exportAs.length; r++)
                        n[t.exportAs[r]] = e;
                Fn(t) && (n[""] = e)
            }
        }
        function pv(e, t, n, r, i) {
            e.data[r] = i;
            const s = i.factory || (i.factory = on(i.type))
              , u = new Pt(s,Fn(i),ia);
            e.blueprint[r] = u,
            n[r] = u,
            function ov(e, t, n, r, i) {
                const s = i.hostBindings;
                if (s) {
                    let u = e.hostBindingOpCodes;
                    null === u && (u = e.hostBindingOpCodes = []);
                    const h = ~t.index;
                    (function av(e) {
                        let t = e.length;
                        for (; t > 0; ) {
                            const n = e[--t];
                            if ("number" == typeof n && n < 0)
                                return n
                        }
                        return 0
                    }
                    )(u) != h && u.push(h),
                    u.push(n, r, s)
                }
            }(e, t, r, Na(e, n, i.hostVars, dt), i)
        }
        function ts(e, t, n, r, i, s) {
            const u = an(e, t);
            !function Fu(e, t, n, r, i, s, u) {
                if (null == s)
                    e.removeAttribute(t, i, n);
                else {
                    const h = null == u ? se(s) : u(s, r || "", i);
                    e.setAttribute(t, i, h, n)
                }
            }(t[lt], u, s, e.value, n, r, i)
        }
        function mv(e, t, n, r, i, s) {
            const u = s[t];
            if (null !== u) {
                const h = r.setInput;
                for (let m = 0; m < u.length; ) {
                    const w = u[m++]
                      , M = u[m++]
                      , R = u[m++];
                    null !== h ? r.setInput(n, R, w, M) : n[M] = R
                }
            }
        }
        function yv(e, t, n) {
            let r = null
              , i = 0;
            for (; i < n.length; ) {
                const s = n[i];
                if (0 !== s)
                    if (5 !== s) {
                        if ("number" == typeof s)
                            break;
                        if (e.hasOwnProperty(s)) {
                            null === r && (r = []);
                            const u = e[s];
                            for (let h = 0; h < u.length; h += 2)
                                if (u[h] === t) {
                                    r.push(s, u[h + 1], n[i + 1]);
                                    break
                                }
                        }
                        i += 2
                    } else
                        i += 2;
                else
                    i += 4
            }
            return r
        }
        function vf(e, t, n, r) {
            return [e, !0, !1, t, null, 0, r, n, null, null]
        }
        function Ev(e, t) {
            const n = qt(t, e);
            if (gs(n)) {
                const r = n[Pe];
                48 & n[et] ? ll(r, n, r.template, n[xt]) : n[pn] > 0 && xu(n)
            }
        }
        function xu(e) {
            for (let r = Kl(e); null !== r; r = Yl(r))
                for (let i = Ht; i < r.length; i++) {
                    const s = r[i];
                    if (gs(s))
                        if (512 & s[et]) {
                            const u = s[Pe];
                            ll(u, s, u.template, s[xt])
                        } else
                            s[pn] > 0 && xu(s)
                }
            const n = e[Pe].components;
            if (null !== n)
                for (let r = 0; r < n.length; r++) {
                    const i = qt(n[r], e);
                    gs(i) && i[pn] > 0 && xu(i)
                }
        }
        function _v(e, t) {
            const n = qt(t, e)
              , r = n[Pe];
            (function wv(e, t) {
                for (let n = t.length; n < e.blueprint.length; n++)
                    t.push(e.blueprint[n])
            }
            )(r, n),
            Mu(r, n, n[xt])
        }
        function ul(e, t) {
            return e[cs] ? e[fo][yn] = t : e[cs] = t,
            e[fo] = t,
            t
        }
        function cl(e) {
            for (; e; ) {
                e[et] |= 32;
                const t = ba(e);
                if (hi(e) && !t)
                    return e;
                e = t
            }
            return null
        }
        function dl(e, t, n, r=!0) {
            const i = t[di];
            i.begin && i.begin();
            try {
                ll(e, t, e.template, n)
            } catch (u) {
                throw r && wf(t, u),
                u
            } finally {
                i.end && i.end()
            }
        }
        function Lu(e, t, n) {
            qr(0),
            t(e, n)
        }
        function Df(e) {
            return e[nr] || (e[nr] = [])
        }
        function Ef(e) {
            return e.cleanup || (e.cleanup = [])
        }
        function wf(e, t) {
            const n = e[us]
              , r = n ? n.get(Oa, null) : null;
            r && r.handleError(t)
        }
        function ku(e, t, n, r, i) {
            for (let s = 0; s < n.length; ) {
                const u = n[s++]
                  , h = n[s++]
                  , m = t[u]
                  , w = e.data[u];
                null !== w.setInput ? w.setInput(m, i, r, h) : m[h] = i
            }
        }
        function fl(e, t, n) {
            let r = n ? e.styles : null
              , i = n ? e.classes : null
              , s = 0;
            if (null !== t)
                for (let u = 0; u < t.length; u++) {
                    const h = t[u];
                    "number" == typeof h ? s = h : 1 == s ? i = Je(i, h) : 2 == s && (r = Je(r, h + ": " + t[++u] + ";"))
                }
            n ? e.styles = r : e.stylesWithoutHost = r,
            n ? e.classes = i : e.classesWithoutHost = i
        }
        function hl(e, t, n, r, i=!1) {
            for (; null !== n; ) {
                const s = t[n.index];
                if (null !== s && r.push(en(s)),
                bn(s))
                    for (let h = Ht; h < s.length; h++) {
                        const m = s[h]
                          , w = m[Pe].firstChild;
                        null !== w && hl(m[Pe], m, w, r)
                    }
                const u = n.type;
                if (8 & u)
                    hl(e, t, n.child, r);
                else if (32 & u) {
                    const h = Wl(n, t);
                    let m;
                    for (; m = h(); )
                        r.push(m)
                } else if (16 & u) {
                    const h = fd(t, n);
                    if (Array.isArray(h))
                        r.push(...h);
                    else {
                        const m = ba(t[sn]);
                        hl(m[Pe], m, h, r, !0)
                    }
                }
                n = i ? n.projectionNext : n.next
            }
            return r
        }
        class Fa {
            get rootNodes() {
                const t = this._lView
                  , n = t[Pe];
                return hl(n, t, n.firstChild, [])
            }
            constructor(t, n) {
                this._lView = t,
                this._cdRefInjectingView = n,
                this._appRef = null,
                this._attachedToViewContainer = !1
            }
            get context() {
                return this._lView[xt]
            }
            set context(t) {
                this._lView[xt] = t
            }
            get destroyed() {
                return 128 == (128 & this._lView[et])
            }
            destroy() {
                if (this._appRef)
                    this._appRef.detachView(this);
                else if (this._attachedToViewContainer) {
                    const t = this._lView[Dt];
                    if (bn(t)) {
                        const n = t[Tr]
                          , r = n ? n.indexOf(this) : -1;
                        r > -1 && (Xl(t, r),
                        D(n, r))
                    }
                    this._attachedToViewContainer = !1
                }
                rd(this._lView[Pe], this._lView)
            }
            onDestroy(t) {
                hf(this._lView[Pe], this._lView, null, t)
            }
            markForCheck() {
                cl(this._cdRefInjectingView || this._lView)
            }
            detach() {
                this._lView[et] &= -65
            }
            reattach() {
                this._lView[et] |= 64
            }
            detectChanges() {
                dl(this._lView[Pe], this._lView, this.context)
            }
            checkNoChanges() {}
            attachToViewContainerRef() {
                if (this._appRef)
                    throw new re(902,!1);
                this._attachedToViewContainer = !0
            }
            detachFromAppRef() {
                this._appRef = null,
                function lm(e, t) {
                    Ia(e, t, t[lt], 2, null, null)
                }(this._lView[Pe], this._lView)
            }
            attachToAppRef(t) {
                if (this._attachedToViewContainer)
                    throw new re(902,!1);
                this._appRef = t
            }
        }
        class Cv extends Fa {
            constructor(t) {
                super(t),
                this._view = t
            }
            detectChanges() {
                const t = this._view;
                dl(t[Pe], t, t[xt], !1)
            }
            checkNoChanges() {}
            get context() {
                return null
            }
        }
        class Cf extends Pa {
            constructor(t) {
                super(),
                this.ngModule = t
            }
            resolveComponentFactory(t) {
                const n = gt(t);
                return new xa(n,this.ngModule)
            }
        }
        function Sf(e) {
            const t = [];
            for (let n in e)
                e.hasOwnProperty(n) && t.push({
                    propName: e[n],
                    templateName: n
                });
            return t
        }
        class bv {
            constructor(t, n) {
                this.injector = t,
                this.parentInjector = n
            }
            get(t, n, r) {
                r = Ir(r);
                const i = this.injector.get(t, Du, r);
                return i !== Du || n === Du ? i : this.parentInjector.get(t, n, r)
            }
        }
        class xa extends Hd {
            get inputs() {
                return Sf(this.componentDef.inputs)
            }
            get outputs() {
                return Sf(this.componentDef.outputs)
            }
            constructor(t, n) {
                super(),
                this.componentDef = t,
                this.ngModule = n,
                this.componentType = t.type,
                this.selector = function Py(e) {
                    return e.map(Ay).join(",")
                }(t.selectors),
                this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [],
                this.isBoundToModule = !!n
            }
            create(t, n, r, i) {
                let s = (i = i || this.ngModule)instanceof bo ? i : i?.injector;
                s && null !== this.componentDef.getStandaloneInjector && (s = this.componentDef.getStandaloneInjector(s) || s);
                const u = s ? new bv(t,s) : t
                  , h = u.get(Ud, null);
                if (null === h)
                    throw new re(407,!1);
                const m = u.get(uy, null)
                  , w = h.createRenderer(null, this.componentDef)
                  , M = this.componentDef.selectors[0][0] || "div"
                  , R = r ? function ev(e, t, n) {
                    return e.selectRootElement(t, n === Me.ShadowDom)
                }(w, r, this.componentDef.encapsulation) : ql(w, M, function Sv(e) {
                    const t = e.toLowerCase();
                    return "svg" === t ? "svg" : "math" === t ? "math" : null
                }(M))
                  , H = this.componentDef.onPush ? 288 : 272
                  , $ = Ru(0, null, null, 1, 0, null, null, null, null, null)
                  , ee = al(null, $, null, H, null, null, h, w, m, u, null);
                let pe, Te;
                Di(ee);
                try {
                    const xe = this.componentDef;
                    let Ge, de = null;
                    xe.findHostDirectiveDefs ? (Ge = [],
                    de = new Map,
                    xe.findHostDirectiveDefs(xe, Ge, de),
                    Ge.push(xe)) : Ge = [xe];
                    const ut = function Mv(e, t) {
                        const n = e[Pe]
                          , r = It;
                        return e[r] = t,
                        sa(n, r, 2, "#host", null)
                    }(ee, R)
                      , Jt = function Tv(e, t, n, r, i, s, u, h) {
                        const m = i[Pe];
                        !function Av(e, t, n, r) {
                            for (const i of e)
                                t.mergedAttrs = _r(t.mergedAttrs, i.hostAttrs);
                            null !== t.mergedAttrs && (fl(t, t.mergedAttrs, !0),
                            null !== n && gd(r, n, t))
                        }(r, e, t, u);
                        const w = s.createRenderer(t, n)
                          , M = al(i, ff(n), null, n.onPush ? 32 : 16, i[e.index], e, s, w, h || null, null, null);
                        return m.firstCreatePass && Nu(m, e, r.length - 1),
                        ul(i, M),
                        i[e.index] = M
                    }(ut, R, xe, Ge, ee, h, w);
                    Te = mi($, It),
                    R && function Rv(e, t, n, r) {
                        if (r)
                            Er(e, n, ["ng-version", cy.full]);
                        else {
                            const {attrs: i, classes: s} = function Ry(e) {
                                const t = []
                                  , n = [];
                                let r = 1
                                  , i = 2;
                                for (; r < e.length; ) {
                                    let s = e[r];
                                    if ("string" == typeof s)
                                        2 === i ? "" !== s && t.push(s, e[++r]) : 8 === i && n.push(s);
                                    else {
                                        if (!_i(i))
                                            break;
                                        i = s
                                    }
                                    r++
                                }
                                return {
                                    attrs: t,
                                    classes: n
                                }
                            }(t.selectors[0]);
                            i && Er(e, n, i),
                            s && s.length > 0 && pd(e, n, s.join(" "))
                        }
                    }(w, xe, R, r),
                    void 0 !== n && function Ov(e, t, n) {
                        const r = e.projection = [];
                        for (let i = 0; i < t.length; i++) {
                            const s = n[i];
                            r.push(null != s ? Array.from(s) : null)
                        }
                    }(Te, this.ngContentSelectors, n),
                    pe = function Pv(e, t, n, r, i, s) {
                        const u = nn()
                          , h = i[Pe]
                          , m = an(u, i);
                        mf(h, i, u, n, null, r);
                        for (let M = 0; M < n.length; M++)
                            Xn(qn(i, h, u.directiveStart + M, u), i);
                        yf(h, i, u),
                        m && Xn(m, i);
                        const w = qn(i, h, u.directiveStart + u.componentOffset, u);
                        if (e[xt] = i[xt] = w,
                        null !== s)
                            for (const M of s)
                                M(w, t);
                        return Tu(h, u, e),
                        w
                    }(Jt, xe, Ge, de, ee, [Nv]),
                    Mu($, ee, null)
                } finally {
                    Zs()
                }
                return new Iv(this.componentType,pe,ta(Te, ee),ee,Te)
            }
        }
        class Iv extends ny {
            constructor(t, n, r, i, s) {
                super(),
                this.location = r,
                this._rootLView = i,
                this._tNode = s,
                this.instance = n,
                this.hostView = this.changeDetectorRef = new Cv(i),
                this.componentType = t
            }
            setInput(t, n) {
                const r = this._tNode.inputs;
                let i;
                if (null !== r && (i = r[t])) {
                    const s = this._rootLView;
                    ku(s[Pe], s, i, t, n),
                    cl(qt(this._tNode.index, s))
                }
            }
            get injector() {
                return new Jr(this._tNode,this._rootLView)
            }
            destroy() {
                this.hostView.destroy()
            }
            onDestroy(t) {
                this.hostView.onDestroy(t)
            }
        }
        function Nv() {
            const e = nn();
            W(oe()[Pe], e)
        }
        function Hu(e) {
            let t = function bf(e) {
                return Object.getPrototypeOf(e.prototype).constructor
            }(e.type)
              , n = !0;
            const r = [e];
            for (; t; ) {
                let i;
                if (Fn(e))
                    i = t.\u0275cmp || t.\u0275dir;
                else {
                    if (t.\u0275cmp)
                        throw new re(903,!1);
                    i = t.\u0275dir
                }
                if (i) {
                    if (n) {
                        r.push(i);
                        const u = e;
                        u.inputs = Bu(e.inputs),
                        u.declaredInputs = Bu(e.declaredInputs),
                        u.outputs = Bu(e.outputs);
                        const h = i.hostBindings;
                        h && kv(e, h);
                        const m = i.viewQuery
                          , w = i.contentQueries;
                        if (m && xv(e, m),
                        w && Lv(e, w),
                        Ue(e.inputs, i.inputs),
                        Ue(e.declaredInputs, i.declaredInputs),
                        Ue(e.outputs, i.outputs),
                        Fn(i) && i.data.animation) {
                            const M = e.data;
                            M.animation = (M.animation || []).concat(i.data.animation)
                        }
                    }
                    const s = i.features;
                    if (s)
                        for (let u = 0; u < s.length; u++) {
                            const h = s[u];
                            h && h.ngInherit && h(e),
                            h === Hu && (n = !1)
                        }
                }
                t = Object.getPrototypeOf(t)
            }
            !function Fv(e) {
                let t = 0
                  , n = null;
                for (let r = e.length - 1; r >= 0; r--) {
                    const i = e[r];
                    i.hostVars = t += i.hostVars,
                    i.hostAttrs = _r(i.hostAttrs, n = _r(n, i.hostAttrs))
                }
            }(r)
        }
        function Bu(e) {
            return e === Qe ? {} : e === ke ? [] : e
        }
        function xv(e, t) {
            const n = e.viewQuery;
            e.viewQuery = n ? (r,i)=>{
                t(r, i),
                n(r, i)
            }
            : t
        }
        function Lv(e, t) {
            const n = e.contentQueries;
            e.contentQueries = n ? (r,i,s)=>{
                t(r, i, s),
                n(r, i, s)
            }
            : t
        }
        function kv(e, t) {
            const n = e.hostBindings;
            e.hostBindings = n ? (r,i)=>{
                t(r, i),
                n(r, i)
            }
            : t
        }
        function pl(e) {
            return !!Uu(e) && (Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e)
        }
        function Uu(e) {
            return null !== e && ("function" == typeof e || "object" == typeof e)
        }
        function Zn(e, t, n) {
            return !Object.is(e[t], n) && (e[t] = n,
            !0)
        }
        function ju(e, t, n, r) {
            const i = oe();
            return Zn(i, Dr(), t) && (pt(),
            ts(Bt(), i, e, t, n, r)),
            ju
        }
        function Hf(e, t, n, r, i, s, u, h) {
            const m = oe()
              , w = pt()
              , M = e + It
              , R = w.firstCreatePass ? function Kv(e, t, n, r, i, s, u, h, m) {
                const w = t.consts
                  , M = sa(t, e, 4, u || null, gn(w, h));
                Ou(t, n, M, gn(w, m)),
                W(t, M);
                const R = M.tView = Ru(2, M, r, i, s, t.directiveRegistry, t.pipeRegistry, null, t.schemas, w);
                return null !== t.queries && (t.queries.template(t, M),
                R.queries = t.queries.embeddedTView(M)),
                M
            }(M, w, m, t, n, r, i, s, u) : w.data[M];
            ln(R, !1);
            const H = m[lt].createComment("");
            Ja(w, m, H, R),
            Xn(H, m),
            ul(m, m[M] = vf(H, m, H, R)),
            $r(R) && Au(w, m, R),
            null != u && Pu(m, R, h)
        }
        function $u(e, t, n) {
            const r = oe();
            return Zn(r, Dr(), t) && function Fr(e, t, n, r, i, s, u, h) {
                const m = an(t, n);
                let M, w = t.inputs;
                !h && null != w && (M = w[r]) ? (ku(e, n, M, r, i),
                ir(t) && function iv(e, t) {
                    const n = qt(t, e);
                    16 & n[et] || (n[et] |= 32)
                }(n, t.index)) : 3 & t.type && (r = function rv(e) {
                    return "class" === e ? "className" : "for" === e ? "htmlFor" : "formaction" === e ? "formAction" : "innerHtml" === e ? "innerHTML" : "readonly" === e ? "readOnly" : "tabindex" === e ? "tabIndex" : e
                }(r),
                i = null != u ? u(i, t.value || "", r) : i,
                s.setProperty(m, r, i))
            }(pt(), Bt(), r, e, t, r[lt], n, !1),
            $u
        }
        function Vu(e, t, n, r, i) {
            const u = i ? "class" : "style";
            ku(e, n, t.inputs[u], u, r)
        }
        function ml(e, t, n, r) {
            const i = oe()
              , s = pt()
              , u = It + e
              , h = i[lt]
              , m = s.firstCreatePass ? function qv(e, t, n, r, i, s) {
                const u = t.consts
                  , m = sa(t, e, 2, r, gn(u, i));
                return Ou(t, n, m, gn(u, s)),
                null !== m.attrs && fl(m, m.attrs, !1),
                null !== m.mergedAttrs && fl(m, m.mergedAttrs, !0),
                null !== t.queries && t.queries.elementStart(t, m),
                m
            }(u, s, i, t, n, r) : s.data[u]
              , w = i[u] = ql(h, t, function b() {
                return rt.lFrame.currentNamespace
            }())
              , M = $r(m);
            return ln(m, !0),
            gd(h, w, m),
            32 != (32 & m.flags) && Ja(s, i, w, m),
            0 === function go() {
                return rt.lFrame.elementDepthCount
            }() && Xn(w, i),
            function Lo() {
                rt.lFrame.elementDepthCount++
            }(),
            M && (Au(s, i, m),
            Tu(s, m, i)),
            null !== r && Pu(i, m),
            ml
        }
        function yl() {
            let e = nn();
            vi() ? ms() : (e = e.parent,
            ln(e, !1));
            const t = e;
            !function ko() {
                rt.lFrame.elementDepthCount--
            }();
            const n = pt();
            return n.firstCreatePass && (W(n, e),
            ds(e) && n.queries.elementEnd(e)),
            null != t.classesWithoutHost && function lr(e) {
                return 0 != (8 & e.flags)
            }(t) && Vu(n, t, oe(), t.classesWithoutHost, !0),
            null != t.stylesWithoutHost && function jn(e) {
                return 0 != (16 & e.flags)
            }(t) && Vu(n, t, oe(), t.stylesWithoutHost, !1),
            yl
        }
        function zu(e, t, n, r) {
            return ml(e, t, n, r),
            yl(),
            zu
        }
        function vl(e, t, n) {
            const r = oe()
              , i = pt()
              , s = e + It
              , u = i.firstCreatePass ? function Xv(e, t, n, r, i) {
                const s = t.consts
                  , u = gn(s, r)
                  , h = sa(t, e, 8, "ng-container", u);
                return null !== u && fl(h, u, !0),
                Ou(t, n, h, gn(s, i)),
                null !== t.queries && t.queries.elementStart(t, h),
                h
            }(s, i, r, t, n) : i.data[s];
            ln(u, !0);
            const h = r[s] = r[lt].createComment("");
            return Ja(i, r, h, u),
            Xn(h, r),
            $r(u) && (Au(i, r, u),
            Tu(i, u, r)),
            null != n && Pu(r, u),
            vl
        }
        function Dl() {
            let e = nn();
            const t = pt();
            return vi() ? ms() : (e = e.parent,
            ln(e, !1)),
            t.firstCreatePass && (W(t, e),
            ds(e) && t.queries.elementEnd(e)),
            Dl
        }
        function Gu(e) {
            return !!e && "function" == typeof e.then
        }
        function Uf(e) {
            return !!e && "function" == typeof e.subscribe
        }
        const jf = Uf;
        function Wu(e, t, n, r) {
            const i = oe()
              , s = pt()
              , u = nn();
            return function Vf(e, t, n, r, i, s, u) {
                const h = $r(r)
                  , w = e.firstCreatePass && Ef(e)
                  , M = t[xt]
                  , R = Df(t);
                let H = !0;
                if (3 & r.type || u) {
                    const pe = an(r, t)
                      , Te = u ? u(pe) : pe
                      , xe = R.length
                      , Ge = u ? ut=>u(en(ut[r.index])) : r.index;
                    let de = null;
                    if (!u && h && (de = function Jv(e, t, n, r) {
                        const i = e.cleanup;
                        if (null != i)
                            for (let s = 0; s < i.length - 1; s += 2) {
                                const u = i[s];
                                if (u === n && i[s + 1] === r) {
                                    const h = t[nr]
                                      , m = i[s + 2];
                                    return h.length > m ? h[m] : null
                                }
                                "string" == typeof u && (s += 2)
                            }
                        return null
                    }(e, t, i, r.index)),
                    null !== de)
                        (de.__ngLastListenerFn__ || de).__ngNextListenerFn__ = s,
                        de.__ngLastListenerFn__ = s,
                        H = !1;
                    else {
                        s = Gf(r, t, M, s, !1);
                        const ut = n.listen(Te, i, s);
                        R.push(s, ut),
                        w && w.push(i, Ge, xe, xe + 1)
                    }
                } else
                    s = Gf(r, t, M, s, !1);
                const $ = r.outputs;
                let ee;
                if (H && null !== $ && (ee = $[i])) {
                    const pe = ee.length;
                    if (pe)
                        for (let Te = 0; Te < pe; Te += 2) {
                            const Jt = t[ee[Te]][ee[Te + 1]].subscribe(s)
                              , mn = R.length;
                            R.push(s, Jt),
                            w && w.push(i, r.index, mn, -(mn + 1))
                        }
                }
            }(s, i, i[lt], u, e, t, r),
            Wu
        }
        function zf(e, t, n, r) {
            try {
                return Lt(6, t, n),
                !1 !== n(r)
            } catch (i) {
                return wf(e, i),
                !1
            } finally {
                Lt(7, t, n)
            }
        }
        function Gf(e, t, n, r, i) {
            return function s(u) {
                if (u === Function)
                    return r;
                cl(e.componentOffset > -1 ? qt(e.index, t) : t);
                let m = zf(t, n, r, u)
                  , w = s.__ngNextListenerFn__;
                for (; w; )
                    m = zf(t, n, w, u) && m,
                    w = w.__ngNextListenerFn__;
                return i && !1 === m && (u.preventDefault(),
                u.returnValue = !1),
                m
            }
        }
        function Wf(e=1) {
            return function Uo(e) {
                return (rt.lFrame.contextLView = function jo(e, t) {
                    for (; e > 0; )
                        t = t[rn],
                        e--;
                    return t
                }(e, rt.lFrame.contextLView))[xt]
            }(e)
        }
        function eD(e, t) {
            let n = null;
            const r = function by(e) {
                const t = e.attrs;
                if (null != t) {
                    const n = t.indexOf(5);
                    if (!(1 & n))
                        return t[n + 1]
                }
                return null
            }(e);
            for (let i = 0; i < t.length; i++) {
                const s = t[i];
                if ("*" !== s) {
                    if (null === r ? Wd(e, s, !0) : Ty(r, s))
                        return i
                } else
                    n = i
            }
            return n
        }
        function Kf(e) {
            const t = oe()[sn][jt];
            if (!t.projection) {
                const r = t.projection = S(e ? e.length : 1, null)
                  , i = r.slice();
                let s = t.child;
                for (; null !== s; ) {
                    const u = e ? eD(s, e) : 0;
                    null !== u && (i[u] ? i[u].projectionNext = s : r[u] = s,
                    i[u] = s),
                    s = s.next
                }
            }
        }
        function Yf(e, t=0, n) {
            const r = oe()
              , i = pt()
              , s = sa(i, It + e, 16, null, n || null);
            null === s.projection && (s.projection = t),
            ms(),
            32 != (32 & s.flags) && function mm(e, t, n) {
                hd(t[lt], 0, t, n, id(e, n, t), ld(n.parent || t[jt], n, t))
            }(i, r, s)
        }
        function El(e, t) {
            return e << 17 | t << 2
        }
        function lo(e) {
            return e >> 17 & 32767
        }
        function Yu(e) {
            return 2 | e
        }
        function To(e) {
            return (131068 & e) >> 2
        }
        function Qu(e, t) {
            return -131069 & e | t << 2
        }
        function qu(e) {
            return 1 | e
        }
        function ih(e, t, n, r, i) {
            const s = e[n + 1]
              , u = null === t;
            let h = r ? lo(s) : To(s)
              , m = !1;
            for (; 0 !== h && (!1 === m || u); ) {
                const M = e[h + 1];
                oD(e[h], t) && (m = !0,
                e[h + 1] = r ? qu(M) : Yu(M)),
                h = r ? lo(M) : To(M)
            }
            m && (e[n + 1] = r ? Yu(s) : qu(s))
        }
        function oD(e, t) {
            return null === e || null == t || (Array.isArray(e) ? e[1] : e) === t || !(!Array.isArray(e) || "string" != typeof t) && Ct(e, t) >= 0
        }
        const Pn = {
            textEnd: 0,
            key: 0,
            keyEnd: 0,
            value: 0,
            valueEnd: 0
        };
        function sh(e) {
            return e.substring(Pn.key, Pn.keyEnd)
        }
        function aD(e) {
            return e.substring(Pn.value, Pn.valueEnd)
        }
        function ah(e, t) {
            const n = Pn.textEnd;
            let r = Pn.key = ga(e, t, n);
            return n === r ? -1 : (r = Pn.keyEnd = function dD(e, t, n) {
                let r;
                for (; t < n && (45 === (r = e.charCodeAt(t)) || 95 === r || (-33 & r) >= 65 && (-33 & r) <= 90 || r >= 48 && r <= 57); )
                    t++;
                return t
            }(e, r, n),
            r = uh(e, r, n),
            r = Pn.value = ga(e, r, n),
            r = Pn.valueEnd = function fD(e, t, n) {
                let r = -1
                  , i = -1
                  , s = -1
                  , u = t
                  , h = u;
                for (; u < n; ) {
                    const m = e.charCodeAt(u++);
                    if (59 === m)
                        return h;
                    34 === m || 39 === m ? h = u = ch(e, m, u, n) : t === u - 4 && 85 === s && 82 === i && 76 === r && 40 === m ? h = u = ch(e, 41, u, n) : m > 32 && (h = u),
                    s = i,
                    i = r,
                    r = -33 & m
                }
                return h
            }(e, r, n),
            uh(e, r, n))
        }
        function ga(e, t, n) {
            for (; t < n && e.charCodeAt(t) <= 32; )
                t++;
            return t
        }
        function uh(e, t, n, r) {
            return (t = ga(e, t, n)) < n && t++,
            t
        }
        function ch(e, t, n, r) {
            let i = -1
              , s = n;
            for (; s < r; ) {
                const u = e.charCodeAt(s++);
                if (u == t && 92 !== i)
                    return s;
                i = 92 == u && 92 === i ? 0 : u
            }
            throw new Error
        }
        function Xu(e, t, n) {
            return Ci(e, t, n, !1),
            Xu
        }
        function Zu(e, t) {
            return Ci(e, t, null, !0),
            Zu
        }
        function wi(e) {
            !function Si(e, t, n, r) {
                const i = pt()
                  , s = Qn(2);
                i.firstUpdatePass && fh(i, null, s, r);
                const u = oe();
                if (n !== dt && Zn(u, s, n)) {
                    const h = i.data[Dn()];
                    if (mh(h, r) && !dh(i, s)) {
                        let m = r ? h.classesWithoutHost : h.stylesWithoutHost;
                        null !== m && (n = Je(m, n || "")),
                        Vu(i, h, u, n, r)
                    } else
                        !function _D(e, t, n, r, i, s, u, h) {
                            i === dt && (i = ke);
                            let m = 0
                              , w = 0
                              , M = 0 < i.length ? i[0] : null
                              , R = 0 < s.length ? s[0] : null;
                            for (; null !== M || null !== R; ) {
                                const H = m < i.length ? i[m + 1] : void 0
                                  , $ = w < s.length ? s[w + 1] : void 0;
                                let pe, ee = null;
                                M === R ? (m += 2,
                                w += 2,
                                H !== $ && (ee = R,
                                pe = $)) : null === R || null !== M && M < R ? (m += 2,
                                ee = M) : (w += 2,
                                ee = R,
                                pe = $),
                                null !== ee && ph(e, t, n, r, ee, pe, u, h),
                                M = m < i.length ? i[m] : null,
                                R = w < s.length ? s[w] : null
                            }
                        }(i, h, u, u[lt], u[s + 1], u[s + 1] = function DD(e, t, n) {
                            if (null == n || "" === n)
                                return ke;
                            const r = []
                              , i = ao(n);
                            if (Array.isArray(i))
                                for (let s = 0; s < i.length; s++)
                                    e(r, i[s], !0);
                            else if ("object" == typeof i)
                                for (const s in i)
                                    i.hasOwnProperty(s) && e(r, s, i[s]);
                            else
                                "string" == typeof i && t(r, i);
                            return r
                        }(e, t, n), r, s)
                }
            }(hh, hD, e, !1)
        }
        function hD(e, t) {
            for (let n = function uD(e) {
                return function lh(e) {
                    Pn.key = 0,
                    Pn.keyEnd = 0,
                    Pn.value = 0,
                    Pn.valueEnd = 0,
                    Pn.textEnd = e.length
                }(e),
                ah(e, ga(e, 0, Pn.textEnd))
            }(t); n >= 0; n = ah(t, n))
                hh(e, sh(t), aD(t))
        }
        function Ci(e, t, n, r) {
            const i = oe()
              , s = pt()
              , u = Qn(2);
            s.firstUpdatePass && fh(s, e, u, r),
            t !== dt && Zn(i, u, t) && ph(s, s.data[Dn()], i, i[lt], e, i[u + 1] = function wD(e, t) {
                return null == e || "" === e || ("string" == typeof t ? e += t : "object" == typeof e && (e = Oe(ao(e)))),
                e
            }(t, n), r, u)
        }
        function dh(e, t) {
            return t >= e.expandoStartIndex
        }
        function fh(e, t, n, r) {
            const i = e.data;
            if (null === i[n + 1]) {
                const s = i[Dn()]
                  , u = dh(e, n);
                mh(s, r) && null === t && !u && (t = !1),
                t = function gD(e, t, n, r) {
                    const i = function Rr(e) {
                        const t = rt.lFrame.currentDirectiveIndex;
                        return -1 === t ? null : e[t]
                    }(e);
                    let s = r ? t.residualClasses : t.residualStyles;
                    if (null === i)
                        0 === (r ? t.classBindings : t.styleBindings) && (n = ka(n = Ju(null, e, t, n, r), t.attrs, r),
                        s = null);
                    else {
                        const u = t.directiveStylingLast;
                        if (-1 === u || e[u] !== i)
                            if (n = Ju(i, e, t, n, r),
                            null === s) {
                                let m = function mD(e, t, n) {
                                    const r = n ? t.classBindings : t.styleBindings;
                                    if (0 !== To(r))
                                        return e[lo(r)]
                                }(e, t, r);
                                void 0 !== m && Array.isArray(m) && (m = Ju(null, e, t, m[1], r),
                                m = ka(m, t.attrs, r),
                                function yD(e, t, n, r) {
                                    e[lo(n ? t.classBindings : t.styleBindings)] = r
                                }(e, t, r, m))
                            } else
                                s = function vD(e, t, n) {
                                    let r;
                                    const i = t.directiveEnd;
                                    for (let s = 1 + t.directiveStylingLast; s < i; s++)
                                        r = ka(r, e[s].hostAttrs, n);
                                    return ka(r, t.attrs, n)
                                }(e, t, r)
                    }
                    return void 0 !== s && (r ? t.residualClasses = s : t.residualStyles = s),
                    n
                }(i, s, t, r),
                function iD(e, t, n, r, i, s) {
                    let u = s ? t.classBindings : t.styleBindings
                      , h = lo(u)
                      , m = To(u);
                    e[r] = n;
                    let M, w = !1;
                    if (Array.isArray(n) ? (M = n[1],
                    (null === M || Ct(n, M) > 0) && (w = !0)) : M = n,
                    i)
                        if (0 !== m) {
                            const H = lo(e[h + 1]);
                            e[r + 1] = El(H, h),
                            0 !== H && (e[H + 1] = Qu(e[H + 1], r)),
                            e[h + 1] = function nD(e, t) {
                                return 131071 & e | t << 17
                            }(e[h + 1], r)
                        } else
                            e[r + 1] = El(h, 0),
                            0 !== h && (e[h + 1] = Qu(e[h + 1], r)),
                            h = r;
                    else
                        e[r + 1] = El(m, 0),
                        0 === h ? h = r : e[m + 1] = Qu(e[m + 1], r),
                        m = r;
                    w && (e[r + 1] = Yu(e[r + 1])),
                    ih(e, M, r, !0),
                    ih(e, M, r, !1),
                    function sD(e, t, n, r, i) {
                        const s = i ? e.residualClasses : e.residualStyles;
                        null != s && "string" == typeof t && Ct(s, t) >= 0 && (n[r + 1] = qu(n[r + 1]))
                    }(t, M, e, r, s),
                    u = El(h, m),
                    s ? t.classBindings = u : t.styleBindings = u
                }(i, s, t, n, u, r)
            }
        }
        function Ju(e, t, n, r, i) {
            let s = null;
            const u = n.directiveEnd;
            let h = n.directiveStylingLast;
            for (-1 === h ? h = n.directiveStart : h++; h < u && (s = t[h],
            r = ka(r, s.hostAttrs, i),
            s !== e); )
                h++;
            return null !== e && (n.directiveStylingLast = h),
            r
        }
        function ka(e, t, n) {
            const r = n ? 1 : 2;
            let i = -1;
            if (null !== t)
                for (let s = 0; s < t.length; s++) {
                    const u = t[s];
                    "number" == typeof u ? i = u : i === r && (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                    ge(e, u, !!n || t[++s]))
                }
            return void 0 === e ? null : e
        }
        function hh(e, t, n) {
            ge(e, t, ao(n))
        }
        function ph(e, t, n, r, i, s, u, h) {
            if (!(3 & t.type))
                return;
            const m = e.data
              , w = m[h + 1]
              , M = function rD(e) {
                return 1 == (1 & e)
            }(w) ? gh(m, t, n, i, To(w), u) : void 0;
            _l(M) || (_l(s) || function tD(e) {
                return 2 == (2 & e)
            }(w) && (s = gh(m, null, n, i, h, u)),
            function vm(e, t, n, r, i) {
                if (t)
                    i ? e.addClass(n, r) : e.removeClass(n, r);
                else {
                    let s = -1 === r.indexOf("-") ? void 0 : es.DashCase;
                    null == i ? e.removeStyle(n, r, s) : ("string" == typeof i && i.endsWith("!important") && (i = i.slice(0, -10),
                    s |= es.Important),
                    e.setStyle(n, r, i, s))
                }
            }(r, u, tn(Dn(), n), i, s))
        }
        function gh(e, t, n, r, i, s) {
            const u = null === t;
            let h;
            for (; i > 0; ) {
                const m = e[i]
                  , w = Array.isArray(m)
                  , M = w ? m[1] : m
                  , R = null === M;
                let H = n[i + 1];
                H === dt && (H = R ? ke : void 0);
                let $ = R ? qe(H, r) : M === r ? H : void 0;
                if (w && !_l($) && ($ = qe(m, r)),
                _l($) && (h = $,
                u))
                    return h;
                const ee = e[i + 1];
                i = u ? lo(ee) : To(ee)
            }
            if (null !== t) {
                let m = s ? t.residualClasses : t.residualStyles;
                null != m && (h = qe(m, r))
            }
            return h
        }
        function _l(e) {
            return void 0 !== e
        }
        function mh(e, t) {
            return 0 != (e.flags & (t ? 8 : 16))
        }
        function yh(e, t="") {
            const n = oe()
              , r = pt()
              , i = e + It
              , s = r.firstCreatePass ? sa(r, i, 1, t, null) : r.data[i]
              , u = n[i] = Ql(n[lt], t);
            Ja(r, n, u, s),
            ln(s, !1)
        }
        function wl(e, t, n) {
            const r = oe()
              , i = function aa(e, t, n, r) {
                return Zn(e, Dr(), n) ? t + se(n) + r : dt
            }(r, e, t, n);
            return i !== dt && function Rs(e, t, n) {
                const r = tn(t, e);
                !function td(e, t, n) {
                    e.setValue(t, n)
                }(e[lt], r, n)
            }(r, Dn(), i),
            wl
        }
        const Ao = void 0;
        var $D = ["en", [["a", "p"], ["AM", "PM"], Ao], [["AM", "PM"], Ao, Ao], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Ao, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Ao, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", Ao, "{1} 'at' {0}", Ao], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", function jD(e) {
            const n = Math.floor(Math.abs(e))
              , r = e.toString().replace(/^[^.]*\.?/, "").length;
            return 1 === n && 0 === r ? 1 : 5
        }
        ];
        let ma = {};
        function ec(e) {
            const t = function VD(e) {
                return e.toLowerCase().replace(/_/g, "-")
            }(e);
            let n = Bh(t);
            if (n)
                return n;
            const r = t.split("-")[0];
            if (n = Bh(r),
            n)
                return n;
            if ("en" === r)
                return $D;
            throw new re(701,!1)
        }
        function Hh(e) {
            return ec(e)[tt.PluralCase]
        }
        function Bh(e) {
            return e in ma || (ma[e] = ct.ng && ct.ng.common && ct.ng.common.locales && ct.ng.common.locales[e]),
            ma[e]
        }
        var tt = (()=>((tt = tt || {})[tt.LocaleId = 0] = "LocaleId",
        tt[tt.DayPeriodsFormat = 1] = "DayPeriodsFormat",
        tt[tt.DayPeriodsStandalone = 2] = "DayPeriodsStandalone",
        tt[tt.DaysFormat = 3] = "DaysFormat",
        tt[tt.DaysStandalone = 4] = "DaysStandalone",
        tt[tt.MonthsFormat = 5] = "MonthsFormat",
        tt[tt.MonthsStandalone = 6] = "MonthsStandalone",
        tt[tt.Eras = 7] = "Eras",
        tt[tt.FirstDayOfWeek = 8] = "FirstDayOfWeek",
        tt[tt.WeekendRange = 9] = "WeekendRange",
        tt[tt.DateFormat = 10] = "DateFormat",
        tt[tt.TimeFormat = 11] = "TimeFormat",
        tt[tt.DateTimeFormat = 12] = "DateTimeFormat",
        tt[tt.NumberSymbols = 13] = "NumberSymbols",
        tt[tt.NumberFormats = 14] = "NumberFormats",
        tt[tt.CurrencyCode = 15] = "CurrencyCode",
        tt[tt.CurrencySymbol = 16] = "CurrencySymbol",
        tt[tt.CurrencyName = 17] = "CurrencyName",
        tt[tt.Currencies = 18] = "Currencies",
        tt[tt.Directionality = 19] = "Directionality",
        tt[tt.PluralCase = 20] = "PluralCase",
        tt[tt.ExtraData = 21] = "ExtraData",
        tt))();
        const ya = "en-US"
          , Cl = {
            marker: "element"
        }
          , Sl = {
            marker: "ICU"
        };
        var dn = (()=>((dn = dn || {})[dn.SHIFT = 2] = "SHIFT",
        dn[dn.APPEND_EAGERLY = 1] = "APPEND_EAGERLY",
        dn[dn.COMMENT = 2] = "COMMENT",
        dn))();
        let Uh = ya;
        function jh(e) {
            (function Le(e, t) {
                null == e && nt(t, e, null, "!=")
            }
            )(e, "Expected localeId to be defined"),
            "string" == typeof e && (Uh = e.toLowerCase().replace(/_/g, "-"))
        }
        function $h(e, t, n) {
            const r = t.insertBeforeIndex
              , i = Array.isArray(r) ? r[0] : r;
            return null === i ? ud(e, 0, n) : en(n[i])
        }
        function Vh(e, t, n, r, i) {
            const s = t.insertBeforeIndex;
            if (Array.isArray(s)) {
                let u = r
                  , h = null;
                if (3 & t.type || (h = u,
                u = i),
                null !== u && -1 === t.componentOffset)
                    for (let m = 1; m < s.length; m++)
                        Co(e, u, n[s[m]], h, !1)
            }
        }
        function zh(e, t) {
            if (e.push(t),
            e.length > 1)
                for (let n = e.length - 2; n >= 0; n--) {
                    const r = e[n];
                    Gh(r) || YD(r, t) && null === QD(r) && qD(r, t.index)
                }
        }
        function Gh(e) {
            return !(64 & e.type)
        }
        function YD(e, t) {
            return Gh(t) || e.index > t.index
        }
        function QD(e) {
            const t = e.insertBeforeIndex;
            return Array.isArray(t) ? t[0] : t
        }
        function qD(e, t) {
            const n = e.insertBeforeIndex;
            Array.isArray(n) ? n[0] = t : (dd($h, Vh),
            e.insertBeforeIndex = t)
        }
        function JD(e, t, n) {
            const r = Iu(e, n, 64, null, null);
            return zh(t, r),
            r
        }
        function oE() {
            const e = [];
            let n, r, t = -1;
            function s(h, m) {
                t = 0;
                const w = function bl(e, t) {
                    const n = t[e.currentCaseLViewIndex];
                    return null === n ? n : n < 0 ? ~n : n
                }(h, m);
                r = null !== w ? h.remove[w] : ke
            }
            function u() {
                if (t < r.length) {
                    const h = r[t++];
                    return h > 0 ? n[h] : (e.push(t, r),
                    s(n[Pe].data[~h], n),
                    u())
                }
                return 0 === e.length ? null : (r = e.pop(),
                t = e.pop(),
                u())
            }
            return function i(h, m) {
                for (n = m; e.length; )
                    e.pop();
                return s(h.value, m),
                u
            }
        }
        const Il = /\ufffd(\d+):?\d*\ufffd/gi
          , lE = /\ufffd(\d+)\ufffd/
          , ep = /^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/
          , ja = "\ufffd"
          , uE = /\ufffd\/?\*(\d+:\d+)\ufffd/gi
          , cE = /\ufffd(\/?[#*]\d+):?\d*\ufffd/gi
          , dE = /\uE500/g;
        function tp(e, t, n, r, i, s, u) {
            const h = Na(e, r, 1, null);
            let m = h << dn.SHIFT
              , w = ar();
            t === w && (w = null),
            null === w && (m |= dn.APPEND_EAGERLY),
            u && (m |= dn.COMMENT,
            function nm(e) {
                void 0 === Gl && (Gl = e())
            }(oE)),
            i.push(m, null === s ? "" : s);
            const M = Iu(e, h, u ? 32 : 1, null === s ? "" : s, null);
            zh(n, M);
            const R = M.index;
            return ln(M, !1),
            null !== w && t !== w && function ZD(e, t) {
                let n = e.insertBeforeIndex;
                null === n ? (dd($h, Vh),
                n = e.insertBeforeIndex = [null, t]) : (function he(e, t, n) {
                    e != t && nt(n, e, t, "==")
                }(Array.isArray(n), !0, "Expecting array here"),
                n.push(t))
            }(w, R),
            M
        }
        function pE(e, t, n, r, i, s, u) {
            const h = u.match(Il)
              , m = tp(e, t, n, s, r, h ? null : u, !1);
            h && $a(i, u, m.index, null, 0, null)
        }
        function $a(e, t, n, r, i, s) {
            const u = e.length
              , h = u + 1;
            e.push(null, null);
            const m = u + 2
              , w = t.split(Il);
            let M = 0;
            for (let R = 0; R < w.length; R++) {
                const H = w[R];
                if (1 & R) {
                    const $ = i + parseInt(H, 10);
                    e.push(-1 - $),
                    M |= np($)
                } else
                    "" !== H && e.push(H)
            }
            return e.push(n << 2 | (r ? 1 : 0)),
            r && e.push(r, s),
            e[u] = M,
            e[h] = e.length - m,
            M
        }
        function np(e) {
            return 1 << Math.min(e, 31)
        }
        function rp(e) {
            let t, s, n = "", r = 0, i = !1;
            for (; null !== (t = uE.exec(e)); )
                i ? t[0] === `${ja}/*${s}${ja}` && (r = t.index,
                i = !1) : (n += e.substring(r, t.index + t[0].length),
                s = t[1],
                i = !0);
            return n += e.slice(r),
            n
        }
        function ip(e, t, n, r, i, s) {
            let u = 0;
            const h = {
                type: i.type,
                currentCaseLViewIndex: Na(e, t, 1, null),
                anchorIdx: s,
                cases: [],
                create: [],
                remove: [],
                update: []
            };
            (function wE(e, t, n) {
                e.push(np(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2)
            }
            )(n, i, s),
            function XD(e, t, n) {
                const r = e.data[t];
                null === r ? e.data[t] = n : r.value = n
            }(e, s, h);
            const m = i.values;
            for (let w = 0; w < m.length; w++) {
                const M = m[w]
                  , R = [];
                for (let H = 0; H < M.length; H++) {
                    const $ = M[H];
                    if ("string" != typeof $) {
                        const ee = R.push($) - 1;
                        M[H] = `\x3c!--\ufffd ${ee}\ufffd--\x3e`
                    }
                }
                u = EE(e, h, t, n, r, i.cases[w], M.join(""), R) | u
            }
            u && function CE(e, t, n) {
                e.push(t, 1, n << 2 | 3)
            }(n, u, s)
        }
        function DE(e) {
            const t = []
              , n = [];
            let r = 1
              , i = 0;
            const s = tc(e = e.replace(ep, function(u, h, m) {
                return r = "select" === m ? 0 : 1,
                i = parseInt(h.slice(1), 10),
                ""
            }));
            for (let u = 0; u < s.length; ) {
                let h = s[u++].trim();
                1 === r && (h = h.replace(/\s*(?:=)?(\w+)\s*/, "$1")),
                h.length && t.push(h);
                const m = tc(s[u++]);
                t.length > n.length && n.push(m)
            }
            return {
                type: r,
                mainBinding: i,
                cases: t,
                values: n
            }
        }
        function tc(e) {
            if (!e)
                return [];
            let t = 0;
            const n = []
              , r = []
              , i = /[{}]/g;
            let s;
            for (i.lastIndex = 0; s = i.exec(e); ) {
                const h = s.index;
                if ("}" == s[0]) {
                    if (n.pop(),
                    0 == n.length) {
                        const m = e.substring(t, h);
                        ep.test(m) ? r.push(DE(m)) : r.push(m),
                        t = h + 1
                    }
                } else {
                    if (0 == n.length) {
                        const m = e.substring(t, h);
                        r.push(m),
                        t = h + 1
                    }
                    n.push("{")
                }
            }
            const u = e.substring(t);
            return r.push(u),
            r
        }
        function EE(e, t, n, r, i, s, u, h) {
            const m = []
              , w = []
              , M = [];
            t.cases.push(s),
            t.create.push(m),
            t.remove.push(w),
            t.update.push(M);
            const H = function _d(e) {
                const t = new Rm(e);
                return function Om() {
                    try {
                        return !!(new window.DOMParser).parseFromString(Jo(""), "text/html")
                    } catch {
                        return !1
                    }
                }() ? new Pm(t) : t
            }(function md() {
                return void 0 !== iu ? iu : typeof document < "u" ? document : void 0
            }()).getInertBodyElement(u)
              , $ = function uu(e) {
                return "content"in e && function Bm(e) {
                    return e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
                }(e) ? e.content : null
            }(H) || H;
            return $ ? sp(e, t, n, r, m, w, M, $, i, h, 0) : 0
        }
        function sp(e, t, n, r, i, s, u, h, m, w, M) {
            let R = 0
              , H = h.firstChild;
            for (; H; ) {
                const $ = Na(e, n, 1, null);
                switch (H.nodeType) {
                case Node.ELEMENT_NODE:
                    const ee = H
                      , pe = ee.tagName.toLowerCase();
                    if (au.hasOwnProperty(pe)) {
                        nc(i, Cl, pe, m, $),
                        e.data[$] = pe;
                        const de = ee.attributes;
                        for (let ut = 0; ut < de.length; ut++) {
                            const Jt = de.item(ut)
                              , mn = Jt.name.toLowerCase();
                            Jt.value.match(Il) ? bd.hasOwnProperty(mn) && $a(u, Jt.value, $, Jt.name, 0, lu[mn] ? ou : null) : SE(i, $, Jt)
                        }
                        R = sp(e, t, n, r, i, s, u, H, $, w, M + 1) | R,
                        op(s, $, M)
                    }
                    break;
                case Node.TEXT_NODE:
                    const Te = H.textContent || ""
                      , xe = Te.match(Il);
                    nc(i, null, xe ? "" : Te, m, $),
                    op(s, $, M),
                    xe && (R = $a(u, Te, $, null, 0, null) | R);
                    break;
                case Node.COMMENT_NODE:
                    const Ge = lE.exec(H.textContent || "");
                    if (Ge) {
                        const ut = w[parseInt(Ge[1], 10)];
                        nc(i, Sl, "", m, $),
                        ip(e, n, r, m, ut, $),
                        _E(s, $, M)
                    }
                }
                H = H.nextSibling
            }
            return R
        }
        function op(e, t, n) {
            0 === n && e.push(t)
        }
        function _E(e, t, n) {
            0 === n && (e.push(~t),
            e.push(t))
        }
        function nc(e, t, n, r, i) {
            null !== t && e.push(t),
            e.push(n, i, function eE(e, t, n) {
                return e | t << 17 | n << 1
            }(0, r, i))
        }
        function SE(e, t, n) {
            e.push(t << 1 | 1, n.name, n.value)
        }
        const ap = 0
          , bE = /\[(\ufffd.+?\ufffd?)\]/
          , IE = /\[(\ufffd.+?\ufffd?)\]|(\ufffd\/?\*\d+:\d+\ufffd)/g
          , ME = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g
          , TE = /{([A-Z0-9_]+)}/g
          , AE = /\ufffdI18N_EXP_(ICU(_\d+)?)\ufffd/g
          , PE = /\/\*/
          , RE = /\d+\:(\d+)/;
        function rc(e, t, n=-1) {
            const r = pt()
              , i = oe()
              , s = It + e
              , u = gn(r.consts, t)
              , h = ar();
            r.firstCreatePass && function hE(e, t, n, r, i, s) {
                const u = ar()
                  , h = []
                  , m = []
                  , w = [[]];
                i = function vE(e, t) {
                    if (function yE(e) {
                        return -1 === e
                    }(t))
                        return rp(e);
                    {
                        const n = e.indexOf(`:${t}${ja}`) + 2 + t.toString().length
                          , r = e.search(new RegExp(`${ja}\\/\\*\\d+:${t}${ja}`));
                        return rp(e.substring(n, r))
                    }
                }(i, s);
                const M = function fE(e) {
                    return e.replace(dE, " ")
                }(i).split(cE);
                for (let R = 0; R < M.length; R++) {
                    let H = M[R];
                    if (1 & R) {
                        const $ = 47 === H.charCodeAt(0)
                          , pe = (H.charCodeAt($ ? 1 : 0),
                        It + Number.parseInt(H.substring($ ? 2 : 1)));
                        if ($)
                            w.shift(),
                            ln(ar(), !1);
                        else {
                            const Te = JD(e, w[0], pe);
                            w.unshift([]),
                            ln(Te, !0)
                        }
                    } else {
                        const $ = tc(H);
                        for (let ee = 0; ee < $.length; ee++) {
                            let pe = $[ee];
                            if (1 & ee) {
                                const Te = pe;
                                if ("object" != typeof Te)
                                    throw new Error(`Unable to parse ICU expression in "${i}" message.`);
                                ip(e, n, m, t, Te, tp(e, u, w[0], n, h, "", !0).index)
                            } else
                                "" !== pe && pE(e, u, w[0], h, m, n, pe)
                        }
                    }
                }
                e.data[r] = {
                    create: h,
                    update: m
                }
            }(r, null === h ? 0 : h.index, i, s, u, n);
            const m = r.data[s]
              , M = sd(r, h === i[jt] ? null : h, i);
            (function rE(e, t, n, r) {
                const i = e[lt];
                for (let s = 0; s < t.length; s++) {
                    const u = t[s++]
                      , h = t[s]
                      , w = (u & dn.APPEND_EAGERLY) === dn.APPEND_EAGERLY
                      , M = u >>> dn.SHIFT;
                    let R = e[M];
                    null === R && (R = e[M] = (u & dn.COMMENT) === dn.COMMENT ? i.createComment(h) : Ql(i, h)),
                    w && null !== n && Co(i, n, R, r, !1)
                }
            }
            )(i, m.create, M, h && 8 & h.type ? i[h.index] : null),
            Vi(!0)
        }
        function ic() {
            Vi(!1)
        }
        function lp(e, t, n) {
            rc(e, t, n),
            ic()
        }
        function cp(e, t={}) {
            return function OE(e, t={}) {
                let n = e;
                if (bE.test(e)) {
                    const r = {}
                      , i = [ap];
                    n = n.replace(IE, (s,u,h)=>{
                        const m = u || h
                          , w = r[m] || [];
                        if (w.length || (m.split("|").forEach(pe=>{
                            const Te = pe.match(RE)
                              , xe = Te ? parseInt(Te[1], 10) : ap
                              , Ge = PE.test(pe);
                            w.push([xe, Ge, pe])
                        }
                        ),
                        r[m] = w),
                        !w.length)
                            throw new Error(`i18n postprocess: unmatched placeholder - ${m}`);
                        const M = i[i.length - 1];
                        let R = 0;
                        for (let pe = 0; pe < w.length; pe++)
                            if (w[pe][0] === M) {
                                R = pe;
                                break
                            }
                        const [H,$,ee] = w[R];
                        return $ ? i.pop() : M !== H && i.push(H),
                        w.splice(R, 1),
                        ee
                    }
                    )
                }
                return Object.keys(t).length && (n = n.replace(ME, (r,i,s,u,h,m)=>t.hasOwnProperty(s) ? `${i}${t[s]}${m}` : r),
                n = n.replace(TE, (r,i)=>t.hasOwnProperty(i) ? t[i] : r),
                n = n.replace(AE, (r,i)=>{
                    if (t.hasOwnProperty(i)) {
                        const s = t[i];
                        if (!s.length)
                            throw new Error(`i18n postprocess: unmatched ICU - ${r} with key: ${i}`);
                        return s.shift()
                    }
                    return r
                }
                )),
                n
            }(e, t)
        }
        class va {
        }
        class fp {
        }
        function UE(e, t) {
            return new hp(e,t ?? null)
        }
        class hp extends va {
            constructor(t, n) {
                super(),
                this._parent = n,
                this._bootstrapComponents = [],
                this.destroyCbs = [],
                this.componentFactoryResolver = new Cf(this);
                const r = Kt(t);
                this._bootstrapComponents = Ps(r.bootstrap),
                this._r3Injector = ef(t, n, [{
                    provide: va,
                    useValue: this
                }, {
                    provide: Pa,
                    useValue: this.componentFactoryResolver
                }], Oe(t), new Set(["environment"])),
                this._r3Injector.resolveInjectorInitializers(),
                this.instance = this._r3Injector.get(t)
            }
            get injector() {
                return this._r3Injector
            }
            destroy() {
                const t = this._r3Injector;
                !t.destroyed && t.destroy(),
                this.destroyCbs.forEach(n=>n()),
                this.destroyCbs = null
            }
            onDestroy(t) {
                this.destroyCbs.push(t)
            }
        }
        class uc extends fp {
            constructor(t) {
                super(),
                this.moduleType = t
            }
            create(t) {
                return new hp(this.moduleType,t)
            }
        }
        class jE extends va {
            constructor(t, n, r) {
                super(),
                this.componentFactoryResolver = new Cf(this),
                this.instance = null;
                const i = new Ld([...t, {
                    provide: va,
                    useValue: this
                }, {
                    provide: Pa,
                    useValue: this.componentFactoryResolver
                }],n || sl(),r,new Set(["environment"]));
                this.injector = i,
                i.resolveInjectorInitializers()
            }
            destroy() {
                this.injector.destroy()
            }
            onDestroy(t) {
                this.injector.onDestroy(t)
            }
        }
        function cc(e, t, n=null) {
            return new jE(e,t,n).injector
        }
        let $E = (()=>{
            class e {
                constructor(n) {
                    this._injector = n,
                    this.cachedInjectors = new Map
                }
                getOrCreateStandaloneInjector(n) {
                    if (!n.standalone)
                        return null;
                    if (!this.cachedInjectors.has(n.id)) {
                        const r = Od(0, n.type)
                          , i = r.length > 0 ? cc([r], this._injector, `Standalone[${n.type.name}]`) : null;
                        this.cachedInjectors.set(n.id, i)
                    }
                    return this.cachedInjectors.get(n.id)
                }
                ngOnDestroy() {
                    try {
                        for (const n of this.cachedInjectors.values())
                            null !== n && n.destroy()
                    } finally {
                        this.cachedInjectors.clear()
                    }
                }
            }
            return e.\u0275prov = Yt({
                token: e,
                providedIn: "environment",
                factory: ()=>new e(kt(bo))
            }),
            e
        }
        )();
        function pp(e) {
            e.getStandaloneInjector = t=>t.get($E).getOrCreateStandaloneInjector(e)
        }
        function _p(e, t, n, r, i, s) {
            const u = t + n;
            return Zn(e, u, i) ? function ns(e, t, n) {
                return e[t] = n
            }(e, u + 1, s ? r.call(s, i) : r(i)) : function Va(e, t) {
                const n = e[t];
                return n === dt ? void 0 : n
            }(e, u + 1)
        }
        function Ip(e, t) {
            const n = pt();
            let r;
            const i = e + It;
            n.firstCreatePass ? (r = function a_(e, t) {
                if (t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        const r = t[n];
                        if (e === r.name)
                            return r
                    }
            }(t, n.pipeRegistry),
            n.data[i] = r,
            r.onDestroy && (n.destroyHooks ?? (n.destroyHooks = [])).push(i, r.onDestroy)) : r = n.data[i];
            const s = r.factory || (r.factory = on(r.type))
              , u = Nt(ia);
            try {
                const h = eo(!1)
                  , m = s();
                return eo(h),
                function Yv(e, t, n, r) {
                    n >= e.data.length && (e.data[n] = null,
                    e.blueprint[n] = null),
                    t[n] = r
                }(n, oe(), i, m),
                m
            } finally {
                Nt(u)
            }
        }
        function Mp(e, t, n) {
            const r = e + It
              , i = oe()
              , s = function Un(e, t) {
                return e[t]
            }(i, r);
            return function za(e, t) {
                return e[Pe].data[t].pure
            }(i, r) ? _p(i, function un() {
                const e = rt.lFrame;
                let t = e.bindingRootIndex;
                return -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex),
                t
            }(), t, s.transform, n, s) : s.transform(n)
        }
        function fc(e) {
            return t=>{
                setTimeout(e, void 0, t)
            }
        }
        const is = class f_ extends _.x {
            constructor(t=!1) {
                super(),
                this.__isAsync = t
            }
            emit(t) {
                super.next(t)
            }
            subscribe(t, n, r) {
                let i = t
                  , s = n || (()=>null)
                  , u = r;
                if (t && "object" == typeof t) {
                    const m = t;
                    i = m.next?.bind(m),
                    s = m.error?.bind(m),
                    u = m.complete?.bind(m)
                }
                this.__isAsync && (s = fc(s),
                i && (i = fc(i)),
                u && (u = fc(u)));
                const h = super.subscribe({
                    next: i,
                    error: s,
                    complete: u
                });
                return t instanceof L.w0 && t.add(h),
                h
            }
        }
        ;
        function h_() {
            return this._results[Symbol.iterator]()
        }
        class hc {
            get changes() {
                return this._changes || (this._changes = new is)
            }
            constructor(t=!1) {
                this._emitDistinctChangesOnly = t,
                this.dirty = !0,
                this._results = [],
                this._changesDetected = !1,
                this._changes = null,
                this.length = 0,
                this.first = void 0,
                this.last = void 0;
                const n = hc.prototype;
                n[Symbol.iterator] || (n[Symbol.iterator] = h_)
            }
            get(t) {
                return this._results[t]
            }
            map(t) {
                return this._results.map(t)
            }
            filter(t) {
                return this._results.filter(t)
            }
            find(t) {
                return this._results.find(t)
            }
            reduce(t, n) {
                return this._results.reduce(t, n)
            }
            forEach(t) {
                this._results.forEach(t)
            }
            some(t) {
                return this._results.some(t)
            }
            toArray() {
                return this._results.slice()
            }
            toString() {
                return this._results.toString()
            }
            reset(t, n) {
                const r = this;
                r.dirty = !1;
                const i = function d(e) {
                    return e.flat(Number.POSITIVE_INFINITY)
                }(t);
                (this._changesDetected = !function c(e, t, n) {
                    if (e.length !== t.length)
                        return !1;
                    for (let r = 0; r < e.length; r++) {
                        let i = e[r]
                          , s = t[r];
                        if (n && (i = n(i),
                        s = n(s)),
                        s !== i)
                            return !1
                    }
                    return !0
                }(r._results, i, n)) && (r._results = i,
                r.length = i.length,
                r.last = i[this.length - 1],
                r.first = i[0])
            }
            notifyOnChanges() {
                this._changes && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.emit(this)
            }
            setDirty() {
                this.dirty = !0
            }
            destroy() {
                this.changes.complete(),
                this.changes.unsubscribe()
            }
        }
        let Ga = (()=>{
            class e {
            }
            return e.__NG_ELEMENT_ID__ = m_,
            e
        }
        )();
        const p_ = Ga
          , g_ = class extends p_ {
            constructor(t, n, r) {
                super(),
                this._declarationLView = t,
                this._declarationTContainer = n,
                this.elementRef = r
            }
            createEmbeddedView(t, n) {
                const r = this._declarationTContainer.tView
                  , i = al(this._declarationLView, r, t, 16, null, r.declTNode, null, null, null, null, n || null);
                i[Mr] = this._declarationLView[this._declarationTContainer.index];
                const u = this._declarationLView[Bn];
                return null !== u && (i[Bn] = u.createEmbeddedView(r)),
                Mu(r, i, t),
                new Fa(i)
            }
        }
        ;
        function m_() {
            return Ml(nn(), oe())
        }
        function Ml(e, t) {
            return 4 & e.type ? new g_(t,e,ta(e, t)) : null
        }
        let Tl = (()=>{
            class e {
            }
            return e.__NG_ELEMENT_ID__ = y_,
            e
        }
        )();
        function y_() {
            return Pp(nn(), oe())
        }
        const v_ = Tl
          , Tp = class extends v_ {
            constructor(t, n, r) {
                super(),
                this._lContainer = t,
                this._hostTNode = n,
                this._hostLView = r
            }
            get element() {
                return ta(this._hostTNode, this._hostLView)
            }
            get injector() {
                return new Jr(this._hostTNode,this._hostLView)
            }
            get parentInjector() {
                const t = Yi(this._hostTNode, this._hostLView);
                if (zo(t)) {
                    const n = Zr(t, this._hostLView)
                      , r = _s(t);
                    return new Jr(n[Pe].data[r + 8],n)
                }
                return new Jr(null,this._hostLView)
            }
            clear() {
                for (; this.length > 0; )
                    this.remove(this.length - 1)
            }
            get(t) {
                const n = Ap(this._lContainer);
                return null !== n && n[t] || null
            }
            get length() {
                return this._lContainer.length - Ht
            }
            createEmbeddedView(t, n, r) {
                let i, s;
                "number" == typeof r ? i = r : null != r && (i = r.index,
                s = r.injector);
                const u = t.createEmbeddedView(n || {}, s);
                return this.insert(u, i),
                u
            }
            createComponent(t, n, r, i, s) {
                const u = t && !function Ie(e) {
                    return "function" == typeof e
                }(t);
                let h;
                if (u)
                    h = n;
                else {
                    const R = n || {};
                    h = R.index,
                    r = R.injector,
                    i = R.projectableNodes,
                    s = R.environmentInjector || R.ngModuleRef
                }
                const m = u ? t : new xa(gt(t))
                  , w = r || this.parentInjector;
                if (!s && null == m.ngModule) {
                    const H = (u ? w : this.parentInjector).get(bo, null);
                    H && (s = H)
                }
                const M = m.create(w, i, void 0, s);
                return this.insert(M.hostView, h),
                M
            }
            insert(t, n) {
                const r = t._lView
                  , i = r[Pe];
                if (function ji(e) {
                    return bn(e[Dt])
                }(r)) {
                    const M = this.indexOf(t);
                    if (-1 !== M)
                        this.detach(M);
                    else {
                        const R = r[Dt]
                          , H = new Tp(R,R[jt],R[Dt]);
                        H.detach(H.indexOf(t))
                    }
                }
                const s = this._adjustIndex(n)
                  , u = this._lContainer;
                !function cm(e, t, n, r) {
                    const i = Ht + r
                      , s = n.length;
                    r > 0 && (n[i - 1][yn] = t),
                    r < s - Ht ? (t[yn] = n[i],
                    f(n, Ht + r, t)) : (n.push(t),
                    t[yn] = null),
                    t[Dt] = n;
                    const u = t[Mr];
                    null !== u && n !== u && function dm(e, t) {
                        const n = e[Kn];
                        t[sn] !== t[Dt][Dt][sn] && (e[xi] = !0),
                        null === n ? e[Kn] = [t] : n.push(t)
                    }(u, t);
                    const h = t[Bn];
                    null !== h && h.insertView(e),
                    t[et] |= 64
                }(i, r, u, s);
                const h = eu(s, u)
                  , m = r[lt]
                  , w = Za(m, u[jr]);
                return null !== w && function am(e, t, n, r, i, s) {
                    r[Hn] = i,
                    r[jt] = t,
                    Ia(e, r, n, 1, i, s)
                }(i, u[jt], m, r, w, h),
                t.attachToViewContainerRef(),
                f(pc(u), s, t),
                t
            }
            move(t, n) {
                return this.insert(t, n)
            }
            indexOf(t) {
                const n = Ap(this._lContainer);
                return null !== n ? n.indexOf(t) : -1
            }
            remove(t) {
                const n = this._adjustIndex(t, -1)
                  , r = Xl(this._lContainer, n);
                r && (D(pc(this._lContainer), n),
                rd(r[Pe], r))
            }
            detach(t) {
                const n = this._adjustIndex(t, -1)
                  , r = Xl(this._lContainer, n);
                return r && null != D(pc(this._lContainer), n) ? new Fa(r) : null
            }
            _adjustIndex(t, n=0) {
                return t ?? this.length + n
            }
        }
        ;
        function Ap(e) {
            return e[Tr]
        }
        function pc(e) {
            return e[Tr] || (e[Tr] = [])
        }
        function Pp(e, t) {
            let n;
            const r = t[e.index];
            if (bn(r))
                n = r;
            else {
                let i;
                if (8 & e.type)
                    i = en(r);
                else {
                    const s = t[lt];
                    i = s.createComment("");
                    const u = an(e, t);
                    Co(s, Za(s, u), i, function gm(e, t) {
                        return e.nextSibling(t)
                    }(s, u), !1)
                }
                t[e.index] = n = vf(r, t, i, e),
                ul(t, n)
            }
            return new Tp(n,e,t)
        }
        class gc {
            constructor(t) {
                this.queryList = t,
                this.matches = null
            }
            clone() {
                return new gc(this.queryList)
            }
            setDirty() {
                this.queryList.setDirty()
            }
        }
        class mc {
            constructor(t=[]) {
                this.queries = t
            }
            createEmbeddedView(t) {
                const n = t.queries;
                if (null !== n) {
                    const r = null !== t.contentQueries ? t.contentQueries[0] : n.length
                      , i = [];
                    for (let s = 0; s < r; s++) {
                        const u = n.getByIndex(s);
                        i.push(this.queries[u.indexInDeclarationView].clone())
                    }
                    return new mc(i)
                }
                return null
            }
            insertView(t) {
                this.dirtyQueriesWithMatches(t)
            }
            detachView(t) {
                this.dirtyQueriesWithMatches(t)
            }
            dirtyQueriesWithMatches(t) {
                for (let n = 0; n < this.queries.length; n++)
                    null !== Bp(t, n).matches && this.queries[n].setDirty()
            }
        }
        class Rp {
            constructor(t, n, r=null) {
                this.predicate = t,
                this.flags = n,
                this.read = r
            }
        }
        class yc {
            constructor(t=[]) {
                this.queries = t
            }
            elementStart(t, n) {
                for (let r = 0; r < this.queries.length; r++)
                    this.queries[r].elementStart(t, n)
            }
            elementEnd(t) {
                for (let n = 0; n < this.queries.length; n++)
                    this.queries[n].elementEnd(t)
            }
            embeddedTView(t) {
                let n = null;
                for (let r = 0; r < this.length; r++) {
                    const i = null !== n ? n.length : 0
                      , s = this.getByIndex(r).embeddedTView(t, i);
                    s && (s.indexInDeclarationView = r,
                    null !== n ? n.push(s) : n = [s])
                }
                return null !== n ? new yc(n) : null
            }
            template(t, n) {
                for (let r = 0; r < this.queries.length; r++)
                    this.queries[r].template(t, n)
            }
            getByIndex(t) {
                return this.queries[t]
            }
            get length() {
                return this.queries.length
            }
            track(t) {
                this.queries.push(t)
            }
        }
        class vc {
            constructor(t, n=-1) {
                this.metadata = t,
                this.matches = null,
                this.indexInDeclarationView = -1,
                this.crossesNgTemplate = !1,
                this._appliesToNextNode = !0,
                this._declarationNodeIndex = n
            }
            elementStart(t, n) {
                this.isApplyingToNode(n) && this.matchTNode(t, n)
            }
            elementEnd(t) {
                this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
            }
            template(t, n) {
                this.elementStart(t, n)
            }
            embeddedTView(t, n) {
                return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0,
                this.addMatch(-t.index, n),
                new vc(this.metadata)) : null
            }
            isApplyingToNode(t) {
                if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
                    const n = this._declarationNodeIndex;
                    let r = t.parent;
                    for (; null !== r && 8 & r.type && r.index !== n; )
                        r = r.parent;
                    return n === (null !== r ? r.index : -1)
                }
                return this._appliesToNextNode
            }
            matchTNode(t, n) {
                const r = this.metadata.predicate;
                if (Array.isArray(r))
                    for (let i = 0; i < r.length; i++) {
                        const s = r[i];
                        this.matchTNodeWithReadOption(t, n, D_(n, s)),
                        this.matchTNodeWithReadOption(t, n, io(n, t, s, !1, !1))
                    }
                else
                    r === Ga ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, io(n, t, r, !1, !1))
            }
            matchTNodeWithReadOption(t, n, r) {
                if (null !== r) {
                    const i = this.metadata.read;
                    if (null !== i)
                        if (i === Ra || i === Tl || i === Ga && 4 & n.type)
                            this.addMatch(n.index, -2);
                        else {
                            const s = io(n, t, i, !1, !1);
                            null !== s && this.addMatch(n.index, s)
                        }
                    else
                        this.addMatch(n.index, r)
                }
            }
            addMatch(t, n) {
                null === this.matches ? this.matches = [t, n] : this.matches.push(t, n)
            }
        }
        function D_(e, t) {
            const n = e.localNames;
            if (null !== n)
                for (let r = 0; r < n.length; r += 2)
                    if (n[r] === t)
                        return n[r + 1];
            return null
        }
        function __(e, t, n, r) {
            return -1 === n ? function E_(e, t) {
                return 11 & e.type ? ta(e, t) : 4 & e.type ? Ml(e, t) : null
            }(t, e) : -2 === n ? function w_(e, t, n) {
                return n === Ra ? ta(t, e) : n === Ga ? Ml(t, e) : n === Tl ? Pp(t, e) : void 0
            }(e, t, r) : qn(e, e[Pe], n, t)
        }
        function Op(e, t, n, r) {
            const i = t[Bn].queries[r];
            if (null === i.matches) {
                const s = e.data
                  , u = n.matches
                  , h = [];
                for (let m = 0; m < u.length; m += 2) {
                    const w = u[m];
                    h.push(w < 0 ? null : __(t, s[w], u[m + 1], n.metadata.read))
                }
                i.matches = h
            }
            return i.matches
        }
        function Dc(e, t, n, r) {
            const i = e.queries.getByIndex(n)
              , s = i.matches;
            if (null !== s) {
                const u = Op(e, t, i, n);
                for (let h = 0; h < s.length; h += 2) {
                    const m = s[h];
                    if (m > 0)
                        r.push(u[h / 2]);
                    else {
                        const w = s[h + 1]
                          , M = t[-m];
                        for (let R = Ht; R < M.length; R++) {
                            const H = M[R];
                            H[Mr] === H[Dt] && Dc(H[Pe], H, w, r)
                        }
                        if (null !== M[Kn]) {
                            const R = M[Kn];
                            for (let H = 0; H < R.length; H++) {
                                const $ = R[H];
                                Dc($[Pe], $, w, r)
                            }
                        }
                    }
                }
            }
            return r
        }
        function Np(e) {
            const t = oe()
              , n = pt()
              , r = yo();
            qr(r + 1);
            const i = Bp(n, r);
            if (e.dirty && function xo(e) {
                return 4 == (4 & e[et])
            }(t) === (2 == (2 & i.metadata.flags))) {
                if (null === i.matches)
                    e.reset([]);
                else {
                    const s = i.crossesNgTemplate ? Dc(n, t, r, []) : Op(n, t, i, r);
                    e.reset(s, oy),
                    e.notifyOnChanges()
                }
                return !0
            }
            return !1
        }
        function Fp(e, t, n) {
            const r = pt();
            r.firstCreatePass && (Hp(r, new Rp(e,t,n), -1),
            2 == (2 & t) && (r.staticViewQueries = !0)),
            kp(r, oe(), t)
        }
        function xp(e, t, n, r) {
            const i = pt();
            if (i.firstCreatePass) {
                const s = nn();
                Hp(i, new Rp(t,n,r), s.index),
                function S_(e, t) {
                    const n = e.contentQueries || (e.contentQueries = []);
                    t !== (n.length ? n[n.length - 1] : -1) && n.push(e.queries.length - 1, t)
                }(i, e),
                2 == (2 & n) && (i.staticContentQueries = !0)
            }
            kp(i, oe(), n)
        }
        function Lp() {
            return function C_(e, t) {
                return e[Bn].queries[t].queryList
            }(oe(), yo())
        }
        function kp(e, t, n) {
            const r = new hc(4 == (4 & n));
            hf(e, t, r, r.destroy),
            null === t[Bn] && (t[Bn] = new mc),
            t[Bn].queries.push(new gc(r))
        }
        function Hp(e, t, n) {
            null === e.queries && (e.queries = new yc),
            e.queries.track(new vc(t,n))
        }
        function Bp(e, t) {
            return e.queries.getByIndex(t)
        }
        function Ec(e) {
            return !!Kt(e)
        }
        function Pl(...e) {}
        const rg = new St("Application Initializer");
        let Rl = (()=>{
            class e {
                constructor(n) {
                    this.appInits = n,
                    this.resolve = Pl,
                    this.reject = Pl,
                    this.initialized = !1,
                    this.done = !1,
                    this.donePromise = new Promise((r,i)=>{
                        this.resolve = r,
                        this.reject = i
                    }
                    )
                }
                runInitializers() {
                    if (this.initialized)
                        return;
                    const n = []
                      , r = ()=>{
                        this.done = !0,
                        this.resolve()
                    }
                    ;
                    if (this.appInits)
                        for (let i = 0; i < this.appInits.length; i++) {
                            const s = this.appInits[i]();
                            if (Gu(s))
                                n.push(s);
                            else if (jf(s)) {
                                const u = new Promise((h,m)=>{
                                    s.subscribe({
                                        complete: h,
                                        error: m
                                    })
                                }
                                );
                                n.push(u)
                            }
                        }
                    Promise.all(n).then(()=>{
                        r()
                    }
                    ).catch(i=>{
                        this.reject(i)
                    }
                    ),
                    0 === n.length && r(),
                    this.initialized = !0
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(kt(rg, 8))
            }
            ,
            e.\u0275prov = Yt({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        const ig = new St("AppId",{
            providedIn: "root",
            factory: function sg() {
                return `${bc()}${bc()}${bc()}`
            }
        });
        function bc() {
            return String.fromCharCode(97 + Math.floor(25 * Math.random()))
        }
        const og = new St("Platform Initializer")
          , G_ = new St("Platform ID",{
            providedIn: "platform",
            factory: ()=>"unknown"
        })
          , W_ = new St("AnimationModuleType");
        let K_ = (()=>{
            class e {
                log(n) {
                    console.log(n)
                }
                warn(n) {
                    console.warn(n)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275prov = Yt({
                token: e,
                factory: e.\u0275fac,
                providedIn: "platform"
            }),
            e
        }
        )();
        const Ol = new St("LocaleId",{
            providedIn: "root",
            factory: ()=>ii(Ol, ce.Optional | ce.SkipSelf) || function Y_() {
                return typeof $localize < "u" && $localize.locale || ya
            }()
        })
          , Q_ = new St("DefaultCurrencyCode",{
            providedIn: "root",
            factory: ()=>"USD"
        });
        class q_ {
            constructor(t, n) {
                this.ngModuleFactory = t,
                this.componentFactories = n
            }
        }
        let X_ = (()=>{
            class e {
                compileModuleSync(n) {
                    return new uc(n)
                }
                compileModuleAsync(n) {
                    return Promise.resolve(this.compileModuleSync(n))
                }
                compileModuleAndAllComponentsSync(n) {
                    const r = this.compileModuleSync(n)
                      , s = Ps(Kt(n).declarations).reduce((u,h)=>{
                        const m = gt(h);
                        return m && u.push(new xa(m)),
                        u
                    }
                    , []);
                    return new q_(r,s)
                }
                compileModuleAndAllComponentsAsync(n) {
                    return Promise.resolve(this.compileModuleAndAllComponentsSync(n))
                }
                clearCache() {}
                clearCacheFor(n) {}
                getModuleId(n) {}
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275prov = Yt({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        const ew = (()=>Promise.resolve(0))();
        function Ic(e) {
            typeof Zone > "u" ? ew.then(()=>{
                e && e.apply(null, null)
            }
            ) : Zone.current.scheduleMicroTask("scheduleMicrotask", e)
        }
        class ni {
            constructor({enableLongStackTrace: t=!1, shouldCoalesceEventChangeDetection: n=!1, shouldCoalesceRunChangeDetection: r=!1}) {
                if (this.hasPendingMacrotasks = !1,
                this.hasPendingMicrotasks = !1,
                this.isStable = !0,
                this.onUnstable = new is(!1),
                this.onMicrotaskEmpty = new is(!1),
                this.onStable = new is(!1),
                this.onError = new is(!1),
                typeof Zone > "u")
                    throw new re(908,!1);
                Zone.assertZonePatched();
                const i = this;
                i._nesting = 0,
                i._outer = i._inner = Zone.current,
                Zone.TaskTrackingZoneSpec && (i._inner = i._inner.fork(new Zone.TaskTrackingZoneSpec)),
                t && Zone.longStackTraceZoneSpec && (i._inner = i._inner.fork(Zone.longStackTraceZoneSpec)),
                i.shouldCoalesceEventChangeDetection = !r && n,
                i.shouldCoalesceRunChangeDetection = r,
                i.lastRequestAnimationFrameId = -1,
                i.nativeRequestAnimationFrame = function tw() {
                    let e = ct.requestAnimationFrame
                      , t = ct.cancelAnimationFrame;
                    if (typeof Zone < "u" && e && t) {
                        const n = e[Zone.__symbol__("OriginalDelegate")];
                        n && (e = n);
                        const r = t[Zone.__symbol__("OriginalDelegate")];
                        r && (t = r)
                    }
                    return {
                        nativeRequestAnimationFrame: e,
                        nativeCancelAnimationFrame: t
                    }
                }().nativeRequestAnimationFrame,
                function iw(e) {
                    const t = ()=>{
                        !function rw(e) {
                            e.isCheckStableRunning || -1 !== e.lastRequestAnimationFrameId || (e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(ct, ()=>{
                                e.fakeTopEventTask || (e.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", ()=>{
                                    e.lastRequestAnimationFrameId = -1,
                                    Tc(e),
                                    e.isCheckStableRunning = !0,
                                    Mc(e),
                                    e.isCheckStableRunning = !1
                                }
                                , void 0, ()=>{}
                                , ()=>{}
                                )),
                                e.fakeTopEventTask.invoke()
                            }
                            ),
                            Tc(e))
                        }(e)
                    }
                    ;
                    e._inner = e._inner.fork({
                        name: "angular",
                        properties: {
                            isAngularZone: !0
                        },
                        onInvokeTask: (n,r,i,s,u,h)=>{
                            try {
                                return ug(e),
                                n.invokeTask(i, s, u, h)
                            } finally {
                                (e.shouldCoalesceEventChangeDetection && "eventTask" === s.type || e.shouldCoalesceRunChangeDetection) && t(),
                                cg(e)
                            }
                        }
                        ,
                        onInvoke: (n,r,i,s,u,h,m)=>{
                            try {
                                return ug(e),
                                n.invoke(i, s, u, h, m)
                            } finally {
                                e.shouldCoalesceRunChangeDetection && t(),
                                cg(e)
                            }
                        }
                        ,
                        onHasTask: (n,r,i,s)=>{
                            n.hasTask(i, s),
                            r === i && ("microTask" == s.change ? (e._hasPendingMicrotasks = s.microTask,
                            Tc(e),
                            Mc(e)) : "macroTask" == s.change && (e.hasPendingMacrotasks = s.macroTask))
                        }
                        ,
                        onHandleError: (n,r,i,s)=>(n.handleError(i, s),
                        e.runOutsideAngular(()=>e.onError.emit(s)),
                        !1)
                    })
                }(i)
            }
            static isInAngularZone() {
                return typeof Zone < "u" && !0 === Zone.current.get("isAngularZone")
            }
            static assertInAngularZone() {
                if (!ni.isInAngularZone())
                    throw new re(909,!1)
            }
            static assertNotInAngularZone() {
                if (ni.isInAngularZone())
                    throw new re(909,!1)
            }
            run(t, n, r) {
                return this._inner.run(t, n, r)
            }
            runTask(t, n, r, i) {
                const s = this._inner
                  , u = s.scheduleEventTask("NgZoneEvent: " + i, t, nw, Pl, Pl);
                try {
                    return s.runTask(u, n, r)
                } finally {
                    s.cancelTask(u)
                }
            }
            runGuarded(t, n, r) {
                return this._inner.runGuarded(t, n, r)
            }
            runOutsideAngular(t) {
                return this._outer.run(t)
            }
        }
        const nw = {};
        function Mc(e) {
            if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
                try {
                    e._nesting++,
                    e.onMicrotaskEmpty.emit(null)
                } finally {
                    if (e._nesting--,
                    !e.hasPendingMicrotasks)
                        try {
                            e.runOutsideAngular(()=>e.onStable.emit(null))
                        } finally {
                            e.isStable = !0
                        }
                }
        }
        function Tc(e) {
            e.hasPendingMicrotasks = !!(e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && -1 !== e.lastRequestAnimationFrameId)
        }
        function ug(e) {
            e._nesting++,
            e.isStable && (e.isStable = !1,
            e.onUnstable.emit(null))
        }
        function cg(e) {
            e._nesting--,
            Mc(e)
        }
        class sw {
            constructor() {
                this.hasPendingMicrotasks = !1,
                this.hasPendingMacrotasks = !1,
                this.isStable = !0,
                this.onUnstable = new is,
                this.onMicrotaskEmpty = new is,
                this.onStable = new is,
                this.onError = new is
            }
            run(t, n, r) {
                return t.apply(n, r)
            }
            runGuarded(t, n, r) {
                return t.apply(n, r)
            }
            runOutsideAngular(t) {
                return t()
            }
            runTask(t, n, r, i) {
                return t.apply(n, r)
            }
        }
        const dg = new St("")
          , fg = new St("");
        let Ac, ow = (()=>{
            class e {
                constructor(n, r, i) {
                    this._ngZone = n,
                    this.registry = r,
                    this._pendingCount = 0,
                    this._isZoneStable = !0,
                    this._didWork = !1,
                    this._callbacks = [],
                    this.taskTrackingZone = null,
                    Ac || (function aw(e) {
                        Ac = e
                    }(i),
                    i.addToWindow(r)),
                    this._watchAngularEvents(),
                    n.run(()=>{
                        this.taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone")
                    }
                    )
                }
                _watchAngularEvents() {
                    this._ngZone.onUnstable.subscribe({
                        next: ()=>{
                            this._didWork = !0,
                            this._isZoneStable = !1
                        }
                    }),
                    this._ngZone.runOutsideAngular(()=>{
                        this._ngZone.onStable.subscribe({
                            next: ()=>{
                                ni.assertNotInAngularZone(),
                                Ic(()=>{
                                    this._isZoneStable = !0,
                                    this._runCallbacksIfReady()
                                }
                                )
                            }
                        })
                    }
                    )
                }
                increasePendingRequestCount() {
                    return this._pendingCount += 1,
                    this._didWork = !0,
                    this._pendingCount
                }
                decreasePendingRequestCount() {
                    if (this._pendingCount -= 1,
                    this._pendingCount < 0)
                        throw new Error("pending async requests below zero");
                    return this._runCallbacksIfReady(),
                    this._pendingCount
                }
                isStable() {
                    return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                }
                _runCallbacksIfReady() {
                    if (this.isStable())
                        Ic(()=>{
                            for (; 0 !== this._callbacks.length; ) {
                                let n = this._callbacks.pop();
                                clearTimeout(n.timeoutId),
                                n.doneCb(this._didWork)
                            }
                            this._didWork = !1
                        }
                        );
                    else {
                        let n = this.getPendingTasks();
                        this._callbacks = this._callbacks.filter(r=>!r.updateCb || !r.updateCb(n) || (clearTimeout(r.timeoutId),
                        !1)),
                        this._didWork = !0
                    }
                }
                getPendingTasks() {
                    return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(n=>({
                        source: n.source,
                        creationLocation: n.creationLocation,
                        data: n.data
                    })) : []
                }
                addCallback(n, r, i) {
                    let s = -1;
                    r && r > 0 && (s = setTimeout(()=>{
                        this._callbacks = this._callbacks.filter(u=>u.timeoutId !== s),
                        n(this._didWork, this.getPendingTasks())
                    }
                    , r)),
                    this._callbacks.push({
                        doneCb: n,
                        timeoutId: s,
                        updateCb: i
                    })
                }
                whenStable(n, r, i) {
                    if (i && !this.taskTrackingZone)
                        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
                    this.addCallback(n, r, i),
                    this._runCallbacksIfReady()
                }
                getPendingRequestCount() {
                    return this._pendingCount
                }
                registerApplication(n) {
                    this.registry.registerApplication(n, this)
                }
                unregisterApplication(n) {
                    this.registry.unregisterApplication(n)
                }
                findProviders(n, r, i) {
                    return []
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(kt(ni),kt(hg),kt(fg))
            }
            ,
            e.\u0275prov = Yt({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )(), hg = (()=>{
            class e {
                constructor() {
                    this._applications = new Map
                }
                registerApplication(n, r) {
                    this._applications.set(n, r)
                }
                unregisterApplication(n) {
                    this._applications.delete(n)
                }
                unregisterAllApplications() {
                    this._applications.clear()
                }
                getTestability(n) {
                    return this._applications.get(n) || null
                }
                getAllTestabilities() {
                    return Array.from(this._applications.values())
                }
                getAllRootElements() {
                    return Array.from(this._applications.keys())
                }
                findTestabilityInTree(n, r=!0) {
                    return Ac?.findTestabilityInTree(this, n, r) ?? null
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275prov = Yt({
                token: e,
                factory: e.\u0275fac,
                providedIn: "platform"
            }),
            e
        }
        )();
        const Os = !1;
        let uo = null;
        const pg = new St("AllowMultipleToken")
          , Pc = new St("PlatformDestroyListeners")
          , gg = new St("appBootstrapListener");
        class cw {
            constructor(t, n) {
                this.name = t,
                this.token = n
            }
        }
        function yg(e, t, n=[]) {
            const r = `Platform: ${t}`
              , i = new St(r);
            return (s=[])=>{
                let u = Rc();
                if (!u || u.injector.get(pg, !1)) {
                    const h = [...n, ...s, {
                        provide: i,
                        useValue: !0
                    }];
                    e ? e(h) : function dw(e) {
                        if (uo && !uo.get(pg, !1))
                            throw new re(400,!1);
                        uo = e;
                        const t = e.get(Dg);
                        (function mg(e) {
                            const t = e.get(og, null);
                            t && t.forEach(n=>n())
                        }
                        )(e)
                    }(function vg(e=[], t) {
                        return Io.create({
                            name: t,
                            providers: [{
                                provide: gu,
                                useValue: "platform"
                            }, {
                                provide: Pc,
                                useValue: new Set([()=>uo = null])
                            }, ...e]
                        })
                    }(h, r))
                }
                return function hw(e) {
                    const t = Rc();
                    if (!t)
                        throw new re(401,!1);
                    return t
                }()
            }
        }
        function Rc() {
            return uo?.get(Dg) ?? null
        }
        let Dg = (()=>{
            class e {
                constructor(n) {
                    this._injector = n,
                    this._modules = [],
                    this._destroyListeners = [],
                    this._destroyed = !1
                }
                bootstrapModuleFactory(n, r) {
                    const i = function _g(e, t) {
                        let n;
                        return n = "noop" === e ? new sw : ("zone.js" === e ? void 0 : e) || new ni(t),
                        n
                    }(r?.ngZone, function Eg(e) {
                        return {
                            enableLongStackTrace: !1,
                            shouldCoalesceEventChangeDetection: !(!e || !e.ngZoneEventCoalescing) || !1,
                            shouldCoalesceRunChangeDetection: !(!e || !e.ngZoneRunCoalescing) || !1
                        }
                    }(r))
                      , s = [{
                        provide: ni,
                        useValue: i
                    }];
                    return i.run(()=>{
                        const u = Io.create({
                            providers: s,
                            parent: this.injector,
                            name: n.moduleType.name
                        })
                          , h = n.create(u)
                          , m = h.injector.get(Oa, null);
                        if (!m)
                            throw new re(402,!1);
                        return i.runOutsideAngular(()=>{
                            const w = i.onError.subscribe({
                                next: M=>{
                                    m.handleError(M)
                                }
                            });
                            h.onDestroy(()=>{
                                Fl(this._modules, h),
                                w.unsubscribe()
                            }
                            )
                        }
                        ),
                        function wg(e, t, n) {
                            try {
                                const r = n();
                                return Gu(r) ? r.catch(i=>{
                                    throw t.runOutsideAngular(()=>e.handleError(i)),
                                    i
                                }
                                ) : r
                            } catch (r) {
                                throw t.runOutsideAngular(()=>e.handleError(r)),
                                r
                            }
                        }(m, i, ()=>{
                            const w = h.injector.get(Rl);
                            return w.runInitializers(),
                            w.donePromise.then(()=>(jh(h.injector.get(Ol, ya) || ya),
                            this._moduleDoBootstrap(h),
                            h))
                        }
                        )
                    }
                    )
                }
                bootstrapModule(n, r=[]) {
                    const i = Cg({}, r);
                    return function lw(e, t, n) {
                        const r = new uc(n);
                        return Promise.resolve(r)
                    }(0, 0, n).then(s=>this.bootstrapModuleFactory(s, i))
                }
                _moduleDoBootstrap(n) {
                    const r = n.injector.get(Nl);
                    if (n._bootstrapComponents.length > 0)
                        n._bootstrapComponents.forEach(i=>r.bootstrap(i));
                    else {
                        if (!n.instance.ngDoBootstrap)
                            throw new re(-403,!1);
                        n.instance.ngDoBootstrap(r)
                    }
                    this._modules.push(n)
                }
                onDestroy(n) {
                    this._destroyListeners.push(n)
                }
                get injector() {
                    return this._injector
                }
                destroy() {
                    if (this._destroyed)
                        throw new re(404,!1);
                    this._modules.slice().forEach(r=>r.destroy()),
                    this._destroyListeners.forEach(r=>r());
                    const n = this._injector.get(Pc, null);
                    n && (n.forEach(r=>r()),
                    n.clear()),
                    this._destroyed = !0
                }
                get destroyed() {
                    return this._destroyed
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(kt(Io))
            }
            ,
            e.\u0275prov = Yt({
                token: e,
                factory: e.\u0275fac,
                providedIn: "platform"
            }),
            e
        }
        )();
        function Cg(e, t) {
            return Array.isArray(t) ? t.reduce(Cg, e) : {
                ...e,
                ...t
            }
        }
        let Nl = (()=>{
            class e {
                get destroyed() {
                    return this._destroyed
                }
                get injector() {
                    return this._injector
                }
                constructor(n, r, i) {
                    this._zone = n,
                    this._injector = r,
                    this._exceptionHandler = i,
                    this._bootstrapListeners = [],
                    this._views = [],
                    this._runningTick = !1,
                    this._stable = !0,
                    this._destroyed = !1,
                    this._destroyListeners = [],
                    this.componentTypes = [],
                    this.components = [],
                    this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
                        next: ()=>{
                            this._zone.run(()=>{
                                this.tick()
                            }
                            )
                        }
                    });
                    const s = new O.y(h=>{
                        this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks,
                        this._zone.runOutsideAngular(()=>{
                            h.next(this._stable),
                            h.complete()
                        }
                        )
                    }
                    )
                      , u = new O.y(h=>{
                        let m;
                        this._zone.runOutsideAngular(()=>{
                            m = this._zone.onStable.subscribe(()=>{
                                ni.assertNotInAngularZone(),
                                Ic(()=>{
                                    !this._stable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks && (this._stable = !0,
                                    h.next(!0))
                                }
                                )
                            }
                            )
                        }
                        );
                        const w = this._zone.onUnstable.subscribe(()=>{
                            ni.assertInAngularZone(),
                            this._stable && (this._stable = !1,
                            this._zone.runOutsideAngular(()=>{
                                h.next(!1)
                            }
                            ))
                        }
                        );
                        return ()=>{
                            m.unsubscribe(),
                            w.unsubscribe()
                        }
                    }
                    );
                    this.isStable = function Ce(...e) {
                        const t = (0,
                        De.yG)(e)
                          , n = (0,
                        De._6)(e, 1 / 0)
                          , r = e;
                        return r.length ? 1 === r.length ? (0,
                        X.Xf)(r[0]) : (0,
                        Q.J)(n)((0,
                        Ae.D)(r, t)) : me.E
                    }(s, u.pipe(function be(e={}) {
                        const {connector: t=(()=>new _.x), resetOnError: n=!0, resetOnComplete: r=!0, resetOnRefCountZero: i=!0} = e;
                        return s=>{
                            let u, h, m, w = 0, M = !1, R = !1;
                            const H = ()=>{
                                h?.unsubscribe(),
                                h = void 0
                            }
                              , $ = ()=>{
                                H(),
                                u = m = void 0,
                                M = R = !1
                            }
                              , ee = ()=>{
                                const pe = u;
                                $(),
                                pe?.unsubscribe()
                            }
                            ;
                            return (0,
                            q.e)((pe,Te)=>{
                                w++,
                                !R && !M && H();
                                const xe = m = m ?? t();
                                Te.add(()=>{
                                    w--,
                                    0 === w && !R && !M && (h = Ze(ee, i))
                                }
                                ),
                                xe.subscribe(Te),
                                !u && w > 0 && (u = new ue.Hp({
                                    next: Ge=>xe.next(Ge),
                                    error: Ge=>{
                                        R = !0,
                                        H(),
                                        h = Ze($, n, Ge),
                                        xe.error(Ge)
                                    }
                                    ,
                                    complete: ()=>{
                                        M = !0,
                                        H(),
                                        h = Ze($, r),
                                        xe.complete()
                                    }
                                }),
                                (0,
                                X.Xf)(pe).subscribe(u))
                            }
                            )(s)
                        }
                    }()))
                }
                bootstrap(n, r) {
                    const i = n instanceof Hd;
                    if (!this._injector.get(Rl).done) {
                        !i && mr(n);
                        throw new re(405,Os)
                    }
                    let u;
                    u = i ? n : this._injector.get(Pa).resolveComponentFactory(n),
                    this.componentTypes.push(u.componentType);
                    const h = function uw(e) {
                        return e.isBoundToModule
                    }(u) ? void 0 : this._injector.get(va)
                      , w = u.create(Io.NULL, [], r || u.selector, h)
                      , M = w.location.nativeElement
                      , R = w.injector.get(dg, null);
                    return R?.registerApplication(M),
                    w.onDestroy(()=>{
                        this.detachView(w.hostView),
                        Fl(this.components, w),
                        R?.unregisterApplication(M)
                    }
                    ),
                    this._loadComponent(w),
                    w
                }
                tick() {
                    if (this._runningTick)
                        throw new re(101,!1);
                    try {
                        this._runningTick = !0;
                        for (let n of this._views)
                            n.detectChanges()
                    } catch (n) {
                        this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))
                    } finally {
                        this._runningTick = !1
                    }
                }
                attachView(n) {
                    const r = n;
                    this._views.push(r),
                    r.attachToAppRef(this)
                }
                detachView(n) {
                    const r = n;
                    Fl(this._views, r),
                    r.detachFromAppRef()
                }
                _loadComponent(n) {
                    this.attachView(n.hostView),
                    this.tick(),
                    this.components.push(n);
                    const r = this._injector.get(gg, []);
                    r.push(...this._bootstrapListeners),
                    r.forEach(i=>i(n))
                }
                ngOnDestroy() {
                    if (!this._destroyed)
                        try {
                            this._destroyListeners.forEach(n=>n()),
                            this._views.slice().forEach(n=>n.destroy()),
                            this._onMicrotaskEmptySubscription.unsubscribe()
                        } finally {
                            this._destroyed = !0,
                            this._views = [],
                            this._bootstrapListeners = [],
                            this._destroyListeners = []
                        }
                }
                onDestroy(n) {
                    return this._destroyListeners.push(n),
                    ()=>Fl(this._destroyListeners, n)
                }
                destroy() {
                    if (this._destroyed)
                        throw new re(406,!1);
                    const n = this._injector;
                    n.destroy && !n.destroyed && n.destroy()
                }
                get viewCount() {
                    return this._views.length
                }
                warnIfDestroyed() {}
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(kt(ni),kt(bo),kt(Oa))
            }
            ,
            e.\u0275prov = Yt({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        function Fl(e, t) {
            const n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }
        let gw = (()=>{
            class e {
            }
            return e.__NG_ELEMENT_ID__ = mw,
            e
        }
        )();
        function mw(e) {
            return function yw(e, t, n) {
                if (ir(e) && !n) {
                    const r = qt(e.index, t);
                    return new Fa(r,r)
                }
                return 47 & e.type ? new Fa(t[sn],t) : null
            }(nn(), oe(), 16 == (16 & e))
        }
        class Tg {
            constructor() {}
            supports(t) {
                return pl(t)
            }
            create(t) {
                return new Cw(t)
            }
        }
        const ww = (e,t)=>t;
        class Cw {
            constructor(t) {
                this.length = 0,
                this._linkedRecords = null,
                this._unlinkedRecords = null,
                this._previousItHead = null,
                this._itHead = null,
                this._itTail = null,
                this._additionsHead = null,
                this._additionsTail = null,
                this._movesHead = null,
                this._movesTail = null,
                this._removalsHead = null,
                this._removalsTail = null,
                this._identityChangesHead = null,
                this._identityChangesTail = null,
                this._trackByFn = t || ww
            }
            forEachItem(t) {
                let n;
                for (n = this._itHead; null !== n; n = n._next)
                    t(n)
            }
            forEachOperation(t) {
                let n = this._itHead
                  , r = this._removalsHead
                  , i = 0
                  , s = null;
                for (; n || r; ) {
                    const u = !r || n && n.currentIndex < Pg(r, i, s) ? n : r
                      , h = Pg(u, i, s)
                      , m = u.currentIndex;
                    if (u === r)
                        i--,
                        r = r._nextRemoved;
                    else if (n = n._next,
                    null == u.previousIndex)
                        i++;
                    else {
                        s || (s = []);
                        const w = h - i
                          , M = m - i;
                        if (w != M) {
                            for (let H = 0; H < w; H++) {
                                const $ = H < s.length ? s[H] : s[H] = 0
                                  , ee = $ + H;
                                M <= ee && ee < w && (s[H] = $ + 1)
                            }
                            s[u.previousIndex] = M - w
                        }
                    }
                    h !== m && t(u, h, m)
                }
            }
            forEachPreviousItem(t) {
                let n;
                for (n = this._previousItHead; null !== n; n = n._nextPrevious)
                    t(n)
            }
            forEachAddedItem(t) {
                let n;
                for (n = this._additionsHead; null !== n; n = n._nextAdded)
                    t(n)
            }
            forEachMovedItem(t) {
                let n;
                for (n = this._movesHead; null !== n; n = n._nextMoved)
                    t(n)
            }
            forEachRemovedItem(t) {
                let n;
                for (n = this._removalsHead; null !== n; n = n._nextRemoved)
                    t(n)
            }
            forEachIdentityChange(t) {
                let n;
                for (n = this._identityChangesHead; null !== n; n = n._nextIdentityChange)
                    t(n)
            }
            diff(t) {
                if (null == t && (t = []),
                !pl(t))
                    throw new re(900,!1);
                return this.check(t) ? this : null
            }
            onDestroy() {}
            check(t) {
                this._reset();
                let i, s, u, n = this._itHead, r = !1;
                if (Array.isArray(t)) {
                    this.length = t.length;
                    for (let h = 0; h < this.length; h++)
                        s = t[h],
                        u = this._trackByFn(h, s),
                        null !== n && Object.is(n.trackById, u) ? (r && (n = this._verifyReinsertion(n, s, u, h)),
                        Object.is(n.item, s) || this._addIdentityChange(n, s)) : (n = this._mismatch(n, s, u, h),
                        r = !0),
                        n = n._next
                } else
                    i = 0,
                    function zv(e, t) {
                        if (Array.isArray(e))
                            for (let n = 0; n < e.length; n++)
                                t(e[n]);
                        else {
                            const n = e[Symbol.iterator]();
                            let r;
                            for (; !(r = n.next()).done; )
                                t(r.value)
                        }
                    }(t, h=>{
                        u = this._trackByFn(i, h),
                        null !== n && Object.is(n.trackById, u) ? (r && (n = this._verifyReinsertion(n, h, u, i)),
                        Object.is(n.item, h) || this._addIdentityChange(n, h)) : (n = this._mismatch(n, h, u, i),
                        r = !0),
                        n = n._next,
                        i++
                    }
                    ),
                    this.length = i;
                return this._truncate(n),
                this.collection = t,
                this.isDirty
            }
            get isDirty() {
                return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
            }
            _reset() {
                if (this.isDirty) {
                    let t;
                    for (t = this._previousItHead = this._itHead; null !== t; t = t._next)
                        t._nextPrevious = t._next;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded)
                        t.previousIndex = t.currentIndex;
                    for (this._additionsHead = this._additionsTail = null,
                    t = this._movesHead; null !== t; t = t._nextMoved)
                        t.previousIndex = t.currentIndex;
                    this._movesHead = this._movesTail = null,
                    this._removalsHead = this._removalsTail = null,
                    this._identityChangesHead = this._identityChangesTail = null
                }
            }
            _mismatch(t, n, r, i) {
                let s;
                return null === t ? s = this._itTail : (s = t._prev,
                this._remove(t)),
                null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null)) ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, s, i)) : null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(r, i)) ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, s, i)) : t = this._addAfter(new Sw(n,r), s, i),
                t
            }
            _verifyReinsertion(t, n, r, i) {
                let s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null);
                return null !== s ? t = this._reinsertAfter(s, t._prev, i) : t.currentIndex != i && (t.currentIndex = i,
                this._addToMoves(t, i)),
                t
            }
            _truncate(t) {
                for (; null !== t; ) {
                    const n = t._next;
                    this._addToRemovals(this._unlink(t)),
                    t = n
                }
                null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
                null !== this._additionsTail && (this._additionsTail._nextAdded = null),
                null !== this._movesTail && (this._movesTail._nextMoved = null),
                null !== this._itTail && (this._itTail._next = null),
                null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
                null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
            }
            _reinsertAfter(t, n, r) {
                null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                const i = t._prevRemoved
                  , s = t._nextRemoved;
                return null === i ? this._removalsHead = s : i._nextRemoved = s,
                null === s ? this._removalsTail = i : s._prevRemoved = i,
                this._insertAfter(t, n, r),
                this._addToMoves(t, r),
                t
            }
            _moveAfter(t, n, r) {
                return this._unlink(t),
                this._insertAfter(t, n, r),
                this._addToMoves(t, r),
                t
            }
            _addAfter(t, n, r) {
                return this._insertAfter(t, n, r),
                this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t,
                t
            }
            _insertAfter(t, n, r) {
                const i = null === n ? this._itHead : n._next;
                return t._next = i,
                t._prev = n,
                null === i ? this._itTail = t : i._prev = t,
                null === n ? this._itHead = t : n._next = t,
                null === this._linkedRecords && (this._linkedRecords = new Ag),
                this._linkedRecords.put(t),
                t.currentIndex = r,
                t
            }
            _remove(t) {
                return this._addToRemovals(this._unlink(t))
            }
            _unlink(t) {
                null !== this._linkedRecords && this._linkedRecords.remove(t);
                const n = t._prev
                  , r = t._next;
                return null === n ? this._itHead = r : n._next = r,
                null === r ? this._itTail = n : r._prev = n,
                t
            }
            _addToMoves(t, n) {
                return t.previousIndex === n || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t),
                t
            }
            _addToRemovals(t) {
                return null === this._unlinkedRecords && (this._unlinkedRecords = new Ag),
                this._unlinkedRecords.put(t),
                t.currentIndex = null,
                t._nextRemoved = null,
                null === this._removalsTail ? (this._removalsTail = this._removalsHead = t,
                t._prevRemoved = null) : (t._prevRemoved = this._removalsTail,
                this._removalsTail = this._removalsTail._nextRemoved = t),
                t
            }
            _addIdentityChange(t, n) {
                return t.item = n,
                this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t,
                t
            }
        }
        class Sw {
            constructor(t, n) {
                this.item = t,
                this.trackById = n,
                this.currentIndex = null,
                this.previousIndex = null,
                this._nextPrevious = null,
                this._prev = null,
                this._next = null,
                this._prevDup = null,
                this._nextDup = null,
                this._prevRemoved = null,
                this._nextRemoved = null,
                this._nextAdded = null,
                this._nextMoved = null,
                this._nextIdentityChange = null
            }
        }
        class bw {
            constructor() {
                this._head = null,
                this._tail = null
            }
            add(t) {
                null === this._head ? (this._head = this._tail = t,
                t._nextDup = null,
                t._prevDup = null) : (this._tail._nextDup = t,
                t._prevDup = this._tail,
                t._nextDup = null,
                this._tail = t)
            }
            get(t, n) {
                let r;
                for (r = this._head; null !== r; r = r._nextDup)
                    if ((null === n || n <= r.currentIndex) && Object.is(r.trackById, t))
                        return r;
                return null
            }
            remove(t) {
                const n = t._prevDup
                  , r = t._nextDup;
                return null === n ? this._head = r : n._nextDup = r,
                null === r ? this._tail = n : r._prevDup = n,
                null === this._head
            }
        }
        class Ag {
            constructor() {
                this.map = new Map
            }
            put(t) {
                const n = t.trackById;
                let r = this.map.get(n);
                r || (r = new bw,
                this.map.set(n, r)),
                r.add(t)
            }
            get(t, n) {
                const i = this.map.get(t);
                return i ? i.get(t, n) : null
            }
            remove(t) {
                const n = t.trackById;
                return this.map.get(n).remove(t) && this.map.delete(n),
                t
            }
            get isEmpty() {
                return 0 === this.map.size
            }
            clear() {
                this.map.clear()
            }
        }
        function Pg(e, t, n) {
            const r = e.previousIndex;
            if (null === r)
                return r;
            let i = 0;
            return n && r < n.length && (i = n[r]),
            r + t + i
        }
        class Rg {
            constructor() {}
            supports(t) {
                return t instanceof Map || Uu(t)
            }
            create() {
                return new Iw
            }
        }
        class Iw {
            constructor() {
                this._records = new Map,
                this._mapHead = null,
                this._appendAfter = null,
                this._previousMapHead = null,
                this._changesHead = null,
                this._changesTail = null,
                this._additionsHead = null,
                this._additionsTail = null,
                this._removalsHead = null,
                this._removalsTail = null
            }
            get isDirty() {
                return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
            }
            forEachItem(t) {
                let n;
                for (n = this._mapHead; null !== n; n = n._next)
                    t(n)
            }
            forEachPreviousItem(t) {
                let n;
                for (n = this._previousMapHead; null !== n; n = n._nextPrevious)
                    t(n)
            }
            forEachChangedItem(t) {
                let n;
                for (n = this._changesHead; null !== n; n = n._nextChanged)
                    t(n)
            }
            forEachAddedItem(t) {
                let n;
                for (n = this._additionsHead; null !== n; n = n._nextAdded)
                    t(n)
            }
            forEachRemovedItem(t) {
                let n;
                for (n = this._removalsHead; null !== n; n = n._nextRemoved)
                    t(n)
            }
            diff(t) {
                if (t) {
                    if (!(t instanceof Map || Uu(t)))
                        throw new re(900,!1)
                } else
                    t = new Map;
                return this.check(t) ? this : null
            }
            onDestroy() {}
            check(t) {
                this._reset();
                let n = this._mapHead;
                if (this._appendAfter = null,
                this._forEach(t, (r,i)=>{
                    if (n && n.key === i)
                        this._maybeAddToChanges(n, r),
                        this._appendAfter = n,
                        n = n._next;
                    else {
                        const s = this._getOrCreateRecordForKey(i, r);
                        n = this._insertBeforeOrAppend(n, s)
                    }
                }
                ),
                n) {
                    n._prev && (n._prev._next = null),
                    this._removalsHead = n;
                    for (let r = n; null !== r; r = r._nextRemoved)
                        r === this._mapHead && (this._mapHead = null),
                        this._records.delete(r.key),
                        r._nextRemoved = r._next,
                        r.previousValue = r.currentValue,
                        r.currentValue = null,
                        r._prev = null,
                        r._next = null
                }
                return this._changesTail && (this._changesTail._nextChanged = null),
                this._additionsTail && (this._additionsTail._nextAdded = null),
                this.isDirty
            }
            _insertBeforeOrAppend(t, n) {
                if (t) {
                    const r = t._prev;
                    return n._next = t,
                    n._prev = r,
                    t._prev = n,
                    r && (r._next = n),
                    t === this._mapHead && (this._mapHead = n),
                    this._appendAfter = t,
                    t
                }
                return this._appendAfter ? (this._appendAfter._next = n,
                n._prev = this._appendAfter) : this._mapHead = n,
                this._appendAfter = n,
                null
            }
            _getOrCreateRecordForKey(t, n) {
                if (this._records.has(t)) {
                    const i = this._records.get(t);
                    this._maybeAddToChanges(i, n);
                    const s = i._prev
                      , u = i._next;
                    return s && (s._next = u),
                    u && (u._prev = s),
                    i._next = null,
                    i._prev = null,
                    i
                }
                const r = new Mw(t);
                return this._records.set(t, r),
                r.currentValue = n,
                this._addToAdditions(r),
                r
            }
            _reset() {
                if (this.isDirty) {
                    let t;
                    for (this._previousMapHead = this._mapHead,
                    t = this._previousMapHead; null !== t; t = t._next)
                        t._nextPrevious = t._next;
                    for (t = this._changesHead; null !== t; t = t._nextChanged)
                        t.previousValue = t.currentValue;
                    for (t = this._additionsHead; null != t; t = t._nextAdded)
                        t.previousValue = t.currentValue;
                    this._changesHead = this._changesTail = null,
                    this._additionsHead = this._additionsTail = null,
                    this._removalsHead = null
                }
            }
            _maybeAddToChanges(t, n) {
                Object.is(n, t.currentValue) || (t.previousValue = t.currentValue,
                t.currentValue = n,
                this._addToChanges(t))
            }
            _addToAdditions(t) {
                null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t,
                this._additionsTail = t)
            }
            _addToChanges(t) {
                null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t,
                this._changesTail = t)
            }
            _forEach(t, n) {
                t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(r=>n(t[r], r))
            }
        }
        class Mw {
            constructor(t) {
                this.key = t,
                this.previousValue = null,
                this.currentValue = null,
                this._nextPrevious = null,
                this._next = null,
                this._prev = null,
                this._nextAdded = null,
                this._nextRemoved = null,
                this._nextChanged = null
            }
        }
        function Og() {
            return new Lc([new Tg])
        }
        let Lc = (()=>{
            class e {
                constructor(n) {
                    this.factories = n
                }
                static create(n, r) {
                    if (null != r) {
                        const i = r.factories.slice();
                        n = n.concat(i)
                    }
                    return new e(n)
                }
                static extend(n) {
                    return {
                        provide: e,
                        useFactory: r=>e.create(n, r || Og()),
                        deps: [[e, new Tn, new Zt]]
                    }
                }
                find(n) {
                    const r = this.factories.find(i=>i.supports(n));
                    if (null != r)
                        return r;
                    throw new re(901,!1)
                }
            }
            return e.\u0275prov = Yt({
                token: e,
                providedIn: "root",
                factory: Og
            }),
            e
        }
        )();
        function Ng() {
            return new kc([new Rg])
        }
        let kc = (()=>{
            class e {
                constructor(n) {
                    this.factories = n
                }
                static create(n, r) {
                    if (r) {
                        const i = r.factories.slice();
                        n = n.concat(i)
                    }
                    return new e(n)
                }
                static extend(n) {
                    return {
                        provide: e,
                        useFactory: r=>e.create(n, r || Ng()),
                        deps: [[e, new Tn, new Zt]]
                    }
                }
                find(n) {
                    const r = this.factories.find(i=>i.supports(n));
                    if (r)
                        return r;
                    throw new re(901,!1)
                }
            }
            return e.\u0275prov = Yt({
                token: e,
                providedIn: "root",
                factory: Ng
            }),
            e
        }
        )();
        const Pw = yg(null, "core", []);
        let Rw = (()=>{
            class e {
                constructor(n) {}
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(kt(Nl))
            }
            ,
            e.\u0275mod = Ur({
                type: e
            }),
            e.\u0275inj = xr({}),
            e
        }
        )();
        function Ow(e) {
            return "boolean" == typeof e ? e : null != e && "false" !== e
        }
    }
    ,
    1481: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            Dx: ()=>Rt,
            b2: ()=>Wt,
            h_: ()=>Gn,
            ki: ()=>Mi,
            q6: ()=>xr,
            se: ()=>Fe
        });
        var _ = P(6895)
          , L = P(8256);
        class O extends _.w_ {
            constructor() {
                super(...arguments),
                this.supportsDOMEvents = !0
            }
        }
        class Q extends O {
            static makeCurrent() {
                (0,
                _.HT)(new Q)
            }
            onAndCancel(B, A, j) {
                return B.addEventListener(A, j, !1),
                ()=>{
                    B.removeEventListener(A, j, !1)
                }
            }
            dispatchEvent(B, A) {
                B.dispatchEvent(A)
            }
            remove(B) {
                B.parentNode && B.parentNode.removeChild(B)
            }
            createElement(B, A) {
                return (A = A || this.getDefaultDocument()).createElement(B)
            }
            createHtmlDocument() {
                return document.implementation.createHTMLDocument("fakeTitle")
            }
            getDefaultDocument() {
                return document
            }
            isElementNode(B) {
                return B.nodeType === Node.ELEMENT_NODE
            }
            isShadowRoot(B) {
                return B instanceof DocumentFragment
            }
            getGlobalEventTarget(B, A) {
                return "window" === A ? window : "document" === A ? B : "body" === A ? B.body : null
            }
            getBaseHref(B) {
                const A = function me() {
                    return X = X || document.querySelector("base"),
                    X ? X.getAttribute("href") : null
                }();
                return null == A ? null : function Ae(z) {
                    De = De || document.createElement("a"),
                    De.setAttribute("href", z);
                    const B = De.pathname;
                    return "/" === B.charAt(0) ? B : `/${B}`
                }(A)
            }
            resetBaseElement() {
                X = null
            }
            getUserAgent() {
                return window.navigator.userAgent
            }
            getCookie(B) {
                return (0,
                _.Mx)(document.cookie, B)
            }
        }
        let De, X = null;
        const Ce = new L.OlP("TRANSITION_ID")
          , q = [{
            provide: L.ip1,
            useFactory: function ue(z, B, A) {
                return ()=>{
                    A.get(L.CZH).donePromise.then(()=>{
                        const j = (0,
                        _.q)()
                          , Z = B.querySelectorAll(`style[ng-transition="${z}"]`);
                        for (let Me = 0; Me < Z.length; Me++)
                            j.remove(Z[Me])
                    }
                    )
                }
            },
            deps: [Ce, _.K0, L.zs3],
            multi: !0
        }];
        let Ze = (()=>{
            class z {
                build() {
                    return new XMLHttpRequest
                }
            }
            return z.\u0275fac = function(A) {
                return new (A || z)
            }
            ,
            z.\u0275prov = L.Yz7({
                token: z,
                factory: z.\u0275fac
            }),
            z
        }
        )();
        const fe = new L.OlP("EventManagerPlugins");
        let Ue = (()=>{
            class z {
                constructor(A, j) {
                    this._zone = j,
                    this._eventNameToPlugin = new Map,
                    A.forEach(Z=>{
                        Z.manager = this
                    }
                    ),
                    this._plugins = A.slice().reverse()
                }
                addEventListener(A, j, Z) {
                    return this._findPluginFor(j).addEventListener(A, j, Z)
                }
                addGlobalEventListener(A, j, Z) {
                    return this._findPluginFor(j).addGlobalEventListener(A, j, Z)
                }
                getZone() {
                    return this._zone
                }
                _findPluginFor(A) {
                    const j = this._eventNameToPlugin.get(A);
                    if (j)
                        return j;
                    const Z = this._plugins;
                    for (let Me = 0; Me < Z.length; Me++) {
                        const Qe = Z[Me];
                        if (Qe.supports(A))
                            return this._eventNameToPlugin.set(A, Qe),
                            Qe
                    }
                    throw new Error(`No event manager plugin found for event ${A}`)
                }
            }
            return z.\u0275fac = function(A) {
                return new (A || z)(L.LFG(fe),L.LFG(L.R0b))
            }
            ,
            z.\u0275prov = L.Yz7({
                token: z,
                factory: z.\u0275fac
            }),
            z
        }
        )();
        class Oe {
            constructor(B) {
                this._doc = B
            }
            addGlobalEventListener(B, A, j) {
                const Z = (0,
                _.q)().getGlobalEventTarget(this._doc, B);
                if (!Z)
                    throw new Error(`Unsupported event target ${Z} for event ${A}`);
                return this.addEventListener(Z, A, j)
            }
        }
        let Je = (()=>{
            class z {
                constructor() {
                    this.usageCount = new Map
                }
                addStyles(A) {
                    for (const j of A)
                        1 === this.changeUsageCount(j, 1) && this.onStyleAdded(j)
                }
                removeStyles(A) {
                    for (const j of A)
                        0 === this.changeUsageCount(j, -1) && this.onStyleRemoved(j)
                }
                onStyleRemoved(A) {}
                onStyleAdded(A) {}
                getAllStyles() {
                    return this.usageCount.keys()
                }
                changeUsageCount(A, j) {
                    const Z = this.usageCount;
                    let Me = Z.get(A) ?? 0;
                    return Me += j,
                    Me > 0 ? Z.set(A, Me) : Z.delete(A),
                    Me
                }
                ngOnDestroy() {
                    for (const A of this.getAllStyles())
                        this.onStyleRemoved(A);
                    this.usageCount.clear()
                }
            }
            return z.\u0275fac = function(A) {
                return new (A || z)
            }
            ,
            z.\u0275prov = L.Yz7({
                token: z,
                factory: z.\u0275fac
            }),
            z
        }
        )()
          , Be = (()=>{
            class z extends Je {
                constructor(A) {
                    super(),
                    this.doc = A,
                    this.styleRef = new Map,
                    this.hostNodes = new Set,
                    this.resetHostNodes()
                }
                onStyleAdded(A) {
                    for (const j of this.hostNodes)
                        this.addStyleToHost(j, A)
                }
                onStyleRemoved(A) {
                    const j = this.styleRef;
                    j.get(A)?.forEach(Me=>Me.remove()),
                    j.delete(A)
                }
                ngOnDestroy() {
                    super.ngOnDestroy(),
                    this.styleRef.clear(),
                    this.resetHostNodes()
                }
                addHost(A) {
                    this.hostNodes.add(A);
                    for (const j of this.getAllStyles())
                        this.addStyleToHost(A, j)
                }
                removeHost(A) {
                    this.hostNodes.delete(A)
                }
                addStyleToHost(A, j) {
                    const Z = this.doc.createElement("style");
                    Z.textContent = j,
                    A.appendChild(Z);
                    const Me = this.styleRef.get(j);
                    Me ? Me.push(Z) : this.styleRef.set(j, [Z])
                }
                resetHostNodes() {
                    const A = this.hostNodes;
                    A.clear(),
                    A.add(this.doc.head)
                }
            }
            return z.\u0275fac = function(A) {
                return new (A || z)(L.LFG(_.K0))
            }
            ,
            z.\u0275prov = L.Yz7({
                token: z,
                factory: z.\u0275fac
            }),
            z
        }
        )();
        const We = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/",
            math: "http://www.w3.org/1998/MathML/"
        }
          , _e = /%COMP%/g
          , J = "%COMP%"
          , Ne = `_nghost-${J}`
          , ot = `_ngcontent-${J}`
          , Ee = new L.OlP("RemoveStylesOnCompDestory",{
            providedIn: "root",
            factory: ()=>!1
        });
        function je(z, B) {
            return B.flat(100).map(A=>A.replace(_e, z))
        }
        function yt(z) {
            return B=>{
                if ("__ngUnwrap__" === B)
                    return z;
                !1 === z(B) && (B.preventDefault(),
                B.returnValue = !1)
            }
        }
        let Fe = (()=>{
            class z {
                constructor(A, j, Z, Me) {
                    this.eventManager = A,
                    this.sharedStylesHost = j,
                    this.appId = Z,
                    this.removeStylesOnCompDestory = Me,
                    this.rendererByCompId = new Map,
                    this.defaultRenderer = new Y(A)
                }
                createRenderer(A, j) {
                    if (!A || !j)
                        return this.defaultRenderer;
                    const Z = this.getOrCreateRenderer(A, j);
                    return Z instanceof Ke ? Z.applyToHost(A) : Z instanceof he && Z.applyStyles(),
                    Z
                }
                getOrCreateRenderer(A, j) {
                    const Z = this.rendererByCompId;
                    let Me = Z.get(j.id);
                    if (!Me) {
                        const Qe = this.eventManager
                          , ke = this.sharedStylesHost
                          , Tt = this.removeStylesOnCompDestory;
                        switch (j.encapsulation) {
                        case L.ifc.Emulated:
                            Me = new Ke(Qe,ke,j,this.appId,Tt);
                            break;
                        case L.ifc.ShadowDom:
                            return new we(Qe,ke,A,j);
                        default:
                            Me = new he(Qe,ke,j,Tt)
                        }
                        Me.onDestroy = ()=>Z.delete(j.id),
                        Z.set(j.id, Me)
                    }
                    return Me
                }
                ngOnDestroy() {
                    this.rendererByCompId.clear()
                }
                begin() {}
                end() {}
            }
            return z.\u0275fac = function(A) {
                return new (A || z)(L.LFG(Ue),L.LFG(Be),L.LFG(L.AFp),L.LFG(Ee))
            }
            ,
            z.\u0275prov = L.Yz7({
                token: z,
                factory: z.\u0275fac
            }),
            z
        }
        )();
        class Y {
            constructor(B) {
                this.eventManager = B,
                this.data = Object.create(null),
                this.destroyNode = null
            }
            destroy() {}
            createElement(B, A) {
                return A ? document.createElementNS(We[A] || A, B) : document.createElement(B)
            }
            createComment(B) {
                return document.createComment(B)
            }
            createText(B) {
                return document.createTextNode(B)
            }
            appendChild(B, A) {
                (ne(B) ? B.content : B).appendChild(A)
            }
            insertBefore(B, A, j) {
                B && (ne(B) ? B.content : B).insertBefore(A, j)
            }
            removeChild(B, A) {
                B && B.removeChild(A)
            }
            selectRootElement(B, A) {
                let j = "string" == typeof B ? document.querySelector(B) : B;
                if (!j)
                    throw new Error(`The selector "${B}" did not match any elements`);
                return A || (j.textContent = ""),
                j
            }
            parentNode(B) {
                return B.parentNode
            }
            nextSibling(B) {
                return B.nextSibling
            }
            setAttribute(B, A, j, Z) {
                if (Z) {
                    A = Z + ":" + A;
                    const Me = We[Z];
                    Me ? B.setAttributeNS(Me, A, j) : B.setAttribute(A, j)
                } else
                    B.setAttribute(A, j)
            }
            removeAttribute(B, A, j) {
                if (j) {
                    const Z = We[j];
                    Z ? B.removeAttributeNS(Z, A) : B.removeAttribute(`${j}:${A}`)
                } else
                    B.removeAttribute(A)
            }
            addClass(B, A) {
                B.classList.add(A)
            }
            removeClass(B, A) {
                B.classList.remove(A)
            }
            setStyle(B, A, j, Z) {
                Z & (L.JOm.DashCase | L.JOm.Important) ? B.style.setProperty(A, j, Z & L.JOm.Important ? "important" : "") : B.style[A] = j
            }
            removeStyle(B, A, j) {
                j & L.JOm.DashCase ? B.style.removeProperty(A) : B.style[A] = ""
            }
            setProperty(B, A, j) {
                B[A] = j
            }
            setValue(B, A) {
                B.nodeValue = A
            }
            listen(B, A, j) {
                return "string" == typeof B ? this.eventManager.addGlobalEventListener(B, A, yt(j)) : this.eventManager.addEventListener(B, A, yt(j))
            }
        }
        function ne(z) {
            return "TEMPLATE" === z.tagName && void 0 !== z.content
        }
        class we extends Y {
            constructor(B, A, j, Z) {
                super(B),
                this.sharedStylesHost = A,
                this.hostEl = j,
                this.shadowRoot = j.attachShadow({
                    mode: "open"
                }),
                this.sharedStylesHost.addHost(this.shadowRoot);
                const Me = je(Z.id, Z.styles);
                for (const Qe of Me) {
                    const ke = document.createElement("style");
                    ke.textContent = Qe,
                    this.shadowRoot.appendChild(ke)
                }
            }
            nodeOrShadowRoot(B) {
                return B === this.hostEl ? this.shadowRoot : B
            }
            appendChild(B, A) {
                return super.appendChild(this.nodeOrShadowRoot(B), A)
            }
            insertBefore(B, A, j) {
                return super.insertBefore(this.nodeOrShadowRoot(B), A, j)
            }
            removeChild(B, A) {
                return super.removeChild(this.nodeOrShadowRoot(B), A)
            }
            parentNode(B) {
                return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(B)))
            }
            destroy() {
                this.sharedStylesHost.removeHost(this.shadowRoot)
            }
        }
        class he extends Y {
            constructor(B, A, j, Z, Me=j.id) {
                super(B),
                this.sharedStylesHost = A,
                this.removeStylesOnCompDestory = Z,
                this.rendererUsageCount = 0,
                this.styles = je(Me, j.styles)
            }
            applyStyles() {
                this.sharedStylesHost.addStyles(this.styles),
                this.rendererUsageCount++
            }
            destroy() {
                this.removeStylesOnCompDestory && (this.sharedStylesHost.removeStyles(this.styles),
                this.rendererUsageCount--,
                0 === this.rendererUsageCount && this.onDestroy?.())
            }
        }
        class Ke extends he {
            constructor(B, A, j, Z, Me) {
                const Qe = Z + "-" + j.id;
                super(B, A, j, Me, Qe),
                this.contentAttr = function se(z) {
                    return ot.replace(_e, z)
                }(Qe),
                this.hostAttr = function le(z) {
                    return Ne.replace(_e, z)
                }(Qe)
            }
            applyToHost(B) {
                this.applyStyles(),
                this.setAttribute(B, this.hostAttr, "")
            }
            createElement(B, A) {
                const j = super.createElement(B, A);
                return super.setAttribute(j, this.contentAttr, ""),
                j
            }
        }
        let ft = (()=>{
            class z extends Oe {
                constructor(A) {
                    super(A)
                }
                supports(A) {
                    return !0
                }
                addEventListener(A, j, Z) {
                    return A.addEventListener(j, Z, !1),
                    ()=>this.removeEventListener(A, j, Z)
                }
                removeEventListener(A, j, Z) {
                    return A.removeEventListener(j, Z)
                }
            }
            return z.\u0275fac = function(A) {
                return new (A || z)(L.LFG(_.K0))
            }
            ,
            z.\u0275prov = L.Yz7({
                token: z,
                factory: z.\u0275fac
            }),
            z
        }
        )();
        const $t = ["alt", "control", "meta", "shift"]
          , Ye = {
            "\b": "Backspace",
            "\t": "Tab",
            "\x7f": "Delete",
            "\x1b": "Escape",
            Del: "Delete",
            Esc: "Escape",
            Left: "ArrowLeft",
            Right: "ArrowRight",
            Up: "ArrowUp",
            Down: "ArrowDown",
            Menu: "ContextMenu",
            Scroll: "ScrollLock",
            Win: "OS"
        }
          , bt = {
            alt: z=>z.altKey,
            control: z=>z.ctrlKey,
            meta: z=>z.metaKey,
            shift: z=>z.shiftKey
        };
        let vt = (()=>{
            class z extends Oe {
                constructor(A) {
                    super(A)
                }
                supports(A) {
                    return null != z.parseEventName(A)
                }
                addEventListener(A, j, Z) {
                    const Me = z.parseEventName(j)
                      , Qe = z.eventCallback(Me.fullKey, Z, this.manager.getZone());
                    return this.manager.getZone().runOutsideAngular(()=>(0,
                    _.q)().onAndCancel(A, Me.domEventName, Qe))
                }
                static parseEventName(A) {
                    const j = A.toLowerCase().split(".")
                      , Z = j.shift();
                    if (0 === j.length || "keydown" !== Z && "keyup" !== Z)
                        return null;
                    const Me = z._normalizeKey(j.pop());
                    let Qe = ""
                      , ke = j.indexOf("code");
                    if (ke > -1 && (j.splice(ke, 1),
                    Qe = "code."),
                    $t.forEach(hr=>{
                        const Cn = j.indexOf(hr);
                        Cn > -1 && (j.splice(Cn, 1),
                        Qe += hr + ".")
                    }
                    ),
                    Qe += Me,
                    0 != j.length || 0 === Me.length)
                        return null;
                    const Tt = {};
                    return Tt.domEventName = Z,
                    Tt.fullKey = Qe,
                    Tt
                }
                static matchEventFullKeyCode(A, j) {
                    let Z = Ye[A.key] || A.key
                      , Me = "";
                    return j.indexOf("code.") > -1 && (Z = A.code,
                    Me = "code."),
                    !(null == Z || !Z) && (Z = Z.toLowerCase(),
                    " " === Z ? Z = "space" : "." === Z && (Z = "dot"),
                    $t.forEach(Qe=>{
                        Qe !== Z && (0,
                        bt[Qe])(A) && (Me += Qe + ".")
                    }
                    ),
                    Me += Z,
                    Me === j)
                }
                static eventCallback(A, j, Z) {
                    return Me=>{
                        z.matchEventFullKeyCode(Me, A) && Z.runGuarded(()=>j(Me))
                    }
                }
                static _normalizeKey(A) {
                    return "esc" === A ? "escape" : A
                }
            }
            return z.\u0275fac = function(A) {
                return new (A || z)(L.LFG(_.K0))
            }
            ,
            z.\u0275prov = L.Yz7({
                token: z,
                factory: z.\u0275fac
            }),
            z
        }
        )();
        const xr = (0,
        L.eFA)(L._c5, "browser", [{
            provide: L.Lbi,
            useValue: _.bD
        }, {
            provide: L.g9A,
            useValue: function wn() {
                Q.makeCurrent()
            },
            multi: !0
        }, {
            provide: _.K0,
            useFactory: function Yt() {
                return (0,
                L.RDi)(document),
                document
            },
            deps: []
        }])
          , Gt = new L.OlP("")
          , dr = [{
            provide: L.rWj,
            useClass: class be {
                addToWindow(B) {
                    L.dqk.getAngularTestability = (j,Z=!0)=>{
                        const Me = B.findTestabilityInTree(j, Z);
                        if (null == Me)
                            throw new Error("Could not find testability for element.");
                        return Me
                    }
                    ,
                    L.dqk.getAllAngularTestabilities = ()=>B.getAllTestabilities(),
                    L.dqk.getAllAngularRootElements = ()=>B.getAllRootElements(),
                    L.dqk.frameworkStabilizers || (L.dqk.frameworkStabilizers = []),
                    L.dqk.frameworkStabilizers.push(j=>{
                        const Z = L.dqk.getAllAngularTestabilities();
                        let Me = Z.length
                          , Qe = !1;
                        const ke = function(Tt) {
                            Qe = Qe || Tt,
                            Me--,
                            0 == Me && j(Qe)
                        };
                        Z.forEach(function(Tt) {
                            Tt.whenStable(ke)
                        })
                    }
                    )
                }
                findTestabilityInTree(B, A, j) {
                    return null == A ? null : B.getTestability(A) ?? (j ? (0,
                    _.q)().isShadowRoot(A) ? this.findTestabilityInTree(B, A.host, !0) : this.findTestabilityInTree(B, A.parentElement, !0) : null)
                }
            }
            ,
            deps: []
        }, {
            provide: L.lri,
            useClass: L.dDg,
            deps: [L.R0b, L.eoX, L.rWj]
        }, {
            provide: L.dDg,
            useClass: L.dDg,
            deps: [L.R0b, L.eoX, L.rWj]
        }]
          , Lr = [{
            provide: L.zSh,
            useValue: "root"
        }, {
            provide: L.qLn,
            useFactory: function Ii() {
                return new L.qLn
            },
            deps: []
        }, {
            provide: fe,
            useClass: ft,
            multi: !0,
            deps: [_.K0, L.R0b, L.Lbi]
        }, {
            provide: fe,
            useClass: vt,
            multi: !0,
            deps: [_.K0]
        }, {
            provide: Fe,
            useClass: Fe,
            deps: [Ue, Be, L.AFp, Ee]
        }, {
            provide: L.FYo,
            useExisting: Fe
        }, {
            provide: Je,
            useExisting: Be
        }, {
            provide: Be,
            useClass: Be,
            deps: [_.K0]
        }, {
            provide: Ue,
            useClass: Ue,
            deps: [fe, L.R0b]
        }, {
            provide: _.JF,
            useClass: Ze,
            deps: []
        }, []];
        let Wt = (()=>{
            class z {
                constructor(A) {}
                static withServerTransition(A) {
                    return {
                        ngModule: z,
                        providers: [{
                            provide: L.AFp,
                            useValue: A.appId
                        }, {
                            provide: Ce,
                            useExisting: L.AFp
                        }, q]
                    }
                }
            }
            return z.\u0275fac = function(A) {
                return new (A || z)(L.LFG(Gt, 12))
            }
            ,
            z.\u0275mod = L.oAB({
                type: z
            }),
            z.\u0275inj = L.cJS({
                providers: [...Lr, ...dr],
                imports: [_.ez, L.hGG]
            }),
            z
        }
        )()
          , Gn = (()=>{
            class z {
                constructor(A) {
                    this._doc = A,
                    this._dom = (0,
                    _.q)()
                }
                addTag(A, j=!1) {
                    return A ? this._getOrCreateElement(A, j) : null
                }
                addTags(A, j=!1) {
                    return A ? A.reduce((Z,Me)=>(Me && Z.push(this._getOrCreateElement(Me, j)),
                    Z), []) : []
                }
                getTag(A) {
                    return A && this._doc.querySelector(`meta[${A}]`) || null
                }
                getTags(A) {
                    if (!A)
                        return [];
                    const j = this._doc.querySelectorAll(`meta[${A}]`);
                    return j ? [].slice.call(j) : []
                }
                updateTag(A, j) {
                    if (!A)
                        return null;
                    j = j || this._parseSelector(A);
                    const Z = this.getTag(j);
                    return Z ? this._setMetaElementAttributes(A, Z) : this._getOrCreateElement(A, !0)
                }
                removeTag(A) {
                    this.removeTagElement(this.getTag(A))
                }
                removeTagElement(A) {
                    A && this._dom.remove(A)
                }
                _getOrCreateElement(A, j=!1) {
                    if (!j) {
                        const Qe = this._parseSelector(A)
                          , ke = this.getTags(Qe).filter(Tt=>this._containsAttributes(A, Tt))[0];
                        if (void 0 !== ke)
                            return ke
                    }
                    const Z = this._dom.createElement("meta");
                    return this._setMetaElementAttributes(A, Z),
                    this._doc.getElementsByTagName("head")[0].appendChild(Z),
                    Z
                }
                _setMetaElementAttributes(A, j) {
                    return Object.keys(A).forEach(Z=>j.setAttribute(this._getMetaKeyMap(Z), A[Z])),
                    j
                }
                _parseSelector(A) {
                    const j = A.name ? "name" : "property";
                    return `${j}="${A[j]}"`
                }
                _containsAttributes(A, j) {
                    return Object.keys(A).every(Z=>j.getAttribute(this._getMetaKeyMap(Z)) === A[Z])
                }
                _getMetaKeyMap(A) {
                    return Wn[A] || A
                }
            }
            return z.\u0275fac = function(A) {
                return new (A || z)(L.LFG(_.K0))
            }
            ,
            z.\u0275prov = L.Yz7({
                token: z,
                factory: function(A) {
                    let j = null;
                    return j = A ? new A : function Rn() {
                        return new Gn((0,
                        L.LFG)(_.K0))
                    }(),
                    j
                },
                providedIn: "root"
            }),
            z
        }
        )();
        const Wn = {
            httpEquiv: "http-equiv"
        };
        let Rt = (()=>{
            class z {
                constructor(A) {
                    this._doc = A
                }
                getTitle() {
                    return this._doc.title
                }
                setTitle(A) {
                    this._doc.title = A || ""
                }
            }
            return z.\u0275fac = function(A) {
                return new (A || z)(L.LFG(_.K0))
            }
            ,
            z.\u0275prov = L.Yz7({
                token: z,
                factory: function(A) {
                    let j = null;
                    return j = A ? new A : function kr() {
                        return new Rt((0,
                        L.LFG)(_.K0))
                    }(),
                    j
                },
                providedIn: "root"
            }),
            z
        }
        )();
        typeof window < "u" && window;
        let Mi = (()=>{
            class z {
                constructor() {
                    this.store = {},
                    this.onSerializeCallbacks = {},
                    this.store = function On(z, B) {
                        const A = z.getElementById(B + "-state");
                        let j = {};
                        if (A && A.textContent)
                            try {
                                j = JSON.parse(function co(z) {
                                    const B = {
                                        "&a;": "&",
                                        "&q;": '"',
                                        "&s;": "'",
                                        "&l;": "<",
                                        "&g;": ">"
                                    };
                                    return z.replace(/&[^;]+;/g, A=>B[A])
                                }(A.textContent))
                            } catch (Z) {
                                console.warn("Exception while restoring TransferState for app " + B, Z)
                            }
                        return j
                    }((0,
                    L.f3M)(_.K0), (0,
                    L.f3M)(L.AFp))
                }
                get(A, j) {
                    return void 0 !== this.store[A] ? this.store[A] : j
                }
                set(A, j) {
                    this.store[A] = j
                }
                remove(A) {
                    delete this.store[A]
                }
                hasKey(A) {
                    return this.store.hasOwnProperty(A)
                }
                get isEmpty() {
                    return 0 === Object.keys(this.store).length
                }
                onSerialize(A, j) {
                    this.onSerializeCallbacks[A] = j
                }
                toJson() {
                    for (const A in this.onSerializeCallbacks)
                        if (this.onSerializeCallbacks.hasOwnProperty(A))
                            try {
                                this.store[A] = this.onSerializeCallbacks[A]()
                            } catch (j) {
                                console.warn("Exception in onSerialize callback: ", j)
                            }
                    return JSON.stringify(this.store)
                }
            }
            return z.\u0275fac = function(A) {
                return new (A || z)
            }
            ,
            z.\u0275prov = L.Yz7({
                token: z,
                factory: z.\u0275fac,
                providedIn: "root"
            }),
            z
        }
        )()
    }
    ,
    6250: (Ve,ae,P)=>{
        "use strict";
        P.d(ae, {
            rH: ()=>Ki,
            Bz: ()=>p,
            lC: ()=>Li
        });
        var _ = P(8256)
          , L = P(2076)
          , O = P(9646)
          , Q = P(1135);
        const me = (0,
        P(3888).d)(c=>function() {
            c(this),
            this.name = "EmptyError",
            this.message = "no elements in sequence"
        }
        );
        var De = P(1577)
          , Ae = P(7272)
          , Ce = P(9751)
          , ue = P(8421);
        function q(c) {
            return new Ce.y(d=>{
                (0,
                ue.Xf)(c()).subscribe(d)
            }
            )
        }
        var be = P(9635)
          , Ze = P(2843)
          , fe = P(515)
          , Ue = P(727)
          , Oe = P(4482)
          , Je = P(5403);
        function Be() {
            return (0,
            Oe.e)((c,d)=>{
                let a = null;
                c._refCount++;
                const f = (0,
                Je.x)(d, void 0, void 0, void 0, ()=>{
                    if (!c || c._refCount <= 0 || 0 < --c._refCount)
                        return void (a = null);
                    const D = c._connection
                      , S = a;
                    a = null,
                    D && (!S || D === S) && D.unsubscribe(),
                    d.unsubscribe()
                }
                );
                c.subscribe(f),
                f.closed || (a = c.connect())
            }
            )
        }
        class We extends Ce.y {
            constructor(d, a) {
                super(),
                this.source = d,
                this.subjectFactory = a,
                this._subject = null,
                this._refCount = 0,
                this._connection = null,
                (0,
                Oe.A)(d) && (this.lift = d.lift)
            }
            _subscribe(d) {
                return this.getSubject().subscribe(d)
            }
            getSubject() {
                const d = this._subject;
                return (!d || d.isStopped) && (this._subject = this.subjectFactory()),
                this._subject
            }
            _teardown() {
                this._refCount = 0;
                const {_connection: d} = this;
                this._subject = this._connection = null,
                d?.unsubscribe()
            }
            connect() {
                let d = this._connection;
                if (!d) {
                    d = this._connection = new Ue.w0;
                    const a = this.getSubject();
                    d.add(this.source.subscribe((0,
                    Je.x)(a, void 0, ()=>{
                        this._teardown(),
                        a.complete()
                    }
                    , f=>{
                        this._teardown(),
                        a.error(f)
                    }
                    , ()=>this._teardown()))),
                    d.closed && (this._connection = null,
                    d = Ue.w0.EMPTY)
                }
                return d
            }
            refCount() {
                return Be()(this)
            }
        }
        var _e = P(7579)
          , ye = P(6895)
          , J = P(4004)
          , Ne = P(3900)
          , ot = P(5698)
          , re = P(8675)
          , Ee = P(9300)
          , se = P(5577);
        function le(c) {
            return (0,
            Oe.e)((d,a)=>{
                let f = !1;
                d.subscribe((0,
                Je.x)(a, D=>{
                    f = !0,
                    a.next(D)
                }
                , ()=>{
                    f || a.next(c),
                    a.complete()
                }
                ))
            }
            )
        }
        function je(c=yt) {
            return (0,
            Oe.e)((d,a)=>{
                let f = !1;
                d.subscribe((0,
                Je.x)(a, D=>{
                    f = !0,
                    a.next(D)
                }
                , ()=>f ? a.complete() : a.error(c())))
            }
            )
        }
        function yt() {
            return new me
        }
        var Fe = P(4671);
        function Y(c, d) {
            const a = arguments.length >= 2;
            return f=>f.pipe(c ? (0,
            Ee.h)((D,S)=>c(D, S, f)) : Fe.y, (0,
            ot.q)(1), a ? le(d) : je(()=>new me))
        }
        var K = P(4351)
          , ie = P(576);
        function ne(c, d, a) {
            const f = (0,
            ie.m)(c) || d || a ? {
                next: c,
                error: d,
                complete: a
            } : c;
            return f ? (0,
            Oe.e)((D,S)=>{
                var T;
                null === (T = f.subscribe) || void 0 === T || T.call(f);
                let k = !0;
                D.subscribe((0,
                Je.x)(S, G=>{
                    var ve;
                    null === (ve = f.next) || void 0 === ve || ve.call(f, G),
                    S.next(G)
                }
                , ()=>{
                    var G;
                    k = !1,
                    null === (G = f.complete) || void 0 === G || G.call(f),
                    S.complete()
                }
                , G=>{
                    var ve;
                    k = !1,
                    null === (ve = f.error) || void 0 === ve || ve.call(f, G),
                    S.error(G)
                }
                , ()=>{
                    var G, ve;
                    k && (null === (G = f.unsubscribe) || void 0 === G || G.call(f)),
                    null === (ve = f.finalize) || void 0 === ve || ve.call(f)
                }
                ))
            }
            ) : Fe.y
        }
        var we = P(262);
        function Ke(c, d) {
            return (0,
            Oe.e)(function he(c, d, a, f, D) {
                return (S,T)=>{
                    let k = a
                      , G = d
                      , ve = 0;
                    S.subscribe((0,
                    Je.x)(T, ge=>{
                        const qe = ve++;
                        G = k ? c(G, ge, qe) : (k = !0,
                        ge),
                        f && T.next(G)
                    }
                    , D && (()=>{
                        k && T.next(G),
                        T.complete()
                    }
                    )))
                }
            }(c, d, arguments.length >= 2, !0))
        }
        function ft(c) {
            return c <= 0 ? ()=>fe.E : (0,
            Oe.e)((d,a)=>{
                let f = [];
                d.subscribe((0,
                Je.x)(a, D=>{
                    f.push(D),
                    c < f.length && f.shift()
                }
                , ()=>{
                    for (const D of f)
                        a.next(D);
                    a.complete()
                }
                , void 0, ()=>{
                    f = null
                }
                ))
            }
            )
        }
        function $t(c, d) {
            const a = arguments.length >= 2;
            return f=>f.pipe(c ? (0,
            Ee.h)((D,S)=>c(D, S, f)) : Fe.y, ft(1), a ? le(d) : je(()=>new me))
        }
        function vt(c) {
            return (0,
            Oe.e)((d,a)=>{
                try {
                    d.subscribe(a)
                } finally {
                    a.add(c)
                }
            }
            )
        }
        var wt = P(8189)
          , zn = P(1481);
        const Le = "primary"
          , nt = Symbol("RouteTitle");
        class Jn {
            constructor(d) {
                this.params = d || {}
            }
            has(d) {
                return Object.prototype.hasOwnProperty.call(this.params, d)
            }
            get(d) {
                if (this.has(d)) {
                    const a = this.params[d];
                    return Array.isArray(a) ? a[0] : a
                }
                return null
            }
            getAll(d) {
                if (this.has(d)) {
                    const a = this.params[d];
                    return Array.isArray(a) ? a : [a]
                }
                return []
            }
            get keys() {
                return Object.keys(this.params)
            }
        }
        function wn(c) {
            return new Jn(c)
        }
        function Ii(c, d, a) {
            const f = a.path.split("/");
            if (f.length > c.length || "full" === a.pathMatch && (d.hasChildren() || f.length < c.length))
                return null;
            const D = {};
            for (let S = 0; S < f.length; S++) {
                const T = f[S]
                  , k = c[S];
                if (T.startsWith(":"))
                    D[T.substring(1)] = k;
                else if (T !== k.path)
                    return null
            }
            return {
                consumed: c.slice(0, f.length),
                posParams: D
            }
        }
        function kn(c, d) {
            const a = c ? Object.keys(c) : void 0
              , f = d ? Object.keys(d) : void 0;
            if (!a || !f || a.length != f.length)
                return !1;
            let D;
            for (let S = 0; S < a.length; S++)
                if (D = a[S],
                !xr(c[D], d[D]))
                    return !1;
            return !0
        }
        function xr(c, d) {
            if (Array.isArray(c) && Array.isArray(d)) {
                if (c.length !== d.length)
                    return !1;
                const a = [...c].sort()
                  , f = [...d].sort();
                return a.every((D,S)=>f[S] === D)
            }
            return c === d
        }
        function Gt(c) {
            return Array.prototype.concat.apply([], c)
        }
        function dr(c) {
            return c.length > 0 ? c[c.length - 1] : null
        }
        function Wt(c, d) {
            for (const a in c)
                c.hasOwnProperty(a) && d(c[a], a)
        }
        function Rn(c) {
            return (0,
            _.CqO)(c) ? c : (0,
            _.QGY)(c) ? (0,
            L.D)(Promise.resolve(c)) : (0,
            O.of)(c)
        }
        const Gn = !1
          , Wn = {
            exact: function $e(c, d, a) {
                if (!ht(c.segments, d.segments) || !fr(c.segments, d.segments, a) || c.numberOfChildren !== d.numberOfChildren)
                    return !1;
                for (const f in d.children)
                    if (!c.children[f] || !$e(c.children[f], d.children[f], a))
                        return !1;
                return !0
            },
            subset: Nt
        }
          , kr = {
            exact: function ce(c, d) {
                return kn(c, d)
            },
            subset: function Ot(c, d) {
                return Object.keys(d).length <= Object.keys(c).length && Object.keys(d).every(a=>xr(c[a], d[a]))
            },
            ignored: ()=>!0
        };
        function Rt(c, d, a) {
            return Wn[a.paths](c.root, d.root, a.matrixParams) && kr[a.queryParams](c.queryParams, d.queryParams) && !("exact" === a.fragment && c.fragment !== d.fragment)
        }
        function Nt(c, d, a) {
            return fn(c, d, d.segments, a)
        }
        function fn(c, d, a, f) {
            if (c.segments.length > a.length) {
                const D = c.segments.slice(0, a.length);
                return !(!ht(D, a) || d.hasChildren() || !fr(D, a, f))
            }
            if (c.segments.length === a.length) {
                if (!ht(c.segments, a) || !fr(c.segments, a, f))
                    return !1;
                for (const D in d.children)
                    if (!c.children[D] || !Nt(c.children[D], d.children[D], f))
                        return !1;
                return !0
            }
            {
                const D = a.slice(0, c.segments.length)
                  , S = a.slice(c.segments.length);
                return !!(ht(c.segments, D) && fr(c.segments, D, f) && c.children[Le]) && fn(c.children[Le], d, S, f)
            }
        }
        function fr(c, d, a) {
            return d.every((f,D)=>kr[a](c[D].parameters, f.parameters))
        }
        class ct {
            constructor(d=new at([],{}), a={}, f=null) {
                this.root = d,
                this.queryParams = a,
                this.fragment = f
            }
            get queryParamMap() {
                return this._queryParamMap || (this._queryParamMap = wn(this.queryParams)),
                this._queryParamMap
            }
            toString() {
                return Ai.serialize(this)
            }
        }
        class at {
            constructor(d, a) {
                this.segments = d,
                this.children = a,
                this.parent = null,
                Wt(a, (f,D)=>f.parent = this)
            }
            hasChildren() {
                return this.numberOfChildren > 0
            }
            get numberOfChildren() {
                return Object.keys(this.children).length
            }
            toString() {
                return ri(this)
            }
        }
        class Ft {
            constructor(d, a) {
                this.path = d,
                this.parameters = a
            }
            get parameterMap() {
                return this._parameterMap || (this._parameterMap = wn(this.parameters)),
                this._parameterMap
            }
            toString() {
                return Ir(this)
            }
        }
        function ht(c, d) {
            return c.length === d.length && c.every((a,f)=>a.path === d[f].path)
        }
        let On = (()=>{
            class c {
            }
            return c.\u0275fac = function(a) {
                return new (a || c)
            }
            ,
            c.\u0275prov = _.Yz7({
                token: c,
                factory: function() {
                    return new Ti
                },
                providedIn: "root"
            }),
            c
        }
        )();
        class Ti {
            parse(d) {
                const a = new Qe(d);
                return new ct(a.parseRootSegment(),a.parseQueryParams(),a.parseFragment())
            }
            serialize(d) {
                const a = `/${er(d.root, !0)}`
                  , f = function si(c) {
                    const d = Object.keys(c).map(a=>{
                        const f = c[a];
                        return Array.isArray(f) ? f.map(D=>`${Ut(a)}=${Ut(D)}`).join("&") : `${Ut(a)}=${Ut(f)}`
                    }
                    ).filter(a=>!!a);
                    return d.length ? `?${d.join("&")}` : ""
                }(d.queryParams);
                return `${a}${f}${"string" == typeof d.fragment ? `#${function ss(c) {
                    return encodeURI(c)
                }(d.fragment)}` : ""}`
            }
        }
        const Ai = new Ti;
        function ri(c) {
            return c.segments.map(d=>Ir(d)).join("/")
        }
        function er(c, d) {
            if (!c.hasChildren())
                return ri(c);
            if (d) {
                const a = c.children[Le] ? er(c.children[Le], !1) : ""
                  , f = [];
                return Wt(c.children, (D,S)=>{
                    S !== Le && f.push(`${S}:${er(D, !1)}`)
                }
                ),
                f.length > 0 ? `${a}(${f.join("//")})` : a
            }
            {
                const a = function Mi(c, d) {
                    let a = [];
                    return Wt(c.children, (f,D)=>{
                        D === Le && (a = a.concat(d(f, D)))
                    }
                    ),
                    Wt(c.children, (f,D)=>{
                        D !== Le && (a = a.concat(d(f, D)))
                    }
                    ),
                    a
                }(c, (f,D)=>D === Le ? [er(c.children[Le], !1)] : [`${D}:${er(f, !1)}`]);
                return 1 === Object.keys(c.children).length && null != c.children[Le] ? `${ri(c)}/${a[0]}` : `${ri(c)}/(${a.join("//")})`
            }
        }
        function tr(c) {
            return encodeURIComponent(c).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
        }
        function Ut(c) {
            return tr(c).replace(/%3B/gi, ";")
        }
        function kt(c) {
            return tr(c).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
        }
        function Hr(c) {
            return decodeURIComponent(c)
        }
        function ii(c) {
            return Hr(c.replace(/\+/g, "%20"))
        }
        function Ir(c) {
            return `${kt(c.path)}${function Pi(c) {
                return Object.keys(c).map(d=>`;${kt(d)}=${kt(c[d])}`).join("")
            }(c.parameters)}`
        }
        const z = /^[^\/()?;=#]+/;
        function B(c) {
            const d = c.match(z);
            return d ? d[0] : ""
        }
        const A = /^[^=?&#]+/
          , Z = /^[^&#]+/;
        class Qe {
            constructor(d) {
                this.url = d,
                this.remaining = d
            }
            parseRootSegment() {
                return this.consumeOptional("/"),
                "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new at([],{}) : new at([],this.parseChildren())
            }
            parseQueryParams() {
                const d = {};
                if (this.consumeOptional("?"))
                    do {
                        this.parseQueryParam(d)
                    } while (this.consumeOptional("&"));
                return d
            }
            parseFragment() {
                return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
            }
            parseChildren() {
                if ("" === this.remaining)
                    return {};
                this.consumeOptional("/");
                const d = [];
                for (this.peekStartsWith("(") || d.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/("); )
                    this.capture("/"),
                    d.push(this.parseSegment());
                let a = {};
                this.peekStartsWith("/(") && (this.capture("/"),
                a = this.parseParens(!0));
                let f = {};
                return this.peekStartsWith("(") && (f = this.parseParens(!1)),
                (d.length > 0 || Object.keys(a).length > 0) && (f[Le] = new at(d,a)),
                f
            }
            parseSegment() {
                const d = B(this.remaining);
                if ("" === d && this.peekStartsWith(";"))
                    throw new _.vHH(4009,Gn);
                return this.capture(d),
                new Ft(Hr(d),this.parseMatrixParams())
            }
            parseMatrixParams() {
                const d = {};
                for (; this.consumeOptional(";"); )
                    this.parseParam(d);
                return d
            }
            parseParam(d) {
                const a = B(this.remaining);
                if (!a)
                    return;
                this.capture(a);
                let f = "";
                if (this.consumeOptional("=")) {
                    const D = B(this.remaining);
                    D && (f = D,
                    this.capture(f))
                }
                d[Hr(a)] = Hr(f)
            }
            parseQueryParam(d) {
                const a = function j(c) {
                    const d = c.match(A);
                    return d ? d[0] : ""
                }(this.remaining);
                if (!a)
                    return;
                this.capture(a);
                let f = "";
                if (this.consumeOptional("=")) {
                    const T = function Me(c) {
                        const d = c.match(Z);
                        return d ? d[0] : ""
                    }(this.remaining);
                    T && (f = T,
                    this.capture(f))
                }
                const D = ii(a)
                  , S = ii(f);
                if (d.hasOwnProperty(D)) {
                    let T = d[D];
                    Array.isArray(T) || (T = [T],
                    d[D] = T),
                    T.push(S)
                } else
                    d[D] = S
            }
            parseParens(d) {
                const a = {};
                for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0; ) {
                    const f = B(this.remaining)
                      , D = this.remaining[f.length];
                    if ("/" !== D && ")" !== D && ";" !== D)
                        throw new _.vHH(4010,Gn);
                    let S;
                    f.indexOf(":") > -1 ? (S = f.slice(0, f.indexOf(":")),
                    this.capture(S),
                    this.capture(":")) : d && (S = Le);
                    const T = this.parseChildren();
                    a[S] = 1 === Object.keys(T).length ? T[Le] : new at([],T),
                    this.consumeOptional("//")
                }
                return a
            }
            peekStartsWith(d) {
                return this.remaining.startsWith(d)
            }
            consumeOptional(d) {
                return !!this.peekStartsWith(d) && (this.remaining = this.remaining.substring(d.length),
                !0)
            }
            capture(d) {
                if (!this.consumeOptional(d))
                    throw new _.vHH(4011,Gn)
            }
        }
        function ke(c) {
            return c.segments.length > 0 ? new at([],{
                [Le]: c
            }) : c
        }
        function Tt(c) {
            const d = {};
            for (const f of Object.keys(c.children)) {
                const S = Tt(c.children[f]);
                (S.segments.length > 0 || S.hasChildren()) && (d[f] = S)
            }
            return function hr(c) {
                if (1 === c.numberOfChildren && c.children[Le]) {
                    const d = c.children[Le];
                    return new at(c.segments.concat(d.segments),d.children)
                }
                return c
            }(new at(c.segments,d))
        }
        function Cn(c) {
            return c instanceof ct
        }
        const oi = !1;
        function Ns(c, d, a, f, D) {
            if (0 === a.length)
                return gr(d.root, d.root, d.root, f, D);
            const S = function as(c) {
                if ("string" == typeof c[0] && 1 === c.length && "/" === c[0])
                    return new os(!0,0,c);
                let d = 0
                  , a = !1;
                const f = c.reduce((D,S,T)=>{
                    if ("object" == typeof S && null != S) {
                        if (S.outlets) {
                            const k = {};
                            return Wt(S.outlets, (G,ve)=>{
                                k[ve] = "string" == typeof G ? G.split("/") : G
                            }
                            ),
                            [...D, {
                                outlets: k
                            }]
                        }
                        if (S.segmentPath)
                            return [...D, S.segmentPath]
                    }
                    return "string" != typeof S ? [...D, S] : 0 === T ? (S.split("/").forEach((k,G)=>{
                        0 == G && "." === k || (0 == G && "" === k ? a = !0 : ".." === k ? d++ : "" != k && D.push(k))
                    }
                    ),
                    D) : [...D, S]
                }
                , []);
                return new os(a,d,f)
            }(a);
            return S.toRoot() ? gr(d.root, d.root, new at([],{}), f, D) : function T(G) {
                const ve = function gt(c, d, a, f) {
                    if (c.isAbsolute)
                        return new ui(d.root,!0,0);
                    if (-1 === f)
                        return new ui(a,a === d.root,0);
                    return function Qt(c, d, a) {
                        let f = c
                          , D = d
                          , S = a;
                        for (; S > D; ) {
                            if (S -= D,
                            f = f.parent,
                            !f)
                                throw new _.vHH(4005,oi && "Invalid number of '../'");
                            D = f.segments.length
                        }
                        return new ui(f,!1,D - S)
                    }(a, f + (ai(c.commands[0]) ? 0 : 1), c.numberOfDoubleDots)
                }(S, d, c.snapshot?._urlSegment, G)
                  , ge = ve.processChildren ? Kt(ve.segmentGroup, ve.index, S.commands) : mr(ve.segmentGroup, ve.index, S.commands);
                return gr(d.root, ve.segmentGroup, ge, f, D)
            }(c.snapshot?._lastPathIndex)
        }
        function ai(c) {
            return "object" == typeof c && null != c && !c.outlets && !c.segmentPath
        }
        function li(c) {
            return "object" == typeof c && null != c && c.outlets
        }
        function gr(c, d, a, f, D) {
            let T, S = {};
            f && Wt(f, (G,ve)=>{
                S[ve] = Array.isArray(G) ? G.map(ge=>`${ge}`) : `${G}`
            }
            ),
            T = c === d ? a : Ur(c, d, a);
            const k = ke(Tt(T));
            return new ct(k,S,D)
        }
        function Ur(c, d, a) {
            const f = {};
            return Wt(c.children, (D,S)=>{
                f[S] = D === d ? a : Ur(D, d, a)
            }
            ),
            new at(c.segments,f)
        }
        class os {
            constructor(d, a, f) {
                if (this.isAbsolute = d,
                this.numberOfDoubleDots = a,
                this.commands = f,
                d && f.length > 0 && ai(f[0]))
                    throw new _.vHH(4003,oi && "Root segment cannot have matrix parameters");
                const D = f.find(li);
                if (D && D !== dr(f))
                    throw new _.vHH(4004,oi && "{outlets:{}} has to be the last command")
            }
            toRoot() {
                return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
            }
        }
        class ui {
            constructor(d, a, f) {
                this.segmentGroup = d,
                this.processChildren = a,
                this.index = f
            }
        }
        function mr(c, d, a) {
            if (c || (c = new at([],{})),
            0 === c.segments.length && c.hasChildren())
                return Kt(c, d, a);
            const f = function ls(c, d, a) {
                let f = 0
                  , D = d;
                const S = {
                    match: !1,
                    pathIndex: 0,
                    commandIndex: 0
                };
                for (; D < c.segments.length; ) {
                    if (f >= a.length)
                        return S;
                    const T = c.segments[D]
                      , k = a[f];
                    if (li(k))
                        break;
                    const G = `${k}`
                      , ve = f < a.length - 1 ? a[f + 1] : null;
                    if (D > 0 && void 0 === G)
                        break;
                    if (G && ve && "object" == typeof ve && void 0 === ve.outlets) {
                        if (!Pe(G, ve, T))
                            return S;
                        f += 2
                    } else {
                        if (!Pe(G, {}, T))
                            return S;
                        f++
                    }
                    D++
                }
                return {
                    match: !0,
                    pathIndex: D,
                    commandIndex: f
                }
            }(c, d, a)
              , D = a.slice(f.commandIndex);
            if (f.match && f.pathIndex < c.segments.length) {
                const S = new at(c.segments.slice(0, f.pathIndex),{});
                return S.children[Le] = new at(c.segments.slice(f.pathIndex),c.children),
                Kt(S, 0, D)
            }
            return f.match && 0 === D.length ? new at(c.segments,{}) : f.match && !c.hasChildren() ? Oi(c, d, a) : f.match ? Kt(c, 0, D) : Oi(c, d, a)
        }
        function Kt(c, d, a) {
            if (0 === a.length)
                return new at(c.segments,{});
            {
                const f = function hn(c) {
                    return li(c[0]) ? c[0].outlets : {
                        [Le]: c
                    }
                }(a)
                  , D = {};
                if (!f[Le] && c.children[Le] && 1 === c.numberOfChildren && 0 === c.children[Le].segments.length) {
                    const S = Kt(c.children[Le], d, a);
                    return new at(c.segments,S.children)
                }
                return Wt(f, (S,T)=>{
                    "string" == typeof S && (S = [S]),
                    null !== S && (D[T] = mr(c.children[T], d, S))
                }
                ),
                Wt(c.children, (S,T)=>{
                    void 0 === f[T] && (D[T] = S)
                }
                ),
                new at(c.segments,D)
            }
        }
        function Oi(c, d, a) {
            const f = c.segments.slice(0, d);
            let D = 0;
            for (; D < a.length; ) {
                const S = a[D];
                if (li(S)) {
                    const G = ci(S.outlets);
                    return new at(f,G)
                }
                if (0 === D && ai(a[0])) {
                    f.push(new Ft(c.segments[d].path,Hn(a[0]))),
                    D++;
                    continue
                }
                const T = li(S) ? S.outlets[Le] : `${S}`
                  , k = D < a.length - 1 ? a[D + 1] : null;
                T && k && ai(k) ? (f.push(new Ft(T,Hn(k))),
                D += 2) : (f.push(new Ft(T,{})),
                D++)
            }
            return new at(f,{})
        }
        function ci(c) {
            const d = {};
            return Wt(c, (a,f)=>{
                "string" == typeof a && (a = [a]),
                null !== a && (d[f] = Oi(new at([],{}), 0, a))
            }
            ),
            d
        }
        function Hn(c) {
            const d = {};
            return Wt(c, (a,f)=>d[f] = `${a}`),
            d
        }
        function Pe(c, d, a) {
            return c == a.path && kn(d, a.parameters)
        }
        const et = "imperative";
        class Dt {
            constructor(d, a) {
                this.id = d,
                this.url = a
            }
        }
        class yn extends Dt {
            constructor(d, a, f="imperative", D=null) {
                super(d, a),
                this.type = 0,
                this.navigationTrigger = f,
                this.restoredState = D
            }
            toString() {
                return `NavigationStart(id: ${this.id}, url: '${this.url}')`
            }
        }
        class pn extends Dt {
            constructor(d, a, f) {
                super(d, a),
                this.urlAfterRedirects = f,
                this.type = 1
            }
            toString() {
                return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
            }
        }
        class jt extends Dt {
            constructor(d, a, f, D) {
                super(d, a),
                this.reason = f,
                this.code = D,
                this.type = 2
            }
            toString() {
                return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
            }
        }
        class nr extends Dt {
            constructor(d, a, f, D) {
                super(d, a),
                this.reason = f,
                this.code = D,
                this.type = 16
            }
        }
        class xt extends Dt {
            constructor(d, a, f, D) {
                super(d, a),
                this.error = f,
                this.target = D,
                this.type = 3
            }
            toString() {
                return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
            }
        }
        class us extends Dt {
            constructor(d, a, f, D) {
                super(d, a),
                this.urlAfterRedirects = f,
                this.state = D,
                this.type = 4
            }
            toString() {
                return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }
        }
        class di extends Dt {
            constructor(d, a, f, D) {
                super(d, a),
                this.urlAfterRedirects = f,
                this.state = D,
                this.type = 7
            }
            toString() {
                return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }
        }
        class lt extends Dt {
            constructor(d, a, f, D, S) {
                super(d, a),
                this.urlAfterRedirects = f,
                this.state = D,
                this.shouldActivate = S,
                this.type = 8
            }
            toString() {
                return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
            }
        }
        class xs extends Dt {
            constructor(d, a, f, D) {
                super(d, a),
                this.urlAfterRedirects = f,
                this.state = D,
                this.type = 5
            }
            toString() {
                return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }
        }
        class cs extends Dt {
            constructor(d, a, f, D) {
                super(d, a),
                this.urlAfterRedirects = f,
                this.state = D,
                this.type = 6
            }
            toString() {
                return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }
        }
        class fo {
            constructor(d) {
                this.route = d,
                this.type = 9
            }
            toString() {
                return `RouteConfigLoadStart(path: ${this.route.path})`
            }
        }
        class rn {
            constructor(d) {
                this.route = d,
                this.type = 10
            }
            toString() {
                return `RouteConfigLoadEnd(path: ${this.route.path})`
            }
        }
        class sn {
            constructor(d) {
                this.snapshot = d,
                this.type = 11
            }
            toString() {
                return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }
        }
        class Mr {
            constructor(d) {
                this.snapshot = d,
                this.type = 12
            }
            toString() {
                return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }
        }
        class Sn {
            constructor(d) {
                this.snapshot = d,
                this.type = 13
            }
            toString() {
                return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }
        }
        class Bn {
            constructor(d) {
                this.snapshot = d,
                this.type = 14
            }
            toString() {
                return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }
        }
        class rr {
            constructor(d, a, f) {
                this.routerEvent = d,
                this.position = a,
                this.anchor = f,
                this.type = 15
            }
            toString() {
                return `Scroll(anchor: '${this.anchor}', position: '${this.position ? `${this.position[0]}, ${this.position[1]}` : null}')`
            }
        }
        let Nn = (()=>{
            class c {
                createUrlTree(a, f, D, S, T, k) {
                    return Ns(a || f.root, D, S, T, k)
                }
            }
            return c.\u0275fac = function(a) {
                return new (a || c)
            }
            ,
            c.\u0275prov = _.Yz7({
                token: c,
                factory: c.\u0275fac
            }),
            c
        }
        )()
          , xi = (()=>{
            class c {
            }
            return c.\u0275fac = function(a) {
                return new (a || c)
            }
            ,
            c.\u0275prov = _.Yz7({
                token: c,
                factory: function(d) {
                    return Nn.\u0275fac(d)
                },
                providedIn: "root"
            }),
            c
        }
        )();
        class jr {
            constructor(d) {
                this._root = d
            }
            get root() {
                return this._root.value
            }
            parent(d) {
                const a = this.pathFromRoot(d);
                return a.length > 1 ? a[a.length - 2] : null
            }
            children(d) {
                const a = Tr(d, this._root);
                return a ? a.children.map(f=>f.value) : []
            }
            firstChild(d) {
                const a = Tr(d, this._root);
                return a && a.children.length > 0 ? a.children[0].value : null
            }
            siblings(d) {
                const a = Kn(d, this._root);
                return a.length < 2 ? [] : a[a.length - 2].children.map(D=>D.value).filter(D=>D !== d)
            }
            pathFromRoot(d) {
                return Kn(d, this._root).map(a=>a.value)
            }
        }
        function Tr(c, d) {
            if (c === d.value)
                return d;
            for (const a of d.children) {
                const f = Tr(c, a);
                if (f)
                    return f
            }
            return null
        }
        function Kn(c, d) {
            if (c === d.value)
                return [d];
            for (const a of d.children) {
                const f = Kn(c, a);
                if (f.length)
                    return f.unshift(d),
                    f
            }
            return []
        }
        class Ht {
            constructor(d, a) {
                this.value = d,
                this.children = a
            }
            toString() {
                return `TreeNode(${this.value})`
            }
        }
        function fi(c) {
            const d = {};
            return c && c.children.forEach(a=>d[a.value.outlet] = a),
            d
        }
        class Vt extends jr {
            constructor(d, a) {
                super(d),
                this.snapshot = a,
                Vr(this, d)
            }
            toString() {
                return this.snapshot.toString()
            }
        }
        function bn(c, d) {
            const a = function ds(c, d) {
                const T = new hi([],{},{},"",{},Le,d,null,c.root,-1,{});
                return new Ro("",new Ht(T,[]))
            }(c, d)
              , f = new Q.X([new Ft("",{})])
              , D = new Q.X({})
              , S = new Q.X({})
              , T = new Q.X({})
              , k = new Q.X("")
              , G = new ir(f,D,T,k,S,Le,d,a.root);
            return G.snapshot = a.root,
            new Vt(new Ht(G,[]),a)
        }
        class ir {
            constructor(d, a, f, D, S, T, k, G) {
                this.url = d,
                this.params = a,
                this.queryParams = f,
                this.fragment = D,
                this.data = S,
                this.outlet = T,
                this.component = k,
                this.title = this.data?.pipe((0,
                J.U)(ve=>ve[nt])) ?? (0,
                O.of)(void 0),
                this._futureSnapshot = G
            }
            get routeConfig() {
                return this._futureSnapshot.routeConfig
            }
            get root() {
                return this._routerState.root
            }
            get parent() {
                return this._routerState.parent(this)
            }
            get firstChild() {
                return this._routerState.firstChild(this)
            }
            get children() {
                return this._routerState.children(this)
            }
            get pathFromRoot() {
                return this._routerState.pathFromRoot(this)
            }
            get paramMap() {
                return this._paramMap || (this._paramMap = this.params.pipe((0,
                J.U)(d=>wn(d)))),
                this._paramMap
            }
            get queryParamMap() {
                return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe((0,
                J.U)(d=>wn(d)))),
                this._queryParamMap
            }
            toString() {
                return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
            }
        }
        function $r(c, d="emptyOnly") {
            const a = c.pathFromRoot;
            let f = 0;
            if ("always" !== d)
                for (f = a.length - 1; f >= 1; ) {
                    const D = a[f]
                      , S = a[f - 1];
                    if (D.routeConfig && "" === D.routeConfig.path)
                        f--;
                    else {
                        if (S.component)
                            break;
                        f--
                    }
                }
            return function Fn(c) {
                return c.reduce((d,a)=>({
                    params: {
                        ...d.params,
                        ...a.params
                    },
                    data: {
                        ...d.data,
                        ...a.data
                    },
                    resolve: {
                        ...a.data,
                        ...d.resolve,
                        ...a.routeConfig?.data,
                        ...a._resolvedData
                    }
                }), {
                    params: {},
                    data: {},
                    resolve: {}
                })
            }(a.slice(f))
        }
        class hi {
            get title() {
                return this.data?.[nt]
            }
            constructor(d, a, f, D, S, T, k, G, ve, ge, qe) {
                this.url = d,
                this.params = a,
                this.queryParams = f,
                this.fragment = D,
                this.data = S,
                this.outlet = T,
                this.component = k,
                this.routeConfig = G,
                this._urlSegment = ve,
                this._lastPathIndex = ge,
                this._resolve = qe
            }
            get root() {
                return this._routerState.root
            }
            get parent() {
                return this._routerState.parent(this)
            }
            get firstChild() {
                return this._routerState.firstChild(this)
            }
            get children() {
                return this._routerState.children(this)
            }
            get pathFromRoot() {
                return this._routerState.pathFromRoot(this)
            }
            get paramMap() {
                return this._paramMap || (this._paramMap = wn(this.params)),
                this._paramMap
            }
            get queryParamMap() {
                return this._queryParamMap || (this._queryParamMap = wn(this.queryParams)),
                this._queryParamMap
            }
            toString() {
                return `Route(url:'${this.url.map(f=>f.toString()).join("/")}', path:'${this.routeConfig ? this.routeConfig.path : ""}')`
            }
        }
        class Ro extends jr {
            constructor(d, a) {
                super(a),
                this.url = d,
                Vr(this, a)
            }
            toString() {
                return zr(this._root)
            }
        }
        function Vr(c, d) {
            d.value._routerState = c,
            d.children.forEach(a=>Vr(c, a))
        }
        function zr(c) {
            const d = c.children.length > 0 ? ` { ${c.children.map(zr).join(", ")} } ` : "";
            return `${c.value}${d}`
        }
        function ho(c) {
            if (c.snapshot) {
                const d = c.snapshot
                  , a = c._futureSnapshot;
                c.snapshot = a,
                kn(d.queryParams, a.queryParams) || c.queryParams.next(a.queryParams),
                d.fragment !== a.fragment && c.fragment.next(a.fragment),
                kn(d.params, a.params) || c.params.next(a.params),
                function Yt(c, d) {
                    if (c.length !== d.length)
                        return !1;
                    for (let a = 0; a < c.length; ++a)
                        if (!kn(c[a], d[a]))
                            return !1;
                    return !0
                }(d.url, a.url) || c.url.next(a.url),
                kn(d.data, a.data) || c.data.next(a.data)
            } else
                c.snapshot = c._futureSnapshot,
                c.data.next(c._futureSnapshot.data)
        }
        function Ls(c, d) {
            const a = kn(c.params, d.params) && function co(c, d) {
                return ht(c, d) && c.every((a,f)=>kn(a.parameters, d[f].parameters))
            }(c.url, d.url);
            return a && !(!c.parent != !d.parent) && (!c.parent || Ls(c.parent, d.parent))
        }
        function Ar(c, d, a) {
            if (a && c.shouldReuseRoute(d.value, a.value.snapshot)) {
                const f = a.value;
                f._futureSnapshot = d.value;
                const D = function fs(c, d, a) {
                    return d.children.map(f=>{
                        for (const D of a.children)
                            if (c.shouldReuseRoute(f.value, D.value.snapshot))
                                return Ar(c, f, D);
                        return Ar(c, f)
                    }
                    )
                }(c, d, a);
                return new Ht(f,D)
            }
            {
                if (c.shouldAttach(d.value)) {
                    const S = c.retrieve(d.value);
                    if (null !== S) {
                        const T = S.route;
                        return T.value._futureSnapshot = d.value,
                        T.children = d.children.map(k=>Ar(c, k)),
                        T
                    }
                }
                const f = function hs(c) {
                    return new ir(new Q.X(c.url),new Q.X(c.params),new Q.X(c.queryParams),new Q.X(c.fragment),new Q.X(c.data),c.outlet,c.component,c)
                }(d.value)
                  , D = d.children.map(S=>Ar(c, S));
                return new Ht(f,D)
            }
        }
        const pi = "ngNavigationCancelingError";
        function ks(c, d) {
            const {redirectTo: a, navigationBehaviorOptions: f} = Cn(d) ? {
                redirectTo: d,
                navigationBehaviorOptions: void 0
            } : d
              , D = ps(!1, 0, d);
            return D.url = a,
            D.navigationBehaviorOptions = f,
            D
        }
        function ps(c, d, a) {
            const f = new Error("NavigationCancelingError: " + (c || ""));
            return f[pi] = !0,
            f.cancellationCode = d,
            a && (f.url = a),
            f
        }
        function yr(c) {
            return Hs(c) && Cn(c.url)
        }
        function Hs(c) {
            return c && c[pi]
        }
        class Bs {
            constructor() {
                this.outlet = null,
                this.route = null,
                this.resolver = null,
                this.injector = null,
                this.children = new Gr,
                this.attachRef = null
            }
        }
        let Gr = (()=>{
            class c {
                constructor() {
                    this.contexts = new Map
                }
                onChildOutletCreated(a, f) {
                    const D = this.getOrCreateContext(a);
                    D.outlet = f,
                    this.contexts.set(a, D)
                }
                onChildOutletDestroyed(a) {
                    const f = this.getContext(a);
                    f && (f.outlet = null,
                    f.attachRef = null)
                }
                onOutletDeactivated() {
                    const a = this.contexts;
                    return this.contexts = new Map,
                    a
                }
                onOutletReAttached(a) {
                    this.contexts = a
                }
                getOrCreateContext(a) {
                    let f = this.getContext(a);
                    return f || (f = new Bs,
                    this.contexts.set(a, f)),
                    f
                }
                getContext(a) {
                    return this.contexts.get(a) || null
                }
            }
            return c.\u0275fac = function(a) {
                return new (a || c)
            }
            ,
            c.\u0275prov = _.Yz7({
                token: c,
                factory: c.\u0275fac,
                providedIn: "root"
            }),
            c
        }
        )();
        const sr = !1;
        let Li = (()=>{
            class c {
                constructor() {
                    this.activated = null,
                    this._activatedRoute = null,
                    this.name = Le,
                    this.activateEvents = new _.vpe,
                    this.deactivateEvents = new _.vpe,
                    this.attachEvents = new _.vpe,
                    this.detachEvents = new _.vpe,
                    this.parentContexts = (0,
                    _.f3M)(Gr),
                    this.location = (0,
                    _.f3M)(_.s_b),
                    this.changeDetector = (0,
                    _.f3M)(_.sBO),
                    this.environmentInjector = (0,
                    _.f3M)(_.lqb)
                }
                ngOnChanges(a) {
                    if (a.name) {
                        const {firstChange: f, previousValue: D} = a.name;
                        if (f)
                            return;
                        this.isTrackedInParentContexts(D) && (this.deactivate(),
                        this.parentContexts.onChildOutletDestroyed(D)),
                        this.initializeOutletWithName()
                    }
                }
                ngOnDestroy() {
                    this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name)
                }
                isTrackedInParentContexts(a) {
                    return this.parentContexts.getContext(a)?.outlet === this
                }
                ngOnInit() {
                    this.initializeOutletWithName()
                }
                initializeOutletWithName() {
                    if (this.parentContexts.onChildOutletCreated(this.name, this),
                    this.activated)
                        return;
                    const a = this.parentContexts.getContext(this.name);
                    a?.route && (a.attachRef ? this.attach(a.attachRef, a.route) : this.activateWith(a.route, a.injector))
                }
                get isActivated() {
                    return !!this.activated
                }
                get component() {
                    if (!this.activated)
                        throw new _.vHH(4012,sr);
                    return this.activated.instance
                }
                get activatedRoute() {
                    if (!this.activated)
                        throw new _.vHH(4012,sr);
                    return this._activatedRoute
                }
                get activatedRouteData() {
                    return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
                }
                detach() {
                    if (!this.activated)
                        throw new _.vHH(4012,sr);
                    this.location.detach();
                    const a = this.activated;
                    return this.activated = null,
                    this._activatedRoute = null,
                    this.detachEvents.emit(a.instance),
                    a
                }
                attach(a, f) {
                    this.activated = a,
                    this._activatedRoute = f,
                    this.location.insert(a.hostView),
                    this.attachEvents.emit(a.instance)
                }
                deactivate() {
                    if (this.activated) {
                        const a = this.component;
                        this.activated.destroy(),
                        this.activated = null,
                        this._activatedRoute = null,
                        this.deactivateEvents.emit(a)
                    }
                }
                activateWith(a, f) {
                    if (this.isActivated)
                        throw new _.vHH(4013,sr);
                    this._activatedRoute = a;
                    const D = this.location
                      , T = a.snapshot.component
                      , k = this.parentContexts.getOrCreateContext(this.name).children
                      , G = new No(a,k,D.injector);
                    if (f && function Fo(c) {
                        return !!c.resolveComponentFactory
                    }(f)) {
                        const ve = f.resolveComponentFactory(T);
                        this.activated = D.createComponent(ve, D.length, G)
                    } else
                        this.activated = D.createComponent(T, {
                            index: D.length,
                            injector: G,
                            environmentInjector: f ?? this.environmentInjector
                        });
                    this.changeDetector.markForCheck(),
                    this.activateEvents.emit(this.activated.instance)
                }
            }
            return c.\u0275fac = function(a) {
                return new (a || c)
            }
            ,
            c.\u0275dir = _.lG2({
                type: c,
                selectors: [["router-outlet"]],
                inputs: {
                    name: "name"
                },
                outputs: {
                    activateEvents: "activate",
                    deactivateEvents: "deactivate",
                    attachEvents: "attach",
                    detachEvents: "detach"
                },
                exportAs: ["outlet"],
                standalone: !0,
                features: [_.TTD]
            }),
            c
        }
        )();
        class No {
            constructor(d, a, f) {
                this.route = d,
                this.childContexts = a,
                this.parent = f
            }
            get(d, a) {
                return d === ir ? this.route : d === Gr ? this.childContexts : this.parent.get(d, a)
            }
        }
        let on = (()=>{
            class c {
            }
            return c.\u0275fac = function(a) {
                return new (a || c)
            }
            ,
            c.\u0275cmp = _.Xpm({
                type: c,
                selectors: [["ng-component"]],
                standalone: !0,
                features: [_.jDz],
                decls: 1,
                vars: 0,
                template: function(a, f) {
                    1 & a && _._UZ(0, "router-outlet")
                },
                dependencies: [Li],
                encapsulation: 2
            }),
            c
        }
        )();
        function Us(c, d) {
            return c.providers && !c._injector && (c._injector = (0,
            _.MMx)(c.providers, d, `Route: ${c.path}`)),
            c._injector ?? d
        }
        function Kr(c) {
            const d = c.children && c.children.map(Kr)
              , a = d ? {
                ...c,
                children: d
            } : {
                ...c
            };
            return !a.component && !a.loadComponent && (d || a.loadChildren) && a.outlet && a.outlet !== Le && (a.component = on),
            a
        }
        function Lt(c) {
            return c.outlet || Le
        }
        function Bi(c, d) {
            const a = c.filter(f=>Lt(f) === d);
            return a.push(...c.filter(f=>Lt(f) !== d)),
            a
        }
        function Yr(c) {
            if (!c)
                return null;
            if (c.routeConfig?._injector)
                return c.routeConfig._injector;
            for (let d = c.parent; d; d = d.parent) {
                const a = d.routeConfig;
                if (a?._loadedInjector)
                    return a._loadedInjector;
                if (a?._injector)
                    return a._injector
            }
            return null
        }
        class po {
            constructor(d, a, f, D) {
                this.routeReuseStrategy = d,
                this.futureState = a,
                this.currState = f,
                this.forwardEvent = D
            }
            activate(d) {
                const a = this.futureState._root
                  , f = this.currState ? this.currState._root : null;
                this.deactivateChildRoutes(a, f, d),
                ho(this.futureState.root),
                this.activateChildRoutes(a, f, d)
            }
            deactivateChildRoutes(d, a, f) {
                const D = fi(a);
                d.children.forEach(S=>{
                    const T = S.value.outlet;
                    this.deactivateRoutes(S, D[T], f),
                    delete D[T]
                }
                ),
                Wt(D, (S,T)=>{
                    this.deactivateRouteAndItsChildren(S, f)
                }
                )
            }
            deactivateRoutes(d, a, f) {
                const D = d.value
                  , S = a ? a.value : null;
                if (D === S)
                    if (D.component) {
                        const T = f.getContext(D.outlet);
                        T && this.deactivateChildRoutes(d, a, T.children)
                    } else
                        this.deactivateChildRoutes(d, a, f);
                else
                    S && this.deactivateRouteAndItsChildren(a, f)
            }
            deactivateRouteAndItsChildren(d, a) {
                d.value.component && this.routeReuseStrategy.shouldDetach(d.value.snapshot) ? this.detachAndStoreRouteSubtree(d, a) : this.deactivateRouteAndOutlet(d, a)
            }
            detachAndStoreRouteSubtree(d, a) {
                const f = a.getContext(d.value.outlet)
                  , D = f && d.value.component ? f.children : a
                  , S = fi(d);
                for (const T of Object.keys(S))
                    this.deactivateRouteAndItsChildren(S[T], D);
                if (f && f.outlet) {
                    const T = f.outlet.detach()
                      , k = f.children.onOutletDeactivated();
                    this.routeReuseStrategy.store(d.value.snapshot, {
                        componentRef: T,
                        route: d,
                        contexts: k
                    })
                }
            }
            deactivateRouteAndOutlet(d, a) {
                const f = a.getContext(d.value.outlet)
                  , D = f && d.value.component ? f.children : a
                  , S = fi(d);
                for (const T of Object.keys(S))
                    this.deactivateRouteAndItsChildren(S[T], D);
                f && (f.outlet && (f.outlet.deactivate(),
                f.children.onOutletDeactivated()),
                f.attachRef = null,
                f.resolver = null,
                f.route = null)
            }
            activateChildRoutes(d, a, f) {
                const D = fi(a);
                d.children.forEach(S=>{
                    this.activateRoutes(S, D[S.value.outlet], f),
                    this.forwardEvent(new Bn(S.value.snapshot))
                }
                ),
                d.children.length && this.forwardEvent(new Mr(d.value.snapshot))
            }
            activateRoutes(d, a, f) {
                const D = d.value
                  , S = a ? a.value : null;
                if (ho(D),
                D === S)
                    if (D.component) {
                        const T = f.getOrCreateContext(D.outlet);
                        this.activateChildRoutes(d, a, T.children)
                    } else
                        this.activateChildRoutes(d, a, f);
                else if (D.component) {
                    const T = f.getOrCreateContext(D.outlet);
                    if (this.routeReuseStrategy.shouldAttach(D.snapshot)) {
                        const k = this.routeReuseStrategy.retrieve(D.snapshot);
                        this.routeReuseStrategy.store(D.snapshot, null),
                        T.children.onOutletReAttached(k.contexts),
                        T.attachRef = k.componentRef,
                        T.route = k.route.value,
                        T.outlet && T.outlet.attach(k.componentRef, k.route.value),
                        ho(k.route.value),
                        this.activateChildRoutes(d, null, T.children)
                    } else {
                        const k = Yr(D.snapshot)
                          , G = k?.get(_._Vd) ?? null;
                        T.attachRef = null,
                        T.route = D,
                        T.resolver = G,
                        T.injector = k,
                        T.outlet && T.outlet.activateWith(D, T.injector),
                        this.activateChildRoutes(d, null, T.children)
                    }
                } else
                    this.activateChildRoutes(d, null, f)
            }
        }
        class tn {
            constructor(d) {
                this.path = d,
                this.route = this.path[this.path.length - 1]
            }
        }
        class an {
            constructor(d, a) {
                this.component = d,
                this.route = a
            }
        }
        function Ui(c, d, a) {
            const f = c._root;
            return qt(f, d ? d._root : null, a, [f.value])
        }
        function Un(c, d) {
            const a = Symbol()
              , f = d.get(c, a);
            return f === a ? "function" != typeof c || (0,
            _.Z0I)(c) ? d.get(c) : c : f
        }
        function qt(c, d, a, f, D={
            canDeactivateChecks: [],
            canActivateChecks: []
        }) {
            const S = fi(d);
            return c.children.forEach(T=>{
                (function xo(c, d, a, f, D={
                    canDeactivateChecks: [],
                    canActivateChecks: []
                }) {
                    const S = c.value
                      , T = d ? d.value : null
                      , k = a ? a.getContext(c.value.outlet) : null;
                    if (T && S.routeConfig === T.routeConfig) {
                        const G = function gs(c, d, a) {
                            if ("function" == typeof a)
                                return a(c, d);
                            switch (a) {
                            case "pathParamsChange":
                                return !ht(c.url, d.url);
                            case "pathParamsOrQueryParamsChange":
                                return !ht(c.url, d.url) || !kn(c.queryParams, d.queryParams);
                            case "always":
                                return !0;
                            case "paramsOrQueryParamsChange":
                                return !Ls(c, d) || !kn(c.queryParams, d.queryParams);
                            default:
                                return !Ls(c, d)
                            }
                        }(T, S, S.routeConfig.runGuardsAndResolvers);
                        G ? D.canActivateChecks.push(new tn(f)) : (S.data = T.data,
                        S._resolvedData = T._resolvedData),
                        qt(c, d, S.component ? k ? k.children : null : a, f, D),
                        G && k && k.outlet && k.outlet.isActivated && D.canDeactivateChecks.push(new an(k.outlet.component,T))
                    } else
                        T && ji(d, k, D),
                        D.canActivateChecks.push(new tn(f)),
                        qt(c, null, S.component ? k ? k.children : null : a, f, D)
                }
                )(T, S[T.value.outlet], a, f.concat([T.value]), D),
                delete S[T.value.outlet]
            }
            ),
            Wt(S, (T,k)=>ji(T, a.getContext(k), D)),
            D
        }
        function ji(c, d, a) {
            const f = fi(c)
              , D = c.value;
            Wt(f, (S,T)=>{
                ji(S, D.component ? d ? d.children.getContext(T) : null : d, a)
            }
            ),
            a.canDeactivateChecks.push(new an(D.component && d && d.outlet && d.outlet.isActivated ? d.outlet.component : null,D))
        }
        function gn(c) {
            return "function" == typeof c
        }
        function yi(c) {
            return c instanceof me || "EmptyError" === c?.name
        }
        const $i = Symbol("INITIAL_VALUE");
        function Qr() {
            return (0,
            Ne.w)(c=>(0,
            De.a)(c.map(d=>d.pipe((0,
            ot.q)(1), (0,
            re.O)($i)))).pipe((0,
            J.U)(d=>{
                for (const a of d)
                    if (!0 !== a) {
                        if (a === $i)
                            return $i;
                        if (!1 === a || a instanceof ct)
                            return a
                    }
                return !0
            }
            ), (0,
            Ee.h)(d=>d !== $i), (0,
            ot.q)(1)))
        }
        function ms(c) {
            return (0,
            be.z)(ne(d=>{
                if (Cn(d))
                    throw ks(0, d)
            }
            ), (0,
            J.U)(d=>!0 === d))
        }
        const ys = {
            matched: !1,
            consumedSegments: [],
            remainingSegments: [],
            parameters: {},
            positionalParamSegments: {}
        };
        function Ks(c, d, a, f, D) {
            const S = un(c, d, a);
            return S.matched ? function Ws(c, d, a, f) {
                const D = d.canMatch;
                if (!D || 0 === D.length)
                    return (0,
                    O.of)(!0);
                const S = D.map(T=>{
                    const k = Un(T, c);
                    return Rn(function go(c) {
                        return c && gn(c.canMatch)
                    }(k) ? k.canMatch(d, a) : c.runInContext(()=>k(d, a)))
                }
                );
                return (0,
                O.of)(S).pipe(Qr(), ms())
            }(f = Us(d, f), d, a).pipe((0,
            J.U)(T=>!0 === T ? S : {
                ...ys
            })) : (0,
            O.of)(S)
        }
        function un(c, d, a) {
            if ("" === d.path)
                return "full" === d.pathMatch && (c.hasChildren() || a.length > 0) ? {
                    ...ys
                } : {
                    matched: !0,
                    consumedSegments: [],
                    remainingSegments: a,
                    parameters: {},
                    positionalParamSegments: {}
                };
            const D = (d.matcher || Ii)(a, c, d);
            if (!D)
                return {
                    ...ys
                };
            const S = {};
            Wt(D.posParams, (k,G)=>{
                S[G] = k.path
            }
            );
            const T = D.consumed.length > 0 ? {
                ...S,
                ...D.consumed[D.consumed.length - 1].parameters
            } : S;
            return {
                matched: !0,
                consumedSegments: D.consumed,
                remainingSegments: a.slice(D.consumed.length),
                parameters: T,
                positionalParamSegments: D.posParams ?? {}
            }
        }
        function vn(c, d, a, f) {
            if (a.length > 0 && function Qn(c, d, a) {
                return a.some(f=>Vi(c, d, f) && Lt(f) !== Le)
            }(c, a, f)) {
                const S = new at(d,function Dr(c, d, a, f) {
                    const D = {};
                    D[Le] = f,
                    f._sourceSegment = c,
                    f._segmentIndexShift = d.length;
                    for (const S of a)
                        if ("" === S.path && Lt(S) !== Le) {
                            const T = new at([],{});
                            T._sourceSegment = c,
                            T._segmentIndexShift = d.length,
                            D[Lt(S)] = T
                        }
                    return D
                }(c, d, f, new at(a,c.children)));
                return S._sourceSegment = c,
                S._segmentIndexShift = d.length,
                {
                    segmentGroup: S,
                    slicedSegments: []
                }
            }
            if (0 === a.length && function Ds(c, d, a) {
                return a.some(f=>Vi(c, d, f))
            }(c, a, f)) {
                const S = new at(c.segments,function vs(c, d, a, f, D) {
                    const S = {};
                    for (const T of f)
                        if (Vi(c, a, T) && !D[Lt(T)]) {
                            const k = new at([],{});
                            k._sourceSegment = c,
                            k._segmentIndexShift = d.length,
                            S[Lt(T)] = k
                        }
                    return {
                        ...D,
                        ...S
                    }
                }(c, d, a, f, c.children));
                return S._sourceSegment = c,
                S._segmentIndexShift = d.length,
                {
                    segmentGroup: S,
                    slicedSegments: a
                }
            }
            const D = new at(c.segments,c.children);
            return D._sourceSegment = c,
            D._segmentIndexShift = d.length,
            {
                segmentGroup: D,
                slicedSegments: a
            }
        }
        function Vi(c, d, a) {
            return (!(c.hasChildren() || d.length > 0) || "full" !== a.pathMatch) && "" === a.path
        }
        function Ys(c, d, a, f) {
            return !!(Lt(c) === f || f !== Le && Vi(d, a, c)) && ("**" === c.path || un(d, c, a).matched)
        }
        function mo(c, d, a) {
            return 0 === d.length && !c.children[a]
        }
        const zi = !1;
        class Rr {
            constructor(d) {
                this.segmentGroup = d || null
            }
        }
        class yo {
            constructor(d) {
                this.urlTree = d
            }
        }
        function qr(c) {
            return (0,
            Ze._)(new Rr(c))
        }
        function Qs(c) {
            return (0,
            Ze._)(new yo(c))
        }
        class Bo {
            constructor(d, a, f, D, S) {
                this.injector = d,
                this.configLoader = a,
                this.urlSerializer = f,
                this.urlTree = D,
                this.config = S,
                this.allowRedirects = !0
            }
            apply() {
                const d = vn(this.urlTree.root, [], [], this.config).segmentGroup
                  , a = new at(d.segments,d.children);
                return this.expandSegmentGroup(this.injector, this.config, a, Le).pipe((0,
                J.U)(S=>this.createUrlTree(Tt(S), this.urlTree.queryParams, this.urlTree.fragment))).pipe((0,
                we.K)(S=>{
                    if (S instanceof yo)
                        return this.allowRedirects = !1,
                        this.match(S.urlTree);
                    throw S instanceof Rr ? this.noMatchError(S) : S
                }
                ))
            }
            match(d) {
                return this.expandSegmentGroup(this.injector, this.config, d.root, Le).pipe((0,
                J.U)(D=>this.createUrlTree(Tt(D), d.queryParams, d.fragment))).pipe((0,
                we.K)(D=>{
                    throw D instanceof Rr ? this.noMatchError(D) : D
                }
                ))
            }
            noMatchError(d) {
                return new _.vHH(4002,zi)
            }
            createUrlTree(d, a, f) {
                const D = ke(d);
                return new ct(D,a,f)
            }
            expandSegmentGroup(d, a, f, D) {
                return 0 === f.segments.length && f.hasChildren() ? this.expandChildren(d, a, f).pipe((0,
                J.U)(S=>new at([],S))) : this.expandSegment(d, f, a, f.segments, D, !0)
            }
            expandChildren(d, a, f) {
                const D = [];
                for (const S of Object.keys(f.children))
                    "primary" === S ? D.unshift(S) : D.push(S);
                return (0,
                L.D)(D).pipe((0,
                K.b)(S=>{
                    const T = f.children[S]
                      , k = Bi(a, S);
                    return this.expandSegmentGroup(d, k, T, S).pipe((0,
                    J.U)(G=>({
                        segment: G,
                        outlet: S
                    })))
                }
                ), Ke((S,T)=>(S[T.outlet] = T.segment,
                S), {}), $t())
            }
            expandSegment(d, a, f, D, S, T) {
                return (0,
                L.D)(f).pipe((0,
                K.b)(k=>this.expandSegmentAgainstRoute(d, a, f, k, D, S, T).pipe((0,
                we.K)(ve=>{
                    if (ve instanceof Rr)
                        return (0,
                        O.of)(null);
                    throw ve
                }
                ))), Y(k=>!!k), (0,
                we.K)((k,G)=>{
                    if (yi(k))
                        return mo(a, D, S) ? (0,
                        O.of)(new at([],{})) : qr(a);
                    throw k
                }
                ))
            }
            expandSegmentAgainstRoute(d, a, f, D, S, T, k) {
                return Ys(D, a, S, T) ? void 0 === D.redirectTo ? this.matchSegmentAgainstRoute(d, a, D, S, T) : k && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(d, a, f, D, S, T) : qr(a) : qr(a)
            }
            expandSegmentAgainstRouteUsingRedirect(d, a, f, D, S, T) {
                return "**" === D.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(d, f, D, T) : this.expandRegularSegmentAgainstRouteUsingRedirect(d, a, f, D, S, T)
            }
            expandWildCardWithParamsAgainstRouteUsingRedirect(d, a, f, D) {
                const S = this.applyRedirectCommands([], f.redirectTo, {});
                return f.redirectTo.startsWith("/") ? Qs(S) : this.lineralizeSegments(f, S).pipe((0,
                se.z)(T=>{
                    const k = new at(T,{});
                    return this.expandSegment(d, k, a, T, D, !1)
                }
                ))
            }
            expandRegularSegmentAgainstRouteUsingRedirect(d, a, f, D, S, T) {
                const {matched: k, consumedSegments: G, remainingSegments: ve, positionalParamSegments: ge} = un(a, D, S);
                if (!k)
                    return qr(a);
                const qe = this.applyRedirectCommands(G, D.redirectTo, ge);
                return D.redirectTo.startsWith("/") ? Qs(qe) : this.lineralizeSegments(D, qe).pipe((0,
                se.z)(Ct=>this.expandSegment(d, a, f, Ct.concat(ve), T, !1)))
            }
            matchSegmentAgainstRoute(d, a, f, D, S) {
                return "**" === f.path ? (d = Us(f, d),
                f.loadChildren ? (f._loadedRoutes ? (0,
                O.of)({
                    routes: f._loadedRoutes,
                    injector: f._loadedInjector
                }) : this.configLoader.loadChildren(d, f)).pipe((0,
                J.U)(k=>(f._loadedRoutes = k.routes,
                f._loadedInjector = k.injector,
                new at(D,{})))) : (0,
                O.of)(new at(D,{}))) : Ks(a, f, D, d).pipe((0,
                Ne.w)(({matched: T, consumedSegments: k, remainingSegments: G})=>T ? this.getChildConfig(d = f._injector ?? d, f, D).pipe((0,
                se.z)(ge=>{
                    const qe = ge.injector ?? d
                      , Ct = ge.routes
                      , {segmentGroup: In, slicedSegments: cn} = vn(a, k, G, Ct)
                      , ei = new at(In.segments,In.children);
                    if (0 === cn.length && ei.hasChildren())
                        return this.expandChildren(qe, Ct, ei).pipe((0,
                        J.U)(qo=>new at(k,qo)));
                    if (0 === Ct.length && 0 === cn.length)
                        return (0,
                        O.of)(new at(k,{}));
                    const Mn = Lt(f) === S;
                    return this.expandSegment(qe, ei, Ct, cn, Mn ? Le : S, !0).pipe((0,
                    J.U)(so=>new at(k.concat(so.segments),so.children)))
                }
                )) : qr(a)))
            }
            getChildConfig(d, a, f) {
                return a.children ? (0,
                O.of)({
                    routes: a.children,
                    injector: d
                }) : a.loadChildren ? void 0 !== a._loadedRoutes ? (0,
                O.of)({
                    routes: a._loadedRoutes,
                    injector: a._loadedInjector
                }) : function vi(c, d, a, f) {
                    const D = d.canLoad;
                    if (void 0 === D || 0 === D.length)
                        return (0,
                        O.of)(!0);
                    const S = D.map(T=>{
                        const k = Un(T, c);
                        return Rn(function Vs(c) {
                            return c && gn(c.canLoad)
                        }(k) ? k.canLoad(d, a) : c.runInContext(()=>k(d, a)))
                    }
                    );
                    return (0,
                    O.of)(S).pipe(Qr(), ms())
                }(d, a, f).pipe((0,
                se.z)(D=>D ? this.configLoader.loadChildren(d, a).pipe(ne(S=>{
                    a._loadedRoutes = S.routes,
                    a._loadedInjector = S.injector
                }
                )) : function Di(c) {
                    return (0,
                    Ze._)(ps(zi, 3))
                }())) : (0,
                O.of)({
                    routes: [],
                    injector: d
                })
            }
            lineralizeSegments(d, a) {
                let f = []
                  , D = a.root;
                for (; ; ) {
                    if (f = f.concat(D.segments),
                    0 === D.numberOfChildren)
                        return (0,
                        O.of)(f);
                    if (D.numberOfChildren > 1 || !D.children[Le])
                        return d.redirectTo,
                        (0,
                        Ze._)(new _.vHH(4e3,zi));
                    D = D.children[Le]
                }
            }
            applyRedirectCommands(d, a, f) {
                return this.applyRedirectCreateUrlTree(a, this.urlSerializer.parse(a), d, f)
            }
            applyRedirectCreateUrlTree(d, a, f, D) {
                const S = this.createSegmentGroup(d, a.root, f, D);
                return new ct(S,this.createQueryParams(a.queryParams, this.urlTree.queryParams),a.fragment)
            }
            createQueryParams(d, a) {
                const f = {};
                return Wt(d, (D,S)=>{
                    if ("string" == typeof D && D.startsWith(":")) {
                        const k = D.substring(1);
                        f[S] = a[k]
                    } else
                        f[S] = D
                }
                ),
                f
            }
            createSegmentGroup(d, a, f, D) {
                const S = this.createSegments(d, a.segments, f, D);
                let T = {};
                return Wt(a.children, (k,G)=>{
                    T[G] = this.createSegmentGroup(d, k, f, D)
                }
                ),
                new at(S,T)
            }
            createSegments(d, a, f, D) {
                return a.map(S=>S.path.startsWith(":") ? this.findPosParam(d, S, D) : this.findOrReturn(S, f))
            }
            findPosParam(d, a, f) {
                const D = f[a.path.substring(1)];
                if (!D)
                    throw new _.vHH(4001,zi);
                return D
            }
            findOrReturn(d, a) {
                let f = 0;
                for (const D of a) {
                    if (D.path === d.path)
                        return a.splice(f),
                        D;
                    f++
                }
                return d
            }
        }
        class Zs {
        }
        class Dn {
            constructor(d, a, f, D, S, T, k) {
                this.injector = d,
                this.rootComponentType = a,
                this.config = f,
                this.urlTree = D,
                this.url = S,
                this.paramsInheritanceStrategy = T,
                this.urlSerializer = k
            }
            recognize() {
                const d = vn(this.urlTree.root, [], [], this.config.filter(a=>void 0 === a.redirectTo)).segmentGroup;
                return this.processSegmentGroup(this.injector, this.config, d, Le).pipe((0,
                J.U)(a=>{
                    if (null === a)
                        return null;
                    const f = new hi([],Object.freeze({}),Object.freeze({
                        ...this.urlTree.queryParams
                    }),this.urlTree.fragment,{},Le,this.rootComponentType,null,this.urlTree.root,-1,{})
                      , D = new Ht(f,a)
                      , S = new Ro(this.url,D);
                    return this.inheritParamsAndData(S._root),
                    S
                }
                ))
            }
            inheritParamsAndData(d) {
                const a = d.value
                  , f = $r(a, this.paramsInheritanceStrategy);
                a.params = Object.freeze(f.params),
                a.data = Object.freeze(f.data),
                d.children.forEach(D=>this.inheritParamsAndData(D))
            }
            processSegmentGroup(d, a, f, D) {
                return 0 === f.segments.length && f.hasChildren() ? this.processChildren(d, a, f) : this.processSegment(d, a, f, f.segments, D)
            }
            processChildren(d, a, f) {
                return (0,
                L.D)(Object.keys(f.children)).pipe((0,
                K.b)(D=>{
                    const S = f.children[D]
                      , T = Bi(a, D);
                    return this.processSegmentGroup(d, T, S, D)
                }
                ), Ke((D,S)=>D && S ? (D.push(...S),
                D) : null), function Ye(c, d=!1) {
                    return (0,
                    Oe.e)((a,f)=>{
                        let D = 0;
                        a.subscribe((0,
                        Je.x)(f, S=>{
                            const T = c(S, D++);
                            (T || d) && f.next(S),
                            !T && f.complete()
                        }
                        ))
                    }
                    )
                }(D=>null !== D), le(null), $t(), (0,
                J.U)(D=>{
                    if (null === D)
                        return null;
                    const S = g(D);
                    return function Or(c) {
                        c.sort((d,a)=>d.value.outlet === Le ? -1 : a.value.outlet === Le ? 1 : d.value.outlet.localeCompare(a.value.outlet))
                    }(S),
                    S
                }
                ))
            }
            processSegment(d, a, f, D, S) {
                return (0,
                L.D)(a).pipe((0,
                K.b)(T=>this.processSegmentAgainstRoute(T._injector ?? d, T, f, D, S)), Y(T=>!!T), (0,
                we.K)(T=>{
                    if (yi(T))
                        return mo(f, D, S) ? (0,
                        O.of)([]) : (0,
                        O.of)(null);
                    throw T
                }
                ))
            }
            processSegmentAgainstRoute(d, a, f, D, S) {
                if (a.redirectTo || !Ys(a, f, D, S))
                    return (0,
                    O.of)(null);
                let T;
                if ("**" === a.path) {
                    const k = D.length > 0 ? dr(D).parameters : {}
                      , G = b(f) + D.length
                      , ve = new hi(D,k,Object.freeze({
                        ...this.urlTree.queryParams
                    }),this.urlTree.fragment,W(a),Lt(a),a.component ?? a._loadedComponent ?? null,a,y(f),G,te(a));
                    T = (0,
                    O.of)({
                        snapshot: ve,
                        consumedSegments: [],
                        remainingSegments: []
                    })
                } else
                    T = Ks(f, a, D, d).pipe((0,
                    J.U)(({matched: k, consumedSegments: G, remainingSegments: ve, parameters: ge})=>{
                        if (!k)
                            return null;
                        const qe = b(f) + G.length;
                        return {
                            snapshot: new hi(G,ge,Object.freeze({
                                ...this.urlTree.queryParams
                            }),this.urlTree.fragment,W(a),Lt(a),a.component ?? a._loadedComponent ?? null,a,y(f),qe,te(a)),
                            consumedSegments: G,
                            remainingSegments: ve
                        }
                    }
                    ));
                return T.pipe((0,
                Ne.w)(k=>{
                    if (null === k)
                        return (0,
                        O.of)(null);
                    const {snapshot: G, consumedSegments: ve, remainingSegments: ge} = k;
                    d = a._injector ?? d;
                    const qe = a._loadedInjector ?? d
                      , Ct = function Bt(c) {
                        return c.children ? c.children : c.loadChildren ? c._loadedRoutes : []
                    }(a)
                      , {segmentGroup: In, slicedSegments: cn} = vn(f, ve, ge, Ct.filter(Mn=>void 0 === Mn.redirectTo));
                    if (0 === cn.length && In.hasChildren())
                        return this.processChildren(qe, Ct, In).pipe((0,
                        J.U)(Mn=>null === Mn ? null : [new Ht(G,Mn)]));
                    if (0 === Ct.length && 0 === cn.length)
                        return (0,
                        O.of)([new Ht(G,[])]);
                    const ei = Lt(a) === S;
                    return this.processSegment(qe, Ct, In, cn, ei ? Le : S).pipe((0,
                    J.U)(Mn=>null === Mn ? null : [new Ht(G,Mn)]))
                }
                ))
            }
        }
        function $o(c) {
            const d = c.value.routeConfig;
            return d && "" === d.path && void 0 === d.redirectTo
        }
        function g(c) {
            const d = []
              , a = new Set;
            for (const f of c) {
                if (!$o(f)) {
                    d.push(f);
                    continue
                }
                const D = d.find(S=>f.value.routeConfig === S.value.routeConfig);
                void 0 !== D ? (D.children.push(...f.children),
                a.add(D)) : d.push(f)
            }
            for (const f of a) {
                const D = g(f.children);
                d.push(new Ht(f.value,D))
            }
            return d.filter(f=>!a.has(f))
        }
        function y(c) {
            let d = c;
            for (; d._sourceSegment; )
                d = d._sourceSegment;
            return d
        }
        function b(c) {
            let d = c
              , a = d._segmentIndexShift ?? 0;
            for (; d._sourceSegment; )
                d = d._sourceSegment,
                a += d._segmentIndexShift ?? 0;
            return a - 1
        }
        function W(c) {
            return c.data || {}
        }
        function te(c) {
            return c.resolve || {}
        }
        function Mt(c) {
            return "string" == typeof c.title || null === c.title
        }
        function Xt(c) {
            return (0,
            Ne.w)(d=>{
                const a = c(d);
                return a ? (0,
                L.D)(a).pipe((0,
                J.U)(()=>d)) : (0,
                O.of)(d)
            }
            )
        }
        const En = new _.OlP("ROUTES");
        let lr = (()=>{
            class c {
                constructor() {
                    this.componentLoaders = new WeakMap,
                    this.childrenLoaders = new WeakMap,
                    this.compiler = (0,
                    _.f3M)(_.Sil)
                }
                loadComponent(a) {
                    if (this.componentLoaders.get(a))
                        return this.componentLoaders.get(a);
                    if (a._loadedComponent)
                        return (0,
                        O.of)(a._loadedComponent);
                    this.onLoadStartListener && this.onLoadStartListener(a);
                    const f = Rn(a.loadComponent()).pipe((0,
                    J.U)(Gi), ne(S=>{
                        this.onLoadEndListener && this.onLoadEndListener(a),
                        a._loadedComponent = S
                    }
                    ), vt(()=>{
                        this.componentLoaders.delete(a)
                    }
                    ))
                      , D = new We(f,()=>new _e.x).pipe(Be());
                    return this.componentLoaders.set(a, D),
                    D
                }
                loadChildren(a, f) {
                    if (this.childrenLoaders.get(f))
                        return this.childrenLoaders.get(f);
                    if (f._loadedRoutes)
                        return (0,
                        O.of)({
                            routes: f._loadedRoutes,
                            injector: f._loadedInjector
                        });
                    this.onLoadStartListener && this.onLoadStartListener(f);
                    const S = this.loadModuleFactoryOrRoutes(f.loadChildren).pipe((0,
                    J.U)(k=>{
                        this.onLoadEndListener && this.onLoadEndListener(f);
                        let G, ve, ge = !1;
                        Array.isArray(k) ? ve = k : (G = k.create(a).injector,
                        ve = Gt(G.get(En, [], _.XFs.Self | _.XFs.Optional)));
                        return {
                            routes: ve.map(Kr),
                            injector: G
                        }
                    }
                    ), vt(()=>{
                        this.childrenLoaders.delete(f)
                    }
                    ))
                      , T = new We(S,()=>new _e.x).pipe(Be());
                    return this.childrenLoaders.set(f, T),
                    T
                }
                loadModuleFactoryOrRoutes(a) {
                    return Rn(a()).pipe((0,
                    J.U)(Gi), (0,
                    se.z)(f=>f instanceof _.YKP || Array.isArray(f) ? (0,
                    O.of)(f) : (0,
                    L.D)(this.compiler.compileModuleAsync(f))))
                }
            }
            return c.\u0275fac = function(a) {
                return new (a || c)
            }
            ,
            c.\u0275prov = _.Yz7({
                token: c,
                factory: c.\u0275fac,
                providedIn: "root"
            }),
            c
        }
        )();
        function Gi(c) {
            return function jn(c) {
                return c && "object" == typeof c && "default"in c
            }(c) ? c.default : c
        }
        let Er = (()=>{
            class c {
                get hasRequestedNavigation() {
                    return 0 !== this.navigationId
                }
                constructor() {
                    this.currentNavigation = null,
                    this.lastSuccessfulNavigation = null,
                    this.events = new _e.x,
                    this.configLoader = (0,
                    _.f3M)(lr),
                    this.environmentInjector = (0,
                    _.f3M)(_.lqb),
                    this.urlSerializer = (0,
                    _.f3M)(On),
                    this.rootContexts = (0,
                    _.f3M)(Gr),
                    this.navigationId = 0,
                    this.afterPreactivation = ()=>(0,
                    O.of)(void 0),
                    this.rootComponentType = null,
                    this.configLoader.onLoadEndListener = D=>this.events.next(new rn(D)),
                    this.configLoader.onLoadStartListener = D=>this.events.next(new fo(D))
                }
                complete() {
                    this.transitions?.complete()
                }
                handleNavigationRequest(a) {
                    const f = ++this.navigationId;
                    this.transitions?.next({
                        ...this.transitions.value,
                        ...a,
                        id: f
                    })
                }
                setupNavigations(a) {
                    return this.transitions = new Q.X({
                        id: 0,
                        targetPageId: 0,
                        currentUrlTree: a.currentUrlTree,
                        currentRawUrl: a.currentUrlTree,
                        extractedUrl: a.urlHandlingStrategy.extract(a.currentUrlTree),
                        urlAfterRedirects: a.urlHandlingStrategy.extract(a.currentUrlTree),
                        rawUrl: a.currentUrlTree,
                        extras: {},
                        resolve: null,
                        reject: null,
                        promise: Promise.resolve(!0),
                        source: et,
                        restoredState: null,
                        currentSnapshot: a.routerState.snapshot,
                        targetSnapshot: null,
                        currentRouterState: a.routerState,
                        targetRouterState: null,
                        guards: {
                            canActivateChecks: [],
                            canDeactivateChecks: []
                        },
                        guardsResult: null
                    }),
                    this.transitions.pipe((0,
                    Ee.h)(f=>0 !== f.id), (0,
                    J.U)(f=>({
                        ...f,
                        extractedUrl: a.urlHandlingStrategy.extract(f.rawUrl)
                    })), (0,
                    Ne.w)(f=>{
                        let D = !1
                          , S = !1;
                        return (0,
                        O.of)(f).pipe(ne(T=>{
                            this.currentNavigation = {
                                id: T.id,
                                initialUrl: T.rawUrl,
                                extractedUrl: T.extractedUrl,
                                trigger: T.source,
                                extras: T.extras,
                                previousNavigation: this.lastSuccessfulNavigation ? {
                                    ...this.lastSuccessfulNavigation,
                                    previousNavigation: null
                                } : null
                            }
                        }
                        ), (0,
                        Ne.w)(T=>{
                            const k = a.browserUrlTree.toString()
                              , G = !a.navigated || T.extractedUrl.toString() !== k || k !== a.currentUrlTree.toString();
                            if (!G && "reload" !== (T.extras.onSameUrlNavigation ?? a.onSameUrlNavigation)) {
                                const ge = "";
                                return this.events.next(new nr(T.id,a.serializeUrl(f.rawUrl),ge,0)),
                                a.rawUrlTree = T.rawUrl,
                                T.resolve(null),
                                fe.E
                            }
                            if (a.urlHandlingStrategy.shouldProcessUrl(T.rawUrl))
                                return Js(T.source) && (a.browserUrlTree = T.extractedUrl),
                                (0,
                                O.of)(T).pipe((0,
                                Ne.w)(ge=>{
                                    const qe = this.transitions?.getValue();
                                    return this.events.next(new yn(ge.id,this.urlSerializer.serialize(ge.extractedUrl),ge.source,ge.restoredState)),
                                    qe !== this.transitions?.getValue() ? fe.E : Promise.resolve(ge)
                                }
                                ), function vo(c, d, a, f) {
                                    return (0,
                                    Ne.w)(D=>function Es(c, d, a, f, D) {
                                        return new Bo(c,d,a,f,D).apply()
                                    }(c, d, a, D.extractedUrl, f).pipe((0,
                                    J.U)(S=>({
                                        ...D,
                                        urlAfterRedirects: S
                                    }))))
                                }(this.environmentInjector, this.configLoader, this.urlSerializer, a.config), ne(ge=>{
                                    this.currentNavigation = {
                                        ...this.currentNavigation,
                                        finalUrl: ge.urlAfterRedirects
                                    },
                                    f.urlAfterRedirects = ge.urlAfterRedirects
                                }
                                ), function Re(c, d, a, f, D) {
                                    return (0,
                                    se.z)(S=>function jo(c, d, a, f, D, S, T="emptyOnly") {
                                        return new Dn(c,d,a,f,D,T,S).recognize().pipe((0,
                                        Ne.w)(k=>null === k ? function Uo(c) {
                                            return new Ce.y(d=>d.error(c))
                                        }(new Zs) : (0,
                                        O.of)(k)))
                                    }(c, d, a, S.urlAfterRedirects, f.serialize(S.urlAfterRedirects), f, D).pipe((0,
                                    J.U)(T=>({
                                        ...S,
                                        targetSnapshot: T
                                    }))))
                                }(this.environmentInjector, this.rootComponentType, a.config, this.urlSerializer, a.paramsInheritanceStrategy), ne(ge=>{
                                    if (f.targetSnapshot = ge.targetSnapshot,
                                    "eager" === a.urlUpdateStrategy) {
                                        if (!ge.extras.skipLocationChange) {
                                            const Ct = a.urlHandlingStrategy.merge(ge.urlAfterRedirects, ge.rawUrl);
                                            a.setBrowserUrl(Ct, ge)
                                        }
                                        a.browserUrlTree = ge.urlAfterRedirects
                                    }
                                    const qe = new us(ge.id,this.urlSerializer.serialize(ge.extractedUrl),this.urlSerializer.serialize(ge.urlAfterRedirects),ge.targetSnapshot);
                                    this.events.next(qe)
                                }
                                ));
                            if (G && a.urlHandlingStrategy.shouldProcessUrl(a.rawUrlTree)) {
                                const {id: ge, extractedUrl: qe, source: Ct, restoredState: In, extras: cn} = T
                                  , ei = new yn(ge,this.urlSerializer.serialize(qe),Ct,In);
                                this.events.next(ei);
                                const Mn = bn(qe, this.rootComponentType).snapshot;
                                return f = {
                                    ...T,
                                    targetSnapshot: Mn,
                                    urlAfterRedirects: qe,
                                    extras: {
                                        ...cn,
                                        skipLocationChange: !1,
                                        replaceUrl: !1
                                    }
                                },
                                (0,
                                O.of)(f)
                            }
                            {
                                const ge = "";
                                return this.events.next(new nr(T.id,a.serializeUrl(f.extractedUrl),ge,1)),
                                a.rawUrlTree = T.rawUrl,
                                T.resolve(null),
                                fe.E
                            }
                        }
                        ), ne(T=>{
                            const k = new di(T.id,this.urlSerializer.serialize(T.extractedUrl),this.urlSerializer.serialize(T.urlAfterRedirects),T.targetSnapshot);
                            this.events.next(k)
                        }
                        ), (0,
                        J.U)(T=>f = {
                            ...T,
                            guards: Ui(T.targetSnapshot, T.currentSnapshot, this.rootContexts)
                        }), function oe(c, d) {
                            return (0,
                            se.z)(a=>{
                                const {targetSnapshot: f, currentSnapshot: D, guards: {canActivateChecks: S, canDeactivateChecks: T}} = a;
                                return 0 === T.length && 0 === S.length ? (0,
                                O.of)({
                                    ...a,
                                    guardsResult: !0
                                }) : function pt(c, d, a, f) {
                                    return (0,
                                    L.D)(c).pipe((0,
                                    se.z)(D=>function ln(c, d, a, f, D) {
                                        const S = d && d.routeConfig ? d.routeConfig.canDeactivate : null;
                                        if (!S || 0 === S.length)
                                            return (0,
                                            O.of)(!0);
                                        const T = S.map(k=>{
                                            const G = Yr(d) ?? D
                                              , ve = Un(k, G);
                                            return Rn(function zs(c) {
                                                return c && gn(c.canDeactivate)
                                            }(ve) ? ve.canDeactivate(c, d, a, f) : G.runInContext(()=>ve(c, d, a, f))).pipe(Y())
                                        }
                                        );
                                        return (0,
                                        O.of)(T).pipe(Qr())
                                    }(D.component, D.route, a, d, f)), Y(D=>!0 !== D, !0))
                                }(T, f, D, c).pipe((0,
                                se.z)(k=>k && function $s(c) {
                                    return "boolean" == typeof c
                                }(k) ? function Ho(c, d, a, f) {
                                    return (0,
                                    L.D)(d).pipe((0,
                                    K.b)(D=>(0,
                                    Ae.z)(function nn(c, d) {
                                        return null !== c && d && d(new sn(c)),
                                        (0,
                                        O.of)(!0)
                                    }(D.route.parent, f), function Gs(c, d) {
                                        return null !== c && d && d(new Sn(c)),
                                        (0,
                                        O.of)(!0)
                                    }(D.route, f), function ar(c, d, a) {
                                        const f = d[d.length - 1]
                                          , S = d.slice(0, d.length - 1).reverse().map(T=>function mi(c) {
                                            const d = c.routeConfig ? c.routeConfig.canActivateChild : null;
                                            return d && 0 !== d.length ? {
                                                node: c,
                                                guards: d
                                            } : null
                                        }(T)).filter(T=>null !== T).map(T=>q(()=>{
                                            const k = T.guards.map(G=>{
                                                const ve = Yr(T.node) ?? a
                                                  , ge = Un(G, ve);
                                                return Rn(function At(c) {
                                                    return c && gn(c.canActivateChild)
                                                }(ge) ? ge.canActivateChild(f, c) : ve.runInContext(()=>ge(f, c))).pipe(Y())
                                            }
                                            );
                                            return (0,
                                            O.of)(k).pipe(Qr())
                                        }
                                        ));
                                        return (0,
                                        O.of)(S).pipe(Qr())
                                    }(c, D.path, a), function vr(c, d, a) {
                                        const f = d.routeConfig ? d.routeConfig.canActivate : null;
                                        if (!f || 0 === f.length)
                                            return (0,
                                            O.of)(!0);
                                        const D = f.map(S=>q(()=>{
                                            const T = Yr(d) ?? a
                                              , k = Un(S, T);
                                            return Rn(function rt(c) {
                                                return c && gn(c.canActivate)
                                            }(k) ? k.canActivate(d, c) : T.runInContext(()=>k(d, c))).pipe(Y())
                                        }
                                        ));
                                        return (0,
                                        O.of)(D).pipe(Qr())
                                    }(c, D.route, a))), Y(D=>!0 !== D, !0))
                                }(f, S, c, d) : (0,
                                O.of)(k)), (0,
                                J.U)(k=>({
                                    ...a,
                                    guardsResult: k
                                })))
                            }
                            )
                        }(this.environmentInjector, T=>this.events.next(T)), ne(T=>{
                            if (f.guardsResult = T.guardsResult,
                            Cn(T.guardsResult))
                                throw ks(0, T.guardsResult);
                            const k = new lt(T.id,this.urlSerializer.serialize(T.extractedUrl),this.urlSerializer.serialize(T.urlAfterRedirects),T.targetSnapshot,!!T.guardsResult);
                            this.events.next(k)
                        }
                        ), (0,
                        Ee.h)(T=>!!T.guardsResult || (a.restoreHistory(T),
                        this.cancelNavigationTransition(T, "", 3),
                        !1)), Xt(T=>{
                            if (T.guards.canActivateChecks.length)
                                return (0,
                                O.of)(T).pipe(ne(k=>{
                                    const G = new xs(k.id,this.urlSerializer.serialize(k.extractedUrl),this.urlSerializer.serialize(k.urlAfterRedirects),k.targetSnapshot);
                                    this.events.next(G)
                                }
                                ), (0,
                                Ne.w)(k=>{
                                    let G = !1;
                                    return (0,
                                    O.of)(k).pipe(function mt(c, d) {
                                        return (0,
                                        se.z)(a=>{
                                            const {targetSnapshot: f, guards: {canActivateChecks: D}} = a;
                                            if (!D.length)
                                                return (0,
                                                O.of)(a);
                                            let S = 0;
                                            return (0,
                                            L.D)(D).pipe((0,
                                            K.b)(T=>function st(c, d, a, f) {
                                                const D = c.routeConfig
                                                  , S = c._resolve;
                                                return void 0 !== D?.title && !Mt(D) && (S[nt] = D.title),
                                                function Et(c, d, a, f) {
                                                    const D = function it(c) {
                                                        return [...Object.keys(c), ...Object.getOwnPropertySymbols(c)]
                                                    }(c);
                                                    if (0 === D.length)
                                                        return (0,
                                                        O.of)({});
                                                    const S = {};
                                                    return (0,
                                                    L.D)(D).pipe((0,
                                                    se.z)(T=>function Pt(c, d, a, f) {
                                                        const D = Yr(d) ?? f
                                                          , S = Un(c, D);
                                                        return Rn(S.resolve ? S.resolve(d, a) : D.runInContext(()=>S(d, a)))
                                                    }(c[T], d, a, f).pipe(Y(), ne(k=>{
                                                        S[T] = k
                                                    }
                                                    ))), ft(1), function bt(c) {
                                                        return (0,
                                                        J.U)(()=>c)
                                                    }(S), (0,
                                                    we.K)(T=>yi(T) ? fe.E : (0,
                                                    Ze._)(T)))
                                                }(S, c, d, f).pipe((0,
                                                J.U)(T=>(c._resolvedData = T,
                                                c.data = $r(c, a).resolve,
                                                D && Mt(D) && (c.data[nt] = D.title),
                                                null)))
                                            }(T.route, f, c, d)), ne(()=>S++), ft(1), (0,
                                            se.z)(T=>S === D.length ? (0,
                                            O.of)(a) : fe.E))
                                        }
                                        )
                                    }(a.paramsInheritanceStrategy, this.environmentInjector), ne({
                                        next: ()=>G = !0,
                                        complete: ()=>{
                                            G || (a.restoreHistory(k),
                                            this.cancelNavigationTransition(k, "", 2))
                                        }
                                    }))
                                }
                                ), ne(k=>{
                                    const G = new cs(k.id,this.urlSerializer.serialize(k.extractedUrl),this.urlSerializer.serialize(k.urlAfterRedirects),k.targetSnapshot);
                                    this.events.next(G)
                                }
                                ))
                        }
                        ), Xt(T=>{
                            const k = G=>{
                                const ve = [];
                                G.routeConfig?.loadComponent && !G.routeConfig._loadedComponent && ve.push(this.configLoader.loadComponent(G.routeConfig).pipe(ne(ge=>{
                                    G.component = ge
                                }
                                ), (0,
                                J.U)(()=>{}
                                )));
                                for (const ge of G.children)
                                    ve.push(...k(ge));
                                return ve
                            }
                            ;
                            return (0,
                            De.a)(k(T.targetSnapshot.root)).pipe(le(), (0,
                            ot.q)(1))
                        }
                        ), Xt(()=>this.afterPreactivation()), (0,
                        J.U)(T=>{
                            const k = function Oo(c, d, a) {
                                const f = Ar(c, d._root, a ? a._root : void 0);
                                return new Vt(f,d)
                            }(a.routeReuseStrategy, T.targetSnapshot, T.currentRouterState);
                            return f = {
                                ...T,
                                targetRouterState: k
                            }
                        }
                        ), ne(T=>{
                            a.currentUrlTree = T.urlAfterRedirects,
                            a.rawUrlTree = a.urlHandlingStrategy.merge(T.urlAfterRedirects, T.rawUrl),
                            a.routerState = T.targetRouterState,
                            "deferred" === a.urlUpdateStrategy && (T.extras.skipLocationChange || a.setBrowserUrl(a.rawUrlTree, T),
                            a.browserUrlTree = T.urlAfterRedirects)
                        }
                        ), ((c,d,a)=>(0,
                        J.U)(f=>(new po(d,f.targetRouterState,f.currentRouterState,a).activate(c),
                        f)))(this.rootContexts, a.routeReuseStrategy, T=>this.events.next(T)), (0,
                        ot.q)(1), ne({
                            next: T=>{
                                D = !0,
                                this.lastSuccessfulNavigation = this.currentNavigation,
                                a.navigated = !0,
                                this.events.next(new pn(T.id,this.urlSerializer.serialize(T.extractedUrl),this.urlSerializer.serialize(a.currentUrlTree))),
                                a.titleStrategy?.updateTitle(T.targetRouterState.snapshot),
                                T.resolve(!0)
                            }
                            ,
                            complete: ()=>{
                                D = !0
                            }
                        }), vt(()=>{
                            D || S || this.cancelNavigationTransition(f, "", 1),
                            this.currentNavigation?.id === f.id && (this.currentNavigation = null)
                        }
                        ), (0,
                        we.K)(T=>{
                            if (S = !0,
                            Hs(T)) {
                                yr(T) || (a.navigated = !0,
                                a.restoreHistory(f, !0));
                                const k = new jt(f.id,this.urlSerializer.serialize(f.extractedUrl),T.message,T.cancellationCode);
                                if (this.events.next(k),
                                yr(T)) {
                                    const G = a.urlHandlingStrategy.merge(T.url, a.rawUrlTree)
                                      , ve = {
                                        skipLocationChange: f.extras.skipLocationChange,
                                        replaceUrl: "eager" === a.urlUpdateStrategy || Js(f.source)
                                    };
                                    a.scheduleNavigation(G, et, null, ve, {
                                        resolve: f.resolve,
                                        reject: f.reject,
                                        promise: f.promise
                                    })
                                } else
                                    f.resolve(!1)
                            } else {
                                a.restoreHistory(f, !0);
                                const k = new xt(f.id,this.urlSerializer.serialize(f.extractedUrl),T,f.targetSnapshot ?? void 0);
                                this.events.next(k);
                                try {
                                    f.resolve(a.errorHandler(T))
                                } catch (G) {
                                    f.reject(G)
                                }
                            }
                            return fe.E
                        }
                        ))
                    }
                    ))
                }
                cancelNavigationTransition(a, f, D) {
                    const S = new jt(a.id,this.urlSerializer.serialize(a.extractedUrl),f,D);
                    this.events.next(S),
                    a.resolve(!1)
                }
            }
            return c.\u0275fac = function(a) {
                return new (a || c)
            }
            ,
            c.\u0275prov = _.Yz7({
                token: c,
                factory: c.\u0275fac,
                providedIn: "root"
            }),
            c
        }
        )();
        function Js(c) {
            return c !== et
        }
        let Ln = (()=>{
            class c {
                buildTitle(a) {
                    let f, D = a.root;
                    for (; void 0 !== D; )
                        f = this.getResolvedTitleForRoute(D) ?? f,
                        D = D.children.find(S=>S.outlet === Le);
                    return f
                }
                getResolvedTitleForRoute(a) {
                    return a.data[nt]
                }
            }
            return c.\u0275fac = function(a) {
                return new (a || c)
            }
            ,
            c.\u0275prov = _.Yz7({
                token: c,
                factory: function() {
                    return (0,
                    _.f3M)(_r)
                },
                providedIn: "root"
            }),
            c
        }
        )()
          , _r = (()=>{
            class c extends Ln {
                constructor(a) {
                    super(),
                    this.title = a
                }
                updateTitle(a) {
                    const f = this.buildTitle(a);
                    void 0 !== f && this.title.setTitle(f)
                }
            }
            return c.\u0275fac = function(a) {
                return new (a || c)(_.LFG(zn.Dx))
            }
            ,
            c.\u0275prov = _.Yz7({
                token: c,
                factory: c.\u0275fac,
                providedIn: "root"
            }),
            c
        }
        )()
          , Vo = (()=>{
            class c {
            }
            return c.\u0275fac = function(a) {
                return new (a || c)
            }
            ,
            c.\u0275prov = _.Yz7({
                token: c,
                factory: function() {
                    return (0,
                    _.f3M)(_s)
                },
                providedIn: "root"
            }),
            c
        }
        )();
        class zo {
            shouldDetach(d) {
                return !1
            }
            store(d, a) {}
            shouldAttach(d) {
                return !1
            }
            retrieve(d) {
                return null
            }
            shouldReuseRoute(d, a) {
                return d.routeConfig === a.routeConfig
            }
        }
        let _s = (()=>{
            class c extends zo {
            }
            return c.\u0275fac = function() {
                let d;
                return function(f) {
                    return (d || (d = _.n5z(c)))(f || c)
                }
            }(),
            c.\u0275prov = _.Yz7({
                token: c,
                factory: c.\u0275fac,
                providedIn: "root"
            }),
            c
        }
        )();
        const Zr = new _.OlP("",{
            providedIn: "root",
            factory: ()=>({})
        });
        let Wi = (()=>{
            class c {
            }
            return c.\u0275fac = function(a) {
                return new (a || c)
            }
            ,
            c.\u0275prov = _.Yz7({
                token: c,
                factory: function() {
                    return (0,
                    _.f3M)(eo)
                },
                providedIn: "root"
            }),
            c
        }
        )()
          , eo = (()=>{
            class c {
                shouldProcessUrl(a) {
                    return !0
                }
                extract(a) {
                    return a
                }
                merge(a, f) {
                    return a
                }
            }
            return c.\u0275fac = function(a) {
                return new (a || c)
            }
            ,
            c.\u0275prov = _.Yz7({
                token: c,
                factory: c.\u0275fac,
                providedIn: "root"
            }),
            c
        }
        )();
        function to(c) {
            throw c
        }
        function Wo(c, d, a) {
            return d.parse("/")
        }
        const Ko = {
            paths: "exact",
            fragment: "ignored",
            matrixParams: "ignored",
            queryParams: "exact"
        }
          , wr = {
            paths: "subset",
            fragment: "ignored",
            matrixParams: "ignored",
            queryParams: "subset"
        };
        let $n = (()=>{
            class c {
                get navigationId() {
                    return this.navigationTransitions.navigationId
                }
                get browserPageId() {
                    if ("computed" === this.canceledNavigationResolution)
                        return this.location.getState()?.\u0275routerPageId
                }
                get events() {
                    return this.navigationTransitions.events
                }
                constructor() {
                    this.disposed = !1,
                    this.currentPageId = 0,
                    this.console = (0,
                    _.f3M)(_.c2e),
                    this.isNgZoneEnabled = !1,
                    this.options = (0,
                    _.f3M)(Zr, {
                        optional: !0
                    }) || {},
                    this.errorHandler = this.options.errorHandler || to,
                    this.malformedUriErrorHandler = this.options.malformedUriErrorHandler || Wo,
                    this.navigated = !1,
                    this.lastSuccessfulId = -1,
                    this.urlHandlingStrategy = (0,
                    _.f3M)(Wi),
                    this.routeReuseStrategy = (0,
                    _.f3M)(Vo),
                    this.urlCreationStrategy = (0,
                    _.f3M)(xi),
                    this.titleStrategy = (0,
                    _.f3M)(Ln),
                    this.onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore",
                    this.paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly",
                    this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred",
                    this.canceledNavigationResolution = this.options.canceledNavigationResolution || "replace",
                    this.config = Gt((0,
                    _.f3M)(En, {
                        optional: !0
                    }) ?? []),
                    this.navigationTransitions = (0,
                    _.f3M)(Er),
                    this.urlSerializer = (0,
                    _.f3M)(On),
                    this.location = (0,
                    _.f3M)(ye.Ye),
                    this.isNgZoneEnabled = (0,
                    _.f3M)(_.R0b)instanceof _.R0b && _.R0b.isInAngularZone(),
                    this.resetConfig(this.config),
                    this.currentUrlTree = new ct,
                    this.rawUrlTree = this.currentUrlTree,
                    this.browserUrlTree = this.currentUrlTree,
                    this.routerState = bn(this.currentUrlTree, null),
                    this.navigationTransitions.setupNavigations(this).subscribe(a=>{
                        this.lastSuccessfulId = a.id,
                        this.currentPageId = this.browserPageId ?? 0
                    }
                    , a=>{
                        this.console.warn(`Unhandled Navigation Error: ${a}`)
                    }
                    )
                }
                resetRootComponentType(a) {
                    this.routerState.root.component = a,
                    this.navigationTransitions.rootComponentType = a
                }
                initialNavigation() {
                    if (this.setUpLocationChangeListener(),
                    !this.navigationTransitions.hasRequestedNavigation) {
                        const a = this.location.getState();
                        this.navigateToSyncWithBrowser(this.location.path(!0), et, a)
                    }
                }
                setUpLocationChangeListener() {
                    this.locationSubscription || (this.locationSubscription = this.location.subscribe(a=>{
                        const f = "popstate" === a.type ? "popstate" : "hashchange";
                        "popstate" === f && setTimeout(()=>{
                            this.navigateToSyncWithBrowser(a.url, f, a.state)
                        }
                        , 0)
                    }
                    ))
                }
                navigateToSyncWithBrowser(a, f, D) {
                    const S = {
                        replaceUrl: !0
                    }
                      , T = D?.navigationId ? D : null;
                    if (D) {
                        const G = {
                            ...D
                        };
                        delete G.navigationId,
                        delete G.\u0275routerPageId,
                        0 !== Object.keys(G).length && (S.state = G)
                    }
                    const k = this.parseUrl(a);
                    this.scheduleNavigation(k, f, T, S)
                }
                get url() {
                    return this.serializeUrl(this.currentUrlTree)
                }
                getCurrentNavigation() {
                    return this.navigationTransitions.currentNavigation
                }
                resetConfig(a) {
                    this.config = a.map(Kr),
                    this.navigated = !1,
                    this.lastSuccessfulId = -1
                }
                ngOnDestroy() {
                    this.dispose()
                }
                dispose() {
                    this.navigationTransitions.complete(),
                    this.locationSubscription && (this.locationSubscription.unsubscribe(),
                    this.locationSubscription = void 0),
                    this.disposed = !0
                }
                createUrlTree(a, f={}) {
                    const {relativeTo: D, queryParams: S, fragment: T, queryParamsHandling: k, preserveFragment: G} = f
                      , ve = G ? this.currentUrlTree.fragment : T;
                    let ge = null;
                    switch (k) {
                    case "merge":
                        ge = {
                            ...this.currentUrlTree.queryParams,
                            ...S
                        };
                        break;
                    case "preserve":
                        ge = this.currentUrlTree.queryParams;
                        break;
                    default:
                        ge = S || null
                    }
                    return null !== ge && (ge = this.removeEmptyProps(ge)),
                    this.urlCreationStrategy.createUrlTree(D, this.routerState, this.currentUrlTree, a, ge, ve ?? null)
                }
                navigateByUrl(a, f={
                    skipLocationChange: !1
                }) {
                    const D = Cn(a) ? a : this.parseUrl(a)
                      , S = this.urlHandlingStrategy.merge(D, this.rawUrlTree);
                    return this.scheduleNavigation(S, et, null, f)
                }
                navigate(a, f={
                    skipLocationChange: !1
                }) {
                    return function no(c) {
                        for (let d = 0; d < c.length; d++) {
                            const a = c[d];
                            if (null == a)
                                throw new _.vHH(4008,false)
                        }
                    }(a),
                    this.navigateByUrl(this.createUrlTree(a, f), f)
                }
                serializeUrl(a) {
                    return this.urlSerializer.serialize(a)
                }
                parseUrl(a) {
                    let f;
                    try {
                        f = this.urlSerializer.parse(a)
                    } catch (D) {
                        f = this.malformedUriErrorHandler(D, this.urlSerializer, a)
                    }
                    return f
                }
                isActive(a, f) {
                    let D;
                    if (D = !0 === f ? {
                        ...Ko
                    } : !1 === f ? {
                        ...wr
                    } : f,
                    Cn(a))
                        return Rt(this.currentUrlTree, a, D);
                    const S = this.parseUrl(a);
                    return Rt(this.currentUrlTree, S, D)
                }
                removeEmptyProps(a) {
                    return Object.keys(a).reduce((f,D)=>{
                        const S = a[D];
                        return null != S && (f[D] = S),
                        f
                    }
                    , {})
                }
                scheduleNavigation(a, f, D, S, T) {
                    if (this.disposed)
                        return Promise.resolve(!1);
                    let k, G, ve, ge;
                    return T ? (k = T.resolve,
                    G = T.reject,
                    ve = T.promise) : ve = new Promise((qe,Ct)=>{
                        k = qe,
                        G = Ct
                    }
                    ),
                    ge = "computed" === this.canceledNavigationResolution ? D && D.\u0275routerPageId ? D.\u0275routerPageId : (this.browserPageId ?? 0) + 1 : 0,
                    this.navigationTransitions.handleNavigationRequest({
                        targetPageId: ge,
                        source: f,
                        restoredState: D,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.currentUrlTree,
                        rawUrl: a,
                        extras: S,
                        resolve: k,
                        reject: G,
                        promise: ve,
                        currentSnapshot: this.routerState.snapshot,
                        currentRouterState: this.routerState
                    }),
                    ve.catch(qe=>Promise.reject(qe))
                }
                setBrowserUrl(a, f) {
                    const D = this.urlSerializer.serialize(a);
                    if (this.location.isCurrentPathEqualTo(D) || f.extras.replaceUrl) {
                        const T = {
                            ...f.extras.state,
                            ...this.generateNgRouterState(f.id, this.browserPageId)
                        };
                        this.location.replaceState(D, "", T)
                    } else {
                        const S = {
                            ...f.extras.state,
                            ...this.generateNgRouterState(f.id, f.targetPageId)
                        };
                        this.location.go(D, "", S)
                    }
                }
                restoreHistory(a, f=!1) {
                    if ("computed" === this.canceledNavigationResolution) {
                        const S = this.currentPageId - (this.browserPageId ?? this.currentPageId);
                        0 !== S ? this.location.historyGo(S) : this.currentUrlTree === this.getCurrentNavigation()?.finalUrl && 0 === S && (this.resetState(a),
                        this.browserUrlTree = a.currentUrlTree,
                        this.resetUrlToCurrentUrlTree())
                    } else
                        "replace" === this.canceledNavigationResolution && (f && this.resetState(a),
                        this.resetUrlToCurrentUrlTree())
                }
                resetState(a) {
                    this.routerState = a.currentRouterState,
                    this.currentUrlTree = a.currentUrlTree,
                    this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, a.rawUrl)
                }
                resetUrlToCurrentUrlTree() {
                    this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId))
                }
                generateNgRouterState(a, f) {
                    return "computed" === this.canceledNavigationResolution ? {
                        navigationId: a,
                        \u0275routerPageId: f
                    } : {
                        navigationId: a
                    }
                }
            }
            return c.\u0275fac = function(a) {
                return new (a || c)
            }
            ,
            c.\u0275prov = _.Yz7({
                token: c,
                factory: c.\u0275fac,
                providedIn: "root"
            }),
            c
        }
        )()
          , Ki = (()=>{
            class c {
                constructor(a, f, D, S, T, k) {
                    this.router = a,
                    this.route = f,
                    this.tabIndexAttribute = D,
                    this.renderer = S,
                    this.el = T,
                    this.locationStrategy = k,
                    this._preserveFragment = !1,
                    this._skipLocationChange = !1,
                    this._replaceUrl = !1,
                    this.href = null,
                    this.commands = null,
                    this.onChanges = new _e.x;
                    const G = T.nativeElement.tagName?.toLowerCase();
                    this.isAnchorElement = "a" === G || "area" === G,
                    this.isAnchorElement ? this.subscription = a.events.subscribe(ve=>{
                        ve instanceof pn && this.updateHref()
                    }
                    ) : this.setTabIndexIfNotOnNativeEl("0")
                }
                set preserveFragment(a) {
                    this._preserveFragment = (0,
                    _.D6c)(a)
                }
                get preserveFragment() {
                    return this._preserveFragment
                }
                set skipLocationChange(a) {
                    this._skipLocationChange = (0,
                    _.D6c)(a)
                }
                get skipLocationChange() {
                    return this._skipLocationChange
                }
                set replaceUrl(a) {
                    this._replaceUrl = (0,
                    _.D6c)(a)
                }
                get replaceUrl() {
                    return this._replaceUrl
                }
                setTabIndexIfNotOnNativeEl(a) {
                    null != this.tabIndexAttribute || this.isAnchorElement || this.applyAttributeValue("tabindex", a)
                }
                ngOnChanges(a) {
                    this.isAnchorElement && this.updateHref(),
                    this.onChanges.next(this)
                }
                set routerLink(a) {
                    null != a ? (this.commands = Array.isArray(a) ? a : [a],
                    this.setTabIndexIfNotOnNativeEl("0")) : (this.commands = null,
                    this.setTabIndexIfNotOnNativeEl(null))
                }
                onClick(a, f, D, S, T) {
                    return !!(null === this.urlTree || this.isAnchorElement && (0 !== a || f || D || S || T || "string" == typeof this.target && "_self" != this.target)) || (this.router.navigateByUrl(this.urlTree, {
                        skipLocationChange: this.skipLocationChange,
                        replaceUrl: this.replaceUrl,
                        state: this.state
                    }),
                    !this.isAnchorElement)
                }
                ngOnDestroy() {
                    this.subscription?.unsubscribe()
                }
                updateHref() {
                    this.href = null !== this.urlTree && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(this.urlTree)) : null;
                    const a = null === this.href ? null : (0,
                    _.P3R)(this.href, this.el.nativeElement.tagName.toLowerCase(), "href");
                    this.applyAttributeValue("href", a)
                }
                applyAttributeValue(a, f) {
                    const D = this.renderer
                      , S = this.el.nativeElement;
                    null !== f ? D.setAttribute(S, a, f) : D.removeAttribute(S, a)
                }
                get urlTree() {
                    return null === this.commands ? null : this.router.createUrlTree(this.commands, {
                        relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                        queryParams: this.queryParams,
                        fragment: this.fragment,
                        queryParamsHandling: this.queryParamsHandling,
                        preserveFragment: this.preserveFragment
                    })
                }
            }
            return c.\u0275fac = function(a) {
                return new (a || c)(_.Y36($n),_.Y36(ir),_.$8M("tabindex"),_.Y36(_.Qsj),_.Y36(_.SBq),_.Y36(ye.S$))
            }
            ,
            c.\u0275dir = _.lG2({
                type: c,
                selectors: [["", "routerLink", ""]],
                hostVars: 1,
                hostBindings: function(a, f) {
                    1 & a && _.NdJ("click", function(S) {
                        return f.onClick(S.button, S.ctrlKey, S.shiftKey, S.altKey, S.metaKey)
                    }),
                    2 & a && _.uIk("target", f.target)
                },
                inputs: {
                    target: "target",
                    queryParams: "queryParams",
                    fragment: "fragment",
                    queryParamsHandling: "queryParamsHandling",
                    state: "state",
                    relativeTo: "relativeTo",
                    preserveFragment: "preserveFragment",
                    skipLocationChange: "skipLocationChange",
                    replaceUrl: "replaceUrl",
                    routerLink: "routerLink"
                },
                standalone: !0,
                features: [_.TTD]
            }),
            c
        }
        )();
        class ws {
        }
        let Qo = (()=>{
            class c {
                constructor(a, f, D, S, T) {
                    this.router = a,
                    this.injector = D,
                    this.preloadingStrategy = S,
                    this.loader = T
                }
                setUpPreloading() {
                    this.subscription = this.router.events.pipe((0,
                    Ee.h)(a=>a instanceof pn), (0,
                    K.b)(()=>this.preload())).subscribe(()=>{}
                    )
                }
                preload() {
                    return this.processRoutes(this.injector, this.router.config)
                }
                ngOnDestroy() {
                    this.subscription && this.subscription.unsubscribe()
                }
                processRoutes(a, f) {
                    const D = [];
                    for (const S of f) {
                        S.providers && !S._injector && (S._injector = (0,
                        _.MMx)(S.providers, a, `Route: ${S.path}`));
                        const T = S._injector ?? a
                          , k = S._loadedInjector ?? T;
                        (S.loadChildren && !S._loadedRoutes && void 0 === S.canLoad || S.loadComponent && !S._loadedComponent) && D.push(this.preloadConfig(T, S)),
                        (S.children || S._loadedRoutes) && D.push(this.processRoutes(k, S.children ?? S._loadedRoutes))
                    }
                    return (0,
                    L.D)(D).pipe((0,
                    wt.J)())
                }
                preloadConfig(a, f) {
                    return this.preloadingStrategy.preload(f, ()=>{
                        let D;
                        D = f.loadChildren && void 0 === f.canLoad ? this.loader.loadChildren(a, f) : (0,
                        O.of)(null);
                        const S = D.pipe((0,
                        se.z)(T=>null === T ? (0,
                        O.of)(void 0) : (f._loadedRoutes = T.routes,
                        f._loadedInjector = T.injector,
                        this.processRoutes(T.injector ?? a, T.routes))));
                        if (f.loadComponent && !f._loadedComponent) {
                            const T = this.loader.loadComponent(f);
                            return (0,
                            L.D)([S, T]).pipe((0,
                            wt.J)())
                        }
                        return S
                    }
                    )
                }
            }
            return c.\u0275fac = function(a) {
                return new (a || c)(_.LFG($n),_.LFG(_.Sil),_.LFG(_.lqb),_.LFG(ws),_.LFG(lr))
            }
            ,
            c.\u0275prov = _.Yz7({
                token: c,
                factory: c.\u0275fac,
                providedIn: "root"
            }),
            c
        }
        )();
        const ro = new _.OlP("");
        let Eo = (()=>{
            class c {
                constructor(a, f, D, S, T={}) {
                    this.urlSerializer = a,
                    this.transitions = f,
                    this.viewportScroller = D,
                    this.zone = S,
                    this.options = T,
                    this.lastId = 0,
                    this.lastSource = "imperative",
                    this.restoredId = 0,
                    this.store = {},
                    T.scrollPositionRestoration = T.scrollPositionRestoration || "disabled",
                    T.anchorScrolling = T.anchorScrolling || "disabled"
                }
                init() {
                    "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"),
                    this.routerEventsSubscription = this.createScrollEvents(),
                    this.scrollEventsSubscription = this.consumeScrollEvents()
                }
                createScrollEvents() {
                    return this.transitions.events.subscribe(a=>{
                        a instanceof yn ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(),
                        this.lastSource = a.navigationTrigger,
                        this.restoredId = a.restoredState ? a.restoredState.navigationId : 0) : a instanceof pn && (this.lastId = a.id,
                        this.scheduleScrollEvent(a, this.urlSerializer.parse(a.urlAfterRedirects).fragment))
                    }
                    )
                }
                consumeScrollEvents() {
                    return this.transitions.events.subscribe(a=>{
                        a instanceof rr && (a.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(a.position) : a.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(a.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]))
                    }
                    )
                }
                scheduleScrollEvent(a, f) {
                    this.zone.runOutsideAngular(()=>{
                        setTimeout(()=>{
                            this.zone.run(()=>{
                                this.transitions.events.next(new rr(a,"popstate" === this.lastSource ? this.store[this.restoredId] : null,f))
                            }
                            )
                        }
                        , 0)
                    }
                    )
                }
                ngOnDestroy() {
                    this.routerEventsSubscription?.unsubscribe(),
                    this.scrollEventsSubscription?.unsubscribe()
                }
            }
            return c.\u0275fac = function(a) {
                _.$Z()
            }
            ,
            c.\u0275prov = _.Yz7({
                token: c,
                factory: c.\u0275fac
            }),
            c
        }
        )();
        var Vn = (()=>((Vn = Vn || {})[Vn.COMPLETE = 0] = "COMPLETE",
        Vn[Vn.FAILED = 1] = "FAILED",
        Vn[Vn.REDIRECTING = 2] = "REDIRECTING",
        Vn))();
        const qn = !1;
        function Cr(c, d) {
            return {
                \u0275kind: c,
                \u0275providers: d
            }
        }
        const Jr = new _.OlP("",{
            providedIn: "root",
            factory: ()=>!1
        });
        function _o() {
            const c = (0,
            _.f3M)(_.zs3);
            return d=>{
                const a = c.get(_.z2F);
                if (d !== a.components[0])
                    return;
                const f = c.get($n)
                  , D = c.get(ur);
                1 === c.get(Ss) && f.initialNavigation(),
                c.get(bs, null, _.XFs.Optional)?.setUpPreloading(),
                c.get(ro, null, _.XFs.Optional)?.init(),
                f.resetRootComponentType(a.componentTypes[0]),
                D.closed || (D.next(),
                D.complete(),
                D.unsubscribe())
            }
        }
        const ur = new _.OlP(qn ? "bootstrap done indicator" : "",{
            factory: ()=>new _e.x
        })
          , Ss = new _.OlP(qn ? "initial navigation" : "",{
            providedIn: "root",
            factory: ()=>1
        });
        function Xi() {
            let c = [];
            return c = qn ? [{
                provide: _.Xts,
                multi: !0,
                useFactory: ()=>{
                    const d = (0,
                    _.f3M)($n);
                    return ()=>d.events.subscribe(a=>{
                        console.group?.(`Router Event: ${a.constructor.name}`),
                        console.log(function Ni(c) {
                            if (!("type"in c))
                                return `Unknown Router Event: ${c.constructor.name}`;
                            switch (c.type) {
                            case 14:
                                return `ActivationEnd(path: '${c.snapshot.routeConfig?.path || ""}')`;
                            case 13:
                                return `ActivationStart(path: '${c.snapshot.routeConfig?.path || ""}')`;
                            case 12:
                                return `ChildActivationEnd(path: '${c.snapshot.routeConfig?.path || ""}')`;
                            case 11:
                                return `ChildActivationStart(path: '${c.snapshot.routeConfig?.path || ""}')`;
                            case 8:
                                return `GuardsCheckEnd(id: ${c.id}, url: '${c.url}', urlAfterRedirects: '${c.urlAfterRedirects}', state: ${c.state}, shouldActivate: ${c.shouldActivate})`;
                            case 7:
                                return `GuardsCheckStart(id: ${c.id}, url: '${c.url}', urlAfterRedirects: '${c.urlAfterRedirects}', state: ${c.state})`;
                            case 2:
                                return `NavigationCancel(id: ${c.id}, url: '${c.url}')`;
                            case 16:
                                return `NavigationSkipped(id: ${c.id}, url: '${c.url}')`;
                            case 1:
                                return `NavigationEnd(id: ${c.id}, url: '${c.url}', urlAfterRedirects: '${c.urlAfterRedirects}')`;
                            case 3:
                                return `NavigationError(id: ${c.id}, url: '${c.url}', error: ${c.error})`;
                            case 0:
                                return `NavigationStart(id: ${c.id}, url: '${c.url}')`;
                            case 6:
                                return `ResolveEnd(id: ${c.id}, url: '${c.url}', urlAfterRedirects: '${c.urlAfterRedirects}', state: ${c.state})`;
                            case 5:
                                return `ResolveStart(id: ${c.id}, url: '${c.url}', urlAfterRedirects: '${c.urlAfterRedirects}', state: ${c.state})`;
                            case 10:
                                return `RouteConfigLoadEnd(path: ${c.route.path})`;
                            case 9:
                                return `RouteConfigLoadStart(path: ${c.route.path})`;
                            case 4:
                                return `RoutesRecognized(id: ${c.id}, url: '${c.url}', urlAfterRedirects: '${c.urlAfterRedirects}', state: ${c.state})`;
                            case 15:
                                return `Scroll(anchor: '${c.anchor}', position: '${c.position ? `${c.position[0]}, ${c.position[1]}` : null}')`
                            }
                        }(a)),
                        console.log(a),
                        console.groupEnd?.()
                    }
                    )
                }
            }] : [],
            Cr(1, c)
        }
        const bs = new _.OlP(qn ? "router preloader" : "");
        function wo(c) {
            return Cr(0, [{
                provide: bs,
                useExisting: Qo
            }, {
                provide: ws,
                useExisting: c
            }])
        }
        const St = !1
          , v = new _.OlP(St ? "router duplicate forRoot guard" : "ROUTER_FORROOT_GUARD")
          , o = [ye.Ye, {
            provide: On,
            useClass: Ti
        }, $n, Gr, {
            provide: ir,
            useFactory: function Cs(c) {
                return c.routerState.root
            },
            deps: [$n]
        }, lr, St ? {
            provide: Jr,
            useValue: !0
        } : []];
        function l() {
            return new _.PXZ("Router",$n)
        }
        let p = (()=>{
            class c {
                constructor(a) {}
                static forRoot(a, f) {
                    return {
                        ngModule: c,
                        providers: [o, St && f?.enableTracing ? Xi().\u0275providers : [], {
                            provide: En,
                            multi: !0,
                            useValue: a
                        }, {
                            provide: v,
                            useFactory: x,
                            deps: [[$n, new _.FiY, new _.tp0]]
                        }, {
                            provide: Zr,
                            useValue: f || {}
                        }, f?.useHash ? {
                            provide: ye.S$,
                            useClass: ye.Do
                        } : {
                            provide: ye.S$,
                            useClass: ye.b0
                        }, {
                            provide: ro,
                            useFactory: ()=>{
                                const c = (0,
                                _.f3M)(ye.EM)
                                  , d = (0,
                                _.f3M)(_.R0b)
                                  , a = (0,
                                _.f3M)(Zr)
                                  , f = (0,
                                _.f3M)(Er)
                                  , D = (0,
                                _.f3M)(On);
                                return a.scrollOffset && c.setOffset(a.scrollOffset),
                                new Eo(D,f,c,d,a)
                            }
                        }, f?.preloadingStrategy ? wo(f.preloadingStrategy).\u0275providers : [], {
                            provide: _.PXZ,
                            multi: !0,
                            useFactory: l
                        }, f?.initialNavigation ? U(f) : [], [{
                            provide: V,
                            useFactory: _o
                        }, {
                            provide: _.tb,
                            multi: !0,
                            useExisting: V
                        }]]
                    }
                }
                static forChild(a) {
                    return {
                        ngModule: c,
                        providers: [{
                            provide: En,
                            multi: !0,
                            useValue: a
                        }]
                    }
                }
            }
            return c.\u0275fac = function(a) {
                return new (a || c)(_.LFG(v, 8))
            }
            ,
            c.\u0275mod = _.oAB({
                type: c
            }),
            c.\u0275inj = _.cJS({
                imports: [on]
            }),
            c
        }
        )();
        function x(c) {
            if (St && c)
                throw new _.vHH(4007,"The Router was provided more than once. This can happen if 'forRoot' is used outside of the root injector. Lazy loaded modules should use RouterModule.forChild() instead.");
            return "guarded"
        }
        function U(c) {
            return ["disabled" === c.initialNavigation ? Cr(3, [{
                provide: _.ip1,
                multi: !0,
                useFactory: ()=>{
                    const d = (0,
                    _.f3M)($n);
                    return ()=>{
                        d.setUpLocationChangeListener()
                    }
                }
            }, {
                provide: Ss,
                useValue: 2
            }]).\u0275providers : [], "enabledBlocking" === c.initialNavigation ? Cr(2, [{
                provide: Ss,
                useValue: 0
            }, {
                provide: _.ip1,
                multi: !0,
                deps: [_.zs3],
                useFactory: d=>{
                    const a = d.get(ye.V_, Promise.resolve());
                    return ()=>a.then(()=>new Promise(f=>{
                        const D = d.get($n)
                          , S = d.get(ur);
                        (function io(c, d) {
                            c.events.pipe((0,
                            Ee.h)(a=>a instanceof pn || a instanceof jt || a instanceof xt || a instanceof nr), (0,
                            J.U)(a=>a instanceof pn || a instanceof nr ? Vn.COMPLETE : a instanceof jt && (0 === a.code || 1 === a.code) ? Vn.REDIRECTING : Vn.FAILED), (0,
                            Ee.h)(a=>a !== Vn.REDIRECTING), (0,
                            ot.q)(1)).subscribe(()=>{
                                d()
                            }
                            )
                        }
                        )(D, ()=>{
                            f(!0)
                        }
                        ),
                        d.get(Er).afterPreactivation = ()=>(f(!0),
                        S.closed ? (0,
                        O.of)(void 0) : S),
                        D.initialNavigation()
                    }
                    ))
                }
            }]).\u0275providers : []]
        }
        const V = new _.OlP(St ? "Router Initializer" : "")
    }
}, Ve=>{
    var ae = _=>Ve(Ve.s = _);
    ae(9334),
    ae(191)
}
]);
