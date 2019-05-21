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
      <div>
        Something new from the react componenet
        {this.state.reviews.map(entry => (
          <Reviews review={entry} />
        ))}
      </div>
    );
  }
}

export default App;
