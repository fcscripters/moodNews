

  test('Has the button been clicked', function(assert) {
    var done = assert.async();
    setTimeout (function(){
      var submitButton = document.getElementById('search');
      submitButton.addEventListener("click", function(){
        clicked = true;
      })
      assert.equal( clicked, true, 'Button has been clicked' );
      done();
    },2000);
  });

  test('Have result been returned when search is clicked', function(assert) {
    var done = assert.async();
    var check = false;
    setTimeout (function(){

    if(document.getElementsByTagName('img')){
        check = true;
      }
      assert.equal( check, true, 'Images are showing' );
      done();
    },1000);
  });

  test("when search is clicked return response", function(assert) {
    var done = assert.async();
    setTimeout(function(){
      // clickfunc();
      // console.log(clickfunc());
      assert.equal(clickfunc(),'foifighters');
      done();
    },1000)
  });

  test('Have result been returned when search is clicked', function(assert) {
  	var done = assert.async();
  	var check = false;
  	setTimeout (function(){
  	console.log (document.getElementById("track").innerHTML);
  	if(document.getElementById("track").innerHTML){
  			check = true;
  		}
  			assert.equal( check, true, 'Tracks are available' );
  			done();
  		},1000);
  		});

  	test('Has the button been clicked?', function(assert) {
  			var clicked = false;
  			var done = assert.async();

        var playTest = document.getElementById('play');
        playTest.addEventListener("click", function(){
          clicked = true;
        });
  	    setTimeout (function(){
  	      assert.equal( clicked, true, 'Button has been clicked' );
  	      done();
  	    },5000);
  	});
