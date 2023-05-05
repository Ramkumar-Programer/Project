<?php require_once "pwdch.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Form</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="student.css">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4 form login-form">
                <form action="pwd.php" method="POST" autocomplete="">
                    <h2 class="text-center">Login Form</h2>
                    <p class="text-center">Login with your Rollno and password,To view your result.</p>
                    <?php if (isset($_GET['error'])) { ?>
               <p class="alert alert-danger text-center"><?php echo $_GET['error']; ?></p>
          <?php } ?>
          <?php if (isset($_GET['success'])) { ?>
               <p class="alert alert-success text-center"><?php echo $_GET['success']; ?></p>
          <?php } ?>
                    <div class="form-group">
                        <input class="form-control" type="text" name="rollno" placeholder="Rollno" value="<?php if(isset($_GET['rollno'])){
                        echo($_GET['rollno']);} ?>">
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="password" name="password" placeholder="Current Password">
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="password" name="epassword" placeholder="New Password">
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="password" name="cpassword" placeholder="Confirm Password">
                    </div>
                    <div class="form-group">
                        <input class="form-control button" type="submit" name="login" value="Login">
                    </div>
                    <div class="link login-link text-center">Will you like to go back??<a href="s_login.php">Click here</a></div>
                </form>
            </div>
        </div>
    </div>
    
</body>
</html>