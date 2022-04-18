import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import NewTaskForm from "./components/NewTaskForm"
import Scoreboard from "./components/Scoreboard"
import Timer from "./components/Timer"
import TaskListContainer from "./components/TaskListContainer";

function App() {
  return (
    <div className="App">
    <Header/>
    <Timer></Timer>
    <TaskListContainer/>
    </div>
  );
}

export default App;
