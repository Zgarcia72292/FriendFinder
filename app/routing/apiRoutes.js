//USED WEEK 13 ACTIVITY 16 FOR CODE REFERENCE 
//USED PHIL'S PSEUDO CODE FOR REDERENCE

var friendsData = require("../data/friends.js");
var arraySort = require ("array-sort");

module.exports = function(app) {



    //Creates a custom api path that will direct to a page that will display the friendsData data in json format.


  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


 



  //The .post method takes the user input from the survey page and stores it in an array

  app.post("/api/friends", function(req, res) {
   
   // this variable is for the new user's input 
   var newUserdata=req.body;
   //This is the array that will be storing the difference in scores
   var storeTotaldifference = []
   var results = 0;

   //this for loop goes into each object in the friendsData array, then 
   //goes into the scores array and compares each//
    for (var i = 0; i < friendsData.length; i++){
        for (var j = 0; j < friendsData[i].scores.length; j++){
          results += (parseInt(newUserdata.scores[j]) - parseInt(friendsData[i].scores[j]));
        }
        //then we push the persons name, photo and difference in score into a new array//
   storeTotaldifference.push({name:friendsData[i].name, photo:friendsData[i].photo, totalDifference: Math.abs(results)});
   
      }
//now we sort the positions of the people in the new array so that the person
//with the smallest difference in score is at the top, or in position '0'//

arraySort(storeTotaldifference, 'totalDifference');

//now we push the newUserdata into the friendsData so they can be compared to for other users
//that visit the site//

friendsData.push(newUserdata);

//Lastly, we show the user who they matched with, i.e. who had the smallest
//score difference, i.e. who is in storeTotaldifference at position 0//

return res.json(storeTotaldifference[0]);

});
  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  // app.post("/api/clear", function(req, res) {
  //   // Empty out the arrays of data
  //   friendsData.length = [];
    

  //   res.json({ ok: true });
  // });
};
