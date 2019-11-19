import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware ,combineReducers } from 'redux';
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import reduce from "./components/store/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });
var reducers = combineReducers({
  reduce
})
// console.log("init index")
// var a = $.map(reducers,(key,val)=>console.log(key,val));
export const store = createStore( reducers , composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
  ));

  store.subscribe(()=>{
    console.log("[susb] ",store.getState());
});
ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
