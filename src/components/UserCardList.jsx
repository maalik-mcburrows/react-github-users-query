import React from 'react';
import UserCard from './UserCard';

const UserCardList = props => {
    console.log(props)
    const { users } = props
    return(
        <ul>
            {users.length > 0 ? ( users.map(user => (
                <li> 
                    <UserCard users={user} />
                </li>
                ))
            ) : (
                <li>No Data</li>
            )}
        </ul>
    );
}

export default UserCardList;
