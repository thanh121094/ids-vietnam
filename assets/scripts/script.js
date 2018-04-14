(function ($, window, document, undefined) {
  var myLazyLoader = {
    options: {
      bind: 'event',
      threshold: 300,
      effect: 'fadeIn',
      beforeLoad: function (element) {
        element.removeClass('lazyload').addClass('lazyload-loading');
      },
      afterLoad: function (element) {
        element.removeClass('lazyload-loading');
      },
      onError: function (element) {
        element.removeClass('lazyload-loading');
        console.log('image loading error: ' + element.attr('data-src'));
      }
    },
    load: function (item) {
      if (typeof item.lazy != 'undefined') {
        item.lazy(myLazyLoader.options);
      }
    }
  };

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
      headerHandler.submenuHandler();
      var nav = $('.nav');
      // JS for hamburger button
      $('.nav-icon3').click(function () {
        $(this).toggleClass('open');
        $('body').toggleClass('overflow-hidden');
        nav.animate({
          width: "toggle"
        });
        $('nav').toggleClass('nav-active');
        $('.animated-arrow').toggleClass('animated-arrow-active');
      });
      // End Js for humberger
      $('.overlapblackbg').click(function () {
        $('.nav-icon3').click();
      })
    },
    submenuHandler: function () {
      var flag = 0;
      $('.menu-click').click(function () {
        $('ul.wsmenu-submenu').not($(this).siblings()).slideUp();
        $(this).siblings('ul.wsmenu-submenu').slideToggle();
        if (flag === 0) {
          $(this).addClass('wssubmenu-active');
          flag = 1;
        } else if (flag === 1) {
          if ($(this).closest('li').find('.wssubmenu-active').is(":visible")) {
            $(this).removeClass('wssubmenu-active');
            flag = 0;
          } else {
            $('.wssubmenu-active').removeClass('wssubmenu-active');
            $(this).addClass('wssubmenu-active');
          }
        }
      });
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

  var tabsIntroduce = {
    init: function () {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      $('.tablinks span').click(function () {
        $(this).closest('.vinexad-detail-nav').find('.active').removeClass('active');
        $(this).addClass('active');
        var thisId = $(this).closest('.tablinks').attr('data-id');
        $('.tabcontent').css('display', 'none');
        $('.' + thisId).css('display', 'block');
      });
      $('.defaultOpen').css('display', 'block');
    }
  };

  var introduceSliderHandler = {
    init: function () {
      var swiper = new Swiper('.introduce-container', {
        pagination: '.swiper-pagination',
        paginationClickable: false,
        preventClicks: false,
        slidesPerView: 4,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
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
    }
  };
  var supportSliderHandler = {
    init: function () {
      var swiper = new Swiper('.support-container', {
        pagination: '.swiper-pagination',
        paginationClickable: false,
        preventClicks: false,
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 2500,
        loop: true,
        autoplay: {
          delay: 400,
          disableOnInteraction: false
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
    }
  };

  var foreignSliderHandler = {
    init: function () {
      var swiper = new Swiper('.foreign-container', {
        pagination: '.swiper-pagination',
        paginationClickable: false,
        preventClicks: false,
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 2500,
        loop: true,
        autoplay: {
          delay: 400,
          disableOnInteraction: false
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
    }
  };

  var mapHandler = {
    init: function () {
      if ($('#map').length > 0) {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
    }
  };
  // please modulize your functions so we can reuse/turn on & off easily
  $(document).ready(function () {
    myLazyLoader.load($('.lazyload'));
    responsiveHandler.init();
    headerHandler.init();
    validateContact.init();
    tabsIntroduce.init();
    introduceSliderHandler.init();
    supportSliderHandler.init();
    foreignSliderHandler.init();
    mapHandler.init();
    languageSelectHandler.init();
  });

})(jQuery, window, document);
