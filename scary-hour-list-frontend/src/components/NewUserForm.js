import React, { useState } from "react";

function NewUserForm({onAddUser}) {
  const [userName, setUserName] = useState("");

  function handleUserName(event) {
    setUserName(event.target.value)};

  function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      name: userName,
    };

    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((newUser) => onAddUser(newUser));
  }
  
  return (
    <form className="primary" onSubmit={handleSubmit}>
      <h2 className="primary">New User</h2>
      <input className="NewContent" onChange={handleUserName} type="text" placeholder="username"/>
      <button className="NewContent" type="submit">Sign Me Up!</button>
    </form>
  );
}

export default NewUserForm;