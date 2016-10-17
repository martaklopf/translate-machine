//connect to server
var socket = io.connect('http://150.253.89.18:3000') //connect to the server

socket.on('connect', function(data){ //when connected do something
  console.log("connected to server" + socket.id); //log out our id
})

// setTimeout(function(){
//     location.reload(true);
// },10000); //delayTime should be written in milliseconds e.g. 1000 which equals 1 second


  var theContent;

  $('#send').on('click', function(){
    theContent = $('textarea').val();
    console.log(theContent);

    var dataToSend = {
      'content': theContent
    }

    socket.emit('addWords', dataToSend)



  });
