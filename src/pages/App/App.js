import { useState, useEffect } from "react"
// import { Routes, Route } from "react-router-dom"
import TodosPage from "../TodosPage/TodosPage"

function App() {
    const [state, setState] = useState(null)

    const fetchState = async () => {
        try {
            const response = await fetch('/api/test')
            const data = await response.json()
            setState(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchState()
    }, [])

    return (
        <main className="App">
            <TodosPage />
        </main>
    )
}

export default App