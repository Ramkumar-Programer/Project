<?php require_once "student_db.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Form</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <link rel="stylesheet" href="student.css"><style>.back{color: white;}</style>
</head>
<body>
    <a href="index.php" class="back"><i class="far fa-hand-point-left fa-3x"></i></a>
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4 form login-form">
                <form action="s_login.php" method="POST" autocomplete="">
                    <h2 class="text-center">Login Form</h2>
                    <p class="text-center">Login with your Rollno and password,To view your result.</p>
                    <?php if (isset($_GET['error'])) { ?>
               <p class="alert alert-danger text-center"><?php echo $_GET['error']; ?></p>
          <?php } ?>
                    <div class="form-group">
                        <input class="form-control" type="text" name="rollno" placeholder="Rollno" value="<?php if(isset($_GET['rollno'])){
                        echo($_GET['rollno']);} ?>">
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="password" name="password" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <input class="form-control button" type="submit" name="login" value="Login">
                    </div>
                    <div class="link login-link text-center">Did you like to change password!???<a href="pwd.php">Click here</a></div>
                </form>
            </div>
        </div>
    </div>
    
</body>
</html>