<?php  

include "db_con.php";

$sql = "SELECT * FROM new_entry ORDER BY id";
$result = mysqli_query($conn, $sql);