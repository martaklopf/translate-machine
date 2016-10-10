//connect to server
var socket = io.connect('http://localhost:3000') //connect to the server

socket.on('connect', function(data){ //when connected do something
  console.log("connected to server" + socket.id); //log out our id
})

//send message to make rectangle

  // $('body').click(function(e){ //on click do something
  //
  //   console.log(e);
  //
  //   $('<div id="myText" contenteditable="true"> my first text thing</div>').append({
  //     'position':'absolute',
  //     'top':e.clientY,
  //     'left':e.clientX
  //
  //   }).appendTo('body')

  var theContent;

  $('#send').on('click', function(){
    // var editedContent   = theContent.html();
    // localStorage.setItem("content", editedContent);
    // // localStorage.newContent = editedContent;
    // console.log(editedContent)
    theContent = $('#content2').val();
    console.log(theContent);
    
    var dataToSend = {
      'content': theContent
    }

    socket.emit('addWords', dataToSend) //send out a message of addRectangle to the server, it will handle the details



  });




  // })
