//
// DEPENDENCIES///
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var request = require("request");
var twilio = require("twilio")
var accountSid = ; 
var authToken = ;
var client = twilio(accountSid, authToken);

var app = express();  //set our express function call to app so we can use app.kdjflaj later.
var port = 6606;  //create port.  Just so you know, it did not like 6666, almost any other seemed to work///

/////MIDDLEWARE////////
app.use(express.static("public"));  //
// app.use(bodyParser.urlencoded( {
// 	extended:true
// }));  if it sends a depreciated error, use this code.
app.use(bodyParser.json());
app.use(cors());

//////END POINTS///////
var message = {"message": "HELLO WORLD!!!!!"}
app.get("/api/message", function(req, res) {
	return res.json(message);
});
app.post("/api/send_text_message", function(req, res) {
	console.log(req.body.message);
	// request.post("https://" + accountSid + ":" + authToken + "@api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Messages")
	// res.send();
})

client.messages.create({ 
	to: "8017877766", 
	from: "+13852194734", 
	body: "req.body.message",   
}, function(err, message) { 
	console.log(message.sid); 
});


// we want it to listen to out port.
app.listen(port, function() {
	console.log("I am watching you", port);
});

