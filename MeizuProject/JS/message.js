$.ajax({
    url: "./../JSON/messages.json",
    success(data) {
        var i = location.href.split("=")[1];
        i = decodeURI(i);
        for (var w = 0; w < data.length; w++) {
            if (data[w].name == i) {
                fn(data, w);
                event();
            }
        }

    }
})


//字符串拼接
function fn(data, k) {
    var data = data;
    var str = "";
    str +=
        `<header>
            <nav>
                <div class="logo">
                    <img src="../IMG/Logo.png">
                </div>
                <ul>
                    <li><a href="#" class="control control_list" style="color:#333333">手机</a></li>
                    <li><a href="#" class="control control_list" style="color:#333333">声学</a></li>
                    <li><a href="#" class="control control_list" style="color:#333333">配件</a></li>
                    <li><a href="#" class="control control_list" style="color:#333333">生活</a></li>
                    <li><a href="#" class="control_list">Flyme</a></li>
                    <li><a href="#" class="control_list">服务</a></li>
                    <li><a href="#" class="control_list">专卖店</a></li>
                    <li><a href="#" class="control_list">社区</a></li>
                    <li><a href="#" class="control_list">APP下载</a></li>
                </ul>
                <input type="text" placeholder="魅族16Xs">
                <pre class="iconfont"><a href="#">&#xe503;</a></pre>
                <pre class="iconfont"><a href="#">&#xe512;</a></pre>
            </nav>
            <div class="display">
                <div class="shower"></div>
                <div class="shower"></div>
                <div class="shower"></div>
                <div class="shower"></div>
            </div>
        </header>`;
    str +=
        `<div class="namer">
            <div>
                ${data[k].name}
                <ul>
                    <li>概述</li>
                    <li>参数</li>
                    <li>常见问题</li>
                </ul>
            </div>
        </div>
        <div class="shopDisplay">
            <div>
               <pre>
                   <div class="big">
                       <img src=${data[k].bigimgs[0]}>
                       <div class="move"></div>
                   </div>
                   <div class="small">
                       <img src=${data[k].smallimgs[0]} data-src=${data[k].bigimgs[0]}>
                       <img src=${data[k].smallimgs[1]} data-src=${data[k].bigimgs[1]}>
                       <img src=${data[k].smallimgs[2]} data-src=${data[k].bigimgs[2]}>
                       <img src=${data[k].smallimgs[3]} data-src=${data[k].bigimgs[3]}>
                   </div>
               </pre>
                <next>
                    <img src=${data[k].bigimgs[0]}>
                </next>
                <section>
                    <div class="title">
                        ${data[k].name}
                    </div>
                    <div class="introduce">
                      ${data[k].introduce}
                    </div>
                    <div class="price"> 
                        <a href="##">${data[k].price}</a>
                        <b>加价购  另加19元起，即可换购超值商品  立即加购</b>
                    </div>
                    <div class="support">
                        <span>支&ensp;&ensp;&ensp;&ensp;持</span>
                        &ensp;&ensp;花呗分期&ensp;&ensp;
                        &ensp;&ensp;顺丰发货&ensp;&ensp;
                        &ensp;&ensp;7天无理由退货
                    </div>
                    <div class="server">
                        <span>配送服务</span>
                        <select>
                            <option>山西省</option>
                            <option>台湾省</option>
                            <option>日本省</option>
                        </select>
                        <select>
                            <option>太原市</option>
                            <option>上海市</option>
                            <option>北京市</option>
                        </select>
                        <select>
                            <option>平遥县</option>
                            <option>镇远县</option>
                            <option>龙县</option>
                        </select>
                    </div>
                    <div class="kefu">
                      本商品由 魅族 负责发货并提供售后服务&ensp;&ensp;&ensp;&ensp;商城客服
                    </div>
                    <div class="xinghao">
                        <span>
                            型&ensp;&ensp;&ensp;&ensp;号
                        </span>
                        <ul>
                            <li>魅族 Note9 Plus</li>
                            <li>魅族 16s</li>
                            <li>魅族 16th</li>
                            <li>魅族 16th</li>
                            <li>魅族 16 X</li>
                            <li>魅族 16Xs</li>
                        </ul>
                    </div>
                    <div class="netKind">
                       <span>网络类型</span>
                       <li>全网通公开版</li>
                    </div>
                    <div class="color">
                        <span>颜色分类</span>
                        <ul>`;
    for (var j = 0; j < data[k].color.length; j++) {
        str += `<li>${data[k].color[j]}</li>`;
    }
    str +=
        `</ul>
                    </div>
                    <div class="store">
                        <span>内存容量</span>
                        <ul>
                            <li>4+64GB</li>
                            <li>6+64GB</li>
                            <li>4+128GB</li>
                        </ul>
                    </div>
                    <div class="chosekind">
                        <span>选择套餐</span>
                        <ul>
                            <li>官方标配</li>
                            <li>EP21套餐 省30元</li>
                            <li>EP52套餐 省120元</li>
                        </ul>
                    </div>
                    <div class="huabei">
                        <span>花呗分期</span>
                        <ul>
                            <li>¥433.00×3期</li>
                            <li>¥216.50×6期</li>
                            <li>¥116.36×12期</li>
                        </ul>
                    </div>
                    <div class="counter">
                        <span>数&ensp;&ensp;&ensp;&ensp;量</span>
                        <li>
                            <button class="reduce">-</button>
                            <input type="text" value="1">
                            <button class="plus">+</button>
                        </li>
                    </div>
                    <button>加入购物车</button>
                    <button>查看购物车</button>
                </section>
            </div>
        </div>`;
    str +=
        `<footer>
            <div>
                <pre>
                    <ul>
                        <li><img src="../IMG/indexImg/尾部一.png"><br>满80免运费</li>
                        <li><img src="../IMG/indexImg/尾部二.png"><br>100+ 城市次日送达</li>
                        <li><img src="../IMG/indexImg/尾部三.png"><br>7天无理由退货</li>
                        <li><img src="../IMG/indexImg/尾部四.png"><br>15天换货保障</li>
                        <li><img src="../IMG/indexImg/尾部五.png"><br>1年免费保修</li>
                        <li><img src="../IMG/indexImg/尾部六.png"><br>上门快修</li>
                    </ul>
                    <div>
                        <i>周一至周日 7:30-24:00</i>
                        <b>400-788-3333</b>
                        <span>在线客服</span>
                    </div>
                </pre>
                <article>
                    <ul>
                        <li>了解魅族</li>
                        <li>加入我们</li>
                        <li>联系我们</li>
                        <li>Flyme</li>
                        <li>魅族社区</li>
                        <li>天猫旗舰店</li>
                        <li>问题反馈</li>
                        <li>线上销售授权名单公示</li>
                        <li>出版物经营许可证</li>
                        <li>简体中文
                            <ul>
                                <li>希腊语</li>
                                <li>英语</li>
                                <li>繁体中文</li>
                                <li>日语</li>
                                <li>俄语</li>
                            </ul>

                        </li>
                    </ul>
                    <next>©2019&nbsp;&nbsp;Meizu&nbsp;&nbsp;&nbsp;Telecom
                        Equipment&nbsp;Co.,&nbsp;&nbsp;Ltd.&nbsp;All&nbsp;&nbsp;rights&nbsp;&nbsp;reserved.&nbsp;&nbsp;&nbsp;粤ICP备13003602号合字B2-20170010
                        &nbsp;&nbsp;营业执照法律声明粤公网安备&nbsp;&nbsp;44049102496009&nbsp;号
                        <a href="#" class="iconfont">&#xf001b;</a>
                        <a href="#" class="iconfont">&#xe507;</a>
                        <a href="#" class="iconfont">&#xe631;</a>
                        <a href="#" class="iconfont">&#xe610;</a>

                    </next>
                </article>
            </div>
        </footer>`;
    $("body").html(str)


    $(".small>img").on("click", function() {
        $(".big>img").attr("src", $(this).attr("data-src"))
        $("next>img").attr("src", $(this).attr("data-src"))
    })

    $(".shopDisplay>div>pre>.big").on("mouseover", function() {
        $(".move").css("display", "block");
        $("next").css("display", "block");
        $(this).on("mousemove", function(e) {
            $(".move").css({
                "left": e.pageX - $(".shopDisplay>div>pre>.big").offset().left - 100 + "px",
                "top": e.pageY - $(".shopDisplay>div>pre>.big").offset().top - 100 + "px",
            });

            $("next>img").css({
                "left": -2.8 * (e.pageX - $(".shopDisplay>div>pre>.big").offset().left - 100) +
                    "px",
                "top": -2.8 * (e.pageY - $(".shopDisplay>div>pre>.big").offset().top - 100) +
                    "px",
            })

        })
        $(this).on("mouseout", function() {
            $(".move").css("display", "none");
            $("next").css("display", "none");
        })
    })
}

function event() {
    $(".counter>li>.plus").on("click", function() {
        var val = $(".counter>li>input").val();
        val++;
        $(".counter>li>input").val(val)
    });
    $(".counter>li>.reduce").on("click", function() {
        var val = $(".counter>li>input").val();
        val--;
        if (val <= 1) val = 1;
        $(".counter>li>input").val(val)
    });
    $("section>button").eq(0).on("click", function() {
        var a = $(".title").text();
        var p = $(".price>a").text();
        $.ajax({
            url: "./../PHP/shopone.php",
            type:"post",
            data: {
                shopname:a.trim(),
                count:$(".counter>li>input").val(),
                price:p.trim(),
                img:$(".small>img").eq(0).attr("src")
            },
            success(data) {
                console.log(JSON.parse(data))
            }
        })
        
    })
    $("section>button").eq(1).on("click", function() {
        location.href = "./../HTML/shopCar.html"
    })
}
