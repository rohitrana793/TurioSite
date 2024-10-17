$(document).ready(function(){
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-up"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-down"></i></button>',
        fade:true,
        autoplay:true,
        autoplaySpeed: 3000,

    });
  });
//   $('.d-grid-col-3').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//   });
 