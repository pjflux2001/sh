var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.coronatracker.com/news/trending?limit=10&offset&country=Spain&countryCode", requestOptions)
  .then(response => response.text())
  .then(result => document.getElementById("news").innerHTML = result)
  .catch(error => console.log('error', error));


