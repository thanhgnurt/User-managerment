import * as actionTypes from './../Constant/actionTypes';
var initialState = {
    
        username: '',
        name: '',
        email: '',
        phoneNumber: '',
  
    formVaid: false,
    usernameValid: false,
    nameValid: false,
    emailValid: false,
    phoneNumberValid: false,

}


var validation = (state = initialState, action) => {
    var reset = {
        username: '',
        name: '',
        email: '',
        phoneNumber: '',
  
    formVaid: false,
    usernameValid: false,
    nameValid: false,
    emailValid: false,
    phoneNumberValid: false,
    }
    switch (action.type) {
        case actionTypes.VALIDATION:
            let infoValid = {...action.infoValid}
            return infoValid
        case actionTypes.EDIT:
            return reset

            
        default:
            return {...state}
    }

}

export default validation