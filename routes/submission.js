const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // Delete this later
  router.get("/", (req, res) => {
    const templateVars = {}
    res.render('submission', templateVars);
  });

  // renders submission.ejs in submissions/id dynamically
  router.get("/:id", (req, res) => {
    const templateVars = {}
    res.render('submission', templateVars);
    console.log(req.params.id);
  });

  return router;
};
