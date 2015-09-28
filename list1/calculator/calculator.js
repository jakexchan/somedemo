(function(){
	var keybox = document.getElementById("keybox");
	var key = keybox.getElementsByTagName("input");

	var process_text = document.getElementById("process");
	var result_text = document.getElementById("result");

	//获取操作符
	var divide = document.getElementById("divide"); //除
	var multiply = document.getElementById("multiply");  //乘
	var minus = document.getElementById("minus");  //减
	var plus = document.getElementById("plus");  //加

	//是否是操作符
	var operated = false;  //0:false,1:true
	//是否是结果
	var resulted = false;

	//获取数字键数字
	var num = getClass("num","input");
	for(var i = 0, len = num.length; i < len; i++)
	{
		num[i].onclick = function(){
			if(resulted && operated)
			{
				result_text.value = "0";
			}
			if(result_text.value.toString().length == 1 && result_text.value == "0" && this.value != "."){
				result_text.value = this.value;
			}else{
				result_text.value += this.value;
			}
			resulted = false;
			operated = false;
		}
	}

	var result = 0;  //初始化结果为0
	var numfir = 0;  //存放第一个数字值
	var numsec = 0;  //存放第二个数字值
	// var calculator = {
	// 	plus:function(){
	// 		// resulted = true;
	// 		// operated = true;
	// 		// numsec = result_text.value;
	// 		// if(!operated)
	// 		// {
	// 		// 	result_text.value = 0;
	// 		// 	process_text.value += numsec + "+";
	// 		// 	result = result + Number(numsec);			
	// 		// }
	// 		// else
	// 		// {
	// 		// 	process_text.value += numsec + "+";
	// 		// 	result = result + Number(numsec);
	// 		// 	result_text.value = result;
	// 		// }
	// 		console.log("加法：");
	// 		console.log("result:"+result);
	// 		numsec = result_text.value;
	// 		console.log("numsec:"+numsec);
	// 		result = result + Number(numsec);
	// 		console.log("result:"+result);

	// 	},
	// 	minus:function(){
	// 		resulted = true;
	// 		operated = true;
	// 		numsec = result_text.value;
	// 		if(!operated)
	// 		{
	// 			result_text.value = 0;
	// 			process_text.value += numsec + "-";
	// 			result = result - Number(numsec);			
	// 		}
	// 		else
	// 		{
	// 			process_text.value += numsec + "-";
	// 			result = result - Number(numsec);
	// 			result_text.value = result;
	// 		}
	// 	},
	// 	multiply:function(){
	// 		// resulted = true;
	// 		// operated = true;
	// 		// numsec = result_text.value;
	// 		// if(!operated)
	// 		// {
	// 		// 	result_text.value = 0;
	// 		// 	process_text.value += numsec + "*";
	// 		// 	result = result * Number(numsec);			
	// 		// }
	// 		// else
	// 		// {
	// 		// 	process_text.value += numsec + "*";
	// 		// 	result = result * Number(numsec);
	// 		// 	result_text.value = result;
	// 		// }
	// 		console.log("乘法：");
	// 		console.log("result:"+result);
	// 		numfir = 
	// 		numsec = result_text.value;
	// 		console.log("numsec:"+numsec);
	// 		result = result * Number(numsec);
	// 		console.log("result:"+result);
	// 	},
	// 	divide:function(){
	// 		resulted = true;
	// 		operated = true;
	// 		numsec = result_text.value;
	// 		if(!operated)
	// 		{
	// 			result_text.value = 0;
	// 			process_text.value += numsec + "/";
	// 			result = result / Number(numsec);				
	// 		}
	// 		else
	// 		{
	// 			process_text.value += numsec + "/";
	// 			result = result / Number(numsec);
	// 			result_text.value = result;
	// 		}
	// 	}

	// }


	//绑定 加法 事件
	plus.onclick = function(){
		if(!operated){
			numfir = result_text.value;
			console.log("第一个数字："+numfir);
			operated = true;
		}else{
			numsec = result_text.value;
			console.log("第二个数字："+numsec);
			operated = false;
		}
		result = Number(numfir) + Number(numsec);
		console.log("结果:"+result);
	};

	// minus.onclick = calculator.minus;
	// //绑定 乘法 事件
	// multiply.onclick = calculator.multiply;

	// divide.onclick = calculator.divide;


	function getClass(className,tagElement){
		if(document.getElementsByClassName){
			return document.getElementsByClassName(className);
		}
		else{
			var tag = document.getElementsByTagName(tagElement);
			var tagArr = [];
			for(var i = 0, len = tag.length; i < len; i++)
			{
				if(tag[i].className == className){
					tagArr[tagArr.length] = tag[i];
				}
				return tagArr;
			}

		}
	}
})();