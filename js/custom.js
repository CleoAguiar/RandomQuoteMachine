const endpoint = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';

(function($){
	function displayQuote(){
		$.getJSON(endpoint, function(json){
			$('#text').text(json.quoteText);
			$('#author').text(json.quoteAuthor.length == 0 ? 'Unknown' : json.quoteAuthor);
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