import React from "react"
import axios from 'axios'

class UserTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      nextPage: 1
    };

    // This binding is necessary to make `this` work in the callback
    this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    axios.get(`/api/users.json?page=${this.state.nextPage}`)
      .then(response => {
        let newUsersArray = this.state.users.slice(0);
        newUsersArray = newUsersArray.concat(response.data.users);
        this.setState({
          users: newUsersArray,
          nextPage: response.data.meta.next
        });
      })
  }

  handleLoadMoreClick() {
    console.log(`active page is ${this.state.nextPage}`);
    this.fetchUsers();
  }

  handleDeleteClick(index) {
    let newUsersArray = this.state.users.slice(0);
    newUsersArray.splice(index, 1);
    this.setState({
      users: newUsersArray
    })
  }

  renderTableHeader() {
    if (this.state.users.length === 0)
      return;

    let header = Object.keys(this.state.users[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  renderTableData() {
    return this.state.users.map((user, index) => {
      const {id, name, address, city, region, country, birthday} = user
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{address}</td>
          <td>{city}</td>
          <td>{region}</td>
          <td>{country}</td>
          <td>{birthday}</td>
          <td>
            <button onClick={this.handleDeleteClick.bind(this, index)}>Delete</button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <table id='users'>
          <thead>
          <tr>
            {this.renderTableHeader()}
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {this.renderTableData()}
          </tbody>
        </table>
        {this.state.nextPage && <button
          onClick={this.handleLoadMoreClick}
        >Load more
        </button>}
      </div>
    );
  }
}

export default UserTable
