import React from 'react'
import './Div_info.css'

const Divinfo = () => {
      
      const cuisines = [
            { id: 1, title: "North-Indian" ,info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quas dolore. ",path:"/northindian" },
            { id: 2, title: "South-Indian",info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quas dolore.",path:"/southindian" },
            { id: 3, title: "Italian",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quas dolore. ",path:'/italian' },
            { id: 4, title: "Mediterranean",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quas dolore. ",path:'/mediterranean' },
            { id: 5, title: "Chinese",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quas dolore. ",path:'/chinese' },
            { id: 6, title: "Japanese",info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quas dolore. ",path:'/japanese' },
      ]
     

     
      return (
            <>
            {cuisines.map((cuisines)=>(
                  <div  key={cuisines.id}   className='info_container'>
                        <div className='overlay'>
                              <h2>{cuisines.title}</h2>
                        </div>
                        <div className='info'>
                              <p className='info_head'>{cuisines.title}</p>
                              <p>{cuisines.info}</p>
                             <a href={cuisines.path}><button>Learn More...</button></a>
                             
                        </div>
                  </div>
            ))}
            
            </>
           
      )
}

export default Divinfo