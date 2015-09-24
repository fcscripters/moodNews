function displayData(response) {
  var arrphotos = [];

  console.log(response['data']['0']['images']['standard_resolution']['url']);
  for (var i = 0; i < 6; i++) {
    arrphotos.push(response['data'][i]['images']['standard_resolution']['url']);

  }

  console.log(arrphotos);

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
    clientS = 'pharrell';
  }
  var script = document.createElement('script');
  // assing src with callback name
  script.src = "https://api.instagram.com/v1/tags/" + clientS + "/media/recent?access_token=2208596365.1fb234f.2d3cc38a6e354a958800809ced644f50&callback=displayData";
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
