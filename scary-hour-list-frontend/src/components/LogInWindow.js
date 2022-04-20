import React, {useState, useEffect} from "react"
import UserButton from "./UserButton";

function LogInWindow(users, setCurrentUser){

    return(
    <div className="login">
        {users.users.map(user => <UserButton username={user.name} userId = {user.id} setCurrentUser={setCurrentUser}></UserButton>)}
    </div>
    )
}

export default LogInWindow