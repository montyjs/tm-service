/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
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
    this.upVote = this.upVote.bind(this);
    this.starColor = this.starColor.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.showImages = this.showImages.bind(this);
    this.showRecommended = this.showRecommended.bind(this);
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

  upVote(event) {
    const start = event.target.innerText.slice(0, -2);
    const end = +event.target.innerText.slice(-2) + 1;
    return start + end;
  }

  showImages(image1, image2) {
    if (image1 && !image2) {
      return (
        <div className="images">
          <div className="image1"> </div>
        </div>
      );
    }
    if (image1 && image2) {
      return (
        <div className="images">
          <div className="image1"> </div>
          <div className="image2"> </div>
        </div>
      );
    }
  }

  showRecommended(recommendation) {
    if (recommendation === true) {
      return (
        <div>
          <div className="mark">✔</div>
          <span className="recommendation"> Yes</span>
            , I recommend this product
        </div>
      );
    }
    if (recommendation === false) {
      return (
        <div>
          <div className="mark">✘</div>
          <span className="recommendation"> No</span>
            , I don't recommend this product
        </div>
      );
    }
  }

  render() {
    const methods = {
      count: this.count,
      upVote: this.upVote,
      starColor: this.starColor,
      getReviews: this.getReviews,
      showImages: this.showImages,
      showRecommended: this.showRecommended,
    };
    return (
      <div className="parent-level">
        <div className="top-border">
          {this.state.reviews.map(review => (
            <Reviews review={review} methods={methods} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
