
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyAccount from "./component/account/MyAccount";
import MyOrders from "./component/account/MyOrders";
import CartList from "./component/cart/CartList";
import Delivery from "./component/cart/Delivery";
import { Footer } from "./component/footer/Footer";
import Header from "./component/header/Header";
import Details from "./view/Details";
import Home from "./view/Home";
import Products from "./view/Products";
import WishList from "./view/WishList";
class App extends Component {
  render() {
    return (
        <Router basename="">  
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
            </Switch>
            <Footer />
          </div>
        </Router>
      
    );
  }
}

export default App;
