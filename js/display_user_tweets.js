$(document).ready(function(){
    
  var getUrlVars = function() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
  }

  var username = getUrlVars()["username"];
  $('#tweet-title').html("<b>" + username + " Tweets </b>");
  var $stream = $('.stream');

  //how to get username when clicked?
  var displayUserTweets =  function() {
    $stream.empty();
    var index = streams.users[username].length - 1;
    while(index >= 0){
      var tweet = streams.users[username][index];
      var $tweet = $('<div class="tweet"></div>');
      $tweet.html(
        "<div>" + 
          //link to user page, with username variable
          "<a href=\"user.html?username=" + tweet.user + "\">" +
            tweet.user +
          "</a>" +
        "</div>" +
        "<div>" + tweet.message + "</div>" +
        "<div>" + tweet.created_at + "</div>" +
        "<br>"
      );
      $tweet.appendTo($stream);
      index -= 1;
    }

    setTimeout(function() {displayUserTweets(username);}, 1000);
  }

  displayUserTweets();


});