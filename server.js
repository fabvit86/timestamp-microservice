'use strict';

var express = require('express'), 
	routes = require('./app/routes/index.js');

var app = express();

var rootPath = process.cwd();

app.use('/public', express.static(rootPath+'/public'));
app.use('/controllers', express.static(rootPath+'/app/controllers'));

routes(app); //pass the app to the routes

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('Node.js listening on port '+port+'...');
});