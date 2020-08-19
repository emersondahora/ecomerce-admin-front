import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Products from '../pages/Products';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/home" isPrivate component={Home} />
    <Route path="/products" isPrivate component={Products} />
  </Switch>
);

export default Routes;
