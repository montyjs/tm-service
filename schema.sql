CREATE DATABASE customerReviews

USE customerReviews

CREATE TABLE customerReviews (
  id SERIAL NOT NULL
  userName VARCHAR(20) NOT NULL
  postDate DATE NOT NULL
  title VARCHAR(20) NOT NULL
  review VARCHAR(200) NOT NULL
  rating INT(1) NOT NULL
  recommended BOOLEAN NOT NULL
  images BOOLEAN NOT NULL
)