
import { Outlet } from 'react-router-dom'
import Navbar from '../component/global/Navbar'

const HomeLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet />
    </div>
  )
}

export default HomeLayout