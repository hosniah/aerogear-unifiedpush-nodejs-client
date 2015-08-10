<?php 

    $title   =  "Notification message";
	$message =  htmlspecialchars($_POST['message']); 
	$user    =  htmlspecialchars($_POST['user']); 

//echo 'The Residence Tunis Push notification \n';

	$out = shell_exec("node peruser-push.js ".$user." '".$message."'");
	?>
	<script language="javascript">
	/*
    var ask = window.confirm(<?php echo "Broadcast message result:\n".$out; ?>);
    if (ask) {
        window.alert("This post was successfully deleted.");

        document.location.href = "index.html";

    } */

	if(!alert( "Broadcast text message has been processed to the right guest.\n\n")) {
		document.location = 'index.html';
	}

	
	</script>
<?php
	//header('Location: index.html');      

?>