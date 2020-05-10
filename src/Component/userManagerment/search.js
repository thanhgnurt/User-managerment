import React, { Component } from 'react'
import { connect } from "react-redux"
import * as actions from './../../Redux/Actions/indexAction'
class Search extends Component {
    getKeyWord = (event) =>{
        let value = event.target.value
        this.props.getKeyWord(value)
    }
    
    render() {
        return (
            <input
                type="text"
                className="form-control mb-3 w-50"
                value = {this.props.keyWord}
                onChange = {this.getKeyWord}
            />
        )
    }
}
const mapStateToProps = state => {
    return {
        keyWord : state.userReducer.keyWord
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getKeyWord: (keyWord) => {
            dispatch(actions.getKeyWord(keyWord))
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps) (Search)
