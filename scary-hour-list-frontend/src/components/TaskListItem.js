import React from "react"
function TaskListItem({id, name, estimatedTime, scariness}){

    return(
        <div className="taskitem">
        <h2>TASK: {name}</h2>
        <h2>ESTIMATED TIME: {estimatedTime} minutes</h2>
        <h2></h2>
        <h2>scariness: {scariness}</h2>
        </div>
    )
}

export default TaskListItem