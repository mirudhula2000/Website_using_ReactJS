import React, { useRef } from 'react'
import './Home.css'




const Home = () => {
      const ref=useRef();
      const popup_display=()=>{
            ref.current.style.display="block";
      }
      const popup_display_out=()=>{
            ref.current.style.display="none";
      }
      
      return (
            <>
                  <div className='home_page'>
                        <div className='home_info'>
                              <h3 className='home_title'>Cuisine-Info</h3>
                              <a href='/menu'><button>Learn Cuisines</button></a>
                              <a href='/quizmenu'><button>Take a Quiz</button></a>
                              
                        </div>
                        <div ref={ref} className="contact_info">
                              <button onClick={popup_display_out}>X</button>
                              <p>Email: Cuisineinfo@outlook.com</p>
                              <p>Mobile: 9871234567</p>
                        </div>
                        <button  onClick={popup_display} className='contact_btn'>Contact</button>
                  </div>


            </>
      )
}

export default Home