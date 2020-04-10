import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
  import Nav from '../modules/frontend/nav/nav';
  import Footer from '../modules/frontend/foot/footer';
const DashboardLayout = ({children, ...rest}) => {  
  return (  
            <React.Fragment>
                  <Nav/> 
                {children}
                <Footer/> 
            </React.Fragment>
     
  )  
}  
  
const DashboardLayoutRoute = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={matchProps => (  
      <DashboardLayout>  
          <Component {...matchProps} />  
      </DashboardLayout>  
    )} />  
  )  
};  
  
export default DashboardLayoutRoute;  