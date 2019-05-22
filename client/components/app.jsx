/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import Reviews from './Reviews.jsx';

class App extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = {
      reviews: [],
    };
    this.count = 4;
    this.starColor = this.starColor.bind(this);
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    fetch('/reviews')
      .then(response => response.json())
      .then((result) => {
        this.setState({
          reviews: result,
        });
      });
  }

  starColor(num) {
    if (this.count >= num) {
      return { color: '#bd5b0d' };
    }
    return {};
  }

  render() {
    return (
      <div className="top-level">
        <div className="content-header">
          <div className="stars">
            <span style={this.starColor(1)} className="star-1">★</span>
            <span style={this.starColor(2)} className="star-2">★</span>
            <span style={this.starColor(3)} className="star-3">★</span>
            <span style={this.starColor(4)} className="star-4">★</span>
            <span style={this.starColor(5)} className="star-5">★</span>
          </div>
          <div className="username">
            Bobby Joe
          </div>
          <div className="timestamp">
            · 7 years ago
          </div>
        </div>
        <div className="content-title">
          <h4 className="title">This is my review</h4>
        </div>
        <div className="content-body">
          <div className="review-data">
            Great shoes right out of the box.Spent 5 hours clmbing in them the day after I bought them and the performed great.
            They were able to hold small toe holds and slick smears(which is what I was looking for).
            They started forming to my feet after the first couple of routes, but did not get flimsy.
            I would recommend these to anyone contimplating the Mythos or similar level shoes, as I was keeping up with and finishing things my budy wearing those were not.
            I had also looked at those shoes but decided that the $60 price difference was worth the shot.
            Still will problably end up with them in the future, but these are great shoes to grow with.
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
            <button type="button" className="btn-yes">Yes · 25</button>
            <button type="button" className="btn-no">No · 25</button>
            <button type="button" className="btn-report">Report as inappropriate</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
