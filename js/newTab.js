document.addEventListener('DOMContentLoaded', function() {
  console.log('content loaded');
  document.getElementById('world-news').addEventListener('click', scrapeWorld);
});

function handlerTest() {
  console.log('button clicked');
}

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
