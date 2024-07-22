import { useState } from "react"

export default function TodoInput(prop) {
    const { handleAddTodos, todoValue, setTodoValue} = prop

    return (
        <header>
            <input
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
                type="text"
                placeholder="Enter todo task.."
            />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }

            }>Add Task</button>
        </header>
    )
}
