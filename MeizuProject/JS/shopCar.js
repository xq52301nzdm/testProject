$.ajax({
    type: "post",
    url: "./../PHP/showtwo.php",
    success(data) {
        console.log(JSON.parse(data));
        var data = JSON.parse(data);
        fn(data)
        var k = Number($(".allChose").text());
        for(var i = 0;i<$(".minus").next().length;i++){
            k += Number($(".minus").next().eq(i).val());
        }
        $(".allChose").text(k)
        event()
        events()
    }
})
var str = "";

//通过数据库渲染对应商品及数量
function fn(data) {
    for (var i = 0; i < data.length; i++) {
        str +=
            `<li>
                        <input type="checkbox" class="ashop">
                        <div class="diser">
                            <next>
                                <img src=${data[i][3]}>
                            </next>
                            <aside>
                                <b>${data[i][0]}</b>
                                <a href="##">全网通公开版 玉白 4+64GB</a>
                            </aside>

                        </div>
                        <pre class="once">${data[i][2]}</pre>
                        <div class="counter">
                            <pre>
                            <button class="minus">-</button>
                            <input type="text" value=${data[i][1]}>
                            <button class="plus">+</button>
                        </pre>
                        </div>
                        <div class="smallPrice">${data[i][1]*(data[0][2]).slice(1)}</div>
                        <div class="let">删除</div>
                    </li>`;
    };
    $("main>ul").html(str)
}


//每个商品的加减价格和删除
function event() {
    //数量加
    $("pre>.plus").on("click", function() {
        
        var val = $(this).prev().val();
        val++;
        $(this).prev().val(val);
        
        var allChose = Number($(".allChose").text());
        allChose++;
        $(".allChose").text(allChose)
        
        var a = $(this).parent().parent().prev().prev().children("aside").children("b").text().trim();
        var b = $(this).prev().val()
        var c = $(this).parent().parent().prev().text();
        var d = $(this).parent().parent().prev().prev().children("next").children("img").attr("src")
        
        $.ajax({
            url: "./../PHP/shopone.php",
            type: "post",
            data: {
                shopname: a,
                count: b,
                price: c,
                img: d
            },
            success(data) {
                console.log(JSON.parse(data))
            }
        });
        
        var smallPrice = Number($(this).parents("li").children(".smallPrice").text());
        smallPrice = Number(b)*Number(c.slice(1));
        $(this).parents("li").children(".smallPrice").text(smallPrice);
        // console.log();
        
    });
    //数量减
    $("pre>.minus").on("click", function() {
        var val = $(this).next().val();
        val--;
        if (val <= 1) {
            val = 1
        }
        
        var allChose = Number($(".allChose").text());
        allChose--;
        if(allChose<=0){allChose=0}
        $(".allChose").text(allChose)
        
        $(this).next().val(val);
        
        var a = $(this).parent().parent().prev().prev().children("aside").children("b").text().trim();
        var b = $(this).next().val()
        var c = $(this).parent().parent().prev().text();
        var d = $(this).parent().parent().prev().prev().children("next").children("img").attr("src")
        
        $.ajax({
            url: "./../PHP/shopone.php",
            type: "post",
            data: {
                shopname: a,
                count: b,
                price: c,
                img: d
            },
            success(data) {
                console.log(JSON.parse(data))
            }
        });
        
        var smallPrice = Number($(this).parents("li").children(".smallPrice").text());
        smallPrice = Number(b)*Number(c.slice(1));
        $(this).parents("li").children(".smallPrice").text(smallPrice)
    });
    //单个商品删除
    $("li>.let").on("click", function() {
        if ($(this).parent().children(".ashop").prop("checked") == true) {
            var a = $(this).parent().children(".diser").children("aside").children("b").text().trim();
            $.ajax({
                url: "./../PHP/shopdel.php",
                type: "post",
                data: {
                    shopname: a,
                },
                success(data) {
                    console.log(JSON.parse(data))
                }
            })
            $(this).parent().remove();
            if ($("main>ul").children("li").length <= 0) {
                var img = $("<img>").attr("src", "./../IMG/购物车.png").appendTo($("main>ul"))
            } else {
                $("main>ul").children("img").remove()
            }
        }
    })

}





//全选多选及对应事件
function events() {
    $(".mine>span:nth-child(1)").on("click",function(){
        location.href = "./../HTML/list.html"
    })
    //全选控制单选
    $(".chose>input").on("click", function() {
        $("input[type='checkbox']").prop("checked", $(this).prop("checked"));
    });
    $(".buy>input").on("click", function() {
        $("input[type='checkbox']").prop("checked", $(this).prop("checked"))
    });
    var i = 0;
    //点击每个单选按钮
    $("input.ashop").on("click", function() {
        if ($(this).prop("checked") == true) {
            var hasChose = Number($(".hasChose").text());
            hasChose += Number($(this).parent().children(".counter").children("pre").children("input").val());
            $(".hasChose").text(hasChose)
            i++;
        } else {
            var hasChose = Number($(".hasChose").text());
            hasChose -= Number($(this).parent().children(".counter").children("pre").children("input").val());
            $(".hasChose").text(hasChose)
            i--;
        };
        if (i >= $("input[type='checkbox']").length - 2) {
            $("input[type='checkbox']").prop("checked", true);
        } else if (i < $("input[type='checkbox']").length - 2) {
            $(".chose>input").prop("checked", false)
            $(".buy>input").prop("checked", false)
        }
    });
    //点击删除选中商品
    $(".removeAll").on("click", function() {
        for (var i = 0; i < $("input.ashop").length; i++) {
            if ($("input.ashop").eq(i).prop("checked") == true) {
                $("main>ul>li").eq(i).remove();
                i--;
                $.ajax({
                    type: "post",
                    data:{
                        shopname:$("main>ul>li").eq(i).children(".diser").children("aside").children("b").text().trim()
                    },
                    url: "./../PHP/shopdel.php",
                    // success(data) {
                    //     console.log(JSON.parse(data))
                    // }
                })
            }
        }
        if ($(".buy>input").prop("checked") == true) {
            $("main>ul>li").remove();
            $.ajax({
                type: "post",
                url: "./../PHP/shopalldel.php",
                success(data) {
                    console.log(JSON.parse(data))
                }
            })
        }else{
            
        }
        if ($("main>ul").children("li").length <= 0) {
            var img = $("<img>").attr("src", "./../IMG/购物车.png").appendTo($("main>ul"))
        } else {
            $("main>ul").children("img").remove()
        }

    })

}
