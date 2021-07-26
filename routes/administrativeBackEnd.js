const { query } = require('express');
const express = require('express');
const router  = express.Router();

module.exports = (db) => {


  router.post("/", (req, res) => {


    db.query(`
    INSERT INTO users (name) VALUES ('${req.body}');
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

  return router;
};
