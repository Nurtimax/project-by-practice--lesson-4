import React, { useState } from "react";
import ErrorModule from "../error-module/ErrorModule";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeHandler = (e) => setUserAge(e.target.value);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "empty",
        message: "Enter message",
      });
      return;
    }
    props.onAddUserHandler({
      name: userName,
      age: userAge,
      id: Math.random().toString(),
    });
  };

  const closeModal = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModule {...error} closeModal={closeModal} />}
      <form action="" onSubmit={addUserHandler}>
        <div>
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={userNameHandler}
          />
        </div>
        <div>
          <label htmlFor="age">User Age</label>
          <input
            type="number"
            id="age"
            value={userAge}
            onChange={userAgeHandler}
          />
        </div>
        <button onClick={addUserHandler} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default UserForm;
