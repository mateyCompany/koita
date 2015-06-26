$(document).ready(function(){
	/* Gnb-Lnb */
	$('#Gnb ul li').eq(gVar).addClass('on');
	$('#Lnb .lnb-menu > li').eq(lVar).addClass('on').find('ul li').eq(lsVar).addClass('on');


	
	
	
	

}); //end document ready




// 설렉트박스 스크립트(리펙토리전상태)
function selecter(tar){
	var $selecter = $(tar);
	var $tarUL = $selecter.find('ul');
	var $activeTar = $tarUL.find('a');
	var $activeTxt = $selecter.find('.activeTxt');
	var tarWidth = $selecter.width();
	var tarULWidth = $tarUL.width();
	var $reset = $tarUL.find('li:first-child a');

	$activeTxt.text($reset.text());
	$activeTxt.attr('data-role',$reset.attr('data-role'));
	$selecter.width(tarULWidth-1);

	$selecter.click(function(){
		$(this).find('ul').toggleClass('on');
	});
	$activeTar.click(function(){
		var $active = $(this);
		var activeData = $active.attr('data-role');
		$activeTxt.text($active.text());
		$activeTxt.attr('data-role',activeData);
		$tarUL.removeClass('on');
		return false;
	});

	$selecter.hover(function(){},function(){
		if($tarUL.hasClass('on')){
			$tarUL.removeClass('on');
		}
	});

};

