!function(v, l, a, e) {
    var t = {
        init: function() {
            t.markView(), v(l).on({
                resize: t.markView,
                orientationchange: t.markView
            });
        },
        markView: function() {
            var a, e, t = l.innerWidth, s = v("body"), i = {
                s: "mobile",
                m: "tablet",
                l: "desktop"
            };
            s.hasClass(i.s) ? e = i.s : s.hasClass(i.m) ? (e = i.m, s.hasClass(i.ml) && (e += " " + i.ml)) : s.hasClass(i.l) && (e = i.l), 
            v(l).height(), a = 991 < t ? i.l : t < 992 && 767 < t ? i.m : i.s, s.removeClass(i.s).removeClass(i.m).removeClass(i.l).addClass(a), 
            e != a && s.trigger("viewchange", {
                orgView: e,
                newView: a
            });
        }
    }, s = function() {
        v(".mobile-menu-trigger").click(function() {
            v(this).closest(".main-header__container").find(".fa-angle-down").toggleClass("display-none"), 
            v(this).closest(".main-header__container").find(".fa-angle-up").toggleClass("display-none"), 
            v(".mobile-menu").toggleClass("mobile-menu-active");
        });
    }, i = function() {
        v(".dropdown-toggle").click(function() {
            v(this).closest(".dropdown").find(".dropdown-menu").toggleClass("show");
        }), v("body").on("click", function(a) {
            v(a.target).is(".dropdown-toggle") || v(".dropdown-menu").removeClass("show");
        });
    }, b = {
        init: function() {
            v("body").on("click", ".contact-send", function() {
                v(".contact-message-notification").css("display", "none");
                var a = v(".contact-name"), e = v(".contact-email"), t = v(".contact-phone"), s = v(".contact-title"), i = v(".contact-message"), l = v(".contact-success").val(), n = v(".contact-email-fail").val(), c = v(".contact-fails").val(), o = v(".blank"), d = v(".success"), r = v(".invalid-email"), m = "";
                b.checkValidateEmpty(a) ? a.removeClass("border-fail") : (m += " Tên,", a.addClass("border-fail")), 
                b.checkValidateEmpty(e) ? b.checkValidateEmail(e.val()) ? e.removeClass("border-fail") : r.text(n).addClass("error").css("display", "block") : (m += " Email,", 
                e.addClass("border-fail")), b.checkValidateEmpty(t) ? t.removeClass("border-fail") : (m += " Số điện thoại,", 
                t.addClass("border-fail")), b.checkValidateEmpty(s) ? s.removeClass("border-fail") : (m += " Tiêu đề,", 
                s.addClass("border-fail")), b.checkValidateEmpty(i) ? (m = m.substring(0, m.length - 1), 
                i.removeClass("border-fail")) : (m += " Thông điệp", i.addClass("border-fail")), 
                0 < m.length ? o.text(c + m).addClass("error").css("display", "block") : b.checkValidateEmail(e.val()) && d.text(l).removeClass("error").css("display", "block");
            });
        },
        checkValidateEmail: function(a) {
            return /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/.test(a);
        },
        checkValidateEmpty: function(a) {
            return 0 < a.val().length;
        }
    }, n = function() {
        v(".next-tab1").click(function() {
            v(".nav-tabs li a").removeClass("active"), v(".tab1").addClass("active");
        }), v(".next-tab2").click(function() {
            v(".nav-tabs li a").removeClass("active"), v(".tab2").addClass("active");
        }), v(".next-tab3").click(function() {
            v(".nav-tabs li a").removeClass("active"), v(".tab3").addClass("active");
        }), v(".next-tab4").click(function() {
            v(".nav-tabs li a").removeClass("active"), v(".tab4").addClass("active");
        }), v(".next-tab5").click(function() {
            v(".nav-tabs li a").removeClass("active"), v(".tab5").addClass("active");
        }), v(".next-tab6").click(function() {
            v(".nav-tabs li a").removeClass("active"), v(".tab6").addClass("active");
        }), v(".next-tab7").click(function() {
            v(".nav-tabs li a").removeClass("active"), v(".tab7").addClass("active");
        });
    };
    v(a).ready(function() {
        t.init(), s(), b.init(), i(), n();
    });
}(jQuery, window, document);