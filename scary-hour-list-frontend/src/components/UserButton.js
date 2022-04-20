import React, {useState} from "react"

function UserButton({userId, username, setCurrentUser}){

function handleClick(e){
    fetch(`http://localhost:9292/users/${userId}`)
    .then(res => res.json())
    .then(user => setCurrentUser(user))
}

    return <button name={username} className="userButton" onClick={handleClick}>
        {username}
        </button>

}

export default UserButton
