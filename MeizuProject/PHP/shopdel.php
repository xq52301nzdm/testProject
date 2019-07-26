<?php
        include("publics.php");           
        $shopname=$_POST["shopname"];
        $sql="select * from Meizushop where shopname='$shopname'";
        $res=mysqli_query($con,$sql);
        $arr=mysqli_fetch_assoc($res);
        if(count($arr)){
           $sql="delete from Meizushop where shopname='$shopname'";
           $res=mysqli_query($con,$sql);
             echo json_encode(array(
                    "infor"=>"false",
                    "show"=>"商品已经删除",
            ));
        }
?>