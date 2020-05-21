import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import SongList from './components/SongList'
import SongCreate from './components/SongCreate'
import SongDetail from './components/SongDetail'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={SongList} />
        <Route path='/new' component={SongCreate} />
        <Route path='/song/:id' component={SongDetail} />
      </Switch>
    </div>
  );
};

export default hot(App);