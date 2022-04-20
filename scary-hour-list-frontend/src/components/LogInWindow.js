import React, {useState, useEffect} from "react"

function LogInWindow(users, setCurrentUser){
const [username, setUsername] = useState("")

    function handleLoginChange(e){
        setUsername(e.target.value)
    }

    function handleLogin(e){
        e.preventDefault()
        const foundUser = users.users.find(user => user.name === username);
        debugger;
        if(foundUser) {
            fetch(`http://localhost:9292/users/${foundUser.id}`)
            .then(res => res.json())
            .then((user) => setCurrentUser(user))
        } else {
            window.alert("this username does not exist. please create an account to login")
        }
    }

    return(
    <div className="login">
        <form>
            <input type="text" name="username" placeholder="log-in" onChange={handleLoginChange}></input>
            <button type="submit" onClick={(e) => handleLogin(e)}>Log In</button>
        </form>
    </div>
    )
}

export default LogInWindow