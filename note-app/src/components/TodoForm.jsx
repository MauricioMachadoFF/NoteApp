import React, {useState} from 'react'
import TodoList from './TodoList';

function TodoForm({onSubmit}) {
    const [input, setInput] = useState('');


    const handleSubmit = e => {
        e.preventDefault()
        setInput('')
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} placeholder="Add a Todo" onChange={(e) => setInput(e.target.value)}/>
                <button onClick={handleSubmit}>Add Todo</button> 
            </form>
            <TodoList />
        </div>
        
    )
}

export default TodoForm
