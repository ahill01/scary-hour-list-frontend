import React, { useState } from "react";

function NewUserForm({handleFrontEnd}) {
  const [userName, setUserName] = useState("");

  function handleUserName(event) {
    setUserName(event.target.value);

  function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      userName: userName,
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
      .then((newUser) => handleFrontEnd(newUser));
  }

  return (
    <form className="NewUserForm" onSubmit={handleSubmit}>
      <h2>New User</h2>
      <input onChange={handleUserName} type="text">User Name</input>
    </form>
  );
}}

export default NewUserForm;
