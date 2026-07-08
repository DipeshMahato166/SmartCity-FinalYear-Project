
import { Outlet } from 'react-router-dom'
import Navbar from '../component/global/Navbar'
import Footer from '../component/global/Footer'

const HomeLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default HomeLayout