import React from "react"

function FinishedTaskItem({id, name, estimatedTime, scariness, actualTime}){
    const formatTime = (time) => {
        const getSeconds = `0${(time % 60)}`.slice(-2)
        const minutes = `${Math.floor(time / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(time/ 3600)}`.slice(-2)
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`
      }

   return( <tr>
    <td>{name}</td>
    <td>{scariness}</td>
    <td>{formatTime(estimatedTime)}</td>
    <td>{formatTime(actualTime)}</td>
    </tr>    
);
}

export default FinishedTaskItem