$(document).ready(function () {
  $('.menu-icon-expand').click(function () {
    $(this).parent().next().toggleClass('active');
  });
});

$(window).on("scroll", function () {
  var height = $(window).scrollTop();
  if(height >= 100){
    $('header').addClass('active');
  }
  else{
    $('header').removeClass('active');
  }
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


$('.swiperPartner').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        infinite: true,
        dots: false,
        arrows: false,
      }
    }
  ]
});

$('.slides-testimoni').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        infinite: true,
        dots: false,
        arrows: false,
      }
    }
  ]
});