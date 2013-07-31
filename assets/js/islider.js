// Plugin: iSlider
// Author: Khoa Nguyen
// Date: 7/15/13
// Version: 1.0
// Documentation on Github: https://github.com/khoanguyen26/iSlider

$(function(){
	
	//creating a strut object to use globally
	iSlider.targets = {};
	
	//positioning where there slider content is
	iSlider.position = {};
	
	iSlider.toggle = {};
	
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

	  $('[data-slider-source]').each(function(){
			$(this).on('click', function(){
				
				//slider source
				iSlider.targets.sliderSource = $(this).attr('data-slider-source');	

				//slider content
				iSlider.targets.sliderContent = $('[id="'+iSlider.targets.sliderSource+'"]')
				
				//set slider toggle attribute
				iSlider.toggle = $(this).attr('data-toggle');
				
				//toggling different slider options
				if(iSlider.toggle == "fade"){
					$(iSlider.targets.sliderContent).fadeIn();
				}else{
					//show the slider's content that matches the 'data-source'
					$(iSlider.targets.sliderContent).slideToggle(400, 'easeInOutCubic');
				}



				//scroll to open content
				scrollTo(iSlider.targets.sliderContent);
				// console.log(iSlider.targets, "toggle: ",iSlider.toggle);
			return false;
			});
		});

		//close slider
		
		$('.close-slider').each(function(){
			
			$(this).on('click', function(){
				// console.log("toggle: ",iSlider.toggle);
				
				if(iSlider.toggle == "fade"){
					$(this).parents('[data-role="slider-content"]').fadeOut();
				}else{
					$(this).parents('[data-role="slider-content"]').slideUp();
				}
			});
		});
	
	};


	// init iSlider
	iSlider();
	
});


