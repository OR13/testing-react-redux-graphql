import React, { Component } from "react";

import { ConnectedRouter } from "react-router-redux";
import { Route, Switch } from "react-router";

import { ApolloProvider } from "react-apollo";
import client from "../Apollo";

import App from "../App";
import { store, history } from "../Store";

class Routes extends Component {
  render() {
    return (
      <ApolloProvider client={client} store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </ConnectedRouter>
      </ApolloProvider>
    );
  }
}

export default Routes;
