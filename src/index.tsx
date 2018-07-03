import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/globals';

import { ConnectedRouter } from 'connected-react-router';
import { Redirect, Route, Switch } from 'react-router';
import Footer from './components/Footer';
import Nav from './components/Nav';
import SearchContainer from './containers/SearchContainer';
import registerServiceWorker from './registerServiceWorker';
import { history, store } from './stores';

// tslint:disable:jsx-no-lambda
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact={true} path="/" component={SearchContainer} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <Footer />
      </React.Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
