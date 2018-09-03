/**
 * 作者：1300720115@qq.com
 * 时间：2018-01-24
 * 描述：生活篇主目录控制
 */
$(function(){
	$("#familyArea").show();
	$("#eatArea").hide();
	$("#travelArea").hide();
	$(".list-group-item").each(function(){
	    $(this).click(function(){
	         alert('客官稍安勿躁，小Q正在努力打通生活栏目备忘详情通道，敬请期待~');
    	})
	 });
	//亲情
	var family = function(){
		$("#familyArea").show();
		$("#eatArea").hide();
		$("#travelArea").hide();
		document.getElementById("family").style = "text-align: center;font-family:华文仿宋;border-bottom:5px solid deepskyblue;color:blue;";
		document.getElementById("eat").style = "text-align: center;font-family:华文仿宋;color:black;";
		document.getElementById("travel").style = "text-align: center;font-family:华文仿宋;color:black;";
	}
	//吃货
	var eat = function(){
		$("#familyArea").hide();
		$("#eatArea").show();
		$("#travelArea").hide();
		document.getElementById("family").style = "text-align: center;font-family:华文仿宋;color:black;";
		document.getElementById("eat").style = "text-align: center;font-family:华文仿宋;border-bottom:5px solid deepskyblue;color:blue;";
		document.getElementById("travel").style = "text-align: center;font-family:华文仿宋;color:black;";

	}
	//旅游
	var travel = function(){
		$("#familyArea").hide();
		$("#eatArea").hide();
		$("#travelArea").show();
		
		document.getElementById("family").style = "text-align: center;font-family:华文仿宋;color:black;";
		document.getElementById("eat").style = "text-align: center;font-family:华文仿宋;color:black;";
		document.getElementById("travel").style = "text-align: center;font-family:华文仿宋;border-bottom:5px solid deepskyblue;color:blue;";
	}
	//更多
	var more = function(){
		alert('客官稍安勿躁，小Q正在努力打通生活栏目更多>>通道，敬请期待~');
	}
	
	$("#family").click(function(){
		family();
	});
	
	$("#eat").click(function(){
		eat();
	});
	
	$("#travel").click(function(){
		travel();
	});
	$("#more").click(function(){
		more();
	});
})