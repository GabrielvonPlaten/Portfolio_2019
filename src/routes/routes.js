import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sections from 'sections';
import Login from '../views/Login/Login';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Sections} />
        <Route path="/admin/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  )
}
