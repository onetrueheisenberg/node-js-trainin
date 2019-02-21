var greeting = require("./greetingd.json");

var greetLog = function() {
    console.log("Hola");
    console.log(greeting.Spanish);
}

module.exports = greetLog;