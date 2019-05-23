/* eslint-disable arrow-parens */
import React from 'react';

const Footer = (props) => (
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
);

export default Footer;
