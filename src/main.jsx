import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routers from './Utility/Routers.jsx'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Routers/>
    <Toaster />
  </>,
)
