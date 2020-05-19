import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

const SONGS = gql`
  {
    songs {
      title
      id
    }
  }
`;

const SongList = () => {
  const { loading, error, data } = useQuery(SONGS);

  function renderSongs() {
    return data.songs.map(song => {
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

export default SongList;