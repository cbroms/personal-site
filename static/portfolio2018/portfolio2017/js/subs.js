/*
  ___ ____
 / __|    |
/ /  |___ /
\ \__|    \
 \___|____|

code by CB -> www.christianbroms.com

File: subs.js
Desc: additional jquery & js code for sub-pages
Created on: 07/02/17
Requires: index.html (for CDNs), owl.carousel.min.js
Dependants: landscape.html, night-landscape.html... all sub-htmls
CDN: jquery.min.js
Links to: None

*/

$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    navSpeed: 2000,
    dotsSpeed: 2000,
    dragEndSpeed: 2000,
    // animateIn: true
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  })


  $(function() {

    $("div.owl-prev").html("<img id='left' src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_down_48px-128.png'/>");
    $("div.owl-next").html("<img id='right' src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_down_48px-128.png'/>");
    $("#left").css("transform", "rotate(90deg)");
    $("#left").css("width", "40%");
    $("#left").css("height", "auto");
    $("#left").css("filter", "invert(100%)");
    $(".owl-prev").css("background", "rgba(255,255,255,0)");
    $("#right").css("transform", "rotate(-90deg)");
    $("#right").css("width", "40%");
    $("#right").css("height", "auto");
    $("#right").css("filter", "invert(100%)");
    $(".owl-next").css("background", "rgba(255,255,255,0)");

  });

  var clicks = 0;
  $('.owl-next').click( function() {
    clicks++;
    if(clicks === 1){
      $('.sub-pageh').css("opacity", "0");
      $('.sub-paged').css("opacity", "0");
      $('.return-home').css("opacity", "1");
      $('.return').css("transform", "rotate(135deg)");
      $('.return').css("filter", "invert(100%)");
      $(".return").css("width", "60%");
      $(".return").css("height", "auto");
    }
  });

  var drags = 0;
  $('.owl-drag').mouseup( function() {
    drags++;
    if (drags === 1) {
      $('.sub-pageh').css("opacity", "0");
      $('.sub-paged').css("opacity", "0");
      $('.return-home').css("opacity", "1");
      $('.return').css("transform", "rotate(135deg)");
      $('.return').css("filter", "invert(100%)");
      $(".return").css("width", "60%");
      $(".return").css("height", "auto");
    }
  });

  var swipes = 0;
  $('.owl-item').on("touchstart", function() {
    swipes++;
    if (swipes === 1) {
      $('.sub-pageh').css("opacity", "0");
      $('.sub-paged').css("opacity", "0");
      $('.return-home').css("opacity", "1");
      $('.return').css("transform", "rotate(135deg)");
      $('.return').css("filter", "invert(100%)");
      $(".return").css("width", "60%");
      $(".return").css("height", "auto");
    }
  });

});
