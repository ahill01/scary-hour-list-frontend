import React from "react"

function FinishedTaskItem({id, name, estimatedTime, scariness, actualTime}){

   return( <tr>
    <td>{name}</td>
    <td>{scariness}</td>
    <td>{estimatedTime}</td>
    <td>{actualTime}</td>
    </tr>    
);
}

export default FinishedTaskItem