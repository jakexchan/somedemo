$(function(){

	$(document).scroll(function(){
	  var oTop = $(document).scrollTop();
	  var top;
	  var opacity_var = 0.002;
	  var left_var = 0.024;
	  var opacity = 0;
	  if(oTop >= 500 && oTop <= 1000)
	  {
	  	top = oTop - 500;
	  	opacity = opacity_var*top;
	  	$("#page1 .info").css({
	  		"opacity":opacity,
	  		"filter":"alpha(opacity:"+opacity*100+")",
	  		"left":(left_var*top).toString() + "%"
	  	});
	    $("#page1 .photo_pic").css({
	    	"opacity":opacity,
	    	"filter":"alpha(opacity:"+opacity*100+")",
	    });
	  }

	  if(oTop >= 1350 && oTop <= 1850)
	  {
	  	top = oTop - 1350;
	  	opacity = opacity_var*top;
	  	$("#page2 .info").css({
	  		"opacity":opacity,
	  		"filter":"alpha(opacity:"+opacity*100+")",
	  		
	  	});
	    $("#page2 .photo_pic").css({
	    	"opacity":opacity,
	    	"filter":"alpha(opacity:"+opacity*100+")",
	    	"right":(left_var*top).toString() + "%"
	    });
	  }

	  if(oTop >= 2250 && oTop <= 2750)
	  {
	  	top = oTop - 2250;
	  	opacity = opacity_var*top;
	  	$("#page3 .info").css({
	  		"opacity":opacity,
	  		"filter":"alpha(opacity:"+opacity*100+")",
	  		"left":(left_var*top).toString() + "%"
	  	});
	    $("#page3 .photo_pic").css({
	    	"opacity":opacity,
	    	"filter":"alpha(opacity:"+opacity*100+")",
	    });
	  }

	});

})