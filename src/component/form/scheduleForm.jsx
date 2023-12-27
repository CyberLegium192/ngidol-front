import { useState } from 'react'
import axios from 'axios'
import { AiOutlineClose } from 'react-icons/ai'
import TextField from '@mui/material/TextField';
import ButtonSubmit from '../button/submitButtonMember'
import Setlist from '../select/schedule/setlistForm'
import Tema from '../select/schedule/temaForm'
import {Link} from 'react-router-dom'

function scheduleForm({ open, setOpen }) {
  const [listPer, setListPer] = useState()
  const [title, setTitle] = useState()
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [link, setLink] = useState()
  const [acara, setAcara] = useState()
  const [data, setData] = useState([{member:''}])

  const handleAddMember = (e) => {
    e.preventDefault()
    setData([...data,{member: ''}])
  }
  const handleChange =(e, i) => {
    e.preventDefault()
    const {name, value} = e.target
    const onChangeVal = [...data]
    onChangeVal[i][name] = value
    setData(onChangeVal)
  }
  const handleDelete = (i) => {
    i.preventDefault()
    const deleteValue = [...data]
    deleteValue.splice(i,1)
    setData(deleteValue)
  }
  const handleSubmit = () => {
  var vall = confirm("Apakah data yang dimasukkan sudah benar?");
  if (vall) {
    const requestData = {
      setlist: listPer,
      title,
      date,
      time,
      link,
      memberPerform: data
    };
    if(listPer == 'event'){
    axios.post('http://localhost:3000/api/v1/schedule//post/schedule', requestData)
      .then(response => {
        console.log(response.data);
        setTimeout(function () { location.href = '/schedule' }, 700);
      })
      .catch(error => {
        console.error('Error posting data:', error.message);
        // Handle error response if needed
      });
    }
    else{
      axios.post('http://localhost:3000/api/v1/schedule/api/addMembers', requestData)
        .then(response => {
          console.log(response.data);
          setTimeout(function () { location.href = '/schedule' }, 700);
        })
        .catch(error => {
          console.error('Error posting data:', error.message);
          // Handle error response if needed
        });
      
    }
      
      
  }
};

  return (
    <div className="w-full z-40 h-screen duration-500 bg-white p-4" >
      <div className='flex justify-between'>
        <h4 className=' text-2xl uppercase text-red-600 font-bold'>Schedule Form</h4>
        <Link to='/schedule' className='hover:rotate-90 duration-300' ><AiOutlineClose size={30} /></Link>
      </div>
      
      <form className='md:pb-0 md:h-auto h-screen min-[360px]:pb-40
      '>
        <div className="md:grid md:grid-cols-4 lg:gap-x-14 lg:gap-y-8 no-scrollbar
        lg:grid
        lg:grid-cols-4
        mt-5 px-4
        sm:grid
        sm:grid-cols-2
        sm:gap-x-8
        lg:overflow-y-auto
        min-[360px]:h-full
        min-[360px]:flex
        min-[360px]:gap-y-4
        min-[360px]:flex-col
        
        min-[360px]:overflow-y-scroll
        ">
          
          <Setlist setListPer={setListPer}/>
          
            <div>
              <TextField id="standard-basic" label="title" color='error' variant="standard" onChange={(e) => setTitle(e.target.value)} name='title' className='w-full'/>
            </div>
         
          
          <div>
            <TextField id="standard-basic" label="Date" color='error' variant="standard" onChange={(e) => setDate(e.target.value)} name='Date' className='w-full'/>
          </div>
          <div>
            <TextField id="standard-basic" label="Time" color='error' variant="standard" onChange={(e) => setTime(e.target.value)} name='Time' type='time' className='w-full'/>
          </div>

          <div>
            <TextField id="standard-basic" label="Link to web" color='error' variant="standard" onChange={(e) => setLink(e.target.value)} name='Link to web' className='w-full'/>
          </div>




        { listPer == 'event' ? null : 
          <div className='col-span-3'>
          <button className='btn btn-sm btn-accent mt-2' onClick={(e) => handleAddMember(e)}>Add Member</button> 

          <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 min-[340px]:grid-cols-1 w-full gap-x-3 gap-y-3">
            {
              data.map((val, i) => 
              <div className='flex items-center'>
                <TextField id="standard-basic" label="Fistname" color='error' variant="standard" value={val.member} onChange={(e) => handleChange(e, i)} name='member' className='w-full'/>
                <button className='font-poppins mt-2 cursor-pointer btn-sm' onClick={(i) => handleDelete(i)} >X</button>
              </div>
              )
            }
              
            </div>
          </div>
        } 
          
          
          
          

          <div className="mt-4">
            <ButtonSubmit handleSubmit={handleSubmit} />
          </div>

        </div>
      </form>
    </div>
  )
}

export default scheduleForm
