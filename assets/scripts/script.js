(function ($, window, document, undefined) {
  var responsiveHandler = {
    init: function () {
      responsiveHandler.markView();
      $(window).on({
        resize: responsiveHandler.markView,
        orientationchange: responsiveHandler.markView
      });
    },
    markView: function () {
      var w = window.innerWidth;
      //var ori = window.orientation;
      var body = $('body');
      var v = {s: 'mobile', m: 'tablet', l: 'desktop'};  // class names
      var c, portLand, orgView;

      // determine orginal view
      if (body.hasClass(v.s)) {
        orgView = v.s;
      } else if (body.hasClass(v.m)) {
        orgView = v.m;
        if (body.hasClass(v.ml)) {
          orgView += ' ' + v.ml;
        }
      } else if (body.hasClass(v.l)) {
        orgView = v.l;
      }

      // determine new view
      portLand = w > $(window).height() ? 'landscape' : 'portrait';  // w == h is portrait in CSS media query
      if (w > 991) {
        c = v.l;
      } else if (w < 992 && w > 767) {
        c = v.m;
      }
      else {
        c = v.s;
      }

      // apply new view
      body.removeClass(v.s).removeClass(v.m).removeClass(v.l).addClass(c);

      // trigger event
      if (orgView != c) {
        body.trigger('viewchange', {orgView: orgView, newView: c});
      }
    }
  };

  var headerHandler = {
    init: function () {
      $('.mobile-menu-trigger').click(function () {
        $(this).closest('.main-header__container').find('.fa-angle-down').toggleClass('display-none');
        $(this).closest('.main-header__container').find('.fa-angle-up').toggleClass('display-none');
        $('.mobile-menu').toggleClass('mobile-menu-active');
      })
    }
  };

  var languageSelectHandler = {
    init: function () {
      $('.dropdown-toggle').click(function () {
        $(this).closest(".dropdown").find(".dropdown-menu").toggleClass("show");
      });
      $('body').on('click',function(event){
        if(!$(event.target).is('.dropdown-toggle')){
          $(".dropdown-menu").removeClass('show');
        }
      });
    }
  };

  var validateContact = {
    init: function () {
      $('body').on('click', '.contact-send', function () {
        $('.contact-message-notification').css('display', 'none');
        var contactName = $('.contact-name');
        var contactEmail = $('.contact-email');
        var contactPhone = $('.contact-phone');
        var contactTitle = $('.contact-title');
        var contactMessage = $('.contact-message');
        var contactSuccess = $('.contact-success').val();
        var contactEmailFail = $('.contact-email-fail').val();
        var contactFails = $('.contact-fails').val();
        var notifyBlank = $('.blank');
        var notifySuccess = $('.success');
        var notifyInvalidEmail = $('.invalid-email');

        var blankMessage = '';
        if (!validateContact.checkValidateEmpty(contactName)) {
          blankMessage += ' Tên,';
          contactName.addClass('border-fail');
        } else {
          contactName.removeClass('border-fail');
        }
        if (!validateContact.checkValidateEmpty(contactEmail)) {
          blankMessage += ' Email,';
          contactEmail.addClass('border-fail');
        } else {
          if (!(validateContact.checkValidateEmail(contactEmail.val()))) {
            notifyInvalidEmail.text(contactEmailFail).addClass('error').css('display', 'block');
          } else {
            contactEmail.removeClass('border-fail');
          }
        }
        if (!validateContact.checkValidateEmpty(contactPhone)) {
          blankMessage += ' Số điện thoại,';
          contactPhone.addClass('border-fail');
        } else {
          contactPhone.removeClass('border-fail');
        }
        if (!validateContact.checkValidateEmpty(contactTitle)) {
          blankMessage += ' Tiêu đề,';
          contactTitle.addClass('border-fail');
        } else {
          contactTitle.removeClass('border-fail');
        }
        if (!validateContact.checkValidateEmpty(contactMessage)) {
          blankMessage += ' Thông điệp';
          contactMessage.addClass('border-fail');
        } else {
          blankMessage = blankMessage.substring(0, blankMessage.length - 1);
          contactMessage.removeClass('border-fail');
        }
        if (blankMessage.length > 0) {
          notifyBlank.text(contactFails + blankMessage).addClass('error').css('display', 'block');
        } else {
          if (validateContact.checkValidateEmail(contactEmail.val())) {
            notifySuccess.text(contactSuccess).removeClass('error').css('display', 'block');
          }
        }
      });
    },
    checkValidateEmail: function (email) {
      var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
      return regex.test(email);
    },
    checkValidateEmpty: function (object) {
      if (object.val().length > 0) {
        return true;
      }
      return false;
    }
  };

  var serviceTab = {
    init: function () {
      $('.next-tab1').click(function () {
        $('.nav-tabs li a').removeClass('active');
        $('.tab1').addClass('active');
      });
      $('.next-tab2').click(function () {
        $('.nav-tabs li a').removeClass('active');
        $('.tab2').addClass('active');
      });
      $('.next-tab3').click(function () {
        $('.nav-tabs li a').removeClass('active');
        $('.tab3').addClass('active');
      });
      $('.next-tab4').click(function () {
        $('.nav-tabs li a').removeClass('active');
        $('.tab4').addClass('active');
      });
      $('.next-tab5').click(function () {
        $('.nav-tabs li a').removeClass('active');
        $('.tab5').addClass('active');
      });
      $('.next-tab6').click(function () {
        $('.nav-tabs li a').removeClass('active');
        $('.tab6').addClass('active');
      });
      $('.next-tab7').click(function () {
        $('.nav-tabs li a').removeClass('active');
        $('.tab7').addClass('active');
      })
    }
  };

  // please modulize your functions so we can reuse/turn on & off easily
  $(document).ready(function () {
    responsiveHandler.init();
    headerHandler.init();
    validateContact.init();
    languageSelectHandler.init();
    serviceTab.init();
  });

})(jQuery, window, document);
