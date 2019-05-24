/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable arrow-parens */
import React from 'react';

const Body = (props) => (
  <div className="content-body">
    <div className="review-data">
      {props.review}
    </div>
    <div className="recommended">
      {props.showRecommended(props.recommended)}
    </div>
    {props.showImages(1, 2)}
  </div>
);

export default Body;
