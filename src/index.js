// require('es5-shim');
// require('es5-shim/es5-sham');
// require('console-polyfill');
require('es6-promise');
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga-ie8';
import reducer from './reducers';
import {root} from './sagas/index';
import register from './containers/register';
import Homes from './containers/home';
import Seting from './containers/set';
import Login from './containers/login';
import Seting2 from './components/set2';
import { Router, Route, hashHistory,IndexRoute} from 'react-router';
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(root)
ReactDOM.render(
	<Provider store={store}>
       <Router history={hashHistory}>
          <IndexRoute  component={Homes}/>
             <Route path="/" component={Homes}></Route>
             <Route path="/home" component={Homes}></Route>
             <Route path="/set" component={Seting}></Route>
             <Route path="/set2" component={Seting2}></Route>
             <Route path="/login" component={Login}></Route>
		    <Route path="/register" component={register}></Route>
		 </Router>
    </Provider>,
    document.getElementById('app')
);


