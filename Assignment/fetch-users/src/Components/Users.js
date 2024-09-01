import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    console.log(users);

    const getUsers = () => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                setUsers(response.data.data);
            })
            .catch(error => {
                console.log(error.response.data);
            });
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Users List</h1>
            <button 
                onClick={getUsers} 
                style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                Get Users
            </button>
            <table style={{ 
                width: '80%', 
                margin: '20px auto', 
                borderCollapse: 'collapse',
            }}>
                <thead style={{ backgroundColor: 'black', color: 'white' }}>
                    <tr>
                        <th style={{ padding: '10px', border: '1px solid white' }}>First Name</th>
                        <th style={{ padding: '10px', border: '1px solid white' }}>Last Name</th>
                        <th style={{ padding: '10px', border: '1px solid white' }}>Email</th>
                        <th style={{ padding: '10px', border: '1px solid white' }}>Avatar</th>
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: 'white', color: 'black' }}>
                    {
                        users.length === 0 
                            ? <tr><td colSpan="4" style={{ padding: '10px', textAlign: 'center' }}>No Data found to Display</td></tr>
                            : users.map((user) => (
                                <tr key={user.id} style={{ textAlign: 'center' }}>
                                    <td style={{ padding: '10px', border: '1px solid black' }}>{user.first_name}</td>
                                    <td style={{ padding: '10px', border: '1px solid black' }}>{user.last_name}</td>
                                    <td style={{ padding: '10px', border: '1px solid black' }}>{user.email}</td>
                                    <td style={{ padding: '10px', border: '1px solid black' }}>
                                        <img 
                                            src={user.avatar} 
                                            alt="avatar" 
                                            style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
                                        />
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;
