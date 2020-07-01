var myHeaders = new Headers();
myHeaders.append("Subscription-Key", "e4db10f1ac324ea7a370a0f2564f800e");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.smartable.ai/coronavirus/news/US", requestOptions)
  .then(response => response.text())
  .then(result => document.getElementById("news").innerHTML = result)
  .catch(error => console.log('error', error));