import React, { useState } from "react";

function NewTaskForm({currentUser, onAddTask}) {
    const [taskName, setTaskName] = useState("");
    const [estimatedTime, setEstimatedTime] = useState("");
    const [scariness, setScariness] = useState(1);

    function handleTaskName(event) {
        setTaskName(event.target.value);
    }

    function handleEstimatedTime(event) {
        setEstimatedTime(event.target.value);
    }

    function handleScariness(event) {
        setScariness(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newTask = {
            name: taskName,
            user_id: currentUser.id,
            estimated_time: estimatedTime,
            scariness: scariness,
            finished: false,
            created_time: Date.now(),
        };

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
    }

    return (
        <form className="NewTaskForm" onSubmit={handleSubmit}>
            <h2>New Task</h2>
            
            <input className="NewContent" onChange={handleTaskName} type="text" placeholder="task name" />
            <input className="NewContent" onChange={handleEstimatedTime} type="number" min="1" placeholder="estimated time (min)" />
            <select className="NewContent" onChange={handleScariness}>
                <option>scariness</option>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
            </select>
            <button className="NewContent" type="submit">Add New Task</button>
           
        </form>
    );
}

export default NewTaskForm;
