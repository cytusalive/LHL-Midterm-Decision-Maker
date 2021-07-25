-- Drop and recreate Widgets table (Example)

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
