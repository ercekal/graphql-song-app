import React from 'react';

const LyricList = ({lyrics}) => {
  return (
    <ul className='collection'>
      {lyrics.map((l, i) => <li key={i} className='collection-item'>{l.content}</li>)}
    </ul>
  );
};

export default LyricList;