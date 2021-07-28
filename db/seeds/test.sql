INSERT INTO users (id, name) VALUES (1, 'a');
INSERT INTO users (id, name) VALUES (2, 'b');
INSERT INTO users (id, name) VALUES (3, 'c');

INSERT INTO poll (id, admin_link, submit_link, owner_email, poll_title) VALUES (1, 'http://localhost:8080/administrative/biwt0c', 'http://localhost:8080/submission/biwt0c', 'a@a.com', 'movies');

INSERT INTO poll_options (id, poll_id, optionTitle, optionDesc) VALUES (1, 1, 'titanic', 'boat sinks everyone dies');
INSERT INTO poll_options (id, poll_id, optionTitle, optionDesc) VALUES (2, 1, 'charlottes web', 'pig eats spider');
INSERT INTO poll_options (id, poll_id, optionTitle, optionDesc) VALUES (3, 1, 'ratatouille', 'health safety violations');

-- poll votes for titanic
INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (1, 1, 1, 3);
INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (2, 2, 1, 2);
INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (3, 3, 1, 1);

-- poll votes for charlottes web
INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (4, 1, 2, 2);
INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (5, 2, 2, 1);
INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (6, 3, 2, 2);

-- poll votes for ratatouille
INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (7, 1, 3, 1);
INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (8, 2, 3, 3);
INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (9, 3, 3, 3);

INSERT INTO poll_votes (id, user_id, pollOptions_id, rank) VALUES (13, 3, 3, 3);
