import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import { AiOutlineClose } from 'react-icons/ai'
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import DateInput from '../input/date'
import GenSelect from '../input/gen'
import Zodiac from '../input/zodiac'
import Blood from '../input/blood'
import Height from '../input/height'
import Status from '../input/status'
import FileUpload from '../input/fileUpload'
import ButtonSubmit from '../button/submitButtonMember'
function scheduleForm({ open, setOpen, readData }) {
  const [data, setData] = useState({})
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [callName, setCallName] = useState()
  const [gen, setGen] = useState()
  const [birthday, setBirthday] = useState()
  const [zodiac, setZodiac] = useState()
  const [blood, setBlood] = useState()
  const [height, setHeight] = useState()
  const [showall, setShowall] = useState()
  const [gelar, setStatus] = useState()
  const [profile, setProfile] = useState(null)
  const [jiko, setJiko] = useState()
  const [instagram, setInstagram] = useState()
  const [tiktok, setTiktok] = useState()
  const [twitter, setTwiiter] = useState()
  const [showroom, setShowroom] = useState()
  const [fanbase, setFanbase] = useState()

  const handleSubmit = () => {
      var vall = confirm("apakah data yang di masukan sudah benar?")
      if(vall ==  true){
        var formData = new FormData();
        formData.append("firstname", firstName)
        formData.append("lastname", lastName)
        formData.append("callname", callName)
        formData.append("gen", gen)
        formData.append("birthday", birthday)
        formData.append("zodiac", zodiac)
        formData.append("blood", blood)
        formData.append("height", height)
        formData.append("showall", showall)
        formData.append("status", gelar)
        formData.append("profile", profile)
        formData.append("jiko", jiko)
        formData.append("instagram", instagram)
        formData.append("tiktok", tiktok)
        formData.append("tweet", twitter)
        formData.append("showroom", showroom)
        formData.append("fanbase", fanbase)
        const res = axios.post('http://localhost:3001/upload/member', formData)
        setTimeout(function() {location.reload()}, 700);
      }
      
  }

  return (
    <div className={open ? "translate-x-0 w-full left-0 z-40 h-screen duration-500 absolute top-0 bg-white p-4" : "translate-x-full w-full left-0 z-40 h-screen duration-500 absolute top-0 bg-white p-4"}>
      <div className='flex justify-between'>
        <h4 className=' text-2xl uppercase text-red-600 font-bold'>Schedule Form</h4>
        <button className='hover:rotate-90 duration-300' onClick={() => setOpen(!open)}><AiOutlineClose size={30} /></button>
      </div>
      
      <form className='md:pb-0 md:h-auto h-screen
      '>
        <div className="md:grid md:grid-cols-4 lg:gap-x-14 lg:gap-y-8 no-scrollbar
        lg:grid
        lg:grid-cols-5
        mt-5 px-4
        sm:grid
        sm:grid-cols-2
        sm:gap-x-8
        lg:overflow-y-auto
        min-[360px]:h-full
        min-[360px]:flex
        min-[360px]:gap-y-4
        min-[360px]:flex-col
        min-[360px]:pb-52
        min-[360px]:overflow-y-scroll
        ">
          <div>
            <TextField id="standard-basic" label="First Name" color='error' variant="standard" onChange={(e) => setFirstName(e.target.value)} name='firstName' className='w-full'/>
          </div>
          <div>
            <TextField id="standard-basic" label="Last Name" color='error' variant="standard" onChange={(e) => setLastName(e.target.value)} name='lastname' className='w-full'/> 
          </div>
          <div>
            <TextField id="standard-basic" label="Call Name" color='error' variant="standard" onChange={(e) => setCallName(e.target.value)} name='callname' className='w-full'/>
          </div>
          <div>
            <GenSelect setGen={setGen}  />
          </div>
          <div>
            <TextField id="standard-basic" label="Date" color='error' variant="standard" onChange={(e) => setBirthday(e.target.value)} name='date' className='w-full'/>
          </div>
          <div>
          <Zodiac setZodiac={setZodiac} />
          </div>
          <div>
          <Blood setBlood={setBlood} />
          </div>
          <div>
          <Height setHeight={setHeight} />
          </div>
          <div>
            <TextField id="standard-basic" name='showall' label="Overall Show" color='error' variant="standard" onChange={(e) => setShowall(e.target.value)} className='w-full'/>
          </div>
          <div>
           <Status setStatus={setStatus} />
          </div>
      

          <div>
            <FileUpload setProfile={setProfile} />
          </div>
          <div className="lg:col-span-2 lg:h-full">
            <Textarea
              color="danger"
              disabled={false}
              minRows={6}
              placeholder="jikoshoukai"
              size="md"
              variant="outlined"
              onChange={(e) => setJiko(e.target.value)}
            />
          </div>
          <div></div>
          <div></div>



          <div className='min-[360px]:text-lg md:text-xl lg:text-2xl font-poppins font-bold text-red-500 
          sm:text-xl
          sm:col-span-2
          lg:-mb-10
          lg:col-span-5
          '>Sosial Media</div>
          <div>



          <TextField id="standard-basic" label="instagram " color='error' variant="standard" onChange={(e) => setInstagram(e.target.value)} name='instagram' className='w-full'/>
          </div>
          <div>
            <TextField id="standard-basic" label="Tiktok " color='error' variant="standard" onChange={(e) => setTiktok(e.target.value)} name='tiktok' className='w-full'/>
          </div>
          <div>
          <TextField id="standard-basic" label="Twitter " color='error' variant="standard" onChange={(e) => setTwiiter(e.target.value)} name='twitter' className='w-full'/>
          </div>
          <div>
            <TextField id="standard-basic" label="Showroom " color='error' variant="standard" onChange={(e) => setShowroom(e.target.value)} name='showroom' className='w-full'/>
          </div>
          <div>
            <TextField id="standard-basic" label="fanbase " color='error' variant="standard" onChange={(e) => setFanbase(e.target.value)} name='fanbase' className='w-full'/>
          </div>


          <ButtonSubmit handleSubmit={handleSubmit} />
        </div>

      </form>








    </div>
  )
}

export default scheduleForm
