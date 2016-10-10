//include express package we just downloaded and make it into a variable

// var languages = ["af", "ga", "sq", "it", "ar", "ja", "az", "kn", "eu", "ko", "bn", "la", "be", "lv", "bg", "lt", "ca", "mk", "zh-CN", "ms", "zh-TW", "mt", "hr", "no", "cs", "fa", "da", "pl", "nl", "pt", "en", "ro", "eo", "ru", "et", "sr", "tl", "sk", "fi", "sl", "fr", "es", "gl", "sw", "ka", "sv", "de", "ta", "el", "te", "gu", "th", "ht", "tr", "iw", "uk", "hi", "ur", "hu", "vi", "is", "cy", "id", "yi"];



//!!!!!!!!!!!!!!!!!!!!!!!!!
// randContent = localStorage.getItem("content");
var trans = require('translate-google-free');



var express = require('express') //hey we want to use express, our web host/routing system
var app = express(); //starts express

//turn on web server that node js has built in
var server = require('http').Server( app ) // start a server instance on a port


//require socket
var io = require('socket.io')(server) //use socket.io for real time connections aka. wesockets


//start server so we can listen on certain port
server.listen(3000, function(){
  console.log("server started on 3000"); //do callback when started successfully
})

app.use( express.static('public') ) //server out everything that is in the public folder

var storedText = [];

//install web sockets, for instant communication, needs cdn on client

//set up intermediary server message handler (if you get add rectangle message, we get the message)

io.on('connection', function(socket){ //if socket.io sees new connection.
console.log(socket.id) //prints out the socket that connected (ie all users + the projection)

  // io.emit('storedTextMessage', storedText);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // trans(randContent, 'en', 'de', function(error, ret) {
  //   if (error) throw error;
  //   console.log(ret);
  // });

  socket.on('addWords', function(data){ //look for any massages with addRectangle
    console.log('addWords' + data); //log out the data in this case you get true but you could use this to get any arbitrary data you want, think position, color,..
    io.emit('projectionWords', data); //send out message to the projection to add the projection to the screen



    storedText.push(data)
  })
})

//add rectangle and it will add rectangle randomly on projection
