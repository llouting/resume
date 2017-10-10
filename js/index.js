// alert(1)  
 // 弹出框      以下是选项卡

$(function(){
   
	$(".tab .anniu-box .anniu").click(function(){
		// 选中所有按钮添加点击事件
		$(".tab .content-box ul").hide();
		// 所有内容隐藏
		var num = $(".tab .anniu-box .anniu").index($(this));
		// num表示点击的按钮是哪个
		$(".tab .content-box ul").eq(num).show();
		// 把对应的内容显示出来
		$(".tab .anniu-box .anniu").css({
			// 把所有的按钮背景色去掉
			"background":"rgba(0,0,0,0)"
		})
		$(this).css({
			"background":"#4eb2d6"
			// 把对应按钮的背景色添加
		})
	})


$(".backtop").backTop();
	//$(".backtop") 返回按钮父容器 
}) 




