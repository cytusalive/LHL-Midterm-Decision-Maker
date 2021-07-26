const generateRandomString = () => {
  return Math.random().toString(36).substring(2, 8);
};



// posting from index, will take in name, email,
router.post("/", (req, res) => {
  db.query(`
  INSERT INTO users (name)
  VALUES ('${req.body.name}')

  INSERT INTO poll (admin_link, submit_link, owner_email)
  VALUES (http://localhost:8080/administrative/${generateRandomString()}, http://localhost:8080/submission/${generateRandomString()}, ${req.body.email})

  `)
    .then(data => {
      console.log('data: ',data);
      console.log('req.body ',req.body);
      console.log('req.body.users ',req.body.users);
      return data;
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// DROP TABLE IF EXISTS poll CASCADE;
// CREATE TABLE poll (
//   id SERIAL PRIMARY KEY NOT NULL,
//   admin_link VARCHAR(255),
//   submit_link VARCHAR(255),
//   owner_email VARCHAR(255),
//   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
// );

// DROP TABLE IF EXISTS poll_options CASCADE;
// CREATE TABLE poll_options (
//   id SERIAL PRIMARY KEY NOT NULL,
//   poll_id INTEGER REFERENCES poll(id) ON DELETE CASCADE,
//   optionDesc TEXT
// );
