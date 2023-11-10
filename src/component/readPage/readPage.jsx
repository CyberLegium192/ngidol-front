import React, { useEffect, useState } from 'react'
import Header from './header'
import Biodata from './biodata'
import Social from './socialMedia'

function readPage({ readPage, divRef, item, setReadPage }) {
    const handleClose =() => {
        setReadPage(!readPage)
    }
    return (
        <div className={readPage ? `fixed w-full flex justify-center items-center h-full z-20 top-0 left-0 duration-200 scale-100 
        
        before:w-full before:h-full before:fixed before:top-0 before:left-0 before:bg-black before:opacity-80 before:z-10` : "fixed w-full flex justify-center items-center h-full z-20 top-0 left-0 duration-200 scale-0 "} >

            <div className='lg:w-4/8 xl:w-8/12 md:w-4/5 rounded-md bg-white z-30 lg:p-5 relative overflow-hidden
            min-[360px]:w-full 
            min-[360px]:px-0
            min-[360px]:h-full
            lg:h-auto
            lg:px-5
            sm:h-screen
            sm:px-5
            sm:pb-5
            md:h-auto
            md:px-5
            md:pb-5
            before:bg-red-500 before:absolute before:-z-10 before:-top-20 before:opacity-80 before:-right-20 before:w-56 before:h-56 before:rounded-full
            ' ref={divRef}>
                <Header handleClose={handleClose} item={item}/>

                <div className="bg-red-700 w-full p-4 rounded-lg mt-5 
                min-[360px]:h-full
                min-[360px]:w-full
                lg:h-auto
                sm:h-auto
                md:h-auto
                ">
                    <div className="
                    no-scrollbar
                    flex gap-x-2
                    min-[360px]:flex-col
                    min-[360px]:overflow-y-scroll
                    min-[360px]:h-full
                    min-[360px]:pb-28
                    sm:overflow-y-scroll
                    lg:pb-0
                    lg:flex-row
                    sm:pb-0
                    md:pb-0
                    ">
                        <Biodata item={item}/>
                        <Social item={item}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default readPage