import React, {useState, useEffect} from 'react'
import TodoList from './TodoList';

function TodoForm() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        
      });

    const handleSubmit = e => {
        e.preventDefault()
        const res = {
                id: Math.floor(Math.random() * 10000),
                text: input
            }
        setTodos((prev) => [
            res, ...prev
        ])
        setInput('')
    }

    const deleteButton = (id) => {
        const removedArray = todos.filter((todo) => todo.id !== id)
        setTodos(removedArray)
    }
    
    const updateButton = (input, pos) => {
        const res = todos
        res[pos].text = input
        console.log(res)
        setTodos(res)
    }
    
    return (
        <div>
            <form>
                <input type="text" value={input} placeholder="Add a Todo" onChange={(e) => setInput(e.target.value)}/>
                <button onClick={handleSubmit}>Add Todo</button> 
            </form>
            <TodoList todos={todos} onDelete={deleteButton} onUpdate={updateButton}/>
        </div>
        
    )
}

export default TodoForm
