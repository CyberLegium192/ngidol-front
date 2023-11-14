import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import MerchCard from '../../component/card/merchCard'

function merchPage() {
  const [data, setData] = useState([])
  
  
  useEffect(() => {
      fetch('http://localhost:3000/merch').then(resp => resp.json())
      .then(datas => setData(datas))
  }, [])


  const handleDelete = (item) => {
    var val = confirm(`ingin menghapus data ${item.product}??`)
    if(val){
      axios.delete(`http://localhost:3000/merch/${item.id}`)
      setTimeout(function() {
        location.reload()
      }, 700);
    }
    else{alert("silahkan cek kembali")}
    
  }

  return (
    <div className='p-5 pt-1 relative'>
        <div className='flex py-6'>
            <h3 className='text-2xl text-black font-poppins capitalize'>Merchendise</h3>
            <div className="flex justify-between w-full">
            <Link to='/merch/post' className="btn btn-sm btn-accent px-5 ml-5">add</Link>
                <button className="btn btn-sm btn-secondary px-5">filter</button>
            </div>
        </div>
        

        
        <div className="overflow-y-scroll h-screen no-scrollbar pb-64">
          <div className="lg:grid-cols-4 xl:grid-cols-5 gap-x-3 mt-7 gap-y-3
          min-[360px]:grid
          min-[360px]:grid-cols-2
          sm:grid-cols-3
          ">
          {
            data.map((item) => <MerchCard item={item} handleDelete={handleDelete} key={item.id}/>)
          }
          </div>
        </div>
        
        


        
        
      </div>
  )
}

export default merchPage