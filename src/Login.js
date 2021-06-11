import React from 'react'
import "./Login.css"
import Button from '@material-ui/core/Button';

function Login() {
    const signIn = () => {
        //Sign in...
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
