import React, { useEffect } from 'react';
import ShopHeader from '../shop/shop-header';
import ShopBanner from '../shop/shop-banner';
import Footer from '../../components/footer';
import IdentifyPlantForm from './IdentifyPlantForm';
import { plantVariableGlobal } from '../../store/shop/action';
import IdentifyPlantCard from './IdentifyPlantCard';

function IdentifyPlant(props) {
  return (
    <div>
      <ShopHeader />
      <ShopBanner bannerTitle="Plant Detection AI"/>
      {/* One time ???? */}
      <IdentifyPlantForm />
      {/* <div className="container">
                {plantVariableGlobal 
                    ?
                    <>
                        <IdentifyPlantCard />
                    </> 
                    : 
                    <p>0</p>} 
            </div> */}
      <Footer />
    </div>
  );
}

export default IdentifyPlant;
