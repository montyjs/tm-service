/* eslint-disable arrow-parens */
import React from 'react';

const Body = (props) => (
  <div className="content-body">
    <div className="review-data">
      {props.review}
    </div>
    <div className="images">
      <div className="image"> </div>
      <div className="image"> </div>
    </div>
    <div className="recommended">
      <p>
        <span className="check">✔</span>
        <span className="yes"> Yes</span>
        , I recommend this product
      </p>
    </div>
  </div>
);

export default Body;
