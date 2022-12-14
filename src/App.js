import "./styles.css"
import ToDoList from "./components/ToDoList"
import { useState, useEffect } from "react"

export default function App() {
    const [ todos, setTodos ] = useState([])

    const addTodo = (e) => {
        const newTodo = { text: e.target.value, id: Date.now(), completed: false}
        setTodos([newTodo, ...todos])
        e.target.value = ""
    }

        const completeTodo = (e, id) => {
            const todosCopy = [...todos]
            const indexTodo = todosCopy.findIndex((i) => i.id === id)
            todosCopy[indexTodo].completed = !todosCopy[indexTodo].completed
            setTodos([...todosCopy])
        }
    
    return(
        <div className="App">
            {/* <input 
            onKeyDown={(e) => e.key === "Enter" ? addTodo(e) : null}/> */}
            <ToDoList 
            todos={todos}
            addTodo={addTodo}
            completeTodo={completeTodo}
            />
        </div>
    )
}