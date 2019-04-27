var path = require("path");

module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  app.get("/api/friend", function(req, res) {
    res.sendFile(path.join(__dirname + "/../data/friend.js"));
  });

  app.use("", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });

};