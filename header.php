<?php

    function customErrorHandler ($errno, $errstr, $errfile, $errline) {
        $message = "Error: [$errno] $errstr - $errfile:$errline";
        error_log($message . PHP_EOL, 3, "error_log.txt");
    }

    set_error_handler("customErroHandler");

?>

<!doctype html>
<html lang="en">

<head>
    <link rel="preload" as="script" href="/html/vendor/js/jquery-3.6.4.min.js">
    <link rel="preload" href="/html/site/css/main.css?id=661cc1654b71907245756531a17a061c" as="style">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
        as="font" crossorigin="anonymous">
    <link rel="preload" href="https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.woff2?ryk3f312"
        as="font" crossorigin="anonymous">
    <script>
        window.alison_user = false;
        window.dataLayer = window.dataLayer || [];
        var localDataLayer = {};
        if (typeof localStorage !== "undefined" && localStorage.getItem('original_acquisition')) {
            localDataLayer.original_acquisiton = localStorage.getItem('original_acquisition');
        }
        dataLayer.push(localDataLayer);
    </script>
    <script>
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0]
                , j = d.createElement(s)
                , dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        }
        )(window, document, 'script', 'dataLayer', 'GTM-TWDV2Z');
    </script>
    <script>
        function passiveScroll() {
            jQuery.event.special.touchstart = {
                setup: function (_, ns, handle) {
                    this.addEventListener("touchstart", handle, {
                        passive: !ns.includes("noPreventDefault")
                    });
                }
            };
            jQuery.event.special.touchmove = {
                setup: function (_, ns, handle) {
                    this.addEventListener("touchmove", handle, {
                        passive: !ns.includes("noPreventDefault")
                    });
                }
            };
            jQuery.event.special.wheel = {
                setup: function (_, ns, handle) {
                    this.addEventListener("wheel", handle, {
                        passive: true
                    });
                }
            };
            jQuery.event.special.mousewheel = {
                setup: function (_, ns, handle) {
                    this.addEventListener("mousewheel", handle, {
                        passive: true
                    });
                }
            };
        }
        var fcmActive = '1';
        function extendFunctionality() {
            document.addEventListener('lazybeforeunveil', function (e) {
                let bg = e.target.getAttribute('data-bg');
                if (bg) {
                    e.target.style.backgroundImage = 'url(' + bg + ')';
                    return;
                }
                if (e.target.nodeName === 'PICTURE') {
                    let lazy_img = e.target.querySelector('img')
                        , lazy_src = e.target.querySelectorAll('source');
                    lazy_src.forEach((e) => {
                        e.setAttribute('srcset', e.getAttribute('data-srcset'));
                    }
                    );
                    lazy_img.setAttribute('src', lazy_img.getAttribute('data-src'));
                }
            });
        }
    </script>
    <script src="/html/vendor/js/jquery-3.6.4.min.js" onload="passiveScroll()"></script>
    <script defer src="https://cdn01.alison-static.net/public/html/vendor/js/lazysizes.min.js?v=2.1"
        onload="extendFunctionality()"></script>
    <link rel="manifest" href="/manifest.json">
    <meta charset="utf-8">
    <meta name="keywords" content="Fhorge courses" />
    <meta name="description"
        content="Free online courses with certificates. Join 6 million graduates and empower your career. Study, learn, certify, upskill with free online learning and training" />
    <meta property="og:title" content="Fhorge | Free Online Courses &amp; Online Learning" />
    <meta property="og:type" content="website" />
    <meta property="og:image"
        content="https://cdn01.alison-static.net/public/html/site/img/sharing/alison-share-careers.png">
    <meta property="og:url" content="/" />
    <meta property="og:description"
        content="Free online courses with certificates. Join 6 million graduates and empower your career. Study, learn, certify, upskill with free online learning and training" />
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@AlisonCourses">
    <meta name="twitter:creator" content="@AlisonCourses">
    <meta name="twitter:url" content="/">
    <meta name="twitter:title" content="Fhorge | Free Online Courses &amp; Online Learning">
    <meta name="twitter:description"
        content="Free online courses with certificates. Join 6 million graduates and empower your career. Study, learn, certify, upskill with free online learning and training">
    <meta name="twitter:image"
        content="https://cdn01.alison-static.net/public/html/site/img/sharing/alison-share-careers.png">
    <meta name="csrf-token" content="LHMKs5blDWAzrk1onUGVVxCB9dlQtGr8FPPz3cuZ">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="canonical" href="" />
    <link rel="alternate" href="/en" hreflang="x-default" />
    <link rel="alternate" href="/en" hreflang="en" />
    <link rel="alternate" href="/es" hreflang="es" />
    <link rel="alternate" href="/fr" hreflang="fr" />
    <link rel="alternate" href="/it" hreflang="it" />
    <link rel="alternate" href="/pt-BR" hreflang="pt-br" />
    <link rel="icon" type="image/png" href="/html/site/img/assets/orange_icon.png" sizes="16x16" />
    <link rel="apple-touch-icon" sizes="180x180" href="/html/site/img/assets/orange_icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/html/site/img/assets/orange_icon.png">
    <link rel="manifest" href="https://cdn01.alison-static.net/public/html/vendor/img/favicon/manifest.json">
    <link rel="mask-icon" href="/html/site/img/assets/orange_icon.png" color="#4460EF">
    <meta name="theme-color" media="(prefers-color-scheme: light)" content="#002347" />
    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#002347" />
    <script type='text/javascript'>
        window.smartlook || (function (d) {
            var o = smartlook = function () {
                o.api.push(arguments);
            }
                , h = d.getElementsByTagName('head')[0];
            var c = d.createElement('script');
            o.api = new Array();
            c.async = true;
            c.type = 'text/javascript';
            c.charset = 'utf-8';
            c.src = 'https://web-sdk.smartlook.com/recorder.js';
            h.appendChild(c);
        }
        )(document);
        smartlook('init', '433ed928b8353c0fea826ee5a8dea3a7fb55720d', {
            region: 'eu'
        });
    </script>
    <script>
        var language = "en";
    </script>
    <link rel="stylesheet" href="/html/site/css/main.css?id=661cc1654b71907245756531a17a061c">
    <link rel="preload" href="/html/site/css/iconfont.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <link rel="preload" href="/html/site/css/homepage.css?v=3" as="style"
        onload="this.onload=null;this.rel='stylesheet'">
    <link rel="preload" href="/html/site/css/homepage-lower.css" as="style"
        onload="this.onload=null;this.rel='stylesheet'">
</head>

