//USED WEEK 13 ACTIVITY 16 FOR CODE REFERENCE

var friendsData = require("../data/friends");


module.exports = function(app) {



    //Creates a custom api path that will direct to a page that will display the friendsData data in json format.


  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

 



  //The .post method takes the user input from the survey page and stores it in an array

  app.post("/api/friends", function(req, res) {
   
   var userdata=req.body;
    for (i = 0; i = friendsData.length; i++){
        friendsData[i].push(userdata);
    }
});
  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsData.length = [];
    

    res.json({ ok: true });
  });
};
