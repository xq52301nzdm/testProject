function leave(a) {
    var timer = setTimeout(function() {
        a.text("")
    });
}

$("#username").on("blur", function() {
    if ($("#username").val().length > 0) {
        leave($("#user"))
    } else {
        $("#user").text("用户名不能为空,请重新输入!").css("color", "red");
    }
})

$("#password").on("blur", function() {
    if ($("#password").val().length > 0) {
        $("#pass").text("");
    } else {
        $("#pass").text("密码不能为空,请重新输入!").css("color", "red");
    }
})

$("#btn").on("click", function() {
    if ($("#username").val().length > 0 && $("#password").val().length > 0) {
        var username = $("#username").val();
        var password = $("#password").val();
        $.ajax({
            type: "post",
            url: "../PHP/login.php",
            data: {
                username: username,
                password: password
            },
            success(data) {
                var data = JSON.parse(data);
                if (data.show == "wrongPassword") {
                    alert("密码错误!")
                } else if (data.show == "notRegister") {
                    alert("该账号尚未注册,请先注册!")
                }else if(data.show == "success"){
                    location.href = "../HTML/zhuye.html";
                    $.cookie('username',username, { expires: 7, path: '/' });
                }

            }
        })
    }
})
