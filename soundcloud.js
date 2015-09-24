<script src="http://connect.soundcloud.com/sdk-2.0.0.js">

</script>


<script>
	// initialize client with app credentials */
	SC.initialize({

		/* client_id: '38fed2acd8bf8e0001c5a3dddad41c76',*/
		client_id: '5c5a64cfdf37c482bb757df270d33c53',
		redirect_uri: 'http://fcscripters.github.io/moodNews/callback.html'

	})

	// var query = document.getElementById("result").value;
	var query = "oasis";
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
