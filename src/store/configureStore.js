import {createStore, combineReducers,applyMiddleware,compose} from 'redux';
 import productsReducer from '../reducers/productsReducers';
 import userReducer from '../reducers/userReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myLogger=(store)=>(next)=>(action)=>{
    next(action);
};
export default ()=>{
    const store = createStore(
        combineReducers({
            products:productsReducer,
            user:userReducer
        }),composeEnhancers(applyMiddleware(myLogger))
    );
    return store;
};