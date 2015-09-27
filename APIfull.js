//
// Instagram API
//

function displayData(response) {
    var arrphotos = [];
    var arrphotoswhole = [];

    for (var s = 0; s < 20; s++) {
        arrphotoswhole.push(response['data'][s]);
    }

    arrphotoswhole.sort(function(a, b) {
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



function clickfunc() {
    var str = document.getElementById('result').value;
    var clientS = str.replace(/\s+/g, '');

    clicked = true;

    // create script element
    if (clientS === '') {
        clientS = 'foifighters';
    }
    var script = document.createElement('script');
    // assing src with callback name
    script.src = "https://api.instagram.com/v1/tags/" + clientS + "/media/recent?access_token=2208596365.1fb234f.2d3cc38a6e354a958800809ced644f50&count=33&callback=displayData";
    // insert script to document and load content
    document.body.appendChild(script);

    //this removes img elements
    var element = document.getElementsByClassName("instaphotos");
    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }
    console.log(clientS);
    return clientS;
}
//console.log(clickfunc());
document.getElementById("search").addEventListener("click", clickfunc);




//
// Soundcloud API
//
SC.initialize({

    client_id: '5c5a64cfdf37c482bb757df270d33c53',
    redirect_uri: 'http://fcscripters.github.io/moodNews/callback.html'

});



document.getElementById("search").addEventListener("click", soundfunc);

function soundfunc() {
    var query = document.getElementById("result").value;
    var tracks = 0;

    if (query == null) {
        query = 'beatles'
    }

    SC.get("/tracks", {
            q: query,
            limit: 3
        },
        function getTracksObjfromSC(tracks) {
            console.log(tracks);



            function addTitleUsername() {
                for (i = 0; i < tracks.length; i++) {
                    var titleAndUsername = document.getElementById('title')
                    title.innerHTML += '<li id="' + tracks[i].id + '" class="tracks">' + tracks[i].title + '</li><li>' + tracks[i].user.username + '</li>';
                }

            }


            function playPauseStop(trackID) {
                SC.stream('/tracks/' + trackID, function(sound) {

                    document.getElementById('play').addEventListener("click", function() {
                        sound.play();
                    });
                    document.getElementById('stop').addEventListener("click", function() {
                        sound.stop();
                    })
                    document.getElementById('pause').addEventListener("click", function() {
                        sound.pause();
                    });
                });
            }
           
           function onlySelectOne(elements){
                 for(i=0; i<elements.length; i++){
                  console.log(elements[i])
                    if ( elements[i].className =="selected"){
                         elements[i].className ="tracks";
                    }
                 }
            }


           function chooseSongbyClicking() {
                var songs = document.getElementsByClassName("tracks");
                for (var i = 0; i < songs.length; i++) {
                    songs[i].onclick = function(e) {
                         document.getElementById(this.id).className="selected";
                         playPauseStop(this.id)
                    }
                };
            }


            addTitleUsername();
            chooseSongbyClicking();
           





        });




}




/*//Adding track name and user URL to soundcloud div
    trackID = tracks[0].id;
    //console.log (trackID);
//these have been created using soundclouds API user guide lines
    document.getElementById("track").innerHTML = "<a href=" +tracks[0].permalink_url+ ">" +tracks[0].title+"</a>";

    document.getElementById("trackUser").innerHTML = tracks[0].user.username;

  SC.stream("/tracks/"+ trackID, function(sound) {
    
    
    });

});


}
*/ //this function hides/ shows the avaliable tests
function hide() {

    var el = document.getElementById('hidetest');
    if (el.style.display != 'none') {
        el.style.display = 'none';
    } else {
        el.style.display = 'block';
    }

}

// document.getElementById('divbtn').addEventListener('click',function(e){
//     document.getElementById('hidetest').style.display = 'block';
// });
