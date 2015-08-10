var agSender = require( "unifiedpush-node-sender" ),
	url= "https://aerogear-xxxx.rhcloud.com/",
    message,
    settings;
	
    settings = {
        
        applicationID: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        masterSecret:  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
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
		alert: "{\"dest\":\"all\",\"notification_type\":\"text\",\"title\":\"notification title\",\"message\":\"message text\"}",
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