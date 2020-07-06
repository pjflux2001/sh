function showstats(){

var x = document.getElementById("stats");

var myHeaders = new Headers();
myHeaders.append("Subscription-Key", "e4db10f1ac324ea7a370a0f2564f800e");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

$(function() {
  $.getJSON("https://extreme-ip-lookup.com/json/",
   function(json) {
    fetch("https://api.smartable.ai/coronavirus/stats/"+json.countryCode, requestOptions)
    .then(response => response.json())
    .then(result => x.innerHTML = "Country : "+result.location.countryOrRegion + " [ "+result.location.isoCode +" ]"+"<br>Confirmed : " + result.stats.totalConfirmedCases + " ( +" + result.stats.newlyConfirmedCases +" )"+ '<br>' +"Recovered : " + result.stats.totalRecoveredCases + " ( +" + result.stats.newlyRecoveredCases +" )"+ "<br>Deaths : " + result.stats.totalDeaths + " ( +" + result.stats.newDeaths +" )"+ "<br>Last Updated on " + result.updatedDateTime.replace('T'," @ ").replace('Z'," ").replace(".",":")+ "<br><br><i> + shows new cases reported yesterday</i>")
    .catch(error => console.log('error', error));

   }
  );
  });





  
}


