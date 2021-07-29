const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // renders submission.ejs in submissions/id dynamically
  router.get("/:id", (req, res) => {
    db.query(`SELECT id, poll_title FROM poll WHERE submit_link LIKE '%${req.params.id}%'`)
    .then (result => {
      const poll_title = result.rows[0].poll_title;
      db.query(`SELECT * FROM poll_options WHERE poll_id = ${result.rows[0].id}`)
      .then(result => {
        const templateVars = {options: result.rows, poll_title: poll_title};
        console.log(templateVars.options)
        res.render('submission', templateVars);
      });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    })
  });

  router.post("/", (req, res) => {
    const pollOptions = req.body.optionRanks;
    const username = req.body.$username;
    const name = username.replace('username=','');

    db.query(`
      INSERT INTO users (name) VALUES ('${name}');
      `)
      .then((result) => {
        for (pollOption in pollOptions) {
          let rank = pollOptions[pollOption];
          db.query(`
          INSERT INTO poll_votes (user_id, pollOptions_id, rank) VALUES (LAST_INSERT_ID(), ${pollOption}, ${rank})
          `)
        }
      })


  })

  return router;
};

// DROP TABLE IF EXISTS users CASCADE;
// CREATE TABLE users (
//   id SERIAL PRIMARY KEY NOT NULL,
//   name VARCHAR(255) NOT NULL
// );

// DROP TABLE IF EXISTS poll_votes CASCADE;
// CREATE TABLE poll_votes (
//   id SERIAL PRIMARY KEY NOT NULL,
//   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
//   pollOptions_id INTEGER REFERENCES poll_options(id) ON DELETE CASCADE,
//   rank SMALLINT
// );
