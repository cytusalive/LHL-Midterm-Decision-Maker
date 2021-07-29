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

  router.post("/submission/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
  })

  return router;
};
