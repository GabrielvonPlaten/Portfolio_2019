import React, { Component, useEffect  } from 'react';
import AppRoute from 'routes/routes';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

import { loadUser } from './redux/actions/authActions';
import { Provider } from 'react-redux';
import store from './store';

library.add(faAddressBook)

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, []);

  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

export default App;
