$(document).ready(function(){
    // set default easing function for all animations
    jQuery.easing.def = "easeOutCubic";

    $('#finished').click(function(){
        goToProjects()
    })
    $('#progress').click(function(){
        goToWIP()
    })

    $('body').css({overflow: 'hidden'})
    // animate top and title text in 
    $('.top').animate({
        height: '50vh'
    }, 2500)
    $('.title-front').animate({
        opacity: 1
    }, 1500, function(){
        // animate progress and finished text to top and bottom
        $('#progress').animate({
            top: '2%',
            opacity: 1
        }, 1500)
        $('#finished').animate({
            bottom: '2%',
            opacity: 1
        }, 1500)
    })
    // get scroll direction
    $(document).on( 'DOMMouseScroll mousewheel', function ( event ) {
        if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
            //scroll down
            goToProjects()
        } else {
            //scroll up
            goToWIP()
        }
    });

    // get drag direction
    // https://stackoverflow.com/a/22257774
    var ts;
    $(document).bind('touchstart', function (e){
        ts = e.originalEvent.touches[0].clientY;
    });
    $(document).bind('touchend', function (e){
        let te = e.originalEvent.changedTouches[0].clientY;
        if (ts > te + 5) {
            // drag up
            goToProjects()
        } else if (ts < te - 5) {
            // drag down
            goToWIP()
        }
    });
    
})

function goToProjects(){
    $('.title-front').animate({
        opacity: 0,
        top: '15vh'
    }, 1500)
    $('#progress').animate({
        top: '-20%',
        opacity: 0
    }, 1500)
    $('#finished').animate({
        bottom: '20%',
        opacity: 0
    }, 1500)
    $('.top').animate({
        height: '0vh'
    }, 1500, function(){
        window.location.href =  window.location.href + "/projects"
    })
}

function goToWIP() {
    $('.title-front').animate({
        opacity: 0,
        top: '75vh'
    }, 1500)
    $('#progress').animate({
        top: '40%',
        opacity: 0
    }, 1500)
    $('#finished').animate({
        bottom: '-20%',
        opacity: 0
    }, 1500)
    $('.top').animate({
        height: '100vh'
    }, 1500, function(){
        window.location.href =  window.location.href + "/wip"
    })
}