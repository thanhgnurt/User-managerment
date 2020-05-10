import React, { Component } from 'react';
import Search from './search';
import Modal from './modal';
import Users from './user';
import { connect } from 'react-redux'
import * as actions from './../../Redux/Actions/indexAction'


class HomeManagerment extends Component {


    render() {

        return (
            <div className="container">
                <h1 className="display-4 text-center my-3">User Management</h1>
                <div className="d-flex justify-content-between align-items-center">
                    <Search />
                    <button
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target="#modelIdUser"
                        onClick={() => { this.props.changeTitleEdit() }}
                    >
                        Add User
                    </button>
                </div>
                <Users />
                <Modal />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        changeTitleEdit: () => {
            dispatch(actions.actEditUser({
                id: "",
                username: "",
                name: "",
                email: "",
                phoneNumber: "",
                type: "USER"
            }))
        }
    }
}





export default connect(null, mapDispatchToProps)(HomeManagerment)
