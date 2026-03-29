import React, { useState } from "react";

// Props (parent se aaye):
function Todo({ todo, remove, update, toggleComplete }) {
    const [isEditing, setIsEditing] = useState(false); // Edit mode on/off
    const [task, setTask] = useState(todo.task);
    const [priority, setPriority] = useState(todo.priority);

    // remove function hai (parent se aaya)
    const handleDelete = evt => {
        remove(evt.target.id); // se todo ka id milta hai aur wo delete ho jata hai
    };

    // EditMode ko toggle karna
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    // Naya task text parent ko bhejta hai && Edit mode close hota hai
    const handleUpdate = evt => {
        evt.preventDefault();
        update(todo.id, task, priority);
        toggleEdit();
    };

    // Edit mode ke input field mein jo likhte ho, wo task state mein store hota hai
    // const handleChange = evt => {
    //     setTask(evt.target.value); 
    // };
    const handleChange = evt => {
        const { name, value } = evt.target;
    
        if (name === "task") setTask(value);
        if (name === "priority") setPriority(value);
    };

    // 
    const toggleCompleted = evt => {
        toggleComplete(evt.target.id);
    };

    let result;
    if (isEditing) { // isEditing - batata hai ke currently edit mode hai 
        result = (
            <div className="Todo">
                <form className="Todo-edit-form" onSubmit={handleUpdate}>
                    <input 
                        onChange={handleChange} 
                        value={task}     // Current task text show ho raha hai
                        type="text" 
                        name="task"
                    />
                    <select
                        value={priority} 
                        onChange={handleChange}
                        id="priority"
                        name="priority"
                    >
                        <option value="">Select</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    <button>Save</button>
                </form>
            </div>
        );
    } else {  // View Mode
        result = (
            <div className="Todo">
                <li
                    id={todo.id}
                    onClick={toggleCompleted}
                    className={todo.completed ? "Todo-task completed" : "Todo-task"}
                >
                    {todo.task}
                </li>
                <span className={`priority-badge priority-${todo.priority}`}>
                    {todo.priority}
                </span>
                <div>{todo.date}</div>
                <span className={`priority-badge status-${todo.status}`}>
                    {todo.status}
                </span>
                <div className="Todo-buttons">
                    <button onClick={toggleEdit}>
                        <i className="fas fa-pen" />
                    </button>
                    <button onClick={handleDelete}>
                        <i id={todo.id} className="fas fa-trash" />
                    </button>
                </div>
            </div>
        );
    }
    return result;
}

export default Todo;
