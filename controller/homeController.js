var express = require("express");
var article = require('../models/article');
var note = require('../models/note');
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
  res.send("");
})


// Export routes for server.js to use.
module.exports = router;