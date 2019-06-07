import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sections from 'sections';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Sections} />
      </Switch>
    </BrowserRouter>
  )
}
