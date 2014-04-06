		var height = $(window).height(),
			width = $(window).width();
		function fadeheader() {
			var scrollpos = $(document).scrollTop();
			if(scrollpos<height){
				var d = (scrollpos/(4*(400)))+0.75;
			}
			else {
				var d = 1;
			}
		  document.getElementsByTagName('header')[0].style.background = "rgba(255,255,255,"+d+")";
		  document.getElementById('navmenu').style.background = "rgba(255,255,255,"+d+")";
		}
		$(document).scroll(function(){fadeheader();});
		$(document).ready(function(){fadeheader();});

$(function() {
	 $('.dropdownbutton').click(function(){
	 	if ( $(this).is(".menuclosed")) {
		 	 $(this).removeClass("menuclosed");
		 	 $(".dropdown").find("ul").stop().slideDown(300);
			 }
	 	else {
		 	$(this).addClass("menuclosed");
		 	$(".dropdown").find("ul").stop().slideUp(300);
	 	}
		
	});	

});