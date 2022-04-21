import React, {useState, useEffect} from "react"
import Timer from "./Timer"

function TaskListItem({id, name, estimatedTime, scariness, finished, setTasks, tasks}){

const [timer, setTimer] = useState(0)
const [isFinished, setIsFinished] = useState(false);

    function finishedClick(){
        console.log("finishedClick called")
        setIsFinished(!isFinished)
    }

    function updateLocalTasks(finishedTask){
        const index = tasks.findIndex(task => task.id===id)
        const updatedTasks = [...tasks]
        updatedTasks[index][`finished`] = finishedTask.finished
        updatedTasks[index][`actual_time`] = finishedTask.actual_time
        updatedTasks[index][`finished_time`] = finishedTask.actual_time
        setTasks(updatedTasks)
    }

    useEffect(()=>{
        handleFinished()  
    },[isFinished])

    function handleFinished(){
        console.log("called handleFinished")
        if(isFinished) {
        console.log("doing patch")
        fetch(`http://localhost:9292/tasks/${id}`, {
            method: "PATCH",
            headers: {  "Content-Type": "application/json",
                        Accept: "application/json",
                    },
            body: JSON.stringify({
                finished: true,
                actual_time: timer,
                finished_time: Date.now()
            }),
        })
        .then((res) => res.json())
        .then((task) => {
            updateLocalTasks(task)
        });
    }
    }

    function handleDeleted(){
        fetch(`http://localhost:9292/tasks/${id}`, {
            method: "DELETE",
            headers: {  "Content-Type": "application/json",
                        Accept: "application/json",
                    },
        })
        .then((res) => res.json())
        .then((task) => {setTasks(tasks => tasks.filter(task => task.id !== id))
        console.log(`deleted:${task.deleted}`)
        }); 
    }
    
    return( 
    <tr>
        <td>{name}</td>
        <td>{scariness}</td>
        <td>{estimatedTime}</td>
        <td><Timer timer={timer} setTimer={setTimer}/></td>
        <td>{(isFinished || finished)? 
        (<button onClick={finishedClick} className="NewContent">
          Made it!
        </button>):(<button onClick={finishedClick} className="NewContent">Not yet...</button>)}</td>
        <td>
        <button onClick={handleDeleted} className="NewContent">
          Delete
        </button>
       </td>
        </tr>    
    );
}

export default TaskListItem
