
if (!sessionStorage.visitor) {
  var visitor = prompt("Please enter your name:");
  sessionStorage.visitor = visitor;
} else {
  var visitor = sessionStorage.visitor;
}

streams.users[visitor] = [];

$(document).ready(function(){
  // $variable is convention to ditinguish jquery objects stored in vars
  
  var $stream = $('.stream');
  var hashtags = [];
  $stream.html('');
  $('.miniatureProfile').html(users.profilePic)
  $('.username').text(visitor);


  var searchForHashtags = function(message) {
    words = message.split(' ');
    words = _(words).map(function(word) {
      if (word.charAt(0) === "#") {
        if (!_(hashtags).contains(word)) hashtags.push(word);
        return '<a href="#">' + word + '</a>';
      } else {
        return word;
      }
    })
    return words.join(' ');
  }

  $('.compose').on('click', function() {
    var message = prompt("What's happening?");
    writeTweet(message);
  })

  var displayAllHashtags = function() {
    var hashtagsHTML = '<div><strong>Trends</div></strong>';
    _(hashtags).each(function(hashtag) {
      hashtagsHTML += '<div><a href="#">' + hashtag + '</a></div>';
    })
    $('.hashtags').empty().html(hashtagsHTML);
    setInterval(displayAllHashtags, 5000);
  }

  //display tweet stream
  var displayAllTweets = function() {
    $stream.empty();
    var index = streams.home.length - 1;
    while (index >= 0) {
      var tweet = streams.home[index];
      var $tweet = $('<div class="stream"></div>');
      $tweet.html(
        '<div class="list">' + 
          //link to user page, with username variable
          
          '<div class="smallProfile">' + users.profilePic + '</div>' +
          '<div class="tweet">' +
            '<a href="user.html?username="' + tweet.user + '"><strong>' +
              tweet.user +
            "</strong></a>" +
            "<div>" + searchForHashtags(tweet.message) + "</div>" +
            '<div class="timestamp">' + tweet.created_at + '</div>' +
          '</div>' +

        "</div>"
      );
      $tweet.appendTo($stream);
      index -= 1;
    }
    setInterval(displayAllTweets, 3000); //doesn't allow me to click on it while this is running
  }

  displayAllTweets();
  displayAllHashtags();

  //parse tweet for hashtags
  //TODO: set hashtag link


});