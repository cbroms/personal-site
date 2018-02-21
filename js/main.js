 /******************************************************
  ___ ____
 / __|    |
/ /  |___ /
\ \__|    \
 \___|____|
*******************************************************
******** code by CB -> www.christianbroms.com  ********
********       https://github.com/CBR0MS       ********
******************************************************/


/*******************************************************
*********  determine if element is offscreen   ********
*******************************************************/

jQuery.expr.filters.offscreen = function(el) {
  var rect = el.getBoundingClientRect();
  return ((rect.x + rect.width) < 0 || (rect.y + rect.height) < 0 || (rect.x > window.innerWidth || rect.y > window.innerHeight));
};


/*******************************************************
*********  Change background to black          ********
*******************************************************/

$(window).scroll(function() {
    // when header is offscreen, change the backgound to black theme
    if($('#header').is(':offscreen')){
       // $('.second').addClass('black');
   } else {
       // $('.second').removeClass('black');
   }
});

// on menu button press
function menuButton(x) {
    x.classList.toggle('change');
    if ($(x).hasClass('change')) {/*
        $('.navigation').css('display', 'block');
        $('.navigation').animate({'opacity': '1'}, 1300);*/
        setTimeout( function() {
           $('.navigation').slideToggle('slow');
       }, 300);

        if ($(window).width() <= 1366){
            $('.second').animate({'margin-left': '40%'}, 300);
        } else {
         $('.second').animate({'margin-left': '25%'}, 300);
     }
 } else {
    $('.navigation').slideToggle('slow');
    /*
    $('.navigation').animate({'opacity': '0'}, 500, function(){
        $('.navigation').css('display', 'none'); 
    });
    */
    if ($(window).width() <= 1366){
        $('.second').animate({'margin-left': '0px'}, 300);
    } else {
     $('.second').animate({'margin-left': '6%'}, 300);
 }
}
}
// reset the margins on window resize
$(window).resize(function(){
    if ($(window).width() <= 1366){
        $('.second').css({'margin-left': '0px'});
    } else {
     $('.second').css({'margin-left': '6%'});
 }
 if ($('.menu-icon').hasClass('change')) {
    $('.menu-icon').toggle('change');
    $('.navigation').css('display', 'none');
    $('.navigation').css('opacity', '0');
}
});

function subNavButton(x) {
    if($(x).is('#one')){
        $('#projects').slideToggle(function(){
            $('#portfolio').slideToggle();
        });
    } else {
        $('#portfolio').slideToggle(function(){
            $('#projects').slideToggle();
        });
    }
}

/*******************************************************
*********  Smooth scroll when clicking a link   ********
*******************************************************/
// https://css-tricks.com/snippets/jquery/smooth-scrolling/

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
      ) {
      // Figure out element to scroll to
  var target = $(this.hash);
  var target2 = this.hash;
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
      }, 1500, function() {

          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        }; 
          // set the outline color and highlight text 
          target2 = target2 + ":focus"
          $(target2).css("outline-color", "#d14747");

          target.effect("highlight", { color: "#d14747" }, 3000);
      });
    }
}
});

/*******************************************************
******  prevent links with # from changing url   *******
*******************************************************/

addEventListener('click', function (ev) {
    if (ev.target.classList.contains('safe-link')) {
        ev.preventDefault();
    }   
});

