$(document).ready(function(){
    // set default easing function for all animations
    jQuery.easing.def = "easeOutCubic";
    // jekyll wraps all images in paragraph elements, so we want to remove 
    // the images from the paragraph wrapping
    const parents = $('p > img').parent();
    parents.each(function() {
     this.outerHTML = this.innerHTML
 });
    // consolidate elements from jekyll into various divs for styling
    $('.content').append($("<div class='body-text'></div>"))
    $('.content').prepend($("<div class='title'></div>"))
    $('.title').append($('.content').children().filter('h1, h2'))
    $('.title').append('<div class="arrow">&darr;</div>')
    $('.body-text').append($('.content').children().not('.hero-image, .title'))
    // add a dummy element to the body to make wrapping easier later
    $('.body-text').prepend('<div></div>')
    $('.body-text').children().addClass('body-content')

    // wrap each element between images in a content wrapper 
    $('.body-content').each(function(index){
        let elms = $(this).nextUntil('img')
        if (elms[0] != undefined) {
            $('<div id="content-' + index.toString() + '" class="content-wrapper"></div>').insertBefore($(elms[0]))
            $('#content-' + index.toString()).append(elms)
        }
    });

    // consolidate the elements that have been wrapped into one single wrapper
    $($('.content-wrapper').get().reverse()).each(function(){
        if ($(this).parent().hasClass('content-wrapper')) {
            this.outerHTML = this.innerHTML
        }
    })

    // remove first dummy element
    $('.body-content').first().remove()

    // set up the grid system for the contents of the body
    $('.body-text').children().each(function(index){
        if (index == 0) { $('.body-text').append("<div class='row'></div>") }
            let elt = $(this).detach()
        if ($(elt).is('img')){
            elt = $(elt).addClass('img-fluid')
        }
        let rand = Math.random()
        if ((!$(elt).hasClass('big') && !$($(elt).children().first()).is('iframe')) && (rand < 0.8 || !$(elt).is('img') || $(elt).hasClass('small'))){
            if ($('.row').last().children().length > 1){
                $('.body-text').append("<div class='row'></div>")
            }
            $('.row').last().append("<div class='col-sm-12 col-lg-6 align-self-center' id='" + index.toString() + "'></div>")
            $('#' + index.toString()).append(elt)
            if ( $('#' + index.toString()).siblings().length == 0) {
                $('#' + index.toString()).children().first().css({ float: 'right'})
            } else { $('#' + index.toString()).children().first().css({ float: 'left'}) }
        } else {
            $('.body-text').append("<div class='row text-center'></div>")
            $('.row').last().append("<div class='col-sm-12 col-lg-12 align-self-center' id='" + index.toString() + "'></div>")
            $('#' + index.toString()).append(elt) 
            $('.body-text').append("<div class='row'></div>")
        }        
    })

    // initialize scrollreveal
    ScrollReveal({
        duration: 1500,
        delay: 600,
        interval: 800
    }).reveal('.img-fluid');

    ScrollReveal({
        distance: '40px',
        duration: 1500,
        delay: 600,
        interval: 800
    }).reveal('.content-wrapper');

    // when window is resized, adjust height of container
    $(window).resize(function(){ resizeAdjust() })

    // animate in the page on image load
    // also ajust height of container
    $(document).imagesLoaded(function(){  
        resizeAdjust() 
        $('.content').animate({opacity: 1}, 1000, function(){
            //  animate in image on page load
            $('.hero-image').animate({
                width: '55vw'
            }, 1500);
             // animate in title
            $('.title').animate({
                top: '30vh',
                opacity: 1
            }, 1500)
        })  
    });
});

function resizeAdjust() {
    let currentHCont = window.innerHeight * 1.2
    let currentHBody = parseInt($('.body-text').css('height'))
    $('.container-main').css({height: (currentHCont + currentHBody).toString() + 'px'})
}

