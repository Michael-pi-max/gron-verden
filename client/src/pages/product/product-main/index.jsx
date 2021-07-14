import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
function ProductMain({ plants, plant }) {
  return (
    <>
      <div class="twoColumns container pt-xl-23 pb-xl-20 pt-lg-20 pb-lg-20 py-md-16 py-10">
        <div class="row mb-6">
          <div class="col-12 col-lg-6 order-lg-1">
            <div class="productSliderImage mb-lg-0 mb-4">
              <div>
                <img
                  src={`http://localhost:8000/${plant.plantImage}`}
                  alt="image description"
                  class="img-fluid w-100"
                />
              </div>
              <div>
                <img
                  src="http://placehold.it/570x635"
                  alt="image description"
                  class="img-fluid w-100"
                />
              </div>
              <div>
                <img
                  src="http://placehold.it/570x635"
                  alt="image description"
                  class="img-fluid w-100"
                />
              </div>
              <div>
                <img
                  src="http://placehold.it/570x635"
                  alt="image description"
                  class="img-fluid w-100"
                />
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 order-lg-3">
            <div class="productTextHolder overflow-hidden">
              <h2 class="fwEbold mb-2">{plant.plantName}</h2>
              <ul class="list-unstyled ratingList d-flex flex-nowrap mb-2">
                <li class="mr-2">
                  <a href="javascript:void(0);">
                    <i class="fas fa-star"></i>
                  </a>
                </li>
                <li class="mr-2">
                  <a href="javascript:void(0);">
                    <i class="fas fa-star"></i>
                  </a>
                </li>
                <li class="mr-2">
                  <a href="javascript:void(0);">
                    <i class="fas fa-star"></i>
                  </a>
                </li>
                <li class="mr-2">
                  <a href="javascript:void(0);">
                    <i class="fas fa-star"></i>
                  </a>
                </li>
                <li class="mr-2">
                  <a href="javascript:void(0);">
                    <i class="far fa-star"></i>
                  </a>
                </li>
              </ul>
              <strong class="price d-block mb-5 text-green">
                {plant.plantPrice}br
              </strong>
              <p class="mb-5">{plant.plantDescription}</p>
              <ul class="list-unstyled productInfoDetail mb-5 overflow-hidden">
                <li class="mb-2">
                  Product Type: <span>{plant.plantType}</span>
                </li>
                <li class="mb-2">
                  Quantity: <span>68 Items</span>
                </li>
                <li class="mb-2">
                  Shipping tax: <span>Free</span>
                </li>
              </ul>
              {/* <ul class="list-unstyled sizeList d-flex flex-wrap mb-4">
                            <li class="text-uppercase mr-6">Size:</li>
                            <li class="mr-2">
                                <label for="check-1">
                                    <input id="check-1" checked="checked" type="checkbox"/>
                                    <span class="fake-input"></span>
                                    <span class="fake-label">L</span>
                                </label>
                            </li>
                            <li class="mr-2">
                                <label for="check-2">
                                    <input id="check-2" type="checkbox"/>
                                    <span class="fake-input"></span>
                                    <span class="fake-label">M</span>
                                </label>
                            </li>
                            <li class="mr-2">
                                <label for="check-3">
                                    <input id="check-3" type="checkbox"/>
                                    <span class="fake-input"></span>
                                    <span class="fake-label">S</span>
                                </label>
                            </li>
                            <li class="mr-2">
                                <label for="check-4">
                                    <input id="check-4" type="checkbox"/>
                                    <span class="fake-input"></span>
                                    <span class="fake-label">XL</span>
                                </label>
                            </li>
                            <li class="mr-2">
                                <label for="check-5">
                                    <input id="check-5" type="checkbox"/>
                                    <span class="fake-input"></span>
                                    <span class="fake-label">XXL</span>
                                </label>
                            </li>
                        </ul>
                        <ul class="list-unstyled colorList d-flex flex-wrap mb-8">
                            <li class="text-uppercase mr-2">Color:</li>
                            <li class="mr-3"><a href="javascript:void(0);" class="red rounded"></a></li>
                            <li class="mr-3"><a href="javascript:void(0);" class="yellow rounded"></a></li>
                            <li class="mr-3"><a href="javascript:void(0);" class="purple rounded"></a></li>
                        </ul>
    */}
              {/* <div class="holder overflow-hidden d-flex flex-wrap mb-6">
                            <input type="number" placeholder="1"/>
                            <a href="javascript:void(0);" class="btn btnTheme btnShop fwEbold text-white md-round py-3 px-4 py-md-3 px-md-4">Add To Cart <i class="fas fa-arrow-right ml-2"></i></a>
                        </div> */}
              <ul class="list-unstyled socialNetwork d-flex flex-wrap mb-sm-11 mb-4">
                <li class="text-uppercase mr-5">SHARE THIS PRODUCT:</li>
                <li class="mr-4">
                  <a href="javascript:void(0);" class="fab fa-facebook-f"></a>
                </li>
                <li class="mr-4">
                  <a
                    href="javascript:void(0);"
                    class="fab fa-google-plus-g"
                  ></a>
                </li>
                <li class="mr-4">
                  <a href="javascript:void(0);" class="fab fa-twitter"></a>
                </li>
                <li class="mr-4">
                  <a href="javascript:void(0);" class="fab fa-pinterest-p"></a>
                </li>
              </ul>
              <ul class="list-unstyled productInfoDetail mb-0">
                {/* <li class="mb-2">Categories: <a href="javascript:void(0);">Butter &amp; Eggs,</a> <a href="javascript:void(0);">Fruits,</a> <a href="javascript:void(0);">Milk &amp; Cream,</a> <a href="javascript:void(0);">Vegetables</a></li> */}
                <li class="mb-2">
                  Tags: <a href="javascript:void(0);">organic food,</a>{' '}
                  <a href="javascript:void(0);">fruits,</a>{' '}
                  <a href="javascript:void(0);">juice</a>
                </li>
                {/* <li>Brand: <a href="javascript:void(0);">KFC</a></li> */}
              </ul>
            </div>
          </div>
        </div>
        {/* <div class="row">
                <div class="col-12">
                    <div class="paggSlider">
                        <div>
                            <div class="imgBlock">
                                <img src="http://placehold.it/170x190" alt="image description" class="img-fluid"/>
                            </div>
                        </div>
                        <div>
                            <div class="imgBlock">
                                <img src="http://placehold.it/170x190" alt="image description" class="img-fluid"/>
                            </div>
                        </div>
                        <div>
                            <div class="imgBlock">
                                <img src="http://placehold.it/170x190" alt="image description" class="img-fluid"/>
                            </div>
                        </div>
                        <div>
                            <div class="imgBlock">
                                <img src="http://placehold.it/170x190" alt="image description" class="img-fluid"/>
                            </div>
                        </div>
                        <div>
                            <div class="imgBlock">
                                <img src="http://placehold.it/170x190" alt="image description" class="img-fluid"/>
                            </div>
                        </div>
                        <div>
                            <div class="imgBlock">
                                <img src="http://placehold.it/170x190" alt="image description" class="img-fluid"/>
                            </div>
                        </div>
                        <div>
                            <div class="imgBlock">
                                <img src="http://placehold.it/170x190" alt="image description" class="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        */}
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ul class="list-unstyled tabSetList d-flex justify-content-center mb-9">
              <li class="mr-md-20 mr-sm-10 mr-2">
                <a href="#tab1-0" class="active playfair fwEbold pb-2">
                  Description
                </a>
              </li>
            </ul>
            <div class="tab-content mb-xl-11 mb-lg-10 mb-md-8 mb-5">
              <div id="tab1-0" class="active">
                <p>
                  Aenean id ullamcorper libero. Vestibulum imperdiet nibh. Lorem
                  ullamcorper volutpat. Vestibulum lacinia risus. Etiam sagittis
                  ullamcorper volutpat. Vestibulum lacinia risus sed ligula
                  malesuada volutpat.Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas.
                  Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
                  sit amet, ante. Donec eu libero sit amet quam egestas semper.
                  Aenean ultricies mi vitae est. Mauris placerat eleifend leo
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
              </div>
              <div id="tab2-0">
                <p>
                  Aenean id ullamcorper libero. Vestibulum imperdiet nibh. Lorem
                  ullamcorper volutpat. Vestibulum lacinia risus. Etiam sagittis
                  ullamcorper volutpat. Vestibulum lacinia risus sed ligula
                  malesuada volutpat.Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas.
                  Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
                  sit amet, ante. Donec eu libero sit amet quam egestas semper.
                  Aenean ultricies mi vitae est. Mauris placerat eleifend leo
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="featureSec container overflow-hidden pt-xl-12 pb-xl-29 pt-lg-10 pb-lg-14 pt-md-8 pb-md-10 py-5">
        <div class="row">
          <header class="col-12 mainHeader mb-5 text-center">
            <h1 class="headingIV playfair fwEblod mb-4">Related products</h1>
          </header>
        </div>
        <div class="row">
          {plants &&
            plants
              .filter((p) => p.plantType === plant.plantType)
              .map((p) => {
                return (
                  <div class="col-12 col-sm-6 col-lg-3 featureCol position-relative mb-7">
                    <div class="border">
                      <div class="imgHolder position-relative w-100 overflow-hidden">
                        <img
                          src={`http://localhost:8000/${plant.plantImage}`}
                          alt="image description"
                          class="img-fluid w-100"
                        />
                        <ul class="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
                          <li class="mr-2 overflow-hidden">
                            <a
                              href="javascript:void(0);"
                              class="icon-heart d-block"
                            ></a>
                          </li>
                          <li class="mr-2 overflow-hidden">
                            <a
                              href="javascript:void(0);"
                              class="icon-cart d-block"
                            ></a>
                          </li>
                          <li class="mr-2 overflow-hidden">
                            <Link to="/product" class="icon-eye d-block"></Link>
                          </li>
                          <li class="overflow-hidden">
                            <a
                              href="javascript:void(0);"
                              class="icon-arrow d-block"
                            ></a>
                          </li>
                        </ul>
                      </div>
                      <div class="text-center py-5 px-4">
                        <span class="title d-block mb-2">
                          <Link to="/product">{p.plantName}</Link>
                        </span>
                        <span class="price d-block fwEbold">
                          <del>80.50 $</del> {p.plantPrice} br
                        </span>
                        <span class="hotOffer green fwEbold text-uppercase text-white position-absolute d-block">
                          Sale
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </section>
    </>
  );
}

export default ProductMain;
