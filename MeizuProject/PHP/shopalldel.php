<?php
        include("publics.php");           
        $sql="delete from Meizushop";
        $res=mysqli_query($con,$sql);
        echo json_encode(array(
                "infor"=>"false",
                "show"=>"您的数据库炸了!",
        ));
?>