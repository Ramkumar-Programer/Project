<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="sytle3.css">
    <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <style>.back{color: white;position: fixed;} .back:hover{color: #bcc91c;}</style>
</head>
<body>
    <a href="t_home.php" class="back"><i class="far fa-hand-point-left fa-3x"></i></a>
     <div class="container">
        <div class="box">
            <h4 class="display-4 text-center">List</h4><br>

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
$sql=mysqli_query($conn,"SELECT * FROM new_entry");

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
</table><div class="link-right">
                <a href="view.php" class="btn btn-success">Back</a>
            </div></div></div>
</body>
</html>
