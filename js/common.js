$(document).ready(function(){
	/* Gnb-Lnb */
	$('#Gnb ul li').eq(gVar).addClass('on');
	$('#Lnb .lnb-menu > li').eq(lVar).addClass('on').find('ul li').eq(lsVar).addClass('on');


	
	
	
	

}); //end document ready




// ����Ʈ�ڽ� ��ũ��Ʈ(�����丮������)
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

