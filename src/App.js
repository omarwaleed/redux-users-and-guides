import React, { Component } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UsersList';
import GuideList from './components/GuideList';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <CreateUser />
        <UserList />
        <GuideList />
      </div>
    );
  }
}

export default App;
