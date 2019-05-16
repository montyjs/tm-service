import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = {
      reviews: []
    }
  }
  getReviews = () => {
    $.get('/reviews', (results) => {
      this.setState({
        reviews: results
      })
    })
  }

  render = () => (
    <div></div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));