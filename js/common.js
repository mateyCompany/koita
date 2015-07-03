$(document).ready(function(){
	lnb();



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

/* 텝 사이즈 값 조절하기 */
function tabSize(target){
	var $tar = $(target).find('li');
	var tarSize = 100/$tar.length;
	$tar.each(function(idx){
		$(this).css('width',tarSize+'%');
	});
};

//서브메뉴
function lnb(){
	var $dap1 = $('h1.cTit').text();
	var $dap2 = $('h2.cTit').text();
	$('.depth1 li').each(function(idx){
		var $this = $(this);
		var txt = $this.find('a').text();
		if(txt == $dap1){
			$('.selected1').text($dap1);
			$('.depth2').find('ul').eq(idx).addClass('on');
			$('.depth2 ul.on li').each(function(idx){
				var $this = $(this);
				var txt = $this.find('a').text();
				if(txt == $dap2){
					$('.selected2').text($dap2);
					$this.remove();
					return false;
				}
			});
			return false;
		}
	});
}


