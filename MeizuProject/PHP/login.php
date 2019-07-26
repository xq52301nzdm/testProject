<?php
            include("publics.php");           
            $username=$_POST["username"];
            $password=$_POST["password"];
            $sql="select username,password from Meizu where username='$username'";
            $res=mysqli_query($con,$sql);
            $arr=mysqli_fetch_assoc($res);           
            if(count($arr)){
                if($arr['password']=="$password"){
                    echo json_encode(array(
                        "infor"=>true,
                        "show"=>"success"
                ));
                }else{
                    echo json_encode(array(
                            "infor"=>false,
                            "show"=>"wrongPassword"
                    ));
                }               
            }else{
                echo json_encode(array(
                        "infor"=>false,
                        "show"=>"notRegister"
                ));
            }
            
?>