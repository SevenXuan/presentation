var address1 = ["images/model1.jpeg", "images/model2.jpeg","images/model3.jpeg"];
var address2 = ["images/moto1.jpeg","images/moto2.jpeg","images/moto3.jpeg","images/moto4.jpeg"]

var tag_picture1,
	tag_picture2,
	timer,
	i = 2;
	
onload = function(){
	//获取背景标签
	tag_picture1 = document.getElementById("picture1");
	tag_picture2 = document.getElementById("picture2");
	
	changeAddress();
	
	toStart();
	
	tag_picture1.onmouseover = function(){
		toStop();
	}
	tag_picture1.onmouseout = function(){
		toStart();
	}
	
	tag_picture2.onmouseover = function(){
		toStop();
	}
	tag_picture2.onmouseout = function(){
		toStart();
	}
	
}

//启动定时器
function toStart(){
	if(!timer){
		timer = setInterval(changeAddress,2000);
	}
}

//关闭定时器
function toStop(){
	if(timer){
		clearInterval(timer);
		timer = null;
	}
}

//改变背景图片
function changeAddress(){
	
	tag_picture1.style.background ="url(" + address1[i] +")";
	tag_picture2.style.background ="url(" + address2[i] +")";
	tag_picture1.style.backgroundSize ="cover";
	tag_picture2.style.backgroundSize ="cover";
	i++;
	
	if (i == 3) {
		i = 0;
	}
}