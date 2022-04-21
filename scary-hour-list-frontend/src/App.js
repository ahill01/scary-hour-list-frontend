import React, {useState, useEffect} from "react"
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import NewUserForm from './components/NewUserForm'
import NewTaskForm from "./components/NewTaskForm"
import Scoreboard from "./components/Scoreboard"
import Timer from "./components/Timer"
import TaskListContainer from "./components/TaskListContainer";
import LogInWindow from "./components/LogInWindow";
import Nav from './components/Nav';
import FinishedTaskListContainer from "./components/FinishedTaskListContainer"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({tasks:[]})
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then(res => res.json())
    .then(usersArr => {
      setUsers(usersArr)})
  },[])

  useEffect(() => {
      setTasks(currentUser.tasks)
  }, [currentUser])

  function onAddTask(){
    fetch(`http://localhost:9292/users/${currentUser.id}`)
    .then(res => res.json())
    .then(user => setCurrentUser(user))
  }

  function onAddUser(newUser){ 
    fetch(`http://localhost:9292/users/${newUser.id}`)
    .then(res => res.json())
    .then((newUser) => {
      setUsers([...users, newUser])
      setCurrentUser(newUser)
      setTasks(newUser.tasks)
    })
  }


  function unfinishedTasks(tasks){
    const unfinishedTasks = tasks.filter(task => task.finished===false)
    return unfinishedTasks
  }

  return (
    <Router>
      <div className="App"> 
      <Header userName={currentUser.name}/>
      <Nav />
      <Routes>

        <Route path="/" element={<LogInWindow users={users} setCurrentUser={setCurrentUser}/>}/>
       
        <Route path="/incompleted" element={<TaskListContainer currentUser={currentUser} tasks={unfinishedTasks(tasks)} onAddTask={onAddTask}/>}/>

        <Route path="/completed" element={ <FinishedTaskListContainer currentUser={currentUser}/>}/>

      </Routes>
      </div>
    </Router>
  )}
export default App;
