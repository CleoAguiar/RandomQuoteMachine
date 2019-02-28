const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

function getQuote() {
	fetch(endpoint)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		displayQuote(data.message);
	})
	.catch(function(){
		console.log("Error");
	});
}

function displayQuote(quote) {
	const quoteText = document.querySelector('#text');
	quoteText.textContent = quote;
}

const newQuoteButton  = document.querySelector('#new-quote');
newQuoteButton.addEventListener('click', getQuote);
