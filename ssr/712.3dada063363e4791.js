"use strict";
(self.webpackChunkalison = self.webpackChunkalison || []).push([[712], {
    4712: (fa,Go,Q)=>{
        Q.r(Go),
        Q.d(Go, {
            PublishModule: ()=>Ca
        });
        var se = Q(6895)
          , e = Q(8256);
        let io;
        try {
            io = typeof Intl < "u" && Intl.v8BreakIterator
        } catch {
            io = !1
        }
        let nt, ro, ke = (()=>{
            class n {
                constructor(t) {
                    this._platformId = t,
                    this.isBrowser = this._platformId ? (0,
                    se.NF)(this._platformId) : "object" == typeof document && !!document,
                    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent),
                    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent),
                    this.BLINK = this.isBrowser && !(!window.chrome && !io) && typeof CSS < "u" && !this.EDGE && !this.TRIDENT,
                    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT,
                    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream"in window),
                    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent),
                    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT,
                    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.LFG(e.Lbi))
            }
            ,
            n.\u0275prov = e.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        function Nt(n) {
            return function mi() {
                if (null == nt && typeof window < "u")
                    try {
                        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                            get: ()=>nt = !0
                        }))
                    } finally {
                        nt = nt || !1
                    }
                return nt
            }() ? n : !!n.capture
        }
        function Ze(n) {
            return n.composedPath ? n.composedPath()[0] : n.target
        }
        var Ci = Q(1135)
          , yt = Q(7579)
          , fi = Q(9646)
          , Ho = Q(9300);
        function Zo(n) {
            return (0,
            Ho.h)((o,t)=>n <= t)
        }
        var Ri = Q(4671)
          , so = Q(4482)
          , ao = Q(5403);
        function Wo(n, o=Ri.y) {
            return n = n ?? Mi,
            (0,
            so.e)((t,i)=>{
                let r, s = !0;
                t.subscribe((0,
                ao.x)(i, a=>{
                    const l = o(a);
                    (s || !n(r, l)) && (s = !1,
                    r = l,
                    i.next(a))
                }
                ))
            }
            )
        }
        function Mi(n, o) {
            return n === o
        }
        var Vo = Q(8421)
          , Pi = Q(5032);
        function Bt(n) {
            return (0,
            so.e)((o,t)=>{
                (0,
                Vo.Xf)(n).subscribe((0,
                ao.x)(t, ()=>t.complete(), Pi.Z)),
                !t.closed && o.subscribe(t)
            }
            )
        }
        function Xo(n) {
            return null != n && "false" != `${n}`
        }
        function zo(n) {
            return Array.isArray(n) ? n : [n]
        }
        function it(n) {
            return n instanceof e.SBq ? n.nativeElement : n
        }
        var Fi = Q(1577)
          , vi = Q(7272)
          , lo = Q(9751)
          , Ni = Q(5698)
          , xi = Q(727);
        class yi extends xi.w0 {
            constructor(o, t) {
                super()
            }
            schedule(o, t=0) {
                return this
            }
        }
        const Dt = {
            setInterval(n, o, ...t) {
                const {delegate: i} = Dt;
                return i?.setInterval ? i.setInterval(n, o, ...t) : setInterval(n, o, ...t)
            },
            clearInterval(n) {
                const {delegate: o} = Dt;
                return (o?.clearInterval || clearInterval)(n)
            },
            delegate: void 0
        };
        var Bi = Q(8737);
        const qo = {
            now: ()=>(qo.delegate || Date).now(),
            delegate: void 0
        };
        class rt {
            constructor(o, t=rt.now) {
                this.schedulerActionCtor = o,
                this.now = t
            }
            schedule(o, t=0, i) {
                return new this.schedulerActionCtor(this,o).schedule(i, t)
            }
        }
        rt.now = qo.now;
        const jo = new class Li extends rt {
            constructor(o, t=rt.now) {
                super(o, t),
                this.actions = [],
                this._active = !1
            }
            flush(o) {
                const {actions: t} = this;
                if (this._active)
                    return void t.push(o);
                let i;
                this._active = !0;
                do {
                    if (i = o.execute(o.state, o.delay))
                        break
                } while (o = t.shift());
                if (this._active = !1,
                i) {
                    for (; o = t.shift(); )
                        o.unsubscribe();
                    throw i
                }
            }
        }
        (class Di extends yi {
            constructor(o, t) {
                super(o, t),
                this.scheduler = o,
                this.work = t,
                this.pending = !1
            }
            schedule(o, t=0) {
                var i;
                if (this.closed)
                    return this;
                this.state = o;
                const r = this.id
                  , s = this.scheduler;
                return null != r && (this.id = this.recycleAsyncId(s, r, t)),
                this.pending = !0,
                this.delay = t,
                this.id = null !== (i = this.id) && void 0 !== i ? i : this.requestAsyncId(s, this.id, t),
                this
            }
            requestAsyncId(o, t, i=0) {
                return Dt.setInterval(o.flush.bind(o, this), i)
            }
            recycleAsyncId(o, t, i=0) {
                if (null != i && this.delay === i && !1 === this.pending)
                    return t;
                null != t && Dt.clearInterval(t)
            }
            execute(o, t) {
                if (this.closed)
                    return new Error("executing a cancelled action");
                this.pending = !1;
                const i = this._execute(o, t);
                if (i)
                    return i;
                !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
            }
            _execute(o, t) {
                let r, i = !1;
                try {
                    this.work(o)
                } catch (s) {
                    i = !0,
                    r = s || new Error("Scheduled action threw falsy error")
                }
                if (i)
                    return this.unsubscribe(),
                    r
            }
            unsubscribe() {
                if (!this.closed) {
                    const {id: o, scheduler: t} = this
                      , {actions: i} = t;
                    this.work = this.state = this.scheduler = null,
                    this.pending = !1,
                    (0,
                    Bi.P)(i, this),
                    null != o && (this.id = this.recycleAsyncId(t, o, null)),
                    this.delay = null,
                    super.unsubscribe()
                }
            }
        }
        )
          , Ui = jo;
        function Ko(n, o=jo) {
            return (0,
            so.e)((t,i)=>{
                let r = null
                  , s = null
                  , a = null;
                const l = ()=>{
                    if (r) {
                        r.unsubscribe(),
                        r = null;
                        const d = s;
                        s = null,
                        i.next(d)
                    }
                }
                ;
                function c() {
                    const d = a + n
                      , _ = o.now();
                    if (_ < d)
                        return r = this.schedule(void 0, d - _),
                        void i.add(r);
                    l()
                }
                t.subscribe((0,
                ao.x)(i, d=>{
                    s = d,
                    a = o.now(),
                    r || (r = o.schedule(c, n),
                    i.add(r))
                }
                , ()=>{
                    l(),
                    i.complete()
                }
                , void 0, ()=>{
                    s = r = null
                }
                ))
            }
            )
        }
        var co = Q(4004)
          , Yo = Q(8675);
        const Qo = new Set;
        let We, wi = (()=>{
            class n {
                constructor(t) {
                    this._platform = t,
                    this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : Gi
                }
                matchMedia(t) {
                    return (this._platform.WEBKIT || this._platform.BLINK) && function $i(n) {
                        if (!Qo.has(n))
                            try {
                                We || (We = document.createElement("style"),
                                We.setAttribute("type", "text/css"),
                                document.head.appendChild(We)),
                                We.sheet && (We.sheet.insertRule(`@media ${n} {body{ }}`, 0),
                                Qo.add(n))
                            } catch (o) {
                                console.error(o)
                            }
                    }(t),
                    this._matchMedia(t)
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.LFG(ke))
            }
            ,
            n.\u0275prov = e.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        function Gi(n) {
            return {
                matches: "all" === n || "" === n,
                media: n,
                addListener: ()=>{}
                ,
                removeListener: ()=>{}
            }
        }
        let ki = (()=>{
            class n {
                constructor(t, i) {
                    this._mediaMatcher = t,
                    this._zone = i,
                    this._queries = new Map,
                    this._destroySubject = new yt.x
                }
                ngOnDestroy() {
                    this._destroySubject.next(),
                    this._destroySubject.complete()
                }
                isMatched(t) {
                    return Jo(zo(t)).some(r=>this._registerQuery(r).mql.matches)
                }
                observe(t) {
                    const r = Jo(zo(t)).map(a=>this._registerQuery(a).observable);
                    let s = (0,
                    Fi.a)(r);
                    return s = (0,
                    vi.z)(s.pipe((0,
                    Ni.q)(1)), s.pipe(Zo(1), Ko(0))),
                    s.pipe((0,
                    co.U)(a=>{
                        const l = {
                            matches: !1,
                            breakpoints: {}
                        };
                        return a.forEach(({matches: c, query: d})=>{
                            l.matches = l.matches || c,
                            l.breakpoints[d] = c
                        }
                        ),
                        l
                    }
                    ))
                }
                _registerQuery(t) {
                    if (this._queries.has(t))
                        return this._queries.get(t);
                    const i = this._mediaMatcher.matchMedia(t)
                      , s = {
                        observable: new lo.y(a=>{
                            const l = c=>this._zone.run(()=>a.next(c));
                            return i.addListener(l),
                            ()=>{
                                i.removeListener(l)
                            }
                        }
                        ).pipe((0,
                        Yo.O)(i), (0,
                        co.U)(({matches: a})=>({
                            query: t,
                            matches: a
                        })), Bt(this._destroySubject)),
                        mql: i
                    };
                    return this._queries.set(t, s),
                    s
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.LFG(wi),e.LFG(e.R0b))
            }
            ,
            n.\u0275prov = e.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        function Jo(n) {
            return n.map(o=>o.split(",")).reduce((o,t)=>o.concat(t)).map(o=>o.trim())
        }
        function nn(n) {
            return 0 === n.buttons || 0 === n.offsetX && 0 === n.offsetY
        }
        function rn(n) {
            const o = n.touches && n.touches[0] || n.changedTouches && n.changedTouches[0];
            return !(!o || -1 !== o.identifier || null != o.radiusX && 1 !== o.radiusX || null != o.radiusY && 1 !== o.radiusY)
        }
        const ji = new e.OlP("cdk-input-modality-detector-options")
          , Ki = {
            ignoreKeys: [18, 17, 224, 91, 16]
        }
          , Ve = Nt({
            passive: !0,
            capture: !0
        });
        let Yi = (()=>{
            class n {
                get mostRecentModality() {
                    return this._modality.value
                }
                constructor(t, i, r, s) {
                    this._platform = t,
                    this._mostRecentTarget = null,
                    this._modality = new Ci.X(null),
                    this._lastTouchMs = 0,
                    this._onKeydown = a=>{
                        this._options?.ignoreKeys?.some(l=>l === a.keyCode) || (this._modality.next("keyboard"),
                        this._mostRecentTarget = Ze(a))
                    }
                    ,
                    this._onMousedown = a=>{
                        Date.now() - this._lastTouchMs < 650 || (this._modality.next(nn(a) ? "keyboard" : "mouse"),
                        this._mostRecentTarget = Ze(a))
                    }
                    ,
                    this._onTouchstart = a=>{
                        rn(a) ? this._modality.next("keyboard") : (this._lastTouchMs = Date.now(),
                        this._modality.next("touch"),
                        this._mostRecentTarget = Ze(a))
                    }
                    ,
                    this._options = {
                        ...Ki,
                        ...s
                    },
                    this.modalityDetected = this._modality.pipe(Zo(1)),
                    this.modalityChanged = this.modalityDetected.pipe(Wo()),
                    t.isBrowser && i.runOutsideAngular(()=>{
                        r.addEventListener("keydown", this._onKeydown, Ve),
                        r.addEventListener("mousedown", this._onMousedown, Ve),
                        r.addEventListener("touchstart", this._onTouchstart, Ve)
                    }
                    )
                }
                ngOnDestroy() {
                    this._modality.complete(),
                    this._platform.isBrowser && (document.removeEventListener("keydown", this._onKeydown, Ve),
                    document.removeEventListener("mousedown", this._onMousedown, Ve),
                    document.removeEventListener("touchstart", this._onTouchstart, Ve))
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.LFG(ke),e.LFG(e.R0b),e.LFG(se.K0),e.LFG(ji, 8))
            }
            ,
            n.\u0275prov = e.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        const Ji = new e.OlP("cdk-focus-monitor-default-options")
          , Lt = Nt({
            passive: !0,
            capture: !0
        });
        let er = (()=>{
            class n {
                constructor(t, i, r, s, a) {
                    this._ngZone = t,
                    this._platform = i,
                    this._inputModalityDetector = r,
                    this._origin = null,
                    this._windowFocused = !1,
                    this._originFromTouchInteraction = !1,
                    this._elementInfo = new Map,
                    this._monitoredElementCount = 0,
                    this._rootNodeFocusListenerCount = new Map,
                    this._windowFocusListener = ()=>{
                        this._windowFocused = !0,
                        this._windowFocusTimeoutId = window.setTimeout(()=>this._windowFocused = !1)
                    }
                    ,
                    this._stopInputModalityDetector = new yt.x,
                    this._rootNodeFocusAndBlurListener = l=>{
                        for (let d = Ze(l); d; d = d.parentElement)
                            "focus" === l.type ? this._onFocus(l, d) : this._onBlur(l, d)
                    }
                    ,
                    this._document = s,
                    this._detectionMode = a?.detectionMode || 0
                }
                monitor(t, i=!1) {
                    const r = it(t);
                    if (!this._platform.isBrowser || 1 !== r.nodeType)
                        return (0,
                        fi.of)(null);
                    const s = function Si(n) {
                        if (function pi() {
                            if (null == ro) {
                                const n = typeof document < "u" ? document.head : null;
                                ro = !(!n || !n.createShadowRoot && !n.attachShadow)
                            }
                            return ro
                        }()) {
                            const o = n.getRootNode ? n.getRootNode() : null;
                            if (typeof ShadowRoot < "u" && ShadowRoot && o instanceof ShadowRoot)
                                return o
                        }
                        return null
                    }(r) || this._getDocument()
                      , a = this._elementInfo.get(r);
                    if (a)
                        return i && (a.checkChildren = !0),
                        a.subject;
                    const l = {
                        checkChildren: i,
                        subject: new yt.x,
                        rootNode: s
                    };
                    return this._elementInfo.set(r, l),
                    this._registerGlobalListeners(l),
                    l.subject
                }
                stopMonitoring(t) {
                    const i = it(t)
                      , r = this._elementInfo.get(i);
                    r && (r.subject.complete(),
                    this._setClasses(i),
                    this._elementInfo.delete(i),
                    this._removeGlobalListeners(r))
                }
                focusVia(t, i, r) {
                    const s = it(t);
                    s === this._getDocument().activeElement ? this._getClosestElementsInfo(s).forEach(([l,c])=>this._originChanged(l, i, c)) : (this._setOrigin(i),
                    "function" == typeof s.focus && s.focus(r))
                }
                ngOnDestroy() {
                    this._elementInfo.forEach((t,i)=>this.stopMonitoring(i))
                }
                _getDocument() {
                    return this._document || document
                }
                _getWindow() {
                    return this._getDocument().defaultView || window
                }
                _getFocusOrigin(t) {
                    return this._origin ? this._originFromTouchInteraction ? this._shouldBeAttributedToTouch(t) ? "touch" : "program" : this._origin : this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : t && this._isLastInteractionFromInputLabel(t) ? "mouse" : "program"
                }
                _shouldBeAttributedToTouch(t) {
                    return 1 === this._detectionMode || !!t?.contains(this._inputModalityDetector._mostRecentTarget)
                }
                _setClasses(t, i) {
                    t.classList.toggle("cdk-focused", !!i),
                    t.classList.toggle("cdk-touch-focused", "touch" === i),
                    t.classList.toggle("cdk-keyboard-focused", "keyboard" === i),
                    t.classList.toggle("cdk-mouse-focused", "mouse" === i),
                    t.classList.toggle("cdk-program-focused", "program" === i)
                }
                _setOrigin(t, i=!1) {
                    this._ngZone.runOutsideAngular(()=>{
                        this._origin = t,
                        this._originFromTouchInteraction = "touch" === t && i,
                        0 === this._detectionMode && (clearTimeout(this._originTimeoutId),
                        this._originTimeoutId = setTimeout(()=>this._origin = null, this._originFromTouchInteraction ? 650 : 1))
                    }
                    )
                }
                _onFocus(t, i) {
                    const r = this._elementInfo.get(i)
                      , s = Ze(t);
                    !r || !r.checkChildren && i !== s || this._originChanged(i, this._getFocusOrigin(s), r)
                }
                _onBlur(t, i) {
                    const r = this._elementInfo.get(i);
                    !r || r.checkChildren && t.relatedTarget instanceof Node && i.contains(t.relatedTarget) || (this._setClasses(i),
                    this._emitOrigin(r, null))
                }
                _emitOrigin(t, i) {
                    t.subject.observers.length && this._ngZone.run(()=>t.subject.next(i))
                }
                _registerGlobalListeners(t) {
                    if (!this._platform.isBrowser)
                        return;
                    const i = t.rootNode
                      , r = this._rootNodeFocusListenerCount.get(i) || 0;
                    r || this._ngZone.runOutsideAngular(()=>{
                        i.addEventListener("focus", this._rootNodeFocusAndBlurListener, Lt),
                        i.addEventListener("blur", this._rootNodeFocusAndBlurListener, Lt)
                    }
                    ),
                    this._rootNodeFocusListenerCount.set(i, r + 1),
                    1 == ++this._monitoredElementCount && (this._ngZone.runOutsideAngular(()=>{
                        this._getWindow().addEventListener("focus", this._windowFocusListener)
                    }
                    ),
                    this._inputModalityDetector.modalityDetected.pipe(Bt(this._stopInputModalityDetector)).subscribe(s=>{
                        this._setOrigin(s, !0)
                    }
                    ))
                }
                _removeGlobalListeners(t) {
                    const i = t.rootNode;
                    if (this._rootNodeFocusListenerCount.has(i)) {
                        const r = this._rootNodeFocusListenerCount.get(i);
                        r > 1 ? this._rootNodeFocusListenerCount.set(i, r - 1) : (i.removeEventListener("focus", this._rootNodeFocusAndBlurListener, Lt),
                        i.removeEventListener("blur", this._rootNodeFocusAndBlurListener, Lt),
                        this._rootNodeFocusListenerCount.delete(i))
                    }
                    --this._monitoredElementCount || (this._getWindow().removeEventListener("focus", this._windowFocusListener),
                    this._stopInputModalityDetector.next(),
                    clearTimeout(this._windowFocusTimeoutId),
                    clearTimeout(this._originTimeoutId))
                }
                _originChanged(t, i, r) {
                    this._setClasses(t, i),
                    this._emitOrigin(r, i),
                    this._lastFocusOrigin = i
                }
                _getClosestElementsInfo(t) {
                    const i = [];
                    return this._elementInfo.forEach((r,s)=>{
                        (s === t || r.checkChildren && s.contains(t)) && i.push([s, r])
                    }
                    ),
                    i
                }
                _isLastInteractionFromInputLabel(t) {
                    const {_mostRecentTarget: i, mostRecentModality: r} = this._inputModalityDetector;
                    if ("mouse" !== r || !i || i === t || "INPUT" !== t.nodeName && "TEXTAREA" !== t.nodeName || t.disabled)
                        return !1;
                    const s = t.labels;
                    if (s)
                        for (let a = 0; a < s.length; a++)
                            if (s[a].contains(i))
                                return !0;
                    return !1
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.LFG(e.R0b),e.LFG(ke),e.LFG(Yi),e.LFG(se.K0, 8),e.LFG(Ji, 8))
            }
            ,
            n.\u0275prov = e.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        const an = "cdk-high-contrast-black-on-white"
          , ln = "cdk-high-contrast-white-on-black"
          , _o = "cdk-high-contrast-active";
        let tr = (()=>{
            class n {
                constructor(t, i) {
                    this._platform = t,
                    this._document = i,
                    this._breakpointSubscription = (0,
                    e.f3M)(ki).observe("(forced-colors: active)").subscribe(()=>{
                        this._hasCheckedHighContrastMode && (this._hasCheckedHighContrastMode = !1,
                        this._applyBodyHighContrastModeCssClasses())
                    }
                    )
                }
                getHighContrastMode() {
                    if (!this._platform.isBrowser)
                        return 0;
                    const t = this._document.createElement("div");
                    t.style.backgroundColor = "rgb(1,2,3)",
                    t.style.position = "absolute",
                    this._document.body.appendChild(t);
                    const i = this._document.defaultView || window
                      , r = i && i.getComputedStyle ? i.getComputedStyle(t) : null
                      , s = (r && r.backgroundColor || "").replace(/ /g, "");
                    switch (t.remove(),
                    s) {
                    case "rgb(0,0,0)":
                    case "rgb(45,50,54)":
                    case "rgb(32,32,32)":
                        return 2;
                    case "rgb(255,255,255)":
                    case "rgb(255,250,239)":
                        return 1
                    }
                    return 0
                }
                ngOnDestroy() {
                    this._breakpointSubscription.unsubscribe()
                }
                _applyBodyHighContrastModeCssClasses() {
                    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
                        const t = this._document.body.classList;
                        t.remove(_o, an, ln),
                        this._hasCheckedHighContrastMode = !0;
                        const i = this.getHighContrastMode();
                        1 === i ? t.add(_o, an) : 2 === i && t.add(_o, ln)
                    }
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.LFG(ke),e.LFG(se.K0))
            }
            ,
            n.\u0275prov = e.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )()
          , cn = (()=>{
            class n {
            }
            return n.\u0275fac = function(t) {
                return new (t || n)
            }
            ,
            n.\u0275mod = e.oAB({
                type: n
            }),
            n.\u0275inj = e.cJS({}),
            n
        }
        )();
        const rr = new e.OlP("mat-sanity-checks",{
            providedIn: "root",
            factory: function ir() {
                return !0
            }
        });
        let Ut = (()=>{
            class n {
                constructor(t, i, r) {
                    this._sanityChecks = i,
                    this._document = r,
                    this._hasDoneGlobalChecks = !1,
                    t._applyBodyHighContrastModeCssClasses(),
                    this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0)
                }
                _checkIsEnabled(t) {
                    return !function gi() {
                        return typeof __karma__ < "u" && !!__karma__ || typeof jasmine < "u" && !!jasmine || typeof jest < "u" && !!jest || typeof Mocha < "u" && !!Mocha
                    }() && ("boolean" == typeof this._sanityChecks ? this._sanityChecks : !!this._sanityChecks[t])
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.LFG(tr),e.LFG(rr, 8),e.LFG(se.K0))
            }
            ,
            n.\u0275mod = e.oAB({
                type: n
            }),
            n.\u0275inj = e.cJS({
                imports: [cn, cn]
            }),
            n
        }
        )();
        function sr(n) {
            return class extends n {
                get disabled() {
                    return this._disabled
                }
                set disabled(o) {
                    this._disabled = Xo(o)
                }
                constructor(...o) {
                    super(...o),
                    this._disabled = !1
                }
            }
        }
        function ar(n, o) {
            return class extends n {
                get color() {
                    return this._color
                }
                set color(t) {
                    const i = t || this.defaultColor;
                    i !== this._color && (this._color && this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),
                    i && this._elementRef.nativeElement.classList.add(`mat-${i}`),
                    this._color = i)
                }
                constructor(...t) {
                    super(...t),
                    this.defaultColor = o,
                    this.color = o
                }
            }
        }
        function lr(n) {
            return class extends n {
                get disableRipple() {
                    return this._disableRipple
                }
                set disableRipple(o) {
                    this._disableRipple = Xo(o)
                }
                constructor(...o) {
                    super(...o),
                    this._disableRipple = !1
                }
            }
        }
        class _r {
            constructor(o, t, i, r=!1) {
                this._renderer = o,
                this.element = t,
                this.config = i,
                this._animationForciblyDisabledThroughCss = r,
                this.state = 3
            }
            fadeOut() {
                this._renderer.fadeOutRipple(this)
            }
        }
        const un = Nt({
            passive: !0,
            capture: !0
        });
        class dr {
            constructor() {
                this._events = new Map,
                this._delegateEventHandler = o=>{
                    const t = Ze(o);
                    t && this._events.get(o.type)?.forEach((i,r)=>{
                        (r === t || r.contains(t)) && i.forEach(s=>s.handleEvent(o))
                    }
                    )
                }
            }
            addHandler(o, t, i, r) {
                const s = this._events.get(t);
                if (s) {
                    const a = s.get(i);
                    a ? a.add(r) : s.set(i, new Set([r]))
                } else
                    this._events.set(t, new Map([[i, new Set([r])]])),
                    o.runOutsideAngular(()=>{
                        document.addEventListener(t, this._delegateEventHandler, un)
                    }
                    )
            }
            removeHandler(o, t, i) {
                const r = this._events.get(o);
                if (!r)
                    return;
                const s = r.get(t);
                s && (s.delete(i),
                0 === s.size && r.delete(t),
                0 === r.size && (this._events.delete(o),
                document.removeEventListener(o, this._delegateEventHandler, un)))
            }
        }
        const En = {
            enterDuration: 225,
            exitDuration: 150
        }
          , mn = Nt({
            passive: !0,
            capture: !0
        })
          , pn = ["mousedown", "touchstart"]
          , Sn = ["mouseup", "mouseleave", "touchend", "touchcancel"];
        class at {
            constructor(o, t, i, r) {
                this._target = o,
                this._ngZone = t,
                this._platform = r,
                this._isPointerDown = !1,
                this._activeRipples = new Map,
                this._pointerUpEventsRegistered = !1,
                r.isBrowser && (this._containerElement = it(i))
            }
            fadeInRipple(o, t, i={}) {
                const r = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect()
                  , s = {
                    ...En,
                    ...i.animation
                };
                i.centered && (o = r.left + r.width / 2,
                t = r.top + r.height / 2);
                const a = i.radius || function Er(n, o, t) {
                    const i = Math.max(Math.abs(n - t.left), Math.abs(n - t.right))
                      , r = Math.max(Math.abs(o - t.top), Math.abs(o - t.bottom));
                    return Math.sqrt(i * i + r * r)
                }(o, t, r)
                  , l = o - r.left
                  , c = t - r.top
                  , d = s.enterDuration
                  , _ = document.createElement("div");
                _.classList.add("mat-ripple-element"),
                _.style.left = l - a + "px",
                _.style.top = c - a + "px",
                _.style.height = 2 * a + "px",
                _.style.width = 2 * a + "px",
                null != i.color && (_.style.backgroundColor = i.color),
                _.style.transitionDuration = `${d}ms`,
                this._containerElement.appendChild(_);
                const g = window.getComputedStyle(_)
                  , p = g.transitionDuration
                  , u = "none" === g.transitionProperty || "0s" === p || "0s, 0s" === p || 0 === r.width && 0 === r.height
                  , E = new _r(this,_,i,u);
                _.style.transform = "scale3d(1, 1, 1)",
                E.state = 0,
                i.persistent || (this._mostRecentTransientRipple = E);
                let h = null;
                return !u && (d || s.exitDuration) && this._ngZone.runOutsideAngular(()=>{
                    const b = ()=>this._finishRippleTransition(E)
                      , C = ()=>this._destroyRipple(E);
                    _.addEventListener("transitionend", b),
                    _.addEventListener("transitioncancel", C),
                    h = {
                        onTransitionEnd: b,
                        onTransitionCancel: C
                    }
                }
                ),
                this._activeRipples.set(E, h),
                (u || !d) && this._finishRippleTransition(E),
                E
            }
            fadeOutRipple(o) {
                if (2 === o.state || 3 === o.state)
                    return;
                const t = o.element
                  , i = {
                    ...En,
                    ...o.config.animation
                };
                t.style.transitionDuration = `${i.exitDuration}ms`,
                t.style.opacity = "0",
                o.state = 2,
                (o._animationForciblyDisabledThroughCss || !i.exitDuration) && this._finishRippleTransition(o)
            }
            fadeOutAll() {
                this._getActiveRipples().forEach(o=>o.fadeOut())
            }
            fadeOutAllNonPersistent() {
                this._getActiveRipples().forEach(o=>{
                    o.config.persistent || o.fadeOut()
                }
                )
            }
            setupTriggerEvents(o) {
                const t = it(o);
                !this._platform.isBrowser || !t || t === this._triggerElement || (this._removeTriggerEvents(),
                this._triggerElement = t,
                pn.forEach(i=>{
                    at._eventManager.addHandler(this._ngZone, i, t, this)
                }
                ))
            }
            handleEvent(o) {
                "mousedown" === o.type ? this._onMousedown(o) : "touchstart" === o.type ? this._onTouchStart(o) : this._onPointerUp(),
                this._pointerUpEventsRegistered || (this._ngZone.runOutsideAngular(()=>{
                    Sn.forEach(t=>{
                        this._triggerElement.addEventListener(t, this, mn)
                    }
                    )
                }
                ),
                this._pointerUpEventsRegistered = !0)
            }
            _finishRippleTransition(o) {
                0 === o.state ? this._startFadeOutTransition(o) : 2 === o.state && this._destroyRipple(o)
            }
            _startFadeOutTransition(o) {
                const t = o === this._mostRecentTransientRipple
                  , {persistent: i} = o.config;
                o.state = 1,
                !i && (!t || !this._isPointerDown) && o.fadeOut()
            }
            _destroyRipple(o) {
                const t = this._activeRipples.get(o) ?? null;
                this._activeRipples.delete(o),
                this._activeRipples.size || (this._containerRect = null),
                o === this._mostRecentTransientRipple && (this._mostRecentTransientRipple = null),
                o.state = 3,
                null !== t && (o.element.removeEventListener("transitionend", t.onTransitionEnd),
                o.element.removeEventListener("transitioncancel", t.onTransitionCancel)),
                o.element.remove()
            }
            _onMousedown(o) {
                const t = nn(o)
                  , i = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + 800;
                !this._target.rippleDisabled && !t && !i && (this._isPointerDown = !0,
                this.fadeInRipple(o.clientX, o.clientY, this._target.rippleConfig))
            }
            _onTouchStart(o) {
                if (!this._target.rippleDisabled && !rn(o)) {
                    this._lastTouchStartEvent = Date.now(),
                    this._isPointerDown = !0;
                    const t = o.changedTouches;
                    for (let i = 0; i < t.length; i++)
                        this.fadeInRipple(t[i].clientX, t[i].clientY, this._target.rippleConfig)
                }
            }
            _onPointerUp() {
                this._isPointerDown && (this._isPointerDown = !1,
                this._getActiveRipples().forEach(o=>{
                    !o.config.persistent && (1 === o.state || o.config.terminateOnPointerUp && 0 === o.state) && o.fadeOut()
                }
                ))
            }
            _getActiveRipples() {
                return Array.from(this._activeRipples.keys())
            }
            _removeTriggerEvents() {
                const o = this._triggerElement;
                o && (pn.forEach(t=>at._eventManager.removeHandler(t, o, this)),
                this._pointerUpEventsRegistered && Sn.forEach(t=>o.removeEventListener(t, this, mn)))
            }
        }
        at._eventManager = new dr;
        const mr = new e.OlP("mat-ripple-global-options");
        let gn = (()=>{
            class n {
                get disabled() {
                    return this._disabled
                }
                set disabled(t) {
                    t && this.fadeOutAllNonPersistent(),
                    this._disabled = t,
                    this._setupTriggerEventsIfEnabled()
                }
                get trigger() {
                    return this._trigger || this._elementRef.nativeElement
                }
                set trigger(t) {
                    this._trigger = t,
                    this._setupTriggerEventsIfEnabled()
                }
                constructor(t, i, r, s, a) {
                    this._elementRef = t,
                    this._animationMode = a,
                    this.radius = 0,
                    this._disabled = !1,
                    this._isInitialized = !1,
                    this._globalOptions = s || {},
                    this._rippleRenderer = new at(this,i,t,r)
                }
                ngOnInit() {
                    this._isInitialized = !0,
                    this._setupTriggerEventsIfEnabled()
                }
                ngOnDestroy() {
                    this._rippleRenderer._removeTriggerEvents()
                }
                fadeOutAll() {
                    this._rippleRenderer.fadeOutAll()
                }
                fadeOutAllNonPersistent() {
                    this._rippleRenderer.fadeOutAllNonPersistent()
                }
                get rippleConfig() {
                    return {
                        centered: this.centered,
                        radius: this.radius,
                        color: this.color,
                        animation: {
                            ...this._globalOptions.animation,
                            ..."NoopAnimations" === this._animationMode ? {
                                enterDuration: 0,
                                exitDuration: 0
                            } : {},
                            ...this.animation
                        },
                        terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
                    }
                }
                get rippleDisabled() {
                    return this.disabled || !!this._globalOptions.disabled
                }
                _setupTriggerEventsIfEnabled() {
                    !this.disabled && this._isInitialized && this._rippleRenderer.setupTriggerEvents(this.trigger)
                }
                launch(t, i=0, r) {
                    return "number" == typeof t ? this._rippleRenderer.fadeInRipple(t, i, {
                        ...this.rippleConfig,
                        ...r
                    }) : this._rippleRenderer.fadeInRipple(0, 0, {
                        ...this.rippleConfig,
                        ...t
                    })
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(ke),e.Y36(mr, 8),e.Y36(e.QbO, 8))
            }
            ,
            n.\u0275dir = e.lG2({
                type: n,
                selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
                hostAttrs: [1, "mat-ripple"],
                hostVars: 2,
                hostBindings: function(t, i) {
                    2 & t && e.ekj("mat-ripple-unbounded", i.unbounded)
                },
                inputs: {
                    color: ["matRippleColor", "color"],
                    unbounded: ["matRippleUnbounded", "unbounded"],
                    centered: ["matRippleCentered", "centered"],
                    radius: ["matRippleRadius", "radius"],
                    animation: ["matRippleAnimation", "animation"],
                    disabled: ["matRippleDisabled", "disabled"],
                    trigger: ["matRippleTrigger", "trigger"]
                },
                exportAs: ["matRipple"]
            }),
            n
        }
        )()
          , pr = (()=>{
            class n {
            }
            return n.\u0275fac = function(t) {
                return new (t || n)
            }
            ,
            n.\u0275mod = e.oAB({
                type: n
            }),
            n.\u0275inj = e.cJS({
                imports: [Ut, Ut]
            }),
            n
        }
        )();
        const Sr = ["mat-button", ""]
          , gr = [[["", 8, "material-icons", 3, "iconPositionEnd", ""], ["mat-icon", 3, "iconPositionEnd", ""], ["", "matButtonIcon", "", 3, "iconPositionEnd", ""]], "*", [["", "iconPositionEnd", "", 8, "material-icons"], ["mat-icon", "iconPositionEnd", ""], ["", "matButtonIcon", "", "iconPositionEnd", ""]]]
          , Cr = [".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])", "*", ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"]
          , br = [{
            selector: "mat-button",
            mdcClasses: ["mdc-button", "mat-mdc-button"]
        }, {
            selector: "mat-flat-button",
            mdcClasses: ["mdc-button", "mdc-button--unelevated", "mat-mdc-unelevated-button"]
        }, {
            selector: "mat-raised-button",
            mdcClasses: ["mdc-button", "mdc-button--raised", "mat-mdc-raised-button"]
        }, {
            selector: "mat-stroked-button",
            mdcClasses: ["mdc-button", "mdc-button--outlined", "mat-mdc-outlined-button"]
        }, {
            selector: "mat-fab",
            mdcClasses: ["mdc-fab", "mat-mdc-fab"]
        }, {
            selector: "mat-mini-fab",
            mdcClasses: ["mdc-fab", "mdc-fab--mini", "mat-mdc-mini-fab"]
        }, {
            selector: "mat-icon-button",
            mdcClasses: ["mdc-icon-button", "mat-mdc-icon-button"]
        }]
          , Tr = ar(sr(lr(class {
            constructor(n) {
                this._elementRef = n
            }
        }
        )));
        let Ar = (()=>{
            class n extends Tr {
                constructor(t, i, r, s) {
                    super(t),
                    this._platform = i,
                    this._ngZone = r,
                    this._animationMode = s,
                    this._focusMonitor = (0,
                    e.f3M)(er),
                    this._isFab = !1;
                    const a = t.nativeElement.classList;
                    for (const l of br)
                        this._hasHostAttributes(l.selector) && l.mdcClasses.forEach(c=>{
                            a.add(c)
                        }
                        )
                }
                ngAfterViewInit() {
                    this._focusMonitor.monitor(this._elementRef, !0)
                }
                ngOnDestroy() {
                    this._focusMonitor.stopMonitoring(this._elementRef)
                }
                focus(t="program", i) {
                    t ? this._focusMonitor.focusVia(this._elementRef.nativeElement, t, i) : this._elementRef.nativeElement.focus(i)
                }
                _hasHostAttributes(...t) {
                    return t.some(i=>this._elementRef.nativeElement.hasAttribute(i))
                }
                _isRippleDisabled() {
                    return this.disableRipple || this.disabled
                }
            }
            return n.\u0275fac = function(t) {
                e.$Z()
            }
            ,
            n.\u0275dir = e.lG2({
                type: n,
                viewQuery: function(t, i) {
                    if (1 & t && e.Gf(gn, 5),
                    2 & t) {
                        let r;
                        e.iGM(r = e.CRH()) && (i.ripple = r.first)
                    }
                },
                features: [e.qOj]
            }),
            n
        }
        )()
          , Rr = (()=>{
            class n extends Ar {
                constructor(t, i, r, s) {
                    super(t, i, r, s),
                    this._haltDisabledEvents = a=>{
                        this.disabled && (a.preventDefault(),
                        a.stopImmediatePropagation())
                    }
                }
                ngOnInit() {
                    this._ngZone.runOutsideAngular(()=>{
                        this._elementRef.nativeElement.addEventListener("click", this._haltDisabledEvents)
                    }
                    )
                }
                ngOnDestroy() {
                    super.ngOnDestroy(),
                    this._elementRef.nativeElement.removeEventListener("click", this._haltDisabledEvents)
                }
            }
            return n.\u0275fac = function(t) {
                e.$Z()
            }
            ,
            n.\u0275dir = e.lG2({
                type: n,
                features: [e.qOj]
            }),
            n
        }
        )()
          , lt = (()=>{
            class n extends Rr {
                constructor(t, i, r, s) {
                    super(t, i, r, s)
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.Y36(e.SBq),e.Y36(ke),e.Y36(e.R0b),e.Y36(e.QbO, 8))
            }
            ,
            n.\u0275cmp = e.Xpm({
                type: n,
                selectors: [["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-flat-button", ""], ["a", "mat-stroked-button", ""]],
                hostVars: 9,
                hostBindings: function(t, i) {
                    2 & t && (e.uIk("disabled", i.disabled || null)("tabindex", i.disabled ? -1 : i.tabIndex)("aria-disabled", i.disabled.toString()),
                    e.ekj("_mat-animation-noopable", "NoopAnimations" === i._animationMode)("mat-unthemed", !i.color)("mat-mdc-button-base", !0))
                },
                inputs: {
                    disabled: "disabled",
                    disableRipple: "disableRipple",
                    color: "color",
                    tabIndex: "tabIndex"
                },
                exportAs: ["matButton", "matAnchor"],
                features: [e.qOj],
                attrs: Sr,
                ngContentSelectors: Cr,
                decls: 8,
                vars: 6,
                consts: [[1, "mat-mdc-button-persistent-ripple"], [1, "mdc-button__label"], [1, "mat-mdc-focus-indicator"], ["matRipple", "", 1, "mat-mdc-button-ripple", 3, "matRippleDisabled", "matRippleTrigger"], [1, "mat-mdc-button-touch-target"]],
                template: function(t, i) {
                    1 & t && (e.F$t(gr),
                    e._UZ(0, "span", 0),
                    e.Hsn(1),
                    e.TgZ(2, "span", 1),
                    e.Hsn(3, 1),
                    e.qZA(),
                    e.Hsn(4, 2),
                    e._UZ(5, "span", 2)(6, "span", 3)(7, "span", 4)),
                    2 & t && (e.ekj("mdc-button__ripple", !i._isFab)("mdc-fab__ripple", i._isFab),
                    e.xp6(6),
                    e.Q6J("matRippleDisabled", i._isRippleDisabled())("matRippleTrigger", i._elementRef.nativeElement))
                },
                dependencies: [gn],
                styles: ['.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(\n      100% + 4px\n    );width:calc(\n      100% + 4px\n    );display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{height:var(--mdc-text-button-container-height, 36px);border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color, inherit)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-unelevated-button{height:var(--mdc-filled-button-container-height, 36px);border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color, transparent)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color, rgba(0, 0, 0, 0.12))}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color, inherit)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-raised-button{height:var(--mdc-protected-button-container-height, 36px);border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px));box-shadow:var(--mdc-protected-button-container-elevation, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color, transparent)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color, rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color, inherit)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-raised-button.mdc-ripple-upgraded--background-focused,.mat-mdc-raised-button:not(.mdc-ripple-upgraded):focus{box-shadow:var(--mdc-protected-button-focus-container-elevation, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:not(:disabled):active{box-shadow:var(--mdc-protected-button-pressed-container-elevation, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-outlined-button{height:var(--mdc-outlined-button-container-height, 36px);border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px));padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color, inherit)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color, rgba(0, 0, 0, 0.12))}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width, 1px));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width, 1px))}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0;background-color:var(--mat-mdc-button-persistent-ripple-color)}.mat-mdc-button .mat-ripple-element,.mat-mdc-unelevated-button .mat-ripple-element,.mat-mdc-raised-button .mat-ripple-element,.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-mdc-button-ripple-color)}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button[disabled],.mat-mdc-unelevated-button[disabled],.mat-mdc-raised-button[disabled],.mat-mdc-outlined-button[disabled]{cursor:default;pointer-events:none}.mat-mdc-button .mat-mdc-button-touch-target,.mat-mdc-unelevated-button .mat-mdc-button-touch-target,.mat-mdc-raised-button .mat-mdc-button-touch-target,.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .mat-mdc-button>.mat-icon,.mat-mdc-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:0}.mat-mdc-button .mdc-button__label+.mat-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon,.mat-mdc-button .mdc-button__label+.mat-icon[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem;margin-left:-4px;margin-right:8px}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon,[dir=rtl] .mat-mdc-raised-button>.mat-icon,[dir=rtl] .mat-mdc-outlined-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon[dir=rtl],.mat-mdc-raised-button>.mat-icon[dir=rtl],.mat-mdc-outlined-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:0}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon,[dir=rtl] .mat-mdc-raised-button>.mat-icon,[dir=rtl] .mat-mdc-outlined-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon[dir=rtl],.mat-mdc-raised-button>.mat-icon[dir=rtl],.mat-mdc-outlined-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon,.mat-mdc-raised-button .mdc-button__label+.mat-icon,.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon,.mat-mdc-unelevated-button .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-raised-button .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-outlined-button .mdc-button__label+.mat-icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px) * -1)}', ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}"],
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )()
          , Pr = (()=>{
            class n {
            }
            return n.\u0275fac = function(t) {
                return new (t || n)
            }
            ,
            n.\u0275mod = e.oAB({
                type: n
            }),
            n.\u0275inj = e.cJS({
                imports: [Ut, pr, Ut]
            }),
            n
        }
        )();
        var Xe = Q(6250)
          , Ir = Q(3532);
        var Nr = Q(3900)
          , xr = Q(5577)
          , yr = Q(1144)
          , Be = Q(576)
          , Br = Q(3268);
        const Dr = ["addListener", "removeListener"]
          , Lr = ["addEventListener", "removeEventListener"]
          , Ur = ["on", "off"];
        function uo(n, o, t, i) {
            if ((0,
            Be.m)(t) && (i = t,
            t = void 0),
            i)
                return uo(n, o, t).pipe((0,
                Br.Z)(i));
            const [r,s] = function Gr(n) {
                return (0,
                Be.m)(n.addEventListener) && (0,
                Be.m)(n.removeEventListener)
            }(n) ? Lr.map(a=>l=>n[a](o, l, t)) : function wr(n) {
                return (0,
                Be.m)(n.addListener) && (0,
                Be.m)(n.removeListener)
            }(n) ? Dr.map(Cn(n, o)) : function $r(n) {
                return (0,
                Be.m)(n.on) && (0,
                Be.m)(n.off)
            }(n) ? Ur.map(Cn(n, o)) : [];
            if (!r && (0,
            yr.z)(n))
                return (0,
                xr.z)(a=>uo(a, o, t))((0,
                Vo.Xf)(n));
            if (!r)
                throw new TypeError("Invalid event target");
            return new lo.y(a=>{
                const l = (...c)=>a.next(1 < c.length ? c : c[0]);
                return r(l),
                ()=>s(l)
            }
            )
        }
        function Cn(n, o) {
            return t=>i=>n[t](o, i)
        }
        var kr = Q(625);
        const Hr = ["adsContainerRef"];
        function Zr(n, o) {
            if (1 & n && (e.TgZ(0, "div", 1),
            e._UZ(1, "div", 2, 3),
            e.qZA()),
            2 & n) {
                const t = e.oxw();
                e.Akn(t.outerStyles),
                e.xp6(1),
                e.Udp("top", t.stickyTop),
                e.ekj("ad-sticky", "fixed" === t.adFormat),
                e.Q6J("ngClass", t.panelClass || ""),
                e.uIk("id", t.id)
            }
        }
        let ct = (()=>{
            class n {
                get outerStyles() {
                    return this.defaultStyles[this.fromExistingCSS]?.outher || this.cssStyle?.outher || ""
                }
                constructor(t, i, r) {
                    this._platformID = t,
                    this._document = i,
                    this._appService = r,
                    this.defaultStyles = {
                        underHeader: {
                            outher: "width: 100%; height: 124px; padding: 16px 0",
                            inner: "width:728px; height: 92px; margin: 0 auto; display: flex; align-items:center; justify-content:center"
                        },
                        rightFixed: {
                            outher: "width: 174px; min-width: 174px; height: 100%",
                            inner: "display:inline-block;width:150px;height:600px;margin:12px"
                        }
                    },
                    this.adSlot = 5771925601,
                    this.adFormat = "fixed",
                    this.panelClass = "",
                    this.id = `id-${(Math.random() + 1).toString(36).substring(7)}-inner`,
                    this.destroy$ = new yt.x,
                    this.stickyTop = "auto"
                }
                ngAfterViewInit() {
                    (0,
                    se.NF)(this._platformID) && function vr(n=0, o, t=Ui) {
                        let i = -1;
                        return null != o && ((0,
                        Ir.K)(o) ? t = o : i = o),
                        new lo.y(r=>{
                            let s = function Fr(n) {
                                return n instanceof Date && !isNaN(n)
                            }(n) ? +n - t.now() : n;
                            s < 0 && (s = 0);
                            let a = 0;
                            return t.schedule(function() {
                                r.closed || (r.next(a++),
                                0 <= i ? this.schedule(void 0, i) : r.complete())
                            }, s)
                        }
                        )
                    }(1e3).pipe(Bt(this.destroy$), (0,
                    Nr.w)(()=>this.showAds()), (0,
                    Ho.h)(t=>t)).subscribe(()=>{
                        this._createAd(),
                        this._listenWindowScroll()
                    }
                    )
                }
                _createAd() {
                    let t = this.cssStyle?.inner;
                    this.fromExistingCSS && this.defaultStyles[this.fromExistingCSS] && (t = this.defaultStyles[this.fromExistingCSS].inner);
                    const i = this.adsContainerRef.nativeElement
                      , r = {
                        id: this.id,
                        class: "adsbygoogle",
                        "data-ad-client": "ca-pub-4877892089121284",
                        "data-ad-slot": this.adSlot,
                        "data-ad-format": "fixed",
                        style: t
                    };
                    let s = this._document.createElement("ins");
                    for (let a in r)
                        s.setAttribute(a, r[a]);
                    i.appendChild(s),
                    (window.adsbygoogle = window.adsbygoogle || []).push({})
                }
                _listenWindowScroll() {
                    "fixed" === this.adFormat && uo(window, "scroll").pipe((0,
                    Yo.O)(null), Bt(this.destroy$), (0,
                    co.U)(()=>this._getTopPosition()), Ko(10), Wo((t,i)=>t === i)).subscribe(t=>{
                        this.stickyTop = `${Math.round(t)}px`
                    }
                    )
                }
                _getTopPosition() {
                    const t = document.body.scrollTop;
                    return this.adsContainerRef.nativeElement.parentElement.getBoundingClientRect().top + t
                }
                showAds() {
                    return this._appService.getShowAds()
                }
                ngOnDestroy() {
                    this.destroy$.next(),
                    this.destroy$.complete()
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.Y36(e.Lbi),e.Y36(se.K0),e.Y36(kr.z))
            }
            ,
            n.\u0275cmp = e.Xpm({
                type: n,
                selectors: [["google-adsense"]],
                viewQuery: function(t, i) {
                    if (1 & t && e.Gf(Hr, 5),
                    2 & t) {
                        let r;
                        e.iGM(r = e.CRH()) && (i.adsContainerRef = r.first)
                    }
                },
                inputs: {
                    adSlot: "adSlot",
                    adFormat: "adFormat",
                    cssStyle: "cssStyle",
                    fromExistingCSS: "fromExistingCSS",
                    panelClass: "panelClass"
                },
                standalone: !0,
                features: [e.jDz],
                decls: 2,
                vars: 3,
                consts: [["class", "ad-outher-container", 3, "style", 4, "ngIf"], [1, "ad-outher-container"], [1, "adsbygoogle", "w-full", 3, "ngClass"], ["adsContainerRef", ""]],
                template: function(t, i) {
                    1 & t && (e.YNc(0, Zr, 3, 8, "div", 0),
                    e.ALo(1, "async")),
                    2 & t && e.Q6J("ngIf", e.lcZ(1, 1, i.showAds()))
                },
                dependencies: [se.O5, se.mk, se.Ov],
                styles: ["[_nghost-%COMP%]{width:100%}.ad-sticky[_ngcontent-%COMP%]{position:sticky}"]
            }),
            n
        }
        )();
        var _t = Q(6789)
          , ge = Q(1481);
        let wt = (()=>{
            class n {
                constructor(t) {
                    this.document = t
                }
                onScrollIntoView() {
                    this.selector && this.document.querySelector(this.selector)?.scrollIntoView()
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.Y36(se.K0))
            }
            ,
            n.\u0275dir = e.lG2({
                type: n,
                selectors: [["", "appScrollIntoView", ""]],
                hostBindings: function(t, i) {
                    1 & t && e.NdJ("click", function() {
                        return i.onScrollIntoView()
                    })
                },
                inputs: {
                    selector: ["appScrollIntoView", "selector"]
                },
                standalone: !0
            }),
            n
        }
        )();
        function fn(n, o) {
            for (var t = 0; t < o.length; t++) {
                var i = o[t];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(n, i.key, i)
            }
        }
        var hn = "(prefers-reduced-motion: reduce)"
          , ze = 1
          , qe = 3
          , je = 4
          , dt = 5
          , $t = 6
          , Gt = 7
          , Xr = {
            CREATED: ze,
            MOUNTED: 2,
            IDLE: qe,
            MOVING: je,
            SCROLLING: dt,
            DRAGGING: $t,
            DESTROYED: Gt
        };
        function be(n) {
            n.length = 0
        }
        function Me(n, o, t) {
            return Array.prototype.slice.call(n, o, t)
        }
        function oe(n) {
            return n.bind.apply(n, [null].concat(Me(arguments, 1)))
        }
        var bn = setTimeout
          , Eo = function() {};
        function Tn(n) {
            return requestAnimationFrame(n)
        }
        function kt(n, o) {
            return typeof o === n
        }
        function ut(n) {
            return !po(n) && kt("object", n)
        }
        var mo = Array.isArray
          , An = oe(kt, "function")
          , Pe = oe(kt, "string")
          , Et = oe(kt, "undefined");
        function po(n) {
            return null === n
        }
        function On(n) {
            try {
                return n instanceof (n.ownerDocument.defaultView || window).HTMLElement
            } catch {
                return !1
            }
        }
        function mt(n) {
            return mo(n) ? n : [n]
        }
        function _e(n, o) {
            mt(n).forEach(o)
        }
        function So(n, o) {
            return n.indexOf(o) > -1
        }
        function Ht(n, o) {
            return n.push.apply(n, mt(o)),
            n
        }
        function Te(n, o, t) {
            n && _e(o, function(i) {
                i && n.classList[t ? "add" : "remove"](i)
            })
        }
        function Ce(n, o) {
            Te(n, Pe(o) ? o.split(" ") : o, !0)
        }
        function pt(n, o) {
            _e(o, n.appendChild.bind(n))
        }
        function go(n, o) {
            _e(n, function(t) {
                var i = (o || t).parentNode;
                i && i.insertBefore(t, o)
            })
        }
        function St(n, o) {
            return On(n) && (n.msMatchesSelector || n.matches).call(n, o)
        }
        function Rn(n, o) {
            var t = n ? Me(n.children) : [];
            return o ? t.filter(function(i) {
                return St(i, o)
            }) : t
        }
        function gt(n, o) {
            return o ? Rn(n, o)[0] : n.firstElementChild
        }
        var Ct = Object.keys;
        function De(n, o, t) {
            return n && (t ? Ct(n).reverse() : Ct(n)).forEach(function(i) {
                "__proto__" !== i && o(n[i], i)
            }),
            n
        }
        function ft(n) {
            return Me(arguments, 1).forEach(function(o) {
                De(o, function(t, i) {
                    n[i] = o[i]
                })
            }),
            n
        }
        function Ie(n) {
            return Me(arguments, 1).forEach(function(o) {
                De(o, function(t, i) {
                    n[i] = mo(t) ? t.slice() : ut(t) ? Ie({}, ut(n[i]) ? n[i] : {}, t) : t
                })
            }),
            n
        }
        function Mn(n, o) {
            _e(o || Ct(n), function(t) {
                delete n[t]
            })
        }
        function fe(n, o) {
            _e(n, function(t) {
                _e(o, function(i) {
                    t && t.removeAttribute(i)
                })
            })
        }
        function z(n, o, t) {
            ut(o) ? De(o, function(i, r) {
                z(n, r, i)
            }) : _e(n, function(i) {
                po(t) || "" === t ? fe(i, o) : i.setAttribute(o, String(t))
            })
        }
        function Ke(n, o, t) {
            var i = document.createElement(n);
            return o && (Pe(o) ? Ce(i, o) : z(i, o)),
            t && pt(t, i),
            i
        }
        function Ee(n, o, t) {
            if (Et(t))
                return getComputedStyle(n)[o];
            po(t) || (n.style[o] = "" + t)
        }
        function ht(n, o) {
            Ee(n, "display", o)
        }
        function Pn(n) {
            n.setActive && n.setActive() || n.focus({
                preventScroll: !0
            })
        }
        function me(n, o) {
            return n.getAttribute(o)
        }
        function In(n, o) {
            return n && n.classList.contains(o)
        }
        function de(n) {
            return n.getBoundingClientRect()
        }
        function Le(n) {
            _e(n, function(o) {
                o && o.parentNode && o.parentNode.removeChild(o)
            })
        }
        function Fn(n) {
            return gt((new DOMParser).parseFromString(n, "text/html").body)
        }
        function Ae(n, o) {
            n.preventDefault(),
            o && (n.stopPropagation(),
            n.stopImmediatePropagation())
        }
        function vn(n, o) {
            return n && n.querySelector(o)
        }
        function Co(n, o) {
            return o ? Me(n.querySelectorAll(o)) : []
        }
        function Oe(n, o) {
            Te(n, o, !1)
        }
        function fo(n) {
            return n.timeStamp
        }
        function Ue(n) {
            return Pe(n) ? n : n ? n + "px" : ""
        }
        var bt = "splide"
          , ho = "data-" + bt;
        function Tt(n, o) {
            if (!n)
                throw new Error("[" + bt + "] " + (o || ""))
        }
        var Fe = Math.min
          , Zt = Math.max
          , Wt = Math.floor
          , At = Math.ceil
          , ae = Math.abs;
        function Nn(n, o, t) {
            return ae(n - o) < t
        }
        function Vt(n, o, t, i) {
            var r = Fe(o, t)
              , s = Zt(o, t);
            return i ? r < n && n < s : r <= n && n <= s
        }
        function Ye(n, o, t) {
            var i = Fe(o, t)
              , r = Zt(o, t);
            return Fe(Zt(i, n), r)
        }
        function bo(n) {
            return +(n > 0) - +(n < 0)
        }
        function To(n, o) {
            return _e(o, function(t) {
                n = n.replace("%s", "" + t)
            }),
            n
        }
        function Ao(n) {
            return n < 10 ? "0" + n : "" + n
        }
        var xn = {};
        function yn() {
            var n = [];
            function r(a, l, c) {
                _e(a, function(d) {
                    d && _e(l, function(_) {
                        _.split(" ").forEach(function(g) {
                            var m = g.split(".");
                            c(d, m[0], m[1])
                        })
                    })
                })
            }
            return {
                bind: function o(a, l, c, d) {
                    r(a, l, function(_, g, m) {
                        var p = "addEventListener"in _
                          , u = p ? _.removeEventListener.bind(_, g, c, d) : _.removeListener.bind(_, c);
                        p ? _.addEventListener(g, c, d) : _.addListener(c),
                        n.push([_, g, m, c, u])
                    })
                },
                unbind: function t(a, l, c) {
                    r(a, l, function(d, _, g) {
                        n = n.filter(function(m) {
                            return !!(m[0] !== d || m[1] !== _ || m[2] !== g || c && m[3] !== c) || (m[4](),
                            !1)
                        })
                    })
                },
                dispatch: function i(a, l, c) {
                    var d;
                    return "function" == typeof CustomEvent ? d = new CustomEvent(l,{
                        bubbles: !0,
                        detail: c
                    }) : (d = document.createEvent("CustomEvent")).initCustomEvent(l, !0, !1, c),
                    a.dispatchEvent(d),
                    d
                },
                destroy: function s() {
                    n.forEach(function(a) {
                        a[4]()
                    }),
                    be(n)
                }
            }
        }
        var we = "mounted"
          , ve = "move"
          , Ot = "moved"
          , Dn = "click"
          , qr = "active"
          , jr = "inactive"
          , Kr = "visible"
          , Yr = "hidden"
          , re = "refresh"
          , le = "updated"
          , Rt = "resize"
          , Oo = "resized"
          , Qr = "drag"
          , Jr = "dragging"
          , es = "dragged"
          , Ro = "scroll"
          , Qe = "scrolled"
          , ts = "overflow"
          , Ln = "destroy"
          , os = "arrows:mounted"
          , ns = "arrows:updated"
          , rs = "pagination:updated"
          , Un = "navigation:mounted"
          , wn = "autoplay:play"
          , $n = "autoplay:pause"
          , Gn = "lazyload:loaded"
          , kn = "sk"
          , Hn = "sh"
          , Xt = "ei";
        function ne(n) {
            var o = n ? n.event.bus : document.createDocumentFragment()
              , t = yn();
            return n && n.event.on(Ln, t.destroy),
            ft(t, {
                bus: o,
                on: function i(s, a) {
                    t.bind(o, mt(s).join(" "), function(l) {
                        a.apply(a, mo(l.detail) ? l.detail : [])
                    })
                },
                off: oe(t.unbind, o),
                emit: function r(s) {
                    t.dispatch(o, s, Me(arguments, 1))
                }
            })
        }
        function zt(n, o, t, i) {
            var s, l, r = Date.now, a = 0, c = !0, d = 0;
            function _() {
                if (!c) {
                    if (a = n ? Fe((r() - s) / n, 1) : 1,
                    t && t(a),
                    a >= 1 && (o(),
                    s = r(),
                    i && ++d >= i))
                        return m();
                    l = Tn(_)
                }
            }
            function m() {
                c = !0
            }
            function u() {
                l && cancelAnimationFrame(l),
                a = 0,
                l = 0,
                c = !0
            }
            return {
                start: function g(b) {
                    b || u(),
                    s = r() - (b ? a * n : 0),
                    c = !1,
                    l = Tn(_)
                },
                rewind: function p() {
                    s = r(),
                    a = 0,
                    t && t(a)
                },
                pause: m,
                cancel: u,
                set: function E(b) {
                    n = b
                },
                isPaused: function h() {
                    return c
                }
            }
        }
        var qt = "Arrow"
          , jt = qt + "Left"
          , Kt = qt + "Right"
          , Zn = qt + "Up"
          , Wn = qt + "Down"
          , Yt = "ttb"
          , Mo = {
            width: ["height"],
            left: ["top", "right"],
            right: ["bottom", "left"],
            x: ["y"],
            X: ["Y"],
            Y: ["X"],
            ArrowLeft: [Zn, Kt],
            ArrowRight: [Wn, jt]
        }
          , Re = "role"
          , Je = "tabindex"
          , pe = "aria-"
          , Mt = pe + "controls"
          , Xn = pe + "current"
          , zn = pe + "selected"
          , ue = pe + "label"
          , Po = pe + "labelledby"
          , qn = pe + "hidden"
          , Io = pe + "orientation"
          , Pt = pe + "roledescription"
          , jn = pe + "live"
          , Kn = pe + "busy"
          , Yn = pe + "atomic"
          , Fo = [Re, Je, "disabled", Mt, Xn, ue, Po, qn, Io, Pt]
          , he = bt + "__"
          , vo = bt
          , Qn = he + "track"
          , us = he + "list"
          , Qt = he + "slide"
          , Jn = Qt + "--clone"
          , Es = Qt + "__container"
          , No = he + "arrows"
          , Jt = he + "arrow"
          , ei = Jt + "--prev"
          , ti = Jt + "--next"
          , eo = he + "pagination"
          , oi = eo + "__page"
          , ps = he + "progress__bar"
          , xo = he + "toggle"
          , gs = he + "sr"
          , $e = "is-active"
          , ni = "is-prev"
          , ii = "is-next"
          , yo = "is-visible"
          , Bo = "is-loading"
          , ri = "is-focus-in"
          , si = "is-overflow"
          , fs = [$e, yo, ni, ii, Bo, ri, si]
          , hs = {
            slide: Qt,
            clone: Jn,
            arrows: No,
            arrow: Jt,
            prev: ei,
            next: ti,
            pagination: eo,
            page: oi,
            spinner: he + "spinner"
        }
          , Ts = 5
          , ai = 200
          , li = "touchstart mousedown"
          , Do = "touchmove mousemove"
          , Lo = "touchend touchcancel mouseup click"
          , et = "slide"
          , tt = "loop"
          , It = "fade";
        var Ps = 2
          , Ns = "http://www.w3.org/2000/svg"
          , xs = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"
          , to = 40
          , Bs = ho + "-interval"
          , Us = 10
          , ws = 600
          , $s = .6
          , Gs = 1.5
          , ks = 800
          , ot = {
            passive: !1,
            capture: !0
        }
          , Ws = {
            Spacebar: " ",
            Right: Kt,
            Left: jt,
            Up: Zn,
            Down: Wn
        };
        function Uo(n) {
            return n = Pe(n) ? n : n.key,
            Ws[n] || n
        }
        var ci = "keydown"
          , Ft = ho + "-lazy"
          , oo = Ft + "-srcset"
          , Xs = "[" + Ft + "], [" + oo + "]"
          , js = [" ", "Enter"]
          , ea = Object.freeze({
            __proto__: null,
            Media: function cs(n, o, t) {
                var i = n.state
                  , r = t.breakpoints || {}
                  , s = t.reducedMotion || {}
                  , a = yn()
                  , l = [];
                function d(u) {
                    u && a.destroy()
                }
                function _(u, E) {
                    var h = matchMedia(E);
                    a.bind(h, "change", g),
                    l.push([u, h])
                }
                function g() {
                    var u = i.is(Gt)
                      , E = t.direction
                      , h = l.reduce(function(b, C) {
                        return Ie(b, C[1].matches ? C[0] : {})
                    }, {});
                    Mn(t),
                    p(h),
                    t.destroy ? n.destroy("completely" === t.destroy) : u ? (d(!0),
                    n.mount()) : E !== t.direction && n.refresh()
                }
                function p(u, E, h) {
                    Ie(t, u),
                    E && Ie(Object.getPrototypeOf(t), u),
                    (h || !i.is(ze)) && n.emit(le, t)
                }
                return {
                    setup: function c() {
                        var u = "min" === t.mediaQuery;
                        Ct(r).sort(function(E, h) {
                            return u ? +E - +h : +h - +E
                        }).forEach(function(E) {
                            _(r[E], "(" + (u ? "min" : "max") + "-width:" + E + "px)")
                        }),
                        _(s, hn),
                        g()
                    },
                    destroy: d,
                    reduce: function m(u) {
                        matchMedia(hn).matches && (u ? Ie(t, s) : Mn(t, Ct(s)))
                    },
                    set: p
                }
            },
            Direction: function _s(n, o, t) {
                return {
                    resolve: function i(s, a, l) {
                        var c = "rtl" !== (l = l || t.direction) || a ? l === Yt ? 0 : -1 : 1;
                        return Mo[s] && Mo[s][c] || s.replace(/width|left|right/i, function(d, _) {
                            var g = Mo[d.toLowerCase()][c] || d;
                            return _ > 0 ? g.charAt(0).toUpperCase() + g.slice(1) : g
                        })
                    },
                    orient: function r(s) {
                        return s * ("rtl" === t.direction ? 1 : -1)
                    }
                }
            },
            Elements: function As(n, o, t) {
                var m, p, u, i = ne(n), r = i.on, s = i.bind, a = n.root, l = t.i18n, c = {}, d = [], _ = [], g = [];
                function E() {
                    (function f() {
                        m = v("." + Qn),
                        p = gt(m, "." + us),
                        Tt(m && p, "A track/list element is missing."),
                        Ht(d, Rn(p, "." + Qt + ":not(." + Jn + ")")),
                        De({
                            arrows: No,
                            pagination: eo,
                            prev: ei,
                            next: ti,
                            bar: ps,
                            toggle: xo
                        }, function(O, N) {
                            c[N] = v("." + O)
                        }),
                        ft(c, {
                            root: a,
                            track: m,
                            list: p,
                            slides: d
                        })
                    }
                    )(),
                    function U() {
                        var O = a.id || function zr(n) {
                            return "" + n + Ao(xn[n] = (xn[n] || 0) + 1)
                        }(bt)
                          , N = t.role;
                        a.id = O,
                        m.id = m.id || O + "-track",
                        p.id = p.id || O + "-list",
                        !me(a, Re) && "SECTION" !== a.tagName && N && z(a, Re, N),
                        z(a, Pt, l.carousel),
                        z(p, Re, "presentation")
                    }(),
                    C()
                }
                function b(O) {
                    var N = Fo.concat("style");
                    be(d),
                    Oe(a, _),
                    Oe(m, g),
                    fe([m, p], N),
                    fe(a, O ? N : ["style", Pt])
                }
                function C() {
                    Oe(a, _),
                    Oe(m, g),
                    _ = G(vo),
                    g = G(Qn),
                    Ce(a, _),
                    Ce(m, g),
                    z(a, ue, t.label),
                    z(a, Po, t.labelledby)
                }
                function v(O) {
                    var N = vn(a, O);
                    return N && function bs(n, o) {
                        if (An(n.closest))
                            return n.closest(o);
                        for (var t = n; t && 1 === t.nodeType && !St(t, o); )
                            t = t.parentElement;
                        return t
                    }(N, "." + vo) === a ? N : void 0
                }
                function G(O) {
                    return [O + "--" + t.type, O + "--" + t.direction, t.drag && O + "--draggable", t.isNavigation && O + "--nav", O === vo && $e]
                }
                return ft(c, {
                    setup: E,
                    mount: function h() {
                        r(re, b),
                        r(re, E),
                        r(le, C),
                        s(document, li + " keydown", function(O) {
                            u = "keydown" === O.type
                        }, {
                            capture: !0
                        }),
                        s(a, "focusin", function() {
                            Te(a, ri, !!u)
                        })
                    },
                    destroy: b
                })
            },
            Slides: function Rs(n, o, t) {
                var i = ne(n)
                  , r = i.on
                  , s = i.emit
                  , a = i.bind
                  , l = o.Elements
                  , c = l.slides
                  , d = l.list
                  , _ = [];
                function m() {
                    c.forEach(function(M, P) {
                        E(M, P, -1)
                    })
                }
                function p() {
                    v(function(M) {
                        M.destroy()
                    }),
                    be(_)
                }
                function E(M, P, I) {
                    var k = function Os(n, o, t, i) {
                        var v, r = ne(n), s = r.on, a = r.emit, l = r.bind, c = n.Components, d = n.root, _ = n.options, g = _.isNavigation, m = _.updateOnMove, p = _.i18n, u = _.pagination, E = _.slideFocus, h = c.Direction.resolve, b = me(i, "style"), C = me(i, ue), f = t > -1, U = gt(i, "." + Es);
                        function W() {
                            var x = n.splides.map(function(R) {
                                var y = R.splide.Components.Slides.getAt(o);
                                return y ? y.slide.id : ""
                            }).join(" ");
                            z(i, ue, To(p.slideX, (f ? t : o) + 1)),
                            z(i, Mt, x),
                            z(i, Re, E ? "button" : ""),
                            E && fe(i, Pt)
                        }
                        function D() {
                            v || M()
                        }
                        function M() {
                            if (!v) {
                                var x = n.index;
                                (function P() {
                                    var x = H();
                                    x !== In(i, $e) && (Te(i, $e, x),
                                    z(i, Xn, g && x || ""),
                                    a(x ? qr : jr, w))
                                }
                                )(),
                                function I() {
                                    var x = function j() {
                                        if (n.is(It))
                                            return H();
                                        var x = de(c.Elements.track)
                                          , R = de(i)
                                          , y = h("left", !0)
                                          , V = h("right", !0);
                                        return Wt(x[y]) <= At(R[y]) && Wt(R[V]) <= At(x[V])
                                    }()
                                      , R = !x && (!H() || f);
                                    if (n.state.is([je, dt]) || z(i, qn, R || ""),
                                    z(Co(i, _.focusableNodes || ""), Je, R ? -1 : ""),
                                    E && z(i, Je, R ? -1 : 0),
                                    x !== In(i, yo) && (Te(i, yo, x),
                                    a(x ? Kr : Yr, w)),
                                    !x && document.activeElement === i) {
                                        var y = c.Slides.getAt(n.index);
                                        y && Pn(y.slide)
                                    }
                                }(),
                                Te(i, ni, o === x - 1),
                                Te(i, ii, o === x + 1)
                            }
                        }
                        function H() {
                            var x = n.index;
                            return x === o || _.cloneStatus && x === t
                        }
                        var w = {
                            index: o,
                            slideIndex: t,
                            slide: i,
                            container: U,
                            isClone: f,
                            mount: function G() {
                                f || (i.id = d.id + "-slide" + Ao(o + 1),
                                z(i, Re, u ? "tabpanel" : "group"),
                                z(i, Pt, p.slide),
                                z(i, ue, C || To(p.slideLabel, [o + 1, n.length]))),
                                function O() {
                                    l(i, "click", oe(a, Dn, w)),
                                    l(i, "keydown", oe(a, kn, w)),
                                    s([Ot, Hn, Qe], M),
                                    s(Un, W),
                                    m && s(ve, D)
                                }()
                            },
                            destroy: function N() {
                                v = !0,
                                r.destroy(),
                                Oe(i, fs),
                                fe(i, Fo),
                                z(i, "style", b),
                                z(i, ue, C || "")
                            },
                            update: M,
                            style: function k(x, R, y) {
                                Ee(y && U || i, x, R)
                            },
                            isWithin: function q(x, R) {
                                var y = ae(x - o);
                                return !f && (_.rewind || n.is(tt)) && (y = Fe(y, n.length - y)),
                                y <= R
                            }
                        };
                        return w
                    }(n, P, I, M);
                    k.mount(),
                    _.push(k),
                    _.sort(function(H, j) {
                        return H.index - j.index
                    })
                }
                function h(M) {
                    return M ? G(function(P) {
                        return !P.isClone
                    }) : _
                }
                function v(M, P) {
                    h(P).forEach(M)
                }
                function G(M) {
                    return _.filter(An(M) ? M : function(P) {
                        return Pe(M) ? St(P.slide, M) : So(mt(M), P.index)
                    }
                    )
                }
                return {
                    mount: function g() {
                        m(),
                        r(re, p),
                        r(re, m)
                    },
                    destroy: p,
                    update: function u() {
                        v(function(M) {
                            M.update()
                        })
                    },
                    register: E,
                    get: h,
                    getIn: function b(M) {
                        var P = o.Controller
                          , I = P.toIndex(M)
                          , k = P.hasFocus() ? 1 : t.perPage;
                        return G(function(H) {
                            return Vt(H.index, I, I + k - 1)
                        })
                    },
                    getAt: function C(M) {
                        return G(M)[0]
                    },
                    add: function f(M, P) {
                        _e(M, function(I) {
                            if (Pe(I) && (I = Fn(I)),
                            On(I)) {
                                var k = c[P];
                                k ? go(I, k) : pt(d, I),
                                Ce(I, t.classes.slide),
                                function N(M, P) {
                                    var I = Co(M, "img")
                                      , k = I.length;
                                    k ? I.forEach(function(H) {
                                        a(H, "load error", function() {
                                            --k || P()
                                        })
                                    }) : P()
                                }(I, oe(s, Rt))
                            }
                        }),
                        s(re)
                    },
                    remove: function U(M) {
                        Le(G(M).map(function(P) {
                            return P.slide
                        })),
                        s(re)
                    },
                    forEach: v,
                    filter: G,
                    style: function O(M, P, I) {
                        v(function(k) {
                            k.style(M, P, I)
                        })
                    },
                    getLength: function W(M) {
                        return M ? c.length : _.length
                    },
                    isEnough: function D() {
                        return _.length > t.perPage
                    }
                }
            },
            Layout: function Ms(n, o, t) {
                var E, h, b, i = ne(n), r = i.on, s = i.bind, a = i.emit, l = o.Slides, c = o.Direction.resolve, d = o.Elements, _ = d.root, g = d.track, m = d.list, p = l.getAt, u = l.style;
                function f() {
                    E = t.direction === Yt,
                    Ee(_, "maxWidth", Ue(t.width)),
                    Ee(g, c("paddingLeft"), v(!1)),
                    Ee(g, c("paddingRight"), v(!0)),
                    U(!0)
                }
                function U(w) {
                    var x = de(_);
                    (w || h.width !== x.width || h.height !== x.height) && (Ee(g, "height", function G() {
                        var w = "";
                        return E && (Tt(w = O(), "height or heightRatio is missing."),
                        w = "calc(" + w + " - " + v(!1) + " - " + v(!0) + ")"),
                        w
                    }()),
                    u(c("marginRight"), Ue(t.gap)),
                    u("width", function N() {
                        return t.autoWidth ? null : Ue(t.fixedWidth) || (E ? "" : D())
                    }()),
                    u("height", function W() {
                        return Ue(t.fixedHeight) || (E ? t.autoHeight ? null : D() : O())
                    }(), !0),
                    h = x,
                    a(Oo),
                    b !== (b = q()) && (Te(_, si, b),
                    a(ts, b)))
                }
                function v(w) {
                    var x = t.padding
                      , R = c(w ? "right" : "left");
                    return x && Ue(x[R] || (ut(x) ? 0 : x)) || "0px"
                }
                function O() {
                    return Ue(t.height || de(m).width * t.heightRatio)
                }
                function D() {
                    var w = Ue(t.gap);
                    return "calc((100%" + (w && " + " + w) + ")/" + (t.perPage || 1) + (w && " - " + w) + ")"
                }
                function M() {
                    return de(m)[c("width")]
                }
                function P(w, x) {
                    var R = p(w || 0);
                    return R ? de(R.slide)[c("width")] + (x ? 0 : H()) : 0
                }
                function I(w, x) {
                    var R = p(w);
                    if (R) {
                        var y = de(R.slide)[c("right")]
                          , V = de(m)[c("left")];
                        return ae(y - V) + (x ? 0 : H())
                    }
                    return 0
                }
                function k(w) {
                    return I(n.length - 1) - I(0) + P(0, w)
                }
                function H() {
                    var w = p(0);
                    return w && parseFloat(Ee(w.slide, c("marginRight"))) || 0
                }
                function q() {
                    return n.is(It) || k(!0) > M()
                }
                return {
                    mount: function C() {
                        f(),
                        s(window, "resize load", function ls(n, o) {
                            var t = zt(o || 0, n, null, 1);
                            return function() {
                                t.isPaused() && t.start()
                            }
                        }(oe(a, Rt))),
                        r([le, re], f),
                        r(Rt, U)
                    },
                    resize: U,
                    listSize: M,
                    slideSize: P,
                    sliderSize: k,
                    totalSize: I,
                    getPadding: function j(w) {
                        return parseFloat(Ee(g, c("padding" + (w ? "Right" : "Left")))) || 0
                    },
                    isOverflow: q
                }
            },
            Clones: function Is(n, o, t) {
                var d, i = ne(n), r = i.on, s = o.Elements, a = o.Slides, l = o.Direction.resolve, c = [];
                function _() {
                    r(re, g),
                    r([le, Rt], p),
                    (d = h()) && (function u(b) {
                        var C = a.get().slice()
                          , f = C.length;
                        if (f) {
                            for (; C.length < b; )
                                Ht(C, C);
                            Ht(C.slice(-b), C.slice(0, b)).forEach(function(U, v) {
                                var G = v < b
                                  , O = function E(b, C) {
                                    var f = b.cloneNode(!0);
                                    return Ce(f, t.classes.clone),
                                    f.id = n.root.id + "-clone" + Ao(C + 1),
                                    f
                                }(U.slide, v);
                                G ? go(O, C[0].slide) : pt(s.list, O),
                                Ht(c, O),
                                a.register(O, v - b + (G ? 0 : f), U.index)
                            })
                        }
                    }(d),
                    o.Layout.resize(!0))
                }
                function g() {
                    m(),
                    _()
                }
                function m() {
                    Le(c),
                    be(c),
                    i.destroy()
                }
                function p() {
                    var b = h();
                    d !== b && (d < b || !b) && i.emit(re)
                }
                function h() {
                    var b = t.clones;
                    if (n.is(tt)) {
                        if (Et(b)) {
                            var C = t[l("fixedWidth")] && o.Layout.slideSize(0);
                            b = C && At(de(s.track)[l("width")] / C) || t[l("autoWidth")] && n.length || t.perPage * Ps
                        }
                    } else
                        b = 0;
                    return b
                }
                return {
                    mount: _,
                    destroy: m
                }
            },
            Move: function Fs(n, o, t) {
                var f, i = ne(n), r = i.on, s = i.emit, a = n.state.set, l = o.Layout, c = l.slideSize, d = l.getPadding, _ = l.totalSize, g = l.listSize, m = l.sliderSize, p = o.Direction, u = p.resolve, E = p.orient, h = o.Elements, b = h.list, C = h.track;
                function v() {
                    o.Controller.isBusy() || (o.Scroll.cancel(),
                    O(n.index),
                    o.Slides.update())
                }
                function O(R) {
                    N(I(R, !0))
                }
                function N(R, y) {
                    if (!n.is(It)) {
                        var V = y ? R : function W(R) {
                            if (n.is(tt)) {
                                var y = P(R)
                                  , V = y > o.Controller.getEnd();
                                (y < 0 || V) && (R = D(R, V))
                            }
                            return R
                        }(R);
                        Ee(b, "transform", "translate" + u("X") + "(" + V + "px)"),
                        R !== V && s(Hn)
                    }
                }
                function D(R, y) {
                    var V = R - q(y)
                      , J = m();
                    return R - E(J * (At(ae(V) / J) || 1)) * (y ? 1 : -1)
                }
                function M() {
                    N(k(), !0),
                    f.cancel()
                }
                function P(R) {
                    for (var y = o.Slides.get(), V = 0, J = 1 / 0, K = 0; K < y.length; K++) {
                        var ie = y[K].index
                          , T = ae(I(ie, !0) - R);
                        if (!(T <= J))
                            break;
                        J = T,
                        V = ie
                    }
                    return V
                }
                function I(R, y) {
                    var V = E(_(R - 1) - function j(R) {
                        var y = t.focus;
                        return "center" === y ? (g() - c(R, !0)) / 2 : +y * c(R) || 0
                    }(R));
                    return y ? function H(R) {
                        return t.trimSpace && n.is(et) && (R = Ye(R, 0, E(m(!0) - g()))),
                        R
                    }(V) : V
                }
                function k() {
                    var R = u("left");
                    return de(b)[R] - de(C)[R] + E(d(!1))
                }
                function q(R) {
                    return I(R ? o.Controller.getEnd() : 0, !!t.trimSpace)
                }
                return {
                    mount: function U() {
                        f = o.Transition,
                        r([we, Oo, le, re], v)
                    },
                    move: function G(R, y, V, J) {
                        R !== y && function w(R) {
                            var y = E(D(k(), R));
                            return R ? y >= 0 : y <= b[u("scrollWidth")] - de(C)[u("width")]
                        }(R > V) && (M(),
                        N(D(k(), R > V), !0)),
                        a(je),
                        s(ve, y, V, R),
                        f.start(y, function() {
                            a(qe),
                            s(Ot, y, V, R),
                            J && J()
                        })
                    },
                    jump: O,
                    translate: N,
                    shift: D,
                    cancel: M,
                    toIndex: P,
                    toPosition: I,
                    getPosition: k,
                    getLimit: q,
                    exceededLimit: function x(R, y) {
                        y = Et(y) ? k() : y;
                        var V = !0 !== R && E(y) < E(q(!1))
                          , J = !1 !== R && E(y) > E(q(!0));
                        return V || J
                    },
                    reposition: v
                }
            },
            Controller: function vs(n, o, t) {
                var f, v, G, O, i = ne(n), r = i.on, s = i.emit, a = o.Move, l = a.getPosition, c = a.getLimit, d = a.toPosition, _ = o.Slides, g = _.isEnough, m = _.getLength, p = t.omitEnd, u = n.is(tt), E = n.is(et), h = oe(k, !1), b = oe(k, !0), C = t.start || 0, U = C;
                function W() {
                    v = m(!0),
                    G = t.perMove,
                    O = t.perPage,
                    f = w();
                    var T = Ye(C, 0, p ? f : v - 1);
                    T !== C && (C = T,
                    a.reposition())
                }
                function D() {
                    f !== w() && s(Xt)
                }
                function k(T, X) {
                    var F = G || (K() ? 1 : O)
                      , Y = H(C + F * (T ? -1 : 1), C, !(G || K()));
                    return -1 === Y && E && !Nn(l(), c(!T), 1) ? T ? 0 : f : X ? Y : q(Y)
                }
                function H(T, X, F) {
                    if (g() || K()) {
                        var Y = function j(T) {
                            if (E && "move" === t.trimSpace && T !== C)
                                for (var X = l(); X === d(T, !0) && Vt(T, 0, n.length - 1, !t.rewind); )
                                    T < C ? --T : ++T;
                            return T
                        }(T);
                        Y !== T && (X = T,
                        T = Y,
                        F = !1),
                        T < 0 || T > f ? T = G || !Vt(0, T, X, !0) && !Vt(f, X, T, !0) ? u ? F ? T < 0 ? -(v % O || O) : v : T : t.rewind ? T < 0 ? f : 0 : -1 : x(R(T)) : F && T !== X && (T = x(R(X) + (T < X ? -1 : 1)))
                    } else
                        T = -1;
                    return T
                }
                function q(T) {
                    return u ? (T + v) % v || 0 : T
                }
                function w() {
                    for (var T = v - (K() || u && G ? 1 : O); p && T-- > 0; )
                        if (d(v - 1, !0) !== d(T, !0)) {
                            T++;
                            break
                        }
                    return Ye(T, 0, v - 1)
                }
                function x(T) {
                    return Ye(K() ? T : O * T, 0, f)
                }
                function R(T) {
                    return K() ? Fe(T, f) : Wt((T >= f ? v - 1 : T) / O)
                }
                function V(T) {
                    T !== C && (U = C,
                    C = T)
                }
                function K() {
                    return !Et(t.focus) || t.isNavigation
                }
                function ie() {
                    return n.state.is([je, dt]) && !!t.waitForTransition
                }
                return {
                    mount: function N() {
                        W(),
                        r([le, re, Xt], W),
                        r(Oo, D)
                    },
                    go: function M(T, X, F) {
                        if (!ie()) {
                            var Y = function I(T) {
                                var X = C;
                                if (Pe(T)) {
                                    var F = T.match(/([+\-<>])(\d+)?/) || []
                                      , Y = F[1]
                                      , te = F[2];
                                    "+" === Y || "-" === Y ? X = H(C + +("" + Y + (+te || 1)), C) : ">" === Y ? X = te ? x(+te) : h(!0) : "<" === Y && (X = b(!0))
                                } else
                                    X = u ? T : Ye(T, 0, f);
                                return X
                            }(T)
                              , te = q(Y);
                            te > -1 && (X || te !== C) && (V(te),
                            a.move(Y, te, U, F))
                        }
                    },
                    scroll: function P(T, X, F, Y) {
                        o.Scroll.scroll(T, X, F, function() {
                            var te = q(a.toIndex(l()));
                            V(p ? Fe(te, f) : te),
                            Y && Y()
                        })
                    },
                    getNext: h,
                    getPrev: b,
                    getAdjacent: k,
                    getEnd: w,
                    setIndex: V,
                    getIndex: function J(T) {
                        return T ? U : C
                    },
                    toIndex: x,
                    toPage: R,
                    toDest: function y(T) {
                        var X = a.toIndex(T);
                        return E ? Ye(X, 0, f) : X
                    },
                    hasFocus: K,
                    isBusy: ie
                }
            },
            Arrows: function ys(n, o, t) {
                var h, b, i = ne(n), r = i.on, s = i.bind, a = i.emit, l = t.classes, c = t.i18n, d = o.Elements, _ = o.Controller, g = d.arrows, m = d.track, p = g, u = d.prev, E = d.next, C = {};
                function f() {
                    (function v() {
                        var P = t.arrows;
                        P && !(u && E) && function W() {
                            p = g || Ke("div", l.arrows),
                            u = D(!0),
                            E = D(!1),
                            h = !0,
                            pt(p, [u, E]),
                            !g && go(p, m)
                        }(),
                        u && E && (ft(C, {
                            prev: u,
                            next: E
                        }),
                        ht(p, P ? "" : "none"),
                        Ce(p, b = No + "--" + t.direction),
                        P && (function O() {
                            r([we, Ot, re, Qe, Xt], M),
                            s(E, "click", oe(N, ">")),
                            s(u, "click", oe(N, "<"))
                        }(),
                        M(),
                        z([u, E], Mt, m.id),
                        a(os, u, E)))
                    }
                    )(),
                    r(le, U)
                }
                function U() {
                    G(),
                    f()
                }
                function G() {
                    i.destroy(),
                    Oe(p, b),
                    h ? (Le(g ? [u, E] : p),
                    u = E = null) : fe([u, E], Fo)
                }
                function N(P) {
                    _.go(P, !0)
                }
                function D(P) {
                    return Fn('<button class="' + l.arrow + " " + (P ? l.prev : l.next) + '" type="button"><svg xmlns="' + Ns + '" viewBox="0 0 ' + to + " " + to + '" width="' + to + '" height="' + to + '" focusable="false"><path d="' + (t.arrowPath || xs) + '" />')
                }
                function M() {
                    if (u && E) {
                        var P = n.index
                          , I = _.getPrev()
                          , k = _.getNext()
                          , H = I > -1 && P < I ? c.last : c.prev
                          , j = k > -1 && P > k ? c.first : c.next;
                        u.disabled = I < 0,
                        E.disabled = k < 0,
                        z(u, ue, H),
                        z(E, ue, j),
                        a(ns, u, E, I, k)
                    }
                }
                return {
                    arrows: C,
                    mount: f,
                    destroy: G,
                    update: M
                }
            },
            Autoplay: function Ds(n, o, t) {
                var u, E, i = ne(n), r = i.on, s = i.bind, a = i.emit, l = zt(t.interval, n.go.bind(n, ">"), function O(W) {
                    var D = d.bar;
                    D && Ee(D, "width", 100 * W + "%"),
                    a("autoplay:playing", W)
                }), c = l.isPaused, d = o.Elements, _ = o.Elements, g = _.root, m = _.toggle, p = t.autoplay, h = "pause" === p;
                function f() {
                    c() && o.Slides.isEnough() && (l.start(!t.resetProgress),
                    E = u = h = !1,
                    G(),
                    a(wn))
                }
                function U(W) {
                    void 0 === W && (W = !0),
                    h = !!W,
                    G(),
                    c() || (l.pause(),
                    a($n))
                }
                function v() {
                    h || (u || E ? U(!1) : f())
                }
                function G() {
                    m && (Te(m, $e, !h),
                    z(m, ue, t.i18n[h ? "play" : "pause"]))
                }
                function N(W) {
                    var D = o.Slides.getAt(W);
                    l.set(D && +me(D.slide, Bs) || t.interval)
                }
                return {
                    mount: function b() {
                        p && (function C() {
                            t.pauseOnHover && s(g, "mouseenter mouseleave", function(W) {
                                u = "mouseenter" === W.type,
                                v()
                            }),
                            t.pauseOnFocus && s(g, "focusin focusout", function(W) {
                                E = "focusin" === W.type,
                                v()
                            }),
                            m && s(m, "click", function() {
                                h ? f() : U(!0)
                            }),
                            r([ve, Ro, re], l.rewind),
                            r(ve, N)
                        }(),
                        m && z(m, Mt, d.track.id),
                        h || f(),
                        G())
                    },
                    destroy: l.cancel,
                    play: f,
                    pause: U,
                    isPaused: c
                }
            },
            Cover: function Ls(n, o, t) {
                var r = ne(n).on;
                function a(c) {
                    o.Slides.forEach(function(d) {
                        var _ = gt(d.container || d.slide, "img");
                        _ && _.src && l(c, _, d)
                    })
                }
                function l(c, d, _) {
                    _.style("background", c ? 'center/cover no-repeat url("' + d.src + '")' : "", !0),
                    ht(d, c ? "none" : "")
                }
                return {
                    mount: function s() {
                        t.cover && (r(Gn, oe(l, !0)),
                        r([we, le, re], oe(a, !0)))
                    },
                    destroy: oe(a, !1)
                }
            },
            Scroll: function Hs(n, o, t) {
                var p, u, i = ne(n), r = i.on, s = i.emit, a = n.state.set, l = o.Move, c = l.getPosition, d = l.getLimit, _ = l.exceededLimit, g = l.translate, m = n.is(et), E = 1;
                function b(O, N, W, D, M) {
                    var P = c();
                    if (U(),
                    W && (!m || !_())) {
                        var I = o.Layout.sliderSize()
                          , k = bo(O) * I * Wt(ae(O) / I) || 0;
                        O = l.toPosition(o.Controller.toDest(O % I)) + k
                    }
                    var H = Nn(P, O, 1);
                    E = 1,
                    N = H ? 0 : N || Zt(ae(O - P) / Gs, ks),
                    u = D,
                    p = zt(N, C, oe(f, P, O, M), 1),
                    a(dt),
                    s(Ro),
                    p.start()
                }
                function C() {
                    a(qe),
                    u && u(),
                    s(Qe)
                }
                function f(O, N, W, D) {
                    var M = c()
                      , P = O + (N - O) * function G(O) {
                        var N = t.easingFunc;
                        return N ? N(O) : 1 - Math.pow(1 - O, 4)
                    }(D)
                      , I = (P - M) * E;
                    g(M + I),
                    m && !W && _() && (E *= $s,
                    ae(I) < Us && b(d(_(!0)), ws, !1, u, !0))
                }
                function U() {
                    p && p.cancel()
                }
                function v() {
                    p && !p.isPaused() && (U(),
                    C())
                }
                return {
                    mount: function h() {
                        r(ve, U),
                        r([le, re], v)
                    },
                    destroy: U,
                    scroll: b,
                    cancel: v
                }
            },
            Drag: function Zs(n, o, t) {
                var f, U, v, G, O, W, D, M, i = ne(n), r = i.on, s = i.emit, a = i.bind, l = i.unbind, c = n.state, d = o.Move, _ = o.Scroll, g = o.Controller, m = o.Elements.track, p = o.Media.reduce, u = o.Direction, E = u.resolve, h = u.orient, b = d.getPosition, C = d.exceededLimit, N = !1;
                function I() {
                    var B = t.drag;
                    xe(!B),
                    G = "free" === B
                }
                function k(B) {
                    if (W = !1,
                    !D) {
                        var ee = te(B);
                        (function Y(B) {
                            var ee = t.noDrag;
                            return !(St(B, "." + oi + ", ." + Jt) || ee && St(B, ee))
                        }
                        )(B.target) && (ee || !B.button) && (g.isBusy() ? Ae(B, !0) : (M = ee ? m : window,
                        O = c.is([je, dt]),
                        v = null,
                        a(M, Do, H, ot),
                        a(M, Lo, j, ot),
                        d.cancel(),
                        _.cancel(),
                        w(B)))
                    }
                }
                function H(B) {
                    if (c.is($t) || (c.set($t),
                    s(Qr)),
                    B.cancelable)
                        if (O) {
                            d.translate(f + function F(B) {
                                return B / (N && n.is(et) ? Ts : 1)
                            }(K(B)));
                            var ee = ie(B) > ai
                              , ce = N !== (N = C());
                            (ee || ce) && w(B),
                            W = !0,
                            s(Jr),
                            Ae(B)
                        } else
                            (function y(B) {
                                return ae(K(B)) > ae(K(B, !0))
                            }
                            )(B) && (O = function R(B) {
                                var ee = t.dragMinThreshold
                                  , ce = ut(ee)
                                  , Se = ce && ee.mouse || 0
                                  , Ge = (ce ? ee.touch : +ee) || 10;
                                return ae(K(B)) > (te(B) ? Ge : Se)
                            }(B),
                            Ae(B))
                }
                function j(B) {
                    c.is($t) && (c.set(qe),
                    s(es)),
                    O && (function x(B) {
                        var ee = function V(B) {
                            if (n.is(tt) || !N) {
                                var ee = ie(B);
                                if (ee && ee < ai)
                                    return K(B) / ee
                            }
                            return 0
                        }(B)
                          , ce = function J(B) {
                            return b() + bo(B) * Fe(ae(B) * (t.flickPower || 600), G ? 1 / 0 : o.Layout.listSize() * (t.flickMaxPages || 1))
                        }(ee)
                          , Se = t.rewind && t.rewindByDrag;
                        p(!1),
                        G ? g.scroll(ce, 0, t.snap) : n.is(It) ? g.go(h(bo(ee)) < 0 ? Se ? "<" : "-" : Se ? ">" : "+") : n.is(et) && N && Se ? g.go(C(!0) ? ">" : "<") : g.go(g.toDest(ce), !0),
                        p(!0)
                    }(B),
                    Ae(B)),
                    l(M, Do, H),
                    l(M, Lo, j),
                    O = !1
                }
                function q(B) {
                    !D && W && Ae(B, !0)
                }
                function w(B) {
                    v = U,
                    U = B,
                    f = b()
                }
                function K(B, ee) {
                    return X(B, ee) - X(T(B), ee)
                }
                function ie(B) {
                    return fo(B) - fo(T(B))
                }
                function T(B) {
                    return U === B && v || U
                }
                function X(B, ee) {
                    return (te(B) ? B.changedTouches[0] : B)["page" + E(ee ? "Y" : "X")]
                }
                function te(B) {
                    return typeof TouchEvent < "u" && B instanceof TouchEvent
                }
                function xe(B) {
                    D = B
                }
                return {
                    mount: function P() {
                        a(m, Do, Eo, ot),
                        a(m, Lo, Eo, ot),
                        a(m, li, k, ot),
                        a(m, "click", q, {
                            capture: !0
                        }),
                        a(m, "dragstart", Ae),
                        r([we, le], I)
                    },
                    disable: xe,
                    isDragging: function S() {
                        return O
                    }
                }
            },
            Keyboard: function Vs(n, o, t) {
                var d, _, i = ne(n), r = i.on, s = i.bind, a = i.unbind, l = n.root, c = o.Direction.resolve;
                function m() {
                    var b = t.keyboard;
                    b && (d = "global" === b ? window : l,
                    s(d, ci, h))
                }
                function p() {
                    a(d, ci)
                }
                function E() {
                    var b = _;
                    _ = !0,
                    bn(function() {
                        _ = b
                    })
                }
                function h(b) {
                    if (!_) {
                        var C = Uo(b);
                        C === c(jt) ? n.go("<") : C === c(Kt) && n.go(">")
                    }
                }
                return {
                    mount: function g() {
                        m(),
                        r(le, p),
                        r(le, m),
                        r(ve, E)
                    },
                    destroy: p,
                    disable: function u(b) {
                        _ = b
                    }
                }
            },
            LazyLoad: function zs(n, o, t) {
                var i = ne(n)
                  , r = i.on
                  , s = i.off
                  , a = i.bind
                  , l = i.emit
                  , c = "sequential" === t.lazyLoad
                  , d = [Ot, Qe]
                  , _ = [];
                function m() {
                    be(_),
                    function p() {
                        o.Slides.forEach(function(C) {
                            Co(C.slide, Xs).forEach(function(f) {
                                var U = me(f, Ft)
                                  , v = me(f, oo);
                                if (U !== f.src || v !== f.srcset) {
                                    var G = t.classes.spinner
                                      , O = f.parentElement
                                      , N = gt(O, "." + G) || Ke("span", G, O);
                                    _.push([f, C, N]),
                                    f.src || ht(f, "none")
                                }
                            })
                        })
                    }(),
                    c ? b() : (s(d),
                    r(d, u),
                    u())
                }
                function u() {
                    (_ = _.filter(function(C) {
                        return !C[1].isWithin(n.index, t.perPage * ((t.preloadPages || 1) + 1) - 1) || E(C)
                    })).length || s(d)
                }
                function E(C) {
                    var f = C[0];
                    Ce(C[1].slide, Bo),
                    a(f, "load error", oe(h, C)),
                    z(f, "src", me(f, Ft)),
                    z(f, "srcset", me(f, oo)),
                    fe(f, Ft),
                    fe(f, oo)
                }
                function h(C, f) {
                    var U = C[0]
                      , v = C[1];
                    Oe(v.slide, Bo),
                    "error" !== f.type && (Le(C[2]),
                    ht(U, ""),
                    l(Gn, U, v),
                    l(Rt)),
                    c && b()
                }
                function b() {
                    _.length && E(_.shift())
                }
                return {
                    mount: function g() {
                        t.lazyLoad && (m(),
                        r(re, m))
                    },
                    destroy: oe(be, _),
                    check: u
                }
            },
            Pagination: function qs(n, o, t) {
                var h, b, i = ne(n), r = i.on, s = i.emit, a = i.bind, l = o.Slides, c = o.Elements, d = o.Controller, _ = d.hasFocus, g = d.getIndex, m = d.go, p = o.Direction.resolve, u = c.pagination, E = [];
                function f() {
                    h && (Le(u ? Me(h.children) : h),
                    Oe(h, b),
                    be(E),
                    h = null),
                    i.destroy()
                }
                function v(D) {
                    m(">" + D, !0)
                }
                function G(D, M) {
                    var P = E.length
                      , I = Uo(M)
                      , k = O()
                      , H = -1;
                    I === p(Kt, !1, k) ? H = ++D % P : I === p(jt, !1, k) ? H = (--D + P) % P : "Home" === I ? H = 0 : "End" === I && (H = P - 1);
                    var j = E[H];
                    j && (Pn(j.button),
                    m(">" + H),
                    Ae(M, !0))
                }
                function O() {
                    return t.paginationDirection || t.direction
                }
                function N(D) {
                    return E[d.toPage(D)]
                }
                function W() {
                    var D = N(g(!0))
                      , M = N(g());
                    if (D) {
                        var P = D.button;
                        Oe(P, $e),
                        fe(P, zn),
                        z(P, Je, -1)
                    }
                    if (M) {
                        var I = M.button;
                        Ce(I, $e),
                        z(I, zn, !0),
                        z(I, Je, "")
                    }
                    s(rs, {
                        list: h,
                        items: E
                    }, D, M)
                }
                return {
                    items: E,
                    mount: function C() {
                        f(),
                        r([le, re, Xt], C);
                        var D = t.pagination;
                        u && ht(u, D ? "" : "none"),
                        D && (r([ve, Ro, Qe], W),
                        function U() {
                            var D = n.length
                              , M = t.classes
                              , P = t.i18n
                              , I = t.perPage
                              , k = _() ? d.getEnd() + 1 : At(D / I);
                            Ce(h = u || Ke("ul", M.pagination, c.track.parentElement), b = eo + "--" + O()),
                            z(h, Re, "tablist"),
                            z(h, ue, P.select),
                            z(h, Io, O() === Yt ? "vertical" : "");
                            for (var H = 0; H < k; H++) {
                                var j = Ke("li", null, h)
                                  , q = Ke("button", {
                                    class: M.page,
                                    type: "button"
                                }, j)
                                  , w = l.getIn(H).map(function(R) {
                                    return R.slide.id
                                })
                                  , x = !_() && I > 1 ? P.pageX : P.slideX;
                                a(q, "click", oe(v, H)),
                                t.paginationKeyboard && a(q, "keydown", oe(G, H)),
                                z(j, Re, "presentation"),
                                z(q, Re, "tab"),
                                z(q, Mt, w.join(" ")),
                                z(q, ue, To(x, H + 1)),
                                z(q, Je, -1),
                                E.push({
                                    li: j,
                                    button: q,
                                    page: H
                                })
                            }
                        }(),
                        W(),
                        s("pagination:mounted", {
                            list: h,
                            items: E
                        }, N(n.index)))
                    },
                    destroy: f,
                    getAt: N,
                    update: W
                }
            },
            Sync: function Ks(n, o, t) {
                var i = t.isNavigation
                  , r = t.slideFocus
                  , s = [];
                function a() {
                    n.splides.forEach(function(u) {
                        u.isParent || (d(n, u.splide),
                        d(u.splide, n))
                    }),
                    i && function _() {
                        var u = ne(n)
                          , E = u.on;
                        E(Dn, m),
                        E(kn, p),
                        E([we, le], g),
                        s.push(u),
                        u.emit(Un, n.splides)
                    }()
                }
                function l() {
                    s.forEach(function(u) {
                        u.destroy()
                    }),
                    be(s)
                }
                function d(u, E) {
                    var h = ne(u);
                    h.on(ve, function(b, C, f) {
                        E.go(E.is(tt) ? f : b)
                    }),
                    s.push(h)
                }
                function g() {
                    z(o.Elements.list, Io, t.direction === Yt ? "vertical" : "")
                }
                function m(u) {
                    n.go(u.index)
                }
                function p(u, E) {
                    So(js, Uo(E)) && (m(u),
                    Ae(E))
                }
                return {
                    setup: oe(o.Media.set, {
                        slideFocus: Et(r) ? i : r
                    }, !0),
                    mount: a,
                    destroy: l,
                    remount: function c() {
                        l(),
                        a()
                    }
                }
            },
            Wheel: function Ys(n, o, t) {
                var r = ne(n).bind
                  , s = 0;
                function l(d) {
                    if (d.cancelable) {
                        var _ = d.deltaY
                          , g = _ < 0
                          , m = fo(d)
                          , p = t.wheelMinThreshold || 0
                          , u = t.wheelSleep || 0;
                        ae(_) > p && m - s > u && (n.go(g ? "<" : ">"),
                        s = m),
                        function c(d) {
                            return !t.releaseWheel || n.state.is(je) || -1 !== o.Controller.getAdjacent(d)
                        }(g) && Ae(d)
                    }
                }
                return {
                    mount: function a() {
                        t.wheel && r(o.Elements.track, "wheel", l, ot)
                    }
                }
            },
            Live: function Js(n, o, t) {
                var r = ne(n).on
                  , s = o.Elements.track
                  , a = t.live && !t.isNavigation
                  , l = Ke("span", gs)
                  , c = zt(90, oe(_, !1));
                function _(p) {
                    z(s, Kn, p),
                    p ? (pt(s, l),
                    c.start()) : (Le(l),
                    c.cancel())
                }
                function m(p) {
                    a && z(s, jn, p ? "off" : "polite")
                }
                return {
                    mount: function d() {
                        a && (m(!o.Autoplay.isPaused()),
                        z(s, Yn, !0),
                        l.textContent = "\u2026",
                        r(wn, oe(m, !0)),
                        r($n, oe(m, !1)),
                        r([Ot, Qe], oe(_, !0)))
                    },
                    disable: m,
                    destroy: function g() {
                        fe(s, [jn, Yn, Kn]),
                        Le(l)
                    }
                }
            }
        })
          , oa = {
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
            classes: hs,
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
        function na(n, o, t) {
            var i = o.Slides;
            function s() {
                i.forEach(function(l) {
                    l.style("transform", "translateX(-" + 100 * l.index + "%)")
                })
            }
            return {
                mount: function r() {
                    ne(n).on([we, re], s)
                },
                start: function a(l, c) {
                    i.style("transition", "opacity " + t.speed + "ms " + t.easing),
                    bn(c)
                },
                cancel: Eo
            }
        }
        function ia(n, o, t) {
            var c, i = o.Move, r = o.Controller, s = o.Scroll, a = o.Elements.list, l = oe(Ee, a, "transition");
            function g() {
                l(""),
                s.cancel()
            }
            return {
                mount: function d() {
                    ne(n).bind(a, "transitionend", function(p) {
                        p.target === a && c && (g(),
                        c())
                    })
                },
                start: function _(p, u) {
                    var E = i.toPosition(p, !0)
                      , h = i.getPosition()
                      , b = function m(p) {
                        var u = t.rewindSpeed;
                        if (n.is(et) && u) {
                            var E = r.getIndex(!0)
                              , h = r.getEnd();
                            if (0 === E && p >= h || E >= h && 0 === p)
                                return u
                        }
                        return t.speed
                    }(p);
                    ae(E - h) >= 1 && b >= 1 ? t.useScroll ? s.scroll(E, b, !1, u) : (l("transform " + b + "ms " + t.easing),
                    i.translate(E, !0),
                    c = u) : (i.jump(p),
                    u())
                },
                cancel: g
            }
        }
        var no = function() {
            function n(t, i) {
                this.event = ne(),
                this.Components = {},
                this.state = function as(n) {
                    var o = n;
                    return {
                        set: function t(r) {
                            o = r
                        },
                        is: function i(r) {
                            return So(mt(r), o)
                        }
                    }
                }(ze),
                this.splides = [],
                this._o = {},
                this._E = {};
                var r = Pe(t) ? vn(document, t) : t;
                Tt(r, r + " is invalid."),
                this.root = r,
                i = Ie({
                    label: me(r, ue) || "",
                    labelledby: me(r, Po) || ""
                }, oa, n.defaults, i || {});
                try {
                    Ie(i, JSON.parse(me(r, ho)))
                } catch {
                    Tt(!1, "Invalid JSON")
                }
                this._o = Object.create(Ie({}, i))
            }
            var o = n.prototype;
            return o.mount = function(i, r) {
                var s = this
                  , a = this.state
                  , l = this.Components;
                return Tt(a.is([ze, Gt]), "Already mounted!"),
                a.set(ze),
                this._C = l,
                this._T = r || this._T || (this.is(It) ? na : ia),
                this._E = i || this._E,
                De(ft({}, ea, this._E, {
                    Transition: this._T
                }), function(d, _) {
                    var g = d(s, l, s._o);
                    l[_] = g,
                    g.setup && g.setup()
                }),
                De(l, function(d) {
                    d.mount && d.mount()
                }),
                this.emit(we),
                Ce(this.root, "is-initialized"),
                a.set(qe),
                this.emit("ready"),
                this
            }
            ,
            o.sync = function(i) {
                return this.splides.push({
                    splide: i
                }),
                i.splides.push({
                    splide: this,
                    isParent: !0
                }),
                this.state.is(qe) && (this._C.Sync.remount(),
                i.Components.Sync.remount()),
                this
            }
            ,
            o.go = function(i) {
                return this._C.Controller.go(i),
                this
            }
            ,
            o.on = function(i, r) {
                return this.event.on(i, r),
                this
            }
            ,
            o.off = function(i) {
                return this.event.off(i),
                this
            }
            ,
            o.emit = function(i) {
                var r;
                return (r = this.event).emit.apply(r, [i].concat(Me(arguments, 1))),
                this
            }
            ,
            o.add = function(i, r) {
                return this._C.Slides.add(i, r),
                this
            }
            ,
            o.remove = function(i) {
                return this._C.Slides.remove(i),
                this
            }
            ,
            o.is = function(i) {
                return this._o.type === i
            }
            ,
            o.refresh = function() {
                return this.emit(re),
                this
            }
            ,
            o.destroy = function(i) {
                void 0 === i && (i = !0);
                var r = this.event
                  , s = this.state;
                return s.is(ze) ? ne(this).on("ready", this.destroy.bind(this, i)) : (De(this._C, function(a) {
                    a.destroy && a.destroy(i)
                }, !0),
                r.emit(Ln),
                r.destroy(),
                i && be(this.splides),
                s.set(Gt)),
                this
            }
            ,
            function Wr(n, o, t) {
                o && fn(n.prototype, o),
                t && fn(n, t),
                Object.defineProperty(n, "prototype", {
                    writable: !1
                })
            }(n, [{
                key: "options",
                get: function() {
                    return this._o
                },
                set: function(i) {
                    this._C.Media.set(i, !0, !0)
                }
            }, {
                key: "length",
                get: function() {
                    return this._C.Slides.getLength(!0)
                }
            }, {
                key: "index",
                get: function() {
                    return this._C.Controller.getIndex()
                }
            }]),
            n
        }();
        no.defaults = {},
        no.STATES = Xr;
        let _i = (()=>{
            class n {
                constructor(t, i) {
                    this._elementRef = t,
                    this._platformID = i,
                    this.currentSlideIndex = 0
                }
                ngAfterViewInit() {
                    console.log(this._platformID, "platformID in SplideSliderDirective"),
                    (0,
                    se.NF)(this._platformID) && this.init()
                }
                init() {
                    return console.log(this._elementRef.nativeElement, " this._elementRef.nativeElement"),
                    console.log(no, "Splide"),
                    this.splideInstance = new no(this._elementRef.nativeElement,this.appSplideSlider).mount(),
                    this.splideInstance
                }
                go(t) {
                    if (this.splideInstance)
                        return this.splideInstance.go(t)
                }
                prev() {
                    return this.go("<")
                }
                next() {
                    return this.go(">")
                }
                destroy() {
                    this.splideInstance && (this.splideInstance.destroy(!0),
                    this.splideInstance = null)
                }
                ngOnDestroy() {
                    this.destroy()
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.Y36(e.SBq),e.Y36(e.Lbi))
            }
            ,
            n.\u0275dir = e.lG2({
                type: n,
                selectors: [["", "appSplideSlider", ""]],
                inputs: {
                    appSplideSlider: "appSplideSlider"
                },
                exportAs: ["splideSlider"],
                standalone: !0
            }),
            n
        }
        )();
        const sa = [[["", "section-title", ""]], [["li", 8, "splide__slide"]]]
          , aa = ["[section-title]", "li.splide__slide"];
        let wo = (()=>{
            class n {
                constructor() {
                    this.sliderConfig = {
                        type: "slide",
                        keyboard: "focused",
                        perPage: 1,
                        perMove: 1,
                        gap: "1.5rem",
                        mediaQuery: "min",
                        arrows: !1,
                        breakpoints: {
                            1200: {
                                perPage: 3,
                                perMove: 1,
                                gap: "3rem"
                            },
                            768: {
                                perPage: 2,
                                perMove: 1,
                                gap: "1.5rem"
                            }
                        }
                    }
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)
            }
            ,
            n.\u0275cmp = e.Xpm({
                type: n,
                selectors: [["app-feedback-slider"]],
                ngContentSelectors: aa,
                decls: 7,
                vars: 1,
                consts: [[1, "py-6", "md:pt-12", "md:pb-16", "px-6", "md:px-10", "lg:px-20", "feedback-section"], [1, "pb-6", "md:pb-10"], ["aria-labelledby", "feedback-slider", 1, "splide", "w-full", "feedback-slider", 3, "appSplideSlider"], [1, "splide__track"], [1, "splide__list"]],
                template: function(t, i) {
                    1 & t && (e.F$t(sa),
                    e.TgZ(0, "div", 0)(1, "div", 1),
                    e.Hsn(2),
                    e.qZA(),
                    e.TgZ(3, "section", 2)(4, "div", 3)(5, "ul", 4),
                    e.Hsn(6, 1),
                    e.qZA()()()()),
                    2 & t && (e.xp6(3),
                    e.Q6J("appSplideSlider", i.sliderConfig))
                },
                dependencies: [_i],
                styles: [".feedback-section[_ngcontent-%COMP%]{background-color:#ebeff4;overflow:hidden}  .feedback-slider .splide__pagination__page{width:10px;height:10px;background-color:#d2d8de;border-radius:50%;margin-left:5px;margin-right:5px;margin-top:24px;transition:background-color .3s linear}  .feedback-slider .splide__pagination__page.is-active{background-color:#5d676e}.feedback-slider[_ngcontent-%COMP%]     .splide__list{height:auto!important}"],
                changeDetection: 0
            }),
            n
        }
        )()
          , $o = (()=>{
            class n {
            }
            return n.\u0275fac = function(t) {
                return new (t || n)
            }
            ,
            n.\u0275cmp = e.Xpm({
                type: n,
                selectors: [["app-feedback-item"]],
                inputs: {
                    feedbackItem: "feedbackItem"
                },
                decls: 13,
                vars: 6,
                consts: function() {
                    let o;
                    return o = "Feedback user avatar",
                    [[1, "feedback-card", "w-full", "px-7", "alison-card-shadow", "h-full"], [1, "feedback-card-header", "pt-6", "pb-4", "flex", "relative"], [1, "feedback-avatar", "object-cover", "mr-6"], ["alt", o, 1, "w-full", "h-full", "object-contain", 3, "src"], [1, "flex", "flex-col", "justify-between"], [1, "alsion-secontady-text", "text-color", "font-black", "mb-0"], [1, "feedback-professional", "alison-caption", "mb-1.5"], [1, "feedback-rate", "mb-0"], [1, "quote-icon", "icon-double-quote-right", "alison-icon-md"], [1, "feedback-card-body", "mb-7", "alison-caption"]]
                },
                template: function(t, i) {
                    1 & t && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2),
                    e._UZ(3, "img", 3),
                    e.qZA(),
                    e.TgZ(4, "div", 4)(5, "p", 5),
                    e._uU(6),
                    e.qZA(),
                    e.TgZ(7, "p", 6),
                    e._uU(8),
                    e.qZA(),
                    e._UZ(9, "p", 7),
                    e.qZA(),
                    e._UZ(10, "div", 8),
                    e.qZA(),
                    e.TgZ(11, "div", 9),
                    e._uU(12),
                    e.qZA()()),
                    2 & t && (e.xp6(3),
                    e.Q6J("src", i.feedbackItem.avatar, e.LSH),
                    e.xp6(3),
                    e.hij(" ", i.feedbackItem.name, " "),
                    e.xp6(2),
                    e.hij(" ", i.feedbackItem.profession, " "),
                    e.xp6(1),
                    e.Udp("background-image", "url(/ssr/assets/images/publish/rate.png)"),
                    e.xp6(3),
                    e.hij(" ", i.feedbackItem.feedback, " "))
                },
                styles: [".feedback-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:16px}.feedback-avatar[_ngcontent-%COMP%]{box-shadow:0 3px 6px #00000029;border-radius:50%;width:64px;height:64px}.feedback-professional[_ngcontent-%COMP%]{color:#5d676e}.feedback-card-body[_ngcontent-%COMP%]{color:var(--extra7-color);line-height:22px}.feedback-rate[_ngcontent-%COMP%]{width:84px;height:12px;background-repeat:no-repeat;background-size:100% 100%}.quote-icon[_ngcontent-%COMP%]{color:#d5dcdd;position:absolute;top:17px;right:-10px}"],
                changeDetection: 0
            }),
            n
        }
        )();
        function la(n, o) {
            if (1 & n && (e.TgZ(0, "li", 133),
            e._UZ(1, "app-feedback-item", 134),
            e.qZA()),
            2 & n) {
                const t = o.$implicit;
                e.xp6(1),
                e.Q6J("feedbackItem", t)
            }
        }
        let ca = (()=>{
            class n {
                constructor(t, i) {
                    this._metaTagService = t,
                    this._title = i,
                    this.feedbackItems = [{
                        avatar: "/ssr/assets/images/publish/assisted-course-creator-kristina.png",
                        name: "Kristina B.",
                        profession: "Assisted Course Creator",
                        feedback: "The team at Alison is very responsive, transparent, flexible, and respectful. They help you upload all the course material, so you don\u2019t have to spend time on that. Also, being able to reach millions of learners on the Alison database makes me more known in the online world, giving me credibility. I would highly recommend working with Alison!"
                    }, {
                        avatar: "/ssr/assets/images/publish/assisted-course-creator-alex.png",
                        name: "Alex L.",
                        profession: "Assisted Course Creator",
                        feedback: "My courses are marketed well and I can see my learners growing, which means I am making an impact on learners and it gives me the confidence to create more courses. I enjoy working with Alison because they are the best platform to host your academic content in terms of transparency for finance and learners\u2019 data."
                    }, {
                        avatar: "/ssr/assets/images/publish/assisted-course-creator-eboni.png",
                        name: "Eboni G.",
                        profession: "Assisted Course Creator",
                        feedback: "I couldn\u2019t be more pleased with the platform and the great team that supports learners. The Alison training platform connects course creators and individuals seeking knowledge. Nothing could be more empowering than launching a course and seeing individuals succeed. The compensation is also excellent, depending on the popularity of your course."
                    }]
                }
                ngOnInit() {
                    this._title.setTitle("Alison | Become a Content Assistant"),
                    this._metaTagService.addTags([{
                        name: "description",
                        content: "Content Assistants work with Assisted Course Creators to build courses."
                    }])
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.Y36(ge.h_),e.Y36(ge.Dx))
            }
            ,
            n.\u0275cmp = e.Xpm({
                type: n,
                selectors: [["app-become-assisted-course-creator"]],
                decls: 200,
                vars: 8,
                consts: function() {
                    let o, t, i, r, s, a, l, c, d, _, g, m, p, u, E, h, b, C, f, U, v, G, O, N, W, D, M, P, I, k, H, j, q, w, x, R, y, V, J, K, ie, T, X, F, Y, te;
                    return o = " Become an Assisted " + "\ufffd#9\ufffd\ufffd/#9\ufffd" + " Course Creator Today ",
                    t = " If you\u2019re a subject matter expert who has content ready to go, but aren\u2019t familiar with course creation tools, we\u2019re here to help. Our team will work with Content Assistants to build your course on our publishing tool. ",
                    i = " Apply Now ",
                    r = " Learn More ",
                    s = "Become assisted course creator Image",
                    a = " Make a difference in the world ",
                    l = " Make a difference in the world ",
                    c = " Earn an income with your skills ",
                    d = " Earn an income with your skills ",
                    _ = " Build your brand as an expert ",
                    g = " Build your brand as an expert ",
                    m = " Expand your reach to 25 million+ people ",
                    p = " Expand your reach " + "\ufffd#50\ufffd\ufffd/#50\ufffd" + " to 25 million+ people ",
                    u = " What do Assisted Course Creators do? ",
                    E = " You will provide your content to Alison. Content Assistants will then turn your content into a course ",
                    h = " The Assistants will write course descriptions and create pedagogically sound assessments, to make things as easy as possible for you ",
                    b = " You will review the developed course to ensure it accurately and effectively teaches your subject ",
                    C = " Become an Assisted Course Creator ",
                    f = " What do Assisted Course Creators do? ",
                    U = "Who can become a course creator image",
                    v = " Who can become an " + "\ufffd#81\ufffd\ufffd/#81\ufffd" + " Assisted Course Creator? ",
                    G = " A current or former lecturer, teacher or researcher ",
                    O = " An experienced professional with a passion for teaching ",
                    N = " An expert in a sought-after field ",
                    W = " A course provider looking to grow their online audience ",
                    D = " Someone with excellent English language writing skills ",
                    M = " Someone who can provide well-written materials ",
                    P = " Alison\u2019s " + "\ufffd#117\ufffd" + "Assisted Course Creators" + "\ufffd/#117\ufffd" + " Empower Millions ",
                    I = "" + "\ufffd#123\ufffd" + "25 million+" + "\ufffd/#123\ufffd" + " learners ",
                    k = "" + "\ufffd#128\ufffd" + "5 million+" + "\ufffd/#128\ufffd" + " graduates ",
                    H = " Alison\u2019s " + "\ufffd#132\ufffd" + "Assisted Course Creators" + "\ufffd/#132\ufffd" + " Empower Millions ",
                    j = "" + "\ufffd#138\ufffd" + "25 million+" + "\ufffd/#138\ufffd" + "" + "\ufffd#139\ufffd\ufffd/#139\ufffd" + " learners ",
                    q = "" + "\ufffd#144\ufffd" + "5 million+" + "\ufffd/#144\ufffd" + "" + "\ufffd#145\ufffd\ufffd/#145\ufffd" + " graduates ",
                    w = " What Alison\u2019s Assisted Course Creators have to say ",
                    x = " How do I become an Assisted Course Creator? ",
                    R = " Sign up to Alison if you haven\u2019t already ",
                    y = " Fill out our short " + "\ufffd#165\ufffd" + "application form" + "\ufffd/#165\ufffd" + "",
                    V = "Take our training course",
                    J = " Apply Now ",
                    K = " How do I become an " + "\ufffd#176\ufffd\ufffd/#176\ufffd" + " Assisted Course Creator? ",
                    ie = "How to become assisted course creator Image",
                    T = " What do I do now? ",
                    X = " Now, you earn an income by " + "[\ufffd#186\ufffd|\ufffd#187\ufffd|\ufffd#188\ufffd]" + "monetizing your skills." + "[\ufffd/#186\ufffd|\ufffd/#187\ufffd|\ufffd/#188\ufffd]" + " Now, you share your expertise with a " + "[\ufffd#186\ufffd|\ufffd#187\ufffd|\ufffd#188\ufffd]" + "global audience." + "[\ufffd/#186\ufffd|\ufffd/#187\ufffd|\ufffd/#188\ufffd]" + " But most importantly, now, you " + "[\ufffd#186\ufffd|\ufffd#187\ufffd|\ufffd#188\ufffd]" + "empower millions" + "[\ufffd/#186\ufffd|\ufffd/#187\ufffd|\ufffd/#188\ufffd]" + " across the world. After all, it\u2019s not just us who need your expertise. The world needs it too. ",
                    X = e.Zx4(X),
                    F = " Become an Assisted Course Creator ",
                    Y = " What do I do now? ",
                    te = "What do I do Image",
                    [[1, "become-assisted-course-creator-outer-container", "flex"], [1, "become-assisted-course-creator-inner-container", "w-full"], [1, "ads-container-top", "hidden", "md:block"], [3, "fromExistingCSS", "adFormat", "panelClass"], [1, "become-assisted-course-creator-container"], [1, "become-assisted-course-creator-header-article", "flex", "flex-col", "md:flex-row", "article-container", "items-center", "px-6", "md:px-10", "lg:px-20"], [1, "article-content", "w-full", "py-6", "md:py-20", "md:my-1.5"], [1, "alison-h2", "md:alison-title", "title-color", "mb-3", "md:mb-4", "text-center", "md:text-left", "max-w-lg"], o, [1, "block", "sm:hidden"], [1, "article-body", "md:max-w-lg", "alison-body-secondary", "md:alison-body", "text-color", "text-center", "md:text-left", "pr-0", "xl:pr-12", "mb-0"], t, [1, "article-actions", "w-full", "xl:w-2/3", "two-actions", "mt-6", "md:mt-9", "grid", "gap-6", "grid-cols-2"], ["href", "/publish/assisted-course-creator-application", "mat-flat-button", "", "color", "primary", 1, "apply-now-button", "alison-button", "alison-button-lg", "w-full", "order-2", "md:order-1"], i, ["appScrollIntoView", "#benefits", "mat-stroked-button", "", "color", "primary", 1, "learn-more-button", "alison-button", "alison-button-lg", "w-full", "order-1", "md:order-2"], r, [1, "image-container", "w-full", "flex", "items-end", "justify-center", "md:justify-end", "self-end"], ["srcset", "\n                /ssr/assets/images/publish/become-assisted-course-creator-today-mobile.webp 768w,\n                /ssr/assets/images/publish/become-assisted-course-creator-today.webp\n              "], ["alt", s, "src", "/ssr/assets/images/publish/become-assisted-course-creator-today.png", "srcset", "\n                /ssr/assets/images/publish/become-assisted-course-creator-today-mobile.png 768w,\n                /ssr/assets/images/publish/become-assisted-course-creator-today.png\n              ", 1, "become-assisted-course-creator-header-article-image", "w-full", "object-contain", "px-8", "md:px-0"], ["id", "benefits", 1, "benefits-bar", "flex", "flex-col", "lg:flex-row", "items-start", "lg:items-center", "justify-between", "py-7", "lg:py-6", "px-6", "md:px-10", "lg:px-20"], [1, "benefit-item", "flex", "items-center", "pb-5", "lg:pb-0"], [1, "benefit-icon-container", "mr-4", "lg:mr-5", "inline-flex", "items-center", "justify-center"], [1, "benefit-icon", "alison-icon-md", "p-0", "md:p-1.5", "icon-check1"], [1, "benefit-name", "alison-caption", "font-bold", "block", "lg:hidden", "mb-0"], a, [1, "benefit-md-name", "alison-body-secondary", "font-bold", "lg:block", "hidden", "mb-0"], l, c, d, _, g, [1, "benefit-item", "flex", "items-center"], m, p, [1, "lg:block", "hidden"], [1, "who-can-become-assisted-course-creator-article", "flex", "items-center", "flex-col-reverse", "md:flex-row-reverse", "px-6", "md:pl-10", "md:pr-10", "lg:pr-20"], [1, "article-content", "mt-6", "mb-8", "md:my-9", "lg:my-16", "w-full"], [1, "alison-h2", "md:alison-title", "title-color", "hidden", "md:block", "mb-6"], u, [1, "article-list"], [1, "article-list-item", "alison-body-secondary", "md:alison-body", "text-color", "mb-3", "md:mb-4", "flex", "md:mr-10"], [1, "article-list-item-icon", "icon-check1", "alison-icon-md", "alison-primary", "mr-3", "mt-1"], E, h, [1, "article-list-item", "alison-body-secondary", "md:alison-body", "text-color", "mb-3", "md:mb-4", "flex", "md:mr-14"], b, [1, "article-actions", "mt-6", "md:mt-9", "text-center", "md:text-left"], ["mat-flat-button", "", "color", "primary", 1, "apply-now-button", "alison-button", "alison-button-lg", "w-full", "sm:w-auto", 3, "href"], C, [1, "image-container", "w-full", "md:w-2/3"], [1, "alison-h2", "title-color", "text-center", "block", "md:hidden", "my-6"], f, ["srcset", "\n                /ssr/assets/images/publish/what-do-assisted-course-creators-do-mobile.webp 768w,\n                /ssr/assets/images/publish/what-do-assisted-course-creators-do.webp\n              "], ["alt", U, "loading", "lazy", "src", "/ssr/assets/images/publish/what-do-assisted-course-creators-do.png", "srcset", "\n                /ssr/assets/images/publish/what-do-assisted-course-creators-do-mobile.png 768w,\n                /ssr/assets/images/publish/what-do-assisted-course-creators-do.png\n              ", 1, "who-can-become-assisted-course-creator-article-image", "w-full", "object-contain"], [1, "how-does-alison-support-you", "article-container", "py-6", "md:py-12", "px-6", "md:px-10", "lg:px-20"], [1, "w-full", "text-center"], [1, "alison-h2", "md:alison-title", "title-color", "text-center", "mb-6", "lg:mb-9"], v, [1, "how-does-alison-support-you-cards", "grid", "grid-cols-1", "lg:grid-cols-2", "xl:grid-cols-3", "gap-5", "lg:gap-9"], [1, "how-does-alison-support-you-card", "lg:p-5", "flex", "items-center", "lg:items-start", "text-start", "text-color"], [1, "how-does-alison-support-you-card-icon-container", "flex", "items-center", "justify-center", "mr-3"], [1, "icon-teacher", "how-does-alison-support-you-card-icon"], [1, "alison-caption", "md:alison-body-secondary"], G, [1, "icon-user-tie", "how-does-alison-support-you-card-icon"], O, [1, "icon-expert", "how-does-alison-support-you-card-icon"], [1, "alison-caption", "md:alison-body-secondary", "md:mr-6"], N, [1, "icon-user-group", "how-does-alison-support-you-card-icon"], W, [1, "icon-thought-bubble-eng", "how-does-alison-support-you-card-icon"], D, [1, "icon-book-open-cover", "how-does-alison-support-you-card-icon"], M, [1, "achievement-bar", "hidden", "md:flex", "py-7", "px-20"], [1, "achievement-item", "w-full", "flex", "items-center"], [1, "achievement-name", "alison-h5", "mb-0"], P, [1, "highlited-text"], [1, "achievement-group-container", "w-full", "flex", "justify-end"], [1, "achievement-item", "flex", "items-center", "mr-12"], [1, "achievement-icon", "alison-icon-xl", "icon-user-group"], [1, "achievement-name", "alison-body-secondary", "md:alison-body", "mb-0"], I, [1, "achievement-item", "flex", "items-center"], [1, "achievement-icon", "alison-icon-xl", "icon-graduation-cap"], k, [1, "mobile-achievement-bar", "achievement-bar", "md:hidden", "py-6", "alison-shadow-low", "px-6"], [1, "text-center", "mobile-achievement-title", "title-color", "alison-body-secondary", "md:alison-body", "pb-4"], H, [1, "mobile-achievement-cards-container", "items-center", "grid", "grid-cols-2", "gap-6"], [1, "mobile-achievement-card", "w-full", "text-center", "pt-2", "pr-0.5", "pb-2", "rounded-xl"], [1, "alison-icon-lg", "achievement-icon", "icon-user-group"], [1, "mobile-achievement-name", "alison-body-secondary", "m-auto", "mb-0"], j, [1, "alison-icon-lg", "achievement-icon", "icon-graduation-cap"], q, [1, "slider-container"], ["section-title", ""], [1, "alison-h4", "md:alison-title", "font-black", "title-color", "text-center"], w, ["class", "splide__slide flex", 4, "ngFor", "ngForOf"], [1, "how-can-become-assisted-course-creator-article", "flex", "flex-col-reverse", "md:flex-row-reverse", "items-center", "px-6", "md:px-10", "lg:px-20"], [1, "article-content", "w-full", "pt-6", "pb-8", "md:py-16"], x, [1, "article-list-item", "alison-body-secondary", "md:alison-body", "text-color", "mb-3", "md:mb-4", "flex"], R, y, ["href", "/publish/assisted-course-creator-application", 1, "aplication-form"], V, [1, "article-actions", "w-full", "text-center", "md:text-left", "mt-6", "md:mt-9"], ["mat-flat-button", "", "color", "primary", "href", "/publish/assisted-course-creator-application", 1, "apply-now-button", "alison-button", "alison-button-lg"], J, [1, "image-container", "w-full", "self-end"], K, ["srcset", "\n                /ssr/assets/images/publish/how-to-become-assisted-course-creator-mobile.webp 768w,\n                /ssr/assets/images/publish/how-to-become-assisted-course-creator.webp\n              "], ["alt", ie, "loading", "lazy", "src", "/ssr/assets/images/publish/how-to-become-assisted-course-creator.png", "srcset", "\n                /ssr/assets/images/publish/how-to-become-assisted-course-creator-mobile.png 768w,\n                /ssr/assets/images/publish/how-to-become-assisted-course-creator.png\n              ", 1, "how-can-become-assisted-course-creator-article-image", "object-contain", "w-full", "m-auto", "md:ml-0"], [1, "what-do-i-do-article", "article-container", "flex", "flex-col-reverse", "md:flex-row", "items-center", "px-6", "md:px-10", "lg:px-20"], [1, "article-content", "w-full", "mt-6", "mb-10", "md:my-12"], [1, "alison-h2", "md:alison-title", "title-color", "hidden", "md:block", "mb-4"], T, [1, "article-body", "md:max-w-lg", "alison-body-secondary", "md:alison-body", "text-color", "text-center", "md:text-left", "mb-0"], X, ["mat-flat-button", "", "color", "primary", 1, "apply-now-button", "alison-button", "alison-button-lg", 3, "href"], F, [1, "image-container", "w-full", "flex", "flex-col", "md:flex-row", "items-center", "md:items-end", "self-end", "justify-center", "md:justify-end"], Y, ["srcset", "\n                /ssr/assets/images/publish/what-do-i-do-mobile.webp 768w,\n                /ssr/assets/images/publish/what-do-i-do.webp\n              "], ["alt", te, "loading", "lazy", "src", "/ssr/assets/images/publish/what-do-i-do.png", "srcset", "\n                /ssr/assets/images/publish/what-do-i-do-mobile.png 768w,\n                /ssr/assets/images/publish/what-do-i-do.png\n              ", 1, "what-do-i-do-article-image", "object-contain", "w-full"], [1, "ads-container-right", "hidden", "md:flex"], [3, "fromExistingCSS", "panelClass"], [1, "splide__slide", "flex"], [3, "feedbackItem"]]
                },
                template: function(t, i) {
                    1 & t && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2),
                    e._UZ(3, "google-adsense", 3),
                    e.qZA(),
                    e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h3", 7),
                    e.tHW(8, 8),
                    e._UZ(9, "br", 9),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(10, "p", 10),
                    e.SDv(11, 11),
                    e.qZA(),
                    e.TgZ(12, "div", 12)(13, "a", 13),
                    e.SDv(14, 14),
                    e.qZA(),
                    e.TgZ(15, "a", 15),
                    e.SDv(16, 16),
                    e.qZA()()(),
                    e.TgZ(17, "div", 17)(18, "picture"),
                    e._UZ(19, "source", 18)(20, "img", 19),
                    e.qZA()()(),
                    e.TgZ(21, "div", 20)(22, "div", 21)(23, "div", 22),
                    e._UZ(24, "i", 23),
                    e.qZA(),
                    e.TgZ(25, "p", 24),
                    e.SDv(26, 25),
                    e.qZA(),
                    e.TgZ(27, "p", 26),
                    e.SDv(28, 27),
                    e.qZA()(),
                    e.TgZ(29, "div", 21)(30, "div", 22),
                    e._UZ(31, "i", 23),
                    e.qZA(),
                    e.TgZ(32, "p", 24),
                    e.SDv(33, 28),
                    e.qZA(),
                    e.TgZ(34, "p", 26),
                    e.SDv(35, 29),
                    e.qZA()(),
                    e.TgZ(36, "div", 21)(37, "div", 22),
                    e._UZ(38, "i", 23),
                    e.qZA(),
                    e.TgZ(39, "p", 24),
                    e.SDv(40, 30),
                    e.qZA(),
                    e.TgZ(41, "p", 26),
                    e.SDv(42, 31),
                    e.qZA()(),
                    e.TgZ(43, "div", 32)(44, "div", 22),
                    e._UZ(45, "i", 23),
                    e.qZA(),
                    e.TgZ(46, "p", 24),
                    e.SDv(47, 33),
                    e.qZA(),
                    e.TgZ(48, "p", 26),
                    e.tHW(49, 34),
                    e._UZ(50, "br", 35),
                    e.N_p(),
                    e.qZA()()(),
                    e.TgZ(51, "div", 36)(52, "div", 37)(53, "h3", 38),
                    e.SDv(54, 39),
                    e.qZA(),
                    e.TgZ(55, "div", 40)(56, "p", 41),
                    e._UZ(57, "i", 42),
                    e.ynx(58),
                    e.SDv(59, 43),
                    e.BQk(),
                    e.qZA(),
                    e.TgZ(60, "p", 41),
                    e._UZ(61, "i", 42),
                    e.ynx(62),
                    e.SDv(63, 44),
                    e.BQk(),
                    e.qZA(),
                    e.TgZ(64, "p", 45),
                    e._UZ(65, "i", 42),
                    e.ynx(66),
                    e.SDv(67, 46),
                    e.BQk(),
                    e.qZA()(),
                    e.TgZ(68, "div", 47)(69, "a", 48),
                    e.SDv(70, 49),
                    e.qZA()()(),
                    e.TgZ(71, "div", 50)(72, "h3", 51),
                    e.SDv(73, 52),
                    e.qZA(),
                    e.TgZ(74, "picture"),
                    e._UZ(75, "source", 53)(76, "img", 54),
                    e.qZA()()(),
                    e.TgZ(77, "div", 55)(78, "div", 56)(79, "h3", 57),
                    e.tHW(80, 58),
                    e._UZ(81, "br", 9),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(82, "div", 59)(83, "div", 60)(84, "div", 61),
                    e._UZ(85, "i", 62),
                    e.qZA(),
                    e.TgZ(86, "span", 63),
                    e.SDv(87, 64),
                    e.qZA()(),
                    e.TgZ(88, "div", 60)(89, "div", 61),
                    e._UZ(90, "i", 65),
                    e.qZA(),
                    e.TgZ(91, "span", 63),
                    e.SDv(92, 66),
                    e.qZA()(),
                    e.TgZ(93, "div", 60)(94, "div", 61),
                    e._UZ(95, "i", 67),
                    e.qZA(),
                    e.TgZ(96, "span", 68),
                    e.SDv(97, 69),
                    e.qZA()(),
                    e.TgZ(98, "div", 60)(99, "div", 61),
                    e._UZ(100, "i", 70),
                    e.qZA(),
                    e.TgZ(101, "span", 63),
                    e.SDv(102, 71),
                    e.qZA()(),
                    e.TgZ(103, "div", 60)(104, "div", 61),
                    e._UZ(105, "i", 72),
                    e.qZA(),
                    e.TgZ(106, "span", 63),
                    e.SDv(107, 73),
                    e.qZA()(),
                    e.TgZ(108, "div", 60)(109, "div", 61),
                    e._UZ(110, "i", 74),
                    e.qZA(),
                    e.TgZ(111, "span", 63),
                    e.SDv(112, 75),
                    e.qZA()()()()(),
                    e.TgZ(113, "div", 76)(114, "div", 77)(115, "p", 78),
                    e.tHW(116, 79),
                    e._UZ(117, "b", 80),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(118, "div", 81)(119, "div", 82),
                    e._UZ(120, "i", 83),
                    e.TgZ(121, "p", 84),
                    e.tHW(122, 85),
                    e._UZ(123, "b", 80),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(124, "div", 86),
                    e._UZ(125, "i", 87),
                    e.TgZ(126, "p", 84),
                    e.tHW(127, 88),
                    e._UZ(128, "b", 80),
                    e.N_p(),
                    e.qZA()()()(),
                    e.TgZ(129, "div", 89)(130, "h4", 90),
                    e.tHW(131, 91),
                    e._UZ(132, "b", 80),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(133, "div", 92)(134, "div", 93),
                    e._UZ(135, "i", 94),
                    e.TgZ(136, "p", 95),
                    e.tHW(137, 96),
                    e._UZ(138, "b", 80)(139, "br"),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(140, "div", 93),
                    e._UZ(141, "i", 97),
                    e.TgZ(142, "p", 95),
                    e.tHW(143, 98),
                    e._UZ(144, "b", 80)(145, "br"),
                    e.N_p(),
                    e.qZA()()()(),
                    e.TgZ(146, "div", 99)(147, "app-feedback-slider"),
                    e.ynx(148, 100),
                    e.TgZ(149, "h2", 101),
                    e.SDv(150, 102),
                    e.qZA(),
                    e.BQk(),
                    e.YNc(151, la, 2, 1, "li", 103),
                    e.qZA()(),
                    e.TgZ(152, "div", 104)(153, "div", 105)(154, "h3", 38),
                    e.SDv(155, 106),
                    e.qZA(),
                    e.TgZ(156, "div", 40)(157, "p", 107),
                    e._UZ(158, "i", 42),
                    e.ynx(159),
                    e.SDv(160, 108),
                    e.BQk(),
                    e.qZA(),
                    e.TgZ(161, "p", 107),
                    e._UZ(162, "i", 42),
                    e.TgZ(163, "span"),
                    e.tHW(164, 109),
                    e._UZ(165, "a", 110),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(166, "p", 107),
                    e._UZ(167, "i", 42),
                    e.ynx(168),
                    e.SDv(169, 111),
                    e.BQk(),
                    e.qZA()(),
                    e.TgZ(170, "div", 112)(171, "a", 113),
                    e.SDv(172, 114),
                    e.qZA()()(),
                    e.TgZ(173, "div", 115)(174, "h3", 51),
                    e.tHW(175, 116),
                    e._UZ(176, "br", 9),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(177, "picture"),
                    e._UZ(178, "source", 117)(179, "img", 118),
                    e.qZA()()(),
                    e.TgZ(180, "div", 119)(181, "div", 120)(182, "h3", 121),
                    e.SDv(183, 122),
                    e.qZA(),
                    e.TgZ(184, "p", 123),
                    e.tHW(185, 124),
                    e._UZ(186, "b", 80)(187, "b", 80)(188, "b", 80),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(189, "div", 47)(190, "a", 125),
                    e.SDv(191, 126),
                    e.qZA()()(),
                    e.TgZ(192, "div", 127)(193, "h3", 51),
                    e.SDv(194, 128),
                    e.qZA(),
                    e.TgZ(195, "picture"),
                    e._UZ(196, "source", 129)(197, "img", 130),
                    e.qZA()()()()(),
                    e.TgZ(198, "div", 131),
                    e._UZ(199, "google-adsense", 132),
                    e.qZA()()),
                    2 & t && (e.xp6(3),
                    e.Q6J("fromExistingCSS", "underHeader")("adFormat", "auto")("panelClass", "hidden md:block"),
                    e.xp6(66),
                    e.Q6J("href", "/publish/assisted-course-creator-application", e.LSH),
                    e.xp6(82),
                    e.Q6J("ngForOf", i.feedbackItems),
                    e.xp6(39),
                    e.Q6J("href", "/publish/assisted-course-creator-application", e.LSH),
                    e.xp6(9),
                    e.Q6J("fromExistingCSS", "rightFixed")("panelClass", "hidden md:flex"))
                },
                dependencies: [se.sg, lt, wt, ct, wo, $o],
                styles: [".ads-container-top[_ngcontent-%COMP%], .ads-container-right[_ngcontent-%COMP%]{background-color:#f7f7f7}@media (min-width: 1024px){.become-assisted-course-creator-header-article[_ngcontent-%COMP%]{min-height:calc(100vh - 292px)}}.what-do-i-do-article-image[_ngcontent-%COMP%]{width:clamp(240px,30vw,310px)}.article-actions[_ngcontent-%COMP%]:not(.two-actions)   .apply-now-button[_ngcontent-%COMP%]{min-width:170px}.what-do-i-do-article[_ngcontent-%COMP%]{background-color:var(--extra6-color)}.benefits-bar[_ngcontent-%COMP%]{background-color:var(--extra3-color);color:var(--extra3-contrast)}.benefits-bar[_ngcontent-%COMP%]   .benefit-icon-container[_ngcontent-%COMP%]{border-radius:50%;background-color:var(--extra3-contrast);color:var(--extra3-color)}.benefits-bar[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]:nth-child(1)   .benefit-md-name[_ngcontent-%COMP%]{max-width:130px}.benefits-bar[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]:nth-child(2)   .benefit-md-name[_ngcontent-%COMP%]{max-width:111px}.benefits-bar[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]:nth-child(3)   .benefit-md-name[_ngcontent-%COMP%]{max-width:118px}.benefits-bar[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]:nth-child(4)   .benefit-md-name[_ngcontent-%COMP%]{max-width:151px}.become-assisted-course-creator-header-article-image[_ngcontent-%COMP%]{max-width:550px}.how-can-become-assisted-course-creator-article-image[_ngcontent-%COMP%], .who-can-become-assisted-course-creator-article-image[_ngcontent-%COMP%]{max-width:370px}.achievement-bar[_ngcontent-%COMP%]{background-color:var(--extra5-color);color:var(--extra5-contrast)}.achievement-bar[_ngcontent-%COMP%]   .achievement-icon[_ngcontent-%COMP%]{color:#63c19d}.mobile-achievement-card[_ngcontent-%COMP%]{background-color:var(--mat-primary-hover)}.how-does-alison-support-you[_ngcontent-%COMP%]{background-color:var(--extra4-color)}.how-does-alison-support-you[_ngcontent-%COMP%]   .how-does-alison-support-you-card[_ngcontent-%COMP%]{border-radius:16px}.how-does-alison-support-you[_ngcontent-%COMP%]   .how-does-alison-support-you-card-icon-container[_ngcontent-%COMP%]{border:4px solid #98c5e2;background-color:#fff;border-radius:50%}.how-does-alison-support-you[_ngcontent-%COMP%]   .how-does-alison-support-you-card-icon-container[_ngcontent-%COMP%]   .how-does-alison-support-you-card-icon[_ngcontent-%COMP%]{color:#4292c3;width:clamp(28px,4vw,var(--ng-alison-icon-xl-size));max-width:clamp(28px,4vw,var(--ng-alison-icon-xl-size));height:clamp(28px,4vw,var(--ng-alison-icon-xl-size));max-height:clamp(28px,4vw,var(--ng-alison-icon-xl-size));font-size:clamp(28px,4vw,var(--ng-alison-icon-xl-size))}@media only screen and (min-width: 1024px){.how-does-alison-support-you[_ngcontent-%COMP%]   .how-does-alison-support-you-card[_ngcontent-%COMP%]{color:var(--text-color);background-color:var(--text-contrast)}}.aplication-form[_ngcontent-%COMP%]{color:var(--extra1-color);text-decoration:none;cursor:pointer;font-weight:700}.aplication-form[_ngcontent-%COMP%]:hover{text-decoration:underline;cursor:pointer}.learn-more-button[_ngcontent-%COMP%]{color:var(--mat-primary-bold)!important}.highlited-text[_ngcontent-%COMP%]{color:var(--mat-primary-bold)}.slider-container[_ngcontent-%COMP%]{box-shadow:0 1px 2px #00000029;position:relative;z-index:1}"]
            }),
            n
        }
        )();
        function _a(n, o) {
            if (1 & n && (e.TgZ(0, "li", 126),
            e._UZ(1, "app-feedback-item", 127),
            e.qZA()),
            2 & n) {
                const t = o.$implicit;
                e.xp6(1),
                e.Q6J("feedbackItem", t)
            }
        }
        let da = (()=>{
            class n {
                constructor(t, i) {
                    this._metaTagService = t,
                    this._title = i,
                    this.feedbackItems = [{
                        avatar: "/ssr/assets/images/publish/content-assistant-samson.png",
                        name: "Samson A.",
                        profession: "Content Assistant",
                        feedback: "My experience with Alison as a Content Assistant has been excellent. Working for Alison has helped me improve my internet research skills and sharpen my time management skills. I would recommend anyone with a great work ethic to work for Alison because they are wonderful and helpful people who will always be there for you and make time for you."
                    }, {
                        avatar: "/ssr/assets/images/publish/content-assistant-alfred.png",
                        name: "Alfred B.",
                        profession: "Content Assistant",
                        feedback: "Alison made me discover my passion for the e-learning industry while allowing me to build a career path along the way. I would recommend working with Alison to those who are passionate about the e-learning industry. You can take your skills to the next level, impact lives, and make money while working from home. So, it is a win-win situation."
                    }, {
                        avatar: "/ssr/assets/images/publish/content-assistant-daniel.png",
                        name: "Daniel G.",
                        profession: "Content Assistant",
                        feedback: "I was trained and mentored on course creation and started earning income that helped to complement my low-paying job. I bought land in my village and constructed a house through this work. During Covid-19, Alison was my only source of income. I plan to purchase land in the city and set up other investments."
                    }]
                }
                ngOnInit() {
                    this._title.setTitle("Alison | Become an Assisted Course Creators"),
                    this._metaTagService.addTags([{
                        name: "description",
                        content: "Assisted Course Creators build courses with the help of Content Assistants."
                    }])
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.Y36(ge.h_),e.Y36(ge.Dx))
            }
            ,
            n.\u0275cmp = e.Xpm({
                type: n,
                selectors: [["app-become-content-assistant"]],
                decls: 184,
                vars: 6,
                consts: function() {
                    let o, t, i, r, s, a, l, c, d, _, g, m, p, u, E, h, b, C, f, U, v, G, O, N, W, D, M, P, I, k, H, j, q, w, x, R, y, V, J, K, ie, T, X;
                    return o = " Become a Content " + "\ufffd#9\ufffd\ufffd/#9\ufffd" + " Assistant Today ",
                    t = " If you can teach, write, and summarise information, and are looking for a flexible job that lets you work from home, look no further! ",
                    i = " Apply Now ",
                    r = " Learn More ",
                    s = "Become content assistant today Image",
                    a = " Join a team dedicated to empowerment ",
                    l = " Join a team dedicated to empowerment ",
                    c = " Enjoy a flexible working schedule ",
                    d = " Enjoy a flexible working schedule ",
                    _ = " Get on-boarded using our in-house courses ",
                    g = " Get on-boarded using our in-house courses ",
                    m = " What do Content Assistants do? ",
                    p = " They work with " + "\ufffd#52\ufffd" + " Assisted Course Creators " + "\ufffd/#52\ufffd" + " to convert content into courses ",
                    u = " They write module and course descriptions, and learning outcomes ",
                    E = " They develop assessments that are pedagogically sound ",
                    h = " Become a Content Assistant ",
                    b = " What do Content " + "\ufffd#67\ufffd\ufffd/#67\ufffd" + " Assistants do? ",
                    C = "What do content assistants do Image",
                    f = " Who can become " + "\ufffd#75\ufffd\ufffd/#75\ufffd" + " a Content Assistant? ",
                    U = " Someone with excellent skills in spoken and written English with great attention to detail ",
                    v = " Someone with the ability to accurately and quickly distill lots of information ",
                    G = " A retired or part-time lecturer, teacher, journalist, scriptwriter, novelist, editor, copywriter or sub-editor ",
                    O = " Someone with great general knowledge and a curiosity about a wide variety of subjects ",
                    N = " Alison\u2019s " + "\ufffd#101\ufffd" + "Content Assistants" + "\ufffd/#101\ufffd" + " Empower Millions ",
                    W = "" + "\ufffd#107\ufffd" + "25 million+" + "\ufffd/#107\ufffd" + " learners ",
                    D = "" + "\ufffd#112\ufffd" + "5 million+" + "\ufffd/#112\ufffd" + " graduates ",
                    M = " Alison\u2019s " + "\ufffd#116\ufffd" + "Content Assistants" + "\ufffd/#116\ufffd" + " Empower Millions ",
                    P = "" + "\ufffd#122\ufffd" + "25 million+" + "\ufffd/#122\ufffd" + " learners ",
                    I = "" + "\ufffd#127\ufffd" + "5 million+" + "\ufffd/#127\ufffd" + " graduates ",
                    k = " What Alison\u2019s Content Assistants have to say ",
                    H = " What Alison\u2019s Content Assistants have to say ",
                    j = " How do I become a Content Assistant? ",
                    q = " Fill out the " + "\ufffd#145\ufffd" + " application form " + "\ufffd/#145\ufffd" + " and take two training courses ",
                    w = " Use those skills to build a course ",
                    x = " Get your course reviewed by us ",
                    R = " Apply Now ",
                    y = " How do I become a " + "\ufffd#160\ufffd\ufffd/#160\ufffd" + " Content Assistant? ",
                    V = "How do I become content assitant Image",
                    J = " What do I do now? ",
                    K = " Now, you earn an income by " + "[\ufffd#170\ufffd|\ufffd#171\ufffd|\ufffd#172\ufffd]" + " helping our Assisted Course Creators " + "[\ufffd/#170\ufffd|\ufffd/#171\ufffd|\ufffd/#172\ufffd]" + " out. Now, you enjoy a " + "[\ufffd#170\ufffd|\ufffd#171\ufffd|\ufffd#172\ufffd]" + "flexible working schedule" + "[\ufffd/#170\ufffd|\ufffd/#171\ufffd|\ufffd/#172\ufffd]" + " and choose your own working hours. But most importantly, now, you " + "[\ufffd#170\ufffd|\ufffd#171\ufffd|\ufffd#172\ufffd]" + "empower millions" + "[\ufffd/#170\ufffd|\ufffd/#171\ufffd|\ufffd/#172\ufffd]" + " across the world. After all, it\u2019s not just our Assisted Course Creators who need your expertise. The world needs it too. ",
                    K = e.Zx4(K),
                    ie = " Become a Content Assistant ",
                    T = " What do I do now? ",
                    X = "What do I do Image",
                    [[1, "become-assisted-course-creator-outer-container", "flex"], [1, "become-assisted-course-creator-inner-container", "flex", "flex-col", "w-full"], [1, "ads-container-top", "hidden", "md:block"], [3, "fromExistingCSS", "adFormat", "panelClass"], [1, "become-assisted-course-creator-container"], [1, "become-assisted-course-creator-header-article", "flex", "flex-col", "md:flex-row", "article-container", "items-center", "md:pl-10", "lg:pl-20"], [1, "article-content", "w-full", "pb-6", "mt-8", "md:py-20"], [1, "alison-h2", "md:alison-title", "title-color", "mb-3", "md:mb-4", "text-center", "md:text-left", "px-6", "md:px-0"], o, [1, "block", "sm:hidden"], [1, "article-body", "md:max-w-lg", "alison-body-secondary", "md:alison-body", "text-color", "text-center", "md:text-left", "px-4", "md:px-0", "mb-0"], t, [1, "article-actions", "w-full", "xl:w-2/3", "two-actions", "mt-6", "md:mt-9", "grid", "gap-6", "grid-cols-2", "px-6", "md:px-0"], ["href", "/publish/content-assistant-application", "mat-flat-button", "", "color", "primary", 1, "apply-now-button", "alison-button", "alison-button-lg", "w-full", "order-2", "md:order-1"], i, ["appScrollIntoView", "#benefits", "mat-stroked-button", "", "color", "primary", 1, "learn-more-button", "alison-button", "alison-button-lg", "w-full", "order-1", "md:order-2"], r, [1, "image-container", "w-full", "flex", "items-end", "justify-center", "md:justify-end", "self-end", "mt-0", "md:mt-12", "px-6", "md:px-0"], ["srcset", "\n                /ssr/assets/images/publish/become-content-assistant-today-mobile.webp 768w,\n                /ssr/assets/images/publish/become-content-assistant-today.webp\n              "], ["alt", s, "src", "/ssr/assets/images/publish/become-content-assistant-today.png", "srcset", "\n                /ssr/assets/images/publish/become-content-assistant-today-mobile.png 768w,\n                /ssr/assets/images/publish/become-content-assistant-today.png\n              ", 1, "become-assisted-course-creator-header-article-image", "w-full", "object-contain"], ["id", "benefits", 1, "benefits-bar", "flex", "flex-col", "lg:flex-row", "items-start", "lg:items-center", "justify-between", "py-7", "lg:py-6", "px-6", "md:px-10", "lg:px-20"], [1, "benefit-item", "flex", "items-center", "pb-5", "lg:pb-0"], [1, "benefit-icon-container", "mr-3", "sm:mr-4", "lg:mr-5", "inline-flex", "items-center", "justify-center"], [1, "benefit-icon", "alison-icon-md", "p-0", "md:p-1.5", "icon-check1"], [1, "benefit-name", "alison-caption", "font-bold", "block", "lg:hidden", "mb-0"], a, [1, "benefit-md-name", "alison-body-secondary", "font-bold", "lg:block", "hidden", "mb-0"], l, c, d, [1, "benefit-item", "flex", "items-center", "lg:pb-0"], _, g, [1, "who-can-become-assisted-course-creator-article", "flex", "flex-col-reverse", "md:flex-row-reverse", "items-center", "px-6", "md:px-10", "lg:px-20"], [1, "article-content", "w-full", "pt-6", "pb-8", "md:py-16"], [1, "alison-h2", "md:alison-title", "title-color", "hidden", "md:block", "mb-6"], m, [1, "article-list"], [1, "article-list-item", "alison-body-secondary", "md:alison-body", "text-color", "mb-3", "md:mb-4", "flex"], [1, "article-list-item-icon", "icon-check1", "alison-icon-md", "alison-primary", "mr-3", "mt-1"], p, [1, "assisted-course-creator"], u, [1, "article-list-item", "alison-body-secondary", "md:alison-body", "text-color", "flex", "mb-0"], E, [1, "article-actions", "w-full", "text-center", "md:text-left"], ["mat-flat-button", "", "color", "primary", "href", "/publish/content-assistant-application", 1, "apply-now-button", "alison-button", "alison-button-lg", "mt-6", "md:mt-9"], h, [1, "image-container", "w-full", "md:w-2/3", "self-end", "mt-0", "md:mt-10"], [1, "alison-h2", "title-color", "text-center", "block", "md:hidden", "my-6"], b, ["srcset", "\n                /ssr/assets/images/publish/what-do-content-assistants-do-mobile.webp 768w,\n                /ssr/assets/images/publish/what-do-content-assistants-do.webp\n              "], ["alt", C, "loading", "lazy", "src", "/ssr/assets/images/publish/what-do-content-assistants-do.png", "srcset", "\n                /ssr/assets/images/publish/what-do-content-assistants-do-mobile.png 768w,\n                /ssr/assets/images/publish/what-do-content-assistants-do.png\n              ", 1, "who-can-become-assisted-course-creator-article-image", "object-contain", "w-full", "m-auto", "md:ml-0", "px-10", "md:px-0"], [1, "how-does-alison-support-you", "article-container", "py-6", "md:py-12", "px-6", "md:px-10", "lg:px-20"], [1, "w-full", "text-center"], [1, "alison-h2", "md:alison-title", "title-color", "text-center", "mb-6", "lg:mb-9"], f, [1, "how-does-alison-support-you-cards", "grid", "grid-cols-1", "lg:grid-cols-2", "gap-5", "lg:gap-9"], [1, "how-does-alison-support-you-card", "lg:p-5", "flex", "items-center", "lg:items-start", "text-start", "text-color"], [1, "how-does-alison-support-you-card-icon-container", "flex", "items-center", "justify-center", "mr-3"], [1, "icon-thought-bubble-eng", "how-does-alison-support-you-card-icon"], [1, "alison-caption", "md:alison-body-secondary"], U, [1, "icon-objects-column", "how-does-alison-support-you-card-icon"], [1, "alison-caption", "md:alison-body-secondary", "pr-0", "lg:pr-4"], v, [1, "icon-teacher", "how-does-alison-support-you-card-icon"], G, [1, "icon-lighbulb", "how-does-alison-support-you-card-icon"], O, [1, "achievement-bar", "hidden", "md:flex", "py-7", "px-20"], [1, "achievement-item", "w-full", "flex", "items-center"], [1, "achievement-name", "alison-h5", "mb-0"], N, [1, "highlited-text"], [1, "achievement-group-container", "w-full", "flex", "justify-end"], [1, "achievement-item", "flex", "items-center", "mr-12"], [1, "achievement-icon", "alison-icon-xl", "icon-user-group"], [1, "achievement-name", "alison-body-secondary", "md:alison-body", "mb-0"], W, [1, "achievement-item", "flex", "items-center"], [1, "achievement-icon", "alison-icon-xl", "icon-graduation-cap"], D, [1, "mobile-achievement-bar", "achievement-bar", "md:hidden", "py-6", "alison-shadow-low"], [1, "text-center", "mobile-achievement-title", "title-color", "alison-body-secondary", "md:alison-body", "px-6", "pb-4"], M, [1, "mobile-achievement-cards-container", "items-center", "grid", "px-6", "grid-cols-2", "gap-4", "sm:gap-6"], [1, "mobile-achievement-card", "w-full", "text-center", "pt-2", "pr-0.5", "pb-2", "rounded-xl"], [1, "alison-icon-lg", "achievement-icon", "icon-user-group"], [1, "mobile-achievement-name", "alison-caption", "md:alison-body-secondary", "m-auto", "mb-0"], P, [1, "alison-icon-lg", "achievement-icon", "icon-graduation-cap"], I, [1, "slider-container"], ["section-title", ""], [1, "alison-h2", "md:alison-title", "title-color", "text-center", "hidden", "md:block"], k, [1, "alison-h2", "title-color", "text-center", "block", "md:hidden"], H, ["class", "splide__slide flex", 4, "ngFor", "ngForOf"], [1, "how-can-become-assisted-course-creator-article", "flex", "flex-col-reverse", "md:flex-row-reverse", "items-center", "px-6", "md:px-10", "lg:px-20"], j, q, ["href", "/publish/content-assistant-application", 1, "aplication-form"], w, x, R, [1, "image-container", "w-full", "self-end"], y, ["srcset", "\n                /ssr/assets/images/publish/how-do-i-become-content-assitant-mobile.webp 768w,\n                /ssr/assets/images/publish/how-do-i-become-content-assitant.webp\n              "], ["alt", V, "loading", "lazy", "src", "/ssr/assets/images/publish/how-do-i-become-content-assitant.png", "srcset", "\n                /ssr/assets/images/publish/how-do-i-become-content-assitant-mobile.png 768w,\n                /ssr/assets/images/publish/how-do-i-become-content-assitant.png\n              ", 1, "how-can-become-assisted-course-creator-article-image", "object-contain", "w-full", "m-auto", "md:ml-0", "px-10", "md:px-0"], [1, "what-do-i-do-article", "article-container", "flex", "flex-col-reverse", "md:flex-row", "items-center", "px-6", "md:px-10", "lg:px-20"], [1, "article-content", "w-full", "mt-6", "mb-10", "md:my-12"], [1, "alison-h2", "md:alison-title", "title-color", "hidden", "md:block", "mb-4"], J, [1, "article-body", "md:max-w-lg", "alison-body-secondary", "md:alison-body", "text-color", "text-center", "md:text-left", "mb-0"], K, [1, "article-actions", "mt-6", "md:mt-9", "text-center", "md:text-left"], ["mat-flat-button", "", "color", "primary", "href", "/publish/content-assistant-application", 1, "apply-now-button", "alison-button", "alison-button-lg"], ie, [1, "image-container", "w-full", "flex", "flex-col", "md:flex-row", "items-center", "self-end", "md:items-end", "justify-center", "md:justify-end"], T, ["srcset", "/ssr/assets/images/publish/what-do-i-do.webp", "srcset", "\n                /ssr/assets/images/publish/what-do-i-do-mobile.webp 768w,\n                /ssr/assets/images/publish/what-do-i-do.webp\n              "], ["alt", X, "loading", "lazy", "src", "/ssr/assets/images/publish/what-do-i-do.png", "srcset", "\n                /ssr/assets/images/publish/what-do-i-do-mobile.png 768w,\n                /ssr/assets/images/publish/what-do-i-do.png\n              ", 1, "what-do-i-do-article-image", "object-contain", "w-full"], [1, "ads-container-right", "hidden", "md:flex"], [3, "fromExistingCSS", "panelClass"], [1, "splide__slide", "flex"], [3, "feedbackItem"]]
                },
                template: function(t, i) {
                    1 & t && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2),
                    e._UZ(3, "google-adsense", 3),
                    e.qZA(),
                    e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h3", 7),
                    e.tHW(8, 8),
                    e._UZ(9, "br", 9),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(10, "p", 10),
                    e.SDv(11, 11),
                    e.qZA(),
                    e.TgZ(12, "div", 12)(13, "a", 13),
                    e.SDv(14, 14),
                    e.qZA(),
                    e.TgZ(15, "a", 15),
                    e.SDv(16, 16),
                    e.qZA()()(),
                    e.TgZ(17, "div", 17)(18, "picture"),
                    e._UZ(19, "source", 18)(20, "img", 19),
                    e.qZA()()(),
                    e.TgZ(21, "div", 20)(22, "div", 21)(23, "div", 22),
                    e._UZ(24, "i", 23),
                    e.qZA(),
                    e.TgZ(25, "p", 24),
                    e.SDv(26, 25),
                    e.qZA(),
                    e.TgZ(27, "p", 26),
                    e.SDv(28, 27),
                    e.qZA()(),
                    e.TgZ(29, "div", 21)(30, "div", 22),
                    e._UZ(31, "i", 23),
                    e.qZA(),
                    e.TgZ(32, "p", 24),
                    e.SDv(33, 28),
                    e.qZA(),
                    e.TgZ(34, "p", 26),
                    e.SDv(35, 29),
                    e.qZA()(),
                    e.TgZ(36, "div", 30)(37, "div", 22),
                    e._UZ(38, "i", 23),
                    e.qZA(),
                    e.TgZ(39, "p", 24),
                    e.SDv(40, 31),
                    e.qZA(),
                    e.TgZ(41, "p", 26),
                    e.SDv(42, 32),
                    e.qZA()()(),
                    e.TgZ(43, "div", 33)(44, "div", 34)(45, "h3", 35),
                    e.SDv(46, 36),
                    e.qZA(),
                    e.TgZ(47, "div", 37)(48, "p", 38),
                    e._UZ(49, "i", 39),
                    e.TgZ(50, "span"),
                    e.tHW(51, 40),
                    e._UZ(52, "b", 41),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(53, "p", 38),
                    e._UZ(54, "i", 39),
                    e.TgZ(55, "span"),
                    e.SDv(56, 42),
                    e.qZA()(),
                    e.TgZ(57, "p", 43),
                    e._UZ(58, "i", 39),
                    e.ynx(59),
                    e.SDv(60, 44),
                    e.BQk(),
                    e.qZA()(),
                    e.TgZ(61, "div", 45)(62, "a", 46),
                    e.SDv(63, 47),
                    e.qZA()()(),
                    e.TgZ(64, "div", 48)(65, "h3", 49),
                    e.tHW(66, 50),
                    e._UZ(67, "br", 9),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(68, "picture"),
                    e._UZ(69, "source", 51)(70, "img", 52),
                    e.qZA()()(),
                    e.TgZ(71, "div", 53)(72, "div", 54)(73, "h3", 55),
                    e.tHW(74, 56),
                    e._UZ(75, "br", 9),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(76, "div", 57)(77, "div", 58)(78, "div", 59),
                    e._UZ(79, "i", 60),
                    e.qZA(),
                    e.TgZ(80, "span", 61),
                    e.SDv(81, 62),
                    e.qZA()(),
                    e.TgZ(82, "div", 58)(83, "div", 59),
                    e._UZ(84, "i", 63),
                    e.qZA(),
                    e.TgZ(85, "span", 64),
                    e.SDv(86, 65),
                    e.qZA()(),
                    e.TgZ(87, "div", 58)(88, "div", 59),
                    e._UZ(89, "i", 66),
                    e.qZA(),
                    e.TgZ(90, "span", 61),
                    e.SDv(91, 67),
                    e.qZA()(),
                    e.TgZ(92, "div", 58)(93, "div", 59),
                    e._UZ(94, "i", 68),
                    e.qZA(),
                    e.TgZ(95, "span", 64),
                    e.SDv(96, 69),
                    e.qZA()()()()(),
                    e.TgZ(97, "div", 70)(98, "div", 71)(99, "p", 72),
                    e.tHW(100, 73),
                    e._UZ(101, "b", 74),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(102, "div", 75)(103, "div", 76),
                    e._UZ(104, "i", 77),
                    e.TgZ(105, "p", 78),
                    e.tHW(106, 79),
                    e._UZ(107, "b", 74),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(108, "div", 80),
                    e._UZ(109, "i", 81),
                    e.TgZ(110, "p", 78),
                    e.tHW(111, 82),
                    e._UZ(112, "b", 74),
                    e.N_p(),
                    e.qZA()()()(),
                    e.TgZ(113, "div", 83)(114, "h4", 84),
                    e.tHW(115, 85),
                    e._UZ(116, "b", 74),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(117, "div", 86)(118, "div", 87),
                    e._UZ(119, "i", 88),
                    e.TgZ(120, "p", 89),
                    e.tHW(121, 90),
                    e._UZ(122, "b", 74),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(123, "div", 87),
                    e._UZ(124, "i", 91),
                    e.TgZ(125, "p", 89),
                    e.tHW(126, 92),
                    e._UZ(127, "b", 74),
                    e.N_p(),
                    e.qZA()()()(),
                    e.TgZ(128, "div", 93)(129, "app-feedback-slider"),
                    e.ynx(130, 94),
                    e.TgZ(131, "h2", 95),
                    e.SDv(132, 96),
                    e.qZA(),
                    e.TgZ(133, "h2", 97),
                    e.SDv(134, 98),
                    e.qZA(),
                    e.BQk(),
                    e.YNc(135, _a, 2, 1, "li", 99),
                    e.qZA()(),
                    e.TgZ(136, "div", 100)(137, "div", 34)(138, "h3", 35),
                    e.SDv(139, 101),
                    e.qZA(),
                    e.TgZ(140, "div", 37)(141, "p", 38),
                    e._UZ(142, "i", 39),
                    e.TgZ(143, "span"),
                    e.tHW(144, 102),
                    e._UZ(145, "a", 103),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(146, "p", 38),
                    e._UZ(147, "i", 39),
                    e.TgZ(148, "span"),
                    e.SDv(149, 104),
                    e.qZA()(),
                    e.TgZ(150, "p", 43),
                    e._UZ(151, "i", 39),
                    e.TgZ(152, "span"),
                    e.SDv(153, 105),
                    e.qZA()()(),
                    e.TgZ(154, "div", 45)(155, "a", 46),
                    e.SDv(156, 106),
                    e.qZA()()(),
                    e.TgZ(157, "div", 107)(158, "h3", 49),
                    e.tHW(159, 108),
                    e._UZ(160, "br", 9),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(161, "picture"),
                    e._UZ(162, "source", 109)(163, "img", 110),
                    e.qZA()()(),
                    e.TgZ(164, "div", 111)(165, "div", 112)(166, "h3", 113),
                    e.SDv(167, 114),
                    e.qZA(),
                    e.TgZ(168, "p", 115),
                    e.tHW(169, 116),
                    e._UZ(170, "b", 74)(171, "b", 74)(172, "b", 74),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(173, "div", 117)(174, "a", 118),
                    e.SDv(175, 119),
                    e.qZA()()(),
                    e.TgZ(176, "div", 120)(177, "h3", 49),
                    e.SDv(178, 121),
                    e.qZA(),
                    e.TgZ(179, "picture"),
                    e._UZ(180, "source", 122)(181, "img", 123),
                    e.qZA()()()()(),
                    e.TgZ(182, "div", 124),
                    e._UZ(183, "google-adsense", 125),
                    e.qZA()()),
                    2 & t && (e.xp6(3),
                    e.Q6J("fromExistingCSS", "underHeader")("adFormat", "auto")("panelClass", "hidden md:block"),
                    e.xp6(132),
                    e.Q6J("ngForOf", i.feedbackItems),
                    e.xp6(48),
                    e.Q6J("fromExistingCSS", "rightFixed")("panelClass", "hidden md:flex"))
                },
                dependencies: [se.sg, lt, wt, ct, wo, $o],
                styles: [".ads-container-top[_ngcontent-%COMP%], .ads-container-right[_ngcontent-%COMP%]{background-color:#f7f7f7}@media (min-width: 1024px){.become-assisted-course-creator-header-article[_ngcontent-%COMP%]{min-height:calc(100vh - 292px)}}.what-do-i-do-article-image[_ngcontent-%COMP%]{width:clamp(240px,30vw,310px)}.article-actions[_ngcontent-%COMP%]:not(.two-actions)   .apply-now-button[_ngcontent-%COMP%]{min-width:170px}.what-do-i-do-article[_ngcontent-%COMP%]{background-color:var(--extra6-color)}.benefits-bar[_ngcontent-%COMP%]{background-color:var(--extra3-color);color:var(--extra3-contrast)}.benefits-bar[_ngcontent-%COMP%]   .benefit-icon-container[_ngcontent-%COMP%]{border-radius:50%;background-color:var(--extra3-contrast);color:var(--extra3-color)}.benefits-bar[_ngcontent-%COMP%]   .benefit-md-name[_ngcontent-%COMP%]{max-width:180px}.achievement-bar[_ngcontent-%COMP%]{background-color:var(--extra5-color);color:var(--extra5-contrast)}.achievement-bar[_ngcontent-%COMP%]   .achievement-icon[_ngcontent-%COMP%]{color:#63c19d}.mobile-achievement-card[_ngcontent-%COMP%]{background-color:var(--mat-primary-hover)}.how-does-alison-support-you[_ngcontent-%COMP%]{background-color:var(--extra4-color)}.how-does-alison-support-you[_ngcontent-%COMP%]   .how-does-alison-support-you-card[_ngcontent-%COMP%]{border-radius:16px}.how-does-alison-support-you[_ngcontent-%COMP%]   .how-does-alison-support-you-card-icon-container[_ngcontent-%COMP%]{border:4px solid #98c5e2;background-color:#fff;border-radius:50%}.how-does-alison-support-you[_ngcontent-%COMP%]   .how-does-alison-support-you-card-icon-container[_ngcontent-%COMP%]   .how-does-alison-support-you-card-icon[_ngcontent-%COMP%]{color:#4292c3;width:clamp(28px,4vw,var(--ng-alison-icon-xl-size));max-width:clamp(28px,4vw,var(--ng-alison-icon-xl-size));height:clamp(28px,4vw,var(--ng-alison-icon-xl-size));max-height:clamp(28px,4vw,var(--ng-alison-icon-xl-size));font-size:clamp(28px,4vw,var(--ng-alison-icon-xl-size))}@media only screen and (min-width: 1024px){.how-does-alison-support-you[_ngcontent-%COMP%]   .how-does-alison-support-you-card[_ngcontent-%COMP%]{color:var(--text-color);background-color:var(--text-contrast)}}.how-can-become-assisted-course-creator-article-image[_ngcontent-%COMP%]{max-width:310px}.become-assisted-course-creator-header-article-image[_ngcontent-%COMP%]{max-width:574px}.who-can-become-assisted-course-creator-article-image[_ngcontent-%COMP%]{max-width:350px}.assisted-course-creator[_ngcontent-%COMP%]{color:var(--extra1-color)}.aplication-form[_ngcontent-%COMP%]{color:var(--extra1-color);text-decoration:none;cursor:pointer;font-weight:700}.aplication-form[_ngcontent-%COMP%]:hover{text-decoration:underline;cursor:pointer}.learn-more-button[_ngcontent-%COMP%]{color:var(--mat-primary-bold)!important}.highlited-text[_ngcontent-%COMP%]{color:var(--mat-primary-bold)}.slider-container[_ngcontent-%COMP%]{box-shadow:0 1px 2px #00000029;position:relative;z-index:1}"]
            }),
            n
        }
        )();
        function ua(n, o) {
            if (1 & n && (e.TgZ(0, "li", 155),
            e._UZ(1, "app-feedback-item", 156),
            e.qZA()),
            2 & n) {
                const t = o.$implicit;
                e.xp6(1),
                e.Q6J("feedbackItem", t)
            }
        }
        let Ea = (()=>{
            class n {
                constructor(t, i) {
                    this._metaTagService = t,
                    this._title = i,
                    this.feedbackItems = [{
                        avatar: "/ssr/assets/images/publish/course-creator-waqas.png",
                        name: "Waqas",
                        profession: "Course Creator",
                        feedback: "Alison empowers Course Creators with its interactive publishing system, wonderful review team, and other technical and marketing staff involved within this process. Alison has enabled Course Creators like me to reach an untapped audience. Having been with Alison for 6 years, I would recommend Alison to anyone trying to create a course."
                    }, {
                        avatar: "/ssr/assets/images/publish/course-creator-james.png",
                        name: "James L.",
                        profession: "Course Creator",
                        feedback: "Alison is user-friendly, offers a wide range of resources, and is excellent for expanding your reach. Alison\u2019s publishing manager provided excellent support and assistance in the preparation of my courses, making my courses well-structured and comprehensive. I highly recommend Alison to any instructor looking for an online education platform."
                    }, {
                        avatar: "/ssr/assets/images/publish/course-creator-mokhtar.png",
                        name: "Dr. Mokhtar H.",
                        profession: "Course Creator",
                        feedback: "Publishing on Alison was one of the best decisions I\u2019ve made. It gave me access to thousands of learners who love my courses. The platform is great and the team is very helpful. If you are a professional expert and want to publish them on a very reliable platform that is trusted by millions all over the world, I highly recommend you to join Alison."
                    }]
                }
                ngOnInit() {
                    this._title.setTitle("Alison | Become a Course Creator"),
                    this._metaTagService.addTags([{
                        name: "description",
                        content: "Course Creators develop their courses on their own, in their own time."
                    }])
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.Y36(ge.h_),e.Y36(ge.Dx))
            }
            ,
            n.\u0275cmp = e.Xpm({
                type: n,
                selectors: [["app-become-course-creator"]],
                decls: 243,
                vars: 8,
                consts: function() {
                    let o, t, i, r, s, a, l, c, d, _, g, m, p, u, E, h, b, C, f, U, v, G, O, N, W, D, M, P, I, k, H, j, q, w, x, R, y, V, J, K, ie, T, X, F, Y, te, S, xe, B, ee, ce, Se, Ge, vt, L, di, ui, Ei;
                    return o = " Become a Course " + "\ufffd#9\ufffd\ufffd/#9\ufffd" + " Creator Today ",
                    t = " If you are a subject matter expert who wants to create courses and publish them online for everyone, then you have come to the right place. ",
                    i = " Apply Now ",
                    r = " Learn More ",
                    s = "Become a course creator today Image",
                    a = " Make a difference in the world ",
                    l = " Make a difference in the world ",
                    c = " Earn an income with your skills ",
                    d = " Earn an income with your skills ",
                    _ = " Build your brand as an expert ",
                    g = " Build your brand as an expert ",
                    m = " Expand your reach to 25 million+ people ",
                    p = " Expand your reach " + "\ufffd#50\ufffd\ufffd/#50\ufffd" + " to 25 million+ people ",
                    u = " Who can become a Course Creator? ",
                    E = " A current or former lecturer, teacher or researcher ",
                    h = " An experienced professional with a passion for teaching ",
                    b = " An expert in a sought-after field ",
                    C = " A course provider looking to grow their online audience ",
                    f = " Someone equipped with excellent English language writing skills ",
                    U = " Someone who can provide well-written materials ",
                    v = " Become a Course Creator Now ",
                    G = " Who can become a " + "\ufffd#87\ufffd\ufffd/#87\ufffd" + " Course Creator? ",
                    O = "Who can become a course creator image",
                    N = " Seems like a lot? We\u2019ve got you. ",
                    W = " If you\u2019re not sure how to use course creation tools, become an Assisted Course Creator and we will help you with everything. ",
                    D = " Become an Assisted Course Creator ",
                    M = " Seems like a lot? " + "\ufffd#103\ufffd\ufffd/#103\ufffd" + " We\u2019ve got you. ",
                    P = "Seems like a lot image",
                    I = " Alison\u2019s " + "\ufffd#111\ufffd" + "Course Creators" + "\ufffd/#111\ufffd" + " Empower Millions ",
                    k = "" + "\ufffd#117\ufffd" + "25 million+" + "\ufffd/#117\ufffd" + " learners ",
                    H = "" + "\ufffd#122\ufffd" + "5 million+" + "\ufffd/#122\ufffd" + " graduates ",
                    j = " Alison\u2019s " + "\ufffd#126\ufffd" + "Course Creators" + "\ufffd/#126\ufffd" + " Empower Millions ",
                    q = "" + "\ufffd#132\ufffd" + "25 million+" + "\ufffd/#132\ufffd" + " learners ",
                    w = "" + "\ufffd#137\ufffd" + "5 million+" + "\ufffd/#137\ufffd" + " graduates ",
                    x = " What Alison\u2019s Course Creators have to say ",
                    R = " What Alison\u2019s Course Creators have to say ",
                    y = " How does Alison support Course Creators? ",
                    V = " We run regular " + "\ufffd#156\ufffd" + "webinars" + "\ufffd/#156\ufffd" + " where you can connect " + "\ufffd#157\ufffd\ufffd/#157\ufffd" + " with us and ask all your questions ",
                    J = " We guide you through the course creation " + "\ufffd#163\ufffd\ufffd/#163\ufffd" + " process by " + "\ufffd#164\ufffd" + "assigning you an Account Manager" + "\ufffd/#164\ufffd" + "",
                    K = " We " + "\ufffd#170\ufffd" + "promote your course" + "\ufffd/#170\ufffd" + " to our audience via " + "\ufffd#171\ufffd\ufffd/#171\ufffd" + " advertising on social media, email, and search ",
                    ie = " We help you track your progress and course " + "\ufffd#177\ufffd\ufffd/#177\ufffd" + " enrolments via your " + "\ufffd#178\ufffd" + "personalised Digital Dashboard" + "\ufffd/#178\ufffd" + "",
                    T = " How do I become a Course Creator? ",
                    X = " Sign up to Alison (if you haven\u2019t already) ",
                    F = " Fill out our short " + "\ufffd#192\ufffd" + " application form " + "\ufffd/#192\ufffd" + "",
                    Y = "Take our training course",
                    te = " Apply Now ",
                    S = " How do I become a " + "\ufffd#203\ufffd\ufffd/#203\ufffd" + " Course Creator? ",
                    xe = "How do I become course creator image",
                    B = " Need more help? We\u2019ve still got you. ",
                    ee = " Become an Assisted Course Creator and our dedicated team of Content Assistants will help you with your content. ",
                    ce = " Become an Assisted Course Creator ",
                    Se = " Need more help? " + "\ufffd#219\ufffd\ufffd/#219\ufffd" + " We\u2019ve still got you. ",
                    Ge = "Need more help image",
                    vt = " What do I do now? ",
                    L = " Now, you earn an income by " + "[\ufffd#229\ufffd|\ufffd#230\ufffd|\ufffd#231\ufffd]" + "sharing your knowledge " + "[\ufffd/#229\ufffd|\ufffd/#230\ufffd|\ufffd/#231\ufffd]" + ". Now, you " + "[\ufffd#229\ufffd|\ufffd#230\ufffd|\ufffd#231\ufffd]" + " build your own personal brand" + "[\ufffd/#229\ufffd|\ufffd/#230\ufffd|\ufffd/#231\ufffd]" + " as an expert in your field. But most importantly, now, you " + "[\ufffd#229\ufffd|\ufffd#230\ufffd|\ufffd#231\ufffd]" + "empower millions" + "[\ufffd/#229\ufffd|\ufffd/#230\ufffd|\ufffd/#231\ufffd]" + " across the world. After all, it\u2019s not just us who need your expertise. The world needs it too. ",
                    L = e.Zx4(L),
                    di = " Apply Now ",
                    ui = " What do I do now? ",
                    Ei = "What do I do Image",
                    [[1, "become-creator-course-outer-container", "flex"], [1, "become-creator-course-inner-container", "w-full"], [1, "ads-container-top", "hidden", "md:block"], [3, "fromExistingCSS", "adFormat", "panelClass"], [1, "become-creator-container", "alison-card-shadow"], [1, "become-creator-header-article", "flex", "flex-col", "md:flex-row", "article-container", "items-center", "px-6", "md:px-10", "lg:px-20"], [1, "article-content", "w-full", "pt-8", "pb-6", "md:py-6"], [1, "alison-h2", "md:alison-title", "title-color", "mb-3", "md:mb-4", "text-center", "md:text-left"], o, [1, "sm:hidden", "block"], [1, "article-body", "md:max-w-lg", "alison-body-secondar", "md:alison-body", "text-color", "text-center", "md:text-left", "md:pr-4", "mb-0"], t, [1, "article-actions", "w-full", "xl:w-2/3", "two-actions", "mt-6", "md:mt-9", "grid", "grid-flow-col-dense", "md:grid-flow-col", "gap-6", "grid-cols-2"], ["href", "/publish/course-creator-application", "mat-flat-button", "", "color", "primary", 1, "apply-now-button", "alison-button", "alison-button-lg", "w-full", "order-2", "md:order-1"], i, ["appScrollIntoView", "#benefits", "mat-stroked-button", "", "color", "primary", 1, "learn-more-button", "alison-button", "alison-button-lg", "w-full", "order-1", "md:order-2"], r, [1, "image-container", "w-full", "flex", "items-end", "justify-center", "md:justify-end", "self-end", "mt-0", "md:mt-20"], ["srcset", "\n                /ssr/assets/images/publish/become-course-creator-today-mobile.webp 768w,\n                /ssr/assets/images/publish/become-course-creator-today.webp\n              "], ["alt", s, "src", "/ssr/assets/images/publish/become-course-creator-today.png", "srcset", "\n                /ssr/assets/images/publish/become-course-creator-today-mobile.png 768w,\n                /ssr/assets/images/publish/become-course-creator-today.png\n              ", 1, "become-creator-header-article-image", "w-full", "object-contain", "px-14", "md:px-0"], ["id", "benefits", 1, "benefits-bar", "flex", "flex-col", "lg:flex-row", "items-start", "lg:items-center", "justify-between", "py-7", "lg:py-6", "px-6", "md:px-10", "lg:px-20"], [1, "benefit-item", "flex", "items-center", "pb-5", "lg:pb-0"], [1, "benefit-icon-container", "mr-4", "lg:mr-5", "inline-flex", "items-center", "justify-center"], [1, "benefit-icon", "alison-icon-md", "p-0", "md:p-1.5", "icon-check1"], [1, "benefit-name", "alison-caption", "font-bold", "block", "lg:hidden", "mb-0"], a, [1, "benefit-md-name", "alison-body-secondary", "font-bold", "lg:block", "hidden", "mb-0"], l, c, d, _, g, [1, "benefit-item", "flex", "items-center"], m, p, [1, "lg:block", "hidden"], [1, "who-can-become-creator-article", "article-container", "flex", "items-center", "flex-col-reverse", "md:flex-row-reverse", "px-6", "md:pl-10", "md:pr-10", "lg:pr-20"], [1, "article-content", "mt-6", "mb-8", "md:my-9", "lg:my-16", "w-full", "pl-0", "lg:pl-28"], [1, "alison-h2", "md:alison-title", "title-color", "hidden", "md:block", "mb-4"], u, [1, "article-list"], [1, "article-list-item", "alison-body-secondary", "md:alison-body", "text-color", "items-start", "mb-3", "md:mb-4", "flex"], [1, "article-list-item-icon", "icon-check1", "alison-icon-md", "alison-primary", "mr-3", "mt-1"], E, h, b, C, f, [1, "article-list-item", "alison-body-secondary", "md:alison-body", "text-color", "items-start", "flex", "mb-0"], U, [1, "article-actions", "mt-6", "md:mt-9", "text-center", "md:text-left"], ["mat-flat-button", "", "color", "primary", "href", "/publish/course-creator-application", 1, "apply-now-button", "alison-button", "alison-button-lg", "w-full", "sm:w-auto"], v, [1, "image-container", "w-full", "lg:w-2/3", "flex", "flex-col", "items-center"], [1, "alison-h2", "title-color", "text-center", "block", "md:hidden", "mt-6"], G, [1, "block", "sm:hidden"], ["srcset", "\n                /ssr/assets/images/publish/who-can-become-course-creator-mobile.webp 768w,\n                /ssr/assets/images/publish/who-can-become-course-creator.webp\n              "], ["alt", O, "loading", "lazy", "src", "/ssr/assets/images/publish/who-can-become-course-creator.png", "srcset", "\n                /ssr/assets/images/publish/who-can-become-course-creator-mobile.png 768w,\n                /ssr/assets/images/publish/who-can-become-course-creator.png\n              ", 1, "who-can-become-creator-article-image", "w-full", "object-contain"], [1, "seems-like-lot-article", "article-container", "flex", "flex-col-reverse", "md:flex-row", "px-6", "md:pr-0", "md:pl-10", "lg:pl-20"], [1, "article-content", "w-full", "mt-6", "mb-8", "md:my-12"], N, [1, "article-body", "md:max-w-lg", "alison-body", "text-color", "text-center", "md:text-left", "mb-0"], W, ["mat-flat-button", "", "color", "primary", 1, "apply-now-button", "alison-button", "alison-button-lg", "w-full", "sm:w-auto", 3, "routerLink"], D, [1, "image-container", "w-full", "flex", "flex-col", "md:flex-row", "items-center", "md:items-end", "md:justify-end"], [1, "alison-h2", "title-color", "text-center", "mt-6", "block", "md:hidden", "mb-2.5"], M, ["srcset", "\n                /ssr/assets/images/publish/seems-like-lot-mobile.webp 768w,\n                /ssr/assets/images/publish/seems-like-lot.webp\n              "], ["alt", P, "loading", "lazy", "src", "/ssr/assets/images/publish/seems-like-lot.png", "srcset", "\n                /ssr/assets/images/publish/seems-like-lot-mobile.png 768w,\n                /ssr/assets/images/publish/seems-like-lot.png\n              ", 1, "seems-like-lot-article-image", "object-contain", "w-full"], [1, "achievement-bar", "hidden", "md:flex", "py-7", "px-20"], [1, "achievement-item", "w-full", "flex", "items-center"], [1, "achievement-name", "alison-h5", "mb-0"], I, [1, "highlited-text"], [1, "achievement-group-container", "w-full", "flex", "justify-end"], [1, "achievement-item", "flex", "items-center", "mr-12"], [1, "achievement-icon", "alison-icon-xl", "icon-user-group"], [1, "achievement-name", "alison-body-secondary", "md:alison-body", "mb-0"], k, [1, "achievement-item", "flex", "items-center"], [1, "achievement-icon", "alison-icon-xl", "icon-graduation-cap"], H, [1, "mobile-achievement-bar", "achievement-bar", "md:hidden", "py-6", "alison-shadow-low"], [1, "text-center", "mobile-achievement-title", "title-color", "alison-body-secondary", "md:alison-body", "pb-4"], j, [1, "mobile-achievement-cards-container", "items-center", "grid", "px-6", "grid-cols-2", "gap-6"], [1, "mobile-achievement-card", "w-full", "text-center", "pt-2", "pr-0.5", "pb-2", "rounded-xl"], [1, "alison-icon-lg", "achievement-icon", "icon-user-group"], [1, "mobile-achievement-name", "alison-body-secondary", "m-auto", "mb-0"], q, [1, "alison-icon-lg", "achievement-icon", "icon-graduation-cap"], w, [1, "slider-container"], ["section-title", ""], [1, "alison-h2", "md:alison-title", "title-color", "text-center", "hidden", "md:block"], x, [1, "alison-h2", "title-color", "text-center", "block", "md:hidden"], R, ["class", "splide__slide flex", 4, "ngFor", "ngForOf"], [1, "how-does-alison-support-you", "article-container", "py-6", "md:py-9", "lg:pt-16", "lg:pb-0", "px-6", "md:px-10", "lg:px-20"], [1, "w-full", "text-center"], [1, "alison-h2", "md:alison-title", "title-color", "text-center", "mb-5", "md:mb-10"], y, [1, "how-does-alison-support-you-cards", "grid", "grid-cols-1", "lg:grid-cols-2", "gap-5", "lg:gap-9"], [1, "how-does-alison-support-you-card", "flex", "items-center", "p-0", "lg:px-5", "lg:py-4", "text-left"], [1, "how-does-alison-support-you-card-icon-container", "flex", "items-center", "justify-center", "mr-3"], [1, "icon-play1", "how-does-alison-support-you-card-icon"], [1, "alison-caption", "md:alison-body-secondary"], V, [1, "xl:block", "hidden"], [1, "icon-user-tie", "how-does-alison-support-you-card-icon"], J, [1, "icon-bullhorn", "how-does-alison-support-you-card-icon"], K, [1, "icon-objects-column", "how-does-alison-support-you-card-icon"], ie, [1, "how-can-become-creator-article", "article-container", "flex", "flex-col-reverse", "md:flex-row-reverse", "items-center", "px-6", "md:px-10", "lg:px-20"], [1, "article-content", "w-full", "pt-6", "pb-8", "md:py-16"], T, X, F, ["href", "/publish/course-creator-application", 1, "aplication-form"], Y, [1, "article-actions", "w-full", "text-center", "md:text-left"], ["mat-flat-button", "", "color", "primary", "href", "/publish/course-creator-application", 1, "apply-now-button", "alison-button", "alison-button-lg", "mt-6", "md:mt-9"], te, [1, "image-container", "w-full"], [1, "alison-h2", "title-color", "text-center", "block", "md:hidden", "my-6"], S, ["srcset", "\n                /ssr/assets/images/publish/how-do-i-become-course-creator-mobile.webp 768w,\n                /ssr/assets/images/publish/how-do-i-become-course-creator.webp\n              "], ["alt", xe, "loading", "lazy", "src", "/ssr/assets/images/publish/how-do-i-become-course-creator.png", "srcset", "\n                /ssr/assets/images/publish/how-do-i-become-course-creator-mobile.png 768w,\n                /ssr/assets/images/publish/how-do-i-become-course-creator.png\n              ", 1, "how-can-become-creator-article-image", "object-contain", "w-full", "m-auto", "md:ml-0", "px-10"], [1, "need-more-help-article", "article-container", "flex", "flex-col-reverse", "md:flex-row", "md:items-end", "px-6", "md:px-10", "lg:px-20"], B, ee, ["mat-flat-button", "", "color", "primary", 1, "apply-now-button", "alison-button", "alison-button-lg", "mt-6", "md:mt-9", 3, "routerLink"], ce, [1, "image-container", "w-full", "text-center", "md:text-left"], Se, ["srcset", "\n                /ssr/assets/images/publish/need-more-help-mobile.webp 768w,\n                /ssr/assets/images/publish/need-more-help.webp\n              "], ["alt", Ge, "loading", "lazy", "src", "/ssr/assets/images/publish/need-more-help.png", "srcset", "\n                /ssr/assets/images/publish/need-more-help-mobile.png 768w,\n                /ssr/assets/images/publish/need-more-help.png\n              ", 1, "need-more-help-article-image", "m-auto", "md:ml-auto", "md:mr-0", "w-full", "object-contain", "px-6", "md:px-0"], [1, "what-do-i-do-article", "article-container", "flex", "flex-col-reverse", "md:flex-row-reverse", "items-center", "px-6", "md:px-10", "lg:px-20"], [1, "article-content", "w-full", "mt-6", "mb-10", "md:my-12"], vt, [1, "article-body", "md:max-w-lg", "alison-body-secondary", "md:alison-body", "text-color", "text-center", "md:text-left", "mb-0"], L, ["mat-flat-button", "", "color", "primary", "href", "/publish/course-creator-application", 1, "apply-now-button", "alison-button", "alison-button-lg"], di, [1, "image-container", "w-full", "flex", "flex-col", "md:flex-row", "items-center", "self-end", "md:items-end", "justify-center", "md:justify-start"], ui, ["srcset", "\n                /ssr/assets/images/publish/what-do-i-do-mobile.webp 768w,\n                /ssr/assets/images/publish/what-do-i-do.webp\n              "], ["alt", Ei, "loading", "lazy", "src", "/ssr/assets/images/publish/what-do-i-do.png", "srcset", "\n                /ssr/assets/images/publish/what-do-i-do-mobile.png 768w,\n                /ssr/assets/images/publish/what-do-i-do.png\n              ", 1, "what-do-i-do-article-image", "object-contain", "w-full"], [1, "ads-container-right", "hidden", "md:flex"], [3, "fromExistingCSS", "panelClass"], [1, "splide__slide", "flex"], [3, "feedbackItem"]]
                },
                template: function(t, i) {
                    1 & t && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2),
                    e._UZ(3, "google-adsense", 3),
                    e.qZA(),
                    e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1", 7),
                    e.tHW(8, 8),
                    e._UZ(9, "br", 9),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(10, "p", 10),
                    e.SDv(11, 11),
                    e.qZA(),
                    e.TgZ(12, "div", 12)(13, "a", 13),
                    e.SDv(14, 14),
                    e.qZA(),
                    e.TgZ(15, "a", 15),
                    e.SDv(16, 16),
                    e.qZA()()(),
                    e.TgZ(17, "div", 17)(18, "picture"),
                    e._UZ(19, "source", 18)(20, "img", 19),
                    e.qZA()()(),
                    e.TgZ(21, "div", 20)(22, "div", 21)(23, "div", 22),
                    e._UZ(24, "i", 23),
                    e.qZA(),
                    e.TgZ(25, "p", 24),
                    e.SDv(26, 25),
                    e.qZA(),
                    e.TgZ(27, "p", 26),
                    e.SDv(28, 27),
                    e.qZA()(),
                    e.TgZ(29, "div", 21)(30, "div", 22),
                    e._UZ(31, "i", 23),
                    e.qZA(),
                    e.TgZ(32, "p", 24),
                    e.SDv(33, 28),
                    e.qZA(),
                    e.TgZ(34, "p", 26),
                    e.SDv(35, 29),
                    e.qZA()(),
                    e.TgZ(36, "div", 21)(37, "div", 22),
                    e._UZ(38, "i", 23),
                    e.qZA(),
                    e.TgZ(39, "p", 24),
                    e.SDv(40, 30),
                    e.qZA(),
                    e.TgZ(41, "p", 26),
                    e.SDv(42, 31),
                    e.qZA()(),
                    e.TgZ(43, "div", 32)(44, "div", 22),
                    e._UZ(45, "i", 23),
                    e.qZA(),
                    e.TgZ(46, "p", 24),
                    e.SDv(47, 33),
                    e.qZA(),
                    e.TgZ(48, "p", 26),
                    e.tHW(49, 34),
                    e._UZ(50, "br", 35),
                    e.N_p(),
                    e.qZA()()(),
                    e.TgZ(51, "div", 36)(52, "div", 37)(53, "h3", 38),
                    e.SDv(54, 39),
                    e.qZA(),
                    e.TgZ(55, "div", 40)(56, "p", 41),
                    e._UZ(57, "i", 42),
                    e.ynx(58),
                    e.SDv(59, 43),
                    e.BQk(),
                    e.qZA(),
                    e.TgZ(60, "p", 41),
                    e._UZ(61, "i", 42),
                    e.ynx(62),
                    e.SDv(63, 44),
                    e.BQk(),
                    e.qZA(),
                    e.TgZ(64, "p", 41),
                    e._UZ(65, "i", 42),
                    e.ynx(66),
                    e.SDv(67, 45),
                    e.BQk(),
                    e.qZA(),
                    e.TgZ(68, "p", 41),
                    e._UZ(69, "i", 42),
                    e.ynx(70),
                    e.SDv(71, 46),
                    e.BQk(),
                    e.qZA(),
                    e.TgZ(72, "p", 41),
                    e._UZ(73, "i", 42),
                    e.ynx(74),
                    e.SDv(75, 47),
                    e.BQk(),
                    e.qZA(),
                    e.TgZ(76, "p", 48),
                    e._UZ(77, "i", 42),
                    e.ynx(78),
                    e.SDv(79, 49),
                    e.BQk(),
                    e.qZA()(),
                    e.TgZ(80, "div", 50)(81, "a", 51),
                    e.ynx(82),
                    e.SDv(83, 52),
                    e.BQk(),
                    e.qZA()()(),
                    e.TgZ(84, "div", 53)(85, "h3", 54),
                    e.tHW(86, 55),
                    e._UZ(87, "br", 56),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(88, "picture"),
                    e._UZ(89, "source", 57)(90, "img", 58),
                    e.qZA()()(),
                    e.TgZ(91, "div", 59)(92, "div", 60)(93, "h3", 38),
                    e.SDv(94, 61),
                    e.qZA(),
                    e.TgZ(95, "p", 62),
                    e.SDv(96, 63),
                    e.qZA(),
                    e.TgZ(97, "div", 50)(98, "a", 64),
                    e.SDv(99, 65),
                    e.qZA()()(),
                    e.TgZ(100, "div", 66)(101, "h3", 67),
                    e.tHW(102, 68),
                    e._UZ(103, "br", 56),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(104, "picture"),
                    e._UZ(105, "source", 69)(106, "img", 70),
                    e.qZA()()(),
                    e.TgZ(107, "div", 71)(108, "div", 72)(109, "p", 73),
                    e.tHW(110, 74),
                    e._UZ(111, "b", 75),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(112, "div", 76)(113, "div", 77),
                    e._UZ(114, "i", 78),
                    e.TgZ(115, "p", 79),
                    e.tHW(116, 80),
                    e._UZ(117, "b", 75),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(118, "div", 81),
                    e._UZ(119, "i", 82),
                    e.TgZ(120, "p", 79),
                    e.tHW(121, 83),
                    e._UZ(122, "b", 75),
                    e.N_p(),
                    e.qZA()()()(),
                    e.TgZ(123, "div", 84)(124, "h4", 85),
                    e.tHW(125, 86),
                    e._UZ(126, "b", 75),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(127, "div", 87)(128, "div", 88),
                    e._UZ(129, "i", 89),
                    e.TgZ(130, "p", 90),
                    e.tHW(131, 91),
                    e._UZ(132, "b", 75),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(133, "div", 88),
                    e._UZ(134, "i", 92),
                    e.TgZ(135, "p", 90),
                    e.tHW(136, 93),
                    e._UZ(137, "b", 75),
                    e.N_p(),
                    e.qZA()()()(),
                    e.TgZ(138, "div", 94)(139, "app-feedback-slider"),
                    e.ynx(140, 95),
                    e.TgZ(141, "h2", 96),
                    e.SDv(142, 97),
                    e.qZA(),
                    e.TgZ(143, "h2", 98),
                    e.SDv(144, 99),
                    e.qZA(),
                    e.BQk(),
                    e.YNc(145, ua, 2, 1, "li", 100),
                    e.qZA()(),
                    e.TgZ(146, "div", 101)(147, "div", 102)(148, "h3", 103),
                    e.SDv(149, 104),
                    e.qZA(),
                    e.TgZ(150, "div", 105)(151, "div", 106)(152, "div", 107),
                    e._UZ(153, "i", 108),
                    e.qZA(),
                    e.TgZ(154, "span", 109),
                    e.tHW(155, 110),
                    e._UZ(156, "b")(157, "br", 111),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(158, "div", 106)(159, "div", 107),
                    e._UZ(160, "i", 112),
                    e.qZA(),
                    e.TgZ(161, "span", 109),
                    e.tHW(162, 113),
                    e._UZ(163, "br", 111)(164, "b"),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(165, "div", 106)(166, "div", 107),
                    e._UZ(167, "i", 114),
                    e.qZA(),
                    e.TgZ(168, "span", 109),
                    e.tHW(169, 115),
                    e._UZ(170, "b")(171, "br", 111),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(172, "div", 106)(173, "div", 107),
                    e._UZ(174, "i", 116),
                    e.qZA(),
                    e.TgZ(175, "span", 109),
                    e.tHW(176, 117),
                    e._UZ(177, "br", 111)(178, "b"),
                    e.N_p(),
                    e.qZA()()()()(),
                    e.TgZ(179, "div", 118)(180, "div", 119)(181, "h3", 38),
                    e.SDv(182, 120),
                    e.qZA(),
                    e.TgZ(183, "div", 40)(184, "p", 41),
                    e._UZ(185, "i", 42),
                    e.ynx(186),
                    e.SDv(187, 121),
                    e.BQk(),
                    e.qZA(),
                    e.TgZ(188, "p", 41),
                    e._UZ(189, "i", 42),
                    e.TgZ(190, "span"),
                    e.tHW(191, 122),
                    e._UZ(192, "a", 123),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(193, "p", 48),
                    e._UZ(194, "i", 42),
                    e.ynx(195),
                    e.SDv(196, 124),
                    e.BQk(),
                    e.qZA()(),
                    e.TgZ(197, "div", 125)(198, "a", 126),
                    e.SDv(199, 127),
                    e.qZA()()(),
                    e.TgZ(200, "div", 128)(201, "h3", 129),
                    e.tHW(202, 130),
                    e._UZ(203, "br", 56),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(204, "picture"),
                    e._UZ(205, "source", 131)(206, "img", 132),
                    e.qZA()()(),
                    e.TgZ(207, "div", 133)(208, "div", 60)(209, "h3", 38),
                    e.SDv(210, 134),
                    e.qZA(),
                    e.TgZ(211, "p", 62),
                    e.SDv(212, 135),
                    e.qZA(),
                    e.TgZ(213, "div", 125)(214, "a", 136),
                    e.SDv(215, 137),
                    e.qZA()()(),
                    e.TgZ(216, "div", 138)(217, "h3", 129),
                    e.tHW(218, 139),
                    e._UZ(219, "br", 56),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(220, "picture"),
                    e._UZ(221, "source", 140)(222, "img", 141),
                    e.qZA()()(),
                    e.TgZ(223, "div", 142)(224, "div", 143)(225, "h3", 38),
                    e.SDv(226, 144),
                    e.qZA(),
                    e.TgZ(227, "p", 145),
                    e.tHW(228, 146),
                    e._UZ(229, "b", 75)(230, "b", 75)(231, "b", 75),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(232, "div", 50)(233, "a", 147),
                    e.SDv(234, 148),
                    e.qZA()()(),
                    e.TgZ(235, "div", 149)(236, "h3", 129),
                    e.SDv(237, 150),
                    e.qZA(),
                    e.TgZ(238, "picture"),
                    e._UZ(239, "source", 151)(240, "img", 152),
                    e.qZA()()()()(),
                    e.TgZ(241, "div", 153),
                    e._UZ(242, "google-adsense", 154),
                    e.qZA()()),
                    2 & t && (e.xp6(3),
                    e.Q6J("fromExistingCSS", "underHeader")("adFormat", "auto")("panelClass", "hidden md:block"),
                    e.xp6(95),
                    e.Q6J("routerLink", "/publish/assisted-creator"),
                    e.xp6(47),
                    e.Q6J("ngForOf", i.feedbackItems),
                    e.xp6(69),
                    e.Q6J("routerLink", "/publish/assisted-creator"),
                    e.xp6(28),
                    e.Q6J("fromExistingCSS", "rightFixed")("panelClass", "hidden md:flex"))
                },
                dependencies: [se.sg, Xe.rH, lt, wt, ct, wo, $o],
                styles: [".ads-container-top[_ngcontent-%COMP%], .ads-container-right[_ngcontent-%COMP%]{background-color:#f7f7f7}@media (min-width: 1024px){.become-creator-header-article[_ngcontent-%COMP%]{min-height:calc(100vh - 292px)}}.become-creator-container[_ngcontent-%COMP%]{background-color:var(--text-contrast)}.mobile-achievement-name[_ngcontent-%COMP%]{max-width:90px}.become-creator-header-article-image[_ngcontent-%COMP%]{max-width:470px}.who-can-become-creator-article-image[_ngcontent-%COMP%]{max-width:410px}.what-do-i-do-article-image[_ngcontent-%COMP%]{width:clamp(240px,30vw,310px)}.seems-like-lot-article-image[_ngcontent-%COMP%]{max-width:570px}.how-can-become-creator-article-image[_ngcontent-%COMP%]{max-width:340px}.need-more-help-article-image[_ngcontent-%COMP%]{max-width:430px}.benefits-bar[_ngcontent-%COMP%]{background-color:var(--extra3-color);color:var(--extra3-contrast)}.benefits-bar[_ngcontent-%COMP%]   .benefit-icon-container[_ngcontent-%COMP%]{border-radius:50%;background-color:var(--extra3-contrast);color:var(--extra3-color)}.benefits-bar[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]:nth-child(1)   .benefit-md-name[_ngcontent-%COMP%]{max-width:130px}.benefits-bar[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]:nth-child(2)   .benefit-md-name[_ngcontent-%COMP%]{max-width:111px}.benefits-bar[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]:nth-child(3)   .benefit-md-name[_ngcontent-%COMP%]{max-width:118px}.benefits-bar[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]:nth-child(4)   .benefit-md-name[_ngcontent-%COMP%]{max-width:151px}.seems-like-lot-article[_ngcontent-%COMP%], .need-more-help-article[_ngcontent-%COMP%]{background-color:var(--extra4-color)}.achievement-bar[_ngcontent-%COMP%]{background-color:var(--extra5-color);color:var(--extra5-contrast)}.achievement-bar[_ngcontent-%COMP%]   .achievement-icon[_ngcontent-%COMP%]{color:#63c19d}.mobile-achievement-card[_ngcontent-%COMP%]{background-color:var(--mat-primary-hover)}.how-does-alison-support-you[_ngcontent-%COMP%]{background-color:var(--extra6-color)}.how-does-alison-support-you[_ngcontent-%COMP%]   .how-does-alison-support-you-card[_ngcontent-%COMP%]{border-radius:16px;color:#485158}.how-does-alison-support-you[_ngcontent-%COMP%]   .how-does-alison-support-you-card-icon-container[_ngcontent-%COMP%]{border:4px solid white;background-color:#a3dab6;border-radius:50%}.how-does-alison-support-you[_ngcontent-%COMP%]   .how-does-alison-support-you-card-icon-container[_ngcontent-%COMP%]   .how-does-alison-support-you-card-icon[_ngcontent-%COMP%]{color:#fff;width:clamp(28px,4vw,var(--ng-alison-icon-xl-size));max-width:clamp(28px,4vw,var(--ng-alison-icon-xl-size));height:clamp(28px,4vw,var(--ng-alison-icon-xl-size));max-height:clamp(28px,4vw,var(--ng-alison-icon-xl-size));font-size:clamp(28px,4vw,var(--ng-alison-icon-xl-size))}@media only screen and (min-width: 1024px){.how-does-alison-support-you[_ngcontent-%COMP%]{background-color:#fff}.how-does-alison-support-you[_ngcontent-%COMP%]   .how-does-alison-support-you-card[_ngcontent-%COMP%]{background:var(--extra6-color)}}.article-actions[_ngcontent-%COMP%]:not(.two-actions)   .apply-now-button[_ngcontent-%COMP%]{min-width:170px}.aplication-form[_ngcontent-%COMP%]{color:var(--extra1-color);text-decoration:none;cursor:pointer;font-weight:700}.aplication-form[_ngcontent-%COMP%]:hover{text-decoration:underline;cursor:pointer}.learn-more-button[_ngcontent-%COMP%]{color:var(--mat-primary-bold)!important}.highlited-text[_ngcontent-%COMP%]{color:var(--mat-primary-bold)}.slider-container[_ngcontent-%COMP%]{box-shadow:0 1px 2px #00000029;position:relative;z-index:1}"]
            }),
            n
        }
        )()
          , ma = (()=>{
            class n {
                constructor(t, i) {
                    this._metaTagService = t,
                    this._title = i,
                    this.sliderConfig = {
                        type: "slide",
                        keyboard: "focused",
                        perPage: 3,
                        perMove: 1,
                        gap: "3rem",
                        arrows: !0,
                        breakpoints: {
                            1200: {
                                gap: "2rem"
                            },
                            992: {
                                perPage: 2,
                                perMove: 2
                            }
                        },
                        pagination: !1
                    }
                }
                ngOnInit() {
                    this._title.setTitle("Alison | Course Creator"),
                    this._metaTagService.addTags([{
                        name: "description",
                        content: "Publish a course on Fhorge, gain an income, grow your audience, and empower the world by sharing your knowledge with 25 million+ learners across 195+ countries."
                    }])
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.Y36(ge.h_),e.Y36(ge.Dx))
            }
            ,
            n.\u0275cmp = e.Xpm({
                type: n,
                selectors: [["app-course-creator-main"]],
                decls: 208,
                vars: 13,
                consts: function() {
                    let o, t, i, r, s, a, l, c, d, _, g, m, p, u, E, h, b, C, f, U, v, G, O, N, W, D, M, P, I, k, H, j, q, w, x, R, y, V, J, K, ie, T, X, F, Y, te, S, xe, B, ee, ce, Se, Ge, vt;
                    return o = "" + "\ufffd#4\ufffd" + "Empower Millions" + "\ufffd/#4\ufffd" + " With " + "\ufffd#5\ufffd\ufffd/#5\ufffd" + " Your Expertise ",
                    t = " Publish a course on Fhorge, " + "[\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#11\ufffd]" + "gain an income, grow your audience," + "[\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#11\ufffd]" + " and " + "[\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#11\ufffd]" + "empower the world" + "[\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#11\ufffd]" + " by sharing your knowledge with " + "[\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#11\ufffd]" + "25 million+ learners" + "[\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#11\ufffd]" + " across " + "[\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#11\ufffd]" + "195+ countries." + "[\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#11\ufffd]" + "",
                    t = e.Zx4(t),
                    i = "Republish Your Existing Course Image",
                    r = " Republish Your Existing Course ",
                    s = " Have you published courses online before? Republish them on Alison. ",
                    a = " Learn More ",
                    l = "Become Course Creator Image",
                    c = " Become a Course Creator ",
                    d = " Course Creators develop their courses on their own, in their own time. ",
                    _ = " Learn More ",
                    g = "Become Assisted Course Creator Image",
                    m = " Become an Assisted Course Creator ",
                    p = " Assisted Course Creators build courses with the help of Content Assistants. ",
                    u = " Learn More ",
                    E = "Become Content Assistant Image",
                    h = " Become a Content Assistant ",
                    b = " Content Assistants work with Assisted Course Creators to build courses. ",
                    C = " Learn More ",
                    f = "Republish Existing Course Mobile Image",
                    U = "Republish Existing Course",
                    v = " Have you published courses online before? Republish them on Alison. ",
                    G = "Become Course Creator Mobile Image",
                    O = "Become a Course Creator",
                    N = " Course Creators develop their courses on their own, in their own time. ",
                    W = "Become Assisted Course Creator Mobile Image",
                    D = " Become an Assisted Course Creator ",
                    M = " Assisted Course Creators build courses with the help of Content Assistants. ",
                    P = "Become Content Assistant Mobile Image",
                    I = "Become a Content Assistant",
                    k = " Content Assistants work with Assisted Course Creators to build courses. ",
                    H = " Earn Money by Empowering People ",
                    j = "" + "\ufffd#126\ufffd" + "5 million+" + "\ufffd/#126\ufffd" + " graduates ",
                    q = "" + "\ufffd#131\ufffd" + "250+" + "\ufffd/#131\ufffd" + " publishers ",
                    w = "" + "\ufffd#136\ufffd" + "1 million+" + "\ufffd/#136\ufffd" + " in earnings ",
                    x = " Earn " + "[\ufffd#142\ufffd|\ufffd#143\ufffd]" + "Money" + "[\ufffd/#142\ufffd|\ufffd/#143\ufffd]" + " by Empowering " + "[\ufffd#142\ufffd|\ufffd#143\ufffd]" + "People" + "[\ufffd/#142\ufffd|\ufffd/#143\ufffd]" + "",
                    x = e.Zx4(x),
                    R = "" + "\ufffd#148\ufffd" + "5 million+" + "\ufffd/#148\ufffd" + " graduates ",
                    y = "" + "\ufffd#153\ufffd" + "250+" + "\ufffd/#153\ufffd" + " publishers ",
                    V = "" + "\ufffd#158\ufffd" + "1 million+" + "\ufffd/#158\ufffd" + " in earnings ",
                    J = " Republish Your Existing Course ",
                    K = " Have you published a course online before? Here\u2019s your chance to expand your reach and connect with new learners by republishing your course on Alison! Let\u2019s get started. ",
                    ie = " Learn More ",
                    T = "Republish Your Card Article Image",
                    X = " Become a Course Creator Today ",
                    F = " If you are a subject matter expert who wants to create courses and publish them online for everyone, then you have come to the right place. ",
                    Y = " Learn More ",
                    te = "Become Course Creator Article Image",
                    S = " Become an Assisted Course " + "\ufffd#187\ufffd\ufffd/#187\ufffd" + " Creator Today ",
                    xe = " If you\u2019re a subject matter expert who has content ready to go, but aren\u2019t familiar with course creation tools, we\u2019re here to help. Our team will work with Content Assistants to build your course. ",
                    B = " Learn More ",
                    ee = "Become Assisted Course Creator Article Image",
                    ce = " Become a Content Assistant Today ",
                    Se = " If you can teach, write, and summarise information, and are looking for a flexible job that lets you work from home, look no further! ",
                    Ge = " Learn More ",
                    vt = "Become Content Assistant Article Image",
                    [[1, "course-creator"], [1, "course-creator-header", "pt-8", "sm:pt-9", "md:flex", "md:flex-col", "md:items-center", "md:justify-center"], [1, "text-center", "course-creator-title", "alison-h4", "md:alison-heading", "mx-auto", "mb-0", "px-6", "font-black"], o, [1, "extra1-color"], [1, "block", "md:hidden"], [1, "text-center", "course-creator-desc", "alison-text", "mx-auto", "px-6", "mb-0", "md:block", "hidden", "pt-4"], t, ["aria-labelledby", "course-creator-slider", 1, "splide", "course-creator-slider", "w-full", "hidden", "md:block", "py-12", 3, "appSplideSlider"], [1, "splide__arrows", "flex", "justify-between", "splide__arrows--ltr"], ["type", "button", "disabled", "", "aria-label", "Previous slide", "aria-controls", "splide01-track", 1, "splide__arrow", "splide__arrow--prev", "flex", "items-center", "justify-center"], [1, "icon-chevron-right", "alison-icon-md"], ["type", "button", "aria-label", "Next slide", "aria-controls", "splide01-track", 1, "splide__arrow", "splide__arrow--next", "flex", "items-center", "justify-center"], [1, "splide__track"], [1, "splide__list"], [1, "splide__slide"], [1, "slider-card", "p-6", "alison-card-shadow", "h-full", "flex", "flex-col", "justify-between"], [1, "slider-card-image-container"], ["srcset", "\n                      /ssr/assets/images/publish/card-republish-your-existing-course-mobile.webp 768w,\n                      /ssr/assets/images/publish/card-republish-your-existing-course.webp\n                    "], ["alt", i, "loading", "lazy", "src", "/ssr/assets/images/publish/card-republish-your-existing-course.png", "srcset", "\n                      /ssr/assets/images/publish/card-republish-your-existing-course-mobile.png 768w,\n                      /ssr/assets/images/publish/card-republish-your-existing-course.png\n                    ", 1, "w-full", "h-full", "m-auto", "object-contain"], [1, "slider-card-title", "alison-h4", "font-black", "title-color", "text-center", "mx-auto", "mt-6", "mb-3"], r, [1, "slider-card-desc", "alison-caption", "text-center", "mx-auto", "text-color", "mb-6"], s, ["mat-flat-button", "", "color", "primary", 1, "learn-more-button", "alison-button", "alison-button-lg", "w-full", 3, "routerLink"], a, ["srcset", "\n                      /ssr/assets/images/publish/card-become-course-creator-mobile.webp 768w,\n                      /ssr/assets/images/publish/card-become-course-creator.webp\n                    "], ["alt", l, "loading", "lazy", "src", "/ssr/assets/images/publish/card-become-course-creator.png", "srcset", "\n                      /ssr/assets/images/publish/card-become-course-creator-mobile.png 768w,\n                      /ssr/assets/images/publish/card-become-course-creator.png\n                    ", 1, "w-full", "h-full", "m-auto", "object-contain"], c, d, _, ["srcset", "\n                      /ssr/assets/images/publish/card-become-assisted-course-creator-mobile.webp 768w,\n                      /ssr/assets/images/publish/card-become-assisted-course-creator.webp\n                    "], ["alt", g, "loading", "lazy", "src", "/ssr/assets/images/publish/card-become-assisted-course-creator.png", "srcset", "\n                      /ssr/assets/images/publish/card-become-assisted-course-creator-mobile.png 768w,\n                      /ssr/assets/images/publish/card-become-assisted-course-creator.png\n                    ", 1, "w-full", "h-full", "m-auto", "object-contain"], m, p, u, ["srcset", "\n                      /ssr/assets/images/publish/card-become-content-assistant-mobile.webp 768w,\n                      /ssr/assets/images/publish/card-become-content-assistant.webp\n                    "], ["alt", E, "loading", "lazy", "src", "/ssr/assets/images/publish/card-become-content-assistant.png", "srcset", "\n                      /ssr/assets/images/publish/card-become-content-assistant-mobile.png 768w,\n                      /ssr/assets/images/publish/card-become-content-assistant.webp\n                    ", 1, "w-full", "h-full", "m-auto", "object-contain"], h, b, C, [1, "md:hidden", "block"], [1, "mobile-cards-container", "px-6", "pt-6", "pb-10", "grid", "grid-cols-1", "gap-6"], [1, "mobile-card", "px-3", "pt-3", "pb-4", "text-contrast-bg", "alison-card-shadow", "flex", "rounded-lg", 3, "routerLink"], [1, "mr-3", "flex", "items-center", "mobile-card-image-container"], ["srcset", "\n                  /ssr/assets/images/publish/mobile-republish-existing-course.webp\n                "], ["width", "55", "height", "55", "alt", f, "ngloading", "lazy", "src", "/ssr/assets/images/publish/mobile-republish-existing-course.png", 1, "mobile-card-image", "object-contain"], [1, "mobile-card-content", "w-full"], [1, "font-black", "alison-body-secondary", "title-color", "flex", "justify-between", "items-center", "mb-2"], U, [1, "icon-chevron-right"], [1, "mobile-card-desc", "text-color", "alison-caption", "pr-8", "mb-0"], v, ["srcset", "\n                  /ssr/assets/images/publish/mobile-become-course-creator.webp\n                "], ["width", "55", "height", "55", "alt", G, "loading", "lazy", "src", "/ssr/assets/images/publish/mobile-become-course-creator.png", 1, "mobile-card-image", "object-contain"], [1, "font-black", "title-color", "alison-body-secondary", "flex", "justify-between", "items-center", "mb-2"], O, N, ["srcset", "\n                  /ssr/assets/images/publish/mobile-become-assisted-course-creator.webp\n                "], ["width", "55", "height", "55", "alt", W, "loading", "lazy", "src", "/ssr/assets/images/publish/mobile-become-assisted-course-creator.png", 1, "mobile-card-image", "object-contain"], D, M, ["srcset", "\n                  /ssr/assets/images/publish/mobile-become-content-assistant.webp\n                "], ["width", "55", "height", "55", "alt", P, "loading", "lazy", "src", "/ssr/assets/images/publish/mobile-become-content-assistant.png", 1, "mobile-card-image", "object-contain"], I, k, [1, "mobile-achievement-bar", "pb-7", "pt-6", "sm:py-6", "alison-shadow-low"], [1, "text-center", "mobile-achievement-title", "title-color", "alison-body-secondary", "pb-3", "mb-0"], H, [1, "mobile-achievement-cards-container", "items-center", "grid", "gap-5", "px-6", "grid-cols-3", "sm:gap-6"], [1, "mobile-achievement-card", "alison-primary", "w-full", "text-center", "rounded-xl", "pt-0.5"], [1, "alison-icon-lg", "achievement-icon", "icon-graduation-cap"], [1, "alison-caption", "card-text", "m-auto", "-mt-0.5", "mb-0", "px-0.5"], j, [1, "alison-icon-lg", "achievement-icon", "icon-pen-nib"], q, [1, "alison-icon-lg", "achievement-icon", "icon-circle-euro"], w, [1, "hidden", "md:block"], [1, "achievement-bar", "flex", "items-center", "justify-between", "py-5"], [1, "achievement-item", "flex", "items-center"], [1, "mb-0", "alison-h4", "font-black"], x, [1, "extra2-color", "font-black"], [1, "alison-body-secondary", "md:alison-body", "mb-0", "pl-2"], R, y, V, [1, "republish-article", "article-container", "flex", "items-center", "justify-between", "flex-row-reverse"], [1, "article-content", "w-full", "my-6", "xl:ml-10", "ml-3", "md:my-16"], [1, "article-title", "alison-title", "title-color", "mb-4"], J, [1, "article-body", "alison-body-secondary", "md:alison-body", "text-color", "max-w-lg", "mb-0"], K, ["mat-flat-button", "", "color", "primary", 1, "learn-more-button", "alison-button", "alison-button-lg", "mt-9", 3, "routerLink"], ie, [1, "image-container", "w-full", "flex", "self-end", "justify-center"], ["srcset", "\n              /ssr/assets/images/publish/republish-your-course-mobile.webp 768w,\n              /ssr/assets/images/publish/republish-your-course.webp\n            "], ["alt", T, "loading", "lazy", "src", "/ssr/assets/images/publish/republish-your-course.png", "srcset", "\n              /ssr/assets/images/publish/republish-your-course-mobile.png 768w,\n              /ssr/assets/images/publish/republish-your-course.png\n            ", 1, "republish-article-image", "object-contain", "w-full"], [1, "course-creator-article", "article-container", "flex", "items-center", "justify-between"], [1, "article-content", "w-full", "my-6", "md:my-16"], X, [1, "article-body", "alison-body-secondary", "md:alison-body", "text-color", "mr-0", "lg:mr-7", "mb-0"], F, Y, [1, "image-container", "text-center", "w-full", "md:pl-10"], ["srcset", "\n              /ssr/assets/images/publish/become-course-creator-mobile.webp 768w,\n              /ssr/assets/images/publish/become-course-creator.webp\n            "], ["alt", te, "loading", "lazy", "src", "/ssr/assets/images/publish/become-course-creator.png", "srcset", "\n              /ssr/assets/images/publish/become-course-creator-mobile.png 768w,\n              /ssr/assets/images/publish/become-course-creator.png\n            ", 1, "course-creator-article-image", "object-contain", "w-full"], [1, "assisted-course-creator-article", "article-container", "flex", "items-center", "justify-between", "flex-row-reverse"], [1, "article-content", "w-full", "my-6", "md:my-16", "xl:ml-10", "ml-3"], [1, "article-title", "alison-title", "title-color", "mb-4", "mr-0", "lg:mr-8"], S, [1, "hidden", "lg:block"], xe, B, [1, "image-container", "w-full"], ["srcset", "\n              /ssr/assets/images/publish/become-assisted-course-creator-mobile.webp 768w,\n              /ssr/assets/images/publish/become-assisted-course-creator.webp\n            "], ["alt", ee, "loading", "lazy", "src", "/ssr/assets/images/publish/become-assisted-course-creator.png", "srcset", "\n              /ssr/assets/images/publish/become-assisted-course-creator-mobile.png 768w,\n              /ssr/assets/images/publish/become-assisted-course-creator.png\n            ", 1, "assisted-course-creator-article-image", "object-contain", "w-full"], [1, "content-assistant-article", "article-container", "flex", "items-center", "justify-between"], ce, [1, "article-body", "alison-body-secondary", "md:alison-body", "text-color", "mb-0"], Se, Ge, [1, "image-container", "text-center", "w-full", "flex", "self-end", "justify-center"], ["srcset", "\n              /ssr/assets/images/publish/become-content-assistant-mobile.webp 768w,\n              /ssr/assets/images/publish/become-content-assistant.webp\n            "], ["alt", vt, "loading", "lazy", "src", "/ssr/assets/images/publish/become-content-assistant.png", "srcset", "\n              /ssr/assets/images/publish/become-content-assistant-mobile.png 768w,\n              /ssr/assets/images/publish/become-content-assistant.png\n            ", 1, "content-assistant-article-image", "object-contain", "w-full"]]
                },
                template: function(t, i) {
                    1 & t && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "h1", 2),
                    e.tHW(3, 3),
                    e._UZ(4, "span", 4)(5, "br", 5),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(6, "p", 6),
                    e.tHW(7, 7),
                    e._UZ(8, "b")(9, "b")(10, "b")(11, "b"),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(12, "section", 8)(13, "div", 9)(14, "button", 10),
                    e._UZ(15, "i", 11),
                    e.qZA(),
                    e.TgZ(16, "button", 12),
                    e._UZ(17, "i", 11),
                    e.qZA()(),
                    e.TgZ(18, "div", 13)(19, "ul", 14)(20, "li", 15)(21, "div", 16)(22, "div", 17)(23, "picture"),
                    e._UZ(24, "source", 18)(25, "img", 19),
                    e.qZA()(),
                    e.TgZ(26, "h3", 20),
                    e.SDv(27, 21),
                    e.qZA(),
                    e.TgZ(28, "p", 22),
                    e.SDv(29, 23),
                    e.qZA(),
                    e.TgZ(30, "a", 24),
                    e.SDv(31, 25),
                    e.qZA()()(),
                    e.TgZ(32, "li", 15)(33, "div", 16)(34, "div", 17)(35, "picture"),
                    e._UZ(36, "source", 26)(37, "img", 27),
                    e.qZA()(),
                    e.TgZ(38, "h3", 20),
                    e.SDv(39, 28),
                    e.qZA(),
                    e.TgZ(40, "p", 22),
                    e.SDv(41, 29),
                    e.qZA(),
                    e.TgZ(42, "a", 24),
                    e.SDv(43, 30),
                    e.qZA()()(),
                    e.TgZ(44, "li", 15)(45, "div", 16)(46, "div", 17)(47, "picture"),
                    e._UZ(48, "source", 31)(49, "img", 32),
                    e.qZA()(),
                    e.TgZ(50, "h3", 20),
                    e.SDv(51, 33),
                    e.qZA(),
                    e.TgZ(52, "p", 22),
                    e.SDv(53, 34),
                    e.qZA(),
                    e.TgZ(54, "a", 24),
                    e.SDv(55, 35),
                    e.qZA()()(),
                    e.TgZ(56, "li", 15)(57, "div", 16)(58, "div", 17)(59, "picture"),
                    e._UZ(60, "source", 36)(61, "img", 37),
                    e.qZA()(),
                    e.TgZ(62, "h3", 20),
                    e.SDv(63, 38),
                    e.qZA(),
                    e.TgZ(64, "p", 22),
                    e.SDv(65, 39),
                    e.qZA(),
                    e.TgZ(66, "a", 24),
                    e.SDv(67, 40),
                    e.qZA()()()()()(),
                    e.TgZ(68, "div", 41)(69, "div", 42)(70, "div", 43)(71, "div", 44)(72, "picture"),
                    e._UZ(73, "source", 45)(74, "img", 46),
                    e.qZA()(),
                    e.TgZ(75, "div", 47)(76, "h2", 48),
                    e.ynx(77),
                    e.SDv(78, 49),
                    e.BQk(),
                    e._UZ(79, "i", 50),
                    e.qZA(),
                    e.TgZ(80, "p", 51),
                    e.SDv(81, 52),
                    e.qZA()()(),
                    e.TgZ(82, "div", 43)(83, "div", 44)(84, "picture"),
                    e._UZ(85, "source", 53)(86, "img", 54),
                    e.qZA()(),
                    e.TgZ(87, "div", 47)(88, "h2", 55),
                    e.ynx(89),
                    e.SDv(90, 56),
                    e.BQk(),
                    e._UZ(91, "i", 50),
                    e.qZA(),
                    e.TgZ(92, "p", 51),
                    e.SDv(93, 57),
                    e.qZA()()(),
                    e.TgZ(94, "div", 43)(95, "div", 44)(96, "picture"),
                    e._UZ(97, "source", 58)(98, "img", 59),
                    e.qZA()(),
                    e.TgZ(99, "div", 47)(100, "h2", 55),
                    e.ynx(101),
                    e.SDv(102, 60),
                    e.BQk(),
                    e._UZ(103, "i", 50),
                    e.qZA(),
                    e.TgZ(104, "p", 51),
                    e.SDv(105, 61),
                    e.qZA()()(),
                    e.TgZ(106, "div", 43)(107, "div", 44)(108, "picture"),
                    e._UZ(109, "source", 62)(110, "img", 63),
                    e.qZA()(),
                    e.TgZ(111, "div", 47)(112, "h2", 55),
                    e.ynx(113),
                    e.SDv(114, 64),
                    e.BQk(),
                    e._UZ(115, "i", 50),
                    e.qZA(),
                    e.TgZ(116, "p", 51),
                    e.SDv(117, 65),
                    e.qZA()()()(),
                    e.TgZ(118, "div", 66)(119, "p", 67),
                    e.SDv(120, 68),
                    e.qZA(),
                    e.TgZ(121, "div", 69)(122, "div", 70),
                    e._UZ(123, "i", 71),
                    e.TgZ(124, "p", 72),
                    e.tHW(125, 73),
                    e._UZ(126, "b"),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(127, "div", 70),
                    e._UZ(128, "i", 74),
                    e.TgZ(129, "p", 72),
                    e.tHW(130, 75),
                    e._UZ(131, "b"),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(132, "div", 70),
                    e._UZ(133, "i", 76),
                    e.TgZ(134, "p", 72),
                    e.tHW(135, 77),
                    e._UZ(136, "b"),
                    e.N_p(),
                    e.qZA()()()()()(),
                    e.TgZ(137, "div", 78)(138, "div", 79)(139, "div", 80)(140, "p", 81),
                    e.tHW(141, 82),
                    e._UZ(142, "span", 83)(143, "span", 83),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(144, "div", 80),
                    e._UZ(145, "i", 71),
                    e.TgZ(146, "p", 84),
                    e.tHW(147, 85),
                    e._UZ(148, "b"),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(149, "div", 80),
                    e._UZ(150, "i", 74),
                    e.TgZ(151, "p", 84),
                    e.tHW(152, 86),
                    e._UZ(153, "b"),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(154, "div", 80),
                    e._UZ(155, "i", 76),
                    e.TgZ(156, "p", 84),
                    e.tHW(157, 87),
                    e._UZ(158, "b"),
                    e.N_p(),
                    e.qZA()()(),
                    e.TgZ(159, "div", 88)(160, "div", 89)(161, "h3", 90),
                    e.SDv(162, 91),
                    e.qZA(),
                    e.TgZ(163, "p", 92),
                    e.SDv(164, 93),
                    e.qZA(),
                    e.TgZ(165, "a", 94),
                    e.SDv(166, 95),
                    e.qZA()(),
                    e.TgZ(167, "div", 96)(168, "picture"),
                    e._UZ(169, "source", 97)(170, "img", 98),
                    e.qZA()()(),
                    e.TgZ(171, "div", 99)(172, "div", 100)(173, "h3", 90),
                    e.SDv(174, 101),
                    e.qZA(),
                    e.TgZ(175, "p", 102),
                    e.SDv(176, 103),
                    e.qZA(),
                    e.TgZ(177, "a", 94),
                    e.SDv(178, 104),
                    e.qZA()(),
                    e.TgZ(179, "div", 105)(180, "picture"),
                    e._UZ(181, "source", 106)(182, "img", 107),
                    e.qZA()()(),
                    e.TgZ(183, "div", 108)(184, "div", 109)(185, "h3", 110),
                    e.tHW(186, 111),
                    e._UZ(187, "br", 112),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(188, "p", 92),
                    e.SDv(189, 113),
                    e.qZA(),
                    e.TgZ(190, "a", 94),
                    e.SDv(191, 114),
                    e.qZA()(),
                    e.TgZ(192, "div", 115)(193, "picture"),
                    e._UZ(194, "source", 116)(195, "img", 117),
                    e.qZA()()(),
                    e.TgZ(196, "div", 118)(197, "div", 100)(198, "h3", 90),
                    e.SDv(199, 119),
                    e.qZA(),
                    e.TgZ(200, "p", 120),
                    e.SDv(201, 121),
                    e.qZA(),
                    e.TgZ(202, "a", 94),
                    e.SDv(203, 122),
                    e.qZA()(),
                    e.TgZ(204, "div", 123)(205, "picture"),
                    e._UZ(206, "source", 124)(207, "img", 125),
                    e.qZA()()()()()),
                    2 & t && (e.xp6(12),
                    e.Q6J("appSplideSlider", i.sliderConfig),
                    e.xp6(18),
                    e.Q6J("routerLink", "/publish/republish-course"),
                    e.xp6(12),
                    e.Q6J("routerLink", "/publish/course-creator"),
                    e.xp6(12),
                    e.Q6J("routerLink", "/publish/assisted-creator"),
                    e.xp6(12),
                    e.Q6J("routerLink", "/publish/content-assistant"),
                    e.xp6(4),
                    e.Q6J("routerLink", "/publish/republish-course"),
                    e.xp6(12),
                    e.Q6J("routerLink", "/publish/course-creator"),
                    e.xp6(12),
                    e.Q6J("routerLink", "/publish/assisted-creator"),
                    e.xp6(12),
                    e.Q6J("routerLink", "/publish/content-assistant"),
                    e.xp6(59),
                    e.Q6J("routerLink", "/publish/republish-course"),
                    e.xp6(12),
                    e.Q6J("routerLink", "/publish/course-creator"),
                    e.xp6(13),
                    e.Q6J("routerLink", "/publish/assisted-creator"),
                    e.xp6(12),
                    e.Q6J("routerLink", "/publish/content-assistant"))
                },
                dependencies: [Xe.rH, lt, _i],
                styles: [".course-creator[_ngcontent-%COMP%]{--x-padding-sm: 60px;--x-padding-md: 76px;--x-padding-lg: 130px;--x-padding: var(--x-padding-sm)}@media only screen and (min-width: 992px){.course-creator[_ngcontent-%COMP%]{--x-padding: var(--x-padding-md)}}@media only screen and (min-width: 1200px){.course-creator[_ngcontent-%COMP%]{--x-padding: var(--x-padding-lg)}}.learn-more-button[_ngcontent-%COMP%]{min-width:200px}.mobile-card-desc[_ngcontent-%COMP%]{line-height:20.66px}.mobile-achievement-title[_ngcontent-%COMP%]{color:var(--title-color);line-height:21px}.mobile-achievement-name[_ngcontent-%COMP%]{max-width:90px}.mobile-achievement-card[_ngcontent-%COMP%]{background-color:var(--mat-primary-hover);min-width:90px;min-height:84px}.mobile-achievement-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{max-width:90px;color:var(--text-color);line-height:18px}.mobile-achievement-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--mat-primary-bold)}.mobile-achievement-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#42b587}.mobile-achievement-bar[_ngcontent-%COMP%]{background-color:var(--extra5-color)}.extra2-color[_ngcontent-%COMP%]{color:var(--extra2-color)}.extra1-color[_ngcontent-%COMP%]{color:var(--extra1-color)}.course-creator-slider[_ngcontent-%COMP%], .achievement-bar[_ngcontent-%COMP%], .article-container[_ngcontent-%COMP%]{padding-left:var(--x-padding);padding-right:var(--x-padding)}.course-creator-title[_ngcontent-%COMP%]{max-width:680px}.mobile-card-image-container[_ngcontent-%COMP%]{min-width:52px}.course-creator-desc[_ngcontent-%COMP%]{max-width:680px}.course-creator-title[_ngcontent-%COMP%], .course-creator-desc[_ngcontent-%COMP%]{color:var(--extra7-color)}.course-creator-header[_ngcontent-%COMP%]{background-color:#e7f0f5}@media (min-width: 1024px){.course-creator-header[_ngcontent-%COMP%]{min-height:calc(100vh - 292px)}}.achievement-bar[_ngcontent-%COMP%]{background-color:var(--extra3-color);color:var(--extra3-contrast)}.achievement-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{scale:1.1;color:#b5bfcd}.article-container.course-creator-article[_ngcontent-%COMP%], .article-container.content-assistant-article[_ngcontent-%COMP%]{background-color:#eff9ff}.republish-article-image[_ngcontent-%COMP%]{max-width:420px}.course-creator-article-image[_ngcontent-%COMP%]{max-width:440px}.assisted-course-creator-article-image[_ngcontent-%COMP%]{max-width:530px}.content-assistant-article-image[_ngcontent-%COMP%]{max-width:470px}.slider-card[_ngcontent-%COMP%]{border-radius:20px;background-color:#fff;max-height:380px}.slider-card-image-container[_ngcontent-%COMP%]{height:109px}.slider-card-title[_ngcontent-%COMP%]{max-width:230px}.slider-card-desc[_ngcontent-%COMP%]{line-height:1.7;letter-spacing:.28px;max-width:280px}.splide__arrows[_ngcontent-%COMP%]{position:absolute;top:calc(50% - 24px);z-index:1;width:calc(100vw - var(--x-padding) * 2)}.splide__arrow[_ngcontent-%COMP%]:disabled{opacity:0;cursor:default}.splide__arrow[_ngcontent-%COMP%]:not(:disabled){border:1px solid #008EC3;color:#008ec3;width:48px;height:48px;border-radius:50%;transition:all .2s linear}.splide__arrow[_ngcontent-%COMP%]:not(:disabled):hover{border:1px solid #005e84;color:#005e84}.splide__arrow--prev[_ngcontent-%COMP%]{transform:rotate(180deg);margin-left:calc(-48px - var(--x-padding) / 6)}.splide__arrow--next[_ngcontent-%COMP%]{margin-right:calc(-48px - var(--x-padding) / 6)}.course-creator-slider[_ngcontent-%COMP%]     .splide__list{height:auto!important}"]
            }),
            n
        }
        )()
          , pa = (()=>{
            class n {
                constructor(t, i) {
                    this._metaTagService = t,
                    this._title = i
                }
                ngOnInit() {
                    this._title.setTitle("Alison | Republish Courses"),
                    this._metaTagService.addTags([{
                        name: "description",
                        content: "Have you published courses online before? Republish them on Alison."
                    }])
                }
            }
            return n.\u0275fac = function(t) {
                return new (t || n)(e.Y36(ge.h_),e.Y36(ge.Dx))
            }
            ,
            n.\u0275cmp = e.Xpm({
                type: n,
                selectors: [["app-republish-course"]],
                decls: 186,
                vars: 7,
                consts: function() {
                    let o, t, i, r, s, a, l, c, d, _, g, m, p, u, E, h, b, C, f, U, v, G, O, N, W, D, M, P, I, k, H, j, q, w, x, R, y, V, J, K, ie, T, X, F, Y, te;
                    return o = " Publish Your Existing " + "\ufffd#9\ufffd\ufffd/#9\ufffd" + " Course on Alison Today ",
                    t = " Have you published a course online before? Here\u2019s your chance to expand your reach and connect with new learners by republishing your course on Alison! Let\u2019s get started. ",
                    i = " Apply Now ",
                    r = " Learn more ",
                    s = "Publish Your Existing Course Image",
                    a = " Earn an additional income stream ",
                    l = " Earn an additional income stream ",
                    c = " Expand your audience ",
                    d = " Expand your audience ",
                    _ = " Connect with Alison\u2019s 25 million+ learners ",
                    g = " Connect with Alison\u2019s 25 million+ learners ",
                    m = " Build your brand globally as an expert publisher ",
                    p = " Build your brand globally as an expert publisher ",
                    u = " Who can republish a course? ",
                    E = " Someone who has published courses online before ",
                    h = " Someone looking to republish those courses on Alison ",
                    b = " Someone who can provide us with access to their previously published course ",
                    C = " Apply Now ",
                    f = " Who can republish " + "\ufffd#75\ufffd\ufffd/#75\ufffd" + " a course? ",
                    U = "Who can republish a course Image",
                    v = " No experience publishing a " + "\ufffd#84\ufffd\ufffd/#84\ufffd" + " course online? No worries. ",
                    G = "No experience publishinga course online Image",
                    O = " If you want to publish a course online for the first time, we can help you with that too. ",
                    N = " Become a Course Creator ",
                    W = " How can I republish my course? ",
                    D = "Sign up to Alison",
                    M = "Fill out our short " + "\ufffd#106\ufffd" + " application form " + "\ufffd/#106\ufffd" + " with your course information ",
                    P = " Let us guide you the rest of the way ",
                    I = " Apply Now ",
                    k = " How can I republish " + "\ufffd#117\ufffd\ufffd/#117\ufffd" + " my course? ",
                    H = "How can we republish article Image",
                    j = " How does Alison " + "\ufffd#125\ufffd\ufffd/#125\ufffd" + " support you? ",
                    q = " We run regular " + "\ufffd#132\ufffd" + "webinars" + "\ufffd/#132\ufffd" + ", where you can ask all your questions ",
                    w = " We guide you to republish your course by " + "\ufffd#138\ufffd" + "assigning a Publishing Account Manager" + "\ufffd/#138\ufffd" + " to you ",
                    x = " We " + "\ufffd#144\ufffd" + "promote your course" + "\ufffd/#144\ufffd" + " to our audience via advertising on social media, email, and search ",
                    R = " We help you track your progress and course enrolments via your " + "\ufffd#150\ufffd" + "personalised Digital Dashboard" + "\ufffd/#150\ufffd" + "",
                    y = " Publish a brand new course ",
                    V = " Why just republish your old course, when you can also create a new one? Become a Course Creator and we\u2019ll help you with our course creation tools. ",
                    J = " Start Now ",
                    K = " Publish a brand new course ",
                    ie = "Republish new brand new course Image",
                    T = " What do I do now? ",
                    X = " Now, you share your " + "[\ufffd#172\ufffd|\ufffd#173\ufffd|\ufffd#174\ufffd]" + "expertise on Alison" + "[\ufffd/#172\ufffd|\ufffd/#173\ufffd|\ufffd/#174\ufffd]" + " and get rewarded for it. Now, you " + "[\ufffd#172\ufffd|\ufffd#173\ufffd|\ufffd#174\ufffd]" + "reach new learners" + "[\ufffd/#172\ufffd|\ufffd/#173\ufffd|\ufffd/#174\ufffd]" + " who previously didn\u2019t have access to you. But most importantly, now, you " + "[\ufffd#172\ufffd|\ufffd#173\ufffd|\ufffd#174\ufffd]" + " empower millions across the world. " + "[\ufffd/#172\ufffd|\ufffd/#173\ufffd|\ufffd/#174\ufffd]" + " After all, it\u2019s not just us who need your expertise. The world needs it too. ",
                    X = e.Zx4(X),
                    F = " Apply Now ",
                    Y = " What do I do now? ",
                    te = "What do I do Image",
                    [[1, "republish-course-outer-container"], [1, "republish-course-inner-container"], [1, "ads-container-top", "hidden", "md:block"], [3, "fromExistingCSS", "adFormat", "panelClass"], [1, "republish-container"], [1, "republish-header-article", "article-container", "flex", "flex-col", "md:flex-row", "article-container", "items-center", "px-6", "md:px-10", "lg:px-20"], [1, "article-content", "w-full", "pb-6", "pt-8", "md:py-0"], [1, "alison-h2", "md:alison-title", "text", "title-color", "font-black", "mb-3", "md:mb-4", "text-center", "md:text-left"], o, [1, "block", "sm:hidden"], [1, "article-body", "md:max-w-lg", "alison-body-secondary", "md:alison-body", "text-color", "text-center", "md:text-left", "2xl", "mb-0"], t, [1, "article-actions", "w-full", "xl:w-2/3", "two-actions", "mt-6", "md:mt-9", "grid", "gap-6", "grid-cols-2"], ["color", "primary", "mat-flat-button", "", "href", "/publish/alison-publisher-application", 1, "apply-now-button", "alison-button", "alison-button-lg", "w-full", "order-2", "md:order-1"], i, ["appScrollIntoView", "#benefits", "mat-stroked-button", "", "color", "primary", 1, "learn-more-button", "alison-button", "alison-button-lg", "w-full", "order-1", "md:order-2"], r, [1, "image-container", "w-full", "flex", "justify-center", "md:justify-end", "self-end", "md:mt-20"], ["type", "image/webp", "media", "(max-width: 768px)", "srcset", "\n                /ssr/assets/images/publish/republish-your-course-today-mobile.webp\n              ", "sizes", "166px"], ["type", "image/png", "srcset", "\n                /ssr/assets/images/publish/republish-your-course-today-mobile.png\n              ", "media", "(max-width: 768px)", "sizes", "166px"], ["type", "image/webp", "srcset", "\n                /ssr/assets/images/publish/republish-your-course-today.webp\n              ", "media", "(min-width: 768.1px)"], ["alt", s, "src", "/ssr/assets/images/publish/republish-your-course-today.png", "srcset", "\n                /ssr/assets/images/publish/republish-your-course-today.png\n              ", 1, "republish-header-article-image", "w-full", "object-contain", "px-2.5", "md:px-0"], ["id", "benefits", 1, "benefits-bar", "flex", "flex-col", "lg:flex-row", "items-start", "lg:items-center", "justify-between", "py-7", "lg:py-6", "px-6", "md:px-10", "lg:px-20"], [1, "benefit-item", "flex", "items-center", "pb-5", "lg:pb-0"], [1, "benefit-icon-container", "mr-4", "lg:mr-5", "inline-flex", "items-center", "justify-center"], [1, "benefit-icon", "alison-icon-md", "p-0", "md:p-1.5", "icon-check1"], [1, "benefit-name", "alison-caption", "font-bold", "block", "lg:hidden", "mb-0"], a, [1, "benefit-md-name", "alison-body-secondary", "font-bold", "lg:block", "hidden", "mb-0"], l, c, d, _, g, [1, "benefit-item", "flex", "items-center"], m, p, [1, "who-can-republish-article", "article-container", "flex", "items-center", "flex-col-reverse", "md:flex-row-reverse", "px-6", "md:px-10", "lg:px-20"], [1, "article-content", "mt-6", "mb-8", "md:my-9", "lg:my-16", "w-full"], [1, "alison-h2", "md:alison-title", "title-color", "font-black", "hidden", "md:block", "mb-6"], u, [1, "article-list"], [1, "article-list-item", "flex", "alison-body-secondary", "md:alison-body", "text-color", "mb-3", "md:mb-4"], [1, "article-list-item-icon", "icon-check1", "alison-icon-md", "alison-primary", "mr-3", "mt-1"], E, h, [1, "article-list-item", "flex", "alison-body-secondary", "md:alison-body", "text-color", "mb-0"], b, [1, "article-actions", "mt-6", "md:mt-9", "text-center", "md:text-left"], ["mat-flat-button", "", "color", "primary", "href", "/publish/alison-publisher-application", 1, "apply-now-button", "alison-button", "alison-button-lg"], C, [1, "image-container", "w-full", "self-end"], [1, "alison-h2", "md:alison-title", "title-color", "text-center", "block", "md:hidden", "my-6"], f, ["srcset", "\n                /ssr/assets/images/publish/who-can-republish-mobile.webp 768w,\n                /ssr/assets/images/publish/who-can-republish.webp\n              "], ["alt", U, "loading", "lazy", "src", "/ssr/assets/images/publish/who-can-republish.png", "srcset", "\n                /ssr/assets/images/publish/who-can-republish-mobile.png 768w,\n                /ssr/assets/images/publish/who-can-republish.png\n              ", 1, "who-can-republish-article-image", "w-full", "object-contain", "m-auto", "md:ml-0", "md:h-auto"], [1, "no-experience-publishing", "article-container", "pt-6", "pb-8", "md:py-9", "px-6", "md:px-10", "lg:px-20", "relative", "z-10"], ["src", "/ssr/assets/images/publish/no-experience-cover.png", 1, "no-experience-publishing-background", "hidden", "md:block", "-z-10"], [1, "w-full", "text-center", "z-10"], [1, "alison-h2", "md:alison-title", "article-title", "title-color", "text-center", "mb-4"], v, [1, "block", "md:hidden"], [1, "image-container", "block", "md:hidden"], ["height", "100", "srcset", "\n                  /ssr/assets/images/publish/no-experience-publishing.webp\n                "], ["alt", G, "height", "100", "loading", "lazy", "src", "/ssr/assets/images/publish/no-experience-publishing.png", "srcset", "\n                  /ssr/assets/images/publish/no-experience-publishing.png\n                ", 1, "no-experience-publishing-image", "m-auto"], [1, "alison-body-secondary", "md:alison-body", "text-color", "text-center", "my-6", "md:mb-9", "md:mt-4"], O, ["mat-flat-button", "", "color", "primary", 1, "apply-now-button", "alison-button", "alison-button-lg", "w-full", "sm:w-auto", 3, "routerLink"], N, [1, "how-can-republish-article", "article-container", "flex", "flex-col-reverse", "md:flex-row", "mt-6", "mb-8", "md:my-0", "px-6", "md:px-10", "lg:px-20"], [1, "article-content", "w-full", "md:my-16"], [1, "alison-h2", "md:alison-title", "title-color", "font-black", "text-left", "md:block", "hidden"], W, [1, "article-list", "mt-6"], D, M, ["href", "/publish/alison-publisher-application", 1, "aplication-form"], P, [1, "article-actions", "w-full", "text-center", "md:text-left", "mt-6", "md:mt-9"], I, [1, "image-container", "f-full", "md:w-2/3", "flex", "flex-col", "items-center", "md:items-end", "justify-end"], [1, "alison-h2", "md:alison-title", "title-color", "text-center", "block", "md:hidden", "mb-6"], k, ["srcset", "\n                /ssr/assets/images/publish/republish-your-course1-mobile.webp 768w,\n                /ssr/assets/images/publish/republish-your-course1.webp\n              "], ["alt", H, "loading", "lazy", "src", "/ssr/assets/images/publish/republish-your-course1.png", "srcset", "\n                /ssr/assets/images/publish/republish-your-course1-mobile.png 768w,\n                /ssr/assets/images/publish/republish-your-course1.png\n              ", 1, "how-can-republish-article-image", "w-full", "object-contain"], [1, "how-does-alison-support-you", "article-container", "py-6", "md:py-12", "px-6", "md:px-10", "lg:px-20"], [1, "w-full", "text-center"], [1, "alison-h2", "md:alison-title", "title-color", "text-center", "mb-5", "lg:mb-9"], j, [1, "how-does-alison-support-you-cards", "grid", "grid-cols-1", "lg:grid-cols-2", "gap-5", "lg:gap-9"], [1, "how-does-alison-support-you-card", "lg:p-5", "flex", "items-center", "lg:items-start", "text-start", "text-color"], [1, "how-does-alison-support-you-card-icon-container", "flex", "items-center", "justify-center", "mr-3"], [1, "icon-play1", "how-does-alison-support-you-card-icon"], [1, "pr-5", "lg:pr-16", "alison-caption", "md:alison-body-secondary"], q, [1, "icon-user-tie", "how-does-alison-support-you-card-icon"], [1, "pr-0", "lg:pr-16", "alison-caption", "md:alison-body-secondary"], w, [1, "icon-bullhorn", "how-does-alison-support-you-card-icon"], [1, "pr-0", "lg:pr-9", "alison-caption", "md:alison-body-secondary"], x, [1, "icon-objects-column", "how-does-alison-support-you-card-icon"], R, [1, "republish-brand-new-course-article", "article-container", "flex", "flex-col-reverse", "md:flex-row-reverse", "mt-6", "mb-8", "md:my-0", "px-6", "md:px-10", "lg:px-20"], [1, "alison-h2", "md:alison-title", "title-color", "font-black", "text-left", "hidden", "md:block", "mt-6"], y, [1, "alison-body-secondary", "md:alison-body", "text-color", "text-center", "md:text-left", "mb-6", "mt-4", "md:mb-9"], V, [1, "article-actions", "text-center", "md:text-left"], ["mat-flat-button", "", "color", "primary", 1, "apply-now-button", "alison-button", "alison-button-lg", 3, "routerLink"], J, [1, "image-container", "w-full", "flex", "flex-col", "items-center", "justify-center", "md:items-start"], [1, "alison-h3", "title-color", "font-black", "center", "block", "md:hidden", "mb-5"], K, ["srcset", "\n                /ssr/assets/images/publish/publish-brand-new-course-mobile.webp 768w,\n                /ssr/assets/images/publish/publish-brand-new-course.webp\n              "], ["alt", ie, "loading", "lazy", "src", "/ssr/assets/images/publish/publish-brand-new-course.png", "srcset", "\n                /ssr/assets/images/publish/publish-brand-new-course-mobile.png 768w,\n                /ssr/assets/images/publish/publish-brand-new-course.png\n              ", 1, "republish-brand-new-course-article-image"], [1, "what-do-i-do-article", "article-container", "flex", "flex-col-reverse", "md:flex-row", "items-center", "px-6", "md:px-10", "lg:px-20"], [1, "article-content", "w-full", "mt-6", "mb-10", "md:my-12"], [1, "alison-h2", "md:alison-title", "title-color", "font-black", "hidden", "md:block", "mb-4"], T, [1, "article-body", "md:max-w-lg", "alison-body-secondary", "md:alison-body", "text-color", "text-center", "md:text-left", "mb-0"], X, [1, "highlited-text"], F, [1, "image-container", "w-full", "flex", "flex-col", "md:flex-row", "self-end", "items-center", "md:items-end", "justify-center", "md:justify-end"], [1, "alison-h2", "md:alison-title", "title-color", "font-black", "text-center", "block", "md:hidden", "mt-7", "mb-5"], Y, ["srcset", "\n                /ssr/assets/images/publish/what-do-i-do-mobile.webp 768w,\n                /ssr/assets/images/publish/what-do-i-do.webp\n              "], ["alt", te, "loading", "lazy", "src", "/ssr/assets/images/publish/what-do-i-do.png", "srcset", "\n                /ssr/assets/images/publish/what-do-i-do-mobile.png 768w,\n                /ssr/assets/images/publish/what-do-i-do.png\n              ", 1, "what-do-i-do-article-image", "object-contain"], [1, "ads-container-right", "hidden", "md:flex"], [3, "fromExistingCSS", "panelClass"]]
                },
                template: function(t, i) {
                    1 & t && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2),
                    e._UZ(3, "google-adsense", 3),
                    e.qZA(),
                    e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h3", 7),
                    e.tHW(8, 8),
                    e._UZ(9, "br", 9),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(10, "p", 10),
                    e.SDv(11, 11),
                    e.qZA(),
                    e.TgZ(12, "div", 12)(13, "a", 13),
                    e.SDv(14, 14),
                    e.qZA(),
                    e.TgZ(15, "a", 15),
                    e.SDv(16, 16),
                    e.qZA()()(),
                    e.TgZ(17, "div", 17)(18, "picture"),
                    e._UZ(19, "source", 18)(20, "source", 19)(21, "source", 20)(22, "img", 21),
                    e.qZA()()(),
                    e.TgZ(23, "div", 22)(24, "div", 23)(25, "div", 24),
                    e._UZ(26, "i", 25),
                    e.qZA(),
                    e.TgZ(27, "p", 26),
                    e.SDv(28, 27),
                    e.qZA(),
                    e.TgZ(29, "p", 28),
                    e.SDv(30, 29),
                    e.qZA()(),
                    e.TgZ(31, "div", 23)(32, "div", 24),
                    e._UZ(33, "i", 25),
                    e.qZA(),
                    e.TgZ(34, "p", 26),
                    e.SDv(35, 30),
                    e.qZA(),
                    e.TgZ(36, "p", 28),
                    e.SDv(37, 31),
                    e.qZA()(),
                    e.TgZ(38, "div", 23)(39, "div", 24),
                    e._UZ(40, "i", 25),
                    e.qZA(),
                    e.TgZ(41, "p", 26),
                    e.SDv(42, 32),
                    e.qZA(),
                    e.TgZ(43, "p", 28),
                    e.SDv(44, 33),
                    e.qZA()(),
                    e.TgZ(45, "div", 34)(46, "div", 24),
                    e._UZ(47, "i", 25),
                    e.qZA(),
                    e.TgZ(48, "p", 26),
                    e.SDv(49, 35),
                    e.qZA(),
                    e.TgZ(50, "p", 28),
                    e.SDv(51, 36),
                    e.qZA()()(),
                    e.TgZ(52, "div", 37)(53, "div", 38)(54, "h3", 39),
                    e.SDv(55, 40),
                    e.qZA(),
                    e.TgZ(56, "div", 41)(57, "p", 42),
                    e._UZ(58, "i", 43),
                    e.ynx(59),
                    e.SDv(60, 44),
                    e.BQk(),
                    e.qZA(),
                    e.TgZ(61, "p", 42),
                    e._UZ(62, "i", 43),
                    e.ynx(63),
                    e.SDv(64, 45),
                    e.BQk(),
                    e.qZA(),
                    e.TgZ(65, "p", 46),
                    e._UZ(66, "i", 43),
                    e.ynx(67),
                    e.SDv(68, 47),
                    e.BQk(),
                    e.qZA()(),
                    e.TgZ(69, "div", 48)(70, "a", 49),
                    e.SDv(71, 50),
                    e.qZA()()(),
                    e.TgZ(72, "div", 51)(73, "h3", 52),
                    e.tHW(74, 53),
                    e._UZ(75, "br", 9),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(76, "picture"),
                    e._UZ(77, "source", 54)(78, "img", 55),
                    e.qZA()()(),
                    e.TgZ(79, "div", 56),
                    e._UZ(80, "img", 57),
                    e.TgZ(81, "div", 58)(82, "h3", 59),
                    e.tHW(83, 60),
                    e._UZ(84, "br", 61),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(85, "div", 62)(86, "picture"),
                    e._UZ(87, "source", 63)(88, "img", 64),
                    e.qZA()(),
                    e.TgZ(89, "p", 65),
                    e.SDv(90, 66),
                    e.qZA(),
                    e.TgZ(91, "a", 67),
                    e.SDv(92, 68),
                    e.qZA()()(),
                    e.TgZ(93, "div", 69)(94, "div", 70)(95, "h3", 71),
                    e.SDv(96, 72),
                    e.qZA(),
                    e.TgZ(97, "div", 73)(98, "p", 42),
                    e._UZ(99, "i", 43),
                    e.ynx(100),
                    e.SDv(101, 74),
                    e.BQk(),
                    e.qZA(),
                    e.TgZ(102, "p", 42),
                    e._UZ(103, "i", 43),
                    e.TgZ(104, "span"),
                    e.tHW(105, 75),
                    e._UZ(106, "a", 76),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(107, "p", 46),
                    e._UZ(108, "i", 43),
                    e.ynx(109),
                    e.SDv(110, 77),
                    e.BQk(),
                    e.qZA()(),
                    e.TgZ(111, "div", 78)(112, "a", 49),
                    e.SDv(113, 79),
                    e.qZA()()(),
                    e.TgZ(114, "div", 80)(115, "h3", 81),
                    e.tHW(116, 82),
                    e._UZ(117, "br", 61),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(118, "picture"),
                    e._UZ(119, "source", 83)(120, "img", 84),
                    e.qZA()()(),
                    e.TgZ(121, "div", 85)(122, "div", 86)(123, "h3", 87),
                    e.tHW(124, 88),
                    e._UZ(125, "br", 61),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(126, "div", 89)(127, "div", 90)(128, "div", 91),
                    e._UZ(129, "i", 92),
                    e.qZA(),
                    e.TgZ(130, "span", 93),
                    e.tHW(131, 94),
                    e._UZ(132, "b"),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(133, "div", 90)(134, "div", 91),
                    e._UZ(135, "i", 95),
                    e.qZA(),
                    e.TgZ(136, "span", 96),
                    e.tHW(137, 97),
                    e._UZ(138, "b"),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(139, "div", 90)(140, "div", 91),
                    e._UZ(141, "i", 98),
                    e.qZA(),
                    e.TgZ(142, "span", 99),
                    e.tHW(143, 100),
                    e._UZ(144, "b"),
                    e.N_p(),
                    e.qZA()(),
                    e.TgZ(145, "div", 90)(146, "div", 91),
                    e._UZ(147, "i", 101),
                    e.qZA(),
                    e.TgZ(148, "span", 99),
                    e.tHW(149, 102),
                    e._UZ(150, "b"),
                    e.N_p(),
                    e.qZA()()()()(),
                    e.TgZ(151, "div", 103)(152, "div", 70)(153, "h3", 104),
                    e.SDv(154, 105),
                    e.qZA(),
                    e.TgZ(155, "p", 106),
                    e.SDv(156, 107),
                    e.qZA(),
                    e.TgZ(157, "div", 108)(158, "a", 109),
                    e.SDv(159, 110),
                    e.qZA()()(),
                    e.TgZ(160, "div", 111)(161, "h3", 112),
                    e.SDv(162, 113),
                    e.qZA(),
                    e.TgZ(163, "picture"),
                    e._UZ(164, "source", 114)(165, "img", 115),
                    e.qZA()()(),
                    e.TgZ(166, "div", 116)(167, "div", 117)(168, "h3", 118),
                    e.SDv(169, 119),
                    e.qZA(),
                    e.TgZ(170, "p", 120),
                    e.tHW(171, 121),
                    e._UZ(172, "b", 122)(173, "b", 122)(174, "b", 122),
                    e.N_p(),
                    e.qZA(),
                    e.TgZ(175, "div", 48)(176, "a", 49),
                    e.SDv(177, 123),
                    e.qZA()()(),
                    e.TgZ(178, "div", 124)(179, "h3", 125),
                    e.SDv(180, 126),
                    e.qZA(),
                    e.TgZ(181, "picture"),
                    e._UZ(182, "source", 127)(183, "img", 128),
                    e.qZA()()()()(),
                    e.TgZ(184, "div", 129),
                    e._UZ(185, "google-adsense", 130),
                    e.qZA()()),
                    2 & t && (e.xp6(3),
                    e.Q6J("fromExistingCSS", "underHeader")("adFormat", "auto")("panelClass", "hidden md:block"),
                    e.xp6(88),
                    e.Q6J("routerLink", "/publish/course-creator"),
                    e.xp6(67),
                    e.Q6J("routerLink", "/publish/course-creator"),
                    e.xp6(27),
                    e.Q6J("fromExistingCSS", "rightFixed")("panelClass", "hidden md:flex"))
                },
                dependencies: [Xe.rH, lt, wt, ct],
                styles: [".republish-course-outer-container[_ngcontent-%COMP%]{display:flex}.republish-course-inner-container[_ngcontent-%COMP%]{width:100%}.ads-container-top[_ngcontent-%COMP%], .ads-container-right[_ngcontent-%COMP%]{background-color:#f7f7f7}@media (min-width: 1024px){.republish-header-article[_ngcontent-%COMP%]{min-height:calc(100vh - 292px)}}.republish-container[_ngcontent-%COMP%]{background-color:#fff}.benefits-bar[_ngcontent-%COMP%]{background-color:var(--extra3-color);color:var(--extra3-contrast)}.benefits-bar[_ngcontent-%COMP%]   .benefit-icon-container[_ngcontent-%COMP%]{border-radius:50%;background-color:var(--extra3-contrast);color:var(--extra3-color)}.benefits-bar[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]:nth-child(1)   .benefit-md-name[_ngcontent-%COMP%]{max-width:134px}.benefits-bar[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]:nth-child(2)   .benefit-md-name[_ngcontent-%COMP%]{max-width:95px}.benefits-bar[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]:nth-child(3)   .benefit-md-name[_ngcontent-%COMP%]{max-width:160px}.benefits-bar[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]:nth-child(4)   .benefit-md-name[_ngcontent-%COMP%]{max-width:184px}.republish-header-article-image[_ngcontent-%COMP%]{max-width:480px}.who-can-republish-article-image[_ngcontent-%COMP%]{max-width:clamp(210px,30vw,340px)}.republish-brand-new-course-article-image[_ngcontent-%COMP%]{width:clamp(270px,30vw,380px)}.how-can-republish-article-image[_ngcontent-%COMP%]{max-width:420px}.what-do-i-do-article-image[_ngcontent-%COMP%]{width:clamp(240px,30vw,310px)}.article-actions[_ngcontent-%COMP%]:not(.two-actions)   .apply-now-button[_ngcontent-%COMP%]{min-width:170px}.no-experience-publishing[_ngcontent-%COMP%]{background-color:#cee7f5;background-size:100% 100%}.no-experience-publishing[_ngcontent-%COMP%]   .article-title[_ngcontent-%COMP%]{letter-spacing:-.3px}.no-experience-publishing[_ngcontent-%COMP%]   .no-experience-publishing-background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.no-experience-publishing[_ngcontent-%COMP%]   .no-experience-publishing-image[_ngcontent-%COMP%]{height:100px}.what-do-i-do-article[_ngcontent-%COMP%]{background-color:var(--extra6-color)}.what-do-i-do-article[_ngcontent-%COMP%]   .highlited-text[_ngcontent-%COMP%]{color:var(--mat-primary-bold)}.extra1-color[_ngcontent-%COMP%]{color:var(--extra1-color)}.how-does-alison-support-you[_ngcontent-%COMP%]{background-color:#ebeff4}.how-does-alison-support-you[_ngcontent-%COMP%]   .how-does-alison-support-you-card[_ngcontent-%COMP%]{border-radius:16px}.how-does-alison-support-you[_ngcontent-%COMP%]   .how-does-alison-support-you-card-icon-container[_ngcontent-%COMP%]{border:4px solid #98c5e2;background-color:#fff;border-radius:50%}.how-does-alison-support-you[_ngcontent-%COMP%]   .how-does-alison-support-you-card-icon-container[_ngcontent-%COMP%]   .how-does-alison-support-you-card-icon[_ngcontent-%COMP%]{color:#4292c3;width:clamp(28px,4vw,var(--ng-alison-icon-xl-size));max-width:clamp(28px,4vw,var(--ng-alison-icon-xl-size));height:clamp(28px,4vw,var(--ng-alison-icon-xl-size));max-height:clamp(28px,4vw,var(--ng-alison-icon-xl-size));font-size:clamp(28px,4vw,var(--ng-alison-icon-xl-size))}@media only screen and (min-width: 1024px){.how-does-alison-support-you[_ngcontent-%COMP%]   .how-does-alison-support-you-card[_ngcontent-%COMP%]{color:var(--text-color);background-color:var(--text-contrast)}}.aplication-form[_ngcontent-%COMP%]{color:var(--extra1-color);text-decoration:none;cursor:pointer;font-weight:700}.aplication-form[_ngcontent-%COMP%]:hover{text-decoration:underline;cursor:pointer}.learn-more-button[_ngcontent-%COMP%]{color:var(--mat-primary-bold)!important}"]
            }),
            n
        }
        )();
        const Sa = [..._t.u8.mapToRoute([""], {
            component: ma
        }), ..._t.u8.mapToRoute(["republish-course"], {
            component: pa
        }), ..._t.u8.mapToRoute(["assisted-creator"], {
            component: ca
        }), ..._t.u8.mapToRoute(["content-assistant"], {
            component: da
        }), ..._t.u8.mapToRoute(["course-creator"], {
            component: Ea
        })];
        let ga = (()=>{
            class n {
            }
            return n.\u0275fac = function(t) {
                return new (t || n)
            }
            ,
            n.\u0275mod = e.oAB({
                type: n
            }),
            n.\u0275inj = e.cJS({
                imports: [Xe.Bz.forChild(Sa), Xe.Bz]
            }),
            n
        }
        )()
          , Ca = (()=>{
            class n {
            }
            return n.\u0275fac = function(t) {
                return new (t || n)
            }
            ,
            n.\u0275mod = e.oAB({
                type: n
            }),
            n.\u0275inj = e.cJS({
                imports: [se.ez, ga, Pr, ct, Xe.Bz]
            }),
            n
        }
        )()
    }
}]);
