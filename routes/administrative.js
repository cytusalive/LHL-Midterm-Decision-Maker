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
    const templateVars = {}
    res.render('administrative', templateVars);
    console.log(req.params.id);
  });




  router.get("/", (req, res) => {
    db.query(`
    INSERT INTO users (name) VALUES ('dong');
    `)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });



  return router;
};
