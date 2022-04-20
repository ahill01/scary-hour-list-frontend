import React from "react";

function Header(userName) {

  console.log("name: " + userName)

  return (
    <div className="image">
      <h1 className="header">{`Welcome to Your Scary Hour 😨 ${userName}`}</h1>
    </div>
  );
}

export default Header;
