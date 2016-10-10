//connect to server
var socket = io.connect('http://localhost:3000') //set up place for us to connect to and try to connect

//tell us we are connected
socket.on('connect', function(data){ //when we are connected do something
  console.log("connected to server" + socket.id); //log out our socket id number
})


socket.on('projectionWords', function(data){
  console.log(data);

$("#newtext").append("<div>" + data + "</div>");

})



// socket.on('translatedWords', function(result){
//   console.log(result);
//
// $("body").append("<div>" + result.content + "</div>");
//
// })


















// socket.on('storedTextMessage', function(spData){
//   console.log(spData);
//   spData.forEach(function(position){
//     // $('<div id="myTranslatedText"> editedContent</div>').append({
//     //   'position': 'absolute',
//     //   'top' : position.top,
//     //   'left' : position.left,
//     //
//     // }).appendTo('body')
//
//     // stuff = localStorage.getItem("content");
//     //   $("body").append("<div>" + stuff + "</div>");
//
//   })
// })
