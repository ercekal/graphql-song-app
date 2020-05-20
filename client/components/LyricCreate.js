import React, {useState} from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { Link, useHistory } from 'react-router-dom'
import ADD_LYRIC from '../mutations/addLyric'
import GET_SONG from '../queries/fetchSong'

export default function LyricCreate({songId}) {
  const [lyric, setLyric] = useState('')
  const [AddLyric] = useMutation(ADD_LYRIC);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          AddLyric(
            { variables: { content: lyric, songId },
          })
          .then(() => { setLyric('')},
            error => { console.log(error) })
        }}
      >
        <input
          value={lyric}
          onChange={e => (setLyric(e.target.value))}
        />
        <button type="submit">Add Lyric</button>
      </form>
    </div>
  );
}