$(document).ready(function() {



 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});


$('.slider-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 4,
  asNavFor: '.slider-for',
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  swipe:true
});

$(".close").on("click", function(){


  $(".about").toggleClass("about-In");
  $(".picture-about").toggleClass("picture-In");
});

$(".close").on("click", function(){

$(".more-info").removeClass("more-info-anim");

 });

$(".bio-button").on("click", function(){

$(".more-info").toggleClass("more-info-anim");

 });

});




