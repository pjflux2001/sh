var myHeaders = new Headers();
myHeaders.append("Subscription-Key", "e4db10f1ac324ea7a370a0f2564f800e");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.smartable.ai/coronavirus/news/US", requestOptions)
  .then(response => response.json())
  .then(result => {
    document.getElementById("news").innerHTML = "";
    for(i = 0; i < 10 ; i++){
              document.getElementById("news").innerHTML += "<hr>";
              document.getElementById("news").innerHTML += "<b>" + result.news[i].title + "</b>" + "<hr>";
              document.getElementById("news").innerHTML += "Published on "+ result.news[i].publishedDateTime.replace("T", " @ ").replace("Z", " ") + "<br>";
              document.getElementById("news").innerHTML += "Published by " + result.news[i].provider.name + "<br><br>";
              document.getElementById("news").innerHTML += result.news[i].title + "<br><br>";
              document.getElementById("news").innerHTML += result.news[i].excerpt + "<br>" + "<br>";
              document.getElementById("news").innerHTML += "Read More at : " + "<a href = '" + result.news[i].webUrl + "'>" + result.news[i].webUrl +"</a>" + "<br><br>"; 
              document.getElementById("news").innerHTML += "<img src='" + result.news[i].images[0].url +"'>";
              document.getElementById("news").innerHTML += "<br><br><br><br><br>";
    }

})
  .catch(error => console.log('error', error));