$(document).ready(function(){ 
    $('nav').animate({top: '2vw', opacity: 1}, 1500)
  })
  // get scroll direction
  $(document).on( 'DOMMouseScroll mousewheel', function ( event ) {
    if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
        //scroll down
        hideNav()
      } else {
        //scroll up
        revealNav()
      }
    });
  var ts;
  $(document).bind('touchstart', function (e){
    ts = e.originalEvent.touches[0].clientY;
  });

  $(document).bind('touchend', function (e){
    let te = e.originalEvent.changedTouches[0].clientY;
    if (ts > te + 5) {
        // drag up
        hideNav()
      } else if (ts < te - 5) {
        // drag down
        revealNav()
      }
    });

  function hideNav() {
    if (document.documentElement.scrollHeight !== document.documentElement.clientHeight){
      $('nav').animate({top: '-400px'}, {duration: 1000, queue: false})
    }
    
  }

  function revealNav() {
    $('nav').animate({top: '2vw'}, {duration: 1000, queue: false})
  }