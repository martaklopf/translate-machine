//connect to server
var socket = io.connect() //connect to the server

socket.on('connect', function(data){ //when connected do something
  console.log("connected to server" + socket.id); //log out our id
})

  var theContent;

  $('#send').on('click', function(){
    theContent = $('textarea').val();
    console.log(theContent);

    var dataToSend = {
      'content': theContent
    }
    $('form')[0].reset();
    socket.emit('addWords', dataToSend)

  });
