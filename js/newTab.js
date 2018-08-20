document.addEventListener('DOMContentLoaded', function() {
  console.log('content loaded');
  document.getElementById('world-news').addEventListener('click', scrapeWorld);
  document.getElementById('africa-news').addEventListener('click', scrapeAfrica);
  document.getElementById('asia-news').addEventListener('click', scrapeAsia);
  document.getElementById('australia-news').addEventListener('click', scrapeAustralia);
  document.getElementById('europe-news').addEventListener('click', scrapeEurope);
  document.getElementById('la-news').addEventListener('click', scrapeLatinAmerica);
  document.getElementById('me-news').addEventListener('click', scrapeMiddleEast);
});

function scrapeWorld() {
    $.get('https://www.bbc.com/news/world/', function(response) {
    // console.log(response);
    // console.log('reached');
    var contents = [];
    $(response).find('span.title-link__title-text').each(function() {
      contents.push( $(this).text() );
    });
    // for (var i = 0; i < 10; i++) {   // grab first 10 articles
    //   console.log(contents[i]);
    // }
    document.getElementById('world-box1').innerHTML = contents[0];
    document.getElementById('world-box2').innerHTML = contents[1];
    document.getElementById('world-box3').innerHTML = contents[2];
    document.getElementById('world-box4').innerHTML = contents[3];
    document.getElementById('world-box5').innerHTML = contents[4];
    document.getElementById('world-box6').innerHTML = contents[5];
    document.getElementById('world-box7').innerHTML = contents[6];
    document.getElementById('world-box8').innerHTML = contents[7];
    document.getElementById('world-box9').innerHTML = contents[8];
    document.getElementById('world-box10').innerHTML = contents[9];
    // console.log('ended');
  });
}

function scrapeAfrica() {
  $.get('https://www.bbc.com/news/world/africa', function(response) {
  var contents = [];
  $(response).find('span.title-link__title-text').each(function() {
    contents.push( $(this).text() );
  });
  document.getElementById('africa-box1').innerHTML = contents[0];
  document.getElementById('africa-box2').innerHTML = contents[1];
  document.getElementById('africa-box3').innerHTML = contents[2];
  document.getElementById('africa-box4').innerHTML = contents[3];
  document.getElementById('africa-box5').innerHTML = contents[4];
  document.getElementById('africa-box6').innerHTML = contents[5];
  document.getElementById('africa-box7').innerHTML = contents[6];
  document.getElementById('africa-box8').innerHTML = contents[7];
  document.getElementById('africa-box9').innerHTML = contents[8];
  document.getElementById('africa-box10').innerHTML = contents[9];
  });
}

function scrapeAsia() {
  $.get('https://www.bbc.com/news/world/asia', function(response) {
  var contents = [];
  $(response).find('span.title-link__title-text').each(function() {
    contents.push( $(this).text() );
  });
  document.getElementById('asia-box1').innerHTML = contents[0];
  document.getElementById('asia-box2').innerHTML = contents[1];
  document.getElementById('asia-box3').innerHTML = contents[2];
  document.getElementById('asia-box4').innerHTML = contents[3];
  document.getElementById('asia-box5').innerHTML = contents[4];
  document.getElementById('asia-box6').innerHTML = contents[5];
  document.getElementById('asia-box7').innerHTML = contents[6];
  document.getElementById('asia-box8').innerHTML = contents[7];
  document.getElementById('asia-box9').innerHTML = contents[8];
  document.getElementById('asia-box10').innerHTML = contents[9];
  });
}

function scrapeAustralia() {
  $.get('https://www.bbc.com/news/world/australia', function(response) {
  var contents = [];
  $(response).find('span.title-link__title-text').each(function() {
    contents.push( $(this).text() );
  });
  document.getElementById('australia-box1').innerHTML = contents[0];
  document.getElementById('australia-box2').innerHTML = contents[1];
  document.getElementById('australia-box3').innerHTML = contents[2];
  document.getElementById('australia-box4').innerHTML = contents[3];
  document.getElementById('australia-box5').innerHTML = contents[4];
  document.getElementById('australia-box6').innerHTML = contents[5];
  document.getElementById('australia-box7').innerHTML = contents[6];
  document.getElementById('australia-box8').innerHTML = contents[7];
  document.getElementById('australia-box9').innerHTML = contents[8];
  document.getElementById('australia-box10').innerHTML = contents[9];
  });
}

function scrapeEurope() {
  $.get('https://www.bbc.com/news/world/europe', function(response) {
  var contents = [];
  $(response).find('span.title-link__title-text').each(function() {
    contents.push( $(this).text() );
  });
  document.getElementById('europe-box1').innerHTML = contents[0];
  document.getElementById('europe-box2').innerHTML = contents[1];
  document.getElementById('europe-box3').innerHTML = contents[2];
  document.getElementById('europe-box4').innerHTML = contents[3];
  document.getElementById('europe-box5').innerHTML = contents[4];
  document.getElementById('europe-box6').innerHTML = contents[5];
  document.getElementById('europe-box7').innerHTML = contents[6];
  document.getElementById('europe-box8').innerHTML = contents[7];
  document.getElementById('europe-box9').innerHTML = contents[8];
  document.getElementById('europe-box10').innerHTML = contents[9];
  });
}

function scrapeLatinAmerica() {
  $.get('https://www.bbc.com/news/world/latin_america', function(response) {
  var contents = [];
  $(response).find('span.title-link__title-text').each(function() {
    contents.push( $(this).text() );
  });
  document.getElementById('la-box1').innerHTML = contents[0];
  document.getElementById('la-box2').innerHTML = contents[1];
  document.getElementById('la-box3').innerHTML = contents[2];
  document.getElementById('la-box4').innerHTML = contents[3];
  document.getElementById('la-box5').innerHTML = contents[4];
  document.getElementById('la-box6').innerHTML = contents[5];
  document.getElementById('la-box7').innerHTML = contents[6];
  document.getElementById('la-box8').innerHTML = contents[7];
  document.getElementById('la-box9').innerHTML = contents[8];
  document.getElementById('la-box10').innerHTML = contents[9];
  });
}

function scrapeMiddleEast() {
  $.get('https://www.bbc.com/news/world/middle_east', function(response) {
  var contents = [];
  $(response).find('span.title-link__title-text').each(function() {
    contents.push( $(this).text() );
  });
  document.getElementById('me-box1').innerHTML = contents[0];
  document.getElementById('me-box2').innerHTML = contents[1];
  document.getElementById('me-box3').innerHTML = contents[2];
  document.getElementById('me-box4').innerHTML = contents[3];
  document.getElementById('me-box5').innerHTML = contents[4];
  document.getElementById('me-box6').innerHTML = contents[5];
  document.getElementById('me-box7').innerHTML = contents[6];
  document.getElementById('me-box8').innerHTML = contents[7];
  document.getElementById('me-box9').innerHTML = contents[8];
  document.getElementById('me-box10').innerHTML = contents[9];
  });
}
