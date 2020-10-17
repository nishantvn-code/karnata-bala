import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './route';

import { Provider } from 'react-redux'; 
import configureStore from '../src/config-store';

import {createBrowserHistory} from "history";

const history = createBrowserHistory();

// Initialize store
const store = configureStore();


ReactDOM.render(
  <Provider store={store} >
  <Routes history={history} />
  </Provider>,
  document.getElementById('root')
);

