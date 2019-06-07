import React, { Component } from 'react';
import AppRoute from 'routes/routes';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

library.add(faAddressBook)

class App extends Component {
  render() {
    return (
      <AppRoute />
    );
  }
}

export default App;
