CREATE KEYSPACE IF NOT EXISTS about_this_item
WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE about_this_item;

## new tables



## old tables

CREATE TABLE IF NOT EXISTS products (
	id UUID,
  name varchar STATIC,
  highlight varchar,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS specifications (
  id UUID,
  spec_name varchar,
  spec_value varchar,
  product_id int,
  PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS q_a (
	id UUID,
  q_user_name varchar STATIC,
  question varchar STATIC,
  q_created_at varchar STATIC,
  a_user_name varchar,
  answer varchar,
  a_created_at varchar,
  helpful int,
  not_helpful int,
  product_id int,
  PRIMARY KEY (id)
);

