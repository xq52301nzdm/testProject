//图片JSON数据
var bj = [{
        "imgs": "../IMG/魅族16Xs.png",
        "name": "魅族16Xs"
    },
    {
        "imgs": "../IMG/魅族16X.png",
        "name": "魅族16X"
    },
    {
        "imgs": "../IMG/魅族Note9.png",
        "name": "魅族Note9"
    },
    {
        "imgs": "../IMG/魅族16th.png",
        "name": "魅族16th"
    },
    {
        "imgs": "../IMG/魅族16s.png",
        "name": "魅族16s"
    },
    {
        "imgs": "../IMG/魅族X8.png",
        "name": "魅族X8"
    },
    {
        "imgs": "../IMG/魅族Note8.png",
        "name": "魅族Note8"
    },
    {
        "imgs": "../IMG/魅族15.png",
        "name": "魅族15"
    },
    {
        "imgs": "../IMG/魅族EP2C耳机.png",
        "name": "魅族EP2C耳机"
    },
    {
        "imgs": "../IMG/魅族POP2真无线蓝牙.png",
        "name": "魅族POP2真无线蓝牙"
    },
    {
        "imgs": "../IMG/魅族HIFI解码耳放.png",
        "name": "魅族HIFI解码耳放"
    },
    {
        "imgs": "../IMG/魅族EP63NC无线降噪.png",
        "name": "魅族EP63NC无线降噪"
    },
    {
        "imgs": "../IMG/魅族FlowBass三单元.png",
        "name": "魅族FlowBass三单元"
    },
    {
        "imgs": "../IMG/魅族LIVE四单元动铁耳机.png",
        "name": "魅族LIVE四单元动铁耳机"
    },
    {
        "imgs": "../IMG/魅族HALO激光蓝牙耳机.png",
        "name": "魅族HALO激光蓝牙耳机"
    },
    {
        "imgs": "../IMG/魅族EP52蓝牙耳机.png",
        "name": "魅族EP52蓝牙耳机"
    },
    {
        "imgs": "../IMG/魅族16S壳膜套装.jpg",
        "name": "魅族16S壳膜套装"
    },
    {
        "imgs": "../IMG/魅族移动电源3.png",
        "name": "魅族移动电源3"
    },
    {
        "imgs": "../IMG/魅族无线充电器.png",
        "name": "魅族无线充电器"
    },
    {
        "imgs": "../IMG/魅族Type-C2.0数据线.png",
        "name": "魅族Type-C2.0数据线"
    },
    {
        "imgs": "../IMG/魅族MicroUSB数据线.png",
        "name": "魅族MicroUSB数据线"
    },
    {
        "imgs": "../IMG/快充电源适配器UP08.png",
        "name": "快充电源适配器UP08"
    },
    {
        "imgs": "../IMG/魅族16th高透保护膜.png",
        "name": "魅族16th高透保护膜"
    },
    {
        "imgs": "../IMG/魅族16thPLUS亲肤保护壳.png",
        "name": "魅族16thPLUS亲肤保护壳"
    },
    {
        "imgs": "../IMG/魅族星球探索鼠标垫.png",
        "name": "魅族星球探索鼠标垫"
    },
    {
        "imgs": "../IMG/魅族星球探索帆布袋.png",
        "name": "魅族星球探索帆布袋"
    },
    {
        "imgs": "../IMG/魅族极简都市双肩包.png",
        "name": "魅族极简都市双肩包"
    },
    {
        "imgs": "../IMG/魅族路由器极速版.jpg",
        "name": "魅族路由器极速版"
    },
    {
        "imgs": "../IMG/魅族Mini线控自拍杆.png",
        "name": "魅族Mini线控自拍杆"
    },
    {
        "imgs": "../IMG/Everyday乐游系列酷.png",
        "name": "Everyday乐游系列酷"
    },
];




//主页接口
$.ajax({
    url: "https://dms-dataapi.meizu.com/data/jsdata.jsonp?callback=renderSite&blockIds=233,266,267",
    dataType: "jsonp",
})

function renderSite(data) {
    console.log(data);
    console.log(bj);
    for (var i = 0; i < data.skuInfo.length; i++) {
        if (i < 8) {
            var div = $("<div></div>").css({
                "width": "129px",
                "height": "186px",
            });
            var img = $("<img>").attr("src", bj[i].imgs).appendTo(div);
            var pre = $("<pre></pre>").html("<b>" + bj[i].name + "</b>" + "<br>" + "<a href='#'>" + "￥" + data.skuInfo[
                i].skuPrice + "</a>").appendTo(div);
            div.appendTo($(".shower").eq(0));

        } else if (i >= 8 && i < 16) {
            var div = $("<div></div>").css({
                "width": "129px",
                "height": "198px",
            });
            var img = $("<img>").attr("src", bj[i].imgs).appendTo(div);
            var pre = $("<pre></pre>").html("<b>" + bj[i].name + "</b>" + "<br>" + "<a href='#'>" + "￥" + data.skuInfo[
                i].skuPrice + "</a>").appendTo(div);
            div.appendTo($(".shower").eq(1));

        } else if (i >= 16 && i < 24) {
            var div = $("<div></div>").css({
                "width": "129px",
                "height": "186px",
            });
            var img = $("<img>").attr("src", bj[i].imgs).appendTo(div);
            var pre = $("<pre></pre>").html("<b>" + bj[i].name + "</b>" + "<br>" + "<a href='#'>" + "￥" + data.skuInfo[
                i].skuPrice + "</a>").appendTo(div);
            div.appendTo($(".shower").eq(2));

        } else {
            var div = $("<div></div>").css({
                "width": "129px",
                "height": "186px",
            });
            var img = $("<img>").attr("src", bj[i].imgs).appendTo(div);
            var pre = $("<pre></pre>").html("<b>" + bj[i].name + "</b>" + "<br>" + "<a href='#'>" + "￥" + data.skuInfo[
                i].skuPrice + "</a>").appendTo(div);
            div.appendTo($(".shower").eq(3));

        }
    }
}
//data.skuInfo                导航栏物品价格
//data.block_266              导航栏物品名称及跳转地址

//设置主菜单字体颜色
// var timer = setInterval(function(){
//     var x = $(".swiper-slide").eq(4).offset();
//         if(x.left == 0){
//             $("header a").css("color", "#515151");
//         }
//         if(x.left != 0){
//             $("header a").css("color", "#FFFFFF");
//         }
//     })

//设置移入移出
$(".control").each(function(i) {
    $(".control").eq(i).hover(
        function() {
            $(".display").stop(true).delay().animate({
                "height": "185px",
            });
            $("header").css("background", "rgba(255,255,255,1)");
            $("header a").css("color", "#515151");
            $(this).css("color", "#00B9F2");
            $(".shower").eq(i).show().siblings().hide();
            // clearInterval(timer)
        },
        function() {
            var _this = $(this);
            $(".display").on("mouseleave", function() {
                $(".display").stop(true).delay().animate({
                    "height": "0"
                })
                $("header").css("background", "rgba(255,255,255,0)");
                $("header a").has(".control_list").css("color", "#333333")
                $("header a").not(".control_list").css("color", "#FFFFFF")
            })
            // clearInterval(timer)
        })
})
