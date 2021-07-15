import React from 'react';
import { Link } from 'react-router-dom';

function ShopHeader(props) {
  return (
    <header id="header" class="position-relative">
      <div class="headerHolder container pt-lg-5 pb-lg-7 py-4">
        <div class="row">
          <div class="col-6 col-sm-2">
            <div class="logo">
              <Link to="/">
                <img
                  src="/images/logo.png"
                  alt="Grøn Verden"
                  class="img-fluid"
                />
              </Link>
            </div>
          </div>
          <div class="col-6 col-sm-7 col-lg-8 static-block">
            <div class="mainHolder pt-lg-5 pt-3 justify-content-center">
              <nav class="navbar navbar-expand-lg navbar-light p-0 pageNav2 position-static">
                <button
                  type="button"
                  class="navbar-toggle collapsed position-relative"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-expanded="false"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav mx-auto text-uppercase d-inline-block">
                    <li class="nav-item">
                      <Link class="d-block" to="/">
                        Home
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="d-block" to="/shop-admin">
                        My Shop
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="d-block" to="/shops">
                        Shops
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="d-block" to="/learn">
                        Learn
                      </Link>
                    </li>

                    <li class="nav-item">
                      <Link class="d-block" to="/cart">
                        Cart
                      </Link>
                    </li>

                    <li class="nav-item">
                      <Link class="d-block" to="/gron">
                        Gron
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div class="col-sm-3 col-lg-2">
            <ul class="nav nav-tabs wishListII pt-5 justify-content-end border-bottom-0">
              <li class="nav-item">
                <Link class="nav-link icon-profile" to="/profile"></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ShopHeader;
