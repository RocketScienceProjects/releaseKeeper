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

app.get("/new", function(req, res){
    res.render("new");
});

//Create a POST route that accepts new values to be updated, and redirect to the home route
app.post("/", function(req, res){
  //get the data
  var org = req.body.org;
  var package = req.body.package;
  var date = req.body.date;
  var newRelease = {org: org, package: package, date: date}
  releases.push(newRelease);
  //redirect to the home page
  res.redirect("/");
});

app.listen('9090', function(){
  console.log("Release Tracker App Server Started....");
});
