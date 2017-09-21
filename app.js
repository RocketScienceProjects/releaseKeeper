var express    = require('express'),
    app        = express(),
    bodyparser = require('body-parser'),
    mongoose   = require('mongoose')

mongoose.connect("mongodb://localhost/releaseMan");

app.use(bodyparser.urlencoded({extended: true})); //declaration to use the body-parser
app.set("view engine", "ejs");

//Set schema for the db/js objects
var releaseSchema = new mongoose.Schema({
  org: String,
  package: String,
  date: String
});
//compile the schema into a model
var Release = mongoose.model("Release", releaseSchema);

// Release.create(
//   {
//     org: "fte",
//     package: "v39.0.1.erd",
//     date: "20170919114030"
//   }, function(err, release){
//     if(err){
//       console.log(err);
//     } else {
//       console.log("A new release record inserted: ")
//       console.log(release);
//     }
//   })

// var releases = [
//   {org: "dev", package: "v39.0.1.erd", date: "20170919114030"},
//   {org: "fte", package: "v39.0.1.erd", date: "20170919114030"},
//   {org: "uat", package: "v39.0.1.erd", date: "20170919114030"},
//   {org: "prod", package: "v39.0.1.erd", date: "20170919114030"}
// ];

//the home page
app.get("/", function(req, res){
  //get the data from db and render them in the home page
  //Room.find({}).sort({date: -1}).exec(function(err, docs) { ... });
  Release.find({}).sort({date: -1}).exec (function(err, allReleases){
      if(err) {
        console.log(err);
      } else {
        res.render("home", {releases:allReleases});
      }
  })
  //
});

app.get("/new", function(req, res){
    res.render("new");
});

//Create a POST route that accepts new values to be updated, and redirect to the home route
app.post("/", function(req, res){
  //get the data
  var org = req.body.org;
  var package = req.body.package;
  //var date = req.body.date;
  var date = new Date();
  var newRelease = {org: org, package: package, date: date}
  Release.create(newRelease, function(err, newRelease){
    if(err){
      console.log(err);
    }else {
        //redirect to the home page
      res.redirect("/");
    }
  })
});

app.listen('9090', function(){
  console.log("Release Tracker App Server Started....");
});
