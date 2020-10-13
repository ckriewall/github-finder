import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
  const alertContext = useContext(AlertContext);
  const githubContext = useContext(GithubContext);

  // useState() hook
  //    accepts: a default value (e.g. an empty string like '')
  //    returns: the current state (e.g. text) and a function that updates it (e.g. setText)
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <p>GitHub API rate limits apply to these anonymous searches.</p>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search users...'
          value={text}
          onChange={onChange}
        />
        <input className='btn btn-block btn-dark' type='submit' name='' />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-block btn-light'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
