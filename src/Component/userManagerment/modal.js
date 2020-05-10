import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../../Redux/Actions/indexAction'
class Modal extends Component {


    handleOnChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let elementEdit = [name, value]
        this.props.onchange(elementEdit)
    }

    errorValidation = (event) => {
        let { name, value } = event.target;
        let message = (value === '' ?  ' (Do not leave a blank)' : '');
        let {usernameValid, nameValid, emailValid, phoneNumberValid} = {...this.props.validation};
        switch (name) {
            case 'username' :
                usernameValid = message !== '' ? false : true
                if (value !== '' && value.length < 4) {
                    usernameValid = false
                    message = " (You must input more than three charater)"
                } 
                break;
            case 'name':
                nameValid = message !== '' ? false : true
                if (value !=='' && value.length < 4) {
                    message = " (You must input more than three charater)"
                } else if (value.length >4) {
                    
                    nameValid = true
                }
                break;
            case 'email':
                emailValid = message !== '' ? false : true
                if (value !=='' && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    emailValid = false;
                    message = ' (You need input correct format)'
                }
                break;
            case 'phoneNumber':
                phoneNumberValid =  message !== '' ? false : true
                if (value !== '' && value.length < 9) {
                    phoneNumberValid = false;
                    message = ' (This phone number do not exist)'
                }
                break;
            default : break;
            
        
        }

        this.props.validationFrom({
            // validationElement : {...this.props.validation.validationElement, [name] : message},
            usernameValid,
            nameValid,
            emailValid,
            phoneNumberValid,
            formVaid : (usernameValid && nameValid && emailValid && phoneNumberValid),
            [name] : message
        })

        // this.setState ({
        //     validation : {...this.props.validation.validationElement, [name] : message},
        //     usernameValid,
        //     nameValid,
        //     emailValid,
        //     phoneNumberValid,
        //     formVaid : (usernameValid && nameValid && emailValid && phoneNumberValid)
        // })
        // this.validationForm()
    }

    // validationForm = () => {
    //     let {usernameValid, nameValid, emailValid, phoneNumberValid} = this.state;
    //     this.setState ({
    //         formVaid : (usernameValid && nameValid && emailValid && phoneNumberValid)
    //     })
    // }



    // handleOnChange = (event) => {
    //     let name = event.target.name;
    //     let value = event.target.value;
    //     this.setState({
    //         [name] : value
    //     })  
    // }
    handleOnSubmit = (event) => {
        // event.preventDefault();
        this.props.onsubmit(this.props.editState)
        if (!this.props.editState.id) {
            this.props.onClearForm()
        }
    }
    okSubmit = () => {
        this.handleOnSubmit()
    }

    render() {
        
        
        let { editState, validation } = this.props
        return (
            <div
                className="modal fade"
                id="modelIdUser"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="modelTitleId"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {typeof this.props.editState.id === 'number' ? "Edit user" : "Add user"}
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>
                                        Username
                                        <span className='text-danger'>
                                            {editState.id === '' ? validation.username : ''}
                                            </span>
                                        </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        onChange={this.handleOnChange}
                                        onKeyUp={this.errorValidation}
                                        onBlur={this.errorValidation}
                                        value={editState.username}
                                    />
                                    
                                </div>
                                <div className="form-group">
                                    <label>
                                        Name
                                        <span className='text-danger'>
                                            {editState.id==='' ? validation.name : ''}
                                            </span>
                                        </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        onChange={this.handleOnChange}
                                        onKeyUp={this.errorValidation}
                                        onBlur={this.errorValidation}
                                        value={editState.name}

                                    />
                                    
                                </div>
                                <div className="form-group">
                                    <label>
                                        Email
                                        <span className='text-danger'>
                                            {editState.id==='' ? validation.email : ''}
                                            </span>
                                        </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        onChange={this.handleOnChange}
                                        onKeyUp={this.errorValidation}
                                        onBlur={this.errorValidation}
                                        value={editState.email}

                                    />
                                    
                                </div>
                                <div className="form-group">
                                    <label>
                                        Phone Number 
                                        <span className='text-danger'>
                                            {editState.id==='' ? validation.phoneNumber : ''}
                                            </span>
                                        
                                        </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phoneNumber"
                                        value={editState.phoneNumber}
                                        onKeyUp={this.errorValidation}
                                        onBlur={this.errorValidation}
                                        onChange={this.handleOnChange}

                                    />
                                   
                                </div>
                                <div className="form-group">
                                    <label>Type</label>
                                    <select
                                        className="form-control"
                                        name="type"
                                        onChange={this.handleOnChange}
                                        onKeyUp={this.errorValidation}
                                        onBlur={this.errorValidation}
                                        value={editState.type}

                                    >
                                        <option>USER</option>
                                        <option>VIP</option>
                                    </select>
                                    
                                </div>
                                <button type="submit"
                                    onClick={this.okSubmit}
                                    className="btn btn-success"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    disabled={editState.id ? false : !validation.formVaid}
                                >
                                    Submit
                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userEdit: state.userReducer.userEdit,
        editState: state.editReducer,
        validation : state.validation
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onsubmit: user => {
            dispatch(actions.actSubmit(user))
        },
        onchange: (elementEdit) => {
            dispatch(actions.actOnChange(elementEdit))
        },
        onClearForm: () => {
            dispatch(actions.onClearForm())
        },
        validationFrom : (infoValid) => {
            dispatch(actions.validationFrom(infoValid))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)