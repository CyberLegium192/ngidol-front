import {useState} from 'react'
import ButtonAdd from '../../component/button/addSchedule'
import ScheduleForm from '../../component/form/scheduleForm'


function schedulePage() {
  const [open, setOpen] = useState(false) // OPEN FORM DATA ADD
  return (
    <div className='p-5 pt-1 relative'>
        <div className='flex py-6'>
            <h3 className='text-2xl text-black font-poppins capitalize'>Schedule</h3>
            <div className="flex justify-between w-full">
                <ButtonAdd open={open} setOpen={setOpen}/>
                <button className="btn btn-sm btn-secondary px-5">filter</button>
            </div>
        </div>
        
        <ScheduleForm open={open} setOpen={setOpen}/>
        
        
        
        
      </div>
  )
}

export default schedulePage