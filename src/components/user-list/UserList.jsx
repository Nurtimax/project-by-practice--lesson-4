import React from "react";

const UserList = ({ userList, deleteUserHandler }) => {
  return (
    <ul>
      {userList.map((item) => (
        <li key={item.id}>
          {item.name} {item.age} years old{" "}
          <button onClick={deleteUserHandler(item.id)}>Delete User</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
