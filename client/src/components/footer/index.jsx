import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <div
      style={{
        backgroundImage:
          "url('http://landing.engotheme.com/html/hamadryad/demo/images/background/bg-footer.jpg')",
        color: '#fff',
      }}
    >
      <aside className="footerHolder container-fluid overflow-hidden px-xl-20 px-lg-14 pt-xl-12 pb-xl-8 pt-lg-12 pt-md-8 pt-10 pb-lg-8">
        <div className="d-flex flex-wrap flex-lg-nowrap">
          <div className="coll-1 pr-3 mb-sm-4 mb-3 mb-lg-0">
            <h3
              className="headingVI fwEbold text-uppercase mb-7"
              style={{ color: '#fff' }}
            >
              Contact Us
            </h3>
            <ul className="list-unstyled footerContactList mb-3">
              <li className="mb-3 d-flex flex-nowrap">
                <span
                  className="icon icon-place mr-3"
                  style={{ color: '#aaaaaa' }}
                ></span>{' '}
                <address className="fwEbold m-0" style={{ color: '#aaaaaa' }}>
                  Address: Addis Ababa, Ethiopia.
                </address>
              </li>
              <li className="mb-3 d-flex flex-nowrap">
                <span
                  className="icon icon-phone mr-3"
                  style={{ color: '#aaaaaa' }}
                ></span>{' '}
                <span className="leftAlign" style={{ color: '#aaaaaa' }}>
                  Phone :{' '}
                  <a href="javascript:void(0);" style={{ color: '#aaaaaa' }}>
                    (+251) 953 894183 <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(+251)
                    966 303009
                  </a>
                </span>
              </li>
              <li className="email d-flex flex-nowrap">
                <span
                  className="icon icon-email mr-2"
                  style={{ color: '#aaaaaa' }}
                ></span>{' '}
                <span className="leftAlign" style={{ color: '#aaaaaa' }}>
                  Email:{' '}
                  <a href="javascript:void(0);" style={{ color: '#aaaaaa' }}>
                    michael@eshidigital.com <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    semere@eshidigital.com
                  </a>
                </span>
              </li>
            </ul>
            <ul className="list-unstyled followSocailNetwork d-flex flex-nowrap">
              <li
                className="fwEbold mr-xl-11 mr-sm-6 mr-4"
                style={{ color: '#aaaaaa' }}
              >
                Follow us:
              </li>
              <li className="mr-xl-6 mr-sm-4 mr-2">
                <Link
                  to="https://www.facebook.com/semere.talegn"
                  className="fab fa-facebook-f"
                ></Link>
              </li>
              <li className="mr-xl-6 mr-sm-4 mr-2">
                <Link to="" className="fab fa-twitter"></Link>
              </li>
              <li className="mr-xl-6 mr-sm-4 mr-2">
                <Link to="" className="fab fa-pinterest"></Link>
              </li>
              <li className="mr-2">
                <Link
                  to="javascript:void(0);"
                  className="fab fa-google-plus-g"
                ></Link>
              </li>
            </ul>
          </div>
          <div className="coll-2 mb-sm-4 mb-3 mb-lg-0">
            <h3
              className="headingVI fwEbold text-uppercase mb-6"
              style={{ color: '#fff' }}
            >
              Information
            </h3>
            <ul className="list-unstyled footerNavList">
              <li className="mb-1">
                <Link to="/shop-admin" style={{ color: '#aaaaaa' }}>
                  New Plants
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/shops" style={{ color: '#aaaaaa' }}>
                  Shops
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/learn" style={{ color: '#aaaaaa' }}>
                  Learn
                </Link>
              </li>
              <li>
                <Link to="/cart" style={{ color: '#aaaaaa' }}>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="coll-3 mb-sm-4 mb-3 mb-lg-0">
            <h3
              className="headingVI fwEbold text-uppercase mb-6"
              style={{ color: '#fff' }}
            >
              My Account
            </h3>
            <ul className="list-unstyled footerNavList">
              <li className="mb-1">
                <a href="/profile" style={{ color: '#aaaaaa' }}>
                  Profile
                </a>
              </li>

              <li className="mb-2">
                <Link to="/shop-admin" style={{ color: '#aaaaaa' }}>
                  My shop
                </Link>
              </li>
            </ul>
          </div>
          <div className="coll-4 mb-sm-4 mb-3 mb-lg-0">
            <h3
              className="headingVI fwEbold text-uppercase mb-7 pl-xl-14 pl-lg-10"
              style={{ color: '#fff' }}
            >
              Popular Tag
            </h3>
            <ul className="list-unstyled tagNavList d-flex flex-wrap justify-content-lg-end mb-0">
              <li className="text-center mb-2 mr-2">
                <a
                  href="javascript:void(0);"
                  className="md-round d-block py-2 px-2"
                  style={{ color: '#aaaaaa' }}
                >
                  Indoor plant
                </a>
              </li>
              <li className="text-center mb-2">
                <a
                  href="javascript:void(0);"
                  className="md-round d-block py-2 px-2"
                  style={{ color: '#aaaaaa' }}
                >
                  Office plant
                </a>
              </li>
              <li className="text-center mb-2 mr-2">
                <a
                  href="javascript:void(0);"
                  className="md-round d-block py-2 px-2"
                  style={{ color: '#aaaaaa' }}
                >
                  Cactus plant
                </a>
              </li>
              <li className="text-center mb-2">
                <a
                  href="javascript:void(0);"
                  className="md-round d-block py-2 px-2"
                  style={{ color: '#aaaaaa' }}
                >
                  Table tree plant
                </a>
              </li>
              <li className="text-center mb-2">
                <a
                  href="javascript:void(0);"
                  className="md-round d-block py-2 px-2"
                  style={{ color: '#aaaaaa' }}
                >
                  House plant
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      {/* footer */}
      <footer id="footer" className="container-fluid overflow-hidden px-lg-20">
        <div className="copyRightHolder text-center pt-lg-5 pb-lg-4 py-3">
          <p className="mb-0">
            Copyright 2021 by <Link to="/">Grøn Verden</Link> - All right
            reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
