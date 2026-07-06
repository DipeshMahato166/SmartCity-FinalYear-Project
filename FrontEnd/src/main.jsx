import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer, Slide } from 'react-toastify'
import { AuthProvider } from './context/Authcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

    <App />
    </AuthProvider>
   <ToastContainer
position="bottom-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Slide}
/>

  </StrictMode>,
)
