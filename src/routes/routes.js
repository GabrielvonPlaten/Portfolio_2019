import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';

import Home from 'pages/Home';

export default function routes() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <br />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
