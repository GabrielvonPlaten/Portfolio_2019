import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Sections from 'sections';
import Login from '../views/Login/Login';
import Profile from '../views/Profile/Profile';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest}) => (
  <Route {...rest} render={props => (
    isAuthenticated === true 
    ? <Component {...props} />
    : <Redirect to='/admin/login'/>
  )}/>
)

const routes = ({ isAuthenticated }) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Sections} />
        <Route path="/admin/login" exact component={Login} />
        <PrivateRoute isAuthenticated={isAuthenticated} path='/profile' component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(routes)