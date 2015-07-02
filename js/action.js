$(document).ready(function(){
(function(global, $){
	'use strict';
	var $name = 'selected';
	var faqListToggle = $('.faqList dt a');
	var $firstDd = $('.faqList dd').eq(0);
	$firstDd.show();

	$(faqListToggle).on('click', function(){
		var $thisDt = $(this).parent().parent();
		var $siblings = $thisDt.siblings();

		console.log($thisDt.children('.minus'));
		$thisDt.addClass($name);
		$thisDt.next('dd').slideDown();
		$siblings.removeClass($name);
		$siblings.next('dd').slideUp();
		$('.minus').hide();
		$('.plus').show();
		$('.selected .minus').show();
		$('.selected .plus').hide();
	});

}(window, window.jQuery));
});