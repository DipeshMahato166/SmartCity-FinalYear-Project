
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import Herosec from './component/global/home/Herosec'

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
      children:[

        {
          path: "/hero",
          element: <Herosec/>
        }
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={route} />
      <Herosec/>
    </div>
  )
}

export default App