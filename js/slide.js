$(document).ready(function(){
	// permet de n"effectuer qu'une seule fois le scroll
	var scrollingScreen = false;
	// gestion des touches pour le scroll
	$(".js-slide").data("key", {
			key33: false, // PgUp
			key34: false, // PgDown
			key38: false, // flèche haut
			key40: false  // flèche bas
	});
	
	// induction de l'évènement keydown sur les touches haut, bas, pageUp et pageDown
	$(document).keydown(function(e){
		var objDataKey = $(".js-slide").data("key");
		switch(e.which){
			case 33:
				objDataKey.key33 = true;
				break;
			case 34:
				objDataKey.key34 = true;
				break;
			case 38:
				objDataKey.key38 = true;
				break;
			case 40:
				objDataKey.key40 = true;
				break;
		}
		var top = $("body").scrollTop() || $("html").scrollTop();
		// gestion du scroll avec les touches
		if ( !scrollingScreen ) {
			scrollingScreen = true; 
			if ( (objDataKey.key40) || (objDataKey.key34) ) {
				top += 800;
				// si on scroll vers le haut
			} else if ( (top > 900) && ( (objDataKey.key38) || (objDataKey.key33) ) ){
				if (top > 2400){
					top = 2400;
				} else {
					top -= 800;
				}
			// si on est en haut de page
			} else {
				top =0;
			}
			// réalise l'animation suivant le top
			$("html,body").animate({ scrollTop:top }, "slow", "swing", function() {
				// permet de rappeler la fonction
				scrollingScreen = false; 
			});
			return false;
		}
	});	
	// gestion du scroll avec la molette
	$(".js-slide").mousewheel(function(event, delta) {
		if ( !scrollingScreen ) {
			scrollingScreen = true; 
			var top = $("body").scrollTop() || $("html").scrollTop(); 
			// si on scroll vers le bas
			if ( delta < 0 ) {
				top = $(this).next().offset().top;
			// si on scroll vers le haut
			} else if ( (top > 900) &&  (delta >0) ){
				top = $(this).prev().offset().top;
			// si on est en haut de page
			} else {
				top =0;
			}
			// réalise l'animation suivant le top
			$("html,body").animate({ scrollTop:top }, "slow", "swing", function() {
				// permet de rappeler la fonction
				scrollingScreen = false; 
			});
		}
		// permet de controller pour que le scroll naturel ne se fasse pas
		return false; 
	});
	
	// inhibition du keyup sur les touches haut, bas, pageUp et pageDown.
	$(document).keyup(function(e){
		var objDataKey = $(".js-slide").data("key");
		switch(e.which){
			case 33:
				objDataKey.key33 = false;
				break;
			case 34:
				objDataKey.key34 = false;
				break;
			case 38:
				objDataKey.key38 = false;
				break;
			case 40:
				objDataKey.key40 = false;
				break;
		}
	});
});