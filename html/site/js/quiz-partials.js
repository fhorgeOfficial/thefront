Handlebars.registerPartial("slide", Handlebars.template({
    1: function(n, l, e, i, a) {
        var t, o = null != l ? l : n.nullContext || {}, u = n.lookupProperty || function(n, l) {
            if (Object.prototype.hasOwnProperty.call(n, l))
                return n[l]
        }
        ;
        return ' <div class="quiz__slide quiz__slide--welcome"> <div class="quiz__slide-inner"> ' + (null != (t = "function" == typeof (t = null != (t = u(e, "welcome_description") || (null != l ? u(l, "welcome_description") : l)) ? t : n.hooks.helperMissing) ? t.call(o, {
            name: "welcome_description",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 1,
                    column: 95
                },
                end: {
                    line: 1,
                    column: 122
                }
            }
        }) : t) ? t : "") + " " + (null != (t = u(e, "if").call(o, null != l ? u(l, "continue_button") : l, {
            name: "if",
            hash: {},
            fn: n.program(2, a, 0),
            inverse: n.program(7, a, 0),
            data: a,
            loc: {
                start: {
                    line: 1,
                    column: 123
                },
                end: {
                    line: 1,
                    column: 482
                }
            }
        })) ? t : "") + ' <div class="quiz__timer-image"> <img title="35-45 mins" src="html/site/img/alison-logo-login.png"> </div> </div> \x3c!-- END .quiz__slide-inner --\x3e </div> \x3c!-- END .quiz__slide --\x3e\n'
    },
    2: function(n, l, e, i, a) {
        var t = n.lookupProperty || function(n, l) {
            if (Object.prototype.hasOwnProperty.call(n, l))
                return n[l]
        }
        ;
        return " " + (null != (e = t(e, "if").call(null != l ? l : n.nullContext || {}, null != l ? t(l, "end_button") : l, {
            name: "if",
            hash: {},
            fn: n.program(3, a, 0),
            inverse: n.program(5, a, 0),
            data: a,
            loc: {
                start: {
                    line: 1,
                    column: 147
                },
                end: {
                    line: 1,
                    column: 321
                }
            }
        })) ? e : "") + ' <span class="btn btn-green dark quiz__start quiz__next"> Restart </span> '
    },
    3: function(n, l, e, i, a) {
        var t = n.lookupProperty || function(n, l) {
            if (Object.prototype.hasOwnProperty.call(n, l))
                return n[l]
        }
        ;
        return ' <a href="' + n.escapeExpression("function" == typeof (e = null != (e = t(e, "report_url") || (null != l ? t(l, "report_url") : l)) ? e : n.hooks.helperMissing) ? e.call(null != l ? l : n.nullContext || {}, {
            name: "report_url",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 1,
                    column: 175
                },
                end: {
                    line: 1,
                    column: 191
                }
            }
        }) : e) + '" class="btn btn-green dark"> View Results </a> '
    },
    5: function(n, l, e, i, a) {
        return ' <span class="btn btn-green dark quiz__continue"> Continue </span> '
    },
    7: function(n, l, e, i, a) {
        return ' <span class="btn btn-green dark quiz__start quiz__next"> Start </span> '
    },
    9: function(n, l, e, i, a, t, o) {
        var u, r = null != l ? l : n.nullContext || {}, s = n.hooks.helperMissing, d = "function", c = n.escapeExpression, _ = n.lookupProperty || function(n, l) {
            if (Object.prototype.hasOwnProperty.call(n, l))
                return n[l]
        }
        ;
        return ' <div class="quiz__slide" data-group="' + c(typeof (u = null != (u = _(e, "group_id") || (null != l ? _(l, "group_id") : l)) ? u : s) == d ? u.call(r, {
            name: "group_id",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 46
                },
                end: {
                    line: 2,
                    column: 60
                }
            }
        }) : u) + '"> <div class="quiz__slide-inner"> <h3> ' + c(typeof (u = null != (u = _(e, "slide_title") || (null != l ? _(l, "slide_title") : l)) ? u : s) == d ? u.call(r, {
            name: "slide_title",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 100
                },
                end: {
                    line: 2,
                    column: 117
                }
            }
        }) : u) + ' </h3> <div class="quiz__questions"> ' + (null != (c = _(e, "each").call(r, null != l ? _(l, "questions") : l, {
            name: "each",
            hash: {},
            fn: n.program(10, a, 0, t, o),
            inverse: n.noop,
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 154
                },
                end: {
                    line: 2,
                    column: 1796
                }
            }
        })) ? c : "") + " </div> \x3c!-- END quiz-questions --\x3e </div> \x3c!-- END .quiz__slide-inner --\x3e </div> \x3c!-- END .quiz__slide --\x3e\n"
    },
    10: function(n, l, e, i, a, t, o) {
        var u, r, s = null != l ? l : n.nullContext || {}, d = n.hooks.helperMissing, c = "function", _ = n.escapeExpression, m = n.lambda, p = n.lookupProperty || function(n, l) {
            if (Object.prototype.hasOwnProperty.call(n, l))
                return n[l]
        }
        ;
        return ' <div class="row quiz__question ' + (null != (u = p(e, "if").call(s, a && p(a, "first"), {
            name: "if",
            hash: {},
            fn: n.program(11, a, 0, t, o),
            inverse: n.noop,
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 205
                },
                end: {
                    line: 2,
                    column: 236
                }
            }
        })) ? u : "") + " " + (null != (u = p(e, "if").call(s, null != l ? p(l, "answered") : l, {
            name: "if",
            hash: {},
            fn: n.program(13, a, 0, t, o),
            inverse: n.noop,
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 237
                },
                end: {
                    line: 2,
                    column: 279
                }
            }
        })) ? u : "") + '" data-id="' + _(typeof (r = null != (r = p(e, "id") || (null != l ? p(l, "id") : l)) ? r : d) == c ? r.call(s, {
            name: "id",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 290
                },
                end: {
                    line: 2,
                    column: 298
                }
            }
        }) : r) + '" data-positive-ranking="' + _(typeof (r = null != (r = p(e, "positive_ranking") || (null != l ? p(l, "positive_ranking") : l)) ? r : d) == c ? r.call(s, {
            name: "positive_ranking",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 323
                },
                end: {
                    line: 2,
                    column: 345
                }
            }
        }) : r) + '" data-trait-id="' + _(typeof (r = null != (r = p(e, "trait_id") || (null != l ? p(l, "trait_id") : l)) ? r : d) == c ? r.call(s, {
            name: "trait_id",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 362
                },
                end: {
                    line: 2,
                    column: 376
                }
            }
        }) : r) + '" data-answer="' + _(typeof (r = null != (r = p(e, "answer") || (null != l ? p(l, "answer") : l)) ? r : d) == c ? r.call(s, {
            name: "answer",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 391
                },
                end: {
                    line: 2,
                    column: 403
                }
            }
        }) : r) + '"> <div class="question_text"> ' + _(typeof (r = null != (r = p(e, "question") || (null != l ? p(l, "question") : l)) ? r : d) == c ? r.call(s, {
            name: "question",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 434
                },
                end: {
                    line: 2,
                    column: 448
                }
            }
        }) : r) + ' </div> <div class="quiz_answers"> <div> <input type="radio" id="s_' + _(m(null != o[1] ? p(o[1], "slide_index") : o[1], l)) + "_q_" + _(typeof (r = null != (r = p(e, "index") || a && p(a, "index")) ? r : d) == c ? r.call(s, {
            name: "index",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 538
                },
                end: {
                    line: 2,
                    column: 548
                }
            }
        }) : r) + '_a_1" name="s_' + _(m(null != o[1] ? p(o[1], "slide_index") : o[1], l)) + "_q_" + _(typeof (r = null != (r = p(e, "index") || a && p(a, "index")) ? r : d) == c ? r.call(s, {
            name: "index",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 585
                },
                end: {
                    line: 2,
                    column: 597
                }
            }
        }) : r) + '" value="' + (null != (u = p(e, "if").call(s, null != l ? p(l, "positive_ranking") : l, {
            name: "if",
            hash: {},
            fn: n.program(15, a, 0, t, o),
            inverse: n.program(17, a, 0, t, o),
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 606
                },
                end: {
                    line: 2,
                    column: 647
                }
            }
        })) ? u : "") + '"> <label for="s_' + _(m(null != o[1] ? p(o[1], "slide_index") : o[1], l)) + "_q_" + _(typeof (r = null != (r = p(e, "index") || a && p(a, "index")) ? r : d) == c ? r.call(s, {
            name: "index",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 687
                },
                end: {
                    line: 2,
                    column: 699
                }
            }
        }) : r) + '_a_1"><span>Strongly Disagree</span></label> </div> <div> <input type="radio" id="s_' + _(m(null != o[1] ? p(o[1], "slide_index") : o[1], l)) + "_q_" + _(typeof (r = null != (r = p(e, "index") || a && p(a, "index")) ? r : d) == c ? r.call(s, {
            name: "index",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 806
                },
                end: {
                    line: 2,
                    column: 818
                }
            }
        }) : r) + '_a_2" name="s_' + _(m(null != o[1] ? p(o[1], "slide_index") : o[1], l)) + "_q_" + _(typeof (r = null != (r = p(e, "index") || a && p(a, "index")) ? r : d) == c ? r.call(s, {
            name: "index",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 855
                },
                end: {
                    line: 2,
                    column: 867
                }
            }
        }) : r) + '" value="' + (null != (u = p(e, "if").call(s, null != l ? p(l, "positive_ranking") : l, {
            name: "if",
            hash: {},
            fn: n.program(19, a, 0, t, o),
            inverse: n.program(21, a, 0, t, o),
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 876
                },
                end: {
                    line: 2,
                    column: 917
                }
            }
        })) ? u : "") + '"> <label for="s_' + _(m(null != o[1] ? p(o[1], "slide_index") : o[1], l)) + "_q_" + _(typeof (r = null != (r = p(e, "index") || a && p(a, "index")) ? r : d) == c ? r.call(s, {
            name: "index",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 957
                },
                end: {
                    line: 2,
                    column: 969
                }
            }
        }) : r) + '_a_2"><span>Disagree</span></label> </div> <div> <input type="radio" id="s_' + _(m(null != o[1] ? p(o[1], "slide_index") : o[1], l)) + "_q_" + _(typeof (r = null != (r = p(e, "index") || a && p(a, "index")) ? r : d) == c ? r.call(s, {
            name: "index",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 1066
                },
                end: {
                    line: 2,
                    column: 1078
                }
            }
        }) : r) + '_a_3" name="s_' + _(m(null != o[1] ? p(o[1], "slide_index") : o[1], l)) + "_q_" + _(typeof (r = null != (r = p(e, "index") || a && p(a, "index")) ? r : d) == c ? r.call(s, {
            name: "index",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 1115
                },
                end: {
                    line: 2,
                    column: 1127
                }
            }
        }) : r) + '" value="3"> <label for="s_' + _(m(null != o[1] ? p(o[1], "slide_index") : o[1], l)) + "_q_" + _(typeof (r = null != (r = p(e, "index") || a && p(a, "index")) ? r : d) == c ? r.call(s, {
            name: "index",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 1177
                },
                end: {
                    line: 2,
                    column: 1189
                }
            }
        }) : r) + '_a_3"><span>Neutral</span></label> </div> <div> <input type="radio" id="s_' + _(m(null != o[1] ? p(o[1], "slide_index") : o[1], l)) + "_q_" + _(typeof (r = null != (r = p(e, "index") || a && p(a, "index")) ? r : d) == c ? r.call(s, {
            name: "index",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 1285
                },
                end: {
                    line: 2,
                    column: 1297
                }
            }
        }) : r) + '_a_4" name="s_' + _(m(null != o[1] ? p(o[1], "slide_index") : o[1], l)) + "_q_" + _(typeof (r = null != (r = p(e, "index") || a && p(a, "index")) ? r : d) == c ? r.call(s, {
            name: "index",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 1334
                },
                end: {
                    line: 2,
                    column: 1346
                }
            }
        }) : r) + '" value="' + (null != (u = p(e, "if").call(s, null != l ? p(l, "positive_ranking") : l, {
            name: "if",
            hash: {},
            fn: n.program(21, a, 0, t, o),
            inverse: n.program(19, a, 0, t, o),
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 1355
                },
                end: {
                    line: 2,
                    column: 1396
                }
            }
        })) ? u : "") + '"> <label for="s_' + _(m(null != o[1] ? p(o[1], "slide_index") : o[1], l)) + "_q_" + _(typeof (r = null != (r = p(e, "index") || a && p(a, "index")) ? r : d) == c ? r.call(s, {
            name: "index",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 1436
                },
                end: {
                    line: 2,
                    column: 1448
                }
            }
        }) : r) + '_a_4"><span>Agree</span></label> </div> <div> <input type="radio" id="s_' + _(m(null != o[1] ? p(o[1], "slide_index") : o[1], l)) + "_q_" + _(typeof (r = null != (r = p(e, "index") || a && p(a, "index")) ? r : d) == c ? r.call(s, {
            name: "index",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 1543
                },
                end: {
                    line: 2,
                    column: 1555
                }
            }
        }) : r) + '_a_5" name="s_' + _(m(null != o[1] ? p(o[1], "slide_index") : o[1], l)) + "_q_" + _(typeof (r = null != (r = p(e, "index") || a && p(a, "index")) ? r : d) == c ? r.call(s, {
            name: "index",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 1592
                },
                end: {
                    line: 2,
                    column: 1604
                }
            }
        }) : r) + '" value="' + (null != (u = p(e, "if").call(s, null != l ? p(l, "positive_ranking") : l, {
            name: "if",
            hash: {},
            fn: n.program(17, a, 0, t, o),
            inverse: n.program(15, a, 0, t, o),
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 1613
                },
                end: {
                    line: 2,
                    column: 1654
                }
            }
        })) ? u : "") + '"> <label for="s_' + _(m(null != o[1] ? p(o[1], "slide_index") : o[1], l)) + "_q_" + _(typeof (r = null != (r = p(e, "index") || a && p(a, "index")) ? r : d) == c ? r.call(s, {
            name: "index",
            hash: {},
            data: a,
            loc: {
                start: {
                    line: 2,
                    column: 1694
                },
                end: {
                    line: 2,
                    column: 1706
                }
            }
        }) : r) + '_a_5"><span>Strongly Agree</span></label> </div> </div> </div> \x3c!-- END .row --\x3e '
    },
    11: function(n, l, e, i, a) {
        return " active_q "
    },
    13: function(n, l, e, i, a) {
        return " continue_answered "
    },
    15: function(n, l, e, i, a) {
        return "1"
    },
    17: function(n, l, e, i, a) {
        return "5"
    },
    19: function(n, l, e, i, a) {
        return "2"
    },
    21: function(n, l, e, i, a) {
        return "4"
    },
    compiler: [8, ">= 4.3.0"],
    main: function(n, l, e, i, a, t, o) {
        var u = n.lookupProperty || function(n, l) {
            if (Object.prototype.hasOwnProperty.call(n, l))
                return n[l]
        }
        ;
        return null != (e = u(e, "if").call(null != l ? l : n.nullContext || {}, null != l ? u(l, "welcome") : l, {
            name: "if",
            hash: {},
            fn: n.program(1, a, 0, t, o),
            inverse: n.program(9, a, 0, t, o),
            data: a,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 3,
                    column: 7
                }
            }
        })) ? e : ""
    },
    useData: !0,
    useDepths: !0
}));
