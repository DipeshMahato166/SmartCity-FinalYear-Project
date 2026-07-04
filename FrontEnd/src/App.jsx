import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
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
import ProgressBar from './pages/Complaint/ProgessBar'
import Step1Issue from './pages/Complaint/Step1Issue'
import ComplaintWizard from './component/Complaint/ComplaintWizard'


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
        {/* Authentication */}
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>

{/* Complaint Section */}
           <Route path='complaintwizard' element={<ComplaintWizard/>}/>
           <Route path='progress' element={<ProgressBar/>}/>
           <Route path='issue' element={<Step1Issue/>}/>


        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App