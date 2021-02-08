var moment = require('moment');
var math = require('mathjs');

console.log("Hello from JavaScript!");
var startOfDay = moment().startOf('day').fromNow();
var todayFormatted = moment().format("MMM Do YY");
console.log(startOfDay);
console.log(todayFormatted);
console.log(math.sqrt(-4));