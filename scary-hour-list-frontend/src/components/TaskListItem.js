import React from "react"
function TaskListItem({id, name, estimatedTime, scariness}){

    return(
    <tr>
        <td> {name} </td>
        <td> {estimatedTime} minutes </td>
        <td> {scariness} </td>
    </tr> 
    )
}

export default TaskListItem