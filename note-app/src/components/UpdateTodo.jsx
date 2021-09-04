import React, {useState} from 'react'
import {MdClose} from "react-icons/md";

import "../styles/UpdateTodo/UpdateTodo.css"

function UpdateTodo({onClose, text, onUpdate}) {
    const [input, setInput] = useState('')   
    
    return (
        <div className="layout">
            <button className="update-button" onClick={onClose}> <MdClose size="25px"/> </button>
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
