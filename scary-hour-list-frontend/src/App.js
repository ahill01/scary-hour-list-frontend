import React, {useState, useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import NewUserForm from './components/NewUserForm'
import NewTaskForm from "./components/NewTaskForm"
import Scoreboard from "./components/Scoreboard"
import Timer from "./components/Timer"
import TaskListContainer from "./components/TaskListContainer";

function App() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  
  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then(res => res.json())
    .then(usersArr => {
      setUsers(usersArr)
      setCurrentUser(usersArr[0])})
  },[])

  function onAddTask(){
    fetch(`http://localhost:9292/users/${currentUser.id}`)
    .then(res => res.json())
    .then(user => setCurrentUser(user))
  }

  function onAddUser(newUser){ 
      setUsers([...users, newUser])
      setCurrentUser(newUser)
  }

  return (
    <div className="App">
    <Header/>
    <Timer></Timer>
    <TaskListContainer currentUser={currentUser}/>
    <NewTaskForm currentUser={currentUser} onAddTask={onAddTask}/>
    <NewUserForm onAddUser={onAddUser}/>
    <Scoreboard/>
    </div>
  );
}

export default App;
