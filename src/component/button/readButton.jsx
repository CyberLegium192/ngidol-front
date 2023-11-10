import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
function readButton({detailState, setDetailState, handleRead, item}) {

    return (
        <div className="tooltip tooltip-top" data-tip='read'>
            <button className="btn btn-xs btn-secondary" onClick={() => handleRead(item)}><AiOutlineEye size={19} /></button>
        </div>
    )
}

export default readButton