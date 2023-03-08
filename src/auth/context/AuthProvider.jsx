import { AuthContext } from "./authContext";
import { useReducer } from "react";
import { types } from "./types/types";
import authReducer from "./authReducer";

 const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return  {
        isLogged:!!user,
        user 
    }
 }

 const AuthProvider = ( { children } ) => {


    const [authState, dispatch ] = useReducer( authReducer, {}, init )

    console.log(authState)

    const login = () => {
        const user = {
            id: 1,
            name: "Iuliia",
        }
        localStorage.setItem('user', JSON.stringify(user))
        dispatch({type: types.login, payload: user})
    }


    return <AuthContext.Provider value = {{...authState, login: login}}> { children } </AuthContext.Provider>

}

export default AuthProvider;