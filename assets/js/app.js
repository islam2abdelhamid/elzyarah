$(function ($) {
  AOS.init();
  function checkScroll() {
    if ($(window).scrollTop() > 0) {
      $('#scroll-arrow').removeClass('scroll-bottom');
      $('#scroll-arrow').addClass('scroll-top');
    } else {
      $('#scroll-arrow').removeClass('scroll-top');
      $('#scroll-arrow').addClass('scroll-bottom');
    }
  }

  function scrollTo(position) {
    let scrollSpace;
    if (position === 'top') {
      scrollSpace = 0;
      $('#scroll-arrow').removeClass('scroll-top');
      $('#scroll-arrow').addClass('scroll-bottom');
    } else {
      scrollSpace = $('#medical-companies').offset().top;
      $('#scroll-arrow').removeClass('scroll-bottom');
      $('#scroll-arrow').addClass('scroll-top');
    }

    $('html, body').animate(
      {
        scrollTop: scrollSpace,
      },
      500
    );
  }

  checkScroll();

  $(document).scroll(function () {
    checkScroll();
  });

  $('#scroll-arrow').click(function () {
    if ($(this).hasClass('scroll-bottom')) {
      scrollTo('bottom');
    } else {
      scrollTo('top');
    }
  });
});
