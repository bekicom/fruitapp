import React from 'react'
import './main.css'
import Sign from '../../pages/Sign'
import {  Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/Home'
import { Create } from '../../pages/Create'

export  function Main() {
  return (
    <div className='main'>
  <div className="phone">
    


    <Routes>


        <Route    path='/'  element={ <Home/>   }  />
        <Route    path='/sign'  element={  <Sign/>   }  />
        <Route    path='/create'  element={  <Create/>  }  />

    </Routes>

  </div>
      
    </div>
  )
}
