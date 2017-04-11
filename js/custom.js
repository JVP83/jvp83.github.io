if ($('.the-slider').length){ 
		$('.the-slider').slick({
			dots: true,
			autoplay: true,
			autoplaySpeed: 3000
		});
};

if($('.parallax').length){
		$('.pax-1').parallax({imageSrc: 'images/white_family.jpg'});

		// $('.pax-2').parallax({imageSrc: 'http://placeimg.com/1600/1000/nature/2'});

		$('.pax-3').parallax({imageSrc: 'images/wm_about-us_phase2c_05.jpg'});

		$('.pax-4').parallax({imageSrc: 'images/white_family.jpg'});

		$('.pax-5').parallax({imageSrc: 'images/wm_about-us_phase2c_05.jpg'});

}


// $("nav").find("a").click(function(e) {
//    e.preventDefault();
//    var section = $(this).attr("href");
//    $("html, body").animate({
//        scrollTop: $(section).offset().top
//    });
// });