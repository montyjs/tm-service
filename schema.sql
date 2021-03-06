DROP DATABASE IF EXISTS reireviews;

CREATE DATABASE reireviews;

\c reireviews;

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id SERIAL NOT NULL,
  username VARCHAR NOT NULL,
  postdate VARCHAR,
  title VARCHAR NOT NULL,
  review VARCHAR NOT NULL,
  rating INT NOT NULL,
  sizerating INT NOT NULL,
  recommended BOOLEAN NOT NULL,
  yesvote INT NOT NULL,
  novote INT NOT NULL,
  image1 VARCHAR NOT NULL,
  image2 VARCHAR NOT NULL
);