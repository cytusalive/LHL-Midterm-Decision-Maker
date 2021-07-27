const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // renders submission.ejs in submissions/id dynamically
  router.get("/:id", (req, res) => {
    db.query(`SELECT id FROM poll WHERE submit_link LIKE '%${req.params.id}%'`)
    .then (result => {
      db.query(`SELECT * FROM poll_options WHERE poll_id = ${result.rows[0].id}`)
      .then(result => {
        const templateVars = {options: result.rows};
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

  return router;
};
