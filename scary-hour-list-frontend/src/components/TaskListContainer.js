import React, {useState, useEffect} from "react"
import TaskListItem from "./TaskListItem"
function TaskListContainer({currentUser, tasks}){



    return (
        <div className="taskList">
            <tr></tr>
             {tasks.map((task) => <TaskListItem key = {task.id} id = {task.id} name={task.name} scariness={task.scariness} />)}
             {console.log(tasks)}
        </div>
    )
}

export default TaskListContainer