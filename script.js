var height = $(window).height(),
	width = $(window).width();
function fadeheader() {
	var scrollpos = $(document).scrollTop(),
	banner = $('#banner').outerHeight(false);
	if(scrollpos<banner){
		var d = (scrollpos/(4*(banner)))+0.75;
	}
	else {
		var d = 1;
	}
  document.getElementsByTagName('header')[0].style.background = "rgba(255,255,255,"+d+")";
}

$(document).scroll(function(){fadeheader();});

$(document).ready(function(){
fadeheader();
if (!("ontouchstart" in document.documentElement)) {
document.documentElement.className += " no-touch";
}
});

$(window).load(function(){
var bannerht = $('#banner').outerHeight(true);alert(banner);});


$(function() {
	$('.dropdownbutton').click(function(){
	 	if ( $(this).is(".menuclosed")) {
		 	 $(this).removeClass("menuclosed");
			 $(this).addClass("menuopen");
		 	 $(".dropdown").find("ul").stop().slideDown(300);
			 }
	 	else {
		 	$(this).addClass("menuclosed");
			$(this).removeClass("menuopen");
		 	$(".dropdown").find("ul").stop().slideUp(300);
	 	}
	});
	$('.dropdown a').click(function(){
		$('.dropdownbutton').addClass("menuclosed");
		$('.dropdownbutton').removeClass("menuopen");
		$(".dropdown").find("ul").stop().slideUp(300);
	});
		$('.drawerbutton').click(function(){
	 	if ( $(this).is(".menuclosed")) {
		 	 $(this).removeClass("menuclosed");
			 $(this).addClass("menuopen");
		 	 $(this).find(".drawer").stop().slideDown(300);
			 }
	 	else {
		 	$(this).addClass("menuclosed");
			$(this).removeClass("menuopen");
		 	$(this).find(".drawer").stop().slideUp(300);
	 	}
	});

});