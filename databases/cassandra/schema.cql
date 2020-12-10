DROP KEYSPACE about_this_item;

CREATE KEYSPACE IF NOT EXISTS about_this_item
WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE about_this_item;

CREATE TABLE IF NOT EXISTS products (
	id int,
  name varchar,
  highlight varchar,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS specifications (
  id int,
  spec_name varchar,
  spec_value varchar,
  product_id int,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS q_a (
	id int,
  q_user_name varchar,
  question varchar,
  q_created_at varchar,
  a_user_name varchar,
  answer varchar,
  a_created_at varchar,
  helpful int,
  not_helpful int,
  product_id int,
  PRIMARY KEY (id)
);

COPY products(id, name, highlight) FROM '/Users/David/HackReactor/SEI/senior_phase/about-this-item/databases/csv/cassandraData/productDetails.csv' WITH DELIMITER = ',';

COPY specifications(id, spec_name, spec_value, product_id) FROM '/Users/David/HackReactor/SEI/senior_phase/about-this-item/databases/csv/cassandraData/specificationsCass.csv' WITH DELIMITER = ',';

COPY q_a(id, q_user_name, question, q_created_at, a_user_name, answer, a_created_at, helpful, not_helpful, product_id) FROM '/Users/David/HackReactor/SEI/senior_phase/about-this-item/databases/csv/cassandraData/QA.csv' WITH DELIMITER = ',';