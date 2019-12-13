import React from "react"

class UserTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          id: 1,
          "name": "Emily Donovan",
          "address": "Ap #677-3529 Morbi Rd.",
          "city": "Whitby",
          "region": "ON",
          "country": "Canada",
          "birthday": "1998-08-26"
        },
        {
          id: 2,
          "name": "Howard Sellers",
          "address": "9614 Vestibulum Street",
          "city": "Moose Jaw",
          "region": "SK",
          "country": "Canada",
          "birthday": "1997-12-09"
        },
        {
          id: 3,
          "name": "Jacob Green",
          "address": "828-9972 Malesuada St.",
          "city": "ShÃ¯Â¿Â½diac",
          "region": "NB",
          "country": "Canada",
          "birthday": "1962-10-31"
        },
      ]
    }
  }

  renderTableHeader() {
    let header = Object.keys(this.state.users[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  renderTableData() {
    return this.state.users.map((student, index) => {
      const {id, name, address, city, region, country, birthday} = student
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
