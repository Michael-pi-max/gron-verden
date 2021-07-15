import { Switch, Route, Redirect } from 'react-router-dom';
import SignUp from './pages/sign-up';
import Login from './pages/login';
import Home from './pages/home';
import NotFound from './pages/not-found';
import useScript from './customHook/importScript';
import ShopDetail from './pages/shop';
import Shop from './pages/shop';
import Product from './pages/product';
import ShopList from './pages/shopList';
import Profile from './pages/profile';
import CreateShop from './pages/my-shop/create-shop';
import ShopAdmin from './pages/my-shop';

import { Spin } from 'antd';

import './public/css/bootstrap.css';
import './public/css/fontawesome.css';
import './public/css/style.css';
import './public/css/color.css';
import './public/css/responsive.css';

import LearnSection from './pages/learn';
import CartSection from './pages/cart/CartSection';
import IdentifyPlant from './pages/identifyPlant';
import EventSection from './pages/event';

const App = () => {
  useScript('/js/jquery-3.4.1.min.js');
  useScript('/js/popper.min.js');
  useScript('/js/bootstrap.min.js');
  useScript('/js/jqueryCustome.js');

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/shops" component={ShopList} />
        <Route exact path="/shops/:id" component={Shop} />
        <Route exact path="/product/:id" component={Product} />
        <Route path="/profile" component={Profile} />
        <Route path="/shop-admin" component={ShopAdmin} />
        <Route path="/learn" component={LearnSection}></Route>
        <Route path="/cart" component={CartSection}></Route>
        <Route path="/gron" component={IdentifyPlant}></Route>
        <Route path="/event" component={EventSection}></Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
