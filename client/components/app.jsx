import React from 'react';
import $ from 'jquery';
import Review from './Review.jsx';

class App extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = {
      reviews: [],
    };
  }

  render() {
    return (
      <div>Something new from the react componenet</div>
    );
  }
}

export default App;
