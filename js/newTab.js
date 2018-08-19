let request = require('request');
let cheerio = require('cheerio');
let jsonframe = require('jsonframe-cheerio')

let url="https://www.bbc.com/news/world";
request (url, function(error, response, html) {
  if (!error && response.statusCode === 200) {
    let $ = cheerio.load(html, {
      normalizeWhitespace: true,
      xmlMode: true
    });
    jsonframe($);
    // console.log($.text());
    // console.log($.html());
    // console.log($('.title-link__title').text())
    const topStories = [];
    $('.title-link__title').each(function(i, elem) {
      topStories[i] = $(this).text();
      console.log(topStories[i]);
      if (i === 9) {
        return false;
      }
    });

  } else {
    console.log("We've encounter an error: " + error);
  }
});
