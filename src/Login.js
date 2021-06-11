import React from 'react'
import "./Login.css"
import Button from '@material-ui/core/Button';
import {auth, provider} from "./firebase"
import {actionTypes} from "./reducer"
import {useStateValue} from "./StateProvider"



function Login() {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        //Sign in...
        auth
        .signInWithPopup(provider)
        .then((result) => {
         dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })

            console.log(result.user)
        })
        .catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://i.imgur.com/Udc7veD.jpg" alt=""/>
                <h1>MyRume</h1>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
