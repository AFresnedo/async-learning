var request = require('request');
var async = require('async');

// functions
function fn1(callback) {
  var initial = 55;
  callback(null, initial);
}
function fn2(num1, callback) {
  num1 += 5;
  callback(null, num1);
}
function fn3(num2, callback) {
  num2 += 40;
  callback(null, num2);
}

async.waterfall([fn1, fn2, fn3], function(err, results) {
  console.log('Done!');
  console.log(results);
});
// // example of what DOESN'T work
// var urls = ['http://www.google.com', 'http://www.yelp.com',
// 'http://www.twitter.com'];
// var allData = [];

// urls.forEach(function(url) {
  // request(url, function(err, res, data) {
    // allData.push(data);
  // });
// });

// console.log(allData);
