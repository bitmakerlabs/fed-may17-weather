// The API url and the city we want to check...
var url = "http://api.openweathermap.org/data/2.5/weather?callback=?";
var city = "Miami"
var unit = "metric"
var id = '6dec5fb891e6e243c9d8c20351998e67'


$('#search').click(function() {
	city = $('#find').val()

	// Go call the URL and pass 2 parameters (q=city, units=metric/imperial)
	$.getJSON(url, {'q':city, 'units':unit,  'APPID':id}, function(data)
	{
		// CALLBACK

		console.log(data)

		var temp = Math.round(data.main.temp);

		$('#city').text(data.name + ", " + data.sys.country)
		$('#curr').hide().html(temp + "&deg;C").fadeIn();
		$('#high').html(data.main.temp_max + "&deg;C");
		$('#low').html(data.main.temp_min + "&deg;C");

		if (temp < 15) {
			$('body').css('background-color', 'rgb(87, 95, 194)');
		}
		else {
			$('body').css('background-color', 'rgb(200, 100, 73)');
		}

	});

})










//
