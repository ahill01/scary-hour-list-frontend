import logo from './logo.svg';
import './App.css';
import Header from `./Header`
import NewTaskForm from "./NewTaskForm"
import Scoreboard from "./Scoreboard"
import Timer from "./Timer"
import TaskListContainer from './components/TaskListContainer';

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
