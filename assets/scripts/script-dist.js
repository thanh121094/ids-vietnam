!function(f, l, a, e) {
    var i = {
        init: function() {
            i.markView(), f(l).on({
                resize: i.markView,
                orientationchange: i.markView
            });
        },
        markView: function() {
            var a, e, i = l.innerWidth, s = f("body"), t = {
                s: "mobile",
                m: "tablet",
                l: "desktop"
            };
            s.hasClass(t.s) ? e = t.s : s.hasClass(t.m) ? (e = t.m, s.hasClass(t.ml) && (e += " " + t.ml)) : s.hasClass(t.l) && (e = t.l), 
            f(l).height(), a = 991 < i ? t.l : i < 992 && 767 < i ? t.m : t.s, s.removeClass(t.s).removeClass(t.m).removeClass(t.l).addClass(a), 
            e != a && s.trigger("viewchange", {
                orgView: e,
                newView: a
            });
        }
    }, s = function() {
        f(".mobile-menu-trigger").click(function() {
            f(this).closest(".main-header__container").find(".fa-angle-down").toggleClass("display-none"), 
            f(this).closest(".main-header__container").find(".fa-angle-up").toggleClass("display-none"), 
            f(".mobile-menu").toggleClass("mobile-menu-active");
        });
    }, t = function() {
        f(".dropdown-toggle").click(function() {
            f(this).closest(".dropdown").find(".dropdown-menu").toggleClass("show");
        }), f("body").on("click", function(a) {
            f(a.target).is(".dropdown-toggle") || f(".dropdown-menu").removeClass("show");
        });
    }, g = {
        init: function() {
            f("body").on("click", ".contact-send", function() {
                f(".contact-message-notification").css("display", "none");
                var a = f(".contact-name"), e = f(".contact-email"), i = f(".contact-phone"), s = f(".contact-title"), t = f(".contact-message"), l = f(".contact-success").val(), n = f(".contact-email-fail").val(), o = f(".contact-fails").val(), c = f(".blank"), r = f(".success"), d = f(".invalid-email"), m = "";
                g.checkValidateEmpty(a) ? a.removeClass("border-fail") : (m += " Tên,", a.addClass("border-fail")), 
                g.checkValidateEmpty(e) ? g.checkValidateEmail(e.val()) ? e.removeClass("border-fail") : d.text(n).addClass("error").css("display", "block") : (m += " Email,", 
                e.addClass("border-fail")), g.checkValidateEmpty(i) ? i.removeClass("border-fail") : (m += " Số điện thoại,", 
                i.addClass("border-fail")), g.checkValidateEmpty(s) ? s.removeClass("border-fail") : (m += " Tiêu đề,", 
                s.addClass("border-fail")), g.checkValidateEmpty(t) ? (m = m.substring(0, m.length - 1), 
                t.removeClass("border-fail")) : (m += " Thông điệp", t.addClass("border-fail")), 
                0 < m.length ? c.text(o + m).addClass("error").css("display", "block") : g.checkValidateEmail(e.val()) && r.text(l).removeClass("error").css("display", "block");
            });
        },
        checkValidateEmail: function(a) {
            return /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/.test(a);
        },
        checkValidateEmpty: function(a) {
            return 0 < a.val().length;
        }
    }, n = function() {
        f(".c-tabs__next-trigger").click(function() {
            f(this).closest("article").find(".nav-tabs li.active + li").tabs("click");
        });
    };
    f(a).ready(function() {
        i.init(), s(), g.init(), t(), n();
    });
}(jQuery, window, document);