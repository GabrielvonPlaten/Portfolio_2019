import React, { Component } from 'react';
import './App.sass';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

library.add(faAddressBook)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello</h2>
      </div>
    );
  }
}

export default App;
