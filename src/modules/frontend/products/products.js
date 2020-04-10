import React, { Component } from 'react';
import './products.css';
import {BAKEND_API_URL} from '../../../constants/config';
import axios from 'axios';
import Pagination from "react-js-pagination";
class Products extends Component {
      state = {
        products: [],
        activePage:1,
        totalItem:0
      }
    constructor(props) {
        super(props);
      }
      
      componentDidMount() {
        let payload= {page:1};
        this.callAPi(payload);
      }

      callAPi(payload){
       let params= {
          page:payload.page
        }
        axios.get(BAKEND_API_URL+`ads`,{params})
          .then(res => {
            this.setState({products:res.data.data,totalItem:res.data.total});
          }).catch(err=>{
            this.setState({products:[]});
          });
      }
      handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
        // return false;
        let payload= {page:pageNumber};
        this.callAPi(payload);
      }
     
      loadProducts() {
        let products=
        this.state.products.map(item => (
           <div className="col-sm-4 col-xs-12" key={item._id}>
          <div className="panel panel-default text-center">
            <div className="panel-heading">
              <h1>{item.name}</h1>
            </div>
            <div className="panel-body">
            <img src={item.image} width="100" height="100" />
            <br/>
            {item.address.city}  {item.address.state}-{item.address.pincode}
            <br/>
            </div>
            <div className="panel-footer">
              <h3>Rs.{item.price}</h3>
              <h4>Rating {item.rating}</h4>
            </div>
          </div>      
        </div>
        ))
        
        return products;
      }
      
  render() {
    
    return (
        <React.Fragment>
        
        <div id="pricing" className="container-fluid about_body">
            <div className="text-center">
              <h2>Pricing</h2>
              <h4>Choose a payment plan that works for you</h4>
            </div>
            <div className="row slideanim">
              {this.loadProducts()}
            </div>
            <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={9}
          totalItemsCount={81}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
          />

          {/* <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={9}
          totalItemsCount={this.state.totalItem}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
          /> */}
        </div>
         
      </React.Fragment>
    );
  }
}

export default Products;
