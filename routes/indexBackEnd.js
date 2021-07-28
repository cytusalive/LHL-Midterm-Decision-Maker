const express = require('express');
const router  = express.Router();
require('dotenv').config();
const { generateRandomString, insertPoll, insertPollOptions } = require('./helpers.js');
const mailgun = require("mailgun-js");
const ENV = process.env.ENV || "development";
const DOMAIN = process.env.DOMAIN
const MAILGUN = process.env.MAILGUN
const mg = mailgun({apiKey: `${MAILGUN}`, domain: `${DOMAIN}`});

module.exports = (db) => {

  router.post("/", (req, res) => {
    const newLink = generateRandomString()
    db.query(`
      INSERT INTO poll (admin_link, submit_link, owner_email, poll_title)
      VALUES ('http://localhost:8080/administrative/${newLink}', 'http://localhost:8080/submission/${newLink}', '${req.body['owner_email']}', '${req.body['poll_title']}');
      `)
    .then(() => {
      const poll_options = req.body['poll_options'];
      const poll_option_descs = req.body['option_desc'];
      for (let i=0; i<poll_options.length; i++) {
        db.query(`
          INSERT INTO poll_options (poll_id, optionTitle, optionDesc)
          SELECT poll.id, '${poll_options[i]}', '${poll_option_descs[i]}'
          FROM poll
          WHERE admin_link LIKE '%${newLink}%'
        `)
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    })
    .then(() => {
      const data = {
        from: `Mailgun Sandbox <postmaster@${DOMAIN}>`,
        to: `${req.body['owner_email']}`,
        subject: "Thanks for using Decision Maker!",
        text: `
        Your administrative link which checks what your friends chose is http://localhost:8080/administrative/${newLink}
        and your submission link to show your friends is http://localhost:8080/submission/${newLink}`
      };
      mg.messages().send(data, function (error, body) {
      });
    })
    setTimeout(() => {res.redirect(`/submission/${newLink}`);}, 100);

    // VIEW DATABASE
    setTimeout(() => {
      db.query("SELECT * FROM poll")
      .then(result => console.log(result.rows));
      db.query("SELECT * FROM poll_options")
      .then(result => console.log(result.rows));
    }, 2000)
  })
  return router;
};
