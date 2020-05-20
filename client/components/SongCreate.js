import React, {useState} from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { Link, useHistory } from 'react-router-dom'
import GET_SONGS from '../queries/fetchSongs'
import ADD_SONG from '../mutations/addSong'

export default function SongCreate() {
  let history = useHistory();
  const [title, setTitle] = useState('')
  const [AddSong] = useMutation(ADD_SONG);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          AddSong(
            { variables: { title },
            refetchQueries: [{query: GET_SONGS}] }
          )
          .then(() => { history.push('/') },
            error => { console.log(error) })
        }}
      >
        <input
          value={title}
          onChange={e => (setTitle(e.target.value))}
        />
        <button type="submit">Add Song</button>
        <Link to='/' className='btn-floating btn-large red right'>Back</Link>
      </form>
    </div>
  );
}