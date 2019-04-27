var friends = require("../data/friend.js");

module.exports = function(app){

  app.post('/api/friend', function(req, res) {
    res.send(req.body);
    var totalDifference = 0;
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    }
    var userData= req.body;
    var userName = userData.name;
    var userScores = userData.scores;

    var b = userScores.map(function(item){

      return parseInt(item,10);
    })

    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: b
    };

    console.log("name: " + userName);
    console.log("User score: " + userScores);

    var sum = b.reduce((a, b) => a + b, 0);
    console.log("sum of users score: " + sum);
    console.log("Best Match Friend: " + bestMatch.friendDifference);
    console.log("-----------------");
      
    for (var i = 0; i < friends.length; i++){
      console.log(friends[i].name);
      totalDifference = 0;
      console.log("Total Diff " + totalDifference);
      console.log("Best match friend diff " + bestMatch.friendDifference);

      var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log("total friend score " + bfriendScore);
      totalDifference += Math.abs(sum = bfriendScore);
      console.log("------------");

      if (totalDifference <= bestMatch.friendDifference){
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;
      }
      console.log(totalDifference + "Total Difference");
    }
    
    console.log(bestMatch);
    friends.push(userData);
    res.json(bestMatch);

  });
};
