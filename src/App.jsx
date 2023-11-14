import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; 
import {useState} from 'react'
import Navbar from '../src/component/navbar/navbar'
import Sidebar from '../src/component/sidebar/sidebar'
// MEMBER IMPORT 
import MemberPage from './pages/memberPage/memberPage'
import MemberForm from './component/form/memberForm'
import UpdateMember from './component/form/editMemberForm'
// SCHEDULE IMPORT
import SchedulePage from './pages/schedulePage/schedulePage'
import ScheduleForm from './component/form/scheduleForm'
import UpdateSchedule from './component/form/editScheduleForm'
// NEWS IMPORT
import NewsPage from './pages/newsPage/newsPage'
import NewsForm from './component/form/newsForm'
import UpdateNews from './component/form/editNewsForm'

// MERCH IMPORT
import MerchPage from './pages/merchPage/merchPage'
import MerchForm from './component/form/merchForm'
import EditMerchForm from './component/form/editMerch'

function App() {
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
      <Router>
          <Navbar handleMenu={handleMenu}/>
          <div className='flex'>
            <Sidebar toogleTabs={toogleTabs} active={active} sideActive={sideActive}/>
        <Routes>
          <Route path='/member' element={<MemberPage />}/>
          <Route path='/member/register' element={<MemberForm />}/>
          <Route path='/member/update/:id' element={<UpdateMember />}/>
          <Route path='/schedule' element={<SchedulePage />}/>
          <Route path='/schedule/post/schedule' element={<ScheduleForm />}/>
          <Route path='/schedule/update/:id' element={<UpdateSchedule />}/>
          <Route path='/News' element={<NewsPage />}/>
          <Route path='/News/register' element={<NewsForm />}/>
          <Route path='/News/update/:id' element={<UpdateNews />}/>
          <Route path='/merch' element={<MerchPage />}/>
          <Route path='/merch/post' element={<MerchForm />}/>
          <Route path='/merch/update/:id' element={<EditMerchForm />}/>
        </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
