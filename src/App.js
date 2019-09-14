import React, { Component, Fragment } from 'react';
import './App.css';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Search from './components/users/Search';
import User from './components/users/User';
import Users from './components/users/Users';
import axios from 'axios';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };

  // arrow functions take async before the parameter
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
    console.log(res.data);
  };

  getUser = async username => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res);
    this.setState({ user: res.data, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    // hide alert after 5 seconds
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { user, users, loading, alert } = this.state;
    return (
      <BrowserRouter>
        <div className='App'>
          <nav className='navbar bg-primary'>
            <Navbar title='Github Finder' icon='fab fa-github' />
          </nav>
          <div className='container'>
            <Alert alert={alert} />

            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />

              <Route exact path='/about' component={About} />

              <Route
                exact
                path='/user/:login'
                render={props => (
                  <Fragment>
                    <User
                      {...props}
                      getUser={this.getUser}
                      user={user}
                      loading={loading}
                    />
                  </Fragment>
                )}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
