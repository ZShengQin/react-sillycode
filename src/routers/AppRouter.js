import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'
import Show from '../pages/Show'
import SHeader from '../components/SHeader';
import SFooter from '../components/SFooter'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <SHeader />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/show' component={ Show } />
        </Switch>
        <SFooter />
      </div>
    </BrowserRouter>
  )
}

export default AppRouter;