var x = document.getElementById("geoloc");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
$(function() {
  $.getJSON("https://extreme-ip-lookup.com/json/",
   function(json) {
    if (json.country && json.city) {
     $('#ipLookup').html('Location of '+json.query+': '+json.city+', '+json.country+'');
    }
   }
  );
  });
