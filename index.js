const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
const newQuoteButton  = document.querySelector('#new-quote');
newQuoteButton.addEventListener('click', getQuote);

function getQuote(){
	fetch(endpoint)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		console.log(data.message);
	})
	.catch(function(){
		console.log("Error");
	});
}
