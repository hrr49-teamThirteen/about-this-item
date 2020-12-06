DROP DATABASE IF EXISTS about_this_item;

CREATE DATABASE about_this_item;

\c about_this_item;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE highlights (
  id SERIAL PRIMARY KEY,
  text VARCHAR(1000),
  product_id INT
  -- FOREIGN KEY (product_id)
  --   REFERENCES products(id)
  --   ON DELETE CASCADE
);

CREATE TABLE specifications (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  value VARCHAR(50) NOT NULL,
  product_id INT
  -- FOREIGN KEY (product_id)
  --   REFERENCES products(id)
  --   ON DELETE CASCADE
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(50) NOT NULL,
  question VARCHAR(1000) NOT NULL,
  created_at VARCHAR(100) NOT NULL,
  product_id INT
  -- FOREIGN KEY (product_id)
  --   REFERENCES products(id)
  --   ON DELETE CASCADE
);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(50) NOT NULL,
  answer VARCHAR(1000) NOT NULL,
  created_at VARCHAR(100) NOT NULL,
  helpful INT,
  not_helpful INT,
  question_id INT
  -- FOREIGN KEY (product_id)
  --   REFERENCES products(id)
  --   ON DELETE CASCADE,
  -- FOREIGN KEY (question_id)
  --   REFERENCES questions(id)
  --   ON DELETE CASCADE
);

CREATE index ON "highlights" ("product_id");
CREATE index ON "specifications" ("product_id");
CREATE index ON "questions" ("product_id");
CREATE index ON "answers" ("question_id");

/* COPY CSV FILES TO POSTGRES TABLES */

\COPY products (name) FROM '/Users/David/HackReactor/SEI/senior_phase/about-this-item/databases/csv/products.csv' DELIMITER ',';

\COPY highlights (text, product_id) FROM '/Users/David/HackReactor/SEI/senior_phase/about-this-item/databases/csv/highlights.csv' DELIMITER ',';

\COPY specifications (name, value, product_id) FROM '/Users/David/HackReactor/SEI/senior_phase/about-this-item/databases/csv/specifications.csv' DELIMITER ',';

\COPY questions (user_name, question, created_at, product_id) FROM '/Users/David/HackReactor/SEI/senior_phase/about-this-item/databases/csv/questions.csv' DELIMITER ',';

\COPY answers (user_name, answer, created_at, helpful, not_helpful, question_id) FROM '/Users/David/HackReactor/SEI/senior_phase/about-this-item/databases/csv/answers.csv' DELIMITER ',';
