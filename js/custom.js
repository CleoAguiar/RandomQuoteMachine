const endpoint = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';

(function($){
	function displayQuote(quote, author = 'Unknown'){
		$('#text').text(quote);
		$('#author').text(author);
		$('#tweet-quote').attr('href', `https://twitter.com/intent/tweet?text=${quote} - by ${author}`);
	}

	$(document).ready(function(){
		displayQuote('json.quoteText', 'json.quoteAuthor');

		$('#new-quote').click(function(){
			displayQuote('quoteText');
		});
	});
})(jQuery);