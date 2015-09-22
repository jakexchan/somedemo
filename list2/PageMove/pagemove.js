$(function(){

	$(document).scroll(function(){
	  var oTop = $(document).scrollTop();
	  console.log(oTop);
	  var top;
	  if(oTop >= 500 && oTop <= 1200)
	  {
	  	top = oTop - 500;
	  	$("#page1 .info").css({
	  		"opacity":0.002*top,
	  		"left":(0.024*top).toString() + "%"
	  	});
	    $("#page1 .photo_pic").css({
	    	"opacity":0.002*top
	    });
	  }

	  if(oTop >= 1350 && oTop <= 2050)
	  {
	  	top = oTop - 1350;
	  	$("#page2 .info").css({
	  		"opacity":0.002*top
	  		
	  	});
	    $("#page2 .photo_pic").css({
	    	"opacity":0.002*top,
	    	"right":(0.024*top).toString() + "%"
	    });
	  }

	  if(oTop >= 2250 && oTop <= 2950)
	  {
	  	top = oTop - 2250;

	  	$("#page3 .info").css({
	  		"opacity":0.002*top,
	  		"left":(0.024*top).toString() + "%"
	  	});
	    $("#page3 .photo_pic").css({
	    	"opacity":0.002*top
	    });
	  }

	});

})