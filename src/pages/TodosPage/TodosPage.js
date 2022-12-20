import ToDoList from "../../components/ToDoList"
import { useState, useEffect } from "react"

export default function TodosPage(props) {
    // const [todos, setTodos] = useState([])

    // const addTodo = (evt) => {
    //     const newTodo = { text: evt.target.value, id: Date.now(), completed: false }
    //     setTodos([newTodo, ...todos])
    //     evt.target.value = ""
    // }

    // const completeTodo = (evt, id) => {
    //     const todosCopy = [...todos]
    //     const indexTodo = todosCopy.findIndex((i) => i.id === id)
    //     todosCopy[indexTodo].completed = !todosCopy[indexTodo].completed
    //     setTodos([...todosCopy])
    // }

    return (
        <>
            {/* <input 
            onKeyDown={(e) => e.key === "Enter" ? addTodo(e) : null}/> */}
            <ToDoList
                // todos={todos}
                // addTodo={addTodo}
                // completeTodo={completeTodo}
            />
        </>
    )
}