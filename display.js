$(document).ready(function(){
  // $variable is convention to ditinguish jquery objects stored in vars
  var $body = $('body');
  // this replaces the ENTIRE body with nothing
  // $body.html(''); 

  var $stream = $('.stream');
  $stream.html('');

  //display all
  var displayAllTweets = function() {
    $stream.empty();
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');
      $tweet.html(
        "<div>@" + tweet.user + ": " + tweet.message + "</div>" +
        "<div>" + tweet.created_at + "</div><br>"
      );
      $tweet.appendTo($stream);
      index -= 1;
    }
  }

  //update every second
  setInterval(displayAllTweets, 1000);

});