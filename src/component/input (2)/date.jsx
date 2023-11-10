import React from 'react'

function date({setBirthday}) {
  return (
    <input type="date" name='date' className='border-b-2 w-full min-[360px]:mt-4 sm:mt-4 duration-500 cursor-text border-b-gray-300 hover:border-b-black focus:border-b-black focus:outline-none active:border-transparent' onChange={(e) => setBirthday(e.target.value)}/>
  )
}

export default date