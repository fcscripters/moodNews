function displayData(response) {
  var arrphotos = [];
  var arrphotoswhole = [];

  for (var s = 0; s < 20; s++) {
    arrphotoswhole.push(response['data'][s]);
  }

  arrphotoswhole.sort(function(a,b){
    return b['likes']['count'] - a['likes']['count'];
  });

  for (var i = 0; i < 6; i++) {
    arrphotos.push(arrphotoswhole[i]['images']['standard_resolution']['url']);

  }

  // document.getElementById("pic").setAttribute("src", imgArray[0]);
  for (var j = 0; j < 6; j++) {
    var oImg = document.createElement("img");
    oImg.setAttribute('src', arrphotos[j]);
    oImg.setAttribute('class', 'instaphotos');
    oImg.setAttribute('configurable', true);

    oImg.setAttribute('alt', 'na');
    // document.body.appendChild(oImg);
    document.getElementById('insta').appendChild(oImg);
    // document.getElementById('instagramphotos').innerHTML = '<ol><li>'oImg'</li></ol>';

    // document.getElementById('instagramphotos').appendChild(oImg);

  }
}
var clicked = false;



function clickfunc(){
  var str = document.getElementById('result').value;
  var clientS = str.replace(/\s+/g, '');

  clicked = true;

  // create script element
  if (clientS === ''){
    clientS = 'foifighters';
  }
  var script = document.createElement('script');
  // assing src with callback name
  script.src = "https://api.instagram.com/v1/tags/" + clientS + "/media/recent?access_token=2208596365.1fb234f.2d3cc38a6e354a958800809ced644f50&count=33&callback=displayData";
  // insert script to document and load content
  document.body.appendChild(script);

  //this removes img elements???
  var element = document.getElementsByClassName("instaphotos");
  for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
  }
  console.log(clientS);
  return clientS;
}
//console.log(clickfunc());
document.getElementById("search").addEventListener("click", clickfunc);



///////////////////////////////////////////////////////////////////

document.getElementById("search").addEventListener("click", soundfunc);

function soundfunc(){
  SC.initialize({

    /* client_id: '38fed2acd8bf8e0001c5a3dddad41c76',*/
    client_id: '5c5a64cfdf37c482bb757df270d33c53',
    redirect_uri: 'http://fcscripters.github.io/moodNews/callback.html'

  });

  var query = document.getElementById("result").value;
  // var query = "foofighters";
  console.log (query);
  var trackID;

  SC.get("/tracks", {
    //title : query,
    q: query,
    limit: 7
  }, function(tracks) {

    console.log(tracks[0].title);
    console.log(tracks);

    trackID = tracks[0].id;
    console.log (trackID);


    document.getElementById("track").innerHTML = tracks[0].title;


  SC.stream("/tracks/"+ trackID, function(sound) {
      document.getElementById('play').addEventListener("click", function(){
          console.log(trackID);
          //document.getElementById('play').click() = function(e) {
          //e.preventDefault();
          sound.play();
      });
      document.getElementById('stop').addEventListener("click", function(){
          console.log(trackID);
          //document.getElementById('play').click() = function(e) {
          //e.preventDefault();
          sound.stop();
      });

    });

  });


}
