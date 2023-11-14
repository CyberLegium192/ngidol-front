import React from 'react'
import {Link} from 'react-router-dom'
function addMember() {
  return (
    <Link className='btn btn-sm btn-accent px-5 ml-5' to='/member/register'>ADD</Link>
  )
}

export default addMember