// 商品列表信息遍历

$.ajax({
    url: "../JSON/list.json",
    success(data) {
        fn(data);
        shopOrder(data);
         $(".mobileList>div").on("click",function(){
             var p = $(this).children("a").text();
             location.href = "../HTML/message.html?p="+p;
         })
        $("#recommend").on("click", function() {
            window.location.reload()
        })
    }
})

function fn(data) {
    var str = "";
    for (var i = 0; i < data.length; i++) {
        str += `<div class="box"><img src=${data[i].img}><a href='##'>${data[i].shopname}</a><pre>`
        for (var j = 0; j < data[i].dataImg.length; j++) {
            str += `<aside colorIndex="${j}" data-index="${i}" style="background-color: ${data[i].color[j]}"></aside>`
        }
        str += `</pre><b>${data[i].introduce}</b><i>${data[i].price}</i></div>`
    }

    $(".mobileList").html(str);
    bindEvent($(".mobileList").children('div'), data)
}

function bindEvent(ele, data) {
    ele.on('mouseover', 'aside', function() {
        var imgSrc = data[this.dataset.index].dataImg[this.getAttribute('colorIndex')]
        $(this).parent().parent().children('img').attr('src', imgSrc)
    })
}
var flag = true;

function shopOrder(data) {
    $("#orderPrice").on('click', function() {
        flag ? data.sort((a, b) => a.price.slice(1) - b.price.slice(1)) : data.sort((b, a) => a.price.slice(1) -
            b.price.slice(1))
        flag = !flag
        fn(data)
    })
}


     
       