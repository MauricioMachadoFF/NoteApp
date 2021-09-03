import React, {useState} from 'react'
import { MdModeEdit, MdDelete} from "react-icons/md";
import UpdateTodo from './UpdateTodo';

function Todo({text, id, onDelete, onUpdate, pos}) {

    const [showUpdate, setShowUpdate] = useState(false);

    return (
        <div>
            {showUpdate ? <UpdateTodo pos={pos} onClose={() => setShowUpdate(false)} id={id} onUpdate={onUpdate} text={text}/> : null}
            <h1>{id}</h1>
            <p>{text}</p>
            <button onClick={() => setShowUpdate(true)}> <MdModeEdit/> </button>
            <button onClick={() => onDelete(id)}> <MdDelete /> </button>
        </div>
    )
}

export default Todo
