-- Drop and recreate
-- Only use upon table initiation or to reset the tables to a blank slate

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS poll CASCADE;
CREATE TABLE poll (
  id SERIAL PRIMARY KEY NOT NULL,
  admin_link VARCHAR(255),
  submit_link VARCHAR(255),
  owner_email VARCHAR(255),
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS poll_options CASCADE;
CREATE TABLE poll_options (
  id SERIAL PRIMARY KEY NOT NULL,
  poll_id INTEGER REFERENCES poll(id) ON DELETE CASCADE,
<<<<<<< HEAD
=======
  optionTitle VARCHAR(255) NOT NULL,
>>>>>>> bc465a7712a46addbb72e19cc4fd305e1cdc460d
  optionDesc TEXT
);

DROP TABLE IF EXISTS poll_votes CASCADE;
CREATE TABLE poll_votes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  pollOptions_id INTEGER REFERENCES poll_options(id) ON DELETE CASCADE,
  rank SMALLINT
);
