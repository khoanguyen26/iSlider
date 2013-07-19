// Plugin: iSlider
// Author: Khoa Nguyen
// Date: 7/15/13
// Version: 1.0


function iSlider(){  
	
	// Scroll to function
	function scrollTo(element){
		
		// scroll to the element
		$('html,body').animate({scrollTop: $(element).offset().top},800, 'easeInOutCubic');
	}
	

	//open slider
	
  $('*[data-slider-source]').each(function(){
		$(this).on('click', function(){
		
		//set variable for slider source at the trigger level
		var	sliderSource = $(this).attr('data-slider-source');	
		
		//slider content
		var	sliderContent = $('*[data-role="slider"]');

		//hide slider content by default
		$(sliderContent).hide();
		
		//show the slider's content that matches the 'data-source'
		$('*[id="'+sliderSource+'"]').slideDown();
		
		//scroll to open content
		scrollTo('*[id="'+sliderSource+'"]');
		
		return false;
		});
	});

	//close slider
	
	$('.button-close, .close-slider').on('click', function(){
		$('.slider-content').slideUp();
	});
};

iSlider();


