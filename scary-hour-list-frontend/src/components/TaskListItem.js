import React from "react"
function TaskListItem({id, name, estimatedTime, scariness}){

    return(
        <div className="taskitem">
        <h2>task:{name}</h2>
        {/* <h2>{user.tasks}</h2> */}
        {/* <h2>estimated time: {estimatedTime} minutes</h2> */}
        {/* <h2>scariness: {scariness}</h2> */}
        </div>
    )
}

export default TaskListItem