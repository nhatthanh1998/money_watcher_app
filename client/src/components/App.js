import React, { Component } from "react";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import Routes from "./Router";
import { withClientState } from "apollo-link-state";
import { ApolloLink } from "apollo-link";

const cache = new InMemoryCache({
  dataIdFromObject: object => object._id || null
});

const linkState = withClientState({
  cache,
  defaults: {
    totalExpend: {
      __typename: "expend",
      value: 0
    },
    totalIncome: {
      __typename: "income",
      value: 0
    }
  }
});

export const client = new ApolloClient({
  link: ApolloLink.from([
    linkState,
    new HttpLink({
      uri: "http://localhost:4000/graphql"
    })
  ]),
  cache
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}
