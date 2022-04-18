import React from "react"
import TaskListItem from "./TaskListItem"
function TaskListContainer({currentUser}){

//    const listItems = currentUser.tasks.map((task) => <TaskListItem key = {task.id} id = {task.id} name={task.name}/>)
const testArr = [{a:1},{a:2}]
    return (
        <div>
        {console.log(currentUser.tasks)}
        </div>)
    
}

export default TaskListContainer