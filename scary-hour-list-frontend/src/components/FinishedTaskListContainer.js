import React, {useEffect, useState} from "react"
import FinishedTaskItem from "./FinishedTaskItem"

function FinishedTaskListContainer({currentUser}){

    function finished(tasks){
        const finishedTasks = tasks.filter(task => task.finished===true)
        return finishedTasks
      }

        return (
            <div className="primary">
                <h1 className="primary">FINISHED TASKS</h1>
               <table className="taskTable">
                <thead>
                <tr>
                    <th>{"Task"}</th>
                    <th>{"Scariness"}</th>
                    <th>{"Estimated Time"}</th>
                    <th>{"Actual Time"}</th>
                </tr>
               </thead>
                <tbody>
                 {currentUser.tasks.map((task) => <FinishedTaskItem key = {task.id} id = {task.id} name={task.name} scariness={task.scariness} estimatedTime ={task.estimated_time} actualTime={task.actualTime}/>)}
                 </tbody>
                 </table>
            </div>
        )
        
    }
    
    export default FinishedTaskListContainer