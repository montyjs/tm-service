USE customerReviews

CREATE TABLE customerReviews (
  id SERIAL NOT NULL,
  username VARCHAR(20) NOT NULL,
  postdate DATE NOT NULL,
  title VARCHAR(20) NOT NULL,
  review VARCHAR(300) NOT NULL,
  rating INT NOT NULL,
  recommended BOOLEAN NOT NULL,
  images BOOLEAN NOT NULL
);