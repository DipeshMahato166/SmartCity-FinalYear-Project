
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import AdminLayout from './component/Admin/AdminLayout'
import HeroSec from "./component/global/home/Herosec"
import AdminHomePage from './layout/AdminHomePage'
import UserManagement from './component/Admin/UserManagement'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Services from './pages/Services'
import Events from './pages/Events'
import Emergrncy from './pages/Emergrncy'
import Gallery from './pages/Gallery'
import About from './pages/About'


import { Provider } from "react-redux";
import store from './redux/store';

const App = () => {

  return (
    // <div>
    //   <RouterProvider router={route} />
    //   <Herosec/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          {/* User Layout */}
          <Route index element={<HeroSec />} />
          <Route path='services' element={<Services/>}/>
          <Route path='event' element={<Events/>}/>
          <Route path='emergency' element={<Emergrncy/>}/>
          <Route path='gallery' element={<Gallery/>}/>
          <Route path='about' element={<About/>}/>
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          {/* Admin Layout */}
          <Route index element={<AdminHomePage />} />
          <Route path='users' element={<UserManagement />} />
        </Route>

        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App