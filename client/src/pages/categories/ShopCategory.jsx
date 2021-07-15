import React from 'react';
import { Link } from 'react-router-dom';

const ShopCategory = ({ shopsProp, user }) => {
  return (
    <section className="popular-product padding-section">
      <div className="container">
        <div className="row">
          <div className="box-title">
            <h5 className="mx-auto box-des des-popular-product">
              <span className="des-line">The powerhouses</span>
            </h5>
            <h2 className="des-title">Popular shops</h2>
          </div>
        </div>
        <div className="row">
          {/* TODO : What if no shop is yet available ena the other data's */}
          {shopsProp &&
            shopsProp.map((shop) => {
              return (
                <div
                  key={shop._id}
                  className="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-12"
                >
                  <div className="box-item">
                    <div className="box-item-image">
                      <Link to={`/shops/${shop._id}`}>
                        <img
                          src={`http://localhost:8000/${shop.shopLogo}`}
                          alt="Deal of the week"
                        />
                      </Link>
                    </div>
                    <div className="box-item-info">
                      <h3 className="">
                        <Link
                          to={`/shops/${shop._id}`}
                          className="item-name"
                          style={{ color: '#E0E0E0' }}
                        >
                          {shop.shopName}
                        </Link>
                      </h3>
                      <div className="item-price-rate"></div>
                    </div>
                    <div className="offer">
                      <div className="percent">
                        {shop.shopProducts.plants.length > 1
                          ? `${shop.shopProducts.plants.length} items`
                          : `${shop.shopProducts.plants.length} item`}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ShopCategory;
