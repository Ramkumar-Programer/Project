<?php 
session_start();
require "db_con.php";

    //if user click login button
    if(isset($_POST['login'])){
        $rollno = mysqli_real_escape_string($conn, $_POST['rollno']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);

        if (empty($rollno)) {
		header("Location: pwd.php?error= User Name is required");
		exit();
	} else if (empty($password)) {
		header("Location: pwd.php?error= Password is required");
		exit();
    } else{
        $check_roll = "SELECT * FROM s_login WHERE rollno = '$rollno' AND password='$password'";
        $res = mysqli_query($conn, $check_roll);
        if (mysqli_num_rows($res) === 1) {
			$row = mysqli_fetch_assoc($res);
            if ($row['rollno'] === $rollno && $row['password'] === $password) {
            	$_SESSION['rollno'] = $row['rollno'];
            	$_SESSION['name'] = $row['name'];
            	$_SESSION['id'] = $row['id'];
            	
        $epassword = mysqli_real_escape_string($conn, $_POST['epassword']);
        $cpassword = mysqli_real_escape_string($conn, $_POST['cpassword']);
        if($epassword !== $cpassword){
            header("Location: pwd.php?error=Confirm password not matched!");
        }else{
            $rollno = $_SESSION['rollno']; //getting this email using session
            $update_pass = "UPDATE s_login SET password = '$epassword' WHERE rollno = '$rollno'";
            $run_query = mysqli_query($conn, $update_pass);
            if($run_query){
                header("Location: pwd.php?success=Your password changed. Now you can login with your new password.");
            }else{
                header("Location: pwd.php?error=Failed to change your password!");
            }
        }
    
            }else{
				header("Location: pwd.php?error=Incorect User name or password");
		        exit();
			}
		}else{
			header("Location: pwd.php?error=Incorect User name or password");
	        exit();
		}
    }

   
}