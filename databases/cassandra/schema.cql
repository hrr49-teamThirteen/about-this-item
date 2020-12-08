CREATE KEYSPACE IF NOT EXISTS about_this_item;
WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE SDC;

CREATE TABLE IF NOT EXISTS products (
	id int,
  name varchar,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS highlights (
	id int,
  text varchar,
  product_id int,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS specifications (
	id int,
  name varchar,
  value varchar,
  product_id int,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS questions (
	id int,
  user_name varchar,
  question varchar,
  created_at varchar,
  product_id int,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS highlights (
	id int,
  user_name varchar,
  answer varchar,
  created_at varchar,
  helpful int,
  not_helpful int,
  question_id int,
  PRIMARY KEY (id)
);