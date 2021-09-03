import React, {useState} from 'react'
import Todo from './Todo'



function TodoList({todos, onDelete, onUpdate}) {
    //const [todos, setTodos] = useState([])

    return (
        <div>
            {todos.map((todo, index) => 
                <Todo text={todo.text} id={todo.id} onDelete={onDelete} key={index} onUpdate={onUpdate}/>
            )}
        </div>
    )
}

export default TodoList
