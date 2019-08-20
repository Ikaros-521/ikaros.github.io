/**
 * Created by Ikaros on 2018/1/2.
 */
$(document).ready(function() {
    //$("#resizable").resizable({
    //    containment: "#container"
    //});
    $("#menu").menu({position: {at: "right top"}});

    $(".d1").hide();
    $("#li1").click(function () {
        $(".d1").toggle(1000);
    });
    $(".box1").hide();
    $("#li2").click(function () {
        $(".box1").toggle(2000);
        imgplus();
    });
    $(".d3").hide();
    $("#li3").click(function () {
        $(".d3").toggle(1000);
    });
    $("#time").hide();
    $("#li4").click(function () {
        $("#time").toggle(1000);
    });
    var clickNumber =0;
    $("#li5").click(function () {
        if(clickNumber %2==0){
            $("body").css("background","#000000");
        }else{
            $("body").css("background","url('img/6.png')");
        }
        clickNumber ++;
    });
	$(".d6").hide();
	$("#li6").click(function () {
        $(".d6").toggle(2000);
    });
	$(".d7").hide();
	$("#img_eat").click(function () {
        $(".d7").toggle(2000);
    });
	
	
    var clicknum=0;
    $("#b").click(function(){
        if(clicknum==0){
            $('embed').remove();
            $('body').append('<embed src="voice/早上好%20主人.mp3" autostart="true" hidden="true" loop="false">');
        }else if(clicknum==1){
            $('embed').remove();
            $('body').append('<embed src="voice/是.mp3" autostart="true" hidden="true" loop="false">');
        }else if(clicknum==2){
            $('embed').remove();
            $('body').append('<embed src="voice/主人很开心.mp3" autostart="true" hidden="true" loop="false">');
        }else if(clicknum==3){
            $('embed').remove();
            $('body').append('<embed src="voice/和我一起去约会吧.mp3" autostart="true" hidden="true" loop="false">');
        }else if(clicknum==4){
            $('embed').remove();
            $('body').append('<embed src="voice/我···爱你.mp3" autostart="true" hidden="true" loop="false">');
        }else if(clicknum==5){
            $('embed').remove();
            $('body').append('<embed src="voice/主人在的地方就是我的归宿.mp3" autostart="true" hidden="true" loop="false">');
        }else{
            clicknum=0;
        }
        clicknum++;

    });


    $(window).on("load",function(){
        //imgLocation();
        snow();
		var layer1 = document.getElementById('layer1');
        var sx = sy = 1;
        var x = y = 0;
 
        function move(){
            if(document.documentElement.clientWidth - layer1.offsetWidth-1 < x || x < 0){
                sx = -sx;
            }
 
            if(document.documentElement.clientHeight - layer1.offsetHeight-1 < y || y < 0){
                sy = -sy;
            }
 
            x = layer1.offsetLeft + sx;
            y = layer1.offsetTop + sy;
 
            layer1.style.left = x + 'px';
            layer1.style.top = y + 'px';
        }
 
        var timer = setInterval(move, 100);
 
        layer1.onmouseover = function(){
            clearInterval(timer);
        }
 
        layer1.onmouseout = function(){
            timer = setInterval(move, 100);
        }
		
		// 透明度来回变换
		var timer1 = setInterval(colorLiner,20);
		var val = 100;
		function colorLiner(){
			var oDiv = document.getElementById('img_eat');
			if(val >= 0)
			{
				oDiv.style.opacity = val/100;	
			}
			if(val < 0)
			{
				oDiv.style.opacity = -val/100;
			}
			if(val == -100)
			{
				val = -val;
			}
			val--;
		}	
	});
	
	
	$("#navbar").click(function () {
        window.open("http://ikaros-521.gitee.io/navbar/");
    });
	
	
});

