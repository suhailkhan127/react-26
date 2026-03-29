import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from 'uuid';
import "./Todo.css";

function TodoList() {
    // todos - ek array hai jisme saare todos store hote hain
    // Har todo ek object hai with properties:
    const [todos, setTodos] = useState([
        // uuid() → unique id generate karta hai
        { id: uuid(), task: "task 1", priority: "high", date: "13-03-2026", status: "in-progress", completed: false }, 
        { id: uuid(), task: "task 2", priority: "low", date: "14-08-2026", status: "not-started", completed: true }
    ]);

    const create = newTodo => {
        console.log(newTodo);
        setTodos([...todos, newTodo]);
    };

    const remove = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const update = (id, updtedTask, updatedPriority) => {
        const editTodos = todos.map(todo => {
            if (todo.id === id) {
                return { 
                    ...todo, 
                    task: updtedTask, 
                    priority: updatedPriority 
                };
            }
            return todo;
        });
        setTodos(editTodos);
    };

    const toggleComplete = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    // Rendering Todos List Li 
    const todosList = todos.map(todo => (
        <Todo
            key={todo.id}
            toggleComplete={toggleComplete}
            remove={remove}
            update={update}
            todo={todo} // todo ka data
        />
    ));

    return (
        <div className="TodoList">
            <h1>
                React Todo <span>Please select all fields</span>
            </h1>
            <ul className="theader">
                <li>Task</li>
                <li>Priority</li>
                <li>Date</li>
                <li>Status</li>
                <li>Actions</li>
            </ul>
            <ul>{todosList}</ul>
            <NewTodoForm createTodo={create} />
        </div>
    );
}

export default TodoList;
