import React from "react";

function Header({userName}) {

  console.log("name: " + userName)


  return (
    <div className="image">
      <h1 className="header"> {userName ? `Welcome to ${userName}'s Scary Hour 😨` : `Welcome to YOUR Scary Hour`}
      </h1>
    
    </div>
  );
}

export default Header;
