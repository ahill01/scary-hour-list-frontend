import React, {useState, useEffect} from "react"
import Timer from "./Timer"

function TaskListItem({id, name, estimatedTime, scariness}){

const [timer, setTimer] = useState(0)
const [finished, setFinished] = useState(false);
const [edited, setEdited] = useState(false);
const [deleted, setDeleted] = useState(false);

    function finishedClick(){
        setFinished(!finished);
    }

    function editedClick(){
        setEdited(!edited);
    }

    function deletedClick(){
        setDeleted(!deleted);
    }

    function handleFinished(event){
        event.preventDefault();
        fetch(`http://localhost:9292/tasks/${id}`, {
            method: "PATCH",
            headers: {  "Content-Type": "application/json",
                        Accept: "application/json",
                    },
            body: JSON.stringify({
                finished: true,
                actual_time: timer,
            }),
        })
        .then((res) => res.json())
        .then((task) => {
            console.log(`finished:${task.finished}`)
            console.log(`actual_time: ${task.actual_time}`)
        });
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
        <td> {name} </td>
        <td> {estimatedTime}</td>
        <td> {scariness} </td>
        <td><Timer timer={timer} setTimer={setTimer}/></td>
        {/* <td> <input type="checkbox" onChange={handlePatch} checked={finished}/> </td>    */}
        <td>
            {finished? (
        <button onClick={finishedClick} className="NewContent">
          Made it!
        </button>)
        : (<button onClick={finishedClick} className="NewContent">Not yet...</button>)}
            </td>
            <td>
            {edited? (
        <button onClick={editedClick} className="NewContent">
            Edited
        </button>)
        : (<button onClick={editedClick} className="NewContent">Edit</button>)}
        </td>
            <td>
            {deleted? (
        <button onClick={deletedClick} className="NewContent">
          Deleted
        </button>)
        : (<button onClick={deletedClick} className="NewContent">Delete</button>)}
        </td>
    </tr>    
    );
}

export default TaskListItem