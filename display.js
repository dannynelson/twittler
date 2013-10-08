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
        "<div>" + 
          //link to user page, with username variable
          "<a href=\"/user.html$\"" + tweet.user + ">" +
            tweet.user +
          "</a>" +
        "</div>" +
        "<div>@" + tweet.user + ": " + tweet.message + "</div>" +
        "<div>" + tweet.created_at + "</div><br>"
      );
      $tweet.appendTo($stream);
      index -= 1;
    }

    // setTimeout(displayAllTweets, 1000); //doesn't allow me to click on it while this is running
  }

  displayAllTweets();

  //how to get username when clicked?
  var displayUserTweets =  function(username) {
    $stream.empty();
    var index = streams.users[username].length - 1;
    while(index >= 0){
      var tweet = streams.users[username][index];
      var $tweet = $('<div class="tweet"></div>');
      $tweet.html(
        "<div class=\"user-link\">" + tweet.user + "</div>" +
        "<div>@" + tweet.user + ": " + tweet.message + "</div>" +
        "<div>" + tweet.created_at + "</div><br>"
      );
      $tweet.appendTo($stream);
      index -= 1;
    }

    setTimeout(function() {displayUserTweets(username);}, 1000);


  }

  $('.user-link').click(function() {
    alert("Item was clicked");
    var username = $(this).text();
    // displayUserTweets(username);
    setInterval(displayUserTweets(username), 1000);
  })

  //update every second


});