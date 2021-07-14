import React from 'react';
import ShopHeader from '../shop/shop-header';
import ShopBanner from '../shop/shop-banner';
import Footer from '../../components/footer';
import ShopCategory from '../categories/ShopCategory';

import { useSelector } from 'react-redux';

function ShopList(props) {
  const { shops, page, limit, total, fetchShopsLoading } = useSelector(
    (state) => state.shop
  );

  console.log(shops);

  return (
    <div>
      <ShopHeader />
      <ShopBanner bannerTitle="Shops" />
      <div style={{ marginTop: '30px' }}>
        <ShopCategory shops={shops} />
      </div>
      <Footer />
    </div>
  );
}

export default ShopList;
