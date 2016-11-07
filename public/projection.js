//connect to server
var socket = io.connect() //set up place for us to connect to and try to connect

//tell us we are connected
socket.on('connect', function(data){ //when we are connected do something
  console.log("connected to server" + socket.id); //log out our socket id number
})



socket.on('projectionWords', function(data){
  console.log(data);

$("#newtext").append("<div>" + data + "</div>");
// $("#newtext").scrollTop($('#messages').height())
var $cont = $('#newtext');
$cont[0].scrollTop = $cont[0].scrollHeight;

$('.inp').keyup(function(e) {
    if (e.keyCode == 13) {
        $cont.append('<p>' + $(this).val() + '</p>');
        $cont[0].scrollTop = $cont[0].scrollHeight;
        $(this).val('');
    }
})
.focus();

})


// $("#newtext").animate({ scrollTop: $(this).height() }, "slow");
  // return false;
// var objDiv = document.getElementById("#newtext");
// objDiv.scrollTop = objDiv.scrollHeight;


// window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
// $('#newtext').scrollTop($('#newtext')[0].scrollHeight);
// this.scrollIntoView(false);




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
