var experss = require("express");
var path = require("path");

module.exports = function(app) {

  app.get("/survey", function(req, res){
    console.log("GET Survey");
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.use("/", function(req, res, next){
    console.log("Other Stuff");
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};