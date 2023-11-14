import React, { useState } from 'react'
import ReadButton from '../button/readButton'
import EditButton from '../button/editButton'
import TrashButton from '../button/trashButton'

function card({item, handleRead, handleDelete}) {

    return (
        <div className={`w-full border border-red-500 rounded-lg overflow-hidden p-5 pb-3 relative before:bg-red-500 
        before:w-full before:absolute before:top-0 before:h-20 before:rounded-b-xl before:left-0 duration-500 cursor-default hover:-translate-y-3`} key={item.id}>

            <div className="avatar flex justify-center relative ">
                <div className="w-20 rounded-full bg-center bg-cover border border-red-600 shadow-lg">
                    <img src={`http://localhost:3001/member/images/${item.profile}`} alt={item.callname} />
                </div>
            </div>

            <div className="text-center mt-2">
                <button className='text-sm bg-red-500 text-white px-3 rounded-md'>Gen {item.gen}</button>
                <h4 className='text-center text-black font-poppins text-md mt-1'>{item.callname}</h4>
                <p className='text-slate-800 text-sm mt-3 line-clamp-2'>"{item.jiko}"</p>
            </div>


            {/* BUTTON ACTION */}
            <div className="flex justify-between mt-5">
                <ReadButton  handleRead={handleRead} item={item}/>
                <EditButton item={item}/>
                <TrashButton handleDelete={handleDelete} item={item}/>
            </div>
        </div>
    )
}

export default card