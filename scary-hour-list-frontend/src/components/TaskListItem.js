import React from "react"
import Timer from "./Timer"

function TaskListItem({id, name, estimatedTime, scariness, timer, setTimer}){

    return(
    <tr>
        <td> {name} </td>
        <td> {estimatedTime} minutes </td>
        <td> {scariness} </td>
        <td><Timer timer={timer} setTimer={setTimer}/></td>
    </tr> 
    )
}

export default TaskListItem