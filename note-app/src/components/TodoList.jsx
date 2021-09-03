import React, {useState} from 'react'
import Todo from './Todo'



function TodoList() {
    //const [todos, setTodos] = useState([])

    // We have to show the updated data when the component is rendered
    const todos = [
        "flkfklfnlf",
        "blablablabal",
        "Uga Buga"
    ]


    const deleteButton = (key) => {
        console.log(todos)
    }

    return (
        <div>
            {todos.map((todo, index) => 
                <Todo text={todo} id={index} onDelete={deleteButton} key={index}/>
            )}
        </div>
    )
}

export default TodoList
