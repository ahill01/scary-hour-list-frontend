import React, { useState } from "react";

function NewTaskForm({currentUser, onAddTask}) {
    const [taskName, setTaskName] = useState("");
    const [estimatedTime, setEstimatedTime] = useState({hour:0,min:0,sec:0});
    const [scariness, setScariness] = useState(1);

    function handleTaskName(event) {
        setTaskName(event.target.value);
    }

    function handleEstimatedTime(event) {
        if(event.target.name==="hour")
        {
            setEstimatedTime({...estimatedTime, hour:event.target.value})
        }
        else if(event.target.name==="min"){
            setEstimatedTime({...estimatedTime, min: event.target.value})
        }
        else if(event.target.name==="sec"){
            setEstimatedTime({...estimatedTime, sec:event.target.value})
        }
    }

    function handleScariness(event) {
        setScariness(event.target.value);
    }

    function convertToSec(obj){
        const hourInSec = parseInt(obj.hour*3600)
        const minInSec = parseInt(obj.min*60)
        const sec = parseInt(obj.sec)
        const sum = hourInSec + minInSec + sec
        return sum
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newTask = {
            name: taskName,
            user_id: currentUser.id,
            estimated_time: convertToSec(estimatedTime),
            scariness: scariness,
            finished: false,
            created_time: Date.now(),
        };
        if(currentUser.name){
        fetch("http://localhost:9292/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(newTask),
        })
            .then((res) => res.json())
            .then((newTask) => onAddTask());
        } else {
            window.alert("Please log in or create an account to continue!")
        }
    }
    return (
        <form className="newTaskForm" onSubmit={handleSubmit}>
            <h2 className="primary">New Task</h2>
            <input className="NewContent" onChange={handleTaskName} type="text" placeholder="task name" />
            <input className="NewContent" onChange={handleEstimatedTime} type="number" min="0" name="hour" placeholder="estimated time (hour)" />
            <input className="NewContent" onChange={handleEstimatedTime} type="number" min="0" name="min" placeholder="estimated time (min)" />
            <input className="NewContent" onChange={handleEstimatedTime} type="number" min="0" name="sec" placeholder="estimated time (sec)" />
            <select className="NewContent" onChange={handleScariness}>
                <option className="NewContent">scariness</option>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
            </select>
            <button className="NewContent" type="submit">Create Task</button>
           
        </form>
    );
}

export default NewTaskForm;
