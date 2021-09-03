import React, {useState} from 'react'
import {MdClose} from "react-icons/md";

function UpdateTodo({onClose, text, onUpdate}) {
    const [input, setInput] = useState('')   
    
    return (
        <div>
            <button onClick={onClose}><MdClose/></button>
            <form >
                <input type="text" value={input} placeholder={text} onChange={(e) => setInput(e.target.value)}/>
                <button onClick={(e) => {
                    e.preventDefault()
                    onUpdate(input, text)
                    onClose()
                }}>Change Todo</button>
            </form>
        </div>
        
    )
}

export default UpdateTodo
