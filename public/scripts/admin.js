$(document).ready(function() {
  // renders administrative.ejs in administrative/id dynamically
    db.query(`
    SELECT poll_options.optionTitle, sum(rank)
    FROM poll_votes
    JOIN poll_options ON poll_options.id = pollOptions_id
    JOIN poll ON poll.id = poll_id
    WHERE admin_link LIKE '%${req.params.id}'
    GROUP BY optionTitle
    ORDER BY sum DESC;
    `)
    .then((result) => {
      const templateVars = { ranks: result.rows }
      res.render('administrative', templateVars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    })
  });
