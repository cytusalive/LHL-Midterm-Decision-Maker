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
    console.log('req.params.id', req.query);


    db.query(`
      INSERT INTO users (name) VALUES ('${name}')
      RETURNING id;
      `)
      .then((result) => {
        console.log('req.params.id', req.params.id);
        const userid = result.rows[0]['id']
        pollOptions.forEach(option => {
          let rank = Number(option[1]);
          const pollOption_id = Number(option[0]);
          db.query(`
          INSERT INTO poll_votes (user_id, pollOptions_id, rank) VALUES (${userid}, ${pollOption_id}, ${rank})
          `)
        });
      })
  })

  return router;
};
