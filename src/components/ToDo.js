import { useState } from "react"

export default function ToDo({ todo, completeTodo, deleteTodo }) {
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
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setShowInput(!showInput)
                        }
                    }}
                />

            </div>
            <input
          type="checkbox"
          checked={todo.completed}
        //   onChange={(e) => {
        //     completeTodo(todo.id, e)
        //   }}
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