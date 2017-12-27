var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Article = new Schema({
    title           : String,
    description         : String,
    link        : String,
    Date                : Date
});





var article = {
  all: function(callback) {

  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, callback) {
    article = new Article();
    article.title ="something";
    article.save(); 
  },
  update: function(objColVals, condition, callback) {

  },
  // delete: function()
}

module.exports = article;