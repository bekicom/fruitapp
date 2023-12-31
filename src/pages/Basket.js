import React, {  useEffect,useState } from 'react'


import './all.css'

export function Basket() {


    const [getdata, setGetdata] = useState(
        JSON.parse(localStorage.getItem('food')) || []
    )

    // umumiy narx uchun state

    const [tot, setTot] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const updatedBasket = JSON.parse(localStorage.getItem('food'));
            if (updatedBasket) {
                setGetdata(updatedBasket);
            }
        }, 1000); // 1000 ms = 1 sekund
    
        return () => {
            clearInterval(interval);
        };
    }, []);
    
    function remove(itemToRemove) {
        const updatedData = getdata.filter(item => item !== itemToRemove);
        setGetdata(updatedData);
        localStorage.setItem("food", JSON.stringify(updatedData));
    }
    
    const plus = (id) => {
        const updatedData = getdata.map((item) => {
            if (item.id === id) {
                item.count = item.count + 1;
            }
            return item;
        });
        setGetdata(updatedData);
        localStorage.setItem('food', JSON.stringify(updatedData));
    }
    
    const minus = (id) => {
        const updatedData = getdata.map((item) => {
            if (item.id === id) {
                item.count = item.count >= 1 ? item.count - 1 : item.count;
            }
            return item;
        });
        setGetdata(updatedData);
        localStorage.setItem('food', JSON.stringify(updatedData));
    }
    
    useEffect(() => {
        let total = 0;
        getdata.forEach((item) => {
            total += item.narxi * item.count;
        });
        setTot(total);
    }, [getdata]);
    
    // ...
    
    
    return (
        <div className='basket'  >

            
            
  <p>{getdata.length >= 1?'':'malumot yoq'}</p>
  <span  id='total'>Umumiy narxi:{tot}$</span>
 
            {getdata.map((item) => (
                <div className='cart_basket'   >
                    <img src={item.img} alt="" />
                    <p>{item.nomi}</p>
                    <span>{item.narxi * item.count+'$'}</span>

                    <button  onClick={()=> minus(item.id)}>-</button>
                    <span>{item.count}</span>
                    <button  onClick={()=>plus(item.id)}>+</button>

                    {/* <button onClick={locol.bind(this, item)}>add</button> */}
                   
                    <button onClick={() => remove(item)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6H5H21" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10 11V17" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14 11V17" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </button>
                 
                </div>
            ))}
             
        </div>
    )
}
