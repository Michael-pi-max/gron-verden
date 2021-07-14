import React from 'react';
import { Link } from 'react-router-dom';

function Banner(props) {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-content">
              <div className="banner-title">
                Exploring Plants <br />
                Plants Are The Answer!
              </div>
              <p className="banner-des">
                How can knowing and learning about plants be a tool to solve
                Earth’s environmental challenges?{' '}
              </p>
              <Link className="btn-custom" to="/learn">
                <span className="btn-text">Learn More</span>
                <span className="icon-arrow-right">
                  <i className="lnr lnr-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
