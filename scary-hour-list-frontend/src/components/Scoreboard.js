import React from "react"
function Scoreboard(){

    function formatScoreboardTime(time){
        const getSeconds = `0${(time % 60)}`.slice(-2)
        const minutes = `${Math.floor(time / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2)
    
        return `${getHours} hours ${getMinutes} minutes ${getSeconds} seconds`
      }


    return (
        <div>
        <h3>Scoreboard</h3>
        <table className="scoreboard">
            <thead>
                <tr>{"User name"}</tr>
                <tr>{"Task name"}</tr>
                <tr>{"Time"}</tr>
                <tr>{"Score"}</tr>
            </thead>
        </table>
        </div>
    )}

export default Scoreboard
