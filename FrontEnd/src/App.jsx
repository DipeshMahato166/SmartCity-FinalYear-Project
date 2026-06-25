
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import Herosec from './component/global/home/Herosec'
import Login from './page/Login'
import Singup from './page/Singup'
import Services from './page/Services'
import Event from './page/Event'
import Gallery from './page/Gallery'
import Emergency from './page/Emergency'

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Herosec />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/event",
          element: <Event />
        },
        {
          path: "/gallery",
          element: <Gallery />
        },
        {
          path: "/emergency",
          element: <Emergency />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Singup />
    }
  ])
  return (
    <div>
      <RouterProvider router={route} />

    </div>
  )
}

export default App