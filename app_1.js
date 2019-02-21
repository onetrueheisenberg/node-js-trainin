//function statement
function greet() {
    console.log("yoyo");
}
greet();

//functions are first class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

var greetMe = function() {
    console.log("Hello");
};

greetMe();

logGreeting(greetMe);

//use a function expresstion on the fly here
logGreeting(function() {
    console.log("YoyoHello");
});
