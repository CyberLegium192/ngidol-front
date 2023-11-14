import React, { useRef, useState } from 'react'
import Navbar from '../../component/navbar/navbar'
import SideBar from '../../component/sidebar/sidebar'
import MemberPage from '../memberPage/memberPage'
import SchedulePage from '../schedulePage/schedulePage'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function memberPage() {
  const [active, setActive] = useState(0);
  const [sideActive, setSideActive] = useState(false)
  const handleMenu = () => {
    setSideActive(!sideActive)
  }
  const toogleTabs = (i) => {
    setActive(i)
  }
  return (
    <>
    <Navbar handleMenu={handleMenu} />
    <div className="flex bg-white">
        <SideBar toogleTabs={toogleTabs} active={active} sideActive={sideActive}/>
        <MemberPage active={active} />
        <SchedulePage active={active} />
    </div>
    </>
  )
}

{/* <Navbar handleMenu={handleMenu} />
    <div className="flex bg-white">
        <SideBar toogleTabs={toogleTabs} active={active} sideActive={sideActive}/>
        <div className={active === 0 ? "w-screen " : "hidden"}><MemberPage active={active} /></div>
        <div className={active === 1 ? "w-screen  " : "hidden"}><SchedulePage active={active} /></div>
    </div> */}
export default memberPage