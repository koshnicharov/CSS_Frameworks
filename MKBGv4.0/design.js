/*
	Framework Name: MK
	Version: 4.0
	Purpose: Creating Browser-Independent Responsive Web Design
	Advantages: Short Maintainable Code
	Alternatives: Bootstrap 3

	Author: Mario Genchev Koshnicharov
	Email: mr.koshnicharov@gmail.com
	Country: Bulgaria
*/

/*
	Raw JavaScript (Faster Script)
*/



/*
	jQuery (Slower Browser-Independent Script)
*/

jQuery.noConflict();

jQuery(document).ready(function($){

/*
	Variables
*/
	
	var headerIsFixed = false;
	var headerOverflow = false;

	var buttonIsGenerated = false;
	var navIsHidden = false;

	var smallScreen = false;
	var firstToggle = false;

	var links = false;
	var previousHeaderHeight = 0;


/*
	Execute
*/
	
	navLoop();

	// Loading Faster
	agustingNav();
	
/*
	onClick
*/

	if($('.header li').length && buttonIsGenerated){

		var firstLink = $('.toggle');

		firstLink.on('click', function(){

			navToggle();

		});

	}

/*
	Functions
*/
	
	function navLoop(){

		mkNav();

		setInterval(function(){

			agustingNav();

		}, 2000);

	}
	
	function mkNav(){

		if($('.header').length && $('.header li').length){

			var header = $('.header');
			links = $('.header li');
			var firstLink = $('.header ul:first-child');

			firstLink.before('<li class="toggle" id="toggle">Toggle</li>');

			buttonIsGenerated = true;

			if(isTheScreenSmall()){

				links.hide();

				navIsHidden = true;

			}else{

				navIsHidden = false;

			}

			navIsHidden = true;

			header.css('position', 'fixed');
			header.css('top', '0px');
			header.css('left', '0px');
			header.css('z-index', '10');

			headerIsFixed = true;

		}

	}

	function navToggle(){

		if(headerIsFixed && buttonIsGenerated){

			if(!navIsHidden){

				links.hide();

				navIsHidden = true;

			}else{

				links.show();

				navIsHidden = false;

			}

		}

		agustingNav();

	}

	function agustingNav(){

		if($('.header').length){

			var header = $('.header');
			var headerHeightValue = header.height();
			var headerHeight = (headerHeightValue + 1) + 'px';

			if(headerIsFixed && !headerOverflow){

				$('body').css('padding-top', headerHeight);

				headerOverflow = true;

				previousHeaderHeight = headerHeightValue;

			}

			if(headerHeightValue != previousHeaderHeight){

				$('body').css('padding-top', '-' + (previousHeaderHeight + 1) + 'px');

				$('body').css('padding-top', (headerHeightValue + 1) + 'px');

				previousHeaderHeight = headerHeightValue;

			}

		}

		if(!isTheScreenSmall()){

			links.show();

		}

		if(!isTheScreenSmall()){

			navIsHidden = false;

		}

	}

	function isTheScreenSmall(){

		if($(window).width() <= 992){

			return true;

		}else{

			return false;

		}

	}

	/*
		Adding More Indentation
	*/

	if($('#indentation').length){
		var div = $('#indentation');
		div.css('margin-left', '25px');

	}

	/*
		Slider
	*/

	if($('.slider').length && $('.slider ul').length && $('.slider li').length && $('.slider img').length){

		var sliderDiv = $('.slider');
		var sliderUL = $('.slider ul');
		var sliderLI = $('.slider li');
		var sliderIMG = $('.slider img');

		var slides = sliderUL.children().length;
		var currentSlide = 1;

		sliderUL.after('<div id="sliderNext" class="sliderButton" style="right: 0px;">&rarr;</div>');
		
		var nextSlide = $('#sliderNext');
		var slideWidth = 100;


		nextSlide.on('click', function(){

			if(currentSlide < slides){

				sliderUL.animate({

					marginLeft: '-' + slideWidth * currentSlide + '%'

				}, 2000);

				currentSlide++;


			}else{

				currentSlide = 1;

				sliderUL.animate({

					marginLeft: 0

				}, 2000);

			}

						
		});

	}

	


	
});