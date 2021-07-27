const generateRandomString = () => {
  return Math.random().toString(36).substring(2, 8);
};

/*
insert functions need to be passed in to routers for example

module.exports = (db) => {
  router.post("/", (req, res) => {
    insertPoll(db, req, res);
  });
  return router;
};

*/

// insertUser argument req needs a key: value(string) pair of name: Alice
// code not complete need to referece user_id in poll with user.id in users
const insertUser = (db, req, res) => {
  db.query(`
  INSERT INTO users (name)
  VALUES ('${req.body.name}')
  `)
    .then(() => {
      res.end()
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message })
    })
};

// insertPoll argument req needs a key: value(string) pair of email: example@example.com
// code not complete need to reference user_id in poll to user.id in users
const insertPoll = (db, req, res) => {
  const newLink = generateRandomString()
  return db.query(`
      INSERT INTO poll (admin_link, submit_link, owner_email, poll_title)
      VALUES ('http://localhost:8080/administrative/${newLink}', 'http://localhost:8080/submission/${newLink}', '${req.body['owner_email']}', '${req.body['poll_title']}');
      `)
      .then(() => {
        return db.query(`SELECT id FROM poll WHERE admin_link LIKE '%${newLink}%'`).then(result => result.rows);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      })
}

// insertPollOptions req needs a key: value(string) pair of title: Titanic and desc: Sank
// code not complete need to reference poll_id in pollOptions with poll.id in polls
const insertPollOptions = (db, options, res) => {
  for (const option of options) {
    db.query(`
      INSERT INTO poll_options (optionTitle, optionDesc)
      VALUES ('${option}', NULL)
    `)
    .then(() => {
      res.end();
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    })
  }

}

// insertPollVotes req needs a key: value(int) pair of rank: 10
// code not complete need to reference user.id in users, poll_options.id in polls with user_id and pollOptions_id
const insertPollVotes = (db, req, res) => {
  db.query(`
  INSERT INTO poll_votes (rank)
  VALUES ('${req.body.rank}')
  `)
  .then(() => {
    res.end();
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  })
};

module.exports = { generateRandomString, insertUser, insertPoll, insertPollOptions, insertPollVotes }
