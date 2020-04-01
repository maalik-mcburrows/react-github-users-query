import React, { Component } from 'react';
import UserCardList from './components/UserCardList';
import './App.css';

class App extends Component{
  state = {
    userName: "",
    users: []
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    const username = this.state.userName;
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json();
    this.setState({
      userName: "",
      users: [...this.state.users, data]
    });
    return data
  };

  handleChange = event => {
    this.setState({
      userName: event.target.value
    })
  }



  render(){
    const { users } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>User Query Exercise</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label> Type a User's Name
            <input type="text" value={this.state.userName} placeholder="type sum" onChange={this.handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
        <UserCardList users={users} />
      </div>
    );
  }
}

export default App;
