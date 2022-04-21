import React from "react";

function Header({userName}) {

  console.log("name: " + userName)

function handleHomePage(){
    window.location.href= `http://localhost:3000/`
  }

  return (
    <div className="image">
      <ul onClick={handleHomePage} className="header"> Welcome to {userName}'s Scary Hour 😨
      <button src="https://cdn.vectorstock.com/i/1000x1000/42/01/yellow-sun-icon-vector-9694201.webp" alt="sun" className="sun"/>
      </ul>
    
    </div>
  );
}

export default Header;
