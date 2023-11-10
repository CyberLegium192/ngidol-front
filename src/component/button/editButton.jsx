import React from 'react'
import { BiPencil } from 'react-icons/bi'

function editButton({handleUpdate, item}) {
    return (
        <div className="tooltip" data-tip='edit'>
            <button className="btn btn-xs btn-primary" onClick={() => handleUpdate(item)}><BiPencil size={19} /></button>
        </div>
    )
}

export default editButton