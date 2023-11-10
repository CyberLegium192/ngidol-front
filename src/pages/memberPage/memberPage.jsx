import React, { useEffect, useState, useRef } from 'react'
import axios from "axios"
import MemberForm from '../../component/form/memberForm'
import EditMemberForm from '../../component/form/editMemberForm'
import ButtonAdd from '../../component/button/addMember'
import Card from '../../component/card/card'
import ReadPage from '../../component/readPage/readPage'
function memberPage({active}) {
  let divRef = useRef()
  const [open, setOpen] = useState(false) // OPEN FORM DATA ADD
  const [openEdit, setOpenEdit] = useState(false) // OPEN FORM DATA ADD
  const [readPage, setReadPage] = useState(false) // CLOSE WHEN CLICK OUTSIDE
  const [api , setApi] = useState([]) // FETCHING DATA IN MEMBERPAGE
  const [readData, setReadData] = useState([])

  // FETCHING DATA FOR
  const handleRead = (item) => {
    setReadPage(!readPage)
    setReadData(item)
  }
  
  // HANDLE EDIT TOGGLE
  const handleUpdate = (item) => {
    setOpenEdit(!openEdit)
    setReadData(item)
  }
  const handleDelete = (item) => {
    var val = confirm(`ingin menghapus data ${item.callname}??`)
    if(val == true){
      axios.delete(`http://localhost:3000/member/${item.id}`)
      setTimeout(function() {
        location.reload()
      }, 700);
    }
    else{alert("silahkan cek kembali")}
    
  }

  const getData =() => {
    fetch('http://localhost:3000/member').then(resp => resp.json()).then(data => setApi(data))
  }
  useEffect(() => {
    getData()

    var handle = (e) => {
      if(!divRef.current.contains(e.target)){
          setReadPage(false)
      }
    }
    document.addEventListener('mousedown', handle)
    return () => {
        document.removeEventListener('mousedown', handle)
    }
  },[])



  return (
    <div className='p-5 pt-1 relative'>
        <div className='flex py-6'>
            <h3 className='text-2xl text-black font-poppins capitalize'>Members</h3>
            <div className="flex justify-between w-full">
                <ButtonAdd open={open} setOpen={setOpen}/>
                <button className="btn btn-sm btn-secondary px-5">filter</button>
            </div>
        </div>

        <MemberForm open={open} setOpen={setOpen}/>
        <EditMemberForm openEdit={openEdit} setOpenEdit={setOpenEdit} datas={readData}/>


        <div className="overflow-y-scroll h-screen no-scrollbar pb-64">
          <div className="lg:grid-cols-4 xl:grid-cols-5 gap-x-3 mt-7 gap-y-3
          min-[360px]:grid
          min-[360px]:grid-cols-2
          sm:grid-cols-3
          ">
            {api.map((item, index) => (
             <Card item={item} key={index} handleRead={handleRead} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
            ))}
          </div>
        </div>

        <ReadPage readPage={readPage} divRef={divRef} item={readData} setReadPage={setReadPage}/>

    </div>
  )
}

export default memberPage