var express = require('express');
var app = express();
//var request = require('request');
app.set("view engine", "ejs");

var releases = [
  {org: "dev", package: "v39.0.1.erd", date: "20170919114030"},
  {org: "fte", package: "v39.0.1.erd", date: "20170919114030"},
  {org: "uat", package: "v39.0.1.erd", date: "20170919114030"},
  {org: "prod", package: "v39.0.1.erd", date: "20170919114030"}
];

//the home page
app.get("/", function(req, res){
  //get the data and render them in the home page
  res.render("home", {releases:releases});
});

//Create a POST route that accepts new values to be updated, and redirect to the home route
//app.post("/",)

app.listen('9090', function(){
  console.log("release tracker app started....")
});
