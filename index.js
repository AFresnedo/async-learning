var request = require('request');
var async = require('async');

// // functions
// function fn1(callback) {
  // var initial = 55;
  // callback(null, initial);
// }
// function fn2(num1, callback) {
  // num1 += 5;
  // callback(null, num1);
// }
// function fn3(num2, callback) {
  // num2 += 40;
  // callback(null, num2);
// }

// async.waterfall([fn1, fn2, fn3], function(err, results) {
  // console.log('Done!');
  // console.log(results);
// });
// example of what DOESN'T work
var urls = ['http://www.reddit.com/search.json?q=politics',
'http://www.reddit.com/search.json?q=puppies',
'http://www.reddit.com/search.json?q=beyonce'];

// create an iterator to get first title of urls
var getFirstTitle = function(url, callback) {
  request(url, function(err, res, data) {
    var firstTitle = JSON.parse(data).data.children[0].data.title;
    callback(null, firstTitle);
  });
};

async.concat(urls, getFirstTitle, function(err, results) {
  console.log(results);
});
