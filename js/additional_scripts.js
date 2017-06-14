$(document).ready(function() {

	var ageRange;
	var maxAge;
	var nodes;

	// ----------------------------------------------------

	(function($){

		$(window).on("load",function(){

			$(".scroll").mCustomScrollbar();

			$(".scroll-horisontal").mCustomScrollbar({

				axis:"x"
				
			});

		});

	})(jQuery);	

	 var mySwiper = new Swiper('.swiper-container', {
	    loop: true,
	    speed: 1400,
	    pagination: $(".swiper-pagination"),
	    paginationClickable: true,
	    effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 0,
            stretch: 0,
            depth: 155,
            modifier: 1,
            slideShadows : true
        }
	  });

	 $(".feedback_slider_1").not('.slick-initialized').slick({
		dots: true,
		arrows: false,
		speed: 800,
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 7000,
		 responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});

	if($("#age_range_sl").length > 0) {

		ageRange = document.getElementById('age_range_sl');
		maxAge = 8;
		// nodes;

		noUiSlider.create(ageRange, {
			start: [1, 5],
			connect: true,
			behaviour: 'tap',
			step: 1,
			range: {
				'min': 0,
				'max': 6
			},
			pips: {
				mode: 'steps',
				stepped: true,
				density: 1
			}
		});

		nodes = [
			document.getElementById('lower-value'),
			document.getElementById('upper-value')
		];

		ageRange.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {

			nodes[handle].innerHTML = parseFloat( values[handle] );

			if( parseInt( $("#upper-value").text() ) > 4 && parseInt( $("#upper-value").text() ) <= 6 ) {

				$("#upper-value").text(maxAge);

			}

		});

	}

	$(".mosaik-thumbnails").isotope({
	  itemSelector: ".thumbnail",
	  percentPosition: true,
	  masonry: {
		  horizontalOrder: true,
		  columnWidth: '.grid-sizer'
		}
	});

	$(".blog-slider").not('.slick-initialized').slick({
      dots: true,
      arrows: false,
      speed: 700,
      slidesToShow: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 17000,
      appendDots: $(".blog-slider-pagination"),
      zIndex: 1
    });

	$(".cart-slider").not('.slick-initialized').slick({
		dots: true,
		arrows: false,
		speed: 700,
		slidesToShow: 1,
		fade: true,
		autoplay: true,
		autoplaySpeed: 17000,
		appendDots: $(".cart-slider-pagination"),
		zIndex: 1
	});

	$(".good-slider").not('.slick-initialized').slick({
		dots: true,
		arrows: false,
		speed: 700,
		slidesToShow: 1,
		fade: true,
		autoplay: true,
		autoplaySpeed: 17000,
		appendDots: $(".good-slider-pagination"),
		zIndex: 1
	});

	$(".card-promo-slider").not('.slick-initialized').slick({
      dots: true,
      arrows: false,
      speed: 700,
      slidesToShow: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 17000,
      appendDots: $(".card-promo-pagination"),
      zIndex: 1
    });

	$("select").select2();

	$(".feedback_slider_2").not('.slick-initialized').slick({
		dots: true,
		arrows: false,
		speed: 800,
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 7000,
		 responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});

	$(".photos-slider").not('.slick-initialized').slick({
		dots: true,
		arrows: false,
		speed: 700,
		slidesToShow: 1,
		fade: true,
		autoplay: true,
		autoplaySpeed: 17000,
      	appendDots: $(".photos-slider-pagination")
    });


});