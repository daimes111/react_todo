import { useState } from "react"

export default function ToDo({ todo, completeTodo, updateTodo, deleteTodo }) {
    const [showInput, setShowInput] = useState(false)
    return (
        <li className="todo">
            <div className="whyLeft">
                <h2
                    onClick={(e) => {
                        setShowInput(!showInput)
                    }}
                >
                    {todo.name}
                </h2>
                <input
                    style={{ display: showInput ? "block" : "none" }}
                    type="text"
                    defaultValue={todo.name}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            updateTodo(todo._id, todo.name= e.target.value)
                            setShowInput(!showInput)
                        }
                    }}
                />

            </div>
            <input
          type="checkbox"
          defaultChecked={todo.completed }
          onChange={() => {
            updateTodo(todo._id, todo.completed = !todo.completed)
          }}
        />
            <button
            // checked={todo.completed}
                onClick={() => {
                    deleteTodo(todo._id)
                }}
            > Delete Todo</button>
        </li>
    )
}