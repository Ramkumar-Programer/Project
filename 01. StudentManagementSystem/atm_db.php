<?php 

if (isset($_POST['create'])) {
	include "db_con.php";
	function validate($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
	}

	$name = validate($_POST['name']);
	$roll = validate($_POST['roll']);
	$dept = validate($_POST['dept']);
	$sem = validate($_POST['sem']);
	$m1 = $_POST['m1'];
	$m2 = $_POST['m2'];
	$m3 = $_POST['m3'];
	$m4 = $_POST['m4'];
	$m5 = $_POST['m5'];
	$m6 = $_POST['m6'];

	$user_data = 'name='.$name. '&roll='.$roll. '&roll='.$dept. '&sem='.$sem;

	if (empty($name)) {
		header("Location: atm.php?error=Name is required&$user_data");
	}else if (empty($roll)) {
		header("Location: atm.php?error=RollNo is required&$user_data");
	}else {

       $sql = "INSERT INTO new_entry(Name, RollNo, Courses, Semster, Mark1, Mark2, Mark3, Mark4, Mark5, Mark6) 
               VALUES('$name', '$roll' ,'$dept' ,'$sem' ,'$m1' ,'$m2' ,'$m3' ,'$m4' ,'$m5' ,'$m6')";
       $result = mysqli_query($conn, $sql);
       if ($result) {
       	echo date('h:i:s')."\n";
       	sleep(3);
       	echo date('h:i:s')."\n";
       	  header("Location: atm.php?success=successfully created");
       }else {
          header("Location: atm.php?error=unknown error occurred&$user_data");
       }
	}

}