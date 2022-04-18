import React, { useState } from "react";

function NewTaskForm({handleFrontEnd}) {
    const [userName, setUserName] = useState("");
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

    function handleCreatedTime(event) {
        setCreatedTime(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newTask = {
            taskName: taskName,
            estimatedTime: estimatedTime,
            scariness: scariness,
            createdTime: createdTime,
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
            .then((newTask) => handleFrontEnd(newTask));
    }

    return (
        <form className="NewTaskForm" onSubmit={handleSubmit}>
            <h2>New Task</h2>
            <input onChange={handleTaskName} type="text">Task Name</input>
            <input onChange={handleEstimatedTime} type="number">Estimated Time</input>
            <input onChange={handleScariness} type="text">Scariness</input>
            <input onChange={handleCreatedTime} type="number">Created Time</input>
        </form>
    );
}

export default NewTaskForm;
