import React, {useState} from 'react'
import { MdModeEdit, MdDelete} from "react-icons/md";
import UpdateTodo from './UpdateTodo';

import '../styles/Todo/Todo.css';

function Todo({text, id, onDelete, onUpdate}) {

    const [showUpdate, setShowUpdate] = useState(false);

    return (
        <div className="todo-container">
            {showUpdate ? <UpdateTodo onClose={() => setShowUpdate(false)} id={id} onUpdate={onUpdate} text={text}/> : null}
            <div className="todo-content">
                <p className="text">{text}</p>
                <button className="todo-buttons" onClick={() => setShowUpdate(true)}> <MdModeEdit size="18px"/> </button>
                <button className="todo-buttons" onClick={() => onDelete(id)}> <MdDelete size="18px"/> </button>
            </div>
        </div>
    )
}

export default Todo
