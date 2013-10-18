// $(document).ready(function(){  
  
  var hashtags = [];
  var visitor; 

  //-- FUNCTIONS --

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
  var displayAllHashtags = function() {
    var hashtagsHTML = '<div><strong>Trends</div></strong>';
    _(hashtags).each(function(hashtag) {
      hashtagsHTML += '<div><a href="#">' + hashtag + '</a></div>';
    })
    $('.hashtags').empty().html(hashtagsHTML);
    setTimeout(displayAllHashtags, 5000);
  }
  var displayAllTweets = function(tweetsArray) {
    var $stream = $('.stream');
    $stream.empty();
    var index = tweetsArray.length - 1; //last index
    var count = 0;
    while (count < 10 && index >= 0) {
      var tweet = tweetsArray[index];
      $stream.append(
        '<div class="list">' + 
          '<div class="smallProfile">' + users.profilePic + '</div>' +
          '<div class="tweet">' +
            //link to user page, with username variable
            '<a href="user.html?username=' + tweet.user + '""><strong>' +
              tweet.user +
            '</strong></a>' +
            '<div>' + searchForHashtags(tweet.message) + '</div>' +
            '<div class="timestamp">' + tweet.created_at + '</div>' +
          '</div>' +
        '</div>'
      );
      count++;
      index--;
    }
    setTimeout(function(){displayAllTweets(tweetsArray)}, 3000);
  }
  var getUrlVars = function() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
  }

  //define user variables
  if (!sessionStorage.visitor) {
    var visitor = prompt("Please enter your name:");
    sessionStorage.visitor = visitor;
  } else {
    var visitor = sessionStorage.visitor;
  }
  streams.users[visitor] = [];






// });