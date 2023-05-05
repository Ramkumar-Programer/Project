<?php include 'update_db.php'; ?>
<!DOCTYPE html>
<html>
<head>
	<title>Create</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style2.css">
    <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <style>.back{color: white;position: fixed;} .back:hover{color: #bcc91c;}</style>
</head>
<body> <a href="read.php" class="back"><i class="far fa-hand-point-left fa-3x"></i></a>
	<div class="container">
		<form action="update_db.php" 
		      method="post">
            
		   <h4 class="display-4 text-center">Update</h4><hr><br>
		   <?php if (isset($_GET['success'])) { ?>
		    <div class="alert alert-success" role="alert">
			  <?php echo $_GET['success']; ?></div>
		   <div class="alert alert-dark" role="alert">
			  <?php echo $_GET['error']; ?>
		    </div>
		   <?php } ?>
		   <div class="form-group">
		     <label for="name">Name</label>
		     <input type="name" 
		           class="form-control" 
		           id="name" 
		           name="name" 
		           value="<?=$row['Name']?>">
		   </div>

		   <div class="form-group">
		     <label for="roll">RollNo</label>
		     <input type="text" 
		           class="form-control" 
		           id="roll" 
		           name="roll" 
		           value="<?=$row['RollNo']?>">
		   </div>

		   <div class="form-group">
		     <label >Departmaent</label>
		     <input type="text" class="form-control" name="dept" value="<?=$row['Courses']?>">
		   </div>		   
		   <div class="form-group">
		     <label >Semster</label>
		     <input type="text" class="form-control" name="sem" value="<?=$row['Semster']?>">
		   </div>
		   <div class="form-group">
          <label>Sub1 Mark </label>
          <input type="text" class="form-control" name="m1" value="<?=$row['Mark1']?>" >
       </div>   
       <div class="form-group">
          <label>Sub2 Mark</label>
          <input type="text" class="form-control" name="m2" value="<?=$row['Mark2']?>" >
       </div>   
       <div class="form-group">
          <label>Sub3 Mark</label>
          <input type="text" class="form-control" name="m3" value="<?=$row['Mark3']?>" >
       </div>   
       <div class="form-group">
          <label>Sub4 Mark</label>
          <input type="text" class="form-control" name="m4" value="<?=$row['Mark4']?>" >
       </div>   
       <div class="form-group">
          <label>Sub5 Mark</label>
          <input type="text" class="form-control" name="m5" value="<?=$row['Mark5']?>">
       </div>   
       <div class="form-group">
          <label>Sub6 Mark</label>
          <input type="text" class="form-control" name="m6" value="<?=$row['Mark6'] ?>" >
       </div>
            <input type="text" 
		          name="id"
		          value="<?=$row['id']?>"
		          hidden >

		   <button type="submit" 
		          class="btn btn-primary"
		          name="update">Update</button>
		    <a href="read.php" class="link-primary">Back</a>
	    </form>
	</div>
</body>
</html>