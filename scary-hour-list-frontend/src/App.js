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

  return (
    <div className="App">
    <Header/>
    <NewTaskForm/>
    <Timer></Timer>
    <TaskListContainer currentUser={currentUser}/>
    <NewUserForm/>
    <Scoreboard/>
    </div>
  );
}

export default App;
