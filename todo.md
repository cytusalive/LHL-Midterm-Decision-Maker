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
https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=ERD.png#R7Vxdc6I6GP41zpxz0Q4fYt1LtbTds3a3Y3u6u1edVCJmioQDqdX99ScxiR8NtFSkRHHGcchLCOR9njx5SUIadm8yu4xBNL7GHgwaluHNGvZ5w7LMpmU12M%2Fw5txy9qXJDX6MPJFpZbhFf6AwGsL6jDyYbGQkGAcERZvGIQ5DOCQbNhDH%2BGUz2wgHm3eNgA8Vw%2B0QBKr1J%2FLImFvbjrGyX0Hkj%2BWdTUOcmQCZWRiSMfDwy4YJzsgFDol4xBsYT0AIQ0LPXIP4CcYNxx0TwmraaVgX9DdiuU99jP0Aggglp0M8oeZhQrNcjMAEBczNawV1RUH0drbbsHsxxoQfTWY9GDCsJAz8mS4yzi79ELNyc1zQO5nO%2B08GCa9e7Htyfe3fnD2eWDYvZgqCZ%2BHg5wTGifAQmUu3U2dF7JCAR2bqJgTERLDDNqiB4k0ACmnV7HNzkQ4CECVokZ1bxijw%2BmCOn4ksSKa6IzSD3oCTg%2BWlPOnTwliSFc7cfCsehp0GAfJDejykdWd37MYwoc%2FSBwkROVTvCIdNYUzgbM0kvHUJ8QSSeE6zyLOSFaKlSIq9rGi3tI3XKScZBwSP%2FGXRK3jogUDoI2g1FbQygaJVJwgEA9oGQegvMNuEhPnVi3F0B2IfEmGIMGIedaeQt4KF81EQ9HCAGbIhDqHMtqid06U%2FWt%2Beceo0HPoAPZo2V2n6Y9lj0sNhQmLKEHYrSIF6gQysLsGRuE8AR%2FIxYuFNdvyICaGNKgvWt2n9PtgCXDsnuHZp2DoKtjffPoIuppUdBQtBGyPPgyFvlEyEwQrxFDBTEVh6%2FTUcr5tiXkSauRFZg8D%2BVARaCgI0v2XcuoOvnT49%2BOb%2Bpv%2Fff9yx%2F3%2F7fQ3RkcLI83aTCAxR6Pf5la1X8DmlwDfLblDWp8J5VmexNMoUy1blYtkuhO0nNca8%2Fj%2FL7f%2FKpPGL4u8QTGCjZzU6xn1n0LvqDP6yHOdvDVF4VxJ3D1MFEuj%2B15v2wFPz5h%2F3z30TRr730z0xVdgizC47iOBeASIl3s8d3Nt5o%2FslgjtHSxZczw4rN65vMF2L6D4dW1PBdo%2Bi%2B20Q4WyupAtLfx6rttH9LuHTpWtzaj0UYpQplp8Z3adjqw6FaNgYt%2Fc%2F564%2B0uioAx8eTIYa%2BjxnLL9LUHQRvJYaQRwFbzeC96VqwWupsYmGjW97%2F7eqG85Ifx511gt4ExQ%2BBCh80tDzJcpeFjS6yJ5Z77fiUnVv6dvKhM9MeS%2FWsP0VQEC312Az5T04eX6cIFJD8ctERxv1s9UR3KP67Uj98o74lodus1jfpr%2F62RkQVKZ%2BTbW%2FwS8hjB%2FgBKDsiZHDVL8sdLRRv9ZxkK809WtXrn6tAx%2FmE%2FTVSP1a6kAfW%2B35wCZCtHN8mcqXhYwuytdWhY9N3D9MMYGHsja30PR9S47ZfXRtbqs0yIqp2Z73VcXmitsZzVGX2fu2qpsHPnvP2axP19VWF3MeZ%2B8%2FDp82%2FVux9Zt7LpbFwsp3xLLy2ft2sSEr7cN6zl19pFFGQmlBvfH1%2B5176Q40BKDE8D4LIV3UzzTU%2Bcej%2FO1G%2FiqfyzeNYoNW2uufYK8%2BAmga6qsXe1v%2BERFEyVq%2F0Y0sgLTRP%2FP4aVZZ%2BqfBnL65Rx9nbdW%2BOH01EsCU73xiULvJ%2FCxYtJG9lM0WFqO6mHdUmXDVeFzXzvs6a5YIW61nIQt%2Bl2VlxCK6DO2a%2B73vwnaY6DYvWeOdF3YKoD493THAL00yKx%2FgNfdp94XtENAtwE%2FZf2EROdZuaCMLGW2UT5Z8VL7dK1%2F1Y7v2oX%2BuYOv2uYJtKR7nr8vntftCNRMcbcTPyRH2Qc%2BHMgym9UVkPoABYIi6qzM8WOYjHSatcndMJkGDv%2FjA0OuwfURp0h1QiO7wNQjnixO0Er8EDovEb5Y4dWTyfLZ%2B8nwuUzNEfsnC6fHaVTS1uogl5DW8WqwumRgKU4Kf4yF8w2sSIiJFvkhYstx7MnVDynjh6enmM6fRQNzjhvUhawSTa4aFHjfNV0zidRVXrcikFHRmbxakrMrjvlAKWrByWfEiRM0RwZZI1C0Ity25tyPqm3sAvkvUHCskSuVp6xW9rNf02h%2Be5lhLoylPzc%2Fg6dvLK3Io6vsjYUem5vu0oNquX3umFlPUPJ%2BSfCpR7V0RVWH81kSlydVm6jz7agd82%2F0f

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
