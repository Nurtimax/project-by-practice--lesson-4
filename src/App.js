import { useState } from "react";
import "./App.css";
import UserForm from "./components/user-form/UserForm";
import ErrorModule from "./components/error-module/ErrorModule";
import UserList from "./components/user-list/UserList";

function App() {
  const [userList, setUserList] = useState([
    { name: "Janbolot", age: 18, id: "f1" },
  ]);

  const onAddUserHandler = (newUser) => {
    setUserList((prevState) => [...prevState, newUser]);
  };

  const deleteUserHandler = (id) => {
    // console.log(id);
    return () => {
      const update = userList.filter((item) => item.id !== id);
      setUserList(update);
      console.log(update);
    };
  };

  const error = {
    title: "empty",
    message: "Enter message",
  };

  return (
    <div className="App">
      <UserForm onAddUserHandler={onAddUserHandler} />
      <UserList userList={userList} deleteUserHandler={deleteUserHandler} />
      {/* <ErrorModule {...error}/> */}
    </div>
  );
}

export default App;
