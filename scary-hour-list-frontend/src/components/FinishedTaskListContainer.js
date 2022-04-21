import React, {useEffect, useState} from "react"
import FinishedTaskItem from "./FinishedTaskItem"

function FinishedTaskListContainer({currentUser, tasks}){
const [finishedTasks, setFinishedTasks]=useState([])

useEffect(()=>{
    setFinishedTasks(finished(tasks))
}
,[tasks])

    function finished(tasks){
       return  tasks.filter(task => task.finished===true)
      }


        return (
            <div className="taskList">
                <h1>FINISHED TASKS</h1>
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
                 {finishedTasks.map((task) => <FinishedTaskItem key = {task.id} id = {task.id} name={task.name} scariness={task.scariness} estimatedTime ={task.estimated_time} actualTime={task.actual_time}/>)}
                 </tbody>
                 </table>
            </div>
        )
        
    }
    
    export default FinishedTaskListContainer
