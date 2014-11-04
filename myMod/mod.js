//6
var fs = require('fs');

module.exports = function(directory,extention,callback){
	fs.readdir(directory, function doneReading(err,list){
		if (err) {
			return callback(err);
		}
		var dir = [];
		for (var i = 0; i < list.length; i++) {
			var ext = list[i].split('.')[1];
			if (ext === extention){
				dir.push(list[i]);
			}
		}
		callback(null,dir);
	});
};