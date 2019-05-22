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

  starColor(num, star) {
    if (num >= star) {
      return { color: '#bd5b0d' };
    }
    return {};
  }

  render() {
    return (
      <div className="parent-level">
        {this.state.reviews.map(review => (
          <Reviews review={review} starColor={this.starColor} />
        ))}
      </div>
    );
  }
}

export default App;
