iSlider
=======

This is a plugin that allows you to "slide" and show the content on the page via click triggered event

demo: http://khoaisdesigning.com/islider/demo.html

Dependency
=======

Using iSlider is easy, just follow the steps below: 

1. Add the latest version of Jquery to your site

2. Add "jquery-easing-min.js" to use easing in your animation

3. Reference the iSlider plugin

HTML
=======

Trigger:

    <button type="button" data-slider-source="example1">Show Content 1</button>

Slider content:

    <section class="container slider-content" id="example1" data-role="slider-content">
		<h2>Slider Content 1</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<button type="button" class="close-slider">Close</button>
	</section>


Attributes
=======

<strong>data-slider-source:</strong>

Defines your slider destination

<strong>data-role:</strong>

Defines your slider content

<strong>data-toggle:</strong>

By default, the slider will perform a "slideToggle". However, if data-toggle="fade", then the content will fade in instead


