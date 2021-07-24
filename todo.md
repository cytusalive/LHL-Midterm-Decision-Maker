# W05D05 - Mid-term Project Kickoff

### Pick a Project
- Decision Maker

### User Stories
- A _signed in_ user can create a poll with multiple choices
- Each choice has a title and a description
- Takes the user's email when poll is created
- Returns a submission link (submit results) and an admin link (see results)
- The links are sent to the creator's email 
- A _non signed in_ user can submit results using the submission link
- The user enters a name when responding to the poll 
- Results are ranked using https://en.wikipedia.org/wiki/Borda_count
- The poll creator is notified by email with the admin link for each submission


### User Scenarios
- Given _that I am logged in_, when _I click NEW POLL_, then _I am taken to a page where I enter my email and all the choices_.
- Given _that I am logged in and entered all poll options_, when _I confirm create poll_, then _I recieve a email with admin link and poll link_
- Given _that I am a voter_, when _I access the poll link_, then _I can enter my name and rank all the choices in this poll, then submit_
- Given _that I am the creator of a poll_, when _someone responds to my poll_, then _I am notified by email and can access the updated poll results by the admin link_

### ERD
- Tables to create
1. users (contain userid, username, password, email)
2. new table for each created poll (contains owner_id referencing users.id, choices, votes)

### Routes
- Once you know the resources that you'll have, write out the routes that you'll need to perform BREAD operations on those resources
- Remember RESTful conventions (they make it much easier)

### Wireframes
!["Vote creation page"](https://media.discordapp.net/attachments/868198389215555706/868322230738747463/unknown.png?width=724&height=495)

### User Login
- Don't do it
- Seriously, don't do it
- We know that you know how to register and login users

```js
// do this instead
app.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
});
```

### Tech Choices
- We have made all the tech choices for you
- Back End: Node and Express
- Front End: HTML, CSS, JS, jQuery, Bootstrap

### The Mid-term Skeleton
- Use the provided `node-skeleton` as a template for your project
- This will get you up and running quickly

### SPA vs Multi-page App
- These concepts are not mutually exclusive
- You can choose one or the other or both

### Git
- Use Git best practices (ask a mentor for clarification if you need it)
- Use branches

### DO NOT CODE ON MASTER
- I repeat, do not code on master

### Splitting up the Work
Front end: Permanent header, view user polls, create poll, poll submission, see poll results
Back end: user database, creating poll database, update votes on poll submission, compile results

### Communication
- Make sure to communicate with your team members
- Use Slack, iMessage, Google Hangouts, whatever... just make sure that everyone is on the same page

### Deployment
- Decide if you want/need to deploy your application to the cloud
- Ask a mentor for assistance/advice if your team decides to deploy
