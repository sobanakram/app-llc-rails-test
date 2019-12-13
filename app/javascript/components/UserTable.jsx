import React from "react"
import axios from 'axios'

class UserTable extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
    axios.get('/api/users.json')
      .then(response => {
        this.setState({users: response.data.users});
      })
  }

  renderTableHeader() {
    if (this.state.users.length === 0)
      return

    let header = Object.keys(this.state.users[0])
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
          <tr>{this.renderTableHeader()}</tr>
          </thead>
          <tbody>
          {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserTable
