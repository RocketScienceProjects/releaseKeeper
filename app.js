var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true})); //declare to use the body-parser
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
app.post("/", function(req, res){
  res.send("you have hit the post page!");
  //get the data
  //redirect to the home page
});

app.listen('9090', function(){
  console.log("Release Tracker App Server Started....");
});
