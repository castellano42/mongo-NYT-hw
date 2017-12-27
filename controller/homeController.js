var express = require("express");
var Article = require('../models/article');
var Note = require('../models/note');
var scraper = require('../scraper');
var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
 // article.all((data) => {
  res.render("index", {});
 // });
});

router.post("/api/note", (req, res) => {

});

router.get("/api/scrape", (req, res)=>{
  scraper().then(output=>{
    res.json(output);
  });
});

router.delete("/api/article/:id", (req, res) => {

});

router.delete("/api/note/:id", (req, res) => {

});

router.put("/api/note/:id", (req, res) => {

});

router.post("/api/article", (req, res)=>{
  console.log(req.body);
  Article
    .create(req.body)
    .then(function(dbArticle) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      console.log(err);
      res.json(err);
    });
})
router.get("/saved-articles", function(req, res){
  Article
    .find({})
    .then(function(dbArticle) {
      // If we were able to successfully find Articles, send them back to the client
      console.log(dbArticle)
      res.render("savedArticles", {"articles": dbArticle});
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      console.log(err)
      // res.json(err);
    });
  
});


// Export routes for server.js to use.
module.exports = router;