import React, {useState, useEffect} from "react"
import Timer from "./Timer"

function TaskListItem({id, name, estimatedTime, scariness, finished}){

const [timer, setTimer] = useState(0)
const [isFinished, setIsFinished] = useState(false);
const [edited, setEdited] = useState(false);
const [deleted, setDeleted] = useState(false);

    function finishedClick(){
        console.log("finishedClick called")
        setIsFinished(!isFinished)
    }

    useEffect(()=>{
        handleFinished()
    },[finished])

    function editedClick(){
        setEdited(!edited);
    }

    function deletedClick(){
        setDeleted(!deleted);
    }

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
    // function handleEdited(event){
    //     event.preventDefault();
    //     fetch(`http://localhost:9292/tasks/${id}`, {
    //         method: "PATCH",
    //         headers: {  "Content-Type": "application/json",
    //                     Accept: "application/json",
    //                 },
    //         body: JSON.stringify({
    //             name: name,
    //             estimated_time: estimatedTime,
    //             scariness: scariness,
    //         }),
    //     })
    //     .then((res) => res.json())
    //     .then((task) => console.log("Edited!"));
    // }

    // function handleDeleted(event){
    //     event.preventDefault();
    //     fetch(`http://localhost:9292/tasks/${id}`, {
    //         method: "DELETE",
    //         headers: {  "Content-Type": "application/json",
    //                     Accept: "application/json",
    //                 },
    //     })
    //     .then((res) => res.json())
    //     .then((task) => console.log("Deleted!"));   
    // }

    return( 
    <tr>
        <td>{name}</td>
        <td>{estimatedTime}</td>
        <td>{scariness}</td>
        <td><Timer timer={timer} setTimer={setTimer}/></td>
        <td>{(isFinished || finished)? 
        (<button onClick={finishedClick} className="NewContent">
          Made it!
        </button>):(<button onClick={finishedClick} className="NewContent">Not yet...</button>)}</td>
        <td>{edited? (
        <button onClick={editedClick} className="NewContent">
            Edited
        </button>)
        : (<button onClick={editedClick} className="NewContent">Edit</button>)}</td>
        <td>{deleted? (
        <button onClick={deletedClick} className="NewContent">
          Deleted
        </button>)
        : (<button onClick={deletedClick} className="NewContent">Delete</button>)}</td>
        </tr>    
    );
}

export default TaskListItem