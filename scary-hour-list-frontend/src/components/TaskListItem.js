import React, {useState, useEffect} from "react"
import Timer from "./Timer"

function TaskListItem({id, name, estimatedTime, scariness}){

const [timer, setTimer] = useState(0)

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