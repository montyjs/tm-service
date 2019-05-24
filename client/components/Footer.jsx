/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-parens */
import React from 'react';

const Footer = (props) => {
  return (
    <div className="content-footer">
      <div className="helpful">
        Helpful?
      </div>
      <div className="buttons">
        <button type="button" className="btn-yes" onClick={(e) => { e.target.innerText = props.upVote(e); }}>
          {`Yes · ${props.yes}`}
        </button>
        <button type="button" className="btn-no" onClick={(e) => { e.target.innerText = props.upVote(e); }}>
          {`No · ${props.yes}`}
        </button>
        <button type="button" className="btn-report">Report as inappropriate</button>
      </div>
    </div>
  );
};

export default Footer;
