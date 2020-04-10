import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();
store.dispatch({
  type:"LOGIN",
  payload:{
    name:"hey yogi",
    email:"hey yogi@gmail.com"
  }
});
ReactDOM.render(
  <Provider store={store}>
<App /> 
</Provider>,
 document.getElementById('root'));
 serviceWorker.unregister();
