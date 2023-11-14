import {PiUsersThreeFill} from 'react-icons/pi'
import {BsShop} from 'react-icons/bs'
import {BiSolidPlaylist} from 'react-icons/bi'
import {AiOutlineFire, AiOutlineSchedule} from 'react-icons/ai'
import { useRef } from 'react'
import {Link} from 'react-router-dom'

const menu = [
    {icons: <PiUsersThreeFill size={30} />, title: "Member"},
    {icons: <AiOutlineSchedule size={30} />, title: "Schedule"},
    {icons: <AiOutlineFire size={30}/>, title: "News"},
    {icons: <BsShop size={26}/>, title: "Merch"},
    {icons: <BiSolidPlaylist size={26}/>, title: "Setlist"},
]



function sidebar({toogleTabs, active, sideActive}) {
    return (
        <div className={sideActive ? `
        h-screen bg-red-700 p-3
        lg:static
        lg:w-80
        lg:block
        lg:translate-x-0
        lg:justify-start
        min-[360px]:fixed
        min-[360px]:z-40
        min-[360px]:w-full
        min-[360px]:flex
        min-[360px]:justify-center
        duration-300
        min-[360px]:translate-x-0`
        :
        `h-screen bg-red-700 p-3
        lg:static
        lg:w-80
        lg:block
        lg:translate-x-0
        lg:justify-start
        min-[360px]:fixed
        min-[360px]:z-40
        min-[360px]:w-full
        min-[360px]:flex
        min-[360px]:justify-center
        duration-300
        min-[360px]:translate-x-full`}
         >
            <ul className="lg:w-56
            min-[360px]:w-full
            ">
                {menu.map((item, index) => (
                    <li className='flex items-center mb-3 hover:bg-red-600 duration-500 rounded-md' key={index} >
                    <Link to={`${item.title}`} className='hover:text-dark cursor-pointer flex text-gray-200 hover:text-white p-3  rounded-md w-full text-lg items-center font-poppins gap-x-3'>
                        {item.icons}
                        {item.title}
                    </Link>
                </li>
                ))}
                
            </ul>


        </div>
    )
}

export default sidebar
