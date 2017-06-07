//controller that evaluates the string parameter to check whether that string contains either a unix timestamp or a natural language date
'use strict';

//function that evaluates the date parameter:
function evaluateDate(date){
	var outputObj = { unix: null, natural: null };
	if(typeof date !== 'string') return outputObj;
	var naturalDate; var unixDate; var convertedDate;
	if(/\D/.test(date)){ //natural date passed (contains at least one char)
		convertedDate = new Date(date).getTime();
		//check if the date is valid:
		if(!(convertedDate>0)) return outputObj;
		naturalDate = date;
		unixDate = parseInt((convertedDate/1000).toFixed(0)); //date in seconds
	}else{ //unix date passed (numbers only)
		convertedDate = parseInt(date); //date in seconds
		naturalDate = new Date(convertedDate*1000).toDateString();
		unixDate = convertedDate;
	}
	outputObj.natural = naturalDate;
	outputObj.unix = unixDate;
	return outputObj;
}

//object to export:
function ParameterHandler(){
	this.getDate = function(req, res){
		res.json(evaluateDate(req.params[0]));
	};
}//ParameterHandler()

module.exports = ParameterHandler;
