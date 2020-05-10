import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from './../../Redux/Actions/indexAction'
class UserItem extends Component {
 
  render() {
    let { user } = this.props
    return (
      <tr className='text-left' key={user.id}>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
          onClick = {()=>{this.props.editUser(user);}}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick = {()=>{this.props.deleteUser(user)}}
          >
            Delete
          </button>
        </td>
      </tr>
    )
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    editUser: user => {
      dispatch(actions.actEditUser(user));
    },
    deleteUser : user => {
      dispatch(actions.actDeleteUser(user))
    }
  }
}
export default connect(null, mapDispatchToProps) (UserItem)