import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:5001/user')
            .then(response => {
                if (response.data.result) {
                    setUsersList(response.data.content);
                }
            })
            .catch(error => {
                debugger;
            });
    }, []);

    return <>
        <h1>Usuários</h1>
        <ul>
            {usersList.map(user => <li>{user.userName}</li>)}
        </ul>
    </>;
}

export default Users;
