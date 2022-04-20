import React, {useState, useEffect} from "react"
import TaskListItem from "./TaskListItem"
function TaskListContainer({currentUser, tasks}){

const [timer, setTimer] = useState(0)


    return (
        <div className="taskList">
           <table className="taskTable">
            <thead>
            <tr>
                <th> Task </th>
                <th> Estimated Time </th>
                <th> Scariness </th>
            </tr>
           </thead>
            <tbody>
             {tasks.map((task) => <TaskListItem key = {task.id} id = {task.id} name={task.name} scariness={task.scariness} timer={timer} setTimer={setTimer}/>)}
             </tbody>
             </table>
        </div>
    )
    
}

export default TaskListContainer