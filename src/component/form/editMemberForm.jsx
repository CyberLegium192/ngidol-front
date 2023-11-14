import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import GenSelect from '../input (2)/gen'
import Zodiac from '../input (2)/zodiac'
import Blood from '../input (2)/blood'
import Height from '../input (2)/height'
import Status from '../input (2)/status'
import FileUpload from '../input (2)/fileUpload'
import ButtonSubmit from '../button/submitButtonMember'
function editMemberForm() {
  const {id} = useParams()
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    callname: '',
    gen: '',
    birthday: '',
    zodiac: '',
    blood: '',
    height: '',
    showall: '',
    status: '',
    profile: null,
    jiko: '',
    instagram: '',
    tiktok: '',
    tweet: '',
    showroom: '',
    fanbase: '',
  })
  
  useEffect(() => {
    
    fetch(`http://localhost:3000/member/${id}`)
    .then(resp => resp.json())
    .then(data => {
    setValues({...values, 
    firstname: data.firstname,
    lastname: data.lastname,
    callname: data.callname,
    gen: data.gen,
    birthday: data.birthday,
    zodiac: data.zodiac,
    blood: data.blood,
    height: data.height,
    showall: data.showall,
    status: data.status,
    profile: data.profile,
    jiko: data.jiko,
    instagram: data.instagram,
    tiktok: data.tiktok,
    tweet: data.tweet,    
    showroom: data.showroom,
    fanbase: data.fanbase,
    })})
    
  }, [id])
  
  const handleSubmit =  () => {
      try {
      axios.patch(`http://localhost:3000/member/${id}`, values)
      location.reload()
      } catch (e) {
        console.log(e)
      }
  }
      

  return (
    <div className=" w-full z-40 h-screen duration-500  bg-white p-4">
      <div className='flex justify-between'>
        <h4 className=' text-2xl uppercase text-red-600 font-bold'>UPDATE Form Member</h4>
        <Link className='hover:rotate-90 duration-300' to='/member'><AiOutlineClose size={30} /></Link>
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
            <TextField id="standard-basic" label="First Name" color='error' variant="standard" onChange={(e) => setValues({...values, firstname: e.target.value})} name='values.firstname' className='w-full' value={values.firstname}
            />
          </div>
          <div>
            <TextField id="standard-basic" label="Last Name" color='error' variant="standard" onChange={(e) => setValues({...values, lastname: e.target.value})}
            value={values.lastname}
            name='lastname' className='w-full'/> 
          </div>
          <div>
            <TextField id="standard-basic" label="Call Name" color='error' variant="standard" onChange={(e) => setValues({...values, callname: e.target.value})} name='callname' className='w-full'
            value={values.callname}
            />
          </div>
          <div>
            <GenSelect setValues={setValues} values={values}/>
          </div>
          <div>
            <TextField id="standard-basic" label="Date" color='error' variant="standard" onChange={(e) => setValues({...values, birthday: e.target.value})} name='date' className='w-full' value={values.birthday}/>
          </div>
          <div>
          <Zodiac setValues={setValues} values={values}/>
          </div>
          <div>
          <Blood setValues={setValues} values={values} />
          </div>
          <div>
          <Height setValues={setValues} values={values} />
          </div>
          <div>
            <TextField id="standard-basic" name='showall' label="Overall Show" color='error' variant="standard" onChange={(e) => setValues({...values, showall: e.target.value})} className='w-full' value={values.showall}/>
          </div>
          <div>
           <Status setValues={setValues} values={values} />
          </div>
      

          <div>
            <FileUpload setValues={setValues} values={values} />
          </div>
          <div className="lg:col-span-2 lg:h-full">
            <Textarea
              color="danger"
              disabled={false}
              minRows={6}
              placeholder="jikoshoukai"
              size="md"
              variant="outlined"
              onChange={(e) => setValues({...values, jiko: e.target.value})}
              value={values.jiko}
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



          <TextField id="standard-basic" label="instagram " color='error' variant="standard" onChange={(e) => setValues({...values, instagram: e.target.value})} name='instagram' value={values.instagram} className='w-full'/>
          </div>
          <div>
            <TextField id="standard-basic" label="Tiktok " color='error' variant="standard" onChange={(e) => setValues({...values, tiktok: e.target.value})} name='tiktok' value={values.tiktok} className='w-full'/>
          </div>
          <div>
          <TextField id="standard-basic" label="Twitter " color='error' variant="standard" onChange={(e) => setValues({...values, tweet: e.target.value})} name='twitter' value={values.tweet} className='w-full'/>
          </div>
          <div>
            <TextField id="standard-basic" label="Showroom " color='error' variant="standard" onChange={(e) => setValues({...values, showroom: e.target.value})} name='showroom' value={values.showroom} className='w-full'/>
          </div>
          <div>
            <TextField id="standard-basic" label="fanbase " color='error' variant="standard" onChange={(e) => setValues({...values, fanbase: e.target.value})} name='fanbase' value={values.fanbase} className='w-full'/>
          </div>


          <ButtonSubmit handleSubmit={handleSubmit} />
        </div>

      </form>








    </div>
  )
}

export default editMemberForm