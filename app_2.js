var logx = require('./Greet_Languages');
var util = require("util");
//logx();
//console.log(greet.);

var person = {
    firstname : "sundara",
    lastname : "subramanian",
    age : "25",
    greet : function() {
        console.log("Hello, " + this.firstname + " " + this.lastname + " aged " + this.age + " years");
    }
}

person.greet();

console.log(person.firstname);
console.log(person["firstname"]);

function Person(firstname, lastname, age) { 
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

var x = new Person("sundara", "subramanian", 25);
console.log(x.age);
Person.prototype.greet = function() {
    console.log("Hello,"+this.lastname + " " + this.firstname);
}
x.greet();
var y = new Person("xyz", "yyy");
y.greet();
console.log(y.age);

console.log(x.__proto__);
console.log(y.__proto__);
console.log(x.__proto__ === y.__proto__);

function change(b) {
    b =2;
}
var a = 1;
change(a);
console.log(a);


function changeObject(h) {
    h.x = "y";
    h.c = "c";
}

var n = {
    x : "r",
    c : "b"
}
console.log(n);
changeObject(n);
console.log(n);

(function(lastname) {
    var x = "sundara";
    console.log("yoyo" + x + " " + lastname);
}("subramanian"));

var x = "k";
console.log(x);

logx.english();
logx.spanish();


console.log(util.format("Yoyo, %s"), "Sundar");