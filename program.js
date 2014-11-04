var http = require('http');
var bl = require('bl');
var fs = require('fs');
var iArg = process.argv[2];
var iiArg = process.argv[3];
var iiiArg = process.argv[4];

//6
// var myMod = require('./myMod/mod.js');
// var dir = process.argv[2];
// var ext = process.argv[3];

// myMod(dir,ext,function(err,dir){
//   if (err) {
//     console.log(err);
//   }
//   for (var i = 0; i < dir.length; i++) {
//     console.log(dir[i]);
//   }
// });

// 7
// function g(url,callback){
//  http.get(url,function(res){
//    res.setEncoding('utf8');
//    res.on('data', function(data){
//      console.log(data);
//    });
//  });
// }

// g(iArg);

//8
// function pipe(url,callback){
//  http.get(url,function(res){
//    res.pipe(bl(function(err,data){
//      console.log(data.toString().length);
//      console.log(data.toString());
//    }));
//  });
// }

// pipe(iArg);

//9.i
// function aSyncpipe(url1,url2,url3,callBack){
//  var urli = "";
//  var urlii = "";
//  var urliii = "";
//  var url = "";
//  var count = 0;
//  http.get(url,function(res){
//    res.pipe(bl(function(err,data){
//    console.log(data.toString());
//    }));
//  });
// }

// aSyncpipe(iArg,iiArg,iiiArg);

// 9.ii
// var http = require('http'),
//     bl = require('bl');

// var callQ = 0;
// var responses = {};
// var done = function(idx, data) {
//   callQ += 1;
//   responses[idx] = data;

//   if (callQ === 3) {
//     console.log(responses['0']);
//     console.log(responses['1']);
//     console.log(responses['2']);
//   }
// };
// var makeRequest = function(idx, url, done) {
//   http.get(url, function(res) {
//     var response = '';
//     res.pipe(bl(function(err, data) {
//       response += data;
//     }));
//     res.on('end', function() {
//       done(idx, response.replace(/\n/g, ''));
//     });
//   });
// };

// makeRequest('0', process.argv[2], done);
// makeRequest('1', process.argv[3], done);
// makeRequest('2', process.argv[4], done);

//9.iii
    // var results = [];
    // var count = 0;

    // function printResults () {
    //   for (var i = 0; i < 3; i++)
    //     console.log(results[i]);
    // }

    // function httpGet (index) {
    //   http.get(process.argv[2 + index], function (response) {
    //     response.pipe(bl(function (err, data) {
    //       if (err)
    //         return console.error(err);

    //       results[index] = data.toString();
    //       count++;

    //       if (count == 3) // yay! we are the last one!
    //         printResults();
    //     }));
    //   });
    // }

    // for (var i = 0; i < 3; i++)
    //   httpGet(i);

//10
// var net = require('net');
// var moment = require('moment');
// var fs = require('fs');
// var server = net.createServer(function (socket) {
//   socket.write(moment().format('YYYY-MM-DD HH:mm') +'\n');
//   socket.end();
// });

// server.listen(iArg);

//11
// var server = http.createServer(function(req,res){
//   fs.createReadStream(iiArg)
//     .pipe(res);
// });
// server.listen(iArg);

//12
// var map = require('through2-map');
// var server = http.createServer(function(req,res){
//   if (req.method === 'POST'){
//       req.pipe(map(function (chunk){
//         return chunk.toString().toUpperCase();
//     })).pipe(res);
//   } else {
//     res.end('send me a POST request');
//   }
// });
// server.listen(iArg);

//13i
// var moment = require('moment');
// var url = require('url');
// var server = http.createServer(function(req,res) {
//   res.writeHead(200,{'Content-Type': 'application/json'});

//   var urlParts = url.parse(req.url, true);
//   var thisMoment = new moment(urlParts.query.iso);

//   if ('/api/parsetime' === urlParts.pathname) {
//     res.write(JSON.stringify({
//       'hour': parseInt(thisMoment.format('H'),null),
//       'minute': parseInt(thisMoment.format('mm'),null),
//       'second': parseInt(thisMoment.format('ss'), null)
//     }));
//     res.end();
//   } else if ('api/unixtime' === urlParts.pathname) {
//     res.write(JSON.stringify({
//       'unixtime': thisMoment._d.getTime()
//     }));
//     res.end();
//   } else {
//     res.end();
//   }
// });
// server.listen(iArg);

//13ii
var http = require('http'),
    moment = require('moment'),
    url = require('url'),
    fs = require('fs');

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  var urlParts = url.parse(req.url, true);
  var thisMoment = new moment(urlParts.query.iso);

  if ('/api/parsetime' === urlParts.pathname) {
    res.write(JSON.stringify({
      'hour': parseInt(thisMoment.format('H'), null),
      'minute': parseInt(thisMoment.format('mm'), null),
      'second': parseInt(thisMoment.format('ss'), null)
    }));
    res.end();
  }
  else if ('/api/unixtime' === urlParts.pathname) {
    res.write(JSON.stringify({
      'unixtime': thisMoment._d.getTime()
    }));
    res.end();
  }
  else {
    res.end();
  }
});
server.listen(iArg);

