import React from 'react';

class User extends React.Component {
  state = {
    search: this.props.match.username || 'obsidianspork',
    user: [],
    repos: []
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.login}`)
      .then( res => res.json() )
      .then( user => this.setState({ user }) )
      .catch( err => console.log(err) )
  };
}

export default User;