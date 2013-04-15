var t = 0;
var pici = 0;
var maire = {//玛丽黛佳 全局方法
	curvycorners : function(){//圆角
		curvyCorners.addEvent(window, 'load', initCorners);
		function initCorners() {
			var settings = {
				tl: { radius: 8 },
				tr: { radius: 8 },
				bl: { radius: 8 },
				br: { radius: 8 },
				antiAlias: true
			}
			curvyCorners(settings, ".playerPanel");
		  }
	},
	isHidden : function(dom) {
		return $(dom).css('display')=='none';
		},
	selectUI : function(){//自定义下拉菜单
		$(".open_select").click(function(event){	
			event.stopPropagation();
			$(this).parents('.select_box').find(".select_list").toggle();
			$(this).parents('.select_box').siblings('.select_box').find('.select_list').hide();
		});

		//离开选择区域后，展开的下拉列表关闭
		$(document).click(function(event){
			var eo=$(event.target);
			if($(".open_select").is(":visible") && eo.attr("class")!="select_list" && !eo.parent(".select_list").length)
			$('.select_list').hide();
		});

		/*获取选中的值*/
		var $dss=$(".currency_type");
		$dss.click(function(){	
				var $txt=$(this).text();//展开菜单中的列表文本值
				var $hidden_txt=$(this).parents('.selectbox').find(".hidden_txt");
				var $t1=$(this).parents('.select_box').find('.open_select');//模拟文本框，接受选择的值
				$t1.text($txt);	
				$hidden_txt.val($txt);
				$(this).parents(".select_list").hide();			
			});
		//下拉列表滑过的背景
		$(".select_list li").hover(function(){
				$(this).addClass("h_bg");
			},function(){
				$(this).removeClass("h_bg");		
			});
	},
	popshow : function(html,w,h,popId){
		var winW = document.body.clientWidth;
        var windowH = document.documentElement.clientHeight;
        var bodyH = document.body.clientHeight;
		var maskH = bodyH+120;
		var winScroll = $(window).scrollTop();
        var popTop = windowH > h ? ((windowH - h) / 2 + winScroll) : 0;
        var popLeft = (winW - w) / 2;
		$('body').append('<div id="mask" style="position:absolute;width:100%;height:'+maskH+'px;top:-63px;left:0;z-index:9999;background:#000;opcity:0.5"></div>')
        $('body').append(html);
        //$('#mask').css({ 'height': bodyH });
        $('#' + popId + '').css({ 'top': popTop, 'left': popLeft });
	
		$('.closepop').live('click', function() {
            var $this = $(this);
            $this.parents('.poppanel').remove();
            $('#mask').remove();
        })
	},
	initialize : function(){
		var _this = this;
		$('a,input[type="button"],input[type="file"],input[type="radio"],input[type="submit"],input[type="checkbox"],button').live('focus',function(){$(this).attr('hidefocus','hidefocus')});//FF IE去除虚线框
		$("#product").mouseover(function(){
			$("#pop").show();
		});
		$("#nav").mouseleave(function(){
			$("#pop").hide();
		})
		$("#navcyt").mouseleave(function(){
			$("#pop").hide();
		})
		$('.logbtns p').live('mouseover',function(){
			$(this).addClass('hoverbtn');
		})
		$('.logbtns p').live('mouseout',function(){
			$(this).removeClass('hoverbtn');
		})
		$('.toplink_login').click(function(){
			_this.popshow('<div id="poplogin" class="poppanel"><p class="closepop"></p><div class="logform"><p class="logheader">用户登陆</p><div class="logitem"><label for="">用&nbsp;户&nbsp;名</label><input type="text" class="input1" /><a href="regist.html" class="toregist">点击注册</a></div><div class="logitem"><label for="">密&nbsp;&nbsp;&nbsp;&nbsp;码</label><input type="password" class="input1" /><a href="" class="toregist">忘记密码？</a></div><div class="logbtns"><p class="submit">提交</p><p class="reset">重置</p></div></div></div>',444,368,'poplogin')
		})
	}
}
maire.homePage = {//玛丽黛佳首页
	initialize :function(){
	function scroll() {
		var i=$(document).scrollTop();
		i+=5;
		if(i<=685){
		$(document).scrollTop(i);
		setTimeout(arguments.callee,1);
		}
	}
	$("#homenav").mouseover(function(){
		scroll();
	});
	$('.subnav02').hover(function(e){//滑出小视频
		var evt = e|| window.event;
		evt.stopPropagation ?evt.stopPropagation() : (evt.cancelBubble=true);
		var tinyvideo = $('#tiny').val();
		$(this).css('z-index',11)
		$('#cover').show();
		$('#tinyvedio').animate({
			'width':182
		},500,function(){
			$('#tinyvedio').css('background','none');
			$('#tinyvedio').append('<embed src="p182_145.swf?v='+tinyvideo+'" width="182" height="145" type="application/x-shockwave-flash" ></embed>')
		})
	},function(e){
		var evt = e|| window.event;
		evt.stopPropagation ?evt.stopPropagation() : (evt.cancelBubble=true);
		$(this).css('z-index',9)
		$('#cover').hide();
		$('#tinyvedio').animate({
			'width':0
		},500,function(){
			$('#tinyvedio embed').remove();
			$('#tinyvedio').css({'background':'url(img/brandtinypic.jpg) no-repeat'});
			
		})
	})
	$('.movex').hover(function(e){
		var evt = e|| window.event;
		evt.stopPropagation ?evt.stopPropagation() : (evt.cancelBubble=true);
		var dis = $(this).attr('distance')*1;
		if($(this).children('.moveimg').width()==0){
			$(this).css('z-index',11)
			$('#cover').show();
			$(this).children('.moveimg').animate({
				'width':dis
			},500)
		}else{
			return false;
		}
	},function(e){
		var evt = e|| window.event;
		evt.stopPropagation ?evt.stopPropagation() : (evt.cancelBubble=true);
		var dis = $(this).attr('distance')*1;
		
			$(this).css('z-index',9)
			$('#cover').hide();
			$(this).children('.moveimg').animate({
				'width':0
			},500)
		
	})
	$('.movey').hover(function(e){
		var evt = e|| window.event;
		evt.stopPropagation ?evt.stopPropagation() : (evt.cancelBubble=true);
		var dis = $(this).attr('distance')*1;
		if($(this).children('.moveimg').height()==0){
			$(this).css('z-index',11)
			$('#cover').show();
			$(this).children('.moveimg').animate({
				'height':dis
			},500)
		}else{
			return false;
		}
	},function(e){
		var evt = e|| window.event;
		evt.stopPropagation ?evt.stopPropagation() : (evt.cancelBubble=true);
		var dis = $(this).attr('distance')*1;
			$(this).css('z-index',9)
			$('#cover').hide();
			$(this).children('.moveimg').animate({
				'height':0
			},500)
		})
	}
}
maire.brand = {	//品牌页面
	playerClose : function(){//关闭大视频窗口
		var $player = $('.playerPanel');
		//var src = $('#svideoname').val();
		$player.hide();
		setTimeout(function(){
			$player.remove();
			//$('.svideo embed').attr('src','p284_220.swf?v='+sv+'');
			$('.svideo embed').css('visibility','visible');
			},500);
		},
	BigFlashPlayer : function(bv){//大视频窗口打开
		var _this = this;
		var winW = document.body.clientWidth;
		var winH = document.body.clientHeight; 
		var left = (winW-855)/2;
		var $player = $('.playerPanel');
		var $playerCloseBtn = $('.playerPanel span');
		$('#center').append('<div class="playerPanel" style="position:absolute;width:855px;height:550px;top:35px;left:0px;background:#000;"><p style="text-align:right;height:20px;";><span style="margin-right:10px;line-height:20px;font-size:12px;color:#fff;cursor:pointer"><img src="img/close.png" /></span></p><div class="player" style="width:855px;height:510px;display:none;"><embed src=p854_510.swf?v='+bv+' width="854" height="510" type="application/x-shockwave-flash" wmode="transparent"></embed></div><p style="height:20px;"></p></div>')
		var $playerDiv = $('.player');
		$playerDiv.show(1000);
		$playerCloseBtn.live('click',function(){
			_this.playerClose()
		});
	}
	/*initialize : function(){
		var src = $('#svideoname').val();
		var html = '';
			html +='<embed style="display:none;margin-top:30px;" src="'+src+'" width="284" height="220" type="application/x-shockwave-flash"></embed>'
		$('.svideo').append(html);
	}*/
}
maire.brand.mark = {//品牌印记
	yearPage : function(timeArray){//年份翻动
		var i=0;
		var h=$(".textDiv li").height();
		var len=timeArray.length;
		$(".downarrow").click(function(){
			var previ = timeArray.indexOf($('.prevYear').html());
			var nexti = timeArray.indexOf($('.nextYear').html());
			i--;
			if(i > -(len-1)){
				$('.prevYear').html(timeArray[previ+1]);
				$('.nextYear').html(timeArray[nexti+1]);
			}else if(i==-(len-1)){
				$('.prevYear').html(timeArray[previ+1]);
				$('.nextYear').hide();
				$('.downarrow').hide();
			}
			i = Math.max(-(len-1), i);
			var dis=i*h;
			var mt = $(".textDiv ul").css('margin-top');
			$(".textDiv ul").animate({"margin-top":dis});
		});
		$(".uparrow").click(function(){
			var previ = timeArray.indexOf($('.prevYear').html());
			var nexti = timeArray.indexOf($('.nextYear').html());
			if(i<0&&i!=-(len-1)){
				$('.prevYear').html(timeArray[previ-1]);
				$('.nextYear').html(timeArray[nexti-1]);
			}else if(i==-(len-1)){
				$('.nextYear').show();
				$('.downarrow').show();
				$('.prevYear').html(timeArray[previ-1]);
			}
			i++;
			i = Math.min(0, i);
			var dis=i*h;
			$(".textDiv ul").animate({"margin-top":dis})
		});
	}
}
maire.brand.fans = {//品牌玛粉
	picShow : function(x){
		var $picdiv = $('.picdiv');
		$picdiv.children().eq(x).fadeIn(2000);
		$picdiv.children().eq(x).fadeOut(2000);
	},
	fadeShow : function(){//淡入淡出效果
		var _this = this;
		var $picdiv = $('.picdiv');
		var imglength = $picdiv.children().length;
		if(imglength==1){
			$picdiv.children().fadeIn(2000);
		}else{
			if(pici==imglength) pici=0;
			_this.picShow(pici);
			pici++;
		}
	}
}
maire.exchange = {//交流
	slider : function(main){
			var len=$(main).find(".img").length;
			$(main).find(".flip").find(".flip-left").text("1/"+len);
			$(main).click(function(event){
				event.stopPropagation();
			});
		},
	newsPanelShow : function(){//点击新闻弹出新闻面板
		var w = document.body.clientWidth;
		var h = 780;
		var p = $(this).parents('li').attr('p')*1;
		var html = '';
		html += '<div class="newsPanel"><div class="titlenews"><a class="closenews"><img src="img/close.png"/></a></div><div class="nano"><div class="content"><p class="mainnews">';
		html += '毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美于是他笔下的女人兑现了他的座右铭。她们很美，不是美得单一精致，她们美的迥然不同并真实可见。毕加索说，他从不追寻，却一直在发现。于是他笔下的女人兑现了他的座右铭。她们很美'			
		html += '</p></div></div></div>';
		$('body').append('<div id="mask"></div>')
		$('#mask').css({'width':w,'height':h});//获取屏幕高宽调整遮罩大小
		$('body').append(html);
		$('.newsPanel').css('left',300+30*p)//弹出新闻面包根据根据页数位置有偏移
		
		$(window).resize(function(){//屏幕大小改变，遮罩层大小调整
			var newW = document.body.scrollWidth;
			var newH = document.body.scrollHeight;
			if($('body').find('#mask').length>0){
				$('#mask').css({'width':newW,'height':newH});
			}
		});
		$(".nano").nanoScroller();//自定义滚动条
		$('.closenews').live('click',function(){//点击X关闭新闻面板
			$(this).parents('.newsPanel').remove();
			$('#mask').remove();
		})
	},
	// initNews : function(){//初始新闻箭头
	// $('.news').each(function(){
		// var h = $(this).children().height();
		// if(h>120){//根据新闻数量控制向上向下箭头的隐藏/显示
		// $(this).siblings('.uparrow').show();
		// $(this).siblings('.downarrow').show();
			// }
		// })
	// },
	newsOpen : function(){//根据新闻打开不同图片，默认打开第一条（新增方法）
		var p = $(this).attr('p')*1;//p为自定义属性，可以理解为新闻的编号，p=0,1,2,3,4...表示第一条新闻，第二，第三，第四。。。
		var $li = $(this).parents('li');
		var $right = $li.find('.li-right');
		var len=$right.find(".img").length;
		if(navigator.userAgent.indexOf('Firefox') >= 0){//ff浏览器闪动BUG
			$li.find(".exchangeNewsPanel").show().end().siblings("li").find(".exchangeNewsPanel").hide();
			$li.css({"opacity":1,"background-color":"#000000","cursor":"default"}).animate({"width":"924px"},1).children().show().end().find(".small").hide().end().siblings("li").css({"opacity":1,"background-color":"#2b211c"}).animate({"width":"32px"},1).children().hide().end().find(".small").show();
			$right.find('.img').hide();
			$right.find('.img[p='+p+']').show();
			$right.find(".flip-left").text((p+1)+"/"+len);
		}else{
			$li.find(".exchangeNewsPanel").show().end().siblings("li").find(".exchangeNewsPanel").hide();
			$li.css({"opacity":1,"background-color":"#000000","cursor":"default"}).animate({"width":"924px"}).children().show().end().find(".small").hide().end().siblings("li").css({"opacity":1,"background-color":"#2b211c"}).animate({"width":"32px"}).children().hide().end().find(".small").show();
			$right.find('.img').hide();
			$right.find('.img[p='+p+']').show();
			$right.find(".flip-left").text((p+1)+"/"+len);
		}
	},
	openLi : function(){//点击LI打开新闻（原来的方法）
		if(navigator.userAgent.indexOf('Firefox') >= 0){//ff浏览器闪动BUG
			if($(this).width()!=924){
			$(this).css({"opacity":1,"background-color":"#000000","cursor":"default"}).animate({"width":"924px"},1).children().show().end().find(".small").hide().end().siblings("li").css({"opacity":1,"background-color":"#2b211c"}).animate({"width":"32px"},1).children().hide().end().find(".small").show();
			$(this).find(".exchangeNewsPanel").show().end().siblings("li").find(".exchangeNewsPanel").hide();
			}
			else{
			$(this).css({"opacity":0.7,"background-color":"#0a0000"}).animate({"width":"255px"},1).children().show().end().find(".small").hide().end().siblings("li").css({"opacity":0.7,"background-color":"#0a0000"}).animate({"width":"255px"},1).children().show().end().find(".small").hide();
			$(this).find(".exchangeNewsPanel").hide();
			}
		}else{
			if($(this).width()!=924){
				$(this).css({"opacity":1,"background-color":"#000000","cursor":"default"}).animate({"width":"924px"}).children().show().end().find(".small").hide().end().siblings("li").css({"opacity":1,"background-color":"#2b211c"}).animate({"width":"32px"}).children().hide().end().find(".small").show();
				$(this).find(".exchangeNewsPanel").show().end().siblings("li").find(".exchangeNewsPanel").hide();
				}
				else{
				$(this).css({"opacity":0.7,"background-color":"#0a0000"}).animate({"width":"255px"}).children().show().end().find(".small").hide().end().siblings("li").css({"opacity":0.7,"background-color":"#0a0000"}).animate({"width":"255px"}).children().show().end().find(".small").hide();
				$(this).find(".exchangeNewsPanel").hide();
				}
		}
	},
	initialize : function(){
		var _this = this;
		//_this.initNews();//根据新闻数量控制向上向下箭头的隐藏/显示
		$('.exchangeNewsPanel a').click(_this.newsOpen);//点击新闻事件
		//$('.li-right .more').click(_this.newsPanelShow);//点击“更多”打开新闻面板
		$('.exchangeNewsPanel').click(function(event){//阻止冒泡
			event.stopPropagation();
			event.preventDefault();
		})
		$('.uparrow').click(function(){//向上翻动新闻面板
			var mt = $(this).siblings('.news').children().css('margin-top').split('p')[0]*1;
			if(mt!=0&&mt%120==0){
			var dis = mt+120;
			$(this).siblings('.news').children().animate({"margin-top":dis})
			}
		})
		$('.downarrow').click(function(){//向下翻动新闻面板
			var mt = $(this).siblings('.news').children().css('margin-top').split('p')[0]*1;
			var h = -($(this).siblings('.news').children().height());
			if(mt%120==0&&mt>(h+120)){
				var dis = mt-120;
				$(this).siblings('.news').children().animate({"margin-top":dis})
			}
		})
		$('.news div a').hover(function(){//鼠标悬停新闻变亮效果
			$(this).css('color','#fff');
		},function(){
			$(this).css('color','#433E3E')
		})
		$("#page li").mouseover(function(){
			if($(this).width()==255){
			$(this).css({"opacity":1,"background-color":"#000000","cursor":"pointer"}).siblings("li").css({"opacity":0.7,"background-color":"#0a0000"});
			$(this).find(".exchangeNewsPanel").show().end().siblings("li").find(".exchangeNewsPanel").hide();
			var index=$(this).prevAll().length+1;
			$("#content").css("background-image","url(img/exchange"+index+".jpg)");
			}
		})
		$("#page li").click(_this.openLi);
		$('.down').click(function(event){//翻页向后
			var len = $(this).parents('.exslider').find('.img').length;
			var i=$(this).parents('.exslider').find(".img:visible").prevAll().length;
			i=i>=len-2?len-2:i;
			$(this).parents('.exslider').find(".img").eq(i+1).show().siblings(".img").hide();
			$(this).parents('.exslider').find(".flip-left").text((i+1+1)+"/"+len);
			event.stopPropagation();
		});
		$('.up').click(function(event){//翻页向前
			var len = $(this).parents('.exslider').find('.img').length;
			var i=$(this).parents('.exslider').find(".img:visible").prevAll().length;
			i=i<=1?1:i;
			$(this).parents('.exslider').find(".img").eq(i-1).show().siblings(".img").hide();
			$(this).parents('.exslider').find(".flip-left").text((i-1+1)+"/"+len);
			event.stopPropagation();
		});
		_this.slider("#slider01")
		_this.slider("#slider02")
		_this.slider("#slider03")
		_this.slider("#slider04")
	}
}
maire.findcounter = {//查询专柜页面
	initialize : function(){
		$('.chosenselect').chosen();
		$('.provinceicon').hover(function(){
			var $this = $(this);
			h = $this.attr('h');
			$(this).css('background','url(img/provincebg'+h+'a.png)')
		},function(){
			var $this = $(this);
			h = $this.attr('h');
			$(this).css('background','url(img/provincebg'+h+'.png)')
		})
		$('.recruitmentBtn img').hover(function(){//招聘按钮
			$(this).attr('src','img/recruitment_btn1.png');
		},function(){
			$(this).attr('src','img/recruitment_btn.png');
		})
		$('.btn').hover(function(){//查询按钮鼠标悬停样式切换
			$(this).css('background-position','top')
		},function(){
			$(this).css('background-position','bottom')
		})
		$('.areasection').hover(function(){//地址面板悬停样式切换
			$(this).css('background','url(img/area_bg2.png) no-repeat')
		},function(){
			$(this).css('background','url(img/area_bg1.png) no-repeat')
		})
		$('.pagepoint').click(function(){//分页按钮样式切换
			$(this).addClass('current').siblings().removeClass('current');
		})
	}
}
maire.college = {//玛粉学院
	videoplay : function(){
		var $this = $(this);
		var src = $this.attr('src');
		var html = '';
		html += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="100%" height="100%">';
		html += '<param name="movie" value="playVideoF-2.swf?v='+src+'" />';
		html += '<param name="quality" value="high" />';
		html += '<embed src="playVideoF-2.swf?v='+src+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="100%" height="100%"></embed>'
		html += '</object>'
		$('.videopanel').html(html);
	},
	initialize : function(){
		$('.content dt').click(this.videoplay);	
	}
}
maire.fansvideo = {
	initHeight : function(dom,row,unith){
		var length = dom.children().length;
		var h = Math.ceil(length/row)*unith+32;
		dom.height(h);
	},
	initialize : function(){
		$('.fansv_ul').each(function(){
			var _this = this;
			maire.fansvideo.initHeight($(this),4,230);	
		})
	}
}
maire.regist = {
	initialize : function(){
		$('.logbtns p').hover(function(){
			$(this).addClass('hoverbtn');
		},function(){
			$(this).removeClass('hoverbtn');
		});
		
		$('.chosenselect').chosen();
		
		$('.registmore').click(function(){
			var $this = $(this);
			$('.hideregist').animate({'height':138},500,function(){$this.parent().remove();})
		})
	}
}
maire.color = {
	initialize : function(){
		$('.oprateicon').live('click',function(){
			var $this = $(this);
			if($this.hasClass('oprateicon2')){
				$this.siblings('.coloroprate').animate({'top':'-26px'},500,function(){
					$this.removeClass('oprateicon2')
				})
			}else{
				$this.siblings('.coloroprate').animate({'top':'0'},500,function(){
					$this.addClass('oprateicon2')
				})
			}
			
		})
	}
}