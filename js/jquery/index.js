$(function(){
	$('#nav li').click(function(){
		var _this=$(this);
		var active=_this.data("name");
		_this.addClass("active").siblings().removeClass("active");
		$.cookie("nav", active, { path: "/", expires: 7 }) 
		console.log($.cookie("nav"));
	})
})
