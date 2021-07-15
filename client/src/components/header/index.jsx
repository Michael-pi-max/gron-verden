import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from 'antd';
import { logOut } from '../../store/user/action';

const Header = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const onLogOut = () => {
    dispatch(logOut());
  };
  return (
    <header
      id="header"
      className="pt-lg-5 pt-md-3 pt-2 position-absolute w-100"
    >
      <div className="container-fluid px-xl-17 px-lg-5 px-md-3 px-0 d-flex flex-wrap">
        <div className="col-6 col-sm-3 col-lg-2 order-sm-2 order-md-0 dis-none">
          <ul className="nav nav-tabs langList pt-xl-6 pt-lg-4 pt-3 border-bottom-0">
            <li className="dropdown">
              <a
                className="dropdown-toggle text-uppercase"
                data-toggle="dropdown"
                href="javascript:void(0);"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ENG
              </a>
              <div className="dropdown-menu pl-4 pr-4">
                <a className="dropdown-item" href="javascript:void(0);">
                  English
                </a>
                <a className="dropdown-item" href="javascript:void(0);">
                  Amharic
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-lg-8 static-block">
          <div className="mainHolder justify-content-center">
            <nav className="navbar navbar-expand-lg navbar-light p-0 pageNav1 position-static">
              <button
                type="button"
                className="navbar-toggle collapsed position-relative mt-md-2"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto text-uppercase d-inline-block">
                  <li class="nav-item">
                    <Link class="d-block" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="d-block" to="/shop-admin">
                      My shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="d-block" to="/shops">
                      Shops
                    </Link>
                  </li>{' '}
                  <li className="nav-item">
                    <Link className="nLogo" to="/">
                      <img
                        src="images/logo.png"
                        alt="Grøn Verden"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="d-block" to="/learn">
                      Learn
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="d-block" to="/cart">
                      Cart
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="d-block" to="about-us.html">
                      Gron
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="logo">
              <a href="home.html">
                <img
                  src="images/logo.png"
                  alt="Botanical"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-3 col-lg-2 order-sm-3 order-md-0 dis-none">
          <ul className="nav nav-tabs wishList pt-xl-5 pt-lg-4 pt-3 mr-xl-3 mr-0 justify-content-end border-bottom-0">
            <li>
              {!user ? (
                <>
                  <Link className="pr-5" to="/login">
                    Login
                  </Link>
                  <Link className="" to="/register">
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <div className="d-flex">
                    <span className="mt-1" style={{ width: 180 }}>
                      Hi, {user.firstName}
                    </span>
                    <button
                      className="dropdown-item text-danger"
                      onClick={onLogOut}
                    >
                      Logout
                    </button>
                  </div>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
