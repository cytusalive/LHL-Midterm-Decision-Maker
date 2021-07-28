$(document).ready(function() {
  // renders administrative.ejs in administrative/id dynamically
    return db.query(`
    SELECT poll_options.optionTitle, sum(rank)
    FROM poll_votes
    JOIN poll_options ON poll_options.id = pollOptions_id
    JOIN poll ON poll.id = poll_id
    WHERE admin_link LIKE '%${req.params.id}'
    GROUP BY optionTitle
    ORDER BY sum DESC;
    `)
    .then((result) => {
      const templateVars = { ranks: result.rows }
      res.render('administrative', templateVars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    })
  });


  // $(document).ready(() => {
  //   const fetchPosts = () => {
  //     $.getJSON('/administrative/:id', (posts) => {
  //       renderTweets(posts);
  //     });
  //   };

  //   fetchPosts();


  //   const renderTweets = function(tweets) { // empties out all tweets and remakes them
  //     $('#tweet-container').empty();
  //     for (const tweet of tweets) {
  //       const $tweet = createTweet(tweet);
  //       $('#tweet-container').prepend($tweet);
  //     }
  //   };

  //   const createTweet = (tweet) => {
  //     const time = timeago.format(tweet.created_at);
  //     const $avatars = $(`<img src="${tweet.user.avatars}">`);
  //     const $name = $("<h6>").text(`${tweet.user.name}`);
  //     const $handle = $(`<h6 style="margin-left: auto; padding: 2px">`).text(`${tweet.user.handle}`);
  //     const $header = $('<header>').addClass('tweet-header');
  //     $header.append($avatars, $name, $handle);

  //     const $body = $(`<body>`).addClass('tweet-body').text(`${tweet.content.text}`);

  //     const $time = $(`<h6>`).text(`${time}`);
  //     const $icon = $(`<h6><i class="fas fa-flag"></i><i class="fas fa-retweet" style="margin: 0.2em"></i><i class="fas fa-heart">`).addClass('icons');
  //     const $footer = $('<footer>').addClass('tweet-footer');
  //     $footer.append($time, $icon);

  //     const $article = $('<article>').addClass('tweet-container');
  //     $article.append($header, $body, $footer);

  //     return $article;
  //   };
