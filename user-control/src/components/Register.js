import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Register = (props) => {
    const history = useHistory();
    const [ newUser, setNewUser ] = useState({});

    const registerUser = () => {
        axios
        .post('http://localhost:5000/api/users', newUser)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            props.setLoggedIn(true);
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
            <select name="department" onChange={onChangeHandler} value={newUser.department}>
                <option value='sales'>sales</option>
                <option value='marketing'>marketing</option>
                <option value='admin'>admin</option>
            </select>
            <button onClick={registerUser}>Register</button>
            <div>
                <h4>Already Registered? Sign in <Link to="/login"><button>here</button></Link></h4>
            </div>

        </>
    )
}

export default Register