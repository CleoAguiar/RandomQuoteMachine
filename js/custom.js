const endpoint = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';

(function($){
	function displayQuote(){
		$.getJSON(endpoint, function(json){
			var quote = json.quoteText;
			var author = json.quoteAuthor.length == 0 ? 'Unknown' : json.quoteAuthor;
			
			$('#text').text(quote);
			$('#author').text(author);
			$('#tweet-quote').attr('href', `https://twitter.com/intent/tweet?text=${quote} - by ${author}`);
		});
	}

	$(document).ready(function(){
		displayQuote();

		$('#new-quote').click(function(){
			displayQuote();
		});
	});
})(jQuery);