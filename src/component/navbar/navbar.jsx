import Search from '../search/search'
import {AiOutlineMenu} from 'react-icons/ai'
const navbar = ({handleMenu, sideActive}) => {
    
    return (
        <>
            <div className="navbar bg-red-600 px-12
            lg:justify-normal
            min-[360px]:flex
            min-[360px]:justify-between
            ">
                <div className="flex flex-col font-poppins text-white">
                    <p className="text-md">Ngidol</p>
                    <p className="text-lg">JKT48</p>
                </div>
                <button className='text-white lg:hidden min-[360px]:block' onClick={handleMenu}><AiOutlineMenu size={30}/></button>
                <Search />

            </div>
        </>
    )

}


export default navbar