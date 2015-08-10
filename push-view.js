var arg_push   = process.argv.slice(2);

/* arg_title = JSON.stringify(arg_push[0]);*/


arg_message = arg_push[0];
console.log(arg_message);

var jsonObj = {'dest':'all','notification_type':'view','url':arg_message,'title':'Notification title' };
console.log(JSON.stringify(jsonObj));

var agSender = require( "unifiedpush-node-sender" ),
	url= "https://aerogear-smartc.rhcloud.com/",
    message,
    settings;
	
    settings = {
        
        applicationID: "0fe0b749-8fd1-4689-9470-8b94fcb8f6cf",
        masterSecret:  "b2eadc50-1d25-4820-a7df-961d67372a31"
    };
	
	/*
	alert = {
		dest:"all",
		notification_type:"text",
		title:"notification title",
		message:"message text"
		};
	*/
	 message = {
		alert: JSON.stringify(jsonObj),
		title: "Title",
		action: "Action",
		sound: "default",
		badge: 2
		};
	agSender.Sender( url ).send( message,settings ).on( "success", function( response ) {
    console.log( "success called", response );
	})
	.on( "error", function( err ) {
        console.log( err );
    });
