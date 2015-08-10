// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

var arg_url = process.argv.slice(2);
arg_url =   String(arg_url);
console.log('Push view param: '+arg_url);

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
		alert: "{\"dest\":\"all\",\"notification_type\":\"view\",\"url\":arg_url,\"title\":\"notification title\" }",
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
