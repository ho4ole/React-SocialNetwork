import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        }

        default:
            return state;

    }


}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, login, email, isAuth}})
export const getAuthUserData = () => (dispatch) => {
    return   authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {Id, login, email} = response.data.data;
                dispatch(setAuthUserData(Id, email, login, true));
            }
        });


}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(getAuthUserData())
            }
            else {

                dispatch(stopSubmit("login", {_error: "Common error"}));

            }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}



export default authReducer;

