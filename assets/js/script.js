let width = $(window).width();
let height = $(window).height();

AOS.init();

$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
});

$('.slider-set').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(window).on('resize', function() {
    let width = $(window).width();
});
