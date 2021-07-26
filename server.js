// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const submissionRoutes = require('./routes/submission')
const administrativeRoutes = require('./routes/administrative')
const administrativeBackEnd = require('./routes/administrativeBackEnd')
const submissionBackEnd = require('./routes/submissionBackEnd')
const indexRoutes = require('./routes/index');
const indexBackEnd = require('./routes/indexBackEnd');
const { generateRandomString, insertPoll, insertPollOptions } = require('./routes/helpers.js');




// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use('/submission', submissionRoutes(db));
app.use('/administrative', administrativeRoutes(db));
app.use('/administrative', administrativeBackEnd(db));
app.use('/submission', submissionBackEnd(db));
app.use('/', indexRoutes(db));
app.use('/', indexBackEnd(db));




// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

app.post("/", (req, res) => {
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
  res.redirect('/');
  
  // VIEW DATABASE
  setTimeout(() => {
    db.query("SELECT * FROM poll")
    .then(result => console.log(result.rows));
    db.query("SELECT * FROM poll_options")
    .then(result => console.log(result.rows));
  }, 2000)
})

