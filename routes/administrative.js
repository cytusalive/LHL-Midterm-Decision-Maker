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
    db.query(`
    SELECT poll_options.optionTitle, sum(rank)
    FROM poll_votes
    JOIN poll_options ON poll_options.id = pollOptions_id
    JOIN poll ON poll.id = poll_id
    WHERE admin_link LIKE $1
    GROUP BY optionTitle
    ORDER BY sum DESC;
    `, [`%${req.params.id}`])
    .then((result) => {
      const ranks = result.rows;
      // displays user and who they voted for
      db.query(`
      SELECT users.name, poll_votes.rank, poll_options.optionTitle
      FROM users
      JOIN poll_votes ON user_id = users.id
      JOIN poll_options ON pollOptions_id = poll_options.id
      JOIN poll ON poll_id = poll.id
      WHERE admin_link LIKE $1
      GROUP BY users.name, poll_votes.rank, poll_options.optionTitle
      ORDER BY users.name;
      `, [`%${req.params.id}`])
      .then ((result) => {
        const users = result.rows;
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
