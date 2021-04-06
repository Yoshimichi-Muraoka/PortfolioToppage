'.header-btn'
'header'
'.header__item_menu'
	$(document).ready(function() {
		$(window).scroll(function(){
			var pos = $(this).scrollTop();
			var wid = $('body').width();
			var checkbox = $('#my-parts-checkbox').prop('checked');
			if(!checkbox){
				if(pos > 200){
					$('header').slideDown();
					if(wid > 1000){
						$('.header__item_menu').slideDown();
					} else {
						$('.header-btn').slideDown();
					}
				} else {
					$('header').slideUp();
					$('.header__item_menu').slideUp();
					$('.header-btn').slideUp();
				}
			}
		});

		$(window).resize(function() {
			var pos = $(this).scrollTop();
			var wid = $('body').width();
			var checkbox = $('#my-parts-checkbox').prop('checked');
			if(!checkbox){
				if(pos > 200) {
					$('header').show();
					if(wid > 1000) {
						$('.header__item_menu').show();
					} else {
						$('.header__item_menu').hide();
					}
					if(wid < 1000) {
						$('.header-btn').show();
					} else {
						$('.header-btn').hide();
					}
				}
			}
		});

		$('.header-btn__item').click(function () {
			var checkbox = $('#my-parts-checkbox').prop('checked');
			if(checkbox === true){
				$('.body__slide').fadeIn();
				$('.header-btn').show();
				$('header').hide();
				$('.header__item_menu').hide();
			} else {
				$('.body__slide').fadeOut();
				$('header').fadeIn();
			}
		});
	});
