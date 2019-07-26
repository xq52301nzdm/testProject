// $.ajax({
//     type: "post",
//     url: "../PHP/register.php",
//     data: {
//         username: "",
//         password: ""
//     },
//     success(data) {
//         console.log(data)
//     }
// })
function leave(a) {
    var timer = setTimeout(function() {
        a.text("")
    }, 3000);
}


var reg1 = /^[a-zA-Z_-]{4,16}$/; //4-16位纯英文大小写组合
var reg2 = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/; //至少6位且至少一个数字大写字母小写字母特殊字符数字
$("#username").on("blur", function() {
    if (reg1.test($("#username").val()) == false) {
        if ($("#username").val() == "") {
            $("#user").text("用户名不能为空,请重新输入").css("color", "red");
            leave($("#user"))
        } else {
            $("#user").text("您输入的用户名格式不正确,请修改").css("color", "red");
            leave($("#user"))
        }
    } else {
        $("#user").text("您输入的用户名格式无误啦!").css("color", "green");
        leave($("#user"))
    }
})
$("#password").on("blur", function() {
    if (reg2.test($("#password").val()) == false) {
        if ($("#password").val() == "") {
            $("#pass").text("密码不能为空!请重新设置").css("color", "red");
            leave($("#pass"))
        } else {
            $("#pass").text("您输入的密码过于简单,请重新设置").css("color", "red");
            leave($("#pass"))
        };
    } else {
        $("#pass").text("您输入的密码安全系数较高").css("color", "green");
        leave($("#pass"))
    }
})

$(document).on("click",function(e){
    if(e.target.id == "btn"){
        if(reg1.test($("#username").val()) == true&&reg2.test($("#password").val()) == true){
            var username = $("#username").val();
            var password = $("#password").val();
            $.ajax({
                type: "post",
                url: "./../PHP/register.php",
                data: {
                    username: username,
                    password: password,
                },
                success(data) {
                    // console.log(JSON.parse(data))
                    var data = JSON.parse(data);
                    if(data.infor == "false"){
                        alert(data.show)
                    }
                    
                    if(data.infor == "true"){
                        alert("注册成功!")
                        location.href = "./../HTML/login.html"
                    }
                }
            })
        }
    }
    
    if(e.target.id == "logining"){
        location.href = "../HTML/login.html";
    }
})

