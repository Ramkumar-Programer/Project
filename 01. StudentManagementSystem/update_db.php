<?php 

if (isset($_GET['id'])) {
	include "db_con.php";

	function validate($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
	}

	$id = validate($_GET['id']);

	$sql = "SELECT * FROM new_entry  WHERE id=$id";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
    	$row = mysqli_fetch_assoc($result);
    }else {
    	header("Location: read.php");
    }


}else if(isset($_POST['update'])){
    include "db_con.php";
    function validate($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
	}

	$name = validate($_POST['name']);
	$roll = validate($_POST['roll']);
	$id = validate($_POST['id']);
  $dept = validate($_POST['dept']);
  $sem = validate($_POST['sem']);
  $m1 = $_POST['m1'];
  $m2 = $_POST['m2'];
  $m3 = $_POST['m3'];
  $m4 = $_POST['m4'];
  $m5 = $_POST['m5'];
  $m6 = $_POST['m6'];
	if (empty($name)) {
		header("Location: update.php?id=$id&error=Name is required");
	}else if (empty($roll)) {
		header("Location: update.php?id=$id&error=RollNo is required");
	}else {

       $sql = "UPDATE new_entry SET Name='$name', RollNo='$roll' ,Courses='$dept' ,Semster='$sem' ,Mark1='$m1' ,Mark2='$m2' ,Mark3='$m3' ,Mark4='$m4' ,Mark5='$m5' ,Mark6='$m6' WHERE id=$id ";
       $result = mysqli_query($conn, $sql);
       if ($result) {
       	  header("Location: read.php?success=successfully updated");
       }else {
          header("Location: update.php?id=$id&error=unknown error occurred&$user_data");
       }
	}
}else {
	header("Location: read.php");
}