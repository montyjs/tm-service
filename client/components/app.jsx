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
        <div className="content-container">
          <div className="content-core">
            <div className="content-header">
              <div className="content-data-summary">
                <div className="content-data-meta">
                  <span className="content-rating rating-ratio">
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating" content="5" />
                    <span className="bv-rating-stars-container">
                      <abbr title="5 out of 5 stars." className="bv-rating bv-rating-stars bv-rating-stars-off" aria-hidden="true"> ☆☆☆☆☆ </abbr>
                      <abbr title="5 out of 5 stars." style={{ width: '100%' }} className="bv-rating-max bv-rating-stars bv-rating-stars-on" aria-hidden="true"> ☆☆☆☆☆ </abbr>
                      <span className="bv-off-screen">5 out of 5 stars.</span>
                    </span>
                  </span>
                </div>
                <div className="conent-title-container">
                  <h4 className="content-title">Great shoes</h4>
                </div>
              </div>
            </div>
            <div className="content-details-offset-on">
              <div className="content-summary">
                <div className="content-summary-body" itemProp="reviewBody">
                  <div className="content-summary-body-text">
                    <p>
                      Great first pair of shoes.  Looking forward to getting outside more with them.
                    </p>
                  </div>
                  <div className="content-data">
                    <div className="contnet-product-questions">  </div>
                    <div className="content-tag-dimensions">  </div>
                    <dl className="content-data-recommend-yes">
                      <dt className="content-data-label-container">
                        <span className="content-data-icon" aria-hidden="true">✔</span>
                        <span className="content-data-label">Yes</span>
                        ,
                      </dt>
                      <dd className="content-data-value">  I recommend this product.  </dd>
                    </dl>
                    <ul className = "content-media-container">
                      This is where images would go.
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-actions-container">
          <div className="feedback-container">
            <dl className="content-feedback-vote">
              <dt className="content-feedback-vote-request">
                <p>Helpful?</p>
              </dt>
              <dd className="content-feeback-btn-container">
                <button type="button" className="content-btn-feedback-yes" onClick="return false;">
                  <span aria-hidden="true">
                    Yes ·
                    <span className="content-btn-count" aria-hidden="true">26</span>
                  </span>
                </button>
                <button type="button" className="content-btn-feedback-no" onClick="return false;">
                  <span aria-hidden="true">
                    No ·
                    <span className="content-btn-count" aria-hidden="true">5</span>
                  </span>
                </button>
              </dd>
              <dd className="feedback-vote">
                <button type="button" className="content-report-btn" onClick="return false">Report as inappropriate</button>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
