<?php

$server_name="localhost";
$userName="root";
$password="";

$db_name="student management";

$conn=mysqli_connect($server_name,$userName,$password,$db_name);

if(!$conn){
	echo"Connection failed";
}?>