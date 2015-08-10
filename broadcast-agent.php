<?php 

	echo htmlspecialchars($_POST['title']); 
	echo htmlspecialchars($_POST['message']); 

//echo 'The Residence Tunis Push notification \n';

	$out = shell_exec("node push.js");
	echo $out;


?>