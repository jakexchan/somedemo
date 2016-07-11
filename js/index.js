window.onload = function(){
	var oA = getClassName("a","a_link");
	var timer = "";
	for(var i = 0; i <oA.length; i++)
	{

		oA[i].onclick = function(){
			
			clearInterval(this.timer);
			var dlH = parseInt(getDlHeight(this)) + 20 + 40;
			var oLi = this.parentNode.parentNode;
			var speed = 3;	
			var liH = parseInt(oLi.style.height);	
			if(liH > 40)
			{
				this.timer = setInterval(function(){
					console.log(parseInt(oLi.style.height));
					if(parseInt(oLi.style.height) < 50)
					{
						oLi.style.height = 40 + "px";
						clearInterval(this.timer);
					}
					else
					{
						oLi.style.height = parseInt(oLi.style.height) - speed + "px";
						speed += 1;
					}
					
				},30);
			}
			else{
				this.timer = setInterval(function(){
					console.log(parseInt(oLi.style.height));
					if(parseInt(oLi.style.height) > dlH)
					{
						clearInterval(this.timer);
					}
					else
					{
						oLi.style.height = parseInt(oLi.style.height) + speed + "px";
						speed += 1;
					}
					
				},30);
			}
		}
	}
}


//获取className
function getClassName(tagName,className){
	if(document.getElementsByClassName)
	{
		return document.getElementsByClassName(className);
	}
	else
	{
		var tags = document.getElementsByTagName("tagName");
		var tagArr = [];
		for(var i = 0; i < tags.length;i++)
		{
			if(tags[i].class == className)
			{
				tagArr[tagArr.length] = tags[i];
			}
		}
		return tagArr;
	}
}

function getDlHeight(objA){
	var oDl = objA.parentNode.parentNode.getElementsByTagName("dl")[0];
	return oDl.offsetHeight;
}
