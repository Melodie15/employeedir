import React, { Component } from 'react';
import './App.css';
import User from './User/User';
import Header from './Header/Header';


class App extends Component  {
  state = {
    users: [
      {
        id: 1,
        image: '',
        name: "Emily Gurrin",
        phone: "(720) 456-1234",
        email: "egurrin@company.com",
        dob: "02-12-1975"
      },
      {
        id: 2,
        image: "",
        name: "Michael Tomkins",
        phone: "(303) 789-4563",
        email: "mtomkins@company.com",
        dob: "07-23-1990"
      },
      {
        id: 3,
        image: "",
        name: "Amy Love",
        phone: "(720) 781-3358",
        email: "alove@company.com",
        dob: "01-04-1965"
      },
      {
        id: 4,
        image: "",
        name: "David Blake",
        phone: "(720) 687-1234",
        email: "mtomkins@company.com",
        dob: "10-02-1985"
      },
      {
        id: 5,
        image: "",
        name: "Lilian Smart",
        phone: "(720) 986-4489",
        email: "lsmart@company.com",
        dob: "05-07-1988"
      }
    ],
    search : ""
  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value.substr(0, 30) });
  }

  render() {
    console.log('this', this)
    let filteredUsers = this.state.users.filter(
      (users) => {
        return (users.name.toLowerCase()).indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="App">
        <nav className="Nav">
          <p className="NavTitle">Employee Directory</p>
        </nav>

        <input
          type='text'
          placeholder='Search Employee'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />

        <Header />
        {filteredUsers.map(user => {
          return (
            <User
              image={user.image}
              name={user.name}
              phone={user.phone}
              email={user.email}
              dob={user.dob}
              key={user.id} />
          );
        })}
      </div>
    );
  }
}

export default App;
