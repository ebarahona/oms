(function(){
	'use strict';

	var express = require('express');
	var mongoose = require('mongoose');
	var bodyParser = require('body-parser');

	var deployd = require('deployd');

	// Set up Deployd
	var options = {
		port: 9000,
		db: {
			connectionString: 'mongodb://localhost/oms'
		}
	}

	var dpd = deployd(options);
	dpd.listen();

	var app = express();

	// Register middleware
	app.use(bodyParser.json());

	// Routers
	app.use(express.static(__dirname +  '/www'));
	var port = 8090;
	app.listen(port, function(err){
		if(err){
			throw err;
		}

		console.log("OMS started on port: " + port);
	});
})();
