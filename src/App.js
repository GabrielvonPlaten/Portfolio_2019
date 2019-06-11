import React, { Component } from 'react';
import AppRoute from 'routes/routes';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

import { Provider } from 'react-redux';
import store from './store';

library.add(faAddressBook)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoute />
      </Provider>
    );
  }
}

export default App;
