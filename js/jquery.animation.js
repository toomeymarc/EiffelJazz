$(document).ready(function(){  
	var anim1 = true;
	var anim2 = true;

	$(window).scroll(function(){ 
		posScroll = $(document).scrollTop()/$(document).height();
		
		if (posScroll >= 0.4){
			if(anim1){
				$("#slide3 #colonne1").stop().animate({ "left": "+=40%","opacity":"1"},{ "duration": 500, "easing": "linear" });
				$("#slide3 #colonne3").stop().animate({ "right": "+=40%","opacity":"1"},{ "duration": 500, "easing": "linear" });
				anim1=false;
			}
			
		}
		

		if (posScroll >= 0.55){
			if(anim2){
				$("#slide4 #buttonfacebook").stop().animate({ "left": "+=50%","opacity":"1"},{ "duration": 700, "easing": "linear" });
				$("#slide4 #buttonyoutube").stop().animate({ "right": "+=45%","opacity":"1"},{ "duration": 700, "easing": "linear" });
				anim2=false;
			}
			
		}

	});  
});  