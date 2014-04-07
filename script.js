		var height = $(window).height(),
			width = $(window).width();
		function fadeheader() {
			var scrollpos = $(document).scrollTop();
			if(scrollpos<400){
				var d = (scrollpos/(4*(400)))+0.75;
			}
			else {
				var d = 1;
			}
		  document.getElementsByTagName('header')[0].style.background = "rgba(255,255,255,"+d+")";
		}
		$(document).scroll(function(){fadeheader();});
		$(document).ready(function(){fadeheader();});

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