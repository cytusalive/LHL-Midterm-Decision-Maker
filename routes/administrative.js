const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const templateVars = {}
    res.render('administrative', templateVars);
  });

  router.get("/:id", (req, res) => {
    const templateVars = {}
    res.render('administrative', templateVars);
    console.log(req.params.id);
  });

  return router;
};
