import React, {useState} from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const ADD_SONG = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      id
    }
  }
`;

export default function SongCreate() {
  const [title, setTitle] = useState('')

  let input;
  const [AddSong] = useMutation(ADD_SONG);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          AddSong({ variables: { title } });
          input.value = '';
        }}
      >
        <input
          value={title}
          onChange={e => (setTitle(e.target.value))}
          ref={n => (input = n)}
        />
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
}