 <?php
include"db_con.php";
if(isset($_POST['save'])){
  $find=$_POST['find'];
$sql=mysqli_query($conn,"DELETE FROM new_entry  where RollNo='$find'");
if ($sql) {
	echo date('h:i:s')."\n";
       	sleep(3);
       	echo date('h:i:s')."\n";
  header("Location: delete.php");
}
}

?>