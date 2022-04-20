import React from "react"
function Scoreboard(){

    return (
        <div>
        <table className="scoreboard">
            {/* <p className="scoreboard">Scoreboard</p> */}
            <thead>
                <h3>Scoreboard</h3>
                <tr> User name </tr>
                <tr> Task name </tr>
                <tr> Time </tr>
                <tr> Score </tr>
            </thead>
        </table>
        </div>
    )}

export default Scoreboard
