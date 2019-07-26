<?php
    header("content-type:text/html;charset=utf8");
    $_hostname="localhost";
    $_username="root";
    $_password="root";
    $_name="mysql";
    $con=new mysqli($_hostname,$_username,$_password,$_name);
    if($con->connect_error){
        die("连接失败".$con->connect_error);
    }
    $con->query("set names utf8");
?>