import React from 'react';

const UserCard = props => {
    const { users } = props;

    return(
        <div>
            <img src={users.avatar_url} alt="User Pic" />
        </div>
    );
};

export default UserCard;