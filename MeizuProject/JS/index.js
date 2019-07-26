//添加直降与领劵小圆球
for (var i = 0; i < $(".things1 .redC").length; i++) {
    var div = $("<div></div>").css({
        "width": "60px",
        "height": "60px",
        "borderRadius": "50%",
        "position": "absolute",
        "left": "29px",
        "top": "29px",
        "background": "url('../IMG/indexImg/小标记红色.png') no-repeat",
        "textAlign": "center",
        "color": "#FFFFFF",
        "lineHeight": "60px",
        "fontSize": "16px"
    }).text("新品");
    div.appendTo($(".things1 .redC").eq(i))
}
for (var i = 0; i < $(".things1 .blueC").length; i++) {
    var div = $("<div></div>").css({
        "width": "60px",
        "height": "60px",
        "borderRadius": "50%",
        "position": "absolute",
        "left": "29px",
        "top": "29px",
        "background": "url('../IMG/indexImg/小标记蓝色.png') no-repeat",
        "textAlign": "center",
        "color": "#FFFFFF",
        "lineHeight": "60px",
        "fontSize": "16px"
    }).text("直降");
    div.appendTo($(".things1 .blueC").eq(i))
}

$(".control").on("click",function(){
    location.href = "../HTML/list.html"
})