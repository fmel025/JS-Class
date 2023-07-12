import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';

const Users = () => {
  const [users, setUsers] = useState([]);

  // Vamos a llamar a una API donde recogere datos de usuarios los cuales mostrare en pantalla
  useEffect(() => {
    fetch('https://random-data-api.com/api/v2/users?size=20')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4">
      {users.map((user, index) => (
        <UserCard
          key={index}
          username={user.username}
          email={user.email}
          avatarUrl={user.avatar}
        />
      ))}
    </div>
  );
};
``
export default Users;
