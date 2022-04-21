import React, {useState, useEffect} from "react"
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
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
      console.log("current user updated so i am too")
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

  return (
    <Router>
      <div className="App"> 
      <Header userName={currentUser.name}/>
      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>

        <Route path="/" element={<LogInWindow users={users} setCurrentUser={setCurrentUser}/>}/>
       
        <Route path="/unfinished" element={<TaskListContainer currentUser={currentUser} tasks={tasks} onAddTask={onAddTask} setTasks={setTasks}/>}/>

        <Route path="/finished" element={ <FinishedTaskListContainer currentUser={currentUser} tasks={tasks}/>}/>

      </Routes>
      </div>
    </Router>
  )}
export default App;
