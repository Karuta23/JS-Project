<?php
$mysqli = new mysqli("localhost:3306", "tynk00", "ohd3eeNi3owutuu4gi", "tynk00");
if($mysqli->connect_error) {
    echo "ProblĂ©m";
    exit('Could not connect');
}
else{
    echo "V poĹ™Ăˇdku";
}
?> 