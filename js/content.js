var address = ["images/page1.jpg", "images/page2.jpg","images/page3.jpg"];

var tag_top,//显示背景的div标签
	timer,//定时器
	index = 2,//图片编号
	tag_ul,
	tags_li;
	
onload = function(){
	//获取背景标签
	tag_top = document.getElementById("top");
	//获取列表标签
	tag_ul = document.getElementById("list");
	//添加li标签
	loadTop();
	tags_li = tag_ul.getElementsByTagName("li");
	//加载背景
	changeAddress();
	//启动定时器
	toStart();
	//设置鼠标悬浮和移除效果
	tag_top.onmouseover = function(){
		toStop();
	}
	tag_top.onmouseout = function(){
		toStart();
	}
	
	//设置选择图片效果
	for (var i = 0; i < tags_li.length; i++) {
		
		tags_li[i].onmouseover = function(){
			toStop();
			index = this.innerHTML-1;
			tag_top.style.background ="url(" + address[this.innerHTML-1] +")";
			tag_top.style.backgroundSize ="cover";
		}
		
		tags_li[i].onmouseout = function(){
			toStart();
		}
		
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
	
	tag_top.style.background ="url(" + address[index] +")";
	tag_top.style.backgroundSize ="cover";
	
	//换背景图片
	index++;
	
	if (index == 3) {
		index = 0;		//归零
	}
}

function loadTop(){
	for (var i = 0; i < address.length; i++) {
		
		var new_li = document.createElement("li");
		
		new_li.innerHTML = i+1;
		
		tag_ul.appendChild(new_li);
		
	}
}







