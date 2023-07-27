import React from 'react'
import './all.css'
import {  useNavigate } from 'react-router-dom'

export default function Sign() {

   const navigate  = useNavigate()


  return (
        <form action=""  id='form1'>
     <p>Sign In</p>


     <input type="text"  placeholder='Email' />
     <input type="text"  placeholder='Password' />

     <span>Forgot password?</span>
     <button  onClick={() => {
              navigate("/create");
            }}  >Sign In</button>

         
        </form>
      
  )
}
