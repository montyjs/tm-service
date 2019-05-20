/* eslint-disable arrow-parens */
import React from 'react';

const Reviews = (props) => (
  <div>
    Posted on Data: {props.review.postdate.slice(0, 10)}
  </div>
);


export default Reviews;