<body class="" data-api_endpoint="https://api.alison.com/v0.1"
    data-gclient_id="70245126531-aq99q60am7odbhgs779chq4abegbrlj9.apps.googleusercontent.com" data-in_sync="true"
    data-site_ads="true">
    <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TWDV2Z" height="0" width="0"
            style="display:none;visibility:hidden"></iframe>
    </noscript>
    <div class="loading" style="display: none">
        <img class="lazyload" data-src="/html/site/img/assets/fhorge_icon.png" width="208"
            height="208" alt="Loading">
    </div>
    <div class="messages-q"
        style="position: fixed;right: 10px;bottom: 0;max-width: 420px;width: 100%;height: 100%;display: none;pointer-events: none; z-index: 99999">
    </div>
    </div>
    <section id="header-outer" class="header__outer ">
        <header class=" announcement-active sale-active ">
            <script>
                function openBanner() {
                    if (document.getElementById(banner_type) !== null) {
                        document.getElementById(banner_type).style.opacity = 1;
                    }
                    body.className += ' sale-active' + (banner_type === 'announcement' ? ' announcement-active' : '');
                }
                let banner_type = document.getElementById('announcement') ? 'announcement' : 'sale'
                    , s_banner = document.getElementById(banner_type)
                    , body = document.querySelector('body');
                if (typeof localStorage !== 'undefined') {
                    let header_simple = document.getElementById('header-simple');
                    if (header_simple && banner_type === 'sale') {
                        s_banner.className += ' sale-banner-shop';
                    }
                    if (localStorage.getItem(banner_type + '_banner_closed_at') && !header_simple) {
                        let storageDate = parseInt(localStorage.getItem(banner_type + '_banner_closed_at'));
                        if (Math.floor(((Date.now() / 1000) - storageDate) / (3600 * 24)) >= 3) {
                            openBanner();
                        } else {
                            s_banner.parentNode.removeChild(s_banner);
                            document.querySelector('header').classList.remove('sale-active', 'announcement-active');
                        }
                    } else {
                        openBanner();
                    }
                }
            </script>
            <div class="header">
                <div class="header__search">
                    <div class="for-mobile header__search-nav" style="display:none;">
                        <span class="icon-nb-menu"></span>
                        <span class="icon-search"></span>
                    </div>
                    <a href="/" id="alison_logo" class="logo">
                        <img width="70" height="30" src="/html/fhorge_logo_secondary.png" style="margin-bottom: 15px;"
                            alt="Free Online Courses, Classes and Tutorials">
                    </a>
                    <div class="header__search-input">
                        <div class="search-container ">
                            <form method="GET" action="/courses/home" accept-charset="UTF-8" id="header-search-form">
                                <input maxlength="200" autocomplete="off" placeholder="What do you want to learn?"
                                    class="autocomplete_field" id="autocomplete" name="query" type="text">
                                <button type="button" id="search_icon" class="btn btn-warning btn-fla">
                                    <span class="icon-search" style="pointer-events: none;"></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="header__nav nav">
                    <div class="for-desktop">
                        <div class="nav__item nav__item--b nav__item--dd nav__item--hover">
                            <a href="#" data-type="categories" class="load-dropdown"
                                title="Explore Diplomas & Certificates">
                                Explore Diplomas &Certificates <span class="icon-dropdown"></span>
                            </a>
                            <div class="nav__dd nav__dd--cats nav__dd--cols" style="display: none">
                                <a href="/diploma-courses" title="Diploma Courses">All Diploma Courses </a>
                                <a href="/certificate-courses" title="Certificates">
                                    <h5>All Certificate Courses</h5>
                                </a>
                                <a class="english-vertical-link" href="/vertical/english" title="Learn English">
                                    <h5>Learn English</h5>
                                </a>
                                <a data-code="it" data-slug="it" data-name="IT" href="/courses/it" title="IT Courses">
                                    <h5>IT</h5>
                                    <span class="course-amount">(1,000 Courses)</span>
                                </a>
                                <a data-code="health" data-slug="health" data-name="Health" href="/courses/health"
                                    title="Health Courses">
                                    <h5>Health</h5>
                                    <span class="course-amount">(621 Courses)</span>
                                </a>
                                <a data-code="language" data-slug="language" data-name="Language"
                                    href="/courses/language" title="Language Courses">
                                    <h5>Language</h5>
                                    <span class="course-amount">(259 Courses)</span>
                                </a>
                                <a data-code="business" data-slug="business" data-name="Business"
                                    href="/courses/business" title="Business Courses">
                                    <h5>Business</h5>
                                    <span class="course-amount">(1,392 Courses)</span>
                                </a>
                                <a data-code="management" data-slug="management" data-name="Management"
                                    href="/courses/management" title="Management Courses">
                                    <h5>Management</h5>
                                    <span class="course-amount">(812 Courses)</span>
                                </a>
                                <a data-code="personal-development" data-slug="personal-development"
                                    data-name="Personal Development" href="/courses/personal-development"
                                    title="Personal Development Courses">
                                    <h5>Personal Development</h5>
                                    <span class="course-amount">(966 Courses)</span>
                                </a>
                                <a data-code="marketing" data-slug="marketing" data-name="Sales &amp; Marketing"
                                    href="/courses/marketing" title="Sales &amp; Marketing Courses">
                                    <h5>Sales &amp;Marketing</h5>
                                    <span class="course-amount">(313 Courses)</span>
                                </a>
                                <a data-code="engineering" data-slug="engineering"
                                    data-name="Engineering &amp; Construction" href="/courses/engineering"
                                    title="Engineering &amp; Construction Courses">
                                    <h5>Engineering &amp;Construction</h5>
                                    <span class="course-amount">(692 Courses)</span>
                                </a>
                                <a data-code="education" data-slug="education" data-name="Teaching &amp; Academics"
                                    href="/courses/education" title="Teaching &amp; Academics Courses">
                                    <h5>Teaching &amp;Academics</h5>
                                    <span class="course-amount">(1,209 Courses)</span>
                                </a>
                            </div>
                        </div>
                        <div class="nav__item nav__item--b nav__item--dd nav__item--hover">
                            <a href="#" data-type="careers" class="load-dropdown" title="Discover Careers">
                                Discover Careers <span class="icon-dropdown"></span>
                            </a>
                            <div class="nav__dd nav__dd--career nav__dd--cols" style="display: none">
                                <a data-slug="health" data-img="health.svg" href="/careers/health"
                                    title="Health Science Careers">
                                    Health Science <br>
                                    <span class="course-amount">143 Careers</span>
                                </a>
                                <a data-slug="finance" data-img="finance.svg" href="/careers/finance"
                                    title="Finance Careers">
                                    Finance <br>
                                    <span class="course-amount">50 Careers</span>
                                </a>
                                <a data-slug="it" data-img="it.svg" href="/careers/it"
                                    title="Information Technology Careers">
                                    Information Technology <br>
                                    <span class="course-amount">43 Careers</span>
                                </a>
                                <a data-slug="education" data-img="education.svg" href="/careers/education"
                                    title="Education and Training Careers">
                                    Education and Training <br>
                                    <span class="course-amount">57 Careers</span>
                                </a>
                                <a data-slug="management" data-img="management.svg" href="/careers/management"
                                    title="Business Management and Administration Careers">
                                    Business Management and Administration <br>
                                    <span class="course-amount">57 Careers</span>
                                </a>
                                <a data-slug="marketing" data-img="marketing.svg" href="/careers/marketing"
                                    title="Marketing, Sales, and Service Careers">
                                    Marketing, Sales, and Service <br>
                                    <span class="course-amount">44 Careers</span>
                                </a>
                                <a data-slug="agriculture-food-and-natural-resources"
                                    data-img="agriculture-food-and-natural-resources.svg"
                                    href="/careers/agriculture-food-and-natural-resources"
                                    title="Agriculture, Food, and Natural Resources Careers">
                                    Agriculture, Food, and Natural Resources <br>
                                    <span class="course-amount">46 Careers</span>
                                </a>
                                <a data-slug="hospitality" data-img="hospitality.svg" href="/careers/hospitality"
                                    title="Hospitality and Tourism Careers">
                                    Hospitality and Tourism <br>
                                    <span class="course-amount">17 Careers</span>
                                </a>
                                <a data-slug="stem" data-img="stem.svg" href="/careers/stem"
                                    title="Science, Technology, Engineering, and Mathematics Careers">
                                    Science, Technology, Engineering, and Mathematics <br>
                                    <span class="course-amount">110 Careers</span>
                                </a>
                                <a data-slug="architecture" data-img="architecture.svg" href="/careers/architecture"
                                    title="Architecture and Construction Careers">
                                    Architecture and Construction <br>
                                    <span class="course-amount">35 Careers</span>
                                </a>
                                <a data-slug="government" data-img="government.svg" href="/careers/government"
                                    title="Government and Public Administration Careers">
                                    Government and Public Administration <br>
                                    <span class="course-amount">14 Careers</span>
                                </a>
                                <a data-slug="security" data-img="security.svg" href="/careers/security"
                                    title="Law, Public Safety, Corrections, and Security Careers">
                                    Law, Public Safety, Corrections, and Security <br>
                                    <span class="course-amount">74 Careers</span>
                                </a>
                                <a data-slug="manufacturing" data-img="manufacturing.svg" href="/careers/manufacturing"
                                    title="Manufacturing Careers">
                                    Manufacturing <br>
                                    <span class="course-amount">12 Careers</span>
                                </a>
                                <a data-slug="distribution" data-img="distribution.svg" href="/careers/distribution"
                                    title="Transportation, Distribution, and Logistics Careers">
                                    Transportation, Distribution, and Logistics <br>
                                    <span class="course-amount">34 Careers</span>
                                </a>
                                <a data-slug="human-services" data-img="human-services.svg"
                                    href="/careers/human-services" title="Human Services Careers">
                                    Human Services <br>
                                    <span class="course-amount">67 Careers</span>
                                </a>
                                <a data-slug="arts" data-img="arts.svg" href="/careers/arts"
                                    title="Arts, Audio/Video Technology, and Communications Careers">
                                    Arts, Audio/Video Technology, and Communications <br>
                                    <span class="course-amount">108 Careers</span>
                                </a>
                            </div>
                        </div>
                        <div class="nav__item nav__item--dd nav__item--hover nav__item--animation">
                            <a href="#" class="load-dropdown" data-type="more" title="More">
                                More <span class="icon-dropdown"></span>
                            </a>
                        </div>
                    </div>
                    <div class="for-mobile" style="display: none">
                        <span class="nav__item nav__item--dd nav__item--user-menu"></span>
                    </div>
                </div>
                <div class="head__u head__u--out login-links nav">
                    <div class="lms-b lms-b--nr">
                        <div id="lms-b--non-registered" class="lms-b__button lms-b__button--nr">LMS</div>
                        <div class="lms-b__menu lms-b__menu--nr" style="display: none">
                            <div class="lms-b__inner lms-b__inner--nr">
                                <div class="flms-banner-img">
                                    <img class="lazyload"
                                        data-src="https://cdn01.alison-static.net/public/html/site/img/free-lms/flms-header-banner.svg"
                                        alt="Free LMS Programme">
                                </div>
                                <div class="flms-copy">
                                    <p>Do you represent a business or organization that would like to train and upskill
                                        their employees?</p>
                                    <p>If yes, check out Fhorge’s Free Learning Management System here!</p>
                                    <div class="flms-but">
                                        <a href="/free-lms-programme" class="btn-flms btn-flms--green">Yes</a>
                                        <a href="#0" class="btn-flms btn-flms--blank">Not For Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span class="q-aff">
                        <span class="coin">
                            <span class="front"></span>
                            <span class="back"></span>
                        </span>
                        <div class="aff">
                            <div class="aff__message aff__message--not-affiliate" style="display:none;">
                                <span class="icon-cross2 aff__close"></span>
                                <img class="lazyload" data-src="/html/site/img/affiliates/not-affiliate.svg" />
                                <div class="aff__text">
                                    <p>Become a Fhorge Affiliate in one click, and start earning money by sharing any
                                        page on the Fhorge website. </p>
                                    <a class="aff__btn" href="/affiliates/learn-to-earn">Become an Affiliate</a>
                                </div>
                            </div>
                        </div>
                    </span>
                    <div class="login-links">
                        <a class="link login-button login-mobile" href="login">
                            Log In<span>&nbsp;</span>
                        </a>
                        <a href="#" class="link head__u-register shine">Sign Up </a>
                    </div>
                    <span class="nav__item nav__item--dd nav__item--slide nav__item--languages activate-dropdown ">
                        <span class="icon-globe">
                            <span class="language">en </span>
                        </span>
                        <div class="nav__dd nav__dd--slide nav__dd--languages" style="display: none">
                            <ul>
                                <li class="border-bottom extra-padding subnav-back" style="display: none">
                                    <span class="icon-arrow-thin-right"></span>
                                    Change Language
                                </li>
                                <li class="selected">
                                    <a rel="alternate" hreflang="en" href="/en">
                                        <span>
                                            <img class="lazyload"
                                                data-src="https://cdn01.alison-static.net/public/html/site/img/header/en.svg"
                                                alt="English Language Select" />
                                        </span>
                                        English
                                    </a>
                                </li>
                                <li>
                                    <a rel="alternate" hreflang="es" href="/es">
                                        <span>
                                            <img class="lazyload"
                                                data-src="https://cdn01.alison-static.net/public/html/site/img/header/es.svg"
                                                alt="Spanish Language Select" />
                                        </span>
                                        Spanish
                                    </a>
                                </li>
                                <li>
                                    <a rel="alternate" hreflang="fr" href="/fr">
                                        <span>
                                            <img class="lazyload"
                                                data-src="https://cdn01.alison-static.net/public/html/site/img/header/fr.svg"
                                                alt="French Language Select" />
                                        </span>
                                        French
                                    </a>
                                </li>
                                <li>
                                    <a rel="alternate" hreflang="it" href="/it">
                                        <span>
                                            <img class="lazyload"
                                                data-src="https://cdn01.alison-static.net/public/html/site/img/header/it.svg"
                                                alt="Italian Language Select" />
                                        </span>
                                        Italian
                                    </a>
                                </li>
                                <li>
                                    <a rel="alternate" hreflang="pt-BR" href="/pt-BR">
                                        <span>
                                            <img class="lazyload"
                                                data-src="https://cdn01.alison-static.net/public/html/site/img/header/pt-BR.svg"
                                                alt="Brazilian Portuguese Language Select" />
                                        </span>
                                        Brazilian Portuguese
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </span>
                </div>
            </div>
        </header>
        
        <div class="darken" style="display: none"></div>
    </section>
    <div class="modal-outer">
        <div class="login-modal">
            <div class=" inner-modal">
                <div id="login-container-element" class="login-container">
                    <div class="clearfix"></div>
                    <ul class="tab-content"></ul>
                </div>
            </div>
        </div>
    </div>
    <script>
        var sessionId = "xZ3La6zE3b7XW7kAm3T2dyMsyV2DSu7hIieX79Bl"
            , csrf = "LHMKs5blDWAzrk1onUGVVxCB9dlQtGr8FPPz3cuZ"
            , transCourseUrl = "/course/replace_me"
            , transCatUrl = "/courses/categories?replace_me"
            , transTagUrl = "/tag/replace_me"
            , transCareer = "/careers/replace_me"
            , transLPUrl = ""
            , transResumeUrl = "/resume/courses"
            , transModulePage = "/courses/9999/content";
        function acceptedPush() {
            dataLayer.push({
                "accepted_push_notifications": 1,
                "userid": "none",
                "event": "pushAccepted"
            });
        }
    </script>
    <script type="text/javascript" src="html/vendor/js/jquery.mCustomScrollbar-alt.min.js"></script>
    <script async type="text/javascript"
        src="https://cdn01.alison-static.net/public/html/vendor/js/jquery.mousewheel.min.js"></script>
    <script type='text/javascript' src="html/vendor/js/handlebars.runtime-v4.4.3.js"></script>
    <script type="text/javascript" src="html/site/js/compiled.js?id=55230286e22d8c6f8c72712001a2d2d7"></script>
    <script type="text/javascript" src="https://cdn01.alison-static.net/public/html/vendor/js/slick.js"></script>
    <script>
        $('.testimonial__slider').slick({
            dots: true,
            arrows: true,
            infinite: false,
            slidesToShow: 2,
            variableWidth: true,
            outerEdgeLimit: true,
            nextArrow: '<button type="button" class="slick-next slick-arrow"><span class="icon-thick-chevron-up"></span></button>',
            prevArrow: '<button type="button" class="slick-prev slick-arrow"><span class="icon-thick-chevron-up"></span></button>',
        });
        renderSkills();
        function renderSkills() {
            const isMobile = (screen.width < 768);
            const iSmMobileGroup = screen.width > 400 && screen.width < 500 && isMobile;
            const iSlMobileGroup = screen.width > 500 && screen.width < 600 && isMobile;
            const iSXlMobileGroup = screen.width > 600 && isMobile;
            let groupsNumber = 5;
            let key = 'desktopGroup';
            if (isMobile) {
                if (screen.width < 400) {
                    key = 'mobileGroup';
                    groupsNumber = 6;
                } else if (iSmMobileGroup) {
                    groupsNumber = 7;
                    key = 'mMobileGroup';
                } else if (iSlMobileGroup) {
                    groupsNumber = 6;
                    key = 'lMobileGroup';
                } else if (iSXlMobileGroup) {
                    groupsNumber = 5;
                    key = 'xlMobileGroup';
                }
            }
            const skills = [{
                name: 'Information Systems',
                tag: 'information-systems',
                desktopGroup: 1,
                mobileGroup: 1,
                mMobileGroup: 1,
                lMobileGroup: 1,
                xlMobileGroup: 1
            }, {
                name: 'Human Resources',
                tag: 'human-resources',
                desktopGroup: 1,
                mobileGroup: 1,
                mMobileGroup: 1,
                lMobileGroup: 1,
                xlMobileGroup: 1
            }, {
                name: 'Business Management',
                tag: 'business-management',
                desktopGroup: 1,
                mobileGroup: 1,
                mMobileGroup: 1,
                lMobileGroup: 1,
                xlMobileGroup: 1
            }, {
                name: 'Quality Control',
                tag: 'quality-control',
                desktopGroup: 1,
                mobileGroup: 2,
                mMobileGroup: 1,
                lMobileGroup: 1,
                xlMobileGroup: 1
            }, {
                name: 'Health Care',
                tag: 'healthcare',
                desktopGroup: 1,
                mobileGroup: 1,
                mMobileGroup: 1,
                lMobileGroup: 1,
                xlMobileGroup: 1
            }, {
                name: 'Contract Law',
                tag: 'contract-law',
                desktopGroup: 1,
                mobileGroup: 2,
                mMobileGroup: 2,
                lMobileGroup: 1,
                xlMobileGroup: 1
            }, {
                name: 'Management',
                tag: 'management',
                desktopGroup: 1,
                mobileGroup: 1,
                mMobileGroup: 2,
                lMobileGroup: 1,
                xlMobileGroup: 1
            }, {
                name: 'Accounting',
                tag: 'accounting',
                desktopGroup: 1,
                mobileGroup: 2,
                mMobileGroup: 2,
                lMobileGroup: 2,
                xlMobileGroup: 1
            }, {
                name: 'Health and Safety',
                tag: 'health-and-safety',
                desktopGroup: 1,
                mobileGroup: 2,
                mMobileGroup: 2,
                lMobileGroup: 2,
                xlMobileGroup: 1
            }, {
                name: 'Caregiving',
                tag: 'caregiving',
                desktopGroup: 2,
                mobileGroup: 2,
                mMobileGroup: 2,
                lMobileGroup: 2,
                xlMobileGroup: 1
            }, {
                name: 'Sales',
                tag: 'sales',
                desktopGroup: 2,
                mobileGroup: 2,
                mMobileGroup: 2,
                lMobileGroup: 2,
                xlMobileGroup: 2
            }, {
                name: 'Fitness',
                tag: 'fitness',
                desktopGroup: 2,
                mobileGroup: 3,
                mMobileGroup: 2,
                lMobileGroup: 2,
                xlMobileGroup: 2
            }, {
                name: 'Psychology',
                tag: 'psychology',
                desktopGroup: 2,
                mobileGroup: 3,
                mMobileGroup: 3,
                lMobileGroup: 2,
                xlMobileGroup: 2
            }, {
                name: 'Programming',
                tag: 'programming',
                desktopGroup: 2,
                mobileGroup: 3,
                mMobileGroup: 3,
                lMobileGroup: 2,
                xlMobileGroup: 2
            }, {
                name: 'Nursing',
                tag: 'nursing',
                desktopGroup: 2,
                mobileGroup: 3,
                mMobileGroup: 3,
                lMobileGroup: 2,
                xlMobileGroup: 2
            }, {
                name: 'English Language',
                tag: 'english-language',
                desktopGroup: 2,
                mobileGroup: 3,
                mMobileGroup: 3,
                lMobileGroup: 2,
                xlMobileGroup: 2
            }, {
                name: 'French Language',
                tag: 'french-language',
                desktopGroup: 2,
                mobileGroup: 3,
                mMobileGroup: 3,
                lMobileGroup: 3,
                xlMobileGroup: 2
            }, {
                name: 'German Language',
                tag: 'german-language',
                desktopGroup: 2,
                mobileGroup: 4,
                mMobileGroup: 3,
                lMobileGroup: 3,
                xlMobileGroup: 2
            }, {
                name: 'Law',
                tag: 'law',
                desktopGroup: 2,
                mobileGroup: 4,
                mMobileGroup: 3,
                lMobileGroup: 3,
                xlMobileGroup: 2
            }, {
                name: 'Carpentry',
                tag: 'carpentry',
                desktopGroup: 2,
                mobileGroup: 4,
                mMobileGroup: 4,
                lMobileGroup: 3,
                xlMobileGroup: 2
            }, {
                name: 'Nutrition',
                tag: 'nutrition',
                desktopGroup: 3,
                mobileGroup: 4,
                mMobileGroup: 4,
                lMobileGroup: 3,
                xlMobileGroup: 2
            }, {
                name: 'Electrical Engineering',
                tag: 'electrical-engineering',
                desktopGroup: 3,
                mobileGroup: 4,
                mMobileGroup: 4,
                lMobileGroup: 3,
                xlMobileGroup: 2
            }, {
                name: 'Mental Health',
                tag: 'mental-health',
                desktopGroup: 3,
                mobileGroup: 5,
                mMobileGroup: 4,
                lMobileGroup: 3,
                xlMobileGroup: 3
            }, {
                name: 'Hospitality',
                tag: 'hospitality',
                desktopGroup: 3,
                mobileGroup: 5,
                mMobileGroup: 4,
                lMobileGroup: 3,
                xlMobileGroup: 3
            }, {
                name: 'Journalism',
                tag: 'journalism',
                desktopGroup: 3,
                mobileGroup: 5,
                mMobileGroup: 4,
                lMobileGroup: 3,
                xlMobileGroup: 3
            }, {
                name: 'Quality Management',
                tag: 'quality-management',
                desktopGroup: 3,
                mobileGroup: 5,
                mMobileGroup: 4,
                lMobileGroup: 4,
                xlMobileGroup: 3
            }, {
                name: 'Construction',
                tag: 'construction',
                desktopGroup: 3,
                mobileGroup: 5,
                mMobileGroup: 5,
                lMobileGroup: 4,
                xlMobileGroup: 3
            }, {
                name: 'Engineering',
                tag: 'engineering',
                desktopGroup: 3,
                mobileGroup: 5,
                mMobileGroup: 5,
                lMobileGroup: 4,
                xlMobileGroup: 3
            }, {
                name: 'E-commerce',
                tag: 'ecommerce',
                desktopGroup: 3,
                mobileGroup: 6,
                mMobileGroup: 5,
                lMobileGroup: 4,
                xlMobileGroup: 3
            }, {
                name: 'Music',
                tag: 'music',
                desktopGroup: 3,
                mobileGroup: 4,
                mMobileGroup: 5,
                lMobileGroup: 4,
                xlMobileGroup: 3
            }, {
                name: 'Pharmacology',
                tag: 'pharmacology',
                desktopGroup: 4,
                mobileGroup: 6,
                mMobileGroup: 5,
                lMobileGroup: 4,
                xlMobileGroup: 3
            }, {
                name: 'Ccna',
                tag: 'ccna',
                desktopGroup: 4,
                mobileGroup: 6,
                mMobileGroup: 5,
                lMobileGroup: 4,
                xlMobileGroup: 3
            }, {
                name: 'Data Science',
                tag: 'data-science',
                desktopGroup: 4,
                mobileGroup: 6,
                mMobileGroup: 6,
                lMobileGroup: 4,
                xlMobileGroup: 3
            }, {
                name: 'Communication Skills',
                tag: 'communication-skills',
                desktopGroup: 4,
                mobileGroup: 6,
                mMobileGroup: 6,
                lMobileGroup: 5,
                xlMobileGroup: 4
            }, {
                name: 'Databases',
                tag: 'databases',
                desktopGroup: 4,
                mobileGroup: 7,
                mMobileGroup: 6,
                lMobileGroup: 5,
                xlMobileGroup: 4
            }, {
                name: 'Customer Service',
                tag: 'customer-service',
                desktopGroup: 4,
                mobileGroup: 7,
                mMobileGroup: 6,
                lMobileGroup: 5,
                xlMobileGroup: 4
            }, {
                name: 'Physiotherapy',
                tag: 'physiotherapy',
                desktopGroup: 4,
                mobileGroup: 7,
                mMobileGroup: 6,
                lMobileGroup: 5,
                xlMobileGroup: 4
            }, {
                name: 'Architecture',
                tag: 'architecture',
                desktopGroup: 4,
                mobileGroup: 7,
                mMobileGroup: 6,
                lMobileGroup: 5,
                xlMobileGroup: 4
            }, {
                name: 'Mathematics',
                tag: 'mathematics',
                desktopGroup: 4,
                mobileGroup: 7,
                mMobileGroup: 1,
                lMobileGroup: 5,
                xlMobileGroup: 4
            }];
            for (let group = 1; group < groupsNumber; group++) {
                $('.carousel.skills-carousel').append('<div data-group="' + group + '"><ul></ul></div>');
                skills.forEach((skill) => {
                    if (skill[key] === group) {
                        let li = "<li><a href=\"/tag/:skill\">" + skill.name + "</a></li>";
                        li = li.replace(":skill", skill.tag);
                        $('div[data-group="' + group + '"] ul').append(li);
                    }
                }
                );
            }
            setTimeout(() => {
                slickInit();
            }
                , 10);
        }
        function slickInit() {
            $('.carousel').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                centerMode: false,
                arrows: screen.width > 768,
                dots: screen.width < 768,
                nextArrow: '<button type="button" class="slick-next slick-arrow"><span class="icon-thick-chevron-up"></span></button>',
                prevArrow: '<button type="button" class="slick-prev slick-arrow"><span class="icon-thick-chevron-up"></span></button>',
            });
        }
    </script>
    <script>
        $(document).on('click', '.card__start', function () {
            let carouselEnrollment = (($(window).width() > 768) ? $('.courses__nav .active').text() : $(this).parents('.courses__carousel').prev().text()).trim();
            if (carouselEnrollment !== '') {
                dataLayer.push({
                    "carouselEnrollment": carouselEnrollment,
                    "courseid": $(this).attr('data-id')
                });
            }
        });
        $(document).ready(function () {
            let course_carousel_settings = {
                dots: false,
                arrows: true,
                infinite: $(window).width() > 768,
                centerMode: false,
                variableWidth: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                nextArrow: '<button type="button" class="slick-next slick-arrow"><span class="icon-thick-chevron-up"></span></button>',
                prevArrow: '<button type="button" class="slick-prev slick-arrow"><span class="icon-thick-chevron-up"></span></button>',
            };
            let left = $('.courses__nav .active span').position().left
                , course = {}
                , alt_course = {};
            $('.under').css({
                'opacity': 1,
                'left': left
            });
            $('.courses__nav a').click(function (e) {
                e.preventDefault();
                $('.courses__nav .active').removeClass('active');
                $(this).addClass('active');
                let new_left = $(this).position().left + $(this).find('span').position().left;
                $('.under').css('left', new_left);
                $('.loading').fadeIn();
                course.contactCourseAPI($(this).attr('data-type'));
            });
            function NewLookCourses(options) {
                if (typeof options === 'undefined') {
                    let options = {};
                }
                let courseC = new CourseCard()
                    , that = this;
                this.options = {
                    'alt': options.alt || false,
                    'parent': options.parent || 'body',
                    'courseCount': options.courseCount || 10,
                    'root_endpoint': options.root_endpoint && options.root_endpoint !== '' && options.root_endpoint !== 'undefined' ? options.root_endpoint : $("body").data("api_endpoint"),
                };
                let searchUrl = '/course/popular?locale=' + language;
                this.options['popular'] = searchUrl + '&type=all';
                this.options['diploma'] = searchUrl + '&type=diploma';
                this.options['certificate'] = searchUrl + '&type=certificate';
                this.options['released'] = '/search?locale=' + language + '&page=1&size=' + this.options.courseCount + '&order=released-desc';
                this.placeCourses = function (response) {
                    let container = $(that.options.parent);
                    if (response.result.length > 0) {
                        container.html('');
                        for (let x = 0; x < response.result.length; x++) {
                            container.append('<li>' + courseC.buildCourseItem(response.result[x], 'grey') + '</li>');
                        }
                        setTimeout(function () {
                            dataLayer.push({
                                'event': 'optimize.activate'
                            });
                        }, 300);
                    }
                }
                    ;
                this.contactCourseAPI = function (endpoint) {
                    let that = this
                        , el = $('.courses__nav a[data-type=' + endpoint + ']');
                    if ($(window).width() > 768) {
                        $('.courses__cta a').text(el.attr('data-text')).attr('href', el.attr('data-url'));
                    }
                    $.ajax({
                        url: this.options.root_endpoint + this.options[endpoint],
                        type: 'GET',
                        success: function (response) {
                            $('.loading').fadeOut();
                            if ($(that.options.parent).hasClass('slick-initialized')) {
                                $(that.options.parent).slick('destroy');
                            }
                            if (response.status === 200 && typeof response.result !== "undefined") {
                                if (response.result.length > 0) {
                                    that.placeCourses(response);
                                }
                                $(that.options.parent).slick(course_carousel_settings);
                            }
                        }
                    });
                }
                    ;
                this.init = function () {
                    if ($(window).width() > 768) {
                        this.contactCourseAPI('popular');
                    } else {
                        if (typeof this.options.alt !== 'undefined' && this.options.alt) {
                            this.contactCourseAPI('certificate');
                        } else {
                            this.contactCourseAPI('diploma');
                        }
                    }
                }
                    ;
                this.init();
            }
            $('.home-search input').on('input', function () {
                if ($(this).val().length === 0) {
                    $(this).removeClass('typed');
                } else {
                    $(this).addClass('typed');
                }
            });
            if ($(window).width() > 768) {
                createCourses();
            } else {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            createCourses();
                        }
                    }
                    );
                }
                    , {
                        threshold: 0.5
                    });
                observer.observe(document.getElementById('courses-section'));
            }
            function createCourses() {
                if (!$('.courses').hasClass('init')) {
                    course = new NewLookCourses({
                        'parent': '.courses__carousel:not(.clone)',
                        'courseCount': 12,
                        'root_endpoint': "https://api.alison.com/v0.1"
                    });
                    if ($(window).width() < 769) {
                        $('.courses__cta').before($('.courses__carousel').clone().addClass('clone'));
                        alt_course = new NewLookCourses({
                            'parent': '.courses__carousel.clone',
                            'courseCount': 12,
                            'root_endpoint': "https://api.alison.com/v0.1",
                            'alt': true
                        });
                    }
                    $('.courses').addClass('init');
                }
            }
            function numberWithCommas(num) {
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
            $.ajax({
                url: 'https://api.alison.com/v0.1/google-analytics/yesterday-users',
                success: function (data) {
                    if (typeof data.result !== 'undefined') {
                        $('.users-here').text(numberWithCommas(data.result));
                        $('.learning-counter').fadeIn();
                    }
                }
            });
        });
    </script>

    <script>
        $(document).ready(function () {
            $(window).on('load', function () {
                $('.messages-q').show();
            });
        });
    </script>
    <script>
        window.searchPage = "/courses";
        window.tagPage = "/tag/replaceme".replace(new RegExp('/replaceme', 'g'), '');
        window.careerPage = "/careers/replaceme/replaceme".replace(new RegExp('replaceme/', 'g'), '').replace(new RegExp('/replaceme', 'g'), '');
        window.apiEndpoint = "https://api.alison.com/v0.1";
        window.locale = "en";
    </script>
    <script defer type='text/javascript' src="html/site/js/includes/autocomplete.min.js"></script>
    <script>
        let careers = {}
            , categories = {}
            , scroll_settings = {
                theme: '3d',
                scrollbarPosition: 'inside',
                autoHideScrollbar: false,
                documentTouchScroll: true
            };
        const header_outer = $('.header__outer')
            , vh = window.innerHeight - header_outer.height();
        $(document).ready(function () {
            if (typeof localStorage !== "undefined" && localStorage.getItem('hide-flms-btn') === null) {
                $('.lms-b__button.lms-b__button--nr').show();
            } else {
                $('.lms-b.lms-b--nr').remove();
            }
            $('.nav__dd--career a').each(function () {
                careers[$(this).attr('data-slug')] = {
                    href: $(this).attr('href'),
                    img: $(this).attr('data-img'),
                    title: $(this).attr('title'),
                    desc: $(this).html()
                }
            });
            $('.nav__dd--cats a').each(function () {
                let code = $(this).attr('data-code');
                if (typeof code !== 'undefined') {
                    categories[code] = {
                        href: $(this).attr('href'),
                        code: code,
                        name: $(this).attr('data-name'),
                        title: $(this).attr('title'),
                        desc: $(this).html()
                    }
                }
            });
        });
        $(document).on('click', '.load-dropdown', function (e) {
            e.preventDefault();
            if ($(this).parents('.nav__item').find('.nav__dd--visible').length > 0) {
                closeMenus();
                $('html, body').removeClass('no-scroll');
                return;
            } else {
                closeMenus();
            }
            $('.darken').fadeIn();
            let menu_item = $(this)
                , type = menu_item.attr('data-type');
            if (menu_item.hasClass('loaded')) {
                menu_item.next().fadeIn();
                menu_item.next().addClass('nav__dd--visible');
                refreshScroll();
                if (vh > 670) {
                    $(".nav__parent-categories").mCustomScrollbar(scroll_settings);
                }
            } else {
                if ($('loaded').length === 0) {
                    loadScript('html/site/js/header-partials.js', function () {
                        openMenu(type, menu_item);
                    });
                }
            }
            $('html, body').addClass('no-scroll');
        });
        function refreshScroll() {
            $(".nav__c-sub, .for-mobile .nav__dd--scroll, .nav__dd--career .nav__parent-categories").mCustomScrollbar(scroll_settings);
        }
        function openMenu(type, menu_item) {
            let template = '';
            if (type === 'more') {
                template = Handlebars.partials['desktop-more']({
                    more: {
                        certs: {
                            title: "Claim Your Certificates",
                            sub: "Get Certified now",
                            img: 'certification.svg',
                            url: '/careers',
                            class: 'nav__dd-button-certs',
                            hide: true
                        },
                        careers: {
                            title: "Discover Careers",
                            sub: "See Your Future",
                            img: 'alison-for-business.svg',
                            url: '/careers',
                            class: 'nav__dd-button-careers',
                            hide: true
                        },
                        wpa: {
                            title: "Workplace Personality Assessment",
                            sub: "Discover Your Strengths & Weaknesses",
                            img: 'wpa-mobile.svg',
                            url: '/psychometric-test/personality',
                        },
                        mental_health: {
                            title: "Mental Health Assessment",
                            sub: "Assess Your Mental Wellbeing",
                            img: 'mental-health-assessment.svg',
                            url: '/psychometric-test/wellbeing',
                        },
                        resume_builder: {
                            title: "Resumé Builder",
                            sub: "Create Your Professional Resumé",
                            img: 'resume-builder.svg',
                            url: ' /resume-builder ',
                        },
                        blog: {
                            title: "Fhorge Blog",
                            sub: "News, Insights, Tips And Stories From Fhorge",
                            img: 'alison-blog.svg',
                            url: '/blog',
                        },
                        business: {
                            title: "Fhorge For Business",
                            sub: "Upskill Your Employees",
                            img: 'alison-for-business.svg',
                            url: '/free-lms-programme',
                        },
                        premium: {
                            title: "Get Fhorge Premium",
                            sub: "Remove Ads",
                            img: 'premium.svg',
                            url: '/about/gopremium',
                        },
                        app: {
                            title: "Download the Fhorge App",
                            sub: "Learn anywhere, anytime for free",
                            img: 'mobile-app.svg',
                            url: '/mobile/online-learning-app',
                        }
                    }
                });
            } else if (type === 'careers') {
                template = Handlebars.partials['desktop-careers']({
                    transUrl: transCareer.split("/replace_me")['0'],
                    occupations_route: '/careers',
                    careers_title: "EXPLORE CAREER CATEGORIES",
                    all_careers: "View All Categories",
                    careers_link_title: "Careers",
                    careers: careers
                });
            } else if (type === 'categories') {
                template = Handlebars.partials['desktop-categories']({
                    lang: $('html').attr('lang'),
                    transUrl: transCatUrl.split("?replace_me")['0'],
                    course_types: "Course Types",
                    course_categories: "Course Categories",
                    courses: "Courses",
                    diploma: '/diploma-courses',
                    diploma_title: "All Diploma Courses",
                    certificate: '/certificate-courses',
                    certificate_title: "All Certificate Courses",
                    english: '/vertical/english',
                    english_title: "Learn English",
                    categories: categories
                });
            }
            menu_item.addClass('loaded');
            if (menu_item.next().length > 0) {
                menu_item.next().replaceWith(template)
            } else {
                menu_item.after(template);
            }
            (function (menu) {
                setTimeout(function () {
                    menu.next().fadeIn();
                    fitMenus();
                }, 200);
            }
            )($(menu_item));
            menu_item.next().addClass('nav__dd--visible');
            refreshScroll();
            if (vh > 670) {
                $(".nav__parent-categories").mCustomScrollbar(scroll_settings);
            }
        }
        $(document).on('mouseenter', '.nav__cats--arrows .nav__parent-categories a[data-child]', function (e) {
            let child = $(this).attr('data-child')
                , child_el = $("." + child);
            if ($('.open').length > 0) {
                if (!$(this).hasClass('open')) {
                    $('.open').removeClass('open').removeClass('fast');
                }
                $(this).addClass('open');
                $('.nav__c').addClass('open fast').find("." + child).addClass('open fast');
            } else {
                $(this).addClass('open');
                $('.nav__c').addClass('open').find("." + child).addClass('open');
            }
            $('.nav__dd--cats').addClass('open');
            if (!child_el.hasClass('populated')) {
                child_el.addClass('populated');
                $.ajax({
                    url: 'https://api.alison.com/v0.1/categories/sub-categories?category=' + (child.split('--')[1]) + '&locale=en',
                    type: 'GET',
                    success: function (response) {
                        let template = Handlebars.partials['desktop-sub-categories']({
                            transUrl: transTagUrl.split("replace_me")['0'],
                            sub_cats: response.result
                        });
                        $("." + child).find('.nav__c-sub .mCSB_container').html(template);
                        child_el.find('.nav__c-sub').addClass('loaded');
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            }
        });
        $(document).on('click', '.activate-dropdown:not(.activated)', function (e) {
            e.preventDefault();
            closeMobileMenu();
            $('.nav__dd--visible').hide();
            $('.activated').removeClass('activated');
            closeAffMessage();
            $('.darken').fadeIn();
            $(this).addClass('activated');
            var parent = $(this).parent().find('.nav__dd').first();
            parent.addClass('nav__dd--visible');
            if ($(window).width() > 800) {
                parent.fadeIn();
            }
            if ($(this).parent().hasClass('buy-cert')) {
                $(this).parent().addClass('hide-buy-cert');
            }
            $('html, body').addClass('no-scroll');
            fitMenus();
        });
        $(document).on('click', '.btn-flms.btn-flms--blank', e => {
            e.preventDefault();
            closeMenus();
            closeMobileMenu();
            $('.darken').fadeOut();
            if (typeof localStorage !== "undefined") {
                localStorage.setItem('hide-flms-btn', 'true');
            }
            $('.lms-b.lms-b--nr').remove();
        }
        );
        $(document).ready(function () {
            if ($('.lms-b__inner').length) {
                var userId = "";
                $('.lms-b__inner ul li a').each((index, flms) => {
                    if (userId == $(flms).attr('data-owner')) {
                        $('.lms-b__button').attr('id', 'lms-b--owner');
                        return false;
                    }
                }
                );
            }
            $(document).on('click', '.lms-b__button', function (e) {
                if (!$(this).hasClass('lms-b__button--active')) {
                    closeMobileMenu();
                    closeMenus();
                    $(this).addClass('lms-b__button--active').next().fadeIn().addClass('nav__dd--visible');
                    $('.darken').fadeIn();
                    $('html, body').addClass('no-scroll');
                } else {
                    $(this).removeClass('lms-b__button--active').next().fadeOut().removeClass('nav__dd--visible');
                    $('.darken').fadeOut();
                    $('html, body').addClass('no-scroll');
                }
            });
            $(document).on('click', '.nav__item-link--has-child .nav__item-inner', function (e) {
                let parent = $(this).parent();
                if (!parent.hasClass('loaded')) {
                    $.ajax({
                        url: 'https://api.alison.com/v0.1/categories/sub-categories?category=' + parent.attr('data-child') + '&locale=en',
                        type: 'GET',
                        success: function (response) {
                            let template = Handlebars.partials['desktop-sub-categories']({
                                transUrl: transTagUrl.split("replace_me")['0'],
                                sub_cats: response.result
                            });
                            parent.addClass('loaded').find('.nav__c-sub .mCSB_container').html(template);
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    });
                }
                $('.mobile-scroll').mCustomScrollbar("scrollTo", 0, {
                    timeout: 0,
                    scrollInertia: 0,
                });
                parent.toggleClass('open').find('.nav__c').toggleClass('open');
            });
            $(document).on('click', '.child-nav-back', function () {
                $(this).parents('.open').removeClass('open');
            });
            $('.for-mobile .icon-nb-menu').on('click', function (e) {
                let menu = $('.header__nav > .for-mobile .nav__dd--user-menu');
                closeMenus();
                if (menu.hasClass('active')) {
                    $('.darken').fadeOut();
                    closeMobileMenu();
                } else {
                    if ($('.for-mobile .nav__item--user-menu').children().length === 0) {
                        loadScript('html/site/js/header-partials.js', function () {
                            openMobileMenu(menu);
                        });
                    } else {
                        openMobileMenu(menu);
                    }
                }
                $('.header__search-input').slideUp();
                $('.hide-buy-cert').removeClass('hide-buy-cert');
            });
            function openMobileMenu(menu) {
                if (!menu.hasClass('loaded')) {
                    $('.for-mobile .nav__item--user-menu').html(Handlebars.partials['mobile-menu']({
                        course_in_progress: {
                            href: '/resume/courses',
                            title: "Continue Learning",
                            show: ""
                        },
                        more: {
                            diploma: {
                                href: '/diploma-courses',
                                title: "Diploma Courses",
                                img: 'diploma-mobile.svg'
                            },
                            certificate: {
                                href: '/certificate-courses',
                                title: "Certificate Courses",
                                img: 'certificate-mobile.svg'
                            },
                            english: {
                                href: '/vertical/english',
                                title: "Learn English",
                                img: 'english-vertical-mobile-menu.svg',
                                border: true
                            },
                            premium: {
                                href: '/about/gopremium',
                                title: "Get Fhorge Premium (Remove Ads)",
                                img: 'premium-mobile.svg'
                            },
                            personality: {
                                href: '/psychometric-test/personality',
                                title: "Workplace Personality Assessment",
                                img: 'wpa-mobile.svg'
                            },
                            mental_health: {
                                href: '/psychometric-test/wellbeing',
                                title: "Mental Health Assessment",
                                img: 'mental-health-mobile.svg'
                            },
                            resume: {
                                href: ' /resume-builder ',
                                title: "Resumé Builder",
                                img: 'your-resume.svg'
                            },
                            blog: {
                                href: '/blog',
                                title: "Fhorge Blog",
                                img: 'blog-mobile.svg'
                            },
                            b2b: {
                                href: '/free-lms-programme',
                                title: "Fhorge For Business",
                                img: 'alison-business.svg'
                            },
                            app: {
                                href: '/mobile/online-learning-app',
                                title: "Download the Fhorge App",
                                img: 'mobile-app-mobile.svg'
                            },
                        },
                        career: {
                            title: "Explore Careers Categories",
                            img: 'careers.svg',
                            all: 'View All Categories',
                            all_href: '/careers',
                            data: careers
                        },
                        categories: {
                            title: "Explore Course Categories",
                            data: categories
                        }
                    }));
                    menu.addClass('loaded');
                }
                $('.darken').fadeIn();
                $('.icon-nb-menu').addClass('close');
                $('html, body').addClass('no-scroll');
                $('.for-mobile .nav__dd--user-menu').addClass('active');
                $(".mobile-scroll, .nav__c-sub, .for-mobile .nav__dd--scroll").mCustomScrollbar(scroll_settings);
                let minus = $('.header__outer').height()
                    , menu_height = 113 + minus;
                $('.for-mobile .nav__c-inner').css('min-height', 'calc(100vh - ' + minus + 'px)');
                $('.for-mobile .nav__c-sub').css('min-height', 'calc(100vh - ' + menu_height + 'px)');
                $('.for-mobile .nav__c--career .nav__c-sub').css('height', 'calc(100vh - ' + menu_height + 'px)');
            }
            $('.for-mobile .icon-search').on('click', function (e) {
                $('.header__search-input').slideToggle();
                $('.header__nav > .for-mobile .nav__dd--user-menu').removeClass('active');
            });
            $(document).on('click', '.activate-subnav', function (e) {
                if ($(e.target).parents('.nav__item--slide').length === 0) {
                    setTimeout(function () {
                        $('.subnav-active').mCustomScrollbar('disable', false);
                    }, 1000);
                    $(this).parents('.nav__dd--user-menu').toggleClass('subnav-active');
                    $(this).parents('.nav__dd-level-2').toggleClass('subnav-active');
                    if ($(window).height() < 720 && $(window).width() > 991) {
                        $("#mcs_container").mCustomScrollbar("scrollTo", 0, {
                            timeout: 0,
                            scrollInertia: 0,
                        });
                    } else {
                        $('.for-mobile > .nav__item > .nav__dd').mCustomScrollbar("scrollTo", 0, {
                            timeout: 0,
                            scrollInertia: 0,
                        });
                    }
                }
            });
            $(document).on('click', '.subnav-back', function () {
                $('.subnav-active').removeClass('subnav-active').mCustomScrollbar('update');
            });
            $(".nav__c-sub, .for-mobile .nav__dd--scroll, .nav__parent-categories").mCustomScrollbar(scroll_settings);
        });
        $(document).on('click', '.activate-dropdown.activated:not(.nav__item--languages)', function (e) {
            e.preventDefault();
        });
        $(document).on('click', '.darken, .activated', function (e) {
            closeMenus();
            closeMobileMenu();
            $('.darken').fadeOut();
            $('.hide-buy-cert').removeClass('hide-buy-cert');
        });
        function closeMenus(aff) {
            let close_aff = aff || true;
            $('.activated').removeClass('activated');
            if ($(window).width() > 800) {
                $('.nav__dd--visible').fadeOut();
            }
            if (close_aff) {
                closeAffMessage();
            }
            $('.open').removeClass('open fast');
            $('.darken').fadeOut();
            $('.lms-b__button--active, .nav__dd--visible').removeClass('lms-b__button--active, nav__dd--visible');
        }
        function closeMobileMenu() {
            $('.nav__dd--user-menu.active').removeClass('active');
            $('.icon-nb-menu').removeClass('close');
            $('.subnav-active').removeClass('subnav-active');
            $('html, body').removeClass('no-scroll');
            $('.open').removeClass('open fast');
            $('.lms-b__button').removeClass('lms-b__button--active');
            if ($('#mCSB_1').length > 0) {
                setTimeout(function () {
                    $(".mCSB_container").css("top", 0);
                }, 500);
            }
            $('.hide-buy-cert').removeClass('hide-buy-cert');
        }
        function closeAffMessage(openNew) {
            if (typeof openNew !== 'undefined' && openNew) {
                $('.aff__message').fadeOut(function () {
                    $('.a-link').fadeIn();
                });
                $('body').addClass('aff-open');
            } else {
                $('.aff-over').fadeOut();
                $('.coin--active').removeClass('coin--active');
                $('.aff__message, .a-link').fadeOut();
                $('body').removeClass('aff-open');
            }
        }
        function fitMenus() {
            if (vh < 670) {
                let nav_vat = $('.scroll-height');
                $('.for-desktop .nav__item--b').find('.nav__c, .nav__dd--cats').css('max-height', 'calc(100vh - ' + (header_outer.height() + 30) + 'px)');
                nav_vat.css({
                    'max-height': 'calc(' + $('.nav__dd--cats').height() + 'px - 220px)',
                    overflow: 'hidden'
                }).mCustomScrollbar({
                    theme: '3d',
                    scrollbarPosition: 'inside',
                    autoHideScrollbar: false,
                    documentTouchScroll: true
                });
            }
            if ($(window).width() > 991) {
                if (vh < 750) {
                    $('.nav__dd--career').css('max-height', 'calc(100vh - ' + (header_outer.height() + 30) + 'px)');
                    $(".nav__dd--l-scroll .nav__dd-inner").css({
                        'max-height': 'calc(100vh - (' + (header_outer.height() + 30) + 'px)',
                        overflow: 'hidden'
                    }).mCustomScrollbar(scroll_settings);
                } else {
                    $(".nav__dd--l-scroll").mCustomScrollbar(scroll_settings);
                }
            } else {
                $(".nav__dd--l-scroll").mCustomScrollbar(scroll_settings);
            }
        }
    </script>
    <script>
        var route_name = "site.home";
        if (window.location.hash !== '#event=login') {
            $('input[name=route_name]').val(route_name);
        }
        $(document).ready(function () {
            if (location.hash === '#forgotpassword') {
                $('li.tab').hide();
                $('#forgotpassword').show();
            }
            $(document).on('click', '.password-toggle', function () {
                $(this).toggleClass("icon-visible-green");
                var input = $(this).parent().find('input');
                if (input.attr("type") == "password") {
                    input.attr("type", "text");
                } else {
                    input.attr("type", "password");
                }
            });
            $(document).on('click', '.tab-title', function (e) {
                if ($(this).attr('data-url')) {
                    return;
                }
                e.preventDefault();
                e.stopImmediatePropagation();
                if (!$(this).hasClass('active')) {
                    var attrName = $(this).attr('data-name');
                    var elemName = $.find('#' + attrName);
                    if (attrName === 'login' || attrName === 'signup' || attrName === 'forgotpassword' || attrName === 'login_as_publisher') {
                        if (!($(this).hasClass('active'))) {
                            $(this).insertBefore($(this).prev());
                        }
                        if (attrName === 'login') {
                            $('#welcome').show();
                            $('#join-us').hide();
                            $('.tab-title').removeClass('active');
                            $('.inner-modal').hasClass('forgot') && $('.inner-modal').removeClass('forgot');
                        } else if (attrName === 'signup') {
                            $('#welcome').hide();
                            $('#join-us').show();
                            $('.tab-title').removeClass('active');
                            $('.inner-modal').hasClass('forgot') && $('.inner-modal').removeClass('forgot');
                        } else if (attrName === 'login_as_publisher') {
                            $('#welcome').hide();
                            $('#join-us').show();
                            $('.tab-title').removeClass('active');
                            $('.inner-modal').hasClass('forgot') && $('.inner-modal').removeClass('forgot');
                        } else {
                            $('.inner-modal').addClass('forgot');
                            $('.tab-title').removeClass('active');
                        }
                    }
                    $(this).siblings('.tab-title').removeClass('active');
                    $(this).addClass('active');
                    $('.tab-content').find(elemName).siblings().removeClass('active').hide();
                    $('.tab-content').find(elemName).fadeIn('fast').addClass('active');
                }
            });
            var errors = $.find('.error-message');
            if (errors.length) {
                var tab = $(errors).first().closest('.tab');
                $(tab).parent().children().removeClass('active');
                $(tab).addClass('active');
            }
            $(document).on('click', '.login-links', function (e) {
                loadScript('https://apis.google.com/js/api:client.js', function () {
                    var auth2, startApp = function () {
                        gapi.load('auth2', function () {
                            var client_id = $('body').attr('data-gclient_id');
                            auth2 = gapi.auth2.init({
                                client_id: client_id,
                                cookiepolicy: 'single_host_origin',
                            });
                            redirectUser(document.getElementById('google-custom'));
                        });
                    };
                    function redirectUser(element) {
                        auth2.attachClickHandler(element, {}, function (googleUser) {
                            var response = googleUser.getAuthResponse(true);
                            window.location = window.location.protocol + '//' + window.location.hostname + '/auth/google-token-sign-in/' + response.id_token + '?redirect_url=&route_name=site.home';
                        }, function (error) {
                            console.log(JSON.stringify(error));
                        });
                    }
                    startApp();
                });
            });
            if ($('.login-modal').length > 0) {
                $(document).on('click', 'header .login-links > a', function (e) {
                    e.preventDefault();
                    let button = $(this);
                    if ($('#login').length === 0) {
                        let lang = {
                            'signup': "Sign Up",
                            'login': "Log In",
                            'login_as_publisher': "Log In as Publisher",
                            'firstname': "First Name",
                            'lastname': "Surname",
                            'email': "E-mail",
                            'password': "Password",
                            'accept': 'I agree to the <a href="/about/terms-of-use" target="_blank">Terms and Conditions</a>',
                            'accept_emails': "Yes, I want to get the most out of Fhorge by receiving tips, updates and exclusive offers.",
                            'please_accept': "Please agree to Terms & Conditions to continue",
                            'login_gohome': "Back to Homepage",
                            'have_account': "Already have a Fhorge account?",
                            'dont_have_account': "Don't have a Fhorge account?",
                            'join_us': "Sign Up For Free",
                            'register_to_continue': "Sign up for free to continue learning",
                            'signup_sub_text': "Join the World’s Largest Free Learning Community",
                            'welcome_back': "Welcome Back!",
                            'login_to_continue': "Log in to continue",
                            'please_login': "Please login to continue",
                            'checkout_1': "What will you learn today? Find out, with Fhorge.",
                            'remember': "Keep me logged in",
                            'forgot_password': "Forgot password?",
                            'dont_have_publishing_account': "Don't have a Publisher account?"
                        }
                            , route = {
                                'register_url': 'register',
                                'login_url': '/login',
                                'publisher_url': '/login-as-publisher',
                                'home_url': '',
                                'current_url': '',
                                'route_name': 'site.home',
                                'previous_url': '/',
                                'courses_url': '/courses',
                                'self_publish_url': '/publish/self-publishing',
                            };
                        loadScript('html/site/js/auth-partials.js', function () {
                            let template = Handlebars.partials['auth-container']({
                                lang: lang,
                                routes: route,
                                idle_modal: true,
                                token: $('[name="csrf-token"]').attr('content'),
                                enable_marketing_checkbox: "" === "true" ? true : false,
                            });
                            $('.tab-content').append(template);
                            button.hasClass('login-mobile') ? showLoginTab() : showRegisterTab();
                        });
                    } else {
                        $(this).hasClass('login-mobile') ? showLoginTab() : showRegisterTab();
                    }
                    if ($(window).width() < 768) {
                        $("html, body").animate({
                            scrollTop: 0
                        }, 100);
                    }
                });
            }
            window.showRegisterTab = function () {
                $('#login.tab').removeClass('active').hide();
                $('#publishing_login.tab').removeClass('active').hide();
                $('#signup.tab').addClass('active').show();
                $('.login-modal').addClass('register').fadeIn();
                $('.login-tab').removeClass('active');
                $('.login-as-publisher').removeClass('active');
                $('.register-tab').addClass('active');
                if ($(window).width() > 768) {
                    $('body').addClass('no-scroll');
                }
            }
                ;
            window.showLoginTab = function () {
                $('#login.tab').addClass('active').show().next().removeClass('active').hide().next().removeClass('active').hide();
                $('.login-modal').removeClass('register').fadeIn();
                $('.register-tab').removeClass('active');
                $('.login-as-publisher').removeClass('active');
                $('.login-tab').addClass('active');
                if ($(window).width() > 768) {
                    $('body').addClass('no-scroll');
                }
            }
        });
        if ($('.modal-outer').length > 0) {
            $(document).on('click', '.close-modal', function (e) {
                $('.login-modal').fadeOut();
                $('body').removeClass('no-scroll');
            });
            $(document).on('click', '.login-modal', function (e) {
                var empty = true;
                $('.modal-outer .form-control').each(function () {
                    if ($(this).val() !== '') {
                        empty = false;
                    }
                });
                if (e.target.className === 'login-modal' && empty === true) {
                    if ($('.topic-modal').length == 0) {
                        $('.login-modal').fadeOut();
                        $('body').removeClass('no-scroll');
                    }
                }
            });
        }
        $(document).on('click', '.login-modal .switch-tab', function (e) {
            e.preventDefault();
            $(window).scrollTop(0);
            $('.switch-tab.active').removeClass('active');
            $('.switch-tab a[href="' + $(this).find('a').attr('href') + '"]').parents('.switch-tab').addClass('active');
            if ($(this).hasClass('login-as-publisher')) {
                $('#signup.tab').removeClass('active').hide();
                $('#login.tab').removeClass('active').hide();
                $('#publishing_login.tab').addClass('active').show();
            } else if ($(this).hasClass('login-account')) {
                $('#signup.tab').removeClass('active').hide();
                $('#publishing_login.tab').removeClass('active').hide();
                $('#login.tab').addClass('active').show();
            } else if ($(this).hasClass('register-tab')) {
                $('#login.tab').removeClass('active').hide();
                $('#publishing_login.tab').removeClass('active').hide();
                $('#signup.tab').addClass('active').show();
            }
        });
        if ($('.login-modal').length > 0) {
            if ($('.inner-modal #login .error-message').length > 0) {
                $('.login-modal').fadeIn(function () {
                    $('.inner-modal').fadeIn();
                })
            }
            if ($('.inner-modal #publishing_login .error-message').length > 0) {
                $('#signup.tab').removeClass('active').hide();
                $('#login.tab').removeClass('active').hide();
                $('.login-tab').removeClass('active');
                $('.login-as-publisher').addClass('active');
                $('#publishing_login.tab').addClass('active').show();
                $('.login-modal').fadeIn(function () {
                    $('.inner-modal').fadeIn();
                })
            } else if ($('.inner-modal #signup .error-message').length > 0) {
                $('#signup').addClass('active').show().prev().removeClass('active').hide();
                $('.login-modal').fadeIn(function () {
                    $('.inner-modal').fadeIn();
                });
            }
        }
        $(document).on('click', '.social-login__link a', function (e) {
            e.preventDefault();
            if (!$(this).hasClass('active')) {
                $('.social-login__link a.active').removeClass('active');
            }
            var signup = $('#signup:visible').length > 0
                , link = $(this).attr('href');
            $('#social-form input[type=submit]').unbind('click');
            if ($(this).hasClass('active') && signup) {
                $(this).removeClass('active');
                $('.hide-on-social').show();
                $('.social-signup').hide();
                $('.slide-on-social').slideDown();
                return;
            }
            if (signup) {
                $('#signup .icon-group a.active').removeClass('active');
                $(this).addClass('active');
                $('.hide-on-social').hide();
                $('.social-signup').show();
                $('.slide-on-social').slideUp();
                $('#social-form input[type=submit]').click(function (e) {
                    e.preventDefault();
                    var error = $('.s-t-error');
                    if ($('#signup_tc_social:checked').length > 0) {
                        $('#signup_tc_social').removeClass('error');
                        error.hide();
                        var accept = 1;
                        if ($('#signup_emails_social').length !== 0) {
                            accept = $('#signup_emails_social:checked').length;
                        }
                        loadSocialPopup(link + '?signup_emails=' + accept);
                    } else {
                        $('#signup_tc_social').addClass('error');
                        if (error.length > 0) {
                            error.show();
                        } else {
                            $(' .social-signup .tc-check').after('<div class="errors terms-error s-t-error"><span class="icon-error"></span>' + '<span class="error-message">Please agree to Terms &amp; Conditions to continue</span>' + '</div>');
                        }
                    }
                });
            } else {
                loadSocialPopup(link);
            }
        });
        $(document).on('click', '.signup-button', function (e) {
            e.preventDefault();
            var error = $('.t-error');
            if ($('#signup_tc:checked').length > 0) {
                var regex = /^([a-zA-Z '-]*)$/
                    , submit = true;
                $(".name-errors").remove();
                if (!regex.test($("#firstName").val())) {
                    addNameError("The firstname is in an invalid format");
                    submit = false;
                }
                if (!regex.test($("#lastName").val())) {
                    addNameError("The lastname is in an invalid format");
                    submit = false;
                }
                if (submit) {
                    error.hide();
                    $('#signup-form').submit();
                }
            } else {
                if (error.length > 0) {
                    error.show();
                } else {
                    $(' #signup_tc + .tc-check').after('<div class="errors terms-error t-error"><span class="icon-error"></span>' + '<span class="error-message">Please agree to Terms &amp; Conditions to continue</span>' + '</div>');
                }
            }
        });
        $(document).on('click', '.tc-check', function (e) {
            e.preventDefault();
            if ($(e.target).attr('target') === '_blank') {
                window.open($(e.target).attr('href'), '_blank');
                return
            }
            $('.tc-check').prev().prop('checked', !$(this).prev().is(':checked'));
        });
        $(document).on('click', '.email-check', function (e) {
            e.preventDefault();
            $('.email-check').prev().prop('checked', !$(this).prev().is(':checked'))
        });
        function loadSocialPopup(link) {
            if (link.indexOf("google") > 0) {
                $("#google-custom").click();
            } else {
                var socialWindow = window.open(link, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
                window.addEventListener("message", receiveMessage, false);
                function receiveMessage(event) {
                    if (event.data.indexOf('-close') > -1) {
                        socialWindow.close();
                        if (window.location.hash === '#event=login') {
                            $('.loading').fadeIn();
                            window.location.href = $('input[name=current]').val();
                        } else {
                            url = event.data.split('-close')[0];
                            window.location.href = url.split('#')[0];
                        }
                    }
                }
            }
        }
        function addNameError(error) {
            $(".input-field-email").before("<div class='errors name-errors'>" + "<span class='icon-error'></span>" + "<span class='error-message'>" + error + "</span>" + "</div>" + "<div class='clearfix'></div>");
        }
        $(document).on('submit', 'form[name=login-form]', function (e) {
            $(this).blur();
        }).find('input').bind('keypress', function (e) {
            if (e.keyCode == 13) {
                $(this).blur();
            }
        });
    </script>
    <script>
        $(document).ready(function () {
            var categories = $('.cat-ft ul');
            var listitems = categories.children('li').get();
            listitems.sort(function (a, b) {
                return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
            });
            $.each(listitems, function (index, item) {
                categories.append(item);
            });
            $('.scroll-to-top').click(function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        });
    </script>
    <script>
        $('.sale .close, .announcement .close').click(function (e) {
            e.preventDefault();
            $('#dashboard .progress, .public-profile .preview-banner, #dashboard').addClass('sale-closed');
            $('.' + banner_type).slideUp('fast').removeClass('active');
            $('body, header').removeClass('sale-active announcement-active');
            $('.sidebar').removeClass('announcement-active');
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem(banner_type + '_banner_closed_at', Math.floor(Date.now() / 1000));
            }
        });
        $('.countdown__timer:not(.started)').each(function () {
            if ($(this).attr('data-time') !== undefined) {
                countDown($(this));
            }
        });
    </script>
    <script>
        if (typeof localStorage !== "undefined") {
            localStorage.removeItem('afm');
            localStorage.removeItem('fraudWarningSeen');
        }
        $(document).ready(function () {
            $('.coin').off('click').on('click', function () {
                if ($('.coin--active').length === 0) {
                    closeMenus();
                    $('body').addClass('no-scroll');
                    $('.aff-over').fadeIn();
                    $(this).addClass('coin--active');
                    $('.aff__message--not-affiliate').fadeIn();
                } else {
                    $('body').removeClass('no-scroll');
                    $('.aff-over').fadeOut();
                    $('.coin--active').removeClass('coin--active');
                    $('.aff__message--not-affiliate').fadeOut();
                }
            });
            $('.aff-over, .aff__close').click(function () {
                $('.aff-over').fadeOut();
                $('.coin--active').removeClass('coin--active');
                $('.aff__message').fadeOut();
            });
        });
    </script>

    <link rel="preload" href="https://cdn01.alison-static.net/public/html/site/css/scrollbar.css" as="style"
        onload="this.onload=null;this.rel='stylesheet'">

        