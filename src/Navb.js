import React , {useState, useEffect} from 'react';
import './Navb.css'

function Navb() {
    const [show, handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll" , ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }
            else{
                handleShow(false)
            }
        });
        return ()=>{
            window.removeEventListener('scroll');
        }
    },[]);
  
    return (
  <div className = {`nav ${show && 'nav_black'}`}>
      <img
      className = 'nav_logo'
      src = 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
      alt = 'Netflix'
      >
      </img>
      <img
      className = 'nav_logo logo1'
      src = 'https://icon-library.com/images/signup-icon/signup-icon-10.jpg'
      alt = 'Signup' 
      ></img>
  </div>
  );
}

export default Navb;
