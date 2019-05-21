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

  render() {
    return (
      <div className="top-box">
        <div className="review-box">
          <div className="top-bar">
            <div className="stars">
              <div className="star-1 allstar">★</div>
              <div className="star-2 allstar">★</div>
              <div className="star-3 allstar">★</div>
              <div className="star-4 allstar">★</div>
              <div className="star-5 allstar">★</div>
            </div>
            <div className="username">Username</div>
            <div className="postdate">6 months ago</div>
          </div>
          <div className="title">
            <div className="title-content">First pair of shoes</div>
          </div>
          <div className="review">
            <div className="reviewContent">
              These guys are pretty solid.They stick well, they're true to Sportiva sizing and they feel fine on my feet.
              Not super precise, though, and the rubber is so thick, blunt and flat that it takes some time to learn to trust them.
              Especially if you're coming off an aggressive shoe.
            </div>
          </div>
          <div className="review-footer">
            <div className="recommended">✔ Yes, I recommend this product</div>
            <div className="helpfull">Helpfull?</div>
            <button type="button" className="button-yes">Yes</button>
            <button type="button" className="button-no">No</button>
            <button type="button" className="button-report">Report as inappropriate</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


// {
//   this.state.reviews.map(entry => ( <
//     Reviews review = {
//       entry
//     }
//     />
//   ))
// }