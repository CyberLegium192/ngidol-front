import { useState } from 'react'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from 'axios'
import { AiOutlineClose } from 'react-icons/ai'
import TextField from '@mui/material/TextField';
import ButtonSubmit from '../button/submitButtonMember'
import {Link} from 'react-router-dom'

function newsForm() {
  const [acara, setAcara] = useState()
  const [tema, setTema] = useState()
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [link, setLink] = useState()

  
  const handleSubmit = () => {
      var vall = confirm("apakah data yang di masukan sudah benar?")
      if(vall ==  true){
        const noval = {
          news: acara,
          tema: tema,
          date: date,
          time: time,
          link: link,
      }
        axios.post('http://localhost:3000/news', noval) 
        setTimeout(function() {location.href='/news'}, 700);
      }
  }

  return (
    <div className="w-full z-40 h-screen duration-500 bg-white p-4" >
      <div className='flex justify-between'>
        <h4 className=' text-2xl uppercase text-red-600 font-bold'>News Form</h4>
        <Link to='/news' className='hover:rotate-90 duration-300' ><AiOutlineClose size={30} /></Link>
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
            <TextField id="standard-basic" label="News" color='error' variant="standard" onChange={(e) => setAcara(e.target.value)} name='News' className='w-full'/>
          
          <Tema setTema={setTema}/>
          <div>
            <TextField id="standard-basic" label="Date" color='error' variant="standard" onChange={(e) => setDate(e.target.value)} name='Date' className='w-full'/>
          </div>
          <div>
            <TextField id="standard-basic" label="Time" color='error' variant="standard" onChange={(e) => setTime(e.target.value)} name='Time' type='time' className='w-full'/>
          </div>

          <div>
            <TextField id="standard-basic" label="Link to web" color='error' variant="standard" onChange={(e) => setLink(e.target.value)} name='Link to web' className='w-full'/>
          </div>




          <div className="mt-4">
            <ButtonSubmit handleSubmit={handleSubmit} />
          </div>

        </div>
      </form>
    </div>
  )
}

function Tema({setTema}) {
  return (
  <FormControl variant="standard" className="w-full">
    <InputLabel id="demo-simple-select-error-label" color="error">
      Tema
    </InputLabel>
    <Select
      labelId="demo-simple-select-error-label"
      id="demo-simple-select-error"
      label="Tema"
      name="Tema"
      onChange={(e) => setTema(e.target.value)}
      color="error"
    >
      <MenuItem value="THEATER"><p className="text-base font-poppins">THEATER</p></MenuItem> 
      <MenuItem value="EVENT"><p className="text-base font-poppins">EVENT</p></MenuItem> 
      <MenuItem value="BIRTHDAY"><p className="text-base font-poppins">BIRTHDAY</p></MenuItem> 
      <MenuItem value="OTHER"><p className="text-base font-poppins">OTHER</p></MenuItem> 
    </Select>
  </FormControl>
);
}

export default newsForm
