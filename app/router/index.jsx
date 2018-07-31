/**
 * External dependcies
 */
import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**
 * Internal dependencies
 */
import Loading from 'components/loading';

/**
 * Loadable Components
 */
const Homepage = Loadable({
  loader: () => import('scenes/homepage'),
  loading: Loading,
});
const NotFound = Loadable({
  loader: () => import('scenes/not-found'),
  loading: Loading,
});

class Router extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Router;
