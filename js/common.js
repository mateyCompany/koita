$(document).ready(function(){
	Lnb();


	
	
	
	

}); //end document ready




// 설렉트박스 스크립트(리펙토리전상태)
function selecter(tar){
	var $selecter = $(tar);
	var $tarUL = $selecter.find('ul');
	var $activeTar = $tarUL.find('a');
	var $activeTxt = $selecter.find('.activeTxt');
	var tarULWidth = $tarUL.width();
	var $reset = $tarUL.find('li:first-child a');

	$activeTxt.text($reset.text());
	$selecter.find('input:hidden').val($reset.attr('data-role'));
	$selecter.width(tarULWidth);

	$selecter.click(function(){
		$(this).find('ul').toggleClass('on');
	});
	$activeTar.click(function(){
		var $active = $(this);
		var activeData = $active.attr('data-role');
		$activeTxt.text($active.text());
		$selecter.find('input:hidden').val(activeData);
		$tarUL.removeClass('on');
		return false;
	});

	$selecter.hover(function(){},function(){
		if($tarUL.hasClass('on')){
			$tarUL.removeClass('on');
		}
	});

};

function tabSize(target){
	var $tar = $(target).find('li');
	var tarSize = 100/$tar.length;
	$tar.each(function(idx){
		$(this).css('width',tarSize+'%');
	});

};

function Lnb(){
	var $dep1 = $('.depth1 li');
	var $dep2 = $('.depth2');
	var text = $dep1.eq(gVar).find('a').text();
	$dep1.eq(gVar).remove();
	$('.selected1').text(text);
	if(lVar >= 0 ){
		$dep2.find('ul').removeClass('on');
		$dep2.find('ul').eq(gVar).addClass('on');
		$dep2.find('ul').eq(gVar).find('li').eq(lVar).addClass('on');
		$dep2.find('.selected2').text($dep2.find('ul').eq(gVar).find('li').eq(lVar).find('a').text());
		$dep2.find('ul').eq(gVar).find('li').eq(lVar).remove();

	}else{
		$dep2.hide();
	}

};


