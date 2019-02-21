var express = require("express");
var fs = require("fs");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
var mongoose = require("mongoose");

var port = process.env.PORT || 2500;
var urlEncodedParser = bodyParser.urlencoded({extended : false});
var jsonParser = bodyParser.json();

mongoose.connect("mongodb://localhost/node-js-training");

var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    firstname : String,
    lastname : String,
    age : Number
});

var Person = mongoose.model("Person", PersonSchema);

var yoyo = Person({
    firstname : "sundar",
    lastname : "yoyo",
    age : 25
});

yoyo.save(function(err) {
    if(err) throw err;
    console.log("Saved");
});


app.set("view engine", "ejs");

app.use("/assets", express.static(__dirname + "/public"));

app.use("/", function(request, response, next) {
    console.log("request url : " + request.url);
    var con = mysql.createConnection({
        host: "localhost",
        user : "root",
        password : "rootuser",
        database : "testnode"
    });
    con.query("select persons.id, name, address from persons inner join personaddress on persons.id = personaddress.personid inner join address on personaddress.addressid = address.address_id ", function(err, rows) {
        if(err) throw err;
        console.log(rows);
    });
    console.log(Person.find());
    next();
});

app.get("/", function(request, response) {
    response.render("index");
});

app.get("/persons/:name", function(request, response) {
    response.render("person", {ID : request.params.name, Qstr : request.query.qstr});
});

app.get("/person", urlEncodedParser, function(request, response) {
    response.render("index");
});

app.post("/person", urlEncodedParser, function(request, response) {
    response.send("Registration done");
    console.log(request.body.firstname + request.body.lastname);
});

app.post("/personjson", jsonParser, function(request, response) {
    response.send("json");
    console.log(request.body.firstname + request.body.lastname);
});

app.get("/home", function(request, response) {
    console.log("yoyo first");
    var readable = fs.readFileSync(__dirname + "/index.htm");
    response.send(readable.toString());
});

app.get("/person/:id", function(request, response) {
    console.log("yoyo 3");
    response.send("name is : " + request.param("id"));
});

app.get("/api", function(request, response) {
    console.log("yoyo 2");
    response.json(fs.readFileSync(__dirname + "/package.json").toString());
})

app.listen(port);