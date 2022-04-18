import React from "react"
import TaskListItem from "./TaskListItem"
function TaskListContainer({currentUser}){

//    const listItems = currentUser.tasks.map((task) => <TaskListItem key = {task.id} id = {task.id} name={task.name}/>)
const testArr = [{a:1},{a:2}]
    return (
        <div>
        {/* {listItems} */}
        {console.log(currentUser.tasks)}
        {/* {console.log(testArr.length)} */}
        {/* {currentUser.tasks.map(task => console.log(task))} */}
        {/* {currentUser.tasks.map((task) => console.log(task))} */}
        </div>)
    
}

export default TaskListContainer