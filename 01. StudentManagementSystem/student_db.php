<?php 
session_start();
require "db_con.php";

    //if user click login button
    if(isset($_POST['login'])){
        $rollno = mysqli_real_escape_string($conn, $_POST['rollno']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);

        if (empty($rollno)) {
		header("Location: s_login.php?error= User Name is required");
		exit();
		} 
		else if (empty($password)) {
		header("Location: s_login.php?error= Password is required");
		exit();
    	}
		 else{
        $check_roll = "SELECT * FROM s_login WHERE rollno = '$rollno' AND password='$password'";
        $res = mysqli_query($conn, $check_roll);
        if (mysqli_num_rows($res) === 1) {
			$row = mysqli_fetch_assoc($res);
            if ($row['rollno'] === $rollno && $row['password'] === $password) {
            	$_SESSION['rollno'] = $row['rollno'];
            	$_SESSION['name'] = $row['name'];
            	$_SESSION['id'] = $row['id'];
            	header("Location: s_home.php");
		        exit();
            }else{
				header("Location: s_login.php?error=Incorect User name or password");
		        exit();
			}
		}else{
			header("Location: s_login.php?error=Incorect User name or password");
	        exit();
		}
    }

   
}