//routes definition
'use strict';

var rootPath = process.cwd();
var ParamHandler = require(rootPath+'/app/controllers/paramController.server.js');

module.exports = function(app){

	var paramHandler = new ParamHandler();
	
	app.route('/').get(function(req, res){
		res.sendFile(rootPath+'/public/index.html');
	});

	//catch every parameter after the root path:
	app.route('/*').get(paramHandler.getDate);

};//module export