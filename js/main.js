$(document).ready(function() {
    jQuery.expr.filters.offscreen = function(el) {
  var rect = el.getBoundingClientRect();
  return (
           (rect.x + rect.width) < 0 
             || (rect.y + rect.height) < 0
             || (rect.x > window.innerWidth || rect.y > window.innerHeight)
         );
};



});

$(window).scroll(function() {
    // User is scrolling
    //console.log( $('#header').is(':offscreen'));
    console.log("yay");
});



