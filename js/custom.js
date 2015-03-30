//jQuery to collapse the navbar on scroll
jQuery(window).scroll(function() {
	if (jQuery(".navbar").offset().top > 50) {
		jQuery(".navbar-fixed-top").addClass("navbar-animation");
		jQuery(".navbar-brand").addClass("navbar-animation-ds");
	} else {
		jQuery(".navbar-fixed-top").removeClass("navbar-animation");
		jQuery(".navbar-brand").removeClass("navbar-animation-ds");
	}
});

//smooth scroll using jQuery.min2
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

var demoImages = ['run1.jpg', 'run2.jpg', 'run3.jpg', 'run4.jpg', 'hiking.jpg'];
$(document).ready(function() {
	$('.demo').css('background-image', 'url(images/bg/' + demoImages[Math.floor(Math.random() * demoImages.length)] + ')');
});

var bg3Images = ['mb1.jpg', 'mb2.jpg', 'mb3.jpg', 'mb4.jpg', 'mb5.jpg'];
$(document).ready(function() {
	$('.bg-3').css('background-image', 'url(images/bg/' + bg3Images[Math.floor(Math.random() * bg3Images.length)] + ')');
});

// jQuery(document).ready(function() {
	//animation when the document is ready
	// jQuery(".img-lay01").addClass("img-lay01-transition");

	// jQuery(".img-lay02").addClass("img-lay02-transition");
	// jQuery(".shadow-lay02").addClass("shadow-lay02-transition");

	// jQuery(".img-lay03").addClass("img-lay03-transition");
	// jQuery(".shadow-lay03").addClass("shadow-lay03-transition");

	// jQuery(".img-lay04").addClass("img-lay04-transition");
	// jQuery(".shadow-lay04").addClass("shadow-lay04-transition");

	// jQuery(".main-img-container .img-desc").addClass("img-desc-transition");


	//animation on scroll
	// jQuery('.img-mob01').viewportChecker({
	//     classToAdd: 'img-mob01-animation'
	// });
	// jQuery('.shadow-mob01').viewportChecker({
	//     classToAdd: 'shadow-mob01-animation',
	// });
	// jQuery('.img-mob02').viewportChecker({
	//     classToAdd: 'img-mob02-animation',
	// });
	// jQuery('.img-mob03').viewportChecker({
	//     classToAdd: 'img-mob03-animation',
	// });

	// jQuery('.client-gray-logos .dv-border-item').viewportChecker({
	//     classToAdd: 'img-logo-animation',
	// });
// });


