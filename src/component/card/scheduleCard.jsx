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
            <Link to={`/schedule/update/${item.id}`} className="btn btn-xs btn-primary" ><BiPencil size={16} /></Link>
        </div>
    )
}




function scheduleCard({item, handleDelete}) {
  return (
    <div className={`w-full border border-red-500 rounded-lg overflow-hidden pt-3 relative before:bg-red-500 
        before:w-full before:absolute before:top-0 before:h-20 before:rounded-b-xl before:left-0 duration-500 cursor-default hover:-translate-y-3`} key={item.id}>
        
        <div className='w-full h-28 z-20 object-cover relative'>
            <img src={`http://localhost:3000/schedule/images/${item.setlist}.jpg`} className='w-full h-full object-contain'></img>
        </div>
        <div className='p-2 pb-3'>
            {
                item.setlist == "event" ? <h3 className='font-poppins text-sm text-red-500'>{item.title}</h3> :
                <h3 className='font-poppins text-sm text-red-500'>{item.title}</h3>
            }


            <div className="flex text-xs font-poppins text-gray-400 gap-x-1">
                {
                    item.setlist == "event" ? <p className='hidden'>{item.time}</p> : <p className='block'>{item.time},</p>
                }
                <p className='capitalize'>{item.date}</p>
            </div>
            
            <div className='mt-3 flex gap-x-2'>
                <TrashButton item={item} handleDelete={handleDelete}/>
                <EditButon item={item} />
            </div>

        </div>

    </div>
  )
}

export default scheduleCard