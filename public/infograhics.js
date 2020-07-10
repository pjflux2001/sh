//const { response } = require("express");

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://bing-image-search1.p.rapidapi.com/images/search?q=covid%20infographic",
	"method": "GET",
	//"dataType": 'JSON',
	"headers": {
		"x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
		"x-rapidapi-key": "e94bf9e7a6mshf66f488d77fd452p116c67jsn2282a1fe240f"
	}
}

$.ajax(settings).done(function (response) {

	for(i=1; i<35; i++){
	document.getElementById("val").innerHTML += "<p>"+ response.value[i].thumbnailUrl + "</p>"
	//document.getElementById("val").innerHTML += "<div class='carousel-item active'>" + "<img src=\""+ response.value[0].thumbnailUrl +"\" class='d-block w-100 h-100'</img>" + "</div>" + "<div class='carousel-item'>" + "<img src=\""+ response.value[i].thumbnailUrl +"\" class='d-block w-100 h-100'</img>" + "</div>";
	}
	console.log(response);
});
