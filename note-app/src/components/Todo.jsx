import React from 'react'
import { MdModeEdit, MdDelete} from "react-icons/md";

function Todo({text, id, onDelete}) {

    return (
        <div>
            <h1>{id}</h1>
            <p>{text}</p>
            <button> <MdModeEdit/> </button>
            <button onClick={() => onDelete(id)}> <MdDelete /> </button>
        </div>
    )
}

export default Todo
