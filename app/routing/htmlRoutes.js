var path = require("path");

module.exports = function(app) {
 
//Code below sets the url path to the home and survey pages, where the home page is the route.
//The last line of code is for catching any undefined path names and re-routing to the home page.
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
