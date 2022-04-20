import React from "react"
function Scoreboard(tasks, currentUser){

    function formatScoreboardTime(time){
        const getSeconds = `0${(time % 60)}`.slice(-2)
        const minutes = `${Math.floor(time / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2)
        
        return `${getHours} hours ${getMinutes} minutes ${getSeconds} seconds`
      }

    // const finished_time = formatScoreboardTime(tasks.finished_time)
    // const sortedTime = finished_time.sort((a,b) => a-b);
      
    return (
        <div className="scoreboard">
        <h2>Scoreboard</h2>

        <table className="taskTable">
            <thead>
            <tr>
                {/* <th>{"User name"}</th> */}
                <th>{"Task Name"}</th>
                <th>{"Fastest Time"}</th>
                <th>{"Date"}</th>
            </tr>
           </thead>
            <tbody>
            </tbody>
             </table>
        </div>
    )}

export default Scoreboard
