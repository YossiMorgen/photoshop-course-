const authReducer = (state, action) => {

    if (action.type === 'LOGIN') {
        return action.payload
    }

    if (action.type === 'LOGOUT') {
        return null
    }


    return { ...state }
}

export default authReducer;