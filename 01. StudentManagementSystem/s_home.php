<?php require_once "student_db.php"; ?>
<?php 
$id = $_SESSION['id'];
$rollno = $_SESSION['rollno'];
$name = $_SESSION['name'];
if($id != false && $rollno != false){
   
}else{
    header('Location: s_login.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo $name?> | Home</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
     body{
    height: 100vh;
  width: 100%;
  background-image: url(clg5.jpg);
  background-attachment: fixed;
  padding: 0 10px;
  background-size: cover;
  background-repeat: no-repeat;
}
    nav{
        padding-left: 100px!important;
        padding-right: 100px!important;
        background: #6665ee;
        font-family: 'Poppins', sans-serif;
    } 
    nav a.navbar-brand{
        color: #fff;
        font-size: 30px!important;
        font-weight: 500;
    }
    button a{
        color: #6665ee;
        font-weight: 500;
    }
    button a:hover{
        text-decoration: none;
    }
    h1{
        position: absolute;
        top: 20%;
        left: 50%;
        width: 100%;
        text-align: center;
        transform: translate(-50%, -50%);
        font-size: 50px;
        font-weight: 600;
    }
    </style>

</head>
<body>
    <nav class="navbar">
    <a class="navbar-brand" href="#">Firends College of Engg</a>
    <button type="button" class="btn btn-light"><a href="logout-user.php">Logout</a></button>
    </nav>
    <h1>Welcome <?php echo $_SESSION['name'] ?></h1>
     <div class="container">
        <div class="box"><br><br><br><br><br>
           

<table class="table table-striped">
    <thead class="thead-dark">
<tr>
 <th scope="col">Name</th>
  <th scope="col">Roll Number</th>
   <th scope="col">Department</th>
    <th scope="col">Semster</th>
     <th scope="col">Sub1 mark</th>
     <th scope="col">Sub2 mark</th>
     <th scope="col">Sub3 mark</th>
     <th scope="col">Sub4 mark</th>
     <th scope="col">Sub5 mark</th>
     <th scope="col">Sub6 mark</th></tr></thead><tbody>
 <?php include"db_con.php";
$sql=mysqli_query($conn,"SELECT * FROM new_entry where RollNo = '$rollno'");

while ($result=mysqli_fetch_array($sql)) 
{

    echo '<tr>';
    echo '<td>' .$result['Name'].'</td>';
    echo '<td>' .$result['RollNo'].'</td>';
    echo '<td>' .$result['Courses'].'</td>';
    echo '<td>' .$result['Semster'].'</td>';
    echo '<td>' .$result['Mark1'].'</td>';
    echo '<td>' .$result['Mark2'].'</td>';
    echo '<td>' .$result['Mark3'].'</td>';
    echo '<td>' .$result['Mark4'].'</td>';
    echo '<td>' .$result['Mark5'].'</td>';
    echo '<td>' .$result['Mark6'].'</td>';
    echo '</tr>';
   

  }  

?>  
</tbody>
</table></div></div>
</body>
</html>

    
</body>
</html>