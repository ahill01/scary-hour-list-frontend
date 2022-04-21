import React, {useState, useEffect} from "react"
import Timer from "./Timer"

function TaskListItem({id, name, estimatedTime, scariness, finished, setTasks}){

const [timer, setTimer] = useState(0)
const [isFinished, setIsFinished] = useState(false);

    function finishedClick(){
        console.log("finishedClick called")
        setIsFinished(!isFinished)
    }

    // function deletedClick(){
    //     console.log("deletedClick called")
    //     setDeleted(!deleted);
    // }

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
            setIsFinished(task.finished)
            console.log(`finished:${task.finished}`)
            console.log(`actual_time: ${task.actual_time}`)
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
