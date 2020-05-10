import * as actionTypes from './../Constant/actionTypes'
var initialState = {
    userList: [
        {
            id: 1,
            name: "Dinh Phuc Nguyen",
            username: "dpnguyen",
            email: "dpnguyen@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP"
        },
        {
            id: 2,
            name: "Nguyen Dinh Phuc",
            username: "nguyendp",
            email: "nguyendp@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP"
        }
    ],
    
    keyWord: ''
}
var findIndex = (id, tasks) => {
    let result = -1
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index
        }
    })
    return result
}
var userReducer = (state = initialState, action) => {
    switch (action.type) {
        // add user
        case actionTypes.SUBMIT:
            let userAdd = { ...action.user }
            if (userAdd.id) {
                let index = findIndex(userAdd.id, state.userList)
                if (index !== -1) {
                    let userList = [...state.userList]
                    userList[index] = action.user
                    state.userList = userList
                }
            } else {
                let leng = state.userList.length
                if (leng === 0 ) {
                    userAdd.id = 1
                    
                } else{
                    userAdd.id = state.userList[leng-1].id  + 1
                }
                
                state.userList = [...state.userList, userAdd]
            }
            return { ...state }
        // edit user
        // case actionTypes.EDIT:
        //     state.userEdit = action.user
        //     return { ...state }
        // delete user
        case actionTypes.DELETE:
            let userList = [...state.userList]
            
            
            let index = findIndex(action.user.id, userList)
            if (index !== -1) {
                userList.splice(index, 1)
                state.userList = userList
            }
            return { ...state }
        case actionTypes.SEARCH:
            state.keyWord = action.keyWord
            return {...state}
        default:
            return { ...state }
    }
}
export default userReducer;
