$('.main').css({"width":$(document).width(),"height":$(document).height()-60});
//头部
$(".top-left").on('mouseover',function(){
	$(this).addClass('off');
	$(".sub-menus").fadeIn("slow");
})
$('.sub-menus li').on('mouseover',function(){
	$(this).addClass('off');
	$(this).siblings().removeClass('off');
	$('.menus-show').eq($(this).index()).fadeIn('slow');
	$('.menus-show').eq($(this).index()).siblings().hide();
	$(".triangle").eq($(this).index()).fadeIn('slow');
	$('.triangle').eq($(this).index()).siblings().hide();
})
$('.menus-show li').on('mouseover',function(){
	$(this).addClass('off');
	$(this).siblings().removeClass('off');
})
$('.show-two li:last-child').on('mouseover',function(){
	$(".show-two-show").fadeIn('slow');
	$(".show-two-show-triangle").fadeIn('slow');
})