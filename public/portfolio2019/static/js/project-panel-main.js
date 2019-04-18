$(document).ready(function(){
    // set default easing function for all animations
    jQuery.easing.def = "easeOutCubic";
    // init scrollify
    $(function() {
        $.scrollify({
            section : ".section-class-name",
            sectionName : "section-name",
            interstitialSection : ".hf",
            setHeights: false,
            scrollbars: false,
            before: function(index, sections) {
                // change the menu button's shading to signify which
                // panel we are currently on 
                if (sections[index].attr('class') == 'project-tile section-class-name'){
                   let current = '#' + sections[index].attr('id').split('loc-')[1]
                   let target = '.project-panel-link' + '[href="' + current +'"]'
                   $('.project-panel-link').css({backgroundColor: "#191919"})
                   $($(target)[0]).css({backgroundColor: "#2B2B2B"})
                }
            }
        });
    });

    window.setTimeout(function() {
        // set margins of project panels after setting scrollify
        // to ensure proper spacing
        $('.project-tile').css({marginTop: "15vh"});  
        $('.project-tile').first().css({marginTop: "30vh"});  
    }, 5)

    // on menu button click, move to section
    $('.project-panel-link').click(function(e){
        $.scrollify.move('#' + (this.href.split('#')[1]));
    });

    // on project panel click, animate out to page change
    $('.project-tile').click(function(e) {
        let target = $(this).parent()[0].href;
        let margin = ""
        if ($(this)[0] == $('.project-tile').first()[0]){
            let height = window.innerHeight;
            let width = window.innerWidth;
            margin = (height * 0.15 +  width * 0.02).toString() + "px"
        }
        else {
            margin = "2vw"
        }
        // make dots dissapear
        $('.dots').animate({opacity: 0}, 1000);
        // animate up nav if it is down 
        $('nav').animate({top: '-400px'}, {duration: 1000, queue: false})
        // animate the project panel 
        $(this).animate({
            width: "96vw",
            height: "100vh",
            marginLeft: "2vw",
            marginRight: "2vw",
            marginTop: margin,
            marginBottom: "2vw",
            backgroundColor: "#FAF9F8"
        }, 1500, function(){
            // change the page when done
            window.setTimeout(function(){
               window.location.href = target;
            }, 50)
        });
        // animate out all other project panels
        $('.project-tile').not($(this)).animate({
            opacity: 0
        }, 800)
        // animate the main image 
        let image = $(this).children().first()
        $(image).animate({
            width: "-1vw",
            height: "100vh"
        }, 1500)
        // animate the main title 
        let title = $(this).children().last()
        $(title).animate({
            marginTop: '2vw',
            opacity: 0,
            backgroundColor: "#FAF9F8"
        }, 1500)
        return false;
    });
});

$(document).imagesLoaded(function(){  
     // animate in 
    $('.centered-head').animate({
        opacity: 1,
        top: '15vh'
    }, 1000) 
    setTimeout(function(){
        $('.project-tile-container').animate({
            opacity: 1,
        }, {duration: 1500, queue: false})
    }, 300)
    
    $('.dots').animate({
        opacity: 1
    }, 500)
});

// prevent safari from retaining a cached version of the page and force reload
$(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload() 
    }
});
