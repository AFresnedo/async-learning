var request = require('request');
var async = require('async');

// functions
function fn1(callback) {
  console.log(1);
  // callback(err, results)
  callback(null, 1);
}
function fn2(callback) {
  console.log(2);
  // callback(err, results)
  callback(null, 2);
}
function fn3(callback) {
  console.log(3);
  // callback(err, results)
  callback(null, 3);
}

async.series([fn1, fn2, fn3], function(err, results) {
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
