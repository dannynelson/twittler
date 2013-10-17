
var visitor = prompt("Please enter your name:");
sessionStorage.visitor = visitor;
streams.users[visitor] = [];
sessionStorage.streams = streams.users[visitor];


$(document).ready(function(){
  // $variable is convention to ditinguish jquery objects stored in vars
  var $body = $('body');
  // this replaces the ENTIRE body with nothing
  // $body.html(''); 

  var $stream = $('.stream');
  $stream.html('');

  $('.compose').on('click', function() {
    var message = prompt("What's happening?");
    writeTweet(message);
  })

  //display all
  var displayAllTweets = function() {
    $stream.empty();
    var index = streams.home.length - 1;
    while (index >= 0) {
      var tweet = streams.home[index];
      var $tweet = $('<div class="stream"></div>');
      $tweet.html(
        '<div class="list">' + 
          //link to user page, with username variable
          "<a href=\"user.html?username=" + tweet.user + "\">" +
            tweet.user +
          "</a>" +
          "<div>" + tweet.message + "</div>" +
          "<div>" + tweet.created_at + "</div>" +
        "</div>"
      );
      $tweet.appendTo($stream);
      index -= 1;
    }
    setInterval(displayAllTweets, 1000); //doesn't allow me to click on it while this is running
  }

  displayAllTweets();

  //update every second


});