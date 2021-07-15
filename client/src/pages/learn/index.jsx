import React from 'react';

import ShopHeader from '../shop/shop-header';
import ShopBanner from '../shop/shop-banner';
import LearnBody from './LearnBody';
import Footer from '../../components/footer';

function LearnSection(props) {
  return (
    <div>
      <ShopHeader />
      <ShopBanner bannerTitle="Learn"/>
      <LearnBody />
      <Footer />
    </div>
  );
}

export default LearnSection;
