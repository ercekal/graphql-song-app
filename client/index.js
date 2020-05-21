import 'react-hot-loader'
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { HashRouter } from 'react-router-dom'
import App from './App'

const client = new ApolloClient({
  dataIdFromObject: o => o.key || null
});

const Root = () => {
  return (
    <HashRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </HashRouter>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
