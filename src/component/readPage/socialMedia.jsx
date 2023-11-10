import React from 'react'
import { AiOutlineChrome, AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoTiktok } from 'react-icons/bi'
import { FaXTwitter } from 'react-icons/fa6'
import { MdOutlineLiveTv } from 'react-icons/md'
import { PiUsersThree } from 'react-icons/pi'
function socialMedia({item}) {
    return (
        <div className='lg:w-60 font-poppins text-black '>
            <h2 className='text-white flex items-center justify-center gap-x-2 text-xl lg:mt-0 
            '><AiOutlineChrome size={28} />Social Media</h2>
            <div className="bg-white p-5 rounded-lg mt-3">
                <ul>
                    <li><a href={`https://www.instagram.com/${item.instagram}`} className='flex text-lg italic items-center font-bold gap-x-4'><AiOutlineInstagram size={27} className='text-red-600' />{item.instagram}</a>
                    </li>
                    <li><a href={`https://www.tiktok.com/${item.tiktok}`} className='flex text-lg italic items-center font-bold gap-x-4 mt-6'><BiLogoTiktok size={27} className='text-red-600' />{item.tiktok}</a>
                    </li>
                    <li><a href={`https://twitter.com/${item.tweet}`} className='flex text-lg italic items-center font-bold gap-x-4 mt-6'><FaXTwitter size={25} className='text-red-600' />{item.tweet}</a>
                    </li>
                    <li><a href={`https://www.showroom-live.com/lite/${item.showroom}`} className='flex text-lg italic items-center font-bold gap-x-4 mt-6'><MdOutlineLiveTv size={25} className='text-red-600' />{item.showroom}</a>
                    </li>
                    <li><a href={`https://twitter.com/${item.fanbase}`} className='flex text-lg italic items-center font-bold gap-x-4 mt-6'><PiUsersThree size={25} className='text-red-600' />{item.fanbase}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default socialMedia
