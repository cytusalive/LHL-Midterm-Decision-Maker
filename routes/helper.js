const generateRandomString = () => {
  return Math.random().toString(36).substring(2, 8);
};

// insertUser argument req needs a key: value pair of name: Alice
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

// insertPoll argument req needs a key: value pair of email: example@example.com
// code not complete need to reference user_id in poll to user.id in users
const insertPoll = (db, req, res) => {
  db.query(`
    INSERT INTO poll (admin_link, submit_link, owner_email)
    VALUES ('http://localhost:8080/administrative/${generateRandomString()}', 'http://localhost:8080/submission/${generateRandomString()}', '${req.body.email}')
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

// insertPollOptions req needs a key: value pair of title: Titanic and desc: Sank
// code not complete need to reference poll_id in pollOptions with poll.id in polls
const insertPollOptions = (db, req, res) => {
  db.query(`
  INSERT INTO poll_options (optionTitle, optionDesc)
  VALUES ('${req.body.title}', '${req.body.desc}')
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
