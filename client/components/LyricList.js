import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import DELETE_LYRIC from '../mutations/deleteLyric'
import LIKE_LYRIC from '../mutations/likeLyric'

const LyricList = ({lyrics, refetch}) => {
  const [DeleteLyric] = useMutation(DELETE_LYRIC);
  const [LikeLyric] = useMutation(LIKE_LYRIC);

  return (
    <ul className='collection'>
      {lyrics.map(({content, id, likes}, i) =>
        <li key={i} className='collection-item'>
          {content}
          <div className='collection-item-icons'>
            <i className='material-icons'
              onClick={() => LikeLyric({
                variables: {id: id}
              })
            }>thumb_up</i> {likes}
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