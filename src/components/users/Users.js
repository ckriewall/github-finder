import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'ckriewall',
        avatar_url:
          'https://avatars1.githubusercontent.com/u/16513447?s=40&v=4',
        html_url: 'https://github.com/ckriewall'
      },
      {
        id: '2',
        login: 'ckriewall',
        avatar_url:
          'https://avatars1.githubusercontent.com/u/16513447?s=40&v=4',
        html_url: 'https://github.com/ckriewall'
      },
      {
        id: '3',
        login: 'ckriewall',
        avatar_url:
          'https://avatars1.githubusercontent.com/u/16513447?s=40&v=4',
        html_url: 'https://github.com/ckriewall'
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
