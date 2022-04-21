import React, {useState, useEffect} from "react"
import TaskListItem from "./TaskListItem"
import NewTaskForm from "./NewTaskForm"

function TaskListContainer({currentUser, tasks, setTasks, onAddTask}){
const [unfinishedTasks, setUnfinishedTasks] = useState([])

    function unfinished(tasks){
        const unfinishedTasks = tasks.filter(task => task.finished===false)
        return unfinishedTasks
    }
    useEffect(() => {
        setUnfinishedTasks(unfinished(tasks))
      },[tasks])

    return (
        <div className="taskList">
            <NewTaskForm currentUser={currentUser} onAddTask={onAddTask}/>
            <h1>TASKS</h1>
           <table className="taskTable">
            <thead>
            <tr>
                <th>{"Task"}</th>
                <th>{"Scariness"}</th>
                <th>{"Estimated Time"}</th>
                <th>{"Timer"}</th>
                <th>{"Finished"}</th>
                <th>{"Delete Task"}</th>
            </tr>
           </thead>
            <tbody>
             {unfinishedTasks.map((task) => <TaskListItem key = {task.id} id = {task.id} name={task.name} scariness={task.scariness} estimatedTime ={task.estimated_time} finished={task.finished} setTasks={setTasks} tasks={tasks}/>)}
             </tbody>
             </table>
        </div>
    )
    
}

export default TaskListContainer