import React from "react";

function Header({userName}) {

  console.log("name: " + userName)

function handleHomePage(){
    window.location.href= `http://localhost:3000/`
  }

  return (
    <div className="image">
      <ul onClick={handleHomePage} className="header"> Welcome to {userName}'s Scary Hour 😨
      </ul>
    </div>
  );
}

export default Header;
