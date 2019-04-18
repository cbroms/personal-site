/*
  ___ ____
 / __|    |
/ /  |___ /
\ \__|    \
 \___|____|

code by CB -> www.christianbroms.com

File: main.js
Desc: all jquery & js code for site
Created on: 06/24/17
Requires: index.html (for CDNs), owl.carousel.min.js
Dependants: all html
CDN: jquery.min.js, scrollreveal.min.js
Links to: None

*/




$(document).ready(function(){

  // smooth scroll between links
  $(function() {

    $("a").on('click', function(event) {

      if (window.location.pathname === this.pathname){

        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1500, function(){

            window.location.hash = hash;
          });
        }
      }
    });
  });

  // update url for hash on scroll
  $(function() {

    var currentHash = "#landing"
    $(document).scroll(function () {
      $('.section').each(function () {

        var distance = window.pageYOffset - $(this).offset().top;
        var hash = $(this).attr('id');

        if (distance < 30 && distance > -30 && currentHash != hash) {
          window.location.hash = (hash);
          currentHash = hash;
        }
      });
    });
  });

  // scroll reveal of select elements
  window.sr = ScrollReveal({duration: 3500, scale: 1, origin: 'top'});
  sr.reveal('.page-sub-desc');
  sr.reveal('.page-sub-header');
  sr.reveal('.return-home', {duration: 3500});
  sr.reveal('.text-page', {duration: 1000});
  sr.reveal('.row', {duration: 2000});
  sr.reveal('.square');
  sr.reveal('.sub-pageh', {duration: 3500, origin: 'right', distance: '100px'});
  sr.reveal('.sub-paged', {duration: 3500, origin: 'right', distance: '100px'});


  // borders behind images of work
  $(function() {

    if (window.innerWidth > 1217){
      var currw = parseInt($(".image-desc").css("padding-left"));
      var currh = parseInt($(".image-desc").css("padding-top"));

      for (var i = 1; i <= $('.img-fluid').length; i++){

        var img = document.getElementById("img" + i);
        var desc = document.getElementById("desc" + i);

        var diffw = img.offsetWidth - desc.offsetWidth;
        var diffh = img.offsetHeight - desc.offsetHeight;

        if (i <= 3){
          var add = 3; // kind of nasty specific values
        }
        else {
          var add = 13; // more values based on testing
        }
        $("#desc" + i).css("padding-left", diffw / 2 + currw + add);
        $("#desc" + i).css("padding-right", diffw / 2 + currw + add);
        $("#desc" + i).css("padding-top", diffh / 2 + currh);
        $("#desc" + i).css("margin-top", 16); // again, probably should make this scalable
        $("#desc" + i).css("padding-bottom", diffh / 2 + currh);
      }
    }
  });

  // prevent scroll interuptions with a passive listener
  addEventListener(document, "touchstart", function(e) {
    console.log(e.defaultPrevented);
    e.preventDefault();
    console.log(e.defaultPrevented);
  }, {passive: true});
});

$(window).on('load', function() {

  console.log("finished");

  $(".loader").fadeOut();
  $("#wrapper").css("visibility", "visible" );
  $("body").css("overflow", "auto");

  // setting up the animation time of the title name element on the page,
  // editing <div id="fadingText">
  var elt = document.getElementById('fadingText');
  // fade from white to grey of title text should vary in time due to the
  // different page sizes and the resulting differences in time of the
  // tree animation to complete
  if(window.innerWidth < 768) {
    elt.style.animation = 'nameFade 9s';
  }
  else if (window.innerWidth > 768 && window.innerWidth < 992) {
    elt.style.animation = 'nameFade 13s';
  }
  else if (window.innerWidth > 992 && window.innerWidth < 1200) {
    elt.style.animation = 'nameFade 15s';
  }
  else if(window.innerWidth > 1200) {
    elt.style.animation = 'nameFade 20s';
  }

  })
