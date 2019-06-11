import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sections from 'sections';
import Login from '../views/Login/Login';
import Profile from '../views/Profile/Profile';

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Sections} />
        <Route path="/admin/login" exact component={Login} />
        <Route path='/profile' exact component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}


export default routes