var x = document.getElementById("geoloc");
var browserPos;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  
}

function showPosition(position) {

  browserPos = {lat: position.coords.latitude, lon: position.coords.longitude};
  x.innerHTML = "&ensp; Your Position -&ensp;Latitude: " + position.coords.latitude + 
  "&ensp;&&&ensp;Longitude: " + position.coords.longitude;
}

getLocation();

var platform = new H.service.Platform({
  'apikey': "rMWNJfAV2zeVVEYh5jOh8Lk4Qka34bkEmpOszDwDoik"
});
var geocoder = platform.getSearchService();
function geocodeAndSearch(){
  var rad = parseInt(document.getElementById("slider_value").innerHTML);
  var query = document.getElementById("service").value;
  let geocodeParam ={
      q: query ,
      in: 'circle:'+ browserPos.lat +',' + browserPos.lon +';r='+rad,
      limit: 50
  }
  function onResult(result){
      console.log(result);

      console.log(result.items.length + " " + query +" Found in " + rad + " meters");        
      //info bubble
               
  }
  geocoder.discover(geocodeParam,onResult, alert);
                
}