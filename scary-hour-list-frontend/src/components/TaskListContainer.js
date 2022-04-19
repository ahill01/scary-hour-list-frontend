import React, {useState, useEffect} from "react"
import TaskListItem from "./TaskListItem"
function TaskListContainer({currentUser, tasks}){



    return (
        <div className="taskList">
             {tasks.map((task) => <TaskListItem key = {task.id} id = {task.id} name={task.name}/>)}
             {console.log(tasks)}
        </div>
    )
    
}

export default TaskListContainer