!function(m, t, i, e) {
    var a = {
        options: {
            bind: "event",
            threshold: 300,
            effect: "fadeIn",
            beforeLoad: function(e) {
                e.removeClass("lazyload").addClass("lazyload-loading");
            },
            afterLoad: function(e) {
                e.removeClass("lazyload-loading");
            },
            onError: function(e) {
                e.removeClass("lazyload-loading"), console.log("image loading error: " + e.attr("data-src"));
            }
        },
        load: function(e) {
            void 0 !== e.lazy && e.lazy(a.options);
        }
    }, s = {
        init: function() {
            s.markView(), m(t).on({
                resize: s.markView,
                orientationchange: s.markView
            });
        },
        markView: function() {
            var e, a, i = t.innerWidth, s = m("body"), n = {
                s: "mobile",
                m: "tablet",
                l: "desktop"
            };
            s.hasClass(n.s) ? a = n.s : s.hasClass(n.m) ? (a = n.m, s.hasClass(n.ml) && (a += " " + n.ml)) : s.hasClass(n.l) && (a = n.l), 
            m(t).height(), e = 991 < i ? n.l : i < 992 && 767 < i ? n.m : n.s, s.removeClass(n.s).removeClass(n.m).removeClass(n.l).addClass(e), 
            a != e && s.trigger("viewchange", {
                orgView: a,
                newView: e
            });
        }
    }, n = {
        init: function() {
            n.submenuHandler();
            var e = m(".nav");
            m(".nav-icon3").click(function() {
                m(this).toggleClass("open"), m("body").toggleClass("overflow-hidden"), e.animate({
                    width: "toggle"
                }), m("nav").toggleClass("nav-active"), m(".animated-arrow").toggleClass("animated-arrow-active");
            }), m(".overlapblackbg").click(function() {
                m(".nav-icon3").click();
            });
        },
        submenuHandler: function() {
            var e = 0;
            m(".menu-click").click(function() {
                m("ul.wsmenu-submenu").not(m(this).siblings()).slideUp(), m(this).siblings("ul.wsmenu-submenu").slideToggle(), 
                0 === e ? (m(this).addClass("wssubmenu-active"), e = 1) : 1 === e && (m(this).closest("li").find(".wssubmenu-active").is(":visible") ? (m(this).removeClass("wssubmenu-active"), 
                e = 0) : (m(".wssubmenu-active").removeClass("wssubmenu-active"), m(this).addClass("wssubmenu-active")));
            });
        }
    }, l = function() {
        m(".dropdown-toggle").click(function() {
            m(this).closest(".dropdown").find(".dropdown-menu").toggleClass("show");
        }), m("body").on("click", function(e) {
            m(e.target).is(".dropdown-toggle") || m(".dropdown-menu").removeClass("show");
        });
    }, u = {
        init: function() {
            m("body").on("click", ".contact-send", function() {
                m(".contact-message-notification").css("display", "none");
                var e = m(".contact-name"), a = m(".contact-email"), i = m(".contact-phone"), s = m(".contact-title"), n = m(".contact-message"), t = m(".contact-success").val(), l = m(".contact-email-fail").val(), o = m(".contact-fails").val(), c = m(".blank"), r = m(".success"), d = m(".invalid-email"), p = "";
                u.checkValidateEmpty(e) ? e.removeClass("border-fail") : (p += " Tên,", e.addClass("border-fail")), 
                u.checkValidateEmpty(a) ? u.checkValidateEmail(a.val()) ? a.removeClass("border-fail") : d.text(l).addClass("error").css("display", "block") : (p += " Email,", 
                a.addClass("border-fail")), u.checkValidateEmpty(i) ? i.removeClass("border-fail") : (p += " Số điện thoại,", 
                i.addClass("border-fail")), u.checkValidateEmpty(s) ? s.removeClass("border-fail") : (p += " Tiêu đề,", 
                s.addClass("border-fail")), u.checkValidateEmpty(n) ? (p = p.substring(0, p.length - 1), 
                n.removeClass("border-fail")) : (p += " Thông điệp", n.addClass("border-fail")), 
                0 < p.length ? c.text(o + p).addClass("error").css("display", "block") : u.checkValidateEmail(a.val()) && r.text(t).removeClass("error").css("display", "block");
            });
        },
        checkValidateEmail: function(e) {
            return /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/.test(e);
        },
        checkValidateEmpty: function(e) {
            return 0 < e.val().length;
        }
    }, o = function() {
        var e, a;
        for (a = i.getElementsByClassName("tabcontent"), e = 0; e < a.length; e++) a[e].style.display = "none";
        m(".tablinks span").click(function() {
            m(this).closest(".vinexad-detail-nav").find(".active").removeClass("active"), m(this).addClass("active");
            var e = m(this).closest(".tablinks").attr("data-id");
            m(".tabcontent").css("display", "none"), m("." + e).css("display", "block");
        }), m(".defaultOpen").css("display", "block");
    }, c = function() {
        new Swiper(".introduce-container", {
            pagination: ".swiper-pagination",
            paginationClickable: !1,
            preventClicks: !1,
            slidesPerView: 4,
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            spaceBetween: 30,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                450: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
    }, r = function() {
        new Swiper(".support-container", {
            pagination: ".swiper-pagination",
            paginationClickable: !1,
            preventClicks: !1,
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 2500,
            loop: !0,
            autoplay: {
                delay: 400,
                disableOnInteraction: !1
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                450: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
    }, d = function() {
        new Swiper(".foreign-container", {
            pagination: ".swiper-pagination",
            paginationClickable: !1,
            preventClicks: !1,
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 2500,
            loop: !0,
            autoplay: {
                delay: 400,
                disableOnInteraction: !1
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                450: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }
        });
    }, p = function() {
        if (0 < m("#map").length) {
            var e = {
                lat: -25.363,
                lng: 131.044
            }, a = new google.maps.Map(i.getElementById("map"), {
                zoom: 4,
                center: e
            });
            new google.maps.Marker({
                position: e,
                map: a
            });
        }
    };
    m(i).ready(function() {
        a.load(m(".lazyload")), s.init(), n.init(), u.init(), o(), c(), r(), d(), p(), l();
    });
}(jQuery, window, document);