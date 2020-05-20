import React from 'react';
import {Link, useParams} from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import GET_SONG from '../queries/fetchSong'
import LyricCreate from './LyricCreate'
import LyricList from './LyricList'

const SongDetail = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(GET_SONG, {
    variables: { id },
  });
  if (loading) {
    return <div>Loading...</div>
  }

  const {song: {title, lyrics}} = data
  console.log('data: ', data);
  return (
    <div>
      <h3>{title}</h3> <br />
      <LyricList lyrics={lyrics} />
      
      <LyricCreate songId={id}/>
      <Link to='/' className='btn-floating btn-large red right'>Back</Link>
    </div>
  );
};

export default SongDetail;