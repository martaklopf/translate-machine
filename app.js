var languages = ["af", "ga", "sq", "it", "ar", "ja", "az", "kn", "eu", "ko", "bn", "la", "be", "lv", "bg", "lt", "ca", "mk", "zh-CN", "ms", "zh-TW", "mt", "hr", "no", "cs", "fa", "da", "pl", "nl", "pt", "ro", "eo", "ru", "et", "sr", "tl", "sk", "fi", "sl", "fr", "es", "gl", "sw", "ka", "sv", "de", "ta", "el", "te", "gu", "th", "ht", "tr", "iw", "uk", "hi", "ur", "hu", "vi", "is", "cy", "id", "yi"];



setInterval(function(){
  randlan = languages[Math.floor(languages.length * Math.random())]
  // console.log(randlan);

}, 1 * 1000)



var express = require('express')
var app = express();
var request = require('request');


var server = require('http').Server( app )
var https = require('https');

var io = require('socket.io')(server)

var translatedWord;

var port = process.env.PORT || 8000

server.listen(port, function(){
  console.log("server started on 3000");
})

app.use( express.static('public') )

var storedText = [];


io.on('connection', function(socket){
console.log(socket.id)




  socket.on('addWords', function(data){ //look for any massages with addWords
    console.log('addWords' + data.content); //log out the data


    var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161010T221631Z.cb30aad71732ef99.335507e44d898a9e7adb84299fb50fe1e7d2481d&text='+ data.content +'&lang=en-'+ randlan +''

       request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) { //if there is no errors or it does not exist
          var parsedBody = JSON.parse(body)

          translatedWord = parsedBody.text[0]
          io.emit('projectionWords', translatedWord); //send out message to the projection to add the projection to the screen

        }
    })



    storedText.push(data)
  })
})
