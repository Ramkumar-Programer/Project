<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>LOGIN</title>
	<link rel="stylesheet" type="text/css" href="t_style.css">
</head>
<body><a href="index.php" class="back"><i class="far fa-hand-point-left fa-3x"></i></a>
	<form action="t_login_db.php" method="post" class="login-box">
     
		<h2>Staff Login</h2>
		<?php if (isset($_GET['error'])) { ?>
               <p class="error"><?php echo $_GET['error']; ?></p>
          <?php } ?>
          <div class="textbox">
             <i class="fas fa-user"></i>
          	 <input type="text" name="uname" placeholder="User name">
          </div><br>
       <div class="textbox">
           <i class="fas fa-lock"></i>
       	   <input type="Password" name="passwd" placeholder="Password">
       </div><br>
         
        <button class="btn">Sign in</button>
	</form>
</body>
</html>