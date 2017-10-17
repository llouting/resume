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




 // 向下滚动板块  向下滚动700  时间1000（1s）

$(".xiala").click(function () {  
       // 向下滚动板块  向下滚动700  时间1000（1s）
        $({dNum:0}).animate({dNum:700},{
            duration:1000,
            step: function () {
                $(window).scrollTop(this.dNum);
            }
        })
    });

// about me
$(".btn").click(function () {  
       // 向下滚动板块  向下滚动700  时间1000（1s）
        $({dNum:0}).animate({dNum:2000},{
            duration:1500,
            step: function () {
                $(window).scrollTop(this.dNum);
            }
        })
    });

// 顶部导航效果
$("nav .nav li:eq(0)").click(function(){
	$({num:$(window).scrollTop()}).animate({num:0},{
		duration:1000,
		step:function(){
			$(window).scrollTop(this.num);
			}
		})
	});
$("nav .nav li:eq(1)").click(function(){
	$({num:$(window).scrollTop()}).animate({num:700},{
		duration:1000,
		step:function(){
			$(window).scrollTop(this.num);
			}
		})
	});

$("nav .nav li:eq(2)").click(function(){
	$({num:$(window).scrollTop()}).animate({num:1200},{
		duration:1000,
		step:function(){
			$(window).scrollTop(this.num);
			}
		})
	});
$("nav .nav li:eq(3)").click(function(){
	$({num:$(window).scrollTop()}).animate({num:2000},{
		duration:1000,
		step:function(){
			$(window).scrollTop(this.num);
			}
		})
	});

$("nav .nav li:eq(4)").click(function(){
	$({num:$(window).scrollTop()}).animate({num:4000},{
		duration:1000,
		step:function(){
			$(window).scrollTop(this.num);
			}
		})
	});



}) 




