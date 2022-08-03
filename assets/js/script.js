let width = $(window).width();
let height = $(window).height();

AOS.init();

$('.hamburger').on('click', function() {
  $(this).toggleClass('opened');
  $('nav').slideToggle();
})

$('nav a').on('click', function() {
  $('.hamburger').removeClass('opened');
  $('nav').slideUp();
})

$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
});

$('.slider-set').slick({
  slidesToScroll: 1,
  slidesToShow: 1,
  asNavFor: '.slider-set-thumbnails',
});

$('.slider-set-thumbnails').slick({
  slidesToScroll: 1,
  slidesToShow: 1,
  asNavFor: '.slider-set',
  arrows: false
});

// Remove active class from all thumbnail slides
$('.slider-set-thumbnails .slick-slide').removeClass('slick-active');

// Set active class to first thumbnail slides
$('.slider-set-thumbnails .slick-slide').eq(0).addClass('slick-active');

// On before slide change match active thumbnail to current slide
$('.slider-set').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  var mySlideNumber = nextSlide;
  $('.slider-set-thumbnails .slick-slide').removeClass('slick-active');
  $('.slider-set-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
});

$(window).on('resize', function() {
    let width = $(window).width();
});
