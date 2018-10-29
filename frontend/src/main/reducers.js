import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import usuarioReducer from "../acesso/usuarioReducer";
import AuthReducers from '../auth/authReducer' 


const rootReducer = combineReducers ({
    usuario : usuarioReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth : AuthReducers
})

export default rootReducer