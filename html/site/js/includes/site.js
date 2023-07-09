(()=>{
    function e() {
        $.ajax({
            url: $("body").data("api_endpoint") + "/user/stats",
            type: "GET",
            success: function(e) {
                if (200 === e.status && void 0 !== e.result) {
                    if (0 === $("#player-page").length && null === e.result.current_week_days)
                        return void localStorage.setItem("currentMedalChecked_" + user_id, "true");
                    var t = e.result.current_week_days || null
                      , a = null === t ? 1 : t.split(",").length;
                    getMedalValue(a);
                    localStorage.setItem("currentMedalCache_" + user_id, Date.now())
                }
            }
        })
    }
    if ($(document).ready((function() {
        if (0 === $("#dashboard").length && ($("header").hasClass("loggedin") || $("header").hasClass("player-header")) && 0 === $(".header-simple").length) {
            if (null !== localStorage.getItem("currentMedal")) {
                var t = localStorage.getItem("currentMedal")
                  , a = localStorage.getItem("currentWeekStreak")
                  , r = localStorage.getItem("currentMedalCache");
                localStorage.setItem("currentMedal_" + user_id, t),
                localStorage.setItem("currentWeekStreak_" + user_id, a),
                localStorage.setItem("currentMedalCache_" + user_id, r),
                localStorage.removeItem("currentMedal"),
                localStorage.removeItem("currentWeekStreak"),
                localStorage.removeItem("currentMedalCache")
            }
            if ($("#player-header").length > 0 && localStorage.removeItem("currentMedalChecked_" + user_id),
            null === localStorage.getItem("currentMedalChecked_" + user_id)) {
                var n = localStorage.getItem("currentMedal_" + user_id)
                  , o = parseInt(localStorage.getItem("currentWeekStreak_" + user_id) || 0)
                  , s = new Date(parseInt(localStorage.getItem("currentMedalCache_" + user_id)))
                  , l = new Date;
                if (null === n)
                    e();
                else if (null !== n) {
                    if (s.setHours(0, 0, 0, 0),
                    l.setHours(0, 0, 0, 0),
                    0 !== Math.floor((l - s) / 864e5))
                        if ($("#player-page").length > 0)
                            if (getMonday(l) !== getMonday(s))
                                e();
                            else
                                updateHeaderMedal("bronze" === n ? "silver" : "gold!", o, "animation");
                        else
                            getMonday(l) !== getMonday(s) && (localStorage.removeItem("currentMedal_" + user_id),
                            localStorage.removeItem("currentWeekStreak_" + user_id),
                            localStorage.removeItem("currentMedalCache_" + user_id))
                }
            }
        }
        $(".comments-field #comment").keyup((function() {
            var e = $(this).val().length
              , t = $(".comment-length__count").parent();
            e > 255 ? t.addClass("too-long") : t.removeClass("too-long"),
            $(".comment-length__count").text(e)
        }
        )),
        ttlReset(),
        0 === $(".header-simple").length && 0 === $(".player-header").length && checkUsersEnrolled(),
        $(document).on("click", '.course-container[data-endpoint="courses-completed"] .course-block > a', (function(e) {
            e.preventDefault()
        }
        )),
        $(".switch").click((function() {
            parseInt($(this).attr("data-value")) ? ($(this).find("button").removeClass("on"),
            $(this).attr("data-value", 0)) : ($(this).find("button").addClass("on"),
            $(this).attr("data-value", 1))
        }
        )),
        $(document).on("click", ".like-comments-widget > a", (function(e) {
            var t = $(this).parent().attr("data-id")
              , a = $(this).hasClass("thumb-up") ? 1 : 0
              , r = this;
            $(".loading").fadeIn(),
            $.ajax({
                url: "/reviews/rank/" + t + "/" + a,
                type: "GET",
                success: function(e) {
                    if ($(".loading").fadeOut(),
                    "success" == e.status) {
                        var t = $(r).parent().find(".thumb-up")
                          , n = $(r).parent().find(".thumb-down");
                        a > 0 ? ($(r).addClass("blue"),
                        $(n).removeClass("red")) : ($(r).addClass("red"),
                        $(t).removeClass("blue")),
                        $(t).parent().find(".thumb-up").find("label").html(" " + e.data.likes),
                        $(n).parent().find(".thumb-down").find("label").html(" " + e.data.dislikes)
                    }
                },
                error: function(e) {
                    $(".loading").fadeOut()
                }
            }),
            e.preventDefault()
        }
        ))
    }
    )),
    window.numberWithCommas = function(e) {
        return void 0 !== e ? e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0
    }
    ,
    window.ttlReset = function() {
        var e = setInterval((function() {
            $.ajax({
                url: "/user/keepalive",
                method: "GET",
                success: function(e) {},
                error: function(t) {
                    clearInterval(e),
                    console.error("Keepalive cleared due to error"),
                    401 == t.status && (window.location.href = "/login")
                }
            })
        }
        ), 21e5)
    }
    ,
    window.quizPopupTemplate = function(e, t, a) {
        return '<div class="message-confirm"><h4 style="margin-top:0">' + e + '</h4><div class="message-confirm__text">' + t + '</div><div class="message-confirm__buttons"><div class="btn btn-turquoise btn-close">OK</div></div></div>'
    }
    ,
    window.largePopup = function(e, t) {
        console.log(t);
        var a = ' <div class="floating-message large-message ' + (t || "") + '" style="display: none;"><div class="message-outer floating"><div class="icon-cross2"></div><div class="message warning">' + e + "</div></div></div>";
        $("body").append(a),
        setTimeout((function() {
            $(".floating-message").fadeIn("fast", (function() {
                $(".message-outer").addClass("active")
            }
            ))
        }
        ), 100)
    }
    ,
    window.floatingMessage = function(e) {
        var t = e.type || ""
          , a = e.heading || ""
          , r = e.message || ""
          , n = e.userFeedback || ""
          , o = e.success || ""
          , s = e.extra || ""
          , l = document.createElement("div")
          , i = document.createElement("div");
        if (i.className = "floating-message",
        l.innerHTML = '<div class="message ' + t.toLowerCase() + '"><h6>' + a + "</h6><p>" + r + "</p></div>",
        l.className = "message-outer floating",
        void 0 !== n && ("full" === n || "partial" === n)) {
            var c = document.createElement("div")
              , d = document.createElement("div")
              , u = u = document.createElement("div");
            c.innerHTML = '<div class="decision-ok btn btn-blue">Ok</div>',
            c.className = "decision-ok-outer",
            $(u).append(c),
            "full" === n && (c.onclick = o,
            d.className = "decision-cancel-outer",
            d.innerHTML = '<div class="decision-cancel btn btn-blue">Cancel</div>',
            $(u).append(d)),
            u.className = "decision",
            $(l).find(".message").append(u),
            $(l).find(".message").append(s)
        }
        i.onclick = function() {
            $(this).fadeOut((function() {
                $(this).remove()
            }
            ))
        }
        ,
        $(i).append(l),
        $("body").append(i),
        setTimeout((function() {
            $(i).fadeIn("fast", (function() {
                $(l).addClass("active")
            }
            ))
        }
        ), 100)
    }
    ,
    $(document).on("click", ".large-message .icon-cross2, .large-message .btn-close", (function() {
        $(".large-message .active").removeClass("active"),
        setTimeout((function() {
            $(".large-message").fadeOut((function() {
                $(this).remove()
            }
            ))
        }
        ), 200)
    }
    )),
    window.checkUserSubscription = function(e) {
        void 0 !== e ? $.ajax({
            url: "/check-subscription-status",
            type: "GET",
            success: e
        }) : $.ajax({
            url: "/check-subscription-status",
            type: "GET"
        }),
        document.body.className += "user-subscribed"
    }
    ,
    window.getSubscriptionDate = function() {
        checkUserSubscription((function(e) {
            void 0 !== e.subscription && $(".user-subscribed").show();
            var t = new Date(e.subscription.valid_until)
              , a = t.getDate() + "/" + (t.getMonth() + 1) + "/" + t.getFullYear();
            null !== document.querySelector(".get-subscription-date") ? document.querySelector(".get-subscription-date").innerHTML = a : console.error('No "get-subscription-date" classes found')
        }
        ))
    }
    ,
    window.getMedalValue = function(e) {
        switch (e) {
        case 1:
            return "bronze";
        case 2:
            return "silver";
        case 3:
            return "gold!";
        default:
            return "none"
        }
    }
    ,
    window.getMonday = function(e) {
        (e = new Date(e)).setHours(0, 0, 0, 0);
        var t = e.getDay()
          , a = e.getDate() - t + (0 === t ? -6 : 1);
        return new Date(e.setDate(a)).getTime()
    }
    ,
    window.enrolled_object = "",
    0 === $(".not-logged-in").length && 0 === $(".header-simple").length)
        try {
            enrolled_object = JSON.parse(localStorage.getItem("enrolled_" + user_id) || "{}")
        } catch (e) {
            getUsersEnrolled()
        }
    $(document).on("click", ".add-course-id", (function() {
        "undefined" != typeof user_id && updateCourseProgress($(this).attr("data-id"), user_id)
    }
    )),
    window.updateCourseProgress = function(e, t) {
        var a = JSON.parse(localStorage.getItem("enrolled_" + t) || "{}");
        a[e] = void 0 === a[e] ? 0 : parseInt($(".completed_topic").length / $(".module-nav__topic").length * 100),
        localStorage.setItem("enrolled_" + t, JSON.stringify(a))
    }
    ,
    window.checkUsersEnrolled = function() {
        var e = localStorage.getItem("enrolled_date_" + user_id);
        if (null !== e) {
            var t = new Date
              , a = new Date(parseInt(e));
            t.setHours(0, 0, 0, 0),
            a.setHours(0, 0, 0, 0),
            0 !== Math.floor((t - a) / 864e5) && getUsersEnrolled()
        } else
            getUsersEnrolled()
    }
    ,
    window.getUsersEnrolled = function() {
        var e = $("body").attr("data-api_endpoint")
          , t = {}
          , a = Date.now();
        $.ajax({
            url: e + "/user/courses-in-progress/999/1",
            type: "GET",
            success: function(e) {
                void 0 !== e.status && 200 === e.status && void 0 !== e.result && e.result.map((function(e) {
                    t[e.id] = e.progress || 0
                }
                )),
                window.localStorage && (localStorage.setItem("enrolled_" + user_id, JSON.stringify(t)),
                localStorage.setItem("enrolled_date_" + user_id, a))
            },
            error: function(e) {}
        })
    }
    ,
    window.setCoursePercentage = function(e, t) {
        var a = JSON.parse(localStorage.getItem("enrolled_" + user_id) || "{}");
        a[e] = t,
        localStorage.setItem("enrolled_" + user_id, JSON.stringify(a))
    }
    ,
    $(document).on("click", ".presale_purchase", (function(e) {
        e.preventDefault();
        var t = $(this).attr("href")
          , a = $(this).hasClass("certificate") ? 1 : 32;
        window.location.href = t + "?purchasePreSale=" + a
    }
    )),
    $(document).on("click", ".course-mail-share", (function(e) {
        if (e.preventDefault(),
        $("header").hasClass("not-loggedin"))
            return $("#login h3").html(Lang.get("common.please_login")),
            void $(".login-modal").fadeIn();
        var t = $(".email-share");
        $("#dashboard").length > 0 ? (t.attr("data-type", $(this).attr("data-type")),
        t.attr("data-course", $(this).attr("data-id")).fadeIn()) : (t.attr("data-type", $(this).parents(".share-trigger").attr("data-type")),
        t.attr("data-course", $(this).parents(".share-trigger").attr("data-id")).fadeIn())
    }
    )),
    $(document).on("click", ".content-mail-share", (function(e) {
        if (e.preventDefault(),
        $("header").hasClass("not-loggedin"))
            return $("#login h3").html(Lang.get("common.please_login")),
            void $(".login-modal").fadeIn();
        $(".email-share-static").fadeIn()
    }
    )),
    window.CopyToClipboard = function(e) {
        console.log(this);
        var t = document.createElement("textarea");
        t.id = "t",
        t.style.height = 0,
        document.body.appendChild(t),
        t.value = document.getElementById("copy_me").innerText,
        document.querySelector("#t").select(),
        document.execCommand("copy"),
        document.getElementById(e).className += " el_copied",
        document.body.removeChild(t)
    }
    ,
    window.checkPurchased = function(e) {
        $.ajax({
            url: $("body").attr("data-api_endpoint") + "/user/enrolled-courses/1000/1",
            type: "GET",
            success: function(t) {
                var a = [];
                void 0 !== t.result && 0 !== t.result.length && 0 !== t.total ? ($.each(t.result, (function(e, t) {
                    null !== t.completed_at && a.push(t.course_id)
                }
                )),
                $.ajax({
                    url: "/api/v1/users/" + e + "/claimed-parchments",
                    type: "GET",
                    success: function(t) {
                        for (var r = 0; r < t.data.length; r++) {
                            var n = a.indexOf(t.data[r].course_id);
                            -1 !== n && a.splice(n, 1)
                        }
                        void 0 !== a && a.length > 0 && ($(".claim-your-certs, .get-your-cert span:last-child, .user-img").addClass("buy-cert").attr("data-amount", a.length),
                        localStorage.setItem("certToBePurchased_" + e, JSON.stringify(a)))
                    }
                })) : localStorage.setItem("no-courses", "1")
            },
            error: function(e) {
                console.log(e)
            }
        })
    }
    ,
    $(document).ready((function() {
        var e = $("header").attr("data-id") || !1
          , t = localStorage.getItem("certToBePurchased_" + e);
        if ("[]" !== t && !localStorage.getItem("no-courses"))
            if (t) {
                if (!localStorage.getItem("startedCertJourney_" + e) && t) {
                    var a = t
                      , r = 1;
                    a && (r = JSON.parse(a).length),
                    $(".claim-your-certs, .get-your-cert span:last-child, .user-img").addClass("buy-cert").attr("data-amount", r)
                }
            } else
                checkPurchased(e);
        $(".claim-your-certs, .get-your-cert").click((function() {
            localStorage.setItem("startedCertJourney_" + e, "1")
        }
        ))
    }
    ))
}
)();
