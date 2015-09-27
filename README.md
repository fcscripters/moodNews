
# ArtisTracker  

##For the best viewing experience use a mobile device.

###What  
A website that returns the latest music and pictures which have been uploaded to instagram and soundcloud. The website uses APIS from the two services to aggregate up-to-date information on a fan's favourite music artist.  


###Why  

We want the user to be able to get lots of new up-to-date content about their favourite band.  

###How  

To see the repo go to https://github.com/fcscripters/moodNews  

The two APIs being used are Sound Cloud and Instagram. HTML requests are used to retrieve data from these websites.  
###Usage
we have used Github Pages to host our single page website online, where all of the information is loaded client side.  
To run the webpage on your browser go to;

http://fcscripters.github.io/moodNews/  

There will be an option to view test from the website.

###Test  

Test are run using the Qunit platform. Tests for the code are written in the test.js document.  

###wireframe  

Here is what we expect the layout of the website to look like


![](https://files.gitter.im/sohilpandya/D2Jn/mockup.png)  

###Soundcloud API

We authenticated our access to the Soundcloud API using the SC.Initialize property. To authenticate we ahd to create a callback.html file. This procedure requires registering at this address:   

http://soundcloud.com/you/apps

This allowed us to gain access to the SC object in our files. We then passed in queries to the object based on the q: parameter. The queries would then allow us to access tracks based on the artist being searched for.

The tracks were then made available as Soundmanager objects. These could then be played by attaching sound.play and sound.stop functions to the html buttons using event listeners.

Two Qunit tests used to examine our use of the Souncloud API: the first, tested that a track object is printed to the html page, the second ensured that the button responds to a click.

###Instagram API

to get our client key we applied using the instagram API website

Once the search button is clicked the clickfunc function is called which creats a 'script' element and changes the src attribute. The script element will then contain the input from the user, The script element is then appended to the boody of the index.html file. 33 Pictures related to the users search are then returned in the form of an object called response. All of the current img elements displayed on the page are then removed.

The displayData function is then called, this function has 'response' as a parameter. Here the 33 data properties within response are sorted into an array (arrphotos) acording to the value of the 'likes' property. 6 'img' elements are created, the src attribute is set as the img url from the first 6 objects in the photo array. 

#####Contributors: 

Sohil, Tormod, Conor, Gethin.
