// var date = new Date();
// console.log("The current day is" + date.getDate());
var fakeData = require('faker');
var randomName = fakeData.name.findName();
console.log(randomName);