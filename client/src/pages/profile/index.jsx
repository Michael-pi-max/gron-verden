import React from 'react';
import ShopHeader from '../shop/shop-header';
import ShopBanner from '../shop/shop-banner';
import Footer from '../../components/footer';
import ProfileForm from './Profile';


function Profile(props) {
    return (
        <>
            <ShopHeader />
            <ShopBanner />
            <div className="row mt-5">
                <div className="col-md-4">

                </div>
                <div className="col-md-6">
                    <ProfileForm />
                </div>
            </div>
            <Footer />
         </>
    );
}

export default Profile;