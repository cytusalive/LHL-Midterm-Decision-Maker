SuperPOLLs - Decision Maker
=========

## Project Description
- This webapp allow users to create a ranking-based poll, only requiring the user's email address
- then it creates a submission link for the user to send out and collect votes
- then it emails the user the administrative link where the user can view the total results and what each submitter voted individually
- ranking is based on borda count, where the highest ranking gets `total options - 1` points and each subsequent ranking gets 1 less points until the lowest ranking gets 0 points.

## Screenshots
![Front page](https://github.com/cytusalive/LHL-Midterm-Decision-Maker/blob/master/screenshots/Front%20page%20create%20poll.png)
![Submission page](https://github.com/cytusalive/LHL-Midterm-Decision-Maker/blob/master/screenshots/Submission%20page.png)
![Administrative page](https://github.com/cytusalive/LHL-Midterm-Decision-Maker/blob/master/screenshots/Administrative%20results%20page.png)

## Setting Up

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`
9. To use mailgun feature to send submission and result links to your email, run `npm install mailgun-js` and add mailgun api key to `.env`

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
