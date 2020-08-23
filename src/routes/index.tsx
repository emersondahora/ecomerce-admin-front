import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductsForm from '../pages/ProductsForm';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/home" isPrivate component={Home} />
    <Route path="/products/:product_id" isPrivate component={ProductsForm} />
    <Route path="/products" isPrivate component={Products} />
  </Switch>
);

export default Routes;
