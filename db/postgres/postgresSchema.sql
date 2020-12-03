DROP DATABASE IF EXISTS about_this_item;

CREATE DATABASE about_this_item;

\c about_this_item;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  highlights JSON NOT NULL,
  specifications JSON NOT NULL,
  questions JSON NOT NULL
);

-- CREATE TABLE highlights (
--   id SERIAL PRIMARY KEY,
--   text VARCHAR(1000),
--   product_id INT,
--   FOREIGN KEY (product_id)
--     REFERENCES products(id)
-- );

-- CREATE TABLE specifications (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(50) NOT NULL,
--   value VARCHAR(50) NOT NULL,
--   product_id INT,
--   FOREIGN KEY (product_id)
--     REFERENCES products(id)
-- );

-- CREATE TABLE questions (
--   id SERIAL PRIMARY KEY,
--   user_name VARCHAR(50) NOT NULL,
--   question VARCHAR(1000) NOT NULL,
--   created_at TIMESTAMP NOT NULL,
--   product_id INT,
--   FOREIGN KEY (product_id)
--     REFERENCES products(id)
-- );

-- CREATE TABLE answers (
--   id SERIAL PRIMARY KEY,
--   user_name VARCHAR(50) NOT NULL,
--   answer VARCHAR(1000) NOT NULL,
--   created_at TIMESTAMP NOT NULL,
--   helpful INT,
--   not_helpful INT,
--   product_id INT,
--   question_id INT,
--   FOREIGN KEY (product_id)
--     REFERENCES products(id),
--   FOREIGN KEY (question_id)
--     REFERENCES questions(id)
-- );

