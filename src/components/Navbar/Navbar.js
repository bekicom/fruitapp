import React from 'react'

import '../../pages/all.css'
import { useNavigate } from 'react-router-dom'

export  function Navbar() {

    const navi =  useNavigate()
  return (
   <nav>
    <button  onClick={()=> navi('/')}   ><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 34.8334C27.7445 34.8334 34.8333 27.7445 34.8333 19C34.8333 10.2555 27.7445 3.16669 19 3.16669C10.2555 3.16669 3.16663 10.2555 3.16663 19C3.16663 27.7445 10.2555 34.8334 19 34.8334Z" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 12.6667L12.6666 19L19 25.3334" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.3333 19H12.6666" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
    <span>Shop</span>
    <button><svg width="38" height="38" viewBox="#ffffff" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4167 30.0833C24.4123 30.0833 30.0833 24.4123 30.0833 17.4167C30.0833 10.4211 24.4123 4.75 17.4167 4.75C10.4211 4.75 4.75 10.4211 4.75 17.4167C4.75 24.4123 10.4211 30.0833 17.4167 30.0833Z" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.25 33.25L26.3625 26.3625" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
   </nav>
  )
}
