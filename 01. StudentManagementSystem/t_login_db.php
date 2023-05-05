<?php
session_start();
include"db_con.php";

if(isset($_POST['uname']) && isset($_POST['passwd'])){

	function validate($data){
		$data = trim($data);
		$data = stripcslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}

	$uname = validate($_POST['uname']);
	$pass = validate($_POST['passwd']);

	if (empty($uname)) {
		header("Location: t_login.php?error= User Name is required");
		exit();
	} else if (empty($pass)) {
		header("Location: t_login.php?error= Password is required");
		exit();
    } else{
    	$sql = "SELECT * FROM t_login WHERE Username = '$uname' AND  Password = '$pass'";

    	$result = mysqli_query($conn, $sql);

		if (mysqli_num_rows($result) === 1)
		 {
			$row = mysqli_fetch_assoc($result);
            if ($row['Username'] === $uname)
			{
				if($row['Password'] === $pass) 
				{
					$_SESSION['Username'] = $row['Username'];
					$_SESSION['name'] = $row['Name'];
					$_SESSION['ID'] = $row['ID'];
					header("Location: t_home.php");
					exit();
				}
				else
				{
					header("Location: t_login.php?error=Incorect password");
		        	exit();
				}
            }
			else
			{
				header("Location: t_login.php?error=Incorect UserName");
		        exit();
			}
		}
	}
	
}else{
	header("Location: t_login.php");
	exit();
}