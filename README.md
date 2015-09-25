# ArtisTracker  

###What  
A website that returns the latest music and pictures which have been uploaded to instagram and soundcloud. The website uses APIS from the two services to aggregate up-to-date information on a fan's favourite music artist.  


###Why  

We want the user to be able to get lots of new up-to-date content about their favourite band.  

###How  

To run the code go to https://github.com/fcscripters/moodNews  

The two IPAs being used are Sound Cloud and Instagram. HTML requests are used to retrieve data from these websites.  
###Usage
we have used Github Pages to host our single page website online, where all of the information is loaded client side.  

To launch the site go to:

http://fcscripters.github.io/moodNews/test.html

###Test  

Test are run using the Qunit platform. Tests for the code are written in the index.html document.  

###wireframe  
Here is what we expect the layout of the website to look like
![](https://files.gitter.im/sohilpandya/D2Jn/mockup.png)  

###Soundcloud API

We authenticated our access to the Soundcloud API using the SC.Initialize property. This procedure requires registering at this address:   

http://soundcloud.com/you/apps

This allowed us to gain access to the SC object in our files. We then passed in queries to the object based on the q: parameter. The queries would then allow us to access tracks based on the artist in questions.

The tracks were then made available as Soundmanager objects. These could then be played by attaching sound.play and sound.stop functions to the html buttons using event listeners.

Two Qunit tests used to examine our use of the Souncloud API: the first, tested that a track object is printed to the html page, the second ensured that the button responds to a click.

###Instagram API


Contributors: Sohil, Tormod, Conor, Gethin.
