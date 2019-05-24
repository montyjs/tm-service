/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable arrow-parens */
import React from 'react';

const Body = (props) => {
  let recommendation;
  if (props.recommended === true) {
    recommendation = (
      <div>
        <div className="mark">✔</div>
        <span className="recommendation"> Yes</span>
          , I recommend this product
      </div>
    );
  } else {
    recommendation = (
      <div>
        <div className="mark">✘</div>
        <span className="recommendation"> No</span>
          , I don't recommend this product
      </div>
    );
  }
  return (
    <div className="content-body">
      <div className="review-data">
        {props.review}
      </div>
      <div className="recommended">
        {recommendation}
      </div>
      <div className="images">
        <div className="image"> </div>
        <div className="image"> </div>
      </div>
    </div>
  );
};

export default Body;
