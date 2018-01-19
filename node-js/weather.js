
var request = require("request"),
  cheerio = require("cheerio"),
  // url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + 02888;
  url = "https://www.wunderground.com/weather/us/az/phoenix";

request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      temperature = $(".wu-value").html();

    console.log("It’s " + temperature + " degrees Fahrenheit.");
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});