function imgplus(){
    $("#img2").click(function(){
        var width = $(this).width();
        if(width==200)
        {
            $(this).width(500);
            $(this).height(250);
        }
        else
        {
            $(this).width(200);
            $(this).height(100);
        }
    });
    $("#img2").mouseout(function(){
        var width = $(this).width();
        if(width==200)
        {
        }
        else
        {
            $(this).width(200);
            $(this).height(100);
        }
    });
    $("#img3").click(function(){
        var width = $(this).width();
        if(width==200)
        {
            $(this).width(500);
            $(this).height(250);
        }
        else
        {
            $(this).width(200);
            $(this).height(100);
        }
    });
    $("#img3").mouseout(function(){
        var width = $(this).width();
        if(width==200)
        {
        }
        else
        {
            $(this).width(200);
            $(this).height(100);
        }
    });
    $("#img4").click(function(){
        var width = $(this).width();
        if(width==200)
        {
            $(this).width(500);
            $(this).height(250);

        }
        else
        {
            $(this).width(200);
            $(this).height(100);
        }
    });
    $("#img4").mouseout(function(){
        var width = $(this).width();
        if(width==200)
        {
        }
        else
        {
            $(this).width(200);
            $(this).height(100);
        }
    });

    $("#img6").click(function(){
        var width = $(this).width();
        if(width==200)
        {
            $(this).width(500);
            $(this).height(250);
        }
        else
        {
            $(this).width(200);
            $(this).height(100);
        }
    });
    $("#img6").mouseout(function(){
        var width = $(this).width();
        if(width==200)
        {
        }
        else
        {
            $(this).width(200);
            $(this).height(100);
        }
    });

    $("#img10").click(function(){
        var width = $(this).width();
        if(width==200)
        {
            $(this).width(500);
            $(this).height(250);
        }
        else
        {
            $(this).width(200);
            $(this).height(100);
        }
    });
    $("#img10").mouseout(function(){
        var width = $(this).width();
        if(width==200)
        {
        }
        else
        {
            $(this).width(200);
            $(this).height(100);
        }
    });
}

//function imgLocation(){
//    var box = $(".box1");
//    var boxWidth = box.eq(0).width();
//    var num = Math.floor($(window).width()/boxWidth);
//    var boxArr=[];
//    box.each(function(index,value){
//        //console.log(index+"--"+value);
//        var boxHeight = box.eq(index).height();
//        if(index<num){
//            boxArr[index] = boxHeight;
//            //console.log(boxHeight);
//        }else{
//            var minboxHeight = Math.min.apply(null,boxArr);
//            //  console.log(minboxHeight);
//            var minboxIndex = $.inArray(minboxHeight,boxArr);
//            // console.log(minboxIndex);
//            // console.log(value);
//            $(value).css({
//                "position":"absolute",
//                "top":minboxHeight,
//                "left":box.eq(minboxIndex).position().left
//            });
//            boxArr[minboxIndex]+=box.eq(index).height();
//        }
//    });
//}

function showTime(){
    var date=new Date();
    var str;
    str=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+"&nbsp;";
    str+=full(date.getHours())+":"+full(date.getMinutes())+":"+full(date.getSeconds());
    document.getElementById("time").innerHTML=str;
}
function full(n){
    if(n<10){
        n="0"+n;
    }
    return n;
}
window.setInterval("showTime()",1000);

/*闪现广告
function move(){
    document.getElementById("layer1").style.left=Math.random()*1000+"px";
    document.getElementById("layer1").style.top=Math.random()*200+"px";
    setTimeout("move()",1000);
}
*/

function snow() {
    //1、定义一片雪花模板
    var flake = $("<div>").css({
        "position": "absolute",
        "color": "#fff"
    }).html("❄");

    //获取页面的宽度，利用这个数来算出，雪花开始时left的值
    var documentWidth = $(document).width();

    //获取页面的高度 相当于雪花下落结束时Y轴的位置
    var documentHieght = $(document).height();

    //定义生成一片雪花的毫秒数
    var millisec = 100;
    //2、设置第一个定时器，周期性定时器，每隔一段时间（millisec）生成一片雪花；
    setInterval(function() {
        //随机生成雪花下落 开始 时left的值，相当于开始时X轴的位置
        var startLeft = Math.random() * documentWidth;

        //随机生成雪花下落 结束 时left的值，相当于结束时X轴的位置
        var endLeft = Math.random() * documentWidth;

        //随机生成雪花大小
        var flakeSize = 5 + 20 * Math.random();

        //随机生成雪花下落持续时间
        var durationTime = 4000 + 7000 * Math.random();

        //随机生成雪花下落 开始 时的透明度
        var startOpacity = 0.7 + 0.3 * Math.random();

        //随机生成雪花下落 结束 时的透明度
        var endOpacity = 0.2 + 0.2 * Math.random();

        //3、克隆一个雪花模板,定义雪花的初始样式，拼接到页面中
        flake.clone().appendTo($("body")).css({
            "left": startLeft,
            "opacity": startOpacity,
            "font-size": flakeSize,
            "top": "-25px",
        }).animate({ //执行动画
            "left": endLeft,
            "opacity": endOpacity,
            "top": documentHieght
        }, durationTime, function() {
            //4、当雪花落下后，删除雪花。
            $(this).remove();
        });
    }, millisec);
};
