import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/globals';

import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Detail from './components/Detail';
import Footer from './components/Footer';
import Nav from './components/Nav';
import SearchContainer from './containers/SearchContainer';
import registerServiceWorker from './registerServiceWorker';
import { store } from './stores';

// tslint:disable:jsx-no-lambda
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact={true} path="/" component={SearchContainer} />
          <Route path="/detail/:id" component={Detail} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
