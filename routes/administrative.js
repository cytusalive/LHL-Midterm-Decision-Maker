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
  return router;
};
