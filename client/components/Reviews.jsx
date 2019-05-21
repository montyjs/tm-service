/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-parens */
import React from 'react';

const Reviews = (props) => (
  <div>
    <div>
      Posted on Data: {props.review.postdate}
    </div>
    <div>
      Review Tite: {props.review.title}
    </div>
  </div>
);


export default Reviews;
