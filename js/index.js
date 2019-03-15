const endpoint = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';

function displayQuote(){
	$.getJSON(endpoint, function(json){
			var quote = json.quoteText;
			var author = json.quoteAuthor;
			if (author.length == 0){
				author = "Unknown";
			}
			$("#text").text(quote);
			$("#author").text(author);
			$('#tweet-quote').attr('href', `https://twitter.com/intent/tweet?text=${quote} - by ${author}`);
		});
}

$(document).ready(function(){
	displayQuote();

	$("#new-quote").on("click", function(){
		displayQuote();
	});
});
