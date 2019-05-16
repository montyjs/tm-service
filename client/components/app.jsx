import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Review from './Review.jsx';

class App extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = {
      reviews: []
    }
    this.getReviews = this.getReviews.bind(this);
  }
  getReviews () {
    $.get('/reviews', (results) => {
      this.setState({
        reviews: results
      })
    })
  }

  render() {
    return (
    <div></div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));