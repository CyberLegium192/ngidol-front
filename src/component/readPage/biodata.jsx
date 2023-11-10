import React from 'react'
import { TfiIdBadge, TfiRuler } from 'react-icons/tfi'
import { GiStairsCake, GiTripleYin, GiTheaterCurtains, GiStarSwirl } from 'react-icons/gi'
import { MdOutlineBloodtype } from 'react-icons/md'
import { CgQuote } from 'react-icons/cg'
function biodata({item}) {
    return (
        <div className='lg:grow font-poppins text-black'>
            <h2 className='text-white flex items-center justify-center gap-x-2 text-xl'><TfiIdBadge size={28} />Biodata</h2>
            <div className="bg-white p-5 rounded-lg mt-3 lg:flex sm:flex md:flex md:items-start lg:items-start relative overflow-hidden
            before:bg-red-500 before:absolute lg:before:z-10 before:-bottom-32 before:-right-20 before:w-56 before:h-56 before:rounded-full
            before:-z-10
            lg:mb-0
            md:mb-8
            sm:mb-8
            sm:flex-row
            min-[360px]:flex
            min-[360px]:flex-col
            min-[360px]:mb-14
            
            ">
                <ul className='lg:w-3/6 md:w-9/12 sm:w-9/12'>
                    <li className='flex text-lg italic items-center font-bold gap-x-4'><GiStairsCake size={27} className='text-red-600' />{item.birthday}</li>
                    <li className='flex text-xl italic items-center font-bold gap-x-3 mt-6'><MdOutlineBloodtype size={30} className='text-red-600' />{item.blood}</li>
                    <li className='flex text-lg italic items-center font-bold gap-x-4 mt-6'><GiTripleYin size={27} className='text-red-600' />{item.zodiac}</li>
                    <li className='flex text-lg italic items-center font-bold gap-x-4 mt-6'><TfiRuler size={27} className='text-red-600' />{item.height} cm</li>
                    <li className='flex text-lg italic items-center font-bold gap-x-4 mt-6'><GiTheaterCurtains size={27} className='text-red-600' />{item.showall} show</li>
                </ul>
                <div className="min-[360px]:mt-6 md:mt-0 sm:mt-0 lg:mt-0">
                    <p className='flex text-lg italic items-center font-bold gap-x-4'><GiStarSwirl size={27} className='text-red-600' />Jikoshoukai</p>
                    <p className='text-gray-800 text-sm mt-2 italic lg:w-64 md:w-52 sm:w-48 min-[360px]:w-full'>" {item.jiko} "</p>

                </div>

            </div>
        </div>
    )
}

export default biodata