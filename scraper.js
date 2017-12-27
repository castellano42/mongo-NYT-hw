var cheerio = require("cheerio");
var axios = require("axios");


// First, tell the console what server.js is doing
var scrape = function(){
	// Making a request for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
	return axios.get("https://www.nytimes.com/section/world")
	.then((response) => {

	  // Load the HTML into cheerio and save it to a variable
	  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
	  var $ = cheerio.load(response.data);

	  // An empty array to save the data that we'll scrape
	  var results = [];

	  // With cheerio, find each p-tag with the "title" class
	  // (i: iterator. element: the current element)
	  $("div.story-body").each(function(i, element) {

		var $link = $(element).find('.headline a')

		var articleTitle = $link.text();

	  	var link = $(element).find('.headline a').attr("href")
	   
	   	var description = $(element).find('p.summary').text()

	  	if(link === undefined){
	  		$link = $(element).find('a.story-link')
	  		link = $link.attr("href");
	  		articleTitle = $link.find("h2.headline").text().trim();
	  	}

	    // Save these results in an object that we'll push into the results array we defined earlier   
	    if(link !== undefined){
			results.push({
			  title: articleTitle,
			  link: link,
			  description: description
			});
	    } 

	  });

	  return results;
	}).catch(err=>console.log(err));
}

module.exports = scrape; 