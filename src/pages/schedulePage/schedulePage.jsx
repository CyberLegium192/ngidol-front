import {useEffect, useState} from 'react'
import axios from 'axios'
import ButtonAdd from '../../component/button/addSchedule'
import ScheduleForm from '../../component/form/scheduleForm'
import ScheduleFormEdit from '../../component/form/editScheduleForm'
import ScheduleCard from '../../component/card/scheduleCard'

function schedulePage() {
  const [open, setOpen] = useState(false) // OPEN FORM DATA ADD
  const [openEdit, setOpenEdit] = useState(false) // OPEN FORM DATA ADD
  const [data, setData] = useState([])
  const [readData, setReadData] = useState([])
  
  
  useEffect(() => {
      fetch('http://localhost:3000/api/v1/schedule/').then(resp => resp.json())
      .then(datas => setData(datas.schedule))
  }, [])


  const handleUpdate = (item) => {
    setOpenEdit(!openEdit)
    setReadData(item)
  }

  const handleDelete = (item) => {
    var val = confirm(`ingin menghapus data ${item.setlist}??`)
    if(val){
      axios.delete(`http://localhost:3000/schedule/${item.id}`)
      setTimeout(function() {
        location.reload()
      }, 700);
    }
    else{alert("silahkan cek kembali")}
    
  }

  return (
    <div className='p-5 pt-1 relative'>
        <div className='flex py-6'>
            <h3 className='text-2xl text-black font-poppins capitalize'>Schedule</h3>
            <div className="flex justify-between w-full">
                <ButtonAdd open={open} setOpen={setOpen}/>
                <button className="btn btn-sm btn-secondary px-5">filter</button>
            </div>
        </div>
        

        {/* <ScheduleForm open={open} setOpen={setOpen}/> */}
        {/* <ScheduleFormEdit openEdit={openEdit} setOpenEdit={setOpenEdit} datas={readData}/> */}
        <div className="overflow-y-scroll h-screen no-scrollbar pb-64">
          <div className="lg:grid-cols-4 xl:grid-cols-5 gap-x-3 mt-7 gap-y-3
          min-[360px]:grid
          min-[360px]:grid-cols-2
          sm:grid-cols-3
          ">
          { 
            data?.map((item) => <ScheduleCard item={item} handleDelete={handleDelete} key={item.id}/>)
          }
          </div>
        </div>
        
        


        
        
      </div>
  )
}

export default schedulePage