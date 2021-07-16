import React from 'react';
import ShopHeader from '../shop/shop-header';
import ShopBanner from '../shop/shop-banner';
import Footer from '../../components/footer';
import ProfileForm from './Profile';
import { Progress } from 'antd';
import { useSelector } from 'react-redux';

function Profile(props) {
  const { user: userObject, fetchUserLoading } = useSelector(
    (state) => state.user
  );
  console.log(userObject);
  return (
    <>
      <ShopHeader />
      <ShopBanner bannerTitle="Profile" />
      <div className="row mt-5">
        <div className="offset-2"></div>
        <div className="col-3">
          <div className="row text-center">
            <div className="col-6 mb-5">
              <img
                style={{ width: 400 }}
                src={`http://localhost:8000/${userObject.profilePicture}`}
              />
            </div>
            Event Participation ({userObject.events.length + 1} events
            participated)
            <div className="col-12 mt-2">
              <Progress type="circle" percent={userObject.events.length + 1} />
            </div>
          </div>
        </div>
        <div className="col-5">
          <ProfileForm user={userObject} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
