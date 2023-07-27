import React from 'react'
import './all.css'

export  function Create() {
  return (
    <form action=""  id='form1'>
    <p>Sign In</p>


    <input type="text"  placeholder='Email' />
    <input type="text"  placeholder='Password' />
    <input type="text"  placeholder='Password' />

    <span>Forgot password?</span>
    <button  className='bnt2'>Sign In</button>

        
       </form>
  )
}
