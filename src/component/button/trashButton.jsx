import React from 'react'
import { BsTrash } from 'react-icons/bs'
function trashButton({handleDelete, item}) {
    return (
        <div className="tooltip" data-tip='delete'>
            <button className="btn btn-xs btn-accent"><BsTrash size={19} onClick={(e) => handleDelete(item)}/></button>
        </div>
    )
}

export default trashButton