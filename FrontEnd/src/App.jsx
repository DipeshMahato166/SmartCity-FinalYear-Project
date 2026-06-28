
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import AdminLayout from './component/Admin/AdminLayout'
import HeroSec from "./component/global/home/Herosec"
import AdminHomePage from './layout/AdminHomePage'
import UserManagement from './component/Admin/UserManagement'

import { Provider } from "react-redux";
import store from './redux/store';

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout />}>
            {/* User Layout */}
            <Route index element={<HeroSec />} />
          </Route>

          <Route path='/admin' element={<AdminLayout />}>
            {/* Admin Layout */}
            <Route index element={<AdminHomePage />} />
            <Route path='users' element={<UserManagement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App