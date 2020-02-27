import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link} from 'react-router-dom';


const Login = (props) => {
    const history = useHistory();
    const [ credentials, setCredentials ] = useState({});


    const userLogin = () => {
        axios 
        .post('http://localhost:5000/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            // localStorage.setItem('loggedIn', 'true')
            props.setLoggedIn(true);
            history.push('/users');
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
            <div>
                <h4>Need an account? Register <Link to="/register"><button>here</button></Link></h4>
            </div>
        </>
    )
}

export default Login;