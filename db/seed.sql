-- db/seed.sql

\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Bohemian Rhapsody', 'Queen', 'A Night at the Opera', '5:55', TRUE),
('Stairway to Heaven', 'Led Zeppelin', 'Led Zeppelin IV', '8:02', FALSE),
('Hotel California', 'Eagles', 'Hotel California', '6:30', TRUE),
('Imagine', 'John Lennon', 'Imagine', '3:01', TRUE),
('Smells Like Teen Spirit', 'Nirvana', 'Nevermind', '5:01', FALSE),
('Hey Jude', 'The Beatles', 'Hey Jude', '7:11', TRUE),
('Like a Rolling Stone', 'Bob Dylan', 'Highway 61 Revisited', '6:13', FALSE),
('I Want to Hold Your Hand', 'The Beatles', 'Meet the Beatles!', '2:24', TRUE),
('Billie Jean', 'Michael Jackson', 'Thriller', '4:54', TRUE),
('What a Wonderful World', 'Louis Armstrong', 'What a Wonderful World', '2:21', FALSE);
