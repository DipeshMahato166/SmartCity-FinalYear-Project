import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import AdminLayout from './component/Admin/AdminLayout'
import AdminHomePage from './layout/AdminHomePage'
import UserManagement from './component/Admin/UserManagement'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Services from './pages/Services'
import Events from './pages/Events'
import Emergrncy from './pages/Emergrncy'
import ComplaintWizard from './component/Complaint/ComplaintWizard'
import Herosec from './component/home/Herosec'


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
          <Route index element={<Herosec />} />
          <Route path='services' element={<Services/>}/>
          <Route path='event' element={<Events/>}/>
          <Route path='emergency' element={<Emergrncy/>}/>
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


        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App