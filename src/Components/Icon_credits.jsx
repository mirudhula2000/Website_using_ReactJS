import React from 'react'
import './Icon_credits.css'
import home_logo from '../Assets/home_logo.png'


const IconCredits = () => {
      const attribution=[
            {id:1,credit:<a href="https://www.freepik.com/icon/salad_2515263#fromView=search&page=1&position=21&uuid=14b6d996-8267-4c41-aa7c-18a2abbcf774">Icon by Freepik</a>},
            {id:2,credit:<a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=food&query=food&type=icon">Icon by Freepik</a>},
            {id:3,credit:<a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=indian+food&query=indian+food&type=icon">Icon by Freepik</a>},
            {id:4,credit:<a href="https://www.flaticon.com/free-icons/tick" title="tick icons">Tick icons created by Octopocto - Flaticon</a>},
            {id:5,credit:<a href="https://www.flaticon.com/free-icons/wrong" title="wrong icons">Wrong icons created by Ivanny - Flaticon</a>}
      ]
  return (
      <div className='icon_credit_container'>
      <div className='icon_attribution'>
            <h1>Icon Attributes</h1>
      {
            attribution.map((attribution)=>(
                  <ul key={attribution.id}>
                        <li>{attribution.credit}</li>
                  </ul>
            ))
      }
      <a href='/'><img className='home_logo' src={home_logo} alt="home_logo"/></a>
      </div>

      
      </div>
  )
}

export default IconCredits