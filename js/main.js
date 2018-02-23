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

/*******************************************************
*********                  Menu Button          ********
*******************************************************/

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
            if ($(window).width() <= 480){
                $('.second').animate({'margin-left': '80%'}, 300);
            } else {
                $('.second').animate({'margin-left': '40%'}, 300);
            }
        } else {
           $('.second').animate({'margin-left': '25%'}, 300);
       }
   } else {
    $('.navigation').slideToggle('slow');
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

// toggle the sub navbars 
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
*********  Click image to fullscreen           ********
*******************************************************/

function imageButton(x){

    $('.exclude').each(function(){
       $(this).hide();
   });

    $('p').each(function(){
        $(this).hide();
    });

    $('.second').css('height', '600vh');
    $('.photos').css('height', '100vh');
    setTimeout(function(){
        $('.second').css('height', '120vh');
    }, 1400);
    
    $('.flex-content').not(x).each(function(){
       $(this).closest('.around').fadeOut();
   });
    $('html, body').animate({
        scrollTop: $('.second').offset().top
    }, 1000);
    setTimeout(function(){
        $('.second').addClass('black');
        $('.flex-content').css('width', 'auto');
    $('.flex-content').css('max-height', '700px');
    $('.flex-content').css('position', 'relative');
    $('.flex-content').css('top', '50%');
    $('.flex-content').css('transform', 'translateY(-50%)');
    $('.flex-content').css('-webkit-transform', 'translateY(-50%)');
    $('.flex-content').css('-moz-transform', 'translateY(-50%)');
    $('.flex-content').css('-ms-transform', 'translateY(-50%)');
    }, 500);
    
    
   $('.enlarged-image-nav').fadeIn();
}

$(document).ready(function(){
    $('.enlarged-image-nav').hide();
});

/*******************************************************
*********  image navbars fucntionality          ********
*******************************************************/

function arrowLeft(x){
    $('.flex-content').each(function(){
        if( $(this).closest('.around').css('display') != 'none' &&
            $(this).closest('.around').prev('.around').length != 0 &&
            !($(this).closest('.around').prev('.around').hasClass('exclude'))) {
            $(this).closest('.around').fadeOut(function(){
                $(this).closest('.around').prev('.around').fadeIn();
            });
        return false;
    }
});

}
function arrowRight(x){
    $('.flex-content').each(function(){
       if( $(this).closest('.around').css('display') != 'none' &&
            $(this).closest('.around').next('.around').length != 0 &&
           !($(this).closest('.around').next('.around').hasClass('exclude'))) {
        $(this).closest('.around').fadeOut(function(){
            $(this).closest('.around').next('.around').fadeIn(); 
        });
    return false;
}
});
    
}
function arrowClose(x){
    $('.second').css('height', 'auto');
    $('.photos').css('height', '');
    $('.flex-content').each(function(){
       $(this).closest('.around').fadeIn();
   });
    $('.second').removeClass('black');
    $('.flex-content').css('width', '');
    $('.flex-content').css('max-height', '');
    $('.flex-content').css('padding-top', '');
        $('.flex-content').css('position', '');
    $('.flex-content').css('top', '');
    $('.flex-content').css('transform', '');
    $('.flex-content').css('-webkit-transform', '');
    $('.flex-content').css('-moz-transform', '');
    $('.flex-content').css('-ms-transform', '');
    $('.enlarged-image-nav').fadeOut();
    $('.exclude').each(function(){
       $(this).show();
   });
    $('p').each(function(){
        $(this).show();
    });
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

