//
// DEPENDENCIES///
var express = require("express");
var bodyParser = ("body-parser");

var app = express();  //set our express function call to app so we can use app.kdjflaj later.
var port = 6666;  //create port///
// we want it to listen to out port.
app.listen(port, function() {
	console.log("I am watching you", port);
});

