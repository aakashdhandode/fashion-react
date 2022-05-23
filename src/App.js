
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyAccount from "./component/account/MyAccount";
import MyAddress from "./component/account/MyAddress";
import MyOrders from "./component/account/MyOrders";
import OrderSummery from "./component/account/OrderSummery";
import CartList from "./component/cart/CartList";
import Delivery from "./component/cart/Delivery";
import { Footer } from "./component/footer/Footer";
import Header from "./component/header/Header";
import Details from "./view/Details";
import Home from "./view/Home";
import About from "./view/pages/About";
import Contact from "./view/pages/Contact";
import PrivacyPolicy from "./view/pages/PrivacyPolicy";
import ReturnPolicy from "./view/pages/ReturnPolicy";
import TermsConditions from "./view/pages/TermsConditions";
import Products from "./view/Products";
import WishList from "./view/WishList";
class App extends Component {
  render() {
    return (
        <Router basename="fashion-app">  
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/details" component={Details} />
              <Route exact path="/wishlist" component={WishList} />
              <Route exact path="/cart" component={CartList} />
              <Route exact path="/rdelivey"component ={Delivery} />
              <Route exact path="/myaccount"component ={MyAccount} />
              <Route exact path="/myorders"component ={MyOrders} />
              <Route exact path="/myaddress"component ={MyAddress} />
              <Route exact path="/ordersummery"component ={OrderSummery} />

              <Route exact path="/about"component ={About} />
              <Route exact path="/contact"component ={Contact} />
              <Route exact path="/terms-conditions"component ={TermsConditions} />
              <Route exact path="/privacy-policy"component ={PrivacyPolicy} />
              <Route exact path="/return-policy"component ={ReturnPolicy} />

            </Switch>
            <Footer />
          </div>
        </Router>
      
    );
  }
}

export default App;
