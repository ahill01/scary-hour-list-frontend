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
    <form className="NewUserForm" onSubmit={handleSubmit}>
      <h2>New User</h2>
      <input className="NewContent" onChange={handleUserName} type="text" placeholder="user name"/>
      <button className="NewContent" type="submit">Add New User</button>
    </form>
  );
}

export default NewUserForm;

