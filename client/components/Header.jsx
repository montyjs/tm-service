/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Header = props => (
  <div className="content-header">
    <div className="stars">
      <span style={props.starColor(props.rating, 1)} className="star-1">★</span>
      <span style={props.starColor(props.rating, 2)} className="star-2">★</span>
      <span style={props.starColor(props.rating, 3)} className="star-3">★</span>
      <span style={props.starColor(props.rating, 4)} className="star-4">★</span>
      <span style={props.starColor(props.rating, 5)} className="star-5">★</span>
    </div>
    <div className="author">
      {props.username}
    </div>
    <div className="timestamp">
      · {props.postdate}
    </div>
  </div>
);

export default Header;
