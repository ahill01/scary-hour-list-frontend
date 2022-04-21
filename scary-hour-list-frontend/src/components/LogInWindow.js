import React, { useState, useEffect } from "react";
import NewUserForm from "./NewUserForm";
function LogInWindow({ users, setCurrentUser }) {
  const [username, setUsername] = useState("");

  function handleChange(e) {
    console.log("calling handleChange");
    setUsername(e.target.value);
  }

  function handleLogIn(e) {
    e.preventDefault();
    const foundUser = users.find((user) => user.name === username);
    console.log(foundUser);
    if (foundUser) {
      setCurrentUser(foundUser);
    } else {
      window.alert("Account not found. Please create an account to login");
    }
  }

  return (
    <div className="login">
      <form>
        <h2>Log In</h2>
        <input
          className="NewContent"
          type="text"
          placeholder="username"
          onChange={handleChange}
        ></input>
        <button className="NewContent" type="submit" onClick={handleLogIn}>
          Log Me In!
        </button>
      </form>
      <NewUserForm />
    </div>
  );
}

export default LogInWindow;
