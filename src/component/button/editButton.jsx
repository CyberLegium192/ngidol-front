import React from 'react'
import { BiPencil } from 'react-icons/bi'
import {Link} from 'react-router-dom'
function editButton({item}) {
    return (
        <div className="tooltip" data-tip='edit'>
            <Link to={`/member/update/${item.id}`} className="btn btn-xs btn-primary" ><BiPencil size={19} /></Link>
        </div>
    )
}

export default editButton