import React from 'react';
import ShopHeader from '../shop/shop-header';
import ShopBanner from '../shop/shop-banner';
import CartBody from './CartBody';
import Footer from '../../components/footer';

const CartSection = (props) => {
  return (
    <div>
      <ShopHeader />
      <ShopBanner />
      <CartBody />
      <Footer />
    </div>
  );
};

export default CartSection;
