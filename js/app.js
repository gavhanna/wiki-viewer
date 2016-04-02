$( document ).ready(function() {
  $("button").click(function(){
		$(".content").addClass("removeFlexGrow");
		$(".results").html("");
    var searchTerm = $("input").val();
    var wikiURL = "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + searchTerm + "&callback=JSON_CALLBACK";
		console.log(wikiURL);
    $.ajax({
			url: wikiURL,
			dataType: "jsonp",
			success: function (data) {
				  if ("query" in data) {
          console.log(data);
					for (var key in data.query.pages){
						var results = data.query.pages[key];
						$(".results").append("<div class='result'><a href='http://en.wikipedia.org/?curid=" + results.pageid + "'>" +
						"<h1>" + results.title + "</h1>" +
						"<p>" + results.extract + "</p><a><div>");
					}
				} else {
				 $(".results").append("<h3>No results found!<br>Try again.</h3>");
			 	}
			}
    });
  });
});
