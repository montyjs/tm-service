/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-parens */
import React from 'react';

const Reviews = (props) => (
  <div className="top-level">
    <div className="content-header">
      <div className="stars">
        <span style={props.starColor(props.review.rating, 1)} className="star-1">★</span>
        <span style={props.starColor(props.review.rating, 2)} className="star-2">★</span>
        <span style={props.starColor(props.review.rating, 3)} className="star-3">★</span>
        <span style={props.starColor(props.review.rating, 4)} className="star-4">★</span>
        <span style={props.starColor(props.review.rating, 5)} className="star-5">★</span>
      </div>
      <div className="author">
        {props.review.username}
      </div>
      <div className="timestamp">
        · {props.review.postdate}
      </div>
    </div>
    <div className="content-title">
      {props.review.title}
    </div>
    <div className="content-body">
      <div className="review-data">
        {props.review.review}
      </div>
      <div className="recommended">
        <p>
          <span className="check">✔</span>
          <span className="yes"> Yes</span>
          , I recommend this product
        </p>
      </div>
    </div>
    <div className="content-footer">
      <div className="helpful">
        Helpful?
      </div>
      <div className="buttons">
        <button type="button" className="btn-yes" onClick={(e) => { e.target.innerText = props.upVote(e); }}>Yes · 25</button>
        <button type="button" className="btn-no" onClick={(e) => { e.target.innerText = props.upVote(e); }}>No · 25</button>
        <button type="button" className="btn-report">Report as inappropriate</button>
      </div>
    </div>
  </div>
);


export default Reviews;
