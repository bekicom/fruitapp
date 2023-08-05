import React from 'react'
import './all.css'
import { useNavigate } from 'react-router-dom';

export  function Create() {
  const navigate  = useNavigate()

  return (
    <form action=""  id='form1'>
    <p>Sign In</p>


    <input type="text"  placeholder='Email' />
    <input type="text"  placeholder='Password' />
    <input type="text"  placeholder='Password' />

    <span>Forgot password?</span>
    <button  className='bnt2' onClick={() => {
              navigate("/sign");
            }}>Sign In</button>

        
       </form>
  )
}
