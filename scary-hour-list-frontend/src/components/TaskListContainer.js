import React from "react"
import TaskListItem from "./TaskListItem"
function TaskListContainer({currentUser, tasks, setTasks}){

    return (
        <div className="taskList">
           <table className="taskTable">
            <thead>
            <tr>
                <th>{"Task"}</th>
                <th>{"Estimated Time"}</th>
                <th>{"Scariness"}</th>
                <th>{"Timer"}</th>
                <th>{"Finished"}</th>
                <th>{"Delete Task"}</th>
            </tr>
           </thead>
            <tbody>
             {tasks.map((task) => <TaskListItem key = {task.id} id = {task.id} name={task.name} scariness={task.scariness} estimatedTime ={task.estimated_time} tasks={tasks} setTasks={setTasks}/>)}
             </tbody>
             </table>
        </div>
    )
    
}

export default TaskListContainer