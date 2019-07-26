<?php
        include("publics.php");           
        $shopname=$_POST["shopname"];
        $count=$_POST["count"];
        $price=$_POST["price"];
        $img=$_POST["img"];
        $sql="select * from Meizushop where shopname='$shopname'";
        $res=mysqli_query($con,$sql);
        $arr=mysqli_fetch_all($res);
        if(count($arr)){
           $sql="update Meizushop set count = '$count' where shopname='$shopname'";
           $res=mysqli_query($con,$sql);
             echo json_encode(array(
                    "infor"=>"false",
                    "show"=>"已有该商品，并且数量变化了",
            ));
        }else{
            $sqler="insert into Meizushop (shopname,count,price,img) values ('$shopname',$count,'$price','$img')";
            $res=mysqli_query($con,$sqler);
             if($res){
             echo json_encode(array(
                    "infor"=>"true",
                    "show"=>"成功加入购物车",
                ));
            }
        }
?>