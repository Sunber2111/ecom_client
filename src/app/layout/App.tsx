import React, { Fragment, useEffect, useState } from "react";
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import HomePage from "../../features/HomePage";
import Carts from "features/Cart";
import "./App.scss";
import Header from "features/Header";
import Footer from "features/Footer";
import ProductPage from "features/Products";
import AccountPage from "features/Account";
import Address from "features/Address";
import Order from "features/Order";
import Payment from "features/Payment";
import accountApi from "app/api/account";
import { useDispatch } from "react-redux";
import { setLoginSuccess } from "features/Account/accountSlice";
import { ToastContainer } from "react-toastify";
import OrderHistory from "features/OrderHistory";
import Policy from "features/Policy";
import Chat from "features/Chat";
import About from "features/About";

const App: React.FC<RouteComponentProps> = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    accountApi
      .current()
      .then((data) => {
        dispatch(setLoginSuccess(data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div> Loading....</div>;

  return (
    <Fragment>
      <ToastContainer />
      <Chat />
      <Header />
      <div className="content-route">
        <Route exact path="/" component={HomePage} />
        <Switch>
          <Route path="/products" key={location.key} component={ProductPage} />
          <Route path="/policy" component={Policy} />
          <Route path='/about' component={About} />
          <Route exact path="/cart" component={Carts} />
          <Route exact path="/account" component={AccountPage} />
          <Route exact path="/address" component={Address} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/orderhistory" component={OrderHistory} />
        </Switch>
      </div>
      <Footer />
    </Fragment>
  );
};

export default withRouter(App);
