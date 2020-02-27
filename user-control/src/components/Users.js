import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Users = () => {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/users')
        .then(res => {
            setUsers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })

    return (
        <>
        <h1>Users</h1>
        {users.map(user => <p key={user.id}>{user.username}</p>)}
        </>
    )
}

export default Users;