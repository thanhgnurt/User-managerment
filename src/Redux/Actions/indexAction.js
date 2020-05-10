import * as actionTypes from './../Constant/actionTypes'
export const actSubmit = (user) =>{
    return {
        type: actionTypes.SUBMIT,
        user
    }
}
export const actEditUser = (user) => {
    return {
        type : actionTypes.EDIT,
        user
    }
}
export const actDeleteUser = user => {
    
    return {
        type : actionTypes.DELETE,
        user
    }
}
export const getKeyWord = (keyWord) => {
    return {
        type : actionTypes.SEARCH,
        keyWord
    }
}

export const actOnChange = (elementEdit) => {
    return {
        type : actionTypes.EDIT_MODAL,
        elementEdit
    }
}

export const onClearForm = () => {
    return {
        type : actionTypes.CLEAR
    }
}

export const validationFrom = (infoValid) => {
    return {
        type : actionTypes.VALIDATION,
        infoValid
    }
}