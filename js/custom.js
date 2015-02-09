//jQuery to collapse the navbar on scroll
jQuery(window).scroll(function() {
    if (jQuery(".navbar").offset().top > 50) {
        jQuery(".navbar-fixed-top").addClass("navbar-animation");          
           
    } else {
        jQuery(".navbar-fixed-top").removeClass("navbar-animation");
    }
});


jQuery(document).ready(function() {
    //animation when the document is ready
    jQuery(".img-lay01").addClass("img-lay01-transition");

    jQuery(".img-lay02").addClass("img-lay02-transition");
    jQuery(".shadow-lay02").addClass("shadow-lay02-transition");

    jQuery(".img-lay03").addClass("img-lay03-transition");
    jQuery(".shadow-lay03").addClass("shadow-lay03-transition");

    jQuery(".img-lay04").addClass("img-lay04-transition");
    jQuery(".shadow-lay04").addClass("shadow-lay04-transition");

    jQuery(".main-img-container .img-desc").addClass("img-desc-transition");


    //animation on scroll
    jQuery('.img-mob01').viewportChecker({
        classToAdd: 'img-mob01-animation'
    });
    jQuery('.shadow-mob01').viewportChecker({
        classToAdd: 'shadow-mob01-animation',
    });
    jQuery('.img-mob02').viewportChecker({
        classToAdd: 'img-mob02-animation',
    });
    jQuery('.img-mob03').viewportChecker({
        classToAdd: 'img-mob03-animation',
    });

    jQuery('.client-gray-logos .dv-border-item').viewportChecker({
        classToAdd: 'img-logo-animation',
    });
});


