import { useState } from "react"

export default function ToDo({ todo, completeTodo }) {
    const [showInput, setShowInput] = useState(false)
    return (
        <li>
            <div className="whyLeft">
                <h2
                    onClick={(e) => {
                        setShowInput(!showInput)
                    }}
                >
                    {todo.text}
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
        </li>
    )
}