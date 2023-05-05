<!DOCTYPE html>
<html>
<head>
	<title>Create</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style2.css">
    <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <style>.back{color: white; position: fixed;} .back:hover{color: #b53ab5;}</style>
</head>
<body><a href="t_home.php" class="back"><i class="far fa-hand-point-left fa-3x"></i></a>
	<div class="container">
		<form action="atm_db.php" 
		      method="post">
            
		   <h4 class="display-4 text-center">Create</h4><hr><br>
		   <?php if (isset($_GET['success'])) { ?>
		    <div class="alert alert-success" role="alert">
			  <?php echo $_GET['success']; ?>
		    </div>
		    <?php } ?>
		   <?php if (isset($_GET['error'])) { ?>
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
		           value="<?php if(isset($_GET['Name']))
		                           echo($_GET['Name']); ?>" 
		           placeholder="Enter name">
		   </div>

		   <div class="form-group">
		     <label for="roll">RollNo</label>
		     <input type="text" 
		           class="form-control" 
		           id="roll" 
		           name="roll" 
		           value="<?php if(isset($_GET['RollNo']))
		                           echo($_GET['RollNo']); ?>"
		           placeholder="Enter RollNo">
		   </div>

		   <div class="form-group">
		     <label>Department</label>
		     <select name="dept" class="form-control">
              <option value="">Select</option>
              <option value="B.E Computer Science and engineering">B.E Computer Science and engineering</option>
              <option value="BE Electronics and Communication Engineering">BE Electronics and Communication Engineering</option>
              <option value="BE Mechanical Engineering">BE Mechanical Engineering</option>
              <option value="B.Tech Artificial Intelligence and Data Science">B.Tech Artificial Intelligence and Data Science</option>
              <option value="B.Tech Biotechnology">B.Tech Biotechnology</option>
              <option value="B.Tech Information Technology">B.Tech Information Technology</option>
              <option value="B.Tech Polymer Technology">B.Tech Polymer Technology</option>
              <option value="BE Civil Engineering">BE Civil Engineering</option>
              <option value="BE Electrical and Electronics Engineering">BE Electrical and Electronics Engineering</option>
              <option value="BE Mechatronics Engineering">BE Mechatronics Engineering</option>
            </select>

		   </div>
		   <div class="form-group">
		     <label>Semster</label>
		     <select name="sem" class="form-control">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
		   </div>
		   <div class="form-group">
          <label>Sub1 Mark </label>
          <input type="text" class="form-control" name="m1" value="<?php if(isset($_GET['Mark1']))
                               echo($_GET['Mark1']); ?>" >
       </div>   
       <div class="form-group">
          <label>Sub2 Mark</label>
          <input type="text" class="form-control" name="m2" value="<?php if(isset($_GET['Mark2']))
                               echo($_GET['Mark2']); ?>" >
       </div>   
       <div class="form-group">
          <label>Sub3 Mark</label>
          <input type="text" class="form-control" name="m3" value="<?php if(isset($_GET['Mark3']))
                               echo($_GET['Mark3']); ?>" >
       </div>   
       <div class="form-group">
          <label>Sub4 Mark</label>
          <input type="text" class="form-control" name="m4" value="<?php if(isset($_GET['Mark4']))
                               echo($_GET['Mark4']); ?>" >
       </div>   
       <div class="form-group">
          <label>Sub5 Mark</label>
          <input type="text" class="form-control" name="m5" value="<?php if(isset($_GET['Mark5']))
                               echo($_GET['Mark5']); ?>" >
       </div>   
       <div class="form-group">
          <label>Sub6 Mark</label>
          <input type="text" class="form-control" name="m6" value="<?php if(isset($_GET['Mark6']))
                               echo($_GET['Mark6']); ?>" >
       </div>

		   <button type="submit" 
		          class="btn btn-primary"
		          name="create">Create</button>
		    <a href="t_home.php" class="link-primary">Cancel</a>
		    <script>
		document.querySelector('.btn-primary').addEventListener('click',success);
function success() {
	// body...

	swal("Good job!", "You clicked the button!", "success");}</script>
	    </form>
	</div>

</body>
</html>