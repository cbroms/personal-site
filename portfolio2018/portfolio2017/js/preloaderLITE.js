/*
  ___ ____
 / __|    |
/ /  |___ /
\ \__|    \
 \___|____|

code by CB -> www.christianbroms.com

File: preloaderLITE.js
Desc: loads all images on page to the cache
Created on: 07/02/17
Requires: index.html (for CDNs)
Dependants: index.html
CDN: jquery.min.js
Links to: None

*/

// preloading is beggining; give a visual indication
$(document).ready(function() {
  
  // prepping for the preloader by covering the body and adding or pausing css animations
  $("#wrapper").css("visibility", "hidden");
  $("body").css("overflow", "hidden");
  $("#fadingText").css("animation", "paused");

  // check if image is in the cache; if it isn't, load it 
  function isCached(src) {
    var img = new Image();
    img.src = src;
    return img.complete;
  }
  
  // retrive the src of all images in the page
  var imgs = document.getElementsByTagName("img");
  
  for (var i = 0; i < imgs.length; i++) {
    // check if the image has previously been cached
    isCached(imgs[i].src);
  }
});

// preloading is finished; revert page back to default
$(window).on('load', function() {
  
  // total time taken to load the page, including preloader
  var perfData = window.performance.timing; 
  var elapsedTime = Math.abs(perfData.loadEventEnd - perfData.navigationStart);
  var t = new Date(elapsedTime);
  var totalTime = t.getSeconds() / 100;
  console.log(totalTime);
  
  // page returns to normal
  $(".loader").fadeOut(); // fade out the loader and spinner
  $("#wrapper").css("visibility", "visible");
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
});
