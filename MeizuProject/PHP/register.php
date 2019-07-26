<?php
            include("publics.php");           
            $username=$_POST["username"];
            $password=$_POST["password"];
            $sql="select * from Meizu where username='$username'";
            $res=mysqli_query($con,$sql);
            $arr=mysqli_fetch_all($res);
            if(count($arr)){
                echo json_encode(array(
                        "infor"=>"false",
                        "show"=>"用户名已被注册",
                ));
            }else{
                 $sqler="insert into Meizu (username,password) values ('$username','$password')";
                 $res=mysqli_query($con,$sqler);
                 if($res){
                 echo json_encode(array(
                        "infor"=>"true",
                        "show"=>"注册成功",
                    ));
                }
            }
?>