import React from 'react'

function addSchedule({open, setOpen}) {
    const handleClick = () => {
        setOpen(true)
        console.log("schedule click")
      }
  return (
    <button className="btn btn-sm btn-accent px-5 ml-5" onClick={() => handleClick()}>add</button>
  )
}

export default addSchedule