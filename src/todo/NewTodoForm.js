import React, { useReducer, useEffect } from "react";
import { v4 as uuid } from 'uuid';

// createTodo props pass ki he (ye function parent se aaraha hai)
function NewTodoForm({ createTodo }) {

    // useReducer hook Complex state ko manage karne ke liye
    // Reducer ek function hai jo: Input leta hai aor Output deta hai
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),  // ← reducer
        {
            task: "",
            date: "",
            priority: "",
            status: "",
        }
    );

    useEffect(() => {
        const $input = window.$('#datepicker');

        $input.datepicker({
            format: 'dd-mm-yyyy',
            autoclose: true,
            todayHighlight: true
        });

        // 👇 ye important hai
        $input.on('changeDate', function (e) {
            setUserInput({
                date: e.format()   // selected date state me set karo
            });
        });

    }, []);

    // agar Aap 10 bhi fields add kar do, ek hi handleChange function sab ke liye kaam karega!
    const handleChange = evt => {
        setUserInput({
            [evt.target.name]: evt.target.value
            // agar more than one fields hoto
            // [evt.target.name] dynamically decide karta hai ke state ka kaunsa property update karna hai
            // [evt.target.name] ko use kerne se Ek function, multiple fields can update/handle
        });
    };

    const handleSubmit = evt => {
        // Form tag submit hone per page reload hota he
        evt.preventDefault(); // page reload hone se rokta hai
        if (userInput.task !== "" && userInput.priority !== "" && userInput.date !== "" && userInput.status !== "") {
            const newTodo = {
                id: uuid(),
                task: userInput.task,
                priority: userInput.priority, 
                date: userInput.date,
                status: userInput.status, 
                completed: false
            };
            createTodo(newTodo);
            setUserInput({ 
                task: "", 
                priority: "", 
                date: "", 
                status: "",
            });
        }
    };

    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <div className="col">
                <input
                    value={userInput.task}
                    onChange={handleChange}
                    type="text"
                    name="task"
                    placeholder="New Todo"
                />
            </div>
            <div  className="col">
                <select
                    value={userInput.priority}
                    onChange={handleChange}     // ← yahi same function
                    name="priority"           
                >
                    <option value="">Select Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
            <div className="col" >
                <input
                    value={userInput.date}
                    onChange={handleChange}
                    type="text"
                    id="datepicker"
                    name="date"
                    placeholder="Date"
                />
            </div>
            <div  className="col">
                <select
                    value={userInput.status}
                    onChange={handleChange}     // ← yahi same function
                    name="status"           
                >
                    <option value="">Select Status</option>
                    <option value="not-started">Not Started</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodoForm;
