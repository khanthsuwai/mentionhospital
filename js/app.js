$(document).ready(function(){
	// Start Info Section
	$(window).scroll(function(){
		let getscrollpoint =  $(this).scrollTop();
		console.log(getscrollpoint);

		if(getscrollpoint >= 220){
			$(".infotxts").addClass("fromlefts");
			$("infopics").addClass("fromrights");
		}else{
			$(".infotxts").removeClass("fromlefts");
			$("infopics").removeClass("fromrights");
		}
	});
	// End Info Section

	// Start Adv Section
	$("#videos").click(function(){
		var getmodal = $(this).data("bs-target");
		var getvideosrc = $(this).data("video");
		var videoauto = getvideosrc +"?autoplay=1";

		$(getmodal + " iframe").attr("src",videoauto); 

		$(getmodal + " button.btn-close").click(function(){
			$(getmodal + " iframe").attr("src",getvideosrc);
		});
		$(getmodal).click("hidden.bs.modal",function(){
			$(getmodal + " iframe").attr("src",getvideosrc);
		});
	});
	// End Adv Section

	// Start Premises Section
	$("#lighterSlider").lightSlider({
		item:4,
		auto:true,
        loop:true,
        slideMove:1,
        speed:600,
	}); 
	// End Premises Section

	// Start Pricing Section
	$(window).scroll(function(){
		let getscroll = $(this).scrollTop();
		// console.log(getscroll);

		if(getscroll >= 2450 ){
			$(".cardones").addClass("moveleft");
			$(".cardtwos").addClass("moveright");
			$(".cardthrees").addClass("movebottom");
		}else{
			$(".cardones").removeClass("moveleft");
			$(".cardtwos").removeClass("moveright");
			$(".cardthrees").removeClass("movebottom");
		}
	});
	// End Pricing Section

	// Start Join Us Section

	$("#accordion").accordion();
	
	// End Join Us Section

	// Start Footer
	$("#getyears").text(new Date().getUTCFullYear());
	// End Footer

	// Start Progress
	$(window).scroll(function(){
		var getprogress = $("#progress");
		var getprogressval = $("#progressvalues");
		var getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		var getscrollheight = $(document).height();
		// console.log(getscrollheight);

		var getclientheight = $(window).height();
		// console.log(getclientheight);

		var calcheight = getscrollheight - getclientheight;
		var getfinal = Math.round(getscrolltop * 100 / calcheight);
		// console.log(getfinal);

		getprogressval.text(`${getfinal}%`);
		getprogress.css({
			"background": `conic-gradient(steelblue ${getfinal}%,#eee ${getfinal}%)`
		})
	});

	// End Progress

});