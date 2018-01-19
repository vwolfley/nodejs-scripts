
var request = require("request");
var cheerio = require("cheerio");
var fs = require('fs');

  url = "http://ldschurchtemples.org/chronological/";

request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body);

     var temple, dedicated, by;




    temperature = $(".wu-value").html();
    console.log("It’s " + temperature + " degrees Fahrenheit.");


  } else {
    console.log("We’ve encountered an error: " + error);
  }
});
