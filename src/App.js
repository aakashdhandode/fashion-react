
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./component/footer/Footer";
import Header from "./component/header/Header";
import Details from "./view/Details";
import Home from "./view/Home";
import Products from "./view/Products";
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
            </Switch>
            <Footer />
          </div>
        </Router>
      
    );
  }
}

export default App;
