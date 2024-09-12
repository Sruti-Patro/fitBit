import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import React from 'react';
import App from './App';
import { About, Community, Contact, Dashboard, Home } from './components/Index';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/community' element={<Community/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Route>
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
  </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
