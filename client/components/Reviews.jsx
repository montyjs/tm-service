/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-parens */
import React from 'react';
import Header from './Header.jsx';
import Title from './Title.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

const PropTypes = require('prop-types');

const Reviews = ({ review, methods }) => (
  <div className="top-level">
    <Header
      starColor={methods.starColor}
      username={review.username}
      postdate={review.postdate}
      rating={review.rating}
    />
    <Title title={review.title} />
    <Body
      review={review.review}
      recommended={review.recommended}
    />
    <Footer
      yes={methods.yesvote}
      no={methods.novote}
      upVote={methods.upVote}
    />
  </div>
);

Reviews.propTypes = {
  review: PropTypes.object,
  methods: PropTypes.object,
};

Reviews.defaultProps = {
  review: {},
  methods: {},
};


export default Reviews;
