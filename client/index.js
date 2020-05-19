import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Route, Link, Switch, BrowserHistory, BrowserRouter as Router } from 'react-router-dom'
import SongList from './components/SongList'
import SongCreate from './components/SongCreate'
import App from './components/App'

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={BrowserHistory}>
        <Switch>
          <Route exact path="/" component={SongList} />
          <Route path='song/new' component={SongCreate} />
        </Switch>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
