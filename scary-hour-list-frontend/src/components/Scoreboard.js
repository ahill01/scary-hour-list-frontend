import React from "react"
function Scoreboard(){

    return (
        <div>
        <h3>Scoreboard</h3>
        <table className="scoreboard">
            {/* <p className="scoreboard">Scoreboard</p> */}
            <thead>
                <tr> User name </tr>
                <tr> Task name </tr>
                <tr> Time </tr>
                <tr> Score </tr>
            </thead>
        </table>
        </div>
    )}

export default Scoreboard
