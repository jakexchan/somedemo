/*主页图片轮播*/
window.onload = function(){
	var container = document.getElementById("container");
	var list = document.getElementById("list");
	var buttons = document.getElementById("buttons").getElementsByTagName("span");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	var index = 1;
	var timer;   //定时器
	var animated = false;


	function showButton(){
		for(var i = 0;i < buttons.length; i++)
		{
			if(buttons[i].className == 'on')
			{
				buttons[i].className = '';
				break;
			}
		}
		buttons[index - 1].className = 'on';
	}

	//实现动画函数 
	function animate(offset){
		console.log("animate");
		var newleft = parseInt(list.style.left) + offset;
		var time = 400;   //切换的总时间
		var inteval = 10; //每次间隔时间
		var speed = offset/(time/inteval);  //切换图片的速度

		animated = true;

		var go = function(){
			if( (speed < 0 && parseInt(list.style.left) > newleft) || (speed > 0 && parseInt(list.style.left) < newleft))
			{
				list.style.left = parseInt(list.style.left) + speed + 'px';
				setTimeout(go,inteval);
			}
			else
			{
				list.style.left = newleft + 'px';

				if(newleft > -800)
				{
					list.style.left = -3200 + 'px';
				}
				if(newleft < -3200)
				{
					list.style.left = -800 + 'px';
				}
				animated = false;
			}
		}

		go();		
	}

	//图片自动轮播函数
	function play(){
		timer = setTimeout(function(){
			next.onclick();
			play();
		},3000);
	}
	//停止图片自动轮播
	function stop(){
		clearInterval(timer);
	}

	//“下一个”按钮绑定事件
	next.onclick = function(){
		if(animated)
		{
			return;
		}
		if(index == 4)
		{
			index = 1;
		}
		else
		{
			index += 1;
		}
		showButton();
		animate(-800);

	}

	//“上一个”按钮绑定事件
	prev.onclick = function(){
		if(animated)
		{
			return;
		}
		if(index == 1)
		{
			index = 4;
		}
		else
		{
			index -= 1;		
		}

		showButton();
		animate(800);	
	}

	//小按钮切换图片
	for(var i = 0; i < buttons.length; i++)
	{
		if(this.className == 'on')
		{
			return;
		}

		buttons[i].onclick = function(){
			var myIndex = parseInt(this.getAttribute('index'));
			var Movepx = -800 * (myIndex - index);

			animate(Movepx);
			index = myIndex;
			showButton();

		}

	}
	container.onmouseover = stop;
	container.onmouseout = play;

	play();
}