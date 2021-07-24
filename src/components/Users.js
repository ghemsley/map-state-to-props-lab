import React, { Component } from 'react'
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          Users!
          <p>Total users: {this.props.userCount}</p>
          {this.props.users.map((user, i) => (
            <li key={i}>
              <p>User: {user.username}</p>
              <p>Hometown: {user.hometown}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { ...state, users: [...state.users], userCount: state.users.length }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
