<?php
        include("publics.php"); 
        $sql="select * from Meizushop";
        $res=mysqli_query($con,$sql);
        $arr=mysqli_fetch_all($res);
        echo json_encode($arr);
?>