import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/globals';

import { Redirect, Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import Footer from './components/Footer';
import Nav from './components/Nav';
import TodoContainer from './containers/TodoContainer';
import registerServiceWorker from './registerServiceWorker';
import { history, store } from './stores';

// tslint:disable:jsx-no-lambda
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact={true} path="/" component={TodoContainer} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <Footer />
      </React.Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
