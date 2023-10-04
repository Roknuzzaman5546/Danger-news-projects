import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import rout from './Routs/Routs.jsx'
import Authprovider from './Authprovider/Authprovider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={rout}></RouterProvider>
    </Authprovider>
  </React.StrictMode>,
)
