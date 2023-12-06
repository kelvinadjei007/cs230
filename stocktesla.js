async function fetchStockPrice(){



const url = 'https://yfinance-stock-market-data.p.rapidapi.com/stock-info';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '81cb539a40msh691ee2562c530e9p1c6f8cjsn771559a9c54c',
		'X-RapidAPI-Host': 'yfinance-stock-market-data.p.rapidapi.com'
	},
	body: new URLSearchParams({symbol: 'TSLA'})
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    document.getElementById('price').innerText= result.data.currentPrice
} catch (error) {
	console.error(error);
}}

fetchStockPrice()