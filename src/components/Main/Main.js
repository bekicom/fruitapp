import React from 'react'
import './main.css'
import Sign from '../../pages/Sign'
import {  Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/Home'
import { Create } from '../../pages/Create'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

export  function Main() {
  return (
    <div className='main'>
  <div className="phone">
   <Navbar/>
    

    <Routes>


        <Route    path='/'  element={ <Home/>   }  />
        <Route    path='/sign'  element={  <Sign/>   }  />
        <Route    path='/create'  element={  <Create/>  }  />

    </Routes>
    <Footer/>

  </div>
      
    </div>
  )
}
