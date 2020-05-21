import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import DELETE_LYRIC from '../mutations/deleteLyric'

const LyricList = ({lyrics, refetch}) => {
  const [DeleteLyric] = useMutation(DELETE_LYRIC);

  return (
    <ul className='collection'>
      {lyrics.map(({content, id}, i) =>
        <li key={i} className='collection-item'>
          {content}
          <div className='collection-item-icons'>

            <i className='material-icons'
              onClick={() => DeleteLyric({
                variables: {id: id}
              })
              .then(() => refetch())
            }>delete</i>
          </div>
        </li>)}
    </ul>
  );
};

export default LyricList;