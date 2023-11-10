import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
function header({handleClose, item}) {
  return (
    <div className='flex gap-x-4 items-center ml-3
    min-[360px]:mt-3
    lg:mt-0'>
      <button className='absolute right-2 top-2 text-white' onClick={handleClose}><AiOutlineClose size={29}/></button>
        <div className="lg:w-24 lg:h-24 min-[360px]:w-20 min-[360px]:h-20 rounded-full md:w-24 md:h-24 overflow-hidden border-red-500 border-2">
            <img src={`http://localhost:3001/member/images/${item.profile}`} className='w-full h-full object-cover' />
        </div>

        <div >
            <h2 className='font-poppins font-bold capitalize lg:text-xl min-[360px]:text-md sm:text-lg text-black'>{item.firstname} {item.lastname}</h2> 
            <div className="flex items-center gap-x-2">
              <button className="btn btn-active btn-accent cursor-default btn-xs bg-red-600 text-white px-4 rounded-full my-1">Gen {item.gen}</button>
              <button className="btn btn-active btn-accent cursor-default btn-xs bg-red-600 text-white px-4 rounded-full my-1 capitalize">{item.status} JKT48</button>
              
            </div>
            <p className='font-poppins font-bold capitalize lg:text-lg min-[360px]:text-sm md:text-lg sm:text-base text-gray-800'>{item.callname}</p>
        </div>


    </div>
  )
}

export default header