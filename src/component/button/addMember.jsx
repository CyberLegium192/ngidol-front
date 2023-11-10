import React from 'react'

function addMember({open, setOpen}) {
    const handleClick = () => {
        setOpen(true)
      }
  return (
    <button className="btn btn-sm btn-accent px-5 ml-5" onClick={() => handleClick()}>add</button>
  )
}

export default addMember