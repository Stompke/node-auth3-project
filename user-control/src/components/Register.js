import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const history = useHistory();
    const [ newUser, setNewUser ] = useState({});

    const registerUser = () => {
        axios
        .post('http://localhost:5000/api/users', newUser)
        .then(res => {
            console.log(res)
            history.push('/users')
        })
        .catch(err => {
            console.log(err)
        })
    }

    const onChangeHandler = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    return (
        <> 
            <h1>Register</h1>
            <input name="username" onChange={onChangeHandler} value={newUser.username} />
            <input name="password" onChange={onChangeHandler} value={newUser.password} />
            <button onClick={registerUser}>Register</button>

        </>
    )
}

export default Register