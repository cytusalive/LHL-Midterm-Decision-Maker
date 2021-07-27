const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // Delete this later
  router.get("/", (req, res) => {
    const templateVars = {}
    res.render('administrative', templateVars);
  });

  // renders administrative.ejs in administrative/id dynamically
  router.get("/:id", (req, res) => {
    const templateVars = {}


    // poll_id = 1 needs to be dynamic use url
    db.query(`
    SELECT optionTitle
    FROM poll_options
    JOIN poll ON poll.id = poll_id
    WHERE admin_link LIKE '%${req.params.id}';
    `)
    .then((result) => {
      const pollNum = result.rows;
      console.log(pollNum);
      for (let i = 0; i < pollNum.length; i++) {
        console.log(i);
        console.log(pollNum[i]);


        // sum rank of each poll option
        db.query(`
        SELECT sum(rank)
        FROM poll_votes
        JOIN poll_options ON poll_options.id = pollOptions_id
        WHERE poll_options.id = ${i + 1};
        `)
        .then((result) => {
          console.log(pollNum[i]);
          console.log(result.rows);
        })

      }
    })






    res.render('administrative', templateVars);
    console.log(req.params.id);
  });
  return router;
};

// INSERT INTO users (id, name) VALUES (1, 'a');
// INSERT INTO users (id, name) VALUES (2, 'b');
// INSERT INTO users (id, name) VALUES (3, 'c');

// INSERT INTO poll (id, admin_link, submit_link, owner_email, poll_title) VALUES (1, 'http://localhost:8080/administrative/biwt0c', 'http://localhost:8080/submission/biwt0c', 'a@a.com', 'movies');

// INSERT INTO poll_options (id, poll_id, optionTitle, optionDesc) VALUES (1, 1, 'titanic', 'boat sinks everyone dies');
// INSERT INTO poll_options (id, poll_id, optionTitle, optionDesc) VALUES (2, 1, 'charlottes web', 'pig eats spider');
// INSERT INTO poll_options (id, poll_id, optionTitle, optionDesc) VALUES (3, 1, 'ratatouille', 'health safety violations');

// -- poll votes for titanic
// INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (1, 1, 1, 3);
// INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (2, 2, 1, 2);
// INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (3, 3, 1, 1);

// -- poll votes for charlottes web
// INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (4, 1, 2, 2);
// INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (5, 2, 2, 1);
// INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (6, 3, 2, 2);

// -- poll votes for ratatouille
// INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (7, 1, 3, 1);
// INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (8, 2, 3, 3);
// INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (9, 3, 3, 3);

    // db.query(`
    // SELECT COUNT(*)
    // FROM poll_options
    // JOIN poll ON poll.id = poll_id
    // WHERE admin_link LIKE '%${req.params.id}';
    // `)
    // .then((result) => {
    //   const pollNum = result.rows[0].count;
    //   console.log(pollNum);
    //   for (let i = 0; i < pollNum; i++) {
    //     console.log(i);


    //     // sum rank of each poll option
    //     db.query(`
    //     SELECT sum(rank)
    //     FROM poll_votes
    //     JOIN poll_options ON poll_options.id = pollOptions_id
    //     WHERE poll_options.id = ${i + 1};
    //     `)
    //     .then((result) => {
    //       console.log(result.rows);
    //     })

    //   }
    // })
