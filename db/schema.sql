-- Created the DB
CREATE DATABASE burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers;
-- Created the table "burgers" 

CREATE TABLE burgers
(
  id int
  AUTO_INCREMENT,
  burger_name varchar
  (255) NOT NULL,
  devoured BOOL,
  PRIMARY KEY
  (id)
);
