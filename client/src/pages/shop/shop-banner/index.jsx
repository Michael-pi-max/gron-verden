import React from 'react';
import { Link } from 'react-router-dom';

function ShopBanner({ bannerTitle }) {
  return (
    <section
      class="introBannerHolder d-flex w-100 bgCover"
      style={{
        backgroundImage:
          'url(http://htmlbeans.com/html/botanical/images/b-bg7.jpg)',
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center">
            <h1 class="headingIV fwEbold playfair mb-4">{bannerTitle}</h1>
            <ul class="list-unstyled breadCrumbs d-flex justify-content-center">
              <li class="mr-2">
                <Link href="/">Home</Link>
              </li>
              <li class="mr-2">/</li>
              <li class="mr-2">
                <a href="shop.html">Shop</a>
              </li>
              <li class="mr-2">/</li>
              <li class="active">Pellentesque aliquet</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopBanner;
