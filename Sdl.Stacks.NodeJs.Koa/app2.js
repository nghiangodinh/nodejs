var koa = require("koa");
var app = koa();

var route = require("koa-route");
var parse = require("co-body");

var monk = require("monk");
var wrap = require("co-monk");
var db = monk("localhost/koa_users");
var

app.use(route.post("/user", saveUser));
app.use(route.post("/user/:id", getUser));

function *saveUser(){
    var userFromRequest = yield parse(this);
}

function getUser(){

}

app.listen(3000);
console.log("The app is listening. Port 3000");