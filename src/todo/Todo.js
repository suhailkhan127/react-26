import React, { useState } from "react";

// Props (parent se aaye):
function Todo({ todo, remove, update, toggleComplete }) {
    const [isEditing, setIsEditing] = useState(false); // Edit mode on/off
    const [task, setTask] = useState(todo.task);
    const [priority, setPriority] = useState(todo.priority);
    const [date, setDate] = useState(todo.date);
    const [status, setStatus] = useState(todo.status);

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
        update(todo.id, task, priority, date, status);
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
        if (name === "date") setDate(value);
        if (name === "status") setStatus(value);
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
                    <div className="col">
                        <input 
                            onChange={handleChange} 
                            value={task}     // Current task text show ho raha hai
                            type="text" 
                            name="task"
                        />
                    </div>
                    <div className="col">
                        <select
                            value={priority} 
                            onChange={handleChange}
                            name="priority"
                        >
                            <option value="">Select</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>

                    <div className="col">

                        <input
                            value={date}
                            onChange={handleChange}
                            type="text"
                            id="datepicker"
                            name="date"
                            placeholder="Edit Date"
                        />
                    </div>

                    <div className="col">
                        <select
                            value={status}
                            onChange={handleChange}     // ← yahi same function
                            name="status"           
                        >
                            <option value="">Select Status</option>
                            <option value="not-started">Not Started</option>
                            <option value="in-progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

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
                <div className="todo-date">{todo.date}</div>
                <span className={`status-badge status-${todo.status}`}>
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
