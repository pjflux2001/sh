var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://bing-image-search1.p.rapidapi.com/images/search?q=covid%20infographic",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
		"x-rapidapi-key": "e94bf9e7a6mshf66f488d77fd452p116c67jsn2282a1fe240f"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});