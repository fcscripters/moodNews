function displayData(e) {
    for (var t = [], n = [], c = 0; 20 > c; c++) n.push(e.data[c]);
    n.sort(function(e, t) {
        return t.likes.count - e.likes.count
    });
    for (var a = 0; 6 > a; a++) t.push(n[a].images.standard_resolution.url);
    for (var o = 0; 6 > o; o++) {
        var d = document.createElement("img");
        d.setAttribute("src", t[o]), d.setAttribute("class", "instaphotos"), d.setAttribute("configurable", !0), d.setAttribute("alt", "na"), document.getElementById("insta").appendChild(d)
    }
}

function clickfunc() {
    var e = document.getElementById("result").value,
        t = e.replace(/\s+/g, "");
    clicked = !0, "" === t && (t = "foifighters");
    var n = document.createElement("script");
    n.src = "https://api.instagram.com/v1/tags/" + t + "/media/recent?access_token=2208596365.1fb234f.2d3cc38a6e354a958800809ced644f50&count=33&callback=displayData", document.body.appendChild(n);
    var c = document.getElementsByClassName("instaphotos");
    for (index = c.length - 1; index >= 0; index--) c[index].parentNode.removeChild(c[index]);
    return console.log(t), t
}

function soundfunc() {
    SC.initialize({
        client_id: "5c5a64cfdf37c482bb757df270d33c53",
        redirect_uri: "http://fcscripters.github.io/moodNews/callback.html"
    });
    var e, t = document.getElementById("result").value;
    SC.get("/tracks", {
        q: t
    }, function(t) {
        t.sort(function(e, t) {
            return e.created_at < t.created_at
        });
        for (var n = 0; n < t.length; n++) console.log(t[n].created_at);
        console.log(t), e = t[0].id, document.getElementById("track").innerHTML = "<a href=" + t[0].permalink_url + ">" + t[0].title + "</a>", document.getElementById("trackUser").innerHTML = t[0].user.username, SC.stream("/tracks/" + e, function(t) {
            document.getElementById("play").addEventListener("click", function() {
                console.log(e), t.play()
            }), document.getElementById("stop").addEventListener("click", function() {
                console.log(e), t.stop()
            }), document.getElementById("pause").addEventListener("click", function() {
                console.log(e), t.pause()
            })
        })
    })
}

function hide() {
    var e = document.getElementById("hidetest");
    "none" != e.style.display ? e.style.display = "none" : e.style.display = "block"
}
var clicked = !1;
document.getElementById("search").addEventListener("click", clickfunc), document.getElementById("search").addEventListener("click", soundfunc);
