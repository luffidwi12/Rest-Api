// Fetch

const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', function(){

	const inputKeyword = document.querySelector('#input-keyword');
	fetch('http://www.omdbapi.com/?apikey=94103847=' + inputKeyword.value)
	.then(response => console.log(response)); 
});