import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// import redux store
import store from './store';

// Actions
import { getAllBills } from './actions/billActions';

// Css and styles
import './style/theme.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSyncAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

// Components
import Layout from './pages/Layout';

library.add(faCircle, faCheckCircle, faSyncAlt, faPlus);

const { bills } = store.getState().billReducer;

if (bills.length === 0) {
  store.dispatch(getAllBills());
}

document.title = 'Accounts Payable To-Do';
render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
);
