import React from 'react'
import './Cuisines.css'
import home_logo from '../../Assets/home_logo.png'
import Divinfo from '../../Components/Div_info'

const Cuisines = () => {
  return (
    <div className='main'>
      <div className='container'>
        <div className='heading'>
          <h1 className='main_title'>CUISINES</h1>
        </div>
        <div className='content'>
          <Divinfo/>
        </div>
      </div>
      <a href='/'><img className='home_logo' src={home_logo} alt="home_logo"/></a>
    </div>
  )
}

export default Cuisines