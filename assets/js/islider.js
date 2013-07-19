// Plugin: iSlider
// Author: Khoa Nguyen
// Date: 7/15/13
// Version: 1.0

$(function(){
	
	//creating a strut object to use globally
	iSlider.targets={};
	
	//positioning where there slider content is
	iSlider.position={};
	
	sliderToggle = "";
	
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
				
				//slider toggle
				sliderToggle = $(this).attr('data-toggle');
				
				//hide slider content by default
				if(sliderToggle == 'false'){
					$(iSlider.targets.sliderContent).hide();
				}

				//show the slider's content that matches the 'data-source'
				$('*[id="'+iSlider.targets.sliderSource+'"]').slideToggle(400, 'easeInOutCubic');

				//scroll to open content
				scrollTo('*[id="'+iSlider.targets.sliderSource+'"]');

			return false;
			});
		});

		//close slider
		console.log(iSlider.targets, iSlider.position);
		
		$('.close-slider').each(function(){
			$(this).on('click', function(){
					$(this).parents('[data-role="slider-content"]').slideUp();
			});
		});
	
	};


	// init iSlider
	iSlider();
	
});


