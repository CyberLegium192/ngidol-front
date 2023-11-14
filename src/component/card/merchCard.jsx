import { BsTrash } from 'react-icons/bs'
import { BiPencil } from 'react-icons/bi'
import {Link} from 'react-router-dom'
const TrashButton = ({item, handleDelete}) => {
    return (
        <div className="tooltip" data-tip='delete'>
            <button className="btn btn-xs btn-accent" onClick={() => handleDelete(item)} ><BsTrash size={14} /></button>
        </div>
    )
}
const EditButon = ({item}) => {
    return (
        <div className="tooltip" data-tip='edit'>
            <Link to={`/merch/update/${item.id}`} className="btn btn-xs btn-primary" ><BiPencil size={16} /></Link>
        </div>
    )
}




function merchCard({item, handleDelete}) {
  return (
    <div className={`w-full border border-red-500 rounded-lg overflow-hidden  relative duration-500 cursor-default hover:-translate-y-3`} key={item.id}>
        
        <div className='w-full h-28 z-20 object-cover relative'>
            <img src={`http://localhost:3001/merch/images/${item.image}`} className='w-full h-full object-cover'></img>
        </div>
        <div className='p-2 pb-3'>
            <h3 className='font-poppins text-sm text-red-500'>{item.product}</h3>

            <div className="flex text-xs font-poppins text-gray-400 gap-x-1">
                <p className='capitalize'>{item.price}</p>
            </div>
            
            <div className='mt-3 flex gap-x-2'>
                <TrashButton item={item} handleDelete={handleDelete}/>
                <EditButon item={item} />
            </div>

        </div>

    </div>
  )
}

export default merchCard