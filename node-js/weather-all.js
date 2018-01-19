var request = require("request");
var cheerio = require("cheerio");

// function getArray() {
//   return $.getJSON('list-az.json');
// }

var cities = ["phoenix", "flagstaff", "bisbee", "mesa", "tempe"];

// url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + 02888;
var main = "https://www.wunderground.com/weather/us/az/";


// getArray().done(function(json) {
for (var i = 0; i < cities.length; i++) {
    var city = cities[i];
    // console.log(city);

    var url = main + city;

    request(url, function(error, response, body) {
        if (!error) {
            var $ = cheerio.load(body);

            $('h1[_ngcontent-c2]').filter(function() {
                var data = $(this);
                c = data.fist();
                console.log(c);
                // var place = data.first().html();
            })

            var temperature = $(".wu-value").html();
            // var place = $("h1[_ngcontent-c2]").html();

            console.log(" temperature is " + temperature + " degrees Fahrenheit.");
        } else {
            console.log("We’ve encountered an error: " + error);
        }
    });

}

// });
