import ToDo from "./ToDo"

export default function ToDoList( todos, addTodo, completeTodo ){
    return (
        <>
        <form>
        <h1>My ToDo List: </h1>
        <h3>New Item</h3>
        <input
        type="text"
        onKeyDown={(e) => {
            e.key === "Enter" && addTodo(e) 
        }}
        />
        {todos.length ? (
            <>
            <h1>Todo Items: </h1>
            <ul className="todoList">
                {todos
                // .filter((i) => !i.completed)
                .map((todo) => {
                    return (
                        <ToDo
                        key={todo.id}
                        todo={todo}
                        completeTodo={completeTodo}
                        />
                    )
                })}
            </ul>
            </>
        ) : (<h1>Nothing to do but relax!</h1> )}
        
        </form>
        </>
    )
}