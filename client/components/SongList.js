import React from 'react';
import qgl from 'graphql-tag'
import {graphql} from 'react-apollo'


const SongList = ({data: {loading, error, songs}}) => {
  function renderSongs() {
    return songs.map(song => {
      return (
        <li key={song.id}>
          {song.title}
        </li>
      )
    })
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      {renderSongs()}
    </div>
  )
};


const query = qgl`
  {
    songs {
      title
      id
    }
  }
`
export default graphql(query)(SongList);