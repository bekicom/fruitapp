import React from 'react'


import img1 from '../assets/home/1.png'
import img2 from '../assets/home/2.png'
import img3 from '../assets/home/3.png'
import img4 from '../assets/home/4.png'
import img5 from '../assets/home/5.png'
import img6 from '../assets/home/6.png'

export  function Home() {

  const data = [

    {img:img1, nomi:'Pineapple',narxi:955},
    {img:img2, nomi:'Banana',narxi:998},
    {img:img3, nomi:'Green Grapes',narxi:998},
    {img:img4, nomi:'Grapes',narxi:998},
    {img:img5, nomi:'Melon',narxi:998},
    {img:img6, nomi:'Mango',narxi:998},
    {img:img4, nomi:'Grapes',narxi:998},
    {img:img5, nomi:'Melon',narxi:998},
    {img:img6, nomi:'Mango',narxi:998},
    {img:img4, nomi:'Grapes',narxi:998},
    {img:img5, nomi:'Melon',narxi:998},
    {img:img6, nomi:'Mango',narxi:998},
  ]



  


  return (
    <div className='products' >
  
      {data.map((item)=>(
          <div className='cart'>
            <img src={item.img} alt="" />
            <p>{item.nomi}</p>
            <span>{item.narxi}</span>
             </div>
      ))}

   


    </div>
  )
}
