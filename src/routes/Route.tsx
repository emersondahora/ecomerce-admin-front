import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
} from 'react-router-dom';

import PublicLayout from '../layouts/public';
import DefaultLayout from '../layouts/default';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const Layout: React.FC = isPrivate ? DefaultLayout : PublicLayout;

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return (
          <Layout>
            <Component />
          </Layout>
        );
      }}
    />
  );
};

export default Route;
