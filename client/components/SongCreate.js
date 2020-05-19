import React, {useState} from 'react';

const SongCreate = () => {
  const [title, setTitle] = useState('')
  return (
    <div>
      <h3>Create a new song</h3>
      <form>
        <label>Song title</label>
        <input onChange={e => setTitle(e.target.value)} value={title} />
      </form>
    </div>
  );
};

export default SongCreate;