const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // Delete this later
  router.get("/", (req, res) => {
    const templateVars = {}
    res.render('administrative', templateVars);
  });


    const displayUserRanks = () => {
    db.query(`
    SELECT users.name, poll_votes.rank, poll_options.optionTitle
    FROM users
    JOIN poll_votes ON user_id = users.id
    JOIN poll_options ON pollOptions_id = poll_options.id
    WHERE users.name = 'a'
    GROUP BY users.name, poll_votes.rank, poll_options.optionTitle;
    `)
    .then((result) => {
      return result.rows;
    })
  }





  // renders administrative.ejs in administrative/id dynamically
  router.get("/:id", (req, res) => {

    let users;
    let ranks;


    db.query(`
    SELECT poll_options.optionTitle, sum(rank)
    FROM poll_votes
    JOIN poll_options ON poll_options.id = pollOptions_id
    JOIN poll ON poll.id = poll_id
    WHERE admin_link LIKE '%${req.params.id}'
    GROUP BY optionTitle
    ORDER BY sum DESC;
    `)
    .then((result) => {
      ranks = result.rows;


      db.query(`
      SELECT users.name, poll_votes.rank, poll_options.optionTitle
      FROM users
      JOIN poll_votes ON user_id = users.id
      JOIN poll_options ON pollOptions_id = poll_options.id
      GROUP BY users.name, poll_votes.rank, poll_options.optionTitle;
      `)
      .then ((result) => {
        users = result.rows;
        console.log('ranks',ranks)
        console.log('user',users)


      const templateVars = { ranks: ranks, users: users }
      res.render('administrative', templateVars);
      })





    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    })


  });

  return router;
};


// DROP TABLE IF EXISTS users CASCADE;
// CREATE TABLE users (
//   id SERIAL PRIMARY KEY NOT NULL,
//   name VARCHAR(255) NOT NULL
// );

// DROP TABLE IF EXISTS poll CASCADE;
// CREATE TABLE poll (
//   id SERIAL PRIMARY KEY NOT NULL,
//   admin_link VARCHAR(255),
//   submit_link VARCHAR(255),
//   owner_email VARCHAR(255),
//   poll_title VARCHAR(255)
// );

// DROP TABLE IF EXISTS poll_options CASCADE;
// CREATE TABLE poll_options (
//   id SERIAL PRIMARY KEY NOT NULL,
//   poll_id INTEGER REFERENCES poll(id) ON DELETE CASCADE,
//   optionTitle VARCHAR(255) NOT NULL CHECK(optionTitle != ''),
//   optionDesc TEXT
// );

// DROP TABLE IF EXISTS poll_votes CASCADE;
// CREATE TABLE poll_votes (
//   id SERIAL PRIMARY KEY NOT NULL,
//   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
//   pollOptions_id INTEGER REFERENCES poll_options(id) ON DELETE CASCADE,
//   rank SMALLINT
// );
