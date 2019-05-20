DROP DATABASE IF EXISTS reireviews;

CREATE DATABASE reireviews;

\c reireviews;

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id SERIAL NOT NULL,
  username VARCHAR(30) NOT NULL,
  postdate VARCHAR(20),
  title VARCHAR(100) NOT NULL,
  review VARCHAR(1000) NOT NULL,
  rating INT NOT NULL,
  recommended BOOLEAN NOT NULL,
  images VARCHAR(1000) NOT NULL
);