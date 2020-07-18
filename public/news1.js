//document.getElementById("news_").classList.add("active")

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
var i;
fetch("https://api.coronatracker.com/news/trending?limit=10&offset&country=Spain&countryCode", requestOptions)
  .then(response => response.json())
  //.then(results => console.log(results))
  .then(result => (function(){
        //document.getElementById("news1").innerHTML += '<marquee behavior="scroll" direction="up">';
        for(i = 0; i < 10 ; i++){
          document.getElementById("news1").innerHTML += "<li class=''><span>" + result.items[i].publishedAt + "</span><br><a href='" + result.items[i].url + "'>" + result.items[i].title + "</a></li>";
        }

        //document.getElementById("news1").innerHTML += '</marquee>';
  })())
  .catch(error => console.log('error', error));

  //<marquee behavior="scroll" direction="up">Here is some scrolling text... going up!</marquee>
