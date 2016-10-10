//connect to server
var socket = io.connect('http://localhost:3000') //connect to the server

socket.on('connect', function(data){ //when connected do something
  console.log("connected to server" + socket.id); //log out our id
})


  var theContent;

  $('#send').on('click', function(){
    theContent = $('#content2').val();
    console.log(theContent);

    var dataToSend = {
      'content': theContent
    }

    socket.emit('addWords', dataToSend)



  });
