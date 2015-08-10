<?php 

    $title   =  "Notification message";
	$message =  htmlspecialchars($_POST['message']); 

//echo 'The Residence Tunis Push notification \n';

	$out = shell_exec("node push.js ".$title." ".$message);
	?>
	<script language="javascript">
	/*
    var ask = window.confirm(<?php echo "Broadcast message result:\n".$out; ?>);
    if (ask) {
        window.alert("This post was successfully deleted.");

        document.location.href = "index.html";

    } */

	if(!confirm( "Broadcast text message has been processed.\n\n Do you want to send another message?")) {
		document.location = 'index.html';
	}
	else {
	document.location = 'index.html#contact';
	}
	
	</script>
<?php
	//header('Location: index.html');      

?>