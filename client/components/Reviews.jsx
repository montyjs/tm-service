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

const Reviews = (props) => (
  <div className="top-level">
    <Header
      starColor={props.starColor}
      username={props.review.username}
      postdate={props.review.postdate}
      rating={props.review.rating}
    />
    <Title title={props.review.title} />
    <Body
      review={props.review.review}
      recommended={props.review.recommended}
    />
    <Footer
      yes={props.review.yesvote}
      no={props.review.novote}
      upVote={props.upVote}
      showImages={props.showImages}
      showRecommended={props.showRecommended}
    />
  </div>
);


export default Reviews;
