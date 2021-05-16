import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCustomerComponent from './components/ListCustomerComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCustomerComponent from './components/CreateCustomerComponent';
// import UpdateCustomerComponent from './components/Customer/UpdateCustomerComponent';
import UpdateCustomerComponent from './components/UpdateCustomerComponent';
import ViewCustomerComponent from './components/ViewCustomerComponent';

// product view
import ListProductComponent from './components/ListProductComponent';
// import HeaderComponent from './components/HeaderComponent';
// import FooterComponent from './components/FooterComponent';
import CreateProductComponent from './components/CreateProductComponent';
// import UpdateCustomerComponent from './components/Customer/UpdateCustomerComponent';
import ViewProductComponent from './components/ViewProductComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListCustomerComponent}></Route>
                          <Route path = "/customers" component = {ListCustomerComponent}></Route>
                          <Route path = "/add-customer/:id" component = {CreateCustomerComponent}></Route>
                          <Route path = "/view-customer/:id" component = {ViewCustomerComponent}></Route> 
                          <Route path = "/update-customer/:id" component = {UpdateCustomerComponent}></Route> 

                          {/* product view */}
                          <Route path = "/" exact component = {ListProductComponent}></Route>
                          <Route path = "/products" component = {ListProductComponent}></Route>
                          <Route path = "/add-product/:id" component = {CreateProductComponent}></Route>
                          <Route path = "/view-product/:id" component = {ViewProductComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
