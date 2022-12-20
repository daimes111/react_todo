import { useState, useEffect } from "react"
import ToDo from "./ToDo"

export default function ToDoList() {
    const [todoInput, setTodoInput] = useState({
        name: "",
        completed: false
    })
    const [todos, setTodos] = useState([])
    const [foundTodo, setFoundTodo] = useState(null)
    // const [newTodo, setNewTodo] = useState({
    //     name: "",
    //     completed: false
    // })


    const getTodos = async () => {
        try {
            const response = await fetch('/api/todos')
            const data = await response.json()
            setTodos(data)
        } catch (error) {
            console.error(error)
        }
    }

    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`/api/todos/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            setFoundTodo(data)
            // setTodos(data)

        } catch (err) {
            console.error(err)
        }
    }

    const createTodo = async () => {
        try {
            const response = await fetch('/api/todos', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...todoInput })
            })
            const data = await response.json()

            setFoundTodo(data)
            setTodoInput({
                name: "",
                completed: false
            })
        } catch (err) {
            console.error(err)
        }
    }

    const completeTodo = (evt, id) => {
        const todosCopy = [...todos]
        const indexTodo = todosCopy.findIndex((i) => i.id === id)
        todosCopy[indexTodo].completed = !todosCopy[indexTodo].completed
        setTodos([...todosCopy])
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        createTodo()
    }

    const handleChange = (evt) => {
        // evt.preventDefault()
        setTodoInput({ ...todoInput, name: evt.target.value, completed: false })
    }

    useEffect(() => {
        getTodos()
    }, [foundTodo])

    return (
        <>

            <form onSubmit={handleSubmit} className="newtodo">
                <h1>My ToDo List: </h1>
                <h3>New Item</h3>
                <input
                    type="text" name={"name"} onChange={handleChange} value={todoInput.name} />
            </form>
            {todos && todos.length ? (
                <>
                    <h1>Todo Items: </h1>
                    <ul className="todos">
                        {todos
                            .filter((i) => !i.completed)
                            .map((todo) => {
                                return (
                                    <ToDo
                                        key={todo._id}
                                        todo={todo}
                                        completeTodo={completeTodo}
                                        deleteTodo={deleteTodo}
                                    />
                                )
                            })}
                    </ul>
                    <h1>Completed Items </h1>
                    {/* <ul className="todoList">
                            {todos
                                .filter((i) => i.completed)
                                .map((todo) => {
                                    return (
                                        <ToDo
                                            key={todo._id}
                                            todo={todo}
                                            completeTodo={completeTodo}
                                            deleteTodo={deleteTodo}
                                        />
                                    )
                                })}
                        </ul> */}
                </>
            ) : (<h1>Nothing to do but relax!</h1>)}


        </>
    )
}