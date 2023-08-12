import React, { useState,useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import img1 from '../assets/home/1.png'
import img2 from '../assets/home/2.png'
import img3 from '../assets/home/3.png'
import img4 from '../assets/home/4.png'
import img5 from '../assets/home/5.png'
import img6 from '../assets/home/6.png'
import 'react-toastify/dist/ReactToastify.css';

export function Home() {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("food")) || []
  );





  const notify = () => toast("malumot basketga qoshildi ");

  // console.log(savat);

  const data = [

    { img: img1, id: 1,  count:1, nomi: 'Pineapple', narxi: 500 },
    { img: img2, id: 2,  count:1, nomi: 'Banana', narxi: 500 },
    { img: img3, id: 3,  count:1, nomi: 'Green Grapes', narxi: 500 },
    { img: img4, id: 4,  count:1, nomi: 'Grapes', narxi: 500 },
    { img: img5, id: 5,  count:1, nomi: 'Melon', narxi: 500 },
    { img: img6, id: 6,  count:1, nomi: 'Mango', narxi: 500 },
    { img: img4, id: 7,  count:1, nomi: 'Grapes', narxi: 500 },
    { img: img5, id: 8,  count:1, nomi: 'Melon', narxi: 500 },
    { img: img6, id: 9,  count:1, nomi: 'Mango', narxi: 500 },
    { img: img4, id: 10,  count:1, nomi: 'Grapes', narxi: 500 },
    { img: img5, id: 11,  count:1, nomi: 'Melon', narxi: 500 },
    { img: img6, id: 12,  count:1, nomi: 'Mango', narxi: 500 },
  ]








  function locol(item) {

    const MyData = [...basket];

    let test = true;



    if (test) {
      MyData.push(item);
      setBasket(MyData);
      localStorage.setItem("food", JSON.stringify(MyData));
    }

    notify()

  }


   // obnavit
   useEffect(() => {
    const interval = setInterval(() => {
      const updatedBasket = JSON.parse(localStorage.getItem('food'));
      if (updatedBasket) {
        setBasket(updatedBasket);
      }
    }, 100); // 1000 ms = 1 sekund
  
    return () => {
      clearInterval(interval);
    };
  }, []);




  return (
    <div className='products' >

      {data.map((item, index) => (
        <div className='cart'   >
          <img src={item.img} alt="" />
          <p>{item.nomi}</p>
          <span>{item.narxi}</span>

          <button onClick={locol.bind(this, item,)}>add</button>
          <ToastContainer position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" />

        </div>
      ))}




    </div>
  )
}
