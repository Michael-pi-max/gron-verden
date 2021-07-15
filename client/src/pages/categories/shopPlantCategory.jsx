import React from 'react';
import { Link } from 'react-router-dom';
import DrawerForm from '../my-shop/my-shop/DrawerForm';

const ShopPlantCategory = ({ plants }) => {
  return (
    <section className="popular-product padding-section">
      <div className="container">
        <div className="row">
          <div className="box-title">
            <h5 className="mx-auto box-des des-popular-product">
              <span className="des-line pb-4">
                Plant list ({plants.length})
              </span>
            </h5>
            {/* <h2 className="des-title"></h2> */}
            <DrawerForm />
          </div>
        </div>
        <div className="row">
          {/* TODO : What if no plant is yet available ena the other data's */}
          {plants &&
            plants.map((plant) => {
              return (
                <div
                  key={plant._id}
                  className="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-12"
                >
                  <div className="box-item">
                    <div className="box-item-image">
                      <Link to={`/plants/${plant._id}`}>
                        <img
                          src={`http://localhost:8000/${plant.plantImage}`}
                          alt="Deal of the week"
                        />
                      </Link>
                    </div>
                    <div className="box-item-info">
                      <h3 className="">
                        <a href="" className="item-name" style={{color:'#F57C00'}}>
                          {plant.plantName}
                        </a>
                      </h3>
                      <div className="item-price-rate">
                        <div className="item-price">
                          <span className="cost">$80.00</span>
                          <span className="sale">$60.00</span>
                        </div>
                        <div className="item-rating">
                          <span className="rating-badge">
                            <span className="badge-starrating">
                              <i className="star-icon star-icon-color1 lnr lnr-star"></i>
                              <i className="star-icon star-icon-color1 lnr lnr-star"></i>
                              <i className="star-icon star-icon-color1 lnr lnr-star"></i>
                              <i className="star-icon star-icon-color1 lnr lnr-star"></i>
                              <i className="star-icon star-icon-color2 lnr lnr-star"></i>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="offer">
                      <div className="percent">-25%</div>
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

export default ShopPlantCategory;
