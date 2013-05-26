define(['jquery'], function( $ ) {
	return function scrollPageOffscreen() {
		$('.wrapper').css({'margin-bottom': window.innerHeight + 'px'});
	}
});