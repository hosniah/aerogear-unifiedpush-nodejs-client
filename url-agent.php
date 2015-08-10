<?php 

    $title   =  "Notification message";
	$message =  htmlspecialchars($_POST['url']); 

//echo 'The Residence Tunis Push notification \n';

	$out = shell_exec("node push-view.js '".$message."'");
	?>
	<script language="javascript">
	/*
    var ask = window.confirm(<?php echo "Broadcast message result:\n".$out; ?>);
    if (ask) {
        window.alert("This post was successfully deleted.");

        document.location.href = "index.html";

    } */

	if(!confirm( "Broadcast url has been processed.\n\n Do you want to send another url?")) {
		document.location = 'index.html'; 
	}
	else {
	document.location = 'index.html#works'; 
	}
	
	</script>
<?php
	//header('Location: index.html');      

?>
