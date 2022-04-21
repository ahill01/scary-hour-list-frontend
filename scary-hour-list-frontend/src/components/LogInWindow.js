import React, {useState, useEffect} from "react"
import UserButton from "./UserButton";

function LogInWindow({users, setCurrentUser}){

    function handleChange(e){
        
    }
    function handleLogIn(e){
        e.preventDefault()

    }

    return(
    <div className="login">
        {/* {users.map(user => <UserButton username={user.name} userId = {user.id} setCurrentUser={setCurrentUser}></UserButton>)} */}

        <form>
            <input type="text" placeholder="username"></input>
            <button type="submit">Log Me In!</button>
        </form>
    </div>
    )
}

export default LogInWindow