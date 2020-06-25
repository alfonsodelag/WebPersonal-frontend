import React, { useState, useEffect } from 'react'
import { getAccessTokenApi } from '../../../api/auth';
import { getUsersActiveApi } from '../../../api/user';
import ListUsers from "../../../components/Admin/Users/ListUsers";
import "./Users.scss";

export default function User() {
    const [usersActive, setUsersActive] = useState([]);
    const [usersInactive, setUsersInactive] = useState([]);
    const [reloadUsers, setReloadUsers] = useState(false);
    const token = getAccessTokenApi();

    // console.log('usersActive: ', usersActive);
    // console.log('usersInactive: ', usersInactive);

    useEffect(() => {
        getUsersActiveApi(token, true).then(response => {
            setUsersActive(response.users);
        });
        getUsersActiveApi(token, false).then(response => {
            setUsersInactive(response.users);
        });
        setReloadUsers(false);
    }, [token, reloadUsers]);

    return (
        <div className="users">
            <ListUsers
                usersActive={usersActive}
                usersInactive={usersInactive}
                setReloadUsers={setReloadUsers} />
        </div>
    );
}