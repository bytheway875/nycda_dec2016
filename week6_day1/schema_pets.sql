CREATE TABLE pets(
  id integer PRIMARY KEY AUTOINCREMENT,
  user_id integer,
  name varchar(255),
  species varchar(255),
  dateCreated timestamp DEFAULT current_timestamp
);

# library database

EVERY table primary key and a timestamp to indicate when it was created.

# books table
# title (string)
# published_year (integer)
# author_id (foreign key)

# authors table
# name (string)
# genre (string)

# Use the commands that we learned to create entries for 5 different books and their authors.
