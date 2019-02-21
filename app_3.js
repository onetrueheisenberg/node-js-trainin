//object properties and methods
var obj = {
    greet : "Hello"
}

console.log(obj.greet);
obj.greet = "yoyo";
console.log(obj.greet);
console.log(obj["greet"]);
var f = "greet";
console.log(obj);
console.log(obj[f]);


//functions and arrays
var arr = [];

arr.push(function() {
    console.log("Hello English");
});

arr.push(function() {
    console.log("Hola Spanish");
});

arr.push(function() {
    console.log("Konichiwa Japanese");
});
arr.push("S");
arr[0]();
arr[1]();
arr[2]();

arr.forEach(function(i) {
    i();
})