import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route,Link } from 'react-router-dom';

import store, { history } from './store';

import Home from './screens/Home';
import GitHubUsers from './screens/GitHubUsers';
import GitHubUserDetails from './screens/GitHubUsers/GitHubUserDetails';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/github-users" component={GitHubUsers}/>
            <Route exact path="/github-users-detail/:id" component={GitHubUserDetails} />
            {/* <Route path="/:id" component={Child} /> */}
            {/* <Link to="/modus-create">Modus Create</Link> */}
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}


