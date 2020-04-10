import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './modules/frontend/home/home';
import Contact from './modules/frontend/contact/contact';
import About from './modules/frontend/about/about';
import DashboardLayoutRoute from "./layouts/frontend";  
import Products from "./modules/frontend/products/products"
class App extends Component {

  render() {
    return (
    <Router>  
      <Switch>  
            <Route exact path="/">  
            <Redirect to="/home" />  
            </Route>  
            <DashboardLayoutRoute exact  path="/products" component={Products} /> 
            <DashboardLayoutRoute exact  path="/contact" component={Contact} /> 
            <DashboardLayoutRoute exact  path="/aboutus" component={About} /> 
            <DashboardLayoutRoute  exact  path="/home"
            component={props => <Home {...props} name="lol" />}
            /> 
      </Switch>  
    </Router>  
    );
  }
}

const mapStateToProps =state=>({
  products :state.products,
  user :state.user
});

export default connect(mapStateToProps)(App);

