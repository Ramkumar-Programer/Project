<?php 
session_start();

if (isset($_SESSION['ID']) && isset($_SESSION['Username'])) {
 include "top.html"
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>HOME</title>
	<link rel="stylesheet" type="text/css" href="t_home.css">
</head>
<body>
	<h1>Welcome,<span><?php echo $_SESSION['name']; ?></span>.<pre class="alert">    For adminisrator <span>use only....!!!!</span></pre> </h1>
	<button class="btn"><i class="fas fa-sign-out-alt"></i><a href="t_logout.php">Logout</a></button>
</body>
</html>

<?php 
}else{
     header("Location: t_login.php");
     exit();
}
 ?>