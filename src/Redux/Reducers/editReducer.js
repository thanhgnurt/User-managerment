import * as actionTypes from '../Constant/actionTypes'

var initialState = {
    id: "",
    username: "",
    name: "",
    email: "",
    phoneNumber: "",
    type: "USER"
}

var editReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EDIT_MODAL:
            let elementEdit = { ...action.elementEdit }

            let key = elementEdit[0]
            let value = elementEdit[1]
            state[key] = value

            return { ...state }
        case actionTypes.EDIT:
           
            
            state = action.user
            return { ...state }
        case actionTypes.CLEAR:
            state = {
                id: "",
                username: "",
                name: "",
                email: "",
                phoneNumber: "",
                type: "USER"
            }
            return {...state}
        default:
            return { ...state }
    }
}

export default editReducer