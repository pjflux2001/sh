var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
var i;
fetch("https://api.coronatracker.com/news/trending?limit=10&offset&country=Spain&countryCode", requestOptions)
  .then(response => response.json())
  .then(result => {
        document.getElementById("news").innerHTML = "";
        for(i = 0; i < 10 ; i++){
                  document.getElementById("news").innerHTML += result.items[i].title;
                  document.getElementById("news").innerHTML += "<hr>";
                  if(result.items[i].author.length==0)
                    document.getElementById("news").innerHTML += "Author : Anonymous";
                  else
                    document.getElementById("news").innerHTML += "Author : "+ result.items[i].author;
                  document.getElementById("news").innerHTML += "<br>";
                  document.getElementById("news").innerHTML += "Published on "+ result.items[i].publishedAt.replace("T", " @ ").replace("Z", " ");
                  document.getElementById("news").innerHTML += "<br>";
                  document.getElementById("news").innerHTML += "Published by "+ result.items[i].siteName;
                  document.getElementById("news").innerHTML += "<br><br>";
                  document.getElementById("news").innerHTML += result.items[i].description;
                  document.getElementById("news").innerHTML += "<br><br>";
                  document.getElementById("news").innerHTML += result.items[i].content;
                  document.getElementById("news").innerHTML += "<br><br>";
                  document.getElementById("news").innerHTML += "Read More at : " + "<a href = '" + result.items[i].url + "'>" + result.items[i].url +"</a>";
                  document.getElementById("news").innerHTML += "<br><br>";
                  document.getElementById("news").innerHTML += "<img src='" + result.items[i].urlToImage+"'>";
                  document.getElementById("news").innerHTML += "<br><br><br><br><br>";
        }
   
  })
  .catch(error => console.log('error', error));


