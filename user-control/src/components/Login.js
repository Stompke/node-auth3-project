import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const history = useHistory();
    const [ credentials, setCredentials ] = useState({});

    const userLogin = () => {
        axios 
        .post('http://localhost:5000/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            history.push('/users');
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const onChangeHandler = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <h1>Login</h1>
            <input name="username" onChange={onChangeHandler} value={credentials.username} />
            <input name="password" onChange={onChangeHandler} value={credentials.password} />
            <button onClick={userLogin}>Login</button>
        </>
    )
}

export default Login;