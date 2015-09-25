

  test('Has the Search button been clicked. You have to physically click the search button within the first 2 seconds to make this test pass', function(assert) {
    var done = assert.async();
    setTimeout (function(){
      var submitButton = document.getElementById('search');
      submitButton.addEventListener("click", function(){
        clicked = true;
      });
      assert.equal( clicked, true, 'Search Button has been clicked' );
      done();
    },2000);
  });

  test('Have Instagram results been returned when search is clicked', function(assert) {
    var done = assert.async();
    var check = false;
    setTimeout (function(){

    if(document.getElementsByTagName('img')){
        check = true;
      }
      assert.equal( check, true, 'Instagram Images are showing' );
      done();
    },1000);
  });

  test("This is an auto search test, user will not need to click search button for this test to pass. It will automatically return Instagram results with foifighters.", function(assert) {
    var done = assert.async();
    setTimeout(function(){
      // clickfunc();
      // console.log(clickfunc());
      assert.equal(clickfunc(),'foifighters','Instagram search returns six photos with the entered search result');
      done();
    },1000);
  });

  test('Have Soundcloud results been returned when search is clicked', function(assert) {
  	var done = assert.async();
  	var check = false;
  	setTimeout (function(){
  	console.log (document.getElementById("track").innerHTML);
  	if(document.getElementById("track").innerHTML){
  			check = true;
  		}
  			assert.equal( check, true, 'Soundcloud Track is available for play' );
  			done();
  		},1000);
  		});

  	test('Has the Soundcloud Play button been clicked?, User will need to manually click the play button for this test to pass. ', function(assert) {
  			var clicked = false;
  			var done = assert.async();

        var playTest = document.getElementById('play');
        playTest.addEventListener("click", function(){
          clicked = true;
       });
  	    setTimeout (function(){
  	      assert.equal( clicked, true, 'Play Button has been clicked' );
  	      done();
  	    },5000);
  	});
