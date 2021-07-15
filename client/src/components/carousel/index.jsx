import React from 'react';
import { Link } from 'react-router-dom';

const Intro = (props) => {
  return (
    <section className="introBlock position-relative">
      <div className="slick-fade">
        <div>
          <div
            className="align w-100 d-flex align-items-center bgCover"
            style={{ backgroundImage: `url(images/b-bg.jpg)` }}
          >
            <div className="container position-relative holder pt-xl-10 pt-0">
              <div className="row">
                <div className="col-12 col-xl-7">
                  <div className="txtwrap pr-lg-10">
                    <h1 className="fwEbold position-relative pb-lg-8 pb-4 mb-xl-7 mb-lg-6">
                      Marketplace{' '}
                      <span className="text-break d-block">
                        Solely for plants.
                      </span>
                    </h1>
                    <h5 className="mb-xl-15 mb-lg-10">
                      A community to buy, sell and discover the magic of plants.
                    </h5>
                    <Link
                      to="/shops"
                      className="btn btnTheme btnShop fwEbold text-white md-round py-md-3 px-md-4 py-2 px-3"
                    >
                      Shop Now <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </div>
                <div className="imgHolder">
                  <img
                    src="http://htmlbeans.com/html/botanical/images/img77.png"
                    alt="image description"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="align w-100 d-flex align-items-center bgCover"
            style={{ backgroundImage: `url(images/b-bg2.jpg)` }}
          >
            <div className="container position-relative holder pt-xl-10 pt-0">
              <div className="row">
                <div className="col-12 col-xl-7">
                  <div className="txtwrap pr-lg-10">
                    <span className="title d-block text-uppercase fwEbold position-relative pl-2 mb-lg-5 mb-sm-3 mb-1">
                      welcome to Grøn Verden
                    </span>
                    <h2 className="fwEbold position-relative mb-xl-7 mb-lg-5">
                      Plants Gonna Make{' '}
                      <span className="text-break d-block">People Happy.</span>
                    </h2>
                    <h5 className="mb-xl-15 mb-lg-10">
                      Grøn Verden is more than about plants, it is a philosophy
                      that permeates our ecosystem as a whole.
                    </h5>
                    <Link
                      to="/shops"
                      className="btn btnTheme btnShop fwEbold text-white md-round py-2 px-3 py-md-3 px-md-4"
                    >
                      Shop Now <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </div>
                <div className="imgHolder">
                  <img
                    src="http://htmlbeans.com/html/botanical/images/img78.png"
                    alt="image description"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="align w-100 d-flex align-items-center bgCover"
            style={{ backgroundImage: `url(images/b-bg3.jpg)` }}
          >
            <div className="container position-relative holder pt-xl-10 pt-0">
              <div className="row">
                <div className="col-12 col-xl-7">
                  <div className="txtwrap pr-lg-10">
                    <span className="title d-block text-uppercase fwEbold position-relative pl-2 mb-lg-5 mb-sm-3 mb-1">
                      welcome to Grøn Verden
                    </span>
                    <h2 className="fwEbold position-relative mb-xl-7 mb-lg-5">
                      Plants for healthy life.
                    </h2>
                    <h5 className="mb-xl-15 mb-lg-10">
                      “The clearest way into the Universe is through a forest
                      wilderness.” - <em>John Muir</em>
                    </h5>
                    <Link
                      to="/shops"
                      className="btn btnTheme btnShop fwEbold text-white md-round py-2 px-3 py-md-3 px-md-4"
                    >
                      Shop Now <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </div>
                <div className="imgHolder">
                  <img
                    src="http://htmlbeans.com/html/botanical/images/img79.png"
                    alt="image description"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slickNavigatorsWrap">
        <a href="#" className="slick-prev">
          <i className="icon-leftarrow"></i>
        </a>
        <a href="#" className="slick-next">
          <i className="icon-rightarrow"></i>
        </a>
      </div>
    </section>
  );
};

export default Intro;
