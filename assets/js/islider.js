// Plugin: iSlider
// Author: Khoa Nguyen
// Date: 7/15/13
// Version: 1.0

$(function(){
	
	//creating a strut object to use globally
	iSlider.targets={};
	
	//positioning where there slider content is
	iSlider.position={};
	
	//begin iSlider
	function iSlider(){  
		
		// hide slider content by default
		$('*[data-role="slider-content"]').hide();
		
		// set some variables

		// Scroll to function
		function scrollTo(element){

			// scroll to the element
			$('html,body').animate({scrollTop: $(element).offset().top},800, 'easeInOutCubic');
		}


		//open slider

	  $('*[data-slider-source]').each(function(){
			$(this).on('click', function(){
				
				//slider source
				iSlider.targets.sliderSource = $(this).attr('data-slider-source');	

				//slider content
				iSlider.targets.sliderContent = $('*[data-role="slider-content"]');
		
			//hide slider content by default
			// $(sliderContent).hide();

			//show the slider's content that matches the 'data-source'
			$('*[id="'+iSlider.targets.sliderSource+'"]').slideToggle(400, 'easeInOutCubic');

			//scroll to open content
			scrollTo('*[id="'+iSlider.targets.sliderSource+'"]');

			console.log(iSlider.targets);

			return false;
			});
		});

		//close slider
		console.log(iSlider.targets, iSlider.position);
		
		$('.button-close, .close-slider').on('click', function(){
			//grab the id of the current slider content and close it onClick
			var sliderContent = iSlider.targets.sliderSource;
			$('#'+sliderContent+'').slideUp();
		});
	};


	// init iSlider
	iSlider();
	
});


