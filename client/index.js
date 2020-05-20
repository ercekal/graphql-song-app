import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Route, HashRouter, Switch } from 'react-router-dom'
import SongList from './components/SongList'
import SongCreate from './components/SongCreate'
import SongDetail from './components/SongDetail'

const client = new ApolloClient({});

const Root = () => {
  return (
    <HashRouter>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path='/' component={SongList} />
          <Route path='/new' component={SongCreate} />
          <Route path='/songs/:id' component={SongDetail} />
        </Switch>
      </ApolloProvider>
    </HashRouter>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
