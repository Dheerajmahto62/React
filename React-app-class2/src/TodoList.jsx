import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample Task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((preTodo) => {
            return [...todos, { task: newTodo, id: uuidv4() , isDone: false }]
        })
        setNewTodo("")

    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((preTodos) => todos.filter((preTodos) => preTodos.id != id))
    }

    let markOneDone = (id) => {
        setTodos((pretodos) =>
            pretodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        isDone: true,
                    }
                } else
                    return todo;
            })
        )
    }

    let markAllDone = () => {
        setTodos((pretodos) =>
            pretodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                }
            })
        )
    }
    return (
        <div>
            <input placeholder="add a task"
                value={newTodo} onChange={updateTodoValue} />
            <br></br>
            <br></br>
            <button onClick={addNewTask} >Add Task </button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h2>Todo List</h2>
            <ul>
                {
                    todos.map((todos) => (
                        <li key={todos.id} >
                            <span
                              style={todos.isDone ? {textDecorationLine: "line-through"} : {}}  
                             >
                             {todos.task}</span>
                            &nbsp; &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todos.id)}>Delete</button>&nbsp;&nbsp;
                            <button onClick={() => markOneDone(todos.id)}>Mark As Done</button>
                        </li>
                    ))}
            </ul>
            <button onClick={markAllDone} >Mark All as Done</button>
        </div>
    )
}