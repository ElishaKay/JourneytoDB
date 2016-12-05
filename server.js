var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/journey');

var app = express();

app.use(bodyParser.json());   // This is the type of body we're interested in
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

var Message = require('./journeyModel')


// Server and Client Interacting
app.post('/', function (req, res) {	

	var message = new Message(req.body);
	message.save();
	console.log(req.body);
	res.send("Succesful");
});


app.listen(8000);