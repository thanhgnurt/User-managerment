import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserItem from './userItem'



class User extends Component {
    render() {
        let {userList, keyWord} = this.props;
        if (keyWord) {
            userList = userList.filter((user)=>{
                return user.name.toLowerCase().indexOf(keyWord) !== -1
            })
        }
        let elementList = userList.map((user,index) => {
            return <UserItem key = {user.id} user={user} index={index} />
        })
        
        
     
       
        return (
            <div>
                <table className="table text-left">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elementList}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userList : state.userReducer.userList,
        keyWord : state.userReducer.keyWord

    }
}

export default connect(mapStateToProps,null) (User)
