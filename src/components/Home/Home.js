import React from 'react'
import Faqs from './Faqs'

import Forhad from './forhad.jpg'
import './Home.css'
import Toggle from './Toggle'
const Home = () => {
  return (
    <section>
      <div className='container'> 
      <div className='row'>
            <div className='col-6'>
                <h4>Hi, This is</h4>
                <h2>Forhad Hossen</h2>
                <p>Frontend Developer</p>
                 <a href='#' className='btn'>Hire Me</a>
            </div>
            <div className='col-6'>
                <img src={Forhad} alt="Forhad Image" />
            </div>
      </div>
      <h2 style={{textAlign:"center",fontSize:'3rem',padding:'3rem 0'}}>React Js Toggle</h2>
      <div className='grid'>
      <Toggle />
      <Toggle />
      <Toggle />
      </div>
      <div >
      <h2 style={{textAlign:"center",fontSize:'3rem',padding:'3rem 0'}}>React Js FAQ</h2>
        <Faqs />
      </div>
      </div>
    </section>
  )
}

export default Home
