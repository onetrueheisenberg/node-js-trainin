var greeting = require("./greetingd.json");
var x = 1;
var y = 2;

var z = x+y;
var greetLog = function() {
    console.log(z);
    console.log(greeting.English);
}

module.exports = greetLog;