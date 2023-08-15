import React, { useState ,useEffect} from 'react'

import '../../pages/all.css'
import { useNavigate } from 'react-router-dom'

export  function Footer() {
        const [color,setColor] =useState(true)
        const [color2,setColor2] =useState(true)


        const [open_m,setOpen_m] = useState(false)


  const navigate = useNavigate()

  const add = ()=>{
        setColor(!color)
       
  }
  const addbasket = ()=>{
        setColor2(!color2)
  }

  

  ///  basket count 
  const [b_son,setB_son] =  useState(


        JSON.parse(localStorage.getItem('food'))
  )
  
  // obnavit
  useEffect(() => {
        const interval = setInterval(() => {
          const updatedBasket = JSON.parse(localStorage.getItem('food'));
          if (updatedBasket) {
                setB_son(updatedBasket);
          }
        }, 100); // 1000 ms = 1 sekund
      
        return () => {
          clearInterval(interval);
        };
      }, []);
 



   const open_b = () => {

        setOpen_m(!open_m)



   }

 




  return (
    <footer>

       

        <button   onClick={()=>navigate('/home',add()) }    >
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.25 12.75L17 2.83337L29.75 12.75V28.3334C29.75 29.0848 29.4515 29.8055 28.9201 30.3369C28.3888 30.8682 27.6681 31.1667 26.9167 31.1667H7.08333C6.33189 31.1667 5.61122 30.8682 5.07986 30.3369C4.54851 29.8055 4.25 29.0848 4.25 28.3334V12.75Z" stroke={ color? "#C0C0C0" :'#F1C40F'} stroke-Width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.75 31.1667V17H21.25V31.1667" stroke={ color? "#C0C0C0" :'#F1C40F'}  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
        <button><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5 11.3334C25.5 9.07903 24.6045 6.91703 23.0104 5.32297C21.4163 3.72891 19.2543 2.83337 17 2.83337C14.7457 2.83337 12.5837 3.72891 10.9896 5.32297C9.39553 6.91703 8.5 9.07903 8.5 11.3334C8.5 21.25 4.25 24.0834 4.25 24.0834H29.75C29.75 24.0834 25.5 21.25 25.5 11.3334Z" stroke="#C0C0C0" stroke-Width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.4508 29.75C19.2018 30.1794 18.8443 30.5358 18.4142 30.7835C17.984 31.0312 17.4964 31.1616 17 31.1616C16.5036 31.1616 16.016 31.0312 15.5859 30.7835C15.1557 30.5358 14.7982 30.1794 14.5492 29.75" stroke="#C0C0C0" stroke-Width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
        <button  onClick={()=> open_b()} id='plus'><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="30" fill="#F1C40F"/>
<path d="M30 17.7028V42.2974" stroke="white"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.7027 30H42.2973" stroke="white"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
        <button onClick={(()=> navigate( '/basket',addbasket()))}  ><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.75 31.1667C13.5324 31.1667 14.1667 30.5325 14.1667 29.75C14.1667 28.9676 13.5324 28.3334 12.75 28.3334C11.9676 28.3334 11.3333 28.9676 11.3333 29.75C11.3333 30.5325 11.9676 31.1667 12.75 31.1667Z" stroke={color2? "#C0C0C0" :'#F1C40F'} stroke-Width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.3333 31.1667C29.115 31.1667 29.75 30.5325 29.75 29.75C29.75 28.9676 29.1157 28.3334 28.3333 28.3334C27.5509 28.3334 26.9167 28.9676 26.9167 29.75C26.9167 30.5325 27.5509 31.1667 28.3333 31.1667Z" stroke={color2? "#C0C0C0" :'#F1C40F'}stroke-Width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.41666 1.41663H7.08333L10.88 20.3858C11.0095 21.038 11.3644 21.6239 11.8824 22.0409C12.4003 22.4579 13.0485 22.6794 13.7133 22.6666H27.4833C28.1482 22.6794 28.7963 22.4579 29.3143 22.0409C29.8323 21.6239 30.1871 21.038 30.3167 20.3858L32.5833 8.49996H8.5" stroke={color2? "#C0C0C0" :'#F1C40F'} stroke-Width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<span>{b_son}</span>
  {/* <span  id='span'>{b_son.length ? b_son.length : '0'}</span> */}
</button>
        <button   ><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_15_15)">
<path d="M17 21.25C19.3472 21.25 21.25 19.3472 21.25 17C21.25 14.6528 19.3472 12.75 17 12.75C14.6528 12.75 12.75 14.6528 12.75 17C12.75 19.3472 14.6528 21.25 17 21.25Z" stroke="#C0C0C0" stroke-Width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.4833 21.25C27.2948 21.6772 27.2385 22.1512 27.3218 22.6108C27.4052 23.0704 27.6242 23.4944 27.9508 23.8283L28.0358 23.9133C28.2993 24.1764 28.5083 24.4889 28.6508 24.8329C28.7934 25.1768 28.8668 25.5455 28.8668 25.9179C28.8668 26.2902 28.7934 26.6589 28.6508 27.0029C28.5083 27.3468 28.2993 27.6593 28.0358 27.9225C27.7727 28.1859 27.4602 28.3949 27.1163 28.5375C26.7723 28.68 26.4036 28.7534 26.0313 28.7534C25.6589 28.7534 25.2902 28.68 24.9463 28.5375C24.6023 28.3949 24.2898 28.1859 24.0267 27.9225L23.9417 27.8375C23.6078 27.5109 23.1837 27.2918 22.7242 27.2085C22.2646 27.1251 21.7906 27.1814 21.3633 27.37C20.9443 27.5495 20.587 27.8477 20.3353 28.2278C20.0836 28.6079 19.9485 29.0533 19.9467 29.5091V29.75C19.9467 30.5014 19.6482 31.2221 19.1168 31.7534C18.5855 32.2848 17.8648 32.5833 17.1133 32.5833C16.3619 32.5833 15.6412 32.2848 15.1099 31.7534C14.5785 31.2221 14.28 30.5014 14.28 29.75V29.6225C14.269 29.1535 14.1173 28.6988 13.8444 28.3173C13.5715 27.9358 13.1902 27.6452 12.75 27.4833C12.3227 27.2947 11.8487 27.2385 11.3892 27.3218C10.9296 27.4051 10.5056 27.6242 10.1717 27.9508L10.0867 28.0358C9.82353 28.2992 9.51105 28.5082 9.16709 28.6508C8.82312 28.7934 8.45443 28.8668 8.08209 28.8668C7.70974 28.8668 7.34105 28.7934 6.99709 28.6508C6.65313 28.5082 6.34065 28.2992 6.0775 28.0358C5.81407 27.7727 5.60509 27.4602 5.4625 27.1162C5.31992 26.7722 5.24653 26.4036 5.24653 26.0312C5.24653 25.6589 5.31992 25.2902 5.4625 24.9462C5.60509 24.6022 5.81407 24.2898 6.0775 24.0266L6.1625 23.9416C6.4891 23.6077 6.70818 23.1837 6.79151 22.7241C6.87484 22.2646 6.81858 21.7906 6.63 21.3633C6.45042 20.9443 6.15224 20.5869 5.77216 20.3352C5.39209 20.0835 4.9467 19.9484 4.49084 19.9466H4.25001C3.49856 19.9466 2.77789 19.6481 2.24654 19.1168C1.71518 18.5854 1.41667 17.8647 1.41667 17.1133C1.41667 16.3618 1.71518 15.6412 2.24654 15.1098C2.77789 14.5785 3.49856 14.28 4.25001 14.28H4.3775C4.84641 14.269 5.30118 14.1172 5.68268 13.8443C6.06418 13.5715 6.35477 13.1902 6.51667 12.75C6.70525 12.3227 6.7615 11.8487 6.67818 11.3891C6.59485 10.9296 6.37577 10.5055 6.04917 10.1716L5.96417 10.0866C5.70074 9.82349 5.49175 9.511 5.34917 9.16704C5.20658 8.82308 5.13319 8.45439 5.13319 8.08204C5.13319 7.7097 5.20658 7.34101 5.34917 6.99704C5.49175 6.65308 5.70074 6.3406 5.96417 6.07746C6.22731 5.81403 6.5398 5.60504 6.88376 5.46246C7.22772 5.31987 7.59641 5.24648 7.96875 5.24648C8.3411 5.24648 8.70979 5.31987 9.05375 5.46246C9.39771 5.60504 9.7102 5.81403 9.97334 6.07746L10.0583 6.16246C10.3922 6.48905 10.8163 6.70814 11.2758 6.79147C11.7354 6.87479 12.2094 6.81854 12.6367 6.62996H12.75C13.169 6.45038 13.5264 6.1522 13.7781 5.77212C14.0298 5.39204 14.1649 4.94666 14.1667 4.49079V4.24996C14.1667 3.49851 14.4652 2.77784 14.9965 2.24649C15.5279 1.71514 16.2486 1.41663 17 1.41663C17.7515 1.41663 18.4721 1.71514 19.0035 2.24649C19.5348 2.77784 19.8333 3.49851 19.8333 4.24996V4.37746C19.8352 4.83332 19.9702 5.27871 20.2219 5.65879C20.4736 6.03886 20.831 6.33704 21.25 6.51663C21.6773 6.70521 22.1513 6.76146 22.6108 6.67813C23.0704 6.59481 23.4945 6.37572 23.8283 6.04913L23.9133 5.96413C24.1765 5.70069 24.489 5.49171 24.8329 5.34912C25.1769 5.20654 25.5456 5.13315 25.9179 5.13315C26.2903 5.13315 26.659 5.20654 27.0029 5.34912C27.3469 5.49171 27.6594 5.70069 27.9225 5.96413C28.1859 6.22727 28.3949 6.53975 28.5375 6.88371C28.6801 7.22767 28.7535 7.59637 28.7535 7.96871C28.7535 8.34105 28.6801 8.70975 28.5375 9.05371C28.3949 9.39767 28.1859 9.71015 27.9225 9.97329L27.8375 10.0583C27.5109 10.3922 27.2918 10.8162 27.2085 11.2758C27.1252 11.7354 27.1814 12.2093 27.37 12.6366V12.75C27.5496 13.169 27.8478 13.5263 28.2278 13.778C28.6079 14.0297 29.0533 14.1648 29.5092 14.1666H29.75C30.5015 14.1666 31.2221 14.4651 31.7535 14.9965C32.2848 15.5278 32.5833 16.2485 32.5833 17C32.5833 17.7514 32.2848 18.4721 31.7535 19.0034C31.2221 19.5348 30.5015 19.8333 29.75 19.8333H29.6225C29.1666 19.8351 28.7213 19.9702 28.3412 20.2219C27.9611 20.4736 27.6629 20.831 27.4833 21.25V21.25Z" stroke="#C0C0C0" stroke-Width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_15_15">
<rect width="34" height="34" fill="white"/>
</clipPath>
</defs>
</svg>
</button>


<div className="modal_form   "   style={  open_m? {transform: 'translateX(0px)'} :{}}>
        <form action=""    >
    <input type="file" />
    <input type="text" />
    <input type="number" />

    <button>add local</button>

        </form>

</div>
    </footer>
  )
}
