var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var friends = require("./app/data/friend");

var app = express();
var port = process.env.PORT || 8082;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
require("./app/routing/apiRoute")(app);
require("./app/routing/htmlRoute")(app);

app.get('/api/friend', function(req, res) {
    res.json(friend);
    // console.log('55555');
});

app.listen(port, () => console.log("Listening on port %s", port));