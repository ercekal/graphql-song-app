import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom'
import GET_SONGS from '../queries/fetchSongs'
import DELETE_SONG from '../mutations/deleteSong'
import '../style/style.css'

const SongList = () => {
  const { loading, error, data, refetch } = useQuery(GET_SONGS);
  const [DeleteSong] = useMutation(DELETE_SONG);

  function renderSongs() {
    return data.songs.map(({id, title}) => {
      return (
        <Link
          key={id}
          to={`/song/${id}`}>
          <li className='collection-item'>
            {title}
            <i
            className='material-icons'
              onClick={() => DeleteSong({
                variables: {id: id}
              })
              .then(() => refetch())
            }>delete</i>
          </li>
        </Link>
      )
    })
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <ul className='collection'>
        {renderSongs()}
      </ul>
      <Link
        to='/new'
        className='btn-floating btn-large red right'><i className='material-icons'>add</i>
      </Link>
    </div>
  )
};

export default SongList;