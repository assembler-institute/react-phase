import { AuthContext } from "./authContext";
import { useReducer } from "react";
import { types } from "./types/types";
import authReducer from "./authReducer";

 

 const AuthProvider = ( { children } ) => {

   const initialValue = {user:{}, isLogged: false}; 

    const [authState, dispatch ] = useReducer( authReducer, initialValue )

    console.log(authState)

    const login = () => {
        const user = {
            id: 1,
            name: "Iuliia",
        }
        dispatch({type: types.login, payload: user})
    }


    return <AuthContext.Provider value = {{...authState, login: login}}> { children } </AuthContext.Provider>

}

export default AuthProvider;