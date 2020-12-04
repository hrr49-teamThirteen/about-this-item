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

