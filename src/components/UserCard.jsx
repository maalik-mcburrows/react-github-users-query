import React from 'react';

const UserCard = props => {
    const { users } = props;

    return(
        <div>
            <img src={users.avatar_url} alt="User Pic" />
            <br></br>
            <a href={`/users/${users.login}`} target="_blank" rel="noopener noreferrer" key={users.id}>{users.login}</a>
        </div>
    );
};

export default UserCard;