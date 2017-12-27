// $.ajax({
//     method: "GET",
//     url: "/articles/" + thisId
//   })
//     // With that done, add the note information to the page
//     .done(function(data) {
//       console.log(data);
//       // The title of the article
//       $("#notes").append("<h2>" + data.title + "</h2>");
//       // An input to enter a new title
//       $("#notes").append("<input id='titleinput' name='title' >");
//       // A textarea to add a new note body
//       $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
//       // A button to submit a new note, with the id of the article saved to it
//       $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

//       // If there's a note in the article
//       if (data.note) {
//         // Place the title of the note in the title input
//         $("#titleinput").val(data.note.title);
//         // Place the body of the note in the body textarea
//         $("#bodyinput").val(data.note.body);
//       }
//     });
// };


$(document).ready(()=>{
  var scrapedItems = [];   

  $("#newArticlesButton").click(()=>{
      $.ajax({
          method: "GET",
          url: "/api/scrape"
      }).done((data)=>{
        scrapedItems = data; 
        var div = $("<div></div>");
        var index = 0;
        data.forEach((item)=>{
          var template = $("#home-article").html();
          var compiled =  _.template(template);
          item['index'] = index; 
          var output = compiled(item);
          div.append(output);
          index ++; 
        });

        $("#renderedArticles").html(div)
      });
  });

   $("#renderedArticles").on("click", ".save-article-btn", function(){
    console.log("i got clicked")
    window.temp = $(this)
    var index = parseInt($(this).attr('data-id'));
    var article = scrapedItems[index];
    console.log(index);
    console.log(article);
      $.ajax({
          url: "/api/article",
          method: "POST",
          data : article
      }).done(()=>{

        // location.reload();
      });
   });

});


